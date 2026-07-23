import type { Metadata } from "next";
import DiscussionCard from "@/app/components/discuss/DiscussionCard";
import FeedTabs from "@/app/components/discuss/FeedTabs";
import { getLatestDiscussions } from "@/lib/discussions/data";

export const metadata: Metadata = {
  title: "Discussions",
  description:
    "Browse discussions on FragmentTrails—structured conversations that become lasting knowledge.",
  alternates: { canonical: "/discussions/" },
};

export default function DiscussionsIndexPage() {
  const feed = getLatestDiscussions(20).filter((d) => d.type === "discussion");

  return (
    <div>
      <header className="mb-3 sm:mb-4">
        <h1 className="text-xl font-bold tracking-tight text-secondary sm:text-2xl">
          Discussions
        </h1>
        <p className="mt-0.5 text-sm text-textMuted">
          Share knowledge and opinions—without the noise of engagement farming.
        </p>
      </header>

      <FeedTabs active="/discussions/" />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {feed.map((item) => (
          <DiscussionCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
