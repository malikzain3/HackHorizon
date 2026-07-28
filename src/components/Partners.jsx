import Reveal from './Reveal'

export default function Partners() {
  const partners = [
    { name: 'BLACKBOX — IIUI', img: '/Blackbox.jpg' },
    { name: 'The Coputer Science Society', img: '/css.jpg' },
    { name: 'Cyber Infinity RIU', img: '/cyber.jpeg' },
    { name: 'GDGoC IIUI', img: '/GDGoC.png' },
    { name: 'CAUSE Society', img: '/cause.png' },
    { name: 'AWS SBG', img: '/aws.png' },
    { name: 'Farabi Science Society', img: '/farabi.jpg' },
    { name: 'AUCIS', img: '/AUCIS.jpeg' },
    { name: 'MCS NUST', img: '/MCS.jpeg' },
  ]

  return (
    <section id="partners" className="py-14 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-3">Community</p>
          <h2 className="section-title mb-4">
            Powered by <span className="text-electric">SENSE IIUI</span>
          </h2>
          <p className="text-steellight max-w-xl mb-10">
            Organized by SENSE — Software Engineering Society for Excellence, International Islamic University Islamabad — alongside our growing list of community partners.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="bg-panel2/60 border border-electric/20 rounded-xl py-6 px-4 flex flex-col items-center gap-4 hover:border-electric/50 hover:bg-panel2 transition-colors">
                {/* logo box with tight corner brackets */}
                <div className="relative w-24 h-24">
                  <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-electric/60 rounded-tl" />
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-electric/60 rounded-tr" />
                  <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-electric/60 rounded-bl" />
                  <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-electric/60 rounded-br" />

                  {p.img ? (
                    <div className="w-full h-full rounded-xl bg-white/95 flex items-center justify-center shadow-[0_0_20px_-4px_rgba(47,184,255,0.5)]">
                      <img src={p.img} alt={p.name} className="max-w-full max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center text-steel text-xl">
                      +
                    </div>
                  )}
                </div>

                <p className="text-sm font-semibold text-silver text-center">{p.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}