"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    title: "Create or join trails",
    body: "Educators open a sourced prompt; students join trails that match their coursework.",
  },
  {
    title: "Contribute with evidence",
    body: "Questions, counterpoints, and clarifications stack in order—one coherent thread.",
  },
  {
    title: "Screen before publish",
    body: "AI checks integrity and quality; humans review tone and academic fit.",
  },
  {
    title: "Recognize facilitation",
    body: "Credit educators who raise the room—depth and outcomes, not post counts.",
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="border-y border-slate-200/60 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="frag-container">
        <AnimateOnScroll className="max-w-2xl">
          <p className="frag-eyebrow">Workflow</p>
          <h2 className="frag-title mt-2">How it works</h2>
          <p className="frag-lead">
            Four steps from opening fragment to recognized facilitation—with
            quality checks built in.
          </p>
        </AnimateOnScroll>

        <ol className="relative mx-auto mt-12 max-w-lg space-y-10 md:hidden">
          <span
            className="absolute left-[1.4375rem] top-6 bottom-6 w-px bg-slate-200"
            aria-hidden
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 pl-1">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-base font-bold text-white ring-4 ring-white">
                {i + 1}
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="text-base font-semibold text-secondary">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-textMuted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative mx-auto mt-14 hidden w-full max-w-6xl md:block">
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 h-px bg-slate-200"
            aria-hidden
          />
          <ol className="relative grid grid-cols-4 gap-4 lg:gap-6">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col items-center px-1 text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white ring-[5px] ring-white">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-sm font-semibold leading-snug text-secondary sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-textMuted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
