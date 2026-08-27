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
      className="bg-white border-b border-slate-100"
      aria-label="Platform capabilities and metrics"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col items-center text-center py-8 px-6 ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-1">
                {m.suffix === "/7" ? (
                  "24/7"
                ) : (
                  <>
                    <AnimatedCounter target={m.value} suffix={m.suffix} />
                  </>
                )}
              </div>
              <div className="text-sm font-semibold text-slate-700 mb-0.5">{m.label}</div>
              <div className="text-xs text-slate-400">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
