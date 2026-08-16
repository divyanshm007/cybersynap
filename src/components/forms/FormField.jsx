const fieldBase =
  'w-full px-4 py-3 rounded-xl border text-sm bg-white text-[var(--text-primary)] ' +
  'placeholder-[var(--text-muted)] outline-none transition-all duration-200 ';

const fieldNormal = 'border-[#DDD6E5] focus:border-purple-400 focus:ring-2 focus:ring-purple-400/15';
const fieldError  = 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/15';

export function Input({ label, error, className = '', ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
          {label}
        </label>
      )}
      <input className={`${fieldBase} ${error ? fieldError : fieldNormal}`} {...props} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Textarea({ label, error, className = '', rows = 4, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`${fieldBase} resize-none ${error ? fieldError : fieldNormal}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Select({ label, error, className = '', children, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
          {label}
        </label>
      )}
      <select
        className={`${fieldBase} cursor-pointer ${error ? fieldError : fieldNormal}`}
        style={{ colorScheme: 'light' }}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
