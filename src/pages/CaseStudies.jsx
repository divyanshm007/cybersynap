import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import CTASection from '../components/common/CTASection';
import { caseStudies } from '../data/caseStudies';
import SEO from '../components/common/SEO';

const allTags = ['All', ...new Set(caseStudies.flatMap((c) => c.category))];

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.category.includes(activeTag));

  return (
    <>
      <SEO
        title="Case Studies — Real Business Results with ERP, CRM & Software Solutions"
        description="See how CyberSynap's ERP, CRM, HRMS, WMS and POS solutions transformed businesses across retail, restaurants, healthcare, manufacturing and logistics. Real results, real clients."
        keywords="software case studies, ERP implementation results, CRM success stories, business software projects, software development portfolio, CyberSynap projects"
        canonical="/case-studies"
      />
      <PageHero
        eyebrow="Case Studies"
        title="Real Projects,"
        highlight="Real Results"
        description="How we have helped businesses solve complex operational challenges with technology built precisely for their needs."
        primaryCta={{ label: 'Book a Consultation', href: '/contact#consultation' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />

      <section className="py-20 bg-[var(--bg-base)]">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTag === tag
                    ? 'bg-gradient-to-r from-[#E83E9F] to-[#8B3DFF] text-white shadow-[0_4px_20px_rgba(139,61,255,0.25)]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-purple-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filtered.map((study, i) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/case-studies/${study.slug}`}>
                  <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] overflow-hidden hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-7 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
                      <span className="text-xs font-semibold text-purple-200 tracking-wider uppercase mb-2 block">
                        {study.industry} · {study.duration}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-snug">{study.title}</h3>
                    </div>

                    <div className="p-7">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-3">
                        {study.challenge}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {study.results.slice(0, 2).map((r, ri) => (
                          <div key={ri} className="bg-[var(--bg-surface-2)] rounded-xl border border-[var(--border)] p-3">
                            <div className="text-xs text-[var(--text-muted)] mb-0.5">{r.metric}</div>
                            <div className="text-sm font-bold text-purple-600">{r.after}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {study.category.map((tag) => (
                          <span key={tag} className="text-xs font-medium text-purple-600 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                        Read Case Study <ArrowRight size={15} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
