import { motion } from 'framer-motion';
import { Globe2, Shield, Layers, HeartHandshake, Zap, Users } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import IconBox from '../common/IconBox';

const reasons = [
  {
    icon: Globe2,
    title: 'Global Delivery, Local Understanding',
    desc: 'We serve businesses in the US, UK, UAE, Australia, Europe and beyond — with the operational understanding of each market.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Engineering Depth',
    desc: 'From frontend design to database architecture and cloud infrastructure — we own the entire technical stack.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Quality',
    desc: 'Code review standards, automated testing, security-first architecture and performance budgets on every project.',
  },
  {
    icon: Zap,
    title: 'AI-Native Approach',
    desc: 'We integrate AI and automation capabilities into our software from the ground up — not as an afterthought.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    desc: 'We build lasting relationships. Most of our clients have been working with us for 2+ years after their initial project.',
  },
  {
    icon: Users,
    title: 'Dedicated Engineering Teams',
    desc: 'You get a consistent, named team — not a revolving door of freelancers. We know your codebase as well as you do.',
  },
];

export default function WhyCyberSynap() {
  return (
    <section className="py-24 bg-[var(--bg-base)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Why CyberSynap"
              title="Serious Software for"
              highlight="Serious Businesses"
              description="We partner with businesses that have outgrown generic solutions and need technology built precisely for how they operate."
              align="left"
              className="mb-8"
            />

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-6 -translate-x-6" />
              <div className="relative">
                <div className="text-5xl font-black mb-2">8+</div>
                <div className="text-purple-200 font-medium mb-4">Years Engineering Enterprise Software</div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-xs text-purple-200">Projects delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-xs text-purple-200">Countries served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-xs text-purple-200">Client retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-xs text-purple-200">Support available</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[var(--bg-base)] rounded-2xl border border-[var(--border)] p-5"
              >
                <IconBox icon={r.icon} variant="soft" size="sm" className="mb-3" />
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">{r.title}</h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
