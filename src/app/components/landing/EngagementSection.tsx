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
      "Educators launch focused discussion trails around specific texts, current events, or weekly themes. These structured challenges give cohorts clear objectives and defined endpoints, making participation purposeful rather than open-ended.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
  {
    icon: faArrowTrendUp,
    title: "Visible conversation momentum",
    body:
      "Replies appear sequentially within each fragment trail, allowing participants to see where discussion energy is concentrated within their specific cohort. This visibility helps identify engaging topics without relying on external algorithmic trending from unrelated content.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faUserPlus,
    title: "Controlled community expansion",
    body:
      "Institutional administrators manage cohort invitations through controlled access links, ensuring that new participants join with appropriate context and moderation oversight. This approach supports growth while maintaining discussion quality and institutional standards.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
] as const;

export default function EngagementSection() {
  return (
    <section
      id="engagement"
      className="relative scroll-mt-24 border-b border-slate-200/60 bg-gradient-to-b from-bgLight/80 via-white to-primary/25 py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Engagement</p>
          <h2 className="frag-title mt-3">
            Engagement features that maintain academic focus
          </h2>
          <p className="frag-lead mt-4">
            FragmentTrails provides structured engagement tools that keep discussions purposeful, visible within cohorts, and under institutional control—avoiding the distraction and unpredictability of open social platforms.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.title} delayMs={i * 100}>
              <article className="frag-card-interactive flex h-full flex-col p-5 sm:p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-secondary sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-textMuted">
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
