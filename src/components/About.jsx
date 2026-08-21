import { ABOUT, EVENT, PRIZES_AND_BENEFITS, RULES } from '../data/content'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <Reveal>
          <p className="section-eyebrow mb-3">Mission</p>
          <h2 className="section-title mb-4 max-w-2xl">{ABOUT.eyebrow}</h2>
          <div className="space-y-4 max-w-2xl text-steellight">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        {/* Schedule */}
        <div>
          <Reveal>
            <p className="section-eyebrow mb-3">Schedule</p>
            <h3 className="text-2xl font-display font-bold text-silver mb-6">Event Timeline</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {ABOUT.schedule.map((s, i) => (
              <Reveal key={s.day} delay={i * 100}>
                <div className="card-panel p-6 relative overflow-hidden h-full">
                  <span className="absolute top-0 right-0 px-3 py-1 bg-electric text-void text-xs font-bold font-mono rounded-bl-lg">
                    {s.day}
                  </span>
                  <h3 className="font-display font-bold text-lg text-silver mt-2">{s.label}</h3>
                  <p className="text-steellight text-sm mt-2 font-mono">🗓 {s.date}</p>
                  <p className="text-steellight text-sm font-mono mt-1">🕙 {s.time}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Overview cards: Prize Pool, Team Size, Fee */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            ['🏆', 'Prize Pool', PRIZES_AND_BENEFITS.prizePool],
            ['👥', 'Team Size', EVENT.teamSize],
            ['💳', 'Registration Fee', `${EVENT.fee} ${EVENT.feePerTeam}`],
          ].map(([icon, title, desc], i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="card-panel p-6 text-center h-full flex flex-col justify-center items-center">
                <p className="text-3xl">{icon}</p>
                <h4 className="font-display font-bold mt-2 text-silver">{title}</h4>
                <p className="text-electric font-semibold text-sm mt-2">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Benefits Section */}
        <div>
          <Reveal>
            <p className="section-eyebrow mb-3">Rewards</p>
            <h3 className="text-2xl font-display font-bold text-silver mb-6">Prizes & Benefits</h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Top 3 Winning Teams */}
            <Reveal delay={100}>
              <div className="card-panel p-6 h-full border border-electric/40 bg-panel2/80">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🏆</span>
                  <h4 className="font-display font-bold text-lg text-silver">
                    For the Top 3 Winning Teams
                  </h4>
                </div>
                <ul className="space-y-3 text-steellight text-sm">
                  {PRIZES_AND_BENEFITS.top3WinnersBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold shrink-0">🟢</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* All Participants */}
            <Reveal delay={200}>
              <div className="card-panel p-6 h-full border border-steel/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎁</span>
                  <h4 className="font-display font-bold text-lg text-silver">
                    Benefits for All Participants
                  </h4>
                </div>
                <ul className="space-y-3 text-steellight text-sm">
                  {PRIZES_AND_BENEFITS.allParticipantsBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-electric shrink-0">✦</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Competition Rules */}
        <div>
          <Reveal>
            <p className="section-eyebrow mb-3">Guidelines</p>
            <h3 className="text-2xl font-display font-bold text-silver mb-6">Hackathon Competition Rules</h3>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-panel p-6 md:p-8">
              <ul className="space-y-4 text-steellight text-sm md:text-base">
                {RULES.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-electric font-mono font-bold shrink-0">•</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
