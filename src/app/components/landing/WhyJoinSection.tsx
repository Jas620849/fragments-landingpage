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
      "Every contribution stays in context on the trail—students see how ideas build from prompt to evidence to conclusion.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faGift,
    title: "Measurable participation quality",
    body:
      "Recognition for substance: evidence, clarity, and replies that move the discussion—not raw post counts.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
  {
    icon: faMedal,
    title: "Educator impact recognition",
    body:
      "Highlight facilitators who consistently raise the room—deeper analysis, stronger evidence, better discourse.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
] as const;

export default function WhyJoinSection() {
  return (
    <section
      id="why-join"
      className="relative scroll-mt-24 border-b border-slate-200/60 bg-white py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">Why join</p>
          <h2 className="frag-title mt-2">
            Visible learning, measurable quality, recognized impact
          </h2>
          <p className="frag-lead">
            Context stays intact, quality is scored beyond volume, and educators
            who guide serious discussion get credit.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delayMs={i * 80}>
              <article>
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${p.iconBg}`}
                >
                  <FontAwesomeIcon icon={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-secondary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted sm:text-[0.9375rem]">
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
