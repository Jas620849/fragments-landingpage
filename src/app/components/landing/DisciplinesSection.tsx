"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAtom,
  faBook,
  faCalculator,
  faDollarSign,
  faFlask,
  faGlobe,
  faLanguage,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const disciplines: { icon: IconDefinition; label: string }[] = [
  { icon: faBook, label: "History" },
  { icon: faGlobe, label: "Geography" },
  { icon: faDollarSign, label: "Economics" },
  { icon: faFlask, label: "Chemistry" },
  { icon: faLeaf, label: "Biology" },
  { icon: faAtom, label: "Physics" },
  { icon: faCalculator, label: "Mathematics" },
  { icon: faLanguage, label: "English" },
  { icon: faBook, label: "Other literatures" },
  { icon: faLanguage, label: "Modern languages" },
  { icon: faBook, label: "Religious studies" },
];

export default function DisciplinesSection() {
  return (
    <section
      id="academic"
      className="border-y border-slate-200/60 bg-gradient-to-b from-primary/50 via-white to-primary/40 py-16 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">Subject coverage</p>
          <h2 className="frag-title mt-2">
            One format across disciplines
          </h2>
          <p className="frag-lead">
            Humanities, sciences, math, and professional programs—same trail
            structure, adapted to how each field argues with evidence.
          </p>
        </AnimateOnScroll>

        <ul className="mx-auto mt-10 flex w-full max-w-4xl flex-wrap gap-x-6 gap-y-3 sm:mt-12">
          {disciplines.map((d, i) => (
            <li key={d.label}>
              <AnimateOnScroll delayMs={i * 30} threshold={0.05}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                  <FontAwesomeIcon
                    icon={d.icon}
                    className="h-3.5 w-3.5 text-highlight-dark opacity-90"
                  />
                  {d.label}
                </span>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
