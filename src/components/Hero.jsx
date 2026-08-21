import { EVENT } from "../data/content";
import Countdown from "./Countdown";
import Reveal from "./Reveal";

export default function Hero({ onRegisterClick }) {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-30 md:pb-16 px-5 md:px-8 overflow-hidden "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
        <Reveal direction="left">
          <div className="w-full overflow-hidden ">
            <div className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 rounded-full border border-electric/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span className="section-eyebrow break-words">
                National AI × Human Hackathon
              </span>
            </div>

            <h1 className="font-display font-black leading-[0.95]">
              <span className="block text-[2rem] sm:text-5xl md:text-5xl lg:text-5xl">
                HACK<span className="text-electric">HORIZON</span>
              </span>

              <span className="block mt-1 text-3xl sm:text-4xl md:text-6xl text-steellight font-bold">
                '26
              </span>
            </h1>

            <p className="mt-5 text-steellight text-base md:text-lg max-w-lg">
              {EVENT.tagline} — {EVENT.subtagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-steellight font-mono">
              <span>📍 {EVENT.venueShort}</span>
              <span>🗓 {EVENT.dateDisplay}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onRegisterClick}
                className="px-6 py-3 rounded-lg bg-electric text-void font-display font-bold hover:bg-electric2 transition-colors"
              >
                Register Now →
              </button>
              <a
                href="#sponsors"
                className="px-6 py-3 rounded-lg border border-steel/40 text-silver font-semibold hover:border-electric hover:text-electric transition-colors"
              >
                Become a Sponsor
              </a>
            </div>

            <div className="mt-10">
              <Countdown />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <div className="relative flex justify-center items-center w-full">
            <img
              src="/pakmap.png"
              alt="Pakistan Map"
              className="
        w-full
        max-w-[320px]
        sm:max-w-[420px]
        md:max-w-[500px]
        lg:max-w-[580px]
        xl:max-w-[650px]
        h-auto
        object-contain
        select-none
        drop-shadow-[0_0_35px_rgba(47,184,255,0.30)]
      "
              draggable={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
