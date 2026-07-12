"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "What is a fragment trail?",
    answer: "A fragment trail is a structured discussion format where an educator posts a sourced opening fragment with a specific question. Students then extend the trail by contributing evidence-based responses that appear sequentially, creating a visible chain of reasoning from the initial prompt through supporting evidence to conclusions. Unlike traditional discussion forums where responses appear chronologically without structural relationship, fragment trails maintain the logical connections between contributions. Each response must build upon previous work, creating a coherent narrative of collective reasoning. This structure helps students understand how arguments develop, how evidence supports claims, and how academic discourse progresses from initial questions to well-supported conclusions. The visual representation of the trail makes the argument structure explicit, supporting metacognitive awareness and helping students develop stronger analytical skills.",
  },
  {
    question: "How does the moderation system work?",
    answer: "FragmentTrails uses a two-stage moderation process. First, automated systems screen each contribution for plagiarism detection and baseline quality standards. Then, human reviewers assess tone, depth, and academic alignment before content is published. This ensures all discussions meet both technical and qualitative requirements. The automated stage employs machine learning models trained on academic writing to detect potential plagiarism, verify citation accuracy, and assess writing mechanics including grammar, clarity, and coherence. This initial screening filters out submissions that fail to meet minimum standards, allowing human reviewers to focus on qualitative assessment rather than mechanical corrections. The human review stage evaluates content for academic tone, appropriate level of complexity, alignment with discussion objectives, and adherence to institutional discourse norms. Reviewers can provide specific feedback for improvement or approve content for publication, creating learning opportunities while maintaining quality standards.",
  },
  {
    question: "Can FragmentTrails be used for scholarship interviews?",
    answer: "Yes, FragmentTrails is specifically designed for scholarship committees to conduct structured, fair interviews. The platform provides AI-powered scoring, bias reduction tools, and standardized evaluation frameworks that create defensible evaluation records suitable for administrative review. Scholarship committees can use FragmentTrails to conduct asynchronous interviews where candidates respond to structured prompts, enabling evaluation without scheduling conflicts. The platform's bias detection algorithms identify scoring patterns that may indicate demographic bias or evaluator inconsistency, allowing committees to address potential fairness issues before finalizing decisions. The structured evaluation framework ensures all candidates are assessed against consistent criteria, while the comprehensive audit trail provides documentation for donor reporting, compliance reviews, and responding to appeals. This combination of structure, bias mitigation, and documentation makes FragmentTrails particularly valuable for scholarship selection processes requiring defensible, fair outcomes.",
  },
  {
    question: "What subjects and disciplines does FragmentTrails support?",
    answer: "The platform adapts to evidence-based discussions across humanities, sciences, mathematics, and professional programs. Whether analyzing historical documents, solving mathematical proofs, conducting scientific debates, or evaluating literary texts, the structured trail format maintains academic rigor regardless of subject matter. In humanities disciplines, fragment trails support analysis of primary sources, literary interpretation, and historical argumentation. In sciences, the platform facilitates discussion of experimental design, data interpretation, and theoretical debates. Mathematics discussions can focus on proof construction, problem-solving approaches, and conceptual understanding. Professional programs can use fragment trails for case study analysis, ethical reasoning, and professional practice discussions. The flexibility of the fragment trail structure allows educators to adapt the format to discipline-specific requirements while maintaining the core principles of evidence-based reasoning and structured academic discourse.",
  },
  {
    question: "How is student participation evaluated?",
    answer: "FragmentTrails evaluates participation quality rather than quantity. The system tracks evidence-based arguments, thoughtful responses to peers, and consistent engagement that advances discussion meaningfully. Educators receive detailed records suitable for rubrics, honors reviews, and scholarship evaluations. The quality assessment framework evaluates contributions across multiple dimensions: relevance to the discussion thread, use of supporting evidence, clarity of argumentation, responsiveness to peer contributions, and adherence to academic discourse norms. This multi-dimensional assessment provides meaningful feedback on discussion quality beyond simple participation counts. Educators can track individual student progress over time, identify areas where additional support may be needed, and provide targeted guidance for improving argumentation skills. The evaluation records include specific examples of student contributions, making them suitable for comprehensive assessments, honors program reviews, and scholarship applications that require evidence of academic engagement.",
  },
  {
    question: "Is FragmentTrails suitable for large institutions?",
    answer: "FragmentTrails scales from single classroom discussions to entire programs across multiple departments. The platform provides administrative controls for cohort management, consistent evaluation standards, and audit trails that work whether evaluating 10 candidates or managing 10,000 students. For large institutions, FragmentTrails offers hierarchical administration allowing department-level control while maintaining institution-wide standards. The platform supports cohort-based organization, enabling institutions to manage discussions by course, program, department, or institutional level. Consistent evaluation frameworks ensure that assessment standards remain aligned across different cohorts and instructors, supporting fair comparison of student performance. The comprehensive audit trail system scales to handle large volumes of data while maintaining detailed records of all evaluations, discussions, and administrative actions. This scalability makes FragmentTrails suitable for institutions ranging from individual classrooms to university-wide implementations across multiple departments and programs.",
  },
  {
    question: "What makes FragmentTrails different from discussion forums?",
    answer: "Unlike traditional forums where contributions get buried in endless feeds, FragmentTrails maintains discussion context through structured trails. The platform combines quality moderation, evidence requirements, and evaluation capabilities that generic social platforms cannot provide for academic purposes. Traditional discussion forums suffer from information fragmentation where valuable contributions disappear in chronological feeds, making it difficult to follow the development of ideas. FragmentTrails maintains the structural relationship between contributions, creating a coherent narrative of collective reasoning. The requirement that every contribution include supporting evidence ensures academic rigor that generic forums lack. The two-stage quality moderation system maintains standards that open platforms cannot enforce. Most importantly, FragmentTrails provides evaluation capabilities designed specifically for academic assessment, something generic social platforms are not designed to support. These combined features make FragmentTrails purpose-built for educational use rather than adapted from general social networking tools.",
  },
  {
    question: "How do educators get recognized on the platform?",
    answer: "FragmentTrails identifies educators who consistently elevate discussion quality and guide students toward rigorous academic discourse. Recognition is based on teaching impact and learning outcomes rather than simple participation metrics, highlighting effective facilitation of meaningful discussions. The recognition algorithm analyzes multiple factors including student engagement depth, evidence quality in student responses, argument development sophistication, and peer interaction patterns. Educators receive detailed analytics on their facilitation effectiveness, with specific metrics showing how their guidance influences discussion outcomes. This data supports professional development by highlighting effective practices and identifying areas for improvement. Recognition is based on demonstrated impact on student learning rather than activity metrics, ensuring that the system rewards teaching effectiveness rather than mere participation. The platform provides public recognition for exceptional educators while maintaining privacy for those who prefer not to be highlighted, allowing institutions to use recognition data for internal professional development purposes without requiring public disclosure.",
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
