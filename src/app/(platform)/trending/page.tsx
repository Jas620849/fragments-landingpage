import type { Metadata } from "next";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getTrendingDiscussions } from "@/lib/discussions/data";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Trending",
  description:
    "Trending discussions and questions gaining momentum on FragmentTrails.",
  robots: PLATFORM_DEMO_ROBOTS,
  alternates: { canonical: "/trending/" },
};

export default function TrendingPage() {
  const feed = getTrendingDiscussions(12);

  return (
    <div>
      <header className="mb-3 sm:mb-4">
        <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
          Trending
        </h1>
        <p className="mt-0.5 max-w-2xl text-sm text-textMuted">
          High-signal conversations ranked by helpfulness—not noise.
        </p>
      </header>

      <FeedTabs active="/trending/" />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {feed.map((item) => (
          <DiscussionCard key={item.slug} item={item} emphasize />
        ))}
      </div>
    </div>
  );
}
