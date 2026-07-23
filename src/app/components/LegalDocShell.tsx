import type { ReactNode } from "react";

type LegalDocShellProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
};

/**
 * Shared hero + content shell for legal / trust pages.
 */
export default function LegalDocShell({
  eyebrow,
  title,
  lead,
  children,
}: LegalDocShellProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative frag-container">
          <div className="max-w-2xl">
            <p className="frag-hero-eyebrow">{eyebrow}</p>
            <h1 className="frag-hero-h1 mt-1.5">{title}</h1>
            <p className="frag-hero-lead max-w-none">{lead}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container">
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-slate-600 [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_a]:decoration-blue-700/30 [&_a]:underline-offset-2 hover:[&_a]:text-blue-900 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:first:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-800 [&_li]:mt-1.5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            <p className="text-sm font-medium text-slate-500">
              Last updated: July 23, 2026
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
