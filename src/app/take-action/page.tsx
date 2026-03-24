"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  FileText,
  AlertTriangle,
  Copy,
  CheckCheck,
  Megaphone,
  ExternalLink,
  ChevronRight,
  Building2,
  FileSearch,
  Scale,
  ShieldAlert,
  MessageSquareQuote,
  ChevronDown as ChevronDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CopyButton } from "@/components/CopyButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const callScript = `Hello, my name is [YOUR NAME] and I live in Liverpool. I'm calling because I just found out a massive 184-foot unlit cell tower is being built on Thruway land at Exit 37, right in our neighborhood and right under the airport landing path.

Nobody notified us. There was no public hearing. They're using a state loophole to bypass our local zoning laws entirely.

I need to know what [THEIR NAME/TITLE] is doing to stop this construction and force a public safety review. We have over 100 bald eagles roosting less than two miles away, medevac helicopters fly over daily, and this tower has zero obstruction lighting.

We are not going to let a private company backed by BlackRock bypass our town. Thank you for your time.`;

const localOfficials = [
  {
    role: "Town Supervisor",
    name: "Raul Huerta",
    phone: "(315) 457-6661",
    email: "supervisor@salina.ny.us",
    note: "Head of the Town of Salina",
    priority: true,
  },
  {
    role: "Ward 1 Councilor",
    name: "Hayley Downs",
    phone: "(315) 457-6661",
    email: "1stWard@salina.ny.us",
    note: "Town Board member",
    priority: false,
  },
  {
    role: "Ward 2 Councilor",
    name: "Leesa Paul",
    phone: "(315) 457-6661",
    email: "2ndWard@salina.ny.us",
    note: "Town Board member",
    priority: false,
  },
  {
    role: "Ward 3 Councilor",
    name: "Daniel Ciciarelli",
    phone: "(315) 457-6661",
    email: "3rdWard@salina.ny.us",
    note: "Town Board member",
    priority: false,
  },
  {
    role: "Ward 4 Councilor",
    name: "David Carnie",
    phone: "(315) 457-6661",
    email: "4thWard@salina.ny.us",
    note: "Town Board member — also Onondaga County District 5 Legislator",
    priority: false,
  },
];

const stateOfficials = [
  {
    role: "Onondaga County Legislator — 4th District",
    name: "Jeremiah Thompson",
    phone: "(315) 435-2070",
    email: "JeremiahThompson@ongov.net",
    note: "Covers Liverpool & Salina — formerly on Liverpool Zoning Board of Appeals",
  },
  {
    role: "NY State Senator — 50th District",
    name: "Christopher Ryan",
    phone: "(315) 428-7632",
    email: "chrisryan@nysenate.gov",
    note: "Syracuse office: 333 E. Washington St, Room 800",
  },
  {
    role: "NY State Assembly — 128th District",
    name: "Pamela J. Hunter",
    phone: "(315) 449-9536",
    email: "HunterP@nyassembly.gov",
    note: "Syracuse office: 711 E. Genesee St, 2nd Floor",
  },
];

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  zip_code: string;
  street_address: string;
  phone: string;
  comment: string;
};

export default function TakeActionPage() {
  const [form, setForm] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    zip_code: "",
    street_address: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [signatureCount, setSignatureCount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [optInContact, setOptInContact] = useState(false);
  const [commentPublic, setCommentPublic] = useState(false);
  const [commentAnonymous, setCommentAnonymous] = useState(false);
  const [canHelp, setCanHelp] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>(
    {},
  );
  const voicesRef = useRef<HTMLDivElement>(null);
  const [expandedComment, setExpandedComment] = useState<PublicComment | null>(null);
  const toggleStep = (step: number) =>
    setExpandedSteps((prev) => ({ ...prev, [step]: !prev[step] }));

  const fetchCount = useCallback(async () => {
    try {
      const { count, error } = await supabase
        .from("plny_signatures")
        .select("*", { count: "exact", head: true });
      if (!error && count !== null) {
        setSignatureCount(count);
      }
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    fetchCount();
    fetchComments();
  }, [fetchCount]);

  // Comments state
  type PublicComment = {
    name: string;
    comment: string;
    zip: string;
    date: string;
  };
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [commentPage, setCommentPage] = useState(1);
  const [commentTotal, setCommentTotal] = useState(0);
  const [commentTotalPages, setCommentTotalPages] = useState(1);
  const [loadingComments, setLoadingComments] = useState(false);

  const fetchComments = async (page = 1, append = false) => {
    setLoadingComments(true);
    try {
      const res = await fetch(`/api/comments?page=${page}&limit=10`);
      const data = await res.json();
      if (data.comments) {
        setComments((prev) =>
          append ? [...prev, ...data.comments] : data.comments,
        );
        setCommentTotal(data.total);
        setCommentTotalPages(data.totalPages);
        setCommentPage(page);
      }
    } catch {
      // silently fail
    } finally {
      setLoadingComments(false);
    }
  };

  const timeAgo = (dateStr: string) => {
    const now = new Date();
    const date = new Date(dateStr);
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    return `${months}mo ago`;
  };

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.first_name.trim()) e.first_name = "First name is required";
    if (!form.last_name.trim()) e.last_name = "Last name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email";
    }
    if (!form.zip_code.trim()) {
      e.zip_code = "Zip code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(form.zip_code)) {
      e.zip_code = "Please enter a valid zip code";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const { error } = await supabase.from("plny_signatures").insert({
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim().toLowerCase(),
        zip_code: form.zip_code.trim(),
        street_address: form.street_address.trim() || null,
        phone: form.phone.trim() || null,
        comment: form.comment.trim() || null,
        comment_public: commentPublic,
        comment_anonymous: commentAnonymous,
        opt_in_contact: optInContact,
        can_help: canHelp,
      });

      if (error) throw error;

      // Send confirmation email (non-blocking — petition is saved even if email fails)
      try {
        await fetch("/api/send-receipt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.first_name.trim(),
            lastName: form.last_name.trim(),
            email: form.email.trim().toLowerCase(),
            zipCode: form.zip_code.trim(),
            streetAddress: form.street_address.trim() || null,
            phone: form.phone.trim() || null,
            comment: form.comment.trim() || null,
            optInContact,
            canHelp,
          }),
        });
      } catch {
        // Email send failed silently — petition is already saved
      }

      setSubmitted(true);
      // Scroll to the confirmation so user sees it
      setTimeout(() => {
        document.getElementById("petition-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      fetchCount();
      fetchComments();
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopyScript = () => {
    navigator.clipboard.writeText(callScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-danger-950/20 via-dark-950 to-dark-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-danger-600/8 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/50 border border-danger-700/40 rounded-full text-danger-300 text-xs font-bold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              Action Pipeline
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-center leading-tight tracking-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Your Voice Is the{" "}
            <span className="text-danger-500">Only Weapon</span> They Can't
            Ignore.
          </motion.h1>

          {/* Signature counter — auto-shows at 100+ signatures */}
          {signatureCount !== null && signatureCount >= 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center mt-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-dark-900 border border-dark-700/50 rounded-2xl">
                <Users className="w-5 h-5 text-danger-400" />
                <div>
                  <span className="text-2xl font-black text-white">
                    {signatureCount.toLocaleString()}
                  </span>
                  <span className="text-dark-400 text-sm ml-2">
                    signatures and counting
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════ PETITION FORM ═══════════════════ */}
      <section id="petition-section" className="py-12 md:py-20 px-4 scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            {submitted ? (
              /* ── Success State ── */
              <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-2xl p-8 md:p-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Thank You for Standing with Liverpool!
                </h2>
                <p className="text-emerald-200/80 text-lg mb-6">
                  Your signature has been recorded. But don't stop here—the
                  actions below are how we actually win this fight.
                </p>
                {/* Signature count — auto-shows at 100+ */}
                {signatureCount !== null && signatureCount >= 100 && (
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-900/40 border border-emerald-700/30 rounded-full">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">
                      {signatureCount.toLocaleString()} total signatures
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                  <button
                    onClick={() => document.getElementById('action-steps')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="w-full sm:w-auto px-6 py-3 bg-danger-600 hover:bg-danger-500 text-white font-bold rounded-xl transition-all text-sm"
                  >
                    🔥 Now Amplify Your Voice
                  </button>
                  <button
                    onClick={() => document.getElementById('encouragement')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="w-full sm:w-auto px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-dark-200 hover:text-white hover:bg-white/10 font-bold rounded-xl transition-all text-sm"
                  >
                    💬 A Word of Encouragement
                  </button>
                </div>
              </div>
            ) : (
              /* ── Petition Form ── */
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
                {/* Community Voices — Horizontal Scroller */}
                {comments.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                          {commentTotal} Public {commentTotal === 1 ? "Comment" : "Comments"}{signatureCount ? ` / ${signatureCount} Signatures` : ""} and counting
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => voicesRef.current?.scrollBy({ left: -290, behavior: 'smooth' })}
                          className="w-7 h-7 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-white/10 hover:text-emerald-300 transition-all"
                          aria-label="Scroll left"
                        >
                          <ChevronLeftIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => voicesRef.current?.scrollBy({ left: 290, behavior: 'smooth' })}
                          className="w-7 h-7 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-white/10 hover:text-emerald-300 transition-all"
                          aria-label="Scroll right"
                        >
                          <ChevronRightIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div ref={voicesRef} className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
                      {comments.map((c, i) => (
                        <div
                          key={`${c.name}-${c.date}-${i}`}
                          onClick={() => setExpandedComment(c)}
                          className="snap-start flex-shrink-0 w-[280px] bg-white/5 backdrop-blur-md border border-emerald-800/20 rounded-xl p-4 cursor-pointer hover:bg-white/10 hover:border-emerald-700/30 transition-all flex flex-col"
                        >
                          <p className="text-dark-200 text-sm leading-relaxed mb-1 line-clamp-3">
                            &ldquo;{c.comment}&rdquo;
                          </p>
                          {c.comment.length > 120 && (
                            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                              Read More →
                            </span>
                          )}
                          <div className="flex items-center justify-between text-[10px] text-dark-500 mt-auto">
                            <div className="flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-emerald-900/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 font-bold text-[8px]">
                                {c.name.charAt(0)}
                              </span>
                              <span className="font-semibold text-dark-400">
                                {c.name}
                              </span>
                              {c.zip && (
                                <span className="text-dark-600">• {c.zip}</span>
                              )}
                            </div>
                            <span>{timeAgo(c.date)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expanded Comment Modal */}
                <AnimatePresence>
                  {expandedComment && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                      onClick={() => setExpandedComment(null)}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-dark-900/90 backdrop-blur-xl border border-emerald-800/30 rounded-2xl p-6 shadow-2xl"
                      >
                        <button
                          onClick={() => setExpandedComment(null)}
                          className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                          ✕
                        </button>
                        <p className="text-dark-100 text-base leading-relaxed mb-4 pr-8">
                          &ldquo;{expandedComment.comment}&rdquo;
                        </p>
                        <div className="flex items-center gap-2 text-xs text-dark-500">
                          <span className="w-6 h-6 rounded-full bg-emerald-900/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 font-bold text-[9px]">
                            {expandedComment.name.charAt(0)}
                          </span>
                          <span className="font-semibold text-dark-300">
                            {expandedComment.name}
                          </span>
                          {expandedComment.zip && (
                            <span className="text-dark-600">• {expandedComment.zip}</span>
                          )}
                          <span className="ml-auto">{timeAgo(expandedComment.date)}</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-danger-900/50 border border-danger-800/30 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-danger-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Sign the Petition
                    </h2>
                    <p className="text-sm text-dark-400">
                      Add your name to the official community record
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-dark-300 mb-1.5"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-800 border rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all ${
                          errors.first_name
                            ? "border-danger-500"
                            : "border-dark-700"
                        }`}
                        placeholder="John"
                      />
                      {errors.first_name && (
                        <p className="text-xs text-danger-400 mt-1">
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-dark-300 mb-1.5"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-800 border rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all ${
                          errors.last_name
                            ? "border-danger-500"
                            : "border-dark-700"
                        }`}
                        placeholder="Doe"
                      />
                      {errors.last_name && (
                        <p className="text-xs text-danger-400 mt-1">
                          {errors.last_name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-300 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-800 border rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all ${
                        errors.email ? "border-danger-500" : "border-dark-700"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-danger-400 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="zip_code"
                      className="block text-sm font-medium text-dark-300 mb-1.5"
                    >
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zip_code"
                      name="zip_code"
                      value={form.zip_code}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-dark-800 border rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all ${
                        errors.zip_code
                          ? "border-danger-500"
                          : "border-dark-700"
                      }`}
                      placeholder="13088"
                    />
                    {errors.zip_code && (
                      <p className="text-xs text-danger-400 mt-1">
                        {errors.zip_code}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="street_address"
                      className="block text-sm font-medium text-dark-300 mb-1.5"
                    >
                      Street Address{" "}
                      <span className="text-dark-500">
                        (optional — strengthens your petition)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="street_address"
                      name="street_address"
                      value={form.street_address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all"
                      placeholder="123 Main St, Liverpool, NY"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-300 mb-1.5"
                    >
                      Phone Number{" "}
                      <span className="text-dark-500">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all"
                      placeholder="(315) 555-1234"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-dark-300 mb-1.5"
                    >
                      Comment <span className="text-dark-500">(optional)</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all resize-none"
                      placeholder="Share why this matters to you..."
                    />
                  </div>

                  {/* Opt-in checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={optInContact}
                        onChange={(e) => setOptInContact(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-dark-600 bg-dark-800 text-danger-500 focus:ring-danger-500/50 flex-shrink-0"
                      />
                      <span className="text-sm text-dark-300 group-hover:text-dark-200 transition-colors">
                        Yes, you may contact me with updates about this campaign
                        and ways to get involved.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={canHelp}
                        onChange={(e) => setCanHelp(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-dark-600 bg-dark-800 text-danger-500 focus:ring-danger-500/50 flex-shrink-0"
                      />
                      <span className="text-sm text-dark-300 group-hover:text-dark-200 transition-colors">
                        I have expertise that can help this cause (legal,
                        aviation, environmental, media, etc.)
                      </span>
                    </label>
                    {form.comment.trim() && (
                      <>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={commentPublic}
                            onChange={(e) => setCommentPublic(e.target.checked)}
                            className="mt-1 w-4 h-4 rounded border-dark-600 bg-dark-800 text-danger-500 focus:ring-danger-500/50 flex-shrink-0"
                          />
                          <span className="text-sm text-dark-300 group-hover:text-dark-200 transition-colors">
                            Make my comment public (may be displayed on this site)
                          </span>
                        </label>
                        {commentPublic && (
                          <div className="ml-7 flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer group">
                              <input
                                type="radio"
                                name="attribution"
                                checked={!commentAnonymous}
                                onChange={() => setCommentAnonymous(false)}
                                className="w-3.5 h-3.5 border-dark-600 bg-dark-800 text-danger-500 focus:ring-danger-500/50"
                              />
                              <span className="text-xs text-dark-300 group-hover:text-dark-200 transition-colors">
                                Use my name & last initial
                              </span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                              <input
                                type="radio"
                                name="attribution"
                                checked={commentAnonymous}
                                onChange={() => setCommentAnonymous(true)}
                                className="w-3.5 h-3.5 border-dark-600 bg-dark-800 text-danger-500 focus:ring-danger-500/50"
                              />
                              <span className="text-xs text-dark-300 group-hover:text-dark-200 transition-colors">
                                Anonymous
                              </span>
                            </label>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {submitError && (
                    <div className="bg-danger-950/50 border border-danger-800/50 rounded-xl p-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-danger-400 flex-shrink-0" />
                      <p className="text-sm text-danger-300">{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-danger-600 hover:bg-danger-500 disabled:bg-danger-800 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Sign the Petition
                      </>
                    )}
                  </button>

                  <p className="text-xs text-dark-500 text-center">
                    Your information will only be used for this petition. We
                    will never sell or share your data.
                  </p>

                  <div className="text-center pt-2 border-t border-dark-800/50">
                    <p className="text-xs text-dark-500 mb-1">
                      Have questions or want to get involved directly?
                    </p>
                    <a
                      href="mailto:takeaction@protectliverpoolny.org"
                      className="text-sm font-semibold text-danger-400 hover:text-danger-300 transition-colors"
                    >
                      takeaction@protectliverpoolny.org
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════ NOT FROM LIVERPOOL ═══════════════════ */}
      <section className="px-4 pb-6 md:pb-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="bg-lime-950/20 border border-lime-800/30 rounded-xl p-5 md:p-6 text-center"
          >
            <p className="font-bold text-white text-sm mb-1">
              Not from Liverpool?{" "}
              <span className="text-lime-400">
                Your signature still matters.
              </span>
            </p>
            <p className="text-dark-400 text-xs leading-relaxed max-w-md mx-auto">
              What we learn fighting this — the legal strategies, the loopholes,
              the playbook — gets passed on to every community facing the same
              fight. When one neighborhood wins, it sets the precedent for all
              of them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ SYSTEMATIZED METHOD ═══════════════════ */}
      <section id="action-steps" className="py-16 md:py-24 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-danger-900/30 border border-danger-700/40 rounded-full text-danger-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Megaphone className="w-3.5 h-3.5" />
              Your Action Plan
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              How We{" "}
              <span className="text-danger-500">Fight Back</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Don't just be angry — be strategic. Follow this pipeline in order.
              Every step creates a paper trail. Every contact generates a
              record. When enough people do this, they{" "}
              <em className="text-white not-italic font-bold">have</em> to
              respond.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-danger-600/60 via-amber-600/40 to-lime-600/40 hidden md:block" />

            <div className="space-y-8">
              {/* STEP 1: File Formal Complaints */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-danger-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-danger-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    1
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-2">
                    Step 1 — File Formal Complaints
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Put It on the Record
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-6">
                    Every formal complaint creates a paper trail. Agencies are
                    required to log, track, and respond to formal filings.
                    Phones can be ignored. Paperwork can't.
                  </p>

                  <div className="space-y-4">
                    {/* FCC */}
                    <div className="bg-dark-950/60 rounded-xl p-4 border border-dark-700/30">
                      <p className="text-white font-bold text-sm mb-1">
                        📡 FCC — Civilian Tower Complaint
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed mb-3">
                        Submit a complaint about tower RF interference, safety
                        concerns, or a tower light outage. Click{" "}
                        <strong className="text-white">&quot;Radio&quot;</strong> or{" "}
                        <strong className="text-white">&quot;Emergency&quot;</strong>{" "}
                        on the form. Include coordinates, photos, and your
                        narrative.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                        <a
                          href="https://consumercomplaints.fcc.gov/hc/en-us"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-700/40 text-sky-300 font-bold text-xs rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          FCC Complaint Center
                        </a>
                      </div>
                      <p className="text-dark-500 text-[10px] mt-2">
                        Phone: 1-888-225-5322
                      </p>
                    </div>

                    {/* FAA */}
                    <div className="bg-dark-950/60 rounded-xl p-4 border border-dark-700/30">
                      <p className="text-white font-bold text-sm mb-1">
                        ✈️ FAA — Obstruction & Safety Hazard
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed mb-3">
                        Report an unregistered or unlit tower that poses a hazard
                        to navigable airspace. Use the Hotline to file a safety
                        complaint. Use the OE/AAA portal to look up whether the
                        builder actually filed a Form 7460-1.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                        <a
                          href="https://hotline.faa.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-700/40 text-sky-300 font-bold text-xs rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          FAA Hotline Form
                        </a>
                        <a
                          href="https://oeaaa.faa.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-dark-800/40 hover:bg-dark-800/60 border border-dark-700/40 text-dark-200 font-bold text-xs rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          OE/AAA Obstruction Lookup
                        </a>
                      </div>
                      <p className="text-dark-500 text-[10px] mt-2">
                        Safety Hotline: 1-800-255-1111 · 866-TELL-FAA
                      </p>
                    </div>

                    {/* USFWS */}
                    <div className="bg-dark-950/60 rounded-xl p-4 border border-dark-700/30">
                      <p className="text-white font-bold text-sm mb-1">
                        🦅 USFWS — Eagle Protection & Bird Strikes
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed mb-3">
                        100+ bald eagles roost at Onondaga Lake, 1.7 miles from
                        this tower. Report strikes via the FAA Wildlife Strike
                        Database. Report illegal take, unhandled eagle carcasses,
                        or nest destruction directly to USFWS Law Enforcement.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                        <a
                          href="tel:844-397-8477"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-lime-900/40 hover:bg-lime-900/60 border border-lime-700/40 text-lime-300 font-bold text-xs rounded-lg transition-all"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          844-FWS-TIPS
                        </a>
                        <a
                          href="https://wildlife.faa.gov/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-dark-800/40 hover:bg-dark-800/60 border border-dark-700/40 text-dark-200 font-bold text-xs rounded-lg transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Wildlife Strike Database
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible: Environmental Review Levers */}
                  <button
                    onClick={() => toggleStep(1)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-dark-800/50 hover:bg-dark-800/80 border border-dark-700/40 rounded-xl text-sm font-bold text-dark-200 hover:text-white transition-all"
                  >
                    <span>⚖️ Environmental review levers — stop the tower before it goes up</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${expandedSteps[1] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSteps[1] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
                          <p className="text-dark-300 text-xs leading-relaxed">
                            To stop or alter tower construction on environmental
                            grounds, you need the legal levers — not just
                            complaint forms. Telecom companies rely on civilians
                            not knowing how this paperwork works.
                          </p>

                          {/* FCC ASR Search */}
                          <div className="bg-sky-950/30 border border-sky-800/30 rounded-xl p-5">
                            <h4 className="font-bold text-sky-300 mb-1 text-sm">
                              FCC — Request for Environmental Review
                            </h4>
                            <p className="text-dark-300 text-xs leading-relaxed mb-2">
                              Before building, telecom companies must submit{" "}
                              <strong className="text-white">FCC Form 854</strong>{" "}
                              (Antenna Structure Registration) and post a local
                              public notice. You have a legally mandated{" "}
                              <strong className="text-danger-400">
                                30-day window
                              </strong>{" "}
                              to file a formal objection. Search the ASR database
                              for the tower, and if the application is pending,
                              submit a Request for Environmental Review.
                            </p>
                            <p className="text-dark-400 text-[10px] leading-relaxed mb-3">
                              You must submit evidence: photos of the eagle nest,
                              coordinates of the habitat, or data from the NY
                              Natural Heritage Program. Proving a BGEPA or MBTA
                              violation forces an expensive Environmental
                              Assessment.
                            </p>
                            <a
                              href="https://wireless2.fcc.gov/UlsApp/AsrSearch/asrRegistrationSearch.jsp"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-2 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-700/40 text-sky-300 font-bold text-xs rounded-lg transition-all"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              FCC ASR Search Portal
                            </a>
                          </div>

                          {/* USFWS NY Field Office */}
                          <div className="bg-lime-950/30 border border-lime-800/30 rounded-xl p-5">
                            <h4 className="font-bold text-lime-300 mb-1 text-sm">
                              USFWS — NY Ecological Services Field Office
                            </h4>
                            <p className="text-dark-300 text-xs leading-relaxed mb-2">
                              The USFWS doesn&apos;t have a generic complaint button.
                              You bypass the web forms and go straight to the
                              project review biologists at the NY Field Office in
                              Cortland, NY. Email them with the subject:{" "}
                              <em className="text-white not-italic">
                                &quot;ESA/BGEPA Compliance Concern: [Tower Address]&quot;
                              </em>
                            </p>
                            <p className="text-dark-400 text-[10px] leading-relaxed mb-3">
                              State that a tower is entering construction within
                              the buffer zone of a federally protected species.
                              Include exact GPS coordinates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
                              <a
                                href="mailto:fw5es_nyfo@fws.gov?subject=ESA/BGEPA Compliance Concern: 474 Electronics Parkway, Liverpool NY"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-lime-900/40 hover:bg-lime-900/60 border border-lime-700/40 text-lime-300 font-bold text-xs rounded-lg transition-all"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                fw5es_nyfo@fws.gov
                              </a>
                              <a
                                href="https://www.fws.gov/library/collections/forms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-dark-800/40 hover:bg-dark-800/60 border border-dark-700/40 text-dark-200 font-bold text-xs rounded-lg transition-all"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                USFWS Forms Library
                              </a>
                            </div>
                          </div>

                          {/* NYS DEC */}
                          <div className="bg-amber-950/30 border border-amber-800/30 rounded-xl p-5">
                            <h4 className="font-bold text-amber-300 mb-1 text-sm">
                              NYS DEC — Environmental Notice Bulletin & SEQR
                            </h4>
                            <p className="text-dark-300 text-xs leading-relaxed mb-2">
                              At the state level, tower projects must undergo{" "}
                              <strong className="text-white">
                                State Environmental Quality Review (SEQR)
                              </strong>
                              . The DEC publishes every pending permit in the
                              Environmental Notice Bulletin (updated every
                              Wednesday). Search your county to find the project
                              and the assigned DEC Regional Permit Administrator.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 flex-wrap mb-3">
                              <a
                                href="https://dec.ny.gov/news/environmental-notice-bulletin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-amber-900/30 hover:bg-amber-900/50 border border-amber-700/40 text-amber-300 font-bold text-xs rounded-lg transition-all"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                DEC Environmental Notice Bulletin
                              </a>
                              <a
                                href="https://www.ny.gov/services/report-environmental-violation"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 bg-dark-800/40 hover:bg-dark-800/60 border border-dark-700/40 text-dark-200 font-bold text-xs rounded-lg transition-all"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Report Environmental Violation
                              </a>
                            </div>
                            <div className="bg-danger-950/30 border border-danger-800/30 rounded-lg p-3">
                              <p className="text-danger-300 text-xs font-bold mb-1">
                                🚨 Nuclear Option — Bulldozers Already There?
                              </p>
                              <p className="text-dark-300 text-[10px] leading-relaxed">
                                If trees are being cleared or land graded next to
                                eagle habitat without an Incidental Take Permit,
                                call the{" "}
                                <strong className="text-white">
                                  NYS DEC Regional Wildlife Manager
                                </strong>{" "}
                                and the ECO dispatch line to report an active
                                violation of Article 11 (Endangered &amp;
                                Threatened Species Law).
                              </p>
                              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                                <a
                                  href="tel:844-332-3267"
                                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-danger-900/40 hover:bg-danger-900/60 border border-danger-700/40 text-danger-300 font-bold text-xs rounded-lg transition-all"
                                >
                                  <Phone className="w-3.5 h-3.5" />
                                  1-844-DEC-ECOS
                                </a>
                                <p className="text-dark-500 text-[10px] self-center">
                                  Region 7: (315) 426-7400
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-dark-800/40 border border-dark-700/30 rounded-lg p-3">
                            <p className="text-dark-300 text-xs leading-relaxed">
                              <strong className="text-white">Bottom line:</strong>{" "}
                              These agencies run on paperwork. The most powerful
                              thing you can do is include precise
                              latitude/longitude coordinates and date/time stamps.
                              Complaints without data get dismissed.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STEP 2: Contact the Airport */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-sky-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    2
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
                    Step 2 — Contact the Airport
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Demand They Protect the{" "}
                    <span className="text-sky-400">Airspace</span>
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-4">
                    The Syracuse Airport Authority spends millions mitigating
                    bird strikes, yet a state loophole is allowing a 184-foot
                    unlit tower — a{" "}
                    <strong className="text-white">
                      known raptor attractant
                    </strong>{" "}
                    — 0.25 miles from their approach corridor. Tell the Airport
                    Director to publicly oppose this hazard.
                  </p>

                  <div className="bg-dark-950/60 rounded-xl p-4 border border-dark-700/30 mb-4">
                    <p className="text-white font-bold text-sm mb-2">
                      ✈️ Syracuse Hancock International Airport
                    </p>
                    <div className="space-y-1">
                      <p className="text-dark-300 text-xs">
                        <strong className="text-white">
                          Airport Director:
                        </strong>{" "}
                        Jason Terreri
                      </p>
                      <p className="text-dark-300 text-xs">
                        <strong className="text-white">Phone:</strong> (315)
                        454-3263
                      </p>
                      <p className="text-dark-300 text-xs">
                        <strong className="text-white">Email:</strong>{" "}
                        <a
                          href="mailto:info@syrairport.org"
                          className="text-sky-400 hover:underline"
                        >
                          info@syrairport.org
                        </a>
                        <span className="text-dark-500 ml-1">
                          (CC your local representatives)
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Public Advocacy Email */}
                  <div className="bg-sky-950/20 border border-sky-800/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sky-400 font-bold text-xs uppercase tracking-widest">
                        📧 Copy & Send
                      </p>
                      <CopyButton text={`Director Terreri,\n\nAs a resident under the Runway 10 approach, I am urging the Syracuse Regional Airport Authority to publicly oppose the 184-foot unlit Phoenix Tower going up at 474 Electronics Parkway.\n\nGiven SYR's strict Wildlife Hazard Management Plan, allowing a massive steel structure that the FAA explicitly identifies as a raptor attractant just 0.25 miles from the descent corridor is a hazard to our community and the aircraft overhead.\n\nWe are asking you to formally request the NYS Thruway Authority halt this project until a full, public aviation safety and wildlife review is conducted.\n\nRespectfully,\n[YOUR NAME]\n[YOUR ADDRESS]`} />
                    </div>
                    <div className="text-[11px] text-dark-200 font-mono bg-dark-900/60 rounded-lg p-3 select-all whitespace-pre-line leading-relaxed">
                      {`Director Terreri,

As a resident under the Runway 10 approach, I am urging the Syracuse Regional Airport Authority to publicly oppose the 184-foot unlit Phoenix Tower going up at 474 Electronics Parkway.

Given SYR's strict Wildlife Hazard Management Plan, allowing a massive steel structure that the FAA explicitly identifies as a raptor attractant just 0.25 miles from the descent corridor is a hazard to our community and the aircraft overhead.

We are asking you to formally request the NYS Thruway Authority halt this project until a full, public aviation safety and wildlife review is conducted.

Respectfully,
[YOUR NAME]
[YOUR ADDRESS]`}
                    </div>
                  </div>
                </div>

              </motion.div>

              {/* STEP 3: Contact Your Elected Officials */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-orange-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    3
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
                    Step 3 — Contact Elected Officials
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Call <em className="not-italic text-orange-400">and</em>{" "}
                    Email — Do Both
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Calls get logged. Emails create a paper trail. When the same
                    office gets 50 calls and 200 emails about the same tower, it
                    becomes a political problem — and political problems get
                    fixed.
                  </p>
                  {/* Collapsible: Call Script + Officials */}
                  <button
                    onClick={() => toggleStep(3)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-dark-800/50 hover:bg-dark-800/80 border border-dark-700/40 rounded-xl text-sm font-bold text-dark-200 hover:text-white transition-all"
                  >
                    <span>📋 View call script, contact list & ward finder</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${expandedSteps[3] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSteps[3] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
                          {/* Call Script */}
                          <div className="bg-dark-950/60 rounded-xl p-5 border border-dark-700/30">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-sm font-bold text-dark-300 uppercase tracking-wider">
                                Your Call Script
                              </h4>
                              <CopyButton text={callScript} />
                            </div>
                            <div className="bg-dark-800/50 border border-dark-700/50 rounded-lg p-4">
                              <p className="text-dark-200 text-xs leading-relaxed whitespace-pre-line">
                                {callScript}
                              </p>
                            </div>
                          </div>

                          {/* Local pressure framing */}
                          <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-4">
                            <h4 className="text-sm font-bold text-white mb-1">
                              Start Local. The Town of Salina Has{" "}
                              <span className="text-danger-400">
                                33,000 Residents.
                              </span>
                            </h4>
                            <p className="text-dark-300 text-xs leading-relaxed">
                              Even though they are bypassing our community by
                              building on state land, the fight starts here.
                              Your Town Board members are the closest elected
                              officials to this issue.
                            </p>
                          </div>

                          {/* Ward Finder */}
                          <div className="bg-dark-950/60 rounded-xl p-4 border border-dark-700/30">
                            <div className="flex items-center gap-2 mb-3">
                              <MapPin className="w-4 h-4 text-amber-400" />
                              <h4 className="text-sm font-bold text-white">
                                Find My Ward
                              </h4>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-2 mb-3">
                              {[
                                {
                                  ward: "Ward 1",
                                  rep: "Hayley Downs",
                                  areas:
                                    "Village of Liverpool area, west of railroad tracks",
                                  color: "border-sky-800/40",
                                  tag: "text-sky-400",
                                },
                                {
                                  ward: "Ward 2",
                                  rep: "Leesa Paul",
                                  areas:
                                    "Northeast Salina — east of railroad tracks",
                                  color: "border-emerald-800/40",
                                  tag: "text-emerald-400",
                                },
                                {
                                  ward: "Ward 3",
                                  rep: "Daniel Ciciarelli",
                                  areas:
                                    "South-central Salina — near Mattydale/LeMoyne",
                                  color: "border-purple-800/40",
                                  tag: "text-purple-400",
                                },
                                {
                                  ward: "Ward 4",
                                  rep: "David Carnie",
                                  areas:
                                    "SE Salina — Electronics Pkwy, Thruway corridor",
                                  color: "border-danger-800/40",
                                  tag: "text-danger-400",
                                },
                              ].map((w) => (
                                <div
                                  key={w.ward}
                                  className={`bg-dark-800/50 border ${w.color} rounded-lg p-3`}
                                >
                                  <p
                                    className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${w.tag}`}
                                  >
                                    {w.ward}
                                  </p>
                                  <p className="text-xs font-semibold text-white">
                                    {w.rep}
                                  </p>
                                  <p className="text-[10px] text-dark-400">
                                    {w.areas}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <a
                                href="https://cms2.revize.com/revize/salinany/Document_Center/Government/Streets%20by%20ward.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-900/30 border border-amber-800/30 rounded-lg text-[10px] font-semibold text-amber-300 hover:bg-amber-900/50 transition-all"
                              >
                                <FileText className="w-3 h-3" /> Streets by
                                Ward (PDF){" "}
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                            <p className="text-[10px] text-danger-400/80 mt-2 italic">
                              📍 The cell tower site (474 Electronics Pkwy) is
                              in Ward 4.
                            </p>
                          </div>

                          {/* Tier 1: Town Board */}
                          <div>
                            <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-danger-600 text-[10px] font-black text-white">
                                1
                              </span>
                              Town of Salina Town Board
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {localOfficials.map((official) => (
                                <div
                                  key={official.email}
                                  className={`bg-dark-900/60 border rounded-lg p-3 ${official.priority ? "border-danger-700/40" : "border-dark-800/50"}`}
                                >
                                  <p
                                    className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${official.priority ? "text-danger-400" : "text-dark-400"}`}
                                  >
                                    {official.role}
                                  </p>
                                  <p className="text-white font-semibold text-sm mb-2">
                                    {official.name}
                                  </p>
                                  <div className="space-y-1 text-xs">
                                    <a
                                      href={`tel:${official.phone}`}
                                      className="flex items-center gap-1.5 text-dark-300 hover:text-white transition-colors"
                                    >
                                      <Phone className="w-3 h-3" />{" "}
                                      {official.phone}
                                    </a>
                                    <a
                                      href={`mailto:${official.email}`}
                                      className="flex items-center gap-1.5 text-dark-300 hover:text-white transition-colors"
                                    >
                                      <Mail className="w-3 h-3" />{" "}
                                      {official.email}
                                    </a>
                                  </div>
                                  {official.note && (
                                    <p className="text-[10px] text-dark-500 mt-2 italic">
                                      {official.note}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Town resource links */}
                          <div className="grid sm:grid-cols-3 gap-2">
                            <a
                              href="https://www.salinany.gov/government/town_board.php"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-3 py-2 bg-dark-900/60 border border-dark-800/50 rounded-lg text-xs text-dark-200 hover:text-white hover:border-dark-600 transition-all group"
                            >
                              <span className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5 text-danger-400" />{" "}
                                Town Board
                              </span>
                              <ExternalLink className="w-3 h-3 text-dark-500 group-hover:text-white" />
                            </a>
                            <a
                              href="https://www.salinany.gov/government/agendas___minutes.php"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-3 py-2 bg-dark-900/60 border border-dark-800/50 rounded-lg text-xs text-dark-200 hover:text-white hover:border-dark-600 transition-all group"
                            >
                              <span className="flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-danger-400" />{" "}
                                Agendas
                              </span>
                              <ExternalLink className="w-3 h-3 text-dark-500 group-hover:text-white" />
                            </a>
                            <a
                              href="https://www.salinany.gov/community/calendar.php"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-3 py-2 bg-dark-900/60 border border-dark-800/50 rounded-lg text-xs text-dark-200 hover:text-white hover:border-dark-600 transition-all group"
                            >
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-danger-400" />{" "}
                                Calendar
                              </span>
                              <ExternalLink className="w-3 h-3 text-dark-500 group-hover:text-white" />
                            </a>
                          </div>

                          {/* Tier 2: County & State */}
                          <div>
                            <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-dark-700 text-[10px] font-black text-white">
                                2
                              </span>
                              County & State Representatives
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {stateOfficials.map((official) => (
                                <div
                                  key={official.role}
                                  className="bg-dark-900/60 border border-dark-800/50 rounded-lg p-3"
                                >
                                  <p className="text-[10px] font-bold text-dark-400 uppercase tracking-wider mb-0.5">
                                    {official.role}
                                  </p>
                                  <p className="text-white font-semibold text-sm mb-2">
                                    {official.name}
                                  </p>
                                  <div className="space-y-1 text-xs">
                                    <a
                                      href={`tel:${official.phone}`}
                                      className="flex items-center gap-1.5 text-dark-300 hover:text-white transition-colors"
                                    >
                                      <Phone className="w-3 h-3" />{" "}
                                      {official.phone}
                                    </a>
                                    <a
                                      href={`mailto:${official.email}`}
                                      className="flex items-center gap-1.5 text-dark-300 hover:text-white transition-colors"
                                    >
                                      <Mail className="w-3 h-3" />{" "}
                                      {official.email}
                                    </a>
                                  </div>
                                  <p className="text-[10px] text-dark-500 mt-2 italic">
                                    {official.note}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STEP 4: Show Up */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-amber-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    4
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                    Step 4 — Show Up in Person
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Attend Every Town Board Meeting
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Nothing makes elected officials more uncomfortable than a
                    room full of angry residents reading their own decisions
                    back to them on the record. Show up. Bring neighbors. Make
                    them say your concerns out loud in public minutes.
                  </p>
                  {/* Collapsible: Town Hall Details */}
                  <button
                    onClick={() => toggleStep(4)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-dark-800/50 hover:bg-dark-800/80 border border-dark-700/40 rounded-xl text-sm font-bold text-dark-200 hover:text-white transition-all"
                  >
                    <span>📋 View meeting dates, times & location</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${expandedSteps[4] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSteps[4] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <div className="bg-gradient-to-br from-danger-950/50 via-danger-950/30 to-dark-900/60 border border-danger-700/40 rounded-xl p-5">
                            <div className="grid sm:grid-cols-3 gap-3 mb-4">
                              <div className="bg-dark-900/60 rounded-lg p-3">
                                <Calendar className="w-4 h-4 text-danger-400 mb-1" />
                                <p className="text-[10px] text-dark-400 uppercase font-bold tracking-wider mb-0.5">
                                  Town Board
                                </p>
                                <p className="text-white font-semibold text-xs">
                                  2nd & 4th Mondays
                                </p>
                                <div className="mt-1.5 space-y-0.5">
                                  {[
                                    "Mon, Mar 22",
                                    "Mon, Apr 13",
                                    "Mon, Apr 27",
                                    "Mon, May 11",
                                    "Wed, May 27",
                                  ].map((d) => (
                                    <p
                                      key={d}
                                      className="text-[10px] text-dark-300"
                                    >
                                      • {d}
                                    </p>
                                  ))}
                                </div>
                                <p className="text-[9px] text-dark-500 mt-1 italic">
                                  May 27 moved to Wed (Memorial Day)
                                </p>
                              </div>
                              <div className="bg-dark-900/60 rounded-lg p-3">
                                <Clock className="w-4 h-4 text-danger-400 mb-1" />
                                <p className="text-[10px] text-dark-400 uppercase font-bold tracking-wider mb-0.5">
                                  Time
                                </p>
                                <p className="text-white font-semibold text-xs">
                                  6:30 PM
                                </p>
                                <p className="text-[10px] text-dark-500 mt-1">
                                  Arrive early for public comment
                                </p>
                                <div className="mt-2 pt-2 border-t border-dark-800/50">
                                  <p className="text-[9px] text-dark-400 uppercase font-bold tracking-wider mb-0.5">
                                    Zoning Board
                                  </p>
                                  <p className="text-[10px] text-dark-300">
                                    1st & 3rd Mondays, 6:30 PM
                                  </p>
                                </div>
                              </div>
                              <div className="bg-dark-900/60 rounded-lg p-3">
                                <MapPin className="w-4 h-4 text-danger-400 mb-1" />
                                <p className="text-[10px] text-dark-400 uppercase font-bold tracking-wider mb-0.5">
                                  Location
                                </p>
                                <p className="text-white font-semibold text-xs">
                                  Town of Salina Town Hall
                                </p>
                                <p className="text-[10px] text-dark-500 mt-1">
                                  201 School Rd, Liverpool, NY 13088
                                </p>
                              </div>
                            </div>
                            <div className="bg-danger-900/30 border border-danger-800/30 rounded-lg p-3">
                              <p className="text-xs text-danger-200 leading-relaxed">
                                <strong className="text-danger-100">
                                  Pro tip:
                                </strong>{" "}
                                Sign up for public comment as soon as you
                                arrive. Be brief, be direct, and reference the
                                lack of notification process. Elected officials
                                respond to packed rooms.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STEP 5: FOIL Requests */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-teal-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    5
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">
                    Step 5 — File FOIL Requests
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Demand the Documents
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    New York's Freedom of Information Law gives you the right to
                    obtain any government records related to this tower. Ask for
                    SEQRA reviews, RF studies, lease agreements, FAA
                    correspondence, USFWS consultations — everything they should
                    have done.
                  </p>
                  <div className="bg-dark-950/60 rounded-xl p-4 border border-dark-700/30 mt-4">
                    <p className="text-white font-bold text-sm mb-2">
                      📄 Where to File
                    </p>
                    <div className="space-y-2">
                      <p className="text-dark-300 text-xs">
                        <strong className="text-white">Town of Salina:</strong>{" "}
                        <a
                          href="mailto:townclerk@salina.ny.us"
                          className="text-sky-400 hover:underline"
                        >
                          townclerk@salina.ny.us
                        </a>
                      </p>
                      <p className="text-dark-300 text-xs">
                        <strong className="text-white">
                          NY Thruway Authority:
                        </strong>{" "}
                        <a
                          href="mailto:publicinfo@thruway.ny.gov"
                          className="text-sky-400 hover:underline"
                        >
                          publicinfo@thruway.ny.gov
                        </a>
                      </p>
                      <p className="text-dark-300 text-xs">
                        <strong className="text-white">
                          NYS DEC Region 7:
                        </strong>{" "}
                        <a
                          href="mailto:r7foil@dec.ny.gov"
                          className="text-sky-400 hover:underline"
                        >
                          r7foil@dec.ny.gov
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Collapsible: FOIL Templates + Phoenix Tower Info */}
                  <button
                    onClick={() => toggleStep(5)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-dark-800/50 hover:bg-dark-800/80 border border-dark-700/40 rounded-xl text-sm font-bold text-dark-200 hover:text-white transition-all"
                  >
                    <span>📋 View FOIL template & who to contact</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${expandedSteps[5] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSteps[5] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
                          {/* FOIL Request */}
                          <div className="bg-dark-950/60 rounded-xl p-4 border border-teal-800/30">
                            <div className="flex items-center gap-2 mb-3">
                              <FileSearch className="w-4 h-4 text-teal-400" />
                              <h4 className="text-sm font-bold text-white">
                                File a FOIL Request
                              </h4>
                            </div>
                            <p className="text-xs text-dark-300 leading-relaxed mb-3">
                              Under New York's{" "}
                              <strong className="text-white">
                                Freedom of Information Law (FOIL)
                              </strong>
                              , you have the right to request all documents
                              related to this tower from the NYS Thruway
                              Authority.
                            </p>
                            <div className="space-y-1.5 mb-3">
                              <a
                                href="mailto:thruwayfoil@thruway.ny.gov"
                                className="flex items-center gap-1.5 text-xs text-dark-300 hover:text-white transition-colors"
                              >
                                <Mail className="w-3 h-3 text-teal-400" />{" "}
                                thruwayfoil@thruway.ny.gov
                              </a>
                              <div className="flex items-start gap-1.5 text-xs text-dark-400">
                                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0 text-dark-500" />
                                <span className="text-[10px]">
                                  Records Access Officer, NYS Thruway Authority,
                                  200 Southern Blvd, Albany, NY 12209
                                </span>
                              </div>
                            </div>
                            <div className="bg-teal-950/30 border border-teal-800/20 rounded-lg p-3">
                              <p className="text-[10px] text-teal-300 font-semibold mb-1">
                                Ask for:
                              </p>
                              <ul className="text-[10px] text-dark-300 space-y-0.5">
                                <li>
                                  • Tower lease agreement with Phoenix Tower
                                  International
                                </li>
                                <li>
                                  • All environmental review documents (or
                                  waivers)
                                </li>
                                <li>
                                  • Correspondence regarding public notification
                                </li>
                                <li>
                                  • Structural and RF radiation assessment
                                  reports
                                </li>
                                <li>
                                  • Any communications with defense contractors
                                  regarding the tower site
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Phoenix Tower Info */}
                          <div className="bg-dark-950/60 rounded-xl p-4 border border-amber-800/30">
                            <div className="flex items-center gap-2 mb-3">
                              <Building2 className="w-4 h-4 text-amber-400" />
                              <h4 className="text-sm font-bold text-white">
                                Know Who's Building This
                              </h4>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <p className="text-xs font-bold text-amber-400">
                                  Phoenix Tower International
                                </p>
                                <p className="text-[10px] text-dark-400">
                                  Global wireless infrastructure company
                                </p>
                              </div>
                              <div className="flex items-start gap-1.5 text-xs text-dark-300">
                                <MapPin className="w-3 h-3 mt-0.5 text-dark-500" />
                                <span>
                                  999 Yamato Rd, Ste 100, Boca Raton, FL 33431
                                </span>
                              </div>
                              <a
                                href="tel:561-257-0557"
                                className="flex items-center gap-1.5 text-xs text-dark-300 hover:text-white transition-colors"
                              >
                                <Phone className="w-3 h-3 text-dark-500" />{" "}
                                (561) 257-0557
                              </a>
                              <a
                                href="mailto:contact@phoenixintnl.com"
                                className="flex items-center gap-1.5 text-xs text-dark-300 hover:text-white transition-colors"
                              >
                                <Mail className="w-3 h-3 text-dark-500" />{" "}
                                contact@phoenixintnl.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STEP 6: Contact Media */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-purple-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    6
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
                    Step 6 — Alert the Media
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Make It a Story They Can't Ignore
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    Nothing scares them faster than the 6 o&apos;clock news. One
                    news segment reaches thousands. Send tips to local TV,
                    print, and investigative journalists. Frame the story:
                    <em className="text-white not-italic">
                      {" "}
                      a 184-foot unlit tower on state land, zero public input,
                      near an active flight path and 100+ bald eagles.
                    </em>
                  </p>
                  {/* Collapsible: Press Contacts + Email Template */}
                  <button
                    onClick={() => toggleStep(6)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-dark-800/50 hover:bg-dark-800/80 border border-dark-700/40 rounded-xl text-sm font-bold text-dark-200 hover:text-white transition-all"
                  >
                    <span>📋 View press contacts & email template</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${expandedSteps[6] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSteps[6] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          {[
                            {
                              outlet: "syracuse.com",
                              type: "Print / Digital",
                              email: "citynews@syracuse.com",
                              url: "https://www.syracuse.com/contactus/",
                              note: "Largest CNY digital news outlet",
                            },
                            {
                              outlet: "CNY Central (WSTM / WTVH)",
                              type: "TV — NBC 3 / CBS 5",
                              email: "news@cnycentral.com",
                              url: "https://cnycentral.com/station/contact",
                              note: "TV news — broadest local audience",
                            },
                            {
                              outlet: "NewsChannel 9 (WSYR-TV)",
                              type: "TV — ABC 9",
                              email: "Assignmentdesk@LocalSYR.com",
                              url: "https://www.localsyr.com/contact",
                              note: "Assignment desk — breaking stories",
                            },
                            {
                              outlet: "WSYR News Radio",
                              type: "Radio — 570 AM / 106.9 FM",
                              email: "wsyrnews@iheartmedia.com",
                              phone: "(315) 421-9797",
                              note: "Talk radio amplifies fast",
                            },
                          ].map((press) => (
                            <div
                              key={press.outlet}
                              className="bg-dark-950/60 border border-dark-700/30 rounded-lg p-3"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-bold text-white">
                                    {press.outlet}
                                  </p>
                                  <p className="text-[9px] text-dark-500 uppercase font-bold tracking-widest">
                                    {press.type}
                                  </p>
                                  <p className="text-[10px] text-dark-400 mt-0.5">
                                    {press.note}
                                  </p>
                                </div>
                                <div className="flex flex-col gap-1 sm:items-end flex-shrink-0">
                                  <a
                                    href={`mailto:${press.email}?subject=Unauthorized 184-Ft Cell Tower in Liverpool, NY`}
                                    className="inline-flex items-center gap-1 text-[10px] font-semibold text-danger-300 hover:text-danger-200 transition-colors"
                                  >
                                    <Mail className="w-2.5 h-2.5" />{" "}
                                    {press.email}
                                  </a>
                                  {press.phone && (
                                    <a
                                      href={`tel:${press.phone.replace(/[^0-9]/g, "")}`}
                                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                                    >
                                      <Phone className="w-2.5 h-2.5" />{" "}
                                      {press.phone}
                                    </a>
                                  )}
                                  {press.url && (
                                    <a
                                      href={press.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-dark-400 hover:text-dark-300 transition-colors"
                                    >
                                      <ExternalLink className="w-2.5 h-2.5" />{" "}
                                      Contact page
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Email Template */}
                          <div className="bg-purple-950/20 border border-purple-800/20 rounded-lg p-4">
                            <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">
                              Suggested Subject Line
                            </p>
                            <p className="text-xs text-dark-200 font-mono bg-dark-900/60 rounded-lg p-2 select-all mb-3">
                              Massive 184-Ft Cell Tower Being Built 0.3 Miles
                              From SYR Landing Zone
                            </p>
                            <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-1">
                              Suggested Message — Copy, Paste & Personalize
                            </p>
                            <div className="text-[11px] text-dark-200 font-mono bg-dark-900/60 rounded-lg p-3 select-all whitespace-pre-line leading-relaxed">
                              {`Hi,

I'm reaching out about a story developing in Liverpool, NY that I believe deserves coverage.

A 184-foot commercial cell tower is currently being erected on New York State Thruway Authority land — just 0.3 miles from a landing approach to Syracuse Hancock International Airport — in a residential neighborhood surrounded by elementary schools, apartment complexes, and assisted living facilities.

No residents were notified. No local zoning review was conducted. The tower requires zero obstruction lighting under FAA rules because it was built at exactly 184 feet — 16 feet below the federal threshold.

Residents are concerned about health effects from 24/7 RF radiation, aviation safety, and declining property values. The community has organized at ProtectLiverpoolNY.org and is demanding answers from local and state officials.

[PERSONALIZE: Add your connection — Are you a parent at a nearby school? A pilot? A homeowner who was never told?]

Thank you for your time,
[YOUR NAME]
[YOUR PHONE / EMAIL]`}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STEP 7: Write a Letter to the Editor */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4.5}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-pink-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    7
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2">
                    Step 7 — Write a Letter to the Editor
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Get It in <span className="text-pink-400">Print</span>
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-3">
                    A letter to the editor reaches thousands of readers who would
                    never see a Facebook post. It gets indexed by Google. It puts
                    the issue in the public record. Three outlets, one letter each
                    — 15 minutes.
                  </p>
                  <button
                    onClick={() => toggleStep(7)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-3 bg-dark-800/50 hover:bg-dark-800/80 border border-dark-700/40 rounded-xl text-sm font-bold text-dark-200 hover:text-white transition-all"
                  >
                    <span>📋 View outlets, guidelines & template letter</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${expandedSteps[7] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedSteps[7] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          {/* Outlets */}
                          {[
                            {
                              outlet: "Syracuse.com / Post-Standard",
                              email: "letters@syracuse.com",
                              limit: "250 words max",
                              note: "Largest CNY digital + print audience. Include name, address, phone (not published).",
                              color: "border-pink-800/30",
                            },

                            {
                              outlet: "Eagle Bulletin / Star Review",
                              email: null,
                              limit: "~300 words",
                              note: "Hyper-local Liverpool/Salina paper. Call (315) 434-8889 for submission details.",
                              color: "border-amber-800/30",
                            },
                          ].map((pub) => (
                            <div
                              key={pub.outlet}
                              className={`bg-dark-950/60 border ${pub.color} rounded-lg p-4`}
                            >
                              <p className="text-sm font-bold text-white mb-0.5">
                                {pub.outlet}
                              </p>
                              <p className="text-[10px] text-dark-500 font-bold uppercase tracking-widest mb-2">
                                {pub.limit}
                              </p>
                              <p className="text-xs text-dark-400 mb-2">
                                {pub.note}
                              </p>
                              {pub.email ? (
                                <a
                                  href={`mailto:${pub.email}?subject=Letter to the Editor: 184-Ft Cell Tower in Liverpool, NY`}
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors"
                                >
                                  <Mail className="w-3 h-3" />
                                  {pub.email}
                                </a>
                              ) : (
                                <a
                                  href="tel:3154348889"
                                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors"
                                >
                                  <Phone className="w-3 h-3" />
                                  (315) 434-8889
                                </a>
                              )}
                            </div>
                          ))}

                          {/* Template Letter */}
                          <div className="bg-pink-950/20 border border-pink-800/20 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">
                                Template Letter — Copy & Personalize
                              </p>
                              <CopyButton text={`To the Editor,\n\nI am writing to bring attention to a 184-foot commercial cell tower currently being erected in Liverpool, NY — on New York State Thruway Authority land at 474 Electronics Parkway — with zero public notification and no local zoning review.\n\nThis tower sits approximately 0.3 miles from an active landing approach to Syracuse Hancock International Airport. Over 100 bald eagles winter at the Onondaga Lake roost less than two miles away. The tower requires no obstruction lighting because it was built at exactly 184 feet — 16 feet below the FAA threshold.\n\nNo residents were notified. No environmental review was conducted. No community input was sought. The tower is being built by Phoenix Tower International, backed by BlackRock and Blackstone, on a lease with the Thruway Authority that bypasses every local protection on the books.\n\n[PERSONALIZE: Are you a homeowner nearby? A parent at Long Branch Elementary? A pilot who uses SYR? Add your personal stake here.]\n\nResidents have organized at ProtectLiverpoolNY.org and are demanding accountability from local and state officials. This isn't just a Liverpool problem — it's a precedent for every community in New York.\n\nSincerely,\n[YOUR NAME]\n[YOUR ADDRESS]\n[YOUR PHONE]`} />
                            </div>
                            <div className="text-[11px] text-dark-200 font-mono bg-dark-900/60 rounded-lg p-3 select-all whitespace-pre-line leading-relaxed">
                              {`To the Editor,

I am writing to bring attention to a 184-foot commercial cell tower currently being erected in Liverpool, NY — on New York State Thruway Authority land at 474 Electronics Parkway — with zero public notification and no local zoning review.

This tower sits approximately 0.3 miles from an active landing approach to Syracuse Hancock International Airport. Over 100 bald eagles winter at the Onondaga Lake roost less than two miles away. The tower requires no obstruction lighting because it was built at exactly 184 feet — 16 feet below the FAA threshold.

No residents were notified. No environmental review was conducted. No community input was sought. The tower is being built by Phoenix Tower International, backed by BlackRock and Blackstone, on a lease with the Thruway Authority that bypasses every local protection on the books.

[PERSONALIZE: Are you a homeowner nearby? A parent at Long Branch Elementary? A pilot who uses SYR? Add your personal stake here.]

Residents have organized at ProtectLiverpoolNY.org and are demanding accountability from local and state officials. This isn't just a Liverpool problem — it's a precedent for every community in New York.

Sincerely,
[YOUR NAME]
[YOUR ADDRESS]
[YOUR PHONE]`}
                            </div>
                            <p className="text-[10px] text-dark-500 mt-2 italic">
                              ⚡ Pro tip: Send to only ONE outlet at a time — they want exclusive letters. Send Syracuse.com first (biggest reach), then a different version to Eagle Bulletin.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* STEP 8: Band Together */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={5}
                className="flex items-start gap-4 md:pl-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-lime-600 flex items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-lime-900/40">
                  <span className="text-white text-sm md:text-base font-black">
                    8
                  </span>
                </div>
                <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 flex-1">
                  <p className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-2">
                    Step 8 — Band Together
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3">
                    Organize Your Neighborhood
                  </h3>
                  <p className="text-dark-300 leading-relaxed mb-5">
                    One complaint goes in the trash. A hundred complaints force
                    a public hearing. Connect with your neighbors, share this
                    site, and make this impossible to ignore.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href="https://nextdoor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-950/30 border border-emerald-800/30 rounded-xl p-4 hover:border-emerald-600/50 transition-colors group"
                    >
                      <p className="text-white font-bold text-sm mb-1 group-hover:text-emerald-400 transition-colors">
                        📣 Nextdoor
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed">
                        Post in your Liverpool/Salina neighborhood group. Tag it
                        as a "Safety Concern." Share this website.
                      </p>
                    </a>

                    <a
                      href="https://www.facebook.com/groups/1657668825679413"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-950/30 border border-sky-800/30 rounded-xl p-4 hover:border-sky-600/50 transition-colors group"
                    >
                      <p className="text-white font-bold text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        👥 Facebook Group
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed">
                        Join the Protect Liverpool NY Facebook group for
                        updates, meeting coordination, and real-time organizing.
                      </p>
                    </a>

                    <a
                      href="https://www.onondagaaudubon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-950/30 border border-lime-800/30 rounded-xl p-4 hover:border-lime-600/50 transition-colors group"
                    >
                      <p className="text-white font-bold text-sm mb-1 group-hover:text-lime-400 transition-colors">
                        🦅 Onondaga Audubon Society
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed">
                        100+ bald eagles roost at Onondaga Lake. Audubon tracks
                        them. Contact them about a known eagle attractant going
                        up near SYR's approach path.
                      </p>
                    </a>

                    <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4">
                      <p className="text-white font-bold text-sm mb-1">
                        🏘️ Talk to Your Neighbors
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed">
                        Knock on doors. Print flyers. Send the link. Most people
                        don't even know this tower exists — once they do,
                        they're as angry as you are.
                      </p>
                    </div>

                    <div className="bg-dark-950/60 border border-dark-700/30 rounded-xl p-4">
                      <p className="text-white font-bold text-sm mb-1">
                        📱 Share on Social Media
                      </p>
                      <p className="text-dark-400 text-xs leading-relaxed">
                        Share{" "}
                        <strong className="text-white">
                          ProtectLiverpoolNY.com
                        </strong>{" "}
                        on every platform. Use the hashtag{" "}
                        <strong className="text-danger-400">
                          #ProtectLiverpoolNY
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pipeline summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-12"
          >
            <div className="bg-danger-950/20 border border-danger-800/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl font-black text-white mb-2">
                Do all 8. In order. Today.
              </p>
              <p className="text-dark-300 max-w-xl mx-auto leading-relaxed">
                Every step takes 5&ndash;10 minutes. In about an hour, you'll
                have filed complaints with 4 federal/state agencies, notified
                the airport, contacted your representatives, written a letter
                to the editor, and connected with your community. That's not activism — that's leverage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* ═══════════════════ HELP THE CAUSE ═══════════════════ */}
      <section className="py-16 md:py-24 px-4 bg-dark-900/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Help the <span className="text-danger-500">Cause</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              This fight takes more than signatures. Here's how you can make a
              real difference.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="space-y-4 mb-8"
          >
            {[
              {
                icon: Megaphone,
                title: "Share this site",
                desc: "Send protectliverpoolny.org to every neighbor, parent, and community group you know. Awareness is the first step.",
              },
              {
                icon: Building2,
                title: "Attend the next Town Board meeting",
                desc: "Show up. Bring your neighbors. Numbers are the only thing elected officials respond to.",
              },
              {
                icon: FileText,
                title: "File a FOIL request",
                desc: "Request documents from the NYS Thruway Authority about the tower lease, environmental waivers, and all correspondence with Phoenix Tower International.",
              },
              {
                icon: Megaphone,
                title: "Tell your story",
                desc: "Are you a pilot? A parent at Long Branch Elementary? A resident who was never notified? Your story matters. Send it to us.",
              },
              {
                icon: Scale,
                title: "Support legal action",
                desc: "If you have legal expertise, connections to environmental law organizations, or resources to contribute to a potential challenge — reach out.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
              >
                <item.icon className="w-5 h-5 text-danger-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-dark-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-6 md:p-8 text-center"
          >
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <p className="text-dark-200 mb-4">
              Have information, a story, or a way to help? Reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:takeaction@protectliverpoolny.org"
                className="inline-flex items-center gap-2 px-6 py-3 bg-danger-600 hover:bg-danger-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40 hover:shadow-danger-800/60 hover:scale-[1.03]"
              >
                <Mail className="w-4 h-4" />
                takeaction@protectliverpoolny.org
              </a>
              <CopyButton text="takeaction@protectliverpoolny.org" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FINAL REMINDER ═══════════════════ */}
      <section id="encouragement" className="py-12 md:py-20 px-4 scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <p className="text-xs font-bold text-dark-500 uppercase tracking-widest mb-4">
              One Final Reminder
            </p>
            <p className="text-lg md:text-xl text-dark-200 font-medium italic leading-relaxed mb-2">
              &quot;You let one ant stand up to us, then they{" "}
              <span className="text-danger-400 not-italic font-black">all</span>{" "}
              might stand up&hellip; those puny little ants outnumber us a
              hundred to one. And if they ever figure that out, there goes our
              way of life.&quot;
            </p>
            <p className="text-sm text-dark-500 mb-8">
              — Hopper, explaining exactly why Phoenix Tower International and
              the NYS Thruway Authority are hoping you won&apos;t read this page
            </p>

            <div
              className="relative w-full rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src="https://www.youtube.com/embed/VLbWnJGlyMU"
                title="A Bug's Life — Hopper's Speech"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="mt-6 text-sm text-dark-400">
              Salina has{" "}
              <span className="text-white font-bold">33,000 residents.</span>{" "}
              Phoenix Tower International has{" "}
              <span className="text-danger-400 font-bold">one tower.</span> Do
              the math.
            </p>

            <button
              onClick={() => document.getElementById('action-steps')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="mt-8 px-8 py-3 bg-danger-600 hover:bg-danger-500 text-white font-bold rounded-xl transition-all text-sm inline-flex items-center gap-2"
            >
              🔥 Now Amplify Your Voice
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer for mobile CTA */}
      <div className="h-16 md:hidden" />
    </>
  );
}
