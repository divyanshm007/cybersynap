import { forwardRef } from 'react';

const variants = {
  primary:
    'bg-gradient-to-r from-[#E83E9F] to-[#8B3DFF] text-white ' +
    'hover:from-[#D4338E] hover:to-[#7A2FE8] ' +
    'shadow-[0_4px_20px_rgba(139,61,255,0.25)] hover:shadow-[0_8px_28px_rgba(139,61,255,0.35)] ' +
    'hover:-translate-y-0.5',
  secondary:
    'bg-white text-[var(--text-primary)] border border-[#DDD6E5] ' +
    'hover:border-purple-400 hover:text-purple-700 hover:bg-purple-50 ' +
    'hover:shadow-[0_4px_16px_rgba(139,61,255,0.12)]',
  ghost:
    'text-purple-700 hover:bg-purple-50 hover:text-purple-800',
  outline:
    'border border-purple-300 text-purple-700 ' +
    'hover:bg-purple-50 hover:border-purple-500 hover:text-purple-800',
  dark:
    'bg-[var(--bg-alt)] text-[var(--text-primary)] border border-[var(--border)] ' +
    'hover:border-purple-300 hover:bg-[var(--bg-card-hover)]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2',
  xl: 'px-10 py-4 text-base gap-2.5',
};

const Button = forwardRef(({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => (
  <button
    ref={ref}
    className={`
      inline-flex items-center justify-center font-semibold rounded-2xl
      transition-all duration-200 cursor-pointer select-none
      active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = 'Button';
export default Button;
