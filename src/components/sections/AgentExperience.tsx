import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

function AgentWorkspaceMockup() {
  return (
    <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-navy-950/60">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-white/30">Agent Hub — Active Session</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[10px] text-green-400 font-medium">Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Left — Customer context */}
        <div className="col-span-4 border-r border-white/10 p-4">
          <div className="text-[9px] font-semibold uppercase tracking-widest text-white/25 mb-3">
            Customer Context
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/60 to-accent-dark flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              P
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white truncate">Priya Sharma</div>
              <div className="text-[9px] text-white/40 truncate">Premium · 5 years</div>
            </div>
          </div>

          {/* Sentiment indicator */}
          <div className="mb-4 p-3 rounded-lg bg-green-400/10 border border-green-400/20">
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-semibold text-green-400">SENTIMENT</span>
              <span className="text-xs font-black text-green-400">78%</span>
            </div>
            <div className="mt-1.5 h-1 bg-white/10 rounded-full">
              <div className="h-full w-[78%] bg-green-400 rounded-full" />
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-2 mb-4">
            {[
              { k: "Last Contact", v: "3 days ago" },
              { k: "Open Cases", v: "1" },
              { k: "Interactions", v: "23" },
              { k: "Channel", v: "WhatsApp" },
            ].map((r) => (
              <div key={r.k} className="flex justify-between">
                <span className="text-[9px] text-white/40">{r.k}</span>
                <span className="text-[9px] font-semibold text-white/70">{r.v}</span>
              </div>
            ))}
          </div>

          {/* Conversation summary */}
          <div className="text-[9px] font-semibold uppercase tracking-widest text-white/25 mb-2">
            AI Summary
          </div>
          <div className="bg-navy-800 rounded-lg p-2.5">
            <p className="text-[9px] text-white/60 leading-relaxed">
              Customer enquiring about credit card reward points redemption. Previous contact was
              for the same issue, unresolved.
            </p>
          </div>
        </div>

        {/* Center — Chat */}
        <div className="col-span-5 flex flex-col border-r border-white/10">
          <div className="p-4 flex-1 overflow-hidden">
            <div className="text-[9px] font-semibold uppercase tracking-widest text-white/25 mb-3">
              Active Conversation · WhatsApp
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-600 flex items-center justify-center text-[8px] text-white flex-shrink-0">
                  P
                </div>
                <div className="bg-navy-800 rounded-xl rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                  <p className="text-[10px] text-white/80">I want to redeem my reward points but the app isn&apos;t letting me.</p>
                  <span className="text-[8px] text-white/30">11:02 AM</span>
                </div>
              </div>
              <div className="flex gap-2 flex-row-reverse">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-[8px] text-white flex-shrink-0">
                  A
                </div>
                <div className="bg-accent/20 border border-accent/20 rounded-xl rounded-tr-none px-2.5 py-1.5 max-w-[85%]">
                  <p className="text-[10px] text-white/80">I can see your account has 12,400 points available. Let me check what&apos;s happening.</p>
                  <span className="text-[8px] text-accent/50">Agent · 11:03 AM</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-slate-600 flex items-center justify-center text-[8px] text-white flex-shrink-0">
                  P
                </div>
                <div className="bg-navy-800 rounded-xl rounded-tl-none px-2.5 py-1.5 max-w-[85%]">
                  <p className="text-[10px] text-white/80">I&apos;ve been trying for 3 days. This is very frustrating.</p>
                  <span className="text-[8px] text-white/30">11:04 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <div className="bg-navy-800 rounded-lg px-3 py-2 flex items-center gap-2">
              <span className="text-[10px] text-white/30 flex-1">Type a reply...</span>
              <button className="w-5 h-5 rounded bg-accent flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right — AI Assist */}
        <div className="col-span-3 p-4">
          <div className="text-[9px] font-semibold uppercase tracking-widest text-white/25 mb-3">
            AI Assist
          </div>

          <div className="space-y-3">
            {/* Suggested response */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-3">
              <div className="text-[9px] font-semibold text-accent mb-1.5">Suggested Response</div>
              <p className="text-[9px] text-white/70 leading-relaxed">
                &ldquo;I apologize for the inconvenience. I can see your points — I&apos;ll manually process the redemption right now and confirm within 2 minutes.&rdquo;
              </p>
              <button className="mt-2 text-[9px] font-semibold text-accent hover:text-accent-light transition-colors">
                Use this →
              </button>
            </div>

            {/* Knowledge */}
            <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-3">
              <div className="text-[9px] font-semibold text-violet-400 mb-1.5">Knowledge</div>
              <p className="text-[9px] text-white/60 leading-relaxed">
                KB-4082: Reward points redemption troubleshooting guide
              </p>
            </div>

            {/* Next best action */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
              <div className="text-[9px] font-semibold text-emerald-400 mb-1.5">Next Best Action</div>
              <p className="text-[9px] text-white/60 leading-relaxed">
                Manually credit points after confirming app issue. Offer callback for verification.
              </p>
            </div>

            {/* Escalation history note */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
              <div className="text-[9px] font-semibold text-amber-400 mb-1.5">⚠ Note</div>
              <p className="text-[9px] text-white/60 leading-relaxed">
                Repeat contact — same issue 3 days ago. Escalate if not resolved in this session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AgentExperience() {
  return (
    <section id="agent" className="section-padding bg-slate-50" aria-label="Agent experience and AI assist workspace">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-12">
            <SectionLabel>Agent Experience</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-4">
              Give Agents Intelligence, Not More Tools.
            </h2>
            <p className="body-large">
              The Aethrion CX agent workspace puts everything in one place — customer context, live
              sentiment, AI-suggested responses, knowledge, and next-best actions — so agents can
              focus entirely on the customer.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <AgentWorkspaceMockup />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { icon: "🧠", label: "AI-Suggested Responses", desc: "Context-aware reply suggestions generated in real time." },
              { icon: "📖", label: "Instant Knowledge Access", desc: "Relevant KB articles surfaced automatically without searching." },
              { icon: "🎯", label: "Next-Best Action", desc: "AI-guided steps for faster, more accurate resolution." },
              { icon: "📋", label: "Auto-Summary", desc: "Conversation summarized automatically at wrap-up." },
            ].map((f) => (
              <div key={f.label} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-card-hover transition-all duration-200">
                <span className="text-xl mb-3 block">{f.icon}</span>
                <h4 className="text-sm font-bold text-navy-900 mb-1.5">{f.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
