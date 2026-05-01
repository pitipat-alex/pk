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
        <p><strong>Normal ranges (anesthetized):</strong></p>
        <ul>
          <li><strong>HR:</strong>
            <ul>
              <li>Dog: 70-150 bpm (depends on size — small dog faster)</li>
              <li>Cat: 100-180 bpm</li>
            </ul>
          </li>
          <li><strong>BP (MAP):</strong> &gt; 60-65 mmHg minimum · target 70-90 mmHg
            <ul><li>Systolic &gt; 90 mmHg</li></ul>
          </li>
          <li><strong>SpO2:</strong> &gt; 95% on FiO2 100%
            <ul><li>&lt; 90% = significant hypoxemia</li></ul>
          </li>
          <li><strong>ETCO2:</strong> 35-45 mmHg
            <ul>
              <li>&gt; 50 = hypoventilation</li>
              <li>&lt; 30 = hyperventilation or low CO/V/Q mismatch</li>
            </ul>
          </li>
          <li><strong>Temp:</strong> 37-38.5°C (cat slightly higher)</li>
          <li><strong>RR:</strong> 8-20/min (lower in deeper plane)</li>
        </ul>

        <p><strong>Documentation interval:</strong></p>
        <ul>
          <li>Every 5 min minimum</li>
          <li>Every 1-2 min during induction/recovery</li>
          <li>After every drug or fluid bolus</li>
        </ul>
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

];

window.ANESTHESIA_DATA_LOADED = true;
