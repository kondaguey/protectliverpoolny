"use client";

import Link from "next/link";
import Image from "next/image";
import QuickLinks from "@/components/QuickLinks";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ExternalLink,
  Bug,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function WildlifePage() {
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
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-lime-900/40 border border-lime-700/40 rounded-full text-lime-300 text-sm font-bold uppercase tracking-wider">
                  🦅 Federal Wildlife Law
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
              >
                Eagles Don't Avoid Towers.{" "}
                <br className="hidden sm:block" />
                <span className="text-danger-500">They Land on Them.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-xl text-dark-400 max-w-lg leading-relaxed"
              >
                100+ bald eagles. 1.7 miles away. No environmental review. No USFWS consultation.
                An industry already destroying eagle nests across America.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden border border-lime-800/30 shadow-2xl shadow-black/40">
                <Image
                  src="https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/3461547c-bf7c-403d-5f32-d7d6168f8e00/public"
                  alt="Bald eagle nesting on a cell tower — a documented phenomenon across the United States"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p className="text-sm text-dark-500 italic mt-3 text-center">
                Eagles nest on cell towers. When 5G upgrades arrive, the platforms — and the nests — get removed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={[
          { label: "Bald Eagles", id: "eagles" },
          { label: "Birds & Migration", id: "birds" },
          { label: "Bees & Pollinators", id: "bees" },
          { label: "Ecosystem-Wide Research", id: "ecosystem" },
          { label: "Take Action", id: "wildlife-cta" },
        ]}
      />

      {/* ═══════════════════ EAGLE SECTION ═══════════════════ */}
      <section id="eagles" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          {/* Eagle Roost — FOIL First */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-danger-500 text-sm font-bold uppercase tracking-widest mb-2">
                🦅 Bald Eagle Protection Act &bull; Federal Law
              </p>
              <h4 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)" }}>
                We Asked for the Environmental Reviews.{" "}
                <span className="text-danger-400">They Haven't Answered.</span>
              </h4>
              <p className="text-dark-200 text-base leading-relaxed mb-5">
                Federal guidelines require environmental review when siting towers near protected habitat.{" "}
                <strong className="text-white">Onondaga Lake hosts 100+ federally
                protected bald eagles</strong> — the largest urban wintering
                roost in New York State. This tower sits{" "}
                <strong className="text-danger-400">1.7 miles away</strong>, within
                their confirmed foraging range.
              </p>

              {/* FOIL callout */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5">
                <p className="text-base font-bold text-white mb-2">
                  📄 Freedom of Information Request — Filed & Pending
                </p>
                <p className="text-dark-300 text-sm leading-relaxed mb-3">
                  We filed a FOIL request for{" "}
                  <strong className="text-white">all SEQRA documents, environmental
                  impact assessments, RF emissions studies, and USFWS consultations</strong>.{" "}
                  The response: <em>&quot;We are researching your request and will notify you within 20 business days.&quot;</em>
                </p>
                <p className="text-dark-200 text-base font-semibold">
                  If the reviews were done — show us.{" "}
                  <span className="text-danger-400">If they weren't — why not?</span>
                </p>
              </div>

              {/* Supporting facts */}
              <p className="text-dark-400 text-sm font-bold uppercase tracking-widest mb-3">
                What We Do Know
              </p>
              <div className="space-y-3 mb-5">
                {/* Audubon EagleWatch — eagles nest on towers */}
                <div className="bg-danger-900/20 border border-danger-800/20 rounded-lg px-4 py-3">
                  <p className="text-base font-bold text-white mb-1">
                    Audubon: Eagles Nest on Cell Towers — Then Lose Their Homes
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    The <strong className="text-white">Audubon EagleWatch Program</strong> reports{" "}
                    <strong className="text-danger-400">20% of monitored bald eagle nests
                    in Florida</strong> are on human-made structures — including cell towers.
                    In some counties,{" "}
                    <strong className="text-danger-400">60% of all nests</strong>{" "}
                    are on man-made structures.
                  </p>
                  <a
                    href="https://fl.audubon.org/news/eaglewatch-volunteers-advocate-eagles-across-state"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-danger-400 hover:underline mt-2"
                  >
                    Audubon Florida — EagleWatch (Oct 2024)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 5G upgrades destroy nests */}
                <div className="bg-danger-900/20 border border-danger-800/20 rounded-lg px-4 py-3">
                  <p className="text-base font-bold text-white mb-1">
                    5G Upgrades Destroy Eagle Nests Nationwide
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    When telecoms upgrade to heavier 5G equipment, they{" "}
                    <strong className="text-danger-400">remove the platforms eagles
                    nested on</strong>. Eagles returning in 2023–2024 found nests gone —
                    with no platform,{" "}
                    <strong className="text-white">they couldn't rebuild</strong>.
                    Current USFWS permits allow removal but{" "}
                    <strong className="text-danger-400">don't prohibit permanent
                    alterations</strong> that prevent future nesting.
                  </p>
                  <p className="text-dark-200 text-sm mt-2 font-semibold">
                    &quot;Eliminating cell phone towers as possible nest sites could have a
                    negative impact on nesting success for Florida's Bald Eagles.&quot;
                    <span className="text-dark-400"> — Audubon EagleWatch</span>
                  </p>
                </div>

                {/* The trap */}
                <div className="bg-white/5 border border-danger-500/30 rounded-lg px-4 py-3">
                  <p className="text-base font-bold text-danger-400 mb-1">
                    ⚠️ This Tower Is a Trap for Onondaga Lake Eagles
                  </p>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    At 184 feet — nearly twice the height of highway light poles — this tower will be{" "}
                    <strong className="text-white">the tallest structure</strong>{" "}
                    near Onondaga Lake. With 100+ eagles 1.7 miles away, it's not <em>if</em> they
                    find it — it's <em>when</em>.{" "}
                    <strong className="text-white">Tower goes up → eagles nest → telecom
                    upgrades → nest destroyed.</strong>{" "}
                    Audubon has documented this cycle across Florida.{" "}
                    <strong className="text-danger-400">6G is already in development</strong> —
                    more upgrades, more nest removals for decades.
                  </p>
                </div>

                {/* USFWS guidelines */}
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <p className="text-base font-bold text-white mb-1">
                    USFWS: Site Towers Away From Roosts
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    USFWS guidelines state towers should be sited &quot;away from nests, foraging areas,
                    and communal roost sites.&quot; Required buffers:{" "}
                    <strong className="text-danger-400">½-mile (2,640 ft)</strong> from
                    communal roosts with line of sight, and{" "}
                    <strong className="text-danger-400">660 ft from any nest</strong>.
                    Were these evaluated? No documentation has been produced.
                  </p>
                  <a
                    href="https://www.fws.gov/sites/default/files/documents/national-bald-eagle-management-guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-danger-400 hover:underline mt-2"
                  >
                    USFWS Bald Eagle Management Guidelines (PDF)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Foraging range */}
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <p className="text-base font-bold text-white mb-1">
                    The Tower Is in Eagle Territory
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Eagle territories span{" "}
                    <strong className="text-danger-400">2.5–15 square miles</strong>.
                    At 1.7 miles from the roost, this tower sits squarely within foraging range.
                    Liverpool residents confirm eagles regularly fly over the area.
                  </p>
                  <a
                    href="https://www.audubon.org/field-guide/bird/bald-eagle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-danger-400 hover:underline mt-2"
                  >
                    National Audubon Society
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* RF radiation */}
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <p className="text-dark-400 text-xs font-bold uppercase tracking-widest mb-2">
                    Additional Concern
                  </p>
                  <p className="text-base font-bold text-white mb-1">
                    Peer-Reviewed: RF Radiation Harms Birds Near Towers
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Research in <em>Electromagnetic Biology and Medicine</em> (Balmori, 2006)
                    documented{" "}
                    <strong className="text-danger-400">population decline, nest abandonment,
                    and increased mortality</strong>{" "}
                    near tower base stations. White stork nests within 200m showed significantly
                    lower breeding success. Eagles perching directly on antennas face the
                    highest possible RF exposure.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/17178584/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-danger-400 hover:underline"
                    >
                      Balmori 2006 (PubMed)
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.researchgate.net/publication/51394628_Radiofrequency_radiation_and_wildlife"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-danger-400 hover:underline"
                    >
                      Balmori: RF & Wildlife (ResearchGate)
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-danger-900/30 border border-danger-800/20 rounded-xl p-4">
                <p className="text-base text-dark-100 leading-relaxed">
                  <strong className="text-white">Protected under the
                  Bald and Golden Eagle Protection Act.</strong>{" "}
                  Fines up to <strong className="text-danger-400">$250,000</strong> and criminal
                  prosecution. Was this tower sited in compliance with federal wildlife guidelines?{" "}
                  <strong className="text-danger-400">We asked. Still waiting.</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════ BIRDS ═══════════════════ */}
          <motion.div
            id="birds"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="bg-lime-950/20 border border-lime-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <h4 className="font-bold text-lime-300 mb-4" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)" }}>
                The Birds: 7 Million Deaths Per Year
              </h4>
              <p className="text-dark-200 text-base leading-relaxed mb-4">
                The <strong className="text-white">American Bird Conservancy</strong> reports
                towers kill{" "}
                <strong className="text-white">7 million birds per year</strong>{" "}
                in North America — primarily nocturnal migrants disoriented by tower lights.
              </p>

              {/* Dead Vultures Video */}
              <div className="rounded-xl overflow-hidden border border-lime-800/30 mb-5" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://customer-0td0xpcgba4t9wo5.cloudflarestream.com/b84c34b7bd21c03a888d706a0eb80e8a/iframe?poster=https%3A%2F%2Fcustomer-0td0xpcgba4t9wo5.cloudflarestream.com%2Fb84c34b7bd21c03a888d706a0eb80e8a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D1s%26height%3D600"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
              <p className="text-sm text-dark-500 italic mb-5 text-center">
                Dead vultures found at the base of the tower site in Liverpool, NY.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-dark-900/40 rounded-xl p-4">
                  <p className="text-lime-400 font-black text-2xl mb-1">100+</p>
                  <p className="text-white font-bold text-base mb-1">
                    Bald Eagles at Onondaga Lake
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    The largest urban bald eagle wintering roost in New York State —
                    directly adjacent to the tower site. Protected under the{" "}
                    <strong className="text-white">
                      Bald and Golden Eagle Protection Act
                    </strong>.
                  </p>
                </div>
                <div className="bg-dark-900/40 rounded-xl p-4">
                  <p className="text-danger-400 font-black text-2xl mb-1">Lose-Lose</p>
                  <p className="text-white font-bold text-base mb-1">
                    Lights Don't Fix This
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    No lights? Birds can't see it. Steady lights?{" "}
                    <strong className="text-white">Attract and disorient</strong>{" "}
                    birds, causing more deaths. Flashing lights still kill 30% of what
                    steady lights do. No version of this tower is safe.
                  </p>
                </div>
              </div>

              <p className="text-dark-300 text-sm leading-relaxed mb-3">
                Turkey vultures at the site are{" "}
                <strong className="text-white">federally protected</strong>{" "}
                under the Migratory Bird Treaty Act. As large, slow-soaring raptors,
                they're among the most collision-prone species.
              </p>

              <a
                href="https://abcbirds.org/strategies/communications-towers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-lime-400 hover:underline"
              >
                American Bird Conservancy: Tower Collisions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* ═══════════════════ BEES ═══════════════════ */}
          <motion.div
            id="bees"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <div className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <h4 className="font-bold text-amber-300 mb-4" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)" }}>
                The Bees: Peer-Reviewed and Devastating
              </h4>
              <p className="text-dark-200 text-base leading-relaxed mb-4">
                Peer-reviewed research <strong className="text-white">proves</strong> cell
                tower RF radiation decimates honeybee populations — disrupting navigation,
                reducing colony strength, and triggering collapse. Honeybees pollinate{" "}
                <strong className="text-white">one-third of all food humans eat</strong>.
              </p>
              <a
                href="https://ui.adsabs.harvard.edu/abs/2022E%26ES..979a2013K/abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:underline"
              >
                Peer-Reviewed Study: RF Effects on Honeybees
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* ═══════════════════ ECOSYSTEM-WIDE RESEARCH ═══════════════════ */}
          <motion.div
            id="ecosystem"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">
                Peer-Reviewed &bull; NIH / PubMed Central
              </p>
              <h4 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)" }}>
                The Entire Ecosystem Is{" "}
                <span className="text-emerald-400">at Risk</span>
              </h4>

              <p className="text-dark-200 text-base leading-relaxed mb-5">
                A 2022 study in <em>Reviews on Environmental Health</em> reviewed
                EMF effects across all wildlife and plant species:{" "}
                <strong className="text-white">current safety standards offer zero
                protection for any non-human species</strong> — and the harm is already measurable.
              </p>

              {/* Key finding cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <p className="text-4xl font-black text-danger-400 mb-1">390–570%</p>
                  <p className="text-white font-bold text-base mb-1">
                    More Radiation Absorbed by Insects Under 5G
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    5G wavelengths match insect body size, creating a{" "}
                    <strong className="text-white">resonance effect</strong> — up to 570%
                    more absorption vs. 4G.{" "}
                    <strong className="text-danger-400">&quot;Devastating holes in the food web.&quot;</strong>
                  </p>
                </div>
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <p className="text-4xl font-black text-emerald-400 mb-1">ZERO</p>
                  <p className="text-white font-bold text-base mb-1">
                    Wildlife Safety Standards
                  </p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    FCC/ICNIRP guidelines are <strong className="text-white">strictly
                    human-centric</strong> — protecting only against short-term tissue heating.{" "}
                    <strong className="text-danger-400">No protection</strong> for birds, bees,
                    trees, or any other species.
                  </p>
                </div>
              </div>

              {/* Natural navigation */}
              <div className="bg-dark-900/40 rounded-xl p-4 mb-5">
                <p className="text-base font-bold text-white mb-2">
                  Man-Made EMFs Override Natural Navigation
                </p>
                <p className="text-dark-300 text-sm leading-relaxed">
                  Migratory birds, bees, bats, and sea turtles navigate via Earth's
                  magnetic field using{" "}
                  <strong className="text-white">magnetite crystals</strong> and{" "}
                  <strong className="text-white">cryptochrome proteins</strong>.
                  Artificial tower EMFs overwhelm these sensors — causing disorientation,
                  failed migrations, and population decline.
                </p>
              </div>

              {/* Species effects */}
              <p className="text-dark-400 text-xs font-bold uppercase tracking-widest mb-3">
                Documented Effects by Species
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  {
                    species: "🐝 Pollinators",
                    effects: "Impaired memory & smell, hive abandonment, reduced egg-laying, increased mortality — linked to colony collapse disorder.",
                  },
                  {
                    species: "🦅 Birds",
                    effects: "Compromised immunity, altered behavior, harmed chick development, disrupted migration, nest abandonment near towers.",
                  },
                  {
                    species: "🌳 Trees & Plants",
                    effects: "9-year field studies show visible canopy damage, root decline, and altered cellular growth in exposed trees.",
                  },
                ].map((item) => (
                  <div key={item.species} className="bg-dark-900/60 rounded-xl p-4">
                    <p className="text-base font-bold text-white mb-2">{item.species}</p>
                    <p className="text-dark-300 text-sm leading-relaxed">{item.effects}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9732734/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:underline"
              >
                Full Study: EMF Effects on Wildlife & Plants (NIH/PMC)
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* EHT compilation */}
            <div className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-sm font-bold text-sky-400 uppercase tracking-widest mb-3">
                1,200+ Studies Reviewed &bull; Environmental Health Trust
              </p>
              <h4 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)" }}>
                The Most Comprehensive RF & Wildlife Review{" "}
                <span className="text-sky-400">Ever Published</span>
              </h4>
              <p className="text-dark-200 text-base leading-relaxed mb-4">
                Researchers reviewed <strong className="text-white">1,200+
                peer-reviewed studies</strong> on wireless radiation effects on flora and fauna.
                The <strong className="text-white">majority found adverse effects</strong> —
                even at exposures far below FCC limits:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  {
                    finding: "Reproduction & Development",
                    detail: "Stunted growth and increased embryo mortality across species.",
                  },
                  {
                    finding: "Navigation & Orientation",
                    detail: "Disruption of biological sensors animals use to migrate and survive.",
                  },
                  {
                    finding: "Cellular Health",
                    detail: "Oxidative stress, DNA damage, and disrupted metabolism.",
                  },
                  {
                    finding: "5G Makes It Worse",
                    detail: "Hundreds of thousands of new antennas push radiation closer to ground-level habitats — without environmental review.",
                  },
                ].map((item) => (
                  <div key={item.finding} className="bg-dark-900/40 rounded-xl p-4">
                    <p className="text-base font-bold text-sky-300 mb-1">{item.finding}</p>
                    <p className="text-dark-300 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Legal callout */}
              <div className="bg-sky-900/20 border border-sky-800/20 rounded-xl p-4 mb-4">
                <p className="text-base font-bold text-white mb-1">
                  ⚖️ EHT v. FCC — The Court Agreed
                </p>
                <p className="text-dark-300 text-sm leading-relaxed">
                  The Environmental Health Trust sued the FCC and{" "}
                  <strong className="text-sky-300">won</strong>. The U.S. Court of Appeals
                  ruled the FCC acted <strong className="text-white">unlawfully</strong> by
                  ignoring scientific evidence of harmful environmental impacts —
                  validating the need for ecosystem-inclusive regulations.
                </p>
              </div>

              <a
                href="https://ehtrust.org/study-finds-wireless-radiation-affects-wildlife/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:underline"
              >
                EHT: Wireless Radiation Affects Wildlife — Full Report
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Bottom line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
          >
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 text-center">
              <p className="text-dark-200 text-base leading-relaxed max-w-2xl mx-auto">
                An unlit, 184-foot tower in documented eagle habitat,
                adjacent to New York's largest urban eagle roost,
                surrounded by vultures and honeybees — with no public environmental review.{" "}
                <strong className="text-white">1,200+ studies confirm harm.
                A federal court confirmed the FCC ignored it.</strong>{" "}
                If a protected species is killed, someone is{" "}
                <strong className="text-white">legally liable</strong>.
                We'll be watching.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section id="wildlife-cta" className="py-20 md:py-28 px-4 scroll-mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Now You Know.{" "}
            <span className="text-danger-500">Now Do Something.</span>
          </h2>
          <p className="text-dark-400 text-xl mb-8 max-w-xl mx-auto">
            Sign the petition, call your representatives, and show up to the
            next Town Board meeting. They ignored us once—make sure they
            can't again.
          </p>
          <Link
            href="/take-action"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger-600 hover:bg-danger-500 text-white font-bold text-xl rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40 hover:shadow-danger-800/60 hover:scale-[1.03]"
          >
            Take Action Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
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
              <p className="text-sm text-dark-400">
                Property values, double standards, and the legal framework rigged against you.
              </p>
            </Link>
            <Link
              href="/the-facts/health"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Health Impacts
              </p>
              <p className="text-sm text-dark-400">
                RF radiation research, children's vulnerability, and setback distances.
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
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-dark-950 via-dark-950/95 to-transparent">
        <Link
          href="/take-action"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-danger-600 hover:bg-danger-500 text-white font-bold text-base rounded-xl transition-colors shadow-lg shadow-danger-900/60"
        >
          <AlertTriangle className="w-4 h-4" />
          SIGN THE PETITION & TAKE ACTION
        </Link>
      </div>
    </>
  );
}
