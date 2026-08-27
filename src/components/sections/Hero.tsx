"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { openContactModal } from "@/components/ui/ContactModal";

const channels = [
  { label: "Voice", color: "#0ea5e9", icon: "📞" },
  { label: "Chat", color: "#22c55e", icon: "💬" },
  { label: "Email", color: "#8b5cf6", icon: "✉️" },
  { label: "WhatsApp", color: "#25d366", icon: "📱" },
  { label: "Social", color: "#f59e0b", icon: "🌐" },
];

const sentimentData = [
  { label: "Positive", value: 62, color: "#22c55e" },
  { label: "Neutral", value: 23, color: "#f59e0b" },
  { label: "Negative", value: 15, color: "#ef4444" },
];

function LiveIndicator() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <span className="text-xs font-medium text-green-400">Live</span>
    </span>
  );
}

function DashboardMockup() {
  const [activeInteraction, setActiveInteraction] = useState(0);
  const [sentiment, setSentiment] = useState(72);

  useEffect(() => {
    const interactionTimer = setInterval(() => {
      setActiveInteraction((prev) => (prev + 1) % channels.length);
    }, 2200);
    const sentimentTimer = setInterval(() => {
      setSentiment((prev) => {
        const delta = Math.random() * 6 - 3;
        return Math.min(95, Math.max(55, Math.round(prev + delta)));
      });
    }, 1800);
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
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-navy-950/60">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-white/40 font-medium">Aethrion CX — Agent Workspace</span>
          <LiveIndicator />
        </div>

        <div className="grid grid-cols-12 h-[380px] lg:h-[440px]">
          {/* Sidebar */}
          <div className="col-span-3 border-r border-white/10 p-3 space-y-1">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 px-2 py-1 mb-2">
              Channels
            </div>
            {channels.map((ch, i) => (
              <div
                key={ch.label}
                className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                  i === activeInteraction
                    ? "bg-accent/20 border border-accent/30"
                    : "hover:bg-white/5"
                }`}
              >
                <span className="text-sm">{ch.icon}</span>
                <span className="text-xs text-white/70">{ch.label}</span>
                {i === activeInteraction && (
                  <span className="ml-auto flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-white/10 mt-2">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 px-2 py-1 mb-2">
                Queue
              </div>
              {[
                { count: 8, label: "Waiting", color: "text-yellow-400" },
                { count: 14, label: "Active", color: "text-green-400" },
                { count: 3, label: "Escalated", color: "text-red-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between px-2 py-1.5">
                  <span className="text-xs text-white/50">{item.label}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="col-span-9 flex flex-col">
            {/* Active conversation */}
            <div className="flex-1 p-4 overflow-hidden">
              {/* Customer header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/60 to-accent-dark flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  R
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">Rajesh Kumar</div>
                  <div className="text-xs text-white/40">Account #REF-2847 · Premium</div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div
                    className="px-2 py-1 rounded text-[10px] font-semibold"
                    style={{
                      background: `${sentimentData[0].color}20`,
                      color: sentimentData[0].color,
                    }}
                  >
                    Positive {sentiment}%
                  </div>
                  <LiveIndicator />
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                    R
                  </div>
                  <div className="bg-navy-800 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%]">
                    <p className="text-xs text-white/80">
                      I need to check the status of my loan application submitted last week.
                    </p>
                    <span className="text-[9px] text-white/30 mt-1 block">10:42 AM</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px] text-white flex-shrink-0">
                    A
                  </div>
                  <div className="bg-accent/20 border border-accent/20 rounded-xl rounded-tr-none px-3 py-2 max-w-[80%]">
                    <p className="text-xs text-white/80">
                      I can see your application REF-2847. It&apos;s currently in document verification. Expected completion: 2 business days.
                    </p>
                    <span className="text-[9px] text-accent/60 mt-1 block">Agent · 10:43 AM</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-[10px] text-white flex-shrink-0">
                    R
                  </div>
                  <div className="bg-navy-800 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%]">
                    <p className="text-xs text-white/80">
                      That&apos;s great, thank you!
                    </p>
                    <span className="text-[9px] text-white/30 mt-1 block">10:43 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assist strip */}
            <div className="border-t border-white/10 p-3 bg-accent/5">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded bg-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-semibold text-accent mb-1">AI Suggest</div>
                  <p className="text-xs text-white/60 leading-snug">
                    Offer proactive status notification enrollment to reduce repeat contacts.
                  </p>
                </div>
              </div>
            </div>

            {/* Sentiment bar */}
            <div className="border-t border-white/10 px-4 py-2 flex items-center gap-3">
              <span className="text-[10px] text-white/40 font-medium shrink-0">Sentiment</span>
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 transition-all duration-1000"
                  style={{ width: `${sentiment}%` }}
                />
              </div>
              <span className="text-[10px] font-bold text-green-400 shrink-0">{sentiment}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating analytics card */}
      <div className="absolute -right-6 top-8 hidden xl:block bg-white rounded-xl shadow-card-hover border border-slate-200 p-4 w-44 animate-fade-in">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500">CSAT Trend</span>
          <span className="text-xs font-bold text-green-600">↑ 4.2%</span>
        </div>
        {sentimentData.map((d) => (
          <div key={d.label} className="mb-2">
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="text-slate-500">{d.label}</span>
              <span className="font-semibold" style={{ color: d.color }}>
                {d.value}%
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${d.value}%`, backgroundColor: d.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Floating agent status card */}
      <div className="absolute -left-6 bottom-16 hidden xl:block bg-navy-900 rounded-xl border border-white/10 p-3 w-40">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
          Active Agents
        </div>
        {[
          { name: "Priya S.", status: "active", handle: "2:14" },
          { name: "Arjun M.", status: "active", handle: "4:07" },
          { name: "Kavya R.", status: "wrap-up", handle: "0:45" },
        ].map((agent) => (
          <div key={agent.name} className="flex items-center gap-2 py-1">
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                agent.status === "active" ? "bg-green-400" : "bg-yellow-400"
              }`}
            />
            <span className="text-xs text-white/60 flex-1 truncate">{agent.name}</span>
            <span className="text-[10px] text-white/30">{agent.handle}</span>
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
      className="relative min-h-screen bg-navy-950 flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Aethrion CX platform introduction"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Text content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-accent">
                AI-Powered Customer Experience Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Turn Every Customer{" "}
              <span className="text-accent">Interaction</span>{" "}
              Into a Resolution.
            </h1>

            {/* Supporting copy */}
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
              Aethrion CX is an AI-powered customer experience platform that unifies voice, chat,
              email, WhatsApp, social channels, automation, analytics, and customer intelligence in
              one workspace.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Button
                variant="primary"
                size="lg"
                href="mailto:rani@athenaserv.com"
                onClick={(e) => {
                  e.preventDefault();
                  openContactModal("demo");
                }}
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button variant="ghost" size="lg" href="#platform">
                <span className="text-white/70 hover:text-white transition-colors">Explore Aethrion CX</span>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "8", label: "Integrated Modules" },
                { value: "70+", label: "Languages" },
                { value: "85%", label: "Sentiment Accuracy" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
