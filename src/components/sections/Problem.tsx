import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    label: "Fragmented Channels",
    headline: "Context Lost Between Systems",
    description:
      "Agents switch between phone, chat, email, WhatsApp, SMS, social, and disconnected CRM tools. Customer context gets lost between handoffs, forcing customers to repeat themselves.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    label: "Zero Visibility",
    headline: "Supervisors Flying Blind",
    description:
      "Managers lack real-time insight into agent performance, sentiment dips, QA scores, and SLA breaches. Issues are discovered after customer churn, not prevented in real time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "High Handle Time",
    headline: "Agents Searching, Not Resolving",
    description:
      "Without AI assistance and integrated Customer 360, agents spend excessive time searching knowledge bases, manually summarizing calls, and handling repetitive tier-1 inquiries.",
  },
];

function ChannelDiagram() {
  const channelNodes = [
    { label: "Voice", angle: 270, color: "#0ea5e9" },
    { label: "Chat", angle: 330, color: "#22c55e" },
    { label: "WhatsApp", angle: 30, color: "#25d366" },
    { label: "Email", angle: 90, color: "#8b5cf6" },
    { label: "SMS", angle: 150, color: "#06b6d4" },
    { label: "Social", angle: 210, color: "#f59e0b" },
  ];

  const r = 90;
  const cx = 130;
  const cy = 130;

  return (
    <div className="flex items-center justify-center py-4 sm:py-8">
      <svg
        viewBox="0 0 260 260"
        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 select-none"
        role="img"
        aria-label="Multiple channels converging into one unified platform"
      >
        {/* Lines from channels to center */}
        {channelNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          return (
            <line
              key={node.label}
              x1={x}
              y1={y}
              x2={cx}
              y2={cy}
              stroke={node.color}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              opacity="0.6"
            />
          );
        })}

        {/* Center platform node */}
        <circle cx={cx} cy={cy} r="28" fill="#0d1630" stroke="#0ea5e9" strokeWidth="2" />
        <text x={cx} y={cy - 5} textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="700">
          Aethrion
        </text>
        <text x={cx} y={cy + 7} textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="700">
          CX
        </text>

        {/* Channel nodes */}
        {channelNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          return (
            <g key={node.label}>
              <circle cx={x} cy={y} r="18" fill={`${node.color}20`} stroke={node.color} strokeWidth="1.5" />
              <text x={x} y={y + 4} textAnchor="middle" fill={node.color} fontSize="7" fontWeight="600">
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-slate-50 overflow-hidden w-full" aria-label="Customer experience challenges">
      <div className="container-wide w-full max-w-full overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 text-center sm:text-left">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-3 sm:mb-4 break-words">
              Customer Experience Shouldn&apos;t Be Fragmented.
            </h2>
            <p className="body-large break-words">
              Service organizations today operate across disconnected tools, isolated channels, and
              siloed data — creating friction for customers, fatigue for agents, and blind spots for managers.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16 w-full min-w-0">
          {problems.map((p, i) => (
            <RevealOnScroll key={p.label} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 h-full min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4 sm:mb-5 flex-shrink-0">
                  {p.icon}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 sm:mb-2">
                  {p.label}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2 sm:mb-3 leading-snug break-words">{p.headline}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed break-words">{p.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Convergence visual + closing statement */}
        <RevealOnScroll>
          <div className="bg-navy-900 rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-6 sm:gap-10 shadow-xl border border-white/5 w-full min-w-0">
            <ChannelDiagram />
            <div className="flex-1 text-center lg:text-left min-w-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight break-words">
                Aethrion CX brings the entire customer experience operation into one intelligent workspace.
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed break-words">
                Every channel. Every interaction. Every agent. One unified platform with AI, CCaaS, Customer 360, and automated QA at its core — so your team can focus on resolution, not navigation.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
