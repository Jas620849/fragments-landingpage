"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { formatCount } from "@/lib/discussions/data";

type VoteControlProps = {
  initialCount: number;
  size?: "sm" | "md" | "horizontal";
  label?: string;
};

/**
 * Local-only vote UI for the static preview. Live voting requires auth on the app.
 */
export default function VoteControl({
  initialCount,
  size = "md",
  label = "Mark as helpful",
}: VoteControlProps) {
  const [count, setCount] = useState(initialCount);
  const [dir, setDir] = useState<-1 | 0 | 1>(0);

  const bump = (next: -1 | 1) => {
    setDir((prev) => {
      if (prev === next) {
        setCount(initialCount);
        return 0;
      }
      setCount(initialCount + next);
      return next;
    });
  };

  const compact = size === "sm";
  const horizontal = size === "horizontal";

  if (horizontal) {
    return (
      <div
        className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50/80 px-1 py-0.5"
        role="group"
        aria-label={label}
      >
        <button
          type="button"
          onClick={() => bump(1)}
          className={`rounded-md p-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-highlight ${
            dir === 1
              ? "bg-highlight/15 text-highlight-dark"
              : "text-slate-400 hover:bg-white hover:text-secondary"
          }`}
          aria-pressed={dir === 1}
          aria-label="Helpful upvote"
        >
          <FontAwesomeIcon icon={faChevronUp} className="text-xs" />
        </button>
        <span
          className={`min-w-[1.5rem] text-center text-xs font-bold tabular-nums ${
            dir === 1
              ? "text-highlight-dark"
              : dir === -1
                ? "text-slate-500"
                : "text-secondary"
          }`}
        >
          {formatCount(count)}
        </span>
        <button
          type="button"
          onClick={() => bump(-1)}
          className={`rounded-md p-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-highlight ${
            dir === -1
              ? "bg-slate-200 text-slate-600"
              : "text-slate-400 hover:bg-white hover:text-secondary"
          }`}
          aria-pressed={dir === -1}
          aria-label="Remove helpful mark"
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center gap-0.5 ${compact ? "min-w-[2rem]" : "min-w-[2.5rem]"}`}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => bump(1)}
        className={`rounded-md p-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-highlight ${
          dir === 1
            ? "bg-highlight/15 text-highlight-dark"
            : "text-slate-400 hover:bg-slate-100 hover:text-secondary"
        }`}
        aria-pressed={dir === 1}
        aria-label="Helpful upvote"
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          className={compact ? "text-[10px]" : "text-xs"}
        />
      </button>
      <span
        className={`font-bold tabular-nums ${
          dir === 1
            ? "text-highlight-dark"
            : dir === -1
              ? "text-slate-500"
              : "text-secondary"
        } ${compact ? "text-[11px]" : "text-xs"}`}
      >
        {formatCount(count)}
      </span>
      <button
        type="button"
        onClick={() => bump(-1)}
        className={`rounded-md p-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-highlight ${
          dir === -1
            ? "bg-slate-200 text-slate-600"
            : "text-slate-400 hover:bg-slate-100 hover:text-secondary"
        }`}
        aria-pressed={dir === -1}
        aria-label="Remove helpful mark"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          className={compact ? "text-[10px]" : "text-xs"}
        />
      </button>
    </div>
  );
}
