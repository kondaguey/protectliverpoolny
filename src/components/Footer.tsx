import { ShieldAlert } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800/50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-danger-500" />
            <span className="font-extrabold text-sm tracking-tight">
              <span className="text-white">PROTECT</span>
              <span className="text-danger-500">LIVERPOOL</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-dark-400">
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="/the-facts" className="hover:text-white transition-colors">
              The Facts
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
          <p className="text-xs text-dark-600 text-center mt-3">
            © {new Date().getFullYear()} Protect Liverpool NY. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
