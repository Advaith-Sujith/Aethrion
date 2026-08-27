"use client";

import React, { useState, useEffect } from "react";

interface ContactModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultMode?: "demo" | "talk";
}

export function openContactModal(mode: "demo" | "talk" = "demo") {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-contact-modal", { detail: { mode } }));
  }
}

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"demo" | "talk">("demo");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "BFSI",
    message: "",
  });

  const emailAddress = "rani@athenaserv.com";

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ mode?: "demo" | "talk" }>;
      if (customEvent.detail?.mode) {
        setMode(customEvent.detail.mode);
      }
      setSubmitted(false);
      setCopied(false);
      setIsOpen(true);
    };

    window.addEventListener("open-contact-modal", handleOpen);
    return () => window.removeEventListener("open-contact-modal", handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSubject = () => {
    return mode === "demo"
      ? `Aethrion CX — Demo Request (${formData.company || "Enterprise"})`
      : `Aethrion CX — Inquiry from ${formData.name || "Client"}`;
  };

  const getBody = () => {
    return `Hello Rani,\n\nI would like to ${
      mode === "demo" ? "schedule a demo of Aethrion CX" : "connect with the AthenaServ Infotech team"
    }.\n\nDetails:\n- Name: ${formData.name || "N/A"}\n- Work Email: ${formData.email || "N/A"}\n- Company: ${
      formData.company || "N/A"
    }\n- Phone: ${formData.phone || "N/A"}\n- Industry: ${formData.industry}\n- Message: ${
      formData.message || (mode === "demo" ? "Interested in platform capabilities and tailored demo." : "General inquiry.")
    }\n\nBest regards,\n${formData.name || "Customer"}`;
  };

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    
    // Attempt opening mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const openGmail = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const openOutlook = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBody());
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}&subject=${subject}&body=${body}`;
    window.open(outlookUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-navy-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-navy-950/80">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-white leading-tight">
                {mode === "demo" ? "Request a Tailored Demo" : "Connect with AthenaServ Infotech"}
              </h3>
              <p className="text-xs text-white/50">
                Direct Contact: <span className="text-accent font-medium">{emailAddress}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <h4 className="text-xl font-bold text-white">Email Dispatch Initiated</h4>
              <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Your request details have been prepared for <strong className="text-accent">{emailAddress}</strong>.
              </p>

              <div className="p-4 bg-navy-950/80 rounded-xl border border-white/10 text-left space-y-2 max-w-md mx-auto">
                <div className="text-xs font-semibold text-white/50 uppercase tracking-wider">Quick Actions</div>
                <div className="flex items-center justify-between gap-2 p-2 bg-navy-900 rounded-lg border border-white/5">
                  <span className="text-xs text-white/80 font-mono truncate">{emailAddress}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1 text-xs font-medium bg-accent text-white rounded hover:bg-accent-dark transition-colors flex-shrink-0"
                  >
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={openGmail}
                    className="px-3 py-2 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors text-center"
                  >
                    Open in Gmail
                  </button>
                  <button
                    onClick={openOutlook}
                    className="px-3 py-2 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors text-center"
                  >
                    Open in Outlook
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Main Form & Email Hub */
            <>
              {/* Direct email quick bar */}
              <div className="bg-navy-950/80 border border-white/10 rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="text-xs">
                    <span className="text-white/50 block sm:inline">Direct Recipient: </span>
                    <span className="text-white font-semibold font-mono">{emailAddress}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <span className="text-green-400">✓</span> Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.849A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.599m7.332 0c.055.194.084.4.084.611v2.25m-7.332 0c-.055.194-.084.4-.084.611v2.25m0 0a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25m-7.332 0H5.25A2.25 2.25 0 003 9v11.25A2.25 2.25 0 005.25 22.5h13.5A2.25 2.25 0 0021 20.25V9a2.25 2.25 0 00-2.25-2.25h-2.416" />
                        </svg>
                        Copy Email
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={openGmail}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors"
                    title="Compose directly in Gmail"
                  >
                    Gmail
                  </button>
                  <button
                    type="button"
                    onClick={openOutlook}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors"
                    title="Compose directly in Outlook"
                  >
                    Outlook
                  </button>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">
                      Work Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">
                      Company / Organization <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">
                      Industry Focus
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    >
                      <option value="BFSI" className="bg-navy-900 text-white">BFSI (Banking / Insurance)</option>
                      <option value="Ecommerce & Retail" className="bg-navy-900 text-white">Ecommerce & Retail</option>
                      <option value="BPO / Contact Centers" className="bg-navy-900 text-white">BPO / Contact Centers</option>
                      <option value="Healthcare" className="bg-navy-900 text-white">Healthcare</option>
                      <option value="Telecom" className="bg-navy-900 text-white">Telecom</option>
                      <option value="Logistics" className="bg-navy-900 text-white">Logistics</option>
                      <option value="Government" className="bg-navy-900 text-white">Government & Public Sector</option>
                      <option value="Other" className="bg-navy-900 text-white">Other Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5">
                    Phone / Mobile (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5">
                    Project Requirements or Query
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your contact center volume, channels needed, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-accent-glow flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send to rani@athenaserv.com
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleCopyEmail();
                      setSubmitted(true);
                    }}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl border border-white/15 hover:bg-white/5 text-white/70 hover:text-white text-sm font-medium transition-colors text-center"
                  >
                    Copy Recipient Email
                  </button>
                </div>

                <p className="text-[11px] text-white/40 text-center">
                  Submitting generates a pre-addressed email to <span className="text-white/60 font-mono">{emailAddress}</span>. AthenaServ Infotech will respond within 1 business day.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
