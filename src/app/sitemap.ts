import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";

export const dynamic = "force-static";

/**
 * Sitemap includes only canonical, valuable, indexable URLs.
 * Thin programmatic SEO, sample forum, and search pages are excluded.
 */
const STATIC_PATHS = [
  { path: "/", priority: 1, changeFreq: "weekly" as const },
  { path: "/about/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/blog/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/contact/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/privacy/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/terms/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/cookies/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/disclaimer/", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/how-it-works/", priority: 0.95, changeFreq: "monthly" as const },
  { path: "/pricing/", priority: 0.9, changeFreq: "monthly" as const },
  {
    path: "/services/classroom-discussion-platform/",
    priority: 0.9,
    changeFreq: "monthly" as const,
  },
  {
    path: "/services/ai-moderated-learning/",
    priority: 0.85,
    changeFreq: "monthly" as const,
  },
  {
    path: "/services/student-engagement-software/",
    priority: 0.85,
    changeFreq: "monthly" as const,
  },
  {
    path: "/services/educator-recognition-platform/",
    priority: 0.85,
    changeFreq: "monthly" as const,
  },
  {
    path: "/services/cohort-based-learning/",
    priority: 0.85,
    changeFreq: "monthly" as const,
  },
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
    priority: 0.8,
  }));

  return [...staticEntries, ...blogPosts];
}
