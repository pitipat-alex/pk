/* ===========================================================================
   pk · Quiz Live — quiz-live.js
   ----------------------------------------------------------------------------
   Real-time Kahoot-style multiplayer quiz
   - Host mode: create session, show QR, control flow
   - Player mode: join via PIN, answer with buttons
   - Realtime sync via Supabase
   =========================================================================== */
(function () {
  'use strict';

  // Supabase config
  const SUPABASE_URL      = 'https://bxlyctricjayindvcfjo.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHljdHJpY2pheWluZHZjZmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDE2NTAsImV4cCI6MjA5MzAxNzY1MH0.8b-UqK-SW1dOyZ0WhAC5NBns8lAe1kTgn2xJMiHvaRA';

  const QUIZZES_KEY = 'pk_quizzes_v1';
  const CLIENT_ID_KEY = 'pk_client_id_v1';
  const PLAYER_NAME_KEY = 'pk_player_name_v1';

  // 4 Kahoot-style colors
  const OPTION_COLORS = [
    { bg: '#E63946', label: 'A', shape: '▲' },
    { bg: '#1976D2', label: 'B', shape: '◆' },
    { bg: '#F4A300', label: 'C', shape: '●' },
    { bg: '#2A9D8F', label: 'D', shape: '■' },
    { bg: '#7B2CBF', label: 'E', shape: '★' },
    { bg: '#E07856', label: 'F', shape: '✚' },
  ];

  // ---------- State --------------------------------------------------------
  const state = {
    role: null,             // 'host' | 'player'
    sb: null,
    session: null,          // current session row
    player: null,           // current player row (player mode)
    quiz: null,             // current quiz data
    players: [],            // list of players in lobby/game
    answers: [],            // list of answers for current question (host)
    timer: null,
    timerSec: 20,
    questionStartTs: 0,
    channels: [],           // realtime channel handles
    hasAnswered: false,     // player: did I answer current question?
  };

  // ---------- DOM helpers --------------------------------------------------
  const $ = (id) => document.getElementById(id);

  // ---------- Helpers ------------------------------------------------------
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function uuid() {
    return 'id_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  }
  function generatePin() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }
  function getOrCreateClientId() {
    try {
      let id = localStorage.getItem(CLIENT_ID_KEY);
      if (!id) {
        id = uuid();
        localStorage.setItem(CLIENT_ID_KEY, id);
      }
      return id;
    } catch (e) {
      return uuid();
    }
  }
  let toastTimer = null;
  function showToast(msg, type = 'info') {
    const t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show ' + type;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.className = 'toast'; }, 2500);
  }

  function startClock() {
    const el = $('clock');
    if (!el) return;
    const tick = () => {
      const d = new Date();
      el.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    };
    tick();
    setInterval(tick, 30000);
  }

  // ---------- Screen switching ---------------------------------------------
  function showScreen(id) {
    document.querySelectorAll('.qlive-screen').forEach(el => el.style.display = 'none');
    const s = $(id);
    if (s) s.style.display = '';
    window.scrollTo(0, 0);
  }

  function enterFullscreen() {
    try {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    } catch (e) {}
  }
  function exitFullscreen() {
    try {
      if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
      else if (document.webkitFullscreenElement && document.webkitExitFullscreen) document.webkitExitFullscreen();
    } catch (e) {}
  }

  function loadQuizzes() {
    try {
      const raw = localStorage.getItem(QUIZZES_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) { return []; }
  }

  // ===========================================================================
  // SUPABASE INIT
  // ===========================================================================
  function initSupabase() {
    if (!window.supabase || !window.supabase.createClient) {
      throw new Error('Supabase library not loaded');
    }
    state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false },
    });
  }

  function cleanupChannels() {
    state.channels.forEach(ch => {
      try { state.sb.removeChannel(ch); } catch (e) {}
    });
    state.channels = [];
  }

  // ===========================================================================
  // HOST FLOW
  // ===========================================================================
  function showHostPick() {
    const list = $('hostQuizList');
    const quizzes = loadQuizzes();

    if (quizzes.length === 0) {
      list.innerHTML = `
        <div class="empty-msg">
          ยังไม่มี Quiz — ไปสร้างก่อนที่หน้า <a href="quiz.html">Quiz</a>
        </div>
      `;
      showScreen('screenHostPick');
      return;
    }

    list.innerHTML = quizzes.map(q => {
      const qCount = (q.questions || []).length;
      return `
        <div class="quiz-card host-pick-card" data-id="${q.id}">
          <div class="quiz-card-body">
            <h3 class="qc-title">${escapeHtml(q.title || 'ไม่มีชื่อ')}</h3>
            <p class="qc-desc">${escapeHtml(q.description || '')}</p>
            <div class="qc-meta">
              <span class="qc-meta-item">📋 ${qCount} ข้อ</span>
              <span class="qc-meta-item">⏱️ ${q.timer || 20}s/ข้อ</span>
            </div>
          </div>
          <div class="quiz-card-actions">
            <button class="qc-btn qc-btn-play" type="button" data-id="${q.id}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <span>เปิดห้อง</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('[data-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.dataset.id;
        const quiz = quizzes.find(q => q.id === id);
        if (quiz) hostCreateSession(quiz);
      });
    });

    showScreen('screenHostPick');
  }

  async function hostCreateSession(quiz) {
    if (!quiz.questions || quiz.questions.length === 0) {
      showToast('Quiz นี้ไม่มีคำถาม', 'error'); return;
    }
    showToast('กำลังเปิดห้อง...', 'info');

    const hostId = uuid();
    let pin = generatePin();
    let attempt = 0;

    // Try to insert (handle pin collision)
    while (attempt < 5) {
      const { data, error } = await state.sb
        .from('quiz_sessions')
        .insert([{
          pin,
          host_id: hostId,
          quiz_data: quiz,
          state: 'lobby',
          current_q: 0,
        }])
        .select();
      if (!error && data && data[0]) {
        state.session = data[0];
        state.quiz = quiz;
        state.role = 'host';
        await hostShowLobby();
        return;
      }
      // Pin collision — try again
      pin = generatePin();
      attempt++;
    }
    showToast('สร้างห้องไม่สำเร็จ ลองใหม่', 'error');
  }

  async function hostShowLobby() {
    $('hostLobbyQuizTitle').textContent = state.quiz.title;
    $('hostLobbyPin').textContent = state.session.pin;
    $('hostLobbyCount').textContent = '0';
    $('hostLobbyPlayers').innerHTML = '<div class="lobby-waiting">รอผู้เล่น...</div>';
    $('hostLobbyStart').disabled = true;

    // Generate QR with join URL (use qrserver.com API — no library needed, bulletproof)
    const joinUrl = `${location.origin}${location.pathname}?join=${state.session.pin}`;
    const qrEl = $('hostLobbyQR');
    const encodedUrl = encodeURIComponent(joinUrl);
    qrEl.innerHTML = `
      <img class="qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodedUrl}&bgcolor=ffffff&color=1a1a2e&qzone=2&margin=10"
           alt="QR Code" width="240" height="240"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
      <div class="qr-fallback" style="display:none;">QR ไม่โหลด — ใช้ PIN</div>
    `;

    // Show short URL hint for manual entry
    const urlHintEl = document.getElementById('hostLobbyUrlHint');
    if (urlHintEl) {
      const shortUrl = `${location.host}${location.pathname.replace(/\/[^/]*$/, '')}/quiz-live.html`;
      urlHintEl.textContent = shortUrl;
    }

    showScreen('screenHostLobby');
    enterFullscreen();

    // Subscribe to player joins
    subscribeToPlayers();
    // Initial fetch
    await refreshPlayers();
  }

  async function refreshPlayers() {
    const { data } = await state.sb
      .from('quiz_players')
      .select('*')
      .eq('session_id', state.session.id)
      .order('joined_at', { ascending: true });
    state.players = data || [];
    renderHostLobbyPlayers();
  }

  function renderHostLobbyPlayers() {
    const list = $('hostLobbyPlayers');
    $('hostLobbyCount').textContent = state.players.length;
    if (state.players.length === 0) {
      list.innerHTML = '<div class="lobby-waiting">รอผู้เล่น...</div>';
      $('hostLobbyStart').disabled = true;
    } else {
      list.innerHTML = state.players.map((p, i) => `
        <div class="player-chip" style="animation-delay: ${i * 50}ms">
          ${escapeHtml(p.name)}
        </div>
      `).join('');
      $('hostLobbyStart').disabled = false;
    }
  }

  function subscribeToPlayers() {
    cleanupChannels();
    const ch = state.sb
      .channel(`session:${state.session.id}:players`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'quiz_players',
          filter: `session_id=eq.${state.session.id}` },
        () => { refreshPlayers(); }
      )
      .subscribe();
    state.channels.push(ch);
  }

  // ---------- Host: start the game ------------------------------------------
  async function hostStartGame() {
    if (state.players.length === 0) return;

    cleanupChannels();
    state.session.current_q = 0;

    await hostStartQuestion(0);
    subscribeToAnswers();
  }

  async function hostStartQuestion(qIdx) {
    const q = state.quiz.questions[qIdx];
    if (!q) { hostShowEnd(); return; }

    state.questionStartTs = Date.now();
    const startedAt = new Date().toISOString();

    // Update session in DB
    const { error } = await state.sb
      .from('quiz_sessions')
      .update({
        state: 'playing',
        current_q: qIdx,
        question_started_at: startedAt,
      })
      .eq('id', state.session.id);

    if (error) { showToast('Error: ' + error.message, 'error'); return; }

    state.session.current_q = qIdx;
    state.session.state = 'playing';
    state.session.question_started_at = startedAt;
    state.answers = [];

    // Render game UI
    showScreen('screenGame');
    $('gameHostView').style.display = '';
    $('gamePlayerView').style.display = 'none';

    $('gameProgress').textContent = `${qIdx + 1} / ${state.quiz.questions.length}`;
    $('gameQText').textContent = q.text;
    if (q.image) {
      $('gameImage').src = q.image;
      $('gameImageWrap').style.display = '';
    } else {
      $('gameImageWrap').style.display = 'none';
    }

    // Render options
    const optsEl = $('gameOptions');
    optsEl.innerHTML = q.options.map((opt, idx) => {
      const c = OPTION_COLORS[idx] || OPTION_COLORS[0];
      return `
        <div class="game-opt" data-idx="${idx}" style="--opt-color: ${c.bg};">
          <span class="go-shape">${c.shape}</span>
          <span class="go-text">${escapeHtml(opt)}</span>
        </div>
      `;
    }).join('');

    // Reset stats
    $('gsAnsweredNum').textContent = '0';
    $('gsTotalNum').textContent = state.players.length;
    $('gameStats').style.display = '';
    $('gameExplain').style.display = 'none';
    $('gameLeaderboard').style.display = 'none';
    $('btnHostReveal').style.display = '';
    const mode = (state.quiz && state.quiz.revealMode) || 'after_question';
    $('btnHostReveal').textContent = mode === 'after_question' ? 'เฉลย' : 'ข้ามไปเลย';
    $('btnHostNext').style.display = 'none';

    // Start timer
    state.timerSec = state.quiz.timer || 20;
    $('gameTimerNum').textContent = state.timerSec;
    $('gameTimerBar').style.width = '100%';
    $('gameTimerBar').style.transition = 'none';
    setTimeout(() => {
      $('gameTimerBar').style.transition = `width ${state.timerSec}s linear`;
      $('gameTimerBar').style.width = '0%';
    }, 50);

    if (state.timer) clearInterval(state.timer);
    state.timer = setInterval(() => {
      state.timerSec--;
      $('gameTimerNum').textContent = Math.max(0, state.timerSec);
      if (state.timerSec <= 0) {
        clearInterval(state.timer);
        state.timer = null;
        if (state.session.state === 'playing') hostRevealAnswer();
      }
    }, 1000);
  }

  function subscribeToAnswers() {
    const ch = state.sb
      .channel(`session:${state.session.id}:answers`)
      .on('postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'quiz_answers',
          filter: `session_id=eq.${state.session.id}` },
        (payload) => {
          if (payload.new && payload.new.question_idx === state.session.current_q) {
            state.answers.push(payload.new);
            $('gsAnsweredNum').textContent = state.answers.length;
            // Auto-reveal if everyone answered
            if (state.answers.length >= state.players.length && state.session.state === 'playing') {
              setTimeout(() => {
                if (state.session.state === 'playing') hostRevealAnswer();
              }, 500);
            }
          }
        }
      )
      .subscribe();
    state.channels.push(ch);
  }

  async function hostRevealAnswer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }

    state.session.state = 'reveal';
    await state.sb
      .from('quiz_sessions')
      .update({ state: 'reveal' })
      .eq('id', state.session.id);

    const mode = (state.quiz && state.quiz.revealMode) || 'after_question';
    const q = state.quiz.questions[state.session.current_q];

    if (mode === 'after_question') {
      // Show correct answer + explanation
      const opts = $('gameOptions').querySelectorAll('.game-opt');
      opts.forEach(el => {
        const idx = parseInt(el.dataset.idx);
        if (idx === q.correct) el.classList.add('correct');
        else el.classList.add('dim');
      });
      if (q.explain) {
        $('gameExplain').textContent = '💡 ' + q.explain;
        $('gameExplain').style.display = '';
      }
      // Show mini leaderboard
      await refreshPlayerScores();
      renderMiniLeaderboard();
    }
    // For modes 'after_all' / 'never' — no answer reveal, just transition
    // (state is still 'reveal' in DB so players know to wait for next)

    $('btnHostReveal').style.display = 'none';
    $('btnHostNext').style.display = '';
  }

  async function refreshPlayerScores() {
    const { data } = await state.sb
      .from('quiz_players')
      .select('*')
      .eq('session_id', state.session.id)
      .order('score', { ascending: false });
    state.players = data || [];
  }

  function renderMiniLeaderboard() {
    const top5 = state.players.slice(0, 5);
    if (top5.length === 0) return;
    $('glmList').innerHTML = top5.map((p, i) => `
      <div class="glm-row">
        <span class="glm-rank">${i + 1}</span>
        <span class="glm-name">${escapeHtml(p.name)}</span>
        <span class="glm-score">${p.score}</span>
      </div>
    `).join('');
    $('gameLeaderboard').style.display = '';
  }

  async function hostNextQuestion() {
    const next = state.session.current_q + 1;
    if (next >= state.quiz.questions.length) {
      await hostShowEnd();
    } else {
      await hostStartQuestion(next);
    }
  }

  async function hostShowEnd() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }

    await state.sb
      .from('quiz_sessions')
      .update({ state: 'ended', ended_at: new Date().toISOString() })
      .eq('id', state.session.id);

    state.session.state = 'ended';

    await refreshPlayerScores();
    renderEndScreen();
  }

  function renderEndScreen() {
    $('endSubtitle').textContent = `${state.quiz.title} · ${state.players.length} ผู้เล่น`;

    const podiumEl = $('podium');
    const top3 = state.players.slice(0, 3);
    if (top3.length === 0) {
      podiumEl.innerHTML = '<div class="empty-msg">ไม่มีผู้เล่น</div>';
    } else {
      const order = top3.length >= 3 ? [1, 0, 2] : (top3.length >= 2 ? [1, 0] : [0]); // 2nd left, 1st middle, 3rd right
      podiumEl.innerHTML = order.map(idx => {
        const p = top3[idx];
        if (!p) return '';
        const place = idx + 1;
        const emoji = ['🥇','🥈','🥉'][idx];
        return `
          <div class="podium-item podium-${place}">
            <div class="podium-emoji">${emoji}</div>
            <div class="podium-name">${escapeHtml(p.name)}</div>
            <div class="podium-score">${p.score}</div>
          </div>
        `;
      }).join('');
    }

    const fullEl = $('fullLeaderboard');
    fullEl.innerHTML = state.players.map((p, i) => `
      <div class="lb-row">
        <span class="lb-rank">${i + 1}</span>
        <span class="lb-name">${escapeHtml(p.name)}</span>
        <span class="lb-score">${p.score}</span>
      </div>
    `).join('');

    // Render review section for after_all mode
    renderEndReview();

    showScreen('screenEnd');
  }

  function renderEndReview() {
    const reviewEl = document.getElementById('endReview');
    if (!reviewEl) return;
    const mode = (state.quiz && state.quiz.revealMode) || 'after_question';
    if (mode !== 'after_all' || !state.quiz || !state.quiz.questions) {
      reviewEl.style.display = 'none';
      reviewEl.innerHTML = '';
      return;
    }

    let html = '<div class="er-title">📋 เฉลยทุกข้อ</div>';
    html += '<div class="end-review">';
    state.quiz.questions.forEach((q, idx) => {
      const correctOpt = q.options[q.correct] || '';
      html += `
        <div class="end-review-item">
          <div class="er-num">${idx + 1}</div>
          <div class="er-body">
            <div class="er-q">${escapeHtml(q.text)}</div>
            <div class="er-correct">✓ ${escapeHtml(correctOpt)}</div>
            ${q.explain ? `<div class="er-explain">💡 ${escapeHtml(q.explain)}</div>` : ''}
          </div>
        </div>
      `;
    });
    html += '</div>';
    reviewEl.innerHTML = html;
    reviewEl.style.display = '';
  }

  function exitGame() {
    cleanupChannels();
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    const wasHost = state.role === 'host';
    state.session = null;
    state.player = null;
    state.quiz = null;
    state.role = null;
    exitFullscreen();
    // Host → back to quiz.html (their library)
    // Player → back to home (index)
    window.location.href = wasHost ? 'quiz.html' : 'index.html';
  }

  // ===========================================================================
  // PLAYER FLOW
  // ===========================================================================
  function showJoinScreen(prefilledPin) {
    $('joinError').textContent = '';
    if (prefilledPin) {
      $('joinPinInput').value = prefilledPin;
    }
    // Restore previous name
    try {
      const lastName = localStorage.getItem(PLAYER_NAME_KEY);
      if (lastName) $('joinNameInput').value = lastName;
    } catch (e) {}
    showScreen('screenJoin');
    setTimeout(() => {
      ($('joinPinInput').value ? $('joinNameInput') : $('joinPinInput')).focus();
    }, 100);
  }

  async function doJoin() {
    const pin = $('joinPinInput').value.trim();
    const name = $('joinNameInput').value.trim();
    const errEl = $('joinError');
    errEl.textContent = '';

    if (!pin || pin.length !== 6 || !/^\d{6}$/.test(pin)) {
      errEl.textContent = 'PIN ต้องเป็นตัวเลข 6 หลัก';
      return;
    }
    if (!name) { errEl.textContent = 'ใส่ชื่อเล่น'; return; }
    if (name.length > 20) { errEl.textContent = 'ชื่อยาวเกิน 20 ตัวอักษร'; return; }

    const btn = $('btnDoJoin');
    btn.disabled = true;
    btn.textContent = 'กำลังเข้า...';

    try {
      // Find session
      const { data: sessions, error } = await state.sb
        .from('quiz_sessions')
        .select('*')
        .eq('pin', pin)
        .limit(1);
      if (error) throw error;
      if (!sessions || sessions.length === 0) {
        errEl.textContent = 'ไม่พบห้อง — เช็ค PIN อีกครั้ง';
        btn.disabled = false;
        btn.textContent = 'เข้าร่วม';
        return;
      }
      const session = sessions[0];
      if (session.state === 'ended') {
        errEl.textContent = 'ห้องนี้จบไปแล้ว';
        btn.disabled = false;
        btn.textContent = 'เข้าร่วม';
        return;
      }

      // Save name for next time
      try { localStorage.setItem(PLAYER_NAME_KEY, name); } catch (e) {}

      const clientId = getOrCreateClientId();

      // Try to find existing player (reconnect)
      const { data: existing } = await state.sb
        .from('quiz_players')
        .select('*')
        .eq('session_id', session.id)
        .eq('client_id', clientId)
        .limit(1);

      let player;
      if (existing && existing.length > 0) {
        // Reconnect — update name if changed
        const { data: updated } = await state.sb
          .from('quiz_players')
          .update({ name })
          .eq('id', existing[0].id)
          .select();
        player = updated && updated[0];
      } else {
        const { data: created, error: insErr } = await state.sb
          .from('quiz_players')
          .insert([{
            session_id: session.id,
            name,
            client_id: clientId,
            score: 0,
          }])
          .select();
        if (insErr) {
          errEl.textContent = 'เข้าห้องไม่สำเร็จ: ' + insErr.message;
          btn.disabled = false;
          btn.textContent = 'เข้าร่วม';
          return;
        }
        player = created && created[0];
      }

      state.session = session;
      state.player = player;
      state.quiz = session.quiz_data;
      state.role = 'player';

      btn.disabled = false;
      btn.textContent = 'เข้าร่วม';

      // Subscribe to session changes (state, current_q)
      subscribeToSession();

      if (session.state === 'lobby') {
        showPlayerLobby();
      } else {
        showPlayerGame();
      }
    } catch (e) {
      errEl.textContent = 'Error: ' + e.message;
      btn.disabled = false;
      btn.textContent = 'เข้าร่วม';
    }
  }

  function showPlayerLobby() {
    $('playerLobbyName').textContent = state.player.name;
    $('playerLobbyCount').textContent = '...';
    showScreen('screenPlayerLobby');
    refreshPlayerLobbyCount();
  }

  async function refreshPlayerLobbyCount() {
    const { data } = await state.sb
      .from('quiz_players')
      .select('id', { count: 'exact' })
      .eq('session_id', state.session.id);
    $('playerLobbyCount').textContent = (data || []).length;
  }

  function subscribeToSession() {
    cleanupChannels();
    // Listen to session state changes
    const sessCh = state.sb
      .channel(`player:session:${state.session.id}`)
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'quiz_sessions',
          filter: `id=eq.${state.session.id}` },
        (payload) => {
          if (!payload.new) return;
          state.session = payload.new;
          handleSessionUpdate();
        }
      )
      .subscribe();

    // Listen to player count changes (lobby)
    const plCh = state.sb
      .channel(`player:players:${state.session.id}`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'quiz_players',
          filter: `session_id=eq.${state.session.id}` },
        () => { refreshPlayerLobbyCount(); }
      )
      .subscribe();

    state.channels.push(sessCh, plCh);
  }

  function handleSessionUpdate() {
    const s = state.session.state;
    if (s === 'playing') {
      // New question started
      state.hasAnswered = false;
      showPlayerGame();
    } else if (s === 'reveal') {
      // Host revealed — show result
      showPlayerResult();
    } else if (s === 'ended') {
      showPlayerEnd();
    }
  }

  function showPlayerGame() {
    showScreen('screenGame');
    $('gameHostView').style.display = 'none';
    $('gamePlayerView').style.display = '';

    $('gphName').textContent = state.player.name;
    $('gphScoreNum').textContent = state.player.score || 0;
    $('pqiProgress').textContent = `${state.session.current_q + 1} / ${state.quiz.questions.length}`;

    state.hasAnswered = false;
    $('playerResult').style.display = 'none';

    const q = state.quiz.questions[state.session.current_q];
    if (!q) return;

    const optsEl = $('playerOptions');
    optsEl.innerHTML = q.options.map((opt, idx) => {
      const c = OPTION_COLORS[idx] || OPTION_COLORS[0];
      return `
        <button class="player-opt" data-idx="${idx}" style="--opt-color: ${c.bg};" type="button">
          <span class="po-shape">${c.shape}</span>
          <span class="po-letter-mini">${c.label}</span>
        </button>
      `;
    }).join('');

    optsEl.querySelectorAll('.player-opt').forEach(el => {
      el.addEventListener('click', () => {
        if (state.hasAnswered) return;
        const idx = parseInt(el.dataset.idx);
        playerSubmitAnswer(idx);
        // Visual feedback
        optsEl.querySelectorAll('.player-opt').forEach(b => {
          if (b === el) b.classList.add('selected');
          else b.classList.add('not-selected');
        });
      });
    });

    $('pqiStatus').textContent = 'ดูคำถามที่จอใหญ่ → กดสีที่คิดว่าถูก';
  }

  async function playerSubmitAnswer(answerIdx) {
    if (state.hasAnswered) return;
    state.hasAnswered = true;

    const q = state.quiz.questions[state.session.current_q];
    const isCorrect = answerIdx === q.correct;

    // Calculate points (Kahoot-style: faster = more points)
    let points = 0;
    if (isCorrect) {
      const startTs = state.session.question_started_at
        ? new Date(state.session.question_started_at).getTime()
        : Date.now();
      const elapsedMs = Date.now() - startTs;
      const timerMs = (state.quiz.timer || 20) * 1000;
      const timeFactor = Math.max(0, 1 - (elapsedMs / timerMs / 2));  // up to 50% bonus
      points = Math.round(500 + 500 * timeFactor);  // 500-1000
    }

    const startTs = state.session.question_started_at
      ? new Date(state.session.question_started_at).getTime()
      : Date.now();
    const timeTakenMs = Date.now() - startTs;

    try {
      // Insert answer
      await state.sb
        .from('quiz_answers')
        .insert([{
          session_id: state.session.id,
          player_id: state.player.id,
          question_idx: state.session.current_q,
          answer_idx: answerIdx,
          is_correct: isCorrect,
          points,
          time_taken_ms: timeTakenMs,
        }]);

      // Update player score
      const newScore = (state.player.score || 0) + points;
      await state.sb
        .from('quiz_players')
        .update({ score: newScore })
        .eq('id', state.player.id);
      state.player.score = newScore;

      $('pqiStatus').textContent = '✓ ส่งคำตอบแล้ว — รอเฉลย...';
    } catch (e) {
      showToast('ส่งคำตอบไม่สำเร็จ', 'error');
      state.hasAnswered = false;
    }
  }

  async function showPlayerResult() {
    const mode = (state.quiz && state.quiz.revealMode) || 'after_question';

    // Refresh own answer
    const { data } = await state.sb
      .from('quiz_answers')
      .select('*')
      .eq('session_id', state.session.id)
      .eq('player_id', state.player.id)
      .eq('question_idx', state.session.current_q)
      .limit(1);

    const myAnswer = data && data[0];

    $('playerResult').style.display = '';

    if (mode === 'after_question') {
      // Show correct/wrong + points (Kahoot style)
      if (!myAnswer) {
        $('prEmoji').textContent = '😅';
        $('prText').textContent = 'ตอบไม่ทัน!';
        $('prPoints').textContent = '+0';
        $('prPoints').className = 'pr-points';
      } else if (myAnswer.is_correct) {
        $('prEmoji').textContent = '🎉';
        $('prText').textContent = 'ถูกต้อง!';
        $('prPoints').textContent = '+' + myAnswer.points + ' คะแนน';
        $('prPoints').className = 'pr-points pos';
      } else {
        $('prEmoji').textContent = '❌';
        $('prText').textContent = 'ผิด';
        $('prPoints').textContent = '+0';
        $('prPoints').className = 'pr-points';
      }
    } else {
      // Modes 'after_all' / 'never' — don't show result, just confirm submission
      if (!myAnswer) {
        $('prEmoji').textContent = '⏰';
        $('prText').textContent = 'ตอบไม่ทัน';
        $('prPoints').textContent = '';
      } else {
        $('prEmoji').textContent = '✓';
        $('prText').textContent = 'ส่งคำตอบแล้ว';
        $('prPoints').textContent = mode === 'after_all' ? 'รอเฉลยตอนจบเกม...' : '';
      }
      $('prPoints').className = 'pr-points';
    }

    // Refresh score (always — but score updates may be hidden in mode 'never')
    const { data: pData } = await state.sb
      .from('quiz_players')
      .select('score')
      .eq('id', state.player.id)
      .limit(1);
    if (pData && pData[0]) {
      state.player.score = pData[0].score;
      // Hide score in 'never' mode? No — Kahoot shows score buildup. Keep visible.
      $('gphScoreNum').textContent = state.player.score;
    }

    $('pqiStatus').textContent = '⏳ รอ Host ไปข้อถัดไป...';
  }

  async function showPlayerEnd() {
    cleanupChannels();
    // Get all players for leaderboard
    const { data } = await state.sb
      .from('quiz_players')
      .select('*')
      .eq('session_id', state.session.id)
      .order('score', { ascending: false });
    state.players = data || [];

    // Find my rank
    const myRank = state.players.findIndex(p => p.id === state.player.id);

    $('endSubtitle').textContent = `อันดับของคุณ: #${myRank + 1} จาก ${state.players.length}`;

    const podiumEl = $('podium');
    const top3 = state.players.slice(0, 3);
    const order = top3.length >= 3 ? [1, 0, 2] : (top3.length >= 2 ? [1, 0] : [0]);
    podiumEl.innerHTML = order.map(idx => {
      const p = top3[idx];
      if (!p) return '';
      const place = idx + 1;
      const emoji = ['🥇','🥈','🥉'][idx];
      const isMe = p.id === state.player.id;
      return `
        <div class="podium-item podium-${place} ${isMe ? 'is-me' : ''}">
          <div class="podium-emoji">${emoji}</div>
          <div class="podium-name">${escapeHtml(p.name)}${isMe ? ' (คุณ)' : ''}</div>
          <div class="podium-score">${p.score}</div>
        </div>
      `;
    }).join('');

    const fullEl = $('fullLeaderboard');
    fullEl.innerHTML = state.players.map((p, i) => {
      const isMe = p.id === state.player.id;
      return `
        <div class="lb-row ${isMe ? 'is-me' : ''}">
          <span class="lb-rank">${i + 1}</span>
          <span class="lb-name">${escapeHtml(p.name)}${isMe ? ' (คุณ)' : ''}</span>
          <span class="lb-score">${p.score}</span>
        </div>
      `;
    }).join('');

    // Render review for after_all mode
    renderEndReview();

    showScreen('screenEnd');
  }

  // ===========================================================================
  // EVENTS
  // ===========================================================================
  function wireEvents() {
    // Host lobby
    $('hostLobbyExit').addEventListener('click', () => {
      if (confirm('ออกจากห้อง?')) exitGame();
    });
    $('hostLobbyStart').addEventListener('click', () => {
      if ($('hostLobbyStart').disabled) return;
      hostStartGame();
    });

    // Game (host)
    $('gameExitHost').addEventListener('click', () => {
      if (confirm('ออกจากเกม?')) exitGame();
    });
    $('btnHostReveal').addEventListener('click', hostRevealAnswer);
    $('btnHostNext').addEventListener('click', hostNextQuestion);

    // Join (player)
    $('btnDoJoin').addEventListener('click', doJoin);
    $('joinPinInput').addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').substring(0, 6);
    });
    $('joinNameInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); doJoin(); }
    });

    // Player lobby
    $('playerLeave').addEventListener('click', () => {
      if (confirm('ออกจากห้อง?')) exitGame();
    });

    // End screen
    $('btnEndExit').addEventListener('click', exitGame);

    // Keyboard shortcuts (host only, in game)
    document.addEventListener('keydown', (e) => {
      if (state.role !== 'host') return;
      if ($('screenGame').style.display === 'none') return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if ($('btnHostNext').style.display !== 'none') hostNextQuestion();
        else if ($('btnHostReveal').style.display !== 'none') hostRevealAnswer();
      }
    });
  }

  // ===========================================================================
  // INIT
  // ===========================================================================
  async function init() {
    try {
      startClock();
      initSupabase();
      wireEvents();

      // Auto-detect URL params
      const params = new URLSearchParams(location.search);
      const hostSessionId = params.get('host');
      const joinPin = params.get('join');

      if (hostSessionId) {
        // Host mode — fetch session, validate, show lobby
        await initHostFromUrl(hostSessionId);
      } else if (joinPin && /^\d{6}$/.test(joinPin)) {
        showJoinScreen(joinPin);
      } else {
        showJoinScreen();  // empty join form (default)
      }
    } catch (e) {
      console.error('Init failed:', e);
      showToast('Error: ' + e.message, 'error');
    }
  }

  // Initialize host mode from URL (?host=SESSION_ID)
  // Quiz creation now happens in quiz.html — this just resumes an existing session
  async function initHostFromUrl(sessionId) {
    showToast('กำลังโหลดห้อง...', 'info');
    try {
      const { data, error } = await state.sb
        .from('quiz_sessions')
        .select('*')
        .eq('id', sessionId)
        .limit(1);
      if (error) throw error;
      if (!data || !data[0]) {
        showToast('ไม่พบห้อง — อาจถูกลบหรือหมดอายุ', 'error');
        setTimeout(() => { window.location.href = 'quiz.html'; }, 2000);
        return;
      }

      const session = data[0];
      // Verify host_id matches sessionStorage (if stored)
      const expectedHostId = sessionStorage.getItem('pk_host_id_v1');
      if (expectedHostId && expectedHostId !== session.host_id) {
        showToast('ไม่ใช่ host ของห้องนี้', 'error');
        setTimeout(() => { window.location.href = 'quiz.html'; }, 2000);
        return;
      }

      state.session = session;
      state.quiz = session.quiz_data;
      state.role = 'host';

      // Show lobby (or jump to game if already started)
      if (session.state === 'lobby') {
        await hostShowLobby();
      } else if (session.state === 'ended') {
        showToast('ห้องนี้จบไปแล้ว', 'info');
        setTimeout(() => { window.location.href = 'quiz.html'; }, 2000);
      } else {
        // playing/reveal — resume from current question
        await hostShowLobby();
      }
    } catch (e) {
      showToast('โหลดห้องไม่สำเร็จ: ' + e.message, 'error');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
