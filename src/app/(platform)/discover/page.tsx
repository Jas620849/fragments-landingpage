import type { Metadata } from "next";
import { Suspense } from "react";
import DiscoverClient from "@/app/components/discuss/DiscoverClient";
import { FeedSkeleton } from "@/app/components/discuss/FeedStates";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Discover communities, topics, questions, and discussions on FragmentTrails.",
  alternates: { canonical: "/discover/" },
};

export default function DiscoverPage() {
  return (
    <Suspense fallback={<FeedSkeleton rows={5} />}>
      <DiscoverClient />
    </Suspense>
  );
}
