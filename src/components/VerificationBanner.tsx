"use client";

import Link from "next/link";
import { CheckCircle2, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { hasUpdateToday } from "@/data/changelog-dates";

export function VerificationBanner() {
  const [open, setOpen] = useState(true);
  const [updatedToday, setUpdatedToday] = useState(false);

  useEffect(() => {
    setUpdatedToday(hasUpdateToday());
  }, []);

  return (
    <div className="bg-sky-950/60 border-b border-sky-800/30">
      <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-center gap-2">
        {open ? (
          <>
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
            <div className="text-[11px] text-sky-300/80 font-medium text-center leading-relaxed">
              All claims independently verified. See something wrong?{" "}
              <a
                href="mailto:takeaction@protectliverpoolny.org"
                className="text-sky-300 font-bold underline underline-offset-2 hover:text-sky-100 transition-colors"
              >
                Let us know
              </a>
              {" "}— we fix it publicly.{" "}
              <Link
                href="/changelog"
                className="text-sky-300 font-bold underline underline-offset-2 hover:text-sky-100 transition-colors"
              >
                Movement Updates & Change Log →
              </Link>
              {updatedToday && (
                <>
                  {" "}
                  <Link
                    href="/changelog"
                    className="inline-block align-middle"
                  >
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-[9px] font-black text-amber-300 uppercase tracking-wider animate-pulse leading-none">
                      🔔 New Updates Today
                    </span>
                  </Link>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
            {updatedToday && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-amber-500/20 border border-amber-400/30 rounded-full text-[9px] font-black text-amber-300 uppercase tracking-wider animate-pulse">
                🔔
              </span>
            )}
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="ml-1 text-sky-400/60 hover:text-sky-300 transition-colors flex-shrink-0"
          aria-label={open ? "Collapse banner" : "Expand banner"}
        >
          <ChevronUp className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "" : "rotate-180"}`} />
        </button>
      </div>
    </div>
  );
}
