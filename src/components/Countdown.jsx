import { useEffect, useState } from 'react'
import { EVENT } from '../data/content'

function getPhase() {
  const now = new Date()
  const orientation = new Date(EVENT.orientationDate)
  const orientationEnd = new Date(EVENT.orientationEndDate)
  const hackathonStart = new Date(EVENT.hackathonStartDate)
  const hackathonEnd = new Date(EVENT.hackathonEndDate)

  if (now < orientation) return { label: 'Orientation begins in', target: orientation }
  if (now >= orientation && now < orientationEnd) return { label: 'Orientation is LIVE', target: null }
  if (now >= orientationEnd && now < hackathonStart) return { label: 'Hackathon begins in', target: hackathonStart }
  if (now >= hackathonStart && now < hackathonEnd) return { label: 'Hackathon is LIVE', target: null }
  return { label: 'HackHorizon 26 has concluded', target: null }
}

function diff(target) {
  const total = Math.max(0, target - new Date())
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((total / (1000 * 60)) % 60)
  const seconds = Math.floor((total / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function Countdown() {
  const [phase, setPhase] = useState(getPhase())
  const [time, setTime] = useState(phase.target ? diff(phase.target) : null)

  useEffect(() => {
    const id = setInterval(() => {
      const p = getPhase()
      setPhase(p)
      setTime(p.target ? diff(p.target) : null)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="card-panel p-4 md:p-5 w-full max-w-md">
      <div className="flex items-center justify-between mb-3 font-mono text-xs text-steellight">
        <span>~/hackhorizon-26</span>
        <span className="flex items-center gap-1.5 text-electric">
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" /> LIVE
        </span>
      </div>
      <p className="font-mono text-xs text-steellight mb-3">$ status --track {phase.label.toLowerCase().replace(/\s/g, '-')}</p>
      <p className="text-silver text-sm mb-3">{phase.label}</p>
      {time ? (
        <div className="grid grid-cols-4 gap-2 md:gap-3">
          {[
            ['DAYS', time.days],
            ['HOURS', time.hours],
            ['MIN', time.minutes],
            ['SEC', time.seconds],
          ].map(([label, val]) => (
            <div key={label} className="bg-panel2 border border-steel/20 rounded-lg py-3 text-center">
              <div className="font-display font-bold text-xl md:text-2xl text-electric">
                {String(val).padStart(2, '0')}
              </div>
              <div className="text-[10px] tracking-widest text-steel mt-1">{label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-3 font-display text-electric text-lg">⚡ {phase.label}</div>
      )}
    </div>
  )
}
