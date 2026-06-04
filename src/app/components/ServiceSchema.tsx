import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
}

/**
 * Service schema for service landing pages
 */
export default function ServiceSchema({ name, description, provider, areaServed }: ServiceSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl("/");
  const payload = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: provider || {
      "@type": "Organization",
      name: SITE_NAME,
      url,
    },
    areaServed: areaServed || "Worldwide",
    serviceType: "Educational Services",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available for educators and learners",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
