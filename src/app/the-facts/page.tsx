"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Building2,
  ShieldOff,
  FileWarning,
  Landmark,
  ArrowRight,
  AlertTriangle,
  Quote,
  Eye,
  Radio,
  ExternalLink,
  Microscope,
  Gavel,
  Bug,
  BarChart3,
  Plane,
  FileText,
  ShieldAlert,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function TheFactsPage() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-950 to-dark-950" />
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/40 border border-danger-700/40 rounded-full text-danger-300 text-xs font-bold uppercase tracking-wider animate-pulse">
              <FileWarning className="w-3.5 h-3.5" />
              Under Construction Now
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center leading-tight tracking-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            The Rules Weren&apos;t Written to{" "}
            <span className="text-danger-500">Protect You.</span>{" "}
            They Were Written to{" "}
            <span className="text-danger-500">Silence You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-dark-400 text-center max-w-2xl mx-auto leading-relaxed"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Here&apos;s how Phoenix Tower International is building a massive
            commercial cell tower in your neighborhood without telling a single
            resident.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ THE LOOPHOLE ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
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
                <ShieldOff className="w-5 h-5 text-danger-400" />
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

            {/* Key facts */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Building2,
                  title: "No Local Zoning Review",
                  text: "State-owned land is exempt from local zoning ordinances. The Town of Salina had no authority to approve or deny the build.",
                },
                {
                  icon: Eye,
                  title: "No Neighbor Notification",
                  text: 'There is no public hearing, no mailed notice, no opportunity for residents to weigh in. Residents are discovering a tower going up in their yards.',
                },
                {
                  icon: Scale,
                  title: "No Environmental Review",
                  text: "The standard environmental impact assessment that would evaluate effects on wildlife, water tables, and viewsheds was entirely skipped.",
                },
                {
                  icon: Landmark,
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
                  <fact.icon className="w-6 h-6 text-danger-400 mb-3" />
                  <h3 className="font-bold text-white mb-2">{fact.title}</h3>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    {fact.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Blockquote */}
            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="relative bg-danger-950/30 border-l-4 border-danger-600 rounded-r-xl p-6 md:p-8"
            >
              <Quote className="w-8 h-8 text-danger-600/40 absolute top-4 right-4" />
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

      {/* ═══════════════════ AVIATION HAZARD ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-sky-900/40 border border-sky-800/30 flex items-center justify-center">
                <Plane className="w-5 h-5 text-sky-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                3 Miles from an Active Runway. Unlit.
              </h2>
            </div>
            <p className="text-dark-500 text-sm ml-[52px] mb-8">
              This isn&apos;t a technicality. People have died.
            </p>
          </motion.div>

          {/* They Live image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="flex justify-center mb-8"
          >
            <img
              src="/protect-they-live-logo.png"
              alt="They Live — see the tower, see the plane"
              className="w-full max-w-md rounded-2xl border border-dark-700/50 shadow-2xl shadow-black/40"
            />
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8"
          >
            {[
              { value: "184 ft", label: "Tower height", accent: "text-danger-400" },
              { value: "200 ft", label: "FAA lighting threshold", accent: "text-white" },
              { value: "NONE", label: "Obstruction lighting", accent: "text-danger-500" },
              { value: "~3 mi", label: "From SYR runway", accent: "text-sky-400" },
              { value: "0.3 mi", label: "From flight path", accent: "text-danger-400" },
              { value: "~1,000 ft", label: "Aircraft altitude on approach", accent: "text-sky-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 text-center"
              >
                <p className={`text-2xl font-black ${stat.accent}`}>
                  {stat.value}
                </p>
                <p className="text-[10px] text-dark-500 mt-1 uppercase tracking-wider font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* The argument */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="space-y-6"
          >
            {/* Part 1: The math */}
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
                The Math
              </p>
              <p className="text-dark-200 leading-relaxed mb-3">
                Under{" "}
                <strong className="text-white">14 CFR Part 77.9</strong>, any
                structure within 20,000 feet of an airport runway that exceeds a
                100:1 slope from the nearest runway requires FAA notification.
                At roughly 3 miles (~15,840 feet) from SYR, that threshold is
                approximately{" "}
                <strong className="text-white">158 feet AGL</strong>.
              </p>
              <p className="text-dark-200 leading-relaxed">
                This tower is{" "}
                <strong className="text-white">184 feet</strong> &mdash;{" "}
                <span className="text-danger-400 font-bold">
                  26 feet above the FAA notification surface
                </span>
                . Phoenix Tower was required by federal law to file FAA Form
                7460-1. The FAA reviewed it and signed off with{" "}
                <strong className="text-white">no lighting requirements</strong>
                . Read that again: the rules say a 184-foot structure 3 miles
                from a runway doesn&apos;t need a single light on it.
              </p>
            </div>

            {/* Part 1.5: Flight path proximity */}
            <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-danger-500 uppercase tracking-widest mb-3">
                The Flight Path
              </p>
              <p className="text-dark-100 leading-relaxed text-lg mb-3">
                This tower sits{" "}
                <span className="text-danger-400 font-black">
                  0.3 miles
                </span>{" "}
                directly south of the actual flight path where aircraft
                descend toward Syracuse Hancock at approximately{" "}
                <strong className="text-white">1,000 feet</strong>.
              </p>
              <p className="text-dark-300 leading-relaxed">
                That&apos;s roughly 1,500 feet of lateral separation
                between live air traffic at low altitude and a 184-foot
                unlit obstruction. Pilots on visual approach in this
                corridor &mdash; especially at dusk, at night, or in
                marginal weather &mdash; have no way to see it. It is not
                lit. It is not charted as an obstruction. It is invisible.
              </p>
              <a
                href="https://skyvector.com/airport/SYR/Syracuse-Hancock-Intl-Airport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 bg-sky-900/30 border border-sky-800/30 rounded-lg text-xs font-semibold text-sky-300 hover:bg-sky-900/50 transition-all"
              >
                <Plane className="w-3 h-3" />
                View SYR on VFR Sectional Chart (SkyVector)
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Part 2: People have died */}
            <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
                People Have Died
              </p>
              <p className="text-dark-200 leading-relaxed mb-4">
                The NTSB has investigated multiple fatal accidents involving
                aircraft striking unlit or poorly marked cell towers near
                airports:
              </p>
              <div className="space-y-3 mb-4">
                {[
                  {
                    location: "Fullerton, CA (2004)",
                    detail:
                      "Cessna 182 struck an unlit tower on approach. Both occupants killed. AOPA fought to require lighting on the replacement.",
                  },
                  {
                    location: "West, TX (2016)",
                    detail:
                      "Agricultural pilot killed when his aircraft hit cell tower guy wires while returning to a base airport.",
                  },
                  {
                    location: "Price, TX (2017)",
                    detail:
                      "Pipeline patrol pilot killed when his Cessna clipped a cellphone tower guy wire near an airport.",
                  },
                ].map((accident) => (
                  <div
                    key={accident.location}
                    className="flex items-start gap-3 px-4 py-3 bg-danger-950/30 rounded-xl"
                  >
                    <AlertTriangle className="w-4 h-4 text-danger-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-danger-200">
                        {accident.location}
                      </p>
                      <p className="text-xs text-dark-400 leading-relaxed">
                        {accident.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-dark-300 leading-relaxed">
                The FAA itself warns:{" "}
                <em className="text-dark-200">
                  &ldquo;Numerous antenna towers below 200 feet AGL may not be
                  marked, lighted, or charted as obstructions&rdquo;
                </em>{" "}
                and calls them a{" "}
                <strong className="text-white">
                  significant risk to low-altitude flight
                </strong>
                . That&apos;s not our opinion. That&apos;s the FAA&apos;s.
              </p>
            </div>

            {/* Part 3: 5G altimeter interference */}
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                5G Altimeter Interference
              </p>
              <p className="text-dark-200 leading-relaxed">
                Separate from the physical collision risk, the FAA has raised
                alarm about 5G C-band signals interfering with{" "}
                <strong className="text-white">
                  aircraft radio altimeters
                </strong>{" "}
                &mdash; the instruments pilots rely on for landing in low
                visibility. The FAA issued temporary orders restricting
                operations near 5G towers at airports nationwide. A 5G tower 3
                miles from Syracuse Hancock isn&apos;t just an eyesore &mdash;
                it&apos;s a potential threat to the instruments pilots depend on
                to land safely.
              </p>
            </div>

            {/* Part 4: The system failure */}
            <div className="bg-dark-900/60 border border-danger-700/40 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-danger-500 uppercase tracking-widest mb-3">
                The Real Problem
              </p>
              <p className="text-dark-100 leading-relaxed text-lg mb-3">
                The FAA likely reviewed this tower and approved it. That&apos;s
                not a defense &mdash;{" "}
                <span className="text-danger-400 font-bold">
                  that&apos;s the indictment
                </span>
                .
              </p>
              <p className="text-dark-300 leading-relaxed">
                When the system works exactly as designed and the result is a
                184-foot unlit industrial structure going up 3 miles from an
                active runway, in a residential neighborhood, with zero
                community input &mdash; the system isn&apos;t protecting you.
                The system is protecting{" "}
                <strong className="text-white">them</strong>. The rules
                aren&apos;t broken. The rules were written this way on purpose.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://oeaaa.faa.gov/oeaaa/external/portal.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-900/30 border border-sky-800/30 rounded-lg text-xs font-semibold text-sky-300 hover:bg-sky-900/50 transition-all"
              >
                <Plane className="w-3 h-3" />
                FAA Obstruction Search
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://wireless2.fcc.gov/UlsApp/AsrSearch/asrRegistrationSearch.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-xs font-semibold text-dark-300 hover:text-white transition-all"
              >
                <Radio className="w-3 h-3" />
                FCC Tower Registration Search
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ LOOK AROUND YOU ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/30">
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
              Look Around the{" "}
              <span className="text-danger-500">Tower</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Here&apos;s what sits within a 1-mile radius of a 184-foot
              unlit industrial monopole emitting RF radiation 24/7.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              {
                emoji: "🏫",
                label: "Elementary Schools",
                items: [
                  "Long Branch Elementary (0.8 mi)",
                  "Elmcrest Elementary",
                  "Donlin Drive Elementary",
                  "Chestnut Hill Elementary",
                ],
              },
              {
                emoji: "🏨",
                label: "Hotels",
                items: [
                  "Staybridge Suites (Exit 37)",
                  "Best Western Plus (Exit 37)",
                  "Days Inn by Wyndham",
                  "Comfort Inn & Suites",
                ],
              },
              {
                emoji: "🏘️",
                label: "Residential",
                items: [
                  "Rivers Pointe Apartments",
                  "Georgian Court Apartments",
                  "Plymouth Meeting Apartments",
                  "Single-family neighborhoods",
                ],
              },
              {
                emoji: "🚒",
                label: "Fire Stations",
                items: [
                  "Liverpool FD — Main Station",
                  "Station 2 — 7th North St",
                  "Station 3 — Long Branch Rd",
                ],
              },
              {
                emoji: "🍽️",
                label: "Restaurants",
                items: [
                  "Smokey Bones Bar & Grill",
                  "il Limone (Italian)",
                  "Santangelo's",
                  "Multiple chain restaurants",
                ],
              },
              {
                emoji: "🏥",
                label: "Care & Community",
                items: [
                  "Assisted living facilities",
                  "Medical offices",
                  "Churches & community centers",
                  "Parks & playgrounds",
                ],
              },
            ].map((cat) => (
              <div
                key={cat.label}
                className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
              >
                <p className="text-2xl mb-2">{cat.emoji}</p>
                <p className="text-sm font-bold text-white mb-2">
                  {cat.label}
                </p>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-dark-400 leading-relaxed"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-6 bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center"
          >
            <p className="text-danger-200 font-medium">
              These aren&apos;t hypothetical neighbors. These are{" "}
              <strong className="text-white">children</strong>,{" "}
              <strong className="text-white">families</strong>,{" "}
              <strong className="text-white">first responders</strong>, and{" "}
              <strong className="text-white">elderly residents</strong>{" "}
              already being exposed &mdash; right now, every day &mdash;
              and not a single one of them was notified, consulted, or
              asked for consent.
            </p>
          </motion.div>
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
              Rules for <span className="text-danger-500">Them</span>.
              Not for <span className="text-sky-400">You</span>.
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
                their: "Phoenix Tower International sat on federal approval for a year, then started building without notifying a single resident.",
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
                icon: Bug,
                title: "Wildlife & Environmental Impact",
                text: "Research shows RF radiation disrupts honeybee navigation, harms insect populations, and affects bird nesting patterns. No safety standards currently exist to protect any non-human species.",
                link: "https://ehtrust.org/science/bees-butterflies-wildlife-research-electromagnetic-fields-environment/",
                linkLabel: "See Wildlife Research",
                accent: "text-lime-400",
                bg: "bg-lime-950/30",
                border: "border-lime-800/30",
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
              </strong>
              , a nonprofit scientific research organization founded by Dr.
              Devra Davis, former senior advisor to the U.S. Department of
              Health and Human Services.
            </p>
            <a
              href="https://ehtrust.org/science/research-on-cell-tower-and-cell-antenna-radiation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-700/40 text-sky-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
            >
              Browse All Research on EHTrust.org
              <ExternalLink className="w-4 h-4" />
            </a>
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
            className="mb-8"
          >
            <a
              href="https://www.syracuse.com/news/2019/05/some-syracuse-lawmakers-still-wary-of-5g-if-were-wrong-the-risk-is-terrible.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8 hover:border-amber-600/50 transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  📍 Local — Syracuse, NY
                </span>
              </div>
              <p className="text-lg md:text-xl font-black text-white group-hover:text-amber-200 transition-colors mb-2">
                &ldquo;If we&apos;re wrong, the risk is terrible&rdquo;
              </p>
              <p className="text-sm text-dark-300 mb-3">
                Syracuse lawmakers raised concerns about 5G safety back in
                2019. Years later, the towers are going up anyway &mdash;
                and the concerns haven&apos;t been answered.
              </p>
              <p className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                Syracuse.com
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
            <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
              Communities Fighting Back
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  id: "9NKUtKCCGww",
                  title: "Community Pushback Against Cell Towers",
                },
                {
                  id: "WK5HByPJuMI",
                  title: "Residents Organize Against 5G Towers",
                },
                {
                  id: "eK2jUa9Rhmo",
                  title: "The Fight Against Unchecked Tower Placement",
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
              In the News — New York
            </p>
            {[
              {
                source: "NY Post",
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
