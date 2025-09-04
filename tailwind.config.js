/** @type {import('tailwindcss').Config} */
import { tredumoTheme } from "./src/config/themeConfig"; // Import themeConfig

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: tredumoTheme.colors.primary[50], // #f3f2fb
          100: tredumoTheme.colors.primary[100], // #e9e8f8
          200: tredumoTheme.colors.primary[200], // #d3d1f1
          300: tredumoTheme.colors.primary[300], // #bcbaea
          400: tredumoTheme.colors.primary[400], // #a5a3e0
          500: tredumoTheme.colors.primary[500], // #8a87d8
          600: tredumoTheme.colors.primary[600], // #6f6cac
          700: tredumoTheme.colors.primary[700], // #535181
          800: tredumoTheme.colors.primary[800], // #383655
          900: tredumoTheme.colors.primary[900], // #1c1b2a
        },
        secondary: {
          50: tredumoTheme.colors.secondary[50], // #f0f9ff
          100: tredumoTheme.colors.secondary[100], // #e0f2fe
          200: tredumoTheme.colors.secondary[200], // #bae6fd
          300: tredumoTheme.colors.secondary[300], // #7dd3fc
          400: tredumoTheme.colors.secondary[400], // #38bdf8
          500: tredumoTheme.colors.secondary[500], // #0ea5e9
          600: tredumoTheme.colors.secondary[600], // #0284c7
          700: tredumoTheme.colors.secondary[700], // #0369a1
          800: tredumoTheme.colors.secondary[800], // #075985
          900: tredumoTheme.colors.secondary[900], // #0c4a6e
        },
        accent: {
          50: tredumoTheme.colors.accent[50], // #f0fdf4
          100: tredumoTheme.colors.accent[100], // #dcfce7
          200: tredumoTheme.colors.accent[200], // #bbf7d0
          300: tredumoTheme.colors.accent[300], // #86efac
          400: tredumoTheme.colors.accent[400], // #4ade80
          500: tredumoTheme.colors.accent[500], // #22c55e
          600: tredumoTheme.colors.accent[600], // #16a34a
          700: tredumoTheme.colors.accent[700], // #15803d
          800: tredumoTheme.colors.accent[800], // #166534
          900: tredumoTheme.colors.accent[900], // #14532d
        },
        neutral: {
          50: tredumoTheme.colors.neutral[50], // #fafafa
          100: tredumoTheme.colors.neutral[100], // #f5f5f5
          200: tredumoTheme.colors.neutral[200], // #e5e5e5
          300: tredumoTheme.colors.neutral[300], // #d4d4d4
          400: tredumoTheme.colors.neutral[400], // #a3a3a3
          500: tredumoTheme.colors.neutral[500], // #737373
          600: tredumoTheme.colors.neutral[600], // #525252
          700: tredumoTheme.colors.neutral[700], // #404040
          800: tredumoTheme.colors.neutral[800], // #1a1a2e
          900: tredumoTheme.colors.neutral[900], // #0e0e15
        },
        success: tredumoTheme.colors.semantic.success, // #22c55e
        warning: tredumoTheme.colors.semantic.warning, // #f59e0b
        error: tredumoTheme.colors.semantic.error, // #ef4444
        info: tredumoTheme.colors.semantic.info, // #3b82f6
        // Remove legacy 'tredumo-blue' since it's redundant with primary
        glass: {
          light: "rgba(255, 255, 255, 0.05)",
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          strong: "rgba(255, 255, 255, 0.2)",
          dark: {
            light: "rgba(0, 0, 0, 0.05)",
            DEFAULT: "rgba(0, 0, 0, 0.1)",
            strong: "rgba(0, 0, 0, 0.2)",
          },
        },
      },
      borderRadius: {
        "4xl": "var(--radius-2xl)", // Maps to themeConfig's 2xl
        "5xl": "var(--radius-3xl)", // Maps to themeConfig's 3xl
        "6xl": "3rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "var(--shadow-lg)",
        "glass-dark": "var(--shadow-lg)",
        "glass-strong": "var(--shadow-xl)",
        "glass-strong-dark": "var(--shadow-xl)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
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
