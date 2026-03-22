"use client";

import Link from "next/link";
import Image from "next/image";
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
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-lime-900/40 border border-lime-700/40 rounded-full text-lime-300 text-xs font-bold uppercase tracking-wider">
              🦅 Federal Wildlife Law
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            Eagles Don&apos;t Avoid Towers.{" "}
            <br className="hidden sm:block" />
            <span className="text-danger-500">They Land on Them.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            100+ bald eagles. 1.7 miles away. No environmental review. No USFWS consultation.
            And an industry that&apos;s already destroying eagle nests across America.
          </motion.p>

          {/* Eagle nesting image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-2xl mx-auto"
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
            <p className="text-xs text-dark-500 italic mt-3 text-center">
              Bald eagles regularly nest on cell towers. When 5G upgrades arrive, the platforms — and the nests — get removed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ EAGLE SECTION ═══════════════════ */}
      <section className="py-16 md:py-24 px-4">
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
              <p className="text-danger-500 text-xs font-bold uppercase tracking-widest mb-2">
                🦅 Bald Eagle Protection Act &bull; Federal Law
              </p>
              <h4 className="font-bold text-white mb-2" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)" }}>
                We Asked for the Environmental Reviews.{" "}
                <span className="text-danger-400">They Haven&apos;t Answered.</span>
              </h4>
              <p className="text-dark-200 text-sm leading-relaxed mb-5">
                Federal guidelines require environmental consideration when siting
                communication towers near protected wildlife habitat.{" "}
                <strong className="text-white">Onondaga Lake hosts 100+ federally
                protected bald eagles</strong> &mdash; the largest urban wintering
                roost in New York State. This tower sits{" "}
                <strong className="text-danger-400">1.7 miles away</strong>, within
                their confirmed foraging range.
              </p>

              {/* FOIL callout */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5">
                <p className="text-sm font-bold text-white mb-2">
                  📄 Freedom of Information Request — Filed &amp; Pending
                </p>
                <p className="text-dark-300 text-xs leading-relaxed mb-3">
                  We filed a formal FOIL request with New York State for{" "}
                  <strong className="text-white">all SEQRA documents, environmental
                  impact assessments, RF emissions studies, and USFWS consultations</strong>{" "}
                  related to this tower. The response: <em>&quot;We are researching your
                  request and will notify you within the next 20 business days.&quot;</em>
                </p>
                <p className="text-dark-200 text-sm font-semibold">
                  If the reviews were done &mdash; show us.{" "}
                  <span className="text-danger-400">If they weren&apos;t &mdash; why not?</span>
                </p>
              </div>

              {/* Supporting facts */}
              <p className="text-dark-400 text-xs font-bold uppercase tracking-widest mb-3">
                What We Do Know
              </p>
              <div className="space-y-3 mb-5">
                {/* PRIMARY: Audubon EagleWatch — eagles nest on towers */}
                <div className="bg-danger-900/20 border border-danger-800/20 rounded-lg px-4 py-3">
                  <p className="text-sm font-bold text-white mb-1">
                    Audubon: Eagles Nest on Cell Towers — Then Lose Their Homes
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    According to the{" "}
                    <strong className="text-white">National Audubon Society&apos;s
                    EagleWatch Program</strong>, roughly{" "}
                    <strong className="text-danger-400">20% of monitored bald eagle nests
                    in Florida occur on human-made structures</strong>{" "}
                    — including cell towers. Eagles are attracted to towers because
                    they&apos;re the tallest structures available for nesting and hunting perches.
                    In some counties,{" "}
                    <strong className="text-danger-400">60% of all eagle nests</strong>{" "}
                    are now on human-made structures.
                  </p>
                  <a
                    href="https://fl.audubon.org/news/eaglewatch-volunteers-advocate-eagles-across-state"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400 hover:underline mt-2"
                  >
                    Source: Audubon Florida — EagleWatch Report (Oct 2024)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* 5G upgrades destroy nests */}
                <div className="bg-danger-900/20 border border-danger-800/20 rounded-lg px-4 py-3">
                  <p className="text-sm font-bold text-white mb-1">
                    5G Upgrades Are Destroying Eagle Nests Nationwide
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    Audubon&apos;s EagleWatch documented that when telecom companies upgrade
                    to heavier 5G equipment, they{" "}
                    <strong className="text-danger-400">remove the platforms eagles built
                    nests on</strong> to reduce weight loads. Eagles that returned to nest
                    in 2023-2024 found their nests gone &mdash; and with no platform,{" "}
                    <strong className="text-white">they couldn&apos;t rebuild</strong>.
                    Current USFWS permits allow nest removal but{" "}
                    <strong className="text-danger-400">do not prohibit permanent
                    alterations</strong> that prevent future nesting.
                  </p>
                  <p className="text-dark-200 text-xs mt-2 font-semibold">
                    &quot;Eliminating cell phone towers as possible nest sites could have a
                    negative impact on nesting success for Florida&apos;s Bald Eagles.&quot;
                    <span className="text-dark-400"> — Audubon EagleWatch</span>
                  </p>
                  <a
                    href="https://fl.audubon.org/news/eaglewatch-volunteers-advocate-eagles-across-state"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400 hover:underline mt-2"
                  >
                    Source: Audubon Florida — EagleWatch Report (Oct 2024)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* The trap */}
                <div className="bg-white/5 border border-danger-500/30 rounded-lg px-4 py-3">
                  <p className="text-sm font-bold text-danger-400 mb-1">
                    ⚠️ This Tower Is a Trap for Onondaga Lake Eagles
                  </p>
                  <p className="text-dark-200 text-xs leading-relaxed">
                    At 184 feet, this tower will be{" "}
                    <strong className="text-white">one of the tallest structures</strong>{" "}
                    near Onondaga Lake &mdash; nearly twice the height of highway light poles.
                    Eagles are drawn to the highest available perch for hunting. With 100+
                    eagles 1.7 miles away, it&apos;s not a question of <em>if</em> they
                    find it &mdash; it&apos;s <em>when</em>.{" "}
                    <strong className="text-white">Tower goes up → eagles nest on it →
                    telecom needs an equipment upgrade → nest gets destroyed.</strong>{" "}
                    Audubon has already documented this cycle with 5G upgrades across Florida.
                    And the cycle doesn&apos;t stop:{" "}
                    <strong className="text-danger-400">6G is already in development</strong>,
                    meaning even heavier equipment, more upgrades, and more nest removals
                    for decades to come. Nobody asked whether it will happen here.
                  </p>
                </div>

                {/* USFWS guidelines */}
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <p className="text-sm font-bold text-white mb-1">
                    USFWS: Site Towers Away From Roosts and Foraging Areas
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    The USFWS National Bald Eagle Management Guidelines explicitly state that{" "}
                    <strong className="text-white">communication towers</strong>{" "}
                    should be sited &quot;away from nests, foraging areas, and communal roost
                    sites&quot; to prevent collisions. The guidelines require a{" "}
                    <strong className="text-danger-400">½-mile buffer (2,640 ft)</strong>{" "}
                    from communal roosts with direct line of sight, and at least{" "}
                    <strong className="text-danger-400">660 feet from any roost or nest</strong>.
                    Were these distances evaluated? We don&apos;t know &mdash; because no one has produced the documentation.
                  </p>
                  <a
                    href="https://www.fws.gov/sites/default/files/documents/national-bald-eagle-management-guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400 hover:underline mt-2"
                  >
                    Source: USFWS National Bald Eagle Management Guidelines (PDF)
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Foraging range */}
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <p className="text-sm font-bold text-white mb-1">
                    Foraging Range: The Tower Is in Eagle Territory
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    Bald eagle territories range from{" "}
                    <strong className="text-danger-400">2.5 to 15 square miles</strong>{" "}
                    (National Audubon Society). At 1.7 miles from the roost, this tower
                    sits squarely within the daily foraging corridor. Liverpool residents
                    confirm eagles regularly fly over the area. This isn&apos;t speculation &mdash;
                    it&apos;s observable fact.
                  </p>
                  <a
                    href="https://www.audubon.org/field-guide/bird/bald-eagle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400 hover:underline mt-2"
                  >
                    Source: National Audubon Society
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* SECONDARY: RF radiation */}
                <div className="bg-black/20 rounded-lg px-4 py-3">
                  <p className="text-dark-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                    Additional Concern
                  </p>
                  <p className="text-sm font-bold text-white mb-1">
                    Peer-Reviewed: RF Radiation Harms Birds Near Towers
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    Beyond collision and nesting risks, published research in{" "}
                    <em>Electromagnetic Biology and Medicine</em> (Balmori, 2006)
                    documented{" "}
                    <strong className="text-danger-400">population decline, nest abandonment,
                    and increased mortality</strong>{" "}
                    in birds near cell tower base stations. White stork nests within 200m
                    of towers showed significantly lower breeding success.
                    Eagles that perch directly on tower antennas &mdash; at zero meters &mdash;
                    face the highest possible RF exposure.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/17178584/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400 hover:underline"
                    >
                      Balmori 2006: Stork Study (PubMed)
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.researchgate.net/publication/51394628_Radiofrequency_radiation_and_wildlife"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400 hover:underline"
                    >
                      Balmori: RF &amp; Wildlife (ResearchGate)
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-danger-900/30 border border-danger-800/20 rounded-xl p-4">
                <p className="text-sm text-dark-100 leading-relaxed">
                  <strong className="text-white">Bald eagles are protected under the
                  Bald and Golden Eagle Protection Act.</strong>{" "}
                  Penalties for disturbing, injuring, or killing a bald eagle include fines
                  up to <strong className="text-danger-400">$250,000</strong> and criminal
                  prosecution. The question is simple: was this tower sited in compliance
                  with federal wildlife protection guidelines? We asked.{" "}
                  <strong className="text-danger-400">We&apos;re still waiting for the answer.</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════ BIRDS ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
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
              <p className="text-xs text-dark-500 italic mb-5 text-center">
                Dead vultures found at the base of the tower site in Liverpool, NY.
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
          </motion.div>

          {/* ═══════════════════ BEES ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
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
          </motion.div>

          {/* ═══════════════════ ECOSYSTEM-WIDE RESEARCH ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
                Peer-Reviewed &bull; NIH / PubMed Central
              </p>
              <h4 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}>
                The Science Is In:{" "}
                <span className="text-emerald-400">The Entire Ecosystem Is at Risk</span>
              </h4>

              <p className="text-dark-200 text-sm leading-relaxed mb-5">
                A 2022 peer-reviewed study published in{" "}
                <em>Reviews on Environmental Health</em> and indexed on NIH/PubMed Central
                reviewed the full body of research on EMF effects across all wildlife and plant
                species. The conclusion: <strong className="text-white">current safety
                standards offer zero protection for any non-human species</strong> — and the
                harm is already measurable.
              </p>

              {/* Key finding cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <p className="text-3xl font-black text-danger-400 mb-1">390–570%</p>
                  <p className="text-white font-bold text-sm mb-1">
                    More Radiation Absorbed by Insects Under 5G
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    5G&apos;s shorter wavelengths match the body size of small insects,
                    creating a <strong className="text-white">resonance effect</strong> that
                    causes up to 570% more radiation absorption compared to 4G. Researchers
                    warn this could create{" "}
                    <strong className="text-danger-400">&quot;devastating holes in the food web.&quot;</strong>
                  </p>
                </div>
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <p className="text-3xl font-black text-emerald-400 mb-1">ZERO</p>
                  <p className="text-white font-bold text-sm mb-1">
                    Safety Standards Exist for Wildlife
                  </p>
                  <p className="text-dark-300 text-xs leading-relaxed">
                    FCC and ICNIRP guidelines are <strong className="text-white">strictly
                    human-centric</strong> — they only protect against short-term tissue
                    heating. They offer <strong className="text-danger-400">no protection
                    whatsoever</strong> for birds, bees, trees, or any other species subjected
                    to chronic, low-level environmental exposure.
                  </p>
                </div>
              </div>

              {/* Disruption of natural sensors */}
              <div className="bg-dark-900/40 rounded-xl p-4 mb-5">
                <p className="text-sm font-bold text-white mb-2">
                  Man-Made EMFs Override Animals&apos; Natural Navigation
                </p>
                <p className="text-dark-300 text-xs leading-relaxed">
                  Many species — including migratory birds, bees, bats, and sea turtles —
                  rely on Earth&apos;s magnetic field for navigation via biological mechanisms
                  like <strong className="text-white">magnetite crystals</strong> and{" "}
                  <strong className="text-white">cryptochrome proteins</strong>. The influx
                  of artificial EMFs from cell towers easily overwhelms and disrupts these
                  naturally evolved sensors, causing disorientation, failed migrations, and
                  population decline.
                </p>
              </div>

              {/* Specific species effects */}
              <p className="text-dark-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                Documented Effects by Species
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-5">
                {[
                  {
                    species: "🐝 Pollinators",
                    effects: "Impaired memory & smell, swarming distress signals, hive abandonment, reduced queen egg-laying, increased mortality — linked to colony collapse disorder.",
                  },
                  {
                    species: "🦅 Birds",
                    effects: "Compromised immune systems, altered behavior, harm to chick development, disrupted navigation in migratory species, nest abandonment near towers.",
                  },
                  {
                    species: "🌳 Trees & Plants",
                    effects: "9-year field studies show cell tower radiation causes visible canopy damage, root decline, and altered cellular growth patterns in exposed trees.",
                  },
                ].map((item) => (
                  <div key={item.species} className="bg-dark-900/60 rounded-xl p-4">
                    <p className="text-sm font-bold text-white mb-2">{item.species}</p>
                    <p className="text-dark-300 text-xs leading-relaxed">{item.effects}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9732734/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
                >
                  Full Study: EMF Effects on Wildlife &amp; Plants (NIH/PMC)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* EHT compilation */}
            <div className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
                1,200+ Studies Reviewed &bull; Environmental Health Trust
              </p>
              <h4 className="font-bold text-white mb-4" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}>
                The Most Comprehensive Review of RF &amp; Wildlife{" "}
                <span className="text-sky-400">Ever Published</span>
              </h4>
              <p className="text-dark-200 text-sm leading-relaxed mb-4">
                U.S. researchers reviewed <strong className="text-white">over 1,200
                peer-reviewed studies</strong> on the biological effects of non-ionizing
                wireless radiation on flora and fauna. The{" "}
                <strong className="text-white">majority found adverse effects</strong> —
                even at ambient, low-level exposures far below current FCC limits:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  {
                    finding: "Reproduction & Development",
                    detail: "Stunted growth and increased embryo mortality across species.",
                  },
                  {
                    finding: "Navigation & Orientation",
                    detail: "Disruption of the biological sensors animals use to migrate and survive.",
                  },
                  {
                    finding: "Cellular Health",
                    detail: "Oxidative stress, DNA damage, and disrupted metabolism at cellular level.",
                  },
                  {
                    finding: "5G Makes It Worse",
                    detail: "Hundreds of thousands of new \"small cell\" antennas push radiation sources closer to ground-level habitats — without environmental review.",
                  },
                ].map((item) => (
                  <div key={item.finding} className="bg-dark-900/40 rounded-xl p-4">
                    <p className="text-sm font-bold text-sky-300 mb-1">{item.finding}</p>
                    <p className="text-dark-300 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Legal callout */}
              <div className="bg-sky-900/20 border border-sky-800/20 rounded-xl p-4 mb-4">
                <p className="text-sm font-bold text-white mb-1">
                  ⚖️ EHT v. FCC — The Court Agreed
                </p>
                <p className="text-dark-300 text-xs leading-relaxed">
                  The Environmental Health Trust sued the FCC in 2021 and{" "}
                  <strong className="text-sky-300">won</strong>. The U.S. Court of Appeals
                  ruled that the FCC had acted{" "}
                  <strong className="text-white">unlawfully</strong> by ignoring extensive
                  scientific evidence regarding the harmful environmental impacts of wireless
                  radiation — validating the urgent need for updated, ecosystem-inclusive
                  regulations.
                </p>
              </div>

              <a
                href="https://ehtrust.org/study-finds-wireless-radiation-affects-wildlife/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
              >
                EHT: Wireless Radiation Affects Wildlife — Full Report
                <ExternalLink className="w-3 h-3" />
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
              <p className="text-dark-200 text-sm leading-relaxed max-w-2xl mx-auto">
                An unlit, 184-foot tower in documented bald eagle habitat,
                adjacent to New York&apos;s largest urban eagle roost,
                surrounded by turkey vultures and honeybee populations — with
                no environmental review shared with the public.{" "}
                <strong className="text-white">1,200+ peer-reviewed studies
                confirm harm. A federal court confirmed the FCC ignored it.</strong>{" "}
                If a single protected species is killed, someone is{" "}
                <strong className="text-white">legally liable</strong>. And
                we&apos;ll be watching.
              </p>
            </div>
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

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section className="py-12 px-4 border-t border-dark-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
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
              <p className="text-xs text-dark-400">
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
              <p className="text-xs text-dark-400">
                RF radiation research, children&apos;s vulnerability, and setback distances.
              </p>
            </Link>
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                Aviation & Safety →
              </p>
              <p className="text-xs text-dark-400">
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
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-danger-600 hover:bg-danger-500 text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-danger-900/60"
        >
          <AlertTriangle className="w-4 h-4" />
          SIGN THE PETITION & TAKE ACTION
        </Link>
      </div>
    </>
  );
}
