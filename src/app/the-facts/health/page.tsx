"use client";

import Link from "next/link";
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
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-6"
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
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            Health{" "}
            <span className="text-danger-500">Impacts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            What the independent research says about RF radiation, children&apos;s vulnerability,
            and the safety limits a federal court called &quot;arbitrary and capricious.&quot;
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ WHY IT MATTERS TO YOU ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
              Think This Doesn&apos;t{" "}
              <span className="text-danger-500">Affect You?</span>
            </h2>
            <p className="text-dark-400 text-center max-w-2xl mx-auto mb-10">
              You don&apos;t have to live within a mile of this tower for it to
              matter. Here&apos;s why every Salina and Liverpool resident should
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
      <section className="py-16 md:py-24 px-4">
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
              science says otherwise. Here are the studies they don&apos;t want
              you to read.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: Microscope,
                title: "NTP Study — \"Clear Evidence\" of Cancer",
                text: "The U.S. National Toxicology Program's $30 million study found \"clear evidence\" of carcinogenic activity from RF radiation, including malignant schwannomas of the heart and tumors in the brain.",
                link: "https://ehtrust.org/science/research-on-cell-tower-and-cell-antenna-radiation/",
                linkLabel: "View the Research",
                accent: "text-sky-400",
                bg: "bg-sky-950/30",
                border: "border-sky-800/30",
              },
              {
                icon: BarChart3,
                title: "Ramazzini Institute Confirmation",
                text: "Italy's Ramazzini Institute independently replicated the NTP findings, discovering increased tumor rates at RF exposure levels equivalent to those from cell towers — not just phones.",
                link: "https://ehtrust.org/science/research-on-cell-tower-and-cell-antenna-radiation/",
                linkLabel: "View the Research",
                accent: "text-emerald-400",
                bg: "bg-emerald-950/30",
                border: "border-emerald-800/30",
              },
              {
                icon: Gavel,
                title: "EHT v. FCC — Court Orders Review",
                text: "In 2021, a federal court ruled that the FCC's decision to maintain 1996-era radiation limits was \"arbitrary and capricious,\" ordering the agency to address evidence of harm to children and the environment.",
                link: "https://ehtrust.org/in-historic-decision-federal-court-finds-fcc-failed-to-justify-its-safety-standards/",
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
                link: "https://ehtrust.org/science/research-on-cell-tower-and-cell-antenna-radiation/",
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
                link: "https://pubmed.ncbi.nlm.nih.gov/35843134/",
                linkLabel: "View on PubMed",
                accent: "text-orange-400",
                bg: "bg-orange-950/30",
                border: "border-orange-800/30",
              },
              {
                icon: Microscope,
                title: "Cell Tower RF Exposure to Children's Brains Exceeds Cell Phone Use by 10×",
                text: "A 2023 study by Lee & Choi in Environmental Research found that continuous 24-hour downlink signals from cell towers produced more than ten times higher cumulative daily RF energy absorption in a child's brain compared to a 10-minute phone call.",
                link: "https://pubmed.ncbi.nlm.nih.gov/37429427/",
                linkLabel: "View on PubMed",
                accent: "text-cyan-400",
                bg: "bg-cyan-950/30",
                border: "border-cyan-800/30",
              },
              {
                icon: Gavel,
                title: "APHA 2025: Scientists Call for 1,500-Foot School Setbacks",
                text: "At the 2025 American Public Health Association conference, researchers presented evidence that multiple peer-reviewed studies recommend cell towers be located at least 1,500 feet (~500 m) from schools and residences. The U.S. has no such federal requirement.",
                link: "https://ehsciences.org/cell-towers-in-schools/",
                linkLabel: "View APHA Presentation",
                accent: "text-teal-400",
                bg: "bg-teal-950/30",
                border: "border-teal-800/30",
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
                href="https://ehtrust.org/science/research-on-cell-tower-and-cell-antenna-radiation/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-700/40 text-sky-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                Browse All Research on EHTrust.org
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://ehsciences.org/cell-towers-in-schools/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-900/40 hover:bg-teal-900/60 border border-teal-700/40 text-teal-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                APHA Conference Presentation
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
                schools. Here&apos;s what the science says.
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
                Multiple peer-reviewed studies (Levitt &amp; Lai 2010, Dode et al.
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
                  <strong className="text-white">100× to 1,000× stricter</strong> than
                  the United States. The FCC&apos;s limits haven&apos;t been updated since 1996.
                </p>
                <div className="rounded-xl overflow-hidden border border-dark-700/50 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/f9f3e799-a84f-4c8f-459f-33097d861300/public"
                    alt="Worldwide wireless radiation limits comparison by country — the U.S. has the weakest standards"
                    className="w-full h-auto"
                  />
                </div>
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
                  you stop &ldquo;considering&rdquo; and start testing.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center">
              <p className="text-danger-200 font-medium">
                While they{" "}
                <span className="text-dark-400 italic">
                  &ldquo;consider&rdquo;
                </span>
                , the people on the ground fighting for your rights are
                declaring{" "}
                <strong className="text-white text-lg">IS</strong> and{" "}
                <strong className="text-white text-lg">ARE</strong>.{" "}
                <span className="text-danger-400 font-black">
                  It&apos;s that obvious.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
                Eagles, bird collisions, honeybees, and the Audubon data they can&apos;t ignore.
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
