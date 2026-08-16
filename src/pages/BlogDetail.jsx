import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import Container from '../components/common/Container';
import CTASection from '../components/common/CTASection';
import SEO from '../components/common/SEO';

function renderContent(block, i) {
  if (block.type === 'heading') {
    return (
      <h2 key={i} className="text-xl font-bold text-[var(--text-primary)] mt-8 mb-3">
        {block.text}
      </h2>
    );
  }
  if (block.type === 'subheading') {
    return (
      <h3 key={i} className="text-lg font-semibold text-[var(--text-primary)] mt-6 mb-2">
        {block.text}
      </h3>
    );
  }
  if (block.type === 'list') {
    return (
      <ul key={i} className="list-disc pl-6 mb-4 space-y-1.5">
        {block.items.map((item, j) => (
          <li key={j} className="text-[var(--text-secondary)] leading-relaxed">{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p key={i} className="text-[var(--text-secondary)] leading-relaxed mb-4">
      {block.text}
    </p>
  );
}

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <Navigate to="/blog" replace />;

  const related = blogs.filter((b) => b.slug !== slug && b.category === blog.category).slice(0, 3);

  const wordCount = blog.content.reduce((sum, block) => {
    if (block.text) return sum + block.text.split(' ').length;
    if (block.items) return sum + block.items.reduce((s, item) => s + item.split(' ').length, 0);
    return sum;
  }, 0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image || 'https://cybersynap.com/og-image.png',
    author: { '@type': 'Person', name: 'CyberSynap Editorial Team' },
    publisher: { '@type': 'Organization', name: 'CyberSynap', logo: { '@type': 'ImageObject', url: 'https://cybersynap.com/cyber_synap_logo.png' } },
    url: `https://cybersynap.com/blog/${blog.slug}`,
    datePublished: blog.date,
    dateModified: blog.date,
    wordCount,
  };

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt}
        keywords={`${blog.category.toLowerCase()}, ${blog.title.toLowerCase()}, software blog, CyberSynap blog`}
        canonical={`/blog/${blog.slug}`}
        ogType="article"
        ogImage={blog.image || undefined}
        schema={schema}
      />
      {/* Hero */}
      <section className="bg-[var(--bg-base)] pt-32 pb-12">
        <Container>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-purple-600 transition-colors mb-6">
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                {blog.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <Clock size={11} /> {blog.readTime}
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <Calendar size={11} /> {blog.date}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {blog.excerpt}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 bg-[var(--bg-alt)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2 max-w-none">
              {blog.image ? (
                <div className="h-64 rounded-3xl overflow-hidden mb-8 border border-[var(--border)]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-64 rounded-3xl border border-[var(--border)] mb-8 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(139,61,255,0.07), rgba(232,62,159,0.05))' }}>
                  <span className="text-8xl font-black text-purple-200 select-none">{blog.category.charAt(0)}</span>
                </div>
              )}

              {blog.content.map((block, i) => renderContent(block, i))}
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              {/* Author */}
              <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-5 shadow-[var(--shadow-card)]">
                <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Author</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-xs font-black">CS</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">CyberSynap</div>
                    <div className="text-xs text-[var(--text-muted)]">Technology Team</div>
                  </div>
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-5 shadow-[var(--shadow-card)]">
                  <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">Related Articles</h4>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link key={r.slug} to={`/blog/${r.slug}`}>
                        <div className="group">
                          <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-purple-700 transition-colors leading-snug mb-1">
                            {r.title}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                            <Clock size={10} /> {r.readTime}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-5 text-white">
                <h4 className="font-bold text-sm mb-2">Need Help With This?</h4>
                <p className="text-xs text-purple-200 mb-4">Talk to our team about your specific requirements.</p>
                <Link to="/contact#consultation">
                  <button className="w-full bg-white text-purple-800 rounded-xl py-2.5 text-xs font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                    Book a Consultation <ArrowRight size={13} />
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
