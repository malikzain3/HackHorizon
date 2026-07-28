import { EVENT } from '../data/content'
import Reveal from './Reveal'

export default function Venue() {
  return (
    <section id="venue" className="py-14 md:py-20 px-5 md:px-8 bg-panel/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div>
            <p className="section-eyebrow mb-3">Venue</p>
            <h2 className="section-title mb-4">
              Rawalpindi<span className="text-electric">,</span> Pakistan
            </h2>
            <p className="text-steellight max-w-md mb-6">
              The heart of Pakistan's aerospace and technology corridor — home ground for a hackathon built on speed, precision, and innovation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="card-panel p-5">
                <p className="text-xs text-steel font-mono mb-1">LOCATION</p>
                <p className="font-display font-bold text-silver">{EVENT.venueShort}</p>
                <p className="text-steellight text-xs mt-1">{EVENT.venueFull}</p>
              </div>
              <div className="card-panel p-5">
                <p className="text-xs text-steel font-mono mb-1">CHECK-IN</p>
                <p className="font-display font-bold text-silver">08:30 AM</p>
                <p className="text-steellight text-xs mt-1">August 20, 2026</p>
              </div>
            </div>

            <a
              href={EVENT.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-steel/50 text-silver font-semibold hover:border-electric hover:text-electric transition-colors"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <div className="relative">
            <svg viewBox="0 0 500 380" className="w-full">
              <rect x="0" y="0" width="500" height="380" rx="14" fill="#0b0f1a" stroke="#1478c9" strokeOpacity="0.4" />

              {/* fireworks */}
              {[[75, 55], [430, 45], [255, 35]].map(([x, y], i) => (
                <g key={i} stroke="#2fb8ff" strokeWidth="1.5" opacity="0.75">
                  {Array.from({ length: 10 }).map((_, j) => {
                    const angle = (j / 10) * Math.PI * 2
                    return (
                      <line
                        key={j}
                        x1={x} y1={y}
                        x2={x + Math.cos(angle) * 16}
                        y2={y + Math.sin(angle) * 16}
                      />
                    )
                  })}
                  <circle cx={x} cy={y} r="2" fill="#2fb8ff" />
                </g>
              ))}

              {/* Stadium bowl */}
              <g stroke="#8fb0cf" strokeWidth="2" fill="none">
                <ellipse cx="250" cy="285" rx="190" ry="55" />
                <ellipse cx="250" cy="270" rx="150" ry="38" stroke="#5c7a99" strokeWidth="1.5" />
              </g>
              {Array.from({ length: 14 }).map((_, i) => {
                const angle = (i / 13) * Math.PI - Math.PI / 2
                const x1 = 250 + Math.cos(angle) * 190
                const y1 = 285 + Math.sin(angle) * 55 * (angle > 0 ? 1 : 0.3)
                return angle <= 0 ? (
                  <line key={i} x1={250 + Math.cos(angle) * 150} y1={270 + Math.sin(angle) * 38}
                    x2={x1} y2={285 + Math.sin(angle) * 55}
                    stroke="#1478c9" strokeWidth="1" opacity="0.5" />
                ) : null
              })}
              {/* Floodlights */}
              {[[95, 210], [405, 210]].map(([x, y], i) => (
                <g key={i} stroke="#5c7a99" strokeWidth="2">
                  <line x1={x} y1={y} x2={x} y2={y - 45} />
                  <rect x={x - 14} y={y - 60} width="28" height="16" rx="2" fill="none" />
                </g>
              ))}
              <text x="250" y="255" textAnchor="middle" fill="#5c7a99" fontFamily="monospace" fontSize="11" letterSpacing="2">
                Noor Khan Base
              </text>

              {/* JF-17 Thunder silhouette, side profile */}
              <g transform="translate(250,130) scale(1.35)" fill="none" stroke="#2fb8ff" strokeWidth="2.5" strokeLinejoin="round">
                <path d="M-85 4
                         L-55 -2 L-30 -14 L-8 -16
                         L20 -6 L55 -8 L85 0
                         L55 4 L22 3
                         L14 14 L4 15 L2 4
                         L-30 6 L-45 16 L-52 16 L-46 5
                         L-70 8 Z" />
                <path d="M20 -6 L28 -20 L36 -20 L30 -5" fill="none" />
              </g>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
