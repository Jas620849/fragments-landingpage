"use client";

import { useState } from "react";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

type SaveButtonProps = {
  className?: string;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight";

/** Local preview save. Syncing requires auth on the app domain. */
export default function SaveButton({
  className = "rounded-lg border border-slate-200 px-3 py-1.5 text-secondary hover:bg-slate-50",
}: SaveButtonProps) {
  const [saved, setSaved] = useState(false);
  const btnClass = className.includes("focus-visible")
    ? className
    : `${className} ${focusRing}`;

  if (saved) {
    return (
      <span className="inline-flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSaved(false)}
          className={`${btnClass} border-highlight/40 bg-highlight/10 text-highlight-dark`}
          aria-pressed="true"
        >
          Saved
        </button>
        <Link
          href={`${frontendAppBaseUrl}/auth/login`}
          className={`text-[11px] font-semibold text-textMuted hover:text-secondary hover:underline ${focusRing}`}
        >
          Sync
        </Link>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setSaved(true)}
      className={btnClass}
      aria-pressed="false"
    >
      Save
    </button>
  );
}
