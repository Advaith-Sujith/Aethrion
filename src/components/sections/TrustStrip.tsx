import AnimatedCounter from "@/components/ui/AnimatedCounter";

const metrics = [
  {
    value: 8,
    prefix: "",
    suffix: "",
    display: "8",
    label: "Integrated Modules",
    sub: "Unified CX operating system",
  },
  {
    value: 70,
    prefix: "",
    suffix: "+",
    display: "70+",
    label: "Languages Supported",
    sub: "Including 12 Indian languages",
  },
  {
    value: 85,
    prefix: "",
    suffix: "%",
    display: "85%",
    label: "Sentiment Accuracy",
    sub: "Across voice and text",
  },
  {
    value: 24,
    prefix: "",
    suffix: "/7",
    display: "24/7",
    label: "Continuous Monitoring",
    sub: "Always-on intelligence",
  },
];

export default function TrustStrip() {
  return (
    <section
      className="bg-white border-b border-slate-100 relative z-10 overflow-hidden w-full"
      aria-label="Platform capabilities and metrics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, idx) => (
            <div
              key={m.label}
              className={`flex flex-col items-center text-center py-5 sm:py-8 px-2 sm:px-4 min-w-0 ${
                idx % 2 === 1 ? "border-l border-slate-100" : ""
              } ${idx >= 2 ? "border-t lg:border-t-0 border-slate-100" : ""} ${
                idx > 0 && idx % 2 === 0 ? "lg:border-l border-slate-100" : ""
              }`}
            >
              <div className="text-xl sm:text-3xl lg:text-4xl font-black text-navy-900 tracking-tight mb-1">
                {m.suffix === "/7" ? (
                  "24/7"
                ) : (
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                )}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mb-0.5 leading-snug truncate max-w-full">
                {m.label}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 leading-tight truncate max-w-full">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
