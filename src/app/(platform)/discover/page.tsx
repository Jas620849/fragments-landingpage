import type { Metadata } from "next";
import { Suspense } from "react";
import DiscoverClient from "@/app/components/discuss/DiscoverClient";
import { FeedSkeleton } from "@/app/components/discuss/FeedStates";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Discover communities, topics, questions, and discussions on FragmentTrails.",
  robots: PLATFORM_DEMO_ROBOTS,
  alternates: { canonical: "/discover/" },
};

export default function DiscoverPage() {
  return (
    <Suspense fallback={<FeedSkeleton rows={5} />}>
      <DiscoverClient />
    </Suspense>
  );
}
