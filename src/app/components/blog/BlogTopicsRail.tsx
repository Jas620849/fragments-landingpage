import Link from "next/link";
import { getCategories } from "@/app/(marketing)/blog/_data";

function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

type BlogTopicsRailProps = {
  activeCategory?: string;
};

export default function BlogTopicsRail({ activeCategory }: BlogTopicsRailProps) {
  const categories = getCategories();

  return (
    <nav aria-label="Blog topics" className="space-y-1">
      <p className="px-2 text-[10px] font-bold uppercase tracking-wider text-textMuted">
        Topics
      </p>
      <ul className="mt-2 space-y-0.5">
        <li>
          <Link
            href="/blog/"
            className="block rounded-lg px-2.5 py-2 text-sm font-semibold text-secondary transition hover:bg-primary/70 hover:text-highlight-dark"
          >
            All discussions
          </Link>
        </li>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <li key={category}>
              <Link
                href={`/blog/category/${categorySlug(category)}/`}
                className={
                  isActive
                    ? "block rounded-lg bg-primary px-2.5 py-2 text-sm font-bold text-secondary ring-1 ring-highlight/25"
                    : "block rounded-lg px-2.5 py-2 text-sm font-medium text-textDark transition hover:bg-primary/70 hover:text-highlight-dark"
                }
                aria-current={isActive ? "page" : undefined}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
