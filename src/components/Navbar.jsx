import { useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Partners", href: "#partners" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onSponsorClick, onRegisterClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-steel/20 bg-void/95">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/sense-logo.png"
            alt="SENSE"
            className="h-9 w-9 rounded-full"
          />
          <span className="font-display font-bold tracking-wide text-silver">
            <span className="text-electric">HACK</span>HORIZON
            <span className="text-xs text-steel font-mono ml-1">'26</span>
          </span>
        </a>

      <nav className="hidden lg:flex items-center gap-8 font-body text-sm text-steellight">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-electric transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onSponsorClick}
            className="px-5 py-2.5 rounded-lg border-2 border-steel/50 text-sm font-semibold text-silver hover:border-electric hover:text-electric transition-colors"
          >
            Become a Sponsor
          </button>
          <button onClick={onRegisterClick} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#7DF9FF] text-black font-bold shadow-[0_0_10px_#7DF9FF] hover:text-electric hover:shadow-[0_0_24px_#7DF9FF] transition-all duration-300">
            Register Now
          </button>
        </div>

        <button
          className="lg:hidden text-silver"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-silver mb-1.5" />
          <div className="w-6 h-0.5 bg-silver mb-1.5" />
          <div className="w-6 h-0.5 bg-silver" />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-steel/20 bg-void px-5 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-steellight hover:text-electric"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onSponsorClick();
            }}
            className="px-4 py-2.5 rounded-lg border-2 border-steel/50 text-silver font-semibold text-left"
          >
            Become a Sponsor
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
              onRegisterClick();
            }}
            className="px-4 py-2.5 rounded-lg bg-electric text-void font-bold text-left"
          >
            Register Now
          </button>
        </div>
      )}
    </header>
  );
}
