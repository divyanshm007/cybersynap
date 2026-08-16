import Container from '../components/common/Container';
import SEO from '../components/common/SEO';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">{title}</h2>
    <div className="text-[var(--text-secondary)] leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — CyberSynap"
        description="CyberSynap's Privacy Policy explains how we collect, use and protect your personal data in accordance with applicable data protection laws."
        canonical="/privacy-policy"
        noindex={false}
      />
      <section className="pt-28 pb-20 bg-[var(--bg-base)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-sm text-[var(--text-muted)] mb-10">Last updated: August 2025</p>

            <Section title="1. Who We Are">
              <p>CyberSynap ("we", "us", "our") is a software development company registered in India, with our principal office at Janki Vihar Colony, Madiyaon, Lucknow, Uttar Pradesh 226021. We build custom software, ERP, CRM, HRMS, WMS, POS and AI automation solutions for businesses worldwide.</p>
              <p>Contact: <a href="mailto:query@cybersynap.com" className="text-purple-600 hover:underline">query@cybersynap.com</a></p>
            </Section>

            <Section title="2. What Data We Collect">
              <p>We collect the following categories of personal data:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contact information:</strong> name, email address, phone number, company name</li>
                <li><strong>Communication data:</strong> messages you send via our contact or consultation forms</li>
                <li><strong>Usage data:</strong> pages visited, time on site, browser type, device type (collected via cookies)</li>
                <li><strong>Business information:</strong> industry, project requirements and budget ranges you share with us</li>
              </ul>
              <p>We do not collect sensitive personal data (payment card details, government IDs, health information) through this website.</p>
            </Section>

            <Section title="3. How We Use Your Data">
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responding to your enquiries and consultation requests</li>
                <li>Providing our software development services</li>
                <li>Sending relevant service information where you have requested it</li>
                <li>Improving our website and user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing">
              <p>We process your data on the following legal bases:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Consent:</strong> where you have submitted a form or agreed to cookies</li>
                <li><strong>Legitimate interests:</strong> responding to business enquiries and improving our services</li>
                <li><strong>Contractual necessity:</strong> processing data required to deliver services you have contracted with us</li>
              </ul>
            </Section>

            <Section title="5. Cookies">
              <p>We use cookies and similar technologies to understand how visitors use our website. These include analytics cookies (Google Analytics) and functional cookies required for the site to work correctly.</p>
              <p>You can manage your cookie preferences at any time. See our <a href="/cookie-policy" className="text-purple-600 hover:underline">Cookie Policy</a> for full details.</p>
            </Section>

            <Section title="6. Data Sharing">
              <p>We do not sell your personal data. We may share data with trusted third-party service providers who assist us in operating our website and providing services, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Google Analytics (website analytics)</li>
                <li>Email service providers (for communication)</li>
                <li>Cloud hosting providers (AWS, Azure)</li>
              </ul>
              <p>All third parties are contractually required to process data securely and only for the purposes we specify.</p>
            </Section>

            <Section title="7. Data Retention">
              <p>We retain personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. Enquiry and form data is typically retained for 24 months from last contact, unless a longer retention period is required for an active engagement.</p>
            </Section>

            <Section title="8. Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Request portability of your data</li>
              </ul>
              <p>To exercise your rights, contact us at <a href="mailto:query@cybersynap.com" className="text-purple-600 hover:underline">query@cybersynap.com</a>.</p>
            </Section>

            <Section title="9. Security">
              <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. Our website uses HTTPS encryption for all data in transit.</p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last revised. We encourage you to review this policy periodically.</p>
            </Section>

            <Section title="11. Contact">
              <p>For any privacy-related questions or to exercise your rights:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email: <a href="mailto:query@cybersynap.com" className="text-purple-600 hover:underline">query@cybersynap.com</a></li>
                <li>Address: Janki Vihar Colony, Madiyaon, Lucknow, Uttar Pradesh 226021, India</li>
              </ul>
            </Section>
          </div>
        </Container>
      </section>
    </>
  );
}
