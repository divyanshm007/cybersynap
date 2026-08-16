import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { industries } from '../../data/industries';

const colorMap = {
  orange:  { icon: 'text-orange-500', bg: 'bg-orange-50',  border: 'border-orange-100' },
  pink:    { icon: 'text-pink-500',   bg: 'bg-pink-50',    border: 'border-pink-100' },
  red:     { icon: 'text-red-500',    bg: 'bg-red-50',     border: 'border-red-100' },
  blue:    { icon: 'text-blue-500',   bg: 'bg-blue-50',    border: 'border-blue-100' },
  purple:  { icon: 'text-purple-600', bg: 'bg-purple-50',  border: 'border-purple-100' },
  yellow:  { icon: 'text-yellow-500', bg: 'bg-yellow-50',  border: 'border-yellow-100' },
  teal:    { icon: 'text-teal-500',   bg: 'bg-teal-50',    border: 'border-teal-100' },
  green:   { icon: 'text-green-500',  bg: 'bg-green-50',   border: 'border-green-100' },
  amber:   { icon: 'text-amber-500',  bg: 'bg-amber-50',   border: 'border-amber-100' },
};

export default function HomeIndustries() {
  return (
    <section className="py-24 bg-[var(--bg-alt)]">
      <Container>
        <SectionHeader
          eyebrow="Industry Focus"
          title="Built for Your"
          highlight="Industry"
          description="We understand the operational demands of the industries we serve. Our solutions are designed around real business workflows, not generic use cases."
          className="mb-14"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const colors = colorMap[industry.color] || colorMap.purple;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to={`/industries/${industry.slug}`}>
                  <div className="group relative rounded-2xl border border-[var(--border)] overflow-hidden hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 bg-[var(--bg-surface)]">
                    {/* Background image with dark overlay */}
                    {industry.image && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={industry.image}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,5,25,0.45) 0%, rgba(10,5,25,0.70) 60%, rgba(10,5,25,0.85) 100%)' }} />
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative z-10 p-5 text-center">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all bg-white border border-white/60">
                        <Icon size={22} className={colors.icon} strokeWidth={1.75} />
                      </div>
                      <h3 className="text-xs font-bold text-white leading-snug">
                        {industry.title.split(' & ')[0]}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
