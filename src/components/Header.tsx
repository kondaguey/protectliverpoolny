"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "The Threat" },
  { href: "/the-facts", label: "The Facts" },
  { href: "/take-action", label: "Take Action" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                pathname === link.href
                  ? "bg-danger-600 text-white"
                  : "text-dark-300 hover:text-white hover:bg-dark-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                pathname === link.href
                  ? "bg-danger-600 text-white"
                  : "text-dark-300 hover:text-white hover:bg-dark-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
