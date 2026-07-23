"use client";

import { useState } from "react";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

type FollowProfileButtonProps = {
  name: string;
};

export default function FollowProfileButton({ name }: FollowProfileButtonProps) {
  const [following, setFollowing] = useState(false);

  if (following) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFollowing(false)}
          className="rounded-lg border border-highlight/40 bg-highlight/10 px-4 py-2 text-xs font-bold text-highlight-dark transition hover:bg-highlight/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight sm:text-sm"
          aria-pressed="true"
        >
          Following
        </button>
        <Link
          href={`${frontendAppBaseUrl}/auth/login`}
          className="text-xs font-semibold text-textMuted underline-offset-2 hover:text-secondary hover:underline"
        >
          Sync
        </Link>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setFollowing(true)}
      className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-secondary transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight sm:text-sm"
      aria-label={`Follow ${name}`}
      aria-pressed="false"
    >
      Follow
    </button>
  );
}
