/* ============================================================
   MEDICINE — Handbook entries
   Source: Nelson & Couto, Small Animal Internal Medicine, 6th Ed.

   Personal clinical summaries restructured for handbook use.
   Per disease: 8-section template
     definition, etiology, pathophysiology, symptoms, diagnosis,
     differential, treatment, complications
   Per procedure: 6-section template
     indications, contraindications, preparation, steps,
     complications, postCare

   Schema:
     id          — slug (kebab-case)
     titleEn     — English title (primary display)
     titleTh     — Thai title (subtitle)
     type        — 'disease' | 'procedure'
     system      — body system (must match a chip in medicine.html)
     species     — ['dog'] | ['cat'] | ['dog', 'cat']
     tags        — array of search keywords (acronyms, synonyms)
     aliases     — additional search terms (Thai names, etc.)
     source      — chapter / page reference
     sections    — { … } per template above
   ============================================================ */
window.MEDICINE_ENTRIES = [

  /* ============================================================
     PART 1 — CARDIOVASCULAR (Ch 1–12)
  ============================================================ */

  /* ---------- Ch 1 · Clinical Manifestations of Cardiac Disease ---------- */
  {
    id: 'cv-clinical-manifestations',
    titleEn: 'Clinical Manifestations of Cardiac Disease',
    titleTh: 'อาการของโรคหัวใจ',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['murmur', 'syncope', 'cough', 'dyspnea', 'CHF', 'heart failure', 'tachypnea', 'arrhythmia'],
    aliases: ['heart failure signs', 'อาการโรคหัวใจ', 'หัวใจล้มเหลว'],
    source: 'Ch. 1 · pp. 1–12',
    sections: {
      definition: `
        <p>อาการที่บอกว่ามีปัญหา <strong>cardiac output</strong>, <strong>backward congestion</strong>, หรือ <strong>arrhythmia</strong> — ใช้เป็น red flag ตอน screen ในห้องตรวจ</p>
        <ul>
          <li>CHF เป็นสาเหตุการตายอันดับต้นๆ ของหมาแก่</li>
          <li>เคสจำนวนมากไม่มีอาการในระยะแรก (preclinical / stage B) — auscultation จึงสำคัญ</li>
        </ul>
      `,
      etiology: `
        <p>แบ่งตามกลไก:</p>
        <ul>
          <li><strong>Forward failure</strong> (low CO) → exercise intolerance, weakness, syncope, prerenal azotemia</li>
          <li><strong>Left-sided backward failure</strong> → pulmonary edema → cough, tachypnea, dyspnea, orthopnea</li>
          <li><strong>Right-sided backward failure</strong> → systemic congestion → ascites, hepatomegaly, JVD, pleural effusion</li>
          <li><strong>Arrhythmia</strong> → palpitations, syncope, sudden death</li>
        </ul>
      `,
      pathophysiology: `
        <p>เมื่อ CO ตก → SNS + RAAS activate ชดเชย:</p>
        <ul>
          <li>↑ Sympathetic tone → tachycardia + vasoconstriction</li>
          <li>↑ RAAS → Na/water retention → preload เพิ่ม</li>
          <li>ระยะแรกชดเชยอยู่ → asymptomatic (stage B)</li>
          <li>พอชดเชยไม่พอ → CHF (stage C-D) จาก pulmonary/systemic venous pressure สูง → edema, effusion</li>
        </ul>
      `,
      symptoms: `
        <p><strong>1. Coughing</strong></p>
        <ul>
          <li><em>Cardiogenic:</em> moist, soft, มักช่วงดึก/เช้ามืด คู่กับ tachypnea</li>
          <li><em>Airway:</em> dry, "honking" cough ไม่มี tachypnea (เช่น tracheal collapse, chronic bronchitis)</li>
        </ul>
        <p><strong>2. Tachypnea / Dyspnea</strong></p>
        <ul>
          <li><strong>Resting respiratory rate (RRR)</strong> — ตอนนอน &gt; 30/min ถือว่าผิดปกติ</li>
          <li>ให้เจ้าของนับที่บ้าน เป็น early warning ของ pulmonary edema</li>
        </ul>
        <p><strong>3. Exercise intolerance</strong> — เดินไม่ไหว หอบเร็ว ไม่ค่อยอยากเดินไกล</p>
        <p><strong>4. Syncope</strong> — เป็นลม วูบ → คิดถึง arrhythmia, cough-syncope, vasovagal, PH</p>
        <p><strong>5. Abdominal distension</strong> — ascites จาก right CHF หรือ pericardial effusion</p>
        <p><strong>6. Cyanosis</strong> — central (R-to-L shunt, severe pulm dz) vs peripheral (low CO)</p>
        <p><strong>7. แมว</strong> — มาด้วย acute respiratory distress, hindlimb paralysis (ATE), หรือ sudden death — silent killer</p>
      `,
      diagnosis: `
        <p><strong>Physical Exam</strong></p>
        <ul>
          <li><strong>Auscultation</strong> — murmur (grade I–VI), gallop (S3, S4), arrhythmia, lung crackles</li>
          <li><strong>Pulse</strong> — bounding (PDA, AR), weak (low CO, AS), pulse deficits (arrhythmia)</li>
          <li><strong>MM</strong> — pallor, cyanosis, prolonged CRT</li>
          <li><strong>Jugular vein</strong> — distension/pulsation → right-sided dz, PH</li>
          <li><strong>Hepatojugular reflux</strong> positive ใน right CHF</li>
          <li><strong>RRR</strong> — นับที่บ้านขณะนอน, &gt; 30 = ผิดปกติ</li>
        </ul>
        <p><strong>Lab</strong></p>
        <ul>
          <li><strong>NT-proBNP</strong> — ค่าสูง → cardiac origin</li>
          <li><strong>cTnI</strong> — myocardial injury (DCM, myocarditis)</li>
          <li>CBC, biochem, T4, BP</li>
          <li>Heartworm antigen (endemic areas)</li>
        </ul>
        <p><strong>Imaging</strong></p>
        <ul>
          <li><strong>Thoracic rad</strong> — VHS, chamber enlargement, pulmonary edema (dorsocaudal hilar pattern ในหมา; diffuse patchy ในแมว), pleural effusion</li>
          <li><strong>Echo</strong> — gold standard</li>
          <li><strong>ECG</strong> — arrhythmia documentation</li>
          <li><strong>Holter</strong> — intermittent arrhythmia, syncope workup</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Cough:</strong> tracheal collapse, chronic bronchitis, pneumonia, neoplasia, heartworm</li>
          <li><strong>Dyspnea:</strong> upper airway obstruction, asthma (cat), pleural effusion (non-cardiac), PTE</li>
          <li><strong>Syncope:</strong> seizure, hypoglycemia, vestibular dz, narcolepsy</li>
          <li><strong>Ascites:</strong> liver dz, hypoalbuminemia, neoplasia, vasculitis</li>
        </ul>
        <div class="callout">⚠️ แมว — โรคหัวใจอาจไม่มี murmur 30-50% — auscultation ปกติไม่ได้แปลว่าหัวใจปกติ</div>
      `,
      treatment: `
        <p>ขึ้นกับสาเหตุ — ดู entry ของแต่ละโรค (MMVD, DCM, HCM ฯลฯ)</p>
        <p>หลักทั่วไป:</p>
        <ul>
          <li>Asymptomatic (stage B): monitoring + จัดการ predisposing factors (BP, weight)</li>
          <li>มี CHF: <em>quadruple therapy</em> = furosemide + pimobendan + ACEI + spironolactone</li>
          <li>Acute decompensation: O2, IV furosemide, vasodilator (nitroprusside), thoracocentesis ถ้ามี effusion</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Cardiogenic pulmonary edema</strong> — fatal ถ้าไม่ทัน</li>
          <li><strong>Arrhythmias</strong> — AF, VT → sudden death</li>
          <li><strong>Pulmonary hypertension</strong> → right CHF</li>
          <li><strong>Arterial thromboembolism (ATE)</strong> โดยเฉพาะแมว HCM</li>
          <li><strong>Cardiac cachexia</strong> — late stage</li>
        </ul>
        <p><strong>Prognosis:</strong> ต่างกันมากตามโรค — ดู entry เฉพาะ</p>
      `,
    },
  },

  /* ---------- Ch 2 · Cardiovascular Diagnostic Tests ---------- */
  {
    id: 'cv-diagnostic-tests',
    titleEn: 'Cardiovascular Diagnostic Tests',
    titleTh: 'การตรวจวินิจฉัยโรคหัวใจ',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['echocardiography', 'ECG', 'thoracic radiograph', 'NT-proBNP', 'troponin', 'VHS', 'cardiac biomarker'],
    aliases: ['cardiac diagnostics', 'การตรวจหัวใจ'],
    source: 'Ch. 2 · pp. 13–54',
    sections: {
      definition: `
        <p>เครื่องมือ workup โรคหัวใจ — ใช้ร่วมกันให้ภาพรวม</p>
        <ul>
          <li><strong>Physical exam</strong> — auscultation, pulse, JVD, MM</li>
          <li><strong>Thoracic rad</strong> — chamber size, pulmonary changes, effusion</li>
          <li><strong>ECG</strong> — rhythm, conduction</li>
          <li><strong>Echo</strong> — gold standard for structure/function</li>
          <li><strong>Cardiac biomarkers</strong> — NT-proBNP, cTnI</li>
          <li><strong>BP</strong> — systolic systemic</li>
        </ul>
      `,
      etiology: `<p>ใช้ในเคสที่สงสัยโรคหัวใจ — ก่อนรักษา, ระหว่าง follow-up, ก่อนใช้ยา cardiotoxic</p>`,
      pathophysiology: `<p>ดู entry เฉพาะของแต่ละโรค</p>`,
      symptoms: `<p>ดู Clinical Manifestations entry</p>`,
      diagnosis: `
        <p><strong>1. Thoracic Radiographs</strong></p>
        <ul>
          <li><strong>VHS (Vertebral Heart Score):</strong> วัดที่ lateral จาก carina ถึง apex (long axis) + จาก left main bronchus ถึงขอบหัวใจ (short axis), เทียบกับ vertebrae T4 ลงไป</li>
          <li>Normal: dog &lt; 10.5 v; cat &lt; 8.0 v</li>
          <li><strong>VLAS (Vertebral Left Atrial Score):</strong> วัด LA size, normal &lt; 2.3 v</li>
          <li>Pulmonary edema: cardiogenic = perihilar, dorsocaudal (dog); diffuse, patchy (cat)</li>
          <li>Right heart enlargement: reverse-D บน DV view</li>
          <li>Pleural effusion: แมว CHF เจอบ่อยกว่าหมา</li>
        </ul>
        <p><strong>2. ECG (Lead II)</strong></p>
        <ul>
          <li>Heart rate, rhythm regularity</li>
          <li>P wave (atrial enlargement: P mitrale wide, P pulmonale tall)</li>
          <li>QRS (LV enlargement: tall R; LV dilation: wide QRS)</li>
          <li>Axis: normal +40 ถึง +100 (dog), 0 ถึง +160 (cat)</li>
          <li>Intervals: PR, QT</li>
          <li><strong>Holter (24-hr ambulatory ECG):</strong> intermittent arrhythmia, syncope workup, Doberman/Boxer screening</li>
          <li><strong>Event monitor:</strong> events นานๆ ครั้ง</li>
        </ul>
        <p><strong>3. Echocardiography (gold standard)</strong></p>
        <ul>
          <li><strong>2D:</strong> chamber sizes, wall thickness, valve morphology</li>
          <li><strong>M-mode:</strong> LV dimensions, fractional shortening (FS), EPSS</li>
          <li><strong>Color Doppler:</strong> direction + severity ของ regurgitation/shunts</li>
          <li><strong>Spectral Doppler:</strong> velocity → estimate gradient (Bernoulli: ΔP = 4V²)</li>
          <li><strong>Tissue Doppler (TDI):</strong> myocardial velocity, diastolic function</li>
          <li>Key measurements:
            <ul>
              <li>LA:Ao ratio (normal &lt; 1.5)</li>
              <li>LVIDDN (normalized to BW^0.294); &gt; 1.7 = dilated</li>
              <li>FS: dog 30-45%, cat 35-65%</li>
              <li>LV wall thickness: cat ≥ 6 mm = HCM</li>
            </ul>
          </li>
        </ul>
        <p><strong>4. Cardiac Biomarkers</strong></p>
        <ul>
          <li><strong>NT-proBNP:</strong>
            <ul>
              <li>Dog: &lt; 900 = normal; &gt; 1500 = ↑ risk for CHF, ↓ survival</li>
              <li>Cat: SNAP &gt; 100 pmol/L = abnormal; quantitative &gt; 270 = significant cardiac dz</li>
              <li>ใช้แยก cardiogenic vs respiratory dyspnea ในเคส acute</li>
            </ul>
          </li>
          <li><strong>cTnI:</strong> myocardial injury marker; ↑ ใน DCM, myocarditis, severe MMVD; ใช้แยก HSA pericardial effusion จาก idiopathic</li>
        </ul>
        <p><strong>5. Blood Pressure</strong></p>
        <ul>
          <li><strong>Doppler</strong> (cats, small dogs): ฟัง systolic อย่างเดียว</li>
          <li><strong>Oscillometric / HDO:</strong> systolic + diastolic + mean</li>
          <li>วัด 5-7 ครั้ง, ตัด high/low, average ที่เหลือ</li>
          <li>Normal: dog &lt; 150/95, cat &lt; 150/95</li>
          <li>Hypertension: &gt; 160/100 (mild), &gt; 180/120 (severe)</li>
        </ul>
      `,
      differential: `<p>การเลือก test ขึ้นกับ presenting complaint — ดู Clinical Manifestations entry</p>`,
      treatment: `<p>เครื่องมือสำหรับวินิจฉัย — ไม่มี treatment โดยตรง</p>`,
      complications: `
        <p><strong>Limitations &amp; pitfalls:</strong></p>
        <ul>
          <li>VHS ไม่บอก function — heart โตอาจ functional ปกติ</li>
          <li>ECG ปกติไม่ได้ตัด structural disease</li>
          <li>Stress hyperglycemia, white-coat effect ทำให้ค่าผิด</li>
          <li>NT-proBNP ↑ ใน renal disease (clearance เปลี่ยน)</li>
          <li>Echo ต้องใช้คนชำนาญ + เครื่องดี</li>
          <li>Holter — แมวรับไม่ค่อยได้ (อยู่นิ่งไม่ทน)</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 3 · Management of Heart Failure ---------- */
  {
    id: 'heart-failure-management',
    titleEn: 'Management of Heart Failure',
    titleTh: 'การรักษา CHF — ยาหลักที่ต้องรู้',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['CHF', 'heart failure', 'furosemide', 'pimobendan', 'ACEI', 'spironolactone', 'torsemide', 'quadruple therapy'],
    aliases: ['CHF management', 'การรักษาหัวใจล้มเหลว'],
    source: 'Ch. 3 · pp. 55–76',
    sections: {
      definition: `
        <p><strong>Congestive Heart Failure (CHF)</strong> — หัวใจสูบเลือดไม่พอ → venous congestion (pulmonary หรือ systemic) ± low CO</p>
        <ul>
          <li>ไม่ใช่โรคในตัวเอง — เป็น <em>end-stage</em> ของโรคหัวใจหลายๆ ชนิด</li>
          <li>การรักษาเป็น <strong>combination therapy</strong> — ปรับ neurohormonal axis + ลด preload/afterload + ↑ contractility</li>
        </ul>
      `,
      etiology: `
        <p>สาเหตุของ CHF (รักษาตามสาเหตุ + supportive):</p>
        <ul>
          <li>MMVD (dog)</li>
          <li>DCM (dog)</li>
          <li>HCM, RCM, UCM (cat)</li>
          <li>Pericardial effusion</li>
          <li>Congenital defects (PDA, VSD, dysplasia)</li>
          <li>Heartworm disease</li>
          <li>Tachyarrhythmia-induced cardiomyopathy</li>
          <li>Endocrine (hyperthyroid, hypertension)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Vicious cycle ของ CHF:</strong></p>
        <ul>
          <li>↓ CO → SNS + RAAS activate</li>
          <li>↑ Sympathetic tone → tachycardia, vasoconstriction, ↑ contractility (short-term ดี, long-term เสีย)</li>
          <li>↑ RAAS → Na/water retention → ↑ preload (Starling ช่วยตอนแรก, eventually overload)</li>
          <li>Aldosterone → myocardial fibrosis</li>
          <li>↑ Filling pressure → pulmonary/systemic venous congestion → edema</li>
          <li>Chronic neurohormonal activation → maladaptive remodeling</li>
        </ul>
        <p><strong>Therapeutic targets:</strong> ลด preload (diuretics), ลด afterload (vasodilators/ACEI), ↑ contractility (pimobendan), ลด neurohormonal activation (ACEI, spironolactone)</p>
      `,
      symptoms: `
        <p>ดู Clinical Manifestations entry (Ch. 1)</p>
        <ul>
          <li><strong>Left CHF:</strong> tachypnea, dyspnea, cough (dog), pulmonary edema</li>
          <li><strong>Right CHF:</strong> ascites, hepatomegaly, pleural effusion, JVD</li>
          <li><strong>Low output:</strong> exercise intolerance, syncope, weakness, prerenal azotemia</li>
        </ul>
      `,
      diagnosis: `
        <p>วินิจฉัย CHF จาก clinical + radiographic findings:</p>
        <ul>
          <li>Clinical signs of congestion + history of heart disease</li>
          <li>Thoracic rad: pulmonary edema, pleural effusion, cardiomegaly</li>
          <li>NT-proBNP &gt; 1500 pmol/L (dog), &gt; 270 pmol/L quantitative (cat) — supports cardiogenic</li>
          <li>Echo: confirms underlying cause + severity</li>
          <li>Furosemide therapeutic trial → ถ้า dyspnea ดีขึ้นเร็ว = supports CHF</li>
        </ul>
      `,
      differential: `
        <p>แยก cardiogenic จาก non-cardiogenic:</p>
        <ul>
          <li>Non-cardiogenic pulmonary edema (electrocution, neurogenic, ARDS)</li>
          <li>Pneumonia, neoplasia, PTE</li>
          <li>Hypoalbuminemia (PLE, PLN, hepatic failure)</li>
          <li>Pleural disease: pyothorax, chylothorax, neoplasia</li>
        </ul>
      `,
      treatment: `
        <p><strong>The Quadruple Therapy</strong> — cornerstone for chronic CHF in dogs</p>

        <p><strong>1. Loop Diuretic (preload reduction)</strong></p>
        <ul>
          <li><strong>Furosemide:</strong>
            <ul>
              <li>Acute IV: 2-4 mg/kg q1-4h initially → CRI 0.66-1 mg/kg/h</li>
              <li>Chronic PO: 1-4 mg/kg q8-12h (titrate ลงให้เหลือน้อยที่สุดที่ยังคุมได้ — ใช้ RRR เป็น guide)</li>
            </ul>
          </li>
          <li><strong>Torsemide</strong> (ถ้า furosemide ดื้อ): start ที่ <em>1/10-1/20 ของ daily furosemide dose</em>, แบ่ง q12-24h. แรงกว่า, นานกว่า, K-loss น้อยกว่า</li>
        </ul>

        <p><strong>2. Inodilator</strong></p>
        <ul>
          <li><strong>Pimobendan</strong> 0.2-0.3 mg/kg PO q12h (max q8h) — Ca-sensitizer + PDE3 inhibitor; ↑ contractility + arteriolar/venous dilation. ใช้ใน MMVD stage B2+, DCM, occult Doberman</li>
          <li>ให้ก่อนอาหาร 1 ชม. absorption ดีสุด</li>
        </ul>

        <p><strong>3. ACE Inhibitor (RAAS blockade)</strong></p>
        <ul>
          <li><strong>Enalapril</strong> 0.5 mg/kg PO q12-24h</li>
          <li><strong>Benazepril</strong> 0.25-0.5 mg/kg PO q24h (เลือกตัวนี้ถ้าไตเสีย — biliary excretion)</li>
          <li>เช็ค BUN/Cr ที่ 1-2 wk; ขึ้นเล็กน้อย OK; ลด dose ถ้า ↑ &gt; 30% หรือมีอาการ</li>
        </ul>

        <p><strong>4. Aldosterone Antagonist</strong></p>
        <ul>
          <li><strong>Spironolactone</strong> 1-2 mg/kg PO q24h — ↓ cardiac death + euthanasia ในหมา MMVD CHF; mild K-sparing diuretic. ⚠️ ทำให้แพ้ผิวหน้าในแมว (โดยเฉพาะ Maine Coon)</li>
        </ul>

        <p><strong>Adjunct medications:</strong></p>
        <ul>
          <li><strong>Amlodipine</strong> 0.1-0.2 mg/kg PO q12-24h — afterload reduction เพิ่มใน stage D</li>
          <li><strong>Hydralazine</strong> 0.5-2 mg/kg PO q12h — pure arteriolar dilator (acute)</li>
          <li><strong>Nitroprusside</strong> CRI 1-10 µg/kg/min — IV สำหรับ fulminant edema (monitor BP; max 24-48h)</li>
          <li><strong>Topical nitroglycerin</strong> 1/4-1 inch q4-6h — venodilator</li>
          <li><strong>Sildenafil</strong> 1-3 mg/kg PO q8-12h — สำหรับ pulmonary hypertension</li>
          <li><strong>Digoxin</strong> 0.003-0.005 mg/kg PO q12h — AF rate control; serum target 1-1.5 ng/mL</li>
          <li><strong>Diltiazem</strong> 1-3 mg/kg PO q8h — AF rate control</li>
        </ul>

        <p><strong>Cat-specific:</strong></p>
        <ul>
          <li>Furosemide dose ต่ำกว่า (1-2 mg/kg q12-24h)</li>
          <li><strong>Avoid pimobendan</strong> ใน HCM with significant LVOTO</li>
          <li>Clopidogrel 18.75 mg/cat q24h สำหรับ ATE prevention (ถ้า LA โต)</li>
          <li>ACEI debated แต่นิยมเพิ่ม (benazepril)</li>
        </ul>

        <p><strong>Acute fulminant CHF protocol (in-hospital):</strong></p>
        <ul>
          <li>Cage rest + supplemental O2</li>
          <li>Furosemide IV high-dose</li>
          <li>Pimobendan PO ทันทีที่กินยาได้</li>
          <li>Vasodilator (nitroprusside หรือ hydralazine)</li>
          <li>Mild sedation (butorphanol)</li>
          <li>Thoracocentesis ถ้ามี effusion</li>
          <li>หลีกเลี่ยง IV fluids ถ้าไม่จำเป็น</li>
        </ul>

        <div class="callout">📋 <strong>Home monitoring:</strong> ให้เจ้าของนับ RRR ขณะนอน — &gt; 30/min หรือ ↑ &gt; 20% จาก baseline = decompensation alert. ให้จดใส่ปฏิทิน</div>
      `,
      complications: `
        <p><strong>Drug-related:</strong></p>
        <ul>
          <li>Furosemide: dehydration, prerenal azotemia, hypokalemia, ototoxicity (high-dose IV)</li>
          <li>ACEI: azotemia (โดยเฉพาะคู่กับ diuretic), hypotension, hyperkalemia</li>
          <li>Spironolactone: hyperkalemia (rare ถ้าใช้คู่ loop diuretic), facial dermatitis (cats)</li>
          <li>Pimobendan: tolerated ดี; rare GI</li>
          <li>Digoxin: narrow therapeutic index → toxicity (anorexia, vomiting, arrhythmia); ลด dose ถ้าไตเสีย</li>
        </ul>
        <p><strong>Disease-related:</strong></p>
        <ul>
          <li>Refractory CHF → stage D → end-of-life</li>
          <li>Cardiac cachexia</li>
          <li>Sudden death จาก arrhythmia</li>
        </ul>
        <p><strong>Monitoring schedule:</strong></p>
        <ul>
          <li>1-2 wk หลัง start/change therapy: BP, BUN/Cr, electrolytes</li>
          <li>Stable CHF: q3-6 เดือน (PE, BP, renal panel, RRR review)</li>
          <li>Acute decompensation: in-hospital, recheck rad ทุกวันจน stable</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 4 · Cardiac Arrhythmias ---------- */
  {
    id: 'cardiac-arrhythmias',
    titleEn: 'Cardiac Arrhythmias',
    titleTh: 'หัวใจเต้นผิดจังหวะ',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['VPC', 'APC', 'ventricular tachycardia', 'atrial fibrillation', 'AV block', 'lidocaine', 'sotalol', 'mexiletine', 'diltiazem', 'amiodarone'],
    aliases: ['arrhythmia', 'rhythm disturbance', 'หัวใจเต้นผิดจังหวะ'],
    source: 'Ch. 4 · pp. 77–99',
    sections: {
      definition: `
        <p>หัวใจเต้นไม่เป็นจังหวะปกติ — แบ่งตามแหล่งกำเนิด (supraventricular vs ventricular) และ rate (tachy vs brady)</p>
        <ul>
          <li>บางอันไม่มีผลทางคลินิก, บางอันถึงตาย</li>
          <li>การประเมิน <em>clinical context</em> สำคัญพอๆ กับการอ่าน ECG</li>
        </ul>
      `,
      etiology: `
        <p><strong>Cardiac causes:</strong></p>
        <ul>
          <li>Cardiomyopathy (DCM, HCM, ARVC) — โดยเฉพาะ Doberman, Boxer</li>
          <li>Valvular disease (severe MMVD)</li>
          <li>Myocarditis, pericarditis</li>
          <li>Cardiac neoplasia (HSA, chemodectoma)</li>
          <li>Congenital defects</li>
        </ul>
        <p><strong>Extracardiac causes (มัก reversible):</strong></p>
        <ul>
          <li>Electrolyte: hyperK, hypoK, hypoMg, hypoCa</li>
          <li>Hypoxia, acid-base disturbance</li>
          <li>Hyperthyroidism (cat)</li>
          <li>Splenic mass, GDV (post-op VPCs)</li>
          <li>Pancreatitis, sepsis, uremia</li>
          <li>Trauma (cardiac contusion, post-thoracotomy)</li>
          <li>Pheochromocytoma</li>
          <li>Drugs: digoxin, β-agonists, anesthetic agents</li>
          <li>Pain, anxiety, fever (sinus tachycardia)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Mechanisms ของ arrhythmia:</strong></p>
        <ul>
          <li><strong>Re-entry</strong> — circuit รอบ scar/abnormal tissue (เจอบ่อยใน sustained arrhythmias)</li>
          <li><strong>Triggered activity</strong> — early/late afterdepolarizations</li>
          <li><strong>Abnormal automaticity</strong> — non-sinus pacemaker</li>
          <li><strong>Conduction block</strong> — AV node dysfunction</li>
        </ul>
      `,
      symptoms: `
        <p>ขึ้นกับ HR, รูปแบบ, และ underlying disease</p>
        <ul>
          <li><strong>Asymptomatic</strong> — VPC น้อยๆ มักไม่มีอาการ</li>
          <li><strong>Pulse deficits</strong> — คล้า pulse ตอน auscultate; APC, AF, VPC, VT เจอบ่อย</li>
          <li><strong>Weakness, exercise intolerance</strong></li>
          <li><strong>Syncope</strong> — sustained VT, AF rapid response, AV block, sick sinus</li>
          <li><strong>CHF</strong> — chronic tachyarrhythmia → tachycardia-induced cardiomyopathy</li>
          <li><strong>Sudden death</strong> — VF, sustained VT, asystole</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>ECG (essential):</strong></p>
        <ul>
          <li>Step 1: rate (fast/slow/normal)</li>
          <li>Step 2: rhythm (regular/irregular)</li>
          <li>Step 3: P waves มีไหม? P:QRS relationship?</li>
          <li>Step 4: QRS morphology (narrow = supraventricular; wide &gt; 0.06s dog / 0.04s cat = ventricular)</li>
        </ul>
        <p><strong>Common patterns:</strong></p>
        <ul>
          <li><strong>Sinus tachycardia:</strong> regular, normal P-QRS, HR &gt; 160 (dog) / &gt; 220 (cat)</li>
          <li><strong>APC/SVT:</strong> early P (รูปร่างผิดปกติ), narrow QRS, run rapid (มัก &gt; 250 bpm)</li>
          <li><strong>Atrial fibrillation:</strong> "irregularly irregular", ไม่มี P waves, baseline undulations (f waves)</li>
          <li><strong>VPC/VT:</strong> wide QRS, ไม่มี P นำหน้า, อาจ unifocal หรือ multifocal; sustained VT &gt; 4 in a row at &gt; 100 bpm</li>
          <li><strong>Sinus bradycardia:</strong> HR &lt; 60 (dog) / &lt; 120 (cat), regular</li>
          <li><strong>1° AV block:</strong> PR &gt; 0.13s (dog), all P conducted</li>
          <li><strong>2° AV block:</strong> some P ไม่ conducted (Mobitz I = PR ค่อยๆ ยาวก่อน drop; Mobitz II = PR คงที่ drop เป็นช่วง)</li>
          <li><strong>3° (complete) AV block:</strong> P กับ QRS independent, slow ventricular escape (~30-40 bpm)</li>
          <li><strong>Sick sinus syndrome:</strong> สลับ bradycardia + sinus pause + tachycardia (Mini Schnauzers, WHWT)</li>
        </ul>
        <p><strong>Holter monitoring:</strong> 24-hr ambulatory ECG — gold standard สำหรับ intermittent arrhythmia + treatment monitoring</p>
        <p><strong>Workup for cause:</strong> CBC, biochem, T4, BP, echo, troponin, electrolytes</p>
      `,
      differential: `
        <p>แยก wide-complex tachycardia (VT vs SVT with aberrancy):</p>
        <ul>
          <li>VT มักจะเจอ: AV dissociation, fusion beats, capture beats, very wide QRS, มี cardiac disease</li>
          <li>Lidocaine trial (1-2 mg/kg IV bolus dog, 0.25-0.5 mg/kg cat) — VT ตอบสนอง, SVT ไม่ตอบสนอง</li>
        </ul>
      `,
      treatment: `
        <p><strong>หลักการ:</strong></p>
        <ul>
          <li>รักษา <em>cause</em> ก่อน ไม่ใช่แค่ rhythm — แก้ electrolyte, hypoxia, pain</li>
          <li>หลายอันไม่ต้องใช้ยา</li>
          <li>Antiarrhythmic ทุกตัว <strong>proarrhythmic</strong> ได้</li>
          <li>เป้าหมาย: hemodynamic stability + ↓ symptoms; ไม่ใช่ sinus rhythm เสมอไป</li>
        </ul>

        <p><strong>เมื่อไหร่ควร treat tachyarrhythmia:</strong></p>
        <ul>
          <li>Sustained VT, โดยเฉพาะมี hemodynamic compromise</li>
          <li>VPCs &gt; 30/min หรือ runs of VT (Doberman, Boxer)</li>
          <li>R-on-T phenomenon</li>
          <li>SVT with rapid rate ทำให้ CHF หรือ syncope</li>
          <li>AF with rapid ventricular response</li>
        </ul>

        <p><strong>Supraventricular tachyarrhythmias:</strong></p>
        <ul>
          <li><strong>Acute SVT:</strong> vagal maneuver (ocular pressure, carotid massage) → IV diltiazem 0.05-0.25 mg/kg slow push, repeat q5min (max 0.75 mg/kg)</li>
          <li><strong>Chronic SVT/APC:</strong> diltiazem PO 0.5-2 mg/kg q8h หรือ extended-release 30-60 mg/dog q12h, หรือ β-blocker (atenolol 0.25-1 mg/kg PO q12h dog; 6.25-12.5 mg/cat q12-24h)</li>
          <li><strong>Atrial fibrillation:</strong> rate control ด้วย diltiazem ± digoxin (0.003-0.005 mg/kg PO q12h); target HR &lt; 140-160 in-clinic</li>
          <li>Refractory: amiodarone 10 mg/kg PO q24h × 1 wk loading, then 5 mg/kg q24h (monitor LFT, T4)</li>
        </ul>

        <p><strong>Ventricular tachyarrhythmias:</strong></p>
        <ul>
          <li><strong>Acute VT (hemodynamic compromise):</strong> lidocaine 2 mg/kg IV bolus, repeat to max 8 mg/kg, then CRI 25-75 µg/kg/min (dog only — cats sensitive: max 0.5 mg/kg, ระวัง seizure)</li>
          <li><strong>Refractory VT:</strong> procainamide 6-15 mg/kg slow IV; amiodarone 5 mg/kg slow IV</li>
          <li><strong>Chronic VPC/VT:</strong>
            <ul>
              <li>Sotalol 1-3 mg/kg PO q12h (ใช้บ่อยสุด; β-blocker + class III)</li>
              <li>Mexiletine 5-8 mg/kg PO q8h (มัก combine กับ sotalol)</li>
              <li>Atenolol — สำหรับ benign VPCs, low risk dogs</li>
            </ul>
          </li>
        </ul>

        <p><strong>Bradyarrhythmias:</strong></p>
        <ul>
          <li><strong>Symptomatic bradycardia:</strong> atropine 0.04 mg/kg IV/SC (test response) — ถ้า responsive = vagal cause</li>
          <li><strong>3° AV block, symptomatic SSS:</strong> <strong>pacemaker</strong> (transvenous, dual-chamber preferred) — definitive treatment เดียว</li>
          <li><strong>Symptomatic 2° AV block (Mobitz II):</strong> consider pacemaker</li>
          <li>Atropine response test ก่อนตัดสินใจใส่ pacemaker</li>
        </ul>

        <p><strong>Emergency: VF หรือ pulseless VT:</strong></p>
        <ul>
          <li>CPR + defibrillation (4-6 J/kg external)</li>
          <li>Epinephrine 0.01 mg/kg IV ทุก 3-5 min</li>
          <li>Amiodarone 5 mg/kg IV หลัง shock ครั้งที่ 3</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Sudden death</strong> — Doberman with VT, Boxer ARVC</li>
          <li><strong>Tachycardia-induced cardiomyopathy</strong> — chronic uncontrolled tachyarrhythmia</li>
          <li><strong>Thromboembolism</strong> — AF with severe LA enlargement</li>
          <li><strong>Proarrhythmia</strong> — antiarrhythmic drugs ทำให้เกิด arrhythmia ใหม่</li>
          <li><strong>Drug toxicity:</strong>
            <ul>
              <li>Lidocaine: tremor, seizure (cats!)</li>
              <li>Digoxin: anorexia, vomiting, AV block</li>
              <li>Amiodarone: hepatotoxicity, hypothyroidism</li>
              <li>Sotalol: bradycardia, ↓ contractility</li>
            </ul>
          </li>
        </ul>
        <p><strong>Prognosis:</strong> หลากหลายมาก — ขึ้นกับ underlying cause + control. AF in severe MMVD/DCM = poor; benign VPCs after splenectomy = excellent</p>
      `,
    },
  },

  /* ---------- Ch 5 · Patent Ductus Arteriosus (PDA) ---------- */
  {
    id: 'pda',
    titleEn: 'Patent Ductus Arteriosus (PDA)',
    titleTh: 'PDA — congenital ที่เจอบ่อยสุดในหมา',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['PDA', 'congenital', 'continuous murmur', 'left-to-right shunt', 'reverse PDA', 'Eisenmenger', 'ductal occlusion', 'ACDO'],
    aliases: ['ductus arteriosus', 'PDA', 'หลอดเลือดเปิด'],
    source: 'Ch. 5 · pp. 100–118',
    sections: {
      definition: `
        <p><strong>PDA</strong> — congenital defect ที่ ductus arteriosus (เชื่อม PA ↔ aorta ในตัวอ่อน) ไม่ปิดหลังเกิด</p>
        <ul>
          <li><strong>Congenital heart defect ที่เจอบ่อยที่สุดในหมา</strong> (ร่วมกับ PS, SAS)</li>
          <li>เพศเมีย &gt; เพศผู้ ~2-3 เท่า</li>
          <li>Polygenic inheritance pattern</li>
        </ul>
      `,
      etiology: `
        <p><strong>Breed predisposition (dogs):</strong></p>
        <ul>
          <li>Maltese, Pomeranian, Shetland Sheepdog, English Springer Spaniel, Keeshond, Bichon Frise</li>
          <li>Toy &amp; Miniature Poodle, Yorkshire Terrier, Collie, Cocker Spaniel</li>
          <li>German Shepherd, Chihuahua, Kerry Blue, Labrador, Newfoundland, Welsh Corgi</li>
        </ul>
        <p><strong>แมว:</strong> rare; congenital heart defect 6-7% ของเคสทั้งหมด</p>
      `,
      pathophysiology: `
        <p><strong>Normal:</strong> ductus ปิดในไม่กี่ชั่วโมงหลังเกิด → permanently sealed ใน 1-2 wk</p>
        <p><strong>PDA:</strong> ductal wall มี collagen/elastin มาก, smooth muscle น้อย → ปิดไม่ได้</p>
        <p><strong>Left-to-right shunt (typical, ~85%):</strong></p>
        <ul>
          <li>เลือดจาก aorta (high P) → ductus → PA (low P) <strong>ตลอด systole + diastole</strong> → continuous murmur</li>
          <li>↑ Pulmonary blood flow → volume overload ของ LA + LV</li>
          <li>LA + LV dilation → eccentric hypertrophy</li>
          <li>Mitral annulus stretch → secondary MR</li>
          <li>Eventually → left-sided CHF (pulmonary edema)</li>
        </ul>
        <p><strong>Right-to-left shunt (reversed PDA, ~15%):</strong></p>
        <ul>
          <li>Severe pulmonary vascular changes → PA pressure &gt; aortic → shunt reversal (Eisenmenger physiology)</li>
          <li>เลือด deoxygenated → descending aorta → caudal half ของลำตัว</li>
          <li><strong>Differential cyanosis:</strong> caudal MM cyanotic, cranial MM ปกติ ✨</li>
          <li><strong>Polycythemia</strong> compensatory (PCV สูง)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Left-to-right PDA:</strong></p>
        <ul>
          <li>ส่วนใหญ่ asymptomatic ตอนวินิจฉัยครั้งแรก (puppy with murmur)</li>
          <li>Exercise intolerance, tachypnea, cough — left CHF onset</li>
          <li>Stunted growth (severe cases)</li>
          <li><strong>Bounding (water-hammer) pulses</strong> — wide pulse pressure ✨</li>
          <li><strong>Continuous "machinery" murmur</strong> ที่ left base, ICS 3-4 — ดังสุดใน late systole; radiate ไปขวา + caudally ได้</li>
          <li>Precordial thrill ที่ left base</li>
          <li>Hyperkinetic precordial impulse</li>
        </ul>
        <p><strong>Right-to-left PDA:</strong></p>
        <ul>
          <li>Hindlimb weakness, exercise intolerance (caudal hypoxia)</li>
          <li>Caudal cyanosis (หน้าชมพู หลังม่วง)</li>
          <li>Seizures จาก polycythemia hyperviscosity</li>
          <li><strong>NO continuous murmur</strong> (pressure gradient หายไป)</li>
          <li>Loud split S2 (PH)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Auscultation:</strong> classic continuous "machinery" murmur ที่ left base — เกือบ pathognomonic ของ L-R PDA</p>
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li>L-R PDA: LA + LV enlargement, pulmonary overcirculation, "<strong>ductus bump</strong>" — bulge ที่ descending aorta</li>
          <li>"Triple bulge" sign บน DV (1-3 นาฬิกา): aortic arch + main PA + LA auricle</li>
          <li>R-L PDA: RV enlargement, pulmonary underperfusion, left heart ปกติ/เล็ก</li>
        </ul>
        <p><strong>ECG:</strong> LA + LV enlargement pattern (wide P, tall R in II)</p>
        <p><strong>Echo (definitive):</strong></p>
        <ul>
          <li>2D: LA + LV dilation, pulmonary trunk dilation</li>
          <li><strong>Color Doppler จาก cranial short axis:</strong> turbulent flow เข้า PA ตลอด cardiac cycle (continuous)</li>
          <li>Spectral Doppler: continuous high-velocity flow PA → estimate Ao-PA gradient (Bernoulli: ΔP = 4V²); ควรสูง (&gt; 80 mmHg) ใน simple L-R PDA</li>
          <li>Visualize ductus จาก short-axis cranial view</li>
          <li><strong>Reverse PDA:</strong> contrast bubble study — agitated saline IV → bubbles ปรากฏใน descending aorta (caudal) แต่ไม่ใน ascending aorta (cranial)</li>
        </ul>
        <p><strong>Lab:</strong> PCV ใน suspected R-L (polycythemia เจอบ่อย, บางที &gt; 65%)</p>
      `,
      differential: `
        <p><strong>Continuous murmur DDx:</strong></p>
        <ul>
          <li>PDA (เจอบ่อยสุด)</li>
          <li>Aorticopulmonary window (rare)</li>
          <li>VSD with aortic insufficiency (to-and-fro, ไม่ continuous จริง)</li>
          <li>Aortocaval fistula</li>
          <li>Coronary AV fistula</li>
        </ul>
        <p><strong>R-L PDA DDx:</strong> tetralogy of Fallot, severe pulmonary hypertension จากสาเหตุอื่น, R-L VSD</p>
      `,
      treatment: `
        <p><strong>Left-to-Right PDA — close ASAP</strong></p>
        <ul>
          <li>~50% มี CHF / die ภายใน 1 ปีถ้าไม่รักษา</li>
          <li>ควรทำที่อายุ 4-6 เดือน ก่อน LV remodeling รุนแรง</li>
        </ul>

        <p><strong>1. Transcatheter occlusion (preferred ถ้าทำได้)</strong></p>
        <ul>
          <li><strong>ACDO (Amplatz Canine Ductal Occluder)</strong> — minimally invasive, success &gt; 95%</li>
          <li>Coil embolization — สำหรับ small ductus (&lt; 4 mm)</li>
          <li>ทำผ่าน femoral artery catheterization ใต้ fluoroscopy</li>
          <li>BW &gt; 2.5-3 kg ปกติ</li>
        </ul>

        <p><strong>2. Surgical ligation</strong></p>
        <ul>
          <li>Left lateral thoracotomy ICS 4</li>
          <li>Identify + ligate ductus ด้วย silk suture (double หรือ triple ligation)</li>
          <li>ใช้ในหมาเล็กมาก หรือไม่มี transcatheter</li>
          <li>Mortality 2-7%; เสี่ยงหลัก = ductal tear ตอน dissection (massive hemorrhage)</li>
        </ul>

        <p><strong>3. Medical management (ถ้าผ่าตัดไม่ได้)</strong></p>
        <ul>
          <li>CHF management: furosemide, pimobendan, ACEI, spironolactone (ดู Heart Failure entry)</li>
          <li>Median survival ถ้าไม่ปิด: ~6-12 เดือน ในหมาที่มี CHF แล้ว</li>
        </ul>

        <p><strong>Right-to-Left PDA — DO NOT close ✗</strong></p>
        <ul>
          <li>ถ้าปิด → acute right heart failure → ตาย (PA pressure &gt; aortic, ductus ทำหน้าที่ release valve)</li>
          <li>Management: <strong>periodic phlebotomy</strong> รักษา PCV ที่ 55-62% (ลด hyperviscosity)</li>
          <li>± Hydroxyurea 30 mg/kg PO q24h × 7-10d, แล้ว 15 mg/kg q24h เพื่อ suppress erythropoiesis</li>
          <li>Sildenafil 1-3 mg/kg PO q8-12h สำหรับ PH</li>
          <li>หลีกเลี่ยง stress, heat, dehydration</li>
        </ul>
      `,
      complications: `
        <p><strong>Pre-closure:</strong></p>
        <ul>
          <li>Left CHF (สาเหตุการตายอันดับ 1)</li>
          <li>Atrial fibrillation (severe LA dilation)</li>
          <li>Pulmonary hypertension → shunt reversal (irreversible)</li>
        </ul>
        <p><strong>Post-closure:</strong></p>
        <ul>
          <li>Residual shunting (5-15%)</li>
          <li>Femoral artery thrombosis (post-cath)</li>
          <li>Persistent MR ถ้า LV remodeling รุนแรงก่อน close</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Close สำเร็จก่อน CHF → <strong>normal lifespan</strong> ✓</li>
          <li>Close หลัง CHF → ~75-85% ดีขึ้น แต่มัก residual heart disease</li>
          <li>Reverse PDA → guarded; median 2-5 ปี with management</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 6 · MMVD ---------- */
  {
    id: 'mmvd',
    titleEn: 'Myxomatous Mitral Valve Disease (MMVD)',
    titleTh: 'MMVD — ลิ้นหัวใจรั่วในหมาแก่',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog'],
    tags: ['MMVD', 'CMVD', 'CVHD', 'mitral regurgitation', 'MR', 'endocardiosis', 'CKCS', 'Cavalier'],
    aliases: ['chronic valvular disease', 'mitral valve disease', 'ลิ้นหัวใจรั่ว', 'หัวใจล้มเหลวสุนัข'],
    source: 'Ch. 6 · pp. 119–132',
    sections: {
      definition: `
        <p><strong>MMVD</strong> — degenerative mitral valve disease ที่เจอบ่อยที่สุดในหมา</p>
        <ul>
          <li><strong>Cardiac disease ที่เจอบ่อยที่สุดในหมา</strong> โดยเฉพาะพันธุ์เล็ก-กลาง สูงอายุ</li>
          <li>หมาพันธุ์เล็กอายุ &gt; 10 ปี prevalence &gt; 75%</li>
          <li>เพศผู้ ≈ เพศเมีย แต่ผู้ progress เร็วกว่า</li>
        </ul>
      `,
      etiology: `
        <p><strong>Genetic / breed predisposition</strong> — main factor</p>
        <ul>
          <li><strong>Cavalier King Charles Spaniel</strong> — onset เร็วและรุนแรง (autosomal polygenic, variable penetrance)</li>
          <li>Toy &amp; Miniature Poodle, Miniature Schnauzer, Chihuahua, Pomeranian, Fox Terrier, Cocker Spaniel, Pekingese, Dachshund, Boston Terrier, Miniature Pinscher, Whippet</li>
          <li>หมาพันธุ์ใหญ่ (German Shepherd Dog) ก็เป็นได้ แต่ thickening น้อยกว่า</li>
        </ul>
        <div class="callout">💡 หมาใหญ่บางตัวเป็นทั้ง MMVD + DCM ร่วมกัน — ต้องพิจารณาทั้งสอง</div>
      `,
      pathophysiology: `
        <p><strong>Myxomatous degeneration</strong> ของ mitral valve:</p>
        <ul>
          <li>GAG แทรกในชั้น fibrosa → collagen organization เสีย → ลิ้นหนา + ยืดหยุ่นน้อยลง</li>
          <li>Leaflets หนาขึ้น ปลายลิ้น prolapse เข้า atrium</li>
          <li>Chordae tendineae อ่อนแอ → เสี่ยง <strong>chordal rupture</strong> → acute decompensation</li>
        </ul>
        <p><strong>Hemodynamic consequences:</strong></p>
        <ul>
          <li>MR → volume overload ที่ LA + LV</li>
          <li>LA dilation (อาจโตมหาศาลก่อนมีอาการ) → atrial arrhythmia, bronchial compression, atrial tear</li>
          <li>LV eccentric hypertrophy → progressive remodeling</li>
          <li>↑ LA pressure → pulmonary venous congestion → <strong>cardiogenic pulmonary edema</strong></li>
          <li>Chronic ↑ LA pressure → pulmonary hypertension → right CHF</li>
        </ul>
        <p><strong>ACVIM staging</strong> (สำคัญในการตัดสินใจรักษา):</p>
        <ul>
          <li><strong>Stage A</strong> — at-risk breed, ยังไม่มี murmur</li>
          <li><strong>Stage B1</strong> — มี murmur แต่หัวใจไม่โต</li>
          <li><strong>Stage B2</strong> — มี murmur + LA/LV โต ยังไม่มี CHF (เริ่ม pimobendan ที่ stage นี้)</li>
          <li><strong>Stage C</strong> — เคย/มี CHF</li>
          <li><strong>Stage D</strong> — refractory to standard therapy</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Stage B (preclinical):</strong> ไม่มีอาการ — เจอ <strong>holosystolic murmur</strong> ที่ left apex ICS 4-6 (mid- to late-systolic click ในระยะแรก)</p>
        <p><strong>Stage C (CHF onset):</strong></p>
        <ul>
          <li>↑ Resting respiratory rate (RRR) — earliest sign</li>
          <li>Tachypnea, dyspnea, exercise intolerance</li>
          <li>Cough — soft, moist (cardiogenic) หรือ dry "honking" (airway compression จาก LA โต)</li>
          <li>Cyanosis, severe respiratory distress (acute pulmonary edema)</li>
          <li>Syncope — จาก arrhythmia, cough-syncope, atrial tear, PH</li>
          <li>Abdominal distension (ascites) — ถ้ามี right CHF จาก secondary PH</li>
        </ul>
        <div class="callout">📋 <strong>Owner home monitoring:</strong> สอนเจ้าของนับ RRR ขณะนอน; &gt; 30/min หรือเพิ่มจาก baseline &gt; 20% = early warning</div>
      `,
      diagnosis: `
        <p><strong>Auscultation</strong></p>
        <ul>
          <li>Holosystolic murmur ดังสุดที่ <strong>left apex (ICS 4-6)</strong></li>
          <li>Grade I-VI/VI; murmur ดังขึ้นเมื่อโรคมาก แต่ <em>massive</em> regurgitation อาจให้ murmur เบาลงได้</li>
          <li>S3 gallop — late stage with myocardial failure</li>
        </ul>
        <p><strong>Clinical pathology</strong></p>
        <ul>
          <li><strong>NT-proBNP</strong> — ≥ 1500 pmol/L → high risk for CHF, prognosis แย่</li>
          <li><strong>cTnI</strong> — ↑ ใน moderate-severe disease</li>
          <li>BP, BUN/Cr, electrolytes — baseline ก่อนเริ่มยา</li>
        </ul>
        <p><strong>Thoracic rad</strong></p>
        <ul>
          <li><strong>VHS</strong> — เพิ่มตามระยะโรค (cutoff &gt; 11.4 ใน coughing dog suggests cardiac origin)</li>
          <li>LA enlargement → carina elevation, mainstem bronchus compression</li>
          <li>Pulmonary edema — perihilar interstitial-alveolar pattern (อาจ asymmetric)</li>
          <li>Pulmonary venous distension — early sign of CHF</li>
        </ul>
        <p><strong>Echo (gold standard)</strong></p>
        <ul>
          <li>Thickened/prolapsing mitral leaflets ± chordal rupture (flail leaflet)</li>
          <li>LA:Ao ratio &gt; 1.6 = enlarged; ≥ 2.0 = severe</li>
          <li>LVIDDN &gt; 1.7 = LV dilation</li>
          <li>Color Doppler: regurgitant jet area</li>
          <li>TR jet velocity → estimate PA pressure</li>
        </ul>
        <p><strong>ECG</strong> — wide P waves (P mitrale), tall R waves; arrhythmia (APC, AF, VPC) ในระยะหลัง</p>
      `,
      differential: `
        <ul>
          <li><strong>DCM</strong> — โดยเฉพาะหมาใหญ่ที่มี murmur</li>
          <li><strong>Infective endocarditis</strong> — fever + new murmur + thromboembolic events</li>
          <li><strong>Tricuspid regurgitation</strong> — murmur ที่ right apex</li>
          <li><strong>VSD</strong> — congenital, harsh murmur ICS 3-4 ขวา</li>
          <li><strong>Mitral dysplasia</strong> — congenital ในหมาใหญ่อายุน้อย</li>
        </ul>
        <p><strong>Coughing differentials (สำคัญในเคสนี้):</strong> tracheal collapse, chronic bronchitis, mainstem bronchus compression (LA โต), pulmonary fibrosis, neoplasia, heartworm</p>
      `,
      treatment: `
        <p><strong>Stage B1 (asymptomatic, ไม่มี enlargement):</strong></p>
        <ul>
          <li>ไม่ต้อง cardiac medication — ยังไม่มีหลักฐานว่ายืดเวลาได้</li>
          <li>BP control (ACEI ถ้า hypertensive)</li>
          <li>Heartworm prevention, dental care, normal exercise</li>
          <li>Follow-up ปีละครั้ง</li>
        </ul>
        <p><strong>Stage B2 (asymptomatic + LA/LV enlargement):</strong></p>
        <ul>
          <li><strong>Pimobendan 0.2-0.3 mg/kg PO q12h</strong> — EPIC trial: delay CHF onset ~15 เดือน ✓</li>
          <li>Recheck ทุก 6-9 เดือน, sooner ถ้ามาก</li>
          <li>Moderate salt restriction</li>
        </ul>
        <p><strong>Stage C (CHF — outpatient):</strong> "<em>Quadruple therapy</em>"</p>
        <ul>
          <li><strong>Furosemide</strong> 1-2 mg/kg PO q12h (ปรับตาม RRR + edema severity)</li>
          <li><strong>Pimobendan</strong> 0.2-0.3 mg/kg PO q12h (max q8h ใน refractory case)</li>
          <li><strong>ACEI</strong> (enalapril 0.5 mg/kg PO q12-24h หรือ benazepril 0.25-0.5 mg/kg PO q24h)</li>
          <li><strong>Spironolactone</strong> 1-2 mg/kg PO q24h</li>
          <li>Salt-restricted diet, exercise restriction (ระยะ acute)</li>
          <li>เช็ค BUN/Cr, electrolytes ที่ 1-2 wk หลังเริ่มยา</li>
        </ul>
        <p><strong>Stage C — acute fulminant pulmonary edema (emergency):</strong></p>
        <ul>
          <li>Oxygen, cage rest, gentle handling</li>
          <li>Furosemide 2-4 mg/kg IV/IM q1-4h initially → CRI 0.66 mg/kg/h</li>
          <li>Pimobendan PO ทันทีที่กินยาได้</li>
          <li>Vasodilator: <em>nitroprusside CRI</em> 1-10 µg/kg/min (monitor BP) หรือ <em>hydralazine</em> 0.5-2 mg/kg PO; topical nitroglycerin q6-8h</li>
          <li>Mild sedation (butorphanol 0.2 mg/kg IV/IM) ลด anxiety</li>
          <li>Thoracocentesis ถ้ามี pleural effusion</li>
          <li>Antiarrhythmic ถ้าจำเป็น</li>
        </ul>
        <p><strong>Stage D (refractory):</strong></p>
        <ul>
          <li>↑ Furosemide หรือเปลี่ยนเป็น <strong>torsemide</strong> (10-20% ของ daily furosemide dose)</li>
          <li>เพิ่ม amlodipine สำหรับ afterload reduction</li>
          <li>เพิ่ม pimobendan เป็น q8h หรือ ↑ dose</li>
          <li>± Sildenafil 1-3 mg/kg PO q8-12h ถ้า PH</li>
          <li>± Digoxin (monitor serum level) สำหรับ AF</li>
          <li>Thoracocentesis/abdominocentesis เป็นระยะ</li>
        </ul>
        <p><strong>Surgical option:</strong> mitral valve repair ทำได้ในศูนย์ใหญ่ (UK, Japan) — ผลดี แต่แพง</p>
      `,
      complications: `
        <p><strong>Acute complications:</strong></p>
        <ul>
          <li><strong>Ruptured chordae tendineae</strong> → acute fulminant pulmonary edema; บางทีไม่มี LA enlargement บน rad ด้วยซ้ำ</li>
          <li><strong>Atrial tear</strong> → cardiac tamponade; เจอบ่อยใน Cocker Spaniel, Dachshund, Mini Poodle, CKCS</li>
          <li><strong>Atrial fibrillation</strong> → decompensation จากเสีย atrial kick</li>
          <li><strong>Cough-syncope</strong> — recurrent, distressing</li>
        </ul>
        <p><strong>Chronic complications:</strong></p>
        <ul>
          <li>Pulmonary hypertension → right CHF, ascites</li>
          <li>Bronchial compression จาก LA โต → chronic cough</li>
          <li>Cardiac cachexia</li>
          <li>Azotemia จาก aggressive diuresis</li>
        </ul>
        <p><strong>Prognosis</strong></p>
        <ul>
          <li><strong>Stage B1:</strong> หลายตัวไม่มี CHF ตลอดชีวิต</li>
          <li><strong>Stage B2 + pimobendan:</strong> median time to CHF ~15 เดือน vs placebo</li>
          <li><strong>Stage C:</strong> median survival 9-15 เดือนหลัง CHF onset</li>
          <li><strong>Stage D:</strong> median 1-3 เดือน</li>
          <li>Predictors of poor outcome: LA:Ao &gt; 2.0, LVIDDN &gt; 1.85, syncope, atrial tear, NT-proBNP &gt; 1500 pmol/L</li>
        </ul>
        <div class="callout">💡 <strong>Client communication:</strong> เน้นว่ารักษาได้ คุมได้นาน แต่ไม่หาย — RRR monitoring + medication compliance สำคัญที่สุด</div>
      `,
    },
  },

  /* ---------- Ch 7 · DCM (Canine) ---------- */
  {
    id: 'dcm-canine',
    titleEn: 'Dilated Cardiomyopathy (Canine)',
    titleTh: 'DCM — กล้ามเนื้อหัวใจอ่อนแรงในหมา',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog'],
    tags: ['DCM', 'cardiomyopathy', 'taurine', 'BEG diet', 'grain-free', 'systolic dysfunction', 'AF', 'atrial fibrillation'],
    aliases: ['dilated cardiomyopathy', 'กล้ามเนื้อหัวใจขยาย'],
    source: 'Ch. 7 · pp. 141–157',
    sections: {
      definition: `
        <p><strong>DCM</strong> — กล้ามเนื้อหัวใจหดตัวอ่อนแรง (systolic dysfunction) ทำให้ ventricle ขยาย</p>
        <ul>
          <li>Cardiomyopathy ที่เจอบ่อยที่สุดในหมา</li>
          <li>มักเป็นในหมาพันธุ์ใหญ่-ยักษ์ อายุกลางคน</li>
          <li>เพศผู้ &gt; เพศเมีย</li>
          <li>Progressive, fatal โดยทั่วไป</li>
        </ul>
      `,
      etiology: `
        <p><strong>Idiopathic / Genetic</strong> — สาเหตุหลัก</p>
        <ul>
          <li><strong>Doberman Pinscher</strong> — autosomal dominant, PDK4 และ titin mutations; high prevalence</li>
          <li><strong>Boxer</strong> — striatin gene; ARVC + DCM phenotype</li>
          <li><strong>Great Dane, Irish Wolfhound, Saint Bernard, Newfoundland, Scottish Deerhound</strong></li>
          <li><strong>Cocker Spaniel</strong> (American &amp; English) — taurine-responsive form</li>
          <li><strong>Portuguese Water Dog</strong> — juvenile DCM, autosomal recessive</li>
        </ul>
        <p><strong>Nutritional</strong></p>
        <ul>
          <li><strong>Taurine deficiency</strong> — Cocker, Golden Retriever, อาหารบางชนิด</li>
          <li><strong>Diet-associated DCM</strong> (BEG: <em>boutique, exotic protein, grain-free</em>) — FDA investigation 2018+ มี link กับอาหารที่มี legumes/peas/lentils สูง</li>
          <li>L-carnitine deficiency — Boxer (some)</li>
        </ul>
        <p><strong>Other causes:</strong> chronic tachyarrhythmia (tachycardia-induced), myocarditis, doxorubicin toxicity, hypothyroidism (debated)</p>
      `,
      pathophysiology: `
        <ul>
          <li>Primary myocardial dysfunction → ↓ contractility → ↓ stroke volume → ↓ CO</li>
          <li>Compensatory: tachycardia, neurohormonal activation (RAAS, sympathetic) → fluid retention</li>
          <li>Progressive eccentric hypertrophy → LV และ LA dilation มาก</li>
          <li>Functional MR จาก mitral annulus stretching</li>
          <li>↑ LA pressure → pulmonary edema (left CHF)</li>
          <li>Atrial enlargement → atrial fibrillation บ่อย</li>
          <li>Ventricular arrhythmias (Doberman, Boxer) → sudden death</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Occult phase</strong> (preclinical, อาจกินเวลาเป็นปี):</p>
        <ul>
          <li>ไม่มีอาการ — เจอจาก screening (echo, Holter)</li>
          <li>Doberman: occult phase ~3 ปีก่อน CHF onset</li>
        </ul>
        <p><strong>Overt phase</strong> (clinical):</p>
        <ul>
          <li>Exercise intolerance, weakness</li>
          <li>Cough, tachypnea, dyspnea (left CHF)</li>
          <li>Abdominal distension (right CHF — Boxer, Doberman เจอบ่อยกว่า)</li>
          <li>Weight loss, cardiac cachexia</li>
          <li>Syncope — ventricular arrhythmia, AF with rapid response</li>
          <li><strong>Sudden death</strong> — โดยเฉพาะ Doberman (~30% ของ Doberman ตายแบบนี้)</li>
        </ul>
        <p><strong>Auscultation</strong></p>
        <ul>
          <li>Soft systolic murmur (functional MR) — grade I-III</li>
          <li>S3 gallop — characteristic ของ DCM</li>
          <li>Irregular rhythm + pulse deficits → AF</li>
          <li>Premature beats → VPC</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab</strong></p>
        <ul>
          <li><strong>NT-proBNP &gt; 800-900 pmol/L</strong> — sensitive screening for occult DCM ใน Doberman</li>
          <li><strong>cTnI</strong> — ↑ บอก myocardial injury</li>
          <li><strong>Taurine, whole blood</strong> — ในพันธุ์เสี่ยง (Cocker, Golden, Newfoundland) หรือกินอาหาร BEG; &lt; 200 nmol/mL = deficient</li>
          <li>T4 — แยก hypothyroidism</li>
        </ul>
        <p><strong>Thoracic rad</strong></p>
        <ul>
          <li>Generalized cardiomegaly, ↑ VHS</li>
          <li>LA enlargement, pulmonary edema (left CHF)</li>
          <li>Right-sided enlargement, ascites, pleural effusion (Boxer, Doberman)</li>
        </ul>
        <p><strong>Echo (gold standard)</strong></p>
        <ul>
          <li><strong>↓ Fractional shortening</strong> &lt; 25% (normal &gt; 30%)</li>
          <li><strong>↓ Ejection fraction</strong> &lt; 40%</li>
          <li><strong>↑ LV end-diastolic + end-systolic dimensions</strong> — sphere shape</li>
          <li>↑ E-point septal separation (EPSS) &gt; 7-8 mm</li>
          <li>LA enlargement, mild MR/TR (functional)</li>
          <li>Doberman screening: LVIDDN, LVIDSN, LV volumes (Simpson's method)</li>
        </ul>
        <p><strong>ECG / Holter</strong></p>
        <ul>
          <li>Sinus tachycardia, AF (เจอบ่อยใน giant breeds), VPCs</li>
          <li><strong>24-hr Holter</strong> — Doberman screening: &gt; 50-100 VPCs/24h = abnormal; &gt; 300 = high risk</li>
          <li>Boxer: VPC frequency + couplets/triplets predict sudden death risk</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>MMVD</strong> — small breeds, primary valve disease (loud murmur, intact systolic function)</li>
          <li><strong>Pericardial effusion</strong> — round cardiac silhouette แต่ไม่มี hypocontractility</li>
          <li><strong>Tachycardia-induced cardiomyopathy</strong> — AF หรือ supraventricular tachycardia → reversible ถ้า rate controlled</li>
          <li><strong>Myocarditis</strong> (viral, Lyme, Trypanosoma) — acute presentation</li>
          <li><strong>Hypothyroidism</strong> — bradycardia, ↓ contractility (mild DCM-like changes, controversial)</li>
          <li><strong>Doxorubicin toxicity</strong> — cumulative dose &gt; 240 mg/m²</li>
        </ul>
      `,
      treatment: `
        <p><strong>Occult DCM with VPCs (Doberman, Boxer):</strong></p>
        <ul>
          <li><strong>Pimobendan</strong> 0.25 mg/kg PO q12h — PROTECT trial: delay CHF + ↑ survival ใน Doberman occult DCM ✓</li>
          <li>Antiarrhythmic ถ้า VPCs &gt; 300/24h หรือ sustained VT (sotalol 1-2 mg/kg PO q12h, mexiletine 5-8 mg/kg PO q8h)</li>
          <li>ACEI optional</li>
        </ul>
        <p><strong>Diet-associated DCM (suspected BEG):</strong></p>
        <ul>
          <li>เปลี่ยนเป็น <strong>traditional grain-inclusive diet</strong> (Hill's, Royal Canin, Purina, Iams)</li>
          <li><strong>Taurine supplementation</strong> 500-1000 mg PO q12h ถ้า deficient</li>
          <li>L-carnitine 1-2 g PO q8-12h (Boxer, large breeds)</li>
          <li>Echo recheck 3-6 เดือน — บางเคสกลับมา functional ปกติ ✨</li>
        </ul>
        <p><strong>Overt DCM with CHF (Stage C):</strong> Quadruple therapy</p>
        <ul>
          <li><strong>Pimobendan</strong> 0.25-0.3 mg/kg PO q12h</li>
          <li><strong>Furosemide</strong> 2-4 mg/kg PO q8-12h (titrate ตาม RRR/effort)</li>
          <li><strong>ACEI</strong> (enalapril 0.5 mg/kg PO q12-24h)</li>
          <li><strong>Spironolactone</strong> 1-2 mg/kg PO q24h</li>
          <li><strong>Diet change</strong> ถ้าสงสัย BEG; supplement taurine/L-carnitine ถ้า deficient</li>
        </ul>
        <p><strong>Atrial fibrillation rate control:</strong></p>
        <ul>
          <li>Diltiazem 1-3 mg/kg PO q8h (หรือ extended-release q12h)</li>
          <li>± Digoxin 0.003-0.005 mg/kg PO q12h (monitor serum level 1-1.5 ng/mL)</li>
          <li>Target heart rate &lt; 140-160 (in-clinic), Holter average &lt; 125</li>
        </ul>
        <p><strong>Acute decompensation:</strong> เหมือน MMVD acute (O2, IV furosemide, vasodilator, IV pimobendan)</p>
      `,
      complications: `
        <ul>
          <li><strong>Sudden cardiac death</strong> — 25-30% ของ Doberman, ทุกระยะ; Boxer ก็เสี่ยง</li>
          <li><strong>Atrial fibrillation</strong> — ตามมาด้วย rapid decompensation</li>
          <li><strong>Refractory CHF</strong></li>
          <li><strong>Cardiac cachexia</strong></li>
          <li><strong>Thromboembolism</strong> — uncommon ในหมา (ต่างจากแมว HCM)</li>
        </ul>
        <p><strong>Prognosis</strong></p>
        <ul>
          <li><strong>Doberman occult + VPCs:</strong> sudden death &gt; CHF; pimobendan ยืดเวลาได้ ~9 เดือน</li>
          <li><strong>Doberman with CHF:</strong> median survival 6-12 เดือน</li>
          <li><strong>Other breeds with CHF:</strong> 6-24 เดือน</li>
          <li><strong>Cocker Spaniel + taurine deficient:</strong> response well to supplementation, ดีกว่ามาก</li>
          <li><strong>BEG-related DCM:</strong> reversible ใน &gt; 50% หลังเปลี่ยนอาหาร</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 8 · HCM (Feline) ---------- */
  {
    id: 'hcm-feline',
    titleEn: 'Hypertrophic Cardiomyopathy (Feline)',
    titleTh: 'HCM — กล้ามเนื้อหัวใจหนาในแมว',
    type: 'disease',
    system: 'cardiovascular',
    species: ['cat'],
    tags: ['HCM', 'feline cardiomyopathy', 'ATE', 'saddle thrombus', 'Maine Coon', 'Ragdoll', 'gallop', 'SAM'],
    aliases: ['hypertrophic cardiomyopathy', 'กล้ามเนื้อหัวใจหนา', 'แมวหัวใจหนา'],
    source: 'Ch. 8 · pp. 158–173',
    sections: {
      definition: `
        <p><strong>HCM</strong> — LV myocardium หนาผิดปกติ (concentric hypertrophy) โดยไม่มีสาเหตุภายนอก</p>
        <ul>
          <li><strong>Cardiac disease ที่เจอบ่อยที่สุดในแมว</strong> — prevalence ~15% ของแมวทั่วไป, ~30% ในแมวสูงอายุ</li>
          <li>เพศผู้ &gt; เพศเมีย, อายุเฉลี่ยตอนวินิจฉัย ~6 ปี (range 3 เดือน-17 ปี)</li>
          <li>หลายตัว <strong>asymptomatic</strong> จนเกิด acute event</li>
        </ul>
      `,
      etiology: `
        <p><strong>Genetic / Familial</strong></p>
        <ul>
          <li><strong>Maine Coon</strong> — MYBPC3 mutation (A31P), autosomal dominant, incomplete penetrance</li>
          <li><strong>Ragdoll</strong> — MYBPC3 R820W, aggressive disease</li>
          <li>Other breeds: Sphynx, Norwegian Forest, Persian, British Shorthair, Devon Rex, Bengal, American Shorthair</li>
          <li>DSH/DLH ก็เป็นบ่อย</li>
        </ul>
        <p><strong>Acquired hypertrophy (ต้อง rule out ก่อนวินิจฉัย HCM):</strong></p>
        <ul>
          <li><strong>Hyperthyroidism</strong> — most important DDx ในแมวสูงอายุ ✓</li>
          <li><strong>Systemic hypertension</strong> (CKD, hyperthyroid)</li>
          <li><strong>Aortic stenosis</strong>, congenital obstruction</li>
          <li><strong>Acromegaly</strong></li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Concentric LV hypertrophy</strong> (LV wall &gt; 6 mm in diastole):</p>
        <ul>
          <li>Sarcomere disarray ระดับ histology</li>
          <li>Coronary artery wall remodeling → focal myocardial ischemia</li>
          <li>Interstitial fibrosis</li>
        </ul>
        <p><strong>Hemodynamic consequences:</strong></p>
        <ul>
          <li><strong>Diastolic dysfunction</strong> — stiff LV → ↓ LV filling → ↑ LA pressure → pulmonary edema</li>
          <li><strong>Systolic anterior motion (SAM) of mitral valve</strong> → dynamic LV outflow tract obstruction (HOCM phenotype)</li>
          <li><strong>LA enlargement</strong> → blood stasis → <strong>thrombus formation</strong> → arterial thromboembolism (ATE) ✗</li>
          <li>Atrial arrhythmias (AF, supraventricular tachycardia)</li>
          <li>Late stage: systolic dysfunction develops (end-stage HCM, "burnt-out" phase)</li>
        </ul>
        <p><strong>ACVIM staging</strong> (cats):</p>
        <ul>
          <li><strong>Stage A</strong> — at-risk breed, normal echo</li>
          <li><strong>Stage B1</strong> — mild HCM, low risk</li>
          <li><strong>Stage B2</strong> — moderate-severe HCM, ↑ LA size, ↑ ATE risk</li>
          <li><strong>Stage C</strong> — current/past CHF หรือ ATE</li>
          <li><strong>Stage D</strong> — refractory</li>
        </ul>
      `,
      symptoms: `
        <p><strong>หลายตัว asymptomatic</strong> — เจอจาก murmur หรือ gallop sound</p>
        <p><strong>Presentation patterns:</strong></p>
        <ul>
          <li><strong>Acute respiratory distress</strong> — pulmonary edema หรือ pleural effusion (left CHF)</li>
          <li><strong>Acute hindlimb paralysis</strong> — feline arterial thromboembolism (FATE / saddle thrombus) — pulseless, painful, cold limbs ✗ <em>emergency</em></li>
          <li><strong>Sudden death</strong> — ventricular arrhythmia หรือ massive pulmonary edema</li>
          <li><strong>Syncope</strong> — uncommon</li>
          <li><strong>Lethargy, hyporexia, weight loss</strong> — chronic CHF</li>
        </ul>
        <p><strong>Auscultation</strong></p>
        <ul>
          <li><strong>Systolic murmur</strong> — left parasternal, มัก dynamic (เปลี่ยนตาม HR/excitement) — SAM</li>
          <li><strong>Gallop sound (S4)</strong> — high specific สำหรับ HCM ในแมว</li>
          <li>Arrhythmia — premature beats</li>
          <li><em>30-50% ของแมว HCM ไม่มี murmur</em> ⚠️</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab — rule out other causes ก่อน</strong></p>
        <ul>
          <li><strong>Total T4</strong> — ต้อง rule out hyperthyroidism ในแมว &gt; 6 ปี</li>
          <li><strong>BP</strong> — exclude systemic hypertension</li>
          <li><strong>NT-proBNP</strong> (feline) — &gt; 100 pmol/L (SNAP) หรือ &gt; 270 pmol/L (quantitative) → high suspicion ของ cardiac disease; ใช้แยก cardiac vs respiratory dyspnea</li>
          <li><strong>cTnI</strong> — elevated ใน moderate-severe HCM</li>
          <li>BUN/Cr, electrolytes</li>
        </ul>
        <p><strong>Thoracic rad</strong></p>
        <ul>
          <li>"<em>Valentine heart</em>" — biatrial enlargement, classical (แต่ไม่เห็นเสมอ)</li>
          <li>Pulmonary edema — patchy, มัก <strong>diffuse</strong> distribution ในแมว (ต่างจากหมา!)</li>
          <li><strong>Pleural effusion</strong> — เจอบ่อยใน feline CHF</li>
        </ul>
        <p><strong>Echo (definitive diagnosis)</strong></p>
        <ul>
          <li><strong>LV wall thickness ≥ 6 mm in diastole</strong> (IVSd หรือ LVPWd)</li>
          <li>Distribution: symmetric, asymmetric, focal, papillary muscle hypertrophy</li>
          <li><strong>SAM of mitral valve</strong> ± dynamic LV outflow tract obstruction</li>
          <li><strong>LA enlargement</strong> — LA:Ao &gt; 1.6 = ↑ ATE risk; &gt; 2.0 = high risk</li>
          <li><strong>Spontaneous echo contrast</strong> ("smoke") in LA → imminent thromboembolism</li>
          <li>LV thrombus visualization</li>
          <li>Diastolic function indices (E/A, TDI E') — ลดลง</li>
        </ul>
        <p><strong>ECG</strong> — non-specific; LV enlargement pattern, occasional VPCs</p>
      `,
      differential: `
        <p><strong>Other feline cardiomyopathies (ต้องแยกด้วย echo):</strong></p>
        <ul>
          <li><strong>Restrictive cardiomyopathy (RCM)</strong> — LV walls ปกติ, severe LA enlargement, restrictive filling</li>
          <li><strong>Dilated cardiomyopathy (DCM)</strong> — rare แล้ว (taurine supplemented); thin walls, ↓ FS</li>
          <li><strong>Unclassified cardiomyopathy</strong> — overlap features</li>
          <li><strong>ARVC</strong> — right-sided</li>
        </ul>
        <p><strong>Acquired LV hypertrophy:</strong></p>
        <ul>
          <li>Hyperthyroidism, hypertension, acromegaly, congenital obstruction</li>
        </ul>
        <p><strong>Dyspnea/respiratory distress:</strong> feline asthma, pneumonia, pleural effusion (non-cardiac), neoplasia</p>
      `,
      treatment: `
        <p><strong>Stage B1 (mild HCM, low risk):</strong></p>
        <ul>
          <li>ไม่ต้องให้ medication ✗</li>
          <li>Echo recheck ทุก 6-12 เดือน</li>
        </ul>
        <p><strong>Stage B2 (moderate-severe, ↑ LA size, ATE risk):</strong></p>
        <ul>
          <li><strong>Clopidogrel 18.75 mg/cat PO q24h</strong> — FATCAT trial: ↓ ATE recurrence ✓ (ใช้ป้องกันใน B2 ที่ LA โต)</li>
          <li>± <strong>Atenolol</strong> 6.25-12.5 mg/cat PO q12h (เฉพาะถ้ามี dynamic LVOTO จาก SAM, รองลงมา)</li>
          <li>Diltiazem extended-release 30 mg/cat PO q12-24h — alternative</li>
          <li><strong>NO pimobendan</strong> ใน HCM โดยทั่วไป (อาจเพิ่ม LVOTO)</li>
        </ul>
        <p><strong>Stage C — CHF (acute pulmonary edema หรือ pleural effusion):</strong></p>
        <ul>
          <li>O2, minimal stress (แมวเครียดง่าย!)</li>
          <li><strong>Furosemide</strong> 1-2 mg/kg IV/IM q1-4h initially (แมว — onset ช้ากว่าหมา)</li>
          <li><strong>Thoracocentesis</strong> ถ้า moderate-large pleural effusion (relieve dyspnea เร็ว)</li>
          <li>Mild sedation (butorphanol 0.2 mg/kg IM)</li>
          <li>Topical nitroglycerin 1/8-1/4 inch q4-6h (controversial benefit)</li>
          <li>เริ่ม clopidogrel หลัง stabilize</li>
        </ul>
        <p><strong>Chronic Stage C:</strong></p>
        <ul>
          <li><strong>Furosemide</strong> 1-2 mg/kg PO q12-24h (ลดเป็น lowest effective dose)</li>
          <li><strong>Clopidogrel</strong> 18.75 mg/cat PO q24h ✓</li>
          <li><strong>ACEI</strong> (benazepril 0.5 mg/kg PO q24h) — debated benefit แต่นิยมใช้</li>
          <li>± Spironolactone 1-2 mg/kg PO q24h (อาจทำให้แพ้ผิวหน้า)</li>
          <li>Atenolol — ใช้ถ้ายัง LVOTO เด่น แต่หยุด/ลดถ้า CHF</li>
          <li>หลีกเลี่ยง stress, ให้น้ำเข้าถึงตลอด, lifestyle modification</li>
        </ul>
        <p><strong>FATE (Acute thromboembolism) — emergency:</strong></p>
        <ul>
          <li>Pain control: <strong>methadone 0.2-0.4 mg/kg IV/IM q4-6h</strong> หรือ buprenorphine 0.02 mg/kg IV/IM/OTM</li>
          <li>O2, warming</li>
          <li>Clopidogrel 75 mg loading then 18.75 mg/cat q24h</li>
          <li>± Heparin (LMWH, เช่น enoxaparin 1 mg/kg SC q12h) — debated</li>
          <li>Treat concurrent CHF</li>
          <li><strong>Avoid thrombolytics</strong> (tPA) — high mortality จาก reperfusion injury, hyperkalemia</li>
          <li>เจ้าของต้องเข้าใจ guarded prognosis; ~50% euthanized at presentation</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Feline Arterial Thromboembolism (FATE/ATE)</strong> — saddle thrombus เจอบ่อยสุด; เกิดที่ขาเดียว, mesenteric, renal, brachial ก็ได้; เจ็บมาก; survival ~30-40% ถ้ารักษา, neuro recovery variable</li>
          <li><strong>Acute pulmonary edema / pleural effusion</strong></li>
          <li><strong>Sudden death</strong> — ventricular arrhythmia</li>
          <li><strong>Syncope</strong> — LVOTO, arrhythmia</li>
          <li><strong>End-stage HCM</strong> — systolic dysfunction develops, RCM-like appearance</li>
        </ul>
        <p><strong>Prognosis (variable มาก):</strong></p>
        <ul>
          <li><strong>Asymptomatic Stage B1:</strong> หลายตัวอยู่ปกติได้นานเป็นปีๆ</li>
          <li><strong>Stage B2:</strong> 5-yr survival ~50%; ~30% develop CHF หรือ ATE</li>
          <li><strong>Stage C (post-CHF):</strong> median survival 1-2 ปี</li>
          <li><strong>Post-ATE survivors:</strong> median 6-12 เดือน, 25-50% recurrence</li>
          <li><strong>Ragdoll, severe phenotype:</strong> worse prognosis</li>
        </ul>
        <div class="callout">⚠️ <strong>แมวเครียดง่ายมาก</strong> — handle dyspneic cat ด้วยความระวังที่สุด — fatal decompensation เกิดจาก over-restraint ได้. ให้ O2 + thoracocentesis ก่อน rad ถ้าจำเป็น</div>
      `,
    },
  },

  /* ---------- Ch 9 · Pericardial Effusion / Cardiac Tamponade ---------- */
  {
    id: 'pericardial-effusion',
    titleEn: 'Pericardial Effusion &amp; Cardiac Tamponade',
    titleTh: 'น้ำในเยื่อหุ้มหัวใจ + Tamponade',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['pericardial effusion', 'cardiac tamponade', 'HSA', 'hemangiosarcoma', 'pericardiocentesis', 'chemodectoma', 'idiopathic'],
    aliases: ['pericardial fluid', 'น้ำในเยื่อหุ้มหัวใจ', 'tamponade'],
    source: 'Ch. 9 · pp. 174–189',
    sections: {
      definition: `
        <p>มีน้ำสะสมใน pericardial space — ถ้าเยอะ/เร็วพอ จะกด heart filling เกิด <strong>cardiac tamponade</strong> (emergency)</p>
        <ul>
          <li>เจอบ่อยใน <strong>หมาพันธุ์ใหญ่ สูงอายุ</strong></li>
          <li>แมว — มัก secondary จาก CHF (cardiomyopathy), rarely cause tamponade</li>
        </ul>
      `,
      etiology: `
        <p><strong>Dogs (hemorrhagic effusion เจอบ่อย):</strong></p>
        <ul>
          <li><strong>Hemangiosarcoma (HSA)</strong> — สาเหตุอันดับ 1 ในหมาใหญ่; right atrial appendage มากที่สุด; Golden Retriever, GSD, Lab</li>
          <li><strong>Idiopathic (benign) pericardial effusion</strong> — อันดับ 2; สาเหตุไม่ชัด; Golden, Lab, Saint Bernard; recurrent</li>
          <li>Heart base tumors: <strong>chemodectoma</strong> (Boxer, Bulldog), thyroid carcinoma, ectopic thyroid</li>
          <li>Pericardial mesothelioma — diffuse</li>
          <li>Atrial rupture (severe MMVD with LA tear)</li>
          <li>Coagulopathy (rodenticide)</li>
          <li>Trauma, iatrogenic (post-pericardiocentesis tear)</li>
          <li>Lymphoma (เจอบ่อยกว่าในแมว)</li>
          <li>Bacterial/fungal pericarditis (rare; grass awn migration ในหมา)</li>
        </ul>
        <p><strong>Cats (transudate/modified transudate เจอบ่อย):</strong></p>
        <ul>
          <li>CHF จาก HCM/RCM</li>
          <li>FIP — สาเหตุ <em>symptomatic</em> ที่เจอบ่อยสุดในแมว ✗</li>
          <li>Lymphoma</li>
          <li>Toxoplasmosis</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Cardiac tamponade physiology:</strong></p>
        <ul>
          <li>Pericardial pressure สูงขึ้น → เท่ากับ/เกิน normal cardiac diastolic pressure</li>
          <li>External compression → ↓ ventricular filling → ↓ stroke volume → ↓ CO</li>
          <li>Right heart โดนก่อน (pressure ต่ำกว่า, wall บางกว่า)</li>
          <li>Compensatory: ↑ HR, ↑ SVR, ↑ blood volume → eventually fail</li>
          <li><strong>Right CHF เด่น:</strong> ascites, pleural effusion, hepatomegaly, JVD</li>
          <li>Severe → cardiogenic shock</li>
        </ul>
        <p>Rate of accumulation สำคัญ: 100 mL ค่อยๆ = OK; 100 mL acute = tamponade ✗</p>
      `,
      symptoms: `
        <p><strong>Slow accumulation (idiopathic, chemodectoma):</strong></p>
        <ul>
          <li>Lethargy, weakness, exercise intolerance</li>
          <li>Anorexia, weight loss</li>
          <li>Abdominal distension (ascites)</li>
          <li>Tachypnea, dyspnea (pleural effusion)</li>
          <li>Cough, vomiting (occasional)</li>
        </ul>
        <p><strong>Rapid accumulation (HSA bleed, atrial tear):</strong></p>
        <ul>
          <li>Acute collapse, syncope</li>
          <li>Severe weakness</li>
          <li>Pale MM, prolonged CRT</li>
          <li>บางทีตายกะทันหันโดยไม่มี warning</li>
        </ul>
        <p><strong>Physical exam:</strong></p>
        <ul>
          <li><strong>Muffled heart sounds</strong> (classic) ✨</li>
          <li>Weak femoral pulse, บางครั้งมี <strong>pulsus paradoxus</strong> (pulse อ่อนตอนหายใจเข้า)</li>
          <li>Sinus tachycardia (compensatory)</li>
          <li>JVD หรือ positive hepatojugular reflux ✨</li>
          <li>Ascites (palpable fluid wave)</li>
          <li>Pale MM, prolonged CRT (poor CO)</li>
          <li>Lung sounds ลดลงด้านล่าง (pleural effusion)</li>
          <li>มัก NO heart murmur ถ้าไม่มีโรคอื่นร่วม</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab:</strong></p>
        <ul>
          <li>CBC: anemia (HSA — regenerative + schistocytes/acanthocytes), thrombocytopenia (HSA, DIC)</li>
          <li>Biochem: ↑ LFTs (hepatic congestion), prerenal azotemia</li>
          <li><strong>cTnI:</strong> ↑ มากใน HSA; ใช้แยกจาก idiopathic ✨</li>
          <li><strong>NT-proBNP:</strong> มัก NOT elevated ใน pericardial effusion (ต่างจากโรคหัวใจอื่น) — useful contrast</li>
          <li>Coags (PT, aPTT) — rule out rodenticide, DIC</li>
        </ul>
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li><strong>Globoid (round) cardiac silhouette</strong> — classic แต่ไม่ pathognomonic ✨</li>
          <li>Pleural effusion (50%)</li>
          <li>Caudal vena cava distension</li>
          <li>"Snow globe" appearance (cardiac silhouette ไม่เห็น chamber borders)</li>
          <li>Lung fields ปกติมัก clear (vs CHF — pulmonary edema)</li>
        </ul>
        <p><strong>ECG:</strong></p>
        <ul>
          <li><strong>Low voltage QRS</strong> (R wave &lt; 1.0 mV in lead II ในหมา)</li>
          <li><strong>Electrical alternans</strong> — beat-to-beat variation ใน QRS amplitude (heart "swinging" in fluid) ✨</li>
          <li>Sinus tachycardia</li>
          <li>บางทีมี VPCs</li>
        </ul>
        <p><strong>Echo (definitive + identifies cause):</strong></p>
        <ul>
          <li>Anechoic space รอบหัวใจ</li>
          <li><strong>Right atrial collapse during diastole</strong> = tamponade ✓</li>
          <li><strong>Right ventricular collapse during diastole</strong> = severe tamponade</li>
          <li>ดู <strong>right auricle</strong> ดีๆ (HSA เจอบ่อยสุด)</li>
          <li>Heart base mass (chemodectoma)</li>
          <li>Aortic root mass (less common locations)</li>
          <li>Idiopathic — ไม่เจอ mass</li>
        </ul>
        <p><strong>Pericardial fluid analysis (post-centesis):</strong></p>
        <ul>
          <li>HSA, idiopathic, mesothelioma → hemorrhagic, PCV มัก 7-30%</li>
          <li>Cytology: limited utility; reactive mesothelial cells เจอบ่อย แยกจาก neoplasia ยาก</li>
          <li>Modified transudate/transudate: heart failure, FIP, toxemia</li>
          <li>Septic exudate: rare; bacterial culture ถ้าสงสัย</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>CHF (สาเหตุอื่น) — pulmonary edema มัก present, NT-proBNP ↑</li>
          <li>Hypoalbuminemia (PLE, PLN, hepatic failure) — ascites โดยไม่มี cardiac signs</li>
          <li>Pleural effusion (chylothorax, pyothorax, neoplasia)</li>
          <li>Abdominal mass (splenic, hepatic) ที่มาด้วย weakness</li>
        </ul>
      `,
      treatment: `
        <p><strong>Cardiac tamponade = emergency!</strong></p>
        <p><strong>1. Pericardiocentesis (immediate, life-saving)</strong> — ดู procedure entry</p>

        <p><strong>2. Supportive care (do NOT use diuretics ใน tamponade!) ✗</strong></p>
        <ul>
          <li>IV fluids — careful crystalloid bolus (10-20 mL/kg) เพื่อ ↑ preload ระหว่างเตรียมเจาะ</li>
          <li>O2 supplementation</li>
          <li>หลีกเลี่ยง diuretics — ↓ preload เพิ่ม, ทำให้แย่ลง</li>
          <li>หลีกเลี่ยง pimobendan ตอน acute</li>
        </ul>

        <p><strong>3. Treat underlying cause:</strong></p>
        <ul>
          <li><strong>HSA:</strong>
            <ul>
              <li>Surgical resection ของ right atrial mass (right thoracotomy หรือ thoracoscopic) + chemo (doxorubicin)</li>
              <li>ถ้าไม่ผ่า: median survival 1-3 เดือน</li>
              <li>ผ่า + chemo: 4-8 เดือน</li>
            </ul>
          </li>
          <li><strong>Idiopathic:</strong>
            <ul>
              <li>1st episode: pericardiocentesis อย่างเดียว — ~50% ไม่กลับ</li>
              <li>Recurrent (≥ 2 episodes): <strong>subtotal pericardiectomy</strong> ผ่าน thoracotomy หรือ thoracoscopy → curative ~85-90%</li>
              <li>เสี่ยง progress ไป constrictive pericarditis ถ้าไม่รักษา</li>
            </ul>
          </li>
          <li><strong>Chemodectoma:</strong>
            <ul>
              <li>Pericardiectomy palliates (relieve recurrent tamponade)</li>
              <li>Surgical resection ทำได้ยาก (heart base location)</li>
              <li>Stereotactic radiation therapy — emerging option</li>
              <li>Median survival with pericardiectomy ~1-2 ปี (โตช้า)</li>
            </ul>
          </li>
          <li><strong>FIP (cat):</strong> เคย grave; ตอนนี้มี <em>GS-441524 antiviral</em> cure rate สูง</li>
          <li><strong>Lymphoma:</strong> chemotherapy (multi-drug protocol)</li>
        </ul>
      `,
      complications: `
        <p><strong>Acute:</strong></p>
        <ul>
          <li>ตายจาก tamponade ถ้าไม่ relieve</li>
          <li>Iatrogenic ตอน pericardiocentesis: coronary laceration, ventricular puncture, arrhythmia</li>
        </ul>
        <p><strong>Chronic:</strong></p>
        <ul>
          <li><strong>Constrictive pericarditis</strong> — fibrotic pericardium ขยายไม่ได้ → chronic right CHF; dx ด้วย echo (thick pericardium) + cath (equalized diastolic pressures); tx = pericardiectomy</li>
          <li>Recurrent effusion (idiopathic, chemodectoma, mesothelioma)</li>
          <li>Metastasis (HSA — splenic, hepatic, pulmonary)</li>
        </ul>
        <p><strong>Prognosis (variable มากตามสาเหตุ):</strong></p>
        <ul>
          <li><strong>Idiopathic:</strong> excellent ถ้า pericardiectomy</li>
          <li><strong>HSA:</strong> grave — median 1-3 เดือนถ้าไม่ tx; 4-8 เดือนถ้าผ่า + chemo</li>
          <li><strong>Chemodectoma:</strong> moderate — 1-2 ปี with pericardiectomy</li>
          <li><strong>Mesothelioma:</strong> poor — 4-6 เดือน</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 9 · Pericardiocentesis (procedure) ---------- */
  {
    id: 'pericardiocentesis',
    titleEn: 'Pericardiocentesis',
    titleTh: 'Pericardiocentesis — การเจาะระบาย',
    type: 'procedure',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['pericardiocentesis', 'tap', 'tamponade', 'pericardial drainage', 'emergency'],
    aliases: ['pericardial tap', 'การเจาะหัวใจ', 'tap pericardium'],
    source: 'Ch. 9 · pp. 184–185',
    sections: {
      indications: `
        <p><strong>Absolute indication:</strong></p>
        <ul>
          <li><strong>Cardiac tamponade</strong> (life-saving) — RA collapse บน echo + clinical signs of poor CO</li>
        </ul>
        <p><strong>Relative indications:</strong></p>
        <ul>
          <li>Diagnostic fluid sampling (เมื่อสาเหตุไม่ชัด)</li>
          <li>Large effusion ใกล้ tamponade</li>
          <li>Symptomatic relief ใน non-tamponade large effusion</li>
        </ul>
      `,
      contraindications: `
        <p><strong>Absolute:</strong></p>
        <ul>
          <li>ไม่มี เมื่อ tamponade เป็น life-threatening — benefit &gt; risk</li>
        </ul>
        <p><strong>Relative (ระวัง):</strong></p>
        <ul>
          <li><strong>Coagulopathy</strong> — rodenticide intoxication, DIC, severe thrombocytopenia → แก้ก่อนถ้ามีเวลา; ถ้า tamponade ทำเลยพร้อม vitamin K + plasma support</li>
          <li><strong>Atrial tear / hemorrhage จาก MMVD</strong> — drainage อาจทำให้ bleed มากขึ้น (แต่บางครั้งจำเป็น)</li>
          <li><strong>Small volume effusion</strong> — เสี่ยง cardiac puncture สูง</li>
          <li><strong>Adhesions / loculated fluid</strong> — ต้องใช้ ultrasound guidance</li>
          <li>สัตว์ไม่ร่วมมือโดยไม่มี sedation</li>
        </ul>
      `,
      preparation: `
        <p><strong>Patient:</strong></p>
        <ul>
          <li>Position: <strong>left lateral recumbency</strong> (หรือ sternal ในเคส dyspneic)</li>
          <li>เจาะด้านขวา — หัวใจเลื่อนออกจาก right chest wall ตอนมี effusion</li>
          <li>IV access — 20-22 g cephalic catheter, run LRS at maintenance</li>
          <li>Continuous ECG monitoring (lead II)</li>
          <li>O2 supplementation (flow-by หรือ mask)</li>
          <li>Sedation มัก NOT need ในเคส collapsing; mild butorphanol 0.2 mg/kg IV ± midazolam 0.2 mg/kg ถ้ากังวลมาก</li>
          <li>Clip + aseptic prep right thoracic wall ICS 4-6, 2-4 cm เหนือ sternum</li>
          <li>Local anesthetic: 2% lidocaine 1-3 mL infiltrate skin → intercostal muscles → parietal pleura</li>
        </ul>
        <p><strong>Equipment:</strong></p>
        <ul>
          <li>14-16 g over-the-needle IV catheter (3-5 inch length) สำหรับหมากลาง-ใหญ่; 18-20 g สำหรับแมว/หมาเล็ก</li>
          <li>Extension set + 3-way stopcock</li>
          <li>20-60 mL syringe</li>
          <li>EDTA tube + plain (red top) tube + culture tube สำหรับ fluid analysis</li>
          <li>ชาม/basin รองน้ำ</li>
          <li><strong>Ultrasound</strong> (แนะนำสำหรับ guidance + confirm needle placement)</li>
          <li>Backup: defibrillator, lidocaine, emergency drugs ready</li>
        </ul>
        <p><strong>Anatomy review:</strong></p>
        <ul>
          <li>เจาะขวา — RA &amp; RV ติดกับ chest wall ตอนหัวใจถูกดันจาก effusion</li>
          <li>Coronary arteries อยู่ด้านซ้าย (เลี่ยง)</li>
          <li>เข้าจาก <strong>caudal aspect ของ rib</strong> — intercostal vessels วิ่งตามขอบ caudal ของ rib ก่อนหน้า</li>
          <li>เอียงเข็มไปทาง cranial + dorsal (เล็งไปไหล่ตรงข้าม)</li>
        </ul>
      `,
      steps: `
        <ol style="font-family: var(--font-thai); font-size: 16px; line-height: 1.7; color: var(--ink); margin: 6px 0 10px 22px; padding: 0;">
          <li><strong>Confirm tamponade</strong> ด้วย quick echo หรือ POCUS — เห็น anechoic space + RA collapse</li>
          <li><strong>Identify landmark:</strong> right side, ICS 4-6, เหนือ costochondral junction (คล้าระดับหัวใจที่เต้น)</li>
          <li><strong>Aseptic prep + drape</strong></li>
          <li><strong>Local anesthesia:</strong> infiltrate lidocaine SQ → intercostal muscle → pleura</li>
          <li><strong>Stab incision</strong> ด้วย #11 blade (1-2 mm) ที่ puncture site เพื่อให้ catheter ผ่านง่าย</li>
          <li><strong>Attach catheter เข้า extension/stopcock/syringe</strong>; ให้ผู้ช่วย aspirate เบาๆ ขณะแทง</li>
          <li><strong>Insert catheter</strong> perpendicular to skin, advance ช้าๆ ผ่าน chest wall ขณะ aspirate
            <ul style="margin: 6px 0 6px 20px;">
              <li>จะรู้สึก "pop" ตอนเข้า pleural space — อาจได้ pleural fluid นิดหน่อย</li>
              <li>Advance ต่อ — pop ครั้งที่ 2 เข้า pericardium → fluid flash กลับ</li>
            </ul>
          </li>
          <li><strong>เมื่อ fluid flash:</strong> หยุด needle อยู่กับที่, advance เฉพาะ catheter cannula ออกจาก stylet, แล้วถอน stylet</li>
          <li><strong>Drain fluid</strong> ใช้ stopcock + syringe; ดูดจน flow หยุดหรือช้าลงมาก</li>
          <li><strong>Collect samples:</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>EDTA tube — cytology, PCV</li>
              <li>Plain tube — ตั้งทิ้งไว้: <em>blood จากในหัวใจจะ clot</em>; pericardial hemorrhage จะ NOT clot (defibrinated)</li>
              <li>Culture ถ้า exudative</li>
            </ul>
          </li>
          <li><strong>Watch ECG ตลอด</strong> — VPCs/VT ขึ้นมา = catheter โดน myocardium → ถอนกลับ 1-2 mm</li>
          <li><strong>เมื่อ drainage หมด</strong> (rate ช้า, syringe ยาก): ถอน catheter, กดที่ puncture site 1-2 min</li>
          <li><strong>Post-procedure echo</strong> ยืนยันว่า effusion ลด + ไม่มี complication ใหม่</li>
        </ol>
      `,
      complications: `
        <p><strong>Common (mild):</strong></p>
        <ul>
          <li>Transient VPCs (myocardial contact) — มัก self-limit</li>
          <li>Vasovagal response — transient bradycardia, ให้ atropine ถ้านาน</li>
          <li>Mild hemorrhage ที่ puncture site</li>
        </ul>
        <p><strong>Serious (rare ถ้าทำดี + US guidance):</strong></p>
        <ul>
          <li>Coronary artery laceration → severe hemorrhage</li>
          <li>Ventricular puncture → tamponade แย่ลง, pneumopericardium</li>
          <li>Pneumothorax</li>
          <li>Laceration ของ right atrial mass (HSA) → fatal hemorrhage</li>
          <li>Sustained ventricular arrhythmia → VF</li>
          <li>Bacterial pericarditis (aseptic ไม่ดี)</li>
        </ul>
        <p>Complications ส่วนใหญ่เลี่ยงได้ด้วย: <strong>ultrasound guidance, แทงช้าๆ, ECG monitoring, ประสบการณ์</strong></p>
      `,
      postCare: `
        <ul>
          <li><strong>Continuous ECG</strong> 4-6 ชม. หลังทำ (transient VPCs เจอบ่อย)</li>
          <li>Recheck PCV / TS — ดู ongoing hemorrhage</li>
          <li>Repeat echo ที่ 24h และ 1 wk เพื่อ assess reaccumulation</li>
          <li>ถ้า reaccumulate ใน 1-2 wk → suggests ongoing process (HSA, neoplasia, recurrent idiopathic)</li>
          <li>Idiopathic: 1st episode → observe; 2nd episode → consider <strong>pericardiectomy</strong> (definitive)</li>
          <li>ส่ง fluid cytology + biochemistry (PCV, TP); culture ถ้า exudative</li>
          <li>Plan workup เพิ่ม (CT, exploratory thoracoscopy) ถ้ายังหา cause ไม่เจอบน echo</li>
          <li>Monitor delayed hemorrhage โดยเฉพาะ HSA หรือ coagulopathy</li>
          <li>Client communication: อธิบาย underlying cause + prognosis ตรงไปตรงมา</li>
        </ul>
        <div class="callout">💡 Idiopathic effusion ที่หายแล้ว — หลายเคสไม่กลับมา; แต่ถ้ากลับ &gt; 2 ครั้ง = pericardiectomy เป็น curative (~85-90%)</div>
      `,
    },
  },

  /* ---------- Ch 10 · Pulmonary Hypertension &amp; Heartworm ---------- */
  {
    id: 'pulmonary-hypertension',
    titleEn: 'Pulmonary Hypertension &amp; Heartworm Disease',
    titleTh: 'PH &amp; Heartworm',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['PH', 'PAH', 'heartworm', 'Dirofilaria', 'sildenafil', 'tadalafil', 'cor pulmonale', 'caval syndrome', 'melarsomine'],
    aliases: ['heartworm disease', 'HWD', 'pulmonary hypertension', 'พยาธิหนอนหัวใจ', 'หลอดเลือดปอดสูง'],
    source: 'Ch. 10 · pp. 190–210',
    sections: {
      definition: `
        <p><strong>Pulmonary Arterial Hypertension (PAH):</strong> systolic PA pressure &gt; 35 mmHg หรือ mean &gt; 25 mmHg</p>
        <ul>
          <li>Mild: 35-55 mmHg | Moderate: 55-80 | Severe: &gt; 80</li>
        </ul>
        <p><strong>Heartworm Disease (HWD):</strong> infection ด้วย <em>Dirofilaria immitis</em> ผ่านยุง — สาเหตุ PH ที่สำคัญที่สุดใน endemic regions (รวมไทย)</p>
      `,
      etiology: `
        <p><strong>WHO classification ของ PH (modified for vet):</strong></p>
        <ul>
          <li><strong>Group I — PAH:</strong> idiopathic, congenital L-R shunts (PDA, VSD)</li>
          <li><strong>Group II — left heart disease (~40%):</strong> MMVD, DCM, HCM (postcapillary PH)</li>
          <li><strong>Group III — hypoxic pulmonary disease (20-40%):</strong> chronic bronchitis, pulmonary fibrosis, BOAS</li>
          <li><strong>Group IV — thromboembolic disease:</strong> heartworm, IMHA, neoplasia, hyperadrenocorticism</li>
          <li><strong>Group V — multifactorial / heartworm</strong></li>
        </ul>
        <p><strong>Heartworm life cycle:</strong></p>
        <ul>
          <li>ยุงดูด microfilariae (L1) จากหมาที่ติดเชื้อ</li>
          <li>L1 → L2 → L3 ในยุง (~2-2.5 wk, ต้อง &gt; 64°F sustained)</li>
          <li>L3 ถูกฉีดเข้าตัวสัตว์ใหม่ตอนยุงดูดเลือด</li>
          <li>L3 → L4 → L5 (juvenile) ใน tissue 2-3 เดือน</li>
          <li>L5 เข้า vasculature ~100 วันหลัง infection, migrate ไป pulmonary arteries</li>
          <li>Mature adults ที่ 5-7 เดือน → patent infection (microfilaria ในเลือด)</li>
          <li>Adult worms 15-30 cm; survive 5-7 ปีในหมา, 3-4 ปีในแมว</li>
          <li><strong>Wolbachia</strong> endosymbiont — bacterial co-infection, contribute to inflammation</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>PH consequences:</strong></p>
        <ul>
          <li>Pulmonary vascular remodeling: medial hypertrophy, intimal proliferation, thrombosis, arterial necrosis</li>
          <li>↑ RV afterload → RV hypertrophy → eventually <strong>cor pulmonale</strong> (right CHF)</li>
          <li>Tricuspid annulus stretching → secondary TR</li>
          <li>Septal flattening, paradoxical septal motion</li>
          <li>↓ LV filling (interventricular dependence) → ↓ CO</li>
        </ul>
        <p><strong>Heartworm-specific pathology:</strong></p>
        <ul>
          <li>Adult worms ใน pulmonary arteries (โดยเฉพาะ caudal lobar)</li>
          <li>Villous myointimal proliferation → vessel narrowing + hypertrophy</li>
          <li>Wolbachia surface protein → systemic inflammation</li>
          <li>Eosinophilic pneumonitis</li>
          <li>Glomerulonephritis (immune complex deposition)</li>
          <li><strong>Caval syndrome:</strong> heavy worm burden migrate ไป RA/RV/vena cava → mechanical obstruction + intravascular hemolysis (RBC sheared by worms) → acute hepatic congestion + anemia + DIC</li>
        </ul>
      `,
      symptoms: `
        <p><strong>PH (general):</strong></p>
        <ul>
          <li>Exercise intolerance, fatigue</li>
          <li>Persistent respiratory difficulty</li>
          <li>Cough</li>
          <li>Syncope (โดยเฉพาะตอนออกแรงหรือไอ)</li>
          <li>Cyanosis</li>
          <li>Right CHF: ascites, hepatomegaly, JVD</li>
        </ul>
        <p><strong>Heartworm — clinical class:</strong></p>
        <ul>
          <li><strong>Class 1 (mild):</strong> asymptomatic ถึง mild cough; rad ปกติ/เปลี่ยนเล็กน้อย</li>
          <li><strong>Class 2 (moderate):</strong> cough, exercise intolerance, tachypnea; PA enlargement บน rad</li>
          <li><strong>Class 3 (severe):</strong> dyspnea, weight loss, syncope, ascites (right CHF); marked PA changes, RV enlargement</li>
          <li><strong>Caval syndrome:</strong> acute weakness, pale MM, hemoglobinuria (ฉี่แดง), jaundice, marked TR murmur — ตายใน 1-2 วันถ้าไม่ผ่า</li>
        </ul>
        <p><strong>Auscultation in PH:</strong></p>
        <ul>
          <li>Loud, split S2 (delayed pulmonic closure)</li>
          <li>Right systolic murmur (TR) ที่ right apex</li>
          <li>Sinus arrhythmia / relative bradycardia (high vagal tone จาก pulm dz)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Heartworm testing:</strong></p>
        <ul>
          <li><strong>Antigen test (SNAP, IDEXX):</strong>
            <ul>
              <li>Detect female adult worm antigen (uterine glycoprotein)</li>
              <li>Sensitive ~98% สำหรับ ≥ 3 mature females; positive ที่ 6.5-7 เดือนหลัง infection</li>
              <li>False negative: all-male infection, low burden, immune complex blocking (heat-treat sample เพื่อ confirm)</li>
            </ul>
          </li>
          <li><strong>Microfilaria test (Knott หรือ filter):</strong>
            <ul>
              <li>Confirm patent infection; แยก D. immitis จาก Acanthocheilonema reconditum</li>
              <li>แนะนำในหมา antigen-positive ทุกตัวก่อน adulticide therapy</li>
            </ul>
          </li>
          <li><strong>Cats:</strong> antigen + antibody แนะนำทั้งคู่ (antigen sensitivity ต่ำ เพราะ low burden)</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Radiographs:</strong>
            <ul>
              <li>RV enlargement, PA bulge (12-2 นาฬิกาบน DV)</li>
              <li>Enlarged, blunted, tortuous lobar arteries (caudal lobar artery กว้างกว่า 9th rib ที่ 9th ICS)</li>
              <li>Patchy alveolar pattern (eosinophilic pneumonitis)</li>
            </ul>
          </li>
          <li><strong>Echocardiography:</strong>
            <ul>
              <li>RV/RA dilation, RV hypertrophy</li>
              <li>Septal flattening, paradoxical motion</li>
              <li>PA dilation (&gt; aortic root)</li>
              <li><strong>TR jet velocity</strong> → estimate PA systolic pressure: PASP = 4(TR vel)² + RA pressure</li>
              <li>เห็น heartworms ใน PA, RV (severe burden) — "double-line" sign</li>
            </ul>
          </li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>Eosinophilia (variable)</li>
          <li>↑ RDW มักเจอใน severe PH</li>
          <li>Proteinuria — glomerulonephritis</li>
          <li>↑ NT-proBNP, cTnI ใน severe disease</li>
          <li>Caval syndrome: hemoglobinuria, ↓ Hct, ↑ bilirubin, ↑ liver enzymes</li>
        </ul>
      `,
      differential: `
        <p><strong>Cause of PH:</strong></p>
        <ul>
          <li>Rule out left heart disease ก่อน (Group II เจอบ่อยสุด)</li>
          <li>Heartworm test — endemic areas เช็คทุกครั้ง</li>
          <li>Chronic respiratory disease (chronic bronchitis, fibrosis, BOAS)</li>
          <li>Pulmonary thromboembolism workup (D-dimer, TEG, CT angiography)</li>
        </ul>
        <p><strong>Cough/dyspnea:</strong> CHF (left), pneumonia, neoplasia, asthma (cat)</p>
      `,
      treatment: `
        <p><strong>PH treatment (ถ้า cause ไม่ reversible):</strong></p>
        <ul>
          <li><strong>Sildenafil 1-3 mg/kg PO q8-12h</strong> — PDE5 inhibitor, selective pulmonary vasodilator. คุ้มค่าสุด. ↑ quality of life, ↑ survival ✨</li>
          <li><strong>Tadalafil 1-2 mg/kg PO q24h</strong> — alternative, longer half-life, similar efficacy</li>
          <li>Treat underlying cause (heartworm, left heart disease, pulmonary disease)</li>
          <li>Exercise restriction</li>
          <li>ถ้า right CHF: furosemide + pimobendan + ACEI + spironolactone (ระวัง diuretic — preload sensitive)</li>
        </ul>

        <p><strong>Heartworm — Adulticide protocol (AHS recommended):</strong></p>
        <p><em>Pre-treatment phase:</em></p>
        <ul>
          <li>Stage disease (history, PE, rad, echo)</li>
          <li>Restrict exercise — minimize PTE risk ตอน worm death</li>
          <li><strong>Doxycycline 10 mg/kg PO q12h × 30 วัน</strong> — kill Wolbachia, ลด inflammation, ↑ adulticide efficacy</li>
          <li><strong>Macrocyclic lactone</strong> (ivermectin 6-12 µg/kg PO weekly หรือ moxidectin/imidacloprid topical monthly) × 60 วันขั้นต่ำ — kill migrating L3/L4, "soften" adults</li>
          <li>Optional: prednisone 0.5 mg/kg PO q12h × 1 wk → 0.5 mg/kg q24h × 1 wk → 0.5 mg/kg q48h × 2 wk ตอน melarsomine</li>
        </ul>
        <p><em>Adulticide phase (3-dose protocol — preferred):</em></p>
        <ul>
          <li>Day 60: <strong>Melarsomine 2.5 mg/kg deep IM</strong> ใน epaxial muscles (lumbar)</li>
          <li>Day 90: Melarsomine 2.5 mg/kg deep IM</li>
          <li>Day 91: Melarsomine 2.5 mg/kg deep IM (24h หลัง dose 2)</li>
          <li><strong>Strict cage rest × 6-8 wk</strong> หลังแต่ละ treatment เพื่อ ↓ PTE risk</li>
        </ul>
        <p><em>Post-treatment:</em></p>
        <ul>
          <li>Microfilaricide (ถ้าจำเป็น) — มัก covered โดย macrocyclic lactone อยู่แล้ว</li>
          <li><strong>Antigen test ที่ 9 เดือน</strong> หลัง melarsomine เพื่อ confirm cure</li>
          <li>Continue heartworm prevention monthly ตลอดชีวิต</li>
        </ul>

        <p><strong>"Slow-kill" / soft-kill (ถ้า melarsomine ไม่ available หรือ contraindicated):</strong></p>
        <ul>
          <li>Doxycycline + monthly macrocyclic lactone — eliminate worms ใน 18-24 เดือน</li>
          <li>ยังต้อง exercise restriction</li>
          <li>AHS ไม่แนะนำเป็น preferred แล้ว — ช้า = pulmonary damage นานกว่า</li>
        </ul>

        <p><strong>Caval syndrome — surgical emergency:</strong></p>
        <ul>
          <li>Mechanical worm removal ผ่าน right jugular venotomy ด้วย long alligator forceps</li>
          <li>IV fluids, blood transfusion ถ้าจำเป็น</li>
          <li>Mortality 30-40% แม้ผ่า</li>
        </ul>

        <p><strong>Cats with HWD:</strong></p>
        <ul>
          <li><strong>NO melarsomine</strong> — อันตรายเกินไป (worm death → fatal anaphylaxis-like reaction)</li>
          <li>Supportive care + corticosteroids สำหรับ inflammatory signs</li>
          <li>Monthly preventive (selamectin, milbemycin, moxidectin)</li>
          <li>Surgical removal ผ่าน jugular venotomy (referral) สำหรับ severe cases</li>
        </ul>

        <p><strong>Prevention (สำคัญที่สุด):</strong></p>
        <ul>
          <li>Year-round monthly heartworm preventive ใน endemic areas (TH = year-round)</li>
          <li>Ivermectin (Heartgard), milbemycin (Interceptor), moxidectin (Advantage Multi, ProHeart 6/12 injection)</li>
          <li>Annual antigen testing</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pulmonary thromboembolism (PTE)</strong> — main risk ตอน adulticide; signs 7-30 วันหลัง treatment</li>
          <li>Eosinophilic pneumonitis</li>
          <li>Pulmonary granulomas</li>
          <li>Glomerulonephritis → CKD</li>
          <li>Right CHF (cor pulmonale)</li>
          <li>Caval syndrome</li>
          <li>Sudden death (worm fragment embolus)</li>
          <li>Aberrant migration: brain, eye, systemic arteries</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Class 1-2 with proper treatment: <strong>excellent</strong>, normal lifespan</li>
          <li>Class 3 with severe PH: guarded; sildenafil + adulticide + cage rest improves outcome</li>
          <li>Caval syndrome: 30-50% mortality แม้ผ่า</li>
          <li>PH from non-reversible causes: median survival 3-6 เดือนถ้าไม่มี sildenafil; ~75% 1-yr survival ถ้ามี sildenafil</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 11 · Systemic Hypertension ---------- */
  {
    id: 'systemic-hypertension',
    titleEn: 'Systemic Arterial Hypertension',
    titleTh: 'Hypertension — ความดันสูง',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['hypertension', 'amlodipine', 'enalapril', 'telmisartan', 'CKD', 'hyperthyroidism', 'target organ damage', 'retinal detachment'],
    aliases: ['high blood pressure', 'ความดันสูง', 'BP'],
    source: 'Ch. 11 · pp. 211–220',
    sections: {
      definition: `
        <p>Systemic arterial blood pressure สูงเรื้อรัง</p>
        <p><strong>ACVIM 2018 BP categories (cat &amp; dog):</strong></p>
        <ul>
          <li><strong>Normotensive:</strong> &lt; 140 mmHg systolic — minimal risk</li>
          <li><strong>Prehypertensive:</strong> 140-159 — low risk</li>
          <li><strong>Hypertensive:</strong> 160-179 — moderate risk → consider treatment</li>
          <li><strong>Severely hypertensive:</strong> ≥ 180 — high risk → treat ✗</li>
        </ul>
        <p>Sighthounds + ~20 mmHg จาก normal range</p>
        <p>Confirm hypertension ด้วย <strong>≥ 2 measurements ในวันต่างกัน</strong> ยกเว้นมี target organ damage แล้ว</p>
      `,
      etiology: `
        <p><strong>เกือบจะ secondary เสมอในหมา/แมว (rare idiopathic):</strong></p>
        <p><strong>แมว — สาเหตุที่เจอบ่อย:</strong></p>
        <ul>
          <li><strong>Chronic kidney disease (CKD)</strong> — 25-65% ของ CKD cats hypertensive ✨</li>
          <li><strong>Hyperthyroidism</strong> — 10-25% hypertensive ตอน diagnosis</li>
          <li>Primary hyperaldosteronism (Conn's syndrome)</li>
          <li>Idiopathic (uncommon)</li>
        </ul>
        <p><strong>หมา — สาเหตุที่เจอบ่อย:</strong></p>
        <ul>
          <li><strong>Renal disease</strong> (โดยเฉพาะ glomerular dz / PLN) — 30-80%</li>
          <li><strong>Hyperadrenocorticism (Cushing's)</strong> — 30-80%</li>
          <li>Diabetes mellitus</li>
          <li>Pheochromocytoma</li>
          <li>Drugs: glucocorticoids, NSAIDs, phenylpropanolamine, ocular phenylephrine, EPO</li>
        </ul>
      `,
      pathophysiology: `
        <p>BP = CO × SVR</p>
        <ul>
          <li>↑ CO: hyperthyroidism, severe anemia (rare causes alone)</li>
          <li>↑ SVR: ส่วนใหญ่ — RAAS activation, sympathetic activation, catecholamine excess</li>
          <li>Volume expansion: Na/water retention (renal dz, hyperaldo, hyperadreno)</li>
        </ul>
        <p><strong>Target organ damage (TOD):</strong></p>
        <ul>
          <li><strong>Eye:</strong> retinal detachment ± hemorrhage, hyphema, papilledema, blindness (presenting sign บ่อยที่สุดในแมว!) ✨</li>
          <li><strong>Kidney:</strong> glomerulosclerosis, tubular fibrosis, ↑ proteinuria, ↑ progression ของ CKD</li>
          <li><strong>Heart:</strong> LV concentric hypertrophy, mild aortic dilation, soft murmur, gallop</li>
          <li><strong>Brain:</strong> hypertensive encephalopathy, cerebrovascular accident (stroke), seizures</li>
          <li><strong>Other:</strong> epistaxis</li>
        </ul>
      `,
      symptoms: `
        <p><strong>มัก SILENT จนกว่าจะมี target organ damage</strong></p>
        <p><strong>Presenting signs (เมื่อ symptomatic):</strong></p>
        <ul>
          <li><strong>Acute blindness</strong> ✨ — retinal detachment/hemorrhage; โดยเฉพาะแมว</li>
          <li>Disorientation, seizures, vocalization (hypertensive encephalopathy)</li>
          <li>Hindlimb weakness จาก CVA</li>
          <li>Epistaxis</li>
          <li>PU/PD (underlying CKD หรือ pressure diuresis)</li>
          <li>Mild systolic murmur, gallop sound (cat)</li>
        </ul>
        <p><strong>เจอจาก screening</strong> ใน: senior dogs/cats annually, CKD, hyperthyroid, Cushing's, DM patients</p>
      `,
      diagnosis: `
        <p><strong>BP measurement:</strong></p>
        <ul>
          <li>ห้องเงียบ, มีเจ้าของ, รอ 5-15 min ให้ acclimate</li>
          <li>Cuff width = 30-40% ของ limb circumference</li>
          <li>วัด 5-7 ครั้ง, ตัด high/low, average ที่เหลือ</li>
          <li>ถ้า variability &gt; 20%: เปลี่ยน cuff หรือเปลี่ยนขา</li>
          <li>White-coat effect ~20 mmHg ในแมว; ถ้าสูงเล็กน้อย recheck วันอื่น</li>
        </ul>
        <p><strong>Methods:</strong></p>
        <ul>
          <li><strong>Doppler:</strong> วัด systolic อย่างเดียว; gold standard ในแมว</li>
          <li><strong>Oscillometric / HDO:</strong> systolic + diastolic + mean; reliable ในหมา + แมวสงบ</li>
          <li>Direct arterial: gold standard แต่ invasive (research only ส่วนใหญ่)</li>
        </ul>
        <p><strong>Workup for cause + TOD:</strong></p>
        <ul>
          <li>CBC, biochem, UA + UPC ratio</li>
          <li>T4 (cats), Cushing's screen (dogs)</li>
          <li><strong>Fundoscopic exam สำคัญ</strong> — retinal detachment, hemorrhage, vessel tortuosity</li>
          <li>Echo — LV thickness, aortic dilation</li>
          <li>Imaging ถ้าสงสัย pheo (abdominal US ± MRI/CT)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>White-coat hypertension (transient stress)</li>
          <li>Pain, anxiety</li>
          <li>Recent feeding (mild)</li>
          <li>Drug-induced</li>
        </ul>
        <p>Sudden blindness DDx: SARDS (no hypertension), optic neuritis, glaucoma, retinal detachment จากสาเหตุอื่น</p>
      `,
      treatment: `
        <p><strong>Indications to treat:</strong></p>
        <ul>
          <li>SBP ≥ 160 mmHg confirmed 2+ visits</li>
          <li>BP ใดๆ ที่มี evidence of TOD (eyes, kidney, heart, brain)</li>
          <li>SBP ≥ 180 — treat ทันที</li>
        </ul>
        <p><strong>Goal:</strong> SBP &lt; 160 mmHg ideally, &lt; 140 ดีที่สุด (avoid &lt; 110 = hypotension)</p>

        <p><strong>First-line medications (ACVIM 2018):</strong></p>
        <ul>
          <li><strong>แมว:</strong>
            <ul>
              <li><strong>Amlodipine 0.625-1.25 mg/cat PO q24h</strong> (หรือ 0.1-0.2 mg/kg) — effective ที่สุดในแมว; ↑ ถึง 1.25 mg/cat หรือ q12h ถ้าจำเป็น</li>
              <li>Hyperthyroid cat ± hypertension: <strong>methimazole + atenolol</strong> 6.25-12.5 mg/cat PO q12h; เพิ่ม amlodipine ถ้า BP ยังสูง</li>
              <li>Proteinuric CKD cat: ACEI (benazepril 0.5 mg/kg PO q24h) หรือ ARB (telmisartan 1-3 mg/kg PO q24h) ± amlodipine</li>
            </ul>
          </li>
          <li><strong>หมา:</strong>
            <ul>
              <li><strong>ACEI first-line</strong>: enalapril 0.5 mg/kg PO q12h หรือ benazepril 0.5 mg/kg PO q12h (เลือกตัวนี้ใน renal dz — biliary excretion)</li>
              <li>เพิ่ม <strong>amlodipine 0.1-0.3 mg/kg PO q24h</strong> ถ้า ACEI อย่างเดียวไม่พอ (มักต้อง)</li>
              <li><strong>Telmisartan 1-3 mg/kg PO q24h</strong> — ARB alternative สำหรับ proteinuric dogs; BP reduction ดีกว่า ACEI ในบาง studies</li>
              <li>Pheochromocytoma: <strong>phenoxybenzamine</strong> (α-blocker) 0.25 mg/kg PO q8-12h ก่อน, แล้วเพิ่ม atenolol ถ้า tachycardia</li>
            </ul>
          </li>
        </ul>

        <p><strong>Hypertensive emergency (severe TOD):</strong></p>
        <ul>
          <li><strong>Amlodipine 0.625 mg/cat PO</strong> stat, recheck BP q2-4h; repeat ใน 4-6 h ถ้าจำเป็น</li>
          <li>Severe cases: hospitalize for IV therapy
            <ul>
              <li>Nitroprusside CRI 0.5-10 µg/kg/min (ต้องมี arterial line monitoring)</li>
              <li>Hydralazine 0.1-0.2 mg/kg IV/IM, repeat q2h</li>
              <li>Esmolol CRI 25-200 µg/kg/min สำหรับ tachycardia</li>
              <li>Acepromazine 0.05 mg/kg IV (mild sedation + α-block)</li>
            </ul>
          </li>
          <li><strong>Pheo crisis: phentolamine</strong> 0.02-0.1 mg/kg IV bolus → CRI</li>
          <li>Avoid: ACEI alone (slow onset), pure β-blocker ใน pheo</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Recheck BP ใน <strong>7-10 วัน</strong> หลังเริ่ม/เปลี่ยนยา</li>
          <li>เมื่อ stable: q1-3 เดือน</li>
          <li>BUN/Cr, electrolytes, UPC ที่ 1-2 wk แล้ว q3-6 เดือน</li>
          <li>Fundoscopy q3-6 เดือน ถ้าเคยมี retinal lesions</li>
          <li>Treat underlying disease aggressively (factor สำคัญที่สุด)</li>
        </ul>

        <p><strong>Diet:</strong> moderate salt restriction (≤ 0.22-0.25% Na DM); หลีกเลี่ยง high-salt treats</p>
      `,
      complications: `
        <p><strong>From hypertension:</strong></p>
        <ul>
          <li><strong>Permanent blindness</strong> — แม้ retina กลับมาติด vision อาจไม่กลับ</li>
          <li>CKD progression</li>
          <li>Stroke, hypertensive encephalopathy</li>
          <li>Aortic dissection (rare)</li>
          <li>Left CHF (rare)</li>
        </ul>
        <p><strong>From treatment:</strong></p>
        <ul>
          <li>Hypotension: lethargy, ataxia, anorexia → ↓ dose</li>
          <li>ACEI: ↑ BUN/Cr (โดยเฉพาะคู่ diuretic), hyperkalemia, GI</li>
          <li>Amlodipine: gingival hyperplasia (rare), peripheral edema</li>
          <li>Rebound hypertension ถ้าหยุด β-blocker กะทันหัน — taper ช้าๆ</li>
          <li>Diuretics อันตรายใน CKD — avoid as monotherapy สำหรับ HT</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>ผูกกับ underlying disease</li>
          <li>BP control ดี → ↓ progression of CKD, อาจ preserve vision ใน early TOD</li>
          <li>Hyperthyroid cats — BP มัก normalize ตอน thyroid treatment</li>
          <li>Hypertension persists แม้ treat underlying dz ใน 50%+ — ต้องกินยาตลอดชีวิต</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 12 · FATE ---------- */
  {
    id: 'feline-arterial-thromboembolism',
    titleEn: 'Feline Arterial Thromboembolism (FATE)',
    titleTh: 'FATE — saddle thrombus ในแมว',
    type: 'disease',
    system: 'cardiovascular',
    species: ['cat'],
    tags: ['FATE', 'ATE', 'saddle thrombus', 'thromboembolism', 'clopidogrel', 'enoxaparin', 'hindlimb paralysis', 'HCM'],
    aliases: ['saddle thrombus', 'arterial thromboembolism', 'แมวขาหลังอ่อนแรง', 'thromboembolism'],
    source: 'Ch. 12 · pp. 224–235',
    sections: {
      definition: `
        <p><strong>FATE / ATE</strong> — thrombus ก่อตัวในหัวใจ (มักใน LA ที่โต) แล้ว embolize ออกไปตาม systemic circulation</p>
        <ul>
          <li>ตำแหน่งที่ไปบ่อยสุด: distal aortic trifurcation = "<strong>saddle thrombus</strong>"</li>
          <li>เป็น emergency ที่ distressing ที่สุดใน feline medicine</li>
          <li>Mortality at presentation 30-50%; survivors ~50% recurrence</li>
        </ul>
      `,
      etiology: `
        <p><strong>Underlying conditions:</strong></p>
        <ul>
          <li><strong>Cardiomyopathy (~80-90%):</strong>
            <ul>
              <li>HCM เจอบ่อยสุด</li>
              <li>RCM, UCM, end-stage HCM</li>
            </ul>
          </li>
          <li>Hyperthyroidism (มี/ไม่มี HCM)</li>
          <li>Neoplasia — pulmonary carcinoma (tumor embolus จาก LA)</li>
          <li>Atrial septal defect (paradoxical embolus, rare)</li>
          <li>Idiopathic (rare)</li>
        </ul>
        <p>เพศผู้ over-represented (related to higher HCM prevalence)</p>
      `,
      pathophysiology: `
        <p><strong>Virchow's triad:</strong></p>
        <ul>
          <li><strong>Stasis:</strong> dilated left atrium → blood stagnation in auricle</li>
          <li><strong>Endothelial injury:</strong> stretched atrial wall, abnormal flow patterns</li>
          <li><strong>Hypercoagulability:</strong> ↑ platelet expression of P-selectin, ↑ fibrinogen, hyperhomocysteinemia ในบางตัว</li>
        </ul>
        <p><strong>Embolic event:</strong></p>
        <ul>
          <li>Thrombus หลุดออก → เข้า arterial circulation</li>
          <li>ไปติดที่ vessel branch points (ส่วนใหญ่ aortic trifurcation = ขาหลังสองข้าง)</li>
          <li>น้อยกว่า: ขาเดียว (femoral, brachial), mesenteric, renal, cerebral</li>
        </ul>
        <p><strong>Tissue ischemia + reperfusion injury:</strong></p>
        <ul>
          <li>Distal blood flow หยุด + vasoactive substances ออกมา → ↓ collateral flow</li>
          <li>เจ็บมากจาก ischemia + neuromyopathy</li>
          <li>Reperfusion → release ของ K, lactate, myoglobin → <strong>hyperkalemia, metabolic acidosis</strong> ✗</li>
          <li>AKI จาก myoglobinuria</li>
          <li>Cardiac arrhythmia จาก electrolyte shifts</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Classic "5 Ps" ของ acute limb ischemia:</strong></p>
        <ul>
          <li><strong>Pain</strong> — เจ็บมาก; ร้อง, ดิ้น</li>
          <li><strong>Pallor</strong> — pale paw pads, nail beds</li>
          <li><strong>Paresis / Plegia</strong> — paralysis ของ affected limb(s)</li>
          <li><strong>Pulselessness</strong> — absent femoral pulse</li>
          <li><strong>Poikilothermia</strong> — cold limbs (เทียบกับขาที่ไม่เป็น)</li>
        </ul>
        <p><strong>Other findings:</strong></p>
        <ul>
          <li>เจ็บมากเมื่อคล้า</li>
          <li>กล้ามเนื้อแข็ง ("wood-like")</li>
          <li>Tachypnea / dyspnea (concurrent CHF ใน 50-66%)</li>
          <li>Hyperthermia หรือ hypothermia</li>
          <li>Hyperexcitability หรือ depressed mentation</li>
          <li>หายใจอ้าปาก — severe stress</li>
          <li>Heart murmur (HCM) หรือ gallop sound — แต่ไม่มีใน 30-50% ของแมว HCM</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>วินิจฉัยจาก clinical signs + 5 Ps</strong> เป็นหลัก</p>
        <p><strong>Confirm + workup (หลัง stabilization):</strong></p>
        <ul>
          <li><strong>Echo:</strong>
            <ul>
              <li>LA enlargement (LA:Ao &gt; 2.0 typical)</li>
              <li>เห็น thrombus ใน LA / auricle (~30%)</li>
              <li>"<strong>Spontaneous echo contrast</strong>" / smoke = imminent thrombus</li>
              <li>Cardiomyopathy phenotype (HCM เจอบ่อยสุด)</li>
            </ul>
          </li>
          <li><strong>Lab:</strong>
            <ul>
              <li>↑ AST, CK มาก (muscle ischemia)</li>
              <li>↑ K+ (reperfusion → hyperkalemia)</li>
              <li>Metabolic acidosis</li>
              <li>Mild ↑ BUN/Cr (prerenal + AKI)</li>
              <li>Glucose ต่างกันมากระหว่าง affected vs unaffected limb (&gt; 20 mg/dL difference) ✨</li>
            </ul>
          </li>
          <li>Total T4 (rule out hyperthyroid)</li>
          <li>BP — มัก hypertensive ตอน presentation</li>
          <li>ECG — sinus tachycardia, บางทีมี VPCs</li>
          <li>Doppler — confirm absent flow distal to obstruction</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Trauma (ตกที่สูง, รถชน) — limb fracture, spinal injury</li>
          <li>Intervertebral disc disease (rare ในแมว)</li>
          <li>Diabetic neuropathy (plantigrade stance — chronic, bilateral, ไม่เจ็บ)</li>
          <li>Spinal trauma / tumor — UMN signs, bladder dysfunction</li>
          <li>Polyradiculoneuritis — symmetric, ไม่เจ็บ, lower motor signs</li>
          <li>Hypokalemic polymyopathy — generalized weakness, neck ventroflexion</li>
        </ul>
      `,
      treatment: `
        <p><strong>Approach to ATE — emergency triage</strong></p>
        <p><strong>Step 1: ตัดสินใจว่าจะรักษาไหม</strong></p>
        <ul>
          <li><strong>Poor prognostic indicators:</strong>
            <ul>
              <li>หลายขา</li>
              <li>Hypothermia (rectal &lt; 37.2°C / 99°F) ✗</li>
              <li>Concurrent CHF</li>
              <li>Severe hyperkalemia (&gt; 7 mEq/L)</li>
              <li>Bradycardia</li>
              <li>Severe acidosis (pH &lt; 7.1)</li>
            </ul>
          </li>
          <li>ถ้ามีหลายข้อ → คุย euthanasia กับเจ้าของตรงๆ</li>
          <li>Survival to discharge ถ้ารอด 24-72h แรก: ~30-45%</li>
        </ul>

        <p><strong>Step 2: Pain control (ทำก่อนเลย) ✨</strong></p>
        <ul>
          <li><strong>Methadone 0.2-0.4 mg/kg IV/IM q4-6h</strong> ← preferred, full mu agonist</li>
          <li>Buprenorphine 0.02-0.03 mg/kg IV/IM/OTM q6-8h — เบากว่า</li>
          <li>Fentanyl CRI 2-5 µg/kg/h หลัง loading</li>
          <li><strong>Avoid NSAIDs</strong> — renal compromise + GI ✗</li>
          <li>Reassess pain q2-4h; เจ็บมาก 24-72h</li>
        </ul>

        <p><strong>Step 3: Antithrombotic therapy</strong></p>
        <ul>
          <li><strong>Clopidogrel 75 mg PO loading dose × 1, แล้ว 18.75 mg/cat PO q24h</strong> ✨ — first-line; FATCAT trial: ↓ recurrence vs aspirin</li>
          <li><strong>Enoxaparin (LMWH) 1-1.5 mg/kg SC q12h</strong> — adjunct, โดยเฉพาะถ้าเห็น thrombus</li>
          <li>Aspirin 5 mg/cat PO q72h — older alternative, effective น้อยกว่า clopidogrel; ใช้เฉพาะถ้าไม่มี clopidogrel</li>
          <li><strong>Avoid thrombolytics (tPA, streptokinase)</strong> ✗ — high mortality จาก reperfusion injury, hyperkalemia, hemorrhage; ไม่แนะนำ</li>
        </ul>

        <p><strong>Step 4: Concurrent CHF management</strong></p>
        <ul>
          <li>Furosemide 1-2 mg/kg IV q1-4h จน RR ลด</li>
          <li>O2, thoracocentesis ถ้ามี pleural effusion</li>
          <li>หลีกเลี่ยง β-blockers ตอน acute (อาจ ↓ output)</li>
        </ul>

        <p><strong>Step 5: Supportive care</strong></p>
        <ul>
          <li>IV crystalloid: ระวัง (CHF risk) — มัก 0.5x maintenance ยกเว้น dehydrated</li>
          <li>Monitor K+: สูง → recheck q4-12h; treat ถ้า &gt; 7 (calcium gluconate, dextrose-insulin, fluids)</li>
          <li>อบอุ่นแมวเบาๆ (ไม่ใช้ hot pack บนขาเย็น — burn risk)</li>
          <li>Bladder management — แมวหลายตัวเสีย bladder function ชั่วคราว</li>
          <li>Nutrition — assisted feeding ถ้าไม่กิน</li>
          <li>Physical therapy หลัง pain controlled — passive range of motion</li>
        </ul>

        <p><strong>Step 6: Long-term management for survivors</strong></p>
        <ul>
          <li>Lifelong <strong>clopidogrel</strong> 18.75 mg/cat PO q24h</li>
          <li>± Enoxaparin 1 mg/kg SC q12h (compliance issue with daily injections)</li>
          <li>Aggressive cardiomyopathy management</li>
          <li>Recheck echo q3-6 เดือน</li>
          <li>Client education — recurrence เกิดได้ทุกเมื่อ</li>
        </ul>

        <p><strong>Prevention ในแมว HCM ที่มี LA enlargement:</strong></p>
        <ul>
          <li><strong>Clopidogrel 18.75 mg/cat PO q24h</strong> ในแมวที่ LA:Ao &gt; 2.0 หรือเห็น spontaneous echo contrast (FATCAT 2018)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hyperkalemia</strong> จาก reperfusion → arrhythmia, arrest</li>
          <li><strong>AKI</strong> จาก myoglobinuria + hypotension</li>
          <li><strong>Compartment syndrome</strong> — limb necrosis, autoamputation rarely</li>
          <li><strong>Limb ischemic neuromyopathy</strong> — แมวส่วนใหญ่มี permanent deficits</li>
          <li><strong>Recurrence</strong> — 25-50% ใน 6-12 เดือนแม้กิน antithrombotic</li>
          <li>CHF decompensation</li>
          <li>Sudden death จาก arrhythmia หรือ PE (rare)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Survival to discharge: <strong>30-50%</strong> overall</li>
          <li>Single limb: ดีกว่า (~60-70%)</li>
          <li>Bilateral: แย่กว่า (~30-40%)</li>
          <li>Concurrent CHF: ~25%</li>
          <li>Median survival ของ survivors: <strong>6-12 เดือน</strong> (มัก สั้นกว่า HCM อย่างเดียว)</li>
          <li>Long-term recovery ของ motor function: ~60-70%, มัก partial</li>
        </ul>
        <div class="callout">⚠️ <strong>Difficult conversation กับเจ้าของ:</strong> ATE มาแบบฉับพลัน, เจ็บ, prognosis ก็ guarded. คุยตรงไปตรงมาเรื่อง quality of life, ค่าใช้จ่าย, recurrence. Euthanasia เป็น humane option — ไม่ใช่ความล้มเหลว</div>
      `,
    },
  },


  /* ============================================================
     PART 6 — ENDOCRINE (Ch 46–50) — existing entry
  ============================================================ */

  /* ---------- Ch 49 · Diabetes Mellitus (Canine) ---------- */
  {
    id: 'diabetes-mellitus-canine',
    titleEn: 'Diabetes Mellitus (Canine)',
    titleTh: 'โรคเบาหวานในสุนัข',
    type: 'disease',
    system: 'endocrine',
    species: ['dog'],
    tags: ['DM', 'IDDM', 'insulin-dependent', 'PU/PD', 'polyuria', 'polydipsia', 'hyperglycemia', 'glycosuria'],
    aliases: ['diabetes', 'sugar', 'เบาหวาน'],
    source: 'Ch. 49 · pp. 806–838',
    sections: {
      definition: `
        <p>โรคเรื้อรังที่ร่างกายควบคุมระดับน้ำตาลในเลือดไม่ได้ เกิดจากภาวะ <strong>insulin deficiency</strong> หรือ <strong>insulin resistance</strong></p>
        <ul>
          <li>ในสุนัข ส่วนใหญ่เป็น <strong>insulin-dependent (IDDM)</strong> ตั้งแต่วินิจฉัยครั้งแรก</li>
          <li>อุบัติการณ์ ~1 ใน 100–500 ตัว</li>
          <li>พบบ่อยในสุนัขอายุ 7–10 ปี เพศเมียมากกว่าเพศผู้ ~2 เท่า</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>β-cell loss / immune-mediated destruction</strong> — สาเหตุหลัก</li>
          <li><strong>Chronic pancreatitis</strong> — ทำลาย β-cells ทีละน้อย</li>
          <li><strong>Insulin antagonism</strong> — Cushing's, diestrus (โปรเจสเตอโรนสูง), acromegaly, glucocorticoids, progestogens</li>
          <li><strong>Genetic predisposition:</strong> Samoyed, Mini Schnauzer, Mini Poodle, Bichon Frise, Australian Terrier, Keeshond, Cairn Terrier</li>
        </ul>
        <div class="callout">⚠️ สุนัขเพศเมียที่ไม่ทำหมัน — โปรเจสเตอโรนใน diestrus กระตุ้น GH ทำให้ดื้ออินซูลิน → แนะนำ <strong>spay</strong> ทันทีหลัง stabilize</div>
      `,
      pathophysiology: `
        <p>Insulin ไม่พอ → เซลล์ดูดน้ำตาลไม่ได้ → เลือดเข้มข้นน้ำตาลสูง</p>
        <ul>
          <li>เลือด glucose &gt; <strong>180–220 mg/dL</strong> (renal threshold) → glucose ในปัสสาวะ</li>
          <li>Glycosuria → osmotic diuresis → <strong>PU/PD</strong></li>
          <li>เซลล์ขาดพลังงาน → catabolism ของไขมัน + โปรตีน → น้ำหนักลด แม้กินจุ</li>
          <li>ลึกๆ อาจไปสู่ <strong>DKA</strong> (ketoacids สะสม) → ฉุกเฉิน</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Classic 4 P's:</strong></p>
        <ul>
          <li><strong>Polyuria</strong> · <strong>Polydipsia</strong> · <strong>Polyphagia</strong> · <strong>weight loss</strong> ทั้งที่กินดี</li>
          <li><strong>Cataracts</strong> — เกือบ 80% เป็นใน 1 ปีแรกหลังวินิจฉัย (ตาขุ่น 2 ข้าง เกิดเร็ว)</li>
          <li>ขนหยาบ ไม่เงา · ตับโต (hepatomegaly จาก hepatic lipidosis)</li>
          <li><strong>DKA signs:</strong> ซึม อาเจียน ขาดน้ำ หายใจหอบ (Kussmaul) ลมหายใจกลิ่นอะซีโตน → emergency</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Triad of diagnosis:</strong></p>
        <ul>
          <li>(1) Persistent <strong>fasting hyperglycemia</strong> &gt; 200 mg/dL</li>
          <li>(2) <strong>Glycosuria</strong></li>
          <li>(3) Compatible <strong>clinical signs</strong></li>
        </ul>
        <p><strong>Lab workup เพิ่มเติม:</strong></p>
        <ul>
          <li><strong>Fructosamine</strong> &gt; 350 µmol/L → ยืนยันภาวะ hyperglycemia ต่อเนื่อง 1–3 สัปดาห์ (แยกจาก stress hyperglycemia ในแมว)</li>
          <li><strong>CBC, biochem, UA + culture</strong> — UTI พบบ่อย</li>
          <li><strong>cPL / Spec cPL</strong> — ถ้าสงสัย pancreatitis</li>
          <li><strong>Cushing's screen</strong> (LDDST หรือ ACTH stim) — ถ้าควบคุม insulin ไม่ได้</li>
          <li><strong>Total T4</strong> — แมวที่สงสัย hyperthyroidism ร่วม</li>
          <li><strong>Blood gas + ketones (urine/blood)</strong> — ถ้าสงสัย DKA</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Stress hyperglycemia</strong> (โดยเฉพาะแมว — fructosamine ช่วยแยก)</li>
          <li><strong>Hyperadrenocorticism (Cushing's)</strong> — PU/PD ได้เหมือนกัน อาจร่วม</li>
          <li><strong>Acromegaly</strong> — ในแมวสูงอายุ</li>
          <li><strong>Drug-induced</strong> — glucocorticoids, progestogens</li>
          <li><strong>Pancreatitis</strong> — บางครั้งร่วมกัน</li>
          <li><strong>Renal glycosuria</strong> (Fanconi syndrome) — น้ำตาลในปัสสาวะแต่เลือดปกติ</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Insulin therapy</strong> (cornerstone)</p>
        <ul>
          <li>เริ่ม <strong>NPH</strong> หรือ <strong>Lente (Vetsulin/Caninsulin)</strong> ที่ <strong>0.25 IU/kg SC q12h</strong></li>
          <li>ปรับขนาดตาม glucose curve (ตรวจ glucose ทุก 2 ชม. × 12 ชม.) ทุก 1–2 สัปดาห์</li>
          <li>เป้าหมาย: nadir 100–150 mg/dL, peak &lt; 250–300 mg/dL</li>
        </ul>
        <p><strong>2. Diet</strong></p>
        <ul>
          <li>High-fiber, complex carbohydrate, ไขมันต่ำ–ปานกลาง</li>
          <li>ให้อาหาร <strong>ตรงเวลา</strong> ทุก 12 ชม. ก่อนฉีด insulin</li>
          <li>ปริมาณคงที่ทุกวัน</li>
        </ul>
        <p><strong>3. Spay (ในเพศเมียที่ไม่ทำหมัน)</strong> — ทำหลัง stabilize เพื่อตัดวงจรโปรเจสเตอโรน</p>
        <p><strong>4. Monitoring</strong></p>
        <ul>
          <li>Glucose curve เริ่มต้นทุก 1–2 สัปดาห์, เมื่อคงที่ → ทุก 2–4 เดือน</li>
          <li>Fructosamine ทุก 2–4 เดือน เป็นภาพรวมระยะยาว</li>
          <li>เจ้าของบันทึก: น้ำดื่ม, ปัสสาวะ, น้ำหนัก, อาการ</li>
          <li>Continuous glucose monitor (FreeStyle Libre) — แม่นกว่าและเครียดน้อยกว่า</li>
        </ul>
        <p><strong>5. DKA management (emergency)</strong></p>
        <ul>
          <li>IV fluids (0.9% NaCl) แก้ภาวะขาดน้ำก่อน</li>
          <li>Regular insulin CRI หรือ IM low-dose</li>
          <li>แก้ K, P (เติมเมื่อ insulin เริ่มทำงาน)</li>
          <li>หา + รักษาสาเหตุร่วม (pancreatitis, infection)</li>
        </ul>
      `,
      complications: `
        <p><strong>Acute complications:</strong></p>
        <ul>
          <li><strong>DKA</strong> — fatal ถ้าไม่รักษา</li>
          <li><strong>Hypoglycemia</strong> จาก insulin overdose — ชัก, อ่อนแรง, อาจตาย</li>
        </ul>
        <p><strong>Chronic complications:</strong></p>
        <ul>
          <li><strong>Diabetic cataracts</strong> → ตาบอด (~80% ใน 1 ปี) — ส่ง ophtho ทำผ่าตัด phacoemulsification ได้ ผลดี</li>
          <li><strong>UTI</strong> ซ้ำๆ — ตรวจ urine culture เป็นระยะ</li>
          <li><strong>Pancreatitis</strong> reactivation</li>
          <li><strong>Peripheral neuropathy</strong> (พบในแมวมากกว่า — plantigrade stance)</li>
        </ul>
        <p><strong>Prognosis</strong></p>
        <ul>
          <li>Median survival <strong>2–5 ปี</strong> หลังวินิจฉัย ขึ้นกับ:
            <ul>
              <li>ความใส่ใจของเจ้าของ (insulin compliance, monitoring)</li>
              <li>การควบคุมโรคร่วม</li>
              <li>อายุที่วินิจฉัย</li>
            </ul>
          </li>
          <li>หลายตัวมีคุณภาพชีวิตดี ถ้าจัดการเป็นทีม</li>
        </ul>
        <div class="callout">💡 <strong>Client communication:</strong> เน้นว่าเป็นโรคควบคุมได้ ไม่ใช่โรคติดต่อ ต้องการความสม่ำเสมอ ฉีดยาทุก 12 ชม. ให้อาหารตรงเวลา</div>
      `,
    },
  },

  /* ---------- More entries to come ---------- */

];
