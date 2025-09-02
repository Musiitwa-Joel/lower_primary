// Theme Configuration System
// Centralized theme tokens for consistent branding across schools

export interface ThemeConfig {
  colors: {
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
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
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
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
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

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9', // Main brand color
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308', // Secondary brand color
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
    accent: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e', // Accent color
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    semantic: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  typography: {
    fontFamily: {
      primary: '"Inter", "Google Sans", sans-serif',
      secondary: '"Poppins", "Google Sans", sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
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

// Button component styles
export const buttonStyles = {
  primary: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    bg-primary-500 hover:bg-primary-600 text-white font-medium
    transition-all duration-300 transform hover:scale-105
    shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  `,
  secondary: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    bg-secondary-500 hover:bg-secondary-600 text-white font-medium
    transition-all duration-300 transform hover:scale-105
    shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2
  `,
  outline: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white
    font-medium transition-all duration-300 transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  `,
  ghost: (theme: string) => `
    inline-flex items-center justify-center px-6 py-3 rounded-full
    text-primary-500 hover:bg-primary-500/10 font-medium
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
  `,
  glass: (theme: string) => theme === 'dark' 
    ? `inline-flex items-center justify-center px-6 py-3 rounded-full
       bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/20
       font-medium transition-all duration-300 transform hover:scale-105`
    : `inline-flex items-center justify-center px-6 py-3 rounded-full
       bg-black/10 hover:bg-black/20 text-black backdrop-blur-xl border border-black/20
       font-medium transition-all duration-300 transform hover:scale-105`
};

// Loading animations
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
  slideInLeft: `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slideInLeft {
      animation: slideInLeft 0.6s ease-out;
    }
  `,
  slideInRight: `
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slideInRight {
      animation: slideInRight 0.6s ease-out;
    }
  `,
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  `,
  glow: `
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.3); }
      50% { box-shadow: 0 0 40px rgba(14, 165, 233, 0.6); }
    }
    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }
  `
};

// Card component styles
export const cardStyles = {
  glass: (theme: string) => theme === 'dark'
    ? 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl'
    : 'bg-black/5 backdrop-blur-xl border border-black/10 rounded-2xl',
  feature: (theme: string) => theme === 'dark'
    ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 backdrop-blur-xl border rounded-2xl transition-all duration-300 hover:scale-105'
    : 'bg-black/5 hover:bg-black/10 border-black/10 hover:border-black/20 backdrop-blur-xl border rounded-2xl transition-all duration-300 hover:scale-105',
  pricing: (theme: string) => theme === 'dark'
    ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 backdrop-blur-xl border rounded-3xl transition-all duration-300'
    : 'bg-black/5 hover:bg-black/10 border-black/10 hover:border-black/20 backdrop-blur-xl border rounded-3xl transition-all duration-300'
};

// Animation presets
export const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
};

// Function to generate CSS custom properties from theme config
export const generateThemeCSS = (theme: ThemeConfig): string => {
  return `
    :root {
      /* Primary Colors */
      --color-primary-50: ${theme.colors.primary[50]};
      --color-primary-100: ${theme.colors.primary[100]};
      --color-primary-200: ${theme.colors.primary[200]};
      --color-primary-300: ${theme.colors.primary[300]};
      --color-primary-400: ${theme.colors.primary[400]};
      --color-primary-500: ${theme.colors.primary[500]};
      --color-primary-600: ${theme.colors.primary[600]};
      --color-primary-700: ${theme.colors.primary[700]};
      --color-primary-800: ${theme.colors.primary[800]};
      --color-primary-900: ${theme.colors.primary[900]};
      
      /* Secondary Colors */
      --color-secondary-50: ${theme.colors.secondary[50]};
      --color-secondary-100: ${theme.colors.secondary[100]};
      --color-secondary-200: ${theme.colors.secondary[200]};
      --color-secondary-300: ${theme.colors.secondary[300]};
      --color-secondary-400: ${theme.colors.secondary[400]};
      --color-secondary-500: ${theme.colors.secondary[500]};
      --color-secondary-600: ${theme.colors.secondary[600]};
      --color-secondary-700: ${theme.colors.secondary[700]};
      --color-secondary-800: ${theme.colors.secondary[800]};
      --color-secondary-900: ${theme.colors.secondary[900]};
      
      /* Accent Colors */
      --color-accent-50: ${theme.colors.accent[50]};
      --color-accent-100: ${theme.colors.accent[100]};
      --color-accent-200: ${theme.colors.accent[200]};
      --color-accent-300: ${theme.colors.accent[300]};
      --color-accent-400: ${theme.colors.accent[400]};
      --color-accent-500: ${theme.colors.accent[500]};
      --color-accent-600: ${theme.colors.accent[600]};
      --color-accent-700: ${theme.colors.accent[700]};
      --color-accent-800: ${theme.colors.accent[800]};
      --color-accent-900: ${theme.colors.accent[900]};
      
      /* Neutral Colors */
      --color-neutral-50: ${theme.colors.neutral[50]};
      --color-neutral-100: ${theme.colors.neutral[100]};
      --color-neutral-200: ${theme.colors.neutral[200]};
      --color-neutral-300: ${theme.colors.neutral[300]};
      --color-neutral-400: ${theme.colors.neutral[400]};
      --color-neutral-500: ${theme.colors.neutral[500]};
      --color-neutral-600: ${theme.colors.neutral[600]};
      --color-neutral-700: ${theme.colors.neutral[700]};
      --color-neutral-800: ${theme.colors.neutral[800]};
      --color-neutral-900: ${theme.colors.neutral[900]};
      
      /* Semantic Colors */
      --color-success: ${theme.colors.semantic.success};
      --color-warning: ${theme.colors.semantic.warning};
      --color-error: ${theme.colors.semantic.error};
      --color-info: ${theme.colors.semantic.info};
    }
    
    ${Object.values(loadingAnimations).join('\n')}
  `;
};

// Utility function to get current theme
export const getCurrentTheme = (): ThemeConfig => {
  // In a real implementation, this could be dynamic based on school configuration
  return defaultTheme;
};