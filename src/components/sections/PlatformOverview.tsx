"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  {
    id: "omnichannel-ccaas",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    label: "Omnichannel Contact Center (CCaaS)",
    headline: "Voice, digital, IVR, ACD, and outbound dialers in one queue.",
    description:
      "Manage voice, chat, email, WhatsApp, SMS, social, and web interactions from a single workspace. Intelligent ACD routing, smart IVR, and automated outbound dialer campaigns ensure every customer connects seamlessly.",
    features: ["Smart IVR & ACD", "Outbound Campaigns", "Universal Queue", "SMS & WhatsApp Support"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 space-y-2 sm:space-y-2.5 w-full min-w-0">
        {[
          { ch: "📞 Voice / IVR", customer: "Meera Nair", wait: "0:45", status: "ACD Routed", color: "#0ea5e9" },
          { ch: "💬 Web Chat", customer: "Ravi Sharma", wait: "1:12", status: "Active Session", color: "#22c55e" },
          { ch: "📱 WhatsApp", customer: "Ankit Das", wait: "0:18", status: "Bot Handed-Off", color: "#25d366" },
          { ch: "📨 Outbound SMS", customer: "Campaign Lead #91", wait: "Dispatched", status: "Auto-Dialer", color: "#06b6d4" },
          { ch: "✉️ Email Ticket", customer: "Priya Pillai", wait: "2:30", status: "SLA Queued", color: "#8b5cf6" },
        ].map((item) => (
          <div key={item.customer} className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-white/5 last:border-0 min-w-0">
            <span className="text-xs sm:text-sm flex-shrink-0">{item.ch.split(" ")[0]}</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white/90 truncate">{item.customer}</div>
              <div className="text-[10px] text-white/40">{item.ch.substring(2)}</div>
            </div>
            <span className="text-[10px] sm:text-xs text-white/40 flex-shrink-0">{item.wait}</span>
            <span
              className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
              style={{ background: `${item.color}20`, color: item.color }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "ai-assistants",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "AI Voice & Chat Assistants",
    headline: "Automate routine queries across 70+ languages.",
    description:
      "Deploy multilingual conversational AI across voice and digital channels. AI bots handle routine inquiries, extract intent and entities, and hand off to human agents with full context intact.",
    features: ["70+ Languages & 12 Indic", "Voice Bots & IVR", "Intent Extraction", "Zero-Loss Context Handoff"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 space-y-2 sm:space-y-2.5 w-full min-w-0">
        <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
          <span>Multilingual Voice / Chat Bot</span>
          <span className="text-green-400">Indic &amp; Global AI</span>
        </div>
        {[
          { role: "user", text: "What's my loan status and next payment date?" },
          { role: "bot", text: "Verified Rajesh Kumar. Your loan REF-2847 is active. Next EMI of ₹14,200 is due on 5th September." },
          { role: "user", text: "Can you send the statement on WhatsApp?" },
          { role: "bot", text: "Dispatched to your registered WhatsApp number ending in *4321. Anything else?" },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2 min-w-0 ${msg.role === "bot" ? "flex-row-reverse" : ""}`}>
            <div
              className={`text-[11px] sm:text-xs px-3 py-1.5 rounded-lg max-w-[85%] break-words ${
                msg.role === "bot"
                  ? "bg-accent/20 text-accent-light border border-accent/25"
                  : "bg-navy-800 text-white/80"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "agent-assist",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    label: "Real-Time Agent Assist & Hub",
    headline: "Live suggested responses, next-best actions, and instant summaries.",
    description:
      "Agents receive real-time GenAI suggestions, next-best action guidance, instant knowledge retrieval, and automated call summarization — drastically cutting average handle time.",
    features: ["Suggested Responses", "Next-Best Action", "Live Call Summaries", "Instant Knowledge Search"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 space-y-2 sm:space-y-2.5 w-full min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
          GenAI Agent Assist Panel
        </div>
        {[
          { type: "GenAI Response", text: "Offer prepayment waiver under Platinum Privilege tier", color: "#0ea5e9" },
          { type: "Next-Best Action", text: "Trigger automated SMS/WhatsApp milestone enrollment workflow", color: "#22c55e" },
          { type: "Knowledge Base", text: "Article #KM-2047: Loan settlement protocol & timeline", color: "#8b5cf6" },
        ].map((item) => (
          <div
            key={item.type}
            className="p-2 sm:p-2.5 rounded-lg border min-w-0"
            style={{ background: `${item.color}10`, borderColor: `${item.color}30` }}
          >
            <div className="text-[9px] sm:text-[10px] font-semibold mb-0.5" style={{ color: item.color }}>
              {item.type}
            </div>
            <div className="text-[10px] sm:text-xs text-white/70 leading-snug break-words">{item.text}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "customer360",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "Customer 360 & CRM",
    headline: "Every customer detail, relationship history, and case in one view.",
    description:
      "Agents see the complete customer profile — CRM data, cross-channel timeline, open tickets, sentiment history, and product holdings — without ever switching between software tools.",
    features: ["Unified Customer Profile", "Omnichannel Timeline", "CRM Holdings Data", "Open Cases & SLAs"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 w-full min-w-0">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 pb-2 border-b border-white/10 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent/60 to-accent-dark flex items-center justify-center text-white font-bold flex-shrink-0 text-xs sm:text-sm">
            S
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-semibold text-white truncate">Sanjay Mehta</div>
            <div className="text-[10px] text-white/40 truncate">Home Loan Platinum · Premium Lead</div>
          </div>
          <div className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold bg-green-400/20 text-green-400 flex-shrink-0">
            Positive (4.8 CSAT)
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
          {[
            { label: "Interactions", value: "47" },
            { label: "Open Tickets", value: "1" },
            { label: "Relationship", value: "4 Yrs" },
          ].map((s) => (
            <div key={s.label} className="bg-navy-800/80 rounded-lg p-1.5 sm:p-2 min-w-0">
              <div className="text-xs sm:text-base font-bold text-white leading-tight">{s.value}</div>
              <div className="text-[8px] sm:text-[10px] text-white/40 truncate">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "sentiment-social",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Sentiment Intelligence & Social Listening",
    headline: "Acoustic and linguistic emotion analysis with 85% accuracy.",
    description:
      "Aethrion CX analyzes emotion across voice calls and text streams in real time. Detect escalation risks early, monitor brand mentions with AI Social Listening, and coach agents before issues escalate.",
    features: ["85% Accuracy", "Acoustic Voice Stress", "AI Social Listening", "Escalation Triggers"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 w-full min-w-0">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Live Emotion Waveform &amp; Social Alerts
          </span>
          <span className="text-[10px] text-green-400 font-semibold">85% Accuracy</span>
        </div>
        <svg viewBox="0 0 240 70" className="w-full h-12 sm:h-14 mb-2.5">
          <defs>
            <linearGradient id="sentGradOverview" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 50 L30 38 L60 42 L90 28 L120 22 L150 32 L180 15 L210 20 L240 10 L240 70 L0 70" fill="url(#sentGradOverview)" />
          <path d="M0 50 L30 38 L60 42 L90 28 L120 22 L150 32 L180 15 L210 20 L240 10" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="flex gap-1.5 sm:gap-3">
          {[
            { label: "Positive", v: 62, c: "#22c55e" },
            { label: "Neutral", v: 23, c: "#f59e0b" },
            { label: "Negative", v: 15, c: "#ef4444" },
          ].map((d) => (
            <div key={d.label} className="flex-1 text-center bg-navy-800/60 p-1.5 sm:p-2 rounded-lg min-w-0">
              <div className="text-xs sm:text-base font-bold" style={{ color: d.c }}>{d.v}%</div>
              <div className="text-[8px] sm:text-[10px] text-white/50 truncate">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "quality-helpdesk",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: "Quality Management & Support Helpdesk",
    headline: "Automated QA, call recording, and SLA-driven ticketing.",
    description:
      "Automatically evaluate 100% of customer interactions against compliance frameworks. Score calls, record audio streams, manage support tickets, and track SLA adherence across distributed agent teams.",
    features: ["Automated QA Scoring", "SLA Adherence Management", "Call Recording & Archival", "Compliance Alerting"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 w-full min-w-0">
        <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2 sm:mb-3">
          <span>Automated QA &amp; Helpdesk SLAs</span>
          <span className="text-accent font-mono">100% Audited</span>
        </div>
        {[
          { label: "Greeting & Compliance Protocol", score: 94 },
          { label: "SLA Response & Resolution Target", score: 98 },
          { label: "Empathy, Tone & Sentiment Index", score: 89 },
          { label: "Ticketing & Wrap-Up Accuracy", score: 95 },
        ].map((item) => (
          <div key={item.label} className="mb-2 sm:mb-2.5 last:mb-0">
            <div className="flex justify-between text-[10px] sm:text-xs mb-1">
              <span className="text-white/60">{item.label}</span>
              <span className="font-semibold text-white/90">{item.score}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "analytics-workflow",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    label: "Analytics & Workflow Orchestration",
    headline: "Predictive CSAT, workforce optimization, and visual workflow builders.",
    description:
      "Gain operational clarity with real-time KPI dashboards, predictive CSAT scoring, and workforce capacity insights. Connect interactions directly to backend APIs with visual workflow builders.",
    features: ["Real-Time Operations Dashboards", "Predictive CSAT Models", "Workforce Optimization", "Visual Workflow Engine"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 w-full min-w-0 space-y-2">
        <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
          <span>Operations &amp; Workflow Intelligence</span>
          <span className="text-green-400">Live KPIs</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-navy-950/60 p-2.5 rounded-lg border border-white/5">
            <div className="text-[10px] text-white/40 mb-0.5">Predictive CSAT</div>
            <div className="text-base font-bold text-white">4.82 <span className="text-green-400 text-xs font-normal">↑ 0.3</span></div>
          </div>
          <div className="bg-navy-950/60 p-2.5 rounded-lg border border-white/5">
            <div className="text-[10px] text-white/40 mb-0.5">First-Contact Resolution</div>
            <div className="text-base font-bold text-white">78.4% <span className="text-green-400 text-xs font-normal">↑ 5.1%</span></div>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-[10px] text-accent font-medium">
          Workflow Status: Auto-dispatched 1,420 statement deliveries via WhatsApp &amp; SMS
        </div>
      </div>
    ),
  },
];

export default function PlatformOverview() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <section id="platform" className="section-padding bg-white overflow-hidden w-full" aria-label="Platform capabilities overview">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel>Platform</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-3 sm:mb-4 break-words">
              One Platform. Every Customer Interaction.
            </h2>
            <p className="body-large break-words">
              Aethrion CX brings together CCaaS communications, conversational AI, Customer 360 context, automated QA, and predictive analytics into one unified architecture.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile / Tablet Horizontal Scroll Tab Bar (<lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 snap-x w-full max-w-full min-w-0">
          {capabilities.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 snap-start ${
                active === i
                  ? "bg-navy-900 border-navy-700 text-white shadow-sm"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs ${active === i ? "bg-accent text-white" : "bg-white text-slate-600"}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start w-full min-w-0">
          {/* Desktop Capability list (>=lg) */}
          <div className="hidden lg:block lg:col-span-2 space-y-2 min-w-0">
            {capabilities.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-start gap-3.5 p-3.5 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? "bg-navy-900 border-navy-700 shadow-accent-glow"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    active === i ? "bg-accent text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className={`text-sm font-semibold mb-0.5 truncate ${
                      active === i ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </div>
                  <div
                    className={`text-xs leading-snug truncate ${
                      active === i ? "text-white/60" : "text-slate-400"
                    }`}
                  >
                    {item.headline}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3 w-full min-w-0">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 h-full w-full min-w-0 overflow-hidden">
              <div className="mb-4 sm:mb-6 min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-accent truncate">
                    {cap.label}
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3 break-words">{cap.headline}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 break-words">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cap.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs font-medium text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              {cap.preview}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
