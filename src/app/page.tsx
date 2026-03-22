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
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Building2,
  FileText,
  Users,
  Landmark,
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
    title: "Your Home Is Worth Less. Right Now.",
    stat: "Up to 20%",
    bullets: [
      "Your home could lose up to 20% of its value — that's $40,000–$60,000 gone on a $300K house",
      "94% of buyers say they'd pay less or flat out refuse to buy near a cell tower",
      "79% of buyers won't even LOOK at a property within a few blocks of a tower",
      "HUD classifies cell towers as \"Hazards and Nuisances\" — your home is now flagged",
      "If you have an FHA mortgage, the fall zone restriction could tank your refinance options",
    ],
    source:
      "https://ehsciences.org/cell-towers-drop-property-values/",
    sourceLabel: "Full Property Value Research",
    color: "text-danger-500",
    bg: "bg-danger-950/40",
    border: "border-danger-800/30",
  },
  {
    icon: Radio,
    title: "Your Family Is Being Radiated 24/7.",
    stat: "\"Clear Evidence\"",
    bullets: [
      "The NTP's $30M government study found \"clear evidence\" of cancer from RF radiation — the same radiation this tower emits",
      "A child's brain absorbs 10× more cumulative RF energy from a tower than from a phone call — and they can't move away from it",
      "A federal court ruled the FCC's safety standards \"arbitrary and capricious\" — they haven't been updated since 1996",
      "AT&T, Verizon, and T-Mobile all warn their own investors about litigation risk from RF — but won't warn YOU",
      "73.6% of all peer-reviewed studies on people living near towers found harmful health effects",
    ],
    source: "https://ehtrust.org/scientific-research-on-5g-and-health/",
    sourceLabel: "Peer-Reviewed Research",
    color: "text-amber-500",
    bg: "bg-amber-950/30",
    border: "border-amber-800/30",
  },
  {
    icon: PlaneTakeoff,
    title: "Planes Are Landing 0.25 Miles Away. This Tower Has No Lights.",
    stat: "184 ft",
    bullets: [
      "0.25 miles from an active landing corridor for Syracuse Hancock International Airport",
      "184 feet tall — just under the FAA's 200-foot threshold, so zero lighting is required by law. Intentional.",
      "The FAA issued an emergency directive proving 5G C-Band signals interfere with the altimeters pilots use to land",
      "The NTSB has documented pilots dying from collisions with unlit towers exactly like this one",
      "Police, medical, and news helicopters fly at this altitude — one foggy night is all it takes",
    ],
    source: "https://www.ntsb.gov/safety/safety-recs/recletters/A-13-016-017.pdf",
    sourceLabel: "NTSB: Fatal Tower Collisions",
    color: "text-sky-500",
    bg: "bg-sky-950/30",
    border: "border-sky-800/30",
  },
  {
    icon: Bird,
    title: "Zero Environmental Review. Zero Accountability.",
    stat: "0 Reviews",
    bullets: [
      "No environmental impact assessment was conducted before construction — not for wildlife, water, soil, or radiation",
      "7 million birds die from tower collisions annually in North America — this tower is unlit and invisible at night",
      "Onondaga Lake, directly adjacent, hosts NY's largest urban bald eagle roost — federally protected under the Eagle Protection Act",
      "Peer-reviewed research proves cell tower RF decimates honeybee colonies — bees pollinate 1/3 of all food you eat",
      "Turkey vultures circle the site daily — protected under the Migratory Bird Treaty Act, $250K fine per kill",
    ],
    source: "/the-facts/health#environmental-impact",
    sourceLabel: "See the Evidence",
    color: "text-lime-500",
    bg: "bg-lime-950/30",
    border: "border-lime-800/30",
  },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideLabels = ["Map", "Day View", "Night View"];
  const slideCaptions = [
    "",
    "A gray pole sitting incomplete for months — an eyesore blending into the background.",
    "",
  ];
  const prev = () => setSlideIndex((i) => (i === 0 ? slideLabels.length - 1 : i - 1));
  const next = () => setSlideIndex((i) => (i === slideLabels.length - 1 ? 0 : i + 1));

  const carriers = [
    { name: "T-Mobile", color: "text-pink-400", bg: "bg-pink-600", img: "https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/930e948c-09a2-4aa1-e5b0-85a49d626c00/public" },
    { name: "AT&T", color: "text-sky-400", bg: "bg-sky-600", img: "https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/dff653c7-1bfc-4af3-2ae0-58585acc3700/public" },
    { name: "Verizon", color: "text-red-400", bg: "bg-red-600", img: "https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/ba9ea101-8bdd-4b05-9d37-ad39e509c200/public" },
  ];
  const [carrierIndex, setCarrierIndex] = useState(0);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/40 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/7082b468-ee29-4cd8-94aa-acae117f9100/public"
            alt="Cell tower in Liverpool, NY"
            className="w-full h-full object-cover opacity-50"
          />

        </div>

        {/* Content — left-aligned */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-32 md:pt-32 md:pb-40 w-full">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/60 border border-danger-700/40 rounded-full text-danger-300 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-danger-400 animate-pulse" />
              Urgent Community Alert
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-[1.05] tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            A 17-Story Cellular Tower
            <br />
            <span className="text-danger-500">In Our Backyards.</span>
            <br />
            And They&apos;re Not Telling Us.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-dark-200 max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)" } as React.CSSProperties}
          >
            A 184-foot commercial cell tower is going up on New York State
            Thruway Authority land — built specifically to{" "}
            <strong className="text-white">bypass local community consent</strong>.
            No public forum. No environmental review. No neighbor notification.
          </motion.p>

          {/* Two CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-danger-600 hover:bg-danger-500 text-white font-black text-lg rounded-full transition-all duration-200 shadow-xl shadow-danger-900/40 hover:scale-[1.03]"
            >
              Sign the Petition
            </Link>
            <Link
              href="/the-facts"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-dark-600/50 hover:border-dark-500 text-white font-bold text-lg rounded-full transition-all duration-200 hover:bg-dark-900/60"
            >
              Learn the Facts
            </Link>
          </motion.div>
        </div>

        {/* 4-stat strip at bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="absolute bottom-0 left-0 right-0 z-20 bg-dark-950/80 backdrop-blur-md border-t border-dark-800/50"
        >
          <div className="max-w-5xl mx-auto px-4 md:px-12 lg:px-24 py-4 md:py-5 grid grid-cols-4 gap-2 md:gap-8">
            {[
              { value: "5–20%", label: "Property Value", color: "text-danger-400" },
              { value: "184 ft", label: "Unlit Tower", color: "text-amber-400" },
              { value: "0.25 mi", label: "Flight Corridor", color: "text-sky-400" },
              { value: "100+", label: "Eagles Nearby", color: "text-lime-400" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-xl sm:text-2xl md:text-4xl font-black ${stat.color} leading-none`}>
                  {stat.value}
                </p>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-dark-400 uppercase tracking-widest font-bold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
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
              className="font-black text-center mb-4"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
            >
              Where They&apos;re{" "}
              <span className="text-danger-500">Trying</span> To Install It
            </h2>
            <p className="text-dark-300 text-center mb-8 max-w-lg mx-auto leading-relaxed" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              Tower location on New York State Thruway Authority land, surrounded by residential neighborhoods, grade schools, workplaces, hotels, playing fields, and parks.
            </p>

            {/* Tab selector */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-dark-900 border border-dark-700/50 rounded-xl p-1 gap-1">
                {slideLabels.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setSlideIndex(i)}
                    className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      slideIndex === i
                        ? i === 0
                          ? "bg-emerald-600 text-white shadow-lg"
                          : i === 1
                          ? "bg-amber-600 text-white shadow-lg"
                          : "bg-indigo-600 text-white shadow-lg"
                        : "text-dark-400 hover:text-white hover:bg-dark-800"
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

            {/* Map */}
            {slideIndex === 0 && (
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

            {/* Day Slider */}
            {slideIndex === 1 && (
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
            {slideIndex === 2 && (
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
          </motion.div>

          {/* Navigation hint */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={prev}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-dark-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              {slideLabels[(slideIndex - 1 + slideLabels.length) % slideLabels.length]}
            </button>
            <div className="flex gap-2">
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
            <button
              onClick={next}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-dark-400 hover:text-white transition-colors"
            >
              {slideLabels[(slideIndex + 1) % slideLabels.length]}
              <ChevronRight className="w-4 h-4" />
            </button>
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
              className="font-black text-center mb-4"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
            >
              The Eyesore Is the{" "}
              <span className="text-danger-500">Least</span> of It.
            </h2>
            <p className="text-dark-300 text-center mb-12 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              As if an unauthorized 184-foot tower and plummeting property values
              aren&apos;t egregious enough — here&apos;s what else is in store
              for our community if we don&apos;t demand this thing comes down.
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
                <ul className="space-y-3 mt-4">
                  {problem.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5"
                    >
                      <span className={`w-2 h-2 rounded-full ${problem.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                      <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={problem.source}
                  {...(problem.source.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-flex items-center gap-1.5 mt-4 text-xs font-semibold ${problem.color} hover:underline`}
                >
                  {problem.sourceLabel}
                  {problem.source.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
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
            <span className="text-danger-500">Your silence is the consent they want.</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}>
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
              Liverpool Already Has Full 5G Coverage.{" "}
              <span className="text-danger-500">So Who Benefits?</span>
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              Every major carrier already blankets Liverpool with 5G Ultra Wideband.
              Don&apos;t take our word for it &mdash; these are <strong className="text-white">their own coverage maps</strong>,{" "}
              as of March 2025, before this tower has been fully erected. That&apos;s what we&apos;re fighting to keep that way.
            </p>
          </motion.div>

          {/* Carrier Coverage Maps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="mb-10"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex bg-dark-900 border border-dark-700/50 rounded-xl p-1 gap-1">
                {carriers.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setCarrierIndex(i)}
                    className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      carrierIndex === i
                        ? `${c.bg} text-white shadow-lg`
                        : "text-dark-400 hover:text-white hover:bg-dark-800"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={carriers[carrierIndex].img}
                alt={`${carriers[carrierIndex].name} 5G coverage map for Liverpool, NY`}
                className="w-full h-auto"
              />
            </div>

            <p className="text-center mt-4 text-dark-400 text-sm leading-relaxed max-w-lg mx-auto">
              Full 5G coverage from{" "}
              <span className="text-pink-400 font-bold">T-Mobile</span>,{" "}
              <span className="text-sky-400 font-bold">AT&amp;T</span>, and{" "}
              <span className="text-red-400 font-bold">Verizon</span>.{" "}
              So seriously &mdash;{" "}
              <strong className="text-white">who the hell is this tower for?</strong>
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

      {/* ═══════════════════ WHO IS DOING THIS ═══════════════════ */}
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
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
              Follow the Money
            </p>
            <h2
              className="font-black text-white mb-3"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
            >
              Who Is <span className="text-danger-500">Doing</span> This?
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              Three parties made this happen. None of them asked your permission.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Phoenix Tower International */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={1}
              className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-danger-900/40 border border-danger-800/30 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-danger-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-danger-400 uppercase tracking-wider mb-1">The Corporation</p>
                  <h3 className="font-black text-white text-xl">Phoenix Tower International</h3>
                  <p className="text-dark-400 text-sm mt-1">
                    Filed by{" "}
                    <a href="https://www.linkedin.com/in/mitch-henry/" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline decoration-danger-500/40 underline-offset-2 hover:text-danger-300 transition-colors">Mitchell Henry</a>
                    {" "}&mdash; 999 Yamato Road, Suite 100, Boca Raton, FL.
                  </p>
                  <p className="text-dark-500 text-xs mt-2 italic">
                    His own LinkedIn lists his interests as:{" "}
                    <span className="text-dark-300">IoT &bull; Cloud Solutions &bull; AI &bull; 5G Wireless &bull; &quot;Rural Broadband.&quot;</span>
                    {" "}Not &quot;better cell service for Liverpool.&quot;
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-danger-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    Received FCC registration in <strong className="text-white">February 2023</strong> &mdash; sat on it for over a year, then started building without notifying a single resident
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-danger-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    Filed FAA Form 7460-1 claiming <strong className="text-white">&quot;No Hazard&quot;</strong> &mdash; for a 184-foot unlit tower 0.25 miles from an active landing corridor
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-danger-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    Deliberately chose NYSTA land to <strong className="text-white">bypass all local zoning, permitting, and environmental review</strong>
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/faa-filing-phoenix-tower-intl.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/40 border border-danger-800/30 rounded-lg text-xs font-bold text-danger-300 hover:bg-danger-900/60 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  FAA Filing (7460-1)
                </a>
                <a
                  href="/construction-reminder.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/40 border border-danger-800/30 rounded-lg text-xs font-bold text-danger-300 hover:bg-danger-900/60 transition-all"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Construction Reminder Notice
                </a>
              </div>
            </motion.div>

            {/* NYS Thruway Authority */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={2}
              className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-900/40 border border-amber-800/30 flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">The Landlord</p>
                  <h3 className="font-black text-white text-xl">New York State Thruway Authority</h3>
                  <p className="text-dark-400 text-sm mt-1">State agency that leased the land &mdash; collecting revenue while your community bears all the cost.</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    Leased state-owned land to a private corporation &mdash; the Town of Salina gets <strong className="text-white">zero tax revenue</strong> from the tower
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    State land is <strong className="text-white">exempt from local zoning</strong> &mdash; this is the loophole that made it all possible
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    No environmental review required. No public hearing required. No notification required. <strong className="text-white">By design.</strong>
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* The Complicit */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={3}
              className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-dark-800/60 border border-dark-700/50 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-dark-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-dark-500 uppercase tracking-wider mb-1">The Complicit</p>
                  <h3 className="font-black text-white text-xl">Local Officials Who Stayed Silent</h3>
                  <p className="text-dark-400 text-sm mt-1">The Town of Salina and Onondaga County officials who were either not informed &mdash; or chose not to inform you.</p>
                </div>
              </div>
              <ul className="space-y-3 mb-5">
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-dark-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    <strong className="text-white">Town Supervisor Raul Huerta</strong>{" "}&mdash; head of the Town of Salina. Either knew about the tower and said nothing, or failed in the basic duty to know what&apos;s being built in his own town.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-dark-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    <strong className="text-white">Onondaga County Legislator David Carnie</strong>{" "} (Ward 4) &mdash; sits on both the Town Board AND the County Legislature. Double the access, double the silence.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-black/20 rounded-lg px-3 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-dark-500 mt-1.5 flex-shrink-0" />
                  <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                    <strong className="text-white">Jeremiah Thompson</strong>{" "} (Onondaga County 4th District) &mdash; also chairs the Liverpool Zoning Board of Appeals. The one person whose literal job was to catch this.
                  </span>
                </li>
              </ul>
              <Link
                href="/take-action#contact-officials"
                className="inline-flex items-center gap-2 text-sm font-bold text-danger-400 hover:text-danger-300 hover:underline transition-colors"
              >
                Call every one of them
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Tax Irony Callout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={4}
              className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8"
            >
              <p className="text-dark-100 font-medium leading-relaxed mb-3" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
                You pay some of the{" "}
                <strong className="text-white">highest taxes in the entire country</strong>{" "}
                to live in New York State &mdash; only for that same state to cut backdoor deals on{" "}
                <strong className="text-white">your land</strong>, with{" "}
                <strong className="text-white">your tax dollars</strong>, that will tank your property value and put your family&apos;s health at risk.
              </p>
              <p className="text-dark-400 text-sm leading-relaxed">
                The state that takes more from you than almost any other didn&apos;t just fail to protect you &mdash; they{" "}
                <span className="text-danger-400 font-bold">actively helped a private corporation profit at your expense</span>, and they don&apos;t even have the decency to tell you about it.
              </p>
            </motion.div>
          </div>
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
