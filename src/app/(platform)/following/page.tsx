import type { Metadata } from "next";
import Link from "next/link";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import {
  COMMUNITIES,
  formatCount,
  getTrendingDiscussions,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Following",
  description:
    "Follow communities and people on FragmentTrails to build a personalized knowledge feed.",
  robots: PLATFORM_DEMO_ROBOTS,
  alternates: { canonical: "/following/" },
};

export default function FollowingPage() {
  const suggested = getTrendingDiscussions(5);
  const communities = [...COMMUNITIES]
    .sort((a, b) => b.weeklyPosts - a.weeklyPosts)
    .slice(0, 3);

  return (
    <div>
      <header className="mb-4">
        <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
          Following
        </h1>
        <p className="mt-0.5 max-w-2xl text-sm text-textMuted">
          Your personalized feed will live here. Until you follow communities,
          here are strong starting points.
        </p>
      </header>

      <div className="mb-5 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-5 sm:px-5">
        <p className="text-sm font-bold text-secondary">
          You&apos;re not following anything yet
        </p>
        <p className="mt-1 text-xs leading-relaxed text-textMuted sm:text-sm">
          Join a community or sign in to sync follows across devices.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/communities/"
            className="rounded-lg bg-accent px-3 py-2 text-xs font-bold text-white transition hover:bg-accent-dark"
          >
            Browse communities
          </Link>
          <Link
            href={`${frontendAppBaseUrl}/auth/login`}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-secondary transition hover:bg-slate-50"
          >
            Sign in
          </Link>
        </div>
      </div>

      <section className="mb-6" aria-labelledby="suggested-communities">
        <h2
          id="suggested-communities"
          className="mb-2 text-xs font-bold uppercase tracking-wider text-textMuted"
        >
          Suggested communities
        </h2>
        <ul className="grid gap-2 sm:grid-cols-3">
          {communities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/communities/${c.slug}/`}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 transition hover:border-highlight/30 hover:bg-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
              >
                <span className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold text-white ${c.color}`}
                    aria-hidden
                  >
                    {c.icon}
                  </span>
                  <span className="text-sm font-bold text-secondary">
                    {c.name}
                  </span>
                </span>
                <span className="mt-2 line-clamp-2 text-xs text-textMuted">
                  {c.description}
                </span>
                <span className="mt-2 text-[11px] font-semibold text-textMuted">
                  {formatCount(c.members)} members
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="suggested-feed">
        <h2
          id="suggested-feed"
          className="mb-2 text-xs font-bold uppercase tracking-wider text-textMuted"
        >
          Suggested for you
        </h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {suggested.map((item) => (
            <DiscussionCard key={item.slug} item={item} emphasize={item.isTrending} />
          ))}
        </div>
      </section>
    </div>
  );
}
