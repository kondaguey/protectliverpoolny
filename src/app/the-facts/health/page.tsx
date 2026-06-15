"use client";

import Link from "next/link";
import WeNotAlone from "@/components/WeNotAlone";
import QuickLinks from "@/components/QuickLinks";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Quote,
  ExternalLink,
  Microscope,
  Gavel,
  BarChart3,
  FileText,
  ShieldAlert,
  MapPin,
  GraduationCap,
  ArrowRight,
  Radio,
  Landmark,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HealthSciencePage() {
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
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-900/40 border border-sky-700/40 rounded-full text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Microscope className="w-3.5 h-3.5" />
                  Peer-Reviewed Research
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-black leading-[0.95] tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
              >
                They Know It's{" "}
                <span className="text-danger-500">Harmful.</span>
                <br />
                They're Building It{" "}
                <span className="text-danger-500">Anyway.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-dark-400 max-w-lg leading-relaxed"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
              >
                Peer-reviewed studies. Federal court rulings. SEC filings from the carriers themselves.
                The evidence is overwhelming — and they're counting on you not reading it.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.protectliverpoolny.org/evidence/health-effects.png"
                  alt="Health research evidence"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={[
          { label: "Why It Matters to You", id: "why-it-matters" },
          { label: "What the Research Says", id: "the-science" },
          { label: "Missing RF Studies (May 8, 2026 FOIL)", id: "missing-rf-studies" },
          { label: "AT&T Equipment Manifest & RF Spectrum", id: "att-manifest" },
          { label: "The Federal Trap", id: "federal-trap" },
          { label: "The Real Question", id: "the-real-question" },
        ]}
      />

      {/* ═══════════════════ WHY IT MATTERS TO YOU ═══════════════════ */}
      <section id="why-it-matters" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
              Think This Doesn't{" "}
              <span className="text-danger-500">Affect You?</span>
            </h2>
            <p className="text-dark-400 text-center max-w-2xl mx-auto mb-10">
              You don't have to live within a mile of this tower for it to
              matter. Here's why every Salina and Liverpool resident should
              care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: GraduationCap,
                title: "Your Kids Go to School Here",
                text: "Long Branch Elementary, Lakeshore Road Elementary, Liverpool Middle — they're all nearby. Even if your house isn't in the shadow of the tower, your children may be spending their days in it.",
              },
              {
                icon: Microscope,
                title: "Children Absorb 10× More RF",
                text: "Peer-reviewed research shows tower signals produce 10× more cumulative daily RF energy absorption in a child's brain than a phone call. Children have thinner skulls and developing nervous systems.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0.5}
                className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
              >
                <item.icon className="w-6 h-6 text-danger-400 mb-2" />
                <p className="text-white font-bold mb-2">{item.title}</p>
                <p className="text-sm text-dark-300 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE SCIENCE ═══════════════════ */}
      <section id="the-science" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-900/40 border border-sky-800/30 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-sky-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                What the Research Says
              </h2>
            </div>
            <p className="text-dark-400 mb-8 max-w-2xl">
              The wireless industry says cell towers are safe. The independent
              science says otherwise. Here are the studies they don't want
              you to read.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: BarChart3,
                title: "Ramazzini Institute Confirmation",
                text: "Italy's Ramazzini Institute independently replicated the NTP findings, discovering increased tumor rates at RF exposure levels equivalent to those from cell towers — not just phones.",
                link: "https://pubmed.ncbi.nlm.nih.gov/29530389/",
                linkLabel: "View the Research",
                accent: "text-emerald-400",
                bg: "bg-emerald-950/30",
                border: "border-emerald-800/30",
              },
              {
                icon: Gavel,
                title: "EHT v. FCC — Court Orders Review",
                text: "In 2021, a federal court ruled that the FCC's decision to maintain 1996-era radiation limits was \"arbitrary and capricious,\" ordering the agency to address evidence of harm to children and the environment.",
                link: "https://ehtrust.org/in-historic-decision-federal-court-finds-fcc-failed-to-explain-why-it-ignored-scientific-evidence-showing-harm-from-wireless-radiation/",
                linkLabel: "Read the Ruling",
                accent: "text-amber-400",
                bg: "bg-amber-950/30",
                border: "border-amber-800/30",
              },
              {
                icon: FileText,
                title: "Telecom Companies Warn Their Own Investors",
                text: "AT&T, Verizon, and T-Mobile disclose in SEC 10-K filings that they face potential litigation risk from the health effects of wireless radiation. They warn investors — but not residents.",
                link: "https://ehtrust.org/corporate-company-investor-warnings-annual-reports-10k-filings-cell-phone-radiation-risks/",
                linkLabel: "See the Filings",
                accent: "text-danger-400",
                bg: "bg-danger-950/30",
                border: "border-danger-800/30",
              },
              {
                icon: ShieldAlert,
                title: "Chromosomal Damage Near Towers",
                text: "A 2024 peer-reviewed study found significantly higher chromosomal aberrations in the blood of people living near base station antennas, indicating potential DNA damage from chronic exposure.",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7405337/",
                linkLabel: "View the Study",
                accent: "text-purple-400",
                bg: "bg-purple-950/30",
                border: "border-purple-800/30",
              },
              {
                icon: AlertTriangle,
                title: "NIH: \"The Assumption of Safety\" Is the Justification",
                text: "A 2023 peer-reviewed study published in Frontiers in Public Health and indexed on NIH/PubMed found that over 90% of existing studies show biological effects from RF — yet \"no evidence of harm has been misconstrued as evidence of no harm\" to justify the 5G rollout.",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9940636/",
                linkLabel: "Read on NIH",
                accent: "text-rose-400",
                bg: "bg-rose-950/30",
                border: "border-rose-800/30",
              },
              {
                icon: BarChart3,
                title: "73.6% of Cell Tower Studies Found Harmful Effects",
                text: "A 2022 systematic review in Environmental Research by Balmori analyzed all available studies on people living near cell towers and found that nearly three out of four reported harmful health effects — including cancer, neurological symptoms, and reproductive harm.",
                link: "https://www.sciencedirect.com/science/article/abs/pii/S0013935122011781",
                linkLabel: "View on PubMed",
                accent: "text-orange-400",
                bg: "bg-orange-950/30",
                border: "border-orange-800/30",
              },
              {
                icon: Microscope,
                title: "Cell Tower RF Exposure to Children's Brains Exceeds Cell Phone Use by 10×",
                text: "A 2023 study by Lee & Choi in Environmental Research found that continuous 24-hour downlink signals from cell towers produced more than ten times higher cumulative daily RF energy absorption in a child's brain compared to a 10-minute phone call.",
                link: "https://ehsciences.org/addressing-cell-towers-at-schools-science-based-policy-health-risks/",
                linkLabel: "View on PubMed",
                accent: "text-cyan-400",
                bg: "bg-cyan-950/30",
                border: "border-cyan-800/30",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className={`${card.bg} ${card.border} border rounded-2xl p-5 md:p-6 hover:scale-[1.02] transition-transform duration-300`}
              >
                <card.icon className={`w-7 h-7 ${card.accent} mb-3`} />
                <h3 className="font-bold text-white mb-2 text-sm">
                  {card.title}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed mb-3">
                  {card.text}
                </p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${card.accent} hover:underline`}
                >
                  {card.linkLabel}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* EHT callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-8 bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 text-center"
          >
            <p className="text-dark-200 leading-relaxed mb-4">
              All research cited above is compiled by the{" "}
              <strong className="text-white">
                Environmental Health Trust
              </strong>{" "}
              and{" "}
              <strong className="text-white">
                Environmental Health Sciences
              </strong>
              , nonprofit research organizations whose work has been presented at
              the{" "}
              <strong className="text-white">
                American Public Health Association
              </strong>{" "}
              and cited in federal court rulings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/?term=cell+tower+radiofrequency+health+effects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-700/40 text-sky-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                Browse Research on PubMed
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Recommended Safe Distances */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                How Close Is{" "}
                <span className="text-danger-500">Too Close?</span>
              </h3>
              <p className="text-dark-400 max-w-2xl mx-auto">
                Multiple peer-reviewed studies and expert bodies recommend
                minimum setback distances for cell towers near homes and
                schools. Here's what the science says.
              </p>
            </div>

            {/* Key stat callout */}
            <div className="bg-danger-950/40 border-2 border-danger-700/40 rounded-2xl p-6 md:p-8 text-center mb-6">
              <p className="text-5xl md:text-6xl font-black text-danger-400 mb-2">
                3,000 ft
              </p>
              <p className="text-lg font-bold text-white mb-2">
                Bare Minimum Setback
              </p>
              <p className="text-sm text-dark-300 max-w-xl mx-auto">
                Multiple peer-reviewed studies (Levitt & Lai 2010, Dode et al.
                2011, Pearce 2024) and the New Hampshire State 5G Commission
                recommend cell towers be a minimum of 3,000 feet
                from residences, schools, and hospitals — and many of these towers are designed to be equipped for 6G.
              </p>
            </div>

            {/* Children's vulnerability */}
            <div className="bg-sky-950/30 border border-sky-800/30 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-sky-300 mb-3">
                Why Children Are More Vulnerable
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    stat: "Thinner Skulls",
                    detail:
                      "Children have thinner skulls and more conductive tissues, allowing RF radiation to penetrate deeper into critical brain regions.",
                  },
                  {
                    stat: "10× More Exposure",
                    detail:
                      "Continuous cell tower signals produce over 10× more cumulative daily RF energy absorption in a child's brain than a 10-minute phone call.",
                  },
                  {
                    stat: "Group 2B Carcinogen",
                    detail:
                      "The WHO's International Agency for Research on Cancer classifies RF radiation as a Group 2B possible carcinogen. Children face a lifetime of exposure.",
                  },
                ].map((item) => (
                  <div key={item.stat} className="bg-dark-900/60 rounded-xl p-4">
                    <p className="text-lg font-black text-sky-400 mb-1">
                      {item.stat}
                    </p>
                    <p className="text-xs text-dark-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* US communities with setbacks */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                  U.S. Communities with Setback Policies
                </p>
                <div className="space-y-2">
                  {[
                    { place: "Shelburne, MA", rule: "3,000 ft from schools, 1,500 ft from homes" },
                    { place: "Copake, NY", rule: "1,500 ft from residences and churches" },
                    { place: "Williamson County, TN", rule: "1,500 ft from schools" },
                    { place: "Bar Harbor, ME", rule: "1,500 ft from schools" },
                    { place: "Calabasas, CA", rule: "1,000 ft from homes and schools" },
                    { place: "Bedford, NH", rule: "750 ft from residential" },
                    { place: "Scarsdale, NY", rule: "500 ft from homes" },
                    { place: "Mason, OH", rule: "No small cells in residential areas" },
                  ].map((item) => (
                    <div
                      key={item.place}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">
                        <MapPin className="w-3 h-3" />
                      </span>
                      <p className="text-dark-200">
                        <strong className="text-white">{item.place}</strong>{" "}
                        — {item.rule}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-dark-500 mt-3 italic">
                  Copake, NY already has a 1,500-foot setback — a New York State
                  precedent.
                </p>
              </div>

              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
                  International Bans Near Schools
                </p>
                <div className="space-y-2">
                  {[
                    { country: "Russia", rule: "Cell towers banned near schools; existing sites being relocated" },
                    { country: "Greece", rule: "Banned on school grounds; stricter limits within 300m" },
                    { country: "France", rule: "Radiation minimized within 100m of schools and daycares" },
                    { country: "Bangladesh", rule: "Banned on schools, colleges, playgrounds, and residential areas" },
                    { country: "Israel", rule: "100m minimum setback from schools and homes" },
                    { country: "Chile", rule: "Banned in \"sensitive areas\" — kindergartens, hospitals, nursing homes" },
                    { country: "Queensland, AU", rule: "Banned on school property; 200m setback" },
                    { country: "India", rule: "Towers removed from near schools, orphanages, and hospitals" },
                  ].map((item) => (
                    <div
                      key={item.country}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">
                        <MapPin className="w-3 h-3" />
                      </span>
                      <p className="text-dark-200">
                        <strong className="text-white">{item.country}</strong>{" "}
                        — {item.rule}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-dark-500 mt-3 italic">
                  The U.S. has no federal setback requirement for cell towers
                  near schools.
                </p>
              </div>

              {/* Worldwide radiation limits comparison */}
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                  Worldwide RF Radiation Limits — Country Comparison
                </p>
                <p className="text-dark-300 text-sm leading-relaxed mb-4">
                  Most countries set wireless radiation limits{" "}
                  <strong className="text-white">100× to 1,000× stricter</strong>{" "}than
                  the United States. The FCC's limits haven't been updated since 1996.
                </p>


                <a
                  href="https://ehsciences.org/wp-content/uploads/2025/08/Cell-Tower-Wireless-Radiation-Worldwide-Limits-EHSsciences.org_.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
                >
                  Full Report: Worldwide Wireless Radiation Limits (PDF)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* US school districts that ban */}
            <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 text-center">
              <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
                U.S. School Districts That Have Banned Cell Towers on School Property
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Los Angeles, CA",
                  "Palo Alto, CA",
                  "Temecula Valley, CA",
                  "West Linn-Wilsonville, OR",
                  "Portland, OR",
                  "Loudoun County, VA",
                  "Bar Harbor, ME",
                ].map((district) => (
                  <span
                    key={district}
                    className="px-3 py-1.5 bg-dark-900/60 border border-danger-800/30 rounded-lg text-sm text-dark-200"
                  >
                    {district}
                  </span>
                ))}
              </div>
              <p className="text-sm text-danger-200 mt-4 font-medium">
                If these communities can protect their children, so can Salina.
              </p>
            </div>
          </motion.div>

          {/* Language manipulation section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                The Language Tells You{" "}
                <span className="text-danger-500">Everything</span>
              </h3>
              <p className="text-dark-400 max-w-2xl mx-auto">
                When you search the effects of 5G and RF radiation, pay
                attention to how they phrase things. The language itself is the
                tell.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* What THEY say */}
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6">
                <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4">
                  What Industry & Regulators Say
                </p>
                <div className="space-y-3">
                  {[
                    "\"Considered\" safe",
                    "\"No conclusive evidence\" of harm",
                    "Effects \"may\" exist",
                    "\"Not proven\" to cause cancer",
                    "\"Within acceptable\" limits",
                    "\"Further research is needed\"",
                  ].map((phrase) => (
                    <div
                      key={phrase}
                      className="flex items-start gap-3 px-4 py-3 bg-dark-800/40 rounded-xl"
                    >
                      <span className="text-dark-500 font-mono text-lg leading-none mt-0.5">
                        ?
                      </span>
                      <p className="text-dark-400 text-sm italic">{phrase}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-dark-500 mt-4 leading-relaxed">
                  Hedging. Deflecting. Leaving the door open. This is the
                  language of liability protection, not science.
                </p>
              </div>

              {/* What the RESEARCH says */}
              <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6">
                <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4">
                  What the Research Actually Says
                </p>
                <div className="space-y-3">
                  {[
                    "\"Clear evidence\" of cancer — NTP Study",
                    "RF radiation DOES cause tumor growth — Ramazzini Institute",
                    "The FCC's limits ARE arbitrary — Federal Court",
                    "Telecom companies ARE warning investors of risk",
                    "DNA damage IS occurring near cell towers — 2024 Study",
                    "Wildlife IS being harmed — Peer-reviewed research",
                  ].map((phrase) => (
                    <div
                      key={phrase}
                      className="flex items-start gap-3 px-4 py-3 bg-danger-950/30 rounded-xl"
                    >
                      <span className="text-danger-400 font-mono text-lg font-black leading-none mt-0.5">
                        !
                      </span>
                      <p className="text-dark-200 text-sm font-medium">
                        {phrase}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-danger-300/70 mt-4 leading-relaxed">
                  Declarative. Measurable. Verifiable. This is what happens when
                  you stop "considering" and start testing.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center">
              <p className="text-danger-200 font-medium">
                While they{" "}
                <span className="text-dark-400 italic">
                  "consider"
                </span>{" "}
                , the people on the ground fighting for your rights are
                declaring{" "}
                <strong className="text-white text-lg">IS</strong>{" "}and{" "}
                <strong className="text-white text-lg">ARE</strong>.{" "}
                <span className="text-danger-400 font-black">
                  It's that obvious.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ MISSING RF STUDIES (May 8, 2026 FOIL) ═══════════════════ */}
      <section id="missing-rf-studies" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-900/40 border border-rose-800/30 flex items-center justify-center">
                <Radio className="w-5 h-5 text-rose-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                NYSTA Produced No RF Emissions or Propagation Studies
              </h2>
            </div>
            <p className="text-dark-400 mb-6 max-w-2xl">
              On May 8, 2026, NYSTA produced 81 documents in response to FOIL Request{" "}
              <strong className="text-white">#R000082-032026</strong>. The set includes engineering reviews, construction drawings, structural analyses, and SEQRA documents. It does <strong className="text-rose-400">not</strong>{" "}include the RF emissions or propagation studies that any siting analysis is supposed to rely on.
            </p>
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-rose-950/20 border border-rose-800/30 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
                Verizon&rsquo;s Own Drawings Reference an RF Document — That Document Is Not in the FOIL
              </p>
              <p className="text-dark-200 text-base leading-relaxed mb-4">
                The Verizon Construction Drawings produced in the FOIL response (sheet C-3) reference an{" "}
                <strong className="text-white">&ldquo;RF Antenna Design Sheet dated 1/2/25, RFDS Project ID 17326150.&rdquo;</strong>{" "}
                That document is not in the production. AT&amp;T&rsquo;s RF Design Sheet (RFDS) is also not in the production. T-Mobile is referenced as a future co-locator throughout the engineering files; no T-Mobile RF documentation appears.
              </p>
              <div className="bg-dark-950/60 border border-rose-700/30 rounded-xl p-5 mb-4">
                <p className="text-sm text-dark-300 leading-relaxed mb-2">
                  An RFDS is the document that defines:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-dark-300">
                  <li>The frequencies and channel counts on each antenna face.</li>
                  <li>The transmit power per channel.</li>
                  <li>The mechanical and electrical down-tilt of every antenna.</li>
                  <li>The propagation map &mdash; the predicted RF coverage on the ground.</li>
                  <li>The compliance calculation against FCC OET Bulletin 65 RF exposure limits.</li>
                </ul>
              </div>
              <p className="text-dark-200 text-base leading-relaxed">
                Without an RFDS, there is no documentary basis for the &ldquo;coverage objective&rdquo; the tower is supposed to serve, no propagation map showing the predicted ground-level RF, and no FCC Bulletin 65 compliance worksheet showing public-exposure limits are met at the nearest residence.
              </p>
              <p className="text-xs text-dark-500 italic mt-4">
                Source:{" "}
                <a
                  href="https://media.protectliverpoolny.org/foil/us-ny-2029-t3u250002-verizon-drawings.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 underline decoration-rose-500/40 hover:decoration-rose-400"
                >
                  US-NY-2029_T3U250002_VERIZON_DRAWINGS.pdf
                </a>
                {" "}sheet C-3 (Drawing Notes).
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
                The &ldquo;Coverage Objective&rdquo; Document Doesn&rsquo;t Exist Either
              </p>
              <p className="text-dark-200 text-base leading-relaxed mb-3">
                Under FOIL Item 7, we asked for the engineering or planning analysis showing why this specific site was chosen over alternatives. Per RAO Jill Warner&rsquo;s May 8, 2026 cover letter:{" "}
                <strong className="text-rose-400">&ldquo;No records responsive to Item 7 were located.&rdquo;</strong>{" "}
                There is no Alternative Site Analysis, no Coverage Objective study, and no carrier dead-zone analysis in the production. The full breakdown of that admission lives at{" "}
                <Link
                  href="/the-facts/loophole-kings"
                  className="text-rose-400 underline decoration-rose-500/40 hover:decoration-rose-400"
                >
                  /the-facts/loophole-kings
                </Link>
                {" "}and the full FOIL catalog is at{" "}
                <Link
                  href="/the-facts/foil-evidence"
                  className="text-rose-400 underline decoration-rose-500/40 hover:decoration-rose-400"
                >
                  /the-facts/foil-evidence
                </Link>
                .
              </p>
              <p className="text-dark-200 text-base leading-relaxed">
                We&rsquo;ve filed a follow-up FOIL targeting the Verizon RFDS (Project ID 17326150) and any AT&amp;T or T-Mobile RF studies. If those documents exist, NYSTA has not yet produced them. If they don&rsquo;t exist, the public-exposure question for this tower has no documentary answer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ AT&T EQUIPMENT MANIFEST ═══════════════════ */}
      <section id="att-manifest" className="py-16 md:py-24 px-4 scroll-mt-24 bg-dark-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-800/30 flex items-center justify-center">
                <Radio className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                What&rsquo;s Actually on the Tower &mdash; AT&amp;T&rsquo;s Equipment Manifest
              </h2>
            </div>
            <p className="text-dark-400 mb-6 max-w-2xl">
              The 93-document FOIL production includes Airosmith Engineering&rsquo;s sealed Mount Analysis Report for AT&amp;T (December 20, 2024). It documents every piece of antenna and radio hardware AT&amp;T installed on the tower.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8 mb-5"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              AT&amp;T Equipment (Per Airosmith Mount Analysis, 12/20/2024)
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-dark-950/60 border-b border-amber-700/30">
                    <th className="text-left p-3 font-bold text-amber-300">Qty</th>
                    <th className="text-left p-3 font-bold text-amber-300">Equipment</th>
                    <th className="text-left p-3 font-bold text-amber-300">Type / Band</th>
                  </tr>
                </thead>
                <tbody className="text-dark-200">
                  <tr className="border-b border-dark-800/40">
                    <td className="p-3 font-semibold">8&times;</td>
                    <td className="p-3">Commscope NNH4-65C-R6H4</td>
                    <td className="p-3 text-dark-400">Panel antennas</td>
                  </tr>
                  <tr className="border-b border-dark-800/40">
                    <td className="p-3 font-semibold">4&times;</td>
                    <td className="p-3">Ericsson AIR 6472</td>
                    <td className="p-3 text-dark-400">Band 77 / C-band 5G</td>
                  </tr>
                  <tr className="border-b border-dark-800/40">
                    <td className="p-3 font-semibold">4&times;</td>
                    <td className="p-3">Ericsson 4490</td>
                    <td className="p-3 text-dark-400">Bands 5 + 12</td>
                  </tr>
                  <tr className="border-b border-dark-800/40">
                    <td className="p-3 font-semibold">4&times;</td>
                    <td className="p-3">Ericsson 4890</td>
                    <td className="p-3 text-dark-400">Bands 25 + 66 / AWS</td>
                  </tr>
                  <tr className="border-b border-dark-800/40">
                    <td className="p-3 font-semibold">4&times;</td>
                    <td className="p-3"><strong className="text-white">Ericsson 4494</strong></td>
                    <td className="p-3 text-amber-300"><strong>Band 14 / FirstNet</strong> &mdash; 1 of 4 Ericsson radio types</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">3&times;</td>
                    <td className="p-3">Raycap DC9-48-60-24-8C-EV</td>
                    <td className="p-3 text-dark-400">Surge protectors</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mt-4">
              Plus T-Mobile and Verizon equipment (their RFDS documents are not in the FOIL production). The mount&rsquo;s demand-capacity ratio under loaded condition: 71.4% (Pass).
            </p>
            <p className="text-xs text-dark-500 italic mt-4">
              Source:{" "}
              <a
                href="https://media.protectliverpoolny.org/foil/att-mount-analysis-airosmith-20241220.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 underline decoration-amber-500/40 hover:decoration-amber-400"
              >
                Airosmith Mount Analysis Report (12/20/2024) — engineer of record Joseph R. Johnston, P.E. NY License #091187
              </a>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-5"
          >
            <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">
              The Full Licensed RF Spectrum &mdash; Per the FAA&rsquo;s Own Filing
            </p>
            <p className="text-dark-200 text-base leading-relaxed mb-4">
              FAA 7460-1 Determination of No Hazard <strong className="text-white">2024-AEA-11624-OE</strong>, filed 11/12/2024 by Mitchell Henry (Phoenix Tower International), discloses every RF band that PTI applied to operate from this tower. The list is not on AT&amp;T&rsquo;s drawings &mdash; it is on the FAA aeronautical study.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-dark-950/60 border border-sky-700/30 rounded-xl p-4">
                <p className="text-sm font-bold text-sky-300 mb-2">Microwave Backhaul</p>
                <ul className="text-sm text-dark-300 list-disc pl-5 space-y-1">
                  <li>6&ndash;7 GHz</li>
                  <li>10&ndash;11.7 GHz</li>
                  <li>17.7&ndash;19.7 GHz</li>
                  <li>21.2&ndash;23.6 GHz</li>
                  <li className="text-sky-300 italic">ERP up to 55 dBW</li>
                </ul>
              </div>
              <div className="bg-dark-950/60 border border-sky-700/30 rounded-xl p-4">
                <p className="text-sm font-bold text-sky-300 mb-2">Cellular</p>
                <ul className="text-sm text-dark-300 list-disc pl-5 space-y-1">
                  <li>614&ndash;698 MHz, 698&ndash;806 MHz</li>
                  <li>806&ndash;901 MHz, 901&ndash;941 MHz</li>
                  <li>1670&ndash;1675 MHz, 1710&ndash;1755 MHz</li>
                  <li>1850&ndash;2025 MHz, 2110&ndash;2200 MHz</li>
                  <li>2305&ndash;2360 MHz, 2496&ndash;2690 MHz</li>
                  <li className="text-sky-300 italic">ERPs up to 1640 W (PCS), 2000 W (700 MHz/WCS), 3500 W (paging)</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-dark-500 italic mt-4">
              Source:{" "}
              <a
                href="https://media.protectliverpoolny.org/foil/faa-7460-tower-2024-aea-11624-oe.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline decoration-sky-500/40 hover:decoration-sky-400"
              >
                FAA 7460-1 Determination of No Hazard 2024-AEA-11624-OE
              </a>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="bg-fuchsia-950/20 border border-fuchsia-800/30 rounded-2xl p-6 md:p-8"
          >
            <p className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-3">
              The &ldquo;Emergency Services&rdquo; Justification Is FirstNet Capability &mdash; One Band Among Many
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                Senator Ryan&rsquo;s office relayed PTI&rsquo;s claim that the tower is &ldquo;intended to improve coverage for emergency service providers.&rdquo; The 93-document FOIL response now documents what that actually means in hardware:
              </p>
              <p>
                AT&amp;T installed <strong className="text-white">four Ericsson 4494 radios on Band 14 (FirstNet)</strong> &mdash; one of <strong className="text-white">four</strong>{" "}Ericsson radio types on the tower. The other twelve Ericsson radios are commercial 5G/cellular. The eight Commscope panels carry both. There is no FirstNet-specific equipment package; there is FirstNet capability layered onto a commercial 5G build &mdash; <em>standard AT&amp;T practice on every tower they own equipment on</em>.
              </p>
              <p>
                Band 14 / FirstNet capability does not transform a commercial 5G site adjacent to R-O zoning into a public-safety-specific facility. It makes it a commercial 5G site that <em>also</em>{" "}supports FirstNet, like every other AT&amp;T site. The honest framing: <strong className="text-fuchsia-300">the &ldquo;emergency services&rdquo; justification was used to bypass scrutiny that no commercial 5G site in R-O residential-office zoning would normally pass.</strong>{" "}It is not a wholly fabricated claim. It is a materially overstated one.
              </p>
              <p className="text-xs text-dark-500 italic">
                Source:{" "}
                <a
                  href="https://media.protectliverpoolny.org/foil/att-mount-analysis-airosmith-20241220.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fuchsia-400 underline decoration-fuchsia-500/40 hover:decoration-fuchsia-400"
                >
                  AT&amp;T Mount Analysis (Airosmith, 12/20/2024)
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE FEDERAL TRAP ═══════════════════ */}
      <section id="federal-trap" className="py-16 md:py-24 px-4 bg-dark-900/30 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-800/30 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                The Federal Trap
              </h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Radio className="w-5 h-5 text-amber-400" />
                The Telecommunications Act of 1996
              </h3>
              <p className="text-dark-200 leading-relaxed mb-4">
                Here's the part most people don't know: Federal law{" "}
                <strong className="text-white">explicitly prohibits</strong>{" "}
                local governments from denying a cell tower based on
                "environmental effects of radio frequency
                emissions"—as long as the tower meets FCC guidelines.
              </p>
              <p className="text-dark-200 leading-relaxed mb-4">
                That means even if you wanted to sue over health and radiation
                concerns,{" "}
                <strong className="text-white">
                  federal law is stacked against you
                </strong>{" "}
                protection, and it's baked into the law. In 1996, Congress
                even{" "}
                <strong className="text-white">
                  eliminated the EPA&apos;s funding for non-ionizing radiation research
                </strong>{" "}
                — removing the one federal agency that could have set
                science-based safety standards.
              </p>
              <p className="text-dark-200 leading-relaxed mb-4">
                <strong className="text-danger-400">
                  But the tide is turning.
                </strong>{" "}
                In 2021, the Environmental Health Trust{" "}
                <strong className="text-white">
                  won a landmark federal court case
                </strong>{" "}
                against the FCC. The U.S. Court of Appeals ruled the FCC's
                decision not to update its 1996 radiation exposure limits was{" "}
                <strong className="text-white">
                  "arbitrary and capricious"
                </strong>{" "}
                and ordered the Commission to explain why it ignored evidence of
                non-cancer harms, impacts to children, and environmental damage.
              </p>
              <p className="text-dark-200 leading-relaxed">
                The fight isn't just about radiation—it's about{" "}
                <strong className="text-white">transparency</strong>,{" "}
                <strong className="text-white">due process</strong>, and{" "}
                <strong className="text-white">
                  the right of a community to be heard
                </strong>{" "}
                before a massive commercial structure is dropped in their
                neighborhood.
              </p>
            </motion.div>

            {/* How We Fight */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                How We Fight Back
              </h3>
              <ul className="space-y-3">
                {[
                  "Challenge the process: Was proper federal and state review actually completed?",
                  "Demand transparency: Force disclosure of lease terms, radiation studies, and structural assessments.",
                  "Push for legislation: New York State can close the NYSTA land loophole for future builds.",
                  "Build political pressure: Elected officials respond to organized, vocal communities.",
                  "Document everything: Every public meeting, every promise, every missed notification becomes evidence.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-dark-200 text-sm leading-relaxed"
                  >
                    <span className="mt-1 w-5 h-5 rounded-full bg-danger-600/20 border border-danger-600/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-danger-400">
                        {i + 1}
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Warning callout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="bg-amber-950/30 border border-amber-800/30 rounded-2xl p-6 md:p-8 flex gap-4"
            >
              <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-300 mb-2">
                  Why Silence Is Not an Option
                </h3>
                <p className="text-dark-200 text-sm leading-relaxed">
                  If this tower goes unchallenged, it sets a precedent. It tells
                  every telecom company that they can use state-owned land as a
                  backdoor into any neighborhood in New York. Your community is
                  next if Liverpool doesn't fight.
                </p>
              </div>
            </motion.div>

            {/* Malicious Intent */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className="bg-danger-950/30 border border-danger-800/40 rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-bold text-danger-400 text-lg mb-3">
                Let's Call It What It Is.
              </h3>
              <p className="text-dark-200 text-sm leading-relaxed mb-3">
                A company exploits a loophole in state land law. Sits on federal
                approval for over a year. Begins construction without notifying
                a single resident. Builds a 184-foot unlit tower 0.25 miles from
                an active landing corridor in a residential neighborhood.
              </p>
              <p className="text-dark-200 text-sm leading-relaxed mb-3">
                This wasn't an oversight. This wasn't a clerical
                error. This wasn't a missed notification. At every single
                step, due diligence was skipped — not because it was forgotten,
                but because it was{" "}
                <strong className="text-white">never intended</strong>.
              </p>
              <p className="text-danger-300 text-sm font-bold leading-relaxed">
                This is what malicious intent looks like when it wears a
                corporate logo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ WE'RE NOT ALONE CTA ═══════════════════ */}
      <div id="the-real-question" className="scroll-mt-24">
        <WeNotAlone />
      </div>

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
            Continue Reading
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/the-facts/community"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-amber-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                ← Community & Land Value
              </p>
              <p className="text-xs text-dark-400">
                Property values, double standards, and the legal framework.
              </p>
            </Link>
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Aviation & Safety
              </p>
              <p className="text-xs text-dark-400">
                The loophole, flight path proximity, 5G altimeter interference.
              </p>
            </Link>
            <Link
              href="/the-facts/wildlife"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-lime-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-lime-400 transition-colors mb-1">
                Wildlife & Environment →
              </p>
              <p className="text-xs text-dark-400">
                Eagles, bird collisions, honeybees, and the Audubon data they can't ignore.
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
          <AlertTriangle className="w-4 h-4" />
          SIGN THE PETITION & TAKE ACTION
        </Link>
      </div>
    </>
  );
}
