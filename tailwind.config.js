/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05070d',
        panel: '#0b0f1a',
        panel2: '#0f1424',
        steel: '#5c7a99',
        steellight: '#8fb0cf',
        electric: '#2fb8ff',
        electric2: '#1478c9',
        alert: '#ff3b3b',
        silver: '#e8edf2',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Rajdhani"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(47,184,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,184,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 0px 0px rgba(47,184,255,0.5)' },
          '50%': { boxShadow: '0 0 22px 6px rgba(47,184,255,0.55)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        pulseglow: 'pulseglow 2s ease-in-out infinite',
        scan: 'scan 3s linear infinite',
      },
    },
  },
  plugins: [],
}
