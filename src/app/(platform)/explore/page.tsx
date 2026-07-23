import type { Metadata } from "next";
import Link from "next/link";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import DiscoveryRail from "@/app/components/discuss/DiscoveryRail";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getLatestDiscussions } from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Discussion preview",
  description:
    "Static sample feed previewing FragmentTrails discussions—not live user content.",
  robots: PLATFORM_DEMO_ROBOTS,
};

export default function ExplorePage() {
  const feed = getLatestDiscussions(12);

  return (
    <div>
      <header className="mb-3 sm:mb-4">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
              Discussion preview
            </h1>
            <p className="mt-0.5 text-sm text-textMuted">
              Sample threads showing how trails and questions could look.
            </p>
          </div>
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="hidden rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-secondary transition hover:bg-slate-50 sm:inline-flex"
          >
            Create free account
          </Link>
        </div>
      </header>

      <FeedTabs active="/explore/" />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {feed.map((item) => (
          <DiscussionCard
            key={item.slug}
            item={item}
            emphasize={item.isTrending}
          />
        ))}
      </div>

      <div className="mt-6 xl:hidden">
        <DiscoveryRail />
      </div>
    </div>
  );
}
