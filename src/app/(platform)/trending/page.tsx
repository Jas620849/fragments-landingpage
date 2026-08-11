import type { Metadata } from "next";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getTrendingDiscussions } from "@/lib/discussions/data";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Trending - FragmentTrails",
  description: "Trending discussions and questions on scholarship evaluation, interview assessment, and educational technology. High-signal conversations ranked by helpfulness.",
  alternates: { canonical: "/trending/" },
};

export default function TrendingPage() {
  const feed = getTrendingDiscussions(12);

  return (
    <div>
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
          Trending
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-textMuted sm:text-base">
          High-signal conversations ranked by helpfulness—not noise. Discover the most valuable discussions on scholarship evaluation, interview assessment, and educational technology that the community finds most useful.
        </p>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 p-6 border border-red-100">
        <h2 className="text-lg font-bold text-secondary mb-3">How Trending Works</h2>
        <p className="text-sm text-textMuted mb-3">
          Unlike social media platforms that prioritize engagement metrics like likes and shares, FragmentTrails ranks trending content based on helpfulness and quality. Discussions rise to the top when community members find them valuable for their work in scholarship evaluation and educational assessment.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, trending discussions highlight the most pressing challenges and innovative solutions in the field. See what other committees are discussing about evaluation criteria, interview techniques, and assessment tools to inform your own processes.
        </p>
        <p className="text-sm text-textMuted">
          Educators can discover trending topics in classroom discourse, assessment strategies, and educational technology. Find out what teaching methods and engagement techniques are proving most effective in similar educational contexts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Quality Over Engagement</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Helpfulness Ranking:</strong> Content rises based on how useful it is to the community, not how many clicks it gets.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Expert Validation:</strong> Contributions from scholarship committees and educators carry more weight in trending calculations.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Relevance Scoring:</strong> Discussions are ranked based on their relevance to scholarship evaluation and educational assessment.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Time-Weighted:</strong> Recent valuable content gets priority, ensuring trending discussions remain current and actionable.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Trending Now</h2>
        <p className="text-sm text-textMuted mb-4">
          Explore these high-value discussions that the community has found most helpful. Each trending thread represents a topic that scholarship committees and educators are actively engaging with and finding valuable for their work.
        </p>
      </section>

      <FeedTabs active="/trending/" />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {feed.map((item) => (
          <DiscussionCard key={item.slug} item={item} emphasize />
        ))}
      </div>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Contribute to Trending Discussions</h2>
        <p className="text-sm text-textMuted mb-4">
          Share your insights on scholarship evaluation, interview assessment, and educational technology. High-quality contributions help the entire community and can rise to the trending list when others find them valuable.
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
            Explore Discussions
          </Link>
        </div>
      </section>
    </div>
  );
}
