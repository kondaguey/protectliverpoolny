"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const callScript = `Hello, my name is [YOUR NAME] and I'm a resident of Liverpool, New York, zip code [YOUR ZIP].

I'm calling to express my strong opposition to the 184-foot commercial cell tower that is being erected on New York State Thruway Authority land in our residential neighborhood—without any local zoning review, environmental assessment, or notification to affected residents.

I'm asking you to:

1. Investigate how this project is bypassing all local oversight by using state-owned land
2. Support legislation to close this loophole so it can't happen in other communities
3. Push for a full environmental and structural review of this tower
4. Ensure that community input is required for any future builds on state land in residential areas

This affects hundreds of families and sets a dangerous precedent for all of New York. Thank you for your time.`;

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
    name: "Page Steinhardt",
    phone: "(315) 457-6661",
    email: "psteinhardt@salina.ny.us",
    note: "Town Board member",
    priority: false,
  },
  {
    role: "Ward 4 Councilor",
    name: "Eliza Hewitt Driscoll",
    phone: "(315) 457-6661",
    email: "edriscoll@salina.ny.us",
    note: "Town Board member",
    priority: false,
  },
];

const stateOfficials = [
  {
    role: "Onondaga County Legislator — 4th District",
    name: "Jeremiah Thompson",
    phone: "(315) 435-2070",
    email: "JeremiahThompson@ongov.net",
    note: "Covers Liverpool & Salina — also chairs Liverpool Zoning Board of Appeals",
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
  comment: string;
};

export default function TakeActionPage() {
  const [form, setForm] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    zip_code: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [signatureCount, setSignatureCount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

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
  }, [fetchCount]);

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
        comment: form.comment.trim() || null,
      });

      if (error) throw error;

      setSubmitted(true);
      fetchCount();
    } catch (err: any) {
      setSubmitError(
        err.message || "Something went wrong. Please try again."
      );
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
              Fight Back
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
            <span className="text-danger-500">Only Weapon</span>{" "}They
            Can&apos;t Ignore.
          </motion.h1>

          {/* Signature counter */}
          {signatureCount !== null && (
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
      <section className="py-12 md:py-20 px-4">
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
                  Your signature has been recorded. But don&apos;t stop
                  here—the actions below are how we actually win this fight.
                </p>
                {signatureCount !== null && (
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-900/40 border border-emerald-700/30 rounded-full">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">
                      {signatureCount.toLocaleString()} total signatures
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* ── Petition Form ── */
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8">
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
                        errors.email
                          ? "border-danger-500"
                          : "border-dark-700"
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
                      htmlFor="comment"
                      className="block text-sm font-medium text-dark-300 mb-1.5"
                    >
                      Comment{" "}
                      <span className="text-dark-500">(optional)</span>
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
                    Your information will only be used for this petition. We will
                    never sell or share your data.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ CALL SCRIPT ═══════════════════ */}
      <section className="py-12 md:py-20 px-4 bg-dark-900/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-900/40 border border-sky-800/30 flex items-center justify-center">
                <Phone className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Call Your Representatives
                </h2>
                <p className="text-sm text-dark-400">
                  Use this script — it takes less than 2 minutes
                </p>
              </div>
            </div>
          </motion.div>

          {/* Script card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-dark-300 uppercase tracking-wider">
                Your Call Script
              </h3>
              <button
                onClick={handleCopyScript}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-dark-800 hover:bg-dark-700 text-dark-300 hover:text-white border border-dark-700 rounded-lg transition-all"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy Script
                  </>
                )}
              </button>
            </div>
            <div className="bg-dark-800/50 border border-dark-700/50 rounded-xl p-5">
              <p className="text-dark-200 text-sm leading-relaxed whitespace-pre-line">
                {callScript}
              </p>
            </div>
          </motion.div>

          {/* Contact cards — LOCAL FIRST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            {/* Local pressure framing */}
            <div className="bg-danger-950/30 border border-danger-800/30 rounded-2xl p-5 md:p-6 mb-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Start Local. The Town of Salina Has{" "}
                <span className="text-danger-400">33,000 Residents.</span>
              </h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Even though they are bypassing our community by building on state
                land, the fight starts here. Your Town Board members are the
                closest elected officials to this issue. When 33,000 residents
                start calling, emailing, and showing up — that pressure rolls
                uphill fast.
              </p>
            </div>

            {/* Tier 1: Local Officials */}
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-danger-600 text-xs font-black text-white">
                1
              </span>
              Town of Salina Town Board
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {localOfficials.map((official) => (
                <div
                  key={official.email}
                  className={`bg-dark-900/60 border rounded-xl p-5 ${
                    official.priority
                      ? "border-danger-700/40"
                      : "border-dark-800/50"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      official.priority
                        ? "text-danger-400"
                        : "text-dark-400"
                    }`}
                  >
                    {official.role}
                  </p>
                  <p className="text-white font-semibold mb-3">
                    {official.name}
                  </p>
                  <div className="space-y-2 text-sm">
                    <a
                      href={`tel:${official.phone}`}
                      className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {official.phone}
                    </a>
                    <a
                      href={`mailto:${official.email}`}
                      className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {official.email}
                    </a>
                  </div>
                  {official.note && (
                    <p className="text-xs text-dark-500 mt-3 italic">
                      {official.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Town resources links */}
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              <a
                href="https://www.salinany.gov/government/town_board.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-dark-900/60 border border-dark-800/50 rounded-xl text-sm text-dark-200 hover:text-white hover:border-dark-600 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-danger-400" />
                  Town Board
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-dark-500 group-hover:text-white" />
              </a>
              <a
                href="https://www.salinany.gov/government/agendas___minutes.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-dark-900/60 border border-dark-800/50 rounded-xl text-sm text-dark-200 hover:text-white hover:border-dark-600 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-danger-400" />
                  Agendas & Minutes
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-dark-500 group-hover:text-white" />
              </a>
              <a
                href="https://www.townofonondaga.gov/calendar/443/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-3 bg-dark-900/60 border border-dark-800/50 rounded-xl text-sm text-dark-200 hover:text-white hover:border-dark-600 transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-danger-400" />
                  Meeting Calendar
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-dark-500 group-hover:text-white" />
              </a>
            </div>

            {/* Tier 2: County & State Officials */}
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-dark-700 text-xs font-black text-white">
                2
              </span>
              County & State Representatives
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateOfficials.map((official) => (
                <div
                  key={official.role}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
                >
                  <p className="text-xs font-bold text-dark-400 uppercase tracking-wider mb-1">
                    {official.role}
                  </p>
                  <p className="text-white font-semibold mb-3">
                    {official.name}
                  </p>
                  <div className="space-y-2 text-sm">
                    <a
                      href={`tel:${official.phone}`}
                      className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {official.phone}
                    </a>
                    <a
                      href={`mailto:${official.email}`}
                      className="flex items-center gap-2 text-dark-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      {official.email}
                    </a>
                  </div>
                  <p className="text-xs text-dark-500 mt-3 italic">
                    {official.note}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TOWN HALL ═══════════════════ */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <div className="bg-gradient-to-br from-danger-950/50 via-danger-950/30 to-dark-900/60 border-2 border-danger-700/40 rounded-2xl p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-danger-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-white">
                    Pack the Town Board Meeting
                  </h2>
                  <p className="text-sm text-danger-300">
                    Show up in person. Numbers matter.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <Calendar className="w-5 h-5 text-danger-400 mb-2" />
                  <p className="text-xs text-dark-400 uppercase font-bold tracking-wider mb-1">
                    Date
                  </p>
                  <a
                    href="https://www.salinany.gov/government/agendas___minutes.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger-400 font-semibold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Check Schedule
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <p className="text-xs text-dark-500 mt-1">
                    Next scheduled meeting
                  </p>
                </div>
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <Clock className="w-5 h-5 text-danger-400 mb-2" />
                  <p className="text-xs text-dark-400 uppercase font-bold tracking-wider mb-1">
                    Time
                  </p>
                  <p className="text-white font-semibold">7:00 PM</p>
                  <p className="text-xs text-dark-500 mt-1">
                    Arrive early for public comment
                  </p>
                </div>
                <div className="bg-dark-900/60 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-danger-400 mb-2" />
                  <p className="text-xs text-dark-400 uppercase font-bold tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-white font-semibold text-sm">
                    Town of Salina Town Hall
                  </p>
                  <p className="text-xs text-dark-500 mt-1">
                    201 School Rd, Liverpool, NY 13088
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-danger-900/30 border border-danger-800/30 rounded-xl p-4">
                <p className="text-sm text-danger-200 leading-relaxed">
                  <strong className="text-danger-100">Pro tip:</strong> Sign up
                  for public comment as soon as you arrive. Be brief, be
                  direct, and reference the lack of notification process.
                  Elected officials respond to packed rooms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═════════════ THE PROOF — FCC REGISTRATION ═════════════ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
              Federal Filing — Public Record
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              The Proof Is in Their Own{" "}
              <span className="text-danger-500">Paperwork</span>
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              This is the FCC Antenna Structure Registration for the tower in
              your neighborhood. Every detail below comes directly from this
              federal filing. Read it yourself.
            </p>
          </motion.div>

          {/* Map + Stats grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            {/* Embedded map */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40 mb-6" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.google.com/maps?q=43.1019,-76.1851&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tower Location — NYS Thruway Exit 37, Liverpool NY"
              />
            </div>

            {/* Registration stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { label: "ASR Number", value: "1329974", accent: "text-danger-400" },
                { label: "FCC Reg (FRN)", value: "0025555459", accent: "text-amber-400" },
                { label: "Height (AGL)", value: "56.1m / 184 ft", accent: "text-danger-400" },
                { label: "FAA Lighting", value: "NONE", accent: "text-danger-500" },
                { label: "Structure Type", value: "Monopole", accent: "text-dark-200" },
                { label: "Issue Date", value: "02/14/2025", accent: "text-dark-200" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-4"
                >
                  <p className="text-[10px] text-dark-500 uppercase font-bold tracking-widest mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-lg font-black ${stat.accent}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Location & Owner */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5">
                <p className="text-[10px] text-dark-500 uppercase font-bold tracking-widest mb-1">
                  Location of Antenna Structure
                </p>
                <p className="text-white font-semibold">
                  NYS Thruway (I-90) NYSTA Exit 37
                </p>
                <p className="text-dark-300 text-sm">
                  Liverpool, NY 13088 — Onondaga County
                </p>
                <p className="text-dark-500 text-xs mt-2 font-mono">
                  43°06&apos;06.9&quot;N &nbsp; 076°11&apos;06.3&quot;W
                </p>
              </div>
              <div className="bg-dark-900/60 border border-dark-800/50 rounded-xl p-5">
                <p className="text-[10px] text-dark-500 uppercase font-bold tracking-widest mb-1">
                  Owner
                </p>
                <p className="text-amber-400 font-semibold">
                  Phoenix Tower International
                </p>
                <p className="text-dark-300 text-sm">
                  ATTN: Mitchell Henry
                </p>
                <p className="text-dark-400 text-xs mt-1">
                  999 Yamato Road, Suite 100
                  <br />
                  Boca Raton, FL 33431
                </p>
              </div>
            </div>

            {/* FAA callout */}
            <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-danger-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-danger-200 font-bold mb-1">
                    Painting and Lighting Requirements: FAA Chapters NONE
                  </p>
                  <p className="text-sm text-danger-300/70 leading-relaxed">
                    That&apos;s a direct quote from the federal filing. A 184-foot
                    industrial structure going up 3 miles from Syracuse Hancock
                    International Airport — with{" "}
                    <strong className="text-danger-200">
                      zero obstruction lighting
                    </strong>
                    . Because at 184 feet, they don&apos;t have to. By design.
                  </p>
                </div>
              </div>
            </div>

            {/* The Two Documents */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <a
                href="/faa-filing-phoenix-tower-intl.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark-900/60 border border-dark-800/50 hover:border-danger-800/50 rounded-xl p-5 transition-all"
              >
                <p className="text-[10px] text-dark-500 uppercase font-bold tracking-widest mb-2">
                  Document 1 — Issued 02/14/2025
                </p>
                <p className="text-white font-bold group-hover:text-danger-400 transition-colors mb-2">
                  FCC Antenna Structure Registration
                </p>
                <p className="text-xs text-dark-400 leading-relaxed mb-3">
                  The original registration granting Phoenix Tower International
                  permission to build. ASR #1329974. Height: 184 ft. FAA
                  lighting: NONE.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-danger-400">
                  <FileSearch className="w-3 h-3" />
                  View PDF
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
              <a
                href="/construction-reminder.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark-900/60 border border-dark-800/50 hover:border-amber-800/50 rounded-xl p-5 transition-all"
              >
                <p className="text-[10px] text-dark-500 uppercase font-bold tracking-widest mb-2">
                  Document 2 — Dated 02/18/2026
                </p>
                <p className="text-white font-bold group-hover:text-amber-400 transition-colors mb-2">
                  FCC Construction Reminder
                </p>
                <p className="text-xs text-dark-400 leading-relaxed mb-3">
                  Over a year later, the FCC sent this: &ldquo;We have no record
                  that construction or alteration has been completed or
                  abandoned.&rdquo;
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                  <FileSearch className="w-3 h-3" />
                  View PDF
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Implications callout */}
            <div className="bg-danger-950/30 border border-danger-800/30 rounded-xl p-5">
              <p className="text-xs font-bold text-danger-400 uppercase tracking-widest mb-3">
                What This Means
              </p>
              <p className="text-danger-200 leading-relaxed mb-3">
                The FCC granted Phoenix Tower International this registration in{" "}
                <strong className="text-white">February 2025</strong>. They sat
                on it for{" "}
                <strong className="text-white">nearly a year</strong> before
                breaking ground in early 2026 — without notifying a single
                resident. As of{" "}
                <strong className="text-white">February 18, 2026</strong>, the
                FCC has no record that construction has been completed.
              </p>
              <p className="text-danger-300/80 text-sm leading-relaxed">
                They had federal approval in their pocket for a year, waiting
                for the right moment to start building. No community meeting, no
                public notice, no local review. By the time residents noticed a
                184-foot monopole going up in their neighborhood,{" "}
                <strong className="text-danger-200">
                  it was already too late to stop it
                </strong>
                . That&apos;s not oversight. That&apos;s strategy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═════════════ KNOW YOUR ENEMY + FOIL ═════════════ */}
      <section className="py-12 md:py-20 px-4 bg-dark-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Phoenix Tower International */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="bg-dark-900/60 border border-amber-800/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-900/40 border border-amber-800/30 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Know Who&apos;s Building This
                  </h3>
                  <p className="text-xs text-dark-400">The company behind the tower</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-bold text-amber-400">
                    Phoenix Tower International
                  </p>
                  <p className="text-xs text-dark-400">
                    Global wireless infrastructure company
                  </p>
                </div>
                <div className="flex items-start gap-2 text-sm text-dark-300">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-dark-500" />
                  <span>999 Yamato Rd, Suite 100<br />Boca Raton, FL 33431</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://maps.app.goo.gl/qJDn93bEtMx3yJFi8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-amber-900/30 border border-amber-800/30 rounded-lg text-xs font-semibold text-amber-300 hover:bg-amber-900/50 transition-all"
                  >
                    <MapPin className="w-3 h-3" />
                    View on Maps
                  </a>
                  <a
                    href="https://www.phoenixintnl.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-xs font-semibold text-dark-300 hover:text-white transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Website
                  </a>
                </div>
              </div>
            </motion.div>

            {/* FOIL Request */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-dark-900/60 border border-sky-800/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-900/40 border border-sky-800/30 flex items-center justify-center">
                  <FileSearch className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    File a FOIL Request
                  </h3>
                  <p className="text-xs text-dark-400">Demand the records they don&apos;t want you to see</p>
                </div>
              </div>

              <p className="text-sm text-dark-300 leading-relaxed mb-4">
                Under New York&apos;s{" "}
                <strong className="text-white">Freedom of Information Law (FOIL)</strong>,
                you have the right to request all documents related to this
                tower from the NYS Thruway Authority — lease agreements,
                environmental waivers, correspondence, and approvals.
              </p>

              <div className="space-y-2 mb-4">
                <a
                  href="mailto:thruwayfoil@thruway.ny.gov"
                  className="flex items-center gap-2 text-sm text-dark-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  thruwayfoil@thruway.ny.gov
                </a>
                <div className="flex items-start gap-2 text-sm text-dark-400">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-dark-500" />
                  <span className="text-xs">
                    Records Access Officer<br />
                    NYS Thruway Authority<br />
                    200 Southern Blvd, Albany, NY 12209
                  </span>
                </div>
              </div>

              <div className="bg-sky-950/30 border border-sky-800/20 rounded-xl p-3">
                <p className="text-xs text-sky-300 font-semibold mb-1">Ask for:</p>
                <ul className="text-xs text-dark-300 space-y-1">
                  <li>• Tower lease agreement with Phoenix Tower International</li>
                  <li>• All environmental review documents (or waivers)</li>
                  <li>• Correspondence regarding public notification</li>
                  <li>• Structural and RF radiation assessment reports</li>
                  <li>• Any communications with defense contractors (e.g. Lockheed Martin, L3Harris) regarding the tower site</li>
                </ul>
              </div>
            </motion.div>
          </div>
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
              Help the{" "}
              <span className="text-danger-500">Cause</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              This fight takes more than signatures. Here&apos;s how you
              can make a real difference.
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
                icon: "📢",
                title: "Share this site",
                desc: "Send protectliverpoolny.org to every neighbor, parent, and community group you know. Awareness is the first step.",
              },
              {
                icon: "🏛️",
                title: "Attend the next Town Board meeting",
                desc: "Show up. Bring your neighbors. Numbers are the only thing elected officials respond to.",
              },
              {
                icon: "📝",
                title: "File a FOIL request",
                desc: "Request documents from the NYS Thruway Authority about the tower lease, environmental waivers, and all correspondence with Phoenix Tower International.",
              },
              {
                icon: "🗣️",
                title: "Tell your story",
                desc: "Are you a pilot? A parent at Long Branch Elementary? A resident who was never notified? Your story matters. Send it to us.",
              },
              {
                icon: "⚖️",
                title: "Support legal action",
                desc: "If you have legal expertise, connections to environmental law organizations, or resources to contribute to a potential challenge — reach out.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-dark-900/60 border border-dark-800/50 rounded-xl p-5"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
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
            <a
              href="mailto:takeaction@protectliverpoolny.org"
              className="inline-flex items-center gap-2 px-6 py-3 bg-danger-600 hover:bg-danger-500 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40 hover:shadow-danger-800/60 hover:scale-[1.03]"
            >
              <Mail className="w-4 h-4" />
              takeaction@protectliverpoolny.org
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ FINAL REMINDER ═══════════════════ */}
      <section className="py-12 md:py-20 px-4">
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
              &ldquo;You let one ant stand up to us, then they{" "}
              <span className="text-danger-400 not-italic font-black">all</span>{" "}
              might stand up&hellip; those puny little ants outnumber us a hundred
              to one. And if they ever figure that out, there goes our way of
              life.&rdquo;
            </p>
            <p className="text-sm text-dark-500 mb-8">
              &mdash; Hopper, explaining exactly why Phoenix Tower International
              and the NYS Thruway Authority are hoping you won&apos;t read this page
            </p>

            <div className="relative w-full rounded-2xl overflow-hidden border border-dark-700/50 shadow-2xl shadow-black/40" style={{ aspectRatio: "16/9" }}>
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
              <span className="text-danger-400 font-bold">one tower.</span>{" "}
              Do the math.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer for mobile CTA */}
      <div className="h-16 md:hidden" />
    </>
  );
}
