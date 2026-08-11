import type { Metadata } from "next";
import Link from "next/link";
import {
  COMMUNITIES,
  formatCount,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

export const metadata: Metadata = {
  title: "Communities - FragmentTrails",
  description: "Browse FragmentTrails communities on scholarship evaluation, interview assessment, classroom discourse, and educational technology. Join focused spaces for structured discussions.",
  alternates: { canonical: "/communities/" },
};

export default function CommunitiesPage() {
  return (
    <div>
      <header className="mb-6 sm:mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-highlight-dark">
            Destinations
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
            Communities
          </h1>
          <p className="mt-2 max-w-xl text-sm text-textMuted sm:text-base">
            Join focused spaces where discussions become lasting knowledge. Connect with scholarship committees, educators, and assessment professionals in communities dedicated to specific topics.
          </p>
        </div>
        <Link
          href={`${frontendAppBaseUrl}/auth/register`}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-secondary transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
        >
          Suggest a community
        </Link>
      </header>

      <section className="mb-8 rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 p-6 border border-emerald-100">
        <h2 className="text-lg font-bold text-secondary mb-3">Why Join Communities?</h2>
        <p className="text-sm text-textMuted mb-3">
          FragmentTrails communities bring together professionals with shared interests in scholarship evaluation, educational assessment, and classroom discourse. Each community focuses on a specific topic, ensuring discussions remain relevant and valuable.
        </p>
        <p className="text-sm text-textMuted mb-3">
          For scholarship committees, join communities focused on evaluation criteria, interview techniques, and assessment tools. Share best practices with other committees, learn from their experiences, and stay informed about innovative approaches in the field.
        </p>
        <p className="text-sm text-textMuted">
          Educators can join communities dedicated to classroom discourse, assessment strategies, and educational technology. Connect with peers in similar educational contexts, exchange teaching methods, and discover new engagement techniques.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Community Benefits</h2>
        <ul className="space-y-2 text-sm text-textMuted">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Focused Discussions:</strong> Each community centers on a specific topic, ensuring conversations remain relevant and valuable.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Expert Connections:</strong> Connect with professionals who have deep expertise in your areas of interest.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Best Practice Sharing:</strong> Learn from the experiences of others and share your own insights with the community.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold">•</span>
            <span><strong>Problem Solving:</strong> Get help with specific challenges from community members who have faced similar situations.</span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-bold text-secondary mb-3">Browse Communities</h2>
        <p className="text-sm text-textMuted mb-4">
          Explore these communities focused on scholarship evaluation, interview assessment, classroom discourse, and educational technology. Join the ones that align with your professional interests and goals.
        </p>
      </section>

      <ul className="grid gap-3 sm:grid-cols-2">
        {COMMUNITIES.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/communities/${c.slug}/`}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-highlight/35 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white ${c.color}`}
                >
                  {c.icon}
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-bold text-secondary">{c.name}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-textMuted sm:text-sm">
                    {c.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-semibold text-textMuted">
                <span>{formatCount(c.members)} members</span>
                <span>{c.weeklyPosts} posts / week</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-8 rounded-lg bg-slate-50 p-6 border border-slate-200">
        <h2 className="text-lg font-bold text-secondary mb-3">Join the Conversation</h2>
        <p className="text-sm text-textMuted mb-4">
          Ready to connect with professionals in your field? Join FragmentTrails communities to participate in structured discussions, share your expertise, and learn from others in scholarship evaluation and educational assessment.
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
