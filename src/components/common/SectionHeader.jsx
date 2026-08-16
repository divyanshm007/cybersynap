import Badge from './Badge';
import GradientText from './GradientText';

export default function SectionHeader({ eyebrow, title, highlight, description, align = 'center', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge variant="brand">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
        {highlight ? (
          <>{title} <GradientText>{highlight}</GradientText></>
        ) : title}
      </h2>
      {description && (
        <p className={`text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
