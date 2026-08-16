import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, Send } from 'lucide-react';
import Swal from 'sweetalert2';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import GradientText from '../components/common/GradientText';
import { Input, Select, Textarea } from '../components/forms/FormField';
import SEO from '../components/common/SEO';

const benefits = [
  'No-obligation, completely free consultation',
  'Direct access to our senior engineers',
  'Honest assessment of your requirements',
  'Clear timeline and budget estimate',
  'Expert advice — no hard sell',
];

const slots = [
  'Morning (9am – 12pm IST)',
  'Afternoon (12pm – 4pm IST)',
  'Evening (4pm – 7pm IST)',
];

export default function BookConsultation() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Consultation Request from ${data.name} — CyberSynap`,
          from_name: data.name,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        reset();
        Swal.fire({
          title: 'Consultation Booked!',
          html: `Thank you, <strong>${data.name}</strong>. Our team will contact you within 24 hours to confirm your slot.`,
          icon: 'success',
          background: '#FFFFFF',
          color: '#15121C',
          confirmButtonColor: '#8B3DFF',
          confirmButtonText: 'Perfect, thank you!',
          customClass: { popup: 'rounded-2xl', confirmButton: 'rounded-xl' },
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Please email us directly at query@cybersynap.com',
        icon: 'error',
        confirmButtonColor: '#8B3DFF',
        customClass: { popup: 'rounded-2xl', confirmButton: 'rounded-xl' },
      });
    }
  };

  return (
    <>
      <SEO
        title="Book a Free Consultation — CyberSynap Software Experts"
        description="Book a free, no-obligation consultation with CyberSynap's senior software engineers. Discuss your ERP, CRM, HRMS, WMS, POS or custom software project and get a clear plan and estimate."
        keywords="book software consultation, free software consultation, ERP consultation, CRM consultation, software project estimate, CyberSynap consultation"
        canonical="/book-consultation"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Free Software Consultation',
          description: 'Free, no-obligation consultation with CyberSynap senior software engineers.',
          provider: { '@type': 'Organization', name: 'CyberSynap', url: 'https://cybersynap.com' },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', description: 'Free consultation' },
        }}
      />

      {/* Hero */}
      <section className="relative bg-[var(--bg-base)] pt-24 lg:pt-32 pb-12 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #8B3DFF, transparent 70%)' }} />
        <Container className="relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(232,62,159,0.08), rgba(139,61,255,0.08))', border: '1px solid rgba(139,61,255,0.18)' }}>
              <Calendar size={14} className="text-purple-600" />
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Free Consultation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
              Book a Free<br /><GradientText>Consultation</GradientText>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Speak directly with our senior engineers. Tell us what you are trying to build — we will tell you honestly what it takes and whether we are the right fit.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Form + Benefits */}
      <section className="py-16 bg-[var(--bg-alt)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Request Your Consultation</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Full Name *" placeholder="Jane Smith" error={errors.name?.message}
                    {...register('name', { required: 'Required' })} />
                  <Input label="Company *" placeholder="Your company" error={errors.company?.message}
                    {...register('company', { required: 'Required' })} />
                </div>
                <Input label="Business Email *" type="email" placeholder="jane@company.com" error={errors.email?.message}
                  {...register('email', { required: 'Required' })} />
                <Input label="Phone / WhatsApp" type="tel" placeholder="+1 555 000 0000"
                  {...register('phone')} />
                <Select label="What are you looking to build?" {...register('interest')}>
                  <option value="">Select your interest</option>
                  <option>Custom Software</option>
                  <option>ERP System</option>
                  <option>CRM System</option>
                  <option>HRMS</option>
                  <option>WMS</option>
                  <option>POS System</option>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>AI / Automation</option>
                  <option>Cloud / DevOps</option>
                  <option>Not sure yet</option>
                </Select>
                <Select label="Preferred Time Slot" {...register('slot')}>
                  <option value="">Select preferred time</option>
                  {slots.map((s) => <option key={s}>{s}</option>)}
                </Select>
                <Textarea label="Brief project description" placeholder="Tell us about your business and what you are trying to achieve..." rows={4}
                  {...register('description')} />
                <Button type="submit" size="lg" className="w-full justify-center" disabled={isSubmitting}>
                  {isSubmitting ? 'Booking...' : 'Book My Free Consultation'}
                  {!isSubmitting && <Send size={17} />}
                </Button>
                <p className="text-xs text-[var(--text-muted)] text-center">
                  No commitment required. We respond within 24 business hours.
                </p>
              </form>
            </motion.div>

            {/* Benefits */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="space-y-6">

              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">What to expect</h3>
                <p className="text-purple-100 text-sm mb-6 leading-relaxed">A focused 30–45 minute call with a senior engineer who has delivered similar projects. No sales pitch — just honest advice.</p>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-purple-200 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-100">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-4 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-5 shadow-[var(--shadow-card)]">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-purple-600" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-0.5">Response Time</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">Within 24 business hours</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Available Mon – Sat, 9am – 7pm IST</div>
                </div>
              </div>

            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
