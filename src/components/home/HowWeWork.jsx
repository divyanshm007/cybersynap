import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We start with a conversation — understanding your business, your goals, your constraints and your vision for the project.' },
  { num: '02', title: 'Proposal & Architecture', desc: 'We produce a detailed technical proposal, project plan, timeline and fixed or milestone-based pricing.' },
  { num: '03', title: 'Design & Build', desc: 'Iterative design and development with regular demos, feedback cycles and progress updates. You see the work every week.' },
  { num: '04', title: 'Testing & Launch', desc: 'Rigorous QA, performance testing and staged deployment to ensure a smooth, confident launch.' },
  { num: '05', title: 'Support & Growth', desc: 'Ongoing support, hosting, monitoring and feature development as your business and requirements evolve.' },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="How We Work"
          description="A transparent, structured process that keeps projects on time, on budget and aligned with your business goals."
          className="mb-14"
        />

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center relative"
              >
                {/* Step number circle */}
                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-4 relative z-10 shadow-[0_4px_14px_rgba(124,58,237,0.3)]">
                  <span className="text-white text-xs font-black">{step.num}</span>
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">{step.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
