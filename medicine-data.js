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
     PART 2 — RESPIRATORY (Ch 13–25)
  ============================================================ */

  /* ---------- Ch 13/16/19 · Clinical Manifestations ---------- */
  {
    id: 'resp-clinical-manifestations',
    titleEn: 'Clinical Manifestations of Respiratory Disease',
    titleTh: 'อาการของโรคระบบทางเดินหายใจ',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['cough', 'dyspnea', 'sneeze', 'stridor', 'stertor', 'nasal discharge', 'epistaxis', 'wheeze', 'crackle'],
    aliases: ['respiratory signs', 'อาการหายใจ', 'อาการไอ'],
    source: 'Ch. 13, 16, 19 · pp. 240–300',
    sections: {
      definition: `
        <p>อาการที่บ่งบอกความผิดปกติของ <strong>upper airway</strong> (nasal, pharynx, larynx, trachea) หรือ <strong>lower airway / parenchyma</strong> (bronchi, alveoli, pleura) — ใช้ localize lesion ก่อน workup</p>
      `,
      etiology: `
        <p>ดู entries เฉพาะของแต่ละโรค — แบ่งคร่าวๆ:</p>
        <ul>
          <li><strong>Upper airway:</strong> URI, rhinosinusitis, polyps, neoplasia, foreign body, laryngeal paralysis, BOAS, tracheal collapse</li>
          <li><strong>Lower airway:</strong> CIRDC, bronchitis, asthma, parasites</li>
          <li><strong>Parenchyma:</strong> pneumonia, pulmonary edema, fibrosis, neoplasia, PTE</li>
          <li><strong>Pleural:</strong> effusion, pneumothorax</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Localization clues จาก breathing pattern:</strong></p>
        <ul>
          <li><strong>Inspiratory dyspnea + stridor</strong> → upper airway obstruction (laryngeal paralysis, BOAS, foreign body)</li>
          <li><strong>Expiratory dyspnea + wheeze</strong> → lower airway obstruction (asthma, bronchitis, tracheal collapse intrathoracic)</li>
          <li><strong>Mixed / restrictive (rapid shallow)</strong> → parenchymal disease หรือ pleural effusion</li>
          <li><strong>Paradoxical (chest in, abdomen out on inspiration)</strong> → severe distress, fatigue, pleural disease</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Nasal signs:</strong></p>
        <ul>
          <li><strong>Sneezing</strong> — acute = irritation/FB; chronic = rhinitis, neoplasia, fungal</li>
          <li><strong>Reverse sneezing</strong> — paroxysmal inspiratory snorting (nasopharyngeal irritation; benign)</li>
          <li><strong>Nasal discharge:</strong>
            <ul>
              <li><em>Serous</em> = early viral, allergic</li>
              <li><em>Mucopurulent</em> = secondary bacterial infection (most diseases)</li>
              <li><em>Hemorrhagic / epistaxis</em> = trauma, neoplasia, fungal, coagulopathy, hypertension</li>
              <li>Unilateral → think FB, neoplasia, fungal, oronasal fistula</li>
              <li>Bilateral → rhinitis, systemic disease</li>
            </ul>
          </li>
          <li><strong>Stertor</strong> — snoring sound, low-pitched (nasopharynx, soft palate)</li>
          <li>Facial deformity → aggressive dz (neoplasia, advanced fungal)</li>
        </ul>
        <p><strong>Laryngeal/upper airway signs:</strong></p>
        <ul>
          <li><strong>Stridor</strong> — high-pitched inspiratory noise (laryngeal paralysis, mass)</li>
          <li>Voice change (bark, meow)</li>
          <li>Gagging, regurgitation when eating</li>
          <li>Acute respiratory distress (excitement, heat exacerbates)</li>
        </ul>
        <p><strong>Lower airway/parenchyma signs:</strong></p>
        <ul>
          <li><strong>Cough:</strong>
            <ul>
              <li><em>Productive moist soft</em> → cardiogenic edema, pneumonia</li>
              <li><em>Dry honking</em> → tracheal collapse, chronic bronchitis</li>
              <li><em>Paroxysmal terminal retch</em> → kennel cough</li>
              <li><em>Cat coughing</em> = uncommon; almost always bronchitis/asthma จนพิสูจน์ตรงข้าม ✨</li>
            </ul>
          </li>
          <li><strong>Tachypnea / dyspnea</strong> — RR &gt; 30 at rest abnormal</li>
          <li><strong>Wheeze</strong> — expiratory, lower airway obstruction (asthma)</li>
          <li><strong>Crackles</strong> — inspiratory, fluid/exudate (edema, pneumonia, fibrosis)</li>
          <li>Cyanosis, exercise intolerance</li>
          <li>Hemoptysis — uncommon; PTE, neoplasia, severe pneumonia</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Physical exam essentials:</strong></p>
        <ul>
          <li>Nasal airflow test (cotton wisp, mirror fog)</li>
          <li>Retropulsion of eyes (orbital mass)</li>
          <li>Oral exam (palate, tooth roots, oronasal fistula)</li>
          <li>Auscultation — entire lung field both sides; trachea</li>
          <li>Percussion — pleural effusion (dull), pneumothorax (hyperresonant)</li>
          <li>Submandibular + cervical lymph node palpation</li>
        </ul>
        <p><strong>Workup tier:</strong></p>
        <ul>
          <li><strong>Tier 1:</strong> CBC, biochem, T4 (cat), heartworm test, thoracic rad (3 views)</li>
          <li><strong>Tier 2:</strong> nasal/skull rad, dental rad, fecal Baermann, BAL/tracheal wash</li>
          <li><strong>Tier 3:</strong> CT, rhinoscopy, bronchoscopy, biopsy</li>
        </ul>
      `,
      differential: `<p>กว้างมาก — ดู entries เฉพาะตาม system + presenting sign</p>`,
      treatment: `<p>Treat underlying disease + supportive (O2, hydration, anti-inflammatory เลือกตามสาเหตุ)</p>`,
      complications: `
        <ul>
          <li>Acute respiratory distress / arrest</li>
          <li>Aspiration pneumonia</li>
          <li>Cor pulmonale จาก chronic hypoxia</li>
          <li>Sleep-disordered breathing (BOAS)</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 14/17/20 · Diagnostic Tests ---------- */
  {
    id: 'resp-diagnostic-tests',
    titleEn: 'Respiratory Diagnostic Tests',
    titleTh: 'การตรวจวินิจฉัยระบบหายใจ',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['rhinoscopy', 'bronchoscopy', 'tracheal wash', 'BAL', 'thoracic radiograph', 'pulse oximetry', 'blood gas', 'CT'],
    aliases: ['respiratory workup', 'การตรวจระบบหายใจ'],
    source: 'Ch. 14, 17, 20 · pp. 254–319',
    sections: {
      definition: `
        <p>เครื่องมือ workup โรคระบบหายใจ — เลือกตามตำแหน่งของโรค (upper vs lower) และความรุนแรง</p>
      `,
      etiology: `<p>ใช้ใน workup ของ cough, dyspnea, nasal discharge, abnormal breathing</p>`,
      pathophysiology: `<p>ดู entries เฉพาะ</p>`,
      symptoms: `<p>ดู Clinical Manifestations entry</p>`,
      diagnosis: `
        <p><strong>1. Imaging</strong></p>
        <ul>
          <li><strong>Thoracic radiographs (3 views — left + right lat + DV/VD):</strong>
            <ul>
              <li>VHS, chamber size (rule out cardiac)</li>
              <li>Lung patterns: alveolar (air bronchogram), interstitial, bronchial, vascular</li>
              <li>Pleural effusion: ventral fluid line, fissure lines</li>
              <li>Pneumothorax: lung edge retracted, hyperlucent</li>
              <li>Mediastinal mass, lymph nodes</li>
            </ul>
          </li>
          <li><strong>Skull/nasal rad:</strong> turbinate destruction (neoplasia, fungal), tooth root abscess; ค่อนข้าง insensitive ในระยะแรก</li>
          <li><strong>Cervical rad:</strong> tracheal collapse (lateral inspiration + expiration); hypoplastic trachea</li>
          <li><strong>Fluoroscopy:</strong> dynamic airway collapse — gold standard for tracheal collapse + bronchomalacia</li>
          <li><strong>CT:</strong> superior for nasal cavity, lungs, mediastinum; preferred ก่อน rhinoscopy/bronchoscopy</li>
          <li><strong>Lung ultrasound (vetBLUE):</strong> B-lines = interstitial syndrome (edema, pneumonia); pleural effusion screening</li>
        </ul>

        <p><strong>2. Endoscopy</strong></p>
        <ul>
          <li><strong>Rhinoscopy:</strong> direct visualization of nasal cavity + nasopharynx; biopsy under direct view</li>
          <li><strong>Laryngoscopy:</strong> assess arytenoid motion (laryngeal paralysis); soft palate length (BOAS); doxapram 1.1 mg/kg IV stimulate breathing if too anesthetized</li>
          <li><strong>Bronchoscopy:</strong> visualize trachea, mainstem + lobar bronchi; collect BAL</li>
        </ul>

        <p><strong>3. Airway sampling</strong></p>
        <ul>
          <li><strong>Tracheal wash (TW):</strong>
            <ul>
              <li>Transtracheal (awake/sedated, through cricothyroid ligament) หรือ endotracheal (anesthetized)</li>
              <li>Inject 3-5 mL sterile saline × multiple boluses, aspirate</li>
              <li>Cytology + culture (aerobic, ± Mycoplasma, ± fungal)</li>
              <li>Useful for diffuse airway disease, large airway pathogens</li>
            </ul>
          </li>
          <li><strong>Bronchoalveolar lavage (BAL):</strong>
            <ul>
              <li>Bronchoscopic หรือ blind technique; 5-25 mL saline per aliquot, 2-3 aliquots</li>
              <li>Better for distal airway / parenchymal disease</li>
              <li>เสี่ยง bronchospasm ในแมว — pretreat with terbutaline 0.01 mg/kg SC + albuterol inhaled</li>
            </ul>
          </li>
          <li><strong>Nasal flush / brush:</strong> rhinoscopic-guided sampling for cytology + biopsy</li>
        </ul>

        <p><strong>4. Cytology + Culture interpretation</strong></p>
        <ul>
          <li>Normal TW: respiratory epithelial cells + few macrophages</li>
          <li><strong>Septic neutrophilic</strong> (intracellular bacteria) → bacterial infection — start broad-spectrum antibiotics + adjust per culture</li>
          <li><strong>Eosinophilic</strong> &gt; 20% → allergic, parasitic, neoplastic, fungal</li>
          <li><strong>Lymphocytic</strong> → chronic, viral, neoplastic</li>
          <li><strong>Mixed inflammation</strong> → bronchitis, chronic disease</li>
          <li>Oropharyngeal contamination: squamous cells + Simonsiella → discard</li>
          <li>Look for: parasitic larvae (Aelurostrongylus, Crenosoma), fungal organisms, tachyzoites</li>
        </ul>

        <p><strong>5. Blood gas analysis (arterial)</strong></p>
        <ul>
          <li><strong>PaO2 (room air):</strong> normal &gt; 80 mmHg; &lt; 60 mmHg = severe hypoxemia → O2 support</li>
          <li><strong>PaCO2:</strong> 35-45 normal; &gt; 50 = hypoventilation / fatigue</li>
          <li><strong>A-a gradient:</strong> normal &lt; 15 mmHg ในอากาศ; widened = V/Q mismatch / diffusion problem</li>
          <li>Hyperventilation/anxiety: ↓ PaCO2, ↑ pH</li>
          <li>Severe pulmonary disease: ↓ PaO2, normal/↓ PaCO2 ตอนแรก, ↑ PaCO2 เมื่อ fatigue</li>
        </ul>

        <p><strong>6. Pulse oximetry (SpO2)</strong></p>
        <ul>
          <li>Probe ที่ลิ้น, ริมฝีปาก, vulva, ear, prepuce</li>
          <li>Normal &gt; 95%</li>
          <li>&lt; 90% = significant hypoxemia (PaO2 ~60 mmHg)</li>
          <li>Limitations: motion artifact, vasoconstriction, anemia, methemoglobinemia, dark pigment, jaundice</li>
        </ul>

        <p><strong>7. Other tests</strong></p>
        <ul>
          <li>Heartworm antigen + microfilaria</li>
          <li>Fecal Baermann (lungworms — Aelurostrongylus, Crenosoma, Oslerus)</li>
          <li>Cryptococcal antigen (LCAT) — serum or urine</li>
          <li>Aspergillus antigen (galactomannan), serology</li>
          <li>Coag panel ใน epistaxis</li>
          <li>BP (epistaxis ใน hypertension)</li>
          <li>FeLV/FIV (cat URI workup)</li>
        </ul>
      `,
      differential: `<p>เลือก test ตาม presenting sign + suspected localization</p>`,
      treatment: `<p>Diagnostic tools — ไม่มี treatment</p>`,
      complications: `
        <p><strong>Procedure-specific risks:</strong></p>
        <ul>
          <li>TW: subcutaneous emphysema, tracheal laceration, bronchospasm</li>
          <li>BAL: hypoxemia (oxygen support during + after), bronchospasm (cats!)</li>
          <li>Rhinoscopy: hemorrhage (rarely severe; cold saline + epi 1:100,000 lavage)</li>
          <li>Anesthesia risk in dyspneic patients — stabilize first</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 15 · Feline Upper Respiratory Infection ---------- */
  {
    id: 'feline-uri',
    titleEn: 'Feline Upper Respiratory Infection (URI)',
    titleTh: 'หวัดแมว — FHV / FCV / Chlamydia',
    type: 'disease',
    system: 'respiratory',
    species: ['cat'],
    tags: ['FHV', 'FCV', 'feline herpes', 'feline calicivirus', 'Chlamydia', 'Mycoplasma', 'Bordetella', 'rhinotracheitis', 'famciclovir'],
    aliases: ['cat flu', 'หวัดแมว', 'feline rhinotracheitis', 'snuffles'],
    source: 'Ch. 15 · pp. 257–264',
    sections: {
      definition: `
        <p>โรคติดเชื้อที่ upper respiratory tract ของแมว — เจอบ่อยมากในแมวลูก, shelter cats, multi-cat households</p>
        <ul>
          <li><strong>FHV-1 + FCV ~90%</strong> ของเคส</li>
          <li>มัก self-limiting ใน 7-14 วัน แต่ <em>chronic carrier</em> เป็น issue</li>
        </ul>
      `,
      etiology: `
        <p><strong>Pathogens หลัก:</strong></p>
        <ul>
          <li><strong>Feline herpesvirus-1 (FHV-1):</strong> rhinotracheitis virus; latency in trigeminal ganglia → recurrence ตอน stress; severe rhinitis, conjunctivitis, corneal ulcers (dendritic) ✗</li>
          <li><strong>Feline calicivirus (FCV):</strong> RNA virus; oral ulcers (lingual!), polyarthritis ในลูกแมว, rare virulent systemic strain (VS-FCV) → fatal vasculitis</li>
          <li><strong>Chlamydia felis:</strong> conjunctivitis เด่น, mild URI</li>
          <li><strong>Mycoplasma felis:</strong> conjunctivitis, sometimes URI</li>
          <li><strong>Bordetella bronchiseptica:</strong> rare; cough, pneumonia ในลูกแมว</li>
        </ul>
        <p><strong>Risk factors:</strong> young, stressed, immunosuppressed, FeLV/FIV+, multi-cat environment, แม่ carrier</p>
      `,
      pathophysiology: `
        <ul>
          <li>Direct contact + fomites (โดยเฉพาะ FHV — labile in environment, FCV — stable นานกว่า)</li>
          <li>Viral cytolysis → mucosal damage → secondary bacterial infection</li>
          <li>FHV: turbinate destruction → permanent damage → predispose to chronic rhinosinusitis ตลอดชีวิต ✗</li>
          <li>Carrier state: FHV intermittent (~40-50% post-recovery); FCV continuous shedding 30 วัน-ตลอดชีวิต</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Acute URI:</strong></p>
        <ul>
          <li>Sneezing (เด่น), serous → mucopurulent nasal discharge</li>
          <li>Conjunctivitis, ocular discharge, blepharospasm</li>
          <li>Fever, anorexia, lethargy</li>
          <li>Hypersalivation</li>
          <li>Dehydration (ลูกแมว — กินไม่ได้เพราะ smell + oral pain)</li>
        </ul>
        <p><strong>FHV-specific:</strong></p>
        <ul>
          <li>Severe rhinitis, ocular involvement</li>
          <li><strong>Corneal ulcers (dendritic)</strong> ✨ — pathognomonic-like</li>
          <li>Symblepharon (conjunctival adhesion) ในลูกแมว</li>
          <li>Abortion, neonatal death</li>
        </ul>
        <p><strong>FCV-specific:</strong></p>
        <ul>
          <li><strong>Oral ulcers (tongue, hard palate)</strong> ✨ — drooling, painful eating</li>
          <li>Polyarthritis (limping kittens)</li>
          <li>Interstitial pneumonia (severe strains)</li>
          <li>VS-FCV: facial/limb edema, jaundice, high mortality (rare outbreaks)</li>
        </ul>
        <p><strong>Chlamydia:</strong> conjunctivitis เด่น (uni → bilateral), chemosis, mild URI</p>
        <p><strong>Chronic phase:</strong> persistent mucopurulent nasal discharge, sneezing — ดู Feline Chronic Rhinosinusitis entry</p>
      `,
      diagnosis: `
        <p><strong>Mostly clinical</strong> — history + signalment + presentation</p>
        <p><strong>Specific testing เมื่อ:</strong></p>
        <ul>
          <li>Severe / persistent disease</li>
          <li>Cattery / shelter outbreaks (เลือก vaccination strategy)</li>
          <li>Atypical signs</li>
        </ul>
        <p><strong>Tests:</strong></p>
        <ul>
          <li><strong>PCR panel</strong> (oropharyngeal/conjunctival/nasal swab) — detects FHV, FCV, Chlamydia, Mycoplasma, Bordetella; most sensitive</li>
          <li>False positive: post-vaccination shedding (modified-live), asymptomatic carrier</li>
          <li>Conjunctival cytology — Chlamydia inclusion bodies (rare to see)</li>
          <li>Bacterial culture — limited utility (normal flora confound)</li>
          <li>FeLV/FIV — workup recurrent/severe disease</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Foreign body — usually unilateral, acute</li>
          <li>Nasopharyngeal polyp — young cats, Bulla/middle ear involvement</li>
          <li>Cryptococcosis — granulomatous, facial swelling, LCAT+</li>
          <li>Nasal lymphoma — older cats</li>
          <li>Tooth root abscess — unilateral</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute uncomplicated URI — supportive care มัก enough</strong></p>
        <ul>
          <li>Hydration: SC fluids, IV ถ้าจำเป็น</li>
          <li>Nutritional support — appetite stimulants (mirtazapine 1.88 mg/cat PO/transdermal q24-48h), assisted feeding, esophagostomy tube ถ้านาน &gt; 3 วัน</li>
          <li>เช็ดน้ำมูก/ขี้ตา ด้วยผ้าชุบน้ำอุ่น</li>
          <li><strong>Steam therapy</strong> — เอาแมวเข้าห้องน้ำ + เปิดน้ำร้อน 15-20 min × 2-3/วัน เพื่อ clear secretions</li>
          <li>Topical decongestant (0.25% phenylephrine, 0.025% oxymetazoline) 1 drop/nostril q24h × max 3 วัน (avoid rebound)</li>
        </ul>

        <p><strong>Antibiotics — ใช้เมื่อ:</strong></p>
        <ul>
          <li>Mucopurulent discharge + fever, lethargy, anorexia (signs ของ secondary bacterial infection)</li>
          <li>Suspected Chlamydia/Mycoplasma (conjunctivitis prominent)</li>
        </ul>
        <ul>
          <li><strong>Doxycycline 5 mg/kg PO q12h</strong> หรือ 10 mg/kg q24h × 14-42 วัน — first-line (covers Chlamydia, Mycoplasma, Bordetella) ✓
            <ul>
              <li>ตามด้วยน้ำหรืออาหาร 6-10 mL ทุกครั้ง! เลี่ยง esophagitis ✗</li>
            </ul>
          </li>
          <li>Amoxicillin 22 mg/kg PO q12h × 7-14 วัน — alternative</li>
          <li>Azithromycin 5-10 mg/kg PO × 1 day, then q72h — tough-to-medicate cats</li>
        </ul>

        <p><strong>FHV-specific antiviral:</strong></p>
        <ul>
          <li><strong>Famciclovir 90 mg/kg PO q8-12h × 2-3 wk</strong> ✨ — effective สำหรับ severe/recurrent FHV; ↓ clinical signs significantly</li>
          <li>L-lysine 250-500 mg PO q12h — controversial, evidence weak</li>
          <li>Topical antivirals สำหรับ corneal ulcers: idoxuridine, trifluridine, cidofovir 0.5% q4-6h</li>
          <li>Topical antibiotic (terramycin) for secondary infection</li>
          <li><strong>NO topical/systemic corticosteroids</strong> ✗ — prolong viral shedding, worsen ulcers</li>
        </ul>

        <p><strong>Chlamydia treatment:</strong></p>
        <ul>
          <li>Doxycycline 5 mg/kg PO q12h × <strong>42 วัน minimum</strong> (ทุกตัวในบ้าน)</li>
          <li>Topical chloramphenicol/tetracycline ophthalmic q6-8h × 14 วันหลัง signs หาย</li>
        </ul>

        <p><strong>VS-FCV outbreak:</strong> isolation, intensive supportive care, ไม่มี specific therapy; mortality 30-50%</p>
      `,
      complications: `
        <ul>
          <li><strong>Chronic rhinosinusitis</strong> — most common sequela of FHV; permanent turbinate damage</li>
          <li>Corneal sequestrum, symblepharon (FHV)</li>
          <li>Polyarthritis (FCV — lameness in kittens, self-resolving)</li>
          <li>Pneumonia (Bordetella, Mycoplasma, severe FCV)</li>
          <li>Aspiration pneumonia (severely anorexic with assisted feeding)</li>
          <li>Carrier state (lifelong shedding, infection of susceptible cats)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Acute uncomplicated: <strong>excellent</strong> with supportive care</li>
          <li>Recurrent FHV: ดีถ้า famciclovir; chronic carrier — manage stress</li>
          <li>VS-FCV: guarded</li>
          <li>Chronic rhinosinusitis post-FHV: lifelong management</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Core vaccination: FVRCP (FHV + FCV + panleukopenia) เริ่ม 6-8 wk → q3-4 wk จน 16 wk → booster 1 ปี → q3 ปี</li>
          <li>Vaccines ลด severity แต่ไม่ป้องกัน infection 100%</li>
          <li>Chlamydia vaccine — non-core, ใช้ใน multi-cat/shelter setting</li>
          <li>Indoor lifestyle, isolate new arrivals 2 wk</li>
          <li>Stress reduction (Feliway, hiding spots, predictable routine)</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 15 · Feline Chronic Rhinosinusitis ---------- */
  {
    id: 'feline-chronic-rhinosinusitis',
    titleEn: 'Feline Chronic Rhinosinusitis (CRS)',
    titleTh: 'แมวคัดจมูกเรื้อรัง',
    type: 'disease',
    system: 'respiratory',
    species: ['cat'],
    tags: ['chronic rhinitis', 'CRS', 'turbinate', 'FHV sequela', 'snuffler'],
    aliases: ['chronic snuffler', 'แมวจาม', 'แมวน้ำมูก', 'lymphoplasmacytic rhinitis'],
    source: 'Ch. 15 · pp. 264–266',
    sections: {
      definition: `
        <p>การอักเสบเรื้อรังของ nasal cavity ในแมว — ส่วนใหญ่ <strong>post-viral (FHV) sequela</strong> ที่ damage turbinates ถาวร</p>
        <ul>
          <li>"<strong>Chronic snuffler</strong>" — เจอบ่อยมากใน Thailand; สลับ flare-up + remission ตลอดชีวิต</li>
          <li>ไม่หายขาด — เน้น <em>manage</em> ไม่ใช่ <em>cure</em></li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>FHV-1 sequela</strong> — most common; turbinate destruction → predispose to bacterial colonization + ↓ mucociliary clearance</li>
          <li>Persistent FHV reactivation</li>
          <li>Secondary bacterial colonization (Pasteurella, Streptococcus, Pseudomonas, anaerobes)</li>
          <li>Mycoplasma — possible role</li>
          <li>Idiopathic lymphoplasmacytic rhinitis</li>
          <li>Underlying disease: dental, FB (rare chronic), early neoplasia</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Damaged turbinates + epithelium → impaired mucociliary clearance + abnormal airflow</li>
          <li>Bacterial overgrowth in altered environment</li>
          <li>Chronic inflammation + secondary bacterial infections cycle</li>
          <li>Some cats develop polyps, mucoceles</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Chronic intermittent nasal discharge (mucopurulent, sometimes hemorrhagic streaks)</li>
          <li>Sneezing (มัก paroxysmal)</li>
          <li>Stertor (snoring)</li>
          <li>Mouth breathing เมื่อ nasal congestion มาก</li>
          <li>Decreased smell → ↓ appetite</li>
          <li>มัก healthy systemically (ต่างจาก neoplasia)</li>
          <li>Flare-up ตอน stress, weather change</li>
          <li>Bilateral &gt; unilateral (vs neoplasia/FB ที่มัก unilateral)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnosis of exclusion</strong> — ต้อง rule out treatable causes</p>
        <ul>
          <li><strong>CBC, biochem, FeLV/FIV, T4</strong></li>
          <li><strong>Cryptococcal antigen (LCAT)</strong> — essential ถ้า facial swelling หรือ persistent unilateral</li>
          <li><strong>Skull/dental rad หรือ CT</strong> — turbinate lysis, mass effect, tooth root abscess</li>
            <ul>
              <li>CRS: turbinate destruction บ้าง แต่ไม่ aggressive (ต่าง neoplasia)</li>
              <li>Neoplasia: aggressive lysis, bone destruction, mass</li>
            </ul>
          <li><strong>Rhinoscopy:</strong> turbinate atrophy, mucopurulent discharge, ± mass; biopsy random multiple sites</li>
          <li><strong>Nasal biopsy histopath:</strong> lymphoplasmacytic ± neutrophilic inflammation; rule out neoplasia/cryptococcosis</li>
          <li>Bacterial culture (deep nasal swab via rhinoscope) — guide antibiotic เมื่อ resistance suspected</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Cryptococcosis</strong> ✗ — ต้อง LCAT ทุกเคส (treatable!)</li>
          <li>Nasal lymphoma / carcinoma — older cats, progressive, facial deformity</li>
          <li>Foreign body — acute, unilateral</li>
          <li>Tooth root abscess — unilateral, dental disease evident</li>
          <li>Nasopharyngeal polyp — young cats, otic involvement</li>
          <li>Nasopharyngeal stenosis</li>
        </ul>
      `,
      treatment: `
        <p><strong>Realistic goal:</strong> manage flare-ups + improve quality of life — ไม่ใช่ cure</p>

        <p><strong>Antibiotics during flare-up:</strong></p>
        <ul>
          <li><strong>Doxycycline 5 mg/kg PO q12h × 4-6 wk</strong> — first choice (broad + Mycoplasma coverage; remember to follow with water!) ✓</li>
          <li>Amoxicillin-clavulanate 12.5 mg/kg PO q12h — alternative</li>
          <li>Azithromycin 5-10 mg/kg PO × 1 day, then q72h × 4-6 wk — pulse therapy</li>
          <li>Marbofloxacin หรือ pradofloxacin — refractory cases (culture-guided)</li>
        </ul>

        <p><strong>Antiviral (suspected FHV component):</strong></p>
        <ul>
          <li>Famciclovir 90 mg/kg PO q8-12h × 2-3 wk — ลด FHV reactivation</li>
          <li>L-lysine 500 mg PO q12h (controversial)</li>
        </ul>

        <p><strong>Anti-inflammatory:</strong></p>
        <ul>
          <li>Saline nasal irrigation (sterile saline drops, 0.9%) — moisturize + clear secretions</li>
          <li>Topical decongestant short-term flare</li>
          <li><strong>Glucocorticoids</strong> — controversial; ใช้ low-dose (prednisolone 0.5 mg/kg PO q24h) ในเคส lymphoplasmacytic refractory; สามารถ reactivate FHV ✗</li>
          <li>NSAIDs — caution ในแมว (renal); meloxicam 0.05 mg/kg PO q24h short course</li>
        </ul>

        <p><strong>Adjunctive:</strong></p>
        <ul>
          <li>Steam therapy 15-20 min q12h ตอน flare</li>
          <li>Humidifier ที่บ้าน</li>
          <li>Nutritional support — anorexia common</li>
          <li>Probiotics (some evidence)</li>
        </ul>

        <p><strong>Surgical (refractory severe):</strong></p>
        <ul>
          <li>Frontal sinus trephination + lavage</li>
          <li>Turbinectomy — last resort</li>
          <li>ผลไม่แน่นอน, complications high</li>
        </ul>

        <p><strong>Client education:</strong></p>
        <ul>
          <li>Lifelong condition, intermittent flares เป็นปกติ</li>
          <li>Stress management สำคัญ (Feliway, predictable routine)</li>
          <li>เก็บ antibiotic on hand for next flare-up</li>
          <li>คาดหวัง quality of life ที่ดี ไม่ใช่ cure</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Persistent / worsening signs despite treatment</li>
          <li>Antibiotic resistance after multiple courses</li>
          <li>Anorexia, weight loss</li>
          <li>Frontal sinusitis, mucocele</li>
          <li>Aspiration pneumonia (rare)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Lifelong condition; <em>good</em> quality of life ส่วนใหญ่</li>
          <li>Severe + refractory: variable, may need referral</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 15 · Nasal Aspergillosis (Canine) ---------- */
  {
    id: 'nasal-aspergillosis',
    titleEn: 'Canine Nasal Aspergillosis',
    titleTh: 'เชื้อรา Aspergillus ในจมูกหมา',
    type: 'disease',
    system: 'respiratory',
    species: ['dog'],
    tags: ['Aspergillus', 'fumigatus', 'mycotic rhinitis', 'fungal', 'clotrimazole', 'enilconazole', 'epistaxis', 'turbinate destruction'],
    aliases: ['mycotic rhinitis', 'sino-nasal aspergillosis', 'เชื้อราจมูก'],
    source: 'Ch. 15 · pp. 266–268',
    sections: {
      definition: `
        <p>Sino-nasal infection ด้วย <em>Aspergillus fumigatus</em> (most common) — <strong>destructive, locally invasive</strong> mycotic rhinitis</p>
        <ul>
          <li>เจอใน <strong>young-middle aged dolichocephalic dogs</strong> (German Shepherd, Collie, Golden, Lab)</li>
          <li>Dolichocephalic + mesaticephalic ทำลาย turbinates มาก</li>
          <li>Brachycephalic เกือบไม่เป็น (anatomy ป้องกัน)</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><em>Aspergillus fumigatus</em> ~ 95%</li>
          <li>Other species: A. niger, A. nidulans, A. flavus</li>
          <li>Saprophytic fungus — ubiquitous in environment</li>
          <li>Predisposing factor: ไม่ชัด; possibly local immunodeficiency, prior turbinate damage</li>
          <li>มัก non-immunocompromised host (ต่าง systemic aspergillosis)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Hyphal growth + biofilm ใน nasal cavity → fungal plaques on mucosa</li>
          <li>Local invasion → turbinate destruction + ulceration</li>
          <li>Production of toxins + immune response → ↓ healing</li>
          <li>Sometimes erodes through cribriform plate → CNS extension (ระวัง!)</li>
          <li>Rare hematogenous spread (immunocompromised)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic mucopurulent + sanguineous nasal discharge</strong> — มัก unilateral แต่ progress เป็น bilateral</li>
          <li><strong>Epistaxis</strong> ✨ — common, recurrent</li>
          <li>Sneezing</li>
          <li><strong>Pain on facial palpation / depigmentation around nares</strong> ✨ — characteristic of aspergillosis</li>
          <li>Nasal ulceration around external nares</li>
          <li>Loss of smell → ↓ appetite</li>
          <li>Facial deformity ใน advanced disease (rare)</li>
          <li>Systemic signs uncommon</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Multiple supportive findings + direct visualization/cytology:</strong></p>
        <ul>
          <li><strong>CT (preferred over rad):</strong>
            <ul>
              <li>Turbinate destruction with cavitary lesions</li>
              <li>Soft tissue density (fungal granuloma)</li>
              <li>Frontal sinus involvement</li>
              <li>Cribriform plate erosion → consider neuro signs, decision against intranasal therapy</li>
            </ul>
          </li>
          <li><strong>Rhinoscopy (gold standard):</strong>
            <ul>
              <li><strong>White-green-grey fungal plaques</strong> on turbinates ✨</li>
              <li>Turbinate destruction, "moth-eaten" appearance</li>
              <li>Mucosal ulceration</li>
              <li>Direct sample for cytology + culture</li>
            </ul>
          </li>
          <li><strong>Cytology of plaque:</strong> septate, branching hyphae</li>
          <li><strong>Fungal culture:</strong> from plaque sample (Sabouraud agar) — Aspergillus growth</li>
          <li><strong>Histopathology:</strong> hyphae invading mucosa, granulomatous inflammation</li>
          <li><strong>Serology (AGID):</strong> sensitivity ~70-80%; useful adjunct, can be negative in true cases</li>
          <li><strong>Galactomannan antigen</strong> — variable sensitivity</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Nasal neoplasia (older dogs, progressive facial deformity)</li>
          <li>Lymphoplasmacytic rhinitis</li>
          <li>Foreign body (acute, unilateral)</li>
          <li>Nasal mites (Pneumonyssoides) — sneezing fits, reverse sneezing</li>
          <li>Tooth root abscess</li>
          <li>Cryptococcosis (rare in dogs)</li>
          <li>Penicillium (rare but similar)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Topical intranasal antifungal (mainstay) — much higher cure rate than systemic alone</strong></p>

        <p><strong>Clotrimazole infusion (most common):</strong></p>
        <ul>
          <li>Under GA, dog in dorsal recumbency</li>
          <li>Foley catheters in nasopharynx (occlude caudal opening) + nares (delivery)</li>
          <li>1% clotrimazole solution (or 2% enilconazole) infused 60 min, rotate dog q15min</li>
          <li>Total volume 20-60 mL/side ขึ้นกับ body size</li>
          <li>Pre-treatment: rhinoscopic debridement of fungal plaques ✨ — improves contact + cure rate</li>
          <li>Cure rate ~85-95% with single treatment; ~ 50-60% may need 2nd treatment</li>
          <li><strong>Contraindicated if cribriform plate destroyed</strong> ✗ — risk CNS exposure to drug</li>
        </ul>

        <p><strong>Systemic antifungal (when topical not feasible / cribriform compromised):</strong></p>
        <ul>
          <li><strong>Itraconazole 5 mg/kg PO q24h × 4-6 months</strong> — most accessible</li>
          <li>Voriconazole 5 mg/kg PO q12h — more expensive, better CNS penetration</li>
          <li>Posaconazole — alternative</li>
          <li>Cure rate lower than topical (~50-70%)</li>
          <li>Monitor LFT q2-4 wk (hepatotoxicity)</li>
        </ul>

        <p><strong>Combined approach:</strong> topical + systemic for severe / refractory cases</p>

        <p><strong>Surgery:</strong></p>
        <ul>
          <li>Reserved for refractory cases</li>
          <li>Frontal sinus trephination for direct drug delivery</li>
          <li>Rhinotomy with debridement — high morbidity, last resort</li>
        </ul>

        <p><strong>Follow-up:</strong></p>
        <ul>
          <li>Recheck rhinoscopy 4-6 wk post-treatment</li>
          <li>Repeat treatment ถ้ายังมี plaques</li>
          <li>Clinical signs may persist for weeks even with successful treatment (turbinate damage permanent)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Treatment failure / recurrence (15-30%)</li>
          <li>Spread through cribriform plate → meningitis/encephalitis (rare but fatal)</li>
          <li>Permanent turbinate damage → chronic rhinitis post-cure</li>
          <li>Itraconazole hepatotoxicity</li>
          <li>Local irritation post-clotrimazole infusion</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Topical clotrimazole single treatment: <strong>cure rate 85-95%</strong> ✓</li>
          <li>Systemic alone: 50-70%</li>
          <li>Cribriform plate destruction: guarded, refer to specialist</li>
          <li>Some persistent nasal discharge despite cure due to permanent turbinate damage</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 15 · Cryptococcosis (Nasal/Systemic) ---------- */
  {
    id: 'cryptococcosis',
    titleEn: 'Cryptococcosis',
    titleTh: 'Cryptococcus — เชื้อราจมูกแมว',
    type: 'disease',
    system: 'respiratory',
    species: ['cat', 'dog'],
    tags: ['Cryptococcus', 'neoformans', 'gattii', 'fungal', 'LCAT', 'fluconazole', 'itraconazole', 'facial swelling', 'nasal'],
    aliases: ['cryptococcus', 'fungal rhinitis cat', 'แมวจมูกบวม'],
    source: 'Ch. 15 · pp. 268–270 + Ch. 98',
    sections: {
      definition: `
        <p>Systemic mycotic infection ด้วย <em>Cryptococcus neoformans</em> หรือ <em>C. gattii</em> — ตัวสำคัญสุดของ <strong>upper respiratory mycosis ในแมว</strong></p>
        <ul>
          <li>เจอบ่อยใน <strong>cat &gt; dog</strong></li>
          <li>เป็น <em>treatable</em> — testing สำคัญทุกเคส cat chronic nasal disease ✓</li>
          <li>Endemic worldwide; eucalyptus + pigeon droppings (environmental source)</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><em>Cryptococcus neoformans</em> — pigeon droppings, soil; immunocompromised hosts ด้วย</li>
          <li><em>Cryptococcus gattii</em> — eucalyptus, tropical/subtropical (Australia, Pacific NW); can infect immunocompetent</li>
          <li>Inhalation of basidiospores → nasal infection → ± systemic spread</li>
          <li>FeLV/FIV ไม่เพิ่ม risk significantly แต่อาจ worsen prognosis</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Yeast with thick polysaccharide capsule → resists phagocytosis</li>
          <li>Granulomatous inflammation → mass-like lesions ("fungal granuloma")</li>
          <li>Nasal cavity → cribriform plate → CNS extension possible</li>
          <li>Hematogenous spread → eyes (chorioretinitis), CNS, skin, lymph nodes</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Cats (most common presentation):</strong></p>
        <ul>
          <li><strong>Chronic nasal discharge</strong> ± hemorrhagic, unilateral หรือ bilateral</li>
          <li>Sneezing, stertor</li>
          <li><strong>Firm subcutaneous facial swelling over nasal bridge</strong> ✨ — characteristic ("Roman nose")</li>
          <li><strong>Polypoid nasal mass</strong> visible at nostril ✨</li>
          <li>Submandibular lymphadenopathy</li>
          <li>CNS signs (severe / advanced): seizures, ataxia, behavior change, blindness</li>
          <li>Ocular: chorioretinitis, optic neuritis, granulomatous uveitis</li>
          <li>Skin nodules (occasionally)</li>
          <li>Systemic signs: weight loss, lethargy</li>
        </ul>
        <p><strong>Dogs:</strong></p>
        <ul>
          <li>CNS signs predominant (~60%) — ataxia, seizures</li>
          <li>Nasal disease less common than cats</li>
          <li>Ocular involvement frequent</li>
          <li>Multisystemic disease typical</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Latex Cryptococcal Antigen Test (LCAT) — KEY TEST ✨</strong></p>
        <ul>
          <li>Detects capsular polysaccharide antigen in <strong>serum, urine, CSF</strong></li>
          <li>Sensitive &gt; 90%, specific ~ 100%</li>
          <li>Titer correlates with disease burden + treatment response</li>
          <li>Test ทุกแมวที่มี chronic nasal signs ✓</li>
        </ul>
        <p><strong>Cytology (extremely useful):</strong></p>
        <ul>
          <li>Nasal swab, lymph node aspirate, skin lesion, CSF</li>
          <li>Wright-Giemsa หรือ India ink → round to oval yeast with thick capsular halo (clear, unstained zone)</li>
          <li>Narrow-based budding</li>
          <li>เจอเร็ว, cheap, definitive</li>
        </ul>
        <p><strong>Histopathology:</strong> granulomatous inflammation + yeast organisms</p>
        <p><strong>Fungal culture:</strong> Sabouraud agar, slow growth (1-2 wk)</p>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li>Skull rad: soft tissue density, turbinate destruction</li>
          <li>CT: nasal mass, sinus involvement, cribriform plate</li>
          <li>MRI ถ้า CNS signs</li>
        </ul>
        <p><strong>FeLV/FIV testing</strong> — assess prognosis</p>
      `,
      differential: `
        <ul>
          <li>Nasal lymphoma / carcinoma — older cats, similar presentation</li>
          <li>FHV chronic rhinosinusitis — facial swelling absent</li>
          <li>Aspergillus (rare in cats)</li>
          <li>Bacterial rhinitis</li>
          <li>Foreign body</li>
          <li>Nasopharyngeal polyp (young cats)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Antifungal therapy — oral, prolonged</strong></p>
        <ul>
          <li><strong>Fluconazole 50 mg/cat PO q12h</strong> (or 5-10 mg/kg q12h) — first-line ในแมว ✓
            <ul>
              <li>Excellent CNS penetration</li>
              <li>Well tolerated</li>
              <li>Affordable</li>
              <li>Continue × 2-12 months until LCAT titer becomes negative + clinical resolution</li>
            </ul>
          </li>
          <li><strong>Itraconazole 5-10 mg/kg PO q24h</strong> — alternative; ↑ hepatotoxicity, monitor LFT</li>
          <li>Voriconazole — for refractory cases (more expensive)</li>
          <li>Severe / CNS disease: <strong>amphotericin B</strong> (lipid complex 1-2 mg/kg IV q48h, total dose 10-12 mg/kg) + fluconazole; refer to specialist</li>
        </ul>

        <p><strong>Supportive care:</strong></p>
        <ul>
          <li>Nutritional support</li>
          <li>Surgical debulking — if large polypoid mass blocking airway</li>
          <li>Treatment of secondary bacterial infection</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li><strong>LCAT titer ทุก 1-3 เดือน</strong> ✨ — should ↓ progressively; aim for negative or 4-fold ↓ from baseline</li>
          <li>CBC, biochem, LFT q1-2 month (drug toxicity)</li>
          <li>Continue treatment <strong>2 months past LCAT negative + clinical cure</strong></li>
          <li>Average treatment duration: 6-12 months (sometimes longer)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>CNS extension (cribriform plate erosion) → seizures, death</li>
          <li>Permanent neurologic deficits</li>
          <li>Blindness</li>
          <li>Drug toxicity: itraconazole hepatotoxicity, amphotericin nephrotoxicity</li>
          <li>Relapse after stopping treatment too early</li>
          <li>Treatment-resistant strains (rare)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Nasal disease without CNS: <strong>good with prolonged fluconazole</strong> (cure ~ 70-80%)</li>
          <li>CNS involvement: guarded — long treatment, may require lifelong</li>
          <li>FeLV/FIV+: worse</li>
          <li>C. gattii: more aggressive than neoformans</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 15 · Nasal Tumors ---------- */
  {
    id: 'nasal-tumors',
    titleEn: 'Nasal Tumors',
    titleTh: 'มะเร็งจมูก',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['nasal tumor', 'adenocarcinoma', 'carcinoma', 'lymphoma', 'sarcoma', 'radiation therapy', 'epistaxis', 'turbinate destruction'],
    aliases: ['nasal cancer', 'nasal neoplasia', 'มะเร็งจมูก', 'มะเร็งโพรงจมูก'],
    source: 'Ch. 15 · pp. 270–273',
    sections: {
      definition: `
        <p>Neoplasia ของ nasal cavity / paranasal sinuses</p>
        <ul>
          <li>Most are <strong>malignant</strong> (~80% in dogs, &gt; 90% in cats)</li>
          <li>Locally aggressive; metastasis ที่ presentation rarely common (~10-40%)</li>
          <li>Older animals: dog ~ 10 ปี, cat ~ 9-10 ปี</li>
          <li>Dolichocephalic dogs over-represented</li>
        </ul>
      `,
      etiology: `
        <p><strong>Dogs:</strong></p>
        <ul>
          <li><strong>Adenocarcinoma</strong> — most common (~30-50%)</li>
          <li>Squamous cell carcinoma</li>
          <li>Undifferentiated carcinoma</li>
          <li>Sarcomas: chondrosarcoma, osteosarcoma, fibrosarcoma</li>
          <li>Transmissible venereal tumor (rare)</li>
        </ul>
        <p><strong>Cats:</strong></p>
        <ul>
          <li><strong>Lymphoma</strong> — most common ~ 50-60% ✨</li>
          <li>Adenocarcinoma, SCC</li>
          <li>FeLV uncommonly associated with nasal lymphoma (most are FeLV-)</li>
        </ul>
        <p><strong>Risk factors:</strong> indoor tobacco smoke (dog), urban environment, dolichocephalic conformation</p>
      `,
      pathophysiology: `
        <ul>
          <li>Slow-growing local invasion</li>
          <li>Turbinate + bone destruction</li>
          <li>Cribriform plate erosion → CNS extension (advanced)</li>
          <li>Metastasis: regional LN (~10-15% at dx), lung (uncommon)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic nasal discharge</strong> — initially serous → mucopurulent → hemorrhagic</li>
          <li><strong>Epistaxis</strong> ✨ — common, especially advanced</li>
          <li>Sneezing</li>
          <li><strong>Unilateral → bilateral progression</strong> ✨ — typical</li>
          <li><strong>Facial deformity</strong> ✨ — bridge of nose, hard palate distortion (advanced)</li>
          <li>Exophthalmos (caudal extension)</li>
          <li>Stertor</li>
          <li>↓ Nasal airflow on affected side</li>
          <li>Lacrimation, ocular discharge (NLD obstruction)</li>
          <li>CNS signs: seizures, behavior change, ataxia (cribriform erosion)</li>
          <li>Systemic: weight loss, lethargy (late)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>CT (preferred):</strong>
            <ul>
              <li>Soft tissue mass with bone destruction</li>
              <li>Aggressive turbinate lysis</li>
              <li>Bilateral involvement common ใน advanced</li>
              <li>Cribriform plate evaluation (treatment planning)</li>
              <li>Regional LN assessment</li>
            </ul>
          </li>
          <li>Skull rad: less sensitive but accessible — increased soft tissue opacity, turbinate loss</li>
          <li>Thoracic rad — staging</li>
        </ul>
        <p><strong>Tissue diagnosis (essential):</strong></p>
        <ul>
          <li><strong>Nasal biopsy</strong> ผ่าน rhinoscope หรือ blind transnostril forceps biopsy</li>
          <li>Aspirate of regional LN if enlarged</li>
          <li>Histopathology + immunohistochemistry (lymphoma typing)</li>
        </ul>
        <p><strong>Lab:</strong> CBC (paraneoplastic hypercalcemia, leukocytosis), biochem, FeLV/FIV (cat)</p>
        <p><strong>Cryptococcal antigen</strong> — rule out treatable mimics ก่อน assume neoplasia</p>
      `,
      differential: `
        <ul>
          <li>Cryptococcosis (cat) — must rule out!</li>
          <li>Aspergillosis (dog)</li>
          <li>Lymphoplasmacytic / chronic rhinitis</li>
          <li>Foreign body</li>
          <li>Nasopharyngeal polyp (cat — young)</li>
          <li>Tooth root abscess + oronasal fistula</li>
        </ul>
      `,
      treatment: `
        <p><strong>Carcinoma / Sarcoma:</strong></p>
        <ul>
          <li><strong>Radiation therapy (gold standard)</strong> ✨ — definitive treatment
            <ul>
              <li>Stereotactic radiation (SRT): 1-3 fractions, MST 7-15 months</li>
              <li>Conventional fractionated RT (15-20 fractions): MST 12-19 months</li>
              <li>Best response in early-stage, no cribriform involvement</li>
            </ul>
          </li>
          <li>Surgery alone: NOT effective (rarely curative due to anatomy + invasion)</li>
          <li>Chemo: limited efficacy for carcinomas; adjuvant only</li>
          <li>Palliative: NSAIDs (piroxicam 0.3 mg/kg PO q24h dog; meloxicam in cat with caution), antibiotics for secondary infection</li>
          <li>Without treatment: median survival 3-6 months</li>
        </ul>

        <p><strong>Nasal Lymphoma (cat):</strong></p>
        <ul>
          <li><strong>Chemotherapy primary modality</strong> — generally responds well ✓
            <ul>
              <li>CHOP protocol or COP</li>
              <li>Single-agent chlorambucil + prednisolone (less aggressive)</li>
            </ul>
          </li>
          <li>± Radiation therapy (combined approach for localized disease)</li>
          <li>MST: 6-30 months depending on protocol + response</li>
          <li>Better prognosis than carcinoma</li>
        </ul>

        <p><strong>Supportive care:</strong></p>
        <ul>
          <li>Antibiotics for secondary bacterial infection</li>
          <li>Anti-inflammatory (caution NSAIDs in cats)</li>
          <li>Pain management — buprenorphine OTM, gabapentin</li>
          <li>Nutritional support — esophagostomy tube if persistently anorexic</li>
          <li>Saline nasal irrigation</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Local progression / facial deformity</li>
          <li>CNS extension (seizures)</li>
          <li>Aspiration pneumonia (oronasal fistula)</li>
          <li>Severe epistaxis</li>
          <li>Radiation side effects: oral mucositis, ocular damage, alopecia, late effects on lens (cataract)</li>
          <li>Distant metastasis (uncommon)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Carcinoma + RT:</strong> MST 12-19 months</li>
          <li><strong>Sarcoma + RT:</strong> MST 7-12 months</li>
          <li><strong>No treatment:</strong> 3-6 months</li>
          <li><strong>Cat lymphoma + chemo:</strong> 6-30 months (some long-term remissions)</li>
          <li>Cribriform involvement, epistaxis at presentation = worse</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 18 · Laryngeal Paralysis ---------- */
  {
    id: 'laryngeal-paralysis',
    titleEn: 'Laryngeal Paralysis',
    titleTh: 'กล่องเสียงเป็นอัมพาต',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['laryngeal paralysis', 'GOLPP', 'tie-back', 'arytenoid lateralization', 'aspiration pneumonia', 'Labrador', 'stridor'],
    aliases: ['laryngeal paralysis', 'GOLPP', 'แลรินซ์อัมพาต'],
    source: 'Ch. 18 · pp. 277–279',
    sections: {
      definition: `
        <p>Arytenoid cartilages ไม่ abduct ตอน inspiration → upper airway obstruction</p>
        <ul>
          <li>Most cases <strong>idiopathic</strong> ในหมาใหญ่สูงอายุ (especially Labrador Retrievers)</li>
          <li>Now recognized as part of <strong>generalized polyneuropathy (GOLPP — Geriatric Onset Laryngeal Paralysis Polyneuropathy)</strong></li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Idiopathic / GOLPP</strong> — ~80% of cases; older large breeds, especially Labrador</li>
          <li>Congenital — Bouvier des Flandres, Siberian Husky, Bull Terrier, Dalmatian, Rottweiler</li>
          <li>Trauma — cervical injury, post-surgical (thyroid surgery)</li>
          <li>Neoplasia — thyroid, mediastinal masses pressing recurrent laryngeal nerve</li>
          <li>Hypothyroidism — controversial; correct first if comorbid</li>
          <li>Polyneuropathy: myasthenia gravis, immune-mediated, toxic</li>
          <li>Inflammatory — penetrating trauma, infectious laryngitis</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Recurrent laryngeal nerve dysfunction → arytenoid abductor muscle (cricoarytenoideus dorsalis) failure</li>
          <li>Inspiration: ↑ negative pressure pulls mucosa inward → glottis narrowing → stridor</li>
          <li>Vicious cycle: ↑ effort → laryngeal edema → worsening obstruction → respiratory distress</li>
          <li>GOLPP: progressive — esophageal dysfunction (megaesophagus), then pelvic limb weakness ภายใน 1-2 ปี</li>
          <li>Concurrent pharyngeal/esophageal dysfunction → aspiration risk</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Stridor</strong> — high-pitched inspiratory noise ✨</li>
          <li>Voice change (bark hoarse, weak)</li>
          <li>Exercise intolerance</li>
          <li>Increased breathing effort, especially with excitement, heat</li>
          <li>Cyanosis, syncope (severe)</li>
          <li>Acute respiratory distress crisis — heat, exercise, stress trigger</li>
          <li>Gagging, coughing while eating/drinking</li>
          <li>Regurgitation (concurrent esophageal dysfunction)</li>
          <li>Subtle hindlimb weakness (GOLPP — develops months-year later)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Laryngoscopy under light plane of anesthesia (definitive):</strong></p>
        <ul>
          <li>Propofol low dose (titrate); avoid deep anesthesia ที่ depress respiration</li>
          <li>Observe arytenoid motion during deep breaths</li>
          <li>Have assistant call inspiration</li>
          <li><strong>Doxapram 1.1 mg/kg IV</strong> — stimulate breathing if too anesthetized</li>
          <li>Normal: arytenoids abduct symmetrically + widely on inspiration</li>
          <li>Paralysis: arytenoids stationary or paradoxical motion (suck inward on inspiration)</li>
          <li>Usually bilateral; unilateral can present with milder signs</li>
        </ul>
        <p><strong>Workup for cause + concurrent disease:</strong></p>
        <ul>
          <li>Thoracic rad: aspiration pneumonia, megaesophagus, mediastinal mass</li>
          <li>Cervical rad: tracheal compression, mass</li>
          <li>T4, free T4 — rule out hypothyroidism</li>
          <li>CBC, biochem, UA</li>
          <li>Acetylcholine receptor antibody — myasthenia gravis</li>
          <li>Neurologic exam (GOLPP)</li>
          <li>Barium swallow study — esophageal motility</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>BOAS (brachycephalic) — anatomy obvious</li>
          <li>Tracheal collapse — different cough pattern</li>
          <li>Laryngeal neoplasia / mass</li>
          <li>Foreign body</li>
          <li>Soft palate elongation</li>
          <li>Laryngeal collapse (advanced BOAS, chronic upper airway obstruction)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute respiratory crisis — emergency:</strong></p>
        <ul>
          <li>Cool environment (fans, AC, ice packs at neck)</li>
          <li>Sedation: butorphanol 0.2 mg/kg IV/IM ± acepromazine 0.01-0.02 mg/kg IV/IM</li>
          <li>Oxygen supplementation</li>
          <li>Dexamethasone 0.1-0.2 mg/kg IV — reduce laryngeal edema</li>
          <li>Severe: emergency intubation or tracheostomy</li>
          <li>Once stable: definitive workup + treatment</li>
        </ul>

        <p><strong>Surgical (definitive — preferred for symptomatic cases):</strong></p>
        <ul>
          <li><strong>Unilateral arytenoid lateralization (UAL / "tie-back")</strong> ✨ — gold standard
            <ul>
              <li>Sutures cricoid + arytenoid → permanent abduction of one side</li>
              <li>Improves airway adequately, balance vs aspiration risk</li>
              <li>Success rate &gt; 90% for symptom relief</li>
              <li>1-yr survival 94%, 3-yr 84%, 4-yr 75% (median age 10.6 yr)</li>
            </ul>
          </li>
          <li>Bilateral lateralization — historic; high aspiration pneumonia risk, no longer preferred</li>
          <li>Castellated laryngoplasty, partial laryngectomy — alternative procedures</li>
        </ul>

        <p><strong>Medical management (when surgery declined):</strong></p>
        <ul>
          <li>Strict exercise restriction — leash walks only, avoid heat</li>
          <li>Weight loss if obese ✨</li>
          <li>Cool environment, AC</li>
          <li>Anti-anxiety: trazodone 3-7 mg/kg PO q8-24h, gabapentin 10-20 mg/kg PO q8h</li>
          <li>Anti-inflammatory: prednisolone 0.5 mg/kg PO q12h short bursts during flare</li>
          <li>Use harness instead of collar</li>
        </ul>

        <p><strong>GOLPP-specific management:</strong></p>
        <ul>
          <li>Recognize progressive disease — counsel client</li>
          <li>Esophageal dysfunction → upright feeding, small meals, watch for regurgitation</li>
          <li>Monitor for aspiration pneumonia regularly</li>
          <li>Pelvic limb support as weakness develops</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Aspiration pneumonia</strong> ✗ — major risk both pre- and post-operative; ~ 19-32% within 4 years post-tieback
            <ul>
              <li>Pre-op: due to laryngeal dysfunction during swallowing</li>
              <li>Post-op: glottis cannot close fully → reflux/saliva enters trachea</li>
              <li>Prevention: small frequent meals, soft food, upright feeding</li>
            </ul>
          </li>
          <li>Acute respiratory distress / death in untreated severe cases</li>
          <li>Surgical complications: seroma, suture failure, recurrent disease</li>
          <li>Post-op aspiration pneumonia — risk factors: postop opioids before discharge, pre-existing megaesophagus</li>
          <li>Permanent voice change</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Surgical (UAL):</strong> good — &gt; 90% symptom resolution, 4-yr survival 75%</li>
          <li><strong>Medical only:</strong> guarded long-term; risk of acute crisis</li>
          <li>GOLPP component → progressive neuromuscular disease eventually limits quality of life</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 18 · BOAS ---------- */
  {
    id: 'boas',
    titleEn: 'Brachycephalic Obstructive Airway Syndrome (BOAS)',
    titleTh: 'BOAS — หมาหน้าสั้นหายใจลำบาก',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['BOAS', 'brachycephalic', 'stenotic nares', 'elongated soft palate', 'everted laryngeal saccules', 'hypoplastic trachea', 'Bulldog', 'Pug', 'French Bulldog'],
    aliases: ['brachycephalic syndrome', 'หมาหน้าสั้นหายใจไม่ออก'],
    source: 'Ch. 18 · pp. 279–282',
    sections: {
      definition: `
        <p>กลุ่มอาการ upper airway obstruction ในหมาหน้าสั้น — anatomical abnormalities หลายอย่างร่วมกัน</p>
        <ul>
          <li>Most affected breeds: <strong>English Bulldog, French Bulldog, Pug, Boston Terrier, Boxer, Shih Tzu, Pekingese, Cavalier KCS</strong></li>
          <li>Brachycephalic cats: Persian, Himalayan</li>
          <li>Progressive — ถ้าไม่แก้ → laryngeal collapse → respiratory failure</li>
        </ul>
      `,
      etiology: `
        <p><strong>Primary anatomic abnormalities:</strong></p>
        <ul>
          <li><strong>Stenotic nares</strong> — slit-like, narrow openings</li>
          <li><strong>Elongated soft palate</strong> — extends past tip of epiglottis</li>
          <li><strong>Hypoplastic trachea</strong> — เด่นใน English Bulldog</li>
          <li><strong>Aberrant nasal turbinates</strong> — obstruct caudal nasal cavity (under-recognized; CT/rhinoscopy needed)</li>
        </ul>
        <p><strong>Secondary changes:</strong></p>
        <ul>
          <li>Everted laryngeal saccules (prolapse into glottis)</li>
          <li>Laryngeal collapse (stage I-III)</li>
          <li>Tonsil eversion</li>
          <li>Pharyngeal mucosal edema/inflammation</li>
          <li>GI signs: regurgitation, vomiting, reflux esophagitis</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>↑ Negative inspiratory pressure to overcome upper airway resistance</li>
          <li>Soft tissue sucked inward → eversion of laryngeal saccules → progressive obstruction</li>
          <li>Chronic ↑ effort → cartilage softening → <strong>laryngeal collapse</strong>:
            <ul>
              <li><em>Stage I:</em> everted saccules</li>
              <li><em>Stage II:</em> collapsed cuneiform process</li>
              <li><em>Stage III:</em> collapsed corniculate process — severe ✗</li>
            </ul>
          </li>
          <li>↑ Intrathoracic pressure → GI reflux, hiatal hernia, regurgitation</li>
          <li>Heat dissipation impaired (panting ineffective) → heat stroke risk</li>
          <li>Sleep-disordered breathing</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Loud breathing sounds — stertor, snoring</li>
          <li>Stridor when severe</li>
          <li>Exercise intolerance</li>
          <li>Heat intolerance — heat stroke risk ✗</li>
          <li>Cyanosis, collapse, syncope (severe)</li>
          <li>Sleep disturbance — owner often reports loud snoring + apnea</li>
          <li>GI signs: regurgitation, gagging, vomiting (50%+ of BOAS dogs)</li>
          <li>Acute respiratory distress crisis with excitement / heat / exercise ✗</li>
          <li>Cyanotic mucous membranes</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical (mostly):</strong></p>
        <ul>
          <li>Breed + presenting signs typically diagnostic</li>
          <li>Visualize stenotic nares directly</li>
          <li>Auscultate stertor over upper airway</li>
        </ul>
        <p><strong>Laryngoscopy (under anesthesia):</strong></p>
        <ul>
          <li>Soft palate length (should not extend past epiglottis)</li>
          <li>Laryngeal saccule eversion</li>
          <li>Laryngeal collapse staging</li>
          <li>Tonsil size/eversion</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li>Cervical/thoracic rad: hypoplastic trachea (T:I ratio &lt; 0.13 in Bulldog), aspiration pneumonia, hiatal hernia</li>
          <li>CT: comprehensive — turbinates, soft palate, trachea, lung</li>
          <li>Rhinoscopy: aberrant turbinates</li>
        </ul>
        <p><strong>Concurrent disease workup:</strong></p>
        <ul>
          <li>GI workup if vomiting/regurgitation prominent</li>
          <li>Sleep studies (referral)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Laryngeal paralysis (different breed signalment)</li>
          <li>Tracheal collapse</li>
          <li>Laryngeal/tracheal mass</li>
          <li>Foreign body</li>
          <li>Bordetellosis / kennel cough (acute presentation)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Surgical correction (early intervention preferred):</strong></p>
        <ul>
          <li><strong>Rhinoplasty</strong> — wedge/punch resection of alar fold to widen nares ✨ — single most impactful procedure</li>
          <li><strong>Staphylectomy / palatoplasty</strong> — soft palate shortening (laser, scissors, harmonic scalpel)</li>
          <li><strong>Sacculectomy</strong> — remove everted laryngeal saccules</li>
          <li><strong>Laryngeal collapse Stage III:</strong> permanent tracheostomy may be required</li>
          <li><strong>Turbinectomy (laser):</strong> aberrant turbinates — referral procedures, expensive</li>
          <li>Best done at 6-12 months (before secondary changes); but worthwhile at any age</li>
          <li>Combined procedures: usually rhinoplasty + palatoplasty ± sacculectomy in single anesthesia</li>
        </ul>

        <p><strong>Acute respiratory distress / heat stroke crisis:</strong></p>
        <ul>
          <li>Cool — wet towels, AC, fans (avoid extreme cold)</li>
          <li>O2 supplementation</li>
          <li>Sedation: butorphanol + acepromazine</li>
          <li>Dexamethasone 0.1-0.2 mg/kg IV — laryngeal edema</li>
          <li>Intubation if severe</li>
          <li>Treat heat stroke (cooling to 39.4°C, IV fluids, anticonvulsants, GI protection)</li>
        </ul>

        <p><strong>Medical / lifestyle (always, regardless of surgery):</strong></p>
        <ul>
          <li><strong>Weight management</strong> ✨ — dramatic improvement with weight loss alone</li>
          <li>Avoid heat, humidity, excessive exercise</li>
          <li>Cool environment, AC</li>
          <li>Use harness, not collar</li>
          <li>Sleep position support (raised head bed)</li>
          <li>GI signs: omeprazole 1 mg/kg PO q24h, sucralfate, prokinetics if needed</li>
          <li>Anxiety: trazodone</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Heat stroke</strong> — significant cause of death ✗</li>
          <li>Acute respiratory failure</li>
          <li>Aspiration pneumonia (concurrent reflux + airway obstruction)</li>
          <li>Laryngeal collapse → permanent tracheostomy required</li>
          <li>Anesthetic complications (high risk — pre-O2, careful intubation, prolonged recovery monitoring)</li>
          <li>Cor pulmonale (chronic hypoxia)</li>
          <li>Sudden death</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Early surgery (no laryngeal collapse):</strong> excellent — significant improvement in &gt; 90%</li>
          <li><strong>Stage I-II laryngeal collapse:</strong> good with surgery</li>
          <li><strong>Stage III collapse:</strong> guarded — may need permanent tracheostomy</li>
          <li><strong>Without surgery:</strong> progressive worsening expected</li>
          <li>Weight management + early intervention key</li>
        </ul>
        <div class="callout">⚠️ <strong>Anesthesia care:</strong> BOAS patients high anesthetic risk — preoxygenate, rapid induction + intubation, careful extubation (only when fully awake + swallowing), monitor 4-6 hr post-op for swelling. Have re-intubation supplies ready.</div>
      `,
    },
  },

  /* ---------- Ch 21 · Tracheal Collapse ---------- */
  {
    id: 'tracheal-collapse',
    titleEn: 'Tracheal Collapse',
    titleTh: 'หลอดลมหย่อน — เสียงไอแบบ honking',
    type: 'disease',
    system: 'respiratory',
    species: ['dog'],
    tags: ['tracheal collapse', 'tracheobronchomalacia', 'TBM', 'honking cough', 'hydrocodone', 'butorphanol', 'tracheal stent', 'Yorkshire Terrier'],
    aliases: ['collapsing trachea', 'หลอดลมยุบ', 'tracheobronchomalacia'],
    source: 'Ch. 21 · pp. 333–337',
    sections: {
      definition: `
        <p>Tracheal cartilages อ่อนแอ + dorsal tracheal membrane หย่อน → trachea ยุบเข้าหากัน (โดยเฉพาะระหว่าง expiration ที่ intrathoracic, inspiration ที่ extrathoracic)</p>
        <ul>
          <li>เจอบ่อยใน <strong>หมาพันธุ์เล็ก-เล็กจิ๋ว สูงอายุ</strong> (Yorkie, Pomeranian, Toy Poodle, Maltese, Chihuahua, Pug)</li>
          <li>มัก concurrent with chronic bronchitis</li>
          <li>Bronchomalacia — collapse ของ smaller airways บ่อย concurrent</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Genetic / breed predisposition</strong> — primary factor</li>
          <li>Cartilage matrix abnormality (chondromalacia) — ↓ glycoprotein, ↑ water content</li>
          <li>Acquired exacerbating factors:
            <ul>
              <li>Obesity ✨</li>
              <li>Chronic respiratory infection</li>
              <li>Smoke / pollutant exposure</li>
              <li>Cushing's disease, hypothyroidism</li>
              <li>Heart disease (mainstem bronchus compression by enlarged LA)</li>
              <li>Chronic bronchitis</li>
              <li>Endotracheal intubation trauma</li>
            </ul>
          </li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Normal trachea: rigid C-shaped cartilage rings + flexible dorsal membrane</li>
          <li>Collapsed: cartilage flattens + dorsal membrane redundant → lumen narrows</li>
          <li><strong>Cervical (extrathoracic) trachea:</strong> collapse on <em>inspiration</em> (negative intraluminal pressure)</li>
          <li><strong>Intrathoracic trachea:</strong> collapse on <em>expiration</em> (positive intrathoracic pressure)</li>
          <li>Self-perpetuating: collapse → cough → ↑ pressure → more collapse → mucosal inflammation</li>
          <li>Grading: Stage I (25% reduction) → Stage IV (90% — lumen virtually closed)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>"Goose honk" cough</strong> ✨ — dry, harsh, paroxysmal — pathognomonic-like</li>
          <li>Cough triggered by: excitement, drinking, eating, pressure on neck (collar!), heat</li>
          <li>Exercise intolerance</li>
          <li>Inspiratory effort + stridor (cervical collapse)</li>
          <li>Expiratory wheeze (intrathoracic)</li>
          <li>Cyanosis, syncope (severe — usually after coughing fit)</li>
          <li>Acute respiratory crisis with stress/excitement</li>
          <li>มัก systemically healthy</li>
          <li>Owner reports waxing/waning — chronic, slowly progressive</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Cervical + thoracic rad (inspiratory + expiratory):</strong></p>
        <ul>
          <li>Cervical inspiration view: extrathoracic trachea narrowed</li>
          <li>Thoracic expiration view: intrathoracic trachea narrowed</li>
          <li>Rad sensitivity ~60% — many false negatives</li>
          <li>Note: redundant dorsal tracheal membrane on rad can be artifact (overlying esophagus)</li>
        </ul>
        <p><strong>Fluoroscopy (gold standard for diagnosis + grading):</strong></p>
        <ul>
          <li>Dynamic visualization across breathing cycle ± cough induction</li>
          <li>Identify location + grade of collapse</li>
          <li>Evaluate mainstem bronchi (bronchomalacia)</li>
        </ul>
        <p><strong>Bronchoscopy:</strong></p>
        <ul>
          <li>Direct visualization, definitive grading</li>
          <li>Wide dorsal membrane prolapse</li>
          <li>Concurrent BAL for chronic bronchitis evaluation</li>
        </ul>
        <p><strong>Workup for concurrent disease:</strong></p>
        <ul>
          <li>Echocardiogram — MMVD common in same population (LA size, mainstem bronchus compression)</li>
          <li>BAL cytology + culture — bronchitis, infection</li>
          <li>CBC, biochem, T4 (hypothyroid), ACTH stim (Cushing's)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Chronic bronchitis</li>
          <li>Cardiogenic cough (LA enlargement compressing mainstem bronchus, MMVD)</li>
          <li>Laryngeal paralysis</li>
          <li>BOAS</li>
          <li>Tracheal mass</li>
          <li>CIRDC (acute)</li>
          <li>Eosinophilic bronchopneumopathy</li>
          <li>Foreign body</li>
        </ul>
      `,
      treatment: `
        <p><strong>Medical management adequate ใน &gt; 70% of cases ✓</strong></p>

        <p><strong>1. Cough suppression (cornerstone)</strong></p>
        <ul>
          <li><strong>Hydrocodone 0.22 mg/kg PO q6-12h</strong> — first-line, effective</li>
          <li><strong>Butorphanol 0.5-1 mg/kg PO q6-12h</strong> — alternative</li>
          <li>Codeine 1-2 mg/kg PO q8-12h</li>
          <li>Tramadol 3-5 mg/kg PO q8-12h (less effective for cough)</li>
          <li>Refractory: maropitant 2 mg/kg PO q24h (NK1 antagonist), gabapentin 5-10 mg/kg PO q8-12h (neuromodulator)</li>
        </ul>

        <p><strong>2. Anti-inflammatory (during exacerbation)</strong></p>
        <ul>
          <li>Prednisone 0.5-1 mg/kg PO q12h × 5-7 วัน, taper over 3-4 wk</li>
          <li>Inhaled fluticasone (Flixotide) 110-220 µg q12h via spacer (AeroDawg) — long-term low systemic effect</li>
        </ul>

        <p><strong>3. Bronchodilators (concurrent bronchitis)</strong></p>
        <ul>
          <li>Theophylline ER 10 mg/kg PO q12h</li>
          <li>Terbutaline 1.25-5 mg/dog PO q8-12h</li>
          <li>Inhaled albuterol (rescue)</li>
        </ul>

        <p><strong>4. Sedation / anti-anxiety</strong></p>
        <ul>
          <li>Trazodone 3-7 mg/kg PO q8-24h — daily for anxious dogs</li>
          <li>Acepromazine 0.025-0.05 mg/kg PO PRN — short-term for stressful events</li>
          <li>Phenobarbital — alternative for severe anxiety</li>
        </ul>

        <p><strong>5. Antibiotics (only if BAL evidence of infection)</strong></p>
        <ul>
          <li>Doxycycline 5 mg/kg PO q12h × 2-4 wk for Mycoplasma/atypicals</li>
          <li>Amoxicillin-clavulanate, fluoroquinolone if culture-guided</li>
        </ul>

        <p><strong>6. Lifestyle modifications (essential)</strong></p>
        <ul>
          <li><strong>Weight loss</strong> ✨ — single most impactful intervention</li>
          <li><strong>Harness instead of collar</strong> ✨ — non-negotiable</li>
          <li>Avoid heat, humidity, excitement</li>
          <li>AC during hot weather</li>
          <li>Avoid second-hand smoke</li>
          <li>Treat concurrent disease (MMVD, hypothyroidism, Cushing's)</li>
        </ul>

        <p><strong>Stanozolol (novel, limited evidence):</strong></p>
        <ul>
          <li>0.3 mg/kg PO divided q12h × 2 months, then taper × 15 days</li>
          <li>May improve tracheal wall strength; not widely adopted</li>
        </ul>

        <p><strong>Surgical / interventional (refractory, severe):</strong></p>
        <ul>
          <li><strong>Intraluminal tracheal stent</strong> — self-expanding nitinol; place under fluoroscopy
            <ul>
              <li>Dramatic relief in dogs failing medical management</li>
              <li>Median survival ~ 502 days post-stent</li>
              <li>1-yr survival 78%, 2-yr 60%, 4-yr 26%</li>
              <li>Complications: 40% — stent fracture, mucus accumulation, infection, persistent cough</li>
              <li>Cough often worse initially after placement (weeks)</li>
            </ul>
          </li>
          <li><strong>Extraluminal prosthetic rings (PPP rings)</strong> — for cervical collapse only; durable but technically demanding</li>
        </ul>

        <p><strong>Acute respiratory crisis:</strong></p>
        <ul>
          <li>Sedation: butorphanol IV/IM, acepromazine</li>
          <li>O2 supplementation, cooling</li>
          <li>Dexamethasone 0.1-0.2 mg/kg IV</li>
          <li>Cough suppressant (hydrocodone)</li>
          <li>Severe: intubation, possibly tracheostomy</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Acute respiratory crisis / cyanotic episode</li>
          <li>Aspiration pneumonia (uncommon)</li>
          <li>Cor pulmonale (chronic hypoxia, advanced)</li>
          <li>Stent complications — fracture, granulation tissue ingrowth, infection, mucus impaction</li>
          <li>Comorbid heart failure (MMVD overlap)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Medical management:</strong> resolution of signs ≥ 1 yr in ~71% — good ✓</li>
          <li>Most live normal lifespan with intermittent flares</li>
          <li>Refractory cases → stenting reasonable (60% 1-yr survival)</li>
          <li>Concurrent severe MMVD or laryngeal collapse — worse</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 21 · CIRDC ---------- */
  {
    id: 'cirdc',
    titleEn: 'Canine Infectious Respiratory Disease Complex (CIRDC)',
    titleTh: 'Kennel Cough — หมาไอติดต่อ',
    type: 'disease',
    system: 'respiratory',
    species: ['dog'],
    tags: ['kennel cough', 'CIRDC', 'Bordetella', 'parainfluenza', 'canine influenza', 'CAV-2', 'Mycoplasma cynos', 'doxycycline'],
    aliases: ['kennel cough', 'infectious tracheobronchitis', 'หมาไอ', 'หมาไอติดต่อ'],
    source: 'Ch. 21 · pp. 321–325',
    sections: {
      definition: `
        <p>โรคติดเชื้อระบบหายใจในหมา — <strong>highly contagious</strong> — multiple pathogens; mostly self-limiting</p>
        <ul>
          <li>Common in <strong>group settings</strong>: shelter, boarding, daycare, dog park, grooming</li>
          <li>"Kennel cough" — old name; ใช้ <strong>CIRDC</strong> ดีกว่าเพราะสะท้อนว่ามีหลาย pathogens</li>
          <li>เปรียบกับ "cold/flu" ของคน — ลูกค้าเข้าใจง่าย</li>
        </ul>
      `,
      etiology: `
        <p><strong>Viruses:</strong></p>
        <ul>
          <li>Canine adenovirus type 2 (CAV-2)</li>
          <li>Canine parainfluenza virus (CPiV)</li>
          <li>Canine influenza virus (CIV) — H3N8, H3N2</li>
          <li>Canine herpesvirus-1 (CHV-1)</li>
          <li>Canine respiratory coronavirus (CRCoV)</li>
          <li>Canine pneumovirus</li>
        </ul>
        <p><strong>Bacteria:</strong></p>
        <ul>
          <li><strong>Bordetella bronchiseptica</strong> ✨ — primary, also opportunistic</li>
          <li><em>Streptococcus equi subsp. zooepidemicus</em> — severe pneumonia</li>
          <li><strong>Mycoplasma cynos</strong> — increasing recognition</li>
          <li>Other Mycoplasma spp.</li>
        </ul>
        <p><strong>Co-infection common</strong> → more severe disease</p>
      `,
      pathophysiology: `
        <ul>
          <li>Aerosol transmission, fomites</li>
          <li>Bordetella attaches to ciliated epithelium → ↓ mucociliary clearance</li>
          <li>Viruses damage epithelium → secondary bacterial infection</li>
          <li>Self-limiting in healthy dogs (~ 7-14 วัน)</li>
          <li>Pneumonia complication ใน young, geriatric, immunosuppressed, brachycephalic, comorbidities</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Uncomplicated CIRDC:</strong></p>
        <ul>
          <li><strong>Acute, harsh, paroxysmal cough</strong> ✨ — often ending in retching/foamy sputum</li>
          <li>Cough easily induced by tracheal palpation</li>
          <li>Mild serous nasal/ocular discharge</li>
          <li>Sneezing</li>
          <li>มัก afebrile, eat well, energetic</li>
          <li>2-14 days post-exposure, lasts 7-14 days</li>
        </ul>
        <p><strong>Complicated (pneumonia developing):</strong></p>
        <ul>
          <li>Lethargy, anorexia, fever ✗</li>
          <li>Mucopurulent nasal discharge</li>
          <li>Dyspnea, tachypnea</li>
          <li>Weight loss</li>
          <li>Crackles on auscultation</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical diagnosis ส่วนใหญ่:</strong></p>
        <ul>
          <li>History of exposure + classic acute cough</li>
          <li>Tracheal palpation easily elicits cough</li>
          <li>Otherwise healthy</li>
          <li>ไม่ต้อง routine workup ในเคส uncomplicated</li>
        </ul>
        <p><strong>เมื่อไหร่ต้อง workup:</strong></p>
        <ul>
          <li>Severe / persistent &gt; 14 วัน</li>
          <li>Systemic illness (fever, anorexia, dyspnea)</li>
          <li>Outbreak in shelter / cattery</li>
          <li>Suspected pneumonia</li>
        </ul>
        <p><strong>Tests:</strong></p>
        <ul>
          <li><strong>Thoracic rad</strong> — pneumonia identification (alveolar pattern, lobar consolidation)</li>
          <li><strong>PCR panel</strong> — multiple pathogens (oropharyngeal swab + nasal swab)</li>
          <li>Tracheal wash / BAL — cytology + culture in pneumonia cases</li>
          <li>CBC — neutrophilia with left shift (pneumonia)</li>
          <li>Pulse ox / blood gas if dyspneic</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Tracheal collapse (older small breeds, chronic)</li>
          <li>Foreign body (sudden onset, single dog)</li>
          <li>Eosinophilic bronchopneumopathy</li>
          <li>Heartworm</li>
          <li>Distemper (multisystemic, neurologic)</li>
          <li>Aspiration pneumonia</li>
          <li>Mycotic / parasitic pneumonia</li>
          <li>Cardiogenic cough (older, MMVD)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Uncomplicated CIRDC — supportive only ✓</strong></p>
        <ul>
          <li>Rest, isolate from other dogs (3-4 wk after symptoms resolve — viral shedding)</li>
          <li>Cough suppressant for comfort:
            <ul>
              <li>Butorphanol 0.5 mg/kg PO q6-12h</li>
              <li>Hydrocodone 0.22 mg/kg PO q6-12h</li>
              <li>หลีกเลี่ยงถ้าสงสัย pneumonia (ต้องไอออกมา)</li>
            </ul>
          </li>
          <li>Avoid collar pressure</li>
          <li>Nebulization / steam therapy</li>
          <li>Hydration</li>
          <li><strong>NO antibiotics</strong> for uncomplicated CIRDC ✗ (mostly viral; antibiotic stewardship)</li>
        </ul>

        <p><strong>Antibiotic indications (ISCAID 2017):</strong></p>
        <ul>
          <li>Lethargy, anorexia, fever &gt; 39.5°C</li>
          <li>Cough &gt; 10 days persistent</li>
          <li>Mucopurulent discharge with systemic illness</li>
          <li>Suspected/confirmed pneumonia</li>
        </ul>
        <ul>
          <li><strong>Doxycycline 5 mg/kg PO q12h × 7-10 วัน</strong> ✨ — first-line (covers Bordetella, Mycoplasma)</li>
          <li>Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h — alternative</li>
          <li>Severe / hospitalized: enrofloxacin 5-20 mg/kg + ampicillin 22 mg/kg q8h IV</li>
        </ul>

        <p><strong>Supportive care for complicated cases:</strong></p>
        <ul>
          <li>O2 therapy</li>
          <li>IV fluids</li>
          <li>Nebulization + coupage</li>
          <li>Bronchodilators (selective)</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Vaccination:
            <ul>
              <li><strong>Bordetella</strong> vaccine — intranasal (best, fastest onset 72h, mucosal immunity), oral, parenteral</li>
              <li>CAV-2 + CPiV — usually in DHPP combo (core)</li>
              <li>Canine influenza H3N8 + H3N2 — non-core; recommended for boarding/show dogs</li>
            </ul>
          </li>
          <li>Vaccines reduce severity, not prevent infection completely</li>
          <li>Boarding/grooming facilities should require Bordetella + DHPP</li>
          <li>Hygiene: disinfection, ventilation</li>
          <li>Isolate symptomatic dogs 3-4 wk</li>
        </ul>

        <p><strong>Client education (key concept):</strong></p>
        <ul>
          <li>เปรียบเทียบ "cold/flu in people"</li>
          <li>Many pathogens involved — vaccine ครอบคลุมไม่ทุกตัว</li>
          <li>Most recover without antibiotics</li>
          <li>Vaccine ลด severity, ไม่ป้องกัน 100%</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Bacterial pneumonia (esp. with influenza co-infection, S. zooepidemicus)</li>
          <li>Chronic cough (rare; persistent post-infection)</li>
          <li>Death — uncommon, mostly puppies/immunocompromised</li>
          <li>Outbreak in facilities</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Uncomplicated: <strong>excellent</strong>, full recovery 7-14 วัน</li>
          <li>Pneumonia: good with treatment in most healthy adult dogs</li>
          <li>Puppies, geriatric, immunocompromised: guarded</li>
          <li>Severe S. zooepidemicus pneumonia: poor (high mortality)</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 21 · Canine Chronic Bronchitis ---------- */
  {
    id: 'canine-chronic-bronchitis',
    titleEn: 'Canine Chronic Bronchitis',
    titleTh: 'หมาไอเรื้อรัง',
    type: 'disease',
    system: 'respiratory',
    species: ['dog'],
    tags: ['chronic bronchitis', 'cough', 'fluticasone', 'theophylline', 'terbutaline', 'BAL', 'small breed', 'irreversible airway disease'],
    aliases: ['CCB', 'canine bronchitis', 'หมาไอเรื้อรัง'],
    source: 'Ch. 21 · pp. 339–343',
    sections: {
      definition: `
        <p>Chronic airway inflammation &gt; 2-3 เดือน → <strong>irreversible</strong> airway changes (fibrosis, mucus gland hyperplasia)</p>
        <ul>
          <li>เจอใน <strong>middle-aged to older small-breed dogs</strong> เด่น</li>
          <li>มัก concurrent with tracheal collapse (similar population)</li>
          <li>Differs from acute bronchitis (&lt; 1-3 mo, reversible)</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Idiopathic</strong> — most cases; chronic immune-mediated airway inflammation</li>
          <li>Environmental triggers: smoke, dust, allergens, pollutants</li>
          <li>Sequela of recurrent infections</li>
          <li>Allergic component possible (allergic bronchitis subtype)</li>
          <li>Co-existence with: tracheal collapse, MMVD, obesity</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Chronic neutrophilic ± eosinophilic airway inflammation</li>
          <li>Goblet cell + submucosal gland hyperplasia → ↑ mucus production</li>
          <li>Epithelial squamous metaplasia, fibrosis → permanent airway changes</li>
          <li>Bronchospasm + mucus plugging → ↓ airflow</li>
          <li>Chronic cough → tracheomalacia / bronchomalacia exacerbation</li>
          <li>Secondary bacterial colonization possible</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic cough &gt; 2 เดือน</strong> ✨ — usually dry, harsh, sometimes productive (white-yellow mucus)</li>
          <li>Often paroxysmal, ending with retching</li>
          <li>Triggered by excitement, exercise, eating, drinking, position change</li>
          <li>Exercise intolerance (mild-moderate)</li>
          <li>Otherwise systemically healthy initially</li>
          <li>Respiratory distress only in severe / decompensated cases</li>
          <li>Wheeze, crackles on auscultation</li>
          <li>Expiratory effort ↑</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnosis of exclusion + supportive findings</strong></p>
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li>Bronchial pattern (donuts + tram lines)</li>
          <li>± Mild bronchointerstitial infiltrate</li>
          <li>Tracheal collapse (concurrent)</li>
          <li>Rule out cardiac disease, pneumonia, neoplasia, parasitism</li>
        </ul>
        <p><strong>Echo:</strong> rule out left CHF (especially MMVD breeds)</p>
        <p><strong>Heartworm test, fecal Baermann</strong> — must rule out!</p>
        <p><strong>BAL / TW (definitive):</strong></p>
        <ul>
          <li>Cytology: ↑ neutrophils ± eosinophils, mucus, hyperplastic epithelial cells</li>
          <li>Culture: usually no significant growth (or normal flora) — antibiotics not needed unless septic neutrophilic</li>
          <li>Mycoplasma PCR/culture</li>
        </ul>
        <p><strong>Bronchoscopy:</strong> hyperemic mucosa, mucus plugs, dynamic collapse, polypoid changes</p>
        <p><strong>CBC, biochem, T4</strong> — rule out comorbidities</p>
      `,
      differential: `
        <ul>
          <li>Tracheal / bronchial collapse</li>
          <li>Cardiogenic cough (CHF)</li>
          <li>Eosinophilic bronchopneumopathy (more eosinophils, younger dogs)</li>
          <li>Pulmonary fibrosis (Westies)</li>
          <li>Heartworm</li>
          <li>Pulmonary parasites (Oslerus, Filaroides)</li>
          <li>Neoplasia</li>
          <li>Foreign body (acute, unilateral wheeze)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Goals:</strong> ↓ symptoms, ↓ inflammation, prevent progression — ไม่หาย ✗</p>

        <p><strong>1. Glucocorticoids (cornerstone)</strong></p>
        <ul>
          <li><strong>Prednisone 0.5-1 mg/kg PO q12h × 5-7 วัน</strong>, then taper to lowest effective dose (e.g. 0.25-0.5 mg/kg q24h or q48h)</li>
          <li><strong>Inhaled fluticasone (Flixotide HFA) 110-220 µg q12h via spacer (AeroDawg)</strong> ✨ — preferred for long-term: minimal systemic side effects</li>
          <li>Switch from oral to inhaled after initial control</li>
        </ul>

        <p><strong>2. Bronchodilators</strong></p>
        <ul>
          <li><strong>Theophylline ER 10 mg/kg PO q12h</strong> — anti-inflammatory + mild bronchodilation; therapeutic level 5-20 µg/mL</li>
          <li>Terbutaline 1.25-5 mg/dog PO q8-12h — β2 agonist</li>
          <li>Inhaled albuterol — rescue (acute bronchospasm)</li>
        </ul>

        <p><strong>3. Cough suppression</strong></p>
        <ul>
          <li>Hydrocodone 0.22 mg/kg PO q6-12h — when cough disrupts sleep/quality of life</li>
          <li>Butorphanol 0.5-1 mg/kg PO q6-12h</li>
          <li>Avoid in productive cough (need to clear mucus)</li>
        </ul>

        <p><strong>4. Antibiotics — ONLY if BAL evidence of infection</strong></p>
        <ul>
          <li>Doxycycline 5 mg/kg PO q12h × 2-4 wk (Mycoplasma)</li>
          <li>Culture-guided otherwise</li>
        </ul>

        <p><strong>5. Adjuncts</strong></p>
        <ul>
          <li><strong>Weight loss</strong> ✨ — impactful</li>
          <li>Avoid smoke, dust, perfumes, aerosol cleaners</li>
          <li>Use harness</li>
          <li>Humidification</li>
          <li>Treat concurrent disease (MMVD, tracheal collapse, dental)</li>
          <li>Trial diet change (consider allergic component)</li>
        </ul>

        <p><strong>Refractory cases:</strong></p>
        <ul>
          <li>Cyclosporine 5 mg/kg PO q12-24h (immunomodulator)</li>
          <li>Maropitant 2 mg/kg PO q24h (NK-1 antagonist) — antitussive effect</li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h — neuromodulator for chronic cough</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Clinical recheck q3-6 เดือน</li>
          <li>Repeat rad + BAL ใน worsening</li>
          <li>Theophylline level if used (initially + dose adjustments)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Progressive airway damage / bronchiectasis</li>
          <li>Bronchomalacia — dynamic small airway collapse</li>
          <li>Cor pulmonale (severe chronic disease)</li>
          <li>Acute exacerbations / decompensation</li>
          <li>Secondary bacterial infections</li>
          <li>Chronic glucocorticoid side effects (PU/PD, weight gain, iatrogenic Cushing's, immunosuppression)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Long-term <strong>good</strong> with management — most dogs maintain quality of life for years</li>
          <li>Cure not achievable</li>
          <li>Concurrent severe tracheal collapse / cardiac disease — worse</li>
          <li>Owner compliance + lifestyle modification — biggest predictors</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 21 · Feline Asthma / Bronchitis ---------- */
  {
    id: 'feline-asthma',
    titleEn: 'Feline Asthma / Idiopathic Bronchitis',
    titleTh: 'แมวหอบ — Asthma',
    type: 'disease',
    system: 'respiratory',
    species: ['cat'],
    tags: ['feline asthma', 'allergic bronchitis', 'eosinophilic', 'wheeze', 'bronchoconstriction', 'fluticasone', 'terbutaline', 'albuterol', 'prednisolone'],
    aliases: ['cat asthma', 'allergic bronchitis cat', 'แมวหอบ', 'แมวหายใจไม่ออก'],
    source: 'Ch. 21 · pp. 343–349',
    sections: {
      definition: `
        <p>Inflammatory lower airway disease ในแมว แบ่งเป็น:</p>
        <ul>
          <li><strong>Asthma</strong> = reversible bronchoconstriction + eosinophilic inflammation (allergic in nature)</li>
          <li><strong>Idiopathic chronic bronchitis</strong> = chronic airway inflammation ที่อาจไม่ reversible เต็มที่</li>
          <li>ทั้งคู่เจอบ่อยใน practice และอาการ overlap → รักษาคล้ายกัน</li>
          <li>เด่นใน <strong>young-middle aged cats</strong>; <strong>Siamese over-represented</strong></li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Allergic / hypersensitivity</strong> (asthma) — common allergens:
            <ul>
              <li>Dust mites</li>
              <li>Cat litter (clay, scented)</li>
              <li>Cigarette smoke</li>
              <li>Perfumes, cleaners</li>
              <li>Cooking smoke</li>
              <li>Pollen, mold</li>
              <li>Food allergens (rare)</li>
            </ul>
          </li>
          <li>Idiopathic (chronic bronchitis subtype)</li>
          <li>Mycoplasma — possible co-factor</li>
          <li>Genetic predisposition (Siamese)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Asthma:</strong></p>
        <ul>
          <li>Type I hypersensitivity → bronchoconstriction (smooth muscle spasm)</li>
          <li>Eosinophilic airway inflammation</li>
          <li>Mucus hypersecretion</li>
          <li>Airway remodeling with chronic disease (smooth muscle hypertrophy, fibrosis)</li>
          <li>Reversible component → responds to bronchodilator</li>
        </ul>
        <p><strong>Air trapping:</strong> bronchoconstriction during expiration → hyperinflation → flat diaphragm on rad</p>
      `,
      symptoms: `
        <ul>
          <li><strong>Cough</strong> ✨ — uncommon presentation in cats; almost always lower airway disease! Often misdiagnosed as "hairball" by owners</li>
          <li><strong>Wheeze</strong> — expiratory, audible without stethoscope ใน acute</li>
          <li>Tachypnea, respiratory effort (expiratory phase prolonged)</li>
          <li><strong>"Praying" / orthopneic position</strong> ✨ — sternal recumbency, neck extended, elbows abducted</li>
          <li>Open-mouth breathing — severe distress ✗</li>
          <li>Cyanosis (severe)</li>
          <li>Episodes triggered by allergen exposure, stress</li>
          <li>Between episodes: may appear normal</li>
          <li>Chronic: progressive exercise intolerance</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li><strong>Bronchial pattern</strong> ("donuts + tram lines") ✨</li>
          <li>Hyperinflation: flattened diaphragm, ↑ lucency</li>
          <li>Right middle lobe collapse occasionally (mucus plugging)</li>
          <li>Rad may appear normal between episodes</li>
        </ul>
        <p><strong>BAL / TW (definitive in stable cat):</strong></p>
        <ul>
          <li><strong>Eosinophilic inflammation</strong> &gt; 17% (asthma); neutrophilic = bronchitis subtype</li>
          <li>Mucus, Curschmann's spirals</li>
          <li>Mycoplasma culture/PCR</li>
          <li>⚠️ <strong>Pretreat with bronchodilator</strong> (terbutaline 0.01 mg/kg SC + albuterol inhaled) — cats prone to bronchospasm during procedure</li>
        </ul>
        <p><strong>Workup for cause:</strong></p>
        <ul>
          <li>Heartworm antigen + antibody (HARD: heartworm-associated respiratory disease)</li>
          <li>Fecal Baermann (Aelurostrongylus, Capillaria)</li>
          <li>FeLV/FIV</li>
          <li>CBC: peripheral eosinophilia &lt; 50% sensitive</li>
          <li>Allergy workup if recurrent (intradermal, serology — limited utility)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Heartworm / HARD — endemic area, must test ✗</li>
          <li>Lungworms (Aelurostrongylus abstrusus) — Baermann</li>
          <li>Cardiogenic edema — cats with HCM may present similarly!</li>
          <li>Bacterial / Mycoplasma pneumonia</li>
          <li>Toxoplasmosis</li>
          <li>Pleural effusion</li>
          <li>Neoplasia (pulmonary, mediastinal)</li>
          <li>Foreign body</li>
          <li>Diaphragmatic hernia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute respiratory crisis (status asthmaticus):</strong></p>
        <ul>
          <li><strong>O2 cage</strong> + minimal handling ✨</li>
          <li><strong>Terbutaline 0.01 mg/kg SC/IM</strong> (can repeat in 10-20 min) ✨ — fastest β2 bronchodilator</li>
          <li><strong>Inhaled albuterol</strong> — 1-2 puffs via spacer; can repeat q5-10 min initially</li>
          <li>Dexamethasone 0.5-1 mg/kg IV/IM — fast steroid effect</li>
          <li>Mild sedation if needed (butorphanol 0.2 mg/kg IM) — reduce stress</li>
          <li>Aminophylline 5 mg/kg IM/slow IV — refractory</li>
          <li>Avoid stress, IV catheter only if absolutely needed</li>
        </ul>

        <p><strong>Chronic management — Two pillars:</strong></p>

        <p><strong>1. Glucocorticoids (mainstay)</strong></p>
        <ul>
          <li><strong>Inhaled fluticasone (Flixotide HFA) 110-220 µg q12h via spacer (AeroKat)</strong> ✨ — preferred long-term, minimal systemic effects
            <ul>
              <li>Onset 7-10 days — bridge with oral pred initially</li>
              <li>Excellent compliance with daily routine</li>
              <li>Continue during remission</li>
            </ul>
          </li>
          <li><strong>Prednisolone</strong> (NOT prednisone in cats — ↓ conversion to active form):
            <ul>
              <li>Initial: 1-2 mg/kg PO q12h × 5-7 วัน</li>
              <li>Taper over 3-4 weeks to lowest effective dose</li>
              <li>Use during fluticasone onset OR for refractory cases</li>
              <li>Long-term oral steroid → diabetes, infection, CHF risk in HCM cats</li>
            </ul>
          </li>
          <li>Methylprednisolone acetate 10-20 mg/cat IM q3-4 wk — last resort (depot steroid; long-term DM risk)</li>
        </ul>

        <p><strong>2. Bronchodilators</strong></p>
        <ul>
          <li><strong>Inhaled albuterol</strong> via spacer (AeroKat) — 1-2 puffs PRN for acute symptoms (rescue)</li>
          <li>Theophylline ER 10-15 mg/kg PO q24h (evening dose)</li>
          <li>Terbutaline 0.625-1.25 mg/cat PO q12h</li>
          <li>⚠️ Don't use albuterol as monotherapy daily — may worsen inflammation; always pair with anti-inflammatory</li>
        </ul>

        <p><strong>3. Environmental modification (essential!) ✨</strong></p>
        <ul>
          <li>Remove triggers: smoke, perfumes, aerosols, scented litter</li>
          <li>Use dust-free / silica gel litter</li>
          <li>HEPA air filter</li>
          <li>Avoid dusty cleaning</li>
          <li>Reduce stress</li>
        </ul>

        <p><strong>Adjunctive:</strong></p>
        <ul>
          <li>Cyclosporine 5 mg/kg PO q12-24h — refractory; immunomodulator</li>
          <li>Antibiotics (doxycycline) ONLY if Mycoplasma/bacterial co-infection confirmed</li>
          <li>Trial elimination diet (food allergy component)</li>
          <li>Heartworm prevention monthly (endemic areas)</li>
        </ul>

        <p><strong>Spacer training:</strong> introduce gradually with positive reinforcement, treats; cats adapt within 2-4 weeks</p>
      `,
      complications: `
        <ul>
          <li><strong>Status asthmaticus / respiratory failure</strong> ✗</li>
          <li>Pneumothorax (severe air trapping → bleb rupture)</li>
          <li>Right middle lobe atelectasis</li>
          <li>Cor pulmonale (chronic severe)</li>
          <li>Iatrogenic Cushing's, diabetes from chronic systemic steroids</li>
          <li>Bacterial pneumonia (immunosuppression)</li>
          <li>Sudden death</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Good with proper management</strong> ✓ — most cats live normal lifespan</li>
          <li>Most respond well to fluticasone + environmental changes</li>
          <li>Lifelong condition — no cure</li>
          <li>Severe acute crises preventable with daily prophylaxis</li>
        </ul>
        <div class="callout">💡 <strong>Spacer + MDI revolutionized feline asthma management</strong> — counseling owners that this is similar to human asthma + showing them training videos improves compliance dramatically</div>
      `,
    },
  },

  /* ---------- Ch 22 · Bacterial Pneumonia ---------- */
  {
    id: 'bacterial-pneumonia',
    titleEn: 'Bacterial Pneumonia',
    titleTh: 'ปอดบวมจากเชื้อแบคทีเรีย',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['pneumonia', 'aspiration pneumonia', 'Bordetella', 'E. coli', 'Klebsiella', 'amoxicillin clavulanate', 'enrofloxacin', 'BAL'],
    aliases: ['pneumonia', 'aspiration pneumonia', 'ปอดอักเสบ', 'ปอดบวม'],
    source: 'Ch. 22 · pp. 339–344',
    sections: {
      definition: `
        <p>Inflammation + infection ของ pulmonary parenchyma จาก bacteria ± aspiration of foreign material</p>
        <ul>
          <li>เจอบ่อยในหมา > แมว</li>
          <li>มัก secondary to <strong>aspiration</strong> หรือ <strong>defective host defense</strong></li>
          <li>Common predisposing causes: laryngeal paralysis, megaesophagus, BOAS, post-anesthesia, immunosuppression</li>
        </ul>
      `,
      etiology: `
        <p><strong>Bacterial agents:</strong></p>
        <ul>
          <li><strong>Bordetella bronchiseptica</strong> — primary pathogen</li>
          <li><em>Streptococcus equi zooepidemicus</em> — severe, fatal</li>
          <li><em>E. coli</em>, Klebsiella, Pseudomonas, Pasteurella — opportunistic</li>
          <li><em>Mycoplasma cynos / felis</em></li>
          <li>Anaerobes (esp. aspiration): Bacteroides, Fusobacterium</li>
          <li>Mixed infections common</li>
        </ul>
        <p><strong>Predisposing factors:</strong></p>
        <ul>
          <li>Aspiration: megaesophagus, regurgitation, laryngeal paralysis, anesthesia, seizures, vomiting</li>
          <li>Impaired clearance: ciliary dyskinesia, BOAS, chronic bronchitis</li>
          <li>Immunosuppression: chemo, steroids, FeLV/FIV, very young/old</li>
          <li>Concurrent viral infection (CIRDC, distemper, FHV)</li>
          <li>Post-thoracic surgery, indwelling ETT/tracheostomy</li>
          <li>Foreign body</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Bacterial colonization → inflammation + exudate filling alveoli</li>
          <li>Lobar consolidation pattern (cranioventral lung lobes most often — gravity dependent)</li>
          <li>↓ V/Q matching → hypoxemia</li>
          <li>Pyrexia, systemic inflammatory response</li>
          <li>Severe: SIRS, sepsis, ARDS</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Productive cough</strong> ✨ — soft, moist (sometimes absent in cats)</li>
          <li>Tachypnea, dyspnea, exercise intolerance</li>
          <li><strong>Fever</strong> &gt; 39.5°C</li>
          <li>Lethargy, anorexia, depression</li>
          <li>Mucopurulent nasal discharge sometimes</li>
          <li>Auscultation: <strong>crackles</strong> ± wheezes; lung sounds may be absent if lobe consolidated</li>
          <li>Tachycardia</li>
          <li>Cyanosis (severe)</li>
          <li>Cats may show only nonspecific lethargy/anorexia + tachypnea (subtle!)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Thoracic rad (3 views):</strong></p>
        <ul>
          <li><strong>Alveolar pattern with air bronchograms</strong> ✨</li>
          <li>Lobar distribution: cranioventral predominance (aspiration), right middle lobe most common</li>
          <li>Diffuse pattern in severe / hematogenous</li>
          <li>Pleural effusion possible (severe)</li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>CBC: neutrophilia + left shift; sometimes leukopenia in sepsis (poor prognostic)</li>
          <li>Biochem, electrolytes</li>
          <li>Pulse ox / blood gas — assess hypoxemia severity</li>
          <li>Blood culture — sepsis</li>
        </ul>
        <p><strong>Tracheal wash / BAL (essential):</strong></p>
        <ul>
          <li>Cytology: septic neutrophilic inflammation, intracellular bacteria</li>
          <li><strong>Aerobic + anaerobic culture + sensitivity</strong> ✨ — guide antibiotic choice</li>
          <li>Mycoplasma culture/PCR</li>
          <li>Gram stain — early guidance</li>
        </ul>
        <p><strong>Workup for predisposing cause:</strong></p>
        <ul>
          <li>Esophagram / fluoroscopy — megaesophagus, aspiration source</li>
          <li>Laryngoscopy — laryngeal paralysis</li>
          <li>Acetylcholine receptor antibody — myasthenia</li>
          <li>Heartworm test, fecal Baermann</li>
          <li>FeLV/FIV in cats</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Cardiogenic pulmonary edema</li>
          <li>Non-cardiogenic edema (ARDS, neurogenic, electrocution)</li>
          <li>Hemorrhage (PTE, neoplasia, trauma, coagulopathy)</li>
          <li>Eosinophilic bronchopneumopathy</li>
          <li>Fungal pneumonia</li>
          <li>Pulmonary parasites</li>
          <li>Atelectasis</li>
          <li>Neoplasia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Antibiotics — empirical, then culture-guided</strong></p>
        <p><strong>Mild cases (outpatient):</strong></p>
        <ul>
          <li><strong>Doxycycline 5 mg/kg PO q12h × 14-21 days</strong> — first-line for suspected Bordetella/Mycoplasma ✓</li>
          <li>Amoxicillin-clavulanate 12.5 mg/kg PO q12h</li>
          <li>Cefpodoxime 5-10 mg/kg PO q24h</li>
        </ul>
        <p><strong>Moderate-severe (hospitalized):</strong></p>
        <ul>
          <li><strong>Ampicillin 22 mg/kg IV q8h + enrofloxacin 5-20 mg/kg IV q24h</strong> ✨ — empirical broad coverage</li>
          <li>Or ampicillin-sulbactam 30 mg/kg IV q8h + fluoroquinolone</li>
          <li>Add metronidazole 10 mg/kg IV q12h if anaerobes suspected (aspiration)</li>
          <li>Cats: avoid enrofloxacin &gt; 5 mg/kg/day (retinal toxicity); use marbofloxacin or pradofloxacin</li>
          <li>Carbapenems (imipenem, meropenem) — multidrug-resistant cases</li>
          <li>Switch to PO when stable (typically 2-4 days IV)</li>
          <li>Total duration: <strong>1-2 weeks past clinical + radiographic resolution</strong> (often 4-6 weeks total)</li>
        </ul>

        <p><strong>Supportive care:</strong></p>
        <ul>
          <li><strong>O2 supplementation</strong> — SpO2 &lt; 93% or PaO2 &lt; 80 mmHg</li>
          <li>IV fluids — maintain hydration (helps mucociliary clearance), avoid overhydration</li>
          <li>Nebulization with sterile saline 0.9% × 15-20 min q6-12h via small particle nebulizer (deep airway moisture)</li>
          <li><strong>Coupage (chest physiotherapy)</strong> after nebulization × 5-10 min — mobilize secretions</li>
          <li>Bronchodilators (cats especially): terbutaline, theophylline</li>
          <li>Nutritional support — appetite stimulants (mirtazapine, capromorelin)</li>
          <li>Anti-emetics if vomiting</li>
        </ul>

        <p><strong>Avoid:</strong></p>
        <ul>
          <li><strong>Cough suppressants</strong> ✗ — need to clear mucus</li>
          <li><strong>Glucocorticoids</strong> ✗ — relatively contraindicated; reserve for severe ARDS-like syndrome</li>
          <li>Diuretics (unless concurrent CHF)</li>
        </ul>

        <p><strong>Treat predisposing cause:</strong></p>
        <ul>
          <li>Megaesophagus: upright feeding (Bailey chair), small frequent meals, slurry consistency, treat MG if positive</li>
          <li>Laryngeal paralysis: surgery (tieback)</li>
          <li>BOAS: surgical correction</li>
          <li>Foreign body: bronchoscopic removal</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Clinical signs (RR, effort, attitude, appetite) twice daily</li>
          <li>Recheck thoracic rad q3-7 days initially, then q2-3 wk</li>
          <li>CBC q3-5 days</li>
          <li>SpO2 / blood gas as indicated</li>
          <li>Discontinue antibiotics 1-2 wk past resolution</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Sepsis / SIRS / septic shock ✗</li>
          <li>ARDS — severe pulmonary failure, mortality high</li>
          <li>Pulmonary abscess — focal lesion; prolonged antibiotics ± lobectomy</li>
          <li>Pleural effusion / pyothorax</li>
          <li>Bronchiectasis (chronic damage)</li>
          <li>Recurrent pneumonia (untreated predisposing cause)</li>
          <li>Multidrug resistance with prolonged/inappropriate antibiotic use</li>
          <li>Death — esp. very young, geriatric, immunocompromised, S. zooepidemicus</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Healthy adult, treated promptly: <strong>good</strong></li>
          <li>Aspiration with persistent cause (megaesophagus): guarded, recurrent</li>
          <li>Sepsis / multilobar / ARDS: guarded — mortality 20-50%</li>
          <li>S. zooepidemicus pneumonia: poor</li>
          <li>Predisposing factor controllable (BOAS surgery) → much better</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 22 · Eosinophilic Bronchopneumopathy ---------- */
  {
    id: 'eosinophilic-bronchopneumopathy',
    titleEn: 'Eosinophilic Bronchopneumopathy (EBP)',
    titleTh: 'EBP — โรคปอดอีโอซิโนฟิลิก',
    type: 'disease',
    system: 'respiratory',
    species: ['dog'],
    tags: ['EBP', 'PIE', 'pulmonary infiltrates with eosinophils', 'eosinophilic pneumonia', 'allergic', 'prednisone', 'cyclosporine'],
    aliases: ['PIE', 'pulmonary infiltrates eosinophils', 'eosinophilic pneumonia'],
    source: 'Ch. 22 · pp. 346–349',
    sections: {
      definition: `
        <p>Hypersensitivity / allergic-type inflammation ของ bronchi + pulmonary parenchyma — eosinophilic infiltrate predominant</p>
        <ul>
          <li>เจอใน <strong>young to middle-aged dogs</strong>, often <strong>large breeds</strong> (Husky, Malamute, Rottweiler, Lab)</li>
          <li>ในแมว: subset ของ feline asthma (eosinophilic bronchitis)</li>
          <li>Eosinophilic granulomatosis = severe nodular variant</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Idiopathic / allergic</strong> — most common</li>
          <li>Inhaled allergens: pollens, mold, dust mites</li>
          <li>Drugs (rare)</li>
          <li>Heartworm disease — strongly associated with eosinophilic granulomatosis ✨</li>
          <li>Pulmonary parasites: Aelurostrongylus (cat), Crenosoma, Oslerus, Filaroides — must rule out!</li>
          <li>Bacterial / fungal antigens (occasional)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Type I and III hypersensitivity → eosinophil recruitment</li>
          <li>Eosinophil mediators (major basic protein, eosinophil cationic protein) → tissue damage</li>
          <li>Bronchial inflammation, mucus hypersecretion, ± parenchymal infiltrates</li>
          <li>Variants:
            <ul>
              <li><em>EBP / PIE</em>: bronchitis-predominant</li>
              <li><em>Eosinophilic pneumonia</em>: parenchymal infiltrate</li>
              <li><em>Eosinophilic granulomatosis</em>: nodular masses ± hilar lymphadenopathy (severe, must differentiate from neoplasia, fungal)</li>
            </ul>
          </li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic cough</strong> — often productive, gagging, retching</li>
          <li>Exercise intolerance</li>
          <li>Wheeze, harsh lung sounds</li>
          <li>Tachypnea, dyspnea (severe)</li>
          <li>Mild systemic illness — anorexia, weight loss, fever</li>
          <li>Nasal discharge sometimes (concurrent rhinitis)</li>
          <li>"Off-and-on" cough — episodic</li>
          <li>Eosinophilic granulomatosis: more severe systemic illness, mass effect, cachexia</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li>Bronchointerstitial pattern (severe)</li>
          <li>Focal alveolar infiltrates</li>
          <li>Eosinophilic granulomatosis: nodular/mass lesions, hilar lymphadenopathy ⚠️ — easily mistaken for neoplasia</li>
        </ul>
        <p><strong>BAL / TW (definitive):</strong></p>
        <ul>
          <li><strong>Eosinophilic inflammation &gt; 20%</strong> ✨ (normal &lt; 5%)</li>
          <li>Mucus, mixed cells</li>
          <li>Cultures: usually negative</li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>Peripheral eosinophilia ~50-60% (not always present)</li>
          <li>Hyperglobulinemia</li>
        </ul>
        <p><strong>Rule out (essential):</strong></p>
        <ul>
          <li><strong>Heartworm</strong> antigen + microfilaria ✗</li>
          <li><strong>Fecal Baermann × 3 days</strong> — pulmonary parasites</li>
          <li>Fungal serology / antigen (if endemic)</li>
          <li>Bacterial culture of BAL</li>
        </ul>
        <p><strong>For granulomatosis:</strong> CT, biopsy via bronchoscopy or thoracoscopy — differentiate from neoplasia, fungal granuloma</p>
      `,
      differential: `
        <ul>
          <li>Heartworm disease (antigen test!)</li>
          <li>Pulmonary parasites</li>
          <li>Allergic / chronic bronchitis</li>
          <li>Fungal pneumonia (Blastomyces, Histoplasma, Coccidioides — endemic)</li>
          <li>Pulmonary neoplasia (esp. for granulomatosis form)</li>
          <li>Bacterial pneumonia (septic neutrophilic on cytology)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Identify + remove allergen if possible</strong></p>

        <p><strong>1. Glucocorticoids (mainstay) ✨</strong></p>
        <ul>
          <li><strong>Prednisone 1-2 mg/kg PO q12h × 1-2 wk</strong></li>
          <li>Taper gradually over 2-3 months to lowest effective dose (often 0.25-0.5 mg/kg q48h)</li>
          <li>Most dogs respond rapidly (days)</li>
          <li>Switch to inhaled fluticasone for long-term ในเคสที่ตอบสนองดี</li>
          <li>Some dogs need lifelong low-dose</li>
        </ul>

        <p><strong>2. Refractory / steroid-sparing</strong></p>
        <ul>
          <li>Cyclosporine 5 mg/kg PO q12h</li>
          <li>Azathioprine 2 mg/kg PO q24h × 7-14 d, then q48h (dogs only — toxic in cats)</li>
        </ul>

        <p><strong>3. Adjunctive</strong></p>
        <ul>
          <li>Bronchodilators (theophylline, terbutaline) — bronchospasm component</li>
          <li>Antihistamines — mostly ineffective</li>
          <li>Avoid known triggers</li>
          <li>Heartworm preventive</li>
          <li>Empirical anthelmintic trial (fenbendazole 50 mg/kg PO q24h × 14 d, ivermectin) ในเคสที่สงสัย parasite</li>
        </ul>

        <p><strong>Eosinophilic granulomatosis:</strong></p>
        <ul>
          <li>More aggressive — high-dose pred + cyclosporine</li>
          <li>Heartworm preventive + adulticide if HW+</li>
          <li>Surgical excision rarely possible</li>
          <li>Worse prognosis</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Recurrent flares</li>
          <li>Steroid side effects (PU/PD, weight gain, diabetes, infection)</li>
          <li>Bronchiectasis (chronic damage)</li>
          <li>Eosinophilic granulomatosis: progressive, may not respond well</li>
          <li>Misdiagnosis as neoplasia / fungal (granulomatous form)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>EBP / PIE: <strong>good</strong> with steroid response, often manageable long-term</li>
          <li>Most dogs have good quality of life</li>
          <li>Eosinophilic granulomatosis: guarded — variable response, may progress</li>
          <li>Heartworm-associated: depends on HW resolution</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 22 · Idiopathic Pulmonary Fibrosis (IPF) ---------- */
  {
    id: 'pulmonary-fibrosis',
    titleEn: 'Idiopathic Pulmonary Fibrosis (IPF)',
    titleTh: 'พังผืดในปอด — Westie Lung',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['IPF', 'pulmonary fibrosis', 'Westie lung', 'West Highland White Terrier', 'sildenafil', 'pirfenidone', 'crackles', 'restrictive'],
    aliases: ['Westie lung disease', 'pulmonary fibrosis', 'พังผืดปอด', 'IPF'],
    source: 'Ch. 22 · pp. 350–351',
    sections: {
      definition: `
        <p>Progressive, idiopathic <strong>interstitial fibrosis</strong> ของ pulmonary parenchyma — irreversible</p>
        <ul>
          <li><strong>West Highland White Terrier</strong> เด่นมาก ("Westie lung") ✨</li>
          <li>อื่นๆ: Cairn Terrier, Yorkie, Schipperke, Staffordshire Bull Terrier; cats rare (genetic)</li>
          <li>Middle-aged to older (mean ~ 9 years)</li>
          <li>No cure — palliative care</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Idiopathic</strong> — unknown cause</li>
          <li>Genetic predisposition strong (Westie)</li>
          <li>Postulated triggers: chronic injury (GERD, chronic infection, environmental), aberrant wound healing</li>
          <li>Some cases secondary to: drugs (bleomycin), radiation, hypersensitivity pneumonitis</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Aberrant alveolar epithelial cell repair → fibroblast/myofibroblast proliferation</li>
          <li>Excessive collagen deposition in interstitium</li>
          <li>Loss of alveolar architecture → ↓ gas exchange</li>
          <li><strong>Restrictive lung disease</strong> — ↓ compliance, ↓ lung volume</li>
          <li>Hypoxemia — V/Q mismatch + diffusion impairment</li>
          <li>Secondary <strong>pulmonary hypertension</strong> → cor pulmonale (right CHF)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Progressive exercise intolerance</strong> over months-years</li>
          <li>Tachypnea even at rest (late stage)</li>
          <li>Dry cough (less prominent than tracheal collapse)</li>
          <li>Cyanosis with exertion → at rest (advanced)</li>
          <li>Syncope</li>
          <li>Right CHF signs: ascites, JVD (advanced, secondary PH)</li>
          <li>Auscultation: <strong>fine end-inspiratory crackles "Velcro-like"</strong> ✨ — characteristic</li>
          <li>Increased respiratory effort (restrictive pattern — rapid shallow)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li>Diffuse interstitial pattern, sometimes nodular</li>
          <li>Reticular markings</li>
          <li>Honeycomb appearance (advanced, late)</li>
          <li>± PA enlargement (PH)</li>
          <li>Often subtle — easy to miss</li>
        </ul>
        <p><strong>HRCT (high-resolution CT) — preferred:</strong></p>
        <ul>
          <li>Ground-glass opacities</li>
          <li>Reticulation, traction bronchiectasis</li>
          <li>Honeycombing in advanced cases</li>
          <li>Subpleural + basal distribution</li>
        </ul>
        <p><strong>Echocardiography:</strong></p>
        <ul>
          <li>Estimate PA pressure (TR jet velocity)</li>
          <li>RV hypertrophy/dilation in advanced cases</li>
          <li>Rule out cardiogenic cause</li>
        </ul>
        <p><strong>BAL:</strong></p>
        <ul>
          <li>Mixed inflammation, sometimes near-normal</li>
          <li>Rule out infection, eosinophilic disease</li>
          <li>Cytology not diagnostic for IPF</li>
        </ul>
        <p><strong>Lung biopsy (definitive):</strong></p>
        <ul>
          <li>Surgical biopsy (thoracoscopy / mini-thoracotomy)</li>
          <li>Histopath: usual interstitial pneumonia (UIP) pattern, fibrosis, fibroblastic foci</li>
          <li>มัก declined due to risk + cost — clinical diagnosis usually accepted</li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>Pulse ox / arterial blood gas — hypoxemia</li>
          <li>CBC, biochem usually normal</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Chronic bronchitis</li>
          <li>Eosinophilic bronchopneumopathy</li>
          <li>Bronchopneumonia</li>
          <li>Pulmonary edema (cardiogenic)</li>
          <li>Pulmonary metastasis</li>
          <li>Lymphangiectasia</li>
          <li>Pulmonary thromboembolism</li>
          <li>Hypersensitivity pneumonitis</li>
        </ul>
      `,
      treatment: `
        <p><strong>No definitive treatment — palliative care</strong></p>
        <ul>
          <li>Manage symptoms + comorbidities</li>
          <li>Slow progression where possible</li>
          <li>Maintain quality of life</li>
        </ul>

        <p><strong>1. Pulmonary hypertension (very common, treatable component) ✨</strong></p>
        <ul>
          <li><strong>Sildenafil 1-3 mg/kg PO q8-12h</strong> ✨ — most impactful intervention; ↑ exercise tolerance + survival</li>
          <li>Tadalafil 1-2 mg/kg PO q24h — alternative</li>
        </ul>

        <p><strong>2. Anti-fibrotic (limited evidence in vet med)</strong></p>
        <ul>
          <li>Pirfenidone — used in human IPF; small case reports in dogs</li>
          <li>Nintedanib — investigational</li>
          <li>N-acetylcysteine 70 mg/kg PO q8-12h — antioxidant, may slow progression (limited evidence)</li>
        </ul>

        <p><strong>3. Glucocorticoids — controversial</strong></p>
        <ul>
          <li>Prednisone 0.5-1 mg/kg PO q12h short course for acute exacerbation</li>
          <li>Long-term: limited benefit, side effects predominate</li>
          <li>Inhaled fluticasone for cough symptom control</li>
        </ul>

        <p><strong>4. Bronchodilators</strong></p>
        <ul>
          <li>Theophylline ER 10 mg/kg PO q12h — for concurrent bronchitis</li>
          <li>Inhaled albuterol PRN</li>
        </ul>

        <p><strong>5. Cough suppression</strong></p>
        <ul>
          <li>Hydrocodone 0.22 mg/kg PO q6-12h</li>
          <li>Butorphanol</li>
          <li>Maropitant, gabapentin (chronic refractory)</li>
        </ul>

        <p><strong>6. Supportive</strong></p>
        <ul>
          <li>Weight loss</li>
          <li>Avoid heat, exertion, stress</li>
          <li>Cool environment</li>
          <li>Oxygen at home (severe — concentrator) for end-stage</li>
          <li>Treat right CHF (furosemide carefully — preload sensitive)</li>
          <li>Antibiotics ONLY if secondary infection documented</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Recheck q3-6 months — RR, exercise tolerance, weight</li>
          <li>Pulse ox</li>
          <li>Echo for PH progression</li>
          <li>Adjust palliative meds as needed</li>
        </ul>

        <p><strong>End-of-life:</strong></p>
        <ul>
          <li>Honest conversation with owners early — quality of life decisions</li>
          <li>Hospice / palliative</li>
          <li>Euthanasia when severe distress, refractory hypoxemia</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pulmonary hypertension → cor pulmonale</strong> ✗</li>
          <li>Acute exacerbation — rapid worsening over weeks</li>
          <li>Secondary bacterial pneumonia</li>
          <li>Pneumothorax (rare; bullae rupture)</li>
          <li>Severe hypoxemia, syncope, collapse</li>
          <li>Death from respiratory failure</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Median survival from diagnosis: 8-18 months</strong> in Westies</li>
          <li>With sildenafil for PH: prolonged + better quality of life ✨</li>
          <li>Slowly progressive but ultimately fatal</li>
          <li>Acute exacerbation: poor — high mortality</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 23 · Pulmonary Thromboembolism (PTE) ---------- */
  {
    id: 'pulmonary-thromboembolism',
    titleEn: 'Pulmonary Thromboembolism (PTE)',
    titleTh: 'PTE — ลิ่มเลือดอุดในปอด',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['PTE', 'pulmonary embolism', 'IMHA', 'protein-losing nephropathy', 'hyperadrenocorticism', 'D-dimer', 'rivaroxaban', 'clopidogrel'],
    aliases: ['pulmonary embolism', 'ลิ่มเลือดในปอด'],
    source: 'Ch. 23 · pp. 367–370',
    sections: {
      definition: `
        <p>Thrombus / embolus อุดตัน pulmonary arteries → V/Q mismatch + acute respiratory distress</p>
        <ul>
          <li>Underdiagnosed — ต้อง high index of suspicion</li>
          <li>Acute, severe — high mortality if missed</li>
          <li>มัก secondary to underlying pro-thrombotic disease</li>
        </ul>
      `,
      etiology: `
        <p><strong>Predisposing diseases (Virchow's triad):</strong></p>
        <ul>
          <li><strong>IMHA</strong> ✨ — most common in dogs (40-50% develop PTE)</li>
          <li><strong>Protein-losing nephropathy (PLN, glomerular dz)</strong> — antithrombin loss</li>
          <li><strong>Hyperadrenocorticism (Cushing's)</strong></li>
          <li>Heartworm disease</li>
          <li>Neoplasia (especially carcinoma, hemangiosarcoma)</li>
          <li>Sepsis / DIC</li>
          <li>Cardiac disease (uncommon in dogs; HCM in cats)</li>
          <li>Pancreatitis, severe inflammatory disease</li>
          <li>Recent surgery, prolonged recumbency</li>
          <li>IV catheter, indwelling lines</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Thrombus (lower extremity DVT, cardiac, hepatic) → embolize to pulmonary arteries</li>
          <li>Mechanical obstruction → V/Q mismatch → hypoxemia</li>
          <li>Vasoactive substance release → bronchoconstriction, vasoconstriction</li>
          <li>Acute right heart strain → ↓ CO, ↑ PA pressure</li>
          <li>Chronic / recurrent: pulmonary hypertension</li>
          <li>Lung infarction uncommon (rich collateral circulation)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Acute respiratory distress</strong> ✗ — sudden onset!</li>
          <li>Severe tachypnea, dyspnea</li>
          <li>Cyanosis</li>
          <li>Hemoptysis (rare)</li>
          <li>Cough, exercise intolerance</li>
          <li>Syncope, collapse</li>
          <li>Tachycardia</li>
          <li>Auscultation: often unremarkable; sometimes pulmonary crackles, split S2 (PH)</li>
          <li>Underlying disease signs</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnosis is challenging — high suspicion + supportive findings</strong></p>
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li>Often <strong>discordance between severe clinical signs + minimal radiographic abnormalities</strong> ✨ — classic finding</li>
          <li>Possible findings:
            <ul>
              <li>Hyperlucent lung region (oligemia, "Westermark sign" — rare)</li>
              <li>Truncated / blunted PA</li>
              <li>RV enlargement, PA dilation</li>
              <li>Wedge-shaped peripheral opacity (infarct, rare)</li>
              <li>Pleural effusion (small amounts)</li>
              <li>Generalized interstitial pattern</li>
            </ul>
          </li>
        </ul>
        <p><strong>Pulse ox / arterial blood gas:</strong></p>
        <ul>
          <li>Hypoxemia + hypocapnia (hyperventilation)</li>
          <li>Widened A-a gradient ✨</li>
          <li>SpO2 disproportionately low for radiographic findings</li>
        </ul>
        <p><strong>Echocardiography:</strong></p>
        <ul>
          <li>RV dilation, septal flattening (acute strain)</li>
          <li>Estimate PA pressure (TR jet)</li>
          <li>Visible thrombus (rare; large clot in main PA)</li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li><strong>D-dimer</strong> — sensitive but not specific (elevated in many conditions); negative makes PTE unlikely</li>
          <li>Thromboelastography (TEG) — hypercoagulability</li>
          <li>CBC: thrombocytopenia, anemia (IMHA), schistocytes</li>
          <li>Biochem, UPC (PLN)</li>
          <li>ACTH stim / LDDS (Cushing's)</li>
          <li>Heartworm test</li>
          <li>Coag panel: AT level, fibrinogen</li>
        </ul>
        <p><strong>Definitive imaging:</strong></p>
        <ul>
          <li><strong>CT pulmonary angiography</strong> ✨ — gold standard; shows filling defects in PA</li>
          <li>V/Q scintigraphy — alternative</li>
          <li>Conventional angiography — historical</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Cardiogenic pulmonary edema</li>
          <li>ARDS / non-cardiogenic edema</li>
          <li>Pneumonia</li>
          <li>Hemorrhage (rodenticide, neoplasia)</li>
          <li>Pleural effusion</li>
          <li>Pneumothorax</li>
          <li>Pulmonary hypertension (other causes)</li>
          <li>Asthma (cat)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute stabilization:</strong></p>
        <ul>
          <li><strong>O2 supplementation</strong> — high concentration ✨</li>
          <li>IV fluids — careful; avoid overload</li>
          <li>Cage rest, minimal stress</li>
          <li>Bronchodilator (terbutaline) for bronchospasm component</li>
        </ul>

        <p><strong>Anticoagulation (mainstay):</strong></p>
        <ul>
          <li><strong>Acute:</strong>
            <ul>
              <li>Unfractionated heparin 100-300 IU/kg IV bolus, then 200-300 IU/kg SC q6-8h or CRI 600-800 IU/kg/day — adjust by aPTT (1.5-2× baseline)</li>
              <li>OR Enoxaparin (LMWH) 1-1.5 mg/kg SC q12h — easier monitoring</li>
              <li>Dalteparin 50-100 IU/kg SC q12h</li>
            </ul>
          </li>
          <li><strong>Chronic / outpatient:</strong>
            <ul>
              <li><strong>Rivaroxaban 0.5-1 mg/kg PO q24h (dog), 2.5 mg/cat PO q24h</strong> ✨ — direct factor Xa inhibitor; convenient PO; no monitoring needed</li>
              <li>Apixaban 0.625 mg/cat PO q12h (cats)</li>
              <li>Clopidogrel 2-4 mg/kg PO q24h (dog); 18.75 mg/cat q24h — antiplatelet adjunct</li>
              <li>Warfarin — historic; difficult monitoring (PT/INR)</li>
              <li>Aspirin 0.5-1 mg/kg PO q24h (dog); 81 mg/cat q72h — weak antiplatelet</li>
            </ul>
          </li>
          <li>Duration: at least 4-6 wk past resolution of underlying cause; lifelong if persistent risk</li>
        </ul>

        <p><strong>Thrombolytic therapy (controversial, rarely used):</strong></p>
        <ul>
          <li>tPA, streptokinase — high risk of fatal hemorrhage</li>
          <li>Reserved for life-threatening cases at referral centers</li>
        </ul>

        <p><strong>Treat underlying cause:</strong></p>
        <ul>
          <li>IMHA: immunosuppression (prednisone + azathioprine/cyclosporine)</li>
          <li>PLN: ACEI/ARB, low-dose aspirin</li>
          <li>Cushing's: trilostane / mitotane</li>
          <li>Heartworm adulticide</li>
          <li>Cancer: appropriate therapy</li>
        </ul>

        <p><strong>PH management:</strong></p>
        <ul>
          <li>Sildenafil 1-3 mg/kg PO q8-12h — reduce PA pressure</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Clinical signs, RR, effort, exercise tolerance</li>
          <li>aPTT (heparin), anti-Xa (LMWH)</li>
          <li>CBC weekly initially (thrombocytopenia, hemorrhage)</li>
          <li>Echo for PH</li>
          <li>Imaging of underlying cause</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Death from acute respiratory failure</strong> ✗ — high mortality (~30-50%)</li>
          <li>Recurrent PTE (without anticoagulation)</li>
          <li>Chronic PH → cor pulmonale</li>
          <li>Hemorrhage from anticoagulation (GI, urinary)</li>
          <li>Underlying disease progression</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Acute massive PTE: <strong>poor</strong> — high mortality</li>
          <li>Diagnosed + treated promptly: variable — depends on underlying disease</li>
          <li>IMHA-associated PTE: 30-day mortality up to 50%</li>
          <li>Resolved underlying disease + anticoagulation: survival possible</li>
          <li>Chronic recurrent: PH development, guarded</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 24 · Pleural Effusion ---------- */
  {
    id: 'pleural-effusion',
    titleEn: 'Pleural Effusion (Chylothorax / Pyothorax)',
    titleTh: 'น้ำในช่องเยื่อหุ้มปอด',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['pleural effusion', 'chylothorax', 'pyothorax', 'transudate', 'exudate', 'thoracocentesis', 'rutin', 'thoracic duct ligation'],
    aliases: ['chylothorax', 'pyothorax', 'น้ำในปอด', 'น้ำในช่องอก'],
    source: 'Ch. 24 · pp. 371–380',
    sections: {
      definition: `
        <p>การสะสมของของเหลวใน <strong>pleural space</strong> → restrictive ventilation → respiratory distress</p>
        <ul>
          <li>Cat &gt; dog (อาจเพราะ HCM-related effusion เจอบ่อย)</li>
          <li>แบ่งตาม fluid type — transudate, modified transudate, exudate, chyle, hemorrhage</li>
          <li>Always identify underlying cause — drainage alone ไม่พอ ✗</li>
        </ul>
      `,
      etiology: `
        <p><strong>By fluid classification:</strong></p>
        <ul>
          <li><strong>Pure transudate</strong> (TP &lt; 2.5, cells &lt; 1500/µL):
            <ul>
              <li>Hypoalbuminemia (PLE, PLN, hepatic failure) — albumin &lt; 1.5 g/dL</li>
            </ul>
          </li>
          <li><strong>Modified transudate</strong> (TP 2.5-5, cells 1000-7000/µL):
            <ul>
              <li>CHF (right-sided) ✨</li>
              <li>Neoplasia (mediastinal, pulmonary)</li>
              <li>Diaphragmatic hernia</li>
              <li>Lung lobe torsion</li>
              <li>Pericardial disease</li>
            </ul>
          </li>
          <li><strong>Exudate</strong> (TP &gt; 3, cells &gt; 7000/µL):
            <ul>
              <li><strong>Pyothorax</strong> ✗ — septic exudate</li>
              <li>FIP (cat) — non-septic, viscous, yellow ✨</li>
              <li>Neoplasia</li>
              <li>Sterile pleuritis</li>
            </ul>
          </li>
          <li><strong>Chylothorax</strong>:
            <ul>
              <li>Idiopathic (most common in cats)</li>
              <li>Cardiac disease (cat HCM, pericardial effusion)</li>
              <li>Mediastinal mass / lymphoma</li>
              <li>Trauma to thoracic duct</li>
              <li>Heartworm</li>
              <li>Lung lobe torsion</li>
            </ul>
          </li>
          <li><strong>Hemothorax</strong>:
            <ul>
              <li>Trauma</li>
              <li>Coagulopathy (rodenticide!)</li>
              <li>Neoplasia (HSA, mediastinal)</li>
              <li>Lung lobe torsion</li>
            </ul>
          </li>
        </ul>
        <p><strong>Pyothorax pathogens:</strong></p>
        <ul>
          <li>Cats: <em>Pasteurella, Bacteroides, Fusobacterium, Peptostreptococcus, Actinomyces</em> — bite wound origin common</li>
          <li>Dogs: mixed aerobic + anaerobic; <em>Actinomyces, Nocardia</em>, Pasteurella, E. coli; grass awn migration possible</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Fluid in pleural space → ↓ lung expansion → restrictive ventilation</li>
          <li>Tachypnea + shallow breathing</li>
          <li>Severe → hypoxemia, respiratory failure</li>
          <li>Bilateral fluid distribution typical (mediastinum incomplete in dog/cat)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Tachypnea, dyspnea</strong> — restrictive pattern (rapid shallow)</li>
          <li>Open-mouth breathing (cat — severe distress) ✗</li>
          <li>Cyanosis</li>
          <li>Exercise intolerance</li>
          <li>Cough (occasional)</li>
          <li>Auscultation: <strong>muffled lung sounds ventrally, normal/loud dorsally</strong> ✨</li>
          <li>Percussion: dull ventrally</li>
          <li>↓ Compressibility of cranial thorax (mediastinal mass — esp. cat lymphoma)</li>
          <li>Pyothorax: fever, lethargy, anorexia, weight loss</li>
          <li>Chylothorax: chronic, may be subtle</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>POCUS / TFAST</strong> ✨ — quick, safe in dyspneic patient; identify fluid before rad</li>
          <li>Thoracic rad: ventral fluid line, fissure lines, lobar shadows, scalloped lung edges, widened mediastinum
            <ul>
              <li>⚠️ <strong>Stabilize + drain before extensive imaging</strong> ✗ — dyspneic patients can decompensate</li>
            </ul>
          </li>
          <li>Repeat rad post-thoracocentesis to assess underlying disease</li>
          <li>Echocardiography — cardiac causes</li>
          <li>CT (after stabilization) — mediastinal masses, lung pathology</li>
        </ul>
        <p><strong>Thoracocentesis (diagnostic + therapeutic):</strong></p>
        <ul>
          <li>Sample for analysis: EDTA tube + plain tube + culture tube</li>
          <li>Fluid analysis: TP, cell count, cytology, triglycerides (chyle), glucose (sepsis), pH</li>
          <li>Culture (aerobic + anaerobic) for exudates</li>
          <li>See Thoracocentesis procedure entry</li>
        </ul>
        <p><strong>Fluid analysis interpretation:</strong></p>
        <ul>
          <li><strong>Chylothorax:</strong> milky white-pink, <em>triglycerides &gt; 100 mg/dL (and &gt; serum)</em> ✨; cholesterol normal-low; "chylomicrons" on cytology</li>
          <li><strong>Pyothorax:</strong> turbid yellow-brown, neutrophils degenerate, <em>intracellular bacteria</em>, may smell foul</li>
          <li><strong>FIP (cat):</strong> straw-yellow, viscous, high protein (&gt; 3.5 g/dL), low cellularity, A:G &lt; 0.4-0.6</li>
          <li><strong>Hemothorax:</strong> PCV &gt; peripheral or ≥ 50% peripheral; doesn't clot (defibrinated)</li>
          <li><strong>Modified transudate:</strong> intermediate; based on cause</li>
        </ul>
        <p><strong>Underlying cause workup:</strong></p>
        <ul>
          <li>CBC, biochem (albumin!), urinalysis (UPC)</li>
          <li>Coag panel, BMBT, AT</li>
          <li>Heartworm test</li>
          <li>FeLV/FIV (cat)</li>
          <li>Coronavirus titer (FIP) + RT-PCR</li>
          <li>Echo</li>
        </ul>
      `,
      differential: `<p>ระหว่าง fluid types — see etiology above; correct identification เปลี่ยน management อย่างสิ้นเชิง</p>`,
      treatment: `
        <p><strong>Acute stabilization (always first):</strong></p>
        <ul>
          <li><strong>Therapeutic thoracocentesis</strong> ✨ — relieve dyspnea immediately</li>
          <li>O2 supplementation</li>
          <li>Minimal restraint, gentle handling (esp. cats!)</li>
          <li>Mild sedation (butorphanol 0.2 mg/kg IM) for anxious patients</li>
        </ul>

        <p><strong>1. Modified transudate from CHF:</strong></p>
        <ul>
          <li>Treat underlying heart disease (see Heart Failure entry)</li>
          <li>Furosemide, pimobendan, ACEI, spironolactone</li>
          <li>Repeat thoracocentesis as needed for acute relief</li>
        </ul>

        <p><strong>2. Pyothorax:</strong></p>
        <ul>
          <li><strong>Indwelling thoracic drain (chest tube)</strong> ✨ — bilateral usually
            <ul>
              <li>Continuous suction or intermittent drainage q4-8h</li>
              <li>Saline lavage 10-20 mL/kg through tube q12h</li>
              <li>Maintain 5-10 days minimum</li>
            </ul>
          </li>
          <li><strong>Antibiotics:</strong>
            <ul>
              <li>Empirical IV: ampicillin 22 mg/kg q8h + enrofloxacin (dog) 5-20 mg/kg q24h</li>
              <li>Or amoxi-clav + metronidazole</li>
              <li>Adjust per culture</li>
              <li>Cats: avoid high-dose enrofloxacin (retinal toxicity)</li>
              <li>Total duration: 4-8 weeks PO after IV phase</li>
            </ul>
          </li>
          <li>Surgical exploration if: foreign body suspected, lung lobe torsion, refractory to medical mgmt &gt; 5-7 d</li>
          <li>Prognosis: cats &gt; dogs (cats often recover with medical mgmt; dogs more often need surgery)</li>
        </ul>

        <p><strong>3. Chylothorax:</strong></p>
        <ul>
          <li>Identify + treat underlying cause (cardiac, mass) — many resolve</li>
          <li><strong>Idiopathic chylothorax management:</strong>
            <ul>
              <li>Low-fat diet (medium-chain triglycerides)</li>
              <li><strong>Rutin 50-100 mg/kg PO q8h</strong> — benzopyrone, may ↓ effusion (variable response)</li>
              <li>Repeat thoracocentesis as needed</li>
              <li>If no resolution in 2-3 months → surgery</li>
            </ul>
          </li>
          <li><strong>Surgical (refractory):</strong>
            <ul>
              <li>Thoracic duct ligation (TDL) + subtotal pericardiectomy + cisterna chyli ablation</li>
              <li>Success ~50-70%</li>
              <li>Referral procedure</li>
            </ul>
          </li>
          <li>Complication: fibrosing pleuritis (chronic chyle exposure → pleural thickening, restrictive)</li>
        </ul>

        <p><strong>4. FIP-associated effusion (cat):</strong></p>
        <ul>
          <li>Was historically grave</li>
          <li><strong>GS-441524 antiviral</strong> ✨ — high cure rate now available; refer or research current protocol</li>
          <li>Repeat thoracocentesis for symptomatic relief</li>
          <li>Supportive care</li>
        </ul>

        <p><strong>5. Neoplastic effusion:</strong></p>
        <ul>
          <li>Diagnose tumor type (cytology, biopsy)</li>
          <li>Mediastinal lymphoma (cat) — chemo (CHOP/COP) often dramatically responsive</li>
          <li>Other tumors — palliative drainage + tumor-specific therapy</li>
        </ul>

        <p><strong>6. Hemothorax:</strong></p>
        <ul>
          <li>Stabilize: O2, IV fluids, blood transfusion if hemodynamically unstable</li>
          <li>Identify cause:
            <ul>
              <li>Coagulopathy: vitamin K1 2.5 mg/kg PO q12h × 30 days; FFP if active bleed</li>
              <li>Trauma: surgery if persistent active bleeding</li>
              <li>Neoplasia: tumor management</li>
            </ul>
          </li>
          <li>Avoid aggressive drainage (autotransfusion of blood may help)</li>
        </ul>

        <p><strong>7. Hypoalbuminemia transudate:</strong></p>
        <ul>
          <li>Treat underlying cause (PLE, PLN, hepatic dz)</li>
          <li>Address albumin level (correct cause; rarely transfuse for symptoms)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Acute respiratory failure / death</li>
          <li>Recurrent effusion</li>
          <li>Fibrosing pleuritis (chronic chylothorax) → restrictive disease</li>
          <li>Sepsis (pyothorax)</li>
          <li>Pneumothorax (iatrogenic from drainage)</li>
          <li>Lung trapped after long-standing effusion</li>
          <li>Underlying disease progression</li>
        </ul>
        <p><strong>Prognosis (varies hugely by cause):</strong></p>
        <ul>
          <li>CHF-related: depends on heart disease management</li>
          <li>Pyothorax: cats good (~ 65-80% with medical mgmt); dogs guarded (~ 50-65%, often need surgery)</li>
          <li>Idiopathic chylothorax: variable; ~ 50% medical, ~ 70% surgical resolution</li>
          <li>Lymphoma effusion: chemo response often excellent for cat mediastinal lymphoma</li>
          <li>FIP: was poor; now good with GS-441524 ✨</li>
          <li>Neoplastic (carcinoma, mesothelioma): poor</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 24 · Pneumothorax ---------- */
  {
    id: 'pneumothorax',
    titleEn: 'Pneumothorax',
    titleTh: 'ลมรั่วในช่องอก',
    type: 'disease',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['pneumothorax', 'tension pneumothorax', 'spontaneous pneumothorax', 'bullae', 'thoracocentesis', 'chest tube'],
    aliases: ['ลมในช่องอก', 'collapsed lung'],
    source: 'Ch. 24 · pp. 380–384',
    sections: {
      definition: `
        <p>อากาศใน <strong>pleural space</strong> → lung collapse + restrictive ventilation</p>
        <ul>
          <li>แบ่งเป็น <em>traumatic</em> (closed/open) vs <em>spontaneous</em> (primary/secondary)</li>
          <li><strong>Tension pneumothorax</strong> = one-way valve → progressive air accumulation → cardiopulmonary collapse ✗ <em>emergency</em></li>
        </ul>
      `,
      etiology: `
        <p><strong>Traumatic:</strong></p>
        <ul>
          <li>Blunt trauma (HBC, fall) — most common</li>
          <li>Penetrating trauma (bite wound, stab)</li>
          <li>Iatrogenic — thoracocentesis, lung biopsy, central line, mechanical ventilation</li>
          <li>Tracheal/bronchial rupture</li>
        </ul>
        <p><strong>Spontaneous (no trauma):</strong></p>
        <ul>
          <li><strong>Primary:</strong> ruptured subpleural blebs/bullae — large breed dogs (Husky, GSD, Labrador) ✨</li>
          <li><strong>Secondary:</strong> underlying lung disease
            <ul>
              <li>Severe asthma (cat — bullae rupture)</li>
              <li>Pulmonary parasites (Paragonimus, Aelurostrongylus)</li>
              <li>Neoplasia</li>
              <li>Pneumonia (necrotizing)</li>
              <li>Pulmonary abscess</li>
              <li>Heartworm</li>
              <li>IPF (rare)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Tension pneumothorax:</strong> wound creates one-way valve → air enters but cannot exit</p>
      `,
      pathophysiology: `
        <ul>
          <li>Normal: pleural pressure negative → keeps lung expanded</li>
          <li>Air enters → loss of negative pressure → lung collapse</li>
          <li>↓ Tidal volume + V/Q mismatch → hypoxemia</li>
          <li>Tension PTX: ↑ intrathoracic pressure → ↓ venous return → ↓ CO + cardiopulmonary collapse</li>
          <li>Bilateral pneumothorax common (incomplete mediastinum in dog/cat)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Acute respiratory distress</strong> ✗</li>
          <li>Tachypnea, restrictive pattern</li>
          <li>Cyanosis</li>
          <li>Open-mouth breathing</li>
          <li>Auscultation: <strong>↓ lung sounds dorsally</strong> (vs effusion which is ventral) ✨</li>
          <li>Percussion: <strong>hyperresonant dorsally</strong> ✨</li>
          <li>Subcutaneous emphysema (penetrating trauma, tracheal/bronchial rupture)</li>
          <li><strong>Tension PTX:</strong> rapid deterioration, severe distress, tachycardia, weak pulses, cyanosis ✗</li>
          <li>Trauma history or known underlying disease</li>
          <li>Spontaneous in healthy large breed: sudden onset distress at rest</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical:</strong> sudden distress + dorsal hyperresonance + history</p>
        <p><strong>POCUS / TFAST:</strong> "<em>glide sign</em>" absent ✨ — quick bedside test; presence of glide rules out PTX in that area</p>
        <p><strong>Thoracic rad:</strong></p>
        <ul>
          <li><strong>Lung edges retracted from chest wall</strong> ✨</li>
          <li>Hyperlucent area without lung markings (peripheral)</li>
          <li>Cardiac silhouette elevated from sternum (lateral) — "floating heart"</li>
          <li>Look for bullae, underlying disease</li>
          <li>⚠️ Don't delay treatment for radiographs in severe cases — drain first</li>
        </ul>
        <p><strong>CT (after stabilization):</strong> excellent for identifying bullae, underlying lung disease — preoperative for spontaneous PTX</p>
        <p><strong>Workup for cause:</strong></p>
        <ul>
          <li>Heartworm, lungworm tests</li>
          <li>Coag if hemothorax concurrent</li>
          <li>Bronchoscopy if airway rupture suspected</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Severe pulmonary disease (asthma — air trapping but lung not collapsed)</li>
          <li>Pleural effusion (different auscultation pattern)</li>
          <li>Diaphragmatic hernia</li>
          <li>Mediastinal mass</li>
          <li>Cardiac tamponade</li>
        </ul>
      `,
      treatment: `
        <p><strong>Tension pneumothorax — immediate decompression ✗ (emergency)</strong></p>
        <ul>
          <li>Needle thoracocentesis without delay — 18-22 g needle/butterfly, dorsal 7th-9th ICS</li>
          <li>O2 supplementation</li>
          <li>Then proceed to chest tube</li>
        </ul>

        <p><strong>1. Acute stabilization:</strong></p>
        <ul>
          <li><strong>Thoracocentesis</strong> — both sides (assume bilateral) ✨
            <ul>
              <li>Dorsal aspect ICS 7-9 (air rises dorsally)</li>
              <li>Aspirate air until negative pressure</li>
              <li>3-way stopcock + extension set</li>
            </ul>
          </li>
          <li>O2 supplementation</li>
          <li>Minimal handling, sedation if anxious</li>
          <li>IV access, fluids if hypovolemic (trauma)</li>
        </ul>

        <p><strong>2. Traumatic PTX:</strong></p>
        <ul>
          <li>Most resolve with thoracocentesis ± chest tube</li>
          <li>Indwelling chest tube ถ้า:
            <ul>
              <li>Need repeat thoracocentesis &gt; 2-3 times</li>
              <li>Continued large air leak</li>
              <li>Tension PTX</li>
              <li>Open / sucking chest wound</li>
            </ul>
          </li>
          <li>Continuous suction (-5 to -15 cm H2O) or intermittent drainage q2-4h</li>
          <li>Wound management for penetrating injury</li>
          <li>Pain control: opioids (methadone, fentanyl, buprenorphine)</li>
          <li>Antibiotics if open / contaminated wound</li>
          <li>Most resolve in 2-5 days</li>
        </ul>

        <p><strong>3. Spontaneous PTX (especially primary with bullae):</strong></p>
        <ul>
          <li>Initial: thoracocentesis ± chest tube</li>
          <li><strong>High recurrence rate (~ 50%)</strong> with medical management alone</li>
          <li><strong>Surgical exploration recommended</strong> ✨ — partial lobectomy of affected lobe(s); bullae often multiple</li>
          <li>CT preoperatively to localize lesions</li>
          <li>Median sternotomy or thoracotomy</li>
          <li>Cure rate after surgery &gt; 90%</li>
        </ul>

        <p><strong>4. Secondary spontaneous PTX:</strong></p>
        <ul>
          <li>Treat underlying disease (asthma, heartworm, neoplasia)</li>
          <li>Drainage as needed</li>
          <li>Pleurodesis (chemical or surgical) for refractory cases</li>
          <li>Prognosis depends on underlying disease</li>
        </ul>

        <p><strong>Chest tube management:</strong></p>
        <ul>
          <li>Strict aseptic care — daily site cleaning</li>
          <li>Heimlich valve or underwater seal</li>
          <li>Document air production rate q2-4h</li>
          <li>Remove when no air for 12-24h</li>
        </ul>

        <p><strong>Pain management essential</strong> — chest tubes painful</p>
      `,
      complications: `
        <ul>
          <li><strong>Tension PTX → cardiopulmonary collapse / death</strong> ✗</li>
          <li>Recurrent pneumothorax (esp. spontaneous primary)</li>
          <li>Bilateral pneumothorax</li>
          <li>Iatrogenic from thoracocentesis or chest tube placement</li>
          <li>Subcutaneous emphysema</li>
          <li>Pneumomediastinum</li>
          <li>Chest tube complications: dislodgement, infection, pain, empyema</li>
          <li>Lung damage from prolonged collapse (re-expansion pulmonary edema)</li>
          <li>Pneumonia secondary to chest tube</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Traumatic: <strong>good</strong> if isolated, no other major injuries (~ 85-90% survive)</li>
          <li>Spontaneous primary (bullae): excellent with surgery (~ 90% cure)</li>
          <li>Spontaneous secondary: depends on underlying disease — guarded if neoplasia, severe asthma</li>
          <li>Tension PTX recognized + treated promptly: good</li>
          <li>Tension PTX missed: fatal</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 25 · Thoracocentesis (procedure) ---------- */
  {
    id: 'thoracocentesis',
    titleEn: 'Thoracocentesis',
    titleTh: 'Thoracocentesis — เจาะระบายช่องอก',
    type: 'procedure',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['thoracocentesis', 'pleural tap', 'chest tap', 'pleural fluid', 'pleural air', 'emergency'],
    aliases: ['pleural tap', 'chest tap', 'การเจาะช่องอก'],
    source: 'Ch. 25 · pp. 385–387',
    sections: {
      indications: `
        <p><strong>Therapeutic (life-saving):</strong></p>
        <ul>
          <li>Pleural effusion causing respiratory compromise</li>
          <li>Pneumothorax — especially tension PTX ✗ <em>immediate</em></li>
          <li>Hemothorax (cautious — preserve some blood for autotransfusion potential)</li>
        </ul>
        <p><strong>Diagnostic:</strong></p>
        <ul>
          <li>Sample pleural fluid for analysis</li>
          <li>Confirm presence of fluid/air when imaging equivocal</li>
        </ul>
      `,
      contraindications: `
        <p><strong>Absolute:</strong></p>
        <ul>
          <li>None when life-threatening tension PTX or massive effusion → benefit &gt; risk</li>
        </ul>
        <p><strong>Relative (proceed with caution):</strong></p>
        <ul>
          <li><strong>Severe coagulopathy</strong> — correct first if time permits (vitamin K, FFP); proceed with smaller-bore needle if urgent</li>
          <li>Severely uncooperative patient — sedate</li>
          <li>Localized small pleural fluid pockets — use ultrasound guidance</li>
          <li>Diaphragmatic hernia (abdominal organs herniated into thorax) — risk of organ puncture</li>
          <li>Bullous lung disease — risk of creating PTX from another lung lobe</li>
        </ul>
      `,
      preparation: `
        <p><strong>Patient:</strong></p>
        <ul>
          <li>Position: <strong>standing or sternal recumbency preferred</strong> ✨ — ลด stress, keep diaphragm caudal
            <ul>
              <li>Lateral recumbency only if patient too weak to remain sternal</li>
            </ul>
          </li>
          <li>O2 supplementation (flow-by, mask)</li>
          <li>IV catheter (cephalic) — emergency drugs available</li>
          <li>Pulse ox monitoring</li>
          <li>Sedation usually NOT needed for cooperative patients; mild butorphanol 0.2 mg/kg IM if anxious</li>
          <li>Avoid heavy sedation in dyspneic patient</li>
          <li>Clip + aseptic prep at site</li>
          <li>Local anesthetic: 2% lidocaine 1-3 mL infiltrate skin → intercostal muscles → parietal pleura (1 mL/kg max in cats)</li>
        </ul>
        <p><strong>Equipment:</strong></p>
        <ul>
          <li>Butterfly needle (19-21 g) for cats / small dogs (effusion)</li>
          <li>18-20 g over-the-needle catheter (1.5-3 inch) for medium-large dogs</li>
          <li>16-18 g for large dogs / thick fluid (pyothorax)</li>
          <li>Extension tubing + 3-way stopcock + 20-60 mL syringe</li>
          <li>EDTA tube + plain (red top) tube + culture tube + slides for cytology</li>
          <li>Receptacle for collected fluid (basin / measuring container)</li>
          <li>Ultrasound (recommended for guidance, especially localized fluid)</li>
        </ul>
        <p><strong>Site selection:</strong></p>
        <ul>
          <li><strong>Pleural fluid:</strong> 7th-8th ICS, ventral 1/3 of thorax (just dorsal to costochondral junction)</li>
          <li><strong>Pneumothorax:</strong> 7th-9th ICS, dorsal 1/3 of thorax (air rises dorsally) ✨</li>
          <li>Tap on the side with more fluid/air per imaging; if unclear, do bilateral</li>
          <li>Approach <strong>cranial border of rib</strong> ✨ — intercostal vessels run on caudal border of rib (avoid)</li>
          <li>For cats, often safer to enter at 7th-8th ICS</li>
        </ul>
      `,
      steps: `
        <ol style="font-family: var(--font-thai); font-size: 16px; line-height: 1.7; color: var(--ink); margin: 6px 0 10px 22px; padding: 0;">
          <li><strong>Confirm site</strong> with palpation + ultrasound if available</li>
          <li><strong>Aseptic prep + drape</strong></li>
          <li><strong>Local anesthesia:</strong> infiltrate lidocaine SQ → intercostal muscle → parietal pleura</li>
          <li><strong>Stab incision</strong> ด้วย #11 blade (1-2 mm) for catheter passage (optional for needle)</li>
          <li><strong>Attach extension/stopcock/syringe</strong> to needle/catheter</li>
          <li><strong>Insert needle perpendicular to skin</strong> at cranial border of rib
            <ul style="margin: 6px 0 6px 20px;">
              <li>Have assistant aspirate gently as you advance</li>
              <li>"Pop" sensation when entering pleural space</li>
            </ul>
          </li>
          <li><strong>Once in pleural space:</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>For catheter: advance cannula off stylet, withdraw stylet</li>
              <li>Angle needle slightly cranially or parallel to chest wall to avoid lung puncture</li>
            </ul>
          </li>
          <li><strong>Aspirate</strong> using stopcock + syringe; fluid or air should come freely
            <ul style="margin: 6px 0 6px 20px;">
              <li>Drain until negative pressure (resistance, no more fluid/air)</li>
              <li>For large effusions: drain to dyspnea relief, NOT necessarily complete drainage (re-expansion edema risk)</li>
            </ul>
          </li>
          <li><strong>Collect samples (first aliquot most representative):</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>EDTA — cytology, cell count</li>
              <li>Plain — biochemistry (TP, glucose, triglycerides), settle for ?clot</li>
              <li>Culture tube — aerobic ± anaerobic</li>
              <li>Direct smear slides for in-house cytology</li>
            </ul>
          </li>
          <li><strong>Document fluid characteristics:</strong> volume, color, turbidity, odor</li>
          <li><strong>Watch ECG / patient response</strong> throughout — VPCs may indicate myocardial contact (withdraw 1-2 mm)</li>
          <li><strong>If on contralateral side:</strong> repeat procedure (often bilateral, esp. cats due to incomplete mediastinum)</li>
          <li><strong>Withdraw catheter/needle</strong> when drainage complete; press puncture site briefly</li>
          <li><strong>Post-procedure rad/POCUS</strong> to assess remaining fluid/air + identify underlying disease (now that lung is expanded)</li>
        </ol>
      `,
      complications: `
        <p><strong>Common (mild):</strong></p>
        <ul>
          <li>Mild hemorrhage at puncture site</li>
          <li>Vasovagal response — transient bradycardia</li>
          <li>Failed aspiration (loculated fluid, wrong location, kinked catheter)</li>
        </ul>
        <p><strong>Serious (rare with good technique):</strong></p>
        <ul>
          <li><strong>Lung laceration → pneumothorax</strong> — most common serious complication</li>
          <li>Hemorrhage from intercostal vessel laceration (avoid by entering at cranial border of rib)</li>
          <li>Cardiac puncture (avoid by ventral approach not crossing midline)</li>
          <li>Diaphragm puncture / abdominal organ injury (avoid going too caudal)</li>
          <li>Re-expansion pulmonary edema (large chronic effusion drained too rapidly)</li>
          <li>Pleural infection (poor aseptic technique)</li>
          <li>Iatrogenic empyema if introducing bacteria</li>
          <li>Sustained ventricular arrhythmia — withdraw needle</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li><strong>Monitor</strong> respiratory rate + effort, mucous membrane color, pulse ox for several hours post-procedure</li>
          <li>Watch for re-accumulation of fluid/air → repeat thoracocentesis if dyspnea returns</li>
          <li>Indications for indwelling chest tube placement:
            <ul>
              <li>Need for repeat thoracocentesis &gt; 2-3 times</li>
              <li>Continued large air production (PTX)</li>
              <li>Pyothorax (need lavage)</li>
              <li>Tension PTX</li>
            </ul>
          </li>
          <li>Submit fluid for analysis: TP, cell count, cytology, triglycerides (chyle), glucose (sepsis), pH, culture (exudate)</li>
          <li>Repeat thoracic rad after stabilization to assess underlying disease (now visible without fluid)</li>
          <li>Plan diagnostic workup for underlying cause — drainage alone ไม่พอ</li>
          <li>Pain management if procedure was difficult or chest tube placed</li>
          <li>Reassess hydration + electrolytes (especially with large effusion drainage)</li>
        </ul>
        <div class="callout">💡 <strong>Cats are stress-sensitive</strong> — minimize handling, do procedure with cat in sternal/standing if possible. Consider O2 + butorphanol pre-procedure. Quick + gentle technique saves lives</div>
      `,
    },
  },

  /* ============================================================
     PART 3 — DIGESTIVE (Ch 26–32)
  ============================================================ */

  /* ---------- Ch 26 · Clinical Manifestations of GI Disease ---------- */
  {
    id: 'gi-clinical-manifestations',
    titleEn: 'Clinical Manifestations of GI Disease',
    titleTh: 'อาการของระบบทางเดินอาหาร',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['vomiting', 'diarrhea', 'regurgitation', 'hematemesis', 'melena', 'hematochezia', 'anorexia', 'tenesmus', 'dysphagia'],
    aliases: ['GI signs', 'อาการ GI', 'อาเจียน', 'ถ่ายเหลว'],
    source: 'Ch. 26 · pp. 391–410',
    sections: {
      definition: `
        <p>อาการที่บ่งบอกความผิดปกติของ GI tract — แต่หลายอาการ <strong>nonspecific</strong> และอาจมาจาก systemic disease ก็ได้</p>
        <ul>
          <li>ขั้นแรกของ workup = แยก primary GI vs extra-GI (uremia, hepatic, pancreatitis, hypoadrenocorticism, drugs)</li>
          <li>Localize lesion: oral, esophageal, gastric, small intestinal, large intestinal</li>
        </ul>
      `,
      etiology: `
        <p>ดู entries เฉพาะของแต่ละโรค</p>
      `,
      pathophysiology: `
        <p><strong>Localization clues:</strong></p>
        <ul>
          <li><strong>Vomiting</strong> — gastric/proximal SI; secondary จาก systemic dz บ่อย</li>
          <li><strong>Regurgitation</strong> — esophageal (passive, no bile, undigested food)</li>
          <li><strong>Small bowel diarrhea</strong> — ↑ volume, weight loss, melena, ↓ frequency (3-5/day), no urgency</li>
          <li><strong>Large bowel diarrhea</strong> — ↑ frequency (&gt; 5-10/day), small volume, mucus, hematochezia, tenesmus, urgency</li>
          <li><strong>Mixed bowel</strong> — components of both</li>
        </ul>
      `,
      symptoms: `
        <p><strong>1. Vomiting vs Regurgitation (สำคัญมาก!)</strong></p>
        <ul>
          <li><strong>Vomiting:</strong> active, abdominal contractions, prodromal nausea (drooling, lip licking), bile/digested food, retching</li>
          <li><strong>Regurgitation:</strong> passive, no warning, undigested tubular food, no bile, neck extension</li>
          <li>แยกให้ออกก่อนเริ่ม workup — DDx ต่างกันสิ้นเชิง ✨</li>
        </ul>

        <p><strong>2. Hematemesis (vomiting blood)</strong></p>
        <ul>
          <li>Frank red blood: oral/esophageal/gastric source</li>
          <li>"Coffee grounds": digested blood from stomach (ulcer)</li>
          <li>DDx: GI ulcer, NSAID/steroid use, foreign body, neoplasia, coagulopathy, severe gastritis, hepatic dz, mast cell tumor, gastrinoma</li>
        </ul>

        <p><strong>3. Diarrhea</strong></p>
        <ul>
          <li>Acute (&lt; 14 d) vs Chronic (&gt; 14 d)</li>
          <li>SI vs LI vs mixed (see localization above)</li>
          <li>Melena (digested blood) → upper GI bleed</li>
          <li>Hematochezia (frank blood) → lower GI / colon</li>
        </ul>

        <p><strong>4. Anorexia / Hyporexia</strong></p>
        <ul>
          <li>Pseudoanorexia — ปวดเวลากิน (oral/dental dz, esophageal dz, jaw fracture)</li>
          <li>True anorexia — central CNS, systemic dz, GI dz, nausea</li>
          <li>Cats หิวได้ &gt; 3 วันโดยไม่กิน → <strong>hepatic lipidosis risk</strong> ✗</li>
        </ul>

        <p><strong>5. Weight loss</strong></p>
        <ul>
          <li>Despite normal/↑ appetite: maldigestion (EPI), malabsorption (IBD, lymphangiectasia), hyperthyroidism, DM</li>
          <li>With ↓ appetite: chronic GI dz, neoplasia, systemic dz</li>
        </ul>

        <p><strong>6. Constipation / Tenesmus</strong></p>
        <ul>
          <li>Constipation: hard dry feces, infrequent</li>
          <li>Obstipation: refractory constipation</li>
          <li>Megacolon (cat) — chronic dilation, idiopathic หรือ secondary</li>
          <li>Tenesmus: straining; either constipation OR colitis (counterintuitive!)</li>
        </ul>

        <p><strong>7. Dysphagia</strong></p>
        <ul>
          <li>Oral, pharyngeal, cricopharyngeal phases</li>
          <li>Drooling, gagging, dropping food</li>
          <li>DDx: oral mass, dental dz, neuromuscular (myasthenia, polyneuropathy), retropharyngeal mass</li>
        </ul>

        <p><strong>8. Halitosis</strong></p>
        <ul>
          <li>Most common: dental disease</li>
          <li>Severe: uremia, hepatic encephalopathy, oral neoplasia, megaesophagus food retention</li>
        </ul>

        <p><strong>9. Abdominal pain / posture</strong></p>
        <ul>
          <li>"Praying" position: cranial abdominal pain (pancreatitis, gastritis, FB)</li>
          <li>Tense abdomen, splinting</li>
          <li>Acute abdomen workup: GDV, septic peritonitis, intussusception, FB</li>
        </ul>

        <p><strong>10. Ascites</strong></p>
        <ul>
          <li>PLE (hypoalbuminemia)</li>
          <li>Right CHF</li>
          <li>Hepatic dz</li>
          <li>Peritonitis</li>
          <li>Neoplasia</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Workup tier:</strong></p>
        <ul>
          <li><strong>Tier 1</strong> (every patient): physical exam, oral/dental, abdominal palpation, fecal flotation, fecal direct, CBC, biochem, UA, T4 (cat senior)</li>
          <li><strong>Tier 2</strong>: FeLV/FIV (cat), abdominal rad ± US, cPL/fPL, cobalamin/folate, parvo SNAP (puppy), Giardia ELISA</li>
          <li><strong>Tier 3</strong>: bile acids, ACTH stim (Addison's!), endoscopy + biopsy, exploratory laparotomy</li>
        </ul>
        <p><strong>Imaging — radiograph vs ultrasound:</strong></p>
        <ul>
          <li>Rad: better for foreign body (radiopaque), free gas (perforation)</li>
          <li>US: better for masses, wall thickness/layering, fluid, pancreatitis, lymph nodes, intussusception</li>
        </ul>
        <p><strong>Cobalamin / Folate (B12):</strong></p>
        <ul>
          <li>↓ Cobalamin = ileal disease หรือ EPI; supplement!</li>
          <li>↑ Folate = proximal SI bacterial overgrowth</li>
          <li>↓ Folate = proximal SI mucosal disease</li>
        </ul>
      `,
      differential: `<p>กว้างมาก — ดู entries เฉพาะ</p>`,
      treatment: `
        <p><strong>หลักทั่วไปสำหรับ acute presentation:</strong></p>
        <ul>
          <li>Hydration (IV หรือ SQ ตามอาการ)</li>
          <li>Anti-emetic (maropitant 1 mg/kg SC q24h)</li>
          <li>NPO ตอนแรก แล้ว reintroduce easy diet</li>
          <li>เฉพาะตามสาเหตุ</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe dehydration → hypovolemic shock</li>
          <li>Electrolyte imbalance (hypokalemia, hyponatremia)</li>
          <li>Hepatic lipidosis (cats &gt; 3 d anorexia)</li>
          <li>Aspiration pneumonia (regurgitation)</li>
          <li>Septic peritonitis (perforation)</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 27 · GI Diagnostic Tests ---------- */
  {
    id: 'gi-diagnostic-tests',
    titleEn: 'GI Diagnostic Tests',
    titleTh: 'การตรวจวินิจฉัยระบบ GI',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['endoscopy', 'biopsy', 'cobalamin', 'folate', 'cPL', 'fPL', 'TLI', 'bile acids', 'fecal'],
    aliases: ['GI workup', 'การตรวจ GI'],
    source: 'Ch. 27 · pp. 411–438',
    sections: {
      definition: `<p>เครื่องมือ workup โรค GI — เลือกตาม presenting sign + signalment</p>`,
      etiology: `<p>—</p>`,
      pathophysiology: `<p>—</p>`,
      symptoms: `<p>ดู Clinical Manifestations entry</p>`,
      diagnosis: `
        <p><strong>1. Fecal tests</strong></p>
        <ul>
          <li><strong>Direct smear</strong> — fresh feces in saline; Giardia trophozoites (motile pear-shape), Tritrichomonas (cat), bacteria overgrowth</li>
          <li><strong>Fecal flotation</strong> (zinc sulfate sg 1.18 หรือ sucrose) — ascarids, hookworms, whipworms, Giardia cysts</li>
          <li><strong>Baermann technique</strong> — pulmonary parasites (รวม Aelurostrongylus, Crenosoma)</li>
          <li><strong>Giardia ELISA / SNAP</strong> — sensitive (intermittent shedding makes flotation unreliable)</li>
          <li><strong>Parvo ELISA</strong> — puppy with bloody diarrhea; vaccine within 7-10 d → false positive</li>
          <li><strong>Fecal occult blood</strong> — limited utility, dietary interference</li>
          <li><strong>Fecal culture</strong> — Salmonella, Campylobacter, Clostridium toxin (rarely useful — many healthy carry pathogens)</li>
          <li><strong>PCR panel</strong> (GI panel) — multiple pathogens; useful in shelter/outbreak</li>
        </ul>

        <p><strong>2. Serology / blood tests</strong></p>
        <ul>
          <li><strong>cPL / fPL (SNAP)</strong> — pancreatic lipase immunoreactivity; suggests pancreatitis but not a "litmus test" — clinical correlation needed</li>
          <li><strong>TLI (Trypsin-like Immunoreactivity)</strong> — diagnose <strong>EPI</strong> (low TLI &lt; 2.5 µg/L dog, &lt; 8 cat); fasted sample</li>
          <li><strong>Cobalamin (B12)</strong>:
            <ul>
              <li>↓ &lt; 250-350 ng/L = supplement</li>
              <li>Causes: EPI, ileal disease, chronic enteropathy, dysbiosis</li>
              <li>Important for clinical response — supplement before assessing therapy</li>
            </ul>
          </li>
          <li><strong>Folate</strong>:
            <ul>
              <li>↑ &gt; 17 µg/L = bacterial overgrowth proximal SI</li>
              <li>↓ &lt; 7 = proximal SI mucosal disease</li>
            </ul>
          </li>
          <li><strong>Bile acids (pre + 2h post-prandial)</strong> — hepatic function, PSS</li>
          <li><strong>Resting cortisol / ACTH stim</strong> — rule out Addison's (atypical presentation as chronic GI signs)</li>
          <li><strong>T4 (cat senior)</strong></li>
          <li><strong>FeLV/FIV (cat)</strong></li>
        </ul>

        <p><strong>3. Imaging</strong></p>
        <ul>
          <li><strong>Abdominal radiograph (3 views: lateral × 2 + VD):</strong>
            <ul>
              <li>Foreign body (radiopaque), ileus, mass, free gas, free fluid, organomegaly</li>
              <li>"Plicated" intestinal pattern → linear FB</li>
              <li>"Double bubble" / displaced gas pattern → GDV</li>
            </ul>
          </li>
          <li><strong>Contrast study (barium):</strong> rarely used now; reserved for occult FB, megaesophagus diagnosis</li>
          <li><strong>Abdominal ultrasound (preferred for soft tissue):</strong>
            <ul>
              <li>Wall thickness, layering, mass, intussusception</li>
              <li>Lymphadenopathy (mesenteric)</li>
              <li>Pancreatitis</li>
              <li>Ascites — sample for analysis</li>
              <li>FNA of masses, lymph nodes</li>
            </ul>
          </li>
          <li>CT — neoplasia staging, complex anatomic dz</li>
        </ul>

        <p><strong>4. Endoscopy</strong></p>
        <ul>
          <li><strong>Esophagogastroduodenoscopy (EGD):</strong>
            <ul>
              <li>Visualize esophagus, stomach, duodenum (cats: easier reach to ileum than dogs)</li>
              <li>Biopsy multiple sites (≥ 6-10 per region)</li>
              <li>Foreign body retrieval</li>
              <li>Stricture dilation</li>
              <li>Tube placement (PEG, esophagostomy)</li>
            </ul>
          </li>
          <li><strong>Colonoscopy:</strong>
            <ul>
              <li>Visualize colon to ileocolic junction</li>
              <li>Ileal biopsy attempts (variable success)</li>
              <li>Polyp / mass biopsy</li>
            </ul>
          </li>
          <li>Limitations: biopsy depth limited to mucosa-submucosa; full-thickness lymphoma หรือ deep submucosal mass อาจ miss</li>
        </ul>

        <p><strong>5. Exploratory laparotomy (Ex-lap)</strong></p>
        <ul>
          <li>When endoscopy unrevealing or full-thickness biopsy needed</li>
          <li>Biopsy stomach + multiple SI sites + LI (3+ per area)</li>
          <li>Examine + biopsy lymph nodes, liver, pancreas</li>
          <li>Mass excision/biopsy</li>
          <li>FB removal</li>
          <li>Risk: dehiscence ใน hypoalbuminemia (PLE patients) ✗</li>
        </ul>
      `,
      differential: `<p>—</p>`,
      treatment: `<p>เครื่องมือ — ไม่มี treatment</p>`,
      complications: `
        <ul>
          <li>Endoscopy: anesthetic risk, perforation (rare), aspiration</li>
          <li>Ex-lap: dehiscence (esp. hypoalbuminemia &lt; 2.0), septic peritonitis, ileus</li>
          <li>Biopsy interpretation: variable, pathologist-dependent; correlate with clinical</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 29 · Megaesophagus ---------- */
  {
    id: 'megaesophagus',
    titleEn: 'Megaesophagus',
    titleTh: 'หลอดอาหารโต — สำลักง่าย',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['megaesophagus', 'regurgitation', 'aspiration pneumonia', 'myasthenia gravis', 'AChR antibody', 'Bailey chair', 'bethanechol', 'sildenafil'],
    aliases: ['ME', 'megaesophagus', 'หลอดอาหารโต'],
    source: 'Ch. 29 · pp. 449–453',
    sections: {
      definition: `
        <p>การขยายตัวของ esophagus + ↓ motility → ↓ propulsion ของอาหาร → <strong>regurgitation</strong></p>
        <ul>
          <li>Regurgitation, ไม่ใช่ vomiting — แยกให้ออก ✨</li>
          <li>เสี่ยง <strong>aspiration pneumonia</strong> มาก ✗</li>
          <li>Cause หลักของการตาย</li>
        </ul>
      `,
      etiology: `
        <p><strong>Congenital (idiopathic):</strong></p>
        <ul>
          <li>German Shepherd, Great Dane, Irish Setter, Lab, Mini Schnauzer, Newfoundland, Shar-Pei, Fox Terrier, Cocker</li>
          <li>Diagnosed ตอนหย่านม / เริ่มกินอาหารเหลว → แข็ง</li>
          <li>Persistent right aortic arch (PRAA) — vascular ring anomaly; surgical correctable!</li>
        </ul>
        <p><strong>Acquired adult:</strong></p>
        <ul>
          <li><strong>Idiopathic</strong> — most common (~ 50-60%)</li>
          <li><strong>Myasthenia gravis (MG)</strong> ✨ — must screen ทุกเคส; AChR antibody test</li>
          <li>Hypothyroidism (debated, weak evidence)</li>
          <li>Hypoadrenocorticism (Addison's)</li>
          <li>Polyneuropathy / polymyopathy (GOLPP, dysautonomia)</li>
          <li>Lead, organophosphate toxicity</li>
          <li>Esophagitis severe</li>
          <li>Esophageal obstruction (FB, neoplasia, stricture, vascular ring)</li>
          <li>Botulism, tetanus</li>
          <li>SLE, dermatomyositis</li>
          <li>Cats: rare; secondary to dysautonomia, FHV, esophagitis</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Loss of normal peristalsis → food accumulates in dilated esophagus</li>
          <li>Passive reflux → regurgitation</li>
          <li>Aspiration → pneumonia → death</li>
          <li>Weight loss from inadequate intake</li>
          <li>Concurrent reflux esophagitis common</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Regurgitation</strong> ✨ — passive, undigested tubular food, no bile, no warning</li>
          <li>Often delayed minutes to hours after eating</li>
          <li>Weight loss, poor body condition</li>
          <li>Polyphagia (compensatory)</li>
          <li>Aspiration pneumonia signs: fever, lethargy, cough, dyspnea, tachypnea ✗</li>
          <li>Excessive salivation</li>
          <li>Halitosis (food retention)</li>
          <li>If MG: concurrent generalized weakness, fatigability, dropped jaw, ventroflexion</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Plain thoracic rad:</strong> dilated air- หรือ food-filled esophagus, ventral tracheal displacement, "tracheal stripe sign"</li>
          <li>Aspiration pneumonia: cranioventral alveolar pattern (right middle lobe)</li>
          <li>Some cases need <strong>contrast esophagram</strong> ± fluoroscopy เพื่อยืนยัน</li>
          <li>Vascular ring anomaly (PRAA): focal dilation cranial to heart base on lateral; "leftward deviation of trachea" on DV</li>
        </ul>
        <p><strong>Workup for cause (essential):</strong></p>
        <ul>
          <li><strong>AChR antibody (acetylcholine receptor)</strong> ✨ — myasthenia gravis screen — must test!</li>
          <li>T4, free T4 (hypothyroid)</li>
          <li>Resting cortisol / ACTH stim (Addison's)</li>
          <li>CBC, biochem, UA</li>
          <li>Lead level if indicated</li>
          <li>Endoscopy — esophagitis, FB, stricture, mass</li>
          <li>EMG/NCV — polyneuropathy</li>
        </ul>
      `,
      differential: `
        <p><strong>Vomiting vs Regurgitation:</strong></p>
        <ul>
          <li>Distinguish first — vomiting has DDx ที่ต่างกันสิ้นเชิง</li>
        </ul>
        <p><strong>Other cause of regurgitation:</strong></p>
        <ul>
          <li>Esophagitis</li>
          <li>Esophageal stricture</li>
          <li>Esophageal FB / mass</li>
          <li>Vascular ring anomaly</li>
          <li>Hiatal hernia</li>
          <li>Cricopharyngeal achalasia</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Treat underlying cause if identified ✨</strong></p>
        <ul>
          <li><strong>Myasthenia gravis:</strong> pyridostigmine 1-3 mg/kg PO q8-12h ± immunosuppressives. ~ 50% achieve immune remission spontaneously over 6-18 months — recheck AChR titer</li>
          <li>Hypothyroid: levothyroxine</li>
          <li>Addison's: physiologic glucocorticoid + mineralocorticoid replacement</li>
          <li>PRAA: surgical correction — best outcome if young, before megaesophagus permanent</li>
        </ul>

        <p><strong>2. Feeding management (mainstay for idiopathic) ✨</strong></p>
        <ul>
          <li><strong>Bailey chair / upright feeding</strong> 10-15 min before + after meals — gravity drainage ✨</li>
          <li>Small frequent meals (3-6×/day)</li>
          <li>Trial different food consistencies — meatballs, slurry, blended, kibble — find what works for individual dog</li>
          <li>Elevated water bowl</li>
          <li>If unable to maintain weight + recurrent aspiration: <strong>gastrostomy tube (PEG)</strong> bypassing esophagus</li>
        </ul>

        <p><strong>3. Pharmacologic adjuncts (limited evidence)</strong></p>
        <ul>
          <li><strong>Sildenafil 1 mg/kg PO q8-12h</strong> ✨ — relaxes lower esophageal sphincter, may improve passage; recent evidence supportive
            <ul>
              <li>Liquid form via compounding (1-2.5 mg/mL) easier to dose</li>
              <li>Give 30 min before meals</li>
            </ul>
          </li>
          <li>Bethanechol 5-15 mg PO q8h — cholinergic; theoretical motility benefit; variable response</li>
          <li>Cisapride — controversial; no significant evidence</li>
          <li>Metoclopramide — limited utility (acts on smooth muscle; esophagus มี striated muscle ส่วนใหญ่ในหมา)</li>
        </ul>

        <p><strong>4. Esophagitis / GERD prevention</strong></p>
        <ul>
          <li>Omeprazole 1-2 mg/kg PO q12-24h</li>
          <li>Sucralfate 0.5-1 g PO q8h slurry</li>
          <li>Famotidine 0.5-1 mg/kg PO q12h</li>
        </ul>

        <p><strong>5. Aspiration pneumonia management (when occurs)</strong></p>
        <ul>
          <li>See Bacterial Pneumonia entry</li>
          <li>Aggressive antibiotic therapy (broad-spectrum IV; doxycycline or amoxi-clav)</li>
          <li>Nebulization + coupage</li>
          <li>O2 support</li>
          <li>Recurrent pneumonia → consider PEG tube</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Aspiration pneumonia</strong> ✗ — single most common cause of death</li>
          <li>Severe weight loss, cachexia</li>
          <li>Esophagitis / stricture</li>
          <li>Owner fatigue with management</li>
          <li>Persistent regurgitation despite optimal management</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Idiopathic adult:</strong> guarded; median survival 3-15 months; many die from aspiration</li>
          <li><strong>MG with treatment:</strong> ~ 50% achieve immune remission; megaesophagus may resolve!</li>
          <li><strong>Congenital:</strong> guarded; some improve with growth, others persist lifelong</li>
          <li><strong>PRAA + early surgery:</strong> good if no permanent ME yet</li>
          <li><strong>Hypothyroidism / Addison's:</strong> good — reversible with treatment</li>
          <li>Owners must commit to long-term feeding management</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 29 · Esophagitis / Esophageal Stricture / FB ---------- */
  {
    id: 'esophagitis-stricture-fb',
    titleEn: 'Esophagitis, Stricture &amp; Esophageal Foreign Body',
    titleTh: 'หลอดอาหารอักเสบ / ตีบ / สิ่งแปลกปลอม',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['esophagitis', 'GERD', 'esophageal stricture', 'esophageal foreign body', 'omeprazole', 'sucralfate', 'balloon dilation', 'bougienage'],
    aliases: ['esophagitis', 'GERD', 'esophageal FB', 'หลอดอาหารอักเสบ', 'หลอดอาหารตีบ'],
    source: 'Ch. 29 · pp. 446–449',
    sections: {
      definition: `
        <p>กลุ่มโรค esophagus ที่ขัดขวาง / ทำลาย mucosa — มัก present ด้วย <strong>regurgitation, dysphagia, odynophagia</strong></p>
        <ul>
          <li><strong>Esophagitis:</strong> mucosal inflammation</li>
          <li><strong>Stricture:</strong> fibrotic narrowing — sequela ของ severe esophagitis</li>
          <li><strong>Foreign body:</strong> obstruction → emergency endoscopy</li>
        </ul>
      `,
      etiology: `
        <p><strong>Esophagitis:</strong></p>
        <ul>
          <li><strong>GERD</strong> (gastroesophageal reflux disease) — most common; idiopathic, post-anesthesia, brachycephalic dogs ✨</li>
          <li><strong>Pill-induced</strong> — doxycycline, clindamycin in cats! ✗ ต้องตามด้วยน้ำ/อาหาร 6-10 mL ทุกครั้ง</li>
          <li>Caustic ingestion (acids, alkalis)</li>
          <li>Foreign body irritation</li>
          <li>Persistent vomiting / chronic gastritis</li>
          <li>Hiatal hernia</li>
          <li>Megaesophagus (food retention)</li>
          <li>FHV in cats</li>
        </ul>
        <p><strong>Stricture:</strong></p>
        <ul>
          <li>Sequela ของ severe esophagitis (esp. post-anesthesia GERD ที่ไม่ recognized)</li>
          <li>FB removal trauma</li>
          <li>Caustic ingestion</li>
          <li>Mucosal damage from radiation</li>
        </ul>
        <p><strong>Foreign body:</strong></p>
        <ul>
          <li>Bones, fishhooks, toys, rawhide chews</li>
          <li>Common location: thoracic inlet, base of heart, distal esophagus (LES)</li>
          <li>Small breed dogs over-represented (Yorkie, Mini Poodle)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Mucosal injury → inflammation → ↓ peristalsis → reflux exacerbates</li>
          <li>Severe transmural inflammation → fibrotic healing → stricture</li>
          <li>FB compression → mucosal necrosis → perforation risk (mediastinitis ✗)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Esophagitis:</strong></p>
        <ul>
          <li><strong>Odynophagia</strong> — painful swallowing (may extend neck, refuse food despite hunger)</li>
          <li>Regurgitation</li>
          <li>Dysphagia, drooling</li>
          <li>Anorexia (pseudoanorexia from pain)</li>
          <li>Halitosis, retching</li>
        </ul>
        <p><strong>Stricture:</strong></p>
        <ul>
          <li>Progressive regurgitation, especially solid food</li>
          <li>Eventually unable to swallow even liquids</li>
          <li>Onset typically 1-3 weeks post-anesthesia event</li>
          <li>Weight loss</li>
        </ul>
        <p><strong>FB:</strong></p>
        <ul>
          <li><strong>Acute onset</strong> — sudden retching, regurgitation, drooling, refusing food</li>
          <li>Restless, distress</li>
          <li>Concurrent witnessed event (chewing bone, toy)</li>
          <li>Severe: respiratory distress (compression), coughing</li>
          <li>Perforation: pleuritis, mediastinitis, sepsis ✗</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Thoracic radiograph (lateral):</strong>
            <ul>
              <li>Radiopaque FB visible (bones)</li>
              <li>Free gas / mediastinitis (perforation) ✗</li>
              <li>Esophageal dilation cranial to lesion</li>
              <li>Aspiration pneumonia</li>
            </ul>
          </li>
          <li><strong>Contrast study (barium):</strong> rarely needed; identify stricture, perforation suspect</li>
          <li>CT — complicated cases, perforation evaluation</li>
        </ul>
        <p><strong>Endoscopy (gold standard):</strong></p>
        <ul>
          <li>Direct visualization of mucosa</li>
          <li>Esophagitis grading (mild erythema → ulceration → severe)</li>
          <li>Stricture diameter measurement, dilation</li>
          <li>FB retrieval ✨</li>
          <li>Biopsy if mass / atypical lesion</li>
        </ul>
      `,
      differential: `
        <p>Differentials for regurgitation:</p>
        <ul>
          <li>Megaesophagus</li>
          <li>Hiatal hernia</li>
          <li>Esophageal mass / neoplasia</li>
          <li>Vascular ring anomaly</li>
          <li>Cricopharyngeal achalasia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Esophagitis (medical):</strong></p>
        <ul>
          <li><strong>Acid suppression:</strong>
            <ul>
              <li><strong>Omeprazole 1-2 mg/kg PO q12-24h</strong> ✨ — first-line; PPI most effective</li>
              <li>Pantoprazole 1 mg/kg IV q12-24h (hospitalized)</li>
              <li>Famotidine 0.5-1 mg/kg IV/PO q12h — H2 blocker, less effective</li>
            </ul>
          </li>
          <li><strong>Mucosal protectant:</strong>
            <ul>
              <li><strong>Sucralfate 0.5-1 g PO q8h slurry</strong> ✨ — coats ulcers; give 1h apart from PPI for best effect</li>
            </ul>
          </li>
          <li><strong>Promotility:</strong>
            <ul>
              <li>Metoclopramide 0.2-0.5 mg/kg PO/SC q8h — ↑ LES tone, ↓ reflux</li>
              <li>Cisapride 0.1-0.5 mg/kg PO q8h (if available)</li>
            </ul>
          </li>
          <li><strong>Diet:</strong> small frequent meals, low-fat (ลด LES relaxation), bland</li>
          <li>Elevated feeding (megaesophagus + esophagitis combined)</li>
          <li>Treat concurrent vomiting</li>
          <li>Prevent: ตามน้ำ/อาหารหลังกิน doxycycline ในแมวทุกครั้ง! ✨</li>
          <li>Duration: 4-8 weeks; recheck endoscopy if persistent</li>
        </ul>

        <p><strong>Stricture (interventional):</strong></p>
        <ul>
          <li><strong>Balloon dilation</strong> ✨ — preferred; under endoscopic + fluoroscopic guidance
            <ul>
              <li>Multiple sessions usually needed (3-5 average)</li>
              <li>1-2 wk between sessions</li>
              <li>Success rate 70-85%</li>
            </ul>
          </li>
          <li>Bougienage — alternative; mechanical dilation</li>
          <li>Triamcinolone injection at stricture site post-dilation — ↓ recurrence (some evidence)</li>
          <li>Aggressive medical management between sessions (PPI + sucralfate)</li>
          <li>Esophageal stent — refractory cases (last resort; complications high)</li>
          <li>Surgical resection — last resort, high morbidity</li>
        </ul>

        <p><strong>Esophageal FB (emergency):</strong></p>
        <ul>
          <li><strong>Endoscopic removal ASAP</strong> ✨ — within 24h of obstruction ideally
            <ul>
              <li>Forceps, rat-tooth grasper, snare</li>
              <li>Push into stomach if removal too difficult — let dissolve / pass</li>
              <li>Always evaluate mucosa post-removal for ulceration / perforation</li>
            </ul>
          </li>
          <li>Surgical removal if endoscopy fails — esophagotomy (high morbidity)</li>
          <li>Post-removal: PPI + sucralfate × 2-4 weeks; soft diet</li>
          <li>Recheck endoscopy in 2-3 weeks if symptomatic — stricture risk</li>
          <li>If perforation: aggressive supportive care, IV antibiotics, surgical referral</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Stricture formation</strong> — major complication of severe esophagitis</li>
          <li>Perforation → mediastinitis, pleuritis, sepsis ✗</li>
          <li>Aspiration pneumonia</li>
          <li>Megaesophagus development (severe chronic)</li>
          <li>Recurrent stricture despite multiple dilations</li>
          <li>Esophageal pseudodiverticulum</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Mild esophagitis with prompt treatment: <strong>excellent</strong></li>
          <li>Severe esophagitis untreated: stricture risk high</li>
          <li>Stricture with balloon dilation: 70-85% success</li>
          <li>FB removed within 24h: usually good; longer obstruction → necrosis, perforation risk</li>
          <li>Perforation: guarded</li>
        </ul>
        <div class="callout">⚠️ <strong>Post-anesthetic dysphagia/regurgitation</strong> at 1-3 weeks → highly suspicious for esophageal stricture. Consider PPI prophylaxis in high-risk anesthesia (brachy, prolonged)</div>
      `,
    },
  },

  /* ---------- Ch 30 · Acute Gastritis &amp; Vomiting ---------- */
  {
    id: 'acute-gastritis',
    titleEn: 'Acute Gastritis &amp; Vomiting',
    titleTh: 'อาเจียนเฉียบพลัน',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['acute vomiting', 'gastritis', 'dietary indiscretion', 'maropitant', 'ondansetron', 'metoclopramide', 'antiemetic', 'HGE', 'AHDS'],
    aliases: ['acute vomiting', 'dietary indiscretion', 'อาเจียน', 'อาเจียนกะทันหัน', 'HGE'],
    source: 'Ch. 30 · pp. 459–462',
    sections: {
      definition: `
        <p>อาเจียนแบบเฉียบพลัน &lt; 7 วัน — เคสที่เจอบ่อยมากในคลินิก</p>
        <ul>
          <li>ส่วนใหญ่ <em>self-limiting</em> — supportive care พอ</li>
          <li>ต้องแยกเคสที่ <strong>serious</strong> ออก (FB, GDV, pancreatitis, Addison's, toxin, sepsis)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common (mild) causes:</strong></p>
        <ul>
          <li><strong>Dietary indiscretion</strong> — กินขยะ, เปลี่ยนอาหารกะทันหัน, treats</li>
          <li>Idiopathic gastritis</li>
          <li>Parasites (Giardia, ascarids — puppy)</li>
          <li>Drug-induced (NSAIDs, antibiotics, chemo, doxycycline pill esophagitis ในแมว)</li>
          <li>Bacterial / dietary overgrowth</li>
          <li>Mild food intolerance</li>
        </ul>
        <p><strong>Don't miss (serious causes):</strong></p>
        <ul>
          <li><strong>Foreign body / linear FB</strong> (string ในแมว — เปิดดูใต้ลิ้น!)</li>
          <li><strong>GDV</strong> — large/deep-chested breeds</li>
          <li><strong>Pancreatitis</strong></li>
          <li><strong>Addisonian crisis</strong> — มัก masquerade</li>
          <li><strong>Acute hemorrhagic diarrhea syndrome (AHDS / HGE)</strong> — Clostridium perfringens; bloody diarrhea + ↑ PCV</li>
          <li><strong>Parvo virus</strong> ใน puppy ✗</li>
          <li><strong>Toxins:</strong> chocolate, raisin/grape, xylitol, lily (cat), antifreeze, NSAID OD, paracetamol (cat fatal)</li>
          <li>Pyometra (intact female)</li>
          <li>Acute kidney injury, hepatic dz</li>
          <li>Intussusception</li>
          <li>Severe gastric ulcer (NSAID, mast cell tumor)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Gastric mucosal irritation/inflammation → ↑ secretion + altered motility → vomiting</li>
          <li>Vomiting → fluid/electrolyte loss (HCl loss → metabolic alkalosis, hypokalemia, hypochloremia)</li>
          <li>Severe → dehydration, hypovolemic shock</li>
          <li>Risk of aspiration pneumonia ใน obtunded patient</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Vomiting (active, with retching, ± bile, ± food)</li>
          <li>Anorexia, lethargy</li>
          <li>Abdominal discomfort</li>
          <li>± Diarrhea concurrent</li>
          <li>Dehydration (skin tent, dry MM, prolonged CRT)</li>
          <li><strong>Red flags:</strong>
            <ul>
              <li>Hematemesis (frank red หรือ "coffee grounds")</li>
              <li>Severe abdominal pain, distension</li>
              <li>Unproductive retching → GDV ✗</li>
              <li>Collapse, shock signs</li>
              <li>Severe lethargy, fever</li>
              <li>Dehydration severe / persistent</li>
              <li>Vomit looks like feces (distal obstruction)</li>
            </ul>
          </li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Mild self-limiting case (young, healthy, no red flags):</strong></p>
        <ul>
          <li>Minimal workup — history + PE</li>
          <li>Empirical treatment, recheck if no improvement 24-48h</li>
        </ul>
        <p><strong>Workup เมื่อ:</strong> persistent &gt; 24-48h, red flags, geriatric, immunocompromised</p>
        <ul>
          <li><strong>Tier 1:</strong> CBC, biochem (Na, K, Cl, BUN/Cr, glucose, albumin), UA, T4 (cat senior)</li>
          <li>Fecal flotation + Giardia ELISA</li>
          <li>Parvo SNAP (puppy with bloody diarrhea + vomiting)</li>
          <li><strong>Abdominal rad (3 views)</strong> — FB, ileus, free gas, mass, GDV</li>
          <li><strong>Abdominal US</strong> — preferred for soft tissue (FB, intussusception, pancreatitis, mass)</li>
          <li><strong>cPL/fPL SNAP</strong> ถ้าสงสัย pancreatitis</li>
          <li><strong>Resting cortisol / ACTH stim</strong> — rule out Addison's (must consider!)</li>
          <li>Toxin history — chocolate calculator, ethylene glycol, etc.</li>
        </ul>
      `,
      differential: `
        <p>ดู etiology + Clinical Manifestations entry</p>
      `,
      treatment: `
        <p><strong>Mild self-limiting (outpatient):</strong></p>
        <ul>
          <li><strong>NPO 12-24h</strong> (ไม่จำเป็นในแมว — เสี่ยง hepatic lipidosis)</li>
          <li>SQ fluids ที่คลินิก (LRS หรือ Plasmalyte 30-50 mL/kg) ถ้า mild dehydration</li>
          <li><strong>Maropitant (Cerenia) 1 mg/kg SC q24h</strong> ✨ — first-line antiemetic; effective + minimal side effects
            <ul>
              <li>PO 2 mg/kg q24h available</li>
            </ul>
          </li>
          <li><strong>Bland diet introduction</strong> หลัง 12-24h: ไก่ต้ม + ข้าวต้ม, ตามด้วยอาหาร GI prescription, ค่อยกลับสู่ regular diet ใน 3-5 วัน</li>
          <li>Probiotics (Saccharomyces boulardii, Enterococcus) — สนับสนุน gut microbiome</li>
          <li>Deworm ถ้ายังไม่ได้ทำล่าสุด (pyrantel ± fenbendazole)</li>
        </ul>

        <p><strong>Moderate-severe (hospitalized):</strong></p>
        <ul>
          <li><strong>IV fluids</strong> — LRS หรือ Plasmalyte
            <ul>
              <li>Replacement: deficit + maintenance + ongoing losses</li>
              <li>Bolus 10-20 mL/kg ถ้า hypovolemic → reassess</li>
              <li>Add KCl 20-40 mEq/L ถ้า hypokalemic</li>
            </ul>
          </li>
          <li><strong>Antiemetics:</strong>
            <ul>
              <li><strong>Maropitant 1 mg/kg SC/IV q24h</strong> — first choice</li>
              <li><strong>Ondansetron 0.5-1 mg/kg IV/PO q8-12h</strong> — refractory; combine กับ maropitant ได้ ✨</li>
              <li>Metoclopramide 0.2-0.5 mg/kg SC q8h หรือ CRI 1-2 mg/kg/day — prokinetic + central antiemetic</li>
              <li>Dolasetron 0.5-1 mg/kg IV q24h — alternative</li>
            </ul>
          </li>
          <li><strong>Acid suppression (เคสที่สงสัย ulcer/severe gastritis):</strong>
            <ul>
              <li>Omeprazole 1 mg/kg PO/IV q12-24h</li>
              <li>Pantoprazole 1 mg/kg IV q12-24h</li>
              <li>Famotidine 0.5-1 mg/kg IV/PO q12h — H2 blocker</li>
            </ul>
          </li>
          <li><strong>Sucralfate 0.5-1 g PO q8h slurry</strong> ถ้า hematemesis / suspected ulcer</li>
          <li>Gastroprotectant + anti-emetic combination เป็นมาตรฐาน</li>
        </ul>

        <p><strong>Specific scenarios:</strong></p>
        <ul>
          <li><strong>HGE / AHDS:</strong> aggressive IV fluids, antibiotics ตามอาการ (metronidazole 10-15 mg/kg PO q12h × 5-7d controversial — ส่วนใหญ่ไม่จำเป็น), antiemetic, supportive</li>
          <li><strong>Parvo puppy:</strong> aggressive IVF, broad-spectrum AB, antiemetic, plasma if hypoalbuminemic, isolation, NPO ตอนแรก แล้วเริ่ม early enteral nutrition</li>
          <li><strong>Toxin exposure:</strong> decontamination (induce vomiting ถ้ายังไม่อาเจียน + ≤ 2h post-ingestion), activated charcoal, specific antidote, consult Animal Poison Control</li>
          <li><strong>Foreign body:</strong> ไม่ induce vomiting; endoscopic หรือ surgical removal</li>
        </ul>

        <p><strong>Avoid:</strong></p>
        <ul>
          <li>Routine antibiotics (gut microbiome disruption) — เฉพาะที่มี indication ชัด</li>
          <li>NSAIDs ✗</li>
          <li>Inducing vomiting ใน corrosive/sharp FB ingestion</li>
          <li>Steroids (rarely indicated, except Addison's)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe dehydration, hypovolemic shock</li>
          <li>Electrolyte imbalance (hypoK, hypoCl)</li>
          <li>Aspiration pneumonia</li>
          <li>Hepatic lipidosis (cat &gt; 3 d anorexia) ✗</li>
          <li>Esophagitis from chronic vomiting</li>
          <li>Missed serious cause (FB, GDV, Addison's, toxin)</li>
          <li>Sepsis (parvo, severe gastroenteritis)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Mild self-limiting: <strong>excellent</strong> — recover 24-72h</li>
          <li>Pancreatitis-related: variable</li>
          <li>Parvo with aggressive treatment: 70-90% survival</li>
          <li>Untreated serious cause: poor</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 30 · Chronic Gastritis &amp; Vomiting ---------- */
  {
    id: 'chronic-gastritis',
    titleEn: 'Chronic Gastritis &amp; Vomiting',
    titleTh: 'อาเจียนเรื้อรัง',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['chronic vomiting', 'lymphoplasmacytic gastritis', 'Helicobacter', 'gastric ulcer', 'gastric lymphoma', 'omeprazole', 'sucralfate'],
    aliases: ['chronic vomiting', 'อาเจียนเรื้อรัง', 'gastric ulcer'],
    source: 'Ch. 30 · pp. 462–476',
    sections: {
      definition: `
        <p>อาเจียน &gt; 2-3 สัปดาห์ — ต้อง workup เสมอ</p>
        <ul>
          <li>หลายโรคแฝงอยู่ — primary gastric vs systemic</li>
          <li>Cat: hairball &gt; 1-2 ครั้ง/เดือน <em>ไม่ใช่ปกติ</em> — ส่วนใหญ่เป็น chronic enteropathy / lymphoma ✨</li>
        </ul>
      `,
      etiology: `
        <p><strong>Primary gastric:</strong></p>
        <ul>
          <li><strong>Lymphoplasmacytic gastritis</strong> — common form ของ chronic enteropathy</li>
          <li><strong>Eosinophilic gastritis</strong></li>
          <li><strong>Gastric ulcer</strong> — NSAIDs, mast cell tumor (histamine), gastrinoma, severe stress, hepatic dz</li>
          <li><strong>Gastric neoplasia:</strong>
            <ul>
              <li>Adenocarcinoma — most common malignant in dogs (older, esp. Belgian Shepherd, Rough Collie, Staffordshire)</li>
              <li>Lymphoma — most common malignant ในแมว ✨</li>
              <li>Leiomyoma/sarcoma, GIST</li>
            </ul>
          </li>
          <li><strong>Helicobacter</strong> — debated significance; some cases respond to triple therapy</li>
          <li>Foreign body (chronic, partial obstruction)</li>
          <li>Pyloric stenosis / outflow obstruction</li>
          <li>Bilious vomiting syndrome (empty stomach overnight → bile reflux)</li>
        </ul>
        <p><strong>Extra-gastric (systemic):</strong></p>
        <ul>
          <li>Renal disease (uremia)</li>
          <li>Hepatic disease</li>
          <li>Hyperthyroidism (cat) ✨</li>
          <li>Hypoadrenocorticism (Addison's) — atypical!</li>
          <li>Diabetes (DKA)</li>
          <li>Pancreatitis chronic</li>
          <li>Inflammatory bowel disease</li>
          <li>CNS disease (vestibular, ↑ ICP)</li>
          <li>Drugs (chronic NSAIDs)</li>
        </ul>
      `,
      pathophysiology: `<p>ดู etiology — กลไกต่างกันตามสาเหตุ</p>`,
      symptoms: `
        <ul>
          <li>Intermittent / persistent vomiting &gt; 2-3 wk</li>
          <li>± Hematemesis (ulcer, neoplasia, severe gastritis)</li>
          <li>± Melena</li>
          <li>Weight loss</li>
          <li>Anorexia / hyporexia variable</li>
          <li>Pica (ulcer)</li>
          <li>± Diarrhea concurrent</li>
          <li>± Polydipsia</li>
          <li><strong>Cat:</strong> "hairball" weekly+ → suspicious ✨; weight loss; vomiting after eating</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Tier 1:</strong> CBC, biochem (incl. albumin), UA, T4 (cat), fecal × 2-3</p>
        <p><strong>Tier 2:</strong></p>
        <ul>
          <li>FeLV/FIV (cat)</li>
          <li><strong>Resting cortisol / ACTH stim</strong> — Addison's screen</li>
          <li>cPL/fPL — pancreatitis</li>
          <li>Bile acids — hepatic dysfunction</li>
          <li>Cobalamin / folate</li>
          <li><strong>Abdominal US</strong> ✨ — gastric wall thickness, layering, mass, lymph node, foreign body, pancreas, intussusception</li>
          <li>Abdominal rad — FB, ileus</li>
        </ul>
        <p><strong>Tier 3 — Endoscopy + biopsy ✨:</strong></p>
        <ul>
          <li>Direct visualization stomach + duodenum</li>
          <li>Biopsy multiple sites (≥ 6-10 per region)</li>
          <li>Helicobacter detection (cytology, urease test, PCR)</li>
          <li>Gastric ulcer evaluation</li>
          <li>Tumor biopsy (caution — ulcer wall thin, perforation risk)</li>
          <li>Foreign body retrieval</li>
        </ul>
        <p><strong>Histopath grading:</strong> WSAVA criteria — inflammation severity + cell type (lymphoplasmacytic, eosinophilic, neutrophilic, granulomatous)</p>
        <p>Distinguishing severe lymphoplasmacytic gastritis from low-grade lymphoma can be challenging — <strong>PARR (PCR for antigen receptor rearrangement)</strong> or immunohistochemistry helps</p>
      `,
      differential: `<p>ดู etiology — comprehensive workup needed</p>`,
      treatment: `
        <p><strong>Treat underlying cause:</strong></p>

        <p><strong>1. Dietary trial (chronic enteropathy):</strong></p>
        <ul>
          <li><strong>Novel protein</strong> หรือ <strong>hydrolyzed protein diet</strong> × 2-4 wk minimum
            <ul>
              <li>Royal Canin Hypoallergenic, Hill's z/d, Purina HA</li>
              <li>Strict — no treats, table food</li>
              <li>Food-responsive enteropathy diagnosed if signs resolve</li>
            </ul>
          </li>
          <li>Highly digestible / low-fat GI diet — alternative</li>
        </ul>

        <p><strong>2. Antibiotic trial (ARE — antibiotic-responsive enteropathy):</strong></p>
        <ul>
          <li>Tylosin 10-20 mg/kg PO q12-24h × 3-6 weeks</li>
          <li>Metronidazole 10-15 mg/kg PO q12h × 3-6 wk</li>
          <li>Diagnose ARE if signs resolve, recur on stopping</li>
        </ul>

        <p><strong>3. Acid suppression + mucosal protection (ulcer / severe gastritis):</strong></p>
        <ul>
          <li><strong>Omeprazole 1-2 mg/kg PO q12-24h × 4-8 wk</strong> ✨</li>
          <li>Sucralfate 0.5-1 g PO q8h slurry × 2-4 wk</li>
          <li>Misoprostol 2-5 µg/kg PO q8h — NSAID-induced ulcer prevention/treatment</li>
          <li>Famotidine 0.5-1 mg/kg PO q12h — alternative H2 blocker</li>
        </ul>

        <p><strong>4. Helicobacter (suspected significance):</strong></p>
        <ul>
          <li>Triple therapy × 14-21 d:
            <ul>
              <li>Amoxicillin 20 mg/kg PO q12h</li>
              <li>Metronidazole 10 mg/kg PO q12h</li>
              <li>Omeprazole 1 mg/kg PO q12h</li>
              <li>± Bismuth subsalicylate</li>
            </ul>
          </li>
        </ul>

        <p><strong>5. Lymphoplasmacytic / eosinophilic gastritis (chronic enteropathy — IRE):</strong></p>
        <ul>
          <li>If diet + antibiotic trials fail → immunosuppression</li>
          <li><strong>Prednisolone</strong> (cat) / Prednisone (dog) 1-2 mg/kg PO q12h × 2-3 wk, then taper over 8-12 wk</li>
          <li>Budesonide 1-3 mg/dog PO q24h — locally active steroid; ↓ systemic effects (DM cat, recurrent infection dog)</li>
          <li>Refractory: cyclosporine 5 mg/kg PO q12-24h, chlorambucil (cats — less side effects)</li>
          <li>Cobalamin supplementation if low</li>
        </ul>

        <p><strong>6. Gastric neoplasia:</strong></p>
        <ul>
          <li>Lymphoma (cat low-grade): chlorambucil 2 mg/cat PO q48h + prednisolone — good response, MST 1-3 yr</li>
          <li>Lymphoma (high-grade): CHOP/COP — variable</li>
          <li>Adenocarcinoma: surgical resection if possible (poor prognosis even with surgery — MST 6 mo)</li>
          <li>Leiomyoma: surgical excision — curative</li>
        </ul>

        <p><strong>7. Bilious vomiting syndrome:</strong></p>
        <ul>
          <li>Late-evening small meal</li>
          <li>± Famotidine before bed</li>
          <li>± Metoclopramide 0.2-0.5 mg/kg PO before bed</li>
        </ul>

        <p><strong>8. Antiemetic for symptom control:</strong></p>
        <ul>
          <li>Maropitant 2 mg/kg PO q24h — chronic outpatient</li>
          <li>Ondansetron 0.5-1 mg/kg PO q8-12h</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Gastric ulcer perforation → septic peritonitis ✗</li>
          <li>Severe weight loss / cachexia</li>
          <li>Hypoalbuminemia (PLE component)</li>
          <li>Anemia (chronic blood loss, B12 deficiency)</li>
          <li>Aspiration pneumonia</li>
          <li>Lymphoma development from chronic inflammation (debated)</li>
          <li>Drug side effects (steroid: DM, recurrent UTI, etc.)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Food-responsive: <strong>excellent</strong></li>
          <li>Antibiotic-responsive: good — may need long-term</li>
          <li>Steroid-responsive (IRE): good with proper management</li>
          <li>Refractory IBD: variable</li>
          <li>Low-grade lymphoma: good — MST 1-3 yr</li>
          <li>High-grade lymphoma / carcinoma: guarded-poor</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 30 · GI Foreign Body ---------- */
  {
    id: 'gi-foreign-body',
    titleEn: 'Gastrointestinal Foreign Body',
    titleTh: 'สิ่งแปลกปลอมใน GI',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['foreign body', 'linear FB', 'string', 'obstruction', 'plication', 'enterotomy', 'gastrotomy', 'endoscopy'],
    aliases: ['FB', 'GI obstruction', 'gastric foreign body', 'intestinal foreign body', 'สิ่งแปลกปลอม'],
    source: 'Ch. 30 · pp. 459–462',
    sections: {
      definition: `
        <p>วัตถุที่กินเข้าไปติดอยู่ใน stomach / intestine — partial หรือ complete obstruction</p>
        <ul>
          <li>เจอบ่อยมากในหมาวัยรุ่น (puppies → 3 yr) — กินทุกอย่าง</li>
          <li>แมว: <strong>linear FB (string, sewing thread)</strong> เด่น — ใต้ลิ้น base ✨</li>
          <li>Complete obstruction = surgical emergency ✗</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common items:</strong></p>
        <ul>
          <li>Toys, balls, rubber items</li>
          <li>Bones (chicken, fish), corn cobs</li>
          <li>Rocks, plastic</li>
          <li>Socks, towels, clothing</li>
          <li>Fishing hook + line</li>
          <li>Coins (zinc → toxicity!)</li>
          <li>Magnets (multiple → bowel necrosis)</li>
          <li>Hair ties, rubber bands</li>
        </ul>
        <p><strong>Linear FB (cat):</strong></p>
        <ul>
          <li>String, yarn, thread (with needle attached)</li>
          <li>Cassette tape</li>
          <li>Wraps around base of tongue → distal end pulled by peristalsis → bowel plication ✨</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Mechanical obstruction → proximal distension, fluid accumulation, ileus</li>
          <li>Bowel wall edema, ↓ perfusion → necrosis</li>
          <li>Linear FB: bowel plicates around fixed string → laceration of mesenteric border → perforation ✗</li>
          <li>Complete obstruction → vomiting, dehydration, electrolyte loss, acid-base disturbance</li>
          <li>Perforation → septic peritonitis</li>
          <li>Sharp FB → laceration anywhere along path</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Acute:</strong></p>
        <ul>
          <li>Acute persistent vomiting</li>
          <li>Anorexia, lethargy</li>
          <li>Abdominal pain, "praying" position</li>
          <li>± Diarrhea (partial obstruction)</li>
          <li>± Tenesmus</li>
          <li>Abdominal distension</li>
          <li>Witnessed event sometimes</li>
        </ul>
        <p><strong>Chronic / partial:</strong></p>
        <ul>
          <li>Intermittent vomiting</li>
          <li>Weight loss</li>
          <li>Diarrhea + vomiting alternating</li>
        </ul>
        <p><strong>Linear FB (cat):</strong></p>
        <ul>
          <li>Vomiting</li>
          <li>Anorexia, dehydration</li>
          <li><strong>Examine under tongue base</strong> ✨ — string visible in 50%+ of linear FB cases (need sedation if uncooperative; ketamine 2.2 mg/kg IV)</li>
        </ul>
        <p><strong>Severe / perforation:</strong></p>
        <ul>
          <li>Septic shock signs — pale MM, prolonged CRT, hypotension, fever or hypothermia</li>
          <li>Severe abdominal pain, splinting</li>
          <li>Ileus, obstipation</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Physical exam:</strong></p>
        <ul>
          <li>Abdominal palpation — mass, pain, distension</li>
          <li><strong>Examine tongue base ทุกตัวที่อาเจียน</strong> ✨ (cats especially)</li>
          <li>Vital signs (shock, fever)</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal radiograph (3 views) — first-line</strong> ✨
            <ul>
              <li>Radiopaque FB (bones, metal)</li>
              <li>Distended bowel loops, abnormal gas pattern, plication</li>
              <li>"Two-population" gas/fluid pattern (proximal distended, distal empty) → obstruction</li>
              <li>Free gas → perforation ✗</li>
              <li>Free fluid → peritonitis</li>
            </ul>
          </li>
          <li><strong>Abdominal ultrasound</strong> ✨ — superior for radiolucent FB
            <ul>
              <li>FB visualized as hyperechoic with shadowing</li>
              <li>Bowel wall thickness, layering</li>
              <li>Free fluid, lymph nodes</li>
              <li>Plication / linear FB</li>
            </ul>
          </li>
          <li>Contrast study (barium) — rarely needed; partial obstruction; barium-impregnated polyethylene spheres (BIPS)</li>
          <li>CT — complex / equivocal cases</li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>CBC: stress leukogram, ± leukocytosis with left shift (peritonitis)</li>
          <li>Biochem: hypochloremic metabolic alkalosis (proximal obstruction); hypoK, hypoCl, hypoNa</li>
          <li>Lactate ↑ — bowel ischemia / sepsis</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Acute gastritis / gastroenteritis</li>
          <li>Pancreatitis</li>
          <li>Intussusception</li>
          <li>Mesenteric volvulus</li>
          <li>GDV</li>
          <li>HBC trauma</li>
          <li>Toxin</li>
          <li>Pyometra</li>
          <li>Septic peritonitis (other cause)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Stabilize first:</strong></p>
        <ul>
          <li>IV fluids — bolus 10-20 mL/kg LRS, then maintain</li>
          <li>Correct electrolyte abnormalities (K supplementation)</li>
          <li>Antiemetic — maropitant 1 mg/kg IV/SC</li>
          <li>Pain management — opioid (methadone 0.2-0.4 mg/kg IV/IM, buprenorphine)</li>
          <li>Antibiotics if perforation suspected/sepsis (ampicillin + enrofloxacin IV)</li>
        </ul>

        <p><strong>1. Endoscopic retrieval (esophagus, stomach):</strong></p>
        <ul>
          <li>FB above pyloric sphincter — endoscopic removal preferred ✨</li>
          <li>Forceps, snares, retrieval baskets</li>
          <li>If unable to grasp — push to stomach, then surgical if needed</li>
          <li>Inspect mucosa post-retrieval</li>
        </ul>

        <p><strong>2. Surgical removal:</strong></p>
        <ul>
          <li><strong>Indications:</strong>
            <ul>
              <li>Intestinal obstruction (cannot reach by endoscope)</li>
              <li>FB in stomach not retrievable endoscopically</li>
              <li>Perforation, peritonitis ✗</li>
              <li>Linear FB with plication</li>
              <li>Sharp FB risk to bowel wall</li>
              <li>Failed conservative management ของ partial obstruction</li>
            </ul>
          </li>
          <li><strong>Gastrotomy</strong> — incision on greater curvature, retrieve, 2-layer closure</li>
          <li><strong>Enterotomy</strong> — antimesenteric incision, retrieve</li>
          <li><strong>Resection + anastomosis</strong> — necrotic bowel, multiple plication sites</li>
          <li>Multiple enterotomies for linear FB (don't pull through!)</li>
          <li>Lavage abdomen if peritonitis</li>
          <li>Closed-suction drain (Jackson-Pratt) ถ้าsepsis</li>
        </ul>

        <p><strong>3. Conservative management — selected cases only:</strong></p>
        <ul>
          <li>Small smooth FB likely to pass (small stones, coins)</li>
          <li>No clinical signs of obstruction</li>
          <li>Serial radiographs q12-24h to monitor passage</li>
          <li>IV fluids, antiemetic</li>
          <li>Surgery if no progression in 24-48h or signs worsen</li>
        </ul>

        <p><strong>Linear FB (cat) — special considerations:</strong></p>
        <ul>
          <li><strong>NEVER pull on visible string</strong> ✗ — risk of bowel laceration</li>
          <li>Cut tongue end to release tension</li>
          <li>If short string + minimal plication: may pass with conservative management + careful monitoring</li>
          <li>Plication / signs of obstruction: surgery — multiple enterotomies along plicated segment</li>
          <li>Aggressive supportive care</li>
        </ul>

        <p><strong>Post-op care:</strong></p>
        <ul>
          <li>IV fluids 24-48h until eating</li>
          <li>Pain management (opioid, taper)</li>
          <li>Maropitant continued</li>
          <li>Early enteral nutrition (within 12-24h) — improves healing</li>
          <li>Sucralfate, omeprazole short course</li>
          <li>Antibiotics × 5-7d (cefazolin or amoxi-clav) ถ้า dehiscence risk หรือ peritonitis</li>
          <li>Monitor incision, abdominal pain, vomiting recurrence</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Septic peritonitis</strong> ✗ — perforation; mortality 30-50%</li>
          <li><strong>Dehiscence</strong> — esp. ใน hypoalbuminemia, prolonged obstruction, sepsis</li>
          <li>Short bowel syndrome (extensive resection)</li>
          <li>Intussusception post-op</li>
          <li>Recurrent FB ingestion (behavioral)</li>
          <li>Anesthetic complications</li>
          <li>Aspiration pneumonia</li>
          <li>SSI (surgical site infection)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Uncomplicated FB removed promptly: <strong>excellent</strong> &gt; 95%</li>
          <li>Linear FB without perforation: good</li>
          <li>Perforation + septic peritonitis: guarded — 30-50% mortality even with aggressive treatment</li>
          <li>Hypoalbuminemia &lt; 2.0 g/dL: ↑ dehiscence risk</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 30 · GDV ---------- */
  {
    id: 'gdv',
    titleEn: 'Gastric Dilatation-Volvulus (GDV)',
    titleTh: 'GDV — กระเพาะบิด',
    type: 'disease',
    system: 'digestive',
    species: ['dog'],
    tags: ['GDV', 'bloat', 'gastric volvulus', 'gastropexy', 'unproductive retching', 'large breed', 'deep-chested', 'emergency surgery'],
    aliases: ['bloat', 'gastric torsion', 'GDV', 'กระเพาะบิด', 'กระเพาะอืด'],
    source: 'Ch. 30 · pp. 477–479',
    sections: {
      definition: `
        <p>กระเพาะ <strong>dilate + rotate</strong> รอบแกน mesenteric — emergency!</p>
        <ul>
          <li>Mortality สูงถ้าไม่รักษาเร็ว — 15-30% แม้ผ่าตัด</li>
          <li>เจอใน <strong>large/giant deep-chested breeds</strong> เด่น</li>
          <li>Clock direction (จากด้าน caudal): มัก clockwise 180-360°</li>
        </ul>
      `,
      etiology: `
        <p><strong>Breed predisposition (highest risk):</strong></p>
        <ul>
          <li>Great Dane (&gt; 40% lifetime risk!)</li>
          <li>Saint Bernard, Weimaraner, Irish Setter, Gordon Setter, Standard Poodle, Doberman, GSD, Boxer</li>
          <li>Akita, Bloodhound, Newfoundland</li>
        </ul>
        <p><strong>Risk factors:</strong></p>
        <ul>
          <li>Deep-chested conformation</li>
          <li>First-degree relative with GDV</li>
          <li>Older age &gt; 7 yr</li>
          <li>Lean body condition</li>
          <li>Once-daily large meal</li>
          <li>Eating from elevated bowl ✗ (counterintuitive — actually ↑ risk)</li>
          <li>Stress, anxious temperament</li>
          <li>Vigorous exercise post-meal</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Gastric distension with gas / fluid → impaired venous return</li>
          <li>Volvulus → vascular compromise of stomach wall + spleen</li>
          <li>Pylorus rotates ventrally and to left side</li>
          <li>↓ Venous return (caudal vena cava compression) → distributive/hypovolemic shock</li>
          <li>Gastric wall ischemia → necrosis → endotoxin release</li>
          <li>Spleen often torsed/congested</li>
          <li>Severe metabolic acidosis, lactate ↑</li>
          <li>DIC, MODS, ARDS</li>
          <li>Cardiac arrhythmias (VPCs, VT) common — myocardial ischemia + electrolyte</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Unproductive retching</strong> ✨ — pathognomonic; "trying to vomit but nothing comes out"</li>
          <li>Acute abdominal distension (especially cranial)</li>
          <li>Restlessness, anxiety, pacing</li>
          <li>Hypersalivation</li>
          <li>Rapid deterioration — collapse, weak pulses</li>
          <li>Pale MM, prolonged CRT</li>
          <li>Tachycardia → eventually bradycardia (severe)</li>
          <li>Tachypnea, dyspnea (gastric pressure on diaphragm)</li>
          <li>Tympanic abdomen on percussion (gas)</li>
          <li>Sometimes hematemesis</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical recognition + immediate radiograph:</strong></p>
        <ul>
          <li><strong>Right lateral abdominal radiograph</strong> ✨ — diagnostic
            <ul>
              <li>"<strong>Double bubble</strong>" / "<strong>Popeye sign</strong>" / "<strong>compartmentalized stomach</strong>" — pylorus displaced dorsally on right lateral, separated from gastric body by soft tissue</li>
              <li>Massive gastric distension</li>
              <li>± Pneumoperitoneum (gastric rupture) ✗</li>
            </ul>
          </li>
          <li>VD usually unnecessary — patient unstable for repositioning</li>
          <li>Distinguish from simple dilatation: dilatation alone = no rotation, no compartmentalization</li>
        </ul>
        <p><strong>Lab (parallel with stabilization, don't delay):</strong></p>
        <ul>
          <li>CBC, biochem, electrolytes, lactate</li>
          <li><strong>Plasma lactate &gt; 6 mmol/L = poor prognosis</strong> ✨ (gastric necrosis predictor)</li>
          <li>Lactate failing to normalize after fluids = worse</li>
          <li>Coagulation profile — DIC</li>
          <li>ECG — VPCs, VT (50-75% develop arrhythmias)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Simple gastric dilatation (no volvulus) — decompresses easily, no compartmentalization</li>
          <li>Acute pancreatitis</li>
          <li>Septic peritonitis</li>
          <li>Splenic torsion (rare standalone)</li>
          <li>Small intestinal volvulus / mesenteric torsion</li>
          <li>Acute hemoabdomen</li>
        </ul>
      `,
      treatment: `
        <p><strong>GDV = surgical emergency — every minute counts ✗</strong></p>

        <p><strong>1. Immediate stabilization (parallel with surgery prep):</strong></p>
        <ul>
          <li><strong>Two large-bore IV catheters in cephalic veins</strong> (avoid hindlimb — caudal vena cava compromised) ✨</li>
          <li><strong>Aggressive IV fluids:</strong>
            <ul>
              <li>Shock dose: 90 mL/kg/hr LRS or Plasmalyte (start with 1/4-1/2 dose, reassess)</li>
              <li>Hypertonic saline 7.5% 4 mL/kg over 5-10 min — alternative for rapid resuscitation</li>
              <li>Colloid (Hetastarch 5-10 mL/kg) — adjunct</li>
            </ul>
          </li>
          <li><strong>Gastric decompression — ASAP:</strong>
            <ul>
              <li><strong>Trocharization</strong>: 14-16 g IV catheter through right paracostal area where most tympanic — quick, easy
                <ul>
                  <li>Risk: spleen laceration if poorly placed</li>
                </ul>
              </li>
              <li><strong>Orogastric intubation</strong>: lubricated stomach tube; measure to last rib; if cannot pass — volvulus likely (don't force)</li>
              <li>Decompression often relieves shock dramatically</li>
            </ul>
          </li>
          <li>Pain management: methadone 0.2 mg/kg IV, buprenorphine, fentanyl CRI</li>
          <li>Antibiotics: ampicillin 22 mg/kg IV + enrofloxacin 5 mg/kg IV (broad coverage; gut translocation, peritonitis if rupture)</li>
          <li>Treat arrhythmias: lidocaine 2 mg/kg IV bolus, then CRI 25-75 µg/kg/min ถ้า sustained VT</li>
          <li>O2 supplementation</li>
          <li>Continuous ECG monitoring</li>
        </ul>

        <p><strong>2. Surgical correction (definitive treatment) ✨</strong></p>
        <ul>
          <li><strong>Goals:</strong>
            <ul>
              <li>Decompress stomach</li>
              <li>Reposition (derotate) — usually counter-clockwise from surgeon's view</li>
              <li>Assess gastric wall viability</li>
              <li>Resection of necrotic stomach (greater curvature most affected)</li>
              <li>Splenectomy if severe congestion / torsion</li>
              <li><strong>Gastropexy</strong> ✨ — prevent recurrence (essential — 75-80% recurrence without)</li>
            </ul>
          </li>
          <li>Right-side gastropexy techniques:
            <ul>
              <li>Incisional gastropexy (most common)</li>
              <li>Belt-loop</li>
              <li>Circumcostal</li>
              <li>Tube gastropexy</li>
            </ul>
          </li>
          <li>Lavage abdomen, address peritonitis</li>
        </ul>

        <p><strong>3. Post-op care:</strong></p>
        <ul>
          <li>ICU monitoring 24-72h</li>
          <li>IV fluids continued</li>
          <li>Pain management (CRI)</li>
          <li>Continuous ECG — VT common 24-72h post-op
            <ul>
              <li>Treat sustained VT or significant compromise (lidocaine CRI, sotalol later)</li>
              <li>Many self-resolve</li>
            </ul>
          </li>
          <li>Anti-emetic (maropitant)</li>
          <li>Acid suppression (pantoprazole IV → omeprazole PO)</li>
          <li>Early enteral feeding (start small bland meals 12-24h post-op)</li>
          <li>Monitor for: ileus, recurrent vomiting, septic peritonitis (dehiscence), DIC, AKI, ARDS</li>
          <li>Recheck lactate</li>
        </ul>

        <p><strong>Prophylactic gastropexy:</strong></p>
        <ul>
          <li>Recommended for high-risk breeds (Great Dane especially)</li>
          <li>Concurrent with neuter/spay or as solo procedure</li>
          <li>Laparoscopic gastropexy — minimally invasive option</li>
          <li>↓ Risk of GDV ~ 30-fold</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Cardiac arrhythmias</strong> (VPCs, VT) — 50-75%; peak 24-72h post-op</li>
          <li><strong>Gastric wall necrosis</strong> → resection / fatal</li>
          <li>Septic peritonitis (gastric rupture / dehiscence) ✗</li>
          <li>DIC</li>
          <li>AKI</li>
          <li>ARDS</li>
          <li>SIRS / MODS</li>
          <li>Splenic infarction / necrosis</li>
          <li>Reperfusion injury</li>
          <li>Recurrence (without gastropexy)</li>
          <li>Anesthetic / surgical complications</li>
        </ul>
        <p><strong>Prognosis (mortality predictors):</strong></p>
        <ul>
          <li><strong>Lactate &gt; 6 mmol/L pre-op</strong> ✨ — poor outcome</li>
          <li>Failure of lactate to clear with fluids</li>
          <li>Gastric wall necrosis requiring resection (mortality 35-65%)</li>
          <li>Splenectomy required</li>
          <li>Pre-existing comorbidities</li>
          <li>Time from onset to surgery &gt; 6 hours</li>
        </ul>
        <p><strong>Survival:</strong></p>
        <ul>
          <li>Uncomplicated GDV with prompt surgery + gastropexy: <strong>~ 80-90%</strong></li>
          <li>Gastric necrosis requiring resection: 35-65%</li>
          <li>Severe sepsis / DIC: poor</li>
          <li>Recurrence after gastropexy: &lt; 5% (vs 75-80% without)</li>
        </ul>
        <div class="callout">⚠️ <strong>Owner education:</strong> Time = life ใน GDV. ถ้า large-breed dog มาด้วย unproductive retching + bloated abdomen = ER ทันที. Prophylactic gastropexy ใน high-risk breed คุ้มมาก</div>
      `,
    },
  },

  /* ---------- Ch 31 · Canine Parvovirus ---------- */
  {
    id: 'canine-parvovirus',
    titleEn: 'Canine Parvoviral Enteritis (CPV-2)',
    titleTh: 'Parvo — ลำไส้อักเสบจากไวรัสในลูกหมา',
    type: 'disease',
    system: 'digestive',
    species: ['dog'],
    tags: ['parvo', 'CPV-2', 'puppy', 'bloody diarrhea', 'leukopenia', 'maropitant', 'plasma transfusion', 'ELISA SNAP'],
    aliases: ['parvo virus', 'CPV', 'Parvo', 'ลูกหมาท้องเสียเป็นเลือด'],
    source: 'Ch. 31 · pp. 491–494',
    sections: {
      definition: `
        <p>โรคติดเชื้อไวรัสร้ายแรงในลูกหมา — <em>Canine parvovirus type 2 (CPV-2)</em> — ทำลาย rapidly dividing cells ใน intestinal crypts + bone marrow</p>
        <ul>
          <li>เจอบ่อยใน <strong>puppies 6 wk - 6 mo</strong> ที่ยังไม่ได้ vaccine ครบ</li>
          <li>Mortality 10-30% ถ้าได้รับการรักษาทันท่วงที, &gt; 90% ถ้าไม่รักษา</li>
          <li>เจอใน Thailand ทั่วไป — endemic</li>
        </ul>
      `,
      etiology: `
        <p><strong>Pathogen:</strong> CPV-2 (variants 2a, 2b, 2c) — non-enveloped DNA virus, <strong>extremely environmentally stable</strong> (months-years)</p>
        <p><strong>Transmission:</strong></p>
        <ul>
          <li>Fecal-oral (direct or fomite)</li>
          <li>Survives in environment คงทนมาก</li>
          <li>Incubation 3-14 d (typically 4-7)</li>
        </ul>
        <p><strong>Risk factors:</strong></p>
        <ul>
          <li>Age 6 wk - 6 mo (maternal Ab wanes)</li>
          <li>Incomplete vaccination series</li>
          <li>Breed predisposition: <strong>Rottweiler, Doberman, German Shepherd, English Springer, Lab, Pit Bull</strong></li>
          <li>Stress, parasitism, multi-dog environment</li>
          <li>Concurrent enteric infection</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Virus targets <strong>rapidly dividing cells</strong>:
            <ul>
              <li>Intestinal crypt epithelium → villous atrophy → severe enteritis</li>
              <li>Bone marrow → severe leukopenia (esp. neutropenia)</li>
              <li>Lymphoid tissue → immunosuppression</li>
              <li>Cardiac myocytes (very young pups) → myocarditis (rare now due to maternal Ab)</li>
            </ul>
          </li>
          <li>Loss of intestinal barrier → <strong>bacterial translocation</strong> → sepsis / endotoxemia ✗</li>
          <li>Severe protein/fluid loss → hypoalbuminemia, dehydration, hypovolemic shock</li>
          <li>Hypoglycemia common (small pups, sepsis)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Lethargy, anorexia, fever</strong> first 24-48h (sometimes hypothermia later — sepsis)</li>
          <li>Vomiting — often <strong>severe + persistent</strong></li>
          <li><strong>Hemorrhagic diarrhea</strong> ✨ — frank red, foul-smelling, classic</li>
          <li>Severe dehydration, prolonged CRT, weak pulses</li>
          <li>Abdominal pain</li>
          <li>± Hypoglycemia signs (weakness, seizures)</li>
          <li>Septic shock signs (severe — pale/injected MM, hypotension, cold extremities)</li>
          <li>Diarrhea may be absent first 24-48h — <strong>vomiting + leukopenia + signalment</strong> → suspect</li>
          <li>Death within 48-72h if untreated</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Fecal antigen ELISA (SNAP) — primary test ✨</strong></p>
        <ul>
          <li>In-clinic, 8-10 min</li>
          <li>Sensitivity ~ 80-90%</li>
          <li>Specificity high</li>
          <li>False negative: early disease (before viral shedding peaks), late disease (post-shedding)</li>
          <li>False positive (weak): vaccination within 5-15 d (vaccine virus shed transiently)</li>
        </ul>
        <p><strong>CBC:</strong></p>
        <ul>
          <li><strong>Severe leukopenia / neutropenia</strong> ✨ — hallmark; WBC often &lt; 2000/µL</li>
          <li>Lymphopenia early</li>
          <li>± Anemia (chronic blood loss)</li>
        </ul>
        <p><strong>Biochem:</strong></p>
        <ul>
          <li>Hypoglycemia (sepsis, very young)</li>
          <li>Hypoalbuminemia (PLE)</li>
          <li>Hyponatremia, hypokalemia, hypochloremia</li>
          <li>Pre-renal azotemia</li>
          <li>↑ Lactate (sepsis)</li>
        </ul>
        <p><strong>Confirm cases:</strong> PCR (more sensitive, useful when ELISA equivocal)</p>
        <p><strong>Coag:</strong> consider DIC screening in severe cases</p>
        <p><strong>Rule out:</strong> Giardia, ascarids, intussusception (parvo predisposes!), distemper, hemorrhagic gastroenteritis</p>
      `,
      differential: `
        <ul>
          <li>Hemorrhagic gastroenteritis / AHDS</li>
          <li>Distemper (multisystemic — neuro, respiratory)</li>
          <li>Coronavirus enteritis (milder usually)</li>
          <li>Severe parasitism (hookworms, Giardia)</li>
          <li>Foreign body / intussusception</li>
          <li>Salmonellosis</li>
          <li>Toxin (ethylene glycol)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Hospitalization + intensive supportive care — no specific antiviral</strong></p>

        <p><strong>1. Isolation ✨</strong></p>
        <ul>
          <li>Strict isolation ward</li>
          <li>Dedicated equipment, PPE</li>
          <li>Foot baths, bleach 1:32 for environment</li>
          <li>Stool isolation for staff</li>
        </ul>

        <p><strong>2. Aggressive IV fluid therapy:</strong></p>
        <ul>
          <li>Bolus 10-20 mL/kg LRS or Plasmalyte until perfusion restored</li>
          <li>Maintenance + replacement of deficit + ongoing losses</li>
          <li>Add 20-40 mEq/L KCl (replace as supplement once urinating)</li>
          <li>Add 2.5-5% dextrose if hypoglycemic</li>
          <li>Monitor weight, BP, urine output, electrolytes q12h</li>
        </ul>

        <p><strong>3. Antibiotics — broad-spectrum IV ✨</strong></p>
        <ul>
          <li>Bacterial translocation + neutropenia → sepsis risk high</li>
          <li><strong>Ampicillin 22 mg/kg IV q6-8h + enrofloxacin 5 mg/kg IV q24h</strong> ✨
            <ul>
              <li>Caution: enrofloxacin in puppies &lt; 28 wk — cartilage; ใช้เฉพาะ severe sepsis</li>
              <li>Alternative: ampicillin + gentamicin (only when well-hydrated, no AKI)</li>
              <li>Or amoxi-clav + metronidazole</li>
            </ul>
          </li>
          <li>Continue until WBC normalizes + clinical improvement</li>
        </ul>

        <p><strong>4. Antiemetics (essential for early enteral nutrition):</strong></p>
        <ul>
          <li><strong>Maropitant 1 mg/kg SC/IV q24h</strong> ✨ (over 5 min if IV)</li>
          <li>Ondansetron 0.5-1 mg/kg IV q8-12h — combine ได้</li>
          <li>Metoclopramide CRI 1-2 mg/kg/day — adjunct</li>
        </ul>

        <p><strong>5. Pain management:</strong></p>
        <ul>
          <li>Buprenorphine 0.02 mg/kg IV/IM q6-8h</li>
          <li>Avoid NSAIDs ✗</li>
        </ul>

        <p><strong>6. Plasma / colloid (severe hypoalbuminemia):</strong></p>
        <ul>
          <li>FFP 10-20 mL/kg ถ้า albumin &lt; 1.5-2.0 g/dL หรือ DIC</li>
          <li>Hetastarch alternative (but affects platelet function)</li>
          <li>Human serum albumin — if available</li>
        </ul>

        <p><strong>7. Early enteral nutrition ✨</strong></p>
        <ul>
          <li><strong>Start within 12-24h</strong> (don't wait for vomiting to stop completely)</li>
          <li>Improves survival, ↓ time to recovery, ↓ bacterial translocation</li>
          <li>Small frequent meals — bland diet</li>
          <li>Naso-esophageal tube ถ้ายังไม่กิน</li>
        </ul>

        <p><strong>8. Monitor:</strong></p>
        <ul>
          <li>CBC daily — WBC trending up = recovery</li>
          <li>Glucose q6-12h</li>
          <li>Electrolytes q12h</li>
          <li>Vital signs q4-6h</li>
          <li>Watch for intussusception (acute deterioration after improvement!)</li>
        </ul>

        <p><strong>Outpatient management — if owner cannot afford hospitalization:</strong></p>
        <ul>
          <li>Less ideal but better than nothing</li>
          <li>SC fluids 60-100 mL/kg/day divided</li>
          <li>Maropitant SC q24h</li>
          <li>Antibiotics: amoxi-clav PO if tolerated</li>
          <li>Recheck daily</li>
          <li>Survival rate lower but possible (50-70%)</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Core vaccination: DHPP เริ่ม 6-8 wk → q3-4 wk จน 16+ wk → booster 1 ปี → q3 ปี</li>
          <li>High-risk breeds: extend last vaccine to 18-20 wk</li>
          <li>Avoid public dog areas until 1 wk post-final puppy vaccine</li>
          <li>Environmental hygiene</li>
          <li>Recovered dogs immune for life</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Sepsis / endotoxemia</strong> ✗</li>
          <li>Severe dehydration / hypovolemic shock</li>
          <li>DIC</li>
          <li>Hypoglycemia (very young / sepsis)</li>
          <li><strong>Intussusception</strong> — important complication; acute deterioration after improvement; rad/US confirms</li>
          <li>Aspiration pneumonia</li>
          <li>Esophagitis from severe vomiting</li>
          <li>Hypoproteinemia / edema</li>
          <li>Death</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Aggressive in-hospital treatment: <strong>70-90% survival</strong> ✨</li>
          <li>Outpatient care: 50-70%</li>
          <li>Untreated: &gt; 90% mortality</li>
          <li>Survive first 4 days → typically recover</li>
          <li>Younger pups (&lt; 12 wk) + smaller size = worse</li>
          <li>Severe leukopenia + hypoalbuminemia + hypoglycemia = worse</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 31 · Acute SI Diarrhea ---------- */
  {
    id: 'acute-si-diarrhea',
    titleEn: 'Acute Small Intestinal Diarrhea',
    titleTh: 'ท้องเสียเฉียบพลัน — SI',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['acute diarrhea', 'enteritis', 'AHDS', 'HGE', 'parasites', 'Giardia', 'dietary indiscretion', 'parvo'],
    aliases: ['acute diarrhea', 'enteritis', 'AHDS', 'HGE', 'ท้องเสีย'],
    source: 'Ch. 31 · pp. 488–491',
    sections: {
      definition: `
        <p>ท้องเสียเฉียบพลัน &lt; 14 วัน — เคสที่เจอในคลินิกบ่อยมาก</p>
        <ul>
          <li>SI pattern: ↑ volume, ↓ frequency (3-5/day), no urgency, may have melena, weight loss</li>
          <li>ส่วนใหญ่ self-limiting; แต่ต้องคัดแยก serious cases</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common (mild):</strong></p>
        <ul>
          <li><strong>Dietary indiscretion</strong> — กินขยะ, เปลี่ยนอาหาร, treats, food intolerance</li>
          <li>Stress (boarding, travel)</li>
          <li>Parasites: <strong>Giardia</strong> ✨, ascarids, hookworms, whipworms (LI but can present as mixed), coccidia (puppy/kitten)</li>
          <li>Mild dysbiosis</li>
        </ul>
        <p><strong>Infectious:</strong></p>
        <ul>
          <li><strong>CPV-2</strong> (puppy) ✗ — see entry</li>
          <li>FPV (feline panleukopenia)</li>
          <li>Coronavirus (mild)</li>
          <li>Bacterial: Salmonella, Campylobacter, Clostridium perfringens / difficile, E. coli</li>
          <li>Protozoa: Cryptosporidium, Tritrichomonas (cat — mostly LI), Giardia</li>
        </ul>
        <p><strong>AHDS (Acute Hemorrhagic Diarrhea Syndrome):</strong></p>
        <ul>
          <li>Previously called HGE</li>
          <li>Sudden severe bloody diarrhea ("raspberry jam") + vomiting + ↑ PCV (hemoconcentration) ✨</li>
          <li>Small breeds over-represented (Schnauzer, Yorkie, Maltese)</li>
          <li>Likely Clostridium perfringens netF toxin</li>
          <li>Typically afebrile (vs sepsis)</li>
        </ul>
        <p><strong>Toxins/Drugs:</strong></p>
        <ul>
          <li>NSAIDs, antibiotics</li>
          <li>Mushrooms, plants</li>
          <li>Heavy metals</li>
        </ul>
        <p><strong>Don't miss:</strong></p>
        <ul>
          <li>Foreign body / intussusception</li>
          <li>Addison's</li>
          <li>Pancreatitis</li>
          <li>Sepsis from non-GI source</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Mucosal damage / inflammation → ↑ permeability + ↓ absorption + ↑ secretion</li>
          <li>Osmotic + secretory + inflammatory components</li>
          <li>Fluid/electrolyte loss → dehydration, acid-base disturbance (typically metabolic acidosis)</li>
          <li>AHDS: severe mucosal damage → fluid + protein + RBC loss; PCV ↑ from disproportionate fluid loss</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Loose to liquid stool, ↑ volume</li>
          <li>± Hematochezia (frank blood) or melena</li>
          <li>± Vomiting concurrent</li>
          <li>± Anorexia, lethargy</li>
          <li>Dehydration variable</li>
          <li>Abdominal discomfort</li>
          <li>Weight loss (acute)</li>
          <li>AHDS: severe distress, dramatic bloody diarrhea, ↑ PCV</li>
          <li>Severe / sepsis: fever (or hypothermia), prolonged CRT, weak pulses, collapse</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Mild self-limiting case:</strong></p>
        <ul>
          <li>Minimal workup — history + PE + fecal direct/flotation</li>
          <li>Empirical treatment, recheck if persistent</li>
        </ul>
        <p><strong>Workup เมื่อ:</strong> persistent &gt; 24-48h, severe signs, puppy/kitten, geriatric, immunocompromised</p>
        <ul>
          <li><strong>Fecal exam (3 specimens):</strong> direct smear, flotation, Giardia ELISA</li>
          <li><strong>Parvo SNAP</strong> ใน puppy with bloody diarrhea ✨</li>
          <li>CBC: WBC (leukocytosis vs leukopenia of parvo), PCV (↑ in AHDS)</li>
          <li>Biochem, electrolytes, lactate</li>
          <li>Resting cortisol → ACTH stim if Addison's suspected</li>
          <li>Abdominal rad ± US if obstruction / mass suspected</li>
          <li>cPL/fPL ถ้า pancreatitis suspected</li>
          <li>Stool PCR panel — outbreaks, refractory cases</li>
        </ul>
      `,
      differential: `<p>ดู etiology + Clinical Manifestations entry</p>`,
      treatment: `
        <p><strong>Mild self-limiting (outpatient):</strong></p>
        <ul>
          <li>Bland diet × 3-5 d (chicken + rice / GI prescription)</li>
          <li>Small frequent meals</li>
          <li>SQ fluids if mild dehydration (LRS 30-50 mL/kg)</li>
          <li>Probiotics (S. boulardii, FortiFlora, ProViable)</li>
          <li>Fiber supplement (psyllium 1-2 tsp per meal) — soft stool</li>
          <li>Deworming (pyrantel ± fenbendazole 50 mg/kg PO q24h × 3 d) — empirical</li>
          <li>Maropitant 1 mg/kg SC q24h ถ้ามี vomiting concurrent</li>
          <li>Recheck if no improvement 24-48h</li>
        </ul>

        <p><strong>Giardia treatment:</strong></p>
        <ul>
          <li>Fenbendazole 50 mg/kg PO q24h × 5 days (preferred — works well in cats too) ✨</li>
          <li>Metronidazole 25 mg/kg PO q12h × 5-7 days (alternative)</li>
          <li>Combine with bath (chlorhexidine) — environmental decontamination</li>
          <li>Treat all dogs/cats in household</li>
          <li>Recheck fecal 2-4 wk post-treatment</li>
        </ul>

        <p><strong>Moderate-severe (hospitalized):</strong></p>
        <ul>
          <li>IV fluids — replace deficit + maintain</li>
          <li>Antiemetic (maropitant ± ondansetron)</li>
          <li>Pain management ถ้าจำเป็น (buprenorphine; avoid full mu opioids — ileus risk)</li>
          <li>Monitor electrolytes, hydration, urine output</li>
        </ul>

        <p><strong>AHDS specific:</strong></p>
        <ul>
          <li>Aggressive IV fluids — correct hemoconcentration</li>
          <li>Antiemetics</li>
          <li>Antibiotics — debated;  metronidazole or amoxicillin only ถ้ามี signs of sepsis (fever, leukocytosis with left shift, hypotension); recent literature suggests withholding AB ในเคส uncomplicated</li>
          <li>Most respond rapidly to fluid therapy</li>
        </ul>

        <p><strong>Antibiotics — selective use:</strong></p>
        <ul>
          <li>Indications:
            <ul>
              <li>Documented bacterial infection (culture)</li>
              <li>Severe sepsis/systemic illness</li>
              <li>Neutropenia + GI disease</li>
              <li>Significant melena</li>
            </ul>
          </li>
          <li>Choices: metronidazole 10-15 mg/kg PO q12h, amoxi-clav, doxycycline</li>
          <li><strong>Routine antibiotics for acute diarrhea = NOT recommended</strong> ✗ — disrupts microbiome</li>
        </ul>

        <p><strong>Avoid:</strong></p>
        <ul>
          <li>Antimotility drugs (loperamide) — prolong infectious enteritis; avoid in dogs &lt; 20 kg, never in cats, never with bloody diarrhea or fever</li>
          <li>NSAIDs</li>
          <li>Steroids (unless Addison's)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe dehydration → hypovolemic shock</li>
          <li>Electrolyte imbalance</li>
          <li>Sepsis (rare with prompt treatment)</li>
          <li>Intussusception (esp. parvo, severe enteritis)</li>
          <li>Chronic diarrhea (post-acute syndrome)</li>
          <li>Missed Addison's, FB, intussusception</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Mild self-limiting: <strong>excellent</strong> — recover 2-5 d</li>
          <li>AHDS with prompt treatment: good</li>
          <li>Severe sepsis: variable</li>
          <li>Underlying serious cause: depends</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 31 · Chronic Enteropathy / IBD ---------- */
  {
    id: 'chronic-enteropathy-ibd',
    titleEn: 'Chronic Enteropathy / IBD',
    titleTh: 'ลำไส้อักเสบเรื้อรัง / IBD',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['IBD', 'chronic enteropathy', 'lymphoplasmacytic enteritis', 'food-responsive', 'antibiotic-responsive', 'steroid-responsive', 'budesonide', 'novel protein', 'hydrolyzed diet'],
    aliases: ['IBD', 'chronic enteropathy', 'CE', 'ลำไส้อักเสบเรื้อรัง', 'lymphoplasmacytic enteritis'],
    source: 'Ch. 31 · pp. 511–515',
    sections: {
      definition: `
        <p>Chronic GI signs (vomiting, diarrhea, weight loss) &gt; 3 wk ที่ไม่มี extra-GI cause หรือ neoplasia</p>
        <ul>
          <li>แบ่งตาม <strong>response to therapy</strong> (modern classification): ✨
            <ul>
              <li><strong>FRE</strong> (food-responsive enteropathy) — ~ 50-60%</li>
              <li><strong>ARE</strong> (antibiotic-responsive enteropathy / dysbiosis)</li>
              <li><strong>IRE / IBD</strong> (immunosuppressant-responsive)</li>
              <li><strong>NRE</strong> (non-responsive enteropathy) — refractory</li>
            </ul>
          </li>
          <li><strong>Lymphoplasmacytic enteritis</strong> = histologic finding (most common); not a final diagnosis itself</li>
          <li>Cat: เจอบ่อยมาก — แยกจาก low-grade lymphoma ยาก ✗</li>
        </ul>
      `,
      etiology: `
        <p><strong>Multifactorial:</strong></p>
        <ul>
          <li>Genetic susceptibility (German Shepherd, Boxer, Yorkie, French Bulldog, Soft-coated Wheaten — PLE/PLN)</li>
          <li>Dietary antigens / food allergy</li>
          <li>Dysbiosis (microbiome imbalance)</li>
          <li>Immune dysregulation</li>
          <li>Environmental triggers</li>
        </ul>
        <p><strong>Histologic patterns:</strong></p>
        <ul>
          <li>Lymphoplasmacytic (most common)</li>
          <li>Eosinophilic</li>
          <li>Granulomatous (Boxer/French Bulldog histiocytic ulcerative colitis)</li>
          <li>Neutrophilic (uncommon, suggest infection)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Loss of immune tolerance to luminal antigens (dietary, microbial)</li>
          <li>Dysregulated mucosal immune response → chronic inflammation</li>
          <li>Villous atrophy, crypt hyperplasia, ↑ permeability</li>
          <li>Malabsorption + protein loss → hypoalbuminemia (severe form = PLE)</li>
          <li>Cobalamin malabsorption (ileal disease)</li>
          <li>Secondary lipogranulomatous lymphangitis → lymphangiectasia</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic vomiting</strong> (esp. cats — "hairball" frequent ✨)</li>
          <li><strong>Chronic diarrhea</strong> (SI, LI, mixed)</li>
          <li>Weight loss</li>
          <li>↓ Appetite or polyphagia (variable)</li>
          <li>Borborygmi, flatulence</li>
          <li>Occasional acute exacerbations</li>
          <li>Dull coat (cat)</li>
          <li>Lethargy variable</li>
          <li>Severe / PLE: ascites, peripheral edema, pleural effusion</li>
          <li>Cat senior + chronic vomiting + weight loss = <strong>must rule out lymphoma + IBD + hyperthyroid + CKD + pancreatitis ("triaditis")</strong></li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnosis of exclusion + therapeutic response trial</strong></p>
        <p><strong>Tier 1 (rule out extra-GI):</strong></p>
        <ul>
          <li>CBC, biochem, UA, T4 (cat), fecal × 2-3</li>
          <li>FeLV/FIV (cat)</li>
          <li>cPL/fPL — pancreatitis</li>
          <li>Bile acids — hepatic</li>
          <li>Resting cortisol / ACTH stim — Addison's</li>
        </ul>
        <p><strong>Tier 2 — GI-specific:</strong></p>
        <ul>
          <li><strong>Cobalamin (B12):</strong> low → supplement (1000 µg/dog SC weekly × 6, then monthly; cat 250 µg SC)</li>
          <li><strong>Folate:</strong> low (proximal SI), high (dysbiosis)</li>
          <li>Abdominal US — wall thickness, layering, lymph nodes, mass; bowel wall &gt; 3.5 mm (cat) suspicious</li>
          <li>FNA mesenteric lymph node — neoplasia screen</li>
        </ul>
        <p><strong>Tier 3 — Endoscopy + biopsy ✨</strong></p>
        <ul>
          <li>EGD: stomach, duodenum (cat: terminal ileum often reachable)</li>
          <li>Biopsy ≥ 6-10 sites per region</li>
          <li>Concurrent colonoscopy if LI signs</li>
          <li>WSAVA standardized grading (mild → severe inflammation)</li>
          <li>If biopsies non-diagnostic / suspect lymphoma:
            <ul>
              <li>Immunohistochemistry (CD3, CD20)</li>
              <li>PARR (PCR for antigen receptor rearrangement) — clonality</li>
              <li>Full-thickness biopsy via laparotomy (better for transmural disease, lymphoma diagnosis)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Severity scoring (CIBDAI / FCEAI):</strong> objective measure for clinical trials, response monitoring</p>
      `,
      differential: `
        <ul>
          <li>Parasites (Giardia, hookworms, Tritrichomonas)</li>
          <li>EPI (low TLI)</li>
          <li>Hyperthyroidism (cat senior)</li>
          <li>Addison's (atypical)</li>
          <li><strong>Alimentary lymphoma</strong> ✨ — esp. cat; difficult to differentiate from severe IBD</li>
          <li>Adenocarcinoma</li>
          <li>Chronic pancreatitis</li>
          <li>Hepatic disease</li>
          <li>FIP (effusive form)</li>
          <li>Histiocytic ulcerative colitis (Boxer)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Stepwise approach — start simplest, escalate:</strong></p>

        <p><strong>Step 1: Anthelmintic + Cobalamin</strong></p>
        <ul>
          <li>Empirical fenbendazole 50 mg/kg PO q24h × 3-5 days</li>
          <li>Cobalamin supplementation if low ✨</li>
        </ul>

        <p><strong>Step 2: Diet trial (FRE) — 2-4 wk minimum ✨</strong></p>
        <ul>
          <li>Choose ONE:
            <ul>
              <li><strong>Hydrolyzed protein</strong> — Royal Canin Hypoallergenic, Hill's z/d, Purina HA</li>
              <li><strong>Novel protein</strong> — venison, duck, rabbit (proteins not previously eaten)</li>
              <li>GI prescription diet (highly digestible, moderate fat) — first option for many</li>
            </ul>
          </li>
          <li><strong>Strict adherence</strong> — no treats, table food, flavored medication ✨</li>
          <li>Many improve within 1-2 weeks</li>
          <li>Continue successful diet long-term</li>
          <li>FRE = ~ 50-60% of CE</li>
        </ul>

        <p><strong>Step 3: Antibiotic trial (ARE) — if diet trial fails</strong></p>
        <ul>
          <li>Tylosin 10-20 mg/kg PO q12-24h × 4-6 wk</li>
          <li>Or metronidazole 10-15 mg/kg PO q12h × 4-6 wk</li>
          <li>If responds — may need long-term low-dose</li>
          <li>Increasingly recognized as <em>dysbiosis</em> — probiotics may help (less evidence than antibiotics)</li>
        </ul>

        <p><strong>Step 4: Immunosuppression (IRE / IBD) — biopsy preferred before this step</strong></p>
        <ul>
          <li><strong>Prednisone (dog) / Prednisolone (cat) 1-2 mg/kg PO q12h × 2-3 wk</strong>, then taper over 8-12 wk to lowest effective dose</li>
          <li><strong>Budesonide 1-3 mg/dog PO q24h</strong> — locally active steroid; good for cats with DM, dogs needing long-term ✨</li>
          <li>Monitor for steroid side effects (PU/PD, weight gain, DM, infections)</li>
        </ul>

        <p><strong>Step 5: Refractory IBD — add second immunosuppressant</strong></p>
        <ul>
          <li><strong>Cyclosporine 5 mg/kg PO q12h initially</strong>, then q24h
            <ul>
              <li>Refractory dog cases; some cats</li>
              <li>Monitor LFT</li>
            </ul>
          </li>
          <li>Chlorambucil 2 mg/cat PO q48h (cat lymphoma / refractory IBD) ✨</li>
          <li>Azathioprine 2 mg/kg PO q24h × 7-14d, then q48h (dog only — toxic in cats)</li>
          <li>Mycophenolate 10-20 mg/kg PO q12h</li>
        </ul>

        <p><strong>Adjunctive:</strong></p>
        <ul>
          <li>Cobalamin supplementation (essential, often life-long)</li>
          <li>Probiotics (S. boulardii, multi-strain)</li>
          <li>Soluble fiber (psyllium 1-3 tsp/day)</li>
          <li>Omega-3 fatty acids (anti-inflammatory)</li>
          <li>Anti-emetics PRN (maropitant)</li>
          <li>Treat concurrent diseases (hyperthyroid, pancreatitis, CKD)</li>
        </ul>

        <p><strong>Cat low-grade alimentary lymphoma (LGAL):</strong></p>
        <ul>
          <li>Difficult to differentiate from severe IBD</li>
          <li>Treatment: <strong>chlorambucil 2 mg/cat PO q48h + prednisolone 1-2 mg/kg PO q24h</strong></li>
          <li>MST 1.5-3 years — much better than high-grade lymphoma!</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Clinical response (weight, BCS, stool quality, vomiting frequency)</li>
          <li>CIBDAI / FCEAI scoring</li>
          <li>Recheck albumin, CBC, biochem q4-12 wk</li>
          <li>Cobalamin recheck 1-2 mo post-supplementation</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Hypoalbuminemia / PLE (severe IBD, lymphangiectasia)</li>
          <li>Cobalamin deficiency</li>
          <li>Lymphoma development (debated transformation from severe IBD)</li>
          <li>Steroid side effects (DM cat, infections, muscle wasting)</li>
          <li>Refractory disease</li>
          <li>Cachexia, malnutrition</li>
          <li>Quality of life concerns</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>FRE: <strong>excellent</strong> — long-term diet management</li>
          <li>ARE: good with periodic antibiotic courses</li>
          <li>IRE / IBD: good-to-fair; most achieve good control</li>
          <li>NRE / refractory: guarded</li>
          <li>Severe PLE form: guarded — albumin &lt; 2.0 = poor prognosis</li>
          <li>Cat LGAL with chlorambucil: <strong>good</strong> — MST 1.5-3 yr</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 31 · PLE / Lymphangiectasia ---------- */
  {
    id: 'ple-lymphangiectasia',
    titleEn: 'Protein-Losing Enteropathy &amp; Lymphangiectasia',
    titleTh: 'PLE — โปรตีนรั่วทางลำไส้',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['PLE', 'lymphangiectasia', 'hypoalbuminemia', 'ascites', 'edema', 'Yorkie', 'Soft-coated Wheaten', 'low-fat diet', 'budesonide'],
    aliases: ['PLE', 'protein-losing enteropathy', 'lymphangiectasia', 'โปรตีนรั่วลำไส้'],
    source: 'Ch. 31 · pp. 512–515',
    sections: {
      definition: `
        <p>การสูญเสีย <strong>plasma protein (albumin + globulin)</strong> ผ่าน intestinal mucosa → hypoalbuminemia → ascites/edema</p>
        <ul>
          <li>ไม่ใช่ disease เดี่ยว — เป็น syndrome ของหลายโรค</li>
          <li><strong>Lymphangiectasia</strong> = สาเหตุที่เจอบ่อยที่สุด — lymphatic dilation/leakage</li>
          <li>Severe form ของ chronic enteropathy</li>
        </ul>
      `,
      etiology: `
        <p><strong>Lymphangiectasia (most common):</strong></p>
        <ul>
          <li><strong>Primary (idiopathic):</strong>
            <ul>
              <li>Yorkshire Terrier ✨</li>
              <li>Soft-coated Wheaten Terrier (combined PLE + PLN)</li>
              <li>Maltese, Norwegian Lundehund, Rottweiler</li>
              <li>Lhasa Apso</li>
            </ul>
          </li>
          <li><strong>Secondary:</strong> any cause of ↑ lymphatic pressure
            <ul>
              <li>Lipogranulomatous lymphangitis (severe IBD)</li>
              <li>Right CHF</li>
              <li>Pericardial disease</li>
              <li>Cranial vena cava obstruction</li>
              <li>Mesenteric mass / lymphadenopathy</li>
            </ul>
          </li>
        </ul>
        <p><strong>Other causes of PLE:</strong></p>
        <ul>
          <li>Severe IBD (lymphoplasmacytic enteritis)</li>
          <li>Alimentary lymphoma</li>
          <li>Adenocarcinoma</li>
          <li>Histoplasmosis (endemic areas)</li>
          <li>Severe parasitism (hookworms — puppies/kittens)</li>
          <li>Intestinal ulceration / hemorrhage</li>
          <li>Chronic intussusception</li>
          <li>Phycomycosis (Pythiosis — tropical)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Lymphangiectasia:</strong></p>
        <ul>
          <li>Dilated mucosal/submucosal lymphatics</li>
          <li>Rupture → leakage of <strong>protein, lymphocytes, lipids</strong> into intestinal lumen</li>
          <li>↑ Pressure from obstruction or primary defect</li>
          <li>Loss of both albumin AND globulin (panhypoproteinemia) ✨</li>
          <li>Loss of lymphocytes → lymphopenia</li>
          <li>Loss of fat-soluble vitamins, fats → steatorrhea, hypocalcemia, hypocholesterolemia</li>
          <li>Hypoalbuminemia → ↓ oncotic pressure → ascites, peripheral edema, pleural effusion</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic intermittent diarrhea</strong> (sometimes absent ✗ — diagnosis missed)</li>
          <li>Weight loss / muscle wasting</li>
          <li><strong>Abdominal distension (ascites)</strong> ✨</li>
          <li>Peripheral edema (ventral abdomen, distal limbs)</li>
          <li>Pleural effusion → tachypnea, dyspnea (severe)</li>
          <li>Lethargy, exercise intolerance</li>
          <li>Variable appetite (often preserved!)</li>
          <li>Vomiting (variable)</li>
          <li>Steatorrhea (greasy, pale stool)</li>
          <li>Thromboembolism (loss of antithrombin) — rare but devastating ✗</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab findings (classic triad):</strong></p>
        <ul>
          <li><strong>Panhypoproteinemia</strong> — ↓ albumin AND ↓ globulin ✨ (vs PLN where only albumin low)</li>
          <li><strong>Hypocholesterolemia</strong> ✨</li>
          <li><strong>Lymphopenia</strong> ✨</li>
          <li>± Hypocalcemia (ionized + total — vit D + albumin loss)</li>
          <li>↓ Magnesium</li>
          <li>↓ Cobalamin (often)</li>
          <li>Iron deficiency anemia (chronic blood loss)</li>
        </ul>
        <p><strong>Rule out other causes of hypoalbuminemia first:</strong></p>
        <ul>
          <li>Hepatic insufficiency (bile acids, BUN)</li>
          <li>PLN (UPC ratio &gt; 0.5)</li>
          <li>Severe burns / vasculitis</li>
          <li>Malabsorption / EPI (TLI)</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li>Abdominal US: hyperechoic mucosal striations ✨ ("white lines"); thickened wall; mesenteric lymphadenopathy</li>
          <li>Ascites — paracentesis (modified transudate)</li>
          <li>Thoracic rad if dyspnea — pleural effusion</li>
        </ul>
        <p><strong>Endoscopy + biopsy ✨:</strong></p>
        <ul>
          <li><strong>White punctate mucosal spots ("snow-capped villi")</strong> ✨ — pathognomonic-like</li>
          <li>Multiple deep biopsies (mucosa to submucosa)</li>
          <li>Histopath: dilated lacteals + chronic inflammation</li>
          <li>Differentiate IBD, lymphoma, granulomatous disease</li>
        </ul>
        <p><strong>Cobalamin, folate</strong> — supplementation needs</p>
      `,
      differential: `
        <ul>
          <li>Hepatic insufficiency (panhypoproteinemia + ↓ BUN + ↑ bile acids)</li>
          <li>PLN (proteinuria — albumin loss only)</li>
          <li>Combined PLE + PLN (Soft-coated Wheaten)</li>
          <li>Severe systemic disease / vasculitis</li>
          <li>Severe burns</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Diet — cornerstone ✨</strong></p>
        <ul>
          <li><strong>Ultra low-fat, highly digestible diet</strong> — &lt; 20 g fat / 1000 kcal ME ✨
            <ul>
              <li>Royal Canin Gastrointestinal Low Fat</li>
              <li>Hill's i/d Low Fat</li>
              <li>Purina EN Low Fat</li>
              <li>Home-cooked: chicken/fish + rice/sweet potato (consult nutritionist)</li>
            </ul>
          </li>
          <li>Hydrolyzed protein diet — alternative if food-responsive component</li>
          <li>Strict adherence — no treats, table food</li>
          <li>Often dramatic improvement with diet alone in lymphangiectasia</li>
          <li>MCT oil supplementation — bypasses lymphatic absorption (controversial — still requires lymphatics in dogs unlike humans)</li>
        </ul>

        <p><strong>2. Immunosuppression (concurrent IBD):</strong></p>
        <ul>
          <li><strong>Prednisone 1-2 mg/kg PO q12h × 2-3 wk</strong>, then taper over 8-12 wk</li>
          <li><strong>Budesonide 1-3 mg/dog PO q24h</strong> ✨ — preferred for many; locally active, ↓ systemic effects</li>
          <li>Cyclosporine 5 mg/kg PO q12h — refractory cases or steroid-sparing</li>
          <li>Chlorambucil 2-4 mg/m² PO q24-48h — refractory or lymphoma diagnosis</li>
        </ul>

        <p><strong>3. Cobalamin supplementation (essential):</strong></p>
        <ul>
          <li>Dog: 250-1500 µg SC weekly × 6 wk, then monthly (lifelong)</li>
          <li>Cat: 250 µg SC weekly × 6 wk, then monthly</li>
          <li>Or oral cobalamin 1 mg PO q24h (some evidence equivalent)</li>
        </ul>

        <p><strong>4. Manage ascites/effusion:</strong></p>
        <ul>
          <li>Therapeutic abdominocentesis if respiratory compromise / discomfort</li>
          <li>Avoid aggressive diuresis (worsens hypovolemia)</li>
          <li>Spironolactone 1-2 mg/kg PO q12h — gentle</li>
          <li>Plasma transfusion only for severe symptomatic hypoalbuminemia (&lt; 1.5) or surgery — short-lived effect</li>
        </ul>

        <p><strong>5. Antithrombotic — risk of thromboembolism:</strong></p>
        <ul>
          <li>Clopidogrel 1-2 mg/kg PO q24h — consider in severe hypoalbuminemia</li>
          <li>Rivaroxaban — alternative</li>
        </ul>

        <p><strong>6. Adjunctive:</strong></p>
        <ul>
          <li>Probiotics</li>
          <li>Vitamin D supplementation (severe loss)</li>
          <li>Calcium gluconate IV if symptomatic hypocalcemia</li>
          <li>Iron supplementation if iron-deficiency anemia</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Albumin q2-4 wk initially → trend up = response</li>
          <li>Body weight, BCS, ascites severity</li>
          <li>Clinical signs (diarrhea frequency, energy)</li>
          <li>Cobalamin level periodic</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe hypoalbuminemia + ascites/effusion</li>
          <li><strong>Thromboembolism</strong> ✗ — antithrombin loss; PE, ATE</li>
          <li>Hypocalcemic tetany (rare, severe)</li>
          <li>Steroid side effects (DM, recurrent infection)</li>
          <li>Refractory disease</li>
          <li>Lymphoma transformation</li>
          <li>Cachexia, sarcopenia</li>
          <li>Death from sepsis (immunosuppressed) or PE</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Variable</strong> — depends on response to dietary + medical management</li>
          <li>Yorkie idiopathic lymphangiectasia: often good with strict low-fat diet ± steroids — many years</li>
          <li>Soft-coated Wheaten PLE/PLN: guarded — combined disease, MST 2-5 yr</li>
          <li>Severe with persistent hypoalbuminemia (&lt; 1.5): poor</li>
          <li>Albumin trending up after 4-6 wk treatment: good predictor</li>
          <li>Lymphoma-associated: depends on lymphoma type</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 32 · Acute &amp; Chronic Colitis ---------- */
  {
    id: 'colitis',
    titleEn: 'Colitis (Acute &amp; Chronic)',
    titleTh: 'ลำไส้ใหญ่อักเสบ',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['colitis', 'large bowel diarrhea', 'tenesmus', 'hematochezia', 'mucus', 'whipworm', 'Tritrichomonas', 'fiber', 'tylosin', 'Boxer histiocytic'],
    aliases: ['LI diarrhea', 'colitis', 'ลำไส้ใหญ่อักเสบ', 'ท้องเสียมูกเลือด'],
    source: 'Ch. 32 · pp. 526–533',
    sections: {
      definition: `
        <p>Inflammation ของ colon → diarrhea แบบ <strong>large bowel pattern</strong></p>
        <ul>
          <li>LI pattern: ↑ frequency (&gt; 5-10/day), <strong>small volume</strong>, <strong>mucus</strong>, <strong>fresh blood (hematochezia)</strong>, <strong>tenesmus</strong>, urgency</li>
          <li>เจอบ่อยมากในคลินิก</li>
          <li>Acute (&lt; 14 d) vs Chronic (&gt; 3 wk)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Acute colitis:</strong></p>
        <ul>
          <li>Dietary indiscretion / abrupt diet change</li>
          <li>Stress (boarding, travel, kenneling)</li>
          <li>Parasites:
            <ul>
              <li><strong>Whipworms (Trichuris vulpis)</strong> ✨ — common cause of chronic LI signs in dogs</li>
              <li>Giardia (LI signs sometimes)</li>
              <li>Tritrichomonas foetus (cat LI diarrhea ✨)</li>
              <li>Coccidia (puppies, kittens)</li>
              <li>Cryptosporidium</li>
            </ul>
          </li>
          <li>Bacterial: Clostridium perfringens / difficile, Campylobacter, Salmonella</li>
          <li>Drug-induced (antibiotics)</li>
          <li>Garbage gut (toxin)</li>
        </ul>
        <p><strong>Chronic colitis:</strong></p>
        <ul>
          <li><strong>Idiopathic chronic colitis / IBD (LI form)</strong> — lymphoplasmacytic, eosinophilic</li>
          <li><strong>Histiocytic ulcerative colitis (HUC)</strong> — <strong>Boxer + French Bulldog</strong> ✨ — adherent-invasive E. coli</li>
          <li>Fiber-responsive colitis</li>
          <li>Stress colitis (irritable bowel-like)</li>
          <li>Food-responsive colitis (dietary allergy)</li>
          <li>Whipworm chronic infection (must rule out!)</li>
          <li>Neoplasia: lymphoma, adenocarcinoma, polyps</li>
          <li>Ileocolic intussusception (chronic)</li>
          <li>Pythium / phycomycosis (tropical, granulomatous mass)</li>
          <li>Cecal inversion / impaction</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Mucosal inflammation → ↓ water absorption + ↑ secretion + ↑ motility</li>
          <li>↑ Mucus production from goblet cells</li>
          <li>Surface erosions/ulcers → fresh blood (hematochezia)</li>
          <li>Inflammation triggers urge / tenesmus</li>
          <li>Severe: colonic edema, transmural inflammation, stricture (rare)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Frequent small-volume liquid stool</strong> ✨ — &gt; 5-10×/day</li>
          <li><strong>Mucus</strong> coating stool ✨</li>
          <li><strong>Fresh red blood (hematochezia)</strong> — bright red, on stool surface ✨</li>
          <li><strong>Tenesmus (straining)</strong> ✨ — confused with constipation by owners!</li>
          <li>Urgency, accidents indoors</li>
          <li>± Mild vomiting</li>
          <li>Usually <strong>preserved appetite + body condition</strong> (vs SI diarrhea)</li>
          <li>Weight loss less common (unless severe / chronic)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>History + physical exam (rectal palpation important!)</strong></p>
        <p><strong>Tier 1:</strong></p>
        <ul>
          <li><strong>Fecal × 3 (different days):</strong> direct, flotation, Giardia ELISA, ฺBaermann ถ้าสงสัย parasite</li>
          <li>Whipworm — egg shedding intermittent — multiple samples ✨</li>
          <li><strong>Tritrichomonas foetus PCR (cat)</strong> — InPouch culture หรือ feline-specific PCR</li>
          <li>Empirical fenbendazole 50 mg/kg PO q24h × 3 d (covers whipworm, Giardia)</li>
        </ul>
        <p><strong>Tier 2:</strong></p>
        <ul>
          <li>CBC, biochem (rule out extra-GI), UA</li>
          <li>FeLV/FIV (cat), T4</li>
          <li>Abdominal US — wall thickness, mass, intussusception, lymph nodes</li>
          <li>Rectal cytology — neoplastic cells, fungal organisms (Pythium, histoplasma — endemic), inflammation type</li>
        </ul>
        <p><strong>Tier 3 — Colonoscopy + biopsy ✨</strong></p>
        <ul>
          <li>Direct visualization to ileocolic junction</li>
          <li>Biopsy multiple sites (≥ 6-10)</li>
          <li>Identify polyps, masses, ulcers</li>
          <li>Boxer/French Bulldog HUC — characteristic gross + histopath (PAS-positive macrophages) ✨</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Constipation (some owners confuse tenesmus with constipation!)</li>
          <li>Anal sac disease (similar tenesmus)</li>
          <li>Perineal hernia</li>
          <li>Prostatic disease (intact male — prostatitis, abscess, BPH)</li>
          <li>Rectal stricture / polyp / mass</li>
          <li>Pelvic mass</li>
          <li>Cauda equina syndrome</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Acute mild colitis (outpatient):</strong></p>
        <ul>
          <li>Bland diet × 3-5 d, then transition to GI prescription / fiber-supplemented diet</li>
          <li><strong>Soluble fiber: psyllium 1-3 tsp/day mixed in food</strong> ✨ — very effective for fiber-responsive colitis</li>
          <li>Probiotics (S. boulardii, FortiFlora)</li>
          <li><strong>Empirical anthelmintic — fenbendazole 50 mg/kg PO q24h × 3-5 d</strong> ✨ (covers whipworm, Giardia)</li>
          <li>Recheck in 5-7 d if no improvement</li>
        </ul>

        <p><strong>2. Whipworm treatment:</strong></p>
        <ul>
          <li>Fenbendazole 50 mg/kg PO q24h × 3-5 d, repeat ที่ 3 wk + 3 mo (eggs survive in environment 3-4 yr)</li>
          <li>Milbemycin oxime — also effective</li>
          <li>Monthly heartworm preventive containing milbemycin</li>
          <li>Environmental decontamination difficult (eggs resistant)</li>
        </ul>

        <p><strong>3. Tritrichomonas (cat) treatment:</strong></p>
        <ul>
          <li><strong>Ronidazole 30 mg/kg PO q24h × 14 d</strong> ✨ (off-label; obtain from compounding pharmacy)
            <ul>
              <li>Caution: neurotoxicity at higher doses (&gt; 30 mg/kg) — ataxia, tremors</li>
              <li>Stop if neurologic signs</li>
            </ul>
          </li>
          <li>Many cats spontaneously resolve over 6-12 mo without treatment</li>
          <li>Diet change + probiotics — supportive</li>
        </ul>

        <p><strong>4. Antibiotic-responsive (suspected dysbiosis / clostridial):</strong></p>
        <ul>
          <li>Tylosin 10-20 mg/kg PO q12h × 3-6 wk ✨ — effective</li>
          <li>Metronidazole 10-15 mg/kg PO q12h × 5-14 d</li>
          <li>If responds + recurs on stopping → may need long-term low-dose</li>
        </ul>

        <p><strong>5. Histiocytic Ulcerative Colitis (Boxer / French Bulldog) ✨</strong></p>
        <ul>
          <li><strong>Enrofloxacin 5-10 mg/kg PO q24h × 6-8 wk</strong> ✨ — definitive treatment</li>
          <li>Or marbofloxacin 2.5-5 mg/kg PO q24h</li>
          <li>Often complete remission</li>
          <li>Earlier endoscopic diagnosis = better outcome (vs years of inappropriate steroids)</li>
        </ul>

        <p><strong>6. Idiopathic chronic colitis / LI IBD:</strong></p>
        <ul>
          <li>Stepwise approach (similar to SI IBD):
            <ol>
              <li>Diet trial: hydrolyzed / novel protein / high-fiber × 2-4 wk</li>
              <li>Antibiotic trial (tylosin) if diet fails</li>
              <li>Sulfasalazine 10-30 mg/kg PO q8-12h (dog) — local anti-inflammatory; monitor KCS, hepatic
                <ul>
                  <li>Cat: 10-20 mg/kg PO q24h — caution salicylate toxicity</li>
                </ul>
              </li>
              <li>Steroids: prednisone 1-2 mg/kg PO q12h, taper</li>
              <li>Budesonide 1-3 mg/dog PO q24h — locally active</li>
              <li>Refractory: cyclosporine, chlorambucil</li>
            </ol>
          </li>
        </ul>

        <p><strong>7. Stress colitis:</strong></p>
        <ul>
          <li>Identify + manage trigger</li>
          <li>Bland diet + fiber</li>
          <li>Probiotics</li>
          <li>Anxiolytic if needed (trazodone, gabapentin) for known stressors</li>
          <li>Self-limiting (3-7 d)</li>
        </ul>

        <p><strong>8. Adjunctive:</strong></p>
        <ul>
          <li>Probiotics (multi-strain, S. boulardii)</li>
          <li>Fiber (soluble — psyllium, beet pulp)</li>
          <li>Omega-3 fatty acids</li>
          <li>Avoid loperamide (mask serious dz; not recommended for infectious cause)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Chronic dehydration (rare, usually mild)</li>
          <li>Perianal dermatitis from frequent soft stool</li>
          <li>Owner frustration / fatigue</li>
          <li>Misdiagnosis as constipation / steroid-treatment of HUC</li>
          <li>Refractory disease</li>
          <li>Lymphoma (cat — chronic LI signs may be lymphoma)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Acute self-limiting / parasitic / fiber-responsive: <strong>excellent</strong></li>
          <li>HUC Boxer/Frenchie with enrofloxacin: <strong>excellent</strong> ✓</li>
          <li>Tritrichomonas (cat): self-resolution often; ronidazole 65-90% cure</li>
          <li>Chronic IBD: good with management</li>
          <li>Neoplastic: depends on tumor</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 32 · Constipation / Megacolon ---------- */
  {
    id: 'constipation-megacolon',
    titleEn: 'Constipation &amp; Megacolon',
    titleTh: 'ท้องผูก / ลำไส้ใหญ่ขยาย',
    type: 'disease',
    system: 'digestive',
    species: ['cat', 'dog'],
    tags: ['constipation', 'obstipation', 'megacolon', 'cisapride', 'lactulose', 'colectomy', 'enema', 'feline idiopathic megacolon'],
    aliases: ['constipation', 'megacolon', 'obstipation', 'ท้องผูก', 'แมวขี้แห้ง'],
    source: 'Ch. 32 · pp. 540–544',
    sections: {
      definition: `
        <p>Constipation = ขับถ่ายไม่ออก / ขับถ่ายแห้งแข็ง</p>
        <p>Obstipation = constipation รุนแรงรักษาไม่หาย</p>
        <p>Megacolon = colon ขยายเรื้อรัง + motility ผิดปกติ</p>
        <ul>
          <li>เจอบ่อยมากใน <strong>middle-aged to senior cats</strong> ✨</li>
          <li>หมา: less common; มัก secondary to obstruction หรือ pain</li>
        </ul>
      `,
      etiology: `
        <p><strong>Cat — common causes:</strong></p>
        <ul>
          <li><strong>Idiopathic megacolon</strong> — most common ในแมว ✨</li>
          <li>Dehydration (CKD, diabetes, hyperthyroid)</li>
          <li>Pelvic fracture / narrowing (post-trauma)</li>
          <li>Sacral nerve damage (Manx — sacrocaudal dysgenesis)</li>
          <li>Pelvic mass / lymph node</li>
          <li>Foreign material (hair, bones — ingestion of bone meal, raw bones)</li>
          <li>Painful defecation (anal sac, anal mass)</li>
          <li>Litter box aversion / behavioral</li>
          <li>Spinal disease (cauda equina)</li>
        </ul>
        <p><strong>Dog — common causes:</strong></p>
        <ul>
          <li>Pelvic obstruction:
            <ul>
              <li><strong>Prostate disease</strong> (BPH, prostatitis, abscess, neoplasia) — intact male</li>
              <li>Perineal hernia (intact older male)</li>
              <li>Pelvic fracture</li>
              <li>Rectal mass / stricture</li>
            </ul>
          </li>
          <li>Painful defecation (anal sac dz, perianal fistula)</li>
          <li>Dehydration (CKD, drugs)</li>
          <li>Drug-induced (opioids, anticholinergics)</li>
          <li>Mechanical: bones, foreign material</li>
          <li>Cauda equina, IVDD</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Prolonged retention of feces → ↑ water absorption → harder, drier feces</li>
          <li>Smooth muscle stretch → ↓ propulsion → vicious cycle</li>
          <li>Megacolon: chronic distension → irreversible loss of colonic smooth muscle function</li>
          <li>Cat idiopathic megacolon: dysfunction of colonic smooth muscle — neuromuscular</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Tenesmus, straining without producing stool</strong> (or producing small dry pellets)</li>
          <li>Owners often confuse with diarrhea straining (colitis) — <strong>ต้องแยกให้ออก!</strong></li>
          <li>Vocalization, discomfort during attempts</li>
          <li>Anorexia, lethargy (chronic)</li>
          <li>Vomiting (severe — colon distends → reflex vomiting)</li>
          <li>Weight loss</li>
          <li>Dehydration</li>
          <li>Palpable distended colon with hard fecal mass</li>
          <li>Halitosis</li>
          <li>Megacolon: chronic recurrent episodes</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>History + physical exam (rectal palpation essential!):</strong></p>
        <ul>
          <li>Distended colon with hard fecal material</li>
          <li>Pelvic narrowing</li>
          <li>Prostate enlargement (intact male)</li>
          <li>Perineal hernia (asymmetric perineal swelling)</li>
          <li>Anal sac assessment</li>
          <li>Rectal mass</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal radiograph</strong> ✨ — confirms severity, identifies pelvic narrowing, FB
            <ul>
              <li>Megacolon: colon &gt; 1.5× length of L5 vertebra (cat)</li>
              <li>Dilated colon filled with hard fecal material</li>
            </ul>
          </li>
          <li>Abdominal US — pelvic mass, prostate, lymph nodes</li>
          <li>Pelvic radiograph — fracture, healed callus, narrowing</li>
        </ul>
        <p><strong>Lab (chronic / recurrent):</strong></p>
        <ul>
          <li>CBC, biochem (BUN/Cr — CKD), electrolytes (hypoK), T4 (cat senior — hyperthyroid &amp; constipation paradox)</li>
          <li>UA — concentration, infection</li>
          <li>FeLV/FIV</li>
          <li>Spinal rad / MRI ถ้าสงสัย neurologic</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Tenesmus from colitis</strong> — major DDx (passing soft/bloody stool, high frequency); rectal exam helps differentiate ✨</li>
          <li>Dyschezia from anal sac disease, perianal mass</li>
          <li>Stranguria (urinary obstruction, FLUTD) — different signalment / localization</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute obstipation — emergency relief:</strong></p>
        <ul>
          <li><strong>IV fluid therapy</strong> — correct dehydration, electrolytes ✨</li>
          <li><strong>Warm-water enemas</strong>:
            <ul>
              <li>5-10 mL/kg warm water + few drops of dish soap or DSS (docusate)</li>
              <li>Manual extraction under sedation (often needed)</li>
              <li>Repeat q4-6h until evacuated</li>
              <li><strong>NEVER use phosphate enemas (Fleet®) in cats</strong> ✗ — fatal hyperphosphatemia, hypocalcemia, hypernatremia</li>
            </ul>
          </li>
          <li>Manual deobstipation under anesthesia — sterile lubricant, gentle disimpaction with fingers/forceps</li>
          <li>Pain management (buprenorphine; avoid full mu opioids — worsen!)</li>
        </ul>

        <p><strong>Chronic management — Cat (idiopathic megacolon):</strong></p>

        <p><strong>1. Diet:</strong></p>
        <ul>
          <li><strong>High-fiber diet</strong> (Hill's w/d, Royal Canin Fibre Response) — first-line if mild
            <ul>
              <li>Add psyllium 1-2 tsp/day</li>
            </ul>
          </li>
          <li>OR <strong>low-residue / canned wet diet</strong> (Hill's a/d, Royal Canin Recovery, Purina EN) — preferred for severe megacolon (fiber can worsen if motility severely affected)
            <ul>
              <li>Maximize water intake</li>
            </ul>
          </li>
          <li>Trial both — individual response varies</li>
        </ul>

        <p><strong>2. Stool softeners / Osmotic laxatives:</strong></p>
        <ul>
          <li><strong>Lactulose 0.5-1 mL/kg PO q8-12h</strong> ✨ — first-line; titrate to 2-3 soft stools/day
            <ul>
              <li>Sweet taste — most cats accept</li>
              <li>Side effect: cramps, flatulence at high doses</li>
            </ul>
          </li>
          <li>PEG 3350 (Miralax) 1/8-1/4 tsp PO q12h — alternative; tasteless, mix in food</li>
          <li>Polyethylene glycol electrolyte solution (CoLyte) — colonic lavage for severe; via NG tube ที่ 6-10 mL/kg/h</li>
        </ul>

        <p><strong>3. Prokinetic — Cisapride ✨ (cornerstone for cat megacolon):</strong></p>
        <ul>
          <li>0.1-1 mg/kg PO q8-12h (start 0.25 mg/kg, titrate up)</li>
          <li>5-HT4 agonist → ↑ colonic motility</li>
          <li>Off-label, obtain from compounding pharmacy</li>
          <li>Combined with lactulose + diet = standard protocol</li>
          <li>Effective in many cases of mild-moderate megacolon</li>
        </ul>

        <p><strong>4. Hydration support:</strong></p>
        <ul>
          <li>Encourage water intake (multiple bowls, fountain, wet food)</li>
          <li>SQ fluids 100-150 mL 2-3×/wk at home for chronic cases (esp. CKD comorbid)</li>
        </ul>

        <p><strong>5. Treat underlying cause:</strong></p>
        <ul>
          <li>CKD — fluid therapy, diet</li>
          <li>Hyperthyroid — methimazole / definitive</li>
          <li>Prostate (dog) — neuter, treat infection</li>
          <li>Perineal hernia (dog) — surgical correction</li>
          <li>Pelvic obstruction — surgical correction (rarely possible if old healed)</li>
          <li>Anal sac dz — express, treat</li>
        </ul>

        <p><strong>6. Refractory megacolon — Subtotal colectomy ✨</strong></p>
        <ul>
          <li>Indication: failure of medical management ≥ 6 months</li>
          <li>Removes 95% of colon; anastomose ileum to rectum (or distal colon)</li>
          <li>Highly effective — most cats regain normal defecation</li>
          <li>Post-op: soft stool / mild diarrhea common, improves over weeks-months</li>
          <li>Survival rate &gt; 90%; recurrence rare</li>
          <li>Complications: dehiscence, stricture, recurrent diarrhea</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe dehydration / electrolyte imbalance</li>
          <li>Vomiting → aspiration</li>
          <li>Colonic ulceration / perforation (rare, severe obstipation)</li>
          <li>Megacolon progression (irreversible after chronic distension)</li>
          <li>Anesthetic complications during deobstipation</li>
          <li>Owner fatigue with management</li>
          <li>Drug side effects (cisapride compounded — variable potency)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Acute obstipation with prompt treatment + management of cause: good</li>
          <li>Idiopathic megacolon with medical mgmt: good control in many cats</li>
          <li>Severe megacolon refractory to medical: subtotal colectomy = excellent</li>
          <li>Pelvic obstruction surgical: depends on chronicity</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 32 · Anal Sac Disease ---------- */
  {
    id: 'anal-sac-disease',
    titleEn: 'Anal Sac Disease',
    titleTh: 'ต่อมข้างก้นอักเสบ / อุดตัน',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['anal sac', 'impaction', 'sacculitis', 'abscess', 'apocrine adenocarcinoma', 'scooting'],
    aliases: ['anal gland', 'anal sacculitis', 'ต่อมข้างก้น', 'ต่อมข้างทวาร'],
    source: 'Ch. 32 · pp. 545–547',
    sections: {
      definition: `
        <p>Disorders ของ anal sacs (paired sacs ระหว่าง internal + external anal sphincter) — เป็น <strong>most common anorectal problem in dogs</strong></p>
        <ul>
          <li>Impaction → sacculitis → abscess → rupture (continuum)</li>
          <li>Apocrine gland adenocarcinoma — neoplasia ที่ต้อง rule out</li>
        </ul>
      `,
      etiology: `
        <p><strong>Impaction (most common):</strong></p>
        <ul>
          <li>Soft stool not stimulating natural expression</li>
          <li>Obesity</li>
          <li>Recurrent diarrhea</li>
          <li>Anatomic factors (small breed)</li>
          <li>Allergic skin disease</li>
        </ul>
        <p><strong>Sacculitis / Abscess:</strong></p>
        <ul>
          <li>Bacterial overgrowth in impacted sac</li>
          <li>Common organisms: E. coli, Streptococcus, Staphylococcus, Proteus, anaerobes</li>
        </ul>
        <p><strong>Neoplasia — Apocrine gland adenocarcinoma (AGASACA):</strong></p>
        <ul>
          <li>Older dogs, F &gt; M historically (now equal)</li>
          <li>Associated with <strong>hypercalcemia of malignancy</strong> ✨ (PTHrp secretion)</li>
          <li>Aggressive — metastasis to sublumbar lymph nodes common</li>
        </ul>
      `,
      pathophysiology: `<p>Sacs normally express during defecation; failure → impaction → secondary infection → abscessation → rupture through skin</p>`,
      symptoms: `
        <p><strong>Impaction:</strong></p>
        <ul>
          <li><strong>Scooting</strong> ✨ — dragging bottom on floor</li>
          <li>Licking perianal area</li>
          <li>Tail chasing</li>
          <li>Tenesmus, dyschezia</li>
          <li>Foul odor</li>
        </ul>
        <p><strong>Sacculitis / Abscess:</strong></p>
        <ul>
          <li>All above signs + pain</li>
          <li><strong>Hot, swollen, painful area</strong> 4 or 8 o'clock position adjacent to anus</li>
          <li>± Discharge (purulent, sometimes bloody)</li>
          <li>Fever (severe)</li>
          <li>Reluctance to sit / defecate</li>
          <li>Aggression when palpated</li>
        </ul>
        <p><strong>Ruptured abscess:</strong></p>
        <ul>
          <li>Open draining wound near anus</li>
          <li>Bloody-purulent discharge</li>
          <li>Improvement of pain after rupture</li>
        </ul>
        <p><strong>Neoplasia (AGASACA):</strong></p>
        <ul>
          <li>Firm mass at anal sac (rectal palpation)</li>
          <li>Sometimes large external swelling</li>
          <li>Hypercalcemia signs: PU/PD, weakness, GI signs</li>
          <li>Metastasis: sublumbar LN enlargement → constipation, hindlimb edema</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Physical exam — rectal palpation ✨</strong></p>
        <ul>
          <li>Palpate sacs externally + internally (rectal)</li>
          <li>Identify mass, abscess, rupture</li>
          <li>Express both sacs — character of fluid (normal yellow-brown thick liquid; abnormal: purulent, bloody, viscous)</li>
        </ul>
        <p><strong>Suspected neoplasia:</strong></p>
        <ul>
          <li><strong>FNA mass</strong> — cytology characteristic</li>
          <li><strong>Calcium (ionized + total)</strong> — hypercalcemia of malignancy</li>
          <li>Abdominal US / CT — sublumbar LN size, metastasis</li>
          <li>Thoracic rad — lung metastasis</li>
        </ul>
        <p><strong>Suspected severe infection:</strong></p>
        <ul>
          <li>Culture + sensitivity from sac fluid</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Perianal fistula (German Shepherd ✨ — different appearance, multiple draining tracts)</li>
          <li>Perianal mass (perianal gland adenoma, mast cell tumor)</li>
          <li>Tail chasing (behavioral)</li>
          <li>Flea allergy / atopy (similar pruritus pattern)</li>
          <li>Tapeworm proglottids</li>
          <li>Rectal mass / polyp</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Impaction (uncomplicated):</strong></p>
        <ul>
          <li><strong>Manual expression</strong> ✨ — internal (rectal) most thorough
            <ul>
              <li>Lubricated gloved finger insert into rectum, gentle pressure outward</li>
              <li>Express to depletion</li>
            </ul>
          </li>
          <li>Address underlying cause (weight loss, fiber-supplemented diet for soft stool, allergy management)</li>
          <li>Frequency: q4-12 weeks for prone individuals</li>
        </ul>

        <p><strong>2. Sacculitis (no abscess):</strong></p>
        <ul>
          <li>Express + flush sac with saline</li>
          <li>Instill antibiotic ointment (gentamicin/dexamethasone, mupirocin) into sac via cannula</li>
          <li>Systemic antibiotic if severe: amoxi-clav 12.5 mg/kg PO q12h × 7-10 d</li>
          <li>NSAID for inflammation/pain (caution with kidney/GI)</li>
        </ul>

        <p><strong>3. Anal sac abscess:</strong></p>
        <ul>
          <li>Lance/drain abscess if not yet ruptured</li>
          <li>Flush with dilute chlorhexidine or saline q12-24h</li>
          <li>Systemic antibiotics (amoxi-clav, clindamycin) × 10-14 d</li>
          <li>Pain management (NSAID + opioid as needed)</li>
          <li>Warm compresses</li>
          <li>E-collar to prevent licking</li>
          <li>Recheck in 1-2 weeks</li>
        </ul>

        <p><strong>4. Recurrent / chronic anal sac disease:</strong></p>
        <ul>
          <li><strong>Anal sacculectomy</strong> — removal of sacs
            <ul>
              <li>Closed technique preferred — ↓ contamination</li>
              <li>Risk: fecal incontinence (rare with proper technique &lt; 5%), wound dehiscence</li>
              <li>Indication: ≥ 2-3 episodes of sacculitis/abscess despite management</li>
            </ul>
          </li>
        </ul>

        <p><strong>5. Apocrine gland adenocarcinoma:</strong></p>
        <ul>
          <li><strong>Surgical excision</strong> + sublumbar lymph node removal if affected</li>
          <li>Treat hypercalcemia (IV fluids, furosemide, bisphosphonates) preoperatively</li>
          <li>Adjuvant chemotherapy (carboplatin, mitoxantrone, melphalan)</li>
          <li>Radiation therapy — adjunct</li>
          <li>NSAIDs (piroxicam, meloxicam)</li>
          <li>Toceranib (Palladia) 2.5-2.75 mg/kg PO q48h — TKI, evidence in AGASACA</li>
          <li>MST: 6-18 months depending on stage, calcium, treatment aggressiveness</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Recurrent impaction / infection</li>
          <li>Abscess rupture → fistulous tract (occasionally chronic non-healing)</li>
          <li>Fecal incontinence post-sacculectomy (rare)</li>
          <li>Wound dehiscence post-abscess drainage</li>
          <li>Hypercalcemia complications (AGASACA — AKI, neurologic)</li>
          <li>Metastasis (AGASACA)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Impaction / sacculitis with treatment: <strong>excellent</strong></li>
          <li>Abscess: good with proper treatment</li>
          <li>Sacculectomy for recurrent dz: excellent — definitive</li>
          <li>AGASACA without metastasis: fair to good — MST 12-18 mo with surgery</li>
          <li>AGASACA with metastasis / hypercalcemia: guarded — MST 6-12 mo</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 32 · Perianal Fistula ---------- */
  {
    id: 'perianal-fistula',
    titleEn: 'Perianal Fistula (Anal Furunculosis)',
    titleTh: 'แผลฟิสตูล่ารอบทวาร — German Shepherd',
    type: 'disease',
    system: 'digestive',
    species: ['dog'],
    tags: ['perianal fistula', 'anal furunculosis', 'German Shepherd', 'cyclosporine', 'tacrolimus', 'immune-mediated'],
    aliases: ['perianal fistula', 'anal furunculosis', 'แผลก้น GSD'],
    source: 'Ch. 32 · pp. 545–547',
    sections: {
      definition: `
        <p>Chronic immune-mediated <strong>ulcerative + fistulous disease</strong> ของ perianal tissues</p>
        <ul>
          <li><strong>German Shepherd Dog</strong> เด่นมาก — over-represented &gt; 80% ของเคส ✨</li>
          <li>Irish Setter, mixed-breeds occasionally</li>
          <li>Middle-aged to older intact males</li>
          <li>เคยเข้าใจผิดเป็น anal sac abscess — รักษาคนละแบบ</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Immune-mediated</strong> ✨ — similar to Crohn's disease in humans</li>
          <li>Genetic predisposition (GSD)</li>
          <li>Low tail carriage anatomy → ↑ moisture, fecal contamination</li>
          <li>Concurrent IBD common (~ 30-50%) — must screen!</li>
          <li>Bacterial infection = secondary, not primary</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>T-cell mediated inflammation of perianal apocrine glands + adjacent skin</li>
          <li>Multiple draining sinus tracts radiating from anus</li>
          <li>Chronic ulceration, scarring</li>
          <li>Stenosis from fibrosis (advanced)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Multiple draining ulcerated tracts around anus</strong> ✨ — pathognomonic appearance</li>
          <li>Foul odor</li>
          <li>Constant licking, dyschezia, tenesmus</li>
          <li>Bloody / purulent discharge</li>
          <li>Pain on defecation</li>
          <li>Tail held low</li>
          <li>Weight loss (chronic)</li>
          <li>Anorexia</li>
          <li>Concurrent IBD signs (chronic diarrhea/vomiting)</li>
          <li>Stricture formation (advanced) → constipation</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Mostly clinical — characteristic appearance + signalment:</strong></p>
        <ul>
          <li>Visual exam under sedation (most painful — sedate to evaluate properly)</li>
          <li>Document number + extent of tracts</li>
          <li>Rule out: anal sac abscess, neoplasia, foreign body</li>
        </ul>
        <p><strong>Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA — baseline before immunosuppression</li>
          <li>Bacterial culture — identify secondary infection (rarely changes management)</li>
          <li>Biopsy — only if atypical or rule out neoplasia (squamous cell carcinoma)</li>
          <li>GI workup if concurrent diarrhea/vomiting (colonoscopy + biopsy for IBD)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Anal sac abscess (single tract, localized)</li>
          <li>Perianal neoplasia — apocrine adenocarcinoma, SCC</li>
          <li>Foreign body</li>
          <li>Trauma</li>
        </ul>
      `,
      treatment: `
        <p><strong>Modern era — medical management with immunosuppression preferred over surgery ✨</strong></p>

        <p><strong>1. Cyclosporine — first-line ✨</strong></p>
        <ul>
          <li><strong>Cyclosporine 5 mg/kg PO q12h × 4-16 wk</strong>, then taper to lowest effective dose
            <ul>
              <li>Often maintained at 2.5-5 mg/kg q24h or q48h long-term</li>
              <li>Monitor blood levels (trough 400-600 ng/mL ideal)</li>
              <li>Side effects: GI upset, gingival hyperplasia, hirsutism, ↑ infection risk</li>
              <li>Resolution in 70-85% of cases ✓</li>
            </ul>
          </li>
          <li><strong>Ketoconazole 5-10 mg/kg PO q24h</strong> can be combined to ↓ cyclosporine dose 30-50% (cost-saving)
            <ul>
              <li>Monitor LFT</li>
              <li>Drug interaction increases cyclosporine levels</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Topical tacrolimus 0.1% ointment ✨</strong></p>
        <ul>
          <li>Apply to lesions q12-24h</li>
          <li>Adjunct to systemic therapy</li>
          <li>Owner uses gloves to apply</li>
          <li>Effective for milder cases as monotherapy</li>
        </ul>

        <p><strong>3. Diet:</strong></p>
        <ul>
          <li><strong>Hydrolyzed protein diet</strong> ✨ — ↓ recurrence rate; treat concurrent IBD</li>
          <li>Royal Canin Hypoallergenic, Hill's z/d</li>
          <li>Strict — no treats</li>
        </ul>

        <p><strong>4. Adjunctive:</strong></p>
        <ul>
          <li>Stool softener (lactulose 0.5-1 mL/kg PO q12h) — reduce trauma during defecation</li>
          <li>Pain management — NSAID (caution kidney/GI), gabapentin</li>
          <li>Local hygiene — clip hair, gentle clean q12h with chlorhexidine</li>
          <li>E-collar to prevent licking</li>
          <li>Antibiotic only if cellulitis/secondary infection (cephalexin, amoxi-clav × 2-4 wk)</li>
        </ul>

        <p><strong>5. Steroids — historically used, now adjunct only:</strong></p>
        <ul>
          <li>Prednisone 1-2 mg/kg PO q12h × 2 wk, taper</li>
          <li>Less effective monotherapy than cyclosporine</li>
          <li>Combine with cyclosporine for refractory cases</li>
        </ul>

        <p><strong>6. Refractory cases:</strong></p>
        <ul>
          <li>Azathioprine (combine with cyclosporine — synergy)</li>
          <li>Surgical management (less common now — high morbidity):
            <ul>
              <li>Surgical debridement / cryotherapy</li>
              <li>Tail amputation (very refractory)</li>
            </ul>
          </li>
          <li>Castration ↓ recurrence — recommended in intact males</li>
        </ul>

        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Most dogs require lifelong low-dose immunosuppression</li>
          <li>Recurrence common if therapy stopped</li>
          <li>Recheck q3-6 months</li>
          <li>Manage concurrent IBD</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Recurrence (~ 30-50%)</li>
          <li>Anal stenosis from chronic scarring</li>
          <li>Fecal incontinence (uncommon, post-surgical)</li>
          <li>Cyclosporine side effects: gingival hyperplasia, GI, ↑ infection</li>
          <li>Concurrent IBD flare</li>
          <li>Owner fatigue with long-term management</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>With cyclosporine: <strong>70-85% remission</strong> ✓</li>
          <li>Most require maintenance therapy</li>
          <li>Diet management ↓ recurrence</li>
          <li>Severe long-standing dz with stricture: guarded</li>
          <li>Concurrent IBD: harder to manage</li>
        </ul>
        <div class="callout">💡 <strong>Owner education:</strong> นี่คือ immune-mediated disease ของ German Shepherd ที่รักษาได้ดีด้วย cyclosporine + diet — ไม่ใช่ infection. Long-term management แต่ quality of life ดีมาก</div>
      `,
    },
  },

  /* ---------- Ch 32 · EPI ---------- */
  {
    id: 'epi',
    titleEn: 'Exocrine Pancreatic Insufficiency (EPI)',
    titleTh: 'EPI — ตับอ่อนสร้างเอนไซม์ไม่พอ',
    type: 'disease',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['EPI', 'pancreatic insufficiency', 'TLI', 'pancreatic enzyme', 'cobalamin', 'German Shepherd', 'weight loss', 'steatorrhea'],
    aliases: ['EPI', 'pancreatic insufficiency', 'ตับอ่อนพร่อง'],
    source: 'Ch. 32 · pp. 581–584',
    sections: {
      definition: `
        <p>การที่ <strong>exocrine pancreas</strong> ผลิตเอนไซม์ไม่พอ → maldigestion + malabsorption</p>
        <ul>
          <li>เจอบ่อยใน <strong>German Shepherd Dog</strong> ✨ — autosomal recessive pancreatic acinar atrophy (PAA)</li>
          <li>Rough Collie, Eurasier, Chow Chow, Cavalier KCS</li>
          <li>Cat: rare; usually post-chronic pancreatitis</li>
        </ul>
      `,
      etiology: `
        <p><strong>Dog:</strong></p>
        <ul>
          <li><strong>Pancreatic acinar atrophy (PAA)</strong> — most common; immune-mediated destruction of acinar cells; young adult onset (1-5 yr)</li>
          <li>Chronic pancreatitis (sequela; older onset)</li>
          <li>Pancreatic neoplasia (rare)</li>
          <li>Congenital pancreatic hypoplasia (rare)</li>
        </ul>
        <p><strong>Cat:</strong></p>
        <ul>
          <li>Chronic pancreatitis — most common</li>
          <li>Often concurrent with IBD, cholangitis ("triaditis")</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Loss of acinar cells (~ 90%+ before clinical signs) → ↓ digestive enzymes (lipase, amylase, proteases)</li>
          <li>Maldigestion → malabsorption</li>
          <li>Undigested food → bacterial overgrowth in SI → folate ↑, cobalamin ↓</li>
          <li>Cobalamin deficiency: intrinsic factor production ↓ + bacterial competition for B12</li>
          <li>Steatorrhea from undigested fat</li>
          <li>Maintained appetite or polyphagia (fed but starving)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Chronic large-volume diarrhea</strong> — soft, voluminous, sometimes pale/greasy (steatorrhea) ✨</li>
          <li><strong>Polyphagia despite weight loss</strong> ✨ — classic triad with diarrhea + weight loss</li>
          <li>Severe weight loss / cachexia</li>
          <li>Coprophagia, pica</li>
          <li>Borborygmi, flatulence</li>
          <li>Poor coat quality</li>
          <li>Vomiting (less common)</li>
          <li>Behavior change (irritable from hunger)</li>
          <li>Cat: variable — weight loss, ± diarrhea, may be subtle</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>TLI (Trypsin-Like Immunoreactivity) — definitive ✨</strong></p>
        <ul>
          <li>Fasted serum sample (12h fast)</li>
          <li><strong>Dog: TLI &lt; 2.5 µg/L = diagnostic</strong></li>
          <li><strong>Cat: TLI &lt; 8 µg/L = diagnostic</strong></li>
          <li>Borderline (2.5-5.7 dog, 8-12 cat) — repeat in 1-2 months</li>
          <li>Highly sensitive + specific</li>
          <li>Replaces older fecal trypsin tests (unreliable)</li>
        </ul>
        <p><strong>Cobalamin (B12):</strong></p>
        <ul>
          <li>↓ in &gt; 80% of EPI dogs ✨</li>
          <li>Must supplement — without it, treatment fails</li>
        </ul>
        <p><strong>Folate:</strong></p>
        <ul>
          <li>↑ from bacterial overgrowth (common in EPI)</li>
          <li>↓ may occur with chronic SI mucosal disease</li>
        </ul>
        <p><strong>Other tests:</strong></p>
        <ul>
          <li>CBC: usually normal (chronic dz) or mild anemia</li>
          <li>Biochem: hypocholesterolemia, ± hypoalbuminemia</li>
          <li>cPL — usually normal in PAA; may be low</li>
          <li>Abdominal US: small pancreas (chronic atrophy); rule out neoplasia, IBD</li>
          <li>Endoscopy + biopsy if concurrent IBD suspected</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Severe IBD / chronic enteropathy</li>
          <li>Lymphoma (alimentary)</li>
          <li>SI bacterial overgrowth (without EPI)</li>
          <li>Dietary intolerance / food allergy</li>
          <li>Parasites</li>
          <li>Hyperthyroid (cat)</li>
          <li>DM</li>
          <li>Malabsorption from other causes</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Pancreatic enzyme replacement therapy (PERT) — mainstay ✨</strong></p>
        <ul>
          <li><strong>Powdered pancreatic enzymes</strong> — most effective form
            <ul>
              <li>Pancreatic enzyme powder (Pancrezyme, Viokase-V) 1 tsp per 10 kg per meal, mixed with food</li>
              <li>Or 2 g/20 kg per meal</li>
              <li>Mix with food + let sit 15-20 min before feeding (predigestion enhances) — ไม่จำเป็นเสมอ, แต่ช่วยบางเคส</li>
            </ul>
          </li>
          <li>Tablets / capsules — less effective; some lose enzyme activity</li>
          <li>Raw pancreas (frozen 0.5-3 oz/meal) — alternative; cheaper, effective</li>
          <li>Adjust dose to clinical response</li>
        </ul>

        <p><strong>2. Cobalamin supplementation ✨ (essential — treatment fails without it):</strong></p>
        <ul>
          <li><strong>Dog: 250-1500 µg cyanocobalamin SC weekly × 6 weeks, then monthly (lifelong)</strong></li>
          <li><strong>Cat: 250 µg SC weekly × 6 weeks, then monthly</strong></li>
          <li>Or oral cobalamin 1 mg PO q24h dog (recent evidence equivalent for many cases)</li>
          <li>Recheck B12 level 1 month after series</li>
        </ul>

        <p><strong>3. Diet:</strong></p>
        <ul>
          <li>Highly digestible, moderate-low fat diet</li>
          <li>Royal Canin GI Low Fat, Hill's i/d, Purina EN</li>
          <li>Multiple small meals (3-4×/day) initially</li>
          <li>Avoid high-fat treats / table food</li>
          <li>Some dogs do well on regular maintenance diet — individual response</li>
        </ul>

        <p><strong>4. Antibiotic for SIBO (if folate ↑):</strong></p>
        <ul>
          <li>Tylosin 10-20 mg/kg PO q12h × 4-6 wk</li>
          <li>Or metronidazole 10 mg/kg PO q12h × 4-6 wk</li>
          <li>Improves response when SIBO confirmed</li>
        </ul>

        <p><strong>5. H2 blocker / PPI (if poor enzyme efficacy):</strong></p>
        <ul>
          <li>Famotidine 0.5-1 mg/kg PO q12h or omeprazole 1 mg/kg PO q24h</li>
          <li>Reduces gastric acid degradation of enzymes</li>
          <li>Trial if not responding to PERT alone</li>
        </ul>

        <p><strong>6. Concurrent IBD (cat triaditis):</strong></p>
        <ul>
          <li>If concurrent inflammatory enteropathy → add prednisolone or budesonide</li>
          <li>Biopsy if uncertain</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Weight gain, BCS, stool quality (most important indicators)</li>
          <li>Cobalamin q2-3 months initially</li>
          <li>TLI not useful for monitoring (low forever)</li>
          <li>Clinical response within 1-2 weeks of starting therapy = expected</li>
        </ul>

        <p><strong>Cost considerations:</strong></p>
        <ul>
          <li>Pancreatic enzymes are <strong>expensive</strong> — major owner concern</li>
          <li>Raw frozen pancreas (from butcher / pet supply) — more affordable</li>
          <li>Generic enzymes available</li>
          <li>Long-term commitment essential</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Treatment failure due to cobalamin deficiency unrecognized</li>
          <li>Cost of enzymes — owner non-compliance</li>
          <li>SIBO recurrence</li>
          <li>Concurrent IBD / lymphoma</li>
          <li>Severe weight loss / cachexia (untreated)</li>
          <li>Persistent steatorrhea</li>
          <li>Pancreatitis episodes (triaditis cat)</li>
          <li>Diabetes mellitus development (if endocrine cells also lost — rare)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>With proper treatment + cobalamin: <strong>excellent</strong> — normal lifespan ✓</li>
          <li>Weight gain expected within 2-4 wk</li>
          <li>Treatment lifelong</li>
          <li>Owner compliance essential (cost, daily administration)</li>
          <li>Cat with triaditis: more complex; depends on overall management</li>
        </ul>
        <div class="callout">💡 <strong>3 R's for EPI success:</strong> Replace enzymes (PERT), Replace B12 (cobalamin), Reassess regularly. ขาดอย่างใดอย่างหนึ่ง = treatment fails</div>
      `,
    },
  },

  /* ---------- Esophagostomy Tube Placement (procedure) ---------- */
  {
    id: 'esophagostomy-tube',
    titleEn: 'Esophagostomy Tube Placement',
    titleTh: 'การใส่ E-tube — สายให้อาหารทางหลอดอาหาร',
    type: 'procedure',
    system: 'digestive',
    species: ['dog', 'cat'],
    tags: ['esophagostomy tube', 'E-tube', 'feeding tube', 'enteral nutrition', 'anorexia', 'nutritional support'],
    aliases: ['E-tube', 'esophagostomy', 'feeding tube placement', 'การใส่สายให้อาหาร'],
    source: 'Ch. 28 · pp. 442–444',
    sections: {
      indications: `
        <p><strong>Primary indications — anorexic patient who cannot/will not eat ≥ 3-5 days but has functional GI tract</strong> ✨</p>
        <ul>
          <li><strong>Hepatic lipidosis (cat)</strong> ✨ — most common indication; lifesaving</li>
          <li>Severe oral / dental disease (post-jaw fracture, severe stomatitis)</li>
          <li>Pancreatitis with prolonged anorexia</li>
          <li>Megaesophagus (recurrent aspiration with oral feeding) — bypass</li>
          <li>CKD with cachexia</li>
          <li>Post-surgical (oral, mandibular)</li>
          <li>Chronic disease with cachexia</li>
          <li>Recovery from severe illness</li>
          <li>Drug administration in fractious / non-compliant patients</li>
        </ul>
      `,
      contraindications: `
        <p><strong>Absolute:</strong></p>
        <ul>
          <li>Esophageal disease — severe esophagitis, stricture, mass, megaesophagus (relative — case by case)</li>
          <li>Persistent vomiting (will dislodge tube + risk aspiration)</li>
          <li>Uncontrolled coagulopathy</li>
          <li>Patient too unstable for sedation/anesthesia</li>
        </ul>
        <p><strong>Relative:</strong></p>
        <ul>
          <li>Cervical mass / disease</li>
          <li>Need for &gt; 3-4 weeks nutrition (consider PEG instead)</li>
          <li>Severe neck dermatitis</li>
        </ul>
        <p><strong>Choice of feeding tube:</strong></p>
        <ul>
          <li><em>NG tube</em> — short-term (&lt; 3-5 d), in-hospital, awake placement</li>
          <li><strong>Esophagostomy</strong> — short-medium term (1 day - several months); easy at-home use ✨</li>
          <li><em>Gastrostomy (PEG)</em> — long-term &gt; 1 month; more invasive</li>
          <li><em>Jejunostomy</em> — bypass stomach; specialized cases</li>
        </ul>
      `,
      preparation: `
        <p><strong>Patient:</strong></p>
        <ul>
          <li>General anesthesia required — propofol induction, isoflurane maintenance, ETT</li>
          <li>Pre-op IV catheter, fluid therapy</li>
          <li>Pre-op antibiotic single dose (cefazolin 22 mg/kg IV) optional</li>
          <li>Position: <strong>right lateral recumbency</strong></li>
          <li>Clip + aseptic prep <strong>left lateral cervical</strong> (avoids carotid + jugular)</li>
          <li>Drape</li>
        </ul>
        <p><strong>Equipment:</strong></p>
        <ul>
          <li><strong>E-tube selection:</strong>
            <ul>
              <li>Cat: 12-14 Fr</li>
              <li>Small dog: 14-18 Fr</li>
              <li>Medium-large dog: 18-22 Fr</li>
              <li>Premeasure: from skin entry site to 9th rib (approximately mid-thoracic esophagus, above LES)</li>
              <li>Mark with tape or marker</li>
            </ul>
          </li>
          <li>Curved Carmalt or Rochester forceps (long, sturdy)</li>
          <li>Scalpel #11 blade</li>
          <li>Suture: nylon 2-0 or 3-0 for skin secure</li>
          <li>Chinese finger trap suture pattern</li>
          <li>Sterile lubricant (water-soluble)</li>
          <li>Stylet / wire guide (some kits)</li>
          <li>Needle-driver, suture scissors</li>
        </ul>
      `,
      steps: `
        <ol style="font-family: var(--font-thai); font-size: 16px; line-height: 1.7; color: var(--ink); margin: 6px 0 10px 22px; padding: 0;">
          <li><strong>Anesthetize + position</strong> right lateral recumbency, intubate, maintain</li>
          <li><strong>Aseptic prep</strong> left cervical area</li>
          <li><strong>Insert curved forceps</strong> through mouth into proximal-mid cervical esophagus
            <ul style="margin: 6px 0 6px 20px;">
              <li>Direct tip toward left lateral cervical body wall</li>
              <li>Push tip out laterally to tent skin</li>
              <li>Tip should be palpable through skin (between jugular vein dorsally + larynx ventrally)</li>
            </ul>
          </li>
          <li><strong>Make stab incision through skin over forceps tip</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Force tip through esophageal wall + skin</li>
              <li>Feel "pop" as forceps emerges</li>
            </ul>
          </li>
          <li><strong>Grasp E-tube tip with forceps</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Pull tube back through esophagus + out the mouth</li>
              <li>Tube goes: skin → esophagus → out mouth (retrograde)</li>
            </ul>
          </li>
          <li><strong>Curve tube tip back toward esophagus</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Reinsert tube tip into esophagus down to caudal esophagus</li>
              <li>Direction reversed — now feeds normally</li>
              <li>Tube has subtle "U-curl" at exit point — palpate to ensure smooth</li>
            </ul>
          </li>
          <li><strong>Confirm placement</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Pass to premeasured length</li>
              <li>Should advance smoothly without resistance</li>
              <li>Lateral cervical/thoracic radiograph — tip in distal esophagus, 1-2 vertebrae cranial to diaphragm; <em>not in stomach</em></li>
            </ul>
          </li>
          <li><strong>Secure with finger trap suture pattern</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Anchor first to skin near tube exit</li>
              <li>Multiple criss-cross sutures around tube without compressing</li>
              <li>Tube should be snug but not strangulated</li>
            </ul>
          </li>
          <li><strong>Apply sterile dressing + neck wrap</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Antibiotic ointment + sterile gauze at exit site</li>
              <li>Light bandage / soft collar — prevent self-removal</li>
            </ul>
          </li>
          <li><strong>Post-procedure radiograph</strong> — confirm tube position, no pneumothorax</li>
        </ol>
      `,
      complications: `
        <p><strong>Common (mild):</strong></p>
        <ul>
          <li><strong>Stoma site cellulitis / infection</strong> — most common; clean daily, monitor</li>
          <li>Tube clogging — flush with warm water q4-6h + after each meal</li>
          <li>Mild discomfort first 24-48h</li>
          <li>Slight food regurgitation if rate too fast</li>
        </ul>
        <p><strong>Serious (rare):</strong></p>
        <ul>
          <li>Tube migration — into oropharynx (vomits up tube) or into stomach (rare)</li>
          <li>Esophagitis from tube tip if too caudal (LES region)</li>
          <li>Esophageal stricture (chronic tube → fibrosis; rare)</li>
          <li>Aspiration pneumonia (delayed gastric emptying, vomiting)</li>
          <li>Carotid / jugular laceration (poor technique) ✗</li>
          <li>Pneumomediastinum / pneumothorax (rare)</li>
          <li>Subcutaneous emphysema</li>
          <li>Tube dislodgement</li>
        </ul>
      `,
      postCare: `
        <p><strong>Initial 24h post-placement:</strong></p>
        <ul>
          <li>Monitor for vomiting, dyspnea</li>
          <li>Wait <strong>at least 4-6 hours before first feeding</strong> — allow tract to seal</li>
          <li>Many start with water trickle first feed, then dilute food</li>
        </ul>
        <p><strong>Feeding protocol:</strong></p>
        <ul>
          <li><strong>Day 1: 25-33% of resting energy requirement (RER)</strong></li>
          <li>Day 2: 50-66%</li>
          <li>Day 3+: 100% RER (then ↑ to MER as tolerated)</li>
          <li>RER (kcal/day) = 70 × (BW kg)^0.75 หรือ 30(BW) + 70 for 2-30 kg</li>
          <li>Divide into 4-6 meals/day</li>
          <li>Each meal: deliver slowly over 5-10 min via syringe</li>
          <li><strong>Flush tube with 5-10 mL warm water before + after each feeding</strong> — prevent clogging ✨</li>
          <li>Cap when not in use</li>
        </ul>
        <p><strong>Diet choice:</strong></p>
        <ul>
          <li>Liquid recovery diets: Royal Canin Recovery Liquid, Hill's a/d Liquid, Eukanuba Maximum Calorie</li>
          <li>Or blenderize canned food (a/d, Recovery, EN) with water to syringe through tube</li>
          <li>Strain to remove particulates ที่อาจ clog</li>
          <li>Check viscosity — should flow easily through chosen tube size</li>
        </ul>
        <p><strong>Site care:</strong></p>
        <ul>
          <li>Clean stoma site daily with chlorhexidine</li>
          <li>Apply antibiotic ointment</li>
          <li>Replace dressing</li>
          <li>Watch for redness, discharge, swelling, pain → check for infection</li>
        </ul>
        <p><strong>Owner education for at-home use:</strong></p>
        <ul>
          <li>Teach feeding technique</li>
          <li>Recognize tube migration (gagging, regurgitation, tube length change)</li>
          <li>Site care</li>
          <li>When to call (vomiting, redness, fever, dyspnea)</li>
        </ul>
        <p><strong>Tube removal:</strong></p>
        <ul>
          <li>When patient eats voluntarily ≥ 75% of RER × 3-5 days</li>
          <li>Cut suture, gentle traction — slides out</li>
          <li>Stoma heals by second intention 3-7 days (clean daily)</li>
          <li>No surgical closure needed</li>
          <li>Can leave tube in place for weeks-months if needed</li>
        </ul>
        <div class="callout">💡 <strong>E-tube ในแมว anorexic เป็น life-saving</strong> — โดยเฉพาะ hepatic lipidosis. อย่ารอ — ใส่เร็ว แมวกินได้ทันที = recovery เร็วขึ้นมาก. Owners learn to use within 1-2 days</div>
      `,
    },
  },

  /* ============================================================
     PART 4 — HEPATOBILIARY &amp; EXOCRINE PANCREAS (Ch 33–37)
  ============================================================ */

  /* ---------- Ch 33 · Clinical Manifestations of Hepatobiliary Disease ---------- */
  {
    id: 'hepato-clinical-manifestations',
    titleEn: 'Clinical Manifestations of Hepatobiliary Disease',
    titleTh: 'อาการของโรคตับ',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['jaundice', 'icterus', 'hepatic encephalopathy', 'ascites', 'PU/PD', 'weight loss', 'coagulopathy', 'hyperbilirubinemia'],
    aliases: ['liver disease signs', 'อาการโรคตับ', 'ดีซ่าน'],
    source: 'Ch. 33 · pp. 553–562',
    sections: {
      definition: `
        <p>โรคตับ — อาการ <strong>nonspecific มาก</strong> มัก present ตอน &gt; 70-80% ของ liver function lost</p>
        <ul>
          <li>ตับมี <em>functional reserve</em> สูง + <em>regenerative capacity</em> ดี → early disease detection ยาก</li>
          <li>ส่วนใหญ่เคสที่เจอเป็น <em>secondary</em> hepatopathy (จาก systemic dz) ไม่ใช่ primary</li>
        </ul>
      `,
      etiology: `
        <p><strong>Primary liver disease:</strong></p>
        <ul>
          <li>Hepatic lipidosis (cat)</li>
          <li>Chronic hepatitis (dog)</li>
          <li>Cholangitis (cat)</li>
          <li>Portosystemic shunt</li>
          <li>Drug/toxin (acetaminophen, sago palm, xylitol, mushroom, NSAIDs, anticonvulsants)</li>
          <li>Neoplasia (HCC, biliary, metastatic)</li>
          <li>Infectious (leptospirosis, hepatic abscess)</li>
          <li>Copper storage disease</li>
        </ul>
        <p><strong>Secondary (reactive) hepatopathy:</strong></p>
        <ul>
          <li>Steroid hepatopathy (dog)</li>
          <li>Diabetes</li>
          <li>Pancreatitis</li>
          <li>IBD</li>
          <li>Cardiac (right CHF — congestion)</li>
          <li>Sepsis</li>
        </ul>
      `,
      pathophysiology: `
        <p>กลไกของอาการต่างๆ:</p>
        <ul>
          <li><strong>Jaundice:</strong> bilirubin metabolism impaired</li>
          <li><strong>HE (hepatic encephalopathy):</strong> ammonia + other neurotoxins → ↓ consciousness</li>
          <li><strong>Ascites:</strong> portal hypertension + hypoalbuminemia</li>
          <li><strong>Coagulopathy:</strong> ↓ synthesis of factors II, VII, IX, X, fibrinogen</li>
          <li><strong>PU/PD:</strong> ↓ urea cycle → ↓ medullary tonicity + cortisol metabolism altered</li>
          <li><strong>Weight loss / muscle wasting:</strong> impaired protein synthesis + cachexia</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Common signs (mostly nonspecific):</strong></p>
        <ul>
          <li>Anorexia / hyporexia ✨ (มัก first sign)</li>
          <li>Lethargy</li>
          <li>Vomiting (cat especially)</li>
          <li>Diarrhea (sometimes pale acholic stool — biliary obstruction)</li>
          <li>Weight loss</li>
          <li>PU/PD ✨ (เด่นในหมา)</li>
        </ul>
        <p><strong>Specific signs:</strong></p>
        <ul>
          <li><strong>Jaundice (icterus)</strong> ✨ — sclera, oral mucosa, skin (pinna, ventral abdomen)
            <ul>
              <li>Detectable when bilirubin &gt; 2-3 mg/dL</li>
              <li>Pre-hepatic (hemolysis), hepatic, post-hepatic (obstruction)</li>
            </ul>
          </li>
          <li><strong>Hepatic encephalopathy</strong> ✨:
            <ul>
              <li>Mild: depression, head-pressing, mild ataxia</li>
              <li>Moderate: drooling, intermittent blindness, circling, behavior change</li>
              <li>Severe: stupor, seizures, coma ✗</li>
              <li>Worse after high-protein meals</li>
            </ul>
          </li>
          <li><strong>Ascites</strong> — portal hypertension; modified transudate</li>
          <li><strong>Coagulopathy</strong> — petechiae, ecchymoses, prolonged bleeding</li>
          <li>Hepatomegaly / microhepatica (palpate carefully)</li>
          <li>Acholic stool — pale grey-tan; complete biliary obstruction</li>
          <li>Bilirubinuria — orange-brown urine ✨ (cat: <em>any</em> bilirubinuria abnormal)</li>
          <li>Vitamin K deficiency bleeding (biliary obstruction)</li>
        </ul>
        <p><strong>Cat-specific:</strong></p>
        <ul>
          <li>Anorexia &gt; 3 days → <strong>hepatic lipidosis risk</strong> ✗ — ทุกแมวที่ stop eating</li>
          <li>Drooling/ptyalism (HE component)</li>
          <li>"Ventroflexion" (severe — hepatic + electrolytes)</li>
        </ul>
      `,
      diagnosis: `
        <p>ดู Hepatic Diagnostic Tests entry</p>
      `,
      differential: `<p>กว้างมาก — ต้องแยก primary vs secondary hepatopathy</p>`,
      treatment: `<p>ตามสาเหตุ — ดู entries เฉพาะ</p>`,
      complications: `
        <ul>
          <li>Hepatic encephalopathy → coma, death</li>
          <li>Coagulopathy → spontaneous bleeding</li>
          <li>Hypoglycemia (severe failure)</li>
          <li>Sepsis (impaired Kupffer cell function)</li>
          <li>Ascites / pleural effusion</li>
          <li>Hepatic failure</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 34 · Hepatobiliary Diagnostic Tests ---------- */
  {
    id: 'hepato-diagnostic-tests',
    titleEn: 'Hepatobiliary Diagnostic Tests',
    titleTh: 'การตรวจวินิจฉัยโรคตับ',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['ALT', 'ALP', 'GGT', 'bilirubin', 'bile acids', 'ammonia', 'albumin', 'coagulation', 'liver biopsy', 'FNA'],
    aliases: ['liver enzymes', 'bile acids', 'ตรวจตับ'],
    source: 'Ch. 34 · pp. 563–570',
    sections: {
      definition: `<p>เครื่องมือ workup โรคตับ — แยก hepatocellular damage / cholestasis / function</p>`,
      etiology: `<p>—</p>`,
      pathophysiology: `<p>—</p>`,
      symptoms: `<p>ดู Clinical Manifestations entry</p>`,
      diagnosis: `
        <p><strong>1. Hepatocellular damage (leakage enzymes):</strong></p>
        <ul>
          <li><strong>ALT (alanine transaminase)</strong> ✨ — most specific for hepatocyte damage in dog/cat
            <ul>
              <li>Half-life: dog 60h, cat 3-4h</li>
              <li>Cat: <strong>any ↑ ALT abnormal</strong> ✨ — short half-life</li>
              <li>Severity ≠ disease severity (massive ALT in resolving toxin; mild in end-stage cirrhosis)</li>
            </ul>
          </li>
          <li>AST — less specific (muscle, RBC also)</li>
        </ul>

        <p><strong>2. Cholestasis (induced enzymes):</strong></p>
        <ul>
          <li><strong>ALP (alkaline phosphatase):</strong>
            <ul>
              <li>Dog: ↑ from cholestasis, steroids (steroid-induced isoenzyme), bone (young), hepatic neoplasia
                <ul>
                  <li>Mild ↑ common, often nonspecific</li>
                  <li>Massive ↑ → hepatic / endocrine cause</li>
                </ul>
              </li>
              <li>Cat: <strong>any ↑ ALP very significant</strong> ✨ — short half-life ~ 6h, no steroid isoenzyme</li>
            </ul>
          </li>
          <li><strong>GGT (gamma-glutamyl transferase):</strong>
            <ul>
              <li>Cat: more sensitive than ALP for cholangitis</li>
              <li>↑ GGT + ↑ ALP cat → biliary disease likely</li>
              <li>Hepatic lipidosis: ALP ↑↑ but GGT often normal-mild ✨ (distinguish from cholangitis!)</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Liver function tests:</strong></p>
        <ul>
          <li><strong>Bile acids (pre + 2h post-prandial)</strong> ✨ — most sensitive function test
            <ul>
              <li>Pre &lt; 10 µmol/L, post &lt; 25 µmol/L (dog); cat similar</li>
              <li>Both ↑ &gt; 25 = significant dysfunction or shunt</li>
              <li>Use to detect PSS, cirrhosis, severe hepatitis</li>
              <li>NOT useful in icteric patients (already hyperbili)</li>
            </ul>
          </li>
          <li><strong>Ammonia:</strong>
            <ul>
              <li>↑ in HE, PSS, severe failure</li>
              <li>Sample handling tricky (must be cold, processed quickly)</li>
              <li>Bile acids + ammonia = complementary</li>
            </ul>
          </li>
          <li><strong>Albumin:</strong>
            <ul>
              <li>↓ in chronic hepatic insufficiency (synthesis)</li>
              <li>&gt; 70% of liver lost before albumin ↓</li>
            </ul>
          </li>
          <li><strong>BUN:</strong> ↓ in PSS, hepatic insufficiency (urea cycle)</li>
          <li><strong>Glucose:</strong> ↓ in severe failure, sepsis, neonatal PSS</li>
          <li><strong>Cholesterol:</strong> ↓ in PSS, severe insufficiency, malabsorption</li>
          <li><strong>Coagulation (PT, aPTT, fibrinogen):</strong> prolonged in severe dz, biliary obstruction (vit K malabsorption)</li>
        </ul>

        <p><strong>4. Bilirubin:</strong></p>
        <ul>
          <li>Total + direct (conjugated) + indirect (unconjugated)</li>
          <li>↑ Indirect: hemolysis (+ ↑ direct as overflow)</li>
          <li>↑ Direct dominant: cholestasis</li>
          <li>Cat: <strong>bilirubinuria abnormal even in trace amounts</strong> ✨</li>
          <li>Dog: trace bilirubinuria can be normal (concentrated urine male dogs)</li>
        </ul>

        <p><strong>5. Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal US (preferred)</strong> ✨:
            <ul>
              <li>Liver size, echogenicity, masses</li>
              <li>Biliary tree dilation (obstruction)</li>
              <li>Gallbladder mucocele (kiwi-fruit appearance)</li>
              <li>Vascular abnormalities (PSS — extra-hepatic shunt visible)</li>
              <li>FNA / Tru-cut biopsy under guidance</li>
            </ul>
          </li>
          <li>Abdominal rad: liver size, masses, mineralization</li>
          <li>CT angiography: PSS confirmation, complex vascular anomalies</li>
          <li>Scintigraphy (per-rectal): PSS detection (referral)</li>
        </ul>

        <p><strong>6. Liver biopsy (definitive):</strong></p>
        <ul>
          <li><strong>FNA:</strong>
            <ul>
              <li>Cytology — diffuse processes (lipidosis, lymphoma, mast cell, infection, copper)</li>
              <li>Limited for inflammation, fibrosis</li>
              <li>Quick + safe ใน most cases</li>
            </ul>
          </li>
          <li><strong>Tru-cut needle biopsy</strong>:
            <ul>
              <li>Tissue architecture — chronic hepatitis, fibrosis</li>
              <li>Coag panel + platelet count <em>before</em> biopsy</li>
              <li>Multiple cores recommended</li>
              <li>Special stains: rhodanine (copper), reticulin, IHC</li>
            </ul>
          </li>
          <li><strong>Surgical / laparoscopic biopsy:</strong>
            <ul>
              <li>Larger samples</li>
              <li>Direct visualization, multi-organ biopsy (cat triaditis: liver + pancreas + intestine)</li>
              <li>Better for fibrosis assessment</li>
            </ul>
          </li>
        </ul>

        <p><strong>7. Hepatic copper quantification:</strong></p>
        <ul>
          <li>Atomic absorption spectroscopy on biopsy</li>
          <li>Normal &lt; 400 µg/g dry weight</li>
          <li>&gt; 1500 = copper toxicity</li>
          <li>Bedlington, Lab, Doberman — screen ✨</li>
        </ul>

        <p><strong>8. Bile / pancreatic specific:</strong></p>
        <ul>
          <li>Ascitic / bile fluid analysis</li>
          <li>Bile culture (cholangitis)</li>
          <li>cPL/fPL (concurrent pancreatitis common — triaditis)</li>
        </ul>
      `,
      differential: `<p>—</p>`,
      treatment: `<p>เครื่องมือ — ไม่มี</p>`,
      complications: `
        <ul>
          <li>Biopsy: hemorrhage (esp. coagulopathy), bile leak, pneumothorax (rare)</li>
          <li>Always check coag profile + platelets before invasive procedure</li>
          <li>Pre-treatment with vitamin K1 (1-2.5 mg/kg SC × 2-3 doses) ถ้า PT prolonged</li>
        </ul>
        <div class="callout">💡 <strong>Cat liver enzyme rule:</strong> any ALT/ALP/GGT elevation in cat is significant due to short half-life. Don't dismiss "mild" elevation — workup recommended</div>
      `,
    },
  },

  /* ---------- Ch 35 · Hepatic Lipidosis (Feline) ---------- */
  {
    id: 'hepatic-lipidosis',
    titleEn: 'Feline Hepatic Lipidosis',
    titleTh: 'ตับติดมัน — ภาวะตับอักเสบในแมวที่ไม่กินอาหาร',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['cat'],
    tags: ['hepatic lipidosis', 'feline fatty liver', 'anorexia', 'jaundice', 'feeding tube', 'esophagostomy', 'taurine', 'L-carnitine', 'vitamin K'],
    aliases: ['fatty liver cat', 'FHL', 'idiopathic hepatic lipidosis', 'แมวตับติดมัน', 'hepatic steatosis cat'],
    source: 'Ch. 35 · pp. 571–578',
    sections: {
      definition: `
        <p>ภาวะ <strong>fatty infiltration of hepatocytes</strong> ในแมว → ตับทำงานผิดปกติ + cholestasis</p>
        <ul>
          <li><strong>เจอบ่อยที่สุดของโรคตับในแมว</strong> ✨</li>
          <li>เกิดจากการ <strong>หยุดกินอาหาร</strong> (anorexia) &gt; 3-5 วัน → ตับสะสมไขมัน</li>
          <li>มัก <strong>secondary</strong> ต่อโรคอื่น (pancreatitis, IBD, neoplasia, stress, dental, urinary)</li>
          <li>Mortality สูงถ้าไม่รักษาเร็ว — &gt; 90%; with aggressive treatment 60-85% survive</li>
        </ul>
      `,
      etiology: `
        <p><strong>Primary trigger: prolonged anorexia / hyporexia ในแมว overweight</strong></p>
        <p><strong>Underlying causes (must identify!):</strong></p>
        <ul>
          <li><strong>Idiopathic</strong> — ~ 50% (no underlying cause found despite workup)</li>
          <li><strong>Pancreatitis</strong> ✨ — common; "triaditis" with IBD + cholangitis</li>
          <li><strong>IBD / chronic enteropathy</strong></li>
          <li><strong>Cholangitis</strong></li>
          <li>Diabetes mellitus (DKA cat — anorexia)</li>
          <li>Neoplasia (lymphoma, others)</li>
          <li>CKD</li>
          <li>Hyperthyroidism</li>
          <li>Stress (boarding, household change, new pet)</li>
          <li>Urinary tract dz (FLUTD)</li>
          <li>Dental disease (oral pain → anorexia)</li>
          <li>Drug-induced (recent medication change)</li>
        </ul>
        <p><strong>Risk factors:</strong></p>
        <ul>
          <li>Obesity ✨</li>
          <li>Middle-aged (5-10 years)</li>
          <li>Stress / household change</li>
          <li>Female slightly &gt; male</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Anorexia → peripheral lipolysis → free fatty acids flood liver</li>
          <li>Liver overwhelmed → can't repackage as VLDL or β-oxidize</li>
          <li>Triglycerides accumulate in hepatocytes → <strong>fatty infiltration</strong></li>
          <li>Hepatocyte swelling → intrahepatic cholestasis → ↑ bilirubin, ↑ ALP</li>
          <li>Cell membrane dysfunction → ALT leak</li>
          <li>Carnitine, taurine, B-vitamins, electrolytes depleted</li>
          <li>Coagulopathy (vitamin K malabsorption from cholestasis) — clinical bleeding risk</li>
          <li>Severe → hepatic encephalopathy, refractory hypokalemia, hypophosphatemia (refeeding syndrome)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Anorexia &gt; 3-5 days</strong> ✨ — hallmark</li>
          <li><strong>Severe weight loss</strong> ✨ — มาก ภายใน weeks</li>
          <li><strong>Jaundice</strong> ✨ — sclera, oral mucosa, ear pinna, skin</li>
          <li>Vomiting (variable)</li>
          <li>Lethargy, weakness</li>
          <li>Dehydration</li>
          <li><strong>Drooling / ptyalism</strong> (early sign of HE)</li>
          <li>Hepatic encephalopathy: depression, head-pressing, ventroflexion, intermittent blindness</li>
          <li>Hepatomegaly (palpable)</li>
          <li>Constipation (dehydration)</li>
          <li>Coagulopathy — petechiae, prolonged bleeding from venipuncture</li>
          <li>Severe: stupor, coma ✗</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab findings (classic):</strong></p>
        <ul>
          <li><strong>↑ ALP (markedly), ↑ ALT, ↑ AST</strong> ✨</li>
          <li><strong>GGT normal or mildly ↑</strong> — KEY for distinguishing from cholangitis (where GGT ↑↑) ✨</li>
          <li><strong>↑ Total bilirubin</strong> (often &gt; 2-5 mg/dL)</li>
          <li><strong>Bilirubinuria</strong></li>
          <li>Hypoalbuminemia (severe)</li>
          <li>↓ BUN (rare)</li>
          <li>Hypokalemia, hypophosphatemia, hypomagnesemia (especially after refeeding starts)</li>
          <li>Prolonged PT (vit K deficiency)</li>
          <li>± Mild non-regenerative anemia, poikilocytosis, Heinz bodies</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal US</strong> ✨:
            <ul>
              <li><strong>Hyperechoic liver</strong> (relative to falciform fat, kidney) — suggestive</li>
              <li>Hepatomegaly</li>
              <li>Rule out concurrent: pancreatitis, biliary dilation, mass, IBD changes</li>
            </ul>
          </li>
          <li>Abdominal rad: hepatomegaly</li>
        </ul>

        <p><strong>Definitive diagnosis:</strong></p>
        <ul>
          <li><strong>Liver FNA + cytology</strong> ✨ — high diagnostic yield
            <ul>
              <li>Hepatocytes with marked vacuolation (lipid)</li>
              <li>Quick, safe, low-cost</li>
              <li>Wright-Giemsa or Oil Red O stain</li>
              <li>Rule out lymphoma cytologically</li>
            </ul>
          </li>
          <li>Tru-cut biopsy — only if cytology unclear; <em>after</em> coag corrected</li>
        </ul>

        <p><strong>Workup for underlying cause (essential):</strong></p>
        <ul>
          <li>fPL — pancreatitis</li>
          <li>T4 — hyperthyroid</li>
          <li>Glucose — DM</li>
          <li>FeLV/FIV</li>
          <li>Bile acids — assess function</li>
          <li>cobalamin, folate</li>
          <li>Repeat US looking for IBD, mass, cholangitis</li>
          <li>Endoscopy/biopsy if signs persist after recovery</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Cholangitis</strong> (neutrophilic / lymphocytic) — GGT typically markedly ↑, often fever</li>
          <li>Lymphoma (hepatic / alimentary)</li>
          <li>Pancreatitis</li>
          <li>FIP (effusive)</li>
          <li>Toxoplasmosis</li>
          <li>Drug-induced hepatopathy</li>
          <li>Other primary hepatic disease</li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment philosophy: AGGRESSIVE NUTRITIONAL SUPPORT — feed the cat ✨</strong></p>
        <ul>
          <li>"Treatment is feeding" — without nutrition, mortality &gt; 90%</li>
          <li>With proper management, 60-85% survive</li>
          <li>Recovery takes 4-12 weeks</li>
        </ul>

        <p><strong>1. Stabilization (day 1-2):</strong></p>
        <ul>
          <li><strong>IV fluid therapy</strong> — Plasmalyte or LRS (avoid lactate-rich? — debated, but LRS commonly used)
            <ul>
              <li>Correct dehydration over 12-24h</li>
              <li>Avoid dextrose-containing fluids initially (worsen lipidosis)</li>
              <li>Then maintenance + ongoing losses</li>
            </ul>
          </li>
          <li><strong>Aggressive K+ supplementation</strong> ✨ — hypokalemia common, worsens with refeeding
            <ul>
              <li>20-40 mEq KCl/L IV (max 0.5 mEq/kg/hr)</li>
              <li>Monitor q12-24h</li>
            </ul>
          </li>
          <li><strong>Phosphorus supplementation</strong> ✨ — hypophosphatemia critical (causes hemolysis, weakness, RBC dysfunction)
            <ul>
              <li>K-phosphate 0.01-0.03 mmol/kg/hr if severe (&lt; 2 mg/dL)</li>
              <li>Monitor q12h initially</li>
            </ul>
          </li>
          <li>Magnesium supplementation if low</li>
          <li><strong>Vitamin K1 1-2 mg/kg SC q12h × 3 doses</strong> ✨ — correct coagulopathy before tube placement</li>
          <li>Anti-emetics: maropitant 1 mg/kg SC q24h, ondansetron 0.5-1 mg/kg IV q8-12h</li>
          <li>Treat hepatic encephalopathy if present (lactulose enema, antibiotics)</li>
        </ul>

        <p><strong>2. Feeding tube placement (mainstay) ✨</strong></p>
        <ul>
          <li><strong>Esophagostomy (E-tube)</strong> — preferred ✨
            <ul>
              <li>Place once stable + coag corrected</li>
              <li>Easy at-home use by owners</li>
              <li>Can stay weeks-months</li>
              <li>See E-tube procedure entry</li>
            </ul>
          </li>
          <li>NG tube — short-term, in-hospital only</li>
          <li>PEG tube — if longer than 6+ weeks anticipated</li>
          <li><strong>Force feeding by syringe = NOT effective</strong> ✗ — stress, food aversion, aspiration risk; tube is humane + reliable</li>
        </ul>

        <p><strong>3. Feeding protocol (gradual — avoid refeeding syndrome):</strong></p>
        <ul>
          <li>Calculate RER = 70 × (BW kg)^0.75 หรือ 30 × BW + 70 (for 2-30 kg)</li>
          <li><strong>Day 1: 25-33% RER</strong> — start small ✨</li>
          <li>Day 2: 50%</li>
          <li>Day 3+: 100% RER, then ↑ to MER as tolerated</li>
          <li>Divide into 4-6 small meals/day, slowly over 5-10 min each</li>
          <li>Flush tube with 5-10 mL warm water before + after each meal</li>
          <li><strong>Diet:</strong> high-protein, calorie-dense liquid recovery diet
            <ul>
              <li>Royal Canin Recovery Liquid</li>
              <li>Hill's a/d (blenderize + strain)</li>
              <li>Eukanuba Maximum Calorie</li>
              <li>NOT low-protein hepatic diet (unless overt HE — see below)</li>
            </ul>
          </li>
          <li>Continue tube feeding until cat eats voluntarily ≥ 75% RER × 3-5 days</li>
        </ul>

        <p><strong>4. Supplements:</strong></p>
        <ul>
          <li><strong>L-carnitine 250-500 mg/cat PO q24h</strong> ✨ — facilitates β-oxidation</li>
          <li>Taurine 250-500 mg/cat PO q24h (cat-specific essential)</li>
          <li>SAMe 200-400 mg/cat PO q24h (Denamarin) — antioxidant; on empty stomach</li>
          <li>Vitamin E 50-100 IU/cat PO q24h — antioxidant</li>
          <li><strong>Cobalamin 250 µg SC weekly × 6 wk, then monthly</strong> ✨ — almost always low</li>
          <li>Thiamine 50-100 mg/cat PO q24h × 1-2 wk (B-complex)</li>
          <li>Ursodiol 10-15 mg/kg PO q24h — choleretic; if cholestasis prominent</li>
        </ul>

        <p><strong>5. Hepatic encephalopathy (if present):</strong></p>
        <ul>
          <li>Lactulose 0.5-1 mL/kg PO q8-12h (titrate to 2-3 soft stools/day)</li>
          <li>Lactulose enema (warm water + lactulose 1:3) for severe HE</li>
          <li>Metronidazole 7.5 mg/kg PO q12h (low dose for HE — reduces ammonia-producing bacteria)</li>
          <li>Avoid high-protein diet during severe HE; once resolved → high-protein diet again (cat = obligate carnivore)</li>
          <li>Treat hypokalemia (worsens HE)</li>
        </ul>

        <p><strong>6. Monitor:</strong></p>
        <ul>
          <li>Daily: weight, BCS, eating attempts, hydration, urine output</li>
          <li>Q3-5 d: PCV, electrolytes, glucose, bilirubin, ALT, ALP</li>
          <li>Watch for refeeding syndrome (esp. K, P, Mg drop after feeding starts)</li>
          <li>Liver enzymes typically improve over 2-6 weeks</li>
          <li>Bilirubin lags — last to normalize (4-12 wk)</li>
        </ul>

        <p><strong>7. Treat underlying cause:</strong></p>
        <ul>
          <li>Pancreatitis: supportive, pain mgmt</li>
          <li>IBD: diet trial, ± steroids after lipidosis stable</li>
          <li>Cholangitis: antibiotics (amoxi-clav, fluoroquinolone) + ursodiol</li>
          <li>DM: insulin (carefully — cats with DKA + lipidosis are very sick)</li>
          <li>Stress: identify + minimize</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Refeeding syndrome</strong> ✗ — hypokalemia, hypophosphatemia, hypomagnesemia 24-72h after refeeding starts; can be fatal</li>
          <li>Hepatic encephalopathy → coma</li>
          <li>Coagulopathy → bleeding</li>
          <li>Aspiration pneumonia (tube feeding too fast, vomiting)</li>
          <li>E-tube complications (cellulitis, dislodgement, esophagitis)</li>
          <li>Pancreatitis flare</li>
          <li>Recurrent / untreated underlying disease</li>
          <li>Death from progressive liver failure</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Aggressive treatment + tube feeding: 60-85% survival</strong> ✓</li>
          <li>Untreated: &gt; 90% mortality</li>
          <li>Recovery 4-12 weeks (full normalization of bilirubin can take 12+ wk)</li>
          <li>Underlying disease successfully managed = better long-term outcome</li>
          <li>Recurrence rate: low if underlying cause addressed</li>
          <li>Negative prognostic factors: severe HE, refractory hypokalemia, age &gt; 14 yr, severe coagulopathy, untreated underlying disease</li>
        </ul>
        <div class="callout">⚠️ <strong>Owner conversation key points:</strong> "ตับแมวสะสมไขมันจากการไม่กิน 3-5 วัน ทำให้ตับทำงานผิดปกติ — รักษาได้ถ้าใส่ feeding tube + ให้อาหารทุกวันต่อเนื่อง 4-12 สัปดาห์. โดยไม่ใส่ tube มีโอกาสตายมาก. Tube feeding ที่บ้านง่ายกว่าที่คิด"</div>
      `,
    },
  },

  /* ---------- Ch 36 · Canine Chronic Hepatitis ---------- */
  {
    id: 'canine-chronic-hepatitis',
    titleEn: 'Canine Chronic Hepatitis',
    titleTh: 'ตับอักเสบเรื้อรังในหมา',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog'],
    tags: ['chronic hepatitis', 'idiopathic', 'copper hepatopathy', 'Cocker Spaniel', 'Doberman', 'Lab', 'WHWT', 'prednisone', 'SAMe', 'ursodiol'],
    aliases: ['CCH', 'idiopathic chronic hepatitis', 'ตับอักเสบเรื้อรังหมา'],
    source: 'Ch. 36 · pp. 585–600',
    sections: {
      definition: `
        <p>Chronic inflammation + necrosis of hepatocytes &gt; 4-6 wk → fibrosis → cirrhosis</p>
        <ul>
          <li>โรคตับเรื้อรังที่เจอบ่อยที่สุดในหมา</li>
          <li>มัก idiopathic; แต่ต้อง rule out copper storage disease, drugs, infectious</li>
          <li>Progressive — มัก present เมื่อ &gt; 60-70% ตับเสียหาย</li>
          <li>Female-predominant ในหลายสายพันธุ์</li>
        </ul>
      `,
      etiology: `
        <p><strong>Breed predispositions ✨:</strong></p>
        <ul>
          <li><strong>Bedlington Terrier</strong> — copper storage disease (autosomal recessive, COMMD1 gene)</li>
          <li><strong>Labrador Retriever</strong> — copper-associated hepatitis (worldwide)</li>
          <li><strong>Doberman Pinscher</strong> — copper + immune-mediated component (F &gt; M)</li>
          <li><strong>Cocker Spaniel</strong> (American + English; M &gt; F)</li>
          <li><strong>West Highland White Terrier</strong> — some copper, some not</li>
          <li>Skye Terrier (ductal plate abnormality)</li>
          <li>English Springer Spaniel (F &gt; M)</li>
          <li>Dalmatian (copper, US)</li>
          <li>Standard Poodle</li>
        </ul>
        <p><strong>Causes:</strong></p>
        <ul>
          <li><strong>Idiopathic chronic hepatitis</strong> — most common (likely immune-mediated, post-infectious, or unidentified toxin)</li>
          <li><strong>Copper storage hepatopathy</strong> — primary (genetic) or secondary (cholestasis-induced)</li>
          <li><strong>Drug/toxin-induced:</strong>
            <ul>
              <li>Phenobarbital, primidone, anticonvulsants</li>
              <li>NSAIDs (carprofen, others — idiosyncratic)</li>
              <li>Lomustine, methotrexate</li>
              <li>Sulfonamides, doxycycline (rare)</li>
              <li>Aflatoxins (moldy food)</li>
              <li>Cycad palm (sago palm)</li>
              <li>Xylitol</li>
              <li>Mushrooms (Amanita)</li>
              <li>Acetaminophen</li>
            </ul>
          </li>
          <li><strong>Infectious:</strong>
            <ul>
              <li>Leptospirosis ✨</li>
              <li>CAV-1 (rare with vaccination)</li>
              <li>Bacterial cholangiohepatitis</li>
              <li>Histoplasmosis (endemic)</li>
            </ul>
          </li>
          <li><strong>Immune-mediated</strong> — suspected but criteria not well-established</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Chronic hepatocyte injury → inflammation → fibrosis → distorted architecture → <strong>cirrhosis</strong></li>
          <li>Loss of hepatocyte mass → ↓ function</li>
          <li>Fibrosis → portal hypertension → ascites + acquired PSS</li>
          <li>Bilirubin metabolism impaired → jaundice</li>
          <li>Coagulation factor synthesis ↓</li>
          <li>Hepatic encephalopathy as end-stage</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Often <strong>insidious onset</strong> — owners report subtle changes over weeks-months</li>
          <li>Anorexia, weight loss</li>
          <li>Lethargy</li>
          <li>Vomiting, diarrhea (intermittent)</li>
          <li>PU/PD (very common in dog liver dz)</li>
          <li><strong>Jaundice</strong> — late sign</li>
          <li><strong>Ascites</strong> — portal hypertension; modified transudate</li>
          <li>Hepatic encephalopathy (advanced)</li>
          <li>Coagulopathy — petechiae, bleeding</li>
          <li>Microhepatica (advanced cirrhosis)</li>
          <li>Acute decompensation possible (transition from compensated to overt failure)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab:</strong></p>
        <ul>
          <li><strong>↑ ALT, AST</strong> ✨ — hepatocellular damage</li>
          <li>↑ ALP — variable (from cholestasis component)</li>
          <li>↑ Bilirubin — late</li>
          <li>↓ BUN, ↓ albumin, ↓ cholesterol — synthetic dysfunction</li>
          <li>↑ Bile acids (pre + post) — function impaired</li>
          <li>↑ Ammonia (HE)</li>
          <li>Prolonged PT/aPTT (severe)</li>
          <li>Mild non-regenerative anemia</li>
          <li>UA: ammonium biurate crystals (severe dysfunction / shunt)</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li>Abdominal US:
            <ul>
              <li>Variable: heterogeneous parenchyma, nodular surface, microhepatica (cirrhosis)</li>
              <li>Mass lesions (HCC, biliary)</li>
              <li>Ascites</li>
              <li>Acquired portosystemic collaterals</li>
            </ul>
          </li>
          <li>CT — better for masses, vascular abnormalities</li>
        </ul>

        <p><strong>Liver biopsy — DEFINITIVE ✨</strong></p>
        <ul>
          <li>Required for:
            <ul>
              <li>Definitive diagnosis</li>
              <li>Inflammation type / activity</li>
              <li>Fibrosis stage</li>
              <li>Copper quantification (rhodanine stain + atomic absorption)</li>
              <li>Treatment guidance</li>
            </ul>
          </li>
          <li>Methods: Tru-cut (US-guided), laparoscopic, surgical wedge biopsy</li>
          <li><strong>Coag panel + platelets BEFORE biopsy</strong> ✨</li>
          <li>Vit K1 1-2 mg/kg SC × 2-3 doses if PT prolonged</li>
          <li>Multiple cores from different lobes</li>
          <li>Bile + tissue culture</li>
          <li>WSAVA scoring system standardized</li>
        </ul>

        <p><strong>Specific etiology workup:</strong></p>
        <ul>
          <li>Lepto MAT or PCR (urine/blood)</li>
          <li>Drug history (phenobarbital, NSAIDs, recent dewormers)</li>
          <li>Hepatic copper quantification (essential for breed-predisposed)</li>
          <li>Bile culture</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Hepatic neoplasia (primary HCC, metastatic)</li>
          <li>Hepatic abscess</li>
          <li>Cholangitis</li>
          <li>Vascular anomaly (PSS, AV fistula)</li>
          <li>Reactive hepatopathy (secondary to systemic dz)</li>
          <li>Toxin / drug-induced acute hepatitis</li>
          <li>Nodular hyperplasia (benign, older dogs)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Treatment depends on etiology + biopsy findings</strong></p>

        <p><strong>1. Copper storage disease (when copper &gt; 1500 µg/g):</strong></p>
        <ul>
          <li><strong>D-Penicillamine 10-15 mg/kg PO q12h</strong> ✨ — chelator; lifelong; on empty stomach
            <ul>
              <li>Side effects: vomiting, anorexia (gradual dose escalation helps)</li>
            </ul>
          </li>
          <li>Trientine — alternative chelator (less side effects, expensive)</li>
          <li><strong>Zinc gluconate/acetate 5-10 mg/kg PO q12h</strong> — blocks copper absorption (maintenance after chelation)</li>
          <li><strong>Low-copper diet</strong> ✨ — Royal Canin Hepatic, Hill's l/d
            <ul>
              <li>Avoid liver, organ meats, shellfish, lamb, duck, salmon</li>
            </ul>
          </li>
          <li>Avoid copper-containing supplements</li>
          <li>Monitor copper biopsies q1-2 yr to assess depletion</li>
        </ul>

        <p><strong>2. Idiopathic chronic hepatitis (suspected immune-mediated):</strong></p>
        <ul>
          <li><strong>Prednisone 1-2 mg/kg PO q12h × 2-4 wk</strong>, then taper over 3-6 months to lowest effective dose
            <ul>
              <li>Use only after biopsy + ruling out infection, copper, drug</li>
              <li>Monitor for steroid hepatopathy (paradox)</li>
            </ul>
          </li>
          <li>Cyclosporine 5 mg/kg PO q12h — adjunct or steroid-sparing</li>
          <li>Azathioprine 2 mg/kg PO q24h × 2 wk, then q48h — adjunct</li>
          <li>Mycophenolate 10-20 mg/kg PO q12h</li>
        </ul>

        <p><strong>3. Hepatoprotectants (use in all chronic hepatitis):</strong></p>
        <ul>
          <li><strong>SAMe (S-adenosylmethionine) 17-20 mg/kg PO q24h</strong> ✨ — antioxidant, glutathione precursor
            <ul>
              <li>Denosyl, Denamarin (combined with silybin)</li>
              <li>Empty stomach (1h before meal)</li>
            </ul>
          </li>
          <li><strong>Silybin (milk thistle) 5-10 mg/kg PO q24h</strong> — antioxidant, anti-fibrotic</li>
          <li>Vitamin E 10-15 IU/kg PO q24h — antioxidant</li>
          <li><strong>Ursodeoxycholic acid (UDCA) 10-15 mg/kg PO q24h</strong> ✨ — choleretic, hepatoprotective; especially for cholestatic disease</li>
          <li>N-acetylcysteine — used in acute toxic hepatitis (acetaminophen, mushroom)</li>
        </ul>

        <p><strong>4. Manage complications:</strong></p>
        <ul>
          <li><strong>Ascites:</strong>
            <ul>
              <li>Spironolactone 1-2 mg/kg PO q12h — first-line</li>
              <li>± Furosemide 1-2 mg/kg PO q12h (combined ratio 100:40 spironolactone:furosemide)</li>
              <li>Sodium-restricted diet</li>
              <li>Therapeutic abdominocentesis if respiratory compromise</li>
              <li>Avoid aggressive diuresis (electrolyte imbalance, ↓ effective volume)</li>
            </ul>
          </li>
          <li><strong>Hepatic encephalopathy:</strong>
            <ul>
              <li>Lactulose 0.5-1 mL/kg PO q8-12h titrated to 2-3 soft stools/day</li>
              <li>Lactulose enema (warm water + lactulose 1:3) for acute HE</li>
              <li>Metronidazole 7.5 mg/kg PO q12h (low dose) — reduce gut bacteria</li>
              <li>Or amoxicillin / neomycin</li>
              <li>Restricted-protein hepatic diet (in severe HE)</li>
            </ul>
          </li>
          <li><strong>Coagulopathy:</strong>
            <ul>
              <li>Vitamin K1 1-2 mg/kg SC × 2-3 doses if PT prolonged</li>
              <li>FFP if active bleeding or pre-procedure</li>
            </ul>
          </li>
          <li><strong>GI ulceration</strong> (portal hypertension): omeprazole 1 mg/kg PO q24h, sucralfate</li>
        </ul>

        <p><strong>5. Diet:</strong></p>
        <ul>
          <li>Highly digestible, moderate-protein (unless severe HE)</li>
          <li>Royal Canin Hepatic, Hill's l/d (low copper, balanced)</li>
          <li>Avoid high-fat treats (cholestasis aggravation)</li>
          <li>Multiple small meals</li>
          <li>Adequate calories — cachexia worsens prognosis</li>
        </ul>

        <p><strong>6. Address underlying cause:</strong></p>
        <ul>
          <li>Lepto: doxycycline 5 mg/kg PO q12h × 2 wk</li>
          <li>Drug discontinuation</li>
          <li>Treat concurrent infection</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Recheck CBC, biochem (incl. ALT, ALP, bili, alb), bile acids q1-3 mo</li>
          <li>Body weight, BCS</li>
          <li>Repeat biopsy if disease progression / treatment response unclear</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Cirrhosis</strong> — end-stage</li>
          <li><strong>Hepatic encephalopathy</strong></li>
          <li>Coagulopathy</li>
          <li>Ascites</li>
          <li>GI ulceration</li>
          <li>Acquired portosystemic shunt</li>
          <li>HCC (chronic hepatitis = ↑ risk over years)</li>
          <li>Sepsis (impaired immune function)</li>
          <li>Drug side effects (steroid, chelators)</li>
          <li>Death from hepatic failure</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Idiopathic: variable; MST 1-3 years post-diagnosis (but highly individual)</li>
          <li>Copper storage with early treatment: <strong>good</strong> — many normal lifespans</li>
          <li>Bedlington with diagnosis + treatment: excellent</li>
          <li>Doberman: poorer than other breeds (more aggressive)</li>
          <li>Cirrhosis with ascites: median survival 1-12 months</li>
          <li>Drug-induced (recognized + discontinued): can be excellent</li>
          <li>Lepto: good with prompt antibiotic + supportive care</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 36 · Portosystemic Shunt (PSS) ---------- */
  {
    id: 'portosystemic-shunt',
    titleEn: 'Portosystemic Shunt (PSS)',
    titleTh: 'ทางลัดเลือดข้ามตับ',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['PSS', 'portosystemic shunt', 'hepatic encephalopathy', 'extrahepatic', 'intrahepatic', 'Yorkie', 'Maltese', 'ammonium biurate', 'lactulose'],
    aliases: ['liver shunt', 'PSS', 'portovascular anomaly', 'PSVA', 'หลอดเลือดลัดข้ามตับ'],
    source: 'Ch. 36 · pp. 600–608',
    sections: {
      definition: `
        <p>Vascular anomaly ที่ทำให้เลือดจาก <strong>portal vein bypass ตับ</strong> → ตรงเข้า systemic circulation</p>
        <ul>
          <li>ตับไม่ได้ detoxify → ammonia, GI toxins, gut hormones สู่ systemic → <strong>hepatic encephalopathy</strong></li>
          <li>Liver hypoplasia/atrophy from lack of trophic factors</li>
          <li>2 types: <strong>congenital</strong> (single shunt, common) vs <strong>acquired</strong> (multiple, secondary to portal hypertension)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Congenital PSS:</strong></p>
        <ul>
          <li><strong>Extrahepatic (single shunt) — small breeds ✨</strong>:
            <ul>
              <li>Yorkshire Terrier (most common!)</li>
              <li>Maltese, Mini Schnauzer, Tibetan Spaniel</li>
              <li>Pug, Cairn Terrier, Shih Tzu</li>
              <li>Persian + Himalayan cat</li>
              <li>Most are portoazygos or portocaval</li>
              <li>Diagnosed young (3-12 months typically)</li>
            </ul>
          </li>
          <li><strong>Intrahepatic (single shunt) — large breeds ✨</strong>:
            <ul>
              <li>Irish Wolfhound, Lab, Golden Retriever, Aussie Shepherd, Border Collie</li>
              <li>Persistent ductus venosus (left, right, central divisional)</li>
              <li>Surgically more challenging</li>
            </ul>
          </li>
        </ul>
        <p><strong>Acquired PSS:</strong></p>
        <ul>
          <li>Multiple shunts (collaterals)</li>
          <li>Secondary to chronic portal hypertension (cirrhosis, end-stage hepatitis)</li>
          <li>Different management — treat underlying disease, NOT shunts directly</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Portal blood (with ammonia, GABA, mercaptans, fatty acids, gut hormones) bypasses liver</li>
          <li>Toxins reach brain → HE</li>
          <li>Liver doesn't receive portal trophic factors → hypoplasia, ↓ function</li>
          <li>Loss of hepatic detoxification of bile acids, drugs</li>
          <li>Hyperammonemia from gut bacterial protein metabolism</li>
          <li>Ammonium biurate uroliths (urate not converted to allantoin → precipitates with ammonium)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Failure to thrive / runt of litter</strong> ✨ — small for breed</li>
          <li><strong>Hepatic encephalopathy</strong> ✨ — episodic, especially after meals (postprandial)
            <ul>
              <li>Mild: lethargy, depression, mild ataxia, head-pressing</li>
              <li>Moderate: drooling (cat especially), intermittent blindness, behavior change, circling, pacing</li>
              <li>Severe: stupor, seizures, coma ✗</li>
              <li>Worse with high-protein meal, GI bleed, dehydration, infection</li>
            </ul>
          </li>
          <li>Ptyalism / drooling ✨ (especially cats with PSS)</li>
          <li>PU/PD (urea cycle defect)</li>
          <li>Vomiting, anorexia</li>
          <li>Diarrhea</li>
          <li>Polyphagia or hyporexia (variable)</li>
          <li>Weight loss / poor body condition</li>
          <li>Urinary signs from <strong>ammonium biurate uroliths</strong> ✨ (stranguria, hematuria, obstruction)</li>
          <li>Copper-colored irises (cats with PSS) ✨</li>
          <li>Slow recovery from anesthesia</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab findings (classic):</strong></p>
        <ul>
          <li><strong>↓ BUN</strong> ✨ — urea cycle defect</li>
          <li><strong>↓ Albumin</strong> ✨ — synthesis</li>
          <li><strong>↓ Cholesterol</strong> ✨</li>
          <li>↓ Glucose (especially small breeds, fasting)</li>
          <li>↑ ALT, ALP — mild-moderate</li>
          <li>Mild non-regenerative anemia, microcytosis (iron metabolism — RBC mean MCV ↓)</li>
          <li><strong>Bile acids ↑↑</strong> ✨ — both pre + post-prandial elevated; sensitive screen</li>
          <li><strong>Ammonia ↑</strong> ✨ — diagnostic</li>
          <li>UA: <strong>ammonium biurate crystals</strong> (yellow-brown, "thorn apple" shape) ✨</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li>Abdominal US:
            <ul>
              <li>Microhepatica (small liver)</li>
              <li>Visualize shunt vessel (extrahepatic easier; experienced operator)</li>
              <li>Renal mineralization, urolith</li>
              <li>Hypoplastic portal vessels in liver</li>
            </ul>
          </li>
          <li><strong>CT angiography</strong> ✨ — gold standard for definitive diagnosis + surgical planning
            <ul>
              <li>Locate shunt(s) precisely</li>
              <li>Differentiate congenital from acquired</li>
              <li>Plan surgical/interventional approach</li>
            </ul>
          </li>
          <li>Per-rectal scintigraphy (Tc-99m pertechnetate) — detect shunting (referral)</li>
          <li>Mesenteric portography — historical, replaced by CT</li>
        </ul>

        <p><strong>Definitive:</strong> imaging confirms shunt anatomy</p>
        <p><strong>Liver biopsy</strong> — usually shows hepatic atrophy / hypoplasia + portal vein hypoplasia</p>
      `,
      differential: `
        <ul>
          <li>Microvascular dysplasia (MVD) — similar bile acids ↑ but no anatomic shunt; treated medically only</li>
          <li>Severe chronic hepatitis with acquired collaterals</li>
          <li>Other causes of HE (urea cycle defects, severe sepsis)</li>
          <li>Hypoglycemia (other cause)</li>
          <li>Other causes of FTT</li>
          <li>Toxic hepatitis</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Medical stabilization (always first, even if surgery planned):</strong></p>
        <ul>
          <li><strong>Lactulose 0.5-1 mL/kg PO q8-12h</strong> ✨ — titrate to 2-3 soft stools/day
            <ul>
              <li>Acidifies colon → traps NH3 as NH4+</li>
              <li>Cathartic effect → faster bowel transit</li>
            </ul>
          </li>
          <li><strong>Antibiotics:</strong>
            <ul>
              <li>Metronidazole 7.5 mg/kg PO q12h ✨ (low dose for HE)</li>
              <li>Or amoxicillin 22 mg/kg PO q12h</li>
              <li>Or neomycin (poorly absorbed) — reduce ammonia-producing bacteria</li>
            </ul>
          </li>
          <li><strong>Hepatic diet</strong> ✨:
            <ul>
              <li>Royal Canin Hepatic, Hill's l/d</li>
              <li>Moderately restricted, high-quality protein (vegetable + dairy preferred over meat for less aromatic AA)</li>
              <li>Multiple small meals (4-6/day)</li>
            </ul>
          </li>
          <li>Acute HE crisis:
            <ul>
              <li>Lactulose enema (1:3 with warm water, 5-10 mL/kg, retention) ✨ — fast acting</li>
              <li>IV fluids + dextrose if hypoglycemic</li>
              <li>K supplementation</li>
              <li>Manage seizures (levetiracetam preferred; avoid diazepam — hepatic metabolism)</li>
              <li>Treat concurrent GI bleed (omeprazole)</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Definitive treatment — Surgical shunt attenuation ✨</strong></p>
        <ul>
          <li><strong>Indication:</strong> congenital single shunt (extra- or intra-hepatic)</li>
          <li><strong>Methods:</strong>
            <ul>
              <li><strong>Ameroid constrictor</strong> ✨ — slow occlusion over 4-6 weeks; preferred for extrahepatic; better outcomes than acute ligation</li>
              <li>Cellophane banding — alternative; gradual fibrosis</li>
              <li>Acute ligation — historical; risk portal hypertension</li>
              <li><strong>Percutaneous transvenous coil embolization</strong> — for intrahepatic shunts (interventional radiology, referral)</li>
            </ul>
          </li>
          <li>Pre-op stabilization 4-8 weeks medical mgmt before surgery</li>
          <li>Outcome:
            <ul>
              <li>Extrahepatic: <strong>excellent — 80-95% normal long-term</strong></li>
              <li>Intrahepatic: more challenging; 70-85% improve</li>
            </ul>
          </li>
          <li>Post-op: continue medical mgmt × weeks-months; gradual diet transition</li>
        </ul>

        <p><strong>3. Medical management only (if surgery declined / not feasible):</strong></p>
        <ul>
          <li>Lifelong lactulose + diet + intermittent antibiotics</li>
          <li>Survival: variable — 1-5 years; quality of life can be reasonable but inferior to surgical correction</li>
        </ul>

        <p><strong>4. Acquired PSS (multiple):</strong></p>
        <ul>
          <li><strong>Do NOT attempt surgical correction</strong> ✗ — needed for portal decompression</li>
          <li>Treat underlying liver disease</li>
          <li>Medical management of HE + ascites</li>
          <li>Prognosis depends on underlying disease (often guarded)</li>
        </ul>

        <p><strong>5. Anesthetic considerations:</strong></p>
        <ul>
          <li>Avoid drugs heavily metabolized by liver: diazepam, methoxyflurane</li>
          <li>Use: propofol (rapid clearance), isoflurane/sevoflurane, fentanyl</li>
          <li>Levetiracetam for pre-op seizure prophylaxis (if HE history)</li>
          <li>Slow recovery expected</li>
        </ul>

        <p><strong>Monitoring after surgery:</strong></p>
        <ul>
          <li>Recheck bile acids 6-8 wk post-op (most normalize at 8-12 wk)</li>
          <li>Repeat US — assess shunt closure</li>
          <li>If signs persist → check for persistent shunting / development of acquired shunts</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe HE / coma ✗</li>
          <li>Seizures (peri-operative — common with sudden shunt occlusion)</li>
          <li>Portal hypertension post-attenuation — aggressive over-rapid closure</li>
          <li>Persistent shunting after surgery (some shunts not fully closed)</li>
          <li>Recurrent HE</li>
          <li>Ammonium biurate uroliths (urinary obstruction)</li>
          <li>Slow anesthetic recovery</li>
          <li>Hypoglycemia in small breeds</li>
          <li>Failure to thrive</li>
          <li>Acute decompensation with stress, GI bleed, infection</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Surgical correction (extrahepatic): excellent</strong> ✓ — 80-95% normal lives</li>
          <li>Intrahepatic surgical: 70-85% improve</li>
          <li>Medical management only: 50-70% acceptable QOL × 1-5 yr</li>
          <li>Acquired PSS: guarded — depends on underlying liver dz</li>
          <li>Severe HE at presentation: more guarded</li>
        </ul>
        <div class="callout">💡 <strong>Yorkie + drooling + post-meal lethargy + small size = think PSS</strong> ✨ — bile acids + ammonia confirm; CT angio for surgery planning. Surgery = best chance for normal life</div>
      `,
    },
  },

  /* ---------- Ch 35 · Feline Cholangitis ---------- */
  {
    id: 'feline-cholangitis',
    titleEn: 'Feline Cholangitis (Neutrophilic / Lymphocytic)',
    titleTh: 'ทางเดินน้ำดีอักเสบในแมว',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['cat'],
    tags: ['cholangitis', 'cholangiohepatitis', 'neutrophilic', 'lymphocytic', 'triaditis', 'amoxicillin clavulanate', 'ursodiol', 'liver fluke'],
    aliases: ['cholangiohepatitis', 'cholangitis cat', 'แมวตับน้ำดีอักเสบ'],
    source: 'Ch. 35 · pp. 578–582',
    sections: {
      definition: `
        <p>การอักเสบของ <strong>biliary tract</strong> ในแมว — มัก extend ไปยัง surrounding hepatic parenchyma (cholangiohepatitis)</p>
        <ul>
          <li>เจอบ่อยที่ 2 ของโรคตับในแมว (รองจาก hepatic lipidosis)</li>
          <li>3 main types: <strong>neutrophilic, lymphocytic, sclerosing/chronic</strong></li>
          <li><strong>"Triaditis"</strong> ✨ — concurrent cholangitis + pancreatitis + IBD ในแมว ~ 50-80%</li>
        </ul>
      `,
      etiology: `
        <p><strong>Neutrophilic cholangitis (acute):</strong></p>
        <ul>
          <li>Ascending bacterial infection จาก GI tract via biliary tree</li>
          <li>Common organisms: <em>E. coli</em>, Streptococcus, Enterococcus, Clostridium, anaerobes</li>
          <li>Younger to middle-aged cats</li>
          <li>Mostly acute presentation</li>
        </ul>
        <p><strong>Lymphocytic cholangitis (chronic):</strong></p>
        <ul>
          <li><strong>Immune-mediated</strong> — chronic infiltrate with lymphocytes ± plasma cells</li>
          <li>Persians may be over-represented</li>
          <li>Some cases may be chronic post-neutrophilic transition</li>
          <li>Concurrent IBD common</li>
          <li>Middle-aged to older cats</li>
        </ul>
        <p><strong>Sclerosing cholangitis (end-stage):</strong></p>
        <ul>
          <li>Biliary cirrhosis</li>
          <li>Mostly post-liver fluke (Platynosomum) in endemic areas (Thailand, tropical regions ✨)</li>
          <li>Severe end-stage — fibrotic biliary tree</li>
        </ul>
        <p><strong>Liver flukes (Platynosomum fastosum):</strong></p>
        <ul>
          <li>Endemic in tropical regions including Thailand ✨</li>
          <li>Cat ingests intermediate host (lizards, geckos)</li>
          <li>Cause sclerosing cholangitis, eosinophilic infiltrate</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Bile ducts inflamed → cholestasis → bilirubin retention</li>
          <li>Bacteria can reach via ascending route (intestinal) or hematogenous</li>
          <li>Inflammation extends to peri-portal hepatic parenchyma → cholangiohepatitis</li>
          <li>Chronic → fibrosis → cirrhosis → portal hypertension → ascites, acquired PSS</li>
          <li>Concurrent pancreatitis common (anatomic — common bile duct + pancreatic duct enter together at major duodenal papilla in cat)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Neutrophilic (acute):</strong></p>
        <ul>
          <li>Acute illness &lt; 1 month duration</li>
          <li><strong>Fever</strong> ✨ — typical (vs lipidosis usually afebrile)</li>
          <li>Lethargy, depression</li>
          <li>Anorexia (→ may develop concurrent lipidosis ✗)</li>
          <li>Vomiting</li>
          <li><strong>Jaundice</strong></li>
          <li>Abdominal pain (severe — palpate carefully)</li>
          <li>Sometimes acute abdomen presentation</li>
          <li>Dehydration</li>
        </ul>
        <p><strong>Lymphocytic (chronic):</strong></p>
        <ul>
          <li>Insidious — weeks to months</li>
          <li>Variable signs: anorexia (intermittent), weight loss</li>
          <li>Vomiting, diarrhea (concurrent IBD)</li>
          <li>Mild jaundice (variable)</li>
          <li>Hepatomegaly</li>
          <li>Polyphagia in some (vs anorexia in neutrophilic)</li>
          <li>Ascites (advanced)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab findings:</strong></p>
        <ul>
          <li><strong>↑ ALT, AST, ALP</strong> — variable; less marked in lymphocytic</li>
          <li><strong>↑ GGT</strong> ✨ — typically marked (KEY differentiator from lipidosis where GGT often normal-mild)</li>
          <li>↑ Bilirubin (variable — neutrophilic often higher)</li>
          <li>Bilirubinuria</li>
          <li>↑ Bile acids</li>
          <li>Neutrophilia (neutrophilic form)</li>
          <li>Lymphocytosis (lymphocytic form)</li>
          <li>± Hyperglobulinemia (chronic)</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal US</strong> ✨:
            <ul>
              <li>Thickened gallbladder wall (&gt; 1 mm cat)</li>
              <li>Sludgy or echogenic bile</li>
              <li>Dilated common bile duct (&gt; 4 mm cat = abnormal; &gt; 5 mm with EHBO)</li>
              <li>Hepatomegaly variable</li>
              <li>Concurrent: pancreatitis (enlarged hyperechoic pancreas), IBD (thickened intestinal wall)</li>
              <li>Liver flukes — may see flukes in bile ducts (rare to visualize directly)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Definitive — Liver biopsy + bile sample ✨</strong></p>
        <ul>
          <li>FNA / Tru-cut biopsy (US-guided after coag check)</li>
          <li>Surgical / laparoscopic biopsy preferred for triaditis evaluation (multi-organ sampling)</li>
          <li>Bile aspiration (cholecystocentesis) under US guidance:
            <ul>
              <li>Cytology + aerobic + anaerobic culture</li>
              <li>Best for confirming neutrophilic + identifying organism</li>
            </ul>
          </li>
          <li>Histopath:
            <ul>
              <li>Neutrophilic: neutrophilic infiltrate in/around bile ducts ± hepatocyte necrosis</li>
              <li>Lymphocytic: dense lymphoplasmacytic infiltrate, ± fibrosis</li>
              <li>Sclerosing: extensive fibrosis around bile ducts</li>
              <li>Liver flukes: eosinophilic + lymphoplasmacytic; flukes/eggs visible</li>
            </ul>
          </li>
        </ul>

        <p><strong>Concurrent disease workup:</strong></p>
        <ul>
          <li>fPL — pancreatitis (high concurrence)</li>
          <li>Endoscopy + intestinal biopsy — IBD</li>
          <li>Cobalamin, folate</li>
          <li>FeLV/FIV</li>
          <li>T4</li>
          <li>Fecal exam — flukes (Platynosomum eggs visible occasionally; sedimentation technique better than flotation)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Hepatic lipidosis (GGT KEY differentiator ✨)</li>
          <li>Hepatic / biliary lymphoma</li>
          <li>Pancreatitis with reactive hepatopathy</li>
          <li>Toxoplasmosis</li>
          <li>FIP</li>
          <li>Drug-induced hepatitis</li>
          <li>Liver flukes (Platynosomum)</li>
          <li>Biliary obstruction (mass, stone)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Neutrophilic cholangitis:</strong></p>
        <ul>
          <li><strong>Antibiotics — based on culture if available, otherwise broad-spectrum ✨</strong>
            <ul>
              <li>Initial empirical IV: ampicillin 22 mg/kg IV q6-8h + enrofloxacin 5 mg/kg IV q24h (or marbofloxacin)</li>
              <li>Or amoxicillin-clavulanate IV</li>
              <li>Add metronidazole 7.5-10 mg/kg PO q12h for anaerobes</li>
              <li>Switch to PO when stable: amoxicillin-clavulanate 12.5 mg/kg PO q12h × 4-6 wk</li>
              <li>Total duration: 4-8 weeks minimum</li>
            </ul>
          </li>
          <li><strong>IV fluids</strong> — correct dehydration, support liver</li>
          <li><strong>Anti-emetics</strong> — maropitant, ondansetron</li>
          <li><strong>Pain management</strong> — buprenorphine (avoid NSAIDs)</li>
          <li><strong>Nutritional support</strong> — esophagostomy tube ถ้า anorexic &gt; 3-5 d ✨ — prevent lipidosis</li>
          <li>Vitamin K1 1-2 mg/kg SC × 2-3 doses if cholestatic</li>
        </ul>

        <p><strong>Lymphocytic cholangitis:</strong></p>
        <ul>
          <li><strong>Immunosuppression:</strong>
            <ul>
              <li>Prednisolone 1-2 mg/kg PO q12h × 2-4 wk, then taper over 2-4 months to lowest effective dose</li>
              <li>Long-term low-dose maintenance often required</li>
            </ul>
          </li>
          <li>Refractory: chlorambucil 2 mg/cat PO q48h or cyclosporine 5 mg/kg PO q12h</li>
          <li>Consider concurrent IBD treatment (combined approach)</li>
          <li>Ursodiol throughout</li>
        </ul>

        <p><strong>Hepatoprotectants (both forms):</strong></p>
        <ul>
          <li><strong>Ursodeoxycholic acid (UDCA) 10-15 mg/kg PO q24h</strong> ✨ — choleretic, hepatoprotective; cornerstone</li>
          <li>SAMe 200-400 mg/cat PO q24h (Denamarin) — antioxidant; empty stomach</li>
          <li>Vitamin E 30-100 IU/cat PO q24h</li>
          <li>Silybin (in Denamarin combo)</li>
        </ul>

        <p><strong>Liver flukes (endemic Thailand!):</strong></p>
        <ul>
          <li><strong>Praziquantel 20 mg/kg PO/SC × 3 days</strong> ✨ — primary treatment
            <ul>
              <li>Or 40 mg/kg single dose</li>
              <li>Repeat in 4-6 weeks</li>
            </ul>
          </li>
          <li>Or fenbendazole 50 mg/kg PO q24h × 5-10 days</li>
          <li>Supportive: ursodiol, hepatoprotectants</li>
          <li>Prevention: prevent hunting (lizards, geckos)</li>
          <li>Surveillance fecal sedimentation in endemic areas</li>
        </ul>

        <p><strong>Triaditis (concurrent pancreatitis + IBD):</strong></p>
        <ul>
          <li>Treat all 3 components simultaneously</li>
          <li>Cobalamin supplementation (essential)</li>
          <li>Pain management</li>
          <li>Prednisolone for IBD + lymphocytic cholangitis</li>
          <li>Antibiotics for neutrophilic component</li>
          <li>Pancreatitis: supportive, hydration, anti-emetic, pain</li>
        </ul>

        <p><strong>Cholecystectomy — selected cases:</strong></p>
        <ul>
          <li>Refractory infection</li>
          <li>Mucocele in cats (rare vs dog)</li>
          <li>Choleliths obstructing</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Concurrent hepatic lipidosis</strong> ✗ (anorexic cat)</li>
          <li>Sepsis from cholangitis (acute neutrophilic)</li>
          <li>Bile peritonitis (rupture, post-cholecystocentesis)</li>
          <li>Biliary obstruction</li>
          <li>Cirrhosis / sclerosing cholangitis (chronic)</li>
          <li>Portal hypertension, ascites</li>
          <li>Drug side effects (steroid, chlorambucil)</li>
          <li>Triaditis flares</li>
          <li>Recurrent infection</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Neutrophilic with prompt antibiotic + supportive care: good</strong> — most recover ✓</li>
          <li>Lymphocytic: variable; often manageable long-term, may relapse</li>
          <li>Sclerosing / liver fluke advanced: guarded</li>
          <li>Triaditis: more challenging — depends on overall management</li>
          <li>Severe at presentation (jaundice, coagulopathy, lipidosis): more guarded</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 36 · Gallbladder Mucocele ---------- */
  {
    id: 'gallbladder-mucocele',
    titleEn: 'Gallbladder Mucocele (Canine)',
    titleTh: 'GB Mucocele — ถุงน้ำดีตัน',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog'],
    tags: ['gallbladder mucocele', 'GBM', 'kiwi sign', 'cholecystectomy', 'Sheltie', 'Cocker Spaniel', 'hyperlipidemia', 'endocrinopathy'],
    aliases: ['GB mucocele', 'biliary mucocele', 'GBM', 'ถุงน้ำดีอุดตัน'],
    source: 'Ch. 36 · pp. 614–617',
    sections: {
      definition: `
        <p>การสะสมของ <strong>thick mucinous bile</strong> ใน gallbladder จนขยายและอุดตัน → ↑ pressure → wall ischemia → necrosis/rupture</p>
        <ul>
          <li>เจอบ่อยขึ้นในช่วงหลัง — recognition + US ดีขึ้น</li>
          <li>Older dogs (mean ~ 9 yr)</li>
          <li>Predisposed: <strong>Sheltie ✨, Cocker Spaniel, Mini Schnauzer, Border Terrier, Pomeranian</strong></li>
        </ul>
      `,
      etiology: `
        <p><strong>Risk factors:</strong></p>
        <ul>
          <li><strong>Endocrinopathies</strong> ✨:
            <ul>
              <li>Hyperadrenocorticism (Cushing's)</li>
              <li>Hypothyroidism</li>
            </ul>
          </li>
          <li><strong>Hyperlipidemia</strong> (Sheltie, Mini Schnauzer)</li>
          <li>Cholestasis (other causes)</li>
          <li>Genetic predisposition (Sheltie — ABCB4 mutation in some)</li>
          <li>Chronic gallbladder dysmotility</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Mucus hypersecretion + altered motility → bile becomes thick mucinous</li>
          <li>Progressive distension → wall thinning, ischemia</li>
          <li>"Stellate" or "kiwi-fruit" appearance on US ✨</li>
          <li>Severe → wall necrosis → <strong>rupture → bile peritonitis</strong> ✗</li>
          <li>± Concurrent biliary obstruction</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Clinically silent (incidental US finding):</strong></p>
        <ul>
          <li>~ 30-50% diagnosed incidentally — may have no signs</li>
        </ul>
        <p><strong>Clinically affected:</strong></p>
        <ul>
          <li>Vomiting (most common)</li>
          <li>Anorexia, lethargy</li>
          <li>± Diarrhea</li>
          <li>Abdominal pain (cranial)</li>
          <li>Jaundice (with obstruction or rupture)</li>
          <li>PU/PD</li>
          <li>Weight loss (chronic)</li>
        </ul>
        <p><strong>Acute / Ruptured:</strong></p>
        <ul>
          <li>Severe abdominal pain</li>
          <li>Septic shock signs ✗</li>
          <li>Fever or hypothermia</li>
          <li>Collapse</li>
          <li>Tachycardia, weak pulses</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Abdominal US — diagnostic ✨:</strong></p>
        <ul>
          <li><strong>"Stellate" or "kiwi-fruit" pattern</strong> ✨ — striated, immobile, gravity-dependent bile</li>
          <li>GB wall thickness ↑</li>
          <li>± Surrounding hyperechoic mesentery (peritonitis if ruptured)</li>
          <li>± Free abdominal fluid (rupture)</li>
          <li>± Common bile duct dilation (concurrent obstruction)</li>
          <li>Grading (Type 1-5 by progression)</li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>↑ ALP, ALT, GGT (variable)</li>
          <li>↑ Bilirubin (with obstruction or rupture)</li>
          <li>CBC: leukocytosis ± left shift (severe / septic)</li>
          <li>Lipid panel — hyperlipidemia screen</li>
          <li>Endocrine workup: ACTH stim, T4 (Cushing's, hypothyroid)</li>
        </ul>
        <p><strong>If rupture suspected:</strong></p>
        <ul>
          <li>Abdominocentesis — bilirubin in fluid &gt; 2× serum = bile peritonitis</li>
          <li>Aerobic + anaerobic culture of abdominal fluid</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Cholelithiasis</li>
          <li>Cholecystitis</li>
          <li>Biliary obstruction (mass, stone)</li>
          <li>Pancreatitis</li>
          <li>Hepatic mass</li>
          <li>Other causes of cholestasis</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Surgical management — Cholecystectomy ✨</strong></p>
        <ul>
          <li><strong>Indications for surgery:</strong>
            <ul>
              <li>Clinical signs (vomiting, pain, jaundice)</li>
              <li>Wall necrosis on US</li>
              <li>Suspected/confirmed rupture (emergency!) ✗</li>
              <li>Biliary obstruction</li>
              <li>Progression on serial US</li>
              <li>Severe distension (Grade 4-5)</li>
            </ul>
          </li>
          <li>Laparotomy or laparoscopic</li>
          <li>Common bile duct flush — confirm patency</li>
          <li>Submit GB for histopath + culture</li>
          <li>Mortality: elective surgery ~ 2-10%; rupture/peritonitis 20-40%</li>
        </ul>

        <p><strong>2. Medical management — for asymptomatic / not surgical candidates:</strong></p>
        <ul>
          <li><strong>Ursodeoxycholic acid (UDCA) 10-15 mg/kg PO q24h</strong> ✨ — choleretic, anti-inflammatory; may slow progression</li>
          <li>Low-fat diet — Royal Canin Hepatic, Hill's i/d Low Fat</li>
          <li>Treat underlying endocrinopathy:
            <ul>
              <li>Cushing's — trilostane</li>
              <li>Hypothyroid — levothyroxine</li>
              <li>Hyperlipidemia — diet, omega-3</li>
            </ul>
          </li>
          <li>SAMe — antioxidant</li>
          <li>Serial US q3-6 months — monitor progression</li>
          <li>Surgery if progression / clinical signs develop</li>
        </ul>

        <p><strong>3. Ruptured GB / Bile peritonitis (emergency):</strong></p>
        <ul>
          <li>Stabilize: IV fluids, antibiotics (broad-spectrum), pain mgmt</li>
          <li>Emergency surgical exploration + cholecystectomy + extensive abdominal lavage</li>
          <li>Closed-suction drain</li>
          <li>Aggressive post-op ICU care</li>
          <li>Monitor for sepsis, AKI, ARDS</li>
        </ul>

        <p><strong>Post-operative care:</strong></p>
        <ul>
          <li>Antibiotics (amoxi-clav) × 2-4 wk</li>
          <li>UDCA × 4-8 wk post-op</li>
          <li>Treat underlying conditions</li>
          <li>Recheck biochem 2 wk + 1 mo post-op</li>
          <li>Most dogs do well long-term</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>GB rupture → bile peritonitis</strong> ✗ — life-threatening</li>
          <li>Biliary obstruction</li>
          <li>Sepsis</li>
          <li>Concurrent pancreatitis (CBD flush)</li>
          <li>Surgical complications: dehiscence, biliary leak, bleeding</li>
          <li>Recurrence — rare after cholecystectomy</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Elective cholecystectomy: excellent</strong> — &gt; 90% long-term success ✓</li>
          <li>Ruptured / peritonitis: guarded — 60-80% survival</li>
          <li>Asymptomatic with medical management: variable; serial monitoring essential</li>
          <li>Underlying endocrinopathy controlled: better outcome</li>
        </ul>
        <div class="callout">💡 <strong>Sheltie / Cocker / older dog with elevated ALP + vomiting → US for GB mucocele</strong> ✨ — classic kiwi-fruit pattern. Surgery before rupture = excellent outcome. After rupture = much higher mortality. Don't delay!</div>
      `,
    },
  },

  /* ---------- Ch 36 · Extrahepatic Biliary Obstruction ---------- */
  {
    id: 'biliary-obstruction',
    titleEn: 'Extrahepatic Biliary Obstruction (EHBO)',
    titleTh: 'อุดตันท่อน้ำดีนอกตับ',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['EHBO', 'biliary obstruction', 'choledocholithiasis', 'pancreatitis', 'tumor', 'jaundice', 'cholecystectomy', 'biliary stenting'],
    aliases: ['EHBO', 'biliary obstruction', 'common bile duct obstruction', 'CBD obstruction', 'อุดตันท่อน้ำดี'],
    source: 'Ch. 36 · pp. 617–620',
    sections: {
      definition: `
        <p>การอุดตันของ <strong>extrahepatic biliary tract</strong> (common bile duct, common hepatic duct, cystic duct) — partial หรือ complete</p>
        <ul>
          <li>Surgical emergency เมื่อ severe / acute</li>
          <li>Causes: pancreatitis (most common cause in dog/cat ✨), neoplasia, choleliths, mucocele, foreign body</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common causes:</strong></p>
        <ul>
          <li><strong>Pancreatitis</strong> ✨ — most common; pancreatic edema/inflammation compresses CBD as it traverses pancreas
            <ul>
              <li>Often resolves with pancreatitis treatment</li>
              <li>Cat: more likely to develop chronic biliary disease post-pancreatitis</li>
            </ul>
          </li>
          <li><strong>Neoplasia:</strong>
            <ul>
              <li>Pancreatic adenocarcinoma</li>
              <li>Hepatic / biliary carcinoma</li>
              <li>Lymphoma (cat)</li>
              <li>Duodenal mass</li>
            </ul>
          </li>
          <li><strong>GB mucocele</strong> — extension into CBD</li>
          <li><strong>Choledocholithiasis</strong> — bile stones (less common in pets vs humans)</li>
          <li><strong>Foreign body / parasites:</strong>
            <ul>
              <li>Liver flukes (Platynosomum) — endemic Thailand ✨</li>
            </ul>
          </li>
          <li>Stricture (post-trauma, post-surgical)</li>
          <li>Pancreatic abscess / pseudocyst</li>
          <li>Duodenal mass</li>
          <li>Lymphadenopathy (sublumbar)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Obstruction → bile backflow → ↑ pressure in biliary tree</li>
          <li>Hepatocyte damage from retained bile salts</li>
          <li>Bilirubin regurgitation → conjugated hyperbilirubinemia</li>
          <li>Acholic stool (no bilirubin reaching intestine)</li>
          <li>Vitamin K malabsorption (no bile for fat absorption) → coagulopathy</li>
          <li>Severe / chronic → secondary biliary cirrhosis</li>
          <li>Bacterial overgrowth in stagnant bile → cholangitis, sepsis</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Jaundice</strong> ✨ — typically progressive, marked</li>
          <li>Anorexia, lethargy</li>
          <li>Vomiting (especially with concurrent pancreatitis)</li>
          <li>Abdominal pain (cranial)</li>
          <li><strong>Acholic (pale grey-tan) stool</strong> ✨ — pathognomonic of complete obstruction</li>
          <li>Bilirubinuria (orange-brown urine)</li>
          <li>PU/PD</li>
          <li>Weight loss (chronic)</li>
          <li>Coagulopathy — bleeding, petechiae (severe / chronic)</li>
          <li>Pruritus (rare in pets, common in humans)</li>
          <li>Sepsis signs (concurrent cholangitis) — fever, depression ✗</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab:</strong></p>
        <ul>
          <li><strong>↑ Total bilirubin (markedly), with conjugated &gt; unconjugated</strong></li>
          <li>↑↑ ALP, GGT</li>
          <li>↑ ALT, AST (variable)</li>
          <li>↑ Cholesterol (often)</li>
          <li>Prolonged PT (vit K deficiency from chronic obstruction)</li>
          <li>↑ Bile acids</li>
          <li>cPL/fPL — pancreatitis screen ✨</li>
          <li>Bilirubinuria</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal US — diagnostic ✨:</strong>
            <ul>
              <li><strong>Dilated common bile duct</strong>: dog &gt; 5 mm, cat &gt; 4-5 mm</li>
              <li>Dilated intrahepatic bile ducts (severe / chronic)</li>
              <li>Dilated GB</li>
              <li>Identify cause: pancreatitis, mass, mucocele, stone</li>
              <li>Note: CBD doesn't dilate immediately — takes 1-3 days; acute obstruction may have normal CBD initially</li>
            </ul>
          </li>
          <li>CT — better for tumor staging, complex anatomy</li>
        </ul>

        <p><strong>Definitive:</strong> identify + biopsy the cause (FNA mass, pancreas)</p>
        <p><strong>Bile sampling (caution):</strong> cholecystocentesis under US — culture, cytology</p>
      `,
      differential: `
        <ul>
          <li>Hepatic disease (pre-hepatic causes have less marked bilirubin elevation typically)</li>
          <li>Hemolytic anemia (pre-hepatic — IMHA)</li>
          <li>Sepsis with cholestasis</li>
          <li>Drug-induced cholestasis</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Identify + treat underlying cause ✨</strong></p>
        <ul>
          <li><strong>Pancreatitis (most common, often resolves with medical mgmt):</strong>
            <ul>
              <li>Aggressive supportive care: IV fluids, anti-emetics, pain</li>
              <li>NPO → early enteral feeding</li>
              <li>Most resolve over 7-14 days</li>
              <li>Surgical decompression only if no improvement / severe</li>
            </ul>
          </li>
          <li><strong>Neoplasia:</strong>
            <ul>
              <li>Surgical resection if possible</li>
              <li>Biliary stenting (palliative for unresectable)</li>
              <li>Cholecystoduodenostomy / cholecystojejunostomy (bypass)</li>
            </ul>
          </li>
          <li><strong>GB mucocele:</strong> cholecystectomy + CBD flush</li>
          <li><strong>Choledocholithiasis:</strong> surgical removal, choledochotomy</li>
          <li><strong>Liver flukes:</strong> praziquantel 20 mg/kg × 3 d</li>
        </ul>

        <p><strong>2. Pre-operative stabilization:</strong></p>
        <ul>
          <li><strong>Vitamin K1 1-2 mg/kg SC q12h × 3 doses</strong> ✨ — correct coagulopathy before any procedure
            <ul>
              <li>Recheck PT 12h after last dose</li>
            </ul>
          </li>
          <li>FFP 10 mL/kg if active bleeding or PT remains prolonged</li>
          <li>IV fluids — hydration, electrolyte correction</li>
          <li>Antibiotics (broad-spectrum): ampicillin + enrofloxacin or amoxi-clav (cholangitis risk high)</li>
          <li>Anti-emetics, pain management</li>
          <li>Address sepsis if present</li>
        </ul>

        <p><strong>3. Surgical decompression (when medical fails / severe):</strong></p>
        <ul>
          <li><strong>Indications:</strong>
            <ul>
              <li>Persistent obstruction &gt; 5-7 days despite medical mgmt</li>
              <li>Septic peritonitis / cholangitis</li>
              <li>Mass causing obstruction</li>
              <li>Worsening clinical or biochemical status</li>
            </ul>
          </li>
          <li>Procedures:
            <ul>
              <li>Cholecystectomy (if cause is biliary)</li>
              <li>Cholecystotomy + CBD flush (with stenting if needed)</li>
              <li>Cholecystoduodenostomy / cholecystojejunostomy (bypass for unresectable distal obstruction)</li>
              <li>Stenting (CBD or duodenal) — interventional radiology</li>
            </ul>
          </li>
          <li>Biopsy + culture during surgery</li>
          <li>Cholecystotomy tube — temporary biliary diversion</li>
        </ul>

        <p><strong>4. Supportive care (during + post-treatment):</strong></p>
        <ul>
          <li><strong>Ursodeoxycholic acid (UDCA) 10-15 mg/kg PO q24h</strong> ✨ — once obstruction resolved (contraindicated in complete obstruction)</li>
          <li>SAMe + silybin (Denamarin) — hepatoprotection</li>
          <li>Vitamin K1 maintenance (1-2 mg/kg SC q1-4 wk)</li>
          <li>Low-fat diet</li>
          <li>Anti-emetic, appetite stimulants as needed</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Bilirubin trend (slow decline expected — weeks)</li>
          <li>Recheck US 1-2 wk after intervention</li>
          <li>Coag panel before any procedure</li>
          <li>Watch for sepsis signs</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Septic cholangitis / sepsis</strong> ✗</li>
          <li>Bile peritonitis (rupture, post-surgical leak)</li>
          <li>Coagulopathy → bleeding</li>
          <li>Secondary biliary cirrhosis (chronic)</li>
          <li>Surgical complications: dehiscence, stricture at anastomosis, infection</li>
          <li>Persistent / recurrent obstruction</li>
          <li>Pancreatitis (post-surgical or related)</li>
          <li>Death from sepsis or hepatic failure</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Pancreatitis-induced: depends on pancreatitis severity; most resolve with medical mgmt</li>
          <li>Mucocele / cholelithiasis with surgery: good (~ 80% survival)</li>
          <li>Neoplastic: poor — depends on tumor type, resectability</li>
          <li>Septic cholangitis with surgery: guarded — 50-65% mortality</li>
          <li>Secondary biliary cirrhosis: poor</li>
          <li>Coagulopathy at presentation: ↑ surgical risk</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 37 · Acute Pancreatitis ---------- */
  {
    id: 'acute-pancreatitis',
    titleEn: 'Acute Pancreatitis',
    titleTh: 'ตับอ่อนอักเสบเฉียบพลัน',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['acute pancreatitis', 'cPL', 'fPL', 'SNAP', 'maropitant', 'fentanyl', 'plasma transfusion', 'low-fat diet', 'Mini Schnauzer'],
    aliases: ['pancreatitis', 'AP', 'ตับอ่อนอักเสบ'],
    source: 'Ch. 37 · pp. 627–636',
    sections: {
      definition: `
        <p>การอักเสบเฉียบพลันของตับอ่อน → autodigestion จาก premature activation ของ pancreatic enzymes → systemic effects</p>
        <ul>
          <li>เจอบ่อยในคลินิก — ทั้งหมาและแมว</li>
          <li>Spectrum กว้าง: mild → severe necrotizing → SIRS → MODS</li>
          <li>Mortality สูงถ้า severe (~ 30-50%)</li>
          <li>Cat: subtler presentation, harder to diagnose ✨</li>
        </ul>
      `,
      etiology: `
        <p><strong>Dog risk factors:</strong></p>
        <ul>
          <li><strong>Dietary indiscretion / high-fat meal</strong> ✨ — classic trigger</li>
          <li><strong>Hyperlipidemia / hypertriglyceridemia</strong> ✨ — Mini Schnauzer especially</li>
          <li>Obesity</li>
          <li>Endocrinopathy: Cushing's, DM, hypothyroid</li>
          <li>Drugs: <strong>azathioprine, sulfonamides, KBr, l-asparaginase</strong>, organophosphate</li>
          <li>Trauma (HBC, post-surgical)</li>
          <li>Hypercalcemia</li>
          <li>Idiopathic (many cases)</li>
        </ul>
        <p><strong>Predisposed breeds:</strong> Mini Schnauzer, Yorkie, Cocker Spaniel, terrier breeds, Cavalier KCS</p>
        <p><strong>Cat:</strong></p>
        <ul>
          <li>Idiopathic mostly (~ 90%)</li>
          <li>Trauma</li>
          <li>Toxoplasmosis</li>
          <li>Liver flukes (endemic)</li>
          <li>Drugs (less common than dogs)</li>
          <li>Concurrent IBD, cholangitis ("triaditis") ✨</li>
          <li>Hypercalcemia</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Premature activation of trypsinogen → trypsin → activates other zymogens within pancreas</li>
          <li>Autodigestion → inflammation → edema → necrosis</li>
          <li>Local inflammation → systemic inflammatory response (SIRS)</li>
          <li>Severe: ARDS, AKI, DIC, MODS</li>
          <li>Concurrent biliary obstruction common (anatomy)</li>
          <li>Cat: chronic pancreatitis often co-exists with IBD + cholangitis (triaditis)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Dog:</strong></p>
        <ul>
          <li><strong>Acute persistent vomiting</strong> ✨</li>
          <li>Anorexia, lethargy</li>
          <li><strong>Cranial abdominal pain</strong> ✨ — "praying position", reluctance to move</li>
          <li>Dehydration</li>
          <li>± Diarrhea</li>
          <li>Fever (variable)</li>
          <li>Severe: shock, collapse, hypothermia, jaundice ✗</li>
          <li>Petechiae, ecchymoses (DIC)</li>
        </ul>
        <p><strong>Cat (subtle, harder to diagnose ✨):</strong></p>
        <ul>
          <li><strong>Anorexia</strong> ✨ — most consistent sign</li>
          <li>Lethargy, weight loss</li>
          <li>Vomiting LESS common than in dogs (~ 35-50%)</li>
          <li>Abdominal pain often missed (cats hide pain well)</li>
          <li>Dehydration</li>
          <li>± Hypothermia</li>
          <li>± Jaundice (concurrent cholangitis / lipidosis)</li>
          <li>Diarrhea uncommon</li>
          <li>Concurrent disease signs (DM, IBD, cholangitis, lipidosis)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical suspicion + multi-modal approach:</strong></p>

        <p><strong>1. cPL / fPL (SNAP) ✨ — first-line</strong></p>
        <ul>
          <li>Pancreatic-specific lipase</li>
          <li>SNAP qualitative (in-clinic): positive / negative</li>
          <li>Spec cPL / fPL (lab): quantitative
            <ul>
              <li>Dog: &gt; 400 µg/L = consistent; &gt; 1000 = highly suggestive</li>
              <li>Cat: &gt; 5.4 µg/L = consistent</li>
            </ul>
          </li>
          <li>High specificity but not 100% sensitivity</li>
          <li>Doesn't differentiate severity</li>
          <li>Negative test does NOT rule out (especially cat)</li>
        </ul>

        <p><strong>2. Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal US (preferred):</strong>
            <ul>
              <li>Enlarged hypoechoic pancreas</li>
              <li>Surrounding hyperechoic mesentery (peritonitis)</li>
              <li>Free fluid</li>
              <li>± Dilated CBD (concurrent obstruction)</li>
              <li>Pseudocyst, abscess (rare complications)</li>
              <li>Skill-dependent — cat pancreatitis can be missed</li>
            </ul>
          </li>
          <li>Abdominal rad: nonspecific; ileus, "loss of detail" cranial abdomen</li>
          <li>CT — superior for staging/complications, less commonly used in vet med</li>
        </ul>

        <p><strong>3. Lab:</strong></p>
        <ul>
          <li>CBC: leukocytosis with left shift; severe — leukopenia (poor prognosis)</li>
          <li>Biochem:
            <ul>
              <li>Hyperlipidemia, hypertriglyceridemia</li>
              <li>↑ ALT, ALP, bilirubin (concurrent hepatic / biliary involvement)</li>
              <li>Hyperglycemia (stress / DM)</li>
              <li>Hypocalcemia (saponification)</li>
              <li>Pre-renal azotemia</li>
              <li>Lipase, amylase — historically used; non-specific, replaced by cPL/fPL</li>
            </ul>
          </li>
          <li>Electrolytes — hypoK, hypoNa, hypoCl from vomiting</li>
          <li>Coag panel — DIC screening in severe</li>
          <li>Lactate — sepsis / SIRS indicator</li>
          <li>Glucose, fT4 (cat) — concurrent disease workup</li>
        </ul>

        <p><strong>4. Definitive (rarely needed):</strong> pancreatic biopsy — surgical or laparoscopic; usually not pursued except for chronic cases</p>
      `,
      differential: `
        <ul>
          <li>Foreign body / GI obstruction</li>
          <li>GDV</li>
          <li>Severe gastroenteritis</li>
          <li>Septic peritonitis</li>
          <li>HBC / abdominal trauma</li>
          <li>Pyometra</li>
          <li>Hepatic dz</li>
          <li>Renal dz (cat)</li>
          <li>Lymphoma (cat)</li>
          <li>IBD flare</li>
          <li>DKA</li>
          <li>Addison's</li>
        </ul>
      `,
      treatment: `
        <p><strong>Mainstay = supportive care; no specific therapy</strong></p>

        <p><strong>1. IV fluid therapy ✨ (cornerstone):</strong></p>
        <ul>
          <li>Aggressive crystalloid (LRS, Plasmalyte) — restore perfusion, support pancreatic microcirculation</li>
          <li>Bolus 10-20 mL/kg if hypovolemic, then maintenance + ongoing losses</li>
          <li>Adjust K supplementation (often hypokalemic)</li>
          <li>Monitor BP, urine output, electrolytes</li>
          <li>Avoid overhydration (risk pulmonary edema, especially cat)</li>
        </ul>

        <p><strong>2. Pain management ✨ (essential — pain worsens outcome):</strong></p>
        <ul>
          <li><strong>Methadone 0.2-0.4 mg/kg IV/IM q4-6h</strong> ✨</li>
          <li>Or buprenorphine 0.02 mg/kg IV/IM q6-8h</li>
          <li>Severe: <strong>fentanyl CRI 2-5 µg/kg/hr</strong> — most effective</li>
          <li>Lidocaine CRI 25-50 µg/kg/min — adjunct (avoid in cats)</li>
          <li>Ketamine CRI 2-10 µg/kg/min — adjunct refractory pain</li>
          <li>Avoid NSAIDs ✗ — kidney injury risk in dehydrated/hypotensive patient</li>
        </ul>

        <p><strong>3. Anti-emetics ✨:</strong></p>
        <ul>
          <li><strong>Maropitant 1 mg/kg SC/IV q24h</strong> ✨ — first-line; also has visceral analgesic effect</li>
          <li><strong>Ondansetron 0.5-1 mg/kg IV q8-12h</strong> ✨ — refractory; combine with maropitant</li>
          <li>Metoclopramide CRI 1-2 mg/kg/day — prokinetic, central anti-emetic</li>
          <li>Dolasetron alternative</li>
        </ul>

        <p><strong>4. Nutritional support ✨ — early enteral feeding:</strong></p>
        <ul>
          <li><strong>Modern approach: feed early</strong> (within 24-48h, not prolonged NPO) ✨
            <ul>
              <li>NPO &gt; 3 days = harm (mucosal atrophy, bacterial translocation)</li>
              <li>Especially critical in cat (lipidosis risk)</li>
            </ul>
          </li>
          <li>Diet: low-fat, highly digestible (Royal Canin GI Low Fat, Hill's i/d Low Fat)</li>
          <li>Cat: not necessarily low-fat; high-protein recovery diet usually tolerated</li>
          <li>Small frequent meals</li>
          <li><strong>Esophagostomy tube</strong> ✨ if anorexic &gt; 3-5 d (cat especially)</li>
          <li>Naso-jejunal tube — bypass stomach for severe cases (referral)</li>
          <li>TPN — last resort for refractory vomiting</li>
        </ul>

        <p><strong>5. Acid suppression / GI protection:</strong></p>
        <ul>
          <li>Pantoprazole 1 mg/kg IV q12-24h (hospitalized)</li>
          <li>Omeprazole 1 mg/kg PO q12-24h (when oral)</li>
          <li>Sucralfate 0.5-1 g PO q8h ถ้า hematemesis</li>
        </ul>

        <p><strong>6. Plasma / colloid (severe cases):</strong></p>
        <ul>
          <li>FFP 10-20 mL/kg — replace antiproteases (α2-macroglobulin, antithrombin), DIC support</li>
          <li>Indication: hypoalbuminemia, DIC, severe disease</li>
          <li>Albumin support if &lt; 2.0</li>
        </ul>

        <p><strong>7. Antibiotics — selective use:</strong></p>
        <ul>
          <li>NOT routinely indicated in uncomplicated pancreatitis ✗</li>
          <li>Indications:
            <ul>
              <li>Septic peritonitis / abscess</li>
              <li>Concurrent cholangitis</li>
              <li>Suspected bacterial translocation (severe SIRS, leukopenia)</li>
              <li>Aspiration pneumonia</li>
            </ul>
          </li>
          <li>Choices: ampicillin + enrofloxacin, amoxi-clav</li>
        </ul>

        <p><strong>8. Treat concurrent disease:</strong></p>
        <ul>
          <li>DM: insulin (carefully — pancreatitis worsens insulin resistance)</li>
          <li>Cholangitis: antibiotics, ursodiol</li>
          <li>IBD (cat): defer steroids until pancreatitis resolved</li>
          <li>Hyperlipidemia: low-fat diet, omega-3, fenofibrate post-recovery</li>
          <li>Hepatic lipidosis (cat): aggressive nutritional support</li>
        </ul>

        <p><strong>9. Avoid:</strong></p>
        <ul>
          <li>Steroids — historically avoided; recent evidence may not be harmful, but reserve for refractory cases / IBD component</li>
          <li>NSAIDs ✗</li>
          <li>Prolonged NPO</li>
          <li>High-fat diet</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Vital signs, hydration, urine output q4-6h</li>
          <li>Daily: PCV/TS, electrolytes, glucose, BUN/Cr, lactate</li>
          <li>Weight</li>
          <li>cPL/fPL recheck — typically falls with clinical improvement (not always parallel)</li>
          <li>US recheck if not improving</li>
          <li>Watch for: AKI, ARDS, DIC, septic peritonitis (abscess), pseudocyst, EPI / DM development</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>SIRS / MODS / death</strong> ✗</li>
          <li>AKI</li>
          <li>ARDS</li>
          <li>DIC</li>
          <li>Septic peritonitis</li>
          <li>Pancreatic abscess</li>
          <li>Pancreatic pseudocyst</li>
          <li>Diabetes mellitus (post-pancreatitis — endocrine cells damaged)</li>
          <li>EPI (chronic / recurrent → exocrine cell loss)</li>
          <li>Concurrent hepatic lipidosis (cat)</li>
          <li>Biliary obstruction</li>
          <li>Recurrent pancreatitis (chronic disease pattern)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Mild dog pancreatitis with prompt treatment: good</strong> — recover 5-10 days</li>
          <li>Severe / necrotizing: guarded — mortality 30-50%</li>
          <li>Cat acute pancreatitis: variable; depends on triaditis component</li>
          <li>Mini Schnauzer with hyperlipidemia: recurrent risk; lifelong management</li>
          <li>Negative prognostic factors: severe SIRS, AKI, ARDS, DIC, hypocalcemia, hypoglycemia, age &gt; 10 yr, comorbidities</li>
        </ul>
        <div class="callout">⚠️ <strong>Owner education:</strong> ห้ามให้อาหาร high-fat, table scraps, ไขมัน — เสี่ยง recurrent pancreatitis. ใช้ low-fat prescription diet long-term ในเคสที่เคยเป็น. Mini Schnauzer + hyperlipidemia = lifelong vigilance</div>
      `,
    },
  },

  /* ---------- Ch 37 · Chronic Pancreatitis (Cat) ---------- */
  {
    id: 'chronic-pancreatitis-cat',
    titleEn: 'Chronic Pancreatitis (Feline)',
    titleTh: 'ตับอ่อนอักเสบเรื้อรังในแมว',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['cat', 'dog'],
    tags: ['chronic pancreatitis', 'triaditis', 'fPL', 'cobalamin', 'low-fat diet', 'maropitant', 'IBD'],
    aliases: ['chronic pancreatitis', 'CP cat', 'ตับอ่อนเรื้อรัง'],
    source: 'Ch. 37 · pp. 636–640',
    sections: {
      definition: `
        <p>การอักเสบเรื้อรังหรือเป็นๆหายๆ ของตับอ่อน → progressive damage</p>
        <ul>
          <li><strong>Cat: เจอบ่อยมาก แต่ undiagnosed</strong> — postmortem studies show ~ 60% of cats have chronic pancreatitis ✨</li>
          <li>Often subclinical or vague signs</li>
          <li>Concurrent IBD + cholangitis ("triaditis") ✨</li>
          <li>Dog: less common as discrete entity; often progression from recurrent acute episodes (Mini Schnauzer)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Cat:</strong></p>
        <ul>
          <li><strong>Idiopathic</strong> — most common</li>
          <li>Concurrent IBD, cholangitis (triaditis)</li>
          <li>Toxoplasmosis</li>
          <li>Liver flukes (endemic)</li>
          <li>Possible immune-mediated component</li>
        </ul>
        <p><strong>Dog:</strong></p>
        <ul>
          <li>Recurrent acute episodes → chronic damage</li>
          <li>Hyperlipidemia (Mini Schnauzer)</li>
          <li>Genetic predisposition (English Cocker — possibly autoimmune pancreatitis)</li>
          <li>Persistent dietary indiscretion</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Recurrent / persistent inflammation → fibrosis + atrophy of acinar cells</li>
          <li>Eventually loss of exocrine function → EPI</li>
          <li>Damage to islet cells → diabetes mellitus</li>
          <li>Triaditis (cat): shared embryologic origin + anatomy of pancreatic duct + bile duct + duodenum</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Cat — vague + chronic:</strong></p>
        <ul>
          <li><strong>Intermittent anorexia / hyporexia</strong> ✨</li>
          <li>Weight loss (gradual)</li>
          <li>Lethargy</li>
          <li>Vomiting (sometimes)</li>
          <li>Diarrhea (concurrent IBD)</li>
          <li>± Mild abdominal pain</li>
          <li>Dehydration during flare</li>
          <li>Concurrent triaditis signs</li>
          <li>End-stage: DM, EPI</li>
        </ul>
        <p><strong>Dog:</strong></p>
        <ul>
          <li>Recurrent vomiting episodes</li>
          <li>Intermittent anorexia</li>
          <li>Weight loss</li>
          <li>Diarrhea (EPI development)</li>
          <li>PU/PD (DM development)</li>
          <li>Cachexia (advanced)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Clinical suspicion in chronic vague illness:</strong></p>
        <ul>
          <li><strong>fPL / cPL</strong> — may be elevated during flares; can be normal between flares
            <ul>
              <li>Repeated testing useful</li>
              <li>Negative does NOT rule out chronic pancreatitis</li>
            </ul>
          </li>
          <li><strong>Abdominal US</strong>:
            <ul>
              <li>Hyperechoic, irregular pancreas</li>
              <li>Pancreatic atrophy (chronic)</li>
              <li>± Surrounding mesenteric changes</li>
              <li>Concurrent: liver, biliary, intestinal changes</li>
            </ul>
          </li>
          <li>CBC, biochem — variable; may be near-normal during quiescence</li>
          <li>Cobalamin, folate ✨ — often low; supplement</li>
          <li>TLI — assess for EPI (low if exocrine damage extensive)</li>
          <li>fT4, glucose, biochem — concurrent disease</li>
          <li>FeLV/FIV</li>
          <li><strong>Pancreatic biopsy</strong> — gold standard (surgical/laparoscopic; rarely pursued); also allows liver + intestinal biopsy for triaditis</li>
        </ul>
        <p><strong>Workup for triaditis (cat):</strong></p>
        <ul>
          <li>fPL — pancreatitis</li>
          <li>GGT, ALT, ALP, bilirubin — cholangitis</li>
          <li>Cobalamin, fecal — IBD</li>
          <li>If practical: surgical biopsy of pancreas + liver + small intestine simultaneously</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>IBD (concurrent often)</li>
          <li>Lymphoma (alimentary)</li>
          <li>Cholangitis (concurrent often)</li>
          <li>EPI</li>
          <li>Hyperthyroidism (cat senior)</li>
          <li>CKD</li>
          <li>Hepatic disease</li>
          <li>Other chronic inflammatory disease</li>
        </ul>
      `,
      treatment: `
        <p><strong>Treat flares + prevent progression + manage complications</strong></p>

        <p><strong>1. Acute flare management (similar to acute pancreatitis):</strong></p>
        <ul>
          <li>IV fluids</li>
          <li>Anti-emetics (maropitant ± ondansetron)</li>
          <li>Pain management (buprenorphine, methadone)</li>
          <li>Early enteral feeding (esophagostomy tube if anorexic)</li>
          <li>Address concurrent diseases</li>
        </ul>

        <p><strong>2. Long-term management:</strong></p>
        <ul>
          <li><strong>Diet:</strong>
            <ul>
              <li>Cat: highly digestible, moderate-fat OK; avoid sudden changes; canned wet food preferred (hydration)</li>
              <li>Dog: <strong>strict low-fat diet</strong> ✨ (Royal Canin GI Low Fat, Hill's i/d Low Fat)</li>
              <li>No table scraps, high-fat treats</li>
              <li>Multiple small meals</li>
            </ul>
          </li>
          <li><strong>Cobalamin supplementation</strong> ✨ — almost always indicated
            <ul>
              <li>Cat: 250 µg SC weekly × 6 wk, then monthly</li>
              <li>Dog: 250-1500 µg SC weekly × 6 wk, then monthly</li>
              <li>Or oral 1 mg/day</li>
            </ul>
          </li>
          <li>Pancreatic enzyme supplementation — if EPI develops (low TLI)</li>
          <li>Insulin — if DM develops</li>
        </ul>

        <p><strong>3. Triaditis treatment (cat):</strong></p>
        <ul>
          <li><strong>Cholangitis component:</strong>
            <ul>
              <li>Neutrophilic — antibiotics (amoxi-clav 4-8 wk)</li>
              <li>Lymphocytic — prednisolone 1-2 mg/kg PO q12h, taper</li>
              <li>Ursodiol 10-15 mg/kg PO q24h</li>
            </ul>
          </li>
          <li><strong>IBD component:</strong>
            <ul>
              <li>Diet trial (hydrolyzed / novel protein)</li>
              <li>Cobalamin</li>
              <li>If not food-responsive: prednisolone or budesonide</li>
              <li>Refractory: chlorambucil (cat) or cyclosporine</li>
            </ul>
          </li>
          <li><strong>Pancreatitis component:</strong>
            <ul>
              <li>Anti-emetics, pain control during flares</li>
              <li>Maintain hydration</li>
              <li>Recovery diet during flare</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Steroids (controversial):</strong></p>
        <ul>
          <li>Historically avoided in pancreatitis</li>
          <li>Recent evidence: not contraindicated; useful when concurrent IBD / cholangitis lymphocytic</li>
          <li>Prednisolone 1-2 mg/kg PO q12h (cat); taper</li>
          <li>Especially indicated for triaditis lymphoplasmacytic</li>
        </ul>

        <p><strong>5. Address hyperlipidemia (dog):</strong></p>
        <ul>
          <li>Strict low-fat diet</li>
          <li>Omega-3 fatty acids (EPA + DHA) 50-100 mg/kg/day</li>
          <li>Fibrates (bezafibrate 4-10 mg/kg PO q24h) — refractory hypertriglyceridemia</li>
          <li>Treat underlying endocrinopathy (Cushing's, hypothyroid)</li>
        </ul>

        <p><strong>6. Pain management (chronic):</strong></p>
        <ul>
          <li>Recognize chronic visceral pain (cats hide!)</li>
          <li>Buprenorphine 0.02-0.04 mg/kg OTM q6-8h during flares</li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h — chronic neuropathic pain component</li>
          <li>Avoid NSAIDs long-term in pancreatitis patients</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Recheck q3-6 mo: weight, BCS, biochem, fPL, cobalamin</li>
          <li>Glucose monitoring (DM development)</li>
          <li>TLI annually (EPI development)</li>
          <li>US periodic — assess progression</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Diabetes mellitus</strong> (islet cell loss)</li>
          <li><strong>EPI</strong> (acinar cell loss, especially in chronic cases)</li>
          <li>Recurrent flares / acute pancreatitis episodes</li>
          <li>Concurrent hepatic lipidosis (cat anorexia)</li>
          <li>Triaditis flares</li>
          <li>Cachexia, malnutrition</li>
          <li>Pancreatic neoplasia (rare; chronic inflammation increases risk)</li>
          <li>Drug side effects (steroid: DM, infection)</li>
          <li>Owner fatigue with chronic management</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Cat with proper management: <strong>fair to good</strong> — many cats live years with good quality of life ✓</li>
          <li>Triaditis well-controlled: good</li>
          <li>EPI / DM development: requires lifelong management but manageable</li>
          <li>Mini Schnauzer with hyperlipidemia + chronic pancreatitis: variable; depends on lipid control</li>
          <li>Severe end-stage with cachexia: guarded</li>
        </ul>
        <div class="callout">💡 <strong>Cat anorexia + weight loss + vague illness = always think pancreatitis (+ triaditis components)</strong>. fPL, US, cobalamin, GGT — comprehensive workup. แม้ว่า definitive diagnosis ต้อง biopsy, การรักษาแบบ empirical สำหรับ triaditis บ่อยครั้งทำได้ผลดี</div>
      `,
    },
  },

  /* ---------- Ch 36 · Hepatic Neoplasia ---------- */
  {
    id: 'hepatic-neoplasia',
    titleEn: 'Hepatic Neoplasia',
    titleTh: 'มะเร็งตับ',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['hepatocellular carcinoma', 'HCC', 'biliary carcinoma', 'hepatic lymphoma', 'metastatic', 'lobectomy', 'AFP'],
    aliases: ['liver cancer', 'liver tumor', 'HCC', 'มะเร็งตับ'],
    source: 'Ch. 36 · pp. 612–614',
    sections: {
      definition: `
        <p>Tumors involving liver — primary or metastatic</p>
        <ul>
          <li><strong>Metastatic &gt; primary</strong> ในส่วนใหญ่ (liver = common metastasis site)</li>
          <li>Older animals (mean ~ 10-12 yr)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Primary tumors (dog):</strong></p>
        <ul>
          <li><strong>Hepatocellular carcinoma (HCC)</strong> ✨ — most common primary hepatic tumor in dog
            <ul>
              <li>Massive form (single large mass) — most common; resectable often!</li>
              <li>Nodular form — multiple nodules</li>
              <li>Diffuse form — least common, worst prognosis</li>
            </ul>
          </li>
          <li>Hepatocellular adenoma — benign</li>
          <li>Biliary carcinoma (cholangiocarcinoma) — aggressive, multifocal</li>
          <li>Hepatic carcinoid (rare)</li>
          <li>Sarcomas (HSA, leiomyosarcoma)</li>
        </ul>
        <p><strong>Primary tumors (cat):</strong></p>
        <ul>
          <li><strong>Lymphoma</strong> ✨ — most common in cat (alimentary form often involves liver)</li>
          <li>Biliary carcinoma</li>
          <li>HCC (less common than dog)</li>
        </ul>
        <p><strong>Metastatic to liver:</strong></p>
        <ul>
          <li>HSA (especially splenic)</li>
          <li>Mast cell tumor</li>
          <li>Lymphoma</li>
          <li>Histiocytic sarcoma</li>
          <li>Carcinomas: mammary, prostate, anal sac, intestinal, pancreatic</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Local invasion + mass effect</li>
          <li>Vascular invasion → hemoabdomen if rupture (HSA, HCC)</li>
          <li>Paraneoplastic syndromes: hypoglycemia (HCC), hypercalcemia (lymphoma)</li>
          <li>Bile duct compression → obstructive jaundice</li>
          <li>Disseminated intravascular coagulation (HSA)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Often vague / subclinical until advanced:</strong></p>
        <ul>
          <li>Anorexia, weight loss, lethargy</li>
          <li>Vomiting (intermittent)</li>
          <li>Abdominal distension (mass, ascites, hemoabdomen)</li>
          <li>Jaundice (biliary involvement)</li>
          <li>PU/PD (hypercalcemia, hepatic insufficiency)</li>
          <li>Hypoglycemia signs (HCC paraneoplastic) — weakness, seizures, collapse ✗</li>
          <li>Acute collapse — ruptured HSA / HCC ✗</li>
          <li>Pale MM (anemia from chronic dz or hemoabdomen)</li>
          <li>Palpable cranial abdominal mass</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab:</strong></p>
        <ul>
          <li>↑ ALT, ALP, GGT (variable)</li>
          <li>↑ Bilirubin (biliary involvement)</li>
          <li>± Hypoglycemia (HCC paraneoplastic)</li>
          <li>± Hypercalcemia (lymphoma paraneoplastic)</li>
          <li>Anemia (chronic dz, hemorrhage)</li>
          <li>Coagulopathy (HSA — DIC)</li>
          <li>Bile acids ↑</li>
          <li>α-Fetoprotein (AFP) — HCC marker (limited availability)</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal US</strong> ✨ — mass identification, FNA guidance</li>
          <li>Thoracic rad (3 views) — lung metastasis (staging)</li>
          <li>CT/MRI — preoperative planning, vascular involvement</li>
          <li>Echocardiography — right atrial HSA (if splenic HSA + hepatic mets)</li>
        </ul>
        <p><strong>Tissue diagnosis:</strong></p>
        <ul>
          <li><strong>FNA cytology</strong> — diffuse processes (lymphoma, HCC sometimes)
            <ul>
              <li>Caution with HSA / vascular tumors (hemorrhage risk)</li>
              <li>HCC may resemble normal hepatocytes — biopsy preferred for diagnosis</li>
            </ul>
          </li>
          <li>Tru-cut biopsy — coag check first; some tumors hemorrhage</li>
          <li>Surgical / laparoscopic biopsy — definitive; allows resection</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Hepatic abscess</li>
          <li>Hepatic regenerative nodules / nodular hyperplasia (benign, common in older dogs)</li>
          <li>Hepatic cyst</li>
          <li>Hematoma</li>
          <li>Granuloma (fungal, parasitic)</li>
          <li>Cholangiohepatitis</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Surgical resection (best for massive HCC) ✨:</strong></p>
        <ul>
          <li><strong>Massive HCC</strong>: liver lobectomy — often curative if single lobe + no metastasis ✓
            <ul>
              <li>MST: 1500+ days (often years)</li>
              <li>Recurrence rate low (~ 13%)</li>
            </ul>
          </li>
          <li>Nodular / diffuse HCC: not resectable — palliative care</li>
          <li>Biliary carcinoma: usually too multifocal for resection</li>
          <li>Pre-op staging essential (thoracic rad, CT, regional LN)</li>
        </ul>

        <p><strong>2. Hepatic lymphoma (cat):</strong></p>
        <ul>
          <li>Chemotherapy:
            <ul>
              <li>Low-grade (small cell): chlorambucil 2 mg/cat PO q48h + prednisolone 1-2 mg/kg PO q24h
                <ul>
                  <li>MST 1.5-3 yr (good response)</li>
                </ul>
              </li>
              <li>High-grade (large cell): CHOP / COP protocol — variable response, MST 6 months</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Metastatic disease:</strong></p>
        <ul>
          <li>Treat primary tumor when possible</li>
          <li>HSA: doxorubicin-based chemo post-splenectomy; MST 4-6 mo</li>
          <li>Mast cell tumor: vinblastine, prednisone, toceranib</li>
          <li>Most metastatic disease — palliative</li>
        </ul>

        <p><strong>4. Palliative care (unresectable / metastatic):</strong></p>
        <ul>
          <li>Pain management: NSAIDs (with kidney monitoring), opioids (buprenorphine, methadone), gabapentin</li>
          <li>Anti-emetics, appetite stimulants (mirtazapine, capromorelin)</li>
          <li>Hepatoprotectants: SAMe, silybin, ursodiol</li>
          <li>Manage hypoglycemia (HCC): frequent meals + dextrose CRI for episodes</li>
          <li>Manage hypercalcemia (lymphoma): IV fluids, furosemide, bisphosphonates</li>
          <li>Therapeutic abdominocentesis (ascites, hemoabdomen)</li>
          <li>End-of-life discussion + euthanasia when QOL poor</li>
        </ul>

        <p><strong>5. Adjunctive (some evidence):</strong></p>
        <ul>
          <li>Toceranib (Palladia) — TKI; some HCC cases respond</li>
          <li>Metronomic chemotherapy (low-dose cyclophosphamide + NSAID)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Tumor rupture / hemoabdomen</strong> ✗ — HSA, HCC</li>
          <li>Biliary obstruction</li>
          <li>Hepatic insufficiency</li>
          <li>Hypoglycemic seizures (HCC)</li>
          <li>Hypercalcemia (AKI, weakness)</li>
          <li>DIC</li>
          <li>Surgical complications: bleeding, biliary leak, dehiscence</li>
          <li>Metastasis (lung, regional LN, peritoneal)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Massive HCC + lobectomy: excellent</strong> — MST &gt; 4 years possible ✓</li>
          <li>Nodular / diffuse HCC: poor — MST 270 days</li>
          <li>Biliary carcinoma: poor — MST &lt; 6 mo (often metastatic at diagnosis)</li>
          <li>Cat low-grade lymphoma: <strong>good</strong> — MST 1.5-3 yr</li>
          <li>Cat high-grade lymphoma: poor — MST 6 mo</li>
          <li>Splenic HSA with hepatic mets: poor — MST 4-6 mo with chemo</li>
        </ul>
      `,
    },
  },

  /* ---------- Toxic Hepatopathy ---------- */
  {
    id: 'toxic-hepatopathy',
    titleEn: 'Toxic Hepatopathy',
    titleTh: 'ตับเป็นพิษ',
    type: 'disease',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['acetaminophen', 'paracetamol', 'xylitol', 'sago palm', 'mushroom', 'aflatoxin', 'NAC', 'N-acetylcysteine', 'silibinin'],
    aliases: ['drug-induced hepatitis', 'toxin liver', 'paracetamol toxicity', 'ตับพิษ'],
    source: 'Ch. 36 · pp. 608–612',
    sections: {
      definition: `
        <p>Acute or chronic liver damage จาก hepatotoxin ingestion</p>
        <ul>
          <li>Common emergency presentation</li>
          <li>Spectrum: mild self-limiting → fulminant hepatic failure</li>
          <li>Some have <strong>specific antidotes</strong> (acetaminophen, mushroom) ✨</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common hepatotoxins:</strong></p>
        <ul>
          <li><strong>Acetaminophen (paracetamol)</strong> ✨:
            <ul>
              <li><strong>Cat: extremely toxic — fatal at 50-100 mg/kg</strong> ✗ (no glucuronidation!)</li>
              <li>Dog: toxic at &gt; 100-200 mg/kg</li>
              <li>Causes methemoglobinemia + hepatic necrosis</li>
            </ul>
          </li>
          <li><strong>Xylitol</strong> ✨ (sugar substitute, gum, baked goods):
            <ul>
              <li>Dog: severe hypoglycemia (&gt; 0.1 g/kg) + hepatic necrosis (&gt; 0.5 g/kg)</li>
              <li>Cat: less affected</li>
            </ul>
          </li>
          <li><strong>Sago palm (Cycas)</strong> — all parts toxic; severe hepatic necrosis ✗</li>
          <li><strong>Mushrooms (Amanita phalloides — death cap)</strong> — fulminant hepatic failure ✗</li>
          <li><strong>Aflatoxin</strong> — moldy food / corn / peanuts; outbreaks reported</li>
          <li><strong>Drugs:</strong>
            <ul>
              <li>NSAIDs (carprofen — idiosyncratic; ibuprofen, naproxen toxicity)</li>
              <li>Phenobarbital (chronic; idiosyncratic acute)</li>
              <li>Acetaminophen-codeine combinations</li>
              <li>Sulfonamides (TMS)</li>
              <li>Methimazole (cat)</li>
              <li>Itraconazole, ketoconazole</li>
              <li>Lomustine, methotrexate</li>
              <li>Diazepam (cat — idiosyncratic, can be fatal)</li>
            </ul>
          </li>
          <li>Iron, copper (overdose / toxicity)</li>
          <li>Ethanol</li>
          <li>Heavy metals (lead, arsenic)</li>
          <li>Ricinus communis (castor bean)</li>
          <li>Blue-green algae (microcystins)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Direct hepatocellular damage or via toxic metabolites</li>
          <li>Acetaminophen: depletion of glutathione → reactive metabolite NAPQI binds proteins → necrosis</li>
          <li>Cat: severely deficient in glucuronidation (UGT enzyme) → ↑ susceptibility ✗</li>
          <li>Xylitol: insulin release → hypoglycemia + hepatic damage (mechanism not fully clear)</li>
          <li>Mushroom amatoxins: inhibit RNA polymerase II → hepatocyte death</li>
          <li>Centrilobular necrosis common pattern (zone 3 — most metabolically active)</li>
          <li>Severe → coagulopathy, HE, multi-organ failure</li>
        </ul>
      `,
      symptoms: `
        <p><strong>General (variable timing post-ingestion):</strong></p>
        <ul>
          <li>Vomiting</li>
          <li>Anorexia, lethargy</li>
          <li>Abdominal pain</li>
          <li>Jaundice (delayed — 2-5 days post-ingestion)</li>
          <li>Hepatic encephalopathy (severe)</li>
          <li>Coagulopathy</li>
        </ul>
        <p><strong>Specific:</strong></p>
        <ul>
          <li><strong>Acetaminophen (cat especially):</strong>
            <ul>
              <li>Methemoglobinemia: <strong>chocolate-brown MM, cyanosis, dyspnea</strong> ✨</li>
              <li>Facial / paw edema</li>
              <li>Jaundice (delayed in dog)</li>
              <li>Hemoglobinuria</li>
              <li>Heinz body anemia</li>
            </ul>
          </li>
          <li><strong>Xylitol (dog):</strong>
            <ul>
              <li>30-60 min: <strong>severe hypoglycemia</strong> ✨ — weakness, ataxia, seizures, collapse</li>
              <li>12-72h: hepatic failure signs</li>
              <li>Coagulopathy</li>
            </ul>
          </li>
          <li><strong>Sago palm:</strong>
            <ul>
              <li>Within 24h: GI signs (vomiting bloody, melena)</li>
              <li>2-3 days: hepatic failure, coagulopathy, neuro signs</li>
            </ul>
          </li>
          <li><strong>Amanita mushroom:</strong>
            <ul>
              <li>6-24h: severe GI signs</li>
              <li>"False recovery" 24-48h</li>
              <li>3-7 days: fulminant hepatic failure ✗</li>
            </ul>
          </li>
        </ul>
      `,
      diagnosis: `
        <p><strong>History critical:</strong> witnessed ingestion, exposure, drug history, garden plants</p>
        <p><strong>Lab:</strong></p>
        <ul>
          <li><strong>Massive ↑ ALT, AST</strong> ✨ — often &gt; 1000 IU/L</li>
          <li>↑ ALP (variable)</li>
          <li>↑ Bilirubin (delayed onset)</li>
          <li>↑ NH3 (severe / HE)</li>
          <li>Prolonged PT/aPTT</li>
          <li>Hypoglycemia (xylitol, severe failure)</li>
          <li>Methemoglobinemia (acetaminophen — Heinz body anemia, chocolate brown blood)</li>
          <li>Hyperphosphatemia (severe necrosis — poor prognostic)</li>
          <li>Lactate ↑</li>
        </ul>
        <p><strong>Specific tests:</strong></p>
        <ul>
          <li>Acetaminophen serum level (limited availability)</li>
          <li>Methemoglobin level</li>
          <li>Mushroom toxicology (rarely available timely)</li>
          <li>Liver biopsy — usually not pursued acutely; centrilobular necrosis pattern</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Infectious hepatitis (lepto)</li>
          <li>Acute hepatic ischemia</li>
          <li>Bile peritonitis</li>
          <li>Pancreatitis with hepatic involvement</li>
          <li>Severe sepsis with hepatopathy</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Decontamination (if recent ingestion):</strong></p>
        <ul>
          <li><strong>Induce vomiting</strong> if &lt; 1-2 hours post-ingestion + alert + no contraindication
            <ul>
              <li>Dog: apomorphine 0.04 mg/kg IV</li>
              <li>Cat: dexmedetomidine 7-10 µg/kg IM (not as reliable)</li>
              <li>NEVER hydrogen peroxide in cat ✗</li>
            </ul>
          </li>
          <li><strong>Activated charcoal 1-3 g/kg PO</strong> — within 2-4h of ingestion
            <ul>
              <li>Repeat doses for enterohepatic circulation toxins (NSAIDs, mushroom)</li>
              <li>Caution: aspiration risk; not for caustic / hydrocarbon</li>
            </ul>
          </li>
          <li>Gastric lavage — rarely indicated</li>
        </ul>

        <p><strong>2. Specific antidotes:</strong></p>
        <ul>
          <li><strong>Acetaminophen — N-acetylcysteine (NAC) ✨</strong>:
            <ul>
              <li>140 mg/kg IV / PO loading dose, then 70 mg/kg q6h × 7 doses</li>
              <li>Replenishes glutathione</li>
              <li>Earlier = better; effective even hours post-ingestion</li>
              <li>Methylene blue 1-2 mg/kg slow IV (cat) — methemoglobinemia
                <ul>
                  <li>Caution Heinz body formation</li>
                </ul>
              </li>
              <li>Vitamin C 30 mg/kg PO/IV q6h (cat) — adjunct</li>
              <li>Cimetidine — historical, less used now</li>
              <li>SAMe 17-20 mg/kg PO q24h — glutathione support</li>
            </ul>
          </li>
          <li><strong>Xylitol — supportive + dextrose:</strong>
            <ul>
              <li>IV dextrose CRI 2.5-5% — correct + prevent hypoglycemia (24-72h)</li>
              <li>SAMe, silybin (Denamarin)</li>
              <li>NAC may help</li>
              <li>Plasma if coagulopathic</li>
            </ul>
          </li>
          <li><strong>Mushroom (Amanita) — silibinin (silymarin)</strong>:
            <ul>
              <li>IV silibinin 5 mg/kg IV q4h (Legalon — hard to source)</li>
              <li>NAC adjunct</li>
              <li>Aggressive supportive care</li>
              <li>Penicillin G 1,000,000 IU/kg/day IV — historical adjunct</li>
            </ul>
          </li>
          <li><strong>Iron toxicity — deferoxamine</strong>:
            <ul>
              <li>40 mg/kg IM q4-8h</li>
              <li>Combined with whole bowel irrigation</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Supportive care (all toxic hepatopathies):</strong></p>
        <ul>
          <li><strong>IV fluids</strong> — restore perfusion, support liver, address electrolytes</li>
          <li><strong>Vitamin K1 1-2 mg/kg SC q12h × 3 doses</strong> — coagulopathy</li>
          <li>FFP 10-20 mL/kg — if active bleeding or DIC</li>
          <li><strong>Hepatoprotectants ✨:</strong>
            <ul>
              <li>SAMe 17-20 mg/kg PO q24h (Denamarin) on empty stomach</li>
              <li>Silybin (milk thistle) 5-10 mg/kg PO q24h</li>
              <li>NAC (specific or general antioxidant)</li>
              <li>Vitamin E 10 IU/kg PO q24h</li>
            </ul>
          </li>
          <li>Anti-emetics: maropitant, ondansetron</li>
          <li>Pain management: opioids (avoid NSAIDs ✗, acetaminophen)</li>
          <li>HE management: lactulose, antibiotics, low-protein diet (if HE present)</li>
          <li>Hypoglycemia: dextrose CRI</li>
          <li>Anti-ulcer: omeprazole, sucralfate</li>
          <li>Nutritional support: early enteral, low-fat highly digestible</li>
          <li>Avoid drugs metabolized by liver during recovery</li>
        </ul>

        <p><strong>4. ICU monitoring:</strong></p>
        <ul>
          <li>Vital signs, mucous membrane color, hydration</li>
          <li>Blood gases, lactate</li>
          <li>Daily: ALT, ALP, bilirubin, BUN/Cr, glucose, electrolytes, PT/aPTT</li>
          <li>Watch for: HE, coagulopathy, AKI, sepsis, GI ulceration</li>
        </ul>

        <p><strong>Prevention / education:</strong></p>
        <ul>
          <li>Owner education: list of common toxins; don't share human meds with cats!</li>
          <li>Specific warnings:
            <ul>
              <li>Cat + paracetamol = ตายได้ ✗</li>
              <li>Dog + xylitol gum/peanut butter = emergency</li>
              <li>Sago palm — remove from house if pet present</li>
            </ul>
          </li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Fulminant hepatic failure</strong> ✗</li>
          <li>HE, coma</li>
          <li>Coagulopathy, GI bleed</li>
          <li>AKI</li>
          <li>DIC</li>
          <li>ARDS</li>
          <li>Methemoglobinemia (acetaminophen)</li>
          <li>Severe hypoglycemia (xylitol)</li>
          <li>Sepsis</li>
          <li>Death</li>
          <li>Chronic hepatitis post-recovery (some cases)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Mild exposure with prompt decontamination + treatment: <strong>good</strong></li>
          <li>Acetaminophen + early NAC: good chance of survival</li>
          <li>Acetaminophen cat with severe methemoglobinemia + delayed treatment: guarded</li>
          <li>Xylitol + early treatment: good</li>
          <li>Sago palm advanced: very poor (~ 50% mortality)</li>
          <li>Amanita mushroom + delayed: very poor</li>
          <li>Massive ALT + INR &gt; 2 + HE = poor prognosis</li>
        </ul>
        <div class="callout">⚠️ <strong>Owner education ที่สำคัญ:</strong> <ul><li>"แมวกินยาแก้ปวดของคน (paracetamol) = ตายได้ — ไม่ใช่แค่ป่วย" ✗</li><li>"หมากินหมากฝรั่ง / ขนมที่มี xylitol → emergency"</li><li>"สาคูปาล์มในสวน — ทุกส่วนเป็นพิษกับสัตว์"</li></ul></div>
      `,
    },
  },

  /* ---------- Abdominocentesis (Procedure) ---------- */
  {
    id: 'abdominocentesis',
    titleEn: 'Abdominocentesis',
    titleTh: 'การเจาะช่องท้อง',
    type: 'procedure',
    system: 'hepatobiliary',
    species: ['dog', 'cat'],
    tags: ['abdominocentesis', 'paracentesis', 'ascites', 'hemoabdomen', 'septic peritonitis', 'bile peritonitis', 'AFAST', 'POCUS'],
    aliases: ['paracentesis', 'abdominal tap', 'การเจาะท้อง'],
    source: 'Ch. 33 · pp. 558–562',
    sections: {
      indications: `
        <p><strong>Diagnostic:</strong></p>
        <ul>
          <li>Identify nature of free abdominal fluid</li>
          <li>Differentiate: transudate / modified transudate / exudate / hemoabdomen / bile peritonitis / septic peritonitis / chyle / urine</li>
          <li>Cytology + culture + biochemistry</li>
        </ul>
        <p><strong>Therapeutic:</strong></p>
        <ul>
          <li>Relieve respiratory compromise from massive ascites</li>
          <li>Reduce abdominal pain from tense ascites</li>
          <li>Decompress abdomen pre-surgery</li>
        </ul>
        <p><strong>Common scenarios:</strong></p>
        <ul>
          <li>Ascites of unknown cause</li>
          <li>Suspected hemoabdomen (HBC, HSA rupture)</li>
          <li>Suspected septic peritonitis</li>
          <li>Post-trauma free fluid</li>
          <li>Acute abdomen workup</li>
        </ul>
      `,
      contraindications: `
        <p><strong>Relative:</strong></p>
        <ul>
          <li><strong>Severe coagulopathy</strong> — correct first if time permits (vitamin K, FFP)</li>
          <li>Gross abdominal distension (organ puncture risk) — use US guidance</li>
          <li>Known organomegaly at planned tap site</li>
          <li>Pregnancy (avoid uterus)</li>
          <li>Pyometra suspected (rupture risk if uterus tapped)</li>
        </ul>
        <p><strong>Pearls:</strong></p>
        <ul>
          <li>Always use ultrasound guidance when possible — much safer</li>
          <li>If suspected hemoabdomen + unstable patient — stabilize first, may not need diagnostic tap (PCV abdomen ≈ peripheral)</li>
          <li>Never tap to "rule out" fluid — use POCUS instead (more sensitive)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Patient:</strong></p>
        <ul>
          <li>Position: <strong>standing or lateral recumbency (right lateral preferred)</strong> ✨</li>
          <li>Sedation usually NOT needed (procedure not painful)</li>
          <li>Mild butorphanol if anxious</li>
          <li>Empty bladder before procedure (reduces puncture risk)</li>
          <li>Clip + aseptic prep</li>
          <li>Local lidocaine optional (1-2 mL SQ)</li>
        </ul>
        <p><strong>Equipment:</strong></p>
        <ul>
          <li>20-22 g 1-1.5 inch needle (cat / small dog)</li>
          <li>18-20 g 1.5 inch needle (medium-large dog)</li>
          <li>Or 18-20 g over-the-needle catheter for large drainage</li>
          <li>3 mL or 6 mL syringe (diagnostic); 60 mL syringe + 3-way stopcock + tubing for therapeutic</li>
          <li>Sample tubes:
            <ul>
              <li>EDTA — cell count, cytology</li>
              <li>Plain (red top) — biochemistry</li>
              <li>Culture tube — aerobic + anaerobic</li>
              <li>Slides for direct cytology</li>
            </ul>
          </li>
          <li>Ultrasound (recommended)</li>
        </ul>
        <p><strong>Site selection:</strong></p>
        <ul>
          <li><strong>Standard 4-quadrant approach</strong> (without US): both sides of midline, cranial + caudal to umbilicus
            <ul>
              <li>Avoid spleen (left cranial)</li>
              <li>Avoid bladder (caudal midline)</li>
            </ul>
          </li>
          <li><strong>Ultrasound-guided</strong> (preferred) ✨ — locate maximum fluid pocket</li>
          <li>Most common site: 1-2 cm caudal + lateral to umbilicus on the right side (avoids spleen)</li>
        </ul>
      `,
      steps: `
        <ol style="font-family: var(--font-thai); font-size: 16px; line-height: 1.7; color: var(--ink); margin: 6px 0 10px 22px; padding: 0;">
          <li><strong>Position patient + identify site</strong> — palpate, US confirm fluid pocket</li>
          <li><strong>Aseptic prep + drape</strong></li>
          <li><strong>Optional local anesthesia</strong> — 1 mL lidocaine SQ at site</li>
          <li><strong>Insert needle perpendicular to skin</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Avoid linea alba (epigastric vessels)</li>
              <li>Don't aspirate continuously while advancing — wait until in fluid</li>
              <li>Advance through skin + body wall</li>
            </ul>
          </li>
          <li><strong>Aspirate gently</strong> — fluid should flow freely
            <ul style="margin: 6px 0 6px 20px;">
              <li>If no flow, redirect needle slightly or try different site</li>
              <li>If only small amount, may be drips on hub — collect</li>
              <li>Don't force aspiration — risk organ damage</li>
            </ul>
          </li>
          <li><strong>Open / drip technique</strong> if syringe aspiration fails:
            <ul style="margin: 6px 0 6px 20px;">
              <li>Insert needle without syringe</li>
              <li>Allow fluid to drip out passively</li>
              <li>Useful for low-volume effusions</li>
            </ul>
          </li>
          <li><strong>Collect sufficient sample:</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>Diagnostic: 3-5 mL minimum</li>
              <li>EDTA tube (cell count, cytology)</li>
              <li>Plain tube (TP, glucose, lactate, bilirubin, creatinine, K)</li>
              <li>Culture tube (if exudate / suspected sepsis)</li>
              <li>Direct slides if cytologic urgency</li>
            </ul>
          </li>
          <li><strong>For therapeutic drainage</strong> (large volumes):
            <ul style="margin: 6px 0 6px 20px;">
              <li>Use 18 g over-the-needle catheter</li>
              <li>Connect to extension tubing + 3-way stopcock + 60 mL syringe</li>
              <li>Drain slowly to avoid hypotension (large rapid removal → fluid shifts)</li>
              <li>Drain to symptom relief, not necessarily complete drainage</li>
              <li>Monitor BP, HR during drainage</li>
            </ul>
          </li>
          <li><strong>Withdraw needle/catheter</strong> when complete; pressure briefly</li>
          <li><strong>Document fluid characteristics:</strong> color, turbidity, odor, volume</li>
        </ol>
      `,
      complications: `
        <p><strong>Common (mild):</strong></p>
        <ul>
          <li>Failed aspiration (small fluid pocket, loculated)</li>
          <li>Mild hemorrhage at puncture site</li>
          <li>Rare hypotension after large-volume drainage</li>
        </ul>
        <p><strong>Serious (rare with good technique):</strong></p>
        <ul>
          <li>Organ puncture: spleen (most common), bowel, bladder, pregnant uterus, kidney</li>
          <li>Iatrogenic peritonitis from bowel puncture</li>
          <li>Bleeding (coagulopathy, splenic laceration)</li>
          <li>Hypotension from rapid large-volume drainage (avoid by gradual)</li>
          <li>Hypoalbuminemia worsened by repeated drainage (no protein recovery)</li>
        </ul>
      `,
      postCare: `
        <p><strong>Sample analysis:</strong></p>
        <ul>
          <li><strong>Cell count + total protein:</strong>
            <ul>
              <li>Pure transudate: TP &lt; 2.5, cells &lt; 1500/µL</li>
              <li>Modified transudate: TP 2.5-5, cells 1000-7000</li>
              <li>Exudate: TP &gt; 3, cells &gt; 7000</li>
            </ul>
          </li>
          <li><strong>Cytology:</strong> infection (intracellular bacteria = septic peritonitis ✗), neoplastic cells, mesothelial reactivity</li>
          <li><strong>Biochemistry of fluid:</strong>
            <ul>
              <li><strong>Bilirubin:</strong> fluid &gt; 2× serum = bile peritonitis ✗</li>
              <li><strong>Creatinine + K:</strong> fluid Cr &gt; 2× serum or fluid K &gt; 1.4× serum (dog), &gt; 1.9× (cat) = uroabdomen ✗</li>
              <li><strong>Glucose:</strong> fluid glucose &gt; 20 mg/dL less than peripheral = septic peritonitis (bacterial consumption)</li>
              <li><strong>Lactate:</strong> fluid lactate &gt; 2 mmol/L higher than peripheral = septic peritonitis</li>
              <li><strong>Triglycerides:</strong> &gt; 100 mg/dL (and &gt; serum) = chyloabdomen</li>
            </ul>
          </li>
          <li><strong>Hemoabdomen:</strong> PCV close to peripheral; doesn't clot (defibrinated)</li>
          <li><strong>Culture:</strong> aerobic + anaerobic for exudates</li>
        </ul>
        <p><strong>Patient monitoring:</strong></p>
        <ul>
          <li>Watch for: bleeding from site, ↑ abdominal pain, dehiscence (rare), acute decompensation</li>
          <li>Vital signs, MM, abdominal palpation</li>
          <li>If therapeutic large-volume drainage: monitor BP, electrolytes</li>
        </ul>
        <p><strong>Decision making based on results:</strong></p>
        <ul>
          <li>Septic peritonitis → emergency surgical exploration ✗</li>
          <li>Bile peritonitis → surgical exploration</li>
          <li>Uroabdomen → urinary tract repair</li>
          <li>Hemoabdomen → stabilize, identify source (US, surgery)</li>
          <li>Modified transudate (CHF, hepatic dz) → manage underlying disease</li>
          <li>Chyloabdomen → identify cause (lymphoma, lymphangiectasia, cardiac)</li>
          <li>Neoplastic effusion → stage + treat tumor</li>
        </ul>
        <div class="callout">💡 <strong>POCUS / AFAST</strong> ✨ — ทุกเคส acute abdomen / collapse / trauma ทำ AFAST ก่อน → ถ้ามี fluid → tap ที่ pocket ใหญ่ที่สุด. สามารถ diagnose hemoabdomen, bile peritonitis, septic peritonitis ได้ภายใน 5-10 นาที</div>
      `,
    },
  },

  /* ============================================================
     PART 5 — URINARY (Ch 38–45)
  ============================================================ */

  /* ---------- Ch 38 · Clinical Manifestations of Urinary Disorders ---------- */
  {
    id: 'urinary-clinical-manifestations',
    titleEn: 'Clinical Manifestations of Urinary Disorders',
    titleTh: 'อาการของโรคทางเดินปัสสาวะ',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['PU/PD', 'oliguria', 'anuria', 'hematuria', 'pollakiuria', 'stranguria', 'azotemia', 'uremia', 'proteinuria'],
    aliases: ['urinary signs', 'อาการโรคปัสสาวะ', 'อาการไต'],
    source: 'Ch. 38 · pp. 649–660',
    sections: {
      definition: `
        <p>อาการทางเดินปัสสาวะ — แยกตาม <strong>upper</strong> (kidney, ureter) vs <strong>lower</strong> (bladder, urethra)</p>
        <ul>
          <li>Upper: PU/PD, weight loss, vomiting, uremia</li>
          <li>Lower: pollakiuria, stranguria, hematuria, periuria (ปัสสาวะนอกที่)</li>
        </ul>
      `,
      etiology: `<p>ดู entries เฉพาะตามอาการ</p>`,
      pathophysiology: `
        <ul>
          <li><strong>PU/PD:</strong> ↓ medullary tonicity, osmotic diuresis (DM, post-obstruction), ↓ ADH response</li>
          <li><strong>Oliguria/anuria:</strong> AKI, obstruction, severe dehydration</li>
          <li><strong>Azotemia:</strong> ↑ BUN/Cr — pre-renal (hypovolemia), renal (parenchymal), post-renal (obstruction, rupture)</li>
          <li><strong>Uremia:</strong> clinical syndrome ของ azotemia + signs (vomiting, halitosis, oral ulcer)</li>
          <li><strong>Proteinuria:</strong> glomerular leak, tubular dysfunction, post-renal (UTI, hemorrhage)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Upper urinary (kidney):</strong></p>
        <ul>
          <li>PU/PD ✨</li>
          <li>Weight loss, ↓ appetite</li>
          <li>Lethargy, weakness</li>
          <li>Vomiting (uremic gastritis)</li>
          <li>Halitosis (uremic — fruity/ammoniacal)</li>
          <li>Oral ulcers (uremic)</li>
          <li>Dehydration despite PU/PD</li>
          <li>Pale MM (anemia of CKD)</li>
          <li>Small irregular kidneys (CKD) or large painful kidneys (AKI, pyelo)</li>
        </ul>
        <p><strong>Lower urinary (bladder/urethra):</strong></p>
        <ul>
          <li><strong>Pollakiuria</strong> — ปัสสาวะบ่อย ปริมาณน้อย ✨</li>
          <li><strong>Stranguria</strong> — เบ่งปัสสาวะ, เจ็บ ✨</li>
          <li><strong>Dysuria</strong> — ปัสสาวะลำบาก</li>
          <li><strong>Hematuria</strong> — frank red, end-of-stream (lower) vs throughout (upper/diffuse)</li>
          <li><strong>Periuria</strong> — ปัสสาวะนอกกระบะ (cat especially)</li>
          <li>Distended painful bladder (obstruction) ✗</li>
          <li>Urethral plug palpable (cat male) ✗</li>
        </ul>
        <p><strong>Differentiating PU/PD from pollakiuria:</strong></p>
        <ul>
          <li>PU/PD: ↑ total volume + ↑ thirst, comfortable urination</li>
          <li>Pollakiuria: ↑ frequency, normal/↓ total volume, painful, urgent</li>
        </ul>
      `,
      diagnosis: `<p>ดู Urinary Diagnostic Tests entry</p>`,
      differential: `<p>กว้างมาก — แยกตามอาการเด่น</p>`,
      treatment: `<p>ตามสาเหตุ — ดู entries เฉพาะ</p>`,
      complications: `
        <ul>
          <li>Uremic crisis</li>
          <li>Hyperkalemia (obstruction, AKI) → cardiac arrhythmia ✗</li>
          <li>Bladder rupture (obstruction prolonged)</li>
          <li>Severe dehydration / hypovolemia</li>
          <li>Anemia (CKD chronic)</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 39 · Urinary Diagnostic Tests ---------- */
  {
    id: 'urinary-diagnostic-tests',
    titleEn: 'Urinary Diagnostic Tests',
    titleTh: 'การตรวจวินิจฉัยโรคทางเดินปัสสาวะ',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['BUN', 'creatinine', 'SDMA', 'urinalysis', 'USG', 'UPC', 'cystocentesis', 'urine culture', 'IRIS staging'],
    aliases: ['kidney tests', 'urinalysis', 'ตรวจไต', 'ตรวจปัสสาวะ'],
    source: 'Ch. 39 · pp. 661–667',
    sections: {
      definition: `<p>เครื่องมือตรวจไตและทางเดินปัสสาวะ</p>`,
      etiology: `<p>—</p>`,
      pathophysiology: `<p>—</p>`,
      symptoms: `<p>—</p>`,
      diagnosis: `
        <p><strong>1. Serum biomarkers:</strong></p>
        <ul>
          <li><strong>BUN (urea):</strong>
            <ul>
              <li>↑ in renal dysfunction (&gt; 75% loss before ↑)</li>
              <li>↑ also: dehydration, GI bleed, high-protein diet, post-prandial</li>
              <li>↓: PSS, hepatic insufficiency, low-protein diet</li>
            </ul>
          </li>
          <li><strong>Creatinine:</strong>
            <ul>
              <li>More specific than BUN</li>
              <li>↑ in renal dysfunction (&gt; 75% loss)</li>
              <li>Affected by muscle mass (low in cachexia, high in muscular breeds)</li>
            </ul>
          </li>
          <li><strong>SDMA</strong> ✨ — modern marker
            <ul>
              <li>↑ when ~ 40% renal function lost (vs 75% for Cr) — earlier detection</li>
              <li>Not affected by muscle mass — better in old/cachectic cats</li>
              <li>Recommended for IRIS staging, early CKD detection</li>
            </ul>
          </li>
          <li><strong>Phosphorus:</strong> ↑ in CKD (poor prognostic), ↓ in PU/PD</li>
          <li><strong>K+:</strong> ↑ in obstruction/anuria/Addison's; ↓ in CKD cat (common!)</li>
        </ul>

        <p><strong>2. Urinalysis (UA) ✨ — cornerstone:</strong></p>
        <ul>
          <li><strong>USG:</strong>
            <ul>
              <li>Dog: hyposthenuric &lt;1.008, isosthenuric 1.008-1.012, hypersthenuric &gt; 1.030</li>
              <li>Cat: hypersthenuric &gt; 1.035 (cat concentrates more)</li>
              <li>↓ Concentrating ability with renal failure (USG &lt; 1.030 dog, &lt; 1.035 cat with concurrent azotemia = renal)</li>
            </ul>
          </li>
          <li><strong>Dipstick:</strong>
            <ul>
              <li>pH: alkaline (struvite, urease bacteria) vs acidic (CaOx, cat normal)</li>
              <li>Protein: 1+ to 4+ — must compare to USG (1+ in dilute = significant)</li>
              <li>Blood: hematuria, hemoglobinuria, myoglobinuria — confirm with sediment</li>
              <li>Glucose: DM, primary renal glucosuria (Fanconi)</li>
              <li>Ketones: DKA</li>
              <li>Bilirubin: hepatobiliary (cat = abnormal in any amount)</li>
            </ul>
          </li>
          <li><strong>Sediment:</strong>
            <ul>
              <li>RBC, WBC (&gt; 5/hpf = pyuria → infection)</li>
              <li>Bacteria (must culture — bacteria-only doesn't confirm UTI without WBC)</li>
              <li>Crystals: struvite, CaOx mono/dihydrate, urate (PSS), cystine</li>
              <li>Casts: hyaline (mild), granular (tubular damage), cellular (active dz), waxy (chronic)</li>
              <li>Atypical cells — TCC suspect</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. UPC ratio ✨</strong></p>
        <ul>
          <li>Quantify proteinuria from sterile sample (no UTI, no severe hematuria)</li>
          <li><strong>IRIS classification (dog):</strong>
            <ul>
              <li>&lt; 0.2 = non-proteinuric</li>
              <li>0.2-0.5 = borderline (recheck)</li>
              <li>&gt; 0.5 = proteinuric (workup glomerular dz)</li>
            </ul>
          </li>
          <li>Cat: &lt; 0.2 normal, 0.2-0.4 borderline, &gt; 0.4 proteinuric</li>
          <li>Persistent if confirmed × 3 over 2 wk</li>
        </ul>

        <p><strong>4. Urine culture &amp; sensitivity ✨</strong></p>
        <ul>
          <li><strong>Cystocentesis sample preferred</strong> — sterile</li>
          <li>Quantitative count + sensitivity</li>
          <li>Indications: pyuria, suspected UTI, immunocompromised (DM, Cushing's, CKD), recurrent UTI, before/after treatment</li>
        </ul>

        <p><strong>5. Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal radiograph:</strong> kidney size/shape, radiopaque uroliths (struvite, CaOx, mixed), bladder distension</li>
          <li><strong>Abdominal US</strong> ✨: renal size/architecture/echogenicity, hydronephrosis, pyelonephritis, mass, bladder wall, uroliths (incl. radiolucent — urate, cystine), prostate</li>
          <li><strong>Contrast cystography:</strong> wall mass, urolith, ectopic ureter, ruptured bladder</li>
          <li><strong>CT</strong> ✨ — gold standard for ectopic ureter, complex obstruction</li>
        </ul>

        <p><strong>6. Renal biopsy:</strong></p>
        <ul>
          <li>Indication: glomerular dz workup (proteinuria), unexplained renal dysfunction</li>
          <li>Methods: US-guided Tru-cut, surgical wedge, laparoscopic</li>
          <li><strong>Coag panel + BP first</strong> ✨</li>
          <li>Risk: hemorrhage (esp. ↑ BP, coagulopathy), infarction</li>
        </ul>

        <p><strong>7. IRIS Staging (CKD) ✨ — global standard</strong></p>
        <ul>
          <li>Stage 1: Cr &lt; 1.4 dog, &lt; 1.6 cat — non-azotemic, evidence of CKD</li>
          <li>Stage 2: Cr 1.4-2.8 dog, 1.6-2.8 cat — mild azotemia</li>
          <li>Stage 3: Cr 2.9-5.0 — moderate azotemia, signs likely</li>
          <li>Stage 4: Cr &gt; 5.0 — severe, uremic crisis risk</li>
          <li>Substaging: BP + UPC</li>
        </ul>

        <p><strong>8. Blood pressure ✨</strong></p>
        <ul>
          <li>Doppler or oscillometric</li>
          <li>Multiple measurements — avoid stress</li>
          <li>HT common in CKD, DM, hyperthyroid, Cushing's</li>
          <li>Severe HT (&gt; 180 systolic) = end-organ damage risk</li>
        </ul>
      `,
      differential: `<p>—</p>`,
      treatment: `<p>—</p>`,
      complications: `<p>Renal biopsy: hemorrhage (esp. coagulopathy, HT). Cystocentesis: bladder rupture (severe distension), iatrogenic infection (rare)</p>`,
    },
  },

  /* ---------- Ch 40 · Acute Kidney Injury (AKI) ---------- */
  {
    id: 'acute-kidney-injury',
    titleEn: 'Acute Kidney Injury (AKI)',
    titleTh: 'ไตวายเฉียบพลัน',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['AKI', 'acute renal failure', 'leptospirosis', 'ethylene glycol', 'lily', 'NSAID', 'aminoglycoside', 'oliguria', 'hyperkalemia', 'hemodialysis'],
    aliases: ['ARF', 'acute renal failure', 'AKI', 'ไตวายเฉียบพลัน'],
    source: 'Ch. 40 · pp. 668–688',
    sections: {
      definition: `
        <p>ฟังก์ชันไตลดลง <strong>เฉียบพลัน</strong> (hours-days) → ↑ azotemia + electrolyte/acid-base disturbance</p>
        <ul>
          <li>Mortality สูง 50-60% — emergency!</li>
          <li>3 phases: induction → maintenance → recovery</li>
          <li>Survivors อาจกลับสู่ปกติ หรือ progress เป็น CKD</li>
        </ul>
      `,
      etiology: `
        <p><strong>Pre-renal (hypoperfusion):</strong></p>
        <ul>
          <li>Severe dehydration, hypovolemic shock</li>
          <li>CHF, sepsis, anesthesia hypotension</li>
          <li>Reversible if treated promptly</li>
        </ul>
        <p><strong>Intrinsic renal (parenchymal damage):</strong></p>
        <ul>
          <li><strong>Toxic ✨:</strong>
            <ul>
              <li><strong>Ethylene glycol (antifreeze)</strong> ✗ — fatal; calcium oxalate crystals</li>
              <li><strong>Lily (cat)</strong> ✗ — ALL parts toxic; even pollen on fur licked = AKI ✨</li>
              <li><strong>NSAIDs</strong> — ibuprofen, naproxen, aspirin OD; carprofen idiosyncratic</li>
              <li><strong>Aminoglycosides</strong> — gentamicin, amikacin (proximal tubule)</li>
              <li>Grapes/raisins (dog) ✗</li>
              <li>Heavy metals (lead, mercury)</li>
              <li>Vitamin D toxicity (cholecalciferol rodenticide)</li>
              <li>Acetaminophen, sulfa drugs</li>
              <li>IV contrast media</li>
              <li>Cisplatin, amphotericin B</li>
            </ul>
          </li>
          <li><strong>Infectious:</strong>
            <ul>
              <li><strong>Leptospirosis (dog)</strong> ✨ — common cause; vaccine-preventable</li>
              <li>Bacterial pyelonephritis</li>
              <li>Borrelia, Ehrlichia (less common)</li>
            </ul>
          </li>
          <li><strong>Ischemic:</strong> prolonged hypotension, RTE, DIC, hemolysis</li>
          <li><strong>Other:</strong> hypercalcemia, severe pancreatitis, snake envenomation, heat stroke</li>
        </ul>
        <p><strong>Post-renal:</strong></p>
        <ul>
          <li>Urethral obstruction (cat plug, urolith)</li>
          <li>Bilateral ureteral obstruction</li>
          <li>Ruptured bladder/urethra (HBC, prolonged obstruction)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Tubular damage → cell death, sloughing → tubular obstruction by debris</li>
          <li>↓ GFR + back-leak of glomerular filtrate</li>
          <li>Vasoconstriction → ↓ renal blood flow</li>
          <li>Severe → oliguria/anuria</li>
          <li>Recovery — depends on basement membrane integrity (severe = no recovery)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Acute onset</strong> — hours to days</li>
          <li>Severe lethargy, weakness</li>
          <li>Anorexia, vomiting (uremic), halitosis, oral ulcers</li>
          <li>Diarrhea ± melena</li>
          <li>Dehydration (or fluid overload if anuric + treated)</li>
          <li><strong>Oliguria/anuria</strong> ✗ — &lt; 1 mL/kg/hr or no output</li>
          <li>± Polyuria (early/recovery phase)</li>
          <li>Painful enlarged kidneys (palpation)</li>
          <li>Hypothermia (severe)</li>
          <li>Bradycardia from hyperkalemia ✗</li>
          <li>Seizures (uremic encephalopathy) ✗</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab findings:</strong></p>
        <ul>
          <li>↑ BUN, ↑ Cr (often markedly), ↑ SDMA</li>
          <li>↑ K+ ✗ (esp. obstruction, oliguria)</li>
          <li>↑ P, variable Ca, metabolic acidosis</li>
          <li>USG: isosthenuric (1.008-1.012) once intrinsic damage</li>
          <li>UA: granular casts ✨ (active tubular damage), proteinuria, hematuria, glucosuria, cellular debris</li>
          <li>Urine culture — pyelonephritis</li>
          <li>Lepto MAT (paired) + urine PCR ✨</li>
          <li>Toxicology: ethylene glycol test (within 12-24h), lily history</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li>US: enlarged kidneys, hyperechoic cortex (acute), pelvic dilation (pyelo, obstruction)</li>
          <li>Rad: kidney size, uroliths, free fluid (rupture)</li>
        </ul>
        <p><strong>Differentiate AKI vs CKD acute exacerbation:</strong></p>
        <ul>
          <li>AKI: enlarged kidneys, hyperechoic, no anemia, hyperK common, history of acute illness</li>
          <li>CKD: small irregular kidneys, anemia, hypokalemia (cat), gradual onset</li>
          <li>"Acute on chronic" possible</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>CKD (acute decompensation)</li>
          <li>Severe dehydration with pre-renal azotemia (resolves with fluids)</li>
          <li>Post-renal — palpate bladder, US</li>
          <li>Hepatic insufficiency (PSS — different lab pattern)</li>
          <li>Addison's crisis (hyperK + hypotension; cortisol low)</li>
          <li>Sepsis, DKA</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Initial stabilization:</strong></p>
        <ul>
          <li><strong>IV fluids</strong> — restore perfusion (LRS or Plasmalyte)
            <ul>
              <li>Bolus 10-20 mL/kg if hypovolemic, reassess</li>
              <li>Replace deficit + maintenance + ongoing losses</li>
              <li>Monitor body weight q6-12h, BP, urine output, lung auscultation</li>
              <li>Avoid over-resuscitation — fluid overload in oliguric = pulmonary edema ✗</li>
            </ul>
          </li>
          <li><strong>Treat hyperkalemia (K &gt; 6.5 with ECG changes):</strong>
            <ul>
              <li>Calcium gluconate 10% 0.5-1 mL/kg slow IV (cardioprotective)</li>
              <li>Regular insulin 0.25-0.5 U/kg IV + dextrose</li>
              <li>NaHCO3 1-2 mEq/kg slow IV (severe acidosis)</li>
              <li>Definitive: relieve obstruction or dialyze</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Specific treatment by cause:</strong></p>
        <ul>
          <li><strong>Ethylene glycol</strong> ✨:
            <ul>
              <li>Within 3h dog / 8h cat: <strong>4-MP (fomepizole) 20 mg/kg IV</strong>, then 15 mg/kg q12h × 3 doses
                <ul>
                  <li>Cat: higher initial 125 mg/kg IV</li>
                </ul>
              </li>
              <li>Or ethanol 20% 5.5 mL/kg IV q4h × 5 doses (alternative)</li>
              <li>Aggressive IV fluids + supportive</li>
              <li>If azotemia present already → poor prognosis</li>
            </ul>
          </li>
          <li><strong>Lily (cat) ✗</strong>:
            <ul>
              <li>Decontamination if recent (induce vomiting + activated charcoal)</li>
              <li>Aggressive IV fluids 48-72h (3-4× maintenance)</li>
              <li>Most need hemodialysis if azotemic — guarded prognosis</li>
            </ul>
          </li>
          <li><strong>Leptospirosis</strong>:
            <ul>
              <li><strong>Doxycycline 5 mg/kg PO q12h × 2 weeks</strong> ✨</li>
              <li>Or ampicillin 22 mg/kg IV q6h initially → doxy when stable</li>
              <li>Owner notification — zoonotic (avoid urine contact)</li>
              <li>Aggressive supportive care</li>
            </ul>
          </li>
          <li><strong>Pyelonephritis</strong>: empirical fluoroquinolone (enrofloxacin 5-10 mg/kg PO/IV q24h) until culture; total 4-6 wk</li>
          <li><strong>Obstruction</strong>: relieve immediately — urethral catheterization, retrograde flushing, surgical</li>
          <li><strong>NSAID-induced</strong>: discontinue, gastroprotectants, aggressive fluids</li>
          <li><strong>Hypercalcemia-induced</strong>: IV fluids 0.9% NaCl, furosemide, treat underlying</li>
        </ul>

        <p><strong>3. Manage oliguria/anuria:</strong></p>
        <ul>
          <li>Confirm euvolemia + no obstruction first</li>
          <li><strong>Furosemide 1-4 mg/kg IV bolus</strong>; if no response within 1h, ↑ dose or CRI 0.5-1 mg/kg/hr</li>
          <li><strong>Mannitol 0.5-1 g/kg IV</strong> over 15-20 min — trial if euvolemic + no CHF</li>
          <li>If anuric &gt; 12-24h despite above → <strong>hemodialysis or peritoneal dialysis</strong></li>
        </ul>

        <p><strong>4. Supportive care:</strong></p>
        <ul>
          <li>Anti-emetics: maropitant 1 mg/kg SC/IV q24h, ondansetron 0.5 mg/kg IV q8-12h</li>
          <li>Acid suppression: pantoprazole, omeprazole</li>
          <li>Sucralfate ถ้า hematemesis</li>
          <li>Pain mgmt — buprenorphine, methadone (NEVER NSAIDs ✗)</li>
          <li>Esophagostomy tube ถ้า anorexia &gt; 3 d (cat especially)</li>
          <li>Phosphate binders if hyperP persists</li>
          <li>Monitor: weight, BP, urine output q6h, electrolytes q12h, BUN/Cr q24h</li>
        </ul>

        <p><strong>5. Renal replacement therapy (RRT) — referral:</strong></p>
        <ul>
          <li>Indications: anuria &gt; 12-24h, severe hyperK refractory, severe acidosis, fluid overload, lily/EG adjunct</li>
          <li>Hemodialysis — gold standard (limited availability)</li>
          <li>Peritoneal dialysis — alternative</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hyperkalemic cardiac arrhythmia / arrest</strong> ✗</li>
          <li>Uremic encephalopathy → seizures, coma</li>
          <li>Pulmonary edema (fluid overload)</li>
          <li>GI hemorrhage (uremic gastropathy)</li>
          <li>DIC, sepsis</li>
          <li>Progression to CKD (50% of survivors)</li>
          <li>Death from progressive renal failure</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Pre-renal AKI corrected promptly: <strong>excellent</strong></li>
          <li>Lepto with prompt antibiotic + supportive: 70-85% survival</li>
          <li>Toxic AKI (ethylene glycol with early fomepizole): variable; if azotemic = poor</li>
          <li>Lily (cat) advanced: poor — &lt; 50% survival without dialysis</li>
          <li>Anuric AKI without RRT: poor — &gt; 50% mortality</li>
          <li>Survivors: ~ 50% develop CKD; lifelong monitoring</li>
        </ul>
        <div class="callout">⚠️ <strong>Owner education:</strong> "Lily ทุกชนิดเป็นพิษกับแมว — ดอก, ใบ, ละอองเกสร, แม้แต่น้ำในแจกัน. ห้ามมีในบ้านที่มีแมว!" ✗ <br>"หมา/แมวกินแอนตี้ฟรีซ — emergency ภายใน 3 ชม. มีโอกาสรอด"</div>
      `,
    },
  },

  /* ---------- Ch 41 · Chronic Kidney Disease (CKD) ---------- */
  {
    id: 'chronic-kidney-disease',
    titleEn: 'Chronic Kidney Disease (CKD)',
    titleTh: 'CKD — ไตวายเรื้อรัง',
    type: 'disease',
    system: 'urinary',
    species: ['cat', 'dog'],
    tags: ['CKD', 'chronic kidney disease', 'IRIS staging', 'SDMA', 'phosphate binders', 'renal diet', 'ACE inhibitor', 'hypertension', 'anemia', 'darbepoetin', 'amlodipine', 'mirtazapine'],
    aliases: ['CRF', 'chronic renal failure', 'CKD', 'ไตวาย', 'ไตเรื้อรัง'],
    source: 'Ch. 41 · pp. 689–705',
    sections: {
      definition: `
        <p>การลดลงของฟังก์ชันไต <strong>&gt; 3 เดือน</strong> — irreversible</p>
        <ul>
          <li><strong>เจอบ่อยที่สุดในแมวสูงวัย</strong> ✨ — &gt; 30% ของแมวอายุ &gt; 10 ปี</li>
          <li>หมา: เจอน้อยกว่า แต่อาจรุนแรงกว่า (proteinuric form, glomerular dz)</li>
          <li>Progressive — แต่ slowed with proper management</li>
          <li>IRIS staging guide treatment</li>
        </ul>
      `,
      etiology: `
        <p><strong>Cat:</strong></p>
        <ul>
          <li>Idiopathic interstitial nephritis (most common)</li>
          <li>Sequela of AKI</li>
          <li>Polycystic kidney disease (Persian, Himalayan ✨ — autosomal dominant)</li>
          <li>Lymphoma, neoplasia</li>
          <li>Amyloidosis (Abyssinian, Siamese)</li>
          <li>Chronic pyelonephritis</li>
          <li>Glomerulonephritis (less common cat vs dog)</li>
          <li>FIP, FIV-related</li>
        </ul>
        <p><strong>Dog:</strong></p>
        <ul>
          <li><strong>Glomerular disease</strong> ✨ — proteinuric, often severe</li>
          <li>Familial nephropathies (Cocker, Bull Terrier, Lhasa Apso, Shih Tzu, GSD, Samoyed)</li>
          <li>Chronic interstitial nephritis</li>
          <li>Amyloidosis (Shar-Pei, Beagle)</li>
          <li>Chronic pyelonephritis</li>
          <li>Hypertension-associated</li>
          <li>Sequela of AKI</li>
          <li>Leishmaniasis (endemic)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Progressive nephron loss</li>
          <li>Surviving nephrons hyperfilter to compensate → eventually fail (intraglomerular hypertension)</li>
          <li>↓ GFR → azotemia, ↓ erythropoietin → anemia</li>
          <li>Secondary HPT (↓ vit D activation, P retention → ↑ PTH)</li>
          <li>Hypokalemia (cat — K wasting)</li>
          <li>Metabolic acidosis</li>
          <li>Systemic hypertension common</li>
          <li>Proteinuria worsens progression (glomerular sclerosis)</li>
          <li>Renal secondary HPT → bone demineralization, "rubber jaw" (severe)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Early (Stage 1-2):</strong></p>
        <ul>
          <li>Often subclinical, subtle weight loss, mild PU/PD</li>
          <li>Detected on screening</li>
        </ul>
        <p><strong>Advanced (Stage 3-4):</strong></p>
        <ul>
          <li><strong>PU/PD</strong> ✨</li>
          <li><strong>Weight loss, muscle wasting (sarcopenia)</strong> ✨</li>
          <li>Anorexia / hyporexia (food aversion to renal diet)</li>
          <li>Vomiting (uremic gastritis)</li>
          <li>Halitosis, oral ulcers</li>
          <li>Lethargy</li>
          <li>Constipation (dehydration)</li>
          <li>Pale MM (anemia)</li>
          <li>Dehydration despite drinking</li>
          <li>Small irregular kidneys (palpation)</li>
          <li>Cachexia, weakness</li>
          <li>Severe: uremic seizures, coma</li>
        </ul>
        <p><strong>Hypertension complications:</strong></p>
        <ul>
          <li>Acute blindness (retinal detachment, hemorrhage) ✗</li>
          <li>Neurological signs</li>
          <li>Cardiac (LVH)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnostic criteria (any of):</strong></p>
        <ul>
          <li>Persistent ↑ Cr / SDMA over 2-3 months</li>
          <li>Persistent isosthenuric urine (USG &lt; 1.030 dog, &lt; 1.035 cat) with azotemia</li>
          <li>Small irregular kidneys on imaging</li>
          <li>Persistent renal proteinuria</li>
        </ul>
        <p><strong>Workup:</strong></p>
        <ul>
          <li>Full chem panel: BUN, Cr, SDMA, P, Ca, K, glucose, ALT, ALP, albumin, globulin</li>
          <li>UA + UPC + culture</li>
          <li>CBC — anemia (non-regenerative)</li>
          <li>BP measurement ✨ (multiple readings)</li>
          <li>T4 (cat senior — concurrent hyperthyroid common)</li>
          <li>FeLV/FIV (cat)</li>
          <li>Abdominal US — kidney size/architecture, mass, polycystic, hydronephrosis</li>
          <li>Lepto (dog with subacute onset)</li>
          <li>Renal biopsy — only if proteinuric, young, atypical</li>
        </ul>
        <p><strong>IRIS staging</strong> at diagnosis + each recheck:</p>
        <ul>
          <li>Stage by Cr (after rehydration)</li>
          <li>Substage by UPC + BP</li>
          <li>Determines treatment intensity</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>AKI (acute on chronic distinguish — kidney size + anemia status)</li>
          <li>Pre-renal azotemia (dehydration — resolves with fluids)</li>
          <li>Post-renal (obstruction)</li>
          <li>Hyperthyroid (cat — masks CKD; treat both)</li>
          <li>Pyelonephritis (treatable cause)</li>
          <li>Lymphoma (renal — biopsy/cytology)</li>
          <li>Amyloidosis</li>
          <li>Glomerulonephritis</li>
        </ul>
      `,
      treatment: `
        <p><strong>Goals:</strong> slow progression + manage uremia + improve QOL</p>

        <p><strong>1. Renal diet ✨ — cornerstone (all stages with azotemia):</strong></p>
        <ul>
          <li>Royal Canin Renal, Hill's k/d, Purina NF</li>
          <li>Restricted protein (high-quality), restricted phosphorus, ↑ omega-3, ↑ B-vitamins, alkalinizing</li>
          <li>Cat: prefers wet food (hydration); transition slowly</li>
          <li>If refuses renal diet: prioritize calorie intake over diet (cachexia worse than slightly higher P)</li>
          <li>Improves survival significantly in cat CKD ✓</li>
        </ul>

        <p><strong>2. Hydration support:</strong></p>
        <ul>
          <li>Multiple water sources, fountains</li>
          <li>Wet food preferred</li>
          <li><strong>SQ fluids (LRS) at home</strong> ✨ — cat: 100-150 mL 2-3×/wk; dog: 10-20 mL/kg as needed</li>
          <li>Owner training simple — pinch tent of skin, insert butterfly</li>
          <li>Improves QOL dramatically</li>
        </ul>

        <p><strong>3. Phosphate management ✨:</strong></p>
        <ul>
          <li>Goal: P &lt; 4.5 mg/dL (Stage 2), &lt; 5.0 (Stage 3), &lt; 6.0 (Stage 4)</li>
          <li>Renal diet first — usually adequate Stage 2</li>
          <li><strong>Phosphate binders</strong> if diet insufficient:
            <ul>
              <li>Aluminum hydroxide 30-90 mg/kg/day with meals (cheap, effective)</li>
              <li>Calcium carbonate (caution Ca level)</li>
              <li>Lanthanum carbonate (Renalzin, Ipakitine)</li>
              <li>Sevelamer (Renagel) — non-absorbable, premium</li>
            </ul>
          </li>
          <li>Recheck P q4-6 wk, adjust dose</li>
        </ul>

        <p><strong>4. Hypertension control:</strong></p>
        <ul>
          <li>Indication: persistent BP &gt; 160 mmHg with end-organ damage; or &gt; 180 regardless</li>
          <li><strong>Amlodipine (cat) 0.625-1.25 mg/cat PO q24h</strong> ✨ — first-line
            <ul>
              <li>Dog: 0.1-0.5 mg/kg PO q24h</li>
            </ul>
          </li>
          <li><strong>ACE inhibitors</strong> (benazepril 0.25-0.5 mg/kg PO q24h, enalapril similar):
            <ul>
              <li>Adjunct or first-line for proteinuric CKD</li>
              <li>Reduces glomerular pressure</li>
              <li>Monitor Cr (small ↑ acceptable, large ↑ = stop)</li>
            </ul>
          </li>
          <li><strong>Telmisartan (Semintra)</strong> 1-3 mg/kg PO q24h — ARB; cat-licensed for proteinuria + HT</li>
          <li>Avoid ACEi/ARB in dehydrated patient</li>
        </ul>

        <p><strong>5. Proteinuria management (UPC &gt; 0.5 dog, &gt; 0.4 cat):</strong></p>
        <ul>
          <li>ACE inhibitor (benazepril) or telmisartan ✨</li>
          <li>Renal diet</li>
          <li>Omega-3 supplementation</li>
          <li>Recheck UPC q4-6 wk, adjust</li>
        </ul>

        <p><strong>6. Anemia management:</strong></p>
        <ul>
          <li>HCT &lt; 25% with clinical signs:
            <ul>
              <li><strong>Darbepoetin (Aranesp) 1 µg/kg SC weekly</strong> ✨ → adjust to maintain HCT 30-40%</li>
              <li>Or epoetin alfa 100 U/kg SC 3×/wk</li>
              <li>Iron supplementation IV before starting</li>
              <li>Caution: pure red cell aplasia rare with epoetin (less with darbe)</li>
            </ul>
          </li>
          <li>Severe symptomatic — pRBC transfusion bridge</li>
        </ul>

        <p><strong>7. Hypokalemia (cat especially):</strong></p>
        <ul>
          <li><strong>Potassium gluconate 2-4 mEq/cat PO q12-24h</strong> ✨ (Tumil-K, RenaKare)</li>
          <li>Recheck K q2-4 wk; adjust</li>
        </ul>

        <p><strong>8. Acidosis:</strong></p>
        <ul>
          <li>Sodium bicarbonate 8-12 mg/kg PO q12h ถ้า bicarb &lt; 16 mEq/L</li>
          <li>Or potassium citrate</li>
        </ul>

        <p><strong>9. Anti-emetics + appetite stimulants:</strong></p>
        <ul>
          <li>Maropitant 2 mg/kg PO q24h ✨</li>
          <li>Ondansetron 0.5 mg/kg PO q8-12h (refractory)</li>
          <li>Mirtazapine 1.88-3.75 mg/cat PO q48h or transdermal (Mirataz) — appetite stimulant ✨</li>
          <li>Capromorelin (Entyce/Elura) — ghrelin agonist</li>
        </ul>

        <p><strong>10. Acid suppression for uremic gastritis:</strong></p>
        <ul>
          <li>Famotidine 0.5-1 mg/kg PO q12h, or omeprazole 1 mg/kg PO q24h</li>
          <li>Sucralfate ถ้ามี hematemesis/melena</li>
        </ul>

        <p><strong>11. Treat concurrent disease:</strong></p>
        <ul>
          <li>UTI: culture-based antibiotics (long course 3-4 wk if pyelo)</li>
          <li>Hyperthyroid: methimazole / definitive (caution unmasking CKD progression)</li>
          <li>DM: insulin, monitor closely</li>
        </ul>

        <p><strong>Monitoring schedule:</strong></p>
        <ul>
          <li>Stage 1: q6 mo</li>
          <li>Stage 2: q3-4 mo</li>
          <li>Stage 3: q1-3 mo</li>
          <li>Stage 4: q1 mo or more often</li>
          <li>Each visit: weight, BCS, hydration, BP, Cr/SDMA, P, K, UPC, UA</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Uremic crisis (acute decompensation)</li>
          <li>Hypertensive emergencies (retinal detachment, neuro signs) ✗</li>
          <li>Severe hyperphosphatemia → secondary HPT, soft tissue mineralization</li>
          <li>Refractory anemia</li>
          <li>Sepsis (immunocompromised)</li>
          <li>Calcium phosphate metastatic mineralization</li>
          <li>Cachexia</li>
          <li>End-stage uremia → death/euthanasia</li>
        </ul>
        <p><strong>Prognosis (median survival from diagnosis):</strong></p>
        <ul>
          <li><strong>Cat:</strong>
            <ul>
              <li>Stage 1: &gt; 3 years</li>
              <li>Stage 2: 1-3 years</li>
              <li>Stage 3: 1-2 years (highly variable)</li>
              <li>Stage 4: months</li>
            </ul>
          </li>
          <li><strong>Dog (more aggressive):</strong>
            <ul>
              <li>Stage 2: ~ 1-1.5 years</li>
              <li>Stage 3: ~ 200-400 days</li>
              <li>Stage 4: ~ 100-150 days</li>
              <li>Proteinuric forms worse</li>
            </ul>
          </li>
          <li>Negative prognostic factors: high P, severe proteinuria, severe HT, anemia, low K (cat)</li>
          <li>Renal diet adherence + comprehensive management = significantly better outcomes ✓</li>
        </ul>
        <div class="callout">💡 <strong>"CKD แมว = manageable disease"</strong> ✨ — diagnosis early stage + diet + hydration + manage P/K/BP/anemia → quality of life ดี + ยืดอายุได้ปี ๆ. SQ fluids ที่บ้าน เป็นอุปกรณ์ลับสำหรับ owner</div>
      `,
    },
  },

  /* ---------- Ch 42 · UTI / Bacterial Cystitis ---------- */
  {
    id: 'urinary-tract-infection',
    titleEn: 'Bacterial Urinary Tract Infection (UTI)',
    titleTh: 'ติดเชื้อทางเดินปัสสาวะ',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['UTI', 'cystitis', 'pyelonephritis', 'E. coli', 'Staphylococcus', 'amoxicillin', 'enrofloxacin', 'culture', 'recurrent UTI', 'subclinical bacteriuria'],
    aliases: ['cystitis', 'urinary infection', 'UTI', 'pyelonephritis', 'ติดเชื้อปัสสาวะ', 'กระเพาะปัสสาวะอักเสบ'],
    source: 'Ch. 42 · pp. 706–712',
    sections: {
      definition: `
        <p>การติดเชื้อแบคทีเรียในทางเดินปัสสาวะ — แบ่งตาม:</p>
        <ul>
          <li><strong>Sporadic UTI</strong> — &lt; 3 ครั้ง/ปี ในตัวที่สุขภาพดี</li>
          <li><strong>Recurrent UTI</strong> ✨ — &gt; 3 ครั้ง/ปี (relapse vs reinfection)</li>
          <li><strong>Subclinical bacteriuria</strong> — bacteria + ไม่มี signs (มัก ไม่ต้อง treat)</li>
          <li><strong>Pyelonephritis</strong> — ติดเชื้อขึ้นไปถึง renal pelvis ✗</li>
          <li><strong>Cat:</strong> UTI <em>เจอน้อย</em> — &lt; 5% ของ lower urinary signs (ส่วนใหญ่เป็น FIC แทน) ✨</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common pathogens:</strong></p>
        <ul>
          <li><strong>E. coli</strong> ✨ — &gt; 50% ของเคส</li>
          <li>Staphylococcus pseudintermedius</li>
          <li>Proteus mirabilis (struvite-associated)</li>
          <li>Streptococcus</li>
          <li>Enterococcus</li>
          <li>Klebsiella, Pseudomonas (resistant, hospital-associated)</li>
          <li>Mycoplasma (special culture needed)</li>
        </ul>
        <p><strong>Risk factors:</strong></p>
        <ul>
          <li>Female (anatomy — short urethra)</li>
          <li>Anatomic abnormality: ectopic ureter, recessed vulva, vulvar fold dermatitis</li>
          <li>Indwelling urinary catheter ✗</li>
          <li>Bladder dysfunction: incontinence, urinary retention, neurogenic</li>
          <li>Urolithiasis (especially struvite)</li>
          <li>Bladder neoplasia (TCC)</li>
          <li>Immunocompromised: <strong>DM, Cushing's, CKD, immunosuppressive therapy</strong> ✨</li>
          <li>Dilute urine (CKD, DI)</li>
          <li>Prostatic disease (intact male)</li>
          <li>Perineal hernia, fecal incontinence</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Ascending infection from urethra/perineum (most common)</li>
          <li>Hematogenous (rare — pyelonephritis from bacteremia)</li>
          <li>Bacterial adherence to uroepithelium → inflammation, dysuria, pollakiuria</li>
          <li>Pyelonephritis: ascending from bladder up ureter → renal pelvis → renal parenchyma → AKI</li>
          <li>Persistent infection → biofilm formation, struvite urolith development</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Bacterial cystitis (lower):</strong></p>
        <ul>
          <li><strong>Pollakiuria</strong> ✨ — frequent small volume</li>
          <li><strong>Stranguria, dysuria</strong></li>
          <li>Hematuria (often end-of-stream)</li>
          <li>Periuria (going outside litter box)</li>
          <li>Foul-smelling, cloudy urine</li>
          <li>Often asymptomatic in dog with concurrent dz (Cushing's, DM)</li>
        </ul>
        <p><strong>Pyelonephritis (upper) ✗:</strong></p>
        <ul>
          <li>Fever, lethargy, anorexia</li>
          <li>Vomiting</li>
          <li>PU/PD</li>
          <li>Painful kidney(s) on palpation</li>
          <li>Sometimes acute kidney injury signs</li>
          <li>Can be subtle in chronic cases — only ↑ Cr + dilute urine</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Urinalysis (UA) ✨:</strong></p>
        <ul>
          <li>Pyuria (WBC &gt; 5/hpf) — typical</li>
          <li>Bacteriuria — visible cocci/rods</li>
          <li>Hematuria</li>
          <li>Proteinuria (mild)</li>
          <li>pH variable (alkaline with urease producers — Proteus, Staph, Klebsiella → struvite)</li>
          <li>Note: pyuria can be absent in immunocompromised (DM, Cushing's, chemo) ✨</li>
        </ul>

        <p><strong>Urine culture &amp; susceptibility ✨ — gold standard</strong></p>
        <ul>
          <li><strong>Cystocentesis sample</strong> (sterile)</li>
          <li>Quantitative count (significant: &gt; 1000 CFU/mL cysto, &gt; 10,000 catheter, &gt; 100,000 free-catch)</li>
          <li>Susceptibility testing — guides antibiotic choice</li>
          <li><strong>Always culture in:</strong> first UTI in dog (some recommend); recurrent; complicated; pyelonephritis suspect; immunocompromised; before/after treatment of complicated cases</li>
        </ul>

        <p><strong>Imaging (recurrent / complicated):</strong></p>
        <ul>
          <li>Abdominal US — bladder wall thickness, urolith, mass, prostate, kidney size/architecture</li>
          <li>Abdominal rad — radiopaque uroliths</li>
          <li>Contrast cystography or CT — anatomic abnormalities (ectopic ureter)</li>
        </ul>

        <p><strong>Pyelonephritis workup:</strong></p>
        <ul>
          <li>CBC: leukocytosis with left shift</li>
          <li>Biochem: ↑ Cr (acute or worsening), ↑ ALP variable</li>
          <li>UA: pyuria, bacteriuria, granular casts (active tubular damage)</li>
          <li>Urine culture POSITIVE</li>
          <li>US: pelvic dilation, ↑ echogenicity</li>
          <li>SDMA, BUN/Cr trend</li>
        </ul>

        <p><strong>Recurrent UTI (&gt; 3/year) — investigate:</strong></p>
        <ul>
          <li>Anatomic abnormality (US, CT, cystoscopy)</li>
          <li>Underlying disease (DM, Cushing's, CKD, hyperthyroid)</li>
          <li>Culture each episode + susceptibility</li>
          <li>Differentiate relapse (same organism) vs reinfection (different)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Feline idiopathic cystitis (FIC) ✨ — cat: most common (~ 60-70% of LUTS in cat)</li>
          <li>Urolithiasis</li>
          <li>Bladder neoplasia (TCC, especially older female Scottie, Sheltie, terriers)</li>
          <li>Polypoid cystitis</li>
          <li>Urethral mass / stricture</li>
          <li>Prostatic disease (intact male — BPH, prostatitis, abscess, neoplasia)</li>
          <li>Pseudohyphae / fungal cystitis (rare, immunocompromised)</li>
          <li>Behavioral periuria (cat)</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Sporadic UTI (uncomplicated, dog) ✨:</strong></p>
        <ul>
          <li><strong>Empirical first-line: amoxicillin 11-15 mg/kg PO q8h × 3-5 days</strong> ✨ (modern shorter course)
            <ul>
              <li>หรือ amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 3-5 d</li>
              <li>Most E. coli, Staph, Streptococcus susceptible</li>
            </ul>
          </li>
          <li>Trimethoprim-sulfa 15-30 mg/kg PO q12h × 3-5 d (alternative)</li>
          <li>Fluoroquinolones — reserve for resistant/complicated; not first-line empirical</li>
          <li>Recheck UA + culture <em>only if signs persist</em>; don't culture if cured clinically (modern guidelines)</li>
        </ul>

        <p><strong>2. Complicated UTI (recurrent, immunocompromised, anatomic abnormality):</strong></p>
        <ul>
          <li><strong>Culture-based</strong> antibiotic therapy ✨</li>
          <li>Duration: 7-14 d (some experts 4 wk if complicated)</li>
          <li>Recheck culture 5-7 d after starting (clinical), 5-7 d post-treatment (microbiologic cure)</li>
          <li>Address underlying cause (DM control, Cushing's treatment, anatomic correction)</li>
          <li>Pulse therapy / prophylaxis controversial — generally avoid</li>
        </ul>

        <p><strong>3. Pyelonephritis ✗ (upper UTI):</strong></p>
        <ul>
          <li><strong>Empirical: Enrofloxacin 5-10 mg/kg PO/IV q24h</strong> ✨ (penetrates renal tissue)
            <ul>
              <li>Or marbofloxacin 2.75-5.5 mg/kg PO q24h</li>
            </ul>
          </li>
          <li>Once culture: tailor to susceptibility</li>
          <li><strong>Duration: 4-6 weeks minimum</strong> ✨</li>
          <li>Recheck culture at 7 d (must be negative), 1 wk post-treatment, then 4-6 wk later</li>
          <li>IV fluids if dehydrated/azotemic</li>
          <li>Repeat US to monitor</li>
        </ul>

        <p><strong>4. Subclinical bacteriuria:</strong></p>
        <ul>
          <li><strong>USUALLY DO NOT TREAT</strong> ✨ — modern guidelines</li>
          <li>Exception: pre-surgical (urethrostomy, urinary tract surgery), immunocompromised with high infection risk, struvite-forming organism (Proteus)</li>
          <li>Treating subclinical bacteriuria → unnecessary antibiotic exposure, resistance</li>
        </ul>

        <p><strong>5. Catheter-associated UTI:</strong></p>
        <ul>
          <li>Remove catheter ASAP (don't leave indwelling unnecessarily)</li>
          <li>Don't culture catheter tip — culture urine after removal</li>
          <li>Treat only if clinical signs after removal</li>
        </ul>

        <p><strong>6. Antimicrobial stewardship principles ✨:</strong></p>
        <ul>
          <li>Choose narrow-spectrum first-line</li>
          <li>Reserve fluoroquinolones for documented resistance / pyelonephritis</li>
          <li>Reserve carbapenems for ESBL E. coli</li>
          <li>Shorter is better (3-5 d for sporadic UTI)</li>
          <li>Don't treat asymptomatic bacteriuria</li>
        </ul>

        <p><strong>7. Cranberry / D-mannose / probiotics:</strong></p>
        <ul>
          <li>Limited evidence in pets</li>
          <li>Some owners use; not contraindicated</li>
          <li>Don't replace antibiotics for active infection</li>
        </ul>

        <p><strong>Address underlying issues:</strong></p>
        <ul>
          <li>Recessed vulva — episioplasty</li>
          <li>Vulvar fold dermatitis — clip, clean, weight loss</li>
          <li>DM — improve glycemic control</li>
          <li>Cushing's — trilostane</li>
          <li>Urolithiasis — address stones</li>
          <li>Ectopic ureter — surgical correction</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Pyelonephritis → AKI / progression to CKD</li>
          <li>Sepsis (rare, severe pyelonephritis)</li>
          <li>Urolithiasis (struvite from urease producers)</li>
          <li>Recurrent infection cycle</li>
          <li>Antimicrobial resistance development (overtreatment)</li>
          <li>Bladder wall thickening, fibrosis (chronic)</li>
          <li>Prostatic abscess (intact male)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Sporadic uncomplicated UTI: <strong>excellent</strong> ✓</li>
          <li>Pyelonephritis with prompt treatment: good if no permanent renal damage</li>
          <li>Recurrent UTI (anatomic correction): good after correction</li>
          <li>Recurrent UTI (immunocompromised): variable; depends on underlying control</li>
          <li>Resistant pathogens: more challenging</li>
        </ul>
        <div class="callout">💡 <strong>Cat lower urinary signs ≠ UTI usually</strong> ✨ — &lt; 5% เป็น UTI; ส่วนใหญ่เป็น <strong>FIC</strong>. ใน cat &lt; 10 ปี ที่ไม่มี comorbidity มักไม่ต้องเริ่มด้วย antibiotic. Culture ก่อน treat</div>
      `,
    },
  },

  /* ---------- Ch 44 · Feline Lower Urinary Tract Disease (FLUTD) / FIC ---------- */
  {
    id: 'flutd-fic',
    titleEn: 'Feline Lower Urinary Tract Disease (FLUTD) &amp; FIC',
    titleTh: 'FLUTD / FIC — โรคทางเดินปัสสาวะส่วนล่างในแมว',
    type: 'disease',
    system: 'urinary',
    species: ['cat'],
    tags: ['FLUTD', 'FIC', 'feline idiopathic cystitis', 'Pandora syndrome', 'urethral obstruction', 'urethral plug', 'environmental enrichment', 'pheromone', 'amitriptyline', 'gabapentin'],
    aliases: ['FLUTD', 'FIC', 'feline idiopathic cystitis', 'cat blocked', 'แมวขัดเบา', 'แมวอุดตัน'],
    source: 'Ch. 44 · pp. 743–751',
    sections: {
      definition: `
        <p>กลุ่มอาการของโรคทางเดินปัสสาวะส่วนล่างในแมว — เจอบ่อยมาก!</p>
        <ul>
          <li><strong>FIC (Feline Idiopathic Cystitis)</strong> ✨ — most common (60-70%); sterile inflammation, multifactorial</li>
          <li>Urolithiasis (struvite, CaOx) — ~ 15-20%</li>
          <li>Urethral plug — protein matrix + crystals (cat male)</li>
          <li>UTI — &lt; 5%</li>
          <li>Anatomic, neoplastic — rare</li>
          <li><strong>Urethral obstruction</strong> ✗ — life-threatening emergency in male cat</li>
          <li>Now considered part of <strong>"Pandora syndrome"</strong> — multi-system stress-related disorder</li>
        </ul>
      `,
      etiology: `
        <p><strong>FIC pathophysiology — multifactorial:</strong></p>
        <ul>
          <li>Defective bladder mucosal barrier (↓ GAG layer)</li>
          <li>Altered sympathetic nervous system response (HPA axis dysregulation)</li>
          <li>Stress is major trigger ✨ — moves, new pet, changes in routine, multi-cat household</li>
          <li>↑ pain perception, central sensitization</li>
          <li>Genetic predisposition</li>
          <li>Indoor confinement (sedentary, stress)</li>
        </ul>
        <p><strong>Risk factors for FIC:</strong></p>
        <ul>
          <li>Indoor lifestyle</li>
          <li>Multi-cat household / conflict</li>
          <li>Obesity</li>
          <li>Stressors (recent change)</li>
          <li>Dry-food only diet</li>
          <li>Limited litter box access</li>
          <li>Young to middle-aged (2-7 years)</li>
        </ul>
        <p><strong>Urethral obstruction (male cat) ✗:</strong></p>
        <ul>
          <li>Urethral plug (matrix + struvite)</li>
          <li>Urolith</li>
          <li>Severe FIC with urethral spasm</li>
          <li>Stricture (post-trauma, post-catheterization)</li>
          <li>Mass (rare)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>FIC: complex stress-pain-bladder axis</li>
          <li>Bladder wall edema, hyperemia, submucosal hemorrhage</li>
          <li>Disrupted GAG layer → urine irritates underlying tissue</li>
          <li>Neurogenic inflammation</li>
          <li>Most episodes self-limiting 3-7 days</li>
          <li>Obstruction: post-renal AKI, hyperkalemia, bladder rupture</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Non-obstructive FIC / FLUTD:</strong></p>
        <ul>
          <li>Pollakiuria, stranguria, dysuria</li>
          <li>Hematuria (gross or microscopic) ✨</li>
          <li><strong>Periuria</strong> ✨ — peeing outside litter box (often misinterpreted as behavioral)</li>
          <li>Excessive licking of perineum</li>
          <li>Vocalization while urinating</li>
          <li>Episodic — flares 3-7 days, resolves, may recur</li>
        </ul>
        <p><strong>Urethral obstruction (male cat) — emergency ✗:</strong></p>
        <ul>
          <li>Repeated unproductive trips to litter box</li>
          <li><strong>Vocalization, restlessness</strong></li>
          <li><strong>Distended firm painful bladder</strong> ✨ — palpable like baseball</li>
          <li>Eventually: lethargy → collapse → bradycardia (hyperK) → coma → death within 24-48h ✗</li>
          <li>Vomiting (uremic)</li>
          <li>Hypothermia (severe)</li>
          <li>Owners often think "constipation" — must distinguish ✨</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Non-obstructive FLUTD/FIC:</strong></p>
        <ul>
          <li>UA — hematuria, occasionally crystals (struvite, CaOx); rarely WBC + bacteria</li>
          <li>Urine culture (if pyuria, immunocompromised, &gt; 10 yr) — usually negative ✨</li>
          <li>Abdominal rad — radiopaque uroliths</li>
          <li>Abdominal US — bladder wall thickness, uroliths, masses</li>
          <li>FIC = diagnosis of exclusion ✨</li>
        </ul>

        <p><strong>Urethral obstruction:</strong></p>
        <ul>
          <li><strong>Physical exam — distended firm painful bladder</strong> ✨ (don't squeeze too hard — rupture risk)</li>
          <li>Lab:
            <ul>
              <li>Severe hyperkalemia (often &gt; 7-8 mEq/L) ✗</li>
              <li>Severe metabolic acidosis</li>
              <li>↑ BUN, Cr (post-renal azotemia)</li>
              <li>Hyponatremia, hyperphosphatemia</li>
              <li>Stress leukogram</li>
            </ul>
          </li>
          <li>ECG — bradycardia, peaked T waves, prolonged PR, atrial standstill (hyperK changes ✗)</li>
          <li>Imaging after stabilization: rad/US for cause</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Bacterial UTI (uncommon in young cat)</li>
          <li>Urolithiasis</li>
          <li>Bladder neoplasia (TCC — older cat, persistent signs despite treatment)</li>
          <li>Behavioral periuria (no signs of dysuria; clean cytology)</li>
          <li>Constipation (very different — not stranguria; tenesmus + hard stool palpable)</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Urethral obstruction — emergency protocol ✨ ✗</strong></p>
        <ul>
          <li><strong>Step 1 - Stabilize hyperkalemia FIRST (before anesthesia):</strong>
            <ul>
              <li>IV catheter → bolus 10-20 mL/kg LRS or Plasmalyte (avoid K-containing if K extremely high; LRS K = 4 mEq/L is OK in most cases — reverses post-renal acidosis)</li>
              <li>Calcium gluconate 10% 0.5-1 mL/kg slow IV (cardioprotection)</li>
              <li>Regular insulin 0.25 U/kg IV + dextrose 50% 1 mL/kg (drives K intracellular)</li>
              <li>Sodium bicarbonate 1-2 mEq/kg IV slow if severe acidosis</li>
              <li>Beta-agonist (terbutaline) — adjunct</li>
              <li>Recheck K + ECG before sedation</li>
            </ul>
          </li>
          <li><strong>Step 2 - Anesthesia + relieve obstruction:</strong>
            <ul>
              <li>Sedation: propofol + opioid (low dose), or ketamine 2-5 mg/kg + midazolam (caution if severely uremic)</li>
              <li>Cystocentesis to decompress bladder (relieves pressure + reduces ureteral back-pressure on kidneys)</li>
              <li>Urethral catheterization with sterile technique:
                <ul>
                  <li>Open-ended polypropylene catheter (Tom Cat) → flush retrograde to dislodge plug</li>
                  <li>Once unblocked, place soft red rubber catheter</li>
                  <li>Suture in place + closed collection system</li>
                </ul>
              </li>
              <li>Empty bladder, lavage with saline until clear</li>
            </ul>
          </li>
          <li><strong>Step 3 - Post-obstruction management:</strong>
            <ul>
              <li>Indwelling catheter 24-48h (until urine clears, K normalizes, urine output good)</li>
              <li>IV fluids — 2-3× maintenance to flush + manage post-obstructive diuresis (can be massive)</li>
              <li>Monitor K, BUN/Cr q12h until normal</li>
              <li>Pain mgmt: buprenorphine 0.02 mg/kg IV/IM/OTM q6-8h</li>
              <li>Anti-spasmodic for urethra:
                <ul>
                  <li>Prazosin 0.25-0.5 mg/cat PO q12h ✨ — alpha blocker, reduce urethral spasm</li>
                  <li>Or tamsulosin 0.004-0.006 mg/kg PO q24h</li>
                  <li>Acepromazine 0.05-0.1 mg/kg SC/PO q8h — adjunct</li>
                </ul>
              </li>
              <li>Continue 1-2 weeks after catheter removal</li>
            </ul>
          </li>
          <li><strong>Step 4 - Long-term prevention:</strong>
            <ul>
              <li>FIC management (see below)</li>
              <li>Wet diet, environmental enrichment</li>
              <li>Owner education — recognize early signs</li>
              <li>Recurrence rate ~ 30-40% within 6 months</li>
              <li>Consider <strong>perineal urethrostomy (PU)</strong> ✨ if 2-3+ obstruction episodes — surgical widening; less recurrence</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Non-obstructive FIC — multimodal environmental therapy (MEMO) ✨</strong></p>

        <p><strong>Environmental enrichment (cornerstone — &gt; medication):</strong></p>
        <ul>
          <li><strong>Litter boxes:</strong> n cats + 1 boxes; clean daily; large; uncovered preferred; multiple locations; quiet; clay litter unscented usually preferred</li>
          <li><strong>Resources distributed:</strong> food, water, scratching, perches, hiding spots — separate from each other + away from litter</li>
          <li><strong>Vertical space:</strong> cat trees, shelves</li>
          <li><strong>Hiding/safe spots:</strong> boxes, beds in quiet areas</li>
          <li><strong>Play / hunting simulation:</strong> wand toys, food puzzles, 10-15 min/day interactive play</li>
          <li><strong>Routine consistency:</strong> feeding, playtime predictable</li>
          <li><strong>Reduce stressors:</strong> identify + address (new pet, construction, schedule changes)</li>
          <li><strong>Multi-cat conflict:</strong> separate resources, watch for bullying, consider rehoming if severe</li>
        </ul>

        <p><strong>Diet:</strong></p>
        <ul>
          <li><strong>Wet food (canned)</strong> ✨ — increases water intake, dilutes urine
            <ul>
              <li>Hill's c/d Multicare Stress, Royal Canin Urinary SO Calm</li>
              <li>Improves outcomes vs dry food alone</li>
            </ul>
          </li>
          <li>Add water/broth to food</li>
          <li>Multiple water sources (fountains often preferred ✨)</li>
        </ul>

        <p><strong>Pheromones:</strong></p>
        <ul>
          <li><strong>Feliway Classic / Multicat (synthetic feline facial pheromone)</strong> ✨ — diffuser plug-in; reduce stress
            <ul>
              <li>Place in main areas where cat spends time</li>
              <li>Refill q4 wk</li>
            </ul>
          </li>
        </ul>

        <p><strong>Pain management (acute episode):</strong></p>
        <ul>
          <li><strong>Buprenorphine 0.01-0.02 mg/kg OTM q6-8h × 3-5 d</strong> ✨</li>
          <li>Avoid NSAIDs in dehydrated cat or acute episode</li>
          <li>Can use meloxicam if hydration confirmed + no kidney concerns</li>
        </ul>

        <p><strong>Anti-spasmodic / smooth muscle relaxant (urethral spasm):</strong></p>
        <ul>
          <li>Prazosin 0.25-0.5 mg/cat PO q12h × 1-2 wk</li>
          <li>Acepromazine 0.05-0.1 mg/cat PO q8-12h</li>
        </ul>

        <p><strong>Refractory FIC — adjunctive medications:</strong></p>
        <ul>
          <li><strong>Amitriptyline 5-10 mg/cat PO q24h at night</strong> ✨ — TCA; for severe recurrent FIC; takes 4-6 wk to see effect
            <ul>
              <li>Anti-inflammatory + analgesic + anti-anxiety</li>
              <li>Side effects: sedation, weight gain, urinary retention paradoxically</li>
              <li>Reserved for refractory cases</li>
            </ul>
          </li>
          <li><strong>Gabapentin 5-10 mg/kg PO q8-12h</strong> — neuropathic pain + anxiety</li>
          <li>Glucosamine + chondroitin (Cystaid, Cosequin) — repair GAG layer; debated efficacy</li>
          <li>Pentosan polysulfate (Elmiron) — GAG-like; limited availability</li>
          <li>Fluoxetine 0.5-1 mg/kg PO q24h — refractory FIC with strong stress component</li>
        </ul>

        <p><strong>Antibiotics — NOT routinely indicated in FIC ✨</strong></p>
        <ul>
          <li>Common mistake: empirical antibiotic for "suspected UTI"</li>
          <li>UTI &lt; 5% in young cat with LUTS</li>
          <li>Use only if culture-proven OR cat &gt; 10 yr / immunocompromised / dilute urine</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Urethral obstruction → death within 24-48h</strong> ✗</li>
          <li>Bladder rupture (delayed diagnosis or attempted manual decompression)</li>
          <li>Hyperkalemic cardiac arrest</li>
          <li>Post-renal AKI → CKD progression</li>
          <li>Recurrent obstruction (30-40% within 6 mo)</li>
          <li>Stricture from catheterization trauma</li>
          <li>Catheter-associated UTI</li>
          <li>FIC recurrence (~ 50% in 6 mo without environmental changes)</li>
          <li>Behavioral / relinquishment (chronic periuria)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Non-obstructive FIC with proper environmental management: <strong>good</strong> — most flares self-resolve in 3-7 d ✓</li>
          <li>FIC long-term: variable; recurrence common but manageable</li>
          <li>First obstruction with prompt treatment: good (mortality 5-10% in modern era)</li>
          <li>Recurrent obstruction → PU surgery: excellent post-op (resolves obstruction permanently; complication rate 25-30% mostly minor)</li>
          <li>Severely uremic at presentation (K &gt; 8, severe acidosis): guarded</li>
        </ul>
        <div class="callout">⚠️ <strong>Owner education:</strong> "แมวตัวผู้ที่นั่งในกะบะแล้วเบ่งไม่ออก หรือร้องเสียงดัง = emergency ภายใน 24 ชม.! โทรหาหมอทันที — ไม่ใช่ท้องผูก ✗"<br><br>"FIC ไม่ใช่ติดเชื้อ — เป็นเรื่อง stress + bladder. การให้ antibiotic ไม่ช่วย. ต้องปรับสิ่งแวดล้อม + อาหารเปียก + Feliway"</div>
      `,
    },
  },

  /* ---------- Ch 43 · Urolithiasis ---------- */
  {
    id: 'urolithiasis',
    titleEn: 'Canine &amp; Feline Urolithiasis',
    titleTh: 'นิ่วทางเดินปัสสาวะ',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['urolith', 'struvite', 'calcium oxalate', 'urate', 'cystine', 'cystotomy', 'voiding urohydropropulsion', 'dietary dissolution', 'Dalmatian', 'Schnauzer'],
    aliases: ['bladder stones', 'kidney stones', 'urolith', 'นิ่ว', 'นิ่วในกระเพาะปัสสาวะ'],
    source: 'Ch. 43 · pp. 712–743',
    sections: {
      definition: `
        <p>การก่อ <strong>uroliths (นิ่ว)</strong> ใน urinary tract — kidney, ureter, bladder, urethra</p>
        <ul>
          <li>เจอบ่อยในคลินิก — recurrent in many cases</li>
          <li>Composition แตกต่างกัน → treatment + prevention ต่างกัน</li>
          <li><strong>Stone analysis</strong> ✨ — essential for proper management</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common types in dog:</strong></p>
        <ul>
          <li><strong>Struvite (magnesium ammonium phosphate)</strong> ~ 40% ✨
            <ul>
              <li>Female &gt; male</li>
              <li><strong>UTI-associated</strong> — Proteus, Staph, Klebsiella (urease producers raise pH + ammonia)</li>
              <li>Alkaline urine</li>
              <li>Radiopaque</li>
            </ul>
          </li>
          <li><strong>Calcium oxalate (CaOx)</strong> ~ 35-40% ✨
            <ul>
              <li>Mini Schnauzer, Yorkie, Bichon, Lhasa Apso, Shih Tzu — predisposed ✨</li>
              <li>Male &gt; female</li>
              <li>Acidic urine, hypercalciuria</li>
              <li>Radiopaque</li>
              <li>Rule out hypercalcemia (PTH, PTHrp, vitamin D toxicity)</li>
              <li><strong>Cannot be dissolved</strong> — must remove ✗</li>
            </ul>
          </li>
          <li><strong>Urate</strong> ~ 5-10%
            <ul>
              <li><strong>Dalmatian</strong> ✨ — purine metabolism defect (autosomal recessive SLC2A9 mutation, almost all carriers)</li>
              <li>English Bulldog</li>
              <li><strong>Hepatic dysfunction (PSS, severe hepatitis)</strong> ✨ — failed urea cycle</li>
              <li>Acidic urine</li>
              <li>Radiolucent — needs US</li>
            </ul>
          </li>
          <li><strong>Cystine</strong> ~ 1-2%
            <ul>
              <li>Newfoundland, English Bulldog, Mastiff (some), Dachshund</li>
              <li>Genetic defect renal tubular reabsorption</li>
              <li>Acidic urine</li>
              <li>Faintly radiopaque</li>
            </ul>
          </li>
          <li><strong>Mixed/compound</strong> — common</li>
          <li>Silica, calcium phosphate — uncommon</li>
        </ul>
        <p><strong>Common types in cat:</strong></p>
        <ul>
          <li><strong>Calcium oxalate</strong> ✨ ~ 50% — increasing trend
            <ul>
              <li>Burmese, Persian, Himalayan predisposed</li>
              <li>Older cats</li>
            </ul>
          </li>
          <li><strong>Struvite</strong> ✨ ~ 40% — different from dog!
            <ul>
              <li>Cat struvite USUALLY <strong>STERILE</strong> (not UTI-associated like dog) ✨</li>
              <li>Younger cats often</li>
              <li>Diet-associated (high pH, high Mg/P)</li>
            </ul>
          </li>
          <li>Urate, cystine — uncommon</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Supersaturation of urine with mineral → crystal precipitation → growth into urolith</li>
          <li>Factors: pH, mineral concentration, urine volume, infection, diet, anatomic stagnation</li>
          <li>Clinical signs from: bladder wall irritation, urethral obstruction, ureteral obstruction → hydronephrosis → AKI</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Lower urinary (bladder/urethra):</strong></p>
        <ul>
          <li>Pollakiuria, stranguria, dysuria</li>
          <li>Hematuria ✨</li>
          <li>Recurrent UTI (struvite especially)</li>
          <li>Urethral obstruction (especially male) ✗ — emergency</li>
        </ul>
        <p><strong>Upper urinary (kidney/ureter):</strong></p>
        <ul>
          <li>Often subclinical — incidental finding</li>
          <li>Acute ureteral obstruction: anorexia, vomiting, lethargy, painful kidney, AKI signs ✗</li>
          <li>Chronic — gradual CKD progression</li>
          <li>Cat: ureteral obstruction increasingly recognized; "big kidney little kidney" syndrome ✨</li>
          <li>Pyelonephritis with infected stones</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal radiograph</strong> ✨ — radiopaque stones (struvite, CaOx, mixed) — most uroliths visible
            <ul>
              <li>2 views (lateral + VD)</li>
              <li>Identify size, number, location</li>
            </ul>
          </li>
          <li><strong>Abdominal ultrasound</strong> ✨ — radiolucent stones (urate, cystine, occasionally CaOx), hydronephrosis, hydroureter, bladder wall</li>
          <li>Contrast cystography — small/radiolucent stones</li>
          <li>CT — gold standard for ureteral stones (cat)</li>
        </ul>
        <p><strong>Laboratory:</strong></p>
        <ul>
          <li>UA: pH, crystals (clue but not definitive — must analyze stones)</li>
          <li>Urine culture (struvite often UTI-associated dog)</li>
          <li>CBC, biochem (calcium for CaOx, BUN/Cr for ureteral obstruction)</li>
          <li>Bile acids if urate suspected (PSS)</li>
          <li>Ionized Ca + PTH if hypercalcemia</li>
        </ul>
        <p><strong>Stone analysis ✨ — essential:</strong></p>
        <ul>
          <li>Send recovered stones to lab (Minnesota Urolith Center, UC Davis)</li>
          <li>Quantitative analysis (core + outer layer)</li>
          <li>Determines treatment + prevention strategy</li>
        </ul>
      `,
      differential: `<p>FLUTD/FIC (cat), UTI, neoplasia, polyps</p>`,
      treatment: `
        <p><strong>Approach depends on stone type + location + clinical status:</strong></p>

        <p><strong>1. Struvite (dog) — DISSOLVABLE ✨</strong></p>
        <ul>
          <li>If UTI-associated: <strong>treat UTI first</strong> + dissolution diet
            <ul>
              <li>Hill's s/d, Royal Canin Urinary SO</li>
              <li>↓ protein, ↓ Mg, ↓ P, urinary acidifier</li>
              <li>Dissolves in 4-12 weeks</li>
              <li>Recheck UA + radiograph monthly</li>
            </ul>
          </li>
          <li>Antibiotics: full duration (7-14 d simple, 4-6 wk if pyelo)</li>
          <li>Often dissolves while still on diet without surgery</li>
        </ul>

        <p><strong>2. Struvite (cat) — DISSOLVABLE ✨</strong></p>
        <ul>
          <li>Royal Canin Urinary SO, Hill's c/d, Purina UR</li>
          <li>Acidify urine, ↓ Mg/P</li>
          <li>Dissolves in 4-8 weeks usually</li>
          <li>Wet food preferred</li>
          <li>UTI uncommon — antibiotics rarely needed</li>
        </ul>

        <p><strong>3. Calcium Oxalate — NON-DISSOLVABLE ✗ → must remove</strong></p>
        <ul>
          <li>Surgical or minimally invasive removal:
            <ul>
              <li><strong>Cystotomy</strong> — gold standard for bladder stones</li>
              <li><strong>Voiding urohydropropulsion (VUH)</strong> ✨ — small smooth stones (≤ 5 mm female, ≤ 3 mm male); fill bladder via catheter, hold cat upright, express manually → stones flush out urethra</li>
              <li><strong>Cystoscopy + basket retrieval</strong> — referral; female + small stones</li>
              <li><strong>Laparoscopic cystotomy</strong> — minimally invasive</li>
              <li><strong>Lithotripsy (laser, shock-wave)</strong> — referral; ureteral, kidney</li>
            </ul>
          </li>
          <li>Prevention diet:
            <ul>
              <li>Hill's c/d Multicare, Royal Canin Urinary SO + Calm, Purina UR</li>
              <li>Wet food (very important)</li>
              <li>↓ Ca, ↓ Na, alkalinizing</li>
              <li>Adequate protein</li>
            </ul>
          </li>
          <li>Address hypercalcemia (workup PTH, PTHrp, vitamin D)</li>
          <li>Potassium citrate 50-150 mg/kg PO q12h — alkalinize urine, citrate binds Ca</li>
          <li>Hydrochlorothiazide 2-4 mg/kg PO q12h — ↓ urine Ca (refractory)</li>
          <li>Recurrence rate &gt; 50% within 3 yr without prevention</li>
        </ul>

        <p><strong>4. Urate (Dalmatian / PSS):</strong></p>
        <ul>
          <li>Address PSS surgically if applicable</li>
          <li>Diet: Royal Canin Urinary UC, Hill's u/d — low purine, alkalinizing</li>
          <li>Allopurinol 10-15 mg/kg PO q12h — xanthine oxidase inhibitor (Dalmatian)</li>
          <li>Dissolution possible with diet + allopurinol; can take months</li>
          <li>Surgical removal if obstructive or non-responsive</li>
        </ul>

        <p><strong>5. Cystine:</strong></p>
        <ul>
          <li>Diet: Royal Canin Urinary UC, low protein/methionine, alkalinizing</li>
          <li>2-MPG (tiopronin) 15-20 mg/kg PO q12h — chelator</li>
          <li>D-penicillamine alternative</li>
          <li>Castration (intact male — hormonal influence)</li>
          <li>Surgical removal as needed</li>
        </ul>

        <p><strong>6. Urethral stone obstruction (male) ✗:</strong></p>
        <ul>
          <li>Stabilize hyperkalemia (cat protocol — see FLUTD entry)</li>
          <li>Retrograde flushing into bladder + cystotomy</li>
          <li>Or surgical urethrotomy / urethrostomy if severe</li>
        </ul>

        <p><strong>7. Ureteral stone (cat) ✨:</strong></p>
        <ul>
          <li>Acute obstruction = AKI emergency</li>
          <li>Medical management trial (24-48h): IV fluids, mannitol, prazosin, pain mgmt</li>
          <li>If not passing → <strong>SUB (subcutaneous ureteral bypass)</strong> or <strong>ureteral stent</strong> ✨ — referral; bypass obstruction</li>
          <li>Outcomes much better than traditional surgical (ureterotomy → high stricture rate)</li>
          <li>Bilateral SUBs sometimes needed</li>
        </ul>

        <p><strong>General prevention principles:</strong></p>
        <ul>
          <li>Wet food / increase water intake</li>
          <li>Stone-specific diet</li>
          <li>Recheck UA + imaging q3-6 mo</li>
          <li>Treat UTIs promptly</li>
          <li>Address underlying cause (PSS, hypercalcemia)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Urethral obstruction</strong> ✗ — male especially; AKI, hyperK, death</li>
          <li>Ureteral obstruction → hydronephrosis → renal damage / AKI</li>
          <li>Recurrent UTI (struvite cycle)</li>
          <li>Recurrence after removal (CaOx 50%+ at 3 yr)</li>
          <li>Surgical complications: dehiscence, leak, infection, stricture</li>
          <li>Bladder rupture (severe obstruction)</li>
          <li>CKD development from chronic obstruction</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Struvite dissolved + UTI controlled: <strong>excellent</strong> ✓</li>
          <li>CaOx with surgical removal + prevention: good but recurrence ~ 50% at 3 yr</li>
          <li>Urate (Dalmatian) with diet + allopurinol: good lifelong management</li>
          <li>Ureteral cat stones with SUB: 70-90% improvement</li>
          <li>Untreated obstructive: very poor without intervention</li>
        </ul>
        <div class="callout">💡 <strong>Stone analysis = roadmap:</strong> ทุกเคส uroliths ที่ remove ได้ → ส่ง analyze เสมอ ✨ — ต่างชนิด ต่าง treatment + prevention <br><br>Struvite (dog) = treat UTI + dissolution diet — ไม่ต้องผ่า<br>CaOx = ผ่าออก + prevention diet (recurrence สูง)<br>Urate Dalmatian = allopurinol + diet</div>
      `,
    },
  },

  /* ---------- Ch 40 · Glomerular Disease / PLN ---------- */
  {
    id: 'glomerular-disease-pln',
    titleEn: 'Glomerular Disease &amp; Protein-Losing Nephropathy (PLN)',
    titleTh: 'โรคโกลเมอรูลัส / PLN — โปรตีนรั่วทางไต',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['glomerular disease', 'PLN', 'glomerulonephritis', 'amyloidosis', 'minimal change disease', 'nephrotic syndrome', 'UPC', 'ACE inhibitor', 'telmisartan', 'aspirin', 'clopidogrel', 'Soft-coated Wheaten'],
    aliases: ['GN', 'glomerulonephritis', 'PLN', 'protein-losing nephropathy', 'โปรตีนรั่วไต', 'nephrotic'],
    source: 'Ch. 40 · pp. 675–688',
    sections: {
      definition: `
        <p>โรคที่ <strong>glomerulus</strong> (หน่วยกรองในไต) ถูกทำลาย → โปรตีนรั่วเข้าปัสสาวะ → progressive CKD</p>
        <ul>
          <li>เจอบ่อยในหมา &gt; แมว ✨</li>
          <li>Major cause ของ CKD ในหมา (ตรงข้ามกับแมวที่เป็น tubulointerstitial)</li>
          <li><strong>UPC &gt; 0.5 (dog), &gt; 0.4 (cat)</strong> = significant proteinuria</li>
          <li>Severe form = <strong>Nephrotic syndrome</strong> ✨ (proteinuria + hypoalbuminemia + edema + hypercholesterolemia)</li>
        </ul>
      `,
      etiology: `
        <p><strong>1. Immune complex glomerulonephritis (most common in dog):</strong></p>
        <ul>
          <li>Chronic infection: <strong>Ehrlichia, Anaplasma, Borrelia</strong> (Lyme nephritis), Lepto, Bartonella, Babesia, Heartworm, Leishmaniasis</li>
          <li>Chronic inflammation: pyometra, prostatitis, deep pyoderma, pancreatitis</li>
          <li>Neoplasia (paraneoplastic)</li>
          <li>Immune-mediated dz: SLE, IMHA, IBD</li>
          <li>Endocrine: Cushing's, hypothyroid (debated)</li>
          <li>Vaccine reaction (rare)</li>
        </ul>
        <p><strong>2. Familial / genetic:</strong></p>
        <ul>
          <li><strong>Soft-coated Wheaten Terrier</strong> ✨ — combined PLE + PLN</li>
          <li>Bull Terrier — hereditary nephritis</li>
          <li>Samoyed (X-linked Alport-like)</li>
          <li>Dalmatian — familial proteinuria</li>
          <li>English Cocker — familial nephropathy</li>
          <li>Bernese Mountain Dog — familial nephropathy</li>
        </ul>
        <p><strong>3. Amyloidosis:</strong></p>
        <ul>
          <li>Shar-Pei ✨ — autoinflammatory + renal/hepatic amyloid</li>
          <li>Beagle (some lines)</li>
          <li>Cat: Abyssinian, Siamese, Oriental Shorthair</li>
        </ul>
        <p><strong>4. Other:</strong></p>
        <ul>
          <li>Membranous nephropathy</li>
          <li>Focal segmental glomerulosclerosis (FSGS)</li>
          <li>Minimal change disease (rare)</li>
          <li>Hypertensive nephropathy</li>
          <li>Diabetic nephropathy (cat advanced DM)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Glomerular damage → ↑ permeability to plasma proteins</li>
          <li>Albumin (small) leaks first → albuminuria</li>
          <li>Larger proteins follow → severe proteinuria</li>
          <li>Loss of antithrombin → <strong>hypercoagulable state → thromboembolism</strong> ✗</li>
          <li>Hypoalbuminemia → ↓ oncotic pressure → edema, ascites, pleural effusion</li>
          <li>Hyperlipidemia (compensatory hepatic synthesis)</li>
          <li>Progressive glomerulosclerosis → CKD → ESRD</li>
          <li>Concurrent hypertension common</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Often <strong>subclinical early</strong> — detected on screening UPC ✨</li>
          <li>Lethargy, ↓ appetite (advanced)</li>
          <li>Weight loss, muscle wasting</li>
          <li>PU/PD (concurrent CKD)</li>
          <li>Edema, ascites (severe — nephrotic) ✨</li>
          <li>Pleural effusion → dyspnea (severe)</li>
          <li>Foamy urine (high protein)</li>
          <li>Vomiting (uremic, advanced)</li>
          <li>Acute blindness (severe HT → retinal detachment) ✗</li>
          <li>Sudden dyspnea / collapse — <strong>pulmonary thromboembolism</strong> ✗</li>
          <li>Shar-Pei: episodic fever + swollen hocks (Shar-Pei autoinflammatory dz precedes renal amyloid)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Initial workup:</strong></p>
        <ul>
          <li><strong>UPC ratio</strong> ✨ — confirm proteinuria; persistent if &gt; 0.5 dog (&gt; 0.4 cat) on ≥ 3 samples over 2 weeks
            <ul>
              <li>Sterile sample — rule out UTI/sediment first</li>
              <li>Severe = UPC &gt; 5 (massive proteinuria)</li>
            </ul>
          </li>
          <li>UA + sediment — rule out UTI, hematuria contributing</li>
          <li>Urine culture — rule out UTI</li>
          <li>CBC, biochem (BUN, Cr, SDMA, albumin, globulin, cholesterol, electrolytes)</li>
          <li>BP measurement (HT common)</li>
          <li>Coag panel — antithrombin (often ↓ in PLN)</li>
        </ul>

        <p><strong>Differentiating glomerular vs tubular proteinuria:</strong></p>
        <ul>
          <li>Glomerular: high UPC (&gt; 2.0 typically), albumin dominant, USG variable</li>
          <li>Tubular: lower UPC (&lt; 2.0 usually), low MW proteins, isosthenuric</li>
        </ul>

        <p><strong>Identify underlying cause (essential):</strong></p>
        <ul>
          <li><strong>Infectious disease panel</strong> ✨:
            <ul>
              <li>4DX SNAP (heartworm + Lyme + Ehrlichia + Anaplasma)</li>
              <li>Lepto MAT</li>
              <li>Bartonella (regional)</li>
              <li>Babesia PCR (regional)</li>
              <li>Leishmania (endemic)</li>
            </ul>
          </li>
          <li>Tick-borne disease history</li>
          <li>Cushing's screen (ACTH stim, LDDST)</li>
          <li>Thoracic + abdominal imaging — neoplasia, infection, prostate</li>
          <li>SLE workup if suspected (ANA, joint tap)</li>
        </ul>

        <p><strong>Renal biopsy ✨ — definitive (when feasible):</strong></p>
        <ul>
          <li>Indication:
            <ul>
              <li>UPC &gt; 3.5 with progression</li>
              <li>Refractory to standard treatment</li>
              <li>Considering immunosuppression</li>
              <li>Atypical signalment</li>
            </ul>
          </li>
          <li>Pre-biopsy: BP control, coag panel, platelet count</li>
          <li>US-guided Tru-cut, surgical wedge, or laparoscopic</li>
          <li>Send to specialized lab (e.g., IVRPS — International Veterinary Renal Pathology Service):
            <ul>
              <li>Light microscopy</li>
              <li>Electron microscopy</li>
              <li>Immunofluorescence</li>
            </ul>
          </li>
          <li>Differentiates: ICGN, FSGS, minimal change, amyloidosis, membranous</li>
          <li>Guides immunosuppression decision</li>
        </ul>

        <p><strong>IRIS substaging:</strong></p>
        <ul>
          <li>Proteinuric (UPC &gt; 0.5 dog, &gt; 0.4 cat)</li>
          <li>BP substaging (normotensive → severe HT)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Pre-renal proteinuria (fever, exercise — usually mild, transient)</li>
          <li>Post-renal proteinuria (UTI, hemorrhage, calculi)</li>
          <li>Tubular proteinuria (Fanconi syndrome — rare; Basenji familial)</li>
          <li>Bence-Jones proteinuria (multiple myeloma)</li>
          <li>Hemoglobin/myoglobinuria (false positive on dipstick)</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Treat underlying cause (ESSENTIAL) ✨:</strong></p>
        <ul>
          <li>Infection — appropriate antibiotic (doxycycline 5 mg/kg q12h for tick-borne × 4 wk; Lepto = doxy × 2 wk)</li>
          <li>Cushing's — trilostane</li>
          <li>Neoplasia — surgical / chemo</li>
          <li>Discontinue offending drugs</li>
        </ul>

        <p><strong>2. Renin-angiotensin system blockade ✨ — cornerstone:</strong></p>
        <ul>
          <li><strong>ACE inhibitors:</strong>
            <ul>
              <li>Benazepril 0.25-0.5 mg/kg PO q24h (start) → q12h if needed</li>
              <li>Enalapril similar</li>
              <li>Reduces glomerular hypertension + proteinuria</li>
            </ul>
          </li>
          <li><strong>ARB (angiotensin receptor blocker):</strong>
            <ul>
              <li><strong>Telmisartan (Semintra)</strong> ✨ 1 mg/kg PO q24h dog (cat-licensed for proteinuria)
                <ul>
                  <li>More potent proteinuria reduction in some studies</li>
                  <li>Better tolerated than ACEi in some patients</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Combination ACEi + ARB</strong> for refractory cases (monitor K, Cr closely)</li>
          <li>Goal: ↓ UPC by &gt; 50%, ideally &lt; 0.5</li>
          <li>Caution:
            <ul>
              <li>Monitor Cr — small ↑ acceptable; large ↑ = stop and reassess</li>
              <li>Monitor K — risk hyperkalemia</li>
              <li>Avoid in dehydration / hypovolemia</li>
              <li>Don't start if Cr &gt; 5 mg/dL (Stage 4) without specialist guidance</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Antithrombotic ✨ — reduce TE risk:</strong></p>
        <ul>
          <li>Indication: hypoalbuminemia &lt; 2.0 g/dL, AT III &lt; 70%, severe proteinuria</li>
          <li><strong>Clopidogrel 1-2 mg/kg PO q24h</strong> ✨ — first choice (more effective than aspirin in dogs per recent evidence)</li>
          <li>Or low-dose aspirin 0.5-1 mg/kg PO q24h</li>
          <li>Rivaroxaban 1 mg/kg PO q24h — alternative (more expensive, monitor bleeding)</li>
        </ul>

        <p><strong>4. Hypertension control:</strong></p>
        <ul>
          <li>Goal BP &lt; 160 systolic</li>
          <li>ACEi/ARB usually sufficient</li>
          <li>Add amlodipine 0.1-0.5 mg/kg PO q24h if persistently hypertensive</li>
        </ul>

        <p><strong>5. Diet ✨ — renal proteinuric:</strong></p>
        <ul>
          <li>Royal Canin Renal, Hill's k/d (early CKD)</li>
          <li>Restricted protein (high quality), restricted P, ↑ omega-3</li>
          <li>Severe nephrotic — moderate protein restriction (don't over-restrict)</li>
          <li>Adequate calories — prevent cachexia</li>
        </ul>

        <p><strong>6. Omega-3 fatty acids:</strong></p>
        <ul>
          <li>EPA + DHA 50-100 mg/kg/day combined</li>
          <li>Anti-inflammatory + reduces glomerular pressure</li>
        </ul>

        <p><strong>7. Manage hypercholesterolemia (severe):</strong></p>
        <ul>
          <li>Diet first</li>
          <li>Omega-3</li>
          <li>Atorvastatin (refractory) — limited vet evidence</li>
        </ul>

        <p><strong>8. Manage edema/effusion (nephrotic syndrome):</strong></p>
        <ul>
          <li>Spironolactone 1-2 mg/kg PO q12h (gentle)</li>
          <li>Furosemide 1-2 mg/kg PO q12h (caution — worsens prerenal)</li>
          <li>Therapeutic abdominocentesis / thoracocentesis if respiratory compromise</li>
          <li>Sodium restriction</li>
          <li>Plasma transfusion only as bridge for severe hypoalbuminemia (&lt; 1.5)</li>
        </ul>

        <p><strong>9. Immunosuppression — IF biopsy confirms ICGN:</strong></p>
        <ul>
          <li>NOT for amyloidosis (steroids harmful)</li>
          <li>Mycophenolate 10-15 mg/kg PO q12h ✨ — first-line for biopsy-proven ICGN</li>
          <li>Cyclosporine 5 mg/kg PO q12h — alternative</li>
          <li>Prednisone — controversial for GN; often used short-term</li>
          <li>Combination protocols per IRIS guidelines</li>
        </ul>

        <p><strong>10. Amyloidosis-specific:</strong></p>
        <ul>
          <li>No effective specific treatment</li>
          <li>Colchicine 0.025-0.03 mg/kg PO q24h (Shar-Pei prevention; if Shar-Pei autoinflammatory dz episodes)</li>
          <li>DMSO — historical, limited evidence</li>
          <li>Standard CKD + proteinuria management</li>
          <li>Poor prognosis</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>UPC q4-6 wk initially, then q3 mo</li>
          <li>BP at every visit</li>
          <li>BUN, Cr, SDMA, albumin, K q4-6 wk initially</li>
          <li>Body weight, BCS, edema assessment</li>
          <li>Recheck infection panel if endemic exposure</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Thromboembolism (PE, splenic, aortic, portal)</strong> ✗ — major cause of death</li>
          <li>Progressive CKD → ESRD</li>
          <li>Severe hypertension → retinal detachment, cardiac, neuro</li>
          <li>Nephrotic syndrome (edema, ascites, effusion)</li>
          <li>Cachexia, sarcopenia</li>
          <li>Infection (immunosuppressed)</li>
          <li>Drug side effects (ACEi-induced hyperkalemia, AKI)</li>
          <li>Sudden death from PTE</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Identified treatable cause + early treatment: good</strong> ✓
            <ul>
              <li>Lyme nephritis with doxy + ACEi: variable; 50% improve significantly</li>
              <li>Other tick-borne: similar</li>
            </ul>
          </li>
          <li>Idiopathic ICGN with biopsy + immunosuppression: variable; ~ 50% respond</li>
          <li>Amyloidosis: poor — MST &lt; 6-12 months from diagnosis</li>
          <li>Soft-coated Wheaten PLE/PLN: guarded — MST 2-5 yr</li>
          <li>Nephrotic syndrome (severe): guarded</li>
          <li>UPC &gt; 5 + hypoalbuminemia + HT: poor 6-month survival</li>
          <li>Negative prognostic factors: high UPC, ↓ albumin, ↑ Cr, severe HT, age, amyloid</li>
        </ul>
        <div class="callout">⚠️ <strong>Sudden dyspnea / collapse ใน proteinuric dog → suspect PTE</strong> ✗ — high mortality. Antithrombotic prophylaxis สำคัญมาก<br><br>💡 <strong>Tick-borne dz screening</strong> = essential first step ในเคสหมา proteinuric — บางเคสรักษาหายได้ด้วย doxycycline เฉยๆ</div>
      `,
    },
  },

  /* ---------- Ch 45 · Urinary Incontinence ---------- */
  {
    id: 'urinary-incontinence',
    titleEn: 'Urinary Incontinence',
    titleTh: 'ปัสสาวะเล็ด',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['urinary incontinence', 'USMI', 'urethral sphincter mechanism incompetence', 'phenylpropanolamine', 'PPA', 'estriol', 'collagen injection', 'spayed female'],
    aliases: ['incontinence', 'urine leakage', 'USMI', 'ปัสสาวะเล็ด', 'ปัสสาวะรั่ว'],
    source: 'Ch. 45 · pp. 752–759',
    sections: {
      definition: `
        <p>การ <strong>รั่วปัสสาวะโดยไม่ตั้งใจ</strong> — แยกจาก behavioral periuria + voluntary urination</p>
        <ul>
          <li>เจอบ่อยใน <strong>spayed female dogs</strong> (5-30% of spayed females) ✨</li>
          <li>Cat: rare; ส่วนใหญ่ neurogenic หรือ ectopic ureter</li>
        </ul>
      `,
      etiology: `
        <p><strong>1. USMI (Urethral Sphincter Mechanism Incompetence) ✨ — most common dog:</strong></p>
        <ul>
          <li>Spayed female (estrogen deficiency → ↓ urethral tone)</li>
          <li>Onset typically months-years post-spay</li>
          <li>Large breed predisposed (Boxer, Doberman, GSD, Old English Sheepdog, Rottweiler)</li>
          <li>Obesity contributes</li>
          <li>Castrated male (less common)</li>
        </ul>

        <p><strong>2. Anatomic abnormalities:</strong></p>
        <ul>
          <li><strong>Ectopic ureter</strong> ✨ — congenital; young female dogs (Lab, Golden, Husky, terriers); see entry</li>
          <li>Pelvic bladder / intrapelvic position</li>
          <li>Urethral hypoplasia</li>
          <li>Vestibulovaginal stenosis</li>
        </ul>

        <p><strong>3. Neurogenic:</strong></p>
        <ul>
          <li>UMN bladder (above sacral SC) — spastic, poor emptying</li>
          <li>LMN bladder (sacral SC, cauda equina) — flaccid, overflow</li>
          <li>IVDD, fibrocartilaginous embolism, trauma</li>
        </ul>

        <p><strong>4. Detrusor instability / overactive bladder:</strong></p>
        <ul>
          <li>Idiopathic detrusor hyperreflexia</li>
          <li>Cystitis (bladder irritation)</li>
        </ul>

        <p><strong>5. Overflow (functional/mechanical obstruction):</strong></p>
        <ul>
          <li>Urolith, mass, stricture</li>
          <li>Reflex dyssynergia (functional obstruction during urination)</li>
        </ul>

        <p><strong>6. Other:</strong></p>
        <ul>
          <li>UTI (especially older dog with new incontinence)</li>
          <li>Polyuria → exceeds bladder capacity (DM, CKD, Cushing's, DI)</li>
          <li>Cognitive dysfunction (senior)</li>
          <li>Medication-induced</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li><strong>USMI:</strong> ↓ urethral closing pressure due to estrogen ↓, smooth muscle atrophy, structural changes</li>
          <li>Ectopic ureter: ureter bypasses bladder → drains into urethra/vagina → constant dribble</li>
          <li>Neurogenic: damaged neural control → loss of voluntary control or detrusor function</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Urine leakage at rest, especially when sleeping/relaxing</strong> ✨ — wet bedding</li>
          <li>Wet hair around vulva/prepuce</li>
          <li>Perivulvar dermatitis (chronic)</li>
          <li>UTI (recurrent, secondary)</li>
          <li>Otherwise normal urination otherwise</li>
        </ul>
        <p><strong>Distinguish from:</strong></p>
        <ul>
          <li>Pollakiuria (UTI/cystitis) — frequent small voluntary urination</li>
          <li>PU/PD — large volumes, accidents from full bladder</li>
          <li>Behavioral periuria (cat especially) — full conscious urination</li>
          <li>Submissive urination (puppy, anxiety)</li>
        </ul>
        <p><strong>Ectopic ureter signs:</strong></p>
        <ul>
          <li><strong>Constant dribbling since puppyhood</strong> ✨</li>
          <li>Always wet vulva/prepuce</li>
          <li>Recurrent UTI</li>
          <li>Female &gt; male (anatomy)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>History critical:</strong></p>
        <ul>
          <li>Onset (since young = ectopic; post-spay = USMI)</li>
          <li>Pattern (continuous dribble vs intermittent leak vs "puddles in bed")</li>
          <li>Concurrent diseases (PU/PD?, DM, Cushing's)</li>
          <li>Drug history</li>
          <li>Spay/neuter status</li>
        </ul>
        <p><strong>Physical:</strong></p>
        <ul>
          <li>Inspect vulva/prepuce — recessed vulva, dermatitis</li>
          <li>Rectal exam — pelvic mass, prostate, urethral palpation</li>
          <li>Bladder palpation — size, expressibility</li>
          <li>Neuro exam — perineal reflex, anal tone, hindlimb function</li>
          <li>Observe urination if possible</li>
        </ul>
        <p><strong>Workup:</strong></p>
        <ul>
          <li>UA + culture ✨ — rule out UTI (very common in incontinent dogs)</li>
          <li>UPC if any concern</li>
          <li>CBC, biochem (rule out PU/PD)</li>
          <li>BP</li>
          <li>Abdominal US — bladder, kidneys, ureters (ectopic), masses</li>
          <li>Cushing's screen if indicated</li>
        </ul>
        <p><strong>Specific tests:</strong></p>
        <ul>
          <li><strong>CT urogram</strong> ✨ — gold standard for ectopic ureter</li>
          <li><strong>Cystoscopy + ureteroscopy</strong> ✨ — direct visualization; can laser-correct ectopic during procedure</li>
          <li>Contrast cystography (older method)</li>
          <li>Urethral pressure profile (referral)</li>
          <li>Spinal MRI if neurogenic suspected</li>
        </ul>
      `,
      differential: `<p>ดู etiology — comprehensive workup needed</p>`,
      treatment: `
        <p><strong>1. USMI (spayed female) — first-line ✨</strong></p>
        <ul>
          <li><strong>Phenylpropanolamine (PPA) 1-2 mg/kg PO q8-12h</strong> ✨ — alpha agonist; ↑ urethral tone
            <ul>
              <li>~ 75-90% response rate</li>
              <li>Side effects: hypertension, restlessness, anorexia</li>
              <li>Caution in cardiac dz, HT</li>
              <li>Trade names: Proin, Propalin</li>
            </ul>
          </li>
          <li><strong>Estrogen replacement</strong>:
            <ul>
              <li>Diethylstilbestrol (DES) 0.1-1 mg PO q24h × 5d, then q week — historical, dose-dependent BM suppression risk</li>
              <li>Estriol 2 mg/dog PO q24h × 7d, then q24-48h (Incurin) — better safety profile ✨</li>
              <li>Combine with PPA for refractory: synergistic</li>
            </ul>
          </li>
          <li>If refractory:
            <ul>
              <li>Combination PPA + estriol</li>
              <li>Imipramine 5-15 mg/dog PO q12h</li>
              <li>Endoscopic collagen injection (urethral bulking) — referral; effective</li>
              <li>Hydraulic occluder cuff — surgical; refractory cases</li>
              <li>Colposuspension — surgical (older technique)</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Ectopic ureter:</strong></p>
        <ul>
          <li><strong>Cystoscopic laser ablation</strong> ✨ — minimally invasive; refers to specialist; success rate 50-80%</li>
          <li>Surgical neoureterostomy / ureteral reimplantation — alternative</li>
          <li>Many still need PPA / estriol post-procedure (concurrent USMI)</li>
        </ul>

        <p><strong>3. Neurogenic:</strong></p>
        <ul>
          <li>Identify + treat underlying cause (IVDD, mass, etc.)</li>
          <li>UMN (spastic):
            <ul>
              <li>Diazepam 0.2-0.5 mg/kg PO q8h — relax urethra during expression</li>
              <li>Prazosin 0.5-1 mg/dog PO q8-12h — alpha blocker, urethral relaxation</li>
              <li>Phenoxybenzamine 0.25-0.5 mg/kg PO q8-12h — alternative alpha blocker</li>
              <li>Manual expression q6-8h</li>
              <li>Intermittent catheterization</li>
            </ul>
          </li>
          <li>LMN (flaccid):
            <ul>
              <li>Bethanechol 5-15 mg/dog PO q8h — cholinergic, ↑ detrusor contraction</li>
              <li>Manual expression</li>
              <li>Indwelling catheter (short-term)</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Detrusor instability / overactive bladder:</strong></p>
        <ul>
          <li>Treat UTI if present</li>
          <li>Anticholinergic: oxybutynin 0.2-0.4 mg/kg PO q8-12h</li>
          <li>Imipramine</li>
        </ul>

        <p><strong>5. Concurrent UTI:</strong></p>
        <ul>
          <li>Treat all UTIs in incontinent dogs (very common, perpetuating cycle)</li>
          <li>Recheck culture after treatment</li>
        </ul>

        <p><strong>Lifestyle:</strong></p>
        <ul>
          <li>Frequent walks / opportunities to urinate</li>
          <li>Waterproof bedding</li>
          <li>Doggy diapers / belly bands</li>
          <li>Weight loss if obese</li>
          <li>Maintain good hygiene to prevent perivulvar dermatitis</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Recurrent UTI</li>
          <li>Perivulvar dermatitis</li>
          <li>Owner relinquishment (chronic incontinence is a top reason)</li>
          <li>PPA side effects (HT, restlessness)</li>
          <li>Estrogen toxicity (high-dose DES — bone marrow suppression — rare with modern dosing)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>USMI with PPA: excellent</strong> — 75-90% well controlled ✓</li>
          <li>USMI refractory + collagen injection: 50-70% improvement</li>
          <li>Ectopic ureter post-correction: variable; many need adjunctive PPA</li>
          <li>Neurogenic: depends on underlying lesion (IVDD recovery often good with treatment)</li>
          <li>UTI-related: excellent with treatment</li>
        </ul>
        <div class="callout">💡 <strong>Spayed female dog + wet bed = USMI จนกว่าจะพิสูจน์ตรงข้าม</strong> ✨ — UA culture rule out UTI ก่อน, เริ่ม PPA. Most respond. Estriol (Incurin) เป็นทางเลือกที่ปลอดภัยกว่า DES</div>
      `,
    },
  },

  /* ---------- Ch 45 · Ectopic Ureter ---------- */
  {
    id: 'ectopic-ureter',
    titleEn: 'Ectopic Ureter',
    titleTh: 'ท่อไตผิดตำแหน่ง',
    type: 'disease',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['ectopic ureter', 'congenital', 'incontinence', 'CT urogram', 'cystoscopy', 'laser ablation', 'Lab', 'Golden', 'Husky', 'puppy'],
    aliases: ['ectopic ureter', 'EU', 'ท่อไตผิดที่', 'ureter ectopic'],
    source: 'Ch. 45 · pp. 759–763',
    sections: {
      definition: `
        <p>ความผิดปกติแต่กำเนิด: ureter ไม่ได้เปิดเข้า bladder trigone ปกติ — เปิดเข้า urethra, vagina, หรือ uterus → <strong>continuous urine leakage since puppyhood</strong> ✨</p>
        <ul>
          <li>Female &gt; male (90% female)</li>
          <li>Often unilateral (one side); bilateral 30%</li>
          <li><strong>Most common cause of incontinence in young dogs</strong> ✨</li>
          <li>Cat: rare</li>
        </ul>
      `,
      etiology: `
        <p><strong>Congenital — embryonic developmental abnormality of ureteral migration</strong></p>
        <p><strong>Predisposed breeds:</strong></p>
        <ul>
          <li>Labrador Retriever ✨</li>
          <li>Golden Retriever</li>
          <li>Siberian Husky</li>
          <li>Soft-coated Wheaten</li>
          <li>Newfoundland</li>
          <li>Poodle, terrier breeds</li>
          <li>English Bulldog (males more common in this breed)</li>
        </ul>
        <p><strong>Anatomic types:</strong></p>
        <ul>
          <li><strong>Intramural</strong> (most common, ~ 95% of dogs) — ureter tunnels through bladder wall but exits past trigone (urethra/vagina)</li>
          <li><strong>Extramural</strong> — ureter completely bypasses bladder; ends in urethra, vagina, uterus, or vestibule</li>
        </ul>
        <p><strong>Common ectopic openings:</strong></p>
        <ul>
          <li>Female: proximal urethra (most common), vagina, vestibule, uterus</li>
          <li>Male: prostatic urethra, ductus deferens (rare)</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Urine bypasses bladder/sphincter → continuous dribbling</li>
          <li>Concurrent USMI common (~ 30-50% of cases) — even after surgical correction</li>
          <li>Reflux → recurrent UTI, pyelonephritis</li>
          <li>Hydroureter, hydronephrosis common (ureter dilated proximally)</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Continuous urine dribbling since puppyhood</strong> ✨</li>
          <li>Always wet vulva (or prepuce in male) → perivulvar dermatitis</li>
          <li>Normal voluntary urination also occurs (other ureter / detrusor function ok)</li>
          <li>Recurrent UTI (sometimes presenting sign)</li>
          <li>Wet bedding, smell of urine</li>
          <li>± Hydronephrosis — kidney palpation enlarged (severe cases)</li>
          <li>Some dogs continent during day, leak during sleep — confusion with USMI</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>CT urogram</strong> ✨ — gold standard
            <ul>
              <li>IV contrast → fills ureter → shows ectopic opening + course</li>
              <li>Identify uni- vs bilateral</li>
              <li>Hydroureter, hydronephrosis</li>
              <li>Concurrent anatomy abnormalities</li>
            </ul>
          </li>
          <li><strong>Cystoscopy</strong> ✨ — definitive; can be diagnostic + therapeutic same procedure
            <ul>
              <li>Direct visualization of ureteral openings</li>
              <li>Laser ablation possible immediately</li>
              <li>Vaginal exam concurrent — vestibulovaginal abnormalities</li>
            </ul>
          </li>
          <li>Excretory urography (older method)</li>
          <li>Abdominal US — hydronephrosis, hydroureter; can sometimes visualize abnormal course</li>
        </ul>
        <p><strong>Workup:</strong></p>
        <ul>
          <li>UA + culture (UTI almost always present)</li>
          <li>CBC, biochem, BUN/Cr (assess renal function — chronic obstruction)</li>
          <li>BP</li>
          <li>Vaginal exam (rule out concurrent vestibulovaginal abnormality)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>USMI in young female (less common before 1 year)</li>
          <li>Pelvic bladder</li>
          <li>Persistent paramesonephric remnant</li>
          <li>Vestibulovaginal stenosis</li>
          <li>Detrusor atony (neurogenic)</li>
          <li>UTI-related incontinence</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Cystoscopic laser ablation (CLA) ✨ — first-line for intramural ectopic ureter:</strong></p>
        <ul>
          <li>Minimally invasive — endoscopic</li>
          <li>Use diode/holmium laser to ablate ectopic ureteral wall, repositioning opening into bladder trigone</li>
          <li>Same procedure: diagnostic + therapeutic</li>
          <li>Success rate (full continence): 50-65%</li>
          <li>Improvement: 75-85%</li>
          <li>Complications: low (mild hematuria, transient UTI)</li>
          <li>Referral procedure (limited centers in Thailand)</li>
        </ul>

        <p><strong>2. Surgical correction:</strong></p>
        <ul>
          <li><strong>Neoureterostomy</strong> — reimplant ureter into bladder lumen
            <ul>
              <li>For intramural type</li>
              <li>Performed via cystotomy</li>
            </ul>
          </li>
          <li><strong>Ureteral transplantation (extramural)</strong> — divide ureter, reimplant into bladder</li>
          <li>Success similar to CLA but more invasive</li>
          <li>Risk: stricture, leak, infection</li>
        </ul>

        <p><strong>3. Adjunctive medical therapy ✨ (for residual incontinence):</strong></p>
        <ul>
          <li>Most dogs need ongoing PPA / estriol after surgery (concurrent USMI common)</li>
          <li>PPA 1-2 mg/kg PO q8-12h</li>
          <li>Estriol 2 mg/dog PO q24-48h (spayed female; usually wait until adult to spay if ectopic ureter known)</li>
          <li>Some require lifelong medical management</li>
        </ul>

        <p><strong>4. Treat concurrent UTI:</strong></p>
        <ul>
          <li>Pre-op + post-op cultures essential</li>
          <li>Antibiotic per culture</li>
          <li>Long-term recurrence common — periodic recheck</li>
        </ul>

        <p><strong>5. Manage hydronephrosis/hydroureter:</strong></p>
        <ul>
          <li>Resolves often after correction</li>
          <li>Severe cases may require ureteral reconstruction or nephrectomy (if severely damaged kidney + functional contralateral)</li>
        </ul>

        <p><strong>6. Spay timing:</strong></p>
        <ul>
          <li>Delay spay until after correction + adulthood ideally</li>
          <li>Spaying before correction can compound USMI later</li>
        </ul>

        <p><strong>Owner expectations:</strong></p>
        <ul>
          <li>Most dogs improve significantly</li>
          <li>~ 30-40% achieve complete continence on first procedure alone</li>
          <li>Combined with PPA / estriol → 70-80% well controlled</li>
          <li>Some need second procedure / hydraulic occluder cuff for refractory cases</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Persistent incontinence (concurrent USMI — 30-50%)</li>
          <li>Recurrent UTI (lifelong tendency)</li>
          <li>Stricture at correction site</li>
          <li>Urine leak (surgical)</li>
          <li>Pyelonephritis</li>
          <li>Hydronephrosis progression</li>
          <li>CKD development (severe / chronic obstruction)</li>
          <li>Need for second procedure</li>
          <li>Owner frustration (lifelong management)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Cystoscopic laser ablation: <strong>good — 50-65% complete continence, 75-85% improvement</strong> ✓</li>
          <li>+ PPA / estriol = 70-80% well controlled</li>
          <li>Surgical correction: similar success</li>
          <li>Bilateral with severe hydronephrosis: more guarded</li>
          <li>Concurrent severe USMI: variable — may need additional procedures</li>
          <li>Most dogs achieve good quality of life with combined approach</li>
        </ul>
        <div class="callout">💡 <strong>Lab puppy female + dripping ตั้งแต่เด็ก = ectopic ureter จนกว่าจะพิสูจน์ตรงข้าม</strong> ✨ — CT urogram + cystoscopy ที่ specialist. CLA เป็นทางเลือกที่ดีที่สุดในยุคปัจจุบัน</div>
      `,
    },
  },

  /* ---------- Procedure · Cystocentesis ---------- */
  {
    id: 'proc-cystocentesis',
    titleEn: 'Cystocentesis',
    titleTh: 'การเจาะเก็บปัสสาวะจากกระเพาะปัสสาวะ',
    type: 'procedure',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['cystocentesis', 'urine sample', 'urine culture', 'sterile sample', 'bladder palpation', 'ultrasound-guided'],
    aliases: ['cysto', 'bladder tap', 'เจาะปัสสาวะ', 'cystocentesis'],
    source: 'Standard small animal procedure',
    sections: {
      definition: `
        <p>การเจาะ <strong>เข็มเข้า bladder ผ่านผนังหน้าท้อง</strong> เพื่อเก็บปัสสาวะ <strong>sterile</strong></p>
        <ul>
          <li><strong>Gold standard sample</strong> สำหรับ urine culture ✨</li>
          <li>หลีกเลี่ยง contamination จาก urethra/skin/genital</li>
          <li>ทำได้ง่ายในแมว + หมาตัวเล็ก-กลาง</li>
          <li>Decompress bladder ใน urethral obstruction (cat blocked) — emergency</li>
        </ul>
      `,
      etiology: `<p>—</p>`,
      pathophysiology: `<p>—</p>`,
      symptoms: `<p>—</p>`,
      diagnosis: `
        <p><strong>Indications:</strong></p>
        <ul>
          <li>Urine culture (sterile sample requirement)</li>
          <li>UA from immunocompromised / suspected UTI</li>
          <li><strong>Bladder decompression — urethral obstruction (cat blocked)</strong> ✨ ✗</li>
          <li>Pre-procedure decompression before anesthesia in obstructed cat</li>
          <li>UPC sample (avoid free-catch contamination)</li>
        </ul>
        <p><strong>Contraindications:</strong></p>
        <ul>
          <li>Severe coagulopathy (relative — risk hematoma)</li>
          <li>Pyometra suspected (uterus may overlie bladder — US guide!)</li>
          <li>Bladder not palpable / very small (must use US)</li>
          <li>Severe bladder wall disease (TCC mass at expected entry — US first)</li>
          <li>Known bladder neoplasia (theoretical risk seeding — controversial)</li>
        </ul>
      `,
      differential: `<p>—</p>`,
      treatment: `
        <p><strong>Equipment:</strong></p>
        <ul>
          <li>22-gauge × 1.5 inch needle (cat, small dog)</li>
          <li>22-gauge × 3 inch (large dog)</li>
          <li>6-12 mL syringe (sample); larger (20-60 mL) for therapeutic decompression</li>
          <li>Alcohol or chlorhexidine swab</li>
          <li>Optional: ultrasound machine</li>
        </ul>

        <p><strong>Patient positioning:</strong></p>
        <ul>
          <li><strong>Dorsal recumbency</strong> ✨ — most common; bladder falls back, easy palpation</li>
          <li>Lateral recumbency — alternative (especially fractious cat); bladder palpated against down side</li>
          <li>Standing — large calm dog (US-guided)</li>
        </ul>

        <p><strong>Step-by-step technique (blind/palpation-guided):</strong></p>
        <ol>
          <li><strong>Palpate bladder</strong> — caudoventral abdomen; firm but compressible
            <ul>
              <li>Need at least moderately full bladder (golf ball size in cat / small fist in dog)</li>
              <li>If empty → wait 1-2h, encourage water, or use US</li>
            </ul>
          </li>
          <li><strong>Restrain</strong> — second person holds patient firmly; hindlimbs extended caudally; reassure</li>
          <li><strong>Locate site</strong> — ventral midline, ~ 1-2 cm caudal to bladder apex (so bladder doesn't slip away from needle)
            <ul>
              <li>Stabilize bladder with non-dominant hand from above</li>
            </ul>
          </li>
          <li><strong>Prep site</strong> — alcohol/chlorhexidine swab (don't need full surgical prep)</li>
          <li><strong>Insert needle</strong> at 45-60° angle, aiming caudally toward bladder
            <ul>
              <li>Quick smooth motion — don't hesitate</li>
              <li>Penetrate skin → muscle → bladder wall</li>
              <li>Feel "give" / sudden ↓ resistance entering bladder</li>
            </ul>
          </li>
          <li><strong>Aspirate gently</strong> with syringe attached
            <ul>
              <li>Slow steady pull — too fast = bladder collapse on needle</li>
              <li>Collect 6-10 mL (more if therapeutic)</li>
              <li>If no urine returns: needle may be in wrong position — withdraw partially, redirect; or bladder empty</li>
            </ul>
          </li>
          <li><strong>Withdraw needle</strong> in single smooth motion
            <ul>
              <li>Apply gentle pressure × 30 sec to prevent leakage</li>
            </ul>
          </li>
        </ol>

        <p><strong>Ultrasound-guided technique ✨ (preferred when available):</strong></p>
        <ul>
          <li>Apply gel, identify bladder on US</li>
          <li>Insert needle from off-probe approach (or in-plane along probe)</li>
          <li>Visualize needle tip entering bladder lumen</li>
          <li>Aspirate</li>
          <li><strong>Indicated when:</strong>
            <ul>
              <li>Bladder hard to palpate (obese, fractious, very small)</li>
              <li>Suspected pyometra (avoid uterus)</li>
              <li>Mass / wall thickening (avoid)</li>
              <li>First-time / inexperienced operator</li>
              <li>Unsuccessful blind attempt</li>
            </ul>
          </li>
        </ul>

        <p><strong>For therapeutic decompression (cat blocked) ✗ ✨:</strong></p>
        <ul>
          <li>Use 22 g butterfly catheter or extension set + 22 g needle</li>
          <li>20-60 mL syringe</li>
          <li>Drain as much urine as comfortably possible (minimize repeated sticks)</li>
          <li>Send sample for UA + culture</li>
          <li>Decompress BEFORE general anesthesia — relieves K, helps stabilize</li>
          <li>Don't be aggressive on aspiration if bladder wall friable (chronic distension)</li>
        </ul>

        <p><strong>Post-procedure:</strong></p>
        <ul>
          <li>Observe briefly for any distress</li>
          <li>Sample handling:
            <ul>
              <li>UA: process within 30 min ideally; refrigerate if delayed</li>
              <li>Culture: sterile tube; refrigerate; submit ASAP</li>
              <li>UPC: refrigerate</li>
            </ul>
          </li>
          <li>Document on chart — site, volume, ease, complications</li>
        </ul>

        <p><strong>Sample interpretation notes:</strong></p>
        <ul>
          <li><strong>Microscopic hematuria common</strong> — iatrogenic (small RBCs from needle puncture); doesn't represent true hematuria
            <ul>
              <li>If interpreting hematuria → follow up with free-catch sample</li>
            </ul>
          </li>
          <li>Bacteria + WBC = real UTI (cysto sample)</li>
          <li>Quantitative culture: any growth significant from cysto sample (&gt; 1000 CFU/mL)</li>
        </ul>
      `,
      complications: `
        <p><strong>Common (minor):</strong></p>
        <ul>
          <li>Microscopic hematuria — almost universal, transient</li>
          <li>Mild patient discomfort during procedure</li>
          <li>Failure to obtain sample (empty bladder, missed) — retry or use US</li>
        </ul>
        <p><strong>Uncommon:</strong></p>
        <ul>
          <li>Gross hematuria (resolves &lt; 24h)</li>
          <li>Vasovagal reaction (rare — brief bradycardia in cats)</li>
        </ul>
        <p><strong>Rare but serious ✗:</strong></p>
        <ul>
          <li><strong>Bladder rupture</strong> — severe over-distended (chronic obstruction); aspiration too aggressive; friable wall
            <ul>
              <li>Especially risk in cat blocked &gt; 24-48h</li>
              <li>Don't aspirate aggressively in suspected wall compromise</li>
            </ul>
          </li>
          <li>Iatrogenic peritonitis (urine leak from puncture site, especially if cystitis)</li>
          <li>Hemorrhage (coagulopathy)</li>
          <li>Inadvertent puncture of: spleen, intestine, uterus (pyometra), adjacent vessel
            <ul>
              <li>US guidance prevents these</li>
            </ul>
          </li>
          <li>Urinary tract neoplasia seeding (theoretical, rare)</li>
        </ul>
        <p><strong>Pearls:</strong></p>
        <ul>
          <li>Wait until bladder is reasonably full</li>
          <li>One smooth motion — don't fish</li>
          <li>If unsuccessful 2× → use US or wait</li>
          <li>Cat blocked: cysto first → general anesthesia later (relieves K, makes anesthesia safer)</li>
          <li>Don't perform if patient struggling violently (use sedation)</li>
        </ul>
        <div class="callout">💡 <strong>Cystocentesis = essential clinical skill</strong> ✨ — easy in practice; gold standard for UA + culture. Cat blocked: cysto BEFORE anesthesia. ใช้ US guide ในกรณีที่ palpate ยาก หรือสงสัย pyometra/mass</div>
      `,
    },
  },

  /* ---------- Procedure · Urinary Catheterization ---------- */
  {
    id: 'proc-urinary-catheterization',
    titleEn: 'Urinary Catheterization',
    titleTh: 'การสวนปัสสาวะ',
    type: 'procedure',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['urinary catheter', 'urethral catheterization', 'red rubber catheter', 'tom cat catheter', 'Foley catheter', 'closed collection system', 'urethral obstruction'],
    aliases: ['catheter', 'catheterization', 'สวนปัสสาวะ', 'foley'],
    source: 'Standard small animal procedure',
    sections: {
      definition: `
        <p>การ <strong>สอด catheter</strong> ผ่าน urethra เข้า bladder — สำหรับ:</p>
        <ul>
          <li>Relieve <strong>urethral obstruction</strong> ✨ ✗ (most common indication)</li>
          <li>Continuous drainage in critically ill / post-op</li>
          <li>Sterile urine sample (alternative to cysto when bladder small)</li>
          <li>Bladder lavage / instillation</li>
          <li>Contrast cystography</li>
          <li>Monitor urine output (oliguric AKI, sepsis)</li>
        </ul>
      `,
      etiology: `<p>—</p>`,
      pathophysiology: `<p>—</p>`,
      symptoms: `<p>—</p>`,
      diagnosis: `
        <p><strong>Indications:</strong></p>
        <ul>
          <li><strong>Urethral obstruction (cat blocked)</strong> ✗ ✨ — emergency</li>
          <li>Urolith retropulsion / voiding urohydropropulsion</li>
          <li>Post-surgical (PU, cystotomy) — bladder rest</li>
          <li>AKI with anuria/oliguria — accurate UO monitoring</li>
          <li>Critically ill / non-ambulatory (sepsis, recumbency)</li>
          <li>Bladder lavage (clots, debris)</li>
          <li>Contrast study</li>
          <li>Urine sample when cysto not feasible (very small bladder, coagulopathy)</li>
        </ul>
        <p><strong>Contraindications:</strong></p>
        <ul>
          <li>Urethral stricture / mass without imaging</li>
          <li>Severe coagulopathy (relative)</li>
          <li>Active urethritis (avoid trauma)</li>
          <li>Recent urethral surgery</li>
        </ul>
      `,
      differential: `<p>—</p>`,
      treatment: `
        <p><strong>Catheter selection:</strong></p>
        <ul>
          <li><strong>Tom Cat catheter (3.5 Fr open-ended polypropylene)</strong> ✨ — cat male obstruction; rigid, helps push through plug</li>
          <li><strong>Red rubber catheter (3.5-8 Fr)</strong> — standard cat / small dog; soft, less traumatic; for indwelling
            <ul>
              <li>Cat: 3.5 Fr (5 Fr if larger cat)</li>
              <li>Small dog &lt; 10 kg: 5-6 Fr</li>
            </ul>
          </li>
          <li><strong>Foley catheter (8-14 Fr)</strong> ✨ — dog; balloon retains in bladder; ideal for indwelling
            <ul>
              <li>Medium dog (10-25 kg): 8-10 Fr</li>
              <li>Large dog (&gt; 25 kg): 10-14 Fr</li>
            </ul>
          </li>
          <li>Slippery Sam (Mila) — silicone, gentler</li>
          <li>Length: appropriate to patient size — measure externally first</li>
        </ul>

        <p><strong>Equipment:</strong></p>
        <ul>
          <li>Catheter (sterile)</li>
          <li>Sterile gloves</li>
          <li>Sterile lubricant (lidocaine gel preferred)</li>
          <li>Saline flush + syringe</li>
          <li>Closed collection bag (urine bag)</li>
          <li>Suture or T-port adapter (for indwelling)</li>
          <li>Vaginal speculum (female dog) — optional</li>
          <li>Light source</li>
        </ul>

        <p><strong>Sedation/anesthesia:</strong></p>
        <ul>
          <li><strong>Cat blocked:</strong> sedation needed — propofol 2-4 mg/kg IV slow + opioid; or ketamine + midazolam (caution if uremic)
            <ul>
              <li>Stabilize K + acidosis FIRST (see FLUTD entry)</li>
            </ul>
          </li>
          <li>Calm cooperative dog male: local lidocaine sometimes suffices for short catheterization</li>
          <li>Dog female: usually needs sedation (vaginal exam)</li>
          <li>Critical patient: minimal sedation as tolerated</li>
        </ul>

        <p><strong>Technique — Cat male (blocked) ✨:</strong></p>
        <ol>
          <li>Patient sedated, dorsal/lateral recumbency</li>
          <li>Extend penis from prepuce — gentle dorsal pressure on perineum to extrude</li>
          <li>Clean prepuce/penis with chlorhexidine + sterile saline rinse</li>
          <li>Sterile gloves, sterile field</li>
          <li>Lubricate Tom Cat catheter (lidocaine gel)</li>
          <li><strong>Pass catheter</strong> — gentle steady pressure
            <ul>
              <li>Direct catheter dorsally first, then horizontal once past pelvic urethra</li>
              <li>If meets resistance (plug) → flush with sterile saline retrograde to dislodge
                <ul>
                  <li>Attach syringe with saline → push 5-10 mL → expand urethra → push plug back into bladder</li>
                  <li>May need to pulse-flush several times</li>
                </ul>
              </li>
              <li>Once unblocked → urine flows freely</li>
            </ul>
          </li>
          <li>Empty bladder via catheter (gentle aspiration; or let drain)</li>
          <li>Lavage bladder with sterile saline 30-60 mL until effluent clear</li>
          <li><strong>Replace Tom Cat with soft red rubber 3.5 Fr</strong> for indwelling
            <ul>
              <li>Tom Cat too rigid for prolonged use → urethral irritation</li>
            </ul>
          </li>
          <li>Suture catheter to prepuce with stay sutures (2-3 sutures around prepuce, then around catheter)</li>
          <li>Connect to closed sterile collection bag (below patient level)</li>
          <li>E-collar mandatory</li>
          <li>Duration: 24-48h typically (until urine clear, K normal, urine output adequate)</li>
        </ol>

        <p><strong>Technique — Dog male:</strong></p>
        <ol>
          <li>Lateral recumbency, hind leg drawn forward</li>
          <li>Extrude penis from prepuce</li>
          <li>Clean with chlorhexidine + saline</li>
          <li>Sterile gloves, lubricate catheter (Foley 8-10 Fr typical)</li>
          <li>Pass catheter — feel slight resistance at: ischial arch (gentle pressure), then enters bladder</li>
          <li>Confirm in bladder: urine returns, can flush + aspirate</li>
          <li>If Foley: inflate balloon with sterile saline (volume per package; usually 3-5 mL)</li>
          <li>Pull back gently until balloon catches at trigone</li>
          <li>Connect to closed bag, secure to abdomen with tape, E-collar</li>
        </ol>

        <p><strong>Technique — Dog female (more challenging):</strong></p>
        <ol>
          <li>Sedation usually needed</li>
          <li>Lateral or sternal recumbency with hind end elevated</li>
          <li>Wipe vulva clean with chlorhexidine</li>
          <li>Sterile gloves</li>
          <li>Methods:
            <ul>
              <li><strong>Digital palpation</strong> — feel urethral papilla (cranial vaginal floor, ~ 3-5 cm cranial to vulva); guide catheter onto it</li>
              <li><strong>Otoscope / vaginal speculum</strong> — visualize urethral opening</li>
              <li><strong>Cystoscopy-guided</strong> — for difficult cases</li>
            </ul>
          </li>
          <li>Pass Foley 6-10 Fr (smaller breeds 5-6 Fr) — may need rigid stylet to stiffen</li>
          <li>Confirm with urine return</li>
          <li>Inflate balloon, secure</li>
        </ol>

        <p><strong>Technique — Cat female (rarely needed; usually do not block):</strong></p>
        <ol>
          <li>Often sedation</li>
          <li>Otoscope to visualize urethral opening</li>
          <li>Pass 3.5 Fr red rubber</li>
          <li>Generally easier than female dog</li>
        </ol>

        <p><strong>Indwelling catheter management:</strong></p>
        <ul>
          <li><strong>Closed collection system</strong> ✨ — IV bag below patient; reduces ascending infection</li>
          <li>Empty bag q4-6h; record volumes</li>
          <li>Clean prepuce/vulva q8h with sterile saline + chlorhexidine</li>
          <li>Inspect insertion site for swelling / discharge</li>
          <li>E-collar 24/7 — patient will pull out otherwise</li>
          <li>Catheter care:
            <ul>
              <li>Don't disconnect tubing unnecessarily</li>
              <li>If sample needed: aspirate from sample port (after wiping with alcohol)</li>
              <li>NEVER reflush retrograde from bag</li>
            </ul>
          </li>
          <li>Duration: keep only as long as needed (CAUTI risk ↑ each day)</li>
          <li>Don't culture catheter tip — submit urine sample after removal if signs of UTI</li>
        </ul>

        <p><strong>Post-removal:</strong></p>
        <ul>
          <li>Deflate Foley balloon completely before pulling</li>
          <li>Pull steadily, smoothly</li>
          <li>Monitor for ability to urinate within 4-6h</li>
          <li>Check for re-obstruction (cat — 30-40% recurrence)</li>
          <li>Don't routinely treat asymptomatic post-catheter bacteriuria</li>
          <li>Continue prazosin / acepromazine 1-2 weeks (cat post-block)</li>
        </ul>
      `,
      complications: `
        <p><strong>Common:</strong></p>
        <ul>
          <li>Mild discomfort during placement</li>
          <li>Hematuria (transient, mild)</li>
          <li>Patient resistance / chewing catheter (E-collar essential)</li>
          <li>Difficult passage in female (especially small / fractious dog)</li>
        </ul>
        <p><strong>Uncommon:</strong></p>
        <ul>
          <li>Catheter-associated UTI (CAUTI) — risk ↑ with duration; ~ 50% incidence after 5-7 days indwelling</li>
          <li>Urethral irritation / urethritis</li>
          <li>Catheter dislodgement (balloon failure or patient pulls)</li>
          <li>Catheter blockage (debris, clot) — flush gently</li>
          <li>Urine leak around catheter (Foley balloon underinflated)</li>
        </ul>
        <p><strong>Rare but serious ✗:</strong></p>
        <ul>
          <li><strong>Urethral rupture / tear</strong> — forceful passage; especially cat male, repeated attempts; or chronic obstruction friable urethra
            <ul>
              <li>If suspect → contrast urethrogram → may need surgery</li>
            </ul>
          </li>
          <li><strong>Bladder rupture</strong> — over-distension + balloon inflation against wall; or catheterizing severely obstructed cat with friable bladder</li>
          <li>Foley balloon ruptures inside bladder → catheter retention (need cystotomy to retrieve fragments)</li>
          <li>Iatrogenic ascending pyelonephritis (CAUTI → kidneys)</li>
          <li>Urethral stricture (long-term complication of trauma)</li>
          <li>Sepsis (immunocompromised patient with CAUTI)</li>
        </ul>
        <p><strong>Pearls:</strong></p>
        <ul>
          <li><strong>Never force catheter</strong> — if resistance, withdraw + reassess</li>
          <li>Lubricate generously (lidocaine gel = lubricant + local anesthetic)</li>
          <li>For cat blocked: stabilize K FIRST, then catheterize under sedation</li>
          <li>Closed collection &gt; open collection — significantly less CAUTI</li>
          <li>Remove catheter as soon as clinically appropriate</li>
          <li>Tom Cat catheter only for unblocking — switch to soft red rubber for indwelling</li>
          <li>Always use E-collar with indwelling catheter</li>
          <li>Document insertion: type, size, ease, urine volume drained</li>
        </ul>
        <div class="callout">💡 <strong>Catheterization = lifesaving in cat blocked</strong> ✨ ✗ — but stabilize K + acidosis FIRST. Tom Cat for unblocking → switch to soft 3.5 Fr red rubber for indwelling × 24-48h. Closed collection + E-collar mandatory<br><br>⚠️ Never force — urethral rupture = surgical emergency</div>
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

  /* ---------- Ch 49 · Diabetes Mellitus (Feline) ---------- */
  {
    id: 'diabetes-mellitus-feline',
    titleEn: 'Diabetes Mellitus (Feline)',
    titleTh: 'เบาหวานในแมว',
    type: 'disease',
    system: 'endocrine',
    species: ['cat'],
    tags: ['DM', 'diabetes', 'feline diabetes', 'glargine', 'ProZinc', 'insulin', 'Lantus', 'remission', 'low-carb diet', 'fructosamine', 'continuous glucose monitor', 'Freestyle Libre'],
    aliases: ['feline DM', 'cat diabetes', 'เบาหวานแมว'],
    source: 'Ch. 49 · pp. 821–840',
    sections: {
      definition: `
        <p>Hyperglycemia เรื้อรังจาก insulin deficiency ± insulin resistance — ในแมวมีลักษณะเฉพาะ:</p>
        <ul>
          <li><strong>Type 2-like</strong> ✨ — เริ่มจาก insulin resistance + amyloid deposition ใน pancreatic islets → β-cell loss</li>
          <li><strong>Diabetic remission ~ 30-50% ของ cat ใหม่</strong> ✨ — ถ้า early aggressive treatment + low-carb diet</li>
          <li>Reversible "transient diabetes" (กลูโคโทกซิก) ถ้ารีบรักษา</li>
          <li>Older cat (&gt; 8 years), male &gt; female, obese predisposed</li>
          <li>Burmese (Australia/NZ) — predisposed</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li><strong>Insulin resistance + amyloid deposition</strong> = pathognomonic</li>
          <li>Obesity ✨ — major modifiable risk factor</li>
          <li>Older age</li>
          <li><strong>Concurrent diseases (insulin antagonists):</strong>
            <ul>
              <li>Acromegaly (hypersomatotropism) ✨ — increasingly recognized; should screen IGF-1 in difficult-to-control cats</li>
              <li>Hyperthyroidism (rare in newly diabetic, common comorbid)</li>
              <li>Hyperadrenocorticism (uncommon in cat)</li>
              <li>Pancreatitis</li>
              <li>Chronic kidney disease</li>
              <li>Infection / inflammation</li>
              <li>Neoplasia</li>
            </ul>
          </li>
          <li><strong>Drug-induced:</strong>
            <ul>
              <li>Glucocorticoids (long-term) ✨</li>
              <li>Megestrol acetate (progestin)</li>
              <li>Cyclosporine</li>
            </ul>
          </li>
          <li>Pancreatitis (chronic) → β-cell destruction</li>
          <li>Genetic — Burmese cats</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>↓ Insulin sensitivity (peripheral resistance) → ↑ glucose</li>
          <li>↑ Glucose toxicity → ↓ β-cell function (reversible early)</li>
          <li>Amyloid deposition (islet amyloid polypeptide / IAPP) → permanent β-cell loss</li>
          <li>Persistent hyperglycemia → glucose toxicity loop</li>
          <li>Lipotoxicity (obesity) → worsens</li>
          <li>Eventually absolute insulin deficiency</li>
          <li>Glycosuria → osmotic diuresis → PU/PD</li>
          <li>Negative energy balance → polyphagia + weight loss</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>PU/PD</strong> ✨ — classic</li>
          <li><strong>Polyphagia + weight loss</strong> ✨ (despite eating well)</li>
          <li>Muscle wasting (sarcopenia)</li>
          <li>Lethargy, ↓ grooming → unkempt coat</li>
          <li>Hindlimb weakness / <strong>plantigrade stance</strong> ✨ (peripheral neuropathy — diabetic) — relatively unique to cat
            <ul>
              <li>Walking on hocks instead of toes</li>
              <li>Reversible with good glycemic control</li>
            </ul>
          </li>
          <li>Hepatomegaly (lipidosis)</li>
          <li>Recurrent UTI (subclinical common)</li>
          <li>Dehydration</li>
          <li>If progressing to DKA: vomiting, anorexia, severe lethargy → emergency ✗</li>
        </ul>
        <p><strong>Acromegaly (in difficult-to-control DM cat) ✨:</strong></p>
        <ul>
          <li>Persistent insulin resistance despite high doses</li>
          <li>Weight gain or stable (paradoxical — anabolic GH)</li>
          <li>Broad facial features, prognathism, organomegaly</li>
          <li>Cardiac changes (HCM-like)</li>
          <li>Should screen IGF-1 if insulin &gt; 1.5 U/kg q12h not controlling</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Confirmation requires ALL of:</strong></p>
        <ol>
          <li>Compatible clinical signs</li>
          <li><strong>Persistent fasting hyperglycemia</strong> &gt; 200 mg/dL (cat normal &lt; 150)
            <ul>
              <li>Caution: stress hyperglycemia common in cat — single high reading not diagnostic</li>
              <li>Cat stress glucose can reach 300-400 mg/dL transiently!</li>
            </ul>
          </li>
          <li><strong>Glycosuria</strong> persistent</li>
        </ol>

        <p><strong>Key tests:</strong></p>
        <ul>
          <li><strong>Fructosamine</strong> ✨ — distinguishes true DM from stress hyperglycemia
            <ul>
              <li>Reflects average BG over past 2-3 weeks</li>
              <li>&gt; 350-400 µmol/L = persistent hyperglycemia (true DM)</li>
              <li>&lt; 300 = stress hyperglycemia likely</li>
              <li>Use to monitor control too (target &lt; 450 ideally)</li>
            </ul>
          </li>
          <li>Repeated BG curves over time</li>
          <li>UA + culture — glucosuria, ketones, UTI screen ✨</li>
        </ul>

        <p><strong>Workup (rule out concurrent dz):</strong></p>
        <ul>
          <li>CBC, biochem (liver, renal, electrolytes)</li>
          <li>T4 (concurrent hyperthyroid)</li>
          <li>Total T4 + free T4 if equivocal</li>
          <li>fPL / SNAP fPL (concurrent pancreatitis)</li>
          <li>Urine culture (UTI common, often subclinical)</li>
          <li>BP measurement</li>
          <li>Abdominal US (pancreatitis, neoplasia, adrenal)</li>
          <li><strong>IGF-1</strong> if insulin-resistant (acromegaly screen) ✨
            <ul>
              <li>&gt; 1000 ng/mL = highly suspect; pituitary MRI</li>
              <li>50-60% sensitivity in early acromegaly</li>
            </ul>
          </li>
        </ul>

        <p><strong>Differentiating type:</strong></p>
        <ul>
          <li>True idiopathic DM: most cases</li>
          <li>Acromegaly-induced: difficult control, ↑ IGF-1</li>
          <li>Cushing's-induced: rare in cat; LDDST/UCCR; usually concurrent skin signs</li>
          <li>Pancreatitis: ↑ fPL, US findings</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Stress hyperglycemia (cat — very common)</li>
          <li>Hyperthyroid (PU/PD + weight loss but polyphagia + ↑ T4 + no glycosuria)</li>
          <li>CKD (PU/PD + weight loss but no polyphagia + isosthenuric)</li>
          <li>Hepatic lipidosis (anorexia)</li>
          <li>Lymphoma</li>
          <li>Acromegaly (specific subtype of DM presentation)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Goals:</strong></p>
        <ul>
          <li>Resolve clinical signs (polydipsia, polyphagia, weight loss, neuropathy)</li>
          <li>Avoid hypoglycemia</li>
          <li>Achieve BG nadir 80-150 mg/dL, peak &lt; 300 mg/dL</li>
          <li>Goal fructosamine 350-450</li>
          <li><strong>Pursue diabetic remission</strong> ✨ — early intensive treatment</li>
        </ul>

        <p><strong>1. Insulin therapy ✨ — first-line:</strong></p>
        <ul>
          <li><strong>Glargine (Lantus) 0.25-0.5 U/kg SC q12h</strong> ✨ — first-line; long-acting basal insulin
            <ul>
              <li>Best remission rate ~ 50% if started early + low-carb diet</li>
              <li>Start 1-2 U/cat q12h regardless of weight (low-dose start)</li>
              <li>Smooth glucose curves</li>
              <li>U-100 syringe (0.3 mL recommended for accurate small doses)</li>
              <li>Newer detemir (Levemir) similar profile, alternative</li>
            </ul>
          </li>
          <li><strong>ProZinc (PZI — protamine zinc insulin) 0.25-0.5 U/kg SC q12h</strong> ✨ — first-line cat-licensed
            <ul>
              <li>Similar efficacy to glargine</li>
              <li>Available U-40 (cat-specific syringe)</li>
            </ul>
          </li>
          <li>Lente / Vetsulin / Caninsulin — alternatives but shorter duration in cat (less ideal q12h)</li>
          <li>NPH — too short duration in cat</li>
          <li><strong>Recheck BG curve at 7-14 days</strong>:
            <ul>
              <li>BG every 2h × 12h after insulin</li>
              <li>Adjust dose by 0.5-1 U based on nadir</li>
              <li>Avoid frequent dose changes (allow 5-7 days between adjustments)</li>
            </ul>
          </li>
          <li>Owner gives at home: SC injection at scapular region (rotate sites); morning + evening with meals</li>
        </ul>

        <p><strong>2. Low-carb diet ✨ — equally important:</strong></p>
        <ul>
          <li>Goal: &lt; 12% calories from carbs</li>
          <li>Hill's m/d (cat), Royal Canin Diabetic, Purina DM</li>
          <li>Wet food preferred (low carb + hydration)</li>
          <li><strong>Significantly increases remission rate</strong></li>
          <li>Transition gradually if anorexic/picky</li>
          <li>Feed twice daily with insulin</li>
        </ul>

        <p><strong>3. Weight management:</strong></p>
        <ul>
          <li>Obese cat → controlled weight loss (1-2% body weight/week max)</li>
          <li>Target BCS 5/9</li>
          <li>Improves insulin sensitivity → may achieve remission</li>
        </ul>

        <p><strong>4. Address concurrent disease:</strong></p>
        <ul>
          <li>Treat hyperthyroid, pancreatitis, UTI, dental dz</li>
          <li>Acromegaly: radiation therapy / cabergoline / hypophysectomy (referral)</li>
          <li>Discontinue glucocorticoids if possible</li>
        </ul>

        <p><strong>5. Monitoring:</strong></p>
        <ul>
          <li><strong>Continuous glucose monitor (Freestyle Libre 2/3)</strong> ✨ — gold standard modern
            <ul>
              <li>14-day continuous reading via subcutaneous sensor</li>
              <li>Avoids stress hyperglycemia of in-hospital BG curve</li>
              <li>Owner-friendly, scan with phone</li>
              <li>Becoming standard of care</li>
            </ul>
          </li>
          <li>BG curve at home (alternative if no Libre): owner does AlphaTrak ear/lip prick q2h</li>
          <li>In-hospital BG curve (older method, stress confounds)</li>
          <li>Fructosamine q3 mo</li>
          <li>Body weight, water intake diary, urine glucose dipstick</li>
          <li>Recheck UA + culture q6 mo (UTI screen)</li>
        </ul>

        <p><strong>6. Pursuit of remission ✨:</strong></p>
        <ul>
          <li>Definition: BG normal off insulin &gt; 4 weeks</li>
          <li>~ 30-50% achievable in newly diagnosed cats</li>
          <li>Predictors:
            <ul>
              <li>Early aggressive treatment (within 6 months of diagnosis)</li>
              <li>Glargine or detemir + low-carb diet</li>
              <li>No concurrent insulin-resistant disease</li>
              <li>Non-obese or successful weight loss</li>
            </ul>
          </li>
          <li>Watch for signs of remission: ↓ insulin requirement → hypoglycemia at standard dose</li>
          <li>Taper insulin gradually if BG nadirs &lt; 80</li>
          <li>Monitor for relapse (~ 25-30% relapse within 1 year)</li>
        </ul>

        <p><strong>7. Owner education:</strong></p>
        <ul>
          <li>Recognize signs of hypoglycemia: weakness, ataxia, seizures, collapse → karo syrup oral, then ER</li>
          <li>Recognize DKA signs: vomiting, anorexia, profound lethargy → ER</li>
          <li>Consistent feeding/insulin schedule</li>
          <li>Don't change diet abruptly</li>
          <li>Sick day rules (don't skip insulin if eating; reduce if anorexic + call)</li>
          <li>Stress importance of remission window</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hypoglycemia ✗</strong> — overdose, missed meal, exercise excess, remission</li>
          <li><strong>DKA</strong> ✗ — see entry; major emergency</li>
          <li>HHS (hyperosmolar hyperglycemic state) — cat occasionally; severe dehydration + extreme glucose without ketones</li>
          <li>Diabetic neuropathy (plantigrade stance) — reversible with good control</li>
          <li>Hepatic lipidosis (concurrent)</li>
          <li>Recurrent UTI</li>
          <li>Cataracts — cat rare (vs dog where common)</li>
          <li>Pancreatitis flares</li>
          <li>Acromegaly underlying (worsens with time)</li>
          <li>Loss of remission</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Cat with achieved remission: excellent</strong> — normal lifespan ✓</li>
          <li>Well-controlled DM cat (no remission): good — MST 3-5+ years</li>
          <li>Acromegaly-driven DM: variable — depends on concurrent dz progression</li>
          <li>DKA at presentation: good if survives initial — MST similar to non-DKA after stabilization</li>
          <li>Concurrent CKD/pancreatitis: guarded</li>
        </ul>
        <div class="callout">💡 <strong>Cat DM = remission possible!</strong> ✨ — Glargine/ProZinc + low-carb wet food + early aggressive Tx → 30-50% off insulin permanently. Window สำคัญในช่วง 6 เดือนแรก. Continuous glucose monitor (Libre) เปลี่ยน landscape การ monitor — stress-free, accurate</div>
      `,
    },
  },

  /* ---------- Ch 49 · Diabetic Ketoacidosis (DKA) ---------- */
  {
    id: 'diabetic-ketoacidosis',
    titleEn: 'Diabetic Ketoacidosis (DKA)',
    titleTh: 'DKA — เบาหวานชนิดมีกรดคีโตน',
    type: 'disease',
    system: 'endocrine',
    species: ['dog', 'cat'],
    tags: ['DKA', 'ketoacidosis', 'regular insulin', 'CRI', 'fluid therapy', 'hypokalemia', 'metabolic acidosis', 'beta-hydroxybutyrate', 'emergency'],
    aliases: ['DKA', 'ketoacidosis', 'diabetic emergency', 'เบาหวานคีโต', 'เบาหวานวิกฤต'],
    source: 'Ch. 49 · pp. 840–851',
    sections: {
      definition: `
        <p><strong>Life-threatening complication ของ DM</strong> ✗ — severe insulin deficiency + counter-regulatory hormones → ketogenesis → metabolic acidosis</p>
        <ul>
          <li>Triad: <strong>hyperglycemia + ketonemia + metabolic acidosis</strong></li>
          <li>Mortality 25-30% even with treatment</li>
          <li>Often presenting sign of new DM, or precipitated by concurrent illness in known DM</li>
          <li>Distinguish from "ketosis" (ketones without acidosis — outpatient management)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Triggers (concurrent illness in known diabetic):</strong></p>
        <ul>
          <li>Pancreatitis ✨ (very common trigger)</li>
          <li>UTI / pyelonephritis ✨</li>
          <li>Pneumonia, prostatitis</li>
          <li>Cushing's flares</li>
          <li>Hyperthyroid (cat)</li>
          <li>Surgery, trauma</li>
          <li>Sepsis</li>
          <li>Glucocorticoid administration</li>
          <li>Estrus / pregnancy</li>
          <li>Insulin omission / underdosing</li>
          <li>Heart failure</li>
          <li>Renal failure</li>
        </ul>
        <p><strong>Or new DM presentation</strong> — 30-40% of DKA cases are first DM diagnosis</p>
      `,
      pathophysiology: `
        <ul>
          <li>Severe insulin deficiency + ↑ glucagon, cortisol, GH, catecholamines</li>
          <li>Lipolysis → free fatty acids → hepatic ketogenesis (β-hydroxybutyrate &gt; acetoacetate &gt; acetone)</li>
          <li>Ketones = strong organic acids → metabolic acidosis</li>
          <li>Hyperglycemia → osmotic diuresis → severe dehydration</li>
          <li>Loss of K, Na, Cl, P, Mg in urine</li>
          <li>Apparent "normal" K in serum despite total body K depletion (acidosis shifts K out of cells)</li>
          <li>Once insulin given + acidosis corrected → K shifts back into cells → severe hypokalemia ✗</li>
          <li>Severe phosphorus depletion → hemolysis (cat especially)</li>
          <li>Hyperosmolarity → CNS depression, coma</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li>Severe lethargy, weakness, depression</li>
          <li><strong>Vomiting</strong> ✨</li>
          <li>Anorexia (after PD/PU phase)</li>
          <li>Severe dehydration (5-10% loss)</li>
          <li>Tachypnea / Kussmaul respiration (compensatory for acidosis)</li>
          <li>Acetone breath (fruity smell) ✨</li>
          <li>Cardiovascular: tachycardia → progressing to bradycardia/shock if severe</li>
          <li>Hypothermia (severe)</li>
          <li>Mental dullness → stupor → coma (severe)</li>
          <li>Concurrent illness signs (pancreatitis pain, UTI, etc.)</li>
          <li>± plantigrade stance (cat, longstanding DM)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diagnostic triad:</strong></p>
        <ol>
          <li><strong>Hyperglycemia</strong> &gt; 250 mg/dL (often &gt; 400-600)</li>
          <li><strong>Ketones</strong> in urine (dipstick) and/or blood (β-hydroxybutyrate &gt; 3.5 mmol/L)
            <ul>
              <li>Note: dipstick detects acetoacetate but not β-hydroxybutyrate (the dominant ketone in DKA!)</li>
              <li>Negative urine ketones ≠ no DKA — measure blood β-hydroxybutyrate ✨</li>
            </ul>
          </li>
          <li><strong>Metabolic acidosis</strong> — pH &lt; 7.3, HCO3 &lt; 15 mEq/L (or anion gap &gt; 25)</li>
        </ol>

        <p><strong>Workup:</strong></p>
        <ul>
          <li>Venous blood gas (priority) ✨</li>
          <li>Electrolytes — K (often misleading), Na, Cl, P, Mg, Ca (ionized)</li>
          <li>Glucose</li>
          <li>BUN, Cr (often elevated — pre-renal + intrinsic)</li>
          <li>CBC — leukocytosis common (concurrent infection? stress?)</li>
          <li>UA + culture (UTI common trigger)</li>
          <li>fPL/cPL or SNAP cPL (pancreatitis trigger)</li>
          <li>Abdominal US</li>
          <li>Thoracic radiographs (pneumonia, CHF)</li>
          <li>T4 (cat)</li>
          <li>Liver enzymes — often elevated (hepatic lipidosis cat)</li>
          <li>Coag panel — DIC risk</li>
          <li>Lactate (often elevated — perfusion, sepsis)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Pancreatitis (often concurrent rather than alternative)</li>
          <li>HHS (hyperosmolar hyperglycemic state) — DKA without significant ketones; extreme glucose &gt; 600, severe hyperosmolarity</li>
          <li>AKI / CKD acute</li>
          <li>Sepsis</li>
          <li>Severe gastroenteritis</li>
          <li>Toxin (ethylene glycol — ↑ anion gap acidosis without ketones; ↑ Cr; calcium oxalate crystals)</li>
        </ul>
      `,
      treatment: `
        <p><strong>4 priorities (in order):</strong></p>
        <ol>
          <li>Restore intravascular volume + tissue perfusion</li>
          <li>Correct electrolyte abnormalities (especially K + P)</li>
          <li>Control hyperglycemia + halt ketogenesis</li>
          <li>Identify + treat trigger</li>
        </ol>

        <p><strong>1. Fluid therapy ✨ — START FIRST, BEFORE INSULIN:</strong></p>
        <ul>
          <li><strong>0.9% NaCl</strong> initial choice (normalizes Na slowly + restores volume)
            <ul>
              <li>Alternative: LRS or Plasmalyte (caution K content)</li>
            </ul>
          </li>
          <li>Bolus 10-20 mL/kg (dog) / 5-10 mL/kg (cat) over 30-60 min if hypovolemic; reassess</li>
          <li>Replace dehydration deficit over 24-48h</li>
          <li>Maintenance + ongoing losses</li>
          <li>Monitor: HR, BP, MM, CRT, body weight q6h, urine output</li>
          <li>Avoid over-resuscitation (risk pulmonary edema, cerebral edema)</li>
        </ul>

        <p><strong>2. Potassium supplementation ✨ — CRITICAL:</strong></p>
        <ul>
          <li>Almost always needed despite "normal" initial serum K</li>
          <li>Add KCl to fluids:
            <ul>
              <li>Serum K &gt; 5.5: don't add yet, recheck after fluids</li>
              <li>K 3.5-5.0: add 20 mEq KCl/L</li>
              <li>K 3.0-3.5: add 30 mEq KCl/L</li>
              <li>K 2.5-3.0: add 40 mEq KCl/L</li>
              <li>K &lt; 2.5: add 60 mEq KCl/L (ideally 80 for severe — caution rate)</li>
            </ul>
          </li>
          <li><strong>Maximum K infusion rate: 0.5 mEq/kg/hr</strong> (don't exceed — cardiac arrhythmia)</li>
          <li>Recheck K q4-6h initially, then q12h</li>
          <li>Anticipate K drop with insulin + acidosis correction</li>
        </ul>

        <p><strong>3. Phosphorus supplementation:</strong></p>
        <ul>
          <li>If P &lt; 1.5 mg/dL (especially cat) — risk hemolysis</li>
          <li>Potassium phosphate replace 25-50% of K supplementation as KPhos
            <ul>
              <li>Not exceed 0.03-0.12 mmol/kg/hr</li>
              <li>Provides P + K simultaneously</li>
            </ul>
          </li>
          <li>Caution: hypocalcemia can result from rapid P correction</li>
          <li>Recheck P q12h</li>
        </ul>

        <p><strong>4. Insulin therapy ✨ — START AFTER 1-4h of fluid resuscitation:</strong></p>
        <ul>
          <li><strong>Use REGULAR (short-acting) insulin only</strong> ✨ — Humulin R, Novolin R</li>
          <li><strong>Method 1: Low-dose CRI (preferred)</strong>:
            <ul>
              <li>2.2 U/kg regular insulin in 250 mL 0.9% NaCl (concentration depends on patient size)</li>
              <li>Run via separate line at 10 mL/hr (~ 0.05-0.1 U/kg/hr)</li>
              <li>Pre-flush IV line with 50 mL of solution (insulin binds to plastic)</li>
              <li>Adjust rate based on glucose checks q2h</li>
              <li>Goal: BG drop &lt; 50-75 mg/dL/hr</li>
            </ul>
          </li>
          <li><strong>Method 2: Intermittent IM</strong>:
            <ul>
              <li>0.1-0.2 U/kg IM initial</li>
              <li>Then 0.05-0.1 U/kg IM q1h</li>
              <li>Less common in modern practice</li>
            </ul>
          </li>
          <li><strong>Once BG &lt; 250 mg/dL → add dextrose to fluids</strong> ✨
            <ul>
              <li>2.5% dextrose if BG 200-250</li>
              <li>5% dextrose if BG &lt; 200</li>
              <li>Continue insulin to suppress ketogenesis (insulin is treating ketosis, not just BG)</li>
              <li>Don't stop insulin until ketones cleared and acidosis resolved</li>
            </ul>
          </li>
          <li>Goal: maintain BG 150-250 throughout</li>
          <li>Transition to SC long-acting insulin once eating + ketones resolved</li>
        </ul>

        <p><strong>5. Bicarbonate — controversial:</strong></p>
        <ul>
          <li>NOT routine — fluid + insulin usually corrects acidosis</li>
          <li>Consider if pH &lt; 7.0 or HCO3 &lt; 8 with cardiovascular instability</li>
          <li>Calculate deficit conservatively: dose (mEq) = BW (kg) × 0.4 × (12 - pt HCO3) × 0.25 = give ¼ over 4-6 h</li>
          <li>Caution: paradoxical CSF acidosis, hypokalemia worsening</li>
        </ul>

        <p><strong>6. Treat trigger:</strong></p>
        <ul>
          <li>Pancreatitis: supportive care, anti-emetics, pain management</li>
          <li>UTI: culture-based antibiotic</li>
          <li>Other infections: appropriate antibiotic</li>
          <li>Cushing's: stabilize first, treat after recovery</li>
        </ul>

        <p><strong>7. Supportive:</strong></p>
        <ul>
          <li>Anti-emetics (maropitant, ondansetron)</li>
          <li>Pain management (avoid NSAIDs)</li>
          <li>Antibiotics if infection suspected (broad spectrum until culture)</li>
          <li>Nutritional support — once stable, esophagostomy tube if anorexic &gt; 3 days (cat critical)</li>
          <li>Continuous monitoring: vital signs q1-2h, BG q2h, electrolytes q4-12h, body weight q6-12h</li>
        </ul>

        <p><strong>Transition to long-term management:</strong></p>
        <ul>
          <li>Criteria to transition: eating well, no vomiting, ketones cleared, electrolytes stable</li>
          <li>Discontinue regular insulin CRI</li>
          <li>Start long-acting SC insulin (glargine cat / Vetsulin or NPH dog) at conservative dose</li>
          <li>Hospitalize 24-48h after switch to confirm control</li>
          <li>Discharge with detailed home plan</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hypokalemia ✗</strong> — develops after insulin started; cardiac arrhythmia, weakness, ileus</li>
          <li><strong>Hypophosphatemia → hemolytic anemia (cat)</strong> ✗</li>
          <li><strong>Hypoglycemia</strong> — overcorrection</li>
          <li>Cerebral edema (rapid osmolar shift) — rare but devastating, especially with rapid correction</li>
          <li>Pulmonary edema (fluid overload)</li>
          <li>AKI</li>
          <li>DIC</li>
          <li>Sepsis</li>
          <li>Hospital-acquired infection</li>
          <li>Death (mortality 25-30%)</li>
          <li>Recurrent DKA after recovery (poor compliance, undertreatment)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>With aggressive treatment: mortality 25-30% acute episode</li>
          <li>Survivors with managed DM: similar to non-DKA DM long-term</li>
          <li>Negative prognostic factors:
            <ul>
              <li>Severe acidosis (pH &lt; 7.1)</li>
              <li>Severe dehydration</li>
              <li>Anuric AKI</li>
              <li>Severe pancreatitis</li>
              <li>Sepsis</li>
              <li>Hypothermia at presentation</li>
              <li>Cat &gt; dog mortality (concurrent lipidosis, pancreatitis)</li>
            </ul>
          </li>
          <li>Cost of intensive care often a limiting factor</li>
        </ul>
        <div class="callout">⚠️ <strong>DKA = ICU emergency</strong> ✗ — fluids first 1-4h, then insulin. K supplementation MANDATORY (will drop with treatment). Find + treat trigger (pancreatitis, UTI, infection most common). Mortality สูง — refer ถ้าไม่มี ICU capability<br><br>💡 Modern: blood β-hydroxybutyrate &gt; urine ketones (ดีกว่า) — handheld meter (Precision Xtra)</div>
      `,
    },
  },

  /* ---------- Ch 50 · Insulinoma (β-cell tumor) ---------- */
  {
    id: 'insulinoma',
    titleEn: 'Insulinoma',
    titleTh: 'อินซูลินโนมา — เนื้องอกเบต้าเซลล์',
    type: 'disease',
    system: 'endocrine',
    species: ['dog', 'cat'],
    tags: ['insulinoma', 'beta cell tumor', 'hypoglycemia', 'Whipple triad', 'diazoxide', 'prednisolone', 'partial pancreatectomy', 'streptozotocin'],
    aliases: ['β-cell tumor', 'insulin-secreting tumor', 'อินซูลิโนมา', 'pancreatic islet tumor'],
    source: 'Ch. 50 · pp. 873–882',
    sections: {
      definition: `
        <p><strong>Functional malignant tumor of pancreatic β-cells</strong> → autonomous insulin secretion → recurrent hypoglycemia</p>
        <ul>
          <li><strong>Almost always malignant</strong> in dog (~ 95% adenocarcinoma)</li>
          <li>Frequently <strong>metastatic at diagnosis</strong> (regional LN, liver) — even though primary tumor is small</li>
          <li>Middle-aged to older dogs (~ 9-10 yr median)</li>
          <li>Medium-large breeds: GSD, Boxer, Lab, Golden, Standard Poodle, Setter</li>
          <li>Cat: extremely rare</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li>Spontaneous neoplastic transformation of pancreatic islet β-cells</li>
          <li>No known specific cause</li>
          <li>No clear association with chronic pancreatitis or DM</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Tumor secretes insulin <strong>independent of glucose feedback</strong></li>
          <li>Persistent insulin → hypoglycemia → counter-regulatory response (epinephrine, cortisol, GH, glucagon)</li>
          <li>Chronic adaptation: brain becomes more tolerant — patients survive lower BG than expected</li>
          <li>Symptoms primarily neurological (neuroglycopenia)</li>
          <li>± peripheral neuropathy (paraneoplastic)</li>
          <li>Metastasis common: regional lymph nodes (mesenteric), liver, omentum</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Neuroglycopenic signs (BG-dependent):</strong></p>
        <ul>
          <li>Episodic weakness, ataxia ✨</li>
          <li><strong>Seizures</strong> ✨ (often presenting sign — generalized tonic-clonic)</li>
          <li>Collapse, syncope</li>
          <li>Mental dullness, "spaced out"</li>
          <li>Behavior changes, restlessness, anxiety</li>
          <li>Coma (severe)</li>
        </ul>
        <p><strong>Catecholamine release signs (acute hypoglycemia):</strong></p>
        <ul>
          <li>Trembling, muscle fasciculations</li>
          <li>Restlessness</li>
          <li>Polyphagia (some)</li>
          <li>Tachycardia</li>
        </ul>
        <p><strong>Pattern:</strong></p>
        <ul>
          <li>Episodes triggered by: fasting, exercise, excitement, stress</li>
          <li>Resolve with feeding (initially)</li>
          <li>Progressive — episodes become more frequent + severe</li>
          <li><strong>Often misdiagnosed as idiopathic epilepsy</strong> ✗</li>
        </ul>
        <p><strong>Other:</strong></p>
        <ul>
          <li>Weight gain (chronic insulin excess) — paradoxical</li>
          <li>Peripheral neuropathy (later — reflexes ↓, weakness, atrophy)</li>
          <li>Hepatomegaly (metastasis)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Whipple's triad ✨ — classic:</strong></p>
        <ol>
          <li>Symptoms of hypoglycemia</li>
          <li>Documented hypoglycemia (BG &lt; 60 mg/dL during episode)</li>
          <li>Resolution of symptoms with glucose administration</li>
        </ol>

        <p><strong>Initial workup:</strong></p>
        <ul>
          <li>Confirm hypoglycemia (multiple samples; fasting often needed):
            <ul>
              <li>Fasting BG &lt; 60 mg/dL (often &lt; 40-50)</li>
              <li>If unclear: hospitalize, fast 12-24h with q1h BG (rule out dietary, technical errors)</li>
            </ul>
          </li>
          <li><strong>Paired insulin + glucose during hypoglycemia</strong> ✨:
            <ul>
              <li>BG &lt; 60 + insulin INAPPROPRIATELY HIGH (within or above normal range) = consistent with insulinoma</li>
              <li>Amended insulin:glucose ratio: insulin (µU/mL) × 100 / (glucose mg/dL - 30) — &gt; 30 supportive</li>
              <li>Normal: insulin should be suppressed during hypoglycemia</li>
            </ul>
          </li>
          <li>Rule out other hypoglycemia causes (see DDx)</li>
        </ul>

        <p><strong>Imaging — locate primary + stage:</strong></p>
        <ul>
          <li><strong>Abdominal US</strong> — primary detection rate ~ 50-75%; small lesions difficult; check liver/LN</li>
          <li><strong>CT (triple-phase contrast)</strong> ✨ — better sensitivity (70-90%), recommended pre-surgery, stages mets</li>
          <li>Thoracic radiographs (rare lung mets)</li>
          <li>Nuclear medicine (octreotide scan) — limited availability</li>
          <li>Exploratory laparotomy with intra-op US — gold standard if imaging negative but disease confirmed biochemically</li>
        </ul>

        <p><strong>Staging:</strong></p>
        <ul>
          <li>Stage I: confined to pancreas</li>
          <li>Stage II: regional LN metastasis</li>
          <li>Stage III: distant metastasis (liver, omentum)</li>
        </ul>
      `,
      differential: `
        <p><strong>Other causes of hypoglycemia:</strong></p>
        <ul>
          <li><strong>Sepsis</strong> ✨ — leukogram, lactate, source workup</li>
          <li>Hepatic insufficiency / PSS — ↓ albumin, ↑ bile acids</li>
          <li>Addison's — Na/K, cortisol</li>
          <li>Hunting dog hypoglycemia / juvenile (toy breed puppies)</li>
          <li>Severe malnutrition</li>
          <li>Insulin overdose (iatrogenic in DM)</li>
          <li>Xylitol toxicity ✗ (history; severe acute hypoglycemia + hepatic failure)</li>
          <li>Other functional tumors (rare):
            <ul>
              <li>Hepatic carcinoma producing IGF-2</li>
              <li>Smooth muscle tumors (leiomyosarcoma) — paraneoplastic</li>
              <li>Hemangiosarcoma (rare)</li>
            </ul>
          </li>
          <li>Polycythemia vera (false low BG due to ↑ RBC consumption)</li>
          <li>Sample handling artifact (delayed measurement, RBC consumption)</li>
        </ul>
      `,
      treatment: `
        <p><strong>1. Acute hypoglycemia management ✗:</strong></p>
        <ul>
          <li>Conscious: feed; honey/karo syrup on gums if not eating</li>
          <li>Unconscious / seizing: <strong>50% dextrose 0.5-1 mL/kg IV slow</strong> (diluted 1:1 with saline; can be given through butterfly)
            <ul>
              <li>Caution: rapid bolus → reactive insulin surge → rebound hypoglycemia</li>
              <li>Follow with constant rate dextrose CRI (2.5-5%) until eating</li>
            </ul>
          </li>
          <li>Owner emergency kit: karo syrup PO between meals if shows signs</li>
        </ul>

        <p><strong>2. Surgical treatment ✨ — preferred when feasible:</strong></p>
        <ul>
          <li><strong>Partial pancreatectomy</strong> — remove visible tumor + regional debulking
            <ul>
              <li>Often left/right limb depending on location</li>
              <li>Remove visible LN mets if possible</li>
            </ul>
          </li>
          <li>Resolves hypoglycemia in ~ 50-90% (depends on stage)</li>
          <li>Survival benefit: median 1-2 years post-op (vs 5-12 mo medical alone)</li>
          <li><strong>Complications:</strong>
            <ul>
              <li>Post-op pancreatitis (common — give IV fluids 48-72h, fenta CRI)</li>
              <li>Iatrogenic DM (~ 10-25% — rare with partial resection)</li>
              <li>Persistent hypoglycemia from incomplete resection</li>
              <li>Recurrence (most cases — eventually)</li>
            </ul>
          </li>
          <li>Pre-op management:
            <ul>
              <li>Stabilize BG with frequent feeding + dextrose CRI</li>
              <li>Anesthesia caution — minimize fasting, dextrose-supplemented IVF intra-op</li>
            </ul>
          </li>
        </ul>

        <p><strong>3. Medical management ✨ — adjunctive or sole therapy:</strong></p>
        <ul>
          <li><strong>Frequent small meals</strong> ✨ — high protein, high fat, complex carbs; q4-6h
            <ul>
              <li>Avoid simple sugars (rebound)</li>
              <li>Hill's w/d, hypoallergenic blends</li>
            </ul>
          </li>
          <li><strong>Prednisolone 0.5-2 mg/kg PO q12h</strong> ✨ — first-line medical
            <ul>
              <li>Promotes gluconeogenesis</li>
              <li>Start low, titrate upward as needed</li>
              <li>Side effects: PU/PD, hepatomegaly, iatrogenic Cushing's</li>
            </ul>
          </li>
          <li><strong>Diazoxide 5-30 mg/kg PO q12h</strong> — directly inhibits insulin secretion
            <ul>
              <li>Add when prednisolone insufficient</li>
              <li>Side effects: anorexia, vomiting, diarrhea, hyponatremia, marrow suppression</li>
              <li>Cost can be limiting</li>
            </ul>
          </li>
          <li>Octreotide 10-50 µg SC q8-12h — somatostatin analog; variable response</li>
          <li>Glucagon CRI for refractory severe hypoglycemia (hospitalized)</li>
        </ul>

        <p><strong>4. Chemotherapy (advanced/metastatic):</strong></p>
        <ul>
          <li><strong>Streptozotocin 500 mg/m² IV q3 wk</strong> — selective β-cell toxicity (renal toxicity major concern; aggressive saline diuresis required)</li>
          <li>Limited availability, specialist needed</li>
          <li>Modest improvement in survival</li>
          <li>Toceranib (Palladia) — anecdotal efficacy in some cases</li>
        </ul>

        <p><strong>5. Monitor:</strong></p>
        <ul>
          <li>Owner home BG monitoring (AlphaTrak)</li>
          <li>Symptom diary</li>
          <li>Recheck physical, BG, electrolytes q1-3 mo</li>
          <li>Adjust feeding schedule + medications</li>
          <li>Imaging every 6 months for mets</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Severe hypoglycemia → seizures, coma, death</li>
          <li>Status epilepticus</li>
          <li>Peripheral neuropathy (paraneoplastic — distal weakness, atrophy)</li>
          <li>Iatrogenic complications:
            <ul>
              <li>Steroid side effects (prednisolone)</li>
              <li>Pancreatitis post-op</li>
              <li>Iatrogenic DM</li>
            </ul>
          </li>
          <li>Metastasis progression → liver failure</li>
          <li>Recurrent hypoglycemia despite medical management</li>
          <li>Rebound from rapid IV dextrose → reactive insulin secretion</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Overall: <strong>guarded long-term but good for symptom control</strong></li>
          <li><strong>Stage I (no mets) + surgery:</strong> MST 18-24 months</li>
          <li><strong>Stage II (LN mets) + surgery:</strong> MST 12-18 months</li>
          <li><strong>Stage III (distant mets) + medical:</strong> MST 6-12 months</li>
          <li>Medical management alone (any stage): MST 5-12 months</li>
          <li>Owner satisfaction generally high — quality of life often excellent for months-years</li>
          <li>Cause of death: often progressive disease + neuroglycopenic seizures</li>
        </ul>
        <div class="callout">💡 <strong>Older dog + episodic seizures + hypoglycemia = insulinoma until proven otherwise</strong> ✨ — paired insulin/glucose is key. Surgery + medical = best outcomes (1-2 yr median); medical-alone still gives 6-12 mo with good QOL<br><br>⚠️ **NEVER fast a known insulinoma patient** without IV dextrose — pre-op preparation critical
</div>
      `,
    },
  },

  /* ---------- Ch 47 · Feline Hyperthyroidism ---------- */
  {
    id: 'feline-hyperthyroidism',
    titleEn: 'Feline Hyperthyroidism',
    titleTh: 'ไทรอยด์เป็นพิษในแมว',
    type: 'disease',
    system: 'endocrine',
    species: ['cat'],
    tags: ['hyperthyroidism', 'thyrotoxicosis', 'methimazole', 'carbimazole', 'I-131', 'radioactive iodine', 'thyroidectomy', 'y/d diet', 'concurrent CKD', 'masked CKD'],
    aliases: ['hyperthyroid cat', 'thyrotoxicosis', 'ไทรอยด์', 'ต่อมไทรอยด์เป็นพิษ', 'feline hyperthyroidism'],
    source: 'Ch. 47 · pp. 786–812',
    sections: {
      definition: `
        <p>โรคต่อมไร้ท่อที่พบบ่อยที่สุดในแมวสูงวัย ✨ — &gt; 10% ของแมว &gt; 10 ปี</p>
        <ul>
          <li>เกิดจาก <strong>functional adenomatous hyperplasia / adenoma</strong> ของ thyroid (~ 98%)</li>
          <li>Thyroid carcinoma &lt; 2% (อาจสูงขึ้นถ้าโรคเรื้อรังนาน)</li>
          <li>Bilateral involvement ใน 70-90% ✨ (สำคัญสำหรับ surgery planning)</li>
          <li>Median age 12-13 yr; rare &lt; 8 yr</li>
          <li>ไม่มี breed/sex predilection ชัดเจน</li>
        </ul>
      `,
      etiology: `
        <ul>
          <li>Idiopathic — exact cause ไม่ทราบ</li>
          <li>Theories: dietary iodine variation, environmental goitrogens (BPA from food cans, fire retardants/PBDE), genetic susceptibility</li>
          <li>Indoor cats with canned food &gt; outdoor cats — risk ↑</li>
          <li>Aging — adenomatous transformation</li>
          <li>NOT autoimmune like Graves disease in humans</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>Autonomous T4/T3 secretion (ไม่ตอบสนองต่อ TSH feedback)</li>
          <li>↑ Metabolic rate → catabolic state</li>
          <li>↑ Cardiac output, β-adrenergic sensitization → tachycardia, hypertension, HCM-like changes</li>
          <li>↑ GFR → masks underlying CKD ✨ (sensitive issue!)</li>
          <li>↑ Bone turnover</li>
          <li>↑ Insulin resistance</li>
          <li>Catabolism → muscle wasting despite polyphagia</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Classic triad ✨:</strong></p>
        <ol>
          <li><strong>Weight loss</strong> despite polyphagia ✨</li>
          <li><strong>Polyphagia</strong> (ravenous, demanding food)</li>
          <li>Hyperactivity, restlessness, behavioral changes</li>
        </ol>

        <p><strong>Common signs:</strong></p>
        <ul>
          <li>PU/PD ✨</li>
          <li>Vomiting (intermittent)</li>
          <li>Diarrhea / large soft stools (rapid GI transit)</li>
          <li>Tachycardia, gallop rhythm</li>
          <li>Heart murmur (often new)</li>
          <li>Hypertension ✗ (~ 25%)</li>
          <li>Unkempt coat, matted fur</li>
          <li>Heat intolerance, panting</li>
          <li>Anxious, irritable, aggressive</li>
          <li><strong>Palpable thyroid nodule</strong> ✨ — feel cervical region (cat in sphinx position; thumb behind larynx; small mobile nodule slipping under fingers)
            <ul>
              <li>Unilateral ~ 30%, bilateral ~ 70%</li>
              <li>~ 10-15% ectopic (intrathoracic) — not palpable</li>
            </ul>
          </li>
        </ul>

        <p><strong>"Apathetic" hyperthyroidism (~ 5-10%):</strong></p>
        <ul>
          <li>Lethargy, anorexia (instead of polyphagia)</li>
          <li>Cardiac signs predominate</li>
          <li>Often older sicker cats with concurrent dz</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>1. Total T4 (TT4)</strong> ✨ — first-line:</p>
        <ul>
          <li>↑ above reference range = diagnostic in vast majority</li>
          <li>Reference: typically 0.8-4.0 µg/dL (varies by lab)</li>
          <li>~ 90% of hyperthyroid cats have ↑ TT4</li>
          <li>~ 10% have <strong>normal TT4 despite hyperthyroid</strong> (early dz, concurrent illness suppression)</li>
        </ul>

        <p><strong>2. Free T4 (fT4) by equilibrium dialysis</strong> ✨ — when TT4 normal but suspicious:</p>
        <ul>
          <li>More sensitive than TT4 alone</li>
          <li>↑ in hyperthyroid even if TT4 normal</li>
          <li>Caution: also ↑ in non-thyroidal illness (NTI) — false positive ~ 10-20%</li>
          <li>Best interpreted with TT4 + clinical signs</li>
          <li>Use as "tie-breaker" in equivocal cases</li>
        </ul>

        <p><strong>3. TSH (canine TSH assay used in cat — feline-specific not available):</strong></p>
        <ul>
          <li>Suppressed/undetectable in hyperthyroid</li>
          <li>Helpful if borderline T4 + suspicious signs</li>
          <li>Rule out hyperthyroid: TT4 mid-range + detectable TSH = unlikely hyperthyroid</li>
        </ul>

        <p><strong>4. T3 suppression test</strong> — historical, rarely used now (replaced by fT4 + TSH)</p>

        <p><strong>5. Thyroid scintigraphy (referral):</strong></p>
        <ul>
          <li>Gold standard — visualizes hyperfunctioning tissue</li>
          <li>Distinguishes unilateral vs bilateral (sx planning)</li>
          <li>Detects ectopic thyroid tissue (mediastinum)</li>
          <li>Detects carcinoma vs adenoma (multiple foci, distant uptake)</li>
        </ul>

        <p><strong>Concurrent disease screening (CRITICAL) ✨:</strong></p>
        <ul>
          <li><strong>CKD screen — masked by hyperthyroid</strong> ✨
            <ul>
              <li>BUN, Cr, SDMA, USG, UPC</li>
              <li>Hyperthyroid → ↑ GFR → falsely lowers Cr</li>
              <li>~ 30-40% of hyperthyroid cats have underlying CKD revealed after treatment</li>
              <li>SDMA more reliable in this scenario</li>
            </ul>
          </li>
          <li>Cardiac assessment: BP measurement (systolic), thoracic radiograph, echocardiogram if murmur/gallop</li>
          <li>UA + culture (UTI common, often subclinical in elderly cats)</li>
          <li>CBC (mild erythrocytosis, stress leukogram)</li>
          <li>Liver enzymes ↑ (mild ALT, ALP — usually resolve with treatment)</li>
          <li>Calcium (usually normal but can ↑)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>CKD alone (PU/PD + weight loss + no polyphagia)</li>
          <li>DM (PU/PD + polyphagia + weight loss but glycosuria)</li>
          <li>GI lymphoma / IBD (weight loss + vomiting + diarrhea)</li>
          <li>Other neoplasia</li>
          <li>EPI (rare in cat)</li>
          <li>Hepatic disease</li>
          <li>Behavioral hyperactivity (stress, environmental)</li>
        </ul>
      `,
      treatment: `
        <p><strong>4 treatment options:</strong></p>

        <p><strong>1. Methimazole (Tapazole / Felimazole) ✨ — first-line for most:</strong></p>
        <ul>
          <li><strong>Dose: start 2.5 mg PO q12h</strong> (regardless of cat size; titrate up to 5 mg q12h if needed)
            <ul>
              <li>Felimazole = veterinary formulation (1.25, 2.5, 5 mg)</li>
              <li>Methimazole human formulation works equally</li>
            </ul>
          </li>
          <li><strong>Transdermal methimazole</strong> ✨ — apply to inner pinna (rotate sides) q12h
            <ul>
              <li>For cats hard to pill</li>
              <li>Slightly less effective initially but improves over weeks</li>
              <li>Owner uses gloves</li>
            </ul>
          </li>
          <li>Mechanism: blocks thyroid peroxidase → blocks T4 synthesis (doesn't destroy gland)</li>
          <li>Time to effect: 2-4 wk</li>
          <li>Recheck T4 + Cr/SDMA at 2-4 wk → adjust dose
            <ul>
              <li>Goal T4: lower half of reference range (e.g., 1.0-2.0 µg/dL)</li>
              <li>If T4 still ↑ → ↑ methimazole</li>
              <li>If T4 too low → reduce</li>
            </ul>
          </li>
          <li><strong>Side effects (~ 10-20%):</strong>
            <ul>
              <li>GI: vomiting, anorexia (transient, often resolves)</li>
              <li>Facial pruritus / excoriation (immune-mediated; stop drug)</li>
              <li>Hepatopathy (rare, severe — stop drug)</li>
              <li>Blood dyscrasias: leukopenia, thrombocytopenia, bone marrow suppression (rare)</li>
              <li>Recheck CBC + chem at 2 wk, 1 mo, then q3-6 mo</li>
            </ul>
          </li>
          <li>Lifelong therapy (doesn't cure)</li>
          <li>Reversible — useful trial before definitive Tx (assess if CKD unmasks)</li>
        </ul>

        <p><strong>2. Carbimazole (Vidalta — sustained release):</strong></p>
        <ul>
          <li>Pro-drug → methimazole</li>
          <li>10-15 mg PO q24h (once daily!)</li>
          <li>Better compliance for some owners</li>
          <li>Limited availability in some regions</li>
        </ul>

        <p><strong>3. Radioactive iodine (I-131) ✨ — gold standard curative:</strong></p>
        <ul>
          <li><strong>Mechanism:</strong> selectively destroys hyperfunctioning thyroid tissue (normal tissue suppressed by negative feedback uptakes less)</li>
          <li>Single SC injection</li>
          <li>Cure rate &gt; 95% with one treatment</li>
          <li><strong>Advantages:</strong>
            <ul>
              <li>One-time treatment</li>
              <li>No daily medication</li>
              <li>Treats ectopic tissue (mediastinal)</li>
              <li>Treats carcinoma</li>
              <li>No anesthesia</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li>Specialized facility — limited availability in Thailand</li>
              <li>Hospitalization 5-14 days (radiation isolation by regulation)</li>
              <li>Cost (initially expensive but lifetime cost-effective)</li>
              <li>~ 5% develop persistent hypothyroidism (treat with thyroxine)</li>
              <li>Pre-treatment requires methimazole trial (assess CKD)</li>
            </ul>
          </li>
          <li><strong>Best candidate:</strong>
            <ul>
              <li>Cat tolerates methimazole + CKD doesn't worsen significantly</li>
              <li>Owner committed to definitive treatment</li>
              <li>Younger / healthier cat</li>
              <li>Bilateral or ectopic disease</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Thyroidectomy (surgical) ✨:</strong></p>
        <ul>
          <li>Unilateral or bilateral</li>
          <li>Indicated if I-131 not available; or unilateral confirmed by scintigraphy</li>
          <li>Pre-op: methimazole 2-4 weeks → stabilize cardiac, normalize T4</li>
          <li><strong>Complications:</strong>
            <ul>
              <li><strong>Hypocalcemia</strong> ✗ — parathyroid damage; bilateral procedure higher risk
                <ul>
                  <li>Monitor Ca q6-12h × 5-7 d post-op</li>
                  <li>Treat with calcium gluconate IV + calcitriol if symptomatic</li>
                </ul>
              </li>
              <li>Recurrence (incomplete excision, ectopic, contralateral hyperplasia)</li>
              <li>Laryngeal nerve damage (voice change, regurgitation)</li>
              <li>Horner's syndrome</li>
            </ul>
          </li>
          <li>Cost moderate; widely available</li>
          <li>~ 70-80% long-term success</li>
        </ul>

        <p><strong>5. Iodine-restricted diet (Hill's y/d):</strong></p>
        <ul>
          <li>Severely restricted iodine → thyroid can't make hormone</li>
          <li>Only effective if <strong>EXCLUSIVE</strong> diet (no treats, no other food, multi-cat homes problematic)</li>
          <li>Wet + dry available</li>
          <li>Lifelong</li>
          <li>Reasonable option in cats with limited treatment options (concurrent severe dz, owner refuses other Tx)</li>
          <li>Less effective than other options</li>
        </ul>

        <p><strong>Concurrent management:</strong></p>
        <ul>
          <li><strong>Hypertension:</strong> usually resolves with euthyroidism; if persists → amlodipine 0.625-1.25 mg/cat PO q24h</li>
          <li><strong>HCM/cardiac changes:</strong> often resolve with treatment; severe cases may need atenolol</li>
          <li><strong>UTI:</strong> culture-based</li>
          <li><strong>CKD masked:</strong>
            <ul>
              <li>Methimazole trial first to "unmask"</li>
              <li>If Cr ↑ significantly with euthyroidism → balance: aim for slightly higher T4 (mid-upper reference) to maintain GFR</li>
              <li>Goal: maintain QOL, not perfect normal T4 in cat with severe CKD</li>
            </ul>
          </li>
        </ul>

        <p><strong>Monitoring after definitive Tx:</strong></p>
        <ul>
          <li>T4 + chem panel at 1 mo, 3 mo, 6 mo, then q6 mo</li>
          <li>BP, body weight, BCS</li>
          <li>Watch for hypothyroidism (post-I-131 ~ 5%)</li>
          <li>UA q6 mo</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Cardiac: HCM-like changes, CHF, arrhythmia → often reverses with treatment</li>
          <li>Severe hypertension → retinal detachment, neuro signs ✗</li>
          <li>Cachexia, severe muscle wasting if untreated</li>
          <li>"Unmasking" of CKD post-Tx — major decision point</li>
          <li>Methimazole side effects (hepatopathy, blood dyscrasia, facial excoriation)</li>
          <li>Post-thyroidectomy hypocalcemia ✗</li>
          <li>Post-I-131 hypothyroidism (~ 5%)</li>
          <li>Carcinoma (rare but increases with chronicity / multiple I-131 needs)</li>
          <li>Recurrence (depending on Tx modality)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Excellent with appropriate treatment</strong> ✓ — MST 2-5+ years post-Tx</li>
          <li>I-131 cure: ~ 95% effective; MST &gt; 4 years</li>
          <li>Methimazole long-term: MST 2-3 years (limited by concurrent disease)</li>
          <li>Surgery: 70-80% success; lifetime if successful</li>
          <li>Concurrent CKD: shortens survival but still good QOL</li>
          <li>Carcinoma: poorer (10-15% MST 1 year despite treatment)</li>
          <li>Untreated: progressive decline 1-2 years</li>
        </ul>
        <div class="callout">💡 <strong>Hyperthyroid + senior cat = always screen CKD</strong> ✨ — masked by ↑ GFR; methimazole trial unmasks. Balance treatment goal between T4 control + renal preservation<br><br>I-131 = definitive cure; methimazole = reversible trial + lifelong management option. Transdermal methimazole = game-changer for owners</div>
      `,
    },
  },

  /* ---------- Ch 48 · Canine Hypothyroidism ---------- */
  {
    id: 'canine-hypothyroidism',
    titleEn: 'Canine Hypothyroidism',
    titleTh: 'ไทรอยด์ทำงานต่ำในหมา',
    type: 'disease',
    system: 'endocrine',
    species: ['dog'],
    tags: ['hypothyroidism', 'lymphocytic thyroiditis', 'levothyroxine', 'L-T4', 'TSH', 'free T4', 'sick euthyroid syndrome', 'myxedema'],
    aliases: ['hypothyroid dog', 'low thyroid', 'ไทรอยด์ต่ำ', 'canine hypothyroidism'],
    source: 'Ch. 48 · pp. 813–820',
    sections: {
      definition: `
        <p>การลดลงของฮอร์โมนไทรอยด์ — โรคต่อมไร้ท่อที่พบบ่อยในหมา (vs hyperthyroid ที่พบในแมว)</p>
        <ul>
          <li>~ 95% เป็น <strong>primary hypothyroidism</strong></li>
          <li>Middle-aged dogs (4-10 yr typical)</li>
          <li>Medium-large breeds: Golden, Doberman, GSD, Cocker, Boxer, Dachshund, Beagle, Irish Setter, Great Dane</li>
          <li><strong>Massively over-diagnosed</strong> ✗ — many "atypical" presentations are sick euthyroid syndrome, not true hypothyroidism</li>
          <li>Definitive diagnosis requires correct interpretation of full thyroid panel</li>
        </ul>
      `,
      etiology: `
        <p><strong>Primary (95%):</strong></p>
        <ul>
          <li><strong>Lymphocytic thyroiditis</strong> ✨ ~ 50% — autoimmune; thyroglobulin antibodies positive
            <ul>
              <li>Heritable in some breeds (Beagle, Doberman, Borzoi, Old English Sheepdog, Rhodesian Ridgeback)</li>
            </ul>
          </li>
          <li><strong>Idiopathic atrophy</strong> ~ 50% — end-stage of thyroiditis or independent</li>
          <li>Thyroid neoplasia (rare cause of hypothyroidism)</li>
          <li>Iodine deficiency (rare in commercial diet era)</li>
        </ul>

        <p><strong>Secondary (rare, &lt; 5%):</strong></p>
        <ul>
          <li>Pituitary disease (TSH deficiency)</li>
          <li>Congenital hypoplasia</li>
        </ul>

        <p><strong>Tertiary (very rare):</strong></p>
        <ul>
          <li>Hypothalamic disease</li>
        </ul>

        <p><strong>Drug-induced (transient):</strong></p>
        <ul>
          <li>Glucocorticoids (suppress TSH)</li>
          <li>Phenobarbital (induce metabolism)</li>
          <li>Trimethoprim-sulfa (idiosyncratic)</li>
          <li>Carprofen, mitotane, propranolol</li>
        </ul>
      `,
      pathophysiology: `
        <ul>
          <li>↓ T4/T3 production → reduced metabolic rate</li>
          <li>↑ TSH (compensatory, primary)</li>
          <li>Effects on virtually every tissue:
            <ul>
              <li>Skin/coat: ↓ hair growth cycle, ↓ sebum → seborrhea, alopecia</li>
              <li>↓ Lipid clearance → hypercholesterolemia, hepatic lipidosis</li>
              <li>↓ Cardiac contractility, bradycardia</li>
              <li>↓ GI motility</li>
              <li>↓ Erythropoiesis → anemia</li>
              <li>Neuromuscular: ↓ nerve conduction → neuropathies</li>
              <li>Reproductive: anestrus, low libido</li>
              <li>Severe: myxedema (mucinous edema)</li>
            </ul>
          </li>
        </ul>
      `,
      symptoms: `
        <p><strong>Classic dermatologic signs ✨:</strong></p>
        <ul>
          <li><strong>Symmetrical bilateral truncal alopecia</strong> ✨ — non-pruritic; "rat tail," dorsum spared (sun-exposed areas)</li>
          <li>Easily epilated hair (not regrowing where shaved)</li>
          <li>Dull, dry coat; dry brittle hair</li>
          <li>Hyperpigmentation (chronic)</li>
          <li>Seborrhea (dry or oily)</li>
          <li>Recurrent pyoderma, otitis externa</li>
          <li>Demodicosis (immunosuppression)</li>
          <li>Comedones, calcinosis ↓ (these are MORE Cushing's)</li>
          <li>Tragic facial expression (myxedema — drooping eyelids, thickened skin)</li>
        </ul>

        <p><strong>Metabolic:</strong></p>
        <ul>
          <li><strong>Weight gain</strong> despite normal/decreased appetite ✨</li>
          <li>Lethargy, exercise intolerance</li>
          <li>Heat-seeking, cold intolerance</li>
          <li>Mental dullness, slowed reflexes</li>
        </ul>

        <p><strong>Neuromuscular (less common):</strong></p>
        <ul>
          <li>Generalized weakness</li>
          <li>Peripheral neuropathy (laryngeal paralysis ✨, megaesophagus, facial nerve, vestibular)</li>
          <li>Myopathy</li>
        </ul>

        <p><strong>Cardiovascular:</strong></p>
        <ul>
          <li>Bradycardia</li>
          <li>Weak femoral pulses</li>
          <li>(Rarely contributes to clinical signs)</li>
        </ul>

        <p><strong>Reproductive:</strong></p>
        <ul>
          <li>Anestrus (intact female), prolonged interestrous</li>
          <li>Infertility, gynecomastia (intact male)</li>
        </ul>

        <p><strong>Severe — myxedema coma ✗ (rare):</strong></p>
        <ul>
          <li>Profound lethargy, stupor, coma</li>
          <li>Hypothermia</li>
          <li>Bradycardia, hypotension</li>
          <li>Hypoventilation</li>
          <li>Mortality high without aggressive intervention</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Hematology / biochemistry findings ✨:</strong></p>
        <ul>
          <li><strong>Hypercholesterolemia</strong> ✨ — &gt; 75% of hypothyroid dogs; supportive but not diagnostic alone</li>
          <li>Hypertriglyceridemia</li>
          <li>Mild non-regenerative anemia (~ 50%)</li>
          <li>Normal liver enzymes (mild ↑ ALP possible)</li>
          <li>Normal renal function</li>
        </ul>

        <p><strong>Thyroid testing — interpretation is key ✨:</strong></p>

        <p><strong>1. Total T4 (TT4):</strong></p>
        <ul>
          <li>Normal range typically 1.0-4.0 µg/dL (lab dependent)</li>
          <li>Low TT4 + clinical signs + supportive labs = consistent</li>
          <li><strong>BUT:</strong> low TT4 alone is NOT diagnostic — many false positives:
            <ul>
              <li>Sick euthyroid syndrome (NTI) — most common false low T4</li>
              <li>Drugs (steroids, phenobarb, sulfa, NSAIDs)</li>
              <li>Stress, athletic conditioning (sighthounds normally low T4!)</li>
              <li>Diurnal/circadian variation</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Free T4 (fT4) by equilibrium dialysis</strong> ✨:</p>
        <ul>
          <li>More accurate than TT4 — less affected by binding protein/illness</li>
          <li>Low fT4 = more reliable indicator of hypothyroidism</li>
          <li>Still can be ↓ in severe NTI</li>
        </ul>

        <p><strong>3. TSH</strong> (canine TSH = cTSH):</p>
        <ul>
          <li>↑ TSH + low fT4 + low TT4 = primary hypothyroidism (high specificity)</li>
          <li>~ 70% of hypothyroid dogs have ↑ TSH</li>
          <li>Normal TSH does NOT rule out hypothyroidism — 30% have normal TSH</li>
          <li>Caution: also ↑ in recovery from NTI</li>
        </ul>

        <p><strong>4. Thyroglobulin antibodies (TgAA):</strong></p>
        <ul>
          <li>Marker of lymphocytic thyroiditis</li>
          <li>+ in early disease (predictive)</li>
          <li>Doesn't confirm current hypothyroidism (just thyroiditis)</li>
        </ul>

        <p><strong>Algorithm ✨:</strong></p>
        <ol>
          <li>Compatible signs + supportive lab findings (especially hypercholesterolemia)?</li>
          <li>Run <strong>full thyroid panel: TT4 + fT4 + TSH</strong></li>
          <li>↓ TT4 + ↓ fT4 + ↑ TSH = hypothyroidism (high confidence)</li>
          <li>↓ TT4 + normal fT4 + normal TSH = NOT hypothyroid (likely NTI / drug)</li>
          <li>↓ TT4 + ↓ fT4 + normal TSH = equivocal — repeat in 4-6 wk; consider trial therapy</li>
          <li>↓ TT4 + normal fT4 + ↑ TSH = early disease — monitor, retest</li>
        </ol>

        <p><strong>Avoid:</strong></p>
        <ul>
          <li>Diagnosing on TT4 alone</li>
          <li>Testing during acute illness</li>
          <li>Testing while on confounding drugs (wait 4-6 wk after discontinuation)</li>
          <li>Therapeutic trial without baseline tests (creates lifelong unnecessary therapy)</li>
        </ul>

        <p><strong>Other workup:</strong></p>
        <ul>
          <li>CBC, biochem (assess for concurrent disease causing NTI)</li>
          <li>UA</li>
          <li>Cardiac evaluation if signs (bradycardia, etc.)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Sick euthyroid syndrome (NTI)</strong> ✨ — most important DDx; address concurrent illness</li>
          <li>Hyperadrenocorticism (similar dermatologic signs but different metabolic profile)</li>
          <li>Demodicosis</li>
          <li>Sex hormone alopecia (Pomeranian alopecia X, ovarian remnant)</li>
          <li>Recurrent flank alopecia</li>
          <li>Cyclic alopecia</li>
          <li>Dermatophytosis</li>
          <li>Pituitary dwarfism (juvenile)</li>
          <li>Color dilution alopecia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Levothyroxine (synthetic L-T4) ✨ — only treatment:</strong></p>
        <ul>
          <li><strong>Initial dose: 0.02 mg/kg PO q12h</strong> (0.018-0.022 mg/kg)
            <ul>
              <li>= ~ 20 µg/kg q12h</li>
              <li>Soloxine, Thyro-Tabs, Levothyroxine human, Forthyron</li>
              <li>Round to nearest tablet size</li>
            </ul>
          </li>
          <li><strong>Cardiac disease / older patient: start lower</strong> — 0.005-0.01 mg/kg q12h, titrate up over weeks
            <ul>
              <li>Avoid rapid increase in metabolic rate stressing heart</li>
            </ul>
          </li>
          <li>Time to clinical effect: 4-8 weeks</li>
          <li>Hair regrowth: 3-6 months</li>
          <li>Lifelong treatment</li>
        </ul>

        <p><strong>Monitoring (4-8 weeks after starting / dose change):</strong></p>
        <ul>
          <li><strong>Post-pill T4</strong> ✨ — sample 4-6h post AM dose
            <ul>
              <li>Goal: upper-half of reference range or slightly above</li>
              <li>Too low = increase dose</li>
              <li>Too high (well above reference) = reduce dose / check for absorption issues</li>
            </ul>
          </li>
          <li>Pre-pill T4 (just before next dose):
            <ul>
              <li>Some clinicians prefer this; should be in reference range</li>
            </ul>
          </li>
          <li>Clinical response review:
            <ul>
              <li>Energy improvement (often within 1-2 wk)</li>
              <li>Weight loss (gradual over weeks-months)</li>
              <li>Hair regrowth (3-6 mo)</li>
              <li>Cholesterol normalization (4-8 wk)</li>
            </ul>
          </li>
          <li>Recheck T4 + cholesterol q6 mo lifelong (or sooner if signs change)</li>
        </ul>

        <p><strong>Adjusting:</strong></p>
        <ul>
          <li>Inadequate response after 6-8 wk:
            <ul>
              <li>Check compliance (most common reason)</li>
              <li>Check storage (heat-sensitive)</li>
              <li>Check brand (some generics less reliable)</li>
              <li>Increase dose by 25-50%, recheck in 4 wk</li>
              <li>Consider concurrent disease</li>
            </ul>
          </li>
          <li>Once daily dosing acceptable in stable cases (after initial control on q12h):
            <ul>
              <li>0.02 mg/kg PO q24h (full daily dose given once)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Myxedema coma — emergency ✗:</strong></p>
        <ul>
          <li>IV levothyroxine 5 µg/kg IV q12h × 2-3 doses → switch to oral</li>
          <li>Aggressive supportive care: warm fluids, ventilation, glucose</li>
          <li>Investigate triggers (sepsis, surgery)</li>
          <li>Mortality 50%+</li>
        </ul>

        <p><strong>Side effects of over-supplementation (thyrotoxicosis):</strong></p>
        <ul>
          <li>Restlessness, polyphagia, weight loss</li>
          <li>Tachycardia, panting</li>
          <li>PU/PD</li>
          <li>Reduce dose if seen</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Untreated: progressive decline; severe dermatologic dz; secondary infections</li>
          <li>Cardiac complications (severe untreated)</li>
          <li>Megaesophagus, laryngeal paralysis (peripheral neuropathy)</li>
          <li>Myxedema coma ✗ (rare, severe untreated/triggered)</li>
          <li>Iatrogenic thyrotoxicosis (overdose)</li>
          <li>Concurrent autoimmune diseases (lymphocytic thyroiditis associated with other autoimmune syndromes — Addison's, IMHA)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Excellent with appropriate treatment</strong> ✓ — normal lifespan, full clinical resolution</li>
          <li>Hair regrowth, weight normalization, energy restoration over 3-6 months</li>
          <li>Concurrent autoimmune disease may complicate</li>
          <li>Myxedema coma: poor without aggressive treatment</li>
          <li>Lifelong therapy + monitoring required</li>
        </ul>
        <div class="callout">💡 <strong>Hypothyroid = over-diagnosed</strong> ✗ — แค่ low T4 ไม่พอ. ต้องมี: clinical signs + supportive labs (cholesterol) + full panel (low fT4 + ↑ TSH ideally). Sick euthyroid syndrome (NTI) คือ false positive ที่พบบ่อยที่สุด — รักษา concurrent illness ก่อนตรวจ thyroid<br><br>Levothyroxine 0.02 mg/kg q12h เริ่มต้น; cardiac/elderly เริ่ม lower</div>
      `,
    },
  },

  /* ---------- More entries to come ---------- */

];
