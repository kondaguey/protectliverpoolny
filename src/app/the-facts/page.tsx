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
  MapPin,
  School,
  Hotel,
  Home,
  Siren,
  UtensilsCrossed,
  HeartPulse,
  Construction,
  Car,
  TrendingDown,
  GraduationCap,
  Megaphone,
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
                href="https://www.faa.gov/airports/airport_safety/airportdata_5010/menu/nfdcfacilitiesexport.cfm?Region=&District=&State=NY&County=&City=Syracuse&Use=&Certification="
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
                label: "NBC News: Airlines vs. 5G — FAA 'Catastrophic' Warning",
                url: "https://www.nbcnews.com/science/science-news/airlines-wireless-companies-5g-rcna12780",
              },
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
              This is Life or Death
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Helicopters Fly at{" "}
              <span className="text-danger-500">Exactly This Height</span>.
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Medical helicopters, police aviation, and news choppers routinely
              operate between 500 and 1,000 feet above ground level. This unlit
              tower sits at{" "}
              <strong className="text-white">184 feet</strong>{" "}— directly in
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

          {/* Sources */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              {
                label: "NTSB: Helicopter Safety Recommendations",
                url: "https://www.ntsb.gov/safety/safety-recs/Pages/default.aspx",
              },
              {
                label: "US Helicopter Safety Team Data",
                url: "https://ushst.org",
              },
              {
                label: "NTSB: Unmarked Tower Recs (A-13-016-017)",
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
                icon: TrendingDown,
                title: "Property Values Are Everyone's Problem",
                text: "Studies consistently show that cell towers reduce property values within a 1-mile radius. In a interconnected housing market like Liverpool and Salina, that ripple affects comparable sales across the entire area.",
              },
              {
                icon: Eye,
                title: "It's an Eyesore — Period",
                text: "184 feet of steel monopole towering over a residential neighborhood isn't just a safety concern. It's visual blight that degrades the community's character and quality of life.",
              },
              {
                icon: GraduationCap,
                title: "Your Kids Go to School Here",
                text: "Long Branch Elementary, Lakeshore Road Elementary, Liverpool Middle — they're all nearby. Even if your house isn't in the shadow of the tower, your children may be spending their days in it.",
              },
              {
                icon: Scale,
                title: "It's About Accountability",
                text: "A private company used state land to bypass local government entirely. If residents don't push back, it tells every telecom company that Salina is open for business — no questions asked.",
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
                title: "7 Million Birds Killed by Towers Annually",
                text: "The U.S. Fish & Wildlife Service estimates that communication towers kill approximately 7 million birds per year in North America — primarily nocturnal migrants disoriented by steady-burning warning lights. Unlit towers under 200 feet, like the proposed Liverpool tower, are among the hardest for birds to detect.",
                link: "https://www.fws.gov/story/threats-birds-communication-towers",
                linkLabel: "U.S. Fish & Wildlife Service",
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
                1,500–3,000 ft
              </p>
              <p className="text-lg font-bold text-white mb-2">
                Minimum Recommended Setback
              </p>
              <p className="text-sm text-dark-300 max-w-xl mx-auto">
                Multiple peer-reviewed studies (Levitt & Lai 2010, Dode et al.
                2011, Pearce 2024) and the New Hampshire State 5G Commission
                recommend cell towers be a minimum of 1,500 to 3,000 feet
                from residences, schools, and hospitals.
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

          {/* Property Values Section */}
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

          {/* The Birds and the Bees Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-3">
                The Ecological Impact No One Is Talking About
              </p>
              <h3
                className="font-black text-white mb-3"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
              >
                The Birds{" "}
                <span className="text-lime-400">&amp;</span> the Bees
              </h3>
              <p className="text-dark-400 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
                While the mainstream algorithms try to tell you there&apos;s
                &quot;no conclusive evidence&quot; of wildlife being affected
                by cell towers — the data tells a very different story.
              </p>
            </div>

            {/* The Birds */}
            <div className="bg-lime-950/20 border border-lime-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <h4 className="font-bold text-lime-300 mb-4" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}>
                The Birds: 7 Million Deaths Per Year
              </h4>
              <p className="text-dark-200 text-sm leading-relaxed mb-4">
                According to the{" "}
                <strong className="text-white">American Bird Conservancy</strong>,
                communication towers kill approximately{" "}
                <strong className="text-white">
                  7 million birds per year
                </strong>{" "}
                in North America — primarily nocturnal migrants disoriented by
                tower lights. Songbirds, raptors, and migratory species are
                especially vulnerable when skies are overcast or foggy.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-dark-900/40 rounded-xl p-4">
                  <p className="text-lime-400 font-black text-xl mb-1">100+</p>
                  <p className="text-white font-bold text-sm mb-1">
                    Bald Eagles at Onondaga Lake
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    Onondaga Lake — directly adjacent to the tower site — is
                    the largest urban bald eagle wintering roost in New York
                    State. Protected under the{" "}
                    <strong className="text-white">
                      Bald and Golden Eagle Protection Act
                    </strong>
                    . Fines up to $250,000 per kill.
                  </p>
                </div>
                <div className="bg-dark-900/40 rounded-xl p-4">
                  <p className="text-danger-400 font-black text-xl mb-1">Lose-Lose</p>
                  <p className="text-white font-bold text-sm mb-1">
                    Lights Don&apos;t Fix This
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    No lights? Birds can&apos;t see it. Steady-burning
                    lights? The ABC confirms they{" "}
                    <strong className="text-white">attract and disorient</strong>{" "}
                    birds, causing more deaths. Even flashing lights still kill
                    30% of what steady lights do. There is no version of this
                    tower that isn&apos;t lethal to protected species.
                  </p>
                </div>
              </div>

              <p className="text-dark-300 text-xs leading-relaxed mb-3">
                Turkey vultures — abundant at the tower site — are also{" "}
                <strong className="text-white">federally protected</strong>{" "}
                under the Migratory Bird Treaty Act of 1918. As large,
                slow-soaring raptors, they are among the most
                collision-prone species with tall structures.
              </p>

              <a
                href="https://abcbirds.org/strategies/communications-towers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:underline"
              >
                American Bird Conservancy: Tower Collisions
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* The Bees */}
            <div className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <h4 className="font-bold text-amber-300 mb-4" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}>
                The Bees: Peer-Reviewed, Proven, and Devastating
              </h4>
              <p className="text-dark-200 text-sm leading-relaxed mb-4">
                This one isn&apos;t even debatable. Peer-reviewed research has{" "}
                <strong className="text-white">proven</strong> that cell tower
                RF radiation decimates honeybee populations. Studies
                demonstrate that exposure disrupts bee navigation, reduces
                colony strength, and triggers colony collapse — a direct
                threat to the food supply, since honeybees pollinate roughly{" "}
                <strong className="text-white">
                  one-third of all food humans eat
                </strong>
                .
              </p>
              <a
                href="https://ui.adsabs.harvard.edu/abs/2022E%26ES..979a2013K/abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
              >
                Peer-Reviewed Study: RF Effects on Honeybees
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Bottom line */}
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 text-center">
              <p className="text-dark-200 text-sm leading-relaxed max-w-2xl mx-auto">
                An unlit, 184-foot tower in documented bald eagle habitat,
                adjacent to New York&apos;s largest urban eagle roost,
                surrounded by turkey vultures and honeybee populations — with
                no environmental review shared with the public. If a single
                protected species is killed, someone is{" "}
                <strong className="text-white">legally liable</strong>. And
                we&apos;ll be watching.
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
                  <MapPin className="w-3 h-3" /> Local — Syracuse, NY
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
