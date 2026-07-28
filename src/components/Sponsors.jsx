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
      </div>
    </section>
  )
}
