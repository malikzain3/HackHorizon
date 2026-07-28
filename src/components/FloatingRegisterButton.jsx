export default function FloatingRegisterButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-5 md:right-8 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-electric text-void font-display font-bold text-sm shadow-[0_0_25px_rgba(47,184,255,0.6)] animate-pulseglow hover:bg-electric2 transition-colors"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-void opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-void" />
      </span>
      Register Now
    </button>
  )
}