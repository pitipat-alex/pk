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

];

console.log('✅ Pathophysiology data loaded:', window.PATHOPHYSIOLOGY_DATA.length, 'entries');
