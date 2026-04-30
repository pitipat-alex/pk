/* ============================================================
   SURGERY HANDBOOK DATA
   Source: Tobias & Johnston, Veterinary Surgery: Small Animal, 2nd Ed
   Personal clinical reference for Alex
============================================================ */

window.SURGERY_ENTRIES = [

  /* ============================================================
     UROGENITAL — Reproductive
  ============================================================ */
  {
    id: 'ovariohysterectomy',
    titleEn: 'Ovariohysterectomy (OHE) / Spay',
    titleTh: 'OHE — ทำหมันเพศเมีย',
    type: 'surgery',
    system: 'urogenital',
    species: ['dog', 'cat'],
    tags: ['OHE', 'spay', 'ovariohysterectomy', 'ovariectomy', 'pyometra', 'mammary tumor prevention', 'pedicle ligation', 'broad ligament', 'uterine body', 'estrus'],
    aliases: ['spay', 'OHE', 'ทำหมัน', 'ผ่าตัดทำหมันตัวเมีย'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Ovaries/Uterus',
    sections: {
      indications: `
        <ul>
          <li><strong>Routine elective sterilization</strong> ✨ — most common indication
            <ul>
              <li>Ideal timing: before 1st estrus → 99% reduction in mammary tumor risk ✨</li>
              <li>Before 2nd estrus → 92% reduction</li>
              <li>Pediatric spay (8-16 weeks) safe in shelter setting</li>
            </ul>
          </li>
          <li><strong>Pyometra ✗</strong> — therapeutic emergency OHE</li>
          <li>Mucometra / hydrometra</li>
          <li>Uterine neoplasia (rare in dog/cat — mostly benign leiomyoma)</li>
          <li>Severe vaginal hyperplasia (estrogen-driven; spay eliminates)</li>
          <li>Dystocia — concurrent with C-section</li>
          <li>Ovarian neoplasia / cysts</li>
          <li>Estrogen toxicity from ovarian remnant or tumor</li>
          <li>Behavioral/management:
            <ul>
              <li>Eliminating estrus cycles</li>
              <li>Reducing roaming behavior</li>
              <li>Pseudopregnancy prevention</li>
            </ul>
          </li>
          <li>Diabetes mellitus (intact diabetic — progesterone antagonizes insulin)</li>
        </ul>
        <p><strong>Ovariectomy (OE) — alternative ✨:</strong></p>
        <ul>
          <li>Removes ovaries only (not uterus)</li>
          <li>Equivalent outcomes for elective spay (Europe favors OE)</li>
          <li>Smaller incision, faster, less bleeding</li>
          <li>Stump pyometra extremely rare if no estrogen source</li>
          <li>NOT appropriate for: pyometra, uterine pathology</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamic instability not yet stabilized (acute pyometra → resuscitate first)</li>
          <li>Severe untreated coagulopathy</li>
          <li>Significant uncontrolled comorbidity (uncompensated cardiac dz, severe metabolic derangement)</li>
          <li>During estrus (relative — markedly increased vascularity, friable tissue, more bleeding) ⚠️
            <ul>
              <li>Postpone elective surgery 6-8 weeks if possible</li>
              <li>Emergency lepto/pyometra: proceed regardless</li>
            </ul>
          </li>
          <li>Late pregnancy (relative — discuss with owner; ethically complex)</li>
          <li>Working / breeding-aged dogs intended for breeding</li>
          <li>Pediatric in giant breeds — controversial; some evidence early spay before growth plate closure increases OSA, CCL rupture, hemangiosarcoma risk</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Signalment + history (heat cycles, breeding history, prior surgeries)</li>
          <li>PE (cardiac auscultation, hydration, BCS)</li>
          <li>CBC + biochem panel</li>
          <li>UA</li>
          <li>If pyometra: + thoracic radiograph, abdominal US, electrolytes, BG</li>
          <li>Coag if breed predisposed (vWD — Doberman, Scottie, etc.)</li>
          <li>Pre-anesthetic ECG if older or cardiac concerns</li>
        </ul>

        <p><strong>2. Patient prep:</strong></p>
        <ul>
          <li>NPO: 8-12h adult dogs/cats (don't withhold &gt; 12h — prone to GERD/regurgitation)</li>
          <li>Pediatric (&lt; 4 mo): NPO 4-6h only (hypoglycemia risk)</li>
          <li>Water until 2h pre-op</li>
          <li>Empty bladder pre-op (gentle expression or just clip after voiding)</li>
          <li>IV catheter (cephalic typical)</li>
          <li>Pre-warm OR + recovery</li>
        </ul>

        <p><strong>3. Anesthesia plan ✨:</strong></p>
        <ul>
          <li><strong>Premedication:</strong>
            <ul>
              <li>Healthy young: methadone 0.2-0.3 mg/kg + dexmedetomidine 5-10 mcg/kg IM</li>
              <li>Or hydromorphone 0.05-0.1 mg/kg + acepromazine 0.01-0.03 mg/kg IM</li>
              <li>Cat: butorphanol 0.2-0.4 mg/kg + dexmedetomidine 5-10 mcg/kg + midazolam 0.2 mg/kg IM ("kitty magic")</li>
            </ul>
          </li>
          <li><strong>Induction:</strong>
            <ul>
              <li>Propofol 4-6 mg/kg IV titrated to effect</li>
              <li>Or alfaxalone 1-2 mg/kg IV</li>
              <li>Mask induction not recommended in healthy young (stress, environmental contamination)</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong>
            <ul>
              <li>Isoflurane or sevoflurane in 100% O2</li>
              <li>Endotracheal intubation; cuff inflated</li>
              <li>Mechanical ventilation if procedure &gt; 30 min</li>
            </ul>
          </li>
          <li><strong>IV fluids:</strong> LRS or other balanced crystalloid 5 mL/kg/h (lower than older 10 mL/kg/h recommendation — reduce edema/dilution)</li>
          <li><strong>Monitoring:</strong>
            <ul>
              <li>SpO2, ECG, BP (NIBP min)</li>
              <li>EtCO2 + temperature</li>
              <li>Heart rate, respiratory rate</li>
              <li>Anesthetic depth (jaw tone, eye position, palpebral)</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Surgical site prep:</strong></p>
        <ul>
          <li>Clip ventral abdomen: xiphoid → pubis; lateral to last nipple line</li>
          <li>Aseptic prep: chlorhexidine scrub × 3 cycles → final alcohol/chlorhexidine solution wipe</li>
          <li>Drape: 4 corner towels + fenestrated drape, or single fenestrated drape</li>
          <li>Position: dorsal recumbency; secure with V-trough or sandbags</li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step technique ✨:</strong></p>

        <p><strong>1. Skin incision:</strong></p>
        <ul>
          <li>Ventral midline incision, just caudal to umbilicus</li>
          <li>Length: depends on size + accessibility
            <ul>
              <li>Small dog/cat: 3-5 cm</li>
              <li>Medium dog: 5-8 cm</li>
              <li>Large dog: 8-12 cm</li>
              <li>Pyometra/giant breed: longer for adequate exposure</li>
            </ul>
          </li>
          <li>Cat: incision 1/3 cranial, 2/3 caudal to umbilicus (uterus more caudal)</li>
          <li>Dog: incision 1/3 caudal, 2/3 cranial (uterus more cranial)</li>
        </ul>

        <p><strong>2. SC dissection + linea alba:</strong></p>
        <ul>
          <li>Sharp dissection through SC tissue to expose linea alba</li>
          <li>Identify external rectus sheath fascia</li>
          <li>Tent linea alba with thumb forceps + stab incision with #11 or #15 blade</li>
          <li>Extend with Mayo scissors (avoid bladder, omentum, intestines)</li>
        </ul>

        <p><strong>3. Locate uterine horn:</strong></p>
        <ul>
          <li><strong>Spay hook (Snook hook) ✨</strong>: insert against R abdominal wall (away from spleen on L), sweep dorsally then ventrally, lift to expose horn
            <ul>
              <li>Hook may catch bladder or descending colon — release + reattempt if not horn</li>
              <li>Uterine horn: pale pink, smooth, tubular, contains vascular pattern</li>
            </ul>
          </li>
          <li>Or finger sweep for direct retrieval (large patients, cat)</li>
          <li>Trace horn cranially to ovary</li>
        </ul>

        <p><strong>4. Ovarian pedicle ligation ✨:</strong></p>
        <ul>
          <li>Identify ovary at end of horn (within ovarian bursa, surrounded by fat)</li>
          <li>Strum/break suspensory ligament:
            <ul>
              <li>Caudolateral traction with index finger placed under ligament</li>
              <li>"Strum" or break with controlled force</li>
              <li>Avoid excessive force — can tear pedicle</li>
            </ul>
          </li>
          <li>Make window in broad ligament (mesovarium/mesometrium) avoiding ovarian vessels</li>
          <li><strong>Triple-clamp technique:</strong>
            <ul>
              <li>Place 3 hemostats across pedicle (most proximal, middle, distal)</li>
              <li>Most proximal = future ligature site</li>
              <li>Middle = guard against pedicle slippage</li>
              <li>Distal = where you'll cut</li>
            </ul>
          </li>
          <li><strong>Ligation options:</strong>
            <ul>
              <li>Single encircling ligature with miller's knot (small/young)</li>
              <li>Double ligature (encircling + transfixing) for larger/older</li>
              <li>Modified Miller's knot — secure, low slip</li>
            </ul>
          </li>
          <li>Suture: 2-0 or 3-0 PDS (absorbable monofilament)</li>
          <li>Ligature placed around groove from most-proximal hemostat → tighten as hemostat removed</li>
          <li>Cut between middle and distal hemostats</li>
          <li>Inspect pedicle stump: gently grasp + lower into abdomen, verify no bleeding</li>
          <li>If bleeding: replace hemostat, re-ligate; consider 4×4 gauze pack pressure</li>
          <li>Repeat for contralateral ovary</li>
        </ul>

        <p><strong>5. Broad ligament:</strong></p>
        <ul>
          <li>If avascular: tear bluntly with finger</li>
          <li>If vascular (older, pyometra, obese): clamp + ligate
            <ul>
              <li>Significant vessels in ovariectomized older dogs / pyometra</li>
            </ul>
          </li>
        </ul>

        <p><strong>6. Uterine body ligation ✨:</strong></p>
        <ul>
          <li>Trace both horns down to bifurcation, then to uterine body</li>
          <li>Identify uterine arteries on either side of body</li>
          <li>Triple-clamp uterine body cranial to cervix
            <ul>
              <li>Clamp at level just cranial to cervix (cervix feels firm, fibrotic)</li>
              <li>Avoid leaving long uterine stump (stump pyometra risk)</li>
            </ul>
          </li>
          <li><strong>Ligation:</strong>
            <ul>
              <li>Encircling ligature around grove from proximal-most clamp</li>
              <li>+ Transfixing ligature distal to first (figure-of-8 around uterine arteries)</li>
              <li>Cat / small dog: single secure encircling may suffice</li>
              <li>Pyometra: always 2 ligatures + careful exteriorization</li>
            </ul>
          </li>
          <li>Cut between middle and distal hemostat</li>
          <li>Inspect stump for hemorrhage; gently lower into abdomen</li>
        </ul>

        <p><strong>7. Pyometra-specific notes ✗:</strong></p>
        <ul>
          <li>Uterus often massively distended, friable</li>
          <li>Avoid spillage — cover incision edges with moistened laparotomy pads</li>
          <li>Don't squeeze or compress uterus</li>
          <li>Lavage abdomen with warm saline if any spillage</li>
          <li>Submit uterine contents for culture if not previously done</li>
        </ul>

        <p><strong>8. Lavage + closure:</strong></p>
        <ul>
          <li>Lavage abdomen with warm sterile saline if indicated (pyometra, contamination)</li>
          <li>Inspect abdomen for hemorrhage, ensure all sponges removed (count!)</li>
          <li><strong>Linea alba (body wall):</strong>
            <ul>
              <li>Suture: PDS — 0 (medium-large dog), 2-0 (small dog/cat), 3-0 (cat/pediatric)</li>
              <li>Pattern: simple continuous (faster) or simple interrupted (more secure for high-motion)</li>
              <li>Bites: 5-10 mm from edge, 5-10 mm apart</li>
              <li>Include external rectus sheath (strongest holding layer)</li>
              <li>Don't strangulate tissue</li>
            </ul>
          </li>
          <li><strong>SC layer:</strong>
            <ul>
              <li>3-0 PDS or Monocryl simple continuous</li>
              <li>Eliminates dead space</li>
            </ul>
          </li>
          <li><strong>Skin:</strong>
            <ul>
              <li>3-0 nylon or skin staples interrupted</li>
              <li>Or 4-0 Monocryl intradermal continuous (cosmetic, no removal)</li>
              <li>Cat: intradermal preferred (cats remove sutures)</li>
            </ul>
          </li>
          <li>Apply antiseptic spray (cyanoacrylate optional for sealed appearance)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li><strong>Clean elective OHE:</strong> antibiotics NOT routinely indicated ✨
            <ul>
              <li>SSI rate &lt; 5% without prophylaxis in young healthy</li>
              <li>Aseptic technique > antibiotics for clean surgery</li>
            </ul>
          </li>
          <li><strong>Pyometra / contaminated:</strong>
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction → repeat q90 min during surgery</li>
              <li>Continue post-op: amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-14 days</li>
              <li>Adjust per culture results from uterine contents</li>
            </ul>
          </li>
          <li>Diabetic / immunocompromised: consider single dose cefazolin</li>
        </ul>

        <p><strong>Analgesia (multimodal) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.2-0.3 mg/kg IM (dog); 0.1-0.2 mg/kg (cat)</li>
              <li>Or hydromorphone 0.05-0.1 mg/kg IM</li>
              <li>Or buprenorphine 0.02 mg/kg IM (longer acting; less profound)</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li>Pre-incisional local block: bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg (mix; do not exceed totals)</li>
              <li>Splash 1-2 mg/kg lidocaine on each ovarian pedicle pre-clamping (helps reduce visceral pain)</li>
              <li>Fentanyl 2-5 mcg/kg/h CRI for prolonged or pyometra cases</li>
            </ul>
          </li>
          <li><strong>NSAID at recovery (if normotensive + normohydrated):</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC (dog only)</li>
              <li>Or meloxicam 0.2 mg/kg SC initial dose, then 0.1 mg/kg PO daily × 5-7 d</li>
              <li>Cat: meloxicam 0.05-0.1 mg/kg SC single dose, then 0.025 mg/kg PO daily × 3-5 d (cautious — cat NSAID sensitivity)</li>
              <li>Or robenacoxib 1-2 mg/kg PO/SC daily × 3 d (cat)</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 5-7 days</li>
              <li>± Tramadol 2-5 mg/kg PO q8-12h (variable efficacy in dog)</li>
              <li>± Gabapentin 10 mg/kg PO q8h × 5-7 d (adjunct)</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8h (cat — particularly effective)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Anti-emetic:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC at premed time (also reduces inhalant requirement, visceral pain)</li>
          <li>Reduces post-op nausea / vomiting</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery in warm, quiet area</li>
          <li>Monitor TPR, MM, CRT, mentation q15-30 min initially</li>
          <li>Maintain body temperature (Bair hugger, warm blankets)</li>
          <li>Pain assessment q1-2h (Glasgow CMPS-SF or feline scale)</li>
          <li>Continue IV fluids until eating/drinking normally</li>
          <li>Offer water 2-4h post-op once swallow reflex normal</li>
          <li>Offer small meal 6-12h post-op (if no anti-emetic concerns)</li>
          <li>Discharge same day for healthy uncomplicated</li>
          <li>Pyometra / sick patient: hospitalize 24-48h minimum</li>
        </ul>

        <p><strong>Discharge instructions ✨:</strong></p>
        <ul>
          <li><strong>E-collar essential</strong> — until skin sutures removed (10-14 days) ✨
            <ul>
              <li>"Pet must wear cone always — even sleeping"</li>
              <li>Buster collar / inflatable / soft alternatives if intolerant</li>
            </ul>
          </li>
          <li><strong>Strict rest 10-14 days:</strong>
            <ul>
              <li>No running, jumping, stairs (controlled if needed)</li>
              <li>Leash walks only for elimination (5-10 min)</li>
              <li>Crate confinement when unsupervised</li>
              <li>No baths/swimming until sutures out</li>
            </ul>
          </li>
          <li>Check incision daily: redness, swelling, discharge, dehiscence</li>
          <li>Continue pain medications as prescribed (NSAID 5-7 d)</li>
          <li>Diet: regular within 24h if eating; smaller portions × 2-3 days</li>
          <li>Watch for: depression, anorexia, vomiting, distended abdomen, pale gums (warning signs)</li>
        </ul>

        <p><strong>Follow-up:</strong></p>
        <ul>
          <li>Suture removal: 10-14 days post-op (skin)</li>
          <li>Pyometra: recheck CBC + UA at 1-2 weeks</li>
          <li>Long-term: discuss weight management (post-spay weight gain common — ~ 30% reduction in caloric needs)</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative ✗:</strong></p>
        <ul>
          <li><strong>Hemorrhage from ovarian pedicle</strong> — most common serious complication ✗
            <ul>
              <li>Pedicle slipped / inadequately ligated</li>
              <li>Look for: dropping BP, ↑HR, blood in abdomen on lavage</li>
              <li>Address: extend incision, identify bleeder, re-ligate</li>
              <li>"Snowstorm" technique — pack with sponges, find dry, ligate above</li>
            </ul>
          </li>
          <li>Hemorrhage from broad ligament vessels (older, pyometra patient)</li>
          <li>Hemorrhage from uterine artery (uterine body ligation)</li>
          <li><strong>Inadvertent ureter ligation</strong> ✗ — devastating
            <ul>
              <li>Ureter close to ovarian pedicle deep in retroperitoneum</li>
              <li>Risk: too-deep clamping, blind dissection</li>
              <li>Avoid: identify ureter or stay close to ovary on pedicle</li>
              <li>Recognition: hydronephrosis post-op</li>
            </ul>
          </li>
          <li>Splenic laceration (L-side spay hook misplacement)</li>
          <li>Bladder laceration (caudal incision too close, full bladder)</li>
          <li>Uterine rupture (pyometra — friable wall)</li>
          <li>Cardiopulmonary arrest under anesthesia (rare in healthy)</li>
        </ul>

        <p><strong>Early post-op (0-7 days):</strong></p>
        <ul>
          <li><strong>Delayed hemorrhage</strong> — pedicle slipping or coagulopathy</li>
          <li>Wound dehiscence (poor closure, self-trauma without E-collar)</li>
          <li>Seroma (especially obese, large incision)</li>
          <li>Suture reaction</li>
          <li>SSI / wound infection</li>
          <li>Vomiting / aspiration risk (delayed recovery)</li>
          <li>Rebound pain (inadequate analgesia)</li>
        </ul>

        <p><strong>Late (weeks-months-years):</strong></p>
        <ul>
          <li><strong>Ovarian remnant syndrome ✨</strong>:
            <ul>
              <li>Incomplete ovarian removal → continued estrus signs</li>
              <li>Owner reports: heat behavior, vulvar swelling weeks-months later</li>
              <li>Diagnose: AMH, LH stimulation, vaginal cytology during apparent heat</li>
              <li>Tx: re-exploration, find + remove remnant (usually at original pedicle site)</li>
            </ul>
          </li>
          <li><strong>Stump pyometra ✗</strong> — if uterine stump + estrogen source remain
            <ul>
              <li>Long uterine stump + ovarian remnant → recurrent infection</li>
              <li>Mass on caudal abdomen, recurrent UTI, vaginal discharge</li>
              <li>Tx: surgical removal + remove ovarian remnant</li>
            </ul>
          </li>
          <li>Stump granuloma / suture reaction (intermittent fever, sterile)</li>
          <li><strong>Urinary incontinence (USMI) ✨</strong>:
            <ul>
              <li>~ 5-20% of spayed bitches develop estrogen-responsive incontinence</li>
              <li>Higher risk: large breeds (Boxer, Doberman, GSD), spay before 1st heat (debated), obese</li>
              <li>Tx: PPA (phenylpropanolamine 1-2 mg/kg PO q8-12h) or DES (diethylstilbestrol)</li>
              <li>Surgical: colposuspension, urethropexy if refractory</li>
            </ul>
          </li>
          <li>Adhesions (rare in routine OHE)</li>
          <li>Vaginitis (related to USMI)</li>
          <li>Ureteral obstruction from inadvertent ligation (delayed signs)</li>
          <li>Coat changes (some breeds — undercoat puffier post-spay)</li>
          <li>Weight gain (without dietary adjustment)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine elective OHE: excellent</strong> ✓
            <ul>
              <li>Mortality &lt; 0.05% in healthy young patients</li>
              <li>Full recovery 10-14 days</li>
              <li>Return to normal activity 2 weeks</li>
            </ul>
          </li>
          <li><strong>Pyometra OHE:</strong>
            <ul>
              <li>Closed pyometra: mortality 5-10% with prompt Tx</li>
              <li>Open pyometra (drainage): better, mortality 3-5%</li>
              <li>Septic / DIC at presentation: mortality 20-30% ✗</li>
              <li>Survivors: full recovery typically</li>
            </ul>
          </li>
          <li><strong>Long-term benefits:</strong>
            <ul>
              <li>Mammary tumor risk: 99% reduction if before 1st estrus, 92% before 2nd</li>
              <li>Eliminates pyometra risk</li>
              <li>Eliminates ovarian/uterine neoplasia</li>
              <li>Eliminates dystocia, pseudopregnancy</li>
              <li>Reduces roaming, behavioral issues related to estrus</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>USMI in 5-20% (mostly manageable with PPA)</li>
              <li>Weight gain risk → adjust caloric intake by ~ 25-30%</li>
              <li>Possible ↑ risk OSA, HSA, CCL rupture in giant breeds spayed too early (controversial)</li>
              <li>Spaying timing for giant breeds: many now recommend after physeal closure (12-18 months)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>OHE = most common procedure in small animal practice</strong> — rapid + low mortality in healthy patients<br><br>**E-collar + strict rest 10-14 days** = essential for owner compliance ✨<br><br>⚠️ **Pyometra = surgical emergency** — stabilize first (fluids, antibiotics), then OHE. Prognosis depends on systemic status at presentation</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Abdominal
  ============================================================ */
  {
    id: 'splenectomy',
    titleEn: 'Splenectomy (Total)',
    titleTh: 'ตัดม้าม',
    type: 'surgery',
    system: 'soft-tissue',
    species: ['dog', 'cat'],
    tags: ['splenectomy', 'splenic mass', 'hemoabdomen', 'HSA', 'splenic torsion', 'GDV', 'hilar ligation', 'splenic vessels', 'arrhythmia', 'transfusion'],
    aliases: ['splenectomy', 'spleen removal', 'ตัดม้าม', 'ผ่าตัดม้าม'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Spleen',
    sections: {
      indications: `
        <ul>
          <li><strong>Splenic mass ✨</strong> — most common indication
            <ul>
              <li>Hemangiosarcoma (HSA) — ~ 50% of splenic masses (largest indication)</li>
              <li>Hematoma / nodular hyperplasia (benign — but indistinguishable from HSA on imaging)</li>
              <li>Hemangioma (benign vascular)</li>
              <li>Other neoplasia: lymphoma, leiomyosarcoma, fibrosarcoma</li>
              <li>"<strong>Two-thirds rule</strong>": 2/3 of splenic masses are malignant; 2/3 of malignant are HSA</li>
            </ul>
          </li>
          <li><strong>Hemoabdomen from splenic rupture ✗</strong> — emergency
            <ul>
              <li>Spontaneous rupture of splenic mass (HSA most common)</li>
              <li>Trauma (rare; usually capsular tear, not requiring splenectomy)</li>
            </ul>
          </li>
          <li><strong>Splenic torsion ✗</strong>:
            <ul>
              <li>Isolated (usually large/deep-chested breeds: GSD, Great Dane)</li>
              <li>Concurrent with GDV (always splenectomize during GDV correction)</li>
              <li>Spleen typically necrotic, congested, dark</li>
            </ul>
          </li>
          <li>Severe immune-mediated thrombocytopenia (ITP) refractory to medical Tx — rare salvage</li>
          <li>Mast cell tumor (cat splenic — highly successful Tx, MST 1-2+ yr ✓)</li>
          <li>Severe abscessation (rare)</li>
          <li>Splenic rupture from coagulopathy after stabilization</li>
          <li>Diagnostic for histopath when imaging inconclusive (mass requires definitive diagnosis)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy not yet addressed (FFP, vitamin K, platelet support first)</li>
          <li>Severe hypovolemia uncorrected — stabilize first
            <ul>
              <li>Don't delay surgery extensively in active hemoabdomen — concurrent fluid resuscitation + surgery often necessary</li>
            </ul>
          </li>
          <li>Untreatable underlying disease where survival benefit unlikely</li>
          <li>Concurrent severe metastatic disease (palliation considerations)</li>
          <li>Severe DIC without FFP support</li>
          <li>Patients where splenic preservation possible (partial splenectomy in localized disease — debated)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Emergency cases (hemoabdomen): rapid stabilization while preparing OR
            <ul>
              <li>FAST scan confirms abdominal effusion</li>
              <li>Abdominocentesis: hemorrhagic fluid, doesn't clot, PCV similar to peripheral</li>
              <li>Begin fluid resuscitation immediately</li>
            </ul>
          </li>
          <li>CBC: regenerative anemia (or pre-regenerative if very acute), schistocytes, thrombocytopenia (DIC)</li>
          <li>Biochem: hypoalbuminemia, mild ↑ liver enzymes</li>
          <li>Coag panel ✨: PT, aPTT, fibrinogen, D-dimers (DIC frequent in HSA)</li>
          <li>Type + cross-match (transfusion likely)</li>
          <li>Lactate (hypoperfusion marker)</li>
          <li>BG (small breed, hypoglycemia risk)</li>
        </ul>

        <p><strong>2. Imaging:</strong></p>
        <ul>
          <li>Abdominal US: splenic mass, free fluid, hepatic mets evaluation</li>
          <li>Thoracic radiograph (3-view) ✨: pulmonary mets check pre-op
            <ul>
              <li>~ 30-50% of HSA have pulmonary mets at diagnosis</li>
              <li>Important prognostic info before owner commits to surgery</li>
            </ul>
          </li>
          <li>Echocardiogram if any suspicion of cardiac HSA (right atrial mass — separate primary)</li>
          <li>CT for staging if non-emergency / specialty</li>
        </ul>

        <p><strong>3. Stabilization (emergency):</strong></p>
        <ul>
          <li>IV fluid resuscitation: LRS 20 mL/kg bolus, repeat as needed</li>
          <li>Blood products:
            <ul>
              <li>Whole blood or pRBC if PCV &lt; 20% or ongoing hemorrhage</li>
              <li>FFP if coagulopathy / hypoalbuminemia</li>
              <li>Type before transfusion (cat ALWAYS; dog first transfusion safer but cross-match for IMHA)</li>
            </ul>
          </li>
          <li>Yunnan Baiyao 1 cap/10 kg PO q12h (anti-bleeding herbal; mixed evidence; some clinicians use)</li>
          <li>Light abdominal pressure wrap (don't compress chest excursion)</li>
          <li>Pain management: hydromorphone 0.05-0.1 mg/kg IV or methadone 0.1-0.2 mg/kg IV</li>
        </ul>

        <p><strong>4. Patient prep:</strong></p>
        <ul>
          <li>NPO: emergency may not allow long fasting; aspiration precautions</li>
          <li>Wide ventral abdominal clip + prep (xiphoid → pubis, flank to flank)</li>
          <li>Have suction available</li>
          <li>Have additional fluids, blood products in OR</li>
          <li>Have hemostatic agents available (e.g., gelatin sponge, oxidized cellulose)</li>
        </ul>

        <p><strong>5. Anesthesia plan:</strong></p>
        <ul>
          <li><strong>Premed (cautious):</strong>
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV (avoid acepromazine — vasodilation in hypovolemic)</li>
              <li>Or fentanyl 2-5 mcg/kg IV</li>
              <li>Avoid alpha-2 agonists in unstable patient (bradycardia, vasoconstriction masks shock)</li>
            </ul>
          </li>
          <li><strong>Induction (low-dose, titrated):</strong>
            <ul>
              <li>Propofol 2-4 mg/kg IV slow (lower than usual — hypovolemia)</li>
              <li>Or etomidate 1-2 mg/kg IV (cardiovascular sparing — preferred in unstable)</li>
              <li>Or ketamine 5 mg/kg + diazepam 0.25 mg/kg IV (CV stable)</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong> isoflurane (lower MAC than usual; titrate to BP)</li>
          <li><strong>Fluid plan:</strong> aggressive — LRS 10-20 mL/kg/h until BP stabilized, then maintenance</li>
          <li>Have blood products warmed and ready in OR</li>
          <li><strong>Monitor:</strong> ECG ✨ (arrhythmia risk during/after splenectomy — see complications), SpO2, BP (direct preferred), EtCO2, temp</li>
          <li>Anti-arrhythmics ready (lidocaine 2 mg/kg IV bolus)</li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step technique ✨:</strong></p>

        <p><strong>1. Approach:</strong></p>
        <ul>
          <li>Ventral midline laparotomy</li>
          <li>Incision: xiphoid to pubis (full exploratory length needed)</li>
          <li>Stab incision through linea + extend with Mayo scissors</li>
          <li>Note: can place self-retaining retractor (Balfour) for exposure</li>
        </ul>

        <p><strong>2. Initial exploration:</strong></p>
        <ul>
          <li>Locate spleen (left cranial abdomen, deep to greater omentum)</li>
          <li>Assess for: rupture, mass location, hemoabdomen extent</li>
          <li>Suction free blood; estimate volume (most cases 200-2000+ mL)</li>
          <li>Quick exploration: liver, mesentery, peritoneum for mets/hemorrhage source</li>
          <li>Carefully exteriorize spleen (handle gently — friable mass may rupture further)</li>
          <li>Pack abdomen with moistened laparotomy pads for exposure</li>
        </ul>

        <p><strong>3. Hilar ligation ✨ — main vessels:</strong></p>
        <ul>
          <li><strong>Anatomy:</strong>
            <ul>
              <li>Splenic artery + vein course along splenic hilus</li>
              <li>Branches to spleen (multiple) + branches to stomach (short gastric vessels)</li>
              <li>Splenic vessels arise from celiac axis</li>
            </ul>
          </li>
          <li><strong>Technique options:</strong>
            <ul>
              <li><strong>Individual hilar vessel ligation:</strong>
                <ul>
                  <li>Identify each splenic vessel branching to spleen</li>
                  <li>Window between branches in mesosplenic ligament</li>
                  <li>Triple-clamp + double ligation each vessel (2-0 or 0 PDS)</li>
                  <li>Cut between distal clamps</li>
                  <li>Preserve short gastric vessels (gastric blood supply)</li>
                  <li>Methodical, slower but definitive</li>
                </ul>
              </li>
              <li><strong>En masse hilar ligation:</strong>
                <ul>
                  <li>Faster — appropriate for emergency or large spleen</li>
                  <li>Place several large hemostats across mesosplenic vessels en bloc</li>
                  <li>Multiple encircling ligatures distal to clamps</li>
                  <li>Cut spleen free</li>
                  <li>Less control of individual vessels — slight ↑ bleeding risk</li>
                </ul>
              </li>
              <li><strong>Vessel-sealing devices (preferred when available) ✨:</strong>
                <ul>
                  <li>LigaSure, Enseal, Harmonic scalpel</li>
                  <li>Seal vessels up to 7 mm (depending on device)</li>
                  <li>Significantly faster + less bleeding</li>
                  <li>Cost-effective for high-volume soft tissue surgery</li>
                </ul>
              </li>
              <li><strong>Stapling devices:</strong>
                <ul>
                  <li>TA stapler with 3.5 mm vascular cartridge across hilus</li>
                  <li>Fast; useful in massive spleen / unstable patient</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Important: <strong>preserve short gastric vessels</strong> ✨ (greater curvature of stomach blood supply)
            <ul>
              <li>Risk of gastric necrosis if all gastric branches ligated</li>
              <li>Stay close to splenic capsule for ligation</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Splenic removal:</strong></p>
        <ul>
          <li>Once all hilar vessels ligated → spleen separates</li>
          <li>Submit entire spleen + ALL nodules separately for histopath</li>
          <li>Open spleen on back table — examine cut surface (may help diagnose)</li>
          <li>Document size, mass location, color (pre-fixation photo helpful)</li>
        </ul>

        <p><strong>5. Inspection + lavage:</strong></p>
        <ul>
          <li>Verify hemostasis at each pedicle stump</li>
          <li>Inspect: liver lobes (HSA mets common!), mesentery, peritoneum, pancreas (greater curvature of stomach)</li>
          <li>Biopsy any suspicious lesions (liver if abnormal — HSA mets confirmation)</li>
          <li>Lavage abdomen with warm saline 100-200 mL/kg until effluent clear</li>
          <li>Suction out lavage fluid completely</li>
          <li>Sponge count!</li>
        </ul>

        <p><strong>6. Closure:</strong></p>
        <ul>
          <li>Linea alba: 0 or 2-0 PDS simple continuous (faster) or interrupted</li>
          <li>SC: 3-0 PDS continuous</li>
          <li>Skin: 3-0 nylon interrupted or staples</li>
          <li>Apply antiseptic spray</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Splenectomy = clean surgery — prophylactic antibiotic typically not required</li>
          <li>If contamination, abscessation, or torsion with necrosis:
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction + q90 min during surgery</li>
              <li>Continue post-op cefazolin or amoxicillin-clavulanate × 7-10 days</li>
            </ul>
          </li>
          <li>Splenectomy patients: long-term ↑ risk of severe bacterial sepsis (overwhelming post-splenectomy infection — OPSI)
            <ul>
              <li>Counsel owner on prompt veterinary attention for any febrile illness</li>
              <li>No vaccination protocol typically (unlike humans)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Analgesia (multimodal) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV (or 0.2-0.3 mg/kg IM)</li>
              <li>Or hydromorphone 0.05-0.1 mg/kg IV</li>
              <li>Or fentanyl 2-5 mcg/kg IV bolus</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li>Pre-incisional bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg local block</li>
              <li>Fentanyl CRI 2-5 mcg/kg/h (cat: 1-3 mcg/kg/h)</li>
              <li>Or ketamine CRI 0.6 mg/kg/h after 0.5 mg/kg loading bolus</li>
              <li>Or lidocaine CRI 25-50 mcg/kg/min (dog only — cat sensitive ✗)</li>
              <li>± Intraperitoneal lavage with bupivacaine 1-2 mg/kg in saline (anesthesia field block)</li>
            </ul>
          </li>
          <li><strong>NSAID at recovery (only if normotensive + normohydrated + no AKI):</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC (dog)</li>
              <li>Or meloxicam 0.2 mg/kg SC initial, then PO daily × 5-7 d</li>
              <li>Caution if any concurrent renal compromise from shock</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 5-7 d</li>
              <li>± Tramadol 2-5 mg/kg PO q8-12h</li>
              <li>± Gabapentin 10 mg/kg PO q8h × 5-7 d</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8h × 24-48h post-op (cat especially)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Anti-arrhythmic (ECG-guided):</strong></p>
        <ul>
          <li>Ventricular arrhythmias common during/after splenectomy ✨</li>
          <li>Treat if: VPCs &gt; 20/min, R-on-T, sustained V-tach, hemodynamic compromise</li>
          <li><strong>Lidocaine ✨</strong>:
            <ul>
              <li>Dog: 2 mg/kg slow IV bolus → CRI 25-75 mcg/kg/min</li>
              <li>Cat: avoid (toxic) ✗ — use procainamide if needed</li>
            </ul>
          </li>
          <li>Procainamide 6-10 mg/kg IV slow then 25-40 mcg/kg/min CRI (refractory)</li>
          <li>Continue 24-72h post-op or until arrhythmia resolves</li>
        </ul>

        <p><strong>Anti-emetic:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC at premed (visceral pain modulation + anti-nausea)</li>
        </ul>

        <p><strong>Blood products:</strong></p>
        <ul>
          <li>Have blood products ready: pRBC 10-15 mL/kg if HCT &lt; 20% or active hemorrhage</li>
          <li>FFP 10-15 mL/kg for coagulopathy</li>
          <li>Whole blood 20 mL/kg for combined needs (anemia + coag)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>ICU monitoring 24-48h ✨:
            <ul>
              <li>Continuous ECG (arrhythmia surveillance — peak risk 12-24h post)</li>
              <li>BP q1-2h</li>
              <li>HR, RR, MM, CRT, mentation q1-2h</li>
              <li>Temperature q4h</li>
              <li>SpO2 monitoring</li>
            </ul>
          </li>
          <li>HCT/TS check at 4, 12, 24h post-op (re-bleeding surveillance)</li>
          <li>Lactate trend (perfusion improvement)</li>
          <li>I/O monitoring (urine output goal &gt; 1-2 mL/kg/h)</li>
          <li>Continue IV fluids — taper as eating/drinking</li>
          <li>Continue analgesia (CRI initially → transition to oral)</li>
        </ul>

        <p><strong>Activity + return to function:</strong></p>
        <ul>
          <li>Return to drinking 2-6h, eating 12-24h post-op (offer small meal)</li>
          <li>Brief leash walks for elimination 12-24h post-op</li>
          <li>Strict rest 10-14 days</li>
          <li>Discharge: 24-72h depending on stability</li>
        </ul>

        <p><strong>Discharge instructions:</strong></p>
        <ul>
          <li>E-collar until skin sutures out (10-14 days)</li>
          <li>Strict rest 10-14 days (no running, jumping, stairs, swimming)</li>
          <li>Daily incision check</li>
          <li>NSAID × 5-7 days</li>
          <li>Watch for: lethargy, pale gums, weakness, distended abdomen (re-bleeding warning), dyspnea, vomiting</li>
          <li>Report immediately if any of above</li>
        </ul>

        <p><strong>Follow-up ✨:</strong></p>
        <ul>
          <li>Recheck 7-10 days for incision + suture removal at 14 days</li>
          <li>HCT recheck at 1-2 weeks</li>
          <li><strong>Histopathology results review essential</strong> ✨ — guides next steps:
            <ul>
              <li>Hematoma / nodular hyperplasia: cure ✓</li>
              <li>Hemangioma: cure ✓</li>
              <li>HSA: discuss adjuvant chemotherapy (doxorubicin) ASAP</li>
              <li>Other neoplasia: tumor-specific Tx</li>
            </ul>
          </li>
          <li>If HSA: thoracic radiograph q3 months for mets surveillance</li>
          <li>Lifelong: monitor for sepsis if febrile illness (OPSI risk)</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative ✗:</strong></p>
        <ul>
          <li>Hemorrhage from hilar pedicle — most common ✗
            <ul>
              <li>Address: pack with sponges, identify, re-ligate</li>
              <li>Vessel-sealing devices reduce risk</li>
            </ul>
          </li>
          <li>Splenic mass rupture during manipulation (HSA) — increases bleeding</li>
          <li><strong>Ventricular arrhythmias ✗</strong>:
            <ul>
              <li>VPCs, V-tach common during splenic manipulation</li>
              <li>Mechanism: catecholamine release, hypoxia, electrolyte shifts, mechanical irritation</li>
              <li>Lidocaine if hemodynamic compromise (dog only)</li>
            </ul>
          </li>
          <li>Inadvertent ligation of short gastric vessels → gastric necrosis ✗</li>
          <li>Pancreatic injury (close anatomic proximity)</li>
          <li>Hypotension (hypovolemia, anesthetic, blood loss)</li>
          <li>Hypothermia (long surgery, large abdominal exposure)</li>
        </ul>

        <p><strong>Early post-op (0-7 days):</strong></p>
        <ul>
          <li><strong>Re-bleeding from pedicle ✗</strong>:
            <ul>
              <li>HCT drop, pale gums, weakness, distended abdomen</li>
              <li>FAST scan + abdominocentesis confirms</li>
              <li>May need re-exploration</li>
            </ul>
          </li>
          <li>Persistent ventricular arrhythmias (often 24-72h post-op)</li>
          <li>Wound dehiscence / SSI</li>
          <li>Aspiration pneumonia (severe vomiting recovery)</li>
          <li>Pancreatitis (manipulation of greater curvature)</li>
          <li>Gastric necrosis (rare; from over-aggressive vessel ligation)</li>
          <li>Acute kidney injury (hypoperfusion from shock)</li>
          <li>DIC progression</li>
          <li>Sepsis (rare; contaminated case)</li>
        </ul>

        <p><strong>Late (weeks-months):</strong></p>
        <ul>
          <li><strong>Tumor recurrence / metastasis ✗</strong> — main long-term concern (HSA)
            <ul>
              <li>Pulmonary mets most common (~ 50-90% of HSA at diagnosis or develops within 6 mo)</li>
              <li>Hepatic mets, mesenteric, CNS</li>
              <li>Re-presentation with new hemoabdomen, dyspnea, neurologic signs</li>
            </ul>
          </li>
          <li>OPSI (overwhelming post-splenectomy infection) — uncommon in dog/cat (vs humans), but possible
            <ul>
              <li>Severe bacterial sepsis from encapsulated organisms</li>
              <li>Counsel owner on prompt vet attention for febrile illness</li>
            </ul>
          </li>
          <li>Persistent thrombocytopenia (BM disease, IMHA)</li>
          <li>Concurrent disease progression (HSA-related)</li>
          <li>Adhesions (uncommon)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Benign mass (hematoma, hemangioma, NRH):</strong>
            <ul>
              <li>Excellent prognosis — surgical cure ✓</li>
              <li>Long-term survival = unaffected dog</li>
              <li>~ 40% of splenic masses turn out benign</li>
            </ul>
          </li>
          <li><strong>HSA (~ 50% of splenic masses) ✗:</strong>
            <ul>
              <li>Surgery alone: MST 1-3 months ✗</li>
              <li>Surgery + doxorubicin chemotherapy: MST 5-9 months</li>
              <li>1-year survival ~ 10%, 2-year &lt; 5%</li>
              <li>Most aggressive cancer in dog</li>
            </ul>
          </li>
          <li><strong>Splenic torsion (isolated):</strong>
            <ul>
              <li>Excellent if recognized + treated promptly: &gt; 90% survival</li>
              <li>Concurrent GDV: more guarded</li>
            </ul>
          </li>
          <li><strong>Splenic MCT (cat):</strong>
            <ul>
              <li>Surprisingly good — MST 1-2+ years ✓</li>
            </ul>
          </li>
          <li><strong>Lymphoma:</strong>
            <ul>
              <li>Splenectomy alone insufficient — needs chemotherapy</li>
              <li>Outcomes per chemo response (CHOP, etc.)</li>
            </ul>
          </li>
          <li><strong>Surgical mortality:</strong>
            <ul>
              <li>Stable patient: &lt; 5%</li>
              <li>Acute hemoabdomen: 5-15%</li>
              <li>Severe shock + DIC: 20-30%</li>
            </ul>
          </li>
          <li><strong>Negative prognostic factors:</strong>
            <ul>
              <li>Hemoabdomen at presentation</li>
              <li>HSA histology + concurrent mets</li>
              <li>DIC, severe coagulopathy</li>
              <li>Concurrent severe illness</li>
              <li>Older patient with comorbidities</li>
              <li>Right atrial mass (cardiac HSA — different primary)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">⚠️ <strong>Acute hemoabdomen + older large breed = HSA emergency</strong> ✗ — splenectomy + histopath; doxo adjuvant<br><br>💡 **Vessel-sealing device** (LigaSure) makes surgery faster + safer ✨<br><br>**ECG monitoring 24-72h post-op** essential — ventricular arrhythmias common. **Histopath = critical** for prognosis + adjuvant Tx planning</div>
      `,
    },
  },

  /* ============================================================
     UROGENITAL — Urinary
  ============================================================ */
  {
    id: 'cystotomy',
    titleEn: 'Cystotomy (Bladder Surgery)',
    titleTh: 'ผ่าตัดกระเพาะปัสสาวะ',
    type: 'surgery',
    system: 'urogenital',
    species: ['dog', 'cat'],
    tags: ['cystotomy', 'urolith removal', 'bladder stones', 'cystic calculi', 'struvite', 'oxalate', 'urate', 'bladder mass', 'TCC', 'biopsy', 'urethral catheter'],
    aliases: ['cystotomy', 'bladder surgery', 'urolith removal', 'ผ่าตัดเอานิ่ว', 'นิ่วกระเพาะ'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Bladder',
    sections: {
      indications: `
        <ul>
          <li><strong>Urolith removal ✨</strong> — most common indication
            <ul>
              <li>Cystic calculi causing clinical signs (hematuria, dysuria, pollakiuria)</li>
              <li>Stones not amenable to medical dissolution</li>
              <li>Urethral obstruction relief (combined with retropulsion to bladder)</li>
              <li>Common stone types:
                <ul>
                  <li>Struvite (Mg-NH4-PO4): often female dog, infection-related</li>
                  <li>Calcium oxalate: male dog, breed predisposed (Bichon, Schnauzer, Shih Tzu)</li>
                  <li>Urate: Dalmatian, English Bulldog (UAT defect), portosystemic shunt</li>
                  <li>Cystine: rare; metabolic disorder</li>
                  <li>Silica: large dogs on dry foods</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Bladder mass / neoplasia diagnosis or removal:</strong>
            <ul>
              <li>TCC biopsy (avoid catheter / cysto FNA — seeding risk ✗)</li>
              <li>Polypoid cystitis</li>
              <li>Bladder leiomyoma / fibroma (rare)</li>
              <li>Apical / dome tumors potentially resectable (partial cystectomy)</li>
            </ul>
          </li>
          <li>Foreign body in bladder (rare)</li>
          <li>Severe traumatic bladder rupture repair</li>
          <li>Ectopic ureter repair (specialty)</li>
          <li>Patent urachus / urachal diverticulum</li>
          <li>Refractory severe hematuria of unclear cause (diagnostic)</li>
          <li>Cystoscopic procedures unavailable / contraindicated</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy uncorrected</li>
          <li>Severe metabolic derangement (hyperK, severe uremia from obstruction) — stabilize first
            <ul>
              <li>Decompress bladder via cystocentesis or urethral catheter first</li>
              <li>Address hyperkalemia (Ca gluconate, fluid diuresis)</li>
              <li>Surgery once K &lt; 6.5, hemodynamically stable</li>
            </ul>
          </li>
          <li>Sepsis from severe pyelonephritis untreated</li>
          <li>Untreatable underlying disease</li>
          <li>TCC with extensive trigone involvement (not surgically resectable; medical Tx + stent)</li>
          <li>Suspected TCC where seeding risk during surgery outweighs benefit (case-by-case)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Urinalysis + urine culture ✨ (essential)
            <ul>
              <li>Crystalluria (suggests stone composition)</li>
              <li>Bacteriuria (drives antibiotic choice)</li>
              <li>pH (struvite alkaline, oxalate neutral-acidic)</li>
              <li>Hematuria, pyuria</li>
            </ul>
          </li>
          <li>CBC + biochem (renal function, electrolytes)</li>
          <li>Imaging:
            <ul>
              <li>Abdominal radiograph: identify radiopaque stones (struvite, oxalate, cystine, silica)</li>
              <li>Abdominal ultrasound ✨: identify all stones (radiolucent like urate too), bladder wall, masses, urethral involvement</li>
              <li>Contrast cystography or pneumocystogram if mass suspected</li>
            </ul>
          </li>
          <li>If TCC suspected: BRAF urine PCR (CADET BRAF), abdominal US, thoracic radiograph</li>
          <li>If urethral obstruction: address first (catheterization, retropulsion)</li>
          <li>Coag panel if bleeding tendency</li>
        </ul>

        <p><strong>2. Patient prep:</strong></p>
        <ul>
          <li>Pre-emptive urinary catheterization (if obstructed)</li>
          <li>Empty bladder pre-op (manual expression cautiously, or catheter)</li>
          <li>NPO 8-12h (less if pediatric or systemically ill)</li>
          <li>IV catheter, fluid plan (LRS or balanced; if hyperK present, use 0.9% NaCl initially)</li>
          <li>Antibiotic prophylaxis based on culture or empirical choice</li>
        </ul>

        <p><strong>3. Anesthesia plan:</strong></p>
        <ul>
          <li><strong>Premed:</strong>
            <ul>
              <li>Methadone 0.2-0.3 mg/kg + dexmed 5 mcg/kg IM (if stable)</li>
              <li>Avoid alpha-2 if compromised</li>
              <li>Methadone alone if cardiac concerns</li>
            </ul>
          </li>
          <li><strong>Induction:</strong>
            <ul>
              <li>Propofol 4-6 mg/kg IV titrated</li>
              <li>Or alfaxalone 1-2 mg/kg IV</li>
              <li>Etomidate 1-2 mg/kg IV if cardiovascularly compromised</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong> isoflurane / sevoflurane in O2</li>
          <li><strong>IV fluids:</strong> LRS 5-10 mL/kg/h; cautious if cardiac/renal compromise</li>
          <li><strong>Local block:</strong> epidural morphine 0.1 mg/kg + bupivacaine 0.1 mL/kg if hindlimb / urogenital surgery (specialty)</li>
          <li>Monitoring: standard (SpO2, BP, ECG, EtCO2, temp)</li>
        </ul>

        <p><strong>4. Surgical site prep:</strong></p>
        <ul>
          <li>Position: dorsal recumbency</li>
          <li>Clip ventral abdomen: cranial to umbilicus → pubis</li>
          <li>Aseptic prep with chlorhexidine</li>
          <li>Drape: 4 corner + fenestrated (ventral abdomen)</li>
          <li>Pre-place soft urinary catheter if not already (used during retrograde flush)
            <ul>
              <li>Tomcat catheter (cat male)</li>
              <li>Foley 5-12 Fr (most patients)</li>
              <li>Sterile, lubricated</li>
              <li>Connect to closed collection system</li>
            </ul>
          </li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step technique ✨:</strong></p>

        <p><strong>1. Approach:</strong></p>
        <ul>
          <li>Caudal ventral midline incision (caudal half of abdomen)</li>
          <li>From umbilicus → pubis (length per patient size)</li>
          <li>Stab linea alba + extend with Mayo scissors</li>
          <li>Note: in male dog, prepuce + preputial muscles must be reflected laterally — paramedian skin incision around prepuce or curvilinear incision</li>
        </ul>

        <p><strong>2. Bladder exposure:</strong></p>
        <ul>
          <li>Identify bladder (pyriform, caudal abdomen, dorsal to ventral abdominal wall)</li>
          <li>Place stay sutures (3-0 PDS) at apex bilaterally for handling — preserves dorsal/ventral orientation
            <ul>
              <li>Avoid grasping bladder with thumb forceps directly (trauma)</li>
            </ul>
          </li>
          <li>Pack abdomen with moistened laparotomy pads to isolate bladder + prevent urine spillage</li>
          <li>Empty bladder via cystocentesis if distended (22g needle, syringe)</li>
        </ul>

        <p><strong>3. Cystotomy incision ✨:</strong></p>
        <ul>
          <li><strong>Location: ventral midline of bladder</strong>, in apex (away from trigone)
            <ul>
              <li>Avoid trigone (ureteral openings, urethra)</li>
              <li>Avoid major blood vessels at neck</li>
              <li>Apex relatively avascular</li>
            </ul>
          </li>
          <li>Stab incision with #11 or #15 blade (avoid bladder lumen/contents trauma)</li>
          <li>Extend with Metzenbaum scissors to required length
            <ul>
              <li>Just long enough to retrieve all stones / complete procedure</li>
              <li>Smaller incision = faster healing, less leakage</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Urolith removal ✨:</strong></p>
        <ul>
          <li>Manually retrieve visible stones with thumb forceps or spoon</li>
          <li>Submit stones for quantitative analysis ✨ (Minnesota Urolith Center, others)
            <ul>
              <li>Drives long-term prevention (diet, supplementation)</li>
            </ul>
          </li>
          <li><strong>Retrograde flushing ✨</strong> — critical for complete clearance:
            <ul>
              <li>Have assistant flush sterile saline through urethral catheter retrograde</li>
              <li>Flushes stones from urethra back into bladder</li>
              <li>Especially important for male dogs (penile urethra trapping)</li>
              <li>Repeat until no more stones flushed</li>
            </ul>
          </li>
          <li><strong>Antegrade flushing</strong>:
            <ul>
              <li>Pass urinary catheter from bladder forward into urethra</li>
              <li>Flush sterile saline forward</li>
              <li>Confirms urethral patency</li>
            </ul>
          </li>
          <li>Inspect bladder lumen thoroughly — palpate for residual stones</li>
          <li>Examine bladder mucosa for masses, ulcers</li>
          <li>Take biopsy of any abnormal areas (~ 1 cm sample, full thickness)</li>
        </ul>

        <p><strong>5. Post-removal radiograph (intraoperative):</strong></p>
        <ul>
          <li>If portable radiograph available — confirm complete stone removal before closure ✨</li>
          <li>Significantly reduces residual stone rates (which cause persistent signs)</li>
          <li>Or post-op radiograph in recovery</li>
        </ul>

        <p><strong>6. Bladder closure:</strong></p>
        <ul>
          <li><strong>Single-layer or 2-layer closure</strong>:
            <ul>
              <li>Most cases: single-layer simple continuous appositional, full-thickness or partial-thickness</li>
              <li>2-layer (mucosa + seromuscular) for compromised bladder (severe cystitis, neoplasia, tension)</li>
            </ul>
          </li>
          <li>Suture: 3-0 or 4-0 PDS / Maxon (monofilament absorbable, prevents stone nidus)
            <ul>
              <li>NEVER use multifilament absorbable in urinary tract (silk, vicryl) — promotes stone formation</li>
              <li>NEVER use non-absorbable in bladder lumen</li>
            </ul>
          </li>
          <li>Pattern options:
            <ul>
              <li>Simple continuous appositional (most common)</li>
              <li>Cushing pattern (inverting)</li>
              <li>Modified Connell pattern (inverting)</li>
              <li>Halsted (interrupted partial-thickness)</li>
            </ul>
          </li>
          <li>Bites: include muscularis + submucosa (holding layer); avoid penetrating mucosa with knot exposure</li>
          <li>Test bladder integrity: fill with sterile saline via catheter, observe for leaks
            <ul>
              <li>Place reinforcing sutures at any leak sites</li>
            </ul>
          </li>
        </ul>

        <p><strong>7. Lavage + closure:</strong></p>
        <ul>
          <li>Lavage abdomen if any urine spillage (warm saline)</li>
          <li>Sponge count!</li>
          <li>Linea alba: 0 / 2-0 PDS simple continuous or interrupted</li>
          <li>SC: 3-0 PDS continuous</li>
          <li>Skin: 3-0 nylon interrupted or staples</li>
        </ul>

        <p><strong>8. Foley catheter consideration:</strong></p>
        <ul>
          <li><strong>Indications for indwelling Foley post-op:</strong>
            <ul>
              <li>Compromised bladder repair</li>
              <li>Risk of urinary obstruction</li>
              <li>Severe cystitis</li>
              <li>Uncontrolled hemorrhage from bladder</li>
              <li>Need for accurate urine output measurement</li>
            </ul>
          </li>
          <li>Maintain 24-72h with closed collection system</li>
          <li>Increased UTI risk with prolonged catheterization → balance benefit vs risk</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics ✨:</strong></p>
        <ul>
          <li>Cystotomy = clean-contaminated to contaminated surgery</li>
          <li><strong>Pre-op based on culture:</strong>
            <ul>
              <li>If urine culture positive: appropriate antibiotic per susceptibility</li>
              <li>If pending / negative: empirical broad-spectrum</li>
            </ul>
          </li>
          <li><strong>Empirical choices:</strong>
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction → q90 min during surgery</li>
              <li>Or ampicillin-sulbactam 30 mg/kg IV at induction</li>
              <li>Continue post-op:
                <ul>
                  <li>Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-14 days</li>
                  <li>Or based on culture</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Recheck UC at 1 week post-op + 1 month post-op (resolution confirmation)</li>
          <li>If complicated UTI or pyelonephritis: longer course (4-6 weeks) per guidelines</li>
        </ul>

        <p><strong>Analgesia (multimodal) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.2-0.3 mg/kg IM (dog); 0.1-0.2 mg/kg (cat)</li>
              <li>Or hydromorphone</li>
              <li>± Maropitant 1 mg/kg SC (visceral pain)</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li>Pre-incisional bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg local block</li>
              <li>Epidural morphine 0.1 mg/kg + bupivacaine 0.5% 0.1 mL/kg (excellent for caudal procedures, lasts 12-24h)</li>
              <li>Fentanyl CRI 2-5 mcg/kg/h (dog), 1-3 (cat) for prolonged cases</li>
            </ul>
          </li>
          <li><strong>NSAID:</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC (dog) at recovery</li>
              <li>Meloxicam 0.2 mg/kg SC (dog), 0.05-0.1 mg/kg (cat single dose)</li>
              <li>CAUTIOUS if any renal compromise (urolith → AKI possible)</li>
              <li>Continue PO × 5-7 days (dog), 3 days (cat)</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 5-7 d (dog) or 3 d (cat)</li>
              <li>Tramadol 2-5 mg/kg PO q8-12h (dog) or 1-2 mg/kg q12h (cat)</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8-12h (especially cat)</li>
              <li>Gabapentin 10 mg/kg PO q8-12h × 5-7 d (visceral pain adjunct)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Diet (long-term, stone-specific):</strong></p>
        <ul>
          <li><strong>Struvite:</strong> Hill's c/d, Royal Canin Urinary SO; stones often dissolve medically</li>
          <li><strong>Calcium oxalate:</strong> Hill's u/d, Royal Canin Urinary SO + potassium citrate</li>
          <li><strong>Urate:</strong> Hill's u/d (low purine, alkalinizing); allopurinol 10-20 mg/kg PO q12h</li>
          <li><strong>Cystine:</strong> alkalinizing diet + tiopronin or 2-MPG</li>
          <li>Encourage water intake (canned food, pet fountain, multiple water sources)</li>
          <li>Recheck UA + urolith ultrasound q3-6 mo lifelong (high recurrence rates) ✨</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery in warm quiet area</li>
          <li>Monitor TPR, mentation q1-2h initially</li>
          <li>Continue IV fluids until eating/drinking + urinating freely</li>
          <li>Confirm urination within 8-12h post-op (or palpate bladder, US confirm)
            <ul>
              <li>If unable to urinate: catheterize + investigate (obstruction, urethral spasm, AKI)</li>
            </ul>
          </li>
          <li>Hematuria for 1-3 days post-op normal — should clear</li>
          <li>Persistent severe hematuria → re-evaluate (bladder hemorrhage, missed stone)</li>
        </ul>

        <p><strong>Discharge instructions:</strong></p>
        <ul>
          <li>E-collar until skin sutures removed (10-14 days)</li>
          <li>Strict rest 10-14 days (no jumping, running, swimming)</li>
          <li>Daily incision check</li>
          <li>Continue antibiotics as prescribed (full course)</li>
          <li>Continue NSAID + analgesia</li>
          <li>Increased water intake — wet food, fountains, multiple bowls</li>
          <li>Watch for: dysuria, stranguria, anuria (re-obstruction), excessive hematuria, lethargy, vomiting</li>
          <li>Frequent walks (encourage urination)</li>
        </ul>

        <p><strong>Follow-up ✨:</strong></p>
        <ul>
          <li>Recheck 7-10 days for incision + suture removal at 14 days</li>
          <li>UA + urine culture at 7-10 days post-op (UTI clearance)</li>
          <li>Urine culture at 4 weeks (definitive cure)</li>
          <li>Urolith analysis result review essential ✨ — drives prevention plan</li>
          <li>Diet implementation per stone type</li>
          <li>Recheck abdominal radiograph or US at 3 mo + then q3-6 mo lifelong</li>
          <li>Long-term: monitor for recurrence (~ 50% recur in 1-3 years without dietary management)</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative:</strong></p>
        <ul>
          <li>Inadvertent ureteral injury (close to trigone — avoid trigone area)</li>
          <li>Urethral injury during stone retrieval / flushing</li>
          <li>Bladder mucosal trauma (sutures penetrating lumen)</li>
          <li>Hemorrhage from bladder vessels (uncommon)</li>
          <li>Inadvertent bowel injury (close approach if obese / distended)</li>
          <li>Anesthetic complications</li>
        </ul>

        <p><strong>Early post-op (0-7 days):</strong></p>
        <ul>
          <li><strong>Urine leakage / uroabdomen ✗</strong>:
            <ul>
              <li>Inadequate closure or compromised tissue</li>
              <li>Signs: progressive abdominal distension, vomiting, depression, ↑ BUN/Cr</li>
              <li>Diagnosis: abdominocentesis (Cr in fluid &gt; 2× serum)</li>
              <li>Tx: re-exploration + repair, peritoneal lavage</li>
            </ul>
          </li>
          <li>Persistent hematuria (mass? missed stone? coagulopathy?)</li>
          <li>Urinary tract obstruction (urethral spasm post-catheterization, edema)</li>
          <li>UTI persistence (failed antibiotic, contaminated case)</li>
          <li>Wound dehiscence / SSI</li>
          <li>Adhesion formation (rare)</li>
          <li>Bladder atony post-extended distension</li>
        </ul>

        <p><strong>Late (weeks-months-years):</strong></p>
        <ul>
          <li><strong>Stone recurrence ✨</strong>:
            <ul>
              <li>Common: ~ 50% within 1-3 years without proper prevention</li>
              <li>Higher recurrence: oxalate (50%), urate (40%), cysteine (50%)</li>
              <li>Lower: struvite (with diet + UTI control)</li>
              <li>Prevention: diet, hydration, UTI control</li>
            </ul>
          </li>
          <li>Missed stones (high if no intra-op radiograph)
            <ul>
              <li>Persistent hematuria, dysuria post-op</li>
              <li>Recheck imaging at 4-6 weeks if signs persist</li>
            </ul>
          </li>
          <li>Recurrent UTI (often related to anatomic / underlying issues)</li>
          <li>Bladder fibrosis / decreased compliance (chronic inflammation)</li>
          <li>Adhesions causing partial obstruction</li>
          <li>If TCC: progression of disease (regardless of surgery)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine cystotomy for uroliths: excellent</strong> ✓
            <ul>
              <li>Mortality &lt; 1% in healthy patients</li>
              <li>Recovery 10-14 days</li>
              <li>Resolution of clinical signs typical</li>
            </ul>
          </li>
          <li><strong>Long-term outcomes per stone type ✨:</strong>
            <ul>
              <li>Struvite + dietary management + UTI control: low recurrence ~ 10%</li>
              <li>Calcium oxalate: ~ 50% recurrence within 3 years (despite prevention)</li>
              <li>Urate (Dalmatian) + allopurinol + diet: 30-40% recurrence</li>
              <li>Cystine: ~ 50% recurrence</li>
            </ul>
          </li>
          <li><strong>Bladder mass / TCC outcome:</strong>
            <ul>
              <li>Apical TCC + complete partial cystectomy: better — MST 18+ mo possible</li>
              <li>Trigonal TCC: not surgically curable; medical Tx + stent</li>
              <li>Benign mass (polyp, leiomyoma) + complete excision: cure ✓</li>
            </ul>
          </li>
          <li><strong>Bladder rupture repair:</strong>
            <ul>
              <li>Acute traumatic: good if early Tx (&gt; 80% survival)</li>
              <li>Delayed (peritonitis): more guarded</li>
            </ul>
          </li>
          <li><strong>Recovery timeline:</strong>
            <ul>
              <li>Bladder healing: 14-21 days for tensile strength</li>
              <li>Mucosal integrity: 5-7 days</li>
              <li>Return to full activity: 3-4 weeks</li>
            </ul>
          </li>
          <li><strong>Negative prognostic factors:</strong>
            <ul>
              <li>Trigonal involvement (resectability)</li>
              <li>Severe concurrent renal disease</li>
              <li>Stone composition with high recurrence</li>
              <li>Inadequate prevention strategy / owner compliance</li>
              <li>Concurrent severe comorbidity</li>
              <li>Uroabdomen complications</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Always retrograde flush + intra-op radiograph</strong> ✨ — significantly reduces missed stone rate<br><br>**Submit stones for quantitative analysis** — drives long-term prevention plan<br><br>⚠️ **Avoid trigone** (ureteral openings, urethra). **Monofilament absorbable suture only** (PDS, Maxon) — multifilament + non-absorbable = stone nidus risk</div>
      `,
    },
  },

  /* ============================================================
     ORTHOPEDIC — Joint
  ============================================================ */
  {
    id: 'femoral-head-ostectomy',
    titleEn: 'Femoral Head Ostectomy (FHO)',
    titleTh: 'ตัดหัวกระดูกต้นขา',
    type: 'surgery',
    system: 'orthopedic',
    species: ['dog', 'cat'],
    tags: ['FHO', 'femoral head ostectomy', 'hip dysplasia', 'Legg-Calvé-Perthes', 'femoral head fracture', 'coxofemoral luxation', 'salvage procedure', 'pseudoarthrosis', 'physical rehabilitation'],
    aliases: ['FHO', 'femoral head ostectomy', 'femoral head and neck excision', 'FHNE', 'ตัดหัวข้อสะโพก'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Hip',
    sections: {
      indications: `
        <p><strong>Salvage procedure for refractory hip pain — creates pseudoarthrosis ✨</strong></p>
        <ul>
          <li><strong>Femoral head/neck fracture not amenable to internal fixation</strong>
            <ul>
              <li>Comminuted Salter-Harris I/II proximal physeal fracture</li>
              <li>Slipped capital femoral epiphysis (cat especially)</li>
              <li>Failed prior fixation</li>
            </ul>
          </li>
          <li><strong>Coxofemoral luxation refractory to closed/open reduction ✨</strong>
            <ul>
              <li>Recurrent luxation despite stabilization attempts</li>
              <li>Chronic luxation (&gt; 3-5 days; femoral head fibrotic)</li>
            </ul>
          </li>
          <li><strong>Severe hip dysplasia with refractory pain</strong>
            <ul>
              <li>End-stage osteoarthritis</li>
              <li>Failed conservative management (NSAIDs, weight loss, rehab)</li>
              <li>Total hip replacement (THR) not feasible / affordable</li>
              <li>Generally smaller dogs &lt; 20-25 kg (better outcomes than larger)</li>
            </ul>
          </li>
          <li><strong>Legg-Calvé-Perthes disease ✨</strong> (avascular necrosis of femoral head)
            <ul>
              <li>Small breed dogs (Toy Poodle, Yorkie, Cairn Terrier, etc.)</li>
              <li>Typical age 4-12 months</li>
              <li>FHO is treatment of choice — excellent outcomes</li>
            </ul>
          </li>
          <li>Septic coxofemoral arthritis refractory to medical Tx</li>
          <li>Acetabular fracture not surgically reconstructable</li>
          <li>Neoplasia of femoral head/neck (palliative)</li>
          <li>Owner cannot afford / decline THR for cases that would benefit from it</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Patient candidate for total hip replacement (THR) — superior functional outcome typically
            <ul>
              <li>Especially large breed dogs (&gt; 20-25 kg)</li>
              <li>Working dogs requiring full athletic performance</li>
              <li>Discuss as superior alternative when financially feasible</li>
            </ul>
          </li>
          <li>Concurrent severe orthopedic disease in same limb (CCL rupture, fractures)
            <ul>
              <li>Address concurrent issues; FHO will not help if problem isn't hip</li>
            </ul>
          </li>
          <li>Severe contralateral hip disease — both hips can't be done simultaneously
            <ul>
              <li>Stage bilateral FHOs 6-12 weeks apart (ipsilateral healing first)</li>
            </ul>
          </li>
          <li>Severe muscle atrophy / contracture (&gt; 6 mo chronic disuse) — guarded outcome</li>
          <li>Nerve injury affecting affected limb (poor function regardless)</li>
          <li>Owner unable to provide post-op rehabilitation (~ 8-12 weeks of strict program ✨)</li>
          <li>Obesity uncontrolled — significantly worsens outcomes</li>
          <li>Sciatic nerve neoplasia / dysfunction</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Detailed orthopedic exam:
            <ul>
              <li>Lameness assessment (degree, weight-bearing)</li>
              <li>Hip ROM, pain on extension/flexion</li>
              <li>Ortolani sign (laxity test for dysplasia)</li>
              <li>Muscle atrophy comparison (thigh circumference)</li>
              <li>Sciatic nerve function (deep pain, withdrawal, etc.)</li>
            </ul>
          </li>
          <li><strong>Radiographs ✨:</strong>
            <ul>
              <li>Standard ventrodorsal extended-leg pelvis</li>
              <li>VD frog-leg (lateral view of femoral heads)</li>
              <li>Lateral hip</li>
              <li>Document: dysplasia (Norberg angle), DJD, fracture, luxation, Perthes</li>
              <li>Compare contralateral hip</li>
            </ul>
          </li>
          <li>Pre-anesthetic CBC, biochem (especially older patients)</li>
          <li>Coag panel if breed predisposed (vWD)</li>
          <li>Discuss alternatives with owner: conservative Tx, THR, FHO trade-offs</li>
        </ul>

        <p><strong>2. Owner counseling ✨:</strong></p>
        <ul>
          <li><strong>Set realistic expectations:</strong>
            <ul>
              <li>FHO creates a "pseudoarthrosis" (false joint) of fibrous tissue</li>
              <li>Goal: pain-free function, NOT athletic performance</li>
              <li>Smaller dogs/cats: often near-normal function ✓</li>
              <li>Large dogs: more limited, expected mild lifelong limp</li>
              <li>Recovery: 8-12 weeks intensive rehab, full benefit at 6 months</li>
              <li>Lifelong some weight management essential</li>
            </ul>
          </li>
          <li>Compare to THR (better functional outcome but more expensive, specialty)</li>
          <li>Cost: significant rehab commitment (PT, hydrotherapy ideally)</li>
          <li>Some atrophy of thigh muscles may persist</li>
        </ul>

        <p><strong>3. Patient prep:</strong></p>
        <ul>
          <li>NPO 8-12h</li>
          <li>IV catheter (cephalic typically)</li>
          <li>Prep affected hindlimb extensively:
            <ul>
              <li>Clip from midline to hock; dorsal to ventral midline</li>
              <li>Hanging-leg prep technique (sterile drape entire limb)</li>
              <li>3-cycle chlorhexidine scrub</li>
            </ul>
          </li>
          <li>Pre-warm OR + recovery (orthopedic surgery long, hypothermia risk)</li>
        </ul>

        <p><strong>4. Anesthesia plan ✨:</strong></p>
        <ul>
          <li><strong>Premed:</strong>
            <ul>
              <li>Methadone 0.3 mg/kg + dexmed 5-10 mcg/kg IM (younger, healthier)</li>
              <li>Methadone alone if cardiovascular concerns</li>
              <li>± Acepromazine 0.01-0.02 mg/kg if anxious + stable</li>
            </ul>
          </li>
          <li><strong>Induction:</strong>
            <ul>
              <li>Propofol 4-6 mg/kg IV titrated</li>
              <li>Or alfaxalone 1-2 mg/kg IV</li>
              <li>Older / debilitated: etomidate or co-induction with midaz</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong> isoflurane / sevoflurane in 100% O2</li>
          <li><strong>IV fluids:</strong> LRS 5-10 mL/kg/h (long surgery; replacement)</li>
          <li><strong>Locoregional ✨ — strongly recommended:</strong>
            <ul>
              <li><strong>Epidural ✨</strong> — preservative-free morphine 0.1 mg/kg + bupivacaine 0.5% 0.1-0.2 mL/kg
                <ul>
                  <li>Lumbosacral approach</li>
                  <li>Provides 12-24h analgesia</li>
                  <li>Significantly reduces inhalant requirement + post-op pain</li>
                </ul>
              </li>
              <li>Or sciatic + femoral nerve blocks (specialty technique)</li>
            </ul>
          </li>
          <li><strong>Monitoring:</strong> SpO2, ECG, BP (NIBP), EtCO2, temp; arterial line for prolonged cases</li>
          <li>Maintain MAP &gt; 65 mmHg for tissue perfusion + bleeding control</li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step craniolateral approach to hip ✨:</strong></p>

        <p><strong>1. Positioning:</strong></p>
        <ul>
          <li>Lateral recumbency, affected limb up</li>
          <li>Surgical limb draped freely (hanging-leg prep) — allows manipulation</li>
          <li>Down limb cushioned</li>
          <li>Towel rolls for stability</li>
        </ul>

        <p><strong>2. Skin incision:</strong></p>
        <ul>
          <li>Curvilinear incision over greater trochanter</li>
          <li>Length: 8-15 cm depending on patient size</li>
          <li>Centered over greater trochanter, extending cranial + distal</li>
        </ul>

        <p><strong>3. Subcutaneous + tensor fasciae latae:</strong></p>
        <ul>
          <li>Sharp dissection through SC tissue</li>
          <li>Identify junction between tensor fasciae latae (cranial) + biceps femoris (caudal)</li>
          <li>Incise fascia along this avascular line — key landmark for craniolateral approach</li>
        </ul>

        <p><strong>4. Deep dissection:</strong></p>
        <ul>
          <li>Reflect tensor fascia latae cranially, biceps femoris caudally</li>
          <li>Expose: deep gluteal muscle (over greater trochanter), middle gluteal (cranial)</li>
          <li>Identify greater trochanter as landmark</li>
          <li>Optional: partial tenotomy of deep gluteal insertion (for better exposure in large dogs)
            <ul>
              <li>Reflect deep gluteal cranially</li>
              <li>Repair at closure</li>
            </ul>
          </li>
        </ul>

        <p><strong>5. Joint capsule incision:</strong></p>
        <ul>
          <li>Identify joint capsule (deep to gluteals, surrounds femoral head)</li>
          <li>T-incision through capsule:
            <ul>
              <li>Longitudinal limb along femoral neck axis</li>
              <li>Transverse limb at acetabular rim</li>
            </ul>
          </li>
          <li>Reflect capsule flaps for exposure</li>
        </ul>

        <p><strong>6. Femoral head dislocation:</strong></p>
        <ul>
          <li>External rotation + adduction of limb to dislocate femoral head from acetabulum
            <ul>
              <li>Have assistant hold limb in this position</li>
            </ul>
          </li>
          <li>Cut round ligament with curved scissors or osteotome (if intact)</li>
          <li>Femoral head now exposed for ostectomy</li>
        </ul>

        <p><strong>7. Femoral head + neck ostectomy ✨ — critical step:</strong></p>
        <ul>
          <li><strong>Cut location ✨:</strong>
            <ul>
              <li>Cut along axis from medial-proximal to lateral-distal</li>
              <li>Begin: medial aspect of femoral neck just distal to femoral head</li>
              <li>Angle: ~ 45° to long axis of femur</li>
              <li>Exit point: distal to greater trochanter on lateral cortex (not into greater trochanter)</li>
              <li>Goal: complete neck removal, smooth surface, no remnants</li>
            </ul>
          </li>
          <li><strong>Technique options:</strong>
            <ul>
              <li><strong>Oscillating saw ✨</strong> — preferred (precise, fast, less damage)</li>
              <li>Osteotome + mallet (older technique; risk of cracking)</li>
              <li>Bone-cutting forceps (smaller patients)</li>
              <li>Gigli wire saw (rare)</li>
            </ul>
          </li>
          <li><strong>Common errors ✗:</strong>
            <ul>
              <li>Leaving caudal neck remnant (most common ✗) — bone-on-bone contact = pain!</li>
              <li>Cutting into trochanter (gluteal insertion compromise)</li>
              <li>Cut too proximal (acetabular impingement)</li>
              <li>Verify smooth contour by palpation + visualization</li>
            </ul>
          </li>
          <li>Remove femoral head + send for histopath if pathology suspected (Perthes, neoplasia)</li>
          <li>Inspect cut surface — smooth, no spike or remnant</li>
          <li>Bone rongeurs to remove any remnants or sharp edges</li>
        </ul>

        <p><strong>8. Soft tissue interposition (controversial — often omitted in modern practice):</strong></p>
        <ul>
          <li>Some surgeons interpose joint capsule or biceps femoris muscle flap between cut bone + acetabulum
            <ul>
              <li>Theory: reduces bone-on-bone contact, smoother pseudoarthrosis</li>
              <li>Evidence mixed — may not significantly improve outcomes</li>
            </ul>
          </li>
          <li>Modern practice often: capsule closure only, no interposition</li>
          <li>If interposing: capsule sutured to gluteal muscle dorsally to span gap</li>
        </ul>

        <p><strong>9. Lavage + closure:</strong></p>
        <ul>
          <li>Lavage with warm saline; remove bone debris</li>
          <li>Inspect for hemorrhage; address (electrocautery for bleeding muscle vessels)</li>
          <li><strong>Closure:</strong>
            <ul>
              <li>Joint capsule remnants: 2-0 or 3-0 PDS interrupted (if enough tissue)</li>
              <li>Deep gluteal repair if tenotomized: 0 PDS interrupted</li>
              <li>Tensor fasciae latae fascia: 2-0 PDS continuous (key holding layer)</li>
              <li>SC: 3-0 PDS continuous</li>
              <li>Skin: 3-0 nylon interrupted or staples</li>
            </ul>
          </li>
          <li>Range of motion check before closure complete (full ROM expected)</li>
        </ul>

        <p><strong>10. Post-op imaging:</strong></p>
        <ul>
          <li>Lateral hip radiograph immediately post-op
            <ul>
              <li>Verify clean cut, no remnant, no impingement</li>
              <li>Compare to pre-op</li>
            </ul>
          </li>
          <li>Document cut location, alignment</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Orthopedic surgery = clean (low SSI rate without prophylaxis ~ 5%)</li>
          <li>Standard prophylaxis recommended:
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction → q90 min during surgery</li>
              <li>Generally NOT continued post-op for routine clean orthopedic</li>
            </ul>
          </li>
          <li>If septic arthritis pre-existing or contamination:
            <ul>
              <li>Cefazolin or amoxicillin-clavulanate IV intra-op</li>
              <li>Continue PO post-op 7-14 days based on culture</li>
            </ul>
          </li>
        </ul>

        <p><strong>Analgesia (multimodal — critical for orthopedic) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.3 mg/kg IM (full mu agonist preferred)</li>
              <li>Or hydromorphone 0.1 mg/kg IM</li>
              <li>Maropitant 1 mg/kg SC</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li><strong>Epidural ✨</strong> — preservative-free morphine 0.1 mg/kg + bupivacaine 0.5% 0.1-0.2 mL/kg (LS approach) — gold standard for hindlimb orthopedic</li>
              <li>Or sciatic + femoral nerve blocks: bupivacaine 0.5% 0.1-0.3 mL/kg per nerve (specialty)</li>
              <li>Local infiltration of incision: bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg (mix)</li>
              <li>Fentanyl CRI 5-10 mcg/kg/h if needed (long surgery)</li>
              <li>Ketamine CRI 0.6 mg/kg/h (post 0.5 mg/kg loading bolus) — wind-up prevention</li>
            </ul>
          </li>
          <li><strong>NSAID (post-op, with appropriate caution):</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC at recovery (dog)</li>
              <li>Or meloxicam 0.2 mg/kg SC initial, 0.1 mg/kg PO daily × 7-14 days</li>
              <li>Or robenacoxib 1-2 mg/kg PO/SC daily (cat 3-7 days, dog longer)</li>
              <li>Continue 14-21 days post-op for orthopedic pain control</li>
              <li>Caution: not in patients with CKD, GI ulcer history, on steroids</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 14-21 days</li>
              <li>Tramadol 2-5 mg/kg PO q8h × 7-14 days (dog) — variable efficacy</li>
              <li>Gabapentin 10-20 mg/kg PO q8h × 14-21 days (good for orthopedic) ✨</li>
              <li>Amantadine 3-5 mg/kg PO q24h (chronic pain modulation)</li>
              <li>Paracetamol/acetaminophen 10-15 mg/kg PO q12h (DOG ONLY ✗ NEVER cat)</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8h × 3-5 days (especially cat)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Adjunct (chronic):</strong></p>
        <ul>
          <li>Joint supplements: glucosamine + chondroitin + omega-3 fatty acids</li>
          <li>Adequan (PSGAGs) 4.4 mg/kg IM q3-5 days × 8 doses</li>
          <li>Consider monoclonal anti-NGF antibody (Librela/Solensia) for chronic pain</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery in warm padded area</li>
          <li>Monitor pain — ortho cases often need higher analgesic requirements</li>
          <li>Encourage early ambulation within 12-24h ✨ (critical for FHO outcome — no delay!)
            <ul>
              <li>Even toe-touching/partial weight-bearing within first day</li>
              <li>Ice pack to surgical site q4-6h × 24-48h (10-15 min, with barrier)</li>
            </ul>
          </li>
          <li>Continue IV fluids until eating</li>
          <li>Hospitalize 24-48h typically</li>
        </ul>

        <p><strong>Discharge instructions ✨ — owner education essential:</strong></p>
        <ul>
          <li><strong>Early active use is mandatory ✨</strong> — different from most orthopedic surgeries!
            <ul>
              <li>Limb must be used early to develop functional pseudoarthrosis</li>
              <li>NO strict cage rest (atrophy + non-functional joint)</li>
              <li>5-10 minute leash walks 4-6 times daily starting day 1-2</li>
              <li>Encourage limb use, not protection</li>
            </ul>
          </li>
          <li><strong>Activity progression:</strong>
            <ul>
              <li>Week 1: short frequent leash walks, gentle PROM 3-4×/day</li>
              <li>Week 2-4: increase walk duration gradually (10-20 min)</li>
              <li>Week 4-8: light exercise increasing</li>
              <li>Week 8+: gradual return to normal activity</li>
            </ul>
          </li>
          <li>E-collar until skin sutures removed (10-14 days)</li>
          <li>Daily incision check</li>
          <li>NSAID + pain medications per schedule</li>
          <li>Watch for: severe pain, refusal to walk, swelling, discharge, dehiscence</li>
        </ul>

        <p><strong>Physical rehabilitation ✨ ✨ — outcome-determining:</strong></p>
        <ul>
          <li><strong>PROM (passive range of motion) ✨</strong>:
            <ul>
              <li>3-5 sets × 15-20 reps, 3-4× daily starting day 2</li>
              <li>Hip flexion + extension</li>
              <li>Gentle, painless range</li>
              <li>Owner-performed at home</li>
            </ul>
          </li>
          <li><strong>Hot/cold therapy:</strong>
            <ul>
              <li>Cold pack first 48-72h (reduce swelling)</li>
              <li>Warm pack thereafter (relax muscles before exercise)</li>
            </ul>
          </li>
          <li><strong>Hydrotherapy ✨ — gold standard if available:</strong>
            <ul>
              <li>Underwater treadmill 2-3× weekly starting week 2</li>
              <li>Buoyancy reduces weight-bearing strain</li>
              <li>Builds muscle without joint stress</li>
              <li>Significantly improves outcomes</li>
            </ul>
          </li>
          <li>Stair climbing controlled (week 4+)</li>
          <li>Sit-to-stand exercises (strengthens hindquarters)</li>
          <li>Slow leash walks gradually increasing duration</li>
          <li>Massage to thigh muscles (combat atrophy)</li>
          <li>Specialty rehab clinic referral ideal</li>
        </ul>

        <p><strong>Follow-up:</strong></p>
        <ul>
          <li>Recheck 7-10 days for incision + suture removal at 14 days</li>
          <li>Recheck at 4 weeks for orthopedic exam, ROM, weight-bearing</li>
          <li>Recheck at 8 weeks (significant functional improvement expected)</li>
          <li>Recheck at 6 months (final functional assessment)</li>
          <li>Radiograph optional — pseudoarthrosis appearance, soft tissue assessment</li>
        </ul>

        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Lifelong weight management (obesity worsens outcome significantly)</li>
          <li>Maintain muscle mass (regular exercise)</li>
          <li>Joint supplements long-term reasonable</li>
          <li>NSAID PRN for occasional flare-ups</li>
          <li>Most return to near-normal function in small dogs/cats by 4-6 months ✨</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative:</strong></p>
        <ul>
          <li>Sciatic nerve injury (rare with proper technique — nerve courses caudal)</li>
          <li>Femoral head fracture during dislocation (rare, usually pre-existing)</li>
          <li>Hemorrhage (gluteal artery branches; usually controllable)</li>
          <li>Inadequate ostectomy ✗ — incomplete neck removal (most common technical error)</li>
          <li>Greater trochanter fracture (cut into trochanter)</li>
          <li>Acetabular damage (unlikely with care)</li>
          <li>Anesthetic complications</li>
        </ul>

        <p><strong>Early post-op (0-4 weeks):</strong></p>
        <ul>
          <li>Persistent severe pain — assess for:
            <ul>
              <li>Femoral neck remnant ✗ (re-radiograph — most common cause)</li>
              <li>Sciatic neuropraxia (resolves in days-weeks)</li>
              <li>Inadequate analgesia plan</li>
            </ul>
          </li>
          <li>Refusal to bear weight (delays pseudoarthrosis development)</li>
          <li>Wound dehiscence / SSI</li>
          <li>Seroma at surgical site</li>
          <li>Hematoma</li>
          <li>Persistent lameness (early stage normal — expect improvement over weeks)</li>
        </ul>

        <p><strong>Late (months-years):</strong></p>
        <ul>
          <li><strong>Persistent lameness ✗</strong> — major late complication
            <ul>
              <li>Worse in larger dogs</li>
              <li>Causes: inadequate ostectomy, incomplete rehab, obesity, concurrent disease</li>
              <li>Rate: ~ 10-30% have residual lameness depending on size + rehab</li>
            </ul>
          </li>
          <li><strong>Muscle atrophy</strong> — some always present; severity varies</li>
          <li>Reduced limb use / lifelong limp (especially large dogs)</li>
          <li>Decreased range of motion (variable)</li>
          <li>Joint instability/clunking sensation (rare)</li>
          <li>Bone proliferation at cut site (uncommon)</li>
          <li>Need for revision surgery (rare; for remnant or impingement)</li>
          <li>Concurrent contralateral disease progression</li>
          <li>Cosmetic asymmetry (limb shortening 1-2 cm typical)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Smaller dogs (&lt; 20 kg) + cats: excellent</strong> ✓ ✨
            <ul>
              <li>~ 90-95% achieve good-excellent function</li>
              <li>Often near-normal function by 4-6 months</li>
              <li>Minimal residual lameness</li>
              <li>Especially good for: Legg-Perthes patients, cats, small breed Perthes/dysplasia</li>
            </ul>
          </li>
          <li><strong>Medium dogs (20-30 kg): good</strong>
            <ul>
              <li>~ 70-80% achieve acceptable function</li>
              <li>Some residual lameness common</li>
              <li>Functional, not athletic</li>
            </ul>
          </li>
          <li><strong>Large dogs (&gt; 30 kg): variable / guarded</strong>
            <ul>
              <li>~ 50-70% achieve acceptable function</li>
              <li>Lifelong limp common</li>
              <li>THR typically superior choice if affordable</li>
              <li>Better than no treatment for refractory pain</li>
            </ul>
          </li>
          <li><strong>Time to maximum benefit:</strong>
            <ul>
              <li>4 weeks: significant improvement</li>
              <li>2-3 months: good function</li>
              <li>4-6 months: maximum benefit reached</li>
              <li>Patient needs full rehab program</li>
            </ul>
          </li>
          <li><strong>Pain relief:</strong>
            <ul>
              <li>Most patients pain-free by 6-12 weeks ✓</li>
              <li>Eliminates need for chronic NSAIDs in most</li>
            </ul>
          </li>
          <li><strong>Bilateral FHOs:</strong>
            <ul>
              <li>Stage 8-12 weeks apart (one limb fully recovered)</li>
              <li>Outcomes good if patient is small-medium</li>
            </ul>
          </li>
          <li><strong>Negative prognostic factors:</strong>
            <ul>
              <li>Body weight &gt; 25 kg</li>
              <li>Obesity uncontrolled</li>
              <li>Inadequate rehabilitation</li>
              <li>Femoral neck remnant ✗</li>
              <li>Concurrent severe orthopedic disease</li>
              <li>Chronic disuse atrophy pre-op (&gt; 6 mo)</li>
              <li>Owner unable to commit to rehab program</li>
              <li>Poor surgical technique</li>
            </ul>
          </li>
          <li><strong>Comparison to THR:</strong>
            <ul>
              <li>THR: better functional outcome, full athletic return possible</li>
              <li>FHO: salvage; aim for pain-free function, not athletic</li>
              <li>FHO ~ 1/10 cost of THR; appropriate for small dogs/cats</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>FHO = "salvage procedure"</strong> — creates fibrous pseudoarthrosis; goal is pain-free function not athletic performance ✨<br><br>**Small dogs/cats: excellent outcomes ✓**. Larger dogs: THR better if feasible<br><br>⚠️ <strong>Early active use mandatory ✨</strong> — opposite of most orthopedic post-op! Strict rest = poor outcome. **Hydrotherapy + rehab determine outcome**</div>
      `,
    },
  },

];
