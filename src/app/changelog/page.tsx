import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Movement Updates & Change Log — ProtectLiverpoolNY.org",
  description:
    "Movement updates, factual corrections, source verifications, and content changes — all documented publicly.",
  alternates: { canonical: "/changelog" },
};

/* ═══════════════════ MOVEMENT UPDATES ═══════════════════ */
const updates: { date: string; title: string; body: string; label?: string }[] =
  [
    {
      date: "May 8, 2026",
      label: "🔴 FOIL VICTORY (with caveats)",
      title:
        "NYSTA Produced 81 Documents. Their Redactions Don't Hold Up. Their Story Just Collapsed.",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>Forty-Nine Days Late. Two Days After the Appeal Clock Expired.</h3>On <strong>May 8, 2026</strong>, after a 49-calendar-day stall, NYSTA Records Access Officer Jill B. Warner produced <strong>81 unique documents</strong> in response to FOIL Request <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>#R000082-032026</span> &mdash; just <strong>two business days after our constructive-denial appeal clock expired</strong>. The full set is now hosted at <a href='/foil/' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>/foil/</a> and catalogued at <a href='/the-facts/foil-evidence' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>/the-facts/foil-evidence</a>. Here is what the documents prove.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>1. There Is No Alternative Site Analysis. NYSTA Admitted It in Writing.</h3>Item 7 of the original FOIL request asked for the engineering or planning analysis showing why a 184-foot commercial tower had to be built on top of a residential neighborhood, 1.25 miles from a bald eagle roost, ~100 feet from an active highway off-ramp. The response, verbatim from RAO Warner&rsquo;s May 8 letter:<br/><blockquote style='border-left: 3px solid #ef4444; padding-left: 12px; margin: 12px 0; font-style: italic'>&ldquo;No records responsive to Item 7 were located.&rdquo;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>&mdash; Jill B. Warner, Records Access Officer, NYS Thruway Authority, May 8, 2026</span></blockquote><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>No engineering, no planning, no alternatives study was ever conducted.</span> A bedrock siting requirement was skipped, and NYSTA has now confirmed it on agency letterhead.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>2. NYSTA Wrote Into Its Own Permit That It Can Yank This Tower Tomorrow.</h3>Section II.A of PTI Occupancy Permit T3U250002, in NYSTA&rsquo;s own words:<br/><blockquote style='border-left: 3px solid #ef4444; padding-left: 12px; margin: 12px 0; font-style: italic'>&ldquo;There is no term. This Occupancy Permit is revocable, unilaterally, upon demand by the Authority...&rdquo;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>&mdash; Section II.A, PTI Occupancy Permit T3U250002, issued June 23, 2025</span></blockquote>Every &ldquo;we&rsquo;re locked in&rdquo; excuse falls here. NYSTA can terminate PTI&rsquo;s right to occupy this site <strong>at any time, for any reason, with no penalty</strong>. This is a political choice, not a legal constraint.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>3. The Annual Fee Is Redacted Under a Privacy Law That Doesn&rsquo;t Apply to Corporations.</h3>The Annual Fee paid by Phoenix Tower International &mdash; the rent for occupying public state land &mdash; is <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>fully blacked out</span>. NYSTA cited New York Public Officers Law &sect;87(2)(b) (&ldquo;personal privacy&rdquo;). The Permittee is <strong>PTI US Towers I, LLC</strong>, a Delaware/Florida limited liability company. Under settled New York case law (<em>Matter of Federation of N.Y. State Rifle &amp; Pistol Clubs v. NYPD</em>, 73 N.Y.2d 92), the personal-privacy exemption protects natural persons, not corporations. The redaction is legally indefensible &mdash; and it is the central financial number of this entire project.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>4. A 30 kW Diesel Generator and 145 Gallons of Fuel Just Showed Up.</h3>Buried in the 11/6/2025 PTI Construction Permit (applicant signature: Jackie Donahue, PTI; contact: Darrell Paulson, InfraServices): <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>a 30 kilowatt diesel generator with a 145-gallon belly tank</span>, mounted on a steel platform at grade inside a 50&rsquo;&times;50&rsquo; fenced compound, ~100 feet from the active I-90 off-ramp. No Spill Prevention Control and Countermeasure (SPCC) plan was produced. No air-quality compliance documentation was produced. No public meeting ever mentioned this. <a href='/foil/us-ny-2029-t3u250002-construction-permit-11-06-2025.pdf' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Read the permit</a>.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>5. NYSTA&rsquo;s Own Engineer Caught the Project With Missing Paperwork &mdash; for Eight Months.</h3>NYSTA Engineer-in-Charge <strong>Joshua Stagnitti</strong> documented in writing across five review cycles:<br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 4px'><strong>6/2/2025:</strong> &ldquo;Structural Analysis Reports have not been submitted. Hazard Reports have not been submitted. Engineered lift plans have not been submitted.&rdquo;</li><li style='margin-bottom: 4px'><strong>8/27/2025:</strong> AT&amp;T review &mdash; &ldquo;Construction Permit Application not submitted. Geotechnical Report not submitted. ASCE Hazard Reports not submitted. Full environmental assessment form not submitted.&rdquo;</li><li style='margin-bottom: 4px'><strong>10/3/2025:</strong> Verizon&rsquo;s footer was submitted at <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>3&rsquo;-6&rdquo;</span>. NY Code minimum is 4&rsquo;. Six inches below code on first round.</li><li style='margin-bottom: 4px'><strong>11/6/2025:</strong> AT&amp;T Round 2 &mdash; &ldquo;This report mentions a drilled pier foundation that does not match up with the approved construction plans for the tower.&rdquo; Foundation type mismatch between the structural analysis and the as-built plans.</li><li style='margin-bottom: 4px'><strong>11/6/2025:</strong> Item #3 closed without resolution &mdash; the tower is designed to <strong>ANSI/TIA-222-H</strong>, but New York State Building Code Chapter 35 references the older <strong>222-G-2005</strong> standard. Standards mismatch never reconciled. Closed with &ldquo;DRAWINGS UPDATED.&rdquo;</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>6. Salina Was Notified &mdash; But to the Wrong Supervisor.</h3>The SEQRA determination cover letter and certified-mail green card (USPS <strong>7019 1640 0000 0800 4105</strong>) is in the production. It was addressed to <strong>Nicholas Paro, Town Supervisor</strong>, 201 School Road, Liverpool NY 13088 &mdash; the predecessor to current Supervisor Raul Huerta. Mr. Paro signed for it. The response contains <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>no record of any reply from the Town</span> under the prior administration. We&rsquo;re publishing a separate correction below to update our framing. Supervisor Huerta inherited this &mdash; he remains an ally.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>7. NYSTA Was Its Own SEQRA Lead Agency &mdash; Reviewing Its Own Land Lease.</h3>From the FEAF Part 3: NYSTA classified the action as Type I, designated itself Lead Agency, then issued itself a Negative Declaration. Self-review on public land. The bald eagle dismissal cited the &ldquo;USFWS Northeast Determination Key&rdquo; &mdash; a self-serve web tool, not a formal Section 7 consultation, and not a USFWS letter. <a href='/foil/usny2029-nysta-seqra-r3-final.pdf' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Read the SEQRA file</a>.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What Happens Next</h3><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'><strong>Within 30 days (deadline ~June 7, 2026):</strong> Filing an administrative redaction appeal with the NYSTA Records Appeals Officer demanding the Annual Fee, the fee check amount, and the carrier sub-tenant rent terms. POL &sect;89(4)(c) provides for fee-shifting in any subsequent Article 78 if we substantially prevail.</li><li style='margin-bottom: 6px'><strong>Filing a follow-up FOIL</strong> targeting the missing RF Antenna Design Sheet (Verizon RFDS Project ID 17326150) and any AT&amp;T/T-Mobile RF emissions and propagation studies.</li><li style='margin-bottom: 6px'><strong>Sending the redaction analysis</strong> to the NYS Committee on Open Government (COOG) for an advisory opinion, and a financial-audit referral to the NYS Authorities Budget Office and the Office of the State Comptroller.</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>The Documents Are Public.</h3>Every document NYSTA produced is now hosted at <a href='/foil/' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>/foil/</a> and catalogued by FOIL category at <a href='/the-facts/foil-evidence' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>/the-facts/foil-evidence</a>. Read them. Cite them. They are the public record.<br/><br/><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>Forty-nine days bought us 81 documents and one extraordinary admission: there is no Alternative Site Analysis, the lease is unilaterally revocable, and the redactions don&rsquo;t hold up. The story NYSTA tried not to tell is now in writing.</span>",
    },
    {
      date: "May 8, 2026",
      label: "Cross-FOIL Contradiction",
      title:
        "The Town Clerk Said “No Records.” NYSTA’s Response Just Proved Otherwise.",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>Two FOIL Filings. Two Different Answers. One of Them Is Contradicted by the Public Record.</h3>On <strong>March 20, 2026</strong> at 2:29 PM, we filed a parallel FOIL request with the Town of Salina, asking for the same kinds of records we were also requesting from NYSTA &mdash; SEQRA documents, official correspondence with the applicant or NYSTA, public notices, and proof of mailing.<br/><br/><strong>17 minutes later</strong>, at 2:46 PM, Town Clerk and FOIL Records Officer <strong>Paula Primerano</strong> replied:<br/><blockquote style='border-left: 3px solid #c084fc; padding-left: 12px; margin: 12px 0; font-style: italic'>&ldquo;You request has been received. The Town of Salina is not in possession of any of the requested documents. The area you are referring to is owned by the NYS Thruway authority. The State does not need the Town’s permission to erect such towers.&rdquo;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>&mdash; Paula Primerano, Town Clerk / FOIL Records Officer, Town of Salina, March 20, 2026 at 2:46 PM</span></blockquote><h3 class='text-base font-bold text-white mt-4 mb-1'>What NYSTA Just Produced Contradicts That Reply.</h3>On <strong>May 8, 2026</strong>, NYSTA’s production in response to FOIL Request <strong>#R000082-032026</strong> included USPS Certified Mail return receipt <strong>#7019 1640 0000 0800 4105</strong> &mdash; addressed to <strong>Nicholas Paro, Town Supervisor, Town of Salina, 201 School Road, Liverpool NY 13088</strong>, signed for at Town Hall in approximately May 2025. The certified package transmitted the <strong>SEQRA Determination Letter (Negative Declaration)</strong> and the <strong>Full Environmental Assessment Form Part 3</strong> for the project under NYSTA designation US-NY-2029.<br/><br/>That receipt places the Town of Salina in possession of &mdash; or as the lawful custodian of &mdash; records responsive to <strong>at least three categories</strong> in our March 20 filing: SEQRA documents, official correspondence with NYSTA, and proof of mailing.<br/><br/><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>17 minutes is not a search. It is a categorical assumption.</span> Public Officers Law &sect;89(3)(a) does not contain an explicit “diligent search” mandate, but the Committee on Open Government and New York case law consistently hold that a categorical denial issued without a records search is not a valid response &mdash; particularly when the agency is in possession of an obvious responsive record.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What We’re Doing About It</h3>We have filed a <strong>follow-up FOIL with the Town of Salina today</strong>, addressed to Town Clerk Paula Primerano with current Supervisor <strong>Raul Huerta</strong> and Town Attorney <strong>Rodney-David Lowe</strong> on copy. The follow-up:<br/><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'>Cites the USPS 7019 1640 0000 0800 4105 certified-mail tracking number as proof the Town is the custodian of responsive records.</li><li style='margin-bottom: 6px'>Corrects an inadvertent &ldquo;I-81&rdquo; reference in the original filing to the correct &ldquo;I-90 (NYS Thruway) Exit 37&rdquo; designation, eliminating any procedural ambiguity.</li><li style='margin-bottom: 6px'>Demands a sworn certification under POL &sect;89(3)(a) that a diligent search has been performed across all reasonably accessible Town records &mdash; including digital archives, paper files, and any retained records from former Supervisor Paro’s tenure.</li><li style='margin-bottom: 6px'>Requests internal Town routing memoranda, emails, transmittal slips, meeting agenda items, and any reply correspondence sent by the Town to NYSTA, PTI, or any tenant carrier.</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Framing</h3>This is, for now, a <strong>procedural failure</strong> &mdash; not (yet) intentional concealment. The certified-mail package was received under former Supervisor <strong>Nicholas Paro’s</strong> administration, before current Supervisor <strong>Raul Huerta</strong> took office in January 2026. Mr. Huerta inherited this situation. He is being given every opportunity to direct his Clerk to correct the record. We continue to position the current administration as an ally rather than an adversary.<br/><br/>If the Town stonewalls a second time after being shown the certified-mail receipt &mdash; <em>then</em> the framing changes. For now: the no-records reply is <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>demonstrably wrong</span>, and the public record is the proof.",
    },
    {
      date: "May 8, 2026",
      label: "Correction",
      title: "Salina Was Notified — But to the Wrong Supervisor",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>The Certified-Mail Green Card Is in the FOIL Response.</h3>On May 8, 2026, NYSTA produced a USPS Certified Mail return receipt &mdash; <strong>#7019 1640 0000 0800 4105</strong> &mdash; addressed to <strong>Nicholas Paro, Town Supervisor, Town of Salina, 201 School Road, Liverpool NY 13088</strong>. Mr. Paro signed for the package. Per the cover letter, this was the SEQRA Determination notification with the FEAF Part 3 evaluation attached, transmitted in approximately mid-2025.<br/><br/>Mr. Paro is the <strong>predecessor</strong> to current Town of Salina Supervisor <strong>Raul Huerta</strong>, who took office January 2026.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What This Changes &mdash; and What It Doesn&rsquo;t</h3>Our prior framing across the site was that the Town of Salina was &ldquo;bypassed and never notified.&rdquo; That framing requires a small but important correction:<br/><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'>The Town <strong>was</strong> legally noticed under SEQRA, by certified mail, to the prior administration.</li><li style='margin-bottom: 6px'>The FOIL response contains <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>no record of any response from the Town</span> under that prior administration. No emails. No letters. No follow-up. No public hearing record.</li><li style='margin-bottom: 6px'>The failure to act on that notice happened <strong>upstream of Supervisor Huerta&rsquo;s tenure</strong>.</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Supervisor Huerta Remains an Ally</h3>Supervisor Huerta inherited this situation. He has had no opportunity to act on a SEQRA notice that was processed (or ignored) under his predecessor. Our position is unchanged: the local officials currently in office &mdash; Huerta, Driscoll, and Thompson &mdash; had no jurisdiction over state land and remain <strong>political allies</strong> with us, not adversaries.<br/><br/>The accountability here flows to <strong>NYSTA</strong> (which approved itself as SEQRA Lead Agency on its own land lease) and to whoever inside the prior Salina administration received that certified mail and did nothing with it.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Where the Correction Has Been Applied</h3>See the <a href='/changelog#corrections' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Corrections Log</a> below for the formal before/after diff and full list of pages updated.",
    },
    {
      date: "April 22, 2026",
      label: "🔴 FOIL VIOLATION",
      title:
        "NYSTA Broke the Law Today. We Filed Back Within Hours.",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>Today Was the Deadline. They Blew It.</h3>April 22, 2026 was the <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>absolute legal deadline</span> for the New York State Thruway Authority to hand over the engineering blueprints, fall zone metrics, and financial lease agreements for the 184-foot monopole at Exit 37 / 474 Electronics Parkway (FOIL Request #R000082-032026).<br/><br/>They had 20 business days. They used every single one of them. And today, instead of producing the documents, <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>NYSTA violated the Freedom of Information Law.</span><br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What They Did</h3>NYSTA issued a boilerplate, bad-faith delay &mdash; not a single document produced. Instead, they promised a &ldquo;status update&rdquo; on <strong>May 20, 2026</strong> &mdash; nearly <strong>two full months</strong> after our original request. They provided <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>zero legal justification</span> for continuing to withhold these records.<br/><br/>Under New York State Public Officers Law &sect; 89(3)(a), a FOIL extension must be &ldquo;reasonable and based on the circumstances of the request.&rdquo; Kicking the can another month while a crane pours concrete on a tower you won&rsquo;t explain is not reasonable. It is obstruction.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Why They&rsquo;re Stalling &mdash; We Already Know</h3>We already have the answer they&rsquo;re trying to bury. The NYS Department of Environmental Conservation responded to our FOIL in <strong>7 days</strong> with a clear, unambiguous answer:<br/><br/><blockquote style='border-left: 3px solid #ef4444; padding-left: 12px; margin: 12px 0; font-style: italic'>&quot;A diligent search of the files maintained by DEC produced no responsive records.&quot;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>&mdash; Region 7 FOIL Coordinator, NYS DEC, FOIL #W162712-032526, April 1, 2026</span></blockquote><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>Zero SEQRA records. Zero environmental reviews. Zero wildlife consultations.</span> The state&rsquo;s own environmental agency has no records of a 184-foot tower being built near documented bald eagle roosts &mdash; and NYSTA is stalling because the moment they open their files, the world will see that they bypassed every environmental and safety review designed to protect this community.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What We Did Today &mdash; Our Counter-Attack</h3><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 10px'><strong>1. Triggered the 10-Day Legal Clock.</strong> We filed a <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>formal Constructive Denial Appeal</span> to the NYSTA Appeals Officer. Under Public Officers Law &sect; 89(4)(a), NYSTA now has <strong>10 business days</strong> to produce the requested documents in full or issue a written determination with specific legal grounds for denial. If they fail to do either, we proceed directly to an <strong>Article 78 proceeding in NYS Supreme Court</strong> to compel disclosure. The clock is running.</li><li style='margin-bottom: 10px'><strong>2. Called in the Watchdog.</strong> We filed a formal request for an <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>Advisory Opinion from the NYS Committee on Open Government (COOG)</span> &mdash; the state agency that exists to hold other state agencies accountable when they abuse FOIL. Our submission includes NYSTA&rsquo;s original response, their illegal extension, the DEC&rsquo;s &ldquo;zero records&rdquo; confirmation, and our <strong>71-signature petition</strong> proving this is not an academic exercise &mdash; this is a highly controversial active construction site with massive community opposition, and NYSTA is weaponizing FOIL to run out the clock while they finish building.</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>The 10-Day Countdown</h3>NYSTA&rsquo;s appeal clock starts now. They have until approximately <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>May 6, 2026</span> to comply. If they don&rsquo;t, we file in Supreme Court. There is no third extension. There is no more stalling. The next step after this is a judge.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>To Our 71 Signers</h3>Your names were attached to every document we filed today. Your petition was cited in our COOG submission as evidence of the public interest at stake. You are not just signatures on a website &mdash; you are the reason this fight has legal standing, political weight, and teeth. <strong>Thank you.</strong><br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What&rsquo;s Next</h3><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'><strong>Keep sharing the petition.</strong> Every new signature strengthens our position when this reaches a courtroom.</li><li style='margin-bottom: 6px'><strong>Stand by for a targeted phone-banking campaign</strong> directed at <strong>NYS Assembly Transportation Committee Chair William Magnarelli</strong> &mdash; the man with direct legislative oversight of the Thruway Authority. Scripts and numbers coming soon.</li><li style='margin-bottom: 6px'><strong>Stay on high alert.</strong> Construction is ongoing. Document everything from public areas. Do not trespass.</li></ul><br/><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>They thought they could wait us out. They were wrong. The law is on our side, the clock is on our side, and 71 neighbors are on the record. This ends in a courtroom or it ends with them handing over the documents. Either way &mdash; it ends.</span>",
    },
    {
      date: "April 2, 2026",
      label: "🔴 Important",
      title:
        "Use Your Voice. Use It Wisely.",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>Your First Amendment Is Your Strongest Weapon — Don&rsquo;t Give Them a Reason to Take It Away</h3>We are winning. The DEC has confirmed zero environmental records. The Sheriff&rsquo;s Office has confirmed no communication dead zones. NYSTA is stalling their FOIL response while a crane mounts commercial 5G antennas on a tower they claimed was for emergency services. The facts are on our side. The law is on our side. The public record is on our side.<br/><br/>That is exactly why we need to talk about discipline.<br/><br/><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>The people on the other side of this are not amateurs.</span> They have attorneys. They have public relations teams. They have lobbyists. They have decades of experience making communities like ours look unreasonable, emotional, and easy to dismiss. They are watching what we say, how we say it, and where we say it &mdash; looking for a single sentence they can pull out of context and use to discredit everything we&rsquo;ve built.<br/><br/><strong>Do not give them that sentence.</strong><br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>What This Means in Practice</h3><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'><strong>Speak in facts.</strong> Every claim on this site is sourced, cited, and documented. When you talk to neighbors, officials, or press &mdash; do the same. &ldquo;The DEC confirmed zero environmental records&rdquo; hits harder than anger ever will.</li><li style='margin-bottom: 6px'><strong>Standing policy reminder:</strong> This movement maintains a zero-tolerance position on threats, harassment, intimidation, trespassing, or any illegal activity. Always has. Review the <a href='/code-of-conduct' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Code of Conduct</a>.</li><li style='margin-bottom: 6px'><strong>Assume everything you say publicly will be read by their attorneys.</strong> Because it will be. Post on social media like a lawyer is screenshotting it &mdash; because they are. Say things you can defend in a courtroom.</li><li style='margin-bottom: 6px'><strong>Exercise your First Amendment rights fully and without apology.</strong> Protest. Petition. Speak at public meetings. Contact your representatives. File FOIL requests. Write letters to the editor. These are your constitutional rights and no one &mdash; not NYSTA, not Phoenix Tower International &mdash; can take them from you. But they <em>can</em> use your own words against you if you hand them the ammunition.</li><li style='margin-bottom: 6px'><strong>Let the record speak.</strong> We have the DEC&rsquo;s own response. We have the Sheriff&rsquo;s own words. We have their FOIL tracking numbers, their FCC filings, and their FAA determinations. The documentation is devastating &mdash; but only if we stay disciplined enough to let it do the talking.</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>They Want You Angry. Stay Sharp Instead.</h3>Anger is natural. Anger is justified. But anger without discipline is a gift to the opposition. They are counting on someone in this community to say something stupid, do something reckless, or cross a line that lets them reframe this entire fight as a &ldquo;neighborhood dispute&rdquo; instead of what it actually is: a <strong>documented pattern of regulatory evasion, environmental negligence, and corporate abuse of public land</strong>.<br/><br/>We are not a neighborhood dispute. We are a legal challenge backed by federal wildlife law, state environmental law, and 70+ signatures from people who read every word before they signed.<br/><br/><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>Stay loud. Stay legal. Stay undeniable.</span>",
    },
    {
      date: "April 2, 2026",
      label: "Policy Update",
      title: "Code of Conduct Updated — Individual Liability Disclaimer Added",
      body: "A new <strong>Individual Liability & Disclaimer</strong> section has been added to the <a href='/code-of-conduct' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Code of Conduct</a>.<br/><br/>The section makes explicit what has always been our position: <strong>you are responsible for your own words and actions.</strong> ProtectLiverpoolNY.org does not automatically endorse, adopt, or assume liability for statements made by any individual supporter, signer, or community member outside of the content explicitly published on this website.<br/><br/>Signing the petition means you agree with the demands as written. It does not make you a spokesperson for this movement, and it does not make this movement responsible for your personal statements. If you speak publicly &mdash; and we encourage you to &mdash; speak for yourself, speak in facts, and own what you say.",
    },
    {
      date: "April 2, 2026",
      label: "Policy Update",
      title: "Privacy Policy, Terms of Service & Disclaimer Hardened",
      body: "All three legal pages have been reviewed and updated:<br/><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'><strong>Privacy Policy:</strong> Phone number added to the list of collected data (it was already being collected optionally but was not disclosed). Date updated.</li><li style='margin-bottom: 6px'><strong>Terms of Service:</strong> Three new sections added &mdash; <em>Limitation of Liability</em> (&quot;as is&quot; / &quot;as available&quot; protection for volunteers), <em>Individual Conduct &amp; Statements</em> (the site does not endorse individual supporters&rsquo; statements), and <em>Modifications to Terms</em> (continued use = acceptance). Date updated.</li><li style='margin-bottom: 6px'><strong>About &amp; Disclaimer:</strong> New <em>Individual Liability</em> section added, mirroring the Code of Conduct language. Date updated to April 2, 2026.</li></ul>These updates ensure the legal infrastructure of this site matches the seriousness of the advocacy it supports. All changes are documented here and in the Claim Verification section below.",
    },
    {
      date: "April 2, 2026",
      title: "Case Study Added: Eagle Nest Illegally Removed from Cell Tower in South Carolina",
      body: "A new case study has been added to the <a href='/the-facts/wildlife' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Wildlife</a> page documenting what happened in Mount Pleasant, SC in January 2023.<br/><br/>Workers removed a bald eagle nest from the top of a cell tower <strong>without a permit from U.S. Fish &amp; Wildlife</strong> &mdash; a federal offense under the Bald and Golden Eagle Protection Act. The mayor called it &ldquo;appalling.&rdquo; Wildlife experts said the removal could disrupt breeding season.<br/><br/>This is not hypothetical. This is exactly the cycle we are warning about: <strong>tower goes up &rarr; eagles nest &rarr; telecom needs upgrades &rarr; nest gets destroyed.</strong> It has already happened in South Carolina. With 100+ bald eagles 1.25 miles from this tower at Onondaga Lake, there is every reason to believe it will happen here.<br/><br/>The section includes an embedded news report from WPDE ABC15 (video) and a link to the full story.<br/><br/><a href='https://www.youtube.com/watch?v=fOviJWbRHes' style='color: #ef4444; text-decoration: underline; text-underline-offset: 3px'>Watch the Report (YouTube)</a>",
    },
    {
      date: "April 2, 2026",
      title: "New Page: Highway Safety & Physical Hazards",
      body: "A new section has been added to <a href='/the-facts/highway-safety' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>The Facts</a> documenting the physical hazards of placing a 184-foot cell tower inside the I-90 Exit 37 highway infield &mdash; roughly 100 feet from the active off-ramp.<br/><br/><strong>Topics covered:</strong><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'><strong>Ice Shedding:</strong> OSHA warns ice from communication towers travels 50&ndash;100 feet horizontally. The ramp is ~100 feet away. OSHA, TIA-222, and the Mackinac Bridge Authority are all cited.</li><li style='margin-bottom: 6px'><strong>Tower Fires:</strong> Local fire departments cannot reach 184 feet. There is no mitigation plan for a tower fire over a highway ramp.</li><li style='margin-bottom: 6px'><strong>The &ldquo;Hinge Point&rdquo; Myth:</strong> A hinge point does not control direction. If it falls South or Southwest, it hits the active I-90 ramp. 50/50 coin toss.</li><li style='margin-bottom: 6px'><strong>The Jurisdiction Trap:</strong> Phoenix Tower International (Florida) partnered with NYSTA to invoke sovereign immunity and bypass all local zoning, safety inspections, and environmental review. We FOIL&rsquo;d the Town of Salina &mdash; they possess zero records.</li></ul>We are demanding the FHWA and NYS Public Service Commission produce independent engineering reviews.",
    },
    {
      date: "April 1, 2026",
      label: "⚠️ Signer Notice",
      title:
        "Petition Language Refined — All Current Signers Please Read",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>What Changed</h3>The formal petition demand letter has been updated today with the following refinements:<br/><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'><strong>Title simplified:</strong> &quot;Official Petition Demand &amp; Mandate for Abatement&quot; is now &quot;Official Petition Demand for Abatement.&quot; In legal terminology, citizens issue <em>demands</em> — courts issue mandates. The word &quot;mandate&quot; has been replaced with &quot;demand&quot; throughout the document to ensure proper legal standing.</li><li style='margin-bottom: 6px'><strong>Wildlife terminology corrected:</strong> &quot;Attractive nuisance&quot; (a tort concept specific to children) has been replaced with <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>&quot;hazardous wildlife attractant&quot;</span> — the exact regulatory term used by the FAA and U.S. Fish and Wildlife Service. We are now using their own language against them.</li><li style='margin-bottom: 6px'><strong>Emergency services rebuttal added:</strong> A new WHEREAS clause formally challenges the &quot;emergency services improvement&quot; justification, citing the Sheriff&rsquo;s Office confirmation of no dead zones, the commercial nature of the equipment being installed, the DEC&rsquo;s zero records, and the 16-month construction delay.</li><li style='margin-bottom: 6px'><strong>NYSTA FOIL obstruction documented:</strong> A new WHEREAS clause formally enters NYSTA&rsquo;s 20-business-day FOIL stalling tactic into the public record (FOIL Reference #R000082-032026), establishing their bad-faith evasion of accountability while construction proceeds.</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Does This Affect Your Signature?</h3><strong>The core demands have not changed.</strong> We still demand an immediate halt to construction, complete removal of the structure, municipal and state legal action including an Article 78 proceeding, and federal congressional intervention. These refinements <em>strengthen</em> the legal precision of the document — they do not alter what we are asking for.<br/><br/>However, we believe in full transparency. If any of these changes cause you to reconsider your signature, email <a href='mailto:takeaction@protectliverpoolny.org' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>takeaction@protectliverpoolny.org</a> and we will <strong>immediately and retroactively remove your name</strong> from the petition — no questions asked. We do not hold anyone to language they did not personally review and approve.<br/><br/>We encourage every signer to <a href='/take-action#petition' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>read the updated petition in full</a>.",
    },
    {
      date: "April 1, 2026",
      label: "Major Update",
      title:
        "DEC Confirms Zero Environmental Records \u2014 Construction Resumes With Crane On-Site",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>FOIL Response: NYS DEC Has No Records</h3>On March 25, 2026, we filed a Freedom of Information Law (FOIL) request with the New York State Department of Environmental Conservation (DEC), Region 7, requesting any Environmental Assessment Forms (EAFs), SEQRA determinations, wildlife impact assessments, or correspondence related to the tower at 474 Electronics Parkway.<br/><br/>On April 1, 2026, the DEC responded:<br/><br/><blockquote style='border-left: 3px solid #ef4444; padding-left: 12px; margin: 12px 0; font-style: italic'>&quot;A diligent search of the files maintained by DEC produced no responsive records.&quot;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>&mdash; Region 7 FOIL Coordinator, NYS Department of Environmental Conservation, FOIL #W162712-032526, April 1, 2026</span></blockquote>No EAFs. No SEQRA review. No wildlife consultation. No correspondence between the DEC and NYSTA or PTI. <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>The state&rsquo;s own environmental agency has zero records related to a 184-foot tower being built near documented bald eagle roosts at Onondaga Lake.</span><br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>NYSTA FOIL Still Pending</h3>A separate FOIL was filed with the New York State Thruway Authority requesting their SEQRA records, including any EAFs, Type II exemption classifications, or Negative Declarations they may have issued as lead agency. NYSTA has invoked the maximum 20-business-day extension. Their response is still pending.<br/><br/>The DEC responded in 7 days with a clear answer. NYSTA is taking 20.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Construction Resumes</h3>As of this morning, a crane is on-site at 474 Electronics Parkway installing <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>5G panel antennas</span> on the tower. Construction has resumed and is actively progressing &mdash; while the question of whether any environmental review was ever conducted by any agency remains unanswered.<br/><br/>To be clear: we are not claiming no environmental review was done. We are stating that the DEC has confirmed they have no records, and NYSTA has not yet responded. If an environmental review was conducted, no agency has produced it. Construction is proceeding regardless.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>The Crane Itself</h3>The crane currently on-site extends well over 200 feet to reach the top of a 184-foot tower. Under New York State Industrial Code Part 23-8, all crane operations are required to meet specific safety standards, including operator certification (NYS Certificate of Competence), documented inspections, stability requirements, and engineering safety plans. Additionally, transporting a crane of this size on local roads requires NYS DOT oversized vehicle permits and compliance with municipal road weight limits.<br/><br/>We are asking: has the crane contractor complied with NYS Industrial Code Part 23-8? Were the required DOT transport permits obtained? Were local road weight limits observed? These are straightforward compliance questions with verifiable answers.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Formal Notice Sent to NYSTA Deputy Counsel</h3>An extremely stern letter was sent directly to <strong>Jennifer Andaloro, Deputy Counsel</strong> of the New York State Thruway Authority, formally challenging the 20-business-day extension on FOIL Request #R000082-032026.<br/><br/>The letter states, in part:<br/><br/><blockquote style='border-left: 3px solid #ef4444; padding-left: 12px; margin: 12px 0; font-style: italic'>&quot;We are fully aware of what this delay is. It is a transparent, bad-faith stall tactic to run out the clock while Phoenix Tower International (PTI) rushes to complete construction on a 184-foot commercial tower on your land at 474 Electronics Parkway.&quot;</blockquote>The letter establishes the following on the record:<br/><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'>The DEC has confirmed zero environmental records related to this site</li><li style='margin-bottom: 6px'>The Sheriff&rsquo;s Office has confirmed no known communication dead zones in Salina</li><li style='margin-bottom: 6px'>The panels being mounted are commercial 5G equipment, not emergency service infrastructure</li><li style='margin-bottom: 6px'>A 200+ foot crane is actively installing equipment while NYSTA withholds public records</li></ul>The letter cites <strong>New York State Public Officers Law &sect; 89(3)(a)</strong>, which requires that any FOIL extension be &quot;reasonable and based on the circumstances of the request,&quot; and warns that deliberately withholding documents to protect a private telecom developer is not a reasonable circumstance.<br/><br/>NYSTA&rsquo;s extended deadline is <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>April 22, 2026</span>. Any failure to produce the requested documents in full on that date will be treated as a constructive denial, triggering a formal administrative appeal and, if necessary, an <strong>Article 78 proceeding</strong> against the New York State Thruway Authority. A request for investigation by the <strong>NYS Authorities Budget Office (ABO)</strong> and the <strong>NYS Comptroller</strong> has also been put on the table.",
    },
    {
      date: "April 1, 2026",
      label: "Petition Updated",
      title:
        "Petition Demand Letter Updated — Emergency Services Claim Formally Challenged",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>New WHEREAS Clause Added</h3>The formal petition demand letter has been updated with a new clause directly addressing and dismantling the &quot;emergency services improvement&quot; justification used to defend this tower.<br/><br/>The updated language establishes the following on the public record:<br/><br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'>The <strong>Onondaga County Sheriff&rsquo;s Office</strong> has confirmed in writing that there are <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>no known communication dead zones</span> in the Salina area</li><li style='margin-bottom: 6px'>The equipment currently being installed is <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>commercial 5G panel antennas</span> &mdash; indicating this tower is not being built exclusively or even primarily for emergency service use</li><li style='margin-bottom: 6px'>The NYS DEC has confirmed <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>zero records</span> of any environmental review for this site</li><li style='margin-bottom: 6px'>The developer waited <strong>over sixteen months</strong> after receiving FAA clearance before breaking ground &mdash; a timeline wholly inconsistent with any claim of emergency need</li></ul><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>If You Already Signed</h3>Your signature still stands. The updated language <strong>strengthens</strong> the petition &mdash; it does not change the core demands. However, we encourage every signer to <a href='/take-action#petition' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>review the updated petition text</a> in full.<br/><br/>If for any reason this new language changes your position, email <a href='mailto:takeaction@protectliverpoolny.org' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>takeaction@protectliverpoolny.org</a> and we will remove your signature immediately. We do not hold anyone to language they did not agree to.<br/><br/>This is how we operate: transparently, on the record, and with respect for every person who put their name on this document.",
    },
    {
      date: "March 31, 2026",
      label: "Critical Developments",
      title:
        'Senator Ryan Relays PTI\'s "Emergency Services" Excuse',
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>The Claim</h3>Senator Ryan (SD-50) stated that NYSTA approved an &quot;occupancy permit&quot; for this project &quot;in accordance with its established permitting process&quot; and that <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>&quot;the applicant, Phoenix Tower International (PTI), has indicated that the tower is intended to improve coverage for emergency service providers in the area.&quot;</span> He did not verify this claim. He did not name which emergency service requested it. He directed the constituent back to NYSTA for details.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>The Problem With That Claim</h3>Emergency service providers &mdash; police, fire, EMS &mdash; do not communicate on commercial wireless networks. They use <strong>dedicated P25 digital radio systems</strong> operated on their own frequencies by the county. Onondaga County runs its own radio infrastructure for 911 dispatch and first responder communications. That is an entirely separate system from consumer cellular.<br/><br/>If this tower were truly being built for first responders, it would be <strong>FirstNet</strong> infrastructure &mdash; the federally authorized public safety broadband network that operates on a dedicated AT&amp;T band (Band 14) with its own separate equipment. FirstNet is not a commercial cell tower. It is purpose-built for public safety.<br/><br/>This tower is not FirstNet. The equipment on site includes <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>5G panel antennas</span> &mdash; the large rectangular MIMO arrays used exclusively for commercial consumer wireless broadband. Those are not P25 radios. Those are not emergency service equipment. That is commercial cellular infrastructure. <span class='text-danger-400 font-bold italic'>So who is this tower actually for?</span><br/><br/>And consider this: if this tower were truly for county emergency services, wouldn&rsquo;t the county pay for it? Wouldn&rsquo;t the county be notified? Wouldn&rsquo;t it go through local zoning? None of that happened. A private developer is building it on state land, bypassing the Town of Salina entirely &mdash; and the county&rsquo;s own Sheriff&rsquo;s Office has confirmed there are no known dead zones in the area.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>The Senator&rsquo;s Own Words</h3>In the same response, Senator Ryan&rsquo;s office wrote:<br/><br/><blockquote style='border-left: 3px solid #c084fc; padding-left: 12px; margin: 12px 0; font-style: italic'>&quot;As part of the approval process, the project must comply with all applicable federal, state, and <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>local laws</span> and regulations, including any required environmental reviews.&quot;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>&mdash; Senator Christopher Ryan (SD-50), written response, March 2026</span></blockquote>This is a direct contradiction of how the project actually works.<br/><br/>The entire premise of this tower being built at 474 Electronics Parkway is that PTI is using NYSTA state land to claim state immunity from local jurisdiction. Under the Town of Salina&rsquo;s local zoning laws, a commercial cell tower would require a Special Use Permit, review by the Planning Board, neighbor notification, setback requirements, and a public hearing. None of that happened &mdash; because PTI is operating on state land, where local zoning does not apply.<br/><br/>Senator Ryan is now on the record stating that this project <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>&quot;must comply with all applicable local laws.&quot;</span> We are calling on Senator Ryan to enforce his own statement: if local laws apply, PTI must submit to the Town of Salina&rsquo;s zoning and planning process before construction continues.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>The 16-Month Delay</h3>So let&rsquo;s get this straight. This project is purported to be for <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>&quot;emergency service providers.&quot;</span> The word &quot;emergency&quot; inherently implies urgency. If this tower is important enough to bypass local zoning, skip public hearings, and build on state land without notifying the community &mdash; it should be important enough to build without delay.<br/><br/>And yet: PTI received FAA clearance in November 2024 and FCC registration in February 2025. They then sat on those permits for so long that the FCC issued a formal &quot;Construction Reminder&quot; in February 2026. They recently broke ground, then halted operations.<br/><br/><span class='text-danger-400 font-bold italic'>Sixteen months.</span> If this were truly urgent infrastructure for emergency service providers, why did the developer wait over a year to start building?<br/><br/><h4 class='text-sm font-bold text-white mt-4 mb-1'>Loophole Kings Updated</h4>New entries added documenting the &quot;emergency services&quot; claim and the 16-month permit delay.",
    },
    {
      date: "March 31, 2026",
      label: "Investigation",
      title:
        "Sheriff's Office Confirms No Emergency Communications Issue — We Kept Digging",
      body: "<h3 class='text-base font-bold text-white mt-0 mb-1'>We Checked</h3>To verify PTI's claim, we contacted the Onondaga County Sheriff's Office directly and asked whether there were any known radio or communication dead zones in the Salina area. Thomas Newton, the Director of Community Relations and Public Information Officer for the Sheriff's Office, replied in writing:<br/><br/><blockquote style='border-left: 3px solid #ef4444; padding-left: 12px; margin: 12px 0; font-style: italic'>&quot;I have not been made aware of any 'dead' area in the Salina area.&quot;<br/><span style='font-style: normal; font-size: 11px; opacity: 0.7'>— Thomas Newton, Director of Community Relations &amp; PIO, Onondaga County Sheriff's Office, March 31, 2026</span></blockquote><img src='https://media.protectliverpoolny.org/evidence/sheriff-email.png' alt='Email from Thomas Newton, Onondaga County Sheriff Office PIO, stating no known dead zone in Salina' style='width:100%; border-radius:8px; border:1px solid rgba(255,255,255,0.1); margin: 12px 0' /><br/>The Sheriff's Office — the agency responsible for law enforcement communications across the entire county — has no knowledge of a coverage crisis in this area. <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>So if this is not an emergency, what is it?</span><br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>If Not an Emergency, Then Who Decided This Was Needed?</h3>PTI's language was &quot;improve coverage for emergency service providers.&quot; Not respond to a crisis — &quot;improve.&quot; That word choice matters, because it raises a set of questions that no one involved has answered:<br/><ul style='margin: 8px 0 8px 16px; list-style: disc'><li style='margin-bottom: 6px'>Who decides what needs to be &quot;improved&quot;? Which public safety agency identified a deficiency and requested enhanced coverage in this corridor?</li><li style='margin-bottom: 6px'>Were the actual officials responsible for public safety ever consulted? Was the Onondaga County Sheriff's Office contacted before this project was approved? Was Liverpool Fire? Was Moyers Corners FD? Or did NYSTA and PTI make this determination on their own?</li><li style='margin-bottom: 6px'>Why is the NYSTA making this decision at all? Since when does a highway toll authority determine what emergency infrastructure a residential neighborhood requires? This is a local matter — where is the Town of Salina? Where is the County?</li><li style='margin-bottom: 6px'>Where is the needs assessment? If this is a legitimate infrastructure project, where is the coverage gap study? Where is the engineering report?</li><li style='margin-bottom: 6px'>Why was a private, for-profit company selected? If this is public safety infrastructure, why is Blackrock-backed Phoenix Tower International building, owning, and leasing it for commercial profit? Why not the county? Why not FirstNet?</li><li style='margin-bottom: 6px'>Why was there no public process? Legitimate emergency infrastructure projects include community notification, environmental review, and interagency coordination. None of that happened here.</li><li style='margin-bottom: 6px'>Who profits? PTI leases antenna space to commercial wireless carriers. Every carrier that mounts equipment pays PTI rent. That revenue flows to PTI's investors — not to Salina, not to Onondaga County, not to emergency services.</li><li style='margin-bottom: 6px'>Why is the tower at this exact location? The Onondaga County Department of Emergency Management opened a new, multimillion-dollar Emergency Operations Center at 420 Electronics Parkway in early 2024 — directly adjacent to the tower site at 474 Electronics Parkway. Their own Citizen Preparedness page states this agency prepares for emergencies &quot;natural or <span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>man-made</span>&quot; (source: onondaga.gov/em/citizen-preparedness). <span class='text-danger-400 font-bold italic'>Excuse me?</span> Their About page lists coordination with &quot;the military&quot; and &quot;large corporations.&quot; The deeper we look, the deeper this goes. If this tower serves such a serious emergency management function, why is a private, for-profit developer building it? Why is the equipment on site commercial 5G panel antennas rather than emergency radio infrastructure? And what does this mean for the <a href='/the-facts/surveillance#flocking-serious' style='color: #c084fc; text-decoration: underline; text-underline-offset: 3px'>Flock AI surveillance cameras already deployed in this corridor</a>?</li></ul><span class='text-danger-400 font-bold' style='text-shadow: 0 0 8px rgba(239,68,68,0.4)'>&quot;Improving&quot; coverage is a commercial business decision. It does not justify bypassing zoning, skipping public hearings, and building on state land without notifying the community.</span><br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>FOIL Filed with Onondaga County 911 Center</h3>We filed a FOIL request with the Onondaga County Department of Emergency Communications for aggregate dropped call data in the Electronics Pkwy / I-90 Exit 37 corridor and any communications between 911 dispatch and PTI or NYSTA.<br/><br/><h3 class='text-base font-bold text-white mt-4 mb-1'>Direct Inquiries Sent to First Responders</h3>We contacted Thomas Newton (Onondaga County Sheriff's Office), Liverpool Fire Chief Manley, and the Moyers Corners Fire Department — each asked directly about communication gaps in the corridor. We are documenting their responses. We do not oppose emergency infrastructure. We are asking whether anyone in public safety actually requested this.",
    },
    {
      date: "March 30, 2026",
      title:
        "Round 2 of Petition Delivered — 61+ Signatures, Full Representative & Agency Distribution",
      body: "Our updated petition — now carrying 61+ local resident signatures — was formally delivered demanding an environmental review and an immediate halt to the permitting process. Recipients: NYS Assemblymembers William Magnarelli and Pamela Hunter, U.S. Senator Kirsten Gillibrand, U.S. Representative John Mannion, NYS Senator Christopher Ryan, Onondaga County Legislator Jeremiah Thompson, Town of Salina Supervisor Raul Huerta, the FAA, the FCC, the U.S. Fish and Wildlife Service (USFWS), and the NYS Department of Environmental Conservation (DEC). Every entity named on this petition is now on the record.",
    },
    {
      date: "March 30, 2026",
      title: "FOIL Stalling Tactic Exposed — NYSTA Running Out the Clock",
      body: "The New York State Thruway Authority is deliberately stalling our FOIL request. NYSTA Deputy Counsel Jennifer Andaloro took 4 days to respond — only to demand an additional 20 business days to determine if they will even share the documents. They are operating in the dark and running out the clock on our community. We have publicly logged this delay and will file an appeal the moment their extended deadline expires.",
    },
    {
      date: "March 30, 2026",
      title: "The Overreach — Legal Loopholes Weaponized Against Our Community",
      body: "NYSTA, Phoenix Tower International, and Big Telecom are weaponizing legal loopholes and hiding behind FCC federal overreach to strip our municipality of its zoning rights and environmental oversight. This is not a difference of opinion — it is a calculated effort to bypass every democratic safeguard designed to protect communities like ours.",
    },
    {
      date: "March 30, 2026",
      title: "Accountability Notice — This Ledger Is Permanent",
      body: "This site is our living ledger. We are keeping a strict record of all correspondence, all FOIL responses, and all government actions — or inaction — related to this tower. Every entity and politician contacted today will have their response (or silence) documented here in perpetuity. The public record does not forget.",
    },
    {
      date: "March 30, 2026",
      title: "NPC Takes Updated — Drive-By Commentary at 7th & Buckley",
      body: 'A new entry has been added to the NPC Takes page after a man in a red hatchback yelled at two peaceful protesters to worry about "more important shit." Our full response is published. We love trolls — they give us content.',
    },
    {
      date: "March 27, 2026",
      title:
        "Round 1 of Petition Delivered — 46 Signatures Sent to Local Representatives",
      body: "The formal demand letter and all 46 petition signatures were delivered to Town of Salina Supervisor Raul Huerta, Onondaga County Legislator Jeremiah Thompson (District 4), and NYS Assemblymember Pamela Hunter (AD-128). As more people sign, the petition will be re-delivered in rounds depending on volume. The fight is now officially on the record.",
    },
    {
      date: "March 26, 2026",
      title:
        "Petition Updated — Demand Strengthened, Representative List Adjusted",
      body: "The petition now demands the complete removal and dismantling of the tower — no compromises on height reductions or relocations. Added a preemptive legal counter citing the Matter of County of Monroe balancing test. Assemblymember William Magnarelli (Chair, NYS Assembly Transportation Committee) has been added to the addressee list. All representatives have been verified as currently serving and correctly assigned to the tower's location. If you signed before this change and no longer agree, email us and we will remove you.",
    },
    {
      date: "March 26, 2026",
      title: "Construction Activity Observed — Crews Mounting Equipment",
      body: "Crews have been observed mounting equipment at the top of the pole and working rapidly. We believe NYSTA and Phoenix Tower International are trying to move quickly before legal or legislative intervention can take effect. Document everything you see from public areas. Do not trespass.",
    },
    {
      date: "March 26, 2026",
      title: "FOIL Request Stonewalled by NYSTA",
      body: "Our FOIL request to the New York State Thruway Authority for all SEQRA documents, environmental assessments, and USFWS consultations is being delayed. We suspect NYSTA may be using NYS DEC bypass mechanisms to avoid environmental review. We are pursuing this aggressively.",
    },
    {
      date: "March 26, 2026",
      title: "Code of Conduct Published",
      body: "We published a formal Code of Conduct affirming our commitment to non-violence, democratic participation, and First Amendment advocacy. This movement wins through righteous anger channeled through legal and democratic processes — not through vandalism or threats.",
    },
    {
      date: "March 25, 2026",
      title: "NPC Takes Page Launched",
      body: "We launched the NPC Takes page — a public response to critics who comment on our site without reading it. Every quote is sourced from public social media, every response is backed by timestamped evidence.",
    },
    {
      date: "March 25, 2026",
      title: "Sitewide Fact-Check Completed",
      body: "Every claim on this site has been independently audited, verified against peer-reviewed research, and corrected where necessary. 24 claims verified. 10 corrections documented below.",
    },
    {
      date: "March 24, 2026",
      title: "Officials Reframed as Allies",
      body: "Town of Salina officials have been reframed as potential political allies with no jurisdiction over state land. A Major Update billboard was added to the homepage acknowledging the original framing error.",
    },
    {
      date: "March 24, 2026",
      title: "FAA Determination & Airport Director Response Published",
      body: 'The full FAA "No Hazard" determination (Study No. 2024-AEA-11624-OE) and Syracuse Airport Director Jason Terreri\'s email confirming the airport was not consulted have been published on the Aviation & Safety page.',
    },
  ];

/* ═══════════════════ CORRECTIONS ═══════════════════ */
const corrections = [
  {
    date: "May 8, 2026",
    title: "Town of Salina Notification Framing & New FOIL-Sourced Disclosures",
    changes: [
      {
        what: "Town of Salina notification framing corrected",
        before: "Town of Salina was bypassed and never notified.",
        after:
          "Town of Salina was certified-mail noticed (USPS 7019 1640 0000 0800 4105) to former Town Supervisor Nicholas Paro at 201 School Road, Liverpool NY 13088. Mr. Paro signed for the package. The FOIL response contains no record of any response from the Town under that prior administration.",
        pages: ["Homepage", "Loophole Kings", "Take Action", "The Facts Hub"],
      },
      {
        what: "Diesel generator disclosure added",
        before: "No mention of fuel/generator equipment.",
        after:
          "30 kW diesel generator + 145-gallon belly tank documented in PTI Construction Permit 11/6/2025 — added to Highway Safety.",
        pages: ["Highway Safety", "Health"],
      },
      {
        what: "Alternative Site Analysis status moved from 'unknown' to 'admitted absent'",
        before:
          "Whether an Alternative Site Analysis was performed was unknown pending FOIL response.",
        after:
          "NYSTA confirmed in writing on May 8, 2026 that 'No records responsive to Item 7 were located.' No Alternative Site Analysis exists.",
        pages: ["Loophole Kings", "Take Action", "Homepage"],
      },
      {
        what: "Tower revocability clarified",
        before: "Implied that construction was effectively unstoppable.",
        after:
          "PTI Occupancy Permit T3U250002, Section II.A: 'There is no term. This Occupancy Permit is revocable, unilaterally, upon demand by the Authority.' NYSTA can terminate this tower's occupation at any time, for any reason.",
        pages: ["Homepage", "Loophole Kings", "Take Action"],
      },
      {
        what:
          "Town of Salina clerk's no-records response documented as contradicted",
        before: "Town of Salina FOIL response status: 'denied — no records.'",
        after:
          "Town of Salina FOIL response (Paula Primerano, March 20, 2026, sent 17 minutes after filing) is contradicted by NYSTA's May 8 production, which contains USPS Certified Mail receipt #7019 1640 0000 0800 4105 addressed to the Town Supervisor's office. Follow-up FOIL filed citing the contradiction.",
        pages: ["Loophole Kings", "Take Action", "Changelog"],
      },
    ],
  },
  {
    date: "April 2, 2026",
    title: "Eagle Distance Corrected & FOIL Status Updated Sitewide",
    changes: [
      {
        what: "Eagle roost distance corrected",
        before: "1.7 miles from Onondaga Lake bald eagle roost",
        after: "1.25 miles from Onondaga Lake bald eagle roost",
        pages: ["Wildlife", "Homepage", "Take Action", "Aviation", "Loophole Kings", "Community", "NPC Takes"],
      },
      {
        what: "DEC FOIL response updated from pending to confirmed",
        before:
          'FOIL request "Filed & Pending" — "We are researching your request."',
        after:
          'DEC confirmed zero records: "A diligent search of the files maintained by DEC produced no responsive records." (FOIL #W162712-032526, April 1, 2026)',
        pages: ["Wildlife", "Loophole Kings"],
      },
      {
        what: "Media outreach template updated with FOIL confirmation",
        before: "No documents have been produced.",
        after: "The NYS DEC has confirmed in writing that they have zero records of any environmental review for this site.",
        pages: ["Take Action"],
      },
      {
        what: "Individual liability disclaimer added to Code of Conduct",
        before: "No individual liability section existed.",
        after: "New section clarifies supporters are responsible for their own words/actions; signing the petition does not make someone a spokesperson.",
        pages: ["Code of Conduct"],
      },
      {
        what: "Phone number added to Privacy Policy collected data",
        before: "Phone number was collected but not listed in the Privacy Policy.",
        after: "Phone number now listed as optional collected data.",
        pages: ["Privacy Policy"],
      },
      {
        what: "Limitation of Liability added to Terms of Service",
        before: "No limitation of liability clause existed.",
        after: "Site provided \"as is\" / \"as available\" — volunteers not liable for damages arising from use.",
        pages: ["Terms of Service"],
      },
      {
        what: "Individual Conduct & Statements added to Terms of Service",
        before: "No individual conduct disclaimer existed in Terms.",
        after: "Site does not endorse individual supporters' statements; signing petition does not create agency relationship.",
        pages: ["Terms of Service"],
      },
      {
        what: "Modifications to Terms clause added",
        before: "No modification clause existed.",
        after: "Continued use constitutes acceptance of revised terms; significant changes documented on Change Log.",
        pages: ["Terms of Service"],
      },
      {
        what: "Individual Liability section added to About & Disclaimer",
        before: "No individual liability section existed on the Disclaimer page.",
        after: "Mirrors Code of Conduct language; individuals responsible for their own statements.",
        pages: ["About & Disclaimer"],
      },
    ],
  },
  {
    date: "April 1, 2026",
    title: "Legal Terminology Corrections & Petition Strengthening",
    changes: [
      {
        what: "\"Attractive nuisance\" corrected to proper regulatory term",
        before:
          "\"attractive nuisance\" for raptors",
        after:
          "\"hazardous wildlife attractant\" for raptors — the exact term used by the FAA and USFWS",
        pages: ["Take Action", "Export Script"],
      },
      {
        what: "\"Mandate\" corrected to \"demand\" throughout petition",
        before:
          "\"Official Petition Demand & Mandate for Abatement\" / \"issue this formal mandate\"",
        after:
          "\"Official Petition Demand for Abatement\" / \"issue this formal demand\" — citizens demand, courts mandate",
        pages: ["Take Action", "Export Script"],
      },
      {
        what: "NYSTA FOIL obstruction clause added to petition",
        before: "No WHEREAS clause addressing NYSTA FOIL delay.",
        after:
          "New WHEREAS clause documents NYSTA's 20-business-day FOIL stall tactic (FOIL #R000082-032026) as bad-faith evasion of accountability.",
        pages: ["Take Action", "Export Script"],
      },
      {
        what: "Emergency services rebuttal clause added to petition",
        before: "No WHEREAS clause addressing the emergency services justification.",
        after:
          "New WHEREAS clause citing Sheriff's confirmation of no dead zones, commercial 5G equipment, DEC zero records, and 16-month construction delay.",
        pages: ["Take Action", "Export Script"],
      },
      {
        what: "JSX whitespace rendering fixed across petition",
        before: "\"WHEREAS,this\" / \"zero recordsof\" — missing spaces after bold tags",
        after: "All strong/bold tags now use explicit JSX whitespace expressions to prevent space collapse.",
        pages: ["Take Action"],
      },
      {
        what: "Inconsistent bolding removed from TO: line",
        before: "William Magnarelli and US Senators/Representatives arbitrarily bolded while other officials were not.",
        after: "All official names in the TO: line rendered uniformly — no selective emphasis.",
        pages: ["Take Action"],
      },
    ],
  },
  {
    date: "March 25, 2026",
    title: "Sitewide Fact-Check & Source Verification",
    changes: [
      {
        what: "Property value statistic updated",
        before:
          '"Up to 20%" property value decrease; "94% of buyers extremely hesitant"',
        after:
          '"2–9%+" per peer-reviewed research (Sander & Polacheck, 2009); appraiser estimates noted as high as 20%. Buyer hesitancy sourced to surveys rather than peer-reviewed studies.',
        pages: ["Homepage", "The Facts Hub", "Community", "Surveillance"],
      },
      {
        what: "HUD classification language softened",
        before:
          'HUD classifies cell towers as "Hazards and Nuisances" — your home is now flagged.',
        after:
          "HUD guidelines flag cell tower proximity as an environmental concern in property assessments.",
        pages: ["Homepage"],
      },
      {
        what: "73.6% statistic qualified",
        before:
          "73.6% of peer-reviewed studies on people living near towers found harmful health effects",
        after:
          "Per a 2022 systematic review (Balmori), 73.6% of peer-reviewed studies...",
        pages: ["Homepage"],
      },
      {
        what: "EPA defunding language corrected",
        before:
          "Congress defunded the EPA from researching RF radiation health effects",
        after:
          "Congress eliminated the EPA's funding for non-ionizing radiation research",
        pages: ["Health & Science"],
      },
      {
        what: "Wildlife review language corrected",
        before: "No wildlife review conducted.",
        after: "No wildlife review provided to date.",
        pages: ["Community & Land Value"],
      },
      {
        what: "Surveillance data claims sourced",
        before: "Stored indefinitely. Sold to the highest bidder.",
        after:
          "Cell tower location data has been stored and sold — exposed in the 2018 Securus/LocationSmart scandals.",
        pages: ["Homepage"],
      },
      {
        what: "Children's RF absorption clarified",
        before: "Children absorb 10× more RF radiation",
        after:
          "Children absorb 10× more cumulative RF from towers than from a phone call (Lee & Choi, 2023)",
        pages: ["Homepage", "The Facts Hub"],
      },
      {
        what: "FAA review distance corrected",
        before: "1,500 miles from Liverpool",
        after: "nearly 1,500 miles from Liverpool",
        pages: ["Loophole Kings"],
      },
      {
        what: "Venn diagram property value claim updated",
        before: "Your home value tanks up to 20% the day this thing goes up",
        after:
          "Peer-reviewed research shows 2-9%+ property value drops near cell towers",
        pages: ["Homepage", "Community"],
      },
    ],
  },
  {
    date: "March 24, 2026",
    title: "Major Update — Officials Reframing & Transparency Pivot",
    changes: [
      {
        what: "Local officials reframed as allies",
        before:
          "Town of Salina officials framed as complicit in allowing the tower.",
        after:
          "Officials reframed as having no jurisdiction over state land; positioned as political allies.",
        pages: ["Homepage"],
      },
      {
        what: "Correction notice added",
        before: "No correction notice existed.",
        after:
          "Major Update billboard added to homepage explaining the reframing and acknowledging the error.",
        pages: ["Homepage"],
      },
      {
        what: "FAA determination published in full",
        before: "Site implied FAA ignored the tower.",
        after:
          'Full FAA "No Hazard" determination (Study No. 2024-AEA-11624-OE) published with transparent analysis of what it does and doesn\'t cover.',
        pages: ["Aviation & Safety"],
      },
      {
        what: "Airport Director response published",
        before: "No official airport response on file.",
        after:
          "Jason Terreri's full email response published, confirming the airport was not consulted.",
        pages: ["Aviation & Safety"],
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Movement Updates & Change Log
        </h1>
        <p className="text-dark-400 text-sm mb-2">
          Everything that happens — documented publicly.
        </p>
        <p className="text-dark-500 text-xs mb-12">
          Movement milestones, site updates, and every factual correction — all
          in one place. We believe transparency is the minimum standard.
        </p>

        {/* ═══════════════════ MOVEMENT UPDATES ═══════════════════ */}
        <div className="mb-16">
          <div className="flex justify-center sm:justify-start mb-6">
            <span className="px-3 py-1 bg-purple-900/40 border border-purple-800/30 rounded-lg text-xs font-bold text-purple-300 uppercase tracking-wider">
              📢 Movement Updates
            </span>
          </div>

          <div className="space-y-3">
            {(() => {
              const grouped = updates.reduce<Record<string, typeof updates>>(
                (acc, u) => {
                  (acc[u.date] ??= []).push(u);
                  return acc;
                },
                {},
              );
              const dates = Object.keys(grouped);
              return dates.map((date, dateIdx) => (
                <details
                  key={date}
                  open={dateIdx === 0}
                  className="group bg-dark-900/60 border border-dark-800/50 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-5 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                      <span className="px-2 py-0.5 bg-purple-900/30 border border-purple-800/20 rounded text-[10px] font-bold text-purple-400 whitespace-nowrap">
                        {date}
                      </span>
                      <span className="text-xs text-dark-400 whitespace-nowrap">
                        {grouped[date].length} update
                        {grouped[date].length > 1 ? "s" : ""}
                      </span>
                      {grouped[date][0].label && (
                        <span className="px-2 py-0.5 bg-danger-900/40 border border-danger-700/30 rounded text-[10px] font-bold text-danger-400 uppercase tracking-wider whitespace-nowrap">
                          {grouped[date][0].label}
                        </span>
                      )}
                    </div>
                    <span className="text-dark-500 text-xs group-open:rotate-180 transition-transform shrink-0">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 sm:px-5 pb-5 space-y-4 border-t border-dark-800/30 pt-4">
                    {grouped[date].map((update, i) => (
                      <div key={i}>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {update.title}
                        </h3>
                        <div
                          className="text-sm text-dark-300 leading-relaxed"
                          suppressHydrationWarning
                          dangerouslySetInnerHTML={{ __html: update.body }}
                        />
                      </div>
                    ))}
                  </div>
                </details>
              ));
            })()}
          </div>
        </div>

        {/* ═══════════════════ DIVIDER ═══════════════════ */}
        <div className="border-t border-dark-800/50 mb-16" />

        {/* ═══════════════════ CORRECTIONS ═══════════════════ */}
        <div>
          <div className="flex justify-center sm:justify-start mb-6">
            <span className="px-3 py-1 bg-sky-900/40 border border-sky-800/30 rounded-lg text-xs font-bold text-sky-300 uppercase tracking-wider">
              ✅ Claim Verification & Corrections
            </span>
          </div>
          <p className="text-dark-500 text-xs mb-8">
            Every factual correction, source verification, and content update —
            with before/after diffs and affected pages.
          </p>

          <div className="space-y-3">
            {(() => {
              const grouped = corrections.reduce<Record<string, typeof corrections>>(
                (acc, c) => {
                  (acc[c.date] ??= []).push(c);
                  return acc;
                },
                {},
              );
              const dates = Object.keys(grouped);
              return dates.map((date, dateIdx) => (
                <details
                  key={date}
                  open={dateIdx === 0}
                  className="group bg-dark-900/60 border border-dark-800/50 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-5 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
                      <span className="px-2 py-0.5 bg-sky-900/30 border border-sky-800/20 rounded text-[10px] font-bold text-sky-400 whitespace-nowrap">
                        {date}
                      </span>
                      <span className="text-xs text-dark-400 whitespace-nowrap">
                        {grouped[date].reduce((n, e) => n + e.changes.length, 0)} correction{grouped[date].reduce((n, e) => n + e.changes.length, 0) > 1 ? "s" : ""}
                      </span>
                    </div>
                    <span className="text-dark-500 text-xs group-open:rotate-180 transition-transform shrink-0">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 sm:px-5 pb-5 space-y-6 border-t border-dark-800/30 pt-4">
                    {grouped[date].map((entry, ei) => (
                      <div key={ei}>
                        <h2 className="text-base sm:text-lg font-bold text-white mb-3">
                          {entry.title}
                        </h2>
                        <div className="space-y-3">
                          {entry.changes.map((change, i) => (
                            <div
                              key={i}
                              className="bg-dark-800/30 border border-dark-800/40 rounded-xl p-3 sm:p-4"
                            >
                              <p className="text-sm font-bold text-white mb-2">
                                {change.what}
                              </p>
                              <div className="grid sm:grid-cols-2 gap-3">
                                <div className="bg-danger-950/20 border border-danger-800/20 rounded-lg px-3 py-2">
                                  <p className="text-[10px] font-bold text-danger-400 uppercase tracking-widest mb-1">
                                    Before
                                  </p>
                                  <p className="text-xs text-dark-400 leading-relaxed line-through decoration-danger-500/30">
                                    {change.before}
                                  </p>
                                </div>
                                <div className="bg-emerald-950/20 border border-emerald-800/20 rounded-lg px-3 py-2">
                                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">
                                    After
                                  </p>
                                  <p className="text-xs text-dark-200 leading-relaxed">
                                    {change.after}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {change.pages.map((page) => (
                                  <span
                                    key={page}
                                    className="px-2 py-0.5 bg-dark-800/60 rounded text-[10px] text-dark-400 font-medium"
                                  >
                                    {page}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              ));
            })()}
          </div>
        </div>

        <div className="mt-12 bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 text-center">
          <p className="text-dark-300 text-sm leading-relaxed">
            Found something we got wrong?{" "}
            <a
              href="mailto:takeaction@protectliverpoolny.org"
              className="text-danger-400 hover:text-danger-300 underline underline-offset-2"
            >
              Let us know
            </a>
            . We will correct it publicly and document the change here.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-dark-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
