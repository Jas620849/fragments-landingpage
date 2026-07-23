import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/seo-constants";

const linkClass =
  "text-sm text-slate-400 transition hover:text-white";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgb(51_65_85_/_0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51_65_85_/_0.35)_1px,transparent_1px)] bg-[size:56px_56px]"
        aria-hidden
      />
      <div className="relative frag-container py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/logo-no-bg.png"
                  alt={`${SITE_NAME} Logo`}
                  width={36}
                  height={36}
                  sizes="36px"
                  className="object-contain p-1"
                />
              </span>
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400/95">
              Home of Fragments—the discussion platform for U.S. schools and
              serious learners: guided trails, transparent moderation, and
              credit for educators who show up with rigor.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about/" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog/" className={linkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact/" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services/classroom-discussion-platform/" className={linkClass}>
                  Classroom Discussion Platform
                </Link>
              </li>
              <li>
                <Link href="/services/ai-moderated-learning/" className={linkClass}>
                  AI-Moderated Learning
                </Link>
              </li>
              <li>
                <Link href="/services/student-engagement-software/" className={linkClass}>
                  Student Engagement
                </Link>
              </li>
              <li>
                <Link href="/services/educator-recognition-platform/" className={linkClass}>
                  Educator Recognition
                </Link>
              </li>
              <li>
                <Link href="/services/cohort-based-learning/" className={linkClass}>
                  Cohort-Based Learning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/privacy/" className={linkClass}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className={linkClass}>
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/cookies/" className={linkClass}>
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className={linkClass}>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
