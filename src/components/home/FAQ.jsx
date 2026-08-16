import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

const faqs = [
  {
    q: 'What types of businesses do you work with?',
    a: 'We work with mid-size and enterprise businesses across restaurants, retail, healthcare, manufacturing, logistics, finance and real estate. Our typical client is a business that has outgrown generic off-the-shelf software and needs technology built precisely for how they operate.',
  },
  {
    q: 'Do you build custom software or sell pre-built products?',
    a: 'Both. We have a portfolio of proven business software products (ERP, CRM, POS, WMS, KDS etc.) that we deploy and configure for each client. We also build fully bespoke custom software for businesses with unique requirements that products cannot address.',
  },
  {
    q: 'What is the typical project timeline?',
    a: 'It depends on scope. A POS or CRM implementation typically runs 12–20 weeks. A full ERP or custom enterprise platform typically runs 20–36 weeks. We work in iterations and deliver working software throughout the project — not just at the end.',
  },
  {
    q: 'How do you price your projects?',
    a: 'We offer fixed-price projects for well-defined scope and time-and-materials for evolving requirements. For our software products, we typically price on a per-implementation basis rather than recurring SaaS licensing. We provide detailed proposals before any commitment.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We offer support and maintenance packages covering bug fixes, performance monitoring, hosting management and feature development. Most of our clients have been working with us for 2+ years after their initial project.',
  },
  {
    q: 'Which regions do you serve?',
    a: 'We serve clients globally — with active work in the US, UK, UAE, Australia, Canada, Singapore, Europe and other markets. Our team operates across time zones to support international projects.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-[var(--bg-alt)]">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          className="mb-14"
        />

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] overflow-hidden hover:border-purple-200 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[var(--text-primary)] pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${open === i ? 'rotate-180 text-purple-400' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[var(--text-secondary)] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
