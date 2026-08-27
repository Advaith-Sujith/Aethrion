"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { openContactModal } from "@/components/ui/ContactModal";

const channels = [
  { label: "Voice", color: "#0ea5e9", icon: "📞" },
  { label: "Chat", color: "#22c55e", icon: "💬" },
  { label: "WhatsApp", color: "#25d366", icon: "📱" },
  { label: "Email", color: "#8b5cf6", icon: "✉️" },
  { label: "SMS", color: "#06b6d4", icon: "📨" },
  { label: "Social", color: "#f59e0b", icon: "🌐" },
];

const sentimentData = [
  { label: "Positive", value: 62, color: "#22c55e" },
  { label: "Neutral", value: 23, color: "#f59e0b" },
  { label: "Negative", value: 15, color: "#ef4444" },
];

function LiveIndicator() {
  return (
    <span className="flex items-center gap-1.5 flex-shrink-0">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-[10px] sm:text-xs font-medium text-green-400">Live</span>
    </span>
  );
}

function DashboardMockup() {
  const [activeInteraction, setActiveInteraction] = useState(0);
  const [sentiment, setSentiment] = useState(72);

  useEffect(() => {
    const interactionTimer = setInterval(() => {
      setActiveInteraction((prev) => (prev + 1) % channels.length);
    }, 2400);
    const sentimentTimer = setInterval(() => {
      setSentiment((prev) => {
        const delta = Math.random() * 6 - 3;
        return Math.min(95, Math.max(55, Math.round(prev + delta)));
      });
    }, 2000);
    return () => {
      clearInterval(interactionTimer);
      clearInterval(sentimentTimer);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
      {/* Main dashboard frame */}
      <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-white/10 bg-navy-950/80">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] sm:text-xs text-white/50 font-medium truncate px-2">
            Aethrion CX — CCaaS &amp; Agent Hub
          </span>
          <LiveIndicator />
        </div>

        {/* Mobile Horizontal Channel Selector (<sm) */}
        <div className="sm:hidden flex items-center gap-1.5 p-2 overflow-x-auto no-scrollbar border-b border-white/10 bg-navy-950/40">
          <span className="text-[9px] uppercase tracking-wider text-white/30 px-1 font-semibold flex-shrink-0">
            Channels:
          </span>
          {channels.map((ch, i) => (
            <button
              key={ch.label}
              onClick={() => setActiveInteraction(i)}
              className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] whitespace-nowrap transition-all flex-shrink-0 ${
                i === activeInteraction
                  ? "bg-accent/20 border border-accent/40 text-white font-medium"
                  : "bg-white/5 text-white/60 border border-transparent"
              }`}
            >
              <span>{ch.icon}</span>
              <span>{ch.label}</span>
            </button>
          ))}
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[320px] sm:h-[390px] lg:h-[420px]">
          {/* Desktop Sidebar (>=sm) */}
          <div className="hidden sm:block sm:col-span-4 lg:col-span-3 border-r border-white/10 p-3 space-y-1 bg-navy-950/30">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 px-2 py-1 mb-1">
              Active Channels
            </div>
            {channels.map((ch, i) => (
              <div
                key={ch.label}
                onClick={() => setActiveInteraction(i)}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all duration-200 ${
                  i === activeInteraction
                    ? "bg-accent/20 border border-accent/30 text-white"
                    : "hover:bg-white/5 text-white/60"
                }`}
              >
                <span className="text-xs">{ch.icon}</span>
                <span className="text-xs font-medium">{ch.label}</span>
                {i === activeInteraction && (
                  <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                )}
              </div>
            ))}

            <div className="pt-2.5 border-t border-white/10 mt-2.5">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 px-2 py-1 mb-1">
                Queue Status
              </div>
              {[
                { count: 8, label: "IVR / Bot", color: "text-accent" },
                { count: 14, label: "Live Agents", color: "text-green-400" },
                { count: 3, label: "Escalated", color: "text-red-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between px-2 py-0.5">
                  <span className="text-[11px] text-white/50">{item.label}</span>
                  <span className={`text-xs font-bold ${item.color}`}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversation & AI Assist Panel */}
          <div className="sm:col-span-8 lg:col-span-9 flex flex-col justify-between">
            {/* Active conversation */}
            <div className="p-3 sm:p-4 overflow-hidden">
              {/* Customer header */}
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 pb-2.5 border-b border-white/10">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-accent/70 to-accent-dark flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0">
                  R
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">Rajesh Kumar</div>
                  <div className="text-[10px] text-white/40 truncate">REF-2847 · Customer 360 Lead</div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div
                    className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold"
                    style={{
                      background: `${sentimentData[0].color}20`,
                      color: sentimentData[0].color,
                    }}
                  >
                    Positive {sentiment}%
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-2 sm:space-y-2.5 text-left">
                <div className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-600 flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">
                    R
                  </div>
                  <div className="bg-navy-800 rounded-xl rounded-tl-none px-2.5 sm:px-3 py-1.5 sm:py-2 max-w-[88%] sm:max-w-[80%] border border-white/5">
                    <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed">
                      I need to check the status of my loan application submitted last week.
                    </p>
                    <span className="text-[8px] sm:text-[9px] text-white/30 mt-0.5 block">10:42 AM</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-row-reverse">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-[9px] text-white flex-shrink-0 mt-0.5">
                    A
                  </div>
                  <div className="bg-accent/20 border border-accent/30 rounded-xl rounded-tr-none px-2.5 sm:px-3 py-1.5 sm:py-2 max-w-[88%] sm:max-w-[80%]">
                    <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed">
                      I can see your application REF-2847. Verification is complete. Estimated disbursement is 2 business days.
                    </p>
                    <span className="text-[8px] sm:text-[9px] text-accent/70 mt-0.5 block">Agent Assist · 10:43 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assist strip */}
            <div className="border-t border-white/10 p-2 sm:p-2.5 bg-accent/5">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-semibold text-accent mb-0.5">GenAI Assist &amp; Next-Best Action</div>
                  <p className="text-[10px] sm:text-[11px] text-white/70 leading-snug truncate sm:whitespace-normal">
                    Enroll customer in automated WhatsApp status notifications &amp; dispatch loan statement.
                  </p>
                </div>
              </div>
            </div>

            {/* Sentiment bar */}
            <div className="border-t border-white/10 px-3 sm:px-4 py-2 flex items-center gap-2.5 sm:gap-3 bg-navy-950/40">
              <span className="text-[9px] sm:text-[10px] text-white/40 font-medium shrink-0">Live Sentiment</span>
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 transition-all duration-700"
                  style={{ width: `${sentiment}%` }}
                />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-green-400 shrink-0">{sentiment}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating analytics card */}
      <div className="absolute right-2 top-6 hidden 2xl:block bg-white rounded-xl shadow-card-hover border border-slate-200 p-3.5 w-40 animate-fadeIn pointer-events-none">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-slate-500">CSAT Trend</span>
          <span className="text-[11px] font-bold text-green-600">↑ 4.2%</span>
        </div>
        {sentimentData.map((d) => (
          <div key={d.label} className="mb-1.5">
            <div className="flex justify-between text-[9px] mb-0.5">
              <span className="text-slate-500">{d.label}</span>
              <span className="font-semibold" style={{ color: d.color }}>
                {d.value}%
              </span>
            </div>
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${d.value}%`, backgroundColor: d.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen bg-navy-950 flex flex-col justify-center overflow-hidden w-full"
      aria-label="Hero — Aethrion CX platform introduction"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/4 left-1/4 w-60 sm:w-96 h-60 sm:h-96 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Text content */}
          <div
            className={`transition-all duration-1000 ease-out text-center lg:text-left min-w-0 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Label Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-normal sm:tracking-wide text-accent truncate">
                AI-Powered Customer Experience &amp; CCaaS Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[50px] font-extrabold text-white leading-[1.2] sm:leading-[1.12] tracking-tight mb-3 sm:mb-5 break-words">
              Turn Every Customer{" "}
              <span className="text-accent">Interaction</span>{" "}
              Into a Resolution.
            </h1>

            {/* Supporting copy — explicitly communicates CCaaS + Omnichannel + AI + Customer 360 + Automation + Analytics */}
            <p className="text-xs sm:text-base lg:text-lg text-white/70 leading-relaxed mb-4 sm:mb-6 max-w-xl mx-auto lg:mx-0 break-words">
              Aethrion CX combines <strong className="text-white font-semibold">CCaaS</strong>, omnichannel engagement, conversational <strong className="text-white font-semibold">AI</strong>, <strong className="text-white font-semibold">Customer 360</strong> intelligence, workflow <strong className="text-white font-semibold">automation</strong>, and real-time <strong className="text-white font-semibold">analytics</strong> into one unified enterprise workspace.
            </p>

            {/* Subtle Capability Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-[11px] sm:text-xs text-white/50 mb-6 sm:mb-8 font-medium">
              <span>Voice</span>
              <span className="text-white/20">·</span>
              <span>Chat</span>
              <span className="text-white/20">·</span>
              <span>WhatsApp</span>
              <span className="text-white/20">·</span>
              <span>Email</span>
              <span className="text-white/20">·</span>
              <span>SMS</span>
              <span className="text-white/20">·</span>
              <span>Social</span>
              <span className="text-white/20">·</span>
              <span className="text-accent">AI</span>
              <span className="text-white/20">·</span>
              <span>Analytics</span>
              <span className="text-white/20">·</span>
              <span>Customer 360</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch lg:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-8 sm:mb-10 w-full max-w-md mx-auto lg:mx-0">
              <Button
                variant="primary"
                size="md"
                href="mailto:rani@athenaserv.com"
                onClick={(e) => {
                  e.preventDefault();
                  openContactModal("demo");
                }}
                className="w-full sm:w-auto px-6 py-3"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="md"
                href="#platform"
                className="w-full sm:w-auto px-5 py-3"
              >
                <span className="text-white/80 hover:text-white transition-colors">Explore Platform</span>
              </Button>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-3 sm:pt-4 border-t border-white/10 max-w-md mx-auto lg:mx-0 w-full">
              {[
                { value: "8", label: "Modules", sub: "Integrated" },
                { value: "70+", label: "Languages", sub: "12 Indian" },
                { value: "85%", label: "Accuracy", sub: "Sentiment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left min-w-0">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white/70 truncate">{stat.label}</div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 hidden sm:block truncate">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div
            className={`transition-all duration-1000 delay-200 ease-out min-w-0 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
