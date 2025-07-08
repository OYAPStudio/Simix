/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5F7DB7', // R=95 G=125 B=183 (#5F7DB7)
          DEFAULT: '#354059', // R=53 G=64 B=89 (#354059)
          dark: '#696E82', // R=105 G=110 B=130 (#696E82)
        },
        secondary: {
          light: '#F2F4FF', // R=242 G=244 B=255 (#F2F4FF)
          DEFAULT: '#E8EAFF',
          dark: '#D4D8FF',
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F8F9FA',
          dark: '#1A1D23',
        },
        text: {
          light: '#374151',
          DEFAULT: '#1F2937',
          dark: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 14rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'mega': ['clamp(2rem, 6vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'float': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in-scale': 'fadeInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 100px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8) translate3d(0, 30px, 0)' },
          '100%': { opacity: '1', transform: 'scale(1) translate3d(0, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0, -20px, 0) rotate(5deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
      },
      backdropBlur: {
        'ultra': '40px',
      },
      boxShadow: {
        'apple': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'apple-dark': '0 25px 50px rgba(255, 255, 255, 0.08)',
        'glow': '0 0 20px rgba(95, 125, 183, 0.5)',
        'glow-white': '0 0 30px rgba(255, 255, 255, 0.6)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}