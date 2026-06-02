import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const title = "Contact Fragments";
const description =
  "Contact the Fragments team for product questions, district pilots, press, or feedback. We route every message to the right person for fast response.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["contact fragments", "fragments support", "education technology contact", "district pilots", "press contact"],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/contact/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/contact/") : undefined,
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

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />
      {children}
    </>
  );
}
