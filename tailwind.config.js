/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          50: '#1e2430',
          100: '#161a24',
          200: '#10141d',
          300: '#0c0f16',
          400: '#07090e',
        },
        cyber: {
          cyan: '#00f5d4',
          blue: '#00b4d8',
          electric: '#7928ca',
          purple: '#9d4edd',
          pink: '#f72585',
          amber: '#ffb703',
          emerald: '#10b981',
          rose: '#ff0054',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 245, 212, 0.35)',
        'neon-purple': '0 0 25px -5px rgba(121, 40, 202, 0.4)',
        'neon-amber': '0 0 25px -5px rgba(255, 183, 3, 0.35)',
        'neon-rose': '0 0 25px -5px rgba(255, 0, 84, 0.4)',
        'glass-panel': '0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'glass-glow': '0 0 50px -10px rgba(0, 180, 216, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
