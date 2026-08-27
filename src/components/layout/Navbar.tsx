"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { openContactModal } from "@/components/ui/ContactModal";

// Nav links in the exact chronological order sections appear on the page
const navLinks = [
  { label: "Platform",     href: "#platform" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology",   href: "#tech" },
  { label: "Modules",      href: "#modules" },
  { label: "Sentiment",    href: "#sentiment" },
  { label: "Industries",   href: "#industries" },
  { label: "Customer 360", href: "#customer360" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    openContactModal("demo");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-navy-950/40 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Brand Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5 group select-none"
              aria-label="Aethrion CX — Home"
            >
              <div className="w-8 h-8 relative flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="32" height="32" rx="8" fill="#0ea5e9" />
                  <path
                    d="M8 22L14 10L20 18L24 14"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="14" r="2" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                  Aethrion CX
                </span>
                <span className="text-[10px] font-medium tracking-wide text-white/50">
                  by AthenaServ Infotech
                </span>
              </div>
            </a>

            {/* Desktop Nav in strict page section order */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#platform")}
                className="text-xs font-medium text-white/70 hover:text-white transition-colors"
              >
                Explore Platform
              </button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleDemoClick}
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/98 backdrop-blur-md lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-8">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 mb-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#platform");
                }}
                fullWidth
              >
                Explore Platform
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={handleDemoClick}
                fullWidth
              >
                Book a Demo
              </Button>
            </div>

            <p className="mt-6 text-center text-white/40 text-xs">
              Aethrion CX by AthenaServ Infotech
            </p>
          </div>
        </div>
      )}
    </>
  );
}
