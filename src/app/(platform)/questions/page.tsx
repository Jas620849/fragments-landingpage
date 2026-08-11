import type { Metadata } from "next";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getQuestions } from "@/lib/discussions/data";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Questions - FragmentTrails",
  description: "Ask and answer high-signal questions on scholarship evaluation, interview assessment, and educational technology. Best answers rise to the top.",
  alternates: { canonical: "/questions/" },
};

export default function QuestionsIndexPage() {
  const questions = getQuestions(20);
  const unanswered = questions.filter((q) => !q.hasAcceptedAnswer);
  const answered = questions.filter((q) => q.hasAcceptedAnswer);

  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
          Questions
        </h1>
        <p className="mt-2 text-sm text-textMuted sm:text-base max-w-3xl">
          High-quality answers over engagement farming—best answers rise to the top. Ask questions about scholarship evaluation, interview assessment, and educational technology to get expert insights from the community.
        </p>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-6 border border-purple-100">
        <h2 className="text-lg font-bold text-secondary mb-3">How Q&A Works on FragmentTrails</h2>
        <p className="text-sm text-textMuted mb-3">
          Unlike traditional forums where answers get buried by popularity contests, FragmentTrails uses structured fragment trails to organize Q&A conversations. Each question becomes a focused discussion thread where answers are evaluated based on quality and relevance.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, this means you can ask specific questions about evaluation criteria, interview techniques, or assessment tools and receive detailed, well-structured answers from experts in the field. The fragment trail format makes it easy to follow the reasoning behind each answer.
        </p>
        <p className="text-sm text-textMuted">
          Educators can use the Q&A system to get advice on classroom discussion techniques, assessment strategies, and educational technology implementation. The structured format ensures that answers provide actionable insights rather than vague suggestions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Benefits of Structured Q&A</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Quality-First Ranking:</strong> Best answers rise to the top based on merit, not popularity or engagement metrics.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Structured Responses:</strong> Answers are organized into logical fragments, making complex explanations easy to follow.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Expert Insights:</strong> Connect with scholarship committees, educators, and assessment professionals who share practical knowledge.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Lasting Knowledge:</strong> Q&A threads create valuable reference materials that can be reused for training and onboarding.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Browse Questions</h2>
        <p className="text-sm text-textMuted mb-4">
          Explore these questions from the community on topics ranging from scholarship interview techniques to educational assessment strategies. Each question demonstrates how structured Q&A produces more valuable answers than traditional forums.
        </p>
      </section>

      <FeedTabs active="/questions/" />

      {unanswered.length > 0 ? (
        <section className="mb-6" aria-labelledby="needs-answers">
          <h2
            id="needs-answers"
            className="mb-2 text-xs font-bold uppercase tracking-wider text-accent-dark"
          >
            Needs an answer
          </h2>
          <div className="overflow-hidden rounded-xl border border-accent/25 bg-white shadow-sm">
            {unanswered.map((item) => (
              <DiscussionCard key={item.slug} item={item} emphasize />
            ))}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="with-answers">
        <h2
          id="with-answers"
          className="mb-2 text-xs font-bold uppercase tracking-wider text-textMuted"
        >
          With best answers
        </h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {answered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-textMuted">
              No answered questions yet.
            </p>
          ) : (
            answered.map((item) => (
              <DiscussionCard key={item.slug} item={item} />
            ))
          )}
        </div>
      </section>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Ask Your Question</h2>
        <p className="text-sm text-textMuted mb-4">
          Have a question about scholarship evaluation, interview assessment, or educational technology? Join the community and get expert answers from professionals in the field.
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
