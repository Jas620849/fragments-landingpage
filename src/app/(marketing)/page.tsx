import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, DEFAULT_KEYWORDS, SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import MarketingHomeClient from "./MarketingHomeClient";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import OrganizationSchema from "../components/OrganizationSchema";

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
            alt: "FragmentTrails — Fragments discussion platform",
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
      <OrganizationSchema
        name={SITE_NAME}
        description="FragmentTrails provides AI-moderated discussion platforms for schools and serious learners, enabling structured fragment trails, transparent moderation, and educator recognition tools."
        url={hasPublicSiteUrl() ? canonicalUrl("/") : "https://fragmenttrails.com"}
        logo={absoluteAsset("/logo-no-bg.png")}
        sameAs={[
          "https://x.com/fragmenttrail",
          "https://medium.com/@fragmentswebsite",
          "https://www.facebook.com/profile.php?id=61590392447978",
          "https://www.instagram.com/fragmentswebsite/",
        ]}
        contactPoint={{
          type: "ContactPoint",
          telephone: "+15075135675",
          contactType: "customer service",
          availableLanguage: "English",
        }}
      />
      <MarketingHomeClient />
    </>
  );
}
