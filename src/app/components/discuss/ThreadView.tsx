import Link from "next/link";
import type { Metadata } from "next";
import VoteControl from "@/app/components/discuss/VoteControl";
import ShareButton from "@/app/components/discuss/ShareButton";
import SaveButton from "@/app/components/discuss/SaveButton";
import FollowQuestionButton from "@/app/components/discuss/FollowQuestionButton";
import ReplyList from "@/app/components/discuss/ReplyList";
import {
  DISCUSSIONS,
  formatCount,
  formatRelativeDate,
  getCommentsForDiscussion,
  getCommunity,
  getDiscussion,
  type Discussion,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import DiscussionForumSchema from "@/app/components/DiscussionForumSchema";
import QAPageSchema from "@/app/components/QAPageSchema";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ThreadView({
  item,
  kind,
}: {
  item: Discussion;
  kind: "discussion" | "question";
}) {
  const community = getCommunity(item.communitySlug);
  const allComments = getCommentsForDiscussion(item.slug);
  const roots = allComments.filter((c) => !c.parentId);
  const isQuestion = kind === "question";
  const threadPath = isQuestion
    ? `/questions/${item.slug}/`
    : `/discussions/${item.slug}/`;
  const answerCount = item.answerCount ?? roots.length;

  return (
    <div>
      <BreadcrumbSchema
        items={[
          { name: "Explore", path: "/explore/" },
          ...(community
            ? [
                {
                  name: community.name,
                  path: `/communities/${community.slug}/`,
                },
              ]
            : []),
          {
            name: item.title,
            path: threadPath,
          },
        ]}
      />
      <DiscussionForumSchema
        threadUrl={threadPath}
        threadTitle={item.title}
        threadText={item.body}
        authorName={item.author.name}
        authorUrl={`/explore/`}
        publishedAt={item.publishedAt}
        updatedAt={item.updatedAt ?? item.publishedAt}
        replyCount={item.commentCount}
        interactionCount={item.viewCount}
        upvoteCount={item.upvoteCount}
        category={community?.name ?? item.communitySlug}
      />
      {isQuestion ? (
        <QAPageSchema
          questionUrl={threadPath}
          questionTitle={item.title}
          questionText={item.body}
          authorName={item.author.name}
          authorUrl={`/explore/`}
          publishedAt={item.publishedAt}
          updatedAt={item.updatedAt ?? item.publishedAt}
          answerCount={answerCount}
          upvoteCount={item.upvoteCount}
          viewCount={item.viewCount}
          answers={roots.map((r) => ({
            text: r.body,
            authorName: r.author.name,
            authorUrl: `/explore/`,
            upvoteCount: r.upvoteCount,
            publishedAt: r.publishedAt,
            isAccepted: Boolean(r.isAccepted),
          }))}
          category={community?.name ?? item.communitySlug}
        />
      ) : null}

      <nav className="mb-4 text-xs text-textMuted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/explore/" className="hover:text-secondary">
              Explore
            </Link>
          </li>
          {isQuestion ? (
            <>
              <li aria-hidden>/</li>
              <li>
                <Link href="/questions/" className="hover:text-secondary">
                  Questions
                </Link>
              </li>
            </>
          ) : null}
          {community ? (
            <>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href={`/communities/${community.slug}/`}
                  className="hover:text-secondary"
                >
                  {community.name}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden>/</li>
          <li className="line-clamp-1 font-semibold text-secondary">
            {item.title}
          </li>
        </ol>
      </nav>

      {isQuestion ? (
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-md bg-secondary px-2 py-1 text-white">
            {answerCount} {answerCount === 1 ? "answer" : "answers"}
          </span>
          {item.hasAcceptedAnswer ? (
            <span className="rounded-md bg-highlight/15 px-2 py-1 text-highlight-dark">
              Best answer selected
            </span>
          ) : (
            <span className="rounded-md bg-accent/15 px-2 py-1 text-accent-dark">
              Awaiting a strong answer
            </span>
          )}
        </div>
      ) : null}

      <article
        className={`rounded-xl border bg-white p-4 shadow-sm sm:p-6 ${
          isQuestion
            ? "border-secondary/25 ring-1 ring-secondary/10"
            : "border-slate-200"
        }`}
      >
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span
            className={
              isQuestion
                ? "rounded bg-secondary/10 px-1.5 py-0.5 font-bold uppercase tracking-wide text-secondary"
                : "rounded bg-slate-100 px-1.5 py-0.5 font-bold uppercase tracking-wide text-slate-600"
            }
          >
            {isQuestion ? "Question" : "Discussion"}
          </span>
          {community ? (
            <Link
              href={`/communities/${community.slug}/`}
              className="font-semibold text-highlight-dark hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            >
              {community.name}
            </Link>
          ) : null}
          <span className="text-textMuted">
            {formatRelativeDate(item.publishedAt)} ·{" "}
            {formatCount(item.viewCount)} views
          </span>
        </div>

        <div className="mt-4 flex gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <VoteControl initialCount={item.upvoteCount} />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl sm:leading-tight">
              {item.title}
            </h1>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Link
                href={`/profiles/${item.author.handle}/`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-secondary ring-1 ring-slate-200 transition hover:ring-highlight/40"
                aria-label={`${item.author.name} profile`}
              >
                {initials(item.author.name)}
              </Link>
              <div>
                <p className="font-bold text-secondary">
                  <Link
                    href={`/profiles/${item.author.handle}/`}
                    className="hover:text-highlight-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  >
                    {item.author.name}
                  </Link>
                </p>
                <p className="text-xs text-textMuted">{item.author.role}</p>
              </div>
            </div>
            <div className="mt-5 whitespace-pre-wrap text-[15px] leading-relaxed text-textDark">
              {item.body}
            </div>
            {item.tags.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <Link
                      href={`/discover/?q=${encodeURIComponent(tag)}`}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 transition hover:border-highlight/40 hover:text-highlight-dark"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold">
              <div className="sm:hidden">
                <VoteControl
                  initialCount={item.upvoteCount}
                  size="horizontal"
                />
              </div>
              <SaveButton />
              <ShareButton
                title={item.title}
                path={threadPath}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-secondary hover:bg-slate-50"
              />
              {isQuestion ? <FollowQuestionButton /> : null}
            </div>
          </div>
        </div>
      </article>

      <section className="mt-6" aria-labelledby="replies-heading">
        <ReplyList
          roots={roots}
          allComments={allComments}
          threadPath={threadPath}
          isQuestion={isQuestion}
        />

        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-secondary">
            {isQuestion ? "Write an answer" : "Add a comment"}
          </p>
          <p className="mt-1 text-xs text-textMuted">
            {isQuestion
              ? "Prioritize clarity and evidence. Helpful answers can be marked as best."
              : "High-quality contributions are scored for helpfulness. Sign in to participate."}
          </p>
          <Link
            href={`${frontendAppBaseUrl}/auth/login`}
            className="mt-3 inline-flex rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent-dark"
          >
            Sign in to {isQuestion ? "answer" : "reply"}
          </Link>
        </div>
      </section>
    </div>
  );
}

export function generateDiscussionStaticParams() {
  return DISCUSSIONS.filter((d) => d.type === "discussion").map((d) => ({
    slug: d.slug,
  }));
}

export function generateQuestionStaticParams() {
  return DISCUSSIONS.filter((d) => d.type === "question").map((d) => ({
    slug: d.slug,
  }));
}

export async function discussionMetadata(
  slug: string,
  kind: "discussion" | "question",
): Promise<Metadata> {
  const item = getDiscussion(slug);
  if (!item || item.type !== kind) {
    return { title: "Not found" };
  }
  const path =
    kind === "question" ? `/questions/${slug}/` : `/discussions/${slug}/`;
  return {
    title: item.title,
    description: item.excerpt,
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(path) }
      : undefined,
    openGraph: {
      title: `${item.title} | ${SITE_NAME}`,
      description: item.excerpt,
      type: "article",
      publishedTime: item.publishedAt,
    },
  };
}

export { ThreadView };
