import type { Metadata } from "next";
import { EmptyState } from "@/app/components/discuss/FeedStates";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import { getLatestDiscussions } from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import Link from "next/link";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Saved",
  description: "Saved discussions and questions on FragmentTrails.",
  robots: PLATFORM_DEMO_ROBOTS,
  alternates: { canonical: "/saved/" },
};

export default function SavedPage() {
  const starters = getLatestDiscussions(3);

  return (
    <div>
      <header className="mb-4">
        <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
          Saved
        </h1>
        <p className="mt-0.5 max-w-2xl text-sm text-textMuted">
          Bookmark discussions and answers to build your personal knowledge base.
        </p>
      </header>

      <EmptyState
        title="No saved items yet"
        description="Open a discussion and tap Save. Sign in to sync bookmarks across devices."
        actionLabel="Browse discussions"
        actionHref="/explore/"
      />

      <p className="mt-4 text-center text-xs text-textMuted">
        Already have an account?{" "}
        <a
          href={`${frontendAppBaseUrl}/auth/login`}
          className="font-bold text-highlight-dark hover:underline"
        >
          Sign in
        </a>
      </p>

      <section className="mt-8" aria-labelledby="saved-starters">
        <div className="mb-2 flex items-baseline justify-between gap-2">
          <h2
            id="saved-starters"
            className="text-xs font-bold uppercase tracking-wider text-textMuted"
          >
            Worth saving
          </h2>
          <Link
            href="/trending/"
            className="text-xs font-bold text-highlight-dark hover:text-secondary"
          >
            See trending →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {starters.map((item) => (
            <DiscussionCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
