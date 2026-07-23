"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "What is a fragment trail?",
    answer:
      "An educator posts a sourced opening fragment with a question. Students extend it with evidence-based replies in sequence—a visible chain of reasoning, not a chronological free-for-all.",
  },
  {
    question: "How does the moderation system work?",
    answer:
      "Automated screening catches plagiarism and baseline quality issues first. Human reviewers then check tone, depth, and academic fit before anything publishes.",
  },
  {
    question: "Can FragmentTrails be used for scholarship interviews?",
    answer:
      "Yes. Structured prompts, consistent criteria, and defensible records support fair asynchronous evaluation for committees.",
  },
  {
    question: "What subjects does FragmentTrails support?",
    answer:
      "Humanities, sciences, mathematics, and professional programs. The trail format adapts; the evidence bar stays the same.",
  },
  {
    question: "How is student participation evaluated?",
    answer:
      "By quality—evidence, peer response, and whether a post advances the thread—not by raw post counts. Educators get records fit for rubrics and reviews.",
  },
  {
    question: "Is it suitable for large institutions?",
    answer:
      "Yes. Cohort controls, consistent standards, and audit trails scale from a single classroom to multi-department programs.",
  },
  {
    question: "How is this different from discussion forums?",
    answer:
      "Trails preserve argument structure, require evidence, moderate for quality, and support academic evaluation—things generic forums were not built for.",
  },
  {
    question: "How do educators get recognized?",
    answer:
      "Recognition tracks facilitation that raises discussion quality and learning outcomes—not activity metrics alone.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-y border-slate-200/60 bg-gradient-to-b from-white via-primary/20 to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">FAQ</p>
          <h2 className="frag-title mt-2">Questions, answered</h2>
          <p className="frag-lead">
            Short answers on trails, moderation, evaluation, and scale.
          </p>
        </AnimateOnScroll>

        <ul className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200/80 border-y border-slate-200/80">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <li key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left transition hover:text-highlight-dark"
                >
                  <span className="text-base font-bold text-secondary">
                    {faq.question}
                  </span>
                  <FontAwesomeIcon
                    icon={open ? faChevronUp : faChevronDown}
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-textMuted"
                  />
                </button>
                {open ? (
                  <p className="pb-5 pr-8 text-sm font-medium leading-relaxed text-textMuted sm:text-[0.9375rem]">
                    {faq.answer}
                  </p>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
