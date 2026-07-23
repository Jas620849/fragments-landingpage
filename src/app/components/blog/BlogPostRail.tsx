import Link from "next/link";
import type { BlogPostMeta } from "@/app/(marketing)/blog/_data";
import { getRelatedPosts } from "@/app/(marketing)/blog/RelatedArticles";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

type BlogPostRailProps = {
  post: BlogPostMeta;
};

export default function BlogPostRail({ post }: BlogPostRailProps) {
  const related = getRelatedPosts(post.slug, 5);

  return (
    <div className="space-y-4">
      <aside
        className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80"
        aria-label="About this topic"
      >
        <p className="text-[10px] font-bold uppercase tracking-wider text-highlight-dark">
          About
        </p>
        <h2 className="mt-1.5 text-sm font-bold text-secondary">{post.category}</h2>
        <p className="mt-2 text-xs leading-relaxed text-textMuted">
          Guides and discussion threads on {post.category.toLowerCase()} for
          educators and selection teams using Fragments.
        </p>
        <Link
          href={`/blog/category/${categorySlug(post.category)}/`}
          className="mt-3 inline-flex text-xs font-bold text-highlight-dark transition hover:text-secondary"
        >
          Browse topic →
        </Link>
      </aside>

      {related.length > 0 ? (
        <aside
          className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80"
          aria-label="Related discussions"
        >
          <p className="text-[10px] font-bold uppercase tracking-wider text-textMuted">
            Related discussions
          </p>
          <ul className="mt-3 divide-y divide-slate-100">
            {related.map((item) => (
              <li key={item.slug} className="py-2.5 first:pt-0 last:pb-0">
                <Link
                  href={`/blog/${item.slug}/`}
                  className="group block transition"
                >
                  <p className="text-sm font-bold leading-snug text-secondary transition group-hover:text-highlight-dark">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-textMuted">
                    {item.read}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      <aside
        className="rounded-xl border border-accent/20 bg-gradient-to-b from-primary/90 to-white p-4 shadow-sm ring-1 ring-slate-100/90"
        aria-label="Join the discussion"
      >
        <p className="text-[10px] font-bold uppercase tracking-wider text-highlight-dark">
          Join in
        </p>
        <h2 className="mt-1.5 text-sm font-bold text-secondary">
          Start a trail
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-textMuted">
          Fragments is built for structured discussion—publish, review, and
          score ideas with your cohort.
        </p>
        <div className="mt-3 flex flex-col gap-2">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-3 py-2 text-center text-xs font-bold text-white shadow-sm transition hover:bg-accent-dark"
          >
            Create free account
          </Link>
          <Link
            href="/blog/"
            className="inline-flex w-full items-center justify-center rounded-lg border border-highlight/40 bg-white px-3 py-2 text-center text-xs font-semibold text-highlight-dark transition hover:bg-highlight hover:text-white"
          >
            Read the blog
          </Link>
        </div>
      </aside>
    </div>
  );
}
