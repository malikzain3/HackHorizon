import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const hidden =
    direction === 'left' ? '-translate-x-14 opacity-0' :
    direction === 'right' ? 'translate-x-14 opacity-0' :
    'translate-y-12 opacity-0'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? 'opacity-100 translate-x-0 translate-y-0' : hidden} ${className}`}
    >
      {children}
    </div>
  )
}
