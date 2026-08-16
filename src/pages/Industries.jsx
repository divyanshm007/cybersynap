import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import CTASection from '../components/common/CTASection';
import { industries } from '../data/industries';
import SEO from '../components/common/SEO';

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve — Restaurant, Retail, Healthcare, Manufacturing & More"
        description="CyberSynap builds ERP, CRM, POS and automation software for restaurants, retail, healthcare, manufacturing, logistics, education, real estate and finance industries. Industry-specific solutions."
        keywords="software for restaurants, retail software, healthcare software, manufacturing ERP, logistics software, education software, real estate software, industry specific software India"
        canonical="/industries"
      />
      <PageHero
        eyebrow="Industries"
        title="Technology That"
        highlight="Understands Your World"
        description="We have built deep expertise in the industries we serve. Our solutions reflect the real operational demands of your business environment."
        primaryCta={{ label: 'Book a Consultation', href: '/contact#consultation' }}
        secondaryCta={{ label: 'View Solutions', href: '/solutions' }}
      />

      <section className="py-20 bg-[var(--bg-base)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link to={`/industries/${industry.slug}`}>
                    <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-7 hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-5 group-hover:bg-purple-100 transition-all">
                        <Icon size={26} className="text-purple-600" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-purple-700 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {industry.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                        Explore <ArrowRight size={15} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
