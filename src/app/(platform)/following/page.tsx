import type { Metadata } from "next";
import Link from "next/link";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import {
  COMMUNITIES,
  formatCount,
  getTrendingDiscussions,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Following - FragmentTrails",
  description: "Follow communities and people on FragmentTrails to build a personalized knowledge feed on scholarship evaluation and educational assessment.",
  alternates: { canonical: "/following/" },
};

export default function FollowingPage() {
  const suggested = getTrendingDiscussions(5);
  const communities = [...COMMUNITIES]
    .sort((a, b) => b.weeklyPosts - a.weeklyPosts)
    .slice(0, 3);

  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
          Following
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-textMuted sm:text-base">
          Your personalized feed will live here. Until you follow communities, here are strong starting points. Build a custom knowledge feed focused on scholarship evaluation, interview assessment, and educational technology topics that matter to you.
        </p>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 p-6 border border-teal-100">
        <h2 className="text-lg font-bold text-secondary mb-3">Personalize Your Knowledge Feed</h2>
        <p className="text-sm text-textMuted mb-3">
          FragmentTrails lets you curate your own knowledge feed by following communities and topics relevant to your work. Instead of drowning in irrelevant content, see only the discussions and questions that matter to scholarship evaluation and educational assessment.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, follow communities focused on evaluation criteria, interview techniques, and assessment tools. Get updates on best practices, regulatory changes, and innovative approaches from other committees in the field.
        </p>
        <p className="text-sm text-textMuted">
          Educators can follow communities dedicated to classroom discourse, assessment strategies, and educational technology. Stay informed about teaching methods, student engagement techniques, and curriculum development from peers in similar educational contexts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Benefits of Following</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Relevant Content:</strong> See only discussions and questions from communities you follow, eliminating noise and saving time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Expert Updates:</strong> Get notifications when experts in your followed communities share insights on scholarship evaluation and educational assessment.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Trend Awareness:</strong> Stay informed about trending topics within your specific areas of interest and professional focus.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Networking:</strong> Connect with professionals in similar roles and build relationships with peers in scholarship committees and educational institutions.</span>
          </li>
        </ul>
      </section>

      <div className="mb-5 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-5 sm:px-5">
        <p className="text-sm font-bold text-secondary">
          You&apos;re not following anything yet
        </p>
        <p className="mt-1 text-xs leading-relaxed text-textMuted sm:text-sm">
          Join a community or sign in to sync follows across devices. Start by exploring the suggested communities below or browse all available communities.
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

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Start Building Your Feed</h2>
        <p className="text-sm text-textMuted mb-4">
          Join FragmentTrails to follow communities, customize your knowledge feed, and stay informed about the topics that matter most to your work in scholarship evaluation and educational assessment.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-dark"
          >
            Start Free Trial
          </Link>
          <Link
            href="/communities/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50"
          >
            Browse Communities
          </Link>
        </div>
      </section>
    </div>
  );
}
