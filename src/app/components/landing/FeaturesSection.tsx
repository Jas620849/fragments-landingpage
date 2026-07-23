"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  faCogs,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faProjectDiagram,
    title: "Structured fragment trails",
    body:
      "Sourced prompts become a visible chain of reasoning—each reply builds on evidence, not a free-for-all thread.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faUsers,
    title: "Collaborative peer learning",
    body:
      "Counterarguments and supporting evidence from classmates—structured so peer talk stays academic, not social.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
  {
    icon: faCogs,
    title: "Two-stage quality moderation",
    body:
      "Automated integrity screening, then human review for tone and standards—quality before a post goes wide.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-24 border-y border-slate-200/60 bg-gradient-to-b from-bgLight via-white to-primary/40 py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">Platform</p>
          <h2 className="frag-title mt-2">
            Tools built for structured academic discourse
          </h2>
          <p className="frag-lead">
            Trails, peer response, and moderation that turn open discussion into
            evidence-based learning.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} delayMs={i * 80}>
              <article>
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.iconBg}`}
                >
                  <FontAwesomeIcon icon={f.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-secondary">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted sm:text-[0.9375rem]">
                  {f.body}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
