import { SPONSOR_BENEFITS } from '../data/content'
import Reveal from './Reveal'

export default function Sponsors({ onSponsorClick }) {
  return (
    <section id="sponsors" className="py-14 md:py-20 px-5 md:px-8 bg-panel/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-3">What we offer</p>
          <h2 className="section-title mb-4">Sponsor benefits & tiers</h2>
          <p className="text-steellight max-w-xl mb-10">
            Back Pakistan's next generation of builders while connecting with sharp engineering talent.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPONSOR_BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 100}>
              <div className="card-panel p-6 hover:border-electric/50 transition-colors h-full">
                <h3 className="font-display font-bold text-silver">{b.title}</h3>
                <p className="text-steellight text-sm mt-2">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={onSponsorClick}
            className="px-6 py-3 rounded-lg bg-electric text-void font-display font-bold hover:bg-electric2 transition-colors"
          >
            Become a Sponsor →
          </button>
          <a
            href="/sponsorship-deck.pdf"
            download
            className="px-6 py-3 rounded-lg border-2 border-steel/50 text-silver font-semibold hover:border-electric hover:text-electric transition-colors inline-flex items-center gap-2"
          >
            ⬇ Download Sponsorship Deck
          </a>
        </div>

        {/* Current Sponsors Section */}
        <div className="mt-16 pt-10 border-t border-steel/20">
          <Reveal>
            <p className="section-eyebrow mb-2">Our Backers</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-silver mb-8">
              Official Event Sponsors
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Venue Sponsor - Cowork 24 */}
            <Reveal delay={100}>
              <div className="bg-panel2/80 border border-electric/30 hover:border-electric transition-all duration-300 rounded-2xl p-6 relative overflow-hidden group shadow-lg shadow-electric/5 flex flex-col sm:flex-row items-center gap-6 h-full">
                {/* Corner accent glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-electric/10 rounded-full blur-xl group-hover:bg-electric/20 transition-all pointer-events-none" />

                {/* Logo Box */}
                <div className="w-full sm:w-44 h-28 rounded-xl bg-white p-4 flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src="/cowork24.png"
                    alt="Cowork 24"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30 mb-2">
                    Venue Sponsor
                  </span>
                  <h4 className="text-xl font-display font-bold text-silver">Cowork 24</h4>
                  <p className="text-steellight text-sm mt-1">
                    Providing high-end workspace and event venue support for builders.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Sponsor - Hackviser */}
            <Reveal delay={200}>
              <div className="bg-panel2/80 border border-electric/30 hover:border-electric transition-all duration-300 rounded-2xl p-6 relative overflow-hidden group shadow-lg shadow-electric/5 flex flex-col sm:flex-row items-center gap-6 h-full">
                {/* Corner accent glow */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-all pointer-events-none" />

                {/* Logo Box */}
                <div className="w-full sm:w-44 h-28 rounded-xl bg-[#0f1424] border border-steel/20 p-4 flex items-center justify-center shrink-0 shadow-md">
                  <img
                    src="/hackviser-logo.png"
                    alt="Hackviser"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 mb-2">
                    Official Sponsor
                  </span>
                  <h4 className="text-xl font-display font-bold text-silver">Hackviser</h4>
                  <p className="text-steellight text-sm mt-1">
                    Empowering developers and cybersecurity enthusiasts with hands-on learning platform.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Official Snack Sponsor Section */}
          <div className="mt-12 pt-8 border-t border-steel/20">
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-silver mb-8">
                Official Snack Sponsor
              </h3>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Snack Sponsor - Korneez */}
              <Reveal delay={100}>
                <div className="bg-panel2/80 border border-electric/30 hover:border-electric transition-all duration-300 rounded-2xl p-6 relative overflow-hidden group shadow-lg shadow-electric/5 flex flex-col sm:flex-row items-center gap-6 h-full">
                  {/* Corner accent glow */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl group-hover:bg-yellow-400/20 transition-all pointer-events-none" />

                  {/* Logo Box */}
                  <div className="w-full sm:w-44 h-28 rounded-xl bg-[#001b79] p-4 flex items-center justify-center shrink-0 shadow-md">
                    <img
                      src="/korneez.png"
                      alt="Korneez"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 mb-2">
                      Official Snack Sponsor
                    </span>
                    <h4 className="text-xl font-display font-bold text-silver">Korneez</h4>
                    <p className="text-steellight text-sm mt-1">
                      Fueling hackathon participants with delicious snacks throughout the event.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
