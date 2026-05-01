/* ===========================================================================
   pk · Procedures Handbook — procedures-data.js
   ----------------------------------------------------------------------------
   เนื้อหาเชิงโครงสร้างอิง BSAVA Guide to Procedures in Small Animal Practice
   (Bexfield & Riggs, 3rd ed., 2024) — เนื้อหาเรียบเรียงใหม่โดย Alex
   ใช้เป็น quick reference ในห้องตรวจ/ห้องผ่าตัด
   =========================================================================== */

window.PROCEDURES_DATA = [

  /* ============================================================
     EXAMINATION · การตรวจร่างกาย (4)
     ============================================================ */

  {
    id: 'proc-crt',
    titleEn: 'Capillary Refill Time (CRT)',
    titleTh: 'การวัดเวลาการเติมเลือดของเส้นเลือดฝอย',
    type: 'procedure',
    system: 'examination',
    species: ['dog', 'cat'],
    tags: ['CRT', 'perfusion', 'shock', 'vital'],
    aliases: ['CRT', 'capillary refill', 'การวัด CRT'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ประเมิน <strong>peripheral perfusion</strong> เป็นส่วนหนึ่งของ vital signs</li>
          <li>คัดกรอง shock ของ trauma / sepsis / GDV / hemorrhage</li>
          <li>ติดตามการตอบสนอง fluid resuscitation</li>
          <li>ประเมิน hydration status (ร่วมกับ skin tent + MM moisture)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>หมา/แมวที่มี <strong>pigmented gums</strong> (ดำสนิท) — ใช้ที่อื่นแทน เช่น vulva, prepuce, conjunctiva</li>
          <li>เคสที่ไม่ร่วมมือมาก ๆ — ระวังถูกกัด</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>ไม่ต้องอุปกรณ์พิเศษ — แค่นิ้วและตา</li>
          <li>ถ้าแสงน้อย → ใช้ไฟฉาย/penlight ส่อง</li>
          <li>นาฬิกามีเข็มวินาที / โทรศัพท์</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>ยกริมฝีปากบน เปิดเหงือกให้เห็น (ตำแหน่งเหนือเขี้ยวบน — สีชมพูสุด)</li>
          <li>กดเหงือกด้วยปลายนิ้วชี้ ค้างไว้ ~2 วินาที จนเหงือกซีดขาว</li>
          <li>ปล่อยและจับเวลาทันที</li>
          <li>นับจนสีกลับเป็นชมพูเหมือนเดิม</li>
        </ol>
        <p><strong>ค่าปกติ:</strong> 1–2 วินาที</p>
        <ul>
          <li>&lt; 1 วินาที (rapid) → vasodilation, hyperdynamic shock (sepsis ระยะแรก)</li>
          <li>&gt; 2 วินาที (prolonged) → poor perfusion, shock, dehydration, low CO</li>
          <li>&gt; 4 วินาที → severe — ต้อง resuscitate ด่วน</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>ตีความผิด ถ้าวัดในห้องที่แสงไม่พอ</li>
          <li>เหงือกที่กดบ่อย ๆ ในจุดเดิม อาจมีการเปลี่ยนสีจาก trauma</li>
          <li>ภาวะ anemia ทำให้เหงือกซีดเดิมอยู่แล้ว — CRT อาจดูปกติแม้ shock</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>บันทึกค่าใน chart พร้อม MM color, HR, pulse quality</li>
          <li>วัดซ้ำหลัง intervention เช่น fluid bolus 15-20 mL/kg ใน 15-20 นาที</li>
          <li>Tip: ถ้าหมา/แมว uncooperative ลอง vulva/prepuce แทน เห็นชัดเหมือนกัน</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-bcs',
    titleEn: 'Body Condition Scoring (BCS)',
    titleTh: 'การประเมินสภาพร่างกาย',
    type: 'procedure',
    system: 'examination',
    species: ['dog', 'cat'],
    tags: ['BCS', 'obesity', 'weight', 'nutrition'],
    aliases: ['BCS', 'body condition'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ประเมิน nutritional status ใน annual health check</li>
          <li>วางแผน weight management — บอก client ตัวเลข concrete</li>
          <li>คำนวณ ideal body weight สำหรับให้ยาหรืออาหาร</li>
          <li>ติดตามผล diet plan ระหว่าง follow-up</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — แต่ตีความระวังในเคสที่มี ascites, pregnancy, mass</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>BCS chart 9-point scale (WSAVA standard)</li>
          <li>ไม่ต้องอุปกรณ์ — ใช้มือคลำ + ตามอง</li>
        </ul>
      `,
      steps: `
        <ol>
          <li><strong>ดู</strong> จากด้านบน: เห็น waist หลังกระดูกซี่โครงไหม?</li>
          <li><strong>ดู</strong> จากด้านข้าง: เห็น abdominal tuck ไหม?</li>
          <li><strong>คลำ</strong> ซี่โครง: คลำง่ายมีไขมันบาง / ต้องกดแรง / คลำไม่เจอ</li>
          <li><strong>คลำ</strong> spinous process + iliac wing</li>
          <li>ให้คะแนน 1-9</li>
        </ol>
        <p><strong>คะแนน BCS:</strong></p>
        <ul>
          <li>1-3 = Underweight (ผอม)</li>
          <li>4-5 = Ideal ✓</li>
          <li>6 = Slightly overweight</li>
          <li>7 = Overweight</li>
          <li>8-9 = Obese</li>
        </ul>
        <p>ทุก 1 คะแนนเหนือ ideal = น้ำหนักเกิน ~10-15%</p>
      `,
      complications: `
        <ul>
          <li>Inter-observer variability — คนเดียวกันให้คะแนนต่างกันได้</li>
          <li>ขนยาว/หนา (เช่น Pomeranian, Maine Coon) ต้องคลำ ไม่ใช่แค่มอง</li>
          <li>กล้ามเนื้อมาก (working dogs) — แยกกล้ามจากไขมันยาก</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>บันทึก BCS + weight ใน chart ทุก visit</li>
          <li>ถ้า BCS &gt; 6 → คุยเรื่อง weight loss program</li>
          <li>Show chart ให้ client เห็น — มี impact มากกว่าบอกตัวเลข</li>
          <li>Tip: Muscle Condition Score (MCS) ก็ควรประเมินคู่ — สำคัญในแมวแก่/CKD</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-ophthalmic-exam',
    titleEn: 'Basic Ophthalmic Examination',
    titleTh: 'การตรวจตาเบื้องต้น',
    type: 'procedure',
    system: 'examination',
    species: ['dog', 'cat'],
    tags: ['eye', 'STT', 'fluorescein', 'IOP', 'tonometry'],
    aliases: ['STT', 'Schirmer', 'fluorescein', 'ตรวจตา'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Red eye / discharge / squinting</li>
          <li>Trauma ที่ตา</li>
          <li>Suspected corneal ulcer / KCS / glaucoma</li>
          <li>Routine ในเคส brachycephalic (Pug, Shih Tzu, Persian)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>STT:</strong> ห้ามทำถ้าตาเปิด deep ulcer / globe rupture (เสี่ยง perforate)</li>
          <li><strong>IOP:</strong> ระวังในเคส suspected globe rupture</li>
          <li><strong>Fluorescein:</strong> ทำหลังจาก STT แล้ว (fluid รบกวนค่า STT)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Schirmer Tear Test strips</li>
          <li>Fluorescein strip + saline rinse</li>
          <li>Tonometer (TonoVet / TonoPen) — optional</li>
          <li>Penlight + cobalt blue light (UV penlight ก็ใช้ได้)</li>
          <li>Direct ophthalmoscope</li>
        </ul>
      `,
      steps: `
        <p><strong>Order: STT → IOP → Fluorescein → Funduscopy</strong></p>
        <ol>
          <li><strong>STT (Schirmer Tear Test):</strong>
            <ul>
              <li>วาง strip ที่ lower conjunctival sac 1 นาที</li>
              <li>หมา ปกติ ≥ 15 mm/min · &lt; 10 = KCS</li>
              <li>แมว variable มาก (5-25)</li>
            </ul>
          </li>
          <li><strong>IOP (tonometry):</strong>
            <ul>
              <li>ทำ topical anesthesia ก่อน (proparacaine/oxybuprocaine)</li>
              <li>วัด 3 ครั้งเฉลี่ย</li>
              <li>ปกติ 10–20 mmHg · &gt; 25 = glaucoma</li>
            </ul>
          </li>
          <li><strong>Fluorescein:</strong>
            <ul>
              <li>หยด saline ที่ strip → drop ลงตา → rinse ด้วย saline</li>
              <li>ส่อง cobalt blue light → ulcer = สีเขียว stain</li>
            </ul>
          </li>
          <li><strong>Funduscopy:</strong> ส่อง direct ophthalmoscope ในห้องมืด</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>STT — ระคายเคือง corneal surface (ส่วนใหญ่ไม่รุนแรง)</li>
          <li>Tonometry — corneal abrasion ถ้ากดแรง</li>
          <li>Fluorescein retention ใน naso-lacrimal duct → discharge สีเขียวที่จมูก (ไม่อันตราย)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Rinse ตาด้วย saline หลังตรวจเสร็จ</li>
          <li>บันทึกผลทุกค่า + side ที่ตรวจ</li>
          <li>ถ้า fluorescein positive → start corneal ulcer treatment ทันที</li>
          <li>Tip: ทำในห้องที่หรี่ไฟได้เพื่อขยาย pupil — จะเห็น fundus ชัดกว่า</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-pulse-assessment',
    titleEn: 'Pulse Quality Assessment',
    titleTh: 'การประเมิน pulse quality',
    type: 'procedure',
    system: 'examination',
    species: ['dog', 'cat'],
    tags: ['pulse', 'femoral', 'metatarsal', 'shock'],
    aliases: ['ชีพจร', 'pulse'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>ประเมิน cardiovascular status — ส่วนหนึ่งของ vital signs</li>
          <li>คัดกรอง shock / weak peripheral perfusion</li>
          <li>เปรียบเทียบ central vs peripheral pulse (ดู perfusion gradient)</li>
          <li>ตรวจ pulse deficit (HR ที่ฟัง vs pulse ที่คลำ)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี — ปลอดภัย ทำได้ทุกเคส</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>ไม่ต้องอุปกรณ์</li>
          <li>หมา/แมว นอนตะแคงหรือยืน</li>
        </ul>
      `,
      steps: `
        <ol>
          <li><strong>Femoral pulse</strong> (central): คลำที่ medial proximal hindlimb (groin) — บอก central perfusion</li>
          <li><strong>Metatarsal pulse</strong> (peripheral): ที่ dorsal metatarsal — แมวคลำยากใน normal animal · คลำได้แสดงว่า peripheral perfusion ดี</li>
          <li>ประเมิน:
            <ul>
              <li><em>Rate</em>: เทียบกับ heart rate ที่ฟัง — ตรงกันไหม?</li>
              <li><em>Rhythm</em>: regular vs irregular</li>
              <li><em>Quality</em>: bounding / strong / weak / thready / absent</li>
              <li><em>Synchrony</em>: ทั้ง 2 ด้านเท่ากันไหม?</li>
            </ul>
          </li>
        </ol>
      `,
      complications: `
        <ul>
          <li>ไม่มี — non-invasive</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>บันทึกพร้อม CRT + MM + HR</li>
          <li>Pulse deficit (HR &gt; pulse) → arrhythmia เช่น atrial fibrillation</li>
          <li>Bounding pulse → hyperdynamic state, anemia, hyperthyroidism, PDA</li>
          <li>Weak/thready → shock, hypotension, low CO</li>
          <li>Tip: เคส saddle thrombus (แมว) — femoral pulse หาย 1 ข้าง = key finding</li>
        </ul>
      `
    }
  },


  /* ============================================================
     VASCULAR ACCESS · การเข้าหลอดเลือด (3)
     ============================================================ */

  {
    id: 'proc-iv-cephalic',
    titleEn: 'Cephalic IV Catheter Placement',
    titleTh: 'การใส่ IV catheter ที่ cephalic vein',
    type: 'procedure',
    system: 'vascular',
    species: ['dog', 'cat'],
    tags: ['IV', 'catheter', 'cephalic', 'venipuncture'],
    aliases: ['IV cath', 'ใส่สาย', 'แทงเส้น'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>IV fluid therapy</li>
          <li>IV drug administration (especially anesthetic induction)</li>
          <li>Repeated blood sampling</li>
          <li>Emergency access</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Skin infection / dermatitis ที่จุดที่จะแทง</li>
          <li>Phlebitis ของ vein นั้น</li>
          <li>Coagulopathy รุนแรง — ทำได้แต่ระวัง hematoma</li>
          <li>Peripheral edema มาก — เห็นเส้นยาก</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>IV catheter (20-22G แมว · 18-20G หมา · 14-16G เคสใหญ่/ฉุกเฉิน)</li>
          <li>Tape (white + transparent) + bandage material</li>
          <li>Heparin saline flush (หรือ saline ก็ได้)</li>
          <li>T-set / extension set</li>
          <li>Clipper, chlorhexidine + alcohol</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Restrain — ผู้ช่วยจับ + บีบเส้นที่ elbow (จะเห็น vein ชัด)</li>
          <li>Clip ขน + scrub ด้วย chlorhexidine (3 รอบ) → alcohol</li>
          <li>Stretch skin ตึง ๆ ด้วยนิ้วหัวแม่มือ</li>
          <li>แทง catheter มุม ~15-30° เข้าหา vein → เห็น <strong>flash blood</strong> ที่ hub</li>
          <li>ลด angle ลง → เลื่อน catheter+stylet เข้าไปอีก 2-3 mm</li>
          <li>Hold stylet → push catheter เข้าจน hub ชน skin</li>
          <li>ปล่อยมือผู้ช่วย → flush with saline → เช็ค patency (ไม่มี swelling)</li>
          <li>Tape ยึด: 1st white tape รอบ catheter hub → loops back ใต้ leg</li>
          <li>Bandage ทับ — เห็น hub ได้เพื่อเช็ค</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Extravasation</strong> — ของเหลว/ยาออกนอกเส้น (โดยเฉพาะ hyperosmolar/vesicant)</li>
          <li>Phlebitis — แดง บวม เจ็บ ตามแนวเส้น</li>
          <li>Hematoma จาก multiple punctures</li>
          <li>Catheter dislodgment ถ้า fix ไม่ดี</li>
          <li>Thrombosis</li>
          <li>Infection — sepsis ถ้าทิ้งไว้นาน</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Flush every 6-8 ชม. ถ้าไม่ใช้</li>
          <li>เปลี่ยน catheter ทุก 72-96 ชม. (หรือเร็วกว่านั้นถ้ามีอาการ)</li>
          <li>เช็คทุก shift: redness, swelling, discharge, leakage</li>
          <li>Tip: ในเคสฉุกเฉิน/shock — เส้นยุบ คลำยาก ใช้ <strong>cutdown</strong> หรือ <strong>IO catheter</strong> แทน</li>
          <li>Tip: แมว — clip น้อย ๆ ก่อน ป้องกันความเครียดเพิ่ม</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-jugular-sample',
    titleEn: 'Jugular Venipuncture (Blood Sampling)',
    titleTh: 'การเจาะเลือดที่ jugular vein',
    type: 'procedure',
    system: 'vascular',
    species: ['dog', 'cat'],
    tags: ['jugular', 'blood', 'sampling', 'venipuncture'],
    aliases: ['เจาะคอ', 'jugular'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>เจาะเลือดปริมาณมาก (CBC + chem + endocrine etc.)</li>
          <li>Coagulation testing — ต้องการ flow ที่ดีไม่ tissue contamination</li>
          <li>Blood culture (sterile technique)</li>
          <li>เคสที่ peripheral vein ใช้ไม่ได้</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy รุนแรง (DIC, severe thrombocytopenia &lt; 30,000) — เสี่ยง hematoma → airway compression</li>
          <li>Cervical mass / lymphadenopathy</li>
          <li>Suspected ↑ ICP — restraint อาจทำ ICP สูงขึ้น</li>
          <li>Severe respiratory distress — ท่า restraint รบกวนหายใจ</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Needle 21-22G (แมว/หมาเล็ก) · 20-21G (หมาใหญ่)</li>
          <li>Syringe 3-12 mL ขึ้นกับปริมาณ</li>
          <li>Vacutainer holder + tubes (ถ้าจะเก็บหลาย tube)</li>
          <li>Cotton + alcohol wipe</li>
          <li>Pressure bandage หลังเจาะ</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Restrain นั่งหรือนอนตะแคง — ผู้ช่วยยก chin ขึ้นและ extend neck</li>
          <li>คลำ jugular groove (ระหว่าง trachea กับ neck muscle)</li>
          <li>ผู้ช่วยกด vein ที่ thoracic inlet → vein จะนูนขึ้น</li>
          <li>Wipe alcohol</li>
          <li>แทง needle มุม 30° ทิศทาง caudal — เข้า skin → เข้า vein</li>
          <li>ดึง plunger ช้า ๆ → เลือดไหลเข้า syringe</li>
          <li>เก็บปริมาณที่ต้องการ → ปล่อย pressure ที่ผู้ช่วยกด → ดึง needle ออก</li>
          <li>กด cotton แรง 2-3 นาที</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Hematoma</strong> — most common · กดให้แน่นพอ</li>
          <li>Carotid artery puncture (ลึกเกิน) → bright red pulsatile blood — ดึงออก กดให้นาน 5-10 นาที</li>
          <li>Vagal stimulation → bradycardia / syncope (rare)</li>
          <li>Tracheal puncture (rare)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>กด cotton 2-3 นาที (5-10 นาที ถ้า coagulopathy)</li>
          <li>เช็คหลัง release pressure — ไม่มี hematoma ขยาย</li>
          <li>Tip: ใส่เลือดลง EDTA tube ก่อน → invert 8-10 ครั้ง · serum tube ทิ้งไว้ 30 นาที clot</li>
          <li>Tip: เคส small dog/cat — หา vein ยาก ลอง side ที่ 2 ก่อน multiple sticks</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-iv-saphenous',
    titleEn: 'Saphenous IV Catheter Placement',
    titleTh: 'การใส่ IV catheter ที่ saphenous vein',
    type: 'procedure',
    system: 'vascular',
    species: ['dog', 'cat'],
    tags: ['IV', 'catheter', 'saphenous', 'hindlimb'],
    aliases: ['saphenous', 'IV ขาหลัง'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>เคสที่ <strong>cephalic vein ใช้ไม่ได้</strong> (clipping, phlebitis, multi-stick)</li>
          <li>Backup IV access สำหรับเคส critical</li>
          <li>ในแมว — บางครั้ง medial saphenous ดีกว่า cephalic</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Skin infection ที่จุดเดียวกัน</li>
          <li>Hindlimb fracture / surgery ข้างเดียวกัน</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>เหมือน cephalic IV (catheter, tape, flush, scrub)</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Lateral recumbency · ขาบนยกลง</li>
          <li>หมา: <strong>lateral saphenous</strong> — วิ่ง dorso-lateral ของ tibia ลง hock</li>
          <li>แมว: <strong>medial saphenous</strong> — medial side ของ tibia (ใกล้ skin มาก)</li>
          <li>ผู้ช่วยกด vein ที่ proximal tibia (caudal aspect ของ stifle)</li>
          <li>Clip + scrub</li>
          <li>แทง catheter มุม 15-20° → flash → advance เหมือน cephalic</li>
          <li>Tape + bandage รอบ tibia (ห้ามแน่นเกินไป — limb swelling)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Catheter kinking — vein อยู่ใกล้ joint → bend ง่าย</li>
          <li>Bandage แน่นเกิน → distal limb swelling</li>
          <li>Same as cephalic — extravasation, phlebitis, etc.</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>เช็ค distal limb (toes) ทุก shift — สีและ swelling</li>
          <li>Flush regularly</li>
          <li>Tip: แมว medial saphenous แทงได้ง่ายมาก แค่ vein ค่อนข้างเล็ก ใช้ 22G</li>
        </ul>
      `
    }
  },


  /* ============================================================
     RESPIRATORY · ระบบหายใจ (3)
     ============================================================ */

  {
    id: 'proc-ett',
    titleEn: 'Endotracheal Intubation',
    titleTh: 'การใส่ท่อช่วยหายใจ',
    type: 'procedure',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['intubation', 'ETT', 'anesthesia', 'airway', 'NEW3RD'],
    aliases: ['intubate', 'ETT', 'ใส่ท่อ', 'ท่อช่วยหายใจ'],
    source: 'BSAVA Procedures, 3rd ed. (เพิ่มใหม่)',
    sections: {
      indications: `
        <ul>
          <li>Anesthesia — ทุกเคส general anesthesia</li>
          <li>Respiratory failure / apnea — secure airway</li>
          <li>CPR — assist ventilation</li>
          <li>Upper airway obstruction (BOAS, laryngeal paralysis)</li>
          <li>Aspiration risk — ป้องกัน aspiration</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Tracheal trauma / collapse รุนแรง — อาจต้อง tracheostomy</li>
          <li>ไม่มีอุปกรณ์ครบ (ไม่มี oxygen, ไม่มี emergency drug)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>ETT หลายขนาด — เลือกขนาดเหมาะกับ trachea (ใหญ่สุดที่เข้าได้สบาย)
            <ul>
              <li>หมาใหญ่ 9-12 mm · กลาง 7-9 mm · เล็ก 5-7 mm</li>
              <li>แมว 3.5-4.5 mm (uncuffed สำหรับ kitten) · 4-5 mm (cuffed)</li>
            </ul>
          </li>
          <li>Laryngoscope (Miller blade)</li>
          <li>Lidocaine spray (สำคัญในแมว — laryngospasm)</li>
          <li>Lube (water-based)</li>
          <li>Stylet — ในเคส difficult airway</li>
          <li>Cuff syringe + manometer (ถ้ามี)</li>
          <li>Tie/gauze สำหรับ secure ETT</li>
          <li>Capnograph + auscultation tool</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Pre-oxygenate (mask) 3-5 นาทีถ้าทำได้</li>
          <li>Induce anesthesia → จน jaw tone หายไป</li>
          <li>Sternal recumbency · neck extended · open mouth · pull tongue</li>
          <li>ใช้ laryngoscope กด epiglottis ลง — เห็น vocal cords</li>
          <li><strong>แมว:</strong> spray lidocaine 0.1 mL ที่ arytenoids → รอ 30-60 วินาที (ป้องกัน laryngospasm)</li>
          <li>Lube ETT tip + insert ผ่าน vocal cords ระหว่าง inspiration</li>
          <li><strong>เช็ค placement:</strong>
            <ul>
              <li>Capnography (gold standard) — เห็น waveform ETCO2</li>
              <li>ฟัง breath sounds ทั้ง 2 ปอด</li>
              <li>เห็น chest expansion symmetric</li>
              <li>ไม่มีลมออกจากปาก ตอน bag</li>
            </ul>
          </li>
          <li>Inflate cuff — bag จน peak ~20 cmH2O ไม่มีลม leak (manometer ดีสุด)</li>
          <li>Secure ETT ด้วย gauze tie รอบ maxilla (หมา) หรือ behind ears (แมว)</li>
          <li>Connect anesthesia circuit</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Esophageal intubation</strong> — ต้องเช็คเสมอ! capno + auscult</li>
          <li><strong>Endobronchial intubation</strong> (ลึกเกิน) — one-lung ventilation → hypoxia</li>
          <li><strong>Laryngospasm (แมว)</strong> — ป้องกันด้วย lidocaine spray</li>
          <li>Tracheal trauma / rupture (cuff over-inflation) — โดยเฉพาะแมว</li>
          <li>Aspiration ระหว่าง intubation</li>
          <li>Cuff leak / kinked tube</li>
          <li>Damaged teeth จาก laryngoscope</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor capno + SpO2 ตลอด anesthesia</li>
          <li>Check cuff pressure ทุก 30 นาที</li>
          <li>Extubate เมื่อมี swallow reflex — แต่ <strong>แมว extubate ก่อน</strong> หมา (laryngospasm risk ตอน recovery)</li>
          <li>Tip: ETT ที่กว้างเกินไปดีกว่าแคบเกิน — แคบเพิ่ม resistance</li>
          <li>Tip: ในแมว ห้าม overinflate cuff — tracheal rupture เป็นได้ง่ายมาก</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-oxygen-therapy',
    titleEn: 'Oxygen Therapy (Delivery)',
    titleTh: 'การให้ oxygen',
    type: 'procedure',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['oxygen', 'O2', 'hypoxemia', 'supplemental'],
    aliases: ['ให้ออกซิเจน', 'O2'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Hypoxemia (SpO2 &lt; 95% room air)</li>
          <li>Respiratory distress (tachypnea, increased effort)</li>
          <li>Pre-oxygenation ก่อน induction</li>
          <li>CPR / shock</li>
          <li>Pulmonary edema, pneumonia, pneumothorax (post-tap)</li>
          <li>Anemia ทำให้ tissue hypoxia</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>ไม่มี absolute — แต่ระวัง:</li>
          <li>O2 toxicity ถ้าได้ FiO2 &gt; 60% &gt; 24-48 ชม.</li>
          <li>ในเคส COPD chronic CO2 retention (rare ในสัตว์)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>O2 source (cylinder + regulator + flowmeter)</li>
          <li>Delivery method — เลือกตาม FiO2 และ tolerance</li>
          <li>Humidifier (ถ้าใช้นานหลายชม.)</li>
          <li>Pulse oximeter</li>
        </ul>
      `,
      steps: `
        <p><strong>เลือกวิธีให้ตาม clinical state:</strong></p>
        <ol>
          <li><strong>Flow-by</strong> — ถือ tube ห่างจมูก 5-10 cm
            <ul>
              <li>FiO2 ~25-35% · ใช้ได้ทันที · ไม่ stress · short-term</li>
              <li>Flow 2-5 L/min</li>
            </ul>
          </li>
          <li><strong>Mask</strong> — ครอบจมูก/หน้า
            <ul>
              <li>FiO2 ~35-50% · เคสที่ tolerate ได้</li>
              <li>Flow 4-8 L/min</li>
            </ul>
          </li>
          <li><strong>Nasal cannula / nasal prong</strong> (1-2 จมูก)
            <ul>
              <li>FiO2 ~30-50% · long-term, ทน</li>
              <li>Flow 50-150 mL/kg/min</li>
              <li>Lube tube + insert ไป medial canthus depth · suture ที่ snout</li>
            </ul>
          </li>
          <li><strong>Oxygen cage / chamber</strong>
            <ul>
              <li>FiO2 ปรับได้ 30-100% · ไม่ stress</li>
              <li>Cooling + humidifier needed (overheat ได้)</li>
              <li>เปิดบ่อย → FiO2 drop</li>
            </ul>
          </li>
          <li><strong>Intubation + ventilation</strong> — FiO2 100% available</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>O2 toxicity — pulmonary fibrosis ถ้า FiO2 &gt; 60% นาน</li>
          <li>Drying of mucosa → humidify ถ้า nasal &gt; few hours</li>
          <li>Nasal prong displacement — sneezing</li>
          <li>Hyperthermia ใน O2 cage โดยเฉพาะ brachycephalic</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor SpO2 + RR + effort q1h</li>
          <li>Wean off ค่อย ๆ เมื่อ stable on room air</li>
          <li>Tip: <strong>Stress = oxygen demand เพิ่ม</strong> · ให้ flow-by ก่อนแม้ตอนวินิจฉัย — minimize handling stress</li>
          <li>Tip: แมวมัก fight mask — ใช้ flow-by หรือ chamber ดีกว่า</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-thoracocentesis',
    titleEn: 'Thoracocentesis',
    titleTh: 'การเจาะช่องเยื่อหุ้มปอด',
    type: 'procedure',
    system: 'respiratory',
    species: ['dog', 'cat'],
    tags: ['thoracocentesis', 'pleural', 'effusion', 'pneumothorax'],
    aliases: ['thoracic tap', 'เจาะปอด', 'เจาะอก'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Diagnostic:</strong> sample pleural effusion (transudate vs exudate vs chylous vs hemorrhagic)</li>
          <li><strong>Therapeutic:</strong>
            <ul>
              <li>Pneumothorax tension → emergency!</li>
              <li>Pleural effusion ที่ทำให้หายใจลำบาก</li>
              <li>Hemothorax</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy รุนแรง (relative — ถ้า life-threatening ทำได้)</li>
          <li>Patient ไม่ stable พอจะ restrain</li>
          <li>Suspected diaphragmatic hernia (ระวัง puncture organ)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Butterfly needle 19-21G · หรือ over-the-needle catheter 18-20G</li>
          <li>3-way stopcock + extension set</li>
          <li>Syringe 20-60 mL</li>
          <li>EDTA + plain tubes สำหรับ analysis</li>
          <li>Clip + scrub</li>
          <li>Lidocaine 2% สำหรับ local block</li>
          <li>Bowl เก็บของเหลว</li>
          <li>O2 supply เตรียมไว้</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Pre-oxygenate (flow-by/mask) 3-5 นาที</li>
          <li>Sternal หรือ standing position</li>
          <li>Site:
            <ul>
              <li><strong>Effusion (fluid):</strong> 7th-8th ICS, ระดับล่าง 1/3 (gravity)</li>
              <li><strong>Pneumothorax (air):</strong> 7th-8th ICS, ระดับบน 1/3</li>
            </ul>
          </li>
          <li>Clip + scrub aseptic technique</li>
          <li>Local block lidocaine ที่ ICS — ลึกถึง pleura</li>
          <li>แทง needle ที่ <strong>cranial border</strong> ของ rib (intercostal vessels อยู่ caudal — หลีกเลี่ยง)</li>
          <li>เมื่อรู้สึก "pop" ผ่าน parietal pleura → angle needle ให้ขนานกับ chest wall</li>
          <li>Aspirate ผ่าน 3-way stopcock — ดูดของเหลว/อากาศ</li>
          <li>เก็บ sample ลง EDTA + plain tube</li>
          <li>ถอดเมื่อ negative pressure (resistance) — ไม่มีอะไรเข้ามา</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Pneumothorax iatrogenic</strong> (puncture lung)</li>
          <li>Lung laceration → hemothorax</li>
          <li>Cardiac puncture (ถ้าแทง side ผิดในเคส cardiomegaly)</li>
          <li>Vasovagal response — bradycardia</li>
          <li>Re-expansion pulmonary edema (ดูด large volume เร็วเกิน)</li>
          <li>Infection (introduce pyothorax)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Auscultate ทั้ง 2 ปอดหลังทำ — เช็ค iatrogenic pneumothorax</li>
          <li>Thoracic radiograph หลังทำ (ถ้า indicated)</li>
          <li>Submit fluid: cytology + culture + protein + cell count</li>
          <li>Monitor RR, effort, SpO2 q15min × 2 ชม.</li>
          <li>Tip: ดึง side ที่มี fluid มากกว่าก่อน · ทำทั้ง 2 ข้างถ้าจำเป็น</li>
          <li>Tip: <strong>ถ้าทำซ้ำ &gt; 2 ครั้ง/24 ชม.</strong> → พิจารณา <strong>chest tube</strong></li>
        </ul>
      `
    }
  },


  /* ============================================================
     URINARY · ระบบขับถ่าย (3)
     ============================================================ */

  {
    id: 'proc-cystocentesis',
    titleEn: 'Cystocentesis',
    titleTh: 'การเจาะกระเพาะปัสสาวะ',
    type: 'procedure',
    system: 'urinary',
    species: ['dog', 'cat'],
    tags: ['cystocentesis', 'urine', 'sample', 'bladder'],
    aliases: ['เจาะกระเพาะ', 'urine tap'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Sterile urine sample สำหรับ <strong>culture &amp; sensitivity</strong></li>
          <li>Urinalysis ที่ไม่ contaminate</li>
          <li>Decompression bladder ใน urethral obstruction (emergency, with caution)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Empty bladder (palpate ไม่ได้/ไม่เห็นบน US)</li>
          <li>Coagulopathy รุนแรง</li>
          <li>Bladder mass / friable bladder</li>
          <li>Pyometra / abdominal mass ที่อาจ misidentify</li>
          <li>Pregnant — ระวัง puncture uterus</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Needle 22-23G (1.5 inch หมาใหญ่ · 1 inch แมว/หมาเล็ก)</li>
          <li>Syringe 6-12 mL</li>
          <li>Alcohol wipe</li>
          <li>Ultrasound (highly recommended) — ถ้าไม่มี ใช้ palpation</li>
          <li>Sterile container สำหรับ sample</li>
        </ul>
      `,
      steps: `
        <p><strong>Method 1: Ultrasound-guided (preferred)</strong></p>
        <ol>
          <li>Dorsal recumbency · clip ขนแนว midline แค่จุดเดียว</li>
          <li>Wipe alcohol</li>
          <li>วาง probe บน abdomen → identify bladder</li>
          <li>แทง needle in-plane → เห็น tip ใน bladder</li>
          <li>Aspirate gently 3-6 mL</li>
          <li>ดึง needle ออกตรง ๆ</li>
        </ol>
        <p><strong>Method 2: Blind (palpation)</strong></p>
        <ol>
          <li>Palpate bladder + isolate ระหว่างนิ้ว</li>
          <li>Site: midline, caudal abdomen — 1-2 cm cranial ถึง pubis</li>
          <li>Wipe alcohol</li>
          <li>แทง needle perpendicular ลงไป — feel "give" เมื่อเข้า bladder</li>
          <li>Aspirate gently — <strong>ห้ามดูดแรงเกิน</strong> (collapse bladder wall against needle)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Hematuria</strong> — common, mild, transient (24-48 ชม.)</li>
          <li>Severe hemorrhage (rare, มักเคส coagulopathy)</li>
          <li>Bladder rupture (โดยเฉพาะ obstructed bladder ที่ตึงมาก)</li>
          <li>Vagal response — bradycardia</li>
          <li>Inadvertent organ puncture (uterus, intestine — rare with US guidance)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor 1-2 ชม.หลังทำ — ปัสสาวะมี blood เล็กน้อยปกติ</li>
          <li>Submit sample ทันที (refrigerate ถ้าต้องรอ)</li>
          <li>For culture — ใส่ sterile container, transport ภายใน 30 นาที (หรือ refrigerate)</li>
          <li>Tip: ในเคส obstruction รุนแรง — <strong>cystocentesis ก่อน catheterize</strong> ลด pressure</li>
          <li>Tip: ระวัง bladder ที่ distend มากในเคส obstruction → wall thin ฉีกขาดง่าย</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-cath-male-dog',
    titleEn: 'Urinary Catheterization (Male Dog)',
    titleTh: 'การใส่สายสวนปัสสาวะ — หมาเพศผู้',
    type: 'procedure',
    system: 'urinary',
    species: ['dog'],
    tags: ['catheter', 'urinary', 'urethral', 'obstruction'],
    aliases: ['urinary cath', 'foley', 'ใส่สายปัสสาวะ'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Urethral obstruction relief</li>
          <li>Urine output monitoring (critically ill, post-op, AKI)</li>
          <li>Contrast study (cystography)</li>
          <li>Recumbent patient — prevent urine scald</li>
          <li>Pre-op for urinary tract surgery</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe urethral trauma — risk false passage</li>
          <li>UTI active (relative — ถ้าจำเป็นต้อง culture ก่อน)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Foley catheter (Tom Cat ใช้ในแมวจริง ๆ — หมาใช้ Foley/red rubber)
            <ul>
              <li>Size: 5-10 Fr ขึ้นกับขนาด</li>
            </ul>
          </li>
          <li>Sterile gloves + drape</li>
          <li>Sterile lube</li>
          <li>Chlorhexidine prep</li>
          <li>Saline syringe สำหรับ inflate cuff</li>
          <li>Closed urine collection bag</li>
          <li>Sedation +/- (ขึ้นกับ tolerance)</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Sedate ถ้าจำเป็น (most dogs need it)</li>
          <li>Lateral recumbency · ผู้ช่วยดึงขาบนขึ้น</li>
          <li>Extrude penis จาก prepuce → flush ด้วย dilute chlorhexidine + saline</li>
          <li>Open sterile pack · don sterile gloves</li>
          <li>Lube catheter tip ~5 cm</li>
          <li>Insert catheter ผ่าน urethral orifice</li>
          <li><strong>ผ่าน os penis</strong> — บางครั้งต้องดัน gently · อย่าฝืน
            <ul>
              <li>ถ้าติด → ลด catheter size · ลอง twist gently · ถ้ายังไม่ได้ → ลอง smaller catheter</li>
            </ul>
          </li>
          <li>Advance ต่อจน urine flow ออกมา + เข้าไปอีก 2-3 cm</li>
          <li>Inflate Foley cuff ด้วย saline (ตามที่ระบุบน catheter — ปกติ 3-5 mL)</li>
          <li>Pull back gently จน feel resistance (cuff ชน bladder neck)</li>
          <li>Connect to closed collection system</li>
          <li>Secure catheter ที่ ventral abdomen + tail base ด้วย suture loop</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>UTI / catheter-associated bacteriuria</strong> — most common (close to inevitable &gt; 3 วัน)</li>
          <li>Urethral trauma / false passage</li>
          <li>Hematuria (mild)</li>
          <li>Cuff bursting → catheter dislodge</li>
          <li>Bladder over-distension if catheter clogged</li>
          <li>Patient self-removal (E-collar!)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor urine output q4-8h (record mL/kg/h — normal &gt; 1-2)</li>
          <li>Empty closed bag q4-6h · keep below bladder level</li>
          <li>Clean prepuce + catheter junction q12h with chlorhexidine</li>
          <li>E-collar at all times</li>
          <li><strong>Do NOT routinely culture</strong> while catheter in place — colonization vs infection ยาก</li>
          <li>Remove ASAP เมื่อไม่ต้องการแล้ว</li>
          <li>Tip: <strong>ถ้าเข้าไม่ได้</strong> ให้ลอง pelvic urethra (sphincter spasm) — ลด catheter size, more lube, sedation</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-cath-female-dog',
    titleEn: 'Urinary Catheterization (Female Dog)',
    titleTh: 'การใส่สายสวนปัสสาวะ — หมาเพศเมีย',
    type: 'procedure',
    system: 'urinary',
    species: ['dog'],
    tags: ['catheter', 'urinary', 'female', 'urethral'],
    aliases: ['female cath', 'ใส่สายปัสสาวะหมาเมีย'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>เหมือนหมาเพศผู้ — urethral obstruction (rare in female), urine output monitoring, contrast study</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>เหมือนหมาเพศผู้</li>
          <li>Active estrus — vagina swollen, ทำได้ยาก</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Foley 8-12 Fr</li>
          <li>Vaginal speculum (Killian / nasal speculum) — บางครั้งช่วย</li>
          <li>Sterile gloves, drape, lube, chlorhexidine</li>
          <li>Light source (head lamp / pen light)</li>
          <li>Sedation +/- (most need)</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Sedate</li>
          <li>Sternal recumbency · ขาห้อยขอบโต๊ะ (frog-leg)</li>
          <li>Clean vulva ด้วย dilute chlorhexidine</li>
          <li>Open sterile pack · don gloves</li>
          <li><strong>Method 1: Digital (palpation)</strong>
            <ul>
              <li>Insert ลfinger เข้า vagina ตามแนว dorsal wall</li>
              <li>คลำ external urethral orifice ที่ ventral midline (~5-10 cm depth)</li>
              <li>Guide catheter ผ่าน finger เข้า urethral orifice</li>
            </ul>
          </li>
          <li><strong>Method 2: Visual (speculum)</strong>
            <ul>
              <li>Insert speculum dorsally ก่อน → rotate มาตรง</li>
              <li>มองหา urethral papilla (mound) ที่ ventral midline</li>
              <li>Insert catheter ตรง entrance</li>
            </ul>
          </li>
          <li>Advance ~5-10 cm จน urine flow</li>
          <li>Inflate Foley cuff</li>
          <li>Connect closed bag · suture ที่ tail/perineum</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Same as male</li>
          <li>Misplacement ใน vagina (most common error) — ตรวจสอบ urine flow ก่อน inflate cuff</li>
          <li>Vaginal trauma</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Same as male</li>
          <li>Tip: female เพศเมียมัก<strong>ยากกว่าตัวผู้</strong> ในตอนแรก แต่ practice ทำให้ง่าย</li>
          <li>Tip: ถ้าหา orifice ไม่เจอ → ลอง <strong>วาง catheter ที่ใส่ stylet</strong> ตรง midline ค่อย ๆ guide</li>
        </ul>
      `
    }
  },


  /* ============================================================
     GI · ระบบทางเดินอาหาร (2)
     ============================================================ */

  {
    id: 'proc-gastric-lavage',
    titleEn: 'Gastric Lavage',
    titleTh: 'การล้างกระเพาะ',
    type: 'procedure',
    system: 'gi',
    species: ['dog', 'cat'],
    tags: ['gastric', 'lavage', 'toxicity', 'GDV', 'poisoning'],
    aliases: ['gastric lavage', 'ล้างกระเพาะ'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Acute toxicity — recently ingested toxin (within 1-2 ชม.)</li>
          <li>Cannot induce emesis — sedated patient, contraindicated emesis (caustic, hydrocarbon)</li>
          <li>GDV (gastric dilatation-volvulus) — pre-surgical decompression</li>
          <li>Persistent vomiting — diagnostic gastric content sampling</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Caustic / corrosive ingestion (acid, alkali)</li>
          <li>Petroleum/hydrocarbon ingestion → aspiration risk</li>
          <li>Sharp object ingestion</li>
          <li>Coagulopathy</li>
          <li>Severe esophageal disease</li>
          <li>Patient ไม่สามารถ protect airway (without intubation)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>General anesthesia + intubation (mandatory — protect airway!)</li>
          <li>Orogastric tube — ขนาดใหญ่ที่สุดที่ใส่ได้ (typical 18-30 Fr)</li>
          <li>Mouth gag / roll of tape</li>
          <li>Lukewarm water (10 mL/kg per cycle)</li>
          <li>Bucket / container เก็บ effluent</li>
          <li>Activated charcoal (1-4 g/kg) สำหรับให้หลังเสร็จ</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Induce + intubate with cuffed ETT (cuff inflated สำคัญ!)</li>
          <li>Lateral recumbency · head down slight (Trendelenburg-like)</li>
          <li>Measure tube — nose to last rib · mark</li>
          <li>Place mouth gag · pass tube via mouth → esophagus → stomach
            <ul>
              <li>Verify position: aspirate gastric content · auscultate epigastric while injecting air</li>
            </ul>
          </li>
          <li>Pour 10 mL/kg lukewarm water via funnel/syringe</li>
          <li>Lower tube end below patient · gravity drain</li>
          <li>Repeat 5-10 cycles จน effluent clear</li>
          <li>Final cycle: instill activated charcoal slurry · clamp tube · withdraw</li>
          <li>Recover from anesthesia carefully — keep ETT cuff inflated until extubation</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Aspiration pneumonia</strong> — leading cause of M&amp;M (intubation reduces but doesn't eliminate)</li>
          <li>Esophageal/gastric perforation (rare, with rough handling)</li>
          <li>Hypothermia (cold water)</li>
          <li>Hyponatremia (large volume of plain water)</li>
          <li>Vagal stimulation — bradycardia</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor SpO2, RR, body temp during recovery</li>
          <li>Thoracic rad ถ้า suspect aspiration</li>
          <li>Activated charcoal q4-6h × 24 ชม. ในเคสที่ enterohepatic recirculation</li>
          <li>Tip: <strong>การล้างมีประสิทธิภาพสูงสุดเมื่อทำใน 1 ชม.</strong> หลัง ingestion · &gt; 2 ชม. มัก useless</li>
          <li>Tip: ในเคส GDV — หลัง decompress + lavage แล้ว ส่ง surgery ทันที (volvulus ยังอยู่)</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-enema',
    titleEn: 'Enema Administration',
    titleTh: 'การสวนทวาร',
    type: 'procedure',
    system: 'gi',
    species: ['dog', 'cat'],
    tags: ['enema', 'constipation', 'megacolon'],
    aliases: ['สวนอุจจาระ', 'enema'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Severe constipation / obstipation</li>
          <li>Megacolon (esp cat)</li>
          <li>Pre-procedural bowel evacuation (radiograph, endoscopy)</li>
          <li>Removal of toxic material</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>NEVER use phosphate enema (Fleet) in cats &amp; small dogs</strong> — fatal hyperphosphatemia + hypocalcemia</li>
          <li>Suspected GI perforation</li>
          <li>Recent colon/rectal surgery</li>
          <li>Severe rectal stricture</li>
          <li>Coagulopathy</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Enema solution:
            <ul>
              <li>Warm water + soap (mild) · 5-10 mL/kg</li>
              <li>Lactulose 1-3 mL/kg</li>
              <li>Saline + dioctyl sodium sulfosuccinate (DSS / docusate)</li>
              <li><strong>NOT phosphate enemas in cats</strong></li>
            </ul>
          </li>
          <li>Soft red rubber catheter / Foley (10-14 Fr cat · 14-18 Fr dog)</li>
          <li>Lube</li>
          <li>Container + funnel</li>
          <li>Towels, gloves, apron — messy procedure!</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Sedate ถ้าเคส severe (ลด stress + obstipation)</li>
          <li>Standing or lateral recumbency · tail up</li>
          <li>Lube catheter tip thoroughly</li>
          <li>Insert ผ่าน anus gently · advance 5-15 cm (cat-dog)</li>
          <li>Inject solution slowly via gravity (raise container 30-60 cm above) — &gt; 5-10 นาที</li>
          <li><strong>Stop ถ้า resistance / pain</strong></li>
          <li>Allow retain 5-10 นาที ถ้าทำได้</li>
          <li>Massage abdomen gently อาจ help</li>
          <li>Allow defecation — patient จะมี urge ออกใน 5-30 นาที</li>
          <li>Repeat ถ้า incomplete — total ไม่เกิน 2-3 cycles ในวันเดียว</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Phosphate toxicity</strong> (cat/small dog) — fatal!</li>
          <li>Colonic perforation (rough technique, brittle colon)</li>
          <li>Vagal stimulation → bradycardia, hypotension</li>
          <li>Hypothermia (cold solution)</li>
          <li>Patient stress / aggression (esp cat)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Provide warm comfortable area</li>
          <li>Hydration (most constipation cases dehydrated) — IV fluid</li>
          <li>Address underlying cause:
            <ul>
              <li>Cat megacolon — long-term lactulose, cisapride, low-residue diet</li>
              <li>Dog — review diet, exercise, BPH, perineal hernia</li>
            </ul>
          </li>
          <li>Tip: ในเคส severe — manual extraction under anesthesia บางครั้งจำเป็น</li>
          <li>Tip: <strong>ห้าม phosphate enema</strong> ในแมวเด็ดขาด · check label เสมอ</li>
        </ul>
      `
    }
  },


  /* ============================================================
     SKIN & WOUND · ผิวหนังและบาดแผล (3)
     ============================================================ */

  {
    id: 'proc-fna',
    titleEn: 'Fine Needle Aspirate (FNA)',
    titleTh: 'การดูดเซลล์ด้วยเข็มเล็ก',
    type: 'procedure',
    system: 'skin',
    species: ['dog', 'cat'],
    tags: ['FNA', 'cytology', 'mass', 'lymph node'],
    aliases: ['FNA', 'cytology', 'ดูดก้อน'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Cutaneous / subcutaneous mass evaluation</li>
          <li>Lymph node sampling — staging, lymphoma diagnosis</li>
          <li>Internal organ FNA (liver, spleen, kidney) — under US guidance</li>
          <li>Joint effusion (arthrocentesis — separate procedure)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Suspected mast cell tumor (MCT)</strong> — mass aspirate ไม่ใช่ contraindication แต่อาจ trigger degranulation; pre-treat with diphenhydramine สำหรับ large mass</li>
          <li>Coagulopathy (relative — สำหรับ deep aspirate)</li>
          <li>Hemangiosarcoma suspected — risk hemorrhage</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Needle 22-25G (1 inch superficial · 1.5 inch deep)</li>
          <li>Syringe 6-12 mL</li>
          <li>Glass slides (3-5)</li>
          <li>Diff-Quik (in-house) หรือ submit to lab</li>
          <li>Alcohol wipe (no scrub needed for superficial)</li>
        </ul>
      `,
      steps: `
        <p><strong>Method 1: Aspiration</strong></p>
        <ol>
          <li>Stabilize mass between fingers</li>
          <li>Insert needle</li>
          <li>Apply suction (pull plunger to ~1/3 syringe volume)</li>
          <li>Redirect 3-5 ทิศทาง within mass — without exiting skin</li>
          <li><strong>Release suction</strong> ก่อนถอน needle (cells stay in needle, not in syringe)</li>
          <li>ถอน needle</li>
          <li>Detach syringe → fill with air → reattach → push cells onto slide</li>
        </ol>
        <p><strong>Method 2: Capillary (preferred for vascular mass)</strong></p>
        <ol>
          <li>Insert needle without syringe — capillary action only</li>
          <li>Redirect 3-5 ทิศทาง</li>
          <li>Withdraw → attach syringe + air → push onto slide</li>
        </ol>
        <p><strong>Smear technique:</strong></p>
        <ul>
          <li>Drop sample on glass slide</li>
          <li>Place 2nd slide on top → slide gently apart (NOT crush!)</li>
          <li>Air dry · stain with Diff-Quik</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Hematoma (mild · pressure 2-3 นาที)</li>
          <li>Mast cell degranulation → swelling, hypotension (rare with cutaneous MCT)</li>
          <li>Hemorrhage from vascular mass</li>
          <li>Pneumothorax (chest wall mass)</li>
          <li>Iatrogenic infection (rare)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Pressure 1-2 นาที</li>
          <li>Monitor for swelling 30 นาที</li>
          <li>Tip: <strong>Capillary technique</strong> ดีกว่า aspiration สำหรับ:
            <ul>
              <li>Lymph node (often dilute with aspiration)</li>
              <li>Vascular mass</li>
              <li>Splenic FNA</li>
            </ul>
          </li>
          <li>Tip: <strong>3 slides minimum</strong> · 1 stained in-house preview · 2 unstained → submit to clinical pathologist</li>
          <li>Tip: บอก lab ตำแหน่ง + clinical findings เสมอ — affects interpretation</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-skin-biopsy',
    titleEn: 'Skin Biopsy (Punch &amp; Wedge)',
    titleTh: 'การตัดชิ้นเนื้อผิวหนัง',
    type: 'procedure',
    system: 'skin',
    species: ['dog', 'cat'],
    tags: ['biopsy', 'punch', 'histopath', 'dermatology'],
    aliases: ['biopsy', 'punch biopsy', 'ตัดผิวหนัง'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Persistent dermatologic disease ที่ไม่ตอบ empirical therapy</li>
          <li>Suspected immune-mediated skin disease (PF, lupus)</li>
          <li>Suspected neoplasia ที่ FNA non-diagnostic</li>
          <li>Alopecia + atypical findings</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy รุนแรง</li>
          <li>Site ที่ผ่าน scrub-prep มาก ๆ (artifact!)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Punch biopsy 4-8 mm (6 mm ได้ใช้บ่อยสุด)</li>
          <li>หรือ #15 scalpel (wedge biopsy for larger area)</li>
          <li>Lidocaine 2% with adrenaline (subcutaneous local block)</li>
          <li>Suture material (3-0 or 4-0 monofilament)</li>
          <li>Formalin 10% (volume ~10× sample size)</li>
          <li>Sterile gloves, drape</li>
          <li>Hemostat, fine forceps, suture scissors</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Sedation/local anesthesia ขึ้นกับ site/temperament</li>
          <li><strong>เลือก site:</strong> active lesion (newly developed) — avoid:
            <ul>
              <li>Center of ulcer (fibrosis only)</li>
              <li>Crust without underlying skin</li>
              <li>Scrubbed area</li>
            </ul>
          </li>
          <li><strong>Mark site with permanent marker</strong> ก่อน prep</li>
          <li>Clip very gently (scissors better than clippers — preserve surface)</li>
          <li><strong>NO scrubbing</strong> — wipe with sterile saline only · alcohol gentle</li>
          <li>Inject lidocaine subcutaneously (raise wheal)</li>
          <li><strong>Punch technique:</strong>
            <ul>
              <li>Stabilize skin with non-dominant hand</li>
              <li>Press punch perpendicular to skin · rotate one direction only</li>
              <li>Stop when feel "give" (subcutis) — go just deeper</li>
              <li>Lift sample with fine forceps (grasp subcutis, NOT epidermis)</li>
              <li>Cut subcutaneous attachment with scissors</li>
            </ul>
          </li>
          <li>Place sample <strong>epidermis-up</strong> on sterile cardboard for 1-2 นาที (prevents curling)</li>
          <li>Drop in formalin · label tube</li>
          <li>Close skin defect with 1-2 sutures</li>
          <li>Take 3-5 biopsies if multifocal disease</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Hemorrhage (mild — pressure)</li>
          <li>Infection (rare)</li>
          <li>Wound dehiscence</li>
          <li>Insufficient sample / artifact (poor technique)</li>
          <li>Patient self-trauma at site</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>E-collar 7-10 วัน</li>
          <li>Suture removal day 10-14</li>
          <li>Inform pathologist clinical history (DDx, prior therapy, lesion description, distribution)</li>
          <li>Tip: <strong>มัก submit หลายชิ้น</strong> ถ้า multifocal · ราคา histopath ต่อ slide ไม่ต่างกันมาก</li>
          <li>Tip: <strong>ห้าม punch biopsy บน foot pad</strong> (cartilage damage) — ใช้ wedge แทน</li>
          <li>Tip: เคส suspected pemphigus → biopsy <strong>intact pustule</strong> (uncommonly!) · ถ้าเจอ pustule ต้องรีบ biopsy ก่อน rupture</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-bandaging',
    titleEn: 'Wound Bandaging (3-Layer)',
    titleTh: 'การพันแผล (3 ชั้น)',
    type: 'procedure',
    system: 'skin',
    species: ['dog', 'cat'],
    tags: ['bandage', 'wound', 'dressing', 'bandaging'],
    aliases: ['bandage', 'พันแผล', 'dressing'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Wound protection (post-op, traumatic)</li>
          <li>Hemorrhage control (pressure bandage)</li>
          <li>Immobilization (fracture, soft tissue injury)</li>
          <li>Drug delivery (transdermal patches under wrap)</li>
          <li>IV catheter protection</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe limb edema with poor circulation (relative — risk ischemia)</li>
          <li>Wound with active necrotic infection ที่ต้อง air exposure</li>
        </ul>
      `,
      preparation: `
        <p><strong>3-layer principle:</strong></p>
        <ul>
          <li><strong>Primary layer (contact):</strong>
            <ul>
              <li>Adherent (wet-to-dry — debridement) — saline-soaked gauze · ใช้ 2-3 days แรก</li>
              <li>Non-adherent (Telfa, paraffin gauze) — granulation phase</li>
              <li>Hydrogel — dry necrotic wounds</li>
              <li>Hydrocolloid — partial-thickness, low exudate</li>
            </ul>
          </li>
          <li><strong>Secondary layer (absorbent + padding):</strong>
            <ul>
              <li>Cast padding / cotton roll · ทำหน้าที่ดูดซับ + padding</li>
            </ul>
          </li>
          <li><strong>Tertiary layer (protective + holding):</strong>
            <ul>
              <li>Conforming gauze (Kling)</li>
              <li>Vetwrap (cohesive elastic bandage)</li>
              <li>Tape (ที่หัวและปลาย — เพื่อ secure)</li>
            </ul>
          </li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Clean wound · remove debris · debride if needed</li>
          <li>Apply primary layer — cover wound + slight overlap</li>
          <li>Apply secondary layer — เริ่มจาก distal (toes) ขึ้นมา proximal
            <ul>
              <li>50% overlap · firm but not tight</li>
              <li>Padding extra ที่ pressure points (carpus, hock)</li>
            </ul>
          </li>
          <li><strong>Leave 2 middle toes exposed</strong> สำหรับ check perfusion (limb bandage)</li>
          <li>Apply tertiary layer — same direction · 50% overlap
            <ul>
              <li>Vetwrap: <strong>do NOT stretch</strong> — apply at relaxed tension</li>
              <li>End at proximal · tape last turn</li>
            </ul>
          </li>
          <li>Tape proximal และ distal edges กับ skin/fur — prevent slip</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Bandage too tight</strong> → ischemia, necrosis, "bandage cut-off" syndrome</li>
          <li>Bandage too loose → slip, expose wound</li>
          <li>Wet bandage (urine, water) → maceration, infection</li>
          <li>Patient self-removal (E-collar essential)</li>
          <li>Pressure necrosis at uneven padding</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Check exposed toes q4-8h: warm, pink, no swelling</li>
          <li><strong>Cool/cold + swelling = remove bandage NOW</strong></li>
          <li>Bandage change frequency:
            <ul>
              <li>Wet-to-dry: q24h</li>
              <li>Granulation: q2-3 day</li>
              <li>Dry/clean: q3-7 day</li>
            </ul>
          </li>
          <li>E-collar at all times</li>
          <li>Tip: <strong>"toes รู้สึกเย็น = ปัญหา"</strong> — สอน owner เช็คทุก ๆ ชม. แรก</li>
          <li>Tip: foot bandage on dog ที่ active — ใช้ <strong>plastic bag</strong> เวลาออกข้างนอก (ป้องกันเปียก)</li>
        </ul>
      `
    }
  },


  /* ============================================================
     CARDIAC · หัวใจ (2)
     ============================================================ */

  {
    id: 'proc-ecg',
    titleEn: 'ECG Recording',
    titleTh: 'การบันทึกคลื่นไฟฟ้าหัวใจ',
    type: 'procedure',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['ECG', 'electrocardiogram', 'arrhythmia'],
    aliases: ['ECG', 'EKG', 'คลื่นหัวใจ'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Suspected arrhythmia (irregular rhythm, pulse deficit)</li>
          <li>Syncope / collapse evaluation</li>
          <li>Cardiac disease workup (cardiomegaly, murmur)</li>
          <li>Pre-anesthetic screening for high-risk patient</li>
          <li>Electrolyte abnormality (severe hyperkalemia, etc.)</li>
          <li>Drug monitoring (digoxin, anti-arrhythmic)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — non-invasive, safe</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>ECG machine (3-lead minimum, 6-lead preferred)</li>
          <li>Alligator clips (atraumatic — no teeth) or adhesive electrodes</li>
          <li>Electrode gel / alcohol</li>
          <li>Quiet room (minimize artifact)</li>
        </ul>
      `,
      steps: `
        <ol>
          <li><strong>Right lateral recumbency</strong> (standard) — for limb leads</li>
          <li>Restrain gently — minimize muscle tremor (causes artifact)</li>
          <li>Apply gel/alcohol at electrode sites</li>
          <li><strong>Lead placement (alligator clip color):</strong>
            <ul>
              <li><strong>Red:</strong> Right forelimb (above elbow)</li>
              <li><strong>Yellow:</strong> Left forelimb</li>
              <li><strong>Green:</strong> Left hindlimb (above stifle)</li>
              <li><strong>Black (ground):</strong> Right hindlimb</li>
            </ul>
          </li>
          <li>"<strong>Christmas in the front, traffic in the back</strong>" — Red+Green hot · Yellow+Black ground</li>
          <li>Set paper speed 50 mm/s · sensitivity 10 mm/mV</li>
          <li>Record at least 30 sec lead II + brief recording of all 6 leads</li>
          <li>If arrhythmia → record &gt; 1-2 นาที on lead II</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Skin irritation from gel/alcohol (rare)</li>
          <li>Stress-induced arrhythmia (sinus tachycardia common)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Wipe gel off skin</li>
          <li>Save tracing — paper or digital · annotate with date, patient ID, body temp</li>
          <li>Systematic interpretation:
            <ul>
              <li>Rate</li>
              <li>Rhythm (regular/irregular)</li>
              <li>P-QRS-T morphology</li>
              <li>P-QRS relationship</li>
              <li>Intervals (PR, QRS, QT)</li>
              <li>Axis</li>
            </ul>
          </li>
          <li>Tip: artifact หา panting → close mouth · muscle tremor → relax patient · electrical interference → unplug nearby devices</li>
          <li>Tip: ในเคส <strong>intermittent arrhythmia</strong> → consider <strong>Holter monitor</strong> 24-72 ชม. แทน in-clinic ECG</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-bp-indirect',
    titleEn: 'Indirect Blood Pressure (Doppler / Oscillometric)',
    titleTh: 'การวัดความดันโลหิตทางอ้อม',
    type: 'procedure',
    system: 'cardiovascular',
    species: ['dog', 'cat'],
    tags: ['BP', 'blood pressure', 'Doppler', 'oscillometric', 'hypertension'],
    aliases: ['วัดความดัน', 'BP'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Suspected hypertension (CKD, hyperthyroidism cat, hyperadrenocorticism)</li>
          <li>Hypotension monitoring (anesthesia, shock, sepsis)</li>
          <li>Pre-anesthetic baseline</li>
          <li>Critical care monitoring</li>
          <li>Routine annual screen in geriatric cat (CKD/hyperthyroidism risk)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — but limb with IV catheter, fracture, edema → use other limb/tail</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Doppler unit + ultrasound gel</li>
          <li>Sphygmomanometer (manual) or oscillometric machine (Cardell, etc.)</li>
          <li>Cuff — <strong>width = 30-40% of limb circumference</strong>
            <ul>
              <li>Too narrow → falsely high</li>
              <li>Too wide → falsely low</li>
            </ul>
          </li>
          <li>Quiet room · let patient acclimate 5-10 นาที</li>
        </ul>
      `,
      steps: `
        <p><strong>Doppler method (preferred for cat &amp; small dog — measures systolic only):</strong></p>
        <ol>
          <li>Lateral recumbency (or sit) — patient calm</li>
          <li>Clip small area at:
            <ul>
              <li>Median artery (volar carpus, foreleg)</li>
              <li>Coccygeal artery (ventral tail base)</li>
              <li>Metatarsal artery (medial hindlimb)</li>
            </ul>
          </li>
          <li>Apply gel · place Doppler probe → find pulse signal (whoosh sound)</li>
          <li>Place cuff <strong>proximal</strong> to probe</li>
          <li>Inflate cuff until sound disappears + 20 mmHg</li>
          <li>Slowly deflate — record pressure when sound returns = <strong>systolic BP</strong></li>
          <li>Record <strong>5-7 readings</strong> · discard 1st · average remaining</li>
          <li>Note cuff size + limb used</li>
        </ol>
        <p><strong>Oscillometric (machine):</strong></p>
        <ol>
          <li>Apply cuff to limb / tail</li>
          <li>Press button — machine inflates &amp; reads automatically</li>
          <li>Get systolic, diastolic, MAP</li>
          <li>Multiple readings</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Inaccurate readings (stress, wrong cuff size, motion)</li>
          <li>Cuff bruising (rare)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Reference values:
            <ul>
              <li>Normal: 110-160 mmHg systolic (dog/cat)</li>
              <li>Hypertension: &gt; 160 mmHg consistently</li>
              <li>Severe HTN: &gt; 180 mmHg → end-organ damage risk</li>
              <li>Hypotension: &lt; 90 mmHg</li>
            </ul>
          </li>
          <li>Repeat measurements over multiple visits before diagnosing HTN (avoid white-coat effect)</li>
          <li>Tip: <strong>"5-7 readings, drop the first"</strong> — first reading often elevated from stress</li>
          <li>Tip: oscillometric inaccurate ในเคส arrhythmia / hypotension &lt; 80 mmHg — Doppler ดีกว่า</li>
        </ul>
      `
    }
  },


  /* ============================================================
     EMERGENCY · ฉุกเฉิน (3)
     ============================================================ */

  {
    id: 'proc-cpr',
    titleEn: 'CPR (Basic Life Support — RECOVER guidelines)',
    titleTh: 'การช่วยฟื้นคืนชีพ (CPR)',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['CPR', 'cardiac arrest', 'resuscitation', 'RECOVER'],
    aliases: ['ปั๊มหัวใจ', 'CPR', 'CPCR'],
    source: 'BSAVA Procedures, 3rd ed. + RECOVER 2024',
    sections: {
      indications: `
        <ul>
          <li><strong>Cardiopulmonary arrest:</strong> apnea + no pulse + unresponsive</li>
          <li><strong>Imminent arrest:</strong> agonal breathing, severe bradycardia + hypotension</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>DNR (do-not-resuscitate) order from owner</li>
          <li>Terminal disease without realistic recovery</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li><strong>Pre-prepared crash cart</strong> — drugs (epinephrine, atropine, lidocaine), fluids, ETT, ambu bag</li>
          <li>Code chart with drug doses pre-calculated by weight</li>
          <li>Trained team — ideally 4+ people</li>
          <li>ECG, capnography, defibrillator (if available)</li>
        </ul>
      `,
      steps: `
        <p><strong>BLS — start IMMEDIATELY (no time wasted on diagnostics)</strong></p>
        <ol>
          <li><strong>Call for help</strong> — assign roles (compressor, ventilator, drugs, recorder)</li>
          <li><strong>Chest compressions</strong> (start within 30 sec of arrest recognition):
            <ul>
              <li>Lateral recumbency</li>
              <li>Rate <strong>100-120/min</strong></li>
              <li>Depth <strong>1/3-1/2 chest width</strong></li>
              <li>Allow full recoil between compressions</li>
              <li>Switch compressor every 2 นาที (fatigue → ineffective)</li>
            </ul>
          </li>
          <li><strong>Ventilation:</strong>
            <ul>
              <li>Intubate ASAP (within 1-2 นาที)</li>
              <li>10 breaths/min (1 breath every 6 sec)</li>
              <li>No sync with compressions — ventilate continuously</li>
              <li>FiO2 100%</li>
            </ul>
          </li>
          <li><strong>2-min cycles:</strong> compress + ventilate × 2 นาที → check rhythm 5-10 sec → resume</li>
        </ol>

        <p><strong>ALS — drugs / defibrillation:</strong></p>
        <ol>
          <li>IV/IO access ASAP</li>
          <li><strong>Epinephrine</strong> 0.01 mg/kg IV/IO q3-5 นาที (low dose)
            <ul><li>หรือ ETT route 0.1 mg/kg ถ้าไม่มี IV</li></ul>
          </li>
          <li><strong>Atropine</strong> 0.04 mg/kg IV — สำหรับ asystole/PEA + suspected vagal cause</li>
          <li><strong>Defibrillation</strong> สำหรับ VF/pulseless VT — biphasic 2-4 J/kg</li>
          <li><strong>Reversal drugs</strong> — naloxone, atipamezole, flumazenil ถ้า relevant</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Rib fractures (common, acceptable)</li>
          <li>Pneumothorax</li>
          <li>Liver/spleen laceration</li>
          <li>Failure to ROSC</li>
          <li>Post-arrest syndrome ถ้าสำเร็จ</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li><strong>Post-cardiac arrest care</strong>:
            <ul>
              <li>O2 supplementation</li>
              <li>Maintain MAP &gt; 80 mmHg</li>
              <li>Avoid hyperthermia (post-arrest mild hypothermia 32-34°C ดี — ลด neurological injury)</li>
              <li>Monitor electrolytes, lactate, glucose</li>
              <li>ECG monitoring 24-72 ชม.</li>
            </ul>
          </li>
          <li>Outcomes — survival to discharge ในสัตว์ ~6-7% เท่านั้น (ต่างกว่าคน)</li>
          <li>Tip: <strong>การทำ CPR คุณภาพดี &gt; 2 นาที ก่อนหยุดประเมิน</strong> — interruption ลด ROSC</li>
          <li>Tip: เตรียม <strong>code chart</strong> ติดผนังในห้อง ICU/เตรียมผ่าตัด — ดู dose ทันที ไม่คำนวณช้าตอนเหตุ</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-pocus',
    titleEn: 'Point-of-Care Ultrasound (POCUS)',
    titleTh: 'อัลตร้าซาวนด์ข้างเตียง',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['POCUS', 'ultrasound', 'AFAST', 'TFAST', 'emergency', 'NEW3RD'],
    aliases: ['POCUS', 'AFAST', 'TFAST', 'ultrasound'],
    source: 'BSAVA Procedures, 3rd ed. (เพิ่มใหม่)',
    sections: {
      indications: `
        <ul>
          <li><strong>AFAST</strong> (Abdominal FAST) — trauma, suspected hemoabdomen, peritonitis</li>
          <li><strong>TFAST</strong> (Thoracic FAST) — trauma, dyspnea evaluation, suspected pneumothorax/pleural effusion/pericardial effusion</li>
          <li><strong>Vet BLUE</strong> (lung ultrasound) — pulmonary edema, pneumonia, lung consolidation</li>
          <li>Bladder volume estimation</li>
          <li>Pregnancy / pyometra screen</li>
          <li>Free fluid sampling guidance</li>
          <li>IV access guidance (when peripheral failed)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — non-invasive · but DO NOT delay critical interventions for imaging</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Portable ultrasound (curvilinear or microconvex probe most useful)</li>
          <li>Alcohol (ใช้แทน gel ได้ — penetrates fur)</li>
          <li>Standard gel (better image quality if clipped)</li>
          <li>Clip if time permits — alcohol if not</li>
        </ul>
      `,
      steps: `
        <p><strong>AFAST — 4-quadrant abdominal scan:</strong></p>
        <ol>
          <li>Right lateral or sternal recumbency</li>
          <li><strong>4 windows</strong> (look for free fluid):
            <ul>
              <li><strong>DH (Diaphragmatic-Hepatic):</strong> sub-xiphoid · sagittal · find diaphragm + liver + gallbladder</li>
              <li><strong>SR (Spleno-Renal):</strong> left flank · find spleen + left kidney</li>
              <li><strong>CC (Cysto-Colic):</strong> caudal abdomen · midline · find bladder</li>
              <li><strong>HR (Hepato-Renal):</strong> right flank · find right kidney + liver</li>
            </ul>
          </li>
          <li>Score: 0-4 (number of positive windows for free fluid)</li>
          <li>If &gt; 0 → consider abdominocentesis</li>
        </ol>

        <p><strong>TFAST — 5 sites:</strong></p>
        <ol>
          <li><strong>CTS bilateral</strong> (Chest Tube Site, dorsal): pneumothorax check — look for "lung sliding" (sliding = no pneumothorax · absent sliding = pneumothorax)</li>
          <li><strong>PCS bilateral</strong> (Pericardial Site): caudal to elbow · look for pleural/pericardial effusion</li>
          <li><strong>DH</strong>: same as AFAST · sub-xiphoid view of pericardium</li>
        </ol>

        <p><strong>Vet BLUE — lung scan (8 sites bilateral):</strong></p>
        <ol>
          <li>Look for <strong>B-lines</strong> (vertical comet-tail artifacts) → pulmonary edema, pneumonia</li>
          <li>0-1 B-lines per field = normal</li>
          <li>≥3 B-lines = wet lung (CHF, pneumonia, ARDS)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>None directly — but misinterpretation can lead to wrong treatment</li>
          <li>Time spent on POCUS could delay other care if not efficient</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Document findings (still images / clips ถ้าทำได้)</li>
          <li>POCUS = <strong>SCREENING tool</strong>, not replacement for full radiology</li>
          <li>Can repeat as patient evolves (e.g., AFAST q2-4h post-trauma)</li>
          <li>Tip: <strong>"Use POCUS to ask binary questions"</strong> — Is there fluid? Yes/No · Is there sliding? Yes/No</li>
          <li>Tip: เริ่มจาก <strong>known landmark</strong> (bladder, gallbladder) → orientation easier</li>
          <li>Tip: ใน CHF cat — Vet BLUE B-lines + LA enlargement → diagnostic accuracy &gt; 90% เทียบกับ echo</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-pericardiocentesis',
    titleEn: 'Pericardiocentesis',
    titleTh: 'การเจาะระบายเยื่อหุ้มหัวใจ',
    type: 'procedure',
    system: 'emergency',
    species: ['dog', 'cat'],
    tags: ['pericardiocentesis', 'pericardial effusion', 'tamponade'],
    aliases: ['pericardial tap', 'เจาะเยื่อหุ้มหัวใจ'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li><strong>Cardiac tamponade</strong> — life-threatening emergency
            <ul>
              <li>Signs: muffled heart sounds, weak pulse, JVD, electrical alternans on ECG, hypotension</li>
            </ul>
          </li>
          <li>Diagnostic — sample pericardial fluid (cytology, culture)</li>
          <li>Symptomatic relief in chronic effusion</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy รุนแรง (relative — life-saving overrides)</li>
          <li>Small effusion volume → high risk myocardial puncture without tamponade benefit</li>
          <li>Operator inexperience without supervision</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Over-the-needle catheter 14-18G (length 1.5-3 inch)</li>
          <li>3-way stopcock + extension tubing</li>
          <li>Syringe 20-60 mL</li>
          <li>EDTA + plain tubes</li>
          <li>ECG monitor (essential!) — ventricular ectopy = needle in myocardium</li>
          <li>Ultrasound (highly recommended)</li>
          <li>Lidocaine 2% local block</li>
          <li>Clip + scrub</li>
        </ul>
      `,
      steps: `
        <ol>
          <li><strong>NO sedation if hemodynamically unstable</strong> (vasodilation worsens tamponade)
            <ul>
              <li>Light sedation if needed (butorphanol low-dose)</li>
            </ul>
          </li>
          <li>Right lateral recumbency (sternal also OK)</li>
          <li>Connect ECG · monitor continuously</li>
          <li><strong>Site:</strong> right side, 5th-6th ICS (between ribs) at costochondral junction
            <ul>
              <li>Right side avoids lung lobes &amp; coronary vessels</li>
              <li>Confirm with ultrasound if available</li>
            </ul>
          </li>
          <li>Clip + scrub aseptic</li>
          <li>Local block lidocaine — skin to pleura</li>
          <li>Insert catheter at <strong>cranial border of rib</strong> · perpendicular slightly cranio-dorsal direction</li>
          <li>Advance slowly — feel "pop" through pericardium · withdraw stylet
            <ul>
              <li>Free flow of dark red/serous fluid expected</li>
              <li><strong>Watch ECG: VPCs = needle in myocardium</strong> → withdraw 1-2 mm</li>
            </ul>
          </li>
          <li>Aspirate via 3-way stopcock — drain as much as possible</li>
          <li>Sample first ~5 mL into EDTA + plain tubes (BEFORE clot if possible)</li>
          <li>Save aliquot for "<strong>does it clot?</strong>" test:
            <ul>
              <li>Pure pericardial fluid → does NOT clot (fibrinolysis)</li>
              <li>Clots → mixed with peripheral blood (myocardial puncture)</li>
            </ul>
          </li>
          <li>Withdraw catheter slowly</li>
        </ol>
      `,
      complications: `
        <ul>
          <li><strong>Coronary artery laceration</strong> → fatal hemorrhage (rare with right-side approach)</li>
          <li>Myocardial puncture → ventricular arrhythmia · withdraw immediately</li>
          <li>Lung laceration → pneumothorax</li>
          <li>Vasovagal response — bradycardia</li>
          <li>Iatrogenic infection</li>
          <li>Re-accumulation (most cases — 50% within days/weeks unless treated)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Monitor ECG, BP, HR, RR for 6-12 ชม.</li>
          <li>Repeat ultrasound to check residual fluid</li>
          <li>Submit fluid: cytology + culture + PCV/TP</li>
          <li>Identify underlying cause (echo for HSA, idiopathic, etc.)</li>
          <li>Tip: <strong>Improvement is dramatic</strong> — patient often dramatically better within minutes of drainage</li>
          <li>Tip: <strong>"ไม่ clot = pericardial · clot = blood"</strong> — quick bedside test</li>
        </ul>
      `
    }
  },


  /* ============================================================
     LAB / SAMPLING · ห้องปฏิบัติการ (3)
     ============================================================ */

  {
    id: 'proc-skin-scraping',
    titleEn: 'Skin Scraping (Superficial &amp; Deep)',
    titleTh: 'การขูดผิวหนัง',
    type: 'procedure',
    system: 'lab',
    species: ['dog', 'cat'],
    tags: ['skin scrape', 'parasites', 'mites', 'demodex', 'sarcoptes'],
    aliases: ['ขูดผิว', 'skin scrape', 'mite check'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Suspected ectoparasites (Demodex, Sarcoptes, Cheyletiella, Notoedres)</li>
          <li>Pruritic dermatitis</li>
          <li>Alopecia evaluation</li>
          <li>Crusty / scaly skin disease</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>None — but avoid scraping over open wounds</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>#10 scalpel blade (dull edge for scraping — safer)</li>
          <li>Mineral oil (single drop)</li>
          <li>Glass slides + coverslips</li>
          <li>Microscope (4×, 10× objective)</li>
        </ul>
      `,
      steps: `
        <p><strong>Superficial scraping (Sarcoptes, Cheyletiella, surface mites):</strong></p>
        <ol>
          <li>Apply mineral oil to blade edge</li>
          <li>Scrape large area (multiple sites) — superficial epidermis</li>
          <li>Transfer to slide with mineral oil</li>
          <li>Coverslip · scan at 4× systematically</li>
          <li>Multiple sites essential — Sarcoptes often missed (low yield)</li>
        </ol>

        <p><strong>Deep scraping (Demodex):</strong></p>
        <ol>
          <li>Squeeze skin firmly between fingers (extrudes Demodex from follicle)</li>
          <li>Scrape <strong>until capillary ooze</strong> appears (deep enough to reach hair follicles)</li>
          <li>Apply oil → transfer to slide</li>
          <li>Multiple sites (≥3) — primary lesions, not secondary</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Skin laceration (deep scraping) — usually minor</li>
          <li>Patient discomfort</li>
          <li>False negatives — Sarcoptes ~50% sensitive · Demodex ~85% (so positive = diagnostic; negative ≠ rule out)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Apply pressure if bleeding</li>
          <li>Document parasite type, count, life stages</li>
          <li>Tip: <strong>Sarcoptes negative ไม่ rule out</strong> · ถ้า clinically suspected → trial therapy (selamectin/isoxazoline)</li>
          <li>Tip: Demodex puppy — incidental finding ใน normal puppy เป็น possible · clinical signs + count matter</li>
          <li>Tip: ในแมว — Notoedres ที่ขอบหู · always scrape head/face</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-ear-cytology',
    titleEn: 'Ear Cytology',
    titleTh: 'การตรวจเซลล์จากหู',
    type: 'procedure',
    system: 'lab',
    species: ['dog', 'cat'],
    tags: ['ear', 'otitis', 'cytology', 'malassezia', 'staph'],
    aliases: ['ตรวจหู', 'ear swab'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Otitis externa — characterize organism (yeast vs cocci vs rods)</li>
          <li>Recurrent otitis monitoring</li>
          <li>Pre/post treatment comparison</li>
          <li>Differentiate inflammatory vs infectious otitis</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Ruptured tympanic membrane (relative — careful technique, avoid deep cleaning)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Cotton-tipped applicator (sterile)</li>
          <li>Glass slides</li>
          <li>Diff-Quik stain</li>
          <li>Microscope (10×, 40× objective; 100× oil for organisms)</li>
        </ul>
      `,
      steps: `
        <ol>
          <li>Examine pinna + external canal first (look for parasites, masses)</li>
          <li>Insert cotton swab into vertical canal (no further than visible) — gently rotate</li>
          <li>Roll swab onto slide — both ears (label L/R)</li>
          <li><strong>Heat fix (gentle flame brief)</strong> — fixes wax / oily debris</li>
          <li>Stain Diff-Quik:
            <ul>
              <li>Solution 1 (fixative methanol) × 5 dips</li>
              <li>Solution 2 (eosin) × 5 dips</li>
              <li>Solution 3 (azure) × 5 dips</li>
              <li>Rinse · air dry</li>
            </ul>
          </li>
          <li>Examine systematically:
            <ul>
              <li>Low-power (10×): overall background, debris, inflammatory cells</li>
              <li>High-power oil (100×): organisms, count per field</li>
            </ul>
          </li>
        </ol>

        <p><strong>Common findings:</strong></p>
        <ul>
          <li><strong>Malassezia (yeast):</strong> "peanut-shaped" budding · normal ≤5/HPF · &gt;5 = significant</li>
          <li><strong>Cocci (Staph):</strong> round, in clusters · &gt;5/HPF significant</li>
          <li><strong>Rods (Pseudomonas etc):</strong> elongated · ANY = significant · culture mandatory</li>
          <li><strong>Inflammatory cells:</strong> neutrophils + macrophages</li>
          <li>Mites: rare in cytology (usually direct otoscopy seen)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Trauma to canal (deep insertion)</li>
          <li>Pushing debris deeper</li>
          <li>Patient distress</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Treat based on cytology results:
            <ul>
              <li>Yeast → antifungal (clotrimazole, miconazole)</li>
              <li>Cocci → topical antibiotic (mupirocin, gentamicin)</li>
              <li>Rods → culture + sensitivity mandatory · empirical fluoroquinolone</li>
            </ul>
          </li>
          <li>Address underlying cause: allergy, conformation, foreign body</li>
          <li>Recheck cytology q2-4 wk</li>
          <li>Tip: <strong>"normal" wax ใน healthy ear:</strong> sparse cocci/yeast OK · pathology = quantity + inflammation + clinical signs</li>
          <li>Tip: <strong>BOTH ears</strong> always — even unilateral disease (silent contralateral common)</li>
        </ul>
      `
    }
  },

  {
    id: 'proc-arthrocentesis',
    titleEn: 'Arthrocentesis (Joint Tap)',
    titleTh: 'การเจาะข้อ',
    type: 'procedure',
    system: 'lab',
    species: ['dog', 'cat'],
    tags: ['arthrocentesis', 'joint', 'synovial', 'IMPA'],
    aliases: ['joint tap', 'เจาะข้อ', 'ดูดข้อ'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Suspected immune-mediated polyarthritis (IMPA)</li>
          <li>Suspected septic arthritis</li>
          <li>Joint effusion of unknown cause</li>
          <li>Hemarthrosis (post-trauma, coagulopathy)</li>
          <li>Confirm OA vs inflammatory disease</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Skin infection / pyoderma at tap site</li>
          <li>Coagulopathy (relative)</li>
          <li>Joint prosthesis (specialist procedure)</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Sedation/general anesthesia (most cases need)</li>
          <li>Sterile gloves, drape</li>
          <li>Needle 22-25G (1-1.5 inch)</li>
          <li>Syringe 3-6 mL</li>
          <li>EDTA tube (cytology) + plain tube + culture media</li>
          <li>Slides for direct smear</li>
          <li>Clip + chlorhexidine prep (aseptic technique mandatory)</li>
        </ul>
      `,
      steps: `
        <p><strong>Polyarthritis workup — sample 4 joints minimum:</strong> carpus + hock bilateral</p>

        <p><strong>Carpal arthrocentesis (most common):</strong></p>
        <ol>
          <li>Sedate</li>
          <li>Lateral recumbency · joint flexed slightly</li>
          <li>Clip + scrub aseptic</li>
          <li>Palpate joint space — depression dorsal aspect when flexed</li>
          <li>Sterile gloves</li>
          <li>Insert needle <strong>perpendicular</strong> through skin into joint
            <ul>
              <li>Feel "pop" through joint capsule</li>
            </ul>
          </li>
          <li>Apply gentle suction — fluid usually scant (&lt; 0.5 mL even with effusion)</li>
          <li>Make air-dried smear immediately</li>
          <li>If sufficient → split EDTA + culture + plain</li>
          <li>Press 30 sec · bandage</li>
        </ol>

        <p><strong>Other joints:</strong></p>
        <ul>
          <li><strong>Tarsus:</strong> dorsomedial approach, joint flexed</li>
          <li><strong>Stifle:</strong> lateral or medial parapatellar approach, slight flexion</li>
          <li><strong>Elbow:</strong> caudal approach, joint flexed 90°</li>
        </ul>

        <p><strong>Interpretation:</strong></p>
        <ul>
          <li>Normal: &lt; 3,000 cells/μL · mostly mononuclear · low protein · viscous</li>
          <li>OA: mildly elevated cells, mononuclear</li>
          <li>IMPA: 5,000-100,000 cells/μL · &gt; 80% non-degenerate neutrophils · multiple joints</li>
          <li>Septic: high cells &gt; 50,000 · degenerate neutrophils · bacteria · CULTURE</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Iatrogenic septic arthritis (aseptic technique mandatory!)</li>
          <li>Cartilage damage from needle</li>
          <li>Hemarthrosis</li>
          <li>Failed tap (joint dry / poor landmark)</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Submit smear + EDTA tube to clinical pathologist</li>
          <li>Culture if suspected septic (mandatory submit blood culture media if available)</li>
          <li>Light bandage 24 ชม.</li>
          <li>NSAID for soreness (unless contraindicated)</li>
          <li>Tip: <strong>"polyarthritis = polyarthrocentesis"</strong> — single joint not enough · 4 joints minimum</li>
          <li>Tip: ใน IMPA — สามารถมี joint ที่ปกติ + joint ที่อักเสบ ใน case เดียวกัน</li>
          <li>Tip: <strong>Direct smear at the moment of tap</strong> — fluid clots fast in EDTA</li>
        </ul>
      `
    }
  },


  /* ============================================================
     IMAGING · ภาพถ่ายวินิจฉัย (1)
     ============================================================ */

  {
    id: 'proc-radiograph-thorax',
    titleEn: 'Thoracic Radiography (Standard 3-View)',
    titleTh: 'การถ่ายภาพรังสีทรวงอก',
    type: 'procedure',
    system: 'imaging',
    species: ['dog', 'cat'],
    tags: ['radiograph', 'X-ray', 'thorax', 'chest'],
    aliases: ['ถ่ายปอด', 'chest x-ray'],
    source: 'BSAVA Procedures, 3rd ed.',
    sections: {
      indications: `
        <ul>
          <li>Cough / dyspnea / tachypnea</li>
          <li>Cardiac disease workup (cardiomegaly, CHF)</li>
          <li>Suspected metastasis (3-view recommended)</li>
          <li>Trauma (rib fracture, pneumothorax, diaphragmatic hernia)</li>
          <li>Pre-anesthetic screening (older, large breed, brachycephalic)</li>
          <li>Foreign body suspicion (esophagus, airway)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe respiratory distress without prior stabilization (oxygen, sedation)</li>
          <li>Recent fluid resuscitation may obscure findings</li>
        </ul>
      `,
      preparation: `
        <ul>
          <li>Digital X-ray system (or film)</li>
          <li>PPE for personnel (lead apron, thyroid shield, gloves)</li>
          <li>Positioning aids (foam wedges, sandbags, tape, V-trough)</li>
          <li>Sedation if uncooperative (avoid in severely dyspneic — stabilize first)</li>
          <li>Marker (Left/Right + side)</li>
        </ul>
      `,
      steps: `
        <p><strong>Standard 3 views: right lateral + left lateral + ventrodorsal (or dorsoventral)</strong></p>

        <p><strong>1. Right lateral:</strong></p>
        <ol>
          <li>Right side down · forelimbs pulled cranially · hindlimbs caudally</li>
          <li>Sternum and spine in same plane</li>
          <li>Inspiratory phase (max lung inflation)</li>
          <li>Center on heart (5th ICS)</li>
          <li>Include from thoracic inlet to caudal diaphragm</li>
        </ol>

        <p><strong>2. Left lateral:</strong></p>
        <ol>
          <li>Same technique, left side down</li>
          <li>Important for metastasis screening — different lobes "up" in different views</li>
        </ol>

        <p><strong>3. VD (ventrodorsal) or DV (dorsoventral):</strong></p>
        <ol>
          <li>VD: dorsal recumbency (V-trough) · forelimbs pulled cranially
            <ul>
              <li>Better for lung detail</li>
              <li>Avoid in severely dyspneic (compresses chest)</li>
            </ul>
          </li>
          <li>DV: sternal recumbency, foreleg flexed
            <ul>
              <li>Better tolerance for dyspneic patient</li>
              <li>Better for caudal heart base evaluation</li>
            </ul>
          </li>
          <li>Sternum + spine superimposed (true VD/DV)</li>
        </ol>
      `,
      complications: `
        <ul>
          <li>Stress-induced decompensation in dyspneic patient</li>
          <li>Radiation exposure (personnel) — minimize with proper restraint, PPE</li>
          <li>Image quality issues — motion, expiratory phase, malposition</li>
        </ul>
      `,
      postCare: `
        <ul>
          <li>Systematic interpretation (all 3 views):
            <ul>
              <li>Cardiac silhouette (VHS, lateral + DV)</li>
              <li>Pulmonary parenchyma (alveolar, interstitial, bronchial pattern)</li>
              <li>Pulmonary vessels (arteries vs veins)</li>
              <li>Mediastinum, pleural space</li>
              <li>Bones, soft tissue</li>
            </ul>
          </li>
          <li>Tip: <strong>3 views &gt; 2 views</strong> for met check — single met may be missed in 1-2 views (dependent lung consolidation)</li>
          <li>Tip: <strong>Inspiratory phase essential</strong> — expiratory looks like edema/consolidation falsely</li>
          <li>Tip: dyspneic cat — DV in O2 cage > VD on table</li>
        </ul>
      `
    }
  },

];

window.PROCEDURES_DATA_LOADED = true;
