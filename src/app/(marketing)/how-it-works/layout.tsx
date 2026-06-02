import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const title = "How Fragments Works";
const description =
  "Discover how Fragments works: AI-moderated fragment trails, human review, learner rewards, badges, flags, and quality assurance for classroom discussions.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["how fragments works", "fragment trails", "AI moderation", "classroom discussion", "learning rewards", "badges and flags"],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/how-it-works/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/how-it-works/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "Fragments Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works/" },
        ]}
      />
      {children}
    </>
  );
}
