/* ===========================================================================
   pk · Cardiology Handbook — cardiology-data.js
   ----------------------------------------------------------------------------
   เนื้อหาเชิงโครงสร้างอิง:
   • Bussadori C. "Textbook of Cardiovascular Medicine in Dogs and Cats"
   • Duque-Carrasco J. "Cardiovascular Renal Axis Disorders in Cats and Dogs"
   เนื้อหาเรียบเรียงใหม่โดย Alex สำหรับ pk
   ภาษาไทยเป็นหลัก · medical term ทับศัพท์
   =========================================================================== */

window.CARDIOLOGY_DATA = [

  /* ============================================================
     Phase 1 — Diagnostics + Acquired Disease (Dog)
     ============================================================ */

  {
    id: 'card-auscultation',
    titleEn: 'Cardiac Auscultation — Systematic Approach',
    titleTh: 'การฟังเสียงหัวใจ',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['auscultation', 'physical exam', 'murmur', 'gallop', 'principles'],
    aliases: ['heart auscultation', 'การฟังหัวใจ'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      indications: `
        <ul>
          <li>ทุก physical exam (preventive + sick visit)</li>
          <li>Pre-anesthetic screening</li>
          <li>Workup: cough, dyspnea, syncope, exercise intolerance, weight loss (cat)</li>
          <li>Murmur grading + characterization</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — หลักการพื้นฐาน</li>
          <li>แต่ — sedation อาจรบกวน HR · ฟังก่อน sedate ถ้าทำได้</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Stethoscope quality ดี — bell + diaphragm</li>
          <li>Quiet room (cat purring = ปัญหา · ลองเปิดน้ำให้ได้ยิน)</li>
          <li>Standing position preferred</li>
          <li>Both sides — left + right hemithorax</li>
        </ul>
      `,
      steps: `
        <p><strong>Cardiac auscultation = ฟังครบ 4 จุด · 2 ข้าง · ทั้ง systole + diastole</strong></p>

        <div class="mnemonic diagram">
          <span class="mnem-title">4 จุดฟัง — "PAM Tt" (left side แล้ว Tricuspid right)</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">P · Pulmonic</span>
              <strong>L 3rd ICS</strong><br>
              <em>S2 split, PS murmur</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">A · Aortic</span>
              <strong>L 4th ICS</strong><br>
              <em>AS murmur, S2</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">M · Mitral</span>
              <strong>L 5th ICS</strong><br>
              <em>⭐ MMVD apex</em>
            </div>
            <div class="diagram-box purple">
              <span class="box-title">T · Tricuspid</span>
              <strong>R 4th ICS</strong><br>
              <em>TR · PDA right</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>ตำแหน่ง:</strong> Left (P-A-M ไล่จากบนลงล่าง 3-4-5 ICS) + Right (T at 4 ICS)<br>
          📌 <strong>MMVD = apex left 5 ICS</strong> · point of maximal intensity (PMI)</p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Murmur Grading — Levine Scale "1-6"</span>
          <ul>
            <li><strong>1/6</strong> — เบามาก ฟังเฉพาะห้องเงียบ ใช้เวลาฟังนาน</li>
            <li><strong>2/6</strong> — เบา แต่ฟังได้ทันทีที่วาง stethoscope</li>
            <li><strong>3/6</strong> — ดังปานกลาง ไม่มี thrill (ขยับมือไม่รู้สึก)</li>
            <li><strong>4/6</strong> — ดัง + <strong>มี thrill</strong> (palpable)</li>
            <li><strong>5/6</strong> — ดังมาก + thrill ฟังได้แม้ห่าง stethoscope จากผิว</li>
            <li><strong>6/6</strong> — ดังมาก ฟังได้แม้ stethoscope ลอย ไม่แตะผิว</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"4/6 = thrill"</strong> · จำ thrill ที่ grade 4 ขึ้นไป<br>
          📌 <strong>Grade ไม่บอก severity เสมอ</strong> — Cat HCM อาจ silent หรือ grade 1, dog MMVD มักเริ่มที่ 2-3</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Murmur Timing → Diagnosis</span>
          <table>
            <tr><th>Timing</th><th>PMI</th><th>DDx</th></tr>
            <tr><td><strong>Systolic</strong></td><td>Apex L (5 ICS)</td><td>⭐ MMVD · MR · HCM (cat) · DCM</td></tr>
            <tr><td><strong>Systolic</strong></td><td>L base (3-4 ICS)</td><td>SAS · PS · innocent puppy murmur</td></tr>
            <tr><td><strong>Systolic</strong></td><td>Right (4 ICS)</td><td>VSD · TR · MR radiating</td></tr>
            <tr><td><strong>Continuous</strong></td><td>L base (high)</td><td>⭐ <strong>PDA</strong> (machinery murmur)</td></tr>
            <tr><td><strong>Diastolic</strong></td><td>L base</td><td>Aortic regurgitation (rare · endocarditis)</td></tr>
            <tr><td><strong>Gallop S3</strong></td><td>L apex</td><td>DCM · ventricular dysfunction</td></tr>
            <tr><td><strong>Gallop S4</strong></td><td>L apex</td><td>Cat HCM · stiff ventricle</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Timing บอกโรค</strong> · systolic vs diastolic vs continuous = ครึ่งแรกของ DDx<br>
          📌 <strong>PDA = continuous "machinery"</strong> · classic exam finding · L base high</p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Heart Sounds — S1 S2 S3 S4</span>
          <ul>
            <li><strong>S1</strong> ("ลับ") — ปิด AV valves (mitral + tricuspid) · เริ่ม systole · ดังที่ apex</li>
            <li><strong>S2</strong> ("ดับ") — ปิด semilunar valves (aortic + pulmonic) · เริ่ม diastole · ดังที่ base</li>
            <li><strong>S3</strong> — early diastole · rapid ventricular filling · <strong>abnormal in dog/cat</strong> = DCM, dilated ventricle</li>
            <li><strong>S4</strong> — late diastole · atrial kick into stiff ventricle · <strong>cat HCM</strong></li>
          </ul>
          <p class="mnem-tip">📌 <strong>S1-S2 = ลับ-ดับ</strong> (Lub-Dub)<br>
          📌 <strong>"Gallop rhythm"</strong> = หัวใจเร็ว + S3/S4 → ฟังเป็น 3 จังหวะ<br>
          📌 Cat: gallop = strong indicator HCM/cardiac dz · echo immediately</p>
        </div>

        <p><strong>Pulse + auscultation simultaneously:</strong></p>
        <ul>
          <li>Pulse deficit = HR ฟัง (auscult) > pulse rate (femoral) → AFib · severe arrhythmia</li>
          <li>Bounding pulse = high stroke volume → PDA, anemia, hyperthyroid (cat), AR</li>
          <li>Weak/absent femoral = aortic stenosis · ATE (cat) · shock</li>
        </ul>
      `,
      complications: `
        <p><strong>Common pitfalls:</strong></p>
        <ul>
          <li><strong>Cat purring</strong> — bury vibration covers murmurs · trick: water tap sound, gentle pressure on larynx, brief alcohol swab on nose</li>
          <li><strong>Respiratory sounds</strong> — referred to thorax · ask owner to time</li>
          <li><strong>Innocent puppy murmur</strong> — soft systolic L base · resolves by 4-5 mo · grade ≤ 2</li>
          <li><strong>"Silent" cardiac dz in cats</strong> — 30-50% HCM may have NO murmur · gallop or arrhythmia clue</li>
          <li><strong>Stethoscope position errors</strong> — too high (lung), too caudal (abdomen)</li>
          <li><strong>Stress tachycardia</strong> — masks gallops · let cat settle</li>
        </ul>
      `,
      postCare: `
        <p><strong>Documentation tips:</strong></p>
        <ul>
          <li>Grade (1-6) + Timing (sys/dias/cont) + Location (PMI) + Radiation + Quality</li>
          <li>Example: <em>"Grade 3/6 systolic murmur, PMI L apex 5 ICS, no radiation, plateau quality — c/w MMVD"</em></li>
          <li>Pulse rate + quality + symmetry</li>
          <li>Lung sounds (crackles? wheeze?)</li>
          <li>JVP elevation/distention</li>
          <li>Mucous membrane color + CRT</li>
        </ul>

        <p><strong>Next steps based on findings:</strong></p>
        <ul>
          <li><strong>Murmur grade 1-2 (asymptomatic)</strong> → re-examine 6-12 mo · NT-proBNP screen if uncertain</li>
          <li><strong>Murmur grade 3+ (any species)</strong> → echocardiogram</li>
          <li><strong>Cat with gallop ± murmur</strong> → echo + NT-proBNP regardless of grade</li>
          <li><strong>Cough + murmur</strong> → thoracic radiograph + echo</li>
          <li><strong>Dyspnea + cardiac signs</strong> → POCUS first (ED) · then full echo</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-ecg-basics',
    titleEn: 'ECG Interpretation — Systematic Approach',
    titleTh: 'การอ่าน ECG หัวใจ',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['ECG', 'electrocardiogram', 'rhythm', 'arrhythmia', 'principles'],
    aliases: ['EKG', 'cardiac monitor'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      indications: `
        <ul>
          <li>Suspected arrhythmia (irregular pulse, syncope)</li>
          <li>Pre-anesthetic screening (high-risk patient)</li>
          <li>Cardiac disease workup (DCM, HCM, MMVD)</li>
          <li>Electrolyte abnormalities (hyperK)</li>
          <li>Drug toxicity (digoxin, TCAs)</li>
          <li>CPR / cardiac arrest</li>
          <li>Trauma (myocardial contusion screening)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — diagnostic test ที่ปลอดภัย</li>
          <li>Limitation: snapshot only · arrhythmia ที่ paroxysmal อาจ miss</li>
          <li>Holter monitor (24 hr) for episodic arrhythmia</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>6-lead ECG (Standard limb + augmented leads)</li>
          <li>Lead II most commonly used for rhythm</li>
          <li>Patient: right lateral recumbency standard · sternal OK</li>
          <li>Alligator clips: right fore (white), left fore (black), right hind (green), left hind (red) — "white-on-right, snow-over-grass"</li>
          <li>Alcohol/gel for contact</li>
          <li>Paper speed 50 mm/sec (vet) vs 25 mm/sec (human)</li>
          <li>Calibration 1 cm = 1 mV</li>
        </ul>
      `,
      steps: `
        <p><strong>Systematic ECG interpretation — 5 steps</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">5-Step ECG Read — "RAIPA"</span>
          <ul>
            <li><strong>R</strong>ate — HR (count R-R)</li>
            <li><strong>A</strong>xis — mean electrical axis (limb leads)</li>
            <li><strong>I</strong>ntervals — PR, QRS, QT</li>
            <li><strong>P</strong> waves + relationship to QRS</li>
            <li><strong>A</strong>rrhythmia — regular? irregular? pattern?</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"RAIPA"</strong> ทำตามลำดับ ไม่ข้าม<br>
          📌 ดู Lead II ก่อน (rhythm strip) แล้วตามด้วย other leads สำหรับ axis + chamber</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Normal Values — Dog vs Cat</span>
          <table>
            <tr><th>Parameter</th><th>Dog</th><th>Cat</th></tr>
            <tr><td><strong>HR (resting)</strong></td><td>70-160 (small)<br>60-140 (large)</td><td>140-220</td></tr>
            <tr><td><strong>P wave duration</strong></td><td>≤ 0.04 s</td><td>≤ 0.04 s</td></tr>
            <tr><td><strong>P wave height</strong></td><td>≤ 0.4 mV</td><td>≤ 0.2 mV</td></tr>
            <tr><td><strong>PR interval</strong></td><td>0.06-0.13 s</td><td>0.05-0.09 s</td></tr>
            <tr><td><strong>QRS duration</strong></td><td>≤ 0.05 (small) – 0.06 (large) s</td><td>≤ 0.04 s</td></tr>
            <tr><td><strong>QRS amplitude (Lead II)</strong></td><td>≤ 2.5 (small) – 3.0 (large) mV</td><td>≤ 0.9 mV</td></tr>
            <tr><td><strong>QT interval</strong></td><td>0.15-0.25 s (HR-dependent)</td><td>0.12-0.18 s</td></tr>
            <tr><td><strong>Mean electrical axis</strong></td><td>+40° to +100°</td><td>0° to +160°</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>P-tall</strong> (right atrial enlargement, "P pulmonale") · <strong>P-wide</strong> (left atrial enlargement, "P mitrale")<br>
          📌 <strong>QRS tall</strong> = LV enlargement · <strong>QRS wide</strong> = ventricular conduction problem (BBB) หรือ ventricular ectopic</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">Quick HR Calculation (paper 50 mm/s)</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">300</span>
              <span class="num-label">÷ # large boxes between R-R</span>
            </div>
            <div class="num-card">
              <span class="num-big">1500</span>
              <span class="num-label">÷ # small boxes (precise)</span>
            </div>
            <div class="num-card">
              <span class="num-big">×6</span>
              <span class="num-label">QRS in 10 sec strip</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>50 mm/s paper</strong>: 1 large box = 0.1 sec · 1 small box = 0.02 sec<br>
          📌 ที่ <strong>25 mm/s</strong> (human/some monitors): หาร 300 ด้วย large boxes (1 large = 0.2 sec)</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Common Arrhythmia Pattern Recognition</span>
          <table>
            <tr><th>Pattern</th><th>QRS</th><th>P wave</th><th>Diagnosis</th></tr>
            <tr><td><strong>Regular fast (sinus tach)</strong></td><td>Normal narrow</td><td>Before each QRS</td><td>Sinus tachycardia</td></tr>
            <tr><td><strong>Irregularly irregular</strong></td><td>Narrow</td><td>NO P (fibrillation)</td><td>⭐ <strong>Atrial fibrillation</strong></td></tr>
            <tr><td><strong>Wide QRS, fast</strong></td><td>WIDE &gt; 0.07s</td><td>Dissociated/none</td><td>⭐ <strong>Ventricular tachycardia</strong></td></tr>
            <tr><td><strong>Premature, wide QRS</strong></td><td>Wide</td><td>None preceding</td><td>VPC (ventricular premature)</td></tr>
            <tr><td><strong>Premature, narrow QRS</strong></td><td>Narrow normal</td><td>Abnormal P</td><td>APC (atrial premature)</td></tr>
            <tr><td><strong>Regular slow + missing QRS</strong></td><td>Normal</td><td>P with no QRS</td><td>2° AV block</td></tr>
            <tr><td><strong>P + QRS unrelated</strong></td><td>Wide (escape)</td><td>P regular but no relationship</td><td>3° AV block (complete)</td></tr>
            <tr><td><strong>Regular bradycardia</strong></td><td>Normal</td><td>Before each QRS</td><td>Sinus bradycardia</td></tr>
            <tr><td><strong>Tented T + wide QRS</strong></td><td>Widening</td><td>Flat/absent</td><td>⚠️ <strong>Hyperkalemia</strong></td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Wide QRS = ventricular origin"</strong> until proven otherwise<br>
          📌 <strong>Hyperkalemia = ECG emergency</strong> — tented T → wide QRS → sine wave → asystole<br>
          📌 ⚠️ Always check for P-QRS relationship in bradycardia</p>
        </div>
      `,
      complications: `
        <p><strong>Common interpretation pitfalls:</strong></p>
        <ul>
          <li><strong>Movement artifact</strong> — patient moving · panting · purring · misread as arrhythmia</li>
          <li><strong>Lead misplacement</strong> — wrong polarity → wrong axis</li>
          <li><strong>Wandering baseline</strong> — respiratory variation (esp small dogs)</li>
          <li><strong>60 Hz interference</strong> — fluorescent lights, electrical · check ground</li>
          <li><strong>Confusing flat baseline with asystole</strong> — verify lead disconnect first</li>
          <li><strong>Sinus arrhythmia (normal in dogs)</strong> — vagal · phasic with breathing · do NOT treat</li>
          <li><strong>Cat handling stress</strong> — sinus tach (180-220) is NORMAL in office</li>
          <li><strong>Single ECG snapshot</strong> — paroxysmal arrhythmia missed → Holter</li>
        </ul>
      `,
      postCare: `
        <p><strong>Reporting template:</strong></p>
        <ul>
          <li>Rate: __ bpm</li>
          <li>Rhythm: regular / irregular pattern</li>
          <li>P wave: present? morphology? before each QRS?</li>
          <li>PR: __ s · QRS: __ s · QT: __ s</li>
          <li>Axis: __° (normal vs deviation)</li>
          <li>Chamber enlargement criteria met?</li>
          <li>Arrhythmias identified</li>
          <li>Conclusion + recommendations</li>
        </ul>

        <p><strong>Next steps:</strong></p>
        <ul>
          <li><strong>Suspect arrhythmia</strong> → Holter 24 hr</li>
          <li><strong>Chamber enlargement</strong> → echocardiogram</li>
          <li><strong>VT/dangerous arrhythmia</strong> → cardiology referral · sotalol/lidocaine</li>
          <li><strong>3° AV block</strong> → pacemaker (referral)</li>
          <li><strong>Hyperkalemia ECG</strong> → calcium gluconate + glucose+insulin · urgent K-lowering</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-echo-basics',
    titleEn: 'Echocardiography — Standard Views',
    titleTh: 'อัลตร้าซาวด์หัวใจ',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['echocardiography', 'ultrasound', 'echo', 'M-mode', 'doppler'],
    aliases: ['cardiac ultrasound', 'echo', 'อัลตร้าซาวด์หัวใจ'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      indications: `
        <ul>
          <li>Murmur grade 3+ ทุกราย</li>
          <li>Cat with gallop / arrhythmia (regardless of murmur)</li>
          <li>CHF diagnosis + classification</li>
          <li>Pre-anesthetic high-risk screen</li>
          <li>Pericardial effusion suspected (POCUS)</li>
          <li>Breed screening (Cavalier KCS, Doberman, Boxer, Maine Coon, Ragdoll)</li>
          <li>Therapeutic monitoring (response to Rx)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี absolute</li>
          <li>Limitation: requires training + equipment + cooperative patient</li>
          <li>Sedation (butorphanol, mild dexmed) สำหรับ fractious cat</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Ultrasound machine (cardiac probe 5-12 MHz)</li>
          <li>Patient: right lateral recumbency (standard) · sternal OK</li>
          <li>Cut-out table (echo table) preferred</li>
          <li>Shave or part hair on right + left thoracic windows</li>
          <li>Acoustic gel + alcohol</li>
          <li>ECG simultaneously (timing analysis)</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic diagram">
          <span class="mnem-title">Standard Echo Views — "Right + Left"</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">Right Parasternal</span>
              <strong>Long-axis</strong><br>
              5-chamber · LVOT · Aorta<br>
              <em>Standard chambers</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">Right Parasternal</span>
              <strong>Short-axis</strong><br>
              Mushroom · Fish-mouth · LV<br>
              <em>M-mode here</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">Left Apical</span>
              <strong>4-chamber</strong><br>
              All 4 chambers<br>
              <em>MR/TR Doppler</em>
            </div>
            <div class="diagram-box purple">
              <span class="box-title">Left Cranial</span>
              <strong>LVOT/RVOT</strong><br>
              Pulmonary trunk · Aorta<br>
              <em>SAS, PS, PDA</em>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>Right side first</strong> — most info, M-mode<br>
          📌 <strong>Left side</strong> for Doppler (flow parallel to beam)</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">M-Mode Measurements (Right Parasternal Short-Axis)</span>
          <table>
            <tr><th>Measurement</th><th>What it tells</th><th>Notes</th></tr>
            <tr><td><strong>LVIDd</strong></td><td>LV diameter at diastole</td><td>Dilated if ↑ · index by BW (allometric)</td></tr>
            <tr><td><strong>LVIDs</strong></td><td>LV diameter at systole</td><td>Used for FS calculation</td></tr>
            <tr><td><strong>FS (Fractional Shortening)</strong></td><td>(LVIDd-LVIDs)/LVIDd × 100</td><td>Normal 30-45% (dog), 40-65% (cat)</td></tr>
            <tr><td><strong>EF (Ejection Fraction)</strong></td><td>Volumetric · Simpson's method</td><td>Better than FS but harder · normal &gt; 50%</td></tr>
            <tr><td><strong>IVSd / LVPWd</strong></td><td>Septum + posterior wall thickness</td><td>HCM if ≥ 6 mm (cat)</td></tr>
            <tr><td><strong>LA/Ao ratio</strong></td><td>Left atrium / Aortic root</td><td>Normal &lt; 1.5 · ≥ 1.6 = LA enlargement</td></tr>
            <tr><td><strong>EPSS</strong></td><td>E-point septal separation</td><td>Mitral valve excursion · ↑ in DCM</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>FS dog 30-45%</strong> · &lt; 25% = systolic dysfunction (DCM)<br>
          📌 <strong>Cat IVS ≥ 6 mm = HCM</strong> · use M-mode at chordae level<br>
          📌 <strong>LA/Ao &gt; 1.6 = enlarged</strong> · indicator of CHF risk</p>
        </div>

        <p><strong>Doppler echocardiography — flow patterns:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Doppler Modes</span>
          <ul>
            <li><strong>Color Doppler</strong> — flow direction + turbulence (red toward, blue away · BART) · screen for regurgitation/shunts</li>
            <li><strong>Pulsed Wave (PW)</strong> — flow velocity at specific point (transvalvular flow E/A)</li>
            <li><strong>Continuous Wave (CW)</strong> — peak velocity along beam · use for HIGH velocities (PS, AS, MR)</li>
            <li><strong>Tissue Doppler (TDI)</strong> — myocardial velocity (E', A') · diastolic function</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Bernoulli equation:</strong> ΔP = 4V² (V in m/s · ΔP in mmHg)<br>
          📌 Example: PS jet 5 m/s → gradient = 4×25 = 100 mmHg = severe stenosis</p>
        </div>

        <div class="mnemonic numbers">
          <span class="mnem-title">Stenosis Severity (Pressure Gradient mmHg)</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">&lt;50</span>
              <span class="num-label">Mild</span>
            </div>
            <div class="num-card">
              <span class="num-big">50-80</span>
              <span class="num-label">Moderate</span>
            </div>
            <div class="num-card">
              <span class="num-big">&gt;80</span>
              <span class="num-label">Severe (intervention)</span>
            </div>
            <div class="num-card">
              <span class="num-big">&gt;100</span>
              <span class="num-label">Critical · syncope risk</span>
            </div>
          </div>
          <p class="mnem-tip">📌 PS, SAS — same threshold<br>
          📌 Severe = consider balloon valvuloplasty (PS) or beta-blocker (SAS)</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Operator-dependent — variability between sonographers</li>
          <li>Patient cooperation needed (sedation OK with butorphanol or low-dose dexmed if cat)</li>
          <li>Interpretation requires training (cardiology specialty exam)</li>
          <li>Body composition affects windows (obese, deep chest)</li>
          <li>Lung interference if poor positioning</li>
          <li>False reassurance: focal disease may be missed in screening</li>
        </ul>
      `,
      postCare: `
        <p><strong>Reporting elements:</strong></p>
        <ul>
          <li>Chamber dimensions (LVIDd, LVIDs, IVS, PWd, LA/Ao)</li>
          <li>Systolic function (FS, EF, EPSS)</li>
          <li>Diastolic function (E/A, E', tissue Doppler)</li>
          <li>Valve function (regurgitation grading)</li>
          <li>Pulmonary pressure estimation (TR jet, PR jet)</li>
          <li>Pericardial assessment</li>
          <li>Conclusion + ACVIM staging if applicable</li>
        </ul>

        <p><strong>Common diagnoses identified:</strong></p>
        <ul>
          <li>MMVD (LA enlargement, MR jet, prolapsing valve)</li>
          <li>DCM (LV dilation, ↓ FS, high EPSS)</li>
          <li>HCM (cat: IVS/PW thickening, LA enlargement, SAM)</li>
          <li>Pericardial effusion (anechoic space around heart)</li>
          <li>Endocarditis (vegetative lesions, abscess)</li>
          <li>Congenital: PDA, PS, AS, VSD, TVD</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-biomarkers',
    titleEn: 'Cardiac Biomarkers — NT-proBNP + Troponin',
    titleTh: 'Biomarkers หัวใจ',
    type: 'topic',
    system: 'principles',
    species: ['dog', 'cat'],
    tags: ['NT-proBNP', 'troponin', 'biomarker', 'lab', 'screening'],
    aliases: ['BNP', 'cTnI', 'cardiac biomarker'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      indications: `
        <ul>
          <li>Cat asymptomatic murmur — screen for occult HCM</li>
          <li>Dyspnea differentiation: cardiac vs respiratory</li>
          <li>CHF severity assessment + monitoring</li>
          <li>Pre-anesthetic screen (cat)</li>
          <li>Breed screening (Maine Coon, Ragdoll, Doberman)</li>
          <li>Acute MI/myocardial damage (troponin)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Not a substitute for echocardiography</li>
          <li>Renal failure → false elevation (NT-proBNP mainly)</li>
          <li>Hyperthyroid cat → variable</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>NT-proBNP: serum or plasma · purple top OK · stable refrigerated</li>
          <li>Cat-specific assay (IDEXX, etc.) — different from human</li>
          <li>Troponin (cTnI): serum · 4-6 hr fasting OK</li>
          <li>SDMA + creatinine if renal involvement suspected</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">NT-proBNP Interpretation — Cat</span>
          <table>
            <tr><th>NT-proBNP (pmol/L)</th><th>Interpretation</th><th>Action</th></tr>
            <tr><td><strong>&lt; 100</strong></td><td>Normal</td><td>No further cardiac workup needed</td></tr>
            <tr><td><strong>100-270</strong></td><td>Equivocal · gray zone</td><td>Echocardiography recommended</td></tr>
            <tr><td><strong>&gt; 270</strong></td><td>Elevated · cardiac dz likely</td><td>Echocardiography essential</td></tr>
            <tr><td><strong>&gt; 1500-2000</strong></td><td>Severe · CHF likely</td><td>Echo + immediate Rx</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Screen for occult HCM:</strong> NT-proBNP &gt; 100 = follow-up · Bussadori<br>
          📌 <strong>Dyspnea cat:</strong> NT-proBNP &lt; 270 makes CHF unlikely (high NPV)</p>
        </div>

        <div class="mnemonic table-aid">
          <span class="mnem-title">NT-proBNP Interpretation — Dog</span>
          <table>
            <tr><th>NT-proBNP (pmol/L)</th><th>Interpretation</th></tr>
            <tr><td><strong>&lt; 800</strong></td><td>Normal · low CHF probability</td></tr>
            <tr><td><strong>800-1500</strong></td><td>Equivocal</td></tr>
            <tr><td><strong>&gt; 1500-1800</strong></td><td>CHF likely</td></tr>
            <tr><td><strong>&gt; 1800</strong></td><td>CHF very likely</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Cardiac vs respiratory cough"</strong> — NT-proBNP differentiates with high NPV<br>
          📌 Useful when echo not immediately available</p>
        </div>

        <div class="mnemonic thai">
          <span class="mnem-title">Cardiac Troponin I (cTnI)</span>
          <ul>
            <li>Marker of <strong>myocardial damage</strong> (necrosis, ischemia)</li>
            <li>Elevated in: DCM, HCM with damage, myocarditis, trauma, sepsis, pulmonary HT</li>
            <li>Normal &lt; 0.06-0.2 ng/mL (lab-dependent)</li>
            <li>Severely elevated (&gt; 1.0) = significant injury</li>
            <li>Trending value = monitor disease progression</li>
            <li>NOT useful for screening occult cardiomyopathy</li>
          </ul>
          <p class="mnem-tip">📌 <strong>NT-proBNP = strain</strong> (volume/pressure overload) · BNP from stretched ventricle<br>
          📌 <strong>Troponin = damage</strong> (necrosis) · cardiomyocyte breakdown<br>
          📌 ใช้ทั้ง 2 ตัวใน workup complex cases</p>
        </div>

        <p><strong>When to order:</strong></p>
        <ul>
          <li><strong>Asymptomatic cat with murmur</strong> → NT-proBNP first (cheaper than echo · cat-specific)</li>
          <li><strong>Dyspneic patient</strong> → NT-proBNP rapid result helps r/o cardiac if &lt; 270</li>
          <li><strong>Doberman screening</strong> → annual NT-proBNP + Holter (DCM detection)</li>
          <li><strong>HCM-screened cat</strong> → annual NT-proBNP if equivocal echo</li>
          <li><strong>Trauma case with suspected myocardial contusion</strong> → cTnI</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>False elevation in CKD</strong> — NT-proBNP cleared renally · interpret cautiously if azotemic</li>
          <li><strong>Sample handling</strong> — NT-proBNP stable but ship cold · cTnI also</li>
          <li><strong>Cost</strong> — outside lab fee · 1-2 days turnaround</li>
          <li><strong>Cat assay vs dog assay</strong> — species-specific!</li>
          <li><strong>NOT a replacement for echo</strong> — biomarkers say "abnormal" but not which disease</li>
        </ul>
      `,
      postCare: `
        <p><strong>Combined with echo:</strong></p>
        <ul>
          <li>Asymptomatic cat: NT-proBNP &gt; 100 + echo abnormal = HCM diagnosed</li>
          <li>Symptomatic cat: NT-proBNP &gt; 1500 + echo CHF = furosemide therapy</li>
          <li>MMVD dog: NT-proBNP trends correlate with stage progression (B1 → B2 → C → D)</li>
          <li>DCM dog: NT-proBNP + Holter → preclinical detection (Doberman pre-DCM)</li>
        </ul>

        <p><strong>Limitations to remember:</strong></p>
        <ul>
          <li>Hyperthyroid cat: NT-proBNP variable — re-check after euthyroid</li>
          <li>Renal disease: confound interpretation</li>
          <li>Pulmonary hypertension: ↑ NT-proBNP from RV strain (not LV)</li>
          <li>Sepsis/SIRS: may ↑ both biomarkers without primary cardiac dz</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     ACQUIRED — DOG
     ============================================================ */

  {
    id: 'card-mmvd',
    titleEn: 'Myxomatous Mitral Valve Disease (MMVD)',
    titleTh: 'โรคลิ้นหัวใจ Mitral เสื่อม (MMVD)',
    type: 'disease',
    system: 'acquired-dog',
    species: ['dog'],
    tags: ['MMVD', 'mitral', 'CHF', 'Cavalier', 'endocardiosis', 'B1 B2 C D'],
    aliases: ['endocardiosis', 'chronic valvular disease', 'mitral degeneration', 'โรคลิ้นหัวใจเสื่อม'],
    source: 'Bussadori + Duque-Carrasco',
    sections: {
      definition: `
        <p><strong>Myxomatous Mitral Valve Disease (MMVD)</strong> — โรคหัวใจที่พบบ่อยที่สุดในหมา (~75-80% of acquired heart disease)</p>
        <ul>
          <li>Progressive degeneration of mitral valve leaflets + chordae tendineae</li>
          <li>Myxomatous degeneration → valve thickening, prolapse, malcoaptation → mitral regurgitation</li>
          <li>Volume overload → LA + LV enlargement → CHF</li>
          <li>Small/medium breed dogs · ⭐ Cavalier King Charles Spaniel (predisposed early onset)</li>
          <li>Other breeds: Dachshund, Poodle, Chihuahua, Maltese, Yorkshire</li>
          <li>Age of onset: 5-9 years (CKCS earlier)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">ACVIM Staging — MMVD</span>
          <table>
            <tr><th>Stage</th><th>Description</th><th>Treatment</th></tr>
            <tr><td><strong>A</strong></td><td>At risk · breed predisposed · NO murmur</td><td>None · monitor q6-12 mo</td></tr>
            <tr><td><strong>B1</strong></td><td>Murmur · NO cardiac remodeling</td><td>None · echo q6-12 mo</td></tr>
            <tr><td><strong>B2</strong></td><td>⭐ Murmur + remodeling (LA/Ao ≥ 1.6, LVIDdN ≥ 1.7, VHS ≥ 11.5)</td><td>⭐ <strong>Pimobendan</strong> (EPIC trial) · ± ACEi</td></tr>
            <tr><td><strong>C</strong></td><td>Past or current CHF (radiographic edema)</td><td>⭐ <strong>Quadruple Rx:</strong> Furosemide + Pimobendan + ACEi + Spironolactone</td></tr>
            <tr><td><strong>D</strong></td><td>Refractory CHF</td><td>↑ Furosemide / switch torsemide · sildenafil for pulmonary HT · ACVIM specialist</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>EPIC trial</strong> (Boswood 2016): Pimobendan in B2 delays CHF onset by 15 mo<br>
          📌 <strong>"Triple-D" of B2 → Pimo"</strong>: Diameter (LVIDdN), Diastolic (LA/Ao), Disc (VHS)</p>
        </div>
      `,
      etiology: `
        <ul>
          <li>Genetic predisposition (CKCS inherited polygenically)</li>
          <li>Connective tissue disorder of valve apparatus</li>
          <li>NO inflammation (vs endocarditis)</li>
          <li>NO bacterial cause (vs endocarditis)</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Risk Factors — Pre-CHF Progression</span>
          <ul>
            <li><strong>Breed</strong> — Cavalier KCS (50% by age 5, 100% by 10 yo)</li>
            <li><strong>Age</strong> — older dogs progress faster</li>
            <li><strong>Murmur grade</strong> — &gt; 3/6 = more severe</li>
            <li><strong>VHS &gt; 11.5</strong> · VLAS &gt; 3.0 (radiographic)</li>
            <li><strong>LA/Ao ≥ 1.6</strong> · LVIDdN ≥ 1.7 (echo)</li>
            <li><strong>NT-proBNP &gt; 1800</strong> = CHF likely</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Cavalier breed:</strong> 100% develop MMVD if live to old age<br>
          📌 SVEP study: dogs with stage B2 and pimobendan = better quality of life</p>
        </div>
      `,
      pathophysiology: `
        <p><strong>Pathophysiology cascade:</strong></p>
        <ol>
          <li>Mitral valve leaflets thicken (myxomatous)</li>
          <li>Chordae tendineae elongate · may rupture</li>
          <li>Valve no longer coapts → mitral regurgitation (MR)</li>
          <li>Volume overload of LA + LV (eccentric hypertrophy)</li>
          <li>LA dilation → atrial fibrillation risk · pulmonary hypertension</li>
          <li>Pulmonary venous congestion → pulmonary edema → CHF</li>
          <li>Activation of RAAS → Na/water retention → worsening volume overload</li>
        </ol>

        <div class="mnemonic diagram">
          <span class="mnem-title">MMVD Cascade — "MAVE"</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">M</span>
              Mitral degeneration<br>
              <em>Leaflets thicken</em>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">A</span>
              Atrial enlargement (LA)<br>
              <em>From regurgitant volume</em>
            </div>
            <div class="diagram-box yellow">
              <span class="box-title">V</span>
              Ventricular dilation (LV)<br>
              <em>Eccentric hypertrophy</em>
            </div>
            <div class="diagram-box purple">
              <span class="box-title">E</span>
              Edema (pulmonary)<br>
              <em>= CHF · Stage C</em>
            </div>
          </div>
          <p class="mnem-tip">📌 RAAS activation throughout · drives progression<br>
          📌 ACE inhibitor + Spironolactone = block RAAS</p>
        </div>
      `,
      symptoms: `
        <p><strong>Stage-dependent presentation:</strong></p>
        <ul>
          <li><strong>Stage A-B1:</strong> Asymptomatic · only murmur on physical exam</li>
          <li><strong>Stage B2:</strong> Asymptomatic but cardiac remodeling on echo/rad</li>
          <li><strong>Stage C (CHF):</strong>
            <ul>
              <li>Cough (especially nocturnal · perihilar from LA pressure)</li>
              <li>Tachypnea (resting RR &gt; 30/min)</li>
              <li>Exercise intolerance</li>
              <li>Orthopnea</li>
              <li>Syncope (from arrhythmia or severe MR)</li>
              <li>Acute pulmonary edema → respiratory distress emergency</li>
            </ul>
          </li>
          <li><strong>Stage D:</strong> Refractory CHF · cardiac cachexia · cyanosis</li>
        </ul>

        <p><strong>Physical exam findings:</strong></p>
        <ul>
          <li>Holosystolic murmur · PMI L apex (5 ICS)</li>
          <li>Grade 2-3/6 early → 4-6/6 advanced</li>
          <li>Pulse: bounding (early) → weak (advanced CHF)</li>
          <li>Tachycardia + loss of sinus arrhythmia (sympathetic drive)</li>
          <li>Pulmonary crackles if edema</li>
          <li>Jugular distension if right-sided component (rare)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnostic workup:</strong></p>
        <ul>
          <li><strong>Auscultation</strong> — typical murmur (above)</li>
          <li><strong>Thoracic radiograph</strong>:
            <ul>
              <li>VHS (vertebral heart score) — &gt; 11.5 = enlarged · &gt; 12 = severe</li>
              <li>VLAS &gt; 3.0 = LA enlargement (sensitive marker)</li>
              <li>Perihilar/caudodorsal alveolar pattern = pulmonary edema</li>
              <li>Pulmonary venous distension</li>
            </ul>
          </li>
          <li><strong>Echocardiogram</strong> (gold standard):
            <ul>
              <li>Thickened/prolapsing mitral valve</li>
              <li>MR jet on color Doppler</li>
              <li>LA/Ao ≥ 1.6 = enlargement</li>
              <li>LVIDdN ≥ 1.7 = LV dilation (allometric)</li>
              <li>Preserved/hyperkinetic systolic function early</li>
            </ul>
          </li>
          <li><strong>NT-proBNP</strong> — useful when echo not immediately available</li>
          <li><strong>BP</strong> — baseline before ACE inhibitor</li>
          <li><strong>Renal panel + electrolytes</strong> — baseline before furosemide/ACEi</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">B2 Criteria — All 3 should be met (Bussadori)</span>
          <table>
            <tr><th>Parameter</th><th>Threshold</th></tr>
            <tr><td><strong>VHS</strong></td><td>≥ 11.5 (Cavalier ≥ 11.0)</td></tr>
            <tr><td><strong>LA/Ao ratio</strong></td><td>≥ 1.6</td></tr>
            <tr><td><strong>LVIDdN</strong></td><td>≥ 1.7 (allometric scaled)</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>EPIC criteria</strong> for starting pimobendan<br>
          📌 ทั้ง 3 ต้องผ่านถึงจะเป็น B2 · ถ้าไม่ครบ = B1</p>
        </div>
      `,
      differential: `
        <ul>
          <li><strong>DCM</strong> — large breeds · dilated LV with REDUCED FS</li>
          <li><strong>Endocarditis</strong> — fever, lameness, recent surgery, vegetative valve lesion</li>
          <li><strong>Pulmonary disease</strong> — chronic bronchitis, collapsing trachea (also cough)</li>
          <li><strong>Pericardial effusion</strong> — muffled heart sounds, distended jugular</li>
          <li><strong>Heartworm disease</strong> — exposure history, antigen test</li>
          <li><strong>Pulmonary hypertension</strong> — right-sided CHF signs</li>
          <li><strong>Mitral dysplasia</strong> — congenital · young dog</li>
        </ul>
      `,
      treatment: `
        <p><strong>Stage-based treatment (Bussadori + ACVIM 2019):</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Quadruple Therapy for Stage C — "FSAP"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">F</span>
              <span class="num-label">Furosemide 1-4 mg/kg q8-12h</span>
            </div>
            <div class="num-card">
              <span class="num-big">S</span>
              <span class="num-label">Spironolactone 2 mg/kg q12-24h</span>
            </div>
            <div class="num-card">
              <span class="num-big">A</span>
              <span class="num-label">ACEi (enalapril/benazepril) 0.5 mg/kg q12-24h</span>
            </div>
            <div class="num-card">
              <span class="num-big">P</span>
              <span class="num-label">Pimobendan 0.25-0.3 mg/kg q12h</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"FSAP" = Furosemide + Spironolactone + ACEi + Pimobendan</strong><br>
          📌 Pimobendan 1 hr before food (better absorption)<br>
          📌 CARING trial: spironolactone improves survival in MMVD</p>
        </div>

        <p><strong>Stage-specific:</strong></p>
        <ul>
          <li><strong>Stage A:</strong> No medication · monitor q6-12 mo</li>
          <li><strong>Stage B1:</strong> Echo q6-12 mo · NO medication</li>
          <li><strong>Stage B2:</strong> ⭐ <strong>Pimobendan 0.25-0.3 mg/kg PO q12h</strong> (EPIC trial) · ± ACEi (less evidence)</li>
          <li><strong>Stage C (acute hospitalized):</strong>
            <ul>
              <li>Oxygen therapy (40-60%)</li>
              <li>Furosemide 2-4 mg/kg IV/IM q1-2h until RR &lt; 40</li>
              <li>Pimobendan 0.25-0.3 mg/kg PO (or IV if available)</li>
              <li>Sedation (butorphanol) for stress reduction</li>
              <li>Avoid stress · minimal handling</li>
            </ul>
          </li>
          <li><strong>Stage C (chronic outpatient):</strong> FSAP combo above · titrate furosemide to RR &lt; 30</li>
          <li><strong>Stage D (refractory):</strong>
            <ul>
              <li>↑ furosemide or switch to <strong>torsemide</strong> (1/10 dose of furosemide)</li>
              <li>Add <strong>hydralazine</strong> 0.5-2 mg/kg q12h (afterload reduction)</li>
              <li>If pulmonary HT: <strong>sildenafil</strong> 1-2 mg/kg q8-12h</li>
              <li>Cardiac referral · consider mitral valve repair (specialty)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Resting RR (owner home log) — &gt; 30/min sleep = decompensation</li>
          <li>Renal panel + electrolytes 1 week after starting/changing diuretic + ACEi</li>
          <li>BP every 3-6 months</li>
          <li>Echo every 6-12 months</li>
          <li>NT-proBNP trending</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Acute CHF decompensation</strong> — emergency · 60-70% can be stabilized</li>
          <li><strong>Atrial fibrillation</strong> — from severe LA enlargement · diltiazem rate control</li>
          <li><strong>Chordae tendineae rupture</strong> — sudden severe MR · acute decompensation</li>
          <li><strong>Pulmonary hypertension</strong> — secondary · sildenafil</li>
          <li><strong>Cardiogenic shock</strong> — refractory CHF · poor prognosis</li>
          <li><strong>Cardiac cachexia</strong> — late-stage · prognosis poor</li>
          <li><strong>Sudden death</strong> — uncommon but possible (arrhythmia, rupture)</li>
          <li><strong>Pre-renal azotemia</strong> from over-diuresis</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Stage B1</strong> — many years (often die of other causes)</li>
          <li><strong>Stage B2 with pimo</strong> — 15+ months delay to CHF (EPIC)</li>
          <li><strong>Stage C</strong> — median survival 12-15 months with optimal Rx</li>
          <li><strong>Stage D</strong> — median 6 months · variable</li>
          <li>Cavalier breed: faster progression than other breeds</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 2 — Acquired Disease (Dog + Cat) — 7 entries
     ============================================================ */

  {
    id: 'card-dcm',
    titleEn: 'Dilated Cardiomyopathy (DCM)',
    titleTh: 'โรคกล้ามเนื้อหัวใจขยาย (DCM)',
    type: 'disease',
    system: 'acquired-dog',
    species: ['dog'],
    tags: ['DCM', 'dilated', 'Doberman', 'Boxer', 'systolic dysfunction', 'taurine'],
    aliases: ['idiopathic DCM', 'cardiomyopathy', 'หัวใจโต DCM'],
    source: 'Bussadori + Duque-Carrasco',
    sections: {
      definition: `
        <p><strong>Dilated Cardiomyopathy (DCM)</strong> — โรคหัวใจของหมาพันธุ์ใหญ่ที่พบบ่อยที่สุด · กล้ามเนื้อหัวใจอ่อนแรง + ขยาย → systolic dysfunction</p>
        <ul>
          <li>Primary myocardial disease (idiopathic / genetic)</li>
          <li>4-chamber dilation (LV เด่น) + reduced contractility (low FS, low EF)</li>
          <li>⭐ Predisposed breeds: <strong>Doberman Pinscher</strong> (40-60% lifetime), Boxer (ARVC variant), Great Dane, Irish Wolfhound, Newfoundland, Cocker Spaniel</li>
          <li>Age: middle-aged (3-7 yo Doberman · variable others)</li>
          <li>Male &gt; female (Doberman)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">DCM Stages — Doberman 3-Phase Model</span>
          <table>
            <tr><th>Stage</th><th>Echo</th><th>Holter</th><th>Treatment</th></tr>
            <tr><td><strong>Stage 1 (Occult electrical)</strong></td><td>Normal</td><td>VPCs &gt; 50/24h</td><td>None or sotalol if dangerous</td></tr>
            <tr><td><strong>Stage 2 (Occult morphologic)</strong></td><td>↑ LVIDd · ↓ FS</td><td>± VPCs</td><td>⭐ <strong>Pimobendan</strong> (PROTECT trial) · ± ACEi</td></tr>
            <tr><td><strong>Stage 3 (Overt CHF)</strong></td><td>Severe dilation · low FS</td><td>VPCs common</td><td>⭐ <strong>FSAP</strong> · ± antiarrhythmic</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>PROTECT trial</strong> (Summerfield 2012): pimobendan in occult Doberman DCM = +9 months until CHF<br>
          📌 Stage 1 (electrical only) → Holter screening valuable</p>
        </div>
      `,
      etiology: `
        <ul>
          <li><strong>Genetic (primary)</strong> — autosomal dominant in Doberman, Boxer ARVC (Striatin gene), Great Dane</li>
          <li><strong>Nutritional (secondary)</strong>:
            <ul>
              <li>⭐ <strong>Taurine deficiency</strong> — Cocker, Golden, ⚠️ <strong>Grain-free / BEG diet</strong> (FDA alert 2018)</li>
              <li>⭐ <strong>L-carnitine deficiency</strong> — Boxer, American Cocker</li>
            </ul>
          </li>
          <li><strong>Toxic</strong> — doxorubicin (chemo), Adriamycin</li>
          <li><strong>Infectious</strong> — Trypanosoma cruzi (Chagas, US southern), parvovirus (puppy), Bartonella</li>
          <li><strong>Endocrine</strong> — hypothyroidism (mild contribution)</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">FDA-DCM Alert — "BEG diet" mnemonic</span>
          <ul>
            <li><strong>B</strong>outique brand (small companies)</li>
            <li><strong>E</strong>xotic protein (kangaroo, alligator, etc.)</li>
            <li><strong>G</strong>rain-free (legumes/peas/lentils)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"BEG = Beg for trouble"</strong> · FDA 2018+ alert: ↑ DCM in non-traditional breeds<br>
          📌 Switch to grain-inclusive AAFCO diet · check taurine + Holter + echo<br>
          📌 Reversible if caught early + diet change</p>
        </div>
      `,
      pathophysiology: `
        <ol>
          <li>Myocyte dysfunction (genetic, nutritional, toxic)</li>
          <li>Reduced contractility (↓ FS, ↓ EF)</li>
          <li>↓ Stroke volume → compensatory ↑ HR, ↑ preload (RAAS)</li>
          <li>Eccentric hypertrophy → 4-chamber dilation</li>
          <li>Functional MR (annular dilation) → volume overload worsens</li>
          <li>Atrial enlargement → AFib risk · Pulmonary edema</li>
          <li>Ventricular arrhythmias from stretched/scarred myocardium → sudden death</li>
        </ol>

        <p><strong>Boxer ARVC variant:</strong></p>
        <ul>
          <li>Right ventricular fibro-fatty replacement (vs LV in classical DCM)</li>
          <li>VPCs predominant · syncope</li>
          <li>Striatin gene mutation</li>
          <li>Sudden death common</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Clinical presentation by stage:</strong></p>
        <ul>
          <li><strong>Stage 1-2 (occult):</strong> Asymptomatic · screening detection only</li>
          <li><strong>Stage 3 (overt CHF):</strong>
            <ul>
              <li>Exercise intolerance · weakness</li>
              <li>⭐ <strong>Syncope</strong> — VPC-related or AFib-related</li>
              <li>Cough (less than MMVD)</li>
              <li>Tachypnea · respiratory distress (pulmonary edema)</li>
              <li>Ascites if right-sided component</li>
              <li>Cardiac cachexia (weight loss)</li>
              <li>⚠️ <strong>Sudden death</strong> — particularly Doberman, Boxer</li>
            </ul>
          </li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Soft systolic murmur (functional MR · grade 2-3) at L apex — quieter than MMVD</li>
          <li>⭐ <strong>S3 gallop</strong> — diastolic ventricular filling sound (DCM hallmark)</li>
          <li>Pulse: weak · pulse deficit common (AFib)</li>
          <li>Tachycardia · loss of sinus arrhythmia</li>
          <li>Pulmonary crackles (CHF)</li>
          <li>Jugular distension if right-sided</li>
        </ul>
      `,
      diagnosis: `
        <ul>
          <li><strong>Echocardiogram</strong> (gold standard):
            <ul>
              <li>↑ LVIDd · LVIDs (severe dilation)</li>
              <li>↓ FS &lt; 25% (often 10-20%)</li>
              <li>↑ EPSS (E-point septal separation)</li>
              <li>Normal/thin LV wall</li>
              <li>LA enlargement</li>
              <li>± functional MR</li>
            </ul>
          </li>
          <li><strong>Holter (24-hr)</strong> — essential for occult DCM detection
            <ul>
              <li>Doberman: VPCs &gt; 100/24h = highly suspicious DCM</li>
              <li>Boxer ARVC: VPCs &gt; 100-300/24h</li>
              <li>Couplets, triplets, runs of VT = high risk sudden death</li>
            </ul>
          </li>
          <li><strong>NT-proBNP</strong> — elevated · trends with progression</li>
          <li><strong>Cardiac troponin I (cTnI)</strong> — myocardial damage marker</li>
          <li><strong>Thoracic radiograph</strong>: generalized cardiomegaly · pulmonary edema (Stage 3)</li>
          <li><strong>Taurine + L-carnitine levels</strong> — if BEG diet, Cocker, Golden, Boxer</li>
          <li><strong>Genetic testing</strong> — Doberman PDK4/Titin · Boxer striatin (commercial labs)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Doberman Screening — "Annual After Age 3"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">3+</span>
              <span class="num-label">Annual screening start age (yr)</span>
            </div>
            <div class="num-card">
              <span class="num-big">&gt;100</span>
              <span class="num-label">VPCs/24h = suspicious</span>
            </div>
            <div class="num-card">
              <span class="num-big">&lt;25%</span>
              <span class="num-label">FS = systolic dysfunction</span>
            </div>
            <div class="num-card">
              <span class="num-big">9 mo</span>
              <span class="num-label">Pimobendan delays CHF (PROTECT)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Echo + Holter + NT-proBNP annually · pre-clinical detection saves time<br>
          📌 Pimobendan benefits even in occult stage</p>
        </div>
      `,
      differential: `
        <ul>
          <li><strong>MMVD (advanced)</strong> — small breed · prolapsing valve · loud MR</li>
          <li><strong>Pericardial effusion</strong> — muffled sounds · POCUS</li>
          <li><strong>Endocarditis</strong> — fever · vegetative lesion</li>
          <li><strong>Heartworm disease</strong> — antigen positive · pulmonary signs</li>
          <li><strong>Hypothyroid cardiomyopathy</strong> — T4 low · resolves with Rx</li>
          <li><strong>Tachycardia-induced cardiomyopathy</strong> — chronic AFib · partially reversible</li>
          <li><strong>Doxorubicin cardiotoxicity</strong> — chemo history</li>
          <li><strong>Pulmonary hypertension</strong> — right-sided</li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment by stage:</strong></p>

        <ul>
          <li><strong>Stage 1 (electrical only):</strong>
            <ul>
              <li>Generally no medication unless dangerous arrhythmia</li>
              <li>Sotalol if VPCs &gt; 1000/24h, R-on-T, syncope</li>
              <li>Diet review (taurine, L-carnitine if breed-relevant)</li>
              <li>Annual rescreening</li>
            </ul>
          </li>
          <li><strong>Stage 2 (morphologic, occult):</strong>
            <ul>
              <li>⭐ <strong>Pimobendan 0.25-0.3 mg/kg PO q12h</strong> (PROTECT trial)</li>
              <li>± ACEi (benazepril 0.5 mg/kg q24h)</li>
              <li>Holter every 6 months</li>
              <li>Echo every 6-12 months</li>
            </ul>
          </li>
          <li><strong>Stage 3 (CHF):</strong>
            <ul>
              <li>⭐ Quadruple "FSAP": Furosemide + Spironolactone + ACEi + Pimobendan</li>
              <li>Antiarrhythmic if VT/frequent VPCs (sotalol 1-3 mg/kg q12h, mexiletine, amiodarone)</li>
              <li>AFib rate control: diltiazem 1-2 mg/kg q8h or digoxin (rare now)</li>
              <li>Severe: torsemide instead of furosemide · sildenafil for pulmonary HT</li>
            </ul>
          </li>
        </ul>

        <p><strong>Nutritional intervention:</strong></p>
        <ul>
          <li><strong>Taurine supplementation</strong> 500-1000 mg PO q12h (if low) — reversible if caught early</li>
          <li><strong>L-carnitine</strong> 50-100 mg/kg PO q8h (Boxer)</li>
          <li><strong>Diet change</strong> if BEG: switch to traditional grain-inclusive · re-echo 3-6 months</li>
          <li><strong>Omega-3 fatty acids</strong> (EPA/DHA) — anti-arrhythmic, anti-cachexia</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Sudden death</strong> — especially Doberman (40% sudden) and Boxer ARVC · VT</li>
          <li><strong>Atrial fibrillation</strong> — often precipitates CHF</li>
          <li><strong>Cardiogenic shock</strong> — refractory low output</li>
          <li><strong>Pulmonary hypertension</strong> — secondary to LA pressure</li>
          <li><strong>Cardiac cachexia</strong> — late stage</li>
          <li><strong>Thromboembolism</strong> — uncommon in dogs (vs cats) but possible with severe LA dilation</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Doberman occult</strong> — 1-3 years to CHF without Rx · longer with pimobendan</li>
          <li><strong>Doberman overt CHF</strong> — median 6-12 months</li>
          <li><strong>Cocker DCM</strong> — better with taurine supplementation (often reversible)</li>
          <li><strong>Boxer ARVC</strong> — sudden death predominant · sotalol reduces VT</li>
          <li><strong>Diet-associated DCM</strong> — partial/full reversal with diet change (if early)</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-pericardial',
    titleEn: 'Pericardial Disease + Cardiac Tamponade',
    titleTh: 'โรคเยื่อหุ้มหัวใจ + Tamponade',
    type: 'disease',
    system: 'acquired-dog',
    species: ['dog', 'cat'],
    tags: ['pericardial effusion', 'tamponade', 'hemangiosarcoma', 'pericardiocentesis', 'POCUS'],
    aliases: ['pericardial effusion', 'tamponade', 'เยื่อหุ้มหัวใจ'],
    source: 'Bussadori + Duque-Carrasco',
    sections: {
      definition: `
        <p><strong>Pericardial disease</strong> — fluid (effusion) หรือ mass สะสมใน pericardial sac → impaired cardiac filling → tamponade</p>
        <ul>
          <li><strong>Pericardial effusion</strong> = fluid in pericardial sac</li>
          <li><strong>Cardiac tamponade</strong> = effusion → ↑ pericardial pressure → impaired RV filling → low CO → shock</li>
          <li><strong>Constrictive pericarditis</strong> = thickened/fibrosed pericardium → restricted filling (rare)</li>
          <li>⭐ Most common in <strong>large breed older dogs</strong> (Golden Retriever, GSD, Saint Bernard)</li>
          <li>Cat: rare · usually associated with FIP, lymphoma, CHF</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Pericardial Effusion — Major Causes</span>
          <table>
            <tr><th>Cause</th><th>Frequency Dog</th><th>Notes</th></tr>
            <tr><td><strong>Hemangiosarcoma (HSA)</strong></td><td>~50% — #1 cause</td><td>⭐ Right atrial mass · Golden, GSD · poor prognosis</td></tr>
            <tr><td><strong>Heart base tumor (chemodectoma)</strong></td><td>~25%</td><td>Brachycephalic (Boxer, English Bulldog) · slower growth</td></tr>
            <tr><td><strong>Idiopathic (benign)</strong></td><td>~15%</td><td>Diagnosis of exclusion · pericardiectomy if recurrent</td></tr>
            <tr><td><strong>Mesothelioma</strong></td><td>~5%</td><td>Diffuse · cytology often negative · fluid recurs after pericardectomy</td></tr>
            <tr><td><strong>CHF-related (transudate)</strong></td><td>Uncommon</td><td>Right CHF · DCM · resolves with CHF Rx</td></tr>
            <tr><td><strong>Infectious (FIP, bacterial)</strong></td><td>Cat predominant</td><td>Cat: FIP common · Dog: rare bacterial</td></tr>
            <tr><td><strong>Trauma / coagulopathy</strong></td><td>Variable</td><td>Rodenticide · Hx</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Golden Retriever + pericardial effusion = HSA until proven otherwise</strong><br>
          📌 ⭐ <strong>"3 main causes in dogs":</strong> HSA &gt; chemodectoma &gt; idiopathic</p>
        </div>
      `,
      etiology: `
        <ul>
          <li><strong>Neoplastic (most common)</strong>:
            <ul>
              <li>Hemangiosarcoma (right atrium/auricle)</li>
              <li>Chemodectoma (heart base, aortic body)</li>
              <li>Mesothelioma (diffuse pericardium)</li>
              <li>Lymphoma (cat especially)</li>
              <li>Ectopic thyroid carcinoma</li>
            </ul>
          </li>
          <li><strong>Idiopathic benign pericardial effusion</strong> — middle-aged large breed</li>
          <li><strong>Infectious</strong> — FIP (cat), bacterial (rare), fungal</li>
          <li><strong>Cardiogenic transudate</strong> — right CHF, DCM</li>
          <li><strong>Coagulopathy</strong> — rodenticide, DIC</li>
          <li><strong>Trauma</strong> — chest trauma, foreign body migration</li>
          <li><strong>Uremia</strong> (rare)</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Fluid/mass accumulates in pericardial sac</li>
          <li>↑ pericardial pressure</li>
          <li>When pressure exceeds RA pressure → RA collapse during diastole</li>
          <li>Reduced venous return → reduced RV filling → reduced LV filling</li>
          <li>↓ Stroke volume → ↓ Cardiac output</li>
          <li>Compensation: tachycardia, vasoconstriction</li>
          <li>If unrelieved → cardiogenic shock → death</li>
        </ol>

        <div class="mnemonic thai">
          <span class="mnem-title">Tamponade Hemodynamics</span>
          <ul>
            <li>RA pressure ↑ (back pressure to vena cava)</li>
            <li>JVP elevated (jugular distension)</li>
            <li>RV filling ↓ → LV filling ↓</li>
            <li>Stroke volume ↓ → CO ↓</li>
            <li>HR ↑ (compensatory tachycardia)</li>
            <li>BP initially maintained → eventually drops</li>
            <li>Pulsus paradoxus (variation with breathing) — late sign</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Pre-shock":</strong> patient looks distressed but BP normal — high HR + JVP elevated = tamponade until proven otherwise<br>
          📌 ใน cat: tamponade rare แต่ถ้าเกิด → เร็ว, severe</p>
        </div>
      `,
      symptoms: `
        <p><strong>Acute tamponade presentation:</strong></p>
        <ul>
          <li><strong>Sudden collapse / weakness</strong></li>
          <li><strong>Exercise intolerance</strong></li>
          <li><strong>Tachypnea / dyspnea</strong></li>
          <li><strong>Distended abdomen</strong> (ascites from chronic right CHF)</li>
          <li>Pale mucous membranes</li>
          <li>Cold extremities (low perfusion)</li>
        </ul>

        <p><strong>Physical exam — CLASSIC findings:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Tamponade Classic Triad — "Beck's Triad" (modified)</span>
          <ul>
            <li><strong>Muffled heart sounds</strong> (fluid surrounds heart)</li>
            <li><strong>Distended jugular veins</strong> (↑ central venous pressure)</li>
            <li><strong>Hypotension</strong> + weak pulse + tachycardia</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Muffled · JVD · Hypotension"</strong><br>
          📌 + <strong>Pulsus paradoxus</strong> (BP drops &gt; 10 mmHg on inspiration)<br>
          📌 ฟังเสียงหัวใจเงียบ + JVD = pericardiocentesis emergency!</p>
        </div>

        <p><strong>Other findings:</strong></p>
        <ul>
          <li>Ascites (right-sided CHF picture)</li>
          <li>Hepatomegaly</li>
          <li>Sinus tachycardia (compensatory)</li>
          <li>Electrical alternans on ECG (heart swinging in fluid)</li>
          <li>Small-amplitude QRS (low voltage)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnostic workup — speed essential:</strong></p>
        <ul>
          <li>⭐ <strong>POCUS (point-of-care echo)</strong> — fastest · diagnostic in seconds
            <ul>
              <li>Anechoic space surrounding heart</li>
              <li>RA collapse during diastole = tamponade physiology</li>
              <li>Mass identification (right atrial HSA, heart base)</li>
            </ul>
          </li>
          <li><strong>Thoracic radiograph</strong>:
            <ul>
              <li>Globoid "basketball" cardiac silhouette</li>
              <li>Sharp cardiac borders (no pulmonary venous distension)</li>
              <li>"Tin can" appearance lateral view</li>
              <li>Pleural effusion possible</li>
              <li>Caudal vena cava distension</li>
            </ul>
          </li>
          <li><strong>ECG</strong>:
            <ul>
              <li>Sinus tachycardia</li>
              <li>Low-amplitude QRS (&lt; 1 mV in lead II for medium dog)</li>
              <li>Electrical alternans (alternating R wave amplitude) — pathognomonic but not always present</li>
            </ul>
          </li>
          <li><strong>Full echocardiogram (post-stabilization)</strong> — characterize mass, function</li>
          <li><strong>Pericardial fluid analysis</strong>:
            <ul>
              <li>Color: serosanguineous (HSA, idiopathic) · clear (transudate) · cloudy (infection)</li>
              <li>Cytology: rarely diagnostic for HSA · helpful for lymphoma, infection</li>
              <li>PCV vs systemic PCV: similar = neoplastic/hemorrhagic · lower = transudate</li>
              <li>Culture if cloudy</li>
            </ul>
          </li>
          <li><strong>Coagulation panel</strong> if rodenticide possible</li>
          <li><strong>Abdominal ultrasound</strong> — splenic mass (HSA staging — concurrent splenic mass common)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>DCM with right CHF</strong> — usually echo distinguishes</li>
          <li><strong>Pleural effusion</strong> — different distribution</li>
          <li><strong>Hypovolemic shock</strong> — collapsed jugulars, no fluid</li>
          <li><strong>Anaphylaxis</strong> — different exam findings</li>
          <li><strong>GDV</strong> — abdominal · radiographic appearance distinct</li>
          <li><strong>Pulmonary thromboembolism</strong> — dyspnea + collapse but no effusion</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute tamponade — pericardiocentesis is LIFE-SAVING:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Pericardiocentesis Procedure</span>
          <ul>
            <li><strong>Position:</strong> Right lateral or sternal recumbency</li>
            <li><strong>Site:</strong> Right 5th ICS, costochondral junction (avoid coronary on left)</li>
            <li><strong>Equipment:</strong> 16-18G IV catheter or specialized pericardiocentesis needle, ultrasound guidance ideal, ECG attached</li>
            <li><strong>Local block</strong> with lidocaine (skin + intercostal)</li>
            <li><strong>Light sedation</strong> (avoid hypotensive agents — opioid only) — many cases tolerate awake with restraint</li>
            <li><strong>Insert</strong> with continuous aspiration · aim cranio-medial</li>
            <li><strong>Drain</strong> as much as possible · 2-3-way stopcock</li>
            <li><strong>Save fluid</strong> for cytology, culture, PCV/biochem</li>
          </ul>
          <p class="mnem-tip">📌 ⚠️ Watch ECG — VPCs = tip touching myocardium → withdraw slightly<br>
          📌 If blood doesn't clot → pericardial origin (defibrinated)<br>
          📌 If blood clots → ventricular puncture — STOP, withdraw, reposition</p>
        </div>

        <p><strong>Post-pericardiocentesis:</strong></p>
        <ul>
          <li>IV fluids — volume support (avoid before drainage — worsens tamponade)</li>
          <li>Oxygen if dyspneic</li>
          <li>Recheck cardiac function after drainage</li>
          <li>Treat underlying cause</li>
          <li>Monitor for recurrence</li>
        </ul>

        <p><strong>Definitive treatment by cause:</strong></p>
        <ul>
          <li><strong>HSA (right atrium):</strong> 
            <ul>
              <li>Surgery + chemotherapy (doxorubicin) — median 4-6 months</li>
              <li>Pericardiectomy palliative — relieves recurring tamponade</li>
              <li>Toceranib (Palladia) emerging</li>
            </ul>
          </li>
          <li><strong>Heart base tumor (chemodectoma):</strong>
            <ul>
              <li>Pericardiectomy → median &gt; 1 year survival</li>
              <li>Toceranib option</li>
              <li>Slower growth than HSA</li>
            </ul>
          </li>
          <li><strong>Idiopathic effusion:</strong>
            <ul>
              <li>1-2 pericardiocenteses · 50% resolve</li>
              <li>If recurrent → pericardiectomy (subtotal or total) → curative</li>
            </ul>
          </li>
          <li><strong>Mesothelioma:</strong> 
            <ul>
              <li>Pericardiectomy → fluid recurs in pleural space</li>
              <li>Intracavitary chemotherapy (carboplatin)</li>
              <li>Poor prognosis</li>
            </ul>
          </li>
          <li><strong>CHF transudate:</strong> Treat underlying CHF (FSAP)</li>
          <li><strong>Bacterial:</strong> Drainage + culture-guided antibiotics</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pericardiocentesis complications</strong>: ventricular puncture, coronary laceration, pneumothorax, arrhythmias</li>
          <li><strong>Recurrent tamponade</strong> — common (HSA · idiopathic)</li>
          <li><strong>Constrictive pericarditis</strong> — late complication of chronic effusion</li>
          <li><strong>Right CHF</strong> from chronic high RA pressure</li>
          <li><strong>Sudden death</strong> from RA HSA rupture</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>HSA:</strong> 4-6 months with surgery + chemo · 2 weeks no Rx</li>
          <li><strong>Chemodectoma:</strong> &gt; 1 year with pericardiectomy</li>
          <li><strong>Idiopathic:</strong> Good with pericardiectomy · 50% resolve with 1-2 taps</li>
          <li><strong>Mesothelioma:</strong> Months · poor</li>
          <li><strong>Tamponade unrelieved:</strong> Death within hours</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-endocarditis',
    titleEn: 'Infective Endocarditis',
    titleTh: 'การติดเชื้อลิ้นหัวใจ (Endocarditis)',
    type: 'disease',
    system: 'acquired-dog',
    species: ['dog', 'cat'],
    tags: ['endocarditis', 'vegetative lesion', 'aortic valve', 'mitral valve', 'bacteremia', 'infection'],
    aliases: ['IE', 'bacterial endocarditis', 'ลิ้นหัวใจอักเสบ'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Infective Endocarditis (IE)</strong> — bacterial infection of cardiac valves with vegetative lesion formation</p>
        <ul>
          <li>Uncommon (&lt; 1% of cardiac dz) but life-threatening</li>
          <li>Usually involves <strong>aortic valve (most common)</strong> or mitral valve</li>
          <li>⭐ Vegetations = bacteria + fibrin + platelets + WBC accumulation on valve</li>
          <li>Predisposed: large breed dogs · medium-aged · male &gt; female</li>
          <li>Cat: very rare</li>
        </ul>
      `,
      etiology: `
        <p><strong>Pathogens (dog):</strong></p>
        <ul>
          <li><strong>Bartonella spp.</strong> (B. vinsonii subsp. berkhoffii) — emerging cause · subacute</li>
          <li><strong>Streptococcus spp.</strong> (S. canis, viridans group)</li>
          <li><strong>Staphylococcus spp.</strong> (S. pseudintermedius, S. aureus)</li>
          <li><strong>Escherichia coli</strong></li>
          <li><strong>Pseudomonas aeruginosa</strong></li>
          <li><strong>Erysipelothrix rhusiopathiae</strong> (uncommon)</li>
        </ul>

        <p><strong>Risk factors / sources of bacteremia:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Sources of Endocarditis — "DUST"</span>
          <ul>
            <li><strong>D</strong>ental disease + procedures (dental cleaning without abx)</li>
            <li><strong>U</strong>rinary infection (UTI, prostatitis, pyelonephritis)</li>
            <li><strong>S</strong>kin/soft tissue infection (abscess, deep pyoderma)</li>
            <li><strong>T</strong>ick-borne (Bartonella from cat scratch / tick exposure)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Pre-existing valvular dz</strong> (SAS, MMVD) ↑ risk<br>
          📌 IV catheters, immunosuppression, surgery — also risk<br>
          📌 ⭐ Most common: Subaortic stenosis (SAS) → high-velocity jet damages aortic valve → bacteria attach</p>
        </div>
      `,
      pathophysiology: `
        <ol>
          <li>Bacteremia from primary source (DUST)</li>
          <li>Bacteria attach to damaged/abnormal valve endothelium</li>
          <li>Platelets + fibrin accumulate → vegetation forms</li>
          <li>Vegetation grows → valve dysfunction (regurgitation primarily)</li>
          <li>Septic emboli shed → systemic embolization (kidney, spleen, brain, joints, etc.)</li>
          <li>Continuous bacteremia → fever, immune complex deposition</li>
          <li>Volume overload → CHF</li>
          <li>Severe valve damage → rupture, abscess, conduction disturbance</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Variable presentation — "great mimicker":</strong></p>
        <ul>
          <li><strong>Fever</strong> (often intermittent · "fever of unknown origin")</li>
          <li><strong>Lethargy · weakness · anorexia</strong></li>
          <li><strong>Lameness</strong> (immune-mediated polyarthritis or septic emboli)</li>
          <li><strong>Cardiac signs:</strong>
            <ul>
              <li>NEW murmur (especially diastolic at L base = aortic regurgitation = high suspicion!)</li>
              <li>Loud systolic murmur (mitral)</li>
              <li>CHF signs if severe</li>
            </ul>
          </li>
          <li><strong>Embolic signs</strong> — sudden lameness, neurologic signs, kidney pain, splenic infarct</li>
          <li><strong>Heart failure</strong> — late</li>
          <li><strong>Sudden death</strong> from valve rupture or massive embolus</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Endocarditis Clinical Triad — Suspicious If:</span>
          <ul>
            <li><strong>Fever</strong> (especially intermittent, recurrent)</li>
            <li><strong>NEW heart murmur</strong> (or change from baseline)</li>
            <li><strong>Lameness or systemic signs</strong> (anorexia, weight loss)</li>
          </ul>
          <p class="mnem-tip">📌 <strong>"Fever + new murmur = endocarditis until proven otherwise"</strong><br>
          📌 Diastolic murmur (rare in dogs) = aortic regurgitation → endocarditis very likely<br>
          📌 Schedule emergent echo + blood cultures</p>
        </div>
      `,
      diagnosis: `
        <p><strong>Modified Duke criteria (adapted for dogs):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Diagnosis — Major + Minor Criteria</span>
          <table>
            <tr><th>Major Criteria</th><th>Minor Criteria</th></tr>
            <tr>
              <td>
                ⭐ Echo evidence:<br>
                • Vegetation<br>
                • Valve abscess<br>
                • New valve dehiscence<br>
                • New regurgitation
              </td>
              <td>
                • Fever &gt; 39.5°C<br>
                • Predisposing condition (SAS, etc.)<br>
                • Vascular phenomena (emboli)<br>
                • Immunologic (polyarthritis, GN)
              </td>
            </tr>
            <tr>
              <td>
                ⭐ Positive blood culture<br>
                (typical organism, ≥ 2 separate cultures)
              </td>
              <td>
                • Single positive culture<br>
                • Suggestive but not diagnostic echo
              </td>
            </tr>
          </table>
          <p class="mnem-tip">📌 <strong>Definite IE:</strong> 2 major OR 1 major + 3 minor OR 5 minor<br>
          📌 <strong>Possible IE:</strong> 1 major + 1 minor OR 3 minor<br>
          📌 ⭐ Echo + blood cultures = cornerstone diagnosis</p>
        </div>

        <p><strong>Diagnostic workup:</strong></p>
        <ul>
          <li><strong>Echocardiogram</strong> (essential):
            <ul>
              <li>Vegetative lesions (irregular hyperechoic mass on valve)</li>
              <li>Valve regurgitation (color Doppler)</li>
              <li>Most often AORTIC valve (vs MMVD = mitral)</li>
              <li>TEE more sensitive (rarely available in vet)</li>
            </ul>
          </li>
          <li><strong>Blood cultures</strong> — 3 sets from different sites, 1 hour apart, BEFORE antibiotics
            <ul>
              <li>Aerobic + anaerobic bottles</li>
              <li>Bartonella PCR (specific serology)</li>
              <li>~50-60% positive (false negatives common)</li>
            </ul>
          </li>
          <li><strong>CBC</strong> — neutrophilic leukocytosis with left shift, mild anemia</li>
          <li><strong>Chemistry</strong> — azotemia (renal embolus), elevated globulins, ALP/ALT</li>
          <li><strong>Urinalysis</strong> — proteinuria, pyuria, hematuria (renal emboli, GN)</li>
          <li><strong>Coag panel</strong> — DIC possible</li>
          <li><strong>Joint tap</strong> if polyarthritis</li>
          <li><strong>Bartonella IFA + PCR</strong> — specifically request</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>MMVD with new arrhythmia</strong> — usually no fever, slowly progressive</li>
          <li><strong>DCM</strong> — dilated chambers · echo distinguishes</li>
          <li><strong>Pericardial dz</strong> — different exam</li>
          <li><strong>Discospondylitis</strong> (back pain + fever)</li>
          <li><strong>Immune-mediated polyarthritis</strong> alone</li>
          <li><strong>Tick-borne disease</strong> (Ehrlichia, Anaplasma)</li>
          <li><strong>Pyometra</strong> (intact female)</li>
          <li><strong>Neoplasia</strong> with fever + systemic signs</li>
        </ul>
      `,
      treatment: `
        <p><strong>Antibiotic therapy — long-term IV/PO:</strong></p>
        <ul>
          <li><strong>Empirical pre-culture</strong>: ampicillin + gentamicin OR ampicillin + enrofloxacin</li>
          <li><strong>Culture-guided</strong>: based on sensitivities</li>
          <li><strong>Duration:</strong> 6-8 weeks IV, then PO 6-12+ weeks total (up to lifelong if Bartonella)</li>
          <li><strong>Bartonella:</strong> doxycycline + enrofloxacin OR doxycycline + azithromycin · 6+ months</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Empirical Antibiotic Choices</span>
          <ul>
            <li><strong>Bactericidal essential</strong> (vegetation hard to penetrate)</li>
            <li><strong>Combination therapy</strong> often used</li>
            <li><strong>Aminoglycoside + beta-lactam</strong> classic synergy (with renal monitoring)</li>
            <li><strong>Bartonella suspected</strong> → add doxycycline</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>Pulse high-dose IV first 1-2 weeks</strong> · then long-term oral<br>
          📌 Repeat blood cultures after 1 week to confirm sterilization<br>
          📌 Repeat echo monthly to monitor vegetation regression</p>
        </div>

        <p><strong>Adjunctive treatment:</strong></p>
        <ul>
          <li>CHF management if heart failure (FSAP)</li>
          <li>Antiarrhythmic if ventricular arrhythmia</li>
          <li>Anticoagulation? — controversial · clopidogrel sometimes used to prevent embolism</li>
          <li>Pain management (NSAIDs cautious if renal compromise)</li>
          <li>Supportive care · IV fluids · nutrition</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>CHF</strong> — common, often fatal</li>
          <li><strong>Septic emboli</strong> — kidney (renal infarction), spleen, brain (stroke), digits (necrosis)</li>
          <li><strong>Valve rupture</strong> — sudden severe regurgitation, acute decompensation</li>
          <li><strong>AV block / arrhythmias</strong> from septal abscess extension</li>
          <li><strong>Glomerulonephritis</strong> (immune complex) → chronic kidney disease</li>
          <li><strong>Polyarthritis</strong></li>
          <li><strong>Treatment failure</strong> · relapse</li>
          <li><strong>Sudden death</strong></li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Aortic valve IE:</strong> Poor · median 3-12 months · CHF main cause death</li>
          <li><strong>Mitral valve IE:</strong> Better with treatment · median 1+ year possible</li>
          <li><strong>Bartonella:</strong> Variable · long-term Rx may be curative</li>
          <li><strong>Without treatment:</strong> Almost universally fatal</li>
          <li><strong>Pre-existing SAS:</strong> Worse outcome</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-pulmonary-ht',
    titleEn: 'Pulmonary Hypertension',
    titleTh: 'ภาวะความดันปอดสูง (PHT)',
    type: 'disease',
    system: 'acquired-dog',
    species: ['dog', 'cat'],
    tags: ['pulmonary hypertension', 'PHT', 'sildenafil', 'right CHF', 'cor pulmonale'],
    aliases: ['PHT', 'pulmonary HTN', 'cor pulmonale'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Pulmonary Hypertension (PHT)</strong> — elevated pressure in pulmonary arterial circulation</p>
        <ul>
          <li>Definition: estimated systolic pulmonary artery pressure (sPAP) &gt; 30-35 mmHg by echo</li>
          <li>Severe: sPAP &gt; 60-70 mmHg</li>
          <li>Estimated by tricuspid regurgitation (TR) jet velocity using Bernoulli (4V²)</li>
          <li>Common in older small breeds with chronic respiratory or cardiac disease</li>
          <li>Cat: less common, often associated with HCM or chronic respiratory dz</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">PHT Severity by sPAP (Echo TR estimate)</span>
          <table>
            <tr><th>Severity</th><th>sPAP (mmHg)</th><th>TR jet velocity (m/s)</th></tr>
            <tr><td><strong>Normal</strong></td><td>&lt; 30</td><td>&lt; 2.8</td></tr>
            <tr><td><strong>Mild</strong></td><td>30-50</td><td>2.8-3.5</td></tr>
            <tr><td><strong>Moderate</strong></td><td>50-75</td><td>3.5-4.3</td></tr>
            <tr><td><strong>Severe</strong></td><td>&gt; 75</td><td>&gt; 4.3</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Bernoulli:</strong> sPAP = 4×(TR velocity)² + RAP estimate (~5 mmHg)<br>
          📌 Severe PHT (&gt; 60-75 mmHg) → sildenafil indicated</p>
        </div>
      `,
      etiology: `
        <p><strong>WHO Classification (adapted for veterinary):</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">PHT Causes — 5 Groups</span>
          <ul>
            <li><strong>Group 1 — Pulmonary arterial hypertension (PAH)</strong>: idiopathic, drug-induced, congenital shunts</li>
            <li><strong>Group 2 — Left heart disease</strong>: ⭐ Most common in dogs · MMVD, DCM, mitral stenosis</li>
            <li><strong>Group 3 — Lung disease/hypoxia</strong>: chronic bronchitis, fibrosis, brachycephalic syndrome, pulmonary thromboembolism, high altitude</li>
            <li><strong>Group 4 — Pulmonary thromboembolism / heartworm disease</strong></li>
            <li><strong>Group 5 — Multifactorial / unclear</strong></li>
          </ul>
          <p class="mnem-tip">📌 <strong>Most common in dogs:</strong> Group 2 (left CHF) → Group 3 (chronic respiratory)<br>
          📌 ⭐ <strong>Heartworm disease</strong> = Group 4 — important in endemic regions</p>
        </div>

        <p><strong>Common causes by group:</strong></p>
        <ul>
          <li>Group 2: MMVD (especially Cavalier KCS), DCM</li>
          <li>Group 3: Chronic bronchitis, idiopathic pulmonary fibrosis (West Highland White Terrier!), brachycephalic obstructive syndrome (BOAS)</li>
          <li>Group 4: Heartworm, pulmonary thromboembolism (PTE)</li>
          <li>Group 5: PDA, sepsis, hyperadrenocorticism (PTE risk)</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Increased pulmonary vascular resistance OR pulmonary venous hypertension</li>
          <li>↑ RV afterload</li>
          <li>RV pressure overload → concentric RV hypertrophy → eventual dilation</li>
          <li>Right atrial enlargement</li>
          <li>Tricuspid regurgitation develops</li>
          <li>Right CHF → ascites, hepatic congestion</li>
          <li>Reduced LV preload → low CO → exercise intolerance, syncope</li>
          <li>Severe: arterial hypoxemia, cyanosis</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Clinical signs:</strong></p>
        <ul>
          <li>⭐ <strong>Exercise intolerance</strong> · weakness</li>
          <li>⭐ <strong>Syncope</strong> (especially with exertion)</li>
          <li>Cough (often from underlying disease, not PHT directly)</li>
          <li>Tachypnea / dyspnea</li>
          <li>Cyanosis with exertion</li>
          <li><strong>Ascites</strong> (right CHF · late)</li>
          <li>Lethargy · failure to thrive</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Tachypnea</li>
          <li>Right-sided systolic murmur (TR · grade 1-3) at right hemithorax</li>
          <li>Loud P2 (pulmonic component of S2)</li>
          <li>Right ventricular heave (palpable on right hemithorax)</li>
          <li>Jugular distension/pulsation</li>
          <li>Hepatomegaly · ascites</li>
          <li>Cyanosis post-exercise</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Echocardiogram — gold standard non-invasive:</strong></p>
        <ul>
          <li>⭐ <strong>TR jet velocity</strong> → estimate sPAP (Bernoulli: 4V²)</li>
          <li>RV hypertrophy + dilation</li>
          <li>RA enlargement</li>
          <li>Septal flattening (D-shaped LV) — RV pressure overload</li>
          <li>Pulmonary regurgitation jet → estimate diastolic PAP</li>
          <li>Underlying disease (MMVD, DCM, etc.) identified</li>
        </ul>

        <p><strong>Other investigations:</strong></p>
        <ul>
          <li><strong>Thoracic radiograph:</strong>
            <ul>
              <li>Enlarged main pulmonary artery (bulge at 1-2 o'clock VD)</li>
              <li>Truncated, blunted pulmonary arteries</li>
              <li>RV enlargement (reverse-D shape)</li>
              <li>Underlying lung disease patterns</li>
            </ul>
          </li>
          <li><strong>Heartworm test</strong> — antigen + microfilaria (essential in endemic areas)</li>
          <li><strong>D-dimer / coag</strong> if PTE suspected</li>
          <li><strong>Arterial blood gas</strong> (referral)</li>
          <li><strong>Chest CT</strong> for PTE, fibrosis (referral)</li>
          <li><strong>Right heart cath</strong> — definitive (rare in vet)</li>
          <li><strong>NT-proBNP</strong> elevated</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Left CHF</strong> alone — workup distinguishes</li>
          <li><strong>Pericardial effusion</strong></li>
          <li><strong>Tricuspid dysplasia</strong> (congenital)</li>
          <li><strong>Pulmonic stenosis</strong> (congenital)</li>
          <li><strong>Heartworm disease</strong> primary</li>
          <li><strong>Atrial septal defect</strong></li>
          <li><strong>Reverse PDA / Eisenmenger</strong></li>
        </ul>
      `,
      treatment: `
        <p><strong>Treat underlying cause first:</strong></p>
        <ul>
          <li>Group 2 (left CHF): optimize CHF Rx (FSAP)</li>
          <li>Group 3 (lung dz): bronchodilator, anti-inflammatory, BOAS surgery</li>
          <li>Group 4 (heartworm): adulticide protocol, doxycycline</li>
          <li>Group 4 (PTE): anticoagulation</li>
        </ul>

        <p><strong>Specific PHT therapy:</strong></p>
        <ul>
          <li>⭐ <strong>Sildenafil (Viagra)</strong> 1-3 mg/kg PO q8-12h
            <ul>
              <li>PDE-5 inhibitor → pulmonary vasodilation</li>
              <li>Indications: severe PHT (sPAP &gt; 60), syncope, refractory right CHF</li>
              <li>Improves quality of life · doesn't change long-term survival</li>
              <li>Side effects: hypotension, flushing</li>
            </ul>
          </li>
          <li><strong>Tadalafil</strong> alternative (longer half-life · less data in vet)</li>
          <li><strong>Pimobendan</strong> — useful adjunct (vasodilation + inotropy)</li>
          <li><strong>Diuretics</strong> (furosemide) for right CHF / ascites</li>
          <li><strong>ACE inhibitors</strong> — controversial in pure PHT · OK if left dz coexists</li>
          <li><strong>Oxygen</strong> for acute crisis</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Sildenafil Dosing</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1-3</span>
              <span class="num-label">mg/kg PO q8-12h</span>
            </div>
            <div class="num-card">
              <span class="num-big">2.5</span>
              <span class="num-label">Common starting dose mg/kg q8h</span>
            </div>
            <div class="num-card">
              <span class="num-big">25 mg</span>
              <span class="num-label">Smallest tablet · split for small dogs</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Start lower dose · titrate up<br>
          📌 ⭐ Owner: clinical improvement (less syncope, better exercise) within 1-2 weeks<br>
          📌 No specific monitoring labs · echo recheck 4-8 weeks</p>
        </div>
      `,
      complications: `
        <ul>
          <li><strong>Right-sided CHF</strong> with ascites</li>
          <li><strong>Syncope episodes</strong> (exertional)</li>
          <li><strong>Sudden death</strong> from severe PHT</li>
          <li><strong>Refractory ascites</strong></li>
          <li><strong>Cardiac cachexia</strong></li>
          <li><strong>Underlying disease progression</strong></li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Mild PHT (Group 2):</strong> Generally good with CHF Rx</li>
          <li><strong>Severe PHT:</strong> Median 6-12 months · improved with sildenafil</li>
          <li><strong>Group 3 (chronic lung dz):</strong> Variable · pulmonary fibrosis poor</li>
          <li><strong>Group 4 (heartworm):</strong> Improves with adulticide</li>
          <li><strong>WHWT idiopathic pulmonary fibrosis:</strong> Poor · 6-12 months</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-heartworm',
    titleEn: 'Heartworm Disease (Cardiac)',
    titleTh: 'พยาธิหัวใจ — ผลต่อหัวใจ',
    type: 'disease',
    system: 'acquired-dog',
    species: ['dog', 'cat'],
    tags: ['heartworm', 'Dirofilaria immitis', 'caval syndrome', 'melarsomine', 'doxycycline', 'pulmonary HT'],
    aliases: ['heartworm', 'Dirofilaria', 'พยาธิหัวใจ'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Heartworm Disease</strong> — infection with <em>Dirofilaria immitis</em> · adult worms reside in pulmonary arteries and right heart</p>
        <ul>
          <li>Mosquito-transmitted nematode (microfilariae → L3 in mosquito → infective)</li>
          <li>⭐ Endemic in tropical/subtropical regions including Thailand</li>
          <li>Cardiac effects: pulmonary hypertension, right CHF, caval syndrome</li>
          <li>Adult worm length: 15-30 cm · lifespan 5-7 years (dogs)</li>
          <li>Cat: aberrant host · low worm burden but severe inflammation (HARD syndrome)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">AHS Heartworm Classification — Dog</span>
          <table>
            <tr><th>Class</th><th>Clinical Signs</th><th>Imaging</th></tr>
            <tr><td><strong>Class 1</strong> (mild)</td><td>Asymptomatic or mild cough</td><td>± mild pulmonary changes</td></tr>
            <tr><td><strong>Class 2</strong> (moderate)</td><td>Cough, exercise intolerance</td><td>Pulmonary artery enlargement, RV enlargement</td></tr>
            <tr><td><strong>Class 3</strong> (severe)</td><td>Cachexia, syncope, ascites, dyspnea</td><td>Severe RV enlargement, right CHF</td></tr>
            <tr><td><strong>Class 4 (Caval syndrome)</strong></td><td>⚠️ Acute collapse, hemoglobinuria</td><td>Massive worm burden in RA/RV/vena cava — emergency surgery</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Class 4 = Caval syndrome</strong> = surgical emergency · transvenous worm extraction<br>
          📌 Hemoglobinuria from RBC destruction in tricuspid valve area</p>
        </div>
      `,
      etiology: `
        <ul>
          <li><strong>Vector:</strong> Many mosquito species (Aedes, Culex, Anopheles)</li>
          <li><strong>Geographic:</strong> Tropical/subtropical · ⭐ <strong>Thailand high endemicity</strong></li>
          <li><strong>Risk factors:</strong>
            <ul>
              <li>Outdoor exposure</li>
              <li>No prevention</li>
              <li>Tropical climate</li>
              <li>Wildlife reservoirs (foxes, coyotes)</li>
            </ul>
          </li>
          <li><strong>Wolbachia</strong> = endosymbiotic bacteria in heartworm — immunopathology, target of doxycycline</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Mosquito injects L3 larvae</li>
          <li>L3 migrates SC → muscle → vascular system (3-4 months)</li>
          <li>Mature in pulmonary arteries (5-6 months total prepatent period)</li>
          <li>Adult worms: pulmonary endarteritis, villous proliferation</li>
          <li>Pulmonary hypertension develops</li>
          <li>RV pressure overload → RV hypertrophy → dilation</li>
          <li>Right CHF: ascites, hepatomegaly</li>
          <li>If high worm burden: vena caval/RV obstruction → caval syndrome</li>
          <li>Pulmonary thromboembolism after adulticide (dead worms)</li>
        </ol>

        <p><strong>HARD syndrome (Cat):</strong></p>
        <ul>
          <li>Heartworm Associated Respiratory Disease</li>
          <li>Even L4-L5 (pre-adult) cause severe inflammation</li>
          <li>Asthma-like signs · acute death possible</li>
          <li>Cat: 1-3 worm burden typical · profound effect</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Dog signs (severity-dependent):</strong></p>
        <ul>
          <li>⭐ <strong>Cough</strong> — chronic, exercise-induced</li>
          <li>Exercise intolerance · weakness</li>
          <li>Weight loss, poor body condition</li>
          <li>Tachypnea, dyspnea</li>
          <li>Syncope (advanced)</li>
          <li>Ascites (right CHF)</li>
          <li>Cardiac cachexia (Class 3)</li>
          <li>⚠️ <strong>Caval syndrome:</strong> sudden collapse, anemia, hemoglobinuria, jaundice</li>
        </ul>

        <p><strong>Cat signs (HARD):</strong></p>
        <ul>
          <li>Cough, dyspnea (asthma-like)</li>
          <li>Vomiting (~30% — confuses diagnosis)</li>
          <li>Sudden death possible (1-3 worms can be fatal)</li>
          <li>Often misdiagnosed as feline asthma</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Dog testing:</strong></p>
        <ul>
          <li>⭐ <strong>Antigen test (ELISA)</strong> — detects adult female worm protein
            <ul>
              <li>Sensitivity 90-95% in dogs · positive 5-7 months post-infection</li>
              <li>SNAP, IDEXX, etc.</li>
              <li>Heat treatment of sample improves sensitivity (especially low burden, immune complex masking)</li>
            </ul>
          </li>
          <li><strong>Microfilaria test</strong>:
            <ul>
              <li>Modified Knott test (concentration)</li>
              <li>Direct smear (less sensitive)</li>
              <li>Differentiate from Acanthocheilonema reconditum</li>
            </ul>
          </li>
          <li><strong>Echocardiogram</strong>: visible worms in RA/RV/PA · valve damage · PHT</li>
          <li><strong>Thoracic radiograph</strong>: pulmonary artery enlargement, blunted/tortuous arteries · RV enlargement · pulmonary patterns (interstitial, alveolar)</li>
          <li><strong>CBC</strong>: eosinophilia, basophilia possible</li>
          <li><strong>Chemistry/UA</strong>: protein-losing GN, ALT elevation</li>
        </ul>

        <p><strong>Cat testing (challenging):</strong></p>
        <ul>
          <li><strong>Antibody test</strong> + <strong>Antigen test</strong> — both needed (low antigen sensitivity in cats)</li>
          <li>Echocardiogram: visualize worms (single or few)</li>
          <li>Microfilariae rare in cats</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Chronic bronchitis</strong> (cough)</li>
          <li><strong>MMVD</strong> (older small breed)</li>
          <li><strong>DCM</strong></li>
          <li><strong>Pulmonary thromboembolism</strong> (other causes)</li>
          <li><strong>Pneumonia</strong> (eosinophilic)</li>
          <li><strong>Cat asthma</strong> (cat HARD vs asthma)</li>
          <li><strong>FIP</strong> (cat ascites)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Adulticide protocol — AHS recommended (Dog):</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">3-Injection Melarsomine Protocol — "AHS Slow-Kill"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Day 0</span>
              <span class="num-label">Doxy 10 mg/kg BID × 4 wk · macrocyclic preventive</span>
            </div>
            <div class="num-card">
              <span class="num-big">Day 60</span>
              <span class="num-label">Melarsomine 2.5 mg/kg IM × 1</span>
            </div>
            <div class="num-card">
              <span class="num-big">Day 90-91</span>
              <span class="num-label">Melarsomine 2.5 mg/kg IM × 2 (24 hr apart)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Day 270</span>
              <span class="num-label">Antigen retest · should be negative</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>Strict cage rest 6-8 weeks post-adulticide</strong> — prevents PTE<br>
          📌 Doxycycline first kills Wolbachia → reduces post-adulticide reaction<br>
          📌 NEVER skip pre-treatment doxycycline + macrocyclic preventive</p>
        </div>

        <p><strong>Adjunctive therapy:</strong></p>
        <ul>
          <li><strong>Doxycycline 10 mg/kg PO BID × 4 weeks</strong> — kills Wolbachia, sterilizes adult worms</li>
          <li><strong>Macrocyclic lactone preventive</strong> (ivermectin, milbemycin, moxidectin) — kills L3-L4 stages, prevents reinfection</li>
          <li><strong>Prednisolone</strong> 0.5 mg/kg q12h tapered × 4 wk — anti-inflammatory peri-adulticide</li>
          <li><strong>Strict exercise restriction</strong> 6-8 weeks post-melarsomine</li>
          <li><strong>NSAID avoid</strong> during peri-adulticide period (renal risk)</li>
        </ul>

        <p><strong>Caval syndrome — surgical emergency:</strong></p>
        <ul>
          <li>Transvenous worm extraction (jugular approach with alligator forceps or basket)</li>
          <li>Stabilize first (IV fluids, oxygen)</li>
          <li>After surgery: complete adulticide protocol</li>
          <li>Mortality high · referral specialty</li>
        </ul>

        <p><strong>"Slow kill" alternative (not AHS-recommended but used):</strong></p>
        <ul>
          <li>Monthly macrocyclic preventive + doxycycline</li>
          <li>Takes 18-24+ months to clear</li>
          <li>Risk: ongoing pulmonary damage</li>
          <li>Use only if melarsomine contraindicated/unavailable</li>
        </ul>

        <p><strong>Cat heartworm:</strong></p>
        <ul>
          <li>Adulticide NOT recommended (high risk death)</li>
          <li>Supportive: bronchodilator, prednisolone</li>
          <li>Wait for natural worm death (2-3 years)</li>
          <li>Strict heartworm prevention essential to avoid reinfection</li>
        </ul>

        <p><strong>Prevention (gold standard):</strong></p>
        <ul>
          <li>Monthly macrocyclic lactone (ivermectin, milbemycin oxime, selamectin, moxidectin)</li>
          <li>Year-round in endemic areas</li>
          <li>Annual antigen test even on prevention (resistance emerging)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pulmonary thromboembolism (PTE)</strong> post-adulticide — major risk · cage rest!</li>
          <li><strong>Pulmonary hypertension</strong> · right CHF</li>
          <li><strong>Caval syndrome</strong> — emergency</li>
          <li><strong>Glomerulonephritis</strong> from immune complexes</li>
          <li><strong>Sudden death</strong> in cats</li>
          <li><strong>Anaphylaxis</strong> from microfilarial death (rare with modern protocols)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Class 1-2 dog with proper Rx:</strong> Good · most clear infection</li>
          <li><strong>Class 3 dog:</strong> Guarded · 50-70% survive treatment</li>
          <li><strong>Caval syndrome:</strong> 50% mortality even with surgery</li>
          <li><strong>Cat HARD:</strong> Variable · sudden death risk</li>
          <li><strong>With prevention:</strong> Heartworm essentially preventable</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     ACQUIRED — CAT
     ============================================================ */

  {
    id: 'card-hcm-cat',
    titleEn: 'Hypertrophic Cardiomyopathy (HCM) — Cat',
    titleTh: 'โรคกล้ามเนื้อหัวใจหนา (HCM) ในแมว',
    type: 'disease',
    system: 'acquired-cat',
    species: ['cat'],
    tags: ['HCM', 'hypertrophic cardiomyopathy', 'feline', 'Maine Coon', 'Ragdoll', 'SAM', 'ATE'],
    aliases: ['feline HCM', 'หัวใจหนาแมว'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Hypertrophic Cardiomyopathy (HCM)</strong> — โรคกล้ามเนื้อหัวใจของแมวที่พบบ่อยที่สุด · concentric LV hypertrophy without dilation</p>
        <ul>
          <li>Most common feline cardiomyopathy (~14-15% of cat population!)</li>
          <li>LV wall thickness ≥ 6 mm at diastole (echo)</li>
          <li>Diastolic dysfunction · preserved/hyperkinetic systolic function</li>
          <li>⭐ <strong>SAM (systolic anterior motion of mitral valve)</strong> common</li>
          <li>⭐ Predisposed: <strong>Maine Coon, Ragdoll</strong> (genetic mutations identified) · Sphynx, Persian</li>
          <li>Age: middle-aged cats (often 4-7 yo, but any age)</li>
          <li>Male cats more commonly affected</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">ACVIM HCM Cat Staging</span>
          <table>
            <tr><th>Stage</th><th>Description</th><th>Treatment</th></tr>
            <tr><td><strong>A</strong></td><td>Predisposed breed · normal echo</td><td>Genetic test if applicable · echo q1-2 yr</td></tr>
            <tr><td><strong>B1</strong></td><td>Echo abnormal · LA normal · low ATE risk</td><td>None or atenolol (if SAM) · echo annually</td></tr>
            <tr><td><strong>B2</strong></td><td>Echo abnormal · ⚠️ <strong>LA enlarged (LA/Ao &gt; 1.6)</strong> · ↑ ATE risk</td><td>⭐ Clopidogrel · ± atenolol · ACEi</td></tr>
            <tr><td><strong>C</strong></td><td>CHF or ATE</td><td>⭐ Furosemide · clopidogrel · ACEi · O2</td></tr>
            <tr><td><strong>D</strong></td><td>Refractory CHF</td><td>↑ furosemide · pimobendan controversial · sildenafil</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>B2 = LA enlarged = ATE risk!</strong> · Start clopidogrel<br>
          📌 ⭐ <strong>30-50% of cats with HCM have NO murmur</strong> — gallop or arrhythmia clue</p>
        </div>
      `,
      etiology: `
        <ul>
          <li><strong>Genetic mutations</strong>:
            <ul>
              <li>⭐ <strong>Maine Coon: MYBPC3 (myosin-binding protein C3)</strong> · A31P mutation</li>
              <li>⭐ <strong>Ragdoll: MYBPC3 R820W mutation</strong></li>
              <li>Sphynx, Persian: under investigation</li>
              <li>Genetic testing available commercially</li>
            </ul>
          </li>
          <li><strong>Idiopathic primary</strong> — most common in non-pure-breed cats</li>
          <li><strong>Secondary causes (must rule out!):</strong>
            <ul>
              <li>⭐ <strong>Hyperthyroidism</strong> (cat &gt; 8 yo)</li>
              <li>⭐ <strong>Systemic hypertension</strong> (CKD-related)</li>
              <li>Acromegaly</li>
              <li>Aortic stenosis (rare in cats)</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Always Rule Out — "TBD" in HCM</span>
          <ul>
            <li><strong>T</strong>hyroid (T4) — measure!</li>
            <li><strong>B</strong>lood pressure (BP) — measure!</li>
            <li><strong>D</strong>iagnostic workup — IGF-1 if acromegaly suspected (rare)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>Don't call HCM "primary" until TBD ruled out</strong> — secondary causes treatable<br>
          📌 Hyperthyroid + HT both very common in older cats with cardiac changes</p>
        </div>
      `,
      pathophysiology: `
        <ol>
          <li>Sarcomeric protein dysfunction (genetic)</li>
          <li>Concentric LV hypertrophy (wall thickens · chamber size normal/small)</li>
          <li>Stiff ventricle → diastolic dysfunction (poor relaxation, poor filling)</li>
          <li>↑ LA pressure → LA dilation</li>
          <li>LV outflow tract obstruction (HOCM): SAM of mitral valve → aortic flow turbulence</li>
          <li>Impaired filling → low stroke volume → potential hypotension/syncope</li>
          <li>LA dilation → AFib · ⚠️ <strong>thrombus formation → ATE</strong></li>
          <li>Pulmonary venous congestion → pulmonary edema (CHF) · pleural effusion</li>
          <li>RV hypertrophy + biatrial enlargement in advanced cases</li>
        </ol>

        <p><strong>SAM (Systolic Anterior Motion):</strong></p>
        <ul>
          <li>Anterior mitral leaflet pulled toward septum during systole</li>
          <li>Causes dynamic LVOT obstruction</li>
          <li>Creates systolic murmur (often grade 2-4)</li>
          <li>Worse with tachycardia, dehydration, hypovolemia</li>
          <li>Beta-blocker (atenolol) helps reduce</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Cat HCM presentation — CHALLENGING because cats hide signs:</strong></p>

        <ul>
          <li><strong>Stage B (asymptomatic):</strong> No clinical signs · only murmur/gallop or screen</li>
          <li><strong>Stage C (CHF):</strong>
            <ul>
              <li>⚠️ <strong>Acute respiratory distress</strong> (open-mouth breathing — emergency!)</li>
              <li>Tachypnea (resting RR &gt; 30/min)</li>
              <li>Lethargy · hiding</li>
              <li>Anorexia</li>
              <li>Weight loss</li>
              <li>Cough rare in cats (vs dogs)</li>
            </ul>
          </li>
          <li><strong>ATE (Stage C ATE subset):</strong>
            <ul>
              <li>⚠️ Acute hindlimb paralysis/paresis (saddle thrombus)</li>
              <li>Severe pain · vocalizing</li>
              <li>Cold limbs · cyanotic pads</li>
              <li>No femoral pulse</li>
              <li>Pre-existing cardiac dz (often previously undiagnosed!)</li>
            </ul>
          </li>
          <li><strong>Sudden death</strong> — possible at any stage</li>
        </ul>

        <p><strong>Physical exam clues:</strong></p>
        <ul>
          <li><strong>Murmur</strong> — systolic, L parasternal · grade 1-4 (often dynamic with HR)</li>
          <li>⭐ <strong>Gallop sound (S4)</strong> — major HCM clue · often without murmur</li>
          <li>Arrhythmia · gallop rhythm</li>
          <li>Tachypnea (CHF)</li>
          <li>Reduced lung sounds (pleural effusion)</li>
          <li>Crackles (pulmonary edema)</li>
          <li>Hypothermia possible (CHF)</li>
          <li>⚠️ Cold paralyzed hindlimbs = ATE</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Echocardiogram — gold standard:</strong></p>
        <ul>
          <li>⭐ <strong>LV wall thickness ≥ 6 mm</strong> at diastole (M-mode at chordae)
            <ul>
              <li>IVSd, LVPWd thickening</li>
              <li>Mild: 6 mm · Moderate: 6.5-7.5 mm · Severe: &gt; 7.5-8 mm</li>
            </ul>
          </li>
          <li>LA enlargement (LA/Ao ratio):
            <ul>
              <li>Normal: &lt; 1.5</li>
              <li>Mild: 1.5-1.8</li>
              <li>Moderate: 1.8-2.2</li>
              <li>Severe: &gt; 2.2 ← high ATE risk</li>
            </ul>
          </li>
          <li>SAM on M-mode/2D (LVOT)</li>
          <li>Hyperdynamic systolic function (FS often 60-80%)</li>
          <li>Diastolic dysfunction on PW Doppler (E/A reversal, restrictive pattern)</li>
          <li>"Smoke" or thrombus in LA (severe — pre-ATE warning!)</li>
          <li>Pleural effusion · pericardial effusion possible</li>
        </ul>

        <p><strong>Adjunctive testing:</strong></p>
        <ul>
          <li><strong>NT-proBNP</strong>:
            <ul>
              <li>&lt; 100 pmol/L: cardiac dz unlikely</li>
              <li>100-270: gray zone · echo</li>
              <li>&gt; 270: echo essential</li>
              <li>&gt; 1500-2000: severe / CHF</li>
            </ul>
          </li>
          <li><strong>cTnI</strong> elevated</li>
          <li><strong>T4 (free T4)</strong> — rule out hyperthyroid</li>
          <li><strong>BP</strong> — rule out hypertension</li>
          <li><strong>Renal panel</strong> — CKD common comorbidity</li>
          <li><strong>Thoracic radiograph</strong> (CHF):
            <ul>
              <li>"Valentine heart" appearance VD</li>
              <li>LA enlargement</li>
              <li>Pulmonary edema (diffuse pattern, NOT perihilar like dogs)</li>
              <li>Pleural effusion</li>
            </ul>
          </li>
          <li><strong>Genetic test</strong> if Maine Coon/Ragdoll</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Hyperthyroid cardiomyopathy</strong> — T4 elevated</li>
          <li><strong>Hypertensive cardiomyopathy</strong> — BP &gt; 160 mmHg</li>
          <li><strong>RCM (Restrictive)</strong> — atrial enlargement, normal wall thickness</li>
          <li><strong>UCM (Unclassified)</strong> — doesn't fit categories</li>
          <li><strong>DCM</strong> in cats (rare since taurine fortification of food)</li>
          <li><strong>Acromegaly</strong> — growth hormone excess (rare)</li>
          <li><strong>Cat asthma</strong> (respiratory but no echo abnormalities)</li>
          <li><strong>Pleural effusion other causes</strong> — pyothorax, FIP, neoplasia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Stage-based treatment:</strong></p>

        <ul>
          <li><strong>Stage A (predisposed breed):</strong>
            <ul>
              <li>Genetic testing if Maine Coon/Ragdoll</li>
              <li>Echo every 1-2 years</li>
            </ul>
          </li>
          <li><strong>Stage B1 (mild echo abnormal · normal LA):</strong>
            <ul>
              <li>Generally no medication</li>
              <li>Atenolol 6.25-12.5 mg/cat q12-24h IF significant SAM with high gradient</li>
              <li>Annual echo</li>
            </ul>
          </li>
          <li><strong>Stage B2 (LA enlarged · pre-CHF):</strong>
            <ul>
              <li>⭐ <strong>Clopidogrel 18.75 mg/cat (1/4 of 75 mg) PO q24h</strong> — FATCAT trial</li>
              <li>± Atenolol if SAM</li>
              <li>± ACEi (benazepril 0.25-0.5 mg/kg q24h) — limited evidence</li>
              <li>Echo every 6 months</li>
            </ul>
          </li>
          <li><strong>Stage C (CHF) — emergency!</strong>
            <ul>
              <li>⭐ <strong>Oxygen</strong> first (40-60%, low-stress)</li>
              <li>⭐ <strong>Furosemide 1-2 mg/kg IM/IV q1-2h</strong> until RR &lt; 40</li>
              <li><strong>Butorphanol</strong> 0.2-0.4 mg/kg IM for sedation/anxiolysis (reduces sympathetic drive)</li>
              <li><strong>Thoracocentesis</strong> if significant pleural effusion (CHF cat often!)</li>
              <li><strong>Clopidogrel</strong> for ATE prevention</li>
              <li>Avoid stress · minimal handling · NO restraint for radiograph if dyspneic</li>
              <li>POCUS in cage to confirm cardiac CHF</li>
              <li>Long-term: furosemide 1-2 mg/kg q12-24h · clopidogrel · ± ACEi</li>
            </ul>
          </li>
          <li><strong>Stage D (refractory CHF):</strong>
            <ul>
              <li>↑ furosemide or torsemide</li>
              <li>Pimobendan controversial (theoretically harmful in HOCM but increasingly used)</li>
              <li>Sildenafil for pulmonary HT</li>
              <li>Specialist referral</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Cat CHF Emergency — "OFF TBA"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">O</span>
              <span class="num-label">Oxygen 40-60%</span>
            </div>
            <div class="num-card">
              <span class="num-big">F</span>
              <span class="num-label">Furosemide 1-2 mg/kg</span>
            </div>
            <div class="num-card">
              <span class="num-big">F</span>
              <span class="num-label">Furosemide repeat q1-2h</span>
            </div>
            <div class="num-card">
              <span class="num-big">T</span>
              <span class="num-label">Thoracocentesis if effusion</span>
            </div>
            <div class="num-card">
              <span class="num-big">B</span>
              <span class="num-label">Butorphanol sedation</span>
            </div>
            <div class="num-card">
              <span class="num-big">A</span>
              <span class="num-label">ACEi/Antiplatelet later</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>Goal: RR &lt; 40 within 4-6 hours</strong><br>
          📌 ⚠️ NO IV fluids (worsens edema) · NO stress · NO sedation that depresses CV (acepromazine BAD)</p>
        </div>
      `,
      complications: `
        <ul>
          <li>⚠️ <strong>Aortic thromboembolism (ATE)</strong> — saddle thrombus · 1/3 to 1/2 of cats die from ATE</li>
          <li><strong>CHF</strong> with pulmonary edema or pleural effusion</li>
          <li><strong>Sudden death</strong> from arrhythmia (especially Maine Coon, Ragdoll)</li>
          <li><strong>Atrial fibrillation</strong> from severe LA enlargement</li>
          <li><strong>Refractory CHF</strong></li>
          <li><strong>Pulmonary hypertension</strong> secondary</li>
          <li><strong>Adverse drug effects</strong> (azotemia from furosemide + ACEi)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Stage B1:</strong> Good · many years (some never progress)</li>
          <li><strong>Stage B2:</strong> Variable · risk of CHF/ATE within 1-3 years</li>
          <li><strong>Stage C (first CHF):</strong> Median 6-18 months · variable</li>
          <li><strong>ATE:</strong> Acute mortality 30-50% · survivors median 6-12 months · risk of recurrence high</li>
          <li><strong>Maine Coon homozygous mutation:</strong> Earlier onset, worse prognosis</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-rcm-cat',
    titleEn: 'Restrictive Cardiomyopathy (RCM) — Cat',
    titleTh: 'โรคกล้ามเนื้อหัวใจแข็ง (RCM) ในแมว',
    type: 'disease',
    system: 'acquired-cat',
    species: ['cat'],
    tags: ['RCM', 'restrictive cardiomyopathy', 'feline', 'endomyocardial fibrosis', 'biatrial enlargement'],
    aliases: ['restrictive', 'endomyocardial dz'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Restrictive Cardiomyopathy (RCM)</strong> — feline cardiomyopathy characterized by impaired ventricular filling without significant hypertrophy or dilation</p>
        <ul>
          <li>2nd most common feline cardiomyopathy after HCM</li>
          <li>Endomyocardial form: fibrosis of endocardium</li>
          <li>Myocardial form: diffuse myocardial fibrosis</li>
          <li>Severe diastolic dysfunction → atrial enlargement</li>
          <li>Normal/near-normal systolic function</li>
          <li>Often middle-aged to older cats</li>
          <li>No specific breed predisposition</li>
          <li>Diagnosis often by exclusion of HCM/DCM</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li>⭐ Idiopathic (most common)</li>
          <li>End-stage HCM ("burnt out" — wall thickness regresses, fibrosis increases)</li>
          <li>Post-myocarditis fibrosis</li>
          <li>Infiltrative disease (rare — amyloid, neoplasia)</li>
          <li>Genetic component suspected (not characterized)</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Endomyocardial or diffuse myocardial fibrosis</li>
          <li>Severe restriction of ventricular filling (stiff chamber)</li>
          <li>Profound elevation of atrial pressure</li>
          <li>Massive biatrial enlargement</li>
          <li>Pulmonary venous congestion → pulmonary edema/pleural effusion</li>
          <li>Right-sided congestion → ascites possible</li>
          <li>↑ ATE risk from large LA/RA + stagnant blood</li>
          <li>Atrial arrhythmias common (AFib)</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Often presents with CHF or ATE:</strong></p>
        <ul>
          <li>⚠️ Acute respiratory distress (CHF)</li>
          <li>Lethargy · weight loss · anorexia (often first sign noticed)</li>
          <li>⚠️ ATE (saddle thrombus) — common presentation</li>
          <li>Sudden death possible</li>
          <li>Pleural effusion → muffled heart sounds + dyspnea</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Soft murmur or no murmur</li>
          <li>Gallop sound</li>
          <li>Arrhythmia common</li>
          <li>Tachypnea</li>
          <li>Reduced lung sounds (effusion)</li>
          <li>Jugular distention possible</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Echocardiogram features:</strong></p>
        <ul>
          <li>⭐ <strong>Massive biatrial enlargement</strong> (LA + RA both)</li>
          <li>Normal LV wall thickness (no concentric hypertrophy unlike HCM)</li>
          <li>Normal/small LV chamber</li>
          <li>Preserved/mildly reduced systolic function (FS 30-50%)</li>
          <li>Endomyocardial form: focal echogenic lesion (fibrosis) in apex/papillary</li>
          <li>Restrictive filling pattern on PW Doppler (high E, low A, short DT)</li>
          <li>"Smoke" or thrombus in atrium</li>
          <li>Pleural effusion common</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Differential — HCM vs RCM vs DCM (Cat)</span>
          <table>
            <tr><th>Feature</th><th>HCM</th><th>RCM</th><th>DCM</th></tr>
            <tr><td><strong>LV wall</strong></td><td>↑↑ (≥ 6 mm)</td><td>Normal</td><td>Normal/thin</td></tr>
            <tr><td><strong>LV chamber</strong></td><td>Normal/small</td><td>Normal/small</td><td>↑↑ Dilated</td></tr>
            <tr><td><strong>FS</strong></td><td>↑ (hyperdynamic)</td><td>Normal/mildly ↓</td><td>↓↓ (&lt; 25%)</td></tr>
            <tr><td><strong>Atria</strong></td><td>LA enlarged</td><td>⭐ <strong>Both LA + RA</strong></td><td>LA enlarged</td></tr>
            <tr><td><strong>Cause</strong></td><td>Genetic / sarcomere</td><td>Fibrosis</td><td>Taurine def. (rare now)</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>"Massive biatrial = RCM"</strong> · normal walls + small/normal chambers<br>
          📌 RCM and HCM end-stage can look similar — context matters</p>
        </div>

        <p><strong>Other tests:</strong></p>
        <ul>
          <li>NT-proBNP elevated</li>
          <li>cTnI elevated</li>
          <li>Thoracic radiograph: massive cardiac silhouette · pleural effusion · pulmonary edema</li>
          <li>T4, BP — rule out secondary</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>HCM</strong> — wall thickness ≥ 6 mm distinguishes</li>
          <li><strong>End-stage HCM</strong> — looks similar to RCM (overlap exists)</li>
          <li><strong>DCM</strong> — dilated LV with poor systolic function</li>
          <li><strong>Pericardial effusion / constrictive pericarditis</strong></li>
          <li><strong>Cardiac neoplasia</strong></li>
          <li><strong>Hyperthyroid cardiomyopathy</strong></li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment similar to HCM Stage B2/C:</strong></p>
        <ul>
          <li><strong>Stage B/B2 (asymptomatic, atrial enlargement):</strong>
            <ul>
              <li>⭐ Clopidogrel 18.75 mg/cat PO q24h (ATE prevention)</li>
              <li>± ACEi (benazepril 0.25-0.5 mg/kg q24h)</li>
              <li>Echo every 6 months</li>
            </ul>
          </li>
          <li><strong>Stage C (CHF):</strong>
            <ul>
              <li>⭐ Oxygen + furosemide (same as HCM CHF)</li>
              <li>Thoracocentesis if effusion</li>
              <li>Long-term: furosemide + clopidogrel + ACEi</li>
              <li>Avoid pimobendan (no benefit, theoretical harm)</li>
              <li>Atenolol generally NOT helpful in RCM</li>
            </ul>
          </li>
          <li><strong>Stage D (refractory):</strong>
            <ul>
              <li>↑ furosemide / torsemide</li>
              <li>Sildenafil for PHT</li>
              <li>Specialist referral</li>
            </ul>
          </li>
        </ul>

        <p><strong>ATE prevention essential:</strong></p>
        <ul>
          <li>RCM cats with severe atrial enlargement: very high ATE risk</li>
          <li>Clopidogrel mainstay (FATCAT trial, but extended to RCM)</li>
          <li>Some add LMWH (enoxaparin) for higher-risk cases</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>ATE</strong> — major complication (high risk with severe biatrial enlargement)</li>
          <li><strong>Refractory CHF</strong></li>
          <li><strong>AFib</strong> from massive atrial dilation</li>
          <li><strong>Sudden death</strong></li>
          <li><strong>Recurrent pleural effusion</strong></li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Generally <strong>worse than HCM</strong></li>
          <li>Stage C: median 3-12 months</li>
          <li>Post-ATE: poor</li>
          <li>Stage B: variable, often progress within 1-2 years</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 3a — Cat ATE + Hyperthyroid CM + PDA (3)
     ============================================================ */

  {
    id: 'card-ate-cat',
    titleEn: 'Aortic Thromboembolism (ATE) — Cat',
    titleTh: 'ลิ่มเลือดอุดตันหลอดเลือดแดงใหญ่ (ATE) ในแมว',
    type: 'disease',
    system: 'acquired-cat',
    species: ['cat'],
    tags: ['ATE', 'aortic thromboembolism', 'saddle thrombus', 'feline', 'HCM', 'paralysis', 'emergency'],
    aliases: ['saddle thrombus', 'arterial thromboembolism', 'ลิ่มเลือดอุดตัน'],
    source: 'Bussadori + Duque-Carrasco',
    sections: {
      definition: `
        <p><strong>Aortic Thromboembolism (ATE)</strong> — acute embolization of thrombus จาก left atrium ไปยังหลอดเลือดแดง (most commonly aortic trifurcation = "saddle thrombus")</p>
        <ul>
          <li>⭐ <strong>Devastating complication of feline cardiomyopathy</strong> (HCM, RCM, UCM)</li>
          <li>เกิดใน ~10-20% ของแมวที่เป็น cardiomyopathy</li>
          <li>ตำแหน่งที่พบบ่อยที่สุด: <strong>aortic trifurcation</strong> → bilateral hindlimb paralysis</li>
          <li>ตำแหน่งอื่น: front limb (น้อย), kidney, brain, mesentery</li>
          <li>Mortality at presentation 30-50% · long-term &gt; 70%</li>
          <li>⚠️ ในประมาณ 30% เป็น first sign ของ cardiac dz</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">ATE Distribution by Site</span>
          <table>
            <tr><th>Site</th><th>Frequency</th><th>Clinical Sign</th></tr>
            <tr><td><strong>Aortic trifurcation (saddle)</strong></td><td>~70%</td><td>⭐ Bilateral hindlimb paralysis</td></tr>
            <tr><td><strong>Single hindlimb</strong></td><td>~15%</td><td>Unilateral paralysis</td></tr>
            <tr><td><strong>Front limb</strong></td><td>~10%</td><td>Forelimb paralysis</td></tr>
            <tr><td><strong>Renal</strong></td><td>Variable</td><td>Acute kidney injury</td></tr>
            <tr><td><strong>Mesenteric</strong></td><td>Rare</td><td>Acute abdomen, GI signs</td></tr>
            <tr><td><strong>Cerebral</strong></td><td>Rare</td><td>Stroke signs</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>"Saddle thrombus"</strong> = aortic trifurcation = both hindlimbs<br>
          📌 แมวที่ paralyzed acute = ATE จนกว่าจะ rule out ได้ (vs IVDD, neuro)</p>
        </div>
      `,
      etiology: `
        <p><strong>โรคพื้นฐาน (จำเป็นต้องมี):</strong></p>
        <ul>
          <li>⭐ <strong>HCM (พบบ่อยที่สุด)</strong></li>
          <li>RCM</li>
          <li>UCM (Unclassified)</li>
          <li>End-stage cardiomyopathy with severe LA dilation</li>
          <li>Hyperthyroid cardiomyopathy with LA enlargement</li>
          <li>Rare: dirofilariasis, neoplasia, sepsis</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Virchow's Triad — กลไกการเกิด ATE</span>
          <ul>
            <li><strong>Stasis</strong> — เลือดไหลช้าใน LA + auricle ที่โต</li>
            <li><strong>Endothelial dysfunction</strong> — atrial enlargement + fibrosis</li>
            <li><strong>Hypercoagulability</strong> — แมวมี platelet hyperactivity · ↑ fibrinogen</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>LA/Ao &gt; 2.0</strong> = high ATE risk<br>
          📌 LA spontaneous echo contrast ("smoke") = pre-thrombotic<br>
          📌 มอง thrombus ใน LA echo ได้ = ATE imminent</p>
        </div>
      `,
      pathophysiology: `
        <ol>
          <li>Severe LA enlargement → blood stasis</li>
          <li>Platelet activation + thrombus formation ใน LA/auricle</li>
          <li>Thrombus หลุด → embolizes ผ่าน LV → aorta</li>
          <li>ติดที่ aortic trifurcation (หรือ artery อื่น)</li>
          <li>⭐ <strong>Vasoactive substances</strong> (serotonin, thromboxane) จาก platelets → vasoconstriction ของ collateral circulation → severity แย่กว่าที่เกิดจาก mechanical obstruction อย่างเดียว</li>
          <li>Tissue ischemia → muscle necrosis (rhabdomyolysis)</li>
          <li>Reperfusion injury เมื่อเลือดกลับมา</li>
          <li>Hyperkalemia จาก dying muscle → cardiac arrhythmia/arrest</li>
        </ol>
      `,
      symptoms: `
        <div class="mnemonic thai">
          <span class="mnem-title">ATE Classic Pentad — "5 Ps" + 1</span>
          <ul>
            <li><strong>P</strong>aralysis (acute, dramatic)</li>
            <li><strong>P</strong>ain (severe, vocalizing)</li>
            <li><strong>P</strong>ulselessness (no femoral pulse)</li>
            <li><strong>P</strong>oikilothermy (cold limbs)</li>
            <li><strong>P</strong>allor / cyanotic (purple-blue paw pads + nails)</li>
            <li>+ Tachypnea / dyspnea (CHF often concurrent)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>"5 Ps + Tachypnea"</strong> · classic emergency presentation<br>
          📌 กล้ามเนื้อขาที่ affected แข็ง, tense (rigor จาก ischemia)<br>
          📌 ~50% ของแมวมี CHF ร่วม (dual emergency)</p>
        </div>

        <p><strong>Physical exam findings:</strong></p>
        <ul>
          <li>Acute hindlimb paralysis/paresis (bilateral if saddle)</li>
          <li>เจ็บมาก · ร้อง · พยายามคลานลากตัว</li>
          <li>NO femoral pulse on affected limb (compare with normal)</li>
          <li>Cold extremities (poikilothermy)</li>
          <li>Cyanotic/dark purple paw pads + nails</li>
          <li>กล้ามเนื้อแข็ง tense (โดยเฉพาะ hindlimb biceps)</li>
          <li>แมว anxious, distressed, dyspneic ถ้ามี CHF ร่วม</li>
          <li>Anal tone normal (vs IVDD ที่อาจหายไป)</li>
          <li>Tail base motor normal (vs IVDD)</li>
        </ul>

        <p><strong>การแยก ATE จาก spinal cord injury:</strong></p>
        <ul>
          <li>ATE: cold limbs, no pulse, cyanotic pads · pain in muscles</li>
          <li>IVDD/spinal: warm limbs, normal pulse · pain in spine · loss of perineal reflex</li>
          <li>ATE: muscle rigid · IVDD: flaccid (LMN) or spastic (UMN)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical diagnosis (มัก dx ก่อน imaging):</strong></p>
        <ul>
          <li>Acute paralysis + pain + cold + no pulse + dark pads = ATE</li>
          <li>History: known cardiomyopathy หรือ presentation = sudden onset</li>
        </ul>

        <p><strong>Confirmatory testing:</strong></p>
        <ul>
          <li><strong>Echocardiogram</strong> (essential after stabilization):
            <ul>
              <li>Underlying cardiomyopathy (HCM, RCM)</li>
              <li>Severe LA enlargement (LA/Ao &gt; 2.0)</li>
              <li>± visible thrombus ใน LA/auricle</li>
              <li>"Smoke" (spontaneous echo contrast)</li>
              <li>บางครั้งเห็น thrombus ที่ distal aorta</li>
            </ul>
          </li>
          <li><strong>Doppler / pulse oximetry</strong> ที่ขา affected — absent flow</li>
          <li><strong>Glucose</strong> — finger stick affected limb vs normal · &gt; 30 mg/dL difference (ขาที่ affected ต่ำกว่า) ยืนยัน reduced perfusion</li>
          <li><strong>Lactate</strong> — สูงมากในขา affected</li>
          <li><strong>Chemistry</strong>:
            <ul>
              <li>Hyperkalemia (rhabdomyolysis · โดยเฉพาะหลัง reperfusion)</li>
              <li>↑ AST · ↑ CK (สูงมาก)</li>
              <li>Azotemia (renal embolus หรือ hypoperfusion)</li>
              <li>↑ Glucose (stress + epinephrine)</li>
            </ul>
          </li>
          <li><strong>CBC</strong>: stress leukogram</li>
          <li><strong>Coag panel</strong>: D-dimer often elevated</li>
          <li><strong>NT-proBNP</strong>: elevated (underlying CHF)</li>
          <li><strong>Thoracic radiograph</strong>: assess for concurrent CHF</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>IVDD (intervertebral disc disease)</strong> — exam ต่าง · spine pain</li>
          <li><strong>Spinal cord trauma</strong> — Hx, warm limbs</li>
          <li><strong>Fibrocartilaginous embolism (FCE)</strong> — rare ในแมว</li>
          <li><strong>Lumbosacral disease</strong></li>
          <li><strong>Diabetic neuropathy</strong> — chronic, gradual</li>
          <li><strong>Hyperkalemia from urethral obstruction</strong> — male blocked cat</li>
          <li><strong>Lymphoma (spinal)</strong> — chronic course</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute management — emergency triage:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">ATE Acute Care — "PAOC"</span>
          <ul>
            <li><strong>P</strong>ain control — opioids (METHADONE 0.2 mg/kg IM, fentanyl CRI, buprenorphine OTM)</li>
            <li><strong>A</strong>nticoagulation — heparin หรือ LMWH (enoxaparin)</li>
            <li><strong>O</strong>xygen + monitoring (CHF concurrent ใน 50%)</li>
            <li><strong>C</strong>HF management ถ้ามี (furosemide ถ้ามี pulmonary edema)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>เจ็บมาก</strong> · adequate opioid analgesia critical<br>
          📌 หลีก acepromazine (CV depressant) · methadone หรือ fentanyl preferred<br>
          📌 ⚠️ NO thrombolytics (tPA, streptokinase) routinely — high mortality from reperfusion injury</p>
        </div>

        <p><strong>Specific anticoagulation:</strong></p>
        <ul>
          <li><strong>Unfractionated heparin</strong> 200-300 IU/kg SC q6-8h initial · acute phase</li>
          <li><strong>Enoxaparin (LMWH)</strong> 1 mg/kg SC q12h — easier dosing, more predictable</li>
          <li><strong>Clopidogrel</strong> 18.75 mg/cat (1/4 ของ 75 mg) PO q24h — long-term</li>
          <li><strong>Rivaroxaban</strong> 1.25 mg/cat PO q24h — alternative ถ้า clopidogrel resistance</li>
          <li>NO aspirin alone (FATCAT showed clopidogrel superior)</li>
        </ul>

        <p><strong>Reperfusion concerns:</strong></p>
        <ul>
          <li>⚠️ <strong>Hyperkalemia</strong> จาก rhabdomyolysis (24-72 hr) — monitor K, treat ถ้า &gt; 6.5</li>
          <li>⚠️ <strong>Acute kidney injury</strong> จาก myoglobinuria + hypoperfusion — IV fluids cautious</li>
          <li>⚠️ <strong>Reperfusion arrhythmias</strong> — ECG monitor</li>
          <li>Pain อาจแย่ลงเมื่อ sensation กลับ</li>
        </ul>

        <p><strong>Long-term (survivors):</strong></p>
        <ul>
          <li>⭐ <strong>Clopidogrel 18.75 mg/cat PO q24h</strong> — lifetime (FATCAT trial)</li>
          <li>± Enoxaparin if recurrent</li>
          <li>Treat underlying cardiomyopathy (HCM/RCM)</li>
          <li>CHF management ถ้าเหมาะสม</li>
          <li>Physical therapy สำหรับ paralyzed limbs (ถ้า motor return)</li>
          <li>Recheck echo + clinical ที่ 1, 3, 6, 12 months</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">FATCAT Trial Findings — Clopidogrel vs Aspirin</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">18.75</span>
              <span class="num-label">mg/cat (1/4 of 75 mg)</span>
            </div>
            <div class="num-card">
              <span class="num-big">q24h</span>
              <span class="num-label">Daily dosing</span>
            </div>
            <div class="num-card">
              <span class="num-big">↓50%</span>
              <span class="num-label">Recurrent ATE risk vs aspirin</span>
            </div>
            <div class="num-card">
              <span class="num-big">↑MST</span>
              <span class="num-label">Median survival improvement</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>FATCAT trial (Hogan 2015):</strong> clopidogrel SUPERIOR ต่อ aspirin สำหรับ cat ATE prevention<br>
          📌 ขม — ใส่ pill ใน capsule เพื่อให้แมวกินง่าย</p>
        </div>
      `,
      complications: `
        <ul>
          <li>⚠️ <strong>Death</strong> at presentation: 30-50%</li>
          <li><strong>Recurrence</strong> ภายใน 1 ปี: 20-50% (clopidogrel ลด)</li>
          <li><strong>Hyperkalemia</strong> จาก reperfusion → cardiac arrest</li>
          <li><strong>Acute kidney injury</strong> จาก myoglobin · hypoperfusion</li>
          <li><strong>Concurrent CHF</strong> precipitating euthanasia decision</li>
          <li><strong>Limb necrosis</strong> ต้อง amputate (ไม่บ่อย · ส่วนใหญ่ function กลับหรือ contracture)</li>
          <li><strong>Permanent paresis</strong> ใน survivors บางตัว</li>
          <li><strong>Owner financial/emotional cost</strong> — หลายคนเลือก euthanize ตั้งแต่ presentation</li>
        </ul>

        <p><strong>Prognosis — important factors:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">ATE Prognostic Factors</span>
          <table>
            <tr><th>Better prognosis</th><th>Worse prognosis</th></tr>
            <tr><td>Single limb (vs saddle)</td><td>Saddle (bilateral)</td></tr>
            <tr><td>Motor function present</td><td>Complete paralysis</td></tr>
            <tr><td>Rectal temp ≥ 37°C</td><td>Hypothermia &lt; 37°C ⚠️</td></tr>
            <tr><td>No CHF</td><td>Concurrent CHF</td></tr>
            <tr><td>K ≤ 6.0 mmol/L</td><td>K &gt; 6.5 (ominous)</td></tr>
            <tr><td>Owner committed</td><td>Pre-existing CKD/comorbidity</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Hypothermia + complete paralysis + CHF = euthanasia consideration</strong><br>
          📌 แมว single limb + warm + motor present = น่าลอง<br>
          📌 คุย prognosis ตรงไปตรงมากับเจ้าของก่อน expensive workup</p>
        </div>

        <p><strong>Survival outcomes:</strong></p>
        <ul>
          <li><strong>Acute mortality:</strong> 30-50%</li>
          <li><strong>Survivors median survival:</strong> 6-12 months (variable)</li>
          <li><strong>1-year survival ของแมวที่กลับบ้านได้:</strong> ~25-30%</li>
          <li><strong>Recurrence common</strong> · ลดด้วย clopidogrel</li>
          <li><strong>Quality of life</strong>: หลายตัวกลับมาเดินได้ใน 1-6 weeks</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-hyperthyroid-cm',
    titleEn: 'Hyperthyroid Cardiomyopathy — Cat',
    titleTh: 'หัวใจจากไทรอยด์เป็นพิษในแมว',
    type: 'disease',
    system: 'acquired-cat',
    species: ['cat'],
    tags: ['hyperthyroid', 'thyrotoxic cardiomyopathy', 'feline', 'methimazole', 'I-131', 'reversible'],
    aliases: ['thyrotoxic cardiomyopathy', 'thyroid heart'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Hyperthyroid Cardiomyopathy</strong> — secondary cardiac changes จาก chronic thyroid hormone excess ในแมวสูงอายุ</p>
        <ul>
          <li>⭐ <strong>แมวที่เป็น hyperthyroid ส่วนใหญ่จะมี cardiac changes</strong></li>
          <li>Reversible ถ้ารักษา hyperthyroidism เร็ว</li>
          <li>มักเลียนแบบ primary HCM (ต้อง rule out)</li>
          <li>Age: typically แมวสูงอายุ (&gt; 8-10 years)</li>
          <li>กระทบ ~10% ของแมว senior (hyperthyroidism prevalence)</li>
          <li>อาจมี primary cardiomyopathy ร่วมด้วย</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Cardiac Changes — Hyperthyroid Cat</span>
          <table>
            <tr><th>Pattern</th><th>Frequency</th><th>Notes</th></tr>
            <tr><td><strong>LV hypertrophy (HCM-like)</strong></td><td>40-70%</td><td>⭐ เลียนแบบ primary HCM · reversible</td></tr>
            <tr><td><strong>LA enlargement</strong></td><td>30-50%</td><td>จาก volume overload</td></tr>
            <tr><td><strong>Dilated phenotype</strong></td><td>10-15%</td><td>End-stage · less reversible</td></tr>
            <tr><td><strong>Tachyarrhythmia</strong></td><td>50-70%</td><td>Sinus tach, supraventricular tach, AFib</td></tr>
            <tr><td><strong>CHF</strong></td><td>10-20%</td><td>โดยเฉพาะ advanced</td></tr>
            <tr><td><strong>Hypertension</strong></td><td>20-30%</td><td>เพิ่ม cardiac workload</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Always rule out hyperthyroid ใน cat with HCM phenotype!</strong> · check T4<br>
          📌 Cardiac changes มัก reversible เมื่อ euthyroid restored</p>
        </div>
      `,
      etiology: `
        <ul>
          <li><strong>Functional thyroid adenoma/adenomatous hyperplasia</strong> (97%)</li>
          <li>Thyroid carcinoma (rare, 1-3%)</li>
          <li>Bilateral thyroid involvement common (70%)</li>
          <li>Suspected environmental factors: BPA, flame retardants, canned food, etc.</li>
        </ul>

        <p><strong>Cardiac effects ของ T4 excess:</strong></p>
        <ul>
          <li>↑ Beta-adrenergic receptor density</li>
          <li>↑ Myocardial protein synthesis → hypertrophy</li>
          <li>↑ Heart rate (chronotropy)</li>
          <li>↑ Contractility (inotropy)</li>
          <li>↑ Metabolic demand · ↑ cardiac output</li>
          <li>↑ Renin-angiotensin activation</li>
          <li>Long-term: maladaptive remodeling, arrhythmia substrate, CHF</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Excess T4/T3 → ↑ sympathetic activity + direct cardiac effects</li>
          <li>Chronic ↑ HR + contractility → high-output state</li>
          <li>Ventricular hypertrophy (concentric)</li>
          <li>ถ้าไม่รักษา → progress ไป dilated phenotype</li>
          <li>Atrial enlargement → AFib risk</li>
          <li>Concurrent hypertension แย่ขึ้น cardiac strain</li>
          <li>สุดท้าย CHF ถ้าไม่ control</li>
          <li>Reversal: เมื่อ euthyroid · hypertrophy regress ได้ใน weeks-months</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Hyperthyroid systemic signs:</strong></p>
        <ul>
          <li>น้ำหนักลดทั้งที่กินเก่ง (classic)</li>
          <li>Hyperactivity, restlessness</li>
          <li>PU/PD</li>
          <li>อาเจียน, ท้องเสีย</li>
          <li>ขนสาก, ไม่เรียบ</li>
          <li>Behavioral changes (ร้องเสียงดัง, aggressive)</li>
          <li>ทนร้อนไม่ได้, panting</li>
        </ul>

        <p><strong>Cardiac signs:</strong></p>
        <ul>
          <li>Tachycardia (HR &gt; 220 BPM common)</li>
          <li>Systolic murmur (variable, dynamic)</li>
          <li>Gallop sound possible</li>
          <li>Arrhythmia (palpable pulse irregularity)</li>
          <li>ถ้ามี CHF: tachypnea, dyspnea, anorexia</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li><strong>คลำ thyroid nodule ได้</strong> — ที่บริเวณคอ (เลื่อนนิ้วโป้ง-ชี้จากหู ลงมาทางทรวงอก)</li>
          <li>Tachycardia · pulse strong/bounding ตอนแรก</li>
          <li>Murmur (มัก dynamic with HR)</li>
          <li>Hypertension on Doppler measurement</li>
          <li>น้ำหนักลด muscle atrophy</li>
          <li>ขนยุ่ง</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Endocrine workup:</strong></p>
        <ul>
          <li>⭐ <strong>Total T4 (TT4)</strong> — elevated &gt; 4 µg/dL (NRR varies by lab)
            <ul>
              <li>แมวส่วนใหญ่ชัดเจน</li>
              <li>10-15% เป็น "occult" — TT4 borderline</li>
            </ul>
          </li>
          <li><strong>Free T4 by equilibrium dialysis</strong> — ถ้า TT4 borderline · sensitive กว่า</li>
          <li><strong>TSH (canine TSH cross-reacts)</strong> — suppressed ใน hyperthyroid · ช่วย confirm</li>
          <li><strong>Thyroid scintigraphy (Tc-99m pertechnetate)</strong> — gold standard สำหรับ ectopic tissue/carcinoma</li>
        </ul>

        <p><strong>Cardiac evaluation:</strong></p>
        <ul>
          <li><strong>Echocardiogram</strong>:
            <ul>
              <li>LV concentric hypertrophy (HCM-like)</li>
              <li>LA enlargement variable</li>
              <li>Hyperdynamic systolic function</li>
              <li>Tachycardia</li>
              <li>± SAM</li>
              <li>Recheck post-treatment เพื่อดู regression</li>
            </ul>
          </li>
          <li><strong>ECG</strong>:
            <ul>
              <li>Sinus tachycardia (HR 220-280)</li>
              <li>Tall R waves (LV hypertrophy)</li>
              <li>± supraventricular arrhythmia / AFib</li>
              <li>± ventricular ectopic beats</li>
            </ul>
          </li>
          <li><strong>Thoracic radiograph</strong>: cardiomegaly, ± pulmonary edema ถ้ามี CHF</li>
          <li><strong>BP</strong>: ⭐ <strong>ต้องวัดเสมอ</strong> — ~30% มี hypertension ร่วม</li>
          <li><strong>NT-proBNP</strong>: variable elevation · less reliable ใน hyperthyroid</li>
        </ul>

        <p><strong>Comorbidity workup (essential!):</strong></p>
        <ul>
          <li>⭐ <strong>BUN/creatinine, SDMA, urinalysis</strong> — CKD พบบ่อยในแมวสูงอายุ และอาจถูก MASKED โดย hyperthyroid (hyperthyroid ↑ GFR)</li>
          <li>Fasting glucose</li>
          <li>CBC (mild erythrocytosis common)</li>
          <li>การรักษา hyperthyroid อาจ "เผย" CKD ออกมา</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Primary HCM</strong> — T4 normal · echo persists post-treatment</li>
          <li><strong>Hypertensive cardiomyopathy</strong> — BP &gt; 160 · T4 normal</li>
          <li><strong>Acromegaly</strong> — IGF-1 elevated, growth hormone</li>
          <li><strong>Anemia-induced</strong> high-output</li>
          <li><strong>Pheochromocytoma</strong> (rare มากในแมว)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Definitive therapy options:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Hyperthyroid Treatment Options</span>
          <table>
            <tr><th>Option</th><th>Mechanism</th><th>Pros / Cons</th></tr>
            <tr><td><strong>⭐ I-131 (radioiodine)</strong></td><td>ทำลาย thyroid tissue</td><td>Curative · single Rx · ต้องการ facility</td></tr>
            <tr><td><strong>Methimazole</strong></td><td>Block T4 synthesis</td><td>PO/transdermal · lifelong · monitoring</td></tr>
            <tr><td><strong>Carbimazole (Vidalta)</strong></td><td>Prodrug ของ methimazole</td><td>Once-daily · controlled-release</td></tr>
            <tr><td><strong>Surgical thyroidectomy</strong></td><td>เอา thyroid ออก</td><td>Anesthetic risk · hypocalcemia ถ้า parathyroid damage</td></tr>
            <tr><td><strong>Iodine-restricted diet (Y/D)</strong></td><td>จำกัด T4 substrate</td><td>Strict diet · เฉพาะ Y/D · ปัญหาบ้านที่มีหลายแมว</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>I-131 = curative</strong> · gold standard ถ้ามี<br>
          📌 ⭐ <strong>Methimazole = first-line ถ้าไม่มี I-131</strong> · lifetime PO/transdermal<br>
          📌 Pre-cardiac eval ก่อน radioiodine (4-6 weeks methimazole control ก่อนเพื่อประเมิน CKD ร่วม)</p>
        </div>

        <p><strong>Methimazole protocol:</strong></p>
        <ul>
          <li>เริ่ม: 1.25-2.5 mg/cat PO q12h หรือ transdermal</li>
          <li>Recheck T4 + CBC + chemistry 2-4 weeks</li>
          <li>ปรับ dose ให้ T4 อยู่ใน low-normal range</li>
          <li>Long-term recheck q3-6 months</li>
          <li>Side effects: facial pruritus, hepatopathy, BM suppression (rare แต่ serious)</li>
        </ul>

        <p><strong>Concurrent cardiac management:</strong></p>
        <ul>
          <li><strong>Atenolol 6.25-12.5 mg/cat q12-24h</strong> — controls tachycardia + ลด SAM
            <ul>
              <li>Useful as bridge to I-131 (4-6 weeks pre-op)</li>
              <li>อาจหยุดได้หลัง euthyroid + cardiac normalize</li>
            </ul>
          </li>
          <li><strong>CHF management</strong> ถ้ามี pulmonary edema/effusion:
            <ul>
              <li>Furosemide ตามต้องการ</li>
              <li>Often improves with euthyroid state</li>
            </ul>
          </li>
          <li><strong>Hypertension</strong>: amlodipine 0.625-1.25 mg/cat q24h</li>
          <li><strong>Clopidogrel</strong> ถ้า LA enlargement &gt; 1.6 (ATE prevention)</li>
        </ul>

        <p><strong>Post-treatment monitoring:</strong></p>
        <ul>
          <li>Echo recheck 2-4 months post-euthyroid · cardiac changes ส่วนใหญ่ regress</li>
          <li>ถ้า persistent abnormalities → primary cardiomyopathy ร่วม</li>
          <li>BP recheck (hypertension อาจ resolve หรือ persist)</li>
          <li>Renal function (CKD มัก emerge/worsen)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hyperthyroid-induced CHF</strong> — มัก response ต่อ euthyroid + diuretic</li>
          <li><strong>Persistent cardiomyopathy</strong> ถ้า treatment delayed</li>
          <li><strong>ATE</strong> ถ้า severe LA enlargement</li>
          <li><strong>Hypertension</strong> with target organ damage (retinal hemorrhage, CKD)</li>
          <li><strong>Iatrogenic hypothyroid</strong> หลัง I-131 หรือ surgery</li>
          <li><strong>"Unmasked" CKD</strong> หลัง restore euthyroid</li>
          <li><strong>Methimazole adverse effects</strong>: facial pruritus, hepatopathy</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>I-131 treated:</strong> Median survival 2-4 years (มัก outliving cardiac concerns)</li>
          <li><strong>Methimazole long-term:</strong> Variable · monitoring-dependent</li>
          <li><strong>Untreated:</strong> Months to years · cardiac decompensation common</li>
          <li><strong>Cardiac changes:</strong> ส่วนใหญ่ reverse ภายใน 4-12 weeks ของ euthyroid · บางรายดื้อใน advanced cases</li>
          <li><strong>Concurrent CKD:</strong> มักกำหนด long-term prognosis</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-pda',
    titleEn: 'Patent Ductus Arteriosus (PDA)',
    titleTh: 'PDA — ท่อ Ductus เปิดค้าง',
    type: 'disease',
    system: 'congenital',
    species: ['dog', 'cat'],
    tags: ['PDA', 'patent ductus arteriosus', 'continuous murmur', 'machinery', 'congenital', 'shunt'],
    aliases: ['PDA', 'continuous murmur', 'machinery murmur', 'ductus เปิด'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Patent Ductus Arteriosus (PDA)</strong> — fetal ductus arteriosus ไม่ปิดหลังคลอด · มี L→R shunt ระหว่าง aorta และ pulmonary artery</p>
        <ul>
          <li>⭐ <strong>Most common congenital heart defect ในหมา</strong> (~30% ของ canine congenital)</li>
          <li>⭐ <strong>Female &gt; Male</strong> (3:1 ratio) — defect เดียวที่ female predominance</li>
          <li>Predisposed breeds: <strong>Toy Poodle, Maltese, Pomeranian, Yorkshire Terrier, Cocker Spaniel, German Shepherd, Collie</strong></li>
          <li>Genetic: polygenic inheritance</li>
          <li>Cat: less common</li>
          <li>Reverse PDA (R→L) = uncommon variant · poor prognosis</li>
        </ul>

        <p><strong>Normal physiology:</strong></p>
        <ul>
          <li>Fetal: ductus shunts blood จาก PA → aorta (bypass lungs)</li>
          <li>Birth: ductus ปกติปิดใน 24-72 hours (functional) และ weeks (anatomic)</li>
          <li>ขับเคลื่อนโดย O2 increase + prostaglandin decrease</li>
          <li>PDA: ปิดไม่สมบูรณ์ → persistent communication</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li>Genetic / inherited (polygenic ในหมา)</li>
          <li>Female sex predisposition</li>
          <li>Breed predisposition (above)</li>
          <li>Histopathology: abnormal smooth muscle development ใน ductus wall</li>
        </ul>

        <p><strong>Hemodynamic types:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">PDA Direction Types</span>
          <ul>
            <li><strong>Left-to-Right (typical, &gt; 95%)</strong> — Aorta → PA · pulmonary overcirculation · L volume overload · CHF risk</li>
            <li><strong>Right-to-Left ("reverse PDA")</strong> — Severe pulmonary HT พลิก flow · cyanosis · lower body desaturation · poor prognosis</li>
            <li><strong>Bidirectional</strong> — transitional · มัก progress ไป reverse</li>
          </ul>
          <p class="mnem-tip">📌 <strong>L→R PDA</strong>: surgical correction excellent prognosis<br>
          📌 ⚠️ <strong>R→L PDA</strong>: ห้ามปิด (precipitates RV failure) · differential cyanosis (hindlimbs cyanotic, head pink)<br>
          📌 ⭐ ECHO ก่อน "PDA closure" เสมอ — confirm direction</p>
        </div>
      `,
      pathophysiology: `
        <ol>
          <li>Persistent shunt aorta → PA (L→R)</li>
          <li>↑ pulmonary blood flow</li>
          <li>↑ pulmonary venous return → LA volume overload</li>
          <li>LA dilation → LV volume overload (eccentric hypertrophy)</li>
          <li>Compensated: hyperkinetic LV, normal cardiac output to body</li>
          <li>Decompensation → CHF (pulmonary edema)</li>
          <li>ถ้า chronic uncorrected: ↑ pulmonary vascular resistance → pulmonary hypertension</li>
          <li>Severe PHT → reverse shunt (R→L) → cyanosis</li>
          <li>Mortality without intervention high (60-80% ภายใน 1 year)</li>
        </ol>
      `,
      symptoms: `
        <p><strong>L→R PDA presentation:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">PDA Classic Signs — Puppy/Young Adult</span>
          <ul>
            <li>⭐ <strong>Continuous "machinery" murmur</strong> — left base, high (3rd ICS)</li>
            <li>⭐ <strong>Bounding pulses</strong> ("water hammer" pulse) — wide pulse pressure</li>
            <li>มัก asymptomatic ตอน puppy (incidental finding)</li>
            <li>Failure to thrive</li>
            <li>Exercise intolerance</li>
            <li>Cough (CHF)</li>
            <li>Tachypnea / dyspnea (CHF)</li>
            <li>Stunted growth</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>"Machinery murmur + bounding pulse + young dog = PDA"</strong><br>
          📌 มักได้ยินครั้งแรกที่ puppy vaccination<br>
          📌 ⭐ Early surgical correction = best prognosis</p>
        </div>

        <p><strong>R→L PDA (rare):</strong></p>
        <ul>
          <li>Differential cyanosis — caudal body cyanotic, cranial pink (Os flow direction)</li>
          <li>Exercise intolerance</li>
          <li>Hindlimb weakness</li>
          <li>Polycythemia (compensatory)</li>
          <li>NO continuous murmur (pressures equalized)</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Continuous murmur (machinery, locomotive) ที่ L base 3rd ICS</li>
          <li>Murmur radiates กว้าง — entire L thorax · ได้ยินทาง R</li>
          <li>มักดังมาก (grade 4-6/6)</li>
          <li>Palpable thrill ที่ L base</li>
          <li>Bounding femoral pulse (key feature)</li>
          <li>Wide pulse pressure (high systolic - low diastolic)</li>
          <li>Tachycardia</li>
          <li>Pulmonary crackles ถ้ามี CHF</li>
        </ul>
      `,
      diagnosis: `
        <ul>
          <li><strong>Echocardiogram</strong> (essential):
            <ul>
              <li>Direct visualization ของ PDA จาก L cranial view</li>
              <li>Color Doppler: turbulent retrograde flow ใน main pulmonary artery</li>
              <li>Continuous flow on PW Doppler</li>
              <li>LA + LV enlargement (volume overload)</li>
              <li>Hyperkinetic LV motion</li>
              <li>⭐ Estimate ductus size + direction (L→R vs R→L)</li>
              <li>Bubble study confirm ถ้าสงสัย reverse PDA</li>
            </ul>
          </li>
          <li><strong>Thoracic radiograph</strong>:
            <ul>
              <li>Generalized cardiomegaly</li>
              <li>LA enlargement</li>
              <li>Pulmonary overcirculation (engorged vessels)</li>
              <li>"3 knuckles" sign (DV view): aortic arch + main PA + LA bulges</li>
              <li>Pulmonary edema ถ้ามี CHF</li>
            </ul>
          </li>
          <li><strong>ECG</strong>: ± LV enlargement (tall R), ± atrial enlargement (P mitrale)</li>
          <li><strong>BP</strong>: wide pulse pressure (e.g., 180/40)</li>
          <li><strong>CBC</strong>: polycythemia ถ้า reverse PDA</li>
          <li><strong>Cardiology referral</strong> สำหรับ closure</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Aortopulmonary fistula</strong> (rare)</li>
          <li><strong>Aortic regurgitation + Pulmonic stenosis</strong> (combined defect)</li>
          <li><strong>Coronary AV fistula</strong></li>
          <li><strong>Anomalous coronary artery</strong></li>
          <li><strong>Other continuous murmurs</strong>: ruptured sinus of Valsalva, AV fistula</li>
        </ul>
      `,
      treatment: `
        <p><strong>L→R PDA — closure indicated (often curative):</strong></p>

        <ul>
          <li>⭐ <strong>Transcatheter closure (Amplatz Canine Ductal Occluder, coil)</strong>:
            <ul>
              <li>Minimally invasive · femoral vascular access</li>
              <li>Gold standard ถ้า PDA size + dog size suitable</li>
              <li>Day procedure · low complication rate</li>
              <li>~95% success rate</li>
              <li>Specialty referral required</li>
            </ul>
          </li>
          <li><strong>Surgical ligation</strong>:
            <ul>
              <li>Lateral thoracotomy · ผูก ductus ด้วย suture</li>
              <li>ใช้ถ้า catheter ไม่ feasible (very small dog, large PDA)</li>
              <li>~95% success · rare ductus rupture catastrophe</li>
            </ul>
          </li>
        </ul>

        <p><strong>Pre-/peri-procedure care:</strong></p>
        <ul>
          <li>Stabilize CHF ถ้ามี (furosemide, pimobendan, ACEi)</li>
          <li>Pre-op echo + thoracic radiograph</li>
          <li>Anesthesia: cardiac-friendly (etomidate induction · maintain BP)</li>
          <li>Pre-op bloods + coag</li>
          <li>Antibiotic prophylaxis (cefazolin)</li>
        </ul>

        <p><strong>Post-procedure:</strong></p>
        <ul>
          <li>ICU monitoring 24 hr</li>
          <li>Pain management (opioids)</li>
          <li>Recheck echo ที่ 4-12 weeks</li>
          <li>Wean cardiac medications gradually ถ้า reversal</li>
          <li>หมาส่วนใหญ่กลับ normal function</li>
        </ul>

        <p><strong>R→L PDA management:</strong></p>
        <ul>
          <li>⚠️ <strong>ห้ามปิด</strong> (จะ acute RV failure + death)</li>
          <li>Phlebotomy ถ้า PCV &gt; 65% (q3-6 months)</li>
          <li>Sildenafil สำหรับ pulmonary hypertension</li>
          <li>Restrict exercise</li>
          <li>Poor long-term prognosis · median 1-3 years</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">PDA Outcomes — Surgical Correction</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">~95%</span>
              <span class="num-label">Successful closure</span>
            </div>
            <div class="num-card">
              <span class="num-big">&lt;5%</span>
              <span class="num-label">Major complications</span>
            </div>
            <div class="num-card">
              <span class="num-big">Normal</span>
              <span class="num-label">Life expectancy ถ้าปิดเร็ว</span>
            </div>
            <div class="num-card">
              <span class="num-big">60-80%</span>
              <span class="num-label">Mortality ภายใน 1 yr ถ้าไม่ปิด</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>Early closure = essentially curative</strong><br>
          📌 Delay = irreversible cardiac changes + pulmonary HT</p>
        </div>
      `,
      complications: `
        <ul>
          <li><strong>CHF</strong> ถ้าไม่ปิด (early dyspnea, edema)</li>
          <li><strong>Pulmonary hypertension</strong> ถ้า chronic (years)</li>
          <li><strong>Reverse shunting</strong> (Eisenmenger physiology)</li>
          <li><strong>Atrial fibrillation</strong> จาก severe LA enlargement</li>
          <li><strong>Endocarditis</strong> ที่ ductus site (very rare)</li>
          <li><strong>Surgical: ductus rupture</strong> (catastrophic — emergency thoracotomy)</li>
          <li><strong>Catheter: device embolization</strong> (rare with experienced operator)</li>
          <li><strong>Recurrent shunt</strong> ถ้า incomplete closure (rare)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>L→R PDA, surgically corrected early:</strong> Excellent · normal life expectancy</li>
          <li><strong>L→R PDA, late correction (after CHF):</strong> Good แต่มี residual cardiac changes</li>
          <li><strong>L→R PDA, no correction:</strong> 60-80% mortality first year</li>
          <li><strong>R→L PDA:</strong> Poor · 1-3 year survival</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 3b — Congenital (PS + SAS + VSD)
     ============================================================ */

  {
    id: 'card-pulmonic-stenosis',
    titleEn: 'Pulmonic Stenosis (PS)',
    titleTh: 'PS — ลิ้น Pulmonic ตีบ',
    type: 'disease',
    system: 'congenital',
    species: ['dog', 'cat'],
    tags: ['PS', 'pulmonic stenosis', 'pulmonary stenosis', 'balloon valvuloplasty', 'right heart', 'congenital'],
    aliases: ['PS', 'pulmonary stenosis'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Pulmonic Stenosis (PS)</strong> — narrowing ที่/ใกล้ pulmonic valve · RV outflow obstruction</p>
        <ul>
          <li>⭐ One of the most common canine congenital defects (15-20%)</li>
          <li>Predisposed breeds: <strong>English Bulldog, Boxer, French Bulldog, Beagle, Mastiff, Cocker Spaniel</strong></li>
          <li>Cat: rare</li>
          <li>มัก dx ที่ puppy vaccination (murmur)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">PS Anatomic Types</span>
          <table>
            <tr><th>Type</th><th>Description</th><th>Notes</th></tr>
            <tr><td><strong>Type A (valvular)</strong></td><td>Fused/thickened cusps · poststenotic dilation ของ MPA</td><td>Most common · ตอบสนองต่อ BVP ดี</td></tr>
            <tr><td><strong>Type B (dysplastic)</strong></td><td>Hypoplastic annulus + valve</td><td>Bulldog, Boxer · response BVP น้อย · อาจต้อง surgery</td></tr>
            <tr><td><strong>Subvalvular</strong></td><td>Below valve (RV outflow)</td><td>Less common</td></tr>
            <tr><td><strong>Supravalvular</strong></td><td>Above valve ใน main PA</td><td>Rare</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Type A</strong> = balloon valvuloplasty (BVP) มัก effective<br>
          📌 ⚠️ <strong>Type B (Bulldog)</strong> = R-divisional coronary artery อาจวิ่งข้าม RV outflow → BVP อาจ rupture artery (ทำ CT angio ก่อน!)</p>
        </div>
      `,
      etiology: `
        <ul>
          <li>Genetic / inherited (polygenic)</li>
          <li>Breed-specific (Bulldog familial)</li>
          <li>Type B Bulldog: associated with R2A (single right coronary artery anomaly)</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>RV outflow obstruction</li>
          <li>↑ RV pressure เพื่อ overcome obstruction (concentric hypertrophy)</li>
          <li>RV กลายเป็น stiff (diastolic dysfunction)</li>
          <li>RA enlargement → tricuspid regurgitation</li>
          <li>Severe: RV failure, ascites, syncope</li>
          <li>Pressure gradient across valve = severity marker</li>
          <li>Sudden death จาก arrhythmia possible (โดยเฉพาะ severe PS, exercise)</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li>Mild PS: asymptomatic (incidental murmur finding)</li>
          <li>Moderate PS: occasional exercise intolerance</li>
          <li>Severe PS:
            <ul>
              <li>⚠️ <strong>Syncope</strong> (especially exertional)</li>
              <li>Exercise intolerance</li>
              <li>Right CHF: ascites, hepatomegaly</li>
              <li>⚠️ Sudden death</li>
            </ul>
          </li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Systolic ejection murmur · L base (3rd ICS) · grade 3-6/6</li>
          <li>Murmur radiates ไป right hemithorax + cervical region</li>
          <li>Thrill ถ้า grade 4+</li>
          <li>S2 split (or paradoxical) ใน severe</li>
          <li>JVP elevation ถ้า RV failure</li>
          <li>Ascites ถ้า right CHF</li>
        </ul>
      `,
      diagnosis: `
        <ul>
          <li><strong>Echocardiogram</strong>:
            <ul>
              <li>Thickened/fused pulmonic valve cusps (Type A) หรือ dysplastic (Type B)</li>
              <li>Post-stenotic dilation ของ main PA (Type A characteristic)</li>
              <li>RV concentric hypertrophy</li>
              <li>RA enlargement</li>
              <li>Septal flattening (D-shaped LV)</li>
              <li><strong>CW Doppler:</strong> peak gradient across valve
                <ul>
                  <li>Mild &lt; 50 mmHg</li>
                  <li>Moderate 50-80 mmHg</li>
                  <li>Severe &gt; 80 mmHg (BVP indicated)</li>
                </ul>
              </li>
              <li>Tricuspid regurgitation jet</li>
            </ul>
          </li>
          <li><strong>CT angiography</strong> (Bulldog Type B): essential ก่อน BVP เพื่อ assess R2A</li>
          <li><strong>Thoracic radiograph</strong>: RV enlargement, post-stenotic MPA bulge, normal lung fields (until CHF)</li>
          <li><strong>ECG</strong>: right axis deviation, S waves ใน lead I, II, aVF (RV strain)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">PS Severity by Pressure Gradient</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">&lt;50</span>
              <span class="num-label">Mild · monitor</span>
            </div>
            <div class="num-card">
              <span class="num-big">50-80</span>
              <span class="num-label">Moderate · BVP ถ้า symptomatic</span>
            </div>
            <div class="num-card">
              <span class="num-big">&gt;80</span>
              <span class="num-label">Severe · BVP indicated</span>
            </div>
            <div class="num-card">
              <span class="num-big">&gt;100</span>
              <span class="num-label">Critical · syncope risk</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Bernoulli: gradient (mmHg) = 4 × (PV velocity)²<br>
          📌 ⭐ <strong>BVP indicated ถ้า gradient &gt; 80 mmHg หรือ symptomatic</strong></p>
        </div>
      `,
      differential: `
        <ul>
          <li><strong>SAS (subaortic stenosis)</strong> — different murmur location · LV affected</li>
          <li><strong>Tricuspid dysplasia</strong> — RA enlargement, TR jet</li>
          <li><strong>Tetralogy of Fallot</strong> — combined PS + VSD + RV hypertrophy + overriding aorta · cyanosis</li>
          <li><strong>Heart base tumor</strong> — older dog</li>
          <li><strong>Innocent puppy murmur</strong> — soft, resolves by 4-5 mo</li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment by severity:</strong></p>

        <ul>
          <li><strong>Mild PS (gradient &lt; 50):</strong>
            <ul>
              <li>No medication needed</li>
              <li>Annual echo to monitor</li>
              <li>Avoid extreme exercise</li>
            </ul>
          </li>
          <li><strong>Moderate PS (50-80):</strong>
            <ul>
              <li>Atenolol ถ้า symptomatic (ลด RV myocardial O2 demand)</li>
              <li>BVP ถ้า symptomatic หรือ progressive</li>
              <li>Echo every 6-12 months</li>
            </ul>
          </li>
          <li><strong>Severe PS (&gt; 80) หรือ symptomatic:</strong>
            <ul>
              <li>⭐ <strong>Balloon valvuloplasty (BVP)</strong> — gold standard intervention
                <ul>
                  <li>Catheter ผ่าน femoral vein</li>
                  <li>Balloon inflated across stenotic valve</li>
                  <li>ลด gradient 30-70% typically</li>
                  <li>Cardiology referral</li>
                </ul>
              </li>
              <li>Atenolol pre-/post-procedure</li>
              <li>Surgery (open valve repair) reserved สำหรับ failed BVP</li>
            </ul>
          </li>
          <li><strong>Bulldog Type B with R2A:</strong>
            <ul>
              <li>⚠️ Pre-procedure CT angiography mandatory</li>
              <li>Modified BVP technique หรือ surgical alternative</li>
              <li>Higher risk of complications</li>
            </ul>
          </li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Right CHF</strong> (ascites, hepatic congestion)</li>
          <li><strong>Syncope</strong></li>
          <li><strong>Sudden death</strong> (โดยเฉพาะ severe + exercise)</li>
          <li><strong>Arrhythmia</strong></li>
          <li><strong>Pulmonary regurgitation</strong> หลัง BVP (mild · มัก well-tolerated)</li>
          <li><strong>BVP failure / restenosis</strong></li>
          <li><strong>Coronary rupture</strong> (Bulldog R2A)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Mild PS:</strong> Normal life expectancy</li>
          <li><strong>Moderate PS:</strong> Generally good · monitoring</li>
          <li><strong>Severe PS, BVP successful:</strong> Significantly improved · มัก normal life</li>
          <li><strong>Severe PS, no intervention:</strong> Reduced lifespan · sudden death risk</li>
          <li><strong>Bulldog Type B:</strong> More guarded</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-sas',
    titleEn: 'Subaortic Stenosis (SAS)',
    titleTh: 'SAS — ตีบใต้ลิ้น Aortic',
    type: 'disease',
    system: 'congenital',
    species: ['dog'],
    tags: ['SAS', 'subaortic stenosis', 'aortic stenosis', 'Newfoundland', 'Boxer', 'Golden', 'sudden death'],
    aliases: ['SAS', 'subvalvular AS', 'อะออร์ติคตีบ'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Subaortic Stenosis (SAS)</strong> — fibromuscular ring/ridge ใต้ aortic valve · LV outflow obstruction</p>
        <ul>
          <li>⭐ หนึ่งใน most common canine congenital defects</li>
          <li>Predisposed breeds: <strong>Newfoundland (มากที่สุด), Golden Retriever, Boxer, Rottweiler, German Shepherd, Bull Terrier</strong></li>
          <li>Inherited (autosomal dominant ใน Newfoundland)</li>
          <li>Cat: very rare</li>
          <li>พัฒนาในช่วง weeks/months แรกของชีวิต — อาจไม่มีตั้งแต่เกิด</li>
          <li>Progress ใน 6-12 months แรก แล้ว stable</li>
        </ul>

        <p><strong>Severity classification:</strong></p>
        <ul>
          <li>Mild: gradient &lt; 50 mmHg</li>
          <li>Moderate: 50-80 mmHg</li>
          <li>Severe: &gt; 80 mmHg (sudden death risk)</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li>Genetic (inherited polygenic / autosomal dominant)</li>
          <li>Newfoundland: heritable single major gene</li>
          <li>Pathology: fibromuscular ring/ridge ใน LVOT ใต้ aortic valve</li>
          <li>บางรายมี mitral valve dysplasia ร่วม</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>LV outflow obstruction ที่ subvalvular level</li>
          <li>↑ LV pressure เพื่อ maintain CO</li>
          <li>LV concentric hypertrophy</li>
          <li>↑ Myocardial O2 demand</li>
          <li>Subendocardial ischemia (severe cases)</li>
          <li>Ventricular arrhythmia substrate</li>
          <li>⚠️ Sudden death (especially during exercise) จาก VT/VF</li>
          <li>Late: CHF ถ้า severe untreated</li>
          <li>High-velocity jet damages aortic valve → endocarditis predisposition</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li>Mild SAS: asymptomatic</li>
          <li>Moderate SAS: usually asymptomatic</li>
          <li>Severe SAS:
            <ul>
              <li>⚠️ <strong>Exercise intolerance, syncope</strong></li>
              <li>⚠️ <strong>Sudden death</strong> (มักระหว่าง exertion · 30-50% ของ severely affected)</li>
              <li>CHF ใน advanced cases</li>
            </ul>
          </li>
          <li>หลายตัวที่ identify ได้ตอน puppy โดย murmur (asymptomatic)</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>⭐ Systolic ejection murmur ที่ <strong>L base 4th ICS (aortic area)</strong></li>
          <li>Radiates ขึ้น carotids (cervical region)</li>
          <li>Grade variable (1-6) แต่ไม่ correlate กับ severity เสมอ</li>
          <li>Pulse: weak/parvus et tardus (slow rising) ใน severe</li>
          <li>Thrill ที่ L base + cervical area ใน severe</li>
          <li>อาจมี diastolic murmur ถ้า aortic regurgitation (concurrent endocarditis red flag)</li>
        </ul>
      `,
      diagnosis: `
        <ul>
          <li><strong>Echocardiogram</strong> (gold standard):
            <ul>
              <li>Subaortic ridge หรือ ring (fibromuscular tissue ใต้ valve)</li>
              <li>LV concentric hypertrophy</li>
              <li>Post-stenotic aortic dilation (variable)</li>
              <li>⭐ <strong>CW Doppler peak gradient</strong> (key measurement)
                <ul>
                  <li>Mild &lt; 50 mmHg</li>
                  <li>Moderate 50-80 mmHg</li>
                  <li>Severe &gt; 80 mmHg</li>
                </ul>
              </li>
              <li>± Aortic regurgitation</li>
              <li>Hyperdynamic LV motion</li>
              <li>Repeat echo ที่ 12-18 months เพื่อ confirm stability (severity progress ตอนแรก)</li>
            </ul>
          </li>
          <li><strong>Thoracic radiograph</strong>: usually normal · LV enlargement ใน severe</li>
          <li><strong>ECG</strong>: ± LV hypertrophy pattern (tall R waves), ventricular arrhythmia</li>
          <li><strong>Holter monitor</strong> — recommended สำหรับ severe SAS เพื่อ detect VT</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">⚠️ SAS Sudden Death Risk Factors</span>
          <ul>
            <li>Gradient &gt; 80 mmHg</li>
            <li>Syncope history</li>
            <li>VT on Holter</li>
            <li>ST segment changes (subendocardial ischemia)</li>
            <li>Predisposed breed (Newfoundland)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>Restrict severe SAS dogs จาก intense exercise</strong> · risk-stratify ด้วย Holter<br>
          📌 SAS = #1 cause ของ canine sudden cardiac death ใน young athletic breeds</p>
        </div>
      `,
      differential: `
        <ul>
          <li><strong>Innocent puppy murmur</strong> (resolves by 4-5 mo)</li>
          <li><strong>HCM</strong> (cat or dog) — different echo</li>
          <li><strong>Pulmonic stenosis</strong> — different location</li>
          <li><strong>Aortic stenosis valvular</strong> — at valve level (rare ในหมา)</li>
          <li><strong>Endocarditis aortic</strong> (acquired)</li>
          <li><strong>Anemia-related murmur</strong></li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment options (limited efficacy):</strong></p>

        <ul>
          <li><strong>Mild SAS:</strong>
            <ul>
              <li>No medication</li>
              <li>Annual echo</li>
              <li>Normal exercise OK</li>
              <li>Breeding considerations (don't breed)</li>
            </ul>
          </li>
          <li><strong>Moderate-Severe SAS:</strong>
            <ul>
              <li>⭐ <strong>Atenolol 0.5-1 mg/kg PO q12h</strong>
                <ul>
                  <li>ลด myocardial O2 demand</li>
                  <li>ลด sudden death risk (controversial evidence — Meurs study)</li>
                  <li>ชะลอ HR · ลด ventricular arrhythmia</li>
                </ul>
              </li>
              <li><strong>Exercise restriction</strong>: หลีก strenuous activity ใน severe</li>
              <li><strong>BVP/surgery</strong>: limited benefit · gradient มักกลับมาใน 1-2 ปี</li>
              <li><strong>Endocarditis prophylaxis</strong>:
                <ul>
                  <li>Antibiotics ระหว่าง dental procedures (amoxi-clav 22 mg/kg PO 1 hr pre, then q8h × 24 hr)</li>
                  <li>Treat skin infections promptly</li>
                </ul>
              </li>
              <li>Holter monitoring annually สำหรับ severe SAS</li>
            </ul>
          </li>
        </ul>

        <p><strong>Newer interventional approaches:</strong></p>
        <ul>
          <li><strong>Balloon dilation</strong> with cutting balloon — emerging, modest gradient reduction</li>
          <li><strong>Surgical resection of ridge</strong> — open heart surgery, rarely done</li>
          <li>ส่วนใหญ่ managed medically</li>
        </ul>

        <p><strong>Breeding recommendations:</strong></p>
        <ul>
          <li>Affected dogs (any severity) — DO NOT BREED</li>
          <li>Breed organizations recommend echo screening</li>
          <li>Newfoundland: ofa.org cardiac registry</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>⚠️ <strong>Sudden death</strong> (severe SAS · exercise) — main concern</li>
          <li><strong>Endocarditis</strong> ที่ aortic valve (high-velocity jet damages endothelium)</li>
          <li><strong>Aortic regurgitation</strong> progressive</li>
          <li><strong>CHF</strong> ใน advanced cases</li>
          <li><strong>Ventricular arrhythmias</strong></li>
          <li><strong>Subendocardial fibrosis / infarction</strong></li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Mild SAS:</strong> Normal lifespan</li>
          <li><strong>Moderate SAS:</strong> Often normal · annual monitoring</li>
          <li><strong>Severe SAS:</strong> ~50% มีชีวิต &lt; 4 years · sudden death risk · atenolol อาจช่วย</li>
          <li><strong>Endocarditis development:</strong> Worsens prognosis significantly</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-vsd',
    titleEn: 'Ventricular Septal Defect (VSD)',
    titleTh: 'VSD — รูที่ผนัง Ventricle',
    type: 'disease',
    system: 'congenital',
    species: ['dog', 'cat'],
    tags: ['VSD', 'ventricular septal defect', 'shunt', 'congenital', 'L-R shunt'],
    aliases: ['VSD', 'septal defect'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Ventricular Septal Defect (VSD)</strong> — รูที่ interventricular septum · มี communication ระหว่าง LV และ RV</p>
        <ul>
          <li>3rd-4th most common canine congenital defect (~5-10%)</li>
          <li>More common ในแมวเมื่อเทียบกับ congenital อื่น</li>
          <li>Most common type: <strong>perimembranous</strong> (subaortic / "infracristal")</li>
          <li>Other types: muscular, supracristal, inlet</li>
          <li>Direction: usually L→R (small) หรือ bidirectional (large)</li>
          <li>Predisposed breeds: English Springer Spaniel, Lakeland Terrier, English Bulldog</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">VSD Size + Hemodynamic Impact</span>
          <table>
            <tr><th>Size</th><th>Pressure relationship</th><th>Murmur</th><th>Treatment</th></tr>
            <tr><td><strong>Small (restrictive)</strong></td><td>LV ≫ RV (steep gradient)</td><td>⭐ LOUD systolic (high velocity through small hole)</td><td>None · monitor · "loud is good"</td></tr>
            <tr><td><strong>Moderate</strong></td><td>LV &gt; RV</td><td>Moderate</td><td>Variable · echo monitor</td></tr>
            <tr><td><strong>Large (non-restrictive)</strong></td><td>LV ≈ RV (equalized)</td><td>⚠️ Soft / no murmur · poor prognosis</td><td>Pulmonary HT risk · Eisenmenger</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Counterintuitive: SMALL VSD = LOUD murmur</strong> (high velocity through restriction)<br>
          📌 ⭐ <strong>LARGE VSD = SOFT murmur</strong> (equalized pressures, low velocity)<br>
          📌 "Maladie de Roger" = small restrictive VSD (good prognosis)</p>
        </div>
      `,
      etiology: `
        <ul>
          <li>Genetic (polygenic)</li>
          <li>Failure of septum to close fully ระหว่าง embryogenesis</li>
          <li>Often associated with other defects (PDA, PS, AS = "complex congenital")</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>L→R shunt (LV pressure &gt; RV pressure)</li>
          <li>Excess flow ไป RV → pulmonary circulation</li>
          <li>↑ Pulmonary blood flow</li>
          <li>↑ LA + LV volume overload (returning blood)</li>
          <li>ถ้าเล็ก (Roger) — minimal hemodynamic impact, lifelong tolerated</li>
          <li>ถ้า moderate-large — LV volume overload → CHF</li>
          <li>Long-term large VSD → pulmonary hypertension → reverse shunt (Eisenmenger) → cyanosis · poor prognosis</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li><strong>Small VSD:</strong> Asymptomatic · loud murmur เป็น sign เดียว (มัก incidental ที่ puppy exam)</li>
          <li><strong>Moderate VSD:</strong>
            <ul>
              <li>Exercise intolerance · failure to thrive</li>
              <li>Cough</li>
              <li>Tachypnea</li>
            </ul>
          </li>
          <li><strong>Large VSD with PHT/Eisenmenger:</strong>
            <ul>
              <li>Cyanosis</li>
              <li>Severe exercise intolerance</li>
              <li>Polycythemia</li>
              <li>Syncope</li>
            </ul>
          </li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>⭐ Systolic murmur ที่ <strong>RIGHT</strong> hemithorax (4th ICS) — radiates จาก L→R direction
            <ul>
              <li>Small VSD: loud (4-6/6) holosystolic, มัก thrill</li>
              <li>Large VSD: softer หรือ absent</li>
            </ul>
          </li>
          <li>± Soft systolic murmur ที่ L apex (functional MR จาก LV dilation)</li>
          <li>ถ้ามี pulmonary HT: loud P2, RV heave</li>
          <li>Cyanosis ถ้า Eisenmenger physiology</li>
        </ul>
      `,
      diagnosis: `
        <ul>
          <li><strong>Echocardiogram</strong> (essential):
            <ul>
              <li>Direct visualization ของ defect (right parasternal long-axis · 4-chamber views)</li>
              <li>Color Doppler: turbulent flow LV→RV (high-velocity ถ้าเล็ก)</li>
              <li>Estimate defect size + location</li>
              <li>LV + LA enlargement (volume overload)</li>
              <li>RV pressure estimation (TR jet → assess pulmonary HT)</li>
              <li>หา associated defects (PDA, PS, AS)</li>
            </ul>
          </li>
          <li><strong>Thoracic radiograph</strong>:
            <ul>
              <li>Small VSD: usually normal</li>
              <li>Moderate-large VSD: cardiomegaly · pulmonary overcirculation</li>
              <li>CHF: pulmonary edema</li>
            </ul>
          </li>
          <li><strong>ECG</strong>: ± LV enlargement</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Tricuspid regurgitation</strong> — different murmur quality + RA enlargement</li>
          <li><strong>Mitral regurgitation</strong> — L apex location vs VSD R</li>
          <li><strong>Tetralogy of Fallot</strong> — VSD + PS + RV hypertrophy + overriding aorta · cyanosis</li>
          <li><strong>Atrial septal defect</strong> — different shunt level</li>
          <li><strong>Aortopulmonary window</strong></li>
        </ul>
      `,
      treatment: `
        <ul>
          <li><strong>Small VSD (Maladie de Roger):</strong>
            <ul>
              <li>No medication needed</li>
              <li>Annual echo เพื่อ confirm stability</li>
              <li>Endocarditis prophylaxis สำหรับ dental procedures</li>
              <li>Excellent prognosis</li>
            </ul>
          </li>
          <li><strong>Moderate VSD without CHF:</strong>
            <ul>
              <li>ACE inhibitor (benazepril) — ลด afterload</li>
              <li>Echo monitoring every 6-12 months</li>
              <li>Closure consideration (transcatheter หรือ surgical)</li>
            </ul>
          </li>
          <li><strong>VSD with CHF:</strong>
            <ul>
              <li>FSAP (Furosemide + Spironolactone + ACEi + Pimobendan)</li>
              <li>Surgical/transcatheter closure ถ้า feasible</li>
            </ul>
          </li>
          <li><strong>Large VSD with pulmonary HT (Eisenmenger):</strong>
            <ul>
              <li>⚠️ ห้ามปิด (precipitates RV failure)</li>
              <li>Sildenafil สำหรับ pulmonary HT</li>
              <li>Phlebotomy ถ้า PCV สูงมาก</li>
              <li>Exercise restriction</li>
              <li>Poor prognosis</li>
            </ul>
          </li>
        </ul>

        <p><strong>Closure options (specialty):</strong></p>
        <ul>
          <li><strong>Transcatheter closure</strong> (Amplatz device) — emerging ใน vet medicine</li>
          <li><strong>Surgical closure</strong> — ต้อง cardiopulmonary bypass · rarely done</li>
          <li><strong>Pulmonary artery banding</strong> — palliative · ป้องกัน Eisenmenger physiology</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>CHF</strong> ถ้า moderate-large VSD</li>
          <li><strong>Pulmonary hypertension</strong> → Eisenmenger</li>
          <li><strong>Endocarditis</strong> (aortic valve · โดยเฉพาะถ้า jet กระทบ valve)</li>
          <li><strong>Aortic regurgitation</strong> (perimembranous VSD with prolapse)</li>
          <li><strong>Spontaneous closure</strong> (~20% ของ small VSDs ใน first year — favorable)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Small VSD (Roger):</strong> Excellent · normal lifespan</li>
          <li><strong>Moderate VSD:</strong> Variable · CHF risk</li>
          <li><strong>Large VSD (Eisenmenger):</strong> Poor · 1-3 year survival</li>
          <li><strong>Surgically corrected:</strong> Good ถ้าทำก่อน pulmonary HT develops</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 4 — Arrhythmias + CHF Management (5)
     ============================================================ */

  {
    id: 'card-afib',
    titleEn: 'Atrial Fibrillation (AFib)',
    titleTh: 'ภาวะหัวใจห้องบนเต้นพลิ้ว (AFib)',
    type: 'disease',
    system: 'arrhythmia',
    species: ['dog', 'cat'],
    tags: ['atrial fibrillation', 'AFib', 'rate control', 'diltiazem', 'irregularly irregular', 'pulse deficit'],
    aliases: ['AF', 'A-fib', 'หัวใจเต้นพลิ้ว'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Atrial Fibrillation (AFib)</strong> — chaotic electrical activity ใน atria · ไม่มี organized atrial contraction · irregular ventricular response</p>
        <ul>
          <li>⭐ Most common pathologic arrhythmia ในหมา (especially large/giant breeds)</li>
          <li>Cat: rare · มัก secondary ต่อ severe atrial enlargement (HCM/RCM)</li>
          <li>Two main scenarios:
            <ul>
              <li><strong>Secondary AFib</strong> — จาก structural heart disease (DCM, MMVD, dilated atria)</li>
              <li><strong>"Lone AFib"</strong> — ไม่มี structural disease (giant breeds: Great Dane, Irish Wolfhound, Newfoundland)</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">AFib Classifications</span>
          <table>
            <tr><th>Type</th><th>Duration</th><th>Notes</th></tr>
            <tr><td><strong>Paroxysmal</strong></td><td>Spontaneous resolution &lt; 7 days</td><td>Often dx by Holter</td></tr>
            <tr><td><strong>Persistent</strong></td><td>&gt; 7 days · ตอบสนอง cardioversion</td><td>Rate vs rhythm control</td></tr>
            <tr><td><strong>Permanent</strong></td><td>Long-standing · cardioversion ไม่สำเร็จ</td><td>⭐ ส่วนใหญ่ของ vet AFib</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Vet AFib ส่วนใหญ่เป็น <strong>permanent</strong> · เน้น rate control<br>
          📌 Cardioversion ใน vet ทำได้ยาก/recurrence สูง</p>
        </div>
      `,
      etiology: `
        <p><strong>Underlying causes (dog):</strong></p>
        <ul>
          <li>⭐ <strong>DCM</strong> (Doberman, Boxer, Great Dane) — most common</li>
          <li>⭐ <strong>MMVD advanced</strong> (LA enlargement)</li>
          <li>Lone AFib (giant breeds, no structural disease)</li>
          <li>Pericardial disease</li>
          <li>Congenital (severe AS, large VSD)</li>
          <li>Hyperthyroid (rare in dogs)</li>
          <li>Pulmonary HT (severe)</li>
          <li>Post-cardiac surgery</li>
        </ul>

        <p><strong>Cat:</strong></p>
        <ul>
          <li>HCM with severe LA enlargement</li>
          <li>RCM</li>
          <li>Hyperthyroidism</li>
          <li>Dilated cardiomyopathy (rare since taurine fortification)</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Multiple re-entry circuits ใน atrial myocardium</li>
          <li>Atria "fibrillate" 400-600 BPM · ไม่มี coordinated contraction</li>
          <li>AV node bombarded with impulses · conducts irregularly</li>
          <li>Ventricular rate determined by AV node refractory period</li>
          <li>Loss of atrial "kick" (~20% CO loss)</li>
          <li>Tachycardia + ↓ filling time → ↓ CO</li>
          <li>Stasis ใน atria → thrombus formation (especially cat)</li>
          <li>Tachycardia-induced cardiomyopathy ถ้า uncontrolled (HR &gt; 180 chronic)</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li>Many asymptomatic ตอน detect ครั้งแรก (especially lone AFib)</li>
          <li>Exercise intolerance · weakness</li>
          <li>Syncope</li>
          <li>Cough · dyspnea (CHF triggered by AFib)</li>
          <li>Palpitations (clients may report "racing heart")</li>
          <li>Cat: often presents with CHF or ATE</li>
        </ul>

        <p><strong>Physical exam — CLASSIC findings:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">AFib Classic Triad on Exam</span>
          <ul>
            <li>⭐ <strong>"Irregularly irregular" rhythm</strong> — no pattern at all</li>
            <li>⭐ <strong>Pulse deficit</strong> — HR auscultation &gt; femoral pulse rate</li>
            <li><strong>Variable intensity heart sounds</strong> (S1 amplitude varies with R-R)</li>
            <li>+ Tachycardia (HR 150-250 in dogs)</li>
            <li>± underlying disease murmur (MMVD, DCM)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>"Irregularly irregular + pulse deficit"</strong> = AFib until proven otherwise<br>
          📌 หลีก confusion ด้วย sinus arrhythmia (vs AFib): sinus arrhythmia = phasic with breath, regular pattern · AFib = chaotic, no pattern</p>
        </div>
      `,
      diagnosis: `
        <p><strong>ECG — defining features:</strong></p>
        <ul>
          <li>⭐ <strong>NO P waves</strong> (replaced by fibrillatory "f" waves)</li>
          <li>⭐ <strong>Irregularly irregular R-R intervals</strong></li>
          <li>QRS complexes <strong>narrow + normal morphology</strong> (supraventricular)</li>
          <li>Variable HR (often 150-250 in dogs)</li>
          <li>Baseline may show fine fibrillation waves</li>
        </ul>

        <p><strong>Workup:</strong></p>
        <ul>
          <li><strong>ECG (essential)</strong> — confirms diagnosis</li>
          <li><strong>Holter (24 hr)</strong> — assesses average HR + diurnal variation
            <ul>
              <li>Goal: <strong>average HR &lt; 125 BPM</strong> with rate control</li>
              <li>Identifies paroxysmal AFib</li>
            </ul>
          </li>
          <li><strong>Echocardiogram</strong> — identifies underlying disease + LA size + LV function</li>
          <li><strong>Thoracic radiograph</strong> — assess for CHF</li>
          <li><strong>NT-proBNP</strong> — supports cardiac disease severity</li>
          <li><strong>T4</strong> (rule out hyperthyroid)</li>
          <li><strong>Chemistry/electrolytes</strong> — baseline before antiarrhythmic</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Sinus arrhythmia</strong> — phasic, regular pattern, P waves present</li>
          <li><strong>Atrial flutter</strong> — sawtooth flutter waves, regular conduction</li>
          <li><strong>Frequent APCs/VPCs</strong> — irregular but with normal beats between</li>
          <li><strong>Multifocal atrial tachycardia</strong> — variable P morphology</li>
          <li><strong>2° AV block (variable)</strong> — different ECG pattern</li>
        </ul>
      `,
      treatment: `
        <p><strong>Strategy: Rate Control vs Rhythm Control</strong></p>
        <ul>
          <li>⭐ <strong>Rate control = mainstay in vet medicine</strong> (most cases permanent)</li>
          <li>Rhythm control (cardioversion) limited in vet · high recurrence</li>
          <li>Goal: HR &lt; 125 BPM (24-hr average on Holter) · &lt; 160 in clinic</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Rate Control Drugs — AFib</span>
          <table>
            <tr><th>Drug</th><th>Dose</th><th>Notes</th></tr>
            <tr><td><strong>⭐ Diltiazem (CD)</strong></td><td>1-3 mg/kg PO q8h</td><td>First-line · Ca channel blocker · also IV for acute</td></tr>
            <tr><td><strong>Digoxin</strong></td><td>0.003-0.005 mg/kg PO q12h</td><td>Adjunct · narrow window · monitor levels (1-2 ng/mL)</td></tr>
            <tr><td><strong>Diltiazem + Digoxin combo</strong></td><td>Each at lower dose</td><td>⭐ Synergistic · best HR control</td></tr>
            <tr><td><strong>Atenolol</strong></td><td>0.5-1 mg/kg PO q12h</td><td>Beta-blocker · use with caution in CHF</td></tr>
            <tr><td><strong>Sotalol</strong></td><td>1-3 mg/kg PO q12h</td><td>Class III antiarrhythmic + beta-blocker</td></tr>
            <tr><td><strong>Amiodarone</strong></td><td>10-15 mg/kg PO q12h × 7d, then q24h</td><td>Refractory · multiple side effects</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Diltiazem first-line</strong> · combine with digoxin if HR control inadequate<br>
          📌 ⚠️ Beta-blockers in active CHF = caution · negative inotropy</p>
        </div>

        <p><strong>Acute AFib with rapid ventricular response (HR &gt; 200):</strong></p>
        <ul>
          <li>⭐ <strong>Diltiazem IV</strong>: 0.05-0.25 mg/kg slow bolus over 5 min, repeat to effect (max 0.75 mg/kg)</li>
          <li>Then CRI 2-6 mcg/kg/min</li>
          <li>Transition to PO once stable</li>
          <li>Avoid digoxin IV (slow onset · arrhythmogenic)</li>
        </ul>

        <p><strong>Cardioversion (rare in vet):</strong></p>
        <ul>
          <li>Electrical cardioversion (synchronized DC shock) — possible but recurrence high</li>
          <li>Pharmacological: amiodarone</li>
          <li>Best candidates: lone AFib in giant breed without structural disease</li>
          <li>Specialty referral · TEE-guided to rule out atrial thrombus first</li>
        </ul>

        <p><strong>Anticoagulation (cat):</strong></p>
        <ul>
          <li>Cat AFib + LA enlargement → high ATE risk</li>
          <li>⭐ <strong>Clopidogrel 18.75 mg/cat PO q24h</strong></li>
          <li>± Enoxaparin if recurrent</li>
        </ul>

        <p><strong>Treat underlying disease:</strong></p>
        <ul>
          <li>MMVD: FSAP if CHF</li>
          <li>DCM: pimobendan + FSAP</li>
          <li>HCM cat: standard HCM Rx</li>
          <li>Hyperthyroid: methimazole/I-131</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">AFib HR Control Goals</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">&lt;125</span>
              <span class="num-label">24-hr Holter avg BPM</span>
            </div>
            <div class="num-card">
              <span class="num-big">&lt;160</span>
              <span class="num-label">Resting in-clinic BPM</span>
            </div>
            <div class="num-card">
              <span class="num-big">~20%</span>
              <span class="num-label">CO loss from absent atrial kick</span>
            </div>
            <div class="num-card">
              <span class="num-big">100+</span>
              <span class="num-label">Diltiazem trough · monitor</span>
            </div>
          </div>
        </div>
      `,
      complications: `
        <ul>
          <li><strong>CHF precipitation</strong> from rapid ventricular response</li>
          <li><strong>Tachycardia-induced cardiomyopathy</strong> (chronic uncontrolled)</li>
          <li><strong>ATE (cat)</strong> — major risk</li>
          <li><strong>Syncope</strong> from rapid rate</li>
          <li><strong>Drug side effects</strong>: diltiazem hypotension, digoxin toxicity</li>
          <li><strong>Sudden death</strong> uncommon directly from AFib</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Lone AFib (giant breed):</strong> Good with rate control · normal lifespan often</li>
          <li><strong>AFib + DCM:</strong> Median 6-12 months · AFib worsens prognosis</li>
          <li><strong>AFib + advanced MMVD:</strong> Reduced survival vs MMVD without AFib</li>
          <li><strong>Cat AFib:</strong> Poor · indicates severe atrial dz</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-vt-vpc',
    titleEn: 'Ventricular Tachycardia + VPCs',
    titleTh: 'หัวใจห้องล่างเต้นเร็ว (VT/VPC)',
    type: 'disease',
    system: 'arrhythmia',
    species: ['dog', 'cat'],
    tags: ['VT', 'VPC', 'ventricular tachycardia', 'PVC', 'lidocaine', 'sotalol', 'sudden death', 'Boxer ARVC'],
    aliases: ['PVCs', 'ventricular ectopy', 'VPCs'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Ventricular Premature Complexes (VPCs)</strong> และ <strong>Ventricular Tachycardia (VT)</strong> — abnormal beats originating below AV node</p>
        <ul>
          <li><strong>VPC</strong> = single early beat with wide bizarre QRS · no preceding P</li>
          <li><strong>Couplet</strong> = 2 VPCs in row</li>
          <li><strong>Triplet</strong> = 3 VPCs in row</li>
          <li><strong>VT</strong> = ≥ 4 consecutive VPCs at HR &gt; 160 (dog) or &gt; 220 (cat)</li>
          <li><strong>Sustained VT</strong> = &gt; 30 seconds duration</li>
          <li><strong>Idioventricular rhythm (slow VT)</strong> = VT at slow rate (HR similar to sinus, often benign)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">VT Classification — Hemodynamic + Morphologic</span>
          <table>
            <tr><th>Feature</th><th>Description</th><th>Significance</th></tr>
            <tr><td><strong>Sustained vs Non-sustained</strong></td><td>&gt; 30 sec vs &lt; 30 sec</td><td>Sustained = treat aggressively</td></tr>
            <tr><td><strong>Monomorphic</strong></td><td>Same QRS shape</td><td>Single focus</td></tr>
            <tr><td><strong>Polymorphic</strong></td><td>Variable QRS shape</td><td>⚠️ Multiple foci · higher risk</td></tr>
            <tr><td><strong>R-on-T phenomenon</strong></td><td>VPC falls on T wave</td><td>⚠️ Can trigger VF · DANGEROUS</td></tr>
            <tr><td><strong>Torsades de Pointes</strong></td><td>"Twisting" polymorphic VT</td><td>⚠️ QT prolongation · drug-induced</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>R-on-T = ventricular fibrillation precursor</strong> · treat urgently<br>
          📌 Polymorphic VT &gt; monomorphic VT in danger</p>
        </div>
      `,
      etiology: `
        <p><strong>Cardiac causes:</strong></p>
        <ul>
          <li>⭐ <strong>DCM</strong> (Doberman, Boxer ARVC, Great Dane)</li>
          <li>⭐ <strong>SAS (Newfoundland, Boxer)</strong></li>
          <li>HCM (cat)</li>
          <li>Myocarditis (Trypanosoma, parvo, sepsis)</li>
          <li>Cardiac trauma · contusion</li>
          <li>Cardiac neoplasia (HSA)</li>
          <li>Heartworm disease</li>
          <li>Pulmonary hypertension (severe)</li>
        </ul>

        <p><strong>Non-cardiac causes:</strong></p>
        <ul>
          <li>⭐ <strong>GDV/Splenectomy</strong> — common cause of post-op VPC/VT</li>
          <li><strong>Pancreatitis</strong> · sepsis</li>
          <li><strong>Electrolytes</strong>: hypoK, hypoMg, hyperK</li>
          <li><strong>Hypoxia</strong></li>
          <li><strong>Drug toxicity</strong>: digoxin, atropine overdose, halothane, TCAs, theophylline</li>
          <li><strong>Pheochromocytoma</strong></li>
          <li><strong>Spinal trauma · severe pain</strong></li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>Ectopic ventricular focus depolarizes before SA node</li>
          <li>Wave spreads through ventricle abnormally → wide QRS</li>
          <li>If single → VPC</li>
          <li>If repetitive → bigeminy, trigeminy, couplets, runs</li>
          <li>If sustained at &gt; 160 BPM → VT with hemodynamic compromise</li>
          <li>If VT degenerates with multiple foci → ventricular fibrillation (VF)</li>
          <li>VF = no effective contraction = cardiac arrest (within seconds)</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li>Many VPCs asymptomatic (incidental finding)</li>
          <li>Frequent VPCs/non-sustained VT: weakness, exercise intolerance</li>
          <li>Sustained VT:
            <ul>
              <li>⚠️ Syncope</li>
              <li>Collapse</li>
              <li>Sudden death</li>
              <li>Hypotension</li>
            </ul>
          </li>
          <li>Polymorphic VT / R-on-T: imminent VF risk</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Pulse deficit (VPC during refractory period)</li>
          <li>Irregular rhythm</li>
          <li>Variable intensity S1 (varies with stroke volume)</li>
          <li>Hypotension during VT</li>
          <li>Mucous membrane pallor in severe</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>ECG — defining features:</strong></p>
        <ul>
          <li>⭐ <strong>WIDE bizarre QRS</strong> (&gt; 0.07 sec dog, &gt; 0.05 sec cat)</li>
          <li>⭐ <strong>NO preceding P wave</strong></li>
          <li>T wave opposite direction to QRS</li>
          <li>Compensatory pause after VPC (full pause · vs APC = incomplete pause)</li>
          <li>Fusion beats / capture beats during VT (proves ventricular origin)</li>
          <li>AV dissociation in VT (P waves continue at slower rate · unrelated)</li>
        </ul>

        <p><strong>Workup:</strong></p>
        <ul>
          <li><strong>ECG (rhythm strip)</strong> — confirms VPCs/VT</li>
          <li><strong>Holter (24 hr)</strong> — quantifies VPCs · detects paroxysmal VT
            <ul>
              <li>Normal dog: &lt; 50 VPCs/24h</li>
              <li>Suspicious: &gt; 50 VPCs/24h</li>
              <li>Concerning: &gt; 100-1000 VPCs/24h, couplets, triplets, runs</li>
              <li>Doberman screen: any VPCs warrants further investigation</li>
              <li>Boxer ARVC: &gt; 100-300 VPCs/24h</li>
            </ul>
          </li>
          <li><strong>Echocardiogram</strong> — identifies structural disease (DCM, ARVC, SAS)</li>
          <li><strong>cTnI</strong> — myocardial damage marker</li>
          <li><strong>Chemistry/electrolytes</strong> — K, Mg, Ca</li>
          <li><strong>CBC + chemistry</strong> — sepsis, organ dysfunction</li>
          <li><strong>Abdominal US</strong> — splenic mass (HSA), GDV, pancreatitis</li>
          <li><strong>Genetic testing</strong> (Boxer striatin, Doberman)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Aberrantly conducted SVT</strong> — wide QRS but supraventricular origin (BBB or rate-related)</li>
          <li><strong>Ventricular escape rhythm</strong> — slow, after pause/block, protective</li>
          <li><strong>Idioventricular rhythm</strong> — slow VT (similar rate to sinus), often benign</li>
          <li><strong>Hyperkalemia</strong> — wide QRS but no P waves (different mechanism)</li>
          <li><strong>Severe sinus arrhythmia</strong> — distinguishable on closer look</li>
        </ul>
      `,
      treatment: `
        <p><strong>Indications for treatment:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">When to Treat VPC/VT</span>
          <ul>
            <li>⚠️ Sustained VT (&gt; 30 sec)</li>
            <li>⚠️ HR &gt; 180 BPM during VT</li>
            <li>⚠️ Hemodynamic compromise (hypotension, weakness, syncope)</li>
            <li>⚠️ R-on-T phenomenon</li>
            <li>⚠️ Polymorphic VT</li>
            <li>⚠️ Frequent couplets/triplets in symptomatic patient</li>
            <li>⚠️ Boxer/Doberman with &gt; 100-300 VPC/24h</li>
            <li>Generally do NOT treat: rare isolated VPCs, idioventricular rhythm, asymptomatic</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Treat the patient (symptoms + structural dz + Holter), not just the ECG<br>
          📌 Rare VPCs in healthy heart often benign</p>
        </div>

        <p><strong>Acute VT treatment (emergency):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Acute VT Drugs</span>
          <table>
            <tr><th>Drug</th><th>Dog dose</th><th>Cat dose</th></tr>
            <tr><td><strong>⭐ Lidocaine (1st-line)</strong></td><td>2 mg/kg IV bolus, repeat q5min × 3 max · then CRI 25-80 mcg/kg/min</td><td>⚠️ 0.25-0.5 mg/kg max (toxicity!)</td></tr>
            <tr><td><strong>Procainamide</strong></td><td>6-15 mg/kg IV slow over 5 min, then CRI 20-40 mcg/kg/min</td><td>1-2 mg/kg IV slow</td></tr>
            <tr><td><strong>Esmolol (β-blocker)</strong></td><td>0.05-0.5 mg/kg IV bolus, then CRI 25-200 mcg/kg/min</td><td>Same</td></tr>
            <tr><td><strong>Magnesium sulfate</strong></td><td>0.15-0.3 mEq/kg IV slow</td><td>Same · for torsades · refractory VT</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Lidocaine = #1 acute</strong> for VT in dogs (DON'T use in cats at high dose - seizures!)<br>
          📌 ⚠️ <strong>Cat lidocaine: 0.25-0.5 mg/kg MAX</strong> · severe neurotoxicity at higher doses<br>
          📌 Always treat underlying cause + correct K/Mg first</p>
        </div>

        <p><strong>Chronic management:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Chronic VT/VPC Drugs</span>
          <table>
            <tr><th>Drug</th><th>Dose (dog)</th><th>Notes</th></tr>
            <tr><td><strong>⭐ Sotalol</strong></td><td>1-3 mg/kg PO q12h</td><td>#1 chronic · β-blocker + Class III · monitor ECG initiation</td></tr>
            <tr><td><strong>Mexiletine</strong></td><td>5-8 mg/kg PO q8h</td><td>Oral lidocaine analog · combine with sotalol if refractory</td></tr>
            <tr><td><strong>Amiodarone</strong></td><td>10-15 mg/kg PO q12h × 7d, then q24h</td><td>Refractory · multiple side effects (LFT, thyroid, lung)</td></tr>
            <tr><td><strong>Atenolol</strong></td><td>0.5-1 mg/kg PO q12h</td><td>SAS · stress-induced VT</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Sotalol</strong> = first-line chronic for canine VT (Boxer ARVC, Doberman DCM)<br>
          📌 Sotalol + mexiletine combo for refractory<br>
          📌 ECG monitoring during sotalol initiation (proarrhythmia)</p>
        </div>

        <p><strong>Treat underlying cause:</strong></p>
        <ul>
          <li>DCM: pimobendan + FSAP</li>
          <li>SAS: atenolol</li>
          <li>GDV post-op: lidocaine CRI · usually resolves 24-72 hr</li>
          <li>Splenectomy: lidocaine CRI as needed</li>
          <li>Electrolytes: replace K, Mg</li>
          <li>Pain: opioids</li>
          <li>Sepsis: antimicrobials, supportive</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>⚠️ <strong>Ventricular fibrillation → cardiac arrest → death</strong></li>
          <li>⚠️ <strong>Sudden death</strong> (especially Doberman DCM, Boxer ARVC)</li>
          <li><strong>Hemodynamic collapse</strong> from sustained VT</li>
          <li><strong>Heart failure</strong> from frequent ectopy</li>
          <li><strong>Drug proarrhythmia</strong> (sotalol, mexiletine, etc.)</li>
          <li><strong>Cat lidocaine toxicity</strong> — seizures, death</li>
          <li><strong>Amiodarone side effects</strong>: hepatopathy, hypothyroidism, pulmonary fibrosis</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Idioventricular rhythm:</strong> Excellent · usually self-limiting</li>
          <li><strong>VPC, structurally normal heart:</strong> Generally good</li>
          <li><strong>VT with DCM:</strong> Guarded · sotalol improves</li>
          <li><strong>Boxer ARVC:</strong> Variable · sudden death common · sotalol helps</li>
          <li><strong>Doberman DCM with frequent VT:</strong> Sudden death risk 30-40%</li>
          <li><strong>R-on-T / polymorphic VT:</strong> Critical · high mortality</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-av-block',
    titleEn: 'Atrioventricular Block (AV Block)',
    titleTh: 'AV Block — บล็อกการนำไฟฟ้า',
    type: 'disease',
    system: 'arrhythmia',
    species: ['dog', 'cat'],
    tags: ['AV block', 'heart block', 'pacemaker', 'syncope', 'bradycardia', '3rd degree'],
    aliases: ['heart block', 'AVB'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Atrioventricular (AV) Block</strong> — impaired electrical conduction ผ่าน AV node/His-Purkinje system</p>
        <ul>
          <li>3 degrees of severity: 1st, 2nd, 3rd</li>
          <li>2nd degree subdivided: Mobitz Type I (Wenckebach), Type II</li>
          <li>3rd degree (complete) = atrioventricular dissociation</li>
          <li>Most common in older dogs · cocker spaniels, Pugs</li>
          <li>Can be congenital (rare)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">AV Block Classification</span>
          <table>
            <tr><th>Degree</th><th>Description</th><th>Clinical</th></tr>
            <tr><td><strong>1st degree</strong></td><td>PR &gt; 0.13s (dog) / &gt; 0.09s (cat) · ทุก P → QRS</td><td>Usually asymptomatic · benign</td></tr>
            <tr><td><strong>2nd degree Type I (Wenckebach)</strong></td><td>Progressive PR lengthening, then dropped QRS</td><td>Often vagal · usually benign</td></tr>
            <tr><td><strong>2nd degree Type II</strong></td><td>Constant PR, sudden dropped QRS</td><td>⚠️ Concerning · pacemaker may be needed</td></tr>
            <tr><td><strong>2nd degree high-grade</strong></td><td>Multiple consecutive blocked P waves</td><td>⚠️ Bridging to 3°</td></tr>
            <tr><td><strong>⭐ 3rd degree (complete)</strong></td><td>P + QRS unrelated · escape rhythm</td><td>⚠️⚠️ Pacemaker indicated · syncope/death</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>1° + 2° Type I = often benign</strong> (vagal, drug)<br>
          📌 ⚠️ <strong>2° Type II + 3° = pacemaker territory</strong></p>
        </div>
      `,
      etiology: `
        <ul>
          <li>⭐ <strong>Idiopathic fibrosis of AV node</strong> — most common (older dog)</li>
          <li><strong>High vagal tone</strong> — brachycephalic, athletes (1° + 2° Type I)</li>
          <li><strong>Drug-induced</strong>: digoxin, diltiazem, beta-blockers, atenolol</li>
          <li><strong>Cardiomyopathy</strong> with conduction system involvement</li>
          <li><strong>Endocarditis</strong> with septal abscess</li>
          <li><strong>Hyperkalemia</strong> (transient)</li>
          <li><strong>Lyme disease, Trypanosoma</strong> (myocarditis)</li>
          <li><strong>Cardiac tumor</strong></li>
          <li><strong>Boxer cardiomyopathy</strong></li>
          <li><strong>Congenital</strong> (rare)</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>1° AVB: slowed conduction at AV node (PR prolonged) but all impulses reach ventricle</li>
          <li>2° AVB Type I: progressive AV node fatigue, eventually fails to conduct</li>
          <li>2° AVB Type II: sudden block below AV node (His-Purkinje), often progressing</li>
          <li>3° AVB: complete failure of conduction · ventricles depend on escape pacemaker
            <ul>
              <li>Junctional escape: 40-60 BPM, narrow QRS</li>
              <li>Ventricular escape: 20-40 BPM, wide QRS, less reliable</li>
            </ul>
          </li>
          <li>Bradycardia → ↓ CO → syncope, weakness, sudden death</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li>1° AVB: asymptomatic (incidental ECG finding)</li>
          <li>2° Type I (Wenckebach): usually asymptomatic · resolves with stress/exercise</li>
          <li>2° Type II / high-grade:
            <ul>
              <li>Episodic weakness</li>
              <li>Syncope (especially with exertion)</li>
              <li>Lethargy</li>
            </ul>
          </li>
          <li>3° AVB:
            <ul>
              <li>⚠️ <strong>Syncope</strong> (Stokes-Adams attacks)</li>
              <li>Severe exercise intolerance</li>
              <li>CHF in severe</li>
              <li>⚠️ Sudden death</li>
            </ul>
          </li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Bradycardia (HR &lt; 60 in 3°)</li>
          <li>Cannon "a" waves on jugular pulse (atrial contraction against closed valve)</li>
          <li>Variable S1 intensity</li>
          <li>Pulse deficit</li>
          <li>Hypotension during episodes</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>ECG features:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">ECG Recognition — Each AV Block Type</span>
          <ul>
            <li><strong>1° AVB:</strong> Prolonged PR, every P→QRS conducted</li>
            <li><strong>2° Type I:</strong> Progressively longer PR, then dropped QRS, then resets ("Wenckebach")</li>
            <li><strong>2° Type II:</strong> Constant PR, sudden dropped QRS without warning</li>
            <li><strong>3° AVB:</strong> P waves regular at one rate, QRS regular at slower rate, NO relationship between them</li>
          </ul>
          <p class="mnem-tip">📌 In 3° AVB, P-P interval regular, R-R interval regular, but P-QRS dissociated<br>
          📌 Wide QRS in 3° = ventricular escape (slower, less reliable)</p>
        </div>

        <p><strong>Workup:</strong></p>
        <ul>
          <li><strong>ECG</strong> — diagnosis</li>
          <li><strong>Holter (24 hr)</strong> — frequency, escape rhythm reliability, asymptomatic episodes</li>
          <li><strong>Atropine response test</strong> — for distinguishing vagal vs structural
            <ul>
              <li>Atropine 0.04 mg/kg IM/IV</li>
              <li>Vagal: HR ↑ &gt; 50%, block resolves</li>
              <li>Structural: minimal response</li>
            </ul>
          </li>
          <li><strong>Echocardiogram</strong> — structural disease (DCM, endocarditis, mass)</li>
          <li><strong>Chemistry/electrolytes</strong> — K, Ca</li>
          <li><strong>Serology</strong> — Lyme, Trypanosoma if endemic</li>
          <li><strong>Drug history</strong> — digoxin, beta-blockers</li>
          <li><strong>BP</strong></li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Sinus arrest / SA block</strong> — pause but P-QRS relationship maintained</li>
          <li><strong>Sick sinus syndrome (SSS)</strong> — bradycardia + tachy episodes</li>
          <li><strong>Vagal-induced bradycardia</strong> — physiologic</li>
          <li><strong>Hyperkalemia</strong> — different ECG (tented T)</li>
          <li><strong>Drug toxicity</strong> — Hx</li>
          <li><strong>Atrial standstill</strong> — no P waves at all (hyperK, atrial fibrosis)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment by degree:</strong></p>

        <ul>
          <li><strong>1° AVB:</strong>
            <ul>
              <li>No treatment</li>
              <li>Rule out drug effect, electrolyte issue</li>
              <li>Monitor</li>
            </ul>
          </li>
          <li><strong>2° AVB Type I (Wenckebach):</strong>
            <ul>
              <li>Usually no treatment</li>
              <li>If symptomatic: consider atropine response · pacemaker if structural</li>
            </ul>
          </li>
          <li><strong>2° AVB Type II:</strong>
            <ul>
              <li>Often progresses to 3° → consider pacemaker pre-emptively</li>
              <li>Monitor symptomatic patients carefully</li>
            </ul>
          </li>
          <li><strong>2° high-grade or symptomatic:</strong>
            <ul>
              <li>⭐ <strong>Pacemaker indicated</strong></li>
            </ul>
          </li>
          <li><strong>3° AVB (complete):</strong>
            <ul>
              <li>⭐⭐ <strong>Pacemaker = treatment of choice</strong></li>
              <li>Bridge: terbutaline 0.2 mg/kg PO q8h (β-agonist for HR support)</li>
              <li>Theophylline 10 mg/kg PO q12h alternative</li>
              <li>Atropine TRIAL but rarely effective</li>
              <li>Cardiology referral urgently</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Pacemaker Implantation</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">VVI</span>
              <span class="num-label">Most common mode (single-chamber)</span>
            </div>
            <div class="num-card">
              <span class="num-big">~85%</span>
              <span class="num-label">Long-term success</span>
            </div>
            <div class="num-card">
              <span class="num-big">8-10 yr</span>
              <span class="num-label">Battery life typical</span>
            </div>
            <div class="num-card">
              <span class="num-big">Days</span>
              <span class="num-label">Resumption of normal activity</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>Transvenous pacemaker</strong> via jugular vein · lead in RV<br>
          📌 Generator placed in jugular furrow or paralumbar<br>
          📌 Cardiology specialty procedure</p>
        </div>

        <p><strong>Treat underlying cause:</strong></p>
        <ul>
          <li>Discontinue offending drug (digoxin, beta-blocker, diltiazem)</li>
          <li>Correct electrolytes (K, Ca)</li>
          <li>Treat endocarditis (antibiotics)</li>
          <li>Treat tick-borne disease (doxycycline)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Sudden death</strong> from asystole (3°)</li>
          <li><strong>Syncope</strong> (Stokes-Adams) → injury</li>
          <li><strong>CHF</strong> from chronic bradycardia</li>
          <li><strong>Pacemaker complications</strong>: lead displacement, infection, malfunction</li>
          <li><strong>Drug side effects</strong> (terbutaline tremors)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>1° + 2° Type I:</strong> Excellent · normal lifespan</li>
          <li><strong>2° Type II:</strong> Good with pacemaker · risky without</li>
          <li><strong>3° AVB without pacemaker:</strong> Months · sudden death common</li>
          <li><strong>3° AVB with pacemaker:</strong> Excellent · 5-10 year survival typical</li>
          <li><strong>Concurrent CHF:</strong> Determined by underlying disease</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-sss',
    titleEn: 'Sick Sinus Syndrome (SSS)',
    titleTh: 'Sick Sinus Syndrome — SA node เสื่อม',
    type: 'disease',
    system: 'arrhythmia',
    species: ['dog'],
    tags: ['SSS', 'sinus node dysfunction', 'Schnauzer', 'pacemaker', 'syncope', 'brady-tachy'],
    aliases: ['sinus node dysfunction', 'SND', 'brady-tachy syndrome'],
    source: 'Bussadori — Textbook of Cardiovascular Medicine',
    sections: {
      definition: `
        <p><strong>Sick Sinus Syndrome (SSS)</strong> — degeneration ของ SA node + atrial conduction · variable bradycardia, sinus arrest, escape rhythms, sometimes alternating with tachyarrhythmia</p>
        <ul>
          <li>⭐ <strong>Predisposed: Miniature Schnauzer</strong> (classic), West Highland White Terrier, Cocker Spaniel, Dachshund</li>
          <li>Older dogs (8-12 yo)</li>
          <li>Female &gt; Male (Schnauzer)</li>
          <li>Cat: rare</li>
          <li>"Brady-tachy syndrome" variant: alternating bradycardia + supraventricular tachycardia</li>
        </ul>

        <p><strong>ECG manifestations (any combination):</strong></p>
        <ul>
          <li>Sinus bradycardia (HR &lt; 60)</li>
          <li>Sinus arrest / pauses (&gt; 2 sec without P)</li>
          <li>SA exit block</li>
          <li>Junctional or ventricular escape rhythms</li>
          <li>Supraventricular tachycardia (in brady-tachy)</li>
          <li>Atrial fibrillation episodes</li>
          <li>Inappropriate response to exercise/atropine</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li>⭐ Idiopathic fibrosis of SA node + atrial myocardium</li>
          <li>Genetic predisposition (Schnauzer)</li>
          <li>Autonomic dysfunction component</li>
          <li>Concurrent atrial myocardial disease</li>
        </ul>
      `,
      pathophysiology: `
        <ol>
          <li>SA node fibrosis → unreliable pacing</li>
          <li>Atrial muscle disease → susceptible to arrhythmias</li>
          <li>SA node fails → escape rhythm (junctional 40-60 BPM, ventricular 20-40 BPM)</li>
          <li>Pauses → cerebral hypoperfusion → syncope</li>
          <li>If brady-tachy: rapid atrial tachycardia → CHF symptoms</li>
          <li>Tachyarrhythmia ends → prolonged pause before SA recovers → "tachy-brady" syncope</li>
        </ol>
      `,
      symptoms: `
        <ul>
          <li>⚠️ <strong>Syncope</strong> (most common · 70% of cases)
            <ul>
              <li>Often during exercise, excitement, post-cough</li>
              <li>Brief (&lt; 30 sec)</li>
              <li>Can be daily/weekly</li>
            </ul>
          </li>
          <li>Episodic weakness</li>
          <li>Exercise intolerance</li>
          <li>Lethargy</li>
          <li>Cough (if brady-tachy with CHF)</li>
        </ul>

        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Bradycardia (HR 40-60 baseline)</li>
          <li>Pulse deficit during arrhythmia</li>
          <li>Variable rhythm — pauses</li>
          <li>± Murmur if concurrent MMVD (Schnauzer common comorbidity)</li>
          <li>Often normal between episodes (intermittent)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>ECG findings:</strong></p>
        <ul>
          <li>Sinus bradycardia (HR &lt; 60)</li>
          <li>Pauses &gt; 2 seconds (no P, no QRS)</li>
          <li>Junctional or ventricular escape beats during pauses</li>
          <li>Sinus arrest</li>
          <li>± Atrial fibrillation episodes</li>
          <li>Inappropriate to autonomic state (stress should ↑ HR)</li>
        </ul>

        <p><strong>Workup:</strong></p>
        <ul>
          <li><strong>ECG</strong> — initial</li>
          <li><strong>Holter (24 hr)</strong> — ⭐ <strong>essential</strong> · captures intermittent abnormalities + correlates with symptoms (event diary)</li>
          <li><strong>Atropine response test</strong> — ⭐ key diagnostic
            <ul>
              <li>Atropine 0.04 mg/kg IM</li>
              <li>15 min later: ECG</li>
              <li><strong>SSS:</strong> Inadequate ↑ HR (&lt; 50% increase) or paradoxical worsening</li>
              <li><strong>Vagal:</strong> Strong response, normalizes</li>
            </ul>
          </li>
          <li><strong>Exercise test</strong> — fail to ↑ HR appropriately</li>
          <li><strong>Echocardiogram</strong> — assess for concurrent disease (MMVD common in Schnauzer)</li>
          <li><strong>Chemistry, T4</strong> — rule out hypothyroid contributing</li>
          <li><strong>BP</strong></li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>High vagal tone</strong> — atropine response distinguishes</li>
          <li><strong>3° AV block</strong> — different ECG pattern</li>
          <li><strong>2° AV block</strong> — P waves present but QRS dropped</li>
          <li><strong>Atrial standstill</strong> — no P waves (hyperK, fibrosis)</li>
          <li><strong>Drug-induced bradycardia</strong> — Hx</li>
          <li><strong>Hypothyroid bradycardia</strong></li>
          <li><strong>Brain disease causing syncope</strong> — neurologic findings</li>
        </ul>
      `,
      treatment: `
        <p><strong>Asymptomatic SSS:</strong></p>
        <ul>
          <li>No treatment</li>
          <li>Annual recheck + Holter</li>
          <li>Avoid AV-blocking drugs</li>
        </ul>

        <p><strong>Symptomatic SSS:</strong></p>
        <ul>
          <li>⭐ <strong>Pacemaker = treatment of choice</strong>
            <ul>
              <li>VVI mode typically</li>
              <li>Resolves syncope in &gt; 90%</li>
              <li>Allows control of tachy component without worsening brady</li>
              <li>Cardiology referral</li>
            </ul>
          </li>
          <li><strong>Medical bridge while awaiting pacemaker:</strong>
            <ul>
              <li>Terbutaline 0.2 mg/kg PO q8h (β-agonist · supports HR)</li>
              <li>Theophylline 10 mg/kg PO q12h (alternative)</li>
              <li>Hyoscyamine, propantheline (anticholinergics) - limited</li>
            </ul>
          </li>
          <li><strong>Brady-tachy syndrome treatment:</strong>
            <ul>
              <li>Pacemaker FIRST (controls brady)</li>
              <li>THEN antiarrhythmic for tachy (sotalol, atenolol) · safer with pacemaker in place</li>
            </ul>
          </li>
        </ul>

        <p><strong>Concurrent disease:</strong></p>
        <ul>
          <li>MMVD (Schnauzer): manage with FSAP if Stage C</li>
          <li>Avoid drugs that worsen bradycardia (digoxin, diltiazem, beta-blocker without pacemaker)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Syncope-related injury</strong> (falls, trauma)</li>
          <li><strong>Sudden death</strong> from prolonged asystole</li>
          <li><strong>CHF from brady-tachy</strong></li>
          <li><strong>Pacemaker complications</strong> (lead displacement, infection)</li>
          <li><strong>Drug-induced worsening</strong> (digoxin, beta-blockers without pacing)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Asymptomatic SSS:</strong> Variable · may progress · annual monitoring</li>
          <li><strong>Symptomatic + pacemaker:</strong> Excellent · normal lifespan often</li>
          <li><strong>Symptomatic without pacemaker:</strong> Reduced · syncope quality of life issue</li>
          <li><strong>Concurrent advanced MMVD:</strong> Determined by cardiac dz</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-chf-management',
    titleEn: 'Congestive Heart Failure (CHF) Management',
    titleTh: 'การจัดการ CHF (Acute + Chronic)',
    type: 'topic',
    system: 'chf',
    species: ['dog', 'cat'],
    tags: ['CHF', 'congestive heart failure', 'pulmonary edema', 'furosemide', 'pimobendan', 'acute', 'chronic'],
    aliases: ['heart failure', 'pulmonary edema', 'CHF management'],
    source: 'Bussadori + Duque-Carrasco',
    sections: {
      indications: `
        <p><strong>CHF management indications:</strong></p>
        <ul>
          <li>Stage C (current or past CHF)</li>
          <li>Stage D (refractory CHF)</li>
          <li>Acute decompensation in established cardiac patient</li>
          <li>De novo presentation with respiratory distress + cardiac history</li>
        </ul>

        <p><strong>CHF presentations:</strong></p>
        <ul>
          <li><strong>Left-sided CHF</strong>: pulmonary edema (cough, dyspnea)</li>
          <li><strong>Right-sided CHF</strong>: ascites, pleural effusion, hepatic congestion</li>
          <li><strong>Bi-ventricular CHF</strong>: combined</li>
          <li><strong>Cat CHF</strong>: often pleural effusion + edema mixed picture</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Misdiagnosis — "cough = MMVD" without confirmation can lead to inappropriate diuretic use</li>
          <li>Always confirm CHF before lifelong furosemide</li>
          <li>Avoid IV fluids during acute CHF (worsens edema)</li>
          <li>Cat: avoid acepromazine (CV depressant)</li>
          <li>Cat: avoid β-blockers in active CHF</li>
        </ul>
      `,
      preparation: `
        <p><strong>Confirming CHF diagnosis:</strong></p>
        <ul>
          <li><strong>Thoracic radiograph</strong> — gold standard for pulmonary edema
            <ul>
              <li>Dog: caudodorsal/perihilar alveolar pattern</li>
              <li>Cat: diffuse, patchy, no specific pattern</li>
              <li>Cardiomegaly with VHS &gt; 11.5 (dog), VLAS &gt; 3</li>
              <li>Pulmonary venous distension (left CHF)</li>
              <li>Pleural effusion (right or biventricular)</li>
            </ul>
          </li>
          <li><strong>POCUS</strong> — rapid B-line assessment ใน emergency</li>
          <li><strong>NT-proBNP rapid test</strong> — high NPV for ruling out</li>
          <li><strong>Echocardiogram</strong> — ideal but post-stabilization</li>
          <li><strong>Resting RR</strong> — &gt; 30/min sleeping = decompensation marker</li>
        </ul>

        <p><strong>Patient stabilization priorities:</strong></p>
        <ul>
          <li>Minimize stress · oxygen first</li>
          <li>Sedation if needed (butorphanol)</li>
          <li>IV access (cautious)</li>
          <li>ECG monitoring</li>
          <li>Pulse oximetry</li>
          <li>Serial RR / HR / BP</li>
        </ul>
      `,
      steps: `
        <p><strong>ACUTE CHF management:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Acute CHF — "ABCDE" Approach</span>
          <ul>
            <li><strong>A</strong>irway — patent? open-mouth breathing?</li>
            <li><strong>B</strong>reathing — oxygen 40-60% (mask, hood, cage)</li>
            <li><strong>C</strong>irculation — IV access, but minimal fluids</li>
            <li><strong>D</strong>iuretic — furosemide aggressive</li>
            <li><strong>E</strong>verything else — sedation, additional drugs</li>
          </ul>
          <p class="mnem-tip">📌 Goal: <strong>RR &lt; 40 within 4-6 hours</strong><br>
          📌 ⚠️ Avoid stress · let patient settle in oxygen cage</p>
        </div>

        <p><strong>Acute CHF drug protocol:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Acute CHF Medications</span>
          <table>
            <tr><th>Drug</th><th>Dog dose</th><th>Cat dose</th></tr>
            <tr><td><strong>⭐ Furosemide</strong></td><td>2-4 mg/kg IV/IM, repeat q1-2h</td><td>1-2 mg/kg IV/IM, repeat q1-2h</td></tr>
            <tr><td><strong>Furosemide CRI</strong></td><td>0.66-1 mg/kg/h after bolus</td><td>0.25-0.5 mg/kg/h</td></tr>
            <tr><td><strong>⭐ Pimobendan</strong></td><td>0.25-0.3 mg/kg PO (or IV if available)</td><td>Controversial · 0.625-1.25 mg/cat (if HOCM ruled out)</td></tr>
            <tr><td><strong>Butorphanol</strong></td><td>0.2-0.4 mg/kg IM</td><td>0.2-0.4 mg/kg IM</td></tr>
            <tr><td><strong>Oxygen</strong></td><td>40-60% via cage/mask</td><td>40-60% (less stressful = cage)</td></tr>
            <tr><td><strong>Thoracocentesis</strong></td><td>If &gt; 500 mL pleural effusion</td><td>⭐ Often needed in cat CHF</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Furosemide is THE drug · don't withhold for fear of dehydration<br>
          📌 ⭐ Cat: <strong>NEVER give acepromazine</strong> (CV depressant) · butorphanol OK<br>
          📌 ⭐ Cat with CHF + pleural effusion: thoracocentesis may save life faster than diuretic alone</p>
        </div>

        <p><strong>Goals of acute therapy:</strong></p>
        <ul>
          <li>RR &lt; 40 within 4-6 hours</li>
          <li>HR appropriate (not excessively tachycardic)</li>
          <li>BP maintained (not hypotensive from over-diuresis)</li>
          <li>Mucous membranes pink, CRT normal</li>
          <li>Mentation improving</li>
        </ul>

        <p><strong>CHRONIC CHF management — Stage C:</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Quadruple Therapy — "FSAP"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">F</span>
              <span class="num-label">Furosemide 1-4 mg/kg q8-12h</span>
            </div>
            <div class="num-card">
              <span class="num-big">S</span>
              <span class="num-label">Spironolactone 2 mg/kg q12-24h</span>
            </div>
            <div class="num-card">
              <span class="num-big">A</span>
              <span class="num-label">ACEi (enalapril/benazepril) 0.5 mg/kg q12-24h</span>
            </div>
            <div class="num-card">
              <span class="num-big">P</span>
              <span class="num-label">Pimobendan 0.25-0.3 mg/kg q12h</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>"FSAP" = standard MMVD CHF Rx</strong><br>
          📌 Pimobendan 1 hr before food (better absorption)<br>
          📌 CARING trial: spironolactone improves survival in MMVD CHF</p>
        </div>

        <p><strong>Cat chronic CHF (HCM/RCM):</strong></p>
        <ul>
          <li><strong>Furosemide</strong> 1-2 mg/kg PO q12-24h (titrate to RR &lt; 30)</li>
          <li><strong>Clopidogrel</strong> 18.75 mg/cat PO q24h (ATE prevention)</li>
          <li>± <strong>ACE inhibitor</strong> (benazepril 0.5 mg/kg q24h)</li>
          <li>Pimobendan: <em>controversial</em> in HOCM but increasingly used</li>
          <li>Avoid acepromazine</li>
        </ul>

        <p><strong>Refractory CHF (Stage D) — escalation:</strong></p>
        <ul>
          <li>↑ furosemide (up to 6-8 mg/kg q8h) or switch to <strong>torsemide</strong> (1/10 of furosemide dose)</li>
          <li>Add <strong>hydralazine</strong> 0.5-2 mg/kg q12h (afterload reduction)</li>
          <li>Add <strong>sildenafil</strong> 1-3 mg/kg q8-12h if pulmonary HT</li>
          <li>Salt restriction (cardiac diet)</li>
          <li>Reassess for transudate management (paracentesis, thoracocentesis)</li>
          <li>Specialty referral · consider mitral valve repair (MMVD specialty)</li>
        </ul>

        <p><strong>Owner home monitoring:</strong></p>
        <ul>
          <li>⭐ <strong>Resting respiratory rate (RR)</strong> — single best predictor of decompensation
            <ul>
              <li>Count breaths per minute while sleeping</li>
              <li>RR &gt; 30/min sleeping = warning · contact vet</li>
              <li>RR &gt; 40/min = decompensation imminent</li>
            </ul>
          </li>
          <li>Activity level / appetite tracking</li>
          <li>Cough frequency (dog)</li>
          <li>Abdominal distension (right CHF)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pre-renal azotemia</strong> from over-diuresis — most common</li>
          <li><strong>Hypokalemia</strong> from furosemide</li>
          <li><strong>Hyperkalemia</strong> from ACEi + spironolactone (combination)</li>
          <li><strong>Hypotension</strong> from combination therapy</li>
          <li><strong>Cardiogenic shock</strong> in severe</li>
          <li><strong>Acute kidney injury</strong> · ARS (acute renal stress)</li>
          <li><strong>Cardiorenal syndrome</strong> — bidirectional decompensation</li>
          <li><strong>Cardiac cachexia</strong> — late stage muscle wasting</li>
          <li><strong>Drug interactions</strong> — NSAIDs catastrophic</li>
          <li><strong>Recurrent CHF episodes</strong> — usually responsive but each worse</li>
        </ul>

        <p><strong>Monitoring schedule:</strong></p>
        <ul>
          <li><strong>1 week post-acute discharge</strong>: renal panel, electrolytes, BP, RR log</li>
          <li><strong>Monthly initially</strong>: clinical exam, RR, weight</li>
          <li><strong>Every 3 months</strong>: chemistry, urinalysis, BP</li>
          <li><strong>Every 6 months</strong>: thoracic radiograph, echo</li>
          <li><strong>NT-proBNP trending</strong> useful</li>
        </ul>
      `,
      postCare: `
        <p><strong>Owner education essentials:</strong></p>
        <ul>
          <li>How to count resting RR at home</li>
          <li>Recognize decompensation signs (cough worsening, lethargy, anorexia)</li>
          <li>Medication compliance critical (no missed doses)</li>
          <li>Diet: cardiac diet (sodium-restricted) if tolerated · calorie-dense</li>
          <li>Exercise: light, regular · avoid extreme</li>
          <li>NEVER give NSAIDs (ask vet first for any new medication)</li>
          <li>Emergency vet contacts</li>
        </ul>

        <p><strong>Quality of life assessment (ongoing):</strong></p>
        <ul>
          <li>Appetite</li>
          <li>Activity</li>
          <li>Comfort (no labored breathing)</li>
          <li>Interaction with family</li>
          <li>Hospitalizations frequency</li>
          <li>Owner financial/emotional sustainability</li>
        </ul>

        <p><strong>End-of-life considerations (Stage D refractory):</strong></p>
        <ul>
          <li>Discuss prognosis honestly with owner</li>
          <li>Hospice considerations · home euthanasia options</li>
          <li>Recognize signs of unsalvageable decompensation</li>
          <li>Quality of life over quantity</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 5 — Cardiorenal Axis (FINAL)
     ============================================================ */

  {
    id: 'card-cardiorenal-axis',
    titleEn: 'Cardiorenal Axis (CRA) — CKD ↔ CHF',
    titleTh: 'แกน Cardiorenal — ไต ↔ หัวใจ',
    type: 'disease',
    system: 'cardiorenal',
    species: ['dog', 'cat'],
    tags: ['cardiorenal', 'CRA', 'CRS', 'cardiorenal syndrome', 'CKD', 'CHF', 'RAAS', 'Duque-Carrasco'],
    aliases: ['CRA', 'cardiorenal syndrome', 'CRS', 'แกนหัวใจไต'],
    source: 'Duque-Carrasco — Cardiovascular-Renal Axis Disorders',
    sections: {
      definition: `
        <p><strong>Cardiorenal Axis (CRA)</strong> หรือ <strong>Cardiorenal Syndrome (CRS)</strong> — bidirectional pathophysiologic interaction between heart และ kidneys · dysfunction ของอวัยวะหนึ่งทำให้อีกอวัยวะแย่ลง</p>
        <ul>
          <li>⭐ Duque-Carrasco textbook — central concept</li>
          <li>Heart และ kidneys connect ผ่าน hemodynamics, neurohormonal axis (RAAS, SNS), inflammatory pathways</li>
          <li>Common ในผู้ป่วยสูงอายุ — MMVD + CKD coexistence ~30-50%</li>
          <li>Cat: HCM + CKD coexistence ~30-40%</li>
          <li>Mutual deterioration → "vicious cycle" · poor prognosis ถ้า not recognized</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Cardiorenal Syndrome — 5 Types (Ronco)</span>
          <table>
            <tr><th>Type</th><th>Direction</th><th>Example</th></tr>
            <tr><td><strong>Type 1 (Acute CRS)</strong></td><td>⭐ Acute heart → AKI</td><td>Acute CHF → ↓ renal perfusion → AKI</td></tr>
            <tr><td><strong>Type 2 (Chronic CRS)</strong></td><td>Chronic heart → CKD</td><td>Chronic MMVD → progressive CKD</td></tr>
            <tr><td><strong>Type 3 (Acute renocardiac)</strong></td><td>Acute kidney → cardiac</td><td>AKI → fluid overload → pulmonary edema</td></tr>
            <tr><td><strong>Type 4 (Chronic renocardiac)</strong></td><td>Chronic kidney → cardiac</td><td>CKD → uremic cardiomyopathy · hypertension → LVH</td></tr>
            <tr><td><strong>Type 5 (Secondary)</strong></td><td>Systemic → both</td><td>Sepsis, DM, hyperthyroid → both</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Type 1 most common in vet emergency</strong>: acute CHF triggers AKI<br>
          📌 <strong>Type 2 most common in vet practice</strong>: chronic MMVD with concurrent CKD</p>
        </div>
      `,
      etiology: `
        <p><strong>Mechanisms — bidirectional interactions:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Heart → Kidney Pathways</span>
          <ul>
            <li><strong>Reduced cardiac output</strong> → hypoperfusion → pre-renal AKI</li>
            <li><strong>Venous congestion</strong> → ↑ renal venous pressure → ↓ GFR (often more important than CO)</li>
            <li><strong>RAAS activation</strong> → vasoconstriction · Na/water retention · fibrosis</li>
            <li><strong>Sympathetic overdrive</strong> → renal vasoconstriction</li>
            <li><strong>Inflammatory mediators</strong> · oxidative stress</li>
            <li><strong>Drug-induced</strong>: NSAIDs, diuretics, ACEi (especially over-diuresis)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>Venous congestion ≥ low CO</strong> as cause of cardiorenal AKI<br>
          📌 ⭐ Prevention: avoid over-diuresis · maintain volume status</p>
        </div>

        <p><strong>Kidney → Heart pathways:</strong></p>
        <ul>
          <li><strong>Volume overload</strong> from CKD → pulmonary edema · CHF exacerbation</li>
          <li><strong>Hypertension</strong> (CKD-induced) → LVH · MMVD progression</li>
          <li><strong>Anemia of CKD</strong> → ↑ cardiac workload · high-output strain</li>
          <li><strong>Uremia</strong> → uremic cardiomyopathy (rare in vet)</li>
          <li><strong>Electrolytes</strong>: hyperkalemia → arrhythmia · hypocalcemia → reduced contractility</li>
          <li><strong>Acid-base derangements</strong></li>
          <li><strong>Mineral-bone disease</strong> (FGF-23, PTH) → vascular calcification</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>"Vicious cycle" cascade:</strong></p>
        <ol>
          <li>Cardiac dysfunction (e.g., MMVD progression) → ↓ CO + ↑ venous pressure</li>
          <li>Renal hypoperfusion + congestion → ↓ GFR → azotemia</li>
          <li>RAAS activation → fluid retention · BP elevation</li>
          <li>Increased preload → worsening CHF</li>
          <li>Diuretic + ACEi to manage CHF → ↓ effective circulating volume</li>
          <li>Pre-renal azotemia worsens → AKI on CKD</li>
          <li>↑ uremia → cardiac strain · arrhythmia</li>
          <li>Cycle accelerates → multi-organ decompensation</li>
        </ol>

        <p><strong>RAAS — central player:</strong></p>
        <ul>
          <li>Renin → Angiotensin I → Angiotensin II (vasoconstriction, Na/water retention)</li>
          <li>Aldosterone → Na retention, K excretion, cardiac/renal fibrosis</li>
          <li>Chronic RAAS activation = maladaptive in both heart + kidney</li>
          <li>RAAS blockade (ACEi, ARB, spironolactone) = primary therapeutic target</li>
        </ul>

        <p><strong>"Cardiorenal triad":</strong></p>
        <ul>
          <li>Cardiac dysfunction</li>
          <li>Renal dysfunction</li>
          <li>Anemia (often present, worsens both)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Clinical clues to CRA:</strong></p>
        <ul>
          <li>CHF patient with rising creatinine on diuretic Rx</li>
          <li>CKD patient with new respiratory distress</li>
          <li>Patient on FSAP with worsening azotemia despite good clinical CHF control</li>
          <li>Refractory CHF · refractory CKD</li>
          <li>Fluid overload signs (peripheral edema, pleural effusion, ascites) ใน CKD patient</li>
          <li>Hyperkalemia + cardiac dysrhythmia</li>
          <li>Hypertension (renal-mediated)</li>
        </ul>

        <p><strong>Patterns to recognize:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">CRA Clinical Patterns</span>
          <table>
            <tr><th>Scenario</th><th>Pattern</th><th>Action</th></tr>
            <tr><td><strong>"Stable CHF"</strong></td><td>Furosemide working · creatinine slowly creeping up</td><td>Accept mild azotemia · don't over-correct</td></tr>
            <tr><td><strong>"Diuretic resistance"</strong></td><td>Furosemide dose ↑ but RR still ↑ + creat ↑</td><td>Switch to torsemide · add hydralazine</td></tr>
            <tr><td><strong>"Cardiorenal crisis"</strong></td><td>Acute decomp + AKI + hyperK</td><td>⚠️ ICU · cautious diuretic · K management</td></tr>
            <tr><td><strong>"Hidden AKI on CKD"</strong></td><td>CKD baseline + new lethargy/inappetence</td><td>Recheck SDMA, BUN, creat, USG</td></tr>
            <tr><td><strong>Cat HCM + CKD</strong></td><td>HCM stage B2 + CKD IRIS 2-3</td><td>Telmisartan-based Rx · careful diuretic</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>"Permissive azotemia"</strong> — accept BUN/creat slight rise to keep CHF controlled<br>
          📌 Don't chase normal creat at expense of pulmonary edema</p>
        </div>
      `,
      diagnosis: `
        <p><strong>Workup for CRA:</strong></p>
        <ul>
          <li><strong>Cardiac:</strong>
            <ul>
              <li>Echocardiogram</li>
              <li>Thoracic radiograph</li>
              <li>NT-proBNP</li>
              <li>BP measurement</li>
              <li>ECG (arrhythmia, electrolyte effects)</li>
            </ul>
          </li>
          <li><strong>Renal:</strong>
            <ul>
              <li>BUN, creatinine, SDMA</li>
              <li>Urinalysis (USG, protein, sediment)</li>
              <li>UPC ratio (proteinuria)</li>
              <li>IRIS staging (CKD)</li>
              <li>Renal ultrasound</li>
            </ul>
          </li>
          <li><strong>Electrolytes + acid-base:</strong>
            <ul>
              <li>Na, K, Cl, Ca, P, Mg</li>
              <li>Venous blood gas</li>
              <li>HyperK common (ACEi + spironolactone + AKI)</li>
            </ul>
          </li>
          <li><strong>Volume status:</strong>
            <ul>
              <li>Body weight trends</li>
              <li>Skin tent, mucous membranes</li>
              <li>Caudal vena cava ultrasound (CVC) — collapsibility index</li>
              <li>POCUS — B-lines (pulmonary edema), free fluid</li>
            </ul>
          </li>
          <li><strong>Other:</strong>
            <ul>
              <li>CBC (anemia common)</li>
              <li>T4 (rule out hyperthyroid)</li>
              <li>Protein levels (PLN)</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">IRIS CKD Staging — Quick Reference</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Creat &lt; 1.4 (dog) / &lt; 1.6 (cat) · subclinical</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">1.4-2.8 (dog) / 1.6-2.8 (cat) · mild azotemia</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">2.9-5.0 (dog) / 2.9-5.0 (cat) · moderate</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">&gt; 5.0 · severe · uremic</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Sub-stage by proteinuria (UPC) and BP<br>
          📌 SDMA &gt; 14 = early CKD even if creat normal<br>
          📌 ⭐ Always sub-stage by BP — hypertension common driver of CRA</p>
        </div>
      `,
      differential: `
        <ul>
          <li><strong>Pre-renal azotemia from dehydration alone</strong> — USG concentrated, responsive to fluids</li>
          <li><strong>Pure CKD without cardiac disease</strong> — echo normal</li>
          <li><strong>Pure CHF without renal disease</strong> — renal panel normal</li>
          <li><strong>Drug-induced AKI</strong> (NSAIDs, aminoglycosides) — Hx</li>
          <li><strong>Pyelonephritis</strong> — pyuria, fever</li>
          <li><strong>Leptospirosis</strong> (dog) — acute · serology</li>
          <li><strong>Toxin AKI</strong> (ethylene glycol, NSAID) — Hx</li>
          <li><strong>Glomerulonephritis</strong> — heavy proteinuria</li>
        </ul>
      `,
      treatment: `
        <p><strong>Principles of CRA management:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">CRA Therapeutic Goals</span>
          <ul>
            <li><strong>Stabilize cardiac function</strong> — relieve congestion without over-diuresis</li>
            <li><strong>Preserve renal function</strong> — avoid AKI on CKD</li>
            <li><strong>Block RAAS</strong> — ACEi/ARB/spironolactone (cornerstone)</li>
            <li><strong>Manage hypertension</strong> — cause + effect of CRA</li>
            <li><strong>Correct electrolytes</strong> — especially K, P, Ca</li>
            <li><strong>Address anemia</strong> — if symptomatic</li>
            <li><strong>Avoid nephrotoxins</strong> — NSAIDs absolute, aminoglycosides</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Balance is key · "best for heart" may "harm kidney"<br>
          📌 ⭐ Lower BUN/creat goal vs symptomatic comfort = clinical judgment</p>
        </div>

        <p><strong>Drug strategy by scenario:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Drug Choices in CRA</span>
          <table>
            <tr><th>Drug class</th><th>CHF Stage C + CKD 1-2</th><th>CHF Stage C + CKD 3-4</th></tr>
            <tr><td><strong>Furosemide</strong></td><td>Standard dose</td><td>Lower dose · titrate carefully</td></tr>
            <tr><td><strong>Torsemide</strong></td><td>If furosemide resistant</td><td>⭐ Often preferred (more predictable)</td></tr>
            <tr><td><strong>ACEi (enalapril)</strong></td><td>Standard</td><td>⚠️ Caution · monitor K, creat · reduce dose</td></tr>
            <tr><td><strong>ACEi (benazepril)</strong></td><td>Standard</td><td>⭐ Preferred over enalapril (hepatic metabolism)</td></tr>
            <tr><td><strong>ARB (telmisartan)</strong></td><td>Alternative</td><td>⭐ Cat-approved · CKD proteinuria + HT</td></tr>
            <tr><td><strong>Spironolactone</strong></td><td>Standard CHF Rx</td><td>⚠️ HyperK risk · reduce or omit</td></tr>
            <tr><td><strong>Pimobendan</strong></td><td>Standard</td><td>Standard · no renal adjustment</td></tr>
            <tr><td><strong>Amlodipine</strong></td><td>If HT</td><td>⭐ Cat HT first-line</td></tr>
            <tr><td><strong>Hydralazine</strong></td><td>Refractory only</td><td>Refractory only</td></tr>
            <tr><td><strong>NSAIDs</strong></td><td>⛔ AVOID</td><td>⛔ ABSOLUTELY AVOID</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Benazepril ดีกว่า enalapril ในผู้ป่วย CKD</strong> (hepatic metabolism)<br>
          📌 ⭐ <strong>Telmisartan</strong> = ARB · cat-approved สำหรับ CKD proteinuria + HT<br>
          📌 ⛔ NSAIDs absolutely contraindicated · catastrophic in CRA</p>
        </div>

        <p><strong>Specific scenarios:</strong></p>

        <p><strong>Acute CHF + AKI on CKD:</strong></p>
        <ul>
          <li>Oxygen + furosemide cautious (lower dose IV bolus)</li>
          <li>Avoid IV crystalloid bolus (worsens edema)</li>
          <li>Monitor BUN/creat q6-12h</li>
          <li>Adjust ACEi/spironolactone (often pause acutely)</li>
          <li>Treat hyperkalemia: calcium gluconate, glucose+insulin if &gt; 6.5</li>
          <li>POCUS-guided assessment of fluid status</li>
        </ul>

        <p><strong>Cat HCM + CKD:</strong></p>
        <ul>
          <li>⭐ <strong>Telmisartan 1-2 mg/kg PO q24h</strong> — first-line (CKD-approved · BP control · proteinuria)</li>
          <li>Amlodipine for HT (BP &gt; 160 mmHg)</li>
          <li>Furosemide minimum effective dose</li>
          <li>Clopidogrel if LA &gt; 1.6</li>
          <li>Phosphate binder if P elevated</li>
          <li>Subcutaneous fluids may be appropriate (controversial in CHF)</li>
        </ul>

        <p><strong>Dog MMVD + CKD:</strong></p>
        <ul>
          <li>Benazepril (vs enalapril) for ACEi</li>
          <li>FSAP with reduced spironolactone if hyperK</li>
          <li>Pimobendan unchanged</li>
          <li>BP control (often hypertension contributing)</li>
          <li>Monitor renal q1-4 weeks initially</li>
        </ul>

        <p><strong>Dietary considerations:</strong></p>
        <ul>
          <li>Cardiac diet (Na restriction) — moderate restriction in CRA</li>
          <li>Renal diet (low protein, low P) — not always best in advanced CHF</li>
          <li>"CRA diet" = compromise · Hill's k/d, Royal Canin Cardiac, etc.</li>
          <li>Calorie-dense (cachexia prevention)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Acute kidney injury on CKD</strong> — common, often drug-induced</li>
          <li><strong>Hyperkalemia</strong> — life-threatening · arrhythmia · arrest</li>
          <li><strong>Hyponatremia</strong> from over-diuresis</li>
          <li><strong>Refractory CHF</strong></li>
          <li><strong>Refractory CKD</strong></li>
          <li><strong>Anemia worsening</strong></li>
          <li><strong>Hypertension uncontrolled</strong> → target organ damage</li>
          <li><strong>Cardiac cachexia</strong></li>
          <li><strong>Decision fatigue</strong> for owner — frequent rechecks, cost</li>
          <li><strong>Polypharmacy issues</strong> — drug interactions</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Mild CRA (CKD 1-2 + CHF B2-C):</strong> Reasonable · 1-2 years possible</li>
          <li><strong>Moderate CRA (CKD 3 + CHF C):</strong> Median 6-12 months</li>
          <li><strong>Severe CRA (CKD 4 + CHF D):</strong> Months · poor</li>
          <li><strong>Acute CRS:</strong> Variable · depends on reversibility</li>
          <li><strong>Cat HCM + CKD:</strong> Often determined by which dz progresses faster</li>
        </ul>
      `,
    },
  },

  {
    id: 'card-diuretic-resistance',
    titleEn: 'Diuretic Resistance — Refractory CHF',
    titleTh: 'ภาวะดื้อยาขับปัสสาวะ',
    type: 'topic',
    system: 'cardiorenal',
    species: ['dog', 'cat'],
    tags: ['diuretic resistance', 'refractory CHF', 'torsemide', 'sequential nephron blockade', 'Stage D'],
    aliases: ['refractory heart failure', 'diuretic resistance'],
    source: 'Duque-Carrasco — Cardiovascular-Renal Axis Disorders',
    sections: {
      indications: `
        <p><strong>เมื่อสงสัย diuretic resistance:</strong></p>
        <ul>
          <li>Furosemide dose &gt; 4-6 mg/kg q8h ยังไม่สามารถ control CHF</li>
          <li>Recurrent CHF episodes แม้ optimal medical Rx</li>
          <li>RR ยังคง &gt; 30/min sleeping despite escalation</li>
          <li>Persistent pleural effusion / ascites</li>
          <li>Stage D MMVD or DCM</li>
          <li>Cat refractory CHF</li>
        </ul>

        <p><strong>Definition:</strong></p>
        <ul>
          <li>Diuretic resistance = persistent volume overload despite adequate diuretic dosing</li>
          <li>"True" resistance vs pseudo-resistance (compliance, dietary Na, drug interaction)</li>
          <li>Common in Stage D CHF · hallmark of advanced disease</li>
        </ul>
      `,
      contraindications: `
        <p><strong>Pseudo-resistance — rule out before escalating:</strong></p>
        <ul>
          <li><strong>Compliance issues</strong> — owner not giving meds correctly · check pill counts</li>
          <li><strong>Dietary Na excess</strong> — hidden Na in treats, table food</li>
          <li><strong>NSAIDs concurrent</strong> — blocks diuretic effect · STOP</li>
          <li><strong>Drug interaction</strong> — cholestyramine, sucralfate (binding)</li>
          <li><strong>Pseudohypovolemia</strong> — over-restriction of fluid</li>
          <li><strong>Wrong diagnosis</strong> — pulmonary disease misdiagnosed as CHF</li>
        </ul>
      `,
      preparation: `
        <p><strong>Workup before declaring resistance:</strong></p>
        <ul>
          <li>Confirm CHF (radiograph, echo, NT-proBNP)</li>
          <li>Renal panel + electrolytes</li>
          <li>BP measurement</li>
          <li>Compliance check with owner</li>
          <li>Diet review (sodium content)</li>
          <li>Check for concurrent NSAIDs · supplements · other meds</li>
          <li>Echo recheck (worsening structural disease?)</li>
          <li>Body weight trend</li>
          <li>POCUS for fluid status</li>
        </ul>
      `,
      steps: `
        <p><strong>Causes of true diuretic resistance:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Why Diuretic Stops Working</span>
          <ul>
            <li><strong>Reduced renal perfusion</strong> — heart cannot deliver drug to kidney</li>
            <li><strong>Reduced GFR (CKD)</strong> — drug filtration impaired</li>
            <li><strong>Distal tubule hypertrophy</strong> — chronic loop diuretic causes compensatory Na reabsorption distally</li>
            <li><strong>Activation of RAAS + SNS</strong> — promotes Na retention</li>
            <li><strong>Hypoalbuminemia</strong> — reduced protein binding · less effective delivery</li>
            <li><strong>Intestinal edema</strong> — reduced PO absorption</li>
            <li><strong>Drug interaction (NSAIDs)</strong> — prostaglandin block</li>
          </ul>
          <p class="mnem-tip">📌 <strong>Distal tubule hypertrophy</strong> = key reason for tolerance development<br>
          📌 ⭐ "Sequential nephron blockade" addresses this</p>
        </div>

        <p><strong>Stepwise escalation strategy:</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Refractory CHF — 5 Steps</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">↑ Furosemide frequency q6-8h</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Switch to torsemide (1/10 dose)</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Add hydralazine (afterload)</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">Add sildenafil if PHT</span>
            </div>
            <div class="num-card">
              <span class="num-big">5</span>
              <span class="num-label">Specialty referral</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Always rule out pseudo-resistance FIRST before escalating<br>
          📌 Each step needs reassessment</p>
        </div>

        <p><strong>Step 1: Optimize furosemide</strong></p>
        <ul>
          <li>Frequency more important than dose: q8h → q6h often more effective than higher dose q12h</li>
          <li>Sustained delivery: CRI in hospital (0.66-1 mg/kg/h after IV bolus)</li>
          <li>SC injection at home (better absorption than PO if intestinal edema)</li>
          <li>Maximum recommended: 8 mg/kg q8h (24 mg/kg/day)</li>
        </ul>

        <p><strong>Step 2: Switch to torsemide</strong></p>
        <ul>
          <li>⭐ <strong>Torsemide 0.1-0.6 mg/kg PO q12-24h</strong></li>
          <li>10× more potent than furosemide</li>
          <li>Conversion: 1/10 to 1/20 of total furosemide dose</li>
          <li>Longer half-life (12 hr vs 6 hr)</li>
          <li>More predictable absorption (less affected by intestinal edema)</li>
          <li>Anti-aldosterone effect (similar to spironolactone)</li>
          <li>Often resolves "resistance" by itself</li>
        </ul>

        <p><strong>Step 3: Sequential nephron blockade</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Sequential Nephron Blockade</span>
          <ul>
            <li>Loop diuretic (furosemide/torsemide) — loop of Henle</li>
            <li>+ Thiazide (hydrochlorothiazide 1-2 mg/kg PO q12-24h) — distal tubule</li>
            <li>+ Spironolactone (already in FSAP) — collecting duct</li>
            <li>= Block Na reabsorption at multiple sites</li>
          </ul>
          <p class="mnem-tip">📌 Hydrochlorothiazide useful for distal tubule hypertrophy<br>
          📌 ⚠️ Risk: severe hypokalemia, dehydration, AKI<br>
          📌 Monitor electrolytes weekly initially</p>
        </div>

        <p><strong>Step 4: Add afterload reducer</strong></p>
        <ul>
          <li>⭐ <strong>Hydralazine 0.5-3 mg/kg PO q12h</strong> (titrate up gradually)</li>
          <li>Direct arterial vasodilator</li>
          <li>Reduces LV afterload → improves forward flow → improves renal perfusion</li>
          <li>Side effect: reflex tachycardia (consider beta-blocker if not contraindicated)</li>
          <li>Watch for hypotension</li>
        </ul>

        <p><strong>Step 5: Pulmonary HT</strong></p>
        <ul>
          <li>Echocardiogram for sPAP estimation</li>
          <li>If sPAP &gt; 60 mmHg → <strong>Sildenafil 1-3 mg/kg PO q8-12h</strong></li>
          <li>Pulmonary vasodilator → reduces RV afterload → improves LV filling</li>
          <li>Often dramatic clinical improvement</li>
        </ul>

        <p><strong>Step 6: Specialty interventions:</strong></p>
        <ul>
          <li><strong>Mitral valve repair</strong> (specialty surgical · select centers)</li>
          <li><strong>Pericardiectomy</strong> if pericardial component</li>
          <li><strong>Repeated thoracocentesis / paracentesis</strong> for refractory effusions</li>
          <li><strong>Indwelling catheter</strong> for repeated drainage</li>
          <li><strong>Ultrafiltration</strong> (rare, specialty)</li>
        </ul>
      `,
      complications: `
        <p><strong>Iatrogenic complications of escalation:</strong></p>
        <ul>
          <li>⚠️ <strong>Severe hypokalemia</strong> — esp. with HCTZ + furosemide</li>
          <li>⚠️ <strong>Hyperkalemia</strong> — paradoxical with ACEi + spironolactone + AKI</li>
          <li>⚠️ <strong>Pre-renal azotemia / AKI</strong> — over-diuresis</li>
          <li>⚠️ <strong>Hyponatremia</strong> — water retention &gt; Na</li>
          <li>⚠️ <strong>Hypotension</strong> — combined vasodilators</li>
          <li><strong>Hepatic congestion → drug accumulation</strong></li>
          <li><strong>Drug interactions</strong> — polypharmacy</li>
          <li><strong>Owner fatigue</strong> — multiple meds, frequent monitoring</li>
        </ul>

        <p><strong>Monitoring schedule for refractory CHF:</strong></p>
        <ul>
          <li>1-2 weeks after each medication change: renal panel, electrolytes, BP</li>
          <li>Owner RR log daily</li>
          <li>Body weight weekly</li>
          <li>Recheck radiograph if RR ↑</li>
          <li>Recheck echo q3-6 months</li>
        </ul>
      `,
      postCare: `
        <p><strong>Quality of life assessment:</strong></p>
        <ul>
          <li>Appetite (often poor in advanced CHF)</li>
          <li>Activity level</li>
          <li>Comfort (no labored breathing)</li>
          <li>Interaction</li>
          <li>Mobility</li>
          <li>Number of "good days" vs "bad days"</li>
        </ul>

        <p><strong>End-of-life considerations:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">When to Discuss Euthanasia</span>
          <ul>
            <li>Refractory CHF despite Stage D therapy</li>
            <li>Recurrent emergency hospitalizations</li>
            <li>Persistent dyspnea at rest despite optimal Rx</li>
            <li>Cachexia, unable to eat</li>
            <li>Owner financial / emotional unsustainability</li>
            <li>Multiple severe complications (AKI + hyperK + arrhythmia)</li>
            <li>Quality of life poor on objective scales</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Honest, compassionate conversation<br>
          📌 Hospice options · home euthanasia<br>
          📌 Don't prolong suffering for "one more month"</p>
        </div>

        <p><strong>Caregiver support:</strong></p>
        <ul>
          <li>Acknowledge difficulty of long-term care</li>
          <li>Practical: pill organizers, medication apps</li>
          <li>Emotional: anticipatory grief is normal</li>
          <li>Resources: pet hospice services, support groups</li>
          <li>Recheck planning: what triggers euthanasia decision</li>
        </ul>

        <p><strong>Lessons from refractory CHF management:</strong></p>
        <ul>
          <li>⭐ Recognize early — don't wait for crisis</li>
          <li>⭐ Sequential nephron blockade often dramatically helps</li>
          <li>⭐ Pulmonary HT commonly missed — echo + sildenafil can be game-changer</li>
          <li>⭐ Cardiorenal syndrome management = balance, not perfection</li>
          <li>⭐ Owner involvement = key to long-term success</li>
        </ul>
      `,
    },
  },

];

window.CARDIOLOGY_DATA_LOADED = true;
