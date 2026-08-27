"use client";

import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { openContactModal } from "@/components/ui/ContactModal";

export default function FinalCTA() {
  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactModal("demo");
  };

  return (
    <section id="contact" className="section-padding bg-navy-950 relative overflow-hidden w-full" aria-label="Contact AthenaServ Infotech — Aethrion CX">
      {/* Subtle top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent mb-10 sm:mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center min-w-0">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-accent truncate">
                AthenaServ Infotech · Aethrion CX
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-5 break-words">
              One Platform. <span className="text-accent">Every Customer Interaction.</span>
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto break-words">
              Bring communications, conversational AI, customer intelligence, workflow automation, and predictive analytics together with Aethrion CX.
            </p>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 sm:mb-10 w-full min-w-0">
              <Button
                variant="primary"
                size="lg"
                href="mailto:rani@athenaserv.com"
                onClick={handleDemoClick}
                className="w-full sm:w-auto min-w-[200px] px-7 py-3.5 text-center"
              >
                Book a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>

            {/* Direct Contact Card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:px-6 sm:py-3 rounded-2xl bg-navy-900 border border-white/10 mb-8 sm:mb-12 text-xs max-w-full min-w-0">
              <div className="flex items-center gap-2 text-white/70 truncate min-w-0">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="hidden sm:inline">Direct Lead Contact:</span>
                <span className="font-semibold text-white font-mono truncate">rani@athenaserv.com</span>
              </div>
              <button
                onClick={handleDemoClick}
                className="text-accent hover:text-accent-light font-semibold underline underline-offset-2 transition-colors flex-shrink-0"
              >
                Launch Mail / Details →
              </button>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/50 w-full min-w-0">
              {[
                "No commitment required",
                "Tailored to your industry",
                "Dedicated enterprise specialist",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Industry demo tags */}
        <RevealOnScroll delay={150}>
          <div className="mt-10 sm:mt-14 border-t border-white/10 pt-6 sm:pt-10 text-center w-full min-w-0">
            <p className="text-[10px] sm:text-xs text-white/40 font-medium uppercase tracking-widest mb-3 sm:mb-4">
              Enterprise Deployments Across
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {[
                "BFSI",
                "Ecommerce & Retail",
                "BPO / Contact Centers",
                "Healthcare",
                "Telecom",
                "Logistics",
                "Government",
              ].map((ind) => (
                <span
                  key={ind}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 text-[11px] sm:text-xs text-white/60 hover:border-accent/30 hover:text-accent/80 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
