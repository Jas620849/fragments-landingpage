import Link from "next/link";
import {
  COMMUNITIES,
  formatCount,
  getTrendingDiscussions,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export default function DiscoveryRail() {
  const trending = getTrendingDiscussions(5);
  const topCommunities = [...COMMUNITIES]
    .sort((a, b) => b.weeklyPosts - a.weeklyPosts)
    .slice(0, 4);

  return (
    <div className="space-y-4">
      <section
        className="rounded-xl border border-slate-200 bg-white p-4"
        aria-labelledby="trending-heading"
      >
        <h2
          id="trending-heading"
          className="text-[10px] font-bold uppercase tracking-wider text-textMuted"
        >
          Trending
        </h2>
        <ul className="mt-3 space-y-3">
          {trending.map((item, i) => (
            <li key={item.slug}>
              <Link
                href={
                  item.type === "question"
                    ? `/questions/${item.slug}/`
                    : `/discussions/${item.slug}/`
                }
                className="group flex gap-2"
              >
                <span className="mt-0.5 w-4 shrink-0 text-xs font-bold text-slate-300">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-snug text-secondary transition group-hover:text-highlight-dark">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-textMuted">
                    {formatCount(item.upvoteCount)} helpful ·{" "}
                    {item.type === "question"
                      ? `${item.answerCount ?? 0} answers`
                      : `${item.commentCount} comments`}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/trending/"
          className="mt-3 inline-block text-xs font-bold text-highlight-dark hover:text-secondary"
        >
          See all trending →
        </Link>
      </section>

      <section
        className="rounded-xl border border-slate-200 bg-white p-4"
        aria-labelledby="communities-heading"
      >
        <h2
          id="communities-heading"
          className="text-[10px] font-bold uppercase tracking-wider text-textMuted"
        >
          Active communities
        </h2>
        <ul className="mt-3 space-y-2.5">
          {topCommunities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/communities/${c.slug}/`}
                className="group flex items-center gap-2.5"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white ${c.color}`}
                  aria-hidden
                >
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-secondary group-hover:text-highlight-dark">
                    {c.name}
                  </span>
                  <span className="block text-[11px] text-textMuted">
                    {formatCount(c.members)} members · {c.weeklyPosts}/wk
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/communities/"
          className="mt-3 inline-block text-xs font-bold text-highlight-dark hover:text-secondary"
        >
          Browse communities →
        </Link>
      </section>

      <section className="rounded-xl border border-accent/25 bg-gradient-to-b from-primary/80 to-white p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-highlight-dark">
          Participate
        </p>
        <p className="mt-1.5 text-sm font-bold text-secondary">
          Start a discussion or ask a question
        </p>
        <p className="mt-1 text-xs leading-relaxed text-textMuted">
          Join FragmentTrails to publish trails, vote on helpful answers, and
          follow communities.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-3 py-2 text-center text-xs font-bold text-white transition hover:bg-accent-dark"
          >
            Ask a question
          </Link>
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="inline-flex w-full items-center justify-center rounded-lg border border-highlight/40 bg-white px-3 py-2 text-center text-xs font-semibold text-highlight-dark transition hover:bg-highlight hover:text-white"
          >
            Start a discussion
          </Link>
        </div>
      </section>
    </div>
  );
}
