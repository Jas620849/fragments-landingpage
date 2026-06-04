import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

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
    sitemap: base ? `${base}/sitemap.xml` : undefined,
    host: base,
  };
}
