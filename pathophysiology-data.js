/* ===========================================================================
   pk · Pathophysiology Handbook — pathophysiology-data.js
   ----------------------------------------------------------------------------
   เนื้อหาเชิงโครงสร้างอิง:
   • Stephan Neumann "The Textbook of Small Animal Pathophysiology"
   เนื้อหาเรียบเรียงใหม่โดย Alex สำหรับ pk
   ภาษาไทยเป็นหลัก · medical term ทับศัพท์
   =========================================================================== */

window.PATHOPHYSIOLOGY_DATA = [

  /* ============================================================
     Phase 1 — General Principles
     ============================================================ */

  {
    id: 'path-cell-injury',
    titleEn: 'Cell Injury & Cell Death',
    titleTh: 'การบาดเจ็บและการตายของเซลล์',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['cell injury', 'apoptosis', 'necrosis', 'autophagy', 'reversible', 'irreversible'],
    aliases: ['การตายของเซลล์', 'cellular pathology'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Cell Injury</strong> — การเปลี่ยนแปลงโครงสร้างหรือการทำงานของเซลล์เมื่อเจอ stress เกิน adaptive capacity</p>
        <ul>
          <li>⭐ <strong>Reversible vs Irreversible</strong> — ขึ้นอยู่กับความรุนแรง + ระยะเวลา</li>
          <li>Irreversible injury → cell death</li>
          <li>2 รูปแบบหลักของ cell death: <strong>Apoptosis</strong> (programmed) และ <strong>Necrosis</strong> (uncontrolled)</li>
          <li>รูปแบบใหม่: <strong>Autophagy, Necroptosis, Pyroptosis, Ferroptosis</strong></li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Apoptosis vs Necrosis — เปรียบเทียบ</span>
          <table>
            <tr><th>Feature</th><th>Apoptosis</th><th>Necrosis</th></tr>
            <tr><td><strong>Trigger</strong></td><td>Programmed · physiologic</td><td>Uncontrolled · pathologic</td></tr>
            <tr><td><strong>Cell size</strong></td><td>Shrinks</td><td>Swells</td></tr>
            <tr><td><strong>Membrane</strong></td><td>Intact (initially)</td><td>Disrupted</td></tr>
            <tr><td><strong>Chromatin</strong></td><td>Condensed, fragmented</td><td>Pyknosis → karyolysis</td></tr>
            <tr><td><strong>Inflammation</strong></td><td>⭐ ไม่มี (silent)</td><td>⚠️ ใช่ (pronounced)</td></tr>
            <tr><td><strong>ATP requirement</strong></td><td>ต้องการ (active)</td><td>ไม่ต้องการ (passive)</td></tr>
            <tr><td><strong>Pathway</strong></td><td>Caspases (intrinsic/extrinsic)</td><td>Cellular catastrophe</td></tr>
            <tr><td><strong>Examples</strong></td><td>Embryogenesis, immune cell turnover</td><td>Ischemia, toxin, trauma</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Apoptosis = "เซลล์ลาออกเงียบๆ" · ไม่ทำให้ใครเดือดร้อน<br>
          📌 ⭐ Necrosis = "เซลล์ตายดราม่า" · ระเบิดของแล้วเลอะ → inflammation<br>
          📌 ใน real cases มักเจอผสมกัน (mixed pattern)</p>
        </div>
      `,
      etiology: `
        <p><strong>สาเหตุของ cell injury (8 หมวด):</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">"HOTI-PINGS" — สาเหตุ Cell Injury</span>
          <ul>
            <li><strong>H</strong>ypoxia / Ischemia — สาเหตุที่พบบ่อยที่สุด</li>
            <li><strong>O</strong>xidative stress — ROS, free radicals</li>
            <li><strong>T</strong>oxic / Chemical — drugs, poisons (ethylene glycol, paracetamol)</li>
            <li><strong>I</strong>nfectious — bacteria, virus, parasites</li>
            <li><strong>P</strong>hysical — trauma, heat, cold, radiation</li>
            <li><strong>I</strong>mmune — autoimmune, hypersensitivity</li>
            <li><strong>N</strong>utritional — deficiency / excess</li>
            <li><strong>G</strong>enetic — inherited disorders</li>
            <li><strong>S</strong>enescence — aging, telomere shortening</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>Hypoxia/ischemia = #1 cause</strong> ของ cell injury<br>
          📌 หลายสาเหตุ → final common pathway = ATP depletion + ROS + Ca dysregulation</p>
        </div>

        <p><strong>Hypoxia subtypes:</strong></p>
        <ul>
          <li><strong>Hypoxemic</strong> — ↓ PaO2 (lung disease, high altitude)</li>
          <li><strong>Anemic</strong> — ↓ Hgb หรือ ↓ RBC oxygen binding (CO poisoning, methemoglobinemia)</li>
          <li><strong>Stagnant/Ischemic</strong> — ↓ blood flow (shock, thrombosis)</li>
          <li><strong>Histotoxic</strong> — เซลล์ใช้ O2 ไม่ได้ (cyanide, severe sepsis)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Reversible injury — Cellular changes:</strong></p>
        <ol>
          <li>ATP depletion (จาก ↓ oxidative phosphorylation)</li>
          <li>Na/K-ATPase fail → cell swelling (cellular edema)</li>
          <li>Ribosome detachment → ↓ protein synthesis</li>
          <li>Glycogen depletion · ↑ lactate (anaerobic glycolysis)</li>
          <li>Mitochondrial swelling</li>
          <li>Membrane blebbing (mild)</li>
        </ol>

        <p><strong>Point of no return → Irreversible injury:</strong></p>
        <ol>
          <li>Severe mitochondrial damage (irreversible permeability transition)</li>
          <li>Massive Ca²⁺ influx → activates phospholipases, proteases, endonucleases</li>
          <li>Membrane disruption (lysosomal + plasma)</li>
          <li>Profound ATP depletion (&lt; 10% normal)</li>
          <li>Cell death</li>
        </ol>

        <div class="mnemonic numbers">
          <span class="mnem-title">Key Cellular Players ใน Cell Death</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Ca²⁺</span>
              <span class="num-label">Calcium overload — final blow</span>
            </div>
            <div class="num-card">
              <span class="num-big">ROS</span>
              <span class="num-label">Reactive oxygen species</span>
            </div>
            <div class="num-card">
              <span class="num-big">ATP</span>
              <span class="num-label">Energy depletion</span>
            </div>
            <div class="num-card">
              <span class="num-big">Mito</span>
              <span class="num-label">Mitochondrial dysfunction</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>"Ca²⁺ + ROS + ATP↓"</strong> = lethal triad of cell injury<br>
          📌 Mitochondria = central regulator (intrinsic apoptosis pathway)</p>
        </div>

        <p><strong>Apoptosis pathways (2):</strong></p>
        <ul>
          <li><strong>Intrinsic (mitochondrial)</strong>:
            <ul>
              <li>Internal stress → ↑ Bax/Bak, ↓ Bcl-2</li>
              <li>Cytochrome c released → apoptosome → caspase-9 → caspase-3</li>
            </ul>
          </li>
          <li><strong>Extrinsic (death receptor)</strong>:
            <ul>
              <li>External signal (TNF, Fas-L)</li>
              <li>Death receptor → caspase-8 → caspase-3</li>
            </ul>
          </li>
          <li>Convergence: <strong>caspase-3 (executioner)</strong> → DNA fragmentation, cytoskeletal breakdown</li>
        </ul>

        <p><strong>Necrosis morphologic patterns:</strong></p>
        <ul>
          <li><strong>Coagulative</strong> — ischemic infarct (most organs except brain)</li>
          <li><strong>Liquefactive</strong> — brain infarct, abscess</li>
          <li><strong>Caseous</strong> — TB granuloma · "cheese-like"</li>
          <li><strong>Fat necrosis</strong> — pancreatitis, trauma</li>
          <li><strong>Fibrinoid</strong> — vessel walls in vasculitis</li>
          <li><strong>Gangrene</strong> — extremity tissue death (dry/wet)</li>
        </ul>
      `,
      symptoms: `
        <p>Cell injury เป็น microscopic process — <strong>clinical signs ขึ้นกับอวัยวะ</strong>:</p>

        <ul>
          <li><strong>Cardiac myocyte injury</strong> (MI, myocarditis):
            <ul>
              <li>↑ cTnI in serum</li>
              <li>Arrhythmia, contractile dysfunction</li>
              <li>CHF if extensive</li>
            </ul>
          </li>
          <li><strong>Hepatocyte injury</strong> (toxin, hypoxia):
            <ul>
              <li>↑ ALT, AST</li>
              <li>↓ albumin, ↑ bilirubin (if extensive)</li>
              <li>Coagulopathy</li>
            </ul>
          </li>
          <li><strong>Renal tubular injury</strong> (AKI):
            <ul>
              <li>↑ BUN, creatinine</li>
              <li>Oliguria/anuria</li>
              <li>Casts in urinalysis</li>
            </ul>
          </li>
          <li><strong>Skeletal muscle injury</strong>:
            <ul>
              <li>↑ CK</li>
              <li>Myoglobinuria (red-brown urine)</li>
            </ul>
          </li>
          <li><strong>Pancreatic acinar injury</strong>:
            <ul>
              <li>↑ Spec cPL/fPL</li>
              <li>Abdominal pain, vomiting</li>
            </ul>
          </li>
          <li><strong>Neurons</strong>: เสียหายมักถาวร (limited regeneration)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Approach to documenting cell injury:</strong></p>

        <ul>
          <li><strong>Serum biomarkers</strong> (organ-specific enzymes):
            <ul>
              <li>Liver: ALT (hepatocyte), ALP (cholestasis)</li>
              <li>Heart: cTnI</li>
              <li>Muscle: CK</li>
              <li>Pancreas: Spec cPL/fPL</li>
              <li>Kidney: SDMA, creatinine, BUN</li>
            </ul>
          </li>
          <li><strong>Urinalysis</strong>: tubular casts, glucosuria (without DM), proteinuria</li>
          <li><strong>Imaging</strong>: ultrasound for organ architecture, CT/MRI for infarct</li>
          <li><strong>Histopathology</strong>: gold standard — biopsy or necropsy
            <ul>
              <li>H&E: nuclear changes (pyknosis, karyorrhexis, karyolysis)</li>
              <li>TUNEL stain: apoptosis</li>
              <li>Immunohistochemistry: caspase-3 (apoptosis marker)</li>
            </ul>
          </li>
          <li><strong>Cytology</strong>: aspirates from mass/effusion</li>
        </ul>
      `,
      treatment: `
        <p><strong>Principles of management:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Cell Injury Management — "ROAD"</span>
          <ul>
            <li><strong>R</strong>emove the insult — eliminate/treat underlying cause</li>
            <li><strong>O</strong>xygenation — restore tissue O2 (fluids, O2, blood)</li>
            <li><strong>A</strong>ntioxidants — quench ROS (NAC, SAMe, vitamin E)</li>
            <li><strong>D</strong>amage control — supportive care, organ-specific Rx</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Restore perfusion FAST · time = tissue<br>
          📌 ⚠️ Reperfusion injury — ROS generated when blood flow returns · ใช้ NAC/antioxidant ช่วย</p>
        </div>

        <p><strong>Specific interventions:</strong></p>
        <ul>
          <li><strong>NAC (N-acetylcysteine)</strong> — paracetamol toxicity, replenish glutathione</li>
          <li><strong>SAMe</strong> — hepatoprotection, antioxidant precursor</li>
          <li><strong>Vitamin E + Selenium</strong> — antioxidant cofactors</li>
          <li><strong>Mannitol/Furosemide</strong> — reduce cellular swelling (selected cases)</li>
          <li><strong>Cooling</strong> — therapeutic hypothermia (CPR cases)</li>
          <li><strong>Avoid further insult</strong> — drug review, contraindicated meds</li>
        </ul>

        <p><strong>Tissue regeneration capacity:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Cell Types — Regenerative Potential</span>
          <table>
            <tr><th>Type</th><th>Examples</th><th>Regeneration</th></tr>
            <tr><td><strong>Labile</strong></td><td>Hematopoietic, GI epithelium, skin</td><td>⭐ Continuous (excellent)</td></tr>
            <tr><td><strong>Stable</strong></td><td>Liver, kidney tubule, smooth muscle</td><td>Quiescent · activate when needed</td></tr>
            <tr><td><strong>Permanent</strong></td><td>Neurons, cardiac myocytes</td><td>⚠️ Minimal/none · scar formation</td></tr>
          </table>
          <p class="mnem-tip">📌 Liver = "champion of regeneration" (up to 75% can be removed)<br>
          📌 Cardiac MI = scar tissue (no regeneration) · neurons = same fate</p>
        </div>
      `,
      complications: `
        <ul>
          <li><strong>Organ dysfunction</strong> — acute or chronic</li>
          <li><strong>Inflammation</strong> — necrotic cells release DAMPs (HMGB1, ATP, DNA)</li>
          <li><strong>Fibrosis</strong> — chronic injury → scar replacement</li>
          <li><strong>SIRS / sepsis</strong> — massive necrosis can trigger systemic inflammation</li>
          <li><strong>MOF (multiorgan failure)</strong> — cascade injury</li>
          <li><strong>Neoplasia</strong> — chronic cell injury + repair → mutations</li>
          <li><strong>Calcification</strong> — dystrophic (in necrotic tissue) or metastatic (hypercalcemia)</li>
          <li><strong>Atrophy</strong> — chronic sublethal injury</li>
        </ul>

        <p><strong>Cellular adaptations to stress (ก่อน injury):</strong></p>
        <ul>
          <li><strong>Hypertrophy</strong> — ↑ cell size (cardiac muscle in HCM)</li>
          <li><strong>Hyperplasia</strong> — ↑ cell number (mammary tissue, BPH)</li>
          <li><strong>Atrophy</strong> — ↓ cell size (disuse muscle)</li>
          <li><strong>Metaplasia</strong> — change cell type (squamous metaplasia in vit A def)</li>
          <li><strong>Dysplasia</strong> — disordered growth (precancerous)</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-inflammation',
    titleEn: 'Inflammation — Acute & Chronic',
    titleTh: 'การอักเสบ',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['inflammation', 'acute', 'chronic', 'cytokines', 'leukocytes', 'mediators'],
    aliases: ['การอักเสบ', 'inflammatory response'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Inflammation</strong> — protective host response ต่อ tissue injury หรือ infection · เพื่อกำจัด insult และ initiate repair</p>
        <ul>
          <li>⭐ <strong>Double-edged sword</strong> — protective in acute, harmful when chronic/excessive</li>
          <li>2 phases: <strong>Acute</strong> (minutes-days) และ <strong>Chronic</strong> (weeks-months-years)</li>
          <li>Local และ/หรือ systemic</li>
          <li>Coordinated by cells + soluble mediators</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">5 Cardinal Signs ของ Inflammation (Celsus + Virchow)</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Rubor</span>
              <span class="num-label">แดง (vasodilation)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Calor</span>
              <span class="num-label">ร้อน (↑ blood flow)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Tumor</span>
              <span class="num-label">บวม (edema)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Dolor</span>
              <span class="num-label">เจ็บ (mediators)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ + <strong>Functio laesa</strong> (loss of function) — Virchow added 5th sign<br>
          📌 จำง่าย: "RCTD-F" หรือ "ร้อน-แดง-บวม-เจ็บ-เสียหน้าที่"</p>
        </div>
      `,
      etiology: `
        <p><strong>Triggers ของ inflammation:</strong></p>
        <ul>
          <li><strong>Infectious</strong> — bacteria, virus, fungi, parasites · PAMPs (pathogen-associated molecular patterns)</li>
          <li><strong>Tissue necrosis</strong> — ischemia, trauma · DAMPs (damage-associated molecular patterns)</li>
          <li><strong>Foreign bodies</strong> — sutures, splinters</li>
          <li><strong>Immune reactions</strong> — autoimmune, hypersensitivity</li>
          <li><strong>Chemical/physical injury</strong> — burns, frostbite, toxins</li>
          <li><strong>Neoplasia</strong> — tumor antigens, peripheral inflammation</li>
        </ul>

        <p><strong>Pattern recognition receptors (PRRs):</strong></p>
        <ul>
          <li><strong>TLRs (Toll-like receptors)</strong> — recognize PAMPs/DAMPs</li>
          <li><strong>NLRs (NOD-like receptors)</strong> — intracellular sensing, inflammasome</li>
          <li><strong>RLRs (RIG-I-like receptors)</strong> — viral RNA sensing</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Acute inflammation — 3 main events:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Acute Inflammation — "VIP" Triad</span>
          <ul>
            <li><strong>V</strong>ascular changes — vasodilation + ↑ permeability</li>
            <li><strong>I</strong>nflammatory cell recruitment — neutrophils first</li>
            <li><strong>P</strong>lasma protein leak — fibrin, complement, antibodies</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Result: ⭐ <strong>edema + leukocyte infiltrate</strong> at site of injury</p>
        </div>

        <p><strong>Vascular events sequence:</strong></p>
        <ol>
          <li>Brief vasoconstriction (seconds)</li>
          <li>Persistent vasodilation → Rubor + Calor</li>
          <li>↑ Vascular permeability (gaps in endothelium) → Tumor</li>
          <li>Blood flow slows (stasis)</li>
          <li>Leukocytes margin → roll → adhere → emigrate (diapedesis)</li>
        </ol>

        <p><strong>Leukocyte recruitment cascade:</strong></p>
        <ol>
          <li><strong>Margination</strong> — leukocytes move to vessel wall</li>
          <li><strong>Rolling</strong> — selectins (E, P, L)</li>
          <li><strong>Adhesion</strong> — integrins (LFA-1, Mac-1) bind to ICAM/VCAM</li>
          <li><strong>Transmigration (diapedesis)</strong> — through endothelial gaps</li>
          <li><strong>Chemotaxis</strong> — follow gradient (IL-8, C5a, leukotriene B4, bacterial peptides)</li>
          <li><strong>Phagocytosis</strong> — engulf pathogens/debris</li>
          <li><strong>Killing/degradation</strong> — ROS, lysosomal enzymes, antimicrobial peptides</li>
        </ol>

        <p><strong>Key mediators:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Inflammatory Mediators (8 main groups)</span>
          <table>
            <tr><th>Group</th><th>Examples</th><th>Effect</th></tr>
            <tr><td><strong>Vasoactive amines</strong></td><td>Histamine, serotonin</td><td>Vasodilation, ↑ permeability (early, fast)</td></tr>
            <tr><td><strong>Arachidonic acid metabolites</strong></td><td>PGs (COX), LTs (LOX)</td><td>Pain, fever, vasoactive</td></tr>
            <tr><td><strong>Cytokines</strong></td><td>TNF-α, IL-1, IL-6</td><td>Systemic effects, fever, leukocytosis</td></tr>
            <tr><td><strong>Chemokines</strong></td><td>IL-8, MCP-1</td><td>Leukocyte recruitment</td></tr>
            <tr><td><strong>Complement</strong></td><td>C3a, C5a, MAC</td><td>Opsonization, chemotaxis, lysis</td></tr>
            <tr><td><strong>Kinins</strong></td><td>Bradykinin</td><td>Pain, ↑ permeability</td></tr>
            <tr><td><strong>ROS / NO</strong></td><td>Free radicals</td><td>Antimicrobial, tissue damage</td></tr>
            <tr><td><strong>Acute phase proteins</strong></td><td>CRP, SAA, fibrinogen, haptoglobin</td><td>Liver-derived, opsonize, monitor</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>TNF-α + IL-1 + IL-6</strong> = trio of acute phase response<br>
          📌 NSAIDs block COX → ↓ PGs (anti-inflammatory + analgesic)<br>
          📌 Steroids block phospholipase A2 → block ALL AA metabolites</p>
        </div>

        <p><strong>Outcomes of acute inflammation:</strong></p>
        <ol>
          <li><strong>Resolution</strong> — complete return to normal (best outcome)</li>
          <li><strong>Healing by fibrosis</strong> — scar (if extensive damage)</li>
          <li><strong>Abscess formation</strong> — walled-off pus</li>
          <li><strong>Progression to chronic</strong> — if insult persists</li>
        </ol>

        <p><strong>Chronic inflammation:</strong></p>
        <ul>
          <li>Duration: weeks-months-years</li>
          <li>Cells: ⭐ <strong>Lymphocytes, plasma cells, macrophages</strong> (vs neutrophils in acute)</li>
          <li>Concurrent: tissue destruction + repair (fibrosis)</li>
          <li>Common causes:
            <ul>
              <li>Persistent infection (TB, leishmaniasis)</li>
              <li>Autoimmune disease (IMHA, lupus)</li>
              <li>Foreign body (suture, implant)</li>
              <li>Prolonged exposure (toxins, allergens)</li>
            </ul>
          </li>
          <li><strong>Granulomatous inflammation</strong> — distinct chronic pattern with epithelioid macrophages, multinucleated giant cells (TB, fungal, foreign body)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>Local signs (5 cardinal):</strong></p>
        <ul>
          <li>Rubor (redness)</li>
          <li>Calor (heat)</li>
          <li>Tumor (swelling)</li>
          <li>Dolor (pain)</li>
          <li>Functio laesa (loss of function)</li>
        </ul>

        <p><strong>Systemic signs (acute phase response):</strong></p>
        <ul>
          <li><strong>Fever</strong> — IL-1, IL-6, TNF act on hypothalamus → ↑ PGE2 → reset thermostat</li>
          <li><strong>Leukocytosis</strong> — neutrophilia in bacterial · lymphocytosis in viral</li>
          <li><strong>↑ Acute phase proteins</strong> — CRP (dog), SAA (cat), fibrinogen</li>
          <li><strong>Anorexia, lethargy, sleepiness</strong> — sickness behavior (cytokine-driven)</li>
          <li><strong>Negative APP</strong>: ↓ albumin (negative acute phase protein)</li>
          <li>Severe: SIRS, septic shock, MODS</li>
        </ul>

        <p><strong>Chronic inflammation signs:</strong></p>
        <ul>
          <li>Weight loss, cachexia</li>
          <li>Anemia of chronic disease</li>
          <li>Fatigue, persistent low-grade fever</li>
          <li>Organ-specific (depending on site)</li>
          <li>Persistent ↑ APP</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Lab markers:</strong></p>

        <ul>
          <li><strong>CBC</strong>:
            <ul>
              <li>Acute bacterial: neutrophilia ± left shift</li>
              <li>Severe sepsis: neutropenia (consumption)</li>
              <li>Chronic: nonregen anemia, monocytosis, lymphocytosis</li>
            </ul>
          </li>
          <li><strong>Acute phase proteins</strong>:
            <ul>
              <li>⭐ <strong>CRP (dog)</strong> — major APP, peaks at 24-48h, t½ ~19h</li>
              <li>⭐ <strong>SAA (cat)</strong> — major APP for cats</li>
              <li>Fibrinogen — moderate APP, both species</li>
              <li>Haptoglobin — moderate APP, both species</li>
              <li>Albumin — negative APP (↓ in inflammation)</li>
            </ul>
          </li>
          <li><strong>Serum globulins</strong>:
            <ul>
              <li>↑ α-globulins (acute) — APPs are α</li>
              <li>↑ γ-globulins (chronic) — antibodies, polyclonal in chronic infection</li>
              <li>SPE useful in chronic cases</li>
            </ul>
          </li>
          <li><strong>Cytology / histopathology</strong>:
            <ul>
              <li>Aspirate effusion / mass</li>
              <li>Suppurative (neutrophils dominant) — bacterial</li>
              <li>Pyogranulomatous — chronic infectious</li>
              <li>Eosinophilic — parasitic, allergic</li>
              <li>Lymphoplasmacytic — chronic, autoimmune</li>
              <li>Granulomatous — TB, fungal, foreign body</li>
            </ul>
          </li>
          <li><strong>Imaging</strong>: identify focal vs systemic</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Inflammation Patterns by Cell Type</span>
          <table>
            <tr><th>Pattern</th><th>Dominant cells</th><th>Common causes</th></tr>
            <tr><td>Suppurative (purulent)</td><td>Neutrophils</td><td>Bacterial</td></tr>
            <tr><td>Granulomatous</td><td>Macrophages, giant cells</td><td>TB, fungal, FB</td></tr>
            <tr><td>Pyogranulomatous</td><td>Mixed neut + macro</td><td>FIP, Nocardia, Mycobacterium</td></tr>
            <tr><td>Lymphoplasmacytic</td><td>Lymphocytes, plasma cells</td><td>Chronic, autoimmune</td></tr>
            <tr><td>Eosinophilic</td><td>Eosinophils</td><td>Parasitic, allergic, mast cell</td></tr>
            <tr><td>Necrotizing</td><td>Mixed + necrosis</td><td>Severe bacterial, virulent</td></tr>
          </table>
        </div>
      `,
      treatment: `
        <p><strong>Goals:</strong></p>
        <ol>
          <li>Eliminate cause</li>
          <li>Modulate excessive inflammation</li>
          <li>Promote resolution + repair</li>
        </ol>

        <p><strong>Anti-inflammatory drug categories:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Anti-Inflammatory Drugs</span>
          <table>
            <tr><th>Class</th><th>Mechanism</th><th>Examples</th></tr>
            <tr><td><strong>Steroids</strong></td><td>Block PLA2 → block all AA metabolites</td><td>Prednisolone, dexamethasone</td></tr>
            <tr><td><strong>NSAIDs</strong></td><td>Block COX → ↓ PGs</td><td>Carprofen, meloxicam, robenacoxib</td></tr>
            <tr><td><strong>Antihistamines</strong></td><td>Block H1 receptor</td><td>Diphenhydramine, chlorpheniramine</td></tr>
            <tr><td><strong>Immunosuppressants</strong></td><td>T/B cell suppression</td><td>Cyclosporine, azathioprine, MMF</td></tr>
            <tr><td><strong>Biologics</strong></td><td>Target specific cytokines</td><td>Anti-IL-31 (lokivetmab/Cytopoint)</td></tr>
            <tr><td><strong>JAK inhibitors</strong></td><td>Block JAK-STAT signaling</td><td>Oclacitinib (Apoquel)</td></tr>
          </table>
          <p class="mnem-tip">📌 ⚠️ <strong>NEVER combine NSAIDs + steroids</strong> — GI ulceration risk catastrophic<br>
          📌 ⚠️ Cats sensitive to NSAIDs (limited safe options) · paracetamol fatal<br>
          📌 ⭐ Steroid dosing: anti-inflammatory (0.5-1 mg/kg) vs immunosuppressive (2-4 mg/kg)</p>
        </div>

        <p><strong>Specific scenarios:</strong></p>
        <ul>
          <li><strong>Bacterial infection</strong>: appropriate antibiotic, drain abscess</li>
          <li><strong>Autoimmune</strong>: immunosuppression (steroids ± azathioprine/cyclosporine)</li>
          <li><strong>Allergic dermatitis</strong>: oclacitinib, lokivetmab, antihistamines, allergen avoidance</li>
          <li><strong>Granulomatous</strong>: long-term Rx of underlying cause (anti-fungal/mycobacterial)</li>
          <li><strong>Chronic inflammation</strong>: combination + identify trigger (food trial, GI biopsy, etc.)</li>
        </ul>

        <p><strong>Supportive care:</strong></p>
        <ul>
          <li>Pain management (multimodal)</li>
          <li>Cold/warm compress (acute injury)</li>
          <li>Rest, elevation</li>
          <li>Adequate nutrition (cytokine-driven catabolism)</li>
          <li>Hydration</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Tissue destruction</strong> — collateral damage from neutrophil enzymes/ROS</li>
          <li><strong>Fibrosis / scarring</strong> — loss of organ architecture</li>
          <li><strong>Strictures, adhesions</strong> — GI, peritoneal</li>
          <li><strong>Chronic pain</strong> — central sensitization</li>
          <li><strong>SIRS / sepsis / septic shock</strong> — uncontrolled systemic inflammation</li>
          <li><strong>MODS</strong> — multiorgan dysfunction</li>
          <li><strong>Amyloidosis</strong> — chronic inflammation → AA amyloid (rare)</li>
          <li><strong>Cancer</strong> — chronic inflammation = risk factor (e.g., chronic IBD → lymphoma)</li>
          <li><strong>Anemia of chronic disease</strong> — IL-6 → hepcidin → iron sequestration</li>
          <li><strong>Cachexia</strong> — TNF-α driven muscle wasting</li>
        </ul>

        <p><strong>Resolution vs failure:</strong></p>
        <ul>
          <li><strong>Successful resolution</strong> — phagocytosis of debris, lipoxin/resolvin signaling, return to homeostasis</li>
          <li><strong>Failed resolution</strong> — chronic inflammation pathway, fibrosis, organ dysfunction</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-tissue-repair',
    titleEn: 'Tissue Repair & Wound Healing',
    titleTh: 'การซ่อมแซมเนื้อเยื่อ',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['tissue repair', 'wound healing', 'fibrosis', 'regeneration', 'scar', 'granulation'],
    aliases: ['การหายของแผล', 'wound healing'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Tissue Repair</strong> — restoration of tissue architecture และ function หลัง injury · 2 mechanisms:</p>
        <ul>
          <li>⭐ <strong>Regeneration</strong> — replace lost cells with same cell type → restore normal function</li>
          <li>⭐ <strong>Repair by fibrosis (scar)</strong> — replace with connective tissue → loss of function</li>
        </ul>

        <p>Choice depends on:</p>
        <ul>
          <li>Cell type (labile/stable/permanent)</li>
          <li>Severity of injury</li>
          <li>Stromal framework integrity</li>
          <li>Age, nutrition, comorbidities</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Healing Phases — "HIRA"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">H</span>
              <span class="num-label">Hemostasis (immediate)</span>
            </div>
            <div class="num-card">
              <span class="num-big">I</span>
              <span class="num-label">Inflammation (1-3 d)</span>
            </div>
            <div class="num-card">
              <span class="num-big">R</span>
              <span class="num-label">Repair / proliferation (3-21 d)</span>
            </div>
            <div class="num-card">
              <span class="num-big">A</span>
              <span class="num-label">Remodeling / maturation (3 wk-2 yr)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ "HIRA" = ขั้นตอนการหายของแผล<br>
          📌 ระยะแต่ละขั้นไม่แยกชัดเจน · overlap กัน</p>
        </div>
      `,
      etiology: `
        <p>Healing is triggered by tissue injury — same etiology as cell injury (HOTI-PINGS):</p>
        <ul>
          <li>Hypoxia/ischemia · Toxic · Infectious · Physical trauma · Immune · etc.</li>
        </ul>

        <p><strong>Healing types by primary intent:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Wound Healing — Primary vs Secondary Intention</span>
          <table>
            <tr><th>Type</th><th>Description</th><th>Outcome</th></tr>
            <tr><td><strong>Primary intention</strong></td><td>Edges apposed (sutured surgical wound)</td><td>⭐ Minimal scar · fast healing</td></tr>
            <tr><td><strong>Secondary intention</strong></td><td>Edges not apposed (open wound, large defect)</td><td>Granulation + contraction · larger scar</td></tr>
            <tr><td><strong>Tertiary (delayed primary)</strong></td><td>Initially open · sutured later (after infection cleared)</td><td>Intermediate · for contaminated wounds</td></tr>
          </table>
        </div>
      `,
      pathophysiology: `
        <p><strong>Phase 1: Hemostasis (immediate, minutes):</strong></p>
        <ul>
          <li>Vasoconstriction</li>
          <li>Platelet plug formation</li>
          <li>Fibrin clot (provisional matrix)</li>
          <li>Release of platelet growth factors (PDGF, TGF-β)</li>
        </ul>

        <p><strong>Phase 2: Inflammation (1-3 days):</strong></p>
        <ul>
          <li><strong>Day 1:</strong> Neutrophils dominate · phagocytose bacteria/debris</li>
          <li><strong>Day 2-3:</strong> Macrophages take over · clean up + secrete growth factors</li>
          <li>Macrophages = orchestrators of healing</li>
          <li>Cytokines/chemokines recruit fibroblasts + endothelial cells</li>
        </ul>

        <p><strong>Phase 3: Proliferation/Repair (day 3-21):</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Proliferation — "GRACE" Steps</span>
          <ul>
            <li><strong>G</strong>ranulation tissue formation — pink, vascular</li>
            <li><strong>R</strong>e-epithelialization — keratinocyte migration</li>
            <li><strong>A</strong>ngiogenesis — new capillaries (VEGF-driven)</li>
            <li><strong>C</strong>ollagen deposition — fibroblasts make Type III initially</li>
            <li><strong>E</strong>pithelial closure + wound contraction (myofibroblasts)</li>
          </ul>
        </div>

        <p>Granulation tissue = <strong>fibroblasts + new vessels + macrophages</strong> in loose collagen matrix · pink, friable, bleeds easily</p>

        <p><strong>Phase 4: Remodeling (3 weeks - 2 years):</strong></p>
        <ul>
          <li>Type III collagen → Type I (stronger)</li>
          <li>Cross-linking ↑ tensile strength</li>
          <li>Vessel regression</li>
          <li>Cellular density ↓</li>
          <li>Final scar = ~70-80% of original tensile strength (never 100%)</li>
        </ul>

        <p><strong>Key growth factors:</strong></p>
        <ul>
          <li><strong>PDGF</strong> (platelet-derived) — fibroblast proliferation, chemotaxis</li>
          <li><strong>TGF-β</strong> — fibroblast → myofibroblast, collagen production, immunomodulatory</li>
          <li><strong>VEGF</strong> — angiogenesis</li>
          <li><strong>FGF</strong> — fibroblast proliferation, angiogenesis</li>
          <li><strong>EGF</strong> — epithelial proliferation</li>
          <li><strong>IGF-1</strong> — proliferation, anabolism</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Wound Tensile Strength Over Time</span>
          <table>
            <tr><th>Time post-injury</th><th>Strength (% of normal)</th><th>Notes</th></tr>
            <tr><td>1 week</td><td>~10%</td><td>⚠️ Suture removal too early = dehiscence</td></tr>
            <tr><td>2 weeks</td><td>~20%</td><td>Standard suture removal</td></tr>
            <tr><td>1 month</td><td>~50%</td><td></td></tr>
            <tr><td>3 months</td><td>~70%</td><td>Most strength gained</td></tr>
            <tr><td>1 year</td><td>~80%</td><td>Maximum reached</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Wound NEVER recovers 100% strength<br>
          📌 ⚠️ Activity restriction critical first 2-4 weeks · esp. abdominal wall</p>
        </div>
      `,
      symptoms: `
        <p><strong>Normal healing appearance (skin wound):</strong></p>
        <ul>
          <li><strong>Day 0-3:</strong> Edema, mild redness, exudate</li>
          <li><strong>Day 3-5:</strong> Granulation begins (pink tissue at base)</li>
          <li><strong>Day 5-10:</strong> Wound contraction, epithelial migration</li>
          <li><strong>Day 10-21:</strong> Closed (depending on size), red scar</li>
          <li><strong>Months:</strong> Scar pales, softens (mature scar)</li>
        </ul>

        <p><strong>Healing complications — clinical signs:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">⚠️ Abnormal Healing Patterns</span>
          <ul>
            <li><strong>Dehiscence</strong> — wound edges separate · sutures fail</li>
            <li><strong>Infection</strong> — purulent discharge, fever, ↑ pain, redness extending</li>
            <li><strong>Seroma</strong> — fluid accumulation under wound</li>
            <li><strong>Hematoma</strong> — blood collection</li>
            <li><strong>Excessive granulation</strong> — proud flesh (horse), exuberant tissue</li>
            <li><strong>Hypertrophic scar / keloid</strong> — excess collagen (uncommon in pets)</li>
            <li><strong>Chronic non-healing</strong> — lick granuloma, pressure sore</li>
            <li><strong>Wound contracture</strong> — restricts movement (joint contracture)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Cat skin = thinner, less elastic → contraction limited<br>
          📌 Dog skin = more elastic, abundant → contraction more effective</p>
        </div>
      `,
      diagnosis: `
        <p><strong>Wound assessment:</strong></p>
        <ul>
          <li><strong>Visual inspection</strong>:
            <ul>
              <li>Color (pink = healthy granulation, dark = devitalized)</li>
              <li>Edge approximation</li>
              <li>Discharge (serous, sanguineous, purulent)</li>
              <li>Surrounding tissue (cellulitis?)</li>
            </ul>
          </li>
          <li><strong>Palpation</strong>: warmth, pain, fluctuance (abscess), crepitus (gas)</li>
          <li><strong>Culture</strong> — if infection suspected</li>
          <li><strong>Cytology</strong> — characterize discharge</li>
          <li><strong>Imaging</strong> — depth, foreign bodies, fistulas</li>
          <li><strong>Biopsy</strong> — chronic non-healing wounds (rule out neoplasia)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Wound management principles — "TIME":</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">"TIME" — Wound Care Framework</span>
          <ul>
            <li><strong>T</strong>issue debridement — remove necrotic, devitalized</li>
            <li><strong>I</strong>nfection / inflammation control — antiseptic, antibiotics if needed</li>
            <li><strong>M</strong>oisture balance — moist wound healing optimal</li>
            <li><strong>E</strong>dge advancement — promote epithelialization</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Modern wound care: <strong>"moist wound healing"</strong> faster than dry<br>
          📌 Avoid aggressive antiseptics (chlorhexidine OK, povidone iodine drying) on healing tissue</p>
        </div>

        <p><strong>Phase-specific care:</strong></p>
        <ul>
          <li><strong>Acute wound:</strong>
            <ul>
              <li>Lavage with sterile saline (high volume, low pressure)</li>
              <li>Debride necrotic tissue</li>
              <li>Close primarily if &lt; 6-8 hr, clean, well-vascularized</li>
              <li>Open management if contaminated, devitalized, &gt; 8 hr</li>
            </ul>
          </li>
          <li><strong>Granulation phase:</strong>
            <ul>
              <li>Non-adherent dressing (Adaptic, hydrogel)</li>
              <li>Protect from contamination</li>
              <li>Monitor for excessive granulation</li>
            </ul>
          </li>
          <li><strong>Epithelialization phase:</strong>
            <ul>
              <li>Maintain moist environment</li>
              <li>Avoid disturbing</li>
            </ul>
          </li>
          <li><strong>Remodeling:</strong>
            <ul>
              <li>Restrict activity</li>
              <li>Massage scar (if applicable)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Factors affecting healing — "DIDN'T HEAL":</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Mnemonic — "DIDN'T HEAL"</span>
          <ul>
            <li><strong>D</strong>iabetes / Drugs (steroids, chemo)</li>
            <li><strong>I</strong>nfection</li>
            <li><strong>D</strong>ebridement (inadequate)</li>
            <li><strong>N</strong>utrition (protein, vit C, zinc)</li>
            <li><strong>T</strong>ension (excessive on wound)</li>
            <li><strong>H</strong>ypoxia / poor perfusion</li>
            <li><strong>E</strong>dema (impairs O2 delivery)</li>
            <li><strong>A</strong>ge (slower with age)</li>
            <li><strong>L</strong>icking / self-trauma (E-collar!)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>E-collar non-negotiable</strong> in healing wounds<br>
          📌 Steroids ↓ healing significantly · timing of surgery matters</p>
        </div>

        <p><strong>Adjuncts:</strong></p>
        <ul>
          <li>Honey dressings (antimicrobial, debridement)</li>
          <li>Manuka honey (medical grade)</li>
          <li>Negative pressure wound therapy (VAC) — selected cases</li>
          <li>Maggot therapy (debridement, rare in vet)</li>
          <li>Vitamin/mineral supplementation if deficient</li>
        </ul>
      `,
      complications: `
        <p><strong>Common complications:</strong></p>
        <ul>
          <li><strong>Wound infection</strong> — most common · prevent with sterile technique, prompt closure</li>
          <li><strong>Dehiscence</strong> — premature suture removal, infection, excessive activity</li>
          <li><strong>Seroma</strong> — common after large mass removal · drain if large</li>
          <li><strong>Self-trauma</strong> — licking → granuloma, dehiscence</li>
          <li><strong>Excessive scarring</strong></li>
          <li><strong>Joint contracture</strong> — limit ROM</li>
          <li><strong>Chronic non-healing</strong> — investigate for: neoplasia (especially cat), pressure sore, autoimmune (lupus)</li>
          <li><strong>Fistula formation</strong> — abnormal tract</li>
          <li><strong>Granuloma</strong> — foreign body, infection</li>
        </ul>

        <p><strong>Fibrosis pathophysiology (excessive scarring):</strong></p>
        <ul>
          <li>Persistent injury → chronic inflammation</li>
          <li>↑ TGF-β → fibroblast → myofibroblast</li>
          <li>Excess collagen deposition</li>
          <li>Loss of organ architecture + function</li>
          <li>Examples: cirrhosis (liver), pulmonary fibrosis (West Highland White), interstitial nephritis</li>
        </ul>

        <p><strong>Anti-fibrotic strategies (limited in vet):</strong></p>
        <ul>
          <li>Eliminate ongoing injury</li>
          <li>Pirfenidone (anti-TGF-β) — experimental</li>
          <li>ACE inhibitors (anti-fibrotic effect in heart, kidney)</li>
          <li>Spironolactone (anti-aldosterone, anti-fibrotic)</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-hemodynamic-disorders',
    titleEn: 'Hemodynamic Disorders',
    titleTh: 'ความผิดปกติของ Hemodynamics',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['hemodynamic', 'edema', 'thrombosis', 'embolism', 'shock', 'hyperemia'],
    aliases: ['edema', 'thrombosis', 'shock'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Hemodynamic Disorders</strong> — abnormalities ของการไหลเวียนของเลือดและของเหลวในร่างกาย</p>

        <ul>
          <li>⭐ <strong>5 main categories:</strong>
            <ul>
              <li>Edema — fluid in interstitium</li>
              <li>Hyperemia / Congestion — ↑ blood in vessels</li>
              <li>Hemorrhage — blood escape from vessels</li>
              <li>Thrombosis / Embolism — clot formation/migration</li>
              <li>Shock — circulatory failure</li>
            </ul>
          </li>
        </ul>

        <p><strong>Starling forces — fluid balance across capillaries:</strong></p>
        <ul>
          <li><strong>Hydrostatic pressure</strong> (pushes fluid out)</li>
          <li><strong>Oncotic pressure</strong> (pulls fluid in · driven by albumin)</li>
          <li><strong>Vascular permeability</strong> (gates how much can cross)</li>
          <li><strong>Lymphatic drainage</strong> (removes excess)</li>
          <li>Imbalance → edema</li>
        </ul>
      `,
      etiology: `
        <p><strong>Edema types:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Edema — Pathophysiologic Categories</span>
          <table>
            <tr><th>Type</th><th>Mechanism</th><th>Examples</th></tr>
            <tr><td><strong>Increased hydrostatic pressure</strong></td><td>↑ venous pressure</td><td>CHF, portal HT (ascites), DVT</td></tr>
            <tr><td><strong>Decreased oncotic pressure</strong></td><td>↓ albumin</td><td>PLE, PLN, liver failure, malnutrition</td></tr>
            <tr><td><strong>↑ Vascular permeability</strong></td><td>Endothelial damage</td><td>Inflammation, sepsis, anaphylaxis, burns</td></tr>
            <tr><td><strong>Lymphatic obstruction</strong></td><td>Blocked drainage</td><td>Tumor invasion, surgery, parasite</td></tr>
            <tr><td><strong>Sodium/water retention</strong></td><td>RAAS activation</td><td>CHF, kidney disease</td></tr>
          </table>
          <p class="mnem-tip">📌 Differentiate: <strong>transudate</strong> (low protein, ↑ hydrostatic or ↓ oncotic) vs <strong>exudate</strong> (high protein, ↑ permeability/inflammation)</p>
        </div>

        <p><strong>Effusion types (Rivalta + protein analysis):</strong></p>
        <ul>
          <li><strong>Pure transudate</strong>: protein &lt; 2.5, TNCC &lt; 1500/μL · CHF, hypoalbuminemia</li>
          <li><strong>Modified transudate</strong>: protein 2.5-5, TNCC 1000-7000 · pre-CHF, neoplasia</li>
          <li><strong>Exudate</strong>: protein &gt; 3, TNCC &gt; 5000 · inflammation, infection</li>
          <li><strong>Hemorrhagic</strong>: PCV approaches blood</li>
          <li><strong>Chylous</strong>: triglycerides &gt; serum · lymphatic</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Thrombosis — Virchow's Triad:</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">Virchow's Triad</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Endothelial injury</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Stasis / abnormal flow</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Hypercoagulability</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ ทั้ง 3 อย่างทำให้ thrombus ก่อตัว · 1-2 = arterial thrombus · 3 = venous<br>
          📌 Examples: cat ATE = HCM (LA stasis + endothelial dysfunction)</p>
        </div>

        <p><strong>Hypercoagulability causes:</strong></p>
        <ul>
          <li>PLN (loss of antithrombin in urine)</li>
          <li>Hyperadrenocorticism</li>
          <li>IMHA</li>
          <li>Neoplasia (especially HSA, lymphoma, mammary CA)</li>
          <li>Sepsis (DIC)</li>
          <li>Pancreatitis</li>
          <li>Heartworm disease</li>
        </ul>

        <p><strong>Embolism types:</strong></p>
        <ul>
          <li><strong>Thromboembolism</strong> — most common (e.g., cat ATE, pulmonary thromboembolism)</li>
          <li><strong>Fat embolism</strong> — long bone fracture</li>
          <li><strong>Air embolism</strong> — surgery, IV catheter</li>
          <li><strong>Amniotic fluid</strong> — peripartum (rare in vet)</li>
          <li><strong>Septic emboli</strong> — endocarditis</li>
          <li><strong>Tumor emboli</strong> — metastasis</li>
        </ul>

        <p><strong>Shock — circulatory failure:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Shock Categories</span>
          <table>
            <tr><th>Type</th><th>Mechanism</th><th>Examples</th></tr>
            <tr><td><strong>Hypovolemic</strong></td><td>↓ Volume</td><td>Hemorrhage, severe vomiting/diarrhea, burns</td></tr>
            <tr><td><strong>Cardiogenic</strong></td><td>Pump failure</td><td>DCM, severe MMVD, arrhythmia, MI</td></tr>
            <tr><td><strong>Distributive</strong></td><td>Vasodilation/maldistribution</td><td>Septic, anaphylactic, neurogenic</td></tr>
            <tr><td><strong>Obstructive</strong></td><td>Blocked outflow/inflow</td><td>Pericardial tamponade, GDV, tension pneumo, PTE</td></tr>
            <tr><td><strong>Hypoxic / dissociative</strong></td><td>Cells can't use O2</td><td>CO poisoning, cyanide, severe anemia</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ All shock = inadequate tissue O2 delivery → cellular dysfunction<br>
          📌 Stages: compensated → decompensated → irreversible (cell death)</p>
        </div>

        <p><strong>Shock pathophysiology cascade:</strong></p>
        <ol>
          <li>Inadequate perfusion → tissue hypoxia</li>
          <li>Anaerobic metabolism → lactic acidosis</li>
          <li>Compensatory: SNS, RAAS, vasopressin → vasoconstriction, ↑ HR</li>
          <li>If uncorrected: endothelial damage, capillary leak</li>
          <li>Multi-organ dysfunction</li>
          <li>Final: SIRS → MODS → death</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Edema clinical patterns:</strong></p>
        <ul>
          <li><strong>Pulmonary edema</strong>:
            <ul>
              <li>Dyspnea, orthopnea, productive cough</li>
              <li>Crackles on auscultation</li>
              <li>Cyanosis if severe</li>
              <li>Cardiogenic vs non-cardiogenic differentiation important</li>
            </ul>
          </li>
          <li><strong>Peripheral edema</strong>:
            <ul>
              <li>Pitting edema (limbs, dependent areas)</li>
              <li>Periorbital, ventral edema (PLE/PLN)</li>
            </ul>
          </li>
          <li><strong>Ascites</strong>:
            <ul>
              <li>Distended abdomen</li>
              <li>Fluid wave palpable</li>
              <li>Right CHF, portal HT, hypoalbuminemia</li>
            </ul>
          </li>
          <li><strong>Pleural effusion</strong>:
            <ul>
              <li>Restrictive breathing pattern</li>
              <li>Muffled heart sounds</li>
              <li>Common in cat CHF, FIP, neoplasia</li>
            </ul>
          </li>
        </ul>

        <p><strong>Shock signs:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Shock — Compensated vs Decompensated</span>
          <table>
            <tr><th>Parameter</th><th>Compensated</th><th>Decompensated</th></tr>
            <tr><td>Mentation</td><td>Anxious, alert</td><td>Obtunded, comatose</td></tr>
            <tr><td>HR</td><td>↑ (tachycardia)</td><td>Bradycardia (terminal)</td></tr>
            <tr><td>BP</td><td>Maintained</td><td>↓ (hypotension)</td></tr>
            <tr><td>MM color</td><td>Pink</td><td>Pale, gray, muddy</td></tr>
            <tr><td>CRT</td><td>&lt; 2 sec</td><td>&gt; 2 sec</td></tr>
            <tr><td>Pulses</td><td>Strong, bounding (early)</td><td>Weak, thready</td></tr>
            <tr><td>Lactate</td><td>Mildly ↑</td><td>&gt; 4 mmol/L</td></tr>
            <tr><td>Temperature</td><td>Normal-mild ↓</td><td>Hypothermia (cat especially)</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Cat shock = often hypothermia + bradycardia (paradoxical to dog)<br>
          📌 Septic shock dog: "warm shock" early → "cold shock" late</p>
        </div>

        <p><strong>Thrombosis/embolism signs (varies by site):</strong></p>
        <ul>
          <li><strong>ATE (cat)</strong>: paralysis, pain, pulseless, poikilothermy, pallor (hindlimbs)</li>
          <li><strong>Pulmonary thromboembolism</strong>: acute dyspnea, cyanosis, hypoxemia</li>
          <li><strong>Renal infarct</strong>: AKI, hematuria, lumbar pain</li>
          <li><strong>Splenic thrombosis</strong>: pain, splenomegaly</li>
          <li><strong>Cerebral</strong>: stroke signs (rare in vet)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Edema workup:</strong></p>
        <ul>
          <li><strong>Albumin level</strong> — hypoalbuminemia threshold: ≤ 1.5 g/dL → edema/effusion likely</li>
          <li><strong>UPC, urinalysis</strong> — rule out PLN</li>
          <li><strong>Serum bile acids, NH3</strong> — liver function</li>
          <li><strong>Fecal α1-PI</strong> (if available) — PLE marker</li>
          <li><strong>Echocardiogram</strong> — rule out cardiac cause</li>
          <li><strong>Imaging</strong> — chest XR, AUS, identify effusion site</li>
          <li><strong>Effusion analysis</strong>:
            <ul>
              <li>Total protein, TNCC, cytology, culture</li>
              <li>Triglycerides (chyle)</li>
              <li>Bilirubin (bile)</li>
              <li>Creatinine (urine)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Thrombosis/embolism workup:</strong></p>
        <ul>
          <li><strong>D-dimer</strong> — fibrin degradation product, ↑ in active thrombosis</li>
          <li><strong>Coag panel</strong>: PT, aPTT, fibrinogen, antithrombin</li>
          <li><strong>Thromboelastography (TEG)</strong> — comprehensive coag (limited availability)</li>
          <li><strong>Imaging</strong>: Doppler US, CT angiography, echo</li>
          <li><strong>Underlying disease</strong>: PLN screen, T4, ACTH stim, etc.</li>
        </ul>

        <p><strong>Shock assessment:</strong></p>
        <ul>
          <li><strong>POCUS</strong>: cardiac, pleural, abdomen — quick screen</li>
          <li><strong>Lactate</strong>: serial monitoring (clearance = good prognosis)</li>
          <li><strong>BP</strong>: oscillometric / Doppler / arterial line</li>
          <li><strong>Blood gas</strong>: acid-base status, oxygenation</li>
          <li><strong>CBC, chemistry, coag</strong>: comprehensive</li>
          <li><strong>UOP monitoring</strong>: end-organ perfusion marker</li>
        </ul>
      `,
      treatment: `
        <p><strong>Edema management — depends on cause:</strong></p>
        <ul>
          <li><strong>CHF</strong>: furosemide + ACEi + pimobendan (FSAP)</li>
          <li><strong>Hypoalbuminemia</strong>:
            <ul>
              <li>Treat underlying (PLE, PLN, liver)</li>
              <li>Plasma transfusion if severe (&lt; 1.5)</li>
              <li>Synthetic colloids cautiously (limited evidence)</li>
              <li>Nutritional support</li>
            </ul>
          </li>
          <li><strong>Inflammatory edema</strong>: treat underlying inflammation</li>
          <li><strong>Lymphedema</strong>: compression, manual drainage, surgery (rare)</li>
        </ul>

        <p><strong>Thromboembolism management:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Antithrombotic Drugs</span>
          <table>
            <tr><th>Drug</th><th>Mechanism</th><th>Use</th></tr>
            <tr><td><strong>⭐ Clopidogrel</strong></td><td>P2Y12 inhibitor (antiplatelet)</td><td>Cat ATE prevention (FATCAT)</td></tr>
            <tr><td><strong>Aspirin</strong></td><td>COX-1 inhibitor</td><td>Inferior to clopidogrel in cat</td></tr>
            <tr><td><strong>Heparin (UFH)</strong></td><td>Activates antithrombin</td><td>Acute thrombosis, monitor aPTT</td></tr>
            <tr><td><strong>LMWH (enoxaparin)</strong></td><td>Anti-Xa</td><td>More predictable than UFH</td></tr>
            <tr><td><strong>Rivaroxaban</strong></td><td>Direct Xa inhibitor</td><td>Oral · alternative</td></tr>
            <tr><td><strong>tPA / streptokinase</strong></td><td>Fibrinolysis</td><td>⚠️ High mortality · rarely used</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Clopidogrel 18.75 mg/cat q24h = standard ATE prevention<br>
          📌 ⚠️ Avoid thrombolytics in cat ATE (reperfusion injury)</p>
        </div>

        <p><strong>Shock management — "VIP" approach:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Shock Resuscitation — "VIP"</span>
          <ul>
            <li><strong>V</strong>entilate — O2 supplementation, IPPV if needed</li>
            <li><strong>I</strong>nfuse — fluid resuscitation (crystalloid/colloid)</li>
            <li><strong>P</strong>ump — vasopressors/inotropes if BP not maintained</li>
          </ul>
        </div>

        <p><strong>Fluid therapy in shock:</strong></p>
        <ul>
          <li><strong>Hypovolemic/distributive:</strong>
            <ul>
              <li>Dog: 60-90 mL/kg crystalloid bolus (split as 1/4 increments)</li>
              <li>Cat: 30-50 mL/kg (cats more sensitive to volume overload)</li>
              <li>Reassess after each bolus</li>
            </ul>
          </li>
          <li><strong>Cardiogenic:</strong>
            <ul>
              <li>⚠️ Conservative fluids (worsens edema)</li>
              <li>Inotropes (pimobendan, dobutamine)</li>
              <li>Diuretics for pulmonary edema</li>
            </ul>
          </li>
          <li><strong>Obstructive:</strong>
            <ul>
              <li>Relieve obstruction urgently (pericardiocentesis, GDV decompression, thoracocentesis)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Vasopressors (refractory hypotension):</strong></p>
        <ul>
          <li><strong>Norepinephrine</strong> — first-line in septic shock (0.1-2 mcg/kg/min)</li>
          <li><strong>Dopamine</strong> — historical, less preferred now</li>
          <li><strong>Vasopressin</strong> — refractory · 0.5-5 mU/kg/min</li>
          <li><strong>Dobutamine</strong> — cardiogenic shock, inotrope (5-15 mcg/kg/min)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>SIRS / MODS</strong> — multiorgan failure</li>
          <li><strong>DIC</strong> — disseminated intravascular coagulation</li>
          <li><strong>AKI</strong> — from prolonged hypoperfusion</li>
          <li><strong>Cerebral hypoperfusion</strong> — neurologic deficits</li>
          <li><strong>Cardiac ischemia / arrhythmia</strong></li>
          <li><strong>Refractory shock</strong> — vasopressor-resistant</li>
          <li><strong>Reperfusion injury</strong> — when blood flow returns</li>
          <li><strong>Death</strong></li>
        </ul>

        <p><strong>DIC pathophysiology:</strong></p>
        <ul>
          <li>Massive activation of coagulation cascade</li>
          <li>Widespread microthrombi</li>
          <li>Consumption of coagulation factors + platelets</li>
          <li>Paradoxical bleeding (consumptive coagulopathy)</li>
          <li>Lab: ↓ platelets, ↑ PT/aPTT, ↑ D-dimer, ↓ fibrinogen, ↓ AT</li>
          <li>Common triggers: sepsis, neoplasia, GDV, heatstroke, snake envenomation</li>
          <li>Treatment: address underlying + supportive (plasma, platelets, heparin controversial)</li>
          <li>Prognosis: poor</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-fluid-electrolyte',
    titleEn: 'Fluid & Electrolyte Disorders',
    titleTh: 'ความผิดปกติของของเหลวและเกลือแร่',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['fluid', 'electrolyte', 'sodium', 'potassium', 'acid-base', 'dehydration', 'hyponatremia', 'hyperkalemia'],
    aliases: ['น้ำและเกลือแร่', 'fluid balance'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Body water distribution (60% of BW):</strong></p>
        <ul>
          <li><strong>ICF (intracellular)</strong> — 40% (2/3 of total)</li>
          <li><strong>ECF (extracellular)</strong> — 20% (1/3 of total)
            <ul>
              <li>Interstitial — 15%</li>
              <li>Intravascular (plasma) — 5%</li>
            </ul>
          </li>
        </ul>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>⭐ <strong>Na = main ECF cation</strong> (drives ECF volume)</li>
          <li>⭐ <strong>K = main ICF cation</strong> (drives membrane potential)</li>
          <li>Cl = main ECF anion · phosphate = main ICF anion</li>
          <li>Plasma osmolality regulated by ADH (water) + RAAS (Na/water)</li>
          <li>Normal plasma osm: ~290-310 mOsm/L</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Normal Reference Ranges</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Na</span>
              <span class="num-label">140-155 (dog) · 145-160 (cat)</span>
            </div>
            <div class="num-card">
              <span class="num-big">K</span>
              <span class="num-label">3.5-5.5 mmol/L</span>
            </div>
            <div class="num-card">
              <span class="num-big">Cl</span>
              <span class="num-label">105-120 mmol/L</span>
            </div>
            <div class="num-card">
              <span class="num-big">Ca</span>
              <span class="num-label">8.5-11.5 mg/dL (total)</span>
            </div>
          </div>
        </div>
      `,
      etiology: `
        <p><strong>Dehydration causes:</strong></p>
        <ul>
          <li>↓ Intake (anorexia, dysphagia)</li>
          <li>↑ Loss:
            <ul>
              <li>GI: vomiting, diarrhea</li>
              <li>Renal: PU/PD (DM, CKD, hyperT4)</li>
              <li>Skin: burns</li>
              <li>3rd space: peritonitis, pancreatitis</li>
            </ul>
          </li>
          <li>↑ Insensible (fever, panting, hyperthermia)</li>
        </ul>

        <p><strong>Hyponatremia causes:</strong></p>
        <ul>
          <li><strong>Hypotonic (true hyponatremia)</strong>:
            <ul>
              <li>Hypovolemic: GI loss, 3rd space, hypoadrenocorticism</li>
              <li>Euvolemic: SIADH, psychogenic polydipsia</li>
              <li>Hypervolemic: CHF, nephrotic syndrome, liver failure</li>
            </ul>
          </li>
          <li><strong>Pseudohyponatremia</strong>: hyperlipidemia, hyperproteinemia</li>
          <li><strong>Translocational</strong>: hyperglycemia (DM), mannitol</li>
        </ul>

        <p><strong>Hypernatremia causes:</strong></p>
        <ul>
          <li>↓ Water intake (no access)</li>
          <li>↑ Water loss: DI (central or nephrogenic), GI, panting</li>
          <li>↑ Na intake: salt poisoning (rare)</li>
          <li>Hyperaldosteronism</li>
        </ul>

        <p><strong>Hypokalemia causes:</strong></p>
        <ul>
          <li>GI loss: vomiting, diarrhea</li>
          <li>Renal loss: CKD (cat especially), diuretics, post-obstructive diuresis</li>
          <li>Endocrine: hyperaldosteronism, DKA (during treatment)</li>
          <li>Decreased intake: anorexia</li>
          <li>Insulin therapy (drives K into cells)</li>
        </ul>

        <p><strong>Hyperkalemia causes — "ABCDE":</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Hyperkalemia — "ABCDE" Causes</span>
          <ul>
            <li><strong>A</strong>ddison's disease (hypoadrenocorticism)</li>
            <li><strong>B</strong>locked cat / urethral obstruction</li>
            <li><strong>C</strong>ell lysis (rhabdomyolysis, tumor lysis, hemolysis)</li>
            <li><strong>D</strong>rugs (ACEi, spironolactone, K-sparing diuretics)</li>
            <li><strong>E</strong>xcess intake / iatrogenic / acidosis</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Hyperkalemia = LIFE-THREATENING — bradyarrhythmia, cardiac arrest<br>
          📌 ECG changes: tall peaked T, wide QRS, absent P, sine wave (terminal)</p>
        </div>
      `,
      pathophysiology: `
        <p><strong>Dehydration assessment:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Dehydration Severity</span>
          <table>
            <tr><th>%</th><th>Clinical signs</th></tr>
            <tr><td>&lt; 5%</td><td>Subclinical · history of loss only</td></tr>
            <tr><td>5-7%</td><td>Mild ↓ skin turgor, dry MM</td></tr>
            <tr><td>8-10%</td><td>Marked skin tent, dry MM, sunken eyes</td></tr>
            <tr><td>10-12%</td><td>Above + tachycardia, weak pulses, ↑ CRT</td></tr>
            <tr><td>&gt; 12%</td><td>Shock — moribund, severely altered mentation</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Skin tent unreliable in old/cachectic patients<br>
          📌 Most reliable: PCV/TP, BUN, USG, weight loss</p>
        </div>

        <p><strong>Sodium pathophysiology:</strong></p>
        <ul>
          <li>Na regulated by water balance (ADH) + Na regulation (RAAS, ANP)</li>
          <li>Hyponatremia → hypotonic ECF → water shifts INTO cells → cerebral edema</li>
          <li>Hypernatremia → hypertonic ECF → water shifts OUT of cells → cellular dehydration → CNS shrinkage (brain bleeds)</li>
          <li>⚠️ <strong>Correction speed matters</strong> — too fast = osmotic demyelination (chronic Na disorders)</li>
        </ul>

        <p><strong>Potassium pathophysiology:</strong></p>
        <ul>
          <li>K determines membrane potential</li>
          <li>Hypokalemia → hyperpolarized → muscle weakness, ileus, arrhythmia</li>
          <li>Hyperkalemia → depolarized → ⚠️ inability to repolarize → cardiac arrest</li>
          <li>K shifts:
            <ul>
              <li>Insulin/glucose → K into cells (lowers serum K)</li>
              <li>Acidosis → K out of cells (↑ serum K)</li>
              <li>Beta-agonists → K into cells</li>
            </ul>
          </li>
        </ul>

        <p><strong>Acid-base disorders (4 primary):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Primary Acid-Base Disorders</span>
          <table>
            <tr><th>Disorder</th><th>pH</th><th>Primary change</th><th>Common causes</th></tr>
            <tr><td>Metabolic acidosis</td><td>↓</td><td>↓ HCO3</td><td>DKA, lactic, uremia, diarrhea, intox</td></tr>
            <tr><td>Metabolic alkalosis</td><td>↑</td><td>↑ HCO3</td><td>Vomiting, diuretics</td></tr>
            <tr><td>Respiratory acidosis</td><td>↓</td><td>↑ PaCO2</td><td>Hypoventilation, airway obstruction</td></tr>
            <tr><td>Respiratory alkalosis</td><td>↑</td><td>↓ PaCO2</td><td>Hyperventilation, hypoxemia, sepsis</td></tr>
          </table>
          <p class="mnem-tip">📌 Anion gap = (Na + K) − (Cl + HCO3) · normal &lt; 25<br>
          📌 ↑ AG metabolic acidosis: <strong>"MUDPILES"</strong> = methanol, uremia, DKA, paraldehyde, isoniazid, lactic, ethylene glycol, salicylates</p>
        </div>
      `,
      symptoms: `
        <p><strong>Dehydration:</strong></p>
        <ul>
          <li>Skin tent (delayed return)</li>
          <li>Dry MM, prolonged CRT</li>
          <li>Sunken eyes</li>
          <li>↑ HR, weak pulses (severe)</li>
          <li>Lethargy → obtundation</li>
        </ul>

        <p><strong>Hyponatremia clinical:</strong></p>
        <ul>
          <li>Often asymptomatic if mild/chronic</li>
          <li>Acute &lt; 125: lethargy, anorexia, vomiting</li>
          <li>Severe &lt; 115: seizures, coma, cerebral edema</li>
          <li>Specific: Addisonian crisis (hypoNa + hyperK)</li>
        </ul>

        <p><strong>Hypernatremia clinical:</strong></p>
        <ul>
          <li>Thirst (if intact mechanism)</li>
          <li>Lethargy, weakness</li>
          <li>Severe &gt; 170: tremor, seizure, coma</li>
          <li>Brain hemorrhage if rapid increase</li>
        </ul>

        <p><strong>Hypokalemia clinical:</strong></p>
        <ul>
          <li>Muscle weakness (especially cervical ventroflexion in cats — "hanging head")</li>
          <li>Polyuria (nephrogenic DI-like)</li>
          <li>Constipation, ileus</li>
          <li>Arrhythmia (severe &lt; 2.5)</li>
        </ul>

        <p><strong>Hyperkalemia clinical:</strong></p>
        <ul>
          <li>Bradycardia (especially blocked cat)</li>
          <li>Weak pulses</li>
          <li>Muscle weakness</li>
          <li>⚠️ Cardiac arrest (K &gt; 8-9)</li>
          <li>ECG progression: tall peaked T → loss of P → wide QRS → sine wave → arrest</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Essential workup:</strong></p>
        <ul>
          <li><strong>Chemistry panel</strong>:
            <ul>
              <li>Na, K, Cl, total CO2 (HCO3)</li>
              <li>BUN, creatinine</li>
              <li>Glucose</li>
              <li>Total protein, albumin</li>
            </ul>
          </li>
          <li><strong>Blood gas</strong> (ideally venous):
            <ul>
              <li>pH</li>
              <li>PCO2, HCO3</li>
              <li>BE (base excess)</li>
              <li>Lactate</li>
            </ul>
          </li>
          <li><strong>Urinalysis</strong>: USG (concentrating ability), glucose, protein, sediment</li>
          <li><strong>USG interpretation</strong>:
            <ul>
              <li>Dog: hyposthenuria &lt; 1.008, isosthenuria 1.008-1.012, hypersthenuria &gt; 1.030</li>
              <li>Cat: hypersthenuria &gt; 1.040</li>
            </ul>
          </li>
          <li><strong>ECG</strong> if hyperK suspected</li>
          <li><strong>Adrenal testing</strong> (ACTH stim) if hypoNa + hyperK</li>
          <li><strong>Imaging</strong>: rule out blocked cat, urinary obstruction</li>
        </ul>

        <p><strong>Acid-base interpretation steps:</strong></p>
        <ol>
          <li>pH: acidemia or alkalemia?</li>
          <li>Primary: respiratory (PCO2) or metabolic (HCO3)?</li>
          <li>Compensation appropriate?</li>
          <li>Anion gap calculation</li>
          <li>Mixed disorders?</li>
        </ol>
      `,
      treatment: `
        <p><strong>Fluid therapy basics — "4Rs":</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Fluid Therapy — "4Rs"</span>
          <ul>
            <li><strong>R</strong>esuscitation — restore perfusion (boluses)</li>
            <li><strong>R</strong>ehydration — correct deficit (over 12-24h)</li>
            <li><strong>R</strong>edistribution — match ongoing losses</li>
            <li><strong>R</strong>outine maintenance — daily requirements</li>
          </ul>
          <p class="mnem-tip">📌 Maintenance: dog ~50-60 mL/kg/day · cat ~40-50 mL/kg/day<br>
          📌 Rehydration: % dehydrated × BW (kg) × 1000 = mL deficit</p>
        </div>

        <p><strong>Fluid choices:</strong></p>
        <ul>
          <li><strong>LRS (Lactated Ringer's)</strong> — most common, balanced</li>
          <li><strong>Normosol-R / Plasma-Lyte</strong> — balanced, similar to LRS</li>
          <li><strong>0.9% NaCl</strong> — for hyperK, hyponatremia · ⚠️ acidifying with large volumes</li>
          <li><strong>D5W</strong> — free water · hypernatremia (slow correction)</li>
          <li><strong>Hypertonic saline (3-7%)</strong> — TBI, severe hyponatremia, refractory shock</li>
          <li><strong>Synthetic colloids</strong> (HES) — controversial · AKI risk</li>
          <li><strong>Plasma</strong> — albumin support, coag factors</li>
        </ul>

        <p><strong>Hyperkalemia emergency treatment:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Hyperkalemia — "C-BIG-K" Stepwise</span>
          <table>
            <tr><th>Step</th><th>Drug</th><th>Effect</th></tr>
            <tr><td><strong>C</strong>ardio-protect</td><td>Calcium gluconate 10% 0.5-1 mL/kg slow IV</td><td>Stabilizes cardiac membrane (no effect on K)</td></tr>
            <tr><td><strong>B</strong>icarbonate</td><td>NaHCO3 1-2 mEq/kg slow IV</td><td>Drives K into cells (acidosis correction)</td></tr>
            <tr><td><strong>I</strong>nsulin</td><td>Regular insulin 0.25-0.5 U/kg + glucose</td><td>Drives K into cells</td></tr>
            <tr><td><strong>G</strong>lucose</td><td>Dextrose 1-2 mL/kg of 50%</td><td>Triggers insulin (works alone too)</td></tr>
            <tr><td><strong>K</strong> elimination</td><td>Diuresis, dialysis, treat cause</td><td>Removes from body</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Calcium gluconate FIRST if cardiac signs · saves life immediately<br>
          📌 Then bicarbonate/insulin redistribute K · finally remove via urine</p>
        </div>

        <p><strong>Hypokalemia management:</strong></p>
        <ul>
          <li>Mild (3.0-3.5): oral KCl supplement</li>
          <li>Moderate (2.5-3.0): IV KCl in fluids (max 0.5 mEq/kg/hr)</li>
          <li>Severe (&lt; 2.5): aggressive · ECG monitoring</li>
          <li>⚠️ NEVER bolus K · always dilute</li>
        </ul>

        <p><strong>Hyponatremia correction:</strong></p>
        <ul>
          <li>⚠️ <strong>Slow correction critical</strong>: max ↑ 0.5 mEq/L/hr or 12 mEq/L per 24h</li>
          <li>Too fast = osmotic demyelination syndrome (CPM)</li>
          <li>Acute severe (&lt; 120 + symptomatic): hypertonic saline cautious</li>
          <li>Chronic: water restriction, treat cause</li>
        </ul>

        <p><strong>Hypernatremia correction:</strong></p>
        <ul>
          <li>⚠️ Slow correction: max ↓ 0.5 mEq/L/hr</li>
          <li>Calculate water deficit: 0.6 × BW × (Na/normal Na − 1)</li>
          <li>Replace over 24-72h</li>
          <li>Free water: D5W or hypotonic saline</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Volume overload</strong> — pulmonary edema, especially cardiac/renal patients</li>
          <li><strong>Osmotic demyelination</strong> — too rapid Na correction</li>
          <li><strong>Cerebral edema</strong> — too rapid hypernatremia correction</li>
          <li><strong>Cardiac arrest</strong> — severe hyper/hypoK</li>
          <li><strong>Refeeding syndrome</strong> — hypoK, hypoP, hypoMg in malnourished</li>
          <li><strong>AKI</strong> — colloid-related (HES)</li>
          <li><strong>Iatrogenic hyperK</strong> — over-supplementation</li>
          <li><strong>Persistent acid-base disturbance</strong> — failure to address underlying cause</li>
        </ul>

        <p><strong>Monitoring during fluid therapy:</strong></p>
        <ul>
          <li>Body weight q12h</li>
          <li>UOP (1-2 mL/kg/hr normal)</li>
          <li>HR, BP, MM, CRT</li>
          <li>Lung auscultation (crackles = overload)</li>
          <li>Body condition, edema (peripheral, pulmonary)</li>
          <li>Recheck electrolytes q12-24h</li>
          <li>Recheck BG/lactate to assess perfusion</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 2 — Immune & Hematologic
     ============================================================ */

  {
    id: 'path-immune-dysfunction',
    titleEn: 'Immune System Dysfunction',
    titleTh: 'ความผิดปกติของระบบภูมิคุ้มกัน',
    type: 'topic',
    system: 'immune',
    species: ['dog', 'cat'],
    tags: ['immune', 'hypersensitivity', 'autoimmune', 'immunodeficiency', 'allergy'],
    aliases: ['ภูมิคุ้มกันผิดปกติ', 'autoimmune disease'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Immune Dysfunction</strong> — abnormal immune response · 3 main categories:</p>
        <ul>
          <li>⭐ <strong>Hypersensitivity</strong> — excessive response to harmless antigen</li>
          <li>⭐ <strong>Autoimmunity</strong> — failure of self-tolerance → attack self</li>
          <li>⭐ <strong>Immunodeficiency</strong> — insufficient immune response</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Gell & Coombs — 4 Hypersensitivity Types</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">I</span>
              <span class="num-label">IgE — anaphylaxis, atopy</span>
            </div>
            <div class="num-card">
              <span class="num-big">II</span>
              <span class="num-label">Antibody-mediated (IMHA, MG)</span>
            </div>
            <div class="num-card">
              <span class="num-big">III</span>
              <span class="num-label">Immune complex (lupus, GN)</span>
            </div>
            <div class="num-card">
              <span class="num-big">IV</span>
              <span class="num-label">T cell — delayed (contact, granuloma)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ จำง่าย: <strong>"ACID"</strong> = Allergic, Cytotoxic, Immune complex, Delayed<br>
          📌 Type I-III = antibody-mediated · Type IV = cell-mediated</p>
        </div>
      `,
      etiology: `
        <p><strong>Hypersensitivity triggers:</strong></p>
        <ul>
          <li><strong>Type I (IgE)</strong>: pollen, dust mites, food allergens, insect bites, drugs (penicillin)</li>
          <li><strong>Type II (cytotoxic)</strong>: IMHA (RBC), ITP (platelet), MG (AChR), pemphigus (skin)</li>
          <li><strong>Type III (immune complex)</strong>: SLE, glomerulonephritis, polyarthritis</li>
          <li><strong>Type IV (delayed)</strong>: contact dermatitis, TB granuloma, transplant rejection</li>
        </ul>

        <p><strong>Autoimmunity triggers:</strong></p>
        <ul>
          <li>⭐ Genetic predisposition (Cocker, Poodle for IMHA)</li>
          <li>Infections (molecular mimicry)</li>
          <li>Drugs (sulfonamides, methimazole)</li>
          <li>Vaccination (rare, debated)</li>
          <li>Neoplasia (paraneoplastic)</li>
          <li>Hormonal (more common in females)</li>
        </ul>

        <p><strong>Immunodeficiency causes:</strong></p>
        <ul>
          <li><strong>Primary (rare)</strong>: SCID, IgA deficiency (Beagle, GSD), cyclic neutropenia (Gray Collie)</li>
          <li><strong>Secondary (common)</strong>:
            <ul>
              <li>Viral: ⭐ FeLV, FIV, distemper, parvo</li>
              <li>Drugs: chemo, immunosuppressants, steroids</li>
              <li>Stress, malnutrition, chronic disease</li>
              <li>Hyperadrenocorticism, splenectomy</li>
            </ul>
          </li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Type I — IgE hypersensitivity (anaphylaxis):</strong></p>
        <ol>
          <li><strong>Sensitization</strong>: 1st exposure → IgE → binds mast cells</li>
          <li><strong>Re-exposure</strong>: antigen cross-links IgE → degranulation</li>
          <li><strong>Mediators</strong>: histamine, leukotrienes, PGs, cytokines (delayed)</li>
          <li><strong>Effects</strong>: vasodilation + capillary leak + bronchoconstriction</li>
        </ol>

        <p>Shock organ varies: dog = liver/GI · cat = lungs</p>

        <p><strong>Type II — Antibody-mediated cytotoxicity:</strong></p>
        <ul>
          <li>IgG/IgM binds cell surface antigen</li>
          <li>3 mechanisms:
            <ul>
              <li>Complement-mediated lysis (MAC)</li>
              <li>Phagocytosis (opsonization)</li>
              <li>ADCC (NK cells)</li>
            </ul>
          </li>
          <li>Examples: IMHA, ITP, MG, pemphigus</li>
        </ul>

        <p><strong>Type III — Immune complex disease:</strong></p>
        <ul>
          <li>Ag-Ab complexes deposit in tissue (kidney, joints, vessels)</li>
          <li>Complement → neutrophil → tissue damage</li>
          <li>Examples: SLE, GN, type III HSR to drugs</li>
        </ul>

        <p><strong>Type IV — Cell-mediated (delayed):</strong></p>
        <ul>
          <li>T cell-driven (CD4 Th1 + CD8 cytotoxic)</li>
          <li>Onset: 24-72 hours after re-exposure</li>
          <li>Mediators: IFN-γ, TNF, perforin/granzymes</li>
          <li>Histology: lymphocytic/granulomatous infiltrate</li>
        </ul>

        <p><strong>Self-tolerance breakdown:</strong></p>
        <ul>
          <li>Central tolerance failure (autoreactive cells escape selection)</li>
          <li>Peripheral tolerance failure (↓ Treg)</li>
          <li>Molecular mimicry (pathogen ≈ self)</li>
          <li>Cryptic antigen exposure</li>
        </ul>
      `,
      symptoms: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">Anaphylaxis — Dog vs Cat</span>
          <table>
            <tr><th>Sign</th><th>Dog</th><th>Cat</th></tr>
            <tr><td>Shock organ</td><td>⭐ Liver/GI</td><td>⭐ Lungs</td></tr>
            <tr><td>GI</td><td>V/D (often hemorrhagic)</td><td>Salivation</td></tr>
            <tr><td>Resp</td><td>Late dyspnea</td><td>⭐ Severe dyspnea early</td></tr>
            <tr><td>Skin</td><td>Urticaria, facial edema</td><td>Pruritus, erythema</td></tr>
            <tr><td>Liver</td><td>↑ ALT (acute injury)</td><td>Less prominent</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Dog = "vomiting + collapse" · Cat = "dyspnea + collapse"</p>
        </div>

        <p><strong>Atopic dermatitis (chronic Type I):</strong></p>
        <ul>
          <li>Pruritus (face, paws, axilla, groin)</li>
          <li>Erythema, lichenification</li>
          <li>Recurrent otitis externa</li>
          <li>Secondary infections (Staph, Malassezia)</li>
        </ul>

        <p><strong>IMHA signs:</strong> lethargy, pale/icteric MM, splenomegaly, pigmenturia, fever</p>

        <p><strong>SLE signs (multi-system):</strong> polyarthritis, skin lesions, GN, hemolytic anemia, fever</p>

        <p><strong>Immunodeficiency signs:</strong> recurrent infections, opportunistic pathogens, FTT (puppy/kitten)</p>
      `,
      diagnosis: `
        <p><strong>Allergy testing:</strong></p>
        <ul>
          <li>Intradermal skin test (gold standard)</li>
          <li>Serum allergen-specific IgE</li>
          <li>Elimination diet trial 8-12 weeks</li>
        </ul>

        <p><strong>IMHA criteria (≥ 1):</strong></p>
        <ul>
          <li>Anemia (regenerative usually)</li>
          <li>⭐ Spherocytosis (dog)</li>
          <li>⭐ Saline agglutination test (positive)</li>
          <li>Coombs test (DAT)</li>
          <li>Hyperbilirubinemia, pigmenturia</li>
          <li>Rule out: Babesia, Mycoplasma, zinc, onion</li>
        </ul>

        <p><strong>SLE — ARA criteria (need ≥ 4):</strong> skin, polyarthritis, nephritis, cytopenias, polymyositis, pleuritis, neuro signs + ANA</p>

        <p><strong>Immunodeficiency workup:</strong></p>
        <ul>
          <li>CBC, SPE, IgG/IgM/IgA</li>
          <li>FeLV/FIV (cat)</li>
          <li>Vaccine response titers</li>
          <li>Lymphocyte subset analysis</li>
        </ul>
      `,
      treatment: `
        <div class="mnemonic thai">
          <span class="mnem-title">Anaphylaxis Emergency — "EFFI"</span>
          <ul>
            <li><strong>E</strong>pinephrine — 0.01 mg/kg IM/IV</li>
            <li><strong>F</strong>luids — aggressive crystalloid</li>
            <li><strong>F</strong>amotidine + diphenhydramine</li>
            <li><strong>I</strong>mmediate steroid — dexamethasone 0.1-0.3 mg/kg</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Epinephrine FIRST · all else secondary</p>
        </div>

        <p><strong>Atopic dermatitis treatment ladder:</strong></p>
        <ol>
          <li>Topical (shampoos, sprays)</li>
          <li>EFA supplements</li>
          <li>⭐ Oclacitinib (Apoquel) — JAK inhibitor</li>
          <li>⭐ Lokivetmab (Cytopoint) — anti-IL-31 mAb</li>
          <li>Cyclosporine (Atopica)</li>
          <li>Steroids — short-term flares only</li>
          <li>Allergen-specific immunotherapy</li>
          <li>Treat secondary infections</li>
        </ol>

        <p><strong>IMHA treatment:</strong></p>
        <ul>
          <li>⭐ Prednisolone 2-4 mg/kg/day immunosuppressive</li>
          <li>+ Azathioprine 2 mg/kg q24h (DOG ONLY · NOT cat)</li>
          <li>Cyclosporine 5 mg/kg q12h (alternative, both species)</li>
          <li>MMF (mycophenolate) — alternative</li>
          <li>Antithrombotic: clopidogrel 1.5-3 mg/kg/day (high PTE risk)</li>
          <li>Transfusion if severe anemia</li>
          <li>Long taper: months · 25% reduction every 3-4 weeks</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Immunosuppressive Drugs Overview</span>
          <table>
            <tr><th>Drug</th><th>Notes</th></tr>
            <tr><td>Prednisolone</td><td>1st line · GI, PU/PD, panting</td></tr>
            <tr><td>Azathioprine</td><td>⚠️ DOG ONLY · BM suppression, hepatotox</td></tr>
            <tr><td>Cyclosporine</td><td>Both species · GI, gingival hyperplasia</td></tr>
            <tr><td>MMF</td><td>GI side effects</td></tr>
            <tr><td>Chlorambucil</td><td>Cat IBD, mild lymphoma</td></tr>
            <tr><td>IVIG</td><td>Refractory · expensive</td></tr>
          </table>
        </div>
      `,
      complications: `
        <ul>
          <li>Anaphylactic death if untreated</li>
          <li>PTE in IMHA (high mortality)</li>
          <li>Relapse (lifelong management common)</li>
          <li>Drug toxicity (BM suppression, hepatotox)</li>
          <li>Iatrogenic immunosuppression → opportunistic infections</li>
          <li>Diabetes (long-term steroids)</li>
          <li>Adrenal suppression → Addisonian crisis if abrupt withdrawal</li>
          <li>Neoplasia (chronic immunosuppression)</li>
        </ul>

        <p><strong>Treatment monitoring:</strong></p>
        <ul>
          <li>CBC q2-4 weeks (BM suppression)</li>
          <li>Chemistry q1-3 months (liver, kidney)</li>
          <li>UA + culture q3-6 months</li>
          <li>BP (steroid HT)</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-anemia',
    titleEn: 'Anemia — Pathophysiology & Mechanisms',
    titleTh: 'โลหิตจาง',
    type: 'topic',
    system: 'hemato',
    species: ['dog', 'cat'],
    tags: ['anemia', 'regenerative', 'non-regenerative', 'hemolysis', 'blood loss', 'IMHA'],
    aliases: ['ภาวะโลหิตจาง', 'low PCV'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Anemia</strong> — ↓ RBC mass · PCV/Hb/RBC count below normal</p>
        <ul>
          <li>Dog PCV: 37-55% · Cat PCV: 30-45%</li>
          <li>Severity: mild (30-37) · moderate (20-30) · severe (15-20) · very severe (&lt; 15)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Anemia Mechanisms — "BLD"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">B</span>
              <span class="num-label">Blood Loss (hemorrhage)</span>
            </div>
            <div class="num-card">
              <span class="num-big">L</span>
              <span class="num-label">Lysis (hemolysis)</span>
            </div>
            <div class="num-card">
              <span class="num-big">D</span>
              <span class="num-label">Decreased production</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ Regenerative (B + L) vs Non-regenerative (D)<br>
          📌 Reticulocyte count = key differentiator</p>
        </div>

        <p><strong>Regenerative threshold:</strong> Dog &gt; 60-80,000/μL · Cat &gt; 50,000/μL aggregate retics</p>
        <p>⚠️ Pre-regenerative period (&lt; 3 days) — looks non-regen initially</p>
      `,
      etiology: `
        <p><strong>Blood loss anemia:</strong></p>
        <ul>
          <li><strong>External</strong>: trauma, GI bleeding (NSAIDs, neoplasia, parasites), urinary, epistaxis, hookworm/flea</li>
          <li><strong>Internal</strong>: splenic mass rupture (HSA), hemothorax/abdomen, coagulopathy (rodenticide, vWD, DIC)</li>
        </ul>

        <p><strong>Hemolytic anemia:</strong></p>
        <ul>
          <li><strong>Immune-mediated (IMHA)</strong>: primary or secondary (drugs, neoplasia, infection)</li>
          <li><strong>Infectious</strong>: ⭐ Babesia, Mycoplasma haemofelis (cat), Cytauxzoon, Lepto, FeLV</li>
          <li><strong>Toxic</strong>: ⭐ onion/garlic, ⭐ zinc, acetaminophen (cat), naphthalene, snake</li>
          <li><strong>Mechanical</strong>: DIC, HSA, heat stroke, heartworm caval syndrome</li>
          <li><strong>Hereditary (rare)</strong>: PK deficiency (Basenji), PFK (English Springer)</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Non-Regen Anemia — "AID-S"</span>
          <ul>
            <li><strong>A</strong>nemia of chronic disease (most common)</li>
            <li><strong>I</strong>ron deficiency (chronic blood loss)</li>
            <li><strong>D</strong>eficiency / dysfunction:
              <ul>
                <li>BM disease, FeLV/FIV (cat)</li>
                <li>CKD (↓ EPO)</li>
                <li>Hypothyroid, hypoadrenal</li>
                <li>Drug-induced (chemo, estrogen)</li>
              </ul>
            </li>
            <li><strong>S</strong>tarvation/nutritional — folate, B12, iron, copper</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ ACD = IL-6 → hepcidin → iron sequestration<br>
          📌 ⭐ FeLV-related anemia very common in cat</p>
        </div>
      `,
      pathophysiology: `
        <p><strong>Acute blood loss timeline:</strong></p>
        <ol>
          <li>Initial: PCV/TP unchanged (proportional loss)</li>
          <li>2-12 hr: ECF shifts → hemodilution → ↓ PCV evident</li>
          <li>3-5 days: BM response (reticulocytosis)</li>
          <li>Recovery 1-2 weeks if cause resolved</li>
        </ol>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Intravascular vs Extravascular Hemolysis</span>
          <table>
            <tr><th>Feature</th><th>Intravascular</th><th>Extravascular</th></tr>
            <tr><td>Site</td><td>Within blood vessels</td><td>⭐ Spleen, liver</td></tr>
            <tr><td>Plasma</td><td>⭐ Red (Hb-emia)</td><td>Yellow (bilirubin)</td></tr>
            <tr><td>Urine</td><td>⭐ Red-brown (Hb-uria)</td><td>Normal-yellow</td></tr>
            <tr><td>Severity</td><td>Often more severe</td><td>Variable</td></tr>
            <tr><td>Examples</td><td>Severe IMHA, zinc, snake</td><td>IMHA most, spherocytosis</td></tr>
          </table>
        </div>

        <p><strong>ACD mechanism:</strong> inflammation → IL-6 → hepcidin → iron trapped in macrophages → ↓ erythropoiesis</p>

        <p><strong>CKD anemia:</strong> ↓ EPO + uremic toxins (↓ RBC lifespan) + GI ulcer + iron deficiency</p>

        <p><strong>Compensation:</strong></p>
        <ul>
          <li>↑ HR, ↑ CO, ↓ TPR (hyperdynamic)</li>
          <li>↑ RR (compensate for ↓ O2 carrying)</li>
          <li>Hb-O2 curve right shift (↑ 2,3-DPG)</li>
          <li>↑ EPO if intact kidneys</li>
        </ul>
      `,
      symptoms: `
        <ul>
          <li><strong>Mild</strong>: subclinical, mild exercise intolerance</li>
          <li><strong>Moderate</strong>: lethargy, pale MM, ↑ CRT, tachycardia, tachypnea, anorexia, heart murmur (low viscosity)</li>
          <li><strong>Severe (PCV &lt; 18 dog, &lt; 15 cat)</strong>: marked weakness, collapse, severe pallor, dyspnea, mental dullness, cardiac decompensation risk</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Clinical Clues by Type</span>
          <table>
            <tr><th>Type</th><th>Clues</th></tr>
            <tr><td>Acute hemorrhage</td><td>Trauma history, hypovolemic shock</td></tr>
            <tr><td>Hemolysis</td><td>⭐ Icterus, pigmenturia, splenomegaly</td></tr>
            <tr><td>IMHA</td><td>⭐ Sudden onset · spherocytes · agglutination</td></tr>
            <tr><td>Chronic GI bleed</td><td>Melena, microcytic, low MCHC</td></tr>
            <tr><td>BM disease</td><td>⭐ Pancytopenia, abnormal bleeding</td></tr>
            <tr><td>CKD</td><td>PU/PD, ↑ creatinine, mild non-regen</td></tr>
          </table>
        </div>
      `,
      diagnosis: `
        <p><strong>Step 1 — Confirm + characterize:</strong></p>
        <ul>
          <li>CBC + retic count + smear</li>
          <li><strong>Smear morphology critical</strong>:
            <ul>
              <li>Polychromasia (regenerative)</li>
              <li>Spherocytes (IMHA dog)</li>
              <li>Schistocytes (DIC, microangiopathic)</li>
              <li>Heinz bodies (oxidative — onion, zinc)</li>
              <li>Inclusions (Babesia, Mycoplasma, Cytauxzoon)</li>
              <li>Hypochromia, microcytosis (iron def)</li>
            </ul>
          </li>
        </ul>

        <p><strong>If regenerative — workup:</strong></p>
        <ul>
          <li><strong>Hemolysis</strong>: saline agglutination, Coombs, spherocytes, bilirubin, plasma color</li>
          <li><strong>Blood loss</strong>: fecal occult, AUS, coag panel, UA</li>
          <li><strong>Infection</strong>: 4DX SNAP, Babesia/Mycoplasma PCR, FeLV/FIV (cat)</li>
          <li><strong>Toxin</strong>: history (onion, garlic, zinc, acetaminophen)</li>
        </ul>

        <p><strong>If non-regenerative:</strong></p>
        <ul>
          <li>Underlying disease workup: chemistry, T4, ACTH stim, FeLV/FIV</li>
          <li>Iron studies: serum iron, TIBC, ferritin</li>
          <li>BM aspirate if persistent unexplained or pancytopenia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Transfusion criteria:</strong> PCV &lt; 15-20% OR clinical signs (collapse, dyspnea)</p>

        <p><strong>Blood products:</strong></p>
        <ul>
          <li>Whole blood: dog 10-20 mL/kg · cat 10-15 mL/kg over 4 hr</li>
          <li>pRBC: 5-15 mL/kg</li>
          <li>FFP: 10-15 mL/kg for coagulopathy</li>
          <li>Cryoprecipitate: vWD, factor VIII</li>
          <li>⚠️ Cat blood typing MANDATORY (severe reactions)</li>
          <li>Cross-match after first transfusion (4 days)</li>
        </ul>

        <p><strong>Specific treatments:</strong></p>
        <ul>
          <li><strong>IMHA</strong>: prednisolone 2-4 mg/kg/day + clopidogrel + transfusion</li>
          <li><strong>Babesia</strong>: imidocarb (B. canis) · atovaquone + azithromycin (B. gibsoni)</li>
          <li><strong>Mycoplasma</strong>: doxycycline 10 mg/kg q24h × 4 weeks</li>
          <li><strong>Onion/zinc</strong>: remove source, supportive, zinc chelation (CaEDTA) + remove FB</li>
          <li><strong>Acetaminophen (cat)</strong>: NAC urgent, SAMe, methylene blue</li>
          <li><strong>CKD</strong>: erythropoietin/darbepoetin + iron · ⚠️ pure red cell aplasia risk</li>
          <li><strong>Iron deficiency</strong>: ferrous sulfate 50-100 mg/kg/day PO (dog)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Cardiac decompensation (high-output failure)</li>
          <li>Tissue hypoxia (multi-organ)</li>
          <li>Transfusion reactions (acute hemolytic, allergic, TACO)</li>
          <li>PTE (IMHA, hyperviscosity)</li>
          <li>Hemoglobinuric nephropathy (severe intravascular hemolysis)</li>
          <li>DIC (concurrent in severe cases)</li>
          <li>Iron overload (repeated transfusions)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>IMHA: 30-70% mortality (intravascular + autoagglutination = worse)</li>
          <li>BM aplasia: guarded-poor</li>
          <li>FeLV-related: poor</li>
          <li>Babesia: good with treatment</li>
          <li>Onion/zinc: good if removed early</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-hemostasis',
    titleEn: 'Hemostasis Disorders & Coagulopathies',
    titleTh: 'ความผิดปกติของการแข็งตัวของเลือด',
    type: 'topic',
    system: 'hemato',
    species: ['dog', 'cat'],
    tags: ['coagulation', 'platelet', 'thrombocytopenia', 'DIC', 'vWD', 'rodenticide', 'hemophilia'],
    aliases: ['การแข็งตัวเลือด', 'bleeding disorder'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Hemostasis</strong> = balance between bleeding and clotting · 4 phases:</p>

        <div class="mnemonic numbers">
          <span class="mnem-title">4 Phases of Hemostasis</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Vascular (vasoconstriction)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Primary (platelet plug)</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Secondary (fibrin clot)</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">Fibrinolysis</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ Primary defects → mucosal/petechial bleeding<br>
          📌 ⭐ Secondary defects → cavitary/joint bleeding</p>
        </div>

        <p><strong>Categories:</strong></p>
        <ul>
          <li>Primary hemostasis: platelets + von Willebrand factor</li>
          <li>Secondary hemostasis: coagulation factors</li>
          <li>Mixed: DIC (consumes everything)</li>
        </ul>
      `,
      etiology: `
        <div class="mnemonic thai">
          <span class="mnem-title">Thrombocytopenia — "DIPS"</span>
          <ul>
            <li><strong>D</strong>ecreased production: BM disease, FeLV, drugs (estrogen, chemo)</li>
            <li><strong>I</strong>ncreased destruction: ⭐ ITP, drug-induced, SLE</li>
            <li><strong>P</strong>latelet consumption: ⭐ DIC, massive hemorrhage, HSA</li>
            <li><strong>S</strong>equestration: splenic torsion, hypothermia</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Tick-borne: <strong>Ehrlichia, Anaplasma, Babesia, RMSF</strong> = MAJOR cause</p>
        </div>

        <p><strong>Coagulation factor deficiencies:</strong></p>
        <ul>
          <li><strong>Acquired (most common)</strong>:
            <ul>
              <li>⭐ Anticoagulant rodenticide (vit K antagonism — factors II, VII, IX, X)</li>
              <li>Liver failure (↓ synthesis)</li>
              <li>Vit K malabsorption (cholestasis, EPI)</li>
              <li>DIC (consumption)</li>
              <li>Snake venom</li>
            </ul>
          </li>
          <li><strong>Hereditary (rare)</strong>:
            <ul>
              <li>⭐ vWD — most common inherited (Doberman)</li>
              <li>Hemophilia A (factor VIII) · Hemophilia B (factor IX) — X-linked</li>
              <li>Factor VII (Beagle), Factor XII (no clinical signs)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Platelet dysfunction:</strong> drugs (⭐ aspirin, NSAIDs, clopidogrel), uremia, liver disease, hyperproteinemia, vWD, hereditary thrombasthenia</p>

        <p><strong>DIC triggers:</strong> ⭐ sepsis (most common), heat stroke, HSA, lymphoma, MCT, GDV, severe pancreatitis, trauma, burns, snake</p>
      `,
      pathophysiology: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">Coagulation Pathways</span>
          <table>
            <tr><th>Pathway</th><th>Test</th><th>Factors</th></tr>
            <tr><td>Intrinsic</td><td>aPTT</td><td>XII, XI, IX, VIII, X, V, II, I</td></tr>
            <tr><td>Extrinsic</td><td>PT</td><td>VII, X, V, II, I (TF)</td></tr>
            <tr><td>Common</td><td>PT + aPTT</td><td>X, V, II, I</td></tr>
          </table>
          <p class="mnem-tip">📌 <strong>Vitamin K-dependent:</strong> ⭐ "1972" = II, VII, IX, X (+ proteins C, S)<br>
          📌 ⭐ Factor VII shortest t½ → PT prolongs FIRST in vit K antagonism</p>
        </div>

        <p><strong>Anticoagulant rodenticide:</strong></p>
        <ol>
          <li>Inhibits vit K epoxide reductase</li>
          <li>Cannot regenerate active vit K</li>
          <li>Vit K-dependent factors decay (Factor VII first, t½ ~6h)</li>
          <li>Onset: 24-48 hours after ingestion</li>
          <li>Severe coagulopathy → spontaneous bleeding</li>
          <li>Common sites: thorax (hemothorax), abdomen, joints, CNS</li>
        </ol>

        <p>1st gen (warfarin): treat 14 days · 2nd gen (brodifacoum): ⭐ treat 4-6 weeks</p>

        <p><strong>vWD pathophysiology:</strong></p>
        <ul>
          <li>vWF: bridges platelets to subendothelium + carries factor VIII</li>
          <li>Type I: ↓ quantity, mild-moderate (Doberman)</li>
          <li>Type II: abnormal function (German Shorthair)</li>
          <li>Type III: severe, near-absent (Scottish Terrier)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">DIC — 4 Phases</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Hyperdynamic (subclinical)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Consumption (microthrombi)</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Bleeding (factors depleted)</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">MOF / death</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ DIC paradox: thrombosis + bleeding simultaneously</p>
        </div>

        <p>DIC labs: ↓ platelets, ↑ PT/aPTT, ↓ fibrinogen, ↓ AT, ↑ D-dimer, schistocytes</p>
      `,
      symptoms: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">Primary vs Secondary Hemostasis Bleeding</span>
          <table>
            <tr><th>Feature</th><th>Primary defect</th><th>Secondary defect</th></tr>
            <tr><td>Cause</td><td>Platelet, vWF</td><td>Factor deficiency</td></tr>
            <tr><td>Mucosal bleeding</td><td>⭐ Common</td><td>Less common</td></tr>
            <tr><td>Petechiae</td><td>⭐ Yes</td><td>No</td></tr>
            <tr><td>Cavity bleeding</td><td>Less</td><td>⭐ Yes (hemothorax/abdomen)</td></tr>
            <tr><td>Joint bleeding</td><td>Rare</td><td>⭐ Hemarthrosis</td></tr>
            <tr><td>Onset post-injury</td><td>Immediate</td><td>Delayed (hours)</td></tr>
            <tr><td>Hematomas</td><td>Small</td><td>⭐ Large, deep</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Petechiae = thrombocytopenia/vWD<br>
          📌 ⭐ Hemothorax = factor deficiency (rodenticide!)</p>
        </div>

        <p><strong>Specific scenarios:</strong></p>
        <ul>
          <li><strong>Acute rodenticide</strong>: lethargy, dyspnea (hemothorax most common), pale MM, 2-7 days post-ingestion</li>
          <li><strong>ITP</strong>: petechiae (MM, ventral abdomen), epistaxis, melena, otherwise bright</li>
          <li><strong>vWD</strong>: excessive bleeding from minor wounds, dental, OHE, prolonged estrus</li>
          <li><strong>Hemophilia</strong>: young male puppies (X-linked), hemarthrosis, deep hematomas</li>
          <li><strong>DIC</strong>: severe concurrent disease, mixed bleeding, MOF, hypotension</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Initial workup:</strong></p>
        <ul>
          <li>CBC + smear (platelets, schistocytes, tick inclusions)</li>
          <li>Coag panel: PT, aPTT, fibrinogen, D-dimer, antithrombin</li>
          <li>BMBT: normal &lt; 4 min (dog), &lt; 3 min (cat) · screens primary hemostasis</li>
        </ul>

        <p><strong>Specific tests:</strong></p>
        <ul>
          <li>vWF antigen (vWF:Ag) — quantitative</li>
          <li>Factor activity assays (specialty)</li>
          <li>TEG — comprehensive whole blood</li>
          <li>4DX SNAP, tick PCR (geographic)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Coag Test Patterns</span>
          <table>
            <tr><th>Pattern</th><th>Likely cause</th></tr>
            <tr><td>↑ PT, normal aPTT</td><td>Early rodenticide (factor VII first)</td></tr>
            <tr><td>↑ PT, ↑ aPTT</td><td>⭐ Rodenticide, liver failure, DIC</td></tr>
            <tr><td>Normal PT, ↑ aPTT</td><td>Hemophilia A or B, vWD type 3</td></tr>
            <tr><td>Low platelet, normal coag</td><td>ITP, tick-borne, BM</td></tr>
            <tr><td>Low platelet + ↑ coag</td><td>⭐ DIC, severe rodenticide</td></tr>
            <tr><td>Normal coag, ↑ BMBT</td><td>vWD, thrombocytopathia (uremia, drugs)</td></tr>
          </table>
        </div>
      `,
      treatment: `
        <div class="mnemonic thai">
          <span class="mnem-title">Rodenticide Toxicity — Treatment</span>
          <ul>
            <li><strong>Recent (&lt; 4 hr)</strong>: emesis + activated charcoal</li>
            <li><strong>K1 (phytonadione)</strong>: 2.5-5 mg/kg PO with fatty meal q12h</li>
            <li><strong>Duration</strong>: 1st gen 14 days · ⭐ 2nd gen 4-6 weeks</li>
            <li><strong>Recheck PT</strong> 48-72h after stopping</li>
            <li><strong>Active bleeding</strong>: FFP + K1 + supportive</li>
            <li><strong>Hemothorax</strong>: thoracocentesis if respiratory compromise</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Vit K1 with fat = 4× absorption · ALWAYS feed before<br>
          📌 ⚠️ NEVER use vit K3 (menadione) — ineffective + toxic</p>
        </div>

        <p><strong>ITP treatment:</strong></p>
        <ul>
          <li>Prednisolone 2-4 mg/kg/day</li>
          <li>+ vincristine 0.5 mg/m² IV (single dose)</li>
          <li>+ azathioprine (dog) or cyclosporine</li>
          <li>IVIG (refractory)</li>
          <li>Avoid IM injections, soft food, no rough handling</li>
          <li>Long taper over months</li>
        </ul>

        <p><strong>vWD:</strong></p>
        <ul>
          <li>DDAVP 1 mcg/kg SC pre-surgery (Type I only)</li>
          <li>Cryoprecipitate 1 unit/10 kg · concentrated vWF + FVIII</li>
          <li>FFP if cryo unavailable</li>
          <li>Avoid NSAIDs, aspirin</li>
        </ul>

        <p><strong>Hemophilia:</strong></p>
        <ul>
          <li>Cryoprecipitate (FVIII) for hemophilia A</li>
          <li>FFP (FIX) for hemophilia B</li>
          <li>Lifelong management, restrict trauma</li>
        </ul>

        <p><strong>DIC:</strong></p>
        <ul>
          <li>⭐ Treat underlying cause (most important)</li>
          <li>Supportive: fluids, oxygenation</li>
          <li>FFP if bleeding (replace factors + AT)</li>
          <li>pRBC if anemic</li>
          <li>Heparin/LMWH controversial</li>
          <li>Prognosis: poor (50-90% mortality)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Exsanguination (untreated coagulopathy)</li>
          <li>Compartment syndrome (large hematomas)</li>
          <li>Hemothorax → respiratory failure</li>
          <li>CNS bleed → neurologic deficits, death</li>
          <li>GI bleeding → severe anemia</li>
          <li>Joint contracture (repeated hemarthrosis)</li>
          <li>Iron deficiency (chronic blood loss)</li>
          <li>Transfusion reactions</li>
          <li>Drug toxicity from immunosuppression</li>
          <li>Recurrence (ITP, IMHA)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Acute rodenticide + prompt K1: ⭐ excellent</li>
          <li>Active bleeding rodenticide: guarded</li>
          <li>ITP: 60-80% remission with treatment</li>
          <li>DIC: poor</li>
          <li>vWD type I: usually well-controlled</li>
          <li>vWD type III: severe, frequent bleeding</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-neoplasia',
    titleEn: 'Neoplasia — Cancer Pathophysiology',
    titleTh: 'มะเร็งและเนื้องอก',
    type: 'topic',
    system: 'neoplasia',
    species: ['dog', 'cat'],
    tags: ['cancer', 'tumor', 'metastasis', 'paraneoplastic', 'oncogene'],
    aliases: ['cancer', 'tumor pathophysiology'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Neoplasia</strong> — uncontrolled cell proliferation due to genetic mutations</p>
        <ul>
          <li><strong>Benign</strong>: well-differentiated, encapsulated, slow growth, no metastasis</li>
          <li><strong>Malignant (cancer)</strong>: poorly differentiated, invasive, fast growth, metastasizes</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">6 Classic Cancer Hallmarks (Hanahan & Weinberg)</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Self-sufficient growth signals</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Insensitive to anti-growth</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Evade apoptosis</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">Limitless replication (telomerase)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 + 5: Sustained angiogenesis · 6: Tissue invasion + metastasis<br>
          📌 Emerging: ↓ Energy reprogramming · Immune evasion · Genome instability · Inflammation</p>
        </div>
      `,
      etiology: `
        <p><strong>Cancer-causing factors:</strong></p>
        <ul>
          <li><strong>Genetic</strong>:
            <ul>
              <li>Inherited mutations (rare)</li>
              <li>Breed predispositions: Golden (HSA, lymphoma), Bernese (histiocytic), Boxer (MCT), Scottish Terrier (TCC), Doberman (OSA), Siamese (lymphoma)</li>
            </ul>
          </li>
          <li><strong>Environmental</strong>: UV (SCC — white cat ears, dog noses), tobacco, lawn herbicides (lymphoma, TCC)</li>
          <li><strong>Viral</strong>: ⭐ FeLV → lymphoma, leukemia · FIV ↑ lymphoma · papillomavirus → SCC</li>
          <li><strong>Hormonal</strong>: mammary cancer ↑↑ in intact female (early spay protective)</li>
          <li><strong>Chronic inflammation</strong>: chronic IBD → GI lymphoma (cat), chronic dermatitis → SCC</li>
          <li><strong>Aging</strong>: accumulated mutations, ↓ immune surveillance</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Top Tumors — Dog vs Cat</span>
          <table>
            <tr><th>Site</th><th>Dog</th><th>Cat</th></tr>
            <tr><td>Skin</td><td>MCT, lipoma, histiocytoma</td><td>BCC, SCC, fibrosarcoma</td></tr>
            <tr><td>Mammary</td><td>50% malignant</td><td>⚠️ 80-90% malignant</td></tr>
            <tr><td>Hematopoietic</td><td>Lymphoma, leukemia</td><td>Lymphoma (FeLV-related)</td></tr>
            <tr><td>Bone</td><td>OSA (large breeds)</td><td>Less common, less aggressive</td></tr>
            <tr><td>Splenic</td><td>HSA (#1)</td><td>MCT, lymphoma</td></tr>
            <tr><td>Oral</td><td>Melanoma, SCC</td><td>SCC (poor prognosis)</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Cat mammary highly malignant · spay before 6 months critical</p>
        </div>
      `,
      pathophysiology: `
        <p><strong>Multistep carcinogenesis:</strong></p>
        <ol>
          <li>Initiation: DNA damage → mutation</li>
          <li>Promotion: clonal expansion</li>
          <li>Progression: additional mutations → malignant phenotype</li>
          <li>Metastasis: invasion → vessels → distant sites</li>
        </ol>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Cancer Genes</span>
          <table>
            <tr><th>Type</th><th>Effect</th><th>Examples</th></tr>
            <tr><td>Oncogenes</td><td>Mutated → ↑ growth</td><td>RAS, MYC, c-KIT (MCT), ERBB2</td></tr>
            <tr><td>Tumor suppressors</td><td>Lost → ↑ growth</td><td>TP53, RB1, BRCA, APC</td></tr>
            <tr><td>DNA repair</td><td>Lost → ↑ mutations</td><td>MLH1, MSH2</td></tr>
            <tr><td>Apoptosis regulators</td><td>Lost → cell can't die</td><td>BCL-2, BAX</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>c-KIT mutation in MCT</strong> = target for toceranib (Palladia)<br>
          📌 ⭐ TP53 = "guardian of genome"</p>
        </div>

        <p><strong>Metastasis steps:</strong></p>
        <ol>
          <li>Local invasion (MMPs break ECM)</li>
          <li>Intravasation (enter vessels)</li>
          <li>Survive in circulation (evade immune)</li>
          <li>Extravasation</li>
          <li>Colonization (micro → macro mets)</li>
          <li>Angiogenesis (VEGF-driven)</li>
        </ol>

        <p><strong>Metastasis routes:</strong></p>
        <ul>
          <li>Hematogenous — sarcomas (OSA, HSA → lung)</li>
          <li>Lymphatic — carcinomas (mammary → regional LN)</li>
          <li>Transcoelomic — peritoneum (carcinomatosis)</li>
          <li>Direct extension — local invasion</li>
        </ul>

        <p><strong>Common metastasis patterns:</strong></p>
        <ul>
          <li>OSA → lungs (90%)</li>
          <li>HSA → lungs, liver, spleen</li>
          <li>Mammary → regional LN, lungs</li>
          <li>Anal sac adenoCA → sublumbar LN</li>
          <li>Oral melanoma → LN, lungs</li>
          <li>MCT → spleen, liver, LN</li>
          <li>Lymphoma → systemic from start</li>
        </ul>

        <div class="mnemonic thai">
          <span class="mnem-title">Common Paraneoplastic Syndromes</span>
          <ul>
            <li>⭐ <strong>Hypercalcemia of malignancy</strong>: lymphoma (T cell), anal sac adenoCA, multiple myeloma · PTHrP-mediated</li>
            <li><strong>Hypoglycemia</strong>: insulinoma, large abdominal tumors (HSA, hepatoma)</li>
            <li><strong>Anemia</strong>: ACD, hemorrhage, IMHA-like</li>
            <li><strong>Hyperviscosity</strong>: multiple myeloma (↑ Ig)</li>
            <li><strong>DIC/thrombocytopenia</strong>: HSA, lymphoma</li>
            <li><strong>Cachexia</strong>: TNF-α, IL-6 mediated</li>
            <li><strong>Polyneuropathy</strong>: paraneoplastic neuropathy</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Hypercalcemia + LN enlargement = lymphoma until proven otherwise<br>
          📌 Resolves with tumor treatment, returns with relapse</p>
        </div>
      `,
      symptoms: `
        <p><strong>Local effects:</strong> mass, pain (bone), ulceration, bleeding, obstruction, lameness</p>

        <p><strong>Systemic:</strong> cachexia, lethargy, fever of unknown origin, PU/PD, GI signs, bleeding, neurologic</p>

        <p><strong>Tumor-specific clues:</strong></p>
        <ul>
          <li><strong>Lymphoma</strong>: peripheral LN enlargement (multicentric dog), GI signs (cat)</li>
          <li><strong>HSA</strong>: collapse from hemoabdomen, pale MM, weak pulses</li>
          <li><strong>OSA</strong>: lameness at appendicular bone ("away from elbow, toward knee" — distal radius, proximal humerus, distal femur, proximal tibia)</li>
          <li><strong>MCT</strong>: cutaneous mass, "Darier's sign" (degranulation), GI ulcers (histamine)</li>
          <li><strong>TCC bladder</strong>: PU/PD, hematuria, dysuria</li>
          <li><strong>Oral SCC</strong>: halitosis, drooling, dysphagia, weight loss</li>
          <li><strong>Insulinoma</strong>: episodic weakness, seizures, low BG</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Approach — "stage and grade":</strong></p>
        <ol>
          <li>Diagnose tumor (cyto/histo)</li>
          <li>Determine grade (aggressive?)</li>
          <li>Stage disease (extent of spread)</li>
          <li>Assess overall health</li>
          <li>Plan treatment</li>
        </ol>

        <p><strong>Diagnostic methods:</strong></p>
        <ul>
          <li><strong>Cytology (FNA)</strong>: first-line · good for lymphoma, MCT, lipoma · limited for sarcoma</li>
          <li><strong>Histopathology</strong>: gold standard · provides grade, margins</li>
          <li><strong>IHC</strong>: lymphoma CD3 (T) vs CD79a/CD20 (B) · MCT c-KIT · melanoma Melan-A</li>
          <li><strong>Flow cytometry</strong>: lymphoma immunophenotyping (B vs T cell)</li>
          <li><strong>PARR</strong>: PCR for clonality (lymphoma vs reactive)</li>
        </ul>

        <p><strong>Staging:</strong></p>
        <ul>
          <li>3-view chest XR (lung mets)</li>
          <li>Abdominal US (liver, spleen, LN)</li>
          <li>CT/MRI (detailed anatomy)</li>
          <li>LN aspirate (regional)</li>
          <li>BM aspirate (hematopoietic neoplasia)</li>
          <li>Echocardiogram (HSA right atrium, pre-doxorubicin)</li>
        </ul>

        <p><strong>Routine workup:</strong> CBC, chemistry, UA, coag (HSA/hepatic), Ca (paraneoplastic), UPC, FeLV/FIV (cat)</p>
      `,
      treatment: `
        <div class="mnemonic table-aid">
          <span class="mnem-title">Cancer Treatment Modalities</span>
          <table>
            <tr><th>Modality</th><th>Best for</th></tr>
            <tr><td>Surgery</td><td>Local, accessible tumors</td></tr>
            <tr><td>Radiation</td><td>Local control of unresectable</td></tr>
            <tr><td>Chemotherapy</td><td>Systemic disease (lymphoma)</td></tr>
            <tr><td>Targeted (toceranib)</td><td>c-KIT mutated MCT</td></tr>
            <tr><td>Palliative</td><td>End-stage, QOL focus</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Combination therapy often best (surgery + chemo + radiation)</p>
        </div>

        <p><strong>Common protocols:</strong></p>
        <ul>
          <li><strong>Lymphoma (multicentric, dog)</strong>: CHOP-based · ~80% remission, median 12-14 months</li>
          <li><strong>OSA</strong>: amputation + carboplatin/doxorubicin · without chemo 4-6 months · with chemo 10-12 months</li>
          <li><strong>HSA</strong>: splenectomy + doxorubicin · median 4-6 months even with treatment</li>
          <li><strong>MCT</strong>: wide excision (3 cm + fascial plane historical) + vinblastine/prednisolone (high-grade) · toceranib if c-KIT mutated</li>
          <li><strong>TCC bladder</strong>: piroxicam + mitoxantrone or vinblastine</li>
        </ul>

        <p><strong>Supportive care:</strong></p>
        <ul>
          <li>Pain: NSAIDs, opioids, gabapentin, amantadine, bisphosphonates (bone)</li>
          <li>Nutrition: mirtazapine, capromorelin, high-energy diet</li>
          <li>Anti-emetics: maropitant, ondansetron</li>
          <li>Antibiotics for febrile neutropenia</li>
          <li>Transfusions if severe anemia</li>
        </ul>

        <p><strong>QOL assessment:</strong> HHHHHMM scale (Hurt, Hunger, Hydration, Hygiene, Happiness, Mobility, More good days than bad) · owner education on euthanasia</p>
      `,
      complications: `
        <p><strong>Tumor-related:</strong></p>
        <ul>
          <li>Metastasis (most common cause of death)</li>
          <li>Bleeding (HSA rupture, GI tumor)</li>
          <li>Obstruction (GI, urinary, airway)</li>
          <li>Pathologic fracture (OSA, multiple myeloma)</li>
          <li>Spinal cord compression</li>
          <li>Tumor lysis syndrome</li>
          <li>Hypercalcemic crisis</li>
          <li>DIC</li>
          <li>Cachexia → frailty</li>
        </ul>

        <p><strong>Treatment-related:</strong></p>
        <ul>
          <li>Chemo: BM suppression (neutropenia 7-10 days post-dose), GI side effects, cardiotoxicity (doxorubicin), nephrotoxicity (cisplatin · ⚠️ FATAL in cats), hemorrhagic cystitis (cyclophosphamide), hypersensitivity (L-asparaginase)</li>
          <li>Surgery: tumor seeding, standard surgical risks</li>
          <li>Radiation: skin reactions, mucositis, late effects</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>⭐ Spay before first heat (mammary prevention) · cats &lt; 6 months</li>
          <li>UV protection (sunscreen, indoor cats)</li>
          <li>Avoid tobacco smoke</li>
          <li>Healthy weight</li>
          <li>FeLV vaccination (cat)</li>
          <li>Regular physical exams (early detection)</li>
        </ul>

        <p><strong>Prognosis indicators:</strong> histologic grade, surgical margins, stage, performance status, tumor type, age, comorbidities, response to initial therapy</p>
      `,
    },
  },

  /* ============================================================
     Phase 3 — Organ-Specific Pathophysiology I
     ============================================================ */

  {
    id: 'path-cardiovascular',
    titleEn: 'Cardiovascular Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบหัวใจหลอดเลือด',
    type: 'topic',
    system: 'cardio',
    species: ['dog', 'cat'],
    tags: ['heart failure', 'preload', 'afterload', 'contractility', 'CHF', 'remodeling', 'RAAS'],
    aliases: ['heart pathophysiology', 'หัวใจล้มเหลว'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Cardiac function basics:</strong></p>
        <ul>
          <li><strong>Cardiac output (CO)</strong> = HR × Stroke Volume</li>
          <li><strong>Stroke volume</strong> determined by 3 factors: ⭐ <strong>preload, afterload, contractility</strong></li>
          <li><strong>Blood pressure</strong> = CO × Total peripheral resistance (TPR)</li>
          <li>Heart's job: deliver adequate O2 + nutrients to tissues</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">3 Determinants of Stroke Volume</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Pre</span>
              <span class="num-label">Preload (filling, EDV)</span>
            </div>
            <div class="num-card">
              <span class="num-big">After</span>
              <span class="num-label">Afterload (resistance to ejection)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Contr</span>
              <span class="num-label">Contractility (intrinsic strength)</span>
            </div>
            <div class="num-card">
              <span class="num-big">+HR</span>
              <span class="num-label">Heart rate (CO multiplier)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ Frank-Starling: ↑ preload → ↑ contractile force (within limits)<br>
          📌 ⭐ Drug targeting: pimobendan (contractility), ACEi (afterload), furosemide (preload)</p>
        </div>

        <p><strong>Heart failure (HF) — definition:</strong></p>
        <ul>
          <li>Inability of heart to maintain adequate CO at normal filling pressures</li>
          <li><strong>Forward failure</strong> = ↓ CO → tissue hypoperfusion (weakness, syncope)</li>
          <li><strong>Backward failure</strong> = ↑ filling pressures → congestion (edema, ascites)</li>
          <li>Most patients have BOTH (varying degrees)</li>
        </ul>

        <p><strong>HF classification by side:</strong></p>
        <ul>
          <li><strong>Left-sided</strong>: ↑ LA pressure → pulmonary venous congestion → ⭐ <strong>pulmonary edema</strong></li>
          <li><strong>Right-sided</strong>: ↑ RA pressure → systemic venous congestion → ⭐ <strong>ascites, peripheral edema, pleural effusion</strong></li>
          <li><strong>Biventricular</strong>: combination</li>
        </ul>

        <p><strong>HF by ejection fraction:</strong></p>
        <ul>
          <li><strong>HFrEF (reduced EF)</strong>: ↓ contractility · DCM, end-stage MMVD</li>
          <li><strong>HFpEF (preserved EF)</strong>: ↓ filling · HCM, RCM, pericardial disease</li>
        </ul>
      `,
      etiology: `
        <p><strong>Common causes by species:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Heart Disease — Dog vs Cat</span>
          <table>
            <tr><th>Disease</th><th>Dog</th><th>Cat</th></tr>
            <tr><td><strong>Most common</strong></td><td>⭐ MMVD (myxomatous mitral)</td><td>⭐ HCM (hypertrophic)</td></tr>
            <tr><td>Acquired</td><td>MMVD, DCM, pericardial</td><td>HCM, RCM, unclassified CM</td></tr>
            <tr><td>Congenital</td><td>PDA, SAS, PS, VSD</td><td>VSD, AVSD, PDA</td></tr>
            <tr><td>Arrhythmias</td><td>Boxer ARVC, Doberman DCM</td><td>Less symptomatic</td></tr>
            <tr><td>Infectious</td><td>Heartworm (D. immitis), endocarditis</td><td>Heartworm (atypical), hyperT4-CM</td></tr>
            <tr><td>Toxic</td><td>Doxorubicin, ethylene glycol</td><td>Permethrin (cardiotoxic)</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Cat: nearly always cardiomyopathy · valve disease rare<br>
          📌 ⭐ Dog small breed: MMVD · Dog large breed: DCM</p>
        </div>

        <p><strong>Pulmonary hypertension causes:</strong></p>
        <ul>
          <li>Left heart disease (most common in dog)</li>
          <li>Pulmonary disease (chronic bronchitis, fibrosis)</li>
          <li>Heartworm (mechanical + immune)</li>
          <li>Chronic thromboembolism</li>
          <li>Idiopathic PAH (rare)</li>
        </ul>

        <p><strong>Risk factors / breed predispositions:</strong></p>
        <ul>
          <li>Cavalier King Charles Spaniel — ⭐ MMVD (early-onset)</li>
          <li>Doberman, Boxer, Great Dane — DCM</li>
          <li>Maine Coon, Ragdoll — HCM (genetic test available)</li>
          <li>Bulldog, Boxer — SAS, PS</li>
          <li>Golden Retriever — SAS, dilated CM</li>
          <li>Poodle, Pomeranian — PDA</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>The heart failure cascade:</strong></p>
        <ol>
          <li><strong>Initial insult</strong> (valve degeneration, myocardial dysfunction, congenital defect)</li>
          <li>↓ Cardiac output / ↑ filling pressures</li>
          <li><strong>Compensatory mechanisms</strong> activate (initially helpful, eventually harmful):
            <ul>
              <li>SNS activation → ↑ HR, ↑ contractility, vasoconstriction</li>
              <li>RAAS activation → Na/water retention, vasoconstriction, fibrosis</li>
              <li>ADH (vasopressin) release</li>
              <li>Endothelin release</li>
              <li>BNP release (counter-regulatory, attempts diuresis)</li>
            </ul>
          </li>
          <li><strong>Cardiac remodeling</strong>:
            <ul>
              <li>Hypertrophy (volume vs pressure overload)</li>
              <li>Chamber dilation</li>
              <li>Myocyte apoptosis</li>
              <li>Fibrosis</li>
            </ul>
          </li>
          <li><strong>Decompensation</strong>: compensatory mechanisms exceed benefit → CHF signs</li>
          <li><strong>Refractory failure</strong>: maximally medicated, signs progress</li>
          <li>Death (CHF, sudden cardiac death, organ failure)</li>
        </ol>

        <div class="mnemonic thai">
          <span class="mnem-title">Neurohormonal Activation — "RAS-SAB"</span>
          <ul>
            <li><strong>R</strong>enin-angiotensin → ⭐ blocked by ACEi (enalapril, benazepril)</li>
            <li><strong>A</strong>ldosterone → ⭐ blocked by spironolactone (anti-fibrotic too)</li>
            <li><strong>S</strong>ympathetic (NE, Epi) → modulated by β-blockers (selected cases)</li>
            <li><strong>S</strong>odium retention → managed by furosemide, torsemide</li>
            <li><strong>A</strong>DH (vasopressin) → causes hyponatremia in advanced HF</li>
            <li><strong>B</strong>NP/ANP → counter-regulatory (used as biomarker NT-proBNP)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Modern HF therapy = blocking neurohormonal activation, not just symptoms<br>
          📌 ACEi + spironolactone = "RAAS blockade"</p>
        </div>

        <p><strong>Cardiac remodeling types:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Hypertrophy Patterns</span>
          <table>
            <tr><th>Pattern</th><th>Trigger</th><th>Examples</th></tr>
            <tr><td><strong>Concentric (pressure)</strong></td><td>↑ afterload</td><td>HCM, SAS, hypertension</td></tr>
            <tr><td><strong>Eccentric (volume)</strong></td><td>↑ preload</td><td>MMVD, MR, AR, PDA</td></tr>
            <tr><td><strong>Mixed</strong></td><td>Combined</td><td>End-stage disease</td></tr>
            <tr><td><strong>Atrial enlargement</strong></td><td>↑ chamber pressure</td><td>LA in MMVD/HCM (key marker)</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>LA size = key prognostic indicator</strong> in dog (MMVD)<br>
          📌 ⭐ In cat HCM, LA &gt; 1.6 cm = high risk for ATE</p>
        </div>

        <p><strong>CHF mechanism — pulmonary edema (left HF):</strong></p>
        <ol>
          <li>↓ LV contractility OR ↑ LV filling resistance</li>
          <li>↑ LA pressure</li>
          <li>↑ Pulmonary venous pressure</li>
          <li>↑ Pulmonary capillary hydrostatic pressure</li>
          <li>Fluid leak into interstitium → eventually alveoli</li>
          <li>↑ V/Q mismatch → hypoxemia</li>
          <li>Stiffened lungs → ↑ work of breathing</li>
        </ol>

        <p><strong>CHF mechanism — right HF (ascites, etc.):</strong></p>
        <ol>
          <li>↑ RA pressure (RV failure or pericardial)</li>
          <li>↑ Caudal vena cava pressure</li>
          <li>↑ Hepatic venous pressure → ⭐ congestion + cardiac cirrhosis (chronic)</li>
          <li>↑ Splanchnic capillary pressure → ascites</li>
          <li>↑ Peripheral venous pressure → edema</li>
        </ol>

        <p><strong>Cardiogenic shock (severe CHF / acute):</strong></p>
        <ul>
          <li>Massive ↓ CO despite high filling pressures</li>
          <li>Severe hypotension</li>
          <li>Cool extremities, weak pulses, prolonged CRT</li>
          <li>Lactic acidosis</li>
          <li>Multi-organ dysfunction</li>
          <li>Causes: massive MI (rare in vet), end-stage DCM, severe arrhythmia, acute valvular rupture</li>
        </ul>
      `,
      symptoms: `
        <p><strong>ACVIM staging (MMVD, applicable concept):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">ACVIM Stages — Heart Disease Progression</span>
          <table>
            <tr><th>Stage</th><th>Description</th><th>Treatment</th></tr>
            <tr><td><strong>A</strong></td><td>At-risk breed, no disease</td><td>None · screening</td></tr>
            <tr><td><strong>B1</strong></td><td>Disease present, no remodeling</td><td>None · monitor</td></tr>
            <tr><td><strong>B2</strong></td><td>Remodeling, no signs</td><td>⭐ Pimobendan (EPIC trial)</td></tr>
            <tr><td><strong>C</strong></td><td>Current/past CHF signs</td><td>⭐ Furosemide + pimobendan + ACEi + spiro (FSAP)</td></tr>
            <tr><td><strong>D</strong></td><td>Refractory CHF</td><td>↑ doses, sildenafil, multimodal</td></tr>
          </table>
        </div>

        <p><strong>Left HF clinical signs:</strong></p>
        <ul>
          <li>⭐ <strong>Cough</strong> (cardiac) — soft, productive, worse at night/after exertion</li>
          <li>⭐ <strong>Tachypnea / dyspnea</strong> — at rest in advanced</li>
          <li><strong>SRR &gt; 30/min</strong> — early CHF screen</li>
          <li><strong>Orthopnea</strong> — refusal to lie down (severe)</li>
          <li>Crackles on auscultation (alveolar edema)</li>
          <li>Cyanosis (severe)</li>
          <li>Pink frothy fluid from nose/mouth (pulmonary edema)</li>
          <li>Cat: open-mouth breathing = severe distress</li>
        </ul>

        <p><strong>Right HF clinical signs:</strong></p>
        <ul>
          <li>⭐ <strong>Ascites</strong> (most common in dog)</li>
          <li>⭐ <strong>Pleural effusion</strong> (more common in cat)</li>
          <li>Jugular distension, hepatojugular reflux</li>
          <li>Hepatomegaly</li>
          <li>Peripheral edema (rare in vet, more in human)</li>
          <li>GI signs (cardiac cachexia, malabsorption)</li>
        </ul>

        <p><strong>Forward failure / low-output signs:</strong></p>
        <ul>
          <li>Exercise intolerance, weakness</li>
          <li>Syncope (especially with exertion or excitement)</li>
          <li>Lethargy</li>
          <li>Cool extremities, weak pulses</li>
          <li>Hypotension</li>
          <li>Prerenal azotemia</li>
        </ul>

        <p><strong>Auscultation findings:</strong></p>
        <ul>
          <li>Heart murmur (location, grade, timing)</li>
          <li>Gallop sounds (S3 or S4) — always pathologic</li>
          <li>Arrhythmia</li>
          <li>Pulse deficits</li>
          <li>↓ Heart sounds (effusion, severe HCM cat)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Initial workup:</strong></p>
        <ul>
          <li><strong>History + PE</strong>: cough, exercise intolerance, breed, auscultation</li>
          <li><strong>SRR (sleeping respiratory rate)</strong>: ⭐ &lt; 30/min normal · &gt; 40 = CHF likely</li>
          <li><strong>Thoracic radiographs</strong> (gold standard for CHF):
            <ul>
              <li>VHS (vertebral heart score) > 10.5 (dog) suggests cardiomegaly</li>
              <li>Pulmonary edema pattern (perihilar in dog, diffuse in cat)</li>
              <li>Pulmonary vein/artery enlargement</li>
              <li>Pleural effusion</li>
            </ul>
          </li>
          <li><strong>Echocardiogram</strong>:
            <ul>
              <li>Definitive diagnosis</li>
              <li>LA size (LA:Ao ratio): &gt; 1.6 = enlarged in dog, &gt; 1.5 in cat</li>
              <li>LV dimensions (LVIDDn): allometric scaling for body size</li>
              <li>Wall thickness (HCM in cat: IVS or LVPW &gt; 6 mm)</li>
              <li>Valve assessment (regurgitation severity)</li>
              <li>Function (FS%, EF%, TAPSE)</li>
            </ul>
          </li>
          <li><strong>ECG</strong>: arrhythmia, chamber enlargement (less sensitive)</li>
          <li><strong>BP</strong>: rule out hypertension as cause</li>
        </ul>

        <p><strong>Biomarkers:</strong></p>
        <ul>
          <li><strong>NT-proBNP</strong>: 
            <ul>
              <li>↑ in CHF, occult DCM, occult HCM</li>
              <li>Rules out CHF if low</li>
              <li>Cat: useful for screening preclinical HCM</li>
            </ul>
          </li>
          <li><strong>cTnI (cardiac troponin I)</strong>:
            <ul>
              <li>Marker of myocardial injury</li>
              <li>↑ in DCM, myocarditis, severe HCM, IE, toxic injury</li>
            </ul>
          </li>
        </ul>

        <p><strong>Bloodwork:</strong></p>
        <ul>
          <li>CBC: rule out infection (endocarditis), anemia</li>
          <li>Chemistry: kidney function (cardiorenal), electrolytes, liver (cardiac cirrhosis)</li>
          <li>UA: USG, proteinuria</li>
          <li>T4 (cat): hyperthyroidism cardiomyopathy</li>
          <li>Heartworm test</li>
        </ul>
      `,
      treatment: `
        <p><strong>Goals of HF treatment:</strong></p>
        <ol>
          <li>Resolve congestion (relieve symptoms)</li>
          <li>Improve cardiac output</li>
          <li>Block neurohormonal activation</li>
          <li>Manage arrhythmias</li>
          <li>Prolong survival + quality of life</li>
        </ol>

        <div class="mnemonic thai">
          <span class="mnem-title">CHF Cornerstones — "FSAP"</span>
          <ul>
            <li><strong>F</strong>urosemide — diuretic (preload ↓)</li>
            <li><strong>S</strong>pironolactone — aldosterone blocker (anti-fibrotic)</li>
            <li><strong>A</strong>CE inhibitor — enalapril/benazepril (afterload ↓, RAAS block)</li>
            <li><strong>P</strong>imobendan — inodilator (contractility ↑, afterload ↓)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ All 4 = standard for ACVIM stage C MMVD<br>
          📌 ⭐ Pimobendan also used in stage B2 (preclinical) — EPIC trial showed delayed onset of CHF</p>
        </div>

        <p><strong>Specific drug roles:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Cardiac Drugs by Mechanism</span>
          <table>
            <tr><th>Class</th><th>Drug</th><th>Effect</th></tr>
            <tr><td><strong>Loop diuretic</strong></td><td>Furosemide, torsemide</td><td>↓ preload, relieve congestion</td></tr>
            <tr><td><strong>Inodilator</strong></td><td>Pimobendan</td><td>↑ contractility + ↓ afterload</td></tr>
            <tr><td><strong>ACE inhibitor</strong></td><td>Enalapril, benazepril</td><td>↓ RAAS, ↓ afterload</td></tr>
            <tr><td><strong>Aldosterone antag</strong></td><td>Spironolactone</td><td>K-sparing, anti-fibrotic</td></tr>
            <tr><td><strong>β-blocker</strong></td><td>Atenolol (cat HCM)</td><td>HR control, ↓ outflow obstruction</td></tr>
            <tr><td><strong>Ca channel blocker</strong></td><td>Diltiazem</td><td>HCM (less common now), AFib rate control</td></tr>
            <tr><td><strong>Antiarrhythmic</strong></td><td>Sotalol, mexiletine, amiodarone</td><td>Specific rhythms</td></tr>
            <tr><td><strong>Pulmonary vasodilator</strong></td><td>Sildenafil</td><td>Pulmonary HT</td></tr>
            <tr><td><strong>Antithrombotic</strong></td><td>Clopidogrel</td><td>Cat ATE prevention</td></tr>
          </table>
        </div>

        <p><strong>Acute CHF emergency (FONZ protocol):</strong></p>
        <ul>
          <li><strong>F</strong>urosemide IV: 2-4 mg/kg dog · 1-2 mg/kg cat · repeat q1-4h until stable</li>
          <li><strong>O</strong>xygen: 40-60% FiO2, cage or flow-by · cat may need sedation</li>
          <li><strong>N</strong>itrates / Sedation: butorphanol 0.2 mg/kg if anxious</li>
          <li><strong>Z</strong>en (rest): minimal handling, dim lighting, quiet</li>
          <li>Pimobendan 0.25-0.3 mg/kg PO (or sublingual)</li>
          <li>Sodium nitroprusside: refractory pulmonary edema (titrate carefully)</li>
          <li>Thoracocentesis: if pleural effusion present</li>
          <li>Abdominocentesis: if tense ascites + dyspnea</li>
        </ul>

        <p><strong>Cat-specific (HCM):</strong></p>
        <ul>
          <li>Furosemide for CHF</li>
          <li>Atenolol if outflow obstruction (caution in CHF)</li>
          <li>Clopidogrel 18.75 mg/cat q24h (LA &gt; 1.6 cm or known thrombus)</li>
          <li>ACEi may help</li>
          <li>Pimobendan: traditionally avoided · evidence growing for refractory CHF</li>
        </ul>

        <p><strong>Diuretic resistance management:</strong></p>
        <ul>
          <li>Switch furosemide → torsemide (more potent, longer-acting)</li>
          <li>Add thiazide (HCTZ) for sequential nephron blockade</li>
          <li>Increase spironolactone</li>
          <li>Address compliance, dietary Na</li>
          <li>Recheck for worsening disease</li>
        </ul>

        <p><strong>Long-term monitoring:</strong></p>
        <ul>
          <li>SRR at home (target &lt; 30/min)</li>
          <li>BW (track fluid status)</li>
          <li>BUN/creatinine (cardiorenal)</li>
          <li>Electrolytes (K, especially)</li>
          <li>BP</li>
          <li>Recheck echo q6-12 months</li>
        </ul>
      `,
      complications: `
        <p><strong>Disease complications:</strong></p>
        <ul>
          <li><strong>Pulmonary edema</strong> — left CHF emergency</li>
          <li><strong>Cardiogenic shock</strong> — end-stage</li>
          <li><strong>Sudden cardiac death</strong> — arrhythmia (especially DCM Doberman, Boxer ARVC)</li>
          <li><strong>Cat ATE (FATE)</strong> — saddle thrombus in HCM (LA stasis)</li>
          <li><strong>Pulmonary hypertension</strong> — secondary to left HF</li>
          <li><strong>Cardiac cachexia</strong> — TNF-α driven muscle wasting</li>
          <li><strong>Cardiorenal syndrome</strong> — kidneys fail from low CO + diuretic injury</li>
          <li><strong>Hyponatremia</strong> — advanced HF marker (ADH, water retention)</li>
          <li><strong>Atrial fibrillation</strong> — common in large breed DCM</li>
          <li><strong>Ruptured chordae tendineae</strong> — acute decompensation in MMVD</li>
          <li><strong>LA tear / cardiac tamponade</strong> — rare MMVD complication</li>
        </ul>

        <p><strong>Treatment complications:</strong></p>
        <ul>
          <li>Diuretic-induced AKI (overdiuresis)</li>
          <li>Hypokalemia, hyponatremia (loop diuretics)</li>
          <li>Hyperkalemia (spironolactone + ACEi · monitor)</li>
          <li>Hypotension (excessive vasodilation)</li>
          <li>Cough exacerbation from ACEi (rare in vet)</li>
          <li>Diuretic resistance</li>
        </ul>

        <p><strong>Prognosis indicators (MMVD):</strong></p>
        <ul>
          <li>LA size: ⭐ strongest prognostic factor</li>
          <li>NT-proBNP level</li>
          <li>Concurrent disease (renal, hypertension)</li>
          <li>Stage at diagnosis</li>
          <li>Response to initial therapy</li>
          <li>Median survival post-CHF: 12-18 months (MMVD with treatment)</li>
        </ul>

        <p><strong>Cardiorenal axis (key concept):</strong></p>
        <ul>
          <li>Heart and kidney bidirectional disease</li>
          <li>Type 1: acute heart → AKI</li>
          <li>Type 2: chronic heart → CKD</li>
          <li>Type 3: acute kidney → cardiac dysfunction</li>
          <li>Type 4: chronic kidney → cardiac dysfunction</li>
          <li>Type 5: systemic disease → both</li>
          <li>Treatment: gentle diuresis, RAAS blockade with renal monitoring</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-respiratory',
    titleEn: 'Respiratory Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบหายใจ',
    type: 'topic',
    system: 'resp',
    species: ['dog', 'cat'],
    tags: ['hypoxemia', 'hypercapnia', 'ventilation', 'perfusion', 'asthma', 'pneumonia', 'BOAS'],
    aliases: ['lung disease', 'breathing problems'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Respiratory function basics:</strong></p>
        <ul>
          <li><strong>Goals</strong>: O2 delivery to alveoli + CO2 removal · maintain acid-base</li>
          <li><strong>4 processes</strong>:
            <ul>
              <li>Ventilation (V) — air movement</li>
              <li>Perfusion (Q) — pulmonary blood flow</li>
              <li>Diffusion — gas exchange across membrane</li>
              <li>Transport — O2 carriage by Hb</li>
            </ul>
          </li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">5 Mechanisms of Hypoxemia</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">V/Q mismatch (most common)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Shunt (Right-to-Left)</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Hypoventilation</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">Diffusion impairment</span>
            </div>
          </div>
          <p class="mnem-tip">📌 + 5: Low FiO2 (high altitude — rare in vet)<br>
          📌 ⭐ V/Q mismatch responds to O2 · ⭐ Shunt does NOT (can't reach blocked alveoli)</p>
        </div>

        <p><strong>Respiratory failure types:</strong></p>
        <ul>
          <li><strong>Type I (hypoxemic)</strong>: ↓ PaO2, normal/low PaCO2 · pneumonia, edema, ARDS</li>
          <li><strong>Type II (hypercapnic)</strong>: ↓ PaO2, ↑ PaCO2 · hypoventilation (CNS, neuromuscular, severe COPD)</li>
        </ul>

        <p><strong>Anatomic classification:</strong></p>
        <ul>
          <li><strong>Upper airway</strong>: nose, larynx, trachea</li>
          <li><strong>Lower airway</strong>: bronchi, bronchioles</li>
          <li><strong>Pulmonary parenchyma</strong>: alveoli, interstitium</li>
          <li><strong>Pleural space</strong>: between lung and chest wall</li>
        </ul>
      `,
      etiology: `
        <p><strong>Upper airway disorders:</strong></p>
        <ul>
          <li><strong>BOAS (Brachycephalic obstructive airway syndrome)</strong>:
            <ul>
              <li>Stenotic nares</li>
              <li>Elongated soft palate</li>
              <li>Everted laryngeal saccules</li>
              <li>Hypoplastic trachea</li>
              <li>Breeds: Bulldog, Pug, Pekingese, Boston Terrier, Shih Tzu, Persian cat</li>
            </ul>
          </li>
          <li><strong>Laryngeal paralysis</strong>:
            <ul>
              <li>Acquired: idiopathic (Lab, Golden, Saint Bernard)</li>
              <li>Hereditary (Bouvier, Husky)</li>
              <li>Polyneuropathy-associated (GOLPP)</li>
            </ul>
          </li>
          <li><strong>Tracheal collapse</strong>: small breed (Yorkie, Pomeranian, Toy Poodle)</li>
          <li><strong>Foreign body</strong>: bones, toys, grass awns</li>
          <li><strong>Mass</strong>: laryngeal/tracheal tumor</li>
          <li><strong>Nasopharyngeal polyp</strong> (cat especially)</li>
        </ul>

        <p><strong>Lower airway disorders:</strong></p>
        <ul>
          <li><strong>Chronic bronchitis (dog)</strong>: chronic cough &gt; 2 months</li>
          <li><strong>Feline asthma / bronchitis</strong>:
            <ul>
              <li>⭐ Eosinophilic inflammation, bronchospasm</li>
              <li>Allergic / hypersensitivity</li>
            </ul>
          </li>
          <li><strong>Bronchiectasis</strong>: dilated, damaged airways</li>
          <li><strong>Parasitic</strong>: Oslerus, Filaroides, Aelurostrongylus</li>
        </ul>

        <p><strong>Parenchymal disorders:</strong></p>
        <ul>
          <li><strong>Pneumonia</strong>:
            <ul>
              <li>Bacterial (Bordetella, Strep, E. coli, Klebsiella, Mycoplasma)</li>
              <li>Viral (canine distemper, parainfluenza, influenza, FCV)</li>
              <li>Fungal (Blasto, Histo, Crypto, Coccidio)</li>
              <li>Aspiration (vomiting, megaesophagus, post-anesthesia, laryngeal paralysis)</li>
              <li>Atypical: Pneumocystis (immunocompromised)</li>
            </ul>
          </li>
          <li><strong>Pulmonary edema</strong>:
            <ul>
              <li>Cardiogenic — most common (left CHF)</li>
              <li>Non-cardiogenic — neurogenic (post-electrocution, seizure, head trauma), ARDS, anaphylaxis</li>
            </ul>
          </li>
          <li><strong>Pulmonary fibrosis</strong>: West Highland White Terrier (idiopathic)</li>
          <li><strong>Eosinophilic pneumonia (PIE)</strong>: dog, allergic/parasitic</li>
          <li><strong>ARDS</strong>: severe systemic disease (sepsis, pancreatitis, trauma)</li>
          <li><strong>Neoplasia</strong>: primary lung tumor (bronchogenic), metastasis</li>
          <li><strong>Heartworm</strong>: pulmonary disease component</li>
        </ul>

        <p><strong>Pleural disorders:</strong></p>
        <ul>
          <li>Pleural effusion (transudate, exudate, chylothorax, hemothorax, pyothorax)</li>
          <li>Pneumothorax (spontaneous, traumatic, iatrogenic)</li>
          <li>Diaphragmatic hernia</li>
          <li>Mediastinal mass</li>
        </ul>

        <p><strong>Vascular disorders:</strong></p>
        <ul>
          <li>Pulmonary thromboembolism (PTE)</li>
          <li>Pulmonary hypertension</li>
          <li>Heartworm caval syndrome</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>V/Q matching — the critical concept:</strong></p>
        <ul>
          <li>Normal V/Q = ~0.8 (alveolar ventilation / perfusion)</li>
          <li>⭐ <strong>Hypoxic pulmonary vasoconstriction</strong>: poorly ventilated alveoli → vasoconstrict → divert blood to better areas</li>
          <li>This protective mechanism becomes maladaptive in chronic disease (pulmonary HT)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">V/Q Mismatch Patterns</span>
          <table>
            <tr><th>V/Q</th><th>Description</th><th>Examples</th></tr>
            <tr><td><strong>V/Q = 0 (shunt)</strong></td><td>Perfused, not ventilated</td><td>Atelectasis, pneumonia (consolidation), pulmonary edema</td></tr>
            <tr><td><strong>V/Q = ∞ (dead space)</strong></td><td>Ventilated, not perfused</td><td>PTE, severe shock, emphysema</td></tr>
            <tr><td><strong>V/Q low</strong></td><td>↓ Ventilation</td><td>Bronchitis, asthma, aspiration</td></tr>
            <tr><td><strong>V/Q high</strong></td><td>↓ Perfusion</td><td>Pulmonary HT, low CO</td></tr>
          </table>
        </div>

        <p><strong>BOAS pathophysiology:</strong></p>
        <ol>
          <li>Anatomic obstruction (nares, palate, saccules)</li>
          <li>↑ Negative pressure during inspiration</li>
          <li>Soft tissue collapse, edema</li>
          <li>Worsening obstruction (vicious cycle)</li>
          <li>Chronic: laryngeal collapse, bronchial collapse, GI signs (regurgitation, hiatal hernia)</li>
          <li>Hyperthermia in hot/humid weather (cooling impaired)</li>
        </ol>

        <p><strong>Asthma pathophysiology (cat):</strong></p>
        <ol>
          <li>Allergen exposure</li>
          <li>IgE-mediated mast cell degranulation</li>
          <li>Eosinophilic infiltration (Th2-mediated)</li>
          <li>Bronchoconstriction (smooth muscle contraction)</li>
          <li>Airway edema + mucus hypersecretion</li>
          <li>Air trapping (expiratory difficulty — "barrel chest")</li>
          <li>Chronic: airway remodeling, fibrosis</li>
        </ol>

        <p><strong>Pneumonia pathophysiology:</strong></p>
        <ol>
          <li>Pathogen reaches lower airway (inhalation, aspiration, hematogenous)</li>
          <li>Local immune response (alveolar macrophages, neutrophils)</li>
          <li>Inflammatory mediators released</li>
          <li>↑ Capillary permeability → exudate fills alveoli</li>
          <li>Consolidation (V/Q = 0 in affected areas)</li>
          <li>Hypoxemia, fever, sepsis if severe</li>
        </ol>

        <p><strong>Aspiration pneumonia specifics:</strong></p>
        <ul>
          <li>Acidic gastric contents → chemical pneumonitis (immediate)</li>
          <li>Bacterial superinfection (24-72 hr)</li>
          <li>Common bacteria: E. coli, Pasteurella, Klebsiella, Strep, anaerobes</li>
          <li>Right middle/cranial lung lobes most affected (anatomy)</li>
          <li>Predisposing: megaesophagus, laryngeal paralysis, anesthesia, vomiting, BOAS</li>
        </ul>

        <p><strong>Pulmonary edema (non-cardiogenic):</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Non-Cardiogenic Edema Causes</span>
          <ul>
            <li><strong>Neurogenic</strong>: post-seizure, head trauma, electrocution</li>
            <li><strong>ARDS</strong>: sepsis, pancreatitis, severe trauma, transfusion (TRALI)</li>
            <li><strong>Anaphylactic</strong>: severe Type I hypersensitivity</li>
            <li><strong>Re-expansion</strong>: rapid removal of large pleural effusion</li>
            <li><strong>Negative pressure</strong>: post-airway obstruction (post-extubation)</li>
            <li><strong>Toxic inhalation</strong>: smoke, fire</li>
          </ul>
          <p class="mnem-tip">📌 Mechanism: ↑ permeability (NOT ↑ hydrostatic pressure)<br>
          📌 ⭐ Important to differentiate from cardiogenic (different treatment)</p>
        </div>

        <p><strong>ARDS criteria (Berlin definition adapted):</strong></p>
        <ul>
          <li>Acute onset (within 1 week of insult)</li>
          <li>Bilateral pulmonary infiltrates on imaging</li>
          <li>Not fully explained by cardiac failure or fluid overload</li>
          <li>↓ PaO2/FiO2 ratio</li>
          <li>Underlying systemic illness (sepsis, pancreatitis, etc.)</li>
        </ul>

        <p><strong>Pulmonary hypertension pathophysiology:</strong></p>
        <ol>
          <li>Trigger (left HF, lung disease, PTE, heartworm)</li>
          <li>↑ Pulmonary vascular resistance</li>
          <li>↑ RV afterload</li>
          <li>RV hypertrophy → eventually RV failure</li>
          <li>Right HF signs (ascites, jugular distension)</li>
          <li>Syncope (especially with exertion)</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Localizing the lesion (auscultation + breathing pattern):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Breathing Pattern Localization</span>
          <table>
            <tr><th>Pattern</th><th>Localization</th><th>Examples</th></tr>
            <tr><td><strong>Inspiratory effort</strong></td><td>Upper airway</td><td>Laryngeal paralysis, BOAS, mass</td></tr>
            <tr><td><strong>Expiratory effort + abdominal push</strong></td><td>Lower airway</td><td>Cat asthma, COPD</td></tr>
            <tr><td><strong>Mixed (inspiratory + expiratory)</strong></td><td>Parenchymal</td><td>Pneumonia, edema, fibrosis</td></tr>
            <tr><td><strong>Restrictive / shallow</strong></td><td>Pleural space</td><td>Effusion, pneumothorax, mass</td></tr>
            <tr><td><strong>Stertor (low pitch snoring)</strong></td><td>Nasopharynx</td><td>BOAS, polyp</td></tr>
            <tr><td><strong>Stridor (high pitch)</strong></td><td>Larynx/trachea</td><td>Lar par, collapse, FB, edema</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Stridor + inspiratory dyspnea</strong> = laryngeal · emergency<br>
          📌 ⭐ <strong>Open-mouth breathing in cat</strong> = severe respiratory distress · usually pleural or asthma crisis</p>
        </div>

        <p><strong>Common signs by category:</strong></p>
        <ul>
          <li><strong>Cough</strong>:
            <ul>
              <li>Productive vs non-productive</li>
              <li>Honking (tracheal collapse)</li>
              <li>Soft cardiac cough (CHF) — but cat rarely coughs from CHF</li>
              <li>Honking + hyperexcited = small breed tracheal collapse</li>
              <li>Productive purulent = pneumonia</li>
            </ul>
          </li>
          <li><strong>Wheezing</strong>: lower airway (asthma, bronchitis)</li>
          <li><strong>Crackles</strong>: alveolar fluid (edema, pneumonia)</li>
          <li><strong>Cyanosis</strong>: severe hypoxemia (PaO2 &lt; 50 mmHg) — late sign</li>
          <li><strong>Tachypnea</strong>: most sensitive early sign</li>
          <li><strong>Orthopnea</strong>: refusal to lie down — severe</li>
          <li><strong>Exercise intolerance</strong></li>
          <li><strong>Syncope</strong>: pulmonary HT, heartworm caval</li>
          <li><strong>Epistaxis</strong>: nasal disease, coagulopathy, hypertension</li>
          <li><strong>Reverse sneeze</strong>: nasopharyngeal irritation (often benign)</li>
        </ul>

        <p><strong>Specific syndrome signs:</strong></p>
        <ul>
          <li><strong>BOAS</strong>: stertor, exercise intolerance, heat intolerance, syncope, sleep apnea, regurgitation</li>
          <li><strong>Cat asthma</strong>: paroxysmal cough, wheeze, expiratory effort, severe acute = open-mouth</li>
          <li><strong>Aspiration pneumonia</strong>: history of vomiting/laryngeal paralysis, fever, productive cough, lethargy</li>
          <li><strong>Pleural effusion</strong>: shallow restrictive breathing, muffled heart/lung sounds (cat especially)</li>
          <li><strong>PTE</strong>: acute dyspnea, sometimes hemoptysis, tachycardia, hypoxemia disproportionate to imaging</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Stabilize first, diagnose second:</strong></p>
        <ul>
          <li>O2 supplementation (flow-by, mask, cage, intranasal)</li>
          <li>Minimize stress (esp cat)</li>
          <li>Sedation if anxious (butorphanol)</li>
          <li>Thoracocentesis if pleural effusion suspected (POCUS first)</li>
          <li>Bronchodilator (terbutaline 0.01 mg/kg SC for cat asthma)</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Thoracic radiographs (3-view ideal)</strong>:
            <ul>
              <li>Patterns: alveolar, interstitial, bronchial, vascular, mass</li>
              <li>Cardiac silhouette (VHS)</li>
              <li>Pulmonary vessels</li>
              <li>Pleural space</li>
            </ul>
          </li>
          <li><strong>Thoracic POCUS</strong>:
            <ul>
              <li>B-lines (interstitial fluid)</li>
              <li>Pleural effusion (anechoic fluid)</li>
              <li>Pneumothorax (lung point sign)</li>
              <li>Cardiac (LA size for CHF)</li>
            </ul>
          </li>
          <li><strong>CT</strong>: superior for masses, complex disease, PTE</li>
          <li><strong>Bronchoscopy</strong>: airway visualization, foreign body, sampling</li>
          <li><strong>Fluoroscopy</strong>: dynamic airway (tracheal collapse)</li>
        </ul>

        <p><strong>Sampling:</strong></p>
        <ul>
          <li><strong>Transtracheal wash (TTW)</strong>: lower airway, awake (mid-sized dog)</li>
          <li><strong>Endotracheal wash</strong>: under anesthesia, more controlled</li>
          <li><strong>BAL (bronchoalveolar lavage)</strong>: deeper sampling, ideally bronchoscopy-guided</li>
          <li><strong>FNA of mass</strong>: image-guided</li>
        </ul>

        <p><strong>Bloodwork:</strong></p>
        <ul>
          <li>CBC: neutrophilia (pneumonia), eosinophilia (PIE, asthma, parasitic)</li>
          <li>Chemistry: organ function</li>
          <li><strong>Arterial blood gas</strong>:
            <ul>
              <li>PaO2 (oxygenation): normal &gt; 90 mmHg on room air</li>
              <li>PaCO2 (ventilation): normal 35-45 mmHg</li>
              <li>P(A-a) gradient: assess if hypoxemia from V/Q vs hypoventilation</li>
              <li>SpO2: pulse oximetry — non-invasive surrogate (target &gt; 95%)</li>
            </ul>
          </li>
          <li>Heartworm test</li>
          <li>D-dimer (PTE suspicion)</li>
          <li>NT-proBNP (cardiogenic vs non-cardiogenic edema)</li>
          <li>cTnI (severe disease, RV strain)</li>
        </ul>

        <p><strong>Specific testing:</strong></p>
        <ul>
          <li>Bordetella, distemper, influenza PCR (kennel cough)</li>
          <li>Fungal serology / Ag (geographic)</li>
          <li>Toxoplasma serology (cat)</li>
          <li>Fecal Baermann (lungworm)</li>
          <li>Allergy testing for asthma (specialty)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Acute respiratory distress — stabilize:</strong></p>
        <ol>
          <li>O2 therapy (target SpO2 &gt; 95%, PaO2 &gt; 80)</li>
          <li>Minimize stress</li>
          <li>Sedation if needed (butorphanol)</li>
          <li>Address obvious causes (thoracocentesis, bronchodilator)</li>
          <li>If unresponsive: intubation + mechanical ventilation</li>
        </ol>

        <p><strong>Disease-specific management:</strong></p>

        <p><strong>BOAS:</strong></p>
        <ul>
          <li>Weight management (#1 modifiable factor)</li>
          <li>Avoid heat / over-exercise</li>
          <li>Surgery: nares enlargement, palatoplasty, sacculectomy, laryngeal tieback (severe)</li>
          <li>Steroid if acute upper airway swelling</li>
        </ul>

        <p><strong>Laryngeal paralysis:</strong></p>
        <ul>
          <li>Cool environment, weight management</li>
          <li>Avoid stress/excitement</li>
          <li>Acute crisis: O2, sedation, cooling, IV steroid (acute swelling)</li>
          <li>Surgery: unilateral arytenoid lateralization ("tieback")</li>
          <li>⚠️ Aspiration pneumonia risk post-tieback (lifelong)</li>
        </ul>

        <p><strong>Tracheal collapse:</strong></p>
        <ul>
          <li>Weight management critical</li>
          <li>Hydrocodone (cough suppressant — controlled substance)</li>
          <li>Theophylline (mild bronchodilator)</li>
          <li>Steroids (anti-inflammatory burst)</li>
          <li>Sedation for crisis (acepromazine + butorphanol)</li>
          <li>Surgical: extraluminal rings or intraluminal stent (severe)</li>
        </ul>

        <p><strong>Cat asthma:</strong></p>
        <ul>
          <li><strong>Acute crisis</strong>:
            <ul>
              <li>Terbutaline 0.01 mg/kg SC/IV</li>
              <li>Albuterol inhaler (rescue) — Aerokat</li>
              <li>Dexamethasone SP 0.1-0.3 mg/kg IV</li>
              <li>O2</li>
            </ul>
          </li>
          <li><strong>Chronic</strong>:
            <ul>
              <li>⭐ Inhaled fluticasone (Flovent) via spacer</li>
              <li>± Inhaled albuterol (rescue)</li>
              <li>Oral prednisolone (acute exacerbation, taper)</li>
              <li>Avoid triggers: dust, smoke, scented litter, candles, perfume</li>
            </ul>
          </li>
        </ul>

        <p><strong>Bacterial pneumonia:</strong></p>
        <ul>
          <li>Empirical antibiotic (amox-clav, doxycycline, fluoroquinolone)</li>
          <li>Ideally based on culture/sensitivity from BAL/TTW</li>
          <li>Duration: 4-6 weeks (severe) — until 1 week past clinical resolution</li>
          <li>Coupage, exercise (if stable) to mobilize secretions</li>
          <li>Nebulization (saline, ± bronchodilator)</li>
          <li>O2 if hypoxemic</li>
          <li>Avoid cough suppressants (need to clear airway)</li>
        </ul>

        <p><strong>Cardiogenic pulmonary edema:</strong> see cardiology · FONZ + furosemide</p>

        <p><strong>Pleural effusion management:</strong></p>
        <ul>
          <li>Thoracocentesis (relieve compression)</li>
          <li>Fluid analysis (transudate/exudate, cytology, culture, biochem)</li>
          <li>Treat underlying (CHF, FIP, neoplasia, pyothorax with chest tube)</li>
          <li>Pyothorax: chest tube + lavage + IV antibiotics × weeks</li>
          <li>Chylothorax: low-fat diet, rutin, sometimes thoracic duct ligation</li>
        </ul>

        <p><strong>Pulmonary HT:</strong></p>
        <ul>
          <li>Sildenafil 1-3 mg/kg PO q8-12h (vasodilator)</li>
          <li>Pimobendan (RV support)</li>
          <li>Treat underlying (heartworm, left HF, lung disease)</li>
          <li>Avoid air travel (high altitude worsens)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Respiratory failure / death</strong></li>
          <li><strong>Hypoxemic encephalopathy</strong> — chronic ↓ O2</li>
          <li><strong>Pulmonary hypertension</strong> — secondary to chronic disease</li>
          <li><strong>Cor pulmonale</strong> — right HF from lung disease</li>
          <li><strong>Aspiration pneumonia</strong> — laryngeal paralysis, megaesophagus</li>
          <li><strong>Lung fibrosis / scarring</strong> — chronic injury</li>
          <li><strong>Recurrent infections</strong> — bronchiectasis</li>
          <li><strong>Sepsis</strong> — severe pneumonia</li>
          <li><strong>ARDS</strong> — refractory hypoxemia</li>
          <li><strong>Pneumothorax</strong> — bullae rupture, trauma</li>
        </ul>

        <p><strong>Treatment complications:</strong></p>
        <ul>
          <li>Steroid side effects (long-term asthma management)</li>
          <li>Aspiration post-tieback surgery</li>
          <li>Bronchospasm from β-blocker (avoid in asthmatic cat)</li>
          <li>Antibiotic resistance (chronic cases)</li>
          <li>Tracheal stent migration / fracture</li>
          <li>Mechanical ventilation: VAP, barotrauma</li>
        </ul>

        <p><strong>Prognosis indicators:</strong></p>
        <ul>
          <li>Underlying disease severity</li>
          <li>Response to initial therapy</li>
          <li>Comorbidities</li>
          <li>Aspiration pneumonia from megaesophagus: poor (often recurrent)</li>
          <li>BOAS surgery: usually good improvement</li>
          <li>Asthma: lifelong management, usually controllable</li>
          <li>Pulmonary fibrosis: progressive, poor</li>
          <li>ARDS: 50-80% mortality</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-gi',
    titleEn: 'Gastrointestinal Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบทางเดินอาหาร',
    type: 'topic',
    system: 'gi',
    species: ['dog', 'cat'],
    tags: ['vomiting', 'diarrhea', 'IBD', 'pancreatitis', 'GDV', 'malabsorption', 'GI motility'],
    aliases: ['GI disease', 'digestive', 'ทางเดินอาหาร'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>GI tract functions:</strong></p>
        <ul>
          <li><strong>Motility</strong> — propulsion of ingesta</li>
          <li><strong>Secretion</strong> — acid, enzymes, mucus, bile</li>
          <li><strong>Digestion</strong> — breakdown into absorbable units</li>
          <li><strong>Absorption</strong> — nutrients, water, electrolytes</li>
          <li><strong>Barrier</strong> — physical + immune (gut microbiome, IgA, GALT)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">GI Symptom Categories</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">V</span>
              <span class="num-label">Vomiting / regurgitation</span>
            </div>
            <div class="num-card">
              <span class="num-big">D</span>
              <span class="num-label">Diarrhea (small vs large)</span>
            </div>
            <div class="num-card">
              <span class="num-big">A</span>
              <span class="num-label">Anorexia / hyporexia</span>
            </div>
            <div class="num-card">
              <span class="num-big">P</span>
              <span class="num-label">Abdominal Pain</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ Vomiting (active, with abdominal effort) ≠ Regurgitation (passive)<br>
          📌 ⭐ Small bowel diarrhea ≠ Large bowel diarrhea (different localization, causes, treatment)</p>
        </div>

        <p><strong>Vomiting vs regurgitation differentiation:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Vomiting vs Regurgitation</span>
          <table>
            <tr><th>Feature</th><th>Vomiting</th><th>Regurgitation</th></tr>
            <tr><td><strong>Origin</strong></td><td>Stomach/intestine</td><td>Esophagus</td></tr>
            <tr><td><strong>Effort</strong></td><td>⭐ Active (abdominal push)</td><td>⭐ Passive (head down)</td></tr>
            <tr><td><strong>Prodromal signs</strong></td><td>Nausea, salivation, retching</td><td>None</td></tr>
            <tr><td><strong>Appearance</strong></td><td>Digested food, bile</td><td>Undigested, tubular shape</td></tr>
            <tr><td><strong>pH</strong></td><td>Acidic</td><td>Neutral</td></tr>
            <tr><td><strong>Common causes</strong></td><td>Gastritis, IBD, parvovirus, foreign body, pancreatitis</td><td>Megaesophagus, esophagitis, vascular ring</td></tr>
          </table>
        </div>

        <p><strong>Small vs large bowel diarrhea:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Small vs Large Bowel Diarrhea</span>
          <table>
            <tr><th>Feature</th><th>Small bowel</th><th>Large bowel</th></tr>
            <tr><td><strong>Volume</strong></td><td>⭐ Large volume</td><td>Small volume</td></tr>
            <tr><td><strong>Frequency</strong></td><td>Slightly ↑ (3-5×/day)</td><td>⭐ Marked ↑ (&gt; 5×/day)</td></tr>
            <tr><td><strong>Urgency / tenesmus</strong></td><td>Absent</td><td>⭐ Present</td></tr>
            <tr><td><strong>Mucus</strong></td><td>Rare</td><td>⭐ Common</td></tr>
            <tr><td><strong>Fresh blood (hematochezia)</strong></td><td>Rare</td><td>⭐ Common</td></tr>
            <tr><td><strong>Melena</strong></td><td>Possible</td><td>Rare</td></tr>
            <tr><td><strong>Weight loss</strong></td><td>⭐ Common (malabsorption)</td><td>Uncommon</td></tr>
            <tr><td><strong>Vomiting</strong></td><td>Often</td><td>Rare</td></tr>
            <tr><td><strong>Common causes</strong></td><td>IBD, parasites, lymphoma, EPI</td><td>Colitis, whipworm, stress, dietary</td></tr>
          </table>
        </div>
      `,
      etiology: `
        <p><strong>Acute GI causes:</strong></p>
        <ul>
          <li><strong>Dietary indiscretion</strong> — most common (garbage, sudden diet change)</li>
          <li><strong>Foreign body</strong> — bones, toys, fabric, string (cat), corn cobs</li>
          <li><strong>Toxin</strong> — chocolate, xylitol, grapes/raisins, medications</li>
          <li><strong>Infectious</strong>:
            <ul>
              <li>Viral: parvovirus (puppy especially), coronavirus, distemper, panleukopenia (cat)</li>
              <li>Bacterial: Salmonella, Campylobacter, Clostridium, E. coli</li>
              <li>Parasitic: hookworm, roundworm, whipworm, Giardia, coccidia</li>
              <li>Atypical: tritrichomonas (cat young)</li>
            </ul>
          </li>
          <li><strong>Pancreatitis</strong></li>
          <li><strong>Acute kidney/liver disease</strong> (vomiting from azotemia/uremia)</li>
          <li><strong>Drugs</strong>: NSAIDs (ulcer), antibiotics (dysbiosis), chemo</li>
          <li><strong>Gastric dilatation-volvulus (GDV)</strong> — large/giant breed deep-chested</li>
          <li><strong>Intestinal obstruction / intussusception</strong></li>
          <li><strong>HGE (hemorrhagic gastroenteritis)</strong> — possibly C. perfringens, idiopathic</li>
        </ul>

        <p><strong>Chronic GI causes:</strong></p>
        <ul>
          <li><strong>IBD (inflammatory bowel disease)</strong>: lymphoplasmacytic, eosinophilic, granulomatous</li>
          <li><strong>Food responsive enteropathy (FRE)</strong> — most common chronic enteropathy</li>
          <li><strong>Antibiotic-responsive enteropathy</strong> — dysbiosis</li>
          <li><strong>PLE (protein-losing enteropathy)</strong>:
            <ul>
              <li>Lymphangiectasia (Yorkie, Maltese, Soft-coated Wheaten)</li>
              <li>Severe IBD</li>
              <li>GI lymphoma</li>
            </ul>
          </li>
          <li><strong>EPI (exocrine pancreatic insufficiency)</strong>: GSD, rough Collie</li>
          <li><strong>Chronic pancreatitis</strong></li>
          <li><strong>Liver disease</strong>: chronic hepatitis, cirrhosis</li>
          <li><strong>Megaesophagus</strong>: idiopathic, MG, hypoadrenocorticism, esophagitis</li>
          <li><strong>Neoplasia</strong>: lymphoma (cat especially), adenocarcinoma, MCT (visceral), GIST</li>
          <li><strong>Endocrine</strong>: hyperthyroidism (cat), Addison's disease</li>
          <li><strong>FIP (cat)</strong>: GI form</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Vomiting pathophysiology:</strong></p>
        <ol>
          <li>Triggers detected by:
            <ul>
              <li>⭐ <strong>CRTZ (chemoreceptor trigger zone)</strong> — area postrema · D2, 5-HT3, NK1, μ-opioid receptors</li>
              <li>⭐ <strong>Vomiting center</strong> — medulla · final integrator</li>
              <li>Peripheral receptors: GI (5-HT3, NK1), peritoneum, CV system</li>
              <li>Cerebral cortex: psychogenic, motion sickness</li>
            </ul>
          </li>
          <li>Activation of vomiting center → coordinated act:
            <ul>
              <li>Closure of glottis</li>
              <li>Diaphragm + abdominal muscle contraction</li>
              <li>Reverse peristalsis</li>
              <li>Relaxation of LES</li>
            </ul>
          </li>
        </ol>

        <p><strong>Anti-emetic targets (drug logic):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Anti-Emetic Drugs</span>
          <table>
            <tr><th>Drug</th><th>Receptor</th><th>Use</th></tr>
            <tr><td><strong>⭐ Maropitant</strong> (Cerenia)</td><td>NK1 antagonist</td><td>Most situations · long-acting</td></tr>
            <tr><td><strong>Ondansetron</strong></td><td>5-HT3 antagonist</td><td>Chemo, pancreatitis, severe</td></tr>
            <tr><td><strong>Metoclopramide</strong></td><td>D2 antagonist + prokinetic</td><td>Mild, ↑ gastric motility</td></tr>
            <tr><td><strong>Mirtazapine</strong></td><td>5-HT2/3, H1 antagonist</td><td>Appetite stim + anti-emetic</td></tr>
            <tr><td><strong>Famotidine</strong></td><td>H2 (acid suppression)</td><td>Reflux, ulcer</td></tr>
            <tr><td><strong>Omeprazole</strong></td><td>Proton pump inhibitor</td><td>Severe acid reduction</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Maropitant first-line · NK1 = central + peripheral block<br>
          📌 ⚠️ Avoid metoclopramide if obstruction suspected (motility-promoting)</p>
        </div>

        <p><strong>Diarrhea pathophysiology — 4 mechanisms:</strong></p>

        <div class="mnemonic numbers">
          <span class="mnem-title">4 Mechanisms of Diarrhea</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">1</span>
              <span class="num-label">Osmotic (poorly absorbed solutes)</span>
            </div>
            <div class="num-card">
              <span class="num-big">2</span>
              <span class="num-label">Secretory (toxins, hormones)</span>
            </div>
            <div class="num-card">
              <span class="num-big">3</span>
              <span class="num-label">Inflammatory / exudative</span>
            </div>
            <div class="num-card">
              <span class="num-big">4</span>
              <span class="num-label">Motility (↑ or ↓)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 Osmotic stops with fasting · Secretory does NOT<br>
          📌 Real cases often mixed mechanisms</p>
        </div>

        <p><strong>Pancreatitis pathophysiology:</strong></p>
        <ol>
          <li>Inappropriate intra-pancreatic activation of digestive enzymes</li>
          <li>Premature trypsin activation → cascade activation of other enzymes</li>
          <li>Auto-digestion of pancreas</li>
          <li>Inflammation → edema, ↑ vascular permeability</li>
          <li>Severe: necrosis, hemorrhage, abscess</li>
          <li>Systemic: SIRS, MODS, DIC</li>
          <li>Chronic: fibrosis, EPI, diabetes (β-cell damage)</li>
        </ol>

        <p><strong>Pancreatitis triggers:</strong></p>
        <ul>
          <li>⭐ Dietary indiscretion (high fat) — most common</li>
          <li>Hyperlipidemia (Schnauzer)</li>
          <li>Drugs: KBr, azathioprine, organophosphate, sulfa drugs</li>
          <li>Trauma (abdominal)</li>
          <li>Hypercalcemia</li>
          <li>Idiopathic (often)</li>
          <li>Cat: often associated with cholangitis + IBD ("triaditis")</li>
        </ul>

        <p><strong>GDV pathophysiology:</strong></p>
        <ol>
          <li>Stomach distends (gas, food, fluid)</li>
          <li>Stomach rotates (volvulus) — usually clockwise viewed from caudal</li>
          <li>Pylorus moves to left, fundus to right</li>
          <li>Cardia obstruction → cannot decompress (no eructation, no vomiting)</li>
          <li>↑ Intragastric pressure → caudal vena cava compression → ↓ venous return → shock</li>
          <li>Splenic torsion (often concurrent)</li>
          <li>Gastric wall ischemia → necrosis</li>
          <li>Cardiac arrhythmias (VPCs/VT) common</li>
          <li>DIC, sepsis, MODS → death if untreated</li>
        </ol>

        <p><strong>IBD pathophysiology:</strong></p>
        <ul>
          <li>Aberrant immune response to commensal microbes / dietary antigens</li>
          <li>Loss of oral tolerance</li>
          <li>Chronic mucosal infiltration (lymphocytes, plasma cells, eosinophils)</li>
          <li>Villous atrophy → ↓ absorption</li>
          <li>↑ Permeability → bacterial translocation</li>
          <li>Cytokine-driven inflammation (TNF, IL-1, IL-6)</li>
        </ul>

        <p><strong>PLE pathophysiology:</strong></p>
        <ul>
          <li>Severe villous damage or lymphatic obstruction</li>
          <li>Loss of plasma proteins (albumin + globulins) into GI lumen</li>
          <li>Hypoalbuminemia → edema, ascites, pleural effusion</li>
          <li>Loss of antithrombin → hypercoagulable → ⭐ thromboembolism risk</li>
          <li>Loss of cobalamin (B12), folate, calcium, iron</li>
          <li>Hypocalcemia → tetany (chronic severe)</li>
        </ul>

        <p><strong>EPI pathophysiology:</strong></p>
        <ul>
          <li>Loss of &gt; 90% of acinar cells</li>
          <li>Inadequate digestive enzyme secretion</li>
          <li>Maldigestion of fat, protein, carbs</li>
          <li>Steatorrhea (foul, voluminous, pale)</li>
          <li>Weight loss despite polyphagia</li>
          <li>Vitamin malabsorption (especially B12)</li>
          <li>SIBO common (small intestinal bacterial overgrowth)</li>
          <li>Causes: pancreatic acinar atrophy (GSD juvenile), chronic pancreatitis (cat)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>General GI signs:</strong></p>
        <ul>
          <li>Vomiting (described above)</li>
          <li>Regurgitation (described above)</li>
          <li>Diarrhea (small vs large)</li>
          <li>Anorexia / hyporexia</li>
          <li>Abdominal pain (hunched posture, prayer position, vocalization)</li>
          <li>Weight loss</li>
          <li>Polyphagia (EPI, hyperthyroidism, IBD with malabsorption)</li>
          <li>Polydipsia (severe diarrhea, electrolyte loss)</li>
          <li>Halitosis (dental, GI bleeding, kidney/liver)</li>
          <li>Bloating / distended abdomen</li>
          <li>Dyschezia, tenesmus (large bowel)</li>
          <li>Pica (anemia, EPI)</li>
        </ul>

        <p><strong>Specific syndromes:</strong></p>
        <ul>
          <li><strong>GDV emergency</strong>:
            <ul>
              <li>Acute distended abdomen (drum-tight, tympanic)</li>
              <li>Non-productive retching ⭐</li>
              <li>Hypersalivation</li>
              <li>Restlessness, anxiety</li>
              <li>Pale MM, ↑ CRT, weak pulses (shock)</li>
              <li>Tachycardia → bradycardia (terminal)</li>
              <li>Often large/giant breeds: Great Dane, GSD, Setters, Standard Poodle</li>
            </ul>
          </li>
          <li><strong>Acute pancreatitis</strong>:
            <ul>
              <li>Anorexia, vomiting, lethargy</li>
              <li>Abdominal pain (prayer position)</li>
              <li>Fever or hypothermia</li>
              <li>Cat: often subtle ("inappetent + lethargic" only)</li>
              <li>Severe: shock, jaundice (post-hepatic), MODS</li>
            </ul>
          </li>
          <li><strong>Foreign body / obstruction</strong>:
            <ul>
              <li>Acute or chronic vomiting</li>
              <li>Anorexia</li>
              <li>Lethargy</li>
              <li>Abdominal pain</li>
              <li>Linear FB (cat string) — severe, often perforates</li>
              <li>Look under tongue in cat with chronic vomiting!</li>
            </ul>
          </li>
          <li><strong>IBD</strong>:
            <ul>
              <li>Chronic V/D (&gt; 3 weeks)</li>
              <li>Weight loss</li>
              <li>Variable appetite</li>
              <li>Often well-otherwise initially</li>
            </ul>
          </li>
          <li><strong>EPI</strong>:
            <ul>
              <li>⭐ Weight loss + voluminous foul stool + polyphagia</li>
              <li>Pale, greasy stool (steatorrhea)</li>
              <li>Coprophagia, pica</li>
              <li>Poor coat</li>
              <li>Usually thin BCS despite ravenous appetite</li>
            </ul>
          </li>
          <li><strong>PLE</strong>:
            <ul>
              <li>Chronic diarrhea (variable)</li>
              <li>Weight loss</li>
              <li>⭐ Edema, ascites, pleural effusion (hypoalbuminemia)</li>
              <li>Thromboembolism (hypercoag)</li>
            </ul>
          </li>
          <li><strong>Megaesophagus</strong>:
            <ul>
              <li>Regurgitation (not vomiting)</li>
              <li>Weight loss</li>
              <li>⭐ Aspiration pneumonia (frequent complication)</li>
              <li>Causes: idiopathic (Great Dane, Irish Setter, GSD), MG, Addison's, esophagitis</li>
            </ul>
          </li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Initial workup:</strong></p>
        <ul>
          <li>Detailed history (onset, duration, vaccination, travel, exposure, diet, drug)</li>
          <li>Thorough PE: hydration, MM, abdominal palpation, oral exam (cat string!)</li>
          <li>Rectal exam (mass, melena, parasites)</li>
          <li><strong>Minimum database</strong>:
            <ul>
              <li>CBC: anemia, leukocytosis, eosinophilia</li>
              <li>Chemistry: organ function, electrolytes, glucose, albumin, total protein</li>
              <li>UA: USG, isosthenuria (Addison's), bilirubin (liver)</li>
              <li>Fecal: float, smear, Giardia, parvovirus SNAP</li>
            </ul>
          </li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal radiographs</strong>:
            <ul>
              <li>Foreign body (radiopaque)</li>
              <li>Obstruction (gas distension, plication, dilated loops)</li>
              <li>GDV: ⭐ "double-bubble" / "Popeye arm" sign on right lateral</li>
              <li>Megaesophagus (gas-filled esophagus)</li>
              <li>Free abdominal gas (perforation)</li>
              <li>Mass effect</li>
            </ul>
          </li>
          <li><strong>Abdominal ultrasound</strong>:
            <ul>
              <li>GI wall layering, thickness</li>
              <li>Mesenteric LN</li>
              <li>Pancreas (size, echogenicity, peripancreatic fluid)</li>
              <li>Liver, gallbladder, common bile duct</li>
              <li>Free fluid (effusion, perforation)</li>
              <li>Foreign body (acoustic shadow)</li>
              <li>Intussusception ("bullseye" target sign)</li>
            </ul>
          </li>
          <li><strong>Contrast study (barium)</strong>: motility, obstruction, perforation suspect (use water-soluble!)</li>
          <li><strong>CT</strong>: complex cases, neoplasia staging</li>
          <li><strong>Endoscopy / colonoscopy</strong>: visualization + biopsy</li>
        </ul>

        <p><strong>Specific testing:</strong></p>
        <ul>
          <li><strong>Spec cPL / fPL (Spec Canine/Feline Pancreatic Lipase)</strong>:
            <ul>
              <li>Most sensitive + specific for pancreatitis</li>
              <li>SNAP cPL/fPL = quick screen</li>
            </ul>
          </li>
          <li><strong>TLI (Trypsin-Like Immunoreactivity)</strong>:
            <ul>
              <li>↓ TLI = EPI</li>
              <li>Fasting sample</li>
            </ul>
          </li>
          <li><strong>Cobalamin (B12), Folate</strong>:
            <ul>
              <li>↓ B12: distal small intestinal disease, EPI, SIBO</li>
              <li>↑ Folate, ↓ B12: SIBO classically</li>
              <li>↓ B12 + ↓ folate: severe diffuse disease</li>
            </ul>
          </li>
          <li><strong>Bile acids</strong>: liver function</li>
          <li><strong>Fecal alpha-1 PI</strong>: PLE marker</li>
          <li><strong>Resting cortisol / ACTH stim</strong>: rule out Addison's (vague GI signs)</li>
          <li><strong>T4</strong>: hyperthyroidism in older cat</li>
          <li><strong>Histopathology (gold standard)</strong>:
            <ul>
              <li>Endoscopic biopsies (multiple)</li>
              <li>Surgical full-thickness biopsies (often needed for definitive lymphoma vs IBD)</li>
            </ul>
          </li>
          <li><strong>PARR / IHC</strong>: differentiate IBD from small cell lymphoma (cat)</li>
          <li><strong>Diet trial</strong>: novel/hydrolyzed protein × 2-4 weeks (FRE)</li>
          <li><strong>Antibiotic trial</strong>: tylosin, metronidazole (ARE)</li>
        </ul>
      `,
      treatment: `
        <p><strong>General principles:</strong></p>
        <ol>
          <li>Stabilize (fluids, electrolytes, acid-base)</li>
          <li>Address specific cause</li>
          <li>Supportive care (anti-emetics, gastric protection, nutrition)</li>
          <li>Nutritional support (early enteral feeding when possible)</li>
        </ol>

        <p><strong>Acute V/D management:</strong></p>
        <ul>
          <li>NPO traditionally — but evidence now supports <strong>early enteral nutrition</strong> as long as no obstruction</li>
          <li>Fluid therapy: correct dehydration + ongoing losses</li>
          <li>Anti-emetics: ⭐ maropitant 1 mg/kg IV/SC q24h</li>
          <li>Acid suppression: famotidine, omeprazole if vomiting persistent</li>
          <li>GI protectant: sucralfate (ulcer)</li>
          <li>Probiotics: may shorten duration</li>
          <li>Bland diet (boiled chicken + rice) or RX GI diet 5-7 days</li>
          <li>Antibiotics ONLY if specific indication (sepsis, parvo with translocation, severe HGE)</li>
        </ul>

        <p><strong>GDV emergency:</strong></p>
        <ol>
          <li>Aggressive shock fluid resuscitation (90 mL/kg dog, slowly initially)</li>
          <li>Decompress stomach (orogastric tube or trocharization)</li>
          <li>Surgery: <strong>derotation + gastropexy</strong> (prevent recurrence)</li>
          <li>Splenectomy if splenic necrosis</li>
          <li>Cardiac monitoring (VPCs/VT in 40-50%)</li>
          <li>Antiarrhythmic if needed: lidocaine 2 mg/kg IV bolus, then CRI</li>
          <li>Post-op: pain management, fluids, monitor for DIC, SIRS</li>
        </ol>

        <p><strong>Pancreatitis:</strong></p>
        <ul>
          <li><strong>Fluid therapy</strong>: aggressive crystalloid · cornerstone</li>
          <li><strong>Pain management</strong>: opioids (buprenorphine, methadone, fentanyl CRI)</li>
          <li><strong>Anti-emetics</strong>: maropitant ± ondansetron</li>
          <li><strong>⭐ Early enteral nutrition</strong> (within 24-48h) — improves outcomes
            <ul>
              <li>NG/NE tube if not eating</li>
              <li>Low-fat diet (Hill's i/d, Royal Canin GI)</li>
              <li>Dog: low fat critical · Cat: less fat-restricted</li>
            </ul>
          </li>
          <li><strong>Antibiotics</strong>: only if sepsis suspected (cefoxitin, amox-clav, fluoroquinolone)</li>
          <li><strong>Cat</strong>: address concurrent triaditis (cholangitis + IBD)</li>
        </ul>

        <p><strong>Foreign body:</strong></p>
        <ul>
          <li>Endoscopic removal (gastric, esophageal)</li>
          <li>Surgery (intestinal, severe gastric)</li>
          <li>Conservative if small, smooth, gastric, animal stable</li>
          <li>⚠️ Linear FB (cat string) — surgical emergency</li>
          <li>Post-op: gastric protection, gradual refeeding</li>
        </ul>

        <p><strong>IBD management:</strong></p>
        <ol>
          <li><strong>Diet trial</strong> (novel or hydrolyzed) × 2-4 weeks
            <ul>
              <li>Z/D, Hypoallergenic, Royal Canin Anallergenic</li>
              <li>Most cases respond (FRE — food responsive enteropathy)</li>
            </ul>
          </li>
          <li><strong>Antibiotic trial</strong> (if diet fails): tylosin, metronidazole × 2-4 weeks</li>
          <li><strong>Immunosuppression</strong> (if both fail):
            <ul>
              <li>Prednisolone 1-2 mg/kg/day, taper</li>
              <li>+ Azathioprine (dog) or chlorambucil (cat)</li>
              <li>Cyclosporine alternative</li>
            </ul>
          </li>
          <li><strong>Cobalamin supplementation</strong> if low: oral or SC weekly</li>
          <li><strong>Probiotics</strong> (Visbiome, FortiFlora, Proviable)</li>
          <li><strong>Fecal microbiota transplant</strong> (emerging)</li>
        </ol>

        <p><strong>EPI:</strong></p>
        <ul>
          <li>⭐ <strong>Pancreatic enzyme replacement</strong>: 1 tsp powder per meal, dose to clinical response</li>
          <li>Cobalamin supplementation (most need it)</li>
          <li>Highly digestible diet</li>
          <li>Antibiotic if SIBO concurrent (tylosin)</li>
          <li>Lifelong therapy</li>
        </ul>

        <p><strong>PLE:</strong></p>
        <ul>
          <li>Treat underlying cause (IBD, lymphoma, lymphangiectasia)</li>
          <li>Ultra-low-fat diet (lymphangiectasia)</li>
          <li>Steroids ± immunosuppressants</li>
          <li>Plasma transfusion if severe hypoalbuminemia + edema</li>
          <li>Antithrombotic prophylaxis (clopidogrel) — high PTE risk</li>
          <li>Diuretics for ascites (cautious)</li>
        </ul>

        <p><strong>Megaesophagus:</strong></p>
        <ul>
          <li>Address underlying (anti-acetylcholine antibody for MG, Florinef for Addison's)</li>
          <li>⭐ <strong>Bailey chair feeding</strong> (vertical position 10-15 min post-meal)</li>
          <li>Slurry consistency feeding (or upright meatballs)</li>
          <li>Sildenafil (LES relaxation, prokinetic studies)</li>
          <li>Monitor for aspiration pneumonia</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Severe dehydration / shock</strong> — acute V/D, GDV</li>
          <li><strong>Aspiration pneumonia</strong> — megaesophagus, vomiting under anesthesia</li>
          <li><strong>Sepsis</strong> — perforation, severe parvo, GI translocation</li>
          <li><strong>SIRS / MODS</strong> — severe pancreatitis, GDV</li>
          <li><strong>Intussusception</strong> — secondary to enteritis</li>
          <li><strong>Perforation</strong> — FB, ulcer, neoplasia</li>
          <li><strong>Ileus</strong> — post-op, electrolyte imbalance</li>
          <li><strong>SIBO</strong> — chronic GI disease, EPI</li>
          <li><strong>Hypoalbuminemia</strong> — PLE, severe IBD</li>
          <li><strong>Thromboembolism</strong> — PLE (loss of antithrombin)</li>
          <li><strong>Megacolon</strong> — chronic constipation (cat)</li>
          <li><strong>Hepatic lipidosis</strong> — anorexic cat &gt; 2-3 days</li>
          <li><strong>Refeeding syndrome</strong> — chronic anorexia + sudden food (hypoP, hypoK)</li>
        </ul>

        <p><strong>Treatment complications:</strong></p>
        <ul>
          <li>NSAID-induced ulcer / nephrotoxicity</li>
          <li>Antibiotic-associated diarrhea (further dysbiosis)</li>
          <li>Steroid side effects (long-term IBD)</li>
          <li>Surgical complications (dehiscence, peritonitis)</li>
          <li>Aspiration pneumonia from feeding tubes</li>
        </ul>

        <p><strong>Prognosis indicators:</strong></p>
        <ul>
          <li>Acute dietary indiscretion: excellent</li>
          <li>Parvovirus puppy: good with intensive care (60-90% survival)</li>
          <li>GDV: 80-90% survival with prompt surgery, gastropexy prevents recurrence</li>
          <li>Acute pancreatitis: variable (mild excellent, severe 30-50% mortality)</li>
          <li>FB: usually good with surgery</li>
          <li>FRE: excellent (responds to diet)</li>
          <li>IBD: chronic management, fair-good</li>
          <li>EPI: lifelong management, good with enzymes</li>
          <li>PLE (lymphangiectasia, lymphoma): guarded</li>
          <li>GI lymphoma (cat low-grade): fair-good with chlorambucil + pred</li>
          <li>GI lymphoma (dog high-grade): poor without aggressive chemo</li>
          <li>Megaesophagus: guarded (aspiration recurs)</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 4 — Organ-Specific Pathophysiology II
     ============================================================ */

  {
    id: 'path-renal',
    titleEn: 'Renal Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบไต',
    type: 'topic',
    system: 'renal',
    species: ['dog', 'cat'],
    tags: ['CKD', 'AKI', 'azotemia', 'proteinuria', 'PLN', 'IRIS staging', 'uremia'],
    aliases: ['kidney disease', 'ไต'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Kidney functions (4):</strong></p>
        <ul>
          <li><strong>Excretion</strong> — waste products (urea, creatinine, drugs)</li>
          <li><strong>Homeostasis</strong> — water, electrolytes, acid-base</li>
          <li><strong>Endocrine</strong> — EPO, calcitriol, renin</li>
          <li><strong>Metabolic</strong> — gluconeogenesis, drug metabolism</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Azotemia Categories</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Pre</span>
              <span class="num-label">Pre-renal (↓ perfusion)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Re</span>
              <span class="num-label">Renal (intrinsic damage)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Post</span>
              <span class="num-label">Post-renal (obstruction)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ <strong>USG distinguishes</strong>: pre-renal &gt; 1.030 (dog), &gt; 1.040 (cat) · renal isosthenuria 1.008-1.012<br>
          📌 ⭐ &gt; 75% nephrons must be lost before azotemia appears</p>
        </div>

        <p><strong>AKI vs CKD:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">AKI vs CKD</span>
          <table>
            <tr><th>Feature</th><th>AKI</th><th>CKD</th></tr>
            <tr><td><strong>Onset</strong></td><td>Hours-days</td><td>Months-years</td></tr>
            <tr><td><strong>Reversibility</strong></td><td>⭐ Potentially reversible</td><td>⭐ Irreversible (progressive)</td></tr>
            <tr><td><strong>Kidney size</strong></td><td>Normal-enlarged (swelling)</td><td>Small, irregular (chronic)</td></tr>
            <tr><td><strong>BCS / muscle</strong></td><td>Normal</td><td>↓ (chronic disease)</td></tr>
            <tr><td><strong>Anemia</strong></td><td>Usually absent</td><td>Common (↓ EPO)</td></tr>
            <tr><td><strong>P/Ca</strong></td><td>Acute hyperP</td><td>Chronic ↑P, ↓ ionized Ca, secondary hyperPTH</td></tr>
            <tr><td><strong>Treatment goal</strong></td><td>Reverse, support</td><td>Slow progression</td></tr>
          </table>
        </div>
      `,
      etiology: `
        <p><strong>AKI causes by category:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">AKI Causes — "TIIN"</span>
          <ul>
            <li><strong>T</strong>oxic:
              <ul>
                <li>⭐ Ethylene glycol (antifreeze)</li>
                <li>⭐ Lily (cat — almost any part fatal)</li>
                <li>⭐ Grapes/raisins (dog)</li>
                <li>NSAIDs (overdose, dehydrated patient)</li>
                <li>Aminoglycosides (gentamicin, amikacin)</li>
                <li>Heavy metals (lead, mercury)</li>
                <li>Vitamin D (cholecalciferol rodenticide)</li>
                <li>Easter lily, Easter cactus, sago palm</li>
              </ul>
            </li>
            <li><strong>I</strong>schemic:
              <ul>
                <li>Severe shock (any cause)</li>
                <li>Hypotension (anesthesia, cardiac)</li>
                <li>Renal artery thromboembolism</li>
                <li>DIC, severe sepsis</li>
              </ul>
            </li>
            <li><strong>I</strong>nfectious:
              <ul>
                <li>Pyelonephritis (ascending UTI)</li>
                <li>Leptospirosis</li>
                <li>Lyme nephritis (Bernese, Labrador)</li>
                <li>FIP renal granuloma (cat)</li>
              </ul>
            </li>
            <li><strong>N</strong>ovel / immune:
              <ul>
                <li>Acute glomerulonephritis (immune complex)</li>
                <li>Acute tubular necrosis (heatstroke, rhabdo, hemoglobinuria)</li>
              </ul>
            </li>
          </ul>
          <p class="mnem-tip">📌 ⭐ <strong>Lily + cat</strong> = emergency fluids within hours · any genus Lilium<br>
          📌 ⭐ Ethylene glycol — sweet taste, common antifreeze · 4-MP (fomepizole) is antidote</p>
        </div>

        <p><strong>CKD causes:</strong></p>
        <ul>
          <li><strong>Most cases idiopathic</strong> (especially older cat)</li>
          <li>Chronic interstitial nephritis (most common)</li>
          <li>Chronic pyelonephritis</li>
          <li>Glomerulonephritis (chronic immune complex)</li>
          <li>Amyloidosis (Shar-Pei, Abyssinian)</li>
          <li>Polycystic kidney disease (Persian, Domestic, Bull Terrier)</li>
          <li>Familial: Cocker Spaniel, Lhasa Apso, Shih Tzu, Doberman, Samoyed</li>
          <li>Hypertension (hypertensive nephropathy)</li>
          <li>End-stage of any AKI</li>
          <li>Neoplasia (lymphoma, primary renal)</li>
        </ul>

        <p><strong>Glomerular disease causes (PLN):</strong></p>
        <ul>
          <li>Immune complex GN (most common)</li>
          <li>Amyloidosis</li>
          <li>Familial GN (Soft-coated Wheaten Terrier, Bernese)</li>
          <li>Chronic infection: Ehrlichia, Lyme, heartworm, leishmaniasis</li>
          <li>Chronic inflammation: pyometra, pancreatitis, IBD</li>
          <li>Neoplasia: lymphoma, multiple myeloma</li>
          <li>Drug-induced (sulfa, gold, NSAID)</li>
        </ul>

        <p><strong>Post-renal causes:</strong></p>
        <ul>
          <li>Urethral obstruction (⭐ blocked cat — FLUTD)</li>
          <li>Ureteral stones / strictures</li>
          <li>Urinary bladder rupture (trauma, severe blockage)</li>
          <li>Neoplasia (TCC at trigone)</li>
          <li>Prostatic disease (BPH, prostatitis, neoplasia)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Glomerular filtration basics:</strong></p>
        <ul>
          <li>GFR = renal blood flow × filtration fraction</li>
          <li>Determined by:
            <ul>
              <li>Glomerular hydrostatic pressure (afferent vs efferent tone)</li>
              <li>Plasma oncotic pressure</li>
              <li>Membrane permeability</li>
              <li>Filtration surface area</li>
            </ul>
          </li>
          <li>RAAS / SNS regulate via afferent/efferent constriction</li>
        </ul>

        <p><strong>Pre-renal pathophysiology:</strong></p>
        <ul>
          <li>↓ Renal perfusion (hypovolemia, hypotension, ↓ CO)</li>
          <li>RAAS activation → ↑ proximal Na/water reabsorption</li>
          <li>ADH → ↑ water reabsorption</li>
          <li>Concentrated urine (high USG)</li>
          <li>Reversible if perfusion restored</li>
          <li>Can progress to ATN if severe/prolonged</li>
        </ul>

        <p><strong>Intrinsic renal pathophysiology:</strong></p>
        <ol>
          <li>Tubular injury (ischemic or toxic)</li>
          <li>Cell swelling, brush border loss</li>
          <li>Tubular cell sloughing → casts</li>
          <li>Back-leak of filtrate</li>
          <li>Tubular obstruction by debris</li>
          <li>↓ GFR (functional + obstructive)</li>
          <li>↓ Concentrating ability (USG = isosthenuria)</li>
          <li>Recovery if cells regenerate (proximal tubule has limited regen)</li>
        </ol>

        <p><strong>Ethylene glycol pathophysiology:</strong></p>
        <ol>
          <li>Ingestion → rapid absorption</li>
          <li>Hepatic alcohol dehydrogenase metabolizes EG → glycoaldehyde → glycolate → glyoxylate → <strong>oxalate</strong></li>
          <li>Oxalate + Ca → calcium oxalate crystals in renal tubules</li>
          <li>Acute tubular necrosis</li>
          <li>Severe metabolic acidosis (↑ AG)</li>
          <li>Hypocalcemia, neuro signs</li>
          <li>Anuric AKI within 24-48 hr if untreated</li>
        </ol>

        <p><strong>CKD progression — "vicious cycle":</strong></p>
        <ol>
          <li>Initial nephron loss (any cause)</li>
          <li>Remaining nephrons hyperfiltrate (compensate)</li>
          <li>Glomerular hypertension → glomerulosclerosis</li>
          <li>Proteinuria → tubular damage → fibrosis</li>
          <li>Progressive nephron loss</li>
          <li>Once started, often progresses despite treating original cause</li>
        </ol>

        <div class="mnemonic numbers">
          <span class="mnem-title">CKD Consequences — "ABCDEFG"</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">A</span>
              <span class="num-label">Acidosis (metabolic)</span>
            </div>
            <div class="num-card">
              <span class="num-big">B</span>
              <span class="num-label">BP ↑ (hypertension)</span>
            </div>
            <div class="num-card">
              <span class="num-big">C</span>
              <span class="num-label">Calcium-Phos imbalance</span>
            </div>
            <div class="num-card">
              <span class="num-big">D</span>
              <span class="num-label">Dehydration (PU/PD)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 + E: EPO ↓ (anemia) · F: Fluid overload (late) · G: GI (uremic gastritis)</p>
        </div>

        <p><strong>Uremic toxin effects:</strong></p>
        <ul>
          <li><strong>GI</strong>: nausea, vomiting, anorexia, uremic gastritis, oral ulcers</li>
          <li><strong>Hematologic</strong>: anemia (↓ EPO + ↓ RBC lifespan + GI bleed)</li>
          <li><strong>Coagulation</strong>: platelet dysfunction (uremic thrombopathy)</li>
          <li><strong>CV</strong>: hypertension, LVH</li>
          <li><strong>CNS</strong>: lethargy, seizures (uremic encephalopathy — late)</li>
          <li><strong>Skin</strong>: pruritus, dry coat</li>
          <li><strong>Bone</strong>: renal osteodystrophy ("rubber jaw" in young)</li>
        </ul>

        <p><strong>Renal secondary hyperparathyroidism:</strong></p>
        <ol>
          <li>↓ GFR → ↑ serum P (cannot excrete)</li>
          <li>↑ P → ↓ ionized Ca (mass effect)</li>
          <li>↓ Renal mass → ↓ calcitriol (1,25-OH-D3)</li>
          <li>↓ Ca absorption from gut</li>
          <li>↓ Ca → ↑ PTH</li>
          <li>↑ PTH → bone resorption (Ca + P released)</li>
          <li>Self-perpetuating cycle</li>
          <li>Calcium-phosphate product &gt; 70 → soft tissue mineralization</li>
        </ol>
      `,
      symptoms: `
        <p><strong>AKI clinical signs:</strong></p>
        <ul>
          <li>Acute lethargy, anorexia, vomiting</li>
          <li>Oliguria or anuria (severe) · sometimes polyuric AKI</li>
          <li>Halitosis (uremic), oral ulcers</li>
          <li>Dehydration, weak pulses (or fluid overload if anuric)</li>
          <li>Abdominal pain (kidney palpation)</li>
          <li>Tachypnea (acidosis compensation)</li>
          <li>Renal enlargement on palpation (acute swelling)</li>
          <li>History of toxin exposure / recent illness</li>
        </ul>

        <p><strong>CKD clinical signs (gradual):</strong></p>
        <ul>
          <li>⭐ <strong>PU/PD</strong> — earliest sign</li>
          <li>Weight loss (chronic), muscle wasting</li>
          <li>Inappetence (waxing/waning)</li>
          <li>Vomiting (intermittent)</li>
          <li>Halitosis, oral ulcers (advanced)</li>
          <li>Pale MM (anemia)</li>
          <li>Dehydration</li>
          <li>Small, irregular kidneys on palpation (cat especially)</li>
          <li>Hypertension signs (retinal hemorrhage, sudden blindness)</li>
          <li>End-stage: seizures, coma (uremic encephalopathy)</li>
        </ul>

        <p><strong>IRIS staging:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">IRIS CKD Staging (creatinine mg/dL)</span>
          <table>
            <tr><th>Stage</th><th>Dog</th><th>Cat</th><th>Description</th></tr>
            <tr><td><strong>1</strong></td><td>&lt; 1.4</td><td>&lt; 1.6</td><td>Non-azotemic · ↑ SDMA, isosthenuria, proteinuria</td></tr>
            <tr><td><strong>2</strong></td><td>1.4-2.8</td><td>1.6-2.8</td><td>Mild azotemia · most subclinical</td></tr>
            <tr><td><strong>3</strong></td><td>2.9-5.0</td><td>2.9-5.0</td><td>Moderate · clinical signs apparent</td></tr>
            <tr><td><strong>4</strong></td><td>&gt; 5.0</td><td>&gt; 5.0</td><td>Severe · uremic crisis risk</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Substaging: proteinuria (UPC) + BP<br>
          📌 ⭐ <strong>SDMA</strong> = early marker · rises with 25-40% nephron loss (vs 75% for creatinine)</p>
        </div>

        <p><strong>FLUTD (cat blocked):</strong></p>
        <ul>
          <li>Stranguria, vocalization</li>
          <li>Repeated litter box trips</li>
          <li>Bladder large, firm, painful on palpation</li>
          <li>Vomiting, lethargy (if &gt; 24-48 hr blocked)</li>
          <li>Bradycardia (hyperK)</li>
          <li>Death from hyperK if untreated 48-72 hr</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Initial workup:</strong></p>
        <ul>
          <li><strong>Bloodwork</strong>:
            <ul>
              <li>BUN, creatinine</li>
              <li><strong>SDMA</strong> (early marker)</li>
              <li>Electrolytes (especially K, P, Ca, Na)</li>
              <li>Total CO2 / blood gas (acidosis)</li>
              <li>Albumin (PLN)</li>
              <li>CBC (anemia, infection)</li>
              <li>BG (concurrent DM)</li>
            </ul>
          </li>
          <li><strong>Urinalysis (essential)</strong>:
            <ul>
              <li>USG: most informative single value</li>
              <li>Proteinuria (UPC if dipstick positive + inactive sediment)</li>
              <li>Sediment: casts (tubular damage), bacteria, RBC, crystals</li>
              <li>Glucosuria without DM = tubular damage</li>
              <li>Culture if pyelonephritis suspected</li>
            </ul>
          </li>
          <li><strong>Imaging</strong>:
            <ul>
              <li>Radiographs: kidney size, stones</li>
              <li>Ultrasound: cortical/medullary architecture, pelvic dilation, mass, cysts</li>
            </ul>
          </li>
          <li><strong>BP</strong>: target &lt; 160 mmHg systolic</li>
          <li><strong>Specific tests</strong>:
            <ul>
              <li>Lepto MAT/PCR (acute AKI)</li>
              <li>Ethylene glycol test (acute, suspect)</li>
              <li>Lyme C6 (PLN)</li>
              <li>Renal biopsy (PLN, persistent unexplained)</li>
            </ul>
          </li>
        </ul>

        <p><strong>UPC interpretation:</strong></p>
        <ul>
          <li>Normal: &lt; 0.2</li>
          <li>Borderline: 0.2-0.5 (dog), 0.2-0.4 (cat)</li>
          <li>Proteinuric: &gt; 0.5 (dog), &gt; 0.4 (cat)</li>
          <li>Glomerular range: &gt; 2.0</li>
          <li>Massive: &gt; 5.0 (PLN suspect)</li>
          <li>⚠️ Must rule out hematuria, pyuria first (post-renal proteinuria)</li>
        </ul>

        <p><strong>USG interpretation:</strong></p>
        <ul>
          <li>Hyposthenuric: &lt; 1.008 (active dilution — DI, psych PD)</li>
          <li>Isosthenuric: 1.008-1.012 (≥ 75% nephron loss usually)</li>
          <li>Adequate concentration: &gt; 1.030 (dog), &gt; 1.040 (cat)</li>
          <li>⚠️ Concurrent disease/diuretic can affect</li>
        </ul>
      `,
      treatment: `
        <p><strong>AKI management:</strong></p>
        <ol>
          <li><strong>Identify + remove cause</strong> (toxin, infection, obstruction)</li>
          <li><strong>Restore perfusion</strong>: IV fluids (LRS or Plasma-Lyte) at 1.5-2× maintenance + replace deficit</li>
          <li><strong>Correct hyperK</strong>: C-BIG-K (Calcium gluconate, Bicarb, Insulin+Glucose, K-removal)</li>
          <li><strong>Manage acidosis</strong>: bicarbonate if pH &lt; 7.2 or HCO3 &lt; 12</li>
          <li><strong>Anti-emetics</strong>: maropitant, ondansetron</li>
          <li><strong>Acid suppression</strong>: omeprazole, famotidine</li>
          <li><strong>Specific antidotes</strong>:
            <ul>
              <li>EG: ⭐ <strong>4-MP (fomepizole)</strong> dog · ethanol IV cat (4-MP less effective)</li>
              <li>Lily: aggressive fluids (no antidote)</li>
              <li>NSAID: misoprostol, GI protection</li>
              <li>Vit D toxicity: pamidronate</li>
            </ul>
          </li>
          <li><strong>Monitor UOP</strong>:
            <ul>
              <li>Normal: 1-2 mL/kg/hr</li>
              <li>Oliguria: &lt; 0.5 mL/kg/hr</li>
              <li>Anuria: &lt; 0.1 mL/kg/hr</li>
            </ul>
          </li>
          <li><strong>If oliguric/anuric despite rehydration</strong>:
            <ul>
              <li>Furosemide (challenge)</li>
              <li>Mannitol (controversial)</li>
              <li>Dopamine (low-dose, controversial in vet)</li>
              <li>Hemodialysis if available (specialty)</li>
            </ul>
          </li>
          <li><strong>Avoid further nephrotoxins</strong> (drug review)</li>
          <li><strong>Nutritional support</strong> (early)</li>
        </ol>

        <p><strong>CKD management — IRIS-based:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">CKD Treatment by IRIS Stage</span>
          <table>
            <tr><th>Stage</th><th>Interventions</th></tr>
            <tr><td><strong>1-2</strong></td><td>Renal diet, BP control, treat UTI, omega-3, monitor</td></tr>
            <tr><td><strong>3</strong></td><td>+ phosphate binder, ACEi if proteinuric, B-complex, anti-emetic</td></tr>
            <tr><td><strong>4</strong></td><td>+ SQ fluids at home, EPO if anemic, calcitriol, intensive support</td></tr>
          </table>
        </div>

        <p><strong>Specific CKD interventions:</strong></p>
        <ul>
          <li><strong>⭐ Renal diet</strong>: low protein (high quality), low P, restricted Na, ↑ omega-3
            <ul>
              <li>Dog: Hill's k/d, Royal Canin Renal, Purina NF</li>
              <li>Cat: same brands · cat especially benefits</li>
            </ul>
          </li>
          <li><strong>BP control</strong>:
            <ul>
              <li>⭐ Amlodipine 0.625-1.25 mg/cat or 0.1-0.5 mg/kg dog</li>
              <li>Telmisartan (cat) — ARB, dual benefit</li>
              <li>ACEi (caution, monitor azotemia)</li>
            </ul>
          </li>
          <li><strong>Proteinuria</strong>:
            <ul>
              <li>ACEi: enalapril 0.5 mg/kg q12-24h, benazepril</li>
              <li>Telmisartan</li>
              <li>Aspirin low-dose (PLN — antithrombotic)</li>
            </ul>
          </li>
          <li><strong>Phosphate control</strong>:
            <ul>
              <li>Phosphate binder: aluminum hydroxide, lanthanum, sevelamer</li>
              <li>Give WITH meals</li>
              <li>Target: serum P 2.5-4.5 (dog), 2.5-4.0 (cat)</li>
            </ul>
          </li>
          <li><strong>Anemia</strong>:
            <ul>
              <li>Erythropoietin (epoetin alfa) or darbepoetin</li>
              <li>Iron supplementation</li>
              <li>⚠️ Pure red cell aplasia risk (5-30%)</li>
            </ul>
          </li>
          <li><strong>Hypokalemia</strong> (cat especially):
            <ul>
              <li>K gluconate oral 2-6 mEq/cat/day</li>
            </ul>
          </li>
          <li><strong>Acidosis</strong>:
            <ul>
              <li>Renal diets are alkalinizing</li>
              <li>Sodium bicarbonate if persistent</li>
            </ul>
          </li>
          <li><strong>Nausea/anorexia</strong>:
            <ul>
              <li>Maropitant 1 mg/kg/day</li>
              <li>Ondansetron</li>
              <li>Mirtazapine 1.88 mg/cat (Mirataz transdermal)</li>
              <li>Capromorelin (Entyce dog, Elura cat)</li>
            </ul>
          </li>
          <li><strong>SQ fluids at home</strong> (cat especially):
            <ul>
              <li>LRS 100-150 mL q24-48h</li>
              <li>Improves hydration, comfort</li>
            </ul>
          </li>
        </ul>

        <p><strong>FLUTD (blocked cat) emergency:</strong></p>
        <ol>
          <li>IV fluids + correct hyperK (C-BIG-K)</li>
          <li>Sedation/anesthesia</li>
          <li>Decompressive cystocentesis (if can't pass catheter)</li>
          <li>Urinary catheterization (Tom Cat or Slippery Sam)</li>
          <li>Bladder lavage</li>
          <li>Indwelling catheter 24-72 hr</li>
          <li>UA + culture</li>
          <li>Long-term: stress reduction, multi-litter boxes, water fountain, diet (urinary)</li>
          <li>Recurrent: perineal urethrostomy</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Uremic crisis</strong> — anorexia, vomiting, lethargy</li>
          <li><strong>Hypertension</strong> → retinal hemorrhage/detachment, sudden blindness, cardiac, encephalopathy</li>
          <li><strong>Hyperkalemia</strong> → cardiac arrest (especially blocked cat)</li>
          <li><strong>Severe acidosis</strong> → cardiac dysfunction</li>
          <li><strong>Pulmonary edema</strong> (anuric AKI fluid overload)</li>
          <li><strong>Anemia</strong> (CKD)</li>
          <li><strong>Renal osteodystrophy</strong> ("rubber jaw" young animals)</li>
          <li><strong>Soft tissue mineralization</strong> (Ca×P &gt; 70)</li>
          <li><strong>Uremic encephalopathy</strong> — seizures, coma</li>
          <li><strong>Hemorrhage</strong> (uremic platelet dysfunction)</li>
          <li><strong>Thromboembolism</strong> (PLN — antithrombin loss)</li>
          <li><strong>Death</strong> from hyperK, fluid overload, severe uremia</li>
        </ul>

        <p><strong>Treatment complications:</strong></p>
        <ul>
          <li>Volume overload (anuric AKI on fluids)</li>
          <li>Pure red cell aplasia (recombinant EPO)</li>
          <li>Hypotension from amlodipine + dehydration</li>
          <li>Aggressive ACEi → worsening azotemia</li>
          <li>Anesthesia risk (impaired drug clearance)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>AKI</strong>: variable
            <ul>
              <li>EG with early 4-MP: good</li>
              <li>EG with late presentation: guarded-poor</li>
              <li>Lily cat: poor if not treated within 18 hr</li>
              <li>Lepto: good with early treatment</li>
              <li>Anuric AKI without dialysis: poor</li>
            </ul>
          </li>
          <li><strong>CKD</strong>: progressive but management can be long-term
            <ul>
              <li>Stage 1-2 cat: median 1-3 years</li>
              <li>Stage 3 cat: median 1 year</li>
              <li>Stage 4 cat: median 1-3 months</li>
              <li>Dog faster progression generally</li>
              <li>Proteinuria + hypertension worsen prognosis</li>
            </ul>
          </li>
          <li><strong>FLUTD blocked cat</strong>: good with prompt treatment, recurrence common (30-40%)</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Avoid nephrotoxins (NSAID care, lily out of cat house)</li>
          <li>Maintain hydration (SC fluids in CKD)</li>
          <li>Monitor older animals annually (BP, UA, SDMA)</li>
          <li>Treat UTI promptly</li>
          <li>Vaccination (Lepto in endemic areas)</li>
          <li>Genetic testing breeding stock (PKD, familial)</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-endocrine',
    titleEn: 'Endocrine Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบต่อมไร้ท่อ',
    type: 'topic',
    system: 'endo',
    species: ['dog', 'cat'],
    tags: ['DM', 'diabetes', 'hyperthyroidism', 'hypothyroidism', 'Cushing', 'Addison', 'DKA'],
    aliases: ['endocrine disease', 'ต่อมไร้ท่อ'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Endocrine system overview:</strong></p>
        <ul>
          <li>Hormones: chemical messengers regulating metabolism, growth, reproduction, stress</li>
          <li>2 main dysfunction patterns:
            <ul>
              <li>⭐ <strong>Hyperfunction</strong> — excess hormone (tumor, hyperplasia, autoimmune stimulation)</li>
              <li>⭐ <strong>Hypofunction</strong> — deficient hormone (autoimmune destruction, surgical removal, neoplasia)</li>
            </ul>
          </li>
          <li>Feedback loops (mostly negative) maintain homeostasis</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Common Endocrine Diseases — Dog vs Cat</span>
          <table>
            <tr><th>Disease</th><th>Dog</th><th>Cat</th></tr>
            <tr><td><strong>DM</strong></td><td>⭐ Common · Type 1-like</td><td>⭐ Common · Type 2-like (often reversible)</td></tr>
            <tr><td><strong>Hypothyroidism</strong></td><td>⭐ Common</td><td>Rare</td></tr>
            <tr><td><strong>Hyperthyroidism</strong></td><td>Rare</td><td>⭐ Common (older cat)</td></tr>
            <tr><td><strong>Cushing's</strong></td><td>⭐ Common (PDH most)</td><td>Rare</td></tr>
            <tr><td><strong>Addison's</strong></td><td>Uncommon</td><td>Very rare</td></tr>
            <tr><td><strong>Hyperaldosteronism</strong></td><td>Rare</td><td>Uncommon (older cat)</td></tr>
            <tr><td><strong>Insulinoma</strong></td><td>Uncommon</td><td>Rare</td></tr>
          </table>
        </div>
      `,
      etiology: `
        <p><strong>Diabetes Mellitus (DM):</strong></p>
        <ul>
          <li><strong>Dog (Type 1-like)</strong>:
            <ul>
              <li>Autoimmune β-cell destruction</li>
              <li>Genetic predisposition (Samoyed, Schnauzer, Poodle, Bichon, Cairn)</li>
              <li>Concurrent: pancreatitis, Cushing's, diestrus (intact female), drugs (steroids, progestins)</li>
              <li>⭐ Always insulin-dependent (lifelong)</li>
            </ul>
          </li>
          <li><strong>Cat (Type 2-like)</strong>:
            <ul>
              <li>Insulin resistance + relative insulin deficiency</li>
              <li>⭐ Obesity is #1 risk factor</li>
              <li>Amyloid deposition in islets</li>
              <li>Genetic: Burmese</li>
              <li>Concurrent: pancreatitis, acromegaly, Cushing's (rare), steroids, progestins</li>
              <li>⭐ Can sometimes achieve <strong>diabetic remission</strong> with strict control + weight loss</li>
            </ul>
          </li>
        </ul>

        <p><strong>Hyperthyroidism (cat):</strong></p>
        <ul>
          <li>⭐ <strong>Functional thyroid adenoma (most common)</strong>: 95-98%</li>
          <li>Carcinoma: 1-3% (suspect with palpable mass + rapid progression)</li>
          <li>Risk factors: older cat (mean ~13 years), canned food (BPA), iodine variations</li>
          <li>Often bilateral (autonomous nodular hyperplasia)</li>
        </ul>

        <p><strong>Hypothyroidism (dog):</strong></p>
        <ul>
          <li>⭐ <strong>Lymphocytic thyroiditis (autoimmune)</strong>: 50%</li>
          <li>Idiopathic atrophy: 50%</li>
          <li>Iatrogenic (post-thyroidectomy, anti-thyroid drug)</li>
          <li>Rare: pituitary, congenital</li>
          <li>Predisposed: Golden Retriever, Doberman, Irish Setter, Boxer, Cocker, Schnauzer</li>
        </ul>

        <p><strong>Cushing's syndrome (hyperadrenocorticism):</strong></p>
        <ul>
          <li><strong>PDH (Pituitary-Dependent)</strong>: 80-85%
            <ul>
              <li>Pituitary microadenoma → ↑ ACTH → bilateral adrenal hyperplasia</li>
            </ul>
          </li>
          <li><strong>ADH (Adrenal-Dependent)</strong>: 15-20%
            <ul>
              <li>Adrenocortical adenoma or carcinoma → autonomous cortisol</li>
            </ul>
          </li>
          <li><strong>Iatrogenic</strong>: chronic exogenous steroid administration</li>
          <li>Predisposed: Poodle, Dachshund, Boxer, Beagle, Bostons</li>
        </ul>

        <p><strong>Addison's disease (hypoadrenocorticism):</strong></p>
        <ul>
          <li>⭐ <strong>Immune-mediated adrenocortical destruction</strong> (most common)</li>
          <li>Other: granulomatous, neoplasia, infarct</li>
          <li>Iatrogenic: rapid steroid withdrawal, mitotane/trilostane overdose</li>
          <li>Predisposed: Standard Poodle, Bearded Collie, Portuguese Water Dog, Nova Scotia Duck Tolling</li>
          <li>Often ⭐ young female (3-6 years)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Diabetes Mellitus pathophysiology:</strong></p>
        <ol>
          <li>Insulin deficiency or resistance</li>
          <li>↓ Glucose uptake by cells</li>
          <li>Hyperglycemia → exceeds renal threshold (~180 mg/dL dog, 250 mg/dL cat) → glucosuria</li>
          <li>Osmotic diuresis → PU/PD</li>
          <li>Cells starve despite high BG → lipolysis, proteolysis</li>
          <li>Weight loss despite polyphagia</li>
          <li>If unchecked → DKA</li>
        </ol>

        <p><strong>DKA (Diabetic Ketoacidosis):</strong></p>
        <ol>
          <li>Severe insulin deficiency + counter-regulatory hormones (cortisol, glucagon, NE, GH)</li>
          <li>Massive lipolysis → free fatty acids</li>
          <li>Hepatic FFA oxidation → ketones (β-hydroxybutyrate, acetoacetate, acetone)</li>
          <li>Ketonemia → ⭐ <strong>metabolic acidosis (high anion gap)</strong></li>
          <li>Severe osmotic diuresis → severe dehydration, electrolyte loss</li>
          <li>Kussmaul breathing (compensatory hyperventilation)</li>
          <li>Often triggered by infection, pancreatitis, missed insulin</li>
        </ol>

        <p><strong>Hyperthyroidism pathophysiology:</strong></p>
        <ol>
          <li>Autonomous T4/T3 secretion (independent of TSH)</li>
          <li>↑ Metabolic rate (cellular hypermetabolism)</li>
          <li>Multi-system effects:
            <ul>
              <li>Cardiac: ↑ HR, ↑ contractility → hyperthyroid CM (similar to HCM)</li>
              <li>GI: ↑ motility (V/D), polyphagia</li>
              <li>Weight loss despite polyphagia</li>
              <li>PU/PD (mechanism unclear)</li>
              <li>Hypertension (frequent)</li>
              <li>Behavior: hyperactive, vocal</li>
              <li>Coat: unkempt</li>
              <li>Muscle weakness (chronic)</li>
            </ul>
          </li>
          <li>"Apathetic hyperthyroidism": rare, depressed appetite + lethargy (poor px)</li>
        </ol>

        <p><strong>Hypothyroidism pathophysiology:</strong></p>
        <ol>
          <li>↓ T4/T3 production</li>
          <li>↓ Metabolic rate (cellular hypometabolism)</li>
          <li>Multi-system effects:
            <ul>
              <li>Weight gain despite normal/↓ appetite</li>
              <li>Lethargy, exercise intolerance</li>
              <li>Cold intolerance ("heat-seeking")</li>
              <li>Bilateral symmetric alopecia ("rat tail")</li>
              <li>Hyperpigmentation</li>
              <li>Recurrent skin infections</li>
              <li>Bradycardia, ↓ contractility</li>
              <li>Hypercholesterolemia (classic)</li>
              <li>"Tragic facial expression" (myxedema)</li>
              <li>Neuro signs: facial nerve, vestibular, megaesophagus, polyneuropathy</li>
              <li>Reproductive: infertility, anestrus</li>
              <li>Coagulopathy (vWF effect)</li>
              <li>Severe: myxedema coma (rare emergency)</li>
            </ul>
          </li>
        </ol>

        <p><strong>Cushing's pathophysiology:</strong></p>
        <ol>
          <li>Chronic ↑ cortisol</li>
          <li>Multi-system effects:
            <ul>
              <li>⭐ <strong>PU/PD</strong> (cortisol antagonizes ADH)</li>
              <li>⭐ Polyphagia</li>
              <li>Pendulous abdomen ("pot belly" — muscle weakness + hepatomegaly)</li>
              <li>Truncal alopecia, thin skin, comedones, calcinosis cutis</li>
              <li>Muscle wasting</li>
              <li>Recurrent UTI (immunosuppression + dilute urine)</li>
              <li>Hypertension</li>
              <li>Hypercoagulable state (PTE risk!)</li>
              <li>Hepatomegaly (steroid-induced vacuolar hepatopathy)</li>
              <li>Diabetes (insulin resistance)</li>
              <li>Pyoderma, demodicosis (immunosuppression)</li>
              <li>Lab: ↑ ALP (steroid isoenzyme), stress leukogram, dilute USG</li>
            </ul>
          </li>
          <li>PDH: pituitary tumor can grow → CNS signs (rare, "macroadenoma")</li>
        </ol>

        <p><strong>Addison's pathophysiology:</strong></p>
        <ol>
          <li>↓ Glucocorticoid (cortisol) AND ↓ Mineralocorticoid (aldosterone)</li>
          <li>Cortisol deficiency → ↓ stress response, hypoglycemia, GI signs</li>
          <li>Aldosterone deficiency → ⭐ Na loss + K retention</li>
          <li>Classic electrolytes: ⭐ <strong>Na:K ratio &lt; 27</strong> (often &lt; 23 in crisis)</li>
          <li>"Atypical Addison's": glucocorticoid deficiency only (Na/K normal)</li>
          <li>Addisonian crisis: shock, bradycardia (hyperK), severe dehydration</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Diabetes Mellitus signs:</strong></p>
        <ul>
          <li>⭐ <strong>"4 P's"</strong>: Polyuria, Polydipsia, Polyphagia, weight (+/-) Pounds dropping</li>
          <li>Cataracts (dog: 80% within 1 year of DM)</li>
          <li>Plantigrade stance (cat — diabetic neuropathy)</li>
          <li>Recurrent UTI (sweet urine + immunosuppression)</li>
          <li>Hepatomegaly</li>
          <li>DKA: lethargy, vomiting, dehydration, Kussmaul breathing, sweet/acetone breath, collapse</li>
        </ul>

        <p><strong>Hyperthyroidism (cat) signs:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Hyperthyroid Cat — Classic Signs</span>
          <ul>
            <li>⭐ Weight loss + polyphagia ("eating like crazy but losing weight")</li>
            <li>PU/PD</li>
            <li>Vomiting, diarrhea (intermittent)</li>
            <li>Hyperactive, restless, ↑ vocalization</li>
            <li>Tachycardia (often &gt; 240), murmur, gallop</li>
            <li>⭐ <strong>Palpable thyroid nodule</strong> ("thyroid slip" — gold standard physical finding)</li>
            <li>Unkempt coat</li>
            <li>Hypertension (50-60% — check BP!)</li>
            <li>Concurrent CKD masking (assess after Rx initiated)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Older cat (&gt; 8 years) with weight loss → ALWAYS measure T4<br>
          📌 ⭐ Treat-then-reassess: hyperthyroidism masks CKD by ↑ GFR</p>
        </div>

        <p><strong>Hypothyroidism signs:</strong></p>
        <ul>
          <li>Lethargy, weight gain</li>
          <li>"Tragic facial expression" (myxedema · facial nerve myxedema)</li>
          <li>Cold intolerance, heat-seeking behavior</li>
          <li>Bilateral symmetric truncal alopecia (non-pruritic)</li>
          <li>"Rat tail" (tail alopecia)</li>
          <li>Hyperpigmentation, dry skin, recurrent pyoderma</li>
          <li>Bradycardia</li>
          <li>Neuro: facial nerve paralysis, peripheral neuropathy, megaesophagus, vestibular</li>
          <li>Reproductive: anestrus, infertility</li>
          <li>Severe: myxedema coma (lethargy, hypothermia, hypotension)</li>
        </ul>

        <p><strong>Cushing's signs:</strong></p>
        <ul>
          <li>⭐ <strong>"PP-PP"</strong>: Polyuria, Polydipsia, Polyphagia, Pendulous abdomen</li>
          <li>Truncal alopecia, thin skin (visible vessels), comedones</li>
          <li>Calcinosis cutis (firm dorsal skin lesions)</li>
          <li>Muscle weakness (proximal)</li>
          <li>Recurrent UTI</li>
          <li>Hepatomegaly (palpable)</li>
          <li>Heat intolerance, panting</li>
          <li>⚠️ <strong>Sudden blindness or hindlimb weakness</strong> = PTE in Cushing's (emergency!)</li>
          <li>⚠️ Macroadenoma: blindness, behavior change, seizures (rare)</li>
        </ul>

        <p><strong>Addison's signs (waxing/waning):</strong></p>
        <ul>
          <li>Lethargy, weakness, anorexia, weight loss</li>
          <li>Vomiting, diarrhea (often hemorrhagic)</li>
          <li>PU/PD (occasionally)</li>
          <li>⭐ <strong>"Addisonian crisis"</strong>:
            <ul>
              <li>Shock, hypotension, hypovolemia</li>
              <li>Bradycardia (hyperK · paradoxical to shock!)</li>
              <li>Hypoglycemia</li>
              <li>"The great pretender" — mimics many diseases</li>
            </ul>
          </li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Diabetes Mellitus diagnosis:</strong></p>
        <ul>
          <li>⭐ <strong>Fasting hyperglycemia + glucosuria + clinical signs</strong></li>
          <li>Cat: confirm with serum fructosamine (rules out stress hyperglycemia)
            <ul>
              <li>Normal: &lt; 350 μmol/L</li>
              <li>Diabetic: &gt; 400 μmol/L</li>
            </ul>
          </li>
          <li>UA: glucose ++++, ketone (DKA)</li>
          <li>Chemistry: hyperlipidemia, ↑ ALP, ↑ ALT (hepatic)</li>
          <li>Workup for cause: pancreatitis (cPL/fPL), Cushing's screening, AUS, T4</li>
          <li>DKA: blood gas (severe metabolic acidosis), β-OHB measurement</li>
        </ul>

        <p><strong>Hyperthyroidism diagnosis (cat):</strong></p>
        <ul>
          <li>⭐ <strong>Total T4 (TT4)</strong>: &gt; 4.0 μg/dL diagnostic</li>
          <li>If TT4 borderline (3.0-4.0) and signs suggestive:
            <ul>
              <li>⭐ <strong>Free T4 (fT4)</strong> by equilibrium dialysis</li>
              <li>T3 suppression test</li>
              <li>Recheck T4 in 2-4 weeks</li>
            </ul>
          </li>
          <li>Concurrent assessment:
            <ul>
              <li>Renal: BUN, creatinine, SDMA, UA, BP</li>
              <li>Cardiac: echo if murmur/gallop (HCM-like changes)</li>
              <li>Liver: ↑ ALT/ALP common</li>
            </ul>
          </li>
          <li>⚠️ Concurrent illness can ↓ T4 → false negative (NTI · "non-thyroidal illness syndrome")</li>
        </ul>

        <p><strong>Hypothyroidism diagnosis (dog):</strong></p>
        <ul>
          <li>⭐ <strong>Total T4 (TT4)</strong>: low, but NTI common</li>
          <li>⭐ <strong>Free T4 (fT4) by ED</strong>: more specific (less affected by NTI)</li>
          <li>⭐ <strong>TSH (cTSH)</strong>: high in primary hypothyroidism (60-80% of cases)</li>
          <li><strong>Thyroglobulin Ab (TgAA)</strong>: autoimmune cases (lymphocytic thyroiditis)</li>
          <li>Best workup: TT4 + fT4 + TSH together</li>
          <li>⚠️ Drug effects: glucocorticoids, sulfonamides, phenobarbital ↓ T4</li>
          <li>⚠️ Sighthound dogs have lower normal T4 reference</li>
          <li>Trial therapy + recheck = sometimes used in equivocal cases</li>
        </ul>

        <p><strong>Cushing's diagnosis (dog):</strong></p>
        <ul>
          <li>⭐ <strong>Screening tests</strong>:
            <ul>
              <li><strong>UCCR (urine cortisol:creatinine)</strong>: high sensitivity, low specificity · home morning sample × 2-3 days · normal = rule OUT</li>
              <li><strong>LDDST (low-dose dex suppression)</strong>: gold standard screening · 8-hour test
                <ul>
                  <li>Normal: cortisol suppresses &lt; 1.4 at 4 + 8h</li>
                  <li>Cushing's: 8h cortisol &gt; 1.4</li>
                  <li>If 4h escape but 8h suppress = PDH</li>
                </ul>
              </li>
              <li><strong>ACTH stim</strong>: less sensitive, more specific · differentiates iatrogenic</li>
            </ul>
          </li>
          <li>⭐ <strong>Differentiating PDH vs ADH</strong>:
            <ul>
              <li>HDDST (high-dose dex suppression)</li>
              <li>Endogenous ACTH</li>
              <li>Abdominal ultrasound (bilateral adrenal hyperplasia = PDH · unilateral mass = ADH)</li>
              <li>CT/MRI brain (pituitary)</li>
            </ul>
          </li>
          <li>⚠️ Don't test if concurrent serious illness (false positive)</li>
        </ul>

        <p><strong>Addison's diagnosis:</strong></p>
        <ul>
          <li><strong>⭐ Resting cortisol screen</strong>: 
            <ul>
              <li>&lt; 2 μg/dL: highly suggestive (sensitive)</li>
              <li>&gt; 2 μg/dL: rule out</li>
            </ul>
          </li>
          <li>⭐ <strong>ACTH stim test (gold standard)</strong>:
            <ul>
              <li>Pre + post (1-hour) cortisol</li>
              <li>Both &lt; 2 μg/dL = Addison's</li>
              <li>Atypical: low cortisol but normal Na/K</li>
            </ul>
          </li>
          <li>Electrolytes: Na:K ratio &lt; 27 (typical Addison's)</li>
          <li>CBC: ⭐ <strong>"reverse stress leukogram"</strong> (lymphocytosis, eosinophilia · absence of stress response)</li>
          <li>Chemistry: hyperK, hypoNa, hyperCa (rare), hypoglycemia, azotemia (often)</li>
          <li>ECG (hyperK changes): tall T, wide QRS, atrial standstill (severe)</li>
        </ul>
      `,
      treatment: `
        <p><strong>Diabetes Mellitus treatment:</strong></p>
        <ul>
          <li><strong>Insulin choice</strong>:
            <ul>
              <li><strong>⭐ Cat</strong>: glargine (Lantus), PZI, detemir · 1-2 U/cat q12h starting</li>
              <li><strong>⭐ Dog</strong>: NPH, lente (Vetsulin), glargine · 0.25-0.5 U/kg q12h starting</li>
              <li>Adjust based on glucose curves, fructosamine, signs</li>
            </ul>
          </li>
          <li><strong>Diet</strong>:
            <ul>
              <li>Cat: ⭐ <strong>high protein, low carb</strong> (canned ideal · Hill's m/d, RC Diabetic)</li>
              <li>Dog: high fiber, complex carb, consistent</li>
              <li>Consistent timing with insulin</li>
            </ul>
          </li>
          <li><strong>Weight management</strong>: critical for cat (obesity = primary risk)</li>
          <li><strong>Monitoring</strong>:
            <ul>
              <li>Home BG curves (FreeStyle Libre CGM ideal)</li>
              <li>Fructosamine q3 months</li>
              <li>Recheck UA (UTI, ketones)</li>
              <li>Watch for cataracts (dog), neuropathy (cat plantigrade)</li>
            </ul>
          </li>
          <li><strong>Cat remission goal</strong>: tight control + diet + weight loss → 30-40% achieve remission</li>
          <li><strong>SGLT2 inhibitors</strong> (cat): bexagliflozin (Bexacat), velagliflozin (Senvelgo) — newer oral options
            <ul>
              <li>⚠️ Only for non-DKA, healthy otherwise</li>
              <li>Risk of euglycemic DKA</li>
            </ul>
          </li>
        </ul>

        <p><strong>DKA treatment:</strong></p>
        <ol>
          <li><strong>Aggressive IV fluids</strong>: 0.9% NaCl initially, then LRS · 1.5-2× maintenance + replace deficit over 24-48h</li>
          <li><strong>Correct electrolytes</strong>: ⚠️ K supplementation early (insulin will drop further) · phosphate (refeeding)</li>
          <li><strong>Regular insulin</strong>: CRI 0.05-0.1 U/kg/hr or low-dose IM q1h
            <ul>
              <li>Target BG drop 50-70 mg/dL/hr</li>
              <li>Add dextrose to fluids when BG &lt; 250</li>
              <li>Continue insulin until ketones resolve (12-48 hr)</li>
            </ul>
          </li>
          <li><strong>Address triggers</strong>: pancreatitis, infection, missed dose</li>
          <li><strong>Bicarbonate</strong>: only if pH &lt; 7.0 (rarely needed)</li>
          <li>Transition to SC long-acting once stable</li>
        </ol>

        <p><strong>Hyperthyroidism treatment (cat) — 4 options:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Feline Hyperthyroidism Treatment</span>
          <table>
            <tr><th>Option</th><th>Pros</th><th>Cons</th></tr>
            <tr><td><strong>Methimazole</strong></td><td>Cheap, reversible, easy</td><td>Lifelong, GI/blood SE, transdermal possible</td></tr>
            <tr><td><strong>Carbimazole</strong></td><td>Once daily, fewer SE</td><td>Limited availability</td></tr>
            <tr><td><strong>⭐ Radioiodine (I-131)</strong></td><td>⭐ Curative · single Rx</td><td>Specialty centers, isolation period, expensive</td></tr>
            <tr><td><strong>Y/D diet</strong></td><td>Drug-free, simple</td><td>Must be only food, lifelong</td></tr>
            <tr><td><strong>Thyroidectomy</strong></td><td>Curative</td><td>Anesthesia risk in old cat, hypoCa risk</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Radioiodine = gold standard if affordable<br>
          📌 ⚠️ Concurrent CKD: methimazole trial first to assess kidneys post-treatment</p>
        </div>

        <p><strong>Hypothyroidism treatment:</strong></p>
        <ul>
          <li>⭐ <strong>Levothyroxine (L-T4)</strong>: 0.02 mg/kg PO q12h initially
            <ul>
              <li>Recheck T4 4-8 weeks: peak 4-6h post-dose target high-normal</li>
              <li>Adjust dose ± frequency</li>
            </ul>
          </li>
          <li>⚠️ Older patients with cardiac disease: start lower (0.005 mg/kg q12h, gradually increase)</li>
          <li>Lifelong therapy</li>
          <li>Coat improves over months · weight gain reverses · neuro signs slower to recover</li>
        </ul>

        <p><strong>Cushing's treatment:</strong></p>
        <ul>
          <li><strong>⭐ Trilostane (Vetoryl)</strong>: 1-3 mg/kg PO q12-24h
            <ul>
              <li>Reversibly inhibits 3β-HSD</li>
              <li>Monitor with ACTH stim (post 1.5-9 μg/dL ideal)</li>
              <li>⚠️ Iatrogenic Addisonian crisis if overdose</li>
              <li>Rare: adrenal necrosis</li>
            </ul>
          </li>
          <li><strong>Mitotane (Lysodren)</strong>:
            <ul>
              <li>Selectively destroys adrenal cortex</li>
              <li>Loading dose then maintenance</li>
              <li>Effective but more side effects</li>
              <li>Less commonly used now</li>
            </ul>
          </li>
          <li><strong>Surgery (ADH)</strong>: adrenalectomy if mass localized</li>
          <li><strong>Radiation</strong>: pituitary macroadenoma</li>
          <li><strong>Iatrogenic</strong>: gradual steroid taper, prevent withdrawal</li>
          <li>Monitor: ALP, LDDST or ACTH stim, BP, signs</li>
        </ul>

        <p><strong>Addisonian crisis emergency:</strong></p>
        <ol>
          <li>IV fluids (0.9% NaCl aggressive — corrects hypoNa + hyperK + dehydration)</li>
          <li>Treat hyperK if cardiac signs (C-BIG-K)</li>
          <li>⭐ <strong>Dexamethasone SP</strong> (NOT prednisolone — interferes with cortisol assay) 0.5-2 mg/kg IV</li>
          <li>Once diagnosis confirmed: switch to prednisolone</li>
          <li>Treat hypoglycemia (dextrose)</li>
        </ol>

        <p><strong>Addison's chronic management:</strong></p>
        <ul>
          <li><strong>⭐ DOCP (Percorten / Zycortal)</strong>: 1.5-2.2 mg/kg SC q25-30 days · mineralocorticoid</li>
          <li><strong>⭐ Prednisolone</strong>: 0.1-0.2 mg/kg/day · physiologic glucocorticoid replacement (double during stress)</li>
          <li>Alternative: fludrocortisone (Florinef) PO daily — has both gluco + mineralo activity</li>
          <li>Monitor electrolytes q3-6 months</li>
          <li>⚠️ "Stress dose": 2-4× pred during illness, surgery, travel</li>
          <li>Owner education: missed doses can be fatal</li>
        </ul>
      `,
      complications: `
        <p><strong>DM complications:</strong></p>
        <ul>
          <li>DKA — life-threatening</li>
          <li>HHS (hyperosmolar hyperglycemic state) — rare but severe</li>
          <li>Cataracts (dog) — almost universal</li>
          <li>Diabetic neuropathy (cat plantigrade)</li>
          <li>Recurrent UTI</li>
          <li>Hypoglycemia (insulin overdose) — Whipple's triad</li>
          <li>Somogyi phenomenon (rebound hyperglycemia after hypoglycemia)</li>
          <li>Insulin resistance (Cushing's, infection, pancreatitis)</li>
          <li>Pancreatitis (concurrent)</li>
        </ul>

        <p><strong>Hyperthyroidism complications:</strong></p>
        <ul>
          <li>Cardiac: thyrotoxic CM, CHF</li>
          <li>Hypertension → blindness, seizures, organ damage</li>
          <li>Concurrent CKD revealed after treatment</li>
          <li>Methimazole side effects: vomiting, hepatic, blood dyscrasia, facial pruritus (idiosyncratic)</li>
          <li>Iatrogenic hypothyroidism after radioiodine/thyroidectomy</li>
          <li>Hypocalcemia post-thyroidectomy</li>
        </ul>

        <p><strong>Cushing's complications:</strong></p>
        <ul>
          <li>⚠️ <strong>Pulmonary thromboembolism</strong> — major mortality cause</li>
          <li>Diabetes mellitus (insulin resistance)</li>
          <li>Hypertension</li>
          <li>Calcinosis cutis</li>
          <li>Recurrent infections (UTI, pyoderma, demodex)</li>
          <li>Macroadenoma growth (PDH 10-20%) → CNS signs</li>
          <li>Iatrogenic Addison's from trilostane/mitotane overdose</li>
          <li>Adrenal necrosis from trilostane (rare, fatal)</li>
        </ul>

        <p><strong>Addison's complications:</strong></p>
        <ul>
          <li>Crisis recurrence with missed doses, illness, stress</li>
          <li>Megaesophagus (associated)</li>
          <li>Concurrent autoimmune disease (T1DM, hypothyroidism, IMHA)</li>
          <li>Iatrogenic Cushing's from over-replacement</li>
          <li>Lifelong cost burden</li>
        </ul>

        <p><strong>Hypothyroidism complications:</strong></p>
        <ul>
          <li>Myxedema coma (rare)</li>
          <li>Megaesophagus → aspiration</li>
          <li>Polyneuropathy</li>
          <li>Atherosclerosis (rare in dog vs human)</li>
          <li>Treatment: rare side effects, cardiac if too rapid</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>DM dog: median 2-3 years post-diagnosis (cataracts inevitable)</li>
          <li>DM cat: median 2-3 years (better with remission)</li>
          <li>Hyperthyroidism: excellent with treatment</li>
          <li>Hypothyroidism: excellent with L-T4</li>
          <li>Cushing's: median 2-3 years with treatment</li>
          <li>Addison's: lifelong but excellent if compliant (median &gt; 5 years)</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-hepatic',
    titleEn: 'Hepatic Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาตับ',
    type: 'topic',
    system: 'hepatic',
    species: ['dog', 'cat'],
    tags: ['hepatitis', 'cholestasis', 'liver failure', 'PSS', 'lipidosis', 'cirrhosis', 'icterus', 'HE'],
    aliases: ['liver disease', 'ตับ'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Liver functions (huge!):</strong></p>
        <ul>
          <li><strong>Metabolic</strong>: gluconeogenesis, glycogen, lipid, protein synthesis</li>
          <li><strong>Synthetic</strong>: albumin, coag factors (most), cholesterol, bile</li>
          <li><strong>Detoxification</strong>: ammonia → urea, drug metabolism</li>
          <li><strong>Storage</strong>: glycogen, vitamins (A, D, E, K, B12), iron, copper</li>
          <li><strong>Immune</strong>: Kupffer cells</li>
          <li>⭐ <strong>Massive reserve</strong> — must lose &gt; 70% function for failure</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Liver Disease Patterns</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">Hepato</span>
              <span class="num-label">Hepatocellular (ALT)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Chol</span>
              <span class="num-label">Cholestatic (ALP, GGT, bili)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Vasc</span>
              <span class="num-label">Vascular (PSS)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Mass</span>
              <span class="num-label">Mass / neoplasia</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ ALT primarily = hepatocellular damage<br>
          📌 ⭐ ALP + GGT primarily = cholestasis<br>
          📌 ⭐ Both ↑ = mixed picture (most clinical cases)</p>
        </div>
      `,
      etiology: `
        <p><strong>Acute hepatitis causes:</strong></p>
        <ul>
          <li><strong>Toxic</strong>:
            <ul>
              <li>⭐ Acetaminophen (especially cat — fatal)</li>
              <li>Xylitol (dog — hypoglycemia + acute hepatic necrosis)</li>
              <li>NSAIDs (overdose)</li>
              <li>Sago palm (dog)</li>
              <li>Aflatoxins (moldy food)</li>
              <li>Phenobarbital</li>
              <li>Carprofen (idiosyncratic, Lab predisposed)</li>
              <li>Heavy metals (copper, iron)</li>
              <li>Mushrooms (Amanita)</li>
              <li>Anesthesia (rare halothane)</li>
            </ul>
          </li>
          <li><strong>Infectious</strong>:
            <ul>
              <li>Leptospirosis</li>
              <li>Infectious canine hepatitis (CAV-1)</li>
              <li>Bacterial cholangitis (E. coli)</li>
              <li>Toxoplasma (cat)</li>
              <li>FIP (cat)</li>
              <li>Liver fluke (Platynosomum — cat)</li>
            </ul>
          </li>
          <li><strong>Other</strong>:
            <ul>
              <li>Trauma (HBC, fall)</li>
              <li>Hepatic abscess (rare)</li>
              <li>Acute on chronic</li>
            </ul>
          </li>
        </ul>

        <p><strong>Chronic hepatitis causes:</strong></p>
        <ul>
          <li><strong>Copper-associated</strong>: ⭐ Bedlington Terrier (genetic), Doberman, Lab, Dalmatian, WHWT</li>
          <li>Idiopathic (most common in dog)</li>
          <li>Drug-induced (chronic NSAIDs, phenobarbital, carprofen, lomustine)</li>
          <li>Infectious (Lepto, atypical bacterial cholangitis)</li>
          <li>Immune-mediated (rare)</li>
          <li>End-stage of any acute hepatitis</li>
        </ul>

        <p><strong>Cholestatic disease:</strong></p>
        <ul>
          <li><strong>Intrahepatic</strong>:
            <ul>
              <li>Steroid hepatopathy (dog)</li>
              <li>Cholangitis/cholangiohepatitis (cat — ⭐ #1 liver disease in cat)</li>
              <li>Hepatic lipidosis (cat)</li>
              <li>Sepsis</li>
              <li>Drug toxicity</li>
            </ul>
          </li>
          <li><strong>Extrahepatic</strong>:
            <ul>
              <li>Pancreatitis (compresses CBD)</li>
              <li>Cholelithiasis (gallstones)</li>
              <li>Mucocele (Shetland, Cocker)</li>
              <li>Neoplasia (CBD, duodenal, pancreatic)</li>
              <li>Stricture (post-trauma, post-surgical)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Vascular disorders:</strong></p>
        <ul>
          <li><strong>⭐ Portosystemic shunt (PSS)</strong>:
            <ul>
              <li>Congenital extrahepatic: Yorkie, Maltese, Schnauzer, Cairn (small breeds)</li>
              <li>Congenital intrahepatic: Lab, Golden, Irish Wolfhound (large breeds)</li>
              <li>Acquired (multiple): chronic portal HT</li>
            </ul>
          </li>
          <li><strong>Hepatic AV malformation</strong>: rare</li>
          <li><strong>Microvascular dysplasia</strong>: Cairn, Yorkie</li>
        </ul>

        <p><strong>Hepatic lipidosis (cat):</strong></p>
        <ul>
          <li>⭐ Most common feline liver disease</li>
          <li>Triggered by ANY anorexia &gt; 2-3 days in obese/overweight cat</li>
          <li>Mobilization of fat → hepatic accumulation faster than processing</li>
          <li>Idiopathic OR secondary (pancreatitis, IBD, neoplasia, DM, FLUTD, stress)</li>
          <li>Often misnamed "fatty liver"</li>
        </ul>

        <p><strong>Neoplasia:</strong></p>
        <ul>
          <li>Primary: hepatocellular carcinoma, bile duct carcinoma, hepatocellular adenoma</li>
          <li>Hemangiosarcoma (often presents with hemoabdomen)</li>
          <li>Metastatic (more common than primary): lymphoma, anal sac adenoCA, mast cell, mammary</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Hepatocellular injury cascade:</strong></p>
        <ol>
          <li>Toxin/insult damages hepatocyte</li>
          <li>Mitochondrial damage, ROS production</li>
          <li>Cell membrane disruption → leak ALT (cytoplasmic), AST (mitochondrial)</li>
          <li>Apoptosis or necrosis</li>
          <li>If acute + reversible: regeneration possible (liver champion of regen)</li>
          <li>If chronic: stellate cell activation → fibrosis → cirrhosis</li>
          <li>Loss of architecture → portal HT, ascites, HE, coagulopathy</li>
        </ol>

        <p><strong>Cholestasis pathophysiology:</strong></p>
        <ol>
          <li>Obstruction of bile flow (intra or extra)</li>
          <li>↑ Bile acids in hepatocytes → toxic, oxidative damage</li>
          <li>Bilirubin retention → ⭐ icterus (when total bili &gt; 2-3)</li>
          <li>↓ Bile delivery to gut → ↓ fat absorption (steatorrhea, vit K malabs)</li>
          <li>Vit K-dependent factor deficiency → coagulopathy</li>
          <li>↑ ALP (canalicular enzyme) and ↑ GGT</li>
          <li>Bilirubinuria (early cholestasis sign in dog · always abnormal in cat)</li>
        </ol>

        <p><strong>Hepatic encephalopathy (HE):</strong></p>
        <ol>
          <li>Liver fails to convert ammonia (NH3) → urea</li>
          <li>NH3 accumulates in blood</li>
          <li>NH3 crosses BBB → CNS dysfunction</li>
          <li>Other toxins involved: aromatic amino acids, mercaptans, GABA-like substances</li>
          <li>Astrocyte swelling, altered neurotransmission</li>
          <li>Clinical signs: behavior change, ataxia, head pressing, seizure, coma</li>
        </ol>

        <p><strong>Portosystemic shunt pathophysiology:</strong></p>
        <ol>
          <li>Abnormal vessel(s) bypass liver</li>
          <li>Portal blood (NH3, toxins, drugs from gut) reaches systemic circulation directly</li>
          <li>Liver atrophy (no portal trophic factors)</li>
          <li>Gut-derived toxins → HE (post-prandial worsening)</li>
          <li>↓ Hepatic synthesis: hypoalbuminemia, hypocholesterolemia, low BUN, microcytosis</li>
          <li>Ammonium urate crystals/uroliths (NH3 + uric acid in urine)</li>
        </ol>

        <p><strong>Hepatic lipidosis pathophysiology (cat):</strong></p>
        <ol>
          <li>Anorexia in obese cat</li>
          <li>Massive lipolysis → FFAs to liver</li>
          <li>↓ Hepatic apolipoprotein B synthesis (cat-specific defect)</li>
          <li>Cannot package and export TGs as VLDL</li>
          <li>Massive intracellular fat accumulation</li>
          <li>Hepatocyte dysfunction → cholestasis, ↑ ALT, ↑ T-bili</li>
          <li>Severe disease, often hepatic encephalopathy</li>
        </ol>

        <p><strong>Cirrhosis (end-stage chronic):</strong></p>
        <ul>
          <li>Diffuse fibrosis + nodular regeneration</li>
          <li>Loss of normal hepatic architecture</li>
          <li>Portal hypertension → ascites, splenomegaly, varices</li>
          <li>Acquired PSS (multiple shunts to bypass HT) → HE</li>
          <li>Synthetic failure: hypoalbuminemia, coagulopathy</li>
          <li>Clearance failure: drug toxicity, NH3</li>
          <li>Generally irreversible · poor prognosis</li>
        </ul>

        <p><strong>Coagulopathy in liver disease:</strong></p>
        <ul>
          <li>↓ Synthesis of factors II, V, VII, IX, X, XI</li>
          <li>↓ Vit K absorption (cholestasis)</li>
          <li>↓ Antithrombin, protein C/S (paradoxical hypercoag also)</li>
          <li>Thrombocytopathy (cholestasis)</li>
          <li>Splenic sequestration of platelets (portal HT)</li>
          <li>DIC in fulminant cases</li>
        </ul>

        <p><strong>Ascites in liver disease:</strong></p>
        <ul>
          <li>Portal hypertension → ↑ splanchnic capillary pressure</li>
          <li>Hypoalbuminemia → ↓ oncotic pressure</li>
          <li>Activates RAAS → Na/water retention</li>
          <li>Lymphatic overload</li>
          <li>"Pure transudate" usually (low protein, low cellular)</li>
        </ul>
      `,
      symptoms: `
        <p><strong>General hepatic disease signs:</strong></p>
        <ul>
          <li>Anorexia, lethargy, weight loss</li>
          <li>Vomiting, diarrhea</li>
          <li>PU/PD (mechanism multifactorial)</li>
          <li>Icterus (when T-bili &gt; 2-3 mg/dL)</li>
          <li>Pigmenturia (bilirubinuria)</li>
          <li>Acholic stools (extrahepatic obstruction · pale, putty)</li>
          <li>Hepatomegaly or microhepatica (chronic)</li>
          <li>Ascites (advanced)</li>
          <li>Bleeding tendencies (coagulopathy)</li>
          <li>Easy bruising (petechiae, ecchymoses)</li>
        </ul>

        <p><strong>Hepatic encephalopathy signs:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">HE Grading</span>
          <table>
            <tr><th>Grade</th><th>Signs</th></tr>
            <tr><td><strong>0</strong></td><td>Subclinical (only on testing)</td></tr>
            <tr><td><strong>1</strong></td><td>Listless, depressed, mild incoordination</td></tr>
            <tr><td><strong>2</strong></td><td>Ataxia, head pressing, hypersalivation, blindness</td></tr>
            <tr><td><strong>3</strong></td><td>Seizures, stupor</td></tr>
            <tr><td><strong>4</strong></td><td>Coma</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Post-prandial worsening</strong> = HE (high-protein meal → ↑ NH3)<br>
          📌 ⭐ Young small breed dog with PSS classic: signs after eating, FTT, urinary stones</p>
        </div>

        <p><strong>PSS specific signs:</strong></p>
        <ul>
          <li>⭐ Young small breed dog (or large breed for IH PSS)</li>
          <li>Failure to thrive, small for breed</li>
          <li>Behavioral changes (head pressing, circling, dullness)</li>
          <li>Drooling (cat especially)</li>
          <li>Worsening signs after eating high-protein meal</li>
          <li>Slow recovery from anesthesia</li>
          <li>Urinary signs (ammonium urate stones — even in non-Dalmatian!)</li>
          <li>Polyuria/polydipsia</li>
          <li>Anesthesia incidents (drug accumulation)</li>
        </ul>

        <p><strong>Hepatic lipidosis (cat) specific:</strong></p>
        <ul>
          <li>History: obesity, recent anorexia (any cause)</li>
          <li>⭐ Profound icterus</li>
          <li>Lethargy, weakness</li>
          <li>Hepatomegaly</li>
          <li>Drooling (HE)</li>
          <li>Vomiting (concurrent or trigger)</li>
          <li>Refusal to eat (compounds problem)</li>
        </ul>

        <p><strong>Acute hepatic necrosis (e.g., xylitol, acetaminophen):</strong></p>
        <ul>
          <li>Acute lethargy, vomiting</li>
          <li>Severe ↑ ALT/AST (massive)</li>
          <li>Hypoglycemia</li>
          <li>Coagulopathy (rapid)</li>
          <li>Methemoglobinemia (acetaminophen, cat — chocolate-brown blood, dyspnea)</li>
          <li>Facial swelling (cat acetaminophen)</li>
          <li>Death within hours-days</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Bloodwork:</strong></p>
        <ul>
          <li><strong>Hepatic enzymes</strong>:
            <ul>
              <li><strong>ALT</strong>: hepatocellular damage · half-life 60h dog, 6h cat</li>
              <li><strong>AST</strong>: less specific (also muscle, RBC)</li>
              <li><strong>ALP</strong>: cholestasis · also bone, steroid (dog)</li>
              <li><strong>GGT</strong>: cholestasis · more specific than ALP for cat</li>
            </ul>
          </li>
          <li><strong>Function tests</strong>:
            <ul>
              <li><strong>Albumin</strong>: ↓ in chronic synthetic failure (always also rule out PLE/PLN)</li>
              <li><strong>BUN</strong>: ↓ in synthetic failure or PSS</li>
              <li><strong>Cholesterol</strong>: ↓ in PSS/synthetic failure · ↑ in cholestasis/Cushing's</li>
              <li><strong>Glucose</strong>: ↓ in fulminant failure, sepsis, PSS, insulinoma</li>
              <li><strong>Bilirubin</strong>: T-bili, conjugated/unconjugated</li>
              <li><strong>⭐ Bile acids</strong>: 12-h fasted + 2-h post-prandial · most sensitive function test
                <ul>
                  <li>Normal: post-prandial &lt; 25 dog, &lt; 20 cat</li>
                  <li>↑ Post-prandial: liver dysfunction</li>
                  <li>Used to differentiate hepatopathy from incidental ALT ↑</li>
                </ul>
              </li>
              <li><strong>⭐ Ammonia</strong>: ↑ in HE, PSS · pre + post-meal · sample handling sensitive</li>
            </ul>
          </li>
          <li><strong>Coag panel</strong>: PT, aPTT, fibrinogen (synthetic failure)</li>
          <li><strong>CBC</strong>: microcytosis (PSS), target cells, anemia</li>
          <li><strong>UA</strong>: bilirubinuria (always abnormal in cat), ammonium urate crystals</li>
        </ul>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Radiographs</strong>: liver size (hepatomegaly, microhepatica), gas (gas-forming abscess), foreign body</li>
          <li><strong>Ultrasound</strong>:
            <ul>
              <li>Architecture, echogenicity (lipidosis = hyperechoic, mass, fibrosis)</li>
              <li>Bile duct dilation</li>
              <li>Gallbladder (mucocele, sludge, stones)</li>
              <li>Vascular flow (Doppler — PSS)</li>
              <li>Free fluid (ascites)</li>
              <li>Mass identification</li>
            </ul>
          </li>
          <li><strong>CT</strong>: best for PSS (CTA), neoplasia staging</li>
          <li><strong>Scintigraphy</strong>: PSS detection (specialty)</li>
        </ul>

        <p><strong>Sampling/biopsy:</strong></p>
        <ul>
          <li><strong>FNA</strong>: limited (lymphoma, lipidosis useful · architecture not assessed)</li>
          <li><strong>Tru-cut biopsy</strong>: small samples</li>
          <li><strong>Laparoscopic biopsy</strong>: better samples, less invasive</li>
          <li><strong>Surgical biopsy</strong>: gold standard, most tissue</li>
          <li>⚠️ Coag screen + ± vit K1 before biopsy</li>
          <li>Consider copper quantification (chronic hepatitis)</li>
          <li>Bile culture (cat especially)</li>
        </ul>

        <p><strong>Specific testing:</strong></p>
        <ul>
          <li>Lepto MAT/PCR</li>
          <li>Toxoplasma serology (cat)</li>
          <li>Heartworm test</li>
          <li>FeLV/FIV (cat)</li>
        </ul>
      `,
      treatment: `
        <p><strong>General principles:</strong></p>
        <ol>
          <li>Identify + remove cause (toxin, drug, infection)</li>
          <li>Supportive care (fluids, electrolytes, glucose)</li>
          <li>Hepatoprotection (antioxidants)</li>
          <li>Address complications (HE, coagulopathy, ascites)</li>
          <li>Specific therapy for diagnosis</li>
        </ol>

        <p><strong>Hepatoprotective drugs:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Hepatoprotectants</span>
          <table>
            <tr><th>Drug</th><th>Mechanism</th><th>Dose</th></tr>
            <tr><td><strong>SAMe (S-adenosyl-methionine)</strong></td><td>Glutathione precursor, antioxidant</td><td>20 mg/kg q24h on empty stomach</td></tr>
            <tr><td><strong>Silymarin / silybin</strong></td><td>Antioxidant, anti-fibrotic</td><td>5-15 mg/kg q24h</td></tr>
            <tr><td><strong>Vitamin E</strong></td><td>Antioxidant</td><td>10-15 IU/kg q24h</td></tr>
            <tr><td><strong>NAC (N-acetylcysteine)</strong></td><td>Glutathione precursor (acute)</td><td>140 mg/kg loading, then 70 mg/kg q6h</td></tr>
            <tr><td><strong>Ursodiol</strong></td><td>Hydrophilic bile acid · choleretic</td><td>10-15 mg/kg q24h</td></tr>
            <tr><td><strong>L-carnitine</strong></td><td>Fat metabolism (lipidosis)</td><td>250-500 mg/cat q24h</td></tr>
          </table>
        </div>

        <p><strong>Acetaminophen toxicity (cat especially):</strong></p>
        <ul>
          <li>⭐ <strong>NAC IV/PO urgently</strong>: 140 mg/kg loading, then 70 mg/kg q6h × 7 doses</li>
          <li>SAMe 20 mg/kg q24h</li>
          <li>Methylene blue (controversial — methemoglobinemia)</li>
          <li>Cimetidine (CYP450 inhibition)</li>
          <li>Supportive: O2, fluids, transfusion if severe methemoglobinemia</li>
          <li>Cat: extremely sensitive (lack glucuronyl transferase) · even 1 dose fatal</li>
        </ul>

        <p><strong>Xylitol toxicity (dog):</strong></p>
        <ul>
          <li>Hypoglycemia within 30-60 min — give dextrose</li>
          <li>Hepatic necrosis 12-72 hr later</li>
          <li>NAC, SAMe, hepatoprotectants</li>
          <li>FFP if coagulopathic</li>
          <li>Monitor BG, ALT, coag, glucose × days</li>
        </ul>

        <p><strong>Hepatic encephalopathy management:</strong></p>
        <ul>
          <li>⭐ <strong>Lactulose</strong>: 0.5-1 mL/kg PO q6-8h
            <ul>
              <li>↓ Colonic pH → traps NH3 as NH4+</li>
              <li>Cathartic (clears gut bacteria)</li>
              <li>Titrate to 2-3 soft stools/day</li>
              <li>Severe: lactulose enema</li>
            </ul>
          </li>
          <li><strong>Antibiotics</strong>:
            <ul>
              <li>Metronidazole 7.5-10 mg/kg q12h (low dose, ↓ neurotoxicity risk)</li>
              <li>Neomycin (less used, AKI risk)</li>
              <li>Rifaximin (newer, expensive)</li>
            </ul>
          </li>
          <li><strong>Diet</strong>: low protein (modest), high quality (egg, dairy preferred)</li>
          <li><strong>Avoid GI bleeding</strong> (massive protein load)</li>
          <li><strong>Sedation if needed</strong>: avoid hepatic-metabolized (no ace, careful with benzo)</li>
          <li><strong>Crisis</strong>: warm water enema + lactulose enema, IV fluids</li>
        </ul>

        <p><strong>PSS treatment:</strong></p>
        <ul>
          <li><strong>Medical (always start with this)</strong>:
            <ul>
              <li>Lactulose, antibiotics</li>
              <li>Renal/hepatic diet (low protein, high quality)</li>
              <li>Stabilize HE, infection</li>
            </ul>
          </li>
          <li><strong>Surgical</strong>:
            <ul>
              <li>Extrahepatic: ameroid constrictor, cellophane band, ligation</li>
              <li>Intrahepatic: more difficult, may need interventional radiology coil embolization</li>
              <li>Better long-term outcome than medical alone</li>
              <li>Risks: portal hypertension, ascites, multiple acquired shunts, HE</li>
            </ul>
          </li>
        </ul>

        <p><strong>Hepatic lipidosis (cat):</strong></p>
        <ul>
          <li>⭐ <strong>FEEDING IS CRITICAL</strong> — must provide nutrition!</li>
          <li>⭐ <strong>Esophagostomy or PEG tube</strong> placed early</li>
          <li>High-protein diet (60-80 kcal/kg/day)</li>
          <li>L-carnitine, taurine, B12 supplementation</li>
          <li>Anti-emetic (maropitant)</li>
          <li>Treat underlying cause (pancreatitis, IBD, etc.)</li>
          <li>Supportive: fluids, electrolytes (K, P)</li>
          <li>SAMe, vit E</li>
          <li>Recovery: weeks-months · 60-80% survival with aggressive treatment</li>
          <li>⚠️ Force-feeding by mouth = bad (food aversion + slow)</li>
        </ul>

        <p><strong>Chronic hepatitis (dog):</strong></p>
        <ul>
          <li>Identify + remove trigger (drug withdrawal, antibiotic for infection)</li>
          <li><strong>Copper-storage disease</strong>:
            <ul>
              <li>D-penicillamine 10-15 mg/kg q12h × months (chelation)</li>
              <li>Zinc acetate (long-term, ↓ Cu absorption)</li>
              <li>Low-copper diet</li>
            </ul>
          </li>
          <li>Hepatoprotectants: SAMe, silybin, vit E</li>
          <li>Ursodiol</li>
          <li>Steroids: only after immune-mediated confirmed (biopsy)</li>
          <li>Dietary management: moderate protein (high quality), low Cu</li>
        </ul>

        <p><strong>Cholangitis/cholangiohepatitis (cat):</strong></p>
        <ul>
          <li>Antibiotics (based on bile culture): amoxicillin, cefovecin</li>
          <li>Ursodiol</li>
          <li>SAMe, vit E</li>
          <li>Treat concurrent IBD, pancreatitis (triaditis)</li>
          <li>Lymphocytic form: may need immunosuppression</li>
        </ul>

        <p><strong>Coagulopathy:</strong></p>
        <ul>
          <li>Vit K1: 5 mg/kg SC initially</li>
          <li>FFP for active bleeding (10-15 mL/kg)</li>
          <li>Avoid IM injections, jugular venipuncture</li>
        </ul>

        <p><strong>Ascites (refractory):</strong></p>
        <ul>
          <li>Spironolactone (anti-aldosterone)</li>
          <li>Furosemide (cautious — can worsen HE, electrolytes)</li>
          <li>Dietary Na restriction</li>
          <li>Therapeutic abdominocentesis if respiratory compromise</li>
          <li>Treat underlying portal hypertension</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hepatic encephalopathy</strong> — major cause of mortality</li>
          <li><strong>Coagulopathy</strong> → spontaneous bleeding</li>
          <li><strong>Ascites</strong> → respiratory compromise</li>
          <li><strong>Portal hypertension</strong> → varices, GI bleed</li>
          <li><strong>SBP (spontaneous bacterial peritonitis)</strong> → ascites infection</li>
          <li><strong>Hepatorenal syndrome</strong> → AKI from severe liver dz</li>
          <li><strong>Hypoglycemia</strong> → seizures, coma</li>
          <li><strong>Vit K-dependent coagulopathy</strong> (cholestasis)</li>
          <li><strong>Sepsis</strong> (immune dysfunction)</li>
          <li><strong>HCC (hepatocellular carcinoma)</strong> — chronic hepatitis risk</li>
          <li><strong>Drug accumulation</strong> (impaired metabolism)</li>
          <li><strong>Death</strong> from acute fulminant or chronic end-stage</li>
        </ul>

        <p><strong>Treatment complications:</strong></p>
        <ul>
          <li>Lactulose: dehydration if too much</li>
          <li>D-penicillamine: GI signs, immune reactions, proteinuria</li>
          <li>Steroids in undiagnosed disease: worsen infection, lipidosis</li>
          <li>Surgery for PSS: acute portal HT post-ligation</li>
          <li>Feeding tube complications (infection, displacement)</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li><strong>Acute toxin (treated early)</strong>:
            <ul>
              <li>Xylitol with prompt Rx: good if no liver failure</li>
              <li>Acetaminophen cat: guarded even with NAC</li>
              <li>Sago palm: very poor</li>
            </ul>
          </li>
          <li><strong>Hepatic lipidosis</strong>: ⭐ 60-80% survival with aggressive feeding</li>
          <li><strong>PSS surgical</strong>: 80% good outcome (extrahepatic)</li>
          <li><strong>PSS medical only</strong>: median 1-3 years</li>
          <li><strong>Cholangitis (cat)</strong>: variable, often chronic</li>
          <li><strong>Chronic hepatitis dog</strong>: variable, copper-storage manageable</li>
          <li><strong>Cirrhosis</strong>: poor (months)</li>
          <li><strong>HCC</strong>: surgical resection if localized = good</li>
          <li><strong>Lymphoma metastasis</strong>: poor without chemo</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Avoid hepatotoxins (xylitol, acetaminophen for cat, NSAIDs)</li>
          <li>Lepto vaccine (endemic areas)</li>
          <li>Don't let cat go anorexic (force eat for 2-3 days = lipidosis trigger)</li>
          <li>Genetic screening (Bedlington for copper)</li>
          <li>Routine bloodwork in older dogs (early ALT detection)</li>
          <li>Limit drugs metabolized by liver in chronic hepatic disease</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-reproductive',
    titleEn: 'Reproductive Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบสืบพันธุ์',
    type: 'topic',
    system: 'reprod',
    species: ['dog', 'cat'],
    tags: ['pyometra', 'dystocia', 'estrus', 'pregnancy', 'BPH', 'mammary tumor', 'cryptorchid'],
    aliases: ['reproductive disease', 'สืบพันธุ์'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Reproductive system overview:</strong></p>
        <ul>
          <li>Female: ovaries, uterus, vagina, mammary glands</li>
          <li>Male: testicles, prostate, penis</li>
          <li>Hormonal control: HPG axis (Hypothalamus-Pituitary-Gonad)</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Estrus Cycle — Dog vs Cat</span>
          <table>
            <tr><th>Feature</th><th>Dog (bitch)</th><th>Cat (queen)</th></tr>
            <tr><td><strong>Cycle type</strong></td><td>Monoestrus (1 cycle/season)</td><td>⭐ Polyestrus seasonal · induced ovulation</td></tr>
            <tr><td><strong>First estrus</strong></td><td>6-24 months</td><td>4-12 months</td></tr>
            <tr><td><strong>Cycle interval</strong></td><td>5-12 months (avg 7)</td><td>2-3 weeks during season</td></tr>
            <tr><td><strong>Proestrus</strong></td><td>9 days (5-20)</td><td>1-2 days</td></tr>
            <tr><td><strong>Estrus</strong></td><td>9 days (5-20) — receptive</td><td>5-7 days</td></tr>
            <tr><td><strong>Diestrus</strong></td><td>2 months (whether bred or not)</td><td>~14 days if not bred</td></tr>
            <tr><td><strong>Anestrus</strong></td><td>4-5 months</td><td>Varies (seasonal)</td></tr>
            <tr><td><strong>Ovulation</strong></td><td>Spontaneous (LH surge)</td><td>⭐ Induced by mating</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Cat: queen needs to be bred to ovulate (cervix stimulates LH surge)<br>
          📌 ⭐ Dog: long diestrus = pseudo-pregnancy = pyometra risk window</p>
        </div>
      `,
      etiology: `
        <p><strong>Female reproductive disorders:</strong></p>

        <p><strong>Pyometra:</strong></p>
        <ul>
          <li>⭐ Most common reproductive emergency in intact bitch/queen</li>
          <li>Pathogen: ⭐ <strong>E. coli (most common)</strong>, also Strep, Staph, Klebsiella</li>
          <li>Hormonal trigger: ⭐ <strong>progesterone (diestrus)</strong> → cystic endometrial hyperplasia (CEH) → secondary infection</li>
          <li>Open vs closed pyometra (cervix dilated or not)</li>
          <li>Predisposing: nulliparous older female, exogenous estrogens/progestins (mismating shots)</li>
          <li>"Stump pyometra" — incomplete ovariohysterectomy</li>
        </ul>

        <p><strong>Dystocia causes:</strong></p>
        <ul>
          <li>⭐ <strong>Maternal</strong>:
            <ul>
              <li>Primary uterine inertia (no contractions — most common)</li>
              <li>Secondary inertia (exhausted contractions)</li>
              <li>Pelvic abnormality (BCS &gt; 4/5, pelvic fracture)</li>
              <li>Brachycephalic breeds (mechanical mismatch)</li>
              <li>Hypocalcemia, hypoglycemia</li>
            </ul>
          </li>
          <li><strong>Fetal</strong>:
            <ul>
              <li>Fetal-pelvic mismatch (oversized fetus, single pup)</li>
              <li>Malposition / malpresentation</li>
              <li>Fetal death + emphysema</li>
            </ul>
          </li>
        </ul>

        <p><strong>Mammary tumors:</strong></p>
        <ul>
          <li><strong>Dog</strong>: 50% malignant
            <ul>
              <li>Risk factor: intact &gt; spayed</li>
              <li>⭐ Spay before 1st heat: 0.5% risk</li>
              <li>Spay after 1st heat: 8% risk</li>
              <li>Spay after 2nd heat: 26% risk</li>
              <li>After 2.5 years: little protective effect</li>
              <li>Predisposed: Poodle, Cocker, Yorkie, Maltese, Dachshund</li>
            </ul>
          </li>
          <li><strong>⭐ Cat</strong>: 80-90% malignant!
            <ul>
              <li>Spay before 6 months: 91% risk reduction</li>
              <li>Spay at 6-12 months: 86% reduction</li>
              <li>Spay at 13-24 months: 11% reduction</li>
              <li>After 2 years: little effect</li>
              <li>⭐ Aggressive · early metastasis · poor prognosis if &gt; 3 cm</li>
            </ul>
          </li>
        </ul>

        <p><strong>Other female disorders:</strong></p>
        <ul>
          <li>Mastitis (lactating)</li>
          <li>Vaginal hyperplasia / prolapse (proestrus, Boxer, Bulldog)</li>
          <li>Uterine torsion (rare)</li>
          <li>Infertility (variable causes)</li>
          <li>Prolonged estrus (granulosa cell tumor — rare)</li>
        </ul>

        <p><strong>Male reproductive disorders:</strong></p>

        <p><strong>BPH (Benign Prostatic Hyperplasia):</strong></p>
        <ul>
          <li>⭐ &gt; 80% of intact dogs &gt; 5 years</li>
          <li>DHT-driven hyperplasia</li>
          <li>Often subclinical</li>
          <li>May cause: hematuria, dyschezia, intermittent dripping bloody fluid</li>
        </ul>

        <p><strong>Prostatitis:</strong></p>
        <ul>
          <li>Acute or chronic bacterial infection</li>
          <li>Pathogens: E. coli (most), Staph, Strep, Mycoplasma</li>
          <li>Often secondary to BPH (ascending UTI)</li>
          <li>Acute: febrile, severely painful</li>
          <li>Chronic: recurrent UTI, dysuria, blood-tinged ejaculate</li>
        </ul>

        <p><strong>Prostatic neoplasia:</strong></p>
        <ul>
          <li>Adenocarcinoma most common</li>
          <li>⭐ <strong>NOT prevented by neutering</strong> — possibly INCREASED risk</li>
          <li>Older dogs, often metastatic at diagnosis</li>
          <li>Progressive dysuria, weight loss, lameness (LN/bone mets)</li>
        </ul>

        <p><strong>Cryptorchidism:</strong></p>
        <ul>
          <li>Failure of testicular descent (one or both)</li>
          <li>Should descend by 2 months (definite by 6 months)</li>
          <li>⭐ <strong>10× increased risk of testicular tumor</strong> (Sertoli, seminoma)</li>
          <li>Hereditary — neutering recommended (don't breed)</li>
          <li>Predisposed: small/toy breeds, Boxer, Pekingese, Pug</li>
        </ul>

        <p><strong>Testicular tumors:</strong></p>
        <ul>
          <li>Sertoli cell tumor — ⭐ <strong>estrogen-secreting</strong> → feminization syndrome</li>
          <li>Seminoma</li>
          <li>Interstitial (Leydig) cell tumor</li>
          <li>Mostly intact older dogs</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Pyometra pathophysiology — "CEH-pyometra complex":</strong></p>
        <ol>
          <li>Repeated estrus cycles → progesterone exposure</li>
          <li>Progesterone → cystic endometrial hyperplasia (CEH)</li>
          <li>Cervical closure (mid-late diestrus)</li>
          <li>Bacterial colonization (often E. coli from vagina)</li>
          <li>Pus accumulation in uterus</li>
          <li>Bacterial endotoxins (LPS) → systemic effects</li>
          <li>SIRS, sepsis, AKI, septic shock if untreated</li>
          <li>Closed pyometra: more dangerous (no drainage)</li>
          <li>Open pyometra: vaginal discharge present</li>
        </ol>

        <p><strong>Pyometra systemic effects:</strong></p>
        <ul>
          <li>Endotoxemia → fever, depression</li>
          <li>↑ WBC (mature neutrophilia + left shift)</li>
          <li>Hyperglobulinemia (chronic inflammation)</li>
          <li>Hypoalbuminemia</li>
          <li>Renal: PU/PD (E. coli endotoxin antagonizes ADH at renal tubule), pre-renal azotemia, GN</li>
          <li>Liver: ↑ ALP, mild ALT</li>
          <li>Hematology: anemia (ACD)</li>
        </ul>

        <p><strong>Normal parturition (whelping/queening):</strong></p>
        <ol>
          <li><strong>Stage 1</strong>: cervical dilation, restlessness, nesting (6-12 hr)</li>
          <li><strong>Stage 2</strong>: active labor, pups expelled (4-24 hr depending on litter size)</li>
          <li><strong>Stage 3</strong>: placenta expelled (immediately after each pup)</li>
          <li>Normal: progesterone drops &lt; 2 ng/mL = within 24-48 hr of whelping</li>
          <li>Normal temp drop ~1°C 12-24 hr before stage 2</li>
        </ol>

        <p><strong>Dystocia warning signs (when to intervene):</strong></p>
        <ul>
          <li>Strong contractions &gt; 30 min without producing pup</li>
          <li>Weak/intermittent contractions &gt; 4 hr without pup</li>
          <li>&gt; 2 hr between pups (with more in)</li>
          <li>Greenish discharge before 1st pup (placental detachment)</li>
          <li>Bloody discharge &gt; 30-60 min</li>
          <li>Sick mother (pain, lethargy, fever)</li>
          <li>Pup visible at vulva &gt; 15 min</li>
          <li>Gestation length:
            <ul>
              <li>Dog: 60-65 days from breeding</li>
              <li>Cat: 64-66 days</li>
              <li>Overdue = beyond 70 days = concerning</li>
            </ul>
          </li>
        </ul>

        <p><strong>Eclampsia (puerperal tetany / hypocalcemia):</strong></p>
        <ol>
          <li>Lactating bitch (often small breed, large litter)</li>
          <li>Calcium loss to milk exceeds intake/mobilization</li>
          <li>Severe ionized hypocalcemia</li>
          <li>Tetany: panting, restlessness → tremors → tonic-clonic seizures → hyperthermia</li>
          <li>2-4 weeks post-whelping classic</li>
          <li>⚠️ Emergency: Ca gluconate IV slow + ECG monitoring</li>
        </ol>

        <p><strong>BPH pathophysiology:</strong></p>
        <ol>
          <li>Long-term DHT exposure (5α-reductase converts T → DHT)</li>
          <li>Glandular hyperplasia + hypertrophy</li>
          <li>Cystic changes</li>
          <li>Symmetric prostatic enlargement</li>
          <li>Often subclinical · sometimes hematuria, tenesmus, ribbon stool</li>
        </ol>

        <p><strong>Prostatitis pathophysiology:</strong></p>
        <ol>
          <li>Ascending UTI common</li>
          <li>Bacteria colonize prostatic tissue (BPH = ↑ susceptibility)</li>
          <li>Acute: severe inflammation, abscess possible</li>
          <li>Chronic: recurrent infection, fibrosis</li>
          <li>Blood-prostate barrier limits drug penetration</li>
          <li>Need lipophilic, basic antibiotics</li>
        </ol>

        <p><strong>Sertoli cell tumor feminization:</strong></p>
        <ol>
          <li>Tumor secretes estrogen</li>
          <li>Symmetric alopecia, gynecomastia, pendulous prepuce</li>
          <li>Attracted by other males</li>
          <li>⚠️ <strong>Estrogen-induced bone marrow toxicity</strong>:
            <ul>
              <li>Aplastic anemia, thrombocytopenia, neutropenia</li>
              <li>Pancytopenia → bleeding, infection, death</li>
              <li>Often irreversible</li>
            </ul>
          </li>
          <li>Cryptorchid testicle = much higher risk</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Pyometra signs:</strong></p>
        <ul>
          <li>⭐ <strong>Open pyometra</strong>: purulent/bloody vaginal discharge + systemic illness</li>
          <li>⭐ <strong>Closed pyometra</strong>: no discharge, more severely ill (sepsis, shock)</li>
          <li>⭐ <strong>"Bitch in diestrus + sick" = pyometra until proven otherwise</strong></li>
          <li>Lethargy, anorexia, vomiting</li>
          <li>⭐ PU/PD (very common, classic)</li>
          <li>Fever or hypothermia (sepsis)</li>
          <li>Abdominal distension/pain (uterus large)</li>
          <li>Septic shock if severe</li>
          <li>Timing: usually 4-8 weeks after estrus</li>
        </ul>

        <p><strong>Mastitis signs:</strong></p>
        <ul>
          <li>Lactating, swollen + painful gland(s)</li>
          <li>Reddened, warm, hard</li>
          <li>Discharge: purulent, may have blood</li>
          <li>Fever, lethargy</li>
          <li>Pups may not nurse from affected gland</li>
          <li>Severe: gangrenous mastitis (black skin, sepsis)</li>
        </ul>

        <p><strong>Vaginal hyperplasia/prolapse:</strong></p>
        <ul>
          <li>During proestrus/early estrus</li>
          <li>Pink swollen tissue protruding from vulva</li>
          <li>Prolapse: hemorrhagic, ulcerated, exposed</li>
          <li>Common: Boxer, Bulldog, Mastiff</li>
        </ul>

        <p><strong>Mammary tumors:</strong></p>
        <ul>
          <li>Mass in mammary gland (palpate ALL glands)</li>
          <li>Fixed = more concerning</li>
          <li>Skin involvement (ulceration) = malignancy</li>
          <li>Inflammatory mammary CA: warm, red, painful → terminal</li>
          <li>Cat: usually multiple masses, aggressive</li>
        </ul>

        <p><strong>BPH signs:</strong></p>
        <ul>
          <li>Often subclinical</li>
          <li>Hematuria (especially mid-stream or end)</li>
          <li>Bloody fluid drip from prepuce (independent of urination)</li>
          <li>Dyschezia, tenesmus</li>
          <li>Ribbon-shaped stool (compression)</li>
          <li>Older intact male</li>
        </ul>

        <p><strong>Prostatitis (acute) signs:</strong></p>
        <ul>
          <li>⚠️ Severely painful — caudal abdomen, perineum</li>
          <li>Fever, lethargy, anorexia</li>
          <li>Stranguria, dysuria, hematuria</li>
          <li>Stiff gait (painful)</li>
          <li>Constipation (avoiding defecation due to pain)</li>
          <li>Sepsis (severe)</li>
        </ul>

        <p><strong>Prostatic neoplasia signs:</strong></p>
        <ul>
          <li>Older dog (often neutered)</li>
          <li>Progressive dysuria, hematuria</li>
          <li>Tenesmus</li>
          <li>Lameness (sublumbar LN, bone mets)</li>
          <li>Weight loss</li>
          <li>Asymmetric, irregular prostate on rectal palpation</li>
        </ul>

        <p><strong>Cryptorchidism + Sertoli tumor:</strong></p>
        <ul>
          <li>Symmetric alopecia (truncal, "rear-end")</li>
          <li>Gynecomastia, pendulous prepuce</li>
          <li>Attracted by other males</li>
          <li>Linear preputial skin discoloration</li>
          <li>⚠️ Pancytopenia signs: bruising, pale, infection, lethargy</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Pyometra diagnosis:</strong></p>
        <ul>
          <li><strong>Signalment + history</strong>: intact female, recent estrus (4-8 weeks)</li>
          <li><strong>PE</strong>: vaginal discharge (open), abdominal distension, sepsis signs</li>
          <li><strong>CBC</strong>: ⭐ neutrophilia + left shift (often degenerative), hyperfibrinogenemia</li>
          <li><strong>Chemistry</strong>: hyperglobulinemia, hypoalbuminemia, ↑ ALP, azotemia</li>
          <li><strong>UA</strong>: dilute (PU/PD), proteinuria (GN)</li>
          <li><strong>⭐ Ultrasound</strong>: enlarged tubular fluid-filled uterus = diagnostic
            <ul>
              <li>Differentiate from pregnancy (no fetal structures)</li>
              <li>Hydrometra/mucometra (sterile fluid — less ill)</li>
            </ul>
          </li>
          <li><strong>Vaginal cytology</strong>: degenerate neutrophils + bacteria (open)</li>
          <li><strong>Culture/sensitivity</strong>: discharge or surgical sample</li>
        </ul>

        <p><strong>Dystocia diagnosis:</strong></p>
        <ul>
          <li>History: gestation timing, recent contractions/discharge</li>
          <li>Vaginal exam: pup palpable? size? presentation?</li>
          <li><strong>Radiographs</strong>: pup count, fetal-pelvic mismatch</li>
          <li><strong>Ultrasound</strong>: ⭐ <strong>fetal heart rate</strong> (normal: &gt; 180 bpm · &lt; 160 = fetal distress · &lt; 130 = severe)</li>
          <li>Maternal: ionized Ca, BG, electrolytes</li>
        </ul>

        <p><strong>Mammary tumor workup:</strong></p>
        <ul>
          <li>FNA primary mass + regional LN</li>
          <li>3-view chest XR (metastasis screen)</li>
          <li>AUS (abdominal mets)</li>
          <li>Excisional biopsy = definitive (regional or chain mastectomy)</li>
          <li>Cat: more aggressive staging warranted</li>
        </ul>

        <p><strong>BPH/prostatitis workup:</strong></p>
        <ul>
          <li>Rectal palpation: size, symmetry, pain, texture</li>
          <li>UA + culture (urethral catch + cystocentesis)</li>
          <li>Prostatic wash (after voiding empty bladder, then collect)</li>
          <li>Prostatic FNA (US-guided · ⚠️ avoid in acute prostatitis — abscess)</li>
          <li>Ultrasound: size, parenchyma, abscess, mass</li>
          <li>Brucella canis screening (if breeding, repro signs)</li>
        </ul>

        <p><strong>Sertoli cell tumor:</strong></p>
        <ul>
          <li>Cryptorchid (intact or "neutered" with retained?)</li>
          <li>Asymmetric testicles, mass</li>
          <li>CBC: pancytopenia (BM toxicity)</li>
          <li>Hormone testing: estrogen levels (variable)</li>
          <li>FNA / histology post-surgical</li>
        </ul>
      `,
      treatment: `
        <p><strong>Pyometra treatment:</strong></p>
        <ul>
          <li><strong>⭐ Surgery (OHE)</strong>: gold standard
            <ul>
              <li>Pre-op: stabilize with IV fluids, antibiotics, electrolytes</li>
              <li>Antibiotics: amox-clav, fluoroquinolone</li>
              <li>Surgery: careful, avoid spilling pus</li>
              <li>Post-op: continue antibiotics 7-14 days</li>
            </ul>
          </li>
          <li><strong>Medical management</strong> (selected cases — open pyometra, breeding bitch, surgical risk):
            <ul>
              <li>⭐ Aglepristone (progesterone receptor antagonist) 10 mg/kg SC day 1, 2, 7, 8</li>
              <li>+ Cloprostenol (PGF2α) — uterine evacuation</li>
              <li>+ Antibiotics</li>
              <li>Recurrence: 70-80% in next cycle</li>
              <li>NOT for closed pyometra or sick patients</li>
            </ul>
          </li>
        </ul>

        <p><strong>Dystocia management:</strong></p>
        <ul>
          <li><strong>Medical (uterine inertia)</strong>:
            <ul>
              <li>Calcium gluconate 10% 0.5-1.5 mL/kg slow IV</li>
              <li>+ Oxytocin 0.5-2 U/kg IM (low dose, repeat q30 min × 3)</li>
              <li>+ Dextrose if hypoglycemic</li>
              <li>If no progress after 2-3 doses → C-section</li>
            </ul>
          </li>
          <li><strong>Surgery (C-section)</strong>:
            <ul>
              <li>Indications: obstructive, no response to medical, fetal distress, primary inertia unresponsive</li>
              <li>Anesthesia: avoid alpha-2 (xylazine, dexmedetomidine), avoid acepromazine</li>
              <li>Preferred: propofol induction, isoflurane maintenance, careful opioid</li>
              <li>Time-sensitive · pups suffer with prolonged dystocia</li>
            </ul>
          </li>
          <li><strong>Pup resuscitation</strong>:
            <ul>
              <li>Clear airway (suction)</li>
              <li>Stimulate, dry, warm</li>
              <li>Doxapram for respiration (controversial)</li>
              <li>O2 if available</li>
              <li>Monitor for 24h</li>
            </ul>
          </li>
        </ul>

        <p><strong>Eclampsia treatment:</strong></p>
        <ol>
          <li>Calcium gluconate 10% — 0.5-1.5 mL/kg slow IV (over 10-20 min, ECG monitor)</li>
          <li>Stop seizures</li>
          <li>Wean pups (or supplement) — remove demand</li>
          <li>Oral Ca supplementation chronic</li>
          <li>Avoid Ca supplements during pregnancy (suppresses parathyroid)</li>
        </ol>

        <p><strong>Mammary tumor:</strong></p>
        <ul>
          <li><strong>Surgery</strong>: gold standard
            <ul>
              <li>Dog: lumpectomy (small) or regional/chain mastectomy</li>
              <li>Cat: ⭐ aggressive bilateral chain mastectomy (often)</li>
              <li>Concurrent OHE if intact (decreases hormone-driven recurrence in dog · debated)</li>
            </ul>
          </li>
          <li><strong>Adjuvant chemotherapy</strong>: high-grade or metastatic
            <ul>
              <li>Doxorubicin-based (especially cat)</li>
              <li>Carboplatin</li>
            </ul>
          </li>
          <li><strong>Inflammatory mammary CA</strong>: very poor px, palliative only</li>
        </ul>

        <p><strong>BPH treatment:</strong></p>
        <ul>
          <li>⭐ <strong>Castration</strong>: definitive · prostate shrinks 70% within months</li>
          <li>If breeding intact dog:
            <ul>
              <li>Finasteride 0.1-0.5 mg/kg q24h (5α-reductase inhibitor)</li>
              <li>Osaterone (Ypozane) — antiandrogen</li>
            </ul>
          </li>
        </ul>

        <p><strong>Prostatitis (acute):</strong></p>
        <ul>
          <li>Hospitalize, IV fluids if septic</li>
          <li>⭐ Lipophilic antibiotics (penetrate prostate):
            <ul>
              <li>Fluoroquinolones (enrofloxacin, marbofloxacin)</li>
              <li>TMS (trimethoprim-sulfa)</li>
              <li>Chloramphenicol</li>
            </ul>
          </li>
          <li>Acute: 4-6 weeks treatment</li>
          <li>Chronic: 6-8 weeks · culture-directed</li>
          <li>Castration recommended (prevent recurrence)</li>
          <li>Abscess: drainage (US-guided or surgical)</li>
        </ul>

        <p><strong>Prostatic neoplasia:</strong></p>
        <ul>
          <li>Often advanced at diagnosis</li>
          <li>Piroxicam (anti-tumor effect)</li>
          <li>Mitoxantrone, vinblastine</li>
          <li>Radiation therapy</li>
          <li>Subtotal prostatectomy (rare, complications)</li>
          <li>Palliative: pain management, urinary catheter if obstructed</li>
          <li>Median survival: 3-6 months</li>
        </ul>

        <p><strong>Cryptorchidism + testicular tumor:</strong></p>
        <ul>
          <li>⭐ <strong>Bilateral castration</strong> (remove all testicular tissue)</li>
          <li>Search for retained testicle thoroughly (abdomen, inguinal canal)</li>
          <li>If Sertoli tumor with pancytopenia:
            <ul>
              <li>Remove tumor (may not reverse if BM destroyed)</li>
              <li>Supportive care: blood products, antibiotics, EPO</li>
              <li>Guarded prognosis with severe pancytopenia</li>
            </ul>
          </li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Pyometra</strong>:
            <ul>
              <li>Sepsis, septic shock, MOF</li>
              <li>Uterine rupture (peritonitis)</li>
              <li>AKI from endotoxemia</li>
              <li>Death (5-20% mortality with surgery, &gt; 60% without)</li>
              <li>Stump pyometra if incomplete OHE</li>
            </ul>
          </li>
          <li><strong>Dystocia</strong>:
            <ul>
              <li>Fetal death</li>
              <li>Maternal exhaustion, uterine rupture</li>
              <li>Retained fetus → metritis, sepsis</li>
              <li>Mismothering, neonatal hypothermia/hypoglycemia post-C-section</li>
            </ul>
          </li>
          <li><strong>Mammary tumor</strong>:
            <ul>
              <li>Metastasis (lung most common)</li>
              <li>Local recurrence</li>
              <li>Inflammatory MC — uniformly fatal</li>
            </ul>
          </li>
          <li><strong>Prostatic disease</strong>:
            <ul>
              <li>Abscess (surgical drainage required)</li>
              <li>Sepsis from acute prostatitis</li>
              <li>Recurrent UTI (chronic)</li>
              <li>Prostatic neoplasia: poor prognosis</li>
            </ul>
          </li>
          <li><strong>Sertoli tumor</strong>:
            <ul>
              <li>Aplastic anemia (often irreversible)</li>
              <li>Bleeding, sepsis from BM failure</li>
            </ul>
          </li>
        </ul>

        <p><strong>Treatment complications:</strong></p>
        <ul>
          <li>OHE/castration: standard surgical risks</li>
          <li>C-section: anesthesia risk for dam + pups</li>
          <li>Estrogen-induced effects (Mismate shots) — pyometra trigger</li>
          <li>Aglepristone: minor side effects, but recurrence high</li>
          <li>Fluoroquinolone: cartilage effects in young (avoid in growing dog)</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>⭐ <strong>Spaying intact females</strong>:
            <ul>
              <li>Prevents pyometra (essentially)</li>
              <li>Mammary tumor prevention if early (timing matters)</li>
              <li>No more dystocia</li>
            </ul>
          </li>
          <li><strong>Neutering males</strong>:
            <ul>
              <li>Prevents BPH, testicular tumor</li>
              <li>Prevents prostatitis (mostly)</li>
              <li>Doesn't prevent prostatic adenocarcinoma</li>
              <li>⚠️ Some health concerns with early neuter (orthopedic, certain cancers in some breeds — discuss timing)</li>
            </ul>
          </li>
          <li><strong>Cryptorchid dogs</strong>: do NOT breed (heritable) · neuter</li>
          <li><strong>Avoid mismating shots</strong> (estrogen, progestin) — pyometra risk</li>
          <li><strong>Educate breeders</strong>: gestation timing, signs of dystocia, when to call vet</li>
          <li><strong>Routine reproductive exams</strong> in breeding stock</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Pyometra surgical: 80-95% if not septic shock</li>
          <li>Pyometra medical: 70-80% remission, 70% recur</li>
          <li>Dystocia: variable (depends on cause + timing)</li>
          <li>Mammary tumor dog: variable by stage/grade · &lt; 3 cm = good</li>
          <li>Mammary tumor cat: ⭐ poor if &gt; 3 cm or LN+ (median 4-12 months)</li>
          <li>BPH: excellent with castration</li>
          <li>Prostatitis acute: good with treatment</li>
          <li>Prostatic neoplasia: poor (median 3-6 months)</li>
          <li>Sertoli tumor + pancytopenia: poor</li>
        </ul>
      `,
    },
  },

  /* ============================================================
     Phase 5 — Special Topics
     ============================================================ */

  {
    id: 'path-neurologic',
    titleEn: 'Neurologic Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบประสาท',
    type: 'topic',
    system: 'neuro',
    species: ['dog', 'cat'],
    tags: ['seizure', 'IVDD', 'vestibular', 'epilepsy', 'GME', 'paralysis', 'ICP', 'neuroanatomy'],
    aliases: ['neurologic disease', 'neurology', 'ระบบประสาท'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>CNS basics:</strong></p>
        <ul>
          <li><strong>CNS</strong>: brain + spinal cord (protected by BBB, skull, vertebrae)</li>
          <li><strong>PNS</strong>: peripheral nerves, NMJ, muscles</li>
          <li>⭐ Neurons = <strong>permanent cells</strong> — no/limited regeneration</li>
          <li>Highly metabolic: depends on continuous O2 + glucose supply</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">5 Neuroanatomic Localizations</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">FB</span>
              <span class="num-label">Forebrain (cerebrum, thalamus)</span>
            </div>
            <div class="num-card">
              <span class="num-big">BS</span>
              <span class="num-label">Brainstem (midbrain, pons, medulla)</span>
            </div>
            <div class="num-card">
              <span class="num-big">CB</span>
              <span class="num-label">Cerebellum</span>
            </div>
            <div class="num-card">
              <span class="num-big">SC</span>
              <span class="num-label">Spinal cord (5 regions)</span>
            </div>
          </div>
          <p class="mnem-tip">📌 + 5: Peripheral (NMJ, nerves, muscle) — LMN signs<br>
          📌 ⭐ Localization comes BEFORE differential diagnosis</p>
        </div>

        <p><strong>Spinal cord regions:</strong></p>
        <ul>
          <li><strong>C1-C5</strong>: tetraplegia, all limbs UMN</li>
          <li><strong>C6-T2</strong>: tetraplegia · ⭐ <strong>FL = LMN, HL = UMN</strong> (cervicothoracic intumescence)</li>
          <li><strong>T3-L3</strong>: ⭐ <strong>FL normal, HL = UMN</strong> (most common IVDD location)</li>
          <li><strong>L4-S2</strong>: ⭐ <strong>FL normal, HL = LMN</strong> (lumbar intumescence)</li>
          <li><strong>S1-Cd</strong>: tail, urinary, fecal continence</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">UMN vs LMN Signs</span>
          <table>
            <tr><th>Feature</th><th>UMN</th><th>LMN</th></tr>
            <tr><td><strong>Reflexes</strong></td><td>↑ Hyperreflexia</td><td>↓ Hyporeflexia/absent</td></tr>
            <tr><td><strong>Tone</strong></td><td>↑ Spasticity</td><td>↓ Flaccid</td></tr>
            <tr><td><strong>Atrophy</strong></td><td>Late, mild (disuse)</td><td>⭐ Early, severe</td></tr>
            <tr><td><strong>Bladder</strong></td><td>Distended, hard to express</td><td>Easily expressed, dribbling</td></tr>
            <tr><td><strong>Lesion</strong></td><td>Above intumescence</td><td>At/below intumescence</td></tr>
          </table>
        </div>
      `,
      etiology: `
        <p><strong>Neurologic disease causes — "VITAMIN D":</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Neuro Differentials — "VITAMIN D"</span>
          <ul>
            <li><strong>V</strong>ascular — stroke (FCE most common in dog), thromboembolism</li>
            <li><strong>I</strong>nfectious/Inflammatory — meningitis, GME, MUE, distemper, toxoplasma, FIP</li>
            <li><strong>T</strong>oxic — metaldehyde, organophosphate, lead, ethylene glycol, marijuana, mycotoxin</li>
            <li><strong>A</strong>nomalous (congenital) — hydrocephalus, syringomyelia (CKCS), Chiari-like, atlantoaxial subluxation</li>
            <li><strong>M</strong>etabolic — hypoglycemia, HE, uremia, electrolyte (Na, Ca), thiamine def</li>
            <li><strong>I</strong>diopathic — idiopathic epilepsy (most seizures in young-mid dog), idiopathic vestibular (old dog)</li>
            <li><strong>N</strong>eoplasia — meningioma (cat), glioma, lymphoma, metastasis</li>
            <li><strong>D</strong>egenerative — DM (degenerative myelopathy), CCD (cognitive dysfunction)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Use "VITAMIN D" to systematically differential any neuro case<br>
          📌 Add: Trauma (HBC, fall, bite, gunshot) — sometimes "VITAMIN-D-T"</p>
        </div>

        <p><strong>Seizure causes by age:</strong></p>
        <ul>
          <li><strong>Young (&lt; 1 year)</strong>: congenital (hydrocephalus, lissencephaly), hypoglycemia, distemper, toxin</li>
          <li><strong>Young-mid (1-6 years)</strong>: ⭐ <strong>idiopathic epilepsy</strong> (most common in dog)</li>
          <li><strong>Older (&gt; 6 years)</strong>: ⭐ <strong>brain tumor</strong> until proven otherwise, metabolic (HE, hypoglycemia, uremia)</li>
        </ul>

        <p><strong>Common neuro emergencies:</strong></p>
        <ul>
          <li>Status epilepticus</li>
          <li>Acute IVDD (paraplegia)</li>
          <li>Atlantoaxial subluxation (toy breed)</li>
          <li>TBI (head trauma)</li>
          <li>Tick paralysis (geographic)</li>
          <li>Botulism</li>
          <li>Coonhound paralysis (acute polyradiculoneuritis)</li>
          <li>Myasthenic crisis</li>
        </ul>

        <p><strong>IVDD types:</strong></p>
        <ul>
          <li><strong>Hansen Type I</strong>: ⭐ Chondrodystrophic breeds (Dachshund, Beagle, Cocker, Pekinese)
            <ul>
              <li>Acute extrusion of nucleus pulposus</li>
              <li>Mostly thoracolumbar (T11-L3) — 80%</li>
              <li>Young-middle aged (3-7 years)</li>
            </ul>
          </li>
          <li><strong>Hansen Type II</strong>: Non-chondrodystrophic breeds (Lab, GSD)
            <ul>
              <li>Chronic protrusion of annulus</li>
              <li>Mostly cervical or lumbosacral</li>
              <li>Older (6-9+ years)</li>
              <li>Slowly progressive</li>
            </ul>
          </li>
          <li><strong>Type III (ANNPE/HNPE)</strong>: Acute non-compressive nucleus pulposus extrusion · "Concussive" injury</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Seizure pathophysiology:</strong></p>
        <ol>
          <li>Imbalance: ↑ excitation (glutamate) vs ↓ inhibition (GABA)</li>
          <li>Hypersynchronous neuronal firing</li>
          <li>Spreads through cortex (focal → generalized)</li>
          <li>Phases:
            <ul>
              <li><strong>Prodrome</strong> (hours-days): behavior change</li>
              <li><strong>Aura</strong> (minutes): immediate pre-ictal</li>
              <li><strong>Ictus</strong> (seconds-minutes): the seizure itself</li>
              <li><strong>Post-ictal</strong> (minutes-hours): confusion, blindness, ataxia</li>
            </ul>
          </li>
          <li>Status epilepticus: ⭐ &gt; 5 minutes continuous OR cluster without recovery
            <ul>
              <li>Excitotoxicity (glutamate overload)</li>
              <li>Cerebral edema, hypoxia</li>
              <li>Hyperthermia, rhabdomyolysis</li>
              <li>Aspiration risk</li>
              <li>Permanent damage if &gt; 30 min</li>
            </ul>
          </li>
        </ol>

        <p><strong>Increased ICP (intracranial pressure) cascade:</strong></p>
        <ol>
          <li>Mass effect (tumor, hemorrhage, edema)</li>
          <li>Monro-Kellie doctrine: skull fixed volume = brain + CSF + blood</li>
          <li>↑ One = compensate by ↓ another</li>
          <li>When compensation fails: ↑ ICP</li>
          <li>↓ Cerebral perfusion pressure (CPP = MAP - ICP)</li>
          <li>Cushing's triad: ↑ BP, bradycardia, irregular respiration (terminal sign)</li>
          <li>⚠️ <strong>Brainstem herniation</strong>: foramen magnum → death</li>
        </ol>

        <p><strong>Vestibular disease pathophysiology:</strong></p>
        <ul>
          <li>Vestibular system: inner ear → CN VIII → brainstem nuclei → cerebellum</li>
          <li><strong>⭐ Peripheral vs central differentiation critical</strong>:</li>
        </ul>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Peripheral vs Central Vestibular</span>
          <table>
            <tr><th>Feature</th><th>Peripheral</th><th>Central</th></tr>
            <tr><td><strong>Location</strong></td><td>Inner ear, CN VIII</td><td>Brainstem, cerebellum</td></tr>
            <tr><td><strong>Mentation</strong></td><td>Normal</td><td>⚠️ Altered</td></tr>
            <tr><td><strong>Cranial nerves</strong></td><td>Normal (except VII Horner)</td><td>⚠️ Multiple deficits</td></tr>
            <tr><td><strong>Postural reactions</strong></td><td>Normal</td><td>⚠️ Deficient</td></tr>
            <tr><td><strong>Nystagmus</strong></td><td>Horizontal/rotary, fixed</td><td>Vertical OR direction-changing</td></tr>
            <tr><td><strong>Head tilt</strong></td><td>To lesion side</td><td>To lesion side (paradox if cerebellar)</td></tr>
            <tr><td><strong>Common causes</strong></td><td>⭐ Idiopathic (old dog), otitis</td><td>Tumor, infarct, GME</td></tr>
            <tr><td><strong>Prognosis</strong></td><td>⭐ Often resolves (idiopathic)</td><td>Worse</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Old dog with sudden head tilt + nystagmus = idiopathic peripheral vestibular (very common, resolves in days-weeks)</p>
        </div>

        <p><strong>IVDD pathophysiology:</strong></p>
        <ol>
          <li>Disc degeneration (chondroid metaplasia in chondrodystrophics)</li>
          <li>Loss of proteoglycans, dehydration of nucleus pulposus</li>
          <li>Mineralization (radiographic finding)</li>
          <li>Annulus weakens → nucleus extrudes (Type I) into spinal canal</li>
          <li>Concussive injury + compression of cord</li>
          <li>Spinal cord changes:
            <ul>
              <li>Edema, hemorrhage, ischemia</li>
              <li>Excitotoxicity</li>
              <li>Demyelination, axonal damage</li>
              <li>Severe: myelomalacia (cord softening, ascending → fatal)</li>
            </ul>
          </li>
        </ol>

        <p><strong>IVDD grading (modified Frankel):</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">IVDD Neurologic Grading</span>
          <table>
            <tr><th>Grade</th><th>Description</th><th>Recovery (with surgery)</th></tr>
            <tr><td><strong>1</strong></td><td>Pain only, ambulatory</td><td>Excellent</td></tr>
            <tr><td><strong>2</strong></td><td>Ambulatory paraparesis (ataxic)</td><td>Excellent</td></tr>
            <tr><td><strong>3</strong></td><td>Non-ambulatory paraparesis (can move legs)</td><td>Very good</td></tr>
            <tr><td><strong>4</strong></td><td>⭐ Paraplegia + intact deep pain</td><td>Good (90%+ with surgery)</td></tr>
            <tr><td><strong>5</strong></td><td>⚠️ Paraplegia + ⭐ <strong>NO deep pain</strong></td><td>50% if surgery within 24-48h</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ <strong>Deep pain = key prognostic indicator</strong><br>
          📌 ⚠️ If lost &gt; 48h: very poor prognosis · ⚠️ Risk of progressive myelomalacia (fatal)</p>
        </div>

        <p><strong>Degenerative myelopathy (DM):</strong></p>
        <ol>
          <li>Genetic mutation in SOD1 (superoxide dismutase 1)</li>
          <li>Progressive axonal degeneration in T3-L3 region</li>
          <li>Bilateral pelvic limb ataxia (UMN signs)</li>
          <li>Slowly progressive weeks-months → paraplegia</li>
          <li>Eventually FL involvement → tetraplegia</li>
          <li>⭐ <strong>NO PAIN</strong> (helps differentiate from IVDD)</li>
          <li>⭐ Common in GSD, Boxer, Corgi (genetic test available)</li>
          <li>No effective treatment, fatal disease</li>
        </ol>

        <p><strong>Idiopathic epilepsy:</strong></p>
        <ul>
          <li>Genetic predisposition (Beagle, Lab, Golden, GSD, Boxer, Border Collie)</li>
          <li>Onset typically 1-5 years</li>
          <li>Inter-ictal: completely normal between seizures</li>
          <li>Diagnosis = exclusion (rule out structural, metabolic, toxic)</li>
          <li>MRI + CSF normal</li>
        </ul>

        <p><strong>Cognitive dysfunction (CCD/CDS):</strong></p>
        <ul>
          <li>"Dog Alzheimer's" — old dogs (often &gt; 11 years)</li>
          <li>Beta-amyloid plaque deposition</li>
          <li>"DISHA" signs:
            <ul>
              <li><strong>D</strong>isorientation</li>
              <li><strong>I</strong>nteraction changes</li>
              <li><strong>S</strong>leep-wake disturbance</li>
              <li><strong>H</strong>ousesoiling</li>
              <li><strong>A</strong>ctivity changes</li>
            </ul>
          </li>
        </ul>
      `,
      symptoms: `
        <p><strong>Forebrain signs (cerebrum):</strong></p>
        <ul>
          <li>Behavior change, ⭐ <strong>seizures</strong></li>
          <li>Mentation: depressed, obtunded</li>
          <li>Circling (toward lesion)</li>
          <li>Head pressing, pacing</li>
          <li>Contralateral menace deficit (with normal vision)</li>
          <li>Contralateral postural deficits</li>
          <li>Pleurothotonus ("Schnauzer's posture")</li>
        </ul>

        <p><strong>Brainstem signs:</strong></p>
        <ul>
          <li>Multiple cranial nerve deficits</li>
          <li>Altered mentation</li>
          <li>Tetraparesis (UMN)</li>
          <li>Vestibular signs (central type)</li>
          <li>Severe: cardiopulmonary changes</li>
        </ul>

        <p><strong>Cerebellar signs:</strong></p>
        <ul>
          <li>⭐ <strong>Hypermetria</strong> (high-stepping, "drunk sailor")</li>
          <li>⭐ <strong>Intention tremor</strong> (worse with goal-directed movement)</li>
          <li>Truncal ataxia</li>
          <li>Wide-based stance</li>
          <li>Menace deficit (ipsilateral, vision intact)</li>
          <li>Often retained mentation</li>
        </ul>

        <p><strong>Spinal cord lesion signs (by region):</strong></p>
        <ul>
          <li><strong>C1-C5</strong>: tetraparesis/plegia, all UMN</li>
          <li><strong>C6-T2</strong>: tetraparesis · FL LMN (low reflexes), HL UMN · Horner's possible</li>
          <li><strong>T3-L3</strong>: paraparesis/plegia, FL normal, HL UMN, ⭐ <strong>"crossed extensor"</strong> (pinch one paw → other extends)</li>
          <li><strong>L4-S2</strong>: paraparesis/plegia, HL LMN (flaccid), absent withdrawal</li>
          <li><strong>S1-Cd</strong>: bladder, anus, tail dysfunction</li>
        </ul>

        <p><strong>Vestibular signs (general):</strong></p>
        <ul>
          <li>⭐ Head tilt</li>
          <li>⭐ Nystagmus (horizontal/rotary peripheral · vertical central)</li>
          <li>Loss of balance, falling, rolling (severe)</li>
          <li>Strabismus (positional, ventral)</li>
          <li>Nausea, vomiting, anorexia</li>
          <li>Circling toward lesion</li>
        </ul>

        <p><strong>LMN signs (peripheral):</strong></p>
        <ul>
          <li>Flaccid paralysis</li>
          <li>Absent reflexes</li>
          <li>⭐ Severe muscle atrophy (early)</li>
          <li>Hyporeflexia</li>
          <li>Often symmetric (polyneuropathy)</li>
          <li>Dysphagia, regurgitation (megaesophagus)</li>
          <li>Hyporeflexia of bladder (overflow incontinence)</li>
        </ul>

        <p><strong>Seizure types:</strong></p>
        <ul>
          <li><strong>Focal (partial)</strong>: localized signs (facial twitch, fly-biting, "hallucination")</li>
          <li><strong>Generalized tonic-clonic</strong>: ⭐ classic grand mal · LOC, full body convulsion, autonomic (urination, defecation, salivation)</li>
          <li><strong>Atypical / cluster</strong>: ≥ 2 seizures in 24h</li>
          <li><strong>Status epilepticus</strong>: ⭐ &gt; 5 min OR cluster without recovery</li>
        </ul>

        <p><strong>TBI (head trauma) signs:</strong></p>
        <ul>
          <li>↓ Mentation</li>
          <li>Seizures</li>
          <li>Cushing's triad (↑ BP, bradycardia, irregular respiration)</li>
          <li>Anisocoria, fixed dilated pupils (severe)</li>
          <li>Decerebrate posture (extensor rigidity)</li>
          <li>Decerebellate (head/neck flexed, FL extended)</li>
          <li>Hemorrhage from nose, ears (basilar fracture)</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Approach: Localize FIRST, then differential:</strong></p>
        <ol>
          <li>Complete neuro exam (mentation, CN, postural, reflexes, gait)</li>
          <li>Localize: forebrain / brainstem / cerebellum / SC region / peripheral</li>
          <li>Apply VITAMIN D to localization</li>
          <li>Targeted workup</li>
        </ol>

        <p><strong>Initial workup (any neuro case):</strong></p>
        <ul>
          <li>CBC, chemistry, UA, T4 (cat)</li>
          <li>BG (rule out hypoglycemia)</li>
          <li>Bile acids (rule out HE/PSS)</li>
          <li>Electrolytes (Na, Ca)</li>
          <li>Toxin screen (history-based)</li>
          <li>Infectious disease testing (geographic):
            <ul>
              <li>Toxoplasma/Neospora (dog)</li>
              <li>Distemper (young dog)</li>
              <li>FIP (cat)</li>
              <li>Cryptococcus (cat especially)</li>
            </ul>
          </li>
          <li>Tick-borne disease panel</li>
        </ul>

        <p><strong>Advanced imaging:</strong></p>
        <ul>
          <li><strong>⭐ MRI</strong>: gold standard for brain + spinal cord
            <ul>
              <li>Best for: tumor, IVDD, GME, vascular</li>
              <li>Specialty referral usually</li>
            </ul>
          </li>
          <li><strong>CT</strong>: 
            <ul>
              <li>Better for bone (atlantoaxial, fracture)</li>
              <li>Faster than MRI</li>
              <li>Less detail for soft tissue</li>
            </ul>
          </li>
          <li><strong>Radiographs</strong>: limited utility (vertebral fracture, gross IVDD mineralization)</li>
        </ul>

        <p><strong>CSF analysis:</strong></p>
        <ul>
          <li>Cisternal or lumbar tap (after MRI to rule out herniation risk)</li>
          <li>Normal: protein &lt; 25 (cisternal) or &lt; 45 (lumbar) · TNCC &lt; 5/μL</li>
          <li>Inflammation: ↑ protein + ↑ TNCC
            <ul>
              <li>Neutrophilic: bacterial</li>
              <li>Mononuclear (lymphocytes): GME, MUE, viral</li>
              <li>Eosinophilic: parasitic, fungal, idiopathic</li>
            </ul>
          </li>
          <li>PCR for infectious agents</li>
          <li>Cytology, culture</li>
        </ul>

        <p><strong>Other diagnostics:</strong></p>
        <ul>
          <li><strong>EEG</strong>: epilepsy confirmation (rare in vet)</li>
          <li><strong>Electrodiagnostics</strong>: EMG, NCV, F-wave (peripheral disease)</li>
          <li><strong>BAER</strong>: brainstem auditory response (deafness, peripheral vestibular)</li>
          <li><strong>Anti-AChR antibody</strong>: myasthenia gravis</li>
          <li><strong>2M antibody</strong>: masticatory muscle myositis</li>
          <li><strong>Genetic tests</strong>: DM (SOD1), CKCS syringomyelia</li>
        </ul>
      `,
      treatment: `
        <p><strong>Status epilepticus emergency:</strong></p>
        <ol>
          <li><strong>⭐ Diazepam IV 0.5-1 mg/kg</strong> (or rectal 1-2 mg/kg if no IV)
            <ul>
              <li>Repeat × 2 if no response</li>
              <li>Midazolam alternative (better IM)</li>
            </ul>
          </li>
          <li>If still seizing: <strong>Phenobarbital IV 4-16 mg/kg loading</strong></li>
          <li>If still seizing: <strong>Levetiracetam IV 60 mg/kg</strong></li>
          <li>If still seizing: <strong>Propofol CRI</strong> (general anesthesia)</li>
          <li>+ Dextrose if hypoglycemic</li>
          <li>Cooling if hyperthermic</li>
          <li>O2, monitor SpO2</li>
          <li>Address underlying cause</li>
        </ol>

        <p><strong>Maintenance anti-epileptic drugs:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">AED Choices</span>
          <table>
            <tr><th>Drug</th><th>Dose</th><th>Notes</th></tr>
            <tr><td><strong>⭐ Phenobarbital</strong></td><td>2-4 mg/kg q12h</td><td>1st line · hepatotox · check serum levels</td></tr>
            <tr><td><strong>⭐ Levetiracetam (Keppra)</strong></td><td>20-60 mg/kg q8h</td><td>Add-on or 1st line · few SE · cat compatible</td></tr>
            <tr><td><strong>Zonisamide</strong></td><td>5-10 mg/kg q12h</td><td>Add-on · less SE than pheno</td></tr>
            <tr><td><strong>KBr (potassium bromide)</strong></td><td>20-40 mg/kg q24h</td><td>Add-on for refractory · ⚠️ NOT cat (asthma trigger)</td></tr>
            <tr><td><strong>Imepitoin (Pexion)</strong></td><td>10-30 mg/kg q12h</td><td>Newer · partial GABA agonist</td></tr>
            <tr><td><strong>Gabapentin</strong></td><td>10-20 mg/kg q8h</td><td>Adjunct · neuropathic pain too</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Start AED if: &gt; 1 seizure/month, cluster, status, structural disease<br>
          📌 Goal: ↓ seizure frequency 50% (often not 100%)<br>
          📌 Monitor: serum levels, CBC, chemistry q6-12 months</p>
        </div>

        <p><strong>IVDD treatment:</strong></p>
        <ul>
          <li><strong>Conservative (Grade 1-2, mild Grade 3)</strong>:
            <ul>
              <li>⭐ <strong>Strict cage rest 4-6 weeks</strong> (CRITICAL — most owner failure)</li>
              <li>Pain management:
                <ul>
                  <li>Gabapentin 10-20 mg/kg q8h</li>
                  <li>NSAID (carprofen, meloxicam) ± opioid (tramadol, methadone)</li>
                  <li>Muscle relaxant: methocarbamol 15-20 mg/kg q8h</li>
                </ul>
              </li>
              <li>⚠️ NSAIDs + steroids contraindicated together</li>
              <li>Physical therapy after acute period</li>
            </ul>
          </li>
          <li><strong>Surgical (Grade 3-5, deteriorating)</strong>:
            <ul>
              <li>Hemilaminectomy (TL) or ventral slot (cervical)</li>
              <li>⭐ <strong>Best within 24-48h</strong> for Grade 5</li>
              <li>Specialty referral usually</li>
              <li>Recovery time variable</li>
            </ul>
          </li>
          <li><strong>Avoid</strong>: high-dose steroids historically used, no longer recommended (more harm than benefit)</li>
        </ul>

        <p><strong>Vestibular disease:</strong></p>
        <ul>
          <li><strong>Idiopathic peripheral (old dog)</strong>:
            <ul>
              <li>Supportive (anti-emetic — maropitant)</li>
              <li>Confined safe area (prevent falls)</li>
              <li>Help with food/water</li>
              <li>Usually improves in 7-14 days</li>
              <li>Residual head tilt may persist</li>
            </ul>
          </li>
          <li><strong>Otitis media/interna</strong>:
            <ul>
              <li>Long-term antibiotics (4-6 weeks)</li>
              <li>Bulla osteotomy if refractory</li>
            </ul>
          </li>
          <li><strong>Central vestibular</strong>: depends on cause (tumor, GME, infarct)</li>
        </ul>

        <p><strong>TBI management:</strong></p>
        <ol>
          <li>ABCs first (airway, breathing, circulation)</li>
          <li>O2 supplementation</li>
          <li>Elevate head 30° (↑ venous drainage, ↓ ICP)</li>
          <li>Avoid jugular venipuncture / pressure on neck</li>
          <li>Mannitol 0.5-1 g/kg IV slow (over 15-30 min) if ↑ ICP signs (only if hydrated)</li>
          <li>Hypertonic saline 7% 4 mL/kg slow IV (alternative to mannitol)</li>
          <li>Avoid hyperventilation (used to be standard, now harmful)</li>
          <li>Maintain MAP &gt; 80 mmHg (CPP)</li>
          <li>Treat seizures aggressively</li>
          <li>Treat hyperthermia aggressively (cooling)</li>
          <li>Anti-emetics</li>
          <li>Frequent neuro exams (Glasgow Coma Scale modified)</li>
        </ol>

        <p><strong>GME / MUE (granulomatous meningoencephalomyelitis):</strong></p>
        <ul>
          <li>Immunosuppression:
            <ul>
              <li>Prednisolone 1-2 mg/kg/day (taper slowly)</li>
              <li>+ Cytosine arabinoside (immunosuppressive chemo)</li>
              <li>+ Cyclosporine</li>
              <li>+ MMF</li>
            </ul>
          </li>
          <li>Anti-epileptic if seizures</li>
          <li>Lifelong management often</li>
          <li>Prognosis: variable, often guarded</li>
        </ul>

        <p><strong>Brain tumor (older dog):</strong></p>
        <ul>
          <li>Steroids (palliative — reduce edema)</li>
          <li>Anti-epileptic</li>
          <li>Surgery if accessible (rare — meningioma in cat is most common)</li>
          <li>Radiation therapy</li>
          <li>Chemotherapy (selected)</li>
          <li>Palliative care often appropriate</li>
        </ul>

        <p><strong>Cognitive dysfunction (CDS):</strong></p>
        <ul>
          <li>⭐ Selegiline (Anipryl) — MAO-B inhibitor</li>
          <li>S-Adenosyl methionine (SAMe)</li>
          <li>Anti-oxidant diets (Hill's b/d)</li>
          <li>Environmental enrichment</li>
          <li>Behavior modification</li>
          <li>Trazodone for nighttime restlessness</li>
        </ul>

        <p><strong>Tick paralysis:</strong></p>
        <ul>
          <li>⭐ Find and remove tick(s) — often hidden</li>
          <li>Search whole body (especially head, neck, ears)</li>
          <li>Bath with appropriate acaricide</li>
          <li>Australian tick (Ixodes holocyclus): tick antiserum required (severe)</li>
          <li>Supportive care (ventilation if respiratory failure)</li>
          <li>Recovery: hours-days after tick removal (geographic-dependent)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Status epilepticus</strong> → permanent brain damage if &gt; 30 min</li>
          <li><strong>Aspiration pneumonia</strong> (post-ictal, megaesophagus, decreased gag)</li>
          <li><strong>Hyperthermia / rhabdomyolysis</strong> (status)</li>
          <li><strong>Cerebral edema → herniation</strong> (TBI, tumor, GME)</li>
          <li><strong>Progressive myelomalacia</strong> (severe IVDD with no deep pain — fatal)</li>
          <li><strong>Pressure sores</strong> (recumbent paraplegic)</li>
          <li><strong>Urinary tract infection</strong> (bladder dysfunction)</li>
          <li><strong>DJD / dysuria from chronic neuro</strong></li>
          <li><strong>AED side effects</strong>:
            <ul>
              <li>Phenobarbital: hepatotoxicity (long-term), sedation, polyphagia/PU/PD, anemia</li>
              <li>KBr: pancreatitis, sedation, ⚠️ feline asthma trigger</li>
              <li>Levetiracetam: usually well-tolerated</li>
            </ul>
          </li>
          <li><strong>Permanent deficits</strong> (neurons don't regenerate)</li>
          <li><strong>Drug toxicity from incomplete metabolism</strong> (phenobarbital + liver disease)</li>
          <li><strong>Quality of life decline</strong> with chronic neuro disease</li>
        </ul>

        <p><strong>Nursing care for recumbent neuro patient:</strong></p>
        <ul>
          <li>Padded bedding, turning q4-6h (prevent decubitus ulcers)</li>
          <li>Bladder expression q6-8h (urine retention → UTI)</li>
          <li>Bowel management</li>
          <li>Passive range of motion (prevent contracture)</li>
          <li>Skin care (urine/feces dermatitis)</li>
          <li>Frequent feeding/hydration</li>
          <li>Monitor for UTI, decubitus, aspiration</li>
        </ul>

        <p><strong>Prognosis:</strong></p>
        <ul>
          <li>Idiopathic epilepsy: usually good with AED (controllable, not cured)</li>
          <li>Status epilepticus: ⚠️ 25-30% mortality if prolonged</li>
          <li>IVDD Grade 1-4 surgical: 80-95% recovery</li>
          <li>IVDD Grade 5 (no deep pain &lt; 24-48h): 50% recovery</li>
          <li>IVDD Grade 5 (no deep pain &gt; 48h): poor</li>
          <li>Idiopathic vestibular: ⭐ excellent (resolves)</li>
          <li>Brain tumor (untreated): months</li>
          <li>Brain tumor (radiation): 6-18 months</li>
          <li>GME/MUE: variable, lifelong management</li>
          <li>DM: progressive, fatal in 1-3 years</li>
          <li>CCD: progressive, manageable years</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-genetic',
    titleEn: 'Genetic & Developmental Disorders',
    titleTh: 'โรคทางพันธุกรรมและความผิดปกติแต่กำเนิด',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['genetic', 'congenital', 'breed predisposition', 'inherited', 'chromosomal', 'developmental'],
    aliases: ['hereditary disease', 'congenital disease', 'พันธุกรรม'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Definitions:</strong></p>
        <ul>
          <li><strong>Genetic disease</strong>: caused by DNA mutation</li>
          <li><strong>Hereditary disease</strong>: passed from parent to offspring</li>
          <li><strong>Congenital disease</strong>: present at birth (may or may not be genetic)</li>
          <li><strong>Developmental disease</strong>: arises during development (genetic + environmental)</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Inheritance Patterns</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">AD</span>
              <span class="num-label">Autosomal Dominant</span>
            </div>
            <div class="num-card">
              <span class="num-big">AR</span>
              <span class="num-label">Autosomal Recessive (most common)</span>
            </div>
            <div class="num-card">
              <span class="num-big">XR</span>
              <span class="num-label">X-linked Recessive</span>
            </div>
            <div class="num-card">
              <span class="num-big">Poly</span>
              <span class="num-label">Polygenic / multifactorial</span>
            </div>
          </div>
          <p class="mnem-tip">📌 ⭐ Most veterinary inherited diseases = AR<br>
          📌 Carriers (heterozygotes) appear normal in AR · key for breeding decisions</p>
        </div>

        <p><strong>Why purebred dogs/cats have many inherited diseases:</strong></p>
        <ul>
          <li>Founder effect (small original population)</li>
          <li>Genetic bottlenecks (popular sires, line breeding)</li>
          <li>Inbreeding (related parents)</li>
          <li>Selection for traits → linked deleterious genes carried along</li>
          <li>Brachycephalic syndromes selected for short face</li>
          <li>Chondrodystrophic breeds selected for short legs (FGF4 retrogene)</li>
        </ul>
      `,
      etiology: `
        <p><strong>Categories of genetic disease:</strong></p>

        <p><strong>1. Single-gene (Mendelian) disorders:</strong></p>
        <ul>
          <li><strong>Autosomal recessive (most common)</strong>:
            <ul>
              <li>vWD type III (Scottish Terrier)</li>
              <li>PRA (progressive retinal atrophy — many breeds)</li>
              <li>PK deficiency (Basenji, Beagle, Cairn, WHWT)</li>
              <li>SCID (Jack Russell variant)</li>
              <li>MDR1 mutation (Collie, Australian Shepherd, Sheltie — drug sensitivity)</li>
              <li>DM (degenerative myelopathy — SOD1)</li>
              <li>HCM in Maine Coon, Ragdoll (MYBPC3)</li>
              <li>Hyperuricosuria (Dalmatian + others)</li>
              <li>Polycystic kidney disease (Persian — PKD1)</li>
            </ul>
          </li>
          <li><strong>Autosomal dominant</strong>:
            <ul>
              <li>vWD type I (Doberman — incomplete penetrance)</li>
              <li>Some myostatin mutations (Whippet "bully" double-muscled)</li>
              <li>Multiple drug resistance (MDR1) — incomplete dominance</li>
            </ul>
          </li>
          <li><strong>X-linked</strong>:
            <ul>
              <li>Hemophilia A (factor VIII deficiency)</li>
              <li>Hemophilia B (factor IX deficiency)</li>
              <li>Muscular dystrophy (Golden Retriever model)</li>
              <li>X-linked SCID (Basset Hound)</li>
            </ul>
          </li>
        </ul>

        <p><strong>2. Polygenic / multifactorial:</strong></p>
        <ul>
          <li>⭐ <strong>Hip dysplasia</strong> (large breeds: GSD, Lab, Golden, Rottie, Mastiff)</li>
          <li>⭐ <strong>Elbow dysplasia</strong></li>
          <li><strong>Atopic dermatitis</strong></li>
          <li><strong>Idiopathic epilepsy</strong> (many breeds)</li>
          <li><strong>MMVD</strong> (CKCS especially)</li>
          <li><strong>Patellar luxation</strong></li>
          <li><strong>Cruciate ligament disease</strong></li>
        </ul>

        <p><strong>3. Chromosomal abnormalities (rare in vet):</strong></p>
        <ul>
          <li>XX/XY chimerism, true hermaphrodite</li>
          <li>Klinefelter-like (XXY) — sterile males</li>
          <li>Most are infertility presentations</li>
        </ul>

        <p><strong>4. Mitochondrial diseases:</strong></p>
        <ul>
          <li>Sensory ataxic neuropathy (Golden Retriever)</li>
          <li>Inherited maternally (mtDNA)</li>
        </ul>

        <p><strong>5. Imprinting / epigenetic:</strong></p>
        <ul>
          <li>Less common in vet medicine</li>
          <li>Environmental modulators of gene expression</li>
        </ul>

        <p><strong>Common congenital (not necessarily genetic):</strong></p>
        <ul>
          <li><strong>Cardiac</strong>:
            <ul>
              <li>PDA (Poodle, Pomeranian, Maltese — sex-linked tendency)</li>
              <li>SAS (Newfoundland, Boxer, Golden, Rottie)</li>
              <li>PS (English Bulldog, Mastiff)</li>
              <li>VSD</li>
              <li>Tetralogy of Fallot</li>
              <li>Tricuspid dysplasia</li>
            </ul>
          </li>
          <li><strong>Hepatic</strong>:
            <ul>
              <li>PSS (Yorkie, Maltese, Schnauzer; large breed intrahepatic)</li>
              <li>Microvascular dysplasia (Cairn, Yorkie)</li>
            </ul>
          </li>
          <li><strong>Renal</strong>:
            <ul>
              <li>Polycystic kidney disease (Persian, Bull Terrier)</li>
              <li>Renal dysplasia (various breeds)</li>
              <li>Familial nephropathy (Cocker, Lhasa, Shih Tzu, Soft-coated Wheaten)</li>
            </ul>
          </li>
          <li><strong>Skeletal</strong>:
            <ul>
              <li>Hip/elbow dysplasia</li>
              <li>OCD (large breed osteochondrosis dissecans)</li>
              <li>Patellar luxation (toy breed medial · large breed lateral)</li>
              <li>Wobbler syndrome (Doberman, Great Dane)</li>
              <li>Atlantoaxial subluxation (Yorkie, Toy Poodle)</li>
              <li>Chiari-like malformation + syringomyelia (CKCS)</li>
            </ul>
          </li>
          <li><strong>Neurologic</strong>:
            <ul>
              <li>Hydrocephalus (Toy/Brachycephalic breeds)</li>
              <li>Lissencephaly (Lhasa Apso)</li>
              <li>Cerebellar hypoplasia (cat — feline panleukopenia in utero)</li>
            </ul>
          </li>
          <li><strong>Brachycephalic syndromes</strong>:
            <ul>
              <li>BOAS (Bulldog, Pug, Boston, Pekingese)</li>
              <li>Brachycephalic ocular syndrome (corneal disease)</li>
              <li>GI: hiatal hernia, esophagitis, regurgitation</li>
            </ul>
          </li>
          <li><strong>Eye</strong>:
            <ul>
              <li>PRA, collie eye anomaly</li>
              <li>Cataracts (juvenile)</li>
              <li>Entropion / ectropion</li>
              <li>Cherry eye</li>
            </ul>
          </li>
          <li><strong>Other</strong>:
            <ul>
              <li>Cleft palate, cleft lip</li>
              <li>Umbilical hernia (most close, some need surgery)</li>
              <li>Cryptorchidism</li>
              <li>Coat/skin: ichthyosis, hairlessness syndromes</li>
            </ul>
          </li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>How genetic mutations cause disease:</strong></p>
        <ol>
          <li><strong>Loss of function</strong>: gene cannot make functional protein
            <ul>
              <li>Enzyme deficiency (PK deficiency, MPS)</li>
              <li>Receptor defect</li>
              <li>Structural protein missing</li>
            </ul>
          </li>
          <li><strong>Gain of function</strong>: protein abnormally active or new function
            <ul>
              <li>Oncogene mutations</li>
              <li>Some neurodegenerative diseases</li>
            </ul>
          </li>
          <li><strong>Dominant negative</strong>: abnormal protein interferes with normal copy</li>
          <li><strong>Triplet repeat expansion</strong>: rare in vet (Huntington's-like)</li>
        </ol>

        <p><strong>Hip dysplasia pathophysiology:</strong></p>
        <ol>
          <li>Genetic predisposition (polygenic)</li>
          <li>Joint laxity at birth/young age</li>
          <li>Subluxation under weight-bearing</li>
          <li>Abnormal stress on cartilage + bone</li>
          <li>Microtrauma → inflammation</li>
          <li>Cartilage damage, subchondral bone changes</li>
          <li>Compensatory osteophyte formation</li>
          <li>Progressive osteoarthritis</li>
          <li>Pain, lameness, mobility decline</li>
        </ol>

        <p><strong>BOAS pathophysiology (developmental):</strong></p>
        <ol>
          <li>Selection for shortened skull → soft tissue not proportionally reduced</li>
          <li>Anatomic obstruction (stenotic nares, elongated soft palate, everted saccules, hypoplastic trachea)</li>
          <li>↑ Inspiratory effort → ↑ negative pressure</li>
          <li>Soft tissue collapse, edema</li>
          <li>Vicious cycle: worsening obstruction over time</li>
          <li>Laryngeal collapse (end-stage)</li>
          <li>Concurrent: hiatal hernia, GI signs</li>
          <li>Heat intolerance (cooling impaired)</li>
        </ol>

        <p><strong>PSS (portosystemic shunt) pathophysiology (covered in hepatic):</strong></p>
        <ul>
          <li>Embryologic vessel persists OR fails to close</li>
          <li>Vitelline vein abnormalities → extrahepatic shunt</li>
          <li>Ductus venosus persistence → intrahepatic</li>
        </ul>

        <p><strong>Hydrocephalus:</strong></p>
        <ol>
          <li>↑ CSF in ventricles (production-resorption imbalance or obstruction)</li>
          <li>Ventricles dilate</li>
          <li>↑ ICP → cerebral cortex compression</li>
          <li>Skull (puppies/kittens with open fontanelles): dome-shaped</li>
          <li>Open fontanelle, "apple-shaped" head, ventral strabismus ("setting sun")</li>
          <li>Variable signs: depends on severity, compensation</li>
        </ol>

        <p><strong>Atlantoaxial subluxation:</strong></p>
        <ol>
          <li>Aplasia/hypoplasia of dens (odontoid process)</li>
          <li>Or absent/loose dens ligaments</li>
          <li>C1-C2 instability</li>
          <li>Spinal cord compression at high cervical level</li>
          <li>Can be triggered by trauma or spontaneous</li>
          <li>Severe: tetraparesis, respiratory compromise</li>
          <li>Predisposed: Yorkie, Toy Poodle, Pomeranian, Chihuahua</li>
        </ol>

        <p><strong>Chiari-like malformation + syringomyelia (CKCS classic):</strong></p>
        <ol>
          <li>Caudal occipital dysplasia → small caudal fossa</li>
          <li>Cerebellum herniates through foramen magnum</li>
          <li>CSF flow obstruction</li>
          <li>Syrinx (fluid-filled cavity) formation in cervical spinal cord</li>
          <li>Pain, scratching air ("phantom scratching"), neuropathic pain</li>
          <li>Common in CKCS — &gt; 90% have CMI, 50%+ have SM</li>
        </ol>

        <p><strong>Cerebellar hypoplasia (cat):</strong></p>
        <ol>
          <li>Maternal panleukopenia infection in late pregnancy</li>
          <li>Virus targets dividing cerebellar Purkinje + granule cells</li>
          <li>Affected kittens: cerebellar ataxia from birth</li>
          <li>Non-progressive (already maximally affected)</li>
          <li>Often compatible with reasonable QoL</li>
        </ol>

        <p><strong>Lysosomal storage diseases:</strong></p>
        <ul>
          <li>Enzyme deficiency → substrate accumulates in lysosomes</li>
          <li>Cellular dysfunction in tissues with high turnover</li>
          <li>MPS (mucopolysaccharidosis) — multiple breeds</li>
          <li>GM1/GM2 gangliosidosis</li>
          <li>Krabbe's disease (globoid cell leukodystrophy — WHWT)</li>
          <li>Progressive neurologic decline · usually fatal young</li>
        </ul>

        <p><strong>MDR1 mutation:</strong></p>
        <ol>
          <li>Mutation in ABCB1 (formerly MDR1) gene</li>
          <li>P-glycoprotein deficient (BBB transporter)</li>
          <li>Drugs accumulate in CNS</li>
          <li>⚠️ Ivermectin, milbemycin, loperamide, vincristine, doxorubicin → toxicity</li>
          <li>Predisposed: ⭐ Collie (~75%), Australian Shepherd, Sheltie, Border Collie, Old English Sheepdog</li>
          <li>"White feet, don't treat" — old saying for ivermectin</li>
        </ol>
      `,
      symptoms: `
        <p><strong>Recognizing inherited disease patterns:</strong></p>
        <ul>
          <li>⭐ <strong>Breed predisposition</strong> — most important clue</li>
          <li>⭐ <strong>Age of onset</strong>: many genetic diseases manifest at specific ages</li>
          <li>⭐ <strong>Bilateral / symmetric</strong> involvement (vs unilateral acquired)</li>
          <li>⭐ <strong>Family history</strong> (siblings, parents affected)</li>
          <li>Slowly progressive (vs acute acquired)</li>
        </ul>

        <p><strong>Common presentations by age:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Genetic Disease by Age of Onset</span>
          <table>
            <tr><th>Age</th><th>Common diseases</th></tr>
            <tr><td><strong>Neonatal</strong></td><td>SCID, hypoglycemia, cleft palate, congenital heart, swimmer puppy</td></tr>
            <tr><td><strong>Pediatric (2-6 mo)</strong></td><td>PSS (small breed), hip dysplasia signs begin, cardiac murmurs detected</td></tr>
            <tr><td><strong>Juvenile (6-18 mo)</strong></td><td>OCD, hip/elbow dysplasia, patellar luxation, idiopathic megaesophagus</td></tr>
            <tr><td><strong>Young adult (1-3 y)</strong></td><td>Idiopathic epilepsy, IBD, vWD bleeding, atopy onset</td></tr>
            <tr><td><strong>Mid-life (3-7 y)</strong></td><td>MMVD start, atopic dermatitis chronicity, IVDD (chondrodystrophic)</td></tr>
            <tr><td><strong>Older (&gt; 7 y)</strong></td><td>DCM, DM (degenerative myelopathy), neoplasia, CCD</td></tr>
          </table>
        </div>

        <p><strong>Common breed-specific scenarios:</strong></p>
        <ul>
          <li><strong>CKCS</strong>: MMVD (early-onset), SM (phantom scratching), syringomyelia pain</li>
          <li><strong>Doberman</strong>: vWD bleeding, occult DCM, cervical spondylomyelopathy</li>
          <li><strong>Boxer</strong>: ARVC sudden death, mast cell tumor, MCT</li>
          <li><strong>Golden Retriever</strong>: HSA, lymphoma, hip dysplasia, atopy, hypothyroid</li>
          <li><strong>Lab</strong>: hip dysplasia, obesity-related disease, lymphoma, idiopathic epilepsy, exercise-induced collapse</li>
          <li><strong>GSD</strong>: hip dysplasia, EPI, perianal fistula, bloat, DM, GME-like</li>
          <li><strong>Bulldog/Pug</strong>: BOAS, hiatal hernia, dystocia, skin fold dermatitis, eye disease</li>
          <li><strong>Yorkie/Maltese</strong>: PSS, tracheal collapse, dental disease, atlantoaxial</li>
          <li><strong>Bedlington Terrier</strong>: copper-storage hepatopathy</li>
          <li><strong>Dachshund</strong>: IVDD (chondrodystrophic), obesity-related issues</li>
          <li><strong>Persian</strong>: PKD, BOAS-like, dystocia</li>
          <li><strong>Maine Coon/Ragdoll</strong>: HCM (genetic test available)</li>
          <li><strong>Siamese/Burmese</strong>: amyloidosis, asthma, behavioral issues</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Approach to suspected genetic disease:</strong></p>
        <ol>
          <li>Detailed pedigree + family history</li>
          <li>Recognize breed-specific patterns</li>
          <li>Standard diagnostics (CBC, chem, imaging)</li>
          <li>Specific genetic testing (where available)</li>
          <li>Histopathology if needed</li>
        </ol>

        <p><strong>Genetic testing categories:</strong></p>
        <ul>
          <li><strong>Direct DNA tests (best — definitive)</strong>:
            <ul>
              <li>vWF (Doberman, Scottie, Shetland)</li>
              <li>MDR1 (Collie, Aussie, Sheltie)</li>
              <li>DM/SOD1 (GSD, Boxer, Corgi)</li>
              <li>HCM MYBPC3 (Maine Coon, Ragdoll)</li>
              <li>PKD (Persian)</li>
              <li>Hyperuricosuria (Dalmatian)</li>
              <li>Many breed-specific PRA mutations</li>
              <li>Multi-disease panels (Embark, Wisdom Panel, Optimal Selection)</li>
            </ul>
          </li>
          <li><strong>Phenotypic screening</strong>:
            <ul>
              <li>OFA (Orthopedic Foundation for Animals): hip, elbow, patella, cardiac, thyroid</li>
              <li>PennHIP (hip distraction radiography)</li>
              <li>CERF/OFA Eyes (annual ocular exam)</li>
              <li>Auscultation/echo (cardiac)</li>
              <li>BAER (deafness)</li>
            </ul>
          </li>
          <li><strong>Functional/biochemical</strong>:
            <ul>
              <li>vWF antigen levels</li>
              <li>TLI (EPI screening)</li>
              <li>Coag factor activity</li>
              <li>Enzyme assays (lysosomal storage)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Imaging for congenital/developmental:</strong></p>
        <ul>
          <li>OFA hip: 2 years old standard</li>
          <li>PennHIP: as young as 4 months</li>
          <li>Cardiac: echo for breeding stock screen</li>
          <li>MRI: SM/CM in CKCS (specialty)</li>
          <li>CT: brachycephalic airway, atlantoaxial, hydrocephalus</li>
        </ul>

        <p><strong>Pre-breeding screening recommendations:</strong></p>
        <ul>
          <li>Breed-specific panel testing</li>
          <li>OFA hip/elbow at 2 years</li>
          <li>Cardiac screen (especially CKCS, Boxer, Doberman)</li>
          <li>Eye exam annually (especially Collie, Cocker, others)</li>
          <li>Brucella screening</li>
          <li>vWF antigen testing in predisposed breeds</li>
        </ul>
      `,
      treatment: `
        <p><strong>General principles:</strong></p>
        <ol>
          <li>⭐ <strong>Genetic disease cannot be "cured"</strong> — manage signs/complications</li>
          <li>Some are highly manageable (vWD with planning, MDR1 with drug avoidance)</li>
          <li>Some are progressive/fatal (DM, lysosomal storage)</li>
          <li>Surgical correction of structural defects (PDA, PSS, BOAS)</li>
          <li>Lifestyle modifications</li>
          <li>Regular monitoring</li>
        </ol>

        <p><strong>Disease-specific approaches:</strong></p>

        <p><strong>Hip dysplasia:</strong></p>
        <ul>
          <li><strong>Conservative</strong>:
            <ul>
              <li>Weight management (#1)</li>
              <li>Controlled exercise</li>
              <li>NSAIDs, joint supplements</li>
              <li>Physical therapy, hydrotherapy</li>
              <li>Adequan injections</li>
              <li>Stem cell therapy (emerging)</li>
            </ul>
          </li>
          <li><strong>Surgical</strong>:
            <ul>
              <li>Juvenile pubic symphysiodesis (under 5 months)</li>
              <li>Triple/double pelvic osteotomy (TPO/DPO — under 1 year)</li>
              <li>Total hip replacement (THR — definitive, expensive)</li>
              <li>Femoral head ostectomy (FHO — small dogs/cats)</li>
            </ul>
          </li>
        </ul>

        <p><strong>BOAS surgery:</strong></p>
        <ul>
          <li>Stenotic nares: nostril enlargement</li>
          <li>Elongated soft palate: staphylectomy (laser preferred)</li>
          <li>Everted saccules: sacculectomy</li>
          <li>Earlier correction = better outcome</li>
          <li>Lifelong: weight management, avoid heat, harness (not collar)</li>
        </ul>

        <p><strong>PSS:</strong></p>
        <ul>
          <li>Medical stabilization first (lactulose, antibiotics, diet)</li>
          <li>Surgical attenuation (ameroid constrictor, cellophane, ligation)</li>
          <li>Some intrahepatic: interventional radiology embolization</li>
        </ul>

        <p><strong>Atlantoaxial subluxation:</strong></p>
        <ul>
          <li>Conservative: cervical splint × 6-8 weeks (mild cases)</li>
          <li>Surgical fixation: ventral cross pinning, dorsal fixation</li>
          <li>Avoid neck stress, no jumping, no neck pulls</li>
        </ul>

        <p><strong>Chiari-like + syringomyelia:</strong></p>
        <ul>
          <li>Pain management (gabapentin, pregabalin)</li>
          <li>Anti-inflammatories</li>
          <li>Diuretics (omeprazole — ↓ CSF production · controversial)</li>
          <li>Surgical decompression (foramen magnum decompression — specialty)</li>
        </ul>

        <p><strong>vWD:</strong></p>
        <ul>
          <li>Genetic screening before breeding</li>
          <li>DDAVP pre-surgery (Type I)</li>
          <li>Cryoprecipitate for active bleeding</li>
          <li>Avoid platelet-affecting drugs</li>
          <li>Owner education on bleeding signs</li>
        </ul>

        <p><strong>MDR1 mutation:</strong></p>
        <ul>
          <li>Genetic test before high-risk drugs</li>
          <li>⚠️ Avoid: ivermectin (high dose), milbemycin (heartworm dose OK), moxidectin, loperamide, vincristine</li>
          <li>Use safer alternatives</li>
          <li>Inform owners</li>
        </ul>

        <p><strong>Cerebellar hypoplasia (cat):</strong></p>
        <ul>
          <li>No specific treatment</li>
          <li>Adapt environment (low-walled litter box, food/water on floor)</li>
          <li>Most cats adapt well</li>
          <li>Prevention: vaccinate queens before pregnancy</li>
        </ul>

        <p><strong>Hydrocephalus:</strong></p>
        <ul>
          <li>Mild: monitor</li>
          <li>Severe: ventriculoperitoneal shunt (specialty surgery)</li>
          <li>Steroids (↓ CSF production temporarily)</li>
          <li>Anti-epileptic if seizures</li>
          <li>Variable prognosis</li>
        </ul>

        <p><strong>Genetic disease prevention through breeding:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">Breeding Strategies — "TEST"</span>
          <ul>
            <li><strong>T</strong>est breeding stock (all available genetic tests)</li>
            <li><strong>E</strong>liminate affected from breeding</li>
            <li><strong>S</strong>elect appropriate mate (carrier × clear, not carrier × carrier)</li>
            <li><strong>T</strong>rack pedigrees (avoid inbreeding, COI &lt; 10% ideal)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Carrier × Clear breeding eliminates affected (still produces 50% carriers)<br>
          📌 Clear × Clear ideal but risks reducing genetic diversity</p>
        </div>
      `,
      complications: `
        <p><strong>Disease-specific complications covered in respective entries</strong></p>

        <p><strong>General considerations:</strong></p>
        <ul>
          <li>Many genetic diseases co-occur (multiple problems in one patient)</li>
          <li>Lifelong management often required</li>
          <li>Anesthesia/drug considerations:
            <ul>
              <li>MDR1 dogs: avoid certain drugs</li>
              <li>vWD dogs: bleeding risk</li>
              <li>Brachycephalic: airway management</li>
              <li>BOAS dogs: post-anesthesia recovery monitoring</li>
            </ul>
          </li>
          <li>Quality of life: progressive degenerative diseases (DM, lysosomal storage)</li>
          <li>Owner emotional/financial burden</li>
          <li>Ethical considerations in breeding practices</li>
        </ul>

        <p><strong>Counseling owners of affected dog/cat:</strong></p>
        <ul>
          <li>Realistic prognosis</li>
          <li>Long-term management plan</li>
          <li>Cost expectations</li>
          <li>Quality of life monitoring</li>
          <li>End-of-life planning if progressive disease</li>
          <li>Discourage breeding affected animals</li>
        </ul>

        <p><strong>Counseling breeders:</strong></p>
        <ul>
          <li>Importance of genetic testing</li>
          <li>Pedigree analysis</li>
          <li>OFA registries, public databases</li>
          <li>Avoid popular sire effect</li>
          <li>Outcrossing to maintain genetic diversity</li>
          <li>Health-focused vs show-focused breeding</li>
        </ul>

        <p><strong>Ethical considerations:</strong></p>
        <ul>
          <li>Brachycephalic syndromes — debate on breed standards</li>
          <li>Selecting against deleterious traits</li>
          <li>Embryonic genetic editing (CRISPR — not yet clinical in vet)</li>
          <li>Open vs closed registries</li>
          <li>Breed survey participation</li>
        </ul>

        <p><strong>Future directions:</strong></p>
        <ul>
          <li>Whole-genome sequencing becoming affordable</li>
          <li>Polygenic risk scores</li>
          <li>Gene therapy (clinical trials in some diseases)</li>
          <li>Stem cell therapy</li>
          <li>Pharmacogenomics (drug selection by genotype)</li>
          <li>CRISPR-based corrections (research)</li>
          <li>Genome editing in breeding (controversial)</li>
        </ul>

        <p><strong>Resources for clinicians:</strong></p>
        <ul>
          <li>OMIA (Online Mendelian Inheritance in Animals)</li>
          <li>Embark, Wisdom Panel (commercial testing)</li>
          <li>OFA (Orthopedic Foundation for Animals)</li>
          <li>Breed club health committees</li>
          <li>WSAVA Hereditary Diseases Committee</li>
        </ul>
      `,
    },
  },

  {
    id: 'path-musculoskeletal',
    titleEn: 'Musculoskeletal Pathophysiology',
    titleTh: 'พยาธิสรีรวิทยาระบบกระดูกและกล้ามเนื้อ',
    type: 'topic',
    system: 'general',
    species: ['dog', 'cat'],
    tags: ['arthritis', 'OA', 'fracture', 'CCL', 'patellar luxation', 'panosteitis', 'myositis', 'OSA'],
    aliases: ['orthopedic', 'musculoskeletal', 'กระดูก', 'กล้ามเนื้อ'],
    source: 'Neumann — Small Animal Pathophysiology',
    sections: {
      definition: `
        <p><strong>Musculoskeletal system overview:</strong></p>
        <ul>
          <li><strong>Bones</strong>: structural support, mineral storage, hematopoiesis</li>
          <li><strong>Joints</strong>: synovial (mobile), fibrous, cartilaginous</li>
          <li><strong>Cartilage</strong>: articular (hyaline), fibrocartilage, elastic</li>
          <li><strong>Tendons</strong>: muscle to bone</li>
          <li><strong>Ligaments</strong>: bone to bone</li>
          <li><strong>Muscles</strong>: contractile units</li>
        </ul>

        <div class="mnemonic numbers">
          <span class="mnem-title">Major MSK Disease Categories</span>
          <div class="num-grid">
            <div class="num-card">
              <span class="num-big">DJD</span>
              <span class="num-label">Degenerative joint disease (OA)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Trauma</span>
              <span class="num-label">Fractures, ligament tears</span>
            </div>
            <div class="num-card">
              <span class="num-big">Devel</span>
              <span class="num-label">Developmental (HD, OCD, etc.)</span>
            </div>
            <div class="num-card">
              <span class="num-big">Inf/Inf</span>
              <span class="num-label">Infectious / inflammatory</span>
            </div>
          </div>
          <p class="mnem-tip">📌 + Neoplasia, metabolic (osteodystrophy), neuromuscular</p>
        </div>

        <p><strong>Joint anatomy basics:</strong></p>
        <ul>
          <li>Articular cartilage: aneural, avascular (gets nutrients from synovial fluid)</li>
          <li>Synovial membrane: produces synovial fluid (hyaluronic acid)</li>
          <li>Joint capsule: fibrous outer layer</li>
          <li>Subchondral bone: under cartilage, transmits load</li>
          <li>⭐ Once cartilage damaged → limited regeneration capacity</li>
        </ul>
      `,
      etiology: `
        <p><strong>Osteoarthritis (DJD) causes:</strong></p>
        <ul>
          <li><strong>Primary OA</strong>: age-related, idiopathic</li>
          <li><strong>Secondary OA (most cases)</strong>:
            <ul>
              <li>⭐ Hip dysplasia (large breed)</li>
              <li>⭐ CCL rupture (cranial cruciate ligament)</li>
              <li>Elbow dysplasia (FCP, OCD, UAP, elbow incongruity)</li>
              <li>Patellar luxation</li>
              <li>OCD (shoulder, elbow, stifle, hock)</li>
              <li>Joint trauma (fracture, sprain)</li>
              <li>Septic arthritis</li>
              <li>Immune-mediated arthritis (chronic IMPA)</li>
              <li>Obesity (mechanical + adipokine inflammation)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Fracture causes:</strong></p>
        <ul>
          <li>⭐ Trauma (HBC most common)</li>
          <li>Fall from height (cat especially)</li>
          <li>Bites (small dog by large dog)</li>
          <li>Pathologic fractures:
            <ul>
              <li>⭐ Osteosarcoma (large breed, distal radius/proximal humerus/distal femur)</li>
              <li>Multiple myeloma</li>
              <li>Hyperparathyroidism (renal or nutritional)</li>
              <li>Severe osteopenia (cat: hyperthyroid, hyperadrenal)</li>
            </ul>
          </li>
          <li>Stress fractures (rare in vet — racing greyhounds)</li>
        </ul>

        <p><strong>CCL (cranial cruciate ligament) rupture:</strong></p>
        <ul>
          <li>⭐ #1 orthopedic surgery in dogs</li>
          <li>Degenerative process (NOT acute injury most cases)</li>
          <li>Predisposed: Lab, Rottweiler, Newfoundland, large breeds</li>
          <li>Cat: less common, usually traumatic</li>
          <li>Risk factors: obesity, neutering (some studies), hyperextension trauma</li>
          <li>40-60% will rupture contralateral within 1-2 years</li>
        </ul>

        <p><strong>Patellar luxation:</strong></p>
        <ul>
          <li><strong>Medial (toy/small breed)</strong>: ⭐ most common
            <ul>
              <li>Yorkie, Maltese, Pomeranian, Chihuahua</li>
              <li>Often bilateral, congenital</li>
            </ul>
          </li>
          <li><strong>Lateral (large breed)</strong>:
            <ul>
              <li>Less common</li>
              <li>Often associated with hip dysplasia</li>
            </ul>
          </li>
          <li>Causes: shallow trochlear groove, malalignment, weak medial retinaculum</li>
        </ul>

        <p><strong>Panosteitis ("growing pains"):</strong></p>
        <ul>
          <li>Self-limiting young large breed (5-18 months)</li>
          <li>Predisposed: ⭐ GSD, Basset Hound, Doberman</li>
          <li>Idiopathic, possibly viral/genetic</li>
          <li>"Shifting leg lameness"</li>
          <li>Resolves spontaneously</li>
        </ul>

        <p><strong>HOD (hypertrophic osteodystrophy):</strong></p>
        <ul>
          <li>Young large breed (3-7 months)</li>
          <li>Predisposed: Weimaraner, Lab, Boxer, GSD</li>
          <li>Possibly post-vaccinal, viral, dietary (over-supplementation)</li>
          <li>Bilateral metaphyseal painful swelling</li>
          <li>Fever, anorexia, lameness</li>
        </ul>

        <p><strong>Hypertrophic osteopathy (Marie's disease):</strong></p>
        <ul>
          <li>Periosteal proliferation of long bones</li>
          <li>⭐ <strong>Paraneoplastic — usually thoracic mass</strong> (lung tumor, esophageal, less commonly other)</li>
          <li>Can be from heartworm, esophageal granuloma (Spirocerca)</li>
        </ul>

        <p><strong>Inflammatory/infectious arthritis:</strong></p>
        <ul>
          <li><strong>Septic (bacterial) arthritis</strong>: usually monoarthritis, post-trauma/surgery, hematogenous</li>
          <li><strong>Immune-mediated polyarthritis (IMPA)</strong>:
            <ul>
              <li>Type I (idiopathic)</li>
              <li>Type II (associated with infection elsewhere)</li>
              <li>Type III (associated with GI disease)</li>
              <li>Type IV (associated with neoplasia)</li>
            </ul>
          </li>
          <li><strong>Erosive (Rheumatoid-like)</strong>: rare, severe joint destruction</li>
          <li><strong>SLE</strong>: includes polyarthritis</li>
          <li><strong>Lyme disease</strong>: endemic areas</li>
          <li><strong>Ehrlichia, Anaplasma</strong>: tick-borne arthritis</li>
        </ul>

        <p><strong>Myopathies:</strong></p>
        <ul>
          <li><strong>Masticatory muscle myositis (MMM)</strong>: autoimmune, type 2M fiber-specific</li>
          <li><strong>Polymyositis</strong>: idiopathic, immune-mediated</li>
          <li><strong>Inherited myopathies</strong>: muscular dystrophy (Golden Retriever model), centronuclear (Lab)</li>
          <li><strong>Toxoplasma/Neospora myositis</strong></li>
          <li><strong>Endocrine</strong>: hypothyroid, Cushing's myopathy</li>
        </ul>

        <p><strong>Bone neoplasia:</strong></p>
        <ul>
          <li>⭐ Osteosarcoma (most common)
            <ul>
              <li>Large/giant breeds: Great Dane, Rottweiler, Greyhound, Saint Bernard</li>
              <li>Distal radius, proximal humerus (forelimb)</li>
              <li>Distal femur, proximal tibia (hindlimb)</li>
              <li>"Away from elbow, toward knee"</li>
            </ul>
          </li>
          <li>Chondrosarcoma (axial more common)</li>
          <li>Fibrosarcoma</li>
          <li>Hemangiosarcoma (bone)</li>
          <li>Multiple myeloma (lytic lesions)</li>
        </ul>
      `,
      pathophysiology: `
        <p><strong>Osteoarthritis pathophysiology cascade:</strong></p>
        <ol>
          <li>Initial insult (mechanical, traumatic, immune, metabolic)</li>
          <li>Cartilage damage → release of catabolic mediators (IL-1, TNF, MMPs)</li>
          <li>Cartilage matrix degradation → ↓ proteoglycan, ↓ collagen</li>
          <li>Subchondral bone changes (sclerosis, cysts)</li>
          <li>Synovitis (low-grade chronic inflammation)</li>
          <li>Synovial fluid changes (↓ HA, ↑ inflammatory mediators)</li>
          <li>Osteophyte formation (compensatory)</li>
          <li>Joint capsule fibrosis</li>
          <li>Periarticular muscle atrophy</li>
          <li>Pain, stiffness, decreased function</li>
          <li>Self-perpetuating cycle</li>
        </ol>

        <p><strong>OA-induced pain mechanisms:</strong></p>
        <ul>
          <li><strong>Nociceptive</strong>: from joint structures (capsule, subchondral bone, synovium)</li>
          <li><strong>Inflammatory</strong>: PGs, bradykinin, substance P</li>
          <li><strong>Neuropathic</strong>: peripheral + central sensitization (chronic)</li>
          <li>Cartilage itself: aneural, but underlying bone has nociceptors</li>
        </ul>

        <p><strong>CCL pathophysiology:</strong></p>
        <ol>
          <li>Chronic degeneration of ligament fibers (genetic + biomechanical)</li>
          <li>Partial tears → progressive instability</li>
          <li>Complete rupture (often during normal activity)</li>
          <li>Cranial drawer + tibial thrust → instability</li>
          <li>Meniscal injury (common — medial meniscus often torn)</li>
          <li>OA progression even after surgical stabilization</li>
        </ol>

        <p><strong>Fracture healing phases:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Fracture Healing Stages</span>
          <table>
            <tr><th>Phase</th><th>Time</th><th>Process</th></tr>
            <tr><td><strong>Hematoma</strong></td><td>Hours-days</td><td>Bleeding, clot formation</td></tr>
            <tr><td><strong>Inflammation</strong></td><td>Days 1-5</td><td>Cell migration, cytokine release</td></tr>
            <tr><td><strong>Soft callus</strong></td><td>Weeks 2-3</td><td>Cartilage + woven bone</td></tr>
            <tr><td><strong>Hard callus</strong></td><td>Weeks 3-12</td><td>Endochondral ossification</td></tr>
            <tr><td><strong>Remodeling</strong></td><td>Months-years</td><td>Lamellar bone, restoration of contour</td></tr>
          </table>
          <p class="mnem-tip">📌 Healing requires: stability, vascularity, viable bone fragments, infection-free environment<br>
          📌 ⭐ Failed healing = "Non-union" — needs surgical revision</p>
        </div>

        <p><strong>Septic arthritis pathophysiology:</strong></p>
        <ol>
          <li>Bacterial entry (penetrating wound, surgery, hematogenous, extension)</li>
          <li>Replication in synovial fluid (rich nutrient environment)</li>
          <li>Neutrophil influx → enzymes destroy cartilage</li>
          <li>↑ Joint pressure (effusion) → cartilage compression</li>
          <li>Rapid joint destruction (within days if untreated)</li>
          <li>Common: Staph, Strep, E. coli</li>
        </ol>

        <p><strong>IMPA pathophysiology:</strong></p>
        <ul>
          <li>Type III hypersensitivity (immune complex)</li>
          <li>Antigen unknown (Type I) or related to systemic disease (Types II-IV)</li>
          <li>Joint deposition → complement → neutrophil recruitment</li>
          <li>Synovial inflammation</li>
          <li>⭐ <strong>Non-erosive in most cases</strong> (cartilage spared)</li>
          <li>Multiple joints affected (polyarthritis)</li>
        </ul>

        <p><strong>Osteosarcoma pathophysiology:</strong></p>
        <ol>
          <li>Malignant transformation of osteoblasts</li>
          <li>Most likely from microtrauma + genetic predisposition (large/giant breed)</li>
          <li>Cells produce abnormal osteoid + bone</li>
          <li>Aggressive local invasion</li>
          <li>Mixed lytic + proliferative pattern radiographically</li>
          <li>"Sunburst" periosteal reaction</li>
          <li>"Codman's triangle"</li>
          <li>⭐ Very early hematogenous metastasis to lung (90%+ at presentation, but mostly micrometastasis)</li>
          <li>Severe bone pain (release of cytokines, periosteal stretching)</li>
        </ol>

        <p><strong>Muscle injury / myopathy:</strong></p>
        <ul>
          <li>Mechanical: strain, contusion, laceration</li>
          <li>Muscle tissue regenerates from satellite cells</li>
          <li>Severe damage → fibrosis (replacing functional tissue)</li>
          <li>Rhabdomyolysis: massive muscle damage → myoglobinuria → AKI risk</li>
          <li>Myositis: lymphocytic infiltration, autoimmune destruction</li>
        </ul>

        <p><strong>Hyperparathyroidism (renal secondary) bone effects:</strong></p>
        <ol>
          <li>↑ PTH → osteoclast activation</li>
          <li>Bone resorption</li>
          <li>"Rubber jaw" (fibrous osteodystrophy in young) — classic</li>
          <li>Loss of mandibular bone density on radiograph</li>
          <li>Pathologic fractures</li>
        </ol>
      `,
      symptoms: `
        <p><strong>General orthopedic signs:</strong></p>
        <ul>
          <li>Lameness (graded 1-5)</li>
          <li>Reluctance to exercise / stiffness on rising</li>
          <li>Decreased range of motion</li>
          <li>Joint swelling, effusion, heat</li>
          <li>Crepitus (palpable/audible cracking)</li>
          <li>Pain on manipulation</li>
          <li>Muscle atrophy (chronic disuse)</li>
          <li>Postural changes (shifting weight, sit-stand difficulty)</li>
          <li>Behavioral: irritability, hiding, decreased activity</li>
        </ul>

        <p><strong>OA classic presentation:</strong></p>
        <ul>
          <li>⭐ Older patient (or younger with cause like dysplasia)</li>
          <li>Morning stiffness improves with movement</li>
          <li>Worse after heavy exercise or rest</li>
          <li>Worse in cold/damp weather</li>
          <li>Insidious onset, gradually progressive</li>
          <li>May affect quality of life significantly</li>
          <li>Multiple joints often (especially with HD)</li>
        </ul>

        <p><strong>CCL rupture signs:</strong></p>
        <ul>
          <li>Sudden severe HL lameness (acute rupture)</li>
          <li>Or chronic intermittent (partial tear)</li>
          <li>Stifle effusion</li>
          <li>⭐ <strong>Cranial drawer test</strong>: cranial movement of tibia relative to femur</li>
          <li>⭐ <strong>Tibial compression test</strong>: pulled tibial thrust on flexion</li>
          <li>"Sit test": sits with affected leg out</li>
          <li>Medial buttress (chronic): firm swelling on medial stifle (osteophyte)</li>
          <li>Meniscal click on flexion-extension (if torn)</li>
        </ul>

        <p><strong>Hip dysplasia signs:</strong></p>
        <ul>
          <li>Bunny-hopping gait</li>
          <li>Difficulty rising</li>
          <li>Reluctance to jump, stairs</li>
          <li>Lameness (HL)</li>
          <li>Muscle atrophy of HL</li>
          <li>Ortolani sign (juvenile · subluxation reducible)</li>
          <li>Pain on hip extension</li>
          <li>Limited range of motion</li>
        </ul>

        <p><strong>Patellar luxation grading:</strong></p>

        <div class="mnemonic table-aid">
          <span class="mnem-title">Patellar Luxation Grading</span>
          <table>
            <tr><th>Grade</th><th>Description</th></tr>
            <tr><td><strong>1</strong></td><td>Manually luxatable, returns spontaneously</td></tr>
            <tr><td><strong>2</strong></td><td>Occasionally luxates, returns with extension</td></tr>
            <tr><td><strong>3</strong></td><td>Permanently luxated, can be reduced manually</td></tr>
            <tr><td><strong>4</strong></td><td>Permanently luxated, cannot be reduced</td></tr>
          </table>
          <p class="mnem-tip">📌 ⭐ Grade 1-2 often subclinical · Grade 3-4 usually need surgery</p>
        </div>

        <p><strong>Septic arthritis signs:</strong></p>
        <ul>
          <li>⚠️ Acute severe lameness (often non-weight bearing)</li>
          <li>Joint hot, swollen, painful</li>
          <li>Fever, lethargy</li>
          <li>Usually monoarthritis</li>
          <li>Recent surgery/wound history</li>
        </ul>

        <p><strong>IMPA signs:</strong></p>
        <ul>
          <li>Shifting / multi-joint lameness</li>
          <li>Fever (often present)</li>
          <li>Lethargy, anorexia</li>
          <li>Stiffness, reluctance to move</li>
          <li>Joint effusion (multiple joints — carpus, tarsus, stifle)</li>
          <li>"Walking on eggshells" appearance</li>
          <li>Often misdiagnosed as "depression" or vague illness</li>
        </ul>

        <p><strong>Osteosarcoma signs:</strong></p>
        <ul>
          <li>⚠️ Persistent severe lameness (often acute onset)</li>
          <li>Localized firm swelling (large/giant breed)</li>
          <li>"Away from elbow, toward knee"</li>
          <li>Pain on palpation</li>
          <li>Pathologic fracture possible</li>
          <li>Older dog (median 7-9 years)</li>
          <li>Resistance to NSAID alone</li>
          <li>Sometimes systemic signs late</li>
        </ul>

        <p><strong>Masticatory muscle myositis (MMM):</strong></p>
        <ul>
          <li>⭐ Acute: swollen, painful jaw muscles, ↓ jaw opening, fever</li>
          <li>Chronic: muscle atrophy, fibrosis, locked jaw ("trismus")</li>
          <li>Cannot open mouth even under anesthesia (chronic)</li>
          <li>Predisposed: GSD, Doberman, Cavalier, Golden, Lab</li>
        </ul>
      `,
      diagnosis: `
        <p><strong>Orthopedic exam steps:</strong></p>
        <ol>
          <li>Observe gait (walk, trot, sit-stand)</li>
          <li>Standing palpation (compare bilateral)</li>
          <li>Lateral recumbency exam (each joint systematic)</li>
          <li>Range of motion + pain assessment</li>
          <li>Specific tests (drawer, Ortolani, cranial thrust)</li>
        </ol>

        <p><strong>Imaging:</strong></p>
        <ul>
          <li><strong>Radiographs (basics)</strong>:
            <ul>
              <li>2 views minimum</li>
              <li>Compare contralateral</li>
              <li>OA: osteophytes, joint space narrowing, subchondral sclerosis</li>
              <li>Fracture: location, type, comminution</li>
              <li>OSA: lytic + proliferative, "sunburst" periosteal, Codman's triangle</li>
              <li>Hip dysplasia: subluxation, OA changes</li>
            </ul>
          </li>
          <li><strong>Stress radiographs / PennHIP</strong>: hip laxity assessment</li>
          <li><strong>CT</strong>:
            <ul>
              <li>Complex fractures</li>
              <li>Elbow dysplasia (FCP detection — gold standard)</li>
              <li>OCD lesions</li>
              <li>Spinal disease (lumbosacral)</li>
            </ul>
          </li>
          <li><strong>MRI</strong>:
            <ul>
              <li>Soft tissue (meniscus, ligaments)</li>
              <li>Tumor staging</li>
              <li>Limited availability</li>
            </ul>
          </li>
          <li><strong>Bone scan / PET</strong>: tumor staging, occult lesions (rare in vet)</li>
          <li><strong>Ultrasound</strong>: tendon, muscle, joint effusion (some limitations)</li>
        </ul>

        <p><strong>Joint sampling (arthrocentesis):</strong></p>
        <ul>
          <li>Indication: monoarthritis, polyarthritis workup, suspected septic/IMPA</li>
          <li>Sample multiple joints if polyarthritis suspected (carpus, tarsus, stifle)</li>
          <li>Synovial fluid analysis:
            <ul>
              <li>Color, viscosity</li>
              <li>Cytology (TNCC, cell types)</li>
              <li>Culture (if septic suspected)</li>
              <li>Crystal analysis (rare in vet)</li>
            </ul>
          </li>
          <li>Normal: clear, viscous, &lt; 3000/μL TNCC, &lt; 10% neutrophils</li>
          <li>Septic: ⭐ degenerate neutrophils, intracellular bacteria, &gt; 50,000/μL</li>
          <li>IMPA: &gt; 5,000-10,000/μL, &gt; 12% neutrophils (non-degenerate)</li>
          <li>OA: mildly increased TNCC, mostly mononuclear</li>
        </ul>

        <p><strong>Bloodwork in MSK disease:</strong></p>
        <ul>
          <li>CBC (infection, IMPA inflammation)</li>
          <li>Chemistry (renal function for NSAIDs, ALP elevated in young growing or bone disease)</li>
          <li>CK (myositis, rhabdomyolysis)</li>
          <li>Tick-borne panel (geographic)</li>
          <li>ANA (lupus arthritis)</li>
          <li>2M antibody (MMM specific)</li>
          <li>Anti-AChR (myasthenia gravis)</li>
          <li>Toxoplasma/Neospora (myositis)</li>
        </ul>

        <p><strong>Specific tests:</strong></p>
        <ul>
          <li>Ortolani sign (HD juvenile screening)</li>
          <li>Drawer/thrust (CCL)</li>
          <li>Patellar luxation manipulation</li>
          <li>Hip extension (HD pain)</li>
          <li>Sit test, square stand</li>
          <li>Force plate analysis (research/specialty)</li>
          <li>Goniometry (joint angle measurement)</li>
        </ul>

        <p><strong>Biopsy:</strong></p>
        <ul>
          <li>Bone (suspect OSA): Jamshidi needle or open biopsy</li>
          <li>⚠️ Risk of pathologic fracture from biopsy in OSA</li>
          <li>Muscle biopsy (myopathies)</li>
          <li>Often more useful AFTER staging (chest XR for OSA)</li>
        </ul>
      `,
      treatment: `
        <p><strong>OA management — multimodal:</strong></p>

        <div class="mnemonic thai">
          <span class="mnem-title">OA Management Pillars — "WEMP"</span>
          <ul>
            <li><strong>W</strong>eight management (#1 modifiable factor)</li>
            <li><strong>E</strong>xercise (controlled, low-impact)</li>
            <li><strong>M</strong>edical therapy (NSAIDs, supplements)</li>
            <li><strong>P</strong>hysical rehabilitation (PT, hydrotherapy)</li>
          </ul>
          <p class="mnem-tip">📌 ⭐ Weight loss = most evidence for improvement<br>
          📌 NSAID + JS supplement + weight loss = standard combination</p>
        </div>

        <p><strong>OA medical therapy:</strong></p>
        <ul>
          <li><strong>NSAIDs (1st line)</strong>:
            <ul>
              <li>Carprofen 2.2 mg/kg q12h (dog)</li>
              <li>Meloxicam 0.1 mg/kg q24h (dog)</li>
              <li>Robenacoxib (cat-friendly · 1 mg/kg/day cat short-term)</li>
              <li>Galliprant (grapiprant) — newer, EP4 receptor antagonist</li>
              <li>⚠️ Monitor: GI, renal, hepatic</li>
              <li>⚠️ Cat: very limited NSAID options · NEVER acetaminophen</li>
            </ul>
          </li>
          <li><strong>Adjunct analgesics</strong>:
            <ul>
              <li>Gabapentin 10-20 mg/kg q8h (neuropathic pain)</li>
              <li>Amantadine 3-5 mg/kg q24h (NMDA antagonist, central sensitization)</li>
              <li>Tramadol (limited evidence in dogs, helpful in cats)</li>
              <li>Opioids (acute exacerbations)</li>
            </ul>
          </li>
          <li><strong>Joint supplements</strong>:
            <ul>
              <li>Glucosamine + chondroitin (cosequin, dasuquin)</li>
              <li>Omega-3 fatty acids (EPA/DHA)</li>
              <li>MSM</li>
              <li>Hyaluronic acid</li>
              <li>Mostly limited high-quality evidence but generally safe</li>
            </ul>
          </li>
          <li><strong>Adequan (PSGAG)</strong>: IM injection 4 mg/kg q3-5 days × 4 weeks · cartilage-protective</li>
          <li><strong>Anti-NGF antibody (Librela/Solensia)</strong>: monthly injection, 4-7 days onset, multi-month effect</li>
          <li><strong>Stem cell therapy</strong>: emerging, expensive</li>
          <li><strong>PRP (platelet-rich plasma)</strong>: emerging</li>
        </ul>

        <p><strong>OA non-pharmacologic:</strong></p>
        <ul>
          <li>Weight loss (target lean BCS 4-5/9)</li>
          <li>Controlled exercise: leash walks, swim</li>
          <li>Avoid: high-impact, twisting, jumping</li>
          <li>Joint-supportive bedding (orthopedic foam)</li>
          <li>Slip-resistant flooring</li>
          <li>Ramps for stairs/car</li>
          <li>Physical therapy (laser, ultrasound, manual)</li>
          <li>Hydrotherapy</li>
          <li>Acupuncture</li>
          <li>Cold laser therapy</li>
        </ul>

        <p><strong>CCL repair:</strong></p>
        <ul>
          <li>Conservative: small dog (&lt; 15 kg), partial tear, owner-limited (rest, NSAIDs, PT, weight)</li>
          <li>Surgical (recommended for &gt; 15 kg):
            <ul>
              <li>⭐ <strong>TPLO (Tibial Plateau Leveling Osteotomy)</strong>: gold standard for medium-large dogs</li>
              <li>TTA (Tibial Tuberosity Advancement)</li>
              <li>CBLO, CCWO (variations)</li>
              <li>Lateral suture (smaller dogs)</li>
              <li>Meniscal exploration + treatment if torn</li>
            </ul>
          </li>
          <li>Post-op: 8-12 weeks restricted activity, gradual return</li>
        </ul>

        <p><strong>Hip dysplasia surgical options:</strong></p>
        <ul>
          <li>Juvenile (&lt; 5 mo): juvenile pubic symphysiodesis (JPS)</li>
          <li>5-10 months: TPO/DPO (triple/double pelvic osteotomy)</li>
          <li>Older: Total hip replacement (THR — best functional outcome, expensive)</li>
          <li>Small dog: FHO (femoral head ostectomy) — salvage</li>
          <li>Conservative: weight management, NSAIDs, supplements (most cases managed conservatively)</li>
        </ul>

        <p><strong>Patellar luxation surgery:</strong></p>
        <ul>
          <li>Combination of:
            <ul>
              <li>Tibial tuberosity transposition</li>
              <li>Trochlear groove deepening (wedge or block)</li>
              <li>Lateral retinacular imbrication</li>
              <li>Medial retinacular release</li>
            </ul>
          </li>
          <li>Grade 3-4 typically need surgery</li>
          <li>Grade 1-2 often managed conservatively if asymptomatic</li>
        </ul>

        <p><strong>Fracture management:</strong></p>
        <ul>
          <li>Conservative: cage rest + splint (rare, simple non-displaced)</li>
          <li>Surgical (most cases):
            <ul>
              <li>External coaptation (cast/splint) — limited indications</li>
              <li>External skeletal fixation (ESF)</li>
              <li>Plate + screws</li>
              <li>Intramedullary pin</li>
              <li>Interlocking nail</li>
              <li>Combinations</li>
            </ul>
          </li>
          <li>Specific fracture-specific approaches</li>
          <li>Pain management critical</li>
          <li>Post-op rehab</li>
        </ul>

        <p><strong>Septic arthritis:</strong></p>
        <ul>
          <li>⚠️ Emergency — joint destruction rapid</li>
          <li>Joint lavage (open or arthroscopic)</li>
          <li>Long-term IV antibiotics → oral (4-6 weeks total)</li>
          <li>Culture-guided</li>
          <li>NSAIDs after infection controlled</li>
          <li>Drain placement if abscess</li>
        </ul>

        <p><strong>IMPA treatment:</strong></p>
        <ul>
          <li>Identify Type II-IV underlying disease, treat that</li>
          <li>Prednisolone 2 mg/kg/day → taper over months</li>
          <li>+ Cyclosporine, azathioprine (refractory)</li>
          <li>Pain management</li>
          <li>Most respond, but relapses common</li>
        </ul>

        <p><strong>Osteosarcoma management:</strong></p>
        <ul>
          <li><strong>Standard of care</strong>:
            <ul>
              <li>Amputation (limb-sparing alternative for small lesions, distal radius)</li>
              <li>+ Adjuvant chemotherapy (carboplatin, doxorubicin)</li>
              <li>Median survival: 10-12 months</li>
            </ul>
          </li>
          <li><strong>Without chemo</strong>: median 4-6 months (death usually from metastasis)</li>
          <li><strong>Palliative</strong> (declined surgery):
            <ul>
              <li>Bisphosphonates (pamidronate, zoledronate) — bone pain</li>
              <li>NSAIDs + opioids + gabapentin</li>
              <li>Radiation (palliative — pain control)</li>
              <li>Median 3-4 months</li>
            </ul>
          </li>
          <li>Cat osteosarcoma: better prognosis (less aggressive metastasis)</li>
        </ul>

        <p><strong>Masticatory muscle myositis:</strong></p>
        <ul>
          <li>2M Ab confirms diagnosis</li>
          <li>Prednisolone 1-2 mg/kg/day (immunosuppressive)</li>
          <li>Taper over months</li>
          <li>Adjunct: azathioprine, cyclosporine</li>
          <li>Early treatment = better prognosis (acute &gt; chronic with fibrosis)</li>
          <li>Maintenance lifelong often needed</li>
        </ul>
      `,
      complications: `
        <p><strong>OA complications:</strong></p>
        <ul>
          <li>Progressive disability</li>
          <li>Quality of life decline</li>
          <li>Compensatory injuries (other limbs)</li>
          <li>Obesity worsening (vicious cycle)</li>
          <li>NSAID toxicity (GI ulcer, AKI, hepatic)</li>
          <li>Behavioral changes (depression, irritability)</li>
        </ul>

        <p><strong>Surgical complications:</strong></p>
        <ul>
          <li>Implant failure (loosening, migration, breakage)</li>
          <li>Infection (osteomyelitis)</li>
          <li>Non-union, malunion, delayed union</li>
          <li>Anesthesia risks</li>
          <li>Re-injury</li>
          <li>Specific to procedure (TPLO: implant infection, fracture, contralateral CCL)</li>
        </ul>

        <p><strong>Fracture-specific complications:</strong></p>
        <ul>
          <li>Compartment syndrome (rare)</li>
          <li>Fat embolism (rare, large bone)</li>
          <li>Nerve injury (radial, sciatic, peroneal)</li>
          <li>Vascular compromise</li>
          <li>Joint stiffness post-immobilization</li>
          <li>Growth plate damage in young (limb deformity)</li>
        </ul>

        <p><strong>Septic arthritis complications:</strong></p>
        <ul>
          <li>Permanent cartilage destruction</li>
          <li>Severe OA aftermath</li>
          <li>Joint contracture</li>
          <li>Septicemia</li>
          <li>Need for arthrodesis if severe</li>
        </ul>

        <p><strong>Osteosarcoma complications:</strong></p>
        <ul>
          <li>Pathologic fracture</li>
          <li>Severe pain (refractory)</li>
          <li>Pulmonary metastasis (mostly cause of death)</li>
          <li>Other metastasis: bone, soft tissue</li>
          <li>Hypertrophic osteopathy (paraneoplastic)</li>
          <li>Amputation adjustment issues</li>
        </ul>

        <p><strong>Prognosis summary:</strong></p>
        <ul>
          <li>OA: progressive, lifelong management, generally manageable</li>
          <li>CCL with surgery: 85-90% return to good function</li>
          <li>Hip dysplasia: variable, conservative often effective</li>
          <li>Patellar luxation: surgical correction usually successful (90%+)</li>
          <li>Simple fractures with surgery: excellent</li>
          <li>Complex/comminuted fractures: variable</li>
          <li>Septic arthritis: good if treated early</li>
          <li>IMPA: most respond, 60-80% sustained remission</li>
          <li>Osteosarcoma: poor (year median with treatment)</li>
          <li>MMM: good if treated early, guarded if chronic with fibrosis</li>
        </ul>

        <p><strong>Prevention:</strong></p>
        <ul>
          <li>Genetic screening of breeding stock (HD, ED)</li>
          <li>Appropriate growth diets (large breed puppy formulas — slow growth)</li>
          <li>Avoid excessive exercise in growing puppies</li>
          <li>Maintain lean body condition</li>
          <li>Weight management throughout life</li>
          <li>Joint-friendly exercise programs</li>
          <li>Early detection (annual exams, breed screening)</li>
          <li>Spay/neuter timing considerations (some studies link early neuter + CCL/OSA)</li>
        </ul>
      `,
    },
  },

];

console.log('✅ Pathophysiology data loaded:', window.PATHOPHYSIOLOGY_DATA.length, 'entries');
