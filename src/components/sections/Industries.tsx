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
    capabilitiesBadge: "CCaaS · IVR/ACD · Automated QA · Sentiment · Compliance",
    description:
      "BFSI organizations handle high-stakes customer inquiries with strict compliance requirements. Aethrion CX delivers intelligent IVR/ACD routing, real-time sentiment visibility, automated QA evaluation, and full call recording audit trails.",
    highlights: [
      { label: "CCaaS & Smart IVR/ACD", desc: "Intelligent skill-based routing for complex financial and loan queries" },
      { label: "Automated QA & Compliance", desc: "Score 100% of calls against strict regulatory and compliance checklists" },
      { label: "Real-Time Sentiment", desc: "Detect caller agitation immediately and trigger supervisor whispers" },
      { label: "Call Recording & Archival", desc: "Complete, searchable audio and transcript audit trails" },
      { label: "Customer 360 Holdings", desc: "Instant visibility into accounts, cards, and loan statuses in one pane" },
    ],
    color: "#0ea5e9",
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    icon: "🛒",
    fullLabel: "Ecommerce & Retail",
    capabilitiesBadge: "Omnichannel · Customer 360 · AI Bots · Order Workflows",
    description:
      "Ecommerce businesses face high spikes of order, return, and delivery queries across WhatsApp, web chat, and SMS. Aethrion CX unifies customer history, automates tracking queries, and handles refunds via backend workflows.",
    highlights: [
      { label: "Omnichannel Engagement", desc: "Synchronized queues for WhatsApp, Web Chat, Email, and SMS" },
      { label: "AI Order Bots", desc: "Instant self-serve resolution for order tracking, cancellations, and returns" },
      { label: "Customer 360 History", desc: "Complete purchase history, cart context, and past tickets in one view" },
      { label: "Backend Workflow Sync", desc: "Trigger automated return labels, refunds, and CRM status updates" },
      { label: "Priority Escalations", desc: "Fast-track high-value cart abandoners or frustrated VIP shoppers" },
    ],
    color: "#22c55e",
  },
  {
    id: "bpo",
    label: "BPO",
    icon: "🏢",
    fullLabel: "BPO / Contact Centers",
    capabilitiesBadge: "Agent Assist · QA · Outbound Dialer · SLA Monitoring · Analytics",
    description:
      "BPO and multi-tenant contact centers require rigorous SLA adherence and quality consistency across large agent pools. Aethrion CX slashes handle times with GenAI agent assist, automated QA, and predictive workforce analytics.",
    highlights: [
      { label: "GenAI Real-Time Assist", desc: "Live suggested responses, KB search, and automated call summarization" },
      { label: "Automated QA (100%)", desc: "Evaluate 100% of agent interactions without manual spot-checking" },
      { label: "Outbound Dialer & Campaigns", desc: "Automated outbound campaign dialers for collections and outreach" },
      { label: "Live SLA Monitoring", desc: "Real-time queue tracking, threshold alerts, and breach prevention" },
      { label: "Workforce Analytics", desc: "Actionable agent utilization, CSAT scores, and coaching metrics" },
    ],
    color: "#8b5cf6",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: "🏥",
    fullLabel: "Healthcare & Telehealth",
    capabilitiesBadge: "Omnichannel CCaaS · Intelligent Routing · Patient 360 · QA",
    description:
      "Healthcare providers manage critical patient scheduling and queries with strict privacy standards. Aethrion CX provides unified patient communication, compassionate sentiment monitoring, and intelligent department triage.",
    highlights: [
      { label: "Omnichannel Patient Service", desc: "Unified voice, WhatsApp appointment reminders, and digital web chat" },
      { label: "Intelligent Triage", desc: "Route inquiries to specialized clinics, doctors, or billing specialists" },
      { label: "Patient 360 Context", desc: "Historical appointments, prescription queries, and past notes" },
      { label: "Compassionate QA", desc: "Monitor empathy and tone benchmarks on all critical patient calls" },
    ],
    color: "#ef4444",
  },
  {
    id: "telecom",
    label: "Telecom",
    icon: "📡",
    fullLabel: "Telecom & Internet Service",
    capabilitiesBadge: "High-Volume CCaaS · AI Billing Bots · Sentiment · Churn Prevention",
    description:
      "Telecom operators handle immense interaction volumes across billing, network issues, and plan upgrades. Aethrion CX automates routine tier-1 queries and detects churn indicators through real-time sentiment analysis.",
    highlights: [
      { label: "High-Volume CCaaS", desc: "Scalable voice and digital queues built for millions of interactions" },
      { label: "AI Billing & Plan Bots", desc: "Multilingual self-serve bots resolving data, recharge, and invoice queries" },
      { label: "Churn Risk Sentiment", desc: "Detect acoustic frustration patterns and route to retention specialists" },
      { label: "Social Listening", desc: "Track regional network outage sentiment in real time on social feeds" },
    ],
    color: "#f59e0b",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: "🚚",
    fullLabel: "Logistics & Supply Chain",
    capabilitiesBadge: "Outbound Alerts (SMS/WhatsApp) · Query Automation · Exception Routing",
    description:
      "Logistics companies manage time-sensitive delivery, shipment, and customs inquiries. Aethrion CX powers automated outbound notifications, multi-channel package lookup, and delivery exception escalation.",
    highlights: [
      { label: "Proactive Outbound Alerts", desc: "Automated WhatsApp and SMS notifications for transit milestones" },
      { label: "Instant Tracking Bots", desc: "Self-service tracking across 70+ languages via voice IVR and WhatsApp" },
      { label: "Delivery Exception Routing", desc: "Direct delayed shipments immediately to resolution specialists" },
      { label: "Real-Time Oversight", desc: "Live supervisor visibility into fleet driver and customer queries" },
    ],
    color: "#06b6d4",
  },
  {
    id: "government",
    label: "Government",
    icon: "🏛️",
    fullLabel: "Government & Public Sector",
    capabilitiesBadge: "Citizen Omnichannel · Quality Management · Service Analytics · Audit",
    description:
      "Public sector institutions require accessible, dependable citizen service across diverse languages and dialects. Aethrion CX offers multilingual conversational AI, structured quality management, and transparent service delivery analytics.",
    highlights: [
      { label: "Multilingual Citizen Service", desc: "Support in 12 native Indian languages and 70+ global languages" },
      { label: "Omnichannel Ingestion", desc: "Helpline voice calls, web portals, SMS, and WhatsApp citizen desks" },
      { label: "Service Delivery Analytics", desc: "Clear visibility into grievance resolution times and citizen satisfaction" },
      { label: "Complete Auditability", desc: "Secure interaction recording and traceable case governance" },
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
              Aethrion CX is deployed across industries where customer experience operational quality, CCaaS reliability, and AI automation directly drive business performance.
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
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-slate-100 min-w-0">
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
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5 truncate">
                    {ind.capabilitiesBadge}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 break-words">{ind.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 w-full min-w-0">
                {ind.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex gap-2.5 p-3 sm:p-3.5 rounded-xl min-w-0"
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
