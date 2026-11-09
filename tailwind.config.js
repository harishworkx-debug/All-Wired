/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d5dEEA',
          200: '#aabdd6',
          300: '#7f9cc2',
          400: '#547bae',
          500: '#3a6499',
          600: '#2d4d7a',
          700: '#1f3a61',
          800: '#15294b',
          900: '#101F35',
          950: '#0a1525',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563EB',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        amber: {
          50: '#fef9ed',
          100: '#fdedc8',
          200: '#fbd98e',
          300: '#f9c553',
          400: '#F5B942',
          500: '#e6a328',
          600: '#c8831c',
          700: '#9c621a',
          800: '#7d4f1d',
          900: '#68411d',
        },
        gray: {
          50: '#F5F7FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 185, 66, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(245, 185, 66, 0)' },
        },
      },
    },
  },
  plugins: [],
};
