import { useState } from "react";

export default function RegistrationClosedButton({ className = "", isFloating = false, align = "center" }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setShowModal(true)}
        onMouseLeave={() => setShowModal(false)}
        onClick={() => setShowModal((prev) => !prev)}
        className={
          className ||
          (isFloating
            ? "fixed bottom-6 right-5 md:right-8 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-steel/30 border border-steel/40 text-steel font-display font-bold text-sm cursor-not-allowed shadow-lg"
            : "px-5 py-2.5 rounded-lg bg-steel/20 border border-steel/40 text-steel font-bold cursor-not-allowed text-sm transition-colors hover:bg-steel/30")
        }
      >
        {isFloating && (
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-steel/60" />
          </span>
        )}
        Registrations Closed
      </button>

      {showModal && (
        <div
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
          className={`absolute z-50 w-62 p-4 rounded-xl card-panel border-electric/40 bg-void/95 text-left shadow-[0_0_25px_rgba(47,184,255,0.3)] backdrop-blur-md transition-all duration-200 animate-[fadeIn_.2s_ease-in-out] ${
            isFloating
              ? "bottom-full right-0 mb-3 fixed sm:absolute"
              : align === "right"
              ? "top-full right-0 mt-2"
              : align === "left"
              ? "top-full left-0 mt-2"
              : "top-full left-1/2 -translate-x-1/2 mt-2"
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <span className="font-display font-bold text-sm text-alert uppercase tracking-wide">
              Registrations Closed
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="text-steel hover:text-silver text-xs"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-steellight mb-2 font-mono">Pls contact:</p>
          <div className="space-y-1 text-xs">
            <p className="font-bold text-silver">Saif-ur-Rehman Awan</p>
            <p className="text-steellight leading-snug">
              Cheif Organizer Hackathon, Vice President SENSE-IIUI
            </p>
            <p className="text-electric font-mono pt-1">
              Whatsapp:{" "}
              <a
                href="https://wa.me/923216776046"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-electric2"
                onClick={(e) => e.stopPropagation()}
              >
                03216776046
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
