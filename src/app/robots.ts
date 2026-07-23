import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const siteUrl = base || "https://fragmenttrails.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/search/",
          "/categories/",
          "/category/",
          "/guide/",
          "/topic/",
          "/thread/",
          "/scholarship/",
          "/industry/",
          "/use-case/",
          "/platform/",
          "/candidate-evaluation-platform/",
          "/student-interview-management/",
          "/scholarship-selection-software/",
          "/interview-scoring-system/",
          "/interview-moderation-platform/",
          "/admissions-interview-software/",
          "/bias-free-candidate-evaluation/",
          "/scholarship-review-process/",
          "/interview-panel-management/",
          "/applicant-assessment-software/",
          "/student-evaluation-platform/",
          "/candidate-ranking-system/",
          "/fair-selection-platform/",
          "/structured-interview-software/",
          "/scholarship-interview-software/",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
