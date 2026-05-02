/* ===========================================================================
   pk · Pharmacology Tool — pharmacology-data.js
   ----------------------------------------------------------------------------
   Reference: Plumb's Veterinary Drug Handbook, 10th Ed. (2023)
   เนื้อหาเรียบเรียงใหม่โดย Alex สำหรับ pk
   ภาษาไทยเป็นหลัก · medical terms ทับศัพท์
   =========================================================================== */

window.PHARMACOLOGY_DATA = [

  /* ============================================================
     Antibiotics
     ============================================================ */

  {
    id: 'amoxicillin',
    category: 'antibiotic',
    name: 'Amoxicillin',
    nameTh: 'อะม็อกซีซิลลิน',
    classDrug: 'Antibiotic — Beta-lactam (Penicillin)',
    forms: ['Tablet 250/500 mg', 'Suspension 50 mg/mL', 'Injection (LA)'],
    doses: {
      dog: [
        { indication: 'UTI', dose: '11-22', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Skin/soft tissue', dose: '11-22', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Respiratory tract', dose: '22', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-10 days' },
      ],
      cat: [
        { indication: 'UTI / Skin', dose: '11-22', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Respiratory', dose: '11-22', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-10 days' },
        { indication: 'Long-acting injection', dose: '8-15', unit: 'mg/kg', route: 'SC', frequency: 'q48h', duration: '5-7 days' },
      ],
    },
    interactions: ['allopurinol', 'methotrexate', 'tetracyclines', 'aminoglycosides'],
    warnings: [
      'Hypersensitivity to penicillins/cephalosporins',
      'Adjust in severe renal impairment',
      'May reduce efficacy of oral contraceptives in humans',
    ],
    notes: 'Broad spectrum, well-tolerated. First-line for many uncomplicated infections.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'amoxicillin-clavulanate',
    category: 'antibiotic',
    name: 'Amoxicillin-Clavulanate',
    nameTh: 'อะม็อกซี-คลาวูลาเนต (Synulox/Clavamox)',
    classDrug: 'Antibiotic — Beta-lactam + Beta-lactamase inhibitor',
    forms: ['Tablet 62.5/250/500 mg', 'Drops 50 mg/mL'],
    doses: {
      dog: [
        { indication: 'UTI', dose: '12.5-25', unit: 'mg/kg (combined)', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Pyoderma', dose: '12.5-25', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '14-21 days' },
        { indication: 'Severe infection', dose: '25', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: '14-28 days' },
      ],
      cat: [
        { indication: 'UTI / Skin', dose: '12.5-25', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Bite wound abscess', dose: '12.5-25', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-10 days' },
      ],
    },
    interactions: ['allopurinol', 'methotrexate', 'oral contraceptives'],
    warnings: [
      'Hypersensitivity to penicillins',
      'GI upset common (especially cats)',
      'Adjust in severe renal disease',
    ],
    notes: 'Better gram-negative + anaerobic coverage than amoxicillin alone. Common first-line.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'enrofloxacin',
    category: 'antibiotic',
    name: 'Enrofloxacin',
    nameTh: 'เอนโรฟลอกซาซิน (Baytril)',
    classDrug: 'Antibiotic — Fluoroquinolone',
    forms: ['Tablet 22.7/68/136 mg', 'Injection 25 mg/mL', 'Solution 50 mg/mL'],
    doses: {
      dog: [
        { indication: 'UTI / Skin', dose: '5-10', unit: 'mg/kg', route: 'PO/SC', frequency: 'q24h', duration: '7-14 days' },
        { indication: 'Severe infection / Pseudomonas', dose: '10-20', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '14-28 days' },
      ],
      cat: [
        { indication: 'UTI / Skin', dose: '5', unit: 'mg/kg (max!)', route: 'PO/SC', frequency: 'q24h', duration: '7-10 days' },
      ],
    },
    interactions: ['theophylline', 'antacids (Mg/Al/Ca)', 'sucralfate', 'iron supplements', 'NSAIDs (lower seizure threshold)', 'cyclosporine'],
    warnings: [
      '⚠️ CAT MAX 5 mg/kg/day — higher dose causes irreversible retinal degeneration/blindness',
      'Avoid in young growing animals — cartilage damage',
      'May lower seizure threshold (caution in epileptic)',
      'CNS toxicity at high doses',
    ],
    notes: 'Excellent gram-negative coverage. ⚠️ Cat dose strictly limited!',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'doxycycline',
    category: 'antibiotic',
    name: 'Doxycycline',
    nameTh: 'ด็อกซีไซคลีน',
    classDrug: 'Antibiotic — Tetracycline',
    forms: ['Tablet 100 mg', 'Capsule 50/100 mg', 'Suspension'],
    doses: {
      dog: [
        { indication: 'Tick-borne disease (Ehrlichia, Anaplasma)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '21-28 days' },
        { indication: 'Heartworm adjunct (Wolbachia)', dose: '10', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '4 weeks' },
        { indication: 'Respiratory (Bordetella)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '10-14 days' },
        { indication: 'Leptospirosis', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '14 days' },
      ],
      cat: [
        { indication: 'Mycoplasma / Chlamydia (URI)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '14-28 days' },
        { indication: 'Hemobartonella (Mycoplasma haemofelis)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '21-28 days' },
      ],
    },
    interactions: ['antacids (Mg/Al/Ca)', 'iron', 'sucralfate', 'warfarin', 'digoxin'],
    warnings: [
      '⚠️ ALWAYS follow with water/food in cats — esophageal stricture risk',
      'Avoid in pregnant animals (tooth/bone discoloration)',
      'Photosensitivity rare',
      'GI upset common',
    ],
    notes: '⚠️ Cat: Give with water/food bolus to prevent esophageal stricture. First-line for tick-borne disease.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     NSAIDs
     ============================================================ */

  {
    id: 'meloxicam',
    category: 'pain',
    name: 'Meloxicam',
    nameTh: 'เมล็อกซิแคม (Metacam)',
    classDrug: 'NSAID — COX-2 preferential',
    forms: ['Suspension 0.5/1.5 mg/mL', 'Injection 5 mg/mL', 'Tablet (some markets)'],
    doses: {
      dog: [
        { indication: 'Acute pain (post-op)', dose: '0.2 then 0.1', unit: 'mg/kg (load then maintain)', route: 'PO/SC', frequency: 'q24h', duration: '3-7 days' },
        { indication: 'Chronic OA', dose: '0.1', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term with monitoring' },
      ],
      cat: [
        { indication: 'Acute pain (single dose)', dose: '0.2', unit: 'mg/kg', route: 'SC', frequency: 'Once', duration: 'Single dose only' },
        { indication: 'Chronic OA (off-label)', dose: '0.05', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term · monitoring' },
      ],
    },
    interactions: ['ACE inhibitors', 'diuretics (furosemide)', 'corticosteroids (NEVER together!)', 'other NSAIDs', 'aminoglycosides', 'methotrexate'],
    warnings: [
      '⚠️ NEVER combine with steroids · 5-7 day washout if switching',
      'Avoid in: dehydration, hypovolemia, renal/hepatic disease, GI ulceration',
      'Cat: Single SC dose only in many countries (off-label long-term)',
      'Monitor renal/hepatic function in long-term use',
    ],
    notes: 'COX-2 preferential = better GI safety. Cat dose much lower than dog.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'carprofen',
    category: 'pain',
    name: 'Carprofen',
    nameTh: 'คาร์โพรเฟน (Rimadyl)',
    classDrug: 'NSAID — COX-2 preferential',
    forms: ['Tablet 25/75/100 mg (chewable)', 'Injection 50 mg/mL'],
    doses: {
      dog: [
        { indication: 'Post-op pain', dose: '4', unit: 'mg/kg', route: 'SC/IV', frequency: 'Once pre-op, then 2 mg/kg q12h', duration: '3-5 days' },
        { indication: 'OA / chronic', dose: '2.2', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term · monitor' },
        { indication: 'OA / chronic (alt)', dose: '4.4', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term · monitor' },
      ],
      cat: [
        { indication: 'NOT recommended in cats', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Use meloxicam or robenacoxib instead' },
      ],
    },
    interactions: ['steroids', 'ACE inhibitors', 'diuretics', 'other NSAIDs', 'aminoglycosides'],
    warnings: [
      '⚠️ DOGS ONLY — not labeled for cats',
      '⚠️ Idiosyncratic hepatotoxicity (especially Labradors) — monitor LFTs',
      'NEVER combine with steroids',
      'Avoid in renal/hepatic disease, dehydration',
      'GI ulceration risk',
    ],
    notes: 'Dog-specific NSAID. Monitor liver enzymes especially first 2 weeks.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     GI / Antiemetics
     ============================================================ */

  {
    id: 'maropitant',
    category: 'gi',
    name: 'Maropitant',
    nameTh: 'มาโรพิแทนต์ (Cerenia)',
    classDrug: 'Antiemetic — NK-1 receptor antagonist',
    forms: ['Tablet 16/24/60/160 mg', 'Injection 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Acute vomiting', dose: '1', unit: 'mg/kg', route: 'SC/IV', frequency: 'q24h', duration: 'Up to 5 days' },
        { indication: 'Motion sickness', dose: '8', unit: 'mg/kg', route: 'PO', frequency: '2 hr before travel', duration: 'Up to 2 days' },
        { indication: 'Chemotherapy emesis', dose: '1', unit: 'mg/kg', route: 'SC/PO', frequency: 'q24h', duration: 'As needed' },
      ],
      cat: [
        { indication: 'Acute vomiting', dose: '1', unit: 'mg/kg', route: 'SC', frequency: 'q24h', duration: 'Up to 5 days' },
        { indication: 'Chronic GI / kidney disease', dose: '1', unit: 'mg/kg', route: 'PO/SC', frequency: 'q24h', duration: 'Long-term off-label OK' },
      ],
    },
    interactions: ['highly protein-bound drugs (NSAIDs, anticonvulsants — competition)', 'CYP2D15/3A12 substrates'],
    warnings: [
      'Use cautiously in liver disease (hepatic metabolism)',
      'Pain on SC injection — refrigerate to reduce',
      'Not for vomiting due to GI obstruction (rule out first!)',
      'Caution in young animals < 8 weeks',
    ],
    notes: 'Best-in-class antiemetic. Refrigerate injectable to reduce injection pain. Multi-day use OK.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Cardiac
     ============================================================ */

  {
    id: 'furosemide',
    category: 'diuretic',
    name: 'Furosemide',
    nameTh: 'ฟูโรซีไมด์ (Lasix)',
    classDrug: 'Diuretic — Loop',
    forms: ['Tablet 12.5/40/50 mg', 'Injection 50 mg/mL', 'Oral solution'],
    doses: {
      dog: [
        { indication: 'CHF acute (pulmonary edema)', dose: '2-4', unit: 'mg/kg', route: 'IV/IM', frequency: 'q1-2h until stable', duration: 'Until diuresis' },
        { indication: 'CHF chronic', dose: '1-4', unit: 'mg/kg', route: 'PO', frequency: 'q8-24h (titrate)', duration: 'Long-term' },
        { indication: 'CHF severe (refractory)', dose: '6-12', unit: 'mg/kg/day total', route: 'PO', frequency: 'Divided q8-12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'CHF acute', dose: '1-2', unit: 'mg/kg', route: 'IV/IM', frequency: 'q1-2h until stable', duration: 'Until diuresis' },
        { indication: 'CHF chronic', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
      ],
    },
    interactions: ['ACE inhibitors (synergistic hypotension)', 'aminoglycosides (oto/nephrotoxic)', 'NSAIDs (reduce efficacy)', 'digoxin (hypoK potentiates toxicity)', 'corticosteroids (hypoK)'],
    warnings: [
      'Monitor electrolytes (K, Na, Cl) — hypokalemia common',
      'Monitor renal function + hydration',
      'Ototoxicity possible with high IV doses',
      'Use lowest effective dose',
    ],
    notes: 'Mainstay of CHF treatment. Adjust dose to clinical signs (cough, RR, exercise tolerance).',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Endocrine
     ============================================================ */

  {
    id: 'prednisolone',
    category: 'endocrine',
    name: 'Prednisolone',
    nameTh: 'เพรดนิโซโลน',
    classDrug: 'Glucocorticoid — Intermediate-acting',
    forms: ['Tablet 5/20 mg', 'Oral solution', 'Injection (sodium succinate)'],
    doses: {
      dog: [
        { indication: 'Anti-inflammatory', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Taper over 2-4 weeks' },
        { indication: 'Immunosuppressive (IMHA, IMPA, etc.)', dose: '2-4', unit: 'mg/kg/day', route: 'PO', frequency: 'q12h initially, then q24h', duration: 'Long-term · taper' },
        { indication: 'Lymphoma (single agent)', dose: '2', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Until progression' },
      ],
      cat: [
        { indication: 'Anti-inflammatory', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Taper' },
        { indication: 'Immunosuppressive (IBD, asthma)', dose: '2-4', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term · taper' },
        { indication: 'Lymphoma', dose: '2-3', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Until progression' },
      ],
    },
    interactions: ['NSAIDs (NEVER!)', 'cyclosporine', 'phenobarbital', 'ketoconazole', 'insulin (antagonist)', 'diuretics (hypoK)', 'digoxin', 'bone marrow suppressants'],
    warnings: [
      '⚠️ NEVER combine with NSAIDs — GI ulceration/perforation risk',
      'Long-term: iatrogenic Cushings, diabetes, infection susceptibility',
      'Taper gradually — never stop abruptly (Addisonian crisis)',
      'Monitor for PU/PD, weight gain, panting, infection',
      'Cat: prefer prednisolone over prednisone (cats convert poorly)',
    ],
    notes: '⚠️ Cats use prednisoLONE not prednisone (poor liver conversion). Always taper.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Pain — Opioids
     ============================================================ */

  {
    id: 'tramadol',
    category: 'pain',
    name: 'Tramadol',
    nameTh: 'ทรามาดอล',
    classDrug: 'Analgesic — Atypical opioid (μ + SNRI)',
    forms: ['Tablet 50 mg', 'Capsule', 'Injection (some)'],
    doses: {
      dog: [
        { indication: 'Mild-moderate pain', dose: '2-5', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: 'Short-term · evidence weak in dogs' },
      ],
      cat: [
        { indication: 'Acute pain', dose: '1-4', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Short-term — better evidence in cats' },
      ],
    },
    interactions: ['SSRI/TCA (serotonin syndrome!)', 'MAO inhibitors (selegiline)', 'tricyclic antidepressants', 'CNS depressants', 'warfarin', 'ondansetron (reduced efficacy)'],
    warnings: [
      '⚠️ Serotonin syndrome with SSRIs/TCAs — avoid combination',
      'Bitter taste — cats may refuse',
      'Lower seizure threshold (caution in epileptic)',
      'Dog evidence for analgesia limited (cats better)',
      'Sedation, GI upset possible',
    ],
    notes: 'Cat: better evidence than dog. Bitter taste challenge in cats. Multimodal pain preferred.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Antibiotics (เพิ่ม 3)
     ============================================================ */

  {
    id: 'cefovecin',
    category: 'antibiotic',
    name: 'Cefovecin',
    nameTh: 'เซโฟเวซิน (Convenia)',
    classDrug: 'Antibiotic — 3rd-gen Cephalosporin (Long-acting)',
    forms: ['Injection 80 mg/mL'],
    doses: {
      dog: [
        { indication: 'Skin/soft tissue infection', dose: '8', unit: 'mg/kg', route: 'SC', frequency: 'Once · repeat in 7-14 days if needed', duration: 'Single injection lasts ~14 days' },
      ],
      cat: [
        { indication: 'Skin/soft tissue · Bite wound abscess', dose: '8', unit: 'mg/kg', route: 'SC', frequency: 'Once · repeat in 14 days if needed', duration: 'Single injection lasts ~14 days' },
      ],
    },
    interactions: ['nephrotoxic drugs (aminoglycosides, NSAIDs)', 'highly protein-bound drugs'],
    warnings: [
      'Hypersensitivity to cephalosporins/penicillins',
      'Once injected — cannot recall (long half-life)',
      'Caution renal impairment',
    ],
    notes: 'Single SC injection lasts 14 days. Useful for non-compliant patients. Cat-friendly.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'metronidazole',
    category: 'antibiotic',
    name: 'Metronidazole',
    nameTh: 'เมโทรนิดาโซล (Flagyl)',
    classDrug: 'Antibiotic — Nitroimidazole · Antiprotozoal',
    forms: ['Tablet 200/400 mg', 'Suspension', 'Injection'],
    doses: {
      dog: [
        { indication: 'Anaerobic infection', dose: '15', unit: 'mg/kg', route: 'PO/IV', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'IBD / colitis', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '5-7 days' },
        { indication: 'Giardia', dose: '15-25', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '5-7 days' },
      ],
      cat: [
        { indication: 'Anaerobic / Giardia', dose: '10-25', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '5-7 days' },
        { indication: 'IBD', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '5-14 days' },
      ],
    },
    interactions: ['warfarin', 'cyclosporine', 'phenobarbital', 'cimetidine', 'alcohol'],
    warnings: [
      '⚠️ NEUROTOXICITY at high doses or prolonged use — ataxia, nystagmus, seizures',
      'Bitter taste — cats often refuse',
      'Avoid in pregnancy (1st trimester)',
      'Hepatic metabolism — adjust in liver disease',
    ],
    notes: '⚠️ Don\'t exceed 50 mg/kg/day · neurotoxicity reversible if caught early. Prefer benzoate for cats (less bitter).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'clindamycin',
    category: 'antibiotic',
    name: 'Clindamycin',
    nameTh: 'คลินดามัยซิน (Antirobe)',
    classDrug: 'Antibiotic — Lincosamide',
    forms: ['Capsule 25/75/150 mg', 'Drops 25 mg/mL', 'Injection'],
    doses: {
      dog: [
        { indication: 'Skin/soft tissue (gram+ anaerobes)', dose: '5.5-11', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Osteomyelitis', dose: '11', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '4-6 weeks' },
        { indication: 'Toxoplasma / Neospora', dose: '10-20', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '4 weeks' },
      ],
      cat: [
        { indication: 'Skin/abscess', dose: '5.5-11', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '7-14 days' },
        { indication: 'Toxoplasmosis', dose: '12.5-25', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '4 weeks' },
      ],
    },
    interactions: ['neuromuscular blockers', 'erythromycin (antagonism)', 'kaolin (reduced absorption)'],
    warnings: [
      'GI upset common',
      'Esophageal stricture in cats — give with water/food',
      'Avoid prolonged use — antibiotic-associated diarrhea',
    ],
    notes: 'Excellent gram-positive + anaerobic + bone penetration. Good for abscess, osteomyelitis.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Anesthetics / Sedatives (5)
     ============================================================ */

  {
    id: 'propofol',
    category: 'anesthetic',
    name: 'Propofol',
    nameTh: 'พรอพอฟอล',
    classDrug: 'Anesthetic — IV Induction',
    forms: ['Injection 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Induction (unpremedicated)', dose: '6-8', unit: 'mg/kg', route: 'IV slowly', frequency: 'Once', duration: 'Effect 5-10 min' },
        { indication: 'Induction (premedicated)', dose: '2-4', unit: 'mg/kg', route: 'IV slowly', frequency: 'Once', duration: 'Effect 5-10 min' },
        { indication: 'CRI (TIVA)', dose: '0.1-0.4', unit: 'mg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'As needed' },
      ],
      cat: [
        { indication: 'Induction (premedicated)', dose: '4-6', unit: 'mg/kg', route: 'IV slowly', frequency: 'Once', duration: 'Effect 5-10 min' },
        { indication: 'CRI (TIVA)', dose: '0.1-0.3', unit: 'mg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'Caution: Heinz body anemia' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'opioids (synergistic)', 'cardiovascular drugs'],
    warnings: [
      '⚠️ Apnea common — give slowly over 30-60 sec',
      '⚠️ CV depression · hypotension',
      '⚠️ Cat: avoid prolonged use → Heinz body anemia',
      'Pain on injection (rare)',
      'Lipid emulsion supports bacterial growth — use single-use vial',
    ],
    notes: 'Smooth induction + recovery. Lipid emulsion. Cat: limit to single use, avoid CRI > 30 min.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'ketamine',
    category: 'anesthetic',
    name: 'Ketamine',
    nameTh: 'คีตามีน',
    classDrug: 'Anesthetic — Dissociative · NMDA antagonist',
    forms: ['Injection 100 mg/mL'],
    doses: {
      dog: [
        { indication: 'Induction (with diazepam)', dose: '5-10', unit: 'mg/kg', route: 'IV', frequency: 'Once · with diazepam 0.25 mg/kg', duration: 'Effect 30 min' },
        { indication: 'CRI (analgesia)', dose: '2-10', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'During surgery' },
        { indication: 'Sedation IM (with opioid + alpha-2)', dose: '5-10', unit: 'mg/kg', route: 'IM', frequency: 'Once', duration: '30-45 min' },
      ],
      cat: [
        { indication: 'Induction', dose: '5-10', unit: 'mg/kg', route: 'IV', frequency: 'Once', duration: 'Effect 30 min' },
        { indication: 'IM combo (with dexmedetomidine + opioid)', dose: '3-5', unit: 'mg/kg', route: 'IM', frequency: 'Once', duration: '30-60 min' },
      ],
    },
    interactions: ['halothane (arrhythmia)', 'thyroid hormones', 'CNS depressants'],
    warnings: [
      '⚠️ Increases ICP — avoid in head trauma, glaucoma',
      'Increases HR + BP (sympathetic stim) — caution in cardiac dz',
      'Poor analgesia alone — combine with alpha-2/opioid',
      'Excitatory phase if used alone (give with sedative)',
      'Hepatic metabolism → cat (also renal); long recovery in cat',
    ],
    notes: 'Always combine with sedative (diaz/midaz/dexmed). Excellent for fractious cats IM. Avoid in HCM + head trauma.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'dexmedetomidine',
    category: 'anesthetic',
    name: 'Dexmedetomidine',
    nameTh: 'เด็กซ์เมดีโทมิดีน (Dexdomitor)',
    classDrug: 'Sedative — Alpha-2 agonist',
    forms: ['Injection 0.5 mg/mL'],
    doses: {
      dog: [
        { indication: 'Sedation/analgesia (IM)', dose: '5-20', unit: 'mcg/kg', route: 'IM', frequency: 'Once', duration: '30-60 min' },
        { indication: 'Premed (IV)', dose: '2-5', unit: 'mcg/kg', route: 'IV slowly', frequency: 'Once', duration: '20-30 min' },
        { indication: 'Reversal — atipamezole', dose: '50-200', unit: 'mcg/kg (atipamezole)', route: 'IM', frequency: 'Once', duration: 'Reverses in 5-10 min' },
      ],
      cat: [
        { indication: 'Sedation IM (often with ketamine + opioid)', dose: '10-40', unit: 'mcg/kg', route: 'IM', frequency: 'Once', duration: '30-60 min' },
        { indication: 'Reversal — atipamezole', dose: '125-500', unit: 'mcg/kg (atipamezole)', route: 'IM', frequency: 'Once', duration: 'Reverses' },
      ],
    },
    interactions: ['atropine (do NOT co-administer routinely — hypertension)', 'other CNS depressants', 'sympathomimetics'],
    warnings: [
      '⚠️ Bradycardia + hypertension (initial) → bradycardia + normotension',
      '⚠️ Vomiting common in cats',
      'Avoid in cardiac dz, shock, hypovolemia, severe systemic illness',
      'Atropine "fix" causes worse hypertension — avoid prophylactic',
      'Reversal: atipamezole (volume = same volume as dexmed)',
    ],
    notes: 'Powerful sedation + analgesia. Reversible! Avoid atropine prophylaxis. Use lowest effective dose.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'butorphanol',
    category: 'opioid',
    name: 'Butorphanol',
    nameTh: 'บูทอร์ฟานอล',
    classDrug: 'Opioid — Kappa agonist · Mu antagonist',
    forms: ['Injection 10 mg/mL', 'Tablet 1/5/10 mg'],
    doses: {
      dog: [
        { indication: 'Sedation/mild analgesia', dose: '0.2-0.4', unit: 'mg/kg', route: 'IM/IV/SC', frequency: 'q2-4h (short)', duration: 'Short-term' },
        { indication: 'Antitussive', dose: '0.05-0.1', unit: 'mg/kg', route: 'PO/SC', frequency: 'q6-12h', duration: 'As needed' },
      ],
      cat: [
        { indication: 'Sedation (IM combo)', dose: '0.2-0.4', unit: 'mg/kg', route: 'IM/IV', frequency: 'Once or q2-4h', duration: 'Short-term' },
        { indication: 'Mild analgesia', dose: '0.2-0.4', unit: 'mg/kg', route: 'IM/IV', frequency: 'q2-4h', duration: 'Short-term' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'mu-opioid agonists (antagonism!)'],
    warnings: [
      'Ceiling effect on analgesia — not effective for severe pain',
      'Antagonizes pure mu agonists (morphine, hydromorphone, fentanyl)',
      'Short duration (~2-4 hr)',
      'Mild cardiopulmonary effects',
    ],
    notes: 'Useful for mild-moderate pain or sedation combo. Reverses pure mu opioids. Short duration.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'midazolam',
    category: 'anesthetic',
    name: 'Midazolam',
    nameTh: 'มิดาโซแลม',
    classDrug: 'Sedative — Benzodiazepine',
    forms: ['Injection 5 mg/mL'],
    doses: {
      dog: [
        { indication: 'Premed/sedation (combo)', dose: '0.1-0.3', unit: 'mg/kg', route: 'IM/IV', frequency: 'Once', duration: '30-60 min' },
        { indication: 'Status epilepticus', dose: '0.2-0.5', unit: 'mg/kg', route: 'IV/IM/intranasal', frequency: 'May repeat once', duration: 'Bridge to longer-acting' },
      ],
      cat: [
        { indication: 'Premed/sedation (combo)', dose: '0.1-0.3', unit: 'mg/kg', route: 'IM/IV', frequency: 'Once', duration: '30-60 min' },
        { indication: 'Status epilepticus', dose: '0.2-0.5', unit: 'mg/kg', route: 'IV/IM/intranasal', frequency: 'May repeat', duration: 'Bridge' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'cimetidine', 'erythromycin', 'flumazenil (reversal)'],
    warnings: [
      'Paradoxical excitation possible (especially young, healthy)',
      'Use with opioid or other sedative — alone may cause excitement',
      'Mild CV depression',
      'Reversal: flumazenil 0.01-0.1 mg/kg IV',
    ],
    notes: 'Water-soluble (vs diazepam). IM absorption good. Excellent in combo with ketamine for induction. Reverses with flumazenil.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Pain — Strong Opioids (2)
     ============================================================ */

  {
    id: 'methadone',
    category: 'opioid',
    name: 'Methadone',
    nameTh: 'เมทาโดน',
    classDrug: 'Opioid — Mu agonist + NMDA antagonist',
    forms: ['Injection 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Pre-op analgesia', dose: '0.1-0.5', unit: 'mg/kg', route: 'IM/IV', frequency: 'q4-6h', duration: 'Peri-operative' },
        { indication: 'Severe pain', dose: '0.2-0.5', unit: 'mg/kg', route: 'IM/IV', frequency: 'q4-6h', duration: 'Until oral pain meds OK' },
      ],
      cat: [
        { indication: 'Pre-op analgesia', dose: '0.1-0.4', unit: 'mg/kg', route: 'IM/IV', frequency: 'q4-6h', duration: 'Peri-operative' },
      ],
    },
    interactions: ['MAO inhibitors (selegiline)', 'SSRIs (serotonin syndrome)', 'CNS depressants', 'erythromycin'],
    warnings: [
      'Respiratory depression (less than morphine)',
      'Bradycardia',
      'Less vomiting than morphine — preferred pre-op',
      'Constipation',
      'Sedation',
    ],
    notes: 'Better than morphine: less vomiting, NMDA component for chronic pain. 4-6 hr duration. Excellent peri-op.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'fentanyl',
    category: 'opioid',
    name: 'Fentanyl',
    nameTh: 'เฟนทานิล',
    classDrug: 'Opioid — Mu agonist (potent)',
    forms: ['Injection 50 mcg/mL', 'Transdermal patch 25/50/75/100 mcg/hr'],
    doses: {
      dog: [
        { indication: 'CRI intraop', dose: '2-10', unit: 'mcg/kg/hr', route: 'IV CRI', frequency: 'Continuous', duration: 'During surgery' },
        { indication: 'Bolus', dose: '2-5', unit: 'mcg/kg', route: 'IV', frequency: 'q20-30min', duration: 'Short' },
        { indication: 'Patch (transdermal)', dose: '2-4', unit: 'mcg/kg/hr (size by weight)', route: 'Transdermal', frequency: 'Change q72h', duration: 'Onset 12-24 hr' },
      ],
      cat: [
        { indication: 'CRI intraop', dose: '1-5', unit: 'mcg/kg/hr', route: 'IV CRI', frequency: 'Continuous', duration: 'During surgery' },
        { indication: 'Patch', dose: '25', unit: 'mcg/hr (single size)', route: 'Transdermal', frequency: 'Change q72h', duration: 'Onset 6-12 hr' },
      ],
    },
    interactions: ['MAO inhibitors', 'CNS depressants', 'erythromycin (CYP3A inhibitor)'],
    warnings: [
      '⚠️ Severe respiratory depression — monitoring essential',
      '⚠️ Bradycardia — atropine may be needed',
      'Schedule II controlled substance',
      'Patches: keep away from children/other pets · cremation hazard',
      'Reversal: naloxone 0.04 mg/kg IV',
    ],
    notes: 'Most potent commonly used opioid. Patches useful for chronic pain. Cremation hazard from patches.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Cardiac (3)
     ============================================================ */

  {
    id: 'pimobendan',
    category: 'cardiac',
    name: 'Pimobendan',
    nameTh: 'พิโมเบนแดน (Vetmedin)',
    classDrug: 'Cardiac — Inodilator (Ca-sensitizer + PDE-3 inhibitor)',
    forms: ['Chewable tablet 1.25/2.5/5/10 mg'],
    doses: {
      dog: [
        { indication: 'CHF (MMVD, DCM)', dose: '0.25-0.3', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
        { indication: 'Pre-clinical MMVD (Stage B2)', dose: '0.25', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term · EPIC trial evidence' },
      ],
      cat: [
        { indication: 'CHF (off-label)', dose: '0.625-1.25', unit: 'mg/cat (total)', route: 'PO', frequency: 'q12h', duration: 'Long-term · evidence emerging' },
      ],
    },
    interactions: ['negligible drug-drug interactions in standard CHF protocols'],
    warnings: [
      'Give 1 hour before food (better absorption)',
      'Caution in HOCM (cat) — increased contractility may worsen outflow obstruction',
      'Use with diuretic + ACEi for full CHF therapy',
    ],
    notes: 'First-line for canine CHF. EPIC trial: delays CHF onset in pre-clinical MMVD. Cat: HCM with effusion off-label OK.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'enalapril',
    category: 'cardiac',
    name: 'Enalapril',
    nameTh: 'อีนาลาพริล (Enacard)',
    classDrug: 'Cardiac — ACE inhibitor',
    forms: ['Tablet 2.5/5/10/20 mg'],
    doses: {
      dog: [
        { indication: 'CHF / valvular dz', dose: '0.5', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
        { indication: 'Protein-losing nephropathy', dose: '0.5', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
        { indication: 'Hypertension', dose: '0.5', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'CHF / hypertension / PLN', dose: '0.25-0.5', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
      ],
    },
    interactions: ['NSAIDs (synergistic AKI)', 'diuretics (hypotension)', 'K-sparing diuretics (hyperK)', 'lithium'],
    warnings: [
      'Monitor renal function + K · baseline before starting',
      'May cause azotemia in dehydrated patient',
      'Hypotension — start low, titrate up',
      'Avoid in pregnancy (fetal renal damage)',
      'Avoid in bilateral renal artery stenosis',
    ],
    notes: 'Cardiac afterload reduction. Renal protective in PLN. Always check renal/K before starting.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'spironolactone',
    category: 'cardiac',
    name: 'Spironolactone',
    nameTh: 'สไปโรโนแลคโตน',
    classDrug: 'Cardiac — K-sparing diuretic · Aldosterone antagonist',
    forms: ['Tablet 25/100 mg', 'Combo with benazepril'],
    doses: {
      dog: [
        { indication: 'CHF (with furosemide + ACEi + pimo)', dose: '2', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term · CARING trial' },
      ],
      cat: [
        { indication: 'CHF (off-label, with caution)', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term · facial dermatitis risk' },
      ],
    },
    interactions: ['ACEi (hyperK)', 'K supplements (hyperK)', 'NSAIDs', 'digoxin (toxicity)'],
    warnings: [
      'Monitor K — hyperkalemia main risk',
      '⚠️ Cat: ulcerative facial dermatitis reported — discontinue if seen',
      'Slow onset (3-7 days)',
      'Caution in renal disease',
    ],
    notes: 'Quadruple therapy CHF dog: furosemide + ACEi + pimobendan + spironolactone (CARING trial). Cat: facial derm risk.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     GI / Gastric (2)
     ============================================================ */

  {
    id: 'omeprazole',
    category: 'gi',
    name: 'Omeprazole',
    nameTh: 'โอเมพราโซล',
    classDrug: 'GI — Proton pump inhibitor (PPI)',
    forms: ['Capsule 10/20 mg', 'Tablet'],
    doses: {
      dog: [
        { indication: 'Gastric ulcer / GERD', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '14-28 days' },
        { indication: 'Stress ulcer prophylaxis', dose: '1', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'During risk period' },
      ],
      cat: [
        { indication: 'Gastric ulcer / esophagitis', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '14-28 days' },
      ],
    },
    interactions: ['clopidogrel (reduced antiplatelet effect)', 'ketoconazole (reduced absorption)', 'sucralfate (separate by 2 hr)', 'iron'],
    warnings: [
      'Most effective when given on empty stomach',
      'Long-term use → B12 deficiency, hypomagnesemia',
      'Rebound acid hypersecretion if stopped abruptly — taper',
    ],
    notes: 'More effective than H2 blockers (famotidine). Best on empty stomach. Taper after long-term use.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'sucralfate',
    category: 'gi',
    name: 'Sucralfate',
    nameTh: 'ซูคราลเฟต',
    classDrug: 'GI — Mucosal protectant',
    forms: ['Tablet 1 g', 'Suspension 200 mg/mL'],
    doses: {
      dog: [
        { indication: 'GI ulcer / esophagitis', dose: '0.5-1', unit: 'g/dog (small/medium)', route: 'PO', frequency: 'q6-8h', duration: '14-28 days' },
        { indication: 'Large dog', dose: '1', unit: 'g', route: 'PO', frequency: 'q6-8h', duration: '14-28 days' },
      ],
      cat: [
        { indication: 'Esophagitis / ulcer', dose: '0.25-0.5', unit: 'g/cat', route: 'PO', frequency: 'q6-12h', duration: '14-28 days' },
      ],
    },
    interactions: ['most oral drugs (chelates) — separate by 2 hr', 'tetracyclines', 'fluoroquinolones', 'digoxin', 'levothyroxine'],
    warnings: [
      'Constipation possible',
      'Caution in renal failure (aluminum content)',
      'Give 2 hr separated from other oral meds',
      'Activated by acid — give before PPI dose',
    ],
    notes: 'Mucosal coating · works best in acidic environment. Separate from other oral drugs by 2 hours.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Parasiticides (2)
     ============================================================ */

  {
    id: 'fluralaner',
    category: 'antiparasitic',
    name: 'Fluralaner',
    nameTh: 'ฟลูราลาเนอร์ (Bravecto)',
    classDrug: 'Antiparasitic — Isoxazoline (oral/topical)',
    forms: ['Chewable tablet 112.5/250/500/1000/1400 mg', 'Topical spot-on'],
    doses: {
      dog: [
        { indication: 'Flea + tick prevention (oral)', dose: '25-56', unit: 'mg/kg (single dose)', route: 'PO chewable', frequency: 'q12 weeks', duration: '12-week protection' },
        { indication: 'Demodex / Sarcoptes', dose: '25', unit: 'mg/kg', route: 'PO', frequency: 'q12 weeks', duration: 'Until cured (off-label)' },
      ],
      cat: [
        { indication: 'Flea + tick (topical)', dose: '40', unit: 'mg/kg topical', route: 'Topical spot-on', frequency: 'q12 weeks', duration: '12 weeks' },
      ],
    },
    interactions: ['none significant'],
    warnings: [
      'History of seizures: use with caution (FDA alert 2018)',
      'Give with food for better absorption',
      'Excellent safety record but monitor neuro signs',
    ],
    notes: 'Long-acting (12 weeks). Off-label use for demodex very effective. Give with food.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'praziquantel',
    category: 'antiparasitic',
    name: 'Praziquantel',
    nameTh: 'พราซิควอนเทล',
    classDrug: 'Antiparasitic — Cestodes (tapeworm)',
    forms: ['Tablet 22.7/34 mg', 'Injection', 'Combo products (Drontal, etc.)'],
    doses: {
      dog: [
        { indication: 'Tapeworm (Dipylidium, Taenia, Echinococcus)', dose: '5', unit: 'mg/kg', route: 'PO/SC', frequency: 'Once · repeat in 2-3 weeks', duration: 'Single dose' },
      ],
      cat: [
        { indication: 'Tapeworm', dose: '5', unit: 'mg/kg', route: 'PO/SC', frequency: 'Once · repeat in 2-3 weeks', duration: 'Single dose' },
      ],
    },
    interactions: ['none significant'],
    warnings: [
      'Generally well-tolerated',
      'Vomiting possible',
      'Bitter taste',
    ],
    notes: 'Single dose effective against most tapeworms. Often combined with pyrantel/febantel for broad-spectrum.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Endocrine (2)
     ============================================================ */

  {
    id: 'levothyroxine',
    category: 'endocrine',
    name: 'Levothyroxine',
    nameTh: 'ลีโวไทร็อกซีน (T4)',
    classDrug: 'Endocrine — Thyroid hormone',
    forms: ['Tablet 0.1/0.2/0.3/0.5/0.7/0.8 mg'],
    doses: {
      dog: [
        { indication: 'Hypothyroidism', dose: '0.02', unit: 'mg/kg (or 0.5 mg/m²)', route: 'PO', frequency: 'q12h initially, then q24h', duration: 'Lifelong' },
      ],
      cat: [
        { indication: 'Iatrogenic hypothyroidism (post-I131)', dose: '0.05-0.1', unit: 'mg/cat', route: 'PO', frequency: 'q12-24h', duration: 'As needed' },
      ],
    },
    interactions: ['sucralfate (reduces absorption)', 'iron', 'antacids', 'cholestyramine', 'phenobarbital (increases metabolism)'],
    warnings: [
      'Recheck T4 + clinical signs at 4-6 weeks',
      'T4 sample 4-6 hr post-pill (peak)',
      'Cardiac patient — start low (1/4 dose) and titrate',
      'Signs of overdose: tachycardia, panting, weight loss, hyperactivity',
    ],
    notes: 'Lifelong therapy. Monitor T4 at peak (4-6 hr post-dose). Adjust dose by clinical response + T4.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'insulin-glargine',
    category: 'endocrine',
    name: 'Insulin glargine',
    nameTh: 'อินซูลิน กลาร์จีน (Lantus)',
    classDrug: 'Endocrine — Long-acting insulin',
    forms: ['Injection 100 IU/mL (vial or pen)'],
    doses: {
      dog: [
        { indication: 'Diabetes mellitus', dose: '0.25-0.5', unit: 'IU/kg', route: 'SC', frequency: 'q12h', duration: 'Lifelong · titrate by glucose curve' },
      ],
      cat: [
        { indication: 'Diabetes mellitus (preferred for cat)', dose: '0.25-0.5', unit: 'IU/kg or 1-2 IU/cat', route: 'SC', frequency: 'q12h', duration: 'Lifelong · may achieve remission' },
      ],
    },
    interactions: ['glucocorticoids (insulin resistance)', 'progesterone', 'beta-blockers (mask hypoglycemia)'],
    warnings: [
      '⚠️ Hypoglycemia — owner education essential (Karo syrup at home)',
      'Monitor with glucose curve · fructosamine',
      'Diet consistency important',
      'Refrigerate · roll vial gently (don\'t shake)',
      'Cat: tight regulation can lead to remission',
    ],
    notes: 'Preferred for cats — better remission rate. Long-acting (~24 hr but dose q12h). Owner training essential.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Misc (Antifungal, antihistamine, etc.) (1)
     ============================================================ */

  {
    id: 'itraconazole',
    category: 'antifungal',
    name: 'Itraconazole',
    nameTh: 'อิทราโคนาโซล',
    classDrug: 'Antifungal — Azole',
    forms: ['Capsule 100 mg', 'Oral solution 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Systemic fungal (Blasto, Histo, Crypto)', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q12h initially, then q24h', duration: '60-90+ days' },
        { indication: 'Dermatophytosis', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '4-6 weeks' },
      ],
      cat: [
        { indication: 'Cryptococcosis', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Until 2 negative titers' },
        { indication: 'Dermatophytosis', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q24h (week-on/week-off)', duration: '6-9 weeks total' },
      ],
    },
    interactions: ['cyclosporine (increased levels)', 'digoxin', 'warfarin', 'antacids (reduced absorption)', 'phenobarbital'],
    warnings: [
      '⚠️ Hepatotoxicity — monitor LFTs',
      'GI upset common',
      'Better absorbed with food (capsule) or empty stomach (solution)',
      'Vasculitis at high doses',
      'Avoid in pregnant animals',
    ],
    notes: 'First-line for many systemic + cutaneous fungi. Solution better absorbed. Monitor LFTs monthly.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Phase 2a — Antibiotics + Antifungal (20)
     ============================================================ */

  {
    id: 'cephalexin',
    category: 'antibiotic',
    name: 'Cephalexin (Cefalexin)',
    nameTh: 'เซฟาเล็กซิน',
    classDrug: 'Antibiotic — 1st-gen Cephalosporin',
    forms: ['Capsule 250/500 mg', 'Suspension 50 mg/mL'],
    doses: {
      dog: [
        { indication: 'Pyoderma / skin', dose: '20-30', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '21-28 days' },
        { indication: 'UTI', dose: '15-30', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
      ],
      cat: [
        { indication: 'Pyoderma / abscess', dose: '15-30', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
      ],
    },
    interactions: ['aminoglycosides (nephrotoxic)', 'probenecid (increases level)', 'NSAIDs'],
    warnings: ['Cross-reactivity with penicillin allergy', 'GI upset common', 'Caution in renal impairment'],
    notes: 'First-line for canine pyoderma. Excellent gram-positive coverage. Cheap.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'cefpodoxime',
    category: 'antibiotic',
    name: 'Cefpodoxime',
    nameTh: 'เซฟโพดอกซีม (Simplicef)',
    classDrug: 'Antibiotic — 3rd-gen Cephalosporin',
    forms: ['Tablet 100/200 mg'],
    doses: {
      dog: [
        { indication: 'Skin/soft tissue', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '7-28 days' },
        { indication: 'UTI', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '7-14 days' },
      ],
      cat: [
        { indication: 'Skin / UTI (off-label)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '7-14 days' },
      ],
    },
    interactions: ['antacids (reduce absorption)', 'probenecid', 'aminoglycosides'],
    warnings: ['Cross-reactivity with penicillin allergy', 'Give with food for absorption'],
    notes: 'Once-daily dosing helps compliance. Better gram-negative than 1st-gen.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'marbofloxacin',
    category: 'antibiotic',
    name: 'Marbofloxacin',
    nameTh: 'มาร์โบฟลอกซาซิน (Zeniquin)',
    classDrug: 'Antibiotic — Fluoroquinolone',
    forms: ['Tablet 25/50/100/200 mg', 'Injection 20 mg/mL'],
    doses: {
      dog: [
        { indication: 'UTI / soft tissue', dose: '2.75-5.5', unit: 'mg/kg', route: 'PO/SC', frequency: 'q24h', duration: '7-21 days' },
        { indication: 'Pyoderma deep', dose: '5.5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '21-28 days' },
      ],
      cat: [
        { indication: 'UTI / soft tissue', dose: '2.75-5.5', unit: 'mg/kg', route: 'PO/SC', frequency: 'q24h', duration: '7-14 days' },
      ],
    },
    interactions: ['theophylline', 'antacids (Mg/Al/Ca)', 'sucralfate', 'NSAIDs (seizure threshold)'],
    warnings: [
      'Cat: cleaner safety profile than enrofloxacin (less retinal risk) but still caution',
      'Avoid in young growing animals',
      'May lower seizure threshold',
    ],
    notes: 'Cat-friendlier than enrofloxacin. Once daily. Good for resistant gram-negative.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'pradofloxacin',
    category: 'antibiotic',
    name: 'Pradofloxacin',
    nameTh: 'พราโดฟลอกซาซิน (Veraflox)',
    classDrug: 'Antibiotic — 3rd-gen Fluoroquinolone',
    forms: ['Tablet 15/60/120 mg', 'Suspension 25 mg/mL (cat)'],
    doses: {
      dog: [
        { indication: 'Skin/soft tissue', dose: '3-4.5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '7-21 days' },
      ],
      cat: [
        { indication: 'Skin/soft tissue / abscess', dose: '5', unit: 'mg/kg', route: 'PO suspension', frequency: 'q24h', duration: '7-14 days' },
      ],
    },
    interactions: ['antacids', 'sucralfate', 'theophylline', 'NSAIDs'],
    warnings: [
      'Dog: do NOT use suspension (cat formulation, can cause bone marrow suppression in dog)',
      'Cat: approved formulation OK',
    ],
    notes: 'Better gram-positive + anaerobic than older FQ. Cat-specific suspension formulation.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'azithromycin',
    category: 'antibiotic',
    name: 'Azithromycin',
    nameTh: 'อะซิโทรมัยซิน',
    classDrug: 'Antibiotic — Macrolide',
    forms: ['Tablet 250/500 mg', 'Suspension 200 mg/5mL'],
    doses: {
      dog: [
        { indication: 'Respiratory / soft tissue', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 5d, then q3-5 days', duration: '5-21 days (long tissue half-life)' },
        { indication: 'Bartonellosis', dose: '10', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '21-28 days' },
      ],
      cat: [
        { indication: 'URI (Mycoplasma, Chlamydia)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 3-5d, then q72h', duration: '14-21 days' },
        { indication: 'Bartonellosis', dose: '10', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 7d, then q3 days', duration: '6 weeks' },
      ],
    },
    interactions: ['cyclosporine (increased levels)', 'digoxin', 'warfarin', 'antacids'],
    warnings: [
      'GI upset common',
      'Long tissue half-life — dose less frequently',
      'Caution in liver disease',
    ],
    notes: 'Long tissue concentration · pulse dosing OK after loading. Useful for cat URI.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'erythromycin',
    category: 'antibiotic',
    name: 'Erythromycin',
    nameTh: 'อิริโทรมัยซิน',
    classDrug: 'Antibiotic — Macrolide / Prokinetic',
    forms: ['Tablet 250/500 mg', 'Suspension'],
    doses: {
      dog: [
        { indication: 'Antibacterial', dose: '10-20', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: '7-14 days' },
        { indication: 'Prokinetic (gastroparesis)', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'Variable' },
      ],
      cat: [
        { indication: 'Prokinetic / Campylobacter', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: '5-7 days' },
      ],
    },
    interactions: ['theophylline', 'digoxin', 'cyclosporine', 'warfarin', 'cisapride (additive QT)'],
    warnings: [
      'Severe GI upset — vomiting, anorexia',
      'QT prolongation possible',
      'Hepatic metabolism',
    ],
    notes: 'Low-dose for prokinetic effect (motilin agonist). Antibacterial use limited by GI side effects.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'gentamicin',
    category: 'antibiotic',
    name: 'Gentamicin',
    nameTh: 'เจนทามัยซิน',
    classDrug: 'Antibiotic — Aminoglycoside',
    forms: ['Injection 50/100 mg/mL', 'Ophthalmic, otic preparations'],
    doses: {
      dog: [
        { indication: 'Severe gram-negative (sepsis)', dose: '6-10', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q24h', duration: '5-7 days max (nephrotoxic)' },
      ],
      cat: [
        { indication: 'Severe gram-negative', dose: '5-8', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q24h', duration: '5-7 days max' },
      ],
    },
    interactions: ['NSAIDs (synergistic AKI)', 'furosemide', 'cephalosporins', 'neuromuscular blockers'],
    warnings: [
      '⚠️ NEPHROTOXIC — monitor renal function, urinalysis (casts) daily',
      '⚠️ OTOTOXIC — irreversible vestibular/cochlear damage',
      'Avoid in dehydrated patient',
      'Avoid in renal disease',
      'Once-daily dosing safer than divided',
    ],
    notes: 'Reserved for severe gram-negative sepsis. Therapeutic drug monitoring ideal. Topical use much safer.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'amikacin',
    category: 'antibiotic',
    name: 'Amikacin',
    nameTh: 'อะมิคาซิน',
    classDrug: 'Antibiotic — Aminoglycoside',
    forms: ['Injection 50/250 mg/mL'],
    doses: {
      dog: [
        { indication: 'Severe gram-negative / Pseudomonas', dose: '15-30', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q24h', duration: '5-7 days' },
      ],
      cat: [
        { indication: 'Severe gram-negative', dose: '10-15', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q24h', duration: '5-7 days' },
      ],
    },
    interactions: ['NSAIDs', 'furosemide', 'cephalosporins', 'cisplatin', 'neuromuscular blockers'],
    warnings: [
      '⚠️ Nephrotoxic + ototoxic (less than gentamicin)',
      'Monitor renal function · urine casts',
      'Adequate hydration essential',
      'Once-daily preferred',
    ],
    notes: 'Better activity vs Pseudomonas than gentamicin. Reserve for confirmed resistant gram-negative.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'tmps',
    category: 'antibiotic',
    name: 'Trimethoprim-Sulfamethoxazole (TMS)',
    nameTh: 'TMS · ไตรเมโทพริม-ซัลฟา',
    classDrug: 'Antibiotic — Sulfonamide combination',
    forms: ['Tablet 80/400 or 160/800 mg', 'Suspension', 'Injection'],
    doses: {
      dog: [
        { indication: 'UTI / soft tissue', dose: '15-30', unit: 'mg/kg (combined)', route: 'PO', frequency: 'q12h', duration: '7-14 days' },
        { indication: 'Toxoplasma / Coccidia / Pneumocystis', dose: '30', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '14-21 days' },
        { indication: 'Nocardia', dose: '15-30', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '6+ months' },
      ],
      cat: [
        { indication: 'UTI / Toxoplasmosis', dose: '15-30', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '7-21 days' },
      ],
    },
    interactions: ['warfarin', 'methotrexate', 'phenytoin', 'cyclosporine', 'thiazides'],
    warnings: [
      '⚠️ KCS (dry eye) — Schirmer tear test before + during long-term use',
      'Idiosyncratic hepatotoxicity (Doberman especially)',
      'Hypersensitivity reactions',
      'Avoid in liver disease',
      'Crystalluria risk — ensure hydration',
    ],
    notes: '⚠️ Doberman: high risk of polysystemic immune reaction. Schirmer test if used > 14 days.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'chloramphenicol',
    category: 'antibiotic',
    name: 'Chloramphenicol',
    nameTh: 'คลอแรมเฟนิคอล',
    classDrug: 'Antibiotic — Phenicol',
    forms: ['Tablet 250/500 mg', 'Capsule', 'Injection'],
    doses: {
      dog: [
        { indication: 'Resistant infection (MRSP, etc.)', dose: '40-50', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: '14-28 days' },
      ],
      cat: [
        { indication: 'Resistant infection', dose: '12.5-20', unit: 'mg/kg', route: 'PO', frequency: 'q12h (lower than dog!)', duration: '7-14 days' },
      ],
    },
    interactions: ['phenobarbital (decreases level)', 'barbiturates', 'cyclosporine', 'warfarin', 'iron'],
    warnings: [
      '⚠️ HUMAN aplastic anemia risk — wear gloves when handling!',
      '⚠️ Cat: lower dose · GI upset, anorexia common',
      'Reversible bone marrow suppression in pets',
      'Avoid in young, breeding, or nursing animals',
      'Hepatic metabolism',
    ],
    notes: '⚠️ Handler safety: irreversible aplastic anemia (1 in 25,000-40,000 humans). Always wear gloves.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'tetracycline',
    category: 'antibiotic',
    name: 'Tetracycline',
    nameTh: 'เตตราไซคลีน',
    classDrug: 'Antibiotic — Tetracycline (1st-gen)',
    forms: ['Capsule 250/500 mg'],
    doses: {
      dog: [
        { indication: 'Tick-borne disease (less preferred than doxy)', dose: '22', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: '14-21 days' },
      ],
      cat: [
        { indication: 'Mycoplasma', dose: '22', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: '14-21 days' },
      ],
    },
    interactions: ['antacids (Mg/Al/Ca)', 'iron', 'dairy', 'warfarin', 'digoxin'],
    warnings: [
      'Esophageal stricture in cats',
      'Tooth discoloration in young animals',
      'Avoid in pregnancy',
      'Photosensitivity',
      'Doxycycline preferred (better absorbed)',
    ],
    notes: 'Largely replaced by doxycycline (better absorption + tolerance). Reserve for specific indications.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'minocycline',
    category: 'antibiotic',
    name: 'Minocycline',
    nameTh: 'มิโนไซคลีน',
    classDrug: 'Antibiotic — Tetracycline',
    forms: ['Capsule 50/100 mg', 'Tablet'],
    doses: {
      dog: [
        { indication: 'Tick-borne (when doxy unavailable)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '21-28 days' },
        { indication: 'Resistant pyoderma (MRSP)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: '21-28 days' },
      ],
      cat: [
        { indication: 'Tick-borne', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '14-28 days' },
      ],
    },
    interactions: ['antacids', 'iron', 'warfarin'],
    warnings: [
      'Vestibular signs (transient ataxia)',
      'Esophageal stricture in cats',
      'Hepatotoxicity rare',
      'Better absorbed than tetracycline',
    ],
    notes: 'Doxycycline alternative when shortage. Better tissue penetration. Caution: vestibular toxicity.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'penicillin-g',
    category: 'antibiotic',
    name: 'Penicillin G (Procaine/Benzathine)',
    nameTh: 'เพนิซิลลิน G',
    classDrug: 'Antibiotic — Beta-lactam (natural penicillin)',
    forms: ['Injection (procaine 300,000 IU/mL)', 'Combo procaine+benzathine'],
    doses: {
      dog: [
        { indication: 'Streptococcal / clostridial', dose: '20,000-40,000', unit: 'IU/kg', route: 'IM/SC', frequency: 'q12-24h', duration: '5-10 days' },
        { indication: 'Leptospirosis (pre-doxy)', dose: '25,000', unit: 'IU/kg', route: 'IM/SC', frequency: 'q12h', duration: '14 days' },
      ],
      cat: [
        { indication: 'Streptococcal infection', dose: '20,000-40,000', unit: 'IU/kg', route: 'IM/SC', frequency: 'q12-24h', duration: '5-10 days' },
      ],
    },
    interactions: ['aminoglycosides (synergy)', 'tetracyclines (antagonism)', 'probenecid'],
    warnings: [
      'Hypersensitivity (anaphylaxis rare)',
      'Procaine reactions (CNS) at high doses',
      'IM injection painful',
      'Narrow spectrum',
    ],
    notes: 'Narrow spectrum gram-positive. Largely replaced by amoxicillin in small animals. Useful for confirmed sensitive Strep.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'ampicillin',
    category: 'antibiotic',
    name: 'Ampicillin',
    nameTh: 'แอมพิซิลลิน',
    classDrug: 'Antibiotic — Aminopenicillin',
    forms: ['Capsule 250/500 mg', 'Injection 250/500/1000 mg'],
    doses: {
      dog: [
        { indication: 'UTI / soft tissue', dose: '20-40', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q6-8h', duration: '7-14 days' },
        { indication: 'Empirical sepsis (with aminoglycoside)', dose: '22', unit: 'mg/kg', route: 'IV', frequency: 'q6h', duration: 'Until specific Rx' },
      ],
      cat: [
        { indication: 'UTI / soft tissue', dose: '10-20', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q6-8h', duration: '7-14 days' },
      ],
    },
    interactions: ['aminoglycosides (synergy in vitro)', 'tetracyclines (antagonism)', 'probenecid'],
    warnings: [
      'Hypersensitivity to penicillins',
      'GI upset (PO formulation poorly absorbed — IV preferred)',
      'Adjust in severe renal impairment',
    ],
    notes: 'Largely replaced by amoxicillin (better PO absorption). IV/IM/SC preferred for ampicillin.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'cefazolin',
    category: 'antibiotic',
    name: 'Cefazolin',
    nameTh: 'เซฟาโซลิน',
    classDrug: 'Antibiotic — 1st-gen Cephalosporin (IV)',
    forms: ['Injection 1 g'],
    doses: {
      dog: [
        { indication: 'Surgical prophylaxis', dose: '22', unit: 'mg/kg', route: 'IV', frequency: '30 min before surgery, then q90min during', duration: 'Single dose to 24 hr post-op' },
        { indication: 'Soft tissue infection', dose: '22', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q8h', duration: '5-7 days' },
      ],
      cat: [
        { indication: 'Surgical prophylaxis', dose: '22', unit: 'mg/kg', route: 'IV', frequency: 'Pre-op + q90min', duration: 'Peri-operative' },
      ],
    },
    interactions: ['aminoglycosides', 'probenecid', 'NSAIDs'],
    warnings: [
      'Cross-reactivity with penicillin',
      'Hypersensitivity',
      'Standard surgical prophylaxis drug',
    ],
    notes: '⭐ Standard surgical prophylaxis: 22 mg/kg IV 30 min before incision, redose q90 min during long surgery.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'ceftriaxone',
    category: 'antibiotic',
    name: 'Ceftriaxone',
    nameTh: 'เซฟไทรอะโซน',
    classDrug: 'Antibiotic — 3rd-gen Cephalosporin',
    forms: ['Injection 1 g'],
    doses: {
      dog: [
        { indication: 'Severe gram-negative / sepsis', dose: '15-50', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q12-24h', duration: '7-14 days' },
        { indication: 'CNS penetration (meningitis)', dose: '50', unit: 'mg/kg', route: 'IV', frequency: 'q12h', duration: '14-28 days' },
      ],
      cat: [
        { indication: 'Severe gram-negative', dose: '25-50', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q12-24h', duration: '7-14 days' },
      ],
    },
    interactions: ['aminoglycosides', 'NSAIDs', 'calcium-containing IV (precipitate)'],
    warnings: [
      '⚠️ Do NOT mix with calcium-containing IV solutions (precipitate, fatal)',
      'Cross-reactivity with penicillin',
      'Hepatic excretion (unlike most other ceph)',
      'CNS penetration good',
    ],
    notes: 'Excellent CNS penetration. Standard for serious gram-negative infections. NOT with calcium IV.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'fluconazole',
    category: 'antifungal',
    name: 'Fluconazole',
    nameTh: 'ฟลูโคนาโซล',
    classDrug: 'Antifungal — Azole',
    forms: ['Tablet 50/100/150/200 mg', 'Suspension', 'IV solution'],
    doses: {
      dog: [
        { indication: 'Cryptococcosis / Coccidioidomycosis', dose: '5-10', unit: 'mg/kg', route: 'PO/IV', frequency: 'q12-24h', duration: '6-12 months' },
        { indication: 'CNS fungal infection', dose: '5-10', unit: 'mg/kg', route: 'PO/IV', frequency: 'q12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Cryptococcosis (CNS or systemic)', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Until 2 negative titers (often 12+ months)' },
      ],
    },
    interactions: ['cyclosporine (increased levels)', 'warfarin', 'phenytoin', 'midazolam'],
    warnings: [
      'Hepatotoxicity (less than itraconazole)',
      'CNS penetration excellent',
      'Renal excretion — adjust in renal failure',
      'Less GI upset than itraconazole',
    ],
    notes: 'Best CNS penetration of azoles. First-line for cryptococcosis (cat especially). Long-term Rx.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'ketoconazole',
    category: 'antifungal',
    name: 'Ketoconazole',
    nameTh: 'คีโตโคนาโซล',
    classDrug: 'Antifungal — Azole (1st-gen)',
    forms: ['Tablet 200 mg', 'Shampoo (topical)'],
    doses: {
      dog: [
        { indication: 'Dermatophytosis / Malassezia', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: '4-8 weeks' },
        { indication: 'Cushings (dose-titrated cortisol suppression)', dose: '5-15', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term · ACTH stim monitoring' },
      ],
      cat: [
        { indication: 'AVOID in cats (hepatotoxic)', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Use itraconazole or fluconazole instead' },
      ],
    },
    interactions: ['cyclosporine (markedly increased)', 'cisapride', 'antacids', 'warfarin', 'digoxin'],
    warnings: [
      '⚠️ HEPATOTOXIC — especially cats (avoid)',
      'GI upset common',
      'Monitor LFTs',
      'Acidic environment for absorption (give with food)',
      'Inhibits cortisol synthesis (used in Cushings)',
    ],
    notes: '⚠️ Cat: avoid. Dog: largely replaced by itraconazole/fluconazole except for Cushings + cyclosporine sparing.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'terbinafine',
    category: 'antifungal',
    name: 'Terbinafine',
    nameTh: 'เทอร์บินาฟีน (Lamisil)',
    classDrug: 'Antifungal — Allylamine',
    forms: ['Tablet 250 mg', 'Topical cream/spray'],
    doses: {
      dog: [
        { indication: 'Dermatophytosis / Malassezia / Sporotrichosis', dose: '20-40', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '4-8 weeks' },
      ],
      cat: [
        { indication: 'Dermatophytosis / Cryptococcosis (adjunct)', dose: '30-40', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '4-8 weeks (week-on/week-off OK)' },
      ],
    },
    interactions: ['cyclosporine', 'cimetidine', 'rifampin'],
    warnings: [
      'Hepatotoxicity (rare in pets)',
      'GI upset',
      'Effective vs dermatophytes + some yeasts',
    ],
    notes: 'Excellent for ringworm. Concentrates in keratin tissues. Pulse therapy (week on/off) often used in cats.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'amphotericin-b',
    category: 'antifungal',
    name: 'Amphotericin B',
    nameTh: 'แอมโฟเทอริซิน บี',
    classDrug: 'Antifungal — Polyene (systemic)',
    forms: ['Injection (deoxycholate, lipid complex)'],
    doses: {
      dog: [
        { indication: 'Severe systemic mycosis (Blasto, Histo, Crypto)', dose: '0.25-0.5', unit: 'mg/kg', route: 'IV slowly (over 4-6 hr)', frequency: '2-3× weekly', duration: 'Total 4-12 mg/kg cumulative · then PO azole' },
        { indication: 'Lipid complex formulation (less nephrotoxic)', dose: '1-3', unit: 'mg/kg', route: 'IV', frequency: '2-3× weekly', duration: 'Higher cumulative dose tolerated' },
      ],
      cat: [
        { indication: 'Cryptococcosis / refractory', dose: '0.1-0.5', unit: 'mg/kg', route: 'SC (preferred) or IV', frequency: '2-3× weekly', duration: 'Total dose-limited by toxicity' },
      ],
    },
    interactions: ['nephrotoxic drugs (aminoglycosides, NSAIDs, cyclosporine)', 'corticosteroids (hypoK)', 'digoxin'],
    warnings: [
      '⚠️ NEPHROTOXIC — primary toxicity',
      'Pre-treat: IV fluid loading, mannitol may help',
      'Monitor BUN/creatinine before each dose',
      'Hypokalemia, hypomagnesemia',
      'Infusion reactions (fever, vomiting)',
      'Lipid formulations less toxic but expensive',
    ],
    notes: '⚠️ Reserve for severe systemic mycoses unresponsive to azoles. Lipid formulations preferred when affordable.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Phase 2b — Anesthetic + Pain (20)
     ============================================================ */

  {
    id: 'acepromazine',
    category: 'anesthetic',
    name: 'Acepromazine (ACP)',
    nameTh: 'อะเซพรอมาซีน',
    classDrug: 'Sedative — Phenothiazine',
    forms: ['Tablet 10/25 mg', 'Injection 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Sedation/premed', dose: '0.01-0.05', unit: 'mg/kg', route: 'IM/IV', frequency: 'Once', duration: '4-6 hr' },
        { indication: 'Mild oral sedation', dose: '0.5-2', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h prn', duration: 'As needed' },
      ],
      cat: [
        { indication: 'Sedation/premed', dose: '0.025-0.05', unit: 'mg/kg', route: 'IM/IV', frequency: 'Once', duration: '4-6 hr' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'epinephrine (paradoxical hypotension)', 'organophosphates'],
    warnings: [
      '⚠️ Hypotension — vasodilation · avoid in shock, hypovolemia',
      '⚠️ Lowers seizure threshold — caution in epileptic',
      '⚠️ Boxer breed sensitivity (severe hypotension/bradycardia)',
      'No analgesia — combine with opioid',
      'Long duration · can outlast surgery',
      'Splenomegaly (sequestration)',
    ],
    notes: 'Useful sedative but no analgesia. Avoid in shock. Boxer caution. Often combined with opioid.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'diazepam',
    category: 'anesthetic',
    name: 'Diazepam',
    nameTh: 'ไดอะซีแพม (Valium)',
    classDrug: 'Sedative — Benzodiazepine',
    forms: ['Tablet 2/5/10 mg', 'Injection 5 mg/mL', 'Rectal gel'],
    doses: {
      dog: [
        { indication: 'Status epilepticus', dose: '0.5-1', unit: 'mg/kg', route: 'IV/rectal', frequency: 'May repeat × 2-3', duration: 'Bridge to longer-acting' },
        { indication: 'Premed/induction (with ketamine)', dose: '0.25-0.5', unit: 'mg/kg', route: 'IV', frequency: 'Once', duration: '30-60 min' },
        { indication: 'Anxiety', dose: '0.5-2', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: 'Short-term' },
      ],
      cat: [
        { indication: 'Status epilepticus', dose: '0.5-1', unit: 'mg/kg', route: 'IV/rectal', frequency: 'May repeat', duration: 'Bridge' },
        { indication: 'Appetite stimulant', dose: '0.05-0.4', unit: 'mg/kg', route: 'IV/PO', frequency: 'q24h', duration: 'Short-term · NOT oral!' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'cimetidine', 'erythromycin', 'flumazenil (reversal)'],
    warnings: [
      '⚠️ CAT: Idiosyncratic FATAL hepatic necrosis with ORAL diazepam — NEVER use PO long-term',
      'Paradoxical excitation possible',
      'Propylene glycol vehicle (IV bolus rapid → CV depression)',
      'Reversal: flumazenil 0.01-0.1 mg/kg IV',
      'Not water-soluble — IV slowly',
    ],
    notes: '⚠️ Cat oral diazepam = potentially fatal liver failure. Use midazolam instead for cats.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'alfaxalone',
    category: 'anesthetic',
    name: 'Alfaxalone',
    nameTh: 'อัลฟาซาโลน (Alfaxan)',
    classDrug: 'Anesthetic — Neurosteroid IV induction',
    forms: ['Injection 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Induction (premedicated)', dose: '1-2', unit: 'mg/kg', route: 'IV slowly', frequency: 'Once', duration: '5-10 min' },
        { indication: 'Induction (unpremedicated)', dose: '2-3', unit: 'mg/kg', route: 'IV', frequency: 'Once', duration: '10-15 min' },
        { indication: 'CRI', dose: '0.07-0.12', unit: 'mg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'As needed' },
      ],
      cat: [
        { indication: 'Induction (premedicated)', dose: '2-3', unit: 'mg/kg', route: 'IV slowly', frequency: 'Once', duration: '5-10 min' },
        { indication: 'IM sedation (alone or combo)', dose: '2-5', unit: 'mg/kg', route: 'IM', frequency: 'Once', duration: '20-40 min' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'opioids (synergistic)'],
    warnings: [
      'Apnea less than propofol but possible',
      'CV more stable than propofol',
      'No Heinz body anemia (cat-safe vs propofol for CRI)',
      'Pain on injection minimal',
      'Spontaneous movement during induction (premed helps)',
    ],
    notes: 'Better cat-safety than propofol (no Heinz body). More CV stable. Cleaner recovery.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'etomidate',
    category: 'anesthetic',
    name: 'Etomidate',
    nameTh: 'อีโทมิเดต',
    classDrug: 'Anesthetic — Imidazole IV induction',
    forms: ['Injection 2 mg/mL'],
    doses: {
      dog: [
        { indication: 'Induction (cardiac patient)', dose: '0.5-2', unit: 'mg/kg', route: 'IV', frequency: 'Once', duration: '5-10 min' },
      ],
      cat: [
        { indication: 'Induction (cardiac patient)', dose: '0.5-3', unit: 'mg/kg', route: 'IV', frequency: 'Once', duration: '5-10 min' },
      ],
    },
    interactions: ['CNS depressants', 'opioids', 'corticosteroids'],
    warnings: [
      '⚠️ Adrenal suppression — avoid in critical/septic patient (adrenal insufficiency)',
      'Pain on injection (propylene glycol)',
      'Myoclonus on induction (premed helps)',
      'Hemolysis in cat (propylene glycol vehicle) — limit volume',
      'Best CV stability — preserves contractility',
      'Expensive',
    ],
    notes: '⭐ Best for cardiac-compromised patient (preserves CV). Avoid in septic/Addison\'s patient.',
    source: "Plumb's 10th Ed.",
  },

  /* Local anesthetics */

  {
    id: 'lidocaine',
    category: 'anesthetic',
    name: 'Lidocaine',
    nameTh: 'ลิโดเคน (Xylocaine)',
    classDrug: 'Local anesthetic / Antiarrhythmic Class IB',
    forms: ['Injection 1%/2% (10/20 mg/mL)', 'Patch', 'Topical gel'],
    doses: {
      dog: [
        { indication: 'Local infiltration / line block', dose: '2-6', unit: 'mg/kg max', route: 'SC infiltration', frequency: 'Once · onset 5-10 min', duration: '60-90 min' },
        { indication: 'Epidural', dose: '4', unit: 'mg/kg (1 mL/4.5 kg)', route: 'Epidural', frequency: 'Once', duration: '60-90 min' },
        { indication: 'Ventricular arrhythmia', dose: '2-4', unit: 'mg/kg IV bolus, then 25-100 mcg/kg/min CRI', route: 'IV', frequency: 'Bolus + CRI', duration: 'During arrhythmia' },
        { indication: 'Analgesic CRI (multimodal)', dose: '25-50', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'During surgery' },
      ],
      cat: [
        { indication: 'Local infiltration', dose: '2', unit: 'mg/kg max!', route: 'SC', frequency: 'Once', duration: '60-90 min' },
        { indication: 'Epidural', dose: '2', unit: 'mg/kg', route: 'Epidural', frequency: 'Once', duration: '60-90 min' },
      ],
    },
    interactions: ['cimetidine (increased levels)', 'beta-blockers', 'phenytoin', 'amiodarone (additive)'],
    warnings: [
      '⚠️ CAT: maximum 2 mg/kg — toxicity at 4-6 mg/kg (dog tolerates higher)',
      '⚠️ NEVER use lidocaine with epinephrine for digital/extremity blocks (necrosis)',
      'CNS toxicity: tremors, seizures',
      'CV toxicity: bradycardia, hypotension at high doses',
      'Use plain (no epi) for most veterinary uses',
    ],
    notes: '⚠️ Cat dose strictly limited! Onset 5-10 min, duration 60-90 min. Can be used IV for arrhythmia (dog).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'bupivacaine',
    category: 'anesthetic',
    name: 'Bupivacaine',
    nameTh: 'บูพิวาเคน (Marcaine)',
    classDrug: 'Local anesthetic — Long-acting',
    forms: ['Injection 0.25%/0.5%/0.75% (2.5/5/7.5 mg/mL)', 'Liposomal (Nocita)'],
    doses: {
      dog: [
        { indication: 'Local infiltration / line block', dose: '1-2', unit: 'mg/kg max', route: 'SC/perineural', frequency: 'Once · onset 15-20 min', duration: '6-8 hr' },
        { indication: 'Epidural (with morphine/opioid)', dose: '1', unit: 'mg/kg', route: 'Epidural', frequency: 'Once', duration: '6-8 hr' },
        { indication: 'Liposomal (Nocita) — surgical site', dose: '5.3', unit: 'mg/kg', route: 'Infiltration', frequency: 'Once', duration: '72 hr' },
      ],
      cat: [
        { indication: 'Local infiltration', dose: '1', unit: 'mg/kg max!', route: 'SC', frequency: 'Once', duration: '6-8 hr' },
      ],
    },
    interactions: ['cardiac depressants', 'beta-blockers'],
    warnings: [
      '⚠️ NEVER IV — CARDIOTOXIC, fatal · slow recovery from cardiac arrest',
      '⚠️ Cat: 1 mg/kg max',
      'Onset slower than lidocaine (15-20 min)',
      'Duration much longer (6-8 hr)',
      'Liposomal formulation lasts 72 hours',
    ],
    notes: '⚠️ NEVER IV (cardiotoxic). Long duration ideal for declaws, dental, surgical pain. Liposomal 72hr.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'mepivacaine',
    category: 'anesthetic',
    name: 'Mepivacaine',
    nameTh: 'เมพิวาเคน',
    classDrug: 'Local anesthetic — Intermediate',
    forms: ['Injection 2% (20 mg/mL)'],
    doses: {
      dog: [
        { indication: 'Local infiltration / nerve block', dose: '2-4', unit: 'mg/kg', route: 'SC/perineural', frequency: 'Once · onset 5-10 min', duration: '90-180 min' },
      ],
      cat: [
        { indication: 'Nerve block (intermediate duration)', dose: '2', unit: 'mg/kg', route: 'Perineural', frequency: 'Once', duration: '90-180 min' },
      ],
    },
    interactions: ['beta-blockers', 'cimetidine'],
    warnings: [
      'Less cardiotoxic than bupivacaine',
      'Faster onset than bupivacaine',
      'Used commonly for equine but also small animal',
    ],
    notes: 'Intermediate duration · faster onset than bupivacaine, longer than lidocaine. Niche use.',
    source: "Plumb's 10th Ed.",
  },

  /* Strong opioids */

  {
    id: 'morphine',
    category: 'opioid',
    name: 'Morphine',
    nameTh: 'มอร์ฟีน',
    classDrug: 'Opioid — Pure mu agonist',
    forms: ['Injection 10/15 mg/mL', 'Tablet (extended release)'],
    doses: {
      dog: [
        { indication: 'Severe pain', dose: '0.5-1', unit: 'mg/kg', route: 'IM/SC', frequency: 'q4-6h', duration: 'Peri-operative' },
        { indication: 'Epidural', dose: '0.1', unit: 'mg/kg (preservative-free!)', route: 'Epidural', frequency: 'Once', duration: '12-24 hr analgesia' },
        { indication: 'CRI', dose: '0.1-0.3', unit: 'mg/kg/hr', route: 'IV CRI', frequency: 'Continuous', duration: 'Severe pain' },
      ],
      cat: [
        { indication: 'Severe pain (with caution)', dose: '0.1-0.3', unit: 'mg/kg', route: 'IM/SC', frequency: 'q4-6h', duration: 'Peri-operative' },
        { indication: 'Epidural', dose: '0.1', unit: 'mg/kg (preservative-free!)', route: 'Epidural', frequency: 'Once', duration: '8-12 hr' },
      ],
    },
    interactions: ['MAO inhibitors', 'CNS depressants', 'beta-blockers', 'cimetidine'],
    warnings: [
      '⚠️ Vomiting common (more than methadone) · pre-treat maropitant',
      '⚠️ Histamine release on IV — use IM/SC, or IV slowly + diluted',
      'Respiratory depression',
      'Bradycardia',
      'Cat: dysphoria/excitement at high doses',
      'Epidural: must be preservative-free',
      'Schedule II controlled',
    ],
    notes: 'Cheap, effective. Vomiting common pre-op (use methadone instead). Excellent epidural analgesia.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'hydromorphone',
    category: 'opioid',
    name: 'Hydromorphone',
    nameTh: 'ไฮโดรมอร์โฟน',
    classDrug: 'Opioid — Pure mu agonist',
    forms: ['Injection 2 mg/mL'],
    doses: {
      dog: [
        { indication: 'Pre-op / severe pain', dose: '0.05-0.2', unit: 'mg/kg', route: 'IM/IV/SC', frequency: 'q4-6h', duration: 'Peri-operative' },
      ],
      cat: [
        { indication: 'Pre-op / severe pain', dose: '0.05-0.1', unit: 'mg/kg', route: 'IM/IV/SC', frequency: 'q4-6h', duration: 'Peri-operative' },
      ],
    },
    interactions: ['MAO inhibitors', 'CNS depressants', 'erythromycin'],
    warnings: [
      'Vomiting (less than morphine)',
      'Respiratory depression',
      'Bradycardia',
      'Cat: hyperthermia possible',
      'No histamine release (vs morphine)',
      'Schedule II controlled',
    ],
    notes: '~5-7× more potent than morphine. No histamine release. Hyperthermia risk in cats.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'buprenorphine',
    category: 'opioid',
    name: 'Buprenorphine',
    nameTh: 'บูพรีนอร์ฟีน (Simbadol/Vetergesic)',
    classDrug: 'Opioid — Partial mu agonist',
    forms: ['Injection 0.3 mg/mL', 'Concentrated (Simbadol) 1.8 mg/mL', 'Sublingual'],
    doses: {
      dog: [
        { indication: 'Mild-moderate pain', dose: '0.01-0.03', unit: 'mg/kg', route: 'IM/IV/SC', frequency: 'q6-8h', duration: 'Peri-operative' },
      ],
      cat: [
        { indication: 'Pain (excellent transmucosal absorption!)', dose: '0.01-0.03', unit: 'mg/kg', route: 'OTM (oral transmucosal) / IM / IV', frequency: 'q6-8h', duration: 'Peri-operative · OTM very practical' },
        { indication: 'Simbadol (high-conc) SC', dose: '0.24', unit: 'mg/kg', route: 'SC', frequency: 'q24h', duration: 'Up to 3 days' },
      ],
    },
    interactions: ['CNS depressants', 'pure mu opioids (partial antagonism at high dose)'],
    warnings: [
      'Ceiling effect — limited efficacy for severe pain',
      'Long duration (~6-8 hr)',
      'Mild respiratory + CV effects',
      'Cat OTM (under tongue) — excellent absorption ⭐',
      'Schedule III controlled',
    ],
    notes: '⭐ Cat oral transmucosal (OTM) absorption ~30% — practical for outpatient. Long duration.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'naloxone',
    category: 'opioid',
    name: 'Naloxone',
    nameTh: 'นาล็อกโซน (Narcan)',
    classDrug: 'Opioid antagonist (reversal)',
    forms: ['Injection 0.4 mg/mL'],
    doses: {
      dog: [
        { indication: 'Opioid reversal (overdose)', dose: '0.04', unit: 'mg/kg', route: 'IV preferred', frequency: 'May repeat q2-3 min if needed', duration: 'Short half-life (30-60 min) — re-narcotization possible' },
      ],
      cat: [
        { indication: 'Opioid reversal', dose: '0.04', unit: 'mg/kg', route: 'IV/IM', frequency: 'May repeat', duration: 'Short half-life' },
      ],
    },
    interactions: ['reverses ALL opioid effects (including analgesia)'],
    warnings: [
      'Reverses analgesia → severe pain on emergence',
      'Short half-life (30-60 min) — fentanyl/methadone may re-narcotize',
      'Acute withdrawal in chronic opioid users',
      'CNS excitation possible',
      'Titrate to effect — partial reversal preserves analgesia',
    ],
    notes: 'Emergency reversal. Titrate slowly to preserve some analgesia. Watch for re-narcotization (re-dose).',
    source: "Plumb's 10th Ed.",
  },

  /* Adjunct analgesics */

  {
    id: 'gabapentin',
    category: 'pain',
    name: 'Gabapentin',
    nameTh: 'กาบาเพนติน (Neurontin)',
    classDrug: 'Adjunct analgesic / Anticonvulsant',
    forms: ['Capsule 100/300/400 mg', 'Tablet 600/800 mg', 'Solution 50 mg/mL ⚠️ xylitol-free version!'],
    doses: {
      dog: [
        { indication: 'Chronic pain (neuropathic, OA adjunct)', dose: '5-15', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: 'Long-term' },
        { indication: 'Anxiety / sedation', dose: '20-40', unit: 'mg/kg', route: 'PO', frequency: '2 hr before stressor', duration: 'PRN' },
        { indication: 'Add-on epilepsy', dose: '10-20', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Pre-visit anxiolysis ⭐', dose: '50-100', unit: 'mg/cat (total dose)', route: 'PO', frequency: '90 min before vet visit', duration: 'Single dose' },
        { indication: 'Chronic OA pain', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
    },
    interactions: ['antacids (reduce absorption · separate by 2 hr)', 'CNS depressants'],
    warnings: [
      '⚠️ ORAL SOLUTION may contain XYLITOL — toxic! Use compounded xylitol-free or capsule',
      'Sedation common (especially first dose)',
      'Renal excretion — adjust in CKD',
      'Taper to discontinue (rebound)',
      'Cat: pre-visit dosing reduces stress dramatically',
    ],
    notes: '⭐ Cat: 100 mg PO 90 min before visit = excellent pre-visit anxiolysis (Plumb\'s endorsed).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'amantadine',
    category: 'pain',
    name: 'Amantadine',
    nameTh: 'อะแมนทาดีน',
    classDrug: 'Adjunct analgesic — NMDA antagonist',
    forms: ['Capsule 100 mg', 'Suspension 50 mg/5mL'],
    doses: {
      dog: [
        { indication: 'Chronic pain (OA adjunct)', dose: '3-5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term · multimodal' },
      ],
      cat: [
        { indication: 'Chronic OA pain', dose: '3-5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['anticholinergics (additive)', 'CNS stimulants'],
    warnings: [
      'GI upset',
      'Agitation/anxiety possible',
      'Renal excretion — adjust in CKD',
      'Best as adjunct, not monotherapy',
    ],
    notes: 'NMDA antagonist for windup pain. Multimodal use (with NSAID + gabapentin) for chronic OA.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'bedinvetmab',
    category: 'pain',
    name: 'Bedinvetmab',
    nameTh: 'เบดินเวตแมบ (Librela)',
    classDrug: 'Anti-NGF monoclonal antibody — Dog OA pain',
    forms: ['Injection 5/10/15/20/30 mg pre-filled syringe'],
    doses: {
      dog: [
        { indication: 'Canine osteoarthritis pain', dose: '0.5-1', unit: 'mg/kg (use dose chart by BW)', route: 'SC', frequency: 'q1 month', duration: 'Long-term · monthly injection' },
      ],
      cat: [
        { indication: 'NOT approved for cats — use frunevetmab', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Cat = frunevetmab (Solensia)' },
      ],
    },
    interactions: ['minimal — different mechanism than NSAIDs'],
    warnings: [
      '⚠️ Caution if reproductive use planned (NGF role in fetal development)',
      'Avoid in pregnant/breeding bitches',
      'Side effects rare · injection site reaction',
      'Slow onset · 1-2 doses to see full effect',
      'Can combine with NSAIDs (no additive renal toxicity)',
    ],
    notes: '⭐ Game-changer for chronic OA · monthly SC · safer than long-term NSAIDs in CKD. Dog only (use Solensia for cat).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'frunevetmab',
    category: 'pain',
    name: 'Frunevetmab',
    nameTh: 'ฟรูเนเวตแมบ (Solensia)',
    classDrug: 'Anti-NGF monoclonal antibody — Cat OA pain',
    forms: ['Injection 7 mg/mL pre-filled syringe'],
    doses: {
      dog: [
        { indication: 'NOT for dogs — use bedinvetmab', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Dog = Librela' },
      ],
      cat: [
        { indication: 'Feline osteoarthritis pain', dose: '1-2.8', unit: 'mg/kg (use dose chart)', route: 'SC', frequency: 'q1 month', duration: 'Long-term · monthly' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      '⚠️ Avoid in pregnant/breeding queens',
      'Injection site reaction rare',
      'No nephrotoxicity (vs NSAIDs)',
      '⭐ Safe in CKD cats — major advantage',
    ],
    notes: '⭐ Cat OA + CKD = ideal use case (no kidney concerns). Monthly SC. Slow onset, peak 1-2 mo.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'robenacoxib',
    category: 'pain',
    name: 'Robenacoxib',
    nameTh: 'โรเบนาคอกซิบ (Onsior)',
    classDrug: 'NSAID — COX-2 selective',
    forms: ['Tablet 6 mg (cat)', 'Tablet 5/10/20/40 mg (dog)', 'Injection'],
    doses: {
      dog: [
        { indication: 'Acute pain / OA', dose: '1', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Up to 6-7 days for acute · longer use under monitoring' },
      ],
      cat: [
        { indication: 'Acute pain post-op (cat)', dose: '1', unit: 'mg/kg', route: 'PO/SC', frequency: 'q24h', duration: 'Up to 6 days' },
      ],
    },
    interactions: ['steroids (NEVER!)', 'ACE inhibitors', 'diuretics', 'other NSAIDs'],
    warnings: [
      '⚠️ Cat duration limited to 6 days (label) — longer needs careful monitoring',
      'NEVER combine with steroids',
      'Avoid in dehydration, renal/hepatic disease',
      'Best for short-term post-op pain',
    ],
    notes: '⭐ Approved cat NSAID (rare). Tissue-selective COX-2. Cat dose 6 days max per label.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'grapiprant',
    category: 'pain',
    name: 'Grapiprant',
    nameTh: 'กราพิแพรนต์ (Galliprant)',
    classDrug: 'NSAID — EP4 receptor antagonist',
    forms: ['Tablet 20/60/100 mg'],
    doses: {
      dog: [
        { indication: 'Canine OA pain', dose: '2', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term · safer than traditional NSAIDs' },
      ],
      cat: [
        { indication: 'NOT FDA-approved for cats', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Use other options' },
      ],
    },
    interactions: ['steroids (still avoid)', 'other NSAIDs'],
    warnings: [
      'Generally well-tolerated · less GI/renal than traditional NSAIDs',
      'Avoid in young dogs (< 9 months)',
      'Best on empty stomach or with small meal',
      'GI upset, decreased albumin/protein possible',
    ],
    notes: '⭐ Targets EP4 receptor specifically · "kinder NSAID" with less GI/renal effect. Dog only.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'firocoxib',
    category: 'pain',
    name: 'Firocoxib',
    nameTh: 'ไฟโรคอกซิบ (Previcox)',
    classDrug: 'NSAID — COX-2 selective',
    forms: ['Chewable tablet 57/227 mg'],
    doses: {
      dog: [
        { indication: 'OA / acute pain', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term with monitoring' },
        { indication: 'Post-op pain', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '3-7 days' },
      ],
      cat: [
        { indication: 'NOT for cats', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Use meloxicam, robenacoxib, or anti-NGF' },
      ],
    },
    interactions: ['steroids', 'ACEi', 'diuretics', 'other NSAIDs'],
    warnings: [
      'NEVER with steroids',
      'GI ulceration, renal effects',
      'Monitor LFTs, renal q3-6 months long-term',
      'Once-daily dosing convenient',
    ],
    notes: 'Once-daily NSAID for chronic OA in dogs. Generally well tolerated.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'deracoxib',
    category: 'pain',
    name: 'Deracoxib',
    nameTh: 'เดราคอกซิบ (Deramaxx)',
    classDrug: 'NSAID — COX-2 selective',
    forms: ['Chewable tablet 12/25/75/100 mg'],
    doses: {
      dog: [
        { indication: 'OA chronic', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
        { indication: 'Post-op (acute)', dose: '3-4', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: '7 days max at this dose' },
      ],
      cat: [
        { indication: 'NOT for cats', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Use cat-approved NSAID' },
      ],
    },
    interactions: ['steroids', 'ACEi', 'diuretics', 'other NSAIDs'],
    warnings: [
      'Higher GI ulceration reports than other COX-2 NSAIDs',
      'NEVER with steroids',
      'Monitor LFTs/renal',
      'Acute dose (3-4 mg/kg) max 7 days only',
    ],
    notes: 'Two dosing regimens (chronic vs acute). GI events more reported · use lowest effective dose.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'paracetamol',
    category: 'pain',
    name: 'Acetaminophen (Paracetamol)',
    nameTh: 'พาราเซตามอล',
    classDrug: 'Analgesic / Antipyretic — Non-NSAID',
    forms: ['Tablet 325/500 mg', 'Liquid', 'Combo with codeine'],
    doses: {
      dog: [
        { indication: 'Mild-moderate pain (alone or with codeine)', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: 'Short-term' },
      ],
      cat: [
        { indication: '⚠️ ABSOLUTELY CONTRAINDICATED IN CATS!', dose: '—', unit: 'TOXIC at any dose', route: '—', frequency: '—', duration: '⚠️ FATAL methemoglobinemia + hepatic necrosis' },
      ],
    },
    interactions: ['warfarin', 'phenytoin', 'isoniazid'],
    warnings: [
      '⚠️ CAT: ABSOLUTELY CONTRAINDICATED — even 1 tablet can be fatal',
      'Cat lacks glucuronyl transferase → toxic NAPQI accumulates',
      'Cat: methemoglobinemia, Heinz body anemia, hepatic necrosis, facial edema',
      'Antidote: N-acetylcysteine (NAC) — start ASAP',
      'Dog: relatively safe at appropriate doses',
    ],
    notes: '⚠️⚠️ CATS MUST NEVER receive paracetamol — fatal. Alternative analgesia: opioids, gabapentin, etc.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Phase 2c — Cardiac + Renal + GI (20)
     ============================================================ */

  {
    id: 'diltiazem',
    category: 'cardiac',
    name: 'Diltiazem',
    nameTh: 'ดิลไทอะเซม',
    classDrug: 'Cardiac — Calcium channel blocker (Class IV)',
    forms: ['Tablet 30/60/90/120 mg', 'XR capsule 120/180/240 mg', 'Injection'],
    doses: {
      dog: [
        { indication: 'Atrial fibrillation rate control', dose: '0.5-2', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'Long-term' },
        { indication: 'AFib acute (IV)', dose: '0.05-0.25', unit: 'mg/kg slow IV bolus, then CRI 2-6 mcg/kg/min', route: 'IV', frequency: 'Bolus + CRI', duration: 'Acute conversion' },
      ],
      cat: [
        { indication: 'HCM (rate control)', dose: '1.5-2.5', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'Long-term · less common now (ACEi/atenolol preferred)' },
        { indication: 'XR formulation', dose: '10', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['beta-blockers (additive bradycardia)', 'digoxin (increased levels)', 'cyclosporine', 'cimetidine'],
    warnings: [
      'Bradycardia · hypotension · negative inotrope',
      'Avoid in CHF (worsens contractility)',
      'Constipation possible',
      'Hepatic metabolism',
    ],
    notes: 'Cat HCM use less common · atenolol/ACEi/pimo preferred. Useful for AF rate control in dogs.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'atenolol',
    category: 'cardiac',
    name: 'Atenolol',
    nameTh: 'อะทีโนลอล',
    classDrug: 'Cardiac — Beta-1 selective blocker',
    forms: ['Tablet 25/50/100 mg'],
    doses: {
      dog: [
        { indication: 'SVT / AFib rate control', dose: '0.25-1', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
        { indication: 'Subaortic stenosis', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term · controversial' },
      ],
      cat: [
        { indication: 'HCM (with LVOTO)', dose: '6.25-12.5', unit: 'mg/cat (total dose)', route: 'PO', frequency: 'q12-24h', duration: 'Long-term · monitoring' },
        { indication: 'Hyperthyroid (pre-treatment)', dose: '6.25-12.5', unit: 'mg/cat', route: 'PO', frequency: 'q12h', duration: 'Until thyroid controlled' },
      ],
    },
    interactions: ['Ca channel blockers (additive bradycardia)', 'insulin (masks hypoglycemia)', 'NSAIDs (reduced antihypertensive)'],
    warnings: [
      '⚠️ Avoid in CHF (decompensation)',
      '⚠️ Avoid in asthma (bronchospasm — although beta-1 selective)',
      'Bradycardia · hypotension',
      'Taper to discontinue (rebound)',
      'Adjust in renal impairment',
      'Cat HCM controversial — only with LVOTO present',
    ],
    notes: 'Cat HCM: only beneficial if dynamic LVOTO present. Hyperthyroid cat for HR control while waiting for I-131.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'sotalol',
    category: 'cardiac',
    name: 'Sotalol',
    nameTh: 'โซทาลอล',
    classDrug: 'Cardiac — Beta-blocker + Class III antiarrhythmic',
    forms: ['Tablet 80/120/160 mg'],
    doses: {
      dog: [
        { indication: 'Ventricular tachycardia', dose: '1-3', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
        { indication: 'Supraventricular tachycardia', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Ventricular arrhythmia', dose: '2-4', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
    },
    interactions: ['other antiarrhythmics (additive QT/proarrhythmia)', 'Ca channel blockers', 'amiodarone'],
    warnings: [
      '⚠️ Pro-arrhythmic potential — QT prolongation, torsades',
      'ECG monitoring during initiation',
      'Avoid in CHF',
      'Renal excretion — adjust in CKD',
      'Combined beta-blocker + class III effects',
    ],
    notes: '#1 choice for canine ventricular arrhythmia (Boxer ARVC, Doberman DCM). ECG monitoring at initiation.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'amlodipine',
    category: 'cardiac',
    name: 'Amlodipine',
    nameTh: 'แอมโลดิพีน',
    classDrug: 'Cardiac — Calcium channel blocker (dihydropyridine)',
    forms: ['Tablet 2.5/5/10 mg'],
    doses: {
      dog: [
        { indication: 'Hypertension (refractory)', dose: '0.05-0.4', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Systemic hypertension (#1 choice)', dose: '0.625-1.25', unit: 'mg/cat (total)', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
        { indication: 'Hypertension severe', dose: '2.5', unit: 'mg/cat', route: 'PO', frequency: 'q24h (titrate up)', duration: 'Long-term' },
      ],
    },
    interactions: ['ACE inhibitors (additive)', 'beta-blockers', 'cyclosporine', 'simvastatin'],
    warnings: [
      'Hypotension if over-dosed',
      'Gingival hyperplasia (dog)',
      'Once-daily dosing',
      'Onset 1-2 days for full effect',
      'Monitor BP at 1-2 weeks',
    ],
    notes: '⭐ #1 choice for cat systemic hypertension (especially CKD-related). Once daily, well-tolerated.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'benazepril',
    category: 'cardiac',
    name: 'Benazepril',
    nameTh: 'เบนาเซพริล (Fortekor)',
    classDrug: 'Cardiac — ACE inhibitor',
    forms: ['Tablet 2.5/5/10/20 mg'],
    doses: {
      dog: [
        { indication: 'CHF / proteinuria', dose: '0.25-0.5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'CKD with proteinuria', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
        { indication: 'CHF / hypertension', dose: '0.25-0.5', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['NSAIDs (synergistic AKI)', 'diuretics', 'K-sparing diuretics (hyperK)', 'lithium'],
    warnings: [
      'Monitor renal + K · baseline + 1 week + monthly',
      'Hypotension',
      'Hepatic metabolism (vs enalapril renal) — preferred in mild CKD',
      'Avoid in pregnancy',
    ],
    notes: 'Hepatic metabolism — better than enalapril in renal disease. Cat CKD proteinuria first-line.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'telmisartan',
    category: 'cardiac',
    name: 'Telmisartan',
    nameTh: 'เทลมิซาร์แทน (Semintra)',
    classDrug: 'Cardiac — Angiotensin receptor blocker (ARB)',
    forms: ['Oral solution 4 mg/mL', 'Tablet (human)'],
    doses: {
      dog: [
        { indication: 'Proteinuria (CKD/PLN)', dose: '1', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'CKD proteinuria (approved)', dose: '1', unit: 'mg/kg', route: 'PO solution', frequency: 'q24h', duration: 'Long-term' },
        { indication: 'Hypertension (cat-approved)', dose: '2', unit: 'mg/kg (1st month) then 1 mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['NSAIDs', 'diuretics', 'K-sparing diuretics (hyperK)', 'lithium'],
    warnings: [
      'Better tolerated than ACE inhibitors',
      'Less cough, less azotemia than ACEi',
      'Monitor renal + K + BP',
      'Avoid in pregnancy',
      'Liquid formulation excellent for cats',
    ],
    notes: '⭐ Cat-approved for CKD proteinuria + hypertension. Liquid formulation easy to dose. Better tolerated than ACEi.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'hydralazine',
    category: 'cardiac',
    name: 'Hydralazine',
    nameTh: 'ไฮดราลาซีน',
    classDrug: 'Cardiac — Direct arteriolar vasodilator',
    forms: ['Tablet 10/25/50 mg', 'Injection 20 mg/mL'],
    doses: {
      dog: [
        { indication: 'Severe CHF (refractory)', dose: '0.5-3', unit: 'mg/kg', route: 'PO', frequency: 'q12h (titrate)', duration: 'Long-term · with diuretic + ACEi' },
        { indication: 'Hypertensive emergency', dose: '0.1-0.2', unit: 'mg/kg', route: 'IV', frequency: 'q2-4h', duration: 'Acute' },
      ],
      cat: [
        { indication: 'Severe CHF refractory', dose: '2.5', unit: 'mg/cat', route: 'PO', frequency: 'q12h', duration: 'Long-term · uncommon' },
      ],
    },
    interactions: ['diuretics (additive hypotension)', 'beta-blockers', 'NSAIDs'],
    warnings: [
      'Reflex tachycardia · combine with beta-blocker if needed',
      'Hypotension',
      'Hepatic metabolism',
      'Mostly used in refractory CHF (rare)',
      'Lupus-like syndrome reported (humans)',
    ],
    notes: 'Reserve for refractory CHF afterload reduction. Add when ACEi+pimobendan inadequate.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'digoxin',
    category: 'cardiac',
    name: 'Digoxin',
    nameTh: 'ดิจอกซิน',
    classDrug: 'Cardiac — Cardiac glycoside (positive inotrope, AV blocker)',
    forms: ['Tablet 0.125/0.25 mg', 'Elixir 0.05 mg/mL'],
    doses: {
      dog: [
        { indication: 'AFib rate control (with diltiazem/atenolol)', dose: '0.005', unit: 'mg/kg or 0.22 mg/m²', route: 'PO', frequency: 'q12h', duration: 'Long-term · narrow therapeutic window' },
      ],
      cat: [
        { indication: 'Rare use', dose: '0.0078-0.0156', unit: 'mg/cat (1/4 to 1/2 of 0.125 mg tab)', route: 'PO', frequency: 'q24-48h', duration: 'Avoid if possible' },
      ],
    },
    interactions: ['quinidine', 'diltiazem (increased levels)', 'erythromycin', 'amiodarone', 'spironolactone', 'furosemide (hypoK potentiates toxicity)'],
    warnings: [
      '⚠️ Narrow therapeutic window · serum digoxin level monitoring',
      '⚠️ Toxicity: vomiting, anorexia, arrhythmias (any!), neuro signs',
      'HypoK potentiates toxicity — keep K normal',
      'Renal excretion — adjust in CKD',
      'Therapeutic level: 0.5-2.0 ng/mL (pre-dose, 8 hr post)',
      'Largely replaced by pimobendan',
    ],
    notes: 'Largely replaced by pimobendan. Reserved for AF rate control combined therapy. Monitor levels.',
    source: "Plumb's 10th Ed.",
  },

  /* Diuretics */

  {
    id: 'torsemide',
    category: 'diuretic',
    name: 'Torsemide',
    nameTh: 'ทอร์ซีไมด์',
    classDrug: 'Diuretic — Loop (potent, long-acting)',
    forms: ['Tablet 5/10/20/100 mg'],
    doses: {
      dog: [
        { indication: 'CHF refractory to furosemide', dose: '0.1-0.6', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
        { indication: 'Conversion from furosemide', dose: '1/10 to 1/20', unit: 'of furosemide dose', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'CHF refractory', dose: '0.1-0.3', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
      ],
    },
    interactions: ['ACE inhibitors', 'NSAIDs (reduced efficacy)', 'aminoglycosides', 'digoxin'],
    warnings: [
      'More potent + longer-acting than furosemide',
      'Hypokalemia, dehydration, AKI',
      'Monitor K, renal function',
      'Useful when furosemide loses efficacy',
    ],
    notes: 'Step-up from furosemide for refractory CHF. ~10× more potent. Monitor electrolytes closely.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'mannitol',
    category: 'diuretic',
    name: 'Mannitol',
    nameTh: 'แมนนิทอล',
    classDrug: 'Diuretic — Osmotic',
    forms: ['Injection 25% (250 mg/mL)'],
    doses: {
      dog: [
        { indication: 'Increased ICP / cerebral edema', dose: '0.5-1', unit: 'g/kg over 15-20 min', route: 'IV slow', frequency: 'q4-6h', duration: 'As needed' },
        { indication: 'Acute glaucoma', dose: '1-2', unit: 'g/kg', route: 'IV', frequency: 'Once', duration: 'Short-term' },
        { indication: 'Acute oliguric AKI (controversial)', dose: '0.25-0.5', unit: 'g/kg', route: 'IV', frequency: 'Once', duration: 'Trial' },
      ],
      cat: [
        { indication: 'Increased ICP', dose: '0.5-1', unit: 'g/kg', route: 'IV slow', frequency: 'q4-6h', duration: 'As needed' },
      ],
    },
    interactions: ['nephrotoxic drugs', 'cardiac glycosides'],
    warnings: [
      '⚠️ Avoid in volume overload / CHF / pulmonary edema',
      '⚠️ Crystals in solution — use filter, warm to dissolve',
      'Anuric patient: do NOT use (volume overload)',
      'Can cause initial volume expansion',
      'Monitor urine output, electrolytes',
    ],
    notes: 'Standard for raised ICP (head trauma, brain swelling). Filter mandatory. Avoid in CHF/anuria.',
    source: "Plumb's 10th Ed.",
  },

  /* GI - Antiemetics */

  {
    id: 'metoclopramide',
    category: 'gi',
    name: 'Metoclopramide',
    nameTh: 'เมโทโคลพราไมด์',
    classDrug: 'GI — Prokinetic / Central antiemetic (D2 antagonist)',
    forms: ['Tablet 10 mg', 'Syrup 5 mg/5mL', 'Injection 5 mg/mL'],
    doses: {
      dog: [
        { indication: 'Vomiting / GERD', dose: '0.2-0.5', unit: 'mg/kg', route: 'PO/SC/IV', frequency: 'q6-8h', duration: 'Short-term' },
        { indication: 'CRI for severe vomiting', dose: '1-2', unit: 'mg/kg/24hr', route: 'IV CRI', frequency: 'Continuous', duration: 'During hospitalization' },
      ],
      cat: [
        { indication: 'Vomiting (less effective than maropitant)', dose: '0.2-0.5', unit: 'mg/kg', route: 'PO/SC', frequency: 'q6-8h', duration: 'Short-term' },
      ],
    },
    interactions: ['CNS depressants', 'anticholinergics (antagonism)', 'phenothiazines', 'cyclosporine'],
    warnings: [
      '⚠️ Extrapyramidal signs (restless, hyperexcitability, dystonia) at high doses',
      'CNS effects more in cats',
      'Avoid in GI obstruction (prokinetic + ↑ pressure)',
      'Avoid in seizure-prone',
      'CRI more effective than bolus',
      'Maropitant generally preferred',
    ],
    notes: 'Older antiemetic. Maropitant superior for vomiting. Useful for GERD prokinetic effect.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'ondansetron',
    category: 'gi',
    name: 'Ondansetron',
    nameTh: 'ออนแดนเซตรอน (Zofran)',
    classDrug: 'GI — Antiemetic (5-HT3 antagonist)',
    forms: ['Tablet 4/8 mg', 'ODT', 'Injection 2 mg/mL'],
    doses: {
      dog: [
        { indication: 'Severe vomiting (chemo, parvo)', dose: '0.5-1', unit: 'mg/kg', route: 'PO/IV/SC', frequency: 'q8-12h', duration: 'Short-term' },
      ],
      cat: [
        { indication: 'Refractory vomiting / chemo', dose: '0.1-1', unit: 'mg/kg', route: 'PO/IV/SC', frequency: 'q8-12h', duration: 'Short-term' },
      ],
    },
    interactions: ['tramadol (reduced tramadol efficacy)', 'serotonergic drugs (theoretical SS)', 'apomorphine'],
    warnings: [
      'Generally well-tolerated',
      'Constipation possible',
      'Hepatic metabolism',
      'QT prolongation rare',
    ],
    notes: 'Excellent for chemotherapy-induced + refractory vomiting. Combine with maropitant for severe cases.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'cisapride',
    category: 'gi',
    name: 'Cisapride',
    nameTh: 'ซิสาไพรด์',
    classDrug: 'GI — Prokinetic (5-HT4 agonist)',
    forms: ['Compounded only (withdrawn human market)'],
    doses: {
      dog: [
        { indication: 'GI motility disorders', dose: '0.1-0.5', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Megacolon / constipation', dose: '0.1-1', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h before food', duration: 'Long-term' },
      ],
    },
    interactions: ['azole antifungals (QT)', 'macrolides (QT)', 'cimetidine', 'grapefruit'],
    warnings: [
      '⚠️ QT prolongation reported (less in pets than humans)',
      'Compounded — quality variable',
      'Avoid with QT-prolonging drugs',
      'Best given before food',
    ],
    notes: '⭐ #1 prokinetic for cat megacolon. Compounded · quality control important. Withdrawn human market.',
    source: "Plumb's 10th Ed.",
  },

  /* GI - other */

  {
    id: 'famotidine',
    category: 'gi',
    name: 'Famotidine',
    nameTh: 'ฟาโมทิดีน (Pepcid)',
    classDrug: 'GI — H2 receptor antagonist',
    forms: ['Tablet 10/20/40 mg', 'Injection'],
    doses: {
      dog: [
        { indication: 'Gastric ulcer / hyperacidity', dose: '0.5-1', unit: 'mg/kg', route: 'PO/SC/IV', frequency: 'q12-24h', duration: '7-14 days' },
      ],
      cat: [
        { indication: 'Gastric ulcer / CKD-related', dose: '0.5-1', unit: 'mg/kg', route: 'PO/SC/IV', frequency: 'q12-24h', duration: 'As needed' },
      ],
    },
    interactions: ['ketoconazole, itraconazole (reduced absorption)', 'cefpodoxime (reduced absorption)', 'iron'],
    warnings: [
      'Less effective than PPI (omeprazole)',
      'Tachyphylaxis after ~14 days',
      'Renal excretion — adjust in CKD',
      'Generally well-tolerated',
    ],
    notes: 'Less effective than PPI · use omeprazole if available. OK for short-term · CKD prophylaxis.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'pantoprazole',
    category: 'gi',
    name: 'Pantoprazole',
    nameTh: 'แพนโทพราโซล',
    classDrug: 'GI — Proton pump inhibitor (IV/PO)',
    forms: ['Tablet 20/40 mg', 'Injection 40 mg vial'],
    doses: {
      dog: [
        { indication: 'GI ulcer (IV when oral not possible)', dose: '1', unit: 'mg/kg', route: 'IV slow', frequency: 'q24h', duration: 'Until oral OK' },
      ],
      cat: [
        { indication: 'GI ulcer (IV)', dose: '1', unit: 'mg/kg', route: 'IV', frequency: 'q24h', duration: 'Until oral OK' },
      ],
    },
    interactions: ['clopidogrel (less than omeprazole)', 'sucralfate', 'iron'],
    warnings: [
      'IV form valuable for hospitalized patient',
      'Less drug interactions than omeprazole',
      'Long-term use → B12 deficiency, hypomagnesemia',
    ],
    notes: 'IV PPI of choice for hospitalized patients (NPO). Fewer drug interactions than omeprazole.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'lactulose',
    category: 'gi',
    name: 'Lactulose',
    nameTh: 'แลคทูโลส',
    classDrug: 'GI — Osmotic laxative / Hepatic encephalopathy',
    forms: ['Syrup 10 g/15 mL (~667 mg/mL)'],
    doses: {
      dog: [
        { indication: 'Hepatic encephalopathy', dose: '0.5-1', unit: 'mL/kg', route: 'PO', frequency: 'q8h (titrate to 2-3 soft stools/day)', duration: 'Long-term' },
        { indication: 'Constipation', dose: '0.5-1', unit: 'mL/kg', route: 'PO', frequency: 'q8-12h', duration: 'PRN' },
        { indication: 'HE acute (per rectum)', dose: '20-30', unit: 'mL/kg diluted 1:3 with warm water', route: 'Rectal enema', frequency: 'q4-6h', duration: 'Acute crisis' },
      ],
      cat: [
        { indication: 'Constipation / megacolon', dose: '0.5', unit: 'mL/kg', route: 'PO', frequency: 'q8-12h', duration: 'Long-term' },
        { indication: 'Hepatic encephalopathy', dose: '0.5', unit: 'mL/kg', route: 'PO', frequency: 'q8h', duration: 'Long-term' },
      ],
    },
    interactions: ['oral antibiotics (synergy in HE)', 'antacids (reduce efficacy)'],
    warnings: [
      'Diarrhea if over-dosed (titrate to soft stool)',
      'Dehydration possible',
      'Sweet taste · cats may refuse',
      'Goal: 2-3 soft stools per day',
    ],
    notes: '⭐ HE management dual benefit: laxative + reduces ammonia (acid trapping). Titrate dose to stool consistency.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'cholestyramine',
    category: 'gi',
    name: 'Cholestyramine',
    nameTh: 'โคเลสไทรามีน',
    classDrug: 'GI — Bile acid sequestrant',
    forms: ['Powder for suspension'],
    doses: {
      dog: [
        { indication: 'Bile acid diarrhea', dose: '0.3-1', unit: 'g/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Cholestasis-related diarrhea', dose: '0.3', unit: 'g/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
    },
    interactions: ['MOST oral drugs (binds!) — separate by 2 hr', 'fat-soluble vitamins', 'levothyroxine', 'digoxin', 'warfarin'],
    warnings: [
      'Constipation common',
      'Fat-soluble vitamin malabsorption',
      'Give other oral drugs 2 hr apart',
      'Bad taste',
    ],
    notes: 'Useful for chronic bile acid diarrhea. Major drug interaction risk — separate ALL oral drugs by 2 hours.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'sam-e',
    category: 'gi',
    name: 'S-Adenosylmethionine (SAMe)',
    nameTh: 'SAMe (Denamarin)',
    classDrug: 'Hepatoprotectant / Antioxidant',
    forms: ['Tablet 90/225/425 mg (often combined with silybin)'],
    doses: {
      dog: [
        { indication: 'Hepatic disease / hepatoprotection', dose: '20', unit: 'mg/kg', route: 'PO empty stomach!', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Hepatic lipidosis / cholangitis support', dose: '20', unit: 'mg/kg', route: 'PO empty stomach!', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['MAO inhibitors (theoretical SS)', 'serotonergic drugs (caution)'],
    warnings: [
      'GIVE ON EMPTY STOMACH (food reduces absorption 50%)',
      'Acid-stable enteric coating critical',
      'Generally well-tolerated',
      'GI upset rare',
    ],
    notes: '⭐ Standard hepatoprotectant. Empty stomach essential. Often combined with silybin (milk thistle).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'ursodiol',
    category: 'gi',
    name: 'Ursodiol (Ursodeoxycholic acid)',
    nameTh: 'เออร์โซดิออล',
    classDrug: 'GI — Bile acid (hydrophilic)',
    forms: ['Capsule 250/300 mg', 'Tablet 250 mg'],
    doses: {
      dog: [
        { indication: 'Cholestasis / chronic hepatitis', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
        { indication: 'GB sludge / mucocele early', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Cholangitis / cholestasis', dose: '10-15', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['cholestyramine (binds)', 'aluminum antacids', 'oral contraceptives'],
    warnings: [
      'Avoid in complete biliary obstruction (use with caution)',
      'Diarrhea possible',
      'Generally well-tolerated',
      'Best given with food',
    ],
    notes: 'Replaces toxic bile acids with hydrophilic UDCA. Standard for chronic hepatitis, cholangitis, early mucocele.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'metronidazole-benzoate',
    category: 'antibiotic',
    name: 'Metronidazole Benzoate',
    nameTh: 'เมโทรนิดาโซล เบนโซเอต (Cat formulation)',
    classDrug: 'Antibiotic / Antiprotozoal — Cat compounded',
    forms: ['Compounded suspension (less bitter than HCl)'],
    doses: {
      cat: [
        { indication: 'Cat IBD / Giardia (palatable form)', dose: '7.5-15', unit: 'mg/kg (of base)', route: 'PO', frequency: 'q12-24h', duration: '5-14 days' },
      ],
      dog: [
        { indication: 'See standard metronidazole entry', dose: '—', unit: 'Use HCl form', route: '—', frequency: '—', duration: '—' },
      ],
    },
    interactions: ['warfarin', 'cyclosporine', 'phenobarbital', 'cimetidine', 'alcohol'],
    warnings: [
      'Same warnings as metronidazole HCl',
      'Less bitter — better cat compliance',
      'Compounded — quality control important',
      'Same neurotoxicity warnings apply',
    ],
    notes: 'Cat-friendly version of metronidazole. Better palatability. Compound from compounding pharmacy.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Phase 2d — Endocrine + Repro + Hematology (20)
     ============================================================ */

  /* Endocrine — Adrenal */

  {
    id: 'trilostane',
    category: 'endocrine',
    name: 'Trilostane',
    nameTh: 'ไตรโลสเทน (Vetoryl)',
    classDrug: 'Endocrine — Adrenal cortisol synthesis inhibitor',
    forms: ['Capsule 5/10/30/60/120 mg'],
    doses: {
      dog: [
        { indication: 'Hyperadrenocorticism (Cushings)', dose: '1-3', unit: 'mg/kg', route: 'PO with food', frequency: 'q12-24h (BID often better)', duration: 'Long-term · ACTH stim recheck 10-14 days, 30 days, then q3 mo' },
      ],
      cat: [
        { indication: 'Cushings (rare)', dose: '5-10', unit: 'mg/cat', route: 'PO', frequency: 'q12h', duration: 'Long-term · monitoring' },
      ],
    },
    interactions: ['ACE inhibitors (caution)', 'K-sparing diuretics (hyperK)', 'mitotane'],
    warnings: [
      '⚠️ Iatrogenic Addisons (severe) — collapse, vomiting, weakness',
      '⚠️ Stop drug if signs · ACTH stim emergency',
      'Give WITH food (improves absorption)',
      'ACTH stim 4-6 hr post-pill (peak)',
      'Rare hepatotoxicity',
      'Pre-treatment: confirm Cushings diagnosis!',
    ],
    notes: '⭐ #1 medical Rx for Cushings. BID dosing often better than SID. ACTH stim monitoring essential.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'mitotane',
    category: 'endocrine',
    name: 'Mitotane (o,p\'-DDD)',
    nameTh: 'ไมโทเทน (Lysodren)',
    classDrug: 'Endocrine — Adrenocorticolytic',
    forms: ['Tablet 500 mg'],
    doses: {
      dog: [
        { indication: 'Cushings induction', dose: '25-50', unit: 'mg/kg', route: 'PO with fatty meal', frequency: 'q24h', duration: '7-14 days induction · ACTH stim daily monitoring' },
        { indication: 'Cushings maintenance', dose: '25-50', unit: 'mg/kg', route: 'PO with fat', frequency: '2-3× weekly', duration: 'Long-term · ACTH stim q1-3 mo' },
      ],
      cat: [
        { indication: 'NOT recommended', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Use trilostane' },
      ],
    },
    interactions: ['CNS depressants', 'phenobarbital', 'spironolactone'],
    warnings: [
      '⚠️ Iatrogenic Addisons (more permanent than trilostane)',
      'Owner gloves when handling (cytotoxic)',
      'Anorexia, vomiting, weakness during induction = endpoint',
      'Daily ACTH stim during induction',
      'Largely replaced by trilostane',
      'Hepatotoxicity',
    ],
    notes: 'Older Cushings Rx. Causes adrenal cortex destruction. Trilostane preferred. Gloves for owner.',
    source: "Plumb's 10th Ed.",
  },

  /* Endocrine — Thyroid */

  {
    id: 'methimazole',
    category: 'endocrine',
    name: 'Methimazole',
    nameTh: 'เมไทมาโซล (Felimazole)',
    classDrug: 'Endocrine — Anti-thyroid',
    forms: ['Tablet 2.5/5/10 mg', 'Transdermal compound', 'Felimazole (cat-approved 1.25/2.5/5 mg)'],
    doses: {
      dog: [
        { indication: 'Hyperthyroid (rare)', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Hyperthyroidism', dose: '1.25-5', unit: 'mg/cat (start low)', route: 'PO or transdermal ear', frequency: 'q12h initially', duration: 'Long-term · titrate to T4' },
      ],
    },
    interactions: ['warfarin (additive bleeding)', 'beta-blockers', 'digoxin'],
    warnings: [
      '⚠️ Idiosyncratic facial pruritus (5-10% cats) → discontinue',
      '⚠️ Hepatopathy (1-2%) — monitor LFTs',
      '⚠️ Bone marrow suppression (rare but serious)',
      'CBC + chemistry baseline + 2-4 weeks · q3-6 mo long-term',
      'T4 recheck 2-4 weeks',
      'Transdermal pinna useful in fractious cats (less efficacy)',
      'Wear gloves when handling',
    ],
    notes: '⭐ First-line cat hyperthyroidism. Start LOW (1.25-2.5 mg BID), titrate. Transdermal useful for fractious cats.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'carbimazole',
    category: 'endocrine',
    name: 'Carbimazole',
    nameTh: 'คาร์บิมาโซล (Vidalta)',
    classDrug: 'Endocrine — Anti-thyroid (prodrug of methimazole)',
    forms: ['Tablet 10/15 mg controlled-release'],
    doses: {
      cat: [
        { indication: 'Hyperthyroidism (controlled-release)', dose: '10-15', unit: 'mg/cat', route: 'PO', frequency: 'q24h (once daily!)', duration: 'Long-term' },
      ],
      dog: [
        { indication: 'Limited use', dose: '—', unit: '—', route: '—', frequency: '—', duration: '—' },
      ],
    },
    interactions: ['warfarin', 'beta-blockers', 'digoxin'],
    warnings: [
      'Same warnings as methimazole (becomes methimazole in body)',
      '⭐ Once-daily dosing advantage · improves compliance',
      'Hepatopathy, BM suppression, facial pruritus possible',
      'T4 recheck 3-4 weeks',
    ],
    notes: '⭐ Cat hyperthyroid · ONCE DAILY · better compliance than methimazole BID. Same monitoring.',
    source: "Plumb's 10th Ed.",
  },

  /* Endocrine — Insulins (additional) */

  {
    id: 'nph-insulin',
    category: 'endocrine',
    name: 'NPH Insulin (Humulin N)',
    nameTh: 'อินซูลิน NPH',
    classDrug: 'Endocrine — Intermediate-acting insulin',
    forms: ['Injection 100 IU/mL'],
    doses: {
      dog: [
        { indication: 'Diabetes mellitus', dose: '0.25-0.5', unit: 'IU/kg', route: 'SC', frequency: 'q12h', duration: 'Lifelong · titrate by glucose curve' },
      ],
      cat: [
        { indication: 'Diabetes (less preferred)', dose: '0.25-0.5', unit: 'IU/kg', route: 'SC', frequency: 'q12h', duration: 'Glargine/PZI generally preferred' },
      ],
    },
    interactions: ['glucocorticoids (insulin resistance)', 'progesterone', 'beta-blockers (mask hypo)', 'thyroid hormones'],
    warnings: [
      'Hypoglycemia main risk',
      'Owner training essential',
      'Refrigerate · gentle mixing (cloudy)',
      'Diet consistency important',
      'Generally OK for dogs but glargine preferred for cats',
    ],
    notes: 'OK for canine DM · cat use less preferred than glargine/PZI. Standard intermediate insulin.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'pzi-insulin',
    category: 'endocrine',
    name: 'PZI Insulin (Prozinc)',
    nameTh: 'อินซูลิน PZI',
    classDrug: 'Endocrine — Long-acting insulin (cat-approved)',
    forms: ['Injection 40 IU/mL (Prozinc cat)'],
    doses: {
      cat: [
        { indication: 'Diabetes mellitus (cat-approved)', dose: '0.2-0.5', unit: 'IU/kg or 1-3 IU/cat', route: 'SC', frequency: 'q12h', duration: 'Lifelong · monitor curve' },
      ],
      dog: [
        { indication: 'Less common', dose: '0.5-1', unit: 'IU/kg', route: 'SC', frequency: 'q12h', duration: 'Less popular than NPH/Vetsulin' },
      ],
    },
    interactions: ['glucocorticoids', 'progesterone', 'beta-blockers'],
    warnings: [
      'Cat-approved formulation (40 IU/mL · use 40-unit syringes!)',
      'Hypoglycemia risk',
      '12-hr duration · q12h dosing',
      'Glucose curve at 1 week, then q4-6 weeks',
    ],
    notes: '⭐ Cat-approved DM insulin. Use 40 IU/mL syringes (NOT 100). Glargine alternative for cats too.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'vetsulin',
    category: 'endocrine',
    name: 'Vetsulin (Porcine lente)',
    nameTh: 'เวตซูลิน',
    classDrug: 'Endocrine — Intermediate-acting insulin (porcine)',
    forms: ['Injection 40 IU/mL'],
    doses: {
      dog: [
        { indication: 'Canine DM (FDA-approved)', dose: '0.5', unit: 'IU/kg', route: 'SC', frequency: 'q12h', duration: 'Lifelong · titrate' },
      ],
      cat: [
        { indication: 'Cat DM', dose: '0.25-0.5', unit: 'IU/kg or 1-2 IU/cat', route: 'SC', frequency: 'q12h', duration: 'Lifelong · less preferred than glargine/PZI' },
      ],
    },
    interactions: ['steroids', 'beta-blockers', 'progesterone'],
    warnings: [
      '40 IU/mL formulation (use 40-unit syringes!)',
      'Hypoglycemia risk',
      'Shake gently, never frozen',
      'Mix gently before each dose',
    ],
    notes: 'FDA-approved for dog + cat DM. 40 IU/mL · use correct syringes. First-line dog DM.',
    source: "Plumb's 10th Ed.",
  },

  /* Endocrine — Other */

  {
    id: 'desmopressin',
    category: 'endocrine',
    name: 'Desmopressin (DDAVP)',
    nameTh: 'เดสโมเพรสซิน',
    classDrug: 'Endocrine — Synthetic ADH (vasopressin analog)',
    forms: ['Nasal spray 100 mcg/mL', 'Tablet', 'Injection 4 mcg/mL'],
    doses: {
      dog: [
        { indication: 'Central diabetes insipidus', dose: '1-4', unit: 'drops in conjunctival sac', route: 'Conjunctival/intranasal', frequency: 'q12-24h', duration: 'Long-term' },
        { indication: 'von Willebrand disease (pre-surgery)', dose: '1', unit: 'mcg/kg', route: 'SC/IV slowly', frequency: '30 min before procedure', duration: 'Single dose · effect 4 hr' },
      ],
      cat: [
        { indication: 'Central DI (rare)', dose: '1-2', unit: 'drops conjunctival', route: 'Conjunctival', frequency: 'q12h', duration: 'Long-term' },
      ],
    },
    interactions: ['lithium', 'NSAIDs', 'TCAs (water retention)'],
    warnings: [
      'Water intoxication (hyponatremia) at high doses',
      'Monitor electrolytes',
      'Conjunctival drops well-absorbed',
      'vWD: tachyphylaxis after 1 dose · use only once per surgery',
    ],
    notes: 'Two main uses: central DI (long-term) + vWD pre-surgical (single dose). Conjunctival drops practical.',
    source: "Plumb's 10th Ed.",
  },

  /* Reproductive */

  {
    id: 'oxytocin',
    category: 'reproductive',
    name: 'Oxytocin',
    nameTh: 'อ็อกซิโทซิน',
    classDrug: 'Reproductive — Posterior pituitary hormone',
    forms: ['Injection 10/20 IU/mL'],
    doses: {
      dog: [
        { indication: 'Dystocia (uterine inertia)', dose: '0.5-2', unit: 'IU/dog (NOT mg/kg)', route: 'IM/IV', frequency: 'q30 min × 3 max', duration: 'Acute · obstetric' },
        { indication: 'Postpartum metritis / milk letdown', dose: '5-20', unit: 'IU/dog total', route: 'IM/SC', frequency: 'q1-2h', duration: 'Until effect' },
      ],
      cat: [
        { indication: 'Dystocia', dose: '0.5-3', unit: 'IU/cat', route: 'IM', frequency: 'q30 min × 3', duration: 'Acute' },
      ],
    },
    interactions: ['epinephrine (antagonism)', 'inhalational anesthetics'],
    warnings: [
      '⚠️ Confirm NO obstruction before use (rupture risk!)',
      '⚠️ Confirm cervix open',
      'Calcium gluconate often needed for effective contractions',
      'Limit to 3 doses · if no progress → C-section',
      'Avoid in primary uterine inertia without ca/glucose support',
    ],
    notes: '⚠️ Obstructive dystocia = NO oxytocin = surgical emergency. Always assess before giving.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'aglepristone',
    category: 'reproductive',
    name: 'Aglepristone',
    nameTh: 'อะเกลพริสโตน (Alizin)',
    classDrug: 'Reproductive — Progesterone receptor antagonist',
    forms: ['Injection 30 mg/mL'],
    doses: {
      dog: [
        { indication: 'Pregnancy termination (mismating)', dose: '10', unit: 'mg/kg', route: 'SC', frequency: '2 doses · 24 hr apart', duration: 'Up to 45 days gestation' },
        { indication: 'Pyometra (medical Rx alternative)', dose: '10', unit: 'mg/kg', route: 'SC', frequency: 'Day 1, 2, 8 (some protocols add day 14)', duration: 'Variable · spay still preferred' },
      ],
      cat: [
        { indication: 'Pregnancy termination', dose: '10', unit: 'mg/kg', route: 'SC', frequency: '2 doses 24 hr apart', duration: 'Up to day 45' },
      ],
    },
    interactions: ['cyclosporine (theoretical)', 'ketoconazole'],
    warnings: [
      'May cause vulvar discharge, transient anorexia',
      'Pyometra: spay still gold standard (recurrence risk)',
      'Confirm pregnancy before mismating use',
      'Owner counseling essential',
    ],
    notes: 'Useful for unwanted pregnancy + medical pyometra Rx in valuable breeders. Spay = better long-term.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'cabergoline',
    category: 'reproductive',
    name: 'Cabergoline',
    nameTh: 'คาเบอร์โกลีน',
    classDrug: 'Reproductive — Dopamine agonist (anti-prolactin)',
    forms: ['Tablet 0.5 mg'],
    doses: {
      dog: [
        { indication: 'Pseudopregnancy', dose: '5', unit: 'mcg/kg', route: 'PO', frequency: 'q24h', duration: '5-7 days' },
        { indication: 'Pregnancy termination (mid-late)', dose: '5', unit: 'mcg/kg', route: 'PO', frequency: 'q24h × 5-10 days', duration: 'After day 30 of pregnancy' },
        { indication: 'Estrus induction (anestrus)', dose: '5', unit: 'mcg/kg', route: 'PO', frequency: 'q24h until proestrus signs', duration: 'Variable' },
      ],
      cat: [
        { indication: 'Pyometra adjunct (with antibiotic)', dose: '5', unit: 'mcg/kg', route: 'PO', frequency: 'q24h × 5-7 days', duration: 'Open pyometra cats only' },
      ],
    },
    interactions: ['metoclopramide (antagonism)', 'phenothiazines (antagonism)', 'antihypertensives'],
    warnings: [
      'Vomiting common (give with food)',
      'Hypotension',
      'No specific contraindications',
      'Better tolerated than bromocriptine',
    ],
    notes: 'Dopamine agonist suppresses prolactin. Useful for pseudopregnancy, mid-late pregnancy termination.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'finasteride',
    category: 'reproductive',
    name: 'Finasteride',
    nameTh: 'ไฟนาสเทอไรด์',
    classDrug: 'Reproductive — 5-alpha reductase inhibitor',
    forms: ['Tablet 1/5 mg'],
    doses: {
      dog: [
        { indication: 'BPH (alternative to neuter)', dose: '0.1-0.5', unit: 'mg/kg or 1 mg/dog small, 5 mg/dog large', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      '⚠️ Pregnant women must NOT handle crushed tablets (teratogenic)',
      'Onset 4-8 weeks',
      'Effect reversible if stopped',
      'Castration still preferred long-term',
    ],
    notes: 'Alternative to surgical neuter for BPH in valuable breeding/working dogs. Owner safety critical.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'estriol',
    category: 'reproductive',
    name: 'Estriol',
    nameTh: 'เอสไตรออล (Incurin)',
    classDrug: 'Reproductive — Estrogen (urinary incontinence)',
    forms: ['Tablet 1 mg'],
    doses: {
      dog: [
        { indication: 'Urinary sphincter incompetence (USMI) — spayed female', dose: '0.5-2', unit: 'mg/dog (titrate)', route: 'PO', frequency: 'q24h initially, then taper to lowest effective', duration: 'Long-term · taper after stable' },
      ],
    },
    interactions: ['minimal at low doses'],
    warnings: [
      'Very low dose · safer than DES',
      'Vulvar swelling, vaginal discharge possible',
      'Avoid in intact females',
      'Bone marrow suppression at high doses (very rare)',
      'Often combined with PPA if monotherapy inadequate',
    ],
    notes: '⭐ Safer estrogen for canine USMI than DES. Combine with PPA if needed. Dog only.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'phenylpropanolamine',
    category: 'reproductive',
    name: 'Phenylpropanolamine (PPA)',
    nameTh: 'ฟีนิลโปรปาโนลามีน (Proin)',
    classDrug: 'Reproductive/Urinary — Alpha agonist',
    forms: ['Chewable tablet 25/50/75 mg', 'ER tablet'],
    doses: {
      dog: [
        { indication: 'USMI (urinary sphincter incompetence)', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h (or ER once daily)', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Limited use', dose: '1.5', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Cautious use' },
      ],
    },
    interactions: ['MAO inhibitors', 'TCAs', 'sympathomimetics (additive)', 'beta-blockers'],
    warnings: [
      'Hypertension (especially in cats, brachycephalic)',
      'Restlessness, anorexia',
      'Avoid in cardiac disease, hypertension, hyperthyroid',
      'Can combine with estriol',
    ],
    notes: '⭐ #1 medical Rx for USMI in spayed female dogs. Monitor BP. ER formulation improves compliance.',
    source: "Plumb's 10th Ed.",
  },

  /* Hematology / Coagulation */

  {
    id: 'heparin',
    category: 'hematology',
    name: 'Heparin (Unfractionated)',
    nameTh: 'เฮพาริน',
    classDrug: 'Anticoagulant — Indirect thrombin inhibitor',
    forms: ['Injection 1000-10000 IU/mL'],
    doses: {
      dog: [
        { indication: 'DIC / thrombosis (treatment)', dose: '100-300', unit: 'IU/kg', route: 'SC', frequency: 'q6-8h', duration: 'Acute · titrate by aPTT (1.5-2× baseline)' },
        { indication: 'Prophylaxis (lower dose)', dose: '50-150', unit: 'IU/kg', route: 'SC', frequency: 'q8h', duration: 'Until risk resolved' },
      ],
      cat: [
        { indication: 'Aortic thromboembolism (ATE)', dose: '200-300', unit: 'IU/kg', route: 'SC', frequency: 'q6-8h', duration: 'Acute · transitions to LMWH or clopidogrel' },
      ],
    },
    interactions: ['NSAIDs (bleeding)', 'aspirin', 'warfarin', 'corticosteroids'],
    warnings: [
      '⚠️ Bleeding · monitor aPTT (1.5-2× baseline)',
      'Heparin-induced thrombocytopenia (HIT, rare)',
      'Reversal: protamine sulfate (1 mg neutralizes ~100 IU)',
      'IV preferred for emergency',
      'LMWH increasingly preferred (more predictable)',
    ],
    notes: 'Acute thrombosis Rx. aPTT monitoring essential. LMWH (enoxaparin) increasingly preferred.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'enoxaparin',
    category: 'hematology',
    name: 'Enoxaparin (LMWH)',
    nameTh: 'อีน็อกซาพาริน (Lovenox)',
    classDrug: 'Anticoagulant — Low molecular weight heparin',
    forms: ['Injection 30/40/60/80/100 mg pre-filled syringe'],
    doses: {
      dog: [
        { indication: 'Thromboembolism prophylaxis', dose: '0.8', unit: 'mg/kg', route: 'SC', frequency: 'q6h', duration: 'Until risk resolved' },
      ],
      cat: [
        { indication: 'ATE prophylaxis (post-CHF)', dose: '1', unit: 'mg/kg', route: 'SC', frequency: 'q12h', duration: 'Long-term · with clopidogrel' },
      ],
    },
    interactions: ['NSAIDs', 'aspirin', 'corticosteroids'],
    warnings: [
      'Bleeding (less than UFH)',
      'No aPTT monitoring needed (anti-Xa if available)',
      'Reversal partial with protamine (60%)',
      'More predictable than UFH',
      'More expensive',
    ],
    notes: 'More predictable than UFH. No routine monitoring. Cat ATE: combine with clopidogrel for prevention.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'clopidogrel',
    category: 'hematology',
    name: 'Clopidogrel',
    nameTh: 'โคลพิโดเกรล (Plavix)',
    classDrug: 'Antiplatelet — P2Y12 inhibitor',
    forms: ['Tablet 75 mg'],
    doses: {
      dog: [
        { indication: 'Antiplatelet (post-stroke, IMHA)', dose: '1-3', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'ATE prevention (HCM, prior ATE)', dose: '18.75', unit: 'mg/cat (1/4 of 75 mg tab)', route: 'PO', frequency: 'q24h', duration: 'Long-term · FATCAT trial evidence' },
      ],
    },
    interactions: ['omeprazole (reduced efficacy)', 'NSAIDs (bleeding)', 'aspirin (additive)', 'PPIs in general'],
    warnings: [
      'Bleeding risk (less than warfarin)',
      'Bitter taste',
      'Cat: 18.75 mg = 1/4 of 75 mg tablet',
      '⭐ Cat ATE: superior to aspirin (FATCAT trial)',
      'Avoid omeprazole (use famotidine if needed)',
    ],
    notes: '⭐ Cat ATE prevention #1 choice (FATCAT trial). Dog: IMHA, post-stroke. Bitter — pill in capsule for cats.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'aspirin',
    category: 'hematology',
    name: 'Aspirin (low-dose)',
    nameTh: 'แอสไพริน (low-dose)',
    classDrug: 'Antiplatelet — COX inhibitor',
    forms: ['Tablet 81/325 mg'],
    doses: {
      dog: [
        { indication: 'Antiplatelet (IMHA, post-stroke)', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Long-term · low-dose only' },
      ],
      cat: [
        { indication: 'ATE prevention (less preferred than clopidogrel)', dose: '5', unit: 'mg/cat (NOT mg/kg)', route: 'PO', frequency: 'q72h (every 3 days!)', duration: 'Long-term · clopidogrel preferred per FATCAT' },
      ],
    },
    interactions: ['NSAIDs', 'steroids', 'warfarin', 'methotrexate'],
    warnings: [
      '⚠️ Cat: 5 mg/cat (1/16 of 81 mg) every 72 hours — TOXIC if higher dose',
      'GI ulceration even at low antiplatelet dose',
      'Renal effects',
      'Don\'t use with steroids or NSAIDs',
      'Largely replaced by clopidogrel (FATCAT trial)',
    ],
    notes: '⚠️ Cat dose is per cat (not per kg!) and every 3 days. Clopidogrel preferred per FATCAT trial.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'rivaroxaban',
    category: 'hematology',
    name: 'Rivaroxaban',
    nameTh: 'ริวาร็อกซาแบน (Xarelto)',
    classDrug: 'Anticoagulant — Direct factor Xa inhibitor',
    forms: ['Tablet 2.5/5/10/15/20 mg'],
    doses: {
      dog: [
        { indication: 'Thromboembolism (PLN, IMHA)', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'ATE prevention (alternative)', dose: '1.25', unit: 'mg/cat (1/2 of 2.5 mg tab)', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['NSAIDs', 'aspirin', 'azole antifungals (increased levels)', 'rifampin'],
    warnings: [
      'Bleeding · no specific reversal in vet med (andexanet humans)',
      'No routine monitoring needed',
      'Renal/hepatic excretion · adjust',
      'More expensive than alternatives',
    ],
    notes: 'Newer DOAC option · oral · no monitoring. Cat ATE alternative when clopidogrel resistant.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'vitamin-k1',
    category: 'hematology',
    name: 'Vitamin K1 (Phytonadione)',
    nameTh: 'วิตามินเค1 (ไฟโตนาดิโอน)',
    classDrug: 'Antidote / Coagulation factor (rodenticide reversal)',
    forms: ['Capsule 25/50 mg', 'Injection 10 mg/mL'],
    doses: {
      dog: [
        { indication: 'Anticoagulant rodenticide toxicity', dose: '2.5-5', unit: 'mg/kg loading, then 2.5-5 mg/kg', route: 'PO with fat meal', frequency: 'q12h', duration: '14-21 days for warfarin · 21-30 days for second-gen (brodifacoum)' },
        { indication: 'Severe bleed (initial)', dose: '5', unit: 'mg/kg', route: 'SC × 1 (NEVER IV — anaphylaxis!)', frequency: 'Once', duration: 'Then transition to PO' },
      ],
      cat: [
        { indication: 'Rodenticide toxicity', dose: '2.5-5', unit: 'mg/kg', route: 'PO with fat', frequency: 'q12h', duration: '14-30 days' },
      ],
    },
    interactions: ['warfarin (intentional reversal)', 'oral fat-soluble vitamin malabsorption'],
    warnings: [
      '⚠️ NEVER IV — anaphylaxis fatal · use SC for emergency',
      'GIVE WITH FAT for absorption (PO)',
      'Recheck PT 48-72 hr after stopping (rebound)',
      'Long duration for second-generation (brodifacoum, bromadiolone)',
      'Confirm rodenticide type if known',
    ],
    notes: '⭐ Anticoagulant rodenticide antidote. Oral with fat. NEVER IV. Long course for new-gen poisons.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'erythropoietin',
    category: 'hematology',
    name: 'Erythropoietin / Darbepoetin',
    nameTh: 'อีริโทรพอยอีติน (Darbepoetin)',
    classDrug: 'Hematology — Erythropoiesis stimulator',
    forms: ['Darbepoetin (Aranesp) 25-500 mcg/mL'],
    doses: {
      dog: [
        { indication: 'CKD anemia (Hct < 20%)', dose: '0.45-1', unit: 'mcg/kg (darbepoetin)', route: 'SC', frequency: 'Weekly initially, then q2-3 weeks', duration: 'Long-term · monitor Hct + BP' },
      ],
      cat: [
        { indication: 'CKD anemia (Hct < 20%)', dose: '1', unit: 'mcg/kg (darbepoetin)', route: 'SC', frequency: 'Weekly × 4-6, then q2-3 weeks', duration: 'Long-term · monitor' },
      ],
    },
    interactions: ['iron deficiency limits response', 'B vitamins'],
    warnings: [
      '⚠️ Pure red cell aplasia (PRCA) — antibody formation against EPO, can cross-react with endogenous',
      '⚠️ Hypertension common (treat with amlodipine)',
      'Iron supplementation often needed (oral ferrous sulfate)',
      'Target Hct 30-35% (don\'t over-correct)',
      'Recheck Hct + BP every 2-4 weeks',
      'Darbepoetin lower antibody risk than EPO',
    ],
    notes: 'Darbepoetin preferred (lower antibody risk). Hypertension monitoring essential. Iron supp often needed.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Phase 2e — Dermatology + Ophthalmic + Otic (20)
     ============================================================ */

  /* Dermatology — Immunomodulators */

  {
    id: 'cyclosporine',
    category: 'derm',
    name: 'Cyclosporine',
    nameTh: 'ไซโคลสปอริน (Atopica · Optimmune)',
    classDrug: 'Immunosuppressant — Calcineurin inhibitor',
    forms: ['Capsule 10/25/50/100 mg (Atopica)', 'Oral solution 100 mg/mL', 'Ophthalmic ointment 0.2% (Optimmune)'],
    doses: {
      dog: [
        { indication: 'Atopic dermatitis (Atopica)', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 4-6 weeks, then taper to lowest effective', duration: 'Long-term · empty stomach (1 hr before/2 hr after food)' },
        { indication: 'Perianal fistula', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term · monitor blood levels' },
        { indication: 'IMHA / immune-mediated', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Long-term · combined with steroid' },
      ],
      cat: [
        { indication: 'Atopic dermatitis / EGC', dose: '7', unit: 'mg/kg', route: 'PO', frequency: 'q24h initially, then taper', duration: 'Long-term · with food OK in cats' },
        { indication: 'Stomatitis (LPGS)', dose: '2.5-7', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term' },
      ],
    },
    interactions: ['ketoconazole/itraconazole (massive ↑ levels — sometimes intentional cost-saving)', 'macrolides (erythromycin)', 'metoclopramide', 'NSAIDs (renal)', 'rifampin', 'phenobarbital'],
    warnings: [
      '⚠️ Latent infection reactivation — Toxoplasma (cat), fungal, opportunistic',
      'Gingival hyperplasia, hirsutism (dog)',
      'GI upset (give with food in cat, empty stomach in dog)',
      'Avoid in active infection or malignancy',
      'Monitor LFTs, kidney function',
      'Check FeLV/FIV before cat use',
      'Whole blood cyclosporine levels (target 250-500 ng/mL trough)',
    ],
    notes: '⭐ Atopica = canine atopy mainstay. Cat: pre-treatment FeLV/FIV + Toxo screening recommended.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'oclacitinib',
    category: 'derm',
    name: 'Oclacitinib',
    nameTh: 'ออคลาซิทินิบ (Apoquel)',
    classDrug: 'Immunomodulator — JAK1 inhibitor',
    forms: ['Tablet 3.6/5.4/16 mg'],
    doses: {
      dog: [
        { indication: 'Pruritus / atopic dermatitis', dose: '0.4-0.6', unit: 'mg/kg', route: 'PO', frequency: 'q12h × 14 days, then q24h', duration: 'Long-term · taper not required' },
      ],
      cat: [
        { indication: 'NOT FDA-approved for cats (off-label use limited)', dose: '0.4-1', unit: 'mg/kg', route: 'PO', frequency: 'q12h', duration: 'Off-label · use cyclosporine instead' },
      ],
    },
    interactions: ['live vaccines (caution)', 'other immunosuppressants'],
    warnings: [
      'Avoid in dogs < 12 months · serious infection / parasitism / neoplasia reported',
      'Demodex flare-up reported',
      'Caution: pre-existing infection',
      'Mild leukopenia, lymphocyte changes possible',
      'CBC + chemistry every 6 months long-term',
      'Discontinue if severe infection',
    ],
    notes: '⭐ Rapid onset (< 24 hr) for canine pruritus. No taper needed. Younger dogs need caution.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'lokivetmab',
    category: 'derm',
    name: 'Lokivetmab',
    nameTh: 'โลคิเวตแมบ (Cytopoint)',
    classDrug: 'Anti-IL-31 monoclonal antibody (caninized)',
    forms: ['Injection 10/20/30/40 mg pre-filled vial'],
    doses: {
      dog: [
        { indication: 'Atopic dermatitis pruritus', dose: '1-3.3', unit: 'mg/kg (use vial size by weight)', route: 'SC', frequency: 'q4-8 weeks', duration: 'Long-term · monthly injection' },
      ],
      cat: [
        { indication: 'NOT for cats (canine-specific antibody)', dose: '—', unit: '—', route: '—', frequency: '—', duration: '—' },
      ],
    },
    interactions: ['minimal — different mechanism than other immunosuppressants'],
    warnings: [
      'Onset 1 day · duration 4-8 weeks',
      'Side effects rare · injection site, vomiting',
      'Can combine with cyclosporine, oclacitinib, NSAIDs',
      'Vaccinations OK (no immunosuppression)',
      'Pregnancy not studied — avoid in breeding',
    ],
    notes: '⭐ Game-changer for canine atopy · monthly SC · no immunosuppression · safer than other options.',
    source: "Plumb's 10th Ed.",
  },

  /* Antihistamines */

  {
    id: 'cetirizine',
    category: 'derm',
    name: 'Cetirizine',
    nameTh: 'เซทิริซีน',
    classDrug: 'Antihistamine — H1 receptor blocker (2nd-gen)',
    forms: ['Tablet 5/10 mg', 'Syrup'],
    doses: {
      dog: [
        { indication: 'Allergic dermatitis (variable response)', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q12-24h', duration: 'Long-term · less sedating than 1st-gen' },
      ],
      cat: [
        { indication: 'Allergic / pruritus', dose: '5', unit: 'mg/cat', route: 'PO', frequency: 'q24h', duration: 'Long-term' },
      ],
    },
    interactions: ['CNS depressants (mild additive)'],
    warnings: [
      'Less sedating than diphenhydramine',
      'Generally well-tolerated',
      'Variable efficacy in atopy (try 2-week trial)',
      'Renal excretion · adjust in CKD',
    ],
    notes: 'Less sedating · 2nd-gen H1. Trial 2 weeks · only ~30% atopic dogs respond. Best in mild cases.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'hydroxyzine',
    category: 'derm',
    name: 'Hydroxyzine',
    nameTh: 'ไฮดร็อกซีซีน (Atarax)',
    classDrug: 'Antihistamine — H1 blocker (1st-gen) + anxiolytic',
    forms: ['Tablet 10/25/50 mg', 'Syrup 10 mg/5mL'],
    doses: {
      dog: [
        { indication: 'Allergic dermatitis', dose: '2', unit: 'mg/kg', route: 'PO', frequency: 'q8-12h', duration: 'Long-term' },
        { indication: 'Anxiety / behavior', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q8h prn', duration: 'PRN' },
      ],
      cat: [
        { indication: 'Allergic / pruritus', dose: '5-10', unit: 'mg/cat', route: 'PO', frequency: 'q8-12h', duration: 'Long-term · more sedating in cats' },
      ],
    },
    interactions: ['CNS depressants', 'anticholinergics (additive)', 'epinephrine (paradoxical)'],
    warnings: [
      'Sedation common (especially first week)',
      'Anticholinergic effects (dry mouth, urinary retention)',
      'Avoid in glaucoma, urinary obstruction',
      'Cats more sensitive to sedation',
      'Active metabolite is cetirizine',
    ],
    notes: '1st-gen antihistamine — more sedating than cetirizine. Combo anxiolysis useful for fearful patients.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'diphenhydramine',
    category: 'derm',
    name: 'Diphenhydramine',
    nameTh: 'ไดเฟนไฮดรามีน (Benadryl)',
    classDrug: 'Antihistamine — H1 blocker (1st-gen)',
    forms: ['Tablet 25/50 mg', 'Syrup 12.5 mg/5mL', 'Injection 50 mg/mL'],
    doses: {
      dog: [
        { indication: 'Anaphylaxis / acute allergic reaction', dose: '1-2', unit: 'mg/kg', route: 'IM/IV', frequency: 'q8h', duration: 'Acute' },
        { indication: 'Pre-medication (vaccine reaction prevention)', dose: '1-2', unit: 'mg/kg', route: 'PO/IM/SC', frequency: 'Once before vaccine', duration: 'Single dose' },
        { indication: 'Mild sedation / motion sickness', dose: '2-4', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'PRN' },
      ],
      cat: [
        { indication: 'Allergic / mild sedation', dose: '1-2', unit: 'mg/kg', route: 'PO/IM/SC', frequency: 'q8-12h', duration: 'Short-term' },
      ],
    },
    interactions: ['CNS depressants (additive)', 'MAO inhibitors', 'anticholinergics'],
    warnings: [
      'Sedation common',
      'Anticholinergic effects',
      'Avoid in glaucoma, prostatic hypertrophy',
      'Paradoxical excitation in some cats',
      'Useful for vaccine reaction premedication',
    ],
    notes: 'Standard for anaphylaxis adjunct + vaccine reaction prevention. Sedation common.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'chlorpheniramine',
    category: 'derm',
    name: 'Chlorpheniramine',
    nameTh: 'คลอร์เฟนิรามีน',
    classDrug: 'Antihistamine — H1 blocker (1st-gen)',
    forms: ['Tablet 4 mg', 'Syrup'],
    doses: {
      dog: [
        { indication: 'Allergic dermatitis', dose: '0.2-0.8', unit: 'mg/kg or 4-8 mg/dog', route: 'PO', frequency: 'q8-12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Allergic / pruritus', dose: '2', unit: 'mg/cat', route: 'PO', frequency: 'q12h', duration: 'Long-term · best evidence in cat among antihistamines' },
      ],
    },
    interactions: ['CNS depressants', 'anticholinergics'],
    warnings: [
      'Sedation',
      'Anticholinergic effects',
      'Best-studied antihistamine for cats',
    ],
    notes: '⭐ Best evidence among antihistamines for cat allergic disease. Cat dose 2 mg/cat BID.',
    source: "Plumb's 10th Ed.",
  },

  /* Topical antibacterials */

  {
    id: 'mupirocin',
    category: 'derm',
    name: 'Mupirocin',
    nameTh: 'มูพิโรซิน (Bactoderm)',
    classDrug: 'Topical antibiotic — Pseudomonic acid',
    forms: ['Ointment 2%'],
    doses: {
      dog: [
        { indication: 'Localized pyoderma · MRSP localized lesions', dose: 'Apply thin layer', unit: 'topical', route: 'Topical', frequency: 'q12h', duration: '7-21 days' },
      ],
      cat: [
        { indication: 'Localized infection', dose: 'Apply thin layer', unit: 'topical', route: 'Topical', frequency: 'q12h', duration: '7-21 days · prevent licking' },
      ],
    },
    interactions: ['minimal systemic absorption'],
    warnings: [
      'For LOCALIZED infections only',
      'Excellent vs MRSA/MRSP',
      'Prevent licking (E-collar) — bitter taste',
      'Avoid prolonged use (resistance)',
      'No systemic effect',
    ],
    notes: '⭐ #1 topical for localized MRSP/MRSA pyoderma. Bitter — E-collar essential.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'silver-sulfadiazine',
    category: 'derm',
    name: 'Silver Sulfadiazine',
    nameTh: 'ซิลเวอร์ซัลฟาไดอะซีน (SSD/Silvadene)',
    classDrug: 'Topical antibacterial — Sulfonamide + Silver',
    forms: ['Cream 1%'],
    doses: {
      dog: [
        { indication: 'Burns · ear infections (off-label)', dose: 'Apply layer', unit: 'topical', route: 'Topical', frequency: 'q12-24h', duration: 'Until healed' },
        { indication: 'Otitis externa (Pseudomonas)', dose: 'Few drops in ear canal', unit: 'topical', route: 'Otic (off-label)', frequency: 'q12h', duration: '7-14 days' },
      ],
      cat: [
        { indication: 'Burns · skin infections', dose: 'Apply layer', unit: 'topical', route: 'Topical', frequency: 'q12-24h', duration: 'Until healed' },
      ],
    },
    interactions: ['minimal systemic'],
    warnings: [
      'Avoid in sulfa-hypersensitive',
      'Some systemic absorption from large burns',
      'Good for Pseudomonas otitis (off-label otic use)',
      'Cleanse before reapplication',
    ],
    notes: 'Burn treatment + Pseudomonas otitis (off-label). Excellent broad-spectrum topical.',
    source: "Plumb's 10th Ed.",
  },

  /* Topical/shampoo dermatology */

  {
    id: 'chlorhexidine',
    category: 'derm',
    name: 'Chlorhexidine',
    nameTh: 'คลอร์เฮ็กซิดีน',
    classDrug: 'Topical antiseptic / Shampoo',
    forms: ['Solution 0.5-4%', 'Shampoo 2-4%', 'Wipes', 'Spray'],
    doses: {
      dog: [
        { indication: 'Pyoderma (shampoo)', dose: '2-4% shampoo', unit: 'topical', route: 'Bath', frequency: '2-3× weekly initially, then weekly', duration: 'Long-term as part of management' },
        { indication: 'Pre-surgical skin prep', dose: '2-4% scrub', unit: 'topical', route: 'Surgical prep', frequency: 'Pre-op', duration: 'Single use' },
        { indication: 'Wound flush (dilute!)', dose: '0.05% dilute', unit: 'topical', route: 'Wound flush', frequency: 'q12-24h', duration: 'Until granulating' },
      ],
      cat: [
        { indication: 'Topical antiseptic', dose: '0.05-2%', unit: 'topical', route: 'Topical', frequency: 'PRN', duration: 'PRN · cats may dislike' },
      ],
    },
    interactions: ['anionic soaps (inactivate)', 'hard water (reduces efficacy)'],
    warnings: [
      '⚠️ Cytotoxic at concentrations > 0.05% for open wounds',
      'Contact dermatitis possible',
      'Avoid eyes (irritation, corneal damage)',
      'Avoid ear use if eardrum perforated',
      'Bind by anionic soap → rinse first',
    ],
    notes: '⭐ Mainstay for pyoderma management. Concentration matters: 2-4% for shampoo, 0.05% for wounds.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'miconazole-shampoo',
    category: 'derm',
    name: 'Miconazole + Chlorhexidine Shampoo',
    nameTh: 'ไมโคนาโซล + คลอร์เฮ็กซิดีน (Malaseb)',
    classDrug: 'Topical antifungal + antiseptic',
    forms: ['Shampoo (2% miconazole + 2% chlorhexidine)'],
    doses: {
      dog: [
        { indication: 'Malassezia dermatitis · dermatophytosis', dose: 'Lather, leave 10 min, rinse', unit: 'topical', route: 'Bath', frequency: '2× weekly initially, then weekly', duration: '3-6 weeks for active infection' },
      ],
      cat: [
        { indication: 'Dermatophytosis (essential!)', dose: 'Lather + 10 min contact', unit: 'topical', route: 'Bath', frequency: '2× weekly', duration: '6-8 weeks · spore reduction' },
      ],
    },
    interactions: ['minimal systemic'],
    warnings: [
      '10-minute contact time critical',
      'Avoid eyes',
      'Cat ringworm: shampoo + systemic antifungal essential',
      'Decontaminate environment also',
    ],
    notes: '⭐ Standard for Malassezia + ringworm topical Rx. 10-min contact critical. Cat ringworm = bath + PO antifungal.',
    source: "Plumb's 10th Ed.",
  },

  /* Ophthalmic */

  {
    id: 'tropicamide',
    category: 'ophthalmic',
    name: 'Tropicamide',
    nameTh: 'โทรพิคาไมด์',
    classDrug: 'Ophthalmic — Mydriatic / cycloplegic (short-acting)',
    forms: ['Ophthalmic solution 0.5/1%'],
    doses: {
      dog: [
        { indication: 'Diagnostic mydriasis (fundic exam)', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'Once · onset 15-20 min · duration 4-6 hr', duration: 'Single dose' },
      ],
      cat: [
        { indication: 'Diagnostic mydriasis', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'Once', duration: 'Single dose' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      '⚠️ Avoid in glaucoma — can precipitate acute attack',
      'Photophobia for 4-6 hr',
      'Mild systemic absorption',
    ],
    notes: 'Standard short-acting mydriatic for fundic exam. Onset 15-20 min · duration 4-6 hr.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'atropine-ophthalmic',
    category: 'ophthalmic',
    name: 'Atropine (Ophthalmic)',
    nameTh: 'อะโทรปีน (eye drops)',
    classDrug: 'Ophthalmic — Long-acting mydriatic / cycloplegic',
    forms: ['Ophthalmic solution 1%', 'Ointment 1%'],
    doses: {
      dog: [
        { indication: 'Anterior uveitis (pain relief, prevent synechiae)', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q6-24h initially, then taper', duration: 'Until uveitis controlled' },
        { indication: 'Corneal ulcer pain', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q6-24h', duration: 'Until ulcer heals' },
      ],
      cat: [
        { indication: 'Anterior uveitis', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q12-24h', duration: 'Variable · cats: hypersalivation common (bitter)' },
      ],
    },
    interactions: ['systemic anticholinergics (additive)'],
    warnings: [
      '⚠️ Cat: hypersalivation (bitter taste runs through nasolacrimal) — use ointment',
      '⚠️ Avoid in glaucoma',
      'Reduces tear production (caution KCS dogs)',
      'Long duration (5-7 days mydriasis)',
      'Photophobia',
    ],
    notes: 'Cat: use ointment to avoid hypersalivation. Long-acting mydriatic — uveitis pain control.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'latanoprost',
    category: 'ophthalmic',
    name: 'Latanoprost',
    nameTh: 'ลาตาโนพรอสต์ (Xalatan)',
    classDrug: 'Ophthalmic — Prostaglandin analog (anti-glaucoma)',
    forms: ['Ophthalmic solution 0.005%'],
    doses: {
      dog: [
        { indication: 'Glaucoma (especially primary closed-angle)', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q12-24h', duration: 'Long-term · emergency q1-2h initially' },
      ],
      cat: [
        { indication: 'Less effective in cats', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q12-24h', duration: 'Limited efficacy · use dorzolamide/timolol' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      '⚠️ AVOID in anterior uveitis · feline uveitis',
      'Iris darkening · eyelash growth',
      'Ocular hyperemia',
      'Refrigerate · stable 6 weeks once opened',
      'Most potent IOP reducer',
    ],
    notes: '⭐ #1 dog glaucoma · most potent. Emergency: q1-2h × few doses then q12h. Avoid in uveitis.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'dorzolamide',
    category: 'ophthalmic',
    name: 'Dorzolamide',
    nameTh: 'ดอร์โซลาไมด์ (Trusopt)',
    classDrug: 'Ophthalmic — Carbonic anhydrase inhibitor',
    forms: ['Ophthalmic solution 2%', 'Combo with timolol (Cosopt)'],
    doses: {
      dog: [
        { indication: 'Glaucoma (chronic management)', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q8h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Glaucoma (preferred over latanoprost)', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q8-12h', duration: 'Long-term · works well in cats' },
      ],
    },
    interactions: ['systemic CAIs (additive metabolic acidosis)'],
    warnings: [
      'Stinging on instillation common',
      'Hypersensitivity to sulfonamides (cross-reactivity)',
      'Combo formulation (Cosopt) more convenient',
      'Reduces aqueous production',
    ],
    notes: '⭐ Excellent for cat glaucoma + chronic dog glaucoma. Often combined with timolol (Cosopt).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'timolol',
    category: 'ophthalmic',
    name: 'Timolol (Ophthalmic)',
    nameTh: 'ทิโมลอล',
    classDrug: 'Ophthalmic — Beta-blocker',
    forms: ['Ophthalmic solution 0.25/0.5%', 'Combo with dorzolamide'],
    doses: {
      dog: [
        { indication: 'Glaucoma (chronic)', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q12h', duration: 'Long-term' },
      ],
      cat: [
        { indication: 'Glaucoma', dose: '1', unit: 'drop', route: 'OU topical', frequency: 'q12h', duration: 'Long-term · caution in HCM' },
      ],
    },
    interactions: ['systemic beta-blockers (additive)', 'oral CCB (bradycardia)'],
    warnings: [
      '⚠️ Systemic absorption — bradycardia, bronchospasm',
      '⚠️ Avoid in cardiac dz, asthma',
      'Caution in cat HCM (bradycardia)',
      'Less effective monotherapy than latanoprost/dorzolamide',
      'Often combined',
    ],
    notes: 'Adjunct glaucoma therapy. Watch systemic effects (bradycardia). Combination drops convenient.',
    source: "Plumb's 10th Ed.",
  },

  /* Otic combinations + ophthalmic anti-inflammatory */

  {
    id: 'otic-mometamax',
    category: 'otic',
    name: 'Otic Combo (Gentamicin/Mometasone/Clotrimazole)',
    nameTh: 'หูยาผสม (Mometamax / Otomax)',
    classDrug: 'Otic — Antibiotic + Antifungal + Steroid',
    forms: ['Otic suspension (gent/clotrim/mometasone)'],
    doses: {
      dog: [
        { indication: 'Otitis externa (bacterial + yeast)', dose: '4-8', unit: 'drops in ear', route: 'Otic', frequency: 'q24h', duration: '7-14 days · always clean ear first!' },
      ],
      cat: [
        { indication: 'Otitis externa', dose: '2-4', unit: 'drops', route: 'Otic', frequency: 'q24h', duration: '7-10 days' },
      ],
    },
    interactions: ['minimal systemic'],
    warnings: [
      '⚠️ Verify intact tympanum before use (gentamicin ototoxic)',
      'Always clean ear before applying',
      'Cytology to confirm bacteria + yeast',
      'Long-term steroid use → otic atrophy, calcification',
      'Resistance development with overuse',
    ],
    notes: '⭐ Standard otitis externa Rx. Always check eardrum + clean ear first. Cytology guides choice.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'florfenicol-otic',
    category: 'otic',
    name: 'Florfenicol/Terbinafine/Mometasone (Osurnia/Claro)',
    nameTh: 'ออทิคยาผสม long-acting (Osurnia / Claro)',
    classDrug: 'Otic — Long-acting (single-dose)',
    forms: ['Single-dose tube'],
    doses: {
      dog: [
        { indication: 'Otitis externa (compliance issue)', dose: '1', unit: 'tube per ear', route: 'Otic', frequency: 'Day 0, repeat day 7 (Osurnia) or single dose (Claro)', duration: '30 days protection' },
      ],
    },
    interactions: ['minimal systemic'],
    warnings: [
      'Verify intact tympanum',
      'Single application convenience',
      'Owner cannot apply traditional drops between',
      'Cleaning still needed first',
    ],
    notes: '⭐ Compliance saver — 1 dose lasts ~30 days. Vet-applied. Useful for difficult patients/owners.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'tacrolimus',
    category: 'derm',
    name: 'Tacrolimus (Topical)',
    nameTh: 'แทคโครลิมัส (Protopic)',
    classDrug: 'Immunomodulator — Topical calcineurin inhibitor',
    forms: ['Ointment 0.03/0.1%'],
    doses: {
      dog: [
        { indication: 'KCS (off-label · refractory cyclosporine)', dose: '0.03% ointment', unit: 'topical', route: 'OU ophthalmic', frequency: 'q12h', duration: 'Long-term' },
        { indication: 'Localized atopic dermatitis / DLE', dose: '0.1% ointment', unit: 'topical', route: 'Skin (limited area)', frequency: 'q12h × 2 wk, then taper', duration: 'Long-term · steroid-sparing' },
      ],
      cat: [
        { indication: 'Localized atopic / EGC', dose: '0.1%', unit: 'topical', route: 'Skin', frequency: 'q12h', duration: 'Long-term · prevent licking' },
      ],
    },
    interactions: ['minimal systemic absorption from skin/eye'],
    warnings: [
      'Burning sensation at first',
      'Avoid sun exposure (photosensitivity)',
      'Wear gloves when applying',
      'Prevent licking (oral toxicity if ingested chronically)',
      'FDA black box for human carcinogenicity (theoretical) — limit chronic use',
    ],
    notes: 'Steroid-sparing topical option. Ophthalmic compounded for refractory KCS. Owner gloves + E-collar.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'epinephrine',
    category: 'emergency',
    name: 'Epinephrine (Adrenaline)',
    nameTh: 'อีพิเนฟริน (Adrenalin)',
    classDrug: 'Sympathomimetic — Alpha + Beta agonist',
    forms: ['Injection 1 mg/mL (1:1000)', 'Pre-filled IV (1:10,000)'],
    doses: {
      dog: [
        { indication: 'Anaphylaxis', dose: '0.01', unit: 'mg/kg (1:1000) IM or 0.001-0.01 mg/kg IV', route: 'IM (preferred) / IV (titrate)', frequency: 'May repeat q5-15 min', duration: 'Acute' },
        { indication: 'Cardiac arrest (CPR)', dose: '0.01', unit: 'mg/kg IV (low-dose) or 0.1 mg/kg IT', route: 'IV / IO / IT', frequency: 'q3-5 min during CPR', duration: 'Until ROSC' },
      ],
      cat: [
        { indication: 'Anaphylaxis', dose: '0.01', unit: 'mg/kg', route: 'IM/IV', frequency: 'q5-15 min', duration: 'Acute' },
        { indication: 'Cardiac arrest', dose: '0.01', unit: 'mg/kg IV', route: 'IV/IO/IT', frequency: 'q3-5 min', duration: 'Until ROSC' },
      ],
    },
    interactions: ['beta-blockers (paradoxical hypertension)', 'TCAs', 'oxytocin (antagonism)', 'halothane (arrhythmia)'],
    warnings: [
      '⚠️ Calculate dose carefully — different concentrations (1:1000 vs 1:10,000)',
      'IM safer than IV in conscious patient',
      'Tachyarrhythmia · hypertension · myocardial ischemia',
      'Hyperglycemia',
      'Avoid SC (vasoconstriction limits absorption)',
      'NEVER infiltrate digits/tail (necrosis)',
    ],
    notes: '⭐ Anaphylaxis #1 + CPR. 1:1000 for IM, 1:10,000 for IV. Calculate carefully — concentration confusion is fatal.',
    source: "Plumb's 10th Ed.",
  },

  /* ============================================================
     Phase 2f — Antiparasitic + Emergency + Misc (20) — FINAL
     ============================================================ */

  /* Antiparasitic — External + Heartworm */

  {
    id: 'selamectin',
    category: 'antiparasitic',
    name: 'Selamectin',
    nameTh: 'เซลาเม็คติน (Revolution / Stronghold)',
    classDrug: 'Antiparasitic — Macrocyclic lactone (topical)',
    forms: ['Topical 6/12/15/30/45/60/120 mg pipette'],
    doses: {
      dog: [
        { indication: 'Flea + heartworm + ear mite + sarcoptes', dose: '6-12', unit: 'mg/kg', route: 'Topical (between shoulder blades)', frequency: 'q1 month', duration: 'Long-term prevention' },
      ],
      cat: [
        { indication: 'Flea + heartworm + ear mite + roundworm + hookworm', dose: '6-12', unit: 'mg/kg', route: 'Topical', frequency: 'q1 month', duration: 'Long-term · cat-safe' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      'Apply to dry skin · between shoulder blades',
      'Do not bathe within 2 hr of application',
      'Avoid eyes',
      'Generally well-tolerated',
      'Cat: rare neuro reactions (especially MDR1 sensitive)',
    ],
    notes: 'Convenient topical broad-spectrum. Heartworm prevention + flea/ectoparasites in one. Cat-friendly.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'imidacloprid-moxidectin',
    category: 'antiparasitic',
    name: 'Imidacloprid/Moxidectin',
    nameTh: 'อิมิดาโคลพริด+โมซิเด็คติน (Advocate / Advantage Multi)',
    classDrug: 'Antiparasitic — Topical combo (heartworm + GI worm + ectoparasite)',
    forms: ['Topical pipette (various sizes)'],
    doses: {
      dog: [
        { indication: 'Flea + heartworm + sarcoptes + demodex + GI worms', dose: '10/2.5', unit: 'mg/kg (imidacloprid/moxidectin)', route: 'Topical', frequency: 'q1 month', duration: 'Long-term · weekly for demodex' },
      ],
      cat: [
        { indication: 'Flea + heartworm + GI worms + ear mite', dose: '10/1', unit: 'mg/kg', route: 'Topical', frequency: 'q1 month', duration: 'Long-term' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      '⚠️ Collies / MDR1 sensitive breeds — caution at high dose (weekly demodex protocol)',
      'Don\'t bathe within 4 days',
      'Avoid eyes/mouth',
      'Generally safe',
    ],
    notes: 'Broad spectrum topical. Off-label weekly use for demodex. Caution MDR1 breeds at high frequency.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'sarolaner',
    category: 'antiparasitic',
    name: 'Sarolaner',
    nameTh: 'ซาโรลาเนอร์ (Simparica / Simparica Trio)',
    classDrug: 'Antiparasitic — Isoxazoline (oral monthly)',
    forms: ['Chewable tablet 5/10/20/40/80/120 mg', 'Trio combo with moxidectin/pyrantel'],
    doses: {
      dog: [
        { indication: 'Flea + tick (Simparica)', dose: '2-4', unit: 'mg/kg', route: 'PO', frequency: 'q1 month', duration: 'Long-term' },
        { indication: 'Demodex / Sarcoptes (off-label)', dose: '2-4', unit: 'mg/kg', route: 'PO', frequency: 'q1 month', duration: 'Until cured' },
      ],
      cat: [
        { indication: 'NOT for cats (Simparica) — use sarolaner+selamectin combo (Revolution Plus)', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Cat formulation = Revolution Plus' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      'FDA alert (2018) — caution in seizure history',
      'Mild GI upset',
      'Faster onset than fluralaner (4 hr vs 8 hr for ticks)',
      'Monthly oral · convenience',
    ],
    notes: '⭐ Simparica Trio = sarolaner + moxidectin + pyrantel = all-in-one monthly. Faster tick kill.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'milbemycin',
    category: 'antiparasitic',
    name: 'Milbemycin oxime',
    nameTh: 'มิลบีไมซิน (Interceptor / Sentinel / Trifexis)',
    classDrug: 'Antiparasitic — Macrocyclic lactone (oral)',
    forms: ['Tablet 2.3/5.75/11.5/23 mg', 'Combo formulations'],
    doses: {
      dog: [
        { indication: 'Heartworm prevention + GI worms', dose: '0.5-1', unit: 'mg/kg', route: 'PO', frequency: 'q1 month', duration: 'Long-term · year-round' },
        { indication: 'Demodex (extra-label)', dose: '1-2', unit: 'mg/kg', route: 'PO', frequency: 'q24h', duration: 'Until 2 negative skin scrapings · expensive option' },
      ],
      cat: [
        { indication: 'Heartworm + GI worms', dose: '2', unit: 'mg/kg', route: 'PO', frequency: 'q1 month', duration: 'Long-term' },
      ],
    },
    interactions: ['MDR1 mutation (high dose)'],
    warnings: [
      'Generally well-tolerated at preventive dose',
      'Confirm HW negative before starting (microfilaremia → reaction at higher doses)',
      'Daily demodex dose: caution in MDR1 breeds',
    ],
    notes: 'Heartworm prevention staple. Trifexis = milbemycin + spinosad (also kills fleas).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'pyrantel',
    category: 'antiparasitic',
    name: 'Pyrantel pamoate',
    nameTh: 'ไพแรนเทล',
    classDrug: 'Antiparasitic — Anthelmintic (GI nematodes)',
    forms: ['Suspension 50 mg/mL', 'Tablet 22.7/113.5 mg'],
    doses: {
      dog: [
        { indication: 'Roundworm + hookworm', dose: '5-10', unit: 'mg/kg', route: 'PO', frequency: 'Once · repeat in 2-3 weeks', duration: 'Single dose' },
        { indication: 'Puppy deworming protocol', dose: '5', unit: 'mg/kg', route: 'PO', frequency: 'q2 weeks from 2-12 wk, then monthly', duration: 'Until 6 months' },
      ],
      cat: [
        { indication: 'Roundworm + hookworm', dose: '20', unit: 'mg/kg', route: 'PO', frequency: 'Once · repeat in 2-3 weeks', duration: 'Single dose' },
      ],
    },
    interactions: ['piperazine (antagonism)', 'morantel'],
    warnings: [
      'Very safe · narrow spectrum (no whipworm, no tapeworm)',
      'Often combined with praziquantel (Drontal) for broad spectrum',
      'No effect on tapeworm — use praziquantel',
    ],
    notes: 'Cheap, very safe. Roundworm + hookworm only. Doesn\'t kill tapeworm (use praziquantel).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'fenbendazole',
    category: 'antiparasitic',
    name: 'Fenbendazole',
    nameTh: 'เฟนเบนดาโซล (Panacur)',
    classDrug: 'Antiparasitic — Benzimidazole (broad-spectrum)',
    forms: ['Granules 22.2%', 'Suspension 100 mg/mL', 'Paste'],
    doses: {
      dog: [
        { indication: 'Whipworm + roundworm + hookworm + Giardia', dose: '50', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 3-5 days', duration: '3-5 day course · repeat in 3 weeks for whipworm' },
        { indication: 'Tapeworm (Taenia)', dose: '50', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 3 days', duration: '3 days' },
        { indication: 'Lungworm (Crenosoma)', dose: '50', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 7-14 days', duration: 'Variable' },
      ],
      cat: [
        { indication: 'Most GI worms + Giardia', dose: '50', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 3-5 days', duration: '3-5 days' },
        { indication: 'Lungworm (Aelurostrongylus)', dose: '50', unit: 'mg/kg', route: 'PO', frequency: 'q24h × 14 days', duration: '14 days' },
      ],
    },
    interactions: ['minimal'],
    warnings: [
      'Very safe · OK in pregnancy',
      'Doesn\'t kill Dipylidium tapeworm (need praziquantel)',
      'Some Giardia resistance reported',
      'Bitter taste',
    ],
    notes: '⭐ Broad spectrum · safe in pregnancy. Standard for whipworm + Giardia. 3-5 day course.',
    source: "Plumb's 10th Ed.",
  },

  /* Emergency / Cardiac */

  {
    id: 'atropine',
    category: 'emergency',
    name: 'Atropine (Systemic)',
    nameTh: 'อะโทรปีน (ฉีด)',
    classDrug: 'Anticholinergic — Muscarinic antagonist',
    forms: ['Injection 0.5/1 mg/mL'],
    doses: {
      dog: [
        { indication: 'Bradycardia (vagal)', dose: '0.02-0.04', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'Once · may repeat', duration: 'Acute' },
        { indication: 'CPR (asystole/PEA)', dose: '0.04', unit: 'mg/kg IV', route: 'IV/IO/IT', frequency: 'q3-5 min', duration: 'During CPR' },
        { indication: 'Premed (with opioid bradycardia)', dose: '0.02-0.04', unit: 'mg/kg', route: 'IM/SC', frequency: 'Once', duration: 'Pre-anesthesia' },
        { indication: 'Organophosphate toxicity', dose: '0.2-2', unit: 'mg/kg (titrate to atropinization)', route: 'IV/IM', frequency: 'q3-6h until controlled', duration: 'Until secretions dry' },
      ],
      cat: [
        { indication: 'Bradycardia / CPR', dose: '0.02-0.04', unit: 'mg/kg', route: 'IV/IM/IT', frequency: 'q3-5 min in CPR', duration: 'Acute' },
        { indication: 'OP toxicity', dose: '0.2-2', unit: 'mg/kg titrate', route: 'IV/IM', frequency: 'q3-6h', duration: 'Until atropinized' },
      ],
    },
    interactions: ['CNS stimulants', 'TCAs (additive anticholinergic)', 'dexmedetomidine (don\'t routinely combine)'],
    warnings: [
      '⚠️ Don\'t routinely combine with dexmedetomidine (severe HT)',
      'Tachycardia · arrhythmia',
      'Mydriasis · dry mouth · ileus',
      'OP toxicity dose much higher than standard',
      'Avoid in tachyarrhythmia, glaucoma, GI obstruction',
    ],
    notes: 'Standard for vagal bradycardia + OP toxicity (high dose). Don\'t combine with alpha-2 prophylactically.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'glycopyrrolate',
    category: 'emergency',
    name: 'Glycopyrrolate',
    nameTh: 'ไกลโคไพร์โรเลต (Robinul)',
    classDrug: 'Anticholinergic — Quaternary (no CNS penetration)',
    forms: ['Injection 0.2 mg/mL'],
    doses: {
      dog: [
        { indication: 'Bradycardia (longer duration than atropine)', dose: '0.005-0.011', unit: 'mg/kg', route: 'IV/IM/SC', frequency: 'q2-4h', duration: 'Acute' },
        { indication: 'Premed', dose: '0.005-0.011', unit: 'mg/kg', route: 'IM', frequency: 'Once', duration: 'Pre-op' },
      ],
      cat: [
        { indication: 'Bradycardia / premed', dose: '0.005-0.011', unit: 'mg/kg', route: 'IV/IM', frequency: 'q2-4h', duration: 'Acute' },
      ],
    },
    interactions: ['anticholinergics (additive)'],
    warnings: [
      'No CNS penetration (vs atropine) — less excitation',
      'Longer duration than atropine (2-4 hr)',
      'Slower onset than atropine',
      'Tachycardia',
      'Less effective in CPR (atropine preferred for emergency)',
    ],
    notes: 'Premed + non-emergency bradycardia. No CNS effects. Use atropine for emergency CPR.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'dopamine',
    category: 'emergency',
    name: 'Dopamine',
    nameTh: 'โดพามีน',
    classDrug: 'Vasopressor / Inotrope',
    forms: ['Injection 40/80/160 mg/mL (concentrate)'],
    doses: {
      dog: [
        { indication: 'Hypotension (low-dose for renal flow — old concept)', dose: '1-3', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'Until BP stable' },
        { indication: 'Hypotension (moderate-dose for inotropy)', dose: '5-10', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'During hypotension' },
        { indication: 'Hypotension (high-dose for vasopressor)', dose: '10-20', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'Refractory hypotension' },
      ],
      cat: [
        { indication: 'Hypotension', dose: '5-15', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'During shock · norepinephrine often preferred in cats' },
      ],
    },
    interactions: ['MAO inhibitors (severe HT)', 'TCAs', 'beta-blockers (paradoxical HT)', 'phenytoin (seizures)'],
    warnings: [
      '⚠️ Tachyarrhythmia at high doses',
      '⚠️ Tissue necrosis if extravasates — use central line if possible',
      'Dose-dependent receptor effects (D > β > α as dose ↑)',
      'Norepinephrine increasingly preferred in septic shock',
      'Reduce dose gradually — don\'t stop abruptly',
    ],
    notes: 'Shock + hypotension. Receptor effects vary by dose. NE often preferred for septic shock now.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'dobutamine',
    category: 'emergency',
    name: 'Dobutamine',
    nameTh: 'โดบูทามีน',
    classDrug: 'Inotrope — Beta-1 selective agonist',
    forms: ['Injection 12.5 mg/mL'],
    doses: {
      dog: [
        { indication: 'Cardiogenic shock / DCM decompensation', dose: '2-15', unit: 'mcg/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'Until cardiac function improves' },
      ],
      cat: [
        { indication: 'Severe cardiac failure', dose: '1-5', unit: 'mcg/kg/min (start LOW)', route: 'IV CRI', frequency: 'Continuous', duration: 'Cautious · cats sensitive' },
      ],
    },
    interactions: ['beta-blockers (antagonism)', 'inhalational anesthetics (arrhythmia)'],
    warnings: [
      '⚠️ Cat very sensitive — start at 1 mcg/kg/min',
      'Tachyarrhythmia',
      'Continuous ECG monitoring',
      'Best for inotropy without much vasoconstriction',
      'Tachyphylaxis after 72 hr',
    ],
    notes: 'Pure inotrope (β1 > β2 > α). Cardiogenic shock first-line. Cat extremely sensitive.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'vasopressin',
    category: 'emergency',
    name: 'Vasopressin',
    nameTh: 'วาโสเพรสซิน',
    classDrug: 'Vasopressor — V1 receptor agonist',
    forms: ['Injection 20 IU/mL'],
    doses: {
      dog: [
        { indication: 'CPR (refractory shockable rhythms)', dose: '0.8', unit: 'U/kg IV (one-time alternative to epi)', route: 'IV/IO', frequency: 'Once during CPR', duration: 'Single dose' },
        { indication: 'Catecholamine-resistant shock', dose: '0.5-3', unit: 'mU/kg/min', route: 'IV CRI', frequency: 'Continuous', duration: 'Refractory hypotension' },
      ],
      cat: [
        { indication: 'CPR / shock', dose: '0.8', unit: 'U/kg IV one-time', route: 'IV/IO', frequency: 'Once', duration: 'Single dose' },
      ],
    },
    interactions: ['ganglionic blockers (additive)'],
    warnings: [
      'Pure vasoconstrictor (no inotropy)',
      'Skin/digit ischemia',
      'CRI reserved for true catecholamine-resistant shock',
      'Useful when acidemic (epi/NE less effective)',
    ],
    notes: 'CPR alternative to epi. Useful in catecholamine-resistant shock. Vasoconstrictor without HR effect.',
    source: "Plumb's 10th Ed.",
  },

  /* Antidotes */

  {
    id: 'n-acetylcysteine',
    category: 'antidote',
    name: 'N-Acetylcysteine (NAC)',
    nameTh: 'เอ็น-อะเซทิลซิสเตอีน',
    classDrug: 'Antidote — Acetaminophen toxicity / mucolytic',
    forms: ['Solution 200 mg/mL', 'Injection 200 mg/mL'],
    doses: {
      dog: [
        { indication: 'Acetaminophen toxicity', dose: '140 then 70', unit: 'mg/kg loading, then 70 mg/kg', route: 'PO/IV (slow)', frequency: 'Loading, then q6h × 7-17 doses', duration: 'Until LFTs improve' },
      ],
      cat: [
        { indication: 'Acetaminophen toxicity (CRITICAL!)', dose: '140 then 70', unit: 'mg/kg loading, then 70 mg/kg', route: 'PO/IV slow', frequency: 'Loading, then q6h × 7-17 doses', duration: 'Until methemoglobinemia + LFTs improve' },
      ],
    },
    interactions: ['activated charcoal (absorbs NAC) — separate or use IV'],
    warnings: [
      'IV: dilute 1:4 with saline · slow infusion (anaphylactoid reaction)',
      '⭐ TIME-CRITICAL: most effective within 8-12 hr of ingestion',
      'Methemoglobinemia in cats also responds to NAC',
      'Bad smell/taste (rotten egg sulfur)',
    ],
    notes: '⭐ ALWAYS HAVE STOCKED. Cat paracetamol = emergency. Loading dose then maintenance × 7-17 doses.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'atipamezole',
    category: 'antidote',
    name: 'Atipamezole',
    nameTh: 'อะทิพาเมโซล (Antisedan)',
    classDrug: 'Antidote — Alpha-2 antagonist (reversal)',
    forms: ['Injection 5 mg/mL'],
    doses: {
      dog: [
        { indication: 'Dexmedetomidine reversal', dose: '50-200', unit: 'mcg/kg (= same volume as dexmed used)', route: 'IM (preferred)', frequency: 'Once', duration: 'Reverses in 5-10 min' },
        { indication: 'Xylazine reversal', dose: '50-200', unit: 'mcg/kg', route: 'IM', frequency: 'Once', duration: 'Reverses' },
      ],
      cat: [
        { indication: 'Dexmedetomidine reversal', dose: '125-500', unit: 'mcg/kg (= same volume as dexmed)', route: 'IM', frequency: 'Once', duration: 'Reverses' },
      ],
    },
    interactions: ['removes ALL alpha-2 effects (analgesia + sedation)'],
    warnings: [
      'Reverses analgesia too — pre-treat with opioid before reversal if pain expected',
      'Tachycardia · vasodilation',
      'IM preferred (IV may cause excitement)',
      'CRITICAL: shock-equivalent dose = volume of dexmedetomidine used',
    ],
    notes: '⭐ Volume rule: same volume as dexmed given. Reverses 5-10 min IM. Don\'t reverse intra-op (hypotension).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'flumazenil',
    category: 'antidote',
    name: 'Flumazenil',
    nameTh: 'ฟลูมาซีนิล',
    classDrug: 'Antidote — Benzodiazepine antagonist',
    forms: ['Injection 0.1 mg/mL'],
    doses: {
      dog: [
        { indication: 'Benzodiazepine reversal', dose: '0.01-0.04', unit: 'mg/kg (start 0.01)', route: 'IV slow', frequency: 'May repeat q1-2 min', duration: 'Reverses in 1-2 min' },
      ],
      cat: [
        { indication: 'Benzodiazepine reversal', dose: '0.01-0.04', unit: 'mg/kg', route: 'IV slow', frequency: 'May repeat', duration: 'Reverses' },
      ],
    },
    interactions: ['removes benzodiazepine effect'],
    warnings: [
      'Short half-life — re-sedation possible (especially with diazepam · less with midazolam)',
      'Seizures possible if patient on chronic benzo Rx',
      'Re-dose may be needed q20-30 min',
    ],
    notes: 'Benzo overdose · paradoxical reaction reversal. Watch for re-sedation (re-dose needed).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'methocarbamol',
    category: 'emergency',
    name: 'Methocarbamol',
    nameTh: 'เมโทคาร์บามอล (Robaxin)',
    classDrug: 'Muscle relaxant — Centrally-acting',
    forms: ['Tablet 500/750 mg', 'Injection 100 mg/mL'],
    doses: {
      dog: [
        { indication: 'Pyrethrin/permethrin toxicity (cat) · tremorgenic mycotoxin', dose: '55-220', unit: 'mg/kg loading, then to effect', route: 'IV slow / PO', frequency: 'Loading then q6h', duration: 'Until tremors resolve' },
        { indication: 'Muscle spasm (IVDD adjunct)', dose: '15-44', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'Variable' },
      ],
      cat: [
        { indication: 'Permethrin toxicity (CRITICAL!)', dose: '55-220', unit: 'mg/kg loading, then to effect', route: 'IV slow', frequency: 'Loading + repeat to effect', duration: 'Until tremors stop · may need 24+ hr' },
      ],
    },
    interactions: ['CNS depressants (additive)'],
    warnings: [
      '⭐ Cat permethrin toxicity = MASSIVE doses needed (often > 220 mg/kg total)',
      'Sedation common',
      'IV: don\'t exceed 2 mL/min (cardiac depression)',
      'Useful in spider bite (latrodectism), strychnine, mycotoxins',
    ],
    notes: '⭐ Cat permethrin (flea product accident) = ICU emergency. Massive methocarbamol doses + supportive care.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'pralidoxime',
    category: 'antidote',
    name: 'Pralidoxime (2-PAM)',
    nameTh: 'พราลิด็อกไซม์ (2-PAM)',
    classDrug: 'Antidote — OP cholinesterase reactivator',
    forms: ['Injection 50 mg/mL'],
    doses: {
      dog: [
        { indication: 'Organophosphate (NOT carbamate!) toxicity', dose: '20', unit: 'mg/kg', route: 'IM/IV slow', frequency: 'q12h × 24-48 hr', duration: 'With atropine concurrent · most effective < 24 hr post-exposure' },
      ],
      cat: [
        { indication: 'OP toxicity', dose: '20', unit: 'mg/kg', route: 'IM/IV slow', frequency: 'q12h', duration: 'Cautious in cats' },
      ],
    },
    interactions: ['atropine (synergy in OP toxicity)'],
    warnings: [
      '⚠️ NOT effective for carbamate toxicity (use only atropine)',
      '⚠️ Time-critical — irreversible enzyme aging after 24-72 hr',
      'Tachycardia · hypertension if rapid IV',
      'Use with atropine (don\'t replace it)',
    ],
    notes: '⭐ OP-specific antidote. NOT for carbamate. Time-critical (< 24 hr ideal). Concurrent atropine essential.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'fomepizole',
    category: 'antidote',
    name: 'Fomepizole (4-MP)',
    nameTh: 'ฟอเมพิโซล (4-Methylpyrazole)',
    classDrug: 'Antidote — Ethylene glycol toxicity (alcohol dehydrogenase inhibitor)',
    forms: ['Injection 5/50 mg/mL'],
    doses: {
      dog: [
        { indication: 'Ethylene glycol (antifreeze) toxicity', dose: '20 then 15-15-5', unit: 'mg/kg loading, then 15 q12h × 2, then 5 mg/kg', route: 'IV slow', frequency: 'Specific schedule (loading + 3 maintenance)', duration: '36 hr total · effective if started < 8-12 hr post-ingestion' },
      ],
      cat: [
        { indication: 'EG toxicity (HIGH dose required!)', dose: '125 then 31.25', unit: 'mg/kg loading, then 31.25 mg/kg q12h × 3', route: 'IV slow', frequency: '4 doses total over 36 hr', duration: 'Time-critical · < 3 hr ideal in cats' },
      ],
    },
    interactions: ['alcohol (additive ADH inhibition — both work, fomepizole preferred)'],
    warnings: [
      '⭐ TIME-CRITICAL: < 8 hr post-ingestion (cat: < 3 hr!)',
      'Cat dose much higher than dog',
      'Better than ethanol (no CNS depression)',
      'Expensive',
      'Doesn\'t reverse existing renal damage — supportive care + dialysis',
    ],
    notes: '⭐ Antifreeze antidote. Fomepizole > ethanol (no CNS effect). Cat needs 5× higher dose. Time critical!',
    source: "Plumb's 10th Ed.",
  },

  /* Misc — Bronchodilators / Calcium / Cytotoxic */

  {
    id: 'theophylline',
    category: 'emergency',
    name: 'Theophylline',
    nameTh: 'ทีโอฟิลลีน',
    classDrug: 'Bronchodilator — Methylxanthine',
    forms: ['ER tablet 100/200/300 mg', 'Capsule'],
    doses: {
      dog: [
        { indication: 'Bronchitis / cough · CHF dyspnea adjunct', dose: '10', unit: 'mg/kg ER', route: 'PO', frequency: 'q12h', duration: 'Long-term · narrow therapeutic window' },
      ],
      cat: [
        { indication: 'Feline asthma', dose: '15-19', unit: 'mg/kg ER', route: 'PO', frequency: 'q24h evening', duration: 'Long-term · less first-line than steroid + bronchodilator inhaler' },
      ],
    },
    interactions: ['fluoroquinolones (massive ↑ levels)', 'cimetidine', 'erythromycin', 'phenobarbital (decreased)'],
    warnings: [
      '⚠️ Narrow therapeutic window · serum monitoring (10-20 mcg/mL)',
      '⚠️ Toxicity: vomiting, tachyarrhythmia, seizures',
      'CV stimulant',
      'Hepatic metabolism · adjust in liver dz',
      '⚠️ Enrofloxacin coadministration → toxicity',
    ],
    notes: 'Older bronchodilator. Largely replaced by inhalers. Many drug interactions (esp FQ).',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'terbutaline',
    category: 'emergency',
    name: 'Terbutaline',
    nameTh: 'เทอร์บูทาลีน',
    classDrug: 'Bronchodilator — Beta-2 selective agonist',
    forms: ['Tablet 2.5/5 mg', 'Injection 1 mg/mL'],
    doses: {
      dog: [
        { indication: 'Bronchospasm / chronic bronchitis', dose: '0.05-0.2', unit: 'mg/kg', route: 'PO/SC', frequency: 'q8-12h', duration: 'Variable' },
        { indication: 'Bradyarrhythmia (3rd-degree AV block bridge)', dose: '0.2', unit: 'mg/kg', route: 'PO', frequency: 'q8h', duration: 'Bridge to pacemaker' },
      ],
      cat: [
        { indication: 'Acute asthma attack (rescue)', dose: '0.01', unit: 'mg/kg', route: 'SC', frequency: 'Once · may repeat in 30 min', duration: 'Acute · transition to inhaler' },
        { indication: 'Chronic bronchitis (oral)', dose: '0.625-1.25', unit: 'mg/cat', route: 'PO', frequency: 'q12h', duration: 'Long-term' },
      ],
    },
    interactions: ['beta-blockers (antagonism)', 'sympathomimetics (additive)', 'TCAs'],
    warnings: [
      'Tachycardia · tremors · restlessness',
      'Hypokalemia at high dose',
      'SC injection good for acute asthma exacerbation',
      'Avoid in cardiac dz, hyperthyroid',
    ],
    notes: '⭐ Cat asthma rescue: SC terbutaline. Bridge therapy for AV block. Inhalers usually preferred chronic.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'calcium-gluconate',
    category: 'emergency',
    name: 'Calcium Gluconate',
    nameTh: 'แคลเซียมกลูโคเนต',
    classDrug: 'Electrolyte / Cardioprotective',
    forms: ['Injection 10% (100 mg/mL = 9.3 mg elemental Ca/mL)'],
    doses: {
      dog: [
        { indication: 'Eclampsia (puerperal tetany)', dose: '0.5-1.5', unit: 'mL/kg of 10% slow IV (1 mL/min, watch ECG)', route: 'IV slow', frequency: 'Until tremors resolve', duration: 'Acute · then SC + diet' },
        { indication: 'HyperK cardiac protection', dose: '0.5-1', unit: 'mL/kg of 10% slow IV', route: 'IV slow with ECG', frequency: 'Single dose · effect 30-60 min', duration: 'Bridge to K-lowering' },
        { indication: 'Hypocalcemia (post-spay HPT, etc.)', dose: '0.5-1.5', unit: 'mL/kg of 10%', route: 'IV slow', frequency: 'Until normocalcemic, then PO Ca + vitamin D', duration: 'Variable' },
      ],
      cat: [
        { indication: 'Hypocalcemia / hyperK cardiac protection', dose: '0.5-1.5', unit: 'mL/kg of 10% slow IV', route: 'IV slow', frequency: 'Until effect', duration: 'Acute' },
      ],
    },
    interactions: ['cardiac glycosides (digoxin — arrhythmia!)', 'ceftriaxone (precipitate — never mix)', 'NaHCO3 (precipitate)'],
    warnings: [
      '⚠️ NEVER bolus IV — slow over 5-15 min with ECG monitoring',
      '⚠️ Bradycardia · arrhythmia · cardiac arrest if too fast',
      '⚠️ Extravasation = severe tissue necrosis',
      '⚠️ NEVER mix with bicarbonate or ceftriaxone (precipitate)',
      'Used WITH oxytocin for dystocia (improves contraction)',
    ],
    notes: '⭐ Eclampsia + hyperK cardiac protection + dystocia adjunct. ALWAYS slow IV with ECG. Watch extravasation.',
    source: "Plumb's 10th Ed.",
  },

  {
    id: 'apomorphine',
    category: 'gi',
    name: 'Apomorphine',
    nameTh: 'อะพอมอร์ฟีน',
    classDrug: 'Emetic — Dopamine agonist',
    forms: ['Injection 3 mg/mL', 'Tablet (compounded)'],
    doses: {
      dog: [
        { indication: 'Induce emesis (decontamination · within 2 hr ingestion)', dose: '0.04', unit: 'mg/kg IV or 0.08 mg/kg IM/SC or conjunctival', route: 'IV/IM/SC/conjunctival sac', frequency: 'Once', duration: 'Onset 5-10 min' },
      ],
      cat: [
        { indication: 'NOT effective in cats — use xylazine or dexmedetomidine for emesis', dose: '—', unit: '—', route: '—', frequency: '—', duration: 'Cat emesis: dexmedetomidine 7 mcg/kg IM' },
      ],
    },
    interactions: ['ondansetron (reduces emetic effect)', 'maropitant (blocks)', 'phenothiazines'],
    warnings: [
      '⚠️ Don\'t use if: caustic ingested, hydrocarbon, unconscious, seizing, brachycephalic risk aspiration',
      'Sedation, protracted vomiting',
      'Conjunctival sac route: rinse out after vomiting',
      'NOT for cats (poor effect)',
      'Window: < 2 hr post-ingestion ideal',
    ],
    notes: '⭐ Dog emesis #1. Cat emesis: use dexmedetomidine 7 mcg/kg IM. Don\'t induce if caustic/hydrocarbon.',
    source: "Plumb's 10th Ed.",
  },

];

/* ============================================================
   Drug Interactions Database
   Format: severity = 'major' | 'moderate' | 'minor'
   ============================================================ */
window.DRUG_INTERACTIONS = [
  // NSAID + Steroid (CRITICAL!)
  { drugs: ['meloxicam', 'prednisolone'], severity: 'major',
    effect: 'GI ulceration · perforation · acute kidney injury',
    management: 'NEVER combine. 5-7 day washout if switching.' },
  { drugs: ['carprofen', 'prednisolone'], severity: 'major',
    effect: 'GI ulceration · perforation · AKI',
    management: 'NEVER combine. 5-7 day washout if switching.' },

  // NSAID + ACE-i / Diuretic
  { drugs: ['meloxicam', 'furosemide'], severity: 'moderate',
    effect: 'Reduced furosemide efficacy + AKI risk',
    management: 'Monitor renal function. Use lowest effective dose. Hydration critical.' },
  { drugs: ['carprofen', 'furosemide'], severity: 'moderate',
    effect: 'Reduced furosemide efficacy + AKI risk',
    management: 'Monitor renal function + hydration.' },

  // NSAID + NSAID
  { drugs: ['meloxicam', 'carprofen'], severity: 'major',
    effect: 'GI/renal toxicity additive',
    management: 'NEVER combine NSAIDs.' },

  // Fluoroquinolone + Theophylline
  { drugs: ['enrofloxacin', 'theophylline'], severity: 'major',
    effect: 'Theophylline toxicity (seizures, arrhythmia)',
    management: 'Reduce theophylline 50% or avoid combination.' },

  // Fluoroquinolone + NSAIDs
  { drugs: ['enrofloxacin', 'meloxicam'], severity: 'moderate',
    effect: 'Increased seizure risk',
    management: 'Caution in epileptic patients.' },
  { drugs: ['enrofloxacin', 'carprofen'], severity: 'moderate',
    effect: 'Increased seizure risk',
    management: 'Caution in epileptic patients.' },

  // Tetracycline + dairy/antacids
  { drugs: ['doxycycline', 'sucralfate'], severity: 'moderate',
    effect: 'Reduced doxycycline absorption',
    management: 'Separate by 2 hours.' },

  // Steroid + Diuretic
  { drugs: ['prednisolone', 'furosemide'], severity: 'moderate',
    effect: 'Hypokalemia (additive)',
    management: 'Monitor K, supplement if needed.' },

  // Tramadol + others (serotonin)
  { drugs: ['tramadol', 'maropitant'], severity: 'minor',
    effect: 'Theoretical CNS depression additive',
    management: 'Monitor sedation level.' },

  // Penicillin + Tetracycline (antagonism)
  { drugs: ['amoxicillin', 'doxycycline'], severity: 'moderate',
    effect: 'Bacteriostatic antagonizes bactericidal',
    management: 'Avoid combination unless specific indication.' },
  { drugs: ['amoxicillin-clavulanate', 'doxycycline'], severity: 'moderate',
    effect: 'Bacteriostatic antagonizes bactericidal',
    management: 'Avoid combination.' },

  // ACE inhibitor + Diuretic
  { drugs: ['enalapril', 'furosemide'], severity: 'moderate',
    effect: 'Synergistic hypotension + AKI risk',
    management: 'Standard CHF combo. Monitor BP, renal, K. Start low.' },

  // ACE inhibitor + NSAID (CRITICAL!)
  { drugs: ['enalapril', 'meloxicam'], severity: 'major',
    effect: 'AKI · acute kidney injury (synergistic)',
    management: 'Avoid combination. If unavoidable, monitor renal q3-7 days.' },
  { drugs: ['enalapril', 'carprofen'], severity: 'major',
    effect: 'AKI · acute kidney injury',
    management: 'Avoid combination.' },

  // ACE inhibitor + Spironolactone (HyperK)
  { drugs: ['enalapril', 'spironolactone'], severity: 'moderate',
    effect: 'Hyperkalemia (additive K-sparing effect)',
    management: 'Standard quadruple CHF. Monitor K weekly initially.' },

  // Spironolactone + NSAID
  { drugs: ['spironolactone', 'meloxicam'], severity: 'moderate',
    effect: 'Reduced spironolactone efficacy + renal risk',
    management: 'Monitor K, renal function.' },

  // Dexmedetomidine + atropine warning (theoretical via different drug list)
  // Dexmed + ketamine — actually beneficial
  
  // Butorphanol antagonizes pure mu opioids
  { drugs: ['butorphanol', 'methadone'], severity: 'major',
    effect: 'Butorphanol antagonizes methadone analgesia',
    management: 'Don\'t combine — butorphanol kappa-mu antagonist reverses mu agonist.' },
  { drugs: ['butorphanol', 'fentanyl'], severity: 'major',
    effect: 'Butorphanol reverses fentanyl analgesia',
    management: 'Avoid combination. Use either kappa OR mu, not both.' },

  // Tramadol + serotonergic
  { drugs: ['tramadol', 'methadone'], severity: 'moderate',
    effect: 'Theoretical serotonin syndrome + additive sedation',
    management: 'Use with caution. Monitor.' },

  // Sucralfate + Fluoroquinolone
  { drugs: ['sucralfate', 'enrofloxacin'], severity: 'moderate',
    effect: 'Reduced enrofloxacin absorption (chelation)',
    management: 'Separate by 2 hours.' },
  { drugs: ['sucralfate', 'doxycycline'], severity: 'moderate',
    effect: 'Reduced doxycycline absorption',
    management: 'Separate by 2 hours.' },

  // Omeprazole + Sucralfate
  { drugs: ['omeprazole', 'sucralfate'], severity: 'moderate',
    effect: 'Sucralfate needs acid to activate · PPI reduces efficacy',
    management: 'Give sucralfate first, then PPI 30 min later.' },

  // Itraconazole interactions
  { drugs: ['itraconazole', 'omeprazole'], severity: 'moderate',
    effect: 'Reduced itraconazole absorption (capsule needs acid)',
    management: 'Use itraconazole oral solution (not capsule) if PPI needed.' },

  // Metronidazole + warnings
  { drugs: ['metronidazole', 'doxycycline'], severity: 'minor',
    effect: 'Both can cause GI upset (additive)',
    management: 'Monitor for GI signs · usually OK.' },

  // Methadone + benzo additive
  { drugs: ['methadone', 'midazolam'], severity: 'moderate',
    effect: 'Additive CNS + respiratory depression',
    management: 'Standard premed combo. Monitor RR, SpO2.' },

  // Levothyroxine + Sucralfate
  { drugs: ['levothyroxine', 'sucralfate'], severity: 'moderate',
    effect: 'Reduced levothyroxine absorption',
    management: 'Separate by 4 hours.' },

  // Insulin + Steroid
  { drugs: ['insulin-glargine', 'prednisolone'], severity: 'major',
    effect: 'Steroid-induced insulin resistance · hyperglycemia',
    management: 'Avoid if possible. If unavoidable, monitor BG closely + adjust insulin.' },

  // Cefovecin alone but interactions exist
  { drugs: ['cefovecin', 'meloxicam'], severity: 'moderate',
    effect: 'Both can be nephrotoxic in dehydrated patients',
    management: 'Ensure hydration. Monitor renal function.' },

  // Clindamycin + Erythromycin (theoretical antagonism)
  
  // Pimobendan — generally clean
  // Dexmedetomidine + Atropine
  { drugs: ['dexmedetomidine', 'butorphanol'], severity: 'minor',
    effect: 'Synergistic sedation (intentional combo)',
    management: 'Standard sedation combo. Expected effect.' },

  // ===== Phase 2b interactions =====

  // Acepromazine warnings
  { drugs: ['acepromazine', 'butorphanol'], severity: 'minor',
    effect: 'Synergistic sedation (intentional)',
    management: 'Common premed combo. Monitor BP.' },

  // Diazepam + cat oral
  { drugs: ['diazepam', 'midazolam'], severity: 'minor',
    effect: 'Both benzos · usually use one not both',
    management: 'Use either, not both.' },

  // Local anesthetics
  { drugs: ['lidocaine', 'bupivacaine'], severity: 'major',
    effect: 'Additive cardiotoxicity / CNS toxicity',
    management: 'NEVER mix. If sequential, wait 4 hours.' },

  // Morphine + maropitant (reduce vomiting)
  { drugs: ['morphine', 'maropitant'], severity: 'minor',
    effect: 'Maropitant prevents morphine-induced vomiting (intentional)',
    management: 'Standard pre-op combo.' },

  // Morphine + ACP standard premed
  { drugs: ['morphine', 'acepromazine'], severity: 'moderate',
    effect: 'Synergistic sedation + analgesia (intentional) but additive hypotension',
    management: 'Standard premed. Monitor BP.' },

  // Naloxone reverses opioids (clinical note)
  { drugs: ['naloxone', 'morphine'], severity: 'major',
    effect: 'Naloxone reverses morphine — expected reversal effect',
    management: 'Use to reverse overdose. Reverses analgesia too. Titrate.' },
  { drugs: ['naloxone', 'methadone'], severity: 'major',
    effect: 'Reversal · methadone half-life > naloxone — re-narcotization possible',
    management: 'Re-dose naloxone q30-60 min as needed.' },
  { drugs: ['naloxone', 'fentanyl'], severity: 'major',
    effect: 'Reversal · fentanyl re-narcotization risk',
    management: 'Naloxone CRI may be needed.' },
  { drugs: ['naloxone', 'hydromorphone'], severity: 'major',
    effect: 'Reversal',
    management: 'Titrate to effect.' },

  // Buprenorphine antagonizes pure mu (partial agonist)
  { drugs: ['buprenorphine', 'morphine'], severity: 'moderate',
    effect: 'Buprenorphine partially antagonizes morphine',
    management: 'Avoid combination · pick one strategy.' },
  { drugs: ['buprenorphine', 'methadone'], severity: 'moderate',
    effect: 'Partial antagonism',
    management: 'Not synergistic — pick one.' },
  { drugs: ['buprenorphine', 'fentanyl'], severity: 'moderate',
    effect: 'Partial antagonism',
    management: 'Avoid combination.' },

  // Butorphanol + buprenorphine (redundant)
  { drugs: ['butorphanol', 'buprenorphine'], severity: 'moderate',
    effect: 'Both partial · redundant, not synergistic',
    management: 'Pick one.' },

  // Gabapentin + opioids (additive sedation)
  { drugs: ['gabapentin', 'methadone'], severity: 'moderate',
    effect: 'Additive sedation',
    management: 'Standard chronic pain combo. Monitor for excessive sedation.' },
  { drugs: ['gabapentin', 'tramadol'], severity: 'moderate',
    effect: 'Additive CNS depression',
    management: 'Standard multimodal · titrate.' },

  // NSAIDs interactions (new ones)
  { drugs: ['robenacoxib', 'prednisolone'], severity: 'major',
    effect: 'GI ulceration · AKI',
    management: 'NEVER combine.' },
  { drugs: ['firocoxib', 'prednisolone'], severity: 'major',
    effect: 'GI ulceration · AKI',
    management: 'NEVER combine.' },
  { drugs: ['deracoxib', 'prednisolone'], severity: 'major',
    effect: 'GI ulceration · AKI',
    management: 'NEVER combine.' },
  { drugs: ['grapiprant', 'prednisolone'], severity: 'major',
    effect: 'Even with EP4-selective NSAID, avoid steroid combo',
    management: 'Avoid combination.' },

  // Multiple NSAIDs
  { drugs: ['firocoxib', 'meloxicam'], severity: 'major',
    effect: 'GI/renal toxicity additive',
    management: 'NEVER combine NSAIDs.' },
  { drugs: ['robenacoxib', 'meloxicam'], severity: 'major',
    effect: 'GI/renal toxicity additive',
    management: 'NEVER combine NSAIDs.' },

  // Anti-NGF + NSAID — actually OK (different mechanism)
  { drugs: ['bedinvetmab', 'meloxicam'], severity: 'minor',
    effect: 'No known harmful interaction · multimodal compatible',
    management: 'Can be combined for chronic OA. Standard NSAID monitoring still applies.' },
  { drugs: ['frunevetmab', 'meloxicam'], severity: 'minor',
    effect: 'No known harmful interaction',
    management: 'Multimodal OA management OK.' },

  // Paracetamol critical
  { drugs: ['paracetamol', 'meloxicam'], severity: 'major',
    effect: 'Hepatotoxicity additive (paracetamol metabolism)',
    management: 'Avoid combination · use NSAID alone.' },

  // Lidocaine cardiac CRI + propofol
  { drugs: ['lidocaine', 'propofol'], severity: 'minor',
    effect: 'Both reduce CV function · additive',
    management: 'Monitor BP closely. Standard MLK protocol uses both.' },

  // Etomidate + dexmedetomidine
  { drugs: ['etomidate', 'dexmedetomidine'], severity: 'minor',
    effect: 'Standard cardiac patient combo',
    management: 'Excellent cardiac stability combo.' },

  // Alfaxalone + dexmedetomidine
  { drugs: ['alfaxalone', 'dexmedetomidine'], severity: 'minor',
    effect: 'Synergistic sedation/anesthesia (intentional)',
    management: 'Standard combo. Monitor RR, HR.' },

  // Fentanyl CRI + lidocaine + ketamine = MLK/FLK
  { drugs: ['fentanyl', 'ketamine'], severity: 'minor',
    effect: 'FLK protocol (Fentanyl-Lidocaine-Ketamine) — synergistic analgesia',
    management: 'Standard multimodal CRI combo.' },

  // Diazepam + cat orally
  { drugs: ['diazepam', 'metronidazole'], severity: 'moderate',
    effect: 'Metronidazole inhibits diazepam metabolism',
    management: 'Reduce diazepam dose if combined.' },

  // ===== Phase 2c interactions =====

  // Beta-blocker + Ca channel blocker
  { drugs: ['atenolol', 'diltiazem'], severity: 'major',
    effect: 'Severe bradycardia · AV block · negative inotropy',
    management: 'NEVER combine routinely. Severe bradyarrhythmia risk.' },
  { drugs: ['atenolol', 'amlodipine'], severity: 'minor',
    effect: 'Additive antihypertensive (intentional)',
    management: 'OK · monitor BP.' },

  // ARB + ACE inhibitor (don't combine)
  { drugs: ['telmisartan', 'enalapril'], severity: 'major',
    effect: 'AKI · hyperkalemia · hypotension',
    management: 'NEVER combine ARB with ACEi.' },
  { drugs: ['telmisartan', 'benazepril'], severity: 'major',
    effect: 'AKI · hyperkalemia · hypotension',
    management: 'NEVER combine ARB with ACEi.' },

  // Telmisartan + NSAID
  { drugs: ['telmisartan', 'meloxicam'], severity: 'major',
    effect: 'AKI risk (RAAS blockade + NSAID)',
    management: 'Avoid combination. If unavoidable, monitor renal q3-7 days.' },
  { drugs: ['telmisartan', 'carprofen'], severity: 'major',
    effect: 'AKI risk',
    management: 'Avoid.' },

  // Benazepril + NSAID
  { drugs: ['benazepril', 'meloxicam'], severity: 'major',
    effect: 'AKI synergistic',
    management: 'Avoid · monitor renal if necessary.' },
  { drugs: ['benazepril', 'carprofen'], severity: 'major',
    effect: 'AKI synergistic',
    management: 'Avoid.' },

  // Benazepril + Spironolactone (CHF combo)
  { drugs: ['benazepril', 'spironolactone'], severity: 'moderate',
    effect: 'Hyperkalemia (additive)',
    management: 'Standard CHF combo. Monitor K weekly initially.' },

  // Digoxin interactions (narrow therapeutic window!)
  { drugs: ['digoxin', 'diltiazem'], severity: 'major',
    effect: 'Increased digoxin levels · toxicity risk',
    management: 'Reduce digoxin dose 25-50%. Monitor levels.' },
  { drugs: ['digoxin', 'furosemide'], severity: 'major',
    effect: 'HypoK from furosemide → digoxin toxicity',
    management: 'Monitor K · supplement if needed. Standard CHF combo with caution.' },
  { drugs: ['digoxin', 'spironolactone'], severity: 'moderate',
    effect: 'Reduced digoxin clearance · increased levels',
    management: 'Monitor digoxin level + K.' },
  { drugs: ['digoxin', 'erythromycin'], severity: 'moderate',
    effect: 'Increased digoxin levels',
    management: 'Avoid combination · monitor levels.' },

  // Sotalol pro-arrhythmia
  { drugs: ['sotalol', 'digoxin'], severity: 'moderate',
    effect: 'Additive bradycardia · AV block',
    management: 'Monitor ECG · adjust doses.' },

  // Mannitol + Furosemide
  { drugs: ['mannitol', 'furosemide'], severity: 'moderate',
    effect: 'Used together for AKI (controversial) · risk of dehydration',
    management: 'Sequential use OK. Monitor volume status carefully.' },

  // Metoclopramide + tramadol (serotonin)
  { drugs: ['metoclopramide', 'tramadol'], severity: 'moderate',
    effect: 'Theoretical serotonin syndrome',
    management: 'Use with caution.' },

  // Famotidine reduces drug absorption
  { drugs: ['famotidine', 'ketoconazole'], severity: 'moderate',
    effect: 'Reduced ketoconazole absorption (needs acid)',
    management: 'Use itraconazole or fluconazole instead.' },
  { drugs: ['famotidine', 'cefpodoxime'], severity: 'moderate',
    effect: 'Reduced cefpodoxime absorption',
    management: 'Separate by 2 hours.' },

  // Pantoprazole same concern as omeprazole
  { drugs: ['pantoprazole', 'sucralfate'], severity: 'moderate',
    effect: 'Sucralfate needs acid · reduced efficacy',
    management: 'Give sucralfate 30 min before PPI.' },
  { drugs: ['pantoprazole', 'itraconazole'], severity: 'moderate',
    effect: 'Reduced itraconazole capsule absorption',
    management: 'Use itraconazole oral solution instead.' },

  // Ondansetron + tramadol
  { drugs: ['ondansetron', 'tramadol'], severity: 'moderate',
    effect: 'Ondansetron may reduce tramadol analgesia',
    management: 'Use alternative antiemetic (maropitant) if tramadol critical.' },

  // Cisapride + QT
  { drugs: ['cisapride', 'erythromycin'], severity: 'major',
    effect: 'QT prolongation · arrhythmia',
    management: 'Avoid combination.' },
  { drugs: ['cisapride', 'itraconazole'], severity: 'major',
    effect: 'QT prolongation',
    management: 'Avoid.' },
  { drugs: ['cisapride', 'fluconazole'], severity: 'major',
    effect: 'QT prolongation',
    management: 'Avoid combination.' },

  // Cholestyramine binds drugs
  { drugs: ['cholestyramine', 'levothyroxine'], severity: 'major',
    effect: 'Marked reduction in levothyroxine absorption',
    management: 'Separate by 4 hours.' },
  { drugs: ['cholestyramine', 'digoxin'], severity: 'moderate',
    effect: 'Reduced digoxin absorption',
    management: 'Separate by 2 hours.' },
  { drugs: ['cholestyramine', 'ursodiol'], severity: 'moderate',
    effect: 'Cholestyramine binds bile acids — antagonizes ursodiol',
    management: 'Avoid combination · pick one.' },

  // Hydralazine + diuretic
  { drugs: ['hydralazine', 'furosemide'], severity: 'moderate',
    effect: 'Additive hypotension',
    management: 'Standard refractory CHF combo · titrate carefully.' },

  // Lactulose + oral antibiotics (HE)
  { drugs: ['lactulose', 'metronidazole'], severity: 'minor',
    effect: 'Synergy in hepatic encephalopathy (intentional)',
    management: 'Standard HE combo.' },

  // Amlodipine + ACE inhibitor (intentional combo)
  { drugs: ['amlodipine', 'benazepril'], severity: 'minor',
    effect: 'Additive antihypertensive (intentional cat combo)',
    management: 'Standard for severe hypertension.' },
  { drugs: ['amlodipine', 'telmisartan'], severity: 'minor',
    effect: 'Additive antihypertensive (intentional)',
    management: 'Standard combo for severe cat hypertension.' },

  // Torsemide same as furosemide
  { drugs: ['torsemide', 'enalapril'], severity: 'moderate',
    effect: 'Additive hypotension · azotemia',
    management: 'Standard refractory CHF combo · monitor BP, renal.' },
  { drugs: ['torsemide', 'digoxin'], severity: 'major',
    effect: 'HypoK potentiates digoxin toxicity',
    management: 'Monitor K · supplement if needed.' },

  // SAMe + serotonergic
  { drugs: ['sam-e', 'tramadol'], severity: 'moderate',
    effect: 'Theoretical serotonin syndrome',
    management: 'Use with caution.' },

  // ===== Phase 2d interactions =====

  // Trilostane + ACEi/Spironolactone (HyperK risk)
  { drugs: ['trilostane', 'benazepril'], severity: 'moderate',
    effect: 'Hyperkalemia (additive K-sparing effect)',
    management: 'Monitor K. Caution in CHF dogs with both meds.' },
  { drugs: ['trilostane', 'enalapril'], severity: 'moderate',
    effect: 'Hyperkalemia',
    management: 'Monitor K weekly initially.' },
  { drugs: ['trilostane', 'spironolactone'], severity: 'moderate',
    effect: 'Hyperkalemia (additive)',
    management: 'Avoid combination if possible.' },

  // Mitotane + replacement steroid (often needed)
  { drugs: ['mitotane', 'prednisolone'], severity: 'minor',
    effect: 'Replacement therapy during induction (intentional)',
    management: 'Standard practice during mitotane induction.' },

  // Methimazole + Warfarin
  { drugs: ['methimazole', 'aspirin'], severity: 'moderate',
    effect: 'Increased bleeding risk',
    management: 'Avoid combination. Use clopidogrel if antiplatelet needed.' },

  // Carbimazole same as methimazole
  { drugs: ['carbimazole', 'aspirin'], severity: 'moderate',
    effect: 'Increased bleeding risk (carbimazole = methimazole prodrug)',
    management: 'Avoid combination.' },

  // Insulin + Steroids (all formulations)
  { drugs: ['nph-insulin', 'prednisolone'], severity: 'major',
    effect: 'Steroid-induced insulin resistance · hyperglycemia',
    management: 'Avoid if possible. Monitor BG closely + adjust insulin.' },
  { drugs: ['pzi-insulin', 'prednisolone'], severity: 'major',
    effect: 'Insulin resistance',
    management: 'Avoid · monitor BG.' },
  { drugs: ['vetsulin', 'prednisolone'], severity: 'major',
    effect: 'Insulin resistance',
    management: 'Avoid · monitor BG.' },

  // Oxytocin + obstruction warning is clinical (not drug-drug)
  // Oxytocin + epinephrine (antagonism)
  // (No epinephrine entry yet — defer)

  // Cabergoline + metoclopramide (antagonism)
  { drugs: ['cabergoline', 'metoclopramide'], severity: 'major',
    effect: 'Direct antagonism (cabergoline = D2 agonist, metoclopramide = D2 antagonist)',
    management: 'NEVER combine — cancels effect of cabergoline.' },

  // PPA + sympathomimetics
  { drugs: ['phenylpropanolamine', 'dexmedetomidine'], severity: 'moderate',
    effect: 'Hypertension (PPA + alpha-2 agonist)',
    management: 'Avoid combination · severe BP changes.' },

  // PPA + estriol (intentional combo)
  { drugs: ['phenylpropanolamine', 'estriol'], severity: 'minor',
    effect: 'Synergistic for USMI (intentional)',
    management: 'Standard combination Rx for refractory USMI.' },

  // Heparin / LMWH bleeding
  { drugs: ['heparin', 'meloxicam'], severity: 'major',
    effect: 'Severe bleeding risk',
    management: 'Avoid combination. NSAID washout before anticoagulation.' },
  { drugs: ['heparin', 'aspirin'], severity: 'major',
    effect: 'Bleeding risk',
    management: 'Avoid combination unless specific indication + close monitoring.' },
  { drugs: ['heparin', 'clopidogrel'], severity: 'major',
    effect: 'Bleeding risk',
    management: 'Avoid combination outside ICU monitoring.' },
  { drugs: ['enoxaparin', 'meloxicam'], severity: 'major',
    effect: 'Severe bleeding risk',
    management: 'Avoid combination.' },
  { drugs: ['enoxaparin', 'clopidogrel'], severity: 'moderate',
    effect: 'Standard cat ATE prevention combo (intentional, but bleeding risk)',
    management: 'Standard FATCAT-era ATE protocol. Monitor for bleeding.' },
  { drugs: ['enoxaparin', 'aspirin'], severity: 'major',
    effect: 'Bleeding risk',
    management: 'Avoid · use clopidogrel for antiplatelet instead.' },

  // Clopidogrel + Omeprazole (CYP2C19)
  { drugs: ['clopidogrel', 'omeprazole'], severity: 'moderate',
    effect: 'Reduced clopidogrel activation (CYP2C19 inhibition)',
    management: 'Use famotidine or pantoprazole instead.' },
  { drugs: ['clopidogrel', 'pantoprazole'], severity: 'minor',
    effect: 'Less CYP2C19 inhibition than omeprazole',
    management: 'Acceptable PPI choice with clopidogrel.' },

  // Clopidogrel + NSAID
  { drugs: ['clopidogrel', 'meloxicam'], severity: 'major',
    effect: 'Bleeding · GI ulceration',
    management: 'Avoid combination.' },
  { drugs: ['clopidogrel', 'carprofen'], severity: 'major',
    effect: 'Bleeding · GI ulceration',
    management: 'Avoid combination.' },

  // Aspirin + others
  { drugs: ['aspirin', 'meloxicam'], severity: 'major',
    effect: 'Severe GI ulceration · AKI · NSAID-NSAID',
    management: 'NEVER combine.' },
  { drugs: ['aspirin', 'carprofen'], severity: 'major',
    effect: 'NSAID-NSAID stack',
    management: 'NEVER combine.' },
  { drugs: ['aspirin', 'prednisolone'], severity: 'major',
    effect: 'GI ulceration · perforation',
    management: 'NEVER combine.' },

  // Rivaroxaban + Azoles (CYP3A4)
  { drugs: ['rivaroxaban', 'itraconazole'], severity: 'major',
    effect: 'Increased rivaroxaban levels · bleeding',
    management: 'Avoid combination. Use heparin/LMWH instead.' },
  { drugs: ['rivaroxaban', 'ketoconazole'], severity: 'major',
    effect: 'Increased rivaroxaban levels',
    management: 'Avoid combination.' },
  { drugs: ['rivaroxaban', 'meloxicam'], severity: 'major',
    effect: 'Bleeding risk',
    management: 'Avoid combination.' },
  { drugs: ['rivaroxaban', 'clopidogrel'], severity: 'major',
    effect: 'Additive bleeding',
    management: 'Avoid combination unless specific indication.' },

  // Vitamin K1 reverses warfarin/rodenticides (clinical use)
  // (No warfarin entry yet)

  // Erythropoietin + iron deficiency (clinical note)
  // EPO needs iron — clinical pearl, not drug-drug

  // Desmopressin + NSAIDs
  { drugs: ['desmopressin', 'meloxicam'], severity: 'moderate',
    effect: 'Increased water retention · hyponatremia risk',
    management: 'Monitor electrolytes if combined.' },

  // Insulin + ACE inhibitor (theoretical)
  { drugs: ['nph-insulin', 'enalapril'], severity: 'minor',
    effect: 'Theoretical enhanced insulin sensitivity',
    management: 'Generally OK · monitor BG.' },

  // ===== Phase 2e interactions =====

  // Cyclosporine + Azoles (intentional cost-saving)
  { drugs: ['cyclosporine', 'ketoconazole'], severity: 'major',
    effect: 'Massive ↑ cyclosporine levels (CYP3A4 inhibition) — sometimes intentional cost-sparing',
    management: 'Reduce cyclosporine 50-75% if combined intentionally. Monitor whole blood levels.' },
  { drugs: ['cyclosporine', 'itraconazole'], severity: 'major',
    effect: '↑ cyclosporine levels',
    management: 'Reduce dose or monitor levels.' },
  { drugs: ['cyclosporine', 'fluconazole'], severity: 'moderate',
    effect: '↑ cyclosporine levels (less than itraconazole)',
    management: 'Monitor levels.' },

  // Cyclosporine + erythromycin
  { drugs: ['cyclosporine', 'erythromycin'], severity: 'major',
    effect: '↑ cyclosporine levels (CYP3A4)',
    management: 'Avoid combination · use azithromycin if macrolide needed.' },
  { drugs: ['cyclosporine', 'metoclopramide'], severity: 'moderate',
    effect: 'Increased cyclosporine levels',
    management: 'Monitor cyclosporine levels.' },

  // Cyclosporine + NSAIDs (renal)
  { drugs: ['cyclosporine', 'meloxicam'], severity: 'moderate',
    effect: 'Additive nephrotoxicity',
    management: 'Monitor renal function closely.' },
  { drugs: ['cyclosporine', 'carprofen'], severity: 'moderate',
    effect: 'Additive nephrotoxicity',
    management: 'Monitor renal function.' },

  // Oclacitinib + immunosuppressants
  { drugs: ['oclacitinib', 'cyclosporine'], severity: 'moderate',
    effect: 'Additive immunosuppression · infection risk',
    management: 'Avoid combination unless necessary.' },
  { drugs: ['oclacitinib', 'prednisolone'], severity: 'moderate',
    effect: 'Additive immunosuppression',
    management: 'Avoid combination.' },

  // Lokivetmab safer combinations
  { drugs: ['lokivetmab', 'cyclosporine'], severity: 'minor',
    effect: 'Compatible · different mechanisms',
    management: 'Can be combined for refractory atopy.' },
  { drugs: ['lokivetmab', 'oclacitinib'], severity: 'minor',
    effect: 'Compatible · different mechanisms',
    management: 'Can combine.' },

  // Antihistamines additive sedation
  { drugs: ['diphenhydramine', 'acepromazine'], severity: 'moderate',
    effect: 'Additive sedation + anticholinergic',
    management: 'Combo sometimes used pre-vaccine — monitor.' },
  { drugs: ['hydroxyzine', 'tramadol'], severity: 'minor',
    effect: 'Additive sedation',
    management: 'Monitor sedation.' },

  // Latanoprost + uveitis warning (clinical, not drug-drug)
  // Topical eye + systemic beta-blocker
  { drugs: ['timolol', 'atenolol'], severity: 'moderate',
    effect: 'Additive systemic beta-blockade · bradycardia',
    management: 'Monitor HR · reduce systemic dose if combined.' },
  { drugs: ['timolol', 'diltiazem'], severity: 'moderate',
    effect: 'Additive bradycardia',
    management: 'Avoid combination · monitor HR.' },

  // Otic + ototoxic warnings
  { drugs: ['otic-mometamax', 'gentamicin'], severity: 'minor',
    effect: 'Both contain aminoglycoside (gent) — clinical pearl on perforation',
    management: 'Verify intact tympanum before topical gent. Avoid systemic + otic gent simultaneously.' },

  // Atropine ophthalmic + KCS dogs
  { drugs: ['atropine-ophthalmic', 'cyclosporine'], severity: 'minor',
    effect: 'Atropine reduces tear production · cyclosporine increases',
    management: 'KCS dogs: don\'t use atropine eye drops.' },

  // Tacrolimus + cyclosporine (similar mechanism)
  { drugs: ['tacrolimus', 'cyclosporine'], severity: 'major',
    effect: 'Same mechanism (calcineurin inhibition) · additive nephrotoxicity / over-immunosuppression',
    management: 'Avoid combination.' },

  // Epinephrine critical interactions
  { drugs: ['epinephrine', 'atenolol'], severity: 'major',
    effect: 'Paradoxical hypertension (unopposed alpha) · bradycardia',
    management: 'Caution in patient on beta-blocker · use lower epi dose.' },
  { drugs: ['epinephrine', 'acepromazine'], severity: 'major',
    effect: 'Paradoxical hypotension (acepromazine reverses alpha effect)',
    management: 'NEVER use epi to reverse acepromazine hypotension · use phenylephrine instead.' },
  { drugs: ['epinephrine', 'oxytocin'], severity: 'moderate',
    effect: 'Antagonism · epi reduces oxytocin effect',
    management: 'Don\'t combine in obstetric emergencies.' },

  // Chlorhexidine concentration warning (clinical)
  // Miconazole shampoo + systemic antifungal (intentional combo for ringworm)
  { drugs: ['miconazole-shampoo', 'itraconazole'], severity: 'minor',
    effect: 'Synergy for ringworm Rx (intentional)',
    management: 'Standard dermatophyte protocol.' },
  { drugs: ['miconazole-shampoo', 'terbinafine'], severity: 'minor',
    effect: 'Synergy for ringworm Rx',
    management: 'Standard combo Rx.' },

  // ===== Phase 2f interactions =====

  // Atropine + Dexmedetomidine
  { drugs: ['atropine', 'dexmedetomidine'], severity: 'major',
    effect: 'Severe hypertension (atropine reverses bradycardia but not hypertension component)',
    management: 'Don\'t routinely combine. Use only for severe bradycardia symptomatic.' },

  // Glycopyrrolate alternative
  { drugs: ['glycopyrrolate', 'dexmedetomidine'], severity: 'moderate',
    effect: 'Less hypertension than atropine but still combo concern',
    management: 'Avoid prophylactic combination.' },

  // Theophylline interactions (HUGE)
  { drugs: ['theophylline', 'enrofloxacin'], severity: 'major',
    effect: 'Massive ↑ theophylline · seizures, arrhythmia',
    management: 'Reduce theophylline 50% or use alternative antibiotic.' },
  { drugs: ['theophylline', 'marbofloxacin'], severity: 'major',
    effect: '↑ theophylline levels',
    management: 'Reduce theophylline dose.' },
  { drugs: ['theophylline', 'erythromycin'], severity: 'major',
    effect: '↑ theophylline (CYP1A2)',
    management: 'Avoid combination · use azithromycin if macrolide needed.' },
  { drugs: ['theophylline', 'phenobarbital'], severity: 'moderate',
    effect: '↓ theophylline levels (induces metabolism)',
    management: 'May need higher theophylline dose.' },

  // Terbutaline + beta-blocker
  { drugs: ['terbutaline', 'atenolol'], severity: 'major',
    effect: 'Direct antagonism (β-agonist vs β-blocker)',
    management: 'NEVER combine — cancels effect of terbutaline.' },
  { drugs: ['terbutaline', 'timolol'], severity: 'moderate',
    effect: 'Systemic beta-blockade may reduce terbutaline efficacy',
    management: 'Avoid if asthma · ophthalmic timolol caution.' },

  // Calcium gluconate critical
  { drugs: ['calcium-gluconate', 'digoxin'], severity: 'major',
    effect: 'Calcium potentiates digoxin toxicity · arrhythmia',
    management: 'AVOID rapid Ca in digitalized patient. Check digoxin level + ECG.' },
  { drugs: ['calcium-gluconate', 'ceftriaxone'], severity: 'major',
    effect: 'Precipitate (insoluble Ca-ceftriaxone) · fatal in IV',
    management: 'NEVER mix in same IV line. Separate by hours.' },

  // Apomorphine + antiemetic
  { drugs: ['apomorphine', 'maropitant'], severity: 'major',
    effect: 'Maropitant blocks emetic effect',
    management: 'Don\'t give maropitant before apomorphine. If already on maropitant, induce emesis differently.' },
  { drugs: ['apomorphine', 'ondansetron'], severity: 'major',
    effect: 'Reduces apomorphine emetic effect',
    management: 'Don\'t combine for decontamination.' },

  // Atropine + tramadol
  { drugs: ['atropine', 'diphenhydramine'], severity: 'minor',
    effect: 'Additive anticholinergic (mild)',
    management: 'Generally OK · avoid in glaucoma patient.' },

  // Pralidoxime needs atropine
  { drugs: ['pralidoxime', 'atropine'], severity: 'minor',
    effect: 'Synergistic for OP toxicity (intentional combo)',
    management: 'Standard OP toxicity protocol — both essential.' },

  // Atipamezole reverses dexmed (clinical)
  { drugs: ['atipamezole', 'dexmedetomidine'], severity: 'minor',
    effect: 'Specific reversal (intentional)',
    management: 'Same volume as dexmed given. Don\'t reverse if surgical pain expected.' },

  // Flumazenil reverses midazolam
  { drugs: ['flumazenil', 'midazolam'], severity: 'minor',
    effect: 'Specific reversal (intentional)',
    management: 'Watch for re-sedation if midazolam half-life > flumazenil.' },
  { drugs: ['flumazenil', 'diazepam'], severity: 'minor',
    effect: 'Specific reversal · diazepam half-life much longer than flumazenil',
    management: 'Re-dose flumazenil q20-30 min as needed.' },

  // Methocarbamol additive sedation
  { drugs: ['methocarbamol', 'gabapentin'], severity: 'moderate',
    effect: 'Additive CNS depression (sedation)',
    management: 'Standard IVDD multimodal · monitor sedation.' },

  // Dopamine + MAOI / TCA
  { drugs: ['dopamine', 'phenobarbital'], severity: 'minor',
    effect: 'Generally compatible',
    management: 'Standard ICU compatible.' },

  // Dobutamine + beta-blocker
  { drugs: ['dobutamine', 'atenolol'], severity: 'major',
    effect: 'Direct antagonism (dobutamine = β1 agonist vs atenolol = β1 blocker)',
    management: 'Avoid · use alternative inotrope (dopamine, calcium).' },

  // NAC + activated charcoal (clinical pearl, not in our DB)
  
  // Selamectin + ivermectin (similar class but not commonly combined)
  
  // Sarolaner + isoxazoline class (don't combine)
  { drugs: ['sarolaner', 'fluralaner'], severity: 'major',
    effect: 'Same class (isoxazoline) — overdose risk',
    management: 'NEVER use 2 isoxazolines simultaneously. Wait for previous to clear.' },

  // Pyrantel + piperazine (antagonism)
  // (No piperazine entry)

  // Fenbendazole + pregnancy SAFE (clinical pearl)
  
  // NSAIDs + apomorphine (clinical: avoid emesis if NSAID in stomach already absorbing)
  
  // Imidacloprid+moxidectin + selamectin (don't combine)
  { drugs: ['imidacloprid-moxidectin', 'selamectin'], severity: 'moderate',
    effect: 'Same class (macrocyclic lactone) — overdose risk',
    management: 'Don\'t use simultaneously. Pick one monthly preventive.' },

  // Vasopressin + epinephrine (CPR alternatives)
  { drugs: ['vasopressin', 'epinephrine'], severity: 'minor',
    effect: 'Both used in CPR — sometimes alternated',
    management: 'Standard ALS protocol.' },

];

window.PHARMACOLOGY_DATA_LOADED = true;
