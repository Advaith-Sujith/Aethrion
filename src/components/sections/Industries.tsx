"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const industries = [
  {
    id: "bfsi",
    label: "BFSI",
    icon: "🏦",
    fullLabel: "Banking, Financial Services & Insurance",
    description:
      "BFSI organizations handle high inbound call volumes with strict compliance requirements. Aethrion CX delivers sentiment visibility, automated quality assurance, compliance alerting, and complete call audit trails.",
    highlights: [
      { label: "Compliance Monitoring", desc: "Flag non-compliant interactions and trigger alerts automatically" },
      { label: "High-Volume Routing", desc: "Intelligent routing for complex financial queries at scale" },
      { label: "Automated QA", desc: "Score and audit calls against compliance frameworks" },
      { label: "Call Audit Trails", desc: "Complete, searchable records of every customer interaction" },
      { label: "Sentiment Visibility", desc: "Real-time emotion detection across all customer conversations" },
    ],
    color: "#0ea5e9",
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    icon: "🛒",
    fullLabel: "Ecommerce & Retail",
    description:
      "Ecommerce businesses face high volumes of order, return, and delivery queries. Aethrion CX unifies customer visibility, reduces repeat contacts with Customer 360, and provides AI-assisted order tracking and escalation handling.",
    highlights: [
      { label: "Customer 360", desc: "Complete purchase and interaction history for every customer" },
      { label: "AI Order Tracking", desc: "Automated order status resolution without agent involvement" },
      { label: "Repeat Contact Reduction", desc: "Identify and address root causes of repeat contacts" },
      { label: "Escalation Handling", desc: "Fast routing of high-value or frustrated customers" },
      { label: "Returns & Refunds", desc: "Streamlined handling of return and refund queries" },
    ],
    color: "#22c55e",
  },
  {
    id: "bpo",
    label: "BPO",
    icon: "🏢",
    fullLabel: "BPO / Contact Centers",
    description:
      "BPO and contact center operations require consistent quality across distributed agent teams. Aethrion CX reduces average handle time, ensures quality consistency through automated QA, and provides real-time agent assist and SLA monitoring.",
    highlights: [
      { label: "Real-Time Agent Assist", desc: "Live AI suggestions during every agent conversation" },
      { label: "Automated QA", desc: "Consistent quality evaluation at scale across all teams" },
      { label: "SLA Monitoring", desc: "Real-time SLA status across all queues and teams" },
      { label: "Handle Time Reduction", desc: "AI-assisted resolution reduces average handling time" },
      { label: "Quality Consistency", desc: "Standardized quality management across distributed teams" },
    ],
    color: "#8b5cf6",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    fullLabel: "Healthcare",
    description:
      "Healthcare organizations manage sensitive patient communications with strict privacy and operational requirements. Aethrion CX supports omnichannel patient interaction management with consistent quality and intelligent routing.",
    highlights: [
      { label: "Omnichannel Engagement", desc: "Unified voice, chat, and digital patient communications" },
      { label: "Intelligent Routing", desc: "Route inquiries to specialized departments efficiently" },
      { label: "Quality Monitoring", desc: "Consistent quality standards across patient interactions" },
      { label: "Analytics & Reporting", desc: "Operational insights and performance measurement" },
    ],
    color: "#ef4444",
  },
  {
    id: "telecom",
    label: "Telecom",
    icon: "📡",
    fullLabel: "Telecom",
    description:
      "Telecom providers handle large volumes of technical support, billing, and service queries. Aethrion CX enables intelligent automation, real-time agent support, and operational visibility at scale.",
    highlights: [
      { label: "High-Volume Handling", desc: "Scalable infrastructure for large interaction volumes" },
      { label: "AI Automation", desc: "Automate routine billing and account queries" },
      { label: "Real-Time Visibility", desc: "Live monitoring of all customer interactions" },
      { label: "Sentiment Intelligence", desc: "Identify churn risk from declining sentiment patterns" },
    ],
    color: "#f59e0b",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "🚚",
    fullLabel: "Logistics",
    description:
      "Logistics companies manage time-sensitive shipment, delivery, and exception queries. Aethrion CX supports proactive customer communication, automated query resolution, and real-time operational oversight.",
    highlights: [
      { label: "Proactive Communication", desc: "Automated outbound notifications for shipment updates" },
      { label: "Query Automation", desc: "Self-serve tracking and status resolution" },
      { label: "Exception Handling", desc: "Intelligent routing of delivery exceptions and escalations" },
      { label: "Performance Visibility", desc: "Real-time agent and operational performance monitoring" },
    ],
    color: "#06b6d4",
  },
  {
    id: "government",
    label: "Government",
    icon: "🏛️",
    fullLabel: "Government & Public Sector",
    description:
      "Government and public sector organizations require reliable, scalable citizen interaction management. Aethrion CX provides omnichannel engagement, structured quality management, and operational analytics for citizen services.",
    highlights: [
      { label: "Omnichannel Service", desc: "Unified citizen engagement across voice and digital channels" },
      { label: "Quality Management", desc: "Consistent service quality and audit capability" },
      { label: "Analytics & Reporting", desc: "Operational insights for service delivery optimization" },
      { label: "Intelligent Routing", desc: "Accurate routing to the right department or specialist" },
    ],
    color: "#10b981",
  },
];

export default function Industries() {
  const [active, setActive] = useState("bfsi");
  const ind = industries.find((i) => i.id === active) ?? industries[0];

  return (
    <section id="industries" className="section-padding bg-slate-50 overflow-hidden w-full" aria-label="Industries served by Aethrion CX">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-3 sm:mb-4 break-words">
              Built for High-Volume Customer Interactions
            </h2>
            <p className="body-large break-words">
              Aethrion CX is deployed across industries where customer experience operational
              quality directly impacts business outcomes.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile / Tablet Horizontal Scroll Tabs (<lg) */}
        <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 snap-x w-full max-w-full min-w-0">
          {industries.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 snap-start ${
                active === item.id
                  ? "bg-navy-900 border-navy-700 text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 items-start w-full min-w-0">
          {/* Desktop Industry tabs (>=lg) */}
          <div className="hidden lg:flex lg:flex-col gap-2 min-w-0">
            {industries.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 w-full ${
                  active === item.id
                    ? "bg-navy-900 border-navy-700 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className={`text-sm font-bold ${active === item.id ? "text-white" : "text-slate-800"}`}>
                    {item.label}
                  </div>
                  <div className={`text-[10px] truncate ${active === item.id ? "text-white/60" : "text-slate-400"}`}>
                    {item.fullLabel}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3 w-full min-w-0">
            <div
              key={ind.id}
              className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-7 lg:p-8 shadow-card w-full min-w-0 overflow-hidden"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-100 min-w-0">
                <div
                  className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-3xl flex-shrink-0"
                  style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}30` }}
                >
                  {ind.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: ind.color }}
                  >
                    Industry Focus
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-navy-900 break-words">{ind.fullLabel}</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 sm:mb-8 break-words">{ind.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 w-full min-w-0">
                {ind.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex gap-2.5 p-3 sm:p-4 rounded-xl min-w-0"
                    style={{ background: `${ind.color}08`, border: `1px solid ${ind.color}18` }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: ind.color }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5 break-words">{h.label}</div>
                      <div className="text-[11px] sm:text-xs text-slate-500 leading-snug break-words">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
