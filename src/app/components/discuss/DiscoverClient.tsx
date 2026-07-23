"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import { EmptyState } from "@/app/components/discuss/FeedStates";
import {
  COMMUNITIES,
  DISCUSSIONS,
  formatCount,
  type Discussion,
  type Community,
  type Author,
} from "@/lib/discussions/data";

function filterDiscussions(items: Discussion[], query: string) {
  if (!query) return items;
  return items.filter(
    (d) =>
      d.title.toLowerCase().includes(query) ||
      d.excerpt.toLowerCase().includes(query) ||
      d.tags.some((t) => t.toLowerCase().includes(query)) ||
      d.author.name.toLowerCase().includes(query),
  );
}

function filterCommunities(items: Community[], query: string) {
  if (!query) return items;
  return items.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query),
  );
}

function uniqueAuthors(items: Discussion[]): Author[] {
  const map = new Map<string, Author>();
  for (const d of items) {
    if (!map.has(d.author.handle)) map.set(d.author.handle, d.author);
  }
  return [...map.values()];
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function DiscoverClient() {
  const searchParams = useSearchParams();
  const initial = (searchParams.get("q") ?? "").trim();
  const [q, setQ] = useState(initial);
  const query = q.trim().toLowerCase();

  useEffect(() => {
    setQ(initial);
  }, [initial]);

  useEffect(() => {
    const handle = window.setTimeout(() => {
      const next = q.trim();
      const current = searchParams.get("q") ?? "";
      if (next === current) return;
      const url = next
        ? `/discover/?q=${encodeURIComponent(next)}`
        : "/discover/";
      window.history.replaceState(null, "", url);
    }, 200);
    return () => window.clearTimeout(handle);
  }, [q, searchParams]);

  const discussions = useMemo(
    () =>
      [...DISCUSSIONS].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  );

  const authors = useMemo(() => uniqueAuthors(discussions), [discussions]);

  const filteredDiscussions = filterDiscussions(discussions, query);
  const filteredQuestions = filterDiscussions(
    discussions.filter((d) => d.type === "question"),
    query,
  );
  const filteredCommunities = filterCommunities(COMMUNITIES, query);
  const filteredPeople = query
    ? authors.filter(
        (a) =>
          a.name.toLowerCase().includes(query) ||
          a.handle.toLowerCase().includes(query) ||
          a.role.toLowerCase().includes(query),
      )
    : authors.slice(0, 4);

  const noResults =
    Boolean(query) &&
    filteredCommunities.length === 0 &&
    filteredQuestions.length === 0 &&
    filteredDiscussions.filter((d) => d.type === "discussion").length === 0 &&
    filteredPeople.length === 0;

  return (
    <div>
      <header className="mb-5">
        <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
          Discover
        </h1>
        <p className="mt-0.5 max-w-2xl text-sm text-textMuted">
          Search discussions, questions, communities, and people.
        </p>

        <form
          className="mt-4"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="discover-q">
            Search
          </label>
          <input
            id="discover-q"
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            type="search"
            placeholder="Search discussions, questions, communities, people…"
            autoComplete="off"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-highlight/50 focus:ring-2 focus:ring-highlight/20"
          />
        </form>
        {query ? (
          <p className="mt-3 text-sm text-textMuted">
            Live results for{" "}
            <span className="font-semibold text-secondary">&ldquo;{q.trim()}&rdquo;</span>
          </p>
        ) : null}
      </header>

      {noResults ? (
        <EmptyState
          title="No matches"
          description="Try a broader term, or browse communities and trending conversations."
          actionLabel="Browse communities"
          actionHref="/communities/"
        />
      ) : (
        <>
          <section className="mb-8" aria-labelledby="disc-communities">
            <div className="mb-3 flex items-baseline justify-between">
              <h2
                id="disc-communities"
                className="text-sm font-bold text-secondary"
              >
                Communities
              </h2>
              <Link
                href="/communities/"
                className="text-xs font-bold text-highlight-dark hover:text-secondary"
              >
                View all
              </Link>
            </div>
            {filteredCommunities.length === 0 ? (
              <p className="text-sm text-textMuted">No communities matched.</p>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2">
                {filteredCommunities.slice(0, 4).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/communities/${c.slug}/`}
                      className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-highlight/30 hover:bg-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${c.color}`}
                      >
                        {c.icon}
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-secondary">
                          {c.name}
                        </span>
                        <span className="mt-0.5 line-clamp-2 block text-xs text-textMuted">
                          {c.description}
                        </span>
                        <span className="mt-1 block text-[11px] font-medium text-textMuted">
                          {formatCount(c.members)} members
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {(query || filteredPeople.length > 0) && (
            <section className="mb-8" aria-labelledby="disc-people">
              <h2
                id="disc-people"
                className="mb-3 text-sm font-bold text-secondary"
              >
                People
              </h2>
              {filteredPeople.length === 0 ? (
                <p className="text-sm text-textMuted">No people matched.</p>
              ) : (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {filteredPeople.slice(0, 6).map((person) => (
                    <li key={person.handle}>
                      <Link
                        href={`/profiles/${person.handle}/`}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition hover:border-highlight/30 hover:bg-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-secondary ring-1 ring-slate-200"
                          aria-hidden
                        >
                          {initials(person.name)}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-bold text-secondary">
                            {person.name}
                          </span>
                          <span className="block truncate text-[11px] text-textMuted">
                            {person.role}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          <section className="mb-8" aria-labelledby="disc-questions">
            <h2
              id="disc-questions"
              className="mb-3 text-sm font-bold text-secondary"
            >
              Questions
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {filteredQuestions.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-textMuted">
                  No questions matched.
                </p>
              ) : (
                filteredQuestions
                  .slice(0, 4)
                  .map((item) => (
                    <DiscussionCard key={item.slug} item={item} />
                  ))
              )}
            </div>
          </section>

          <section aria-labelledby="disc-discussions">
            <h2
              id="disc-discussions"
              className="mb-3 text-sm font-bold text-secondary"
            >
              Discussions
            </h2>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {filteredDiscussions.filter((d) => d.type === "discussion")
                .length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-textMuted">
                  No discussions matched.
                </p>
              ) : (
                filteredDiscussions
                  .filter((d) => d.type === "discussion")
                  .slice(0, 4)
                  .map((item) => (
                    <DiscussionCard key={item.slug} item={item} />
                  ))
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
