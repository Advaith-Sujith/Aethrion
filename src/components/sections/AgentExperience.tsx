"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

function CustomerContextPanel() {
  return (
    <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4 min-w-0">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
        Customer Context &amp; CRM 360
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 pb-3 border-b border-white/10 min-w-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/60 to-accent-dark flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          P
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold text-white truncate">Priya Sharma</div>
          <div className="text-[10px] text-white/50 truncate">Platinum Tier · #ACC-9214 · 4.8 CSAT</div>
        </div>
      </div>

      {/* Sentiment indicator */}
      <div className="p-2.5 sm:p-3 rounded-xl bg-green-400/10 border border-green-400/20 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-semibold text-green-400">REAL-TIME SENTIMENT</span>
          <span className="text-xs font-black text-green-400">78% (Positive)</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[78%] bg-green-400 rounded-full" />
        </div>
      </div>

      {/* Quick facts */}
      <div className="space-y-2 bg-navy-950/40 p-3 rounded-xl border border-white/5 min-w-0">
        {[
          { k: "Last Contact", v: "3 days ago (WhatsApp)" },
          { k: "Open Support Case", v: "#TK-841 (SLA 4h)" },
          { k: "Total Interactions", v: "23 across 4 channels" },
          { k: "Preferred Channel", v: "WhatsApp / Phone" },
        ].map((r) => (
          <div key={r.k} className="flex justify-between items-center text-xs gap-2 min-w-0">
            <span className="text-white/40 truncate text-[11px] sm:text-xs">{r.k}</span>
            <span className="font-semibold text-white/80 text-right truncate text-[11px] sm:text-xs">{r.v}</span>
          </div>
        ))}
      </div>

      {/* Conversation summary */}
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
          AI Context Summary
        </div>
        <div className="bg-navy-800/80 rounded-xl p-2.5 sm:p-3 border border-white/5 min-w-0">
          <p className="text-xs text-white/70 leading-relaxed break-words">
            Customer following up on reward points redemption. Previous interaction noted app sync issue. High lifetime value customer.
          </p>
        </div>
      </div>
    </div>
  );
}

function ActiveChatPanel() {
  return (
    <div className="flex flex-col h-full justify-between min-w-0">
      <div className="p-3.5 sm:p-5 overflow-hidden min-w-0">
        <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/10 min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 truncate">
            Active Conversation · WhatsApp / Omnichannel
          </div>
          <span className="text-[10px] text-green-400 font-medium flex-shrink-0">● Connected (02:18)</span>
        </div>

        <div className="space-y-2.5 sm:space-y-3 min-w-0">
          <div className="flex gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-0.5">
              P
            </div>
            <div className="bg-navy-800 rounded-xl rounded-tl-none px-3 py-2 sm:px-3.5 sm:py-2.5 max-w-[85%] border border-white/5 min-w-0">
              <p className="text-xs text-white/90 leading-relaxed break-words">
                I want to redeem my reward points but the mobile app gives me an error.
              </p>
              <span className="text-[9px] text-white/30 mt-0.5 block">11:02 AM</span>
            </div>
          </div>

          <div className="flex gap-2 flex-row-reverse min-w-0">
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-0.5">
              A
            </div>
            <div className="bg-accent/20 border border-accent/30 rounded-xl rounded-tr-none px-3 py-2 sm:px-3.5 sm:py-2.5 max-w-[85%] min-w-0">
              <p className="text-xs text-white/90 leading-relaxed break-words">
                Hello Priya, I can see your account has 12,400 points active. Let me verify the system status and assist you immediately.
              </p>
              <span className="text-[9px] text-accent/70 mt-0.5 block">Agent Assist · 11:03 AM</span>
            </div>
          </div>

          <div className="flex gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-0.5">
              P
            </div>
            <div className="bg-navy-800 rounded-xl rounded-tl-none px-3 py-2 sm:px-3.5 sm:py-2.5 max-w-[85%] border border-white/5 min-w-0">
              <p className="text-xs text-white/90 leading-relaxed break-words">
                Thank you, I need this processed before the weekend promotion expires.
              </p>
              <span className="text-[9px] text-white/30 mt-0.5 block">11:04 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="p-3 sm:p-4 border-t border-white/10 bg-navy-950/60 min-w-0">
        <div className="bg-navy-800 rounded-xl px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center gap-2 border border-white/5 min-w-0">
          <span className="text-xs text-white/30 flex-1 truncate">Type a response or click GenAI Suggestion...</span>
          <button className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 text-white hover:bg-accent-dark transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function AIAssistPanel() {
  return (
    <div className="p-3.5 sm:p-5 space-y-3 min-w-0">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
        GenAI Agent Assist
      </div>

      {/* Suggested response */}
      <div className="bg-accent/10 border border-accent/25 rounded-xl p-3 sm:p-3.5 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold text-accent">Suggested Reply</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-accent/20 text-accent font-semibold">GenAI</span>
        </div>
        <p className="text-xs text-white/80 leading-relaxed break-words">
          &ldquo;I have initiated manual points validation. I will redeem the 12,400 points right now and dispatch SMS confirmation.&rdquo;
        </p>
        <button className="mt-2 text-xs font-semibold text-accent hover:text-accent-light flex items-center gap-1 transition-colors">
          Insert into Composer →
        </button>
      </div>

      {/* Knowledge Base */}
      <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-3 sm:p-3.5 min-w-0">
        <div className="text-[10px] font-bold text-violet-400 mb-1">Knowledge Article</div>
        <p className="text-xs text-white/70 leading-relaxed break-words">
          KB-4082: Troubleshooting Mobile Reward Redemption &amp; Instant Points Settlement Protocol
        </p>
      </div>

      {/* Next Best Action */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 sm:p-3.5 min-w-0">
        <div className="text-[10px] font-bold text-emerald-400 mb-1">Next Best Action</div>
        <p className="text-xs text-white/70 leading-relaxed break-words">
          Trigger one-click voucher generation workflow and enroll in automated WhatsApp status notification.
        </p>
      </div>
    </div>
  );
}

function AgentWorkspaceMockup() {
  const [mobileTab, setMobileTab] = useState<"chat" | "context" | "ai">("chat");

  return (
    <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl w-full min-w-0">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-white/10 bg-navy-950/80 min-w-0">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[11px] sm:text-xs text-white/40 font-medium truncate px-2">
          Aethrion CX — Agent Hub &amp; AI Assist Workspace
        </span>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[10px] text-green-400 font-medium">Online</span>
        </div>
      </div>

      {/* Mobile Tab Switcher (<lg) */}
      <div className="lg:hidden grid grid-cols-3 border-b border-white/10 bg-navy-950/60 p-1.5 gap-1 text-center w-full min-w-0">
        <button
          onClick={() => setMobileTab("chat")}
          className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
            mobileTab === "chat"
              ? "bg-accent text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          💬 Chat
        </button>
        <button
          onClick={() => setMobileTab("context")}
          className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
            mobileTab === "context"
              ? "bg-accent text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          👤 Context
        </button>
        <button
          onClick={() => setMobileTab("ai")}
          className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
            mobileTab === "ai"
              ? "bg-accent text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          ✨ AI Assist
        </button>
      </div>

      {/* Mobile Tabbed View (<lg) */}
      <div className="lg:hidden min-h-[380px] w-full min-w-0">
        {mobileTab === "chat" && <ActiveChatPanel />}
        {mobileTab === "context" && <CustomerContextPanel />}
        {mobileTab === "ai" && <AIAssistPanel />}
      </div>

      {/* Desktop 3-Pane View (>=lg) */}
      <div className="hidden lg:grid grid-cols-12 min-h-[460px] divide-x divide-white/10 w-full min-w-0">
        <div className="col-span-4 min-w-0">
          <CustomerContextPanel />
        </div>
        <div className="col-span-5 min-w-0">
          <ActiveChatPanel />
        </div>
        <div className="col-span-3 min-w-0">
          <AIAssistPanel />
        </div>
      </div>
    </div>
  );
}

export default function AgentExperience() {
  return (
    <section id="agent" className="section-padding bg-slate-50 overflow-hidden w-full" aria-label="Agent experience and AI assist workspace">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 text-center sm:text-left">
            <SectionLabel>Agent Hub</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-3 sm:mb-4 break-words">
              Give Agents Intelligence, Not More Tools.
            </h2>
            <p className="body-large break-words">
              The Aethrion CX Agent Hub consolidates omnichannel conversation streams, Customer 360 CRM history, real-time acoustic sentiment, GenAI suggested replies, and automated call summaries into a single pane of glass.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <AgentWorkspaceMockup />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 w-full min-w-0">
            {[
              { icon: "🧠", label: "GenAI Suggested Replies", desc: "Context-aware reply suggestions generated live during interactions." },
              { icon: "📖", label: "Instant Knowledge Retrieval", desc: "Relevant policy & KB articles surfaced automatically without manual search." },
              { icon: "🎯", label: "Next-Best Action Prompts", desc: "AI-guided workflow steps for faster, first-contact resolution." },
              { icon: "📋", label: "Automated Call Wrap-up", desc: "Complete conversation notes and CRM tags generated automatically." },
            ].map((f) => (
              <div key={f.label} className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:shadow-card-hover transition-all duration-200 min-w-0">
                <span className="text-xl mb-2 sm:mb-3 block">{f.icon}</span>
                <h4 className="text-xs sm:text-sm font-bold text-navy-900 mb-1 break-words">{f.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed break-words">{f.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
