"use client";

const proofs = [
  "AI + human review on every fragment",
  "Built for K–12, higher ed, and experts",
  "Educator credit for quality, not volume",
  "Threaded trails that stay on topic",
];

/** Slim proof line under the hero — one job, minimal height. */
export default function TrustStrip() {
  return (
    <section
      aria-label="Product highlights"
      className="border-b border-slate-200/70 bg-white py-4 sm:py-5"
    >
      <div className="frag-container">
        <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2 lg:justify-start lg:gap-x-0">
          {proofs.map((line, i) => (
            <li
              key={line}
              className="flex items-center text-sm font-medium text-textMuted sm:text-[0.9375rem]"
            >
              {i > 0 && (
                <span
                  className="mx-4 hidden h-3 w-px shrink-0 bg-slate-200 lg:block"
                  aria-hidden
                />
              )}
              <span className="text-secondary/90">{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
