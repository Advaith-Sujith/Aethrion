import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ui/ContactModal";

export default function NotFound() {
  const quickLinks = [
    { label: "Platform Overview", href: "/#platform", desc: "Omnichannel CCaaS, Bots & AI Assist" },
    { label: "How It Works", href: "/#how-it-works", desc: "4-step flow from contact to resolution" },
    { label: "Product Modules", href: "/#modules", desc: "8 natively integrated CX modules" },
    { label: "Sentiment Analytics", href: "/#sentiment", desc: "Real-time voice and text intelligence" },
    { label: "Industry Solutions", href: "/#industries", desc: "BFSI, Retail, BPO, Telecom & more" },
    { label: "Architecture", href: "/#architecture", desc: "Enterprise integration and stack connectivity" },
  ];

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-between text-white selection:bg-accent selection:text-white">
      <Navbar />
      <ContactModal />

      <main className="flex-1 flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Error 404 — Page Not Found
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Lost in the <span className="text-accent">Workspace?</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            The page or resource you are looking for does not exist, has been relocated, or is temporarily unavailable.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-accent-glow"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Return to Homepage
            </Link>

            <Link
              href="/#platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 border border-white/15 hover:border-white/30 text-white font-semibold text-sm transition-all duration-200"
            >
              Explore Platform
            </Link>
          </div>

          {/* Quick links directory */}
          <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 text-left backdrop-blur-sm">
            <div className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase tracking-widest mb-3 sm:mb-4">
              Explore Aethrion CX Sections
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/30 transition-all duration-200 group"
                >
                  <div className="text-xs font-bold text-white group-hover:text-accent transition-colors mb-0.5">
                    {link.label} →
                  </div>
                  <div className="text-[11px] text-white/40 leading-snug">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
