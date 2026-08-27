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
      "Agents switch between phone, chat, email, WhatsApp, and multiple internal systems. Customer context gets lost between handoffs, forcing customers to repeat themselves.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    label: "Zero Visibility",
    headline: "Managers Flying Blind",
    description:
      "Managers lack real-time insight into agent activity, customer sentiment, and operational performance. Issues are discovered after the fact, not prevented in real time.",
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
      "Without AI assistance, agents spend disproportionate time searching knowledge bases, switching systems, and handling repetitive queries that could be automated.",
  },
];

function ChannelDiagram() {
  const channelNodes = [
    { label: "Voice", angle: 270, color: "#0ea5e9" },
    { label: "Chat", angle: 342, color: "#22c55e" },
    { label: "Email", angle: 54, color: "#8b5cf6" },
    { label: "WhatsApp", angle: 126, color: "#25d366" },
    { label: "Social", angle: 198, color: "#f59e0b" },
  ];

  const r = 90;
  const cx = 130;
  const cy = 130;

  return (
    <div className="flex items-center justify-center py-8">
      <svg
        viewBox="0 0 260 260"
        className="w-48 h-48 lg:w-60 lg:h-60"
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
        <text x={cx} y={cy - 5} textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="600">
          Aethrion
        </text>
        <text x={cx} y={cy + 7} textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="600">
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
              <text x={x} y={y + 4} textAnchor="middle" fill={node.color} fontSize="7.5" fontWeight="600">
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
    <section id="problem" className="section-padding bg-slate-50" aria-label="Customer experience challenges">
      <div className="container-wide">
        <RevealOnScroll>
          <div className="max-w-2xl mb-16">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="heading-section text-navy-900 mb-4">
              Customer Experience Shouldn&apos;t Be Fragmented.
            </h2>
            <p className="body-large">
              Service organizations today operate across too many disconnected tools, channels, and
              data sources — creating friction for customers and agents alike.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <RevealOnScroll key={p.label} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-5">
                  {p.icon}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  {p.label}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{p.headline}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Convergence visual + closing statement */}
        <RevealOnScroll>
          <div className="bg-navy-900 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
            <ChannelDiagram />
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Aethrion CX brings the entire customer experience operation into one intelligent
                workspace.
              </h3>
              <p className="text-white/60 leading-relaxed">
                Every channel. Every interaction. Every agent. One unified platform with AI at its
                core — so your team can focus on resolution, not navigation.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
