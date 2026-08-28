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
          <span className="text-alert">CLOSED</span>
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent my-4" />
        <p className="text-steellight text-sm mb-6">
          Registrations for HackHorizon '26 are now closed.
        </p>
        <div className="w-full bg-panel2 border border-steel/30 rounded-lg p-4 text-left space-y-2">
          <p className="text-xs text-steellight font-mono">Pls contact:</p>
          <p className="font-bold text-silver text-sm">Saif-ur-Rehman Awan</p>
          <p className="text-steellight text-xs leading-snug">
            Cheif Organizer Hackathon, Vice President SENSE-IIUI
          </p>
          <p className="text-electric font-mono text-xs pt-1">
            Whatsapp:{" "}
            <a
              href="https://wa.me/923216776046"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-electric2"
            >
              03216776046
            </a>
          </p>
        </div>
        <p className="mt-4 text-xs text-steel font-mono">#HackHorizon26</p>
      </div>
    </div>
  );
}