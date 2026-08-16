import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import IconBox from '../common/IconBox';
import { services } from '../../data/services';

export default function HomeServices() {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <Container>
        <SectionHeader
          eyebrow="What We Build"
          title="Engineering Services"
          highlight="for Enterprise"
          description="From custom software to AI automation — we deliver the full spectrum of technology that modern businesses need to grow and compete."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/services/${service.slug}`}>
                <div className="group h-full bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-5 hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                  <IconBox
                    icon={service.icon}
                    variant={service.color === 'pink' ? 'pink' : 'soft'}
                    size="md"
                    className="mb-4"
                  />
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-purple-600 transition-colors leading-snug">
                    {service.shortTitle}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                    {service.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
