"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faRoute,
  faShieldHalved,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { frontendAppBaseUrl } from "../../utils/frontendAppBaseUrl";

const STEP_INTERVAL_MS = 4800;

type TrailStep = {
  id: string;
  phase: string;
  title: string;
  context: string;
  visual: "open" | "build" | "review";
};

const trailSteps: TrailStep[] = [
  {
    id: "open",
    phase: "Opening",
    title: "Educator posts the opening fragment",
    context: "Honors U.S. History · Trail underway",
    visual: "open",
  },
  {
    id: "build",
    phase: "Building",
    title: "The class carries the thread forward",
    context: "Sources and counterpoints stack in order",
    visual: "build",
  },
  {
    id: "review",
    phase: "Review",
    title: "AI screen, then human review",
    context: "Quality before a post goes wide",
    visual: "review",
  },
];

function StepVisual({ kind }: { kind: TrailStep["visual"] }) {
  return (
    <div className="flex px-5 py-5 sm:px-8 sm:py-6">
      <div className="flex w-full max-w-xl flex-col justify-center">
        {kind === "open" && (
          <article className="border-l-2 border-highlight pl-4">
            <p className="text-[11px] font-bold uppercase tracking-wide text-highlight-dark">
              Opening fragment · Dr. Chen
            </p>
            <p className="mt-2 text-sm font-semibold leading-snug text-secondary sm:text-base">
              How should we weigh local agency against federal power in the New
              Deal era?
            </p>
            <p className="mt-3 flex items-start gap-2 text-xs font-medium leading-relaxed text-textMuted">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="mt-0.5 h-3 w-3 shrink-0 text-secondary-medium"
              />
              <span>
                Source required · Kennedy,{" "}
                <em>Freedom from Fear</em> (1999), ch. 4
              </span>
            </p>
          </article>
        )}

        {kind === "build" && (
          <ul className="space-y-3" aria-hidden>
            <li className="border-l-2 border-highlight/80 pl-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-textMuted">
                Maya · Counterpoint
              </p>
              <p className="mt-1 text-sm font-medium leading-snug text-secondary">
                Federal programs set floors—states still chose how to staff WPA
                projects.
              </p>
            </li>
            <li className="ml-4 border-l-2 border-secondary-medium/50 pl-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-textMuted">
                Jordan · Evidence
              </p>
              <p className="mt-1 text-sm font-medium leading-snug text-secondary">
                Compare Alabama vs. New York relief rolls, 1935–37.
              </p>
            </li>
            <li className="ml-8 border-l-2 border-slate-300 pl-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-textMuted">
                Sam · Clarification
              </p>
              <p className="mt-1 text-sm font-medium leading-snug text-secondary">
                Agency ≠ autonomy if funding strings dictate outcomes.
              </p>
            </li>
          </ul>
        )}

        {kind === "review" && (
          <article className="space-y-4">
            <div className="border-l-2 border-slate-300 pl-4 opacity-90">
              <p className="text-[11px] font-bold uppercase tracking-wide text-textMuted">
                Pending fragment · Alex
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-secondary">
                Without citing wage boards, claims about “state freedom” overstate
                the case.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-highlight-dark">
                <FontAwesomeIcon icon={faShieldHalved} className="h-3.5 w-3.5" />
                AI integrity clear
              </span>
              <span className="text-slate-300" aria-hidden>
                →
              </span>
              <span className="inline-flex items-center gap-1.5 text-secondary">
                <FontAwesomeIcon icon={faUserCheck} className="h-3.5 w-3.5" />
                Human review queued
              </span>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [step, setStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % trailSteps.length);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    timerRef.current = setInterval(advance, STEP_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance, reducedMotion]);

  const current = trailSteps[step];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-200/70"
    >
      {/* Full-bleed atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_85%_-10%,rgba(13,148,136,0.16),transparent_55%),radial-gradient(ellipse_60%_50%_at_5%_30%,rgba(30,64,175,0.12),transparent_50%),linear-gradient(165deg,#e8eef8_0%,#f5f8fc_42%,#ffffff_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(30,64,175,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <div className="relative frag-container grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24 lg:min-h-[min(82vh,48rem)]">
        {/* Copy — brand first, tight budget */}
        <div className="lg:col-span-5 xl:col-span-5">
          <p className="animate-fade-up text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-[3.25rem] lg:leading-none">
            Fragments
          </p>
          <p className="animate-fade-up mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-highlight-dark">
            by FragmentTrails
          </p>

          <h1 className="animate-fade-up-slow mt-6 max-w-[18ch] text-balance text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-[2.125rem] lg:leading-[1.15]">
            Classroom discussion that stays rigorous
          </h1>

          <p className="animate-fade-up-slow mt-4 max-w-[34rem] text-base font-medium leading-relaxed text-textMuted sm:text-lg">
            AI-moderated fragment trails—evidence, counterpoints, and quality
            review without social-feed chaos.
          </p>

          <div className="animate-fade-up-slow mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`${frontendAppBaseUrl}/auth/register`}
              className="frag-btn-navy inline-flex min-w-[10.5rem] px-6 py-3 text-sm"
            >
              Get started
            </Link>
            <a
              href="#workflow"
              className="frag-btn-secondary inline-flex min-w-[10.5rem] px-6 py-3 text-sm"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Product plane — content-height, edge-bleed, vertically centered */}
        <div className="relative -mx-8 lg:col-span-7 lg:mx-0 xl:col-span-7">
          <div className="relative lg:mr-[calc(-4rem-(100vw-min(100vw,80rem))/2)]">
            <div
              className="flex flex-col overflow-hidden border-y border-slate-200/50 bg-gradient-to-br from-white/80 via-primary/40 to-highlight/10 lg:border-y-0 lg:border-l lg:border-slate-200/40"
              aria-live="polite"
            >
              <div className="flex items-center gap-3 px-5 py-4 sm:px-8 sm:py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-white">
                  <FontAwesomeIcon icon={faRoute} className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-highlight-dark">
                    {current.phase}
                  </p>
                  <p className="truncate text-base font-bold text-secondary sm:text-lg">
                    {current.title}
                  </p>
                  <p className="truncate text-xs font-medium text-textMuted">
                    {current.context}
                  </p>
                </div>
                <div className="hidden items-center gap-1.5 sm:flex" aria-hidden>
                  {trailSteps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === step ? "w-6 bg-highlight" : "w-1.5 bg-slate-300/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                {trailSteps.map((s, i) => (
                  <div
                    key={s.id}
                    className={`transition-opacity duration-500 ease-out motion-reduce:duration-0 ${
                      i === step
                        ? "relative z-10 opacity-100"
                        : "pointer-events-none absolute inset-0 z-0 opacity-0"
                    }`}
                    aria-hidden={i !== step}
                  >
                    <StepVisual kind={s.visual} />
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 pb-4 pt-1 sm:hidden">
                {trailSteps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStep(i)}
                    aria-label={`Show trail step: ${s.phase}`}
                    aria-pressed={step === i}
                    className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${
                      i === step
                        ? "w-8 bg-highlight"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
