import type { Metadata } from "next";
import DiscussionShell from "@/app/components/discuss/DiscussionShell";
import { SITE_NAME } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: {
    default: `Discussions | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Structured discussions on scholarship evaluation, interview assessment, and educational technology. Join conversations that become lasting knowledge.",
  openGraph: {
    title: `Discussions | ${SITE_NAME}`,
    description:
      "Structured discussions on scholarship evaluation, interview assessment, and educational technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Discussions | ${SITE_NAME}`,
    description:
      "Structured discussions on scholarship evaluation, interview assessment, and educational technology.",
  },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DiscussionShell>{children}</DiscussionShell>;
}
