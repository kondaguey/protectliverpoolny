"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-3xl mx-auto bg-dark-900 border border-dark-700/50 rounded-2xl p-5 shadow-2xl shadow-black/60 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white mb-1">
              We Value Your Privacy
            </p>
            <p className="text-xs text-dark-400 leading-relaxed">
              This site uses essential cookies to remember your petition
              signature and preferences. We do{" "}
              <strong className="text-dark-200">not</strong>{" "}track you, sell
              your data, or use advertising cookies. We are a not-for-profit
              community initiative. See our{" "}
              <a
                href="/privacy"
                className="text-danger-400 hover:text-danger-300 underline underline-offset-2"
              >
                Privacy Policy
              </a>{" "}
              .
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-xs font-bold text-dark-400 hover:text-white border border-dark-700/50 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-xs font-bold text-white bg-danger-600 hover:bg-danger-500 rounded-lg transition-all shadow-lg shadow-danger-900/30"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
