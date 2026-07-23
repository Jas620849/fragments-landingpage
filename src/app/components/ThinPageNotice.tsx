import Link from "next/link";

type ThinPageNoticeProps = {
  /** product = keyword/programmatic marketing pages; sample = demo forum content */
  variant: "product" | "sample";
};

/**
 * Visible notice on thin/doorway/sample pages pointing users to primary content.
 */
export default function ThinPageNotice({ variant }: ThinPageNoticeProps) {
  if (variant === "product") {
    return (
      <aside
        className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
        role="note"
      >
        <p>
          This page is a thin keyword landing page and is not our primary content.
          For useful material, see our{" "}
          <Link href="/blog/" className="font-medium underline">
            blog
          </Link>
          ,{" "}
          <Link href="/how-it-works/" className="font-medium underline">
            how it works
          </Link>
          , and{" "}
          <Link
            href="/services/classroom-discussion-platform/"
            className="font-medium underline"
          >
            classroom discussion platform
          </Link>
          .
        </p>
      </aside>
    );
  }

  return (
    <aside
      className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950"
      role="note"
    >
      <p>
        This is sample/demo content and is not the primary FragmentTrails site.
        Visit our{" "}
        <Link href="/blog/" className="font-medium underline">
          blog
        </Link>{" "}
        or{" "}
        <Link href="/" className="font-medium underline">
          homepage
        </Link>{" "}
        for the main product and articles.
      </p>
    </aside>
  );
}
