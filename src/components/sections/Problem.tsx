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
    { label: "Voice", icon: "📞", angle: 270, color: "#0ea5e9" },
    { label: "Chat", icon: "💬", angle: 330, color: "#22c55e" },
    { label: "WhatsApp", icon: "📱", angle: 30, color: "#25d366" },
    { label: "Email", icon: "✉️", angle: 90, color: "#8b5cf6" },
    { label: "SMS", icon: "📨", angle: 150, color: "#06b6d4" },
    { label: "Social", icon: "🌐", angle: 210, color: "#f59e0b" },
  ];

  const cx = 140;
  const cy = 140;
  const orbitRadius = 100;
  const centerRadius = 34;
  const nodeRadius = 24;

  return (
    <div className="flex items-center justify-center py-4 sm:py-6">
      <svg
        viewBox="0 0 280 280"
        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 select-none"
        role="img"
        aria-label="Multiple channels converging into one unified platform"
      >
        {/* Subtle background orbit guide */}
        <circle
          cx={cx}
          cy={cy}
          r={orbitRadius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Precision Lines: Strictly from outside center circle to outside channel node */}
        {channelNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const startDist = centerRadius + 4; // 4px gap outside center circle
          const endDist = orbitRadius - nodeRadius - 4; // 4px gap outside channel circle

          const x1 = cx + startDist * Math.cos(rad);
          const y1 = cy + startDist * Math.sin(rad);
          const x2 = cx + endDist * Math.cos(rad);
          const y2 = cy + endDist * Math.sin(rad);

          return (
            <line
              key={node.label + "-line"}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={node.color}
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.8"
            />
          );
        })}

        {/* Center platform node with solid backdrop */}
        <circle
          cx={cx}
          cy={cy}
          r={centerRadius}
          fill="#0b1329"
          stroke="#0ea5e9"
          strokeWidth="2.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r={centerRadius - 4}
          fill="#0ea5e9"
          fillOpacity="0.12"
        />
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="#0ea5e9"
          fontSize="9.5"
          fontWeight="800"
        >
          Aethrion
        </text>
        <text
          x={cx}
          y={cy + 6}
          textAnchor="middle"
          fill="#0ea5e9"
          fontSize="9.5"
          fontWeight="800"
        >
          CX
        </text>
        <text
          x={cx}
          y={cy + 17}
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="6"
          fontWeight="600"
        >
          Platform Core
        </text>

        {/* Channel nodes with solid background & contained typography */}
        {channelNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + orbitRadius * Math.cos(rad);
          const y = cy + orbitRadius * Math.sin(rad);

          return (
            <g key={node.label}>
              {/* Solid dark base circle so background lines cannot bleed through */}
              <circle
                cx={x}
                cy={y}
                r={nodeRadius}
                fill="#0b1329"
                stroke={node.color}
                strokeWidth="1.75"
              />
              {/* Color tint overlay */}
              <circle
                cx={x}
                cy={y}
                r={nodeRadius - 1}
                fill={node.color}
                fillOpacity="0.15"
              />
              {/* Icon */}
              <text
                x={x}
                y={y - 3}
                textAnchor="middle"
                fontSize="11"
              >
                {node.icon}
              </text>
              {/* Label — calibrated font & position to fit 100% within the circle */}
              <text
                x={x}
                y={y + 9}
                textAnchor="middle"
                fill={node.color}
                fontSize="6"
                fontWeight="700"
                letterSpacing="0.1"
              >
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
