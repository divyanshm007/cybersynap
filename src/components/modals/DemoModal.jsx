import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Input, Select, Textarea } from '../forms/FormField';
import Button from '../common/Button';

export default function DemoModal({ isOpen, onClose, solution = '' }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Demo Request: ${data.solution || solution} from ${data.name} — CyberSynap`,
          from_name: data.name,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        onClose();
        reset();
        Swal.fire({
          title: 'Demo Request Received!',
          html: `Thank you, <strong>${data.name}</strong>. Our team will be in touch within 24 hours to arrange your personalised demo.`,
          icon: 'success',
          background: '#FFFFFF',
          color: '#15121C',
          confirmButtonColor: '#8B3DFF',
          confirmButtonText: 'Great, thank you!',
          customClass: { popup: 'rounded-2xl', confirmButton: 'rounded-xl' },
        });
      } else {
        throw new Error('Failed');
      }
    } catch {
      Swal.fire({
        title: 'Something went wrong',
        text: 'Please email us at query@cybersynap.com',
        icon: 'error',
        confirmButtonColor: '#8B3DFF',
        customClass: { popup: 'rounded-2xl', confirmButton: 'rounded-xl' },
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Request a Demo">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative max-w-md w-full max-h-[90vh] overflow-y-auto rounded-3xl"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(20,15,30,0.08)',
              boxShadow: '0 24px 80px rgba(40,20,60,0.16), 0 8px 24px rgba(40,20,60,0.08)',
            }}
          >
            {/* Top gradient bar */}
            <div
              className="h-1 rounded-t-[28px]"
              style={{ background: 'linear-gradient(90deg, #E83E9F, #8B3DFF)' }}
            />

            {/* Header */}
            <div className="p-6 pb-0">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Request a Demo</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    Our team will set up a personalised demo for your business.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-alt)] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              <Input
                label="Full Name"
                placeholder="Jane Smith"
                error={errors.name?.message}
                {...register('name', { required: 'Please enter your name' })}
              />
              <Input
                label="Business Email"
                type="email"
                placeholder="jane@company.com"
                error={errors.email?.message}
                {...register('email', { required: 'Please enter your email' })}
              />
              <Input
                label="Company"
                placeholder="Your company name"
                error={errors.company?.message}
                {...register('company', { required: 'Please enter your company' })}
              />
              <Select label="Industry" error={errors.industry?.message} {...register('industry', { required: 'Please select your industry' })}>
                <option value="">Select industry</option>
                {['Restaurants','Retail','Healthcare','Manufacturing','Logistics','Education','Finance','Other'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Select>
              <Select label="Solution" error={errors.solution?.message} defaultValue={solution} {...register('solution', { required: 'Please select a solution' })}>
                <option value="">Select solution</option>
                {['ERP','CRM','HRMS','Retail POS','Restaurant POS','Pharmacy POS','WMS','KDS'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </Select>
              <Textarea
                label="Any specific requirements?"
                placeholder="Tell us about your business needs..."
                rows={3}
                {...register('message')}
              />
              <Button type="submit" className="w-full justify-center" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Request Demo'}
                {!isSubmitting && <Send size={16} />}
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
