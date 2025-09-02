import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  theme: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  theme,
  children,
  icon: Icon,
  iconPosition = 'right',
  onClick,
  disabled = false,
  loading = false,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  const variantClasses = {
    primary: theme === 'dark'
      ? 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl transform hover:scale-105'
      : 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: theme === 'dark'
      ? 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 shadow-lg hover:shadow-xl transform hover:scale-105'
      : 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 shadow-lg hover:shadow-xl transform hover:scale-105',
    outline: theme === 'dark'
      ? 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500'
      : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: theme === 'dark'
      ? 'text-primary-500 hover:bg-primary-500/10 focus:ring-primary-500'
      : 'text-primary-500 hover:bg-primary-500/10 focus:ring-primary-500'
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed transform-none hover:scale-100';

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled || loading ? disabledClasses : ''}
    ${className}
  `.trim();

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
    >
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} mr-2`} />
      )}
      
      {children}
      
      {Icon && iconPosition === 'right' && !loading && (
        <motion.div
          className="ml-2"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />
        </motion.div>
      )}
    </motion.button>
  );
};

export default Button;