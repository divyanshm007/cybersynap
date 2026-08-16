import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import { solutions, solutionCategories } from '../data/solutions';
import SEO from '../components/common/SEO';

export default function Solutions() {
  return (
    <>
      <SEO
        title="Business Software Solutions — ERP, CRM, HRMS, WMS, POS Systems"
        description="CyberSynap delivers ERP, CRM, HRMS, WMS, Restaurant POS, Retail POS, Pharmacy POS and KDS software solutions for businesses of all sizes. Request a free demo today."
        keywords="ERP software, CRM software, HRMS software, WMS software, restaurant POS, retail POS, pharmacy POS, KDS system, business software solutions India, enterprise software"
        canonical="/solutions"
      />
      <PageHero
        eyebrow="Products"
        title="Business Software"
        highlight="Built to Last"
        description="Proven software products for the most demanding operational environments — built with the depth and reliability your business requires."
        primaryCta={{ label: 'Request a Demo', href: '/contact' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />

      <section className="py-20 bg-[var(--bg-base)]">
        <Container>
          {solutionCategories.map((cat, ci) => {
            const catSolutions = solutions.filter((s) => cat.solutions.includes(s.slug));
            return (
              <div key={cat.name} className={ci > 0 ? 'mt-16' : ''}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1">{cat.name}</h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#E83E9F] to-[#8B3DFF] rounded-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catSolutions.map((solution, i) => (
                    <motion.div
                      key={solution.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <Link to={`/solutions/${solution.slug}`}>
                        <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-6 hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                          <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-purple-700 transition-colors">
                            {solution.title}
                          </h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                            {solution.tagline}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {solution.industries.slice(0, 3).map((ind) => (
                              <span key={ind} className="text-xs font-medium text-purple-600 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-full">
                                {ind}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                            View Solution <ArrowRight size={14} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CTASection
        title="Want to See These in Action?"
        description="Book a personalised demo and see how our software products perform in your specific business context."
        primaryLabel="Request a Demo"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />
    </>
  );
}
