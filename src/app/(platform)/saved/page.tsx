import type { Metadata } from "next";
import { EmptyState } from "@/app/components/discuss/FeedStates";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import { getLatestDiscussions } from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saved - FragmentTrails",
  description: "Save discussions and questions on scholarship evaluation, interview assessment, and educational technology. Build your personal knowledge base.",
  alternates: { canonical: "/saved/" },
};

export default function SavedPage() {
  const starters = getLatestDiscussions(3);

  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-2xl">
          Saved
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-textMuted sm:text-base">
          Bookmark discussions and answers to build your personal knowledge base. Save valuable insights on scholarship evaluation, interview assessment, and educational technology for future reference.
        </p>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border border-indigo-100">
        <h2 className="text-lg font-bold text-secondary mb-3">Build Your Knowledge Base</h2>
        <p className="text-sm text-textMuted mb-3">
          FragmentTrails lets you save discussions and questions that provide valuable insights for your work in scholarship evaluation and educational assessment. Instead of losing track of important information, build a personal knowledge base you can reference anytime.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, save discussions on evaluation criteria, interview techniques, and assessment tools. Create a reference library of best practices and innovative approaches that you can consult when developing or refining your evaluation processes.
        </p>
        <p className="text-sm text-textMuted">
          Educators can save valuable classroom discourse examples, assessment strategies, and educational technology insights. Build a collection of teaching methods and engagement techniques that have proven effective in similar educational contexts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Benefits of Saving</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Quick Access:</strong> Find saved content instantly without searching through hundreds of discussions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Knowledge Retention:</strong> Build a personal library of insights that grows with your experience and learning.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Team Sharing:</strong> Share saved discussions with committee members or colleagues to align on best practices.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Training Material:</strong> Use saved discussions as training resources for new committee members or educators.</span>
          </li>
        </ul>
      </section>

      <EmptyState
        title="No saved items yet"
        description="Open a discussion and tap Save. Sign in to sync bookmarks across devices. Start building your knowledge base by saving valuable insights on scholarship evaluation and educational assessment."
        actionLabel="Browse discussions"
        actionHref="/explore/"
      />

      <p className="mt-4 text-center text-xs text-textMuted">
        Already have an account?{" "}
        <a
          href={`${frontendAppBaseUrl}/auth/login`}
          className="font-bold text-highlight-dark hover:underline"
        >
          Sign in
        </a>
      </p>

      <section className="mt-8" aria-labelledby="saved-starters">
        <div className="mb-2 flex items-baseline justify-between gap-2">
          <h2
            id="saved-starters"
            className="text-xs font-bold uppercase tracking-wider text-textMuted"
          >
            Worth saving
          </h2>
          <Link
            href="/trending/"
            className="text-xs font-bold text-highlight-dark hover:text-secondary"
          >
            See trending →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {starters.map((item) => (
            <DiscussionCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Start Saving Valuable Content</h2>
        <p className="text-sm text-textMuted mb-4">
          Join FragmentTrails to save discussions, build your knowledge base, and create a personal library of insights on scholarship evaluation and educational assessment.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-dark"
          >
            Start Free Trial
          </Link>
          <Link
            href="/explore/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50"
          >
            Browse Discussions
          </Link>
        </div>
      </section>
    </div>
  );
}
