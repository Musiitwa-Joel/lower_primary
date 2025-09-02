/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50, #f0f9ff)',
          100: 'var(--color-primary-100, #e0f2fe)',
          200: 'var(--color-primary-200, #bae6fd)',
          300: 'var(--color-primary-300, #7dd3fc)',
          400: 'var(--color-primary-400, #38bdf8)',
          500: 'var(--color-primary-500, #0ea5e9)',
          600: 'var(--color-primary-600, #0284c7)',
          700: 'var(--color-primary-700, #0369a1)',
          800: 'var(--color-primary-800, #075985)',
          900: 'var(--color-primary-900, #0c4a6e)',
        },
        secondary: {
          50: 'var(--color-secondary-50, #fefce8)',
          100: 'var(--color-secondary-100, #fef9c3)',
          200: 'var(--color-secondary-200, #fef08a)',
          300: 'var(--color-secondary-300, #fde047)',
          400: 'var(--color-secondary-400, #facc15)',
          500: 'var(--color-secondary-500, #eab308)',
          600: 'var(--color-secondary-600, #ca8a04)',
          700: 'var(--color-secondary-700, #a16207)',
          800: 'var(--color-secondary-800, #854d0e)',
          900: 'var(--color-secondary-900, #713f12)',
        },
        accent: {
          50: 'var(--color-accent-50, #f0fdf4)',
          100: 'var(--color-accent-100, #dcfce7)',
          200: 'var(--color-accent-200, #bbf7d0)',
          300: 'var(--color-accent-300, #86efac)',
          400: 'var(--color-accent-400, #4ade80)',
          500: 'var(--color-accent-500, #22c55e)',
          600: 'var(--color-accent-600, #16a34a)',
          700: 'var(--color-accent-700, #15803d)',
          800: 'var(--color-accent-800, #166534)',
          900: 'var(--color-accent-900, #14532d)',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 0 15px 0 rgba(255, 255, 255, 0.05)',
        'glass-dark': '0 0 15px 0 rgba(0, 0, 0, 0.05)',
        'glass-strong': '0 0 30px 0 rgba(255, 255, 255, 0.1)',
        'glass-strong-dark': '0 0 30px 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        "tredumo-blue": {
          50: "#f3f2fb",
          100: "#e9e8f8",
          200: "#d3d1f1",
          300: "#bcbaea",
          400: "#a5a3e0",
          500: "#8a87d8",
          600: "#6f6cac",
          700: "#535181",
          800: "#383655",
          900: "#1c1b2a",
          950: "#0e0e15",
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 255, 255, 0.2)',
          dark: {
            light: 'rgba(0, 0, 0, 0.05)',
            DEFAULT: 'rgba(0, 0, 0, 0.1)',
            strong: 'rgba(0, 0, 0, 0.2)',
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
