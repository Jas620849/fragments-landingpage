import { SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
  slug: string;
}

/**
 * Article schema for blog posts
 */
export default function ArticleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  author = SITE_NAME,
  image,
  slug,
}: ArticleSchemaProps) {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl(`/blog/${slug}/`);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? absoluteAsset(image) : absoluteAsset("/logo-no-bg.png"),
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      "@type": "Organization",
      name: author,
      url: canonicalUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: canonicalUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteAsset("/logo-no-bg.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
    />
  );
}
