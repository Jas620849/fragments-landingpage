import type { Metadata } from "next";
import Link from "next/link";
import {
  COMMUNITIES,
  formatCount,
} from "@/lib/discussions/data";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import { PLATFORM_DEMO_ROBOTS } from "@/lib/seo-constants";

export const metadata: Metadata = {
  title: "Communities",
  description:
    "Browse FragmentTrails communities—classroom discourse, scholarship evaluation, rubrics, and more.",
  robots: PLATFORM_DEMO_ROBOTS,
  alternates: { canonical: "/communities/" },
};

export default function CommunitiesPage() {
  return (
    <div>
      <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-highlight-dark">
            Destinations
          </p>
          <h1 className="mt-1 text-xl font-bold tracking-tight text-secondary sm:text-2xl">
            Communities
          </h1>
          <p className="mt-1 max-w-xl text-sm text-textMuted">
            Join focused spaces where discussions become lasting knowledge.
          </p>
        </div>
        <Link
          href={`${frontendAppBaseUrl}/auth/register`}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-secondary transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
        >
          Suggest a community
        </Link>
      </header>

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
    </div>
  );
}
