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
    { name: "Priya S.", status: "active", handle: "4:32", csat: 4.8, calls: 24, trend: true },
    { name: "Arjun M.", status: "active", handle: "3:15", csat: 4.6, calls: 28, trend: true },
    { name: "Kavya R.", status: "wrap-up", handle: "2:48", csat: 4.3, calls: 19, trend: false },
    { name: "Rohan V.", status: "break", handle: "—", csat: 4.5, calls: 21, trend: true },
    { name: "Meena K.", status: "active", handle: "7:20", csat: 3.9, calls: 16, trend: false },
  ];

  const statusColor: Record<string, string> = {
    active: "#22c55e",
    "wrap-up": "#f59e0b",
    break: "#94a3b8",
  };

  return (
    <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Header bar */}
      <div className="px-4 sm:px-6 py-3.5 border-b border-white/10 flex items-center justify-between bg-navy-950/80">
        <div>
          <div className="text-xs sm:text-sm font-bold text-white">Operations Command Center</div>
          <div className="text-[10px] sm:text-xs text-white/40">Real-time supervision · 30s refresh</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-[11px] text-green-400 font-semibold">Live Feed</span>
        </div>
      </div>

      {/* Top KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
        {[
          { label: "Active Interactions", value: "47", sub: "+8 in queue", color: "#0ea5e9" },
          { label: "Avg Handle Time", value: "4:12", sub: "Target: 5:00", color: "#22c55e" },
          { label: "SLA Adherence", value: "93%", sub: "7% at risk", color: "#f59e0b" },
          { label: "Live CSAT Score", value: "4.5", sub: "↑ 0.3 vs benchmark", color: "#22c55e" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-navy-900 p-3.5 sm:p-5">
            <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest mb-1 truncate">{kpi.label}</div>
            <div className="text-lg sm:text-2xl font-black mb-0.5" style={{ color: kpi.color }}>
              {kpi.value}
            </div>
            <div className="text-[10px] text-white/50">{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5">
        {/* Agent table */}
        <div className="lg:col-span-3 bg-navy-900 p-4 sm:p-5">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-3">
            Real-Time Agent Rostering &amp; Performance
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-[11px] sm:text-xs min-w-[320px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 font-medium py-2 pr-2">Agent</th>
                  <th className="text-left text-white/40 font-medium py-2 pr-2">Status</th>
                  <th className="text-right text-white/40 font-medium py-2 pr-2">AHT</th>
                  <th className="text-right text-white/40 font-medium py-2 pr-2">CSAT</th>
                  <th className="text-right text-white/40 font-medium py-2">Trend</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((a) => (
                  <tr key={a.name} className="border-b border-white/5 last:border-0">
                    <td className="py-2.5 pr-2">
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: statusColor[a.status] }}
                        />
                        <span className="text-white/80 font-medium whitespace-nowrap">{a.name}</span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-2">
                      <span className="text-white/50 capitalize text-[10px]">{a.status}</span>
                    </td>
                    <td className="py-2.5 pr-2 text-right text-white/70 font-mono text-[10px] sm:text-xs">{a.handle}</td>
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
        </div>

        {/* Right panels */}
        <div className="lg:col-span-2 bg-navy-900 p-4 sm:p-5 space-y-4 sm:space-y-5 border-t lg:border-t-0 border-white/10">
          {/* Sentiment distribution */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-2">
              Sentiment Distribution (Today)
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
              Automated QA Benchmarks
            </div>
            <div className="space-y-2 bg-navy-950/40 p-3 rounded-xl border border-white/5">
              {[
                { label: "Compliance & Disclosure", value: 94, color: "#0ea5e9" },
                { label: "Empathy & Active Listening", value: 87, color: "#8b5cf6" },
                { label: "First Contact Resolution", value: 91, color: "#22c55e" },
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
              Active Supervisor Alert
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5">
              <span className="text-red-400 text-sm mt-0.5">⚠</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-red-400">Interaction #4821</span>
                  <span className="text-[10px] text-white/40">Agent: Kavya R.</span>
                </div>
                <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
                  Sentiment drop detected in BFSI queue. Supervisor intervention recommended.
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
    <section id="manager" className="section-padding bg-navy-950" aria-label="Manager analytics dashboard">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 text-center sm:text-left">
            <SectionLabel light>Manager Visibility</SectionLabel>
            <h2 className="heading-section text-white mb-3 sm:mb-4">
              Real-Time Visibility for Every Conversation.
            </h2>
            <p className="body-large text-white/60">
              Supervisors and operations leaders get a live view of all customer interactions, agent
              performance, sentiment trends, automated QA scores, and escalation risks in one command
              center.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <ManagerDashboardMockup />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {[
              { icon: "👁️", label: "Live Monitoring", desc: "See every active interaction and agent status in real time." },
              { icon: "📈", label: "Performance Trends", desc: "Track CSAT, AHT, and quality scores over time." },
              { icon: "⚠️", label: "Escalation Alerts", desc: "Get notified instantly when sentiment or quality drops." },
              { icon: "🎓", label: "Coaching Tools", desc: "Flag interactions for review and deliver targeted coaching." },
            ].map((f) => (
              <div key={f.label} className="bg-navy-900 rounded-xl border border-white/10 p-4 sm:p-5 hover:border-white/20 transition-all duration-200">
                <span className="text-xl mb-2 sm:mb-3 block">{f.icon}</span>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{f.label}</h4>
                <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
