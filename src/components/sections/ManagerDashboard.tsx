import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

function MiniBar({ value, max = 100, color }: { value: number; max?: number; color: string }) {
  return (
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${(value / max) * 100}%`, background: color }}
      />
    </div>
  );
}

function SentimentSparkline({ positive }: { positive: boolean }) {
  const pts = positive
    ? [50, 45, 52, 60, 58, 65, 70, 72, 68, 74]
    : [65, 60, 55, 48, 52, 44, 40, 38, 42, 36];

  const w = 70;
  const h = 24;
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * w);
  const ys = pts.map((v) => h - (v / 80) * h);
  const d = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
  const color = positive ? "#22c55e" : "#ef4444";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-16 sm:w-20 h-6">
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ManagerDashboardMockup() {
  const agents = [
    { name: "Priya S.", channel: "📞 Voice", status: "active", handle: "4:32", qa: "96%", csat: 4.8, trend: true },
    { name: "Arjun M.", channel: "💬 Chat", status: "active", handle: "3:15", qa: "94%", csat: 4.6, trend: true },
    { name: "Kavya R.", channel: "📱 WhatsApp", status: "wrap-up", handle: "2:48", qa: "89%", csat: 4.3, trend: false },
    { name: "Rohan V.", channel: "✉️ Email", status: "active", handle: "5:10", qa: "92%", csat: 4.5, trend: true },
    { name: "Meena K.", channel: "📞 Voice", status: "active", handle: "6:20", qa: "82%", csat: 3.9, trend: false },
  ];

  const statusColor: Record<string, string> = {
    active: "#22c55e",
    "wrap-up": "#f59e0b",
    break: "#94a3b8",
  };

  return (
    <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl w-full min-w-0">
      {/* Header bar */}
      <div className="px-4 sm:px-6 py-3.5 border-b border-white/10 flex items-center justify-between bg-navy-950/80 min-w-0">
        <div className="min-w-0">
          <div className="text-xs sm:text-sm font-bold text-white truncate">Operations Command Center &amp; AI Analytics</div>
          <div className="text-[10px] sm:text-xs text-white/40 truncate">Real-time CCaaS supervision, SLA monitoring &amp; Automated QA</div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[11px] text-green-400 font-semibold">Live Feed</span>
        </div>
      </div>

      {/* Top KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 w-full min-w-0">
        {[
          { label: "Active Interactions", value: "47", sub: "Voice: 18 · Digital: 29", color: "#0ea5e9" },
          { label: "Avg Handle Time (AHT)", value: "4:12", sub: "Target: 5:00 min", color: "#22c55e" },
          { label: "SLA Adherence", value: "94.8%", sub: "Resolution within SLA", color: "#f59e0b" },
          { label: "Predictive CSAT", value: "4.82", sub: "↑ 0.3 vs last week", color: "#22c55e" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-navy-900 p-3.5 sm:p-5 min-w-0">
            <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest mb-1 truncate">{kpi.label}</div>
            <div className="text-lg sm:text-2xl font-black mb-0.5" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
            <div className="text-[10px] text-white/50 truncate">{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5 w-full min-w-0">
        {/* Agent table */}
        <div className="lg:col-span-3 bg-navy-900 p-4 sm:p-5 min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
            Real-Time Agent Rostering, Channel &amp; QA Performance
          </div>
          <div className="overflow-x-auto no-scrollbar w-full min-w-0">
            <table className="w-full text-[11px] sm:text-xs min-w-[340px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 font-medium py-2 pr-2">Agent</th>
                  <th className="text-left text-white/40 font-medium py-2 pr-2">Channel</th>
                  <th className="text-right text-white/40 font-medium py-2 pr-2">AHT</th>
                  <th className="text-right text-white/40 font-medium py-2 pr-2">QA</th>
                  <th className="text-right text-white/40 font-medium py-2 pr-2">CSAT</th>
                  <th className="text-right text-white/40 font-medium py-2">Trend</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((a) => (
                  <tr key={a.name} className="border-b border-white/5 last:border-0">
                    <td className="py-2.5 pr-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: statusColor[a.status] }}
                        />
                        <span className="text-white/80 font-medium whitespace-nowrap">{a.name}</span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-2 text-white/60 text-[10px] sm:text-[11px] whitespace-nowrap">
                      {a.channel}
                    </td>
                    <td className="py-2.5 pr-2 text-right text-white/70 font-mono text-[10px] sm:text-xs">{a.handle}</td>
                    <td className="py-2.5 pr-2 text-right text-accent font-semibold">{a.qa}</td>
                    <td className="py-2.5 pr-2 text-right font-bold" style={{ color: a.csat >= 4.5 ? "#22c55e" : a.csat >= 4.0 ? "#f59e0b" : "#ef4444" }}>
                      {a.csat}
                    </td>
                    <td className="py-2.5 text-right flex justify-end">
                      <SentimentSparkline positive={a.trend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* AI Insights Simulation Panel */}
          <div className="mt-4 p-3 rounded-xl bg-accent/10 border border-accent/25">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-accent text-xs">✨</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                AI Automated Observations &amp; Signals
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] text-white/80">
              <div className="flex items-start gap-1.5">
                <span className="text-green-400 font-bold">•</span>
                <span><strong>First-Contact Resolution:</strong> Increased 6.4% across WhatsApp queues post AI Assist activation.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="text-yellow-400 font-bold">•</span>
                <span><strong>Queue Alert:</strong> Negative sentiment increased 12% in Payments queue — supervisor whisper enabled.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right panels */}
        <div className="lg:col-span-2 bg-navy-900 p-4 sm:p-5 space-y-4 sm:space-y-5 border-t lg:border-t-0 border-white/10 min-w-0">
          {/* Sentiment distribution */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
              Sentiment Distribution (Omnichannel Today)
            </div>
            <div className="space-y-2 bg-navy-950/40 p-3 rounded-xl border border-white/5">
              {[
                { label: "Positive", value: 62, color: "#22c55e" },
                { label: "Neutral", value: 23, color: "#f59e0b" },
                { label: "Negative", value: 15, color: "#ef4444" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-[10px] sm:text-xs mb-0.5">
                    <span className="text-white/60">{s.label}</span>
                    <span className="font-bold" style={{ color: s.color }}>{s.value}%</span>
                  </div>
                  <MiniBar value={s.value} color={s.color} />
                </div>
              ))}
            </div>
          </div>

          {/* QA scores */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
              Automated QA Benchmarks (100% Audited)
            </div>
            <div className="space-y-2 bg-navy-950/40 p-3 rounded-xl border border-white/5">
              {[
                { label: "Compliance & Disclosure Protocol", value: 96, color: "#0ea5e9" },
                { label: "Empathy, Tone & Sentiment Score", value: 91, color: "#8b5cf6" },
                { label: "SLA Response & Resolution Target", value: 94, color: "#22c55e" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-[10px] sm:text-xs mb-0.5">
                    <span className="text-white/60">{s.label}</span>
                    <span className="font-bold text-white/90">{s.value}%</span>
                  </div>
                  <MiniBar value={s.value} color={s.color} />
                </div>
              ))}
            </div>
          </div>

          {/* Escalation alert */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
              Live Supervisor Intervention Alert
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5">
              <span className="text-red-400 text-sm mt-0.5 flex-shrink-0">⚠</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-red-400 truncate">Interaction #4821</span>
                  <span className="text-[10px] text-white/40 truncate">Agent: Kavya R.</span>
                </div>
                <p className="text-[11px] text-white/70 mt-0.5 leading-snug break-words">
                  Tone stress and sentiment drop detected in BFSI queue. Supervisor whisper enabled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManagerDashboard() {
  return (
    <section id="manager" className="section-padding bg-navy-950 overflow-hidden w-full" aria-label="Manager analytics dashboard">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 text-center sm:text-left">
            <SectionLabel light>Operations Command &amp; Analytics</SectionLabel>
            <h2 className="heading-section text-white mb-3 sm:mb-4 break-words">
              Real-Time Visibility for Every Conversation.
            </h2>
            <p className="body-large text-white/60 break-words">
              Supervisors and operations leaders get a unified live command center spanning active queues, agent rostering, acoustic sentiment waveforms, automated QA scores, SLA tracking, and AI insights.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <ManagerDashboardMockup />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 w-full min-w-0">
            {[
              { icon: "👁️", label: "Live Queue & Agent Monitoring", desc: "See every active interaction, channel load, and agent status in real time." },
              { icon: "📈", label: "Predictive CSAT & Analytics", desc: "Track CSAT forecasts, AHT trends, and workforce utilization metrics." },
              { icon: "⚠️", label: "Automated Escalation Alerts", desc: "Get notified instantly when customer sentiment or SLA compliance drops." },
              { icon: "🎓", label: "100% Automated QA & Coaching", desc: "Audit 100% of calls and deliver targeted, objective coaching scorecards." },
            ].map((f) => (
              <div key={f.label} className="bg-navy-900 rounded-xl border border-white/10 p-4 sm:p-5 hover:border-white/20 transition-all duration-200 min-w-0">
                <span className="text-xl mb-2 sm:mb-3 block">{f.icon}</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 break-words">{f.label}</h4>
                <p className="text-xs text-white/50 leading-relaxed break-words">{f.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
