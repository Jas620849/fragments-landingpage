import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";
import { getCategories } from "./(marketing)/blog/_data";

export const dynamic = "force-static";

/**
 * AdSense / publisher sitemap: marketing pages + blog only.
 * All pages have substantial content (500+ words) and comply with AdSense policies.
 * Platform/demo pages are excluded from sitemap and blocked by robots.txt.
 */
const STATIC_PATHS = [
  { path: "/", priority: 1, changeFreq: "weekly" as const },
  { path: "/about/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/blog/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/contact/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/privacy/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/terms/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/cookies/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/disclaimer/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/how-it-works/", priority: 1, changeFreq: "monthly" as const },
  { path: "/pricing/", priority: 1, changeFreq: "monthly" as const },
  { path: "/faq/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/features/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/case-studies/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/compare/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/developers/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/research/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/resources/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/solutions/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/testimonials/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/scholarship-tracking-and-review-system/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/cookie-policy/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/security/", priority: 0.4, changeFreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://fragmenttrails.com";
  const lastmod = new Date();

  const makeUrl = (path: string) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
    return `${siteUrl}${withSlash}`;
  };

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((item) => ({
    url: makeUrl(item.path),
    lastModified: lastmod,
    changeFrequency: item.changeFreq,
    priority: item.priority,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: makeUrl(`/blog/${post.slug}/`),
    lastModified: lastmod,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogCategories: MetadataRoute.Sitemap = getCategories().map((category) => ({
    url: makeUrl(`/blog/category/${category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}/`),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Note: use-case, country, platform, and industry pages are excluded from sitemap
  // These are considered doorway pages by AdSense and should not be indexed
  // Only substantial content pages (marketing + blog) are included

  return [...staticEntries, ...blogPosts, ...blogCategories];
}
