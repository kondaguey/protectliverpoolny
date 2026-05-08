"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Scale,
  Vote,
  Heart,
  AlertTriangle,
  BookOpen,
  Megaphone,
  Radio,
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

export default function LegalActionPage() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-950 to-dark-950" />
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Our <span className="text-emerald-400">Code of Conduct</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            This movement wins through righteous anger channeled through the
            First Amendment, democratic participation, and the legal system. We
            don&apos;t cut corners. We don&apos;t break things. We use the
            system the way it was designed to be used — loudly, publicly, and
            relentlessly.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ CORE PRINCIPLES ═══════════════════ */}
      <section className="pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-danger-400" />
                <h2 className="text-xl font-black text-white">
                  Zero Tolerance for Violence, Vandalism & Threats
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-dark-200 text-sm leading-relaxed">
                  <strong className="text-white">
                    Do not vandalize the tower, equipment, or any property.
                  </strong>{" "}
                  Do not make threats against anyone — tower workers, company
                  representatives, government officials, or anyone else. Do not
                  trespass on state land or restricted areas.
                </p>
                <p className="text-dark-200 text-sm leading-relaxed">
                  <strong className="text-white">
                    Be angry. Be loud. Be profane if you need to be.
                  </strong>{" "}
                  Righteous anger is not a character flaw — it&apos;s the
                  correct human response to watching your community get
                  steamrolled. Profanity is protected speech. Passion is
                  protected speech. Calling out corruption in a public meeting
                  at full volume is protected speech. Don&apos;t let anyone
                  reframe your anger as &quot;intimidation&quot; — that word is
                  subjective by design, and it&apos;s the favorite tool of
                  people who want to silence you without addressing your
                  argument.
                </p>
                <p className="text-dark-200 text-sm leading-relaxed">
                  <strong className="text-white">Threats are different.</strong>{" "}
                  Threats are objective, specific, and illegal. Don&apos;t make
                  them. There is a clear legal line between &quot;this is
                  bullshit and you should be ashamed of yourself&quot;
                  (protected) and &quot;I&apos;m going to hurt you&quot;
                  (criminal). Stay on the right side of that line.
                </p>
                <p className="text-dark-200 text-sm leading-relaxed">
                  <strong className="text-white">
                    Any act of vandalism, violence, or criminal threats directly
                    undermines this movement.{" "}
                  </strong>{" "}
                  It gives opponents exactly what they want: a reason to paint
                  concerned community members as extremists. It gives the media
                  a story that drowns out every fact, every study, and every
                  legal argument we&apos;ve built.
                </p>
                <p className="text-danger-300 text-sm font-bold leading-relaxed">
                  One person doing something reckless can undo the work of an
                  entire community. Don&apos;t be that person.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════ THE RIGHT WAY ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mb-8"
          >
            <h2 className="text-2xl font-black text-white mb-6">
              How We <span className="text-emerald-400">Actually</span> Win This
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: Vote,
                  title: "Democratic Participation",
                  detail:
                    "Attend town board meetings. File public comments. Contact your state representatives. Vote. The democratic process exists for exactly this kind of fight — use it. Every elected official who ignores constituent voices on public safety should hear about it at the ballot box.",
                  color: "text-sky-400",
                  bg: "bg-sky-950/20 border-sky-800/30",
                },
                {
                  icon: Scale,
                  title: "Legal Channels",
                  detail:
                    "File FOIL requests. Challenge zoning decisions through proper legal processes. Support legislative efforts like the proposed moratorium bills. If a tower is being built without proper review, the answer is a courtroom — not a pair of bolt cutters.",
                  color: "text-purple-400",
                  bg: "bg-purple-950/20 border-purple-800/30",
                },
                {
                  icon: Radio,
                  title: "Relentless Scientific Documentation",
                  detail:
                    "Buy an EMF detector. Learn how it works. Understand what the readings mean. When this tower goes live, document every non-ionizing RF emission coming off it — from your yard, from the sidewalk, from the school bus stop. Peer-reviewed studies are powerful, but readings you took yourself from your own property are undeniable. Science doesn't care about opinions. Build your own evidence base.",
                  color: "text-cyan-400",
                  bg: "bg-cyan-950/20 border-cyan-800/30",
                },
                {
                  icon: BookOpen,
                  title: "First Amendment — Use It to the Fullest Extent",
                  detail:
                    "The First Amendment protects your right to speak, to publish, to organize, to petition your government, and to peacefully assemble. This website exists because of the First Amendment. Your ability to attend a public meeting and demand answers exists because of the First Amendment. New York's expanded Anti-SLAPP statute (Civil Rights Law § 76-a) explicitly protects speech on matters of public interest. Exercise these rights loudly, publicly, and relentlessly.",
                  color: "text-emerald-400",
                  bg: "bg-emerald-950/20 border-emerald-800/30",
                },
                {
                  icon: Megaphone,
                  title: "Public Pressure Through Transparency",
                  detail:
                    "Document everything. Share facts publicly. Write letters to the editor. Post on social media. Talk to your neighbors. The most powerful weapon we have is a well-informed community that refuses to be silent. Nobody can SLAPP-suit an entire town.",
                  color: "text-amber-400",
                  bg: "bg-amber-950/20 border-amber-800/30",
                },
                {
                  icon: Heart,
                  title: "Community Unity",
                  detail:
                    "Check on your neighbors. Share information with people who don't have social media. Translate documents for non-English speakers. Make sure elderly residents understand their rights. This movement is only as strong as the community it represents — and a community that takes care of each other is impossible to ignore.",
                  color: "text-pink-400",
                  bg: "bg-pink-950/20 border-pink-800/30",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`${item.bg} border rounded-xl p-5`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <p className={`text-sm font-bold ${item.color}`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="text-dark-200 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ═══════════════════ WHY THIS MATTERS ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-lg font-black text-white mb-4">
                Why This Matters More Than You Think
              </h3>
              <div className="space-y-3 text-sm text-dark-200 leading-relaxed">
                <p>
                  The telecom industry has unlimited legal resources. They have
                  lobbyists, regulatory capture, and decades of legal precedent
                  tilted in their favor. The <em>only</em>{" "}thing they cannot
                  withstand is a united, informed, peaceful community that uses
                  the democratic process and the legal system to demand
                  accountability.
                </p>
                <p>
                  The moment someone vandalizes equipment, threatens a worker,
                  or does anything illegal, the entire narrative shifts.
                  Suddenly it&apos;s not about aviation safety, RF exposure, or
                  missing environmental reviews — it&apos;s about &quot;those
                  dangerous anti-tower people.&quot; Every fact on this site
                  becomes irrelevant. Every correction in our Change Log gets
                  ignored. Every FOIL request gets dismissed as harassment.
                </p>
                <p className="text-white font-bold">
                  That is exactly what the opposition wants. Don&apos;t give it
                  to them.
                </p>
              </div>
            </div>
          </motion.div>
          {/* ═══════════════════ LIABILITY DISCLAIMER ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2.5}
          >
            <div className="bg-sky-950/20 border border-sky-800/30 rounded-2xl p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-black text-white">
                  Individual Liability &amp; Disclaimer
                </h3>
              </div>
              <div className="space-y-3 text-sm text-dark-200 leading-relaxed">
                <p>
                  <strong className="text-white">
                    You are responsible for your own words and actions.
                  </strong>{" "}
                  ProtectLiverpoolNY.org provides a platform for community
                  advocacy, public transparency, and civic engagement. We
                  publish sourced, cited, and fact-checked content on this
                  website. What you say as an individual — at a town meeting,
                  on social media, in a letter to the editor, or in private
                  conversation — is{" "}
                  <strong className="text-white">your responsibility</strong>.
                </p>
                <p>
                  <strong className="text-white">
                    We do not automatically endorse, adopt, or assume liability
                    for statements made by any individual supporter, signer,
                    or community member
                  </strong>{" "}
                  outside of the content explicitly published on this website.
                  Signing the petition means you agree with the demands as
                  written. It does not make you a spokesperson for this
                  movement, and it does not make this movement responsible for
                  your personal statements.
                </p>
                <p>
                  If you speak publicly about this issue — and we encourage you
                  to —{" "}
                  <strong className="text-white">
                    speak for yourself, speak in facts, and own what you say.
                  </strong>{" "}
                  That is how credible movements operate. That is how we
                  operate.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════ PLEDGE ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            <div className="bg-emerald-950/20 border border-emerald-800/30 rounded-2xl p-6 md:p-8 text-center mb-8">
              <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-black text-white mb-3">Our Pledge</h3>
              <p className="text-dark-200 text-sm leading-relaxed max-w-lg mx-auto mb-5">
                Everyone who supports this movement agrees to these principles:
              </p>
              <div className="space-y-2 text-left max-w-md mx-auto">
                {[
                  "I will not vandalize, damage, or tamper with any property or equipment.",
                  "I will not make threats against any person.",
                  "I will exercise my First Amendment rights loudly, publicly, and without apology.",
                  "I will channel my anger through democratic and legal processes.",
                  "I will represent this community with integrity and conviction.",
                  "I understand that one reckless act can undermine an entire movement.",
                ].map((pledge) => (
                  <div
                    key={pledge}
                    className="flex items-start gap-2 text-sm text-dark-200"
                  >
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span>{pledge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════ CTA ═══════════════════ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="text-center"
          >
            <Link
              href="/take-action"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors"
            >
              Take Action — The Right Way
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-dark-500 text-xs mt-4 italic">
              &quot;In a time of universal deceit, telling the truth is a
              revolutionary act.&quot; — George Orwell
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
