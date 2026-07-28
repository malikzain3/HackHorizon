import { ABOUT, EVENT } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-3">Mission</p>
          <h2 className="section-title mb-4 max-w-2xl">{ABOUT.eyebrow}</h2>
          <div className="space-y-4 max-w-2xl text-steellight">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {ABOUT.schedule.map((s, i) => (
            <Reveal key={s.day} delay={i * 100}>
              <div className="card-panel p-6 relative overflow-hidden h-full">
                <span className="absolute top-0 right-0 px-3 py-1 bg-electric text-void text-xs font-bold font-mono rounded-bl-lg">
                  {s.day}
                </span>
                <h3 className="font-display font-bold text-lg text-silver mt-2">{s.label}</h3>
                <p className="text-steellight text-sm mt-2 font-mono">🗓 {s.date}</p>
                <p className="text-steellight text-sm font-mono">🕙 {s.time}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-6">
          {[
            ['🏆', 'Prize Pool', 'Will be announced soon'],
            ['👥', 'Team Size', EVENT.teamSize],
            ['💳', 'Registration Fee', `${EVENT.fee} ${EVENT.feePerTeam}`],
          ].map(([icon, title, desc], i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="card-panel p-6 text-center h-full">
                <p className="text-2xl">{icon}</p>
                <h4 className="font-display font-bold mt-2">{title}</h4>
                <p className="text-steellight text-sm mt-1">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
