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
  Plane,
  ShieldAlert,
  MapPin,
  School,
  Hotel,
  Home,
  Siren,
  UtensilsCrossed,
  HeartPulse,
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
                  title: "No Transparent Environmental Review",
                  text: "No environmental impact assessment has been shared with the public. If one exists, it was never disclosed to the community it would affect.",
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
                0.25 Miles from an Active Landing Corridor. Unlit. And Disrupting Radio Altimetry.
              </h2>
            </div>
          </motion.div>

          {/* Side-by-side: stats left, image right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="grid md:grid-cols-[1fr_auto] gap-6 items-center mb-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { value: "184 ft", label: "Tower height", accent: "text-danger-400" },
                { value: "200 ft", label: "FAA lighting threshold", accent: "text-white" },
                { value: "NONE", label: "Obstruction lighting", accent: "text-danger-500" },
                { value: "~3 mi", label: "From SYR runway", accent: "text-sky-400" },
                { value: "~1,320 ft", label: "From final approach corridor", accent: "text-danger-400" },
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
                </strong>{" "}
                — exactly the aircraft with the oldest, most vulnerable
                avionics. Now a new 5G tower is going up{" "}
                <strong className="text-white">
                  0.3 miles from the landing path
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
            </div>

            {/* Part 4: Lights won't fix the real problem */}
            <div className="bg-dark-900/60 border border-danger-700/40 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-danger-500 uppercase tracking-widest mb-3">
                Even If They Add Lights — The Problem Doesn&apos;t Go Away
              </p>
              <p className="text-dark-100 leading-relaxed text-lg mb-3">
                Lights don&apos;t shrink a tower.{" "}
                <span className="text-danger-400 font-bold">
                  184 feet is still 184 feet.
                </span>
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                Adding obstruction lighting doesn&apos;t change the fact that a
                184-foot steel structure sits in a low-altitude corridor where
                aircraft descend below 1,000 feet — just 3 miles from Syracuse
                Hancock International. Lights make it visible. They don&apos;t
                make it safe. The altitude, the proximity, and the total absence
                of community input are the real problems — and no blinking red
                bulb fixes any of them.
              </p>
              <div className="bg-dark-800/50 rounded-xl p-4 mt-4">
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

      {/* ═══════════════════ AIRPLANE MODE HYPOCRISY ═══════════════════ */}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            {/* Rules they enforce on YOU */}
            <div className="bg-sky-950/20 border border-sky-800/20 rounded-2xl p-6">
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">
                The Rules They Enforce on You
              </p>
              <ul className="space-y-3">
                {[
                  {
                    rule: "Your 1-watt phone must be in airplane mode",
                    why: "The FAA says its signal could interfere with aircraft navigation systems",
                  },
                  {
                    rule: "C-band 5G grounded entire fleets",
                    why: "Airlines canceled flights over fears that tower signals could disrupt altimeters near runways",
                  },
                  {
                    rule: "Exclusion zones around 50 airports",
                    why: "Verizon and AT&T agreed to limit 5G near airports — because the FAA called it 'catastrophic'",
                  },
                  {
                    rule: "Your 2-lb drone is an 'aviation hazard'",
                    why: "Fly it near an airport and you'll face federal charges",
                  },
                ].map((item) => (
                  <li key={item.rule} className="flex items-start gap-3">
                    <span className="text-sky-400 mt-0.5 flex-shrink-0">✓</span>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.rule}
                      </p>
                      <p className="text-xs text-dark-400">{item.why}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rules that DON'T apply to them */}
            <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6">
              <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4">
                The Rules That Don&apos;t Apply to Them
              </p>
              <ul className="space-y-3">
                {[
                  {
                    rule: "184-foot steel tower — zero lights",
                    why: "Invisible to pilots at night, 0.3 miles from an active flight path",
                  },
                  {
                    rule: "16 feet below the FAA threshold",
                    why: "At 200 ft they'd need lights. At 184 ft? Nothing. By design.",
                  },
                  {
                    rule: "3 miles from Syracuse Hancock International",
                    why: "Commercial aircraft descend at less than 1,000 feet in this corridor",
                  },
                  {
                    rule: "No notification to anyone",
                    why: "Not pilots, not residents, not schools, not first responders",
                  },
                ].map((item) => (
                  <li key={item.rule} className="flex items-start gap-3">
                    <span className="text-danger-400 mt-0.5 flex-shrink-0">✗</span>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.rule}
                      </p>
                      <p className="text-xs text-dark-400">{item.why}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
              They grounded flights. They created exclusion zones.
              They banned your phone signal at 30,000 feet.{" "}
              <span className="text-danger-400">
                But a 184-foot unlit steel pole 0.3 miles from a landing
                path? No rules. No lights. No problem.
              </span>
            </p>
            <p className="text-sm text-dark-400 mt-3">
              That&apos;s not safety. That&apos;s selective enforcement.
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
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4">
              Pushing Boundaries That Don&apos;t Need to Be Pushed
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Helicopters Fly{" "}
              <span className="text-danger-500">Near This Height</span>.
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Medical helicopters, police aviation, and news choppers routinely
              operate between 500 and 1,000 feet above ground level. This unlit
              tower sits at{" "}
              <strong className="text-white">184 feet</strong> — directly in
              their low-altitude flight envelope, invisible at night.
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

          {/* Houston crash callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-danger-950/40 border border-danger-800/40 rounded-2xl p-6 md:p-8 mb-6"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0"><AlertTriangle className="w-10 h-10 text-danger-400" /></div>
              <div>
                <p className="text-sm font-bold text-danger-300 mb-2">
                  October 2024 — Houston, Texas
                </p>
                <p className="text-dark-200 leading-relaxed mb-3">
                  A helicopter carrying four people — including a child — struck
                  a radio tower at night. All four died instantly. The tower had
                  known lighting issues. The FAA had issued a notice that its
                  lights were &ldquo;unserviceable.&rdquo; The NTSB is
                  investigating it as controlled flight into terrain.
                </p>
                <p className="text-lg font-black text-white">
                  This tower in Liverpool has{" "}
                  <span className="text-danger-400">
                    no lights at all. By design.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
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
                icon: School,
                label: "Elementary Schools",
                items: [
                  "Long Branch Elementary (0.8 mi)",
                  "Elmcrest Elementary",
                  "Donlin Drive Elementary",
                  "Chestnut Hill Elementary",
                ],
              },
              {
                icon: Hotel,
                label: "Hotels",
                items: [
                  "Staybridge Suites (Exit 37)",
                  "Best Western Plus (Exit 37)",
                  "Days Inn by Wyndham",
                  "Comfort Inn & Suites",
                ],
              },
              {
                icon: Home,
                label: "Residential",
                items: [
                  "Rivers Pointe Apartments",
                  "Georgian Court Apartments",
                  "Plymouth Meeting Apartments",
                  "Single-family neighborhoods",
                ],
              },
              {
                icon: Siren,
                label: "Fire Stations",
                items: [
                  "Liverpool FD — Main Station",
                  "Station 2 — 7th North St",
                  "Station 3 — Long Branch Rd",
                ],
              },
              {
                icon: UtensilsCrossed,
                label: "Restaurants",
                items: [
                  "Smokey Bones Bar & Grill",
                  "il Limone (Italian)",
                  "Santangelo's",
                  "Multiple chain restaurants",
                ],
              },
              {
                icon: HeartPulse,
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
                <p className="text-2xl mb-2"><cat.icon className="w-6 h-6 text-danger-400" /></p>
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

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
            Continue Reading
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/the-facts/health"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Health & Science →
              </p>
              <p className="text-xs text-dark-400">
                RF radiation research, property values, children&apos;s vulnerability, and setback distances.
              </p>
            </Link>
            <Link
              href="/the-facts/community"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-amber-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                Community & Legal →
              </p>
              <p className="text-xs text-dark-400">
                Federal preemption, double standards, and communities fighting back.
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
