import { motion } from 'framer-motion';
import { Bot, FileText, Workflow, Brain, BarChart2, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const capabilities = [
  { icon: FileText, title: 'Document Processing', desc: 'Extract and process data from invoices, contracts and forms automatically.' },
  { icon: Workflow, title: 'Workflow Automation', desc: 'Automate multi-step business processes across your existing tools.' },
  { icon: Brain, title: 'Intelligent Decision Support', desc: 'AI-powered recommendations to support business decisions.' },
  { icon: BarChart2, title: 'Predictive Analytics', desc: 'Forecast demand, identify risks and surface insights from your data.' },
  { icon: Repeat, title: 'Process Automation', desc: 'Replace manual, repetitive tasks with intelligent automation pipelines.' },
  { icon: Bot, title: 'AI Agents & Chatbots', desc: 'Custom AI agents for customer service, internal support and operations.' },
];

export default function AISection() {
  return (
    <section className="py-24 bg-[var(--bg-alt)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #8B3DFF 0%, transparent 70%)' }} />
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
              style={{ background: 'rgba(139,61,255,0.08)', border: '1px solid rgba(139,61,255,0.18)' }}>
              <Bot size={14} className="text-purple-600" />
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">AI Automation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
              Eliminate Manual Work{' '}
              <span className="gradient-text">with AI</span>
            </h2>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              We design and implement AI automation systems that reduce manual effort by 70–90%, improve accuracy and let your team focus on higher-value work.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link to="/services/ai-solutions">
                <Button>Explore AI Automation</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Discuss Your Process</Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <div>
                <div className="text-2xl font-black text-purple-600">70–90%</div>
                <div>Manual effort reduction</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div>
                <div className="text-2xl font-black text-pink-500">Days</div>
                <div>to deploy first automation</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-purple-600" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">{cap.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
