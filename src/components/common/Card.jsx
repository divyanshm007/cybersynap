export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)]
        shadow-[var(--shadow-card)]
        ${hover
          ? 'hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 hover:border-purple-200 hover:bg-[var(--bg-card-hover)] transition-all duration-300'
          : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
