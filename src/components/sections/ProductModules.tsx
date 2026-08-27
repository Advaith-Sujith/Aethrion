"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const modules = [
  {
    id: "call-center",
    label: "Call Center Platform",
    shortLabel: "Call Center",
    icon: "📞",
    color: "#0ea5e9",
    angle: 270,
    description:
      "Full inbound and outbound contact center capabilities with ACD, IVR, voice recording, skill-based routing, and real-time supervisor controls.",
    capabilities: ["ACD & Smart IVR", "Call Recording & Archival", "Skill-Based Agent Routing", "Real-Time Supervision", "Automated Outbound Campaigns"],
  },
  {
    id: "crm",
    label: "Customer CRM",
    shortLabel: "CRM",
    icon: "🗃️",
    color: "#8b5cf6",
    angle: 315,
    description:
      "Built-in CRM for managing complete customer profiles, omnichannel interaction history, account milestones, and relationship lifecycle data.",
    capabilities: ["Unified Customer Profiles", "Cross-Channel History", "Lifecycle Stage Tracking", "Relationship Insights", "Enterprise CRM Connectors"],
  },
  {
    id: "support",
    label: "Support Platform",
    shortLabel: "Support",
    icon: "🎫",
    color: "#22c55e",
    angle: 0,
    description:
      "Enterprise ticketing and case resolution with strict SLA monitoring, intelligent auto-assignment, multi-tiered escalation, and audit logging.",
    capabilities: ["Multi-Channel Ticketing", "SLA Adherence Engines", "Automated Assignment", "Dynamic Escalation Triggers", "Priority Service Queues"],
  },
  {
    id: "digital-assistants",
    label: "Digital Assistants",
    shortLabel: "AI Bots",
    icon: "🤖",
    color: "#f59e0b",
    angle: 45,
    description:
      "Conversational voice and chat bots supporting 70+ languages — resolving routine inquiries, validating caller intent, and enabling context-rich handoffs.",
    capabilities: ["Voice Bots (IVR & Outbound)", "Digital Chatbots", "70+ Languages & 12 Indian", "Intent & Entity Extraction", "Zero-Loss Context Handoff"],
  },
  {
    id: "omnichannel",
    label: "Omnichannel Layer",
    shortLabel: "Channels",
    icon: "🌐",
    color: "#ef4444",
    angle: 90,
    description:
      "Single orchestration layer unifying voice, chat, email, WhatsApp, SMS, and social media interactions into one synchronized queue.",
    capabilities: ["Synchronized Universal Queue", "Voice & Digital Unified", "WhatsApp & Social Integration", "Session Persistence", "Cross-Channel Routing"],
  },
  {
    id: "agent-hub",
    label: "Agent Hub",
    shortLabel: "Agent Hub",
    icon: "🧑‍💼",
    color: "#06b6d4",
    angle: 135,
    description:
      "Unified single-pane workspace combining conversation streams, customer 360 data, GenAI assist recommendations, and knowledge repositories.",
    capabilities: ["Single Pane of Glass", "GenAI Response Suggestions", "Instant Knowledge Retrieval", "Customer 360 Live Feed", "Automated Call Wrap-up"],
  },
  {
    id: "analytics",
    label: "Analytics & Reporting",
    shortLabel: "Analytics",
    icon: "📊",
    color: "#10b981",
    angle: 180,
    description:
      "Live operational dashboards, historical trends, predictive CSAT modeling, and AI-driven workforce optimization metrics.",
    capabilities: ["Real-Time Operations Dashboards", "Historical Reporting Suites", "Predictive CSAT Scoring", "Agent Quality Scoring", "Workforce Utilization Insights"],
  },
  {
    id: "sentiment",
    label: "Sentiment Engine",
    shortLabel: "Sentiment",
    icon: "❤️",
    color: "#f43f5e",
    angle: 225,
    description:
      "Real-time acoustic and linguistic sentiment intelligence across voice and text with 85% accuracy and automated supervisor alerts.",
    capabilities: ["Real-Time Emotion Detection", "Voice Acoustic & Tone Analysis", "85% Validated Accuracy", "70+ Languages Supported", "Live Escalation Alerts"],
  },
];

const CX = 160;
const CY = 160;
const RADIUS = 110;

export default function ProductModules() {
  const [activeModule, setActiveModule] = useState<string>("call-center");

  const active = modules.find((m) => m.id === activeModule) ?? modules[0];

  return (
    <section id="modules" className="section-padding bg-navy-950" aria-label="Aethrion CX product modules">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel light>Platform Architecture</SectionLabel>
            <h2 className="heading-section text-white mb-3 sm:mb-4">
              Eight Integrated Modules.{" "}
              <span className="text-accent">One CX Operating System.</span>
            </h2>
            <p className="body-large text-white/60">
              Every module is natively built to share customer context, intelligence, and workflows
              without siloed data or expensive custom middleware.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile / Tablet Horizontal Module Switcher (<lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 snap-x">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Desktop SVG Hub Diagram (>=lg) */}
          <RevealOnScroll direction="left">
            <div className="hidden lg:flex justify-center">
              <svg
                viewBox="0 0 320 320"
                className="w-full max-w-sm cursor-pointer select-none"
                role="img"
                aria-label="Interactive diagram of Aethrion CX modules"
              >
                {/* Connection lines */}
                {modules.map((m) => {
                  const rad = (m.angle * Math.PI) / 180;
                  const x = CX + RADIUS * Math.cos(rad);
                  const y = CY + RADIUS * Math.sin(rad);
                  const isSel = activeModule === m.id;
                  return (
                    <line
                      key={m.id + "-line"}
                      x1={CX}
                      y1={CY}
                      x2={x}
                      y2={y}
                      stroke={isSel ? m.color : "rgba(255,255,255,0.1)"}
                      strokeWidth={isSel ? 2.5 : 1}
                      strokeDasharray={isSel ? "none" : "4 3"}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Center node */}
                <circle cx={CX} cy={CY} r="40" fill="#0d1630" stroke="#0ea5e9" strokeWidth="2.5" />
                <circle cx={CX} cy={CY} r="34" fill="#0ea5e9" fillOpacity="0.1" />
                <text x={CX} y={CY - 6} textAnchor="middle" fill="#0ea5e9" fontSize="10" fontWeight="800">
                  Aethrion
                </text>
                <text x={CX} y={CY + 8} textAnchor="middle" fill="#0ea5e9" fontSize="10" fontWeight="800">
                  CX
                </text>
                <text x={CX} y={CY + 20} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="600">
                  Platform Core
                </text>

                {/* Module nodes */}
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
                        r="24"
                        fill={isSel ? m.color : "#112244"}
                        stroke={m.color}
                        strokeWidth={isSel ? 3 : 1.5}
                        className="transition-all duration-200"
                      />
                      <text x={x} y={y - 2} textAnchor="middle" fontSize="12">
                        {m.icon}
                      </text>
                      <text
                        x={x}
                        y={y + 12}
                        textAnchor="middle"
                        fill={isSel ? "white" : "rgba(255,255,255,0.6)"}
                        fontSize="6.5"
                        fontWeight="700"
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
            <div className="w-full">
              <div
                key={active.id}
                className="bg-navy-900 border rounded-2xl p-5 sm:p-7 transition-all duration-300 shadow-xl"
                style={{ borderColor: `${active.color}40` }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 pb-3 border-b border-white/10">
                  <div
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                    style={{ background: `${active.color}20`, border: `1px solid ${active.color}40` }}
                  >
                    {active.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white truncate">{active.label}</h3>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: active.color }}
                    >
                      Module {modules.findIndex((m) => m.id === active.id) + 1} of 8 · Integrated Core
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">
                  {active.description}
                </p>

                <div className="space-y-2">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-2">
                    Key Capabilities
                  </div>
                  {active.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5 p-2 rounded-lg bg-navy-950/40 border border-white/5">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: active.color }}
                      />
                      <span className="text-xs text-white/80 font-medium">{cap}</span>
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
