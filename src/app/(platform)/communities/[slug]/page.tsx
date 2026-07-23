import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import { EmptyState } from "@/app/components/discuss/FeedStates";
import CommunityJoinButton from "@/app/components/discuss/CommunityJoinButton";
import {
  COMMUNITIES,
  formatCount,
  getCommunity,
  getDiscussionsByCommunity,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import { SITE_NAME } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COMMUNITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) return { title: "Community not found" };
  return {
    title: community.name,
    description: community.description,
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/communities/${slug}/`) }
      : undefined,
    openGraph: {
      title: `${community.name} | ${SITE_NAME}`,
      description: community.description,
      type: "website",
    },
  };
}

export default async function CommunityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) notFound();

  const posts = getDiscussionsByCommunity(slug);

  return (
    <div>
      <nav className="mb-4 text-xs text-textMuted" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/communities/" className="hover:text-secondary">
              Communities
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-semibold text-secondary">{community.name}</li>
        </ol>
      </nav>

      <header className="mb-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-wrap items-start gap-4">
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${community.color}`}
          >
            {community.icon}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
              {community.name}
            </h1>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-textMuted">
              {community.description}
            </p>
            <p className="mt-3 text-xs font-semibold text-textMuted">
              {formatCount(community.members)} members · {community.weeklyPosts}{" "}
              posts / week
            </p>
          </div>
          <CommunityJoinButton communityName={community.name} />
        </div>
      </header>

      <h2 className="mb-3 text-sm font-bold text-secondary">
        Recent discussions
      </h2>

      {posts.length === 0 ? (
        <EmptyState
          title="No discussions yet"
          description="Be the first to start a conversation in this community."
          actionLabel="Create account"
          actionHref={`${frontendAppBaseUrl}/auth/register`}
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
