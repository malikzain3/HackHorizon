import { useState } from 'react'
import { FAQS } from '../data/content'
import Reveal from './Reveal'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section id="faq" className="py-14 md:py-20 px-5 md:px-8 bg-panel/30">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="section-eyebrow mb-3 text-center">Questions answered</p>
          <h2 className="section-title mb-10 text-center">Everything you need to know</h2>
        </Reveal>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i
            return (
              <Reveal key={f.q} delay={(i % 6) * 60}>
                <div className="card-panel overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-display font-semibold text-silver">{f.q}</span>
                    <span className={`text-electric transition-transform ${isOpen ? 'rotate-45' : ''}`}>＋</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-steellight text-sm">{f.a}</div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
