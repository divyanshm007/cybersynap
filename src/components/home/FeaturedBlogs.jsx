import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import { blogs } from '../../data/blogs';

export default function FeaturedBlogs() {
  const featured = blogs.slice(0, 3);

  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="Latest from"
          highlight="the Blog"
          description="Practical guides and analysis on enterprise software, AI automation and business technology."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((blog, i) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blog/${blog.slug}`}>
                <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] overflow-hidden hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="h-44 relative overflow-hidden">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(139,61,255,0.07), rgba(232,62,159,0.05))' }}>
                        <span className="text-4xl font-black text-purple-300">{blog.category.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Clock size={11} />
                        {blog.readTime}
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                      Read Article <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              View All Articles <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
