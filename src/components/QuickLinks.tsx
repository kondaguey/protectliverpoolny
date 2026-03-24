"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type QuickLink = {
  label: string;
  id: string;
};

export default function QuickLinks({ links }: { links: QuickLink[] }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative z-30 w-full">
      <div className="max-w-5xl mx-auto px-4 py-2">
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2.5 bg-dark-900/90 backdrop-blur-md border border-dark-700/50 rounded-xl text-sm font-semibold text-dark-200 hover:text-white hover:border-dark-600 transition-all w-full sm:w-auto"
          >
            <List className="w-4 h-4 text-danger-400" />
            Jump to Section
            <ChevronDown
              className={`w-4 h-4 ml-auto sm:ml-1 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 mt-1.5 w-full sm:w-80 bg-dark-900/95 backdrop-blur-md border border-dark-700/50 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
              >
                {links.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className={`block w-full text-left px-5 py-3 text-sm font-medium transition-all hover:bg-dark-800/60 ${
                      i === links.length - 1
                        ? "text-danger-400 hover:text-danger-300 bg-danger-950/20"
                        : "text-dark-200 hover:text-white"
                    } ${i !== links.length - 1 ? "border-b border-dark-800/30" : ""}`}
                  >
                    {link.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
