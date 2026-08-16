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

export default function Home() {
  return (
    <>
      <SEO
        title="Custom ERP, CRM, HRMS, WMS & AI Automation Software Development"
        description="CyberSynap — India's trusted software development company. We build custom ERP, CRM, HRMS, WMS, Restaurant POS, Retail POS and AI automation solutions. Get a free consultation today."
        keywords="ERP software India, CRM software, HRMS software, WMS software, AI automation, custom software development, POS system, software company Lucknow, ERP development, business automation software"
        canonical="/"
        schema={homeSchema}
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
