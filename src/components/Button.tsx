
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 uppercase tracking-[0.2em] text-[10px] clip-path-polygon';
  
  const variants = {
    primary: 'bg-primary-500 text-slate-950 hover:bg-white hover:shadow-[0_0_30px_rgba(0,242,255,0.6)]',
    secondary: 'bg-holy-gold text-slate-950 hover:brightness-125',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
    glass: 'glass text-current hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 rounded-lg',
    md: 'px-8 py-4 rounded-xl',
    lg: 'px-12 py-6 text-xs rounded-2xl'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
