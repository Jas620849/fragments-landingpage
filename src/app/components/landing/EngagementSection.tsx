"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faFlagCheckered,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  {
    icon: faFlagCheckered,
    title: "Themed discussion challenges",
    body:
      "Launch focused trails around texts, events, or weekly themes—clear objectives and endpoints, not open-ended scroll.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
  {
    icon: faArrowTrendUp,
    title: "Visible conversation momentum",
    body:
      "See where energy concentrates inside your cohort—not algorithmic trending from unrelated feeds.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faUserPlus,
    title: "Controlled community expansion",
    body:
      "Invite with moderated access so new participants arrive with context and institutional standards intact.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
] as const;

export default function EngagementSection() {
  return (
    <section
      id="engagement"
      className="relative scroll-mt-24 border-b border-slate-200/60 bg-gradient-to-b from-bgLight/80 via-white to-primary/25 py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">Engagement</p>
          <h2 className="frag-title mt-2">
            Structured engagement without social noise
          </h2>
          <p className="frag-lead">
            Challenges, in-cohort momentum, and controlled invites—purposeful
            discussion under institutional oversight.
          </p>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.title} delayMs={i * 80}>
              <article>
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted sm:text-[0.9375rem]">
                  {item.body}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
