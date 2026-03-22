"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Quote,
  Radio,
  ExternalLink,
  ArrowRight,
  Plane,
  ShieldAlert,
  FileWarning,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function AviationSafetyPage() {
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
              <Plane className="w-3.5 h-3.5" />
              Aviation &amp; Safety
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 9vw, 5.5rem)" }}
          >
            184 Feet.{" "}
            <span className="text-danger-500">Unlit.</span>
            <br />
            In the{" "}
            <span className="text-danger-500">Final Approach.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-dark-400 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            0.25 miles due south of where aircraft descend at 1,000 feet toward Syracuse Hancock.
            No lights. No notification to pilots. And the FAA signed off on it.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ STATS + IMAGE ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="grid md:grid-cols-[1fr_auto] gap-6 items-center mb-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { value: "184 ft", label: "Tower height", accent: "text-danger-400" },
                { value: "200 ft", label: "FAA lighting threshold", accent: "text-white" },
                { value: "NONE", label: "Obstruction lighting", accent: "text-danger-500" },
                { value: "~3 mi", label: "From SYR runway", accent: "text-sky-400" },
                { value: "0.25 mi", label: "Due south of final approach", accent: "text-danger-400" },
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
            </div>

            {/* They Live image */}
            <img
              src="/protect-they-live-logo.png"
              alt="They Live — see the tower, see the plane"
              className="w-full max-w-[280px] mx-auto rounded-2xl border border-dark-700/50 shadow-2xl shadow-black/40"
            />
          </motion.div>

          {/* ═══════════════════ FLIGHT PATH PROXIMITY ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-danger-500 uppercase tracking-widest mb-3">
              The Flight Path
            </p>
            <p className="text-dark-100 leading-relaxed text-lg mb-3">
              This tower sits{" "}
              <span className="text-danger-400 font-black">
                0.25 miles due south
              </span>{" "}
              of the final approach path where aircraft
              descend toward Syracuse Hancock at approximately{" "}
              <strong className="text-white">1,000 feet</strong>.
            </p>
            <p className="text-dark-300 leading-relaxed mb-3">
              That&apos;s roughly 1,320 feet of lateral separation
              between live air traffic at low altitude and a 184-foot
              obstruction. Pilots on visual approach in this
              corridor &mdash; especially at dusk, at night, or in
              marginal weather &mdash; have no way to see it.
            </p>
            <p className="text-danger-300 font-bold leading-relaxed">
              And even if you could see it &mdash; a 184-foot steel pole
              0.25 miles from the final approach path is still a 184-foot
              steel pole 0.25 miles from the final approach path.
              Lit or unlit, the obstruction doesn&apos;t move.
            </p>
          </motion.div>

          {/* ═══════════════════ THE MATH ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 mb-6"
          >
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
          </motion.div>

          {/* ═══════════════════ 5G ALTIMETER INTERFERENCE ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              5G Altimeter Interference — A Documented Hazard
            </p>
            <p className="text-dark-200 leading-relaxed mb-3">
              In 2022, the FAA issued{" "}
              <strong className="text-white">
                emergency Airworthiness Directive AD 2022-05-04
              </strong>
              {" "}— skipping the standard 30-day comment period — because
              5G C-Band signals were interfering with aircraft radar
              altimeters. It affected{" "}
              <strong className="text-white">
                2,442 aircraft in the United States
              </strong>
              . The FAA&apos;s own words:{" "}
              <em className="text-amber-300">
                &quot;Radio altimeters cannot be relied upon to perform their
                intended function.&quot;
              </em>
            </p>
            <p className="text-dark-200 leading-relaxed mb-3">
              Airlines were{" "}
              <strong className="text-white">
                prohibited from landing
              </strong>{" "}
              at affected airports. Buffer zones were mandated around 50+
              airports. Verizon and AT&amp;T voluntarily limited 5G service
              because the FAA called it{" "}
              <strong className="text-white">
                &quot;catastrophic.&quot;
              </strong>{" "}
              Major airlines have since retrofitted — but as of late 2025,{" "}
              <strong className="text-white">
                regional jets and cargo operators still use older altimeters
              </strong>
              , especially at smaller U.S. airports. Upgrades cost $20,000–$50,000
              per aircraft, and the FAA extended the compliance deadline
              multiple times through March 2025.
            </p>
            <p className="text-dark-200 leading-relaxed mb-4">
              Syracuse Hancock is{" "}
              <strong className="text-white">
                served heavily by regional carriers
              </strong>
              {" "}— exactly the aircraft with the oldest, most vulnerable
              avionics. Now a new 5G tower is going up{" "}
              <strong className="text-white">
                0.25 miles from the final approach path
              </strong>
              , adding another RF source where these aircraft descend below
              1,000 feet. No aviation safety review has been shared with
              the public.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.federalregister.gov/d/2022-03967"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
              >
                FAA AD 2022-05-04 (Federal Register)
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.faa.gov/newsroom/faa-statements-5g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
              >
                FAA Official Statements on 5G
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* ═══════════════════ PEOPLE HAVE DIED ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
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
                {
                  location: "Houston, TX (2024)",
                  detail:
                    "Helicopter carrying four people — including a child — struck a radio tower at night. All four died instantly. The tower had known lighting issues. The FAA had issued a notice that its lights were \"unserviceable.\"",
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
            <p className="text-sm text-dark-300 leading-relaxed mb-3">
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
            <p className="text-lg font-black text-white">
              This tower in Liverpool has{" "}
              <span className="text-danger-400">
                no lights at all. By design.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ AIRPLANE MODE HYPOCRISY ═══════════════════ */}
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
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4">
              Let This Sink In
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              They Make You Put Your Phone on{" "}
              <span className="text-danger-500">Airplane Mode</span>.
            </h2>
            <p className="text-xl md:text-2xl font-black text-dark-300">
              Meanwhile, they&apos;re building{" "}
              <span className="text-white">this</span>.
            </p>
          </motion.div>

          {/* Paired rows — each "rule" directly counters the other */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="space-y-4 mb-8"
          >
            {[
              {
                yours: "5G signals grounded entire airline fleets",
                yoursDetail: "The FAA called C-Band interference with radar altimeters \"catastrophic.\" Airlines were prohibited from landing. Exclusion zones were mandated around 50+ airports.",
                theirs: "A new 5G tower 0.25 miles from the final approach — no review",
                theirsDetail: "This tower adds another C-Band RF source exactly where aircraft descend below 1,000 feet. Regional jets at SYR still use the oldest, most vulnerable altimeters. No aviation safety review has been shared.",
              },
              {
                yours: "Your 1-watt phone must be in airplane mode",
                yoursDetail: "The FAA says a phone signal from your pocket could interfere with aircraft navigation systems.",
                theirs: "A 184-foot commercial transmitter — no restrictions",
                theirsDetail: "A tower broadcasting at hundreds of watts, 0.25 miles from the final approach path, emitting 24/7. No airplane mode for that.",
              },
              {
                yours: "Your 2-lb drone is a federal aviation hazard",
                yoursDetail: "Fly it within 5 miles of an airport without clearance and you face federal charges.",
                theirs: "A 184-foot steel pole in a landing corridor — no problem",
                theirsDetail: "Built 16 feet below the lighting threshold, by design. No lights, no charting, invisible to pilots at night.",
              },
              {
                yours: "Verizon & AT&T voluntarily limited 5G near airports",
                yoursDetail: "Even the carriers admitted the risk was real and delayed rollouts near dozens of airports.",
                theirs: "Phoenix Tower builds with zero coordination",
                theirsDetail: "No consultation with SYR airport, no coordination with the airlines that land here, no public disclosure of any interference analysis.",
              },
            ].map((pair, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-3">
                <div className="bg-sky-950/20 border border-sky-800/20 rounded-xl p-5">
                  <p className="text-[10px] text-sky-400 uppercase font-bold tracking-widest mb-2">
                    They enforce this
                  </p>
                  <p className="text-sm font-bold text-white mb-1">
                    ✓ {pair.yours}
                  </p>
                  <p className="text-xs text-dark-400 leading-relaxed">
                    {pair.yoursDetail}
                  </p>
                </div>
                <div className="bg-danger-950/20 border border-danger-800/30 rounded-xl p-5">
                  <p className="text-[10px] text-danger-400 uppercase font-bold tracking-widest mb-2">
                    But not this
                  </p>
                  <p className="text-sm font-bold text-white mb-1">
                    ✗ {pair.theirs}
                  </p>
                  <p className="text-xs text-dark-400 leading-relaxed">
                    {pair.theirsDetail}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* The punchline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8 text-center mb-6"
          >
            <p className="text-lg md:text-xl font-black text-white leading-relaxed">
              The FAA grounded flights over 5G. They created exclusion zones.
              They call altimeter interference{" "}
              <span className="text-danger-400">&ldquo;catastrophic.&rdquo;</span>
            </p>
            <p className="text-lg md:text-xl font-black text-danger-400 mt-2 leading-relaxed">
              But a new 5G tower 0.25 miles from the final approach at Syracuse Hancock?
              No exclusion zone. No coordination. No problem.
            </p>
            <p className="text-sm text-dark-300 mt-4 font-medium">
              And if they slap a light on it?{" "}
              <span className="text-danger-400 font-bold">
                It&apos;s still 184 feet of steel broadcasting C-Band in the same spot.
              </span>{" "}
              That&apos;s not safety. That&apos;s a PR move.
            </p>
          </motion.div>

          {/* Sources */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              {
                label: "NPR: 5G Grounding Regional Jets Near Airports",
                url: "https://www.npr.org/2022/01/28/1076546117/5g-cleared-for-takeoff-near-more-airports-but-some-regional-jets-might-be-ground",
              },
              {
                label: "FAA: 14 CFR § 91.21 — PED Regulation",
                url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-A/section-91.21",
              },
              {
                label: "FCC: 47 CFR § 22.925 — Airborne Cell Ban",
                url: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-22/subpart-H/section-22.925",
              },
              {
                label: "NTSB: Unmarked Tower Safety Recs",
                url: "https://www.ntsb.gov/safety/safety-recs/recletters/A-13-016-017.pdf",
              },
            ].map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark-900/60 border border-dark-800/50 rounded-lg text-[10px] text-dark-400 hover:text-white transition-colors font-semibold"
              >
                <ExternalLink className="w-3 h-3" />
                {src.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ HELICOPTER DANGER ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-danger-950/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Helicopters Fly{" "}
              <span className="text-danger-500">Near This Height</span>.
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Medical helicopters, police aviation, and news choppers routinely
              operate between 500 and 1,000 feet above ground level. This
              tower sits at{" "}
              <strong className="text-white">184 feet</strong> — directly in
              their low-altitude flight envelope. Lit or not, it&apos;s
              a steel pole they have to dodge in an emergency.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid md:grid-cols-3 gap-4 mb-8"
          >
            {[
              {
                icon: Plane,
                title: "Medical Helicopters",
                detail:
                  "Upstate University Hospital and Mercy Flight operate medevac flights across Onondaga County — at night, in emergencies, at low altitude. An invisible 184-foot steel tower in their path is a death sentence for patients and crews.",
                stat: "500–1,000 ft",
                statLabel: "typical medevac altitude",
              },
              {
                icon: ShieldAlert,
                title: "Police Aviation",
                detail:
                  "Law enforcement helicopters fly low-altitude search and pursuit operations, often at night with limited forward visibility. They don't get advance notice of every new structure going up on Thruway land.",
                stat: "300–800 ft",
                statLabel: "typical patrol altitude",
              },
              {
                icon: Radio,
                title: "News & Traffic Choppers",
                detail:
                  "News and traffic helicopters operate daily across the Syracuse metro area, circling at low altitudes during rush hour and breaking events — exactly the kind of flights this tower threatens.",
                stat: "600–1,200 ft",
                statLabel: "typical news flight altitude",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-5"
              >
                <item.icon className="w-8 h-8 text-danger-400 mb-3" />
                <p className="text-sm font-bold text-white mb-2">
                  {item.title}
                </p>
                <p className="text-xs text-dark-400 mb-4 leading-relaxed">
                  {item.detail}
                </p>
                <div className="border-t border-dark-800/50 pt-3">
                  <p className="text-lg font-black text-danger-400">
                    {item.stat}
                  </p>
                  <p className="text-[10px] text-dark-500 uppercase tracking-widest">
                    {item.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {[
              { num: "40", label: "Tower-related aviation accidents (2008–2018)" },
              { num: "36", label: "Fatalities from tower collisions" },
              { num: "33%", label: "Of all helicopter accidents involve low-altitude obstacles" },
              { num: "0", label: "Lights on this 184-foot tower" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-danger-400">
                  {s.num}
                </p>
                <p className="text-[10px] text-dark-500 mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ LIGHTS WON'T FIX IT ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              A Light Doesn&apos;t{" "}
              <span className="text-danger-500">Fix This</span>.
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Don&apos;t let anyone tell you a blinking red bulb makes
              a 184-foot steel obstruction in a final approach corridor
              acceptable. It doesn&apos;t. Here&apos;s why.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-danger-950/30 border-2 border-danger-700/50 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="font-black leading-[0.95] tracking-tighter text-center mb-6"
               style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
            >
              Lights don&apos;t shrink a tower.{" "}
              <span className="text-danger-500">
                184 feet is still 184 feet.
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  point: "The obstruction doesn't move",
                  detail: "Lit or unlit, the tower is still 184 feet of steel sitting 0.25 miles due south of where aircraft descend at 1,000 feet. A light changes nothing about its physical presence in the corridor.",
                },
                {
                  point: "5G interference is still 5G interference",
                  detail: "A blinking red bulb doesn't stop C-Band RF from disrupting radar altimeters. The FAA called this \"catastrophic\" — lights won't fix electromagnetic interference.",
                },
                {
                  point: "Lights fail",
                  detail: "In Houston (2024), four people died — including a child — when their helicopter hit a tower with known lighting issues. The FAA had posted a notice that its lights were \"unserviceable.\" Lights are only as reliable as their next maintenance check.",
                },
                {
                  point: "Helicopters fly below 184 feet",
                  detail: "Medevac, police, and news choppers operate at altitudes where even a perfectly lit tower is a lethal obstacle. Seeing it doesn't mean you can avoid it in an emergency.",
                },
                {
                  point: "No one was consulted — with or without lights",
                  detail: "The issue isn't just the light. It's that a private corporation dropped a 184-foot commercial structure in a residential flight corridor without telling a single resident, pilot, or elected official.",
                },
                {
                  point: "It doesn't fix the property value damage",
                  detail: "A lit cell tower is still a cell tower. HUD still classifies it as a \"Hazard and Nuisance.\" Your home is still worth less. A light doesn't change real estate math.",
                },
              ].map((item) => (
                <div
                  key={item.point}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
                >
                  <p className="text-white font-bold mb-2 flex items-start gap-2">
                    <span className="text-danger-400 flex-shrink-0">✗</span>
                    {item.point}
                  </p>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-danger-950/40 border border-danger-800/40 rounded-xl p-5 text-center">
              <p className="text-lg md:text-xl font-black text-white leading-relaxed">
                If a light made this safe, they would have put one on it.{" "}
                <span className="text-danger-400">
                  They didn&apos;t — because safety was never the point.
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-5 mb-6"
          >
            <div className="bg-dark-800/50 rounded-xl p-4">
              <p className="text-[10px] font-bold text-dark-500 uppercase tracking-widest mb-2">
                Site Parcel Data
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
                <span className="text-dark-400">Address</span>
                <span className="text-white font-semibold">474 Electronics Pkwy</span>
                <span className="text-dark-400">Municipality</span>
                <span className="text-white font-semibold">Salina</span>
                <span className="text-dark-400">Tax Map #</span>
                <span className="text-white font-semibold">075.-01-11.1</span>
                <span className="text-dark-400">Acreage</span>
                <span className="text-white font-semibold">87.10 acres</span>
                <span className="text-dark-400">Mailing Address</span>
                <span className="text-white font-semibold">PO Box 189, Albany, NY</span>
              </div>
            </div>
          </motion.div>

          {/* FAA links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap gap-3 mb-6"
          >
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
                ← Community &amp; Land Value
              </p>
              <p className="text-xs text-dark-400">
                Property values, the state land loophole, double standards, and the legal framework.
              </p>
            </Link>
            <Link
              href="/the-facts/health"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Health Impacts
              </p>
              <p className="text-xs text-dark-400">
                RF radiation research, children&apos;s vulnerability, and setback distances.
              </p>
            </Link>
            <Link
              href="/the-facts/wildlife"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-lime-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-lime-400 transition-colors mb-1">
                Wildlife &amp; Environment →
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
          SIGN THE PETITION &amp; TAKE ACTION
        </Link>
      </div>
    </>
  );
}
