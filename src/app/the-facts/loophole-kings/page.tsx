"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  ShieldOff,
  Coins,
  BellOff,
  FileX,
  Scale,
  Clock,
  Landmark,
  Plane,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const loopholes = [
  {
    icon: Landmark,
    move: "Build a 184-Foot Commercial Tower in R-O (Residence-Office) Zoning",
    what: "AT&T's own construction drawings (Rev 2, November 7, 2025), Sheet T01, list the surrounding parcel's zoning district as R-O — Residence-Office. R-O is a residential class designed for low-impact homes and small offices. A 184-foot commercial telecommunications structure does not belong on R-O zoning under any local approval process. Phoenix Tower and NYSTA used the state-land preemption — a tower built on NYSTA right-of-way is exempt from local zoning — to bypass the R-O classification entirely. The classification is right there on AT&T's own drawing, in the corner of Sheet T01, where it has been hiding since March 2025.",
    youTry:
      "Buy a small home in an R-O district and try to install a 12-story office tower in the side yard. The Building Department will tell you which zoning class you're actually in and what it permits. Spoiler: not that.",
    color: "text-rose-400",
    bg: "bg-rose-950/30 border-rose-800/30",
    link: "/foil/att-construction-drawings-rev2-20251107.pdf",
  },
  {
    icon: FileX,
    move: "Approve a 184-Foot Tower Without an Alternative Site Analysis",
    what: "Standard wireless siting practice requires the applicant to show why a specific site was chosen over alternatives — a Coverage Objective + Alternatives Analysis evaluating other candidate locations and explaining why they were rejected. Phoenix Tower never produced one. NYSTA never required one. We asked for it under FOIL Item 7. NYSTA's response, in writing on May 8, 2026: \"No records responsive to Item 7 were located.\" There is no engineering or planning analysis explaining why a 184-foot commercial tower had to go on top of a residential neighborhood, 1.25 miles from a bald eagle roost, ~100 feet from an active highway off-ramp.",
    youTry:
      "Tell the zoning board you don't need to explain why your shed went in the front yard instead of the back. See how that conversation lands.",
    color: "text-danger-400",
    bg: "bg-danger-950/30 border-danger-800/40",
    link: "/the-facts/foil-evidence",
  },
  {
    icon: Scale,
    move: "Approve Yourself",
    what: "Under the State Environmental Quality Review Act (SEQRA), every Type I action requires a Lead Agency to evaluate environmental impact. NYSTA's solution: designate itself the Lead Agency on its own land lease, classify its own approval as Type I, and then issue itself a Negative Declaration. The bald eagle dismissal cited the \"USFWS Northeast Determination Key\" — a self-serve web tool, not a USFWS letter or formal Section 7 consultation. Self-review on public land. Source: USNY2029_NYSTA_SEQRA_R3_Final.pdf in the FOIL response.",
    youTry:
      "Sign your own home inspection report and send it to the buyer. Let us know how the closing goes.",
    color: "text-purple-400",
    bg: "bg-purple-950/30 border-purple-800/30",
    link: "/foil/usny2029-nysta-seqra-r3-final.pdf",
  },
  {
    icon: Coins,
    move: "Hide the Rent Behind a Privacy Law That Doesn't Apply to Corporations",
    what: "The Annual Fee paid by Phoenix Tower International — the rent for occupying public state land — is fully redacted under New York Public Officers Law §87(2)(b), the personal-privacy exemption. PTI is a Delaware/Florida limited liability company. Under settled New York case law (Matter of Federation of N.Y. State Rifle & Pistol Clubs v. NYPD, 73 N.Y.2d 92), §87(2)(b) protects natural persons, not corporations. The Committee on Open Government has issued multiple advisory opinions confirming corporate financial terms in contracts with state agencies are not personal-privacy material. NYSTA cited a statute that doesn't authorize the redaction it made.",
    youTry:
      "Tell the IRS your LLC has \"personal privacy\" rights and refuse to disclose its income. We will visit you in court.",
    color: "text-emerald-400",
    bg: "bg-emerald-950/30 border-emerald-800/30",
    link: "/foil/t3u250002-pti-salina-cell-tower-redacted.pdf",
  },
  {
    icon: Clock,
    move: "Have the Documents Ready by April 28 — and Sit on Them Until May 8",
    what: "PDF metadata of the redacted PTI Occupancy Permit (triple-verified via exiftool, pdfinfo, and the embedded XMP byte stream) carries Adobe Acrobat redaction-completion timestamps of April 28, 2026 — 10:46:33 EDT on the occupancy-permit copy, 10:50:43 EDT on the cell-tower copy, four minutes apart in a single sitting. The XMP toolkit signature confirms the redaction tool was Adobe Acrobat. That is six days after the agency's own extended deadline of April 22, 2026 (the deadline they 'blew' that triggered our constructive-denial appeal). NYSTA then withheld the finalized records for ten more days, releasing them on May 8 — two business days after the appeal clock expired. This is not a search-and-redaction timeline. It is a finalize-then-withhold timeline. Under New York Public Officers Law §89(4)(c), a court awarding attorney's fees in any subsequent Article 78 must find the agency had no reasonable basis for the period of denial. Adobe-Acrobat-saved-on-April-28 / released-on-May-8 is exactly the kind of evidence that standard contemplates.",
    youTry:
      "File your taxes on April 28 and tell the IRS you'll be releasing them on June 1 because you weren't ready. The IRS will ask which part of \"weren't ready\" applies to a return you've already finalized.",
    color: "text-yellow-400",
    bg: "bg-yellow-950/30 border-yellow-800/30",
    link: "/foil/t3u250002-pti-salina-cell-tower-redacted.pdf",
  },
  {
    icon: Clock,
    move: "Say \"No Records\" in 17 Minutes — While the Records Are Sitting in Your Boss's Inbox",
    what: "On March 20, 2026 at 2:29 PM, we filed a parallel FOIL with the Town of Salina. 17 minutes later — at 2:46 PM — Town Clerk and FOIL Records Officer Paula Primerano replied: \"The Town of Salina is not in possession of any of the requested documents.\" Then NYSTA produced USPS Certified Mail return receipt #7019 1640 0000 0800 4105, addressed to former Town Supervisor Nicholas Paro at the same Town Hall address, signed for in approximately May 2025. The certified package contained the SEQRA Determination Letter and Full Environmental Assessment Form Part 3. The Town received the records. The Town Clerk said the Town didn't have them. 17 minutes is not a search — it is a categorical assumption. We've filed a follow-up FOIL today citing the certified-mail tracking number and demanding a sworn §89(3)(a) diligent-search certification. Framing: this is a process failure inherited by a new Supervisor — Raul Huerta took office January 2026 and is being given every opportunity to correct it.",
    youTry:
      "Tell the IRS you don't have your W-2 — 17 minutes after they ask, without checking the mailbox the W-2 was certified-mailed to. Send your accountant flowers.",
    color: "text-cyan-400",
    bg: "bg-cyan-950/30 border-cyan-800/30",
    link: "/foil/seqra-determination-letter-cert-mail-receipt.pdf",
  },
  {
    icon: ShieldOff,
    move: "Build on State Land",
    what: "Lease a patch of NYSTA dirt and suddenly you're immune to local zoning. No variance. No hearing. No Town Board. Nothing. You just... build.",
    youTry: "Try building a doghouse without a permit. We dare you.",
    color: "text-amber-400",
    bg: "bg-amber-950/20 border-amber-800/30",
  },
  {
    icon: BellOff,
    move: "Tell Nobody",
    what: 'No mailed notice. No public announcement. No "Hey, we\'re about to drop a 184-foot industrial structure in your neighborhood." Residents found out when they heard the construction equipment.',
    youTry:
      "You need neighbor approval to paint your fence a new color in some HOAs.",
    color: "text-rose-400",
    bg: "bg-rose-950/20 border-rose-800/30",
  },
  {
    icon: Coins,
    move: "Pay Zero Local Taxes",
    what: "Because the tower sits on state land, the Town of Salina and Onondaga County collect exactly $0.00 in tax revenue from this massive commercial operation. You're hosting their infrastructure for free.",
    youTry: "Miss one property tax payment and see what happens.",
    color: "text-emerald-400",
    bg: "bg-emerald-950/20 border-emerald-800/30",
  },
  {
    icon: Scale,
    move: "Invoke the Monroe Balancing Test",
    what: 'A 1988 legal test that lets state entities argue "public interest" outweighs your community\'s rights. NYSTA says leasing land to a private telecom company counts as "governmental function." With a straight face.',
    youTry:
      "Tell the IRS your side hustle is a governmental function. Let us know how it goes.",
    color: "text-sky-400",
    bg: "bg-sky-950/20 border-sky-800/30",
  },
  {
    icon: FileX,
    move: "Keep the Paperwork... Somewhere",
    what: "We filed FOIL requests for all environmental reviews, SEQRA documents, and USFWS consultations. The NYS DEC responded in 7 days: zero records. No EAFs, no SEQRA review, no wildlife consultation. NYSTA is still stalling with a 20-business-day extension.",
    youTry:
      "Forget to file one form for your deck permit. Watch how fast the town remembers where THEIR paperwork is.",
    color: "text-violet-400",
    bg: "bg-violet-950/20 border-violet-800/30",
  },
  {
    icon: Clock,
    move: "Go Exactly 16 Feet Under the FAA Lighting Threshold",
    what: "FAA requires lights on structures 200+ feet. This tower is 184 feet. Sixteen feet short. Pure coincidence, surely. Definitely not engineered to be as tall as possible while avoiding the one rule that would've made pilots able to see it.",
    youTry:
      "Try building your deck at exactly 199 square feet to dodge the 200 sq ft permit requirement. The town inspector will be at your door by Tuesday.",
    color: "text-orange-400",
    bg: "bg-orange-950/20 border-orange-800/30",
  },
  {
    icon: Landmark,
    move: "Hide Behind the Telecom Act of 1996",
    what: 'Federal law literally bans communities from denying cell towers based on health concerns — as long as they comply with RF limits that haven\'t been updated since before the first iPhone. A federal court already called those limits "arbitrary and capricious." They still apply.',
    youTry:
      "Try passing your car inspection using safety standards from 1996 — the brick phone era. Before Wi-Fi existed. Before Google existed. That's the science these towers are held to.",
    color: "text-teal-400",
    bg: "bg-teal-950/20 border-teal-800/30",
  },
  {
    icon: Plane,
    move: "Get the FAA to Sign Off Without Looking",
    what: 'Phoenix Tower filed a form. The FAA ran coordinates through software from Fort Worth, Texas — nearly 1,500 miles from Liverpool. "No Hazard." No site visit. No wildlife study has been provided. No airport consultation. The Syracuse Airport Director confirmed they were never asked. Done.',
    youTry:
      "Try getting your building permit approved by someone 1,500 miles away who's never seen your property. Let us know how that goes.",
    color: "text-sky-400",
    bg: "bg-sky-950/20 border-sky-800/30",
    link: "/the-facts/aviation#faa-determination",
  },
  {
    icon: ShieldOff,
    move: 'Call It "Emergency Infrastructure"',
    what: "When a constituent asked Senator Ryan's office about this tower, the response stated that \"the applicant, Phoenix Tower International (PTI), has indicated that the tower is intended to improve coverage for emergency service providers in the area.\" Not confirmed — \"indicated.\" A Blackrock-backed commercial tower company told the government why they're building it, and the government repeated it back to us as if it were fact. So we asked the Onondaga County Sheriff's Office directly if they had any known dead zones in Salina. Thomas Newton, the Director of Community Relations and PIO, replied in writing: \"I have not been made aware of any 'dead' area in the Salina area.\" The Sheriff's Office doesn't even know this \"emergency\" exists. If there isn't a gap — this is a commercial capacity upgrade wearing a public safety disguise to bypass your zoning rights.",
    youTry:
      'Tell the town your backyard shed is "critical emergency infrastructure" and watch how fast they ask for proof.',
    color: "text-red-400",
    bg: "bg-red-950/20 border-red-800/30",
  },
  {
    icon: Clock,
    move: "Permit-Bank for 16 Months",
    what: "PTI got their FAA clearance in November 2024 and their FCC registration in February 2025. Then they sat on those permits for over a year — so long that the FCC's automated system had to issue a formal \"Construction Reminder\" in February 2026 before they recently broke ground. You don't sit on a critical, life-saving public safety project for 16 months. That's called permit-banking: securing approvals early, then building on your own commercial timeline when the market is right.",
    youTry:
      "Let your building permit expire because you couldn't be bothered to start construction. Then tell the town it was an emergency the whole time.",
    color: "text-yellow-400",
    bg: "bg-yellow-950/20 border-yellow-800/30",
  },
  {
    icon: Crown,
    move: "Move the Goalposts",
    what: "First it was for \"emergency services.\" Then the Sheriff's Office confirmed there's no known dead zone. So now the claim will shift to \"improving\" coverage. But \"improving\" is not \"emergency.\" If this is an improvement project, who requested it? Which agency filed a formal request? Why is the NYSTA — a highway toll authority — deciding what emergency infrastructure a residential neighborhood needs? Why wasn't the Town of Salina involved? Where is the coverage gap study? Where is the needs assessment? And why is a private, for-profit company backed by Blackrock building, owning, and profiting from what they call public safety infrastructure instead of the county or FirstNet?",
    youTry:
      "Try telling the zoning board your pool is a \"public reservoir\" to skip the permit process. Then when they say no, tell them it \"improves\" the water supply.",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-950/20 border-fuchsia-800/30",
  },
];

export default function LoopholeKingsPage() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-950 to-dark-950" />
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/40 border border-amber-700/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5" />
                  Extra Info
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
              >
                Laws for Thee, <br className="hidden sm:block" />
                <span className="text-amber-400">Not for Me.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-dark-400 max-w-lg leading-relaxed"
              >
                A totally normal, not-at-all-suspicious collection of legal
                maneuvers that somehow let two entities build whatever they
                want, wherever they want, with zero accountability. How
                convenient.
              </motion.p>
            </div>

            {/* The image */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden border-2 border-amber-700/40 shadow-2xl shadow-amber-900/20 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.protectliverpoolny.org/evidence/loophole-kings.png"
                  alt="The Loophole Kings — NYSTA and PTI illustrated as medieval kings wielding cell towers and money gears"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-dark-500 italic mt-2 text-center">
                Artist&apos;s depiction. Any resemblance to real entities gaming
                the system is entirely intentional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE PLAYBOOK ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              The Official Playbook
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              How to Build a 184-Foot Tower{" "}
              <span className="text-amber-400">Without Asking Anyone</span>
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Step by step, loophole by loophole. This is the procedural
              masterclass that NYSTA and PTI are running on your community.
            </p>
          </motion.div>

          <div className="space-y-4">
            {loopholes.map((lp, i) => (
              <motion.div
                key={lp.move}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className={`rounded-2xl p-5 md:p-6 border ${lp.bg}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl bg-dark-800/60 border border-dark-700/30 flex items-center justify-center`}
                  >
                    <lp.icon className={`w-5 h-5 ${lp.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black bg-dark-800/60 px-2 py-0.5 rounded text-dark-400 uppercase tracking-widest">
                        Move #{i + 1}
                      </span>
                    </div>
                    <h3
                      className={`text-lg md:text-xl font-black mb-2 ${lp.color}`}
                    >
                      {lp.move}
                    </h3>
                    <p className="text-dark-200 text-base leading-relaxed mb-3">
                      {lp.what}
                    </p>
                    <div className="bg-dark-900/30 rounded-lg px-4 py-2.5 border border-dark-700/20">
                      <p className="text-sm text-dark-400">
                        <span className="text-danger-400 font-bold">
                          If you tried this:
                        </span>{" "}
                        {lp.youTry}
                      </p>
                    </div>
                    {(lp as { link?: string }).link && (
                      <Link
                        href={(lp as { link: string }).link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold mt-3 text-sky-400 hover:text-sky-300 hover:underline transition-colors"
                      >
                        See the full breakdown →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom kicker */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={loopholes.length + 1}
            className="mt-12 text-center"
          >
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-8">
              <p className="text-2xl md:text-3xl font-black text-white mb-3">
                Still think this is{" "}
                <span className="text-amber-400">normal?</span>
              </p>
              <p className="text-dark-400 text-lg mb-6 max-w-xl mx-auto">
                Every single one of these loopholes is currently
                &quot;working.&quot; The only thing that breaks the system is
                when enough people know about it.
              </p>
              <Link
                href="/take-action"
                className="inline-flex items-center gap-2 px-8 py-4 bg-danger-600 hover:bg-danger-500 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40 hover:shadow-danger-800/60 hover:scale-[1.03]"
              >
                Sign the Petition
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
            The Stuff They Really Don&apos;t Want You to See
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/the-facts/community"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-amber-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                ← Community & Legal
              </p>
              <p className="text-sm text-dark-400">
                The Monroe Test deep dive, property values, and the state land
                exemption.
              </p>
            </Link>
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Aviation & Safety
              </p>
              <p className="text-sm text-dark-400">
                0.25 miles from the runway. No lights. Do the math.
              </p>
            </Link>
            <Link
              href="/the-facts/wildlife"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-lime-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-lime-400 transition-colors mb-1">
                Wildlife & Environment →
              </p>
              <p className="text-sm text-dark-400">
                100+ eagles. 1.25 miles away. No review.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-dark-950 via-dark-950/95 to-transparent">
        <Link
          href="/take-action"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-danger-600 hover:bg-danger-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-danger-900/60"
        >
          <Crown className="w-4 h-4" />
          DETHRONE THE LOOPHOLE KINGS
        </Link>
      </div>
    </>
  );
}
