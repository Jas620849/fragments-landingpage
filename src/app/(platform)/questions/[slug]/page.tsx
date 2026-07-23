import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ThreadView,
  discussionMetadata,
  generateQuestionStaticParams,
} from "@/app/components/discuss/ThreadView";
import { getDiscussion } from "@/lib/discussions/data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return generateQuestionStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return discussionMetadata(slug, "question");
}

export default async function QuestionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getDiscussion(slug);
  if (!item || item.type !== "question") notFound();
  return <ThreadView item={item} kind="question" />;
}
