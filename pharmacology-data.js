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
];

window.PHARMACOLOGY_DATA_LOADED = true;
