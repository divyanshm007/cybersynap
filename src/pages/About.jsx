import { motion } from 'framer-motion';
import { Globe2, Award, Zap, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import GradientText from '../components/common/GradientText';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

const values = [
  { icon: Award, title: 'Engineering Excellence', desc: 'We hold ourselves to the highest standards of code quality, architecture and delivery. There is no acceptable standard below excellent.' },
  { icon: HeartHandshake, title: 'Long-term Partnership', desc: 'We are not transaction-focused. We build long-term relationships with clients and measure our success by their business outcomes.' },
  { icon: Zap, title: 'Pragmatic Innovation', desc: 'We adopt new technology — including AI — when it creates genuine business value. We do not chase trends at the expense of reliability.' },
  { icon: Globe2, title: 'Global Perspective', desc: 'We serve businesses across the world and bring an international perspective to every engagement — market by market.' },
];

const team = [
  { name: '[Placeholder]', role: 'Chief Executive Officer', bio: 'Enterprise software leadership across global markets.' },
  { name: '[Placeholder]', role: 'Chief Technology Officer', bio: 'Full-stack engineering with deep expertise in AI and distributed systems.' },
  { name: '[Placeholder]', role: 'Head of Product', bio: 'UX and product strategy for complex business software environments.' },
  { name: '[Placeholder]', role: 'Head of Delivery', bio: 'Project delivery and client success across 100+ enterprise implementations.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About CyberSynap — Software Development Company in Lucknow, India"
        description="CyberSynap is a leading software development company based in Lucknow, India. We build ERP, CRM, HRMS, WMS, POS and AI automation solutions for businesses worldwide. Learn about our team and mission."
        keywords="CyberSynap, software company Lucknow, software development company India, IT company Lucknow, ERP CRM software company, about CyberSynap"
        canonical="/about"
      />
      {/* Hero */}
      <section className="relative bg-[var(--bg-base)] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #8B3DFF, transparent 70%)' }} />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: 'linear-gradient(135deg, rgba(232,62,159,0.08), rgba(139,61,255,0.08))', border: '1px solid rgba(139,61,255,0.18)' }}>
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">About CyberSynap</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-none tracking-tighter mb-6">
              We Build Technology
              <br />
              <GradientText>That Matters.</GradientText>
            </h1>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
              CyberSynap is a premium software engineering and digital product company. We build the technology that helps serious businesses operate more intelligently and grow more confidently.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[var(--bg-alt)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                Our <GradientText>Mission</GradientText>
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                CyberSynap exists to make serious enterprise-grade technology accessible to businesses that are serious about growth. We believe that powerful, well-engineered software should not be the exclusive preserve of large corporations with vast technology budgets.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We serve businesses that have outgrown generic solutions and are ready to invest in technology that is built precisely for how they operate — from growing regional businesses to established enterprises expanding into new markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '8+', label: 'Years of Experience' },
                { value: '150+', label: 'Projects Delivered' },
                { value: '20+', label: 'Countries Served' },
                { value: '98%', label: 'Client Retention Rate' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--bg-alt)]">
        <Container>
          <SectionHeader
            eyebrow="Our Values"
            title="What Guides"
            highlight="Our Work"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-7 shadow-[var(--shadow-card)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-purple-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Global */}
      <section className="py-20 bg-[var(--bg-base)]">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Where We <GradientText>Operate</GradientText>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              We serve businesses across global markets — bringing deep technical capability and cross-market understanding to every engagement.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['United States', 'United Kingdom', 'United Arab Emirates', 'Australia', 'Canada', 'Singapore', 'Europe', 'Global'].map((region) => (
              <span key={region} className="px-5 py-2.5 bg-[var(--bg-base)] rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] shadow-[var(--shadow-card)]">
                {region}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Work With CyberSynap"
        description="We would love to understand your business and explore whether we are the right partner for your technology goals."
        primaryLabel="Book a Consultation"
        secondaryLabel="View Our Work"
        secondaryHref="/case-studies"
      />
    </>
  );
}
