"use client";

import Link from "next/link";
import QuickLinks from "@/components/QuickLinks";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ExternalLink,
  Eye,
  Camera,
  Wifi,
  ArrowRight,
  Car,
  ShieldAlert,
  Globe,
  Database,
  DollarSign,
  Scale,
  KeyRound,
  Radar,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function SurveillancePage() {
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
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/40 border border-purple-700/40 rounded-full text-purple-300 text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-3.5 h-3.5" />
                  Follow the Infrastructure
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-black leading-[0.95] tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
              >
                So... Who's It{" "}
                <span className="text-danger-500">Really</span> For?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-dark-400 max-w-lg leading-relaxed"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
              >
                They'll say it's for your safety. For "connectivity."
                For "smart highways." And honestly? It <em className="text-white not-italic font-bold">is</em>{" "} for
                you — just not in the way they're telling you. It's
                for watching you. Tracking you. Logging every vehicle,
                every route, every pattern. That's not a service.
                That's a product — and you're what's being sold.
              </motion.p>
            </div>

            {/* Right — Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/87517ceb-e6c4-45e6-6dfe-1f0ce181f200/public"
                  alt="Surveillance infrastructure"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={[
          { label: "The Logic", id: "the-logic" },
          { label: "This Isn't Left or Right", id: "not-political" },
          { label: "Are You Flocking Serious", id: "flocking-serious" },
          { label: "See It for Yourself", id: "see-it" },
          { label: "Follow the Money", id: "follow-the-money" },
          { label: "The Pattern", id: "the-pattern" },
        ]}
      />

      {/* ═══════════════════ THE LOGIC ═══════════════════ */}
      <section id="the-logic" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
              Let's Walk Through the{" "}
              <span className="text-danger-500">Logic</span>
            </h2>
            <p className="text-dark-400 text-center max-w-2xl mx-auto mb-10">
              This isn't conspiracy. This is just reading what they're actually telling us,
              and asking the obvious follow-up question.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                step: "1",
                question: "Liverpool already has full 5G coverage from T-Mobile, AT&T, and Verizon.",
                answer: "So the tower isn't needed for cell service. Their own coverage maps prove it.",
                color: "text-emerald-400",
                border: "border-emerald-800/30",
                bg: "bg-emerald-950/20",
              },
              {
                step: "2",
                question: "They say it's for \"smart highway\" infrastructure.",
                answer: "\"Smart highway\" means connected sensors, IoT devices, and automated monitoring systems along the I-90 corridor. It needs a tower — not for your phone, but for their equipment.",
                color: "text-amber-400",
                border: "border-amber-800/30",
                bg: "bg-amber-950/20",
              },
              {
                step: "3",
                question: "If it's for our \"safety,\" why is it making us less safe?",
                answer: "RF radiation risk to 1,000+ homes. Aviation hazard at 441 feet below a Boeing 737. Property values dropping 20%. Eagle habitat disrupted. Zero public notice. That's not safety — that's a liability they're asking you to absorb.",
                color: "text-danger-400",
                border: "border-danger-800/30",
                bg: "bg-danger-950/20",
              },
              {
                step: "4",
                question: "It's on New York State Thruway Authority land. Not zoned by the town. No public hearing required.",
                answer: "That's not a coincidence. That's the whole point. State land = no local zoning. No residents to notify. No objections to hear. Build it before anyone can stop it.",
                color: "text-purple-400",
                border: "border-purple-800/30",
                bg: "bg-purple-950/20",
              },
              {
                step: "?",
                question: "So if it's not for cell coverage, and the \"safety\" story doesn't hold up, and they built it where no one could object... what is it actually for?",
                answer: "",
                color: "text-white",
                border: "border-danger-600/50",
                bg: "bg-danger-950/30",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className={`${item.bg} ${item.border} border rounded-2xl p-5 md:p-6`}
              >
                <div className="flex items-start gap-4">
                  <span className={`text-2xl md:text-3xl font-black ${item.color} flex-shrink-0 w-10`}>
                    {item.step}
                  </span>
                  <div>
                    <p className="text-white font-bold mb-1 text-lg leading-tight">
                      {item.question}
                    </p>
                    {item.answer && (
                      <p className="text-dark-300 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ THIS ISN'T LEFT OR RIGHT ═══════════════════ */}
      <section id="not-political" className="py-16 md:py-24 px-4 bg-dark-900/30 scroll-mt-24">
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
              This Isn't Left or Right
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              It's{" "}
              <span className="text-danger-500">Everyone's</span> Problem
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Mass surveillance infrastructure doesn't care who you voted for.
              It tracks everyone. And no matter what side of the aisle you sit on,
              there's something here that should make your blood boil.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT concerns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6"
            >
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">
                If You Lean Left, Read This
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: ShieldAlert,
                    title: "ICE Is Already Using It",
                    text: "404Media obtained records showing local police search Flock's ALPR database on behalf of ICE for immigration enforcement. Your local traffic camera data is being funneled to federal removal operations.",
                  },
                  {
                    icon: Scale,
                    title: "Reproductive Rights Surveillance",
                    text: "A Texas officer used Flock to search nationwide for a woman who'd had a self-administered abortion. This infrastructure is already being weaponized against bodily autonomy.",
                  },
                  {
                    icon: Globe,
                    title: "Corporate Blacklisting of Activists",
                    text: "Flock's \"Business Network\" lets private companies share vehicle watchlists. Labor organizers, protestors, environmental activists — flagged and tracked, with no warrant, no oversight, no recourse.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                      <p className="text-dark-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT concerns */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="bg-red-950/20 border border-red-800/30 rounded-2xl p-6"
            >
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">
                If You Lean Right, Read This
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: DollarSign,
                    title: "Your Tax Dollars Are Funding It",
                    text: "The NYSTA is a state authority — funded by tolls and tax revenue. You're paying to build surveillance infrastructure on public land that was never put to a vote. Your money. Their cameras. Zero transparency.",
                  },
                  {
                    icon: KeyRound,
                    title: "Government Overreach Without a Warrant",
                    text: "No warrant needed for ALPR data. No probable cause. Any local cop, any agency, any time. The Fourth Amendment says you're protected from unreasonable searches. This system treats the Fourth Amendment like a suggestion.",
                  },
                  {
                    icon: Radar,
                    title: "Every Mile You Drive, Logged Forever",
                    text: "Your truck. Your route. Your patterns. Where you go to church, where you buy guns, where your kids go to school — all logged, stored, and searchable. This is the ultimate government tracking tool, and it's being built on a highway you drive every day.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm mb-1">{item.title}</p>
                      <p className="text-dark-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="mt-6 bg-danger-950/30 border-2 border-danger-700/40 rounded-2xl p-6 md:p-8 text-center"
          >
            <p className="text-xl md:text-2xl font-black text-white leading-relaxed mb-3">
              They create the problem. They get you to yell at each other.
            </p>
            <p className="text-base text-dark-200 leading-relaxed mb-4 max-w-2xl mx-auto">
              Meanwhile — while you're busy arguing about left vs. right — they quietly
              roll out a "solution" that puts{" "}
              <strong className="text-danger-400">every single one of us under a microscope.</strong>
            </p>
            <p className="text-dark-400 text-sm">
              The only people who benefit from mass surveillance are the ones doing the surveilling.
              And they're counting on us being too distracted to notice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ ARE YOU FLOCKING SERIOUS ═══════════════════ */}
      <section id="flocking-serious" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
              You Can't Make This Up
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Are You{" "}
              <span className="text-purple-400">Flock</span>ing Serious?
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Before you read another word — this is real. This is not a conspiracy theory.
              This is a publicly traded company, with a website, operating across America right now.
              Including right here in Liverpool.
            </p>
          </motion.div>

          {/* SIMPLE EXPLANATION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <Camera className="w-7 h-7 text-purple-400" />
              <h3 className="text-xl font-black text-white">What Is Flock? (In Plain English)</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🎥 Step 1: The Cameras (AI-Powered)</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  A company called <strong className="text-purple-300">Flock Safety</strong> installs small,
                  solar-powered cameras on poles, signs, and street infrastructure. These cameras
                  automatically <strong className="text-white">photograph every single vehicle that drives by</strong> —
                  your car, your truck, your van. Every. Single. One. 24 hours a day.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">📋 Step 2: Your Plate Gets Read</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  The camera uses AI to <strong className="text-white">read your license plate</strong>{" "}
                  and record the <strong className="text-white">exact time, location, and direction</strong>{" "}
                  you
                  were traveling. It also captures the make, model, and color of your vehicle.
                  This data is uploaded instantly to Flock's cloud servers.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🌐 Step 3: It Goes Into a Nationwide Database</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  Your plate read doesn't stay local. It goes into a{" "}
                  <strong className="text-white">massive, searchable database</strong>{" "}
                  that connects thousands of cameras across the country. Any
                  participating police department — anywhere in America — can search for
                  your plate and see <strong className="text-white">everywhere you've been</strong>.
                  No warrant. No probable cause. No notification.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🤖 Step 4: AI Decides If You're "Suspicious"</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  Flock's AI doesn't just store data — it{" "}
                  <strong className="text-white">analyzes everyone's driving patterns</strong>{" "}
                  and automatically flags vehicles it considers
                  "suspicious." Not because you committed a crime. Because an{" "}
                  <strong className="text-white">algorithm decided your pattern looked weird</strong>.
                  You have no idea this is happening. You can't challenge it. You can't appeal it.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🏢 Step 5: Private Companies Get Access Too</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  It's not just police. Flock launched a <strong className="text-white">"Business
                  Network"</strong> where private companies can share vehicle watchlists. Your employer.
                  Shopping centers. HOAs. Private security firms. They can{" "}
                  <strong className="text-white">add your plate to a hotlist</strong> and get alerted
                  every time you drive past one of their cameras. Anywhere.
                </p>
              </div>
            </div>

            <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center">
              <p className="text-danger-200 font-bold text-base">
                <strong className="text-white text-xl">That's what Flock is.</strong>{" "}
                A private company building a nationwide vehicle tracking network.
                Not the government — a <em>company</em>. And then selling access to whoever wants it.
              </p>
            </div>
          </motion.div>

          {/* WHAT FLOCK + TOWER MEANS — moved up */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <h3 className="text-xl md:text-2xl font-black text-white mb-3">
              What Does This Have to Do with the 184ft Phoenix International Tower We're Fighting?
            </h3>
            <p className="text-dark-200 text-base leading-relaxed mb-5">
              Flock cameras need a persistent cellular connection to upload data to the cloud in real-time.
              A 184-foot tower on NYS Thruway Authority land — right next to I-90 — is{" "}
              <strong className="text-white">ideal infrastructure</strong>{" "}
              for connecting ALPR cameras, IoT sensors, and "smart highway" equipment along the corridor.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                {
                  label: "Cellular Backhaul",
                  detail: "Every ALPR camera needs a constant data connection. Cell towers provide it.",
                },
                {
                  label: "IoT Backbone",
                  detail: "\"Smart highway\" sensors — speed monitors, traffic counters, weather stations — all connect through nearby towers.",
                },
                {
                  label: "Expansion Ready",
                  detail: "One tower today. Cameras, sensors, and AI analytics tomorrow. The infrastructure enables everything that comes after.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-dark-900/60 rounded-xl p-4">
                  <p className="text-sm font-bold text-danger-300 mb-1">{item.label}</p>
                  <p className="text-sm text-dark-300 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ALREADY IN LIVERPOOL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="bg-dark-900/60 border border-purple-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <h3 className="text-xl md:text-2xl font-black text-white mb-2">
              They're Already Here.
            </h3>
            <p className="text-dark-200 text-base leading-relaxed mb-5">
              This isn't hypothetical. Flock cameras are{" "}
              <strong className="text-white">already deployed in and around Liverpool, NY</strong>.
              The map below shows camera locations currently operating in the area.
              You have not been asked. You have not been notified.
            </p>

            <div className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/4509fb8f-230d-4608-7d36-4dd2a3679a00/public"
                alt="Map showing Flock surveillance camera locations currently deployed in Liverpool and Salina, NY"
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://deflock.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/40 text-purple-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                DeFlock.org — Track Flock Camera Locations
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.aclu.org/news/privacy-technology/flocks-aggressive-expansions-go-far-beyond-simple-driver-surveillance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-danger-900/40 hover:bg-danger-900/60 border border-danger-700/40 text-danger-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                ACLU Report on Flock
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ACLU callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="mt-6 bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8"
          >
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
              The ACLU Is Already Sounding the Alarm
            </p>
            <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 mb-5">
              <p className="text-white font-bold text-lg leading-relaxed italic">
                "This explosion of new uses is what happens when you build an authoritarian tracking
                infrastructure — it expands in more and more ways."
              </p>
              <p className="text-xs text-dark-500 mt-2">— ACLU, August 2025</p>
            </div>
            <div className="space-y-3 mb-5">
              {[
                "ICE is accessing license plate data through local police departments",
                "A Texas officer used Flock to search nationwide for a woman who'd had an abortion",
                "Flock is connecting plate data to commercial people-lookup services — plate becomes a name and address",
                "ALPR cameras are being upgraded to capture video with AI natural-language search",
                "A \"Business Network\" lets private companies share vehicle watchlists — no warrant, no oversight",
                "Flock's AI generates \"suspicion\" by scanning all vehicle patterns — no crime required",
              ].map((fact) => (
                <div key={fact} className="flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-danger-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-dark-300">{fact}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.aclu.org/news/privacy-technology/flocks-aggressive-expansions-go-far-beyond-simple-driver-surveillance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-danger-900/40 hover:bg-danger-900/60 border border-danger-700/40 text-danger-300 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
            >
              Read the Full ACLU Report
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ SEE IT FOR YOURSELF ═══════════════════ */}
      <section id="see-it" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
              Don't Take Our Word for It
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              See It for{" "}
              <span className="text-danger-500">Yourself</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40"
            >
              <div style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://www.youtube.com/embed/4RM09nKczVs"
                  title="Flock Safety Explained"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40"
            >
              <div style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://www.youtube.com/embed/_a14lplBg2Y"
                  title="ALPR Surveillance in America"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════ FOLLOW THE MONEY ═══════════════════ */}
      <section id="follow-the-money" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              Follow the Money
            </p>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
            >
              The Same People Funding <span className="text-danger-500">This Tower</span> Fund{" "}
              <span className="text-danger-500">Everything Else</span> You Hate.
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto leading-relaxed">
              Phoenix Tower International isn&apos;t a small telecom startup. It&apos;s backed by
              BlackRock, Blackstone, and Grain Management — the same institutions profiting
              from the things that harm you most. Left or right, this should make your blood boil.
            </p>
          </motion.div>

          {/* Connection Chain */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.5}
            className="mb-10"
          >
            <div className="flex flex-col items-center gap-2 py-6 px-4 bg-dark-900/60 border border-dark-800/50 rounded-2xl">
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-amber-900/30 border border-amber-800/30 rounded-lg text-amber-300 font-bold text-sm">BlackRock</span>
                <span className="px-4 py-2 bg-purple-900/30 border border-purple-800/30 rounded-lg text-purple-300 font-bold text-sm">Blackstone</span>
                <span className="px-4 py-2 bg-sky-900/30 border border-sky-800/30 rounded-lg text-sky-300 font-bold text-sm">Grain Management</span>
              </div>
              <span className="text-dark-500 text-lg">↓ invest in ↓</span>
              <span className="px-5 py-2.5 bg-danger-900/30 border border-danger-800/30 rounded-lg text-danger-300 font-bold">Phoenix Tower International</span>
              <span className="text-dark-500 text-lg">↓ builds ↓</span>
              <span className="px-5 py-2.5 bg-danger-600 rounded-lg text-white font-black">The 184-ft Tower in Your Backyard</span>
            </div>
            <p className="text-center text-dark-400 text-sm mt-3">
              BlackRock officially invested in PTI in <strong className="text-white">March 2024</strong>.{" "}
              Blackstone has been PTI&apos;s majority owner since <strong className="text-white">2014</strong>.
            </p>
          </motion.div>

          {/* Left / Right Pain */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="grid md:grid-cols-2 gap-4 mb-10"
          >
            {/* LEFT */}
            <div className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-5">
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">If You Lean Left</p>
              <ul className="space-y-3">
                {[
                  <><strong className="text-white">1.4 billion shares</strong> of PetroChina — Sudan&apos;s largest oil partner — <strong className="text-white">helping fund genocide</strong> in Darfur</>,
                  <><strong className="text-white">1.8 billion shares</strong> of Sinopec — funding mass atrocities in Sudan and Syria</>,
                  <>Shareholders voted for genocide-free investing. BlackRock <strong className="text-danger-400">opposed it and killed it</strong></>,
                  <>Claims ESG commitment while maintaining the <strong className="text-white">worst human rights holdings on Earth</strong></>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-dark-500 mt-3 italic">Source: Investors Against Genocide, SEC filings</p>
            </div>

            {/* RIGHT */}
            <div className="bg-red-950/20 border border-red-800/30 rounded-2xl p-5">
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">If You Lean Right</p>
              <ul className="space-y-3">
                {[
                  <>The <strong className="text-white">world&apos;s largest asset manager ($10T+)</strong> pushing ESG mandates on American companies while ignoring their own</>,
                  <>The single biggest force behind <strong className="text-white">corporate wokewashing</strong> — virtue signaling while profiting from genocide</>,
                  <>Openly strategizes around <strong className="text-white">&quot;rewiring global supply chains&quot;</strong> and &quot;geopolitical fragmentation&quot; — their own words</>,
                  <>Pushes <strong className="text-white">surveillance infrastructure</strong> as investment opportunities — &quot;smart cities,&quot; &quot;connected highways&quot;</>,
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-dark-500 mt-3 italic">Source: BlackRock.com, PRNewswire, SEC 10-K filings</p>
            </div>
          </motion.div>

          {/* Center Callout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1.5}
            className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8 text-center mb-10"
          >
            <p className="text-lg md:text-xl font-black text-white leading-relaxed mb-3">
              They don&apos;t pick sides. <span className="text-danger-400">They pick profits.</span>
            </p>
            <p className="text-dark-300 text-sm leading-relaxed max-w-xl mx-auto">
              They fund the tower in your backyard AND the oil companies funding genocide.
              They push ESG AND profit from mass atrocities. They claim to care about
              communities AND bypass every community protection on the books.
            </p>
          </motion.div>

          {/* How This Affects YOU */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4 text-center">
                How This Affects You as a Liverpool Resident
              </p>
              <div className="flex flex-col items-center gap-3">
                <div className="w-full grid sm:grid-cols-3 gap-3">
                  <div className="bg-black/20 rounded-xl p-4 text-center">
                    <p className="text-amber-400 font-black text-lg">The Tower</p>
                    <p className="text-dark-400 text-xs mt-1">Built on state land. No zoning. No vote. No consent.</p>
                  </div>
                  <div className="bg-black/20 rounded-xl p-4 text-center">
                    <p className="text-purple-400 font-black text-lg">The Infrastructure</p>
                    <p className="text-dark-400 text-xs mt-1">Cameras, sensors, ALPR — the backbone of &quot;smart&quot; surveillance.</p>
                  </div>
                  <div className="bg-black/20 rounded-xl p-4 text-center">
                    <p className="text-danger-400 font-black text-lg">The Data</p>
                    <p className="text-dark-400 text-xs mt-1">Your location, speed, patterns — tracked, stored, sold.</p>
                  </div>
                </div>
                <span className="text-dark-500 text-sm font-bold">↓</span>
                <div className="bg-danger-900/20 border border-danger-800/30 rounded-xl p-4 w-full text-center">
                  <p className="text-sm text-dark-300 leading-relaxed">
                    This tower isn&apos;t about cell service. It&apos;s a node in the{" "}
                    <strong className="text-white">Internet of Things</strong> — a network designed to connect
                    every camera, sensor, and tracking device on the Thruway and Electronics Parkway.
                    You&apos;re not the customer. <strong className="text-danger-400">You&apos;re the product.</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════ THE PATTERN ═══════════════════ */}
      <section id="the-pattern" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl md:text-3xl font-black text-center mb-3">
              The Pattern Is{" "}
              <span className="text-danger-500">Always the Same</span>
            </h2>
            <p className="text-dark-400 text-center max-w-2xl mx-auto mb-10">
              Build the infrastructure first. Justify it later. Expand the use cases quietly.
              By the time anyone notices, it's too late to object.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-dark-700/50" />
              <div className="space-y-6">
                {[
                  {
                    phase: "Phase 1",
                    title: "Create a Problem",
                    text: "Crime rates, traffic congestion, \"unsafe roads.\" Whether the data supports it or not, the narrative gets built. Fear needs a foundation.",
                    color: "bg-emerald-600",
                  },
                  {
                    phase: "Phase 2",
                    title: "Generate Fear",
                    text: "Local news segments. Town meetings. \"What if something happens?\" The danger is always vague enough to justify anything — and specific enough to scare you into silence.",
                    color: "bg-amber-600",
                  },
                  {
                    phase: "Phase 3",
                    title: "Say It's for Safety",
                    text: "\"Smart highways.\" \"Better connectivity.\" \"Public safety infrastructure.\" By the time they say the word 'safety,' the contracts are already signed.",
                    color: "bg-orange-600",
                  },
                  {
                    phase: "Phase 4",
                    title: "Build the Infrastructure",
                    text: "The tower goes up. The sensors go on. The cameras start recording. No vote. No public input. No environmental review. It's done before you know it started.",
                    color: "bg-danger-600",
                  },
                  {
                    phase: "Phase 5",
                    title: "Normalize It",
                    text: "\"It's been here for years.\" \"Everyone else has one.\" \"Removing it would cost too much.\" The surveillance is permanent. The data has been flowing. It's over.",
                    color: "bg-purple-600",
                  },
                ].map((phase, i) => (
                  <div key={phase.phase} className="flex items-start gap-4 pl-2">
                    <div className={`w-8 h-8 rounded-full ${phase.color} flex items-center justify-center flex-shrink-0 z-10`}>
                      <span className="text-white text-xs font-black">{i + 1}</span>
                    </div>
                    <div className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 flex-1">
                      <p className="text-[10px] font-bold text-dark-500 uppercase tracking-widest mb-1">
                        {phase.phase}
                      </p>
                      <p className="text-white font-bold mb-1">{phase.title}</p>
                      <p className="text-sm text-dark-300 leading-relaxed">{phase.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-10"
          >
            <div className="bg-danger-950/30 border-2 border-danger-700/40 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl font-black text-white leading-relaxed mb-2">
                We are between Phase 3 and Phase 4.
              </p>
              <p className="text-dark-300 max-w-xl mx-auto leading-relaxed mb-6">
                They've created the justification. They've called it "safety."
                The tower is going up. The only thing standing between here and Phase 5 is{" "}
                <strong className="text-danger-400">you, right now, demanding it stops.</strong>
              </p>
              <Link
                href="/take-action"
                className="inline-flex items-center gap-2 px-8 py-4 bg-danger-600 hover:bg-danger-500 text-white font-bold rounded-xl transition-all hover:scale-[1.03] shadow-lg shadow-danger-900/40"
              >
                <AlertTriangle className="w-5 h-5" />
                Sign the Petition & Take Action
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ DISCLAIMER ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-900/40 border border-dark-800/50 rounded-xl p-5 text-center">
            <p className="text-xs text-dark-500 leading-relaxed">
              <strong className="text-dark-400">Note:</strong> This page connects publicly available information
              from the ACLU, NYSTA, Phoenix Tower International, and published reporting. We are not claiming that
              surveillance equipment has been installed on this specific tower. We are asking a question that
              deserves an answer: if Liverpool already has full 5G coverage, and the tower creates health, aviation,
              environmental, and property value risks —{" "}
              <strong className="text-dark-400">what is this infrastructure actually for?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
            Continue Reading
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/the-facts/community"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-amber-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                Community & Land Value
              </p>
              <p className="text-xs text-dark-400">
                Property values, double standards, and the legal framework.
              </p>
            </Link>
            <Link
              href="/the-facts/health"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Health & Science
              </p>
              <p className="text-xs text-dark-400">
                $30M cancer study, children's absorption, and the court ruling.
              </p>
            </Link>
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Aviation & Safety
              </p>
              <p className="text-xs text-dark-400">
                441 feet below a 737. Unlit. No markings.
              </p>
            </Link>
            <Link
              href="/the-facts/wildlife"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-lime-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-lime-400 transition-colors mb-1">
                Wildlife & Environment
              </p>
              <p className="text-xs text-dark-400">
                Eagles, pollinators, and the review they skipped.
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
