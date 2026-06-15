"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, AlertTriangle } from "lucide-react";

export function DisclaimerBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only show on the homepage
    if (pathname !== "/") return;
    // Only permanently hidden if they clicked "Do not show again"
    if (localStorage.getItem("plny_disclaimer_permanent")) return;
    setVisible(true);
  }, [pathname]);

  // X = hide for this page view only (comes back on reload)
  const dismissTemp = () => {
    setVisible(false);
  };

  // "Do not show again" = permanent via localStorage
  const dismissForever = () => {
    setVisible(false);
    localStorage.setItem("plny_disclaimer_permanent", "1");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-3 md:p-4">
      <div className="max-w-3xl mx-auto bg-amber-950/95 backdrop-blur-xl border border-amber-700/40 rounded-2xl p-4 md:p-5 shadow-2xl shadow-black/50">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-amber-100 font-semibold mb-1">
              Accuracy Disclaimer
            </p>
            <p className="text-xs md:text-sm text-amber-200/80 leading-relaxed mb-3">
              This is an evolving, complex, and difficult battle that involves
              many elected officials, government agencies, and legal proceedings.
              Our resources are currently limited, but we work hard to keep every
              detail accurate. If you notice any errors or outdated information,
              please email us at{" "}
              <a
                href="mailto:takeaction@protectliverpoolny.org"
                className="text-amber-300 font-bold underline underline-offset-2 hover:text-white transition-colors"
              >
                takeaction@protectliverpoolny.org
              </a>{" "}
              so we can correct it immediately.
            </p>
            <button
              onClick={dismissForever}
              className="text-[11px] text-amber-400/70 hover:text-amber-300 font-medium underline underline-offset-2 transition-colors"
            >
              Do not show again
            </button>
          </div>
          <button
            onClick={dismissTemp}
            className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-amber-300 hover:text-white hover:bg-white/20 transition-all flex-shrink-0"
            aria-label="Close disclaimer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
