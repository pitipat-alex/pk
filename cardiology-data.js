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

];

window.CARDIOLOGY_DATA_LOADED = true;
