"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const voices = [
  {
    quote:
      "I finally have a place where students argue with evidence, not emojis. The trail format keeps AP-style rigor visible.",
    name: "Jordan M.",
    role: "High school social studies · U.S. pilot",
  },
  {
    quote:
      "Office hours used to mean repeating the same answer in twelve Slack threads. Now I drop one strong fragment and extend it in public.",
    name: "Riley K.",
    role: "STEM lecturer · Research university",
  },
  {
    quote:
      "As an independent tutor, I am tired of platforms that treat educators like content farms. Fragments puts reputation first.",
    name: "Alex T.",
    role: "Online writing coach · Independent educator",
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
                <blockquote>
                  <p className="text-base font-medium leading-relaxed text-textDark">
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
