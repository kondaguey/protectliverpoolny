-- ProtectLiverpoolNY — Supabase schema for plny_stupidity_signatures
-- (the /stupidity campaign petition — separate tally from plny_signatures)
-- Paste into the Supabase SQL Editor. Safe to re-run (idempotent).
--
-- SECURITY MODEL — identical to plny_signatures (sql/create_plny_signatures.sql):
--   * The app touches this table ONLY via the service-role key, server-side, in
--     src/app/api/stupidity/* (sign, count). The service role bypasses RLS, so
--     it needs no policy.
--   * The browser/anon (publishable) key is NEVER used to read or write this
--     table.
--   * Therefore anon AND authenticated get NO access. RLS is enabled with zero
--     permissive policies, so only the service role can read/write rows.
--   * DO NOT add `anon SELECT USING (true)`: it would expose full signer PII
--     (email, phone, street address) to anyone holding the public anon key.

-- 1) Table -------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS plny_stupidity_signatures (
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

-- 2) Row Level Security ------------------------------------------------------
ALTER TABLE plny_stupidity_signatures ENABLE ROW LEVEL SECURITY;

-- 3) Policies ----------------------------------------------------------------
-- No anon or authenticated policies are created on purpose. All access is
-- via the service-role key in server-side API routes, which bypasses RLS.
-- If client-side inserts are ever needed, add a NARROW insert-only policy
-- (FOR INSERT TO anon WITH CHECK (...)) — never a permissive SELECT.
