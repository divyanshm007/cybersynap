import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import IconBox from '../components/common/IconBox';
import CTASection from '../components/common/CTASection';
import { services } from '../data/services';
import SEO from '../components/common/SEO';

export default function Services() {
  return (
    <>
      <SEO
        title="Software Development Services — ERP, CRM, AI Automation & More"
        description="CyberSynap offers custom software development, web & mobile app development, ERP development, CRM development, AI automation, cloud & DevOps services. Expert team, global clients."
        keywords="software development services India, ERP development services, CRM development, AI automation services, web development company, mobile app development, cloud DevOps, custom software services"
        canonical="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Engineering Services for"
        highlight="Enterprise"
        description="From custom software development to AI automation and cloud infrastructure — the full spectrum of technology your business needs."
        primaryCta={{ label: 'Book a Consultation', href: '/contact#consultation' }}
        secondaryCta={{ label: 'View Case Studies', href: '/case-studies' }}
      />

      <section className="py-20 bg-[var(--bg-base)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-7 hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                    <IconBox
                      icon={service.icon}
                      variant={service.color === 'pink' ? 'pink' : 'soft'}
                      size="lg"
                      className="mb-5"
                    />
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-purple-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {service.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={15} />
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
