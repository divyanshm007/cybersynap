import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from './Button';

export default function CTASection({
  title = 'Ready to Build Something Exceptional?',
  description = 'Talk to our team about your requirements. We will tell you honestly whether we are the right fit and what it would take to deliver.',
  primaryLabel = 'Book a Consultation',
  primaryHref = '/contact',
  secondaryLabel = 'View Our Work',
  secondaryHref = '/case-studies',
}) {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #E83E9F 0%, #8B3DFF 100%)',
            boxShadow: '0 24px 64px rgba(139,61,255,0.20), 0 0 0 1px rgba(139,61,255,0.15)',
          }}
        >
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }} />
          {/* Top-right glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #FFFFFF, transparent)' }} />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to={primaryHref}>
                <Button variant="secondary" size="lg" className="bg-white text-purple-800 hover:bg-white border-0 shadow-lg font-semibold">
                  {primaryLabel} <ArrowRight size={18} />
                </Button>
              </Link>
              {secondaryLabel && (
                <Link to={secondaryHref}>
                  <Button variant="ghost" size="lg" className="text-white border border-white/30 hover:bg-white/15">
                    {secondaryLabel}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
