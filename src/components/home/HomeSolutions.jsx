import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { solutions } from '../../data/solutions';

const featured = ['erp', 'crm', 'restaurant-pos', 'retail-pos', 'wms', 'kds'];
const displaySolutions = solutions.filter((s) => featured.includes(s.slug));

export default function HomeSolutions() {
  return (
    <section className="py-24 bg-[var(--bg-alt)]">
      <Container>
        <SectionHeader
          eyebrow="Business Software"
          title="Our Solutions"
          highlight="Platform"
          description="Proven software products for the most demanding business environments. Every solution is built with the depth and reliability your operations require."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySolutions.map((solution, i) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/solutions/${solution.slug}`}>
                <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-6 hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4">
                    <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                      solution.color === 'pink'
                        ? 'bg-pink-50 text-pink-600 border border-pink-200'
                        : 'bg-purple-50 text-purple-600 border border-purple-200'
                    }`}>
                      {solution.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-purple-700 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {solution.tagline}
                  </p>
                  <div className="flex items-center gap-1 text-purple-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/solutions">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              View All Solutions <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
