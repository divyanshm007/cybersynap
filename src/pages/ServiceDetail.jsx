import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { services } from '../data/services';
import Container from '../components/common/Container';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import IconBox from '../components/common/IconBox';
import GradientText from '../components/common/GradientText';
import SEO from '../components/common/SEO';

const serviceKeywords = {
  'custom-software-development': 'custom software development, bespoke software, software development company India, enterprise software development',
  'enterprise-software-development': 'enterprise software development, large-scale software solutions, enterprise application development India, scalable business software',
  'web-development': 'web development company, custom web application development, React web development, professional website development',
  'mobile-app-development': 'mobile app development India, iOS Android app development, cross-platform app development, Flutter React Native development',
  'ai-solutions': 'AI automation services, artificial intelligence solutions, business process automation, AI software development India, machine learning development',
  'cloud-solutions': 'cloud services India, cloud migration, AWS Azure GCP deployment, cloud infrastructure, managed cloud services',
  'devops-services': 'DevOps consulting India, CI/CD pipeline, Kubernetes Docker deployment, DevOps automation, DevOps as a service',
  'pos-software-development': 'POS system development, point of sale software, restaurant POS, retail POS system, custom POS development India',
  'dot-net-development': '.NET development company India, ASP.NET development, C# development, .NET Core application, Microsoft technology development',
  'react-development': 'React development company, React.js web application, frontend development India, React Native app, hire React developers',
  'angular-development': 'Angular development company, Angular web application, enterprise Angular development, frontend development India, hire Angular developers',
  'real-estate-software-development': 'real estate software development, property management software, real estate CRM, real estate ERP India, property management system',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'CyberSynap',
      url: 'https://cybersynap.com',
    },
    areaServed: ['IN', 'US', 'GB', 'AE', 'AU'],
    url: `https://cybersynap.com/services/${slug}`,
  };

  return (
    <>
      <SEO
        title={`${service.title} Services — Expert ${service.title} Company`}
        description={`${service.excerpt} CyberSynap delivers professional ${service.title.toLowerCase()} services for businesses worldwide. Contact us for a free consultation.`}
        keywords={serviceKeywords[slug] || `${service.title.toLowerCase()}, ${service.title.toLowerCase()} company, ${service.title.toLowerCase()} India`}
        canonical={`/services/${slug}`}
        schema={schema}
      />
      {/* Hero */}
      <section className="relative bg-[var(--bg-base)] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #A855F7, transparent 70%)' }} />
        <Container className="relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <div className="mb-5">
                <Badge variant={service.color === 'pink' ? 'pink' : 'purple'}>Service</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-4 italic">
                {service.tagline}
              </p>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact#consultation">
                  <Button size="lg">Book a Consultation <ArrowRight size={17} /></Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="secondary" size="lg">View Case Studies</Button>
                </Link>
              </div>
            </div>

            {/* Benefits card */}
            <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-5">What You Get</h3>
              <ul className="space-y-3.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--text-secondary)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 bg-[var(--bg-alt)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              How We <GradientText>Deliver</GradientText>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">A structured process that delivers results without surprises.</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {service.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-5 bg-[var(--bg-base)] rounded-2xl border border-[var(--border)] p-5"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-black leading-none">{step.step}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">{step.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[var(--bg-alt)]">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Technologies We Use</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)]">
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />

      {/* Back to Services */}
      <div className="bg-[var(--bg-base)] py-8">
        <Container>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-purple-600 transition-colors">
            <ArrowLeft size={15} className="text-purple-500" /> Back to Services
          </Link>
        </Container>
      </div>
    </>
  );
}
