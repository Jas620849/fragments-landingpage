import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";

export const dynamic = "force-static";

/**
 * AdSense / publisher sitemap: marketing pages + original blog only.
 * Static discussion demo (/explore, /discussions, …) and thin keyword
 * landings are intentionally excluded.
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
  { path: "/testimonials/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/research/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/developers/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/security/", priority: 0.85, changeFreq: "monthly" as const },
  { path: "/case-studies/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/compare/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/resources/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/features/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/solutions/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/scholarship-tracking-and-review-system/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/scholarship-interview-software/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/candidate-evaluation-platform/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/student-interview-management/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/scholarship-selection-software/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/interview-scoring-system/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/interview-moderation-platform/", priority: 0.95, changeFreq: "weekly" as const },
  { path: "/admissions-interview-software/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/bias-free-candidate-evaluation/", priority: 0.85, changeFreq: "weekly" as const },
  { path: "/scholarship-review-process/", priority: 0.85, changeFreq: "weekly" as const },
  { path: "/interview-panel-management/", priority: 0.85, changeFreq: "weekly" as const },
  { path: "/applicant-assessment-software/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/student-evaluation-platform/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/candidate-ranking-system/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/fair-selection-platform/", priority: 0.85, changeFreq: "weekly" as const },
  { path: "/structured-interview-software/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/services/classroom-discussion-platform/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/ai-moderated-learning/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/student-engagement-software/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/educator-recognition-platform/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/services/cohort-based-learning/", priority: 0.9, changeFreq: "monthly" as const },
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

  return [...staticEntries, ...blogPosts];
}
