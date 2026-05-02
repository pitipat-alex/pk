/* ===========================================================================
   pk · Radiology Handbook — radiology-data.js
   ----------------------------------------------------------------------------
   เนื้อหาเชิงโครงสร้างอิง:
   "Textbook of Veterinary Diagnostic Radiology" (Thrall & Seiler, 8th Ed., 2022)
   เนื้อหาเรียบเรียงใหม่โดย Alex สำหรับ pk
   ภาษาไทยเป็นหลัก · medical term ทับศัพท์
   =========================================================================== */

window.RADIOLOGY_DATA = [

  /* ============================================================
     Phase 1 placeholder — จะเพิ่ม content ใน Phase 2-4
     ============================================================ */

  {
    id: 'rad-rule-of-2s',
    titleEn: 'Rule of 2s — Radiographic Workflow',
    titleTh: 'หลัก Rule of 2s ในการตรวจรังสี',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['rule of 2s', 'workflow', 'radiograph', 'principles'],
    aliases: ['Rule of 2s', 'หลักการถ่าย'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>หลักการพื้นฐานก่อน interpret radiograph ทุกเคส</li>
          <li>ป้องกัน mistake ที่ขึ้นอยู่กับ projection / view เดียว</li>
          <li>เพิ่ม diagnostic accuracy</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — หลักการที่ต้องใช้ทุกเคส</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>X-ray machine + cassette/digital sensor</li>
          <li>Lead PPE (apron, thyroid shield, gloves)</li>
          <li>Positioning aids (foam wedges, sandbags, V-trough, tape)</li>
          <li>Marker (L/R)</li>
          <li>Sedation ถ้าจำเป็น</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Rule of 2s — กฎ "2" สำคัญทุกเคส</span>
          <ul>
            <li><strong>2</strong>Views — ถ่าย <strong>2 มุมตั้งฉากกัน</strong> เสมอ (lateral + VD/DV)</li>
            <li><strong>2</strong>Joints — ถ่ายให้เห็น <strong>2 ข้อต่อ</strong> เหนือและใต้ของ long bone</li>
            <li><strong>2</strong>Sides — เคสบาดเจ็บ ถ่าย <strong>2 ข้าง</strong> เปรียบเทียบ</li>
            <li><strong>2</strong>Times — เคส follow-up ถ่ายซ้ำเพื่อเทียบ progression</li>
            <li><strong>2</strong>Abnormalities — หา &gt; 1 lesion เสมอ ไม่หยุดที่อันแรก</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"2-2-2-2-2"</strong> — รู้จัก rule of 2s = ลด miss diagnosis ได้มาก<br>
          ⚠️ Single view = miss disease บ่อย · ถ่ายขาให้เห็นข้อทั้งบนและล่าง = วินิจฉัย fracture/luxation ครบ</p>
        </div>

        <p><strong>Workflow มาตรฐาน:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Image Quality Check — "PEAR"</span>
          <ul>
            <li><strong>P</strong>osition — สมมาตร · ไม่บิด · symmetric ribs/spine</li>
            <li><strong>E</strong>xposure — ไม่ over/underexposed · เห็น vessels ผ่าน heart</li>
            <li><strong>A</strong>natomy — ขอบครบ · ทุกอย่างใน field</li>
            <li><strong>R</strong>espiration — inspiratory phase ถ้าเป็น thorax</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"PEAR ก่อน Read"</strong> — ตรวจ quality ก่อน interpret<br>
          ⚠️ Image แย่ → ตีความผิด → re-take ดีกว่าเสี่ยง miss</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">Common "Rule of 2s" Examples</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Thoracic met (RL+LL+VD)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Limb fracture (Lat+CrCd)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2-3</span>
              <span class="num-label">Abdominal (RL+VD ± LL)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Hip dysplasia (VD+frog-leg)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 จำนวน views ขั้นต่ำสำหรับแต่ละกรณี<br>
          📌 <strong>Thorax met = 3 views &gt; 2 views</strong> · sensitivity เพิ่มขึ้นมาก</p>
        </div>

        <ol>
          <li>ถ่าย minimum 2 views ตั้งฉากกัน</li>
          <li>ตรวจ image quality ก่อน (PEAR)</li>
          <li>Interpret ด้วย systematic approach (ดู entry แต่ละระบบ)</li>
          <li>เปรียบเทียบกับ contralateral side ถ้ามีปัญหาเดียว</li>
          <li>Recheck/follow-up ตาม clinical course</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>การถ่ายมุมเดียว → miss disease (เช่น nodule ที่ silhouette กับ heart)</li>
          <li>Over/under-exposure → ตีความผิด (anatomy หาย/เกิน)</li>
          <li>Bad position → distort anatomy → false positive/negative</li>
          <li>Expose phase ผิด (expiratory แทน inspiratory) → ดูเหมือน edema</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document: view + exposure setting + position ใน chart</li>
          <li>Compare กับ baseline ถ้ามี</li>
          <li>Tip: <strong>"3 views ดีกว่า 2 views สำหรับ thorax met check"</strong></li>
          <li>Tip: <strong>"Inspiratory thorax — heart/diaphragm ห่างกัน"</strong> · expiratory ดูเหมือน edema</li>
          <li>Tip: <strong>เคย miss = ถ่ายซ้ำ</strong> · radiograph ราคาน้อยกว่า missed diagnosis</li>
        </ul>
      `
    }
  },

  /* ============================================================
     หลักการพื้นฐาน · Principles (3 เพิ่มเติม)
     ============================================================ */

  {
    id: 'rad-image-quality',
    titleEn: 'Image Quality &amp; Exposure Technique',
    titleTh: 'คุณภาพภาพ + เทคนิคการถ่าย',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['kVp', 'mAs', 'exposure', 'contrast', 'density', 'quality'],
    aliases: ['exposure', 'kVp', 'การถ่าย X-ray'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>เลือก setting ก่อนถ่ายให้เหมาะกับเคส</li>
          <li>ปรับเทคนิคในเคสพิเศษ (อ้วน · ผอม · brachycephalic)</li>
          <li>แก้ไขภาพเมื่อ image quality ไม่ดี</li>
          <li>ประเมินคุณภาพ image ก่อนตีความ</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — เป็นความรู้พื้นฐาน</li>
        </ul>
      `,
      preparation: `
        <p><strong>หลักการสำคัญ 4 อย่าง:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Image Quality — "ดำ-ขาว-ชัด-ตรง"</span>
          <ul>
            <li><strong>ดำ</strong> Density (ความดำของภาพ) — ควบคุมด้วย <strong>mAs</strong></li>
            <li><strong>ขาว</strong> Contrast (ความต่างของขาว-ดำ) — ควบคุมด้วย <strong>kVp</strong></li>
            <li><strong>ชัด</strong> Detail/Sharpness — focal spot, motion, distance</li>
            <li><strong>ตรง</strong> Distortion — patient position, angle of beam</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"mAs = ดำ · kVp = ขาวดำ"</strong> · จำง่าย<br>
          📌 mAs ↑ = ภาพดำขึ้น (มี photon มากขึ้น) · kVp ↑ = ภาพ contrast ลด (gray scale มากขึ้น)</p>
        </div>
      `,
      steps: `
        <p><strong>kVp (Peak Kilovoltage):</strong></p>
        <ul>
          <li>กำหนด <strong>energy</strong> ของ X-ray photon</li>
          <li>↑ kVp → photon ทะลุได้ลึก → ภาพ contrast ↓ (gray scale มาก)</li>
          <li>ใช้ค่าสูงในเคส:
            <ul>
              <li>Thorax (ต้องการเห็น mediastinum + ทะลุ rib)</li>
              <li>Patient อ้วน / ใหญ่</li>
            </ul>
          </li>
          <li>ใช้ค่าต่ำใน:
            <ul>
              <li>Bone (high contrast)</li>
              <li>Extremity เล็ก ๆ</li>
            </ul>
          </li>
          <li>Range ทั่วไป: 50-110 kVp</li>
        </ul>

        <p><strong>mAs (Milliampere-Seconds):</strong></p>
        <ul>
          <li>กำหนด <strong>quantity</strong> ของ X-ray photon</li>
          <li>↑ mAs → photon มาก → ภาพดำขึ้น</li>
          <li>ปรับตามขนาด/ความหนาของส่วนที่ถ่าย</li>
          <li>Range ทั่วไป: 2-20 mAs</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Exposure Adjustments — กฎสำคัญ</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">+15%</span>
              <span class="num-label">kVp = mAs × 2</span>
            </div>
            <div class="num-card">
              <span class="num-big">2×</span>
              <span class="num-label">distance → 4× mAs</span>
            </div>
            <div class="num-card">
              <span class="num-big">×2</span>
              <span class="num-label">part thickness → ×2 mAs</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"15% kVp rule"</strong> = เพิ่ม kVp 15% มีผลเท่ากับเพิ่ม mAs 2 เท่า<br>
          📌 <strong>Inverse square law:</strong> double distance → quadruple mAs needed</p>
        </div>

        <p><strong>Common image errors + วิธีแก้:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Troubleshooting — แก้ภาพไม่ดี</span>
          <table>
            <tr>
              <th>ปัญหา</th><th>สาเหตุ</th><th>แก้</th>
            </tr>
            <tr><td>ดำเกินไป</td><td>mAs สูง / kVp สูง</td><td>↓ mAs 30-50%</td></tr>
            <tr><td>ขาวเกินไป (under)</td><td>mAs น้อย / kVp น้อย</td><td>↑ mAs 50-100%</td></tr>
            <tr><td>Contrast น้อย (gray)</td><td>kVp สูง</td><td>↓ kVp 10-20%</td></tr>
            <tr><td>เบลอ</td><td>Patient ขยับ</td><td>Sedation · ใช้ short exposure time</td></tr>
            <tr><td>Distorted</td><td>Position ผิด</td><td>ตรวจ symmetry · re-position</td></tr>
            <tr><td>Grid lines</td><td>Grid misaligned</td><td>ปรับ grid · ใช้ AED</td></tr>
          </table>
        </div>

        <p><strong>Digital radiography (DR) considerations:</strong></p>
        <ul>
          <li>"Latitude" กว้างกว่า film → tolerate exposure error ได้มาก</li>
          <li>Post-processing ปรับได้ — ไม่ใช่ excuse สำหรับ technique แย่</li>
          <li>ALARA principle (As Low As Reasonably Achievable) — ลด radiation</li>
          <li>"Histogram" ตรวจดู exposure index (EI) ค่าเป้าหมายแต่ละเครื่อง</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Repeated exposure → radiation dose สูงให้ patient + staff</li>
          <li>Wrong setting → diagnosis ผิด</li>
          <li>Motion artifact → ภาพเบลอ → re-take needed</li>
          <li>Radiation safety: lead shielding, ALARA, dosimeter</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document exposure setting (kVp, mAs) ใน chart</li>
          <li>Save raw + processed images</li>
          <li>Tip: <strong>"ในใจเสมอ: kVp = ความสามารถทะลุ · mAs = จำนวน photon"</strong></li>
          <li>Tip: <strong>Brachycephalic + obese → high kVp setting</strong></li>
          <li>Tip: <strong>Bone study = high contrast</strong> = ใช้ kVp ต่ำลง</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-positioning',
    titleEn: 'Standard Positioning &amp; Views',
    titleTh: 'การจัดท่าถ่ายมาตรฐาน',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['positioning', 'lateral', 'VD', 'DV', 'view'],
    aliases: ['positioning', 'จัดท่า', 'view'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>ต้องการ image ที่มาตรฐานเพื่อตีความถูกต้อง</li>
          <li>เปรียบเทียบกับ reference / textbook</li>
          <li>ติดตาม progression ของโรค (ต้อง position ซ้ำได้)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>เคสไม่ stable พอจะ position บนโต๊ะ — ใช้ standing/oblique view แทน</li>
          <li>Severe pain → ทำเฉพาะส่วนที่จำเป็น</li>
          <li>Suspected spinal injury — ระวังการ position</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>X-ray table</li>
          <li>Positioning aids: foam wedges, sandbags, V-trough, tape, ropes</li>
          <li>Marker (L/R)</li>
          <li>Lead PPE สำหรับ staff</li>
          <li>Sedation ถ้าจำเป็น (most cases for diagnostic films)</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard views ที่ควรรู้:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Standard Views — Cheat Sheet</span>
          <table>
            <tr>
              <th>View</th><th>ท่า</th><th>ใช้ดู</th>
            </tr>
            <tr><td><strong>RL Lat (Right Lateral)</strong></td><td>นอนตะแคงขวาลง</td><td>Thorax, abdomen ส่วนใหญ่</td></tr>
            <tr><td><strong>LL Lat (Left Lateral)</strong></td><td>นอนตะแคงซ้ายลง</td><td>Thorax met check, abdominal mass</td></tr>
            <tr><td><strong>VD (Ventro-dorsal)</strong></td><td>นอนหงาย (V-trough)</td><td>Lung detail, abdomen</td></tr>
            <tr><td><strong>DV (Dorso-ventral)</strong></td><td>นอนคว่ำ</td><td>Dyspneic patient (tolerate ดีกว่า VD), heart base</td></tr>
            <tr><td><strong>Lat orthogonal</strong></td><td>2 มุมตั้งฉากกัน</td><td>Limb fracture (Lat + CrCd)</td></tr>
            <tr><td><strong>Oblique</strong></td><td>เอียง 30-45°</td><td>Dental, joint detail</td></tr>
          </table>
        </div>

        <p><strong>Thoracic positioning details:</strong></p>
        <div class="mnemonic thai">
          <span class="mnem-title">Thorax — "3 Views &gt; 2 Views"</span>
          <ul>
            <li><strong>1</strong>Right lateral — fore limb pulled forward, hind back</li>
            <li><strong>2</strong>Left lateral — same technique, opposite side</li>
            <li><strong>3</strong>VD or DV (เลือกตาม patient tolerance)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>3 views ดีกว่า 2 views</strong> สำหรับ metastasis check<br>
          📌 <strong>Met อยู่ใน "up" lung</strong> เห็นชัด — ปอดด้านที่ไม่กดทับ<br>
          📌 <strong>VD vs DV:</strong> VD ดีสำหรับ lung detail · DV tolerate ดีกว่าใน dyspneic<br>
          📌 <strong>Inspiratory phase</strong> — heart/diaphragm separated, lungs expanded<br>
          ⚠️ <strong>Expiratory looks like edema</strong> — common pitfall</p>
        </div>

        <p><strong>Abdominal positioning details:</strong></p>
        <ul>
          <li><strong>Right lateral:</strong> standard · gas in fundus, fluid in pylorus</li>
          <li><strong>VD:</strong> better symmetry assessment · gas distribution</li>
          <li><strong>Left lateral (additional):</strong> gas moves to pylorus → identify pyloric mass/foreign body</li>
          <li>Always include from diaphragm to pubis</li>
        </ul>

        <p><strong>Limb positioning:</strong></p>
        <ul>
          <li>Always 2 views <strong>orthogonal</strong> (90° to each other)
            <ul>
              <li>Lateral + Cranio-caudal (CrCd) for fore limb</li>
              <li>Lateral + Cranio-caudal/Dorso-plantar for hind limb</li>
            </ul>
          </li>
          <li>Include 1 joint above + 1 joint below fracture (Rule of 2 joints)</li>
          <li>Compare with contralateral side ถ้าเทียบ</li>
        </ul>

        <p><strong>Tips สำหรับ challenging patient:</strong></p>

        <div class="mnemonic diagram">
          <span class="mnem-title">เคสยาก — เลือก Position ที่เหมาะ</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">Dyspneic 🫁</span>
              <strong>DV &gt; VD</strong><br>
              Standing/sternal OK<br>
              <em>O2 first · ลด stress</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">Spinal Injury 🦴</span>
              <strong>ห้ามขยับ!</strong><br>
              Cross-table lateral<br>
              <em>Slide board only</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">Brachycephalic 🐶</span>
              <strong>DV preferred</strong><br>
              Sedate gently<br>
              <em>Bulldog · Pug · French</em>
            </div>
            <div class="diagram-box purple">
              <span class="box-title">Cat Fractious 🐱</span>
              <strong>Sedation always</strong><br>
              <em>For diagnostic quality</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"Sedate first, position second"</strong> · ลด re-takes<br>
          📌 <strong>DV vs VD:</strong> DV tolerate ดีกว่าใน dyspneic · VD ดูปอด detail ดีกว่า</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Wrong position → ตีความผิด (false positive/negative)</li>
          <li>Stress in dyspneic patient → decompensation, arrest</li>
          <li>Spinal injury made worse by improper handling</li>
          <li>Repeated exposures → radiation dose</li>
          <li>Staff radiation exposure if no PPE / poor restraint</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document view + position used</li>
          <li>Verify quality before patient release</li>
          <li>Tip: <strong>"Sedate first, position second"</strong> — ลด re-takes</li>
          <li>Tip: <strong>Brachycephalic dyspneic → DV in O2 cage</strong> > VD on table</li>
          <li>Tip: <strong>"Rule of 2 joints"</strong> สำหรับ long bone</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-systematic-approach',
    titleEn: 'Systematic Approach to Radiograph Interpretation',
    titleTh: 'วิธีอ่านภาพรังสีอย่างเป็นระบบ',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['interpretation', 'reading', 'systematic', 'approach', 'ROberts'],
    aliases: ['interpretation', 'อ่านภาพ', 'อ่าน X-ray'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>ทุกครั้งที่ดู radiograph</li>
          <li>ป้องกัน "satisfaction of search" — หา lesion แรกแล้วหยุด</li>
          <li>ฝึกนักศึกษา / staff ใหม่</li>
          <li>เพิ่ม diagnostic accuracy</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — ใช้ทุกเคส</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>ภาพคุณภาพดี (recheck quality first!)</li>
          <li>Display: monitor calibrated หรือ light box ที่เหมาะ</li>
          <li>Quiet environment เพื่อ focus</li>
          <li>Knowledge of normal anatomy</li>
          <li>Clinical history ของ patient</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">"ABCDEFG" — Systematic Approach</span>
          <ul>
            <li><strong>A</strong>natomy — รู้ normal landmark ก่อน</li>
            <li><strong>B</strong>ones — กระดูกสมบูรณ์? ขนาด density</li>
            <li><strong>C</strong>ardiac silhouette — ขนาด รูปร่าง VHS</li>
            <li><strong>D</strong>iaphragm — รูปร่าง position cranial border</li>
            <li><strong>E</strong>sophagus / mediastinum — มี mass / fluid?</li>
            <li><strong>F</strong>ields (lung) — pattern, distribution</li>
            <li><strong>G</strong>oing back — recheck รอบ 2 เพื่อ catch ที่หลุด</li>
          </ul>
          <p class="mnem-tip">📌 <strong>ABCDEFG</strong> สำหรับ thoracic film<br>
          📌 ไล่จาก "นอกเข้าใน" — bones (กรอบนอก) → cardiac (กลาง) → lungs<br>
          ⚠️ <strong>"Satisfaction of search"</strong> = หา 1 lesion แล้วหยุด · ใช้ G (going back) ป้องกัน</p>
        </div>

        <p><strong>4-step interpretation framework:</strong></p>

        <div class="mnemonic flowchart">
          <span class="mnem-title">4 Steps to Interpret Any Radiograph</span>

          <div class="flow-step start">
            <span class="flow-label">1</span>
            <strong>Quality check</strong><br>
            Position · exposure · phase หายใจ
          </div>
          <div class="flow-arrow">▼</div>

          <div class="flow-step action">
            <span class="flow-label">2</span>
            <strong>Identify normal anatomy</strong><br>
            ดูทุก structure ที่ปกติ
          </div>
          <div class="flow-arrow">▼</div>

          <div class="flow-step decision">
            <span class="flow-label">3</span>
            <strong>Detect abnormalities</strong><br>
            Roentgen signs (ดูด้านล่าง)
          </div>
          <div class="flow-arrow">▼</div>

          <div class="flow-step success">
            <span class="flow-label">4</span>
            <strong>Generate DDx + recommend</strong><br>
            Most likely → least likely
          </div>

          <p class="mnem-tip">📌 ทุกเคส 4 ขั้นตอน · ฝึกนานๆ จะอัตโนมัติ</p>
        </div>

        <p><strong>Roentgen Signs — สิ่งที่ต้องสังเกต:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Roentgen Signs — "ตำแหน่ง · ขนาด · รูปร่าง · ขอบ · ความขาวดำ · จำนวน"</span>
          <ul>
            <li><strong>1</strong>Position (Location) — อยู่ที่ไหน?</li>
            <li><strong>2</strong>Number — กี่จุด?</li>
            <li><strong>3</strong>Size — ใหญ่/เล็ก?</li>
            <li><strong>4</strong>Shape — รูปร่างอย่างไร?</li>
            <li><strong>5</strong>Margin — ขอบชัด/ไม่ชัด?</li>
            <li><strong>6</strong>Opacity — gas · soft tissue · fluid · bone · metal?</li>
          </ul>
          <p class="mnem-tip">📌 ใช้ 6 ข้อนี้บรรยาย lesion ทุกอัน · จะคิดออก DDx ได้ดี<br>
          📌 <strong>5 Opacities (จำง่ายไปแสง):</strong> Gas (ดำสุด) → Fat → Soft tissue/Fluid → Bone → Metal (ขาวสุด)</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">5 Radiographic Opacities — เรียงจากดำ→ขาว</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">⚫</span>
              <span class="num-label">Gas (ดำสุด)</span>
            </div>
            <div class="num-card">
              <span class="num-big">⬛</span>
              <span class="num-label">Fat</span>
            </div>
            <div class="num-card">
              <span class="num-big">⬜</span>
              <span class="num-label">Soft tissue / Fluid</span>
            </div>
            <div class="num-card">
              <span class="num-big">◻️</span>
              <span class="num-label">Bone</span>
            </div>
            <div class="num-card">
              <span class="num-big">⚪</span>
              <span class="num-label">Metal (ขาวสุด)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>ลำดับสำคัญ</strong> ใช้แยกประเภท lesion · soft tissue + fluid <strong>แยกไม่ได้</strong>บน X-ray (ต้อง US/CT)</p>
        </div>

        <p><strong>Common pitfalls:</strong></p>
        <ul>
          <li><strong>Satisfaction of search</strong> — หา 1 abnormality แล้วหยุด · บังคับตัวเองดูจบทั้งภาพ</li>
          <li><strong>Anchoring bias</strong> — ติดในความคิดแรก · พยายามคิด DDx อื่น</li>
          <li><strong>Missing edges</strong> — lesion ที่ขอบภาพหลุด · ดูทุกขอบ</li>
          <li><strong>Confirmation bias</strong> — เห็นแต่สิ่งที่อยากเห็น (ตาม clinical hx)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Missed diagnosis → patient harm</li>
          <li>Over-interpretation → unnecessary tests, costs</li>
          <li>Anchoring on first impression</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document findings systematically (template ดี)</li>
          <li>Generate DDx + recommend further work-up</li>
          <li>Compare กับ previous films ถ้ามี</li>
          <li>Tip: <strong>"Read with the clinical question in mind, but don't tunnel"</strong></li>
          <li>Tip: <strong>"Always recheck (G in ABCDEFG)"</strong> · second pass = catch missed</li>
          <li>Tip: <strong>หา radiologist consult</strong> ถ้าไม่แน่ใจ — telemedicine มีหลายเจ้า</li>
        </ul>
      `
    }
  },


  /* ============================================================
     Thoracic · ทรวงอก (6)
     ============================================================ */

  {
    id: 'rad-vhs',
    titleEn: 'Vertebral Heart Score (VHS)',
    titleTh: 'การวัดขนาดหัวใจ (VHS)',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['VHS', 'cardiomegaly', 'heart size', 'Buchanan'],
    aliases: ['VHS', 'vertebral heart score', 'ขนาดหัวใจ'],
    source: 'Thrall, 8th Ed. + Buchanan & Bücheler 1995',
    sections: {
      indications: `
        <ul>
          <li>ประเมิน cardiac size ในเคส suspected cardiac dz</li>
          <li>Cough, dyspnea, exercise intolerance — แยก cardiac vs respiratory</li>
          <li>Murmur evaluation</li>
          <li>Routine pre-anesthetic ในเคส high risk</li>
          <li>Follow up CHF — track progression</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — เป็นการวัดบน radiograph ที่มีอยู่แล้ว</li>
          <li>Limitation: VHS อาจไม่ accurate ในบาง breed</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Right lateral thoracic radiograph คุณภาพดี</li>
          <li>Inspiratory phase</li>
          <li>Patient position ตรง (ไม่ rotate)</li>
          <li>Ruler / digital measuring tool</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">VHS — วัด 2 แกน เทียบ vertebrae</span>
          <ul>
            <li><strong>L</strong>Long axis — จาก carina (tracheal bifurcation) → apex</li>
            <li><strong>S</strong>Short axis — ตั้งฉากกับ long axis · ที่กว้างที่สุด</li>
            <li><strong>+</strong>บวกกัน → จำนวน vertebra (เริ่มจาก T4 cranial edge)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"L + S = VHS"</strong> · วัดบน <strong>right lateral</strong><br>
          📌 จำนวน vertebra นับเริ่มที่ <strong>T4 cranial edge</strong><br>
          📌 รอบครึ่ง vertebra (.5) ได้</p>
        </div>

        <p><strong>วิธีวัด step by step:</strong></p>
        <ol>
          <li>หา <strong>carina</strong> (จุดที่ trachea แยก 2 ข้าง)</li>
          <li>วาดเส้น <strong>long axis</strong>: จาก ventral aspect ของ carina → cardiac apex</li>
          <li>วาดเส้น <strong>short axis</strong>: ตั้งฉากกับ long axis ที่จุดกว้างที่สุดของ heart</li>
          <li>ย้าย long axis ลงไปที่ T4 cranial edge เป็น reference</li>
          <li>นับ vertebra ที่ long axis ครอบคลุม (เริ่มจาก T4)</li>
          <li>นับ vertebra ที่ short axis ครอบคลุม</li>
          <li>บวกกัน = VHS</li>
        </ol>

        <div class="mnemonic numbers">
          <span class="mnem-title">VHS Normal Values — ตัวเลขจำ</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">8.5-10.5</span>
              <span class="num-label">หมา ปกติ (vertebrae)</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 11</span>
              <span class="num-label">หมา cardiomegaly</span>
            </div>
            <div class="num-card">
              <span class="num-big">7.0-8.0</span>
              <span class="num-label">แมว ปกติ</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 8.5</span>
              <span class="num-label">แมว cardiomegaly</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"หมา 10 · แมว 8"</strong> — เลขกลม จำง่าย<br>
          ⚠️ <strong>Breed variation:</strong> Bulldog, Boxer, Bull Terrier มี VHS สูงปกติได้ (~11) · Greyhound, Whippet ตรงกันข้าม</p>
        </div>

        <p><strong>VLAS (Vertebral Left Atrial Size) — concept ใหม่:</strong></p>
        <ul>
          <li>วัด left atrial enlargement specifically</li>
          <li>Right lateral view</li>
          <li>เริ่มจาก ventral edge of carina → caudal edge of LA</li>
          <li>ปกติ &lt; 2.3 vertebra (dog)</li>
          <li>≥ 3.0 = severe LA enlargement</li>
          <li>Sensitive กว่า VHS สำหรับ early MMVD</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Breed-Specific Normal VHS — สำคัญ!</span>
          <table>
            <tr><th>Breed</th><th>Normal VHS</th></tr>
            <tr><td><strong>Cavalier KCS</strong></td><td>9.9-10.5 ⭐ (MMVD prone)</td></tr>
            <tr><td><strong>Boxer</strong></td><td>11.0-12.0 (high normal!)</td></tr>
            <tr><td><strong>Bulldog</strong></td><td>11.0-12.5 (highest!)</td></tr>
            <tr><td><strong>Yorkie</strong></td><td>9.0-10.5</td></tr>
            <tr><td><strong>Greyhound</strong></td><td>9.0-10.0 (low normal)</td></tr>
            <tr><td><strong>Pomeranian</strong></td><td>9.5-10.5</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Brachycephalic = high VHS normal"</strong> · ห้ามตื่นตกใจ<br>
          📌 <strong>Cavalier KCS: VHS &gt; 10.5 + clinical = early MMVD</strong><br>
          📌 <strong>Compare with Greyhound 9-10</strong> · breed กระทบมาก</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Inter-observer variability — ฝึกซ้ำ ๆ</li>
          <li>Position error → false enlargement</li>
          <li>Expiratory phase → false enlargement (heart looks bigger)</li>
          <li>Breed variation ไม่ถูกพิจารณา</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document VHS + breed-adjusted reference</li>
          <li>Trend over time (single value less useful)</li>
          <li>Combine with VLAS for LA assessment</li>
          <li>Tip: <strong>"VHS ≥ 11.5 in non-brachycephalic = abnormal"</strong> generally</li>
          <li>Tip: <strong>VLAS &gt; 3.0 = LA enlargement</strong> = sensitive for early CHF</li>
          <li>Tip: <strong>Always combine with echo</strong> for definitive cardiac assessment</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-lung-patterns',
    titleEn: 'Lung Patterns (4 Major Patterns)',
    titleTh: 'Lung Patterns — รูปแบบของปอด 4 อย่าง',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['lung pattern', 'alveolar', 'interstitial', 'bronchial', 'vascular', 'pulmonary'],
    aliases: ['lung pattern', 'pulmonary pattern', 'รูปแบบปอด'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>ตีความ lung disease ใน thoracic radiograph</li>
          <li>Cough, dyspnea, tachypnea workup</li>
          <li>Pre-anesthetic screening</li>
          <li>Suspected pneumonia, edema, neoplasia</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — เป็น interpretation ไม่ใช่ procedure</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>3-view thoracic radiograph (RL + LL + VD/DV)</li>
          <li>Inspiratory phase</li>
          <li>Adequate exposure (เห็น vessels ผ่าน heart)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">4 Lung Patterns — "ABIV" (Alveolar · Bronchial · Interstitial · Vascular)</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">A — Alveolar</span>
              ขาวฟุ้ง · บัง vessels<br>
              <strong>Air bronchogram ✓</strong><br>
              <em>Edema, pneumonia, hemorrhage</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">B — Bronchial</span>
              "Tram lines" · "Donuts"<br>
              <strong>Bronchial wall thick</strong><br>
              <em>Asthma, chronic bronchitis</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">I — Interstitial</span>
              Hazy/grainy · vessels เห็นได้<br>
              <strong>Unstructured / Structured (nodules)</strong><br>
              <em>Edema early, fibrosis, met, normal expiration</em>
            </div>
            <div class="diagram-box green">
              <span class="box-title">V — Vascular</span>
              Vessels ใหญ่/เล็ก/twisted<br>
              <strong>Compare A:V ratio</strong><br>
              <em>CHF, dirofilaria, PTE</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"ABIV"</strong> — 4 patterns พื้นฐาน · บางเคสมีหลาย pattern พร้อมกัน<br>
          📌 หาให้เจอ <strong>predominant pattern</strong> ก่อน · แล้วค่อยคิด DDx<br>
          📌 <strong>Air bronchogram</strong> = pathognomonic ของ alveolar pattern</p>
        </div>

        <p><strong>1. Alveolar Pattern (เด่นสุด):</strong></p>
        <ul>
          <li><strong>ลักษณะ:</strong> ขาวฟุ้ง (soft tissue opacity) ในเนื้อปอด · บดบัง pulmonary vessels</li>
          <li><strong>Air bronchogram</strong> = bronchi เห็นเป็นเส้นดำในพื้นขาว (alveoli เต็ม fluid/cells, bronchi ยังมี air) — diagnostic!</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Alveolar Distribution → Diagnosis</span>
          <table>
            <tr><th>Distribution</th><th>DDx</th></tr>
            <tr><td><strong>Perihilar + caudodorsal (หมา)</strong></td><td>Cardiogenic edema (CHF) ⭐</td></tr>
            <tr><td><strong>Diffuse (แมว)</strong></td><td>HCM CHF</td></tr>
            <tr><td><strong>Right middle + cranial lobe</strong></td><td>Aspiration pneumonia (gravity)</td></tr>
            <tr><td><strong>Cranio-ventral asymmetric</strong></td><td>Bacterial pneumonia</td></tr>
            <tr><td><strong>Mass-like focal</strong></td><td>Neoplasia</td></tr>
            <tr><td><strong>Caudodorsal symmetric</strong></td><td>Non-cardiogenic edema (ARDS, neurogenic)</td></tr>
            <tr><td><strong>Diffuse post-trauma</strong></td><td>Pulmonary contusion</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Distribution = Diagnosis"</strong><br>
          📌 <strong>Aspiration = right cranial/middle</strong> (gravity ตอนนอน)<br>
          📌 <strong>Cat CHF = diffuse</strong> · ไม่เหมือนหมา (perihilar)</p>
        </div>

        <p><strong>2. Bronchial Pattern:</strong></p>
        <ul>
          <li><strong>ลักษณะ:</strong> bronchial walls หนาขึ้น (mineralization, inflammation, fluid)</li>
          <li><strong>"Tram lines"</strong> (ขนาน) — bronchi ถ่ายแบบ longitudinal</li>
          <li><strong>"Donuts"</strong> (วงกลม) — bronchi ถ่ายแบบ end-on</li>
          <li>DDx:
            <ul>
              <li><strong>Feline asthma</strong> — classic finding (cat)</li>
              <li><strong>Chronic bronchitis</strong> (dog)</li>
              <li><strong>Allergic bronchitis</strong></li>
              <li><strong>Heartworm-associated</strong></li>
              <li>Aging change (mild, OK)</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Interstitial Pattern:</strong></p>
        <ul>
          <li><strong>Unstructured (= "increased pulmonary opacity")</strong>:
            <ul>
              <li>Hazy/grainy throughout</li>
              <li>Vessels still visible (ต่างจาก alveolar)</li>
              <li>DDx: early edema, fibrosis, normal aging, expiratory phase artifact</li>
            </ul>
          </li>
          <li><strong>Structured (nodular):</strong>
            <ul>
              <li>Discrete nodules</li>
              <li>Single = primary lung tumor, abscess, granuloma</li>
              <li>Multiple = metastasis (most concerning), fungal, parasitic</li>
            </ul>
          </li>
          <li><strong>Pitfall:</strong> expiratory phase + obesity + over-exposure → false interstitial</li>
        </ul>

        <p><strong>4. Vascular Pattern:</strong></p>
        <ul>
          <li>Compare <strong>A:V ratio</strong> (artery:vein) at 9th rib (lateral view)</li>
          <li>Normal: artery ≈ vein ≈ 75% of 9th rib width</li>
          <li>Patterns:
            <ul>
              <li><strong>Both enlarged</strong> (overcirculation) — left-to-right shunt (PDA, VSD), early CHF</li>
              <li><strong>Veins &gt; arteries</strong> — left-sided CHF (most common)</li>
              <li><strong>Arteries &gt; veins</strong> — heartworm, PTE</li>
              <li><strong>Tortuous arteries</strong> — heartworm classic</li>
              <li><strong>Pruning</strong> (truncated peripheral vessels) — chronic PH, severe heartworm</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Cardiogenic vs Non-cardiogenic Edema — แยกอย่างไร?</span>
          <table>
            <tr>
              <th>Cardiogenic</th><th>Non-cardiogenic</th>
            </tr>
            <tr>
              <td>Heart ใหญ่ (VHS ↑)<br>Veins distended<br>Perihilar (dog)<br>Diffuse (cat)</td>
              <td>Heart ปกติ<br>Vessels ปกติ<br>Caudodorsal mostly<br>Asymmetric possible</td>
            </tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Big heart + big vein = Cardiogenic"</strong><br>
          📌 Non-cardiogenic causes: ARDS, neurogenic, electrocution, near-drowning, post-seizure<br>
          ⚠️ <strong>Cat CHF distribution variable</strong> — diffuse, can mimic non-cardiogenic</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Mixed patterns common — ต้องระบุ predominant</li>
          <li>Pattern ไม่บอก etiology โดยตรง — ต้อง correlate กับ clinical</li>
          <li>Expiratory artifact mimics interstitial</li>
          <li>Obesity → fat in mediastinum → mimic mass</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document predominant pattern + distribution</li>
          <li>Generate DDx based on pattern + history</li>
          <li>Recommend further workup (echo, BAL, FNA, CT)</li>
          <li>Tip: <strong>"Air bronchogram = alveolar"</strong> — pathognomonic</li>
          <li>Tip: <strong>"Vessels visible = NOT alveolar"</strong> = interstitial or normal</li>
          <li>Tip: <strong>Cat — diffuse interstitial common in CHF</strong></li>
          <li>Tip: <strong>"Donuts + Tram = Bronchial"</strong> · feline asthma classic</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-cardiac-silhouette',
    titleEn: 'Cardiac Silhouette &amp; Chamber Enlargement',
    titleTh: 'รูปร่างหัวใจ + ห้องหัวใจที่โต',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['cardiac silhouette', 'LA', 'LV', 'RA', 'RV', 'chamber'],
    aliases: ['heart shape', 'chamber enlargement', 'หัวใจ'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Cardiac disease workup</li>
          <li>VHS แล้ว — analyze รูปร่างต่อ</li>
          <li>Murmur evaluation</li>
          <li>Pre-anesthetic / pre-op screening</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>3-view thoracic film คุณภาพดี</li>
          <li>Inspiratory phase + correct positioning</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">Clock Face Method (Right Lateral) — หา Chamber บนหน้าปัดนาฬิกา</span>
          <p style="text-align:center; font-size:15px; margin: 10px 0;">
          จินตนาการหัวใจเป็น <strong>นาฬิกา 12 ชั่วโมง</strong>
          </p>
          <div class="diagram-grid">
            <div class="diagram-box yellow">
              <span class="box-title">12-2 นาฬิกา</span>
              <strong>Aortic arch</strong><br>
              <em>Aorta enlargement</em>
            </div>
            <div class="diagram-box red">
              <span class="box-title">1-2 นาฬิกา</span>
              <strong>Main pulmonary artery</strong><br>
              <em>PH, heartworm</em>
            </div>
            <div class="diagram-box purple">
              <span class="box-title">2-3 นาฬิกา</span>
              <strong>Left auricle</strong><br>
              <em>LA enlargement</em>
            </div>
            <div class="diagram-box blue">
              <span class="box-title">3-5 นาฬิกา</span>
              <strong>Left ventricle</strong><br>
              <em>LV enlargement</em>
            </div>
            <div class="diagram-box green">
              <span class="box-title">5-9 นาฬิกา</span>
              <strong>Right ventricle</strong><br>
              <em>RV enlargement</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">9-11 นาฬิกา</span>
              <strong>Right atrium</strong><br>
              <em>RA enlargement</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>VD view ใช้ clock face เหมือนกัน</strong> · ใช้ในการ identify chambers ที่โต</p>
        </div>

        <p><strong>Specific chamber enlargement signs:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">LA Enlargement (สำคัญสุดในหมา MMVD)</span>
          <ul>
            <li><strong>1</strong>Right lateral: <strong>Tracheal elevation</strong> at carina</li>
            <li><strong>2</strong>Right lateral: <strong>Bulge dorsally</strong> at 2-3 o'clock position</li>
            <li><strong>3</strong>VD: <strong>"Bulging" 2-3 o'clock</strong> position</li>
            <li><strong>4</strong>VD: <strong>Splaying of mainstem bronchi</strong> (เหมือน "cowboy legs")</li>
            <li><strong>5</strong>VLAS &gt; 2.3 vertebrae (sensitive!)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Tracheal elevation = LA enlargement"</strong> · classic sign<br>
          📌 <strong>"Cowboy legs"</strong> = bronchi splay จาก LA โต · VD view<br>
          📌 LA enlargement = early sign ของ MMVD progression</p>
        </div>

        <p><strong>LV enlargement:</strong></p>
        <ul>
          <li>Right lateral: tall heart · apex extends ventrally</li>
          <li>VD: "elongation" 4-5 o'clock</li>
          <li>VHS ↑</li>
          <li>DDx: chronic mitral regurgitation, DCM, hypertension, AS</li>
        </ul>

        <p><strong>RA enlargement:</strong></p>
        <ul>
          <li>Right lateral: cranial bulge of cardiac silhouette</li>
          <li>VD: "bulging" 9-11 o'clock</li>
          <li>DDx: tricuspid regurg, RV failure, PH</li>
        </ul>

        <p><strong>RV enlargement:</strong></p>
        <ul>
          <li>Right lateral: increased <strong>sternal contact</strong> (heart วางบน sternum กว้างขึ้น)</li>
          <li>"Reverse D" shape on VD</li>
          <li>VHS อาจปกติ (RV โตด้าน sternum ไม่ส่งผลตามแกน)</li>
          <li>DDx: PH, heartworm, pulmonic stenosis</li>
        </ul>

        <p><strong>Aortic + pulmonary trunk:</strong></p>
        <ul>
          <li><strong>Aortic enlargement:</strong> bulge 12-2 o'clock (VD), aortic knob prominent</li>
          <li><strong>PA enlargement:</strong> bulge 1-2 o'clock (VD), tortuous in heartworm</li>
        </ul>

        <p><strong>Cat heart radiograph specifics:</strong></p>
        <div class="mnemonic thai">
          <span class="mnem-title">Cat HCM — "Valentine Heart"</span>
          <ul>
            <li>VD view: heart shape เหมือน <strong>หัวใจวาเลนไทน์</strong> (Valentine heart)</li>
            <li>Both atria enlarged ที่ base</li>
            <li>VHS ≥ 8.5</li>
            <li>Pleural effusion + pulmonary edema (diffuse) = CHF</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Valentine = HCM cat"</strong> · เป็น sign คลาสสิก<br>
          ⚠️ Cat CHF distribution: <strong>diffuse interstitial/alveolar pattern</strong> ไม่ใช่ perihilar เหมือนหมา</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Position errors mimic chamber enlargement</li>
          <li>Pericardial effusion ทำให้ silhouette ใหญ่ผิดปกติ → globoid heart</li>
          <li>Breed variation</li>
          <li>Echocardiography เป็น gold standard — radiograph แค่ screening</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document chamber findings</li>
          <li>Recommend echocardiography for definitive diagnosis</li>
          <li>Tip: <strong>"Clock face = your friend"</strong> · ฝึกใช้บ่อย ๆ</li>
          <li>Tip: <strong>VLAS &gt; 2.3 = LA enlargement</strong> · sensitive for MMVD</li>
          <li>Tip: <strong>Globoid heart + pleural effusion = consider pericardial effusion</strong></li>
        </ul>
      `
    }
  },

  {
    id: 'rad-pleural-disease',
    titleEn: 'Pleural Space Disease',
    titleTh: 'โรคของช่องเยื่อหุ้มปอด',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['pleural effusion', 'pneumothorax', 'pleural', 'fissure'],
    aliases: ['pleural effusion', 'pneumothorax', 'น้ำในปอด'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Dyspnea evaluation</li>
          <li>Trauma (rule out pneumothorax)</li>
          <li>Suspected CHF, pyothorax, hemothorax, chylothorax</li>
          <li>Mass effect concern</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — แต่ระวัง stress in dyspneic (give O2 first)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>3-view thoracic radiograph</li>
          <li>DV preferred over VD ในเคส dyspneic</li>
          <li>Standing lateral อาจ tolerate ดีกว่า lying</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">Pleural Effusion vs Pneumothorax — แยกอย่างไร</span>
          <div class="diagram-grid">
            <div class="diagram-box blue">
              <span class="box-title">Pleural Effusion (ของเหลว)</span>
              💧 <strong>Lung retracted</strong> from chest wall<br>
              📍 <strong>Ventral</strong> distribution (gravity)<br>
              📐 <strong>Pleural fissure lines</strong><br>
              ⬛ <strong>"Scalloping"</strong> ที่ diaphragm<br>
              ❤️ Heart silhouette บัง
            </div>
            <div class="diagram-box red">
              <span class="box-title">Pneumothorax (อากาศ)</span>
              💨 <strong>Lung retracted</strong> from chest wall<br>
              📍 <strong>Dorsal</strong> distribution<br>
              ⚫ <strong>Black "hyperlucency"</strong><br>
              ❤️ <strong>Elevated heart</strong> off sternum (lateral)<br>
              🚫 No vessels in periphery
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"Fluid ลง · Air ขึ้น"</strong> — gravity rules<br>
          📌 ทั้งคู่ retract lung จาก chest wall · ต่างที่ตำแหน่ง + opacity<br>
          ⚠️ <strong>Pneumothorax: heart ลอยจาก sternum</strong> = classic lateral sign</p>
        </div>

        <p><strong>Pleural Effusion — รายละเอียด:</strong></p>
        <ul>
          <li><strong>Signs ทั่วไป:</strong>
            <ul>
              <li>Lung retracted ventrally</li>
              <li><strong>Pleural fissure lines</strong> — เห็น lobes แยกจากกัน (visceral pleura ห่อด้วย fluid)</li>
              <li><strong>Scalloping at diaphragm</strong> — interlobar fluid pockets</li>
              <li>Border effacement of heart, diaphragm</li>
              <li>Mediastinum widened</li>
            </ul>
          </li>
          <li><strong>VD vs DV in pleural effusion:</strong>
            <ul>
              <li>VD: fluid layers laterally → "wing" appearance</li>
              <li>DV: fluid pools in fundic area → less mass effect on lungs</li>
              <li><strong>DV preferred for dyspneic</strong> (less weight on chest)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Etiology by appearance:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Pleural Effusion — DDx by Type</span>
          <table>
            <tr>
              <th>ลักษณะ</th><th>DDx เด่น</th>
            </tr>
            <tr><td>Bilateral, mild</td><td>CHF, hypoalbuminemia</td></tr>
            <tr><td>Unilateral or asymmetric</td><td>Lung lobe torsion, mass, pyothorax</td></tr>
            <tr><td>Multiple loculated pockets</td><td>Pyothorax, chylothorax (chronic)</td></tr>
            <tr><td>+ pulmonary metastases</td><td>Carcinomatosis</td></tr>
            <tr><td>Cat + cardiomegaly</td><td>HCM CHF (most common)</td></tr>
            <tr><td>Severe + trauma</td><td>Hemothorax</td></tr>
          </table>
        </div>

        <p><strong>Pneumothorax — รายละเอียด:</strong></p>
        <ul>
          <li><strong>Signs ทั่วไป:</strong>
            <ul>
              <li><strong>Heart elevated off sternum</strong> (lateral view) — most reliable!</li>
              <li>Hyperlucent (black) lung periphery</li>
              <li>No pulmonary vessels in periphery</li>
              <li>Lung retracted from chest wall</li>
              <li><strong>Tension pneumothorax:</strong> mediastinum shifted, diaphragm flattened/inverted</li>
            </ul>
          </li>
          <li><strong>Bilateral vs unilateral:</strong>
            <ul>
              <li>Most cases bilateral (mediastinum is fenestrated in dog/cat)</li>
              <li>VD view shows symmetry</li>
            </ul>
          </li>
          <li><strong>Closed vs open:</strong> radiograph ไม่บอก — clinical history important</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Pneumothorax Causes — "STIT"</span>
          <ul>
            <li><strong>S</strong>pontaneous — Bullae rupture (deep-chested dog) · feline asthma</li>
            <li><strong>T</strong>raumatic — HBC · bite wound · penetrating</li>
            <li><strong>I</strong>atrogenic — post-thoracocentesis · post-FNA · post-surgery</li>
            <li><strong>T</strong>ension — Life-threatening · emergency!</li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>Tension pneumothorax</strong> = mediastinal shift · diaphragm flat/inverted · ต้อง decompress ทันที!<br>
          📌 <strong>Spontaneous in deep-chested dog</strong> = bullae rupture · CT for confirm + surgical planning</p>
        </div>

        <p><strong>Other pleural disease:</strong></p>
        <ul>
          <li><strong>Hemothorax</strong> — same as effusion appearance · trauma history</li>
          <li><strong>Chylothorax</strong> — often chronic loculated</li>
          <li><strong>Pyothorax</strong> — loculated · cat &gt; dog · cytology mandatory</li>
          <li><strong>Diaphragmatic hernia</strong> — abdominal contents in chest, loss of diaphragm line</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Stress-induced decompensation in dyspneic patient</li>
          <li>Tension pneumothorax = emergency</li>
          <li>Massive effusion → atelectasis + hypoxia</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Thoracocentesis for both Dx + therapeutic relief</li>
          <li>Submit fluid: cytology, culture, protein, cell count</li>
          <li>Treat underlying cause</li>
          <li>Tip: <strong>"Heart off sternum = pneumothorax"</strong> · classic lateral sign</li>
          <li>Tip: <strong>"Scalloping = pleural effusion"</strong></li>
          <li>Tip: <strong>"Bilateral effusion + cardiomegaly + cat = HCM CHF"</strong></li>
          <li>Tip: <strong>POCUS faster + safer</strong> than radiograph for dyspneic patient</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-mediastinum',
    titleEn: 'Mediastinal Disease',
    titleTh: 'โรคของ mediastinum',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['mediastinum', 'lymphoma', 'thymoma', 'megaesophagus'],
    aliases: ['mediastinum', 'lymph node thoracic'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Thoracic mass workup</li>
          <li>Cough, dyspnea, regurgitation</li>
          <li>Suspected lymphoma (cat young, dog any)</li>
          <li>Suspected thymoma (older dog)</li>
          <li>Megaesophagus screening</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>3-view thoracic radiograph</li>
          <li>+/- positive contrast esophagram for esophageal disease</li>
          <li>Adequate exposure (mediastinum ต้องเห็นได้)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">Mediastinum — แบ่ง 3 ส่วน</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">Cranial</span>
              From thoracic inlet → heart base<br>
              <strong>Common DDx:</strong><br>
              • Thymoma (older dog)<br>
              • Lymphoma (cat young)<br>
              • Branchial cyst<br>
              • Ectopic thyroid
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">Middle</span>
              Heart base level<br>
              <strong>Common DDx:</strong><br>
              • Esophageal disease<br>
              • Heart base tumor<br>
              • Aortic body tumor (Boxer)<br>
              • Lymphadenopathy
            </div>
            <div class="diagram-box blue">
              <span class="box-title">Caudal</span>
              Caudal to heart → diaphragm<br>
              <strong>Common DDx:</strong><br>
              • Esophageal foreign body<br>
              • Diaphragmatic hernia<br>
              • Caudal mediastinal mass (rare)
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"Cranial-Middle-Caudal"</strong> · localize ก่อน → DDx<br>
          📌 ส่วนใหญ่ของ mediastinal mass อยู่ที่ cranial</p>
        </div>

        <p><strong>Cranial Mediastinal Mass — common DDx:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Cranial Mediastinal Mass DDx</span>
          <table>
            <tr>
              <th>DDx</th><th>Signalment</th><th>Features</th>
            </tr>
            <tr><td><strong>Lymphoma</strong></td><td>Cat young (FeLV+) · Dog any</td><td>Bilateral, large, displace heart caudally</td></tr>
            <tr><td><strong>Thymoma</strong></td><td>Older dog/cat</td><td>Unilateral, paraneoplastic (myasthenia, hypercalcemia)</td></tr>
            <tr><td>Branchial cyst</td><td>Any</td><td>Smooth, well-defined, fluid-filled</td></tr>
            <tr><td>Ectopic thyroid</td><td>Older</td><td>Mineralization possible</td></tr>
            <tr><td>Abscess</td><td>Foreign body migration</td><td>Often + esophageal abnormality</td></tr>
          </table>
        </div>

        <p><strong>Signs of mediastinal mass:</strong></p>
        <ul>
          <li>Loss of cranial cardiac border</li>
          <li>"Doming" of cranial mediastinum on lateral</li>
          <li>Tracheal elevation</li>
          <li>Heart displacement caudally / dorsally</li>
          <li>Pleural effusion (lymphoma especially)</li>
          <li>VD: mediastinum widened &gt; 25% of T1 width</li>
        </ul>

        <p><strong>Megaesophagus:</strong></p>
        <ul>
          <li><strong>Lateral view:</strong>
            <ul>
              <li>Air or food/fluid filling esophagus</li>
              <li>"<strong>Tracheal stripe sign</strong>" — esophageal walls visible parallel to trachea (when filled with air)</li>
              <li>Ventral deviation of trachea</li>
            </ul>
          </li>
          <li><strong>VD view:</strong>
            <ul>
              <li>"<strong>Y sign</strong>" cranial to heart — soft tissue density splaying around trachea</li>
              <li>Esophagus deviates left over heart (left as red)</li>
            </ul>
          </li>
          <li><strong>DDx:</strong> idiopathic, myasthenia gravis, persistent right aortic arch (PRAA in young dog), Addison's, Hypothyroid, lead toxicity</li>
        </ul>

        <p><strong>Esophageal Foreign Body:</strong></p>
        <ul>
          <li>Common locations:
            <ul>
              <li><strong>Thoracic inlet</strong></li>
              <li><strong>Heart base</strong></li>
              <li><strong>Caudal esophagus</strong> (just cranial to diaphragm)</li>
            </ul>
          </li>
          <li>Bone, fish hook, toy, rawhide most common</li>
          <li>Need lateral + VD views</li>
          <li>Contrast esophagram if non-radiopaque (dilute barium 50:50 with water)</li>
        </ul>

        <p><strong>Persistent Right Aortic Arch (PRAA):</strong></p>
        <ul>
          <li>Young dog (often German Shepherd, Irish Setter)</li>
          <li>Vascular ring anomaly trapping esophagus</li>
          <li>Megaesophagus <strong>cranial to heart base</strong> (megaesophagus stops at heart!)</li>
          <li>Surgical correction required</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">"Tracheal Stripe + Y Sign + Megaesophagus to heart" = PRAA</span>
          <p class="mnem-tip">📌 <strong>Megaesophagus stops at heart base</strong> = PRAA suspected (vascular ring)<br>
          📌 Megaesophagus extends THROUGH heart = idiopathic / myasthenia / other<br>
          📌 PRAA = young dog · GSD, Irish Setter predisposed</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Misinterpretation of normal mediastinal fat as mass (esp obese dog)</li>
          <li>Megaesophagus → aspiration pneumonia (check lung pattern!)</li>
          <li>Stress in dyspneic patient with mass</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>FNA / biopsy for definitive Dx of mass</li>
          <li>CT for surgical planning</li>
          <li>Echo if heart base tumor suspected</li>
          <li>Tip: <strong>"Mediastinal mass + cat young = lymphoma until proven"</strong></li>
          <li>Tip: <strong>Thymoma in older dog</strong> — check for myasthenia (acetylcholine receptor antibody)</li>
          <li>Tip: <strong>Megaesophagus = check aspiration</strong> always!</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-thoracic-mass',
    titleEn: 'Pulmonary Mass &amp; Metastasis',
    titleTh: 'ก้อนในปอด + การกระจาย',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['lung mass', 'metastasis', 'nodule', 'cannonball'],
    aliases: ['pulmonary mass', 'metastasis', 'ก้อนปอด', 'meta'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Cough, dyspnea, weight loss, exercise intolerance</li>
          <li><strong>Staging</strong> ของ neoplasia (essential!)</li>
          <li>Pre-surgical screening for met</li>
          <li>Recheck post-treatment</li>
          <li>Geriatric screening</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>3-view thoracic film mandatory</strong> (RL + LL + VD or DV)</li>
          <li>Inspiratory phase essential</li>
          <li>Adequate exposure for lung detail</li>
          <li>Screen detail size: minimum nodule detected ~7 mm (unfilm), ~3 mm (CT)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Why 3 Views &gt; 2 Views — "Lung อะไรขึ้น = นั่นเห็น"</span>
          <ul>
            <li><strong>R</strong>Right lateral → Left lung เห็นชัด (อยู่บน, gravity ไม่กด)</li>
            <li><strong>L</strong>Left lateral → Right lung เห็นชัด</li>
            <li><strong>V</strong>VD/DV → ทั้ง 2 ข้างเทียบกัน</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Up lung = visible lung"</strong> · ปอดด้านบนเห็นดีกว่า · met อาจ visible เฉพาะใน 1 view<br>
          ⚠️ <strong>2 views อาจ miss met ขนาดเล็ก</strong> · ต้อง 3 views โดยเฉพาะใน staging</p>
        </div>

        <p><strong>Single Pulmonary Mass — DDx:</strong></p>
        <ul>
          <li><strong>Primary lung tumor</strong> (carcinoma) — most common single mass in older dog</li>
          <li>Abscess (post-bacterial infection)</li>
          <li>Granuloma (fungal — blasto, histo, crypto)</li>
          <li>Hematoma (post-trauma)</li>
          <li>Lung lobe torsion (deep-chested breed; classic deep-chest sign)</li>
          <li>Pulmonary cyst, bullae</li>
          <li>Foreign body migration</li>
        </ul>

        <p><strong>Multiple Pulmonary Nodules — DDx:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Multi-Nodule DDx — by Pattern</span>
          <table>
            <tr>
              <th>Pattern</th><th>DDx</th>
            </tr>
            <tr>
              <td><strong>"Cannonball"</strong> (ใหญ่ &gt; 3 cm, scattered)</td>
              <td>Carcinomatosis · Hemangiosarcoma met</td>
            </tr>
            <tr>
              <td><strong>"Miliary"</strong> (เล็ก &lt; 5 mm, diffuse)</td>
              <td>Fungal · Carcinomatosis · TB</td>
            </tr>
            <tr>
              <td><strong>Single dominant + smaller ones</strong></td>
              <td>Primary tumor with met</td>
            </tr>
            <tr>
              <td><strong>Cavitary nodules</strong> (มี air space ใน)</td>
              <td>Squamous cell met · Abscess</td>
            </tr>
            <tr>
              <td><strong>Calcified nodules</strong></td>
              <td>Fungal granuloma (old) · OSA met</td>
            </tr>
            <tr>
              <td><strong>Bilateral hilar lymphadenopathy</strong></td>
              <td>Lymphoma · Fungal · Lymphocytic granulomatosis</td>
            </tr>
          </table>
        </div>

        <p><strong>Nodule features สำคัญ (Roentgen signs):</strong></p>
        <ul>
          <li><strong>Number:</strong> single (= primary tumor more likely) vs multiple (= met more likely)</li>
          <li><strong>Size:</strong> &gt; 3 cm = mass · &lt; 3 cm = nodule</li>
          <li><strong>Distribution:</strong>
            <ul>
              <li>Hematogenous → uniform throughout</li>
              <li>Lymphatic → perihilar, peripheral lymphatics</li>
              <li>Aerogenous → bronchial distribution</li>
            </ul>
          </li>
          <li><strong>Margins:</strong> sharp = benign or chronic · ill-defined = aggressive · spiculated = malignant</li>
          <li><strong>Cavitation:</strong> abscess vs squamous met</li>
          <li><strong>Mineralization:</strong> chronic granuloma · OSA met</li>
        </ul>

        <p><strong>Special considerations:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">"OSA = ปอดเสมอ" — Staging Cancer</span>
          <ul>
            <li><strong>Bone tumor (OSA)</strong> → ดูปอดเสมอ (90% มี microscopic met ตอน Dx)</li>
            <li><strong>Splenic mass (HSA)</strong> → ดูปอด + cardiac (right atrium)</li>
            <li><strong>Anal sac AC</strong> → ดู sub-lumbar lymph nodes</li>
            <li><strong>Mammary tumor</strong> → ดูปอด + regional lymph nodes</li>
            <li><strong>Mast cell tumor</strong> → ดู sub-lumbar nodes (visceral) + abdominal US</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Stage before you cut"</strong> · เปลี่ยน prognosis และ surgical decision<br>
          ⚠️ <strong>OSA: 10% radiograph-positive met at Dx, but ~90% microscopic</strong> — chemotherapy mandatory</p>
        </div>

        <p><strong>Lung Lobe Torsion (LLT) — special pattern:</strong></p>
        <ul>
          <li>Deep-chested breed (Afghan, large terrier)</li>
          <li>Acute respiratory distress + pleural effusion</li>
          <li>Lobar consolidation + bronchi terminate abruptly (not branching) — <strong>"vesicular pattern"</strong></li>
          <li>Most common: <strong>right middle lobe</strong></li>
          <li>Surgical emergency</li>
        </ul>

        <p><strong>Detection limitations of radiograph:</strong></p>
        <ul>
          <li>Minimum nodule size detected: ~7-9 mm</li>
          <li>Negative radiograph ไม่ rule out micro-metastasis</li>
          <li><strong>CT 10× more sensitive</strong> for small nodules</li>
          <li>Recommend 3-view chest film q3 mo for high-risk patient</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Single met may be missed in 1-2 views (gravity puts in dependent lung)</li>
          <li>Mediastinal fat in obese dog mimics mass</li>
          <li>Vessels en-face mimic nodules</li>
          <li>Expiratory artifact</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>FNA / biopsy of accessible lung mass</li>
          <li>CT if radiograph equivocal or for staging</li>
          <li>Treat underlying neoplasia per oncologist</li>
          <li>Tip: <strong>"3 views &gt; 2 views"</strong> · always 3 for staging</li>
          <li>Tip: <strong>"Stage before surgery"</strong> · changes plan / prognosis</li>
          <li>Tip: <strong>OSA + clean met scan ≠ no metastasis</strong> · still chemo</li>
          <li>Tip: <strong>CT for definitive met assessment</strong> · radiograph = screening only</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-tracheal-airway',
    titleEn: 'Tracheal &amp; Airway Disease',
    titleTh: 'โรคของ trachea และทางเดินหายใจ',
    type: 'topic',
    system: 'thoracic',
    species: ['dog', 'cat'],
    tags: ['tracheal collapse', 'airway', 'tracheal narrowing', 'foreign body'],
    aliases: ['tracheal collapse', 'airway disease', 'หลอดลม'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Cough (chronic, especially small breed)</li>
          <li>Stridor, dyspnea</li>
          <li>Suspected tracheal collapse, foreign body, tracheitis</li>
          <li>Brachycephalic syndrome workup</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — แต่ต้องการ films ในทั้ง inspiration + expiration</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Inspiratory + expiratory views (dynamic disease)</li>
          <li>Lateral views ของ thorax + cervical region</li>
          <li>Fluoroscopy ดีกว่า static films สำหรับ dynamic collapse</li>
        </ul>
      `,
      steps: `
        <p><strong>Tracheal Collapse — หมาเล็กพันธุ์ "TPM":</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Tracheal Collapse — "Toy · Pomeranian · Maltese · Yorkie · Chihuahua"</span>
          <ul>
            <li>Toy Poodle, Pomeranian, Maltese, Yorkie, Chihuahua</li>
            <li>Middle-aged to older</li>
            <li>"<strong>Honking cough</strong>" — เสียงเหมือน goose</li>
            <li>Worse with excitement, leash pull, heat</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"TPMYC"</strong> = Toy breeds ที่เป็น tracheal collapse บ่อย<br>
          📌 Honking cough + small breed = tracheal collapse จนกว่าจะพิสูจน์ว่าไม่ใช่</p>
        </div>

        <p><strong>Radiographic findings:</strong></p>
        <ul>
          <li><strong>Inspiratory phase:</strong>
            <ul>
              <li>Cervical / thoracic inlet collapse (extra-thoracic)</li>
              <li>Trachea narrows during inspiration ที่ thoracic inlet</li>
            </ul>
          </li>
          <li><strong>Expiratory phase:</strong>
            <ul>
              <li>Intra-thoracic collapse</li>
              <li>Trachea narrows during expiration ที่ carina</li>
            </ul>
          </li>
          <li><strong>Fluoroscopy</strong> = gold standard (real-time dynamic)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Tracheal Collapse Grading — 4 Grades</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">I</span>
              <span class="num-label">25% reduction · medical mgmt</span>
            </div>
            <div class="num-card">
              <span class="num-big">II</span>
              <span class="num-label">50% reduction · medical/stent</span>
            </div>
            <div class="num-card">
              <span class="num-big">III</span>
              <span class="num-label">75% reduction · stent</span>
            </div>
            <div class="num-card">
              <span class="num-big">IV</span>
              <span class="num-label">Lumen collapsed · stent/surgery</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Grade III-IV → <strong>tracheal stenting</strong> consider<br>
          📌 Medical: weight loss + cough suppressant + anti-inflammatory + bronchodilator</p>
        </div>

        <p><strong>Brachycephalic Airway Syndrome — radiographic findings:</strong></p>
        <ul>
          <li>Hypoplastic trachea (Bulldog especially)
            <ul>
              <li>Trachea diameter &lt; 2× diameter of 3rd rib at thoracic inlet</li>
              <li>Or T:TI ratio &lt; 0.16 (Bulldog), &lt; 0.13 (other)</li>
            </ul>
          </li>
          <li>Soft palate elongation (CT/endoscopy better)</li>
          <li>Aspiration pneumonia (cranio-ventral pattern)</li>
          <li>Lung pattern from chronic respiratory effort</li>
        </ul>

        <p><strong>Tracheal Foreign Body / Mass:</strong></p>
        <ul>
          <li>Acute onset of distress / cough</li>
          <li>Radiopaque foreign body visible (bone, hairball)</li>
          <li>Soft tissue density mass / thickening</li>
          <li>+/- post-obstructive lung pattern</li>
          <li>Bronchoscopy = both diagnostic + therapeutic</li>
        </ul>

        <p><strong>Tracheal Rupture:</strong></p>
        <ul>
          <li>Post-cat intubation (most common cause!)</li>
          <li>Trauma (HBC, bite wound)</li>
          <li>Subcutaneous emphysema cervical/thoracic</li>
          <li>Pneumomediastinum +/- pneumothorax</li>
          <li><strong>Cat ETT cuff over-inflation</strong> = #1 cause</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">"แมวหลังผ่าตัด + บวมใต้คอ = Tracheal Rupture"</span>
          <p class="mnem-tip">⚠️ <strong>Subcutaneous emphysema 24-48 hr post-anesthesia ในแมว</strong> = tracheal rupture จาก ETT cuff over-inflation<br>
          📌 ป้องกัน: ใช้ <strong>cuff manometer</strong> · ไม่ over-inflate · disconnect ETT before turning patient</p>
        </div>

        <p><strong>Bronchial Foreign Body:</strong></p>
        <ul>
          <li>Hunting dog with grass awn / foxtail</li>
          <li>Acute onset cough, hemoptysis</li>
          <li>Localized lung consolidation distal to FB</li>
          <li>Often missed on radiograph (FB radiolucent)</li>
          <li>Bronchoscopy diagnostic + therapeutic</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Static films may miss dynamic collapse → fluoroscopy needed</li>
          <li>Foreign body radiolucent → endoscopy needed</li>
          <li>Stress in distressed patient</li>
          <li>Aspiration pneumonia secondary to laryngeal/airway disease</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Fluoroscopy / bronchoscopy for definitive Dx</li>
          <li>Treat per specific etiology</li>
          <li>Tip: <strong>"Honking + Toy breed = tracheal collapse"</strong></li>
          <li>Tip: <strong>Inspiratory = extra-thoracic · Expiratory = intra-thoracic collapse</strong></li>
          <li>Tip: <strong>Cat post-anesthesia + SubQ emphysema = tracheal rupture</strong></li>
          <li>Tip: <strong>Hunting dog + acute cough = grass awn</strong> · บ่อยใน Setter, Spaniel</li>
        </ul>
      `
    }
  },

  /* ============================================================
     Abdominal · ช่องท้อง (6)
     ============================================================ */

  {
    id: 'rad-abdominal-approach',
    titleEn: 'Abdominal Radiograph — Systematic Approach',
    titleTh: 'การอ่าน abdominal radiograph อย่างเป็นระบบ',
    type: 'topic',
    system: 'abdominal',
    species: ['dog', 'cat'],
    tags: ['abdominal', 'systematic', 'approach', 'serosal detail'],
    aliases: ['abdominal interpretation', 'อ่านท้อง'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>ทุกครั้งที่อ่าน abdominal radiograph</li>
          <li>Vomiting, diarrhea, abdominal pain workup</li>
          <li>Trauma evaluation</li>
          <li>Suspected mass, foreign body, urolithiasis</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — เป็น approach</li></ul>`,
      preparation: `
        <ul>
          <li>2-3 view abdominal film (RL + VD minimum)</li>
          <li>Field of view: <strong>diaphragm → pubis</strong></li>
          <li>Empty bladder + recent feces ดีกว่า (ถ้าทำได้)</li>
          <li>Inspiratory phase</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">"7 Pizza Slices" — แบ่งช่องท้องเป็น 7 ส่วน</span>
          <ul>
            <li><strong>1</strong>Liver + diaphragm + GB</li>
            <li><strong>2</strong>Stomach + pylorus</li>
            <li><strong>3</strong>Spleen</li>
            <li><strong>4</strong>Kidneys + ureters</li>
            <li><strong>5</strong>SI + LI loops</li>
            <li><strong>6</strong>Bladder + urethra + prostate</li>
            <li><strong>7</strong>Body wall + spine + ribs + pelvic bones</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"7 Pizza Slices"</strong> — ดูทีละส่วน อย่าข้าม</p>
        </div>

        <div class="mnemonic diagram">
          <span class="mnem-title">Serosal Detail — กุญแจสำคัญ</span>
          <div class="diagram-grid">
            <div class="diagram-box green">
              <span class="box-title">✅ ดี (Good)</span>
              เห็นเส้นแยกชัด<br>
              💡 Healthy adult
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">⚠️ ลด</span>
              ฟุ้ง · เส้นไม่ชัด<br>
              <em>Young, lean, mild fluid</em>
            </div>
            <div class="diagram-box red">
              <span class="box-title">❌ หาย</span>
              "Ground glass"<br>
              <em>Peritonitis · ascites</em>
            </div>
          </div>
          <p class="mnem-tip">⚠️ <strong>Loss of serosal detail in adult = peritoneal fluid</strong> until proven<br>
          📌 Young/emaciated มี serosal detail ลดเป็นปกติ</p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">"ROBERTS" Checklist</span>
          <ul>
            <li><strong>R</strong>etroperitoneum — kidneys, sublumbar nodes</li>
            <li><strong>O</strong>rgans — liver, spleen, stomach, intestine</li>
            <li><strong>B</strong>ladder + urethra + prostate</li>
            <li><strong>E</strong>xtra-abdominal — body wall, hernia</li>
            <li><strong>R</strong>etroperitoneal vs intra-peritoneal</li>
            <li><strong>T</strong>races — gas/fluid abnormal patterns</li>
            <li><strong>S</strong>keletal — spine, ribs, pelvis, hips</li>
          </ul>
          <p class="mnem-tip">📌 อย่าลืม <strong>skeleton</strong>! · sublumbar mass + bone met มักหลุด</p>
        </div>

        <p><strong>Free gas (pneumoperitoneum) detection:</strong></p>
        <ul>
          <li>Best on <strong>standing or horizontal beam lateral</strong></li>
          <li>Free gas under diaphragm = emergency</li>
          <li>Both sides of bowel wall visible = pneumoperitoneum</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Insufficient field of view → miss pathology</li>
          <li>Single view → miss FB/mass behind organs</li>
          <li>Recent food/feces → obscure</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document findings systematically</li>
          <li>Generate DDx + recommend next test (US, contrast, surgery)</li>
          <li>Tip: <strong>"7 pizza slices"</strong> + <strong>ROBERTS</strong></li>
          <li>Tip: <strong>POCUS faster + safer</strong> for fluid detection</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-gi-obstruction',
    titleEn: 'GI Obstruction &amp; Foreign Body',
    titleTh: 'การอุดตันของทางเดินอาหาร',
    type: 'topic',
    system: 'abdominal',
    species: ['dog', 'cat'],
    tags: ['obstruction', 'foreign body', 'ileus', 'plication', 'GI'],
    aliases: ['obstruction', 'foreign body', 'อุดตัน', 'FB'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Vomiting (acute/chronic)</li>
          <li>Anorexia + abdominal pain</li>
          <li>Suspected FB ingestion</li>
          <li>String foreign body (cat especially!)</li>
          <li>Intussusception evaluation</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — เคสไม่ stable resuscitate ก่อน</li></ul>`,
      preparation: `
        <ul>
          <li>2-3 view abdominal film</li>
          <li>+/- horizontal beam (free gas)</li>
          <li>+/- contrast study (barium series)</li>
          <li>POCUS ดีมาก</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">SI Diameter Rule — "2 × L5"</span>
          <ul>
            <li><strong>หมา</strong>: SI loop &lt; <strong>2 × L5 vertebra height</strong></li>
            <li><strong>หมา</strong>: หรือ &lt; <strong>1.6 × L5 endplate</strong> (sensitive)</li>
            <li><strong>แมว</strong>: SI &lt; <strong>12 mm</strong> · หรือ &lt; 2× rib width T12</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"2× L5 หมา · 12 mm แมว"</strong><br>
          ⚠️ เกินเกณฑ์ + clinical signs = obstruction!</p>
        </div>

        <div class="mnemonic diagram">
          <span class="mnem-title">Mechanical vs Functional Obstruction</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">Mechanical</span>
              <strong>"Two populations"</strong><br>
              ↑ dilated proximal<br>
              ↓ empty distal<br>
              <em>FB · mass · intussusception</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">Functional (ileus)</span>
              <strong>Uniform dilation</strong><br>
              All loops same size<br>
              <em>Pancreatitis · peritonitis · post-op</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"Two populations = Mechanical · Uniform = Ileus"</strong></p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Linear FB — "เชือก · ของแมวบ่อยสุด"</span>
          <ul>
            <li><strong>Cat &gt; Dog</strong> · ติดที่ <strong>โคนลิ้น</strong></li>
            <li>FB: เชือก · ไหม · กระดาษ · ผ้า</li>
            <li>SI <strong>"plication" / "accordion"</strong> — ลำไส้พับ</li>
            <li>Gas pattern <strong>"comma" / "C-shape"</strong></li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>แมว vomiting → ตรวจใต้ลิ้นเสมอ!</strong><br>
          ⚠️ <strong>Plication = pathognomonic</strong> · ห้ามดึงเชือก! → ผ่าตัด</p>
        </div>

        <p><strong>Foreign body locations + intussusception:</strong></p>
        <ul>
          <li><strong>Pyloric:</strong> distended stomach + empty SI</li>
          <li><strong>Distal SI/ileocecal:</strong> massive SI dilation + empty colon</li>
          <li><strong>Intussusception:</strong> "sausage-shaped" mass · young animal · US "target sign"</li>
        </ul>

        <p><strong>Functional ileus DDx:</strong></p>
        <ul>
          <li>Pancreatitis (regional ileus)</li>
          <li>Peritonitis</li>
          <li>Post-op (24-48 hr normal)</li>
          <li>Electrolyte (hypoK, hyperCa)</li>
          <li>Drugs (anticholinergics, opioids)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Missed FB → bowel necrosis · peritonitis · sepsis</li>
          <li>Linear FB pull = catastrophic perforation</li>
          <li>Misinterpret ileus as obstruction</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Surgery ถ้า mechanical obstruction</li>
          <li>POCUS / barium ถ้า equivocal</li>
          <li>Repeat film 4-6 hr later if borderline</li>
          <li>Tip: <strong>"SI &gt; 2× L5 = obstruction"</strong></li>
          <li>Tip: <strong>Plication = linear FB</strong> · ตรวจใต้ลิ้นแมว!</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-gdv',
    titleEn: 'Gastric Dilatation-Volvulus (GDV)',
    titleTh: 'GDV — กระเพาะพลิก',
    type: 'topic',
    system: 'abdominal',
    species: ['dog'],
    tags: ['GDV', 'gastric volvulus', 'bloat', 'C-sign', 'shelf'],
    aliases: ['GDV', 'bloat', 'กระเพาะพลิก'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Suspected GDV — large breed + retching + abdominal distension</li>
          <li><strong>Right lateral view</strong> สำคัญสุด (diagnostic!)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Don't delay surgery</strong> for extensive imaging</li>
          <li>Decompress (OG tube/trocar) BEFORE radiograph if critical</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Right lateral view ONLY</strong> often sufficient</li>
          <li>Patient stabilized first (IV fluid, O2, decompression)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">GDV Pathognomonic — "3 C's"</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">"C-Sign"</span>
              Pylorus <strong>cranial &amp; dorsal</strong><br>
              เห็นบน RIGHT LATERAL<br>
              <em>Pathognomonic!</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">"Compartmentalization"</span>
              Soft tissue band แบ่ง stomach<br>
              <strong>"Double bubble"</strong>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">"Cranial Pylorus"</span>
              ปกติ pylorus ventral<br>
              GDV = ขึ้น dorsal-cranial
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>Right lateral ดีที่สุด</strong> · pylorus จะอยู่ "บน" เห็นชัด<br>
          ⚠️ <strong>Simple dilation:</strong> distended แต่ไม่มี C-sign · pylorus ตำแหน่งปกติ</p>
        </div>

        <p><strong>Right Lateral Anatomy:</strong></p>
        <ul>
          <li><strong>Normal:</strong> pylorus ventral right · fundus dorsal left · gas in fundus</li>
          <li><strong>GDV:</strong> pylorus moved <strong>dorsal + cranial</strong> · "Reverse C" or "Popeye sign"</li>
        </ul>

        <p><strong>VD findings:</strong> "Double bubble" sign · pylorus left of midline</p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Lactate Prognosis</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">&gt; 9</span>
              <span class="num-label">Poor (~58% mortality)</span>
            </div>
            <div class="num-card">
              <span class="num-big">&lt; 6</span>
              <span class="num-label">After fluid = good</span>
            </div>
            <div class="num-card">
              <span class="num-big">↑</span>
              <span class="num-label">Free gas = perforation</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Lactate &lt; 6 หลัง fluid = ~99% survival<br>
          ⚠️ Free gas in abdomen = gastric perforation = grave</p>
        </div>

        <div class="mnemonic flowchart">
          <span class="mnem-title">GDV Workflow — Don't Delay!</span>
          <div class="flow-step start"><span class="flow-label">1</span><strong>Suspect</strong> · Large breed + retching + distension</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step danger"><span class="flow-label">2</span><strong>Stabilize FIRST</strong> · IV fluid · O2 · decompression · ECG</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step decision"><span class="flow-label">3</span><strong>Right lateral ONE view</strong> · confirm volvulus</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step danger"><span class="flow-label">4</span><strong>SURGERY immediately</strong></div>
          <p class="mnem-tip">⚠️ <strong>1 view · 1 minute · 1 decision: surgery</strong></p>
        </div>

        <p><strong>Predisposed breeds:</strong> Great Dane, GSD, Standard Poodle, Weimaraner, Setters, Bloodhound, Akita · deep-chested · middle-aged+</p>
      `,
      complications: `
        <ul>
          <li>Misdiagnose simple dilation as volvulus</li>
          <li>Delay surgery for "perfect" imaging</li>
          <li>Free gas = perforation = grave</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Surgery + gastropexy</li>
          <li>ICU 24-72 hr · lactate · ECG (VPCs)</li>
          <li>Tip: <strong>"3 C's"</strong> = C-sign · Compartmentalization · Cranial pylorus</li>
          <li>Tip: <strong>Lactate &lt; 6 = good</strong> · &gt; 9 = poor</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-peritonitis-effusion',
    titleEn: 'Peritonitis &amp; Abdominal Effusion',
    titleTh: 'Peritonitis และของเหลวในช่องท้อง',
    type: 'topic',
    system: 'abdominal',
    species: ['dog', 'cat'],
    tags: ['peritonitis', 'free fluid', 'ascites', 'pneumoperitoneum'],
    aliases: ['peritonitis', 'free fluid', 'ascites', 'น้ำในท้อง'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Acute abdomen workup</li>
          <li>Suspected GI perforation</li>
          <li>Trauma · suspected septic peritonitis</li>
          <li>Hepatic/splenic mass with possible rupture</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — แต่ unstable patient → POCUS faster</li></ul>`,
      preparation: `
        <ul>
          <li>2-3 view abdominal film</li>
          <li><strong>Horizontal beam lateral / standing</strong> สำหรับ free gas</li>
          <li>POCUS (AFAST) — much more sensitive</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Free Fluid — "Ground Glass · ลบเส้น"</span>
          <ul>
            <li><strong>Loss of serosal detail</strong> · "Ground glass" appearance</li>
            <li><strong>Organ borders blurred</strong></li>
            <li>Bowel loops <strong>"floating"</strong> central</li>
            <li>Body wall distended</li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>Loss of serosal detail in adult = abnormal</strong><br>
          📌 <strong>Radiograph:</strong> ต้อง ≥ 5-10 mL/kg เพื่อเห็น<br>
          📌 <strong>POCUS:</strong> เห็น 2-5 mL ได้เลย</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Free Fluid DDx</span>
          <table>
            <tr><th>ชนิด</th><th>สาเหตุ</th></tr>
            <tr><td><strong>Hemoabdomen</strong></td><td>HSA splenic · trauma · rodenticide · liver mass</td></tr>
            <tr><td><strong>Uroabdomen</strong></td><td>Ruptured bladder/ureter/urethra</td></tr>
            <tr><td><strong>Bile peritonitis</strong></td><td>GB rupture · post-cholecystectomy</td></tr>
            <tr><td><strong>Septic peritonitis</strong></td><td>GI perforation · pyometra · abscess</td></tr>
            <tr><td><strong>Chylous</strong></td><td>Lymphangiectasia · neoplasia · trauma</td></tr>
            <tr><td><strong>Transudate</strong></td><td>Hypoalbuminemia · CHF</td></tr>
          </table>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Pneumoperitoneum = "ทางเดินอาหารแตก!"</span>
          <p style="margin: 8px 0;"><strong>Detection (best to worst):</strong></p>
          <ol>
            <li><strong>Standing horizontal beam lateral</strong> · gas under diaphragm (best!)</li>
            <li>VD with horizontal beam</li>
            <li>Standard supine views (less sensitive)</li>
          </ol>
          <p style="margin: 8px 0;"><strong>Signs:</strong></p>
          <ul>
            <li>Gas under diaphragm</li>
            <li>Gas in falciform fat</li>
            <li><strong>Both sides of bowel wall visible</strong></li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>Pneumoperitoneum = surgical emergency</strong><br>
          📌 DDx: Recent surgery (gas absorbs 7-21 d) · GI perforation · Penetrating trauma<br>
          📌 <strong>Always history first!</strong></p>
        </div>

        <p><strong>Septic peritonitis Dx by abdominocentesis:</strong></p>
        <ul>
          <li><strong>Glucose abdominal &lt; blood by &gt; 20 mg/dL</strong></li>
          <li><strong>Lactate abdominal &gt; blood</strong></li>
          <li>Cytology: degenerate neutrophils + intracellular bacteria</li>
        </ul>

        <p><strong>Specific patterns:</strong></p>
        <ul>
          <li><strong>Localized peritonitis</strong> (pancreatitis): localized loss serosal detail upper right · "sentinel loop" adjacent dilated</li>
          <li><strong>Hemoabdomen + splenic/hepatic mass:</strong> mass effect + free fluid · POCUS to localize</li>
          <li><strong>Uroabdomen:</strong> trauma history · small bladder · K + creatinine &gt; 2× peripheral</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Septic peritonitis untreated → rapid sepsis · death</li>
          <li>Misinterpret post-op gas as new perforation</li>
          <li>Missing small fluid → POCUS!</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li><strong>Abdominocentesis</strong> for fluid analysis</li>
          <li>Septic peritonitis → emergency exploratory + lavage</li>
          <li>Tip: <strong>Both sides of bowel wall visible = pneumoperitoneum</strong></li>
          <li>Tip: <strong>POCUS more sensitive</strong> · 2-5 mL vs 5-10 mL/kg</li>
          <li>Tip: <strong>Glucose gap &gt; 20 = septic</strong> · K Cr &gt; 2× = uroabdomen</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-abdominal-mass',
    titleEn: 'Abdominal Mass &amp; Organomegaly',
    titleTh: 'ก้อนในท้อง + อวัยวะโต',
    type: 'topic',
    system: 'abdominal',
    species: ['dog', 'cat'],
    tags: ['abdominal mass', 'splenomegaly', 'hepatomegaly', 'organomegaly'],
    aliases: ['abdominal mass', 'splenomegaly', 'hepatomegaly', 'ก้อนท้อง'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Palpable abdominal mass</li>
          <li>Distended abdomen · weight loss + anorexia</li>
          <li>Suspected organomegaly</li>
          <li>Geriatric screening</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี</li></ul>`,
      preparation: `
        <ul>
          <li>2-3 view abdominal film</li>
          <li>Empty bladder + bowel ดีกว่า</li>
          <li>POCUS / abdominal US — adjunct สำคัญ</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">Mass Localization — 4 Quadrants</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">Cranial</span>
              <strong>Liver, GB, stomach, spleen head</strong><br>
              <em>Hepatic · splenic mass</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">Mid</span>
              <strong>Spleen, SI, mesenteric LN</strong><br>
              <em>Splenic · LN · SI</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">Caudal</span>
              <strong>Bladder, uterus, prostate, sublumbar LN</strong><br>
              <em>Cystic · prostatic · uterine</em>
            </div>
            <div class="diagram-box green">
              <span class="box-title">Retroperitoneal</span>
              <strong>Kidneys, adrenals, ureters</strong><br>
              <em>Renal · adrenal mass</em>
            </div>
          </div>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Hepatomegaly DDx — "PALMS"</span>
          <ul>
            <li><strong>P</strong>SS — actually <em>small</em>!</li>
            <li><strong>A</strong>denoma · Adenocarcinoma (HCC)</li>
            <li><strong>L</strong>ymphoma · Lipidosis (cat)</li>
            <li><strong>M</strong>etastasis · Myeloproliferative</li>
            <li><strong>S</strong>teroid (Cushings) · Sepsis · Shock liver</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Rounded caudal liver edge"</strong> = ใหญ่ขึ้น<br>
          📌 หมา older + hepatomegaly = <strong>rule out Cushing's</strong></p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Splenic Mass — "2/3 Rule"</span>
          <p class="mnem-tip">📌 <strong>2/3 rule:</strong> ⅔ splenic mass = malignant · ⅔ malignant = HSA<br>
          📌 หมาใหญ่ + splenic mass + collapse = <strong>HSA rupture · hemoabdomen</strong><br>
          ⚠️ Splenic mass + free fluid + acute collapse = <strong>surgical emergency</strong></p>
        </div>

        <p><strong>Specific organomegaly:</strong></p>
        <ul>
          <li><strong>Hepatomegaly:</strong> liver caudal to costal arch · gastric axis displaced caudally · "rounded" caudoventral margin</li>
          <li><strong>Splenomegaly:</strong> "hockey stick" or "comma" shape · past costal arch</li>
          <li><strong>Renomegaly:</strong> &gt; 2.5-3.5× L2 (dog) · 2.4-3.0× L2 (cat) · cat lymphoma classic</li>
          <li><strong>Bladder:</strong> distended (urethral obs) · small (uroabdomen) · trigone mass = TCC</li>
          <li><strong>Prostatomegaly:</strong> &gt; 70% of pelvic inlet · BPH (intact) vs carcinoma (neutered + sublumbar LN)</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Sublumbar LN — "Anal sac · Prostate · Hindlimb"</span>
          <ul>
            <li>Mass dorsal to colon · ventral to spine (L5-L7)</li>
            <li>Pushes colon ventrally</li>
            <li><strong>DDx:</strong>
              <ul>
                <li><strong>Anal sac AC</strong> (older spayed female · classic!)</li>
                <li><strong>Prostatic carcinoma</strong> (older neutered male)</li>
                <li>Lymphoma · hindlimb tumor met</li>
              </ul>
            </li>
          </ul>
          <p class="mnem-tip">📌 <strong>Anal sac AC + sublumbar LN + hyperCa</strong> = classic triad<br>
          📌 <strong>Prostate carcinoma → vertebral bone metastasis</strong> common</p>
        </div>

        <p><strong>Mass features for malignancy:</strong></p>
        <ul>
          <li>Irregular margin → malignant</li>
          <li>Mineralization within → chronic / specific (OSA, granuloma)</li>
          <li>Multiple masses → metastasis or multifocal</li>
          <li>Free fluid + mass → rupture or carcinomatosis</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Misidentify normal organ as mass</li>
          <li>Position errors mimic mass effect</li>
          <li>Bowel content (food, feces) mimic mass</li>
          <li>Need US/CT for definitive characterization</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>POCUS / formal US for characterization</li>
          <li>FNA / biopsy for cell origin</li>
          <li>Staging if neoplastic (3-view chest + LN)</li>
          <li>Tip: <strong>"Hockey stick spleen + mass = HSA suspect"</strong></li>
          <li>Tip: <strong>"Sublumbar LN in older dog = anal sac AC or prostate cancer"</strong></li>
          <li>Tip: <strong>2/3 rule</strong> for splenic mass</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-urolithiasis',
    titleEn: 'Urolithiasis &amp; Urinary Tract Disease',
    titleTh: 'นิ่วในระบบปัสสาวะ',
    type: 'topic',
    system: 'abdominal',
    species: ['dog', 'cat'],
    tags: ['urolith', 'stone', 'cystolith', 'nephrolith', 'urethrolith'],
    aliases: ['urolith', 'นิ่ว', 'cystolith'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Hematuria, dysuria, stranguria</li>
          <li>Suspected urethral obstruction (cat especially!)</li>
          <li>Recurrent UTI</li>
          <li>PU/PD workup</li>
        </ul>
      `,
      contraindications: `<ul><li>เคส obstruction ต้อง decompress before extensive imaging</li></ul>`,
      preparation: `
        <ul>
          <li>2-3 view abdominal film + lateral pelvis (urethra)</li>
          <li>Empty colon ดีกว่า</li>
          <li>+/- contrast urethrography for radiolucent stones</li>
          <li>US — best for ureteroliths + small uroliths</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">Urolith Radiopacity Ranking</span>
          <table>
            <tr><th>ประเภท</th><th>Opacity</th><th>ลักษณะ</th></tr>
            <tr><td><strong>Calcium oxalate</strong></td><td>++++ (ชัดสุด)</td><td>Sharp, multifaceted, "jacks"</td></tr>
            <tr><td><strong>Calcium phosphate</strong></td><td>++++</td><td>Smooth, round</td></tr>
            <tr><td><strong>Struvite</strong></td><td>+++</td><td>Round, smooth, large</td></tr>
            <tr><td><strong>Cystine</strong></td><td>++ (variable)</td><td>Smooth, ovoid</td></tr>
            <tr><td><strong>Urate</strong></td><td>+ (faint)</td><td>Need contrast</td></tr>
            <tr><td><strong>Xanthine</strong></td><td>0 (radiolucent)</td><td>Need US</td></tr>
            <tr><td><strong>Silica</strong></td><td>+++</td><td>"Jackstone"</td></tr>
          </table>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Stone Visibility — "CCS Visible · UX Need Help"</span>
          <ul>
            <li><strong>CCS</strong> = Calcium · Cystine · Struvite → เห็นบน radiograph</li>
            <li><strong>UX</strong> = Urate · Xanthine → ไม่เห็น / เห็นน้อย</li>
          </ul>
          <p class="mnem-tip">📌 Radiolucent stones (urate, xanthine) → ต้อง US หรือ contrast<br>
          📌 <strong>Urate</strong> = Dalmatian, Bulldog, PSS dogs · <strong>Xanthine</strong> = on allopurinol</p>
        </div>

        <p><strong>Locations:</strong></p>
        <ul>
          <li><strong>Nephroliths:</strong> within renal pelvis · "staghorn" if large</li>
          <li><strong>Ureteroliths:</strong> US best (radiograph misses small)</li>
          <li><strong>Cystoliths:</strong> most common in pets · multiple often</li>
          <li><strong>Urethroliths:</strong>
            <ul>
              <li>Male dog: <strong>os penis</strong> (#1 obstruction site!)</li>
              <li>Male cat: distal urethra (penile)</li>
              <li>Female: rare obstruction</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Cat Urethral Obstruction — Emergency!</span>
          <ul>
            <li>Male cat &gt; female (urethra แคบ)</li>
            <li>Distended bladder visible</li>
            <li>Often <strong>urethral plug</strong> (mucoid + crystals) — ส่วนใหญ่ <strong>radiolucent</strong></li>
            <li>Crystals: struvite (common cat) · ca oxalate</li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>Radiograph ไม่ rule out!</strong> · plug มักไม่เห็น<br>
          📌 Distended bladder + clinical = obstruction · ผ่าน catheter / cystocentesis ทันที</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">Stone Management — Quick Decisions</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">&lt; 5 mm</span>
              <span class="num-label">May pass · monitor</span>
            </div>
            <div class="num-card">
              <span class="num-big">&gt; 5 mm</span>
              <span class="num-label">Surgery · diet</span>
            </div>
            <div class="num-card">
              <span class="num-big">Struvite</span>
              <span class="num-label">Diet dissolution OK</span>
            </div>
            <div class="num-card">
              <span class="num-big">Ca oxalate</span>
              <span class="num-label">Surgery only</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>Struvite = dissolvable</strong> (Hill's S/D, Royal Canin Urinary)<br>
          📌 <strong>Calcium oxalate = NOT dissolvable</strong> · need surgery / lithotripsy</p>
        </div>

        <p><strong>Bladder mass vs stone:</strong></p>
        <ul>
          <li>Stones: free, gravity-dependent (ลอยลงต่ำ)</li>
          <li>Mass: stationary, often at trigone (TCC)</li>
          <li>VD vs lateral comparison: stones move, masses don't</li>
          <li>US definitive</li>
        </ul>

        <p><strong>Pyelonephritis signs:</strong></p>
        <ul>
          <li>Renal asymmetry · pyelectasia (US sees better)</li>
          <li>Mineralization in pelvis</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Radiolucent stones missed</li>
          <li>Confused with feces / overlying gas</li>
          <li>Cat plug = mucoid + crystals → radiograph not sensitive</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Stone analysis after retrieval</li>
          <li>Diet management based on stone type</li>
          <li>Recheck radiograph 4-6 weeks</li>
          <li>Tip: <strong>"CCS visible · UX need help"</strong></li>
          <li>Tip: <strong>Cat male obstruction = emergency</strong> · plug often radiolucent</li>
          <li>Tip: <strong>Os penis = #1 male dog obstruction site</strong></li>
          <li>Tip: <strong>US &gt; radiograph</strong> for ureteroliths + small bladder stones</li>
        </ul>
      `
    }
  },

  /* ============================================================
     Musculoskeletal · กระดูก/ข้อ (5)
     ============================================================ */

  {
    id: 'rad-aggressive-vs-benign',
    titleEn: 'Aggressive vs Benign Bone Lesion',
    titleTh: 'แยก Aggressive vs Benign Bone Lesion',
    type: 'topic',
    system: 'msk',
    species: ['dog', 'cat'],
    tags: ['bone tumor', 'osteosarcoma', 'aggressive', 'benign', 'periosteal'],
    aliases: ['bone tumor', 'osteosarcoma', 'OSA', 'มะเร็งกระดูก'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Lameness without clear trauma</li>
          <li>Bone swelling / pain</li>
          <li>Pathologic fracture</li>
          <li>Suspected bone tumor / osteomyelitis</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — severe lameness ต้อง analgesia ก่อน</li></ul>`,
      preparation: `
        <ul>
          <li>2 orthogonal views (lateral + CrCd)</li>
          <li>Compare with contralateral side</li>
          <li>+/- 3-view chest film for staging (OSA = met!)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">Bone Lesion — 4 Features เปรียบเทียบ</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">⚠️ AGGRESSIVE</span>
              <strong>1. Permeative / moth-eaten</strong><br>
              <strong>2. Wide zone of transition</strong><br>
              <strong>3. Cortical destruction</strong><br>
              <strong>4. Aggressive periosteal</strong> (sunburst, Codman)
            </div>
            <div class="diagram-box green">
              <span class="box-title">✓ BENIGN</span>
              <strong>1. Geographic lysis</strong> (ขอบชัด)<br>
              <strong>2. Narrow zone of transition</strong><br>
              <strong>3. Intact cortex</strong><br>
              <strong>4. Smooth periosteal</strong>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"4 ข้อ — Aggressive ทุกข้อ vs Benign ทุกข้อ"</strong><br>
          ⚠️ ไม่แน่ใจ → assume aggressive · biopsy</p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Lysis Patterns — "Geographic · Moth-eaten · Permeative"</span>
          <ul>
            <li><strong>Geographic</strong> 🟢 — ขอบชัด · circular · benign-leaning</li>
            <li><strong>Moth-eaten</strong> 🟡 — เป็นจุด ๆ 2-5 mm · aggressive</li>
            <li><strong>Permeative</strong> 🔴 — เล็ก ๆ ทั่วไป · ขอบหายาก · most aggressive</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Permeative &gt; Moth-eaten &gt; Geographic</strong> aggressiveness</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Periosteal Reaction Patterns</span>
          <table>
            <tr><th>Pattern</th><th>ลักษณะ</th><th>Aggressiveness</th></tr>
            <tr><td><strong>Solid / Smooth</strong></td><td>Continuous, even</td><td>✓ Benign</td></tr>
            <tr><td><strong>Lamellar / Onion skin</strong></td><td>Multiple layers</td><td>⚠️ Borderline</td></tr>
            <tr><td><strong>Spiculated / Sunburst</strong></td><td>Radiating perpendicular</td><td>⚠️ Aggressive</td></tr>
            <tr><td><strong>Codman's Triangle</strong></td><td>Periosteum lifted off cortex</td><td>⚠️⚠️ Highly aggressive</td></tr>
            <tr><td><strong>Disorganized</strong></td><td>No pattern</td><td>⚠️⚠️ Aggressive</td></tr>
          </table>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">OSA Classic — "Away from Elbow, Toward Knee"</span>
          <ul>
            <li><strong>Distal radius</strong> ⭐ — most common</li>
            <li><strong>Proximal humerus</strong></li>
            <li><strong>Distal femur</strong></li>
            <li><strong>Proximal/distal tibia</strong></li>
            <li>Less common: distal humerus, proximal radius/ulna</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Away from elbow · Toward the knee"</strong> · OSA prefers metaphysis<br>
          📌 <strong>Large/giant breed</strong> middle-aged+<br>
          ⚠️ <strong>OSA = 90% microscopic met at Dx</strong> · staging chest film mandatory!</p>
        </div>

        <p><strong>OSA Radiographic Features:</strong></p>
        <ul>
          <li>Permeative / moth-eaten lysis ที่ metaphysis</li>
          <li>Cortical destruction</li>
          <li>Aggressive periosteal reaction (sunburst, Codman's)</li>
          <li>Soft tissue swelling</li>
          <li><strong>Does NOT cross joint</strong> (joint usually spared) — KEY!</li>
          <li>Pathologic fracture possible</li>
        </ul>

        <p><strong>Other Bone Tumors:</strong></p>
        <ul>
          <li><strong>Chondrosarcoma:</strong> nasal/ribs · slower-growing</li>
          <li><strong>Hemangiosarcoma (bone):</strong> can mimic OSA</li>
          <li><strong>Multiple myeloma:</strong> "punched-out" lesions multiple bones</li>
          <li><strong>Metastatic to bone:</strong> mammary, prostate, TCC, anal sac AC</li>
        </ul>

        <p><strong>Osteomyelitis (mimic OSA) — KEY differences:</strong></p>
        <ul>
          <li>Often has <strong>sequestrum</strong> (dense bone fragment in lytic area)</li>
          <li>History: trauma, surgery, FB migration</li>
          <li><strong>Often crosses joint</strong> (OSA does not!)</li>
          <li>Usually multiple bones / systemic signs</li>
          <li>Biopsy + culture mandatory to differentiate</li>
        </ul>

        <p><strong>Benign Bone Lesions:</strong></p>
        <ul>
          <li><strong>Bone cyst</strong> — geographic, smooth, intact cortex</li>
          <li><strong>Enchondroma</strong> — central, smooth</li>
          <li><strong>Osteochondroma</strong> — exostosis, smooth</li>
          <li><strong>HOD (Hypertrophic osteodystrophy)</strong> — young giant breed, metaphyseal</li>
          <li><strong>Panosteitis</strong> — young large breed, medullary opacity, "pano"</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Misdiagnose OSA as osteomyelitis</li>
          <li>Single view → miss key feature</li>
          <li>Pathologic fracture during handling</li>
          <li>Biopsy mandatory for definitive Dx</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Biopsy + histopathology for definitive Dx</li>
          <li>Staging if neoplasia: 3-view chest + CBC/Chem + ALP</li>
          <li>FNA preferred (less pathologic fracture risk than open)</li>
          <li>Tip: <strong>"4 features"</strong> framework</li>
          <li>Tip: <strong>"Codman's = highly aggressive"</strong> · OSA classic</li>
          <li>Tip: <strong>"Away from elbow, toward knee"</strong> = OSA distribution</li>
          <li>Tip: <strong>OSA does NOT cross joint</strong> · osteomyelitis often does</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-fractures',
    titleEn: 'Fracture Classification &amp; Healing',
    titleTh: 'การแยกประเภท fracture + การหาย',
    type: 'topic',
    system: 'msk',
    species: ['dog', 'cat'],
    tags: ['fracture', 'Salter-Harris', 'callus', 'healing', 'malunion'],
    aliases: ['fracture', 'กระดูกหัก'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Trauma evaluation · HBC · fall</li>
          <li>Lameness</li>
          <li>Suspected pathologic fracture</li>
          <li>Pre-surgical planning · post-op recheck</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — แต่ severe pain ต้อง analgesia ก่อน</li></ul>`,
      preparation: `
        <ul>
          <li><strong>2 orthogonal views</strong> (lateral + CrCd)</li>
          <li><strong>2 joints</strong> (proximal + distal of long bone)</li>
          <li>Sedation often needed</li>
          <li>Compare contralateral side ถ้าไม่แน่ใจ</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Fracture Description — "WHO HIT IT"</span>
          <ul>
            <li><strong>1</strong>Bone + region (distal/middle/proximal third)</li>
            <li><strong>2</strong>Fracture line direction (transverse/oblique/spiral)</li>
            <li><strong>3</strong>Number of fragments</li>
            <li><strong>4</strong>Displacement direction</li>
            <li><strong>5</strong>Apposition (% contact)</li>
            <li><strong>6</strong>Angulation (degree)</li>
            <li><strong>7</strong>Open vs closed</li>
            <li><strong>8</strong>Comminution</li>
          </ul>
          <p class="mnem-tip">📌 ใช้บรรยายให้ surgeon · plan correction<br>
          ตัวอย่าง: <em>"Mid-shaft tibia · oblique · 3 fragments · 50% lateral displacement · 30° caudal angulation · closed"</em></p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Fracture Patterns + Etiology</span>
          <table>
            <tr><th>Pattern</th><th>ลักษณะ</th><th>สาเหตุ</th></tr>
            <tr><td><strong>Transverse</strong></td><td>ตัดตรง · 90°</td><td>Direct blow</td></tr>
            <tr><td><strong>Oblique</strong></td><td>เฉียง 30-45°</td><td>Bending force</td></tr>
            <tr><td><strong>Spiral</strong></td><td>เกลียวยาว</td><td>Twisting force</td></tr>
            <tr><td><strong>Comminuted</strong></td><td>≥ 3 fragments</td><td>High energy</td></tr>
            <tr><td><strong>Greenstick</strong></td><td>หักไม่ขาด · 1 ด้าน</td><td>Young bones</td></tr>
            <tr><td><strong>Avulsion</strong></td><td>Tendon ดึงกระดูก</td><td>Sudden tension</td></tr>
            <tr><td><strong>Compression</strong></td><td>กระดูกบี้</td><td>Axial load · spine</td></tr>
            <tr><td><strong>Pathologic</strong></td><td>หักจาก minor trauma</td><td>Tumor · cyst · osteoporosis</td></tr>
          </table>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Salter-Harris (Pediatric) — "SALTR"</span>
          <ul>
            <li><strong>S</strong>I (Slipped) — ผ่าน physis only</li>
            <li><strong>A</strong>II (Above) — physis + metaphysis (most common ⭐)</li>
            <li><strong>L</strong>III (Lower) — physis + epiphysis</li>
            <li><strong>T</strong>IV (Through) — physis + metaphysis + epiphysis</li>
            <li><strong>R</strong>V (Rammed) — crush injury physis</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"SALTR"</strong> · จำเรียง I-V<br>
          📌 <strong>Type II most common</strong> · best prognosis<br>
          📌 <strong>Type V = worst</strong> · growth arrest, premature closure<br>
          ⚠️ ลูกสัตว์ + fracture → กังวลเรื่อง <strong>growth deformity</strong></p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">Fracture Healing Timeline</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">0-7</span>
              <span class="num-label">วัน · Hematoma</span>
            </div>
            <div class="num-card">
              <span class="num-big">1-3</span>
              <span class="num-label">สัปดาห์ · Soft callus</span>
            </div>
            <div class="num-card">
              <span class="num-big">3-12</span>
              <span class="num-label">สัปดาห์ · Hard callus</span>
            </div>
            <div class="num-card">
              <span class="num-big">3-6</span>
              <span class="num-label">เดือน · Remodeling</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"7 day · 3 wk · 12 wk · 6 mo"</strong><br>
          📌 Callus เริ่มเห็นบน radiograph ที่ <strong>2-3 สัปดาห์</strong><br>
          📌 ลูกสัตว์หายเร็วกว่า adult ~2 เท่า</p>
        </div>

        <p><strong>Healing Complications:</strong></p>
        <ul>
          <li><strong>Delayed union</strong> — slow healing</li>
          <li><strong>Non-union</strong>:
            <ul>
              <li><strong>Hypertrophic</strong> ("elephant foot") — exuberant callus, not bridging</li>
              <li><strong>Atrophic</strong> — no callus, gap, sclerotic ends</li>
              <li><strong>Oligotrophic</strong> — minimal callus</li>
            </ul>
          </li>
          <li><strong>Malunion</strong> — healed but poor alignment</li>
          <li><strong>Osteomyelitis</strong> — infection at fracture site</li>
          <li><strong>Implant failure</strong> — pin migration, plate broken</li>
        </ul>

        <p><strong>Rule of 2's for fractures (review):</strong></p>
        <ul>
          <li>2 views (lateral + CrCd)</li>
          <li>2 joints (above + below fracture)</li>
          <li>2 sides (compare contralateral)</li>
          <li>2 times (re-image post-reduction, follow-up)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Single view → miss displacement</li>
          <li>Open fracture missed → osteomyelitis</li>
          <li>Salter-Harris missed → growth deformity</li>
          <li>Pathologic fracture → underlying disease missed</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Surgical planning if displaced/comminuted</li>
          <li>Splint/cast for stable simple fractures</li>
          <li>Recheck 4-8 weeks</li>
          <li>Tip: <strong>"WHO HIT IT"</strong> framework</li>
          <li>Tip: <strong>SALTR</strong> for pediatric · Type II most common</li>
          <li>Tip: <strong>2 views · 2 joints · 2 sides · 2 times</strong></li>
          <li>Tip: <strong>Pathologic fracture = check tumor/cyst</strong></li>
        </ul>
      `
    }
  },

  {
    id: 'rad-osteoarthritis',
    titleEn: 'Osteoarthritis (Degenerative Joint Disease)',
    titleTh: 'ข้อเสื่อม (Osteoarthritis / DJD)',
    type: 'topic',
    system: 'msk',
    species: ['dog', 'cat'],
    tags: ['osteoarthritis', 'OA', 'DJD', 'osteophyte', 'joint'],
    aliases: ['osteoarthritis', 'OA', 'DJD', 'ข้อเสื่อม'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Chronic lameness · stiffness</li>
          <li>Geriatric screening</li>
          <li>Suspected OA secondary to: hip dysplasia, CCL rupture, OCD, elbow dysplasia</li>
          <li>Pre-surgical planning (TPLO, THR)</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี</li></ul>`,
      preparation: `
        <ul>
          <li>2 orthogonal views ของข้อ</li>
          <li>Compare contralateral side</li>
          <li>Sedation อาจต้องใช้สำหรับ position ข้อพิเศษ (hip extended)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">DJD Cardinal Signs — "5 ข้อต้องดู"</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">1. Osteophytes</span>
              กระดูกงอก<br>
              ที่ขอบข้อ<br>
              <em>Hallmark of OA</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">2. Subchondral sclerosis</span>
              กระดูกใต้ cartilage<br>
              ขาวขึ้น<br>
              <em>Reactive bone</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">3. Joint space narrowing</span>
              ช่องข้อแคบลง<br>
              <em>Cartilage loss</em>
            </div>
            <div class="diagram-box green">
              <span class="box-title">4. Joint effusion</span>
              ของเหลวในข้อ<br>
              Soft tissue swelling<br>
              <em>Active inflammation</em>
            </div>
            <div class="diagram-box blue">
              <span class="box-title">5. Subchondral cyst</span>
              ถุงในกระดูก<br>
              (advanced)
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"OS-CL-JN-EF-CY"</strong> — Osteophyte · Sclerosis · Narrowing · Effusion · Cyst<br>
          📌 ข้อแรกที่เห็น = <strong>Osteophytes</strong> (เริ่มต้นที่ขอบข้อ joint margins)</p>
        </div>

        <p><strong>Osteophyte Locations (joint-specific):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Osteophyte Sites by Joint</span>
          <table>
            <tr><th>Joint</th><th>Common osteophyte sites</th></tr>
            <tr><td><strong>Hip</strong></td><td>Acetabular margin · femoral head/neck (Morgan line)</td></tr>
            <tr><td><strong>Stifle (knee)</strong></td><td>Patellar pole · trochlear ridge · femoral condyles · tibial plateau</td></tr>
            <tr><td><strong>Elbow</strong></td><td>Anconeal process · medial coronoid · ulnar olecranon</td></tr>
            <tr><td><strong>Shoulder</strong></td><td>Caudal humeral head (most reliable)</td></tr>
            <tr><td><strong>Tarsus (hock)</strong></td><td>Talus · tibial cochlea · plantar aspect</td></tr>
            <tr><td><strong>Carpus</strong></td><td>Radial carpal · accessory carpal</td></tr>
          </table>
        </div>

        <p><strong>"Morgan line" — Hip Specific:</strong></p>
        <ul>
          <li>Linear osteophyte at <strong>caudal femoral neck</strong></li>
          <li>Earliest sign of hip OA</li>
          <li>Best seen on extended VD view</li>
          <li>Specific for hip dysplasia / OA</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">DJD Severity — "Mild · Moderate · Severe"</span>
          <ul>
            <li><strong>Mild</strong> 🟢 — Small osteophytes only · joint space normal · no other signs</li>
            <li><strong>Moderate</strong> 🟡 — Larger osteophytes · mild subchondral sclerosis · +/- effusion · joint space mild narrowing</li>
            <li><strong>Severe</strong> 🔴 — Marked osteophytes · sclerosis · joint space severe narrowing · +/- subchondral cysts · ankylosis possible</li>
          </ul>
          <p class="mnem-tip">📌 Severity ไม่ correlate ดีกับ clinical signs<br>
          📌 หมาที่ <strong>"clinically painful แต่ภาพปกติ"</strong> หรือ <strong>"clinically OK แต่ภาพแย่"</strong> เจอบ่อย</p>
        </div>

        <p><strong>Cat OA — Special Considerations:</strong></p>
        <ul>
          <li>Cats hide pain well → diagnosed late</li>
          <li><strong>Most common joints (cat):</strong>
            <ul>
              <li><strong>Elbow</strong> ⭐ (most common!)</li>
              <li>Hip</li>
              <li>Stifle</li>
              <li>Tarsus</li>
              <li>Shoulder</li>
            </ul>
          </li>
          <li>Owner-reported activity changes more reliable than radiograph</li>
          <li>Spinal OA + spondylosis common in older cat</li>
        </ul>

        <p><strong>Spondylosis Deformans (Spine):</strong></p>
        <ul>
          <li>Bony bridges across vertebral endplates ventrally</li>
          <li>Common in older dogs · usually incidental finding</li>
          <li>Can be painful if nerve root compression</li>
          <li>Boxer especially predisposed</li>
        </ul>

        <p><strong>Differential Diagnoses for Joint Disease:</strong></p>
        <ul>
          <li><strong>Septic arthritis</strong> — usually mono-articular · acute · severe pain · joint effusion + lytic changes possible</li>
          <li><strong>Immune-mediated polyarthritis (IMPA)</strong> — multiple joints · often non-erosive · synovial fluid analysis</li>
          <li><strong>Erosive polyarthritis</strong> (Rheumatoid-like) — bone erosion at joint margins · rare</li>
          <li><strong>Neoplastic</strong> — synovial cell sarcoma, OSA periarticular</li>
        </ul>

        <p><strong>Imaging Adjuncts:</strong></p>
        <ul>
          <li>Stress views (e.g., compression for elbow)</li>
          <li>CT for elbow / complex joints</li>
          <li>MRI for cartilage / soft tissue (gold standard)</li>
          <li>Arthrocentesis for fluid analysis</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severity grading not reliable for clinical pain</li>
          <li>Cat OA underdiagnosed</li>
          <li>Differentiate from septic / immune arthritis (cytology mandatory)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Multimodal pain management (NSAID, gabapentin, bedinvetmab/frunevetmab)</li>
          <li>Weight management · physical therapy</li>
          <li>Joint supplements (omega-3, glucosamine evidence weak)</li>
          <li>Tip: <strong>"5 cardinal signs"</strong> · Osteophyte first, others follow</li>
          <li>Tip: <strong>Morgan line = early hip OA</strong></li>
          <li>Tip: <strong>Cat elbow = #1 OA site</strong> · often missed</li>
          <li>Tip: <strong>Severity ≠ clinical pain</strong> · always combine</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-ocd',
    titleEn: 'Osteochondrosis Dissecans (OCD)',
    titleTh: 'OCD — Osteochondrosis Dissecans',
    type: 'topic',
    system: 'msk',
    species: ['dog'],
    tags: ['OCD', 'osteochondrosis', 'shoulder', 'elbow', 'stifle', 'hock'],
    aliases: ['OCD', 'osteochondrosis', 'cartilage flap'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Young large/giant breed dog with lameness (4-12 months)</li>
          <li>Joint pain · effusion</li>
          <li>Suspected developmental orthopedic disease</li>
          <li>Bilateral lameness common (look at both sides!)</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี</li></ul>`,
      preparation: `
        <ul>
          <li>2 orthogonal views ของข้อ</li>
          <li><strong>Always image bilateral</strong> — bilateral OCD common</li>
          <li>Sedation often needed for proper positioning</li>
          <li>+/- contrast arthrography if equivocal</li>
          <li>CT for elbow OCD (gold standard)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">OCD Predilection Sites — "ShEST"</span>
          <ul>
            <li><strong>Sh</strong>oulder — caudal humeral head (most common!)</li>
            <li><strong>E</strong>lbow — medial humeral condyle (or coronoid disease)</li>
            <li><strong>S</strong>tifle — lateral femoral condyle</li>
            <li><strong>T</strong>arsus (hock) — medial trochlear ridge of talus</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"ShEST"</strong> — 4 ตำแหน่งหลัก<br>
          📌 <strong>Shoulder OCD = ตัวที่พบบ่อยสุด</strong> · Caudal humeral head<br>
          📌 <strong>Bilateral 50-70%</strong> · ถ่าย 2 ข้างเสมอ!</p>
        </div>

        <p><strong>Pathophysiology (สรุปสำหรับสอน):</strong></p>
        <ul>
          <li>Endochondral ossification ผิดปกติ</li>
          <li>Cartilage retained → ไม่กลายเป็น bone</li>
          <li>Subchondral bone necrosis → cartilage flap</li>
          <li>Joint mouse (loose body) อาจเกิดขึ้น</li>
          <li>Secondary OA inevitable ถ้าไม่รักษา</li>
        </ul>

        <p><strong>Predisposing Factors:</strong></p>
        <ul>
          <li>Large/giant breed (Labrador, Golden, Rottweiler, GSD, Newfoundland, Great Dane)</li>
          <li>Male &gt; female (3-5:1)</li>
          <li>Age 4-12 months at presentation</li>
          <li>Rapid growth · over-nutrition</li>
          <li>Genetic predisposition</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">OCD by Joint — Specific Findings</span>
          <table>
            <tr>
              <th>Joint</th><th>Site</th><th>Radiograph Sign</th>
            </tr>
            <tr>
              <td><strong>Shoulder</strong> ⭐</td>
              <td>Caudal humeral head</td>
              <td>Flattened/concave subchondral surface · radiolucent defect · +/- mineralized flap</td>
            </tr>
            <tr>
              <td><strong>Elbow</strong></td>
              <td>Medial humeral condyle</td>
              <td>Subchondral defect · sclerosis · CT BEST</td>
            </tr>
            <tr>
              <td><strong>Stifle</strong></td>
              <td>Lateral femoral condyle</td>
              <td>Subchondral defect · effusion · +/- joint mouse</td>
            </tr>
            <tr>
              <td><strong>Tarsus</strong></td>
              <td>Medial trochlear ridge talus</td>
              <td>Defect · soft tissue swelling · effusion</td>
            </tr>
          </table>
        </div>

        <p><strong>Shoulder OCD — Detailed Findings:</strong></p>
        <ul>
          <li><strong>Caudal humeral head</strong> — flattening or concave defect</li>
          <li><strong>Subchondral sclerosis</strong> margin around defect</li>
          <li><strong>Mineralized flap</strong> visible เป็น opacity ใน defect (sometimes)</li>
          <li><strong>Joint mouse</strong> in joint pouch (loose mineralized body)</li>
          <li>Best view: <strong>flexed lateral</strong> shoulder (highlight caudal humeral head)</li>
        </ul>

        <p><strong>Elbow Disease — Triad:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">"Elbow Dysplasia Complex" — 3 อย่าง</span>
          <ul>
            <li><strong>1</strong>OCD (medial humeral condyle)</li>
            <li><strong>2</strong>FCP (Fragmented Coronoid Process) — most common</li>
            <li><strong>3</strong>UAP (Ununited Anconeal Process) — GSD especially</li>
          </ul>
          <p class="mnem-tip">📌 ทั้ง 3 อย่างเรียกรวมว่า "<strong>Elbow Dysplasia</strong>"<br>
          📌 ส่วนใหญ่ดูยากบน radiograph → <strong>CT gold standard</strong><br>
          📌 OFA / IEWG grading systems มี (ดูใน hip dysplasia entry)</p>
        </div>

        <p><strong>Stifle OCD:</strong></p>
        <ul>
          <li><strong>Lateral femoral condyle</strong> (medial less common)</li>
          <li>Joint effusion → cranial fat pad obliteration</li>
          <li>Subchondral defect</li>
          <li>+/- joint mouse</li>
          <li>DDx: CCL rupture, patellar luxation</li>
        </ul>

        <p><strong>Tarsus OCD:</strong></p>
        <ul>
          <li><strong>Medial trochlear ridge of talus</strong> (most common)</li>
          <li>Severe lameness disproportionate to radiograph findings</li>
          <li>CT useful</li>
          <li>Rotweiler especially predisposed</li>
        </ul>

        <p><strong>Imaging Workup:</strong></p>
        <ul>
          <li><strong>Radiograph</strong> — first-line · sometimes adequate</li>
          <li><strong>CT</strong> — gold standard for elbow + tarsus + complex cases</li>
          <li><strong>MRI</strong> — best for cartilage</li>
          <li><strong>Arthroscopy</strong> — diagnostic + therapeutic in same procedure</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Bilateral missed if only 1 side imaged</li>
          <li>Elbow OCD/coronoid often missed on radiograph (need CT)</li>
          <li>Progresses to OA without treatment</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Surgical removal of flap / coronoid (arthroscopy preferred)</li>
          <li>Conservative if minimal · controlled exercise · NSAID</li>
          <li>Long-term joint care (weight, NSAID, joint supplements)</li>
          <li>Tip: <strong>"ShEST" sites</strong> · always image bilateral!</li>
          <li>Tip: <strong>Shoulder = most common</strong> · flexed lateral view</li>
          <li>Tip: <strong>CT for elbow</strong> · radiograph misses much</li>
          <li>Tip: <strong>Young large breed + joint pain = OCD until proven</strong></li>
        </ul>
      `
    }
  },

  {
    id: 'rad-hip-dysplasia',
    titleEn: 'Hip Dysplasia &amp; Grading Systems',
    titleTh: 'Hip Dysplasia + ระบบ grading',
    type: 'topic',
    system: 'msk',
    species: ['dog'],
    tags: ['hip dysplasia', 'OFA', 'PennHIP', 'Norberg angle', 'CHD'],
    aliases: ['hip dysplasia', 'CHD', 'OFA', 'PennHIP'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Lameness in young to middle-aged large breed</li>
          <li><strong>Breeding screening</strong> (OFA, PennHIP, BVA, FCI)</li>
          <li>Pre-surgical evaluation (THR, FHO, JPS)</li>
          <li>"Bunny hopping" gait · stiffness</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — แต่ต้อง heavy sedation/GA สำหรับ proper positioning</li></ul>`,
      preparation: `
        <ul>
          <li><strong>Heavy sedation or GA</strong> — essential for accurate position</li>
          <li>Standard view: <strong>VD with hips extended (OFA position)</strong></li>
          <li>+/- distraction view (PennHIP)</li>
          <li>+/- frog-leg view (additional info)</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard OFA Positioning:</strong></p>
        <ol>
          <li>VD recumbency · symmetric</li>
          <li>Pelvis flat (V-trough)</li>
          <li><strong>Hips fully extended</strong> · femurs parallel</li>
          <li><strong>Stifles rotated internally</strong> · patellae centered over femurs</li>
          <li>Tape femurs together at stifles</li>
        </ol>

        <div class="mnemonic thai">
          <span class="mnem-title">CHD Radiographic Signs — "5 Findings"</span>
          <ul>
            <li><strong>1</strong>Subluxation — femoral head ไม่ centered ใน acetabulum</li>
            <li><strong>2</strong>Shallow acetabulum (poor coverage of femoral head)</li>
            <li><strong>3</strong>Reduced Norberg angle (&lt; 105°)</li>
            <li><strong>4</strong>Osteophytes (Morgan line at caudal femoral neck = early)</li>
            <li><strong>5</strong>Remodeling — flattened femoral head · sclerosis</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Sub-Shal-Norb-Osteo-Remod"</strong><br>
          📌 <strong>Morgan line</strong> = earliest sign at caudal femoral neck</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">Norberg Angle — ตัวเลขจำง่าย</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">≥ 105°</span>
              <span class="num-label">Normal hip</span>
            </div>
            <div class="num-card">
              <span class="num-big">100-104°</span>
              <span class="num-label">Borderline</span>
            </div>
            <div class="num-card">
              <span class="num-big">&lt; 100°</span>
              <span class="num-label">Dysplastic</span>
            </div>
            <div class="num-card">
              <span class="num-big">&lt; 90°</span>
              <span class="num-label">Severe</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>Norberg = วัดจาก center ของ femoral heads ผ่าน acetabular rim</strong><br>
          📌 <strong>"105 = ผ่าน · &lt;100 = dysplastic"</strong></p>
        </div>

        <p><strong>How to measure Norberg Angle:</strong></p>
        <ol>
          <li>วาดเส้นเชื่อม center ของ femoral heads (left + right)</li>
          <li>วาดเส้นจาก center ของแต่ละ femoral head → cranial acetabular rim ของข้างเดียวกัน</li>
          <li>วัดมุมระหว่าง 2 เส้น ที่ center ของแต่ละ femoral head</li>
          <li>ปกติ ≥ 105° · &lt; 105° = dysplastic</li>
        </ol>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Grading Systems — เปรียบเทียบ 4 ระบบ</span>
          <table>
            <tr>
              <th>System</th><th>Country</th><th>Grading</th>
            </tr>
            <tr>
              <td><strong>OFA</strong></td>
              <td>USA</td>
              <td>Excellent · Good · Fair · Borderline · Mild · Moderate · Severe</td>
            </tr>
            <tr>
              <td><strong>FCI</strong></td>
              <td>Europe</td>
              <td>A · B · C · D · E (A best, E worst)</td>
            </tr>
            <tr>
              <td><strong>BVA</strong></td>
              <td>UK</td>
              <td>0-53 score (lower = better)</td>
            </tr>
            <tr>
              <td><strong>PennHIP</strong></td>
              <td>USA</td>
              <td>DI (Distraction Index) 0-1.0 (lower = tighter = better)</td>
            </tr>
          </table>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">OFA Grading — "Pass · Borderline · Fail"</span>
          <p style="margin: 6px 0;"><strong>Pass (Breeding OK):</strong></p>
          <ul>
            <li><strong>Excellent</strong> 🏆 — perfect hip · top 1-2%</li>
            <li><strong>Good</strong> ✅ — minor changes · normal</li>
            <li><strong>Fair</strong> ⚠️ — minimal changes · still passing</li>
          </ul>
          <p style="margin: 6px 0;"><strong>Borderline:</strong></p>
          <ul>
            <li>Recommend repeat in 6 months</li>
          </ul>
          <p style="margin: 6px 0;"><strong>Fail (Don't breed):</strong></p>
          <ul>
            <li><strong>Mild</strong> 🔶 — early dysplasia</li>
            <li><strong>Moderate</strong> 🟠 — significant changes</li>
            <li><strong>Severe</strong> 🔴 — marked dysplasia + DJD</li>
          </ul>
          <p class="mnem-tip">📌 OFA Final cert = ≥ 24 เดือนเท่านั้น (preliminary &lt; 24 mo also available)<br>
          📌 ส่งภาพให้ OFA evaluate · นั่งคณะกรรมการ 3 vets</p>
        </div>

        <p><strong>PennHIP — Distraction Index (DI):</strong></p>
        <ul>
          <li>Measure <strong>laxity</strong> with distractor + neutral compression views</li>
          <li>Performed at &gt; 16 weeks (much earlier than OFA!)</li>
          <li>DI 0 = perfect tight · DI 1.0 = complete luxation</li>
          <li>DI &lt; 0.3 = tight · low risk OA</li>
          <li>DI &gt; 0.7 = loose · high risk OA</li>
          <li>More predictive than OFA for future OA</li>
        </ul>

        <p><strong>Predisposed Breeds:</strong></p>
        <ul>
          <li>Large/giant: GSD ⭐, Labrador, Golden, Rottweiler, Newfoundland, Saint Bernard, Mastiff</li>
          <li>Some smaller: Bulldog, Pug</li>
          <li>Genetic component strong</li>
        </ul>

        <p><strong>Surgical Treatment Options (when indicated):</strong></p>
        <ul>
          <li><strong>JPS (Juvenile Pubic Symphysiodesis)</strong> — &lt; 20 weeks · stops symphyseal growth → improves dorsal coverage</li>
          <li><strong>TPO (Triple Pelvic Osteotomy)</strong> — 5-10 months · re-orient acetabulum</li>
          <li><strong>FHO (Femoral Head Ostectomy)</strong> — small dog &lt; 25 kg · cheaper · functional</li>
          <li><strong>THR (Total Hip Replacement)</strong> — gold standard · large dog · expensive</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Position errors → false grading</li>
          <li>Inadequate sedation → muscle tension → invalid film</li>
          <li>Subjective grading (especially OFA Fair vs Borderline)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Conservative: weight management, exercise, NSAID, bedinvetmab</li>
          <li>Surgery if clinical signs warrant</li>
          <li>Recommend genetic counseling · OFA database</li>
          <li>Tip: <strong>"5 Findings"</strong> for CHD</li>
          <li>Tip: <strong>Norberg ≥ 105° = pass</strong> · &lt; 100° = dysplastic</li>
          <li>Tip: <strong>OFA = ≥ 24 mo</strong> · PennHIP = ≥ 16 wk</li>
          <li>Tip: <strong>PennHIP DI &gt; 0.7 = high risk OA</strong></li>
          <li>Tip: <strong>Morgan line = earliest sign</strong></li>
        </ul>
      `
    }
  },

  /* ============================================================
     Head / Spine · หัว/ฟัน/กระดูกสันหลัง (3)
     ============================================================ */

  {
    id: 'rad-nasal-disease',
    titleEn: 'Nasal &amp; Sinus Disease',
    titleTh: 'โรคจมูกและไซนัส',
    type: 'topic',
    system: 'head',
    species: ['dog', 'cat'],
    tags: ['nasal', 'sinus', 'rhinitis', 'tumor', 'aspergillus'],
    aliases: ['nasal disease', 'จมูก', 'sinusitis'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Chronic nasal discharge (uni/bilateral)</li>
          <li>Epistaxis</li>
          <li>Sneezing · stertor · facial deformity</li>
          <li>Suspected nasal tumor / fungal / FB</li>
        </ul>
      `,
      contraindications: `<ul><li>ต้อง heavy sedation/GA · proper position สำคัญ</li></ul>`,
      preparation: `
        <ul>
          <li><strong>Open mouth VD</strong> (intra-oral view) — best!</li>
          <li>Lateral skull view</li>
          <li>Rostro-caudal view (frontal sinus)</li>
          <li><strong>CT = gold standard</strong> สำหรับ nasal cavity</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Nasal Disease — "DDx by Pattern"</span>
          <ul>
            <li><strong>Lytic (กระดูกหาย)</strong> ⚠️ — Tumor (most likely!) · aspergillosis · cryptococcosis</li>
            <li><strong>Mineralized mass</strong> — Chronic tumor · ossifying granuloma</li>
            <li><strong>Increased opacity</strong> (อ้อย) — Mucus · pus · blood · soft tissue mass</li>
            <li><strong>Bilateral lytic + frontal sinus</strong> — Aspergillosis classic</li>
            <li><strong>Unilateral lytic</strong> — Tumor (especially carcinoma)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Unilateral lytic = tumor"</strong> until proven<br>
          📌 <strong>Bilateral lytic + frontal sinus = aspergillosis</strong><br>
          ⚠️ Radiograph มีจำกัด · CT ดีกว่ามาก</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Nasal DDx Quick Reference</span>
          <table>
            <tr><th>DDx</th><th>Signalment</th><th>Pattern</th></tr>
            <tr><td><strong>Tumor</strong></td><td>Older dog &gt; cat · dolichocephalic</td><td>Unilateral lytic + soft tissue mass</td></tr>
            <tr><td><strong>Aspergillosis</strong></td><td>Young-mid adult dog · dolichocephalic</td><td>Bilateral turbinate destruction · frontal sinus</td></tr>
            <tr><td><strong>Cryptococcosis</strong></td><td>Cat (Australia, Pacific)</td><td>Mass lesion · facial deformity</td></tr>
            <tr><td><strong>Lymphoplasmacytic rhinitis</strong></td><td>Any dog</td><td>Increased opacity · subtle turbinate loss</td></tr>
            <tr><td><strong>Foreign body</strong></td><td>Hunting dog · grass awn</td><td>Localized opacity · sneezing</td></tr>
            <tr><td><strong>Tooth root abscess</strong></td><td>Older dog</td><td>Localized lysis at maxillary tooth root</td></tr>
            <tr><td><strong>Nasopharyngeal polyp</strong></td><td>Young cat</td><td>Mass at nasopharynx + bulla</td></tr>
          </table>
        </div>

        <p><strong>Tumor Types:</strong></p>
        <ul>
          <li><strong>Adenocarcinoma</strong> — most common (dog)</li>
          <li><strong>Chondrosarcoma</strong></li>
          <li><strong>Squamous cell carcinoma</strong></li>
          <li><strong>Lymphoma</strong> (cat especially)</li>
          <li><strong>Osteosarcoma</strong> rare</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Tooth Root Abscess — Carnassial Tooth</span>
          <ul>
            <li><strong>Maxillary 4th premolar (carnassial)</strong> — most common!</li>
            <li>Causes <strong>"oronasal fistula"</strong></li>
            <li>Discharge below eye / from nose</li>
            <li>Lysis at root tip on dental view</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Carnassial = หมาที่ฟันใหญ่ที่สุด upper</strong> · ติดเชื้อบ่อย · เคยถูกตีว่า "tumor"<br>
          📌 ตรวจฟันก่อนคิด tumor!</p>
        </div>

        <p><strong>Frontal Sinus:</strong></p>
        <ul>
          <li>Normal: gas-filled, symmetric</li>
          <li>Fluid: cellulitis, abscess, hemorrhage, mucus</li>
          <li>Mineralization: chronic disease, cryptococcosis, tumor</li>
          <li>Bony lysis: aspergillosis, tumor</li>
          <li>Best view: rostro-caudal (frontal sinus highlight)</li>
        </ul>

        <p><strong>Nasopharyngeal Polyp (Cat):</strong></p>
        <ul>
          <li>Young cat (often &lt; 2 yr)</li>
          <li>Stertor, dyspnea, +/- ear discharge</li>
          <li>Lateral skull/pharynx: soft tissue mass at nasopharynx</li>
          <li>Often + bulla osteitis (middle ear)</li>
          <li>Treat: traction-avulsion or bulla osteotomy</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Radiograph alone often insufficient · CT needed</li>
          <li>Sedation issues in dyspneic patient</li>
          <li>Position errors → asymmetry mimics disease</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>CT for definitive evaluation</li>
          <li>Rhinoscopy + biopsy (mass) or culture (fungal)</li>
          <li>Tip: <strong>"Unilateral lytic = tumor"</strong></li>
          <li>Tip: <strong>"Bilateral lytic + sinus = aspergillosis"</strong></li>
          <li>Tip: <strong>Check carnassial tooth</strong> for abscess before tumor!</li>
          <li>Tip: <strong>CT &gt; radiograph</strong> for nasal cavity</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-dental',
    titleEn: 'Dental Radiography',
    titleTh: 'รังสีฟัน (Dental)',
    type: 'topic',
    system: 'head',
    species: ['dog', 'cat'],
    tags: ['dental', 'tooth', 'periodontal', 'FORL', 'parallel', 'bisecting'],
    aliases: ['dental rad', 'รังสีฟัน', 'tooth X-ray'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Pre-extraction evaluation (every COHAT!)</li>
          <li>Periodontal disease assessment</li>
          <li>Suspected tooth resorption (cat especially!)</li>
          <li>Tooth root abscess workup</li>
          <li>Fractured tooth · pulp exposure</li>
          <li>Oral mass evaluation</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — ต้อง GA</li></ul>`,
      preparation: `
        <ul>
          <li>Dental X-ray unit + sensors (digital) or films</li>
          <li>Patient under GA · ETT cuffed</li>
          <li>Mouth gag (use carefully — not too wide!)</li>
          <li>Position aids · tape</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Dental Imaging Techniques — 2 หลักการ</span>
          <ul>
            <li><strong>Parallel technique</strong> — film // tooth · used for mandibular premolars/molars</li>
            <li><strong>Bisecting angle technique</strong> — most teeth · sensor cannot be parallel · angle = bisector of (tooth angle + sensor angle)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Bisecting = "ครึ่งทาง"</strong> · มุม X-ray = ครึ่งของมุมรวม<br>
          📌 ผิด → ภาพ <strong>elongated</strong> (มุมต่ำเกิน) หรือ <strong>foreshortened</strong> (มุมสูงเกิน)</p>
        </div>

        <p><strong>Standard Views — "Full Mouth Series":</strong></p>
        <ul>
          <li><strong>Maxillary incisors + canines</strong> — bisecting</li>
          <li><strong>Maxillary premolars + molars</strong> — bisecting (separate L+R)</li>
          <li><strong>Mandibular incisors + canines</strong> — bisecting</li>
          <li><strong>Mandibular premolars + molars</strong> — parallel (best technique here)</li>
          <li>Total: ~6-10 films for full mouth (cat) · 14-16 (dog)</li>
        </ul>

        <p><strong>Tooth Anatomy on Radiograph:</strong></p>
        <ul>
          <li><strong>Crown</strong> — เหนือ gingiva</li>
          <li><strong>Cementoenamel junction (CEJ)</strong> — ที่ gum line</li>
          <li><strong>Root</strong> — embedded in alveolar bone</li>
          <li><strong>Pulp cavity</strong> — central radiolucent</li>
          <li><strong>Periodontal ligament space</strong> — thin radiolucent line around root</li>
          <li><strong>Lamina dura</strong> — radiopaque line of bone next to PDL</li>
          <li><strong>Alveolar crest</strong> — bone level at gingival line</li>
        </ul>

        <div class="mnemonic diagram">
          <span class="mnem-title">Periodontal Disease Stages (PD)</span>
          <div class="diagram-grid">
            <div class="diagram-box green">
              <span class="box-title">PD0-1</span>
              Normal / mild gingivitis<br>
              <em>No bone loss</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">PD2</span>
              &lt; 25% bone loss<br>
              Slight crest blunting<br>
              <em>Early periodontitis</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">PD3</span>
              25-50% bone loss<br>
              Moderate<br>
              <em>+/- mobility</em>
            </div>
            <div class="diagram-box red">
              <span class="box-title">PD4</span>
              &gt; 50% bone loss<br>
              Severe<br>
              <em>Extraction usually</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>PD0-1 prophy OK</strong> · <strong>PD3-4 → consider extraction</strong><br>
          📌 Radiograph essential for grading · clinical exam alone underestimates</p>
        </div>

        <p><strong>FORL (Feline Odontoclastic Resorptive Lesions):</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">FORL — แมวเป็นบ่อย!</span>
          <ul>
            <li><strong>Cat &gt; 30%</strong> มี at least 1 lesion</li>
            <li>Tooth resorption — root → crown</li>
            <li>Radiograph essential (ส่วนใหญ่ subgingival)</li>
            <li><strong>Type 1:</strong> root structure intact, gingival defect (treat: extraction)</li>
            <li><strong>Type 2:</strong> root replaced by bone (treat: <strong>crown amputation</strong> if subgingival, no painful root remnant)</li>
            <li><strong>Type 3:</strong> mixed</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"FORL ไม่เห็นจาก visual exam"</strong> · ต้อง <strong>dental radiograph</strong> เสมอ<br>
          ⚠️ Type 2 → crown amputation OK · ไม่ต้องดึงรากที่หายไป</p>
        </div>

        <p><strong>Tooth Root Abscess Signs:</strong></p>
        <ul>
          <li>Periapical lucency (radiolucent area at root tip)</li>
          <li>Loss of lamina dura</li>
          <li>Widened PDL space</li>
          <li>+/- bone destruction extending</li>
          <li>+/- oronasal fistula (maxillary 4th PM classic)</li>
        </ul>

        <p><strong>Other Common Findings:</strong></p>
        <ul>
          <li><strong>Retained deciduous teeth</strong> — common in small breed</li>
          <li><strong>Missing teeth</strong> — agenesis vs unerupted (tipping/cyst possible)</li>
          <li><strong>Dentigerous cyst</strong> — fluid around unerupted tooth</li>
          <li><strong>Fractured tooth</strong> — pulp exposure → endo or extraction</li>
          <li><strong>Persistent deciduous canines</strong> — yorkie, small breed</li>
        </ul>

        <p><strong>Cat-Specific Considerations:</strong></p>
        <ul>
          <li>FORL in &gt; 30% cats</li>
          <li><strong>Stomatitis (gingivostomatitis)</strong> — diffuse mucosal inflammation · Calicivirus association · radiograph normal usually</li>
          <li>Different tooth count: 30 deciduous, 30 permanent</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Bisecting angle errors → distortion</li>
          <li>Missed FORL without radiograph</li>
          <li>Mouth gag too wide → cat blindness (maxillary artery occlusion)</li>
          <li>Radiation dose to staff</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document findings + tooth-by-tooth in chart (Triadan numbering)</li>
          <li>Plan extractions based on radiograph</li>
          <li>Recheck post-extraction radiograph (confirm complete root removal)</li>
          <li>Tip: <strong>"FORL = always radiograph"</strong> · cat ≥ 30% have it</li>
          <li>Tip: <strong>Bisecting angle for upper · Parallel for lower mandibular PM/M</strong></li>
          <li>Tip: <strong>PD3-4 → extraction</strong> often</li>
          <li>Tip: <strong>Cat mouth gag — narrow only!</strong></li>
        </ul>
      `
    }
  },

  {
    id: 'rad-ivdd-spine',
    titleEn: 'IVDD &amp; Spinal Disease',
    titleTh: 'IVDD และโรคของกระดูกสันหลัง',
    type: 'topic',
    system: 'spine',
    species: ['dog', 'cat'],
    tags: ['IVDD', 'disc', 'spine', 'spondylosis', 'discospondylitis'],
    aliases: ['IVDD', 'หมอนรองกระดูก', 'spine disease'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Acute paresis / paraplegia</li>
          <li>Spinal pain · neck pain</li>
          <li>Wobbler suspicion (Doberman, Great Dane)</li>
          <li>Trauma (HBC) · spinal screening</li>
          <li>Suspected discospondylitis (fever, spinal pain, vertebral)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Acute spinal injury — handle minimally · cross-table lateral</li>
          <li>Survey radiograph มีจำกัดสำหรับ IVDD · MRI/CT gold standard</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Lateral + VD spinal series</li>
          <li>Sedation for proper position</li>
          <li>Cervical · thoracolumbar · lumbosacral views</li>
          <li>+/- myelogram (rare now · MRI replaced)</li>
          <li><strong>MRI = gold standard</strong> · CT good for bone</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">IVDD Hansen Types — "Type 1 vs Type 2"</span>
          <ul>
            <li><strong>Type I (chondrodystrophic):</strong>
              <ul>
                <li>Acute extrusion (nucleus pulposus → spinal canal)</li>
                <li><strong>Dachshund · Beagle · Cocker · Pekingese</strong></li>
                <li>2-7 yr · acute onset</li>
                <li>Most common in T11-L3 + cervical</li>
              </ul>
            </li>
            <li><strong>Type II (non-chondrodystrophic):</strong>
              <ul>
                <li>Chronic protrusion (annulus bulge)</li>
                <li><strong>Large breed</strong> · Lab, GSD</li>
                <li>Older · gradual onset</li>
                <li>Lumbosacral common</li>
              </ul>
            </li>
            <li><strong>Type III (high-velocity, low-volume):</strong>
              <ul>
                <li>Acute non-compressive disc · contusion</li>
                <li>Athletic dog · sudden movement</li>
              </ul>
            </li>
          </ul>
          <p class="mnem-tip">📌 <strong>Dachshund = Type I T-L</strong> · classic<br>
          📌 <strong>Lab/GSD = Type II</strong> · lumbosacral common</p>
        </div>

        <p><strong>Survey Radiographic Signs of IVDD (LIMITED!):</strong></p>
        <ul>
          <li><strong>Narrowed disc space</strong> at affected level (compare adjacent)</li>
          <li><strong>Wedge-shaped disc space</strong> (anteriorly narrow)</li>
          <li><strong>Mineralized/calcified disc material</strong> within IVD</li>
          <li><strong>Mineralized disc material in canal</strong> (rarely visible)</li>
          <li><strong>Small intervertebral foramen</strong></li>
          <li>"Cloudy" appearance of disc space</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">⚠️ Survey Radiograph มีจำกัด!</span>
          <p class="mnem-tip">📌 <strong>Survey radiograph = ~50% sensitive</strong> สำหรับ IVDD<br>
          📌 Normal radiograph ≠ no IVDD<br>
          📌 <strong>MRI &gt; myelogram &gt; CT</strong> สำหรับ definitive Dx<br>
          📌 ใช้ survey เพื่อ rule out: discospondylitis · neoplasia · fracture · congenital · spondylosis</p>
        </div>

        <p><strong>Modified Frankel Grading (Clinical, not radiograph):</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">IVDD Clinical Grading — 5 Grades</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Pain only</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Ambulatory paresis</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Non-ambulatory paresis</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">Plegia + pain ✓</span>
            </div>
            <div class="num-card">
              <span class="num-big">5</span>
              <span class="num-label">Plegia + NO deep pain ⚠️</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>Grade 5 (no deep pain) = surgical emergency</strong><br>
          📌 &lt; 24 hr surgery → 50-60% recovery · &gt; 24 hr → much worse<br>
          📌 Deep pain present (grade 1-4) = better prognosis</p>
        </div>

        <p><strong>Discospondylitis:</strong></p>
        <ul>
          <li>Bacterial / fungal infection of disc + adjacent endplates</li>
          <li>Causes: Staph, Strep, Brucella, Aspergillus</li>
          <li>Signs:
            <ul>
              <li><strong>Endplate lysis</strong> (both sides of disc)</li>
              <li>Disc space widening initially → narrowing</li>
              <li>Adjacent vertebral sclerosis</li>
              <li>+/- spondylosis</li>
              <li>Most common: L7-S1 · mid-thoracic</li>
            </ul>
          </li>
          <li>Workup: blood culture · urine culture · brucella titer · biopsy</li>
        </ul>

        <p><strong>Spondylosis Deformans:</strong></p>
        <ul>
          <li>Bony bridges between adjacent vertebrae · ventral aspect</li>
          <li>Common in older dogs · usually incidental</li>
          <li>Boxer especially predisposed</li>
          <li>Distinguish from discospondylitis (no endplate lysis)</li>
        </ul>

        <p><strong>Cervical Spondylomyelopathy (Wobbler):</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Wobbler — "Doberman vs Great Dane"</span>
          <ul>
            <li><strong>Disc-associated (Doberman type):</strong>
              <ul>
                <li>Middle-aged Doberman</li>
                <li>Disc protrusion C5-C7</li>
                <li>Type II IVDD pattern</li>
              </ul>
            </li>
            <li><strong>Vertebral malformation (Great Dane type):</strong>
              <ul>
                <li>Young Great Dane, Mastiff</li>
                <li>Vertebral canal stenosis · facet hypertrophy</li>
                <li>C2-C5 typically</li>
              </ul>
            </li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Doberman = old + disc · Great Dane = young + bone"</strong><br>
          📌 Clinical: ataxia, "two-engine gait" · cervical pain</p>
        </div>

        <p><strong>Lumbosacral Disease:</strong></p>
        <ul>
          <li>L7-S1 most common location for older large dogs</li>
          <li>"Cauda equina syndrome" — pain, lameness, urinary/fecal incontinence</li>
          <li>Type II IVDD most common cause</li>
          <li>Stenosis from spondylosis, facet hypertrophy</li>
          <li>Survey: narrowed L7-S1 disc space, +/- spondylosis</li>
          <li>MRI for definitive Dx</li>
        </ul>

        <p><strong>Vertebral Fracture / Luxation:</strong></p>
        <ul>
          <li>Trauma history</li>
          <li>"Three-compartment" model — assess stability</li>
          <li>Cross-table lateral if suspected (don't reposition!)</li>
          <li>CT best for bony detail</li>
          <li>Stabilize spine immediately if suspect</li>
        </ul>

        <p><strong>Vertebral Neoplasia:</strong></p>
        <ul>
          <li>Lytic + proliferative bone changes</li>
          <li>Soft tissue mass +/- pathologic fracture</li>
          <li>DDx: OSA, lymphoma, plasma cell tumor, met (prostate)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Survey radiograph misses ~50% of IVDD</li>
          <li>Spinal injury made worse by improper handling</li>
          <li>Position errors mimic disc narrowing</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>MRI for definitive Dx (gold standard)</li>
          <li>Conservative: cage rest · NSAID · gabapentin · steroids (controversial)</li>
          <li>Surgical: hemilaminectomy / ventral slot · grade 4-5 typically</li>
          <li>Tip: <strong>"Type 1 = Dachshund · Type 2 = Lab"</strong></li>
          <li>Tip: <strong>Grade 5 + no deep pain = emergency</strong></li>
          <li>Tip: <strong>Survey radiograph limited</strong> · MRI gold standard</li>
          <li>Tip: <strong>Discospondylitis = endplate lysis · spondylosis = no lysis</strong></li>
        </ul>
      `
    }
  },


  /* ============================================================
     Ultrasound · พื้นฐาน Ultrasound (3)
     ============================================================ */

  {
    id: 'rad-us-principles',
    titleEn: 'Ultrasound Image Principles',
    titleTh: 'หลักการสร้างภาพ Ultrasound',
    type: 'topic',
    system: 'ultrasound',
    species: ['dog', 'cat'],
    tags: ['ultrasound', 'echogenicity', 'transducer', 'frequency', 'artifact'],
    aliases: ['ultrasound principles', 'หลัก US'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>เข้าใจหลักการก่อน scan</li>
          <li>เลือก transducer + setting ให้เหมาะ</li>
          <li>Recognize artifacts</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — เป็นความรู้พื้นฐาน</li></ul>`,
      preparation: `
        <ul>
          <li>US machine + transducers</li>
          <li>Coupling gel</li>
          <li>Clipper · alcohol</li>
          <li>Patient sedation อาจต้องใช้</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Echogenicity Scale — "ดำ → ขาว"</span>
          <ul>
            <li><strong>Anechoic</strong> ⚫ — ดำสนิท · <em>fluid (urine, bile, cyst content)</em></li>
            <li><strong>Hypoechoic</strong> 🌑 — มืด · <em>liver, spleen normal</em></li>
            <li><strong>Isoechoic</strong> 🟫 — เท่ากัน · <em>compare to reference organ</em></li>
            <li><strong>Hyperechoic</strong> 🌕 — สว่าง · <em>fat, fibrosis, mineral</em></li>
            <li><strong>Echogenic shadowing</strong> ⚪ — ขาวมี shadow · <em>bone, gas, calculi</em></li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Fluid = anechoic"</strong> (ดำสนิท · easy)<br>
          📌 <strong>Bone/Gas/Stone = ขาวมี shadow</strong> · ทะลุไม่ได้<br>
          📌 ใช้ <strong>"compare to organ adjacent"</strong> ในการบรรยาย</p>
        </div>

        <p><strong>Transducer Types &amp; Frequencies:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Transducer Selection</span>
          <table>
            <tr><th>Type</th><th>Frequency</th><th>Use</th></tr>
            <tr><td><strong>Linear</strong></td><td>7.5-15 MHz</td><td>Superficial · neck, vascular, bladder · cat abdomen</td></tr>
            <tr><td><strong>Curvilinear</strong></td><td>3.5-7 MHz</td><td>Abdominal · liver, kidney · medium-large</td></tr>
            <tr><td><strong>Phased array</strong></td><td>2-5 MHz</td><td>Cardiac (intercostal) · deep liver</td></tr>
            <tr><td><strong>Microconvex</strong></td><td>5-8 MHz</td><td>Small dog · cat · neonate</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"High freq = high resolution, shallow"</strong> · <strong>"Low freq = deep but lower res"</strong><br>
          📌 ค่าทั่วไป: cat/small dog 7-10 MHz · medium dog 5-7 MHz · large dog 3-5 MHz</p>
        </div>

        <p><strong>Image Optimization Settings:</strong></p>
        <ul>
          <li><strong>Depth</strong> — ปรับให้ organ ที่สนใจอยู่กลางหรือ ⅔ ของ screen</li>
          <li><strong>Gain</strong> — overall brightness · ปรับให้ภาพไม่ดำเกินไม่สว่างเกิน</li>
          <li><strong>TGC (Time Gain Compensation)</strong> — ปรับ brightness ตาม depth</li>
          <li><strong>Focus</strong> — วาง focal zone ที่ region of interest</li>
          <li><strong>Frequency</strong> — สูง = resolution ดี (shallow) · ต่ำ = ลึกได้</li>
          <li><strong>Frame rate</strong> — สูง = motion smooth (cardiac)</li>
        </ul>

        <p><strong>Common Artifacts:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">5 Artifacts ที่ต้องรู้</span>
          <ul>
            <li><strong>1</strong>Acoustic shadowing — ดำหลังของแข็ง (bone, stone, gas)</li>
            <li><strong>2</strong>Acoustic enhancement — สว่างหลังของเหลว · "through-transmission"</li>
            <li><strong>3</strong>Reverberation — เส้นซ้ำ ๆ จาก gas/metal</li>
            <li><strong>4</strong>Comet tail — ลายเส้นยาวจาก gas microbubbles</li>
            <li><strong>5</strong>Mirror image — duplicate image ข้าม diaphragm</li>
          </ul>
          <p class="mnem-tip">📌 Artifacts ใช้เป็น <strong>diagnostic clues</strong>!<br>
          📌 <strong>Comet tail = gas</strong> · เห็นใน intestinal gas, post-FNA<br>
          📌 <strong>Acoustic enhancement = fluid</strong> · ใต้ bladder, cyst</p>
        </div>

        <p><strong>Doppler Modes:</strong></p>
        <ul>
          <li><strong>Color Doppler</strong> — flow direction · red toward / blue away</li>
          <li><strong>Pulsed-wave Doppler</strong> — velocity in specific area</li>
          <li><strong>Power Doppler</strong> — sensitivity to flow (no direction)</li>
          <li>Used: vessel patency, blood flow, organ vascularity</li>
        </ul>

        <p><strong>Probe Movements (Standard 4):</strong></p>
        <ol>
          <li><strong>Slide</strong> — translation along skin</li>
          <li><strong>Rotate</strong> — turn 90° (long axis ↔ short axis)</li>
          <li><strong>Rock</strong> — tilt within plane</li>
          <li><strong>Fan</strong> — sweep through structure</li>
        </ol>

        <p><strong>Standard Imaging Planes:</strong></p>
        <ul>
          <li><strong>Sagittal/Long axis</strong> — longitudinal view</li>
          <li><strong>Transverse/Short axis</strong> — cross-section</li>
          <li>Always image in 2 orthogonal planes for confirmation</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Wrong transducer → poor image quality</li>
          <li>Insufficient gel → air gaps</li>
          <li>Misinterpret artifacts as pathology</li>
          <li>Operator-dependent — practice essential</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document images in 2 planes</li>
          <li>Save representative cine clips</li>
          <li>Label echogenicity as comparison</li>
          <li>Tip: <strong>"High freq = shallow + sharp"</strong></li>
          <li>Tip: <strong>Comet tail = gas</strong> · acoustic enhancement = fluid</li>
          <li>Tip: <strong>Always 2 planes</strong> for any structure</li>
          <li>Tip: <strong>Practice = the only way</strong> · operator-dependent</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-pocus',
    titleEn: 'POCUS — AFAST &amp; TFAST',
    titleTh: 'POCUS — AFAST + TFAST',
    type: 'topic',
    system: 'ultrasound',
    species: ['dog', 'cat'],
    tags: ['POCUS', 'AFAST', 'TFAST', 'Vet BLUE', 'emergency'],
    aliases: ['POCUS', 'AFAST', 'TFAST', 'FAST scan'],
    source: 'Thrall, 8th Ed. + Boysen 2019',
    sections: {
      indications: `
        <ul>
          <li>Emergency assessment ใน trauma · shock · dyspneic</li>
          <li>Triage tool — bedside · fast · non-invasive</li>
          <li>Suspected hemoabdomen · hemothorax · pneumothorax</li>
          <li>Pre-anesthetic in critical patient</li>
          <li>Serial monitoring</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — รวดเร็ว · safe</li></ul>`,
      preparation: `
        <ul>
          <li>US machine · curvilinear or microconvex transducer</li>
          <li>Alcohol (gel ไม่จำเป็นถ้า fast)</li>
          <li>No clipping needed สำหรับ FAST</li>
          <li>Right lateral or sternal recumbency</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">AFAST 4 Windows — "DH · SR · CC · HR"</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">DH</span>
              Diaphragmatic-Hepatic<br>
              📍 Sub-xiphoid<br>
              <em>Liver + GB · pericardial fluid</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">SR</span>
              Spleno-Renal<br>
              📍 Left flank<br>
              <em>Spleen + left kidney</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">CC</span>
              Cysto-Colic<br>
              📍 Caudal midline<br>
              <em>Bladder · pelvic fluid</em>
            </div>
            <div class="diagram-box green">
              <span class="box-title">HR</span>
              Hepato-Renal<br>
              📍 Right flank<br>
              <em>Right kidney + liver</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"DH-SR-CC-HR"</strong> วน 4 จุด หา free fluid<br>
          📌 <strong>Sensitivity 2-5 mL</strong> (radiograph ต้อง 5-10 mL/kg!)<br>
          📌 <strong>Score 0-4</strong> (จำนวน positive windows)</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">AFAST Scoring &amp; Action</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">0</span>
              <span class="num-label">No fluid · monitor</span>
            </div>
            <div class="num-card">
              <span class="num-big">1-2</span>
              <span class="num-label">Mild fluid · monitor q4-6h</span>
            </div>
            <div class="num-card">
              <span class="num-big">3-4</span>
              <span class="num-label">Significant · abdo-centesis · workup</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>Score &gt; 0</strong> → consider abdominocentesis<br>
          📌 <strong>Serial scoring</strong> = monitor progression (e.g., HSA bleed)</p>
        </div>

        <p><strong>TFAST — 5 sites:</strong></p>

        <div class="mnemonic diagram">
          <span class="mnem-title">TFAST 5 Sites</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">CTS bilateral</span>
              Chest Tube Site (dorsal)<br>
              📍 ICS 7-9 dorsal<br>
              <em>Pneumothorax check</em><br>
              Look for "lung sliding"
            </div>
            <div class="diagram-box orange">
              <span class="box-title">PCS bilateral</span>
              Pericardial Site<br>
              📍 ICS 5-7 caudal to elbow<br>
              <em>Pleural / pericardial effusion</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">DH</span>
              Sub-xiphoid view<br>
              📍 Same as AFAST<br>
              <em>Pericardial effusion better view</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"Lung sliding present = no pneumothorax at that point"</strong><br>
          📌 Absent sliding + lung point = pneumothorax confirmed<br>
          📌 <strong>Pericardial effusion</strong>: anechoic ring around heart</p>
        </div>

        <p><strong>Vet BLUE — Lung Scan (8 sites bilateral):</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">B-Lines = Wet Lung</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">0-1</span>
              <span class="num-label">ปกติ ✓</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 3</span>
              <span class="num-label">Wet lung 💧</span>
            </div>
            <div class="num-card">
              <span class="num-big">Diffuse</span>
              <span class="num-label">CHF / ARDS</span>
            </div>
            <div class="num-card">
              <span class="num-big">Focal</span>
              <span class="num-label">Pneumonia · contusion</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>B-lines = vertical "comet tails"</strong> ลากจากผิวปอดลงล่าง<br>
          📌 ≥3 / field → CHF · pneumonia · ARDS · contusion<br>
          📌 <strong>Cat CHF: B-lines + LA enlargement = &gt; 90% sensitivity</strong></p>
        </div>

        <p><strong>Lung Sliding (Pneumothorax assessment):</strong></p>
        <ul>
          <li>Normal: visceral pleura slides over parietal pleura with respiration</li>
          <li>"Ants on a log" appearance (sliding) = NO pneumothorax</li>
          <li>Absent sliding = possible pneumothorax (or pleural adhesion)</li>
          <li><strong>"Lung point"</strong> = transition between sliding + no sliding · pathognomonic for pneumothorax</li>
        </ul>

        <p><strong>POCUS Cardiac (Limited Echo):</strong></p>
        <ul>
          <li>Right parasternal long axis — chamber sizes</li>
          <li><strong>"Mushroom view"</strong> (right parasternal short axis) — LV function</li>
          <li>Left atrium-aorta ratio (LA:Ao) — &gt; 1.5 = LA enlargement</li>
          <li>Pericardial effusion — anechoic around heart</li>
          <li>RA collapse = tamponade</li>
        </ul>

        <p><strong>POCUS Workflow Integration:</strong></p>

        <div class="mnemonic flowchart">
          <span class="mnem-title">Trauma POCUS Algorithm</span>
          <div class="flow-step start"><span class="flow-label">1</span><strong>Trauma arrival</strong> · ABCDE assessment</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step action"><span class="flow-label">2</span><strong>AFAST</strong> · 4 windows abdominal</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step action"><span class="flow-label">3</span><strong>TFAST</strong> · 5 thoracic sites</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step action"><span class="flow-label">4</span><strong>Vet BLUE</strong> · 8 lung points</div>
          <div class="flow-arrow">▼</div>
          <div class="flow-step success"><span class="flow-label">5</span><strong>Decision:</strong> stable monitor · centesis · surgery · refer</div>
          <p class="mnem-tip">⏱️ Total time: ~5-10 min · faster than waiting for radiograph<br>
          📊 Repeat q1-4 hr to monitor progression</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Operator-dependent — needs training</li>
          <li>False negative if scan rushed</li>
          <li>Body wall edema can mimic free fluid</li>
          <li>Gas-filled bowel obscures signal</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document score + interpretation</li>
          <li>Repeat for monitoring</li>
          <li>Combine with clinical signs · don't rely solely on POCUS</li>
          <li>Tip: <strong>"DH-SR-CC-HR"</strong> for AFAST · "lung sliding" for TFAST</li>
          <li>Tip: <strong>POCUS ≥ Radiograph</strong> for fluid + dyspneic patient</li>
          <li>Tip: <strong>Cat CHF: B-lines + LA enlargement</strong> = quick Dx</li>
          <li>Tip: <strong>Course recommended</strong> — VetBLUE (Boysen), AFAST (Lisciandro)</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-organ-us',
    titleEn: 'Organ-by-Organ US Examination',
    titleTh: 'การตรวจ US แบบแยกอวัยวะ',
    type: 'topic',
    system: 'ultrasound',
    species: ['dog', 'cat'],
    tags: ['liver', 'kidney', 'spleen', 'bladder', 'GI', 'organ', 'ultrasound'],
    aliases: ['abdominal ultrasound', 'organ US', 'US ตรวจอวัยวะ'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>Detailed evaluation specific organ</li>
          <li>Mass characterization</li>
          <li>Structural disease workup</li>
          <li>FNA / biopsy guidance</li>
        </ul>
      `,
      contraindications: `<ul><li>ไม่มี — แต่ต้องการ patient cooperation</li></ul>`,
      preparation: `
        <ul>
          <li>Clip + clean abdomen</li>
          <li>Sedation if uncooperative</li>
          <li>Empty bowel (เคย fast 12 hr ดี)</li>
          <li>Filled bladder for caudal scan</li>
        </ul>
      `,
      steps: `
        <p><strong>Systematic Approach Order:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">US Scan Order — "ตับ-ม้าม-ไต-ทางเดิน-อื่น ๆ"</span>
          <ul>
            <li><strong>1</strong>Liver + gallbladder</li>
            <li><strong>2</strong>Spleen</li>
            <li><strong>3</strong>Stomach (left → right)</li>
            <li><strong>4</strong>Kidneys (left → right)</li>
            <li><strong>5</strong>Adrenals</li>
            <li><strong>6</strong>Small intestine + large intestine</li>
            <li><strong>7</strong>Bladder + prostate/uterus</li>
            <li><strong>8</strong>Lymph nodes (mesenteric, sublumbar)</li>
            <li><strong>9</strong>Vessels (aorta, caudal vena cava)</li>
          </ul>
          <p class="mnem-tip">📌 ลำดับใด ๆ OK · แต่ <strong>consistent</strong> เพื่อไม่ลืม<br>
          📌 บันทึก image ของแต่ละ organ ใน 2 planes</p>
        </div>

        <p><strong>1. Liver:</strong></p>
        <ul>
          <li><strong>Echotexture:</strong> coarse · medium echogenicity</li>
          <li><strong>Compare echogenicity</strong>: liver &lt; spleen &lt; renal cortex (normal pattern)</li>
          <li>"Liver-fat-spleen" — falciform fat brighter than liver, spleen brightest</li>
          <li><strong>Vessels:</strong>
            <ul>
              <li>Hepatic veins — anechoic, no wall</li>
              <li>Portal veins — anechoic, hyperechoic wall</li>
            </ul>
          </li>
          <li><strong>GB:</strong> anechoic, thin wall &lt; 3 mm</li>
          <li><strong>Common findings:</strong>
            <ul>
              <li>Diffuse hyperechoic — lipidosis (cat), Cushings, fibrosis</li>
              <li>Diffuse hypoechoic — lymphoma, congestion</li>
              <li>Mixed — chronic hepatitis, neoplasia</li>
              <li>Focal mass — HCC, met, abscess, cyst</li>
              <li>Mucocele — "kiwi fruit" / "stellate" GB pattern</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">GB Mucocele — "ผลกีวี"</span>
          <p class="mnem-tip">📌 <strong>"Kiwi fruit appearance"</strong> = stellate striations within GB<br>
          📌 Older small breed dog (Sheltie, Cocker)<br>
          📌 Surgical emergency if rupture / wall edema<br>
          📌 Hyperadrenocorticism, hypothyroidism predispose</p>
        </div>

        <p><strong>2. Spleen:</strong></p>
        <ul>
          <li><strong>Echotexture:</strong> homogeneous · finer than liver</li>
          <li><strong>Echogenicity:</strong> brightest of abdomen (normal)</li>
          <li><strong>Vessels:</strong> splenic vein at hilus</li>
          <li><strong>Common findings:</strong>
            <ul>
              <li>Diffuse mild enlargement — drug effect (ACP, dexmed), reactive</li>
              <li>Diffuse hypoechoic + nodular — lymphoma, MCT, EMH</li>
              <li>Focal hypoechoic — hematoma, infarct, hemangioma</li>
              <li>Cavitary mass — HSA classic</li>
              <li>Splenic torsion — stripe-like vessels, no flow</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Kidneys:</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Kidney Size Normal</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">2.5-3.5×</span>
              <span class="num-label">L2 length (dog)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2.4-3.0×</span>
              <span class="num-label">L2 length (cat)</span>
            </div>
            <div class="num-card">
              <span class="num-big">3-4 cm</span>
              <span class="num-label">Cat kidney length</span>
            </div>
            <div class="num-card">
              <span class="num-big">4-9 cm</span>
              <span class="num-label">Dog kidney length (varies)</span>
            </div>
          </div>
        </div>

        <ul>
          <li><strong>Architecture:</strong> cortex (echogenic) · medulla (hypoechoic) · pelvis (anechoic)</li>
          <li><strong>"Cortico-medullary distinction"</strong> — clear differentiation in normal</li>
          <li><strong>Common findings:</strong>
            <ul>
              <li>Hyperechoic cortex — chronic CKD · ethylene glycol toxicity</li>
              <li>"Medullary rim sign" — hyperechoic line at corticomedullary junction (cat normal variant or pathology)</li>
              <li>Pyelectasia — dilated renal pelvis</li>
              <li>Mass — RCC (uncommon), lymphoma (cat bilateral)</li>
              <li>Cyst — anechoic, well-defined (PKD in Persian cat)</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Adrenals:</strong></p>
        <ul>
          <li>Cranial to kidneys, between cranial pole + caudal vena cava</li>
          <li><strong>Normal size:</strong> &lt; 7.4 mm (caudal pole, dog) · &lt; 4.4 mm (cat)</li>
          <li><strong>Asymmetric:</strong> tumor possible</li>
          <li><strong>"Peanut" or "Bilobed" shape</strong> normal</li>
          <li><strong>Findings:</strong>
            <ul>
              <li>Bilateral enlargement → Cushings (PDH)</li>
              <li>Unilateral mass + contralateral atrophy → adrenal Cushings</li>
              <li>Pheochromocytoma — variable</li>
            </ul>
          </li>
        </ul>

        <p><strong>5. GI Tract:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">GI Wall Thickness Normal</span>
          <table>
            <tr><th>Segment</th><th>Dog (mm)</th><th>Cat (mm)</th></tr>
            <tr><td>Stomach</td><td>3-5</td><td>2-4</td></tr>
            <tr><td>Duodenum</td><td>3-5</td><td>2-3</td></tr>
            <tr><td>Jejunum</td><td>2-3</td><td>2</td></tr>
            <tr><td>Ileum</td><td>2-3</td><td>2-3</td></tr>
            <tr><td>Colon</td><td>1-2</td><td>1-2</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>5 wall layers</strong> visible: mucosa · submucosa · muscularis · serosa<br>
          📌 Loss of layering = aggressive (neoplasia, severe IBD)<br>
          📌 Diffuse thickening = IBD · lymphoma</p>
        </div>

        <p><strong>6. Bladder:</strong></p>
        <ul>
          <li>Anechoic content normally</li>
          <li>Wall thickness &lt; 3 mm distended (variable with filling)</li>
          <li>Findings:
            <ul>
              <li>Sediment — crystals, cells</li>
              <li>Mass at trigone — TCC classic</li>
              <li>Stones — hyperechoic with shadowing, gravity-dependent</li>
              <li>Wall thickening — cystitis (diffuse) or mass (focal)</li>
            </ul>
          </li>
        </ul>

        <p><strong>7. Prostate / Uterus:</strong></p>
        <ul>
          <li><strong>Prostate</strong> (intact male):
            <ul>
              <li>Bilobed, homogeneous, hypoechoic</li>
              <li>BPH — symmetric enlargement</li>
              <li>Cyst — anechoic</li>
              <li>Tumor — irregular, mineralized</li>
            </ul>
          </li>
          <li><strong>Uterus:</strong>
            <ul>
              <li>Normal: thin tube, hard to find when not in heat</li>
              <li>Pyometra — fluid-filled tubular structure</li>
              <li>Mucometra — anechoic fluid</li>
              <li>Pregnancy — fetal heart beats &gt; 25 days</li>
            </ul>
          </li>
        </ul>

        <p><strong>8. Lymph Nodes:</strong></p>
        <ul>
          <li><strong>Mesenteric</strong> — dorsal to SI loops</li>
          <li><strong>Sublumbar</strong> — caudal abdomen, ventral to spine (L5-L7)</li>
          <li><strong>Normal:</strong> oblong, hypoechoic, &lt; 5 mm thickness</li>
          <li><strong>Reactive:</strong> mildly enlarged, preserved shape</li>
          <li><strong>Neoplastic:</strong> markedly enlarged, round (loss of fusiform shape), heterogeneous</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Operator-dependent — practice mandatory</li>
          <li>Bowel gas obscures signal</li>
          <li>Recent meal → gas, food artifact</li>
          <li>Patient movement</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Save representative images of each organ in 2 planes</li>
          <li>Document measurements + findings</li>
          <li>FNA / biopsy for definitive Dx of mass</li>
          <li>Tip: <strong>"Liver-fat-spleen"</strong> echogenicity reference</li>
          <li>Tip: <strong>"Kiwi fruit GB" = mucocele</strong></li>
          <li>Tip: <strong>Bilateral adrenal big = PDH · Unilateral big + atrophy = adrenal</strong></li>
          <li>Tip: <strong>5 GI layers preserved = OK · loss = serious</strong></li>
        </ul>
      `
    }
  },

  /* ============================================================
     Advanced · CT / MRI / Contrast (3)
     ============================================================ */

  {
    id: 'rad-ct-overview',
    titleEn: 'CT (Computed Tomography) Overview',
    titleTh: 'CT — การถ่ายเอกซเรย์คอมพิวเตอร์',
    type: 'topic',
    system: 'advanced',
    species: ['dog', 'cat'],
    tags: ['CT', 'computed tomography', 'cross-sectional', 'window', 'contrast'],
    aliases: ['CT scan', 'computed tomography'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Thoracic met staging</strong> (10× sensitive than radiograph)</li>
          <li>Nasal cavity disease (gold standard!)</li>
          <li>Bone disease — elbow OCD, complex fracture, neoplasia</li>
          <li>Pre-surgical planning (orthopedic, neurosurgery)</li>
          <li>Trauma evaluation (rapid)</li>
          <li>Vascular anomalies (PSS, vascular ring)</li>
          <li>Pulmonary thromboembolism</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Need GA (motion artifact)</li>
          <li>Severe contrast allergy (rare)</li>
          <li>Severe AKI — caution with contrast</li>
          <li>Cost prohibitive in some cases</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>GA + intubation</li>
          <li>IV catheter for contrast</li>
          <li>Patient position: sternal or dorsal · symmetric</li>
          <li>+/- contrast (iohexol IV)</li>
          <li>Breath-hold technique for thoracic</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">CT Image — "Hounsfield Units (HU)"</span>
          <ul>
            <li><strong>-1000 HU</strong> ⚫ Air (lung, gas)</li>
            <li><strong>-100 to -50</strong> 🟫 Fat</li>
            <li><strong>0 HU</strong> ⬜ Water (CSF, urine)</li>
            <li><strong>40-60</strong> 🟧 Soft tissue</li>
            <li><strong>40-90</strong> 🩸 Blood (acute hemorrhage)</li>
            <li><strong>+1000</strong> ⚪ Bone (cortex)</li>
            <li><strong>+3000</strong> ⚪⚪ Metal</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Air negative · Bone positive"</strong> · scale relative to water (0 HU)<br>
          📌 ใช้ <strong>HU values</strong> ในการบรรยาย attenuation</p>
        </div>

        <p><strong>Window Settings — สำคัญมาก:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">CT Windows — "ดูอะไรใช้ Window อะไร"</span>
          <table>
            <tr><th>Window</th><th>WW / WL</th><th>ดู</th></tr>
            <tr><td><strong>Lung</strong></td><td>1500 / -600</td><td>Lung parenchyma · airways</td></tr>
            <tr><td><strong>Bone</strong></td><td>2000 / 400</td><td>Bone detail · cortex</td></tr>
            <tr><td><strong>Soft tissue</strong></td><td>400 / 40</td><td>Organs · muscle · fat</td></tr>
            <tr><td><strong>Brain</strong></td><td>80 / 40</td><td>Brain parenchyma</td></tr>
            <tr><td><strong>Mediastinum</strong></td><td>400 / 40</td><td>Heart · vessels · LN</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>WW = Window Width · WL = Window Level</strong><br>
          📌 <strong>"Always check 3 windows"</strong> = lung + bone + soft tissue สำหรับทุกเคส<br>
          📌 ผิด window → miss disease!</p>
        </div>

        <p><strong>CT vs Radiograph — เมื่อไหร่ใช้อะไร:</strong></p>

        <div class="mnemonic diagram">
          <span class="mnem-title">CT &gt; Radiograph สำหรับ...</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">Thoracic Met</span>
              <strong>10× sensitive</strong><br>
              พบ nodule 1-3 mm<br>
              <em>OSA staging mandatory</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">Nasal Cavity</span>
              ผ่าน turbinates<br>
              ไม่ overlap<br>
              <em>Tumor · aspergillosis</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">Elbow OCD/FCP</span>
              เห็น coronoid<br>
              radiograph ไม่เห็น<br>
              <em>Standard of care</em>
            </div>
            <div class="diagram-box green">
              <span class="box-title">Skull/PSS</span>
              Vascular anatomy<br>
              Surgical planning<br>
              <em>3D reconstruction</em>
            </div>
          </div>
        </div>

        <p><strong>Contrast Use:</strong></p>
        <ul>
          <li><strong>Non-contrast (pre-contrast):</strong> baseline · detect mineralization, hemorrhage</li>
          <li><strong>Contrast-enhanced (post-contrast):</strong>
            <ul>
              <li>IV iohexol (300-350 mg/mL) · 600-880 mg I/kg</li>
              <li>Arterial phase (15-30 sec) — vascular anomaly</li>
              <li>Venous phase (60-90 sec) — soft tissue/mass enhancement</li>
              <li>Delayed phase (5-10 min) — masses, scar tissue</li>
            </ul>
          </li>
          <li><strong>Enhancement patterns:</strong>
            <ul>
              <li>Hyper-enhancing — vascular tumor (HCC)</li>
              <li>Hypo-enhancing — necrotic core, abscess</li>
              <li>Ring enhancement — abscess, necrotic tumor</li>
              <li>Heterogeneous — neoplasia</li>
            </ul>
          </li>
        </ul>

        <p><strong>Common CT Indications + Findings:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">CT — Top Indications + Key Findings</span>
          <table>
            <tr><th>Indication</th><th>Key Findings</th></tr>
            <tr><td><strong>OSA staging</strong></td><td>Pulmonary nodules &lt; 5 mm</td></tr>
            <tr><td><strong>Nasal disease</strong></td><td>Turbinate destruction · mass · cribriform plate</td></tr>
            <tr><td><strong>Elbow dysplasia</strong></td><td>FCP · OCD · UAP · incongruence</td></tr>
            <tr><td><strong>PSS</strong></td><td>Aberrant vessel · CTA gold standard</td></tr>
            <tr><td><strong>Vascular ring</strong></td><td>PRAA · double aortic arch</td></tr>
            <tr><td><strong>Trauma</strong></td><td>Fracture · pneumothorax · hemorrhage</td></tr>
            <tr><td><strong>Adrenal mass</strong></td><td>Tumor characterization · vascular invasion</td></tr>
            <tr><td><strong>Pulmonary thromboembolism</strong></td><td>Filling defect in PA</td></tr>
          </table>
        </div>

        <p><strong>3D Reconstruction:</strong></p>
        <ul>
          <li>Volume rendering — anatomical 3D view</li>
          <li>MIP (Maximum Intensity Projection) — vessels (CTA)</li>
          <li>MPR (Multiplanar Reformatting) — sagittal, coronal from axial</li>
          <li>Useful for surgical planning</li>
        </ul>

        <p><strong>CT Limitations:</strong></p>
        <ul>
          <li>Soft tissue contrast lower than MRI</li>
          <li>Radiation dose higher than radiograph</li>
          <li>Cost / availability</li>
          <li>GA required (most cases)</li>
          <li>Brain/spinal cord — MRI better</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Contrast reaction (rare in pets)</li>
          <li>Contrast-induced AKI (caution renal patient)</li>
          <li>GA risks</li>
          <li>Misinterpretation if wrong window</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue GA recovery monitoring</li>
          <li>Hydration after contrast (renal protection)</li>
          <li>Save images in 3 windows</li>
          <li>Tip: <strong>"3 windows always"</strong> · lung + bone + soft tissue</li>
          <li>Tip: <strong>CT 10× sensitive</strong> for thoracic met than radiograph</li>
          <li>Tip: <strong>HU values</strong> for objective tissue characterization</li>
          <li>Tip: <strong>Pre + post contrast</strong> needed for mass evaluation</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-mri-overview',
    titleEn: 'MRI Overview',
    titleTh: 'MRI — การถ่ายภาพคลื่นแม่เหล็ก',
    type: 'topic',
    system: 'advanced',
    species: ['dog', 'cat'],
    tags: ['MRI', 'T1', 'T2', 'FLAIR', 'magnetic resonance'],
    aliases: ['MRI', 'magnetic resonance'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Brain disease</strong> — gold standard!</li>
          <li><strong>Spinal cord</strong> — IVDD, FCE, neoplasia, syringomyelia</li>
          <li>Soft tissue mass evaluation</li>
          <li>Cartilage / ligament injury (orthopedic)</li>
          <li>Pituitary tumor</li>
          <li>Inner/middle ear disease</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Metallic implants</strong> (pacemaker, microchip in scan area, metal foreign body)</li>
          <li>GA required (long scan time 30-90 min)</li>
          <li>Cost / availability ในไทย</li>
          <li>Severe instability — CT faster + accessible</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>GA + intubation (long scan time)</li>
          <li>Remove all metal (collar, ID tag)</li>
          <li>Microchip area scan with caution</li>
          <li>+/- gadolinium contrast IV</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">MRI Sequences — "T1 vs T2 vs FLAIR"</span>
          <ul>
            <li><strong>T1-weighted</strong> 🌑:
              <ul>
                <li>Anatomical detail · "anatomy view"</li>
                <li><strong>Fat = bright</strong> · <strong>Water = dark</strong> · CSF dark</li>
                <li>Best with contrast (gadolinium)</li>
              </ul>
            </li>
            <li><strong>T2-weighted</strong> 🌕:
              <ul>
                <li>"Pathology view" · sensitive to water/edema</li>
                <li><strong>Water = bright</strong> · CSF bright · edema bright</li>
                <li>Most disease shows hyperintense</li>
              </ul>
            </li>
            <li><strong>FLAIR</strong> 🌗:
              <ul>
                <li>"Fluid Attenuated Inversion Recovery"</li>
                <li>T2 with CSF suppressed (CSF dark)</li>
                <li>Detect periventricular lesions, edema near CSF</li>
              </ul>
            </li>
          </ul>
          <p class="mnem-tip">📌 <strong>"T1 = anatomy · T2 = water/disease · FLAIR = T2 minus CSF"</strong><br>
          📌 ใช้รวมกันเสมอ — interpret across sequences</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">MRI Signal Intensities — Quick Reference</span>
          <table>
            <tr><th>Tissue</th><th>T1</th><th>T2</th></tr>
            <tr><td>Fat</td><td>Bright</td><td>Bright</td></tr>
            <tr><td>Water / CSF</td><td>Dark</td><td>Bright</td></tr>
            <tr><td>Cortical bone</td><td>Dark</td><td>Dark</td></tr>
            <tr><td>Air</td><td>Dark</td><td>Dark</td></tr>
            <tr><td>Brain (gray matter)</td><td>Gray</td><td>Gray-bright</td></tr>
            <tr><td>Brain (white matter)</td><td>Bright</td><td>Gray</td></tr>
            <tr><td>Edema / inflammation</td><td>Dark</td><td><strong>Bright</strong> ⭐</td></tr>
            <tr><td>Acute hemorrhage (24h)</td><td>Dark</td><td>Dark</td></tr>
            <tr><td>Subacute hemorrhage</td><td><strong>Bright</strong></td><td>Bright</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Hemorrhage T1 bright"</strong> = subacute (3-7 days) — diagnostic clue<br>
          📌 <strong>"T2 bright = pathology"</strong> ส่วนใหญ่</p>
        </div>

        <p><strong>Contrast (Gadolinium):</strong></p>
        <ul>
          <li>IV gadolinium · enhances on T1</li>
          <li>Active lesions enhance (BBB disruption)</li>
          <li>Patterns:
            <ul>
              <li>Solid enhancement — meningioma</li>
              <li>Ring enhancement — abscess, necrotic tumor</li>
              <li>Heterogeneous — neoplasia</li>
              <li>Linear — meningitis</li>
            </ul>
          </li>
        </ul>

        <p><strong>Common MRI Indications + Findings:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">MRI — Top Indications</span>
          <table>
            <tr><th>Disease</th><th>Key MRI Findings</th></tr>
            <tr><td><strong>IVDD</strong></td><td>T2 hyperintense disc + cord compression · gold standard</td></tr>
            <tr><td><strong>Brain tumor</strong></td><td>T1 contrast enhancement · T2 edema around</td></tr>
            <tr><td><strong>Meningioma</strong></td><td>Extra-axial · "dural tail" · uniform enhancement</td></tr>
            <tr><td><strong>FCE (Fibrocartilaginous embolism)</strong></td><td>T2 hyperintense focal cord lesion · no compression</td></tr>
            <tr><td><strong>Syringomyelia (CKCS)</strong></td><td>Dilated central canal · cerebellar herniation</td></tr>
            <tr><td><strong>Stroke</strong></td><td>DWI hyperintense (acute)</td></tr>
            <tr><td><strong>Encephalitis</strong></td><td>T2/FLAIR hyperintense gray matter</td></tr>
            <tr><td><strong>Pituitary tumor</strong></td><td>Mass at sella turcica · enhancement</td></tr>
          </table>
        </div>

        <p><strong>Specific Disease Patterns:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Cavalier KCS — "Syringomyelia + Chiari-like"</span>
          <ul>
            <li>Cerebellar herniation through foramen magnum</li>
            <li>Syringomyelia (fluid in spinal cord)</li>
            <li>"Phantom scratching" + neck pain</li>
            <li>MRI = definitive Dx</li>
          </ul>
          <p class="mnem-tip">📌 <strong>CKCS specific!</strong> · Other small breeds also at risk<br>
          📌 ตรวจถ้าจะ breed</p>
        </div>

        <p><strong>MRI vs CT — เปรียบเทียบ:</strong></p>

        <div class="mnemonic diagram">
          <span class="mnem-title">MRI vs CT — เลือกอันไหน?</span>
          <div class="diagram-grid">
            <div class="diagram-box purple">
              <span class="box-title">MRI &gt; CT for...</span>
              <strong>Brain · Spinal cord</strong><br>
              Soft tissue contrast<br>
              Cartilage · ligament<br>
              <em>Best resolution</em>
            </div>
            <div class="diagram-box blue">
              <span class="box-title">CT &gt; MRI for...</span>
              <strong>Bone · Lung</strong><br>
              Trauma (fast)<br>
              Vascular (CTA)<br>
              <em>Faster · cheaper</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"MRI for soft + central · CT for bone + lung"</strong></p>
        </div>

        <p><strong>MRI Limitations:</strong></p>
        <ul>
          <li>Long scan time (30-90 min · GA)</li>
          <li>Cost (~5000-15000 baht ในไทย)</li>
          <li>Not for metal implants</li>
          <li>Spatial resolution lower than CT for bone</li>
          <li>Lung disease — air gives no signal</li>
          <li>Limited availability ในไทย</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Long GA — hypothermia, hypoglycemia</li>
          <li>Gadolinium NSF (nephrogenic systemic fibrosis) — rare in pets, risk in renal patient</li>
          <li>Metal projectile injury (pacemaker, FB)</li>
          <li>Microchip artifact in scan area</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>GA recovery monitoring</li>
          <li>Hydration · renal monitoring (gadolinium)</li>
          <li>Tip: <strong>"T1 = anatomy · T2 = pathology"</strong></li>
          <li>Tip: <strong>"FLAIR = T2 minus CSF"</strong></li>
          <li>Tip: <strong>MRI for brain/cord · CT for bone/lung</strong></li>
          <li>Tip: <strong>CKCS Chiari-like + syringomyelia</strong> = MRI standard</li>
          <li>Tip: <strong>Gadolinium safer than iodine</strong> · but expensive</li>
        </ul>
      `
    }
  },

  {
    id: 'rad-contrast-studies',
    titleEn: 'Contrast Studies (Barium, Iodine, Cystography)',
    titleTh: 'การถ่าย Contrast Studies',
    type: 'topic',
    system: 'advanced',
    species: ['dog', 'cat'],
    tags: ['contrast', 'barium', 'iodine', 'cystography', 'urethrography', 'esophagram'],
    aliases: ['contrast study', 'barium', 'cystography'],
    source: 'Thrall, 8th Ed.',
    sections: {
      indications: `
        <ul>
          <li>GI obstruction / motility evaluation (barium series)</li>
          <li>Esophageal disease (esophagram)</li>
          <li>Bladder mass / rupture (cystography)</li>
          <li>Urethral disease (urethrography)</li>
          <li>Renal/ureteral function (IVP)</li>
          <li>Vascular anomaly (angiography — rare now, CT replaced)</li>
          <li>Fistula / sinus tract</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Suspected GI perforation</strong> — barium = peritonitis · use iodine instead!</li>
          <li>Severe contrast allergy</li>
          <li>Severe AKI — IV contrast caution</li>
          <li>Aspiration risk in dyspneic patient</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Survey radiograph FIRST (always before contrast)</li>
          <li>NPO for GI studies (12 hr)</li>
          <li>IV catheter for IV contrast</li>
          <li>Sedation depending on study</li>
          <li>Empty bladder for cystography</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic thai">
          <span class="mnem-title">Contrast Agents — "Barium vs Iodine"</span>
          <ul>
            <li><strong>Barium sulfate (BaSO4):</strong>
              <ul>
                <li>White suspension · GI tract only · ห้าม IV!</li>
                <li>NOT absorbed · no allergic reaction</li>
                <li><strong>⚠️ ห้ามใช้ถ้าสงสัย GI perforation</strong> → barium peritonitis = chronic granuloma</li>
                <li>ใช้: GI motility · obstruction · esophagram</li>
              </ul>
            </li>
            <li><strong>Iodinated contrast (iohexol, iopamidol):</strong>
              <ul>
                <li>Water-soluble · safer · absorbed</li>
                <li>OK if perforation suspected</li>
                <li>IV use OK (CT, IVP, angio)</li>
                <li>Some allergic risk · renal toxic at high dose</li>
                <li>ใช้: cystography · urethrography · IVP · CT contrast · esophagram (when perforation suspected)</li>
              </ul>
            </li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>"Suspected perforation → IODINE, NOT barium"</strong><br>
          📌 Barium peritonitis = lifelong granulomatous reaction</p>
        </div>

        <p><strong>1. Esophagram (Esophageal Study):</strong></p>
        <ul>
          <li><strong>Indications:</strong> dysphagia · regurgitation · suspected megaesophagus / FB / stricture</li>
          <li><strong>Liquid barium</strong> 5-10 mL/kg PO (or syringe in mouth)</li>
          <li>+/- mix with food (food bolus shows motility better)</li>
          <li>Take immediately + 1-2 min after</li>
          <li><strong>Findings:</strong>
            <ul>
              <li>Megaesophagus — diffusely dilated, retained barium</li>
              <li>Stricture — focal narrowing + proximal dilation</li>
              <li>FB — filling defect</li>
              <li>PRAA — diverticulum cranial to heart base</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Upper GI Series (Barium Series):</strong></p>
        <ul>
          <li><strong>Indications:</strong> obstruction · ileus · mass · linear FB</li>
          <li>Liquid barium <strong>5-10 mL/kg</strong> PO via stomach tube (sedated)</li>
          <li>Films at <strong>0, 15, 30, 60, 120, 240 min</strong> (or until barium reaches colon)</li>
          <li><strong>Normal transit:</strong>
            <ul>
              <li>Stomach empty by 4-6 hr</li>
              <li>SI by 3-4 hr</li>
              <li>Colon by 4-6 hr</li>
            </ul>
          </li>
          <li><strong>Findings:</strong>
            <ul>
              <li>Stop in barium = obstruction</li>
              <li>Delayed transit = ileus</li>
              <li>Filling defect = FB or mass</li>
              <li>Plication of SI = linear FB classic</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Barium Series Timing</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">0</span>
              <span class="num-label">นาที · Stomach</span>
            </div>
            <div class="num-card">
              <span class="num-big">30-60</span>
              <span class="num-label">นาที · Duodenum</span>
            </div>
            <div class="num-card">
              <span class="num-big">2-3</span>
              <span class="num-label">ชม. · Mid SI</span>
            </div>
            <div class="num-card">
              <span class="num-big">4-6</span>
              <span class="num-label">ชม. · Colon</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"0-30-2-4 hours"</strong> · ถ้าค้างที่ใด = obstruction!</p>
        </div>

        <p><strong>3. Pneumocystogram / Cystography:</strong></p>
        <ul>
          <li><strong>Indications:</strong> bladder mass · rupture · stones (radiolucent) · vesicoureteral reflux</li>
          <li><strong>Pneumocystogram</strong> (negative contrast):
            <ul>
              <li>Air into empty bladder via catheter (5-10 mL/kg)</li>
              <li>Detect mass · stones</li>
            </ul>
          </li>
          <li><strong>Positive contrast cystogram:</strong>
            <ul>
              <li>Iodinated contrast (iohexol diluted) into bladder</li>
              <li>Detect rupture (extravasation)</li>
            </ul>
          </li>
          <li><strong>Double contrast cystogram</strong> (preferred for mucosal detail):
            <ul>
              <li>Small amount iodine (1-3 mL) + air to fill</li>
              <li>Best for stones · mucosal mass</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Urethrography (Retrograde):</strong></p>
        <ul>
          <li><strong>Indications:</strong> urethral mass · stricture · trauma · radiolucent stone</li>
          <li>Catheter at distal urethra · inject iodine retrograde</li>
          <li>Take film during injection</li>
          <li>Findings:
            <ul>
              <li>Filling defect — stone or mass</li>
              <li>Extravasation — rupture</li>
              <li>Narrowing — stricture</li>
              <li>Mucosal irregularity — TCC</li>
            </ul>
          </li>
        </ul>

        <p><strong>5. IVP (Intravenous Pyelogram / Excretory Urogram):</strong></p>
        <ul>
          <li><strong>Indications:</strong> ectopic ureter · ureteral obstruction · renal function</li>
          <li>IV iohexol bolus</li>
          <li>Films at 0, 5, 10, 20, 40 min</li>
          <li>Phases:
            <ul>
              <li>Vascular phase (immediate) — kidneys enhance</li>
              <li>Nephrogram phase (1-3 min) — parenchyma bright</li>
              <li>Pyelogram phase (5-15 min) — pelvis + ureters fill</li>
              <li>Cystogram phase (10-40 min) — bladder fills</li>
            </ul>
          </li>
          <li>Replaced by CT-IVP / US in many cases</li>
        </ul>

        <p><strong>6. Fistulography:</strong></p>
        <ul>
          <li>Inject iodine into draining tract</li>
          <li>Trace to source (FB, abscess, neoplasia)</li>
          <li>Useful for chronic non-healing wound</li>
        </ul>

        <p><strong>Common Pitfalls:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Contrast Pitfalls — "อย่าทำผิด!"</span>
          <ul>
            <li>⚠️ <strong>Barium + suspected perforation</strong> = peritonitis lifelong</li>
            <li>⚠️ <strong>Aspirated barium</strong> = chronic pneumonia (less reactive than iodine but still bad)</li>
            <li>⚠️ <strong>Hypertonic iodine</strong> in bladder rupture → severe peritonitis</li>
            <li>⚠️ <strong>IV contrast in dehydrated/AKI patient</strong> → contrast nephropathy</li>
            <li>⚠️ <strong>Contrast extravasation IV</strong> → soft tissue irritation</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"When in doubt, use iodine"</strong> · safer than barium<br>
          📌 <strong>Hydrate well</strong> before + after IV contrast</p>
        </div>

        <p><strong>Modern Replacement:</strong></p>
        <ul>
          <li><strong>POCUS / US</strong> — replaces many contrast studies (faster, safer)</li>
          <li><strong>CT</strong> — replaces angiography, IVP, sinography</li>
          <li><strong>Endoscopy</strong> — replaces some GI contrast studies</li>
          <li><strong>MRI</strong> — replaces myelography</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Barium peritonitis (perforation)</li>
          <li>Aspiration pneumonia</li>
          <li>Contrast allergic reaction (rare)</li>
          <li>Contrast-induced AKI</li>
          <li>Extravasation injury</li>
          <li>Misinterpretation of artifacts as pathology</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Hydration after IV contrast</li>
          <li>Monitor renal function in at-risk</li>
          <li>Re-image as needed</li>
          <li>Tip: <strong>"Suspected perforation → IODINE"</strong> always</li>
          <li>Tip: <strong>"Barium 0-30-2-4 hr"</strong> timing</li>
          <li>Tip: <strong>"Double contrast cystogram"</strong> = best for stones</li>
          <li>Tip: <strong>POCUS/CT replaces many contrast studies</strong> nowadays</li>
        </ul>
      `
    }
  },

];

window.RADIOLOGY_DATA_LOADED = true;
