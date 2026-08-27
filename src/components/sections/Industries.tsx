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
    <section id="industries" className="section-padding bg-slate-50" aria-label="Industries served by Aethrion CX">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-4">
              Built for High-Volume Customer Interactions
            </h2>
            <p className="body-large">
              Aethrion CX is deployed across industries where customer experience operational
              quality directly impacts business outcomes.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Industry tabs */}
          <div className="lg:col-span-1">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 min-w-max lg:min-w-0 lg:w-full ${
                    active === ind.id
                      ? "bg-navy-900 border-navy-700 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className="text-lg">{ind.icon}</span>
                  <div className="min-w-0">
                    <div className={`text-sm font-semibold ${active === ind.id ? "text-white" : "text-slate-700"}`}>
                      {ind.label}
                    </div>
                    <div className={`text-xs hidden lg:block truncate ${active === ind.id ? "text-white/50" : "text-slate-400"}`}>
                      {ind.fullLabel}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <div
              key={ind.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card"
            >
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-slate-100">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${ind.color}15` }}
                >
                  {ind.icon}
                </div>
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: ind.color }}
                  >
                    Industry Focus
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{ind.fullLabel}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-8">{ind.description}</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ind.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex gap-3 p-4 rounded-xl"
                    style={{ background: `${ind.color}08` }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: ind.color }}
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">{h.label}</div>
                      <div className="text-xs text-slate-500 leading-snug">{h.desc}</div>
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
