import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';
import Container from '../components/common/Container';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import GradientText from '../components/common/GradientText';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) return <Navigate to="/case-studies" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 to-pink-600 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 -translate-y-20 translate-x-20" />
        <Container className="relative">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-purple-200 text-xs font-semibold tracking-wider uppercase">Case Study</span>
            <span className="text-purple-300">·</span>
            <span className="text-purple-200 text-xs">{study.industry}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 max-w-3xl"
          >
            {study.title}
          </motion.h1>

          <div className="flex flex-wrap gap-4 text-sm text-purple-200">
            <span>Client: {study.client}</span>
            <span>Duration: {study.duration}</span>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-[var(--bg-base)]">
        <Container>
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: study.title },
          ]} />

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Challenge */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-black">1</span>
                  The Challenge
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-black">2</span>
                  The Solution
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-5">{study.solution}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {study.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] p-3.5">
                      <CheckCircle2 size={15} className="text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-black">3</span>
                  The Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.results.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="rounded-2xl border border-purple-200 p-5"
                      style={{ background: 'linear-gradient(135deg, rgba(139,61,255,0.06), rgba(232,62,159,0.04))' }}
                    >
                      <div className="text-xs text-[var(--text-muted)] mb-2">{r.metric}</div>
                      <div className="flex items-center gap-3">
                        {r.before && (
                          <div className="text-sm text-[var(--text-muted)] line-through">{r.before}</div>
                        )}
                        <TrendingUp size={14} className="text-purple-500" />
                        <div className="text-lg font-bold text-purple-600">{r.after}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4">Project Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-[var(--text-muted)] text-xs">Industry</dt>
                    <dd className="font-medium text-[var(--text-primary)]">{study.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)] text-xs">Duration</dt>
                    <dd className="font-medium text-[var(--text-primary)]">{study.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--text-muted)] text-xs">Categories</dt>
                    <dd className="flex flex-wrap gap-1.5 mt-1">
                      {study.category.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-purple-600 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-surface-2)] px-3 py-1.5 rounded-full border border-[var(--border)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-6 text-white">
                <h3 className="text-sm font-bold mb-2">Have a Similar Challenge?</h3>
                <p className="text-xs text-purple-200 mb-4">Talk to us about your requirements. No obligation.</p>
                <Link to="/contact#consultation">
                  <Button variant="secondary" className="w-full justify-center bg-white text-purple-800 hover:bg-white border-0 text-sm">
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />

      <div className="bg-[var(--bg-base)] py-8">
        <Container>
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-purple-600 transition-colors">
            <ArrowLeft size={15} /> Back to Case Studies
          </Link>
        </Container>
      </div>
    </>
  );
}
