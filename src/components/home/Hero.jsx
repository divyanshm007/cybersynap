import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import GradientText from '../common/GradientText';
import Container from '../common/Container';

const trust = ['Custom Software', 'AI Automation', 'ERP & CRM', 'Restaurant & Retail POS'];

function FloatingCard({ className, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute rounded-2xl p-4 ${className}`}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(20,15,30,0.08)',
        boxShadow: '0 8px 32px rgba(40,20,60,0.08)',
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden min-h-[100svh]"
      style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF8FC 45%, #F8F0FB 80%, #F3E8F8 100%)' }}
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #8B3DFF, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #E83E9F, transparent 70%)' }}
        />
      </div>

      <Container className="relative py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(232,62,159,0.08), rgba(139,61,255,0.08))',
                border: '1px solid rgba(139,61,255,0.18)',
              }}
            >
              <Sparkles size={13} className="text-pink-500" />
              <span className="text-xs font-semibold text-purple-700 tracking-wider uppercase">
                Software · AI Automation · Business Platforms
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-none tracking-tighter mb-6"
            >
              Technology That
              <br />
              <GradientText>Moves Your</GradientText>
              <br />
              Business Forward.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
            >
              CyberSynap builds custom software, business platforms, AI automation and digital solutions for growing and enterprise businesses worldwide.
            </motion.p>

            {/* Trust tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {trust.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 size={14} className="text-purple-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/contact#consultation">
                <Button size="lg">
                  Book a Consultation <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="secondary" size="lg">Explore Solutions</Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">
            {/* Central hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-10 w-[200px] h-[200px] rounded-3xl flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #E83E9F, #8B3DFF)',
                boxShadow: '0 24px 64px rgba(139,61,255,0.30), 0 0 0 1px rgba(139,61,255,0.20)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center mb-3 p-2">
                <img src="/favicon.png" alt="CyberSynap" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-bold text-sm">CyberSynap</span>
              <span className="text-white/70 text-xs mt-1">Platform</span>
            </motion.div>

            {/* Circle bg glow */}
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(139,61,255,0.10) 0%, rgba(232,62,159,0.06) 50%, transparent 75%)' }} />

            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-purple-300/70 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-8 rounded-full border border-dashed border-pink-300/60 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />

            {/* Floating info cards */}
            <FloatingCard className="-top-4 -left-10 w-44" delay={0.5}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-[var(--text-primary)]">ERP System</span>
              </div>
              <div className="text-xs text-[var(--text-muted)]">Finance · HR · Inventory</div>
            </FloatingCard>

            <FloatingCard className="top-16 -right-8 w-40" delay={0.6}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-xs font-semibold text-[var(--text-primary)]">Restaurant POS</span>
              </div>
              <div className="text-xs text-[var(--text-muted)]">Orders · KDS · Reports</div>
            </FloatingCard>

            <FloatingCard className="-bottom-4 right-4 w-44" delay={0.7}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
                <span className="text-xs font-semibold text-[var(--text-primary)]">AI Automation</span>
              </div>
              <div className="text-xs text-[var(--text-muted)]">Reduce manual work 80%</div>
            </FloatingCard>

            <FloatingCard className="bottom-16 -left-12 w-40" delay={0.8}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold text-[var(--text-primary)]">Cloud & DevOps</span>
              </div>
              <div className="text-xs text-[var(--text-muted)]">99.9% uptime SLA</div>
            </FloatingCard>
          </div>
        </div>
      </Container>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-base))' }} />
    </section>
  );
}
