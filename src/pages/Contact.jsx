import SEO from '../components/common/SEO';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Phone, Send, CheckCircle2 } from 'lucide-react';
import Swal from 'sweetalert2';
import Container from '../components/common/Container';
import SectionHeader from '../components/common/SectionHeader';
import { Input, Select, Textarea } from '../components/forms/FormField';
import Button from '../components/common/Button';
import GradientText from '../components/common/GradientText';

const contactInfo = [
  { icon: Mail, label: 'Business Email', value: 'query@cybersynap.com', href: 'mailto:query@cybersynap.com' },
  { icon: Phone, label: 'Phone', value: '+91 90059 77780', href: 'tel:+919005977780' },
  { icon: MapPin, label: 'Office Address', value: 'Janki Vihar Colony, Madiyaon, Lucknow, Uttar Pradesh 226021', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 business hours', href: null },
];

const whyChoose = [
  'No-obligation initial consultation',
  'Direct engagement with senior engineers',
  'Transparent, detailed project proposals',
  'Fixed-price and milestone-based options',
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Enquiry from ${data.name} — CyberSynap`,
          from_name: data.name,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        reset();
        Swal.fire({
          title: 'Message Received!',
          html: `Thank you, <strong>${data.name}</strong>. Our team will respond within 24 business hours.`,
          icon: 'success',
          background: '#FFFFFF',
          color: '#15121C',
          confirmButtonColor: '#8B3DFF',
          confirmButtonText: 'Great, thank you!',
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
        title="Contact CyberSynap — Get a Free Software Consultation"
        description="Contact CyberSynap for custom ERP, CRM, HRMS, WMS, POS or AI automation software. Get a free consultation from our expert team. Call +91 90059 77780 or email query@cybersynap.com."
        keywords="contact CyberSynap, software consultation, ERP consultation, CRM consultation, software development inquiry, get a quote, free software demo, software company contact Lucknow"
        canonical="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CyberSynap',
          url: 'https://cybersynap.com/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'CyberSynap',
            telephone: '+919005977780',
            email: 'query@cybersynap.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Janki Vihar Colony, Madiyaon',
              addressLocality: 'Lucknow',
              addressRegion: 'Uttar Pradesh',
              postalCode: '226021',
              addressCountry: 'IN',
            },
          },
        }}
      />
      {/* Hero */}
      <section className="relative bg-[var(--bg-base)] pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-[0.10]"
          style={{ background: 'radial-gradient(circle, #8B3DFF, transparent 70%)' }} />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5"
              style={{ background: 'linear-gradient(135deg, rgba(232,62,159,0.08), rgba(139,61,255,0.08))', border: '1px solid rgba(139,61,255,0.18)' }}>
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-4">
              Let's Talk About
              <br />
              <GradientText>Your Project</GradientText>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Tell us about your business and what you are trying to achieve. We will be honest about whether we are the right fit and what it would take to deliver.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main */}
      <section className="py-16 bg-[var(--bg-alt)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <motion.div
              id="consultation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name *"
                    placeholder="Jane Smith"
                    error={errors.name?.message}
                    {...register('name', { required: 'Required' })}
                  />
                  <Input
                    label="Company *"
                    placeholder="Your company"
                    error={errors.company?.message}
                    {...register('company', { required: 'Required' })}
                  />
                </div>
                <Input
                  label="Business Email *"
                  type="email"
                  placeholder="jane@company.com"
                  error={errors.email?.message}
                  {...register('email', { required: 'Required' })}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Industry"
                    {...register('industry')}
                  >
                    <option value="">Select industry</option>
                    <option>Restaurants</option>
                    <option>Retail</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                    <option>Logistics</option>
                    <option>Education</option>
                    <option>Finance</option>
                    <option>Real Estate</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                  </Select>
                  <Select
                    label="Service / Solution"
                    {...register('service')}
                  >
                    <option value="">Select interest</option>
                    <option>Custom Software</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI Automation</option>
                    <option>ERP</option>
                    <option>CRM</option>
                    <option>Restaurant POS</option>
                    <option>Retail POS</option>
                    <option>WMS</option>
                    <option>Other</option>
                  </Select>
                </div>
                <Select label="Approximate Budget" {...register('budget')}>
                  <option value="">Select budget range</option>
                  <option>$5,000 – $15,000</option>
                  <option>$15,000 – $50,000</option>
                  <option>$50,000 – $100,000</option>
                  <option>$100,000+</option>
                  <option>Not sure yet</option>
                </Select>
                <Textarea
                  label="Tell us about your project *"
                  placeholder="Describe your business, what you are trying to achieve and any specific requirements..."
                  rows={5}
                  error={errors.message?.message}
                  {...register('message', { required: 'Required' })}
                />
                <Button type="submit" size="lg" className="w-full justify-center" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={17} />}
                </Button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Contact Information</h2>

              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="flex items-start gap-4 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border)] p-5 shadow-[var(--shadow-card)]">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-purple-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-0.5">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-semibold text-[var(--text-primary)] hover:text-purple-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-[var(--text-primary)]">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Why Choose */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-7 text-white">
                <h3 className="font-bold text-base mb-4">Why Work With CyberSynap</h3>
                <ul className="space-y-3">
                  {whyChoose.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-purple-200 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-purple-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
