"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ChevronDown, AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const articles = [
  {
    source: "Environmental Health Trust",
    title: "Cell Towers Removed, Halted & Rejected Near Schools and Homes",
    quote:
      "A comprehensive database of communities that successfully fought back — towers removed, applications denied, and projects halted nationwide.",
    url: "https://ehtrust.org/cell-towers-near-schools-and-homes-that-have-been-removed-halted-and-rejected/",
    color: "text-lime-400",
  },
  {
    source: "Fox 2 Detroit — 2023",
    title:
      "Michigan superintendent resigns amid T-Mobile cell tower fight on school playground",
    quote:
      "Parents forced the Wyandotte superintendent out after a 5G tower was installed on an elementary school chimney next to a playground.",
    url: "https://www.fox2detroit.com/news/wyandotte-schools-superintendent-resigns-amid-5g-cell-tower-controversy",
    color: "text-red-400",
  },
  {
    source: "Jacksonville Today — 2024",
    title: "Nocatee residents beg Jacksonville to kill 170-ft cell tower plan",
    quote:
      "Nearly 1,500 residents signed a petition. The city's own planning staff recommended denial.",
    url: "https://jaxtoday.org/2024/08/19/nocatee-residents-beg-jacksonville-to-kill-cell-tower-plan/",
    color: "text-emerald-400",
  },
  {
    source: "CT Insider — 2025",
    title: "Washington, CT residents oppose cell tower near schools",
    quote:
      "Over 140 residents signed a petition citing health, safety, scenic, and environmental concerns.",
    url: "https://www.ctinsider.com/news/article/washington-ct-cell-tower-warren-road-monopole-21127241.php",
    color: "text-sky-400",
  },
  {
    source: "LoudounNow — 2024",
    title:
      "Loudoun County school board votes to ban cell towers on school properties",
    quote:
      "Virginia school board endorsed a policy banning telecom towers on school properties, citing potential health risks from wireless radiation.",
    url: "https://www.loudounnow.com/news/school-board-bans-cell-towers-on-campuses/article_717803ba-7b50-11ef-a4b7-7feca61cfb81.html",
    color: "text-purple-400",
  },
  {
    source: "NY Post — 2025",
    title:
      "NYC's new 'monstrous' 5G cell towers get nasty reception in ritzy neighborhood",
    quote: '"It looks monstrous... They threw it there without any thought."',
    url: "https://nypost.com/2025/04/27/us-news/nycs-new-monstrous-5g-cell-towers-get-nasty-reception-in-ritzy-neighborhood-it-would-look-good-in-dubai/",
    color: "text-red-400",
  },
  {
    source: "NY Landmarks Conservancy",
    title: "5G Towers Spark Outrage and Concern",
    quote:
      'Eight preservation groups wrote to City Hall decrying the "chaotic and opaque review process."',
    url: "https://nylandmarks.org/news/5g-towers-spark-outrage-and-concern/",
    color: "text-amber-400",
  },
  {
    source: "Village Preservation",
    title: "5G Towers in Our Neighborhoods",
    quote:
      "Communities organizing against the unchecked placement of industrial telecom infrastructure in residential areas.",
    url: "https://www.villagepreservation.org/campaign/5g-towers-in-our-neighborhoods/",
    color: "text-sky-400",
  },
];

const videos = [
  { id: "eK2jUa9Rhmo", title: "The Fight Against Unchecked Tower Placement" },
  { id: "WK5HByPJuMI", title: "Residents Organize Against 5G Towers" },
  { id: "fWY9pgddyaw", title: "Cell Tower Opposition — Short" },
  { id: "BfuWabILmsY", title: "5G Tower Dangers Exposed" },
  { id: "FA1gGKzWClQ", title: "The Truth About Cell Tower Radiation" },
  { id: "TerkfWZrMNY", title: "Cell Towers & Public Health" },
  { id: "qDl1PgCn9AY", title: "5G, Cell Towers & RF Safety — The Full Picture" },
  { id: "LQvf1_QapHU", title: "Communities Standing Up to Telecom" },
  {
    id: "bUyJFdEmwzw",
    title: "Cell Tower Realities — Look at the Comments 😂",
    note: "look at the comments lol",
  },
  { id: "n8a5famLCak", title: "Cell Tower Town Hall — Live Recording" },
  { id: "6FpDnjA-InI", title: "5G Towers in Our Neighborhoods" },
];

function NewsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-3 text-center">
        In the News — This Is Happening Everywhere
      </p>
      {articles.map((article, i) => (
        <div
          key={article.url}
          className="bg-dark-900/60 border border-dark-800/50 rounded-xl overflow-hidden transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center gap-3 p-4 md:p-5 text-left hover:bg-dark-800/30 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p
                className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${article.color}`}
              >
                {article.source}
              </p>
              <p className="text-sm md:text-base font-bold text-white leading-snug">
                {article.title}
              </p>
            </div>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-dark-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                  <p className="text-sm text-dark-300 leading-relaxed mb-3">
                    {article.quote}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${article.color} hover:underline`}
                  >
                    Read Article
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function WeNotAlone() {
  const [videosOpen, setVideosOpen] = useState(false);
  return (
    <section className="py-16 md:py-24 px-4 bg-dark-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            We're <span className="text-danger-500">Not</span> Alone
          </h2>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto">
            Communities across New York State and the country have been fighting
            back for years against towers just like this one.
          </p>
        </motion.div>

        {/* YouTube videos — collapsible */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1.5}
          className="mb-8"
        >
          <button
            onClick={() => setVideosOpen(!videosOpen)}
            className="w-full flex items-center justify-between bg-dark-900/60 border border-dark-800/50 rounded-xl p-4 md:p-5 hover:bg-dark-800/30 transition-colors"
          >
            <div className="text-left">
              <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-0.5">
                Watch — Don't Take Our Word For It
              </p>
              <p className="text-sm text-dark-500 italic">
                Other communities fighting back
              </p>
            </div>
            <motion.div
              animate={{ rotate: videosOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-dark-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {videosOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  <p className="text-xs text-dark-500 text-center mb-4 italic">
                    If you see a &quot;Video not available&quot; thumbnail,
                    YouTube is actively censoring this. That should tell you
                    something.
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {videos.map((video) => (
                      <div key={video.id} className="space-y-2">
                        <div
                          className="relative w-full rounded-xl overflow-hidden border border-dark-700/50 shadow-lg"
                          style={{ aspectRatio: "16/9" }}
                        >
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <p className="text-sm text-dark-400 text-center">
                          {video.title}
                        </p>
                        {"note" in video && (video as any).note && (
                          <p className="text-xs text-amber-400 text-center italic">
                            {(video as any).note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* News Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <NewsAccordion />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2.5}
          className="mt-10 text-center"
        >
          <Link
            href="/take-action"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger-600 hover:bg-danger-500 text-white font-black text-lg rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-danger-900/60"
          >
            <AlertTriangle className="w-5 h-5" />
            SIGN THE PETITION & TAKE ACTION
          </Link>
          <p className="text-dark-500 text-xs mt-3">
            Join your neighbors. Make your voice heard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
