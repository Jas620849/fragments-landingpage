import Link from "next/link";

const FEED_TABS = [
  { href: "/explore/", label: "Latest" },
  { href: "/trending/", label: "Trending" },
  { href: "/discussions/", label: "Discussions" },
  { href: "/questions/", label: "Questions" },
] as const;

type FeedTabsProps = {
  active: (typeof FEED_TABS)[number]["href"];
};

export default function FeedTabs({ active }: FeedTabsProps) {
  return (
    <div
      className="mb-3 flex gap-1 overflow-x-auto border-b border-slate-200"
      role="tablist"
      aria-label="Feed filters"
    >
      {FEED_TABS.map((tab) => {
        const isActive = tab.href === active;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            role="tab"
            aria-selected={isActive}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "shrink-0 border-b-2 border-secondary px-3 py-2.5 text-sm font-bold text-secondary"
                : "shrink-0 border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-textMuted hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
