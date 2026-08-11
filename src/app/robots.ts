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
          "/profiles/",
          "/communities/",
          "/discussions/",
          "/questions/",
          "/explore/",
          "/trending/",
          "/following/",
          "/saved/",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
