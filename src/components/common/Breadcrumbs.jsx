import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-sm text-[var(--text-muted)] mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight size={13} className="opacity-40" />}
          {index === items.length - 1 ? (
            <span className="text-[var(--text-secondary)] font-medium truncate max-w-[200px]">{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:text-purple-400 transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
