import { useEffect, useState } from "react";

const REGISTRATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc887ITa9I2rgWcvSNfhCJGJTBZZdso8IWvzjN8OXXKFkkZjQ/viewform"

export default function EntryModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("hh26_modal_seen");
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("hh26_modal_seen", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md card-panel border-electric/40 shadow-[0_0_60px_-10px_rgba(47,184,255,0.4)] p-8 text-center animate-[fadeIn_.3s_ease]">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-steellight hover:text-electric transition-colors"
        >
          ✕
        </button>
        <p className="section-eyebrow mb-3">SENSE · IIUI presents</p>
        <h2 className="font-display font-extrabold text-2xl md:text-3xl leading-tight mb-2">
          REGISTRATIONS
          <br />
          <span className="text-electric">EXTENDED</span>
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent my-4" />
        <p className="text-electric text-xs font-mono mb-2 uppercase tracking-wider">
          Dates Extended — Will Be Announced Soon
        </p>
        <p className="text-steellight text-sm mb-6">
          Be part of Pakistan's Human vs AI hackathon showdown.
        </p>
        <a
          href={REGISTRATION_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3 rounded-lg bg-electric text-void font-display font-bold tracking-wide hover:bg-electric2 transition-colors"
        >
          REGISTER NOW »
        </a>
        <p className="mt-4 text-xs text-steel font-mono">#HackHorizon26</p>
      </div>
    </div>
  );
}