import type { Metadata } from "next";
import DiscussionShell from "@/app/components/discuss/DiscussionShell";
import { PLATFORM_DEMO_ROBOTS, SITE_NAME } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: {
    default: `Discussion preview | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Static product preview of FragmentTrails discussions. Sample content only—not the live product.",
  robots: PLATFORM_DEMO_ROBOTS,
  openGraph: {
    title: `Discussion preview | ${SITE_NAME}`,
    description:
      "Static product preview of FragmentTrails discussions. Sample content only.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Discussion preview | ${SITE_NAME}`,
    description:
      "Static product preview of FragmentTrails discussions. Sample content only.",
  },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DiscussionShell>{children}</DiscussionShell>;
}
