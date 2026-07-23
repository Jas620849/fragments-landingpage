"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import VoteControl from "@/app/components/discuss/VoteControl";
import ShareButton from "@/app/components/discuss/ShareButton";
import {
  formatRelativeDate,
  type Comment,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CommentNode({
  comment,
  replies,
  threadPath,
  depth = 0,
}: {
  comment: Comment;
  replies: Comment[];
  threadPath: string;
  depth?: number;
}) {
  const kids = depth < 2 ? replies.filter((r) => r.parentId === comment.id) : [];
  return (
    <li
      id={comment.id}
      className={
        depth > 0 ? "ml-3 border-l border-slate-200 pl-3 sm:ml-5 sm:pl-4" : ""
      }
    >
      <article
        className={`rounded-lg border bg-white p-3 sm:p-4 ${
          comment.isAccepted
            ? "border-highlight/40 ring-1 ring-highlight/20"
            : "border-slate-200"
        }`}
      >
        {comment.isAccepted ? (
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-highlight-dark">
            Best answer
          </p>
        ) : null}
        <div className="flex gap-3">
          <VoteControl initialCount={comment.upvoteCount} size="sm" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link
                href={`/profiles/${comment.author.handle}/`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-secondary transition hover:ring-1 hover:ring-highlight/40"
                aria-label={`${comment.author.name} profile`}
              >
                {initials(comment.author.name)}
              </Link>
              <Link
                href={`/profiles/${comment.author.handle}/`}
                className="font-bold text-secondary hover:text-highlight-dark"
              >
                {comment.author.name}
              </Link>
              <span className="text-textMuted">{comment.author.role}</span>
              <span className="text-textMuted">
                {formatRelativeDate(comment.publishedAt)}
              </span>
            </div>
            <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-textDark">
              {comment.body}
            </div>
            <div className="mt-3 flex gap-3 text-xs font-semibold text-textMuted">
              <Link
                href={`${frontendAppBaseUrl}/auth/login`}
                className="hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
              >
                Reply
              </Link>
              <ShareButton
                title={`Reply by ${comment.author.name}`}
                path={`${threadPath}#${comment.id}`}
                className="hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
              />
            </div>
          </div>
        </div>
      </article>
      {kids.length > 0 ? (
        <ul className="mt-3 space-y-3">
          {kids.map((kid) => (
            <CommentNode
              key={kid.id}
              comment={kid}
              replies={replies}
              threadPath={threadPath}
              depth={depth + 1}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

type SortKey = "helpful" | "newest";

export default function ReplyList({
  roots,
  allComments,
  threadPath,
  isQuestion,
}: {
  roots: Comment[];
  allComments: Comment[];
  threadPath: string;
  isQuestion: boolean;
}) {
  const [sort, setSort] = useState<SortKey>("helpful");

  const ordered = useMemo(() => {
    const list = [...roots];
    if (sort === "newest") {
      return list.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
    }
    return list.sort(
      (a, b) =>
        Number(Boolean(b.isAccepted)) - Number(Boolean(a.isAccepted)) ||
        b.upvoteCount - a.upvoteCount,
    );
  }, [roots, sort]);

  return (
    <>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 id="replies-heading" className="text-base font-bold text-secondary">
          {isQuestion
            ? `Answers (${roots.length})`
            : `Comments (${roots.length})`}
        </h2>
        <label className="text-xs text-textMuted">
          Sort{" "}
          <select
            className="ml-1 rounded-md border border-slate-200 bg-white px-2 py-1 font-semibold text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort replies"
          >
            <option value="helpful">Most helpful</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </div>

      {ordered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-textMuted">
          No replies yet.{" "}
          <Link
            href={`${frontendAppBaseUrl}/auth/login`}
            className="font-bold text-highlight-dark hover:underline"
          >
            Sign in to contribute
          </Link>
          .
        </p>
      ) : (
        <ul className="space-y-3">
          {ordered.map((c) => (
            <CommentNode
              key={c.id}
              comment={c}
              replies={allComments}
              threadPath={threadPath}
            />
          ))}
        </ul>
      )}
    </>
  );
}
