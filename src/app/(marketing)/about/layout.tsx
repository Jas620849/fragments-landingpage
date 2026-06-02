import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const title = "About Fragments";
const description =
  "Learn about Fragments: our mission to transform classroom discussions through AI-moderated fragment trails, educator recognition, and quality learning at scale.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["about fragments", "academic discussion platform", "education technology", "classroom discussion", "fragment trails", "educator recognition"],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/about/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/about/") : undefined,
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

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
      />
      {children}
    </>
  );
}
