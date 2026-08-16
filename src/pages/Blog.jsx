import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import { blogs } from '../data/blogs';
import SEO from '../components/common/SEO';

const allCategories = ['All', ...new Set(blogs.map((b) => b.category))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <SEO
        title="Blog — Software, ERP, CRM, AI & Technology Insights"
        description="Read CyberSynap's expert articles on ERP software, CRM systems, AI automation, HRMS, WMS, POS technology and digital transformation for businesses. Stay ahead with our insights."
        keywords="ERP blog, CRM blog, software development blog, AI automation articles, HRMS insights, WMS technology, business software tips, technology blog India"
        canonical="/blog"
      />
      <PageHero
        eyebrow="Blog"
        title="Insights on"
        highlight="Business Technology"
        description="Practical guides and analysis on enterprise software, AI automation and digital transformation."
      />

      <section className="py-20 bg-[var(--bg-base)]">
        <Container>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#E83E9F] to-[#8B3DFF] text-white shadow-[0_4px_20px_rgba(139,61,255,0.25)]'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-purple-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="group h-full bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] overflow-hidden hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                    {/* Image area */}
                    <div className="h-48 relative overflow-hidden">
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
                          <span className="text-6xl font-black text-purple-400 select-none">{blog.category.charAt(0)}</span>
                        </div>
                      )}
                      <span className="absolute top-4 left-4 text-xs font-semibold text-purple-600 bg-white/90 backdrop-blur-sm border border-purple-200 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                        <span>{blog.date}</span>
                        <span>·</span>
                        <div className="flex items-center gap-1">
                          <Clock size={11} />
                          {blog.readTime}
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug mb-2 group-hover:text-purple-700 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                        Read Article <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
