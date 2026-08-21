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
              Islamabad<span className="text-electric">,</span> Pakistan
            </h2>
            <p className="text-steellight max-w-md mb-6">
              CoWork24, Gulberg Greens — premier co-working space hosting the on-site phase for HackHorizon '26 with high-speed internet, power connectivity, and modern workstations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="card-panel p-5">
                <p className="text-xs text-steel font-mono mb-1">LOCATION</p>
                <p className="font-display font-bold text-silver">{EVENT.venueShort}</p>
                <p className="text-steellight text-xs mt-1">{EVENT.venueFull}</p>
              </div>
              <div className="card-panel p-5">
                <p className="text-xs text-steel font-mono mb-1">CHECK-IN</p>
                <p className="font-display font-bold text-silver">August 29, 2026</p>
                <p className="text-steellight text-xs mt-1">08:30 AM On-Site Check-In</p>
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

              {/* Grid / Tech backdrop lines */}
              <path d="M 0 100 L 500 100 M 0 200 L 500 200 M 0 300 L 500 300" stroke="#1478c9" strokeOpacity="0.15" strokeWidth="1" />
              <path d="M 100 0 L 100 380 M 200 0 L 200 380 M 300 0 L 300 380 M 400 0 L 400 380" stroke="#1478c9" strokeOpacity="0.15" strokeWidth="1" />

              {/* CoWork hub building/workspace illustration */}
              <rect x="150" y="110" width="200" height="180" rx="8" fill="#111827" stroke="#2fb8ff" strokeWidth="2" />
              <rect x="180" y="140" width="40" height="40" rx="4" fill="#1f293d" stroke="#1478c9" strokeWidth="1.5" />
              <rect x="280" y="140" width="40" height="40" rx="4" fill="#1f293d" stroke="#1478c9" strokeWidth="1.5" />
              <rect x="180" y="200" width="40" height="40" rx="4" fill="#1f293d" stroke="#1478c9" strokeWidth="1.5" />
              <rect x="280" y="200" width="40" height="40" rx="4" fill="#1f293d" stroke="#1478c9" strokeWidth="1.5" />

              {/* Door */}
              <rect x="235" y="235" width="30" height="55" rx="2" fill="#2fb8ff" opacity="0.8" />

              {/* Glowing Wifi/Tech icon */}
              <circle cx="250" cy="70" r="22" fill="#0b0f1a" stroke="#2fb8ff" strokeWidth="2" />
              <path d="M 240 75 A 12 12 0 0 1 260 75" fill="none" stroke="#2fb8ff" strokeWidth="2" />
              <path d="M 243 70 A 8 8 0 0 1 257 70" fill="none" stroke="#2fb8ff" strokeWidth="2" />
              <circle cx="250" cy="64" r="2" fill="#2fb8ff" />

              <text x="250" y="325" textAnchor="middle" fill="#2fb8ff" fontFamily="monospace" fontSize="13" fontWeight="bold" letterSpacing="1.5">
                CoWork24, Gulberg Greens
              </text>
              <text x="250" y="348" textAnchor="middle" fill="#8fb0cf" fontFamily="sans-serif" fontSize="11">
                Islamabad, Pakistan
              </text>
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
