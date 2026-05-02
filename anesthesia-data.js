/* ===========================================================================
   pk · Anesthesia Handbook — anesthesia-data.js
   ----------------------------------------------------------------------------
   เนื้อหาเชิงโครงสร้างอิง:
   "Small Animal Anesthesia and Pain Management: A Color Handbook"
   Edited by Jeff C. Ko, 3rd Edition (2025)
   เนื้อหาเรียบเรียงใหม่โดย Alex สำหรับ pk
   =========================================================================== */

window.ANESTHESIA_DATA = [

  /* ============================================================
     PRE-ANESTHETIC · การประเมินก่อน anesthesia (2)
     ============================================================ */

  {
    id: 'anes-asa-classification',
    titleEn: 'ASA Physical Status Classification',
    titleTh: 'การจัดระดับ ASA',
    type: 'procedure',
    system: 'preanes',
    species: ['dog', 'cat'],
    tags: ['ASA', 'pre-anesthetic', 'risk', 'assessment'],
    aliases: ['ASA', 'pre-anes assessment', 'ประเมิน risk'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>เคสทุกตัวที่จะให้ anesthesia (ทั่วไป + sedation)</li>
          <li>วางแผน anesthetic plan ตาม risk</li>
          <li>สื่อสารกับ owner เรื่องความเสี่ยง</li>
          <li>Pre-medication selection</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — เป็นการประเมิน ไม่ได้ทำหัตถการ</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Full PE (signalment, body weight, BCS, vital signs)</li>
          <li>History (chronic dz, medications, prior anesthesia)</li>
          <li>Pre-op blood work (PCV/TS minimum · CBC + chem ที่เหมาะ)</li>
          <li>+/- ECG, echo, radiographs ใน high-risk</li>
        </ul>
      `,
      steps: `
        <div class="mnemonic">
          <span class="mnem-title">ASA Quick Memory — "1 healthy → 5 dying"</span>
          <ul>
            <li><strong>1</strong>Healthy — routine spay (mortality 0.05%)</li>
            <li><strong>2</strong>Mild dz — controlled (obesity, mild dental, geriatric stable)</li>
            <li><strong>3</strong>Severe dz, NOT life-threatening (compensated CHF, CKD 2-3)</li>
            <li><strong>4</strong>Severe dz, LIFE-threatening (decompensated, GDV, sepsis)</li>
            <li><strong>5</strong>Moribund — won't survive without surgery</li>
          </ul>
          <p class="mnem-tip">เพิ่ม "E" = Emergency (mortality เพิ่ม 2-3 เท่า)</p>
        </div>

        <p><strong>ASA 1 — Normal healthy patient</strong></p>
        <ul>
          <li>Routine spay/neuter young, healthy</li>
          <li>Mortality risk ~0.05%</li>
        </ul>

        <p><strong>ASA 2 — Mild systemic disease</strong></p>
        <ul>
          <li>เช่น obesity, mild dental disease, controlled diabetes, geriatric แต่ stable</li>
          <li>Mortality ~0.08%</li>
        </ul>

        <p><strong>ASA 3 — Severe systemic disease (not life-threatening)</strong></p>
        <ul>
          <li>เช่น CHF compensated, CKD stage 2-3, anemia moderate, controlled hyperthyroidism</li>
          <li>Mortality ~1.3%</li>
        </ul>

        <p><strong>ASA 4 — Severe systemic disease (life-threatening)</strong></p>
        <ul>
          <li>เช่น CHF decompensated, severe anemia, sepsis, GDV, hyperK + obstruction</li>
          <li>Mortality ~3-4%</li>
        </ul>

        <p><strong>ASA 5 — Moribund (not expected to survive without surgery)</strong></p>
        <ul>
          <li>เช่น severe trauma, ruptured spleen with shock, septic peritonitis</li>
          <li>Mortality ~10%</li>
        </ul>

        <p><strong>E suffix</strong> = Emergency (เพิ่ม mortality 2-3 เท่า)</p>
      `,
      complications: `
        <ul>
          <li>Underestimate risk → unprepared crash cart</li>
          <li>Over-estimate → defer needed surgery</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document ASA + reasoning ใน chart</li>
          <li>Communicate to owner — "ASA 3 มี mortality ~1% เทียบกับ healthy 0.05%"</li>
          <li>Adjust anesthetic plan:
            <ul>
              <li>ASA 1-2 → standard protocol</li>
              <li>ASA 3-4 → balanced protocol, low-dose induction, careful monitoring</li>
              <li>ASA 5 → stabilize first if possible, IV access pre-op, full team standby</li>
            </ul>
          </li>
          <li>Tip: cat survival ต่างจากหมา — แมวมี mortality สูงกว่าทุก ASA grade</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-preop-bloodwork',
    titleEn: 'Pre-anesthetic Blood Work Interpretation',
    titleTh: 'การแปลผลเลือดก่อน anesthesia',
    type: 'procedure',
    system: 'preanes',
    species: ['dog', 'cat'],
    tags: ['pre-op', 'blood work', 'CBC', 'chem', 'PCV'],
    aliases: ['pre-op labs', 'pre-anesthetic'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Minimum DB: PCV/TS + glucose + BUN — ทุกเคส</li>
          <li>Full CBC + Chem: เคสอายุ &gt; 5-7 ปี · ASA ≥ 3 · long anesthesia · sick patient</li>
          <li>+/- coag panel, ECG, T4, urine, imaging based on signalment</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — แต่ระวังเสีย sample ในเคส small/dehydrated → use 21-23G needle minimum</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>EDTA tube (CBC) + plain/serum (chem)</li>
          <li>Heparin tube ถ้าใช้ in-house point-of-care</li>
          <li>เจาะเลือดก่อน anesthesia 12-24 ชม. ใน outpatient · same day OK ใน emergency</li>
        </ul>
      `,
      steps: `
        <p><strong>Red flags ที่ต้อง postpone หรือ adjust:</strong></p>
        <ul>
          <li><strong>PCV &lt; 25%</strong> — anemia → consider transfusion + monitor closely
            <ul><li>PCV &lt; 20% = ห้าม anesthetize unless emergency</li></ul>
          </li>
          <li><strong>TS &lt; 4.0 g/dL</strong> — hypoproteinemia → drug binding ↓ → effect ↑</li>
          <li><strong>Glucose &lt; 60 mg/dL</strong> → supplement dextrose · check insulinoma</li>
          <li><strong>BUN/Cr ↑↑</strong> — adjust drug doses (avoid NSAIDs · careful α2)</li>
          <li><strong>ALT/ALP ↑↑↑</strong> — hepatopathy → avoid alfaxalone in severe</li>
          <li><strong>K &gt; 6.5 mEq/L</strong> — DELAY anesthesia, treat first
            <ul><li>K &gt; 7.5 → arrhythmia risk · stabilize myocardium ก่อน (Ca gluconate)</li></ul>
          </li>
          <li><strong>WBC ↑↑ + bands</strong> → infection · postpone elective</li>
          <li><strong>Platelet &lt; 50,000</strong> → bleeding risk · postpone elective</li>
        </ul>

        <p><strong>Adjust drug selection:</strong></p>
        <ul>
          <li>Renal disease → avoid α2-agonists (dexmed) initially · half-dose</li>
          <li>Hepatic disease → avoid α2 + reduce drug elimination dependent</li>
          <li>Cardiac → avoid ACP (vasodilation) + dexmed (high dose)</li>
          <li>Hypovolemia → fix BEFORE anesthesia, never give ACP</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Missing critical abnormality → intraop crisis</li>
          <li>Lab error / hemolysis affecting K, etc.</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>ระบุชัดเจน — anesthesia OK · postpone · proceed with caution</li>
          <li>บันทึก plan changes ใน chart</li>
          <li>Tip: ใน geriatric — ตรวจ T4 (cat), urine + culture (dog) เป็น routine ดี</li>
          <li>Tip: PCV/TS ตอน intubated เปลี่ยนเร็ว — recheck post-induction ใน critical case</li>
        </ul>
      `
    }
  },


  /* ============================================================
     PREMEDICATION · ยาก่อน anesthesia (3)
     ============================================================ */

  {
    id: 'anes-acepromazine',
    titleEn: 'Acepromazine (ACP)',
    titleTh: 'Acepromazine',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['ACP', 'phenothiazine', 'sedation', 'tranquilizer'],
    aliases: ['ACP', 'PromAce', 'tranquilizer'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Mild-moderate sedation</li>
          <li>Anxiolysis (calm, but not sleeping)</li>
          <li>Antiemetic (D2 antagonist)</li>
          <li>Adjunct in MAC reduction (anesthetic-sparing)</li>
          <li>Premed in healthy animals</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Hypovolemia / shock / hypotension</strong> — vasodilation → BP drop</li>
          <li>Severe hepatic disease (metabolized in liver)</li>
          <li>Seizure history (lowers seizure threshold) — controversial, debate มี</li>
          <li>Boxer breed — vagal-mediated bradycardia/syncope risk (use low dose if needed)</li>
          <li>Coagulopathy / von Willebrand (mild platelet effect)</li>
          <li>Stallion / breeding male — penile prolapse risk (irrelevant ในสุนัขทั่วไป)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Dose:</strong>
            <ul>
              <li>Dog: 0.01-0.05 mg/kg IV/IM (max ~3 mg/dog total)</li>
              <li>Cat: 0.05-0.1 mg/kg IM (mild sedation)</li>
              <li>Often combined with opioid for synergy</li>
            </ul>
          </li>
          <li>Onset: 15-30 min IM · 5-10 min IV</li>
          <li>Duration: 4-6 ชม. (long duration!)</li>
        </ul>
      `,
      steps: `
        <p><strong>Common combinations:</strong></p>
        <ul>
          <li><strong>ACP + butorphanol</strong> (most common premed): mild sedation, ASA 1-2</li>
          <li><strong>ACP + morphine/methadone</strong>: deeper sedation, surgical premed</li>
          <li><strong>ACP + hydromorphone</strong>: similar to above</li>
        </ul>

        <p><strong>Administration:</strong></p>
        <ol>
          <li>Calculate dose based on lean body weight (not actual BW in obese)</li>
          <li>IM injection — shoulder, lumbar muscle</li>
          <li>Wait 15-20 min ก่อน induction</li>
          <li>Monitor BP — ACP causes vasodilation</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Hypotension</strong> — main concern · vasodilation</li>
          <li>Prolonged sedation (long duration)</li>
          <li>Hypothermia (vasodilation + impaired thermoregulation)</li>
          <li>Bradycardia (mild)</li>
          <li>Splenic engorgement → ↓ PCV transiently</li>
          <li><strong>NO RECONVERSION</strong> — ไม่มี reversal · ต้องรอ metabolism</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor BP, HR, temp during recovery</li>
          <li>Warmth — prevent hypothermia</li>
          <li>IV fluid support if hypotensive</li>
          <li>Tip: <strong>"Less is more"</strong> — start low, can repeat · effect dose-dependent has ceiling</li>
          <li>Tip: <strong>Cats need higher mg/kg</strong> than dogs but absolute dose still small</li>
          <li>Tip: ในเคสที่กังวลเรื่อง BP — ใช้ dexmedetomidine แทน (ปรับ HR + BP ได้)</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-opioids',
    titleEn: 'Opioids in Anesthesia (Overview)',
    titleTh: 'ยา opioid ใน anesthesia',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['opioid', 'morphine', 'methadone', 'fentanyl', 'butorphanol', 'buprenorphine', 'hydromorphone'],
    aliases: ['opioid', 'narcotic'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Premedication (sedation + analgesia)</li>
          <li>Intraop analgesia</li>
          <li>Post-op analgesia</li>
          <li>CRI for prolonged surgery</li>
          <li>Anesthetic-sparing (reduce inhalant MAC up to 40%)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe respiratory depression unable to support</li>
          <li>Head trauma / ↑ ICP (relative — careful)</li>
          <li>Severe biliary disease (pure mu-agonist → sphincter spasm)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Pure µ-agonists (full agonist — strongest analgesia):</strong></p>
        <ul>
          <li><strong>Morphine</strong> — gold standard
            <ul>
              <li>Dog: 0.3-1.0 mg/kg IM/SC (NOT IV — histamine release)</li>
              <li>Cat: 0.1-0.3 mg/kg IM</li>
              <li>Duration: 3-4 ชม.</li>
            </ul>
          </li>
          <li><strong>Methadone</strong> — same potency as morphine, less vomiting
            <ul>
              <li>Dog/Cat: 0.2-0.5 mg/kg IV/IM</li>
              <li>Duration: 4 ชม.</li>
              <li>Bonus: NMDA antagonist (anti-windup)</li>
            </ul>
          </li>
          <li><strong>Hydromorphone</strong> — 5× more potent than morphine
            <ul>
              <li>Dog: 0.05-0.1 mg/kg IV/IM</li>
              <li>Cat: 0.05-0.1 mg/kg IM</li>
              <li>Duration: 3-4 ชม.</li>
            </ul>
          </li>
          <li><strong>Fentanyl</strong> — 100× morphine, very short
            <ul>
              <li>IV bolus: 2-5 µg/kg</li>
              <li>CRI: 5-10 µg/kg/h</li>
              <li>Duration single bolus: 15-30 min</li>
            </ul>
          </li>
        </ul>

        <p><strong>Partial agonist:</strong></p>
        <ul>
          <li><strong>Buprenorphine</strong> — slow onset, long duration
            <ul>
              <li>Dog: 0.01-0.02 mg/kg IM/IV</li>
              <li>Cat: 0.02-0.04 mg/kg IM/IV/buccal</li>
              <li>Duration: 6-8 ชม.</li>
              <li>Best for mild-moderate pain</li>
            </ul>
          </li>
        </ul>

        <p><strong>µ-antagonist + κ-agonist:</strong></p>
        <ul>
          <li><strong>Butorphanol</strong> — sedation > analgesia, short-acting
            <ul>
              <li>Dog/Cat: 0.2-0.4 mg/kg IM/IV</li>
              <li>Duration: 1-2 ชม.</li>
              <li>Good for sedation premed · weak analgesia</li>
              <li>"Ceiling effect" — high dose ไม่เพิ่ม pain control</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>Selection guide:</strong></p>
        <ul>
          <li><strong>Mild pain + sedation</strong> → butorphanol</li>
          <li><strong>Moderate pain</strong> → buprenorphine (long duration good)</li>
          <li><strong>Severe pain (surgical)</strong> → methadone, morphine, hydromorphone</li>
          <li><strong>Intraop CRI</strong> → fentanyl (titrate easily)</li>
          <li><strong>Cat oral pain</strong> → buprenorphine buccal (unique to cats)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Respiratory depression</strong> — most concerning · monitor RR/ETCO2</li>
          <li>Bradycardia (vagal)</li>
          <li>Vomiting (morphine, hydromorphone &gt; methadone)</li>
          <li>Hyperthermia in cat (morphine, hydromorphone) — temp ↑ unique to cat</li>
          <li>Constipation (chronic use)</li>
          <li>Dysphoria — mainly cat with full µ at high dose</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor RR, SpO2, HR · pain score regularly</li>
          <li><strong>Reversal: Naloxone</strong>
            <ul>
              <li>0.04 mg/kg IV/IM/IO · titrate to effect</li>
              <li>Reverses analgesia too — only use for emergency</li>
            </ul>
          </li>
          <li><strong>Partial reversal: Butorphanol or buprenorphine</strong> (after pure µ) — reverses sedation, keeps analgesia</li>
          <li>Tip: <strong>"Low and slow"</strong> in cat — start with low end of range</li>
          <li>Tip: opioid + dexmed = synergy (use less of each)</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-dexmedetomidine',
    titleEn: 'Dexmedetomidine + Zenalpha',
    titleTh: 'Dexmedetomidine และ Zenalpha',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['dexmed', 'alpha2', 'sedation', 'Zenalpha', 'medetomidine', 'NEW3RD'],
    aliases: ['dexmed', 'Dexdomitor', 'Zenalpha', 'medetomidine'],
    source: 'Ko Anesthesia Handbook, 3rd ed. (Zenalpha NEW)',
    sections: {
      indications: `
        <ul>
          <li>Profound sedation for non-painful procedures (radiography, grooming)</li>
          <li>Premedication (combine with opioid)</li>
          <li>Intraop CRI for analgesia + MAC reduction</li>
          <li>Recovery sedation (low-dose CRI)</li>
          <li>Anxiolysis (oromucosal gel — Sileo)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Cardiac disease</strong> — bradycardia + ↑ afterload (not absolute, but careful)</li>
          <li>Hypovolemia / shock</li>
          <li>Severe hepatic / renal disease (dose reduction)</li>
          <li>Geriatric / debilitated — use low dose</li>
          <li>Diabetes (transient hyperglycemia)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Dexmedetomidine (Dexdomitor):</strong></p>
        <ul>
          <li>Concentration: 0.5 mg/mL standard</li>
          <li><strong>Premed dose:</strong>
            <ul>
              <li>Dog: 5-10 µg/kg IM (or 1-3 µg/kg IV)</li>
              <li>Cat: 5-15 µg/kg IM</li>
            </ul>
          </li>
          <li><strong>CRI:</strong> 1-3 µg/kg/h</li>
          <li><strong>Duration:</strong> 30-60 min sedation · longer at higher dose</li>
        </ul>

        <p><strong>Zenalpha (medetomidine + vatinoxan) — NEW in 3rd ed:</strong></p>
        <ul>
          <li>Vatinoxan = peripheral α2 antagonist → blocks vasoconstriction</li>
          <li>Result: <strong>same sedation/analgesia, less CV side effects</strong></li>
          <li>Approved for IM use in dogs (US 2024+)</li>
          <li>Dose: as labeled on product</li>
          <li>Significant reduction in bradycardia + hypertension</li>
        </ul>
      `,
      steps: `
        <p><strong>Common combinations:</strong></p>
        <ul>
          <li><strong>Dexmed + butorphanol</strong>: sedation for radiography, grooming, simple procedures</li>
          <li><strong>Dexmed + opioid (methadone/hydromorphone)</strong>: surgical premed</li>
          <li><strong>Dexmed + ketamine</strong>: profound sedation/anesthesia for short procedures (laceration repair, etc.)</li>
          <li><strong>"Kitty Magic"</strong>: dexmed + ketamine + opioid + ACP — aggressive cats</li>
        </ul>

        <p><strong>Hemodynamic course:</strong></p>
        <ol>
          <li><strong>Phase 1 (0-15 min)</strong>: vasoconstriction → BP up · reflex bradycardia · HR drops</li>
          <li><strong>Phase 2 (15+ min)</strong>: central sympatholysis → BP normal/low · HR low</li>
          <li>HR stays low whole duration — <strong>don't treat with atropine</strong> (worsens BP)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Bradycardia</strong> — expected, normal · DO NOT routinely treat</li>
          <li>Bi-phasic BP (high → low)</li>
          <li>Hyperglycemia (transient — α2 inhibits insulin)</li>
          <li>Vomiting (cats &gt; dogs)</li>
          <li>Polyuria (suppresses ADH)</li>
          <li>Hypothermia (long sedation)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor HR, BP, temp · IV access ready</li>
          <li><strong>Reversal: Atipamezole (Antisedan)</strong>
            <ul>
              <li>Same volume IM as dexmed (1:1)</li>
              <li>Or 5× the dexmed mcg dose IM</li>
              <li>Onset: 5-15 min</li>
              <li>Reverses sedation + analgesia</li>
            </ul>
          </li>
          <li>Reverse only when needed — let drug wear off naturally if possible</li>
          <li>Tip: <strong>"Bradycardia + good BP" = leave alone</strong> · "Bradycardia + low BP" = atipamezole partial dose</li>
          <li>Tip: <strong>cat sedation excellent</strong> with dexmed combos — game changer for fractious cats</li>
        </ul>
      `
    }
  },


  /* ============================================================
     IV INDUCTION · ยานำสลบ (3)
     ============================================================ */

  {
    id: 'anes-propofol',
    titleEn: 'Propofol Induction',
    titleTh: 'Propofol',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['propofol', 'induction', 'IV', 'anesthesia'],
    aliases: ['propofol', 'PropoFlo'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>IV anesthetic induction (most common in clinic)</li>
          <li>Short procedures (TIVA — total IV anesthesia, sub-min CRI)</li>
          <li>C-section (rapid clearance, minimal fetal effect)</li>
          <li>Seizure control (status epilepticus refractory)</li>
          <li>Brachycephalic — rapid intubation</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe cardiovascular disease (hypotension, vasodilation)</li>
          <li>Hypovolemia uncorrected (will drop BP profoundly)</li>
          <li>Sulfa allergy (propofol has soybean oil emulsion — rare reaction)</li>
          <li>Cat — repeated dosing (Heinz body anemia · use sparingly)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Concentration: 10 mg/mL</li>
          <li><strong>Dose (induction after premed):</strong>
            <ul>
              <li>Dog: 2-4 mg/kg IV (lower with good premed)</li>
              <li>Cat: 4-6 mg/kg IV</li>
            </ul>
          </li>
          <li><strong>Without premed (rare):</strong> 4-6 mg/kg dog · 6-8 mg/kg cat</li>
          <li><strong>CRI:</strong> 0.1-0.4 mg/kg/min (after bolus)</li>
          <li>IV catheter required — IV ONLY (no IM/SC)</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Pre-oxygenate 3-5 min</li>
          <li>Premed administered + onset reached</li>
          <li>IV catheter patent</li>
          <li><strong>Slowly inject 1/4 of calculated dose</strong></li>
          <li>Wait 30 sec · assess depth (jaw tone, palpebral)</li>
          <li>Inject more incrementally (1/4 dose) until intubation possible</li>
          <li><strong>Total dose given = effective dose</strong> (often less than calculated)</li>
          <li>Intubate immediately when ready</li>
          <li>Connect to inhalant or maintain CRI</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Apnea</strong> — common after rapid bolus · ventilate manually</li>
          <li>Hypotension (vasodilation) — give IV fluid bolus 5-10 mL/kg</li>
          <li>Bradycardia transient</li>
          <li>Excitement / paddling on induction (rare with proper premed)</li>
          <li>Pain on injection (rare in vet patients)</li>
          <li><strong>Cat repeated use</strong>: Heinz body anemia, recovery delays</li>
          <li>Lipid emulsion — bacterial growth if not used within 6 hr (single-use vials)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Maintain ventilation if apneic — IPPV until spontaneous resumes</li>
          <li>Monitor BP — preemptive fluid bolus often helpful</li>
          <li>Smooth recovery typical — fast (5-15 min from last dose)</li>
          <li>Tip: <strong>"Titrate to effect"</strong> — never give full calc dose all at once</li>
          <li>Tip: <strong>Discard unused after 6 hr</strong> — lipid supports bacterial growth</li>
          <li>Tip: ในเคส C-section — propofol clears fetal circulation rapidly · puppy recovery good</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-alfaxalone',
    titleEn: 'Alfaxalone Induction',
    titleTh: 'Alfaxalone',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['alfaxalone', 'Alfaxan', 'induction', 'IV', 'IM'],
    aliases: ['alfaxalone', 'Alfaxan'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>IV induction (alternative to propofol)</li>
          <li><strong>IM sedation (cat especially)</strong> — unique advantage over propofol</li>
          <li>Brachycephalic, geriatric, cardiac — better CV stability than propofol</li>
          <li>C-section (similar profile to propofol)</li>
          <li>Repeated cat dosing — does not cause Heinz body</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe hepatic insufficiency (liver-cleared)</li>
          <li>Hypersensitivity (rare)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Concentration: 10 mg/mL (Alfaxan)</li>
          <li><strong>IV induction (after premed):</strong>
            <ul>
              <li>Dog: 1-2 mg/kg IV</li>
              <li>Cat: 2-3 mg/kg IV</li>
            </ul>
          </li>
          <li><strong>Without premed:</strong> 2-3 mg/kg dog · 4-6 mg/kg cat</li>
          <li><strong>CRI:</strong> 6-9 mg/kg/h dog · 8-11 mg/kg/h cat</li>
          <li><strong>IM (cat sedation):</strong> 2-5 mg/kg IM combined with opioid + dexmed</li>
        </ul>
      `,
      steps: `
        <p><strong>IV induction:</strong></p>
        <ol>
          <li>Pre-oxygenate</li>
          <li>Inject slowly over 60 sec — titrate to effect</li>
          <li>1/4 of dose, wait 30 sec, repeat</li>
          <li>Intubate</li>
        </ol>

        <p><strong>IM sedation (cat protocol):</strong></p>
        <ol>
          <li>Combine: alfaxalone 2-3 mg/kg + butorphanol 0.2 mg/kg + dexmed 5 µg/kg</li>
          <li>Single IM injection — quadriceps</li>
          <li>Onset: 5-10 min</li>
          <li>Sufficient for: blood draw, radiograph, simple lac repair, dental scaling extraction</li>
          <li>Add isoflurane mask if longer procedure</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Apnea</strong> — less than propofol but possible with rapid push</li>
          <li>Hypotension — milder than propofol</li>
          <li>Excitement on recovery (myoclonus, paddling) — esp without premed</li>
          <li>Pain on injection (rare)</li>
          <li>Fast recovery (similar to propofol)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor recovery quietly — minimize stimulation (excitement risk)</li>
          <li>Provide warm, dim, quiet recovery area</li>
          <li>Discard opened vial within 24 hr (preservative-containing)</li>
          <li>Tip: <strong>Alfaxalone CRI</strong> = TIVA option for cats with airway disease (avoid intubation if possible)</li>
          <li>Tip: <strong>Gold standard for fractious cat</strong> IM combo — works fast, smooth</li>
          <li>Tip: more expensive than propofol — reserve for indication</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-ketamine',
    titleEn: 'Ketamine and Combinations',
    titleTh: 'Ketamine และส่วนผสม',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['ketamine', 'NMDA', 'dissociative', 'CRI'],
    aliases: ['ketamine', 'Ketaset'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Induction in shocky/hypovolemic patient (CV-sparing, sympathomimetic)</li>
          <li>Field anesthesia (combined with valium/midazolam IM/IV)</li>
          <li><strong>Anti-windup analgesia</strong> CRI — multimodal pain</li>
          <li>Status epilepticus refractory (NMDA blockade)</li>
          <li>"Kitty Magic" mix for fractious cat</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>HCM in cat (↑ HR + ↑ contractility worsens diastolic dysfunction)</li>
          <li>Severe hypertension</li>
          <li>↑ ICP (controversial — some new data say safe)</li>
          <li>Glaucoma (↑ IOP)</li>
          <li><strong>Renal failure cat</strong> — accumulates (cat excretes unchanged in urine)</li>
          <li>Hyperthyroidism uncontrolled</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Concentration: 100 mg/mL</li>
          <li><strong>Always combine with benzodiazepine</strong> (avoid muscle rigidity, seizures)
            <ul>
              <li>Diazepam 0.25-0.5 mg/kg IV (1:1 with ket)</li>
              <li>Midazolam 0.2-0.3 mg/kg IV/IM</li>
            </ul>
          </li>
          <li><strong>"Ket-val" induction:</strong> 5 mg/kg ketamine + 0.25 mg/kg diazepam IV (mix in same syringe — diazepam dissolved by ketamine carrier)</li>
          <li><strong>CRI analgesia:</strong> 0.1-0.6 mg/kg/h (sub-anesthetic)</li>
          <li><strong>Cat IM (Kitty Magic):</strong> ket 5-7 mg/kg + dexmed 5 µg/kg + buprenorphine 20 µg/kg IM single shot</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Pre-oxygenate</li>
          <li>Premed → onset reached</li>
          <li>IV access patent</li>
          <li>Inject "ket-val" mix slowly IV (1 mL/15 kg over 30 sec)</li>
          <li>Wait 30 sec — assess depth · paddling/jerking common briefly</li>
          <li>Eyes remain OPEN, central — normal for ketamine
            <ul><li>Use lubricant + close eyes manually</li></ul>
          </li>
          <li>Intubate when jaw relaxed</li>
          <li>Maintain with inhalant or CRI</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Cataleptic state</strong> — open eyes, increased muscle tone (normal for ketamine)</li>
          <li>Hypersalivation (use atropine ถ้าจำเป็น)</li>
          <li>Bad recovery: hallucinations, vocalization, delirium · prevent with proper premed</li>
          <li>Tachycardia (sympathomimetic)</li>
          <li>↑ BP transiently</li>
          <li>↑ ICP potentially</li>
          <li>Apneustic breathing pattern</li>
          <li>↑ IOP — avoid in glaucoma</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Quiet, dim recovery area essential</li>
          <li>Lubricate eyes</li>
          <li>Monitor for myoclonus, paddling — supplement with diazepam IV if severe</li>
          <li>Recovery: 30-60 min IV, 1-2 hr IM</li>
          <li>Tip: <strong>"Cat IM combo without inhalant"</strong> — many short procedures done with single shot</li>
          <li>Tip: <strong>ketamine CRI for chronic neuropathic pain</strong> — multi-modal therapy excellent</li>
          <li>Tip: <strong>NEVER ketamine alone</strong> — always with benzo or dexmed (rigidity risk)</li>
        </ul>
      `
    }
  },


  /* ============================================================
     INHALANT · ยา inhalant (1)
     ============================================================ */

  {
    id: 'anes-inhalants',
    titleEn: 'Isoflurane vs Sevoflurane',
    titleTh: 'Isoflurane vs Sevoflurane',
    type: 'procedure',
    system: 'inhalant',
    species: ['dog', 'cat'],
    tags: ['isoflurane', 'sevoflurane', 'inhalant', 'MAC'],
    aliases: ['iso', 'sevo', 'inhalant'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Maintenance anesthesia ส่วนใหญ่</li>
          <li>Mask induction (sevoflurane preferred — less pungent)</li>
          <li>Long procedures</li>
          <li>Critical patient — easy depth adjustment</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Malignant hyperthermia susceptibility (rare)</li>
          <li>Severe respiratory disease that prevents adequate ventilation</li>
        </ul>
      `,
      preparation: `
        <p><strong>Isoflurane:</strong></p>
        <ul>
          <li><strong>MAC (dog):</strong> 1.3% · <strong>MAC (cat):</strong> 1.6%</li>
          <li>Maintenance: 1.5-2.5% (1.0-1.5× MAC)</li>
          <li>Blood:gas solubility: 1.4 (slow uptake/elimination)</li>
          <li>Pungent — bad for mask induction</li>
          <li>Cheap, widely available · most common in vet</li>
        </ul>

        <p><strong>Sevoflurane:</strong></p>
        <ul>
          <li><strong>MAC (dog):</strong> 2.4% · <strong>MAC (cat):</strong> 2.6%</li>
          <li>Maintenance: 2.5-4% (1.0-1.5× MAC)</li>
          <li>Blood:gas solubility: 0.69 (rapid uptake/elimination)</li>
          <li>Less pungent — good for mask induction</li>
          <li>More expensive · degraded by absorbent (CO2 absorber + sevo + heat = compound A — concern in low-flow)</li>
        </ul>
      `,
      steps: `
        <p><strong>Selection guide:</strong></p>
        <ul>
          <li><strong>Routine adult dog/cat:</strong> isoflurane (cost-effective)</li>
          <li><strong>Mask induction (avoid IV in pediatric, tiny exotic):</strong> sevoflurane</li>
          <li><strong>Critical/sick patient (need quick depth changes):</strong> sevoflurane (faster response)</li>
          <li><strong>Long procedure low-flow:</strong> isoflurane (compound A concern with sevo)</li>
        </ul>

        <p><strong>Maintenance:</strong></p>
        <ol>
          <li>Start at MAC × 1.0-1.5</li>
          <li>Titrate based on:
            <ul>
              <li>Eye position (medial = light · central = deep)</li>
              <li>Jaw tone (slight tone OK · flaccid = too deep)</li>
              <li>Palpebral reflex (sluggish OK · absent = deep)</li>
              <li>Vital signs (BP drop = too deep)</li>
            </ul>
          </li>
          <li>O2 flow:
            <ul>
              <li>Mask induction: 4-6 L/min initially</li>
              <li>Maintenance circle: 0.5-1 L/min (low-flow) or 30 mL/kg/min</li>
              <li>Non-rebreathing: 200-300 mL/kg/min</li>
            </ul>
          </li>
        </ol>

        <p><strong>MAC modifiers (reduce inhalant requirement):</strong></p>
        <ul>
          <li>Opioid — reduce 30-40%</li>
          <li>Dexmed CRI — reduce 30-50%</li>
          <li>Ketamine CRI — reduce 25%</li>
          <li>Lidocaine CRI (dog) — reduce 15-30%</li>
          <li><strong>"Balanced anesthesia"</strong> = inhalant + multimodal IV → better CV stability</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Dose-dependent <strong>vasodilation + ↓ BP</strong></li>
          <li>Respiratory depression (dose-dependent)</li>
          <li>Hypothermia (long procedure)</li>
          <li>Malignant hyperthermia (rare)</li>
          <li>Compound A concern with sevo + CO2 absorber + low flow (clinical relevance unclear)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>O2 supplement during recovery 5-10 min minimum</li>
          <li>Extubate when swallowing reflex returns (cat extubate earlier)</li>
          <li>Monitor temperature — rewarm with Bair Hugger or fluid warmer</li>
          <li>Tip: <strong>"MAC × 1.2 + multimodal"</strong> — sweet spot for stable anesthesia</li>
          <li>Tip: <strong>"Iso คุ้ม sevo เร็ว"</strong> — choose based on patient and procedure</li>
        </ul>
      `
    }
  },


  /* ============================================================
     MONITORING · การติดตามระหว่าง anesthesia (2)
     ============================================================ */

  {
    id: 'anes-monitoring',
    titleEn: 'Anesthesia Monitoring (Multiparameter)',
    titleTh: 'การ monitor ระหว่าง anesthesia',
    type: 'procedure',
    system: 'monitoring',
    species: ['dog', 'cat'],
    tags: ['monitoring', 'BP', 'SpO2', 'ETCO2', 'ECG', 'temp'],
    aliases: ['monitor', 'monitoring'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ทุก anesthesia case</li>
          <li>Sedation cases — at least HR, RR, MM, CRT</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — มี เท่าที่ทำได้ดีกว่าไม่มี</li>
        </ul>
      `,
      preparation: `
        <p><strong>5 parameters minimum (ASA standards):</strong></p>
        <ol>
          <li><strong>HR + ECG</strong></li>
          <li><strong>BP (NIBP or invasive)</strong></li>
          <li><strong>SpO2 (pulse ox)</strong></li>
          <li><strong>ETCO2 (capnography)</strong></li>
          <li><strong>Temperature (rectal probe)</strong></li>
        </ol>

        <p><strong>Plus clinical assessment:</strong> jaw tone, eye position, palpebral reflex, MM color, CRT, RR + effort</p>
      `,
      steps: `
        <p><strong>Normal ranges ขณะ anesthesia:</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Vital Signs Targets — ตัวเลขที่ต้องท่อง</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">70-150</span>
              <span class="num-label">HR หมา (bpm)</span>
            </div>
            <div class="num-card">
              <span class="num-big">100-180</span>
              <span class="num-label">HR แมว (bpm)</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 60</span>
              <span class="num-label">MAP min (mmHg)</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 95%</span>
              <span class="num-label">SpO2</span>
            </div>
            <div class="num-card">
              <span class="num-big">35-45</span>
              <span class="num-label">ETCO2 (mmHg)</span>
            </div>
            <div class="num-card">
              <span class="num-big">37-38.5</span>
              <span class="num-label">Temp (°C)</span>
            </div>
            <div class="num-card">
              <span class="num-big">8-20</span>
              <span class="num-label">RR /min</span>
            </div>
            <div class="num-card">
              <span class="num-big">q5min</span>
              <span class="num-label">Document</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"60-95-40-37"</strong> เลขจำง่าย: BP 60+ · SpO2 95+ · ETCO2 40 · Temp 37+<br>
          ⚠️ <strong>SpO2 &lt; 90 = severe hypoxemia</strong> · <strong>ETCO2 &gt; 50 = hypoventilation → IPPV</strong></p>
        </div>
      `,
      complications: `
        <ul>
          <li>Equipment errors → false alarms or missed events</li>
          <li>SpO2 probe malfunction (motion, vasoconstriction, cold tissue)</li>
          <li>NIBP cuff size error → inaccurate BP</li>
          <li>ETCO2 sampling line kinked / disconnected</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue monitoring through extubation + recovery</li>
          <li>Document all values in anesthesia record</li>
          <li>Calculate trends — single value less useful than trend</li>
          <li>Tip: <strong>"Hands on the patient + eyes on monitor"</strong> — clinical assessment never replaced by machine</li>
          <li>Tip: <strong>capnograph waveform &gt; just number</strong> — shape tells you airway status, rebreathing, perfusion</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-capnography',
    titleEn: 'Capnography Interpretation',
    titleTh: 'การอ่าน capnograph',
    type: 'procedure',
    system: 'monitoring',
    species: ['dog', 'cat'],
    tags: ['capnography', 'ETCO2', 'waveform', 'CO2'],
    aliases: ['capno', 'ETCO2'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Confirm endotracheal intubation (gold standard)</li>
          <li>Detect equipment problems (kinks, disconnects, valve failure)</li>
          <li>Assess ventilation adequacy</li>
          <li>Detect circulatory changes (CO drops → ETCO2 drops)</li>
          <li>CPR effectiveness (good compressions → ETCO2 ↑)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Mainstream</strong> — sensor at ETT (heavier, more accurate)</li>
          <li><strong>Sidestream</strong> — sample tubing aspirates gas (most common)
            <ul><li>Watch for water trap, kinks</li></ul>
          </li>
          <li>Connect to ETT or face mask</li>
        </ul>
      `,
      steps: `
        <p><strong>Normal waveform (4 phases):</strong></p>
        <ul>
          <li>Phase I: zero CO2 baseline (inspiration)</li>
          <li>Phase II: rapid upstroke (expiration of dead space + alveolar air)</li>
          <li>Phase III: alveolar plateau (slight upward slope)</li>
          <li>Phase IV: rapid downstroke (next inspiration)</li>
        </ul>
        <p>Peak = ETCO2 (end-tidal) ≈ PaCO2</p>

        <p><strong>Common abnormal waveforms:</strong></p>
        <ul>
          <li><strong>Flat line, ETCO2 = 0:</strong>
            <ul>
              <li>Esophageal intubation</li>
              <li>Disconnect</li>
              <li>Cardiac arrest</li>
              <li>Sample line obstruction</li>
            </ul>
          </li>
          <li><strong>"Shark fin" / sloping plateau:</strong> bronchoconstriction, asthma, partial obstruction</li>
          <li><strong>Rebreathing baseline (above zero):</strong> CO2 absorber exhausted, faulty unidirectional valve, inadequate fresh gas flow</li>
          <li><strong>Cardiogenic oscillations:</strong> small wavelets at end of plateau — normal in slow respiration</li>
          <li><strong>Curare cleft (notch in plateau):</strong> patient breathing against ventilator — wake up sign</li>
          <li><strong>ETCO2 sudden drop:</strong>
            <ul>
              <li>Acute → disconnect, cardiac arrest, PE</li>
              <li>Gradual → CO drop, hypotension, cooling</li>
            </ul>
          </li>
          <li><strong>ETCO2 sudden rise:</strong>
            <ul>
              <li>Acute → MH (malignant hyperthermia), tourniquet release</li>
              <li>Gradual → hypoventilation, fever, ↑ metabolism</li>
            </ul>
          </li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Misinterpretation — train yourself on normal first</li>
          <li>Sampling line water/secretion → false low or zero</li>
          <li>Long sampling tube → lag time</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Check waveform every few minutes — not just number</li>
          <li>Document changes that prompt action</li>
          <li>Tip: <strong>"ETCO2 = first sign of trouble"</strong> — drops before SpO2 drops, before BP drops</li>
          <li>Tip: <strong>CPR + ETCO2 &gt; 15 mmHg = good compressions</strong></li>
          <li>Tip: ETT placement → instant ETCO2 waveform = correct (gold standard, faster than auscultation)</li>
        </ul>
      `
    }
  },


  /* ============================================================
     EMERGENCIES · ฉุกเฉินใน anesthesia (3)
     ============================================================ */

  {
    id: 'anes-hypotension',
    titleEn: 'Anesthetic Hypotension Management',
    titleTh: 'การจัดการความดันต่ำใน anesthesia',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['hypotension', 'BP', 'shock', 'vasopressor', 'inotrope'],
    aliases: ['hypotension', 'BP ต่ำ'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>MAP &lt; 60-65 mmHg ระหว่าง anesthesia</li>
          <li>Systolic BP &lt; 90 mmHg</li>
          <li>Verify reading first (cuff size, motion, hypothermia)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Don't treat false reading without verifying</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Working IV access</li>
          <li>Warm crystalloid (LRS / Normosol)</li>
          <li>Vasopressor / inotrope drugs ready
            <ul>
              <li>Ephedrine (push)</li>
              <li>Dopamine (CRI)</li>
              <li>Dobutamine (CRI)</li>
              <li>Phenylephrine (push or CRI)</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>Stepwise approach (5 R's):</strong></p>

        <div class="mnemonic">
          <span class="mnem-title">5 R's — Anesthetic Hypotension</span>
          <ul>
            <li><strong>R</strong>educe anesthetic depth (ลด iso/sevo 0.5%)</li>
            <li><strong>R</strong>einforce volume (fluid bolus)</li>
            <li><strong>R</strong>educe MAC further with adjuncts (opioid CRI)</li>
            <li><strong>R</strong>econsider — surgical cause? (hemorrhage, vena cava)</li>
            <li><strong>R</strong>esort to vasopressors/inotropes</li>
          </ul>
          <p class="mnem-tip">ลำดับสำคัญ — depth ก่อนเสมอ ฉีด pressor สุดท้าย</p>
        </div>
        <ol>
          <li><strong>R</strong>educe anesthetic depth (most common cause!)
            <ul>
              <li>Decrease iso/sevo by 0.5%</li>
              <li>Recheck BP in 3-5 min</li>
              <li>This fixes ~50% of cases</li>
            </ul>
          </li>
          <li><strong>R</strong>einforce volume — fluid bolus if hypovolemic
            <ul>
              <li>10-20 mL/kg crystalloid IV over 10-15 min</li>
              <li>Repeat if needed (max 60 mL/kg total)</li>
              <li>Cat: 5-10 mL/kg per bolus (smaller volume)</li>
            </ul>
          </li>
          <li><strong>R</strong>educe MAC further with adjuncts
            <ul>
              <li>Add opioid CRI (fentanyl 5 µg/kg/h)</li>
              <li>Add lidocaine CRI (dog only) 50 µg/kg/min</li>
              <li>Add ketamine CRI 0.1-0.3 mg/kg/h</li>
              <li>Allows lower inhalant → less vasodilation</li>
            </ul>
          </li>
          <li><strong>R</strong>econsider — check for surgical cause:
            <ul>
              <li>Hemorrhage</li>
              <li>Compression of vena cava (tilting, retractor)</li>
              <li>Pneumothorax</li>
              <li>Anaphylaxis</li>
            </ul>
          </li>
          <li><strong>R</strong>esort to vasopressors/inotropes if persistent:
            <ul>
              <li><strong>Ephedrine</strong> 0.05-0.1 mg/kg IV bolus (rapid effect, lasts 10-15 min)</li>
              <li><strong>Dopamine CRI</strong> 5-10 µg/kg/min (inotrope + mild vasoconstriction)</li>
              <li><strong>Dobutamine CRI</strong> 2-10 µg/kg/min (pure inotrope, good for cardiac)</li>
              <li><strong>Phenylephrine</strong> 1-3 µg/kg IV bolus (pure vasoconstriction)</li>
              <li><strong>Norepinephrine CRI</strong> 0.05-0.5 µg/kg/min (potent — sepsis, refractory)</li>
            </ul>
          </li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Untreated hypotension → organ ischemia (kidney, brain)</li>
          <li>Over-aggressive fluid → pulmonary edema (esp cardiac patient)</li>
          <li>Vasopressor without volume → false BP rise, organ damage</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document all interventions</li>
          <li>Check renal function post-op if prolonged hypotension</li>
          <li>Tip: <strong>"Anesthetic depth FIRST"</strong> — most common, most reversible</li>
          <li>Tip: <strong>"BP &lt; 60 for &gt; 20 min = AKI risk"</strong> — act promptly</li>
          <li>Tip: <strong>CRI &gt; bolus for sustained support</strong> · use syringe pump</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-hypoxemia',
    titleEn: 'Anesthetic Hypoxemia',
    titleTh: 'ภาวะ hypoxemia ใน anesthesia',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['hypoxemia', 'desaturation', 'SpO2', 'ventilation'],
    aliases: ['hypoxemia', 'SpO2 ต่ำ', 'desat'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>SpO2 &lt; 95% on FiO2 100%</li>
          <li>SpO2 &lt; 90% = significant hypoxemia → IMMEDIATE action</li>
          <li>Cyanotic mucous membranes</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Don't act on false reading — check probe placement, motion, vasoconstriction first</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Working O2 + capnography</li>
          <li>Bag (ambu) ready</li>
          <li>Suction</li>
          <li>Backup ETT (different size)</li>
        </ul>
      `,
      steps: `
        <p><strong>Systematic approach — DOPE:</strong></p>

        <div class="mnemonic">
          <span class="mnem-title">DOPE — แก้ Hypoxemia</span>
          <ul>
            <li><strong>D</strong>isplaced ETT — ผิดที่</li>
            <li><strong>O</strong>bstruction — อุดตัน</li>
            <li><strong>P</strong>neumothorax — ลมรั่ว</li>
            <li><strong>E</strong>quipment failure — เครื่องเสีย</li>
          </ul>
          <p class="mnem-tip">ตรวจตามลำดับ — เร็วก่อน ซับซ้อนทีหลัง</p>
        </div>
        <ol>
          <li><strong>D</strong>isplaced ETT — check
            <ul>
              <li>Listen to both sides of chest</li>
              <li>Capnography — flat = esophageal or disconnect</li>
              <li>Push ETT slightly in or out</li>
            </ul>
          </li>
          <li><strong>O</strong>bstruction — secretions, kink, mucus plug
            <ul>
              <li>Suction ETT</li>
              <li>Check for blood/mucus</li>
              <li>Replace if obstructed</li>
            </ul>
          </li>
          <li><strong>P</strong>neumothorax (rare but life-threatening)
            <ul>
              <li>Auscultate decreased sounds one side</li>
              <li>Increased ventilation pressure to inflate</li>
              <li>If suspected → thoracocentesis</li>
            </ul>
          </li>
          <li><strong>E</strong>quipment failure
            <ul>
              <li>O2 source disconnected or empty</li>
              <li>Vaporizer empty</li>
              <li>Circuit leak</li>
              <li>Check pop-off valve</li>
            </ul>
          </li>
        </ol>

        <p><strong>While diagnosing — IPPV with 100% O2:</strong></p>
        <ol>
          <li>Disconnect from machine if uncertain</li>
          <li>Ventilate manually with bag (10-20 breaths/min)</li>
          <li>Reattach when confident equipment works</li>
        </ol>

        <p><strong>Specific causes + treatment:</strong></p>
        <ul>
          <li><strong>Hypoventilation:</strong> ETCO2 ↑ + SpO2 ↓ → IPPV</li>
          <li><strong>V/Q mismatch:</strong> ETCO2 normal + SpO2 ↓ → recruitment maneuvers, PEEP</li>
          <li><strong>Pulmonary disease (pre-existing):</strong> aspiration pneumonia, edema → diuretic, antibiotic, oxygen post-op</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Brain damage (cerebral hypoxia &gt; 5 min)</li>
          <li>Cardiac arrest (severe sustained hypoxemia)</li>
          <li>Aspiration during emergency intubation/extubation</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue O2 supplementation post-op</li>
          <li>Pulse ox until stable on room air</li>
          <li>Thoracic rad if suspected aspiration / pneumonitis</li>
          <li>Tip: <strong>"DOPE in order"</strong> — fastest to most complex</li>
          <li>Tip: <strong>brachycephalic always at risk</strong> — pre-O2 longer + smooth recovery</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-bradycardia',
    titleEn: 'Anesthetic Bradycardia &amp; Arrhythmias',
    titleTh: 'หัวใจเต้นช้าและ arrhythmia ใน anesthesia',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['bradycardia', 'arrhythmia', 'atropine', 'glycopyrrolate'],
    aliases: ['bradycardia', 'หัวใจเต้นช้า'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Dog HR &lt; 60 (normal under anesthesia 70-150)</li>
          <li>Cat HR &lt; 100 (normal 100-180)</li>
          <li>Always evaluate <strong>WITH BP context</strong>:
            <ul>
              <li>Bradycardia + good BP = often OK</li>
              <li>Bradycardia + low BP = TREAT</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Bradycardia from dexmedetomidine alone with normal BP — DO NOT treat with atropine (worsens BP from increased afterload + HR)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>ECG monitoring (rhythm strip)</li>
          <li>Atropine + glycopyrrolate ready</li>
          <li>Lidocaine for arrhythmia</li>
          <li>Crash cart accessible</li>
        </ul>
      `,
      steps: `
        <p><strong>Identify cause:</strong></p>
        <ul>
          <li><strong>Drug-related:</strong>
            <ul>
              <li>Dexmedetomidine — expected, often physiologic</li>
              <li>Opioids — vagal-mediated</li>
              <li>Deep anesthesia — reduce iso/sevo</li>
            </ul>
          </li>
          <li><strong>Vagal stimulation:</strong>
            <ul>
              <li>Surgical traction on viscera</li>
              <li>Eye pressure (oculocardiac reflex)</li>
              <li>Pull on ovarian pedicle</li>
            </ul>
          </li>
          <li><strong>Electrolyte:</strong> hyperkalemia (urethral obstruction, AKI)</li>
          <li><strong>Hypothermia</strong></li>
          <li><strong>Hypoxemia</strong> (severe)</li>
        </ul>

        <p><strong>Treatment by cause:</strong></p>
        <ul>
          <li><strong>Vagal/anesthetic depth:</strong>
            <ul>
              <li>Reduce inhalant 0.5%</li>
              <li>Anticholinergic if BP also low:
                <ul>
                  <li>Atropine 0.02-0.04 mg/kg IV (rapid onset 1-2 min)</li>
                  <li>Glycopyrrolate 0.005-0.01 mg/kg IV (slower 3-5 min, longer duration, less arrhythmogenic)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Dexmed-induced bradycardia + normal BP:</strong> DO NOT treat with atropine
            <ul>
              <li>If symptomatic (low BP) → low-dose atipamezole 25% reversal IM</li>
            </ul>
          </li>
          <li><strong>Hyperkalemia:</strong>
            <ul>
              <li>Calcium gluconate 0.5-1 mL/kg slow IV (cardioprotective, not K-lowering)</li>
              <li>Dextrose + insulin or β-agonist (terbutaline) to drive K into cells</li>
              <li>Treat underlying cause (relieve obstruction, etc.)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Common arrhythmias:</strong></p>
        <ul>
          <li><strong>2nd degree AV block (Mobitz I)</strong> — vagal · benign · atropine</li>
          <li><strong>VPCs</strong> — common in GDV, splenic mass · lidocaine if frequent (&gt; 6/min) or runs of VT
            <ul><li>Dog: lidocaine 1-2 mg/kg IV bolus, then CRI 25-75 µg/kg/min</li></ul>
          </li>
          <li><strong>Sinus bradycardia + opioid</strong> — usually OK if BP normal</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Atropine → tachycardia → ↑ myocardial O2 demand</li>
          <li>Wrong drug for cause → makes things worse</li>
          <li>Untreated VPC → VT → VF → arrest</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue ECG monitoring through recovery</li>
          <li>Check electrolytes if metabolic suspicion</li>
          <li>Document rhythm + treatment</li>
          <li>Tip: <strong>"HR alone tells nothing — context matters"</strong> — always with BP, depth, drugs</li>
          <li>Tip: <strong>glycopyrrolate &gt; atropine for premed</strong> · less arrhythmogenic, longer effect</li>
        </ul>
      `
    }
  },


  /* ============================================================
     LOCOREGIONAL · การฉีดยาชาเฉพาะที่ (2)
     ============================================================ */

  {
    id: 'anes-epidural',
    titleEn: 'Lumbosacral Epidural',
    titleTh: 'การฉีดยาชาเข้าโพรงไขสันหลัง (Epidural)',
    type: 'procedure',
    system: 'locoregional',
    species: ['dog', 'cat'],
    tags: ['epidural', 'spinal', 'morphine', 'lidocaine', 'bupivacaine'],
    aliases: ['epidural', 'spinal'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Hindlimb / pelvic surgery (TPLO, hemilam, fracture)</li>
          <li>C-section (less drug to fetus)</li>
          <li>Severe abdominal pain (preservative-free morphine)</li>
          <li>Post-op analgesia for pelvic limb procedures</li>
          <li>Reduce intraop inhalant requirements</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy</li>
          <li>Skin infection at site</li>
          <li>Sepsis (relative — risk introducing organism)</li>
          <li>Severe spinal abnormality / disease at L7-S1</li>
          <li>Hypovolemia uncorrected (vasodilation worsens)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Spinal needle 22G × 1.5-3.5 inch (size depends on patient)</li>
          <li>Sterile gloves + drape</li>
          <li>Chlorhexidine prep</li>
          <li>Drug — preservative-free!
            <ul>
              <li><strong>Morphine</strong> 0.1 mg/kg (analgesia 12-24 hr, no motor block)</li>
              <li><strong>Lidocaine 2%</strong> 1 mL/4.5 kg (motor block 1-2 hr) — caudal anesthesia</li>
              <li><strong>Bupivacaine 0.5%</strong> 1 mL/4.5 kg (motor block 4-6 hr, longer)</li>
              <li><strong>Combinations:</strong> morphine + bupivacaine common</li>
            </ul>
          </li>
          <li>Saline syringe for "loss of resistance" test</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Patient anesthetized (or heavily sedated)</li>
          <li>Sternal recumbency · pelvis perpendicular · hindlimbs pulled forward</li>
          <li>Identify L7-S1 space:
            <ul>
              <li>Palpate iliac wings (cranial border = L7 spinous)</li>
              <li>Caudal to L7 spinous → depression = L7-S1</li>
            </ul>
          </li>
          <li>Clip + scrub aseptic technique (chlorhexidine 3 cycles)</li>
          <li>Sterile gloves · drape</li>
          <li>Insert spinal needle perpendicular at midline
            <ul>
              <li>Skin → subcutaneous → ligament → "pop" through ligamentum flavum</li>
            </ul>
          </li>
          <li>Remove stylet → check:
            <ul>
              <li>No blood (vascular puncture — repeat)</li>
              <li>No CSF (subarachnoid puncture — reduce dose 50%)</li>
            </ul>
          </li>
          <li>"Loss of resistance" test: connect saline syringe → push gently → smooth flow = epidural space</li>
          <li>Inject drug slowly over 30-60 sec</li>
          <li>Withdraw needle</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Hypotension</strong> — sympathetic block → vasodilation (preload 5-10 mL/kg before)</li>
          <li>Subarachnoid injection → high block → respiratory depression
            <ul><li>Reduce dose 50% if CSF observed</li></ul>
          </li>
          <li>Vascular puncture → systemic toxicity
            <ul><li>Lidocaine: seizure (treat with diazepam)</li></ul>
          </li>
          <li>Infection / abscess (rare with sterile technique)</li>
          <li>Urinary retention 12-24 hr (especially with morphine — express bladder)</li>
          <li>Pruritus (morphine — antihistamine, low-dose naloxone)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor BP, HR, RR for 30+ min after</li>
          <li>Express bladder q6-8h until voluntary urination resumes</li>
          <li>Walking ataxia 1-4 hr (lidocaine/bupivacaine) — keep contained</li>
          <li>Tip: <strong>"Pop and flow"</strong> — feel pop, confirm with saline flow</li>
          <li>Tip: <strong>preservative-free morphine ONLY</strong> — preservatives = neurotoxic</li>
          <li>Tip: <strong>combined low-dose</strong> (e.g., morphine 0.1 + bup 0.5%) = best of both worlds</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-nerve-blocks',
    titleEn: 'Common Nerve Blocks (Dental, RUMM, Intercostal)',
    titleTh: 'การ block เส้นประสาทที่ใช้บ่อย',
    type: 'procedure',
    system: 'locoregional',
    species: ['dog', 'cat'],
    tags: ['nerve block', 'dental block', 'RUMM', 'intercostal', 'lidocaine'],
    aliases: ['nerve block', 'dental block', 'RUMM'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Multimodal analgesia — reduce systemic drug</li>
          <li>Dental procedures (extraction, root canal)</li>
          <li>Limb amputation / TPLO / fracture (RUMM, sciatic-femoral)</li>
          <li>Thoracotomy / rib fracture (intercostal)</li>
          <li>Mass removal local infiltration</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Local infection at injection site</li>
          <li>Coagulopathy</li>
          <li>Allergy to local anesthetic (rare)</li>
          <li>Skin tumor at site</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Lidocaine 2%</strong> — onset 5-10 min, duration 1-2 hr</li>
          <li><strong>Bupivacaine 0.5%</strong> — onset 15-30 min, duration 4-6 hr</li>
          <li><strong>Lidocaine + bupivacaine 1:1</strong> — fast onset + long duration</li>
          <li>Max dose:
            <ul>
              <li>Lidocaine: 5 mg/kg dog · 2 mg/kg cat</li>
              <li>Bupivacaine: 2 mg/kg dog · 1 mg/kg cat</li>
            </ul>
          </li>
          <li>22-25G needle</li>
          <li>+/- ultrasound (RUMM, sciatic — increasing standard of care)</li>
        </ul>
      `,
      steps: `
        <p><strong>Dental Blocks (under GA):</strong></p>
        <ol>
          <li><strong>Infraorbital</strong> — maxillary teeth (canine, premolars):
            <ul>
              <li>Locate infraorbital foramen at mucosal margin above maxillary 3rd premolar</li>
              <li>Insert 25G needle 0.5-1 cm into foramen</li>
              <li>Aspirate, inject 0.1-0.5 mL bupivacaine</li>
            </ul>
          </li>
          <li><strong>Mental</strong> — mandibular incisors, canine:
            <ul>
              <li>Locate middle mental foramen at mandibular 2nd premolar</li>
              <li>Lift lip, insert 25G needle into foramen</li>
              <li>0.1-0.5 mL bupivacaine</li>
            </ul>
          </li>
          <li><strong>Caudal mandibular (inferior alveolar)</strong> — all mandibular teeth on side:
            <ul>
              <li>Approach intra-oral or extra-oral at mandibular foramen (caudal medial mandible)</li>
              <li>0.5-1 mL bupivacaine</li>
            </ul>
          </li>
          <li><strong>Maxillary (V2)</strong> — entire upper jaw on side:
            <ul>
              <li>Caudal to last molar, into pterygopalatine fossa</li>
              <li>0.5-1 mL bupivacaine</li>
            </ul>
          </li>
        </ol>

        <p><strong>RUMM Block (forelimb):</strong></p>
        <p>Blocks Radial, Ulnar, Median, Musculocutaneous nerves — entire distal forelimb.</p>
        <ol>
          <li>Patient lateral recumbency, leg abducted</li>
          <li>Two injection sites:
            <ul>
              <li>Lateral: between brachialis + lateral head triceps (radial nerve)</li>
              <li>Medial: medial humerus, axilla (ulnar, median, musculocutaneous)</li>
            </ul>
          </li>
          <li>Ultrasound-guided ideal — see nerves + vessels</li>
          <li>0.05-0.1 mL/kg bupivacaine each site</li>
        </ol>

        <p><strong>Intercostal Block (thoracotomy, rib fx):</strong></p>
        <ol>
          <li>Identify 2 ribs cranial + 2 caudal of incision/fx</li>
          <li>Inject under <strong>caudal border</strong> of each rib (intercostal vessels run caudally)</li>
          <li>0.25-0.5 mL bupivacaine per site</li>
          <li>Total max 2 mg/kg bupivacaine</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Systemic toxicity</strong> (most concern):
            <ul>
              <li>Lidocaine: seizure → arrhythmia → arrest (treat with intralipid 20%)</li>
              <li>Bupivacaine: cardiac toxicity (more cardiotoxic than lidocaine)</li>
            </ul>
          </li>
          <li>Nerve damage (rare, neuropraxia)</li>
          <li>Hematoma</li>
          <li>Infection</li>
          <li>Persistent paresthesia (very rare)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor for systemic signs (excitation, arrhythmia)</li>
          <li>Document block performed + dose</li>
          <li>Inform owner about post-op numbness (1-6 hr depending on drug)</li>
          <li>Tip: <strong>"Aspirate before EVERY injection"</strong> — avoid intravascular</li>
          <li>Tip: <strong>Fractional doses</strong> — don't inject all volume at one site</li>
          <li>Tip: <strong>Intralipid 20% emergency kit</strong> — keep on hand for LAST (local anesthetic systemic toxicity)
            <ul><li>1.5 mL/kg bolus then 0.25 mL/kg/min CRI</li></ul>
          </li>
        </ul>
      `
    }
  },


  /* ============================================================
     SPECIFIC PATIENT · เคสพิเศษ (4)
     ============================================================ */

  {
    id: 'anes-csection',
    titleEn: 'Anesthesia for C-section',
    titleTh: 'Anesthesia ในการผ่าคลอด',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['C-section', 'cesarean', 'pregnancy', 'neonate'],
    aliases: ['C-section', 'cesarean', 'ผ่าคลอด'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Dystocia non-resolving</li>
          <li>Elective (brachycephalic, large litter, history)</li>
          <li>Maternal exhaustion</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — emergency procedure when needed</li>
          <li>BUT: stabilize hypovolemia first if possible</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Pre-emptive prep before induction:</strong>
            <ul>
              <li>IV catheter + fluid running</li>
              <li>O2 by mask 5+ min</li>
              <li>Surgery prepped — clip, scrub belly, drape ready</li>
              <li>Surgeon scrubbed, ready</li>
              <li>Multiple neonate care stations (towels, suction bulb, naloxone)</li>
              <li><strong>"Speed = puppy survival"</strong></li>
            </ul>
          </li>
          <li><strong>NO premed ideally</strong> (or minimal)
            <ul><li>If needed: IV opioid (low-dose hydromorphone 0.05 mg/kg)</li></ul>
          </li>
          <li>Drugs ready:
            <ul>
              <li>Propofol or alfaxalone for induction</li>
              <li>Isoflurane low concentration</li>
              <li>Calcium gluconate (uterine contraction)</li>
              <li>Oxytocin (post-delivery, contract uterus, milk letdown)</li>
              <li>Naloxone (if maternal opioid → puppy reversal)</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Pre-O2 + IV fluid 10 mL/kg</li>
          <li>NO drug until ready to cut!</li>
          <li>Prep belly while patient awake (clip + scrub before induction = saves time)</li>
          <li><strong>Induction:</strong> propofol 4-6 mg/kg IV slow — titrate to intubation</li>
          <li>Intubate immediately</li>
          <li>Maintain isoflurane low (1-1.5%)</li>
          <li>Surgeon goes IMMEDIATELY (no delay for monitor setup)</li>
          <li>Position dorsal recumbency, mild left tilt (avoid vena cava compression)</li>
          <li>Monitor BP closely (vasodilation + compression)</li>
          <li><strong>Once puppies out:</strong>
            <ul>
              <li>Give opioid IV (now safe — analgesia for mom)</li>
              <li>Increase iso if needed</li>
              <li>Oxytocin 0.5-1 unit IM (mom)</li>
              <li>Calcium gluconate if uterine atony</li>
            </ul>
          </li>
          <li>Recover quickly — mom needs to nurse</li>
        </ol>

        <p><strong>Neonate resuscitation:</strong></p>
        <ol>
          <li>Clear membrane from face</li>
          <li>Suction nostrils + oropharynx (bulb syringe, gentle)</li>
          <li>Brisk towel rub to stimulate</li>
          <li>If apneic: hold sternal, gentle thoracic compressions, blow into nostrils</li>
          <li><strong>Naloxone 1 drop sublingual</strong> if mom got opioid</li>
          <li>NEVER swing puppy to clear airway — outdated, causes brain hemorrhage</li>
          <li>Place at warm towels with mom · monitor breathing</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Maternal hypotension (vasodilation + uterine compression)</li>
          <li>Maternal regurgitation / aspiration</li>
          <li>Neonatal depression (drug effects)</li>
          <li>Hemorrhage (uterine atony, retained placenta)</li>
          <li>DIC in difficult/prolonged dystocia</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reunite mom with puppies ASAP — bonding</li>
          <li>Watch nursing — mom may be drowsy initially</li>
          <li>Monitor mom for hemorrhage 6-12 hr</li>
          <li>Pain meds: NSAID OK after delivery (avoid before)</li>
          <li>Tip: <strong>"Time on the table = neonate mortality"</strong> · efficiency saves lives</li>
          <li>Tip: <strong>Avoid α2 (dexmed)</strong> — crosses placenta easily, depresses neonates</li>
          <li>Tip: <strong>Propofol &amp; alfaxalone clear quickly</strong> — preferred over thiopental/ket</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-cardiac-patient',
    titleEn: 'Anesthesia for Cardiac Patient',
    titleTh: 'Anesthesia ในเคสโรคหัวใจ',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['cardiac', 'CHF', 'MMVD', 'HCM', 'anesthesia'],
    aliases: ['heart disease', 'cardiac anesthesia'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Patient with diagnosed heart disease needing anesthesia</li>
          <li>MMVD (Cavalier, small breed)</li>
          <li>HCM cat</li>
          <li>DCM, ARVC</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Decompensated CHF — stabilize first (diuretic, oxygen) ก่อน elective</li>
          <li>Severe pulmonary hypertension (very high risk)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Pre-anesthetic workup:</strong>
            <ul>
              <li>Recent echocardiogram (within 6 mo ideal)</li>
              <li>ECG</li>
              <li>Thoracic radiograph</li>
              <li>NT-proBNP if available</li>
              <li>Continue cardiac medications morning of surgery</li>
            </ul>
          </li>
          <li>IV access pre-induction</li>
          <li>Full monitoring (ECG, BP, ETCO2, SpO2, temp)</li>
          <li>Drugs to avoid:
            <ul>
              <li>Acepromazine (vasodilation in already low CO)</li>
              <li>High-dose dexmed in HCM (too much afterload)</li>
              <li>Ketamine in HCM (↑ HR + contractility worsens diastolic dysfunction)</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>MMVD (small breed dog):</strong></p>
        <ul>
          <li>Pre-med: low-dose opioid (methadone 0.2 mg/kg or hydromorphone 0.05 mg/kg) + low-dose midazolam 0.2 mg/kg</li>
          <li>NO ACP, NO α2</li>
          <li>Induction: <strong>propofol slowly</strong> (2-3 mg/kg) or <strong>etomidate</strong> (0.5-2 mg/kg, CV-sparing) or <strong>alfaxalone</strong> (1 mg/kg)</li>
          <li>Maintenance: isoflurane LOW (1-1.5%) + multimodal analgesia</li>
          <li>Avoid hypotension — preload + vasopressor early</li>
        </ul>

        <p><strong>HCM (cat):</strong></p>
        <ul>
          <li>Pre-med: opioid + low-dose midazolam (NO ket, NO high dexmed)</li>
          <li>Induction: <strong>alfaxalone</strong> or <strong>propofol</strong> slowly</li>
          <li>Goal: <strong>maintain HR 130-160 (lower than awake), avoid tachycardia</strong></li>
          <li>Maintain preload (avoid hypovolemia)</li>
          <li>Maintain afterload (avoid vasodilation)</li>
          <li>Treat tachycardia — esmolol if needed</li>
          <li>β-blocker continued morning of surgery</li>
        </ul>

        <p><strong>DCM:</strong></p>
        <ul>
          <li>Similar to MMVD approach</li>
          <li>Inotropic support often needed (dobutamine CRI 2-5 µg/kg/min)</li>
          <li>Avoid bradycardia (low HR + low contractility = severe ↓ CO)</li>
          <li>Lidocaine CRI for VPC if frequent (esp Boxer ARVC)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>CHF decompensation — pulmonary edema</li>
          <li>Hypotension (severe, unresponsive)</li>
          <li>Arrhythmia → arrest</li>
          <li>Aspiration during recovery</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue ECG + BP monitoring 4-6 hr post-op</li>
          <li>Furosemide if signs of fluid overload (resp rate ↑, crackles)</li>
          <li>Resume cardiac meds same day</li>
          <li>Monitor for delayed arrhythmia</li>
          <li>Tip: <strong>"Maintain — don't push"</strong> — drive HR + BP steady, no big swings</li>
          <li>Tip: <strong>Dobutamine syringe ready</strong> for DCM/CHF cases</li>
          <li>Tip: <strong>Echo within 3-6 mo</strong> changes management — re-image if old</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-brachycephalic',
    titleEn: 'Anesthesia for Brachycephalic Breeds',
    titleTh: 'Anesthesia ในพันธุ์หน้าสั้น',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['brachycephalic', 'BOAS', 'pug', 'bulldog', 'persian'],
    aliases: ['brachy', 'BOAS', 'หน้าสั้น'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Bulldog, Pug, French Bulldog, Boston, Shih Tzu, Persian, Himalayan</li>
          <li>BOAS surgery itself (rhinoplasty, palatoplasty)</li>
          <li>Routine procedures — anesthesia higher risk</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe BOAS uncorrected — high risk · stabilize/oxygen first</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Pre-op imaging (skull rad, +/- CT)</li>
          <li>ETT multiple sizes (often need smaller than expected)</li>
          <li>Suction ready</li>
          <li>O2 + flow-by always</li>
          <li>Reflux/regurg prep:
            <ul>
              <li>Maropitant 1 mg/kg SC pre-op</li>
              <li>+/- omeprazole 1 mg/kg PO night before</li>
            </ul>
          </li>
          <li>Avoid stress — quiet handling</li>
        </ul>
      `,
      steps: `
        <p><strong>Premed:</strong></p>
        <ul>
          <li>Low-dose opioid + low-dose dexmed (or just opioid)</li>
          <li>Avoid heavy sedation — risk airway collapse before induction</li>
          <li>Maropitant — anti-emetic + visceral pain</li>
        </ul>

        <p><strong>Induction:</strong></p>
        <ul>
          <li>Pre-O2 5+ min (mask if tolerated)</li>
          <li><strong>Rapid induction</strong> — propofol or alfaxalone IV
            <ul><li>Don't wait — short window between sedated and obstruction</li></ul>
          </li>
          <li>Intubate <strong>FAST</strong> — they obstruct quickly when relaxed
            <ul>
              <li>Multiple ETT sizes ready</li>
              <li>Stylet may help</li>
            </ul>
          </li>
          <li>Verify cuff seal (often need slightly larger ETT than expected for body size)</li>
        </ul>

        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Standard inhalant</li>
          <li>Multimodal analgesia (reduce inhalant)</li>
          <li>Watch for regurgitation — head elevated</li>
          <li>Suction oropharynx before extubation</li>
        </ul>

        <p><strong>Recovery — HIGHEST RISK PHASE:</strong></p>
        <ol>
          <li>Extubate <strong>LATE</strong> — only when fully awake, swallowing, lifting head</li>
          <li>Have ETT/laryngoscope ready to re-intubate if obstruction</li>
          <li>O2 supplement 30-60 min</li>
          <li>Monitor SpO2 + respiratory effort</li>
          <li>Sternal recumbency, head extended</li>
          <li>Continuous staff observation 1-2 hr</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Upper airway obstruction</strong> — peri-induction + recovery</li>
          <li><strong>Regurgitation/aspiration</strong> — high baseline risk</li>
          <li>Hypoxemia post-extubation</li>
          <li>Hyperthermia (panting compromised)</li>
          <li>Vagal-mediated bradycardia (high vagal tone)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Stay sternal · cool environment</li>
          <li>O2 1-2 hr post-recovery</li>
          <li>Monitor SpO2 until stable on room air &gt; 95%</li>
          <li>Maropitant continued 24 hr post-op</li>
          <li>Tip: <strong>"Late extubation, early intervention"</strong> — keep ETT in until fully awake</li>
          <li>Tip: <strong>Have suction running</strong> at induction + recovery</li>
          <li>Tip: <strong>Owner counseling</strong> — discuss BOAS surgery to reduce future anesthesia risk</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-geriatric',
    titleEn: 'Anesthesia for Geriatric Patient',
    titleTh: 'Anesthesia ในเคสสูงอายุ',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['geriatric', 'elderly', 'old', 'CKD', 'cognitive'],
    aliases: ['geriatric', 'แก่', 'สูงวัย'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Dog ≥ 7 ปี (large breed) · ≥ 10 ปี (small breed)</li>
          <li>Cat ≥ 10 ปี</li>
          <li>Treat as ASA ≥ 2 by default</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe organ dysfunction unstabilized</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Comprehensive pre-anesthetic workup:</strong>
            <ul>
              <li>CBC + Chem (full)</li>
              <li>Urinalysis + culture</li>
              <li>T4 (cat)</li>
              <li>BP measurement</li>
              <li>Thoracic rad</li>
              <li>+/- ECG, echo if any indication</li>
              <li>+/- abdominal US</li>
            </ul>
          </li>
          <li>Address any abnormality before elective procedure</li>
          <li>IV catheter pre-induction</li>
          <li>Active warming pre-op (Bair Hugger)</li>
        </ul>
      `,
      steps: `
        <p><strong>Drug dose modifications (general rule: 30-50% reduction):</strong></p>
        <ul>
          <li>Premed:
            <ul>
              <li>Reduced opioid dose</li>
              <li>Avoid ACP if any CV concern</li>
              <li>Low-dose dexmed (1-3 µg/kg) instead of standard</li>
            </ul>
          </li>
          <li>Induction:
            <ul>
              <li>Lower dose propofol (1-2 mg/kg)</li>
              <li>Slow titration — 1/4 dose increments</li>
              <li>Onset slower in elderly — wait between doses</li>
            </ul>
          </li>
          <li>Maintenance:
            <ul>
              <li>Lower MAC requirement (10-20% less)</li>
              <li>Multimodal analgesia ESSENTIAL</li>
              <li>Avoid bolus drugs — CRI titrated</li>
            </ul>
          </li>
        </ul>

        <p><strong>Monitoring intensified:</strong></p>
        <ul>
          <li>Continuous BP (NIBP q5min minimum)</li>
          <li>ECG continuous</li>
          <li>Active thermoregulation (warm IV fluid, warming blanket)</li>
          <li>Urine output (catheter for long procedures)</li>
        </ul>

        <p><strong>Special considerations:</strong></p>
        <ul>
          <li>CKD common — fluid rate carefully (avoid overload + dehydration)</li>
          <li>Reduced cognitive reserve → cognitive dysfunction post-op risk</li>
          <li>Vision/hearing loss → quiet recovery, calm staff</li>
          <li>Sarcopenia → relative drug overdose if dosed by total weight</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Prolonged recovery (slow drug clearance)</li>
          <li>Hypothermia (impaired thermoregulation)</li>
          <li>Hypotension (less cardiac reserve)</li>
          <li>Renal injury (low BP + CKD)</li>
          <li>Post-op cognitive dysfunction</li>
          <li>Aspiration (decreased reflexes)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Slow, warm, quiet recovery</li>
          <li>Active warming until normothermic</li>
          <li>IV fluid moderate rate</li>
          <li>Re-check BUN/Cr 24 hr post-op if any concern</li>
          <li>Pain control aggressive (geriatrics under-medicated commonly)</li>
          <li>Tip: <strong>"Use lean body weight"</strong> for drug calc in obese geriatric</li>
          <li>Tip: <strong>"Slow and steady"</strong> — geriatric anesthesia is patient endurance test for clinician</li>
          <li>Tip: <strong>Don't withhold anesthesia from old patient</strong> — proper protocol = good outcomes</li>
        </ul>
      `
    }
  },


  /* ============================================================
     PAIN MANAGEMENT · การจัดการความปวด (3)
     ============================================================ */

  {
    id: 'anes-multimodal',
    titleEn: 'Multimodal Analgesia',
    titleTh: 'การจัดการปวดแบบผสมผสาน',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['pain', 'analgesia', 'multimodal', 'NSAID', 'opioid'],
    aliases: ['multimodal pain', 'ปวด'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>All surgical patients</li>
          <li>Acute trauma</li>
          <li>Chronic pain (OA, cancer)</li>
          <li>Post-op recovery</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Specific drug contraindications (see individual)</li>
          <li>Allergic reaction history</li>
        </ul>
      `,
      preparation: `
        <p><strong>Concept:</strong> attack pain at multiple receptor sites/pathways → better control with lower dose of each drug = fewer side effects</p>

        <p><strong>Pain pathways targeted:</strong></p>
        <ul>
          <li><strong>Transduction</strong> (tissue) — NSAIDs, local anesthetics</li>
          <li><strong>Transmission</strong> (peripheral nerve) — local anesthetic blocks</li>
          <li><strong>Modulation</strong> (spinal cord) — opioids, α2, ketamine, local epidural</li>
          <li><strong>Perception</strong> (brain) — opioids, α2, gabapentin</li>
        </ul>

        <div class="mnemonic diagram">
          <span class="mnem-title">4 Pathways of Pain — โจมตีหลายจุด</span>
          <div class="diagram-grid">
            <div class="diagram-box red">
              <span class="box-title">1. Transduction</span>
              เนื้อเยื่อ → ส่งสัญญาณ<br>
              💊 <strong>NSAID</strong><br>💉 <strong>Local</strong>
            </div>
            <div class="diagram-box orange">
              <span class="box-title">2. Transmission</span>
              เส้นประสาท → ไขสันหลัง<br>
              💉 <strong>Nerve block</strong>
            </div>
            <div class="diagram-box blue">
              <span class="box-title">3. Modulation</span>
              ไขสันหลัง<br>
              💉 <strong>Epidural</strong><br>💊 <strong>Opioid · α2 · Ket</strong>
            </div>
            <div class="diagram-box purple">
              <span class="box-title">4. Perception</span>
              สมอง<br>
              💊 <strong>Opioid · α2</strong><br>💊 <strong>Gabapentin</strong>
            </div>
          </div>
          <p class="mnem-tip">🎯 <strong>"4 จุด 4 ยา"</strong> — โจมตีพร้อมกันหลายจุด = multimodal · ใช้ยาน้อยลงต่อชั้น = side effect น้อย</p>
        </div>
      `,
      steps: `
        <p><strong>Pre-emptive (BEFORE incision):</strong></p>
        <ul>
          <li>Opioid premed (methadone, hydromorphone)</li>
          <li>NSAID if no contraindication (carprofen, meloxicam)</li>
          <li>Local block (incisional, dental, epidural)</li>
          <li>Maropitant (NK-1 antagonist — visceral pain + antiemetic)</li>
        </ul>

        <p><strong>Intraop CRI options:</strong></p>
        <ul>
          <li><strong>Fentanyl</strong> 5-10 µg/kg/h — opioid analgesia</li>
          <li><strong>Lidocaine</strong> (DOG ONLY) 50 µg/kg/min — sodium channel block + anti-inflammatory
            <ul><li>NEVER in cat — cardiotoxic</li></ul>
          </li>
          <li><strong>Ketamine</strong> 0.1-0.6 mg/kg/h — NMDA antagonist (anti-windup)</li>
          <li><strong>Dexmedetomidine</strong> 1-3 µg/kg/h — α2 sedation + analgesia</li>
          <li><strong>"FLK" or "FKD" combinations</strong> — Fentanyl + Lidocaine + Ketamine (dog) — synergy</li>
        </ul>

        <p><strong>Post-op:</strong></p>
        <ul>
          <li>Continue opioid 24-48 hr (long-acting like buprenorphine, or transdermal fentanyl, or repeated injections)</li>
          <li>NSAID 5-7 days (carprofen, meloxicam, robenacoxib for cat)</li>
          <li>+/- gabapentin 10-20 mg/kg PO BID-TID (neuropathic, anxiolytic)</li>
          <li>+/- transdermal fentanyl patch (50-100 µg/h dog · 25 µg/h cat)</li>
        </ul>

        <p><strong>Chronic pain (OA):</strong></p>
        <ul>
          <li>NSAID daily (long-term, monitor liver/kidney)</li>
          <li>Gabapentin BID-TID</li>
          <li>+/- amantadine 3-5 mg/kg PO SID</li>
          <li>+/- adequan / pentosan (DMOAD)</li>
          <li><strong>Bedinvetmab</strong> (anti-NGF mAb monthly) — newer option for dog OA</li>
          <li><strong>Frunevetmab</strong> (anti-NGF for cat) — game-changer for OA cat</li>
          <li>Acupuncture, physical rehab</li>
          <li>Weight management</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Drug interactions (always cross-check)</li>
          <li>Cumulative side effects</li>
          <li>Over-sedation</li>
          <li>GI ulcer (NSAID) — esp with concurrent steroid</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Pain score q4-6h (Glasgow CMPS-SF for dog · Botucatu for cat)</li>
          <li>Adjust dose based on score</li>
          <li>Owner education for home pain assessment</li>
          <li>Tip: <strong>"Treat pain proactively, not reactively"</strong></li>
          <li>Tip: <strong>"Cat hides pain"</strong> — assume painful + treat preemptively</li>
          <li>Tip: NSAID + opioid + local block = standard for routine surgery</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-nsaid',
    titleEn: 'NSAIDs in Veterinary Practice',
    titleTh: 'การใช้ NSAID',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['NSAID', 'carprofen', 'meloxicam', 'robenacoxib', 'firocoxib'],
    aliases: ['NSAID', 'COX inhibitor'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Acute peri-operative pain</li>
          <li>Chronic pain (OA most common)</li>
          <li>Inflammatory conditions (otitis, arthritis)</li>
          <li>Post-extraction dental pain</li>
          <li>Soft tissue injury</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Renal disease</strong> (CKD stage 3+) — relative</li>
          <li><strong>Hepatic disease</strong></li>
          <li><strong>GI ulceration</strong> active or recent</li>
          <li><strong>Coagulopathy</strong></li>
          <li><strong>Hypovolemia / shock / dehydration</strong> — exacerbates renal injury</li>
          <li>Concurrent corticosteroid (do NOT combine — high GI ulcer risk)</li>
          <li>Pregnancy/lactation (most NSAIDs)</li>
          <li>&lt; 6 weeks of age</li>
          <li>Cat: extreme caution (dose conservative + short course)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Common NSAIDs:</strong></p>
        <ul>
          <li><strong>Carprofen (Rimadyl)</strong>
            <ul>
              <li>Dog: 2 mg/kg PO BID or 4 mg/kg SID</li>
              <li>Cat: NOT labeled (single SC dose 2-4 mg/kg max)</li>
            </ul>
          </li>
          <li><strong>Meloxicam (Metacam)</strong>
            <ul>
              <li>Dog: 0.2 mg/kg loading, then 0.1 mg/kg SID PO</li>
              <li>Cat: 0.05 mg/kg PO SID short-term (3 days max in some labels)</li>
              <li>Cat long-term: 0.05 mg/kg PO once weekly (off-label, controversial)</li>
            </ul>
          </li>
          <li><strong>Robenacoxib (Onsior)</strong> — preferred for cat
            <ul>
              <li>Dog: 1-2 mg/kg PO SID</li>
              <li>Cat: 1-2.4 mg/kg PO SID up to 6 days</li>
            </ul>
          </li>
          <li><strong>Firocoxib (Previcox)</strong>
            <ul>
              <li>Dog only: 5 mg/kg PO SID</li>
            </ul>
          </li>
          <li><strong>Grapiprant (Galliprant)</strong> — EP4 antagonist (newer mechanism)
            <ul>
              <li>Dog only: 2 mg/kg PO SID</li>
              <li>Less GI/renal SE than traditional NSAIDs</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>Pre-op administration:</strong></p>
        <ul>
          <li>Give &gt; 1 hr before incision (oral)</li>
          <li>Or injectable at induction (carprofen, meloxicam)</li>
          <li>Avoid in hypovolemic/dehydrated patient</li>
          <li>Avoid if surgery has high hypotension risk (e.g., GDV)</li>
        </ul>

        <p><strong>Post-op continuation:</strong></p>
        <ul>
          <li>3-7 days for routine surgery</li>
          <li>Long-term for OA — monitor q3-6 mo (CBC, chem, urine)</li>
          <li><strong>Washout period</strong> when switching NSAIDs: 5-7 days</li>
          <li>NEVER during washout: another NSAID OR steroid</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>GI ulceration</strong> — most common · vomiting, melena, anemia</li>
          <li><strong>AKI</strong> — esp with hypotension, dehydration</li>
          <li>Hepatotoxicity (idiosyncratic, esp Labrador with carprofen — very rare but watched)</li>
          <li>Platelet dysfunction (mild)</li>
          <li>Drug interactions: ACE-I + NSAID + diuretic = "triple whammy" → AKI risk</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Owner counseling: stop + call if vomiting, decreased appetite, lethargy, dark stool</li>
          <li>Always with food</li>
          <li>Annual renal/hepatic monitoring for chronic users</li>
          <li>Tip: <strong>"In doubt, omit"</strong> — if any contraindication, skip NSAID + use other multimodal options</li>
          <li>Tip: <strong>NEVER NSAID + steroid</strong> — biggest dispensing error</li>
          <li>Tip: <strong>Cat NSAID = think twice</strong> — short course OK, long-term controversial</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-chronic-pain',
    titleEn: 'Chronic Pain Management (OA Focus)',
    titleTh: 'การจัดการปวดเรื้อรัง',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['chronic pain', 'OA', 'osteoarthritis', 'gabapentin', 'bedinvetmab', 'frunevetmab'],
    aliases: ['chronic pain', 'OA pain', 'arthritis'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Osteoarthritis (most common chronic pain)</li>
          <li>Cancer pain</li>
          <li>Neuropathic pain (post-amputation, IVDD, FIP neuro, Chiari)</li>
          <li>Chronic pancreatitis</li>
          <li>Inflammatory conditions (chronic otitis, dermatitis)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Specific drug contraindications</li>
        </ul>
      `,
      preparation: `
        <p><strong>Pillars of chronic pain management (4 pillars):</strong></p>
        <ol>
          <li>Pharmacologic (multi-drug)</li>
          <li>Weight management</li>
          <li>Exercise + rehabilitation</li>
          <li>Environmental modification</li>
        </ol>

        <p>Diet, supplements (omega-3 EPA/DHA), structured exercise, body weight all matter as much as drugs</p>
      `,
      steps: `
        <p><strong>1st line — NSAIDs:</strong></p>
        <ul>
          <li>Carprofen, meloxicam, firocoxib, robenacoxib (cat)</li>
          <li>Daily, monitor labs q3-6 mo</li>
        </ul>

        <p><strong>2nd line additions:</strong></p>
        <ul>
          <li><strong>Gabapentin</strong> 10-20 mg/kg PO BID-TID
            <ul>
              <li>Neuropathic + anxiolytic</li>
              <li>Especially good for cat (also fear-free vet visits)</li>
              <li>Sedation common 1st few days — start low, increase</li>
            </ul>
          </li>
          <li><strong>Amantadine</strong> 3-5 mg/kg PO SID-BID (NMDA, anti-windup)</li>
          <li><strong>Tramadol</strong> 2-5 mg/kg PO BID-TID (questionable efficacy in dog, controversial)
            <ul><li>Cat metabolism different — 1-4 mg/kg PO SID-BID</li></ul>
          </li>
        </ul>

        <p><strong>3rd line (advanced):</strong></p>
        <ul>
          <li><strong>Bedinvetmab (Librela)</strong> — anti-NGF monoclonal antibody for DOG
            <ul>
              <li>Monthly SC injection</li>
              <li>Excellent OA pain control</li>
              <li>Few side effects, no liver/kidney concern</li>
              <li>Game-changer for elderly dog</li>
            </ul>
          </li>
          <li><strong>Frunevetmab (Solensia)</strong> — anti-NGF for CAT
            <ul>
              <li>Monthly SC injection</li>
              <li>Major breakthrough for cat OA</li>
              <li>Use in cat with CKD where NSAID risky</li>
            </ul>
          </li>
          <li><strong>Pentosan polysulfate</strong> (Cartrophen) — DMOAD weekly × 4 then monthly</li>
          <li><strong>Adequan (PSGAG)</strong> — DMOAD twice weekly × 4 weeks then taper</li>
          <li><strong>PRP / stem cell</strong> — emerging</li>
        </ul>

        <p><strong>Adjunct (non-pharm):</strong></p>
        <ul>
          <li>Physical rehab (controlled exercise, hydrotherapy)</li>
          <li>Acupuncture</li>
          <li>Cold laser / PEMF</li>
          <li>Therapeutic ultrasound</li>
          <li>Joint diet (omega-3, glucosamine, chondroitin, green-lipped mussel)</li>
          <li>Weight loss to ideal BCS (1-2 score reduction = pain ↓ significantly)</li>
          <li>Environmental: ramp, non-slip, lifting</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>NSAID side effects (ดูใน NSAID entry)</li>
          <li>Gabapentin sedation, ataxia (start low)</li>
          <li>Anti-NGF: rare anaphylaxis (very rare), reported transient OA flare</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reassess q4-6 wk initially, then q3 mo</li>
          <li>Owner pain score (CBPI for dog · FMPI for cat)</li>
          <li>Adjust meds based on response</li>
          <li>Annual labs for chronic NSAID</li>
          <li>Tip: <strong>"OA pain is undertreated"</strong> — be aggressive multimodal</li>
          <li>Tip: <strong>Anti-NGF is changing OA management</strong> — learn it, offer it</li>
          <li>Tip: <strong>Owner education on subtle signs</strong> — cat especially (less play, hide more, miss litter box)</li>
        </ul>
      `
    }
  },


  /* ============================================================
     EUTHANASIA (1)
     ============================================================ */

  {
    id: 'anes-euthanasia',
    titleEn: 'Compassionate Euthanasia',
    titleTh: 'การการุณยฆาต',
    type: 'procedure',
    system: 'euthanasia',
    species: ['dog', 'cat'],
    tags: ['euthanasia', 'end of life', 'pentobarbital'],
    aliases: ['euthanasia', 'การุณยฆาต', 'หลับ'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>End-stage terminal illness</li>
          <li>Quality of life unacceptable + irreversible</li>
          <li>Severe trauma not survivable</li>
          <li>Owner-elected (with appropriate communication)</li>
          <li>Aggressive animal posing danger (legal/ethical varies)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Doubt about diagnosis or prognosis (offer 2nd opinion)</li>
          <li>Owner ambivalence (delay if reasonable)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Compassionate setup:</strong>
            <ul>
              <li>Quiet, private room</li>
              <li>Soft mat/towel on table or floor</li>
              <li>Tissues available</li>
              <li>Allow owner time with pet</li>
            </ul>
          </li>
          <li><strong>Drugs:</strong>
            <ul>
              <li>Pre-sedation: dexmed + butorphanol IM (high dose) or "DKT" (dexmed + ketamine + tilamine)</li>
              <li>Pentobarbital sodium (Beuthanasia, Euthasol) — IV preferred</li>
              <li>+/- IV catheter pre-placed</li>
            </ul>
          </li>
          <li>Documentation:
            <ul>
              <li>Consent form signed</li>
              <li>Body care decision (cremation, home burial)</li>
              <li>Memorial options (paw print, fur clip, photo)</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>Standard 2-step protocol:</strong></p>
        <ol>
          <li><strong>Step 1: Heavy sedation (essential)</strong>
            <ul>
              <li>Dexmedetomidine 20-40 µg/kg + Butorphanol 0.4 mg/kg IM (or telazol)</li>
              <li>Or "DKT" mix (dexmed + ket + butorphanol IM)</li>
              <li>Wait 10-20 min — patient deeply sedated/sleeping</li>
              <li>Allows owner to hold pet, say goodbye while breathing softly</li>
            </ul>
          </li>
          <li><strong>Step 2: Pentobarbital IV</strong>
            <ul>
              <li>Place IV catheter (in cephalic, saphenous, or other accessible vein)</li>
              <li>Or femoral injection if no IV access</li>
              <li>Dose: pentobarbital 80-100 mg/kg IV slow push</li>
              <li>Auscultate heart — usually stops within 1-2 min</li>
              <li>Confirm: no heart sound × 2 min, no breathing, no corneal reflex</li>
            </ul>
          </li>
        </ol>

        <p><strong>Alternative routes if IV access fails (under deep anesthesia):</strong></p>
        <ul>
          <li>Intracardiac (only if unconscious)</li>
          <li>Intraperitoneal (slower onset, only if unconscious)</li>
          <li>Intrarenal in cat (under deep sedation)</li>
        </ul>

        <p><strong>NEVER:</strong></p>
        <ul>
          <li>Pentobarbital IM/SC alone (slow, painful)</li>
          <li>Without sedation in conscious animal</li>
          <li>In owner's view if animal still struggling</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Agonal breathing</strong> — diaphragmatic gasps post-death (NORMAL, not suffering — counsel owner)</li>
          <li><strong>Muscle twitches/fasciculations</strong> — reflex, not awareness</li>
          <li><strong>Eyes remain open</strong> — normal (ask owner if want closed)</li>
          <li><strong>Bowel/bladder release</strong> — counsel owner, prepare with absorbent pad</li>
          <li><strong>Vocalization (rare)</strong> — agonal, not pain · be ready to address with owner</li>
          <li>Failure of vein → embarrassing — have backup plan</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li><strong>For pet:</strong>
            <ul>
              <li>Confirm death (auscultation, no corneal reflex × 2 min)</li>
              <li>Give owner time alone with body if wanted</li>
              <li>Handle body respectfully</li>
              <li>Memorial offerings (paw print, fur)</li>
              <li>Body care per owner wish</li>
            </ul>
          </li>
          <li><strong>For owner:</strong>
            <ul>
              <li>Listen, validate grief</li>
              <li>Offer pet loss support resources</li>
              <li>Bill not at this moment if possible</li>
              <li>Sympathy card from clinic 1-2 weeks later</li>
            </ul>
          </li>
          <li><strong>For team:</strong>
            <ul>
              <li>Compassion fatigue real — debrief, support</li>
              <li>Mental health day if difficult case</li>
            </ul>
          </li>
          <li>Tip: <strong>"Sedate first, every time"</strong> — gold standard, owner sees peaceful</li>
          <li>Tip: <strong>"Practice the words"</strong> — what to say when, prepare in advance</li>
          <li>Tip: <strong>"Validate, don't fix"</strong> — owner doesn't need solution, just empathy</li>
        </ul>
      `
    }
  },

  /* ============================================================
     PREMEDICATION (เพิ่มเติม) — Benzodiazepines, Anticholinergics,
     Maropitant, Xylazine, Trazodone (5)
     ============================================================ */

  {
    id: 'anes-benzodiazepines',
    titleEn: 'Benzodiazepines (Diazepam, Midazolam)',
    titleTh: 'Benzodiazepines',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['benzodiazepine', 'diazepam', 'midazolam', 'GABA', 'sedation'],
    aliases: ['benzo', 'diazepam', 'midazolam', 'valium', 'versed'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Co-induction with ketamine (NEVER ketamine alone — muscle rigidity)</li>
          <li>Premedication ในเคส critical / cardiac (CV-sparing มาก)</li>
          <li>Seizure control (status epilepticus first-line)</li>
          <li>Muscle relaxation (avoid rigidity with dissociative)</li>
          <li>Anxiolysis</li>
          <li>Co-induction with propofol/etomidate (reduces dose 25-30%)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe hepatic dysfunction (metabolized in liver)</li>
          <li>Healthy young dog without other drug — paradoxical excitement common</li>
          <li>Pregnancy (ผ่าน placenta — neonatal sedation)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Diazepam (Valium):</strong></p>
        <ul>
          <li>Concentration: 5 mg/mL</li>
          <li>Oil-based — ห้ามผสมกับ saline/dextrose (precipitates) · IV slow only · IM painful</li>
          <li>ใช้พลาสติก syringe แยก (absorbs to plastic over time — give immediately)</li>
        </ul>

        <p><strong>Midazolam (Versed):</strong></p>
        <ul>
          <li>Concentration: 1 หรือ 5 mg/mL</li>
          <li>Water-soluble — IV/IM/IN/buccal · ผสมกับ ketamine ได้</li>
          <li>Onset เร็วกว่า + duration สั้นกว่า diazepam</li>
        </ul>

        <p><strong>Doses (dog/cat):</strong></p>
        <ul>
          <li>Premed: 0.2-0.4 mg/kg IV/IM</li>
          <li>Co-induction: 0.2 mg/kg IV ก่อนหรือร่วมกับ propofol</li>
          <li>"Ket-val": diazepam 0.25 mg/kg + ketamine 5 mg/kg IV (1:1 mix)</li>
          <li>Seizure: midazolam 0.2-0.5 mg/kg IV/IM/IN</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> potentiate GABA-A receptor → ↑ Cl- influx → hyperpolarization → CNS depression</p>

        <p><strong>Co-induction protocol (cardiac patient):</strong></p>
        <ol>
          <li>Pre-O2 + premed (low-dose opioid)</li>
          <li>Inject midazolam 0.2 mg/kg IV slow</li>
          <li>Wait 30-60 sec — patient relaxed, calm</li>
          <li>Inject reduced-dose induction agent (propofol 1-2 mg/kg or alfaxalone 1 mg/kg)</li>
          <li>Result: stable BP, smooth induction, less drug overall</li>
        </ol>

        <p><strong>Status epilepticus:</strong></p>
        <ul>
          <li>Midazolam 0.2 mg/kg IV (or IM if no IV) → repeat q5min × 2</li>
          <li>Or diazepam 0.5 mg/kg IV bolus</li>
          <li>Refractory → load with phenobarb / propofol CRI</li>
          <li><strong>Intranasal midazolam</strong> works fast in seizing patient with no IV access</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Paradoxical excitement (esp healthy young dog without other drug)</li>
          <li>Mild respiratory depression (synergistic with opioids)</li>
          <li>Hypotension (mild — much less than other induction drugs)</li>
          <li>Disinhibition / behavior change in cat (rare)</li>
          <li>Hepatic dysfunction = prolonged effect</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reversal: <strong>Flumazenil</strong> 0.01-0.04 mg/kg IV slow (titrate)</li>
          <li>Reversal not routine — let drug wear off</li>
          <li>Re-sedation possible (flumazenil short-acting)</li>
          <li>Tip: <strong>"Benzo + ketamine, never alone"</strong> — first lesson of dissociatives</li>
          <li>Tip: <strong>Midazolam &gt; Diazepam</strong> สำหรับ vet ใน clinic — water-soluble, IM works, less plastic interaction</li>
          <li>Tip: <strong>Co-induction</strong> = secret weapon for fragile cardiac patient</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-anticholinergics',
    titleEn: 'Anticholinergics (Atropine, Glycopyrrolate)',
    titleTh: 'ยา Anticholinergic',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['atropine', 'glycopyrrolate', 'anticholinergic', 'parasympatholytic', 'bradycardia'],
    aliases: ['atropine', 'glyco', 'parasympatholytic'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Vagal-mediated bradycardia (during induction, surgical traction)</li>
          <li>Oculocardiac reflex (eye surgery)</li>
          <li>Visceral traction reflex (GI surgery)</li>
          <li>CPR — asystole/PEA with vagal cause</li>
          <li>Reduce salivation/secretion (esp with ketamine)</li>
          <li>Pre-treatment ในเคส high vagal tone (Boxer, brachycephalic)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Sinus tachycardia</strong> — จะแย่ลง</li>
          <li><strong>Dexmedetomidine-induced bradycardia + normal BP</strong> — atropine จะ ↑ HR + ↑ BP มาก (myocardial O2 demand)</li>
          <li>Hyperthyroidism uncontrolled</li>
          <li>Cardiac disease ที่ tachycardia worsens (HCM, MMVD severe)</li>
          <li>Glaucoma (mydriasis worsens IOP — relative)</li>
          <li>Tachyarrhythmia</li>
        </ul>
      `,
      preparation: `
        <p><strong>Atropine sulfate:</strong></p>
        <ul>
          <li>Concentration: 0.54 mg/mL (US) or 0.6 mg/mL</li>
          <li>Onset: <strong>1-2 min IV</strong> · 5-10 min IM</li>
          <li>Duration: 30-90 min</li>
          <li>Crosses BBB · placental</li>
          <li>Initial paradoxical bradycardia possible (low dose &lt; 0.01 mg/kg) — ใช้ full dose</li>
        </ul>

        <p><strong>Glycopyrrolate (Robinul):</strong></p>
        <ul>
          <li>Concentration: 0.2 mg/mL</li>
          <li>Onset: <strong>3-5 min IV</strong> · 10-15 min IM</li>
          <li>Duration: 2-4 hr (longer)</li>
          <li>Quaternary amine — does NOT cross BBB or placenta</li>
          <li>Less arrhythmogenic than atropine</li>
        </ul>

        <p><strong>Doses:</strong></p>
        <ul>
          <li>Atropine: 0.02-0.04 mg/kg IV/IM/SC (CPR: 0.04 mg/kg, can repeat)</li>
          <li>Glycopyrrolate: 0.005-0.01 mg/kg IV/IM/SC</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> competitive muscarinic receptor antagonist → blocks vagal effects → ↑ HR, ↓ secretion, mydriasis, ↓ GI motility</p>

        <p><strong>Selection guide:</strong></p>
        <ul>
          <li><strong>Atropine:</strong>
            <ul>
              <li>Emergency bradycardia (need fast onset)</li>
              <li>CPR</li>
              <li>Cheaper, more widely available</li>
            </ul>
          </li>
          <li><strong>Glycopyrrolate:</strong>
            <ul>
              <li>Preferred for premed (longer effect cover surgery)</li>
              <li>C-section (doesn't cross placenta — fetal HR not affected)</li>
              <li>Less arrhythmogenic in cardiac patient</li>
              <li>Reversal of NMB (with neostigmine — prevents bradycardia from neostigmine)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Clinical scenarios:</strong></p>
        <ul>
          <li>Intraop bradycardia + low BP → atropine 0.02 mg/kg IV (rapid)</li>
          <li>Pre-op for ophthalmic (oculocardiac) → glycopyrrolate IM with premed</li>
          <li>Pre-op for brachycephalic (high vagal tone) → glycopyrrolate IM</li>
          <li>Asystole (CPR) → atropine 0.04 mg/kg + epinephrine</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Tachycardia — ↑ myocardial O2 demand</li>
          <li>Tachyarrhythmia (atropine more than glyco)</li>
          <li>Mydriasis — interferes with anesthetic depth assessment via pupil</li>
          <li>↓ GI motility → post-op ileus</li>
          <li>Dry mouth, secretions thick → harder to swallow on recovery</li>
          <li>Hyperthermia (esp cat — impaired cooling)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continuous ECG monitor after dose</li>
          <li>Effect peaks 5-10 min — wait before redosing</li>
          <li>Tip: <strong>"Don't routinely premed with anticholinergic"</strong> — only when indicated · old practice was prophylactic, modern is selective</li>
          <li>Tip: <strong>"Bradycardia + good BP = wait, watch"</strong> · "Bradycardia + low BP = treat now"</li>
          <li>Tip: <strong>Glycopyrrolate ดีกว่าใน C-section</strong> — fetus ไม่โดน</li>
          <li>Tip: dexmed bradycardia → <strong>partial atipamezole reversal</strong>, ไม่ใช่ atropine</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-maropitant',
    titleEn: 'Maropitant (Cerenia)',
    titleTh: 'Maropitant',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['maropitant', 'cerenia', 'antiemetic', 'NK1', 'visceral pain'],
    aliases: ['maropitant', 'cerenia'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Pre-op antiemetic — ลด opioid-induced vomiting (esp morphine, hydromorphone)</li>
          <li>Visceral analgesia adjunct (substance P/NK-1 mediated pain)</li>
          <li>MAC reduction (~15-20% iso reduction in some studies)</li>
          <li>Motion sickness (oral, before travel)</li>
          <li>Chronic GI disease (IBD, pancreatitis — off-label)</li>
          <li>Brachycephalic — reduce regurgitation/aspiration risk</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hypersensitivity (rare)</li>
          <li>Puppy &lt; 8 weeks (limited safety data)</li>
          <li>Cat &lt; 4 mo (label restriction varies)</li>
          <li>Severe hepatic dysfunction (relative — metabolized in liver)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Injectable:</strong> 10 mg/mL</li>
          <li><strong>Tablets:</strong> 16, 24, 60, 160 mg</li>
          <li><strong>Doses:</strong>
            <ul>
              <li>Dog SC/IV: <strong>1 mg/kg q24h</strong> (max 5 days injectable label · longer off-label)</li>
              <li>Cat SC/IV: <strong>1 mg/kg q24h</strong></li>
              <li>Dog PO: 2 mg/kg q24h (motion sickness 8 mg/kg)</li>
              <li>Cat PO: 2 mg/kg q24h</li>
            </ul>
          </li>
          <li>Onset: 1-2 hr after SC/PO · 30-60 min IV</li>
          <li>Duration: 24 hr</li>
          <li><strong>Pre-op timing:</strong> SC ≥ 1 hr before opioid premed (ป้องกันอาเจียน effective)</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> NK-1 receptor antagonist → blocks substance P binding in CRTZ + emetic center · also peripheral NK-1 receptors → visceral analgesia</p>

        <p><strong>Standard pre-op protocol:</strong></p>
        <ol>
          <li>Maropitant 1 mg/kg SC <strong>1 hr before</strong> opioid premed</li>
          <li>Premed (opioid + sedative) เหมือนปกติ</li>
          <li>Result: vomiting incidence ลดจาก ~50% → &lt; 10% (with morphine/hydromorphone)</li>
        </ol>

        <p><strong>Multimodal pain (visceral surgery):</strong></p>
        <ul>
          <li>Pre-op maropitant + opioid + NSAID</li>
          <li>Especially good for: GI surgery, pancreatitis, peritonitis pain</li>
          <li>Continue 3-5 days post-op</li>
        </ul>

        <p><strong>Pain ที่ตอบสนอง maropitant ดี:</strong></p>
        <ul>
          <li>Visceral (GI, pancreatic, urogenital)</li>
          <li>Chronic GI</li>
          <li>Chemotherapy-induced nausea/vomiting</li>
        </ul>

        <p><strong>Pain ที่ตอบสนอง maropitant ไม่ดีเด่น:</strong></p>
        <ul>
          <li>Somatic (orthopedic, incisional) — opioid + NSAID + local block ดีกว่า</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Pain on SC injection (cold solution — refrigerate, warm to room temp before)</li>
          <li>Hypersensitivity (rare)</li>
          <li>Mild sedation (rare)</li>
          <li>Hypersalivation in cat sometimes</li>
          <li>SC injection site reaction</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue 24-72 hr post-op as needed</li>
          <li>Monitor appetite return</li>
          <li>Tip: <strong>"Cold injection = burns"</strong> — let warm to room temp 5-10 min before SC</li>
          <li>Tip: <strong>SC slower than IV</strong> — but tolerable with warm-up</li>
          <li>Tip: <strong>Standard of care</strong> ใน opioid-using anesthesia → ลด aspiration risk + smoother pre-anesthesia</li>
          <li>Tip: <strong>ไม่แทน antiemetic อื่น</strong> สำหรับเคสไม่เกี่ยว opioid (ondansetron / metoclopramide สำหรับ vomiting อื่น)</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-xylazine',
    titleEn: 'Xylazine',
    titleTh: 'Xylazine',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['xylazine', 'alpha2', 'sedation', 'older'],
    aliases: ['xylazine', 'rompun'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Sedation ใน clinic ที่ไม่มี dexmedetomidine (older drug, cheaper)</li>
          <li>Field anesthesia (combine with ketamine)</li>
          <li>Emesis induction (cat — single use; mostly historical)</li>
          <li>Large animal use (เป็น drug หลักใน farm/equine)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Cardiac disease (เหมือน dexmed แต่ effect รุนแรงกว่า)</li>
          <li>Hypovolemia / shock</li>
          <li>Severe hepatic / renal disease</li>
          <li>Diabetes (transient hyperglycemia worse than dexmed)</li>
          <li>Geriatric / debilitated — high risk</li>
          <li>Pregnancy (oxytocin-like effect → premature labor)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Concentration: 20 mg/mL (small animal) · 100 mg/mL (large animal — dilute!)</li>
          <li><strong>Doses (small animal):</strong>
            <ul>
              <li>Dog: 0.5-1.0 mg/kg IM/IV (LOW range — selectivity worse than dexmed)</li>
              <li>Cat: 0.4-1.0 mg/kg IM (emesis dose 0.5-1.0 mg/kg historically)</li>
            </ul>
          </li>
          <li>Onset: 5-10 min IM · 1-2 min IV</li>
          <li>Duration: 1-2 hr sedation</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> α2-agonist (similar to dexmed but less specific α2:α1 ratio = 160:1 vs 1620:1 for dexmed)</p>

        <p><strong>Classical "ketamine-xylazine" combo:</strong></p>
        <ol>
          <li>Xylazine 1 mg/kg IM</li>
          <li>Wait 10 min for sedation</li>
          <li>Ketamine 5-10 mg/kg IM (or IV after sedation)</li>
          <li>Surgical-plane anesthesia 30-45 min</li>
          <li>Used historically for spay/neuter, field surgery</li>
        </ol>

        <p><strong>Comparison vs Dexmedetomidine:</strong></p>
        <table style="width:100%; border-collapse: collapse;">
          <tr><th align="left">Feature</th><th align="left">Xylazine</th><th align="left">Dexmedetomidine</th></tr>
          <tr><td>α2 selectivity</td><td>160:1</td><td>1620:1 (10× more specific)</td></tr>
          <tr><td>Vomiting</td><td>มาก (esp cat)</td><td>น้อยกว่า</td></tr>
          <tr><td>Bradycardia/hypoxemia</td><td>รุนแรงกว่า</td><td>มี แต่น้อยกว่า</td></tr>
          <tr><td>Cost</td><td>ถูกมาก</td><td>แพงกว่า ~5-10×</td></tr>
          <tr><td>Reversal</td><td>Yohimbine, atipamezole</td><td>Atipamezole specific</td></tr>
        </table>
      `,
      complications: `
        <ul>
          <li><strong>Vomiting</strong> — &gt; 50% cat, ~30% dog (more than dexmed)</li>
          <li><strong>Severe bradycardia</strong> — common</li>
          <li><strong>Hypoxemia</strong> — common (esp cat — V/Q mismatch)</li>
          <li>Hypertension then hypotension (bi-phasic, more pronounced than dexmed)</li>
          <li>Vasoconstriction → pulse ox unreliable</li>
          <li>Hyperglycemia (transient — α2 inhibits insulin)</li>
          <li>Polyuria</li>
          <li>Premature labor (pregnant patient)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor HR, RR, SpO2, BP closely</li>
          <li>O2 supplement always (esp cat)</li>
          <li>Reversal: <strong>Yohimbine</strong> 0.1 mg/kg IV/IM (specific) หรือ <strong>Atipamezole</strong> ก็ได้</li>
          <li>Tip: <strong>"Older but workable"</strong> — ใช้ได้ถ้า dexmed ไม่มี · แต่ side effects มากกว่า · low end ของ dose</li>
          <li>Tip: <strong>ไม่แนะนำใน geriatric / cardiac / debilitated</strong> — ใช้ dexmed ดีกว่า</li>
          <li>Tip: <strong>O2 supplement essential</strong> — โดยเฉพาะ cat with xylazine</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-trazodone',
    titleEn: 'Trazodone (Pre-visit Anxiolytic)',
    titleTh: 'Trazodone',
    type: 'procedure',
    system: 'premed',
    species: ['dog', 'cat'],
    tags: ['trazodone', 'anxiolytic', 'fear-free', 'pre-visit', 'oral'],
    aliases: ['trazodone'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Pre-visit oral anxiolytic (fear-free vet visit)</li>
          <li>Post-op confinement / cage rest behavior</li>
          <li>Travel anxiety</li>
          <li>Storm phobia / fireworks</li>
          <li>Adjunct to behavior modification (chronic anxiety)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Concurrent SSRI/MAOI (serotonin syndrome risk)</li>
          <li>Severe cardiac disease (mild α1-blockade — vasodilation)</li>
          <li>Severe hepatic dysfunction</li>
          <li>Hypersensitivity</li>
          <li>Pregnancy (limited data)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Tablets: 50, 100, 150, 300 mg (human formulation)</li>
          <li><strong>Doses:</strong>
            <ul>
              <li>Dog: <strong>4-12 mg/kg PO</strong> (typical 8 mg/kg)</li>
              <li>Cat: <strong>50-100 mg/cat total</strong> (1-2 hr before stress)</li>
            </ul>
          </li>
          <li>Onset: 60-90 min · peak 2-4 hr</li>
          <li>Duration: 6-12 hr</li>
          <li><strong>Pre-visit timing:</strong> 90-120 min before appointment</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> serotonin receptor antagonist + reuptake inhibitor (SARI) → 5-HT2A blockade · also weak α1-adrenergic blockade · sedation + anxiolysis without significant cognitive impairment</p>

        <p><strong>Pre-visit "Cooperative Care" protocol:</strong></p>
        <ol>
          <li>Trial dose 1-2 days before appointment (assess effect at home)</li>
          <li>On appointment day: dose 90-120 min before leaving home</li>
          <li>Quiet car ride · pheromone spray (Adaptil/Feliway)</li>
          <li>Owner reports observable calmness on arrival</li>
        </ol>

        <p><strong>Combination with gabapentin (synergistic):</strong></p>
        <ul>
          <li>Trazodone 4-8 mg/kg + Gabapentin 10-20 mg/kg PO</li>
          <li>Both 90 min pre-visit</li>
          <li>Particularly effective in anxious dogs that don't respond to single agent</li>
        </ul>

        <p><strong>Cat fear-free protocol (Mark Plonsky / Lifton style):</strong></p>
        <ul>
          <li>Gabapentin 50-100 mg/cat 90 min before · trazodone 50-100 mg/cat optional add</li>
          <li>Dramatically reduces handling stress · safer exam, blood draw, anesthesia</li>
        </ul>

        <p><strong>Post-op confinement:</strong></p>
        <ul>
          <li>4-8 mg/kg PO q8-12h × 7-10 days post-op</li>
          <li>Reduces excitement, jumping, escape attempts</li>
          <li>Tapers as recovery progresses</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Sedation (intended effect, but variable)</li>
          <li>Ataxia / wobbly</li>
          <li>Paradoxical excitement (rare, esp in cat)</li>
          <li>GI upset (vomiting)</li>
          <li>Mild hypotension (α1-block)</li>
          <li>Priapism (rare, but reported in dog)</li>
          <li>Serotonin syndrome ถ้ารวมกับ SSRI/MAOI/tramadol</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Owner monitoring at home — adjust dose based on response</li>
          <li>Trial dose at home BEFORE actual stress event</li>
          <li>Tip: <strong>"At-home trial first"</strong> — บางตัวตอบสนองมาก บางตัวน้อย</li>
          <li>Tip: <strong>Trazodone + Gabapentin = "Chill Pill" duo</strong> · synergistic, lower dose each</li>
          <li>Tip: <strong>Reduces post-op anesthesia recovery agitation</strong> — useful even without home anxiety</li>
          <li>Tip: <strong>Game-changer for fearful cat</strong> — anesthesia ที่เคย impossible ทำได้สบายขึ้น</li>
        </ul>
      `
    }
  },


  /* ============================================================
     IV INDUCTION (เพิ่มเติม) — Etomidate, Tiletamine-Zolazepam,
     Neuromuscular Blockers (3)
     ============================================================ */

  {
    id: 'anes-etomidate',
    titleEn: 'Etomidate',
    titleTh: 'Etomidate',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['etomidate', 'induction', 'cardiac', 'CV-sparing'],
    aliases: ['etomidate', 'amidate'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Induction in cardiac patient</strong> — gold standard CV-sparing
            <ul>
              <li>HCM cat</li>
              <li>MMVD severe (Cavalier)</li>
              <li>DCM (Doberman)</li>
              <li>Pericardial effusion (tamponade)</li>
            </ul>
          </li>
          <li>Critical patient with hemodynamic instability</li>
          <li>Severe hypotension/shock</li>
          <li>↑ ICP (does not increase ICP)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hypoadrenocorticism (Addison's) — adrenocortical suppression worsens</li>
          <li>Long-term sepsis (controversial — single-dose probably OK)</li>
          <li>Severe hepatic dysfunction (relative)</li>
          <li>Cost prohibitive ในไทย — limited use</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Concentration: 2 mg/mL</li>
          <li>Carrier: propylene glycol (pain on injection — large vein, slow push)</li>
          <li><strong>Dose:</strong>
            <ul>
              <li>Dog/Cat: <strong>0.5-2 mg/kg IV</strong> slowly (over 30-60 sec)</li>
              <li>With premed: 0.5-1 mg/kg</li>
              <li>Without premed: 1-2 mg/kg</li>
            </ul>
          </li>
          <li>Onset: 30-60 sec</li>
          <li>Duration: 5-10 min (very short)</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> imidazole derivative · GABA-A potentiation similar to propofol but minimal CV effects · maintains sympathetic tone</p>

        <p><strong>Cardiac patient induction protocol (HCM cat example):</strong></p>
        <ol>
          <li>Pre-O2 5+ min</li>
          <li>Premed: low-dose opioid (methadone 0.2 mg/kg) + midazolam 0.2 mg/kg IM</li>
          <li>IV access · running fluid</li>
          <li><strong>Co-induction</strong>: midazolam 0.2 mg/kg IV → wait 30 sec → etomidate 0.5-1 mg/kg IV slow</li>
          <li>Intubate when ready (jaw relaxed)</li>
          <li>Maintain on sevoflurane LOW (1.5-2%) + multimodal IV</li>
          <li>Monitor BP, HR closely — etomidate keeps both stable</li>
        </ol>

        <p><strong>Why CV-sparing (key for teaching):</strong></p>
        <ul>
          <li>No vasodilation (unlike propofol)</li>
          <li>No myocardial depression (unlike propofol/iso)</li>
          <li>No tachycardia (unlike ketamine)</li>
          <li>Minimal change in HR, BP, CO during induction</li>
          <li>Best induction agent for ASA 4 cardiac case</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pain on injection</strong> — propylene glycol carrier · use large vein, slow push, pre-treat with opioid</li>
          <li><strong>Myoclonus / muscle twitching</strong> — common, can be marked · pre-treat with benzo eliminates</li>
          <li><strong>Adrenocortical suppression</strong> — single dose: 6-12 hr · CRI: 24+ hr · concern in critical patient</li>
          <li>Vomiting on recovery</li>
          <li>Hemolysis (rare, with rapid push)</li>
          <li>Limited availability in Thailand</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Smooth recovery typical</li>
          <li>If long sedation needed → use other drug (CRI of etomidate not recommended due to adrenocortical effect)</li>
          <li>Tip: <strong>"Etomidate = cardiac patient's best friend"</strong> · use when nothing else suitable</li>
          <li>Tip: <strong>Always co-induct with benzo</strong> — minimizes myoclonus</li>
          <li>Tip: <strong>Single-dose only for critical care</strong> — adrenal suppression with multiple doses</li>
          <li>Tip: <strong>Limited in Thailand</strong> — alfaxalone closest alternative if etomidate unavailable</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-tiletamine-zolazepam',
    titleEn: 'Tiletamine-Zolazepam (Zoletil / Telazol)',
    titleTh: 'Tiletamine-Zolazepam (Zoletil)',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['zoletil', 'telazol', 'tiletamine', 'zolazepam', 'IM combo'],
    aliases: ['zoletil', 'telazol', 'TZ'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Aggressive / fractious cat</strong> ที่ IV access ไม่ได้</li>
          <li>Field anesthesia (no IV needed)</li>
          <li>Wildlife / exotic capture</li>
          <li>Short procedures (radiograph, lac repair, dental clean)</li>
          <li>Shelter spay-neuter (combined with α2 + opioid)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe renal dysfunction (cat — tiletamine excreted unchanged in urine)</li>
          <li>Severe hepatic dysfunction</li>
          <li>Cardiac disease (sympathomimetic effect)</li>
          <li>Glaucoma (↑ IOP)</li>
          <li>↑ ICP</li>
          <li>Pregnancy (relative)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Lyophilized powder · reconstitute with sterile water (5 mL diluent → 50 mg/mL ของแต่ละตัว = 100 mg/mL combined)</li>
          <li>Components:
            <ul>
              <li><strong>Tiletamine</strong> = NMDA antagonist (ketamine analog, longer-acting)</li>
              <li><strong>Zolazepam</strong> = benzodiazepine (similar to diazepam)</li>
              <li>1:1 ratio</li>
            </ul>
          </li>
          <li><strong>Doses:</strong>
            <ul>
              <li>Dog IM: <strong>4-9 mg/kg</strong> total combined (up to 13 mg/kg)</li>
              <li>Cat IM: <strong>5-10 mg/kg</strong> (with opioid + dexmed combo can reduce to 3-5 mg/kg)</li>
              <li>IV: 1-2 mg/kg</li>
            </ul>
          </li>
          <li>Onset: 5-7 min IM · 1-2 min IV</li>
          <li>Duration: 30-60 min surgical anesthesia · recovery 2-3 hr</li>
          <li>Reconstituted vial stable 4 days room temp · 14 days refrigerated</li>
        </ul>
      `,
      steps: `
        <p><strong>"Kitty Magic" (gold standard fractious cat IM):</strong></p>
        <ol>
          <li>Mix in single syringe:
            <ul>
              <li>Zoletil 3-5 mg/kg</li>
              <li>Dexmedetomidine 5-10 µg/kg</li>
              <li>Buprenorphine 20 µg/kg (or hydromorphone 0.05 mg/kg)</li>
            </ul>
          </li>
          <li>IM single shot — quadriceps</li>
          <li>Wait 10-15 min</li>
          <li>Profound sedation/anesthesia for: blood draw, IV catheter, intubation, dental, neuter</li>
          <li>Top-up with iso mask if procedure &gt; 30 min</li>
        </ol>

        <p><strong>"Big dog combo" (uncooperative dog IM):</strong></p>
        <ul>
          <li>Zoletil 5-7 mg/kg + Dexmed 5 µg/kg + Methadone 0.2 mg/kg IM</li>
          <li>Profound sedation in 10-15 min</li>
          <li>Procedure-ready within 20 min</li>
        </ul>

        <p><strong>Tiletamine vs Ketamine differences:</strong></p>
        <ul>
          <li>Tiletamine longer duration (~3× ketamine)</li>
          <li>Tiletamine more potent NMDA blockade</li>
          <li>Tiletamine more arrhythmogenic in cat</li>
          <li>Recovery from tiletamine more prolonged + can be rougher</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Open eyes (cataleptic — same as ketamine) · lubricate</li>
          <li>Hypersalivation</li>
          <li>↑ HR, ↑ BP transiently</li>
          <li>Apneustic breathing</li>
          <li><strong>Rough recovery</strong> — vocalization, paddling, dysphoria · provide quiet dim recovery, can give additional benzo or dexmed</li>
          <li>Recovery time prolonged in cat (2-4 hr typical)</li>
          <li><strong>Cat with renal insufficiency</strong> — accumulation, prolonged recovery</li>
          <li>Hyperthermia possible</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li><strong>Quiet, dim, warm</strong> recovery essential</li>
          <li>Lubricate eyes</li>
          <li>Monitor temp (hyperthermia common in cat)</li>
          <li>Atipamezole partial reversal (if dexmed in combo) for smoother recovery</li>
          <li>NO complete benzodiazepine reversal (flumazenil) — recovery worse with tiletamine still present</li>
          <li>Tip: <strong>"Single best fractious cat protocol"</strong> = Kitty Magic (Zoletil + Dexmed + Buprenorphine IM)</li>
          <li>Tip: <strong>Zoletil ใน Thailand:</strong> มีและใช้บ่อย · ราคาเหมาะสม · keep in clinic stock</li>
          <li>Tip: <strong>Cat with CKD: avoid or low-dose</strong> — alfaxalone-based combo อาจดีกว่า</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-nmb',
    titleEn: 'Neuromuscular Blockers (Atracurium, Rocuronium) + Sugammadex',
    titleTh: 'ยาคลายกล้ามเนื้อ (NMB)',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['NMB', 'atracurium', 'rocuronium', 'sugammadex', 'paralysis'],
    aliases: ['neuromuscular blocker', 'paralytic', 'NMB'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Ophthalmic surgery</strong> — eye centered (essential for intraocular surgery, lens removal)</li>
          <li>Mechanical ventilation (avoid spontaneous breathing fight ventilator)</li>
          <li>Deep abdominal/thoracic surgery (improved muscle relaxation)</li>
          <li>Tetanus management</li>
          <li>Difficult intubation — facilitate rapid intubation (rare in vet)</li>
          <li>MRI/CT in moving patient</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Without ventilator + ETT secured</strong> — patient cannot breathe!</li>
          <li>Without ability to monitor neuromuscular block (train-of-four ideally)</li>
          <li>Without reversal agent ready (sugammadex or neostigmine)</li>
          <li>Inadequate sedation/anesthesia (paralyzed BUT awake = nightmare scenario)</li>
          <li>Operator inexperience</li>
          <li>Myasthenia gravis</li>
          <li>Severe electrolyte abnormality (hypokalemia, hypermagnesemia)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Atracurium (Tracrium):</strong>
            <ul>
              <li>Dose: 0.2 mg/kg IV bolus</li>
              <li>Onset: 3-5 min</li>
              <li>Duration: 30-40 min</li>
              <li><strong>Hofmann elimination</strong> — non-organ dependent (good for renal/hepatic patient)</li>
              <li>Histamine release possible (rare, mild)</li>
            </ul>
          </li>
          <li><strong>Rocuronium:</strong>
            <ul>
              <li>Dose: 0.4-0.6 mg/kg IV (low end OK with sevo)</li>
              <li>Onset: 1-3 min (faster than atracurium)</li>
              <li>Duration: 30-45 min</li>
              <li>Liver-cleared (caution hepatic dz)</li>
              <li><strong>Reversed specifically by sugammadex</strong></li>
            </ul>
          </li>
          <li><strong>Vecuronium:</strong>
            <ul>
              <li>Dose: 0.1 mg/kg IV</li>
              <li>Duration: 25-30 min</li>
              <li>Liver/renal cleared</li>
            </ul>
          </li>
          <li><strong>Reversal agents:</strong>
            <ul>
              <li><strong>Sugammadex:</strong> 2-4 mg/kg IV (8-16 mg/kg if profound) — encapsulates rocuronium · onset 1-2 min</li>
              <li><strong>Neostigmine + glycopyrrolate:</strong> 0.04 mg/kg neostigmine + 0.01 mg/kg glycopyrrolate IV (anticholinesterase, traditional)</li>
            </ul>
          </li>
          <li><strong>Train-of-four (TOF) monitor</strong> — measures depth of block (gold standard)</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> Non-depolarizing competitive antagonists at nicotinic ACh receptor at neuromuscular junction → flaccid paralysis · NO sedation, NO analgesia</p>

        <p><strong>Setup for ophthalmic surgery (cataract example):</strong></p>
        <ol>
          <li>Standard induction → intubate</li>
          <li>Confirm adequate anesthetic depth (sevo/iso 1.5-2× MAC)</li>
          <li>Connect to ventilator — set IPPV: TV 10-15 mL/kg, RR 10-12, PEEP 3-5</li>
          <li>Apply TOF monitor at facial nerve (eye twitch) or peroneal (foot twitch)</li>
          <li>Baseline TOF reading (4 strong twitches)</li>
          <li>Inject atracurium 0.2 mg/kg IV</li>
          <li>Within 3-5 min: TOF zero or 1 twitch · eye centered</li>
          <li>Surgery proceeds</li>
          <li>Top-up dose 1/3 original when 1-2 twitches return</li>
        </ol>

        <p><strong>End of case — reversal:</strong></p>
        <ol>
          <li>Stop NMB (no more dosing)</li>
          <li>Wait until TOF returns ≥ 2 twitches</li>
          <li>If using rocuronium → <strong>sugammadex 2-4 mg/kg IV</strong> (rapid, complete)</li>
          <li>If using atracurium → <strong>neostigmine 0.04 mg/kg + glycopyrrolate 0.01 mg/kg IV</strong> (slower, may incomplete)</li>
          <li>TOF should return to 4 strong twitches before extubation</li>
          <li>Continue ventilation until spontaneous breathing strong</li>
        </ol>

        <p><strong>Sugammadex special properties (3rd ed emphasis):</strong></p>
        <ul>
          <li>Modified γ-cyclodextrin ring — encapsulates rocuronium (and to lesser extent vecuronium)</li>
          <li>Rapid (1-2 min) reversal even of profound block</li>
          <li>Does NOT work for atracurium / cisatracurium</li>
          <li>Available but expensive — reserve for specific scenarios</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>"Awake paralysis"</strong> — anesthesia too light → patient awake but cannot move/breathe (catastrophic) · always confirm depth before NMB</li>
          <li>Inadequate ventilation → hypoxemia, hypercapnia</li>
          <li>Histamine release (atracurium — rare, mild)</li>
          <li>Anaphylaxis (rare)</li>
          <li>Residual block at extubation → hypoventilation, aspiration</li>
          <li>Drug interactions: aminoglycosides potentiate · hypothermia prolongs block</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>TOF must be 4/4 strong before extubation</li>
          <li>Spontaneous breathing must be effective (TV adequate, no diaphragm fatigue)</li>
          <li>Monitor closely 30 min post-extubation</li>
          <li>Tip: <strong>"Anesthesia first, paralysis second"</strong> — NEVER paralyze without confirmed deep anesthesia</li>
          <li>Tip: <strong>"TOF monitor mandatory"</strong> — guess work = malpractice</li>
          <li>Tip: <strong>Atracurium = workhorse</strong> · cost-effective, organ-independent · default choice</li>
          <li>Tip: <strong>Rocuronium + Sugammadex = ophthalmic dream team</strong> · expensive but rapid + reliable</li>
          <li>Tip: <strong>Reserve for specific indications</strong> — most surgeries don't need NMB</li>
        </ul>
      `
    }
  },


  /* ============================================================
     INHALANT (เพิ่มเติม) — Other Inhalants (1)
     ============================================================ */

  {
    id: 'anes-other-inhalants',
    titleEn: 'Other Inhalants (N2O, Halothane, Desflurane)',
    titleTh: 'Inhalant อื่น ๆ (N2O, Halothane, Desflurane)',
    type: 'procedure',
    system: 'inhalant',
    species: ['dog', 'cat'],
    tags: ['nitrous oxide', 'halothane', 'desflurane', 'methoxyflurane', 'historical'],
    aliases: ['N2O', 'halothane', 'desflurane', 'laughing gas'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Nitrous oxide (N2O):</strong>
            <ul>
              <li>MAC reduction (50-66% N2O reduces inhalant ~25-30%)</li>
              <li>"Second gas effect" speeds induction</li>
              <li>Mild analgesia + amnesia</li>
              <li>Rare in modern small animal practice</li>
            </ul>
          </li>
          <li><strong>Halothane:</strong>
            <ul>
              <li>Historical use only — withdrawn from most countries</li>
              <li>Knowledge for exam / older textbook reference</li>
            </ul>
          </li>
          <li><strong>Desflurane:</strong>
            <ul>
              <li>Ultra-fast onset/offset</li>
              <li>Long procedure where rapid recovery desired</li>
              <li>Specialty/research setting</li>
            </ul>
          </li>
          <li><strong>Methoxyflurane:</strong>
            <ul>
              <li>Historical · withdrawn (renal toxicity from fluoride metabolite)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>N2O specific:</strong>
            <ul>
              <li>Closed gas-filled spaces (pneumothorax, GDV, intestinal obstruction) — N2O diffuses in, expands</li>
              <li>Hypoxemia / severe pulmonary disease (limits FiO2 ≤ 75%)</li>
              <li>Pregnancy (debate — vit B12 metabolism interference)</li>
              <li>Diffusion hypoxia at end of case</li>
            </ul>
          </li>
          <li><strong>Halothane:</strong>
            <ul>
              <li>Hepatic disease (halothane hepatitis)</li>
              <li>Arrhythmia history (sensitizes to catecholamines)</li>
              <li>Pheochromocytoma</li>
            </ul>
          </li>
          <li><strong>Desflurane:</strong>
            <ul>
              <li>Mask induction (very irritating airway — coughing, laryngospasm)</li>
              <li>Hypovolemia (potent vasodilator)</li>
              <li>Cost-prohibitive in most practices</li>
            </ul>
          </li>
        </ul>
      `,
      preparation: `
        <p><strong>Nitrous Oxide (N2O):</strong></p>
        <ul>
          <li>MAC: 200% (thus &gt; 100% — cannot be sole anesthetic)</li>
          <li>Blue cylinder (color code US/Europe)</li>
          <li>Concentration: 50-66% with 33-50% O2</li>
          <li>Specific N2O flowmeter required</li>
          <li>Scavenger system mandatory (chronic exposure → bone marrow suppression in staff)</li>
          <li>Properties: most insoluble (fast on/off), MAC-sparer, mild analgesic</li>
        </ul>

        <p><strong>Halothane:</strong></p>
        <ul>
          <li>MAC: 0.87% dog · 1.14% cat</li>
          <li>Maintenance: 1-2%</li>
          <li>Solubility: 2.5 (slow uptake/elimination)</li>
          <li>Liver-metabolized 20-25% (most of any inhalant)</li>
          <li>Withdrawn from most modern markets</li>
        </ul>

        <p><strong>Desflurane (Suprane):</strong></p>
        <ul>
          <li>MAC: 7.2% dog · 9.8% cat</li>
          <li>Maintenance: 8-12%</li>
          <li>Solubility: 0.42 (most insoluble of modern inhalants — fastest on/off)</li>
          <li>Boils at 22.8°C — requires <strong>heated specialized vaporizer</strong> ($$$)</li>
          <li>Pungent, airway-irritating</li>
        </ul>

        <p><strong>Methoxyflurane:</strong></p>
        <ul>
          <li>MAC: 0.23% (most potent ever used)</li>
          <li>Long-onset, long-recovery (very soluble)</li>
          <li>Fluoride metabolite → renal toxicity → withdrawn</li>
          <li>Rare specialty use (analgesia, "Penthrox" inhaler in EMS)</li>
        </ul>
      `,
      steps: `
        <p><strong>N2O usage protocol (when used):</strong></p>
        <ol>
          <li>Confirm no closed gas spaces (no GDV, no pneumothorax)</li>
          <li>Set O2 flow first (calculated for patient)</li>
          <li>Add N2O at 1-2× the O2 flow</li>
          <li>Maintain FiO2 ≥ 33%</li>
          <li>Maintain inhalant at reduced concentration (iso 1% with N2O 60%)</li>
          <li><strong>Diffusion hypoxia prevention:</strong> at end of case, turn off N2O 5-10 min before extubation, give 100% O2 for last 5 min</li>
        </ol>

        <p><strong>Why use historical inhalants for teaching:</strong></p>
        <ul>
          <li>Boards exams — old textbook content</li>
          <li>Understanding pharmacology evolution</li>
          <li>Emerging country practice (some still use halothane)</li>
          <li>Comparison frameworks (MAC, solubility, organ effects)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Inhalants — เทียบใน 1 ตาราง</span>
          <table>
            <tr>
              <th>ยา</th><th>MAC (หมา)</th><th>Solubility</th><th>เร็ว/ช้า</th><th>ใช้วันนี้</th>
            </tr>
            <tr><td>Halothane</td><td>0.87%</td><td>2.5</td><td>ช้า 🐢</td><td>เลิกแล้ว ❌</td></tr>
            <tr><td><strong>Isoflurane</strong></td><td>1.3%</td><td>1.4</td><td>กลาง 🚶</td><td>มาตรฐาน ⭐</td></tr>
            <tr><td><strong>Sevoflurane</strong></td><td>2.4%</td><td>0.69</td><td>เร็ว 🏃</td><td>Premium 💎</td></tr>
            <tr><td>Desflurane</td><td>7.2%</td><td>0.42</td><td>เร็วสุด 🏎️</td><td>เฉพาะทาง</td></tr>
            <tr><td>N2O</td><td>200%</td><td>0.47</td><td>เร็ว 🏃</td><td>Adjunct เท่านั้น</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>กฎสำคัญ:</strong> Solubility ↓ = on/off เร็ว · MAC สูง = ต้องใช้ความเข้มข้นมาก<br>
          📌 <strong>"Iso คุ้ม Sevo เร็ว"</strong> — เลือกตามต้นทุน + ความเร็วที่ต้องการ<br>
          📌 <strong>Cat MAC สูงกว่าหมา 20-30%</strong> ทุกตัว</p>
        </div>
      `,
      complications: `
        <ul>
          <li>N2O: diffusion hypoxia, expansion of gas spaces, B12 deficiency (chronic), bone marrow suppression staff</li>
          <li>Halothane: liver injury, arrhythmia (catecholamine sensitization)</li>
          <li>Desflurane: airway irritation, sympathetic surge at high concentration, vasodilation</li>
          <li>Methoxyflurane: fluoride nephrotoxicity</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>For N2O: 100% O2 final 5 min before extubation</li>
          <li>Tip: <strong>"In Thailand: iso ก็พอ"</strong> — no real need for N2O, halothane, desflurane in routine practice</li>
          <li>Tip: <strong>Teach for completeness</strong> — students should understand the evolution + comparison</li>
          <li>Tip: <strong>"Future: TIVA + xenon?"</strong> — cutting edge research uses xenon (ideal but cost-prohibitive)</li>
        </ul>
      `
    }
  },


  /* ============================================================
     EMERGENCY (เพิ่มเติม) — Reversal, Vasopressors, Anti-arrhythmics,
     CPR drugs, Anaphylaxis (5)
     ============================================================ */

  {
    id: 'anes-reversal-agents',
    titleEn: 'Reversal Agents (Naloxone, Atipamezole, Flumazenil, Yohimbine)',
    titleTh: 'ยาทำให้หาย (Reversal)',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['naloxone', 'atipamezole', 'flumazenil', 'yohimbine', 'reversal', 'antagonist'],
    aliases: ['reversal', 'naloxone', 'atipamezole', 'flumazenil'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Emergency reversal</strong> ของ over-sedation / respiratory depression</li>
          <li>Excessive duration of sedation</li>
          <li>Recovery acceleration (selective use)</li>
          <li>Diagnostic — confirm drug effect (uncertain etiology of altered mentation)</li>
          <li>Neonate resuscitation (if mom received opioid)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Routine "speed up recovery" — let drug wear off naturally is safer</li>
          <li>Reversal of analgesia ที่ patient ยังต้องการ — partial reversal preferred</li>
          <li>Naloxone in chronic opioid user — withdrawal syndrome</li>
        </ul>
      `,
      preparation: `
        <p><strong>1. Naloxone (Narcan) — opioid antagonist:</strong></p>
        <ul>
          <li>Concentration: 0.4 mg/mL</li>
          <li><strong>Dose: 0.04 mg/kg IV/IM/IO/IN/sublingual (titrate)</strong></li>
          <li>Onset: 1-2 min IV · 5 min IM</li>
          <li>Duration: 30-60 min (SHORTER than most opioids → re-narcotization possible)</li>
          <li>Reverses analgesia + sedation completely (downside)</li>
          <li>Cat dose same as dog</li>
          <li>Neonate: 1 drop sublingual × pups affected by maternal opioid</li>
        </ul>

        <p><strong>2. Atipamezole (Antisedan) — α2 antagonist:</strong></p>
        <ul>
          <li>Concentration: 5 mg/mL</li>
          <li><strong>Dose:</strong>
            <ul>
              <li><strong>Equal volume IM</strong> as dexmed/medetomidine given (1:1 mL ratio)</li>
              <li>Or 5× the µg dose of dexmed</li>
              <li>Cat: same volume IM</li>
            </ul>
          </li>
          <li>Onset: 5-15 min</li>
          <li>Duration: outlasts most α2 doses (45-60 min)</li>
          <li>IM preferred (smoother) · IV reserved for emergency (can cause excitement)</li>
          <li>Reverses sedation + analgesia + bradycardia</li>
        </ul>

        <p><strong>3. Flumazenil (Mazicon, Anexate) — benzodiazepine antagonist:</strong></p>
        <ul>
          <li>Concentration: 0.1 mg/mL</li>
          <li><strong>Dose: 0.01-0.04 mg/kg IV slow (titrate)</strong></li>
          <li>Onset: 1-2 min</li>
          <li>Duration: 30-60 min (shorter than benzo → re-sedation possible)</li>
          <li>Reverses diazepam, midazolam, zolazepam (in Zoletil)</li>
          <li>Limited use — benzos rarely cause respiratory failure alone</li>
        </ul>

        <p><strong>4. Yohimbine — α2 antagonist (older):</strong></p>
        <ul>
          <li><strong>Dose: 0.1 mg/kg IV</strong></li>
          <li>Reverses xylazine specifically</li>
          <li>Used in some places where atipamezole unavailable</li>
          <li>Shorter duration than atipamezole</li>
        </ul>
      `,
      steps: `
        <p><strong>Indication-driven approach:</strong></p>

        <p><strong>Scenario 1: Opioid overdose / respiratory depression</strong></p>
        <ol>
          <li>Support ABC (intubate + ventilate if needed)</li>
          <li>Dilute naloxone: 0.4 mg in 10 mL saline (= 0.04 mg/mL)</li>
          <li>Give 0.5-1 mL IV bolus, wait 1-2 min, titrate</li>
          <li>Goal: respiration restored, NOT fully awake</li>
          <li>Monitor 60-90 min — re-narcotization possible (esp morphine, methadone)</li>
          <li>Re-dose if respiration drops again</li>
        </ol>

        <p><strong>Scenario 2: Dexmed prolonged sedation / hypotension from BP drop</strong></p>
        <ol>
          <li>Equal volume atipamezole IM (e.g., dexmed 0.2 mL → atip 0.2 mL IM)</li>
          <li>Wait 10-15 min · patient awakens smoothly</li>
          <li>If only partial wake desired (e.g., recovery from spay) → 50% dose IM</li>
        </ol>

        <p><strong>Scenario 3: Benzodiazepine over-sedation</strong></p>
        <ol>
          <li>Flumazenil 0.02 mg/kg IV slow</li>
          <li>Repeat q3-5 min if needed</li>
          <li>Watch for re-sedation</li>
        </ol>

        <p><strong>Scenario 4: Reversal during surgery (rare scenario)</strong></p>
        <ul>
          <li>Patient awakening during surgery → DEEPEN, don't reverse</li>
          <li>Reversal during surgery only for life-threatening complication of drug</li>
        </ul>

        <p><strong>"Partial reversal" trick (preserve analgesia):</strong></p>
        <ul>
          <li>Pure µ opioid over-sedation → give butorphanol 0.1-0.2 mg/kg IV (mixed agonist-antagonist) → reverses excess respiratory depression but maintains some analgesia</li>
          <li>Better than full naloxone reversal in post-op patient still in pain</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Re-narcotization (naloxone)</strong> — short half-life, always re-dose ready</li>
          <li><strong>Sudden return of pain</strong> — reverse analgesia uncomfortable for post-op patient</li>
          <li><strong>Sympathetic surge</strong> from sudden reversal → hypertension, tachycardia, arrhythmia</li>
          <li><strong>Excitement / dysphoria</strong> from atipamezole IV (use IM preferred)</li>
          <li>Withdrawal in chronic opioid user (rare in vet)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continued monitoring 60-90 min post-reversal (re-sedation)</li>
          <li>Provide alternative analgesia (NSAID, local block) if reversed opioid in painful patient</li>
          <li>Reverse only when needed</li>
          <li>Tip: <strong>"Reversal is last resort, not routine"</strong></li>
          <li>Tip: <strong>Atipamezole IM > IV</strong> — smoother awakening</li>
          <li>Tip: <strong>Naloxone 1 drop sublingual</strong> for neonates after maternal opioid (pups born weak → drop on tongue)</li>
          <li>Tip: <strong>Stock all 3 (+ yohimbine if using xylazine)</strong> in clinic</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-vasopressors',
    titleEn: 'Vasopressors and Inotropes',
    titleTh: 'ยาขึ้นความดัน + กระตุ้นหัวใจ',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['vasopressor', 'inotrope', 'dopamine', 'dobutamine', 'ephedrine', 'norepinephrine', 'phenylephrine'],
    aliases: ['vasopressor', 'inotrope', 'pressor'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Anesthetic hypotension refractory to:
            <ul>
              <li>Anesthetic depth reduction</li>
              <li>Fluid bolus</li>
              <li>MAC adjuncts</li>
            </ul>
          </li>
          <li>Septic shock (refractory hypotension)</li>
          <li>Cardiogenic shock</li>
          <li>Neurogenic shock</li>
          <li>Anaphylaxis (epinephrine first-line)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hypovolemia not yet corrected (fix volume first!)</li>
          <li>Tachyarrhythmia (some pressors worsen)</li>
          <li>Drug-specific contraindications</li>
        </ul>
      `,
      preparation: `
        <p><strong>1. Ephedrine (rapid bolus drug):</strong></p>
        <ul>
          <li>Mixed direct + indirect (releases norepinephrine)</li>
          <li>α + β effects</li>
          <li><strong>Dose: 0.05-0.1 mg/kg IV bolus</strong></li>
          <li>Onset: 1-2 min · Duration: 10-15 min</li>
          <li>Use: short-term BP rescue (e.g., transient hypotension under anesthesia)</li>
          <li>Tachyphylaxis with repeat dosing</li>
        </ul>

        <p><strong>2. Dopamine (dose-dependent CRI):</strong></p>
        <ul>
          <li>Endogenous catecholamine precursor</li>
          <li>Effects vary with dose:
            <ul>
              <li><strong>Low (1-3 µg/kg/min):</strong> dopaminergic — renal vasodilation (debated efficacy)</li>
              <li><strong>Mid (3-10 µg/kg/min):</strong> β1 — inotrope, ↑ CO, mild ↑ HR</li>
              <li><strong>High (&gt; 10 µg/kg/min):</strong> α — vasoconstriction</li>
            </ul>
          </li>
          <li>Standard CRI: 5-10 µg/kg/min</li>
          <li>Mix: 200 mg in 250 mL → 800 µg/mL (or use chart)</li>
        </ul>

        <p><strong>3. Dobutamine (pure inotrope):</strong></p>
        <ul>
          <li>Selective β1-agonist</li>
          <li>↑ contractility + ↑ CO without much HR change</li>
          <li>Mild vasodilation (β2)</li>
          <li><strong>CRI: 2-10 µg/kg/min</strong></li>
          <li>Best for: cardiogenic shock, low CO state, DCM, CHF</li>
          <li>Mix: 250 mg in 250 mL → 1000 µg/mL</li>
        </ul>

        <p><strong>4. Phenylephrine (pure vasoconstrictor):</strong></p>
        <ul>
          <li>Selective α1-agonist</li>
          <li>Vasoconstriction → ↑ SVR → ↑ BP · NO inotropy</li>
          <li>Reflex bradycardia possible (baroreceptor)</li>
          <li><strong>Bolus: 1-3 µg/kg IV</strong> · <strong>CRI: 0.5-3 µg/kg/min</strong></li>
          <li>Best for: vasoplegic state with adequate CO (e.g., regional anesthesia hypotension)</li>
        </ul>

        <p><strong>5. Norepinephrine (potent α + β1):</strong></p>
        <ul>
          <li>Vasoconstriction + mild inotropy</li>
          <li><strong>CRI: 0.05-0.5 µg/kg/min</strong></li>
          <li>First-line in septic shock (replacing dopamine in human and modern vet)</li>
          <li>Central line ideal (extravasation = tissue necrosis)</li>
          <li>Mix: 4 mg in 250 mL → 16 µg/mL</li>
        </ul>

        <p><strong>6. Vasopressin (V1 receptor):</strong></p>
        <ul>
          <li>Non-adrenergic vasoconstriction (V1)</li>
          <li>Useful in catecholamine-refractory shock (sepsis)</li>
          <li>CPR alternative to 2nd-dose epinephrine</li>
          <li><strong>Dose:</strong> 0.8 U/kg IV bolus (CPR) · 0.5-2 mU/kg/min CRI</li>
        </ul>
      `,
      steps: `
        <p><strong>Stepwise approach to anesthetic hypotension:</strong></p>
        <ol>
          <li><strong>Confirm</strong> reading (cuff size, motion, hypothermia)</li>
          <li><strong>Decrease anesthetic depth</strong> 0.5% — wait 5 min</li>
          <li><strong>Fluid bolus</strong> 10-20 mL/kg crystalloid over 10-15 min</li>
          <li><strong>Add MAC adjuncts</strong> (opioid CRI, lidocaine CRI dog)</li>
          <li><strong>Bolus ephedrine</strong> 0.05-0.1 mg/kg IV — temporizing measure</li>
          <li><strong>Start CRI</strong> if persistent:
            <ul>
              <li>Dopamine 5-10 µg/kg/min (general purpose)</li>
              <li>Dobutamine 2-10 µg/kg/min (if low CO suspected, cardiac patient)</li>
              <li>Norepinephrine 0.05-0.5 µg/kg/min (sepsis, refractory)</li>
            </ul>
          </li>
          <li><strong>Titrate</strong> to MAP &gt; 65 mmHg</li>
          <li><strong>Reassess</strong> volume status, surgical cause, drug levels</li>
        </ol>

        <p><strong>Drug selection by clinical scenario:</strong></p>

        <div class="mnemonic flowchart">
          <span class="mnem-title">Vasopressor/Inotrope — เลือกตัวไหน?</span>

          <div class="flow-step decision">📍 BP ต่ำ — สาเหตุอะไร?</div>
          <div class="flow-arrow">▼</div>

          <div class="flow-branch">
            <div class="flow-step action">
              <span class="flow-label">ทั่วไป</span>
              Routine anesthetic hypotension<br>
              → <strong>Ephedrine bolus → Dopamine CRI</strong>
            </div>
            <div class="flow-step danger">
              <span class="flow-label">หัวใจ</span>
              Cardiac (DCM, MMVD)<br>
              → <strong>Dobutamine CRI</strong>
            </div>
          </div>

          <div class="flow-branch">
            <div class="flow-step danger">
              <span class="flow-label">Sepsis</span>
              Septic shock<br>
              → <strong>Norepinephrine ± Vasopressin</strong>
            </div>
            <div class="flow-step action">
              <span class="flow-label">Regional</span>
              Spinal/epidural<br>
              → <strong>Phenylephrine</strong>
            </div>
          </div>

          <div class="flow-branch">
            <div class="flow-step danger">
              <span class="flow-label">แพ้</span>
              Anaphylaxis<br>
              → <strong>Epinephrine</strong>
            </div>
            <div class="flow-step danger">
              <span class="flow-label">CPR</span>
              Arrest<br>
              → <strong>Epinephrine + Vasopressin</strong>
            </div>
          </div>

          <p class="mnem-tip">📌 <strong>"Dopamine = workhorse"</strong> ใช้ทั่วไป · <strong>"Dobutamine = หัวใจ"</strong> เน้น contractility · <strong>"Norepi = sepsis"</strong> α + β1</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Tachyarrhythmia (esp dopamine high dose, ephedrine)</li>
          <li>Excessive vasoconstriction → organ ischemia (kidney, GI)</li>
          <li>Extravasation injury (norepinephrine, dopamine high) → tissue necrosis</li>
          <li>Pulmonary edema (excess inotropy + volume)</li>
          <li>Tachyphylaxis (ephedrine — repeated bolus)</li>
          <li>Reflex bradycardia (phenylephrine)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continuous BP monitoring (NIBP q5min minimum, arterial line ideal)</li>
          <li>ECG continuous</li>
          <li>Urine output (catheter if prolonged)</li>
          <li>Wean off CRI gradually (50% reduction q15-30 min)</li>
          <li>Tip: <strong>"Volume FIRST, pressors second"</strong> — fixing volume often eliminates need</li>
          <li>Tip: <strong>"Dopamine = workhorse"</strong> in vet · easy to mix, dose-flexible</li>
          <li>Tip: <strong>Have ready calculation cards</strong> — no time to math during crisis</li>
          <li>Tip: <strong>"Norepinephrine is replacing dopamine"</strong> in modern protocols (esp sepsis)</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-antiarrhythmics',
    titleEn: 'Anti-arrhythmic Drugs',
    titleTh: 'ยารักษา arrhythmia',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['lidocaine', 'esmolol', 'amiodarone', 'procainamide', 'diltiazem', 'magnesium', 'arrhythmia'],
    aliases: ['anti-arrhythmic', 'lidocaine', 'esmolol'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Ventricular arrhythmias</strong> (VPCs, VT) — lidocaine, procainamide, amiodarone</li>
          <li><strong>Supraventricular tachycardia (SVT)</strong> — diltiazem, esmolol</li>
          <li><strong>Atrial fibrillation</strong> rate control — diltiazem, esmolol, digoxin</li>
          <li><strong>Tachyarrhythmia</strong> — esmolol</li>
          <li><strong>Refractory VT/VF</strong> — amiodarone</li>
          <li><strong>Torsades / refractory VF</strong> — magnesium</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Specific drug contraindications (see each)</li>
          <li>Bradyarrhythmia (don't slow HR more)</li>
          <li>Heart block (without pacemaker support)</li>
          <li>Hypotension severe</li>
        </ul>
      `,
      preparation: `
        <p><strong>1. Lidocaine (Class IB — Na+ channel blocker):</strong></p>
        <ul>
          <li><strong>Dog:</strong>
            <ul>
              <li>Bolus: <strong>2 mg/kg IV</strong> (over 1-2 min) · can repeat × 2 to total 8 mg/kg</li>
              <li>CRI: <strong>25-75 µg/kg/min</strong> (after bolus)</li>
            </ul>
          </li>
          <li><strong>Cat: VERY low dose — 0.25-0.5 mg/kg IV bolus only</strong> (cat = lidocaine cardiotoxic)</li>
          <li>Indication: VPCs (frequent &gt; 6/min, R-on-T, multiform), VT</li>
          <li>Onset: 30-60 sec IV · duration 10-20 min (so CRI needed)</li>
          <li>Side effects: GI, neuro (twitching, seizure), arrhythmia (toxic dose)</li>
        </ul>

        <p><strong>2. Esmolol (Class II — β1-blocker, ultra-short):</strong></p>
        <ul>
          <li>Concentration: 10 mg/mL</li>
          <li><strong>Bolus: 0.05-0.5 mg/kg IV</strong> over 1 min</li>
          <li><strong>CRI: 25-200 µg/kg/min</strong></li>
          <li>Half-life ~9 min — quick on/off, good for testing β-blocker tolerance</li>
          <li>Indication: SVT, atrial fib rate control, hyperdynamic state</li>
          <li>Caution: heart failure, asthma, bradycardia</li>
        </ul>

        <p><strong>3. Amiodarone (Class III — K+ channel blocker, complex):</strong></p>
        <ul>
          <li>Concentration: 50 mg/mL</li>
          <li><strong>Loading: 5 mg/kg IV slow over 10-30 min</strong> (dilute, watch for anaphylaxis)</li>
          <li>CRI: 0.8 mg/kg/h × 6 hr · then 0.4 mg/kg/h</li>
          <li>Indication: refractory VT, VF post-cardioversion, atrial fib</li>
          <li>Side effects: anaphylaxis (polysorbate 80 vehicle), hypotension, hepatotoxicity, thyroid (long-term)</li>
        </ul>

        <p><strong>4. Procainamide (Class IA — Na+ channel + K+ block):</strong></p>
        <ul>
          <li>Bolus: 5-10 mg/kg IV slow (over 5 min)</li>
          <li>CRI: 25-50 µg/kg/min</li>
          <li>Use: lidocaine-refractory VT</li>
          <li>Side effects: hypotension, lupus-like syndrome (chronic)</li>
        </ul>

        <p><strong>5. Diltiazem (Class IV — Ca2+ channel blocker):</strong></p>
        <ul>
          <li>Bolus: 0.05-0.25 mg/kg IV slow over 2-5 min</li>
          <li>CRI: 1-5 µg/kg/min</li>
          <li>Use: SVT, atrial fib rate control</li>
          <li>Caution: cardiac dysfunction, hypotension</li>
        </ul>

        <p><strong>6. Magnesium sulfate:</strong></p>
        <ul>
          <li>Dose: 0.15-0.3 mEq/kg IV slow over 10-15 min (= 18-37 mg/kg)</li>
          <li>Use: torsades, refractory VF, hypomagnesemia</li>
          <li>Side effects: hypotension, weakness</li>
        </ul>
      `,
      steps: `
        <p><strong>Approach to perioperative arrhythmia:</strong></p>
        <ol>
          <li><strong>Identify</strong> — ECG diagnosis</li>
          <li><strong>Address underlying cause:</strong>
            <ul>
              <li>Hypoxemia → fix ventilation/oxygen</li>
              <li>Hypotension → fluid + pressor</li>
              <li>Acid-base → correct</li>
              <li>Electrolytes (K, Mg, Ca) → correct</li>
              <li>Drug effect → reduce inhalant, reverse if needed</li>
            </ul>
          </li>
          <li><strong>Decide if treatment needed:</strong>
            <ul>
              <li>Asymptomatic, stable BP → observe</li>
              <li>Hemodynamically unstable, R-on-T, multiform VPCs → TREAT</li>
            </ul>
          </li>
          <li><strong>First-line:</strong>
            <ul>
              <li>Ventricular: lidocaine (dog) — bolus + CRI</li>
              <li>Supraventricular: vagal maneuver → diltiazem/esmolol</li>
            </ul>
          </li>
          <li><strong>Refractory:</strong> amiodarone, procainamide, magnesium</li>
        </ol>

        <p><strong>Common scenarios:</strong></p>
        <ul>
          <li><strong>GDV with VPCs:</strong> lidocaine 2 mg/kg IV bolus + CRI 50 µg/kg/min · electrolytes K, Mg replace</li>
          <li><strong>Splenic mass with VPCs:</strong> same as GDV approach</li>
          <li><strong>Boxer ARVC perioperative:</strong> continue sotalol or mexiletine, lidocaine ready</li>
          <li><strong>Atrial fib (Doberman DCM):</strong> diltiazem rate control · digoxin chronic</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Lidocaine toxicity:</strong> twitching → seizure → arrhythmia → arrest (cat very sensitive!)</li>
          <li>Hypotension (esmolol, amiodarone, diltiazem)</li>
          <li>Bradycardia / asystole (β-blocker, Ca2+ blocker)</li>
          <li>Heart block</li>
          <li>Anaphylaxis (amiodarone vehicle)</li>
          <li>Pro-arrhythmic effects (paradoxical worsening)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continuous ECG 24-48 hr post-op</li>
          <li>Repeat ECG / Holter if persistent</li>
          <li>Address underlying disease (HCM workup, etc.)</li>
          <li>Long-term anti-arrhythmic ถ้าจำเป็น (sotalol, mexiletine)</li>
          <li>Tip: <strong>"Treat the patient, not the monitor"</strong> — VPCs without symptom may not need therapy</li>
          <li>Tip: <strong>Lidocaine NEVER in cat</strong> at doses used for dog — cardiotoxic</li>
          <li>Tip: <strong>Always check K + Mg</strong> in arrhythmia workup — fix electrolyte first</li>
          <li>Tip: <strong>R-on-T phenomenon = high risk for VF</strong> — treat aggressively</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-cpr-drugs',
    titleEn: 'CPR Drugs (Epinephrine, Vasopressin, Atropine)',
    titleTh: 'ยาที่ใช้ใน CPR',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['CPR', 'epinephrine', 'vasopressin', 'atropine', 'crash', 'arrest'],
    aliases: ['CPR drugs', 'crash drugs', 'epi'],
    source: 'Ko Anesthesia Handbook, 3rd ed. + RECOVER 2024',
    sections: {
      indications: `
        <ul>
          <li><strong>Cardiopulmonary arrest</strong> (asystole, PEA, VF, pulseless VT)</li>
          <li>Severe bradycardia with hemodynamic compromise</li>
          <li>Anaphylactic shock (epinephrine)</li>
          <li>Refractory hypotension (epinephrine)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None during arrest (this IS the contraindication-free zone)</li>
          <li>Outside arrest: high-dose epinephrine bolus rare indication</li>
        </ul>
      `,
      preparation: `
        <p><strong>1. Epinephrine (Adrenaline) — first-line CPR:</strong></p>
        <ul>
          <li>Concentration: 1 mg/mL (1:1000)</li>
          <li><strong>Low dose: 0.01 mg/kg IV/IO q3-5 min</strong> (RECOVER 2024 standard)</li>
          <li>High dose: 0.1 mg/kg IV — only if low-dose fails (refractory)</li>
          <li>ETT: 0.1 mg/kg dilute in 5-10 mL saline — when no IV/IO</li>
          <li>Effect: α-vasoconstriction (↑ coronary + cerebral perfusion) + β-stimulation</li>
        </ul>

        <p><strong>2. Atropine — vagal-mediated arrest:</strong></p>
        <ul>
          <li><strong>Dose: 0.04 mg/kg IV/IO q3-5 min</strong></li>
          <li>Use: asystole/PEA with vagal cause (visceral surgery, oculocardiac)</li>
          <li>Limited evidence in human CPR — vet use continues</li>
        </ul>

        <p><strong>3. Vasopressin — alternative to repeat epinephrine:</strong></p>
        <ul>
          <li><strong>Dose: 0.8 U/kg IV/IO once</strong></li>
          <li>Substitute for 2nd-3rd epinephrine dose</li>
          <li>Non-adrenergic V1 receptor — vasoconstriction</li>
          <li>Less arrhythmogenic than epi</li>
        </ul>

        <p><strong>4. Calcium gluconate — hyperkalemia:</strong></p>
        <ul>
          <li>10% solution: 0.5-1 mL/kg slow IV</li>
          <li>Cardioprotection (does NOT lower K, just stabilizes myocardium)</li>
          <li>Use: documented hyperK with arrhythmia (urethral obstruction, AKI)</li>
        </ul>

        <p><strong>5. Sodium bicarbonate — prolonged arrest only:</strong></p>
        <ul>
          <li>Dose: 1 mEq/kg IV (4.2% = 0.5 mEq/mL)</li>
          <li>Use: arrest &gt; 10-15 min with documented severe acidosis</li>
          <li>Caveats: paradoxical intracellular acidosis · only with adequate ventilation</li>
        </ul>

        <p><strong>6. Lidocaine — VF/pulseless VT:</strong></p>
        <ul>
          <li>2 mg/kg IV bolus (dog) · 0.5 mg/kg cat</li>
          <li>Used after defibrillation × 2-3 attempts failed</li>
          <li>(Not first-line — defib + epi are)</li>
        </ul>

        <p><strong>7. Amiodarone — refractory VF:</strong></p>
        <ul>
          <li>5 mg/kg IV bolus</li>
          <li>Use after lidocaine failure</li>
        </ul>

        <p><strong>8. Magnesium sulfate — torsades:</strong></p>
        <ul>
          <li>0.15-0.3 mEq/kg IV (= 18-37 mg/kg)</li>
        </ul>
      `,
      steps: `
        <p><strong>RECOVER 2024 Algorithm — drug timing:</strong></p>
        <ol>
          <li><strong>Recognize arrest</strong> (apnea + no pulse + unresponsive)</li>
          <li><strong>Begin CPR immediately</strong> (compressions + ventilation)</li>
          <li><strong>Establish IV/IO access</strong> (don't delay CPR for this)</li>
          <li><strong>Cycle 1 (0-2 min):</strong> Compressions + ventilation, no drug yet</li>
          <li><strong>End of cycle 1: rhythm check</strong> 5-10 sec
            <ul>
              <li>VF/pulseless VT → defibrillate 2-4 J/kg → resume CPR</li>
              <li>Asystole/PEA → continue CPR + drug</li>
            </ul>
          </li>
          <li><strong>Cycle 2:</strong> Epinephrine 0.01 mg/kg IV
            <ul>
              <li>Plus atropine 0.04 mg/kg if asystole/PEA + vagal cause</li>
            </ul>
          </li>
          <li><strong>Cycle 3:</strong> 2 min more CPR · rhythm check
            <ul>
              <li>Persisting → epinephrine again (or vasopressin once instead)</li>
              <li>Persisting VF → defib + lidocaine 2 mg/kg</li>
            </ul>
          </li>
          <li><strong>Continue cycles</strong> q2 min · drugs q3-5 min</li>
          <li><strong>Reversible causes — find these during CPR:</strong></li>
        </ol>

        <div class="mnemonic">
          <span class="mnem-title">4 H + 4 T — Reversible Causes of Arrest</span>
          <p style="margin: 6px 0;"><strong>4 H:</strong></p>
          <ul>
            <li><strong>H</strong>ypoxia</li>
            <li><strong>H</strong>ypovolemia</li>
            <li><strong>H</strong>ypothermia</li>
            <li><strong>H</strong>yper/Hypokalemia (electrolyte)</li>
          </ul>
          <p style="margin: 10px 0 6px 0;"><strong>4 T:</strong></p>
          <ul>
            <li><strong>T</strong>ension pneumothorax</li>
            <li><strong>T</strong>amponade (cardiac)</li>
            <li><strong>T</strong>oxin (drug overdose)</li>
            <li><strong>T</strong>hrombosis (PE, coronary)</li>
          </ul>
          <p class="mnem-tip">ทุกครั้งที่ CPR ไม่ตอบ — ลิสต์ผ่าน 8 ตัวนี้</p>
        </div>

        <ol start="10">
          <li><strong>ROSC achieved → post-arrest care</strong> (separate algorithm)</li>
          <li><strong>Stop CPR</strong> after 20+ min without ROSC (clinical decision)</li>
        </ol>

        <p><strong>Pre-prepared crash cart drug syringes:</strong></p>
        <ul>
          <li>Color-coded based on drug</li>
          <li>Pre-calculated for common weights (5, 10, 20, 30 kg)</li>
          <li>Posted dose chart on cart</li>
          <li>Inspect monthly for expiry</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Drug extravasation in non-CVC route</li>
          <li>Tachyarrhythmia post-ROSC (epinephrine effect)</li>
          <li>Hypertension severe post-ROSC</li>
          <li>Drug error (wrong dose, wrong drug, wrong time)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Post-arrest care (see CPR entry):
            <ul>
              <li>O2 supplementation</li>
              <li>MAP &gt; 80 mmHg target</li>
              <li>Avoid hyperthermia</li>
              <li>Electrolyte monitoring</li>
              <li>ECG monitoring 24-72 hr</li>
            </ul>
          </li>
          <li>Tip: <strong>"Crash cart prep saves seconds → saves lives"</strong> — pre-calc syringes mandatory</li>
          <li>Tip: <strong>"RECOVER 2024 reaffirmed low-dose epi"</strong> — no more high-dose first-line</li>
          <li>Tip: <strong>Vet survival ~6-7%</strong> · realistic expectations</li>
          <li>Tip: <strong>Post-arrest neurological recovery</strong> takes 24-72 hr · don't despair early</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-anaphylaxis',
    titleEn: 'Anaphylaxis Treatment',
    titleTh: 'การรักษา anaphylaxis',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['anaphylaxis', 'allergy', 'epinephrine', 'diphenhydramine', 'shock'],
    aliases: ['anaphylaxis', 'allergic shock', 'แพ้รุนแรง'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Acute drug allergy reaction</li>
          <li>Vaccine reaction (acute, within 30 min)</li>
          <li>Insect sting / envenomation</li>
          <li>Food allergy reaction (rare anaphylaxis)</li>
          <li>Transfusion reaction</li>
          <li>Contrast media reaction</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — life-threatening emergency</li>
        </ul>
      `,
      preparation: `
        <p><strong>Recognition (signs vary by species):</strong></p>

        <div class="mnemonic">
          <span class="mnem-title">"Dog GI · Cat Lung" — Anaphylaxis Shock Organ</span>
          <ul>
            <li><strong>D</strong>og: <strong>GI/Hepatic shock</strong> — vomiting, diarrhea, hypotension, collapse</li>
            <li><strong>C</strong>at: <strong>Respiratory shock</strong> — bronchospasm, dyspnea, vomiting</li>
          </ul>
          <p class="mnem-tip">หมา "ตับ" · แมว "ปอด" · จำง่าย · ทั้งคู่: urticaria, facial edema, ↓BP, ↑HR</p>
        </div>

        <ul>
          <li>Common signs: urticaria, facial swelling, pruritus, hypotension, tachycardia, MM pale/cyanotic</li>
          <li>Severity: mild (urticaria) → severe (shock) → arrest</li>
        </ul>

        <p><strong>First-line drugs to have ready:</strong></p>
        <ul>
          <li>Epinephrine 1:1000 (1 mg/mL)</li>
          <li>Diphenhydramine 50 mg/mL</li>
          <li>Dexamethasone SP 4 mg/mL</li>
          <li>Crystalloid + IV access</li>
          <li>O2 + intubation kit</li>
          <li>Bronchodilator (terbutaline) for cat</li>
        </ul>
      `,
      steps: `
        <p><strong>Stepwise treatment (severity-based):</strong></p>

        <p><strong>1. Mild reaction (urticaria, mild facial swelling, no respiratory distress):</strong></p>
        <ol>
          <li>Diphenhydramine 1-2 mg/kg IM</li>
          <li>Dexamethasone 0.1-0.4 mg/kg IV (slower onset, prevents biphasic)</li>
          <li>Observe 30-60 min</li>
          <li>Discharge with oral diphenhydramine +/- short steroid course</li>
        </ol>

        <p><strong>2. Moderate (significant edema, hypotension mild, respiratory difficulty):</strong></p>
        <ol>
          <li><strong>Epinephrine 0.01 mg/kg IM</strong> (1:1000 = 0.01 mL/kg)
            <ul>
              <li>Repeat q5-15 min if needed</li>
              <li>IM preferred over SC (faster, more reliable absorption in shock)</li>
            </ul>
          </li>
          <li>Diphenhydramine 1-2 mg/kg IM/slow IV</li>
          <li>Dexamethasone 0.1-0.4 mg/kg IV</li>
          <li>IV fluid 10-20 mL/kg crystalloid bolus</li>
          <li>O2 supplement</li>
          <li>Continuous monitoring</li>
        </ol>

        <p><strong>3. Severe (shock, severe respiratory distress, collapse):</strong></p>
        <ol>
          <li><strong>Epinephrine 0.01 mg/kg IV</strong> (or 0.005 mg/kg IV slow)
            <ul>
              <li>Dilute: 0.1 mL of 1:1000 in 9.9 mL saline → 0.01 mg/mL → 1 mL/kg</li>
              <li>Repeat q3-5 min as needed</li>
            </ul>
          </li>
          <li><strong>Aggressive fluid resuscitation</strong> 20-30 mL/kg crystalloid bolus, repeat as needed</li>
          <li>O2 + intubation if airway compromise</li>
          <li>Diphenhydramine + dexamethasone</li>
          <li>If bronchospasm (esp cat): <strong>terbutaline 0.01 mg/kg SC</strong> or albuterol inhaler</li>
          <li>If refractory hypotension: <strong>epinephrine CRI 0.05-0.1 µg/kg/min</strong></li>
        </ol>

        <p><strong>4. Cardiac arrest from anaphylaxis:</strong></p>
        <ol>
          <li>Standard CPR + epinephrine</li>
          <li>Continue allergic-specific treatments above</li>
        </ol>

        <p><strong>Bi-phasic anaphylaxis:</strong></p>
        <ul>
          <li>~5-20% of cases: recurrence 4-12 hr after initial treatment</li>
          <li>Hospitalize 24 hr if severe initial reaction</li>
          <li>Steroid helps prevent</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Death from airway obstruction or shock if untreated</li>
          <li>Severe hypertension/arrhythmia from epinephrine over-administration</li>
          <li>Bi-phasic recurrence</li>
          <li>Renal/hepatic injury from prolonged shock</li>
          <li>DIC in severe cases</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Hospitalize 24 hr for severe cases</li>
          <li>Continue diphenhydramine 1 mg/kg PO BID × 3-5 days</li>
          <li>Steroid taper 5-7 days</li>
          <li>Identify trigger — document in medical record (alert future)</li>
          <li>Owner education: signs to watch, when to return</li>
          <li>Tip: <strong>"Epinephrine FIRST, antihistamine second"</strong> — antihistamine alone won't reverse shock</li>
          <li>Tip: <strong>"IM &gt; SC"</strong> for epinephrine in shock — peripheral vasoconstriction limits SC absorption</li>
          <li>Tip: <strong>"Watch 24 hr"</strong> — biphasic reactions occur</li>
          <li>Tip: <strong>Document allergy in chart prominently</strong> — prevents repeat exposure</li>
          <li>Tip: Common triggers in vet: vaccines (esp leptospira), penicillin/cefazolin, propofol (rare), opioid, blood transfusion</li>
        </ul>
      `
    }
  },


  /* ============================================================
     LOCOREGIONAL (เพิ่มเติม) — Local Anesthetics + LAST (1)
     ============================================================ */

  {
    id: 'anes-local-anesthetics',
    titleEn: 'Local Anesthetics (Lidocaine, Bupivacaine, Ropivacaine, Mepivacaine) + LAST',
    titleTh: 'ยาชาเฉพาะที่ + LAST',
    type: 'procedure',
    system: 'locoregional',
    species: ['dog', 'cat'],
    tags: ['local anesthetic', 'lidocaine', 'bupivacaine', 'ropivacaine', 'mepivacaine', 'LAST', 'intralipid'],
    aliases: ['local anesthetic', 'LA', 'ยาชา'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Locoregional blocks (dental, RUMM, intercostal, epidural)</li>
          <li>Wound infiltration</li>
          <li>Topical anesthesia (laryngeal spray cat, EMLA cream)</li>
          <li>Lidocaine CRI (dog only) — multimodal analgesia + anti-arrhythmic</li>
          <li>Liposomal bupivacaine (Nocita) — extended duration up to 72 hr</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Allergy (rare with amides, more with esters)</li>
          <li>Site infection</li>
          <li>Severe coagulopathy (relative)</li>
          <li>Methemoglobinemia (benzocaine especially)</li>
          <li>Severe hepatic disease (amides metabolized in liver)</li>
        </ul>
      `,
      preparation: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">Local Anesthetics — เร็ว/ช้า + Max Dose</span>
          <table>
            <tr>
              <th>ยา</th><th>ความเข้มข้น</th><th>เริ่ม</th><th>นาน</th><th>หมา max</th><th>แมว max</th>
            </tr>
            <tr><td><strong>Lidocaine</strong></td><td>2%</td><td>5-10 นาที 🏃</td><td>1-2 ชม.</td><td>5 mg/kg</td><td>2 mg/kg</td></tr>
            <tr><td>Mepivacaine</td><td>2%</td><td>5-10 นาที 🏃</td><td>2-3 ชม.</td><td>5 mg/kg</td><td>2 mg/kg</td></tr>
            <tr><td><strong>Bupivacaine</strong></td><td>0.5%</td><td>15-30 นาที 🚶</td><td>4-6 ชม. ⏰</td><td>2 mg/kg</td><td>1 mg/kg</td></tr>
            <tr><td>Ropivacaine</td><td>0.5%</td><td>15-30 นาที 🚶</td><td>4-6 ชม. ⏰</td><td>3 mg/kg</td><td>1.5 mg/kg</td></tr>
            <tr><td>Nocita (liposomal bup)</td><td>13.3 mg/mL</td><td>—</td><td>72 ชม. 💎</td><td>5.3 mg/kg</td><td>5.3 mg/kg</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>"Lido เร็วสั้น · Bup ช้านาน"</strong> — ผสม 1:1 = เร็ว+นาน<br>
          📌 <strong>Max dose แมว = ครึ่งของหมา</strong> ทุกตัว · <strong>NEVER lidocaine CRI in cat!</strong><br>
          📌 ⚠️ <strong>Lido + Epi ห้ามฉีดที่:</strong> นิ้ว ปลายหู ปลายจมูก ปลายอวัยวะเพศ → necrosis</p>
        </div>
      `,
      steps: `
        <p><strong>Pharmacology basics (for teaching):</strong></p>
        <ul>
          <li>Mechanism: block voltage-gated Na+ channels → block AP propagation</li>
          <li>Amides (metabolized in liver): lidocaine, mepivacaine, bupivacaine, ropivacaine — most modern</li>
          <li>Esters (plasma cholinesterase): procaine, tetracaine, benzocaine — limited use</li>
          <li>Acidic environment (infection) → ↓ efficacy (need higher dose)</li>
        </ul>

        <p><strong>Selection guide:</strong></p>
        <ul>
          <li><strong>Fast onset, short duration:</strong> lidocaine — ideal for dental, brief procedures</li>
          <li><strong>Long-lasting analgesia:</strong> bupivacaine — surgical pain post-op</li>
          <li><strong>Both fast + long:</strong> lidocaine + bupivacaine 1:1 mix</li>
          <li><strong>Cardiac patient:</strong> ropivacaine (less cardiotoxic than bupivacaine)</li>
          <li><strong>Intermediate:</strong> mepivacaine (less vasodilation than lidocaine)</li>
          <li><strong>3-day post-op block:</strong> liposomal bupivacaine (Nocita)</li>
        </ul>

        <p><strong>Lidocaine CRI (dog only — never cat):</strong></p>
        <ul>
          <li>Loading: 1-2 mg/kg IV slowly</li>
          <li>CRI: 25-75 µg/kg/min</li>
          <li>Effects: analgesia (visceral, somatic), anti-inflammatory, pro-motility, MAC reduction (15-30%)</li>
          <li>Used in: GDV (gut perfusion), pancreatitis, post-laparotomy</li>
        </ul>

        <p><strong>LOCAL ANESTHETIC SYSTEMIC TOXICITY (LAST):</strong></p>

        <p><strong>Risk factors:</strong></p>
        <ul>
          <li>Inadvertent intravascular injection (most common)</li>
          <li>Excessive dose (exceed maximum)</li>
          <li>Acidosis</li>
          <li>Hypoxemia</li>
          <li>Pediatric, geriatric (lower threshold)</li>
        </ul>

        <p><strong>Recognition (in awake patient — under anesthesia harder):</strong></p>

        <div class="mnemonic">
          <span class="mnem-title">LAST — "CNS First, CV Second"</span>
          <ul>
            <li><strong>1</strong>CNS: lip-licking → vocalization → twitching → seizure → coma</li>
            <li><strong>2</strong>CV: hypotension → arrhythmia (VT/VF) → arrest</li>
          </ul>
          <p class="mnem-tip">⚠️ <strong>Bupivacaine</strong> = cardiotoxic ก่อน — CV อาจมาก่อน CNS!<br>
          💉 Antidote: <strong>Intralipid 20%</strong> (1.5 mL/kg bolus → 0.25 mL/kg/min CRI)</p>
        </div>

        <p><strong>Treatment of LAST (memorize this):</strong></p>
        <ol>
          <li><strong>STOP injection immediately</strong></li>
          <li><strong>Call for help · prepare resus</strong></li>
          <li><strong>Support airway</strong> — intubate, 100% O2, ventilate</li>
          <li><strong>Treat seizure</strong> — midazolam 0.2 mg/kg IV (avoid propofol — worsens cardiotoxicity)</li>
          <li><strong>Treat arrhythmia/arrest:</strong>
            <ul>
              <li>Standard CPR if arrest</li>
              <li>Avoid lidocaine (worsens), avoid β-blockers, avoid Ca2+ blockers</li>
              <li>Vasopressors at low dose (epi 0.01 mg/kg)</li>
            </ul>
          </li>
          <li><strong>INTRALIPID 20% (lipid emulsion rescue) — KEY:</strong>
            <ul>
              <li><strong>Bolus: 1.5 mL/kg IV over 1 min</strong></li>
              <li><strong>CRI: 0.25 mL/kg/min</strong> for ≥ 10 min after circulatory stability</li>
              <li>Can repeat bolus q5min × 2 if no response</li>
              <li>Maximum 10 mL/kg in first 30 min</li>
              <li>Mechanism: lipid sink — sequesters bupivacaine into lipid phase</li>
            </ul>
          </li>
          <li><strong>Continue monitoring</strong> 4-6 hr post-recovery (drug recirculation)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>LAST (above)</li>
          <li>Local site reaction</li>
          <li>Vasoconstriction necrosis (epinephrine in extremities)</li>
          <li>Methemoglobinemia (rare, prilocaine, benzocaine)</li>
          <li>Allergic reaction (rare, mostly preservatives)</li>
          <li>Wound healing delay (high concentration)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document drug + total dose used</li>
          <li>Owner alert: numbness duration, no licking/chewing block site</li>
          <li>Stock <strong>Intralipid 20% emergency kit</strong> on shelf · expiry check</li>
          <li>Tip: <strong>"Aspirate before injection, every time"</strong> — avoid intravascular</li>
          <li>Tip: <strong>"Fractional doses"</strong> — inject 1/4, observe, continue</li>
          <li>Tip: <strong>"Intralipid is the antidote you must have"</strong> — practice protocol</li>
          <li>Tip: <strong>NEVER lidocaine CRI in cat</strong> — fatal cardiotoxic</li>
          <li>Tip: <strong>Calculate max dose BEFORE block</strong> — avoid overdose</li>
        </ul>
      `
    }
  },


  /* ============================================================
     PAIN (เพิ่มเติม) — Gabapentin/Pregabalin, Tramadol,
     Acetaminophen, Amantadine, Lidocaine CRI (5)
     ============================================================ */

  {
    id: 'anes-gabapentin',
    titleEn: 'Gabapentin and Pregabalin',
    titleTh: 'Gabapentin และ Pregabalin',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['gabapentin', 'pregabalin', 'neuropathic', 'anxiolytic', 'cat'],
    aliases: ['gabapentin', 'neurontin', 'pregabalin', 'lyrica'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Neuropathic pain</strong> (post-amputation, IVDD, FIP neuro, brachial plexus avulsion, Chiari)</li>
          <li>Chronic OA pain (adjunct to NSAID)</li>
          <li><strong>Pre-visit anxiolytic for cat</strong> ⭐ (game-changer)</li>
          <li>Seizure adjunct (limited efficacy)</li>
          <li>Post-op pain (multimodal adjunct)</li>
          <li>Cancer pain</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe renal dysfunction (renally excreted — dose reduction)</li>
          <li>Pregnancy / lactation (limited data)</li>
          <li>Hypersensitivity (rare)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Gabapentin (Neurontin):</strong></p>
        <ul>
          <li>Capsules: 100, 300, 400 mg · Oral solution: 50 mg/mL
            <ul><li>⚠️ Liquid contains <strong>xylitol</strong> — toxic to dog · use capsule form for dog</li></ul>
          </li>
          <li><strong>Doses:</strong>
            <ul>
              <li>Dog chronic pain: 10-30 mg/kg PO q8-12h (start low, titrate)</li>
              <li>Cat chronic pain: 5-10 mg/kg PO q8-12h</li>
              <li><strong>Cat pre-visit: 50-100 mg/cat PO 90 min before</strong></li>
              <li>Dog pre-visit/anxiolytic: 20-30 mg/kg PO 2-3 hr before</li>
            </ul>
          </li>
          <li>Onset: 60-90 min</li>
          <li>Peak: 1-2 hr</li>
          <li>Duration: 6-8 hr</li>
          <li>Renal excreted — reduce dose 50% if CKD</li>
        </ul>

        <p><strong>Pregabalin (Lyrica):</strong></p>
        <ul>
          <li>Capsules: 25, 50, 75, 100, 150, 200, 300 mg</li>
          <li><strong>Dose:</strong> 2-4 mg/kg PO q12h dog/cat</li>
          <li>More potent + reliable than gabapentin (saturable absorption issue with gabapentin)</li>
          <li>More expensive · controlled substance in some countries</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> Bind α2δ subunit of voltage-gated Ca2+ channel → ↓ presynaptic Ca2+ entry → ↓ glutamate, NE, substance P release · NOT a GABA agonist (despite name!)</p>

        <p><strong>Cat fear-free vet visit protocol:</strong></p>
        <ol>
          <li>Owner gives gabapentin 50-100 mg PO at home <strong>90 min</strong> before appointment</li>
          <li>Cat arrives in calm state — handling much easier</li>
          <li>Blood pressure measurement reliable (not stress hypertension)</li>
          <li>Anesthesia/sedation often needs less drug</li>
          <li>Repeated visits → cat associates vet with calm (positive conditioning)</li>
        </ol>

        <p><strong>Chronic pain titration (OA cat example):</strong></p>
        <ol>
          <li>Start: 10 mg/kg PO q12h × 3-5 days</li>
          <li>Assess pain response, sedation</li>
          <li>If incomplete relief → increase to 15-20 mg/kg q8h</li>
          <li>Plateau 2-4 weeks before judging efficacy</li>
          <li>Combine with: NSAID (if tolerated) + frunevetmab + environmental modifications</li>
        </ol>

        <p><strong>Post-op multimodal:</strong></p>
        <ul>
          <li>Add gabapentin 10-20 mg/kg PO q8-12h × 5-7 days post-op</li>
          <li>Especially helpful for: amputation (phantom pain), IVDD (neuropathic component), thoracotomy</li>
          <li>Reduces opioid requirement</li>
          <li>Provides anxiolysis during recovery confinement</li>
        </ul>

        <p><strong>"Chill pill" combos for difficult patient:</strong></p>
        <ul>
          <li>Gabapentin + trazodone (synergistic anxiolytic)</li>
          <li>Gabapentin + acepromazine PO (older protocol, still works)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Sedation</strong> — main side effect · usually wears off 3-5 days · "honeymoon period"</li>
          <li>Ataxia, wobbly</li>
          <li>Vomiting / inappetence (less common)</li>
          <li>Polyphagia rare</li>
          <li>Withdrawal if abruptly stopped after long-term use → taper over 1-2 weeks</li>
          <li>Renal accumulation if CKD without dose adjustment</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Owner counseling: expect sedation initially (improves), give with food preferred</li>
          <li>Trial dose at home before vet day</li>
          <li>Long-term: monitor renal function in geriatric</li>
          <li>Tip: <strong>"Liquid gabapentin → DOG = NO"</strong> due to xylitol</li>
          <li>Tip: <strong>"Cat 50-100 mg cap PO 90 min before vet"</strong> — absolute game-changer</li>
          <li>Tip: <strong>Start low, titrate up</strong> — sedation dose-limiting</li>
          <li>Tip: <strong>Gabapentin or pregabalin?</strong> — gaba cheaper, pregab more reliable. Most use gabapentin first-line</li>
          <li>Tip: <strong>Multimodal essential</strong> — gabapentin alone rarely controls severe pain</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-tramadol',
    titleEn: 'Tramadol',
    titleTh: 'Tramadol',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['tramadol', 'opioid', 'SNRI', 'controversy'],
    aliases: ['tramadol', 'ultram'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Mild-moderate pain (cat &gt; dog efficacy)</li>
          <li>Chronic pain adjunct (cat OA esp)</li>
          <li>When NSAID contraindicated</li>
          <li>Post-op step-down from injectable opioid</li>
          <li>Cough suppression (off-label)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Concurrent SSRI/MAOI/serotonergic drug — serotonin syndrome</li>
          <li>Seizure history (lowers threshold)</li>
          <li>Severe renal/hepatic dysfunction (relative)</li>
          <li>Pregnancy</li>
          <li>Coadministration with another opioid (controversy on additive analgesia in dog)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Tablets: 50 mg (US human formulation; vet products vary)</li>
          <li><strong>Doses:</strong>
            <ul>
              <li>Dog: 2-5 mg/kg PO q8-12h (efficacy debated)</li>
              <li>Cat: 1-4 mg/kg PO q12-24h (better evidence cat than dog)</li>
            </ul>
          </li>
          <li>Onset: 30-60 min PO</li>
          <li>Duration: 6-8 hr</li>
          <li>Schedule IV controlled in many countries</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism (DUAL action):</strong></p>
        <ol>
          <li><strong>Weak µ-opioid receptor agonist</strong> (parent + active metabolite M1)</li>
          <li><strong>SNRI</strong> (serotonin + norepinephrine reuptake inhibition)</li>
        </ol>

        <p><strong>Species-specific issue (KEY for teaching):</strong></p>
        <ul>
          <li><strong>Dog:</strong> poor production of active metabolite M1 (the analgesic part)
            <ul>
              <li>2014 study (Mastrocco et al.) showed tramadol no better than placebo for OA dog</li>
              <li>Most analgesic effect in dog comes from SNRI mechanism, not opioid</li>
              <li>Modern recommendation: <strong>NOT first-line for dog OA</strong></li>
              <li>Still used as adjunct, but evidence weak</li>
            </ul>
          </li>
          <li><strong>Cat:</strong> produces more M1 + slower clearance
            <ul>
              <li>Better evidence for analgesic efficacy in cat</li>
              <li>Some bitter taste — masking required for compliance</li>
              <li>Useful adjunct for OA cat with CKD (NSAID limited)</li>
            </ul>
          </li>
        </ul>

        <p><strong>When tramadol still useful:</strong></p>
        <ul>
          <li>Cat with CKD where NSAID risky + opioid injectable not practical</li>
          <li>Dog with severe NSAID intolerance, multimodal adjunct</li>
          <li>Owner economic constraints (cheap, oral)</li>
          <li>Cough suppression (off-label, anecdotal)</li>
        </ul>

        <p><strong>Modern alternatives that work BETTER in dog:</strong></p>
        <ul>
          <li>Bedinvetmab (Librela) — anti-NGF mAb monthly</li>
          <li>Gabapentin / pregabalin</li>
          <li>NSAID (if not contraindicated)</li>
          <li>Buprenorphine SR or transdermal fentanyl patch</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Serotonin syndrome</strong> if combined with SSRI/MAOI/methadone — agitation, hyperthermia, tremor, seizure</li>
          <li>Sedation, dysphoria</li>
          <li>Lowered seizure threshold</li>
          <li>GI upset (vomiting, anorexia)</li>
          <li>Constipation</li>
          <li>Bitter taste (esp cat — refusal common)</li>
          <li>Dependence with chronic use (rare in vet)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reassess efficacy at 1-2 weeks · discontinue if no benefit</li>
          <li>Owner: watch for unusual behavior (serotonin syndrome signs)</li>
          <li>Don't combine with other serotonergic drugs (SSRI, MAOI, fluoxetine, methadone)</li>
          <li>Tip: <strong>"Tramadol works better in cat than dog"</strong> — 2014 onwards understanding</li>
          <li>Tip: <strong>Compounded liquid for cat</strong> — bitter masking · or use in tuna juice</li>
          <li>Tip: <strong>"Failing OA dog → switch to bedinvetmab"</strong> — game-changer</li>
          <li>Tip: <strong>NEVER add to gold standard regimen without thinking</strong> — drug interactions</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-acetaminophen',
    titleEn: 'Acetaminophen / Paracetamol (DOG ONLY!)',
    titleTh: 'Paracetamol (หมาเท่านั้น!)',
    type: 'procedure',
    system: 'pain',
    species: ['dog'],
    tags: ['acetaminophen', 'paracetamol', 'tylenol', 'CAT TOXIC', 'safety'],
    aliases: ['paracetamol', 'tylenol', 'panadol'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Mild-moderate pain in <strong>DOG</strong></li>
          <li>Adjunct to NSAID/opioid (multimodal)</li>
          <li>When NSAID contraindicated (mild GI sensitivity, mild renal)</li>
          <li>Post-op step-down</li>
          <li>OA pain</li>
        </ul>

        <p style="background: #ffeeee; padding: 12px; border-left: 4px solid red; margin-top: 8px;">
          <strong>⚠️ FATAL IN CAT — DO NOT USE IN CAT EVEN ONCE</strong><br>
          Cat lacks glucuronyl transferase → cannot conjugate acetaminophen → toxic metabolite NAPQI accumulates → severe methemoglobinemia + hepatic necrosis · single dose can kill
        </p>
      `,
      contraindications: `
        <ul>
          <li><strong>CAT — ABSOLUTE</strong> (single 250 mg tablet can kill)</li>
          <li>Hepatic dysfunction (metabolized in liver)</li>
          <li>G6PD deficiency (rare in dog)</li>
          <li>Concurrent hepatotoxic drugs</li>
          <li>Pregnancy / lactation (limited data)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Tablets: 325, 500, 650 mg (human OTC — easy access for owner = risk in mixed-species household)</li>
          <li>Liquid: various concentrations</li>
          <li>Combination products: with codeine (Tylenol-3, dog-specific products)</li>
          <li><strong>Dose (DOG ONLY):</strong>
            <ul>
              <li>10-15 mg/kg PO q8-12h</li>
              <li>Max 50 mg/kg/day (above this = hepatotoxic)</li>
            </ul>
          </li>
          <li>Onset: 30-60 min</li>
          <li>Peak: 1-2 hr</li>
          <li>Duration: 4-6 hr</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> central COX inhibition (CNS-selective) + activation of descending serotonergic pain pathway · Anti-pyretic + analgesic · NOT anti-inflammatory peripherally (unlike NSAIDs)</p>

        <p><strong>Why useful in dog:</strong></p>
        <ul>
          <li>Different mechanism from NSAID — can combine for additive effect</li>
          <li>Better GI tolerance than NSAID</li>
          <li>Mild renal effects (compared to NSAID)</li>
          <li>Cheap, OTC available</li>
          <li>Useful adjunct in multimodal</li>
        </ul>

        <p><strong>Combination with codeine (if available):</strong></p>
        <ul>
          <li>Acetaminophen 10 mg/kg + codeine 1-2 mg/kg PO q6-8h</li>
          <li>Dog-labeled product (Tylenol with codeine — controlled substance)</li>
          <li>Useful for moderate pain step-down from injectable opioid</li>
        </ul>

        <p><strong>Cat acetaminophen toxicity (for teaching):</strong></p>

        <p><strong>Pathophysiology:</strong></p>
        <ul>
          <li>Cat has &lt; 1/10 the glucuronyl transferase activity of dog</li>
          <li>Saturate sulfation pathway quickly</li>
          <li>Excess metabolized by CYP450 → NAPQI (toxic)</li>
          <li>Glutathione depletion → NAPQI not detoxified</li>
          <li>Effect: hepatic necrosis + methemoglobinemia (Hb cannot carry O2)</li>
        </ul>

        <p><strong>Clinical signs of cat overdose:</strong></p>
        <ul>
          <li>Hour 0-4: depression, salivation, vomiting</li>
          <li>Hour 4-12: methemoglobinemia (chocolate-colored blood, brown MM, dyspnea, cyanosis)</li>
          <li>Hour 24-48: facial/paw edema, hepatic necrosis, jaundice</li>
          <li>Death within 18-36 hr without treatment</li>
        </ul>

        <p><strong>Treatment of cat overdose:</strong></p>
        <ol>
          <li><strong>Decontamination</strong> if &lt; 2 hr post-ingestion (induce emesis if conscious, gastric lavage if anesthetized)</li>
          <li><strong>Activated charcoal</strong> 1-4 g/kg PO</li>
          <li><strong>N-acetylcysteine (NAC)</strong> — antidote
            <ul>
              <li>Loading: 140 mg/kg IV/PO</li>
              <li>Maintenance: 70 mg/kg q6h × 7-17 doses</li>
              <li>Provides cysteine for glutathione regeneration</li>
            </ul>
          </li>
          <li><strong>Ascorbic acid (Vit C)</strong> 30 mg/kg q6h IV — reduce methemoglobin</li>
          <li><strong>SAMe (S-adenosylmethionine)</strong> — hepatoprotective adjunct</li>
          <li><strong>O2, fluid, supportive care</strong></li>
          <li><strong>Methylene blue</strong> 1-1.5 mg/kg IV slow — for severe methemoglobinemia (may worsen hemolysis cat — use with caution)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Hepatotoxicity</strong> in dog at &gt; 50 mg/kg/day or chronic high dose</li>
          <li><strong>Methemoglobinemia</strong> at high dose dog</li>
          <li>Allergic reaction (rare)</li>
          <li>Renal injury (chronic high dose)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor liver enzymes if chronic use (q3-6 mo)</li>
          <li>Owner education: NEVER give to cat, secure from cat in mixed household</li>
          <li>Tip: <strong>"DOG only — drill it into students"</strong> — most teaching emphasis</li>
          <li>Tip: <strong>"NAC = the antidote"</strong> — cat exposure protocol critical knowledge</li>
          <li>Tip: <strong>Multimodal adjunct in dog</strong> — useful with NSAID + opioid · different mechanism = additive effect</li>
          <li>Tip: <strong>"Brown blood = methemoglobinemia"</strong> — cat acetaminophen exposure red flag</li>
          <li>Tip: <strong>Owner counseling</strong> — clear written warning · most cat poisoning is well-meaning owner</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-amantadine',
    titleEn: 'Amantadine',
    titleTh: 'Amantadine',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['amantadine', 'NMDA', 'chronic pain', 'anti-windup'],
    aliases: ['amantadine', 'symmetrel'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Chronic pain refractory to NSAID alone (OA, cancer)</li>
          <li>Neuropathic pain (peripheral neuropathy, post-amputation, chronic IVDD)</li>
          <li>"Wind-up" pain (central sensitization)</li>
          <li>Adjunct in multimodal chronic pain protocol</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe renal dysfunction (renally excreted unchanged — accumulates)</li>
          <li>Heart failure (relative — rare arrhythmia reported)</li>
          <li>Seizure history (lowers threshold)</li>
          <li>Pregnancy</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Capsules: 100 mg · Liquid: 10 mg/mL</li>
          <li><strong>Doses:</strong>
            <ul>
              <li>Dog: <strong>3-5 mg/kg PO q24h</strong></li>
              <li>Cat: <strong>3 mg/kg PO q24h</strong></li>
            </ul>
          </li>
          <li>Onset: gradual — full effect 7-14 days</li>
          <li>Duration: 24 hr (once daily dosing)</li>
          <li>Renal excretion — adjust dose 50% if mild CKD; avoid in severe</li>
        </ul>
      `,
      steps: `
        <p><strong>Mechanism:</strong> NMDA receptor antagonist (non-competitive) → blocks "wind-up" of pain transmission · Also weak dopaminergic effect (originally antiviral / Parkinson's drug)</p>

        <p><strong>"Wind-up phenomenon" (key concept for teaching):</strong></p>
        <ul>
          <li>Repetitive painful stimulus → ↑ glutamate at NMDA receptor → central sensitization</li>
          <li>Result: same stimulus produces increased pain over time (allodynia, hyperalgesia)</li>
          <li>Common in chronic pain conditions</li>
          <li>NMDA blockade prevents/reverses this</li>
        </ul>

        <p><strong>Multimodal protocol example (severe OA dog):</strong></p>
        <ul>
          <li>NSAID daily (carprofen 2 mg/kg BID)</li>
          <li>Gabapentin 10-20 mg/kg PO BID</li>
          <li>Amantadine 3-5 mg/kg PO SID</li>
          <li>Bedinvetmab monthly SC</li>
          <li>Omega-3 EPA/DHA daily</li>
          <li>Weight management + structured exercise</li>
        </ul>

        <p><strong>When to add amantadine:</strong></p>
        <ul>
          <li>NSAID alone insufficient</li>
          <li>NSAID + gabapentin still inadequate</li>
          <li>"My dog has been getting worse despite Rimadyl" — try add</li>
          <li>Pain that worsens at night or with movement (sensitization)</li>
        </ul>

        <p><strong>Clinical evidence:</strong></p>
        <ul>
          <li>Lascelles et al. 2008 — amantadine + NSAID better than NSAID alone in OA dog</li>
          <li>Cat OA: less robust evidence but anecdotal benefit</li>
          <li>2-week trial recommended before judging efficacy</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>GI upset (vomiting, diarrhea) — most common</li>
          <li>Agitation, restlessness (rare — dopaminergic effect)</li>
          <li>Sedation (uncommon)</li>
          <li>Dry mouth</li>
          <li>Withdrawal if abruptly stopped — taper if &gt; 1 month use</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>2-week trial before assessing efficacy</li>
          <li>Combine with NSAID + gabapentin for synergy</li>
          <li>Renal monitoring annual</li>
          <li>Tip: <strong>"Anti-windup adjunct"</strong> — concept for teaching</li>
          <li>Tip: <strong>"Once daily — easy compliance"</strong></li>
          <li>Tip: <strong>"Add when NSAID fails"</strong> — clear indication</li>
          <li>Tip: <strong>Generic available cheap</strong> — accessible</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-lidocaine-cri',
    titleEn: 'Lidocaine CRI (Multimodal Analgesia — DOG ONLY)',
    titleTh: 'Lidocaine CRI (หมาเท่านั้น)',
    type: 'procedure',
    system: 'pain',
    species: ['dog'],
    tags: ['lidocaine', 'CRI', 'multimodal', 'MAC reduction', 'GI motility', 'CAT TOXIC'],
    aliases: ['lidocaine CRI', 'lido drip'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Multimodal analgesia</strong> intra/post-op (somatic + visceral)</li>
          <li><strong>MAC reduction</strong> (15-30% iso reduction)</li>
          <li><strong>Anti-arrhythmic</strong> (concurrent benefit in GDV, splenic mass)</li>
          <li><strong>Anti-inflammatory</strong> (mild — sodium channel + immune modulation)</li>
          <li><strong>Pro-motility</strong> (helpful in post-op ileus, GDV)</li>
          <li><strong>Wind-up prevention</strong> (similar to ketamine NMDA blockade benefit)</li>
        </ul>

        <p style="background: #ffeeee; padding: 12px; border-left: 4px solid red; margin-top: 8px;">
          <strong>⚠️ DOG ONLY — NEVER CAT</strong><br>
          Lidocaine CRI in cat = fatal cardiotoxicity at typical canine doses · cat metabolizes slowly + greater myocardial sensitivity
        </p>
      `,
      contraindications: `
        <ul>
          <li><strong>CAT — ABSOLUTE</strong></li>
          <li>Severe hepatic dysfunction (metabolized liver — accumulation)</li>
          <li>Severe heart failure (CV depression at high dose)</li>
          <li>Seizure history (active)</li>
          <li>Heart block</li>
          <li>Allergy</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Loading bolus:</strong> 1-2 mg/kg IV slow over 1-2 min</li>
          <li><strong>CRI:</strong> <strong>25-75 µg/kg/min</strong>
            <ul>
              <li>Low end: 25 µg/kg/min — analgesia adjunct</li>
              <li>Mid: 50 µg/kg/min — typical multimodal</li>
              <li>High: 75 µg/kg/min — refractory pain · monitor for toxicity</li>
            </ul>
          </li>
          <li><strong>Mix:</strong> 1 g lidocaine in 250 mL 0.9% saline = 4 mg/mL
            <ul>
              <li>For 25 kg dog at 50 µg/kg/min:</li>
              <li>= 25 × 0.05 = 1.25 mg/min</li>
              <li>= 1.25 / 4 = 0.31 mL/min</li>
              <li>= 18.7 mL/hr</li>
            </ul>
          </li>
          <li>Use 2% lidocaine WITHOUT epinephrine</li>
          <li>Syringe pump or volumetric infusion pump</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard surgical multimodal (e.g., laparotomy):</strong></p>
        <ol>
          <li>Pre-induction: opioid premed + NSAID (if indicated) + maropitant</li>
          <li>Induction: standard</li>
          <li>Post-induction <strong>loading bolus</strong>: lidocaine 1 mg/kg IV slow</li>
          <li>Start <strong>CRI 50 µg/kg/min</strong></li>
          <li>Maintain inhalant LOWER (saved 15-30% MAC) — better CV stability</li>
          <li>Add fentanyl CRI 5 µg/kg/h for additional opioid analgesia</li>
          <li>Add ketamine CRI 0.1-0.3 mg/kg/h for NMDA blockade (anti-windup)</li>
          <li>Result: "FLK" combo (Fentanyl + Lidocaine + Ketamine) — gold standard multimodal</li>
        </ol>

        <p><strong>"FLK" calculator (1 L bag mix):</strong></p>
        <ul>
          <li>To 1 L bag of LRS / Normosol-R add:
            <ul>
              <li>Fentanyl 1 mg (= 20 mL of 50 µg/mL solution)</li>
              <li>Lidocaine 200 mg (= 10 mL of 2% solution)</li>
              <li>Ketamine 60 mg (= 0.6 mL of 100 mg/mL)</li>
            </ul>
          </li>
          <li>Run at 5 mL/kg/h:
            <ul>
              <li>Fentanyl ~5 µg/kg/h</li>
              <li>Lidocaine ~16 µg/kg/min</li>
              <li>Ketamine ~5 µg/kg/min (= 0.3 mg/kg/h)</li>
            </ul>
          </li>
          <li>Run for several hours through surgery + early recovery</li>
        </ul>

        <p><strong>GDV-specific protocol:</strong></p>
        <ul>
          <li>Lidocaine CRI 50 µg/kg/min — analgesia + arrhythmia prevention + improve mucosal perfusion</li>
          <li>Continue post-op 24-48 hr</li>
          <li>Gut perfusion benefit — reduces septic complications</li>
        </ul>

        <p><strong>Toxicity monitoring (signs):</strong></p>
        <ul>
          <li>Plasma level 2-6 µg/mL = therapeutic</li>
          <li>&gt; 6 µg/mL = toxicity</li>
          <li>Awake patient (post-op): drowsiness, twitching, ataxia → seizure</li>
          <li>If suspected → STOP CRI, observe</li>
          <li>Anesthetized patient: harder to detect — watch for arrhythmia, BP</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>CNS toxicity:</strong> drowsiness → twitching → tremor → seizure → coma</li>
          <li><strong>CV toxicity:</strong> hypotension → bradycardia → arrhythmia → arrest (high dose)</li>
          <li><strong>GI:</strong> vomiting (rare)</li>
          <li>Tachyphylaxis (rare)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor sedation level on awake patient</li>
          <li>Discontinue gradually (50% reduction × 30 min, then off)</li>
          <li>Continued analgesia (oral / SC) post-CRI cessation</li>
          <li>Tip: <strong>"NEVER cat, period"</strong> — drill into students</li>
          <li>Tip: <strong>"FLK = the magic combo"</strong> for multimodal IV anesthesia</li>
          <li>Tip: <strong>"GDV without lidocaine = malpractice modern"</strong> — analgesia + anti-arrhythmic + perfusion</li>
          <li>Tip: <strong>Calculate dose carefully</strong> — toxic dose accumulates</li>
          <li>Tip: <strong>Stop if any neuro signs in awake patient</strong></li>
        </ul>
      `
    }
  },
  /* ============================================================
     TIER A · CORE CLINICAL SKILLS (5)
     ============================================================ */

  {
    id: 'anes-machine-setup',
    titleEn: 'Anesthesia Machine Setup &amp; Leak Check',
    titleTh: 'การเตรียม anesthesia machine + leak check',
    type: 'procedure',
    system: 'equipment',
    species: ['dog', 'cat'],
    tags: ['machine', 'vaporizer', 'circuit', 'leak check', 'equipment'],
    aliases: ['anesthesia machine', 'เครื่องดมยา'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ก่อนทุก anesthesia case (mandatory daily check)</li>
          <li>ตรวจเครื่องหลังซ่อม / clean</li>
          <li>เมื่อมีสัญญาณ leak ระหว่างใช้</li>
          <li>เปลี่ยน CO2 absorber</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ห้าม skip leak check — มี mortality เพิ่มจาก undetected leak</li>
        </ul>
      `,
      preparation: `
        <p><strong>Components ของเครื่อง:</strong></p>
        <ul>
          <li><strong>O2 source</strong> — cylinder (E-tank, H-tank) หรือ central pipeline</li>
          <li><strong>Pressure regulator</strong> — ลด pressure จาก tank → working pressure</li>
          <li><strong>Flowmeter</strong> — control O2 flow (มี bobbin/ball)</li>
          <li><strong>Vaporizer</strong> — ใส่ liquid agent (iso/sevo); แต่ละ agent มี dedicated vaporizer</li>
          <li><strong>Common gas outlet</strong> — gas ไหลเข้า circuit</li>
          <li><strong>Breathing circuit</strong> — rebreathing (circle) หรือ non-rebreathing</li>
          <li><strong>CO2 absorber</strong> (rebreathing only) — soda lime หรือ Amsorb</li>
          <li><strong>Reservoir bag</strong> — 3-5× tidal volume</li>
          <li><strong>APL (pop-off) valve</strong> — release excess pressure</li>
          <li><strong>Scavenger</strong> — เก็บ waste gas</li>
        </ul>

        <p><strong>Breathing circuit selection:</strong></p>
        <ul>
          <li><strong>Rebreathing (circle):</strong>
            <ul>
              <li>Patient &gt; 7-10 kg</li>
              <li>Low-flow O2 (30 mL/kg/min, min 0.5 L/min)</li>
              <li>Reuses gas (CO2 absorber needed)</li>
              <li>Bag size = 5× TV (TV = 10-15 mL/kg)</li>
            </ul>
          </li>
          <li><strong>Non-rebreathing (Bain, Mapleson):</strong>
            <ul>
              <li>Patient &lt; 7 kg (resistance issue with circle)</li>
              <li>High flow needed (200-300 mL/kg/min)</li>
              <li>No CO2 absorber</li>
              <li>Less dead space — better for small patient</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>Daily setup checklist (ก่อนเคสแรก):</strong></p>
        <ol>
          <li><strong>O2 tank pressure</strong>:
            <ul>
              <li>Full E-tank = 2200 psi · ใช้ได้ ~5 hr at 2 L/min</li>
              <li>Replace if &lt; 500 psi</li>
            </ul>
          </li>
          <li><strong>Vaporizer level</strong>: fill to top mark · ตรวจ leak ที่ filling port</li>
          <li><strong>CO2 absorber</strong> (rebreathing): check color (Soda lime: white→purple = exhausted) · replace if 50%+ purple</li>
          <li><strong>Connect circuit</strong>: bag, hoses, ETT connector</li>
          <li><strong>Scavenger</strong> connected and functioning</li>
        </ol>

        <p><strong>Low-pressure leak test (mandatory before every case):</strong></p>
        <ol>
          <li>Close APL valve</li>
          <li>Block patient end (Y-piece) ด้วยฝ่ามือ</li>
          <li>Inflate bag with O2 flush ถึง 30 cmH2O</li>
          <li>Stop O2 flow</li>
          <li><strong>Pressure should hold ≥ 10 sec</strong> ที่ 30 cmH2O</li>
          <li>If drops &gt; 5 cmH2O ใน 10 sec → leak somewhere → find + fix
            <ul>
              <li>Check: bag, hoses, ETT, vaporizer connection, absorber gasket</li>
            </ul>
          </li>
          <li>Open APL valve when done</li>
        </ol>

        <p><strong>High-pressure leak test (weekly):</strong></p>
        <ol>
          <li>Turn on O2 cylinder slowly</li>
          <li>Note pressure on regulator</li>
          <li>Turn off cylinder (with regulator still attached)</li>
          <li>Pressure should hold for several minutes</li>
          <li>Drop &gt; 100 psi/min = high-pressure leak</li>
        </ol>

        <p><strong>O2 flush button check:</strong></p>
        <ul>
          <li>Press flush — bag should fill rapidly</li>
          <li>Don't use during patient connection (peak pressure → barotrauma)</li>
        </ul>

        <p><strong>Vaporizer accuracy:</strong></p>
        <ul>
          <li>Service annually (calibration)</li>
          <li>Most agents-specific — never put iso in sevo vaporizer (or vice versa)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Undetected leak</strong> → patient awareness, hypoxemia, environmental contamination</li>
          <li><strong>CO2 rebreathing</strong> → exhausted absorber → hypercapnia</li>
          <li><strong>Vaporizer issues</strong>:
            <ul>
              <li>Tipping → liquid out → severe overdose</li>
              <li>Wrong agent in vaporizer → unpredictable concentration</li>
            </ul>
          </li>
          <li>Pop-off closed → barotrauma, pneumothorax</li>
          <li>Wrong circuit for size (e.g., circle in 1 kg cat) → ↑ work of breathing</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document leak check pass/fail in anesthesia log</li>
          <li>End of day: turn off cylinder, close vaporizer, drain bag, clean</li>
          <li>Weekly: check soda lime, scavenger, hoses for cracks</li>
          <li>Monthly: high-pressure check, O2 cylinder replacement timing</li>
          <li>Annual: vaporizer calibration service</li>
          <li>Tip: <strong>"NEVER skip leak check — even busy day"</strong> — 30 sec saves lives</li>
          <li>Tip: <strong>"Pop-off open before disconnecting patient"</strong> — most common rookie error</li>
          <li>Tip: <strong>Cat / small dog &lt; 7 kg → non-rebreathing</strong> · adult dog → rebreathing</li>
          <li>Tip: <strong>Soda lime exhausted = CO2 rises</strong> — replace when 50% color change</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-fluid-therapy',
    titleEn: 'Fluid Therapy in Anesthesia',
    titleTh: 'การให้ของเหลวระหว่าง anesthesia',
    type: 'procedure',
    system: 'equipment',
    species: ['dog', 'cat'],
    tags: ['fluid', 'crystalloid', 'colloid', 'rate', 'bolus'],
    aliases: ['IV fluid', 'fluid therapy', 'น้ำเกลือ'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ทุก anesthesia case &gt; 30 min (default)</li>
          <li>Maintain BP, perfusion ระหว่าง anesthesia</li>
          <li>Replace insensible loss + surgical loss</li>
          <li>Treat hypotension (fluid bolus)</li>
          <li>Pre-load before high-risk drugs (ACP, dexmed in some cases)</li>
          <li>Specific disease: shock, dehydration, hyperkalemia, hypoglycemia</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>CHF / pulmonary edema (relative — reduce rate, not stop)</li>
          <li>Severe oliguria/anuria without monitoring</li>
          <li>Specific fluid contraindications:
            <ul>
              <li>LRS in hyperkalemia (contains K — controversy, modern evidence says OK)</li>
              <li>0.9% NaCl in metabolic acidosis (worsens — gives Cl- load)</li>
              <li>Plasmalyte/Normosol in CHF — be cautious of volume</li>
            </ul>
          </li>
        </ul>
      `,
      preparation: `
        <p><strong>Crystalloid types:</strong></p>
        <table style="width:100%; border-collapse: collapse; font-size:13px;">
          <tr style="background: var(--c-soft);">
            <th align="left">Fluid</th><th>Na</th><th>K</th><th>Cl</th><th>Buffer</th><th>Use</th>
          </tr>
          <tr><td>0.9% NaCl</td><td>154</td><td>0</td><td>154</td><td>None</td><td>Hypochloremic alkalosis, vomiting</td></tr>
          <tr><td>LRS</td><td>130</td><td>4</td><td>109</td><td>Lactate 28</td><td>General use, balanced</td></tr>
          <tr><td>Plasmalyte / Normosol-R</td><td>140</td><td>5</td><td>98</td><td>Acetate, gluconate</td><td>Premium balanced</td></tr>
          <tr><td>5% Dextrose</td><td>0</td><td>0</td><td>0</td><td>Glucose</td><td>Hypoglycemia, dilution only</td></tr>
        </table>

        <p><strong>Colloid types:</strong></p>
        <ul>
          <li><strong>Hetastarch (HES)</strong> — synthetic · 5-10 mL/kg bolus dog · 2-5 mL/kg cat
            <ul>
              <li>⚠️ Concern AKI in human (controversial in vet) · use sparingly</li>
            </ul>
          </li>
          <li><strong>Plasma</strong> — natural · indications: coagulopathy, sepsis · 5-10 mL/kg</li>
          <li><strong>Albumin</strong> — concentrated · sepsis, severe hypoalbuminemia · 0.5-1 g/kg</li>
          <li><strong>Hypertonic saline (7.5%)</strong> — small volume fluid resuscitation · 3-5 mL/kg slow IV (over 5-10 min)</li>
        </ul>
      `,
      steps: `
        <p><strong>Maintenance rate during anesthesia (modern evidence):</strong></p>
        <ul>
          <li><strong>Dog: 3-5 mL/kg/h</strong> (down from old 10 mL/kg/h)</li>
          <li><strong>Cat: 2-3 mL/kg/h</strong> (down from old 5-10 mL/kg/h)</li>
          <li>2013 ACVAA guidelines reduced rates → less pulmonary edema, less interstitial overload</li>
          <li>For long surgery (&gt; 1 hr): consider reduce further to 2-3 mL/kg/h dog</li>
        </ul>

        <p><strong>Bolus for hypotension:</strong></p>
        <ul>
          <li><strong>Crystalloid:</strong>
            <ul>
              <li>Dog: 10-20 mL/kg over 10-15 min</li>
              <li>Cat: 5-10 mL/kg over 10-15 min (small volume, smaller cat)</li>
              <li>Repeat × 2-3 if needed</li>
              <li>Max total: 60 mL/kg dog · 30 mL/kg cat (then risk overload)</li>
            </ul>
          </li>
          <li><strong>Colloid (HES):</strong>
            <ul>
              <li>Dog: 5-10 mL/kg over 30 min</li>
              <li>Cat: 2-5 mL/kg over 30 min</li>
              <li>Use when crystalloid alone fails + ↓ TP</li>
            </ul>
          </li>
          <li><strong>Hypertonic saline:</strong>
            <ul>
              <li>3-5 mL/kg of 7.5% over 5-10 min</li>
              <li>Quick volume expansion · followed by crystalloid maintenance</li>
              <li>Useful in trauma, GDV with shock</li>
            </ul>
          </li>
        </ul>

        <p><strong>Fluid selection by scenario:</strong></p>
        <ul>
          <li><strong>Routine surgery healthy:</strong> LRS 3-5 mL/kg/h</li>
          <li><strong>Vomiting / hypochloremic:</strong> 0.9% NaCl initially</li>
          <li><strong>Hyperkalemia (urethral obstruction):</strong> 0.9% NaCl initial · LRS OK after K corrected</li>
          <li><strong>Hypoglycemia:</strong> add 2.5-5% dextrose to LRS</li>
          <li><strong>Septic shock:</strong> Plasmalyte + colloid +/- vasopressor</li>
          <li><strong>Cardiac patient:</strong> reduce rate 50% (1-3 mL/kg/h)</li>
          <li><strong>CHF active:</strong> 1-2 mL/kg/h max · monitor closely</li>
          <li><strong>CKD anesthesia:</strong> normal rate, ensure adequate before/after surgery</li>
        </ul>

        <p><strong>Monitoring fluid response:</strong></p>
        <ul>
          <li>BP — should rise within 10-15 min of bolus</li>
          <li>HR — should normalize</li>
          <li>MM, CRT — should improve</li>
          <li>Urine output — &gt; 1-2 mL/kg/h ideal</li>
          <li>PCV/TS — check after 1 L given (dilution effect)</li>
          <li>Lung sounds — crackles = overload</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Volume overload</strong> — pulmonary edema, dependent edema, dilutional anemia/hypoproteinemia</li>
          <li><strong>Electrolyte disturbance</strong> from prolonged single fluid (hypernatremia from saline, hyperchloremia)</li>
          <li><strong>HES-associated AKI</strong> (controversial)</li>
          <li>Hypothermia (cold fluid)</li>
          <li>Catheter complications (extravasation, phlebitis)</li>
          <li>Hemodilution → ↓ O2 carrying capacity</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reduce rate post-op to maintenance (50-60 mL/kg/24h dog · 40-50 mL/kg/24h cat)</li>
          <li>Discontinue when eating/drinking normally</li>
          <li>Monitor body weight (gain &gt; 5%/day = overload)</li>
          <li>Tip: <strong>"Less is more"</strong> — modern lower rates</li>
          <li>Tip: <strong>"Warm fluid"</strong> — body temp prevents hypothermia · use fluid warmer</li>
          <li>Tip: <strong>"Bolus, then reassess"</strong> — give 10-20 mL/kg, wait 15 min, check response</li>
          <li>Tip: <strong>HES use limited</strong> — controversy continues · use only if crystalloid fails + low TP</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-recovery',
    titleEn: 'Anesthetic Recovery Protocol',
    titleTh: 'การ recovery จาก anesthesia',
    type: 'procedure',
    system: 'monitoring',
    species: ['dog', 'cat'],
    tags: ['recovery', 'extubation', 'post-op', 'mortality'],
    aliases: ['recovery', 'extubation', 'ฟื้นจากยา'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Standard protocol สำหรับ post-anesthesia ทุกเคส</li>
          <li>Critical phase: <strong>50-60% ของ anesthetic mortality เกิดในช่วง recovery</strong> (CEPSAF data)</li>
          <li>Cat mortality particularly high in recovery</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — applies to all patients</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Recovery area setup:</strong>
            <ul>
              <li>Quiet, dim, warm (24-26°C)</li>
              <li>Soft padding</li>
              <li>O2 source available</li>
              <li>Suction ready</li>
              <li>Crash cart accessible</li>
              <li>Continuous staff observation 30+ min</li>
            </ul>
          </li>
          <li><strong>Equipment:</strong>
            <ul>
              <li>Pulse oximeter</li>
              <li>Thermometer</li>
              <li>Active warming (Bair Hugger, warm towels, heating pad)</li>
              <li>Fluid pump (continued)</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <p><strong>End of surgery → extubation:</strong></p>
        <ol>
          <li>Discontinue inhalant (turn vaporizer off)</li>
          <li>Continue O2 100% × 5-10 min (washout)</li>
          <li>Disconnect from machine when ready to move</li>
          <li>Move patient to recovery area gently</li>
          <li>Position: <strong>sternal recumbency</strong> with neck extended (most pets)
            <ul>
              <li>Brachycephalic: sternal especially important</li>
              <li>Laryngeal paralysis: sternal critical</li>
            </ul>
          </li>
        </ol>

        <p><strong>Extubation criteria:</strong></p>
        <ul>
          <li><strong>Dog:</strong>
            <ul>
              <li>Spontaneous swallow reflex present</li>
              <li>Lift head / chew on tube</li>
              <li>Strong tongue tone</li>
              <li>Adequate spontaneous breathing</li>
              <li>SpO2 ≥ 95% on room air or O2 ready</li>
            </ul>
          </li>
          <li><strong>Cat:</strong>
            <ul>
              <li><strong>Extubate EARLY</strong> — at first swallow / ear flick</li>
              <li>Cat extubated late = laryngospasm risk</li>
              <li>Inflate cuff partially before pulling (suction debris up)</li>
              <li>Don't wait for full responsiveness</li>
            </ul>
          </li>
        </ul>

        <p><strong>Extubation technique:</strong></p>
        <ol>
          <li>Suction oropharynx (if regurgitated/secretions)</li>
          <li>Deflate cuff fully</li>
          <li>Untie ETT</li>
          <li>Pull ETT smoothly during exhalation</li>
          <li>Have re-intubation kit ready (esp brachycephalic)</li>
          <li>Continue O2 by mask 5-10 min</li>
        </ol>

        <p><strong>Recovery monitoring (q5-15 min):</strong></p>
        <ul>
          <li>RR, effort, SpO2</li>
          <li>HR, pulse quality</li>
          <li>Temperature (warm to 37°C)</li>
          <li>MM, CRT</li>
          <li>Mental status (sedation depth)</li>
          <li>Pain score</li>
          <li>Surgical site (bleeding, swelling)</li>
        </ul>

        <p><strong>Phases of recovery:</strong></p>
        <ol>
          <li><strong>Stage 3 (anesthetized)</strong> → <strong>Stage 2 (excitement)</strong> potentially → <strong>Stage 1 (analgesia/awakening)</strong></li>
          <li>Stage 2 = paddling, vocalization, tongue movements</li>
          <li>Manage stage 2 with quiet handling, +/- additional sedation if severe</li>
          <li>Full recovery: alert, sternal, swallowing, normothermic</li>
        </ol>

        <p><strong>Discharge criteria (outpatient):</strong></p>
        <ul>
          <li>Walking unassisted (ataxia minimal)</li>
          <li>Drinking water without aspiration</li>
          <li>Normothermic (rectal &gt; 37°C)</li>
          <li>Pain controlled</li>
          <li>No major complications</li>
          <li>Owner instructed on home care</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Aspiration / regurgitation</strong> — most common · sternal positioning + late extubation in dog</li>
          <li><strong>Laryngospasm (cat)</strong> — early extubation prevents</li>
          <li><strong>Upper airway obstruction (brachycephalic)</strong> — high risk</li>
          <li><strong>Hypothermia</strong> — slow recovery, drug accumulation</li>
          <li><strong>Hyperthermia</strong> — esp opioid in cat (post-op fever)</li>
          <li><strong>Dysphoria / rough recovery</strong> — vocalizing, paddling, escape attempts</li>
          <li><strong>Prolonged recovery</strong> — drug accumulation, hypothermia, hypoglycemia</li>
          <li><strong>Hypoxemia</strong> — atelectasis, residual paralysis</li>
          <li><strong>Cardiac arrest</strong> in recovery — esp first 3 hr post-op</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue analgesia per pain plan</li>
          <li>Encourage urination 6-8 hr post-op</li>
          <li>Small amount water then food when alert + swallowing</li>
          <li>Monitor 24 hr in hospital for major surgery</li>
          <li>Outpatient discharge: typically 2-6 hr post-op for routine</li>
          <li>Tip: <strong>"Recovery ≠ done"</strong> — most mortality here · supervise!</li>
          <li>Tip: <strong>"Cat extubate EARLY, dog extubate LATE"</strong> — opposite philosophies, both correct</li>
          <li>Tip: <strong>"Sternal + neck extended"</strong> = default position (airway protection)</li>
          <li>Tip: <strong>Brachycephalic</strong> = continuous direct staff observation 1-2 hr</li>
          <li>Tip: <strong>Pain assessment</strong> q4-6h with validated scale (Glasgow CMPS-SF dog · Botucatu cat)</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-depth-mac',
    titleEn: 'Anesthetic Depth Assessment &amp; MAC Concept',
    titleTh: 'การประเมินระดับ anesthesia + MAC',
    type: 'procedure',
    system: 'monitoring',
    species: ['dog', 'cat'],
    tags: ['depth', 'MAC', 'eye position', 'palpebral', 'jaw tone', 'plane'],
    aliases: ['anesthetic depth', 'MAC', 'plane'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Continuous assessment ระหว่าง anesthesia (q5min minimum)</li>
          <li>Adjust vaporizer setting based on findings</li>
          <li>Detect awakening / over-deep anesthesia</li>
          <li>Teaching/training anesthetist</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — assessment, not procedure</li>
        </ul>
      `,
      preparation: `
        <p><strong>Guedel's classification (4 stages):</strong></p>
        <ul>
          <li><strong>Stage I (Analgesia):</strong> awake, voluntary movement, mild analgesia</li>
          <li><strong>Stage II (Excitement):</strong> uncoordinated movement, dilated pupils, breath holding · DANGEROUS, pass through quickly</li>
          <li><strong>Stage III (Surgical anesthesia):</strong> 4 planes (light → deep)
            <ul>
              <li>Plane 1: light · eye rotated · palpebral present · breathing regular</li>
              <li>Plane 2: medium · eye ventral · palpebral diminished · regular breathing — <strong>surgical plane</strong></li>
              <li>Plane 3: deep · eye central · no palpebral · diaphragm only · ↓ BP</li>
              <li>Plane 4: dangerous · pupil dilated · weak breathing · CV collapse</li>
            </ul>
          </li>
          <li><strong>Stage IV (Overdose):</strong> apnea, no reflexes, fixed dilated pupil, cardiac arrest imminent</li>
        </ul>
      `,
      steps: `
        <p><strong>Clinical signs to assess (in order of usefulness):</strong></p>

        <p><strong>1. Eye position (best indicator):</strong></p>
        <ul>
          <li>Light anesthesia → eye rotates ventrally (cornea visible upper)</li>
          <li>Surgical plane → eye fully ventro-medial, partially under 3rd eyelid</li>
          <li>Deep → eye central, pupil moderately dilated</li>
          <li>Too deep → pupil fully dilated, fixed</li>
          <li><strong>Goal: ventro-medial position</strong> = surgical plane 2</li>
        </ul>

        <p><strong>2. Palpebral reflex (gentle touch medial canthus):</strong></p>
        <ul>
          <li>Strong blink → too light</li>
          <li>Sluggish single blink → light to medium plane</li>
          <li>Absent → medium to deep plane (most surgery in this range)</li>
          <li>NO eye-related test → deep+</li>
        </ul>

        <p><strong>3. Jaw tone:</strong></p>
        <ul>
          <li>Strong, resists → too light</li>
          <li>Slight resistance → surgical plane</li>
          <li>Flaccid, easily opens → too deep</li>
          <li>Test by gentle attempt to open — don't force</li>
        </ul>

        <p><strong>4. Vital signs:</strong></p>
        <ul>
          <li>Light: HR ↑, BP ↑, RR ↑ (sympathetic), tongue movement</li>
          <li>Surgical: HR/BP/RR stable</li>
          <li>Deep: HR/BP ↓, RR slow + shallow</li>
          <li>Too deep: BP &lt; 60, RR irregular, MM pale</li>
        </ul>

        <p><strong>5. Surgical stimulation response:</strong></p>
        <ul>
          <li>HR/BP rise with cut → too light → deepen or add analgesia</li>
          <li>No response → adequate</li>
          <li>If ALWAYS no response → may be too deep, check BP</li>
        </ul>

        <p><strong>6. Other reflexes (less commonly used):</strong></p>
        <ul>
          <li>Corneal reflex: present until very deep · loss = warning sign</li>
          <li>Pedal reflex (toe pinch): variable, less reliable</li>
          <li>Tongue reflex (chewing): light plane</li>
        </ul>

        <p><strong>Adjustment based on findings:</strong></p>
        <ul>
          <li>Too light → ↑ vaporizer 0.5%, give analgesic if pain</li>
          <li>Too deep → ↓ vaporizer 0.5%, fluid bolus, +/- vasopressor</li>
          <li>Wait 5 min between adjustments (uptake/redistribution time)</li>
        </ul>

        <h4>MAC Concept (essential teaching topic):</h4>

        <p><strong>Definition:</strong> Minimum Alveolar Concentration of inhalant required to prevent purposeful movement in 50% of patients in response to a noxious stimulus (skin incision)</p>

        <ul>
          <li><strong>1.0 MAC</strong> = ED50 (immobility in 50%)</li>
          <li><strong>1.2-1.3 MAC</strong> = surgical plane (immobile in 95%+)</li>
          <li><strong>1.5-2.0 MAC</strong> = deep plane (some CV depression)</li>
          <li><strong>2.0+ MAC</strong> = lethal in some patients</li>
        </ul>

        <p><strong>MAC values (canine baseline):</strong></p>
        <ul>
          <li>Halothane 0.87% · Isoflurane 1.3% · Sevoflurane 2.4% · Desflurane 7.2%</li>
        </ul>

        <p><strong>Factors that DECREASE MAC (= less inhalant needed):</strong></p>

        <div class="mnemonic">
          <span class="mnem-title">"Babies + Old + Sick + Drugs" → MAC ลด</span>
          <ul>
            <li><strong>B</strong>abies + pregnancy (~25% ลด)</li>
            <li><strong>O</strong>ld geriatric (~25% ลด)</li>
            <li><strong>S</strong>ick: hypothermia, hypoxemia, hypotension, hypoproteinemia</li>
            <li><strong>D</strong>rugs: opioid 30-40% · dexmed 30-50% · ket 25% · lidocaine 15-30% (dog)</li>
          </ul>
          <p class="mnem-tip">"BOSD" — เคสที่ MAC ลด ใช้ inhalant น้อยลง ป้องกัน overdose</p>
        </div>

        <p>Increase MAC (= ต้องใช้ inhalant มาก):</p>
        <ul>
          <li>Hyperthermia, hyperthyroidism</li>
          <li>Young athletic patient</li>
        </ul>

        <p><strong>Clinical application:</strong></p>
        <p>"Balanced anesthesia" = use multiple drugs at sub-MAC levels → better stability, less side effects of any single drug</p>
      `,
      complications: `
        <ul>
          <li>Awareness (very rare) — too light, paralyzed patient</li>
          <li>Cardiovascular collapse — too deep</li>
          <li>Misinterpretation: muscle relaxant → eye centrally without true depth</li>
          <li>Drug effects on signs (e.g., atropine dilates pupils → false "deep" appearance)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document findings q5min in anesthesia log</li>
          <li>Note any vaporizer adjustments + response</li>
          <li>Tip: <strong>"Eye + Jaw + Palpebral + Vitals = depth"</strong> — never single sign</li>
          <li>Tip: <strong>"Atropine + ketamine = misleading pupils"</strong> — both dilate · use other signs</li>
          <li>Tip: <strong>"NMB → eye centered always"</strong> — depth assessment from EEG/BIS only</li>
          <li>Tip: <strong>"MAC × 1.2 + multimodal" = sweet spot</strong></li>
          <li>Tip: <strong>"Adjust by 0.5%, wait 5 min"</strong> — never knee-jerk big changes</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-hypothermia',
    titleEn: 'Anesthetic Hypothermia Management',
    titleTh: 'การจัดการ hypothermia',
    type: 'procedure',
    system: 'monitoring',
    species: ['dog', 'cat'],
    tags: ['hypothermia', 'temperature', 'warming', 'thermoregulation'],
    aliases: ['hypothermia', 'อุณหภูมิต่ำ'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ทุก anesthesia case &gt; 30 min (preventive monitoring)</li>
          <li>Patient temp &lt; 37°C during/after anesthesia</li>
          <li>Pediatric, geriatric, small breed (high surface:body ratio)</li>
          <li>Long surgery (&gt; 1 hr)</li>
          <li>Open body cavity (laparotomy, thoracotomy)</li>
          <li>Cool environment / cold fluid administered</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hyperthermia (don't add heat — cool instead)</li>
          <li>Heat-related illness</li>
          <li>Targeted hypothermia post-arrest (32-34°C may be neuroprotective)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Why hypothermia matters:</strong></p>
        <ul>
          <li>↓ MAC (over-deep anesthesia at same vaporizer setting)</li>
          <li>↓ Drug clearance → prolonged recovery</li>
          <li>↑ Coagulopathy → bleeding</li>
          <li>↑ Cardiac arrhythmia</li>
          <li>↓ Wound healing</li>
          <li>↓ Immune function → infection</li>
          <li>Shivering on recovery → ↑ O2 consumption 200-400%</li>
          <li>Patient discomfort</li>
        </ul>

        <p><strong>Mechanisms of heat loss under anesthesia:</strong></p>
        <ul>
          <li><strong>Radiation</strong> (~60%) — heat lost to cool surroundings</li>
          <li><strong>Convection</strong> (~15%) — air flow over body</li>
          <li><strong>Conduction</strong> (~5%) — contact with cool surfaces</li>
          <li><strong>Evaporation</strong> (~20%) — surgical site, breathing</li>
          <li>Anesthesia impairs central thermoregulation (vasodilation, shivering blocked)</li>
        </ul>

        <p><strong>Temperature classification:</strong></p>
        <ul>
          <li>Normal: 38-39°C dog · 38-39.5°C cat</li>
          <li>Mild hypothermia: 36-37.9°C</li>
          <li>Moderate: 32-35.9°C</li>
          <li>Severe: &lt; 32°C (CV instability, arrhythmia, coag)</li>
          <li>Profound: &lt; 28°C (life-threatening)</li>
        </ul>
      `,
      steps: `
        <p><strong>Prevention strategies (BEST approach):</strong></p>
        <ol>
          <li><strong>Pre-warming</strong>: Bair Hugger 30 min before induction (controversial benefit — helps recovery)</li>
          <li><strong>Insulate</strong>: bubble wrap, plastic film, towels, especially feet, ears, scrotum</li>
          <li><strong>Warm room</strong> 22-24°C minimum</li>
          <li><strong>Warm fluids</strong> via fluid warmer (37-38°C)</li>
          <li><strong>Active warming throughout</strong>:
            <ul>
              <li>Forced-air warmer (Bair Hugger) — gold standard</li>
              <li>Circulating water blanket (Hot Dog) — alternative</li>
              <li>Avoid heating pads in direct contact (burn risk)</li>
            </ul>
          </li>
          <li><strong>Limit body cavity exposure</strong> — drape edges</li>
          <li><strong>Warm IV bags + irrigation fluid</strong></li>
          <li><strong>HME filter</strong> (heat-moisture exchanger) on ETT — preserves respiratory heat</li>
        </ol>

        <p><strong>Active rewarming (if hypothermic):</strong></p>
        <ol>
          <li>Bair Hugger high setting</li>
          <li>Warm IV fluids (37-40°C max — too high = hemolysis)</li>
          <li>Warm water bottles (gloves of warm water)</li>
          <li>Dry, warm towels</li>
          <li>Warm room</li>
          <li>Goal: rewarm 0.5-1°C/hr (rapid rewarming → arrhythmia)</li>
        </ol>

        <p><strong>For cat (high risk):</strong></p>
        <ul>
          <li>Smaller body mass, larger surface area</li>
          <li>Less subcutaneous fat</li>
          <li>Drop temp faster + harder to rewarm</li>
          <li>Use Bair Hugger from premed onward</li>
          <li>Wrap feet, tail, ears specifically</li>
        </ul>

        <p><strong>For severe (&lt; 32°C):</strong></p>
        <ul>
          <li>Active core rewarming:
            <ul>
              <li>Warm peritoneal lavage (esp during open laparotomy)</li>
              <li>Warm enema</li>
              <li>Warm bladder lavage</li>
            </ul>
          </li>
          <li>Avoid surface rewarming alone (afterdrop phenomenon)</li>
          <li>Continuous ECG (arrhythmia risk)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Arrhythmia</strong> at &lt; 32°C — atrial fib, VF</li>
          <li><strong>Coagulopathy</strong> — surgical bleeding</li>
          <li><strong>Prolonged recovery</strong> — drug accumulation</li>
          <li><strong>Shivering</strong> on recovery — ↑ O2 demand</li>
          <li><strong>Wound infection</strong> ↑ risk</li>
          <li><strong>Burns from heating pad</strong> direct contact (esp anesthetized cat — common)</li>
          <li><strong>Afterdrop</strong> (rapid rewarming → cold blood from periphery to core)</li>
          <li><strong>Hyperthermia rebound</strong> — over-warming + opioid (cat especially)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue active warming until ≥ 37°C</li>
          <li>Monitor temp q15-30 min during recovery</li>
          <li>Check skin under heating devices (no burns)</li>
          <li>Tip: <strong>"Prevention &gt; treatment"</strong> — start warming at induction, not when cold</li>
          <li>Tip: <strong>"Bair Hugger is gold standard"</strong> — invest in one</li>
          <li>Tip: <strong>NEVER electric heating pad direct contact</strong> — burn hazard, severe</li>
          <li>Tip: <strong>"HME filter on ETT"</strong> — cheap, effective</li>
          <li>Tip: <strong>Cat post-op: monitor for hyperthermia</strong> too — opioid + warming = fever</li>
          <li>Tip: <strong>Warm blanket from dryer</strong> — simple effective hack</li>
        </ul>
      `
    }
  },


  /* ============================================================
     TIER B · CLINICAL ROTATION (5)
     ============================================================ */

  {
    id: 'anes-pediatric',
    titleEn: 'Pediatric / Neonatal Anesthesia',
    titleTh: 'Anesthesia ในลูกสัตว์',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['pediatric', 'neonatal', 'puppy', 'kitten', 'glucose', 'small'],
    aliases: ['pediatric anesthesia', 'ลูกสัตว์', 'ลูกหมา', 'ลูกแมว'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Puppy/kitten requiring anesthesia (early spay-neuter, hernia repair, dental, biopsy)</li>
          <li>Definition:
            <ul>
              <li>Neonatal: 0-2 weeks</li>
              <li>Infant: 2-6 weeks</li>
              <li>Pediatric: 6 weeks - 4 months</li>
              <li>Juvenile: 4 months - 1 year</li>
            </ul>
          </li>
          <li>Each age has different physiology + drug response</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Elective surgery in neonate &lt; 8 weeks (relative — wait if non-urgent)</li>
          <li>Hypoglycemic / hypothermic patient — stabilize first</li>
        </ul>
      `,
      preparation: `
        <p><strong>Physiological differences (key for teaching):</strong></p>
        <ul>
          <li><strong>Cardiovascular:</strong>
            <ul>
              <li>HR-dependent CO (limited stroke volume)</li>
              <li>Don't tolerate bradycardia well</li>
              <li>↓ Catecholamine reserve</li>
              <li>Higher resting HR (180-220 puppy/kitten)</li>
            </ul>
          </li>
          <li><strong>Respiratory:</strong>
            <ul>
              <li>↑ O2 demand per kg</li>
              <li>↓ Functional residual capacity (FRC) — desaturate fast</li>
              <li>Compliant chest wall — easy to ventilate but easy to barotrauma</li>
            </ul>
          </li>
          <li><strong>Metabolic:</strong>
            <ul>
              <li>↑ Surface:body → heat loss fast</li>
              <li>↓ Glycogen → hypoglycemia within 4-6 hr fast</li>
              <li>Immature liver enzymes (CYP450 underdeveloped) → drug clearance ↓</li>
              <li>Immature kidneys → drug clearance ↓</li>
            </ul>
          </li>
          <li><strong>Pharmacokinetics:</strong>
            <ul>
              <li>↓ Plasma protein → more free drug → effect ↑</li>
              <li>↑ Total body water → larger volume of distribution for water-soluble drugs</li>
              <li>Immature blood-brain barrier (neonate) → drugs penetrate easier</li>
            </ul>
          </li>
        </ul>

        <p><strong>Pre-anesthetic prep:</strong></p>
        <ul>
          <li>Short fasting period (4-6 hr only — neonate not at all in some protocols)</li>
          <li>Pre-op blood: glucose minimum (point-of-care)</li>
          <li>Warm environment</li>
          <li>IV catheter if possible (24G - 22G)</li>
          <li>Active warming pre-op</li>
          <li>Have dextrose ready (2.5-5% in fluid)</li>
        </ul>
      `,
      steps: `
        <p><strong>Drug doses (general — reduce 25-50% from adult):</strong></p>

        <p><strong>Pre-medication (8 weeks+):</strong></p>
        <ul>
          <li>Avoid ACP &lt; 12 weeks (long-acting, hypotension)</li>
          <li>Low-dose opioid (butorphanol 0.2 mg/kg or buprenorphine 0.02 mg/kg IM)</li>
          <li>+/- maropitant (off-label puppy)</li>
          <li>Avoid α2 (dexmed) in &lt; 12 weeks (CV reserve concern)</li>
        </ul>

        <p><strong>Induction:</strong></p>
        <ul>
          <li><strong>Mask induction with sevoflurane</strong> — preferred for neonate/young
            <ul>
              <li>Avoid IV catheter stress in tiny patient</li>
              <li>Less drug accumulation</li>
              <li>Quick recovery</li>
            </ul>
          </li>
          <li>Or IV propofol 2-3 mg/kg / alfaxalone 1-2 mg/kg if IV access</li>
          <li>Avoid ketamine in neonate (CV stimulation)</li>
          <li>Pre-O2 5+ min (FRC small → desat fast)</li>
        </ul>

        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Sevoflurane preferred (rapid on/off)</li>
          <li>MAC reduced ~25-30% in pediatric</li>
          <li>Non-rebreathing circuit (Bain) for &lt; 7 kg</li>
          <li>Active warming continuously</li>
          <li>Fluid 5-10 mL/kg/h with dextrose 2.5%</li>
          <li>Glucose check q30-60 min during long surgery</li>
        </ul>

        <p><strong>Monitoring intensified:</strong></p>
        <ul>
          <li>Temp continuous (drop fast)</li>
          <li>Glucose q30-60 min</li>
          <li>HR (don't allow drop below age-appropriate)</li>
          <li>SpO2, ETCO2</li>
          <li>BP (Doppler best for tiny patient)</li>
        </ul>

        <p><strong>Recovery:</strong></p>
        <ul>
          <li>Active warming until normothermic</li>
          <li>Offer food + water early (within 30 min of recovery)</li>
          <li>Glucose check post-op</li>
          <li>Reunite with mom (if &lt; weaning age) ASAP</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hypoglycemia</strong> — most common · prevent with dextrose-supplemented fluid</li>
          <li><strong>Hypothermia</strong> — second most common · active warming throughout</li>
          <li><strong>Bradycardia</strong> → severe ↓ CO (HR-dependent)</li>
          <li><strong>Hypoxemia</strong> — small FRC, desat fast</li>
          <li><strong>Drug overdose</strong> — pharmacokinetic differences · use weight-based + scaled</li>
          <li><strong>Prolonged recovery</strong> — immature clearance</li>
          <li><strong>Aspiration</strong> if regurgitate (rare in neonate)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reunite with littermates / mom for warmth</li>
          <li>Encourage early feeding (formula or food)</li>
          <li>Recheck glucose if lethargic</li>
          <li>Monitor 24 hr in hospital for major surgery</li>
          <li>Tip: <strong>"Pediatric = miniature adult ≠ tiny dog/cat"</strong> · physiology different</li>
          <li>Tip: <strong>"Prevent hypoglycemia + hypothermia"</strong> = 80% of pediatric anesthesia success</li>
          <li>Tip: <strong>Mask induction sevoflurane</strong> = neonate's friend</li>
          <li>Tip: <strong>Doppler BP &gt; oscillometric</strong> in tiny patient (oscillometric inaccurate &lt; 2 kg)</li>
          <li>Tip: <strong>Early spay-neuter (8-16 wk)</strong> safe with proper protocol — shelter standard</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-renal-disease',
    titleEn: 'Anesthesia for Renal Disease (CKD, AKI)',
    titleTh: 'Anesthesia ในเคสโรคไต',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['CKD', 'AKI', 'renal', 'kidney', 'dialysis'],
    aliases: ['kidney disease', 'CKD anesthesia', 'โรคไต'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Patient with CKD requiring anesthesia</li>
          <li>AKI patient (relative — stabilize first if elective)</li>
          <li>Urethral obstruction relief (cat — always with hyperK)</li>
          <li>Urinary surgery (cystotomy, perineal urethrostomy)</li>
          <li>Renal biopsy</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe AKI with anuria — emergency only · need dialysis support</li>
          <li>Hyperkalemia &gt; 7 mEq/L — STABILIZE BEFORE anesthesia</li>
          <li>Severe metabolic acidosis</li>
        </ul>
      `,
      preparation: `
        <p><strong>Pre-anesthetic priorities:</strong></p>
        <ul>
          <li>Hydration optimization — IV fluid 12-24 hr pre-op if possible</li>
          <li>Correct electrolyte (esp K)</li>
          <li>Blood work: CBC, full chem (BUN, Cr, K, P, albumin), urinalysis, +/- SDMA</li>
          <li>BP measurement (CKD often hypertensive)</li>
          <li>+/- ECG (hyperK changes)</li>
          <li>Review medications (ACE-I, NSAID) — discontinue NSAID 5+ days pre-op</li>
        </ul>

        <p><strong>Drugs to avoid / use cautiously:</strong></p>
        <ul>
          <li><strong>NSAIDs</strong> — strong relative contraindication (CKD)</li>
          <li><strong>α2-agonists (dexmed)</strong> — ↓ renal perfusion · use low dose</li>
          <li><strong>Ketamine</strong> in cat — excreted unchanged in urine, accumulates in CKD</li>
          <li><strong>ACE-inhibitor</strong> day-of-surgery — withhold morning dose (some recommend continue, controversial)</li>
          <li><strong>Aminoglycoside antibiotics</strong> — nephrotoxic</li>
        </ul>

        <p><strong>Drugs that are safe / preferred:</strong></p>
        <ul>
          <li>Opioids: methadone, hydromorphone, buprenorphine (no dose adjustment)</li>
          <li>Propofol — minimal renal effect, hepatic clearance</li>
          <li>Alfaxalone — hepatic clearance, safe</li>
          <li>Etomidate — no renal effect (best for severe CKD)</li>
          <li>Inhalants — minimal renal metabolism (iso, sevo OK)</li>
        </ul>
      `,
      steps: `
        <p><strong>Hyperkalemia management (urethral obstruction priority):</strong></p>

        <p><strong>Pre-anesthetic stabilization (mandatory if K &gt; 6.0):</strong></p>
        <ol>
          <li><strong>Calcium gluconate</strong> 0.5-1 mL/kg (10%) IV slow over 10 min — cardioprotection
            <ul><li>Doesn't lower K, just stabilizes myocardium</li></ul>
          </li>
          <li><strong>IV fluid</strong> — LRS or 0.9% NaCl (debate · LRS contains 4 mEq/L K but dilutional effect dominant)
            <ul><li>10-20 mL/kg bolus then maintenance</li></ul>
          </li>
          <li><strong>Dextrose +/- insulin</strong>:
            <ul>
              <li>Regular insulin 0.25-0.5 U/kg IV with 1-2 g dextrose per unit</li>
              <li>Drives K into cells</li>
              <li>Effect lasts 4-6 hr</li>
            </ul>
          </li>
          <li><strong>Beta-2 agonist</strong>: terbutaline 0.01 mg/kg IV/SC (alternative to insulin)</li>
          <li><strong>Sodium bicarbonate</strong> 1 mEq/kg IV (severe acidosis only)</li>
          <li><strong>Cystocentesis</strong> for decompression (relieves K → urine outflow)</li>
        </ol>
        <p>Recheck K in 30-60 min before anesthesia</p>

        <p><strong>Anesthesia plan for CKD patient (modified):</strong></p>
        <ol>
          <li>Pre-op IV fluid 6-12 hr</li>
          <li>Premed: low-dose opioid (methadone 0.2 mg/kg) + low-dose midazolam</li>
          <li>Induction: <strong>etomidate</strong> 1 mg/kg + midazolam (preferred), or alfaxalone 1-2 mg/kg, or propofol slowly 2-3 mg/kg</li>
          <li>Maintenance: sevoflurane LOW (1.5-2%) + multimodal analgesia</li>
          <li>Fluid rate: 5-10 mL/kg/h (higher than usual to maintain renal perfusion) — avoid CHF</li>
          <li>BP target: &gt; 80 mmHg systolic (renal perfusion priority)</li>
          <li>Monitor:
            <ul>
              <li>BP closely (q5min)</li>
              <li>Urine output (catheter — &gt; 1-2 mL/kg/h target)</li>
              <li>ECG continuous</li>
              <li>Body temp</li>
            </ul>
          </li>
          <li>Treat hypotension <strong>aggressively</strong>:
            <ul>
              <li>Fluid bolus first</li>
              <li>Dopamine CRI 5-10 µg/kg/min (mild renal vasodilation at low dose)</li>
              <li>Reduce inhalant</li>
            </ul>
          </li>
          <li>Maintain normothermia</li>
        </ol>

        <p><strong>Post-op:</strong></p>
        <ul>
          <li>Continue IV fluid 24-48 hr (maintenance + replacement)</li>
          <li>Recheck BUN/Cr 24 hr post-op</li>
          <li>Monitor urine output</li>
          <li>Resume CKD medications (telmisartan, etc.)</li>
          <li>NO NSAIDs — use opioid + multimodal alternatives</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Acute-on-chronic kidney injury</strong> (AKI on CKD) — most concerning · esp from hypotension</li>
          <li>Hyperkalemia worsening if poorly managed</li>
          <li>Volume overload (especially with concurrent cardiac dz)</li>
          <li>Prolonged recovery (drug accumulation)</li>
          <li>Hypotension worsening renal injury</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>BUN/Cr at 24 hr · 1 week post-op</li>
          <li>Urine output documentation</li>
          <li>Resume long-term CKD management</li>
          <li>Tip: <strong>"BP &gt; 80 mmHg systolic"</strong> = renal perfusion priority · don't accept lower</li>
          <li>Tip: <strong>"Hyperkalemia first, anesthesia second"</strong> — never anesthetize K &gt; 7</li>
          <li>Tip: <strong>"NSAID-free in CKD"</strong> · ever · use multimodal alternatives</li>
          <li>Tip: <strong>Etomidate = best induction for severe CKD</strong> (if available)</li>
          <li>Tip: <strong>Cat with CKD + ketamine = bad combo</strong> — accumulates</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-hepatic-disease',
    titleEn: 'Anesthesia for Hepatic Disease',
    titleTh: 'Anesthesia ในเคสโรคตับ',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['hepatic', 'liver', 'PSS', 'shunt', 'cholestasis'],
    aliases: ['liver disease', 'hepatic anesthesia', 'โรคตับ'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Liver biopsy</li>
          <li>Portosystemic shunt (PSS) repair</li>
          <li>Hepatic mass removal</li>
          <li>Cholecystectomy</li>
          <li>General anesthesia for any procedure in patient with hepatic dysfunction</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe coagulopathy without correction</li>
          <li>Hepatic encephalopathy uncontrolled (stabilize first)</li>
          <li>Hypoglycemia uncorrected</li>
          <li>Severe ascites compromising ventilation</li>
        </ul>
      `,
      preparation: `
        <p><strong>Liver functions affecting anesthesia:</strong></p>
        <ul>
          <li>Drug metabolism (CYP450) — reduced clearance</li>
          <li>Coagulation factor synthesis — coagulopathy</li>
          <li>Albumin synthesis — ↓ drug binding → free drug ↑</li>
          <li>Glucose homeostasis — hypoglycemia risk</li>
          <li>Ammonia clearance — encephalopathy</li>
          <li>Bilirubin excretion — cholestasis</li>
        </ul>

        <p><strong>Pre-anesthetic workup:</strong></p>
        <ul>
          <li>CBC + Chem (ALT, ALP, GGT, total bili, albumin, glucose, BUN)</li>
          <li>Coagulation panel (PT, aPTT, platelet count, fibrinogen)</li>
          <li>+/- bile acids, ammonia (PSS suspicion)</li>
          <li>Abdominal US (ascites, mass, shunt)</li>
          <li>Optimize: lactulose for HE, diet, +/- antibiotic, vit K (cholestasis)</li>
          <li>Plasma transfusion ถ้า PT/aPTT &gt; 1.5× ปกติ</li>
        </ul>

        <p><strong>PSS-specific considerations (key teaching point):</strong></p>
        <ul>
          <li>Often young, small breed (Yorkie, Maltese, Schnauzer)</li>
          <li>Stunted growth, poor body condition</li>
          <li>Hepatic encephalopathy — pre-treat with lactulose, antibiotic, low-protein diet</li>
          <li>Hypoalbuminemia common</li>
          <li>Hypoglycemia — supplement dextrose</li>
          <li>Drug clearance VERY reduced — use small doses titrated</li>
        </ul>
      `,
      steps: `
        <p><strong>Drug selection considerations:</strong></p>

        <p><strong>Premedication:</strong></p>
        <ul>
          <li>Avoid ACP — heavy hepatic metabolism, prolonged effect</li>
          <li>Low-dose opioid (methadone, butorphanol) — reduced dose ~50%</li>
          <li>Avoid benzo if HE risk (worsens encephalopathy — debated)</li>
          <li>Use anticholinergic if needed</li>
        </ul>

        <p><strong>Induction (CV-sparing + minimal hepatic):</strong></p>
        <ul>
          <li><strong>Propofol</strong> — extra-hepatic clearance possible, OK in mild-moderate dz · reduced dose</li>
          <li><strong>Etomidate</strong> — minimal hepatic effect (preferred in severe)</li>
          <li><strong>Alfaxalone</strong> — primarily hepatic clearance, use cautiously in severe dz</li>
          <li>Avoid: ketamine in severe dz (hepatic clearance dependent)</li>
          <li>Avoid: thiopental (historical — heavy hepatic metabolism)</li>
        </ul>

        <p><strong>Maintenance:</strong></p>
        <ul>
          <li><strong>Isoflurane / Sevoflurane</strong> — minimal hepatic metabolism (5% iso, 3% sevo) — both OK
            <ul>
              <li>Some debate sevo &gt; iso in liver disease (less metabolism)</li>
            </ul>
          </li>
          <li><strong>Avoid halothane</strong> historically — but withdrawn anyway</li>
          <li>MAC may be reduced — go light</li>
        </ul>

        <p><strong>Multimodal analgesia:</strong></p>
        <ul>
          <li>Local blocks aggressively (less systemic drug)</li>
          <li>Fentanyl CRI (rapidly cleared by tissue redistribution)</li>
          <li>Avoid NSAID in severe disease</li>
          <li>Lidocaine CRI (dog) — usable, ↓ rate (75% normal)</li>
        </ul>

        <p><strong>Monitoring intensified:</strong></p>
        <ul>
          <li>BP — maintain above normal target (better hepatic perfusion)</li>
          <li>Glucose q30-60 min — supplement dextrose 2.5-5% in fluid</li>
          <li>Temp closely</li>
          <li>+/- ammonia if HE concern</li>
        </ul>

        <p><strong>Special: PSS surgery anesthesia:</strong></p>
        <ul>
          <li>Pre-op stabilization 4-6 weeks (lactulose, low-protein, ABX)</li>
          <li>Plasma transfusion pre/intraop (correct coagulopathy + hypoalbuminemia)</li>
          <li>Etomidate-midazolam induction</li>
          <li>Sevoflurane maintenance</li>
          <li>Continuous BP monitoring (occlusion of shunt → hypotension or portal hypertension)</li>
          <li>Glucose monitoring critical (q30 min)</li>
          <li>Post-op: ICU 24-48 hr · monitor for portal hypertension, GI bleed, seizures</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Prolonged recovery</strong> — drug accumulation</li>
          <li><strong>Hypoglycemia</strong> intra/post-op</li>
          <li><strong>Bleeding</strong> — coagulopathy + delicate liver tissue</li>
          <li><strong>Hepatic encephalopathy</strong> exacerbation</li>
          <li><strong>Hypoalbuminemia</strong> → ↑ free drug → exaggerated effect</li>
          <li>Post-op portal hypertension (PSS surgery)</li>
          <li>Hypothermia (small patient often)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Continue IV fluid + dextrose</li>
          <li>Monitor glucose q4-6h × 24 hr</li>
          <li>Resume hepatic management (lactulose, ABX, diet)</li>
          <li>Pain control with opioid (avoid NSAID)</li>
          <li>Watch for HE signs (head pressing, ataxia, seizure)</li>
          <li>Tip: <strong>"PSS = small drug, big monitoring"</strong></li>
          <li>Tip: <strong>"Etomidate + midazolam"</strong> = liver patient's friend</li>
          <li>Tip: <strong>Plasma pre-op</strong> for coagulopathy correction</li>
          <li>Tip: <strong>Hypoglycemia is silent killer</strong> — q30 min check</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-diabetic',
    titleEn: 'Anesthesia for Diabetic Patient',
    titleTh: 'Anesthesia ในเคสเบาหวาน',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['diabetes', 'insulin', 'glucose', 'DKA'],
    aliases: ['diabetes', 'diabetic', 'เบาหวาน'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Routine procedures in stable diabetic patient (dental, mass removal)</li>
          <li>Cataract surgery (common in diabetic dog)</li>
          <li>Emergency surgery in diabetic</li>
          <li>Stable cat diabetic for procedures</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>DKA / HHS</strong> — STABILIZE FIRST (correct fluid, electrolyte, ketone, acid-base)</li>
          <li>Severely uncontrolled diabetic (BG &gt; 600 mg/dL with ketones)</li>
          <li>Severe dehydration</li>
        </ul>
      `,
      preparation: `
        <p><strong>Goals:</strong></p>
        <ul>
          <li>Maintain BG 100-250 mg/dL (slightly higher than normal acceptable)</li>
          <li>Avoid hypoglycemia (worse than mild hyperglycemia under anesthesia)</li>
          <li>Avoid stress hyperglycemia</li>
          <li>Resume normal insulin schedule post-op ASAP</li>
        </ul>

        <p><strong>Pre-anesthetic workup:</strong></p>
        <ul>
          <li>CBC + Chem (BUN, Cr, K, glucose, electrolytes)</li>
          <li>Urinalysis (ketones, infection)</li>
          <li>Fructosamine (assess long-term control)</li>
          <li>BP</li>
          <li>+/- ECG (cardiac comorbidity)</li>
          <li>Confirm not DKA (ketone-negative or stabilized)</li>
        </ul>

        <p><strong>Day of surgery — insulin dosing strategies:</strong></p>

        <p><strong>Strategy 1: Half dose, schedule first case</strong> (simplest, common)</p>
        <ul>
          <li>Morning: feed small breakfast (1/4 normal) at home</li>
          <li>Give <strong>1/2 normal insulin dose</strong></li>
          <li>Schedule as first surgery (minimize fasting time)</li>
          <li>Check BG on arrival + q30-60 min during anesthesia</li>
          <li>Resume normal insulin + meal at home that evening</li>
        </ul>

        <p><strong>Strategy 2: Withhold morning insulin + insulin CRI</strong> (advanced/long surgery)</p>
        <ul>
          <li>Withhold morning dose</li>
          <li>Start dextrose-supplemented fluid (2.5-5%)</li>
          <li>Regular insulin CRI 0.05-0.1 U/kg/h titrated to BG</li>
          <li>BG q30 min</li>
          <li>Resume normal insulin when eating again</li>
        </ul>

        <p><strong>Strategy 3: Glargine cat (24-hr coverage)</strong></p>
        <ul>
          <li>Glargine has steady release — usually OK to give morning dose</li>
          <li>Or 1/2 dose if uncertain</li>
          <li>Monitor BG closely</li>
        </ul>
      `,
      steps: `
        <p><strong>Drug considerations:</strong></p>

        <p><strong>Drugs to avoid / use cautiously:</strong></p>
        <ul>
          <li><strong>α2-agonists (dexmed, xylazine)</strong> — transient hyperglycemia (insulin suppression)
            <ul><li>Use low dose if needed · monitor BG</li></ul>
          </li>
          <li><strong>Glucocorticoids</strong> — exacerbate hyperglycemia · avoid unless essential</li>
          <li><strong>Catecholamines (epi, norepi)</strong> — hyperglycemia (stress response)</li>
        </ul>

        <p><strong>Drugs preferred:</strong></p>
        <ul>
          <li>Opioids — minimal glycemic effect</li>
          <li>Propofol, alfaxalone — minimal glycemic effect</li>
          <li>Inhalants iso/sevo — minimal effect</li>
          <li>Benzodiazepines — no significant effect</li>
        </ul>

        <p><strong>Intraoperative management:</strong></p>
        <ol>
          <li>BG check on induction (baseline)</li>
          <li>BG check q30-60 min</li>
          <li><strong>Target: 150-300 mg/dL during anesthesia</strong> (slightly hyperglycemic acceptable)</li>
          <li>If BG &lt; 100 → 2.5% dextrose IV</li>
          <li>If BG &lt; 60 → bolus 0.5-1 g/kg dextrose 50% (1-2 mL/kg) slow IV</li>
          <li>If BG &gt; 350 → consider regular insulin 0.1-0.25 U/kg IV (rare needed in routine cases)</li>
        </ol>

        <p><strong>Cataract surgery (common diabetic procedure):</strong></p>
        <ul>
          <li>Long surgery (1-2 hr per eye) — strategy 2 or 3 better</li>
          <li>NMB (atracurium) for eye centering</li>
          <li>Continuous BG monitoring</li>
          <li>Glycemic stability critical (high BG → poor wound healing)</li>
        </ul>

        <p><strong>Recovery:</strong></p>
        <ul>
          <li>Encourage early eating (offer small meal when alert)</li>
          <li>Resume insulin per normal schedule when eating</li>
          <li>Monitor BG q4-6h × 24 hr</li>
          <li>Discharge when eating + glycemic control restored</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hypoglycemia</strong> — most concerning (silent under anesthesia) · monitor + supplement</li>
          <li>Hyperglycemia uncontrolled — DKA risk</li>
          <li>Delayed wound healing (chronic hyperglycemia)</li>
          <li>Increased infection risk</li>
          <li>Stress hyperglycemia from inadequate analgesia</li>
          <li>Volume status changes (osmotic diuresis if hyperglycemic)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>BG q4-6h × 24-48 hr</li>
          <li>Resume insulin schedule</li>
          <li>Monitor for infection at surgical site (delayed healing)</li>
          <li>Owner education: home BG monitoring, signs of hypoglycemia</li>
          <li>Tip: <strong>"Half insulin + first case"</strong> = simplest approach for routine</li>
          <li>Tip: <strong>"Hypoglycemia kills, hyperglycemia heals slowly"</strong> · err on hyperglycemia</li>
          <li>Tip: <strong>Avoid α2 in poorly controlled DM</strong></li>
          <li>Tip: <strong>Cat glargine = continuous</strong>, less concern about timing</li>
          <li>Tip: <strong>Stable + controlled = safe anesthesia</strong> · DKA = postpone</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-trauma-shock',
    titleEn: 'Anesthesia for Trauma / Shock Patient',
    titleTh: 'Anesthesia ในเคส trauma / shock',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['trauma', 'shock', 'GDV', 'hemorrhage', 'emergency'],
    aliases: ['trauma anesthesia', 'shock anesthesia', 'GDV'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Trauma requiring emergency surgery (HBC, fall)</li>
          <li>GDV (gastric dilatation-volvulus)</li>
          <li>Hemoabdomen (splenic mass rupture, HSA)</li>
          <li>Penetrating thoracic / abdominal injury</li>
          <li>Septic peritonitis</li>
          <li>Severe head trauma needing imaging</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Patient too unstable for transport (must stabilize first to extent possible)</li>
          <li>Cardiac arrest unrecovered</li>
          <li>Refusal of resuscitation by owner</li>
        </ul>
      `,
      preparation: `
        <p><strong>"Damage control" approach — stabilize THEN anesthetize:</strong></p>
        <ul>
          <li>Perfect stabilization not always possible (e.g., active hemorrhage)</li>
          <li>Goal: improve to ASA 4-5E status BEFORE anesthesia, not normal</li>
          <li>Surgery may be the resuscitation (e.g., stop hemorrhage)</li>
        </ul>

        <p><strong>Initial assessment of trauma patient:</strong></p>

        <div class="mnemonic">
          <span class="mnem-title">ABCDE — Trauma Primary Survey</span>
          <ul>
            <li><strong>A</strong>irway — patent? oxygen? intubate ถ้าจำเป็น</li>
            <li><strong>B</strong>reathing — rate, effort, SpO2, lung sounds</li>
            <li><strong>C</strong>irculation — HR, BP, pulse, MM, CRT, lactate, PCV/TS</li>
            <li><strong>D</strong>isability — mentation, neurologic exam</li>
            <li><strong>E</strong>xpose — ตรวจตัวเต็มตัว หา injury ที่ซ่อน</li>
          </ul>
          <p class="mnem-tip">ใช้ทุกเคส emergency · ลำดับสำคัญ ไม่ข้ามขั้น</p>
        </div>

        <p><strong>Pre-op stabilization (variable per case):</strong></p>
        <ol>
          <li>O2 supplementation</li>
          <li>2 IV catheters (large bore — 18-16G dog · 18-20G cat)</li>
          <li>Fluid resuscitation:
            <ul>
              <li>Crystalloid 10-20 mL/kg dog · 5-10 mL/kg cat over 10-15 min</li>
              <li>+/- HES 5 mL/kg if low TP and crystalloid alone insufficient</li>
              <li>+/- hypertonic saline 3-5 mL/kg of 7.5% (rapid intravascular expansion)</li>
            </ul>
          </li>
          <li>Blood products if PCV &lt; 20% or active bleeding:
            <ul>
              <li>pRBC: 10 mL/kg over 4 hr</li>
              <li>FFP: 10 mL/kg over 4 hr</li>
            </ul>
          </li>
          <li>Pain control: opioid (methadone, fentanyl)</li>
          <li>Antibiotic if indicated (sepsis, contamination)</li>
          <li>POCUS (FAST scan) — fluid in abdomen / chest</li>
          <li>Quick blood work (CBC, chem, lactate, coag)</li>
        </ol>
      `,
      steps: `
        <p><strong>Anesthesia plan modifications:</strong></p>

        <p><strong>Premedication:</strong></p>
        <ul>
          <li>Opioid only (methadone or fentanyl) — minimal CV effect</li>
          <li>NO ACP (vasodilation worsens shock)</li>
          <li>NO α2 in unstable hypotension</li>
          <li>+/- low-dose midazolam IV</li>
        </ul>

        <p><strong>Induction (CV-sparing approach):</strong></p>
        <ul>
          <li><strong>Etomidate</strong> 1-2 mg/kg + midazolam 0.2 mg/kg IV (best CV stability)</li>
          <li><strong>Ketamine + diazepam</strong> ("ket-val") — sympathomimetic supports BP, good for hypovolemic shock 
            <ul><li>5 mg/kg ket + 0.25 mg/kg diaz IV</li></ul>
          </li>
          <li><strong>Alfaxalone</strong> — better than propofol in cardiovascularly compromised
            <ul><li>1-2 mg/kg titrated</li></ul>
          </li>
          <li>Avoid: propofol high dose (vasodilation, ↓ contractility), thiopental</li>
        </ul>

        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane LOW (1-1.5%)</li>
          <li>Multimodal analgesia (fentanyl CRI, lidocaine CRI dog, ketamine CRI)</li>
          <li>Goal: minimize inhalant → less vasodilation</li>
          <li>NMB rare in trauma (specific indications)</li>
        </ul>

        <p><strong>Intraoperative support:</strong></p>
        <ul>
          <li>Continuous fluid + blood as needed</li>
          <li>Vasopressor early (don't wait for severe hypotension):
            <ul>
              <li>Ephedrine bolus while preparing CRI</li>
              <li>Dopamine 5-10 µg/kg/min CRI (general)</li>
              <li>Norepinephrine 0.05-0.5 µg/kg/min (severe)</li>
            </ul>
          </li>
          <li>Active warming aggressive (hypothermia worsens coagulopathy + acidosis)</li>
          <li>Monitor lactate (decline = good resuscitation)</li>
        </ul>

        <p><strong>GDV-specific (key teaching topic):</strong></p>
        <ol>
          <li>Pre-op decompression (orogastric tube or trocar) BEFORE anesthesia</li>
          <li>Pre-op stabilization 30-60 min if possible</li>
          <li>Lactated Ringer's or hypertonic saline + colloid</li>
          <li>ECG before anesthesia — VPCs common, treat with lidocaine</li>
          <li>Anesthesia: opioid + ket/midaz induction or etomidate</li>
          <li><strong>Lidocaine CRI 50 µg/kg/min</strong> intra/post-op (analgesia + arrhythmia prevention + perfusion)</li>
          <li>Maropitant pre-op</li>
          <li>Antibiotic broad spectrum</li>
          <li>Active warming critical</li>
          <li>Continuous ECG, BP</li>
        </ol>

        <div class="mnemonic">
          <span class="mnem-title">Lethal Triad of Trauma — ป้องกันทั้ง 3</span>
          <ul>
            <li><strong>1</strong>Hypothermia → coagulopathy</li>
            <li><strong>2</strong>Acidosis → ↓ drug effect, arrhythmia</li>
            <li><strong>3</strong>Coagulopathy → ongoing hemorrhage</li>
          </ul>
          <p class="mnem-tip">ทั้ง 3 ตัวทำให้กันแย่ลง — ต้องจัดการทุกตัวพร้อมกัน · ในเคส trauma ที่ตายส่วนใหญ่เกิดจาก triad นี้</p>
        </div>
      `,
      complications: `
        <ul>
          <li>Hypotension worsening — anesthesia adds vasodilation to existing shock</li>
          <li>Cardiac arrest during induction</li>
          <li>Hemorrhage acceleration</li>
          <li>Coagulopathy worsening</li>
          <li>Hypothermia persistent</li>
          <li>Acid-base derangement</li>
          <li>Reperfusion injury (after restoring perfusion)</li>
          <li>SIRS / sepsis post-op</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>ICU 24-72 hr</li>
          <li>Continuous monitoring (ECG, BP, urine output, lactate)</li>
          <li>Continued fluid + blood as needed</li>
          <li>Pain control aggressive (multimodal)</li>
          <li>Antibiotic if indicated</li>
          <li>Watch for: re-bleeding, sepsis, AKI, DIC, ARDS</li>
          <li>Tip: <strong>"Surgery is resuscitation"</strong> in active hemorrhage · don't delay forever for "stability"</li>
          <li>Tip: <strong>"Etomidate + midazolam"</strong> = trauma's gentle induction</li>
          <li>Tip: <strong>"Lethal triad"</strong> — hypothermia, acidosis, coagulopathy · prevent all 3</li>
          <li>Tip: <strong>GDV without lidocaine CRI = malpractice 2025</strong></li>
          <li>Tip: <strong>"Hypertonic saline"</strong> for rapid fluid resus in shock — small volume, big effect</li>
        </ul>
      `
    }
  },


  /* ============================================================
     TIER C · ADVANCED REFERENCE (6)
     ============================================================ */

  {
    id: 'anes-tiva',
    titleEn: 'Total Intravenous Anesthesia (TIVA)',
    titleTh: 'การให้ยาสลบทาง IV ทั้งหมด (TIVA)',
    type: 'procedure',
    system: 'induction',
    species: ['dog', 'cat'],
    tags: ['TIVA', 'CRI', 'propofol', 'alfaxalone', 'PIVA'],
    aliases: ['TIVA', 'IV anesthesia'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>No inhalant available (field, ambulatory)</li>
          <li>Airway surgery (laryngeal paralysis evaluation, BOAS surgery without intubation)</li>
          <li>Bronchoscopy / tracheoscopy</li>
          <li>MRI / CT (no inhalant in scanner)</li>
          <li>Patient with severe pulmonary disease (avoid inhalant high concentration)</li>
          <li>Specific avoidance of inhalant (malignant hyperthermia, etc.)</li>
          <li>Short procedures where inhalant overkill</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe hepatic dysfunction (drug accumulation)</li>
          <li>No reliable IV access</li>
          <li>Long procedure without TIVA equipment (syringe pump)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Equipment:</strong></p>
        <ul>
          <li>Syringe pump (essential for steady CRI)</li>
          <li>Or volumetric infusion pump for diluted solutions</li>
          <li>IV catheter — 2 lines preferred (one for drug, one for fluid)</li>
          <li>Standard monitoring (BP, ECG, SpO2, ETCO2)</li>
          <li>Manual ventilation kit (TIVA may need IPPV)</li>
        </ul>

        <p><strong>TIVA agent selection:</strong></p>
        <ul>
          <li><strong>Propofol</strong> — most common</li>
          <li><strong>Alfaxalone</strong> — better in cat (no Heinz body), CV-stable</li>
          <li>Ketamine combinations (with benzo or dexmed) — for short procedure</li>
          <li>Combinations for "PIVA" (Partial IV Anesthesia) — see below</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard Propofol TIVA:</strong></p>
        <ol>
          <li>Premedication standard (opioid + benzo or low-dose dexmed)</li>
          <li>Pre-O2 5+ min</li>
          <li><strong>Induction bolus</strong>: propofol 4 mg/kg IV slowly</li>
          <li>Intubate (or mask if airway procedure)</li>
          <li><strong>CRI start</strong>: propofol 0.2-0.4 mg/kg/min (12-24 mg/kg/h)
            <ul>
              <li>Adjust based on depth assessment q5min</li>
              <li>Increase if light, decrease if deep</li>
            </ul>
          </li>
          <li><strong>Add adjuncts</strong> for "balanced TIVA":
            <ul>
              <li>Fentanyl CRI 5-10 µg/kg/h (analgesia)</li>
              <li>Lidocaine CRI 50 µg/kg/min (dog only, MAC reduction equivalent)</li>
              <li>Ketamine CRI 0.1-0.3 mg/kg/h (NMDA, analgesia)</li>
            </ul>
          </li>
          <li>Manual or mechanical ventilation as needed (propofol depresses respiration)</li>
          <li>Continuous depth assessment</li>
          <li>End: stop propofol → recovery in 5-15 min</li>
        </ol>

        <p><strong>Alfaxalone TIVA (cat preferred):</strong></p>
        <ol>
          <li>Induction: alfaxalone 2 mg/kg IV slow</li>
          <li>CRI: 8-11 mg/kg/h (cat) · 6-9 mg/kg/h (dog)</li>
          <li>Adjuncts as above</li>
          <li>Recovery slightly slower than propofol but still smooth</li>
        </ol>

        <p><strong>PIVA (Partial IV Anesthesia) concept:</strong></p>
        <ul>
          <li>Combine inhalant + IV CRI</li>
          <li>Goal: reduce inhalant concentration → less vasodilation</li>
          <li>Example: Iso 1.0% + fentanyl CRI 5 µg/kg/h + lidocaine CRI 50 µg/kg/min (dog)</li>
          <li>Equivalent depth to iso 1.5-1.8% alone but better CV stability</li>
        </ul>

        <p><strong>"FLK" (Fentanyl + Lidocaine + Ketamine) bag (dog):</strong></p>
        <ul>
          <li>1 L LRS + Fentanyl 1 mg + Lidocaine 200 mg + Ketamine 60 mg</li>
          <li>Run 5 mL/kg/h</li>
          <li>Provides multimodal analgesia + significant MAC reduction</li>
          <li>Standard for laparotomy, orthopedic surgery</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Apnea — common with propofol CRI · IPPV mandatory often</li>
          <li>Hypotension (vasodilation, less CV reserve than balanced PIVA)</li>
          <li>Drug accumulation in long procedures (recovery prolonged)</li>
          <li>Pump failure → loss of anesthesia (have backup plan)</li>
          <li>Catheter disconnect → loss of CRI</li>
          <li>Awareness if dose too low without monitoring</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor recovery closely 30+ min</li>
          <li>Continue fluid + analgesia</li>
          <li>Smooth recovery typical</li>
          <li>Tip: <strong>"TIVA = pump, monitor, plan B"</strong> · pump failure = backup</li>
          <li>Tip: <strong>"PIVA = best of both worlds"</strong> · low inhalant + IV CRI = stability</li>
          <li>Tip: <strong>"FLK in 1L bag"</strong> = teaching standard for multimodal anesthesia</li>
          <li>Tip: <strong>Alfaxalone for cat TIVA</strong> · propofol repeated cat = Heinz body</li>
          <li>Tip: <strong>Airway surgery without ETT = TIVA</strong> · don't lose airway</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-mechanical-ventilation',
    titleEn: 'Mechanical Ventilation (IPPV)',
    titleTh: 'การช่วยหายใจด้วยเครื่อง',
    type: 'procedure',
    system: 'equipment',
    species: ['dog', 'cat'],
    tags: ['ventilation', 'IPPV', 'PEEP', 'tidal volume', 'mechanical'],
    aliases: ['IPPV', 'ventilator', 'mechanical ventilation'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Hypoventilation under anesthesia (ETCO2 &gt; 50)</li>
          <li>Apnea (drug-induced, post-induction)</li>
          <li>Thoracotomy (open chest — must positive pressure ventilate)</li>
          <li>NMB administration (paralysis = no spontaneous breathing)</li>
          <li>Prolonged anesthesia (&gt; 1 hr — fatigue prevention)</li>
          <li>Specific surgical positioning (ventral recumbency, abdomen pushing on diaphragm)</li>
          <li>Brachycephalic with high airway resistance</li>
          <li>Severe pulmonary disease (atelectasis prevention)</li>
          <li>ICU support (severe pneumonia, ARDS)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None absolute — but severe pneumothorax untreated worsens with positive pressure</li>
          <li>Pop-off valve closed inadvertently → barotrauma</li>
        </ul>
      `,
      preparation: `
        <p><strong>Modes of ventilation:</strong></p>
        <ul>
          <li><strong>Volume-controlled (VC):</strong>
            <ul>
              <li>Set: tidal volume (TV), rate (RR), I:E ratio, PEEP</li>
              <li>Pressure varies with compliance</li>
              <li>Common in vet anesthesia ventilators</li>
            </ul>
          </li>
          <li><strong>Pressure-controlled (PC):</strong>
            <ul>
              <li>Set: peak pressure, RR, I:E, PEEP</li>
              <li>Volume varies with compliance</li>
              <li>Better for low-compliance lung (ARDS)</li>
            </ul>
          </li>
          <li><strong>Assist-control / SIMV:</strong> patient triggers + machine assists (advanced ICU)</li>
          <li><strong>Manual bag-squeezing:</strong> always available, no equipment</li>
        </ul>
      `,
      steps: `
        <p><strong>Initial settings (volume-controlled):</strong></p>
        <ul>
          <li><strong>Tidal volume (TV): 10-15 mL/kg</strong>
            <ul>
              <li>Lower (8-10) in obese, cardiac patient</li>
              <li>Lung-protective: 6-8 mL/kg in ARDS</li>
            </ul>
          </li>
          <li><strong>Respiratory rate (RR): 8-12/min</strong>
            <ul>
              <li>Cat: 10-15/min (smaller TV, higher rate)</li>
              <li>Adjust to target ETCO2 35-45</li>
            </ul>
          </li>
          <li><strong>I:E ratio: 1:2 standard</strong> (1:3 in obstructive lung)</li>
          <li><strong>PEEP: 3-5 cmH2O</strong> (prevents atelectasis · higher 5-10 in pulmonary dz)</li>
          <li><strong>Peak pressure: &lt; 20 cmH2O</strong> normal lung · &lt; 30 in disease</li>
          <li><strong>FiO2: 100%</strong> typically · can reduce to 40-60% in stable</li>
        </ul>

        <p><strong>Manual ventilation technique:</strong></p>
        <ol>
          <li>Close pop-off valve (or leave 1/4 open)</li>
          <li>Squeeze bag firmly but smoothly</li>
          <li>Watch chest rise — should be visible but not exaggerated</li>
          <li>Watch peak pressure manometer — keep &lt; 20 cmH2O</li>
          <li>Release fully — let chest fall</li>
          <li>Rate: 1 squeeze every 5-6 sec (10-12/min)</li>
          <li>Reopen pop-off when done with breath</li>
        </ol>

        <p><strong>Targets:</strong></p>
        <ul>
          <li>ETCO2 35-45 mmHg (gold standard guide)</li>
          <li>SpO2 ≥ 95%</li>
          <li>Peak pressure &lt; 20 cmH2O</li>
          <li>Visible appropriate chest excursion</li>
        </ul>

        <p><strong>Adjustments based on findings:</strong></p>
        <ul>
          <li><strong>ETCO2 &gt; 50 (hypoventilation):</strong> ↑ TV by 2 mL/kg or ↑ RR by 2-4</li>
          <li><strong>ETCO2 &lt; 30 (hyperventilation):</strong> ↓ RR or ↓ TV</li>
          <li><strong>SpO2 &lt; 95%</strong> with normal ETCO2: ↑ FiO2, recruitment maneuver, ↑ PEEP</li>
          <li><strong>Peak pressure ↑ suddenly:</strong> check ETT (kink), bronchospasm, pneumothorax</li>
          <li><strong>BP drops with ventilation:</strong> too high PEEP, hypovolemia (positive pressure ↓ venous return)</li>
        </ul>

        <p><strong>Recruitment maneuver (atelectasis):</strong></p>
        <ol>
          <li>Hold pressure 30-40 cmH2O × 30 sec (gentle hand squeeze, hold)</li>
          <li>Or: increase PEEP to 10 + sigh breaths q30 min</li>
          <li>Caution: may drop BP transiently</li>
        </ol>

        <p><strong>Weaning from IPPV:</strong></p>
        <ol>
          <li>Stop inhalant when ready</li>
          <li>Reduce rate (allow CO2 to build, stimulate spontaneous breathing)</li>
          <li>Allow ETCO2 to drift to 50-55 → respiratory drive triggers</li>
          <li>When patient breathing spontaneously with adequate TV → discontinue IPPV</li>
          <li>Continue O2 5-10 min before extubation</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Barotrauma</strong> — pneumothorax, pneumomediastinum (high pressure)</li>
          <li><strong>Volutrauma</strong> — alveolar overdistension (high TV)</li>
          <li><strong>Hypotension</strong> — ↑ intrathoracic pressure → ↓ venous return → ↓ CO</li>
          <li><strong>Atelectotrauma</strong> — repeated open-close of alveoli (low PEEP)</li>
          <li><strong>Hypocapnia</strong> — over-ventilation → cerebral vasoconstriction, alkalosis</li>
          <li><strong>Hypercapnia</strong> — under-ventilation → acidosis, sympathetic activation</li>
          <li><strong>Ventilator-associated pneumonia</strong> (long-term ICU)</li>
          <li>Pop-off valve closed → fatal barotrauma</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Spontaneous breathing assessment after IPPV</li>
          <li>Adequate TV + RR before extubation</li>
          <li>Continue O2 5-10 min</li>
          <li>Monitor for residual hypoventilation post-op (especially with prolonged opioid)</li>
          <li>Tip: <strong>"TV 10-15 mL/kg, RR 10-12, target ETCO2 40"</strong> = starting point</li>
          <li>Tip: <strong>"Always pop-off open before disconnecting"</strong> · most fatal rookie error</li>
          <li>Tip: <strong>"BP drops with ventilation"</strong> = too much pressure or hypovolemia</li>
          <li>Tip: <strong>"PEEP 3-5 default"</strong> — anti-atelectasis insurance</li>
          <li>Tip: <strong>"Manual bag = always works"</strong> when machine fails</li>
          <li>Tip: <strong>Capnography is your guide</strong> — trust ETCO2 over rate alone</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-pain-scoring',
    titleEn: 'Pain Scoring Systems (Glasgow CMPS-SF, Botucatu, Feline Grimace)',
    titleTh: 'ระบบประเมินปวด',
    type: 'procedure',
    system: 'pain',
    species: ['dog', 'cat'],
    tags: ['pain score', 'Glasgow', 'CMPS', 'Botucatu', 'Feline Grimace', 'assessment'],
    aliases: ['pain scoring', 'pain scale', 'ประเมินปวด'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Post-op pain assessment (every patient)</li>
          <li>Chronic pain monitoring</li>
          <li>Trauma pain assessment</li>
          <li>Documentation for pain management protocol</li>
          <li>Teaching tool for staff + students</li>
          <li>Research data collection</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — assessment, not procedure</li>
          <li>Patient too sedated/recovering — wait until interactive</li>
        </ul>
      `,
      preparation: `
        <p><strong>Why use validated pain scores:</strong></p>
        <ul>
          <li>Subjective &quot;does this dog look painful?&quot; varies widely between observers</li>
          <li>Cat hides pain — easy to under-medicate</li>
          <li>Validated scales improve consistency, communication, treatment</li>
          <li>Documentation = quality care + medico-legal</li>
        </ul>

        <p><strong>Equipment:</strong></p>
        <ul>
          <li>Score sheet (printed or digital)</li>
          <li>Quiet observation area</li>
          <li>Treats / interactive toy (optional for behavior assessment)</li>
        </ul>
      `,
      steps: `
        <p><strong>1. Glasgow Composite Measure Pain Scale - Short Form (CMPS-SF) — DOG GOLD STANDARD:</strong></p>

        <p>30 descriptors across 6 categories. Score 0-24 (some versions 0-20)</p>

        <p><strong>Categories:</strong></p>
        <ol>
          <li><strong>Look at dog:</strong> vocalization (quiet, whimpering, crying, screaming)</li>
          <li><strong>Approach kennel + assess gait:</strong> normal, lame, slow/reluctant, stiff</li>
          <li><strong>Apply gentle pressure near wound:</strong> calm, looks, growls, snaps/aggressive</li>
          <li><strong>Assess overall demeanor:</strong> happy, quiet, indifferent, nervous/anxious, depressed</li>
          <li><strong>Assess body posture:</strong> normal, hunched, tense, rigid</li>
          <li><strong>Assess mobility:</strong> moves easily, lame, stiff/reluctant, can't rise</li>
        </ol>

        <p><strong>Action threshold:</strong></p>
        <ul>
          <li>Score &lt; 6/24 — adequate analgesia</li>
          <li><strong>Score ≥ 6/24 → administer rescue analgesia</strong></li>
          <li>Reassess 30 min post-administration</li>
        </ul>

        <p>Free download: <em>newmetrica.com</em> (also app available)</p>

        <p><strong>2. UNESP-Botucatu Multidimensional Composite Pain Scale — CAT GOLD STANDARD:</strong></p>

        <p>10 items across 3 subscales. Score 0-30</p>

        <p><strong>Subscales:</strong></p>
        <ol>
          <li><strong>Pain expression</strong> (4 items): posture, comfort, activity, attitude</li>
          <li><strong>Psychomotor change</strong> (3 items): vocalization, body tension, miscellaneous behaviors</li>
          <li><strong>Physiological variables</strong> (3 items): blood pressure, pupil dilation, appetite</li>
        </ol>

        <p><strong>Action threshold:</strong></p>
        <ul>
          <li>Score &lt; 8/30 — usually adequate</li>
          <li><strong>Score ≥ 8/30 → rescue analgesia</strong></li>
        </ul>

        <p><strong>3. Feline Grimace Scale (FGS) — NEW, EASIER for cat:</strong></p>

        <p>Just 5 facial action units. Each scored 0-2. Total 0-10. Validated 2019.</p>

        <ol>
          <li><strong>Ear position:</strong>
            <ul>
              <li>0 = forward facing</li>
              <li>1 = slightly pulled back/flattened</li>
              <li>2 = flattened, rotated outward</li>
            </ul>
          </li>
          <li><strong>Orbital tightening:</strong>
            <ul>
              <li>0 = open eyes</li>
              <li>1 = partially closed</li>
              <li>2 = squinted</li>
            </ul>
          </li>
          <li><strong>Muzzle tension:</strong>
            <ul>
              <li>0 = relaxed, round</li>
              <li>1 = mildly tense</li>
              <li>2 = pronounced tension, elliptical</li>
            </ul>
          </li>
          <li><strong>Whiskers position:</strong>
            <ul>
              <li>0 = loose, curved</li>
              <li>1 = slightly straightened</li>
              <li>2 = straight, forward</li>
            </ul>
          </li>
          <li><strong>Head position:</strong>
            <ul>
              <li>0 = above shoulders</li>
              <li>1 = aligned with body</li>
              <li>2 = below shoulders / tucked</li>
            </ul>
          </li>
        </ol>

        <p><strong>Action threshold:</strong></p>
        <ul>
          <li><strong>Score ≥ 4/10 → rescue analgesia</strong></li>
          <li>Excellent for owner home assessment too</li>
        </ul>

        <p>Free app: "Feline Grimace Scale" (iOS/Android, University of Montreal)</p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Pain Score Cutoffs — เกณฑ์ให้ยาแก้ปวด</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">≥ 6/24</span>
              <span class="num-label">Glasgow CMPS (หมา)</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 8/30</span>
              <span class="num-label">Botucatu (แมว)</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 4/10</span>
              <span class="num-label">Feline Grimace ⭐</span>
            </div>
            <div class="num-card">
              <span class="num-big">≥ 2/4</span>
              <span class="num-label">CSU Acute</span>
            </div>
          </div>
          <p class="mnem-tip">📌 <strong>"6-8-4-2"</strong> เลขจำง่าย · เกินเกณฑ์ = ฉีดยาแก้ปวดทันที · reassess 30 นาที · <strong>Feline Grimace = ง่ายสุดสำหรับแมว</strong> ดู 5 จุดบนหน้า</p>
        </div>

        <p><strong>4. CSU Acute Pain Scale (Colorado State):</strong></p>
        <ul>
          <li>0-4 scale (simple) for both dog &amp; cat</li>
          <li>Pictorial guide</li>
          <li>Free download CSU vet website</li>
          <li>Easy for general practice</li>
          <li>Action: ≥ 2 → analgesia, ≥ 3 → multimodal</li>
        </ul>

        <p><strong>5. Chronic pain scoring:</strong></p>
        <ul>
          <li><strong>CBPI (Canine Brief Pain Inventory)</strong> — owner-reported, dog OA · Univ of Pennsylvania
            <ul><li>Pain Severity Score + Pain Interference Score · 0-10 each</li></ul>
          </li>
          <li><strong>FMPI (Feline Musculoskeletal Pain Index)</strong> — owner-reported, cat OA</li>
          <li><strong>HCPI (Helsinki Chronic Pain Index)</strong> — dog chronic pain</li>
        </ul>

        <p><strong>Implementation in clinic:</strong></p>
        <ol>
          <li>Assign pain score q4-6h post-op (or more frequent if high)</li>
          <li>Document in chart</li>
          <li>If score above threshold → rescue analgesia per pre-set protocol</li>
          <li>Reassess 30 min after intervention</li>
          <li>Owner education: home pain scoring (esp FGS for cat, CBPI for dog OA)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Inter-observer variability (less with validated scales but still some)</li>
          <li>Patient temperament confounds (anxious vs painful)</li>
          <li>Sedation masks signs (esp with α2)</li>
          <li>Cultural / breed differences in expression</li>
          <li>Stoic patient (cat especially) under-scored</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document score + intervention in record</li>
          <li>Trend over time (single score less useful than trend)</li>
          <li>Train all staff to same scale (consistency)</li>
          <li>Tip: <strong>"Use the validated scale, not gestalt"</strong> — proven better</li>
          <li>Tip: <strong>"Cat = Feline Grimace Scale"</strong> — easiest, most accessible</li>
          <li>Tip: <strong>"Glasgow CMPS-SF for dog"</strong> = standard of care</li>
          <li>Tip: <strong>Free apps available</strong> — use them in clinic</li>
          <li>Tip: <strong>Owner education on home scoring</strong> — empowers them, improves chronic pain management</li>
          <li>Tip: <strong>Reassess after intervention</strong> — score should drop within 30 min if effective</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-dental',
    titleEn: 'Dental Anesthesia (Comprehensive Protocol)',
    titleTh: 'Anesthesia สำหรับงานทันตกรรม',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['dental', 'COHAT', 'extraction', 'nerve block', 'local'],
    aliases: ['dental anesthesia', 'COHAT', 'ขูดหินปูน'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>COHAT (Comprehensive Oral Health Assessment + Treatment) — dental cleaning + radiographs</li>
          <li>Extraction (single or multiple)</li>
          <li>Periodontal surgery</li>
          <li>Endodontic procedures (root canal)</li>
          <li>Oral mass biopsy / removal</li>
          <li>Maxillofacial surgery (fracture repair)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Unstable patient (cardiac, renal — requires risk-benefit discussion)</li>
          <li>Severe hepatic dysfunction (impaired drug clearance)</li>
          <li>Owner unwilling to consent to anesthesia (avoid "anesthesia-free" dentistry — pain + incomplete treatment)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Pre-anesthetic workup:</strong></p>
        <ul>
          <li>Geriatric panel for senior patient (chem, urine, +/- BP, ECG)</li>
          <li>Full PE including oral exam</li>
          <li>Dental rad (post-induction)</li>
          <li>Owner consent for extraction (may be unforeseen)</li>
        </ul>

        <p><strong>Why dental anesthesia is high-risk despite "routine":</strong></p>
        <ul>
          <li>Geriatric population (often)</li>
          <li>Long procedures (1-3 hr typical)</li>
          <li>Hypothermia risk (water spray cooling instruments)</li>
          <li>Aspiration risk (water + debris)</li>
          <li>Prolonged head-down positioning</li>
          <li>Painful procedure if extractions done</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard COHAT anesthesia protocol:</strong></p>

        <p><strong>Pre-op:</strong></p>
        <ol>
          <li>Maropitant 1 mg/kg SC the morning of (regurgitation prevention)</li>
          <li>+/- gabapentin 10-20 mg/kg PO at home 2 hr before (anxious dog, cat)</li>
          <li>IV catheter on arrival</li>
          <li>Pre-O2 5 min</li>
        </ol>

        <p><strong>Premed:</strong></p>
        <ul>
          <li>Methadone 0.2-0.3 mg/kg IM</li>
          <li>+ Dexmedetomidine 5 µg/kg IM (or low-dose ACP if cardiac concern)</li>
          <li>+ Maropitant if not given orally</li>
        </ul>

        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-3 mg/kg IV slow · or alfaxalone 1-2 mg/kg</li>
          <li>Intubate with cuff (essential for water/debris protection)</li>
          <li>Pack pharynx with gauze (further aspiration protection)</li>
        </ul>

        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane 1.5-2.5%</li>
          <li>Or sevoflurane 2.5-3.5%</li>
          <li>Continuous monitoring</li>
          <li>Active warming (Bair Hugger)</li>
          <li>HME filter on ETT</li>
          <li>Moderate fluid 3-5 mL/kg/h</li>
        </ul>

        <p><strong>NERVE BLOCKS — KEY for extractions:</strong></p>
        <p>Use bupivacaine 0.5% (or 50:50 lido + bup mix). Max 2 mg/kg total bupivacaine.</p>

        <ol>
          <li><strong>Infraorbital block</strong> — maxillary canine, premolars
            <ul>
              <li>Lift upper lip · find foramen at gumline above 3rd PM</li>
              <li>Insert 25G needle 0.5-1 cm</li>
              <li>0.1-0.5 mL bupivacaine</li>
            </ul>
          </li>
          <li><strong>Maxillary block (V2)</strong> — entire upper jaw on side
            <ul>
              <li>Approach caudal to last molar, into pterygopalatine fossa</li>
              <li>0.5-1 mL bupivacaine</li>
            </ul>
          </li>
          <li><strong>Middle mental block</strong> — mandibular incisors, canine
            <ul>
              <li>Lift lower lip · find foramen below 2nd PM</li>
              <li>0.1-0.3 mL bupivacaine</li>
            </ul>
          </li>
          <li><strong>Caudal mandibular block (inferior alveolar)</strong> — entire lower jaw on side
            <ul>
              <li>Intra-oral approach: caudal lingual to last molar, mandibular foramen</li>
              <li>Or extra-oral: ventral approach 0.5 cm rostral to angular process</li>
              <li>0.5-1 mL bupivacaine</li>
            </ul>
          </li>
        </ol>

        <p><strong>"Quad block" for full mouth extraction:</strong></p>
        <ul>
          <li>Both maxillary blocks (V2) + both caudal mandibular blocks</li>
          <li>Total volume calculation important — stay under max bupivacaine dose</li>
        </ul>

        <p><strong>Position considerations:</strong></p>
        <ul>
          <li>Lateral recumbency (most common) · alternate sides for symmetric cleaning</li>
          <li>Sternal recumbency for some procedures</li>
          <li><strong>Head slightly down</strong> — water/debris drains out, not back to airway</li>
          <li>Pack pharynx with gauze (changed q15-30 min)</li>
          <li>Pack ETT cuff snug but not over-pressurized</li>
        </ul>

        <p><strong>Monitoring during dental:</strong></p>
        <ul>
          <li>ETCO2 — confirms ETT placement (water can dislodge)</li>
          <li>SpO2</li>
          <li>BP</li>
          <li>ECG</li>
          <li>Temp continuously (hypothermia common with water cooling)</li>
        </ul>

        <p><strong>Recovery:</strong></p>
        <ul>
          <li>Suction oropharynx + remove gauze before extubation</li>
          <li>Position sternal</li>
          <li>Continue O2 5-10 min</li>
          <li>Soft food 2-4 hr post-recovery</li>
          <li>Pain control: opioid + NSAID if no contraindication</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Aspiration</strong> from water/debris — biggest risk · pharyngeal pack mandatory</li>
          <li><strong>Hypothermia</strong> — common · active warming throughout</li>
          <li><strong>ETT displacement</strong> from manipulation · auscultate often</li>
          <li><strong>Mandibular fracture</strong> during extraction (esp small breed with periodontal dz)</li>
          <li><strong>Bleeding</strong> from extraction sockets</li>
          <li><strong>Bacteremia</strong> transient — antibiotic if heart disease</li>
          <li><strong>Pain post-op</strong> if blocks not done · use blocks!</li>
          <li>Long anesthesia time → standard concerns</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Soft / canned food 7-14 days after extraction</li>
          <li>Pain control 5-7 days (NSAID + opioid)</li>
          <li>+/- antibiotic for severe periodontitis or extractions</li>
          <li>Warm chamomile rinse for healing (anti-inflammatory)</li>
          <li>Recheck in 1-2 weeks</li>
          <li>Tip: <strong>"Nerve blocks for ALL dental work"</strong> — standard of care · pain control + reduces inhalant</li>
          <li>Tip: <strong>"Pharynx pack + cuffed ETT"</strong> = aspiration prevention</li>
          <li>Tip: <strong>"Active warming throughout"</strong> — water cooling = hypothermia engine</li>
          <li>Tip: <strong>"Anesthesia-free dentistry = bad medicine"</strong> · pain, incomplete, traumatic</li>
          <li>Tip: <strong>Geriatric dental patient</strong> — full pre-anesthetic workup, careful protocol</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-ophthalmic',
    titleEn: 'Ophthalmic Anesthesia',
    titleTh: 'Anesthesia งานตา',
    type: 'procedure',
    system: 'specific',
    species: ['dog', 'cat'],
    tags: ['ophthalmic', 'eye', 'cataract', 'OCR', 'IOP', 'NMB'],
    aliases: ['ophthalmic anesthesia', 'eye surgery', 'cataract'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Cataract surgery (phacoemulsification)</li>
          <li>Corneal surgery (graft, ulcer)</li>
          <li>Lens luxation repair</li>
          <li>Glaucoma surgery</li>
          <li>Enucleation</li>
          <li>Eyelid surgery (entropion, mass removal)</li>
          <li>Indolent ulcer treatment</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None specific — but high-risk patient assessed carefully</li>
        </ul>
      `,
      preparation: `
        <p><strong>Special considerations for ophthalmic anesthesia:</strong></p>
        <ul>
          <li><strong>Oculocardiac reflex (OCR)</strong> — vagal-mediated bradycardia from eye manipulation
            <ul>
              <li>Triggered by traction on extraocular muscles, pressure on globe</li>
              <li>Severe bradycardia → asystole possible</li>
              <li>Pre-treat or treat promptly with anticholinergic</li>
            </ul>
          </li>
          <li><strong>Intraocular pressure (IOP)</strong> — must avoid increase
            <ul>
              <li>Open globe surgery: IOP rise → vitreous loss</li>
              <li>Avoid: coughing, gagging, struggling, ketamine, succinylcholine</li>
              <li>Smooth induction + recovery essential</li>
            </ul>
          </li>
          <li><strong>Eye centering</strong> — for intraocular surgery, eye must be central + still
            <ul>
              <li>NMB (atracurium) often used</li>
              <li>Adequate anesthesia depth alone insufficient for surgery</li>
            </ul>
          </li>
        </ul>

        <p><strong>Pre-anesthetic workup:</strong></p>
        <ul>
          <li>Standard senior workup (cataract patients often diabetic, geriatric)</li>
          <li>BP measurement</li>
          <li>+/- ECG</li>
          <li>Glucose if diabetic</li>
          <li>Topical eye prep (chlorhexidine 1:50, betadine 1:50)</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard cataract surgery protocol:</strong></p>

        <p><strong>Premed:</strong></p>
        <ul>
          <li>Methadone 0.2 mg/kg IM</li>
          <li>+ <strong>Glycopyrrolate 0.01 mg/kg IM</strong> (anticholinergic — prevent OCR)
            <ul><li>Glyco preferred over atropine (less arrhythmogenic, longer)</li></ul>
          </li>
          <li>+/- low-dose dexmed 2-3 µg/kg (CV stable, avoid OCR concern with bradycardia)</li>
          <li>Avoid: ketamine (↑ IOP), high-dose dexmed (bradycardia + OCR concern)</li>
          <li>Antiemetic (maropitant 1 mg/kg SC) — prevent retching at induction/recovery</li>
        </ul>

        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV (CV stable, ↓ IOP slightly)</li>
          <li>Or alfaxalone 1-2 mg/kg (similar effect)</li>
          <li><strong>Avoid ketamine</strong> (↑ IOP, dissociative state may have spontaneous movement)</li>
          <li>Smooth, slow induction — avoid coughing/struggling</li>
          <li>Topical lidocaine spray on larynx (cat) before intubation — prevent laryngospasm cough</li>
        </ul>

        <p><strong>Maintenance + NMB:</strong></p>
        <ul>
          <li>Isoflurane 1.5-2% or sevoflurane (rapid)</li>
          <li>Mechanical ventilation (IPPV) — patient paralyzed cannot breathe</li>
          <li>Verify deep anesthesia BEFORE NMB:
            <ul>
              <li>Eye position rotated</li>
              <li>Palpebral absent</li>
              <li>Jaw flaccid</li>
            </ul>
          </li>
          <li><strong>Atracurium 0.2 mg/kg IV</strong> (Hofmann elimination — independent of organ function)
            <ul>
              <li>Onset 3-5 min</li>
              <li>Eye becomes central within 5 min</li>
              <li>Top-up 1/3 dose when 1-2 train-of-four (TOF) twitches return</li>
            </ul>
          </li>
          <li>Or rocuronium 0.4-0.6 mg/kg (faster onset, sugammadex reversible)</li>
          <li><strong>TOF monitor</strong> on facial nerve (twitching) or peroneal — confirms block depth</li>
        </ul>

        <p><strong>Surgical setup:</strong></p>
        <ul>
          <li>Dorsal recumbency, head supported</li>
          <li>Surgeon-friendly head position (microscope alignment)</li>
          <li>Topical eye anesthetic (proparacaine, oxybuprocaine) — even with NMB</li>
          <li>+/- retrobulbar block (bupivacaine) for additional analgesia (less common with NMB)</li>
        </ul>

        <p><strong>Monitoring intensified:</strong></p>
        <ul>
          <li>ECG continuous (OCR monitoring)</li>
          <li>BP q5min</li>
          <li>SpO2, ETCO2 (essential — patient cannot signal hypoventilation)</li>
          <li>TOF q5-10 min</li>
          <li>Temp</li>
          <li>Visual chest excursion (since paralyzed)</li>
        </ul>

        <p><strong>OCR management:</strong></p>
        <ol>
          <li>Surgeon stop manipulation — usually resolves in 30-60 sec</li>
          <li>If persistent or severe (HR &lt; 40 dog · &lt; 80 cat) → atropine 0.02 mg/kg IV
            <ul><li>Pre-treatment with glyco often prevents</li></ul>
          </li>
          <li>If asystole → CPR</li>
        </ol>

        <p><strong>End of case — reversal:</strong></p>
        <ol>
          <li>Stop NMB</li>
          <li>Wait until TOF ≥ 2 twitches</li>
          <li><strong>Sugammadex 2-4 mg/kg IV</strong> (rocuronium) — 1-2 min reversal</li>
          <li>Or <strong>neostigmine 0.04 mg/kg + glycopyrrolate 0.01 mg/kg</strong> (atracurium) — slower</li>
          <li>Confirm TOF 4/4 strong before extubation</li>
          <li>Confirm spontaneous breathing adequate</li>
        </ol>

        <p><strong>Recovery — must be smooth:</strong></p>
        <ul>
          <li>No coughing/gagging on extubation (could rupture sutures, raise IOP)</li>
          <li>Lidocaine 1-2 mg/kg IV slow before extubation (suppress cough — dog only)</li>
          <li>Quiet, dim room</li>
          <li>E-collar immediately</li>
          <li>Topical NSAID + antibiotic</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>OCR with bradycardia/asystole</strong> — most concerning, prevent + treat</li>
          <li><strong>Vitreous loss</strong> if IOP rises during open globe (cough, vomit, struggle)</li>
          <li><strong>Hypoventilation</strong> from NMB without IPPV</li>
          <li><strong>Awareness with NMB</strong> if anesthesia inadequate (catastrophic)</li>
          <li><strong>Residual paralysis</strong> at extubation</li>
          <li><strong>Corneal abrasion</strong> from positioning (lubricant + protect)</li>
          <li>Suture dehiscence from rough recovery</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>E-collar 14 days</li>
          <li>Topical medications q4-6h initial (antibiotic + steroid + NSAID)</li>
          <li>Systemic NSAID 5-7 days (if not contraindicated)</li>
          <li>Restrict activity 2 weeks</li>
          <li>Recheck day 1, day 7, day 14</li>
          <li>Tip: <strong>"OCR = vagal, prevent with glyco premed"</strong></li>
          <li>Tip: <strong>"Anesthesia depth FIRST, NMB second"</strong> — never paralyze without confirmed depth</li>
          <li>Tip: <strong>"TOF monitor mandatory"</strong> — guess work = malpractice</li>
          <li>Tip: <strong>"Smooth recovery = saved suture"</strong> · lidocaine cough suppression</li>
          <li>Tip: <strong>"Avoid ketamine in eye surgery"</strong> · raises IOP</li>
          <li>Tip: <strong>Diabetic cataract patient</strong> = very common · BG monitoring critical</li>
        </ul>
      `
    }
  },

  {
    id: 'anes-exotic',
    titleEn: 'Exotic Animal Anesthesia (Rabbit, Rodent, Bird)',
    titleTh: 'Anesthesia ในสัตว์ exotic',
    type: 'procedure',
    system: 'specific',
    species: ['exotic'],
    tags: ['exotic', 'rabbit', 'rodent', 'bird', 'GI stasis'],
    aliases: ['exotic anesthesia', 'rabbit', 'guinea pig', 'parrot'],
    source: 'Ko Anesthesia Handbook, 3rd ed. + BSAVA Manual of Exotic Pets',
    sections: {
      indications: `
        <ul>
          <li>Surgery in pet exotic species</li>
          <li>Diagnostic imaging (radiograph, US)</li>
          <li>Dental work (rabbit, rodent — common)</li>
          <li>Fracture stabilization</li>
          <li>Tumor removal</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severely debilitated without stabilization</li>
          <li>Inadequate equipment / experience for species</li>
          <li>GI stasis untreated (rabbit) — high-risk</li>
        </ul>
      `,
      preparation: `
        <p><strong>General principles for exotic anesthesia:</strong></p>
        <ul>
          <li>Higher metabolic rate → ↑ heat loss, ↑ drug requirements per kg</li>
          <li>Smaller body mass → tiny dose precision required</li>
          <li>Different anatomy → intubation challenging</li>
          <li>Stress impact significant → minimize handling</li>
          <li>Less monitoring data — interpolate from companion species + experience</li>
        </ul>

        <hr>

        <p><strong>RABBIT ANESTHESIA:</strong></p>

        <p><strong>Special challenges:</strong></p>
        <ul>
          <li><strong>NEVER fast &gt; 1-2 hr</strong> (cannot vomit · prolonged fast = GI stasis = death)</li>
          <li>Stress → catecholamine surge → arrhythmia</li>
          <li>Difficult intubation (large tongue, narrow oral opening)</li>
          <li>Long, fragile spine — careful handling</li>
          <li>Atropine often <strong>ineffective</strong> (atropinesterase enzyme degrades it) — use glycopyrrolate instead</li>
          <li>High mortality reported in literature (~1-5% even in routine)</li>
        </ul>

        <p><strong>Premedication:</strong></p>
        <ul>
          <li>Buprenorphine 0.02-0.05 mg/kg SC + Midazolam 0.5 mg/kg IM</li>
          <li>Or Buprenorphine + Dexmed 0.025-0.05 mg/kg IM</li>
          <li>Glycopyrrolate 0.01 mg/kg IM (NOT atropine)</li>
          <li>Maropitant for visceral pain (off-label)</li>
        </ul>

        <p><strong>Induction:</strong></p>
        <ul>
          <li>Mask induction with sevoflurane (less stress than IV)</li>
          <li>Or alfaxalone 4-6 mg/kg IM (good IM combo)</li>
          <li>Or "Hypnorm + midazolam" combo (older protocol)</li>
        </ul>

        <p><strong>Intubation:</strong></p>
        <ul>
          <li>Difficult — narrow oral opening</li>
          <li>Methods:
            <ul>
              <li>Blind technique (rotate ETT into trachea)</li>
              <li>Endoscope-guided (ideal)</li>
              <li>Otoscope visualization</li>
            </ul>
          </li>
          <li>Or use laryngeal mask (V-Gel for rabbit) — easier alternative</li>
          <li>ETT size 2-4 mm uncuffed</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>SpO2 (ear or paw)</li>
          <li>HR via Doppler (140-180 normal anesthetized)</li>
          <li>Temp continuous (drops fast)</li>
          <li>Respiratory rate (normal 30-60 anesthetized)</li>
          <li>Capnography if intubated</li>
        </ul>

        <p><strong>Post-op:</strong></p>
        <ul>
          <li>Offer hay + critical care food (Oxbow Critical Care) ASAP</li>
          <li>Encourage drinking</li>
          <li>Monitor fecal output</li>
          <li>If GI stasis develops: prokinetic (cisapride / metoclopramide), pain control, fluids, syringe feeding</li>
          <li>Pain control essential — rabbits hide pain</li>
        </ul>

        <hr>

        <p><strong>SMALL RODENT (guinea pig, rat, hamster, gerbil):</strong></p>

        <ul>
          <li>NEVER fast &gt; 1 hr (high metabolic rate)</li>
          <li>Mask induction sevoflurane preferred</li>
          <li>Often not intubated (use mask throughout)</li>
          <li>Small drug volumes — dilute precisely</li>
          <li>Tiny IV access — IO often used</li>
          <li>Hypothermia very fast → continuous active warming</li>
          <li>Common premed: buprenorphine + midazolam IM</li>
          <li>Guinea pig: vit C support, GI stasis risk like rabbit</li>
        </ul>

        <hr>

        <p><strong>BIRD (parrot, raptor):</strong></p>

        <p><strong>Unique anatomy/physiology:</strong></p>
        <ul>
          <li>Air sac system (no diaphragm)</li>
          <li>High metabolic rate</li>
          <li>Stress = death (handle minimal)</li>
          <li>Crop content = aspiration risk</li>
        </ul>

        <p><strong>Pre-anesthetic:</strong></p>
        <ul>
          <li>Fast 2-4 hr small bird · 4-12 hr large bird (empty crop)</li>
          <li>Pre-O2 if tolerated (mask, transparent)</li>
          <li>Examine in towel restraint to minimize stress</li>
        </ul>

        <p><strong>Mask induction sevoflurane:</strong></p>
        <ul>
          <li>Standard for routine procedures</li>
          <li>Sevo 5% then maintain 2-3%</li>
          <li>Recovery rapid</li>
        </ul>

        <p><strong>Intubation:</strong></p>
        <ul>
          <li>Easy — large glottis at base of tongue, no epiglottis</li>
          <li>Uncuffed ETT (complete tracheal rings — cuff = mucosal injury)</li>
          <li>Size: 1.5-3 mm depending on species</li>
        </ul>

        <p><strong>Air sac intubation</strong> (advanced) — for upper airway surgery:</p>
        <ul>
          <li>Insert tube directly into caudal thoracic air sac</li>
          <li>Used when oral airway compromised</li>
        </ul>

        <p><strong>Monitoring:</strong></p>
        <ul>
          <li>HR very fast (200-500 bpm normal!)</li>
          <li>Doppler at carotid or cardiac auscult</li>
          <li>Temp 40-42°C normal (don't cool!)</li>
          <li>Respiratory rate 20-50/min</li>
        </ul>

        <p><strong>Post-op:</strong></p>
        <ul>
          <li>Active warming — bird must stay warm</li>
          <li>Recovery in dark, quiet, contained area</li>
          <li>Offer food when alert</li>
          <li>Pain control: butorphanol 1-3 mg/kg IM (bird-specific dose, higher than mammals)</li>
          <li>+/- meloxicam 0.5 mg/kg PO (carefully, more sensitive)</li>
        </ul>
      `,
      steps: `
        <p><strong>For all exotic species — universal principles:</strong></p>
        <ol>
          <li><strong>Minimize stress</strong> — quick exam, towel restraint</li>
          <li><strong>Pre-O2 if tolerated</strong></li>
          <li><strong>Active warming aggressive</strong> — heat lamp, Bair Hugger pediatric, warm IV fluid</li>
          <li><strong>Use scaled drug doses</strong> from species literature</li>
          <li><strong>Continuous monitoring</strong> with whatever equipment fits</li>
          <li><strong>Have reversal ready</strong> (atipamezole, naloxone, flumazenil)</li>
          <li><strong>Plan for recovery</strong> — quiet warm space, observe closely</li>
          <li><strong>Pain management</strong> — assume painful, treat preemptively</li>
        </ol>

        <p><strong>References for specific dosing:</strong></p>
        <ul>
          <li>Carpenter's Exotic Animal Formulary</li>
          <li>BSAVA Manual of Rabbit Surgery, Dentistry and Imaging</li>
          <li>Lafeber's Avian Vet Tech (online resources)</li>
          <li>Vet partner / VIN Exotic Anesthesia section</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hypothermia</strong> — universal exotic problem</li>
          <li><strong>Stress-induced cardiac arrest</strong> (especially bird, small rodent)</li>
          <li><strong>GI stasis</strong> (rabbit, guinea pig) — often fatal if not treated</li>
          <li><strong>Aspiration</strong> from regurg (less common in non-vomiting species)</li>
          <li><strong>Recovery dysphoria / convulsion</strong></li>
          <li><strong>Drug overdose</strong> from mis-scaling</li>
          <li><strong>Hypoglycemia</strong> (small body mass, high metabolic)</li>
          <li><strong>Dehydration</strong> rapid from insensible loss</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Active warming until stable temperature</li>
          <li>Encourage early eating (especially rabbit, guinea pig, small rodent)</li>
          <li>Pain control — assume painful, treat</li>
          <li>Quiet, dim, secure recovery area</li>
          <li>Owner instructions species-specific</li>
          <li>Tip: <strong>"Rabbit cannot vomit but cannot fast"</strong> — minimize fasting time</li>
          <li>Tip: <strong>"Glycopyrrolate, NOT atropine in rabbit"</strong> — atropinesterase</li>
          <li>Tip: <strong>"Bird = mask sevo + uncuffed ETT"</strong> · easy when set up</li>
          <li>Tip: <strong>"Stress kills bird"</strong> — minimal handling, dim quiet</li>
          <li>Tip: <strong>"Refer if uncomfortable"</strong> — exotic specialist in major cities</li>
          <li>Tip: <strong>Carpenter's formulary</strong> = bible for exotic dosing</li>
          <li>Tip: <strong>Hypothermia</strong> = #1 enemy of exotic anesthesia</li>
        </ul>
      `
    }
  },


  /* ============================================================
     TIER C — Final Reference (1 — Capno deep dive merged into existing,
     so we add only most important final entries)
     ============================================================ */

  {
    id: 'anes-blood-transfusion',
    titleEn: 'Blood Transfusion in Anesthesia',
    titleTh: 'การให้เลือดระหว่าง anesthesia',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['transfusion', 'blood', 'pRBC', 'plasma', 'reaction', 'crossmatch'],
    aliases: ['transfusion', 'ให้เลือด'],
    source: 'Ko Anesthesia Handbook, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>pRBC (packed red blood cells):</strong>
            <ul>
              <li>Acute anemia: PCV &lt; 20% with clinical signs</li>
              <li>Hemorrhage: ongoing &gt; 20% blood volume loss</li>
              <li>Pre-op for procedure with expected blood loss + low PCV</li>
              <li>Cat IMHA, FeLV-related anemia</li>
            </ul>
          </li>
          <li><strong>Fresh frozen plasma (FFP):</strong>
            <ul>
              <li>Coagulopathy (PT/aPTT &gt; 1.5× normal)</li>
              <li>Vitamin K antagonist toxicity (rodenticide)</li>
              <li>Liver failure with bleeding</li>
              <li>DIC</li>
              <li>Pre-op if coag prolonged + surgery imminent</li>
            </ul>
          </li>
          <li><strong>Whole blood:</strong>
            <ul>
              <li>Severe acute hemorrhage (combination of RBC + plasma + platelets)</li>
              <li>Less commonly used than components</li>
            </ul>
          </li>
          <li><strong>Albumin / colloids:</strong>
            <ul>
              <li>Severe hypoalbuminemia &lt; 1.5 g/dL with clinical impact</li>
              <li>Sepsis with capillary leak</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Volume overload (use slow rate or partial unit)</li>
          <li>Severe cardiac disease (give slowly, divided)</li>
          <li>Previous severe transfusion reaction (caution)</li>
        </ul>
      `,
      preparation: `
        <p><strong>Blood typing &amp; crossmatching:</strong></p>

        <p><strong>Dog:</strong></p>
        <ul>
          <li>DEA 1.1 most clinically important</li>
          <li>~40% DEA 1.1 positive · 60% negative</li>
          <li>First transfusion: any blood OK (no preformed antibodies)</li>
          <li>Subsequent: must crossmatch (sensitization may occur)</li>
        </ul>

        <p><strong>Cat:</strong></p>
        <ul>
          <li>3 types: A (most common ~95%), B (rare, &lt; 5% in most regions), AB (&lt; 1%)</li>
          <li>Some breeds (British Shorthair, Devon Rex, Birman) higher Type B</li>
          <li><strong>Type B cat receiving Type A blood = SEVERE reaction (anaphylaxis, death)</strong></li>
          <li><strong>Always type cat before first transfusion</strong> (preformed antibodies exist)</li>
          <li>Mik-negative cats (rare) need additional consideration</li>
        </ul>

        <p><strong>Crossmatch:</strong></p>
        <ul>
          <li>Major: donor RBC + recipient serum</li>
          <li>Minor: donor serum + recipient RBC</li>
          <li>In-house kits available (RapidVet, gel-based)</li>
          <li>Always major + minor crossmatch for repeat transfusion</li>
        </ul>

        <p><strong>Volume calculation:</strong></p>
        <ul>
          <li><strong>pRBC volume needed (mL):</strong> Body weight (kg) × 1.5 × (desired PCV - actual PCV)</li>
          <li>Or simpler: <strong>10 mL/kg pRBC raises PCV ~10%</strong></li>
          <li><strong>FFP: 10-20 mL/kg over 4 hr</strong> — reassess coag</li>
          <li><strong>Whole blood: 10-20 mL/kg over 4 hr</strong></li>
        </ul>

        <p><strong>Equipment:</strong></p>
        <ul>
          <li>Blood transfusion set with in-line filter (170 µm — removes clots)</li>
          <li>IV catheter dedicated (don't run blood with other fluid in same line)</li>
          <li>Warm to body temp (37-38°C max — hemolysis above)</li>
          <li>Pump for controlled rate (or gravity)</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard transfusion protocol:</strong></p>
        <ol>
          <li>Confirm indication, type, crossmatch</li>
          <li>Inspect blood — color, clots, package integrity</li>
          <li>Warm gently (water bath max 38°C, or in arms 30 min)</li>
          <li>Connect via filter set</li>
          <li>Baseline vitals: HR, RR, temp, MM, BP</li>
        </ol>

        <p><strong>Rate (slow start, increase if tolerated):</strong></p>
        <ol>
          <li><strong>First 15 min: 0.5 mL/kg/h</strong> (test dose for reaction)</li>
          <li>If no reaction → increase to <strong>5-10 mL/kg/h</strong> for remainder</li>
          <li>Total infusion within 4 hr (after 4 hr at room temp = bacterial growth)</li>
          <li>Volume overload concern: max 10 mL/kg/h cardiac patient</li>
        </ol>

        <p><strong>Monitoring during transfusion:</strong></p>
        <ul>
          <li>Vitals q5-15 min × first hour</li>
          <li>Q30 min thereafter</li>
          <li>Watch for: vomiting, urticaria, fever, tachycardia, hypotension, dyspnea</li>
          <li>Document times, vital signs, volumes</li>
        </ul>

        <p><strong>Reaction recognition + treatment:</strong></p>

        <p><strong>Mild allergic (urticaria, mild fever):</strong></p>
        <ol>
          <li>Slow rate by 50%</li>
          <li>Diphenhydramine 1-2 mg/kg IV</li>
          <li>Observe — if resolves, continue at slower rate</li>
        </ol>

        <p><strong>Moderate (vomiting, persistent fever, hemoglobinuria):</strong></p>
        <ol>
          <li>STOP transfusion</li>
          <li>Diphenhydramine 2 mg/kg IV</li>
          <li>Dexamethasone 0.25 mg/kg IV</li>
          <li>Maintenance fluid</li>
          <li>Monitor closely</li>
        </ol>

        <p><strong>Severe / anaphylactic (collapse, dyspnea, hypotension, cyanosis):</strong></p>
        <ol>
          <li>STOP transfusion immediately</li>
          <li>Maintain IV with crystalloid</li>
          <li>Epinephrine 0.01 mg/kg IM (or IV diluted)</li>
          <li>Diphenhydramine + dexamethasone IV</li>
          <li>Aggressive fluid resuscitation</li>
          <li>O2, intubation if needed</li>
          <li>Send blood + recipient sample to lab for retesting</li>
        </ol>

        <p><strong>Delayed transfusion reaction:</strong></p>
        <ul>
          <li>Hours to days post-transfusion</li>
          <li>Hemolysis (PCV drops faster than expected, jaundice, hemoglobinuria)</li>
          <li>Antibody response — recheck crossmatch for next transfusion</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Acute hemolytic reaction</strong> — type mismatch · severe, life-threatening</li>
          <li><strong>Allergic reaction</strong> — urticaria, anaphylaxis</li>
          <li><strong>Febrile reaction</strong> — fever, no hemolysis · usually mild</li>
          <li><strong>Volume overload</strong> — pulmonary edema (esp cardiac patient)</li>
          <li><strong>Hypocalcemia</strong> from citrate (massive transfusion) — calcium gluconate</li>
          <li><strong>Hyperkalemia</strong> from old units (RBC release K)</li>
          <li><strong>Hypothermia</strong> if blood not warmed</li>
          <li><strong>Citrate toxicity</strong> (massive transfusion)</li>
          <li><strong>Bacterial contamination</strong> — sepsis · check unit appearance</li>
          <li><strong>Transmission of bloodborne disease</strong> (FeLV, FIV, hemobartonella, rare with screened donors)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor 24 hr post-transfusion</li>
          <li>Recheck PCV / coagulation 4-6 hr after completion</li>
          <li>Watch for delayed reaction (hemolysis)</li>
          <li>Document in medical record + transfusion log</li>
          <li>If reaction occurred: type/crossmatch results saved · alert future</li>
          <li>Tip: <strong>"Cat type BEFORE first transfusion"</strong> — preformed antibodies</li>
          <li>Tip: <strong>"Slow first 15 min"</strong> — test dose for reaction</li>
          <li>Tip: <strong>"Donor screen"</strong> — choose registered blood bank if available</li>
          <li>Tip: <strong>"PCV 10% rise per 10 mL/kg pRBC"</strong> = quick formula</li>
          <li>Tip: <strong>"Warm but not hot"</strong> — &gt; 40°C = hemolysis</li>
          <li>Tip: <strong>"4 hr max infusion"</strong> · longer = bacterial concern</li>
        </ul>
      `
    }
  },
];

window.ANESTHESIA_DATA_LOADED = true;
