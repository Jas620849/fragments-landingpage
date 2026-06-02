import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Fragments Blog";
const description =
  "Product updates, teaching tips, and stories from educators building better class discussions with Fragments. Learn about fragment trails and AI-moderated learning.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["fragments blog", "education blog", "classroom discussion tips", "teaching strategies", "fragment trails", "AI moderation"],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/blog/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/blog/") : undefined,
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

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
