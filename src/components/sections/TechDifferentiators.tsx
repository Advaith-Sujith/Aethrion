import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const differentiators = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "CCaaS & Outbound Dialer",
    headline: "IVR, ACD, Outbound Campaigns & CPaaS",
    description:
      "Full-stack contact center with intelligent ACD routing, smart IVR, automated outbound dialers, and omnichannel communications in one unified platform.",
    badge: "CCaaS + CPaaS",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    label: "Multilingual Conversational AI",
    headline: "Voice & Chat Bots in 70+ Languages",
    description:
      "AI-powered voice and chat bots supporting 70+ languages — including 12 native Indian languages — with contextual memory and zero-loss agent handoffs.",
    badge: "70+ Languages",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    label: "GenAI Agent Assist",
    headline: "Live Suggestions & Next-Best Action",
    description:
      "Real-time suggested responses, automated conversation summarization, and next-best action recommendations powered by generative AI.",
    badge: "GenAI Assist",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    label: "Sentiment Intelligence",
    headline: "Acoustic & Linguistic Emotion Engine",
    description:
      "Real-time emotion detection across voice and text with 85% accuracy — supporting escalation prevention, stress detection, and proactive coaching.",
    badge: "85% Accuracy",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12c0 .778.099 1.533.284 2.253" />
      </svg>
    ),
    label: "AI Social Listening",
    headline: "Brand Sentiment & Automated Response",
    description:
      "Monitor brand mentions across social channels, detect emerging customer sentiment trends, and trigger automated support response workflows.",
    badge: "Social Intelligence",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    label: "Workflow Orchestration",
    headline: "Visual Builder & Core System Connectors",
    description:
      "Connect customer interactions directly with backend ERP, CRM, and transactional systems via low-code visual workflow builders.",
    badge: "Visual Builder",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    label: "Quality Management & QA",
    headline: "100% Interaction Auditing & Compliance",
    description:
      "Automated evaluation of 100% of customer interactions against compliance frameworks, with call recording, scoring, and coaching insights.",
    badge: "100% QA Scoring",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    label: "Predictive Analytics & CSAT",
    headline: "Workforce Optimization & SLA Intelligence",
    description:
      "Automated insights, predictive CSAT modeling, configurable KPI dashboards, and workforce utilization metrics for operational optimization.",
    badge: "Predictive KPIs",
  },
];

export default function TechDifferentiators() {
  return (
    <section id="tech" className="section-padding bg-slate-50 overflow-hidden w-full" aria-label="Technology differentiators">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel>Technology</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-3 sm:mb-4 break-words">
              AI-Native Customer Experience Infrastructure
            </h2>
            <p className="body-large break-words">
              Eight integrated technological pillars powering the Aethrion CX platform — spanning CCaaS, conversational AI, Customer 360, QA, and operational intelligence.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0">
          {differentiators.map((d, i) => (
            <RevealOnScroll key={d.label} delay={i * 50}>
              <div className="group bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col min-w-0">
                <div className="flex items-start justify-between mb-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-accent flex-shrink-0">
                    {d.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 truncate max-w-[65%]">
                    {d.badge}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-navy-900 mb-1 leading-snug break-words">{d.label}</h3>
                <div className="text-[11px] font-medium text-accent mb-1.5 break-words">{d.headline}</div>
                <p className="text-xs text-slate-500 leading-relaxed flex-1 break-words">{d.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
