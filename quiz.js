/* ===========================================================================
   pk · Quiz Tool — quiz.js
   ----------------------------------------------------------------------------
   Mode: localStorage (per-device)
   - Create/edit quizzes with questions
   - Play mode: full-screen projector view
   - Timer per question + reveal answer + explanation
   - Image support (base64 stored in localStorage)
   =========================================================================== */
(function () {
  'use strict';

  const STORAGE_KEY = 'pk_quizzes_v1';
  const MAX_OPTIONS = 6;

  // Quiz colors (Kahoot-inspired, mapped to pk pride palette)
  const OPTION_COLORS = [
    { bg: '#E63946', label: 'A' },  // red
    { bg: '#1976D2', label: 'B' },  // blue
    { bg: '#F4A300', label: 'C' },  // yellow/orange
    { bg: '#2A9D8F', label: 'D' },  // green
    { bg: '#7B2CBF', label: 'E' },  // purple
    { bg: '#E07856', label: 'F' },  // soft red
  ];

  // ---------- State --------------------------------------------------------
  const state = {
    quizzes: [],
    currentQuiz: null,        // editing/playing
    currentQuestionIdx: 0,    // play mode
    timer: null,
    timerSec: 20,
    score: { correct: 0, total: 0 },
    pendingImage: null,       // base64 string for question being edited
    editingQIdx: -1,          // -1 = new
  };

  const $ = (id) => document.getElementById(id);

  // ---------- Helpers ------------------------------------------------------
  function uuid() {
    return 'q_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
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

  // ---------- Storage ------------------------------------------------------
  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { state.quizzes = []; return; }
      const parsed = JSON.parse(raw);
      state.quizzes = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('Load failed:', e);
      state.quizzes = [];
    }
  }
  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.quizzes));
    } catch (e) {
      console.error('Save failed:', e);
      showToast('บันทึกไม่ได้ — storage เต็ม (ลองลบรูปออกจากบาง quiz)', 'error');
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

    if (state.quizzes.length === 0) {
      list.innerHTML = '<div class="empty-msg">ยังไม่มี Quiz — กดปุ่มด้านบนเพื่อสร้างใหม่ 📝</div>';
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
            <button class="qc-btn qc-btn-play" data-action="play" data-id="${q.id}" type="button">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <span>เล่น</span>
            </button>
            <button class="qc-btn qc-btn-edit" data-action="edit" data-id="${q.id}" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              <span>แก้ไข</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Wire actions
    list.querySelectorAll('[data-action]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = el.dataset.action;
        const id = el.dataset.id;
        const quiz = state.quizzes.find(q => q.id === id);
        if (!quiz) return;
        if (action === 'play') startPlay(quiz);
        else if (action === 'edit') startEdit(quiz);
      });
    });
  }

  // ===========================================================================
  // EDITOR
  // ===========================================================================
  function startEdit(quiz) {
    if (quiz) {
      state.currentQuiz = JSON.parse(JSON.stringify(quiz)); // deep copy
      $('editorTitle').textContent = 'แก้ไข Quiz';
      $('btnDeleteQuiz').style.display = '';
    } else {
      state.currentQuiz = {
        id: uuid(),
        title: '',
        description: '',
        timer: 20,
        questions: [],
        created_at: new Date().toISOString(),
      };
      $('editorTitle').textContent = 'สร้าง Quiz ใหม่';
      $('btnDeleteQuiz').style.display = 'none';
    }
    $('quizTitleInput').value = state.currentQuiz.title || '';
    $('quizDescInput').value = state.currentQuiz.description || '';
    $('quizTimerInput').value = state.currentQuiz.timer || 20;
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

    // Wire click on each question item (open editor)
    list.querySelectorAll('.q-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.qi-actions')) return;
        const idx = parseInt(el.dataset.idx);
        openQuestionModal(idx);
      });
    });
    // Up/down buttons
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

    // Render image preview
    if (state.pendingImage) {
      $('imagePreview').src = state.pendingImage;
      $('imagePreviewWrap').style.display = '';
    } else {
      $('imagePreviewWrap').style.display = 'none';
    }
    $('qFormImage').value = '';

    // Render options
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

    // Wire correct buttons
    list.querySelectorAll('.opt-correct-btn').forEach(b => {
      b.addEventListener('click', () => {
        list.dataset.correct = b.dataset.idx;
        list.querySelectorAll('.option-input-row').forEach(row => {
          row.classList.toggle('is-correct', row.dataset.idx === b.dataset.idx);
        });
      });
    });
    // Wire remove buttons
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
    if (options.some(o => !o)) { showToast('กรอกตัวเลือกให้ครบทุกช่อง', 'error'); return; }
    if (options.length < 2) { showToast('ต้องมีอย่างน้อย 2 ตัวเลือก', 'error'); return; }
    if (isNaN(correctIdx) || correctIdx < 0 || correctIdx >= options.length) {
      showToast('เลือกคำตอบที่ถูกต้อง (กดที่ ✓)', 'error');
      return;
    }

    const newQ = {
      text,
      options,
      correct: correctIdx,
      explain,
      image: state.pendingImage || null,
    };

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

  // ---------- Image upload --------------------------------------------------
  function handleImageSelect(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      showToast('ไฟล์ต้องเป็นรูปภาพ', 'error');
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      showToast('รูปภาพใหญ่เกิน 2MB — ลองย่อก่อน', 'error');
      return;
    }
    // Compress if too big - convert to data URL with quality reduction
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        // Resize if larger than 1200px wide
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

  // ---------- Save quiz -------------------------------------------------------
  function handleSaveQuiz() {
    const title = $('quizTitleInput').value.trim();
    const desc = $('quizDescInput').value.trim();
    const timer = parseInt($('quizTimerInput').value) || 20;

    if (!title) { showToast('ใส่ชื่อ Quiz', 'error'); $('quizTitleInput').focus(); return; }
    if (state.currentQuiz.questions.length === 0) {
      showToast('เพิ่มคำถามอย่างน้อย 1 ข้อ', 'error');
      return;
    }

    state.currentQuiz.title = title;
    state.currentQuiz.description = desc;
    state.currentQuiz.timer = Math.max(5, Math.min(120, timer));
    state.currentQuiz.updated_at = new Date().toISOString();

    const existingIdx = state.quizzes.findIndex(q => q.id === state.currentQuiz.id);
    if (existingIdx >= 0) {
      state.quizzes[existingIdx] = state.currentQuiz;
    } else {
      state.quizzes.push(state.currentQuiz);
    }
    saveToStorage();
    showToast('บันทึก Quiz แล้ว ✓', 'success');
    showMode('home');
  }

  function handleDeleteQuiz() {
    if (!state.currentQuiz || !state.currentQuiz.id) return;
    if (!confirm(`ลบ Quiz "${state.currentQuiz.title}"?\n\nไม่สามารถกู้คืนได้!`)) return;
    state.quizzes = state.quizzes.filter(q => q.id !== state.currentQuiz.id);
    saveToStorage();
    showToast('ลบแล้ว ✓', 'success');
    showMode('home');
  }

  // ===========================================================================
  // PLAY MODE
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

    // Lobby
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

    // Render options
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

    // Reset state
    $('playExplain').style.display = 'none';
    $('btnReveal').style.display = '';
    $('btnNext').style.display = 'none';

    // Start timer
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
    $('endDesc').textContent = `จบ ${state.currentQuiz.questions.length} ข้อ — Good job ทุกคน!`;
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
      version: 1,
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
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        const imported = Array.isArray(data) ? data : data.quizzes;
        if (!Array.isArray(imported)) throw new Error('รูปแบบไฟล์ไม่ถูกต้อง');
        const valid = imported.filter(q => q.title && Array.isArray(q.questions));
        if (valid.length === 0) throw new Error('ไม่มี quiz ที่ใช้ได้');

        if (state.quizzes.length > 0) {
          if (!confirm(`มี Quiz อยู่แล้ว ${state.quizzes.length} ชุด\n\nกด OK = เพิ่ม ${valid.length} ชุดใหม่ (ของเดิมยังอยู่)\nกด Cancel = ยกเลิก`)) return;
        }
        valid.forEach(q => {
          q.id = q.id || uuid();
          state.quizzes.push(q);
        });
        saveToStorage();
        renderHome();
        showToast(`Import แล้ว ${valid.length} ชุด ✓`, 'success');
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
    // Home
    $('btnNewQuiz').addEventListener('click', () => startEdit(null));
    $('btnExportQuiz').addEventListener('click', exportAll);
    $('btnImportQuiz').addEventListener('click', () => $('importFile').click());
    $('importFile').addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) { importFile(e.target.files[0]); e.target.value = ''; }
    });

    // Editor
    $('editorBack').addEventListener('click', () => {
      if (confirm('ออกโดยไม่บันทึก?\nการแก้ไขล่าสุดจะหาย')) showMode('home');
    });
    $('btnSaveQuiz').addEventListener('click', handleSaveQuiz);
    $('btnAddQ').addEventListener('click', () => openQuestionModal(-1));
    $('btnDeleteQuiz').addEventListener('click', handleDeleteQuiz);

    // Question modal
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

    $('qFormImage').addEventListener('change', handleImageSelect);
    $('btnRemoveImage').addEventListener('click', handleRemoveImage);

    // Play
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

    // Keyboard shortcuts in play mode
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
  function init() {
    startClock();
    loadFromStorage();
    wireEvents();
    showMode('home');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
