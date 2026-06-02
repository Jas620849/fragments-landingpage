import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";
import { canonicalUrl, getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_PATHS = [
  { path: "/", priority: 1, changeFreq: "weekly" as const },
  { path: "/about/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/blog/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/contact/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/how-it-works/", priority: 1, changeFreq: "monthly" as const },
  { path: "/pricing/", priority: 1, changeFreq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) {
    return [];
  }

  const lastmod = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((item) => ({
    url: canonicalUrl(item.path),
    lastModified: lastmod,
    changeFrequency: item.changeFreq,
    priority: item.priority,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: canonicalUrl(`/blog/${post.slug}/`),
    lastModified: lastmod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogPosts];
}
