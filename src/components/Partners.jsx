import Reveal from './Reveal'
import { COMMUNITY_PARTNER_FORM_URL } from '../data/content'

export default function Partners() {
  const partners = [
    
    { name: 'BLACKBOX — IIUI', img: '/Blackbox.jpg' },
    { name: 'COWORK-24', img: '/cowork24.png',  isVenue:true},
    { name: 'The Computer Science Society', img: '/css.jpg' },
    { name: 'Cyber Infinity RIU', img: '/cyber.jpeg' },
    { name: 'GDGoC IIUI', img: '/GDGoC.png' },
    { name: 'CAUSE Society', img: '/cause.png' },
    { name: 'AWS SBG', img: '/aws.png' },
    { name: 'Farabi Science Society', img: '/farabi.jpg' },
    { name: 'AUCIS', img: '/AUCIS.jpeg' },
    // Jis partner ko venue banana ho wahan isVenue: true add kar dein:
    { name: 'MCS NUST', img: '/MCS.jpeg' },
    { name: 'VINCIO Tech', img: '/vincio.jpg' },
    { name: 'Code Voyagers', img: '/codevoyagers.jpg' },
  ]

  return (
    <section id="partners" className="py-14 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="section-title mb-4">
            Powered by <span className="text-electric">SENSE IIUI</span>
          </h2>
          <p className="text-steellight max-w-xl mb-10">
            Organized by SENSE — Software Engineering Society for Excellence, International Islamic University Islamabad — alongside our growing list of community & venue partners.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <p className="section-eyebrow">Partners</p>
            <a
              href={COMMUNITY_PARTNER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric/10 hover:bg-electric/20 text-electric border border-electric/30 hover:border-electric transition-all text-sm font-semibold shadow-[0_0_15px_-3px_rgba(47,184,255,0.2)]"
            >
              Become a Community Partner
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative rounded-xl py-6 px-4 flex flex-col items-center gap-4 transition-all duration-300 ${
                  p.isVenue
                    ? 'bg-panel2 border-2 border-electric shadow-[0_0_30px_-5px_rgba(47,184,255,0.4)] md:scale-105'
                    : 'bg-panel2/60 border border-electric/20 hover:border-electric/50 hover:bg-panel2'
                }`}
              >
                {/* Venue Partner Top Badge */}
                {p.isVenue && (
                  <span className="absolute -top-3 bg-electric text-black text-[11px] font-bold tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md">
                    Venue Partner
                  </span>
                )}

                {/* Corner brackets */}
                <div className="relative w-24 h-24">
                  <span className={`absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 rounded-tl ${p.isVenue ? 'border-electric' : 'border-electric/60'}`} />
                  <span className={`absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 rounded-tr ${p.isVenue ? 'border-electric' : 'border-electric/60'}`} />
                  <span className={`absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 rounded-bl ${p.isVenue ? 'border-electric' : 'border-electric/60'}`} />
                  <span className={`absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 rounded-br ${p.isVenue ? 'border-electric' : 'border-electric/60'}`} />

                  {p.img ? (
                    <div className="w-full h-full rounded-xl bg-white/95 flex items-center justify-center p-2 shadow-[0_0_20px_-4px_rgba(47,184,255,0.5)]">
                      <img src={p.img} alt={p.name} className="max-w-full max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-lg border-2 border-dashed border-steel/40 flex items-center justify-center text-steel text-xl">
                      +
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <p className={`text-sm font-semibold ${p.isVenue ? 'text-white font-bold' : 'text-silver'}`}>
                    {p.name}
                  </p>
                  {p.isVenue && (
                    <span className="text-xs text-electric/90 block mt-0.5">Official Venue</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}