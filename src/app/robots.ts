import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  // Fallback to fragmenttrails.com if environment variable is not set
  const siteUrl = base || "https://fragmenttrails.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/dashboard/",
          "/settings",
          "/jobs",
          "/emails",
          "/applications",
          "/resume",
          "/analytics",
          "/profile",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
