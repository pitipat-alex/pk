/* ===========================================================================
   pk · Quiz Tool — quiz.js
   ----------------------------------------------------------------------------
   Storage: Supabase (Alex login required via auth.js)
   - CRUD quizzes via Supabase RLS (owner_email = auth.email)
   - Migration from localStorage on first load
   - Play single-screen mode (projector view)
   - "เล่น Live" → creates session in quiz_sessions + redirects to quiz-live.html
   =========================================================================== */
(function () {
  'use strict';

  // Supabase config (mirror of auth.js)
  const SUPABASE_URL      = 'https://bxlyctricjayindvcfjo.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHljdHJpY2pheWluZHZjZmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDE2NTAsImV4cCI6MjA5MzAxNzY1MH0.8b-UqK-SW1dOyZ0WhAC5NBns8lAe1kTgn2xJMiHvaRA';

  const LEGACY_KEY = 'pk_quizzes_v1';                  // old localStorage
  const MIGRATION_FLAG = 'pk_quizzes_migrated_v1';
  const MAX_OPTIONS = 6;

  const OPTION_COLORS = [
    { bg: '#E63946', label: 'A' },
    { bg: '#1976D2', label: 'B' },
    { bg: '#F4A300', label: 'C' },
    { bg: '#2A9D8F', label: 'D' },
    { bg: '#7B2CBF', label: 'E' },
    { bg: '#E07856', label: 'F' },
  ];

  const state = {
    sb: null,
    user: null,
    quizzes: [],
    currentQuiz: null,
    currentQuestionIdx: 0,
    timer: null,
    timerSec: 20,
    score: { correct: 0, total: 0 },
    pendingImage: null,
    editingQIdx: -1,
    isLoading: false,
    isCreatingSession: false,
  };

  const $ = (id) => document.getElementById(id);
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function uuid() {
    return 'q_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  }
  function generatePin() {
    return String(Math.floor(100000 + Math.random() * 900000));
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

  // ===========================================================================
  // SUPABASE INIT (waits for auth.js to be ready)
  // ===========================================================================
  async function initSupabase() {
    // Reuse Supabase client if auth.js exposed it; otherwise create our own
    if (window.supabase && window.supabase.createClient) {
      state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          flowType: 'implicit',
          storageKey: 'sb-bxlyctricjayindvcfjo-auth-token',
        },
      });
    } else {
      throw new Error('Supabase library not loaded');
    }

    // Check current session
    const { data } = await state.sb.auth.getSession();
    if (data && data.session && data.session.user) {
      state.user = data.session.user;
    }

    // Listen for auth changes
    state.sb.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session && session.user) {
        state.user = session.user;
        afterLogin();
      } else if (event === 'SIGNED_OUT') {
        state.user = null;
        state.quizzes = [];
        renderHome();
      }
    });
  }

  async function afterLogin() {
    // Run migration check
    await runMigrationIfNeeded();
    // Load quizzes from Supabase
    await loadFromSupabase();
    renderHome();
  }

  // ===========================================================================
  // STORAGE — Supabase CRUD
  // ===========================================================================
  function dbToLocal(row) {
    // Convert DB row → local quiz object format
    return {
      id: row.id,
      title: row.title,
      description: row.description || '',
      timer: row.timer || 20,
      revealMode: row.reveal_mode || 'after_question',
      questions: row.questions || [],
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }
  function localToDb(quiz, ownerEmail) {
    return {
      owner_email: ownerEmail,
      title: quiz.title,
      description: quiz.description || null,
      timer: quiz.timer || 20,
      reveal_mode: quiz.revealMode || 'after_question',
      questions: quiz.questions || [],
    };
  }

  async function loadFromSupabase() {
    if (!state.user) { state.quizzes = []; return; }
    state.isLoading = true;
    try {
      const { data, error } = await state.sb
        .from('quizzes')
        .select('*')
        .order('updated_at', { ascending: false });
      if (error) throw error;
      state.quizzes = (data || []).map(dbToLocal);
    } catch (e) {
      console.error('Load quizzes failed:', e);
      showToast('โหลด Quiz ไม่สำเร็จ: ' + (e.message || ''), 'error');
      state.quizzes = [];
    } finally {
      state.isLoading = false;
    }
  }

  async function dbCreateQuiz(quiz) {
    const payload = localToDb(quiz, state.user.email);
    const { data, error } = await state.sb
      .from('quizzes')
      .insert([payload])
      .select();
    if (error) throw error;
    return data && data[0] ? dbToLocal(data[0]) : null;
  }
  async function dbUpdateQuiz(quiz) {
    const payload = localToDb(quiz, state.user.email);
    const { data, error } = await state.sb
      .from('quizzes')
      .update(payload)
      .eq('id', quiz.id)
      .select();
    if (error) throw error;
    return data && data[0] ? dbToLocal(data[0]) : null;
  }
  async function dbDeleteQuiz(id) {
    const { error } = await state.sb
      .from('quizzes')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }

  // ===========================================================================
  // MIGRATION — localStorage → Supabase
  // ===========================================================================
  async function runMigrationIfNeeded() {
    let alreadyMigrated = false;
    try { alreadyMigrated = localStorage.getItem(MIGRATION_FLAG) === '1'; } catch (e) {}
    if (alreadyMigrated) return;

    let legacyQuizzes = [];
    try {
      const raw = localStorage.getItem(LEGACY_KEY);
      if (raw) legacyQuizzes = JSON.parse(raw) || [];
    } catch (e) { return; }

    if (!Array.isArray(legacyQuizzes) || legacyQuizzes.length === 0) {
      try { localStorage.setItem(MIGRATION_FLAG, '1'); } catch (e) {}
      return;
    }

    const ok = confirm(
      `📦 พบ Quiz เก่า ${legacyQuizzes.length} ชุดในเครื่องนี้\n\n` +
      `กด OK เพื่อ Upload ขึ้น Cloud (ใช้ได้ทุก device + ไม่หายเมื่อล้าง browser)\n` +
      `กด Cancel เพื่อข้าม (เปลี่ยนใจภายหลังได้)`
    );
    if (!ok) {
      try { localStorage.setItem(MIGRATION_FLAG, '1'); } catch (e) {}
      return;
    }

    showToast('กำลัง upload...', 'info');
    let success = 0, failed = 0;
    for (const q of legacyQuizzes) {
      try {
        await dbCreateQuiz(q);
        success++;
      } catch (e) {
        console.error('Migration fail for quiz:', q.title, e);
        failed++;
      }
    }
    try { localStorage.setItem(MIGRATION_FLAG, '1'); } catch (e) {}

    if (failed === 0) {
      showToast(`✓ Upload สำเร็จ ${success} ชุด`, 'success');
      // Optional: delete legacy
      try { localStorage.removeItem(LEGACY_KEY); } catch (e) {}
    } else {
      showToast(`Upload ${success}/${legacyQuizzes.length} ชุด (${failed} fail — ของเดิมยังอยู่)`, 'error');
    }
  }

  // ===========================================================================
  // MODE SWITCHING
  // ===========================================================================
  function showMode(mode) {
    $('modeHome').style.display = mode === 'home' ? '' : 'none';
    $('modeEditor').style.display = mode === 'editor' ? '' : 'none';
    $('modePlay').style.display = mode === 'play' ? '' : 'none';
    if (mode === 'home') renderHome();
    window.scrollTo(0, 0);
  }

  // ===========================================================================
  // HOME — list quizzes
  // ===========================================================================
  function renderHome() {
    const list = $('quizList');
    const count = $('quizCount');
    count.textContent = state.quizzes.length;

    if (state.isLoading) {
      list.innerHTML = '<div class="loading-msg">⏳ กำลังโหลด...</div>';
      return;
    }

    if (state.quizzes.length === 0) {
      list.innerHTML = '<div class="empty-msg">ยังไม่มี Quiz — กดปุ่ม "สร้าง Quiz ใหม่" 📝</div>';
      return;
    }

    list.innerHTML = state.quizzes.map((q, idx) => {
      const qCount = (q.questions || []).length;
      const desc = q.description ? escapeHtml(q.description) : 'ไม่มีคำอธิบาย';
      return `
        <div class="quiz-card" data-id="${q.id}">
          <div class="quiz-card-body">
            <h3 class="qc-title">${escapeHtml(q.title || 'ไม่มีชื่อ')}</h3>
            <p class="qc-desc">${desc}</p>
            <div class="qc-meta">
              <span class="qc-meta-item">📋 ${qCount} ข้อ</span>
              <span class="qc-meta-item">⏱️ ${q.timer || 20}s/ข้อ</span>
            </div>
          </div>
          <div class="quiz-card-actions">
            <button class="qc-btn qc-btn-live" data-action="live" data-id="${q.id}" type="button" title="เปิดห้อง multiplayer">
              <span>⚡ Live</span>
            </button>
            <button class="qc-btn qc-btn-play" data-action="play" data-id="${q.id}" type="button" title="เล่นเดี่ยว/projector">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <span>เดี่ยว</span>
            </button>
            <button class="qc-btn qc-btn-edit" data-action="edit" data-id="${q.id}" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              <span>แก้</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = el.dataset.action;
        const id = el.dataset.id;
        const quiz = state.quizzes.find(q => q.id === id);
        if (!quiz) return;
        if (action === 'play') startPlay(quiz);
        else if (action === 'edit') startEdit(quiz);
        else if (action === 'live') startLive(quiz);
      });
    });
  }

  // ===========================================================================
  // LIVE — Create session + redirect to quiz-live.html
  // ===========================================================================
  async function startLive(quiz) {
    if (state.isCreatingSession) return;
    if (!quiz.questions || quiz.questions.length === 0) {
      showToast('Quiz นี้ไม่มีคำถาม', 'error'); return;
    }
    state.isCreatingSession = true;
    showToast('กำลังเปิดห้อง...', 'info');

    const hostId = uuid();
    let pin = generatePin();
    let attempt = 0;

    while (attempt < 5) {
      try {
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
        if (error) {
          // Pin collision — retry with new pin
          if (error.code === '23505') {
            pin = generatePin();
            attempt++;
            continue;
          }
          throw error;
        }
        if (data && data[0]) {
          // Save host_id in sessionStorage so quiz-live.html can verify
          try { sessionStorage.setItem('pk_host_id_v1', hostId); } catch (e) {}
          // Redirect to host lobby
          window.location.href = `quiz-live.html?host=${data[0].id}`;
          return;
        }
      } catch (e) {
        console.error('Create session error:', e);
        showToast('เปิดห้องไม่สำเร็จ: ' + (e.message || ''), 'error');
        state.isCreatingSession = false;
        return;
      }
      attempt++;
    }
    state.isCreatingSession = false;
    showToast('สร้าง PIN ไม่สำเร็จ ลองใหม่', 'error');
  }

  // ===========================================================================
  // EDITOR
  // ===========================================================================
  function startEdit(quiz) {
    if (quiz) {
      state.currentQuiz = JSON.parse(JSON.stringify(quiz));
      $('editorTitle').textContent = 'แก้ไข Quiz';
      $('btnDeleteQuiz').style.display = '';
    } else {
      state.currentQuiz = {
        id: null, // null = new (DB will assign UUID)
        title: '',
        description: '',
        timer: 20,
        revealMode: 'after_question',
        questions: [],
      };
      $('editorTitle').textContent = 'สร้าง Quiz ใหม่';
      $('btnDeleteQuiz').style.display = 'none';
    }
    $('quizTitleInput').value = state.currentQuiz.title || '';
    $('quizDescInput').value = state.currentQuiz.description || '';
    $('quizTimerInput').value = state.currentQuiz.timer || 20;
    const mode = state.currentQuiz.revealMode || 'after_question';
    $('quizRevealMode').value = mode;
    document.querySelectorAll('#revealModeGrid .reveal-mode-btn').forEach(b => {
      b.classList.toggle('selected', b.dataset.mode === mode);
    });
    renderQuestionsList();
    showMode('editor');
  }

  function renderQuestionsList() {
    const list = $('questionsList');
    const qs = state.currentQuiz.questions || [];
    $('questionCountDisplay').textContent = qs.length + ' ข้อ';

    if (qs.length === 0) {
      list.innerHTML = '<div class="empty-msg">ยังไม่มีคำถาม — กดปุ่ม "เพิ่มข้อ"</div>';
      return;
    }

    list.innerHTML = qs.map((q, idx) => {
      const correctOpt = q.options[q.correct] || '';
      const hasImage = !!q.image;
      return `
        <div class="q-item" data-idx="${idx}">
          <span class="qi-num">${idx + 1}</span>
          <div class="qi-body">
            <div class="qi-text">${escapeHtml(q.text)}</div>
            <div class="qi-meta">
              ${hasImage ? '<span class="qi-tag">🖼️ มีรูป</span>' : ''}
              <span class="qi-tag">${q.options.length} ตัวเลือก</span>
              <span class="qi-tag qi-tag-correct">✓ ${escapeHtml(correctOpt)}</span>
            </div>
          </div>
          <div class="qi-actions">
            <button class="qi-up" data-action="up" data-idx="${idx}" type="button" aria-label="เลื่อนขึ้น" ${idx === 0 ? 'disabled' : ''}>↑</button>
            <button class="qi-down" data-action="down" data-idx="${idx}" type="button" aria-label="เลื่อนลง" ${idx === qs.length - 1 ? 'disabled' : ''}>↓</button>
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.q-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.qi-actions')) return;
        const idx = parseInt(el.dataset.idx);
        openQuestionModal(idx);
      });
    });
    list.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = el.dataset.action;
        const idx = parseInt(el.dataset.idx);
        const qs = state.currentQuiz.questions;
        if (action === 'up' && idx > 0) {
          [qs[idx], qs[idx-1]] = [qs[idx-1], qs[idx]];
          renderQuestionsList();
        } else if (action === 'down' && idx < qs.length - 1) {
          [qs[idx], qs[idx+1]] = [qs[idx+1], qs[idx]];
          renderQuestionsList();
        }
      });
    });
  }

  // ---------- Question modal --------------------------------------------------
  function openQuestionModal(idx) {
    state.editingQIdx = idx;
    const isEdit = idx >= 0;
    const q = isEdit ? state.currentQuiz.questions[idx] : { text: '', options: ['', ''], correct: 0, explain: '', image: null };

    $('qModalTitle').textContent = isEdit ? 'แก้ไขคำถาม' : 'เพิ่มคำถาม';
    $('qFormText').value = q.text || '';
    $('qFormExplain').value = q.explain || '';
    state.pendingImage = q.image || null;

    if (state.pendingImage) {
      $('imagePreview').src = state.pendingImage;
      $('imagePreviewWrap').style.display = '';
    } else {
      $('imagePreviewWrap').style.display = 'none';
    }
    $('qFormImage').value = '';

    renderOptionsList(q.options || ['', ''], q.correct || 0);
    $('btnDeleteQ').style.display = isEdit ? '' : 'none';
    $('qModalBackdrop').classList.add('show');
    setTimeout(() => $('qFormText').focus(), 200);
  }

  function renderOptionsList(options, correctIdx) {
    const list = $('optionsList');
    list.innerHTML = options.map((opt, idx) => `
      <div class="option-input-row ${idx === correctIdx ? 'is-correct' : ''}" data-idx="${idx}">
        <button class="opt-correct-btn" type="button" data-idx="${idx}" aria-label="ตั้งเป็นคำตอบที่ถูก">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
        <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
        <input class="form-input opt-text" type="text" placeholder="ตัวเลือก ${String.fromCharCode(65 + idx)}" value="${escapeHtml(opt)}">
        <button class="opt-remove-btn" type="button" data-idx="${idx}" aria-label="ลบ" ${options.length <= 2 ? 'disabled' : ''}>×</button>
      </div>
    `).join('');

    list.dataset.correct = correctIdx;

    list.querySelectorAll('.opt-correct-btn').forEach(b => {
      b.addEventListener('click', () => {
        list.dataset.correct = b.dataset.idx;
        list.querySelectorAll('.option-input-row').forEach(row => {
          row.classList.toggle('is-correct', row.dataset.idx === b.dataset.idx);
        });
      });
    });
    list.querySelectorAll('.opt-remove-btn').forEach(b => {
      b.addEventListener('click', () => {
        const opts = collectOptions();
        const removeIdx = parseInt(b.dataset.idx);
        if (opts.length <= 2) return;
        opts.splice(removeIdx, 1);
        let newCorrect = parseInt(list.dataset.correct);
        if (newCorrect === removeIdx) newCorrect = 0;
        else if (newCorrect > removeIdx) newCorrect--;
        renderOptionsList(opts, newCorrect);
      });
    });
  }

  function collectOptions() {
    const inputs = $('optionsList').querySelectorAll('.opt-text');
    return Array.from(inputs).map(i => i.value);
  }

  function closeQuestionModal() {
    $('qModalBackdrop').classList.remove('show');
    state.pendingImage = null;
  }

  function handleSaveQuestion(e) {
    e.preventDefault();
    const text = $('qFormText').value.trim();
    const explain = $('qFormExplain').value.trim();
    const options = collectOptions().map(s => s.trim());
    const correctIdx = parseInt($('optionsList').dataset.correct);

    if (!text) { showToast('ใส่คำถามก่อน', 'error'); $('qFormText').focus(); return; }
    if (options.some(o => !o)) { showToast('กรอกตัวเลือกให้ครบ', 'error'); return; }
    if (options.length < 2) { showToast('ต้องมีอย่างน้อย 2 ตัวเลือก', 'error'); return; }
    if (isNaN(correctIdx) || correctIdx < 0 || correctIdx >= options.length) {
      showToast('เลือกคำตอบที่ถูกต้อง (กดที่ ✓)', 'error');
      return;
    }

    const newQ = { text, options, correct: correctIdx, explain, image: state.pendingImage || null };

    if (state.editingQIdx >= 0) {
      state.currentQuiz.questions[state.editingQIdx] = newQ;
    } else {
      state.currentQuiz.questions.push(newQ);
    }

    closeQuestionModal();
    renderQuestionsList();
    showToast(state.editingQIdx >= 0 ? 'แก้ไขแล้ว ✓' : 'เพิ่มแล้ว ✓', 'success');
  }

  function handleDeleteQuestion() {
    if (state.editingQIdx < 0) return;
    if (!confirm('ลบคำถามนี้?')) return;
    state.currentQuiz.questions.splice(state.editingQIdx, 1);
    closeQuestionModal();
    renderQuestionsList();
    showToast('ลบแล้ว ✓', 'success');
  }

  // ---------- Image upload -------------------------------------------------
  function handleImageSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showToast('ไฟล์ต้องเป็นรูปภาพ', 'error'); return; }
    if (file.size > 2 * 1024 * 1024) { showToast('รูปภาพใหญ่เกิน 2MB', 'error'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const maxW = 1200;
        let w = img.width, h = img.height;
        if (w > maxW) { h = h * (maxW / w); w = maxW; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        state.pendingImage = canvas.toDataURL('image/jpeg', 0.85);
        $('imagePreview').src = state.pendingImage;
        $('imagePreviewWrap').style.display = '';
      };
      img.onerror = () => showToast('โหลดรูปไม่สำเร็จ', 'error');
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  function handleRemoveImage() {
    state.pendingImage = null;
    $('qFormImage').value = '';
    $('imagePreviewWrap').style.display = 'none';
  }

  // ---------- Save / delete quiz -------------------------------------------
  async function handleSaveQuiz() {
    const title = $('quizTitleInput').value.trim();
    const desc = $('quizDescInput').value.trim();
    const timer = parseInt($('quizTimerInput').value) || 20;

    if (!title) { showToast('ใส่ชื่อ Quiz', 'error'); $('quizTitleInput').focus(); return; }
    if (state.currentQuiz.questions.length === 0) {
      showToast('เพิ่มคำถามอย่างน้อย 1 ข้อ', 'error');
      return;
    }
    if (!state.user) { showToast('กรุณา login ก่อน', 'error'); return; }

    state.currentQuiz.title = title;
    state.currentQuiz.description = desc;
    state.currentQuiz.timer = Math.max(5, Math.min(120, timer));
    state.currentQuiz.revealMode = $('quizRevealMode').value || 'after_question';

    const btn = $('btnSaveQuiz');
    btn.disabled = true;
    btn.textContent = 'กำลังบันทึก...';

    try {
      let saved;
      if (state.currentQuiz.id) {
        saved = await dbUpdateQuiz(state.currentQuiz);
      } else {
        saved = await dbCreateQuiz(state.currentQuiz);
      }
      if (saved) {
        // Update local cache
        const idx = state.quizzes.findIndex(q => q.id === saved.id);
        if (idx >= 0) state.quizzes[idx] = saved;
        else state.quizzes.unshift(saved);
        showToast('บันทึกแล้ว ✓', 'success');
        showMode('home');
      }
    } catch (e) {
      console.error(e);
      showToast('บันทึกไม่สำเร็จ: ' + (e.message || ''), 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = 'บันทึก';
    }
  }

  async function handleDeleteQuiz() {
    if (!state.currentQuiz || !state.currentQuiz.id) return;
    if (!confirm(`ลบ Quiz "${state.currentQuiz.title}"?\n\nไม่สามารถกู้คืนได้!`)) return;

    try {
      await dbDeleteQuiz(state.currentQuiz.id);
      state.quizzes = state.quizzes.filter(q => q.id !== state.currentQuiz.id);
      showToast('ลบแล้ว ✓', 'success');
      showMode('home');
    } catch (e) {
      showToast('ลบไม่สำเร็จ: ' + (e.message || ''), 'error');
    }
  }

  // ===========================================================================
  // PLAY MODE (single-screen / projector)
  // ===========================================================================
  function startPlay(quiz) {
    if (!quiz.questions || quiz.questions.length === 0) {
      showToast('Quiz นี้ไม่มีคำถาม', 'error');
      return;
    }
    state.currentQuiz = quiz;
    state.currentQuestionIdx = 0;
    state.score = { correct: 0, total: 0 };
    state.timerSec = quiz.timer || 20;

    $('lobbyTitle').textContent = quiz.title;
    $('lobbyDesc').textContent = quiz.description || '';
    $('lobbyQCount').textContent = quiz.questions.length;
    $('lobbyTime').textContent = state.timerSec;

    $('playLobby').style.display = '';
    $('playQuestion').style.display = 'none';
    $('playEnd').style.display = 'none';
    showMode('play');
    enterFullscreen();
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

  function startPlayQuestions() {
    $('playLobby').style.display = 'none';
    $('playQuestion').style.display = '';
    $('playEnd').style.display = 'none';
    showQuestion();
  }

  function showQuestion() {
    const q = state.currentQuiz.questions[state.currentQuestionIdx];
    if (!q) { showEnd(); return; }

    $('playProgress').textContent = `${state.currentQuestionIdx + 1} / ${state.currentQuiz.questions.length}`;
    $('playQText').textContent = q.text;

    if (q.image) {
      $('playImage').src = q.image;
      $('playImageWrap').style.display = '';
    } else {
      $('playImageWrap').style.display = 'none';
    }

    const optsEl = $('playOptions');
    optsEl.innerHTML = q.options.map((opt, idx) => {
      const color = OPTION_COLORS[idx] || OPTION_COLORS[0];
      return `
        <div class="play-opt" data-idx="${idx}" style="--opt-color: ${color.bg};">
          <span class="po-letter">${color.label}</span>
          <span class="po-text">${escapeHtml(opt)}</span>
        </div>
      `;
    }).join('');

    $('playExplain').style.display = 'none';
    const mode = state.currentQuiz.revealMode || 'after_question';
    $('btnReveal').style.display = '';
    $('btnReveal').textContent = mode === 'after_question' ? 'เฉลย' : 'ข้ามไปเลย';
    $('btnNext').style.display = 'none';

    state.timerSec = state.currentQuiz.timer || 20;
    $('timerNum').textContent = state.timerSec;
    $('timerBar').style.width = '100%';
    $('timerBar').style.transition = 'none';
    setTimeout(() => {
      $('timerBar').style.transition = `width ${state.timerSec}s linear`;
      $('timerBar').style.width = '0%';
    }, 50);

    if (state.timer) clearInterval(state.timer);
    state.timer = setInterval(() => {
      state.timerSec--;
      $('timerNum').textContent = Math.max(0, state.timerSec);
      if (state.timerSec <= 0) {
        clearInterval(state.timer);
        state.timer = null;
        revealAnswer();
      }
    }, 1000);
  }

  function revealAnswer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    $('timerBar').style.transition = 'none';
    const q = state.currentQuiz.questions[state.currentQuestionIdx];
    const mode = state.currentQuiz.revealMode || 'after_question';

    if (mode === 'after_question') {
      const optsEl = $('playOptions');
      optsEl.querySelectorAll('.play-opt').forEach(el => {
        const idx = parseInt(el.dataset.idx);
        if (idx === q.correct) el.classList.add('correct');
        else el.classList.add('dim');
      });
      if (q.explain) {
        $('playExplain').textContent = '💡 ' + q.explain;
        $('playExplain').style.display = '';
      }
    }
    $('btnReveal').style.display = 'none';
    $('btnNext').style.display = '';
    state.score.total++;
  }

  function nextQuestion() {
    state.currentQuestionIdx++;
    if (state.currentQuestionIdx >= state.currentQuiz.questions.length) {
      showEnd();
    } else {
      showQuestion();
    }
  }

  function showEnd() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    $('playLobby').style.display = 'none';
    $('playQuestion').style.display = 'none';
    $('playEnd').style.display = '';

    const mode = state.currentQuiz.revealMode || 'after_question';
    const endDescEl = $('endDesc');

    if (mode === 'after_all') {
      let html = `<p style="margin-bottom:16px;">เฉลย ${state.currentQuiz.questions.length} ข้อ:</p>`;
      html += '<div class="end-review">';
      state.currentQuiz.questions.forEach((q, idx) => {
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
      endDescEl.innerHTML = html;
    } else {
      endDescEl.textContent = `จบ ${state.currentQuiz.questions.length} ข้อ — Good job ทุกคน!`;
    }
  }

  function exitPlay() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
    exitFullscreen();
    showMode('home');
  }

  // ===========================================================================
  // EXPORT / IMPORT
  // ===========================================================================
  function exportAll() {
    if (state.quizzes.length === 0) { showToast('ยังไม่มี Quiz ให้ backup', 'info'); return; }
    const data = {
      version: 2,
      exported_at: new Date().toISOString(),
      quizzes: state.quizzes,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pk-quizzes-${new Date().toISOString().substring(0,10)}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Backup แล้ว ✓', 'success');
  }

  function importFile(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        const imported = Array.isArray(data) ? data : data.quizzes;
        if (!Array.isArray(imported)) throw new Error('รูปแบบไฟล์ไม่ถูกต้อง');
        const valid = imported.filter(q => q.title && Array.isArray(q.questions));
        if (valid.length === 0) throw new Error('ไม่มี quiz ที่ใช้ได้');

        if (!confirm(`Import ${valid.length} Quiz ขึ้น cloud?`)) return;
        showToast('กำลัง import...', 'info');

        let success = 0, failed = 0;
        for (const q of valid) {
          try {
            const newQuiz = { ...q, id: null }; // ignore old ID, let DB assign
            const saved = await dbCreateQuiz(newQuiz);
            if (saved) state.quizzes.unshift(saved);
            success++;
          } catch (err) { failed++; }
        }
        renderHome();
        showToast(`Import สำเร็จ ${success}/${valid.length} ชุด`, success === valid.length ? 'success' : 'error');
      } catch (err) {
        showToast('Import ไม่สำเร็จ: ' + (err.message || ''), 'error');
      }
    };
    reader.readAsText(file);
  }

  // ===========================================================================
  // EVENTS
  // ===========================================================================
  function wireEvents() {
    $('btnNewQuiz').addEventListener('click', () => startEdit(null));
    $('btnExportQuiz').addEventListener('click', exportAll);
    $('btnImportQuiz').addEventListener('click', () => $('importFile').click());
    $('importFile').addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) { importFile(e.target.files[0]); e.target.value = ''; }
    });

    $('editorBack').addEventListener('click', () => {
      if (confirm('ออกโดยไม่บันทึก?')) showMode('home');
    });
    $('btnSaveQuiz').addEventListener('click', handleSaveQuiz);
    $('btnAddQ').addEventListener('click', () => openQuestionModal(-1));
    $('btnDeleteQuiz').addEventListener('click', handleDeleteQuiz);

    $('qModalClose').addEventListener('click', closeQuestionModal);
    $('btnCancelQ').addEventListener('click', closeQuestionModal);
    $('qModalBackdrop').addEventListener('click', (e) => {
      if (e.target === $('qModalBackdrop')) closeQuestionModal();
    });
    $('qForm').addEventListener('submit', handleSaveQuestion);
    $('btnDeleteQ').addEventListener('click', handleDeleteQuestion);

    $('btnAddOption').addEventListener('click', () => {
      const opts = collectOptions();
      if (opts.length >= MAX_OPTIONS) { showToast(`สูงสุด ${MAX_OPTIONS} ตัวเลือก`, 'info'); return; }
      opts.push('');
      const correct = parseInt($('optionsList').dataset.correct) || 0;
      renderOptionsList(opts, correct);
    });

    document.querySelectorAll('#revealModeGrid .reveal-mode-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#revealModeGrid .reveal-mode-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('quizRevealMode').value = b.dataset.mode;
      });
    });

    $('qFormImage').addEventListener('change', handleImageSelect);
    $('btnRemoveImage').addEventListener('click', handleRemoveImage);

    $('lobbyExit').addEventListener('click', exitPlay);
    $('playExit').addEventListener('click', () => {
      if (confirm('ออกจาก Quiz?')) exitPlay();
    });
    $('lobbyStart').addEventListener('click', startPlayQuestions);
    $('btnReveal').addEventListener('click', revealAnswer);
    $('btnNext').addEventListener('click', nextQuestion);
    $('btnPlayAgain').addEventListener('click', () => {
      state.currentQuestionIdx = 0;
      $('playLobby').style.display = '';
      $('playEnd').style.display = 'none';
      $('lobbyTitle').textContent = state.currentQuiz.title;
    });
    $('btnBackHome').addEventListener('click', exitPlay);

    document.addEventListener('keydown', (e) => {
      if ($('modePlay').style.display === 'none') return;
      if ($('playQuestion').style.display === 'none') return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if ($('btnNext').style.display !== 'none') nextQuestion();
        else if ($('btnReveal').style.display !== 'none') revealAnswer();
      } else if (e.key === 'Escape') {
        if (confirm('ออกจาก Quiz?')) exitPlay();
      }
    });
  }

  // ===========================================================================
  // INIT
  // ===========================================================================
  async function init() {
    startClock();
    wireEvents();

    // Wait until Supabase library loads
    let waitCount = 0;
    while (!window.supabase && waitCount < 30) {
      await new Promise(r => setTimeout(r, 100));
      waitCount++;
    }
    if (!window.supabase) {
      showToast('Supabase ไม่โหลด', 'error');
      return;
    }

    try {
      await initSupabase();
      if (state.user) {
        await afterLogin();
      }
      // If not logged in yet, the auth state listener will handle it
    } catch (e) {
      console.error('Init failed:', e);
      showToast('Init failed: ' + (e.message || ''), 'error');
    }

    showMode('home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
