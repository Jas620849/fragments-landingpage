import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";
import { canonicalUrl, getSiteUrl } from "@/lib/site";
import { CONTENT_CATEGORIES } from "@/lib/seo-constants";

export const dynamic = "force-static";

const STATIC_PATHS = [
  { path: "/", priority: 1, changeFreq: "weekly" as const },
  { path: "/about/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/blog/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/contact/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/how-it-works/", priority: 1, changeFreq: "monthly" as const },
  { path: "/pricing/", priority: 1, changeFreq: "monthly" as const },
  { path: "/services/classroom-discussion-platform/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/ai-moderated-learning/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/student-engagement-software/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/educator-recognition-platform/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/cohort-based-learning/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/categories/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/search/", priority: 0.8, changeFreq: "daily" as const },
];

// Sample topics - In production, this would come from your database
const SAMPLE_TOPICS = [
  { slug: "what-is-electricity", updatedAt: "2024-01-15" },
  { slug: "atomic-structure", updatedAt: "2024-01-16" },
  { slug: "newton-laws", updatedAt: "2024-01-17" },
  { slug: "photosynthesis", updatedAt: "2024-01-18" },
  { slug: "machine-learning-basics", updatedAt: "2024-01-19" },
  { slug: "python-programming", updatedAt: "2024-01-20" },
  { slug: "quantum-physics-introduction", updatedAt: "2024-01-21" },
  { slug: "data-science-fundamentals", updatedAt: "2024-01-22" },
];

// Sample threads - In production, this would come from your database
const SAMPLE_THREADS = [
  { slug: "understanding-electricity", topicSlug: "what-is-electricity", updatedAt: "2024-01-15" },
  { slug: "what-is-an-electron", topicSlug: "atomic-structure", updatedAt: "2024-01-16" },
  { slug: "importance-of-neutrons", topicSlug: "atomic-structure", updatedAt: "2024-01-17" },
  { slug: "newton-first-law-explained", topicSlug: "newton-laws", updatedAt: "2024-01-18" },
  { slug: "how-photosynthesis-works", topicSlug: "photosynthesis", updatedAt: "2024-01-19" },
];

// Sample programmatic SEO guides - In production, this would come from your database
const SAMPLE_GUIDES = [
  { slug: "what-is-electricity", updatedAt: "2024-01-15" },
  { slug: "how-does-electricity-work", updatedAt: "2024-01-16" },
  { slug: "advantages-of-electricity", updatedAt: "2024-01-17" },
  { slug: "history-of-electricity", updatedAt: "2024-01-18" },
  { slug: "what-is-machine-learning", updatedAt: "2024-01-19" },
  { slug: "how-does-machine-learning-work", updatedAt: "2024-01-20" },
  { slug: "advantages-of-machine-learning", updatedAt: "2024-01-21" },
  { slug: "history-of-machine-learning", updatedAt: "2024-01-22" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  // Fallback to fragmenttrails.com if environment variable is not set
  const siteUrl = base || "https://fragmenttrails.com";

  const lastmod = new Date();

  // Helper function to construct URLs with fallback
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

  // Category pages
  const categoryEntries: MetadataRoute.Sitemap = CONTENT_CATEGORIES.map((category) => ({
    url: makeUrl(`/category/${category.slug}`),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Topic pages
  const topicEntries: MetadataRoute.Sitemap = SAMPLE_TOPICS.map((topic) => ({
    url: makeUrl(`/topic/${topic.slug}`),
    lastModified: new Date(topic.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Thread pages
  const threadEntries: MetadataRoute.Sitemap = SAMPLE_THREADS.map((thread) => ({
    url: makeUrl(`/thread/${thread.slug}`),
    lastModified: new Date(thread.updatedAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Guide pages (programmatic SEO)
  const guideEntries: MetadataRoute.Sitemap = SAMPLE_GUIDES.map((guide) => ({
    url: makeUrl(`/guide/${guide.slug}`),
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    ...staticEntries,
    ...blogPosts,
    ...categoryEntries,
    ...topicEntries,
    ...threadEntries,
    ...guideEntries,
  ];
}
