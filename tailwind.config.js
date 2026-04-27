/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        accent: '#00D1FF',
        ink: '#FFFFFF',
        panel: '#111111',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0, 209, 255, 0.16), 0 0 48px rgba(0, 209, 255, 0.22)',
        soft: '0 24px 80px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'radial-accent':
          'radial-gradient(circle at top, rgba(0, 209, 255, 0.16), transparent 44%)',
      },
      keyframes: {
        pulseLine: {
          '0%, 100%': { opacity: '0.2', transform: 'scaleX(0.94)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(18px, -12px, 0)' },
        },
      },
      animation: {
        'pulse-line': 'pulseLine 7s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
