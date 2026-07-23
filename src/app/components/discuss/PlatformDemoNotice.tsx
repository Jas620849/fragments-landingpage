import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

/**
 * Visible notice on the static discussion demo — keeps AdSense reviewers
 * from treating sample UGC as primary publisher content.
 */
export default function PlatformDemoNotice() {
  return (
    <aside
      className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
      role="note"
    >
      <p>
        This is a <strong className="font-semibold">static product preview</strong> with
        sample discussions—not live user content. For the main site, see our{" "}
        <Link href="/" className="font-medium underline">
          homepage
        </Link>
        ,{" "}
        <Link href="/blog/" className="font-medium underline">
          blog
        </Link>
        , or{" "}
        <a
          href={`${frontendAppBaseUrl}/auth/register`}
          className="font-medium underline"
        >
          create a free account
        </a>{" "}
        on the live app.
      </p>
    </aside>
  );
}
