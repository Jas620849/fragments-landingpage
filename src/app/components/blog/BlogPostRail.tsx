import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/app/(marketing)/blog/_data";
import { BLOG_POSTS } from "@/app/(marketing)/blog/_data";
import { getRelatedPosts } from "@/app/(marketing)/blog/RelatedArticles";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import { getCategories } from "@/app/(marketing)/blog/_data";

function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

type BlogPostRailProps = {
  post: BlogPostMeta;
};

export default function BlogPostRail({ post }: BlogPostRailProps) {
  const related = getRelatedPosts(post.slug, 5);
  const categories = getCategories();
  const recentPosts = BLOG_POSTS.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Newsletter Card */}
      <aside
        className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm ring-1 ring-blue-100/50"
        aria-label="Newsletter subscription"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
            <span className="text-xs font-bold text-white">✉</span>
          </div>
          <h3 className="text-sm font-bold text-secondary">Stay Updated</h3>
        </div>
        <p className="mb-4 text-xs leading-relaxed text-textMuted">
          Get the latest scholarship insights and interview tips delivered to your inbox.
        </p>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-textDark placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Subscribe
          </button>
        </form>
      </aside>

      {/* Categories */}
      <aside
        className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80"
        aria-label="Blog categories"
      >
        <h3 className="mb-3 text-sm font-bold text-secondary">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${categorySlug(category)}/`}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition hover:bg-blue-50 hover:text-blue-600 ${
                category === post.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-textMuted'
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </aside>

      {/* Recent Posts */}
      <aside
        className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80"
        aria-label="Recent posts"
      >
        <h3 className="mb-3 text-sm font-bold text-secondary">Recent Posts</h3>
        <ul className="space-y-3">
          {recentPosts.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/blog/${item.slug}/`}
                className="group flex gap-3 transition hover:bg-slate-50 rounded-lg p-2 -mx-2"
              >
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-tight text-secondary line-clamp-2 group-hover:text-blue-600 transition">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[10px] font-medium text-textMuted">
                    {item.read}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Related Posts */}
      {related.length > 0 ? (
        <aside
          className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80"
          aria-label="Related posts"
        >
          <h3 className="mb-3 text-sm font-bold text-secondary">Related Posts</h3>
          <ul className="space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}/`}
                  className="group flex gap-3 transition hover:bg-slate-50 rounded-lg p-2 -mx-2"
                >
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold leading-tight text-secondary line-clamp-2 group-hover:text-blue-600 transition">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-textMuted">
                      {item.read}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      {/* CTA Card */}
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
