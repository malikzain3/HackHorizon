import Reveal from './Reveal'

export default function Partners() {
  const partners = [
    { name: 'SENSE — IIUI', img: '/sense-logo.png' },
    { name: 'Partner Slot 2', img: null },
    { name: 'Partner Slot 3', img: null },
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

        <div className="grid sm:grid-cols-3 gap-5">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="card-panel aspect-square flex flex-col items-center justify-center gap-3 p-6 hover:border-electric/50 transition-colors">
                {p.img ? (
                  <img src={p.img} alt={p.name} className="max-h-16" />
                ) : (
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-steel/40 flex items-center justify-center text-steel text-xl">
                    +
                  </div>
                )}
                <p className="text-xs text-steellight text-center">{p.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
