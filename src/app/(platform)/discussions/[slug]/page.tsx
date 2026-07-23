import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ThreadView,
  discussionMetadata,
  generateDiscussionStaticParams,
} from "@/app/components/discuss/ThreadView";
import { getDiscussion } from "@/lib/discussions/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return generateDiscussionStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return discussionMetadata(slug, "discussion");
}

export default async function DiscussionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getDiscussion(slug);
  if (!item || item.type !== "discussion") notFound();
  return <ThreadView item={item} kind="discussion" />;
}
