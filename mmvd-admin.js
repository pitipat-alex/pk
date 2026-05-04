// ============================================================
// MMVD Admin — Vet Dashboard
// ============================================================
'use strict';

(function () {
  // Wait for auth.js to set up window.PK
  function waitForAuth() {
    return new Promise(resolve => {
      const check = () => {
        if (window.PK && window.PK.supabase) resolve(window.PK.supabase);
        else setTimeout(check, 50);
      };
      check();
    });
  }

  let sb = null;
  let allPets = [];
  let allDaily = [];
  let allWeekly = [];
  let currentPet = null;

  // ============================================================
  // Init
  // ============================================================
  async function init() {
    sb = await waitForAuth();
    
    // Wait for auth-confirmed (lock screen released)
    setTimeout(loadAll, 100);
  }

  async function loadAll() {
    try {
      const [petsRes, dailyRes, weeklyRes] = await Promise.all([
        sb.from('mmvd_pets').select('*').order('created_at', { ascending: false }),
        sb.from('mmvd_daily').select('*').order('entry_date', { ascending: false }),
        sb.from('mmvd_weekly').select('*').order('entry_date', { ascending: false }),
      ]);

      if (petsRes.error) throw petsRes.error;
      if (dailyRes.error) throw dailyRes.error;
      if (weeklyRes.error) throw weeklyRes.error;

      allPets = petsRes.data || [];
      allDaily = dailyRes.data || [];
      allWeekly = weeklyRes.data || [];

      document.getElementById('totalCount').textContent = `${allPets.length} ตัว`;
      renderPetList();

    } catch (e) {
      console.error(e);
      document.getElementById('petContainer').innerHTML = `
        <div class="empty-state">
          <div class="icon">⚠️</div>
          <div>โหลดข้อมูลไม่สำเร็จ — ${escapeHtml(e.message || 'Unknown error')}</div>
        </div>
      `;
    }
  }

  // ============================================================
  // Render pet list
  // ============================================================
  function renderPetList(filter = '') {
    const container = document.getElementById('petContainer');
    
    let pets = allPets;
    if (filter) {
      const f = filter.toLowerCase();
      pets = allPets.filter(p =>
        (p.pet_name || '').toLowerCase().includes(f) ||
        (p.owner_name || '').toLowerCase().includes(f) ||
        (p.phone || '').includes(f)
      );
    }

    if (pets.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="icon">🐕</div>
          <div>${filter ? 'ไม่เจอเคสที่ค้นหา' : 'ยังไม่มีเจ้าของลงทะเบียน'}</div>
        </div>
      `;
      return;
    }

    container.innerHTML = `<div class="mmvd-pet-grid">${pets.map(petCardHtml).join('')}</div>`;
    
    container.querySelectorAll('.pet-card').forEach(card => {
      card.addEventListener('click', () => {
        const petId = card.dataset.petId;
        showPetDetail(petId);
      });
    });
  }

  function petCardHtml(pet) {
    // Get recent entries for summary
    const dailyEntries = allDaily.filter(d => d.pet_id === pet.id);
    const weeklyEntries = allWeekly.filter(w => w.pet_id === pet.id);
    
    // 7-day stats
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentDaily = dailyEntries.filter(d => new Date(d.entry_date) >= sevenDaysAgo);
    
    const srrValues = recentDaily.filter(d => d.srr).map(d => d.srr);
    const avgSrr = srrValues.length ? (srrValues.reduce((a,b) => a+b, 0) / srrValues.length) : null;
    const maxSrr = srrValues.length ? Math.max(...srrValues) : null;
    const highSrrDays = srrValues.filter(s => s >= 30).length;
    const syncopeCount = recentDaily.filter(d => d.syncope && d.syncope !== '0').length;
    const cyanoticCount = recentDaily.filter(d => d.gum_color === 'cyanotic').length;
    
    // Alert level
    let alertLevel = 'green';
    let alertMsg = '✅ ปกติ';
    if (cyanoticCount > 0 || (maxSrr && maxSrr >= 40) || syncopeCount >= 2) {
      alertLevel = 'red';
      alertMsg = '🚨 ต้องตรวจด่วน';
    } else if (highSrrDays >= 3 || syncopeCount >= 1 || (maxSrr && maxSrr >= 35)) {
      alertLevel = 'orange';
      alertMsg = '⚠️ น่ากังวล';
    } else if (highSrrDays >= 1 || (avgSrr && avgSrr >= 28)) {
      alertLevel = 'yellow';
      alertMsg = '⚠️ ติดตามใกล้';
    } else if (recentDaily.length === 0) {
      alertLevel = 'yellow';
      alertMsg = '📵 ไม่มีบันทึก 7 วัน';
    }
    
    // Last visit
    const allRecent = [...dailyEntries, ...weeklyEntries].sort((a,b) => new Date(b.entry_date) - new Date(a.entry_date));
    const lastVisit = allRecent.length > 0 ? formatLastVisit(allRecent[0].entry_date) : 'ยังไม่มีข้อมูล';
    
    // Total entries
    const totalEntries = dailyEntries.length + weeklyEntries.length;
    
    // Summary pills (recent values)
    const pills = [];
    if (avgSrr) {
      pills.push(`<span class="summary-pill ${avgSrr >= 30 ? 'warn' : ''}">SRR ~${avgSrr.toFixed(0)}</span>`);
    }
    if (maxSrr && maxSrr >= 30) {
      pills.push(`<span class="summary-pill warn">peak ${maxSrr}</span>`);
    }
    if (syncopeCount > 0) {
      pills.push(`<span class="summary-pill warn">😵 ${syncopeCount}×</span>`);
    }
    pills.push(`<span class="summary-pill">📋 ${totalEntries}</span>`);
    
    return `
      <button class="pet-card" data-pet-id="${pet.id}">
        <div class="pet-header">
          <span class="pet-emoji">🐕</span>
          <div class="pet-info">
            <div class="pet-name">${escapeHtml(pet.pet_name)}</div>
            <div class="owner-name">${escapeHtml(pet.owner_name)} · ${escapeHtml(pet.phone)}</div>
          </div>
        </div>
        <span class="alert-tag ${alertLevel}">${alertMsg}</span>
        <div class="pet-summary">${pills.join('')}</div>
        <div class="last-visit">📅 ${lastVisit}</div>
      </button>
    `;
  }

  function formatLastVisit(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'วันนี้';
    if (diffDays === 1) return 'เมื่อวาน';
    if (diffDays < 7) return `${diffDays} วันที่แล้ว`;
    if (diffDays < 30) return `${Math.floor(diffDays/7)} สัปดาห์ที่แล้ว`;
    return date.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  // ============================================================
  // Search
  // ============================================================
  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderPetList(e.target.value.trim());
  });

  // ============================================================
  // Pet Detail Modal
  // ============================================================
  const breathingLabels = { normal: '😊 ปกติ', effort: '😮‍💨 หายใจแรง', 'open-mouth': '😱 อ้าปาก', orthopnea: '🆘 นั่งหายใจ' };
  const coughLabels = { '0': '✅ ไม่ไอ', '1-3': '🙂 1-3 ครั้ง', '4-10': '😟 4-10 ครั้ง', '10+': '😰 >10 ครั้ง' };
  const appetiteLabels = { '100': '😋 100%', '75': '🙂 75%', '50': '😐 50%', '25': '😟 <25%', '0': '😨 0%' };
  const energyLabels = { excellent: '🤸 สดใส', normal: '🐕 ปกติ', tired: '😴 เหนื่อย', lethargic: '😪 ซึม' };
  const syncopeLabels = { '0': '✅ ไม่มี', '1': '⚠️ 1 ครั้ง', '2+': '🚨 ≥2 ครั้ง' };
  const gumLabels = { pink: '🩷 ชมพู', pale: '🤍 ซีด', cyanotic: '💜 ม่วง' };

  function showPetDetail(petId) {
    const pet = allPets.find(p => p.id === petId);
    if (!pet) return;
    
    currentPet = pet;
    
    const dailyEntries = allDaily.filter(d => d.pet_id === petId).sort((a,b) => new Date(a.entry_date) - new Date(b.entry_date));
    const weeklyEntries = allWeekly.filter(w => w.pet_id === petId).sort((a,b) => new Date(a.entry_date) - new Date(b.entry_date));

    // Calculate stats
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recent7 = dailyEntries.filter(d => new Date(d.entry_date) >= sevenDaysAgo);
    
    const srrValues = recent7.filter(d => d.srr).map(d => d.srr);
    const avgSrr = srrValues.length ? (srrValues.reduce((a,b) => a+b, 0) / srrValues.length) : null;
    const maxSrr = srrValues.length ? Math.max(...srrValues) : null;
    const highSrrDays = srrValues.filter(s => s >= 30).length;
    const syncopeCount = recent7.filter(d => d.syncope && d.syncope !== '0').length;
    
    // Combined sorted history (desc)
    const combined = [
      ...dailyEntries.map(h => ({ ...h, _kind: 'daily' })),
      ...weeklyEntries.map(w => ({ ...w, _kind: 'weekly' })),
    ].sort((a, b) => new Date(b.entry_date) - new Date(a.entry_date));
    
    // Build modal content
    document.getElementById('detailContent').innerHTML = `
      <div class="detail-header">
        <div>
          <h2>🐕 ${escapeHtml(pet.pet_name)}</h2>
          <div class="detail-owner">
            <strong>เจ้าของ:</strong> ${escapeHtml(pet.owner_name)} · 
            <a href="tel:${escapeHtml(pet.phone)}" style="color: var(--red); text-decoration: none;">📞 ${escapeHtml(pet.phone)}</a>
          </div>
          <div class="detail-owner" style="margin-top: 4px;">
            ลงทะเบียน: ${new Date(pet.created_at).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
        </div>
        <button class="detail-close" id="closeDetailBtn">✕ ปิด</button>
      </div>

      <div class="detail-actions">
        <button id="exportPetCsvBtn">📥 Export CSV</button>
        <button id="copyDetailBtn">📋 Copy รายงาน</button>
        <button class="danger" id="clearHistoryBtn">🧹 ล้างประวัติ</button>
        <button class="danger" id="deletePetBtn">🗑️ ลบเคส</button>
      </div>

      <!-- Stats -->
      <div class="detail-stats-grid">
        <div class="detail-stat-card">
          <div class="num ${avgSrr && avgSrr >= 30 ? 'warn' : ''}">${avgSrr ? avgSrr.toFixed(1) : '—'}</div>
          <div class="lbl">SRR เฉลี่ย 7 วัน</div>
        </div>
        <div class="detail-stat-card">
          <div class="num ${maxSrr && maxSrr >= 30 ? 'warn' : ''}">${maxSrr || '—'}</div>
          <div class="lbl">SRR สูงสุด</div>
        </div>
        <div class="detail-stat-card">
          <div class="num ${highSrrDays > 0 ? 'warn' : ''}">${highSrrDays}</div>
          <div class="lbl">วันที่ SRR ≥ 30</div>
        </div>
        <div class="detail-stat-card">
          <div class="num ${syncopeCount > 0 ? 'warn' : ''}">${syncopeCount}</div>
          <div class="lbl">ครั้งที่หมดสติ</div>
        </div>
        <div class="detail-stat-card">
          <div class="num">${dailyEntries.length}</div>
          <div class="lbl">บันทึกรายวันทั้งหมด</div>
        </div>
        <div class="detail-stat-card">
          <div class="num">${weeklyEntries.length}</div>
          <div class="lbl">บันทึกรายสัปดาห์</div>
        </div>
      </div>

      <!-- SRR Chart -->
      <div class="detail-chart">
        <div class="detail-chart-title">💤 SRR Trend (30 วันล่าสุด · เป้าหมาย &lt; 30)</div>
        <svg id="detailSrrChart"></svg>
      </div>

      <!-- Weight Chart -->
      <div class="detail-chart">
        <div class="detail-chart-title">⚖️ Weight Trend (12 สัปดาห์ล่าสุด)</div>
        <svg id="detailWeightChart"></svg>
      </div>

      <!-- History -->
      <div class="detail-chart-title" style="margin-top: 20px;">📅 ประวัติทั้งหมด</div>
      <div class="detail-history" id="detailHistory">
        ${combined.length === 0 ? `
          <div style="text-align: center; padding: 30px; color: var(--ink-mute); font: 500 13px var(--font-sans);">
            📭 ยังไม่มีบันทึก
          </div>
        ` : combined.map(entryDetailHtml).join('')}
      </div>
    `;
    
    document.getElementById('detailModal').classList.add('show');
    
    // Render charts
    renderSrrChartDetail(dailyEntries.slice(-30).filter(d => d.srr));
    renderWeightChartDetail(weeklyEntries.slice(-12).filter(w => w.weight));
    
    // Wire up buttons
    document.getElementById('closeDetailBtn').addEventListener('click', closeDetail);
    document.getElementById('exportPetCsvBtn').addEventListener('click', () => exportPetCsv(pet, dailyEntries, weeklyEntries));
    document.getElementById('copyDetailBtn').addEventListener('click', () => copyDetailReport(pet, combined));
    document.getElementById('clearHistoryBtn').addEventListener('click', () => clearPetHistory(pet));
    document.getElementById('deletePetBtn').addEventListener('click', () => deletePet(pet));
    
    // Wire up per-entry delete buttons
    document.querySelectorAll('.entry-delete-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const entryId = btn.dataset.entryId;
        const entryKind = btn.dataset.entryKind;
        await deleteEntry(pet.id, entryId, entryKind);
      });
    });
  }

  function entryDetailHtml(entry) {
    const stats = [];
    
    if (entry._kind === 'daily') {
      if (entry.srr) {
        const warn = entry.srr >= 30 ? 'warn' : '';
        stats.push(`<span class="detail-entry-stat ${warn}">💤 ${entry.srr}/min</span>`);
      }
      if (entry.breathing) stats.push(`<span class="detail-entry-stat">${breathingLabels[entry.breathing]}</span>`);
      if (entry.cough) stats.push(`<span class="detail-entry-stat">${coughLabels[entry.cough]}</span>`);
      if (entry.appetite) stats.push(`<span class="detail-entry-stat">${appetiteLabels[entry.appetite]}</span>`);
      if (entry.energy) stats.push(`<span class="detail-entry-stat">${energyLabels[entry.energy]}</span>`);
      if (entry.syncope && entry.syncope !== '0') stats.push(`<span class="detail-entry-stat warn">${syncopeLabels[entry.syncope]}</span>`);
      if (entry.gum_color && entry.gum_color !== 'pink') stats.push(`<span class="detail-entry-stat warn">${gumLabels[entry.gum_color]}</span>`);
    } else {
      if (entry.weight) stats.push(`<span class="detail-entry-stat">⚖️ ${entry.weight} kg</span>`);
      if (entry.abdomen) stats.push(`<span class="detail-entry-stat">📏 ${entry.abdomen} cm</span>`);
    }
    
    const dateStr = new Date(entry.entry_date).toLocaleDateString('th-TH', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });
    
    return `
      <div class="detail-entry">
        <div class="detail-entry-date">
          <span>${entry._kind === 'daily' ? '📋' : '📊'} ${dateStr}</span>
          <button class="entry-delete-btn" data-entry-id="${entry.id}" data-entry-kind="${entry._kind}" title="ลบรายการนี้">🗑️</button>
        </div>
        <div class="detail-entry-stats">${stats.join('')}</div>
        ${entry.notes ? `<div class="detail-entry-note">📝 ${escapeHtml(entry.notes)}</div>` : ''}
      </div>
    `;
  }

  function closeDetail() {
    document.getElementById('detailModal').classList.remove('show');
    currentPet = null;
  }

  // Click outside to close
  document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target.id === 'detailModal') closeDetail();
  });

  // ============================================================
  // Charts
  // ============================================================
  function renderSrrChartDetail(data) {
    const svg = document.getElementById('detailSrrChart');
    if (!svg) return;
    
    if (data.length < 2) {
      svg.innerHTML = `<text x="50%" y="50%" text-anchor="middle" fill="#666" font-size="13" font-family="IBM Plex Sans">ต้องการข้อมูลอย่างน้อย 2 วัน</text>`;
      return;
    }

    const width = svg.clientWidth || 600;
    const height = 180;
    const padX = 30, padY = 24;
    const chartW = width - padX * 2;
    const chartH = height - padY * 2;

    const maxSrr = Math.max(50, ...data.map(d => d.srr));
    const xStep = data.length > 1 ? chartW / (data.length - 1) : chartW;

    const points = data.map((d, i) => ({
      x: padX + i * xStep,
      y: padY + chartH - (d.srr / maxSrr) * chartH,
      srr: d.srr, date: d.entry_date,
    }));

    const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + p.x + ' ' + p.y).join(' ');
    const thresholdY = padY + chartH - (30 / maxSrr) * chartH;

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = `
      <line x1="${padX}" y1="${padY}" x2="${padX}" y2="${padY + chartH}" stroke="#e5e1db" />
      <line x1="${padX}" y1="${padY + chartH}" x2="${padX + chartW}" y2="${padY + chartH}" stroke="#e5e1db" />
      <line x1="${padX}" y1="${thresholdY}" x2="${padX + chartW}" y2="${thresholdY}" stroke="#dc2626" stroke-dasharray="4 4" stroke-width="1" opacity="0.5" />
      <text x="${padX + chartW - 4}" y="${thresholdY - 4}" text-anchor="end" fill="#dc2626" font-size="10" font-family="IBM Plex Mono">30</text>
      <text x="${padX - 6}" y="${padY + 4}" text-anchor="end" fill="#666" font-size="10" font-family="IBM Plex Mono">${maxSrr}</text>
      <text x="${padX - 6}" y="${padY + chartH}" text-anchor="end" fill="#666" font-size="10" font-family="IBM Plex Mono">0</text>
      <path d="${path}" fill="none" stroke="#dc2626" stroke-width="2" />
      ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="${p.srr >= 40 ? 5 : 4}" fill="${p.srr >= 40 ? '#dc2626' : p.srr >= 30 ? '#ea580c' : '#16a34a'}" stroke="white" stroke-width="1.5" />`).join('')}
      <text x="${points[0].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="IBM Plex Mono">${formatShortDate(points[0].date)}</text>
      <text x="${points[points.length - 1].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="IBM Plex Mono">${formatShortDate(points[points.length - 1].date)}</text>
    `;
  }

  function renderWeightChartDetail(data) {
    const svg = document.getElementById('detailWeightChart');
    if (!svg) return;
    
    if (data.length < 2) {
      svg.innerHTML = `<text x="50%" y="50%" text-anchor="middle" fill="#666" font-size="13" font-family="IBM Plex Sans">ต้องการข้อมูลอย่างน้อย 2 สัปดาห์</text>`;
      return;
    }

    const width = svg.clientWidth || 600;
    const height = 180;
    const padX = 36, padY = 24;
    const chartW = width - padX * 2;
    const chartH = height - padY * 2;

    const weights = data.map(d => parseFloat(d.weight));
    const minW = Math.min(...weights) - 0.3;
    const maxW = Math.max(...weights) + 0.3;
    const xStep = data.length > 1 ? chartW / (data.length - 1) : chartW;

    const points = data.map((d, i) => ({
      x: padX + i * xStep,
      y: padY + chartH - ((parseFloat(d.weight) - minW) / (maxW - minW)) * chartH,
      weight: d.weight, date: d.entry_date,
    }));

    const path = points.map((p, i) => (i === 0 ? 'M' : 'L') + p.x + ' ' + p.y).join(' ');

    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.innerHTML = `
      <line x1="${padX}" y1="${padY}" x2="${padX}" y2="${padY + chartH}" stroke="#e5e1db" />
      <line x1="${padX}" y1="${padY + chartH}" x2="${padX + chartW}" y2="${padY + chartH}" stroke="#e5e1db" />
      <text x="${padX - 6}" y="${padY + 4}" text-anchor="end" fill="#666" font-size="10" font-family="IBM Plex Mono">${maxW.toFixed(1)}</text>
      <text x="${padX - 6}" y="${padY + chartH}" text-anchor="end" fill="#666" font-size="10" font-family="IBM Plex Mono">${minW.toFixed(1)}</text>
      <path d="${path}" fill="none" stroke="#2563eb" stroke-width="2" />
      ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#2563eb" stroke="white" stroke-width="1.5" />`).join('')}
      <text x="${points[0].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="IBM Plex Mono">${formatShortDate(points[0].date)}</text>
      <text x="${points[points.length - 1].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="IBM Plex Mono">${formatShortDate(points[points.length - 1].date)}</text>
    `;
  }

  // ============================================================
  // Export CSV (single pet)
  // ============================================================
  function exportPetCsv(pet, dailyEntries, weeklyEntries) {
    let csv = `บันทึก MMVD: ${pet.pet_name}\n`;
    csv += `เจ้าของ,${pet.owner_name},เบอร์,${pet.phone}\n\n`;
    csv += 'ประเภท,วันที่,SRR,หายใจ,ไอ,กิน,พลังงาน,หมดสติ,เหงือก,น้ำหนัก,รอบเอว,หมายเหตุ\n';
    
    dailyEntries.forEach(h => {
      csv += [
        'รายวัน', h.entry_date, h.srr || '',
        h.breathing ? breathingLabels[h.breathing] : '',
        h.cough ? coughLabels[h.cough] : '',
        h.appetite ? appetiteLabels[h.appetite] : '',
        h.energy ? energyLabels[h.energy] : '',
        h.syncope ? syncopeLabels[h.syncope] : '',
        h.gum_color ? gumLabels[h.gum_color] : '',
        '', '',
        (h.notes || '').replace(/[",\n]/g, ' '),
      ].map(v => `"${v}"`).join(',') + '\n';
    });
    
    weeklyEntries.forEach(w => {
      csv += [
        'รายสัปดาห์', w.entry_date,
        '', '', '', '', '', '', '',
        w.weight || '', w.abdomen || '',
        '',
      ].map(v => `"${v}"`).join(',') + '\n';
    });
    
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mmvd-${pet.pet_name}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('✅ ดาวน์โหลด CSV แล้ว');
  }

  // ============================================================
  // Copy report
  // ============================================================
  async function copyDetailReport(pet, combined) {
    const recent = combined.slice(0, 30);
    
    let text = `📋 รายงาน MMVD Follow-up\n`;
    text += `🐕 น้องหมา: ${pet.pet_name}\n`;
    text += `👤 เจ้าของ: ${pet.owner_name}\n`;
    text += `📞 เบอร์: ${pet.phone}\n`;
    text += `📅 รายงาน: ${new Date().toLocaleDateString('th-TH')}\n`;
    text += `─────────────────────\n\n`;
    
    recent.forEach(e => {
      const dateStr = new Date(e.entry_date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short' });
      if (e._kind === 'daily') {
        text += `📅 ${dateStr}\n`;
        if (e.srr) text += `  💤 SRR: ${e.srr}/min${e.srr >= 30 ? ' ⚠️' : ''}\n`;
        if (e.breathing) text += `  🫁 หายใจ: ${breathingLabels[e.breathing]}\n`;
        if (e.cough) text += `  😮‍💨 ไอ: ${coughLabels[e.cough]}\n`;
        if (e.appetite) text += `  🍽️ กิน: ${appetiteLabels[e.appetite]}\n`;
        if (e.energy) text += `  ⚡ พลังงาน: ${energyLabels[e.energy]}\n`;
        if (e.syncope && e.syncope !== '0') text += `  😵 หมดสติ: ${syncopeLabels[e.syncope]}\n`;
        if (e.gum_color && e.gum_color !== 'pink') text += `  👅 เหงือก: ${gumLabels[e.gum_color]}\n`;
        if (e.notes) text += `  📝 ${e.notes}\n`;
        text += '\n';
      } else {
        text += `📊 ${dateStr} (รายสัปดาห์)\n`;
        if (e.weight) text += `  ⚖️ น้ำหนัก: ${e.weight} กก.\n`;
        if (e.abdomen) text += `  📏 รอบเอว: ${e.abdomen} ซม.\n\n`;
      }
    });
    
    try {
      await navigator.clipboard.writeText(text);
      showToast('✅ คัดลอกแล้ว');
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('✅ คัดลอกแล้ว');
    }
  }

  // ============================================================
  // Delete single entry
  // ============================================================
  async function deleteEntry(petId, entryId, entryKind) {
    if (!confirm('ลบรายการนี้?')) return;
    
    try {
      const table = entryKind === 'daily' ? 'mmvd_daily' : 'mmvd_weekly';
      const { error } = await sb.from(table).delete().eq('id', entryId);
      if (error) throw error;
      
      // Reload + re-render detail
      await loadAll();
      showPetDetail(petId);
      showToast('✅ ลบรายการแล้ว');
    } catch (e) {
      console.error(e);
      showToast('ลบไม่สำเร็จ', 'error');
    }
  }

  // ============================================================
  // Clear pet history (keep pet, delete all entries)
  // ============================================================
  async function clearPetHistory(pet) {
    const dailyCount = allDaily.filter(d => d.pet_id === pet.id).length;
    const weeklyCount = allWeekly.filter(w => w.pet_id === pet.id).length;
    const total = dailyCount + weeklyCount;
    
    if (total === 0) {
      showToast('ไม่มีประวัติให้ลบ', 'error');
      return;
    }
    
    if (!confirm(`⚠️ ล้างประวัติทั้งหมด ${total} รายการ ของ ${pet.pet_name}?\n(เก็บข้อมูลเจ้าของ · ลบเฉพาะบันทึกอาการ)`)) return;
    if (!confirm('แน่ใจอีกครั้ง?')) return;
    
    try {
      const [dRes, wRes] = await Promise.all([
        sb.from('mmvd_daily').delete().eq('pet_id', pet.id),
        sb.from('mmvd_weekly').delete().eq('pet_id', pet.id),
      ]);
      
      if (dRes.error) throw dRes.error;
      if (wRes.error) throw wRes.error;
      
      await loadAll();
      showPetDetail(pet.id);
      showToast(`✅ ล้างประวัติ ${total} รายการแล้ว`);
    } catch (e) {
      console.error(e);
      showToast('ล้างประวัติไม่สำเร็จ', 'error');
    }
  }

  // ============================================================
  // Delete pet
  // ============================================================
  async function deletePet(pet) {
    if (!confirm(`⚠️ ลบเคส ${pet.pet_name} ทั้งหมด?\nการลบนี้ไม่สามารถกู้คืนได้`)) return;
    if (!confirm('แน่ใจอีกครั้ง?')) return;
    
    try {
      // Cascade delete will handle daily + weekly via FK
      const { error } = await sb.from('mmvd_pets').delete().eq('id', pet.id);
      if (error) throw error;
      
      closeDetail();
      await loadAll();
      showToast('✅ ลบเคสแล้ว');
    } catch (e) {
      console.error(e);
      showToast('ลบไม่สำเร็จ', 'error');
    }
  }

  // ============================================================
  // Helpers
  // ============================================================
  function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }
  
  function formatShortDate(dateStr) {
    const d = new Date(dateStr);
    return (d.getMonth() + 1) + '/' + d.getDate();
  }
  
  function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show ' + type;
    setTimeout(() => toast.className = 'toast', 2200);
  }

  // ============================================================
  // Start
  // ============================================================
  init();
})();
