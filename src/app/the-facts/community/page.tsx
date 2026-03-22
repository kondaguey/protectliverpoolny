"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Quote,
  Radio,
  ExternalLink,
  Landmark,
  ArrowRight,
  MapPin,
  TrendingDown,
  Construction,
  Scale,
  Eye,
  Car,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function CommunityLegalPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/40 border border-amber-700/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5" />
              Community & Land Value
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            Your Community.{" "}
            <span className="text-danger-500">Your Home Value.</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-amber-400">Their Profit.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            Property values drop up to 20% near cell towers. Federal law was written to silence you.
            And nobody asked your permission.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ PROPERTY VALUES ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Your Home Is{" "}
                <span className="text-danger-500">Worth Less Now</span>
              </h3>
              <p className="text-dark-400 max-w-2xl mx-auto">
                This isn&apos;t speculation. Peer-reviewed studies, federal
                agencies, and realtors across the country confirm that cell
                towers reduce property values — sometimes dramatically.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "94%",
                  label: "of home buyers say they would pay less or avoid a property near a cell tower",
                  source: "NISLAPP Survey",
                },
                {
                  stat: "Up to 20%",
                  label: "decline in property values reported by licensed real estate appraisers and peer-reviewed studies",
                  source: "Multiple Studies",
                },
                {
                  stat: "79%",
                  label: "say they would never purchase or rent a property within a few blocks of a cell tower",
                  source: "REALTOR Magazine",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center"
                >
                  <p className="text-3xl md:text-4xl font-black text-danger-400 mb-1">
                    {item.stat}
                  </p>
                  <p className="text-xs text-dark-300 leading-relaxed mb-2">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-dark-500 italic">
                    {item.source}
                  </p>
                </div>
              ))}
            </div>

            {/* HUD callout */}
            <div className="bg-amber-950/30 border border-amber-800/30 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-300 mb-2">
                    The Federal Government Already Knows
                  </h4>
                  <p className="text-dark-200 text-sm leading-relaxed mb-3">
                    The U.S. Department of Housing and Urban Development (HUD)
                    classifies cell towers as{" "}
                    <strong className="text-white">
                      &ldquo;Hazards and Nuisances.&rdquo;
                    </strong>{" "}
                    FHA appraisers are required to flag nearby towers as
                    potential deficiencies, comment on their impact on
                    marketability, and verify the home isn&apos;t within the
                    tower&apos;s engineered fall distance.
                  </p>
                  <p className="text-xs text-dark-400">
                    The California Association of Realtors&apos; Property
                    Sellers Questionnaire lists cell towers alongside other
                    &ldquo;neighborhood noise, nuisance or other problems.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Peer-reviewed studies */}
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 mb-6">
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">
                Published Research on Property Value Impacts
              </p>
              <div className="space-y-4">
                {[
                  {
                    study: "Brisbane, Australia (2018)",
                    finding: "Proximity to cell towers negatively affects house values, decreasing as distance increases. Researchers recommended a compensation program for nearby property owners.",
                    journal: "Environmental Economics and Policy Studies",
                  },
                  {
                    study: "Johannesburg, South Africa (2024)",
                    finding: "The closer a residential property is to a cell tower, the greater the impact on its selling price.",
                    journal: "International Journal of Housing Markets and Analysis",
                  },
                  {
                    study: "U.S. Spatial Analysis (2018)",
                    finding: "Homes within 0.72 km of towers lost 2.46% on average, and up to 9.78% for visible towers. Aggregate loss: over $24 million for properties in that band.",
                    journal: "Journal of Real Estate Finance and Economics",
                  },
                  {
                    study: "Kentucky (2016)",
                    finding: "A home with a visible tower 1,000 feet away sells for 1.82% ($3,342) less. Aggregate impact: $10 million for all properties within 1,000 feet.",
                    journal: "Land Economics",
                  },
                ].map((item) => (
                  <div
                    key={item.study}
                    className="bg-dark-800/40 rounded-xl p-4"
                  >
                    <p className="text-sm font-semibold text-white mb-1">
                      {item.study}
                    </p>
                    <p className="text-xs text-dark-300 leading-relaxed mb-1">
                      {item.finding}
                    </p>
                    <p className="text-[10px] text-dark-500 italic">
                      {item.journal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Realtor quote */}
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 mb-6">
              <Quote className="w-6 h-6 text-dark-600 mb-3" />
              <p className="text-dark-200 text-sm leading-relaxed italic mb-3">
                &ldquo;In my opinion from extensive experience I will tell you
                the cell tower will negatively effect the price of the property
                between 15%–30%. Not only that but close to 90% of my clients
                would refuse to consider looking at or buying the property.&rdquo;
              </p>
              <p className="text-xs text-dark-500">
                — Licensed Realtor, Birmingham, MI
              </p>
            </div>

            <div className="text-center">
              <a
                href="https://ehsciences.org/cell-towers-drop-property-values/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-danger-900/40 hover:bg-danger-900/60 border border-danger-700/40 text-danger-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                Full Property Value Research
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Impact cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Construction,
                  title: "If They Can Do It Here, They Can Do It Anywhere",
                  text: "This tower was built without local approval or community input. If that stands, it sets the precedent for the next one — and the one after that. Your street could be next.",
                },
                {
                  icon: Car,
                  title: "You Drive Past It Every Day",
                  text: "Routes 11, 57, Electronics Parkway, the Thruway — thousands of residents commute right through this corridor daily. A 184-foot industrial structure changes the character of the area for everyone.",
                },
                {
                  icon: Eye,
                  title: "It's an Eyesore — Period",
                  text: "184 feet of steel monopole towering over a residential neighborhood isn't just a safety concern. It's visual blight that degrades the community's character and quality of life.",
                },
                {
                  icon: Scale,
                  title: "It's About Accountability",
                  text: "A private company used state land to bypass local government entirely. If residents don't push back, it tells every telecom company that Salina is open for business — no questions asked.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
                >
                  <item.icon className="w-6 h-6 text-danger-400 mb-2" />
                  <p className="text-white font-bold mb-2">{item.title}</p>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE STATE LAND LOOPHOLE ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-danger-900/50 border border-danger-800/30 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-danger-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                The State Land Loophole
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
              <p className="text-dark-200 leading-relaxed mb-4">
                Under normal circumstances, any company wanting to build a
                184-foot commercial structure in a residential area would need to
                go through <strong className="text-white">local zoning approval</strong>,{" "}
                <strong className="text-white">environmental impact reviews</strong>,
                and <strong className="text-white">mandatory neighbor notification</strong>.
              </p>
              <p className="text-dark-200 leading-relaxed">
                Phoenix Tower International is finding a way around all of it. They
                secured a lease on land owned by the{" "}
                <strong className="text-white">
                  New York State Thruway Authority (NYSTA)
                </strong>
                . Because the land is state-owned, it falls outside the
                jurisdiction of{" "}
                <strong className="text-white">Onondaga County</strong> and the{" "}
                <strong className="text-white">Town of Salina</strong>—
                completely bypassing local government authority.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "No Local Zoning Review",
                  text: "State-owned land is exempt from local zoning ordinances. The Town of Salina had no authority to approve or deny the build.",
                },
                {
                  title: "No Neighbor Notification",
                  text: "There is no public hearing, no mailed notice, no opportunity for residents to weigh in. Residents are discovering a tower going up in their yards.",
                },
                {
                  title: "No Transparent Environmental Review",
                  text: "No environmental impact assessment has been shared with the public. If one exists, it was never disclosed to the community it would affect.",
                },
                {
                  title: "No Local Tax Revenue",
                  text: "Because the tower sits on state land, the local municipality sees zero tax revenue from this massive commercial operation in their community.",
                },
              ].map((fact, i) => (
                <motion.div
                  key={fact.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 2}
                  className="bg-dark-900/40 border border-dark-800/40 rounded-xl p-5"
                >
                  <h3 className="font-bold text-white mb-2">{fact.title}</h3>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    {fact.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="relative bg-danger-950/30 border-l-4 border-danger-600 rounded-r-xl p-6 md:p-8"
            >
              <p className="text-lg md:text-xl text-dark-100 font-medium italic leading-relaxed">
                &ldquo;They used a legal gap designed for highway
                infrastructure to erect a commercial cell tower in a
                residential neighborhood. This was by design, not by
                accident.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════════════ RULES FOR ME NOT FOR THEE ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Rules for <span className="text-danger-500">Thee</span>,{" "}
              Not for <span className="text-sky-400">Me</span>.
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              The regulatory framework isn&apos;t just broken. It&apos;s
              designed to silence you.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="space-y-4"
          >
            {[
              {
                their: "Telecom companies can build a 184-foot tower in a residential neighborhood with zero local approval.",
                your: "You need a permit to build a fence over 6 feet tall on your own property.",
              },
              {
                their: "The 1996 Telecom Act prohibits local governments from rejecting towers based on health concerns.",
                your: "Your concerns about RF exposure to your children are legally irrelevant to the approval process.",
              },
              {
                their: "Phoenix Tower International sat on federal approval for a year, then started building without notifying a single resident. Not by accident — by design.",
                your: "If you start a construction project without a permit, you get fined, stopped, and potentially sued.",
              },
              {
                their: "The FAA says a 184-foot structure 3 miles from an active runway doesn't need a single light on it.",
                your: "Your drone gets grounded if you fly 400 feet near an airport without FAA clearance.",
              },
              {
                their: "The FCC hasn't updated its RF exposure limits since 1996. A federal court ruled them inadequate in 2021.",
                your: "You're told the radiation is \"within guidelines\" — guidelines from before the first iPhone existed.",
              },
            ].map((rule, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-3"
              >
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5">
                  <p className="text-[10px] text-dark-500 uppercase font-bold tracking-widest mb-2">
                    They Can
                  </p>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    {rule.their}
                  </p>
                </div>
                <div className="bg-danger-950/20 border border-danger-800/30 rounded-xl p-5">
                  <p className="text-[10px] text-danger-400 uppercase font-bold tracking-widest mb-2">
                    You Can&apos;t
                  </p>
                  <p className="text-danger-200 text-sm leading-relaxed">
                    {rule.your}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE FEDERAL TRAP ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/30">
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
                Here&apos;s the part most people don&apos;t know: Federal law{" "}
                <strong className="text-white">
                  explicitly prohibits
                </strong>{" "}
                local governments from denying a cell tower based on
                &ldquo;environmental effects of radio frequency emissions&rdquo;—as
                long as the tower meets FCC guidelines.
              </p>
              <p className="text-dark-200 leading-relaxed mb-4">
                That means even if you wanted to sue over health and radiation
                concerns,{" "}
                <strong className="text-white">
                  federal law is stacked against you
                </strong>
                . The telecom industry spent decades lobbying for this
                protection, and it&apos;s baked into the law. In 1996, Congress
                even{" "}
                <strong className="text-white">
                  defunded the EPA from researching RF radiation health effects
                </strong>
                —eliminating the one federal agency that could have set
                science-based safety standards.
              </p>
              <p className="text-dark-200 leading-relaxed mb-4">
                <strong className="text-danger-400">
                  But the tide is turning.
                </strong>{" "}
                In 2021, the Environmental Health Trust{" "}
                <strong className="text-white">won a landmark federal court case</strong>{" "}
                against the FCC. The U.S. Court of Appeals ruled the FCC&apos;s
                decision not to update its 1996 radiation exposure limits was{" "}
                <strong className="text-white">&ldquo;arbitrary and capricious&rdquo;</strong>{" "}
                and ordered the Commission to explain why it ignored evidence of
                non-cancer harms, impacts to children, and environmental damage.
              </p>
              <p className="text-dark-200 leading-relaxed">
                The fight isn&apos;t just about radiation—it&apos;s about{" "}
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
                  next if Liverpool doesn&apos;t fight.
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
                Let&apos;s Call It What It Is.
              </h3>
              <p className="text-dark-200 text-sm leading-relaxed mb-3">
                A company exploits a loophole in state land law. Sits on federal
                approval for over a year. Begins construction without notifying
                a single resident. Builds a 184-foot unlit tower 0.25 miles from
                an active landing corridor in a residential neighborhood.
              </p>
              <p className="text-dark-200 text-sm leading-relaxed mb-3">
                This wasn&apos;t an oversight. This wasn&apos;t a clerical error. This
                wasn&apos;t a missed notification. At every single step, due
                diligence was skipped — not because it was forgotten, but
                because it was <strong className="text-white">never intended</strong>.
              </p>
              <p className="text-danger-300 text-sm font-bold leading-relaxed">
                This is what malicious intent looks like when it wears a corporate logo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SOCIAL PROOF ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              You&apos;re{" "}
              <span className="text-danger-500">Not</span> Alone
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Communities across New York State and the country are
              fighting back against towers just like this one.
            </p>
          </motion.div>

          {/* Data centers callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8 text-center mb-10"
          >
            <Quote className="w-6 h-6 text-danger-400 mx-auto mb-3" />
            <p className="text-lg md:text-xl font-black text-white leading-relaxed mb-2">
              &ldquo;This recent massive push for data centers and towers
              isn&apos;t about cellular coverage.&rdquo;
            </p>
            <p className="text-dark-400 text-sm">
              It&apos;s about infrastructure for AI, surveillance, and
              corporate data pipelines &mdash; going up in your neighborhood,
              without your permission.
            </p>
          </motion.div>

          {/* Local Syracuse article — featured */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mb-4"
          >
            <a
              href="https://www.syracuse.com/news/2019/05/some-syracuse-lawmakers-still-wary-of-5g-if-were-wrong-the-risk-is-terrible.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8 hover:border-amber-600/50 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  <MapPin className="w-3 h-3" /> Local — Syracuse, NY
                </span>
              </div>
              <p className="text-lg md:text-xl font-black text-white group-hover:text-amber-200 transition-colors mb-2">
                &ldquo;If we&apos;re wrong, the risk is terrible&rdquo;
              </p>
              <p className="text-sm text-dark-300 mb-3">
                Syracuse Common Council narrowly approved 5G towers 5-3 in 2019 — after public hearings, debate, and a two-week delay forced by a skeptical councilor. Liverpool got none of that. Not even a vote.
              </p>
              <p className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                Syracuse.com
                <ExternalLink className="w-3 h-3" />
              </p>
            </a>
          </motion.div>

          {/* NYS Task Force Report — featured */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1.25}
            className="mb-8"
          >
            <a
              href="https://esd.ny.gov/sites/default/files/Upstate-Cellular-Coverage-Task-Force-Final-Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 hover:border-sky-600/50 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                  <Landmark className="w-3 h-3" /> Official — NYS Government Report
                </span>
              </div>
              <p className="text-lg md:text-xl font-black text-white group-hover:text-sky-200 transition-colors mb-2">
                NY Upstate Cellular Coverage Task Force — Final Report
              </p>
              <p className="text-sm text-dark-300 mb-3">
                New York State&apos;s own task force identified coverage gaps only in the remote Adirondacks and Catskills — not suburban Syracuse. The report mandates environmental review, visual impact assessments, and public process for tower siting. Liverpool got zero. The state also collects ~$10M/year from tower deals on its own land through Crown Castle.
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {["Coverage gaps are rural", "Environmental review required", "State profits from deals", "Small cells preferred"].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold text-sky-300 bg-sky-900/40 border border-sky-800/30 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-sky-400 font-semibold flex items-center gap-1">
                Empire State Development (PDF)
                <ExternalLink className="w-3 h-3" />
              </p>
            </a>
          </motion.div>

          {/* YouTube videos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1.5}
            className="mb-8"
          >
            <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-2 text-center">
              Watch — Don&apos;t Take Our Word For It
            </p>
            <p className="text-xs text-dark-500 text-center mb-6 italic">
              If you see a &quot;Video not available&quot; thumbnail, YouTube
              is actively censoring this. That should tell you something.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  id: "eK2jUa9Rhmo",
                  title: "The Fight Against Unchecked Tower Placement",
                },
                {
                  id: "WK5HByPJuMI",
                  title: "Residents Organize Against 5G Towers",
                },
                {
                  id: "fWY9pgddyaw",
                  title: "Cell Tower Opposition — Short",
                },
                {
                  id: "BfuWabILmsY",
                  title: "5G Tower Dangers Exposed",
                },
                {
                  id: "FA1gGKzWClQ",
                  title: "The Truth About Cell Tower Radiation",
                },
                {
                  id: "TerkfWZrMNY",
                  title: "Cell Towers & Public Health",
                },
                {
                  id: "qDl1PgCn9AY",
                  title: "5G, Cell Towers & RF Safety — The Full Picture",
                },
                {
                  id: "LQvf1_QapHU",
                  title: "Communities Standing Up to Telecom",
                },
                {
                  id: "bUyJFdEmwzw",
                  title: "Cell Tower Realities — Look at the Comments 😂",
                  note: "look at the comments lol",
                },
                {
                  id: "n8a5famLCak",
                  title: "Cell Tower Town Hall — Live Recording",
                },
                {
                  id: "6FpDnjA-InI",
                  title: "5G Towers in Our Neighborhoods",
                },
              ].map((video) => (
                <div key={video.id} className="space-y-2">
                  <div
                    className="relative w-full rounded-xl overflow-hidden border border-dark-700/50 shadow-lg"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <p className="text-xs text-dark-400 text-center">
                    {video.title}
                  </p>
                  {(video as any).note && (
                    <p className="text-xs text-amber-400 text-center italic">
                      {(video as any).note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* News articles */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="space-y-3"
          >
            <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-2 text-center">
              In the News — This Is Happening Everywhere
            </p>
            {[
              {
                source: "AP News — 2023",
                title:
                  "Michigan superintendent resigns amid T-Mobile cell tower fight on school playground",
                quote:
                  "Parents forced the Wyandotte superintendent out after a 5G tower was installed on an elementary school chimney next to a playground.",
                url: "https://apnews.com/article/cell-tower-school-wyandotte-michigan-t-mobile-5g-c8a78c5bfbc0c8c4d68e1e4c8a6c3b1f",
                color: "text-red-400",
              },
              {
                source: "Jacksonville Today — 2024",
                title:
                  "Nocatee residents beg Jacksonville to kill 170-ft cell tower plan",
                quote:
                  "Nearly 1,500 residents signed a petition. The city's own planning staff recommended denial.",
                url: "https://jaxtoday.org/2024/08/19/nocatee-residents-beg-jacksonville-to-kill-cell-tower-plan/",
                color: "text-emerald-400",
              },
              {
                source: "CT Insider — 2025",
                title:
                  "Washington, CT residents oppose cell tower near schools",
                quote:
                  "Over 140 residents signed a petition citing health, safety, scenic, and environmental concerns.",
                url: "https://www.ctinsider.com/news/article/washington-ct-cell-tower-opposition-20314862.php",
                color: "text-sky-400",
              },
              {
                source: "Environmental Health News — 2024",
                title:
                  "Loudoun County school board votes to ban cell towers on school properties",
                quote:
                  "Virginia school board endorsed a policy banning telecom towers on school properties, citing potential health risks from wireless radiation.",
                url: "https://www.ehn.org/cell-towers-on-school-property-2669386498.html",
                color: "text-purple-400",
              },
              {
                source: "NY Post — 2025",
                title:
                  "NYC's new 'monstrous' 5G cell towers get nasty reception in ritzy neighborhood",
                quote:
                  "\"It looks monstrous... They threw it there without any thought.\"",
                url: "https://nypost.com/2025/04/27/us-news/nycs-new-monstrous-5g-cell-towers-get-nasty-reception-in-ritzy-neighborhood-it-would-look-good-in-dubai/",
                color: "text-red-400",
              },
              {
                source: "NY Landmarks Conservancy",
                title: "5G Towers Spark Outrage and Concern",
                quote:
                  "Eight preservation groups wrote to City Hall decrying the \"chaotic and opaque review process.\"",
                url: "https://nylandmarks.org/news/5g-towers-spark-outrage-and-concern/",
                color: "text-amber-400",
              },
              {
                source: "Village Preservation",
                title: "5G Towers in Our Neighborhoods",
                quote:
                  "Communities organizing against the unchecked placement of industrial telecom infrastructure in residential areas.",
                url: "https://www.villagepreservation.org/campaign/5g-towers-in-our-neighborhoods/",
                color: "text-sky-400",
              },
            ].map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 md:p-5 hover:border-dark-600/50 transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${article.color}`}
                  >
                    {article.source}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-danger-200 transition-colors mb-1">
                    {article.title}
                  </p>
                  <p className="text-xs text-dark-400 leading-relaxed">
                    {article.quote}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-dark-600 group-hover:text-dark-400 flex-shrink-0 mt-1" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-20 md:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Now You Know.{" "}
            <span className="text-danger-500">Now Do Something.</span>
          </h2>
          <p className="text-dark-400 text-lg mb-8 max-w-xl mx-auto">
            Sign the petition, call your representatives, and show up to the
            next Town Board meeting. They ignored us once—make sure they
            can&apos;t do it again.
          </p>
          <Link
            href="/take-action"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger-600 hover:bg-danger-500 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40 hover:shadow-danger-800/60 hover:scale-[1.03]"
          >
            Take Action Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
            Continue Reading
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/the-facts/health"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Health Impacts →
              </p>
              <p className="text-xs text-dark-400">
                RF radiation research, children&apos;s vulnerability, and setback distances.
              </p>
            </Link>
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Aviation & Safety →
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
                Eagles, bird collisions, honeybees, and the Audubon data.
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
