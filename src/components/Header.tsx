"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldAlert, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const factsSubLinks = [
  { href: "/the-facts/aviation", label: "Aviation & Safety" },
  { href: "/the-facts/health", label: "Health & Science" },
  { href: "/the-facts/community", label: "Community & Legal" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [factsOpen, setFactsOpen] = useState(false);
  const pathname = usePathname();

  const isFactsActive = pathname.startsWith("/the-facts");

  return (
    <header className="sticky top-0 z-50 bg-dark-950/90 backdrop-blur-md border-b border-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <ShieldAlert className="w-7 h-7 text-danger-500 group-hover:text-danger-400 transition-colors" />
          <span className="font-extrabold text-lg tracking-tight">
            <span className="text-white">PROTECT</span>
            <span className="text-danger-500">LIVERPOOL</span>
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
            onMouseEnter={() => setFactsOpen(true)}
            onMouseLeave={() => setFactsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isFactsActive
                  ? "bg-danger-600 text-white"
                  : "text-dark-300 hover:text-white hover:bg-dark-800"
              }`}
              onClick={() => setFactsOpen(!factsOpen)}
            >
              The Facts
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${factsOpen ? "rotate-180" : ""}`} />
            </button>

            {factsOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-dark-900 border border-dark-700/60 rounded-xl shadow-2xl shadow-black/40 overflow-hidden py-1">
                {factsSubLinks.map((sub) => (
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
                ))}
              </div>
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

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-dark-900 border-t border-dark-800 px-4 py-3 space-y-1">
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
                {factsSubLinks.map((sub) => (
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
                ))}
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
      )}
    </header>
  );
}
