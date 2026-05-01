/* ===========================================================================
   pk · Teaching Schedule — schedule.js
   ----------------------------------------------------------------------------
   Mode: localStorage (per-device, no login needed)
   - CRUD for weekly recurring class schedule
   - 2 view modes: grid (visual timetable) + list (grouped by day)
   - Today highlight, export/import JSON, full edit/delete
   =========================================================================== */
(function () {
  'use strict';

  // ---------- Constants ----------------------------------------------------
  const STORAGE_KEY = 'pk_teaching_schedule_v1';

  const DAYS = [
    { id: 1, short: 'จ', full: 'จันทร์',  enFull: 'Monday' },
    { id: 2, short: 'อ', full: 'อังคาร',  enFull: 'Tuesday' },
    { id: 3, short: 'พ', full: 'พุธ',     enFull: 'Wednesday' },
    { id: 4, short: 'พฤ', full: 'พฤหัส',  enFull: 'Thursday' },
    { id: 5, short: 'ศ', full: 'ศุกร์',   enFull: 'Friday' },
  ];

  const TYPES = {
    lecture: { label: 'บรรยาย', emoji: '🎤', color: '#E63946' },
    lab:     { label: 'ปฏิบัติ', emoji: '🔬', color: '#2A9D8F' },
    seminar: { label: 'สัมมนา', emoji: '💬', color: '#F77F00' },
    other:   { label: 'อื่นๆ',   emoji: '📌', color: '#7B2CBF' },
  };

  // Time grid: 7:00 AM to 7:00 PM (12 hours, 60-min slots)
  const HOUR_START = 7;
  const HOUR_END = 19;

  // ---------- State --------------------------------------------------------
  const state = {
    classes: [],     // array of class objects
    view: 'grid',    // grid | list
  };

  // ---------- DOM helpers --------------------------------------------------
  const $ = (id) => document.getElementById(id);

  // ---------- Format / utility helpers -------------------------------------
  function fmtTime(t) { return t || ''; }
  function timeToMinutes(t) {
    if (!t) return 0;
    const [h, m] = t.split(':').map(Number);
    return h * 60 + (m || 0);
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function uuid() {
    return 'cls_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
  }
  function getTodayDayId() {
    // JS: 0=Sun, 1=Mon, ... 5=Fri, 6=Sat → return 1-5 or 0 (weekend)
    const d = new Date().getDay();
    return d >= 1 && d <= 5 ? d : 0;
  }

  // ---------- Toast --------------------------------------------------------
  let toastTimer = null;
  function showToast(msg, type = 'info') {
    const t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast show ' + type;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.className = 'toast'; }, 3000);
  }

  // ---------- Clock --------------------------------------------------------
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
  // STORAGE
  // ===========================================================================
  function loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) { state.classes = []; return; }
      const parsed = JSON.parse(raw);
      state.classes = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('Load failed:', e);
      state.classes = [];
    }
  }

  function saveToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.classes));
    } catch (e) {
      console.error('Save failed:', e);
      showToast('บันทึกไม่สำเร็จ — storage เต็ม?', 'error');
    }
  }

  // ===========================================================================
  // CRUD
  // ===========================================================================
  function addClass(payload) {
    const cls = {
      id: uuid(),
      subject: payload.subject,
      day: Number(payload.day),
      start: payload.start,
      end: payload.end,
      location: payload.location || '',
      type: payload.type || 'lecture',
      notes: payload.notes || '',
      created_at: new Date().toISOString(),
    };
    state.classes.push(cls);
    saveToStorage();
    return cls;
  }

  function updateClass(id, payload) {
    const idx = state.classes.findIndex(c => c.id === id);
    if (idx === -1) throw new Error('ไม่พบคาบเรียน');
    state.classes[idx] = {
      ...state.classes[idx],
      subject: payload.subject,
      day: Number(payload.day),
      start: payload.start,
      end: payload.end,
      location: payload.location || '',
      type: payload.type || 'lecture',
      notes: payload.notes || '',
      updated_at: new Date().toISOString(),
    };
    saveToStorage();
  }

  function deleteClass(id) {
    state.classes = state.classes.filter(c => c.id !== id);
    saveToStorage();
  }

  function clearAll() {
    state.classes = [];
    saveToStorage();
  }

  // ===========================================================================
  // SORTING / GROUPING
  // ===========================================================================
  function sortedClasses() {
    return [...state.classes].sort((a, b) => {
      if (a.day !== b.day) return a.day - b.day;
      return timeToMinutes(a.start) - timeToMinutes(b.start);
    });
  }

  function classesByDay(dayId) {
    return state.classes
      .filter(c => c.day === dayId)
      .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
  }

  // ===========================================================================
  // RENDER — TODAY CARD
  // ===========================================================================
  function renderToday() {
    const todayId = getTodayDayId();
    const card = $('todayCard');
    const list = $('todayList');
    const nameEl = $('todayName');

    if (todayId === 0) {
      // Weekend
      nameEl.textContent = 'วันหยุด · เสาร์-อาทิตย์';
      list.innerHTML = '<div class="today-empty">ไม่มีสอนวันหยุด 🌴</div>';
      card.classList.remove('today-active');
      return;
    }

    const day = DAYS.find(d => d.id === todayId);
    nameEl.textContent = day.full;
    const todayClasses = classesByDay(todayId);

    if (todayClasses.length === 0) {
      list.innerHTML = '<div class="today-empty">ไม่มีคาบเรียนวันนี้ 🎉</div>';
      card.classList.remove('today-active');
      return;
    }

    card.classList.add('today-active');
    list.innerHTML = todayClasses.map(c => {
      const type = TYPES[c.type] || TYPES.other;
      return `
        <div class="today-item" data-id="${c.id}">
          <span class="ti-time">${escapeHtml(c.start)}<span class="ti-dash">–</span>${escapeHtml(c.end)}</span>
          <span class="ti-divider"></span>
          <span class="ti-info">
            <span class="ti-subject">${type.emoji} ${escapeHtml(c.subject)}</span>
            ${c.location ? `<span class="ti-loc">📍 ${escapeHtml(c.location)}</span>` : ''}
          </span>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.today-item').forEach(el => {
      el.addEventListener('click', () => {
        const cls = state.classes.find(x => x.id === el.dataset.id);
        if (cls) openModal(cls);
      });
    });
  }

  // ===========================================================================
  // RENDER — GRID VIEW
  // ===========================================================================
  function renderGrid() {
    const grid = $('scheduleGrid');
    if (!grid) return;

    let html = '';

    // Header row
    html += '<thead><tr>';
    html += '<th class="grid-time-header"></th>';
    DAYS.forEach(d => {
      const isToday = d.id === getTodayDayId();
      html += `<th class="grid-day-header ${isToday ? 'today' : ''}">
        <span class="gh-short">${d.short}</span>
        <span class="gh-full">${d.full}</span>
      </th>`;
    });
    html += '</tr></thead>';

    // Body — each row is 1 hour slot
    html += '<tbody>';
    for (let h = HOUR_START; h < HOUR_END; h++) {
      html += '<tr>';
      html += `<td class="grid-time-cell"><span class="gtc-hour">${String(h).padStart(2, '0')}:00</span></td>`;
      DAYS.forEach(d => {
        const isToday = d.id === getTodayDayId();
        const slotClasses = state.classes.filter(c => {
          if (c.day !== d.id) return false;
          const startMin = timeToMinutes(c.start);
          const slotMin = h * 60;
          return startMin >= slotMin && startMin < slotMin + 60;
        });

        if (slotClasses.length === 0) {
          html += `<td class="grid-cell empty ${isToday ? 'today' : ''}"></td>`;
        } else {
          html += `<td class="grid-cell ${isToday ? 'today' : ''}">`;
          slotClasses.forEach(c => {
            const type = TYPES[c.type] || TYPES.other;
            const startMin = timeToMinutes(c.start);
            const endMin = timeToMinutes(c.end);
            const durationMin = Math.max(30, endMin - startMin);
            // Height: 60 min slot = 70px → scale
            const heightPx = Math.round((durationMin / 60) * 70);
            html += `
              <div class="grid-class type-${c.type}" data-id="${c.id}"
                   style="--class-color: ${type.color}; height: ${heightPx}px;">
                <span class="gc-time">${escapeHtml(c.start)}–${escapeHtml(c.end)}</span>
                <span class="gc-subject">${escapeHtml(c.subject)}</span>
                ${c.location ? `<span class="gc-loc">${escapeHtml(c.location)}</span>` : ''}
                <span class="gc-type-tag">${type.emoji}</span>
              </div>
            `;
          });
          html += '</td>';
        }
      });
      html += '</tr>';
    }
    html += '</tbody>';

    grid.innerHTML = html;

    // Wire click on each class
    grid.querySelectorAll('.grid-class').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const cls = state.classes.find(x => x.id === el.dataset.id);
        if (cls) openModal(cls);
      });
    });
  }

  // ===========================================================================
  // RENDER — LIST VIEW
  // ===========================================================================
  function renderList() {
    const list = $('scheduleList');
    if (!list) return;

    if (state.classes.length === 0) {
      list.innerHTML = '<div class="empty-msg">ยังไม่มีคาบเรียน — กดปุ่ม "เพิ่มคาบเรียน" เพื่อเริ่ม 🎓</div>';
      return;
    }

    let html = '';
    DAYS.forEach(d => {
      const dayClasses = classesByDay(d.id);
      if (dayClasses.length === 0) return;
      const isToday = d.id === getTodayDayId();

      html += `<div class="day-group ${isToday ? 'today' : ''}">`;
      html += `<div class="day-group-header">
        <span class="dgh-name">${d.full}${isToday ? ' · วันนี้' : ''}</span>
        <span class="dgh-count">${dayClasses.length} คาบ</span>
      </div>`;

      dayClasses.forEach(c => {
        const type = TYPES[c.type] || TYPES.other;
        html += `
          <div class="list-class" data-id="${c.id}" style="--class-color: ${type.color};">
            <span class="lc-time">
              <span class="lc-time-start">${escapeHtml(c.start)}</span>
              <span class="lc-time-end">${escapeHtml(c.end)}</span>
            </span>
            <span class="lc-bar"></span>
            <span class="lc-body">
              <span class="lc-header">
                <span class="lc-subject">${escapeHtml(c.subject)}</span>
                <span class="lc-type-tag">${type.emoji} ${type.label}</span>
              </span>
              ${c.location ? `<span class="lc-loc">📍 ${escapeHtml(c.location)}</span>` : ''}
              ${c.notes ? `<span class="lc-notes">📝 ${escapeHtml(c.notes)}</span>` : ''}
            </span>
          </div>
        `;
      });
      html += `</div>`;
    });
    list.innerHTML = html;

    list.querySelectorAll('.list-class').forEach(el => {
      el.addEventListener('click', () => {
        const cls = state.classes.find(x => x.id === el.dataset.id);
        if (cls) openModal(cls);
      });
    });
  }

  // ===========================================================================
  // RENDER — VIEW SWITCHING
  // ===========================================================================
  function setView(view) {
    state.view = view;
    document.querySelectorAll('.vt-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.view === view);
    });
    $('gridView').style.display = view === 'grid' ? '' : 'none';
    $('listView').style.display = view === 'list' ? '' : 'none';
    if (view === 'grid') renderGrid();
    else renderList();
  }

  function renderAll() {
    renderToday();
    if (state.view === 'grid') renderGrid();
    else renderList();
  }

  // ===========================================================================
  // MODAL — Add/Edit
  // ===========================================================================
  function openModal(cls) {
    const isEdit = !!cls;
    $('schedModalTitle').textContent = isEdit ? 'แก้ไขคาบเรียน' : 'เพิ่มคาบเรียน';
    $('formClassId').value = isEdit ? cls.id : '';
    $('formSubject').value = isEdit ? cls.subject : '';
    $('formStart').value = isEdit ? cls.start : '08:00';
    $('formEnd').value = isEdit ? cls.end : '10:00';
    $('formLocation').value = isEdit && cls.location ? cls.location : '';
    $('formClassNotes').value = isEdit && cls.notes ? cls.notes : '';

    // Day buttons
    const dayId = isEdit ? cls.day : (getTodayDayId() || 1);
    $('formDay').value = String(dayId);
    document.querySelectorAll('#dayGrid .day-btn').forEach(b => {
      b.classList.toggle('selected', Number(b.dataset.day) === dayId);
    });

    // Type buttons
    const type = isEdit ? (cls.type || 'lecture') : 'lecture';
    $('formType').value = type;
    document.querySelectorAll('#typeGrid .type-btn').forEach(b => {
      b.classList.toggle('selected', b.dataset.type === type);
    });

    $('btnDeleteClass').style.display = isEdit ? '' : 'none';
    $('schedModalBackdrop').classList.add('show');
    setTimeout(() => $('formSubject').focus(), 200);
  }

  function closeModal() {
    $('schedModalBackdrop').classList.remove('show');
    $('classForm').reset();
  }

  // ===========================================================================
  // FORM SUBMIT
  // ===========================================================================
  function handleFormSubmit(e) {
    e.preventDefault();
    const id = $('formClassId').value;
    const subject = $('formSubject').value.trim();
    const day = $('formDay').value;
    const start = $('formStart').value;
    const end = $('formEnd').value;
    const location = $('formLocation').value.trim();
    const type = $('formType').value || 'lecture';
    const notes = $('formClassNotes').value.trim();

    if (!subject) { showToast('ใส่ชื่อวิชา', 'error'); $('formSubject').focus(); return; }
    if (!day) { showToast('เลือกวัน', 'error'); return; }
    if (!start || !end) { showToast('ใส่เวลาเริ่ม-จบ', 'error'); return; }
    if (timeToMinutes(end) <= timeToMinutes(start)) {
      showToast('เวลาจบต้องหลังเวลาเริ่ม', 'error');
      return;
    }

    const payload = { subject, day, start, end, location, type, notes };

    try {
      if (id) {
        updateClass(id, payload);
        showToast('แก้ไขแล้ว ✓', 'success');
      } else {
        addClass(payload);
        showToast('เพิ่มแล้ว ✓', 'success');
      }
      closeModal();
      renderAll();
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message || ''), 'error');
    }
  }

  function handleDeleteClass() {
    const id = $('formClassId').value;
    if (!id) return;
    if (!confirm('ลบคาบเรียนนี้?')) return;
    try {
      deleteClass(id);
      showToast('ลบแล้ว ✓', 'success');
      closeModal();
      renderAll();
    } catch (err) {
      showToast('ลบไม่สำเร็จ', 'error');
    }
  }

  // ===========================================================================
  // EXPORT / IMPORT
  // ===========================================================================
  function exportSchedule() {
    if (state.classes.length === 0) {
      showToast('ยังไม่มีคาบเรียนให้ export', 'info');
      return;
    }
    const data = {
      version: 1,
      exported_at: new Date().toISOString(),
      classes: state.classes,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pk-schedule-${new Date().toISOString().substring(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Export แล้ว ✓', 'success');
  }

  function importSchedule(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        const imported = Array.isArray(data) ? data : data.classes;
        if (!Array.isArray(imported)) throw new Error('รูปแบบไฟล์ไม่ถูกต้อง');

        if (state.classes.length > 0) {
          if (!confirm(`มีคาบเรียนอยู่แล้ว ${state.classes.length} คาบ\n\nกด OK = แทนที่ทั้งหมด\nกด Cancel = ยกเลิก`)) return;
        }

        // Validate + clean
        const valid = imported.filter(c => c.subject && c.day && c.start && c.end);
        if (valid.length === 0) throw new Error('ไม่มีข้อมูลที่ใช้ได้');

        // Re-assign IDs to avoid conflicts
        state.classes = valid.map(c => ({
          ...c,
          id: c.id || uuid(),
          day: Number(c.day),
        }));
        saveToStorage();
        renderAll();
        showToast(`Import แล้ว ${valid.length} คาบ ✓`, 'success');
      } catch (err) {
        showToast('Import ไม่สำเร็จ: ' + (err.message || ''), 'error');
      }
    };
    reader.readAsText(file);
  }

  function handleClearAll() {
    if (state.classes.length === 0) {
      showToast('ไม่มีข้อมูลให้ลบ', 'info');
      return;
    }
    if (!confirm(`ลบคาบเรียนทั้งหมด ${state.classes.length} คาบ?\n\nไม่สามารถกู้คืนได้!`)) return;
    if (!confirm('ยืนยันอีกครั้ง — ลบทั้งหมดจริงๆ?')) return;
    clearAll();
    showToast('ลบทั้งหมดแล้ว ✓', 'success');
    renderAll();
  }

  // ===========================================================================
  // EVENTS
  // ===========================================================================
  function wireEvents() {
    $('btnAddClass').addEventListener('click', () => openModal(null));

    // Modal close
    $('schedModalClose').addEventListener('click', closeModal);
    $('btnCancelClass').addEventListener('click', closeModal);
    $('schedModalBackdrop').addEventListener('click', (e) => {
      if (e.target === $('schedModalBackdrop')) closeModal();
    });

    $('classForm').addEventListener('submit', handleFormSubmit);
    $('btnDeleteClass').addEventListener('click', handleDeleteClass);

    // View toggle
    document.querySelectorAll('.vt-btn').forEach(b => {
      b.addEventListener('click', () => setView(b.dataset.view));
    });

    // Day buttons (modal)
    document.querySelectorAll('#dayGrid .day-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#dayGrid .day-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('formDay').value = b.dataset.day;
      });
    });

    // Type buttons (modal)
    document.querySelectorAll('#typeGrid .type-btn').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('#typeGrid .type-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        $('formType').value = b.dataset.type;
      });
    });

    // Export / Import / Clear
    $('btnExportSchedule').addEventListener('click', exportSchedule);
    $('btnImportSchedule').addEventListener('click', () => $('importFile').click());
    $('importFile').addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        importSchedule(e.target.files[0]);
        e.target.value = '';
      }
    });
    $('btnClearSchedule').addEventListener('click', handleClearAll);
  }

  // ===========================================================================
  // INIT
  // ===========================================================================
  function init() {
    startClock();
    loadFromStorage();
    wireEvents();
    setView('grid');  // initial render
    renderToday();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
