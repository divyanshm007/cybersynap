import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import HomeSolutions from '../components/home/HomeSolutions';
import HomeServices from '../components/home/HomeServices';
import HomeIndustries from '../components/home/HomeIndustries';
import DemoCenter from '../components/home/DemoCenter';
import WhyCyberSynap from '../components/home/WhyCyberSynap';
import FeaturedCaseStudies from '../components/home/FeaturedCaseStudies';
import AISection from '../components/home/AISection';
import HowWeWork from '../components/home/HowWeWork';
import FeaturedBlogs from '../components/home/FeaturedBlogs';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/common/CTASection';

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CyberSynap',
  url: 'https://cybersynap.com',
  description: 'Custom ERP, CRM, HRMS, WMS, POS and AI automation software development company.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://cybersynap.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of businesses do you work with?',
      acceptedAnswer: { '@type': 'Answer', text: 'We work with mid-size and enterprise businesses across restaurants, retail, healthcare, manufacturing, logistics, finance and real estate. Our typical client is a business that has outgrown generic off-the-shelf software and needs technology built precisely for how they operate.' },
    },
    {
      '@type': 'Question',
      name: 'Do you build custom software or sell pre-built products?',
      acceptedAnswer: { '@type': 'Answer', text: 'Both. We have a portfolio of proven business software products (ERP, CRM, POS, WMS, KDS etc.) that we deploy and configure for each client. We also build fully bespoke custom software for businesses with unique requirements that products cannot address.' },
    },
    {
      '@type': 'Question',
      name: 'What is the typical project timeline?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on scope. A POS or CRM implementation typically runs 12–20 weeks. A full ERP or custom enterprise platform typically runs 20–36 weeks. We work in iterations and deliver working software throughout the project — not just at the end.' },
    },
    {
      '@type': 'Question',
      name: 'How do you price your projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer fixed-price projects for well-defined scope and time-and-materials for evolving requirements. For our software products, we typically price on a per-implementation basis rather than recurring SaaS licensing. We provide detailed proposals before any commitment.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing support after launch?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer support and maintenance packages covering bug fixes, performance monitoring, hosting management and feature development. Most of our clients have been working with us for 2+ years after their initial project.' },
    },
    {
      '@type': 'Question',
      name: 'Which regions do you serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve clients globally — with active work in the US, UK, UAE, Australia, Canada, Singapore, Europe and other markets. Our team operates across time zones to support international projects.' },
    },
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Custom ERP, CRM, HRMS, WMS & AI Automation Software Development"
        description="CyberSynap — India's trusted software development company. We build custom ERP, CRM, HRMS, WMS, Restaurant POS, Retail POS and AI automation solutions. Get a free consultation today."
        keywords="ERP software India, CRM software, HRMS software, WMS software, AI automation, custom software development, POS system, software company Lucknow, ERP development, business automation software"
        canonical="/"
        schema={[homeSchema, faqSchema]}
      />
      <Hero />
      <HomeSolutions />
      <HomeServices />
      <HomeIndustries />
      <DemoCenter />
      <WhyCyberSynap />
      <FeaturedCaseStudies />
      <AISection />
      <HowWeWork />
      <FeaturedBlogs />
      <FAQ />
      <CTASection />
    </>
  );
}
