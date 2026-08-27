import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const channels = [
  { label: "Voice", icon: "📞", color: "#0ea5e9", angle: 270 },
  { label: "Web Chat", icon: "💬", color: "#22c55e", angle: 330 },
  { label: "WhatsApp", icon: "📱", color: "#25d366", angle: 30 },
  { label: "Email", icon: "✉️", color: "#8b5cf6", angle: 90 },
  { label: "SMS", icon: "📨", color: "#06b6d4", angle: 150 },
  { label: "Social", icon: "🌐", color: "#f59e0b", angle: 210 },
];

const enterprise = [
  { label: "CRM 360", icon: "🗃️", color: "#ec4899", angle: 270 },
  { label: "Helpdesk", icon: "🎫", color: "#06b6d4", angle: 330 },
  { label: "QA Audio", icon: "🎙️", color: "#10b981", angle: 30 },
  { label: "Workflow", icon: "🔄", color: "#f59e0b", angle: 90 },
  { label: "Analytics", icon: "📊", color: "#22c55e", angle: 150 },
  { label: "GenAI", icon: "🤖", color: "#8b5cf6", angle: 210 },
];

const cx = 230;
const cy = 230;
const R_CENTER = 50;
const R_INNER = 136;
const R_CHAN = 24;
const R_OUTER = 202;
const R_ENT = 23;

function ArchDiagram() {
  return (
    <svg
      viewBox="0 0 460 460"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto select-none"
      role="img"
      aria-label="Aethrion CX architecture diagram showing channel and enterprise integrations"
    >
      {/* Outer ring dashed orbit */}
      <circle cx={cx} cy={cy} r={R_OUTER} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />
      {/* Inner ring dashed orbit */}
      <circle cx={cx} cy={cy} r={R_INNER} fill="none" stroke="rgba(14,165,233,0.12)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Connection lines — Center to Channel Layer (Strictly outside circle boundaries) */}
      {channels.map((ch) => {
        const rad = (ch.angle * Math.PI) / 180;
        const startDist = R_CENTER + 4;
        const endDist = R_INNER - R_CHAN - 4;

        const x1 = cx + startDist * Math.cos(rad);
        const y1 = cy + startDist * Math.sin(rad);
        const x2 = cx + endDist * Math.cos(rad);
        const y2 = cy + endDist * Math.sin(rad);

        return (
          <line
            key={ch.label + "-line"}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={ch.color}
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.6"
          />
        );
      })}

      {/* Connection lines — Channel Layer to Enterprise Layer (Strictly outside circle boundaries) */}
      {enterprise.map((e) => {
        const rad = (e.angle * Math.PI) / 180;
        const startDist = R_INNER + R_CHAN + 4;
        const endDist = R_OUTER - R_ENT - 4;

        const x1 = cx + startDist * Math.cos(rad);
        const y1 = cy + startDist * Math.sin(rad);
        const x2 = cx + endDist * Math.cos(rad);
        const y2 = cy + endDist * Math.sin(rad);

        return (
          <line
            key={e.label + "-line"}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={e.color}
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.45"
          />
        );
      })}

      {/* Center platform with solid backdrop */}
      <circle cx={cx} cy={cy} r={R_CENTER} fill="#0b1329" stroke="#0ea5e9" strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r={R_CENTER - 5} fill="#0ea5e9" fillOpacity="0.09" />
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#0ea5e9" fontSize="11" fontWeight="800">
        Aethrion CX
      </text>
      <text x={cx} y={cy + 6} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8" fontWeight="600">
        Platform Core
      </text>
      <text x={cx} y={cy + 18} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6.5">
        CCaaS · AI · CRM 360
      </text>

      {/* Channel nodes (inner ring) with solid backdrop & contained text */}
      {channels.map((ch) => {
        const rad = (ch.angle * Math.PI) / 180;
        const x = cx + R_INNER * Math.cos(rad);
        const y = cy + R_INNER * Math.sin(rad);

        return (
          <g key={ch.label}>
            <circle cx={x} cy={y} r={R_CHAN} fill="#0b1329" stroke={ch.color} strokeWidth="1.5" />
            <circle cx={x} cy={y} r={R_CHAN - 1} fill={ch.color} fillOpacity="0.15" />
            <text x={x} y={y - 3} textAnchor="middle" fontSize="11">{ch.icon}</text>
            <text
              x={x}
              y={y + 9}
              textAnchor="middle"
              fill={ch.color}
              fontSize="5.8"
              fontWeight="700"
              letterSpacing="0.1"
            >
              {ch.label}
            </text>
          </g>
        );
      })}

      {/* Enterprise nodes (outer ring) with solid backdrop & contained text */}
      {enterprise.map((e) => {
        const rad = (e.angle * Math.PI) / 180;
        const x = cx + R_OUTER * Math.cos(rad);
        const y = cy + R_OUTER * Math.sin(rad);

        return (
          <g key={e.label}>
            <circle cx={x} cy={y} r={R_ENT} fill="#0b1329" stroke={e.color} strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx={x} cy={y} r={R_ENT - 1} fill={e.color} fillOpacity="0.15" />
            <text x={x} y={y - 3} textAnchor="middle" fontSize="10">{e.icon}</text>
            <text
              x={x}
              y={y + 9}
              textAnchor="middle"
              fill={e.color}
              fontSize="5.5"
              fontWeight="700"
              letterSpacing="0.1"
            >
              {e.label}
            </text>
          </g>
        );
      })}

      {/* Ring labels positioned in quiet areas */}
      <text x={cx - R_INNER + 12} y={cy - R_INNER - 12} textAnchor="middle" fill="rgba(14,165,233,0.7)" fontSize="7" fontWeight="700">
        CHANNEL LAYER
      </text>
      <text x={cx - R_OUTER + 32} y={cy - R_OUTER - 12} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontWeight="700">
        ENTERPRISE &amp; AI LAYER
      </text>
    </svg>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding bg-slate-50 overflow-hidden w-full" aria-label="Platform architecture and integrations">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full min-w-0">
          <RevealOnScroll direction="left">
            <div className="min-w-0">
              <SectionLabel>Architecture</SectionLabel>
              <h2 className="heading-section text-navy-900 mb-3 sm:mb-4 break-words">
                Connect Customer Experience to Your Enterprise Stack.
              </h2>
              <p className="body-large mb-6 sm:mb-8 break-words">
                Aethrion CX sits at the center of your customer experience ecosystem — connecting
                inbound channels, conversational AI, Customer 360 context, and enterprise backend systems into one coordinated platform.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-[11px] sm:text-xs font-bold flex-shrink-0">1</span>
                    <span>Channel Ingestion Layer</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {channels.map((ch) => (
                      <span
                        key={ch.label}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border text-[11px] sm:text-xs font-medium"
                        style={{ borderColor: `${ch.color}40`, color: ch.color, background: `${ch.color}10` }}
                      >
                        {ch.icon} {ch.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-[11px] sm:text-xs font-bold flex-shrink-0">2</span>
                    <span>Enterprise &amp; AI Integration Layer</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {enterprise.map((e) => (
                      <span
                        key={e.label}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border text-[11px] sm:text-xs font-medium border-slate-300 text-slate-700 bg-white"
                      >
                        {e.icon} {e.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-navy-900 rounded-xl border border-white/5 min-w-0">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed break-words">
                  Aethrion CX uses standard REST API and webhook integration models. Connect to your
                  existing CRM, helpdesk, payment gateways, and core banking systems without replacing your current infrastructure.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100}>
            <div className="bg-navy-950 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-xl w-full min-w-0">
              <ArchDiagram />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
