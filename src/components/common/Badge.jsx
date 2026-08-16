const variants = {
  purple: 'bg-purple-50 text-purple-700 border border-purple-200',
  pink:   'bg-pink-50 text-pink-700 border border-pink-200',
  brand:  'bg-gradient-to-r from-pink-50 to-purple-50 text-purple-700 border border-purple-200',
  muted:  'bg-[var(--bg-alt)] text-[var(--text-secondary)] border border-[var(--border)]',
};

export default function Badge({ children, variant = 'purple', className = '' }) {
  return (
    <span className={`badge text-xs font-semibold tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
