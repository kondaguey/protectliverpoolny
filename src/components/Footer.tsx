import { Mail, Shield } from "lucide-react";
import { CopyButton } from "./CopyButton";

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-28 h-28">
              <img src="/protect-liverpool-ny-logo.png" alt="Protect Liverpool NY" className="w-full h-full object-contain" />
            </span>
            <span
              className="font-black tracking-[-0.03em] leading-none"
              style={{ fontSize: "0.9rem", fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              <span className="text-white">PROTECT</span>
              <span className="text-danger-500">LIVERPOOL</span>
              <span className="text-dark-500 font-bold text-[10px] ml-0.5 tracking-wide">NY</span>
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:takeaction@protectliverpoolny.org"
              className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/30 border border-danger-800/30 rounded-lg text-sm font-bold text-danger-300 hover:bg-danger-900/50 transition-all"
            >
              <Mail className="w-4 h-4" />
              takeaction@protectliverpoolny.org
            </a>
            <CopyButton text="takeaction@protectliverpoolny.org" />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-dark-400">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/the-facts/aviation" className="hover:text-white transition-colors">
              Aviation & Safety
            </a>
            <a href="/the-facts/health" className="hover:text-white transition-colors">
              Health & Science
            </a>
            <a href="/the-facts/community" className="hover:text-white transition-colors">
              Community & Legal
            </a>
            <a href="/take-action" className="hover:text-white transition-colors">
              Take Action
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-dark-800/50">
          <p className="text-xs text-dark-500 text-center max-w-2xl mx-auto leading-relaxed">
            ProtectLiverpoolNY.org is a grassroots community initiative. We are
            not affiliated with any political party or government body. Our
            mission is transparency, accountability, and community empowerment.
            All information presented is sourced from public records and
            community testimony.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="/privacy" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">
              Terms
            </a>
            <a href="/disclaimer" className="text-xs text-dark-500 hover:text-dark-300 transition-colors">
              Disclaimer
            </a>
          </div>
          <p className="text-xs text-dark-600 text-center mt-3">
            © {new Date().getFullYear()} Protect Liverpool NY. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
