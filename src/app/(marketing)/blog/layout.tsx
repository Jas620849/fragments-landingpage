import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "FragmentTrails Blog | Classroom Discussion & Fair Evaluation";
const description =
  "Practical guides on moderated classroom discussion, discussion quality assessment, responsible AI checks, rubrics, and bias-aware evaluation—from FragmentTrails, home of Fragments.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "classroom discussion",
    "discussion moderation",
    "educational assessment",
    "evaluation rubrics",
    "bias reduction",
    "FragmentTrails blog",
  ],
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/blog/") }
    : undefined,
  openGraph: {
    title,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/blog/") : undefined,
    images: [
      {
        url: "/logo-no-bg.png",
        width: 512,
        height: 512,
        alt: "FragmentTrails",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo-no-bg.png"],
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
