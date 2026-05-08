"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Shield } from "lucide-react";
import { usePathname } from "next/navigation";

const factsSubLinks: { href: string; label: string }[] = [
  { href: "/the-facts/community", label: "Community & Land Value" },
  { href: "/the-facts/health", label: "Health Impacts" },
  { href: "/the-facts/aviation", label: "Aviation & Safety" },
  { href: "/the-facts/highway-safety", label: "Highway Safety" },
  { href: "/the-facts/wildlife", label: "Wildlife & Environment" },
  { href: "/the-facts/surveillance", label: "The Real Question" },
  { href: "/the-facts/loophole-kings", label: "Loophole Kings" },
  { href: "---", label: "---" },
  { href: "/code-of-conduct", label: "📜 Code of Conduct" },
  { href: "/npc-takes", label: "🎮 NPC Takes" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [factsOpen, setFactsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isFactsActive = pathname.startsWith("/the-facts");

  return (
    <>
    <header className="sticky top-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative flex items-center justify-center w-20 h-20 group-hover:scale-105 transition-all">
            <Image src="/protect-liverpool-ny-logo-160.png" alt="Protect Liverpool NY" width={80} height={80} priority className="w-full h-full object-contain" />
          </span>
          <span
            className="font-black tracking-[-0.03em] leading-none"
            style={{ fontSize: "1.15rem", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            <span className="text-white">PROTECT</span>
            <span className="text-danger-500">LIVERPOOL</span>
            <span className="text-dark-500 font-bold text-xs ml-0.5 tracking-wide">NY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              pathname === "/"
                ? "bg-danger-600 text-white"
                : "text-dark-300 hover:text-white hover:bg-dark-800"
            }`}
          >
            The Threat
          </Link>

          {/* The Facts — Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout((window as any).__factsTimer);
              setFactsOpen(true);
            }}
            onMouseLeave={() => {
              (window as any).__factsTimer = setTimeout(() => setFactsOpen(false), 150);
            }}
          >
            <Link
              href="/the-facts"
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isFactsActive
                  ? "bg-danger-600 text-white"
                  : "text-dark-300 hover:text-white hover:bg-dark-800"
              }`}
            >
              The Facts
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${factsOpen ? "rotate-180" : ""}`} />
            </Link>

            {factsOpen && (
              <>
                {/* Invisible bridge to prevent gap mouseout */}
                <div className="absolute top-full left-0 w-full h-2" />
                <div className="absolute top-full left-0 pt-2 w-52">
                  <div className="bg-dark-900 border border-dark-700/60 rounded-xl shadow-2xl shadow-black/40 overflow-hidden py-1">
                    {factsSubLinks.map((sub) =>
                      sub.href === "---" ? (
                        <div key="divider" className="border-t border-dark-700/40 my-1" />
                      ) : (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                          pathname === sub.href
                            ? "bg-danger-600/20 text-danger-300"
                            : "text-dark-300 hover:text-white hover:bg-dark-800/60"
                        }`}
                        onClick={() => setFactsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                      )
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/take-action"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              pathname === "/take-action"
                ? "bg-danger-600 text-white"
                : "text-dark-300 hover:text-white hover:bg-dark-800"
            }`}
          >
            Take Action
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>

    {/* Mobile Nav — Full-viewport takeover (outside header) */}
    {mobileOpen && (
      <div className="md:hidden fixed inset-0 z-[100] bg-dark-950 flex flex-col">
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-4 h-24 border-b border-dark-800/50 flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative flex items-center justify-center w-20 h-20">
              <Image src="/protect-liverpool-ny-logo-160.png" alt="Protect Liverpool NY" width={80} height={80} priority className="w-full h-full object-contain" />
            </span>
            <span
              className="font-black tracking-[-0.03em] leading-none"
              style={{ fontSize: "1.15rem", fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              <span className="text-white">PROTECT</span>
              <span className="text-danger-500">LIVERPOOL</span>
              <span className="text-dark-500 font-bold text-xs ml-0.5 tracking-wide">NY</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-dark-300 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              pathname === "/"
                ? "bg-danger-600 text-white"
                : "text-dark-300 hover:text-white hover:bg-dark-800"
            }`}
          >
            The Threat
          </Link>

          {/* The Facts — Mobile Expandable */}
          <div>
            <button
              onClick={() => setFactsOpen(!factsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                isFactsActive
                  ? "bg-danger-600 text-white"
                  : "text-dark-300 hover:text-white hover:bg-dark-800"
              }`}
            >
              The Facts
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${factsOpen ? "rotate-180" : ""}`} />
            </button>

            {factsOpen && (
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-dark-700/50 pl-3">
                {factsSubLinks.map((sub) =>
                  sub.href === "---" ? (
                    <div key="divider-mobile" className="border-t border-dark-700/40 my-1" />
                  ) : (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => { setMobileOpen(false); setFactsOpen(false); }}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      pathname === sub.href
                        ? "text-danger-300 bg-danger-600/10"
                        : "text-dark-400 hover:text-white hover:bg-dark-800/60"
                    }`}
                  >
                    {sub.label}
                  </Link>
                  )
                )}
              </div>
            )}
          </div>

          <Link
            href="/take-action"
            onClick={() => setMobileOpen(false)}
            className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              pathname === "/take-action"
                ? "bg-danger-600 text-white"
                : "text-dark-300 hover:text-white hover:bg-dark-800"
            }`}
          >
            Take Action
          </Link>
        </nav>
      </div>
    )}
    </>
  );
}
