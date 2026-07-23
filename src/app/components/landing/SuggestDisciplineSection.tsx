"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function SuggestDisciplineSection() {
  const [value, setValue] = useState("");

  return (
    <section
      id="suggest-discipline"
      className="border-t border-slate-200/60 bg-gradient-to-b from-primary/40 via-white to-bgAlt/60 py-16 sm:py-20"
    >
      <div className="frag-container">
        <div className="mx-auto max-w-xl">
          <AnimateOnScroll>
            <p className="frag-eyebrow">Roadmap</p>
            <h2 className="frag-title mt-2">Request a subject pathway</h2>
            <p className="frag-lead">
              Tell us the discipline or standards alignment you need—we
              prioritize from real classroom demand.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-8" delayMs={80}>
            <label htmlFor="discipline-input" className="sr-only">
              Discipline name
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="discipline-input"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="e.g., AP Environmental Science"
                className="frag-input flex-1 text-base font-medium"
              />
              <button
                type="button"
                className="frag-btn-primary shrink-0 px-6 py-3"
                aria-label="Send discipline suggestion request"
              >
                Send request
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
