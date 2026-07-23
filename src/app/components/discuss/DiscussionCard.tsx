import Link from "next/link";
import type { Discussion } from "@/lib/discussions/data";
import {
  formatRelativeDate,
  getCommunity,
} from "@/lib/discussions/data";
import VoteControl from "./VoteControl";

function hrefFor(item: Discussion) {
  return item.type === "question"
    ? `/questions/${item.slug}/`
    : `/discussions/${item.slug}/`;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type DiscussionCardProps = {
  item: Discussion;
  emphasize?: boolean;
};

export default function DiscussionCard({
  item,
  emphasize = false,
}: DiscussionCardProps) {
  const community = getCommunity(item.communitySlug);
  const isQuestion = item.type === "question";

  const href = hrefFor(item);

  return (
    <article
      className={`relative flex gap-3 border-b border-slate-200/90 bg-white px-3 py-3.5 transition hover:bg-slate-50/80 sm:gap-4 sm:px-4 sm:py-4 ${
        emphasize ? "ring-1 ring-inset ring-highlight/15" : ""
      }`}
    >
      <div className="relative z-10 hidden pt-0.5 sm:block">
        <VoteControl initialCount={item.upvoteCount} size="sm" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="relative z-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-textMuted">
          {isQuestion ? (
            <span className="rounded bg-secondary/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-secondary">
              Question
            </span>
          ) : (
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
              Discussion
            </span>
          )}
          {community ? (
            <Link
              href={`/communities/${community.slug}/`}
              className="font-semibold text-highlight-dark hover:underline"
            >
              {community.name}
            </Link>
          ) : null}
          <span aria-hidden>·</span>
          <span>{formatRelativeDate(item.publishedAt)}</span>
        </div>

        <h2 className="mt-1.5 text-base font-bold leading-snug tracking-tight text-secondary sm:text-[1.05rem]">
          <Link
            href={href}
            className="after:absolute after:inset-0 after:z-[1] hover:text-highlight-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
          >
            {item.title}
          </Link>
        </h2>

        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-textMuted">
          {item.excerpt}
        </p>

        <div className="relative z-10 mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
          <div className="sm:hidden">
            <VoteControl initialCount={item.upvoteCount} size="horizontal" />
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`/profiles/${item.author.handle}/`}
              className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-secondary ring-1 ring-slate-200 transition hover:ring-highlight/40"
              aria-label={`${item.author.name} profile`}
            >
              {initials(item.author.name)}
            </Link>
            <Link
              href={`/profiles/${item.author.handle}/`}
              className="relative z-10 text-xs font-medium text-textDark hover:text-highlight-dark"
            >
              {item.author.name}
            </Link>
            <span className="hidden text-[11px] text-textMuted sm:inline">
              {item.author.role}
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3 text-[11px] font-semibold text-textMuted sm:text-xs">
            <span>
              {isQuestion
                ? `${item.answerCount ?? 0} answers`
                : `${item.commentCount} comments`}
            </span>
            {item.hasAcceptedAnswer ? (
              <span className="text-highlight-dark">Best answer</span>
            ) : null}
          </div>
        </div>

        {item.tags.length > 0 ? (
          <ul
            className="relative z-10 mt-2 flex flex-wrap gap-1.5"
            aria-label="Tags"
          >
            {item.tags.map((tag) => (
              <li key={tag}>
                <Link
                  href={`/discover/?q=${encodeURIComponent(tag)}`}
                  className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 transition hover:border-highlight/40 hover:text-highlight-dark"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
