"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const modules = [
  {
    id: "call-center",
    label: "Contact Center (CCaaS)",
    shortLabel: "CCaaS",
    icon: "📞",
    color: "#0ea5e9",
    angle: 270,
    description:
      "Full inbound and outbound contact center capabilities with Smart IVR, intelligent ACD, automated outbound dialer campaigns, voice recording, and real-time supervisor controls.",
    capabilities: ["Smart IVR & Intelligent ACD", "Outbound Dialer & Campaigns", "Voice Recording & Archival", "Skill-Based Agent Routing", "Real-Time Supervisor Controls"],
  },
  {
    id: "crm",
    label: "Customer CRM / 360",
    shortLabel: "CRM 360",
    icon: "🗃️",
    color: "#8b5cf6",
    angle: 315,
    description:
      "Built-in CRM for managing unified customer profiles, omnichannel interaction timelines, relationship lifecycle stages, account holdings, and enterprise CRM connectors.",
    capabilities: ["Unified Customer 360 View", "Cross-Channel Timeline", "Lifecycle Stage Tracking", "Enterprise CRM Connectors", "Account Holdings Context"],
  },
  {
    id: "support",
    label: "Helpdesk & Support",
    shortLabel: "Helpdesk",
    icon: "🎫",
    color: "#22c55e",
    angle: 0,
    description:
      "Enterprise multi-channel ticketing and case resolution with strict SLA management, intelligent auto-assignment, dynamic escalation triggers, and complete audit logging.",
    capabilities: ["Multi-Channel Ticketing", "Strict SLA Adherence Engines", "Automated Case Assignment", "Dynamic Escalation Triggers", "Quality Audit Trails"],
  },
  {
    id: "digital-assistants",
    label: "Digital AI Assistants",
    shortLabel: "AI Bots",
    icon: "🤖",
    color: "#f59e0b",
    angle: 45,
    description:
      "Conversational voice and chat bots supporting 70+ languages — including 12 native Indian languages — resolving routine queries, validating intent, and enabling context-rich handoffs.",
    capabilities: ["Conversational Voice Bots", "Multilingual Chatbots (70+ Langs)", "12 Native Indian Languages", "Intent & Entity Extraction", "Zero-Loss Context Handoff"],
  },
  {
    id: "omnichannel",
    label: "Omnichannel Orchestration",
    shortLabel: "Omni-CX",
    icon: "🌐",
    color: "#ef4444",
    angle: 90,
    description:
      "Single universal queue unifying Voice, Chat, WhatsApp, Email, SMS, Web Chat, and Social media interactions into one synchronized stream with session persistence.",
    capabilities: ["Synchronized Universal Queue", "Voice, Chat & WhatsApp", "SMS & Social Ingestion", "Cross-Channel Session Persistence", "Dynamic Channel Routing"],
  },
  {
    id: "agent-hub",
    label: "Agent Hub & GenAI Assist",
    shortLabel: "Agent Hub",
    icon: "🧑‍💼",
    color: "#06b6d4",
    angle: 135,
    description:
      "Unified single-pane workspace combining conversation streams, Customer 360 data, GenAI suggested responses, instant knowledge retrieval, and automated call wrap-up summaries.",
    capabilities: ["Single-Pane Agent Desktop", "GenAI Response Suggestions", "Next-Best Action Prompts", "Instant Knowledge Search", "Automated Call Wrap-up"],
  },
  {
    id: "analytics",
    label: "Analytics & Reporting",
    shortLabel: "Analytics",
    icon: "📊",
    color: "#10b981",
    angle: 180,
    description:
      "Live operational dashboards, historical reporting suites, predictive CSAT modeling, automated QA scoring, and workforce utilization optimization metrics.",
    capabilities: ["Real-Time Operations Dashboards", "Predictive CSAT Scoring", "Workforce Optimization", "Automated QA Scorecards", "Custom Business KPI Reports"],
  },
  {
    id: "sentiment",
    label: "Sentiment Engine & Social Listening",
    shortLabel: "Sentiment",
    icon: "❤️",
    color: "#f43f5e",
    angle: 225,
    description:
      "Real-time acoustic and linguistic sentiment intelligence across voice and text with 85% accuracy, brand social listening, stress indicators, and automated supervisor alerts.",
    capabilities: ["Real-Time Emotion Waveform", "Acoustic Voice Stress Analysis", "AI Social Listening & Brand Monitor", "85% Validated Accuracy", "Live Escalation Alerts"],
  },
];

const CX = 170;
const CY = 170;
const RADIUS = 116;
const R_CENTER = 40;
const R_NODE = 26;

export default function ProductModules() {
  const [activeModule, setActiveModule] = useState<string>("call-center");

  const active = modules.find((m) => m.id === activeModule) ?? modules[0];

  return (
    <section id="modules" className="section-padding bg-navy-950 overflow-hidden w-full" aria-label="Aethrion CX product modules">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel light>Platform Architecture</SectionLabel>
            <h2 className="heading-section text-white mb-3 sm:mb-4 break-words">
              Eight Integrated Modules.{" "}
              <span className="text-accent">One CX Operating System.</span>
            </h2>
            <p className="body-large text-white/60 break-words">
              Every module is natively built into Aethrion CX — sharing customer context, intelligence, and workflows across CCaaS, AI bots, Customer 360, QA, and analytics.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile / Tablet Horizontal Module Switcher (<lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 snap-x w-full max-w-full min-w-0">
          {modules.map((m, i) => {
            const isSel = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModule(m.id)}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 snap-start"
                style={{
                  borderColor: isSel ? m.color : "rgba(255,255,255,0.12)",
                  background: isSel ? `${m.color}20` : "rgba(255,255,255,0.03)",
                  color: isSel ? "#ffffff" : "rgba(255,255,255,0.7)",
                }}
              >
                <span>{m.icon}</span>
                <span>{m.shortLabel}</span>
                <span className="text-[10px] opacity-60">#{i + 1}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full min-w-0">
          {/* Desktop SVG Hub Diagram (>=lg) */}
          <RevealOnScroll direction="left">
            <div className="hidden lg:flex justify-center min-w-0">
              <svg
                viewBox="0 0 340 340"
                className="w-full max-w-sm cursor-pointer select-none"
                role="img"
                aria-label="Interactive diagram of Aethrion CX modules"
              >
                {/* Background Orbit Ring */}
                <circle
                  cx={CX}
                  cy={CY}
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />

                {/* Connection lines: Terminate cleanly outside both center and node circles */}
                {modules.map((m) => {
                  const rad = (m.angle * Math.PI) / 180;
                  const isSel = activeModule === m.id;

                  const startDist = R_CENTER + 4;
                  const endDist = RADIUS - R_NODE - 4;

                  const x1 = CX + startDist * Math.cos(rad);
                  const y1 = CY + startDist * Math.sin(rad);
                  const x2 = CX + endDist * Math.cos(rad);
                  const y2 = CY + endDist * Math.sin(rad);

                  return (
                    <line
                      key={m.id + "-line"}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isSel ? m.color : "rgba(255,255,255,0.15)"}
                      strokeWidth={isSel ? 2.5 : 1}
                      strokeDasharray={isSel ? "none" : "3 3"}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Center node */}
                <circle cx={CX} cy={CY} r={R_CENTER} fill="#0b1329" stroke="#0ea5e9" strokeWidth="2.5" />
                <circle cx={CX} cy={CY} r={R_CENTER - 5} fill="#0ea5e9" fillOpacity="0.1" />
                <text x={CX} y={CY - 7} textAnchor="middle" fill="#0ea5e9" fontSize="10.5" fontWeight="800">
                  Aethrion
                </text>
                <text x={CX} y={CY + 6} textAnchor="middle" fill="#0ea5e9" fontSize="10.5" fontWeight="800">
                  CX
                </text>
                <text x={CX} y={CY + 18} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6.5" fontWeight="600">
                  Platform Core
                </text>

                {/* Module nodes with contained labels & solid backdrops */}
                {modules.map((m) => {
                  const rad = (m.angle * Math.PI) / 180;
                  const x = CX + RADIUS * Math.cos(rad);
                  const y = CY + RADIUS * Math.sin(rad);
                  const isSel = activeModule === m.id;

                  return (
                    <g
                      key={m.id}
                      onClick={() => setActiveModule(m.id)}
                      className="cursor-pointer"
                      role="button"
                      aria-label={`${m.label} module`}
                      aria-pressed={isSel}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r={R_NODE}
                        fill={isSel ? m.color : "#0d1836"}
                        stroke={m.color}
                        strokeWidth={isSel ? 2.5 : 1.5}
                        className="transition-all duration-200"
                      />
                      <text x={x} y={y - 3} textAnchor="middle" fontSize="12">
                        {m.icon}
                      </text>
                      <text
                        x={x}
                        y={y + 10}
                        textAnchor="middle"
                        fill={isSel ? "#ffffff" : "rgba(255,255,255,0.75)"}
                        fontSize="5.8"
                        fontWeight="700"
                        letterSpacing="0.1"
                        className="transition-all duration-200"
                      >
                        {m.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </RevealOnScroll>

          {/* Module Details Card */}
          <RevealOnScroll direction="right">
            <div className="w-full min-w-0">
              <div
                key={active.id}
                className="bg-navy-900 border rounded-2xl p-4 sm:p-7 transition-all duration-300 shadow-xl w-full min-w-0 overflow-hidden"
                style={{ borderColor: `${active.color}40` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 pb-3 border-b border-white/10 min-w-0">
                  <div
                    className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center text-lg sm:text-2xl flex-shrink-0"
                    style={{ background: `${active.color}20`, border: `1px solid ${active.color}40` }}
                  >
                    {active.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-lg font-bold text-white break-words">{active.label}</h3>
                    <span
                      className="text-[11px] sm:text-xs font-semibold block truncate"
                      style={{ color: active.color }}
                    >
                      Module {modules.findIndex((m) => m.id === active.id) + 1} of 8 · Integrated Architecture
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 sm:mb-5 break-words">
                  {active.description}
                </p>

                <div className="space-y-2">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-1.5">
                    Core Capabilities &amp; Features
                  </div>
                  {active.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 p-2 rounded-lg bg-navy-950/40 border border-white/5 min-w-0">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: active.color }}
                      />
                      <span className="text-[11px] sm:text-xs text-white/80 font-medium break-words">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
