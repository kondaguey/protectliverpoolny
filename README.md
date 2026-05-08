# ProtectLiverpoolNY.org

A grassroots community advocacy site fighting an unauthorized 184-foot commercial cell tower being erected on NYS Thruway Authority land at Exit 37 / 474 Electronics Pkwy in Liverpool, NY — without public notification, community input, or local zoning review.

**Live:** [protectliverpoolny.org](https://protectliverpoolny.org)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| Animation | Framer Motion |
| Icons | Lucide React |
| Images | Cloudflare Images (imagedelivery.net) |
| Email | Resend API |
| Hosting | Vercel |
| DNS | Cloudflare |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage — hero, problem cards, who's doing this, Venn diagram
│   ├── layout.tsx                  # Global layout — VerificationBanner + Header + Footer + banners
│   ├── take-action/page.tsx        # Petition form, official contact info, petition prayer
│   ├── changelog/page.tsx          # Public change log with before/after diffs
│   ├── disclaimer/page.tsx         # About This Movement & Disclaimer
│   ├── the-facts/
│   │   ├── page.tsx                # Facts hub / index
│   │   ├── community/page.tsx      # Property values, Monroe Balancing Test, rules slider
│   │   ├── health/page.tsx         # RF health research, NTP/Ramazzini, setback distances
│   │   ├── aviation/page.tsx       # FAA determination, flight path analysis, 5G altimeter
│   │   ├── wildlife/page.tsx       # Bald eagles, BGEPA, bird strike, bees
│   │   ├── surveillance/page.tsx   # Smart highway critique, data tracking
│   │   └── loophole-kings/page.tsx # 8 regulatory loopholes exploited
│   ├── admin/email/page.tsx        # Admin email blast tool
│   ├── api/
│   │   ├── comments/route.ts       # Comment API
│   │   ├── send-receipt/route.ts   # Petition receipt emails
│   │   └── admin/send-blast/route.ts # Bulk email API
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Header.tsx                  # Sticky nav with Facts dropdown
│   ├── Footer.tsx                  # Footer with legal links
│   ├── VerificationBanner.tsx      # "All claims verified" banner → /changelog
│   ├── DisclaimerBanner.tsx        # Homepage-only disclaimer popup (localStorage)
│   ├── CookieBanner.tsx            # Cookie consent
│   ├── WeNotAlone.tsx              # Community voices / testimonials
│   └── QuickLinks.tsx              # Jump-to-section nav for fact pages
└── lib/
    └── (utility files)
```

---

## Key Pages & Features

### Homepage (`/`)
- Hero with urgency badge and CTAs
- Photo gallery with lightbox (real tower construction photos)
- 4 problem cards linking to fact pages
- Carrier coverage maps (T-Mobile, AT&T, Verizon) proving existing 5G coverage
- "Who Is Doing This" — Phoenix Tower International, NYSTA, local officials (reframed as allies)
- Major Update billboard (March 24 correction)
- Unity Venn diagram (bipartisan framing)

### Fact Pages (`/the-facts/*`)
- **Community** — Property value research, Monroe Balancing Test (6/9 factors), "Rules for Thee" slider
- **Health** — NTP study, Ramazzini, EHT v. FCC ruling, setback distances, international comparisons
- **Aviation** — Full FAA determination (Study 2024-AEA-11624-OE), Terreri email response, 5G altimeter interference
- **Wildlife** — Bald eagles at Onondaga Lake, BGEPA, Audubon EagleWatch data, pollinator research
- **Surveillance** — Smart highway infrastructure analysis
- **Loophole Kings** — 8 regulatory moves exploited to bypass oversight

### Take Action (`/take-action`)
- Petition form with name/email/address collection
- Full petition prayer (Official Petition Demand & Mandate for Abatement)
- Official contact directory with email/phone for all named officials
- Receipt email sent to signers via Resend

### Changelog (`/changelog`)
- Public record of every factual correction with before/after diffs
- Organized by date
- March 25: Sitewide fact-check (10 corrections)
- March 24: Officials reframing, FAA transparency pivot

### Disclaimer (`/disclaimer`)
- About This Movement (1-3 volunteers, day jobs, zero funding)
- Good Faith & Best Efforts
- Limited Resources
- Correction Policy
- Portfolio/leadership disclosure

---

## Transparency & Fact-Check Protocol

All factual claims on this site have been independently verified. The `VerificationBanner` component appears on every page and links to `/changelog`.

**Verification sources include:**
- FCC ASR database (Registration #1329974)
- FAA OE/AAA database (Study 2024-AEA-11624-OE)
- NTP final report (2018), Ramazzini Institute (PMID: 29530389)
- EHT v. FCC, D.C. Circuit Case No. 20-1025 (Aug 2021)
- IARC Monograph 102 (2011), WHO Group 2B classification
- Sander & Polacheck (2009) — property value study
- Balmori (2022) — Environmental Research systematic review
- Lee & Choi (2023) — children's RF absorption study
- Direct email correspondence with Jason Terreri, Executive Director, Syracuse Regional Airport Authority

---

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=         # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=    # Supabase anon key
RESEND_API_KEY=                   # Resend email API key
```

---

## Development

```bash
npm install
npm run dev        # → http://localhost:3000
```

## Deployment

```bash
vercel --prod
```

---

## Agent Handoff Notes

### Content Tone
- **Allies-first framing** for current local officials (Huerta, Driscoll, Thompson) — they had no jurisdiction over state land and inherited the situation. Position them as partners, not adversaries. Note: the SEQRA Determination cert-mail receipt (USPS 7019 1640 0000 0800 4105) was addressed to **former Supervisor Nicholas Paro** under the prior administration; the FOIL response contains no record of any reply from the Town under that prior tenure. Direct accountability for the Town's non-response upstream of Huerta.
- **Transparency-first** — publish official responses even when unfavorable (e.g., FAA "No Hazard" determination). Credibility > persuasion.
- **Hedged claims** — use "provided" not "conducted" for unverified FOIL items. Cite sources inline. Qualify survey data vs. peer-reviewed research.
- **Emergency services nuance** — AT&T includes Band 14 (FirstNet) capability as part of standard rooftop equipment (1 of 4 Ericsson radio types). It does not transform a commercial 5G site adjacent to R-O zoning into a public-safety facility. Frame as: justification "materially overstated," not "wholly fabricated."

### Key People
| Name | Role | Notes |
|------|------|-------|
| Raul Huerta | Town of Salina Supervisor | Ally — no zoning authority over state land |
| Eliza Hewitt Driscoll | Ward 4 Councilor | Took office Jan 2026, inherited situation |
| Jeremiah Thompson | Onondaga County Legislator (Dist. 4) | Also chairs Village of Liverpool ZBA (verify current) |
| Mitchell Henry | PTI applicant | Filed FAA 7460-1, FCC ASR |
| Jason Terreri | Syracuse Airport Authority ED | Confirmed airport not consulted |

### Pending Actions
- ~~FOIL request response (environmental reviews, SEQRA docs, RF studies, USFWS consultations)~~ — **RESOLVED May 8, 2026.** NYSTA produced **93 records** (FOIL #R000082-032026). Item 7 admission: "No records responsive to Item 7 were located." Files hosted at `/public/foil/`, catalogued at `/the-facts/foil-evidence`. One record (UUID `c620d65e-7309-44e0-8c93-1c57a61768ef.pdf`) still requires download from the FOIL portal.
- **Administrative redaction appeal** to NYSTA Records Appeals Officer (deadline ~June 7, 2026) targeting Annual Fee, fee check amount, and carrier sub-tenant rent terms. Cite *Matter of Federation of N.Y. State Rifle & Pistol Clubs v. NYPD*, 73 N.Y.2d 92 — §87(2)(b) does not apply to corporations. Demand a Vaughn-style redaction index under POL §89(4)(a). PDF metadata showing the redacted PTI Permit was finalized April 28, 2026 (10 days before release) supports a POL §89(4)(c) finding of no reasonable basis for the period of denial.
- **Follow-up FOIL to NYSTA** narrowly targeting Verizon RFDS Project ID 17326150, T-Mobile RFDS, the SPCC plan for the 30 kW diesel generator + 145-gal fuel storage, the lift plan as approved by NYSTA Traffic Control, and the $50,000 surety bond instrument referenced in PTI Permit Section VIII.A.
- **Follow-up FOIL to Town of Salina** citing USPS certified-mail receipt #7019 1640 0000 0800 4105 as proof the Town possesses responsive records. Demand sworn §89(3)(a) diligent-search certification.
- **Verify proximity to OCM BOCES Liverpool facilities** — AT&T's internal site name "Liverpool BOCES" suggests school proximity worth confirming. Tower coordinates: 43°06'06.87"N 76°11'06.26"W.
- **Calculate ice-shedding throw envelope** using Sabre's design parameters (1.5" design ice, 109 mph design wind, 184-ft tower height) against the ~100 ft distance to the active I-90 off-ramp.
- **Article 78 leverage** if redaction appeal is denied — fee-shifting available under POL §89(4)(c), now supported by the April 28 redaction-completion timestamp evidencing deliberate withholding.
- **COOG advisory opinion request** on the §87(2)(b) (corporate-non-applicability) and §87(2)(g) (factual-data carve-out) misapplication.
- **NYS Authorities Budget Office** financial-audit referral on PTI lease + parallel referral to **Office of the State Comptroller** under General Municipal Law §33.
- Thompson's ZBA role needs re-verification for consistency between homepage and petition
- Email blast to subscriber list re: 93-document FOIL findings (draft needed)

### Content Rules
1. Any new factual claim must cite a source
2. Any correction must be documented in `/changelog`
3. Property value claims use "2-9%" (peer-reviewed) or "2-9%+ per available estimates" (with appraiser data)
4. Wildlife/environmental claims use "not provided" language until FOIL response received
5. Surveillance claims must reference documented precedent, not make definitive statements about this specific tower
