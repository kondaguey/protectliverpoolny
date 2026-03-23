"use client";

import Link from "next/link";
import WeNotAlone from "@/components/WeNotAlone";
import QuickLinks from "@/components/QuickLinks";
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
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left — Title & text */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-900/40 border border-sky-700/40 rounded-full text-sky-300 text-xs font-bold uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5" />
                  Aviation & Safety
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-black leading-[0.95] tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 9vw, 5.5rem)" }}
              >
                184 Feet. <span className="text-danger-500">Unlit.</span>
                <br />
                In the <span className="text-danger-500">Final Approach.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-dark-400 max-w-lg leading-relaxed"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
              >
                0.25 miles from the Runway 10 approach corridor where aircraft
                descend at 1,000 feet toward Syracuse Hancock. No lights. No
                notification to pilots. And the FAA signed off on it.
              </motion.p>
            </div>

            {/* Right — FlightRadar image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/82026018-9e77-4ea8-1424-674b34a40100/public"
                  alt="Flightradar24 showing aircraft on final approach near the tower"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[10px] text-dark-500 mt-2 text-center italic">
                Live Flightradar24 data — aircraft descending directly over the
                tower site
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={[
          { label: "Altitude & Obstruction", id: "altitude" },
          { label: "Flight Path Proximity", id: "flight-path" },
          { label: "Bird Strike Hazard", id: "bird-strike" },
          { label: "5G Altimeter Interference", id: "5g-altimeter" },
          { label: "Lights Won't Fix It", id: "lights-wont-fix" },
        ]}
      />

      {/* ═══════════════════ ALTITUDE & OBSTRUCTION ═══════════════════ */}
      <section id="altitude" className="py-16 md:py-24 px-4 scroll-mt-24">
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
              The Altitude Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              184 Feet of Steel in{" "}
              <span className="text-danger-500">Low-Altitude Airspace</span>
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              This tower sits in the exact altitude band where aircraft,
              helicopters, and medevac flights operate daily — and it has no
              lights.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="grid md:grid-cols-[1fr_auto] gap-6 items-center mb-10"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                {
                  value: "184 ft",
                  label: "Tower height",
                  accent: "text-danger-400",
                },
                {
                  value: "200 ft",
                  label: "FAA lighting threshold",
                  accent: "text-white",
                },
                {
                  value: "NONE",
                  label: "Obstruction lighting",
                  accent: "text-danger-500",
                },
                {
                  value: "~3 mi",
                  label: "From SYR Runway 10",
                  accent: "text-sky-400",
                },
                {
                  value: "0.25 mi",
                  label: "From Runway 10 approach path",
                  accent: "text-danger-400",
                },
                {
                  value: "~1,000 ft",
                  label: "Aircraft altitude on approach",
                  accent: "text-sky-400",
                },
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

          {/* Who uses this approach */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-10"
          >
            <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              Who Flies This Approach?
            </p>
            <p className="text-dark-200 text-base leading-relaxed mb-5">
              Runway 10 isn't some low-traffic strip. This approach corridor handles some of the
              heaviest, most critical air traffic in Central New York:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  label: "🛩️ 174th Attack Wing — NY Air National Guard",
                  detail:
                    "Military operations at SYR including MQ-9 Reapers and military transport aircraft (C-130s, C-17s). A 184-foot unlit tower near their approach path.",
                },
                {
                  label: "📦 FedEx & UPS Cargo Freighters",
                  detail:
                    "Heavy cargo planes landing at night, often in poor weather — exactly when an invisible steel pole is most dangerous.",
                },
                {
                  label: "🇺🇸 Air Force 2 & VIP Government Flights",
                  detail:
                    "SYR receives military VIP traffic when senior government officials visit Central NY. An unlit obstruction in the Runway 10 approach puts these flights at risk.",
                },
                {
                  label: "✈️ Regional Jets — Oldest Avionics",
                  detail:
                    "SYR is served heavily by regional carriers using the oldest, most vulnerable altimeters — the same ones the FAA said can't be trusted around 5G.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4"
                >
                  <p className="text-sm font-bold text-white mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-dark-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Who uses this approach */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-10"
          >
            <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              Who Flies This Approach?
            </p>
            <p className="text-dark-200 text-base leading-relaxed mb-5">
              Runway 10 isn't some low-traffic strip. This corridor handles some of the
              heaviest, most critical air traffic in Central New York:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  label: "🛩️ 174th Attack Wing — NY Air National Guard",
                  detail:
                    "Military operations at SYR including MQ-9 Reapers and military transport aircraft. A 184-foot unlit tower near their approach path.",
                },
                {
                  label: "📦 FedEx & UPS Cargo Freighters",
                  detail:
                    "Heavy cargo planes landing at night, often in poor weather — exactly when an invisible steel pole is most dangerous.",
                },
                {
                  label: "✈️ Regional Jets — Oldest Avionics",
                  detail:
                    "SYR is served heavily by regional carriers with the oldest, most vulnerable altimeters — the same ones the FAA said can't be trusted around 5G.",
                },
                {
                  label: "🎓 Low-Altitude Flight Training",
                  detail:
                    "Student pilots and flight schools regularly practice approaches, touch-and-gos, and pattern work at SYR — often at the lowest altitudes, in the exact corridor this tower occupies.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4"
                >
                  <p className="text-sm font-bold text-white mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-dark-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Helicopters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Helicopters Fly{" "}
              <span className="text-danger-500">Near This Height</span>.
            </h3>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Medical helicopters, police aviation, and news choppers routinely
              operate between 500 and 1,000 feet above ground level. This tower
              sits at <strong className="text-white">184 feet</strong> —
              directly in their low-altitude flight envelope. Lit or not, it's a
              steel pole they have to dodge in an emergency.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1.5}
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

          {/* Helicopter stats bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              {
                num: "40",
                label: "Tower-related aviation accidents (2008–2018)",
              },
              { num: "36", label: "Fatalities from tower collisions" },
              {
                num: "33%",
                label:
                  "Of all helicopter accidents involve low-altitude obstacles",
              },
              { num: "0", label: "Lights on this 184-foot tower" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 text-center"
              >
                <p className="text-2xl font-black text-danger-400">{s.num}</p>
                <p className="text-[10px] text-dark-500 mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ═══════════════════ FLIGHT PATH PROXIMITY ═══════════════════ */}
          <motion.div
            id="flight-path"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-6 mt-12"
          >
            <p className="text-xs font-bold text-danger-500 uppercase tracking-widest mb-3">
              The Flight Path
            </p>
            <p className="text-dark-100 leading-relaxed text-lg mb-3">
              This tower sits{" "}
              <span className="text-danger-400 font-black">
                0.25 miles
              </span>{" "}
              from the Runway 10 approach corridor — the path aircraft use
              when landing eastbound toward Syracuse Hancock, descending at{" "}
              <strong className="text-white">700–1,000 feet</strong>.
            </p>
            <p className="text-dark-300 leading-relaxed mb-3">
              That's roughly 1,320 feet of lateral separation between live air
              traffic at low altitude and a 184-foot obstruction. Pilots on
              visual approach in this corridor — especially at dusk, at night,
              or in marginal weather — have no way to see it.
            </p>
            <p className="text-danger-300 font-bold leading-relaxed">
              And even if you could see it — a 184-foot steel pole 0.25 miles
              from the final approach path is still a 184-foot steel pole 0.25
              miles from the final approach path. Lit or unlit, the obstruction
              doesn't move.
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
              Under <strong className="text-white">14 CFR Part 77.9</strong>,
              any structure within 20,000 feet of an airport runway that exceeds
              a 100:1 slope from the nearest runway requires FAA notification.
              At roughly 3 miles (~15,840 feet) from SYR Runway 10, that threshold is
              approximately <strong className="text-white">158 feet AGL</strong>
              .
            </p>
            <p className="text-dark-200 leading-relaxed">
              This tower is <strong className="text-white">184 feet</strong> —{" "}
              <span className="text-danger-400 font-bold">
                26 feet above the FAA notification surface
              </span>{" "}
              . Phoenix Tower was required by federal law to file FAA Form
              7460-1. The FAA reviewed it and signed off with{" "}
              <strong className="text-white">no lighting requirements</strong> .
              Read that again: the rules say a 184-foot structure 3 miles from
              Runway 10 doesn't need a single light on it.
            </p>
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
                    'Helicopter carrying four people — including a child — struck a radio tower at night. All four died instantly. The tower had known lighting issues. The FAA had issued a notice that its lights were "unserviceable."',
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
                "Numerous antenna towers below 200 feet AGL may not be marked,
                lighted, or charted as obstructions"
              </em>{" "}
              and calls them a{" "}
              <strong className="text-white">
                significant risk to low-altitude flight
              </strong>{" "}
              . That's not our opinion. That's the FAA's.
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

      {/* ═══════════════════ BIRD STRIKE HAZARD ═══════════════════ */}
      <section id="bird-strike" className="py-16 md:py-24 px-4 bg-lime-950/10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-4">
              Wildlife &amp; Eagle Strike Hazard
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              The Airport Pays to Push Eagles{" "}
              <span className="text-lime-400">Away</span>.{" "}
              <span className="text-danger-500">This Tower Pulls Them In</span>.
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Bald eagles and other large birds are documented nesting on cell
              towers across the U.S. — and over 100 eagles winter less than 2
              miles from this site.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-lime-950/20 border border-lime-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >


            {/* Direct EA Quote Block */}
            <blockquote className="border-l-4 border-lime-500/50 pl-4 mb-5">
              <p className="text-dark-100 italic leading-relaxed mb-2">
                "Parcels would not be leased to new developers who would use the
                land for purposes that are incompatible with airport operations
                or that{" "}
                <strong className="text-lime-300 not-italic">
                  attract wildlife hazards
                </strong>
                ."
              </p>
              <cite className="text-xs text-dark-400 not-italic">
                — SYR Draft Environmental Assessment, §5.7.3 (April 2024)
              </cite>
            </blockquote>

            <blockquote className="border-l-4 border-lime-500/50 pl-4 mb-5">
              <p className="text-dark-100 italic leading-relaxed mb-2">
                "The project area could potentially support{" "}
                <strong className="text-lime-300 not-italic">bald eagles</strong>
                … the large trees within the forested portion of the project area
                could support bald eagle nesting."
              </p>
              <cite className="text-xs text-dark-400 not-italic">
                — SYR Draft Environmental Assessment, §4.2.2 (July 2021)
              </cite>
            </blockquote>

            <p className="text-dark-200 leading-relaxed mb-4">
              That's the airport's own policy — applied to land{" "}
              <em className="text-white not-italic font-bold">further</em> from the
              runway than this tower. Meanwhile,{" "}
              <strong className="text-white">0.25 miles from the active
              descent corridor</strong> — where planes pass at{" "}
              <strong className="text-danger-400">500–1,000 ft AGL</strong>,
              peak bird-strike altitude — someone is erecting the exact structure
              bald eagles are{" "}
              <a href="https://www.fws.gov/media/recommended-best-practices-communication-tower-design-siting-construction-operation" target="_blank" rel="noopener noreferrer" className="text-lime-300 underline decoration-lime-400/40 hover:decoration-lime-400">
                documented to nest on
              </a>{" "}
              across the country.
            </p>

            <p className="text-dark-200 leading-relaxed mb-5">
              Over{" "}
              <strong className="text-white">100 bald eagles</strong> winter at
              the{" "}
              <a href="https://onondagaaudubon.com/" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-lime-400/40 hover:decoration-lime-400">
                Onondaga Lake roost
              </a>{" "}
              — <strong className="text-danger-400">1.7 miles away</strong>.
              The airport spends millions pushing eagles out.
              This tower pulls them back in.
            </p>

            {/* Hard stats banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                {
                  stat: "2,200%",
                  label: "Increase in\neagle strikes\n(1990–2013)",
                  color: "text-danger-400",
                },
                {
                  stat: "$425,945",
                  label: "Average cost\nper eagle\nstrike",
                  color: "text-amber-400",
                },
                {
                  stat: "78%",
                  label: "Of all strikes\noccur below\n1,000 ft AGL",
                  color: "text-sky-400",
                },
                {
                  stat: "50",
                  label: "Record eagle\nstrikes in\n2024 alone",
                  color: "text-lime-400",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center"
                >
                  <p
                    className={`text-2xl md:text-3xl font-black ${item.color}`}
                  >
                    {item.stat}
                  </p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1 whitespace-pre-line leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-dark-200 text-base leading-relaxed mb-5 bg-dark-950/40 rounded-xl p-4 border border-dark-700/20">
              <strong className="text-white">Source:</strong>{" "}
              <a href="https://digitalcommons.unl.edu/icwdm_usdanwrc/1831/" target="_blank" rel="noopener noreferrer" className="text-amber-300 underline decoration-amber-300/40 hover:decoration-amber-300">
                A USDA Wildlife Services study
              </a>{" "}
              in cooperation with the FAA documented 200 bald
              eagle strikes between 1990&ndash;2013 — a{" "}
              <strong className="text-danger-400">2,200% increase</strong> over
              that period. Over half of all eagle collisions caused aircraft
              damage. Nine people were injured in five separate incidents.
              Strikes primarily occurred near airfields at or below 305 meters
              (~1,000 ft) AGL — exactly where planes approach this tower.
            </p>

            <div className="bg-dark-950/60 rounded-xl p-5 md:p-6 border border-dark-700/30 mb-5">
              <p className="text-base md:text-lg font-bold text-white mb-3">
                <a
                  href="https://www.syrairport.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  What SYR Already Spends Money Doing:
                </a>
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: "💥",
                    label: "Pyrotechnic deterrents",
                    detail:
                      '"Bangers" and "screamers" fired to scare birds from runways',
                  },
                  {
                    icon: "🌿",
                    label: "Habitat modification",
                    detail:
                      "No standing water, short grass — eliminates what attracts raptors",
                  },
                  {
                    icon: "🦅",
                    label: "Eagle relocation permits",
                    detail:
                      "Federal permits to handle bald eagles and snowy owls on airport grounds",
                  },
                  {
                    icon: "📋",
                    label: "Wildlife Hazard Management Plan",
                    detail:
                      "FAA-required comprehensive plan to reduce bird strike risk",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-dark-900/60 rounded-lg p-3"
                  >
                    <p className="text-sm font-bold text-white mb-1">
                      {item.icon} {item.label}
                    </p>
                    <p className="text-xs text-dark-300 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-950/60 rounded-xl p-5 md:p-6 border border-dark-700/30 mb-5">
              <p className="text-base md:text-lg font-bold text-white mb-3">
                📜{" "}
                <a
                  href="https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5200-33C.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline"
                >
                  FAA Advisory Circular 150/5200-33C
                </a>
              </p>
              <p className="text-dark-200 text-base leading-relaxed mb-3">
                The FAA's own guidance document —{" "}
                <a href="https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5200-33C.pdf" target="_blank" rel="noopener noreferrer" className="text-amber-300 underline decoration-amber-300/40 hover:decoration-amber-300">
                  "Hazardous Wildlife Attractants On or Near Airports"
                </a>{" "}
                — specifically warns against wildlife attractants within{" "}
                <strong className="text-white">
                  10,000 feet of runways serving turbine-powered aircraft
                </strong>{" "}
                and within{" "}
                <strong className="text-white">5 statute miles</strong> to
                protect approach, departure, and circling airspace.
              </p>
              <p className="text-dark-200 text-base leading-relaxed mb-3">
                The FAA's own language{" "}
                <strong className="text-white">
                  specifically calls out cell towers
                </strong>
                :{" "}
                <em className="text-amber-200 not-italic">
                  "Cellular communication towers&hellip; increasingly attract
                  large birds, such as osprey, eagles, herons, and vultures, for
                  nesting and rearing their young."
                </em>{" "}
                The advisory notes that young birds who fledge from nests on
                towers return to similar structures to reproduce — meaning one
                nest becomes a{" "}
                <strong className="text-danger-400">
                  generational attractant
                </strong>
                .
              </p>
              <p className="text-dark-200 text-base leading-relaxed font-bold">
                The airport is following FAA rules to reduce bird strike risk.{" "}
                <span className="text-danger-400">
                  This tower violates the spirit of every single one of them.
                </span>
              </p>
            </div>

            <div className="bg-dark-900/40 rounded-xl p-5 md:p-6 border border-lime-800/20 mb-5">
              <p className="text-base md:text-lg font-bold text-white mb-3">
                🔍{" "}
                <a
                  href="https://wildlife.faa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-400 hover:underline"
                >
                  The Numbers Don't Lie
                </a>
              </p>
              <p className="text-dark-200 text-base leading-relaxed mb-3">
                The FAA's Wildlife Strike Database has logged over{" "}
                <a href="https://wildlife.faa.gov/" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-lime-400/40 hover:decoration-lime-400">
                  320,000 wildlife strike reports
                </a>{" "}
                since 1990. Wildlife strikes cost U.S. aviation{" "}
                <strong className="text-white">~$400 million annually</strong>.
                In 2016, an NTSB-investigated crash near Birchwood Airport in
                Alaska killed all four people aboard after a bald eagle struck
                the aircraft's tail structure. In December 2023, a bald eagle
                hit a Southwest Airlines 737 engine on approach to Tampa,
                causing{" "}
                <strong className="text-white">
                  significant fan blade damage
                </strong>{" "}
                — triggering an NTSB investigation.
              </p>
              <p className="text-dark-200 text-base leading-relaxed">
                Syracuse Hancock has its own strike history. Most strikes at SYR
                occur during takeoff and landing,{" "}
                <strong className="text-white">
                  particularly below 500 feet AGL
                </strong>
                . A 184-foot tower attracting eagles 0.25 miles from the
                approach path puts large raptors directly into the most
                dangerous altitude zone. That isn't negligent —{" "}
                <strong className="text-danger-400">it's reckless</strong>.
              </p>
            </div>

            <p className="text-lg font-black text-white mb-4">
              Two federal programs. One pushing eagles{" "}
              <span className="text-lime-400">away</span> from planes. One
              pulling them <span className="text-danger-400">toward</span> them.{" "}
              Nobody coordinated. Nobody asked.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://digitalcommons.unl.edu/icwdm_usdanwrc/1831/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                USDA Study: Eagle Strike Trends
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://wildlife.faa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                FAA Wildlife Strike Database
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5200-33C.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                AC 150/5200-33C (Cell Towers Cited)
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR1003.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                NTSB Report — US Airways 1549
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://www.faa.gov/airports/airport_safety/wildlife/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                FAA Wildlife Hazard Mitigation
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://syrairport.org/wp-content/uploads/2024/04/Draft-EA-04102024-Compressed-Try-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                SYR Draft EA (2024) — §5.7.3 Wildlife Hazard Clause
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-dark-500 text-xs mt-4 text-center italic">
              See how it's affecting{" "}
              <Link href="/the-facts/wildlife" className="text-lime-400 hover:underline not-italic font-semibold">
                wildlife &amp; the environment →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ AIRPLANE MODE + 5G ALTIMETER ═══════════════════ */}
      <section id="5g-altimeter" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Let This Sink In
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              They Make You Put Your Phone on{" "}
              <span className="text-danger-500">Airplane Mode</span>.
            </h2>
            <p className="text-xl md:text-2xl font-black text-dark-300">
              Meanwhile, a 5G tower 1,000 feet away blasts up to{" "}
              <span className="text-amber-400">30,000 watts</span>.
            </p>
          </motion.div>

          {/* Altimeter interference card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="bg-dark-900/60 border border-amber-800/30 rounded-2xl p-6 md:p-8 mb-8"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              5G Altimeter Interference — A Documented Hazard
            </p>
            <p className="text-dark-200 leading-relaxed mb-3">
              In 2022, the FAA issued{" "}
              <strong className="text-white">
                emergency Airworthiness Directive AD 2022-05-04
              </strong>{" "}
              — skipping the standard 30-day comment period — because 5G C-Band
              signals were interfering with aircraft radar altimeters. It
              affected{" "}
              <strong className="text-white">
                2,442 aircraft in the United States
              </strong>{" "}
              . The FAA's own words:{" "}
              <em className="text-amber-300">
                &quot;Radio altimeters cannot be relied upon to perform their
                intended function.&quot;
              </em>
            </p>
            <p className="text-dark-200 leading-relaxed mb-3">
              Airlines were{" "}
              <strong className="text-white">prohibited from landing</strong> at
              affected airports. Buffer zones were mandated around 50+ airports.
              Verizon and AT&T voluntarily limited 5G service because the FAA
              called it{" "}
              <strong className="text-white">&quot;catastrophic.&quot;</strong>{" "}
              Major airlines have since retrofitted — but as of late 2025,{" "}
              <strong className="text-white">
                regional jets and cargo operators still use older altimeters
              </strong>{" "}
              , especially at smaller U.S. airports. Upgrades cost
              $20,000–$50,000 per aircraft, and the FAA extended the compliance
              deadline multiple times through March 2025.
            </p>
            <p className="text-dark-200 leading-relaxed mb-4">
              Syracuse Hancock is{" "}
              <strong className="text-white">
                served heavily by regional carriers
              </strong>{" "}
              — exactly the aircraft with the oldest, most vulnerable avionics.
              Now a new 5G tower is going up{" "}
              <strong className="text-white">
                0.25 miles from the final approach path
              </strong>{" "}
              , adding another RF source where these aircraft descend below
              1,000 feet. No aviation safety review has been shared with the
              public.
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
                yours: "Your 1-watt phone must be in airplane mode",
                yoursDetail:
                  "The FAA says your pocket phone could interfere with navigation systems.",
                theirs: "A 5G tower broadcasting up to 30,000 watts — no restrictions",
                theirsDetail:
                  "0.25 miles from the final approach path, emitting C-Band 24/7. No airplane mode for that.",
              },
              {
                yours: "5G grounded entire airline fleets in 2022",
                yoursDetail:
                  "The FAA called altimeter interference \"catastrophic.\" Exclusion zones around 50+ airports. Carriers voluntarily delayed rollouts.",
                theirs: "A new 5G tower in the approach corridor — no review",
                theirsDetail:
                  "Regional jets at SYR still use the oldest altimeters. No coordination with the airport or airlines. No interference analysis shared.",
              },
              {
                yours: "Your 2-lb drone is a federal aviation hazard",
                yoursDetail:
                  "Fly within 5 miles of an airport without clearance and you face federal charges.",
                theirs:
                  "A 184-foot unlit steel pole in the landing corridor — no problem",
                theirsDetail:
                  "Built 16 feet below the lighting threshold, by design. Invisible to pilots at night.",
              },
            ].map((pair, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-3">
                <div className="bg-sky-950/20 border border-sky-800/20 rounded-xl p-6">
                  <p className="text-xs text-sky-400 uppercase font-bold tracking-widest mb-2">
                    They enforce this
                  </p>
                  <p className="text-base font-bold text-white mb-2">
                    ✓ {pair.yours}
                  </p>
                  <p className="text-sm text-dark-400 leading-relaxed">
                    {pair.yoursDetail}
                  </p>
                </div>
                <div className="bg-danger-950/20 border border-danger-800/30 rounded-xl p-6">
                  <p className="text-xs text-danger-400 uppercase font-bold tracking-widest mb-2">
                    But not this
                  </p>
                  <p className="text-base font-bold text-white mb-2">
                    ✗ {pair.theirs}
                  </p>
                  <p className="text-sm text-dark-400 leading-relaxed">
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
              <span className="text-danger-400">"catastrophic."</span>
            </p>
            <p className="text-lg md:text-xl font-black text-danger-400 mt-2 leading-relaxed">
              But a new 5G tower 0.25 miles from the final approach at Syracuse
              Hancock? No exclusion zone. No coordination. No problem.
            </p>
            <p className="text-sm text-dark-300 mt-4 font-medium">
              And if they slap a light on it?{" "}
              <span className="text-danger-400 font-bold">
                It's still 184 feet of steel broadcasting C-Band in the same
                spot.
              </span>{" "}
              That's not safety. That's a PR move.
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


      {/* ═══════════════════ LIGHTS WON'T FIX IT ═══════════════════ */}
      <section id="lights-wont-fix" className="pt-6 md:pt-10 pb-16 md:pb-24 px-4 scroll-mt-24">
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
              That's Why Even Slapping a Light on This{" "}
              <span className="text-danger-500">Won't Work</span>.
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Don't let anyone tell you a blinking red bulb makes a 184-foot
              steel obstruction in a final approach corridor acceptable. It
              doesn't. Here's why.
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
            <p
              className="font-black leading-[0.95] tracking-tighter text-center mb-6"
              style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
            >
              Lights don't shrink a tower.{" "}
              <span className="text-danger-500">
                184 feet is still 184 feet.
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  point: "The obstruction doesn't move",
                  detail:
                    "Lit or unlit, the tower is still 184 feet of steel sitting 0.25 miles due south of where aircraft descend at 1,000 feet. A light changes nothing about its physical presence in the corridor.",
                },
                {
                  point: "5G interference is still 5G interference",
                  detail:
                    "A blinking red bulb doesn't stop C-Band RF from disrupting radar altimeters. The FAA called this \"catastrophic\" — lights won't fix electromagnetic interference.",
                },
                {
                  point: "Lights fail",
                  detail:
                    'In Houston (2024), four people died — including a child — when their helicopter hit a tower with known lighting issues. The FAA had posted a notice that its lights were "unserviceable." Lights are only as reliable as their next maintenance check.',
                },
                {
                  point: "Helicopters fly below 184 feet",
                  detail:
                    "Medevac, police, and news choppers operate at altitudes where even a perfectly lit tower is a lethal obstacle. Seeing it doesn't mean you can avoid it in an emergency.",
                },
                {
                  point: "No one was consulted — with or without lights",
                  detail:
                    "The issue isn't just the light. It's that a private corporation dropped a 184-foot commercial structure in a residential flight corridor without telling a single resident, pilot, or elected official.",
                },
                {
                  point: "It doesn't fix the property value damage",
                  detail:
                    'A lit cell tower is still a cell tower. HUD still classifies it as a "Hazard and Nuisance." Your home is still worth less. A light doesn\'t change real estate math.',
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
                  They didn't — because safety was never the point.
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
                <span className="text-white font-semibold">
                  474 Electronics Pkwy
                </span>
                <span className="text-dark-400">Municipality</span>
                <span className="text-white font-semibold">Salina</span>
                <span className="text-dark-400">Tax Map #</span>
                <span className="text-white font-semibold">075.-01-11.1</span>
                <span className="text-dark-400">Acreage</span>
                <span className="text-white font-semibold">87.10 acres</span>
                <span className="text-dark-400">Mailing Address</span>
                <span className="text-white font-semibold">
                  PO Box 189, Albany, NY
                </span>
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

      {/* ═══════════════════ WE'RE NOT ALONE CTA ═══════════════════ */}
      <WeNotAlone />

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
                Property values, the state land loophole, double standards, and
                the legal framework.
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
                RF radiation research, children's vulnerability, and setback
                distances.
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
                Eagles, bird collisions, honeybees, and the Audubon data they
                can't ignore.
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
