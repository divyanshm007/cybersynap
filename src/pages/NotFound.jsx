import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Layers, BookOpen } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

const links = [
  { label: 'Home', href: '/', icon: Home, desc: 'Back to the homepage' },
  { label: 'Our Services', href: '/services', icon: Layers, desc: 'See all software services' },
  { label: 'Our Solutions', href: '/solutions', icon: BookOpen, desc: 'ERP, CRM, HRMS, WMS & more' },
];

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you are looking for doesn't exist. Return to CyberSynap and find the software solution you need." noindex />
      <section className="min-h-screen flex items-center bg-[var(--bg-base)] pt-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* 404 visual */}
              <div className="mb-8">
                <div
                  className="inline-flex items-center justify-center text-8xl font-black tracking-tighter mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #8B3DFF, #E83E9F)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  404
                </div>
                <div className="text-5xl">😕</div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-4">
                Page Not Found
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
                The page you are looking for doesn't exist or has been moved. Let's get you back on track.
              </p>

              {/* Quick links */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {links.map(({ label, href, icon: Icon, desc }) => (
                  <Link key={href} to={href}
                    className="group flex flex-col items-center gap-2 bg-[var(--bg-alt)] rounded-2xl border border-[var(--border)] p-5 hover:border-purple-300 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                      <Icon size={18} className="text-purple-600" />
                    </div>
                    <div className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-purple-700 transition-colors">{label}</div>
                    <div className="text-xs text-[var(--text-muted)]">{desc}</div>
                  </Link>
                ))}
              </div>

              <Link to="/book-consultation">
                <Button size="lg">
                  Book a Free Consultation <ArrowRight size={17} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
