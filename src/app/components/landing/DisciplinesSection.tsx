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

const chipClass =
  "inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-4 py-2.5 text-sm font-bold text-secondary shadow-sm ring-1 ring-border-light transition hover:-translate-y-0.5 hover:border-highlight/40 hover:shadow-md";

export default function DisciplinesSection() {
  return (
    <section
      id="academic"
      className="border-y border-slate-200/60 bg-gradient-to-b from-primary/50 via-white to-primary/40 py-16 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Subject coverage</p>
          <h2 className="frag-title mt-3">
            Adaptable across academic disciplines and use cases
          </h2>
          <p className="frag-lead mt-4">
            FragmentTrails supports evidence-based discussions across humanities, sciences, mathematics, and professional programs. The structured trail format works whether analyzing historical documents, solving mathematical proofs, conducting scientific debates, or evaluating literary texts. In humanities disciplines, fragment trails support analysis of primary sources, literary interpretation, historical argumentation, and philosophical inquiry. Students learn to construct evidence-based arguments about texts, events, and ideas while engaging with scholarly sources and methodological frameworks. In sciences, the platform facilitates discussion of experimental design, data interpretation, theoretical debates, and scientific reasoning. Students can debate competing hypotheses, analyze experimental results, and engage in peer review of scientific claims. Mathematics discussions focus on proof construction, problem-solving approaches, conceptual understanding, and mathematical communication. The structured format helps students articulate their reasoning clearly and build upon each other's insights. Professional programs use fragment trails for case study analysis, ethical reasoning, professional practice discussions, and applied problem-solving. This cross-disciplinary flexibility makes FragmentTrails valuable for institutions seeking consistent discussion and evaluation tools across diverse academic programs.
          </p>
        </AnimateOnScroll>

        <ul className="mx-auto mt-14 flex w-full max-w-6xl flex-wrap justify-center gap-3 sm:gap-4">
          {disciplines.map((d, i) => (
            <li key={d.label}>
              <AnimateOnScroll delayMs={i * 45} threshold={0.05}>
                <span className={chipClass}>
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
