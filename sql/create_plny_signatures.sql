-- ProtectLiverpoolNY — Supabase schema for plny_signatures
-- Paste into the Supabase SQL Editor. Safe to re-run (idempotent): re-running
-- this file SYNCS an existing table and STRIPS the old over-permissive policies.
--
-- SECURITY MODEL — read before touching the policies:
--   * This table lives in a Supabase project SHARED by several apps.
--   * The PLNY app touches it ONLY via the service-role key, server-side, in
--     src/app/api/* (sign-petition, comments, petition-count, admin/*). The
--     service role bypasses RLS, so it needs no policy.
--   * The browser/anon (publishable) key is NEVER used to read or write this
--     table — src/lib/supabase.js (the anon client) is not imported anywhere.
--   * Therefore anon AND authenticated get NO access. RLS is enabled with zero
--     permissive policies, so only the service role can read/write rows.
--   * DO NOT add `anon SELECT USING (true)`: it would expose full signer PII
--     (email, phone, street address) to anyone holding the public anon key.
--     The public count and comment wall are served by service-role API routes
--     that hand-pick safe fields (see src/app/api/comments/route.ts).
--   * DO NOT add `authenticated ... USING (true)` on this shared DB: any user
--     logged into ANY app on the project would then be able to read all signers.

-- 1) Table -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS plny_signatures (
  id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name        TEXT NOT NULL,
  last_name         TEXT NOT NULL,
  email             TEXT NOT NULL,
  zip_code          TEXT NOT NULL,
  street_address    TEXT,
  phone             TEXT,
  comment           TEXT,
  comment_public    BOOLEAN NOT NULL DEFAULT false,
  comment_anonymous BOOLEAN NOT NULL DEFAULT false,
  opt_in_contact    BOOLEAN NOT NULL DEFAULT false,
  can_help          BOOLEAN NOT NULL DEFAULT false,
  created_at        TIMESTAMPTZ DEFAULT now()
);

-- 1a) Bring an older table (created from the original 5-column schema) up to
--     date. These columns are written by src/app/api/sign-petition/route.ts.
--     ADD ... IF NOT EXISTS is a no-op when the column already exists.
ALTER TABLE plny_signatures ADD COLUMN IF NOT EXISTS street_address    TEXT;
ALTER TABLE plny_signatures ADD COLUMN IF NOT EXISTS phone             TEXT;
ALTER TABLE plny_signatures ADD COLUMN IF NOT EXISTS comment_public    BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE plny_signatures ADD COLUMN IF NOT EXISTS comment_anonymous BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE plny_signatures ADD COLUMN IF NOT EXISTS opt_in_contact    BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE plny_signatures ADD COLUMN IF NOT EXISTS can_help          BOOLEAN NOT NULL DEFAULT false;

-- 2) Row Level Security ------------------------------------------------------
ALTER TABLE plny_signatures ENABLE ROW LEVEL SECURITY;

-- 3) Policies ----------------------------------------------------------------
-- Drop every legacy policy first so re-running this file converges to the
-- intended least-privilege state and removes the old over-permissive ones.
DROP POLICY IF EXISTS "Allow anonymous inserts" ON plny_signatures;   -- writes go through the validated API, not the anon key
DROP POLICY IF EXISTS "Allow anonymous selects" ON plny_signatures;   -- USING (true) exposed full signer PII — removed
DROP POLICY IF EXISTS "Authenticated full access" ON plny_signatures; -- shared DB: any logged-in user could read all signers — removed

-- No anon or authenticated policies are (re)created on purpose. All access is
-- via the service-role key in server-side API routes, which bypasses RLS.
-- If client-side inserts are ever needed again, add a NARROW insert-only
-- policy (FOR INSERT TO anon WITH CHECK (...)) — never a permissive SELECT.
