import { useEffect, useState } from 'react'

const SPONSOR_EMAIL = 'sense.iiui.dse@gmail.com'

export default function SponsorModal({ open, onClose }) {
  const [step, setStep] = useState('form')
  const [form, setForm] = useState({ companyName: '', contactName: '', email: '', phone: '', message: '' })

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  if (!open) return null

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    setStep('submitting')

    const subject = `Sponsorship Inquiry — ${form.companyName}`
    const body =
      `Company: ${form.companyName}\n` +
      `Contact Name: ${form.contactName}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || '-'}\n\n` +
      `Message:\n${form.message || '-'}`

    const mailtoLink = `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
    setStep('success')
  }

  const close = () => {
    onClose()
    setStep('form')
    setForm({ companyName: '', contactName: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto card-panel border-electric/30 p-6 md:p-8 overscroll-contain">
        <button onClick={close} className="absolute top-4 right-4 text-steellight hover:text-electric">✕</button>

        {step === 'success' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-display font-bold text-xl text-silver mb-2">Almost there!</h3>
            <p className="text-steellight text-sm">Your email app should have opened with the details filled in — just hit send.</p>
            <button onClick={close} className="mt-6 px-6 py-2.5 rounded-lg bg-electric text-void font-bold">Close</button>
          </div>
        ) : (
          <>
            <h3 className="font-display font-bold text-xl text-silver mb-1">Become a Sponsor</h3>
            <p className="text-steellight text-sm mb-6">Tell us a bit about your company and we'll follow up.</p>
            <form onSubmit={submit} className="space-y-4">
              <input required placeholder="Company name" value={form.companyName} onChange={(e) => update('companyName', e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none" />
              <input required placeholder="Your name" value={form.contactName} onChange={(e) => update('contactName', e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none" />
              <input required type="email" placeholder="Email" value={form.email} onChange={(e) => update('email', e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none" />
              <input placeholder="Phone (optional)" value={form.phone} onChange={(e) => update('phone', e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none" />
              <textarea placeholder="Message (optional)" rows={3} value={form.message} onChange={(e) => update('message', e.target.value)}
                className="w-full bg-panel2 border border-steel/30 rounded-lg px-3 py-2.5 text-silver text-sm focus:border-electric outline-none" />
              <button type="submit" disabled={step === 'submitting'} className="w-full py-3 rounded-lg bg-electric text-void font-display font-bold disabled:opacity-60">
                {step === 'submitting' ? 'Opening email…' : 'Send'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}