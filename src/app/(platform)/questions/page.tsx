import type { Metadata } from "next";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getQuestions } from "@/lib/discussions/data";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Questions",
  description:
    "Ask and answer high-signal questions on FragmentTrails—knowledge that lasts beyond the thread.",
  robots: PLATFORM_DEMO_ROBOTS,
  alternates: { canonical: "/questions/" },
};

export default function QuestionsIndexPage() {
  const questions = getQuestions(20);
  const unanswered = questions.filter((q) => !q.hasAcceptedAnswer);
  const answered = questions.filter((q) => q.hasAcceptedAnswer);

  return (
    <div>
      <header className="mb-3 sm:mb-4">
        <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
          Questions
        </h1>
        <p className="mt-0.5 text-sm text-textMuted">
          High-quality answers over engagement farming—best answers rise to the
          top.
        </p>
      </header>

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
    </div>
  );
}
