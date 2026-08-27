import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

function Customer360Profile() {
  const channels = [
    { label: "Voice", count: 18, color: "#0ea5e9", icon: "📞" },
    { label: "Chat", count: 12, color: "#22c55e", icon: "💬" },
    { label: "Email", count: 9, color: "#8b5cf6", icon: "✉️" },
    { label: "WhatsApp", count: 8, color: "#25d366", icon: "📱" },
  ];

  const timeline = [
    { date: "27 Aug", channel: "📞", summary: "Loan application status enquiry. Resolved.", sentiment: "positive" },
    { date: "22 Aug", channel: "💬", summary: "Account balance check. Self-served.", sentiment: "neutral" },
    { date: "15 Aug", channel: "✉️", summary: "Document submission query. Escalated to specialist.", sentiment: "negative" },
    { date: "08 Aug", channel: "📞", summary: "Branch appointment scheduled.", sentiment: "positive" },
  ];

  return (
    <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden">
      {/* Profile header */}
      <div className="p-6 border-b border-white/10 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/70 to-accent-dark flex items-center justify-center text-2xl font-black text-white flex-shrink-0">
          R
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-bold text-white">Rajesh Kumar</h4>
          <p className="text-xs text-white/40">Account #ACC-847291 · Premium Member · Since Jan 2020</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-400/20 text-green-400">
              Positive Sentiment
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/20 text-accent">
              High Value
            </span>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <div className="text-2xl font-black text-white">4.7</div>
          <div className="text-xs text-white/40">CSAT Score</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {/* Stats */}
        <div className="bg-navy-900 p-5">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
            Summary
          </div>
          <div className="space-y-3">
            {[
              { label: "Total Interactions", value: "47" },
              { label: "Open Cases", value: "1" },
              { label: "Resolved Cases", value: "24" },
              { label: "Avg Resolution Time", value: "8.2 min" },
            ].map((s) => (
              <div key={s.label} className="flex justify-between items-center">
                <span className="text-xs text-white/50">{s.label}</span>
                <span className="text-xs font-bold text-white/80">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Channel breakdown */}
        <div className="bg-navy-900 p-5">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
            Channel History
          </div>
          <div className="space-y-3">
            {channels.map((ch) => (
              <div key={ch.label} className="flex items-center gap-2">
                <span className="text-sm">{ch.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-white/60">{ch.label}</span>
                    <span className="font-semibold" style={{ color: ch.color }}>
                      {ch.count}
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(ch.count / 18) * 100}%`, background: ch.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CRM info */}
        <div className="bg-navy-900 p-5">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
            CRM Data
          </div>
          <div className="space-y-3">
            {[
              { label: "Product", value: "Home Loan" },
              { label: "Branch", value: "Mumbai — Andheri" },
              { label: "Manager", value: "Sonal Mehta" },
              { label: "Renewal Date", value: "Mar 2026" },
            ].map((s) => (
              <div key={s.label} className="flex justify-between items-start gap-4">
                <span className="text-xs text-white/50 shrink-0">{s.label}</span>
                <span className="text-xs font-medium text-white/80 text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interaction timeline */}
      <div className="p-6">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">
          Recent Interactions
        </div>
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <span className="text-base">{t.channel}</span>
                {i < timeline.length - 1 && <div className="w-px h-6 bg-white/10" />}
              </div>
              <div className="flex-1 min-w-0 pb-2">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] text-white/30">{t.date}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      t.sentiment === "positive"
                        ? "bg-green-400/20 text-green-400"
                        : t.sentiment === "neutral"
                        ? "bg-yellow-400/20 text-yellow-400"
                        : "bg-red-400/20 text-red-400"
                    }`}
                  >
                    {t.sentiment}
                  </span>
                </div>
                <p className="text-xs text-white/60 leading-snug">{t.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Customer360() {
  return (
    <section id="customer360" className="section-padding bg-white" aria-label="Customer 360 unified view">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll direction="left">
            <div>
              <SectionLabel>Customer Intelligence</SectionLabel>
              <h2 className="heading-section text-navy-900 mb-4">Every Customer Detail. One View.</h2>
              <p className="body-large mb-8">
                Agents no longer need to switch between systems to understand a customer. Aethrion
                CX assembles the complete picture — interaction history, channel preferences, CRM
                data, open cases, and sentiment trends — in one unified workspace.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: "🕐",
                    label: "Complete Interaction History",
                    desc: "Every conversation across every channel, in a single timeline.",
                  },
                  {
                    icon: "📊",
                    label: "Channel Usage Breakdown",
                    desc: "Understand how and where each customer prefers to engage.",
                  },
                  {
                    icon: "💼",
                    label: "CRM & Account Data",
                    desc: "Product holdings, account status, and relationship information in context.",
                  },
                  {
                    icon: "🎯",
                    label: "Sentiment & CSAT History",
                    desc: "Emotional trends and satisfaction scores to guide the conversation.",
                  },
                  {
                    icon: "🎫",
                    label: "Open Cases & Cases History",
                    desc: "Active support cases and resolution history without switching to a helpdesk.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-navy-900 mb-0.5">{item.label}</div>
                      <div className="text-sm text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={100}>
            <Customer360Profile />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
