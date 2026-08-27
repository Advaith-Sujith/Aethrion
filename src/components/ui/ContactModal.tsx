"use client";

import React, { useState, useEffect } from "react";

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(emailAddress);
    }
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
      mode === "demo" ? "schedule a personalized demo of Aethrion CX" : "connect with the AthenaServ Infotech team"
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-navy-900 border sm:border-white/15 border-t border-white/20 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] sm:max-h-[92vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-navy-950/90">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent flex-shrink-0">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h3 id="modal-title" className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                {mode === "demo" ? "Request a Tailored Demo" : "Connect with AthenaServ Infotech"}
              </h3>
              <p className="text-[10px] sm:text-xs text-white/50 truncate">
                Direct Contact: <span className="text-accent font-medium font-mono">{emailAddress}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-6 sm:py-8 px-2 sm:px-4 space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto text-xl sm:text-2xl">
                ✓
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">Inquiry Prepared</h4>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Your request details have been configured for <strong className="text-accent">{emailAddress}</strong>.
              </p>

              <div className="p-3.5 sm:p-4 bg-navy-950/80 rounded-xl border border-white/10 text-left space-y-2 max-w-md mx-auto">
                <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Recipient Address</div>
                <div className="flex items-center justify-between gap-2 p-2 bg-navy-900 rounded-lg border border-white/5">
                  <span className="text-xs text-white/80 font-mono truncate">{emailAddress}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 text-xs font-medium bg-accent text-white rounded hover:bg-accent-dark transition-colors flex-shrink-0"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={openGmail}
                    className="px-3 py-2 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors text-center"
                  >
                    Open Gmail Web
                  </button>
                  <button
                    onClick={openOutlook}
                    className="px-3 py-2 text-xs font-semibold bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors text-center"
                  >
                    Open Outlook Web
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-accent hover:bg-accent-dark text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Main Form & Email Hub */
            <>
              {/* Direct email quick bar */}
              <div className="bg-navy-950/80 border border-white/10 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2 text-left w-full sm:w-auto">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div className="text-[11px] sm:text-xs truncate">
                    <span className="text-white/50">Recipient: </span>
                    <span className="text-white font-semibold font-mono">{emailAddress}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-[11px] font-medium text-white transition-colors flex items-center justify-center gap-1 text-center"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                  <button
                    type="button"
                    onClick={openGmail}
                    className="px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-[11px] font-medium text-white transition-colors text-center"
                  >
                    Gmail
                  </button>
                  <button
                    type="button"
                    onClick={openOutlook}
                    className="px-2.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-[11px] font-medium text-white transition-colors text-center"
                  >
                    Outlook
                  </button>
                </div>
              </div>

              {/* Inquiry Form */}
              <form onSubmit={handleSendEmail} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-white/70 mb-1">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-white/70 mb-1">
                      Work Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-white/70 mb-1">
                      Company / Organization <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Enterprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-white/70 mb-1">
                      Industry Focus
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
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
                  <label className="block text-[11px] sm:text-xs font-semibold text-white/70 mb-1">
                    Phone / Mobile (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-white/70 mb-1">
                    Project Requirements or Query
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe channels needed, contact center seats, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-navy-950/80 border border-white/15 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-accent-glow flex items-center justify-center gap-2"
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
                    className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-white/15 hover:bg-white/5 text-white/70 hover:text-white text-xs sm:text-sm font-medium transition-colors text-center"
                  >
                    Copy Recipient Email
                  </button>
                </div>

                <p className="text-[10px] text-white/40 text-center">
                  Submitting generates a pre-addressed email to <span className="text-white/60 font-mono">{emailAddress}</span>. AthenaServ Infotech will respond promptly.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
