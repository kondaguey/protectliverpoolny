"use client";

import Link from "next/link";
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
        {/* Hero background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/87517ceb-e6c4-45e6-6dfe-1f0ce181f200/public"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-[1px]" />
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-6"
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
            So... Who&apos;s It{" "}
            <span className="text-danger-500">Really</span> For?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-dark-400 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            They&apos;ll say it&apos;s for your safety. For &ldquo;connectivity.&rdquo;
            For &ldquo;smart highways.&rdquo; Okay. If it&apos;s for our safety &mdash;
            why the radiation risk? The aviation risk? The property value collapse?
            The environmental damage? None of that sounds very &ldquo;safe.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ THE LOGIC ═══════════════════ */}
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
              Let&apos;s Walk Through the{" "}
              <span className="text-danger-500">Logic</span>
            </h2>
            <p className="text-dark-400 text-center max-w-2xl mx-auto mb-10">
              This isn&apos;t conspiracy. This is just reading what they&apos;re actually telling us,
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
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-4">
              This Isn&apos;t Left or Right
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              It&apos;s{" "}
              <span className="text-danger-500">Everyone&apos;s</span> Problem
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Mass surveillance infrastructure doesn&apos;t care who you voted for.
              It tracks everyone. And no matter what side of the aisle you sit on,
              there&apos;s something here that should make your blood boil.
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
              Meanwhile &mdash; while you&apos;re busy arguing about left vs. right &mdash; they quietly
              roll out a &ldquo;solution&rdquo; that puts{" "}
              <strong className="text-danger-400">every single one of us under a microscope.</strong>
            </p>
            <p className="text-dark-400 text-sm">
              The only people who benefit from mass surveillance are the ones doing the surveilling.
              And they&apos;re counting on us being too distracted to notice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ ARE YOU FLOCKING SERIOUS ═══════════════════ */}
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
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
              You Can&apos;t Make This Up
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Are You{" "}
              <span className="text-purple-400">Flock</span>ing Serious?
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Before you read another word &mdash; this is real. This is not a conspiracy theory.
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
                  The camera uses AI to <strong className="text-white">read your license plate</strong> and
                  record the <strong className="text-white">exact time, location, and direction</strong> you
                  were traveling. It also captures the make, model, and color of your vehicle.
                  This data is uploaded instantly to Flock&apos;s cloud servers.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🌐 Step 3: It Goes Into a Nationwide Database</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  Your plate read doesn&apos;t stay local. It goes into a <strong className="text-white">massive,
                  searchable database</strong> that connects thousands of cameras across the country. Any
                  participating police department &mdash; anywhere in America &mdash; can search for
                  your plate and see <strong className="text-white">everywhere you&apos;ve been</strong>.
                  No warrant. No probable cause. No notification.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🤖 Step 4: AI Decides If You&apos;re &ldquo;Suspicious&rdquo;</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  Flock&apos;s AI doesn&apos;t just store data &mdash; it <strong className="text-white">analyzes
                  everyone&apos;s driving patterns</strong> and automatically flags vehicles it considers
                  &ldquo;suspicious.&rdquo; Not because you committed a crime. Because an{" "}
                  <strong className="text-white">algorithm decided your pattern looked weird</strong>.
                  You have no idea this is happening. You can&apos;t challenge it. You can&apos;t appeal it.
                </p>
              </div>

              <div className="bg-dark-900/60 rounded-xl p-5">
                <p className="text-white text-lg font-black mb-2">🏢 Step 5: Private Companies Get Access Too</p>
                <p className="text-dark-200 text-base leading-relaxed">
                  It&apos;s not just police. Flock launched a <strong className="text-white">&ldquo;Business
                  Network&rdquo;</strong> where private companies can share vehicle watchlists. Your employer.
                  Shopping centers. HOAs. Private security firms. They can{" "}
                  <strong className="text-white">add your plate to a hotlist</strong> and get alerted
                  every time you drive past one of their cameras. Anywhere.
                </p>
              </div>
            </div>

            <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 text-center">
              <p className="text-danger-200 font-bold text-base">
                <strong className="text-white text-xl">That&apos;s what Flock is.</strong>{" "}
                A private company building a nationwide vehicle tracking network.
                Not the government &mdash; a <em>company</em>. And then selling access to whoever wants it.
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
              What Does This Have to Do with the 184ft Phoenix International Tower We&apos;re Fighting?
            </h3>
            <p className="text-dark-200 text-base leading-relaxed mb-5">
              Flock cameras need a persistent cellular connection to upload data to the cloud in real-time.
              A 184-foot tower on NYS Thruway Authority land &mdash; right next to I-90 &mdash; is{" "}
              <strong className="text-white">ideal infrastructure</strong>{" "}
              for connecting ALPR cameras, IoT sensors, and &ldquo;smart highway&rdquo; equipment along the corridor.
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
              They&apos;re Already Here.
            </h3>
            <p className="text-dark-200 text-base leading-relaxed mb-5">
              This isn&apos;t hypothetical. Flock cameras are{" "}
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
                &ldquo;This explosion of new uses is what happens when you build an authoritarian tracking
                infrastructure &mdash; it expands in more and more ways.&rdquo;
              </p>
              <p className="text-xs text-dark-500 mt-2">&mdash; ACLU, August 2025</p>
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
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
              Don&apos;t Take Our Word for It
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

      {/* ═══════════════════ CHINA COMPARISON ═══════════════════ */}
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
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              And You Thought{" "}
              <span className="text-danger-500">China</span> Was a Surveillance State?
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed">
              We mock China for its social credit system and ubiquitous surveillance cameras.
              Meanwhile, here&apos;s what&apos;s being built in our own backyard &mdash; just with better marketing.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  china: "Cameras on every corner",
                  us: "Flock ALPRs on every road, pole, and highway sign — photographing every vehicle, every hour",
                },
                {
                  china: "Government tracks your movements",
                  us: "Your car is tracked across a nationwide cloud database — searchable by any participating police department",
                },
                {
                  china: "Social credit scoring",
                  us: "Flock's AI analyzes driving patterns and flags \"suspicious\" vehicles — the algorithm decides you're a suspect, not a judge",
                },
                {
                  china: "No right to privacy from the state",
                  us: "No warrant needed. No probable cause. The Fourth Amendment Is Not For Sale Act was blocked in the Senate",
                },
                {
                  china: "Government monitors dissent",
                  us: "ICE uses Flock data for immigration raids. Police tracked a woman who had an abortion. Corporate \"Business Networks\" flag activists",
                },
                {
                  china: "Citizens can't opt out",
                  us: "You can't opt out either. Drive on public roads? You're in the system. There is no consent. There is no notification",
                },
              ].map((row, i) => (
                <div key={i} className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 flex flex-col gap-3">
                  <div>
                    <p className="text-[10px] font-bold text-dark-500 uppercase tracking-widest mb-1">China</p>
                    <p className="text-sm text-dark-400">{row.china}</p>
                  </div>
                  <div className="h-px bg-danger-800/30" />
                  <div>
                    <p className="text-[10px] font-bold text-danger-400 uppercase tracking-widest mb-1">United States (Right Now)</p>
                    <p className="text-sm text-dark-200 font-medium">{row.us}</p>
                  </div>
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
            className="mt-6 text-center"
          >
            <div className="bg-danger-950/40 border-2 border-danger-700/40 rounded-2xl p-6 md:p-8">
              <p className="text-lg md:text-xl font-black text-white leading-relaxed mb-2">
                The only difference between their surveillance state and ours?
              </p>
              <p className="text-danger-400 font-black text-2xl md:text-3xl">
                Better branding.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE PATTERN ═══════════════════ */}
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
              The Pattern Is{" "}
              <span className="text-danger-500">Always the Same</span>
            </h2>
            <p className="text-dark-400 text-center max-w-2xl mx-auto mb-10">
              Build the infrastructure first. Justify it later. Expand the use cases quietly.
              By the time anyone notices, it&apos;s too late to object.
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
                    title: "\"It's just a cell tower\"",
                    text: "They call it better connectivity. Smart infrastructure. Progress. Nobody gets notified. No hearing is held. No vote.",
                    color: "bg-emerald-600",
                  },
                  {
                    phase: "Phase 2",
                    title: "\"We added a few sensors\"",
                    text: "IoT traffic monitors. Weather sensors. Speed detectors. \"Smart highway\" equipment. Sounds reasonable, right? No vote required.",
                    color: "bg-amber-600",
                  },
                  {
                    phase: "Phase 3",
                    title: "\"The cameras are for safety\"",
                    text: "ALPR cameras go up on the same infrastructure. Every plate, every car, every hour. Data goes to a cloud database. Searchable nationwide.",
                    color: "bg-orange-600",
                  },
                  {
                    phase: "Phase 4",
                    title: "\"Law enforcement needs access\"",
                    text: "Local police get access. Then state police. Then ICE. Then private companies through the \"Business Network.\" Your movements are now an open database.",
                    color: "bg-danger-600",
                  },
                  {
                    phase: "Phase 5",
                    title: "\"We've always done this\"",
                    text: "By the time anyone asks questions, it's a decade old. The contracts are locked. The data has been flowing for years. \"Removing it would cost too much.\" It's over.",
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
                We are at Phase 1.
              </p>
              <p className="text-dark-300 max-w-xl mx-auto leading-relaxed mb-6">
                The tower is up. The &ldquo;smart highway&rdquo; justification is in place.
                The only thing standing between Phase 1 and Phase 5 is{" "}
                <strong className="text-danger-400">you, right now, demanding it comes down.</strong>
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
              environmental, and property value risks &mdash;{" "}
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
                $30M cancer study, children&apos;s absorption, and the court ruling.
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
