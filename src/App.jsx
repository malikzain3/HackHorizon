import { useState } from 'react'
import EntryModal from './components/EntryModal'
import Navbar from './components/Navbar'
import FloatingRegisterButton from './components/FloatingRegisterButton'
import Hero from './components/Hero'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Partners from './components/Partners'
import Venue from './components/Venue'
import WhyJoin from './components/WhyJoin'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SponsorModal from './components/SponsorModal'

const REGISTRATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc887ITa9I2rgWcvSNfhCJGJTBZZdso8IWvzjN8OXXKFkkZjQ/viewform'

export default function App() {
  const [sponsorOpen, setSponsorOpen] = useState(false)

  const openRegistration = () => {
    window.open(REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen">
      <EntryModal />
      <Navbar onSponsorClick={() => setSponsorOpen(true)} onRegisterClick={openRegistration} />
      <Hero onRegisterClick={openRegistration} />
      <About />
      <Sponsors onSponsorClick={() => setSponsorOpen(true)} />
      <Partners />
      <Venue />
      <WhyJoin />
      <FAQ />
      <Footer />

      <FloatingRegisterButton onClick={openRegistration} />
      <SponsorModal open={sponsorOpen} onClose={() => setSponsorOpen(false)} />
    </div>
  )
}