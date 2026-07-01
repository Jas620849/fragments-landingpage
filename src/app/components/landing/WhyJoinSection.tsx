"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faGift,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const pillars = [
  {
    icon: faBookOpenReader,
    title: "Visible learning progression",
    body:
      "Every contribution appears in context within the fragment trail, allowing students to trace how ideas develop from the opening prompt through supporting evidence to final conclusions. This visibility helps learners understand argument structure and see their own growth over time.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faGift,
    title: "Measurable participation quality",
    body:
      "Unlike traditional forums where quantity dominates, FragmentTrails evaluates the substance of each contribution. Students receive recognition for evidence-based arguments, thoughtful responses to peers, and consistent engagement that advances the discussion meaningfully.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
  {
    icon: faMedal,
    title: "Educator impact recognition",
    body:
      "The platform tracks the quality of discussions educators facilitate, highlighting those who consistently guide students toward deeper analysis and evidence-based reasoning. This recognition goes beyond participation counts to measure actual teaching effectiveness through discussion outcomes.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
] as const;

export default function WhyJoinSection() {
  return (
    <section
      id="why-join"
      className="relative scroll-mt-24 border-y border-slate-200/60 bg-gradient-to-b from-white via-primary/30 to-white py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Why join</p>
          <h2 className="frag-title mt-3">
            Visible learning, measurable quality, recognized impact
          </h2>
          <p className="frag-lead mt-4">
            FragmentTrails creates an environment where student contributions remain in context, participation quality gets measured beyond simple counts, and educators receive recognition for the discussions they facilitate effectively.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delayMs={i * 90}>
              <article className="frag-card-interactive flex h-full flex-col p-5 sm:p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.iconBg}`}
                >
                  <FontAwesomeIcon icon={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-secondary sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-textMuted">
                  {p.body}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
