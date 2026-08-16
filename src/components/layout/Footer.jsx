import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const services = [
  { label: 'Custom Software Development', href: '/services/custom-software-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
  { label: 'DevOps Services', href: '/services/devops-services' },
];

const solutions = [
  { label: 'ERP', href: '/solutions/erp' },
  { label: 'CRM', href: '/solutions/crm' },
  { label: 'HRMS', href: '/solutions/hrms' },
  { label: 'Restaurant POS', href: '/solutions/restaurant-pos' },
  { label: 'Retail POS', href: '/solutions/retail-pos' },
  { label: 'WMS', href: '/solutions/wms' },
];

const company = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Consultation', href: '/book-consultation' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#17101F' }} role="contentinfo">
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,61,255,0.6) 30%, rgba(232,62,159,0.6) 70%, transparent)' }}
      />

      {/* Glow accent */}
      <div
        className="h-24 w-full pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(139,61,255,0.08) 0%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 -mt-24">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5" aria-label="CyberSynap home">
              <img src="/favicon.png" alt="CyberSynap" className="w-9 h-9 rounded-xl object-contain" />
              <span className="font-extrabold text-white text-xl tracking-tight">CyberSynap</span>
            </Link>

            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Premium software development and business technology company serving growing and enterprise businesses globally.
            </p>

            <div className="space-y-2.5 text-sm text-white/50">
              <a href="mailto:query@cybersynap.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Mail size={14} className="flex-shrink-0" />
                query@cybersynap.com
              </a>
              <a href="tel:+919005977780" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Phone size={14} className="flex-shrink-0" />
                +91 90059 77780
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Janki Vihar Colony, Madiyaon,<br />Lucknow, Uttar Pradesh 226021</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/cybersynap' },
                { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/cybersynap' },
                { label: 'YouTube', Icon: YoutubeIcon, href: 'https://www.youtube.com/@cybersynap' },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all text-white/60 hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#E83E9F,#8B3DFF)'; e.currentTarget.style.border = 'none'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services links">
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-white/50 hover:text-purple-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solutions */}
          <nav aria-label="Solutions links">
            <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-white/50 hover:text-purple-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm text-white/50 hover:text-purple-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p>© {new Date().getFullYear()} CyberSynap. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors text-xs">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white/60 transition-colors text-xs">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white/60 transition-colors text-xs">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
