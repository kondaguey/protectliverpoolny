-- ProtectLiverpoolNY — Supabase Schema
-- Paste this into the Supabase SQL Editor

-- Create the signatures table
CREATE TABLE plny_signatures (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE plny_signatures ENABLE ROW LEVEL SECURITY;

-- Anon can INSERT new signatures
CREATE POLICY "Allow anonymous inserts"
  ON plny_signatures FOR INSERT
  TO anon
  WITH CHECK (true);

-- Anon can SELECT (needed for live signature count)
CREATE POLICY "Allow anonymous selects"
  ON plny_signatures FOR SELECT
  TO anon
  USING (true);

-- Authenticated users get full access (for admin)
CREATE POLICY "Authenticated full access"
  ON plny_signatures FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
