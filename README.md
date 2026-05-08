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
- **Allies-first framing** for local officials (Huerta, Driscoll, Thompson) — they had no jurisdiction and were not notified. Position them as partners, not adversaries.
- **Transparency-first** — publish official responses even when unfavorable (e.g., FAA "No Hazard" determination). Credibility > persuasion.
- **Hedged claims** — use "provided" not "conducted" for unverified FOIL items. Cite sources inline. Qualify survey data vs. peer-reviewed research.

### Key People
| Name | Role | Notes |
|------|------|-------|
| Raul Huerta | Town of Salina Supervisor | Ally — no zoning authority over state land |
| Eliza Hewitt Driscoll | Ward 4 Councilor | Took office Jan 2026, inherited situation |
| Jeremiah Thompson | Onondaga County Legislator (Dist. 4) | Also chairs Village of Liverpool ZBA (verify current) |
| Mitchell Henry | PTI applicant | Filed FAA 7460-1, FCC ASR |
| Jason Terreri | Syracuse Airport Authority ED | Confirmed airport not consulted |

### Pending Actions
- ~~FOIL request response (environmental reviews, SEQRA docs, RF studies, USFWS consultations)~~ — **RESOLVED May 8, 2026.** NYSTA produced 81 unique documents (FOIL #R000082-032026). Item 7 admission: "No records responsive to Item 7 were located." Files hosted at `/public/foil/`, catalogued at `/the-facts/foil-evidence`.
- **Administrative redaction appeal** to NYSTA Records Appeals Officer (deadline ~June 7, 2026) targeting Annual Fee, fee check amount, and carrier sub-tenant rent terms. Cite *Matter of Federation of N.Y. State Rifle & Pistol Clubs v. NYPD*, 73 N.Y.2d 92 — §87(2)(b) does not apply to corporations. Demand a Vaughn-style redaction index under POL §89(4)(a).
- **Article 78 leverage** if redaction appeal is denied — fee-shifting available under POL §89(4)(c) if we substantially prevail.
- **Follow-up FOIL** targeting the Verizon RF Antenna Design Sheet (RFDS Project ID 17326150) and any AT&T/T-Mobile RF emissions/propagation studies — referenced in the construction drawings but not in the May 8 production.
- **COOG advisory opinion request** on the §87(2)(b) and §87(2)(g) misapplication.
- **NYS Authorities Budget Office** financial-audit referral on PTI lease.
- Thompson's ZBA role needs re-verification for consistency between homepage and petition
- Email blast to subscriber list re: fact-check corrections (draft needed)

### Content Rules
1. Any new factual claim must cite a source
2. Any correction must be documented in `/changelog`
3. Property value claims use "2-9%" (peer-reviewed) or "2-9%+ per available estimates" (with appraiser data)
4. Wildlife/environmental claims use "not provided" language until FOIL response received
5. Surveillance claims must reference documented precedent, not make definitive statements about this specific tower
