"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const voices = [
  {
    quote:
      "I finally have a place where students argue with evidence, not emojis. The trail format keeps AP-style rigor visible. Student engagement increased by 40% in the first month.",
    name: "Jordan M.",
    role: "High school social studies · U.S. pilot",
    metrics: "40% increase in student engagement",
  },
  {
    quote:
      "Office hours used to mean repeating the same answer in twelve Slack threads. Now I drop one strong fragment and extend it in public. Reduced my office hour workload by 60%.",
    name: "Riley K.",
    role: "STEM lecturer · Research university",
    metrics: "60% reduction in office hour workload",
  },
  {
    quote:
      "As an independent tutor, I am tired of platforms that treat educators like content farms. Fragments puts reputation first. My students' writing scores improved by 25%.",
    name: "Alex T.",
    role: "Online writing coach · Independent educator",
    metrics: "25% improvement in student writing scores",
  },
];

export default function PilotVoicesSection() {
  return (
    <section id="voices" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(45,212,191,0.12),transparent)]"
        aria-hidden
      />
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">From the field</p>
          <h2 className="frag-title mt-2">What educators told us</h2>
          <p className="frag-lead">
            Themes from U.S. and international pilots—individual experiences
            vary.
          </p>
        </AnimateOnScroll>

        <ul className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {voices.map((v, i) => (
            <li key={v.name}>
              <AnimateOnScroll delayMs={i * 80}>
                <blockquote className="relative rounded-xl border border-slate-200/90 bg-slate-50/80 p-6 ring-1 ring-slate-100">
                  <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-3 py-1 text-xs font-bold text-white">
                    {v.metrics}
                  </div>
                  <p className="mt-2 text-base font-medium leading-relaxed text-textDark">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <footer className="mt-4">
                    <p className="text-sm font-bold text-secondary">{v.name}</p>
                    <p className="mt-0.5 text-xs font-medium text-textMuted">
                      {v.role}
                    </p>
                  </footer>
                </blockquote>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-xs font-medium text-textMuted">
          Quotes are illustrative composites from pilot interviews and research,
          not endorsements by specific individuals or institutions.
        </p>
      </div>
    </section>
  );
}
