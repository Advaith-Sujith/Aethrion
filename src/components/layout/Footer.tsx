// One link per section, in the exact order sections appear on the page
const sectionLinks = [
  { label: "Platform Overview",      href: "#platform" },
  { label: "How It Works",           href: "#how-it-works" },
  { label: "Technology",             href: "#tech" },
  { label: "Product Modules",        href: "#modules" },
  { label: "Sentiment Analytics",    href: "#sentiment" },
  { label: "Industries",             href: "#industries" },
  { label: "Customer 360",           href: "#customer360" },
  { label: "Agent Experience",       href: "#agent" },
  { label: "Manager Dashboard",      href: "#manager" },
  { label: "Architecture",           href: "#architecture" },
  { label: "Contact Us",             href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 border-b border-white/10">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <div className="w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="32" height="32" rx="8" fill="#0ea5e9" />
                  <path d="M8 22L14 10L20 18L24 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="24" cy="14" r="2" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">Aethrion CX</span>
                <span className="text-[10px] font-medium tracking-wide text-white/50">
                  by AthenaServ Infotech
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xs mb-5 sm:mb-6">
              An AI-powered Customer Experience Platform that unifies every customer interaction,
              channel, and intelligence into one workspace.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-accent hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section links — one per section in page order */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/40 mb-4 sm:mb-5">
              On This Page
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-2.5 sm:gap-y-3">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-150 block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-white/40">
            © {new Date().getFullYear()} AthenaServ Infotech. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-[11px] sm:text-xs text-white/40 hover:text-white/70 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
