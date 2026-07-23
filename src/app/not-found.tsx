import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-highlight-dark">
        {SITE_NAME}
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-textMuted">
        That discussion, community, or page doesn’t exist—or may have moved.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <Link
          href="/"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Go to homepage
        </Link>
        <Link
          href="/blog/"
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
