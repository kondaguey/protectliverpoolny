"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
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
  ArrowRight,
  AlertTriangle,
  ChevronDown,
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
      "https://ehtrust.org/cell-tower-and-cell-antenna-radiation-exposed-do-cell-towers-lower-property-values/",
    sourceLabel: "EHT: Property Value Study",
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
    source: "https://ehtrust.org/science/research-on-cell-tower-and-cell-antenna-radiation/",
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
      "An unlit, 184-foot structure going up 3 miles from Syracuse Hancock International Airport and 0.3 miles from the actual flight path where planes descend at 1,000 feet. The FAA signed off with zero lighting requirements. The NTSB has documented fatal collisions with unlit towers near airports.",
    source: "https://ehtrust.org/what-communities-have-strong-setbacks-for-cell-antennas-near-homes-and-schools/",
    sourceLabel: "EHT: Community Setbacks",
    color: "text-sky-500",
    bg: "bg-sky-950/30",
    border: "border-sky-800/30",
  },
];

export default function HomePage() {
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center leading-[1.05] tracking-tight"
          >
            They&apos;re Building an 18-Story Tower
            <br />
            in Our Backyards.{" "}
            <span className="text-danger-500">
              And They&apos;re Not Telling Anyone.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-dark-400 text-center max-w-2xl mx-auto leading-relaxed"
          >
            Right now, a 184-foot commercial cell tower is going up on New York
            State Thruway Authority land in Liverpool. No local approval. No
            environmental review. No one told you. By the time you find out,
            it&apos;ll be too late.
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
              See It for Yourself
            </h2>
            <p className="text-dark-400 text-center mb-8 max-w-lg mx-auto">
              Slide to see what this tower looks like now—and what it will look
              like when fully equipped with antennas, dishes, and equipment.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={1}
            className="relative rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40"
          >
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="/images/tower-current.jpg"
                  alt="Current bare cell tower pole in Liverpool NY"
                  style={{ objectFit: "cover" }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/images/tower-finished.jpg"
                  alt="Fully equipped 184-foot cell tower rendering"
                  style={{ objectFit: "cover" }}
                />
              }
              defaultPosition={35}
              style={{ height: "auto", aspectRatio: "16/10" }}
            />
            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-sm font-bold text-white border border-dark-600/50">
              Currently
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-danger-600/90 backdrop-blur-sm rounded-lg text-sm font-bold text-white border border-danger-500/50">
              What&apos;s Coming
            </div>
          </motion.div>

          <p className="text-xs text-dark-500 text-center mt-4">
            Drag the slider to compare. Right image is an AI rendering of the
            fully equipped tower.
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
              Why This Matters
            </h2>
            <p className="text-dark-400 text-center mb-12 max-w-lg mx-auto">
              This isn&apos;t just an eyesore. It&apos;s a direct threat to your
              property, your health, and your safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                <h3 className="text-lg font-bold text-white mb-3">
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            No One Voted for This.
            <br />
            <span className="text-danger-500">No One Asked for This.</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Not a single resident, homeowner, school board, or elected official
            in Liverpool was consulted, polled, notified, or given any
            opportunity to weigh in on a 184-foot commercial tower going up in a
            residential neighborhood. This isn&apos;t democracy. This is a
            transaction&mdash;and your community is the product.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════ 5G DEBUNKING ═══════════════════ */}
      <section className="py-12 md:py-20 px-4 bg-dark-900/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="text-center mb-8">
              <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-3">
                And Here&apos;s the Kicker
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-white">
                &ldquo;5G&rdquo;:{" "}
                <span className="text-danger-500">
                  The Lie They&apos;re Selling You
                </span>
              </h2>
            </div>

            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
              <p className="text-dark-200 leading-relaxed mb-4">
                They&apos;re telling you this tower is for &ldquo;5G.&rdquo;
                Here&apos;s what they&apos;re{" "}
                <strong className="text-white">not</strong> telling you: the type
                of 5G that towers like this deliver&mdash;
                <strong className="text-white">low-band 5G</strong>&mdash;is{" "}
                <span className="text-danger-400 font-bold">
                  barely faster than the 4G LTE you already have
                </span>
                .
              </p>

              {/* Speed comparison */}
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-5 text-center">
                  <p className="text-xs text-dark-500 uppercase font-bold tracking-wider mb-2">
                    AT&amp;T Low-Band &ldquo;5G&rdquo;
                  </p>
                  <p className="text-3xl font-black text-danger-400">78 Mbps</p>
                  <p className="text-xs text-dark-500 mt-1">
                    Average download speed
                  </p>
                </div>
                <div className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-5 text-center">
                  <p className="text-xs text-dark-500 uppercase font-bold tracking-wider mb-2">
                    4G LTE (Same Phone)
                  </p>
                  <p className="text-3xl font-black text-white">70 Mbps</p>
                  <p className="text-xs text-dark-500 mt-1">
                    Average download speed
                  </p>
                </div>
              </div>

              <p className="text-dark-300 text-sm leading-relaxed mb-4">
                That&apos;s an{" "}
                <strong className="text-white">
                  11% difference
                </strong>
                . PCMag tested this. Ookla confirmed it. In Verizon&apos;s own
                tests, their nationwide &ldquo;5G&rdquo; was actually{" "}
                <span className="text-danger-400 font-bold">
                  slower than their 4G LTE
                </span>
                .
              </p>

              <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-4">
                <p className="text-sm text-danger-200 leading-relaxed">
                  <strong className="text-danger-100">
                    Let&apos;s be real:
                  </strong>{" "}
                  They&apos;re putting a 184-foot industrial structure in a
                  residential neighborhood so you can load a webpage{" "}
                  <em>maybe</em> one second faster. That&apos;s not innovation.
                  That&apos;s a land grab. Your property value, your health, and
                  your neighborhood are being sacrificed so a private corporation
                  can add another cell on a coverage map.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
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
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            This Stops When{" "}
            <span className="text-danger-500">We Stop It.</span>
          </h2>
          <p className="text-dark-400 text-lg mb-8 max-w-xl mx-auto">
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
