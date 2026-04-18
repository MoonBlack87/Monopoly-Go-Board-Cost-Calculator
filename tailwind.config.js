/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{svelte,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Newsreader"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
      colors: {
        mgred: { DEFAULT: '#ef4444', light: '#f87171', dark: '#b91c1c' },
        mggold: { DEFAULT: '#f59e0b', light: '#fbbf24', dark: '#b45309' },
        mggreen: { DEFAULT: '#22c55e', light: '#4ade80', dark: '#15803d' },
        mgblue: { DEFAULT: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8' },
        mgpurple: { DEFAULT: '#8b5cf6', light: '#a78bfa', dark: '#6d28d9' },
        board: '#0b1020',
        card: '#121a2b',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        game: '0 24px 60px rgba(0,0,0,0.35)',
        'game-sm': '0 14px 30px rgba(0,0,0,0.25)',
      },
      animation: {
        'bounce-in': 'bounceIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'slide-up': 'slideUp 0.35s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
      },
    },
  },
  plugins: [],
}
