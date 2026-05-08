"use client";

import Link from "next/link";
import Image from "next/image";
import QuickLinks from "@/components/QuickLinks";
import WeNotAlone from "@/components/WeNotAlone";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HighwaySafetyPage() {
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
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-900/40 border border-orange-700/40 rounded-full text-orange-300 text-sm font-bold uppercase tracking-wider">
                  ⚠️ Highway Safety &amp; The Jurisdiction Trap
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
              >
                Welcome to Syracuse,{" "}
                <br className="hidden sm:block" />
                <span className="text-danger-500">Phoenix Tower.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 text-xl text-dark-400 max-w-lg leading-relaxed"
              >
                A 184-foot industrial structure in the I-90 Exit 37 infield. Syracuse winters. Highway-speed traffic. And a Florida-based developer that clearly hasn&apos;t checked the forecast.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden border border-orange-800/30 shadow-2xl shadow-black/40">
                <Image
                  src="https://media.protectliverpoolny.org/evidence/highway-safety.png"
                  alt="Cell tower physical hazards — ice shedding, fire, and structural failure documentation"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuickLinks
        links={[
          { label: "Ice Shedding", id: "ice" },
          { label: "Tower Fires", id: "fire" },
          { label: "The Hinge Point Myth", id: "collapse" },
          { label: "FOIL Findings (May 8, 2026)", id: "foil-findings" },
          { label: "The Jurisdiction Trap", id: "jurisdiction" },
          { label: "Our Demand", id: "demand" },
          { label: "Take Action", id: "highway-cta" },
        ]}
      />

      {/* ═══════════════════ PHYSICS VS PROMISES ═══════════════════ */}
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
              Physics vs. Promises
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              NYSTA allowed a 184-foot tower inside a highway infield. The developer claims it&apos;s safe. Gravity, local weather, and historical data say otherwise.
            </p>
          </motion.div>

          {/* ── ICE SHEDDING ── */}
          <motion.div
            id="ice"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-6 scroll-mt-24"
          >
            <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              🧊 Lethal Ice Shedding
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                You might be thinking: other tall structures handle winter just fine. Here&apos;s how this is different.
              </p>
              <p>
                Skyscrapers are heated, melting snow gradually, and are architected with ledges and catchments for pedestrian safety. A 184-foot monopole is a{" "}
                <strong className="text-white">dead thermal sink with a sheer vertical drop</strong>. Under the cellular engineering standard (
                <a href="https://www.dielectric.com/wp-content/uploads/2021/03/TIA-222-Codes-and-Dielectric-Antenna-Design-March-2021-Final.pdf" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline decoration-sky-400/40 hover:decoration-sky-400">TIA-222</a>
                ), these structures are known to heavily accrete radial glaze ice. When the sun hits the dark metal, it doesn&apos;t just drip — it sheds.
              </p>
              <p>
                This is a documented federal hazard.{" "}
                <a href="https://insidetowers.com/its-killer-icicle-season/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline decoration-sky-400/40 hover:decoration-sky-400">OSHA explicitly warns</a>{" "}
                that ice falling from communication towers can travel{" "}
                <strong className="text-white">50 to 100 feet horizontally from the base</strong>, and even further when carried by high winds. Tower crews have documented{" "}
                <strong className="text-white">&quot;refrigerator-sized chunks&quot;</strong>{" "}
                of ice flattening work vehicles parked below.
              </p>
              <p>
                State highway departments routinely close traffic lanes under unheated steel structures due to ice-shed hazards. The{" "}
                <a href="https://www.mackinacbridge.org/falling-ice-closures-again-possible-at-mackinac-bridge/" target="_blank" rel="noopener noreferrer" className="text-sky-300 underline decoration-sky-400/40 hover:decoration-sky-400">Mackinac Bridge Authority</a>{" "}
                regularly halts highway traffic due to falling ice from its steel towers, citing{" "}
                <strong className="text-white">&quot;garage door-sized sheets&quot;</strong>{" "}
                shattering on the roadway and damaging vehicles.
              </p>
              <p>
                Syracuse averages{" "}
                <strong className="text-white">127 inches of snow annually</strong>. Every freeze-thaw cycle is a potential ice-shed event. By placing this tower directly adjacent to an active I-90 ramp, the developer has introduced a documented projectile hazard to vehicles traveling at 65 mph.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { stat: "~100 ft", label: "Tower to\noff-ramp", color: "text-white" },
                { stat: "50–100 ft", label: "OSHA ice\ntravel range", color: "text-sky-400" },
                { stat: "127\"", label: "Syracuse\nannual snow", color: "text-sky-400" },
                { stat: "65 mph", label: "Ramp\ntraffic speed", color: "text-danger-400" },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center"
                >
                  <p className={`text-2xl md:text-3xl font-black ${item.color}`}>
                    {item.stat}
                  </p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1 whitespace-pre-line leading-tight">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── TOWER FIRES ── */}
          <motion.div
            id="fire"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-6 scroll-mt-24"
          >
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
              🔥 Uncontrollable High-Altitude Fires
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                Electrical faults in cell towers spark fires. Local fire departments do not possess ladder trucks capable of reaching 184 feet.{" "}
                <strong className="text-white">If the top of this monopole catches fire, the fire department has to let it burn.</strong>{" "}
                Melting plastic, fiberglass, and cables will drop directly onto the active Interstate 90 on-ramp and surrounding brush.
              </p>
              <p>
                There is no local mitigation plan for a tower fire over a highway ramp during rush hour.
              </p>
            </div>
          </motion.div>

          {/* ── STRUCTURAL COLLAPSE ── */}
          <motion.div
            id="collapse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-orange-950/20 border border-orange-800/30 rounded-2xl p-6 md:p-8 mb-6 scroll-mt-24"
          >
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
              🏗️ The &quot;Hinge Point&quot; Myth
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                Telecom engineers claim towers are designed with &quot;hinge points&quot; to fold rather than fall flat. But an engineered hinge point does not control the{" "}
                <strong className="text-white">direction</strong>{" "}of the collapse. Severe wind and asymmetrical ice loading dictate where the steel goes.
              </p>
              <p>
                If this tower folds at 90 feet and falls North or East, it hits trees. If it falls South or Southwest, tons of galvanized steel crash{" "}
                <strong className="text-danger-400">directly across the active I-90 ramp</strong>.
              </p>
              <p>
                The developer introduced a structure where a{" "}
                <strong className="text-white">50/50 coin toss</strong>{" "}during a failure dictates whether it lands in the dirt or blocks emergency vehicles and causes a highway collision.
              </p>
            </div>
          </motion.div>

          {/* ═══════════════════ FOIL FINDINGS (May 8, 2026) ═══════════════════ */}
          <motion.div
            id="foil-findings"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="scroll-mt-24 mb-6"
          >
            <div className="bg-danger-950/30 border-2 border-danger-700/40 rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
                📂 New Disclosures from the May 8, 2026 FOIL Production
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                What the Documents{" "}
                <span className="text-danger-400">Actually Show</span>
              </h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                NYSTA produced 81 documents on May 8, 2026 in response to FOIL Request{" "}
                <strong className="text-white">#R000082-032026</strong>. The full set is hosted at{" "}
                <Link href="/foil/" className="text-danger-300 underline decoration-danger-500/40 hover:decoration-danger-400">
                  /foil/
                </Link>
                {" "}and catalogued at{" "}
                <Link href="/the-facts/foil-evidence" className="text-danger-300 underline decoration-danger-500/40 hover:decoration-danger-400">
                  /the-facts/foil-evidence
                </Link>
                . Four findings directly impact highway safety. Each is sourced to a specific filename you can read for yourself.
              </p>
            </div>
          </motion.div>

          {/* ── DIESEL OPERATION ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="bg-amber-950/20 border border-amber-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              ⛽ The Diesel Operation They Never Mentioned
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                Documented in <strong className="text-white">NYSTA Building Permit SYR-2025-003</strong> (issued December 2, 2025 by Code Compliance Specialist Joshua Stagnitti, expires December 1, 2028) and confirmed on AT&amp;T&rsquo;s construction drawings Rev 2 (Sheet T01) &mdash; a piece of equipment never disclosed in any public meeting or community-facing document:
              </p>
              <div className="bg-dark-950/60 border border-amber-700/30 rounded-xl p-5 my-2">
                <p className="text-base text-white font-semibold mb-2">
                  A <span className="text-amber-300">30 kW diesel generator</span> with a{" "}
                  <span className="text-amber-300">145-gallon belly tank</span>, mounted on a steel platform at grade inside a 50&rsquo;&times;50&rsquo; fenced compound, approximately 100 feet from the active I-90 off-ramp.
                </p>
                <p className="text-xs text-dark-500 italic">
                  Sources:{" "}
                  <a
                    href="https://media.protectliverpoolny.org/foil/nysta-building-permit-syr-2025-003-20251202.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline decoration-amber-500/40 hover:decoration-amber-400"
                  >
                    NYSTA Building Permit SYR-2025-003
                  </a>
                  ;{" "}
                  <a
                    href="https://media.protectliverpoolny.org/foil/att-construction-drawings-rev2-20251107.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 underline decoration-amber-500/40 hover:decoration-amber-400"
                  >
                    AT&amp;T Construction Drawings Rev 2 (11/7/2025)
                  </a>
                </p>
              </div>
              <p className="text-base font-semibold text-white">
                Risks the FOIL response does <em>not</em>{" "}address:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong className="text-white">Fuel-spill onto the highway</strong> &mdash; 145 gallons of diesel within the I-90 right-of-way drainage shed.
                </li>
                <li>
                  <strong className="text-white">Fire risk</strong> &mdash; an unattended fuel tank under a steel monopole that the local fire department cannot reach.
                </li>
                <li>
                  <strong className="text-white">Air-quality compliance</strong> &mdash; no Spill Prevention Control and Countermeasure (SPCC) plan or NSPS Subpart IIII compliance documentation produced.
                </li>
                <li>
                  <strong className="text-white">Stormwater runoff</strong> &mdash; the compound sits adjacent to delineated wetlands per the FOIL response.
                </li>
                <li>
                  <strong className="text-white">Refueling truck ingress</strong> &mdash; diesel deliveries via a tanker on a highway off-ramp shoulder, recurring for the life of the tower.
                </li>
              </ul>
              <p>
                None of this was raised in a public meeting because there was no public meeting. None of it was raised in environmental review because, as NYSTA confirmed in the same FOIL response,{" "}
                <strong className="text-danger-400">no Alternative Site Analysis was ever conducted</strong>.
              </p>
            </div>
          </motion.div>

          {/* ── SABRE DESIGN PARAMETERS ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={5}
            className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              📐 What Sabre Industries Designed &mdash; In Their Own Numbers
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                The 184-foot monopole was designed by <strong className="text-white">Sabre Industries, Inc.</strong>{" "}of Alvarado, Texas. Engineer of record: <strong className="text-white">Robert Beacom</strong>, sealed July 15, 2025 (license expires July 31, 2026). The 36-page sealed structural design report (Job 25-3277-JDS-R1, Rev B) discloses every design parameter that goes into the tower&rsquo;s safety calculations.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-dark-950/60 border-b border-sky-700/30">
                      <th className="text-left p-3 font-bold text-sky-300">Parameter</th>
                      <th className="text-left p-3 font-bold text-sky-300">Value</th>
                      <th className="text-left p-3 font-bold text-sky-300">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-dark-200">
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Standard</td>
                      <td className="p-3">ANSI/TIA-222-H</td>
                      <td className="p-3 text-dark-400">NY Building Code Chapter 35 references the older TIA-222-G-2005</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Wind speed (no ice)</td>
                      <td className="p-3">109 mph</td>
                      <td className="p-3 text-dark-400">3-second gust</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Wind speed (with ice)</td>
                      <td className="p-3">40 mph</td>
                      <td className="p-3 text-dark-400">3-second gust</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Design ice thickness</td>
                      <td className="p-3"><strong className="text-white">1.50 inches</strong></td>
                      <td className="p-3 text-dark-400">Drives ice-shedding throw analysis &mdash; see below</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Risk Category</td>
                      <td className="p-3"><strong className="text-sky-300">II</strong></td>
                      <td className="p-3 text-dark-400">Lowest meaningful category &mdash; arguably should be III given highway/residential proximity</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Site Class</td>
                      <td className="p-3">D (DEFAULT)</td>
                      <td className="p-3 text-dark-400"><em>Not field-verified</em></td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Base Moment</td>
                      <td className="p-3"><strong className="text-white">6,352.75 ft-kips</strong></td>
                      <td className="p-3 text-dark-400">Overturning load the foundation must resist</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Base Axial / Shear</td>
                      <td className="p-3">69.92 kips / 48.07 kips</td>
                      <td className="p-3 text-dark-400">At design wind</td>
                    </tr>
                    <tr className="border-b border-dark-800/40">
                      <td className="p-3 font-semibold">Top Deflection / Sway</td>
                      <td className="p-3">9.54 ft / 4.99&deg;</td>
                      <td className="p-3 text-dark-400">At design wind</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Foundation</td>
                      <td className="p-3">Two options designed</td>
                      <td className="p-3 text-dark-400">Type undecided in this report</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The <strong className="text-sky-300">Risk Category II</strong>{" "}selection is the cost-savings choice. ANSI/TIA-222-H assigns Risk Category III to structures whose failure &ldquo;would cause a substantial impact on health, safety, environment, or essential services.&rdquo; A 184-foot tower ~100 feet from an active I-90 off-ramp, adjacent to R-O residential zoning, with 145 gallons of diesel fuel and three-carrier commercial 5G equipment, plausibly meets that bar. Risk Category II reduces required design loads &mdash; an engineering choice with cost implications.
              </p>
              <p>
                <strong className="text-sky-300">Site Class D (DEFAULT)</strong>{" "}means the soil class was assumed, not field-verified. Tectonic Engineering&rsquo;s geotechnical boring (B-1, drilled 11/6/2024 to 50 ft depth) showed wet, layered silty sand transitioning to wet sandy silt with rock fragments, and groundwater at 28.10 ft. Default class assumption may underestimate seismic amplification.
              </p>
              <p className="text-xs text-dark-500 italic">
                Source:{" "}
                <a
                  href="https://media.protectliverpoolny.org/foil/sabre-structural-design-report-rev-b-20250715.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline decoration-sky-500/40 hover:decoration-sky-400"
                >
                  25-3277-JDS-R1-RB Permit Package — Sabre Industries Structural Design Report (Rev B)
                </a>
              </p>
            </div>
          </motion.div>

          {/* ── TOWER STANDARD ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={5}
            className="bg-orange-950/20 border border-orange-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
              📐 The Tower Is Built to a Standard Not in the NY Building Code
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                The structural design uses the cellular tower industry standard{" "}
                <strong className="text-white">ANSI/TIA-222-H</strong> (current revision). New York State Building Code Chapter 35 references the{" "}
                <strong className="text-white">older 222-G-2005</strong>{" "}standard. NYSTA&rsquo;s own engineer flagged this in writing.
              </p>
              <div className="bg-dark-950/60 border border-orange-700/30 rounded-xl p-5">
                <p className="text-sm text-dark-300 italic mb-2">
                  &ldquo;ANSI/TIA-222-H structural standard used; NY State Building Code Chapter 35 only references the older &lsquo;222-G&mdash;2005&rsquo; standard.&rdquo;
                </p>
                <p className="text-xs text-dark-500">
                  &mdash; NYSTA review item #3, 8/27/2025; carried unresolved into 11/6/2025 AT&amp;T Round 2. PTI&rsquo;s response was simply &ldquo;DRAWINGS UPDATED.&rdquo; The standards mismatch was never reconciled in writing in the production. Source:{" "}
                  <a
                    href="https://media.protectliverpoolny.org/foil/exit-37-att-review-8-27-2025.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline decoration-orange-500/40 hover:decoration-orange-400"
                  >
                    Exit_37_Cell_Tower_AT_T_8-27-2025.docx
                  </a>
                  ,{" "}
                  <a
                    href="https://media.protectliverpoolny.org/foil/exit-37-att-review-r2-11-6-2025.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline decoration-orange-500/40 hover:decoration-orange-400"
                  >
                    Exit_37_Cell_Tower_AT_T_Review__2_11-6-2025.docx
                  </a>
                  .
                </p>
              </div>
              <p>
                The two standards differ in wind-load assumptions, ice-load assumptions, and analysis methodology. Either the tower is built to a code New York doesn&rsquo;t adopt, or it is built to a code NYSTA didn&rsquo;t produce documentation for. We&rsquo;re still asking which.
              </p>
            </div>
          </motion.div>

          {/* ── FOOTER DEPTH ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={6}
            className="bg-rose-950/20 border border-rose-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
              📏 Verizon&rsquo;s First-Round Footer Was Below NY Code Minimum
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                On the first round of plan review, Verizon&rsquo;s structural footer for its co-located equipment was submitted at <strong className="text-white">3&rsquo;-6&rdquo;</strong>{" "}deep. New York Code minimum:{" "}
                <strong className="text-white">4&rsquo; deep to bottom of footer to finish grade</strong>.
              </p>
              <div className="grid grid-cols-2 gap-3 my-2">
                <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-rose-400">4&rsquo;-0&rdquo;</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1">Code minimum</p>
                </div>
                <div className="bg-dark-950/60 border border-rose-700/30 rounded-xl p-4 text-center">
                  <p className="text-3xl font-black text-danger-400">3&rsquo;-6&rdquo;</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1">As submitted</p>
                </div>
              </div>
              <p className="text-xs text-dark-500 italic">
                Source:{" "}
                <a
                  href="https://media.protectliverpoolny.org/foil/verizon-exit-37-review-10-3-2025.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 underline decoration-rose-500/40 hover:decoration-rose-400"
                >
                  Verizon_Exit_37_Review_10-3-2024.docx
                </a>
                {" "}(filename misnamed; internal review date 10/3/2025), item C-8 Detail 2. The same engineering firm (Tectonic Engineering) authored the geotechnical investigation. Verizon revised in the second round on 10/10/2025.
              </p>
              <p>
                Six inches below code on the first round &mdash; on a 184-foot monopole adjacent to an active highway off-ramp &mdash; is not a clerical typo. It is the kind of error that NYSTA&rsquo;s engineering review is supposed to catch <em>before</em>{" "}the application clears, not after the public files a FOIL.
              </p>
            </div>
          </motion.div>

          {/* ── FOUNDATION MISMATCH ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={7}
            className="bg-fuchsia-950/20 border border-fuchsia-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-3">
              🏗️ The Foundation Type Did Not Match the Structural Analysis
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                The TEP Engineering Structural Analysis Report calculated tower loads against a{" "}
                <strong className="text-white">drilled pier</strong>{" "}foundation. The approved Construction Drawings show a{" "}
                <strong className="text-white">pad/pier</strong>{" "}foundation.
              </p>
              <div className="bg-dark-950/60 border border-fuchsia-700/30 rounded-xl p-5">
                <p className="text-sm text-dark-300 italic mb-2">
                  &ldquo;This report mentions a drilled pier foundation that does not match up with the approved construction plans for the tower.&rdquo;
                </p>
                <p className="text-xs text-dark-500">
                  &mdash; NYSTA review item #18, 8/27/2025, carried into 11/6/2025 AT&amp;T Round 2. Source:{" "}
                  <a
                    href="https://media.protectliverpoolny.org/foil/exit-37-att-review-8-27-2025.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-400 underline decoration-fuchsia-500/40 hover:decoration-fuchsia-400"
                  >
                    Exit_37_Cell_Tower_AT_T_8-27-2025.docx
                  </a>
                  .
                </p>
              </div>
              <p>
                A foundation-type mismatch between the structural analysis input and the as-built design is a{" "}
                <strong className="text-danger-400">textbook safety review trigger</strong>. NYSTA closed this item without producing the reconciliation memo &mdash; the document showing that the loads were re-calculated against the actual foundation. We&rsquo;ve asked. It is not in the production.
              </p>
            </div>
          </motion.div>

          {/* ── ICE-SHEDDING FROM SABRE ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={8}
            className="bg-cyan-950/20 border border-cyan-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
              🧊 Ice-Shedding Hazard &mdash; Calculated From Sabre&rsquo;s Own Numbers
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                Until May 8, 2026, the campaign&rsquo;s ice-shedding analysis cited{" "}
                <a href="https://insidetowers.com/its-killer-icicle-season/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline decoration-cyan-500/40 hover:decoration-cyan-400">OSHA&rsquo;s 50&ndash;100 ft horizontal heuristic</a>{" "}
                applied to a generic 184-ft tower in Syracuse weather. Now, with the Sabre design report in hand, we have <strong className="text-white">project-specific design parameters</strong>:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-dark-950/60 border border-cyan-700/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-cyan-300">184 ft</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1 leading-tight">Total height (180&rsquo; pole + 4&rsquo; lightning rod)</p>
                </div>
                <div className="bg-dark-950/60 border border-cyan-700/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-cyan-300">1.50&rdquo;</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1 leading-tight">Design ice thickness (Sabre)</p>
                </div>
                <div className="bg-dark-950/60 border border-cyan-700/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-cyan-300">109 mph</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1 leading-tight">Design wind speed (Sabre)</p>
                </div>
                <div className="bg-dark-950/60 border border-danger-700/30 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-danger-400">~100 ft</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider font-bold mt-1 leading-tight">Tower base to active off-ramp</p>
                </div>
              </div>
              <p>
                These are not abstract numbers. They are the <em>design assumptions</em>{" "}the manufacturer used to engineer the structure. A 184-ft tower designed to accumulate <strong className="text-white">1.5 inches of radial ice</strong>{" "}in <strong className="text-white">109 mph design wind</strong>{" "}is, by any reasonable application of OSHA&rsquo;s 50&ndash;100 ft horizontal-throw heuristic, a documented projectile hazard above an active highway off-ramp.
              </p>
              <p>
                The campaign&rsquo;s next step is a project-specific ice-shed calculation using these inputs. Until then, the responsible parties &mdash; PTI, NYSTA, and the FHWA &mdash; can produce one. Our position remains: <strong className="text-cyan-300">Sabre&rsquo;s design parameters are public now. The ice-throw envelope follows from physics. Either someone calculates it, or the public should know it has not been calculated.</strong>
              </p>
              <p className="text-xs text-dark-500 italic">
                Source:{" "}
                <a
                  href="https://media.protectliverpoolny.org/foil/sabre-structural-design-report-rev-b-20250715.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline decoration-cyan-500/40 hover:decoration-cyan-400"
                >
                  Sabre Industries Structural Design Report Rev B (7/15/2025)
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ JURISDICTION TRAP ═══════════════════ */}
      <section id="jurisdiction" className="py-16 md:py-24 px-4 scroll-mt-24">
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
              🏛️ The Jurisdiction Trap
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              How They Got Away With It
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              If you look at a map, I-90 Exit 37 and Electronics Parkway are in the Town of Salina. So how did a developer build a 184-foot hazard right next to a neighborhood without a single Town of Salina safety inspection, zoning board hearing, or environmental review?
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-purple-950/20 border border-purple-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-lg font-black text-purple-300 mb-4">
              They used a legal loophole.
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                Phoenix Tower International (PTI) knew the Town of Salina would enforce strict fall-zone setbacks and deny a private permit. So, they partnered with the{" "}
                <strong className="text-white">New York State Thruway Authority (NYSTA)</strong>. NYSTA operates as a sovereign state entity. By dropping the tower inside the highway infield, the developer invoked NYSTA&apos;s sovereign immunity to completely bypass local zoning.{" "}
                <strong className="text-danger-400">The Town was legally powerless to stop it.</strong>
              </p>
            </div>
          </motion.div>

          {/* The Loophole on Paper */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-dark-900/60 border border-purple-800/30 rounded-2xl p-6 md:p-8 mb-6"
          >
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
              The Loophole on Paper
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                A cell tower needs grid power. We submitted a Freedom of Information Law (FOIL) request to the Town of Salina Code Enforcement Office asking for the electrical, street-cut, or right-of-way permits for this tower.
              </p>
              <p className="text-lg font-black text-white bg-dark-950/60 border border-dark-700/30 rounded-xl p-5 text-center">
                The Town&apos;s response:{" "}
                <span className="text-danger-400">They possess ZERO records.</span>
              </p>
              <p>
                Under state franchise rights, public utilities like National Grid can execute{" "}
                <strong className="text-white">&quot;Utility Work Agreements&quot;</strong>{" "}
                directly with the State to work inside highway right-of-ways, bypassing local building inspectors entirely.
              </p>
              <p>
                A telecom developer exploited state highway loopholes to build a 184-foot tower 0.25 miles from an airport and 1.25 miles from a protected eagle roost —{" "}
                <strong className="text-white">specifically to ensure local residents, town building inspectors, and state wildlife biologists had no legal authority to review it.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ OUR DEMAND ═══════════════════ */}
      <section id="demand" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-danger-950/30 border-2 border-danger-700/50 rounded-2xl p-6 md:p-8"
          >
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
              Our Demand
            </p>
            <div className="space-y-4 text-dark-200 leading-relaxed">
              <p>
                We demand the{" "}
                <strong className="text-white">Federal Highway Administration (FHWA)</strong>{" "}
                and the{" "}
                <strong className="text-white">New York State Public Service Commission (NYS PSC)</strong>{" "}
                intervene and produce the independent engineering reviews that justify placing this unvetted hazard inside a federal highway clear zone.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-5">
                  <p className="text-sm font-bold text-white mb-2">FHWA</p>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    Produce an independent ice-shed analysis, fire mitigation plan, and a site-specific collapse radius study showing clearance distances from active travel lanes.
                  </p>
                </div>
                <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-5">
                  <p className="text-sm font-bold text-white mb-2">NYS PSC</p>
                  <p className="text-sm text-dark-300 leading-relaxed">
                    Investigate the commercial utility infrastructure installed at this site without standard local environmental (SEQRA) or municipal building department oversight.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-dark-400 mt-5">
              The FAA gets the birds. The FHWA gets the ice. The NYS PSC gets the grid connections.{" "}
              <strong className="text-danger-400">If no one reviewed this, everyone failed.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ WE'RE NOT ALONE ═══════════════════ */}
      <WeNotAlone />

      {/* ═══════════════════ CROSS-LINKS ═══════════════════ */}
      <section id="highway-cta" className="py-12 px-4 border-t border-dark-800/50 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4 text-center">
            Continue Reading
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/the-facts/aviation"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-sky-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                ← Aviation & Flight Safety
              </p>
              <p className="text-xs text-dark-400">
                FAA obstruction rules, 5G altimeter interference, and the Part 77 exploit.
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
                100+ bald eagles 1.25 miles away. No USFWS consultation. Zero DEC records.
              </p>
            </Link>
            <Link
              href="/the-facts/community"
              className="group bg-dark-900/60 border border-dark-800/50 rounded-xl p-5 hover:border-amber-700/40 transition-all"
            >
              <p className="font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                Community & Land Value →
              </p>
              <p className="text-xs text-dark-400">
                Property values, the state land loophole, and what federal law says you can&apos;t argue.
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
