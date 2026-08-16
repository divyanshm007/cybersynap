import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://cybersynap.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export default function SEO({
  title,
  description,
  keywords = '',
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  schema = null,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | CyberSynap`
    : 'CyberSynap — Custom Software, ERP, CRM, HRMS, WMS & AI Automation';

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="CyberSynap" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
