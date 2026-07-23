"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const ours = [
  "Structured trails keep context and argument structure intact",
  "AI + human moderation for integrity and academic tone",
  "Educator recognition tied to discussion quality, not volume",
  "Transparent records for evaluation and admin review",
  "Evidence required on every contribution",
  "Cohort-based rooms that stay on academic norms",
];

const theirs = [
  "Feeds bury thoughtful posts under rapid-fire noise",
  "Manual moderation that does not scale consistently",
  "Teaching judged by activity counts, not learning impact",
  "Hard to show rigor to admins, accreditors, or families",
  "No evidence bar—superficial takes pass as discourse",
  "Open access → overload and context collapse",
];

export default function ComparisonSection() {
  return (
    <section className="border-y border-slate-200/60 bg-gradient-to-b from-white to-primary/35 py-16 sm:py-20 lg:py-24">
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">Why switch</p>
          <h2 className="frag-title mt-2">
            Built for academic discourse—not generic social feed
          </h2>
          <p className="frag-lead">
            Structure, quality control, and evaluation that forums and social
            platforms were never designed to deliver.
          </p>
        </AnimateOnScroll>

        <div className="mx-auto mt-12 grid w-full max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-highlight-dark">
                With Fragments
              </p>
              <ul className="mt-5 space-y-3.5">
                {ours.map((line) => (
                  <li key={line} className="flex gap-3 text-textDark">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight text-white">
                      <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                    </span>
                    <span className="text-sm font-medium leading-snug">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delayMs={100}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Status quo forums
              </p>
              <ul className="mt-5 space-y-3.5">
                {theirs.map((line) => (
                  <li key={line} className="flex gap-3 text-textMuted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                      <FontAwesomeIcon icon={faXmark} className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-snug">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
