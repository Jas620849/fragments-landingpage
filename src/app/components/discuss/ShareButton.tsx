"use client";

import { useState } from "react";

type ShareButtonProps = {
  title: string;
  path: string;
  className?: string;
};

export default function ShareButton({
  title,
  path,
  className = "hover:text-secondary",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url =
      typeof window !== "undefined"
        ? new URL(path, window.location.origin).toString()
        : path;

    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // User cancelled share sheet — ignore
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      className={
        className.includes("focus-visible")
          ? className
          : `${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight`
      }
      aria-label={copied ? "Link copied" : `Share ${title}`}
    >
      {copied ? "Copied" : "Share"}
    </button>
  );
}
