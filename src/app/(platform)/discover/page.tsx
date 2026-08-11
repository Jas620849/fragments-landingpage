import type { Metadata } from "next";
import { Suspense } from "react";
import DiscoverClient from "@/app/components/discuss/DiscoverClient";
import { FeedSkeleton } from "@/app/components/discuss/FeedStates";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Discover - FragmentTrails",
  description: "Discover communities, topics, questions, and discussions on scholarship evaluation, interview assessment, and educational technology.",
  alternates: { canonical: "/discover/" },
};

export default function DiscoverPage() {
  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
          Discover
        </h1>
        <p className="mt-2 text-sm text-textMuted sm:text-base max-w-3xl">
          Discover communities, topics, questions, and discussions on scholarship evaluation, interview assessment, and educational technology. Find relevant content that matches your interests and professional needs.
        </p>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 p-6 border border-orange-100">
        <h2 className="text-lg font-bold text-secondary mb-3">Explore the FragmentTrails Ecosystem</h2>
        <p className="text-sm text-textMuted mb-3">
          FragmentTrails brings together scholarship committees, educators, and assessment professionals in a unified platform for structured discourse. The discover feature helps you find communities and discussions relevant to your specific interests and professional goals.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, discover communities focused on evaluation criteria, interview techniques, and assessment tools. Connect with other committees to share best practices and learn from their experiences with different scholarship programs.
        </p>
        <p className="text-sm text-textMuted">
          Educators can explore communities dedicated to classroom discourse, assessment strategies, and educational technology. Find discussions on teaching methods, student engagement techniques, and curriculum development that align with your educational goals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">What You Can Discover</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Communities:</strong> Join focused groups on scholarship evaluation, interview assessment, classroom discourse, and educational technology.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Topics:</strong> Browse trending topics and find discussions on specific subjects like bias reduction, rubric development, and AI moderation.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Questions:</strong> Find Q&A threads where experts share insights on scholarship evaluation challenges and educational assessment strategies.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Discussions:</strong> Explore structured fragment trails on complex topics that require detailed analysis and collaborative problem-solving.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Start Exploring</h2>
        <p className="text-sm text-textMuted mb-4">
          Use the discovery tools below to find content that matches your interests. Filter by community, topic, or content type to quickly locate the most relevant discussions and questions for your needs.
        </p>
      </section>

      <Suspense fallback={<FeedSkeleton rows={5} />}>
        <DiscoverClient />
      </Suspense>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Join the Community</h2>
        <p className="text-sm text-textMuted mb-4">
          Ready to start exploring and contributing? Join FragmentTrails to discover communities, ask questions, and participate in structured discussions that produce lasting value for scholarship committees and educators.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-dark"
          >
            Start Free Trial
          </Link>
          <Link
            href="/communities/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50"
          >
            Browse Communities
          </Link>
        </div>
      </section>
    </div>
  );
}
