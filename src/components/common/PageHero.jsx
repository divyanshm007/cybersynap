import { motion } from 'framer-motion';
import Container from './Container';
import Badge from './Badge';
import GradientText from './GradientText';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, highlight, description, primaryCta, secondaryCta, children }) {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20" style={{ background: 'var(--bg-alt)' }}>
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #8B3DFF, transparent 70%)' }} />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #E83E9F, transparent 70%)' }} />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-5">
              <Badge variant="brand">{eyebrow}</Badge>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
            {highlight ? <>{title} <GradientText>{highlight}</GradientText></> : title}
          </h1>
          {description && (
            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-3">
              {primaryCta && (
                <Link to={primaryCta.href}><Button size="lg">{primaryCta.label}</Button></Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.href}><Button variant="secondary" size="lg">{secondaryCta.label}</Button></Link>
              )}
            </div>
          )}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}
