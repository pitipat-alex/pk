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
    titleTh: 'อาการแสดงทางคลินิกของโรคหัวใจ',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['murmur', 'syncope', 'cough', 'dyspnea', 'CHF', 'heart failure', 'tachypnea', 'arrhythmia'],
    aliases: ['heart failure signs', 'อาการโรคหัวใจ', 'หัวใจล้มเหลว'],
    source: 'Ch. 1 · pp. 1–12',
    sections: {
      definition: `
        <p>กลุ่มอาการที่แสดงว่ามีปัญหาเกี่ยวกับ <strong>cardiac output</strong>, <strong>backward congestion</strong>, หรือ <strong>arrhythmia</strong> ใช้เป็น <em>red flag</em> ในการคัดกรองคนไข้ในห้องตรวจ</p>
        <ul>
          <li>ความสำคัญทางคลินิก: หัวใจล้มเหลวเป็นสาเหตุการตายอันดับต้นๆ ของสุนัขสูงอายุ</li>
          <li>หลายเคสไม่มีอาการในระยะแรก (preclinical / stage B) — การคัดกรองด้วย auscultation จึงสำคัญ</li>
        </ul>
      `,
      etiology: `
        <p><strong>กลุ่มอาการแบ่งตามกลไก:</strong></p>
        <ul>
          <li><strong>Forward failure</strong> (low cardiac output) → exercise intolerance, weakness, syncope, prerenal azotemia</li>
          <li><strong>Left-sided backward failure</strong> → pulmonary edema → cough, tachypnea, dyspnea, orthopnea</li>
          <li><strong>Right-sided backward failure</strong> → systemic venous congestion → ascites, hepatomegaly, jugular distension, pleural effusion</li>
          <li><strong>Arrhythmia</strong> → palpitations, syncope, sudden death</li>
        </ul>
      `,
      pathophysiology: `
        <p>เมื่อ cardiac output ลดลง → ระบบประสาทอัตโนมัติและ RAAS activate ชดเชย:</p>
        <ul>
          <li>↑ Sympathetic tone → tachycardia, vasoconstriction</li>
          <li>↑ RAAS → Na/water retention → preload เพิ่ม</li>
          <li>ระยะแรกชดเชยได้ → asymptomatic (stage B)</li>
          <li>เมื่อชดเชยไม่พอ → CHF (stage C–D) จาก pulmonary/systemic venous pressure สูง → edema, effusion</li>
        </ul>
      `,
      symptoms: `
        <p><strong>1. Coughing</strong></p>
        <ul>
          <li><em>Cardiogenic:</em> moist, soft, มักช่วงกลางคืน/เช้าตรู่ ร่วมกับ tachypnea</li>
          <li><em>Airway origin:</em> dry, "honking" cough โดยไม่มี tachypnea (e.g. tracheal collapse, chronic bronchitis)</li>
        </ul>
        <p><strong>2. Tachypnea / Dyspnea</strong></p>
        <ul>
          <li><strong>Resting respiratory rate (RRR)</strong> — sleeping &gt; 30/min ผิดปกติ</li>
          <li>ให้เจ้าของนับที่บ้าน เป็น early warning ของ pulmonary edema</li>
        </ul>
        <p><strong>3. Exercise intolerance</strong> — ตามตัวก่อน หอบเร็ว ไม่อยากเดินไกล</p>
        <p><strong>4. Syncope</strong> — เป็นลม กะทันหัน หมดสติชั่วครู่ → คิดถึง arrhythmia, cough-syncope, vasovagal, PH</p>
        <p><strong>5. Abdominal distension</strong> — ascites จาก right-CHF หรือ pericardial effusion</p>
        <p><strong>6. Cyanosis</strong> — central (R-to-L shunt, severe pulm dz) vs peripheral (low CO)</p>
        <p><strong>7. แมว</strong> — มักมาด้วย acute respiratory distress, hindlimb paralysis (ATE), หรือ sudden death — silent killer</p>
      `,
      diagnosis: `
        <p><strong>Physical Examination</strong></p>
        <ul>
          <li><strong>Auscultation</strong> — heart murmur (grade I–VI), gallop sounds (S3, S4), arrhythmia, lung crackles</li>
          <li><strong>Pulse quality</strong> — bounding (PDA, AR), weak (low CO, AS), pulse deficits (arrhythmia)</li>
          <li><strong>Mucous membranes</strong> — pallor, cyanosis, prolonged CRT</li>
          <li><strong>Jugular vein</strong> — distension or pulsation → right-sided disease, PH</li>
          <li><strong>Hepatojugular reflux</strong> positive ใน right CHF</li>
          <li><strong>Resting respiratory rate</strong> — count 1 นาที ที่บ้านขณะหลับ; &gt; 30 = abnormal</li>
        </ul>
        <p><strong>Lab Investigation</strong></p>
        <ul>
          <li><strong>NT-proBNP</strong> — sensitive marker; ค่าสูง → cardiac origin of dyspnea</li>
          <li><strong>cTnI</strong> — myocardial injury (DCM, myocarditis)</li>
          <li>CBC, biochem, T4, BP</li>
          <li>Heartworm antigen (endemic areas)</li>
        </ul>
        <p><strong>Imaging</strong></p>
        <ul>
          <li><strong>Thoracic radiographs</strong> — VHS, chamber enlargement, pulmonary edema (dorsocaudal hilar pattern in dogs), pleural effusion (in cats)</li>
          <li><strong>Echocardiography</strong> — gold standard for structural/functional assessment</li>
          <li><strong>ECG</strong> — arrhythmia documentation</li>
          <li><strong>Holter</strong> — intermittent arrhythmia, syncope workup</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>Cough:</strong> tracheal collapse, chronic bronchitis, pneumonia, neoplasia, heartworm disease</li>
          <li><strong>Dyspnea:</strong> upper airway obstruction, asthma (cat), pleural effusion (non-cardiac), pulmonary thromboembolism</li>
          <li><strong>Syncope:</strong> seizure, hypoglycemia, vestibular disease, narcolepsy</li>
          <li><strong>Ascites:</strong> liver disease, hypoalbuminemia, neoplasia, vasculitis</li>
        </ul>
        <div class="callout">⚠️ ในแมว — โรคหัวใจอาจไม่มี murmur 30–50% — auscultation ปกติไม่แปลว่าหัวใจปกติ</div>
      `,
      treatment: `
        <p>การรักษา <strong>ขึ้นอยู่กับสาเหตุเฉพาะ</strong> ดู entries ของแต่ละโรค (MMVD, DCM, HCM, ฯลฯ)</p>
        <p>หลักทั่วไป:</p>
        <ul>
          <li>ระยะ asymptomatic (stage B): monitoring + management ของ predisposing factors (BP, weight)</li>
          <li>เมื่อมี CHF: <em>standard quadruple therapy</em> = furosemide + pimobendan + ACEI + spironolactone</li>
          <li>Acute decompensation: O2, IV furosemide, vasodilator (nitroprusside), thoracocentesis ถ้ามี effusion</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Cardiogenic pulmonary edema</strong> — fatal ถ้าไม่รักษาทัน</li>
          <li><strong>Cardiac arrhythmias</strong> — atrial fibrillation, ventricular tachycardia → sudden death</li>
          <li><strong>Pulmonary hypertension</strong> → right CHF</li>
          <li><strong>Arterial thromboembolism (ATE)</strong> โดยเฉพาะแมว HCM</li>
          <li><strong>Cardiac cachexia</strong> — late stage</li>
        </ul>
        <p><strong>Prognosis:</strong> แตกต่างกันมากตามโรค; ดู entries เฉพาะ</p>
      `,
    },
  },

  /* ---------- Ch 6 · Myxomatous Mitral Valve Disease (MMVD) ---------- */
  {
    id: 'mmvd',
    titleEn: 'Myxomatous Mitral Valve Disease (MMVD)',
    titleTh: 'โรคลิ้นหัวใจไมทรัลรั่วเรื้อรังในสุนัข',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog'],
    tags: ['MMVD', 'CMVD', 'CVHD', 'mitral regurgitation', 'MR', 'endocardiosis', 'CKCS', 'Cavalier'],
    aliases: ['chronic valvular disease', 'mitral valve disease', 'ลิ้นหัวใจรั่ว', 'หัวใจล้มเหลวสุนัข'],
    source: 'Ch. 6 · pp. 119–132',
    sections: {
      definition: `
        <p><strong>Myxomatous Mitral Valve Disease (MMVD)</strong> — โรคลิ้นหัวใจไมทรัลเสื่อมแบบ degeneration ที่พบบ่อยที่สุดในสุนัข</p>
        <ul>
          <li>เป็น <strong>โรคหัวใจที่พบบ่อยที่สุดในสุนัข</strong> โดยเฉพาะพันธุ์เล็ก-กลางสูงอายุ</li>
          <li>สุนัขพันธุ์เล็กอายุ &gt; 10 ปี มีความชุก &gt; 75%</li>
          <li>เพศผู้ ≈ เพศเมีย แต่ผู้ progress เร็วกว่า</li>
        </ul>
      `,
      etiology: `
        <p><strong>Genetic / breed predisposition</strong> — เป็นลักษณะหลัก</p>
        <ul>
          <li><strong>Cavalier King Charles Spaniel</strong> — onset เร็วและรุนแรง (autosomal polygenic, variable penetrance)</li>
          <li>Toy &amp; Miniature Poodle, Miniature Schnauzer, Chihuahua, Pomeranian, Fox Terrier, Cocker Spaniel, Pekingese, Dachshund, Boston Terrier, Miniature Pinscher, Whippet</li>
          <li>พันธุ์ใหญ่ (German Shepherd Dog) ก็เป็นได้ แต่ thickening น้อยกว่า</li>
        </ul>
        <div class="callout">💡 พันธุ์ใหญ่บางตัวเป็นทั้ง MMVD + DCM ร่วมกัน — ต้องพิจารณาทั้งสองโรค</div>
      `,
      pathophysiology: `
        <p><strong>Myxomatous degeneration</strong> ของลิ้น mitral valve:</p>
        <ul>
          <li>GAG (glycosaminoglycan) แทรกในชั้น fibrosa → collagen organization เสียไป → ลิ้นหนาและยืดหยุ่นน้อยลง</li>
          <li>Leaflets หนาขึ้น ปลายลิ้น prolapse เข้า atrium</li>
          <li>Chordae tendineae อ่อนแอ → เสี่ยง <strong>chordal rupture</strong> → acute decompensation</li>
        </ul>
        <p><strong>Hemodynamic consequences:</strong></p>
        <ul>
          <li>Mitral regurgitation (MR) → volume overload ต่อ LA และ LV</li>
          <li>LA dilation (อาจขยายมหาศาลก่อนมีอาการ) → atrial arrhythmia, bronchial compression, atrial tear</li>
          <li>LV eccentric hypertrophy → progressive remodeling</li>
          <li>↑ LA pressure → pulmonary venous congestion → <strong>cardiogenic pulmonary edema</strong></li>
          <li>Chronic ↑ LA pressure → pulmonary hypertension → right CHF</li>
        </ul>
        <p><strong>ACVIM staging</strong> (สำคัญในการตัดสินใจรักษา):</p>
        <ul>
          <li><strong>Stage A</strong> — at-risk breed, ยังไม่มี murmur</li>
          <li><strong>Stage B1</strong> — มี murmur แต่หัวใจไม่โต</li>
          <li><strong>Stage B2</strong> — มี murmur + LA/LV โต ยังไม่มี CHF (เริ่ม pimobendan ที่ stage นี้)</li>
          <li><strong>Stage C</strong> — เคยมี/มี CHF</li>
          <li><strong>Stage D</strong> — refractory to standard therapy</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Stage B (preclinical):</strong> ไม่มีอาการ — ตรวจพบ <strong>holosystolic murmur</strong> ที่ left apex ICS 4-6 (mid- to late-systolic click ในระยะแรก)</p>
        <p><strong>Stage C (CHF onset):</strong></p>
        <ul>
          <li>↑ Resting respiratory rate (RRR) — earliest sign</li>
          <li>Tachypnea, dyspnea, exercise intolerance</li>
          <li>Cough — soft, moist (cardiogenic) หรือ dry "honking" (airway compression จาก LA โต)</li>
          <li>Cyanosis, severe respiratory distress (acute pulmonary edema)</li>
          <li>Syncope — จาก arrhythmia, cough-syncope, atrial tear, PH</li>
          <li>Abdominal distension (ascites) — ถ้ามี right CHF จาก secondary PH</li>
        </ul>
        <div class="callout">📋 <strong>Owner home monitoring:</strong> สอนเจ้าของนับ resting (sleeping) respiratory rate; &gt; 30/min หรือเพิ่มจาก baseline &gt; 20% = early warning</div>
      `,
      diagnosis: `
        <p><strong>Auscultation</strong></p>
        <ul>
          <li>Holosystolic murmur ดังที่สุดที่ <strong>left apex (ICS 4-6)</strong></li>
          <li>ระดับ I–VI/VI; murmur ดังขึ้นเมื่อโรคเป็นมาก แต่ <em>massive</em> regurgitation อาจให้ murmur เบาลงได้</li>
          <li>S3 gallop — late stage with myocardial failure</li>
        </ul>
        <p><strong>Clinical pathology</strong></p>
        <ul>
          <li><strong>NT-proBNP</strong> — ≥ 1500 pmol/L → high risk for CHF, prognosis แย่</li>
          <li><strong>cTnI</strong> — ↑ ใน moderate-severe disease</li>
          <li>BP, BUN/Cr, electrolytes — baseline ก่อนเริ่มยา</li>
        </ul>
        <p><strong>Thoracic Radiographs</strong></p>
        <ul>
          <li><strong>Vertebral Heart Score (VHS)</strong> — เพิ่มตามระยะโรค (cutoff &gt; 11.4 ใน coughing dog suggests cardiac origin)</li>
          <li>LA enlargement → carina elevation, mainstem bronchus compression</li>
          <li>Pulmonary edema — perihilar interstitial-alveolar pattern (อาจ asymmetric)</li>
          <li>Pulmonary venous distension — early sign of CHF</li>
        </ul>
        <p><strong>Echocardiography (gold standard)</strong></p>
        <ul>
          <li>Thickened/prolapsing mitral leaflets ± chordal rupture (flail leaflet)</li>
          <li>LA:Ao ratio &gt; 1.6 = enlarged; ≥ 2.0 = severe</li>
          <li>LVIDd normalized (LVIDDN) &gt; 1.7 = LV dilation</li>
          <li>Color Doppler: regurgitant jet area</li>
          <li>TR jet velocity → estimate pulmonary artery pressure</li>
        </ul>
        <p><strong>ECG</strong> — wide P waves (P mitrale), tall R waves; arrhythmia (APC, AF, VPC) ในระยะหลัง</p>
      `,
      differential: `
        <ul>
          <li><strong>DCM</strong> — โดยเฉพาะพันธุ์ใหญ่ที่มี murmur</li>
          <li><strong>Infective endocarditis</strong> — fever + new murmur + thromboembolic events</li>
          <li><strong>Tricuspid regurgitation</strong> — murmur ที่ right apex</li>
          <li><strong>VSD</strong> — congenital, harsh murmur ICS 3-4 ขวา</li>
          <li><strong>Mitral dysplasia</strong> — congenital ในพันธุ์ใหญ่อายุน้อย</li>
        </ul>
        <p><strong>Coughing differentials (สำคัญมากในเคสนี้):</strong> tracheal collapse, chronic bronchitis, mainstem bronchus compression (LA โต), pulmonary fibrosis, neoplasia, heartworm</p>
      `,
      treatment: `
        <p><strong>Stage B1 (asymptomatic, no enlargement):</strong></p>
        <ul>
          <li>ไม่มี cardiac medication — ยังไม่พิสูจน์ว่ายืดเวลาได้</li>
          <li>BP control (ACEI ถ้า hypertensive)</li>
          <li>Heartworm prevention, dental care, normal exercise</li>
          <li>Follow-up ปีละครั้ง</li>
        </ul>
        <p><strong>Stage B2 (asymptomatic + LA/LV enlargement):</strong></p>
        <ul>
          <li><strong>Pimobendan 0.2-0.3 mg/kg PO q12h</strong> — EPIC trial: delay CHF onset by ~15 months ✓</li>
          <li>Recheck ทุก 6-9 เดือน, sooner ถ้ามาก</li>
          <li>Moderate salt restriction</li>
        </ul>
        <p><strong>Stage C (CHF — outpatient):</strong> "<em>Quadruple therapy</em>"</p>
        <ul>
          <li><strong>Furosemide</strong> 1-2 mg/kg PO q12h (ปรับตาม RRR + edema severity)</li>
          <li><strong>Pimobendan</strong> 0.2-0.3 mg/kg PO q12h (มากสุด q8h ใน refractory case)</li>
          <li><strong>ACEI</strong> (enalapril 0.5 mg/kg PO q12-24h หรือ benazepril 0.25-0.5 mg/kg PO q24h)</li>
          <li><strong>Spironolactone</strong> 1-2 mg/kg PO q24h</li>
          <li>Salt-restricted diet, exercise restriction (ระยะ acute)</li>
          <li>เช็ค BUN/Cr, electrolytes 1-2 สัปดาห์หลังเริ่มยา</li>
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
          <li>เพิ่ม pimobendan เป็น q8h หรือ ↑ ขนาด</li>
          <li>± Sildenafil 1-3 mg/kg PO q8-12h ถ้า PH</li>
          <li>± Digoxin (monitor serum level) สำหรับ AF</li>
          <li>Thoracocentesis/abdominocentesis เป็นระยะ</li>
        </ul>
        <p><strong>Surgical option:</strong> mitral valve repair มีในศูนย์ใหญ่ (UK, Japan) — ผลดี แต่ค่าใช้จ่ายสูง</p>
      `,
      complications: `
        <p><strong>Acute complications:</strong></p>
        <ul>
          <li><strong>Ruptured chordae tendineae</strong> → acute fulminant pulmonary edema; sometimes minimal LA enlargement on rad</li>
          <li><strong>Atrial tear</strong> → cardiac tamponade; พบบ่อยใน Cocker Spaniel, Dachshund, Mini Poodle, CKCS</li>
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
          <li><strong>Stage B1:</strong> หลายตัวไม่เคยมี CHF ตลอดชีวิต</li>
          <li><strong>Stage B2 + pimobendan:</strong> median time to CHF ~15 เดือน vs placebo</li>
          <li><strong>Stage C:</strong> median survival 9-15 เดือนหลังเริ่ม CHF</li>
          <li><strong>Stage D:</strong> median 1-3 เดือน</li>
          <li>Predictors of poor outcome: LA:Ao &gt; 2.0, LVIDDN &gt; 1.85, syncope, atrial tear, NT-proBNP &gt; 1500 pmol/L</li>
        </ul>
        <div class="callout">💡 <strong>Client communication:</strong> เน้นว่าโรคนี้รักษาได้ ควบคุมได้นาน แต่ไม่หาย — RRR monitoring + medication compliance สำคัญที่สุด</div>
      `,
    },
  },

  /* ---------- Ch 7 · Dilated Cardiomyopathy (DCM) ---------- */
  {
    id: 'dcm-canine',
    titleEn: 'Dilated Cardiomyopathy (Canine)',
    titleTh: 'โรคกล้ามเนื้อหัวใจขยายในสุนัข',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog'],
    tags: ['DCM', 'cardiomyopathy', 'taurine', 'BEG diet', 'grain-free', 'systolic dysfunction', 'AF', 'atrial fibrillation'],
    aliases: ['dilated cardiomyopathy', 'กล้ามเนื้อหัวใจขยาย'],
    source: 'Ch. 7 · pp. 141–157',
    sections: {
      definition: `
        <p><strong>Dilated Cardiomyopathy (DCM)</strong> — โรคกล้ามเนื้อหัวใจหดตัวอ่อนแรง (systolic dysfunction) ทำให้หัวใจห้องล่างขยาย</p>
        <ul>
          <li>โรคกล้ามเนื้อหัวใจที่พบบ่อยที่สุดในสุนัข</li>
          <li>มักเป็นในสุนัขพันธุ์ใหญ่-ยักษ์ อายุกลางคน</li>
          <li>เพศผู้ &gt; เพศเมีย</li>
          <li>โรค progressive, fatal โดยทั่วไป</li>
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
          <li><strong>Taurine deficiency</strong> — Cocker, Golden Retriever, ชนิดอาหารเฉพาะ</li>
          <li><strong>Diet-associated DCM</strong> (BEG: <em>boutique, exotic protein, grain-free</em>) — FDA investigation 2018+ มี link กับอาหารที่มี legumes/peas/lentils สูง</li>
          <li>L-carnitine deficiency — Boxer (some)</li>
        </ul>
        <p><strong>Other causes:</strong> chronic tachyarrhythmia (tachycardia-induced), myocarditis, doxorubicin toxicity, hypothyroidism (debated)</p>
      `,
      pathophysiology: `
        <ul>
          <li>Primary myocardial dysfunction → ↓ contractility → ↓ stroke volume → ↓ cardiac output</li>
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
          <li>ไม่มีอาการ — ตรวจเจอจาก screening (echo, Holter)</li>
          <li>Doberman: occult phase ~3 ปีก่อน CHF onset</li>
        </ul>
        <p><strong>Overt phase</strong> (clinical):</p>
        <ul>
          <li>Exercise intolerance, weakness</li>
          <li>Cough, tachypnea, dyspnea (left CHF)</li>
          <li>Abdominal distension (right CHF — Boxer, Doberman บ่อยกว่า)</li>
          <li>Weight loss, cardiac cachexia</li>
          <li>Syncope — ventricular arrhythmia, AF with rapid response</li>
          <li><strong>Sudden death</strong> — โดยเฉพาะ Doberman (~30% ของ Doberman ตายแบบนี้)</li>
        </ul>
        <p><strong>Auscultation</strong></p>
        <ul>
          <li>Soft systolic murmur (functional MR) — grade I-III</li>
          <li>S3 gallop — characteristic of DCM</li>
          <li>Irregular rhythm with pulse deficits → AF</li>
          <li>Premature beats → VPC</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab</strong></p>
        <ul>
          <li><strong>NT-proBNP &gt; 800-900 pmol/L</strong> — sensitive screening for occult DCM in Doberman</li>
          <li><strong>cTnI</strong> — ↑ บอก myocardial injury</li>
          <li><strong>Taurine, whole blood</strong> — ในพันธุ์เสี่ยง (Cocker, Golden, Newfoundland) หรือกินอาหาร BEG; &lt; 200 nmol/mL = deficient</li>
          <li>T4 — แยก hypothyroidism</li>
        </ul>
        <p><strong>Thoracic Radiographs</strong></p>
        <ul>
          <li>Generalized cardiomegaly, ↑ VHS</li>
          <li>LA enlargement, pulmonary edema (left CHF)</li>
          <li>Right-sided enlargement, ascites, pleural effusion (Boxer, Doberman)</li>
        </ul>
        <p><strong>Echocardiography (gold standard)</strong></p>
        <ul>
          <li><strong>↓ Fractional shortening</strong> &lt; 25% (normal &gt; 30%)</li>
          <li><strong>↓ Ejection fraction</strong> &lt; 40%</li>
          <li><strong>↑ LV end-diastolic and end-systolic dimensions</strong> — sphere shape</li>
          <li>↑ E-point septal separation (EPSS) &gt; 7-8 mm</li>
          <li>LA enlargement, mild MR/TR (functional)</li>
          <li>Doberman screening: LVIDDN, LVIDSN, LV volumes (Simpson's method)</li>
        </ul>
        <p><strong>ECG / Holter</strong></p>
        <ul>
          <li>Sinus tachycardia, AF (common in giant breeds), VPCs</li>
          <li><strong>24-hr Holter</strong> — Doberman screening: &gt; 50-100 VPCs/24h = abnormal; &gt; 300 = high risk</li>
          <li>Boxer: VPC frequency + couplets/triplets predict sudden death risk</li>
        </ul>
      `,
      differential: `
        <ul>
          <li><strong>MMVD</strong> — small breeds, primary valve disease (loud murmur, intact systolic function)</li>
          <li><strong>Pericardial effusion</strong> — round cardiac silhouette but hypocontractility absent</li>
          <li><strong>Tachycardia-induced cardiomyopathy</strong> — AF or supraventricular tachycardia → reversible if rate controlled</li>
          <li><strong>Myocarditis</strong> (viral, Lyme, Trypanosoma) — acute presentation</li>
          <li><strong>Hypothyroidism</strong> — bradycardia, ↓ contractility (mild DCM-like changes, controversial)</li>
          <li><strong>Doxorubicin toxicity</strong> — cumulative dose &gt; 240 mg/m²</li>
        </ul>
      `,
      treatment: `
        <p><strong>Occult DCM with VPCs (Doberman, Boxer):</strong></p>
        <ul>
          <li><strong>Pimobendan</strong> 0.25 mg/kg PO q12h — PROTECT trial: delay CHF + ↑ survival in Doberman occult DCM ✓</li>
          <li>Antiarrhythmic ถ้า VPCs &gt; 300/24h or sustained VT (sotalol 1-2 mg/kg PO q12h, mexiletine 5-8 mg/kg PO q8h)</li>
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
          <li><strong>Furosemide</strong> 2-4 mg/kg PO q8-12h (titrate to RRR/effort)</li>
          <li><strong>ACEI</strong> (enalapril 0.5 mg/kg PO q12-24h)</li>
          <li><strong>Spironolactone</strong> 1-2 mg/kg PO q24h</li>
          <li><strong>Diet change</strong> ถ้าสงสัย BEG; supplement taurine/L-carnitine ถ้า deficient</li>
        </ul>
        <p><strong>Atrial fibrillation rate control:</strong></p>
        <ul>
          <li>Diltiazem 1-3 mg/kg PO q8h (or extended-release q12h)</li>
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
          <li><strong>Thromboembolism</strong> — uncommon in dogs (ต่างจากแมว HCM)</li>
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

  /* ---------- Ch 8 · Hypertrophic Cardiomyopathy (Feline) ---------- */
  {
    id: 'hcm-feline',
    titleEn: 'Hypertrophic Cardiomyopathy (Feline)',
    titleTh: 'โรคกล้ามเนื้อหัวใจหนาในแมว',
    type: 'disease',
    system: 'cardiovascular',
    species: ['cat'],
    tags: ['HCM', 'feline cardiomyopathy', 'ATE', 'saddle thrombus', 'Maine Coon', 'Ragdoll', 'gallop', 'SAM'],
    aliases: ['hypertrophic cardiomyopathy', 'กล้ามเนื้อหัวใจหนา', 'แมวหัวใจหนา'],
    source: 'Ch. 8 · pp. 158–173',
    sections: {
      definition: `
        <p><strong>Hypertrophic Cardiomyopathy (HCM)</strong> — โรคกล้ามเนื้อหัวใจห้องล่างซ้ายหนาผิดปกติ (concentric hypertrophy) โดยไม่มีสาเหตุภายนอก</p>
        <ul>
          <li><strong>โรคหัวใจที่พบบ่อยที่สุดในแมว</strong> — prevalence ~15% ของแมวทั่วไป, ~30% ในแมวสูงอายุ</li>
          <li>เพศผู้ &gt; เพศเมีย, อายุเฉลี่ยตอนวินิจฉัย ~6 ปี (ช่วงกว้าง 3 เดือน-17 ปี)</li>
          <li>หลายตัว <strong>asymptomatic</strong> จนเกิด acute event</li>
        </ul>
      `,
      etiology: `
        <p><strong>Genetic / Familial</strong></p>
        <ul>
          <li><strong>Maine Coon</strong> — MYBPC3 mutation (A31P), autosomal dominant, incomplete penetrance</li>
          <li><strong>Ragdoll</strong> — MYBPC3 R820W, more aggressive disease</li>
          <li>Other breeds: Sphynx, Norwegian Forest, Persian, British Shorthair, Devon Rex, Bengal, American Shorthair</li>
          <li>DSH/DLH ก็เป็นได้บ่อย</li>
        </ul>
        <p><strong>Acquired hypertrophy (must rule out before diagnosing HCM):</strong></p>
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
          <li><strong>Stage C</strong> — current/past CHF or ATE</li>
          <li><strong>Stage D</strong> — refractory</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Many cats are asymptomatic</strong> — ตรวจเจอจาก murmur หรือ gallop sound</p>
        <p><strong>Presentation patterns:</strong></p>
        <ul>
          <li><strong>Acute respiratory distress</strong> — pulmonary edema หรือ pleural effusion (left CHF)</li>
          <li><strong>Acute hindlimb paralysis</strong> — feline arterial thromboembolism (FATE / saddle thrombus) — pulseless, painful, cold limbs ✗ <em>emergency</em></li>
          <li><strong>Sudden death</strong> — ventricular arrhythmia or massive pulmonary edema</li>
          <li><strong>Syncope</strong> — uncommon</li>
          <li><strong>Lethargy, hyporexia, weight loss</strong> — chronic CHF</li>
        </ul>
        <p><strong>Auscultation</strong></p>
        <ul>
          <li><strong>Systolic murmur</strong> — left parasternal, often dynamic (changes with HR/excitement) — SAM</li>
          <li><strong>Gallop sound (S4)</strong> — high specific for HCM in cats</li>
          <li>Arrhythmia — premature beats</li>
          <li><em>Up to 30-50% of HCM cats have NO murmur</em> ⚠️</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab — rule out other causes first</strong></p>
        <ul>
          <li><strong>Total T4</strong> — must rule out hyperthyroidism in cats &gt; 6 yrs</li>
          <li><strong>BP</strong> — exclude systemic hypertension</li>
          <li><strong>NT-proBNP</strong> (feline) — &gt; 100 pmol/L (SNAP) or &gt; 270 pmol/L (quantitative) → high suspicion of cardiac disease; useful to differentiate cardiac vs respiratory dyspnea</li>
          <li><strong>cTnI</strong> — elevated in moderate-severe HCM</li>
          <li>BUN/Cr, electrolytes</li>
        </ul>
        <p><strong>Thoracic Radiographs</strong></p>
        <ul>
          <li>"<em>Valentine heart</em>" — biatrial enlargement, classical (but not always seen)</li>
          <li>Pulmonary edema — patchy, often <strong>diffuse</strong> distribution in cats (different from dogs!)</li>
          <li><strong>Pleural effusion</strong> — common in feline CHF</li>
        </ul>
        <p><strong>Echocardiography (definitive diagnosis)</strong></p>
        <ul>
          <li><strong>LV wall thickness ≥ 6 mm in diastole</strong> (IVSd or LVPWd)</li>
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
        <p><strong>Other feline cardiomyopathies (must differentiate by echo):</strong></p>
        <ul>
          <li><strong>Restrictive cardiomyopathy (RCM)</strong> — normal LV walls, severe LA enlargement, restrictive filling</li>
          <li><strong>Dilated cardiomyopathy (DCM)</strong> — rare now (taurine supplemented); thin walls, ↓ FS</li>
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
          <li>ไม่มี medication recommended ✗</li>
          <li>Echo recheck ทุก 6-12 เดือน</li>
        </ul>
        <p><strong>Stage B2 (moderate-severe, ↑ LA size, ATE risk):</strong></p>
        <ul>
          <li><strong>Clopidogrel 18.75 mg/cat PO q24h</strong> — FATCAT trial: ↓ ATE recurrence ✓ (ใช้ป้องกันใน B2 ที่ LA โต)</li>
          <li>± <strong>Atenolol</strong> 6.25-12.5 mg/cat PO q12h (only if dynamic LVOTO from SAM, รองลงมา)</li>
          <li>Diltiazem extended-release 30 mg/cat PO q12-24h — alternative</li>
          <li><strong>NO pimobendan</strong> ใน HCM โดยทั่วไป (อาจเพิ่ม LVOTO)</li>
        </ul>
        <p><strong>Stage C — CHF (acute pulmonary edema or pleural effusion):</strong></p>
        <ul>
          <li>O2, minimal stress (cats stress-prone!)</li>
          <li><strong>Furosemide</strong> 1-2 mg/kg IV/IM q1-4h initially (cats — slower onset)</li>
          <li><strong>Thoracocentesis</strong> ถ้า moderate-large pleural effusion (relieve dyspnea quickly)</li>
          <li>Mild sedation (butorphanol 0.2 mg/kg IM)</li>
          <li>Topical nitroglycerin 1/8-1/4 inch q4-6h (controversial benefit)</li>
          <li>เริ่ม clopidogrel หลัง stabilize</li>
        </ul>
        <p><strong>Chronic Stage C:</strong></p>
        <ul>
          <li><strong>Furosemide</strong> 1-2 mg/kg PO q12-24h (ลดเป็น lowest effective dose)</li>
          <li><strong>Clopidogrel</strong> 18.75 mg/cat PO q24h ✓</li>
          <li><strong>ACEI</strong> (benazepril 0.5 mg/kg PO q24h) — debated benefit but commonly used</li>
          <li>± Spironolactone 1-2 mg/kg PO q24h (อาจทำให้แพ้ผิว ผิวหน้าเป็นแผล)</li>
          <li>Atenolol — ใช้ถ้ายัง LVOTO เด่น แต่หยุด/ลดถ้า CHF</li>
          <li>หลีกเลี่ยง stress, ให้น้ำเข้าถึงตลอด, lifestyle modification</li>
        </ul>
        <p><strong>FATE (Acute thromboembolism) — emergency:</strong></p>
        <ul>
          <li>Pain control: <strong>methadone 0.2-0.4 mg/kg IV/IM q4-6h</strong> หรือ buprenorphine 0.02 mg/kg IV/IM/OTM</li>
          <li>O2, warming</li>
          <li>Clopidogrel 75 mg loading then 18.75 mg/cat q24h</li>
          <li>± Heparin (LMWH, e.g. enoxaparin 1 mg/kg SC q12h) — debated</li>
          <li>Treat concurrent CHF</li>
          <li><strong>Avoid thrombolytics</strong> (tPA) — high mortality from reperfusion injury, hyperkalemia</li>
          <li>เจ้าของต้องเข้าใจ guarded prognosis; ~50% euthanized at presentation</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Feline Arterial Thromboembolism (FATE/ATE)</strong> — saddle thrombus most common; can affect single limb, mesenteric, renal, brachial; very painful; survival ~30-40% if treated, neuro recovery variable</li>
          <li><strong>Acute pulmonary edema / pleural effusion</strong></li>
          <li><strong>Sudden death</strong> — ventricular arrhythmia</li>
          <li><strong>Syncope</strong> — LVOTO, arrhythmia</li>
          <li><strong>End-stage HCM</strong> — systolic dysfunction develops, RCM-like appearance</li>
        </ul>
        <p><strong>Prognosis (highly variable):</strong></p>
        <ul>
          <li><strong>Asymptomatic Stage B1:</strong> หลายตัวอยู่ปกติได้ปีนาน ๆ</li>
          <li><strong>Stage B2:</strong> 5-yr survival ~50%; ~30% develop CHF or ATE</li>
          <li><strong>Stage C (post-CHF):</strong> median survival 1-2 ปี</li>
          <li><strong>Post-ATE survivors:</strong> median 6-12 เดือน, 25-50% recurrence</li>
          <li><strong>Ragdoll, severe phenotype:</strong> worse prognosis</li>
        </ul>
        <div class="callout">⚠️ <strong>Cats stress easily.</strong> Handle with extreme care during examination of dyspneic cats — fatal decompensation can occur from over-restraint. ให้ O2 + thoracocentesis ก่อน rad ถ้าจำเป็น</div>
      `,
    },
  },

  /* ---------- Ch 3 · Management of Heart Failure ---------- */
  {
    id: 'heart-failure-management',
    titleEn: 'Management of Heart Failure (Practical Pharmacology)',
    titleTh: 'การจัดการภาวะหัวใจล้มเหลว (เภสัชวิทยาเชิงปฏิบัติ)',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['CHF', 'heart failure', 'furosemide', 'pimobendan', 'ACEI', 'spironolactone', 'torsemide', 'quadruple therapy'],
    aliases: ['CHF management', 'การรักษาหัวใจล้มเหลว'],
    source: 'Ch. 3 · pp. 55–76',
    sections: {
      definition: `
        <p><strong>Congestive Heart Failure (CHF)</strong> — กลุ่มอาการที่เกิดจากหัวใจสูบฉีดเลือดไม่พอ ทำให้เกิด venous congestion (pulmonary or systemic) และ/หรือ low cardiac output</p>
        <ul>
          <li>ไม่ใช่โรคในตัวเอง — เป็น <em>end-stage</em> ของโรคหัวใจหลายๆ ชนิด</li>
          <li>การรักษาเป็น <strong>combination therapy</strong> เน้นปรับ neurohormonal axis + ลด preload/afterload + ↑ contractility</li>
        </ul>
      `,
      etiology: `
        <p>สาเหตุของ CHF (จัดการตามสาเหตุ + supportive):</p>
        <ul>
          <li>MMVD (สุนัข)</li>
          <li>DCM (สุนัข)</li>
          <li>HCM, RCM, UCM (แมว)</li>
          <li>Pericardial effusion</li>
          <li>Congenital defects (PDA, VSD, dysplasia)</li>
          <li>Heartworm disease</li>
          <li>Tachyarrhythmia-induced cardiomyopathy</li>
          <li>Endocrine (hyperthyroidism, hypertension)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Vicious cycle ของ CHF:</strong></p>
        <ul>
          <li>↓ Cardiac output → activation ของ <strong>SNS</strong> และ <strong>RAAS</strong></li>
          <li>↑ Sympathetic tone → tachycardia, vasoconstriction, ↑ contractility (short-term ดี, long-term เสีย)</li>
          <li>↑ RAAS → Na/water retention → ↑ preload (initially helpful by Starling, eventually overload)</li>
          <li>Aldosterone → myocardial fibrosis</li>
          <li>↑ Filling pressure → pulmonary/systemic venous congestion → edema</li>
          <li>Chronic neurohormonal activation → maladaptive remodeling</li>
        </ul>
        <p><strong>Therapeutic targets:</strong> ลด preload (diuretics), ลด afterload (vasodilators/ACEI), ↑ contractility (pimobendan), ลด neurohormonal activation (ACEI, spironolactone)</p>
      `,
      symptoms: `
        <p>ดู Clinical Manifestations entry (Ch. 1) สำหรับรายละเอียด</p>
        <ul>
          <li><strong>Left CHF:</strong> tachypnea, dyspnea, cough (dog), pulmonary edema</li>
          <li><strong>Right CHF:</strong> ascites, hepatomegaly, pleural effusion, jugular distension</li>
          <li><strong>Low output:</strong> exercise intolerance, syncope, weakness, prerenal azotemia</li>
        </ul>
      `,
      diagnosis: `
        <p>การวินิจฉัย CHF (จาก clinical + radiographic findings):</p>
        <ul>
          <li>Clinical signs of congestion + history of heart disease</li>
          <li>Thoracic radiographs: pulmonary edema, pleural effusion, cardiomegaly</li>
          <li>NT-proBNP &gt; 1500 pmol/L (dog), &gt; 270 pmol/L quantitative (cat) — supports cardiogenic origin</li>
          <li>Echo: confirms underlying cause + severity</li>
          <li>Therapeutic trial of furosemide → if dyspnea responds rapidly = supports CHF</li>
        </ul>
      `,
      differential: `
        <p>Differentiate cardiogenic from non-cardiogenic causes of similar signs:</p>
        <ul>
          <li>Non-cardiogenic pulmonary edema (electrocution, neurogenic, ARDS)</li>
          <li>Pneumonia, neoplasia, pulmonary thromboembolism</li>
          <li>Hypoalbuminemia (PLE, PLN, hepatic failure)</li>
          <li>Pleural disease: pyothorax, chylothorax, neoplasia</li>
        </ul>
      `,
      treatment: `
        <p><strong>The Quadruple Therapy</strong> (cornerstone for chronic CHF in dogs):</p>

        <p><strong>1. Loop Diuretic (preload reduction)</strong></p>
        <ul>
          <li><strong>Furosemide:</strong>
            <ul>
              <li>Acute IV: 2-4 mg/kg q1-4h initially → CRI 0.66-1 mg/kg/h</li>
              <li>Chronic PO: 1-4 mg/kg q8-12h (titrate to lowest effective dose using RRR)</li>
            </ul>
          </li>
          <li><strong>Torsemide</strong> (if furosemide refractory): start at <em>1/10-1/20 of total daily furosemide dose</em>, divided q12-24h. More potent, longer-acting, ↓ K-loss</li>
        </ul>

        <p><strong>2. Inodilator</strong></p>
        <ul>
          <li><strong>Pimobendan</strong> 0.2-0.3 mg/kg PO q12h (max q8h) — Ca-sensitizer + PDE3 inhibitor; ↑ contractility + arteriolar/venous dilation. Indicated for MMVD stage B2+, DCM, occult Doberman</li>
          <li>Give 1 hour before food for best absorption</li>
        </ul>

        <p><strong>3. ACE Inhibitor (RAAS blockade)</strong></p>
        <ul>
          <li><strong>Enalapril</strong> 0.5 mg/kg PO q12-24h</li>
          <li><strong>Benazepril</strong> 0.25-0.5 mg/kg PO q24h (preferred in renal impairment — biliary excretion)</li>
          <li>Monitor BUN/Cr at 1-2 weeks; mild ↑ acceptable; reduce dose if &gt; 30% rise or symptomatic</li>
        </ul>

        <p><strong>4. Aldosterone Antagonist</strong></p>
        <ul>
          <li><strong>Spironolactone</strong> 1-2 mg/kg PO q24h — ↓ cardiac death + euthanasia in dogs with MMVD CHF; mild K-sparing diuretic. ⚠️ may cause facial dermatitis in cats (esp. Maine Coon)</li>
        </ul>

        <p><strong>Adjunct medications:</strong></p>
        <ul>
          <li><strong>Amlodipine</strong> 0.1-0.2 mg/kg PO q12-24h — additional afterload reduction in stage D</li>
          <li><strong>Hydralazine</strong> 0.5-2 mg/kg PO q12h — pure arteriolar dilator (acute use)</li>
          <li><strong>Nitroprusside</strong> CRI 1-10 µg/kg/min — IV for fulminant edema (monitor BP closely; max 24-48h)</li>
          <li><strong>Topical nitroglycerin</strong> 1/4-1 inch q4-6h — venodilator</li>
          <li><strong>Sildenafil</strong> 1-3 mg/kg PO q8-12h — for pulmonary hypertension</li>
          <li><strong>Digoxin</strong> 0.003-0.005 mg/kg PO q12h — AF rate control; serum target 1-1.5 ng/mL</li>
          <li><strong>Diltiazem</strong> 1-3 mg/kg PO q8h — AF rate control</li>
        </ul>

        <p><strong>Cat-specific considerations:</strong></p>
        <ul>
          <li>Furosemide dose lower (1-2 mg/kg q12-24h)</li>
          <li><strong>Avoid pimobendan</strong> in HCM with significant LVOTO</li>
          <li>Clopidogrel 18.75 mg/cat q24h for ATE prevention (if LA enlarged)</li>
          <li>ACEI use is debated but commonly added (benazepril)</li>
        </ul>

        <p><strong>Acute fulminant CHF protocol (in-hospital):</strong></p>
        <ul>
          <li>Cage rest + supplemental O2</li>
          <li>Furosemide IV high-dose</li>
          <li>Pimobendan PO ทันทีที่กินยาได้</li>
          <li>Vasodilator (nitroprusside or hydralazine)</li>
          <li>Mild sedation (butorphanol)</li>
          <li>Thoracocentesis if effusion</li>
          <li>Antiarrhythmic if needed</li>
          <li>Avoid IV fluids unless absolutely necessary</li>
        </ul>

        <div class="callout">📋 <strong>Home monitoring:</strong> Resting respiratory rate (RRR) ขณะหลับ — &gt; 30/min หรือ ↑ &gt; 20% from baseline = decompensation alert. ให้เจ้าของจดใส่ปฏิทิน</div>
      `,
      complications: `
        <p><strong>Drug-related:</strong></p>
        <ul>
          <li>Furosemide: dehydration, prerenal azotemia, hypokalemia, ototoxicity (high-dose IV)</li>
          <li>ACEI: azotemia (esp. with diuretic), hypotension, hyperkalemia</li>
          <li>Spironolactone: hyperkalemia (rare with concurrent loop diuretic), facial dermatitis (cats)</li>
          <li>Pimobendan: well tolerated; rare GI signs</li>
          <li>Digoxin: narrow therapeutic index → toxicity (anorexia, vomiting, arrhythmia); reduce dose in renal impairment</li>
        </ul>
        <p><strong>Disease-related:</strong></p>
        <ul>
          <li>Refractory CHF → stage D → end-of-life</li>
          <li>Cardiac cachexia</li>
          <li>Sudden death from arrhythmia</li>
        </ul>
        <p><strong>Monitoring schedule:</strong></p>
        <ul>
          <li>1-2 weeks after starting/changing therapy: BP, BUN/Cr, electrolytes</li>
          <li>Stable CHF: q3-6 months recheck (PE, BP, renal panel, RRR review)</li>
          <li>Acute decompensation: in-hospital, recheck rad daily until stable</li>
        </ul>
      `,
    },
  },
  /* ---------- Ch 2 · Diagnostic Tests for Cardiovascular System ---------- */
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
        <p>การตรวจประกอบเพื่อวินิจฉัยและประเมินความรุนแรงของโรคหัวใจ — ใช้ร่วมกันให้ภาพที่สมบูรณ์</p>
        <ul>
          <li><strong>Physical exam</strong> — auscultation, pulse, JVD, mucous membranes</li>
          <li><strong>Thoracic radiographs</strong> — chamber size, pulmonary changes, effusion</li>
          <li><strong>ECG</strong> — rhythm, conduction</li>
          <li><strong>Echocardiography</strong> — gold standard for structure/function</li>
          <li><strong>Cardiac biomarkers</strong> — NT-proBNP, cTnI</li>
          <li><strong>Blood pressure</strong> — systolic systemic</li>
        </ul>
      `,
      etiology: `<p>ใช้ในทุกเคสที่สงสัยโรคหัวใจ — ก่อนรักษา, ระหว่างติดตาม, ก่อนใช้ยา cardiotoxic</p>`,
      pathophysiology: `<p>ดู entries เฉพาะของแต่ละโรคสำหรับ mechanism</p>`,
      symptoms: `<p>ดู Clinical Manifestations entry</p>`,
      diagnosis: `
        <p><strong>1. Thoracic Radiographs</strong></p>
        <ul>
          <li><strong>Vertebral Heart Score (VHS):</strong> วัดที่ lateral view จาก carina ไปถึง apex (long axis) + จาก left main bronchus ไปขอบ heart (short axis), เทียบเป็นจำนวน vertebrae T4 ลงไป</li>
          <li>Normal: dog &lt; 10.5 v; cat &lt; 8.0 v</li>
          <li><strong>Vertebral Left Atrial Score (VLAS):</strong> วัด LA size, normal &lt; 2.3 v</li>
          <li>Pulmonary edema: cardiogenic = perihilar, dorsocaudal, hilar (dog); diffuse, patchy (cat)</li>
          <li>Right heart enlargement: reverse-D appearance on DV view</li>
          <li>Pleural effusion: cat with CHF บ่อยกว่า dog</li>
        </ul>
        <p><strong>2. ECG (Lead II most common)</strong></p>
        <ul>
          <li>Heart rate, rhythm regularity</li>
          <li>P wave (atrial enlargement: P mitrale wide, P pulmonale tall)</li>
          <li>QRS amplitude (LV enlargement: tall R; LV dilation: wide QRS)</li>
          <li>Axis: normal +40 to +100 (dog), 0 to +160 (cat)</li>
          <li>Intervals: PR, QT</li>
          <li><strong>Holter (24-hr ambulatory ECG):</strong> intermittent arrhythmia, syncope workup, Doberman/Boxer screening</li>
          <li><strong>Event monitor:</strong> rare events</li>
        </ul>
        <p><strong>3. Echocardiography (gold standard)</strong></p>
        <ul>
          <li><strong>2D imaging:</strong> chamber sizes, wall thickness, valvular morphology</li>
          <li><strong>M-mode:</strong> LV dimensions, fractional shortening (FS), EPSS</li>
          <li><strong>Color Doppler:</strong> direction + severity of regurgitation/shunts</li>
          <li><strong>Spectral Doppler:</strong> velocities → estimate gradients (Bernoulli equation: ΔP = 4V²)</li>
          <li><strong>Tissue Doppler (TDI):</strong> myocardial velocity, diastolic function</li>
          <li>Key measurements:
            <ul>
              <li>LA:Ao ratio (normal &lt; 1.5)</li>
              <li>LVIDDN (LVID-diastolic normalized to BW^0.294); &gt; 1.7 = dilated</li>
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
          <li><strong>cTnI (cardiac troponin I):</strong> myocardial injury marker; ↑ ใน DCM, myocarditis, severe MMVD; ใช้แยก HSA pericardial effusion จาก idiopathic</li>
        </ul>
        <p><strong>5. Blood Pressure</strong></p>
        <ul>
          <li><strong>Doppler</strong> (cats, small dogs): ฟัง systolic เท่านั้น</li>
          <li><strong>Oscillometric / HDO:</strong> systolic + diastolic + mean</li>
          <li>Take 5-7 readings, discard high/low, average rest</li>
          <li>Normal: dog &lt; 150/95, cat &lt; 150/95</li>
          <li>Hypertension: &gt; 160/100 (mild), &gt; 180/120 (severe)</li>
        </ul>
      `,
      differential: `<p>การเลือก test ขึ้นกับ presenting complaint — ดู Clinical Manifestations entry</p>`,
      treatment: `<p>เครื่องมือสำหรับวินิจฉัย ไม่มี treatment โดยตรง</p>`,
      complications: `
        <p><strong>Limitations &amp; pitfalls:</strong></p>
        <ul>
          <li>VHS ไม่บอก function — heart โตอาจ functional ปกติ</li>
          <li>ECG ปกติไม่ตัด structural disease</li>
          <li>Stress hyperglycemia, white-coat effect ทำให้ค่าผิด</li>
          <li>NT-proBNP ↑ ในไตเสีย (renal disease alters clearance)</li>
          <li>Echo ต้องการคนชำนาญ + เครื่องดี</li>
          <li>Holter — แมวรับไม่ค่อยได้ (อยู่นิ่งไม่ทน)</li>
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
        <p>การเต้นของหัวใจที่ไม่เป็นจังหวะปกติ — แบ่งตามแหล่งกำเนิด (supraventricular vs ventricular) และอัตรา (tachy vs brady)</p>
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
        <p><strong>Extracardiac causes (often reversible):</strong></p>
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
        <p><strong>Mechanisms of arrhythmia formation:</strong></p>
        <ul>
          <li><strong>Re-entry</strong> — circuit around scar/abnormal tissue (most common in sustained arrhythmias)</li>
          <li><strong>Triggered activity</strong> — early/late afterdepolarizations</li>
          <li><strong>Abnormal automaticity</strong> — non-sinus pacemaker</li>
          <li><strong>Conduction block</strong> — AV node dysfunction</li>
        </ul>
      `,
      symptoms: `
        <p>ขึ้นกับ HR, รูปแบบ, และ underlying disease</p>
        <ul>
          <li><strong>Asymptomatic</strong> — VPC น้อยๆ มักไม่มีอาการ</li>
          <li><strong>Pulse deficits</strong> — ตรวจคล้าทะลึ่ง pulse ขณะ auscultate; APC, AF, VPC, VT บ่อย</li>
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
          <li>Step 3: P waves present? P:QRS relationship?</li>
          <li>Step 4: QRS morphology (narrow = supraventricular; wide &gt; 0.06s dog / 0.04s cat = ventricular)</li>
        </ul>
        <p><strong>Common patterns:</strong></p>
        <ul>
          <li><strong>Sinus tachycardia:</strong> regular, normal P-QRS, HR &gt; 160 (dog) / &gt; 220 (cat)</li>
          <li><strong>APC/SVT:</strong> early P (abnormal shape), narrow QRS, may run rapid (often &gt; 250 bpm)</li>
          <li><strong>Atrial fibrillation:</strong> "irregularly irregular" rhythm, no P waves, baseline undulations (f waves)</li>
          <li><strong>VPC/VT:</strong> wide QRS, no preceding P, may be unifocal or multifocal; sustained VT &gt; 4 in a row at &gt; 100 bpm</li>
          <li><strong>Sinus bradycardia:</strong> HR &lt; 60 (dog) / &lt; 120 (cat), regular</li>
          <li><strong>1° AV block:</strong> PR &gt; 0.13s (dog), all P conducted</li>
          <li><strong>2° AV block:</strong> some P not conducted (Mobitz I = lengthening PR before drop; Mobitz II = constant PR with intermittent drop)</li>
          <li><strong>3° (complete) AV block:</strong> P and QRS independent, slow ventricular escape (~30-40 bpm)</li>
          <li><strong>Sick sinus syndrome:</strong> alternating bradycardia + sinus pause + tachycardia (Mini Schnauzers, WHWT)</li>
        </ul>
        <p><strong>Holter monitoring:</strong> 24-hour ambulatory ECG — gold standard for intermittent arrhythmias and treatment monitoring</p>
        <p><strong>Workup for cause:</strong> CBC, biochem, T4, BP, echo, troponin, electrolytes</p>
      `,
      differential: `
        <p>Differentiating wide-complex tachycardia (VT vs SVT with aberrancy):</p>
        <ul>
          <li>VT more likely if: AV dissociation, fusion beats, capture beats, very wide QRS, cardiac disease present</li>
          <li>Lidocaine trial (1-2 mg/kg IV bolus dog, 0.25-0.5 mg/kg cat) — VT responds, SVT doesn't</li>
        </ul>
      `,
      treatment: `
        <p><strong>General principles:</strong></p>
        <ul>
          <li>Treat <em>cause</em>, not just rhythm — fix electrolytes, hypoxia, pain first</li>
          <li>Many arrhythmias don't need drug therapy</li>
          <li>All antiarrhythmics can be <strong>proarrhythmic</strong></li>
          <li>Goal: hemodynamic stability + ↓ symptoms; not always sinus rhythm</li>
        </ul>

        <p><strong>Tachyarrhythmias — when to treat:</strong></p>
        <ul>
          <li>Sustained VT, especially with hemodynamic compromise</li>
          <li>VPCs &gt; 30/min or runs of VT (especially Doberman, Boxer)</li>
          <li>R-on-T phenomenon</li>
          <li>SVT with rapid rate causing CHF or syncope</li>
          <li>AF with rapid ventricular response</li>
        </ul>

        <p><strong>Supraventricular tachyarrhythmias:</strong></p>
        <ul>
          <li><strong>Acute SVT:</strong> vagal maneuver (ocular pressure, carotid massage) → IV diltiazem 0.05-0.25 mg/kg slow push, repeat q5min (max 0.75 mg/kg)</li>
          <li><strong>Chronic SVT/APC:</strong> diltiazem PO 0.5-2 mg/kg q8h or extended-release 30-60 mg/dog q12h, or β-blocker (atenolol 0.25-1 mg/kg PO q12h dog; 6.25-12.5 mg/cat q12-24h)</li>
          <li><strong>Atrial fibrillation:</strong> rate control with diltiazem ± digoxin (0.003-0.005 mg/kg PO q12h); target HR &lt; 140-160 in-clinic</li>
          <li>Refractory: amiodarone 10 mg/kg PO q24h × 1 wk loading, then 5 mg/kg q24h (monitor LFT, T4)</li>
        </ul>

        <p><strong>Ventricular tachyarrhythmias:</strong></p>
        <ul>
          <li><strong>Acute VT (hemodynamic compromise):</strong> lidocaine 2 mg/kg IV bolus, repeat to max 8 mg/kg, then CRI 25-75 µg/kg/min (dog only — cats much more sensitive: max 0.5 mg/kg, watch for seizures)</li>
          <li><strong>Refractory VT:</strong> procainamide 6-15 mg/kg slow IV; amiodarone 5 mg/kg slow IV</li>
          <li><strong>Chronic VPC/VT:</strong>
            <ul>
              <li>Sotalol 1-3 mg/kg PO q12h (most commonly used; β-blocker + class III)</li>
              <li>Mexiletine 5-8 mg/kg PO q8h (often combined with sotalol)</li>
              <li>Atenolol — for benign VPCs, low risk dogs</li>
            </ul>
          </li>
        </ul>

        <p><strong>Bradyarrhythmias:</strong></p>
        <ul>
          <li><strong>Symptomatic bradycardia:</strong> atropine 0.04 mg/kg IV/SC (test response) — if responsive = vagal cause</li>
          <li><strong>3° AV block, symptomatic SSS:</strong> <strong>pacemaker</strong> (transvenous, dual-chamber preferred) — only definitive treatment</li>
          <li><strong>Symptomatic 2° AV block (Mobitz II):</strong> consider pacemaker</li>
          <li>Atropine response test before pacemaker decision</li>
        </ul>

        <p><strong>Emergency: VF or pulseless VT:</strong></p>
        <ul>
          <li>CPR + defibrillation (4-6 J/kg external)</li>
          <li>Epinephrine 0.01 mg/kg IV every 3-5 min</li>
          <li>Amiodarone 5 mg/kg IV after 3rd shock</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Sudden death</strong> — Doberman with VT, Boxer ARVC</li>
          <li><strong>Tachycardia-induced cardiomyopathy</strong> — chronic uncontrolled tachyarrhythmia</li>
          <li><strong>Thromboembolism</strong> — AF with severe LA enlargement</li>
          <li><strong>Proarrhythmia</strong> — antiarrhythmic drugs themselves</li>
          <li><strong>Drug toxicity:</strong>
            <ul>
              <li>Lidocaine: tremor, seizure (cats!)</li>
              <li>Digoxin: anorexia, vomiting, AV block</li>
              <li>Amiodarone: hepatotoxicity, hypothyroidism</li>
              <li>Sotalol: bradycardia, ↓ contractility</li>
            </ul>
          </li>
        </ul>
        <p><strong>Prognosis:</strong> highly variable; depends on underlying cause + control. AF in severe MMVD/DCM = poor; benign VPCs after splenectomy = excellent.</p>
      `,
    },
  },

  /* ---------- Ch 5 · Patent Ductus Arteriosus (PDA) ---------- */
  {
    id: 'pda',
    titleEn: 'Patent Ductus Arteriosus (PDA)',
    titleTh: 'หลอดเลือดดักตัส อาร์เทอริโอซัสเปิดค้าง',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['PDA', 'congenital', 'continuous murmur', 'left-to-right shunt', 'reverse PDA', 'Eisenmenger', 'ductal occlusion', 'ACDO'],
    aliases: ['ductus arteriosus', 'PDA', 'หลอดเลือดเปิด'],
    source: 'Ch. 5 · pp. 100–118',
    sections: {
      definition: `
        <p><strong>Patent Ductus Arteriosus (PDA)</strong> — congenital heart defect ที่หลอดเลือด ductus arteriosus (ที่เชื่อม pulmonary artery ↔ aorta ในตัวอ่อน) ไม่ปิดหลังเกิด</p>
        <ul>
          <li>หนึ่งใน <strong>congenital heart defect ที่พบบ่อยที่สุดในสุนัข</strong> (ร่วมกับ PS, SAS)</li>
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
        <p><strong>Cats:</strong> rare; congenital heart defect 6-7% ของเคสทั้งหมด</p>
      `,
      pathophysiology: `
        <p><strong>Normal:</strong> ductus arteriosus ปิดภายในไม่กี่ชั่วโมงหลังเกิด → permanently sealed ใน 1-2 สัปดาห์</p>
        <p><strong>PDA:</strong> ductal wall มี collagen/elastin มาก, smooth muscle น้อย → ปิดไม่ได้</p>
        <p><strong>Left-to-right shunt (typical, ~85%):</strong></p>
        <ul>
          <li>เลือดจาก aorta (high pressure) ไหลผ่าน ductus เข้า pulmonary artery (low pressure) <strong>ตลอด systole + diastole</strong> → continuous murmur</li>
          <li>↑ Pulmonary blood flow → volume overload ของ LA + LV</li>
          <li>LA + LV dilation → eccentric hypertrophy</li>
          <li>Mitral annulus stretch → secondary MR</li>
          <li>Eventually → left-sided CHF (pulmonary edema)</li>
        </ul>
        <p><strong>Right-to-left shunt (reversed PDA, ~15%):</strong></p>
        <ul>
          <li>Severe pulmonary vascular changes → PA pressure &gt; aortic → shunt reversal (Eisenmenger physiology)</li>
          <li>Deoxygenated blood → descending aorta → caudal half of body</li>
          <li><strong>Differential cyanosis:</strong> caudal MM cyanotic, cranial MM normal pink ✨</li>
          <li><strong>Polycythemia</strong> compensatory (high PCV)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Left-to-right PDA:</strong></p>
        <ul>
          <li>Most asymptomatic at first diagnosis (puppy with murmur)</li>
          <li>Exercise intolerance, tachypnea, cough — left CHF onset</li>
          <li>Stunted growth (severe cases)</li>
          <li><strong>Bounding (water-hammer) pulses</strong> — wide pulse pressure ✨</li>
          <li><strong>Continuous "machinery" murmur</strong> at left base, ICS 3-4 — loudest in late systole; may radiate to right + caudally</li>
          <li>Precordial thrill at left base</li>
          <li>Hyperkinetic precordial impulse</li>
        </ul>
        <p><strong>Right-to-left PDA:</strong></p>
        <ul>
          <li>Hindlimb weakness, exercise intolerance (caudal hypoxia)</li>
          <li>Caudal cyanosis (front pink, hind blue)</li>
          <li>Seizures from polycythemia hyperviscosity</li>
          <li><strong>NO continuous murmur</strong> (pressure gradient gone)</li>
          <li>Loud split S2 (PH)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Auscultation:</strong> classic continuous "machinery" murmur at left base — almost pathognomonic for L-R PDA</p>
        <p><strong>Thoracic radiographs:</strong></p>
        <ul>
          <li>L-R PDA: LA + LV enlargement, pulmonary overcirculation, "<strong>ductus bump</strong>" — bulge at descending aorta</li>
          <li>"Triple bulge" sign on DV (1-3 o'clock): aortic arch + main PA + LA auricle</li>
          <li>R-L PDA: RV enlargement, pulmonary underperfusion, normal/small left heart</li>
        </ul>
        <p><strong>ECG:</strong> LA + LV enlargement pattern (wide P, tall R in II)</p>
        <p><strong>Echocardiography (definitive):</strong></p>
        <ul>
          <li>2D: LA + LV dilation, pulmonary trunk dilation</li>
          <li><strong>Color Doppler from cranial short axis:</strong> turbulent flow into PA throughout cardiac cycle (continuous)</li>
          <li>Spectral Doppler: continuous high-velocity flow PA → estimate Ao-PA gradient (Bernoulli: ΔP = 4V²); should be high (&gt; 80 mmHg) in simple L-R PDA</li>
          <li>Direct visualization of ductus from short-axis cranial view</li>
          <li><strong>Reverse PDA:</strong> contrast bubble study — agitated saline IV → bubbles appear in descending aorta (caudal) but not ascending aorta (cranial)</li>
        </ul>
        <p><strong>Lab:</strong> PCV in suspected R-L (polycythemia common, sometimes &gt; 65%)</p>
      `,
      differential: `
        <p><strong>Continuous murmur DDx:</strong></p>
        <ul>
          <li>PDA (most common)</li>
          <li>Aorticopulmonary window (rare)</li>
          <li>VSD with aortic insufficiency (to-and-fro, not truly continuous)</li>
          <li>Aortocaval fistula</li>
          <li>Coronary AV fistula</li>
        </ul>
        <p><strong>R-L PDA DDx:</strong> tetralogy of Fallot, severe pulmonary hypertension from other cause, R-L VSD</p>
      `,
      treatment: `
        <p><strong>Left-to-Right PDA — close as soon as possible</strong></p>
        <ul>
          <li>~50% มี CHF / die ภายใน 1 ปีถ้าไม่รักษา</li>
          <li>Best done at 4-6 months age, before severe LV remodeling</li>
        </ul>

        <p><strong>1. Transcatheter occlusion (preferred when feasible)</strong></p>
        <ul>
          <li><strong>ACDO (Amplatz Canine Ductal Occluder)</strong> — minimally invasive, success rate &gt; 95%</li>
          <li>Coil embolization — for small ductus (&lt; 4 mm)</li>
          <li>Done via femoral artery catheterization under fluoroscopy</li>
          <li>Body weight typically &gt; 2.5-3 kg required</li>
        </ul>

        <p><strong>2. Surgical ligation</strong></p>
        <ul>
          <li>Left lateral thoracotomy ICS 4</li>
          <li>Identify and ligate ductus with silk suture (double or triple ligation)</li>
          <li>Used for very small dogs or when transcatheter not available</li>
          <li>Mortality 2-7%; main risk = ductal tear during dissection (massive hemorrhage)</li>
        </ul>

        <p><strong>3. Medical management (if surgery not possible)</strong></p>
        <ul>
          <li>CHF management: furosemide, pimobendan, ACEI, spironolactone (see Heart Failure entry)</li>
          <li>Median survival without closure: ~6-12 months in dogs presenting with CHF</li>
        </ul>

        <p><strong>Right-to-Left PDA — DO NOT close ✗</strong></p>
        <ul>
          <li>Closure → acute right heart failure → death (PA pressure &gt; aortic, ductus is "release valve")</li>
          <li>Management: <strong>periodic phlebotomy</strong> to keep PCV 55-62% (relieves hyperviscosity)</li>
          <li>± Hydroxyurea 30 mg/kg PO q24h × 7-10d, then 15 mg/kg q24h to suppress erythropoiesis</li>
          <li>Sildenafil 1-3 mg/kg PO q8-12h for PH</li>
          <li>Avoid stress, heat, dehydration</li>
        </ul>
      `,
      complications: `
        <p><strong>Pre-closure:</strong></p>
        <ul>
          <li>Left CHF (most common cause of death)</li>
          <li>Atrial fibrillation (severe LA dilation)</li>
          <li>Pulmonary hypertension → shunt reversal (irreversible)</li>
        </ul>
        <p><strong>Post-closure:</strong></p>
        <ul>
          <li>Residual shunting (5-15%)</li>
          <li>Femoral artery thrombosis (post-catheterization)</li>
          <li>Persistent MR if LV remodeling severe before closure</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Successful closure before CHF onset → <strong>normal lifespan</strong> ✓</li>
          <li>Closure after CHF → ~75-85% improve, but residual heart disease common</li>
          <li>Reverse PDA → guarded; median 2-5 ปี with management</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 9 · Pericardial Effusion / Cardiac Tamponade ---------- */
  {
    id: 'pericardial-effusion',
    titleEn: 'Pericardial Effusion &amp; Cardiac Tamponade',
    titleTh: 'น้ำในเยื่อหุ้มหัวใจและภาวะหัวใจถูกบีบ',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['pericardial effusion', 'cardiac tamponade', 'HSA', 'hemangiosarcoma', 'pericardiocentesis', 'chemodectoma', 'idiopathic'],
    aliases: ['pericardial fluid', 'น้ำในเยื่อหุ้มหัวใจ', 'tamponade'],
    source: 'Ch. 9 · pp. 174–189',
    sections: {
      definition: `
        <p>การสะสมของของเหลวในช่องเยื่อหุ้มหัวใจ — เมื่อปริมาณ + อัตราการสะสมสูงพอ จะกด heart filling = <strong>cardiac tamponade</strong> (ฉุกเฉิน)</p>
        <ul>
          <li>พบบ่อยใน <strong>สุนัขพันธุ์ใหญ่ สูงอายุ</strong></li>
          <li>ในแมว — มัก secondary to CHF จาก cardiomyopathy, rarely cause tamponade</li>
        </ul>
      `,
      etiology: `
        <p><strong>Dogs (hemorrhagic effusion ที่พบบ่อย):</strong></p>
        <ul>
          <li><strong>Hemangiosarcoma (HSA)</strong> — สาเหตุอันดับ 1 ในสุนัขใหญ่; right atrial appendage มากที่สุด; Golden Retriever, GSD, Lab</li>
          <li><strong>Idiopathic (benign) pericardial effusion</strong> — อันดับ 2; สาเหตุไม่ชัด; Golden, Lab, Saint Bernard; recurrent</li>
          <li>Heart base tumors: <strong>chemodectoma</strong> (Boxer, Bulldog), thyroid carcinoma, ectopic thyroid</li>
          <li>Pericardial mesothelioma — diffuse</li>
          <li>Atrial rupture (severe MMVD with LA tear)</li>
          <li>Coagulopathy (rodenticide)</li>
          <li>Trauma, iatrogenic (post-pericardiocentesis tear)</li>
          <li>Lymphoma (more common in cats)</li>
          <li>Bacterial/fungal pericarditis (rare; from grass awn migration in dogs)</li>
        </ul>
        <p><strong>Cats (transudate/modified transudate ที่พบบ่อย):</strong></p>
        <ul>
          <li>CHF จาก HCM/RCM</li>
          <li>FIP — most common <em>symptomatic</em> cause in cats ✗</li>
          <li>Lymphoma</li>
          <li>Toxoplasmosis</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Cardiac tamponade physiology:</strong></p>
        <ul>
          <li>Pericardial pressure rises → equals or exceeds normal cardiac diastolic pressure</li>
          <li>External compression → ↓ ventricular filling → ↓ stroke volume → ↓ CO</li>
          <li>Right heart affected first (lower pressure, thinner wall)</li>
          <li>Compensatory: ↑ HR, ↑ SVR, ↑ blood volume → eventually fails</li>
          <li><strong>Right CHF predominates:</strong> ascites, pleural effusion, hepatomegaly, JVD</li>
          <li>Severe → cardiogenic shock</li>
        </ul>
        <p>Rate of accumulation matters: 100 mL slowly = OK; 100 mL acute = tamponade ✗</p>
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
          <li>Sometimes sudden death without warning</li>
        </ul>
        <p><strong>Physical exam:</strong></p>
        <ul>
          <li><strong>Muffled heart sounds</strong> (classic) ✨</li>
          <li>Weak femoral pulse, sometimes <strong>pulsus paradoxus</strong> (pulse weakens with inspiration)</li>
          <li>Sinus tachycardia (compensatory)</li>
          <li>JVD or positive hepatojugular reflux ✨</li>
          <li>Ascites (palpable fluid wave)</li>
          <li>Pale MM, prolonged CRT (poor CO)</li>
          <li>Decreased lung sounds ventrally (pleural effusion)</li>
          <li>Mostly NO heart murmur unless concurrent disease</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab:</strong></p>
        <ul>
          <li>CBC: anemia (HSA — regenerative + schistocytes/acanthocytes), thrombocytopenia (HSA, DIC)</li>
          <li>Biochem: ↑ LFTs (hepatic congestion), prerenal azotemia</li>
          <li><strong>cTnI:</strong> ↑ markedly in HSA; helps differentiate from idiopathic ✨</li>
          <li><strong>NT-proBNP:</strong> usually NOT elevated in pericardial effusion (unlike other heart disease) — useful contrast</li>
          <li>Coags (PT, aPTT) — rule out rodenticide, DIC</li>
        </ul>
        <p><strong>Thoracic radiographs:</strong></p>
        <ul>
          <li><strong>Globoid (round) cardiac silhouette</strong> — classic but not pathognomonic ✨</li>
          <li>Pleural effusion (50%)</li>
          <li>Caudal vena cava distension</li>
          <li>"Snow globe" appearance (cardiac silhouette without identifiable chamber borders)</li>
          <li>Lung fields usually clear (vs CHF — pulmonary edema)</li>
        </ul>
        <p><strong>ECG:</strong></p>
        <ul>
          <li><strong>Low voltage QRS</strong> (R wave &lt; 1.0 mV in lead II in dog)</li>
          <li><strong>Electrical alternans</strong> — beat-to-beat variation in QRS amplitude (heart "swinging" in fluid) ✨</li>
          <li>Sinus tachycardia</li>
          <li>Sometimes VPCs</li>
        </ul>
        <p><strong>Echocardiography (definitive + identifies cause):</strong></p>
        <ul>
          <li>Anechoic space surrounding heart</li>
          <li><strong>Right atrial collapse during diastole</strong> = tamponade ✓</li>
          <li><strong>Right ventricular collapse during diastole</strong> = severe tamponade</li>
          <li>Look carefully at <strong>right auricle</strong> (HSA most common location)</li>
          <li>Heart base mass (chemodectoma)</li>
          <li>Aortic root mass (less common locations)</li>
          <li>Idiopathic — no mass identified</li>
        </ul>
        <p><strong>Pericardial fluid analysis (post-centesis):</strong></p>
        <ul>
          <li>HSA, idiopathic, mesothelioma → hemorrhagic, PCV often 7-30%</li>
          <li>Cytology: limited utility; reactive mesothelial cells common, hard to differentiate from neoplasia</li>
          <li>Modified transudate/transudate: heart failure, FIP, toxemia</li>
          <li>Septic exudate: rare; bacterial culture if suspected</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>CHF (other causes) — pulmonary edema usually present, NT-proBNP ↑</li>
          <li>Hypoalbuminemia (PLE, PLN, hepatic failure) — ascites without cardiac signs</li>
          <li>Pleural effusion (chylothorax, pyothorax, neoplasia)</li>
          <li>Abdominal mass (splenic, hepatic) presenting with weakness</li>
        </ul>
      `,
      treatment: `
        <p><strong>Cardiac tamponade = emergency!</strong></p>
        <p><strong>1. Pericardiocentesis (immediate, life-saving)</strong> — see procedure entry</p>

        <p><strong>2. Supportive care (do NOT use diuretics in tamponade!) ✗</strong></p>
        <ul>
          <li>IV fluids — careful crystalloid bolus (10-20 mL/kg) to ↑ preload while preparing for centesis</li>
          <li>O2 supplementation</li>
          <li>Avoid diuretics — ↓ preload further, worsens tamponade</li>
          <li>Avoid pimobendan acutely</li>
        </ul>

        <p><strong>3. Treat underlying cause:</strong></p>
        <ul>
          <li><strong>HSA:</strong>
            <ul>
              <li>Surgical resection of right atrial mass (right thoracotomy or thoracoscopic) + chemo (doxorubicin)</li>
              <li>Without surgery: median survival 1-3 months</li>
              <li>With surgery + chemo: 4-8 months</li>
            </ul>
          </li>
          <li><strong>Idiopathic:</strong>
            <ul>
              <li>1st episode: pericardiocentesis alone — ~50% never recur</li>
              <li>Recurrent (≥ 2 episodes): <strong>subtotal pericardiectomy</strong> via thoracotomy or thoracoscopy → curative ~85-90%</li>
              <li>Risk of progression to constrictive pericarditis if untreated</li>
            </ul>
          </li>
          <li><strong>Chemodectoma:</strong>
            <ul>
              <li>Pericardiectomy palliates (relieves recurrent tamponade)</li>
              <li>Surgical resection rarely possible (heart base location)</li>
              <li>Stereotactic radiation therapy — emerging option</li>
              <li>Median survival with pericardiectomy ~1-2 years (slow growing)</li>
            </ul>
          </li>
          <li><strong>FIP (cat):</strong> historically grave; now <em>GS-441524 antiviral</em> with high cure rate</li>
          <li><strong>Lymphoma:</strong> chemotherapy (multi-drug protocol)</li>
        </ul>
      `,
      complications: `
        <p><strong>Acute:</strong></p>
        <ul>
          <li>Death from tamponade if not relieved</li>
          <li>Iatrogenic during pericardiocentesis: coronary laceration, ventricular puncture, arrhythmia</li>
        </ul>
        <p><strong>Chronic:</strong></p>
        <ul>
          <li><strong>Constrictive pericarditis</strong> — fibrotic pericardium fails to expand → chronic right CHF; dx by echo (thick pericardium) + cath (equalized diastolic pressures); tx = pericardiectomy</li>
          <li>Recurrent effusion (idiopathic, chemodectoma, mesothelioma)</li>
          <li>Metastasis (HSA — splenic, hepatic, pulmonary)</li>
        </ul>
        <p><strong>Prognosis (highly variable by cause):</strong></p>
        <ul>
          <li><strong>Idiopathic:</strong> excellent with pericardiectomy</li>
          <li><strong>HSA:</strong> grave — median 1-3 mo without tx; 4-8 mo with surgery + chemo</li>
          <li><strong>Chemodectoma:</strong> moderate — 1-2 ปี with pericardiectomy</li>
          <li><strong>Mesothelioma:</strong> poor — 4-6 mo</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 9 · Pericardiocentesis (procedure) ---------- */
  {
    id: 'pericardiocentesis',
    titleEn: 'Pericardiocentesis',
    titleTh: 'การเจาะระบายน้ำในเยื่อหุ้มหัวใจ',
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
          <li><strong>Cardiac tamponade</strong> (life-saving) — RA collapse on echo + clinical signs of poor CO</li>
        </ul>
        <p><strong>Relative indications:</strong></p>
        <ul>
          <li>Diagnostic fluid sampling (when cause uncertain)</li>
          <li>Large effusion approaching tamponade threshold</li>
          <li>Symptomatic relief in non-tamponade large effusion</li>
        </ul>
      `,
      contraindications: `
        <p><strong>Absolute:</strong></p>
        <ul>
          <li>None when tamponade is life-threatening — benefit outweighs risk</li>
        </ul>
        <p><strong>Relative (use caution):</strong></p>
        <ul>
          <li><strong>Coagulopathy</strong> — rodenticide intoxication, DIC, severe thrombocytopenia → correct first if time allows; if tamponade, do anyway with vitamin K + plasma support</li>
          <li><strong>Atrial tear / hemorrhage from MMVD</strong> — drainage may worsen bleeding (but sometimes necessary)</li>
          <li><strong>Small volume effusion</strong> — high risk of cardiac puncture</li>
          <li><strong>Adhesions / loculated fluid</strong> — ultrasound guidance essential</li>
          <li>Uncooperative animal without sedation availability</li>
        </ul>
      `,
      preparation: `
        <p><strong>Patient:</strong></p>
        <ul>
          <li>Position: <strong>left lateral recumbency</strong> (or sternal in dyspneic patients)</li>
          <li>Right approach used — heart shifts away from right chest wall during effusion</li>
          <li>IV access — 20-22 g cephalic catheter, run LRS at maintenance</li>
          <li>Continuous ECG monitoring (lead II)</li>
          <li>O2 supplementation (flow-by or mask)</li>
          <li>Sedation usually NOT needed in collapsing patients; mild butorphanol 0.2 mg/kg IV ± midazolam 0.2 mg/kg if anxious</li>
          <li>Clip + aseptic prep right thoracic wall ICS 4-6, 2-4 cm above sternum</li>
          <li>Local anesthetic: 2% lidocaine 1-3 mL infiltrate skin → intercostal muscles → parietal pleura</li>
        </ul>
        <p><strong>Equipment:</strong></p>
        <ul>
          <li>14-16 g over-the-needle IV catheter (3-5 inch length) for medium-large dog; 18-20 g for cat/small dog</li>
          <li>Extension set + 3-way stopcock</li>
          <li>20-60 mL syringe</li>
          <li>EDTA tube + plain (red top) tube + culture tube for fluid analysis</li>
          <li>Bowl/basin to collect drained fluid</li>
          <li><strong>Ultrasound</strong> (highly recommended for guidance + confirm needle placement)</li>
          <li>Backup: defibrillator, lidocaine, emergency drugs ready</li>
        </ul>
        <p><strong>Anatomy review:</strong></p>
        <ul>
          <li>Right side preferred — right atrium &amp; right ventricle adjacent to chest wall when heart is medialized by effusion</li>
          <li>Coronary arteries lie on left side (avoid)</li>
          <li>Approach from <strong>caudal aspect of rib</strong> — intercostal vessels run along caudal margin of cranial rib</li>
          <li>Aim slightly cranial + dorsal (toward opposite shoulder)</li>
        </ul>
      `,
      steps: `
        <ol style="font-family: var(--font-thai); font-size: 16px; line-height: 1.7; color: var(--ink); margin: 6px 0 10px 22px; padding: 0;">
          <li><strong>Confirm tamponade</strong> on quick echo or POCUS — see anechoic space + RA collapse</li>
          <li><strong>Identify landmark:</strong> right side, ICS 4-6, just above costochondral junction (palpate at level of beating heart)</li>
          <li><strong>Aseptic prep + drape</strong> the area</li>
          <li><strong>Local anesthesia:</strong> infiltrate lidocaine SQ → intercostal muscle → pleura</li>
          <li><strong>Stab incision</strong> with #11 blade (1-2 mm) at puncture site to facilitate catheter passage</li>
          <li><strong>Attach catheter to extension/stopcock/syringe</strong>; have assistant aspirate gently as you advance</li>
          <li><strong>Insert catheter</strong> perpendicular to skin, advance slowly through chest wall while aspirating
            <ul style="margin: 6px 0 6px 20px;">
              <li>You'll feel a "pop" entering pleural space — may get small amount of pleural fluid</li>
              <li>Continue advancing — second "pop" entering pericardium → fluid flashes back</li>
            </ul>
          </li>
          <li><strong>When fluid flashes:</strong> hold needle still, advance only the catheter cannula off the stylet, then withdraw stylet</li>
          <li><strong>Drain fluid</strong> using stopcock + syringe; remove until flow ceases or rate slows substantially</li>
          <li><strong>Collect samples:</strong>
            <ul style="margin: 6px 0 6px 20px;">
              <li>EDTA tube — cytology, PCV</li>
              <li>Plain tube — let stand: <em>true intracardiac blood will clot</em>; pericardial hemorrhage will NOT clot (defibrinated)</li>
              <li>Culture if exudative</li>
            </ul>
          </li>
          <li><strong>Watch ECG continuously</strong> — sudden VPCs/VT = catheter contacting myocardium → withdraw 1-2 mm</li>
          <li><strong>When drainage complete</strong> (rate slows, syringe gets harder to fill): withdraw catheter, apply pressure to puncture site for 1-2 min</li>
          <li><strong>Post-procedure echo</strong> to confirm reduced effusion and no new complication</li>
        </ol>
      `,
      complications: `
        <p><strong>Common (mild):</strong></p>
        <ul>
          <li>Transient VPCs (myocardial contact) — usually self-limit</li>
          <li>Vasovagal response — transient bradycardia, treat with atropine if persistent</li>
          <li>Mild hemorrhage at puncture site</li>
        </ul>
        <p><strong>Serious (rare with good technique + US guidance):</strong></p>
        <ul>
          <li>Coronary artery laceration → severe hemorrhage</li>
          <li>Ventricular puncture → tamponade worsening, pneumopericardium</li>
          <li>Pneumothorax</li>
          <li>Laceration of right atrial mass (HSA) → fatal hemorrhage</li>
          <li>Sustained ventricular arrhythmia → VF</li>
          <li>Bacterial pericarditis (poor aseptic technique)</li>
        </ul>
        <p>Most complications avoided with: <strong>ultrasound guidance, slow advancement, ECG monitoring, sufficient operator experience</strong></p>
      `,
      postCare: `
        <ul>
          <li><strong>Continuous ECG</strong> for 4-6 hours post-procedure (transient VPCs common)</li>
          <li>Recheck PCV / TS — assess for ongoing hemorrhage</li>
          <li>Repeat echocardiography at 24h and 1 week to assess reaccumulation</li>
          <li>If reaccumulation within 1-2 weeks → suggests ongoing process (HSA, neoplasia, recurrent idiopathic)</li>
          <li>For idiopathic: 1st episode → observe; 2nd episode → consider <strong>pericardiectomy</strong> (definitive)</li>
          <li>Send fluid for cytology + biochemistry (PCV, TP); culture if exudative</li>
          <li>Plan further workup (CT, exploratory thoracoscopy) for cause if not identified on echo</li>
          <li>Monitor for delayed hemorrhage, especially with HSA or coagulopathy</li>
          <li>Client communication: explain underlying cause + prognosis honestly</li>
        </ul>
        <div class="callout">💡 Idiopathic effusion ที่หายแล้ว — หลายเคสไม่กลับมา; แต่ถ้ากลับ &gt; 2 ครั้ง = pericardiectomy เป็น curative (~85-90%)</div>
      `,
    },
  },

  /* ---------- Ch 10 · Pulmonary Hypertension &amp; Heartworm ---------- */
  {
    id: 'pulmonary-hypertension',
    titleEn: 'Pulmonary Hypertension &amp; Heartworm Disease',
    titleTh: 'ความดันหลอดเลือดปอดสูงและโรคพยาธิหนอนหัวใจ',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['PH', 'PAH', 'heartworm', 'Dirofilaria', 'sildenafil', 'tadalafil', 'cor pulmonale', 'caval syndrome', 'melarsomine'],
    aliases: ['heartworm disease', 'HWD', 'pulmonary hypertension', 'พยาธิหนอนหัวใจ', 'หลอดเลือดปอดสูง'],
    source: 'Ch. 10 · pp. 190–210',
    sections: {
      definition: `
        <p><strong>Pulmonary Arterial Hypertension (PAH):</strong> systolic pulmonary arterial pressure &gt; 35 mmHg or mean &gt; 25 mmHg</p>
        <ul>
          <li>Mild: 35-55 mmHg | Moderate: 55-80 | Severe: &gt; 80</li>
        </ul>
        <p><strong>Heartworm Disease (HWD):</strong> infection with <em>Dirofilaria immitis</em> via mosquito vector — most clinically important cause of PH in endemic regions (incl. Thailand)</p>
      `,
      etiology: `
        <p><strong>WHO classification of PH (modified for vet):</strong></p>
        <ul>
          <li><strong>Group I — PAH:</strong> idiopathic, congenital L-R shunts (PDA, VSD)</li>
          <li><strong>Group II — left heart disease (~40%):</strong> MMVD, DCM, HCM (postcapillary PH)</li>
          <li><strong>Group III — hypoxic pulmonary disease (20-40%):</strong> chronic bronchitis, pulmonary fibrosis, BOAS</li>
          <li><strong>Group IV — thromboembolic disease:</strong> heartworm, IMHA, neoplasia, hyperadrenocorticism</li>
          <li><strong>Group V — multifactorial / heartworm</strong></li>
        </ul>
        <p><strong>Heartworm life cycle:</strong></p>
        <ul>
          <li>Mosquito ingests microfilariae (L1) from infected dog</li>
          <li>L1 → L2 → L3 in mosquito (~2-2.5 weeks, requires &gt; 64°F sustained)</li>
          <li>L3 injected into new host during blood meal</li>
          <li>L3 → L4 → L5 (juvenile) over 2-3 months in tissues</li>
          <li>L5 enters vasculature ~100 days post-infection, migrate to pulmonary arteries</li>
          <li>Mature adults at 5-7 months → patent infection (microfilaria in blood)</li>
          <li>Adult worms 15-30 cm; survive 5-7 years in dogs, 3-4 years in cats</li>
          <li><strong>Wolbachia</strong> endosymbiont — bacterial co-infection, contributes to inflammation</li>
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
          <li>Adult worms in pulmonary arteries (especially caudal lobar)</li>
          <li>Villous myointimal proliferation → vessel narrowing + hypertrophy</li>
          <li>Wolbachia surface protein → systemic inflammation</li>
          <li>Eosinophilic pneumonitis</li>
          <li>Glomerulonephritis (immune complex deposition)</li>
          <li><strong>Caval syndrome:</strong> heavy worm burden migrates to RA/RV/vena cava → mechanical obstruction + intravascular hemolysis (RBC sheared by worms) → acute hepatic congestion + anemia + DIC</li>
        </ul>
      `,
      symptoms: `
        <p><strong>PH (general):</strong></p>
        <ul>
          <li>Exercise intolerance, fatigue</li>
          <li>Persistent respiratory difficulty</li>
          <li>Cough</li>
          <li>Syncope (especially with exertion or cough)</li>
          <li>Cyanosis</li>
          <li>Right CHF: ascites, hepatomegaly, JVD</li>
        </ul>
        <p><strong>Heartworm — clinical class:</strong></p>
        <ul>
          <li><strong>Class 1 (mild):</strong> asymptomatic to mild cough; no/minimal radiographic changes</li>
          <li><strong>Class 2 (moderate):</strong> cough, exercise intolerance, tachypnea; PA enlargement on rad</li>
          <li><strong>Class 3 (severe):</strong> dyspnea, weight loss, syncope, ascites (right CHF); marked PA changes, RV enlargement</li>
          <li><strong>Caval syndrome:</strong> acute weakness, pale MM, hemoglobinuria (red urine), jaundice, marked TR murmur — fatal within days without surgery</li>
        </ul>
        <p><strong>Auscultation in PH:</strong></p>
        <ul>
          <li>Loud, split S2 (delayed pulmonic closure)</li>
          <li>Right systolic murmur (TR) at right apex</li>
          <li>Sinus arrhythmia / relative bradycardia (high vagal tone from pulm dz)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Heartworm testing:</strong></p>
        <ul>
          <li><strong>Antigen test (SNAP, IDEXX):</strong>
            <ul>
              <li>Detects female adult worm antigen (uterine glycoprotein)</li>
              <li>Sensitive ~98% for ≥ 3 mature females; positive at 6.5-7 months post-infection</li>
              <li>False negative: all-male infection, low burden, immune complex blocking (heat-treat sample to confirm)</li>
            </ul>
          </li>
          <li><strong>Microfilaria test (Knott or filter):</strong>
            <ul>
              <li>Confirms patent infection; differentiates D. immitis from Acanthocheilonema reconditum</li>
              <li>Recommended in all antigen-positive dogs before adulticide therapy</li>
            </ul>
          </li>
          <li><strong>Cats:</strong> antigen + antibody both recommended (low antigen sensitivity due to low burden)</li>
        </ul>
        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Radiographs:</strong>
            <ul>
              <li>RV enlargement, PA bulge (12-2 o'clock on DV)</li>
              <li>Enlarged, blunted, tortuous lobar arteries (caudal lobar artery wider than 9th rib at 9th ICS)</li>
              <li>Patchy alveolar pattern (eosinophilic pneumonitis)</li>
            </ul>
          </li>
          <li><strong>Echocardiography:</strong>
            <ul>
              <li>RV/RA dilation, RV hypertrophy</li>
              <li>Septal flattening, paradoxical motion</li>
              <li>PA dilation (&gt; aortic root)</li>
              <li><strong>TR jet velocity</strong> → estimate PA systolic pressure: PASP = 4(TR vel)² + RA pressure</li>
              <li>Visible heartworms in PA, RV (severe burden) — "double-line" sign</li>
            </ul>
          </li>
        </ul>
        <p><strong>Lab:</strong></p>
        <ul>
          <li>Eosinophilia (variable)</li>
          <li>↑ RDW often in severe PH</li>
          <li>Proteinuria — glomerulonephritis</li>
          <li>↑ NT-proBNP, cTnI in severe disease</li>
          <li>Caval syndrome: hemoglobinuria, ↓ Hct, ↑ bilirubin, ↑ liver enzymes</li>
        </ul>
      `,
      differential: `
        <p><strong>Cause of PH:</strong></p>
        <ul>
          <li>Always rule out left heart disease first (most common Group II)</li>
          <li>Heartworm test — endemic areas always check</li>
          <li>Chronic respiratory disease (chronic bronchitis, fibrosis, BOAS)</li>
          <li>Pulmonary thromboembolism workup (D-dimer, TEG, CT angiography)</li>
        </ul>
        <p><strong>Cough/dyspnea:</strong> CHF (left), pneumonia, neoplasia, asthma (cat)</p>
      `,
      treatment: `
        <p><strong>PH treatment (if cause not reversible):</strong></p>
        <ul>
          <li><strong>Sildenafil 1-3 mg/kg PO q8-12h</strong> — PDE5 inhibitor, selective pulmonary vasodilator. Most cost-effective. ↑ quality of life, ↑ survival ✨</li>
          <li><strong>Tadalafil 1-2 mg/kg PO q24h</strong> — alternative, longer half-life, similar efficacy</li>
          <li>Treat underlying cause (heartworm, left heart disease, pulmonary disease)</li>
          <li>Exercise restriction</li>
          <li>If right CHF: furosemide + pimobendan + ACEI + spironolactone (caution with diuretics — preload sensitive)</li>
        </ul>

        <p><strong>Heartworm — Adulticide protocol (AHS recommended):</strong></p>
        <p><em>Pre-treatment phase:</em></p>
        <ul>
          <li>Stage disease (history, PE, rad, echo)</li>
          <li>Restrict exercise — minimize PTE risk during worm death</li>
          <li><strong>Doxycycline 10 mg/kg PO q12h × 30 days</strong> — kills Wolbachia, reduces inflammation, ↑ adulticide efficacy</li>
          <li><strong>Macrocyclic lactone</strong> (ivermectin 6-12 µg/kg PO weekly OR moxidectin/imidacloprid topical monthly) × 60 days minimum — kills migrating L3/L4, "softens" adults</li>
          <li>Optional: prednisone 0.5 mg/kg PO q12h × 1 wk → 0.5 mg/kg q24h × 1 wk → 0.5 mg/kg q48h × 2 wk during melarsomine</li>
        </ul>
        <p><em>Adulticide phase (3-dose protocol — preferred):</em></p>
        <ul>
          <li>Day 60: <strong>Melarsomine 2.5 mg/kg deep IM</strong> in epaxial muscles (lumbar)</li>
          <li>Day 90: Melarsomine 2.5 mg/kg deep IM</li>
          <li>Day 91: Melarsomine 2.5 mg/kg deep IM (24h after dose 2)</li>
          <li><strong>Strict cage rest × 6-8 weeks</strong> after each treatment to ↓ PTE risk</li>
        </ul>
        <p><em>Post-treatment:</em></p>
        <ul>
          <li>Microfilaricide (if needed) — already covered by macrocyclic lactone</li>
          <li><strong>Antigen test at 9 months</strong> post-melarsomine to confirm cure</li>
          <li>Continue heartworm prevention monthly for life</li>
        </ul>

        <p><strong>"Slow-kill" / soft-kill (if melarsomine not available or contraindicated):</strong></p>
        <ul>
          <li>Doxycycline + monthly macrocyclic lactone — eliminates worms over 18-24 months</li>
          <li>Still requires exercise restriction</li>
          <li>AHS no longer recommends as preferred — slower elimination = prolonged pulmonary damage</li>
        </ul>

        <p><strong>Caval syndrome — surgical emergency:</strong></p>
        <ul>
          <li>Mechanical worm removal via right jugular venotomy with long alligator forceps</li>
          <li>IV fluids, blood transfusion if needed</li>
          <li>Mortality 30-40% even with surgery</li>
        </ul>

        <p><strong>Cats with HWD:</strong></p>
        <ul>
          <li><strong>NO melarsomine</strong> — too dangerous (worm death → fatal anaphylaxis-like reaction)</li>
          <li>Supportive care + corticosteroids for inflammatory signs</li>
          <li>Monthly preventive (selamectin, milbemycin, moxidectin)</li>
          <li>Surgical removal via jugular venotomy (referral) for severe cases</li>
        </ul>

        <p><strong>Prevention (most important):</strong></p>
        <ul>
          <li>Year-round monthly heartworm preventive in endemic areas (TH = year-round)</li>
          <li>Ivermectin (Heartgard), milbemycin (Interceptor), moxidectin (Advantage Multi, ProHeart 6/12 injection)</li>
          <li>Annual antigen testing</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pulmonary thromboembolism (PTE)</strong> — main risk during adulticide; signs 7-30 days post-treatment</li>
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
          <li>Caval syndrome: 30-50% mortality even with surgery</li>
          <li>PH from non-reversible causes: median survival 3-6 months without sildenafil; ~75% 1-yr survival with sildenafil</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 11 · Systemic Hypertension ---------- */
  {
    id: 'systemic-hypertension',
    titleEn: 'Systemic Arterial Hypertension',
    titleTh: 'ความดันโลหิตสูง',
    type: 'disease',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['hypertension', 'amlodipine', 'enalapril', 'telmisartan', 'CKD', 'hyperthyroidism', 'target organ damage', 'retinal detachment'],
    aliases: ['high blood pressure', 'ความดันสูง', 'BP'],
    source: 'Ch. 11 · pp. 211–220',
    sections: {
      definition: `
        <p>Sustained elevation of systemic arterial blood pressure</p>
        <p><strong>ACVIM 2018 BP categories (cat &amp; dog):</strong></p>
        <ul>
          <li><strong>Normotensive:</strong> &lt; 140 mmHg systolic — minimal risk</li>
          <li><strong>Prehypertensive:</strong> 140-159 — low risk</li>
          <li><strong>Hypertensive:</strong> 160-179 — moderate risk → consider treatment</li>
          <li><strong>Severely hypertensive:</strong> ≥ 180 — high risk → treat ✗</li>
        </ul>
        <p>Sighthounds add ~20 mmHg to normal range</p>
        <p>Confirm hypertension with <strong>≥ 2 measurements on different days</strong> unless target organ damage already evident</p>
      `,
      etiology: `
        <p><strong>Almost always SECONDARY in dogs/cats (rare idiopathic):</strong></p>
        <p><strong>Cats — most common causes:</strong></p>
        <ul>
          <li><strong>Chronic kidney disease (CKD)</strong> — 25-65% of CKD cats hypertensive ✨</li>
          <li><strong>Hyperthyroidism</strong> — 10-25% hypertensive at diagnosis</li>
          <li>Primary hyperaldosteronism (Conn's syndrome)</li>
          <li>Idiopathic (uncommon)</li>
        </ul>
        <p><strong>Dogs — most common causes:</strong></p>
        <ul>
          <li><strong>Renal disease</strong> (especially glomerular dz / PLN) — 30-80%</li>
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
          <li>↑ SVR: most causes — RAAS activation, sympathetic activation, catecholamine excess</li>
          <li>Volume expansion: Na/water retention (renal dz, hyperaldo, hyperadreno)</li>
        </ul>
        <p><strong>Target organ damage (TOD):</strong></p>
        <ul>
          <li><strong>Eye:</strong> retinal detachment ± hemorrhage, hyphema, papilledema, blindness (most common presenting sign in cats!) ✨</li>
          <li><strong>Kidney:</strong> glomerulosclerosis, tubular fibrosis, ↑ proteinuria, ↑ progression of CKD</li>
          <li><strong>Heart:</strong> LV concentric hypertrophy, mild aortic dilation, soft murmur, gallop</li>
          <li><strong>Brain:</strong> hypertensive encephalopathy, cerebrovascular accident (stroke), seizures</li>
          <li><strong>Other:</strong> epistaxis</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Often SILENT until target organ damage</strong></p>
        <p><strong>Presenting signs (when symptomatic):</strong></p>
        <ul>
          <li><strong>Acute blindness</strong> ✨ — retinal detachment/hemorrhage; especially CAT</li>
          <li>Disorientation, seizures, vocalization (hypertensive encephalopathy)</li>
          <li>Hindlimb weakness from CVA</li>
          <li>Epistaxis</li>
          <li>Polyuria/polydipsia (underlying CKD or pressure diuresis)</li>
          <li>Mild systolic murmur, gallop sound (cat)</li>
        </ul>
        <p><strong>Found on screening</strong> in: senior dogs/cats annually, CKD, hyperthyroid, Cushing's, DM patients</p>
      `,
      diagnosis: `
        <p><strong>BP measurement:</strong></p>
        <ul>
          <li>Quiet environment, owner present, 5-15 min acclimation</li>
          <li>Cuff width = 30-40% of limb circumference</li>
          <li>Take 5-7 readings, discard high/low, average rest</li>
          <li>If &gt; 20% variability: re-cuff or change limb</li>
          <li>White-coat effect ~20 mmHg in cats; if mildly ↑, recheck on different day</li>
        </ul>
        <p><strong>Methods:</strong></p>
        <ul>
          <li><strong>Doppler:</strong> measures systolic only; gold standard for cats</li>
          <li><strong>Oscillometric / HDO:</strong> systolic + diastolic + mean; reliable in dogs and calm cats</li>
          <li>Direct arterial: gold standard but invasive (research only usually)</li>
        </ul>
        <p><strong>Workup for cause + TOD:</strong></p>
        <ul>
          <li>CBC, biochem, UA + UPC ratio</li>
          <li>T4 (cats), Cushing's screen (dogs)</li>
          <li><strong>Fundoscopic exam essential</strong> — retinal detachment, hemorrhage, vessel tortuosity</li>
          <li>Echocardiography — LV thickness, aortic dilation</li>
          <li>Imaging if pheo suspected (abdominal US ± MRI/CT)</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>White-coat hypertension (transient stress)</li>
          <li>Pain, anxiety</li>
          <li>Recent feeding (mild)</li>
          <li>Drug-induced</li>
        </ul>
        <p>Sudden blindness DDx: SARDS (no hypertension), optic neuritis, glaucoma, retinal detachment from other causes</p>
      `,
      treatment: `
        <p><strong>Indications to treat:</strong></p>
        <ul>
          <li>SBP ≥ 160 mmHg confirmed on 2+ visits</li>
          <li>Any BP with evidence of TOD (eyes, kidney, heart, brain)</li>
          <li>SBP ≥ 180 — treat without delay</li>
        </ul>
        <p><strong>Goal:</strong> SBP &lt; 160 mmHg ideally, &lt; 140 mmHg ideal (avoid &lt; 110 = hypotension)</p>

        <p><strong>First-line medications (ACVIM 2018):</strong></p>
        <ul>
          <li><strong>Cats:</strong>
            <ul>
              <li><strong>Amlodipine 0.625-1.25 mg/cat PO q24h</strong> (or 0.1-0.2 mg/kg) — most effective in cats; can ↑ to 1.25 mg/cat or q12h if needed</li>
              <li>Hyperthyroid cat ± hypertension: <strong>methimazole + atenolol</strong> 6.25-12.5 mg/cat PO q12h; add amlodipine if BP still high</li>
              <li>Proteinuric CKD cat: ACEI (benazepril 0.5 mg/kg PO q24h) or ARB (telmisartan 1-3 mg/kg PO q24h) ± amlodipine</li>
            </ul>
          </li>
          <li><strong>Dogs:</strong>
            <ul>
              <li><strong>ACEI first-line</strong>: enalapril 0.5 mg/kg PO q12h or benazepril 0.5 mg/kg PO q12h (preferred in renal dz — biliary excretion)</li>
              <li>Add <strong>amlodipine 0.1-0.3 mg/kg PO q24h</strong> if ACEI alone insufficient (often needed)</li>
              <li><strong>Telmisartan 1-3 mg/kg PO q24h</strong> — ARB alternative for proteinuric dogs; better BP reduction than ACEI in some studies</li>
              <li>Pheochromocytoma: <strong>phenoxybenzamine</strong> (α-blocker) 0.25 mg/kg PO q8-12h FIRST, then add atenolol if tachycardia</li>
            </ul>
          </li>
        </ul>

        <p><strong>Hypertensive emergency (severe TOD):</strong></p>
        <ul>
          <li><strong>Amlodipine 0.625 mg/cat PO</strong> stat, recheck BP q2-4h; can repeat in 4-6 h if needed</li>
          <li>Severe cases: hospitalize for IV therapy
            <ul>
              <li>Nitroprusside CRI 0.5-10 µg/kg/min (need arterial line monitoring)</li>
              <li>Hydralazine 0.1-0.2 mg/kg IV/IM, repeat q2h</li>
              <li>Esmolol CRI 25-200 µg/kg/min for tachycardia</li>
              <li>Acepromazine 0.05 mg/kg IV (mild sedation + α-block)</li>
            </ul>
          </li>
          <li><strong>Pheo crisis: phentolamine</strong> 0.02-0.1 mg/kg IV bolus → CRI</li>
          <li>Avoid: ACEI alone (slow onset), pure β-blocker in pheo</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>Recheck BP in <strong>7-10 days</strong> after starting/changing therapy</li>
          <li>Once stable: q1-3 months</li>
          <li>BUN/Cr, electrolytes, UPC at 1-2 weeks then q3-6 months</li>
          <li>Fundoscopy q3-6 months if had retinal lesions</li>
          <li>Treat underlying disease aggressively (most important factor)</li>
        </ul>

        <p><strong>Diet:</strong> moderate salt restriction (≤ 0.22-0.25% Na DM); avoid high-salt treats</p>
      `,
      complications: `
        <p><strong>From hypertension:</strong></p>
        <ul>
          <li><strong>Permanent blindness</strong> — even after retinal reattachment, vision may not return</li>
          <li>CKD progression</li>
          <li>Stroke, hypertensive encephalopathy</li>
          <li>Aortic dissection (rare)</li>
          <li>Left CHF (rare)</li>
        </ul>
        <p><strong>From treatment:</strong></p>
        <ul>
          <li>Hypotension: lethargy, ataxia, anorexia → ↓ dose</li>
          <li>ACEI: ↑ BUN/Cr (esp. with diuretic), hyperkalemia, GI</li>
          <li>Amlodipine: gingival hyperplasia (rare), peripheral edema</li>
          <li>Rebound hypertension if abruptly stop β-blocker — taper slowly</li>
          <li>Diuretics dangerous in CKD — avoid as monotherapy for HT</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Strongly tied to underlying disease</li>
          <li>Good BP control → ↓ progression of CKD, may preserve vision in early TOD</li>
          <li>Hyperthyroid cats — BP often normalizes with thyroid treatment</li>
          <li>Hypertension persists despite treating underlying dz in 50%+ of cases — lifelong therapy</li>
        </ul>
      `,
    },
  },

  /* ---------- Ch 12 · Feline Arterial Thromboembolism (FATE) ---------- */
  {
    id: 'feline-arterial-thromboembolism',
    titleEn: 'Feline Arterial Thromboembolism (FATE)',
    titleTh: 'ภาวะลิ่มเลือดอุดตันหลอดเลือดแดงในแมว',
    type: 'disease',
    system: 'cardiovascular',
    species: ['cat'],
    tags: ['FATE', 'ATE', 'saddle thrombus', 'thromboembolism', 'clopidogrel', 'enoxaparin', 'hindlimb paralysis', 'HCM'],
    aliases: ['saddle thrombus', 'arterial thromboembolism', 'แมวขาหลังอ่อนแรง', 'thromboembolism'],
    source: 'Ch. 12 · pp. 224–235',
    sections: {
      definition: `
        <p><strong>Feline Arterial Thromboembolism (FATE / ATE)</strong> — formation of intracardiac thrombus (usually in dilated left atrium) that embolizes systemically</p>
        <ul>
          <li>Most common location: distal aortic trifurcation = "<strong>saddle thrombus</strong>"</li>
          <li>One of the most distressing emergencies in feline medicine</li>
          <li>Mortality at presentation 30-50%; survivors ~50% recurrence</li>
        </ul>
      `,
      etiology: `
        <p><strong>Underlying conditions:</strong></p>
        <ul>
          <li><strong>Cardiomyopathy (~80-90%):</strong>
            <ul>
              <li>HCM most common</li>
              <li>RCM, UCM, end-stage HCM</li>
            </ul>
          </li>
          <li>Hyperthyroidism (with or without HCM)</li>
          <li>Neoplasia — pulmonary carcinoma (tumor embolus from LA)</li>
          <li>Atrial septal defect (paradoxical embolus, rare)</li>
          <li>Idiopathic (rare)</li>
        </ul>
        <p>Male cats over-represented (related to higher HCM prevalence)</p>
      `,
      pathophysiology: `
        <p><strong>Virchow's triad:</strong></p>
        <ul>
          <li><strong>Stasis:</strong> dilated left atrium → blood stagnation in auricle</li>
          <li><strong>Endothelial injury:</strong> stretched atrial wall, abnormal flow patterns</li>
          <li><strong>Hypercoagulability:</strong> ↑ platelet expression of P-selectin, ↑ fibrinogen, hyperhomocysteinemia in some cats</li>
        </ul>
        <p><strong>Embolic event:</strong></p>
        <ul>
          <li>Thrombus dislodges → enters arterial circulation</li>
          <li>Lodges at vessel branch points (most often aortic trifurcation = both rear limbs)</li>
          <li>Less commonly: single limb (femoral, brachial), mesenteric, renal, cerebral</li>
        </ul>
        <p><strong>Tissue ischemia + reperfusion injury:</strong></p>
        <ul>
          <li>Distal blood flow ceased + vasoactive substances released → ↓ collateral flow</li>
          <li>Severe pain from ischemia + neuromyopathy</li>
          <li>Reperfusion → release of K, lactate, myoglobin → <strong>hyperkalemia, metabolic acidosis</strong> ✗</li>
          <li>AKI from myoglobinuria</li>
          <li>Cardiac arrhythmia from electrolyte shifts</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Classic "5 Ps" of acute limb ischemia:</strong></p>
        <ul>
          <li><strong>Pain</strong> — extreme; vocalize, agitated</li>
          <li><strong>Pallor</strong> — pale paw pads, nail beds</li>
          <li><strong>Paresis / Plegia</strong> — paralysis of affected limb(s)</li>
          <li><strong>Pulselessness</strong> — absent femoral pulse</li>
          <li><strong>Poikilothermia</strong> — cold limbs (compare to unaffected)</li>
        </ul>
        <p><strong>Other findings:</strong></p>
        <ul>
          <li>Severe pain on palpation</li>
          <li>Stiff, hard limb muscles ("wood-like")</li>
          <li>Tachypnea / dyspnea (concurrent CHF in 50-66%)</li>
          <li>Hyperthermia or hypothermia</li>
          <li>Hyperexcitability or depressed mentation</li>
          <li>Open mouth breathing — severe stress</li>
          <li>Heart murmur (HCM) or gallop sound — but absent in 30-50% cats with HCM</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Mostly clinical diagnosis</strong> based on signalment + 5 Ps</p>
        <p><strong>Confirm + workup (after stabilization):</strong></p>
        <ul>
          <li><strong>Echocardiography:</strong>
            <ul>
              <li>LA enlargement (LA:Ao &gt; 2.0 typical)</li>
              <li>Visible thrombus in LA / auricle (~30%)</li>
              <li>"<strong>Spontaneous echo contrast</strong>" / smoke = imminent thrombus</li>
              <li>Cardiomyopathy phenotype (HCM most common)</li>
            </ul>
          </li>
          <li><strong>Lab:</strong>
            <ul>
              <li>↑ AST, CK markedly (muscle ischemia)</li>
              <li>↑ K+ (reperfusion → hyperkalemia)</li>
              <li>Metabolic acidosis</li>
              <li>Mild ↑ BUN/Cr (prerenal + AKI)</li>
              <li>Glucose may be markedly different in affected vs unaffected limb (&gt;20 mg/dL difference) ✨</li>
            </ul>
          </li>
          <li>Total T4 (rule out hyperthyroid)</li>
          <li>BP — often hypertensive at presentation</li>
          <li>ECG — sinus tachycardia, sometimes VPCs</li>
          <li>Doppler — confirm absent flow distal to obstruction</li>
        </ul>
      `,
      differential: `
        <ul>
          <li>Trauma (fall from height, hit by car) — limb fracture, spinal injury</li>
          <li>Intervertebral disc disease (rare in cats)</li>
          <li>Diabetic neuropathy (plantigrade stance — chronic, bilateral, no pain)</li>
          <li>Spinal trauma / tumor — UMN signs, bladder dysfunction</li>
          <li>Polyradiculoneuritis — symmetric, no pain, lower motor signs</li>
          <li>Hypokalemic polymyopathy — generalized weakness, neck ventroflexion</li>
        </ul>
      `,
      treatment: `
        <p><strong>Approach to ATE — emergency triage decision</strong></p>
        <p><strong>Step 1: Decide if salvageable</strong></p>
        <ul>
          <li><strong>Poor prognostic indicators:</strong>
            <ul>
              <li>Multiple limbs affected</li>
              <li>Hypothermia (rectal &lt; 37.2°C / 99°F) ✗</li>
              <li>Concurrent CHF</li>
              <li>Severe hyperkalemia (&gt; 7 mEq/L)</li>
              <li>Bradycardia</li>
              <li>Severe acidosis (pH &lt; 7.1)</li>
            </ul>
          </li>
          <li>If multiple poor indicators present → discuss euthanasia honestly with client</li>
          <li>Survival to discharge if surviving first 24-72h: ~30-45%</li>
        </ul>

        <p><strong>Step 2: Pain control (immediate priority) ✨</strong></p>
        <ul>
          <li><strong>Methadone 0.2-0.4 mg/kg IV/IM q4-6h</strong> ← preferred, full mu agonist</li>
          <li>Buprenorphine 0.02-0.03 mg/kg IV/IM/OTM q6-8h — less potent</li>
          <li>Fentanyl CRI 2-5 µg/kg/h after loading</li>
          <li><strong>Avoid NSAIDs</strong> — renal compromise + GI ✗</li>
          <li>Reassess pain q2-4h; pain often severe for 24-72h</li>
        </ul>

        <p><strong>Step 3: Antithrombotic therapy</strong></p>
        <ul>
          <li><strong>Clopidogrel 75 mg PO loading dose × 1, then 18.75 mg/cat PO q24h</strong> ✨ — first-line; FATCAT trial: ↓ recurrence vs aspirin</li>
          <li><strong>Enoxaparin (LMWH) 1-1.5 mg/kg SC q12h</strong> — adjunct, especially if visible thrombus</li>
          <li>Aspirin 5 mg/cat PO q72h — older alternative, less effective than clopidogrel; consider only if clopidogrel unavailable</li>
          <li><strong>Avoid thrombolytics (tPA, streptokinase)</strong> ✗ — high mortality from reperfusion injury, hyperkalemia, hemorrhage; not recommended</li>
        </ul>

        <p><strong>Step 4: Concurrent CHF management</strong></p>
        <ul>
          <li>Furosemide 1-2 mg/kg IV q1-4h until RR drops</li>
          <li>O2, thoracocentesis if pleural effusion</li>
          <li>Avoid β-blockers acutely (can worsen output)</li>
        </ul>

        <p><strong>Step 5: Supportive care</strong></p>
        <ul>
          <li>IV crystalloid: cautious (CHF risk) — usually 0.5x maintenance unless dehydrated</li>
          <li>Monitor K+: high → recheck q4-12h; treat if &gt; 7 (calcium gluconate, dextrose-insulin, fluids)</li>
          <li>Warm patient gently (not hot pack on cold limb — burn risk)</li>
          <li>Bladder management — many cats lose bladder function temporarily</li>
          <li>Nutrition — assisted feeding if anorexic</li>
          <li>Physical therapy after pain controlled — passive range of motion</li>
        </ul>

        <p><strong>Step 6: Long-term management for survivors</strong></p>
        <ul>
          <li>Lifelong <strong>clopidogrel</strong> 18.75 mg/cat PO q24h</li>
          <li>± Enoxaparin 1 mg/kg SC q12h (compliance issue with daily injections)</li>
          <li>Aggressive cardiomyopathy management</li>
          <li>Recheck echo q3-6 months</li>
          <li>Client education — sudden recurrence possible at any time</li>
        </ul>

        <p><strong>Prevention in HCM cats with LA enlargement:</strong></p>
        <ul>
          <li><strong>Clopidogrel 18.75 mg/cat PO q24h</strong> in cats with LA:Ao &gt; 2.0 or visible spontaneous echo contrast (FATCAT 2018)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hyperkalemia</strong> from reperfusion → arrhythmia, arrest</li>
          <li><strong>AKI</strong> from myoglobinuria + hypotension</li>
          <li><strong>Compartment syndrome</strong> — limb necrosis, autoamputation rarely</li>
          <li><strong>Limb ischemic neuromyopathy</strong> — most cats have permanent deficits</li>
          <li><strong>Recurrence</strong> — 25-50% within 6-12 months despite antithrombotics</li>
          <li>CHF decompensation</li>
          <li>Sudden death from arrhythmia or PE (rare)</li>
        </ul>
        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Survival to discharge: <strong>30-50%</strong> overall</li>
          <li>Single limb: better (~60-70%)</li>
          <li>Bilateral: worse (~30-40%)</li>
          <li>With concurrent CHF: ~25%</li>
          <li>Median survival of survivors: <strong>6-12 months</strong> (often shorter than HCM alone)</li>
          <li>Long-term recovery of motor function: ~60-70%, often partial</li>
        </ul>
        <div class="callout">⚠️ <strong>Difficult conversation with owners:</strong> ATE is sudden, painful, and prognosis often guarded. Honest discussion about quality of life, financial burden of care, and possibility of recurrence is essential. Euthanasia is a humane option in many cases — not a failure.</div>
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
