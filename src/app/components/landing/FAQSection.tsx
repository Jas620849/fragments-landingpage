"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "What is a fragment trail?",
    answer: "A fragment trail is a structured discussion format where an educator posts a sourced opening fragment with a specific question. Students then extend the trail by contributing evidence-based responses that appear sequentially, creating a visible chain of reasoning from the initial prompt through supporting evidence to conclusions.",
  },
  {
    question: "How does the moderation system work?",
    answer: "FragmentTrails uses a two-stage moderation process. First, automated systems screen each contribution for plagiarism detection and baseline quality standards. Then, human reviewers assess tone, depth, and academic alignment before content is published. This ensures all discussions meet both technical and qualitative requirements.",
  },
  {
    question: "Can FragmentTrails be used for scholarship interviews?",
    answer: "Yes, FragmentTrails is specifically designed for scholarship committees to conduct structured, fair interviews. The platform provides AI-powered scoring, bias reduction tools, and standardized evaluation frameworks that create defensible evaluation records suitable for administrative review.",
  },
  {
    question: "What subjects and disciplines does FragmentTrails support?",
    answer: "The platform adapts to evidence-based discussions across humanities, sciences, mathematics, and professional programs. Whether analyzing historical documents, solving mathematical proofs, conducting scientific debates, or evaluating literary texts, the structured trail format maintains academic rigor regardless of subject matter.",
  },
  {
    question: "How is student participation evaluated?",
    answer: "FragmentTrails evaluates participation quality rather than quantity. The system tracks evidence-based arguments, thoughtful responses to peers, and consistent engagement that advances discussion meaningfully. Educators receive detailed records suitable for rubrics, honors reviews, and scholarship evaluations.",
  },
  {
    question: "Is FragmentTrails suitable for large institutions?",
    answer: "FragmentTrails scales from single classroom discussions to entire programs across multiple departments. The platform provides administrative controls for cohort management, consistent evaluation standards, and audit trails that work whether evaluating 10 candidates or managing 10,000 students.",
  },
  {
    question: "What makes FragmentTrails different from discussion forums?",
    answer: "Unlike traditional forums where contributions get buried in endless feeds, FragmentTrails maintains discussion context through structured trails. The platform combines quality moderation, evidence requirements, and evaluation capabilities that generic social platforms cannot provide for academic purposes.",
  },
  {
    question: "How do educators get recognized on the platform?",
    answer: "FragmentTrails identifies educators who consistently elevate discussion quality and guide students toward rigorous academic discourse. Recognition is based on teaching impact and learning outcomes rather than simple participation metrics, highlighting effective facilitation of meaningful discussions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-y border-slate-200/60 bg-gradient-to-b from-white via-primary/20 to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">FAQ</p>
          <h2 className="frag-title mt-3">
            Frequently asked questions about FragmentTrails
          </h2>
          <p className="frag-lead mt-4">
            Common questions about how the platform works, who it serves, and how it differs from traditional discussion tools.
          </p>
        </AnimateOnScroll>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <AnimateOnScroll key={faq.question} delayMs={index * 60}>
              <article className="frag-card-interactive overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 p-5 ring-1 ring-slate-100/90 sm:p-6">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base font-semibold leading-snug text-secondary sm:text-lg">
                    {faq.question}
                  </h3>
                  <span className="mt-1 shrink-0 text-highlight-dark">
                    <FontAwesomeIcon
                      icon={openIndex === index ? faChevronUp : faChevronDown}
                      className="h-4 w-4"
                    />
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4 pt-4 text-sm font-medium leading-relaxed text-textMuted sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
