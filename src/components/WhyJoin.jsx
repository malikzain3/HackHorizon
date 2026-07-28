import { WHY_JOIN } from '../data/content'
import Reveal from './Reveal'

export default function WhyJoin() {
  return (
    <section className="py-14 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-3">Why join</p>
          <h2 className="section-title mb-10 max-w-2xl">
            Built for anyone ready to <span className="text-electric">outthink the future.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_JOIN.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 100}>
              <div className="card-panel p-6 hover:border-electric/50 transition-colors h-full">
                <h3 className="font-display font-bold text-silver">{w.title}</h3>
                <p className="text-steellight text-sm mt-2">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
