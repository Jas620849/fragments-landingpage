import Link from "next/link";
import { BLOG_POSTS } from "@/app/(marketing)/blog/_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type ArticleNavigationProps = {
  currentSlug: string;
};

export default function ArticleNavigation({ currentSlug }: ArticleNavigationProps) {
  const currentIndex = BLOG_POSTS.findIndex((post) => post.slug === currentSlug);
  const previousPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  return (
    <nav
      className="mt-8 grid gap-4 sm:grid-cols-2"
      aria-label="Article navigation"
    >
      {previousPost && (
        <Link
          href={`/blog/${previousPost.slug}/`}
          className="group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80 transition hover:border-blue-300 hover:shadow-md"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400 transition group-hover:bg-blue-100 group-hover:text-blue-600">
            <FontAwesomeIcon icon={faArrowLeft} className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-textMuted">
              Previous
            </p>
            <p className="mt-1 text-sm font-bold leading-tight text-secondary line-clamp-2 group-hover:text-blue-600 transition">
              {previousPost.title}
            </p>
            <p className="mt-1 text-xs font-medium text-textMuted">
              {previousPost.read}
            </p>
          </div>
        </Link>
      )}

      {nextPost && (
        <Link
          href={`/blog/${nextPost.slug}/`}
          className={`group flex items-center gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm ring-1 ring-slate-100/80 transition hover:border-blue-300 hover:shadow-md ${
            previousPost ? 'sm:ml-auto' : 'sm:col-span-2'
          }`}
        >
          <div className="min-w-0 flex-1 text-right">
            <p className="text-[10px] font-bold uppercase tracking-wider text-textMuted">
              Next
            </p>
            <p className="mt-1 text-sm font-bold leading-tight text-secondary line-clamp-2 group-hover:text-blue-600 transition">
              {nextPost.title}
            </p>
            <p className="mt-1 text-xs font-medium text-textMuted">
              {nextPost.read}
            </p>
          </div>
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400 transition group-hover:bg-blue-100 group-hover:text-blue-600">
            <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5" />
          </div>
        </Link>
      )}
    </nav>
  );
}
