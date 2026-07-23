import Link from "next/link";
import { BLOG_POSTS } from "./_data";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const FEATURED_SLUGS = [
  "interview-moderation-explained",
  "educational-assessment-tools",
  "ai-powered-interview-evaluation",
  "building-evaluation-rubrics",
  "how-to-reduce-bias-in-scholarship-interviews",
  "structured-vs-unstructured-interviews",
];

export default function BlogIndexPage() {
  const featured = FEATURED_SLUGS.map((slug) =>
    BLOG_POSTS.find((p) => p.slug === slug)
  ).filter(Boolean);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Blog</p>
          <h1 className="frag-hero-h1 mt-1.5">
            Classroom discussion and fair evaluation
          </h1>
          <p className="frag-hero-lead max-w-2xl">
            A small set of practical guides for teachers and educators: moderated
            discussion trails, discussion quality, responsible AI checks, rubrics, and
            bias-aware evaluation. Edited by FragmentTrails—home of Fragments.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-10 sm:py-12">
        <div className="frag-container max-w-3xl">
          <h2 className="text-lg font-bold text-secondary sm:text-xl">Start here</h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted">
            Six cornerstone pieces. Each has a distinct job—moderation, assessment, AI
            limits, rubrics, bias controls, and interview structure.
          </p>
          <ul className="mt-6 space-y-4">
            {featured.map((post) =>
              post ? (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="block rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 transition hover:border-highlight/40 hover:bg-white sm:p-5"
                  >
                    <h3 className="text-base font-bold text-secondary sm:text-lg">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-textMuted">
                      {post.excerpt}
                    </p>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-bold text-secondary sm:text-xl">All guides</h2>
            <p className="mt-2 text-sm font-medium text-textMuted">
              {BLOG_POSTS.length} indexable articles after final editorial consolidation.
            </p>
            <ul className="mt-6 space-y-6">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <article className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-textMuted sm:text-xs">
                      {post.date}
                      {post.updatedISO ? " · Updated Jul 23, 2026" : ""} · {post.read}
                    </p>
                    <h2 className="mt-1.5 text-lg font-bold text-secondary sm:text-xl">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="transition hover:text-highlight-dark"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="mt-4 inline-flex text-sm font-bold text-highlight-dark hover:text-secondary"
                    >
                      Read article →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
