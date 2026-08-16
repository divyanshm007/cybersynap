import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, ArrowRight, Bot, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import DemoModal from '../modals/DemoModal';

const demos = [
  {
    slug: 'erp',
    name: 'ERP',
    category: 'Business',
    demoUrl: 'https://erp.cybersynap.com/login',
    color: 'purple',
    desc: 'Finance, HR, Inventory, Reporting',
  },
  {
    slug: 'crm',
    name: 'CRM',
    category: 'Business',
    demoUrl: 'https://crm.cybersynap.com/',
    color: 'pink',
    desc: 'Pipeline, Contacts, Revenue',
  },
  {
    slug: 'hrms',
    name: 'HRMS',
    category: 'Business',
    demoUrl: 'https://hrms.cybersynap.com/login',
    color: 'purple',
    desc: 'Payroll, Attendance, Performance',
  },
  {
    slug: 'hrms',
    name: 'ESS Portal',
    category: 'Business',
    demoUrl: 'https://ess.cybersynap.com/login',
    color: 'pink',
    desc: 'Employee Self-Service, Leaves, Payslips',
  },
  {
    slug: 'restaurant-pos',
    name: 'Restaurant POS',
    category: 'Restaurants',
    demoUrl: 'https://pos.cybersynap.com/login',
    color: 'purple',
    desc: 'Tables, Orders, KDS, Payments',
  },
  {
    slug: 'retail-pos',
    name: 'Retail & Supermarket POS',
    category: 'Retail',
    demoUrl: 'https://pos.cybersynap.com/login',
    color: 'pink',
    desc: 'Checkout, Inventory, Loyalty',
  },
  {
    slug: 'pharmacy-pos',
    name: 'Pharmacy POS',
    category: 'Healthcare',
    demoUrl: 'https://pos.cybersynap.com/login',
    color: 'purple',
    desc: 'Prescriptions, Drug Safety, Compliance',
  },
  {
    slug: 'real-estate-software-development',
    name: 'Property Management',
    category: 'Real Estate',
    demoUrl: 'https://property.cybersynap.com/login',
    color: 'pink',
    desc: 'Listings, Tenants, Leases, Revenue',
    isService: true,
  },
  {
    slug: 'ai-solutions',
    name: 'AI Platform',
    category: 'AI',
    demoUrl: 'https://ai.cybersynap.com/',
    color: 'purple',
    desc: 'Automation, Chatbots, Analytics',
    isService: true,
  },
];

export default function DemoCenter() {
  const [demoModal, setDemoModal] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('');

  const handleRequestDemo = (name) => {
    setSelectedSolution(name);
    setDemoModal(true);
  };

  return (
    <section className="py-24 bg-[var(--bg-alt)]">
      <Container>
        <SectionHeader
          eyebrow="Live Demos"
          title="Try CyberSynap"
          highlight="Software Live"
          description="Access working demos of our business software instantly. No sign-up required — just click and explore."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {demos.map((demo, i) => (
            <motion.div
              key={`${demo.slug}-${demo.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border)] p-6 hover:border-purple-200 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  demo.color === 'pink'
                    ? 'bg-pink-50 text-pink-600 border border-pink-200'
                    : 'bg-purple-50 text-purple-600 border border-purple-200'
                }`}>
                  {demo.category}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  demo.color === 'pink' ? 'bg-pink-50' : 'bg-purple-50'
                }`}>
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    demo.color === 'pink' ? 'bg-pink-400' : 'bg-purple-500'
                  }`} />
                </div>
              </div>

              <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{demo.name}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-5 flex-1">{demo.desc}</p>

              <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                <a
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between text-xs font-semibold text-white rounded-xl px-4 py-2.5 transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #8B3DFF, #E83E9F)' }}
                >
                  Try Live Demo <ExternalLink size={13} />
                </a>
                <div className="flex gap-2">
                  <Link
                    to={demo.isService ? `/services/${demo.slug}` : `/solutions/${demo.slug}`}
                    className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold text-[var(--text-secondary)] hover:text-purple-600 transition-colors py-2"
                  >
                    Learn More <ArrowRight size={12} />
                  </Link>
                  <button
                    onClick={() => handleRequestDemo(demo.name)}
                    className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold text-pink-500 hover:text-pink-600 transition-colors py-2"
                  >
                    Custom Demo <Play size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Need a personalised demo tailored to your business requirements?
          </p>
          <Button onClick={() => setDemoModal(true)}>
            Book a Personalised Demo
          </Button>
        </div>
      </Container>

      <DemoModal isOpen={demoModal} onClose={() => setDemoModal(false)} solution={selectedSolution} />
    </section>
  );
}
