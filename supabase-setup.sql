-- =====================================================================
-- pk Database Setup (combined)
-- =====================================================================
-- รันใน Supabase Dashboard → SQL Editor → New query → Run (▶)
-- ⚙️ idempotent — รันซ้ำได้ปลอดภัย
--
-- Tables:
--   1. shared_transactions  (แชร์ๆ — public + PIN gate)
--   2. clinic_shopping      (รายการรอจัดซื้อ — Alex login only)
--   3. quiz_sessions, quiz_players, quiz_answers  (Quiz Live — public)
-- =====================================================================


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  1. SHARED TRANSACTIONS                                           ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS shared_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('expense', 'deposit')),
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  category TEXT,
  payer TEXT,
  description TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

UPDATE shared_transactions SET payer = 'jojo' WHERE payer = 'partner';

ALTER TABLE shared_transactions DROP CONSTRAINT IF EXISTS shared_transactions_payer_check;
ALTER TABLE shared_transactions
  ADD CONSTRAINT shared_transactions_payer_check
  CHECK (payer IN ('alex', 'jojo') OR payer IS NULL);

CREATE INDEX IF NOT EXISTS idx_shared_trans_date ON shared_transactions(date DESC);
CREATE INDEX IF NOT EXISTS idx_shared_trans_type ON shared_transactions(type);
CREATE INDEX IF NOT EXISTS idx_shared_trans_category ON shared_transactions(category);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  2. CLINIC SHOPPING LIST                                          ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS clinic_shopping (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  quantity NUMERIC(10, 2),
  unit TEXT,
  category TEXT NOT NULL DEFAULT 'other'
    CHECK (category IN ('medicine', 'consumable', 'equipment', 'other')),
  price NUMERIC(12, 2),
  is_completed BOOLEAN NOT NULL DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_clinic_shop_completed ON clinic_shopping(is_completed);
CREATE INDEX IF NOT EXISTS idx_clinic_shop_category ON clinic_shopping(category);
CREATE INDEX IF NOT EXISTS idx_clinic_shop_created ON clinic_shopping(created_at DESC);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  3. QUIZZES (Alex's quiz library — owner only)                    ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_email TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  timer INT NOT NULL DEFAULT 20,
  reveal_mode TEXT NOT NULL DEFAULT 'after_question'
    CHECK (reveal_mode IN ('after_question', 'after_all', 'never')),
  questions JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quizzes_owner ON quizzes(owner_email);
CREATE INDEX IF NOT EXISTS idx_quizzes_updated ON quizzes(updated_at DESC);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  4. QUIZ LIVE — Sessions / Players / Answers                      ║
-- ╚═══════════════════════════════════════════════════════════════════╝

-- Session: 1 row per live game
CREATE TABLE IF NOT EXISTS quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pin TEXT NOT NULL UNIQUE,                  -- 6 digit pin
  host_id TEXT NOT NULL,                     -- random uuid for host (browser)
  quiz_data JSONB NOT NULL,                  -- snapshot of quiz at session start
  state TEXT NOT NULL DEFAULT 'lobby'        -- lobby | playing | reveal | ended
    CHECK (state IN ('lobby', 'playing', 'reveal', 'ended')),
  current_q INT NOT NULL DEFAULT 0,          -- index of current question
  question_started_at TIMESTAMPTZ,           -- when current question revealed to players
  created_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_quiz_sessions_pin ON quiz_sessions(pin);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_state ON quiz_sessions(state);

-- Player: 1 row per joined player
CREATE TABLE IF NOT EXISTS quiz_players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  client_id TEXT NOT NULL,                   -- browser-generated, for reconnect
  score INT NOT NULL DEFAULT 0,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (session_id, client_id)
);

CREATE INDEX IF NOT EXISTS idx_quiz_players_session ON quiz_players(session_id);

-- Answer: 1 row per answered question per player
CREATE TABLE IF NOT EXISTS quiz_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  player_id UUID NOT NULL REFERENCES quiz_players(id) ON DELETE CASCADE,
  question_idx INT NOT NULL,
  answer_idx INT,
  is_correct BOOLEAN,
  points INT NOT NULL DEFAULT 0,
  time_taken_ms INT,
  answered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (session_id, player_id, question_idx)
);

CREATE INDEX IF NOT EXISTS idx_quiz_answers_session ON quiz_answers(session_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_player ON quiz_answers(player_id);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  4. SHARED TRIGGER                                                ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS update_shared_transactions_updated_at ON shared_transactions;
CREATE TRIGGER update_shared_transactions_updated_at
  BEFORE UPDATE ON shared_transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_clinic_shopping_updated_at ON clinic_shopping;
CREATE TRIGGER update_clinic_shopping_updated_at
  BEFORE UPDATE ON clinic_shopping
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_quizzes_updated_at ON quizzes;
CREATE TRIGGER update_quizzes_updated_at
  BEFORE UPDATE ON quizzes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  5. RLS POLICIES                                                  ║
-- ╚═══════════════════════════════════════════════════════════════════╝

-- shared_transactions: PUBLIC (PIN gate is at app layer)
ALTER TABLE shared_transactions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Couple access only" ON shared_transactions;
DROP POLICY IF EXISTS "Public access" ON shared_transactions;
CREATE POLICY "Public access"
  ON shared_transactions
  FOR ALL TO anon, authenticated
  USING (true) WITH CHECK (true);

-- clinic_shopping: Authenticated users only (Alex via Google login)
ALTER TABLE clinic_shopping ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Authenticated users only" ON clinic_shopping;
CREATE POLICY "Authenticated users only"
  ON clinic_shopping
  FOR ALL TO authenticated
  USING (auth.email() = 'carnitab@gmail.com')
  WITH CHECK (auth.email() = 'carnitab@gmail.com');

-- quizzes: Owner only (Alex via Google login)
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Owner only" ON quizzes;
CREATE POLICY "Owner only"
  ON quizzes
  FOR ALL TO authenticated
  USING (owner_email = auth.email())
  WITH CHECK (owner_email = auth.email());

-- quiz_sessions / players / answers: PUBLIC (need PIN to find session anyway)
ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public quiz access" ON quiz_sessions;
CREATE POLICY "Public quiz access"
  ON quiz_sessions
  FOR ALL TO anon, authenticated
  USING (true) WITH CHECK (true);

ALTER TABLE quiz_players ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public players access" ON quiz_players;
CREATE POLICY "Public players access"
  ON quiz_players
  FOR ALL TO anon, authenticated
  USING (true) WITH CHECK (true);

ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public answers access" ON quiz_answers;
CREATE POLICY "Public answers access"
  ON quiz_answers
  FOR ALL TO anon, authenticated
  USING (true) WITH CHECK (true);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  6. ENABLE REALTIME (สำคัญมาก!)                                   ║
-- ║  ต้องไป Database → Replication → เปิด realtime สำหรับ 3 tables: ║
-- ║     - quiz_sessions                                               ║
-- ║     - quiz_players                                                ║
-- ║     - quiz_answers                                                ║
-- ║  หรือรัน:                                                          ║
-- ╚═══════════════════════════════════════════════════════════════════╝

ALTER PUBLICATION supabase_realtime ADD TABLE quiz_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE quiz_players;
ALTER PUBLICATION supabase_realtime ADD TABLE quiz_answers;


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  7. PERMISSIONS                                                   ║
-- ╚═══════════════════════════════════════════════════════════════════╝

GRANT ALL ON shared_transactions TO anon, authenticated;
GRANT ALL ON clinic_shopping TO authenticated;
GRANT ALL ON quizzes TO authenticated;
GRANT ALL ON quiz_sessions TO anon, authenticated;
GRANT ALL ON quiz_players TO anon, authenticated;
GRANT ALL ON quiz_answers TO anon, authenticated;


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  8. CLEANUP FUNCTION (optional)                                   ║
-- ║     ลบ session เก่า > 24 ชม. — รันเอง หรือ schedule ผ่าน cron     ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE OR REPLACE FUNCTION cleanup_old_quiz_sessions()
RETURNS void AS $$
BEGIN
  DELETE FROM quiz_sessions
  WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql;

-- รันด้วยมือ: SELECT cleanup_old_quiz_sessions();
