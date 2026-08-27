import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    label: "Contact Initiation",
    description:
      "Customers reach out through voice, chat, WhatsApp, email, or social channels. Aethrion CX receives the interaction and immediately begins real-time analysis.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    color: "bg-accent",
    channels: ["Voice", "Chat", "Email", "WhatsApp", "Social"],
  },
  {
    number: "02",
    label: "AI Triage & Auto-Resolve",
    description:
      "AI identifies customer intent, handles routine queries autonomously, and routes complex cases to the right agent with full conversation context and sentiment data.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: "bg-violet-500",
    channels: ["Intent detection", "Auto-resolve", "Smart routing", "Context tagging"],
  },
  {
    number: "03",
    label: "Agent Assist & Escalation",
    description:
      "Agents receive complete customer history, AI-suggested actions, real-time sentiment signals, and knowledge recommendations — everything needed to resolve without switching tools.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    color: "bg-emerald-500",
    channels: ["Customer 360", "AI Assist", "Sentiment feed", "Knowledge base"],
  },
  {
    number: "04",
    label: "Supervision & QA",
    description:
      "Supervisors monitor all interactions, sentiment trends, quality scores, and agent performance in real time — and can intervene or coach before issues escalate.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: "bg-amber-500",
    channels: ["Live monitoring", "QA dashboard", "Sentiment trends", "Performance metrics"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-navy-950" aria-label="How Aethrion CX works">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel light>Workflow Engine</SectionLabel>
            <h2 className="heading-section text-white mb-3 sm:mb-4">
              From Contact to Resolution —{" "}
              <span className="text-accent">One Seamless Flow</span>
            </h2>
            <p className="body-large text-white/60">
              Every customer interaction follows an intelligent path from initiation to resolution,
              with AI working at every step.
            </p>
          </div>
        </RevealOnScroll>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.number} delay={i * 80}>
              <div className="relative group h-full">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-full w-6 h-px bg-white/10 z-10 hidden lg:block" />
                )}

                <div className="bg-navy-900 border border-white/10 rounded-2xl p-5 sm:p-6 h-full hover:border-white/20 transition-all duration-300 shadow-lg">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${step.color} flex items-center justify-center text-white flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <span className="text-3xl sm:text-4xl font-black text-white/10 leading-none select-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/30 mb-1.5">
                    Step {step.number}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">{step.label}</h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">{step.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {step.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Closing line */}
        <RevealOnScroll>
          <div className="text-center border-t border-white/10 pt-8 sm:pt-12">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
              Faster resolutions. Lower handle time.{" "}
              <span className="text-accent">Better customer experiences.</span>
            </p>
            <p className="text-white/50 text-xs sm:text-sm">
              AI-assisted at every touchpoint. Human-led where it matters.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
