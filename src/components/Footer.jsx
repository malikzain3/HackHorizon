import { EVENT } from '../data/content'
import RegistrationClosedButton from './RegistrationClosedButton'

export default function Footer() {
  return (
    <footer className="border-t border-steel/20 px-5 md:px-8 py-10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/sense-logo.png" alt="SENSE" className="h-8 w-8 rounded-full" />
            <p className="font-display font-bold text-silver">
              HACK<span className="text-electric">HORIZON</span> '26
            </p>
          </div>
          <p className="text-steellight text-sm leading-relaxed">
            A national hackathon by SENSE — Software Engineering Society for Excellence, IIUI.
          </p>
        </div>

        <div>
          <p className="text-xs text-steel font-mono mb-3 tracking-widest">EVENT</p>
          <ul className="space-y-2 text-sm text-steellight">
            <li><a href="#about" className="hover:text-electric">About</a></li>
            <li><a href="#sponsors" className="hover:text-electric">Sponsors</a></li>
            <li><a href="#venue" className="hover:text-electric">Venue</a></li>
            <li><a href="#faq" className="hover:text-electric">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-steel font-mono mb-3 tracking-widest">GET INVOLVED</p>
          <ul className="space-y-2 text-sm text-steellight">
            <li><a href="#sponsors" className="hover:text-electric">Become a Sponsor</a></li>
            <li>
              <RegistrationClosedButton className="text-steel hover:text-silver text-sm cursor-not-allowed font-normal p-0 bg-transparent border-0" />
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-steel font-mono mb-3 tracking-widest">CONTACT</p>
          <ul className="space-y-2 text-sm text-steellight break-words">
            <li>{EVENT.contactEmail}</li>
            <li>{EVENT.contactPhone}</li>
            <li>{EVENT.venueShort}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-5 border-t border-steel/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-steel font-mono">
        <p>© 2026 HackHorizon. Organized by SENSE, IIUI.</p>
        <p>BUILD · BATTLE · INNOVATE</p>
      </div>
    </footer>
  )
}