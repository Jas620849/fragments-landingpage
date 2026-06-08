import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";
import { CONTENT_CATEGORIES } from "@/lib/seo-constants";

export const dynamic = "force-static";

const STATIC_PATHS = [
  { path: "/", priority: 1, changeFreq: "weekly" as const },
  { path: "/about/", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/blog/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/contact/", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/how-it-works/", priority: 1, changeFreq: "monthly" as const },
  { path: "/pricing/", priority: 1, changeFreq: "monthly" as const },
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
  { path: "/categories/", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/search/", priority: 0.8, changeFreq: "daily" as const },
];

// Programmatic SEO: Scholarship pages by country
const SCHOLARSHIP_COUNTRIES = [
  { code: "pakistan", name: "Pakistan" },
  { code: "usa", name: "United States" },
  { code: "canada", name: "Canada" },
  { code: "uk", name: "United Kingdom" },
  { code: "australia", name: "Australia" },
  { code: "india", name: "India" },
  { code: "germany", name: "Germany" },
  { code: "france", name: "France" },
  { code: "uae", name: "United Arab Emirates" },
  { code: "saudi-arabia", name: "Saudi Arabia" },
];

// Programmatic SEO: Industry pages
const INDUSTRY_ORGANIZATIONS = [
  { code: "universities", name: "Universities" },
  { code: "colleges", name: "Colleges" },
  { code: "foundations", name: "Foundations" },
  { code: "government-programs", name: "Government Programs" },
  { code: "fellowships", name: "Fellowships" },
  { code: "ngos", name: "NGOs" },
];

// Programmatic SEO: Use case pages
const USE_CASES = [
  { code: "reduce-interview-bias", name: "Reduce Interview Bias" },
  { code: "improve-candidate-scoring", name: "Improve Candidate Scoring" },
  { code: "interview-standardization", name: "Interview Standardization" },
  { code: "faster-selection-decisions", name: "Faster Selection Decisions" },
  { code: "fair-candidate-evaluation", name: "Fair Candidate Evaluation" },
  { code: "panel-calibration", name: "Panel Calibration" },
  { code: "data-driven-selection", name: "Data-Driven Selection" },
];

// Programmatic SEO: Platform integration pages
const PLATFORMS = [
  { code: "product-hunt", name: "Product Hunt" },
  { code: "reddit", name: "Reddit" },
  { code: "indie-hackers", name: "Indie Hackers" },
  { code: "hacker-news", name: "Hacker News" },
  { code: "betalist", name: "BetaList" },
  { code: "alternativeto", name: "AlternativeTo" },
  { code: "g2", name: "G2" },
  { code: "capterra", name: "Capterra" },
  { code: "getapp", name: "GetApp" },
  { code: "software-advice", name: "Software Advice" },
  { code: "saashub", name: "SaaSHub" },
  { code: "startupbase", name: "StartupBase" },
  { code: "microlaunch", name: "Microlaunch" },
  { code: "uneed", name: "Uneed" },
  { code: "fazier", name: "Fazier" },
  { code: "launching-next", name: "Launching Next" },
  { code: "theres-an-ai-for-that", name: "There's An AI For That" },
  { code: "futurepedia", name: "Futurepedia" },
  { code: "ai-tool-hunt", name: "AI Tool Hunt" },
  { code: "topai-tools", name: "TopAI Tools" },
  { code: "toolify-ai", name: "Toolify AI" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Use the exact base URL for fragmenttrails.com
  const siteUrl = "https://fragmenttrails.com";

  const lastmod = new Date();

  // Helper function to construct URLs with proper trailing slash
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

  // Scholarship pages by country (programmatic SEO)
  const scholarshipCountryEntries: MetadataRoute.Sitemap = SCHOLARSHIP_COUNTRIES.map((country) => ({
    url: makeUrl(`/scholarship/${country.code}/`),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Industry pages (programmatic SEO)
  const industryEntries: MetadataRoute.Sitemap = INDUSTRY_ORGANIZATIONS.map((org) => ({
    url: makeUrl(`/industry/${org.code}/`),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Use case pages (programmatic SEO)
  const useCaseEntries: MetadataRoute.Sitemap = USE_CASES.map((useCase) => ({
    url: makeUrl(`/use-case/${useCase.code}/`),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Platform integration pages (programmatic SEO)
  const platformEntries: MetadataRoute.Sitemap = PLATFORMS.map((platform) => ({
    url: makeUrl(`/platform/${platform.code}/`),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticEntries,
    ...blogPosts,
    ...categoryEntries,
    ...scholarshipCountryEntries,
    ...industryEntries,
    ...useCaseEntries,
    ...platformEntries,
  ];
}
