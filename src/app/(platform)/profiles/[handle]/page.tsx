import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import { EmptyState } from "@/app/components/discuss/FeedStates";
import FollowProfileButton from "@/app/components/discuss/FollowProfileButton";
import {
  getAuthor,
  getAuthorHandles,
  getDiscussionsByAuthor,
} from "@/lib/discussions/data";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ handle: string }> };

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function generateStaticParams() {
  return getAuthorHandles().map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const author = getAuthor(handle);
  if (!author) return { title: "Profile not found" };
  return {
    title: author.name,
    description: `${author.name} · ${author.role} on ${SITE_NAME}`,
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/profiles/${handle}/`) }
      : undefined,
    openGraph: {
      title: `${author.name} | ${SITE_NAME}`,
      description: `${author.role} contributing to discussions on FragmentTrails.`,
      type: "profile",
    },
  };
}

export default async function ProfilePage({ params }: PageProps) {
  const { handle } = await params;
  const author = getAuthor(handle);
  if (!author) notFound();

  const posts = getDiscussionsByAuthor(handle);

  return (
    <div>
      <nav className="mb-4 text-xs text-textMuted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/explore/" className="hover:text-secondary">
              Explore
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/discover/" className="hover:text-secondary">
              People
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-semibold text-secondary">{author.name}</li>
        </ol>
      </nav>

      <header className="mb-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-start gap-4">
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-secondary ring-1 ring-slate-200"
            aria-hidden
          >
            {initials(author.name)}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
              {author.name}
            </h1>
            <p className="mt-1 text-sm text-textMuted">{author.role}</p>
            <p className="mt-2 text-xs font-semibold text-textMuted">
              @{author.handle} · {posts.length}{" "}
              {posts.length === 1 ? "post" : "posts"}
            </p>
          </div>
          <FollowProfileButton name={author.name} />
        </div>
      </header>

      <h2 className="mb-3 text-sm font-bold text-secondary">Contributions</h2>
      {posts.length === 0 ? (
        <EmptyState
          title="No posts yet"
          description="This member hasn’t started a discussion or question in the preview catalog."
          actionLabel="Browse discussions"
          actionHref="/explore/"
        />
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {posts.map((item) => (
            <DiscussionCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
