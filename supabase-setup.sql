-- =====================================================================
-- pk Shared Expense Tracker — Database Setup (PUBLIC + Jojo)
-- =====================================================================
-- รันสคริปต์นี้ใน Supabase Dashboard → SQL Editor → New query → Run (▶)
--
-- ⚙️ สคริปต์นี้ idempotent — รันซ้ำได้ปลอดภัย
-- 🔄 รองรับการ migrate จากเวอร์ชันเก่า (partner → jojo, private → public)
-- =====================================================================

-- 1. Create table (skip if exists)
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

-- 2. Migrate existing 'partner' values → 'jojo' (if any from old setup)
UPDATE shared_transactions SET payer = 'jojo' WHERE payer = 'partner';

-- 3. Update CHECK constraint for payer (alex / jojo)
ALTER TABLE shared_transactions DROP CONSTRAINT IF EXISTS shared_transactions_payer_check;
ALTER TABLE shared_transactions
  ADD CONSTRAINT shared_transactions_payer_check
  CHECK (payer IN ('alex', 'jojo') OR payer IS NULL);

-- 4. Indexes for query performance
CREATE INDEX IF NOT EXISTS idx_shared_trans_date ON shared_transactions(date DESC);
CREATE INDEX IF NOT EXISTS idx_shared_trans_type ON shared_transactions(type);
CREATE INDEX IF NOT EXISTS idx_shared_trans_category ON shared_transactions(category);

-- 5. Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS update_shared_transactions_updated_at ON shared_transactions;
CREATE TRIGGER update_shared_transactions_updated_at
  BEFORE UPDATE ON shared_transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 6. Enable Row Level Security
ALTER TABLE shared_transactions ENABLE ROW LEVEL SECURITY;

-- 7. Drop ALL old policies (clean slate)
DROP POLICY IF EXISTS "Couple access only" ON shared_transactions;
DROP POLICY IF EXISTS "Public access" ON shared_transactions;

-- 8. Public access policy
--    Note: Database is public; vandalism prevention is at the app layer (PIN gate)
CREATE POLICY "Public access"
  ON shared_transactions
  FOR ALL
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- 9. Permissions
GRANT ALL ON shared_transactions TO anon, authenticated;

-- =====================================================================
-- ตรวจสอบ: รัน query นี้เพื่อดูว่า setup สำเร็จไหม
-- =====================================================================
-- SELECT count(*) AS total FROM shared_transactions;
-- (ควรได้ผลลัพธ์ 0 หรือเลขจำนวน rows ที่มี — ไม่ error)
