/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "sans-serif"],
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
