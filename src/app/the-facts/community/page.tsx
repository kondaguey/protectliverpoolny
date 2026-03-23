"use client";

import Link from "next/link";
import WeNotAlone from "@/components/WeNotAlone";
import QuickLinks from "@/components/QuickLinks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ShieldOff,
  BellOff,
  FileX,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const rulesData = [
  {
    theirs: "184-foot tower. Zero local approval.",
    yours: "You need a permit to build a 6-foot fence.",
  },
  {
    theirs: "Health concerns? Legally banned from the decision.",
    yours: "Your kids absorb 10× more RF. The law says that's irrelevant.",
  },
  {
    theirs: "Sat on approval for a year. Built without telling a soul.",
    yours: "Start a project without a permit? Fined. Stopped. Sued.",
  },
  {
    theirs: "184 feet tall, unlit, 0.25 mi from a runway.",
    yours: "Fly a drone near an airport? Grounded immediately.",
  },
  {
    theirs:
      "100+ bald eagles roost 1.7 miles away. No wildlife review conducted.",
    yours: "Disturb an eagle nest on your property? $100,000 fine.",
  },
  {
    theirs:
      'RF safety limits unchanged since 1996. A court called them "arbitrary."',
    yours:
      '"Within guidelines" — guidelines from before the first iPhone existed.',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

function RulesSlider() {
  const [[activeIndex, direction], setSlide] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const next = activeIndex + newDirection;
    if (next >= 0 && next < rulesData.length) {
      setSlide([next, newDirection]);
    }
  };

  const goTo = (i: number) => {
    setSlide([i, i > activeIndex ? 1 : -1]);
  };

  const rule = rulesData[activeIndex];

  return (
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
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4">
            Ask Yourself
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
            The Rules Themselves Are{" "}
            <span className="text-danger-500">Unjust</span>.
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Their Rules vs. Your Rules.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Arrow buttons */}
          <button
            onClick={() => paginate(-1)}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
              activeIndex === 0
                ? "bg-dark-800/30 text-dark-600 cursor-not-allowed"
                : "bg-dark-800 hover:bg-dark-700 text-white shadow-lg"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={activeIndex === rulesData.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${
              activeIndex === rulesData.length - 1
                ? "bg-dark-800/30 text-dark-600 cursor-not-allowed"
                : "bg-dark-800 hover:bg-dark-700 text-white shadow-lg"
            }`}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card container */}
          <div className="overflow-hidden rounded-2xl min-h-[260px] md:min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-4"
              >
                {/* Their Rules */}
                <div className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-7 md:p-8 flex flex-col justify-center">
                  <p className="text-xs text-amber-400 uppercase font-black tracking-widest mb-4">
                    Their Rules
                  </p>
                  <p className="text-white text-xl md:text-2xl font-black leading-snug">
                    {rule.theirs}
                  </p>
                </div>

                {/* Your Rules */}
                <div className="bg-danger-950/30 border border-danger-800/40 rounded-2xl p-7 md:p-8 flex flex-col justify-center">
                  <p className="text-xs text-danger-400 uppercase font-black tracking-widest mb-4">
                    Your Rules
                  </p>
                  <p className="text-danger-200 text-xl md:text-2xl font-black leading-snug">
                    {rule.yours}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Counter + dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-xs text-dark-500 font-bold tabular-nums">
              {activeIndex + 1} / {rulesData.length}
            </span>
            <div className="flex gap-2">
              {rulesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-danger-500 scale-125"
                      : "bg-dark-700 hover:bg-dark-500"
                  }`}
                  aria-label={`Go to comparison ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CommunityLegalPage() {
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
                <span className="text-amber-400">Your Home Value.</span>{" "}
                <br className="hidden sm:block" />
                <span className="text-danger-500">Their Profit.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-lg text-dark-400 max-w-lg leading-relaxed"
              >
                Property values can drop up to 20% near cell towers. A
                documented phenomenon that we can <em>prove</em>.
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
                  src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/615a2f24-06f0-440b-f4a0-4e4a24506900/public"
                  alt="Community impact"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={[
          { label: "Property Values", id: "property-values" },
          { label: "The State Land Loophole", id: "state-land-loophole" },
          { label: "What Other Towns Did", id: "social-proof" },
          { label: "Take Action", id: "cta" },
        ]}
      />

      {/* ═══════════════════ PROPERTY VALUES ═══════════════════ */}
      <section id="property-values" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                Your Home Is{" "}
                <span className="text-danger-500">Worth Less Now</span>
              </h3>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                This isn't speculation. Peer-reviewed studies, federal
                agencies, and realtors across the country confirm that cell
                towers reduce property values — sometimes dramatically.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  stat: "94%",
                  label:
                    "of home buyers say they would pay less or avoid a property near a cell tower",
                  source: "NISLAPP Survey",
                },
                {
                  stat: "Up to 20%",
                  label:
                    "decline in property values reported by licensed real estate appraisers and peer-reviewed studies",
                  source: "Multiple Studies",
                },
                {
                  stat: "79%",
                  label:
                    "say they would never purchase or rent a property within a few blocks of a cell tower",
                  source: "REALTOR Magazine",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center"
                >
                  <p className="text-4xl md:text-5xl font-black text-danger-400 mb-1">
                    {item.stat}
                  </p>
                  <p className="text-sm text-dark-300 leading-relaxed mb-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-dark-500 italic">{item.source}</p>
                </div>
              ))}
            </div>

            {/* HUD callout */}
            <div className="bg-amber-950/30 border border-amber-800/30 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-bold text-amber-300 mb-2">
                    The Federal Government Already Knows
                  </h4>
                  <p className="text-dark-200 text-base leading-relaxed mb-3">
                    The U.S. Department of Housing and Urban Development (HUD)
                    classifies cell towers as{" "}
                    <strong className="text-white">
                      "Hazards and Nuisances."
                    </strong>{" "}
                    FHA appraisers are required to flag nearby towers as
                    potential deficiencies, comment on their impact on
                    marketability, and verify the home isn't within the
                    tower's engineered fall distance.
                  </p>
                  <p className="text-sm text-dark-400">
                    The California Association of Realtors' Property
                    Sellers Questionnaire lists cell towers alongside other
                    "neighborhood noise, nuisance or other
                    problems."
                  </p>
                </div>
              </div>
            </div>

            {/* Realtor quote */}
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 mb-6">
              <Quote className="w-6 h-6 text-dark-600 mb-3" />
              <p className="text-dark-200 text-base leading-relaxed italic mb-3">
                "In my opinion from extensive experience I will tell you
                the cell tower will negatively effect the price of the property
                between 15%–30%. Not only that but close to 90% of my clients
                would refuse to consider looking at or buying the
                property."
              </p>
              <p className="text-sm text-dark-500">
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
                  <p className="text-lg text-white font-bold mb-2">
                    {item.title}
                  </p>
                  <p className="text-base text-dark-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE STATE LAND LOOPHOLE ═══════════════════ */}
      <section id="state-land-loophole" className="py-16 md:py-24 px-4 bg-dark-900/30 scroll-mt-24">
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
              <h2 className="text-3xl md:text-4xl font-bold">
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
              <p className="text-dark-200 text-lg leading-relaxed mb-4">
                Under normal circumstances, any company wanting to build a
                184-foot commercial structure in a residential area would need
                to go through{" "}
                <strong className="text-white">local zoning approval</strong>,{" "}
                <strong className="text-white">
                  environmental impact reviews
                </strong>
                , and{" "}
                <strong className="text-white">
                  mandatory neighbor notification
                </strong>
                .
              </p>
              <p className="text-dark-200 text-lg leading-relaxed">
                Phoenix Tower International is finding a way around all of it.
                They secured a lease on land owned by the{" "}
                <strong className="text-white">
                  New York State Thruway Authority (NYSTA)
                </strong>{" "}
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
                  icon: ShieldOff,
                  title: "No Local Zoning Review",
                  text: "State-owned land is exempt from local zoning ordinances. The Town of Salina had no authority to approve or deny the build.",
                },
                {
                  icon: BellOff,
                  title: "No Neighbor Notification",
                  text: "There is no public hearing, no mailed notice, no opportunity for residents to weigh in. Residents are discovering a tower going up in their yards.",
                },
                {
                  icon: FileX,
                  title: "No Transparent Environmental Review",
                  text: "No environmental impact assessment has been shared with the public. If one exists, it was never disclosed to the community it would affect.",
                },
                {
                  icon: DollarSign,
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
                  <fact.icon className="w-6 h-6 text-danger-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {fact.title}
                  </h3>
                  <p className="text-base text-dark-300 leading-relaxed">
                    {fact.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ THE RULES ARE UNJUST ═══════════════════ */}
      <RulesSlider />

      {/* ═══════════════════ SOCIAL PROOF ═══════════════════ */}
      <div id="social-proof" className="scroll-mt-24">
        <WeNotAlone />
      </div>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section id="cta" className="py-20 md:py-28 px-4 scroll-mt-24">
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
            can't do it again.
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
              <p className="text-sm text-dark-400">
                RF radiation research, children's vulnerability, and
                setback distances.
              </p>
            </Link>
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Aviation & Safety →
              </p>
              <p className="text-sm text-dark-400">
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
              <p className="text-sm text-dark-400">
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
