import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

/**
 * Site-wide Organization + WebSite + LocalBusiness structured data for rich results.
 */
export default function JsonLd() {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl("/");
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: SITE_NAME,
        url,
        description: DEFAULT_DESCRIPTION,
        logo: {
          "@type": "ImageObject",
          url: absoluteAsset("/logo-no-bg.png"),
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@fragments.com",
          contactType: "customer service",
          areaServed: "US",
          availableLanguage: "English",
        },
        sameAs: [
          "https://twitter.com/fragments",
          "https://facebook.com/fragments",
          "https://linkedin.com/company/fragments",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: SITE_NAME,
        url,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${url}#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${url}?search={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name: SITE_NAME,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free tier available for educators and learners",
        },
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${url}#organization` },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "42",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${url}#localbusiness`,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url,
        telephone: "+1-555-555-5555",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        priceRange: "$$",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
