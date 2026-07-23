"use client";

import { useState } from "react";
import Link from "next/link";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";

type CommunityJoinButtonProps = {
  communityName: string;
};

/**
 * Preview join state. Persisting membership requires auth on the app domain.
 */
export default function CommunityJoinButton({
  communityName,
}: CommunityJoinButtonProps) {
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setJoined(false)}
          className="rounded-lg border border-highlight/40 bg-highlight/10 px-4 py-2 text-xs font-bold text-highlight-dark transition hover:bg-highlight/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight sm:text-sm"
          aria-pressed="true"
        >
          Joined
        </button>
        <Link
          href={`${frontendAppBaseUrl}/auth/register`}
          className="text-xs font-semibold text-textMuted underline-offset-2 hover:text-secondary hover:underline"
        >
          Sync to account
        </Link>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setJoined(true)}
      className="rounded-lg bg-accent px-4 py-2 text-xs font-bold text-white transition hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
      aria-label={`Join ${communityName}`}
    >
      Join community
    </button>
  );
}
