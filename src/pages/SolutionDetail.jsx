import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { solutions } from '../data/solutions';
import Container from '../components/common/Container';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import GradientText from '../components/common/GradientText';
import DemoModal from '../components/modals/DemoModal';
import SEO from '../components/common/SEO';

const solutionMeta = {
  erp: {
    title: 'ERP Software — Enterprise Resource Planning System',
    description: 'CyberSynap ERP software unifies finance, HR, inventory, procurement and reporting in one platform. Best ERP system for manufacturing, retail & logistics. Request a free demo.',
    keywords: 'ERP software, ERP system, enterprise resource planning software, ERP development India, ERP for manufacturing, ERP for retail, best ERP software, cloud ERP, ERP solution Lucknow',
  },
  crm: {
    title: 'CRM Software — Customer Relationship Management System',
    description: 'CyberSynap CRM software helps you track leads, manage sales pipelines and grow revenue. Custom CRM solution for B2B and B2C businesses. Get a free demo today.',
    keywords: 'CRM software, CRM system, customer relationship management software, CRM development India, sales CRM, best CRM software, cloud CRM, CRM solution',
  },
  hrms: {
    title: 'HRMS Software — HR & Payroll Management System',
    description: 'CyberSynap HRMS automates payroll, attendance, recruitment and employee management. Best HRMS software for growing businesses in India. Free demo available.',
    keywords: 'HRMS software, HR management system, payroll software India, human resource management system, HRMS development, attendance management software, employee management software',
  },
  wms: {
    title: 'WMS Software — Warehouse Management System',
    description: 'CyberSynap WMS software optimises receiving, picking, packing and dispatch operations. Best warehouse management system for logistics and supply chain. Book a demo.',
    keywords: 'WMS software, warehouse management system, inventory management software, WMS development India, logistics software, supply chain management, warehouse automation',
  },
  'retail-pos': {
    title: 'Retail POS System — Point of Sale Software for Retail',
    description: 'CyberSynap Retail POS streamlines checkout, inventory and customer loyalty for retail stores. Fast, reliable and easy-to-use retail point of sale system. Get a free demo.',
    keywords: 'retail POS system, point of sale software, retail POS India, POS for retail store, billing software retail, inventory management retail',
  },
  'supermarket-pos': {
    title: 'Supermarket POS System — Billing & Inventory Software',
    description: 'CyberSynap Supermarket POS handles high-volume billing, barcode scanning, stock management and reporting. Purpose-built supermarket point of sale system.',
    keywords: 'supermarket POS, grocery store POS, supermarket billing software, supermarket inventory software, grocery POS system India',
  },
  'pharmacy-pos': {
    title: 'Pharmacy POS System — Medical Store Billing Software',
    description: 'CyberSynap Pharmacy POS manages prescriptions, drug safety, inventory and compliance for pharmacies. Complete pharmacy management software. Request a demo.',
    keywords: 'pharmacy POS, pharmacy billing software, medical store software, pharmacy management system India, drug store POS',
  },
  'restaurant-pos': {
    title: 'Restaurant POS System — Complete Restaurant Management Software',
    description: 'CyberSynap Restaurant POS manages tables, orders, KDS, billing and payments for restaurants and food outlets. Best restaurant POS system in India. Free demo available.',
    keywords: 'restaurant POS system, restaurant management software, restaurant billing software, restaurant POS India, food outlet POS, table management software, KDS system',
  },
  kds: {
    title: 'Kitchen Display System (KDS) — Restaurant Order Management',
    description: 'CyberSynap KDS routes kitchen orders with perfect timing across multiple stations. Reduce errors, speed up service. Best kitchen display system for restaurants.',
    keywords: 'KDS system, kitchen display system, restaurant KDS, kitchen order management, restaurant technology, kitchen management software India',
  },
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutions.find((s) => s.slug === slug);
  const [demoModal, setDemoModal] = useState(false);

  if (!solution) return <Navigate to="/solutions" replace />;

  const meta = solutionMeta[slug] || {
    title: `${solution.title} — Business Software Solution`,
    description: `${solution.excerpt} CyberSynap delivers reliable ${solution.title} software for businesses worldwide. Request a free demo.`,
    keywords: `${solution.title.toLowerCase()}, ${solution.category.toLowerCase()} software, business software India`,
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: solution.title,
    description: solution.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: 'Free demo available' },
    provider: { '@type': 'Organization', name: 'CyberSynap', url: 'https://cybersynap.com' },
  };

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={`/solutions/${slug}`}
        schema={schema}
      />
      {/* Hero */}
      <section className="relative bg-[var(--bg-base)] pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #A855F7, transparent 70%)' }} />
        <Container className="relative">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: solution.title },
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="brand">{solution.category}</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4 max-w-3xl">
              {solution.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] italic mb-4 max-w-2xl">
              {solution.tagline}
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
              {solution.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {solution.demoUrl && (
                <a href={solution.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                    <ExternalLink size={17} /> Try Live Demo
                  </Button>
                </a>
              )}
              <Button size="lg" variant="secondary" onClick={() => setDemoModal(true)}>
                <Play size={17} /> Request Custom Demo
              </Button>
              <Link to="/contact#consultation">
                <Button variant="secondary" size="lg">Book a Consultation</Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 bg-[var(--bg-alt)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
              Core <GradientText>Features</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solution.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[var(--bg-base)] rounded-2xl border border-[var(--border)] p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-16 bg-[var(--bg-alt)]">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {solution.industries.map((ind) => (
              <span key={ind} className="px-5 py-2.5 bg-[var(--bg-surface)] rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)]">
                {ind}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to See ${solution.title} in Action?`}
        description="Book a personalised demo and see how it performs in your specific business context."
        primaryLabel="Request a Demo"
        primaryHref="/contact"
      />

      <DemoModal isOpen={demoModal} onClose={() => setDemoModal(false)} solution={solution.title} />

      <div className="bg-[var(--bg-base)] py-8">
        <Container>
          <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-purple-600 transition-colors">
            <ArrowLeft size={15} /> Back to Solutions
          </Link>
        </Container>
      </div>
    </>
  );
}
