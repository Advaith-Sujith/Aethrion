"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  {
    id: "omnichannel",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    label: "Omnichannel Contact Center",
    headline: "Every channel. One unified queue.",
    description:
      "Manage voice, chat, email, WhatsApp, and social interactions from a single workspace. Intelligent routing ensures every customer reaches the right agent with full context.",
    features: ["Unified agent desktop", "Intelligent routing", "Cross-channel context", "Queue management"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 space-y-2.5 sm:space-y-3">
        {[
          { ch: "📞 Voice", customer: "Meera Nair", wait: "0:45", status: "active", color: "#0ea5e9" },
          { ch: "💬 Chat", customer: "Ravi Sharma", wait: "1:12", status: "active", color: "#22c55e" },
          { ch: "✉️ Email", customer: "Priya Pillai", wait: "2:30", status: "waiting", color: "#8b5cf6" },
          { ch: "📱 WhatsApp", customer: "Ankit Das", wait: "0:18", status: "active", color: "#25d366" },
        ].map((item) => (
          <div key={item.customer} className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2 border-b border-white/5 last:border-0">
            <span className="text-xs sm:text-sm flex-shrink-0">{item.ch.split(" ")[0]}</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white/90 truncate">{item.customer}</div>
              <div className="text-[10px] text-white/40">{item.ch.split(" ")[1]}</div>
            </div>
            <span className="text-[11px] sm:text-xs text-white/40">{item.wait}</span>
            <span
              className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium"
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
    headline: "Automate routine queries. Escalate with context.",
    description:
      "Deploy multilingual conversational AI across voice and digital channels. Bots handle routine interactions, then hand off to agents with full conversation context intact.",
    features: ["70+ languages", "Voice + text bots", "Context handoff", "Intent detection"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 space-y-2.5 sm:space-y-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
          AI Bot Conversation
        </div>
        {[
          { role: "user", text: "What's my account balance?" },
          { role: "bot", text: "I can help with that. Please verify your account number." },
          { role: "user", text: "Account ending 4521" },
          { role: "bot", text: "Your current balance is ₹42,350. Anything else I can help with?" },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === "bot" ? "flex-row-reverse" : ""}`}>
            <div
              className={`text-[11px] sm:text-xs px-3 py-1.5 rounded-lg max-w-[85%] ${
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
    id: "sentiment",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Sentiment Analytics",
    headline: "Know what customers feel. In real time.",
    description:
      "Aethrion CX analyzes emotion and tone across every voice and text interaction. Detect escalation risks early, coach agents proactively, and improve experience outcomes.",
    features: ["85% accuracy", "Voice + text", "Real-time alerts", "Trend analytics"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
            Sentiment Timeline
          </span>
          <span className="text-[10px] text-accent font-semibold">Live</span>
        </div>
        <svg viewBox="0 0 240 80" className="w-full h-14 sm:h-16 mb-3">
          <defs>
            <linearGradient id="sentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 L30 45 L60 50 L90 35 L120 30 L150 40 L180 20 L210 25 L240 15"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 60 L30 45 L60 50 L90 35 L120 30 L150 40 L180 20 L210 25 L240 15 L240 80 L0 80"
            fill="url(#sentGrad)"
          />
        </svg>
        <div className="flex gap-2 sm:gap-3">
          {[
            { label: "Positive", v: 62, c: "#22c55e" },
            { label: "Neutral", v: 23, c: "#f59e0b" },
            { label: "Negative", v: 15, c: "#ef4444" },
          ].map((d) => (
            <div key={d.label} className="flex-1 text-center bg-navy-800/60 p-1.5 sm:p-2 rounded-lg">
              <div className="text-sm sm:text-base font-bold" style={{ color: d.c }}>{d.v}%</div>
              <div className="text-[9px] sm:text-[10px] text-white/50">{d.label}</div>
            </div>
          ))}
        </div>
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
    label: "Real-Time Agent Assist",
    headline: "AI-suggested actions, live during every conversation.",
    description:
      "Agents receive real-time suggested responses, next-best actions, knowledge recommendations, and conversation summaries — reducing handle time and improving resolution quality.",
    features: ["Response suggestions", "Next-best action", "KB search", "Conversation summary"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10 space-y-2 sm:space-y-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
          AI Assist Panel
        </div>
        {[
          { type: "Suggestion", text: "Offer account statement via email — reduces repeat contact", color: "#0ea5e9" },
          { type: "Knowledge", text: "Policy #KM-2047: Loan prepayment terms and conditions", color: "#8b5cf6" },
          { type: "Action", text: "Trigger status notification enrollment workflow", color: "#22c55e" },
        ].map((item) => (
          <div
            key={item.type}
            className="p-2.5 sm:p-3 rounded-lg border"
            style={{ background: `${item.color}10`, borderColor: `${item.color}30` }}
          >
            <div className="text-[10px] font-semibold mb-0.5" style={{ color: item.color }}>
              {item.type}
            </div>
            <div className="text-[11px] sm:text-xs text-white/70 leading-snug">{item.text}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "quality",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: "Quality Management",
    headline: "Automated QA. Consistent quality at scale.",
    description:
      "Automatically evaluate interactions against quality frameworks. Score calls, flag compliance issues, identify coaching opportunities, and track quality trends across teams.",
    features: ["Auto scoring", "Compliance alerts", "Call audit trails", "Coach opportunities"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2 sm:mb-3">
          QA Scorecard
        </div>
        {[
          { label: "Greeting & Compliance", score: 92 },
          { label: "Empathy & Tone", score: 88 },
          { label: "Problem Resolution", score: 95 },
          { label: "Closure Protocol", score: 79 },
        ].map((item) => (
          <div key={item.label} className="mb-2 sm:mb-3 last:mb-0">
            <div className="flex justify-between text-[11px] sm:text-xs mb-1">
              <span className="text-white/60">{item.label}</span>
              <span className="font-semibold text-white/90">{item.score}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full">
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
    id: "customer360",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "Customer 360",
    headline: "Every customer. Complete context. One view.",
    description:
      "Agents see the complete customer picture — CRM data, interaction history, channel preferences, open cases, and sentiment trends — without switching between systems.",
    features: ["Unified profile", "Interaction history", "Channel timeline", "Case visibility"],
    preview: (
      <div className="bg-navy-900 rounded-xl p-3 sm:p-4 border border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 pb-2.5 border-b border-white/10">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent/60 to-accent-dark flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
            S
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs sm:text-sm font-semibold text-white truncate">Sanjay Mehta</div>
            <div className="text-[10px] text-white/40 truncate">Premium · Since Jan 2022</div>
          </div>
          <div className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold bg-green-400/20 text-green-400">
            Positive
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Interactions", value: "47" },
            { label: "Open Cases", value: "1" },
            { label: "CSAT", value: "4.8" },
          ].map((s) => (
            <div key={s.label} className="bg-navy-800/80 rounded-lg p-2">
              <div className="text-sm sm:text-base font-bold text-white">{s.value}</div>
              <div className="text-[9px] sm:text-[10px] text-white/40">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function PlatformOverview() {
  const [active, setActive] = useState(0);
  const cap = capabilities[active];

  return (
    <section id="platform" className="section-padding bg-white" aria-label="Platform capabilities overview">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel>Platform</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-3 sm:mb-4">
              One Platform. Every Customer Interaction.
            </h2>
            <p className="body-large">
              Aethrion CX combines omnichannel communications, AI automation, analytics, and
              customer data into one unified workspace.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile / Tablet Horizontal Scroll Tab Bar (<lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 snap-x">
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

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Desktop Capability list (>=lg) */}
          <div className="hidden lg:block lg:col-span-2 space-y-2">
            {capabilities.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? "bg-navy-900 border-navy-700 shadow-accent-glow"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    active === i ? "bg-accent text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-sm font-semibold mb-0.5 ${
                      active === i ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </div>
                  <div
                    className={`text-xs leading-snug ${
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
          <div className="lg:col-span-3 w-full">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6 lg:p-8 h-full">
              <div className="mb-5 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                    {cap.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-accent">
                    {cap.label}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3">{cap.headline}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{cap.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cap.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[11px] sm:text-xs font-medium text-slate-700"
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
