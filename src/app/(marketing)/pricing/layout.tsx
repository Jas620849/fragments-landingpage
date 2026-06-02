import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const title = "Fragments Pricing";
const description =
  "Explore Fragments pricing plans for educators and learners: transparent pricing for AI-moderated fragment trails, moderation, and cohort-ready classroom discussions.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["fragments pricing", "education pricing", "classroom discussion cost", "fragment trails pricing", "educator plans", "learner plans"],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/pricing/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/pricing/") : undefined,
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

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing/" },
        ]}
      />
      {children}
    </>
  );
}
