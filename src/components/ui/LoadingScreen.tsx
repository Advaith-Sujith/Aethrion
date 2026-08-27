"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Smooth initial experience: complete loader after asset readiness
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-navy-950 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        loading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!loading}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="relative flex flex-col items-center text-center p-6 max-w-sm">
        {/* Animated Brand Logo */}
        <div className="relative w-18 h-18 mb-5">
          <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-md animate-ping opacity-40" />
          <div className="relative w-18 h-18 rounded-2xl bg-navy-900/90 border border-white/20 p-3 shadow-2xl flex items-center justify-center backdrop-blur-md">
            <BrandLogo className="w-full h-full object-contain filter drop-shadow-md" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-xl font-bold text-white tracking-tight mb-1">
          Aethrion CX
        </div>
        <div className="text-xs font-medium text-white/50 tracking-wide uppercase mb-6">
          AthenaServ Infotech
        </div>

        {/* High-tech Progress bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative mb-3">
          <div className="h-full bg-gradient-to-r from-accent via-accent-light to-accent rounded-full w-full animate-[flowLine_1.2s_ease-in-out_infinite]" />
        </div>

        <div className="text-[11px] text-white/40 tracking-wider font-mono">
          INITIALIZING PLATFORM WORKSPACE
        </div>
      </div>
    </div>
  );
}
