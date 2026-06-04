import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  pageUrl: string;
  pageName: string;
  pageDescription?: string;
  faqs: FAQItem[];
  category?: string;
}

/**
 * FAQPage schema for FAQ sections
 * Helps Google understand FAQ content and display rich results in search
 */
export default function FAQPageSchema({
  pageUrl,
  pageName,
  pageDescription,
  faqs,
  category,
}: FAQPageSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl(pageUrl);

  const payload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    ...(category && {
      about: {
        "@type": "Thing",
        name: category,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
