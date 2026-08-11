import type { Metadata } from "next";
import Link from "next/link";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import DiscoveryRail from "@/app/components/discuss/DiscoveryRail";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getLatestDiscussions } from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Explore Discussions - FragmentTrails",
  description: "Explore structured discussions on scholarship evaluation, interview rubrics, and educational assessment. Discover how fragment trails transform classroom discourse.",
  alternates: { canonical: "/explore/" },
};

export default function ExplorePage() {
  const feed = getLatestDiscussions(12);

  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
              Explore Discussions
            </h1>
            <p className="mt-2 text-sm text-textMuted sm:text-base">
              Discover structured fragment trails on scholarship evaluation, interview rubrics, and educational assessment. See how AI-moderated discussions transform classroom discourse.
            </p>
          </div>
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50 sm:inline-flex"
          >
            Create free account
          </Link>
        </div>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6 border border-blue-100">
        <h2 className="text-lg font-bold text-secondary mb-3">What Are Fragment Trails?</h2>
        <p className="text-sm text-textMuted mb-3">
          Fragment trails are structured conversation threads that organize discussions into logical segments. Unlike traditional forums where responses get buried, fragment trails preserve the context of each contribution, making it easier to follow complex debates and extract valuable insights.
        </p>
        <p className="text-sm text-textMuted mb-3">
          In scholarship evaluation, fragment trails help committees track interview discussions, document decision criteria, and maintain transparent evaluation processes. Each fragment represents a focused topic or question, creating a clear audit trail for every decision.
        </p>
        <p className="text-sm text-textMuted">
          For classroom discourse, fragment trails encourage students to build on each other's ideas systematically. Instead of scattered comments, students engage in structured conversations that develop critical thinking skills and produce lasting knowledge.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Benefits of Structured Discussions</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Transparent Evaluation:</strong> Every interview discussion is documented with clear context, reducing bias and improving fairness in scholarship decisions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Improved Learning:</strong> Students engage in focused discussions that build understanding systematically, leading to better retention and deeper comprehension.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>AI Moderation:</strong> Intelligent systems help maintain discussion quality by flagging off-topic content and highlighting valuable contributions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Knowledge Preservation:</strong> Fragment trails create lasting records of discussions that can be referenced later for training, research, or continuous improvement.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Sample Discussion Threads</h2>
        <p className="text-sm text-textMuted mb-4">
          Browse these sample threads to see how fragment trails organize complex conversations into clear, navigable segments. Each thread demonstrates structured discourse on topics relevant to scholarship evaluation and educational assessment.
        </p>
      </section>

      <FeedTabs active="/explore/" />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {feed.map((item) => (
          <DiscussionCard
            key={item.slug}
            item={item}
            emphasize={item.isTrending}
          />
        ))}
      </div>

      <div className="mt-6 xl:hidden">
        <DiscoveryRail />
      </div>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Ready to Start Your Own Discussions?</h2>
        <p className="text-sm text-textMuted mb-4">
          Join thousands of educators and scholarship committees using FragmentTrails to transform their evaluation processes and classroom discourse. Create structured conversations that produce lasting value.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-dark"
          >
            Start Free Trial
          </Link>
          <Link
            href="/how-it-works/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50"
          >
            Learn How It Works
          </Link>
        </div>
      </section>
    </div>
  );
}
