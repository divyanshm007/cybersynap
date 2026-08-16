import Container from '../components/common/Container';
import SEO from '../components/common/SEO';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">{title}</h2>
    <div className="text-[var(--text-secondary)] leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

const cookieTable = [
  { name: '_ga', provider: 'Google Analytics', purpose: 'Distinguishes users for analytics', duration: '2 years', type: 'Analytics' },
  { name: '_ga_*', provider: 'Google Analytics', purpose: 'Persists session state', duration: '2 years', type: 'Analytics' },
  { name: 'session', provider: 'cybersynap.com', purpose: 'Maintains user session', duration: 'Session', type: 'Functional' },
];

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy — CyberSynap"
        description="CyberSynap's Cookie Policy explains how we use cookies and similar technologies on our website."
        canonical="/cookie-policy"
      />
      <section className="pt-28 pb-20 bg-[var(--bg-base)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-2">Cookie Policy</h1>
            <p className="text-sm text-[var(--text-muted)] mb-10">Last updated: August 2025</p>

            <Section title="1. What Are Cookies">
              <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners. Cookies help us understand how visitors interact with our website so we can improve the user experience.</p>
            </Section>

            <Section title="2. How We Use Cookies">
              <p>CyberSynap uses cookies for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Essential cookies:</strong> required for the website to function correctly (session management, security)</li>
                <li><strong>Analytics cookies:</strong> help us understand how visitors use our website (Google Analytics)</li>
                <li><strong>Functional cookies:</strong> remember your preferences and settings</li>
              </ul>
              <p>We do not use advertising or tracking cookies to serve personalised ads.</p>
            </Section>

            <Section title="3. Cookies We Use">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-2">
                  <thead>
                    <tr className="bg-[var(--bg-alt)]">
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)] border border-[var(--border)]">Cookie</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)] border border-[var(--border)]">Provider</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)] border border-[var(--border)]">Purpose</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)] border border-[var(--border)]">Duration</th>
                      <th className="text-left p-3 font-semibold text-[var(--text-primary)] border border-[var(--border)]">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieTable.map((row) => (
                      <tr key={row.name} className="hover:bg-[var(--bg-alt)] transition-colors">
                        <td className="p-3 font-mono text-xs border border-[var(--border)]">{row.name}</td>
                        <td className="p-3 border border-[var(--border)]">{row.provider}</td>
                        <td className="p-3 border border-[var(--border)]">{row.purpose}</td>
                        <td className="p-3 border border-[var(--border)]">{row.duration}</td>
                        <td className="p-3 border border-[var(--border)]">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="4. Managing Cookies">
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Browser settings:</strong> most browsers allow you to refuse or delete cookies. Check your browser's help section for instructions.</li>
                <li><strong>Google Analytics opt-out:</strong> install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
              </ul>
              <p>Disabling essential cookies may affect website functionality. Disabling analytics cookies will prevent us from understanding how you use our site but will not affect your experience.</p>
            </Section>

            <Section title="5. Third-Party Cookies">
              <p>Some cookies are set by third-party services that appear on our website (e.g., Google Analytics). We do not control these third-party cookies. Please review the respective third parties' privacy policies for more information.</p>
            </Section>

            <Section title="6. Changes to This Policy">
              <p>We may update this Cookie Policy from time to time. The date at the top indicates the most recent revision.</p>
            </Section>

            <Section title="7. Contact">
              <p>For cookie-related questions: <a href="mailto:query@cybersynap.com" className="text-purple-600 hover:underline">query@cybersynap.com</a></p>
            </Section>
          </div>
        </Container>
      </section>
    </>
  );
}
