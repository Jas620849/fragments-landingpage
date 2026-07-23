import Link from "next/link";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <h2 className="text-base font-bold text-secondary">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-textMuted">
        {description}
      </p>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="mt-5 inline-flex rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function FeedSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div
      className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">Loading feed</span>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="animate-pulse px-4 py-5 motion-reduce:animate-none">
          <div className="h-3 w-24 rounded bg-slate-200" />
          <div
            className="mt-3 h-4 max-w-md rounded bg-slate-200"
            style={{ width: "80%" }}
          />
          <div className="mt-2 h-3 w-full rounded bg-slate-100" />
          <div className="mt-2 h-3 w-2/3 rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn’t load this content. Try refreshing the page.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-red-200 bg-red-50 px-6 py-8 text-center"
    >
      <h2 className="text-base font-bold text-red-800">{title}</h2>
      <p className="mt-2 text-sm text-red-700/90">{description}</p>
      <Link
        href="/explore/"
        className="mt-4 inline-flex rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-bold text-red-800 transition hover:bg-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        Back to home
      </Link>
    </div>
  );
}
