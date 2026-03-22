"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  TrendingDown,
  Radio,
  PlaneTakeoff,
  Bird,
  ArrowRight,
  AlertTriangle,
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
      "Up to $60,000 gone on a $300K house — 94% of buyers refuse to buy near a cell tower",
      "HUD classifies cell towers as \"Hazards and Nuisances\" — your home is now flagged",
    ],
    href: "/the-facts/community",
    color: "text-danger-500",
    bg: "bg-danger-950/40",
    border: "border-danger-800/30",
  },
  {
    icon: Radio,
    title: "Your Family Is Being Radiated 24/7.",
    stat: "\"Clear Evidence\"",
    bullets: [
      "The NTP's $30M study found \"clear evidence\" of cancer from RF — the same radiation this tower emits",
      "73.6% of peer-reviewed studies on people living near towers found harmful health effects",
    ],
    href: "/the-facts/health",
    color: "text-amber-500",
    bg: "bg-amber-950/30",
    border: "border-amber-800/30",
  },
  {
    icon: PlaneTakeoff,
    title: "0.25 Miles from the Landing Corridor. No Lights.",
    stat: "184 ft",
    bullets: [
      "Built just under the FAA's 200-foot threshold so zero lighting is required — intentional",
      "The NTSB has documented pilots dying from collisions with unlit towers exactly like this one",
    ],
    href: "/the-facts/aviation",
    color: "text-sky-500",
    bg: "bg-sky-950/30",
    border: "border-sky-800/30",
  },
  {
    icon: Bird,
    title: "Zero Environmental Review. Zero Accountability.",
    stat: "0 Reviews",
    bullets: [
      "No environmental impact assessment — not for wildlife, water, soil, or radiation",
      "100+ bald eagles roost at Onondaga Lake, directly adjacent — federally protected",
    ],
    href: "/the-facts/wildlife",
    color: "text-lime-500",
    bg: "bg-lime-950/30",
    border: "border-lime-800/30",
  },
];

export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);

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
              { value: "5–20%", label: "Property Value Decrease", color: "text-danger-400" },
              { value: "184 ft", label: "Unlit Tower", color: "text-amber-400" },
              { value: "0.25 mi", label: "Flight Corridor", color: "text-sky-400" },
              { value: "100+", label: "Bald Eagles", color: "text-lime-400" },
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

      {/* ═══════════════════ LOCATION ═══════════════════ */}
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
                {["Map", "Photo", "Aviation"].map((label, i) => (
                  <button
                    key={label}
                    onClick={() => setSlideIndex(i)}
                    className={`px-5 sm:px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      slideIndex === i
                        ? i === 0
                          ? "bg-emerald-600 text-white shadow-lg"
                          : i === 1
                          ? "bg-danger-600 text-white shadow-lg"
                          : "bg-sky-600 text-white shadow-lg"
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
          >
            {/* Map */}
            {slideIndex === 0 && (
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40 relative" style={{ aspectRatio: "16/10" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6500!2d-76.18508!3d43.10192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDA2JzA2LjkiTiA3NsKwMTEnMDYuMyJX!5e1!3m2!1sen!2sus!4v1"
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

            {/* Tower Photo */}
            {slideIndex === 1 && (
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40 bg-dark-900" style={{ aspectRatio: "16/10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/e9374762-20c4-4f98-84f8-12e8fcdb0800/public"
                  alt="The 184-foot cell tower being erected in Liverpool, NY"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Aviation */}
            {slideIndex === 2 && (
              <div className="rounded-2xl overflow-hidden border border-sky-700/30 shadow-2xl shadow-black/40 bg-dark-900" style={{ aspectRatio: "16/10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/82026018-9e77-4ea8-1424-674b34a40100/public"
                  alt="Flightradar24 showing aircraft on final approach passing directly over the 184-foot unlit cell tower in Liverpool, NY"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {[0, 1, 2].map((i) => (
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
          <div className="mt-5 text-center">
            {slideIndex === 1 && (
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-xl px-5 py-4 max-w-2xl mx-auto">
                <p className="text-sm text-dark-200 leading-relaxed">
                  Taken March 21st, 2026. <strong className="text-white">Unlit, 184ft tall.</strong> There for over a month, unlit. 200m from 1,000+ homes, playing fields, and a park for children.
                </p>
                <button onClick={() => setSlideIndex(2)} className="mt-2 text-sm text-sky-400 font-bold hover:underline">
                  See how close to airplanes it really is →
                </button>
              </div>
            )}
            {slideIndex === 2 && (
              <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl px-5 py-4 max-w-2xl mx-auto">
                <p className="text-sm text-dark-200 leading-relaxed">
                  A Boeing 737 at <strong className="text-danger-400">625 ft. barometric altitude</strong> — just <strong className="text-white">441 feet above</strong> a 184-foot unlit tower. 1,000 ft. due south of the final approach path to Syracuse Hancock International. <strong className="text-danger-400">No lights. Altimetry interference risk.*</strong>
                </p>
              </div>
            )}
          </div>
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
              The Eyesore and Aviation Risk Are{" "}
              <span className="text-danger-500">Just Scratching the Surface.</span>
            </h2>
            <p className="text-dark-300 text-center mb-12 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}>
              An unauthorized 184-foot unlit tower 441 feet below a landing
              corridor isn&apos;t even the worst of it — here&apos;s what else
              is in store for our community if we don&apos;t demand this thing comes down.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={i + 1}
              >
                <Link
                  href={problem.href}
                  className={`block ${problem.bg} ${problem.border} border rounded-2xl p-5 md:p-6 hover:scale-[1.02] transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <problem.icon
                      className={`w-8 h-8 ${problem.color} flex-shrink-0`}
                    />
                    <div
                      className={`text-2xl font-black ${problem.color} leading-none`}
                    >
                      {problem.stat}
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-3" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}>
                    {problem.title}
                  </h3>
                  <ul className="space-y-2">
                    {problem.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 bg-black/20 rounded-lg px-3 py-2"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${problem.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                        <span className="text-dark-200 leading-relaxed" style={{ fontSize: "0.85rem" }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-flex items-center gap-1.5 mt-4 text-xs font-bold ${problem.color} group-hover:underline`}>
                    See the evidence
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
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
              Okay, Seriously
            </p>
            <h2
              className="font-black text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              Liverpool Already Has Full 5G Coverage.{" "}
              <span className="text-danger-500">So What Is This Tower For?</span>
            </h2>
            <p className="text-dark-300 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "clamp(0.875rem, 2vw, 1rem)" }}>
              They&apos;ll tell you it&apos;s for &ldquo;better connectivity&rdquo; and &ldquo;smart highways.&rdquo;
              Yeah. Okay. Every major carrier already blankets Liverpool with 5G Ultra Wideband.
              Don&apos;t take our word for it &mdash; these are <strong className="text-white">their own coverage maps</strong>,{" "}
              as of March 2026, <em>before</em> this tower has been fully erected.
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
              Already. Right now. Without this tower.{" "}
              <strong className="text-white">So who the hell is it for?</strong>
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
            <p className="text-dark-400 text-sm max-w-lg mx-auto mb-5">
              This isn&apos;t innovation. This is{" "}
              <strong className="text-white">infrastructure for surveillance</strong>{" "}
              — disguised as a cell tower, planted on state land where no one
              can object, and built without a single public hearing.
            </p>
            <Link
              href="/the-facts/surveillance"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/40 text-purple-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
            >
              Read: The Real Question
              <ArrowRight className="w-4 h-4" />
            </Link>
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

            {/* No Public Vote + Tax Irony — side by side */}
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={3.5}
                className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-5 md:p-6 text-center flex flex-col justify-center"
              >
                <h3
                  className="font-black text-white mb-2"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
                >
                  No Public Vote. No Public Notice.
                  <br />
                  <span className="text-danger-500">Your silence is the consent they want.</span>
                </h3>
                <p className="text-dark-300 leading-relaxed" style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)" }}>
                  Not a single resident, homeowner, school board, or elected official
                  in Liverpool was consulted, polled, notified, or given any
                  opportunity to weigh in. This isn&apos;t democracy. This is a
                  transaction&mdash;and your community is the product.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                custom={4}
                className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-5 md:p-6 flex flex-col justify-center"
              >
                <p className="text-dark-100 font-medium leading-relaxed mb-2" style={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}>
                  You pay some of the{" "}
                  <strong className="text-white">highest taxes in the entire country</strong>{" "}
                  to live in New York State &mdash; only for that same state to cut backdoor deals on{" "}
                  <strong className="text-white">your land</strong>, with{" "}
                  <strong className="text-white">your tax dollars</strong>, that will tank your property value and put your family&apos;s health at risk.
                </p>
                <p className="text-dark-400 text-sm leading-relaxed">
                  The state that takes more from you than almost any other didn&apos;t just fail to protect you &mdash; they{" "}
                  <span className="text-danger-400 font-bold">actively helped a private corporation profit at your expense</span>.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ UNITY + CTA ═══════════════════ */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-3">
              A PSA for Those Wondering...
            </p>
            <h2
              className="font-black text-white mb-3"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)" }}
            >
              This is{" "}
              <span className="text-danger-500">NOT</span> About Picking a Side.
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto text-sm leading-relaxed">
              A private corporation is building a 184-foot industrial structure
              in your neighborhood — and not a single one of us was asked.
            </p>
          </motion.div>

          {/* Unity callout — above diagram */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="mb-6 bg-danger-950/30 border border-danger-700/40 rounded-2xl p-5 md:p-6 text-center"
          >
            <p className="text-lg md:text-xl font-black text-white leading-relaxed mb-2">
              This is where real unity happens. Not a debate &mdash; it&apos;s self-evident.
            </p>
            <p className="text-sm text-dark-300 max-w-lg mx-auto">
              Ever wonder why we&apos;re always fighting each other instead of the people
              making the decisions? Funny how the more divided we get, the faster
              the infrastructure goes up. Almost like that&apos;s the point.
            </p>
          </motion.div>

          {/* Venn Diagram Layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="relative grid md:grid-cols-5 gap-0 items-stretch">
              {/* LEFT circle */}
              <div className="md:col-span-2 bg-sky-950/30 border border-sky-800/30 rounded-2xl md:rounded-r-none p-5 md:p-6">
                <ul className="space-y-2">
                  {[
                    "A bald eagle nesting zone 1.7 miles away — no environmental review",
                    "A private corporation profiting off public Thruway land",
                    "Zero community consent — no hearing, no vote, no notification",
                    "Children absorb 10× more RF radiation — and Chestnut Ridge is right there",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-dark-300">
                      <span className="text-sky-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CENTER overlap — Sensible Individuals */}
              <div className="md:col-span-1 bg-amber-950/40 border-y border-amber-700/40 md:border border-amber-700/40 p-5 md:p-4 flex flex-col items-center justify-center text-center z-10 md:-mx-2 relative">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 border-2 border-amber-500/50 flex items-center justify-center mb-2">
                  <span className="text-lg">🤝</span>
                </div>
                <p className="text-xs font-black text-amber-400 uppercase tracking-widest mb-1">
                  Everyone
                </p>
                <p className="text-[11px] text-dark-300 leading-snug">
                  Nobody asked. Nobody voted.
                  Nobody was notified. That&apos;s not government — that&apos;s occupation.
                </p>
              </div>

              {/* RIGHT circle */}
              <div className="md:col-span-2 bg-red-950/30 border border-red-800/30 rounded-2xl md:rounded-l-none p-5 md:p-6">
                <ul className="space-y-2">
                  {[
                    "Government making backroom deals — no elected official was consulted",
                    "Your home value tanks up to 20% the day this thing goes up",
                    "Your tax dollars funding a surveillance backbone you never approved",
                    "4th Amendment? They don't need a warrant to track your car. It's already happening.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-dark-300">
                      <span className="text-red-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-center"
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
        </div>
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
