import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { industries } from '../data/industries';
import { solutions } from '../data/solutions';
import Container from '../components/common/Container';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import GradientText from '../components/common/GradientText';
import SEO from '../components/common/SEO';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <Navigate to="/industries" replace />;

  const Icon = industry.icon;
  const relatedSolutions = solutions.filter((s) => industry.solutions.includes(s.slug));

  return (
    <>
      <SEO
        title={`Software Solutions for ${industry.title} Industry`}
        description={`CyberSynap provides specialised ${industry.title.toLowerCase()} software including ${relatedSolutions.map(s => s.title).join(', ')}. Industry-specific ERP, POS and automation solutions. Get a free demo.`}
        keywords={`${industry.title.toLowerCase()} software, ${industry.title.toLowerCase()} management system, ${industry.title.toLowerCase()} technology, software for ${industry.title.toLowerCase()}, ${industry.title.toLowerCase()} automation India`}
        canonical={`/industries/${slug}`}
      />
      {/* Hero */}
      <section className="relative bg-[var(--bg-base)] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #8B3DFF, transparent 70%)' }} />
        <Container className="relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Industries', href: '/industries' },
            { label: industry.title },
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5">
                <Icon size={30} className="text-purple-600" strokeWidth={1.75} />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
                {industry.title}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] italic mb-4">
                {industry.tagline}
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact#consultation">
                  <Button size="lg">Book a Consultation <ArrowRight size={17} /></Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="secondary" size="lg">View Solutions</Button>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {industry.stats.map((stat) => (
                <div key={stat.label} className="bg-[var(--bg-surface)] rounded-xl sm:rounded-2xl border border-[var(--border)] p-3 sm:p-5 text-center shadow-[var(--shadow-card)]">
                  <div className="text-xl sm:text-2xl font-black gradient-text mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-[var(--text-muted)] leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-[var(--bg-alt)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Common <GradientText>Challenges</GradientText> We Solve
              </h2>
              <ul className="space-y-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text-secondary)]">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related solutions */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Recommended <GradientText>Solutions</GradientText>
              </h2>
              <div className="space-y-3">
                {relatedSolutions.map((sol) => (
                  <Link key={sol.slug} to={`/solutions/${sol.slug}`}>
                    <div className="flex items-center justify-between bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-4 hover:border-purple-200 hover:shadow-sm transition-all group">
                      <div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-purple-700 transition-colors">
                          {sol.title}
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">{sol.tagline}</p>
                      </div>
                      <ArrowRight size={16} className="text-purple-500 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />

      <div className="bg-[var(--bg-base)] py-8">
        <Container>
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-purple-600 transition-colors">
            <ArrowLeft size={15} /> Back to Industries
          </Link>
        </Container>
      </div>
    </>
  );
}
