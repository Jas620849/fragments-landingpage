import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Sample images - In production, this would come from your database or CMS
const SITE_IMAGES = [
  {
    url: "/logo-no-bg.png",
    title: "Fragment Trails Logo",
    caption: "Fragment Trails - Academic Discussion Platform",
    geoLocation: "United States",
    license: "https://fragmenttrails.com/license",
  },
  {
    url: "/hero-image.jpg",
    title: "Students Learning Together",
    caption: "Students collaborating on academic discussions",
    geoLocation: "United States",
    license: "https://fragmenttrails.com/license",
  },
  {
    url: "/features-discussion.jpg",
    title: "Online Discussion Platform",
    caption: "Fragment Trails discussion interface",
    geoLocation: "United States",
    license: "https://fragmenttrails.com/license",
  },
];

// Category images
const CATEGORY_IMAGES = [
  {
    url: "/categories/physics.jpg",
    title: "Physics Discussion",
    caption: "Physics academic discussions on Fragment Trails",
    category: "physics",
  },
  {
    url: "/categories/chemistry.jpg",
    title: "Chemistry Discussion",
    caption: "Chemistry academic discussions on Fragment Trails",
    category: "chemistry",
  },
  {
    url: "/categories/biology.jpg",
    title: "Biology Discussion",
    caption: "Biology academic discussions on Fragment Trails",
    category: "biology",
  },
  {
    url: "/categories/computer-science.jpg",
    title: "Computer Science Discussion",
    caption: "Computer Science academic discussions on Fragment Trails",
    category: "computer-science",
  },
  {
    url: "/categories/machine-learning.jpg",
    title: "Machine Learning Discussion",
    caption: "Machine Learning academic discussions on Fragment Trails",
    category: "machine-learning",
  },
];

export default function imageSitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  // Fallback to fragmenttrails.com if environment variable is not set
  const siteUrl = base || "https://fragmenttrails.com";

  const lastmod = new Date();

  // Helper function to construct asset URLs with fallback
  const makeAssetUrl = (path: string) => {
    const p = path.startsWith("/") ? path : `/${path}`;
    return `${siteUrl}${p.replace(/\/+$/, "")}`;
  };

  // Site-wide images
  const siteImageEntries: MetadataRoute.Sitemap = SITE_IMAGES.map((image) => ({
    url: makeAssetUrl(image.url),
    lastModified: lastmod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Category images
  const categoryImageEntries: MetadataRoute.Sitemap = CATEGORY_IMAGES.map((image) => ({
    url: makeAssetUrl(image.url),
    lastModified: lastmod,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...siteImageEntries, ...categoryImageEntries];
}
