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
      "Full inbound and outbound call center capabilities with ACD, IVR, call recording, skill-based routing, and real-time supervision.",
    capabilities: ["ACD & IVR", "Call recording", "Skill-based routing", "Real-time monitoring", "Outbound dialing"],
  },
  {
    id: "crm",
    label: "CRM",
    shortLabel: "CRM",
    icon: "🗃️",
    color: "#8b5cf6",
    angle: 315,
    description:
      "Built-in CRM for managing customer profiles, interaction history, and relationships — or connect to your existing CRM.",
    capabilities: ["Customer profiles", "Interaction history", "Case management", "Pipeline tracking", "Contact management"],
  },
  {
    id: "support",
    label: "Support Platform",
    shortLabel: "Support",
    icon: "🎫",
    color: "#22c55e",
    angle: 0,
    description:
      "Helpdesk and ticketing functionality with SLA tracking, automated assignment, escalation rules, and cross-channel case management.",
    capabilities: ["Ticket management", "SLA tracking", "Auto-assignment", "Escalation rules", "Priority queues"],
  },
  {
    id: "digital-assistants",
    label: "Digital Assistants",
    shortLabel: "AI Bots",
    icon: "🤖",
    color: "#f59e0b",
    angle: 45,
    description:
      "Conversational AI bots for voice and text — handling routine queries, verifying identities, and handing off to agents with full context.",
    capabilities: ["Voice bots", "Chat bots", "Intent detection", "70+ languages", "Seamless handoff"],
  },
  {
    id: "omnichannel",
    label: "Omnichannel Layer",
    shortLabel: "Channels",
    icon: "🌐",
    color: "#ef4444",
    angle: 90,
    description:
      "Unified channel management across voice, chat, email, WhatsApp, SMS, and social — with a single customer view across all touchpoints.",
    capabilities: ["Voice & chat", "Email & WhatsApp", "Social channels", "SMS", "Unified queue"],
  },
  {
    id: "agent-hub",
    label: "Agent Hub",
    shortLabel: "Agent Hub",
    icon: "🧑‍💼",
    color: "#06b6d4",
    angle: 135,
    description:
      "The unified agent workspace combining conversation management, customer context, AI assist, knowledge base, and quality tools in one view.",
    capabilities: ["Unified workspace", "AI assist panel", "Knowledge base", "Customer 360", "Wrap-up tools"],
  },
  {
    id: "analytics",
    label: "Analytics & Reporting",
    shortLabel: "Analytics",
    icon: "📊",
    color: "#10b981",
    angle: 180,
    description:
      "Real-time and historical analytics dashboards, agent performance metrics, CSAT tracking, and AI-powered workforce insights.",
    capabilities: ["Real-time dashboards", "Historical reports", "CSAT tracking", "Agent metrics", "Workforce insights"],
  },
  {
    id: "sentiment",
    label: "Sentiment Engine",
    shortLabel: "Sentiment",
    icon: "❤️",
    color: "#f43f5e",
    angle: 225,
    description:
      "AI-powered sentiment analysis across voice and text — detecting emotion, intent, and escalation risk across 70+ languages in real time.",
    capabilities: ["Real-time analysis", "Voice & text", "85% accuracy", "70+ languages", "Escalation alerts"],
  },
];

const CX = 160;
const CY = 160;
const RADIUS = 110;

export default function ProductModules() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const active = modules.find((m) => m.id === activeModule) ?? null;

  return (
    <section id="modules" className="section-padding bg-navy-950" aria-label="Aethrion CX product modules">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <SectionLabel light>Platform Architecture</SectionLabel>
            <h2 className="heading-section text-white mb-4">
              Eight Integrated Modules.{" "}
              <span className="text-accent">One CX Operating System.</span>
            </h2>
            <p className="body-large text-white/60">
              Click any module to explore its capabilities. Every module is natively integrated —
              sharing data, context, and intelligence across the entire platform.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hub diagram */}
          <RevealOnScroll direction="left">
            <div className="flex justify-center">
              <svg
                viewBox="0 0 320 320"
                className="w-full max-w-sm cursor-pointer"
                role="img"
                aria-label="Interactive diagram of Aethrion CX modules"
              >
                {/* Connection lines */}
                {modules.map((m) => {
                  const rad = (m.angle * Math.PI) / 180;
                  const x = CX + RADIUS * Math.cos(rad);
                  const y = CY + RADIUS * Math.sin(rad);
                  return (
                    <line
                      key={m.id + "-line"}
                      x1={CX}
                      y1={CY}
                      x2={x}
                      y2={y}
                      stroke={activeModule === m.id ? m.color : "rgba(255,255,255,0.08)"}
                      strokeWidth={activeModule === m.id ? 2 : 1}
                      strokeDasharray={activeModule === m.id ? "none" : "4 3"}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Center node */}
                <circle cx={CX} cy={CY} r="40" fill="#0d1630" stroke="#0ea5e9" strokeWidth="2" />
                <circle cx={CX} cy={CY} r="34" fill="#0ea5e9" fillOpacity="0.08" />
                <text x={CX} y={CY - 6} textAnchor="middle" fill="#0ea5e9" fontSize="10" fontWeight="700">
                  Aethrion
                </text>
                <text x={CX} y={CY + 8} textAnchor="middle" fill="#0ea5e9" fontSize="10" fontWeight="700">
                  CX
                </text>
                <text x={CX} y={CY + 20} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7">
                  Platform Core
                </text>

                {/* Module nodes */}
                {modules.map((m) => {
                  const rad = (m.angle * Math.PI) / 180;
                  const x = CX + RADIUS * Math.cos(rad);
                  const y = CY + RADIUS * Math.sin(rad);
                  const isActive = activeModule === m.id;

                  return (
                    <g
                      key={m.id}
                      onClick={() => setActiveModule(isActive ? null : m.id)}
                      className="cursor-pointer"
                      role="button"
                      aria-label={`${m.label} module`}
                      aria-pressed={isActive}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r="24"
                        fill={isActive ? m.color : "#112244"}
                        stroke={m.color}
                        strokeWidth={isActive ? 2.5 : 1.5}
                        className="transition-all duration-200"
                      />
                      <text x={x} y={y - 2} textAnchor="middle" fontSize="12">
                        {m.icon}
                      </text>
                      <text
                        x={x}
                        y={y + 12}
                        textAnchor="middle"
                        fill={isActive ? "white" : "rgba(255,255,255,0.5)"}
                        fontSize="6.5"
                        fontWeight="600"
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

          {/* Detail panel */}
          <RevealOnScroll direction="right">
            <div className="min-h-64">
              {active ? (
                <div
                  key={active.id}
                  className="bg-navy-900 border rounded-2xl p-8 transition-all duration-300"
                  style={{ borderColor: `${active.color}40` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${active.color}20` }}
                    >
                      {active.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{active.label}</h3>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: active.color }}
                      >
                        Module {modules.findIndex((m) => m.id === active.id) + 1} of 8
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">{active.description}</p>
                  <div className="space-y-2">
                    {active.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: active.color }}
                        />
                        <span className="text-sm text-white/60">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-navy-900 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-64">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm">
                    Select a module from the diagram to explore its capabilities.
                  </p>
                </div>
              )}

              {/* Module list (mobile) */}
              <div className="mt-6 grid grid-cols-2 gap-2 lg:hidden">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(activeModule === m.id ? null : m.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border text-left transition-all duration-200"
                    style={{
                      borderColor: activeModule === m.id ? m.color : "rgba(255,255,255,0.1)",
                      background: activeModule === m.id ? `${m.color}15` : "transparent",
                    }}
                  >
                    <span className="text-base">{m.icon}</span>
                    <span className="text-xs text-white/70">{m.shortLabel}</span>
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
