"use client";

import { useState } from "react";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

type FollowQuestionButtonProps = {
  className?: string;
};

/** Local preview follow. Syncing requires auth on the app domain. */
export default function FollowQuestionButton({
  className = "rounded-lg border border-slate-200 px-3 py-1.5 text-secondary hover:bg-slate-50",
}: FollowQuestionButtonProps) {
  const [following, setFollowing] = useState(false);

  if (following) {
    return (
      <span className="inline-flex items-center gap-2">
        <button
          type="button"
          onClick={() => setFollowing(false)}
          className={`${className} border-highlight/40 bg-highlight/10 text-highlight-dark`}
          aria-pressed="true"
        >
          Following
        </button>
        <Link
          href={`${frontendAppBaseUrl}/auth/login`}
          className="text-[11px] font-semibold text-textMuted hover:text-secondary hover:underline"
        >
          Sync
        </Link>
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setFollowing(true)}
      className={className}
      aria-pressed="false"
    >
      Follow question
    </button>
  );
}
