import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

/**
 * Site-wide Organization + WebSite + SoftwareApplication structured data for rich results.
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
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD requires inline script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
