import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { caseStudies } from '../../data/caseStudies';

const featured = caseStudies.filter((c) => c.featured);

export default function FeaturedCaseStudies() {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <Container>
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Projects,"
          highlight="Real Results"
          description="Explore how we have helped businesses solve real operational challenges with custom technology."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {featured.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/case-studies/${study.slug}`}>
                <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] overflow-hidden hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                  {/* Header — keeps gradient for visual interest */}
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
                    <span className="text-xs font-semibold text-purple-200 tracking-wider uppercase mb-2 block">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{study.title}</h3>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-3">
                      {study.challenge}
                    </p>

                    {/* Results preview */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {study.results.slice(0, 2).map((r, ri) => (
                        <div key={ri} className="bg-[var(--bg-surface-2)] rounded-xl border border-[var(--border)] p-3">
                          <div className="text-xs text-[var(--text-muted)] mb-0.5">{r.metric}</div>
                          <div className="text-sm font-bold text-purple-600">{r.after}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
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

        <div className="mt-8 text-center">
          <Link to="/case-studies">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              View All Case Studies <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
