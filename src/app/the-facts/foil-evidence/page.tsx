"use client";

import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";
import { motion } from "framer-motion";
import { FileText, ExternalLink, AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

type DocItem = {
  /** Display name for the document */
  title: string;
  /** Path under /foil/ */
  href: string;
  /** Short description / smoking-gun framing */
  note?: string;
};

type Category = {
  id: string;
  number: string;
  label: string;
  blurb: string;
  produced: DocItem[];
  /** What was redacted but produced */
  redacted?: string[];
  /** What NYSTA failed to produce */
  notProduced?: string[];
};

const categories: Category[] = [
  {
    id: "item-1",
    number: "Item 1",
    label: "Permits & Lease Agreements",
    blurb:
      "PTI Occupancy Permit T3U250002, Anchor Tenant and Tenant Install Amendments, Construction Permits, Site/Structural Agreements. Section II.A of the PTI Permit is the most consequential sentence in the entire response: \"There is no term. This Occupancy Permit is revocable, unilaterally, upon demand by the Authority.\"",
    produced: [
      {
        title: "NYSTA Building Permit SYR-2025-003 (12/2/2025)",
        href: "https://media.protectliverpoolny.org/foil/nysta-building-permit-syr-2025-003-20251202.pdf",
        note: "Issued December 2, 2025 by Joshua Stagnitti, Code Compliance Specialist (expires December 1, 2028). Reference R3642. Filename misleadingly labeled 'AT_T_Exit_37_Permit.pdf' — actual permittee is PTI. Documents the 30 kW diesel generator + 145-gallon belly tank. Future FOIL targets: 3rd Party Concrete Inspection Report, 3rd Party Electrical Inspection, Footing before pouring, Final Completion.",
      },
      {
        title: "PTI Occupancy Permit T3U250002 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/t3u250002-pti-salina-cell-tower-redacted.pdf",
        note: "22-page Condition Rider issued June 23, 2025 by Trevor Thieme. Section II.A: unilaterally revocable by NYSTA. Annual Fee redacted under §87(2)(b) — invalid for corporations. PDF metadata indicates the redacted version was finalized April 28, 2026 — 10 days before NYSTA released it.",
      },
      {
        title: "PTI Occupancy Permit T3U250002 — Occupancy Permit version (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/t3u250002-pti-salina-occupancy-permit-redacted.pdf",
      },
      {
        title: "AT&T Anchor Tenant Amendment (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/t3u250002-int-37-amendment-att-anchor-tenant-redacted.pdf",
        note: "Filed jointly under PTI / AT&T. Duration: \"TBD\" for both start and end dates.",
      },
      {
        title: "Verizon Tenant Install Amendment (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/t3u250002-int-37-amendment-verizon-tenant-install-redacted.pdf",
        note: "Verizon contracting entity is Bell Atlantic Mobile Systems LLC, signed by Jack Redmond.",
      },
      {
        title: "PTI Occupancy & Work Permit (ta-w5124)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-phoenix-tower-occupancy-work-permit-ta-w5124.pdf",
      },
      {
        title: "Verizon Occupancy & Work Permit (ta-w5124)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-verizon-occupancy-work-permit-ta-w5124.pdf",
      },
      {
        title: "Verizon Occupancy Supplement (ta-w5123)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-verizon-occupancy-supplement-ta-w5123.pdf",
      },
      {
        title: "PTI Construction Permit (original)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-construction-permit.pdf",
      },
      {
        title: "PTI Construction Permit — 11/6/2025 (final)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-construction-permit-11-06-2025.pdf",
        note: "Final construction permit. Discloses 30 kW diesel generator + 145-gallon belly tank.",
      },
      {
        title: "Verizon Electronics Parkway CP Application — 8/27/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-verizon-electronics-parkway-cp-application-20250827.pdf",
      },
      {
        title: "PTI / General Contractor Access Permit",
        href: "https://media.protectliverpoolny.org/foil/int-37-pti-and-general-contractor-access.pdf",
      },
      {
        title: "AT&T Site License Agreement (2/18/2025)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-att-sla-fe-02182025.pdf",
      },
      {
        title: "AT&T Updates to Structural Analysis",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-att-updates-to-sa.pdf",
      },
      {
        title: "Verizon Structural Analysis (TEP)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-vz-sa.pdf",
      },
      {
        title: "Park & Ride Sister Site — Verizon Structural Analysis",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2030-t3u250001-verizon-sa.pdf",
      },
      {
        title: "AT&T Scope of Work",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-att-sow.pdf",
      },
      {
        title: "AT&T Updated Platform",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-att-updated-platform.pdf",
      },
      {
        title: "Verizon Exit 37 Permit",
        href: "https://media.protectliverpoolny.org/foil/verizon-exit-37-permit.pdf",
      },
      {
        title: "Exit 37 Cell Tower Permit",
        href: "https://media.protectliverpoolny.org/foil/exit-37-cell-tower-permit.pdf",
      },
      {
        title: "US-NY-2029 / NY-2030 New Site Builds",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-ny-2030-new-site-builds.pdf",
      },
      {
        title: "Electronics Parkway PTI Scope of Work (RTF)",
        href: "https://media.protectliverpoolny.org/foil/electronics-parkway-pti-scope-of-work.rtf",
      },
    ],
    redacted: [
      "Annual Fee in Section III of the PTI Occupancy Permit (corporate financial term — §87(2)(b) does not apply to corporations).",
      "Personal phone numbers and email addresses for individual NYSTA staff and PTI personnel.",
    ],
    notProduced: [
      "The Crown Castle / American Tower master lease referenced in FCC and Salina-side documents.",
      "Co-locator agreements between PTI and Verizon, T-Mobile, and AT&T (referenced in Section I.F-H of the Condition Rider).",
      "Insurance certificates (ACORD 25, U-26.3) referenced in the application.",
      "$50,000 surety bond instrument referenced in Section VIII.A.",
    ],
  },
  {
    id: "item-2",
    number: "Item 2",
    label: "Environmental & Engineering Reviews",
    blurb:
      "SEQRA Negative Declaration with NYSTA as self-designated Lead Agency, NEPA review, ASCE Hazard Reports, structural analyses, geotechnical investigations, wetlands delineation, and the engineering review trail that documents missing structural reports, missing hazard reports, and a foundation-type mismatch caught by NYSTA's own engineer Joshua Stagnitti.",
    produced: [
      {
        title: "Sabre Industries Structural Design Report Rev B (7/15/2025)",
        href: "https://media.protectliverpoolny.org/foil/sabre-structural-design-report-rev-b-20250715.pdf",
        note: "36-page sealed structural design report (Job 25-3277-JDS-R1, Rev B). Engineer of record: Robert Beacom, Sabre Industries (Alvarado TX). Standard: ANSI/TIA-222-H (NY Code Chapter 35 references the older TIA-222-G-2005). Design wind 109 mph, design ice 1.50\", Risk Category II, Site Class D (DEFAULT — not field-verified). Base moment 6,352.75 ft-kips. Two foundation options designed; type undecided.",
      },
      {
        title: "AT&T Construction Drawings Rev 2 (11/7/2025) — Liverpool BOCES",
        href: "https://media.protectliverpoolny.org/foil/att-construction-drawings-rev2-20251107.pdf",
        note: "23 sheets. Engineer of Record: Joseph R. Johnston, P.E. (NY License #091187). Sheet T01 discloses zoning district as R-O (Residence-Office), parcel 75-01-11.1, coordinates 43°06'06.87\"N 76°11'06.26\"W, AT&T applicant office 404 Smith St, Syracuse NY 13224. Sheet A05 contains AT&T's RF Table. Confirms 30 kW diesel + 145-gallon belly tank ground scope.",
      },
      {
        title: "AT&T Mount Analysis Report — Airosmith (12/20/2024)",
        href: "https://media.protectliverpoolny.org/foil/att-mount-analysis-airosmith-20241220.pdf",
        note: "Engineer of record: Joseph R. Johnston, P.E. (NY License #091187). Author: Andrew D. Vargo, P.E. Firm: Airosmith Engineering, Saratoga Springs NY (NY COA #17285). Mount: SitePro1 F4P-12W. DCR 71.4% (Pass). Equipment: 8× Commscope NNH4-65C-R6H4 panels + 16 Ericsson radios across Bands 5/12/14/25/66/77 + 3 Raycap surge protectors. AT&T site name 'Liverpool BOCES'.",
      },
      {
        title: "FAA 7460-1 Determination of No Hazard 2024-AEA-11624-OE — TOWER",
        href: "https://media.protectliverpoolny.org/foil/faa-7460-tower-2024-aea-11624-oe.pdf",
        note: "Issued 11/12/2024. Sponsor Mitchell Henry / PTI. Includes full frequency table: 6–7 GHz, 10–11.7 GHz, 17.7–19.7 GHz, 21.2–23.6 GHz (microwave backhaul ERP to 55 dBW); cellular 614–2690 MHz across multiple bands (ERPs up to 1640W PCS, 2000W 700MHz/WCS, 3500W paging). Marking/lighting NOT required for aviation safety.",
      },
      {
        title: "FAA 7460-1 Determination 2025-AEA-11322-OE — CONSTRUCTION CRANE",
        href: "https://media.protectliverpoolny.org/foil/faa-7460-crane-2025-aea-11322-oe.pdf",
        note: "Issued 9/22/2025 (expires 3/22/2027). Crane operator: Clark Rigging & Rental, contact Mike Dombroski, 945 Spencer Street, Syracuse NY 13204. Crane height during construction: 220 ft AGL / 655 ft AMSL — taller than the finished tower.",
      },
      {
        title: "NYSTA SEQRA R3 Final (Negative Declaration, Type I action)",
        href: "https://media.protectliverpoolny.org/foil/usny2029-nysta-seqra-r3-final.pdf",
        note: "NYSTA self-designated Lead Agency. The bald eagle dismissal cites the USFWS Northeast Determination Key — a self-serve web tool, not a USFWS letter.",
      },
      {
        title: "SEQRA Determination Letter to Salina (final, with attachments)",
        href: "https://media.protectliverpoolny.org/foil/seqra-determination-letter-to-salina-final-w-att.pdf",
      },
      {
        title: "SEQRA Determination Letter — Certified Mail Receipt",
        href: "https://media.protectliverpoolny.org/foil/seqra-determination-letter-cert-mail-receipt.pdf",
        note: "USPS Certified Mail #7019 1640 0000 0800 4105, addressed to former Town Supervisor Nicholas Paro.",
      },
      {
        title: "NEPA Review R1 (3/24/2025)",
        href: "https://media.protectliverpoolny.org/foil/usny2029-nepa-review-r1-03-24-2025.pdf",
      },
      {
        title: "NEPA Correspondence and Public Notice",
        href: "https://media.protectliverpoolny.org/foil/usny2029-nepa-correspondence-and-public-notice.pdf",
      },
      {
        title: "ENB Notice (Environmental Notice Bulletin)",
        href: "https://media.protectliverpoolny.org/foil/enb-notice.jpg",
      },
      {
        title: "ASCE Design Hazards Report — Exit 37 Liverpool",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-asce-design-hazards-report.pdf",
      },
      {
        title: "ASCE Hazard Report — Exit 37 Liverpool",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-asce-hazard-report.pdf",
      },
      {
        title: "ASCE Hazard Report — Park & Ride sister site",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-park-n-ride-asce-hazard-report.pdf",
      },
      {
        title: "Tower Drawings + Foundation Drawings (Stamped)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-td-fd-stamped.pdf",
      },
      {
        title: "Verizon Drawings (T3U250002)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-verizon-drawings.pdf",
        note: "Sheet C-3 references RF Antenna Design Sheet (RFDS Project ID 17326150). That document is not in the FOIL response.",
      },
      {
        title: "Verizon Construction Drawings",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-verizon-construction-drawings.pdf",
      },
      {
        title: "Verizon Electronics Parkway CDfinal — 10/7/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-vz-cdfinal-20251007.pdf",
      },
      {
        title: "Electronics Parkway CDfinal — 10/10/2025",
        href: "https://media.protectliverpoolny.org/foil/electronics-parkway-cdfinal-20251010.pdf",
      },
      {
        title: "NYSTA Exit 37 CDfinal — 6/17/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-nysta-exit37-cdfinal-20250617.pdf",
      },
      {
        title: "NYSTA Exit 37 Sketch — 9/4/2024 (earliest design artifact)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-nysta-exit37-sketch-20240904.pdf",
      },
      {
        title: "NYSTA Exit 37 Sketch — 10/1/2024 (revision)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-nysta-exit37-sketch-20241001.pdf",
      },
      {
        title: "First Plan Submission — 10/10/2024",
        href: "https://media.protectliverpoolny.org/foil/first-plan-submission-10-10-2024.pdf",
      },
      {
        title: "Second Plan Submission — 4/11/2025",
        href: "https://media.protectliverpoolny.org/foil/second-plan-submission-4-11-2025.pdf",
      },
      {
        title: "Geotechnical Investigation — Exit 37 Liverpool",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-geo.pdf",
      },
      {
        title: "Geotechnical Investigation — T3U250002",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-geo.pdf",
        note: "Tectonic Engineering, B-1 boring drilled 11/6/2024 to 50 ft depth. Groundwater at 28.10 ft below grade.",
      },
      {
        title: "Geotechnical Investigation — Park & Ride sister site",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2030-t3u25000-geo.pdf",
      },
      {
        title: "Wetlands Delineation Report",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-wetlands-delineation-report.pdf",
      },
      {
        title: "FAA 1A Survey Certification",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-faa-1a-survey-certification.pdf",
      },
      {
        title: "Topographic Survey",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-topographic-survey.pdf",
      },
      {
        title: "Engineering Review — Verizon, 10/3/2025",
        href: "https://media.protectliverpoolny.org/foil/verizon-exit-37-review-10-3-2025.docx",
        note: "Item C-8 Detail 2: Verizon's first-round footer at 3'-6\" was below NY Code minimum of 4'.",
      },
      {
        title: "Engineering Review — Verizon Round 2, 10/10/2025",
        href: "https://media.protectliverpoolny.org/foil/verizon-exit-37-review-r2-10-10-2025.docx",
      },
      {
        title: "Verizon Exit 37 Review Responses — 10/7/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-verizon-review-responses-10-7-2025.docx",
      },
      {
        title: "Engineering Review — 6/2/2025 (DOCX)",
        href: "https://media.protectliverpoolny.org/foil/exit-37-review-comments-6-2-2025.docx",
        note: "Stagnitti: \"Structural Analysis Reports have not been submitted. Hazard Reports have not been submitted. Engineered lift plans have not been submitted.\"",
      },
      {
        title: "Engineering Review — 6/2/2025 (PDF)",
        href: "https://media.protectliverpoolny.org/foil/exit-37-review-comments-6-2-2025.pdf",
      },
      {
        title: "NYSTA Comments — Engineering Review 6/2/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-nysta-comments-exit-37-review-6-2-2025.pdf",
      },
      {
        title: "Engineering Review Round 2 — 6/26/2025",
        href: "https://media.protectliverpoolny.org/foil/exit-37-review-comments-r2-6-26-2025.docx",
      },
      {
        title: "Engineering Review Round 2 — Responses 6/26/2025",
        href: "https://media.protectliverpoolny.org/foil/exit-37-review-comments-r2-6-26-2025-responses.docx",
      },
      {
        title: "Engineering Review — AT&T 8/27/2025",
        href: "https://media.protectliverpoolny.org/foil/exit-37-att-review-8-27-2025.docx",
        note: "Items #20–23: Construction Permit Application, Geotechnical Report, ASCE Hazard Reports, and FEAF all not submitted as of late August 2025. Item #18: foundation-type mismatch (drilled pier vs. pad/pier). Item #3: ANSI/TIA-222-H standard mismatch with NY Building Code Chapter 35 (which references 222-G-2005).",
      },
      {
        title: "Engineering Review — AT&T Round 2, 11/6/2025",
        href: "https://media.protectliverpoolny.org/foil/exit-37-att-review-r2-11-6-2025.docx",
      },
    ],
    redacted: [
      "Personal email addresses of NYSTA reviewers and PTI/carrier engineers (technical text appears largely un-redacted).",
    ],
    notProduced: [
      "RF Antenna Design Sheet (Verizon RFDS Project ID 17326150) — referenced in the Verizon construction drawings, not produced.",
      "AT&T RFDS — not produced.",
      "USFWS consultation letters (a self-serve Determination Key output is not a USFWS letter).",
      "State Historic Preservation Office (SHPO) consultation letter referenced in NEPA.",
      "Tribal coordination correspondence referenced in NEPA.",
      "Air-quality / NSPS Subpart IIII compliance for the 30 kW diesel generator.",
      "Spill Prevention, Control, and Countermeasure (SPCC) plan for the 145-gallon fuel belly tank.",
      "Final approved lift plan referenced as required for crane operations.",
      "Reconciliation memo between TEP Structural Analysis (drilled pier) and Construction Drawings (pad/pier).",
    ],
  },
  {
    id: "item-3",
    number: "Item 3",
    label: "Official Correspondence",
    blurb:
      "17 redacted email/letter chains between NYSTA Code Compliance, PTI, Verizon, AT&T, and Tectonic/TEP/InfraServices. The chains are scanned/OCR-degraded, defeating text-search and copy/paste review — a tactic that adds friction to any cited-line review.",
    produced: [
      {
        title: "Email transmittal — Geotech delivery (Outlook .msg)",
        href: "https://media.protectliverpoolny.org/foil/emailing-us-ny-2029-t3u250002-geo.msg",
      },
      {
        title: "RE: Exit 37 Liverpool Cell Tower Review Comments — base file (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-redacted.pdf",
      },
      {
        title: "Chain #1 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-01-redacted.pdf",
      },
      {
        title: "Chain #2 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-02-redacted.pdf",
      },
      {
        title: "Chain #3 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-03-redacted.pdf",
      },
      {
        title: "Chain #4 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-04-redacted.pdf",
      },
      {
        title: "Chain #5 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-05-redacted.pdf",
      },
      {
        title: "Chain #6 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-06-redacted.pdf",
      },
      {
        title: "Chain #7 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-07-redacted.pdf",
      },
      {
        title: "Chain #8 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-08-redacted.pdf",
      },
      {
        title: "Chain #9 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-09-redacted.pdf",
      },
      {
        title: "Chain #10 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-10-redacted.pdf",
      },
      {
        title: "Chain #11 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-11-redacted.pdf",
      },
      {
        title: "Chain #12 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-12-redacted.pdf",
      },
      {
        title: "Chain #13 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-13-redacted.pdf",
      },
      {
        title: "Chain #14 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-14-redacted.pdf",
      },
      {
        title: "Chain #15 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-15-redacted.pdf",
      },
      {
        title: "Chain #16 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-16-redacted.pdf",
      },
      {
        title: "Chain #17 (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/re-review-comments-17-redacted.pdf",
      },
    ],
    redacted: [
      "Internal NYSTA deliberations (likely §87(2)(g)). Without OCR, the precise scope of redactions cannot be enumerated.",
    ],
    notProduced: [
      "Any correspondence with the Town of Salina beyond the certified-mail SEQRA notice.",
      "Any correspondence with the Onondaga County Sheriff's Office or 911 Center.",
      "Any correspondence with Liverpool Fire or Moyers Corners FD.",
      "Any correspondence with FirstNet or any public-safety wireless authority.",
      "Internal NYSTA emails about the FOIL request itself.",
    ],
  },
  {
    id: "item-4",
    number: "Item 4",
    label: "Public Notices & Municipal Coordination",
    blurb:
      "Salina was certified-mail noticed under SEQRA — but to former Supervisor Nicholas Paro at 201 School Road, signed for in mid-2025. The FOIL response contains no record of any reply from the Town under that prior administration. Current Supervisor Raul Huerta inherited this.",
    produced: [
      {
        title: "ENB Notice (Environmental Notice Bulletin)",
        href: "https://media.protectliverpoolny.org/foil/enb-notice.jpg",
      },
      {
        title: "SEQRA Determination Letter to Salina (final, with attachments)",
        href: "https://media.protectliverpoolny.org/foil/seqra-determination-letter-to-salina-final-w-att.pdf",
      },
      {
        title: "Certified Mail Receipt — addressed to Nicholas Paro",
        href: "https://media.protectliverpoolny.org/foil/seqra-determination-letter-cert-mail-receipt.pdf",
      },
      {
        title: "Adjacent Property Owner Survey",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-property-owner-survey.pdf",
      },
      {
        title: "NEPA Correspondence and Public Notice",
        href: "https://media.protectliverpoolny.org/foil/usny2029-nepa-correspondence-and-public-notice.pdf",
      },
    ],
    redacted: [
      "Property owner names on the adjacent owner survey (legitimate use of §87(2)(b) for private natural persons).",
    ],
    notProduced: [
      "Any reply from the Town of Salina to NYSTA's certified mailing.",
      "Any public hearing transcript or community meeting record.",
      "Local newspaper notice (Syracuse Post-Standard or Liverpool Review).",
      "Any direct mailing to adjacent property owners on Electronics Parkway, Buckley Road, or surrounding residential streets.",
    ],
  },
  {
    id: "item-5",
    number: "Item 5",
    label: "Financial Compensation & Revenue",
    blurb:
      "NYSTA redacted the central financial number of the project — the Annual Fee paid by PTI for occupying public state land — under New York Public Officers Law §87(2)(b). Under settled case law (Matter of Federation of N.Y. State Rifle & Pistol Clubs v. NYPD, 73 N.Y.2d 92), §87(2)(b) does not apply to corporations.",
    produced: [
      {
        title: "Permit Fee Check (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-permit-fee-check-redacted.pdf",
        note: "Dollar amount and bank info redacted. The visible permit fee per the cover letter is $750 administrative.",
      },
      {
        title: "Additional Check (Redacted)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-check-redacted.pdf",
      },
    ],
    redacted: [
      "The Annual Fee dollar amount (Section III of the PTI Permit) — corporate financial data, §87(2)(b) does not apply.",
      "The fee check amount — public revenue from a corporation to a state authority, §87(2)(b) does not apply.",
      "Bank routing and account information on the check (legitimate redaction — disclosure would expose the corporate account to fraud).",
      "Verizon and AT&T sub-tenant rent amounts (referenced in the Condition Rider, not in the production).",
    ],
    notProduced: [
      "PTI–Verizon Co-location Agreement (which feeds the 50% pass-through to NYSTA per Section I.H).",
      "PTI–AT&T Anchor Tenant Agreement showing AT&T's rent.",
      "PTI–T-Mobile Co-location Agreement.",
      "5%/annum escalation history referenced in Section I.H.",
      "Field payment receipt for the $750 administrative fee referenced in the transmittal letter.",
    ],
  },
  {
    id: "item-6",
    number: "Item 6",
    label: "Fall Zone & Structural Safety Hazard Reports",
    blurb:
      "Sabre Industries Structural Design Report (with full base reactions, Risk Category, design wind/ice), ASCE Hazard Reports, TEP Structural Analyses, Tower/Foundation Drawings, three Construction Drawing versions, the Geotechnical Investigation, Topographic Survey, FAA 1A Survey, and Wetlands Delineation. The TEP Structural Analysis was based on a drilled pier foundation; the approved Construction Drawings show pad/pier — a foundation-type mismatch that NYSTA closed without producing the reconciliation memo.",
    produced: [
      {
        title: "Sabre Industries Structural Design Report Rev B (7/15/2025)",
        href: "https://media.protectliverpoolny.org/foil/sabre-structural-design-report-rev-b-20250715.pdf",
        note: "Engineer of record: Robert Beacom (Sabre, Alvarado TX). Standard ANSI/TIA-222-H. Design wind 109 mph / ice 1.50\". Risk Category II. Site Class D (DEFAULT, not field-verified). Base moment 6,352.75 ft-kips. Two foundation options designed.",
      },
      {
        title: "FAA 7460-1 — Construction Crane (2025-AEA-11322-OE)",
        href: "https://media.protectliverpoolny.org/foil/faa-7460-crane-2025-aea-11322-oe.pdf",
        note: "Crane operator Clark Rigging & Rental (Mike Dombroski). Crane height 220 ft AGL / 655 ft AMSL during construction.",
      },
      {
        title: "ASCE Hazard Report — Exit 37 Liverpool",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-asce-hazard-report.pdf",
      },
      {
        title: "ASCE Design Hazards Report — Exit 37 Liverpool",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-asce-design-hazards-report.pdf",
      },
      {
        title: "ASCE Hazard Report — Park & Ride sister site",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-park-n-ride-asce-hazard-report.pdf",
      },
      {
        title: "TEP Structural Analysis — Verizon (T3U250002)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-vz-sa.pdf",
      },
      {
        title: "TEP Structural Analysis — Sister Site (Park & Ride)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2030-t3u250001-verizon-sa.pdf",
      },
      {
        title: "AT&T Updates to Structural Analysis",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-att-updates-to-sa.pdf",
      },
      {
        title: "Tower Drawings + Foundation Drawings (Stamped)",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-td-fd-stamped.pdf",
      },
      {
        title: "Construction Drawings — 6/17/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-nysta-exit37-cdfinal-20250617.pdf",
      },
      {
        title: "Construction Drawings — 10/7/2025",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-vz-cdfinal-20251007.pdf",
      },
      {
        title: "Construction Drawings — 10/10/2025",
        href: "https://media.protectliverpoolny.org/foil/electronics-parkway-cdfinal-20251010.pdf",
      },
      {
        title: "Geotechnical Investigation Report",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-geo.pdf",
        note: "Tectonic Engineering, GEO24-23357-08, B-1 boring drilled 11/6/2024 to 50 ft. Groundwater at 28.10 ft below grade.",
      },
      {
        title: "Topographic Survey",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-topographic-survey.pdf",
      },
      {
        title: "FAA 1A Survey Certification",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-faa-1a-survey-certification.pdf",
      },
      {
        title: "Wetlands Delineation Report",
        href: "https://media.protectliverpoolny.org/foil/us-ny-2029-exit-37-wetlands-delineation-report.pdf",
      },
    ],
    redacted: [
      "Engineering technical content appears largely un-redacted. Some personal email addresses on stamped drawings.",
    ],
    notProduced: [
      "Reconciliation memo between TEP Structural Analysis (drilled pier) and Construction Drawings (pad/pier).",
      "Independent third-party structural review (no peer review of Tectonic's design).",
      "Project-specific ice-shedding hazard analysis.",
      "Tower fire emergency response plan (the local fire department's 100-ft ladder limit is not addressed).",
    ],
  },
  {
    id: "item-7",
    number: "Item 7",
    label: "Alternative Site Analysis",
    blurb:
      'NYSTA Records Access Officer Jill B. Warner, May 8, 2026: "No records responsive to Item 7 were located." NYSTA admitted in writing that no engineering or planning analysis was ever conducted to demonstrate why this specific residential site was chosen over alternatives. This is the showcase finding for any administrative appeal, hearing, or media engagement.',
    produced: [],
    notProduced: [
      "Coverage Objective + Alternatives Analysis showing nearby candidate locations were rejected for engineering, environmental, or land-availability reasons.",
      "Any document explaining why a 184-foot commercial cell tower had to go on top of a residential neighborhood, 1.25 miles from a bald eagle roost, ~100 feet from an active highway off-ramp.",
      "PTI's own internal alternatives memo (typically required by carriers for siting due-diligence).",
      "Any record of NYSTA requesting an alternatives analysis from PTI.",
    ],
  },
];

export default function FoilEvidencePage() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-950 to-dark-950" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/40 border border-purple-700/40 rounded-full text-purple-300 text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" />
                  FOIL Request #R000082-032026 — May 8, 2026 Production
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight"
              >
                What 49 Days of Stalling Bought Us:
                <br className="hidden sm:block" />{" "}
                <span className="text-purple-400">93 Documents</span> That Tell the Story{" "}
                <span className="text-danger-500">NYSTA Tried Not to.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-dark-400 max-w-lg leading-relaxed"
              >
                Every document the New York State Thruway Authority produced in response to FOIL Request #R000082-032026, organized by the seven categories of the original request. Cite them. Read them. Dig in.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-dark-900/60 border border-purple-800/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/40">
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
                  At a Glance
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center">
                    <p className="text-3xl font-black text-purple-300">93</p>
                    <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1">records produced</p>
                  </div>
                  <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center">
                    <p className="text-3xl font-black text-danger-400">49</p>
                    <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1">day stall</p>
                  </div>
                  <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center">
                    <p className="text-3xl font-black text-amber-400">7</p>
                    <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1">FOIL items requested</p>
                  </div>
                  <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center">
                    <p className="text-3xl font-black text-emerald-400">0</p>
                    <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1">Alternative Site Analysis records</p>
                  </div>
                </div>
                <p className="text-xs text-dark-500 italic mt-4 leading-relaxed">
                  Records arrived on May 8, 2026 — two business days after our constructive-denial appeal clock expired.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={categories.map((c) => ({
          label: `${c.number} — ${c.label}`,
          id: c.id,
        }))}
      />

      {/* ═══════════════════ READING NOTES ═══════════════════ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-5 md:p-6"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
              How to Read This Catalog
            </p>
            <ul className="text-sm text-dark-200 leading-relaxed space-y-1.5 list-disc pl-5">
              <li>
                Each category lists what NYSTA <strong className="text-white">produced</strong>, what was <strong className="text-white">redacted</strong>, and what NYSTA <strong className="text-white">did not produce</strong>.
              </li>
              <li>
                Filenames have been normalized to lowercase, hyphenated URLs. Original NYSTA filenames are referenced inline where helpful for cross-checking against the response cover letter.
              </li>
              <li>
                Redactions cited under New York Public Officers Law §87(2)(b) are largely indefensible for corporate financial terms. See{" "}
                <Link href="/the-facts/loophole-kings" className="text-amber-300 underline decoration-amber-500/40 hover:decoration-amber-400">
                  /the-facts/loophole-kings
                </Link>{" "}
                for the full breakdown.
              </li>
              <li>
                Daniel&rsquo;s personal FOIL appeal letter is intentionally <em>not</em>{" "}hosted in this catalog — it&rsquo;s a private legal pleading.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CATEGORIES ═══════════════════ */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="scroll-mt-24"
            >
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <span className="px-2.5 py-1 bg-purple-900/40 border border-purple-700/30 rounded-md text-[10px] font-bold text-purple-300 uppercase tracking-wider whitespace-nowrap">
                    {cat.number}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white leading-tight">
                    {cat.label}
                  </h2>
                </div>
                <p className="text-dark-300 text-sm leading-relaxed mb-6">
                  {cat.blurb}
                </p>

                {cat.produced.length > 0 ? (
                  <>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
                      Produced ({cat.produced.length})
                    </p>
                    <div className="space-y-2 mb-6">
                      {cat.produced.map((doc) => (
                        <a
                          key={doc.href}
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3 bg-dark-950/50 hover:bg-dark-950/80 border border-dark-800/30 hover:border-emerald-700/30 rounded-xl px-4 py-3 transition-all"
                        >
                          <FileText className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-dark-100 group-hover:text-white transition-colors leading-snug">
                              {doc.title}
                              <ExternalLink className="inline-block w-3 h-3 ml-1 text-dark-500" />
                            </p>
                            {doc.note && (
                              <p className="text-xs text-dark-400 mt-1 leading-relaxed">
                                {doc.note}
                              </p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="bg-danger-950/30 border-2 border-danger-700/40 rounded-xl px-5 py-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-danger-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-danger-300 mb-1">
                          Produced: 0
                        </p>
                        <p className="text-sm text-dark-200 leading-relaxed">
                          NYSTA Records Access Officer Jill B. Warner, May 8, 2026:{" "}
                          <em>&ldquo;No records responsive to Item 7 were located.&rdquo;</em>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {cat.redacted && cat.redacted.length > 0 && (
                  <>
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                      Redacted
                    </p>
                    <ul className="space-y-1.5 list-disc pl-5 mb-6">
                      {cat.redacted.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-dark-300 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {cat.notProduced && cat.notProduced.length > 0 && (
                  <>
                    <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
                      Not Produced
                    </p>
                    <ul className="space-y-1.5 list-disc pl-5">
                      {cat.notProduced.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-dark-300 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════ NEXT STEPS ═══════════════════ */}
      <section className="py-16 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6 md:p-8"
          >
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
              What Happens Next
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              The Production Triggered the 30-Day Redaction Appeal Clock.
            </h2>
            <ul className="space-y-2 text-dark-200 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong className="text-white">By approximately June 7, 2026</strong> — Filing an administrative redaction appeal with the NYSTA Records Appeals Officer demanding the Annual Fee, the fee check amount, and carrier sub-tenant rent terms. POL §89(4)(c) provides for fee-shifting in any subsequent Article 78.
              </li>
              <li>
                <strong className="text-white">Follow-up FOIL filed</strong>{" "}targeting the Verizon RFDS (Project ID 17326150) and any AT&amp;T or T-Mobile RF emissions/propagation studies.
              </li>
              <li>
                <strong className="text-white">Referrals sent</strong>{" "}to the NYS Authorities Budget Office (financial audit), the Office of the State Comptroller (General Municipal Law §33), and the NYS Committee on Open Government (advisory opinion on §87(2)(b) misapplication).
              </li>
              <li>
                <strong className="text-white">Article 78 reserved</strong>{" "}if administrative appeal denies relief — fee-shifting under POL §89(4)(c) if we substantially prevail.
              </li>
            </ul>
          </motion.div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <Link
              href="/the-facts/loophole-kings"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-amber-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                ← The Loophole Kings
              </p>
              <p className="text-xs text-dark-400">
                Including the §87(2)(b) misapplication and the SEQRA self-review.
              </p>
            </Link>
            <Link
              href="/the-facts/highway-safety"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-orange-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-orange-400 transition-colors mb-1">
                Highway Safety
              </p>
              <p className="text-xs text-dark-400">
                Diesel generator, tower standard mismatch, footer depth, foundation mismatch.
              </p>
            </Link>
            <Link
              href="/changelog"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-purple-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                Movement Updates →
              </p>
              <p className="text-xs text-dark-400">
                The May 8, 2026 FOIL Victory entry, with full context.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
