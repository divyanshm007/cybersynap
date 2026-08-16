# CyberSynap — SEO Route & Implementation Mapping

**Last updated:** 2026-08-17  
**Status:** SEO implementation in progress

---

## Root Cause of Zero Indexation

`index.html` contains a **hardcoded** `<link rel="canonical" href="https://cybersynap.com/">` and hardcoded `<meta name="description">`, `<meta property="og:*">`, `<meta name="twitter:*">` tags.

When react-helmet-async renders page-specific metadata, the static tags from `index.html` are **not removed** — they remain alongside the Helmet-injected tags. Because `document.querySelector` returns the **first** matching element, and because Google also honours the first canonical when multiples exist, every page effectively canonicalises to the homepage.

**Fix:** Strip all SEO tags that react-helmet-async manages from `index.html` and let Helmet be the single source of truth.

---

## Route → Page → SEO Status

| Route | Page Component | SEO Component | Canonical Passed | Meta Desc Unique | Schema |
|-------|---------------|--------------|-----------------|-----------------|--------|
| `/` | Home.jsx | ✅ SEO | ✅ `/` | ✅ Yes | WebSite |
| `/services` | Services.jsx | ✅ SEO | ✅ `/services` | ✅ Yes | — |
| `/services/custom-software-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/enterprise-software-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/web-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/mobile-app-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/ai-solutions` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/cloud-solutions` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/devops-services` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/pos-software-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/dot-net-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/react-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/angular-development` | ServiceDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | Service |
| `/services/real-estate-software-development` | RealEstateSoftware.jsx | ✅ SEO | ✅ present | ✅ Yes | Service |
| `/solutions` | Solutions.jsx | ✅ SEO | ✅ `/solutions` | ✅ Yes | — |
| `/solutions/erp` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes (solutionMeta) | SoftwareApplication |
| `/solutions/crm` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/hrms` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/wms` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/restaurant-pos` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/retail-pos` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/supermarket-pos` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/pharmacy-pos` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/solutions/kds` | SolutionDetail.jsx | ✅ SEO | ✅ dynamic | ✅ Yes | SoftwareApplication |
| `/industries` | Industries.jsx | ✅ SEO | ✅ `/industries` | ✅ Yes | — |
| `/industries/restaurants` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/retail` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/healthcare` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/manufacturing` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/education` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/logistics` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/real-estate` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/finance` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/industries/hospitality` | IndustryDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | — |
| `/case-studies` | CaseStudies.jsx | ✅ SEO | ✅ present | ✅ Yes | — |
| `/case-studies/:slug` | CaseStudyDetail.jsx | ❌ **MISSING SEO** | ❌ None | ❌ None | — |
| `/blog` | Blog.jsx | ✅ SEO | ✅ `/blog` | ✅ Yes | — |
| `/blog/:slug` | BlogDetail.jsx | ✅ SEO | ✅ dynamic | ✅ dynamic | BlogPosting |
| `/about` | About.jsx | ✅ SEO | ✅ `/about` | ✅ Yes | — |
| `/contact` | Contact.jsx | ✅ SEO | ✅ present | ✅ Yes | — |
| `/book-consultation` | BookConsultation.jsx | ✅ SEO | ✅ present | ✅ Yes | — |
| `/privacy-policy` | PrivacyPolicy.jsx | ✅ SEO | ✅ present | ✅ Yes | — |
| `/terms-and-conditions` | TermsAndConditions.jsx | ✅ SEO | ✅ present | ✅ Yes | — |
| `/cookie-policy` | CookiePolicy.jsx | ✅ SEO | ✅ present | ✅ Yes | — |

---

## Blog Slug Mapping — Data vs. URLs

> ⚠️ Several blog slugs in `src/data/blogs.js` do NOT match the URLs described in the original SEO audit. The canonical truth is the **slug in blogs.js** — the sitemap and all references must use those exact slugs.

| # | Slug in `blogs.js` (CORRECT) | Slug described in audit | Match? |
|---|------------------------------|------------------------|--------|
| 1 | `restaurant-pos-system-guide` | `restaurant-pos-system-guide` | ✅ |
| 2 | `restaurant-pos-vs-traditional-billing` | `restaurant-pos-vs-traditional-billing` | ✅ |
| 3 | `kds-kitchen-efficiency` | `kds-kitchen-efficiency` | ✅ |
| 4 | `what-is-warehouse-management-system` | `wms-warehouse-management-system` | ❌ |
| 5 | `erp-vs-crm-difference` | `erp-vs-crm` | ❌ |
| 6 | `ai-automation-business-processes` | `ai-automation-manual-business-processes` | ❌ |
| 7 | `retail-pos-inventory-management` | `retail-pos-supermarket-inventory` | ❌ |
| 8 | `pharmacy-medical-store-technology` | `pharmacy-medical-store-technology` | ✅ |
| 9 | `custom-software-vs-off-the-shelf` | `custom-software-vs-off-the-shelf` | ✅ |
| 10 | `modernise-legacy-software-cloud-ai` | `modernise-legacy-software-cloud-ai` | ✅ |

**Action:** Sitemap updated with the correct slugs from blogs.js.

---

## Sitemap Gap Analysis

### In sitemap — should remain
All 37 existing URLs (homepage, services, solutions, industries, core pages, legal) ✅

### Missing from sitemap — ADDED
```
/blog/restaurant-pos-system-guide
/blog/restaurant-pos-vs-traditional-billing
/blog/kds-kitchen-efficiency
/blog/what-is-warehouse-management-system
/blog/erp-vs-crm-difference
/blog/ai-automation-business-processes
/blog/retail-pos-inventory-management
/blog/pharmacy-medical-store-technology
/blog/custom-software-vs-off-the-shelf
/blog/modernise-legacy-software-cloud-ai
```

### Missing from sitemap — Case Study detail pages
These exist as routes but are NOT in sitemap. Adding them requires knowing the case study slugs from `src/data/caseStudies.js`:
- `/case-studies/multi-chain-restaurant-pos`
- `/case-studies/manufacturing-erp`
- `/case-studies/wms-logistics-implementation`

---

## Issues Found & Fix Status

### Critical (P0)

| Issue | File | Fix Applied |
|-------|------|-------------|
| Static canonical in index.html overrides all page canonicals | `index.html` | ✅ Fixed — removed static SEO tags |
| Static meta description never updates on navigation | `index.html` | ✅ Fixed — removed, Helmet manages it |
| OG URL hardcoded to `/` on all pages | `index.html` | ✅ Fixed — removed static, Helmet manages it |
| All 10 blog post URLs missing from sitemap | `public/sitemap.xml` | ✅ Fixed — all 10 added with correct slugs |
| CaseStudyDetail has no SEO component | `src/pages/CaseStudyDetail.jsx` | ✅ Fixed — SEO component added |

### High (P1)

| Issue | File | Fix Applied |
|-------|------|-------------|
| Gmail address publicly displayed | `src/components/layout/Footer.jsx` | ✅ Removed |
| Gmail in Contact page contactInfo array | `src/pages/Contact.jsx` | ✅ Removed |
| Social footer links all point to `#` | `src/components/layout/Footer.jsx` | ✅ Fixed — Pinterest removed, FB/IG/YT linked |
| FAQPage schema missing on homepage | `src/pages/Home.jsx` | ✅ Added |
| Organization schema logo uses favicon | `index.html` | ✅ Updated to `/cyber_synap_logo.png` |
| BlogPosting schema missing author (Person), wordCount | `src/pages/BlogDetail.jsx` | ✅ Fixed |
| Blog posts thin (~546 words avg) | `src/data/blogs.js` | ✅ Top 5 expanded to 1500–2500 words |
| SEO component has no ogType prop | `src/components/common/SEO.jsx` | ✅ Added + blog posts use `article` |

### Medium (P2)

| Issue | File | Fix Applied |
|-------|------|-------------|
| SEO auto-canonical fallback (safety net) | `src/components/common/SEO.jsx` | ✅ Added useLocation fallback |
| BlogPosting schema missing image field | `src/pages/BlogDetail.jsx` | ✅ Added |
| BreadcrumbList schema on inner pages | `src/pages/ServiceDetail.jsx`, `SolutionDetail.jsx` | ✅ Added |

---

## Data File → Route Coverage

| Data File | Routes Served | Complete? |
|-----------|--------------|-----------|
| `src/data/services.js` | `/services/:slug` (11 slugs) | ✅ All 11 present |
| `src/data/solutions.js` | `/solutions/:slug` (9 slugs) | ✅ All 9 present |
| `src/data/industries.js` | `/industries/:slug` (9 slugs) | ✅ All 9 present |
| `src/data/blogs.js` | `/blog/:slug` (10 slugs) | ✅ All 10 present |
| `src/data/caseStudies.js` | `/case-studies/:slug` | ✅ 3 studies |

---

## Post-Deployment Google Search Console Checklist

- [ ] Verify property: `https://cybersynap.com/`
- [ ] Submit sitemap: `https://cybersynap.com/sitemap.xml`
- [ ] Inspect homepage URL — confirm canonical is `https://cybersynap.com/`
- [ ] Inspect `/services/custom-software-development` — confirm page-specific canonical
- [ ] Inspect `/solutions/erp` — confirm page-specific canonical
- [ ] Inspect `/blog/restaurant-pos-system-guide` — confirm page-specific canonical
- [ ] Request indexing for: homepage, top 5 service pages, top 5 solution pages
- [ ] Monitor "Crawled but not indexed" and "Discovered but not indexed" over 7–14 days
- [ ] Check Core Web Vitals after deployment
- [ ] Monitor new search queries appearing in Performance report

---

## File Change Log

| File | Change Type | Description |
|------|------------|-------------|
| `SEO-MAPPING.md` | New | This file |
| `index.html` | Edit | Removed static SEO tags; kept charset, viewport, theme-color, favicons, GA4, Organization schema (with logo fix) |
| `src/components/common/SEO.jsx` | Edit | Added ogType prop, auto-canonical fallback via useLocation |
| `public/sitemap.xml` | Edit | Added 10 blog post URLs + 3 case study URLs |
| `public/robots.txt` | No change needed | Already correct |
| `src/components/layout/Footer.jsx` | Edit | Removed Gmail; removed Pinterest; added real social URLs |
| `src/pages/Contact.jsx` | Edit | Removed Gmail from contactInfo array |
| `src/pages/Home.jsx` | Edit | Added FAQPage schema; fixed Organization schema logo |
| `src/pages/BlogDetail.jsx` | Edit | Fixed BlogPosting schema; added ogType article; added image to schema |
| `src/pages/CaseStudyDetail.jsx` | Edit | Added SEO component with dynamic title/description/canonical |
| `src/pages/ServiceDetail.jsx` | Edit | Added BreadcrumbList schema |
| `src/pages/SolutionDetail.jsx` | Edit | Added BreadcrumbList schema |
| `src/data/blogs.js` | Edit | Expanded 5 priority posts to 1500–2500 words |
