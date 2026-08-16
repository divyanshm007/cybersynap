import Container from '../components/common/Container';
import SEO from '../components/common/SEO';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">{title}</h2>
    <div className="text-[var(--text-secondary)] leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions — CyberSynap"
        description="CyberSynap's Terms and Conditions govern the use of our website and software development services."
        canonical="/terms-and-conditions"
      />
      <section className="pt-28 pb-20 bg-[var(--bg-base)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Terms and Conditions</h1>
            <p className="text-sm text-[var(--text-muted)] mb-10">Last updated: August 2025</p>

            <Section title="1. Introduction">
              <p>These Terms and Conditions govern your use of the CyberSynap website (cybersynap.com) and the software development services provided by CyberSynap ("we", "us", "our"), a software company registered in India with offices at Janki Vihar Colony, Madiyaon, Lucknow, Uttar Pradesh 226021.</p>
              <p>By accessing this website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our website or services.</p>
            </Section>

            <Section title="2. Services">
              <p>CyberSynap provides custom software development services including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Custom software development</li>
                <li>Enterprise software development</li>
                <li>Web and mobile application development</li>
                <li>ERP, CRM, HRMS, WMS and POS system development</li>
                <li>AI solutions and automation</li>
                <li>Cloud solutions and DevOps services</li>
              </ul>
              <p>Specific terms, deliverables, timelines and payment schedules for individual engagements are defined in separate service agreements or statements of work.</p>
            </Section>

            <Section title="3. Intellectual Property">
              <p>Unless otherwise agreed in a separate written agreement, upon full payment for services rendered:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Custom software developed specifically for you becomes your property</li>
                <li>CyberSynap retains ownership of pre-existing frameworks, libraries and tools used in the project</li>
                <li>CyberSynap retains the right to list the project in its portfolio unless specifically agreed otherwise in writing</li>
              </ul>
            </Section>

            <Section title="4. Confidentiality">
              <p>We treat all client business information, technical specifications and project details as confidential. We will not disclose your confidential information to third parties without your consent, except where required by law.</p>
            </Section>

            <Section title="5. Website Use">
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use this website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the website or its underlying systems</li>
                <li>Transmit harmful, offensive or disruptive content via our forms or communications</li>
                <li>Reproduce, distribute or commercially exploit our website content without written permission</li>
              </ul>
            </Section>

            <Section title="6. Disclaimer of Warranties">
              <p>This website and its content are provided "as is" without warranty of any kind. While we strive to keep information accurate and up to date, we make no representations regarding the completeness, accuracy or suitability of the information on this website.</p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, CyberSynap shall not be liable for any indirect, incidental, consequential or punitive damages arising from your use of this website or our services, even if we have been advised of the possibility of such damages.</p>
            </Section>

            <Section title="8. Governing Law">
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh, India.</p>
            </Section>

            <Section title="9. Changes to These Terms">
              <p>We may update these Terms and Conditions from time to time. The date at the top of this page indicates the most recent revision. Continued use of the website following any changes constitutes your acceptance of the revised terms.</p>
            </Section>

            <Section title="10. Contact">
              <p>For any questions about these Terms and Conditions:</p>
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
