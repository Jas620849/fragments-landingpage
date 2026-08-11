import type { Metadata } from "next";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getLatestDiscussions } from "@/lib/discussions/data";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Discussions - FragmentTrails",
  description: "Browse structured discussions on scholarship evaluation, interview assessment, and educational technology. Join conversations that become lasting knowledge.",
  alternates: { canonical: "/discussions/" },
};

export default function DiscussionsIndexPage() {
  const feed = getLatestDiscussions(20).filter((d) => d.type === "discussion");

  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
          Discussions
        </h1>
        <p className="mt-2 text-sm text-textMuted sm:text-base max-w-3xl">
          Share knowledge and opinions—without the noise of engagement farming. Our structured discussion platform helps scholarship committees, educators, and students have meaningful conversations that produce lasting value.
        </p>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6 border border-green-100">
        <h2 className="text-lg font-bold text-secondary mb-3">Why Structured Discussions Matter</h2>
        <p className="text-sm text-textMuted mb-3">
          Traditional forums and social media platforms prioritize engagement over quality. FragmentTrails takes a different approach by structuring conversations into logical fragments that preserve context and make it easy to follow complex discussions.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, structured discussions provide a transparent record of interview evaluations and decision-making processes. Each fragment represents a focused topic, creating an audit trail that ensures fairness and reduces bias.
        </p>
        <p className="text-sm text-textMuted">
          In educational settings, structured discussions help students develop critical thinking skills by building on each other's ideas systematically. Instead of scattered comments, students engage in coherent conversations that deepen understanding and create lasting knowledge.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Key Features</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Fragment Trails:</strong> Conversations are organized into logical segments, making it easy to follow complex debates and reference specific points.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>AI Moderation:</strong> Intelligent systems help maintain discussion quality by flagging off-topic content and highlighting valuable contributions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Transparent Evaluation:</strong> Every discussion is documented with clear context, perfect for scholarship committee reviews and educational assessments.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Knowledge Preservation:</strong> Discussions create lasting records that can be referenced for training, research, and continuous improvement.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Browse Active Discussions</h2>
        <p className="text-sm text-textMuted mb-4">
          Explore these ongoing conversations on scholarship evaluation, interview assessment, and educational technology. Each discussion demonstrates how structured fragment trails produce more valuable outcomes than traditional forums.
        </p>
      </section>

      <FeedTabs active="/discussions/" />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {feed.map((item) => (
          <DiscussionCard key={item.slug} item={item} />
        ))}
      </div>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Start Your Own Discussion</h2>
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
