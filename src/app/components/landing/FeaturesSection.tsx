"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  faCogs,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection() {
  return (
    <section
      id="explore"
      className="relative border-y border-slate-200/60 bg-gradient-to-b from-bgLight via-white to-primary/40 py-20 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Platform</p>
          <h2 className="frag-title mt-3">
            Purpose-built tools for structured academic discourse
          </h2>
          <p className="frag-lead mt-4">
            FragmentTrails provides the infrastructure needed to transform unstructured discussions into evidence-based learning experiences with built-in quality control and evaluation capabilities.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <AnimateOnScroll className="lg:col-span-2" delayMs={0}>
            <article className="frag-card-interactive group relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
            <div className="absolute right-0 top-0 h-44 w-44 translate-x-10 -translate-y-10 rounded-full bg-highlight/10 blur-3xl transition group-hover:bg-highlight/20" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-highlight-dark ring-1 ring-border-light">
              <FontAwesomeIcon icon={faProjectDiagram} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-secondary sm:text-xl">Structured fragment trails</h3>
            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-textMuted">
              Educators create discussion trails by posting sourced fragments with specific questions. Students extend these trails by contributing evidence-based responses, creating a visible chain of reasoning that shows how ideas develop from initial prompts through supporting evidence to conclusions. This structured approach transforms chaotic forum discussions into coherent academic dialogues where every contribution builds upon previous work. Fragment trails maintain the logical structure of arguments, allowing students to see how evidence supports claims, how counterpoints address opposing views, and how consensus emerges through reasoned debate. The visual representation of discussion threads helps both students and educators track the evolution of ideas, identify gaps in reasoning, and recognize when discussions have reached meaningful conclusions or require additional exploration.
            </p>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll delayMs={100}>
            <article className="frag-card-interactive group flex h-full flex-col bg-gradient-to-b from-white to-primary/50 p-5 sm:p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-secondary ring-1 ring-border-light">
              <FontAwesomeIcon icon={faUsers} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-secondary sm:text-xl">Collaborative peer learning</h3>
            <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-textMuted">
              Students learn from each other by responding to peer contributions with counterarguments, supporting evidence, and constructive feedback. This collaborative approach creates a dynamic learning environment where multiple perspectives emerge and students develop critical thinking through engagement with diverse viewpoints. Research in collaborative learning demonstrates that peer-to-peer interaction significantly improves understanding and retention compared to passive learning methods. FragmentTrails structures these interactions to ensure they remain productive and academically rigorous. Students must support their responses to peers with evidence, preventing superficial agreement or disagreement and forcing deeper engagement with the material. The platform tracks peer interaction patterns, helping educators identify students who consistently contribute valuable insights and those who may need guidance in constructive peer engagement. This data enables targeted interventions to improve collaborative skills and ensure all students benefit from peer learning opportunities.
            </p>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-3" delayMs={180}>
            <article className="frag-card-interactive group flex h-full flex-col p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-8 lg:p-8">
            <div className="mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-darker ring-1 ring-accent/25 lg:mb-0">
              <FontAwesomeIcon icon={faCogs} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-secondary sm:text-xl">
                Two-stage quality moderation
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted lg:max-w-3xl">
                Every contribution undergoes automated screening for plagiarism, academic integrity, and baseline quality before publication. Human reviewers then assess tone, nuance, and alignment with institutional standards, ensuring all published content meets both technical and qualitative requirements for academic discourse. The automated stage uses advanced natural language processing to detect potential plagiarism, verify citation accuracy, and assess basic writing quality including grammar, clarity, and coherence. This initial screening filters out submissions that fail to meet minimum standards, allowing human reviewers to focus on qualitative assessment rather than mechanical corrections. The human review stage evaluates content for academic tone, appropriate level of complexity, alignment with discussion objectives, and adherence to institutional discourse norms. Reviewers can provide specific feedback for improvement or approve content for publication, creating a learning opportunity for students while maintaining quality standards. This two-stage approach balances efficiency with educational value, ensuring scalable quality control without sacrificing the personalized feedback essential for learning.
              </p>
            </div>
            </article>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
