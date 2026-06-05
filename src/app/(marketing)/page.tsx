import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, DEFAULT_KEYWORDS } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import MarketingHomeClient from "./MarketingHomeClient";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import ScholarshipPlatformSchema from "../components/ScholarshipPlatformSchema";

export const metadata: Metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/") }
    : undefined,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/") : undefined,
    images: hasPublicSiteUrl()
      ? [
          {
            url: "/logo-no-bg.png",
            width: 512,
            height: 512,
            alt: "Fragments Logo",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: hasPublicSiteUrl() ? ["/logo-no-bg.png"] : undefined,
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }]} />
      <ScholarshipPlatformSchema />
      <MarketingHomeClient />
    </>
  );
}
