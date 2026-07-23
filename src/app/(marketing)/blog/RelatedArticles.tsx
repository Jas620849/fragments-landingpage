import Link from "next/link";
import { BLOG_POSTS, type BlogPostMeta } from "./_data";

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "for",
  "in",
  "of",
  "on",
  "or",
  "the",
  "to",
  "vs",
  "with",
  "how",
]);

function titleTokens(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/[\s-]+/)
      .filter((t) => t.length > 2 && !STOP_WORDS.has(t)),
  );
}

function overlapScore(a: Set<string>, b: Set<string>): number {
  let score = 0;
  for (const token of a) {
    if (b.has(token)) score += 1;
  }
  return score;
}

export function getRelatedPosts(currentSlug: string, limit = 4): BlogPostMeta[] {
  const index = BLOG_POSTS.findIndex((p) => p.slug === currentSlug);
  if (index < 0) return [];

  const current = BLOG_POSTS[index];
  const currentTokens = titleTokens(current.title);
  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  const scored = others
    .map((post) => ({
      post,
      score: overlapScore(currentTokens, titleTokens(post.title)),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const related: BlogPostMeta[] = scored.slice(0, limit).map((item) => item.post);

  if (related.length >= limit) return related;

  // Fill remaining slots with adjacent posts in the catalog order.
  const used = new Set(related.map((p) => p.slug));
  const adjacent: BlogPostMeta[] = [];
  for (let offset = 1; adjacent.length < limit - related.length; offset++) {
    const before = BLOG_POSTS[index - offset];
    const after = BLOG_POSTS[index + offset];
    if (before && !used.has(before.slug)) {
      adjacent.push(before);
      used.add(before.slug);
    }
    if (adjacent.length >= limit - related.length) break;
    if (after && !used.has(after.slug)) {
      adjacent.push(after);
      used.add(after.slug);
    }
    if (!before && !after) break;
  }

  return [...related, ...adjacent].slice(0, limit);
}

export default function RelatedArticles({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug, 4);
  if (related.length === 0) return null;

  return (
    <aside className="mt-14 border-t border-slate-200/80 pt-10">
      <h2 className="text-lg font-bold tracking-tight text-secondary sm:text-xl">
        Related articles
      </h2>
      <ul className="mt-5 space-y-4">
        {related.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}/`}
              className="group block transition"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-textMuted sm:text-xs">
                {post.date} · {post.read}
              </p>
              <p className="mt-1 text-base font-bold text-secondary transition group-hover:text-highlight-dark">
                {post.title}
              </p>
              <p className="mt-1 text-sm font-medium leading-relaxed text-textMuted">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
