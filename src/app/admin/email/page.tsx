"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Send,
  Shield,
  Users,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Mail,
  ChevronDown,
} from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/* ────────────────── Email preview template (matches API route) ────────────────── */
function previewHtml(subject: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <p style="font-size:22px;font-weight:800;margin:0;letter-spacing:-0.5px;">
        <span style="color:#ffffff;">PROTECT</span><span style="color:#ef4444;">LIVERPOOL</span>
      </p>
    </div>
    <div style="background-color:#141420;border:1px solid #1e1e2e;border-radius:16px;padding:32px 24px;margin-bottom:24px;">
      <h1 style="color:#ffffff;font-size:20px;font-weight:800;margin:0 0 16px;">${subject}</h1>
      <div style="color:#d1d5db;font-size:14px;line-height:1.7;">
        ${bodyHtml.replace(/\{firstName\}/g, "Daniel")}
      </div>
      <div style="text-align:center;margin-top:24px;">
        <a href="#" style="display:inline-block;background-color:#dc2626;color:#ffffff;font-weight:700;font-size:14px;padding:14px 32px;border-radius:10px;text-decoration:none;">
          View the Petition →
        </a>
      </div>
    </div>
    <div style="text-align:center;">
      <p style="color:#4b5563;font-size:11px;margin:0 0 8px;">ProtectLiverpoolNY.org — A grassroots community initiative.</p>
      <p style="color:#374151;font-size:10px;margin:0;">You received this because you signed the petition. To have your signature and data permanently removed, reply to this email.</p>
    </div>
  </div>
</body>
</html>`;
}

/* ────────────────── Convert plain text to HTML paragraphs ────────────────── */
function textToHtml(text: string): string {
  return text
    .split(/\n\n+/)
    .map((p) => `<p style="margin:0 0 16px;">${p.replace(/\n/g, "<br/>")}</p>`)
    .join("\n");
}

/* ═══════════════════════════════════════════════════════════════════ */

export default function AdminEmailPage() {
  // Auth
  const [secret, setSecret] = useState("");
  const [authed, setAuthed] = useState(false);

  // Audience
  const [audience, setAudience] = useState<"all" | "opted-in">("all");
  const [counts, setCounts] = useState<{ all: number; optedIn: number }>({
    all: 0,
    optedIn: 0,
  });

  // Compose
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  // Send
  const [confirming, setConfirming] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{
    sent: number;
    failed: number;
    total: number;
    errors?: string[];
  } | null>(null);
  const [sendError, setSendError] = useState("");

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Check for saved session
  useEffect(() => {
    const saved = sessionStorage.getItem("plny_admin_secret");
    if (saved) {
      setSecret(saved);
      setAuthed(true);
    }
  }, []);

  // Fetch audience counts
  const fetchCounts = useCallback(async () => {
    const { count: allCount } = await supabase
      .from("plny_signatures")
      .select("id", { count: "exact", head: true });

    const { count: optedInCount } = await supabase
      .from("plny_signatures")
      .select("id", { count: "exact", head: true })
      .eq("opt_in_contact", true);

    setCounts({
      all: allCount || 0,
      optedIn: optedInCount || 0,
    });
  }, []);

  useEffect(() => {
    if (authed) fetchCounts();
  }, [authed, fetchCounts]);

  const handleAuth = () => {
    sessionStorage.setItem("plny_admin_secret", secret);
    setAuthed(true);
  };

  // Update preview iframe
  useEffect(() => {
    if (showPreview && iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(previewHtml(subject || "Subject Preview", textToHtml(body || "Email body will appear here...")));
        doc.close();
      }
    }
  }, [showPreview, subject, body]);

  const handleSend = async () => {
    setSending(true);
    setSendError("");
    setResult(null);

    try {
      const res = await fetch("/api/admin/send-blast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          subject: subject.trim(),
          bodyHtml: textToHtml(body),
          audience,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSendError(data.error || "Failed to send");
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setSendError(err.message || "Network error");
    } finally {
      setSending(false);
      setConfirming(false);
    }
  };

  const recipientCount = audience === "all" ? counts.all : counts.optedIn;

  /* ── Auth Gate ── */
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-sm bg-dark-900/60 border border-dark-800/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-danger-900/50 border border-danger-800/30 flex items-center justify-center">
              <Lock className="w-5 h-5 text-danger-400" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Admin Access</h1>
              <p className="text-xs text-dark-400">
                Protect Liverpool NY — Email System
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth();
            }}
          >
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter admin secret"
              className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all mb-4"
              autoFocus
            />
            <button
              type="submit"
              disabled={!secret.trim()}
              className="w-full py-3 bg-danger-600 hover:bg-danger-500 disabled:bg-danger-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Main Composer ── */
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-danger-900/50 border border-danger-800/30 flex items-center justify-center">
            <Mail className="w-5 h-5 text-danger-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Email Composer</h1>
            <p className="text-sm text-dark-400">
              Send themed emails to petition signers
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* ── Audience ── */}
          <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-danger-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Audience
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                onClick={() => setAudience("all")}
                className={`p-4 rounded-xl border text-left transition-all ${
                  audience === "all"
                    ? "bg-danger-950/40 border-danger-700/50"
                    : "bg-dark-800/40 border-dark-700/40 hover:border-dark-600"
                }`}
              >
                <p
                  className={`text-sm font-bold mb-1 ${
                    audience === "all" ? "text-danger-400" : "text-dark-200"
                  }`}
                >
                  All Signers
                </p>
                <p className="text-xs text-dark-500">
                  Critical updates only — construction, legal, town hall votes
                </p>
                <p
                  className={`text-2xl font-black mt-2 ${
                    audience === "all" ? "text-white" : "text-dark-300"
                  }`}
                >
                  {counts.all}
                </p>
              </button>
              <button
                onClick={() => setAudience("opted-in")}
                className={`p-4 rounded-xl border text-left transition-all ${
                  audience === "opted-in"
                    ? "bg-danger-950/40 border-danger-700/50"
                    : "bg-dark-800/40 border-dark-700/40 hover:border-dark-600"
                }`}
              >
                <p
                  className={`text-sm font-bold mb-1 ${
                    audience === "opted-in" ? "text-danger-400" : "text-dark-200"
                  }`}
                >
                  Opted-In Only
                </p>
                <p className="text-xs text-dark-500">
                  General campaign updates and ways to get involved
                </p>
                <p
                  className={`text-2xl font-black mt-2 ${
                    audience === "opted-in" ? "text-white" : "text-dark-300"
                  }`}
                >
                  {counts.optedIn}
                </p>
              </button>
            </div>
          </div>

          {/* ── Compose ── */}
          <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Send className="w-4 h-4 text-danger-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Compose
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-300 mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Important: Update to your petition signature"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-300 mb-1.5">
                  Body{" "}
                  <span className="text-dark-500 font-normal">
                    (use {"{firstName}"} to personalize)
                  </span>
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={10}
                  placeholder={`Hi {firstName},\n\nWe recently updated the official demand and Privacy Notice of the Protect Liverpool NY petition...\n\nThank you for being one of the first to stand up for our community.\n\nBest,\nThe Protect Liverpool NY Team`}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all resize-y font-mono text-sm leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* ── Preview ── */}
          <div className="bg-dark-900/60 border border-dark-800/50 rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800/30 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-danger-400" />
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                  Email Preview
                </h2>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-dark-500 transition-transform duration-200 ${
                  showPreview ? "rotate-180" : ""
                }`}
              />
            </button>
            {showPreview && (
              <div className="px-6 pb-6">
                <div className="rounded-xl overflow-hidden border border-dark-700/50">
                  <iframe
                    ref={iframeRef}
                    title="Email Preview"
                    className="w-full bg-[#0a0a0f]"
                    style={{ height: "500px", border: "none" }}
                  />
                </div>
                <p className="text-[10px] text-dark-500 mt-2 text-center italic">
                  Preview shows &quot;Daniel&quot; as the sample name. Each
                  recipient will see their own first name.
                </p>
              </div>
            )}
          </div>

          {/* ── Send ── */}
          {result ? (
            <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-2xl p-6 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">
                Emails Sent Successfully
              </h3>
              <p className="text-emerald-200/80 text-sm">
                {result.sent} of {result.total} emails delivered
              </p>
              {result.failed > 0 && (
                <p className="text-danger-400 text-xs mt-2">
                  {result.failed} failed
                  {result.errors?.length
                    ? `: ${result.errors.join(", ")}`
                    : ""}
                </p>
              )}
              <button
                onClick={() => {
                  setResult(null);
                  setSubject("");
                  setBody("");
                }}
                className="mt-4 px-6 py-2 bg-white/5 border border-white/10 text-dark-200 hover:text-white hover:bg-white/10 font-bold rounded-xl transition-all text-sm"
              >
                Compose Another
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {sendError && (
                <div className="bg-danger-950/50 border border-danger-800/50 rounded-xl p-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-danger-400 flex-shrink-0" />
                  <p className="text-sm text-danger-300">{sendError}</p>
                </div>
              )}

              {!confirming ? (
                <button
                  onClick={() => setConfirming(true)}
                  disabled={
                    !subject.trim() || !body.trim() || recipientCount === 0
                  }
                  className="w-full flex items-center justify-center gap-2 py-4 bg-danger-600 hover:bg-danger-500 disabled:bg-danger-800 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/40"
                >
                  <Send className="w-5 h-5" />
                  Send to {recipientCount}{" "}
                  {recipientCount === 1 ? "recipient" : "recipients"}
                </button>
              ) : (
                <div className="bg-danger-950/50 border border-danger-700/50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-danger-400" />
                    <p className="text-white font-bold">Confirm Send</p>
                  </div>
                  <p className="text-dark-300 text-sm mb-4">
                    You are about to send{" "}
                    <strong className="text-white">
                      &quot;{subject}&quot;
                    </strong>{" "}
                    to{" "}
                    <strong className="text-white">
                      {recipientCount}{" "}
                      {audience === "all"
                        ? "signers (ALL)"
                        : "opted-in signers"}
                    </strong>
                    . This cannot be undone.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setConfirming(false)}
                      disabled={sending}
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-dark-200 hover:text-white hover:bg-white/10 font-bold rounded-xl transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSend}
                      disabled={sending}
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-danger-600 hover:bg-danger-500 disabled:bg-danger-800 text-white font-bold rounded-xl transition-all"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Confirm & Send
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
