import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../common/Button';

const servicesMenu = [
  { label: 'Custom Software Development', href: '/services/custom-software-development' },
  { label: 'Enterprise Software', href: '/services/enterprise-software-development' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
  { label: 'DevOps Services', href: '/services/devops-services' },
  { label: 'POS Software', href: '/services/pos-software-development' },
  { label: '.NET Development', href: '/services/dot-net-development' },
  { label: 'React Development', href: '/services/react-development' },
  { label: 'Angular Development', href: '/services/angular-development' },
  { label: 'Real Estate Software', href: '/services/real-estate-software-development' },
];

const solutionsMenu = [
  { label: 'ERP', href: '/solutions/erp' },
  { label: 'CRM', href: '/solutions/crm' },
  { label: 'HRMS', href: '/solutions/hrms' },
  { label: 'WMS', href: '/solutions/wms' },
  { label: 'Restaurant POS', href: '/solutions/restaurant-pos' },
  { label: 'Retail POS', href: '/solutions/retail-pos' },
  { label: 'Pharmacy POS', href: '/solutions/pharmacy-pos' },
  { label: 'Supermarket POS', href: '/solutions/supermarket-pos' },
  { label: 'KDS', href: '/solutions/kds' },
];

const industriesMenu = [
  { label: 'Restaurants', href: '/industries/restaurants' },
  { label: 'Retail & E-Commerce', href: '/industries/retail' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Education', href: '/industries/education' },
  { label: 'Logistics & Transportation', href: '/industries/logistics' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Finance & FinTech', href: '/industries/finance' },
  { label: 'Hospitality', href: '/industries/hospitality' },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-0 mt-2 rounded-2xl py-2 min-w-[220px] z-50"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(20,15,30,0.08)',
            boxShadow: '0 16px 48px rgba(40,20,60,0.12), 0 2px 8px rgba(40,20,60,0.06)',
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-purple-700 hover:bg-purple-50 transition-all mx-1.5 rounded-xl"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavItem({ label, href, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (href) {
    return (
      <Link to={href} className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div onMouseEnter={() => setOpen(true)}>
        <DropdownMenu items={items} isOpen={open} />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(20,15,30,0.08)',
              boxShadow: '0 4px 24px rgba(40,20,60,0.08)',
            }
          : {
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(20,15,30,0.06)',
              boxShadow: '0 1px 12px rgba(40,20,60,0.05)',
            }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="CyberSynap home">
            <img src="/favicon.png" alt="CyberSynap" className="w-8 h-8 rounded-xl object-contain" />
            <span className="font-extrabold text-[var(--text-primary)] text-lg tracking-tight">
              Cyber<span className="gradient-text">Synap</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" role="navigation" aria-label="Main navigation">
            <NavItem label="Home" href="/" />
            <NavItem label="Services" items={servicesMenu} />
            <NavItem label="Solutions" items={solutionsMenu} />
            <NavItem label="Industries" items={industriesMenu} />
            <NavItem label="Case Studies" href="/case-studies" />
            <NavItem label="Blog" href="/blog" />
            <NavItem label="About" href="/about" />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Contact
            </Link>
            <Link to="/book-consultation">
              <Button size="sm">Book Consultation</Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-alt)] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: '#FFFFFF', borderTop: '1px solid rgba(20,15,30,0.07)' }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {/* Accordion items */}
              {[
                { label: 'Services', key: 'services', items: servicesMenu },
                { label: 'Solutions', key: 'solutions', items: solutionsMenu },
                { label: 'Industries', key: 'industries', items: industriesMenu },
              ].map(({ label, key, items }) => (
                <div key={key}>
                  <button
                    className="flex items-center justify-between w-full py-3 text-sm font-semibold text-[var(--text-primary)]"
                    onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  >
                    {label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform text-[var(--text-muted)] ${mobileSection === key ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileSection === key && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        {items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block py-2.5 pl-4 text-sm text-[var(--text-secondary)] hover:text-purple-700 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Plain links */}
              {[
                { label: 'Home', href: '/' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="block py-3 text-sm font-semibold text-[var(--text-primary)]">
                  {item.label}
                </Link>
              ))}

              <div className="pt-3 pb-2">
                <Link to="/contact#consultation">
                  <Button className="w-full justify-center">Book a Consultation</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
