import type { Metadata } from "next";
import { getPostsByCategory, getCategories } from "../../_data";
import BreadcrumbSchema from "../../../../components/BreadcrumbSchema";
import BlogCard from "../../../../components/blog/BlogCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = getCategories();
  const categoryName = categories.find(
    (cat) => cat.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!categoryName) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryName} | FragmentTrails Blog`,
    description: `Explore ${categoryName} articles on scholarship interviews, candidate evaluation, and fair selection processes.`,
    keywords: [
      categoryName.toLowerCase(),
      "scholarship blog",
      "interview evaluation",
      "candidate assessment",
    ],
    openGraph: {
      title: `${categoryName} | FragmentTrails Blog`,
      description: `Explore ${categoryName} articles on scholarship interviews and candidate evaluation.`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = getCategories();
  const categoryName = categories.find(
    (cat) => cat.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!categoryName) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(categoryName);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: categoryName, path: `/blog/category/${slug}/` },
        ]}
      />

      {/* Hero Section */}
      <section className="border-b border-slate-200/80 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 sm:text-base">
            Category
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {categoryName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            {categoryPosts.length} articles on {categoryName.toLowerCase()}
          </p>
          <Link
            href="/blog/"
            className="mt-6 inline-flex items-center text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
          >
            ← Back to all posts
          </Link>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoryPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-12 text-center">
              <p className="text-lg font-medium text-slate-600">
                No posts found in this category.
              </p>
              <Link
                href="/blog/"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                Browse all posts
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
