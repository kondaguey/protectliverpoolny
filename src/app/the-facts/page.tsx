"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const sections = [
  {
    href: "/the-facts/community",
    title: "Community & Land Value Impact",
    subtitle: "Your neighborhood. Your home value. Their profit.",
    description: "Property values drop up to 20% near cell towers. Federal law was written to silence you. And nobody asked your permission.",
    image: "/5g-protest-proof.jpg",
    color: "border-amber-700/40",
    hoverColor: "group-hover:text-amber-400",
    accent: "text-amber-400",
    badge: "⚖️ Property & Legal",
  },
  {
    href: "/the-facts/health",
    title: "Health Impacts",
    subtitle: "What the independent research actually says.",
    description: "Peer-reviewed studies, the NTP's $30M cancer finding, children's RF absorption 10× higher than adults, and the 1996 safety limits a court called \"arbitrary.\"",
    image: "/5g-tower-liverpool-ny-protest-installation-nys-salina.png",
    color: "border-sky-700/40",
    hoverColor: "group-hover:text-sky-400",
    accent: "text-sky-400",
    badge: "🔬 Peer-Reviewed Science",
  },
  {
    href: "/the-facts/aviation",
    title: "Aviation & Safety Risks",
    subtitle: "1,320 feet from the landing corridor. Unlit.",
    description: "FAA emergency directives, 5G altimeter interference, helicopter danger zones, and how they gamed Part 77 to dodge the lighting requirement.",
    image: "/5g-tower-liverpool-ny-airline-interference-installation-nys-salina.png",
    color: "border-sky-700/40",
    hoverColor: "group-hover:text-sky-400",
    accent: "text-sky-400",
    badge: "✈️ Flight Safety",
  },
  {
    href: "/the-facts/wildlife",
    title: "Wildlife & Environmental Concerns",
    subtitle: "100+ eagles. 1.7 miles away. No review.",
    description: "Eagles nest on cell towers — then lose their homes to 5G upgrades. The Audubon Society has documented it. Nobody asked if it will happen here.",
    image: "https://imagedelivery.net/5MAOvNjO0OBL917jHWR5AA/3461547c-bf7c-403d-5f32-d7d6168f8e00/public",
    color: "border-lime-700/40",
    hoverColor: "group-hover:text-lime-400",
    accent: "text-lime-400",
    badge: "🦅 Federal Wildlife Law",
  },
];

export default function TheFactsLanding() {
  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-950 to-dark-950" />
        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight"
          >
            The Facts{" "}
            <span className="text-danger-500">They Don&apos;t Want You to Know</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            Four areas of evidence. No opinions — just sourced data, federal documents, and peer-reviewed science.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ 4 CARDS ═══════════════════ */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <Link
                href={section.href}
                className={`group flex flex-col md:flex-row bg-dark-900/60 border border-dark-800/50 hover:${section.color} rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01]`}
              >
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <div className="aspect-[16/10] md:aspect-auto md:absolute md:inset-0">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent md:bg-gradient-to-r" />
                  </div>
                </div>

                {/* Text */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${section.accent} mb-2`}>
                    {section.badge}
                  </span>
                  <h2 className={`text-xl md:text-2xl font-black text-white ${section.hoverColor} transition-colors mb-2`}>
                    {section.title}
                  </h2>
                  <p className="text-sm font-semibold text-dark-200 mb-2">
                    {section.subtitle}
                  </p>
                  <p className="text-sm text-dark-400 leading-relaxed mb-4">
                    {section.description}
                  </p>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-bold ${section.accent}`}>
                    Read the evidence
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
