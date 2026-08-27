import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const channels = [
  { label: "Voice", icon: "📞", color: "#0ea5e9", angle: 270 },
  { label: "Chat", icon: "💬", color: "#22c55e", angle: 330 },
  { label: "WhatsApp", icon: "📱", color: "#25d366", angle: 30 },
  { label: "Email", icon: "✉️", color: "#8b5cf6", angle: 90 },
  { label: "Social", icon: "🌐", color: "#f59e0b", angle: 150 },
  { label: "CRM", icon: "🗃️", color: "#ec4899", angle: 210 },
];

const enterprise = [
  { label: "Helpdesk", icon: "🎫", color: "#06b6d4", angle: 270 },
  { label: "Analytics", icon: "📊", color: "#10b981", angle: 330 },
  { label: "Backend", icon: "⚙️", color: "#94a3b8", angle: 30 },
  { label: "Workflow", icon: "🔄", color: "#f59e0b", angle: 90 },
  { label: "Reporting", icon: "📈", color: "#22c55e", angle: 150 },
  { label: "AI Engine", icon: "🤖", color: "#8b5cf6", angle: 210 },
];

function ArchDiagram() {
  const cx = 220;
  const cy = 220;
  const r1 = 130; // channel ring
  const r2 = 200; // enterprise ring

  return (
    <svg
      viewBox="0 0 440 440"
      className="w-full max-w-lg mx-auto"
      role="img"
      aria-label="Aethrion CX architecture diagram showing channel and enterprise integrations"
    >
      {/* Outer ring dashed circle */}
      <circle cx={cx} cy={cy} r={r2} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
      {/* Inner ring dashed circle */}
      <circle cx={cx} cy={cy} r={r1} fill="none" stroke="rgba(14,165,233,0.15)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Connection lines — channels */}
      {channels.map((ch) => {
        const rad = (ch.angle * Math.PI) / 180;
        const x1 = cx + (r1 - 24) * Math.cos(rad);
        const y1 = cy + (r1 - 24) * Math.sin(rad);
        return (
          <line
            key={ch.label + "-line"}
            x1={cx}
            y1={cy}
            x2={x1}
            y2={y1}
            stroke={ch.color}
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        );
      })}

      {/* Connection lines — enterprise */}
      {enterprise.map((e) => {
        const rad = (e.angle * Math.PI) / 180;
        const x1 = cx + (r1 + 22) * Math.cos(rad);
        const y1 = cy + (r1 + 22) * Math.sin(rad);
        const x2 = cx + (r2 - 24) * Math.cos(rad);
        const y2 = cy + (r2 - 24) * Math.sin(rad);
        return (
          <line
            key={e.label + "-line"}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={e.color}
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.3"
          />
        );
      })}

      {/* Center platform */}
      <circle cx={cx} cy={cy} r="55" fill="#0d1630" stroke="#0ea5e9" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="48" fill="#0ea5e9" fillOpacity="0.06" />
      <text x={cx} y={cy - 10} textAnchor="middle" fill="#0ea5e9" fontSize="11" fontWeight="700">
        Aethrion CX
      </text>
      <text x={cx} y={cy + 5} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">
        Platform Core
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7">
        AI · Omnichannel · Analytics
      </text>

      {/* Channel nodes (inner ring) */}
      {channels.map((ch) => {
        const rad = (ch.angle * Math.PI) / 180;
        const x = cx + r1 * Math.cos(rad);
        const y = cy + r1 * Math.sin(rad);
        return (
          <g key={ch.label}>
            <circle cx={x} cy={y} r="22" fill={`${ch.color}18`} stroke={ch.color} strokeWidth="1.5" />
            <text x={x} y={y - 3} textAnchor="middle" fontSize="11">{ch.icon}</text>
            <text x={x} y={y + 11} textAnchor="middle" fill={ch.color} fontSize="6.5" fontWeight="600">
              {ch.label}
            </text>
          </g>
        );
      })}

      {/* Enterprise nodes (outer ring) */}
      {enterprise.map((e) => {
        const rad = (e.angle * Math.PI) / 180;
        const x = cx + r2 * Math.cos(rad);
        const y = cy + r2 * Math.sin(rad);
        return (
          <g key={e.label}>
            <circle cx={x} cy={y} r="20" fill={`${e.color}12`} stroke={`${e.color}60`} strokeWidth="1" strokeDasharray="3 2" />
            <text x={x} y={y - 3} textAnchor="middle" fontSize="10">{e.icon}</text>
            <text x={x} y={y + 11} textAnchor="middle" fill={`${e.color}99`} fontSize="6" fontWeight="600">
              {e.label}
            </text>
          </g>
        );
      })}

      {/* Ring labels */}
      <text x={cx - r1 + 10} y={cy - r1 - 12} textAnchor="middle" fill="rgba(14,165,233,0.5)" fontSize="7" fontWeight="600">
        CHANNEL LAYER
      </text>
      <text x={cx - r2 + 30} y={cy - r2 - 12} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="7" fontWeight="600">
        ENTERPRISE INTEGRATIONS
      </text>
    </svg>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding bg-slate-50" aria-label="Platform architecture and integrations">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div>
              <SectionLabel>Architecture</SectionLabel>
              <h2 className="heading-section text-navy-900 mb-4">
                Connect Customer Experience to Your Enterprise Stack.
              </h2>
              <p className="body-large mb-8">
                Aethrion CX sits at the center of your customer experience ecosystem — connecting
                inbound channels, customer-facing AI, and enterprise backend systems into one
                coordinated platform.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">1</span>
                    Channel Layer
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {channels.map((ch) => (
                      <span
                        key={ch.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium"
                        style={{ borderColor: `${ch.color}40`, color: ch.color, background: `${ch.color}10` }}
                      >
                        {ch.icon} {ch.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">2</span>
                    Enterprise Integration Layer
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {enterprise.map((e) => (
                      <span
                        key={e.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium border-slate-300 text-slate-600"
                      >
                        {e.icon} {e.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-navy-900 rounded-xl">
                <p className="text-sm text-white/70 leading-relaxed">
                  Aethrion CX uses a standard API and webhook integration model. Connect to your
                  existing CRM, helpdesk, and backend systems without replacing your current
                  infrastructure.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100}>
            <div className="bg-navy-950 rounded-2xl p-8 border border-white/10">
              <ArchDiagram />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
