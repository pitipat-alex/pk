// ============================================================
// MMVD Self-Check — Supabase backend
// ============================================================
'use strict';

const SUPABASE_URL = 'https://bxlyctricjayindvcfjo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4bHljdHJpY2pheWluZHZjZmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDE2NTAsImV4cCI6MjA5MzAxNzY1MH0.8b-UqK-SW1dOyZ0WhAC5NBns8lAe1kTgn2xJMiHvaRA';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const PET_ID_KEY = 'mmvd-pet-id';

let petId = null;
let petInfo = null;
let history = [];
let weekly = [];
let dailyForm = {};

const today = new Date().toISOString().split('T')[0];

// ============================================================
// Helpers
// ============================================================
function showLoading(text = 'กำลังโหลด...') {
  document.getElementById('loadingText').textContent = text;
  document.getElementById('loadingOverlay').classList.add('show');
}
function hideLoading() {
  document.getElementById('loadingOverlay').classList.remove('show');
}
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  setTimeout(() => toast.className = 'toast', 2200);
}
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

// ============================================================
// Init
// ============================================================
async function init() {
  petId = localStorage.getItem(PET_ID_KEY);

  if (!petId) {
    document.getElementById('registerModal').classList.add('show');
    return;
  }

  showLoading('กำลังโหลดข้อมูล...');
  try {
    const { data, error } = await sb
      .from('mmvd_pets')
      .select('*')
      .eq('id', petId)
      .single();

    if (error || !data) {
      localStorage.removeItem(PET_ID_KEY);
      hideLoading();
      document.getElementById('registerModal').classList.add('show');
      return;
    }

    petInfo = data;
    showMainApp();
    await loadEntries();
    hideLoading();

  } catch (e) {
    console.error(e);
    hideLoading();
    showToast('โหลดข้อมูลไม่สำเร็จ — ลองรีเฟรช', 'error');
  }
}

function showMainApp() {
  document.getElementById('registerModal').classList.remove('show');
  document.getElementById('mainApp').style.display = 'block';

  document.getElementById('display-petName').textContent = petInfo.pet_name;
  document.getElementById('display-ownerInfo').textContent = `${petInfo.owner_name} · ${petInfo.phone}`;

  document.getElementById('entryDate').value = today;
  document.getElementById('weeklyDate').value = today;
}

// ============================================================
// Registration
// ============================================================
document.getElementById('registerBtn').addEventListener('click', async () => {
  const petName = document.getElementById('reg-petName').value.trim();
  const ownerName = document.getElementById('reg-ownerName').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();

  if (!petName || !ownerName || !phone) {
    showToast('กรุณากรอกข้อมูลให้ครบ', 'error');
    return;
  }

  if (phone.replace(/\D/g, '').length < 9) {
    showToast('เบอร์โทรไม่ถูกต้อง', 'error');
    return;
  }

  showLoading('กำลังลงทะเบียน...');

  try {
    const { data, error } = await sb
      .from('mmvd_pets')
      .insert([{
        pet_name: petName,
        owner_name: ownerName,
        phone: phone,
        meds: [],
      }])
      .select()
      .single();

    if (error) throw error;

    petId = data.id;
    petInfo = data;
    localStorage.setItem(PET_ID_KEY, petId);

    showMainApp();
    await loadEntries();
    hideLoading();
    showToast('✨ ลงทะเบียนเรียบร้อย', 'success');

  } catch (e) {
    console.error(e);
    hideLoading();
    showToast('ลงทะเบียนไม่สำเร็จ — ลองอีกครั้ง', 'error');
  }
});

// ============================================================
// Change pet info
// ============================================================
document.getElementById('changeInfoBtn').addEventListener('click', async () => {
  const newPetName = prompt('ชื่อน้องหมา:', petInfo.pet_name);
  if (!newPetName || !newPetName.trim()) return;

  const newOwnerName = prompt('ชื่อเจ้าของ:', petInfo.owner_name);
  if (!newOwnerName || !newOwnerName.trim()) return;

  const newPhone = prompt('เบอร์โทร:', petInfo.phone);
  if (!newPhone || !newPhone.trim()) return;

  showLoading('กำลังบันทึก...');

  try {
    const { data, error } = await sb
      .from('mmvd_pets')
      .update({
        pet_name: newPetName.trim(),
        owner_name: newOwnerName.trim(),
        phone: newPhone.trim(),
      })
      .eq('id', petId)
      .select()
      .single();

    if (error) throw error;

    petInfo = data;
    document.getElementById('display-petName').textContent = petInfo.pet_name;
    document.getElementById('display-ownerInfo').textContent = `${petInfo.owner_name} · ${petInfo.phone}`;
    hideLoading();
    showToast('✅ บันทึกแล้ว', 'success');

  } catch (e) {
    console.error(e);
    hideLoading();
    showToast('บันทึกไม่สำเร็จ', 'error');
  }
});

// ============================================================
// Load entries
// ============================================================
async function loadEntries() {
  if (!petId) return;

  try {
    const [dailyRes, weeklyRes] = await Promise.all([
      sb.from('mmvd_daily').select('*').eq('pet_id', petId).order('entry_date', { ascending: true }),
      sb.from('mmvd_weekly').select('*').eq('pet_id', petId).order('entry_date', { ascending: true }),
    ]);

    if (dailyRes.error) throw dailyRes.error;
    if (weeklyRes.error) throw weeklyRes.error;

    history = dailyRes.data || [];
    weekly = weeklyRes.data || [];

  } catch (e) {
    console.error(e);
    showToast('โหลดประวัติไม่สำเร็จ', 'error');
  }
}

// ============================================================
// Tabs
// ============================================================
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');

    if (tab.dataset.tab === 'history') renderHistory();
    if (tab.dataset.tab === 'trends') renderTrends();
  });
});

// ============================================================
// Segmented controls
// ============================================================
document.querySelectorAll('.segmented').forEach(seg => {
  const field = seg.dataset.field;
  seg.querySelectorAll('.seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      seg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      dailyForm[field] = btn.dataset.value;
    });
  });
});

// ============================================================
// SRR Alert
// ============================================================
document.getElementById('srr').addEventListener('input', (e) => {
  const val = parseInt(e.target.value);
  const alertEl = document.getElementById('srrAlert');

  if (!val) { alertEl.innerHTML = ''; return; }

  if (val < 30) {
    alertEl.innerHTML = '<div class="alert green" style="margin-top: 10px;"><span class="icon">✅</span><div>ปกติ — SRR &lt; 30 ครั้ง/นาที</div></div>';
  } else if (val < 35) {
    alertEl.innerHTML = '<div class="alert yellow" style="margin-top: 10px;"><span class="icon">⚠️</span><div>เริ่มน่ากังวล — แนะนำตรวจซ้ำใน 1-2 ชม. · ถ้ายังคงสูง ติดต่อคลินิก</div></div>';
  } else if (val < 40) {
    alertEl.innerHTML = '<div class="alert orange" style="margin-top: 10px;"><span class="icon">⚠️</span><div>สูงผิดปกติ — ติดต่อคลินิกวันนี้</div></div>';
  } else {
    alertEl.innerHTML = '<div class="alert red" style="margin-top: 10px;"><span class="icon">🚨</span><div><strong>EMERGENCY!</strong> SRR &gt; 40 = pulmonary edema imminent · เรียกหมอ/พาไปคลินิกด่วน!</div></div>';
  }
});

// ============================================================
// Weight Alert
// ============================================================
document.getElementById('weight').addEventListener('input', (e) => {
  const val = parseFloat(e.target.value);
  const alertEl = document.getElementById('weightAlert');

  if (!val || weekly.length === 0) { alertEl.innerHTML = ''; return; }

  const lastWeight = parseFloat(weekly[weekly.length - 1].weight);
  if (!lastWeight) return;

  const diff = val - lastWeight;
  const pctDiff = (diff / lastWeight) * 100;

  if (Math.abs(pctDiff) < 2) {
    alertEl.innerHTML = `<div class="alert green" style="margin-top: 10px;"><span class="icon">✅</span><div>เปลี่ยนแปลงน้อย (${diff > 0 ? '+' : ''}${diff.toFixed(2)} กก. / ${pctDiff > 0 ? '+' : ''}${pctDiff.toFixed(1)}%)</div></div>`;
  } else if (Math.abs(pctDiff) < 5) {
    alertEl.innerHTML = `<div class="alert yellow" style="margin-top: 10px;"><span class="icon">⚠️</span><div>เปลี่ยนแปลง ${pctDiff > 0 ? '+' : ''}${pctDiff.toFixed(1)}% (${diff > 0 ? '+' : ''}${diff.toFixed(2)} กก.) — ${pctDiff > 0 ? 'อาจ fluid retention' : 'อาจ cachexia'}</div></div>`;
  } else {
    alertEl.innerHTML = `<div class="alert red" style="margin-top: 10px;"><span class="icon">🚨</span><div><strong>เปลี่ยนแปลงมาก!</strong> ${pctDiff > 0 ? '+' : ''}${pctDiff.toFixed(1)}% (${diff > 0 ? '+' : ''}${diff.toFixed(2)} กก.) — ${pctDiff > 0 ? 'fluid overload (ascites?)' : 'cachexia advancing'} · ติดต่อคลินิก</div></div>`;
  }
});

// ============================================================
// Save Daily
// ============================================================
document.getElementById('saveDailyBtn').addEventListener('click', async () => {
  const entryDate = document.getElementById('entryDate').value;
  const srr = document.getElementById('srr').value;
  const notes = document.getElementById('notes').value;

  if (!entryDate) { showToast('กรุณาเลือกวันที่', 'error'); return; }

  if (!srr && !dailyForm.breathing && !dailyForm.cough && !dailyForm.appetite && !dailyForm.energy) {
    showToast('กรุณากรอกข้อมูลอย่างน้อย 1 ค่า', 'error');
    return;
  }

  showLoading('กำลังบันทึก...');

  const entry = {
    pet_id: petId,
    entry_date: entryDate,
    srr: srr ? parseInt(srr) : null,
    breathing: dailyForm.breathing || null,
    cough: dailyForm.cough || null,
    appetite: dailyForm.appetite || null,
    energy: dailyForm.energy || null,
    syncope: dailyForm.syncope || null,
    gum_color: dailyForm.gumColor || null,
    notes: notes || null,
  };

  try {
    const { error } = await sb
      .from('mmvd_daily')
      .upsert([entry], { onConflict: 'pet_id,entry_date' });

    if (error) throw error;

    await loadEntries();
    hideLoading();
    showToast('✅ บันทึกข้อมูลเรียบร้อย', 'success');

    document.getElementById('srr').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('srrAlert').innerHTML = '';
    document.querySelectorAll('#tab-daily .seg-btn').forEach(b => b.classList.remove('active'));
    dailyForm = {};

  } catch (e) {
    console.error(e);
    hideLoading();
    showToast('บันทึกไม่สำเร็จ — ลองอีกครั้ง', 'error');
  }
});

// ============================================================
// Save Weekly
// ============================================================
document.getElementById('saveWeeklyBtn').addEventListener('click', async () => {
  const entryDate = document.getElementById('weeklyDate').value;
  const weight = document.getElementById('weight').value;
  const abdomen = document.getElementById('abdomen').value;

  if (!entryDate) { showToast('กรุณาเลือกวันที่', 'error'); return; }
  if (!weight && !abdomen) { showToast('กรุณากรอกน้ำหนักหรือรอบเอว', 'error'); return; }

  showLoading('กำลังบันทึก...');

  const entry = {
    pet_id: petId,
    entry_date: entryDate,
    weight: weight ? parseFloat(weight) : null,
    abdomen: abdomen ? parseFloat(abdomen) : null,
  };

  try {
    const { error } = await sb
      .from('mmvd_weekly')
      .upsert([entry], { onConflict: 'pet_id,entry_date' });

    if (error) throw error;

    await loadEntries();
    hideLoading();
    showToast('✅ บันทึกข้อมูลเรียบร้อย', 'success');

    document.getElementById('weight').value = '';
    document.getElementById('abdomen').value = '';
    document.getElementById('weightAlert').innerHTML = '';

  } catch (e) {
    console.error(e);
    hideLoading();
    showToast('บันทึกไม่สำเร็จ', 'error');
  }
});

// ============================================================
// History rendering
// ============================================================
const breathingLabels = { normal: '😊 ปกติ', effort: '😮‍💨 หายใจแรง', 'open-mouth': '😱 อ้าปาก', orthopnea: '🆘 นั่งหายใจ' };
const coughLabels = { '0': '✅ ไม่ไอ', '1-3': '🙂 1-3 ครั้ง', '4-10': '😟 4-10 ครั้ง', '10+': '😰 >10 ครั้ง' };
const appetiteLabels = { '100': '😋 100%', '75': '🙂 75%', '50': '😐 50%', '25': '😟 <25%', '0': '😨 0%' };
const energyLabels = { excellent: '🤸 สดใส', normal: '🐕 ปกติ', tired: '😴 เหนื่อย', lethargic: '😪 ซึม' };
const syncopeLabels = { '0': '✅ ไม่มี', '1': '⚠️ 1 ครั้ง', '2+': '🚨 ≥2 ครั้ง' };
const gumLabels = { pink: '🩷 ชมพู', pale: '🤍 ซีด', cyanotic: '💜 ม่วง' };

function renderHistory() {
  const list = document.getElementById('historyList');

  const combined = [
    ...history.map(h => ({ ...h, _kind: 'daily' })),
    ...weekly.map(w => ({ ...w, _kind: 'weekly' })),
  ].sort((a, b) => new Date(b.entry_date) - new Date(a.entry_date));

  if (combined.length === 0) {
    list.innerHTML = '<div class="card" style="text-align: center; color: var(--ink-mute);">📭 ยังไม่มีข้อมูลที่บันทึก</div>';
    return;
  }

  list.innerHTML = combined.map(entry => {
    const stats = [];

    if (entry._kind === 'daily') {
      if (entry.srr) {
        const warn = entry.srr >= 30 ? 'warn' : '';
        stats.push(`<span class="history-stat ${warn}">💤 SRR ${entry.srr}/min</span>`);
      }
      if (entry.breathing) stats.push(`<span class="history-stat">${breathingLabels[entry.breathing]}</span>`);
      if (entry.cough) stats.push(`<span class="history-stat">😮‍💨 ${coughLabels[entry.cough]}</span>`);
      if (entry.appetite) stats.push(`<span class="history-stat">🍽️ ${appetiteLabels[entry.appetite]}</span>`);
      if (entry.energy) stats.push(`<span class="history-stat">⚡ ${energyLabels[entry.energy]}</span>`);
      if (entry.syncope && entry.syncope !== '0') stats.push(`<span class="history-stat warn">😵 ${syncopeLabels[entry.syncope]}</span>`);
      if (entry.gum_color && entry.gum_color !== 'pink') stats.push(`<span class="history-stat warn">${gumLabels[entry.gum_color]}</span>`);
    } else {
      if (entry.weight) stats.push(`<span class="history-stat">⚖️ ${entry.weight} กก.</span>`);
      if (entry.abdomen) stats.push(`<span class="history-stat">📏 ${entry.abdomen} ซม.</span>`);
    }

    const dateStr = new Date(entry.entry_date).toLocaleDateString('th-TH', {
      weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
    });

    return `
      <div class="history-item">
        <div class="history-date">
          <span>${entry._kind === 'daily' ? '📋' : '📊'} ${dateStr}</span>
          <button class="delete-btn" data-del-id="${entry.id}" data-del-kind="${entry._kind}">ลบ</button>
        </div>
        <div class="history-stats">${stats.join('')}</div>
        ${entry.notes ? `<div class="history-note">📝 ${escapeHtml(entry.notes)}</div>` : ''}
      </div>
    `;
  }).join('');

  list.querySelectorAll('[data-del-id]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.delId;
      const kind = btn.dataset.delKind;
      if (!confirm('ลบข้อมูลนี้?')) return;

      showLoading('กำลังลบ...');
      try {
        const table = kind === 'daily' ? 'mmvd_daily' : 'mmvd_weekly';
        const { error } = await sb.from(table).delete().eq('id', id);
        if (error) throw error;
        await loadEntries();
        renderHistory();
        hideLoading();
        showToast('ลบเรียบร้อย', 'success');
      } catch (e) {
        console.error(e);
        hideLoading();
        showToast('ลบไม่สำเร็จ', 'error');
      }
    });
  });
}

// ============================================================
// Refresh
// ============================================================
document.getElementById('refreshBtn').addEventListener('click', async () => {
  showLoading('กำลังรีเฟรช...');
  await loadEntries();
  renderHistory();
  hideLoading();
  showToast('✅ รีเฟรชเรียบร้อย', 'success');
});

// ============================================================
// Export CSV
// ============================================================
document.getElementById('exportCsvBtn').addEventListener('click', () => {
  let csv = 'ประเภท,วันที่,SRR,หายใจ,ไอ,กิน,พลังงาน,หมดสติ,เหงือก,น้ำหนัก,รอบเอว,หมายเหตุ\n';

  history.forEach(h => {
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

  weekly.forEach(w => {
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
  a.download = `mmvd-${petInfo.pet_name}-${today}.csv`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('✅ ดาวน์โหลด CSV เรียบร้อย', 'success');
});

// ============================================================
// Copy for Vet
// ============================================================
document.getElementById('copyForVetBtn').addEventListener('click', async () => {
  const recent = [
    ...history.map(h => ({ ...h, _kind: 'daily' })),
    ...weekly.map(w => ({ ...w, _kind: 'weekly' })),
  ].sort((a, b) => new Date(b.entry_date) - new Date(a.entry_date)).slice(0, 14);

  let text = `📋 บันทึกอาการ MMVD\n`;
  text += `🐕 น้องหมา: ${petInfo.pet_name}\n`;
  text += `👤 เจ้าของ: ${petInfo.owner_name}\n`;
  text += `📞 เบอร์โทร: ${petInfo.phone}\n`;
  text += `📅 วันที่ส่ง: ${new Date().toLocaleDateString('th-TH')}\n`;
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
    showToast('✅ คัดลอกแล้ว · paste ส่งให้คุณหมอได้เลย', 'success');
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✅ คัดลอกแล้ว', 'success');
  }
});

// ============================================================
// Trends — Charts
// ============================================================
function renderTrends() {
  renderSrrChart();
  renderWeightChart();
  renderWeeklyStats();
}

function renderSrrChart() {
  const svg = document.getElementById('srrChart');
  const data = history.filter(h => h.srr).slice(-30);

  if (data.length < 2) {
    svg.innerHTML = `<text x="50%" y="50%" text-anchor="middle" fill="#666" font-size="13" font-family="Sarabun">ต้องการข้อมูลอย่างน้อย 2 วัน</text>`;
    return;
  }

  const width = svg.clientWidth || 320;
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
    <text x="${padX + chartW - 4}" y="${thresholdY - 4}" text-anchor="end" fill="#dc2626" font-size="10" font-family="JetBrains Mono">30</text>
    <text x="${padX - 6}" y="${padY + 4}" text-anchor="end" fill="#666" font-size="10" font-family="JetBrains Mono">${maxSrr}</text>
    <text x="${padX - 6}" y="${padY + chartH}" text-anchor="end" fill="#666" font-size="10" font-family="JetBrains Mono">0</text>
    <path d="${path}" fill="none" stroke="#dc2626" stroke-width="2" />
    ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="${p.srr >= 40 ? 5 : 4}" fill="${p.srr >= 40 ? '#dc2626' : p.srr >= 30 ? '#ea580c' : '#16a34a'}" stroke="white" stroke-width="1.5" />`).join('')}
    <text x="${points[0].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="JetBrains Mono">${formatShortDate(points[0].date)}</text>
    <text x="${points[points.length - 1].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="JetBrains Mono">${formatShortDate(points[points.length - 1].date)}</text>
  `;
}

function renderWeightChart() {
  const svg = document.getElementById('weightChart');
  const data = weekly.filter(w => w.weight).slice(-12);

  if (data.length < 2) {
    svg.innerHTML = `<text x="50%" y="50%" text-anchor="middle" fill="#666" font-size="13" font-family="Sarabun">ต้องการข้อมูลอย่างน้อย 2 สัปดาห์</text>`;
    return;
  }

  const width = svg.clientWidth || 320;
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
    <text x="${padX - 6}" y="${padY + 4}" text-anchor="end" fill="#666" font-size="10" font-family="JetBrains Mono">${maxW.toFixed(1)}</text>
    <text x="${padX - 6}" y="${padY + chartH}" text-anchor="end" fill="#666" font-size="10" font-family="JetBrains Mono">${minW.toFixed(1)}</text>
    <path d="${path}" fill="none" stroke="#2563eb" stroke-width="2" />
    ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#2563eb" stroke="white" stroke-width="1.5" />`).join('')}
    <text x="${points[0].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="JetBrains Mono">${formatShortDate(points[0].date)}</text>
    <text x="${points[points.length - 1].x}" y="${height - 6}" text-anchor="middle" fill="#666" font-size="10" font-family="JetBrains Mono">${formatShortDate(points[points.length - 1].date)}</text>
  `;
}

function renderWeeklyStats() {
  const stats = document.getElementById('weeklyStats');

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const recent = history.filter(h => new Date(h.entry_date) >= sevenDaysAgo);

  if (recent.length === 0) {
    stats.innerHTML = '<div class="chart-empty">ยังไม่มีข้อมูลใน 7 วันล่าสุด</div>';
    return;
  }

  const srrValues = recent.filter(r => r.srr).map(r => r.srr);
  const avgSrr = srrValues.length ? (srrValues.reduce((a, b) => a + b, 0) / srrValues.length) : null;
  const maxSrr = srrValues.length ? Math.max(...srrValues) : null;
  const highSrrDays = srrValues.filter(s => s >= 30).length;
  const syncopeCount = recent.filter(r => r.syncope && r.syncope !== '0').length;
  const cyanoticCount = recent.filter(r => r.gum_color === 'cyanotic').length;

  let alertLevel = 'green';
  let alertMsg = '✅ ทุกอย่างดูปกติ — เก็บฝึกบันทึกต่อเนื่อง';

  if (cyanoticCount > 0 || (maxSrr && maxSrr >= 40) || syncopeCount >= 2) {
    alertLevel = 'red';
    alertMsg = '🚨 พบสัญญาณรุนแรง — ติดต่อคลินิกด่วน';
  } else if (highSrrDays >= 3 || syncopeCount >= 1 || (maxSrr && maxSrr >= 35)) {
    alertLevel = 'orange';
    alertMsg = '⚠️ มีสัญญาณน่ากังวล — ติดต่อคลินิก';
  } else if (highSrrDays >= 1 || (avgSrr && avgSrr >= 28)) {
    alertLevel = 'yellow';
    alertMsg = '⚠️ เริ่มมีค่าผิดปกติบ้าง — ติดตามใกล้ชิด';
  }

  stats.innerHTML = `
    <div class="alert ${alertLevel}">
      <span class="icon">${alertLevel === 'red' ? '🚨' : alertLevel === 'orange' || alertLevel === 'yellow' ? '⚠️' : '✅'}</span>
      <div>${alertMsg}</div>
    </div>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 12px;">
      <div style="background: var(--bg); padding: 12px; border-radius: 10px; text-align: center;">
        <div style="font: 700 22px var(--font-mono); color: var(--red);">${avgSrr ? avgSrr.toFixed(1) : '—'}</div>
        <div style="font: 500 11px var(--font-sans); color: var(--ink-mute);">SRR เฉลี่ย</div>
      </div>
      <div style="background: var(--bg); padding: 12px; border-radius: 10px; text-align: center;">
        <div style="font: 700 22px var(--font-mono); color: ${maxSrr && maxSrr >= 30 ? 'var(--red)' : 'var(--ink)'};">${maxSrr || '—'}</div>
        <div style="font: 500 11px var(--font-sans); color: var(--ink-mute);">SRR สูงสุด</div>
      </div>
      <div style="background: var(--bg); padding: 12px; border-radius: 10px; text-align: center;">
        <div style="font: 700 22px var(--font-mono); color: ${highSrrDays > 0 ? 'var(--orange)' : 'var(--ink)'};">${highSrrDays}</div>
        <div style="font: 500 11px var(--font-sans); color: var(--ink-mute);">วันที่ SRR ≥ 30</div>
      </div>
      <div style="background: var(--bg); padding: 12px; border-radius: 10px; text-align: center;">
        <div style="font: 700 22px var(--font-mono); color: ${syncopeCount > 0 ? 'var(--red)' : 'var(--ink)'};">${syncopeCount}</div>
        <div style="font: 500 11px var(--font-sans); color: var(--ink-mute);">ครั้งที่หมดสติ</div>
      </div>
    </div>
  `;
}

// ============================================================
// INIT
// ============================================================
init();
