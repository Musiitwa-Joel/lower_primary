// Design System Configuration
// Centralized design tokens for consistent branding across schools

export interface ColorPalette {
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Main brand color
    600: string;
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Secondary brand color
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Accent color
    600: string;
    700: string;
    800: string;
    900: string;
  };
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface DesignTokens {
  colors: ColorPalette;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
}

// Tredumo design system - Update this for different institutions
export const tredumoDesignTokens: DesignTokens = {
  colors: {
    primary: {
      50: "#f3f2fb",
      100: "#e9e8f8",
      200: "#d3d1f1",
      300: "#bcbaea",
      400: "#a5a3e0",
      500: "#8a87d8", // Main brand color - Tredumo Purple
      600: "#6f6cac",
      700: "#535181",
      800: "#383655",
      900: "#1c1b2a",
    },
    secondary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9", // Secondary brand color - Sky Blue
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    accent: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e", // Accent color - Green
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#1a1a2e", // Dark background
      900: "#0e0e15", // Darker background
    },
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    "2xl": "4rem",
    "3xl": "6rem",
    "4xl": "8rem",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
  typography: {
    fontFamily: {
      primary: '"Inter", "Google Sans", sans-serif',
      secondary: '"Poppins", "Google Sans", sans-serif',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
};

// Animation presets
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
};

// Button variants
export const buttonVariants = {
  primary: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    bg-primary-500 hover:bg-primary-600 text-white font-medium
    transition-all duration-300 transform hover:scale-105
    shadow-lg hover:shadow-xl
  `,
  secondary: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    bg-secondary-500 hover:bg-secondary-600 text-white font-medium
    transition-all duration-300 transform hover:scale-105
    shadow-lg hover:shadow-xl
  `,
  outline: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white
    font-medium transition-all duration-300 transform hover:scale-105
  `,
  ghost: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    text-primary-500 hover:bg-primary-50 font-medium
    transition-all duration-300
  `,
};

// Loading animation components
export const loadingAnimations = {
  spinner: `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .animate-spin {
      animation: spin 1s linear infinite;
    }
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `,
  bounce: `
    @keyframes bounce {
      0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
    .animate-bounce {
      animation: bounce 1s infinite;
    }
  `,
  fadeInUp: `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out;
    }
  `,
};

// Function to generate CSS custom properties from design tokens
export const generateCSSVariables = (tokens: DesignTokens): string => {
  return `
    :root {
      /* Primary Colors */
      --color-primary-50: ${tokens.colors.primary[50]};
      --color-primary-100: ${tokens.colors.primary[100]};
      --color-primary-200: ${tokens.colors.primary[200]};
      --color-primary-300: ${tokens.colors.primary[300]};
      --color-primary-400: ${tokens.colors.primary[400]};
      --color-primary-500: ${tokens.colors.primary[500]};
      --color-primary-600: ${tokens.colors.primary[600]};
      --color-primary-700: ${tokens.colors.primary[700]};
      --color-primary-800: ${tokens.colors.primary[800]};
      --color-primary-900: ${tokens.colors.primary[900]};
      
      /* Secondary Colors */
      --color-secondary-50: ${tokens.colors.secondary[50]};
      --color-secondary-100: ${tokens.colors.secondary[100]};
      --color-secondary-200: ${tokens.colors.secondary[200]};
      --color-secondary-300: ${tokens.colors.secondary[300]};
      --color-secondary-400: ${tokens.colors.secondary[400]};
      --color-secondary-500: ${tokens.colors.secondary[500]};
      --color-secondary-600: ${tokens.colors.secondary[600]};
      --color-secondary-700: ${tokens.colors.secondary[700]};
      --color-secondary-800: ${tokens.colors.secondary[800]};
      --color-secondary-900: ${tokens.colors.secondary[900]};
      
      /* Accent Colors */
      --color-accent-50: ${tokens.colors.accent[50]};
      --color-accent-100: ${tokens.colors.accent[100]};
      --color-accent-200: ${tokens.colors.accent[200]};
      --color-accent-300: ${tokens.colors.accent[300]};
      --color-accent-400: ${tokens.colors.accent[400]};
      --color-accent-500: ${tokens.colors.accent[500]};
      --color-accent-600: ${tokens.colors.accent[600]};
      --color-accent-700: ${tokens.colors.accent[700]};
      --color-accent-800: ${tokens.colors.accent[800]};
      --color-accent-900: ${tokens.colors.accent[900]};
      
      /* Neutral Colors */
      --color-neutral-50: ${tokens.colors.neutral[50]};
      --color-neutral-100: ${tokens.colors.neutral[100]};
      --color-neutral-200: ${tokens.colors.neutral[200]};
      --color-neutral-300: ${tokens.colors.neutral[300]};
      --color-neutral-400: ${tokens.colors.neutral[400]};
      --color-neutral-500: ${tokens.colors.neutral[500]};
      --color-neutral-600: ${tokens.colors.neutral[600]};
      --color-neutral-700: ${tokens.colors.neutral[700]};
      --color-neutral-800: ${tokens.colors.neutral[800]};
      --color-neutral-900: ${tokens.colors.neutral[900]};
      
      /* Semantic Colors */
      --color-success: ${tokens.colors.success};
      --color-warning: ${tokens.colors.warning};
      --color-error: ${tokens.colors.error};
      --color-info: ${tokens.colors.info};
      
      /* Spacing */
      --spacing-xs: ${tokens.spacing.xs};
      --spacing-sm: ${tokens.spacing.sm};
      --spacing-md: ${tokens.spacing.md};
      --spacing-lg: ${tokens.spacing.lg};
      --spacing-xl: ${tokens.spacing.xl};
      --spacing-2xl: ${tokens.spacing["2xl"]};
      --spacing-3xl: ${tokens.spacing["3xl"]};
      --spacing-4xl: ${tokens.spacing["4xl"]};
      
      /* Border Radius */
      --radius-sm: ${tokens.borderRadius.sm};
      --radius-md: ${tokens.borderRadius.md};
      --radius-lg: ${tokens.borderRadius.lg};
      --radius-xl: ${tokens.borderRadius.xl};
      --radius-2xl: ${tokens.borderRadius["2xl"]};
      --radius-3xl: ${tokens.borderRadius["3xl"]};
      --radius-full: ${tokens.borderRadius.full};
      
      /* Shadows */
      --shadow-sm: ${tokens.shadows.sm};
      --shadow-md: ${tokens.shadows.md};
      --shadow-lg: ${tokens.shadows.lg};
      --shadow-xl: ${tokens.shadows.xl};
      --shadow-2xl: ${tokens.shadows["2xl"]};
      
      /* Typography */
      --font-family-primary: ${tokens.typography.fontFamily.primary};
      --font-family-secondary: ${tokens.typography.fontFamily.secondary};
    }
    
    ${Object.values(loadingAnimations).join("\n")}
  `;
};

// Utility function to get design tokens (can be customized per school)
export const getDesignTokens = (schoolId?: string): DesignTokens => {
  // In a real implementation, this could be dynamic based on school configuration
  // For now, return the Tredumo design tokens, but this can be extended for multiple schools
  switch (schoolId) {
    case "tredumo":
    default:
      return tredumoDesignTokens;
  }
};

// Export default design tokens for backward compatibility
export const defaultDesignTokens = tredumoDesignTokens;
