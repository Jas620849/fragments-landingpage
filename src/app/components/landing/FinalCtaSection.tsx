"use client";

import Link from "next/link";
import { frontendAppBaseUrl } from "../../utils/frontendAppBaseUrl";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FinalCtaSection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-slate-900"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_25%_25%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_85%_55%,rgba(251,146,60,0.15),transparent_40%)]"
        aria-hidden
      />
      <AnimateOnScroll className="relative frag-container">
        <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Bring Fragments to your learners this term
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-primary/95">
          Free account in minutes. Invite your cohort, launch a trail—no sales
          call required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="frag-btn-primary inline-flex min-w-[10rem] px-6 py-3 text-sm shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
          >
            Create free account
          </Link>
          <Link
            href={`${frontendAppBaseUrl}/auth/login`}
            className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-highlight-light/50 hover:bg-white/15 sm:min-w-[11rem]"
          >
            I already have access
          </Link>
        </div>
        <p className="mt-6 text-xs font-medium text-primary/70">
          Need a district-wide rollout or custom terms?{" "}
          <Link href="/contact/" className="text-highlight-light underline-offset-2 hover:underline">
            Talk to our team
          </Link>
          .
        </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
