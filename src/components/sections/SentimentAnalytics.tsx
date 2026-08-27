"use client";

import { useEffect, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const mechanisms = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    label: "Textual Cue Detection",
    description:
      "Analyze wording, phrasing, and linguistic patterns to identify customer emotion and intent within text-based interactions.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    label: "Voice Tone Analysis",
    description:
      "Analyze pitch, pace, stress indicators, and prosodic features in voice interactions to detect emotional state and escalation risk.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    ),
    label: "Contextual Understanding",
    description:
      "Interpret sentiment within the full arc of the conversation — not just individual messages — for deeper, more accurate emotional intelligence.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    label: "Multilingual Analysis",
    description:
      "Process conversations across 70+ languages — including 12 Indian languages — with consistent sentiment accuracy across all supported languages.",
  },
];

const sentimentPoints = [65, 58, 72, 68, 75, 62, 55, 48, 52, 45, 58, 65, 72, 78, 82, 80, 76];

function SentimentChart() {
  const [animated, setAnimated] = useState(false);
  const [currentSentiment, setCurrentSentiment] = useState(76);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    const sentTimer = setInterval(() => {
      setCurrentSentiment((p) => {
        const delta = Math.random() * 8 - 4;
        return Math.min(95, Math.max(40, Math.round(p + delta)));
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
      clearInterval(sentTimer);
    };
  }, []);

  const w = 460;
  const h = 120;
  const padding = 20;
  const chartW = w - padding * 2;
  const chartH = h - padding * 2;

  const points = sentimentPoints.map((v, i) => ({
    x: padding + (i / (sentimentPoints.length - 1)) * chartW,
    y: padding + (1 - v / 100) * chartH,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaD = `${pathD} L${points[points.length - 1].x},${h} L${points[0].x},${h} Z`;

  const sentimentColor =
    currentSentiment >= 65 ? "#22c55e" : currentSentiment >= 45 ? "#f59e0b" : "#ef4444";

  return (
    <div className="bg-navy-900 rounded-2xl border border-white/10 p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-1">
            Live Sentiment Feed
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-green-400 font-medium">Monitoring Active</span>
          </div>
        </div>
        <div className="text-right">
          <div
            className="text-3xl font-black transition-all duration-700"
            style={{ color: sentimentColor }}
          >
            {currentSentiment}%
          </div>
          <div className="text-xs text-white/40">Positive</div>
        </div>
      </div>

      {/* Waveform / timeline */}
      <div className="mb-5">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full"
          aria-label="Sentiment timeline chart"
        >
          <defs>
            <linearGradient id="sentArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          {[25, 50, 75].map((v) => (
            <line
              key={v}
              x1={padding}
              y1={padding + (1 - v / 100) * chartH}
              x2={w - padding}
              y2={padding + (1 - v / 100) * chartH}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          ))}
          {/* Area fill */}
          <path d={areaD} fill="url(#sentArea)" />
          {/* Line */}
          <path d={pathD} fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
          {/* Last point indicator */}
          <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="4" fill="#22c55e" />
          <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="8" fill="#22c55e" fillOpacity="0.2" className={animated ? "animate-ping" : ""} />
        </svg>
      </div>

      {/* Sentiment breakdown + escalation alert */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
            Distribution
          </div>
          {[
            { label: "Positive", value: 62, color: "#22c55e" },
            { label: "Neutral", value: 23, color: "#f59e0b" },
            { label: "Negative", value: 15, color: "#ef4444" },
          ].map((d) => (
            <div key={d.label} className="flex items-center gap-2 mb-2">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${d.value}%`, background: d.color }}
                />
              </div>
              <span className="text-[10px] font-bold w-8 text-right" style={{ color: d.color }}>
                {d.value}%
              </span>
              <span className="text-[10px] text-white/40 w-12">{d.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {/* Escalation alert */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <span className="text-[10px] font-semibold text-red-400">Escalation Risk</span>
            </div>
            <p className="text-[10px] text-white/60 leading-snug">
              Call #4821 — Negative trajectory detected. Supervisor alert triggered.
            </p>
          </div>

          {/* Coach suggestion */}
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              <span className="text-[10px] font-semibold text-accent">Coach Suggestion</span>
            </div>
            <p className="text-[10px] text-white/60 leading-snug">
              Use empathy acknowledgment. Offer resolution timeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SentimentAnalytics() {
  return (
    <section id="sentiment" className="section-padding bg-white" aria-label="Sentiment analytics capabilities">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <RevealOnScroll direction="left">
            <div>
              <SectionLabel>Sentiment Intelligence</SectionLabel>
              <h2 className="heading-section text-navy-900 mb-4">
                Know What Your Customers Are Feeling — In Real Time.
              </h2>
              <p className="body-large mb-8">
                Aethrion CX analyzes customer emotion and tone across voice and text to help teams
                identify escalation risks, coach agents effectively, and improve customer experience
                outcomes.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { value: 70, suffix: "+", label: "Languages", sub: "Including 12 Indian languages" },
                  { value: 85, suffix: "%", label: "Accuracy", sub: "Sentiment detection" },
                ].map((m) => (
                  <div key={m.label} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                    <div className="text-2xl font-black text-navy-900 mb-1">
                      <AnimatedCounter target={m.value} suffix={m.suffix} />
                    </div>
                    <div className="text-sm font-semibold text-slate-700 mb-0.5">{m.label}</div>
                    <div className="text-xs text-slate-400">{m.sub}</div>
                  </div>
                ))}
                {[
                  { value: "12", label: "Indian Languages", sub: "Native language support" },
                  { value: "24/7", label: "Monitoring", sub: "Always-on analysis" },
                ].map((m) => (
                  <div key={m.label} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                    <div className="text-2xl font-black text-navy-900 mb-1">{m.value}</div>
                    <div className="text-sm font-semibold text-slate-700 mb-0.5">{m.label}</div>
                    <div className="text-xs text-slate-400">{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Mechanisms */}
              <div className="space-y-4">
                {mechanisms.map((m, i) => (
                  <div key={m.label} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900 mb-1">{m.label}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Chart */}
          <RevealOnScroll direction="right" delay={100}>
            <SentimentChart />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
