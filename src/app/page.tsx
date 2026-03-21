"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";

const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
  { ssr: false }
);
const ReactCompareSliderImage = dynamic(
  () =>
    import("react-compare-slider").then((mod) => mod.ReactCompareSliderImage),
  { ssr: false }
);
import {
  TrendingDown,
  Radio,
  PlaneTakeoff,
  Bird,
  ArrowRight,
  AlertTriangle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const problems = [
  {
    icon: TrendingDown,
    title: "Tanking Property Values",
    stat: "Up to 9.7% Drop",
    description:
      "Studies show homes near cell towers lose 2.4–9.7% of their value. But it gets worse: a National Institute for Science, Law & Public Policy survey found 94% of home buyers are less interested in properties near a tower, and 79% said they wouldn't buy at all. HUD classifies towers as \"Hazards and Nuisances\" and restricts FHA mortgages in tower fall zones.",
    source:
      "https://ehsciences.org/cell-towers-drop-property-values/",
    sourceLabel: "EHS: Property Value Research",
    color: "text-danger-500",
    bg: "bg-danger-950/40",
    border: "border-danger-800/30",
  },
  {
    icon: Radio,
    title: "Health & Radiation Concerns",
    stat: "\"Clear Evidence\"",
    description:
      "The National Toxicology Program found \"clear evidence\" of cancer from RF radiation in its landmark $30M study. The Ramazzini Institute independently confirmed increased tumor rates at cell-tower-level exposures. Even telecom companies warn investors of litigation risk in their SEC filings.",
    source: "https://ehtrust.org/scientific-research-on-5g-and-health/",
    sourceLabel: "EHT: Cell Tower Research",
    color: "text-amber-500",
    bg: "bg-amber-950/30",
    border: "border-amber-800/30",
  },
  {
    icon: PlaneTakeoff,
    title: "Aviation Safety Hazard",
    stat: "184 Feet",
    description:
      "At 184 feet, this tower falls just below the FAA's 200-foot lighting threshold — no lights required. It sits 0.3 miles from the landing path where aircraft descend below 1,000 feet, just 3 miles from Syracuse Hancock International. The NTSB has documented fatal collisions with unlit towers exactly like this. And the FAA has warned that 5G signals interfere with radar altimeters — the instruments pilots depend on to land safely — now 0.3 miles from final approach.",
    source: "https://www.ntsb.gov/safety/safety-recs/recletters/A-13-016-017.pdf",
    sourceLabel: "NTSB: Tower Collision Hazards",
    color: "text-sky-500",
    bg: "bg-sky-950/30",
    border: "border-sky-800/30",
  },
  {
    icon: Bird,
    title: "Federally Protected Wildlife at Risk",
    stat: "7M Birds/Year",
    description:
      "Communication towers kill 7 million birds per year in North America. This tower site is adjacent to Onondaga Lake — New York's largest urban bald eagle roost — and surrounded by turkey vultures, both federally protected under the Migratory Bird Treaty Act. No lights, no environmental review, no accountability.",
    source: "https://abcbirds.org/strategies/communications-towers/",
    sourceLabel: "American Bird Conservancy",
    color: "text-lime-500",
    bg: "bg-lime-950/30",
    border: "border-lime-800/30",
  },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideLabels = ["Day View", "Night View", "Map"];
  const slideCaptions = [
    "A gray pole sitting incomplete for months — an eyesore blending into the background.",
    "At night, this 184-foot unlit tower is completely invisible — to pilots, to drivers, to everyone.",
    "Tower location on New York State Thruway Authority land, surrounded by residential neighborhoods.",
  ];
  const prev = () => setSlideIndex((i) => (i === 0 ? slideLabels.length - 1 : i - 1));
  const next = () => setSlideIndex((i) => (i === slideLabels.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-danger-950/20 via-dark-950 to-dark-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-danger-600/8 rounded-full blur-[120px]" />

        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-20">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/50 border border-danger-700/40 rounded-full text-danger-300 text-xs font-bold uppercase tracking-wider animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" />
              Active Threat — Liverpool, NY
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black text-center leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            A 17-Story Cellular Tower
            <br />
            <span className="text-danger-400 italic">In Our Backyards.</span>
            <br />
            <span className="text-danger-500 underline decoration-danger-500/60 underline-offset-4">
              And They&apos;re Not Telling Us.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-dark-400 text-center max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", textWrap: "pretty" } as React.CSSProperties}
          >
            Right now, a 184-foot commercial cell tower is going up on New York
            State Thruway Authority land in Liverpool. No local approval. And
            no one told you... because they knew you&apos;d protest it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 text-danger-400 text-center font-black uppercase tracking-wide"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
          >
            But We Can Still Fight This.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center mt-10"
          >
            <ChevronDown className="w-6 h-6 text-dark-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ SLIDER ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2
              className="font-bold text-center mb-3"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Where They&apos;re Trying To Install It
            </h2>
            <p className="text-dark-400 text-center mb-6 max-w-lg mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              Tower location on New York State Thruway Authority land, surrounded by residential neighborhoods, gradeschools, workplaces, playing fields, and parks.
            </p>

            {/* Page selector */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-dark-900 border border-dark-700/50 rounded-xl p-1">
                {slideLabels.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setSlideIndex(i)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                      slideIndex === i
                        ? i === 0
                          ? "bg-amber-600 text-white shadow-lg"
                          : i === 1
                          ? "bg-indigo-600 text-white shadow-lg"
                          : "bg-emerald-600 text-white shadow-lg"
                        : "text-dark-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={1}
            className="relative"
          >
            {/* Chevron Left */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 backdrop-blur-sm border border-dark-600/50 rounded-full text-white hover:bg-black/80 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Chevron Right */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 backdrop-blur-sm border border-dark-600/50 rounded-full text-white hover:bg-black/80 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Day Slider */}
            {slideIndex === 0 && (
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/tower-current.jpg"
                      alt="Gray pole sitting incomplete in daylight"
                      style={{ objectFit: "cover" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/tower-finished.jpg"
                      alt="Conceptual rendering of the fully equipped tower"
                      style={{ objectFit: "cover" }}
                    />
                  }
                  defaultPosition={35}
                  style={{ height: "auto", aspectRatio: "16/10" }}
                />
                <div className="absolute top-4 left-14 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-sm font-bold text-white border border-dark-600/50">
                  Currently
                </div>
                <div className="absolute top-4 right-14 px-3 py-1.5 bg-danger-600/90 backdrop-blur-sm rounded-lg text-sm font-bold text-white border border-danger-500/50">
                  What&apos;s Coming
                </div>
              </div>
            )}

            {/* Night Slider */}
            {slideIndex === 1 && (
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/tower-night-current.jpg"
                      alt="Unlit tower invisible against the night sky"
                      style={{ objectFit: "cover" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/tower-night-finished.jpg"
                      alt="Conceptual rendering at night"
                      style={{ objectFit: "cover" }}
                    />
                  }
                  defaultPosition={35}
                  style={{ height: "auto", aspectRatio: "16/10" }}
                />
                <div className="absolute top-4 left-14 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-sm font-bold text-white border border-dark-600/50">
                  Invisible at Night
                </div>
                <div className="absolute top-4 right-14 px-3 py-1.5 bg-danger-600/90 backdrop-blur-sm rounded-lg text-sm font-bold text-white border border-danger-500/50">
                  What&apos;s Coming
                </div>
              </div>
            )}

            {/* Map */}
            {slideIndex === 2 && (
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40" style={{ aspectRatio: "16/10" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2921.5!2d-76.18508!3d43.10192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDA2JzA2LjkiTiA3NsKwMTEnMDYuMyJX!5e1!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
            )}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slideLabels.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  slideIndex === i
                    ? "bg-danger-500 scale-125"
                    : "bg-dark-700 hover:bg-dark-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-xs text-dark-500 text-center mt-3">
            {slideCaptions[slideIndex]}
          </p>
        </div>
      </section>

      {/* ═══════════════════ PROBLEM CARDS ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
          >
            <h2
              className="font-bold text-center mb-3"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Why a 184-Foot Cell Tower Threatens Liverpool
            </h2>
            <p className="text-dark-400 text-center mb-12 max-w-lg mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              This isn&apos;t just an eyesore. It&apos;s a direct threat to your
              property, your health, and your safety. And we&apos;ve got the
              receipts to prove it.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i + 1}
                className={`${problem.bg} ${problem.border} border rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300`}
              >
                <problem.icon
                  className={`w-10 h-10 ${problem.color} mb-4`}
                />
                <div
                  className={`text-2xl font-black ${problem.color} mb-1`}
                >
                  {problem.stat}
                </div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
                  {problem.title}
                </h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  {problem.description}
                </p>
                <a
                  href={problem.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 mt-4 text-xs font-semibold ${problem.color} hover:underline`}
                >
                  {problem.sourceLabel}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TAX CALLOUT ═══════════════════ */}
      <section className="py-16 md:py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-10">
            <p className="text-lg md:text-xl text-dark-100 font-medium leading-relaxed mb-4">
              You pay some of the{" "}
              <strong className="text-white">
                highest taxes in the entire country
              </strong>{" "}
              to live in New York State&mdash;only for that same state to cut
              backdoor deals on{" "}
              <strong className="text-white">your land</strong>, with{" "}
              <strong className="text-white">your tax dollars</strong>, that
              will tank your property value and put your family&apos;s health at
              risk.
            </p>
            <p className="text-dark-400 leading-relaxed">
              Let that sink in. The state that takes more from you than almost
              any other didn&apos;t just fail to protect you&mdash;they{" "}
              <span className="text-danger-400 font-bold">
                actively helped a private corporation profit at your expense
              </span>
              , and they don&apos;t even have the decency to tell you about it.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════ NO ONE VOTED ═══════════════════ */}
      <section className="py-12 md:py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="font-black text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            No Public Vote. No Public Notice.
            <br />
            <span className="text-danger-500">No Consent.</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            Not a single resident, homeowner, school board, or elected official
            in Liverpool was consulted, polled, notified, or given any
            opportunity to weigh in on a 184-foot commercial tower going up in a
            residential neighborhood. This isn&apos;t democracy. This is a
            transaction&mdash;and your community is the product.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ ASK YOURSELF WHY ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4">
              Think About It
            </p>
            <h2
              className="font-black text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Liverpool Already Has Full Cellular Coverage.{" "}
              <span className="text-danger-500">So Why Build This?</span>
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              Pull out your phone right now. Check your signal. You
              already have coverage. So ask yourself —{" "}
              <strong className="text-white">
                why are they really doing this?
              </strong>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="space-y-4 mb-8"
          >
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
              <p className="text-sm font-bold text-white mb-3">
                They&apos;re telling you it&apos;s to make the highways
                &ldquo;smart.&rdquo;
              </p>
              <p className="text-dark-300 leading-relaxed mb-4">
                Smart highways. Smart infrastructure. Smart cities. Every
                time they say &ldquo;smart,&rdquo; what they mean is{" "}
                <strong className="text-white">connected</strong> —
                connected to sensors, cameras, and tracking systems that
                monitor every vehicle, every mile, every minute of every day.
              </p>
              <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5">
                <p className="text-lg md:text-xl font-black text-white leading-relaxed">
                  Ask yourself:{" "}
                  <span className="text-danger-400">
                    Do you really want to be tracked every mile you drive on the highway?
                  </span>
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  label: "Your Location",
                  detail: "Tracked in real-time via cell tower triangulation — no GPS needed",
                },
                {
                  label: "Your Speed",
                  detail: "Monitored continuously — automated enforcement is one firmware update away",
                },
                {
                  label: "Your Patterns",
                  detail: "Where you go, when, how often. Stored indefinitely. Sold to the highest bidder.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4"
                >
                  <p className="text-sm font-bold text-danger-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-dark-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-center"
          >
            <p className="text-dark-400 text-sm max-w-lg mx-auto">
              This isn&apos;t innovation. This is{" "}
              <strong className="text-white">infrastructure for surveillance</strong>{" "}
              — disguised as a cell tower, planted on state land where no one
              can object, and built without a single public hearing. That&apos;s
              not progress. That&apos;s{" "}
              <span className="text-danger-400 font-bold">draconian</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ UNITY CALLOUT ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto bg-dark-900/60 border border-dark-800/50 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4">
            A PSA for Those Wondering...
          </p>
          <h2
            className="font-black text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
          >
            This is{" "}
            <span className="text-danger-500">NOT</span>{" "}a Left vs. Right Issue.
          </h2>
          <p className="text-lg md:text-xl font-bold text-white mb-4">
            It&apos;s an{" "}
            <span className="text-danger-500">us</span>{" "}vs.{" "}
            <span className="text-danger-500">them</span>{" "}issue.
          </p>
          <p className="text-dark-300 leading-relaxed max-w-xl mx-auto">
            We know the world is divided right now. That&apos;s by design.
            But this? This isn&apos;t about who you voted for or what cable
            news you watch. A private corporation is building a 184-foot
            industrial structure in your neighborhood — and not a single
            one of us was asked. We either come together on this, or
            it&apos;s game over.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ INLINE CTA ═══════════════════ */}
      <section className="py-20 md:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto text-center"
        >
          <h2
            className="font-black mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            This Stops When{" "}
            <span className="text-danger-500">We Stop It.</span>
          </h2>
          <p className="text-dark-400 mb-8 max-w-xl mx-auto" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
            They&apos;re bypassing every process designed to protect you. The only way to
            fight back is with our voices—loudly, together, and on the record.
          </p>
          <Link
            href="/take-action"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger-600 hover:bg-danger-500 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40 hover:shadow-danger-800/60 hover:scale-[1.03]"
          >
            Sign the Petition & Take Action
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════ STICKY MOBILE CTA ═══════════════════ */}
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
