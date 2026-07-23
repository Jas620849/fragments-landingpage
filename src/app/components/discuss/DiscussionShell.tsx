"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBookmark,
  faBoxArchive,
  faCircleQuestion,
  faComments,
  faCompass,
  faFire,
  faHouse,
  faMagnifyingGlass,
  faPlus,
  faUserGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { frontendAppBaseUrl } from "@/app/utils/frontendAppBaseUrl";
import DiscoveryRail from "./DiscoveryRail";
import PlatformDemoNotice from "./PlatformDemoNotice";

const navItems = [
  { href: "/explore/", label: "Home", icon: faHouse },
  { href: "/following/", label: "Following", icon: faBookmark },
  { href: "/trending/", label: "Trending", icon: faFire },
  { href: "/discussions/", label: "Discussions", icon: faComments },
  { href: "/questions/", label: "Questions", icon: faCircleQuestion },
  { href: "/discover/", label: "Discover", icon: faCompass },
  { href: "/communities/", label: "Communities", icon: faUserGroup },
  { href: "/saved/", label: "Saved", icon: faBoxArchive },
] as const;

const mobileTabs = [
  { href: "/explore/", label: "Home", icon: faHouse },
  { href: "/discussions/", label: "Discuss", icon: faComments },
  { href: "/questions/", label: "Questions", icon: faCircleQuestion },
  { href: "/communities/", label: "Communities", icon: faUserGroup },
] as const;

function navActive(pathname: string, href: string) {
  if (href === "/explore/") {
    return pathname === "/explore" || pathname === "/explore/";
  }
  if (href === "/questions/") {
    return (
      pathname === "/questions" ||
      pathname === "/questions/" ||
      pathname.startsWith("/questions/")
    );
  }
  if (href === "/discussions/") {
    return (
      pathname === "/discussions" ||
      pathname === "/discussions/" ||
      pathname.startsWith("/discussions/")
    );
  }
  return pathname === href || pathname.startsWith(href.replace(/\/$/, ""));
}

export default function DiscussionShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const createRef = useRef<HTMLDivElement>(null);
  const createHref = `${frontendAppBaseUrl}/auth/register`;

  useEffect(() => {
    if (!createOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (createRef.current && !createRef.current.contains(e.target as Node)) {
        setCreateOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [createOpen]);

  useEffect(() => {
    setMobileNav(false);
    setCreateOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-textDark">
      <a
        href="#main-content"
        className="absolute left-3 top-3 z-[60] -translate-y-[200%] rounded-lg bg-secondary px-3 py-2 text-sm font-bold text-white transition focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center gap-3 px-3 sm:px-5 lg:px-6">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight lg:hidden"
            aria-label={mobileNav ? "Close navigation" : "Open more navigation"}
            aria-expanded={mobileNav}
            onClick={() => setMobileNav((v) => !v)}
          >
            <FontAwesomeIcon icon={mobileNav ? faXmark : faBars} />
          </button>

          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 font-bold tracking-tight text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            aria-label="FragmentTrails marketing home"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
              <Image
                src="/logo-no-bg.png"
                alt=""
                width={32}
                height={32}
                className="object-contain p-0.5"
              />
            </span>
            <span className="hidden text-sm sm:inline sm:text-base" aria-hidden>
              FragmentTrails
            </span>
          </Link>

          <form
            action="/discover/"
            method="get"
            className="mx-auto hidden min-w-0 max-w-xl flex-1 md:block"
            role="search"
          >
            <label className="relative block">
              <span className="sr-only">Search discussions</span>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"
                aria-hidden
              />
              <input
                name="q"
                type="search"
                placeholder="Search discussions, questions, communities, people…"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-textDark outline-none transition placeholder:text-slate-400 focus:border-highlight/50 focus:bg-white focus:ring-2 focus:ring-highlight/20"
              />
            </label>
          </form>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/discover/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight md:hidden"
              aria-label="Search and discover"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>

            <div className="relative hidden sm:block" ref={createRef}>
              <button
                type="button"
                onClick={() => setCreateOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-sm"
                aria-expanded={createOpen}
                aria-haspopup="menu"
              >
                <FontAwesomeIcon icon={faPlus} className="text-[10px]" aria-hidden />
                Create
              </button>
              {createOpen ? (
                <div
                  role="menu"
                  className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
                >
                  <Link
                    role="menuitem"
                    href={createHref}
                    className="flex items-start gap-2.5 px-3 py-2.5 text-left transition hover:bg-primary/70"
                    onClick={() => setCreateOpen(false)}
                  >
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      className="mt-0.5 text-sm text-secondary"
                      aria-hidden
                    />
                    <span>
                      <span className="block text-sm font-bold text-secondary">
                        Ask a question
                      </span>
                      <span className="block text-[11px] text-textMuted">
                        Get high-quality answers
                      </span>
                    </span>
                  </Link>
                  <Link
                    role="menuitem"
                    href={createHref}
                    className="flex items-start gap-2.5 px-3 py-2.5 text-left transition hover:bg-primary/70"
                    onClick={() => setCreateOpen(false)}
                  >
                    <FontAwesomeIcon
                      icon={faComments}
                      className="mt-0.5 text-sm text-highlight-dark"
                      aria-hidden
                    />
                    <span>
                      <span className="block text-sm font-bold text-secondary">
                        Start a discussion
                      </span>
                      <span className="block text-[11px] text-textMuted">
                        Share knowledge or opinion
                      </span>
                    </span>
                  </Link>
                </div>
              ) : null}
            </div>

            <Link
              href={`${frontendAppBaseUrl}/auth/login`}
              className="hidden rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-secondary transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight sm:inline-flex sm:text-sm"
            >
              Sign in
            </Link>
            <Link
              href="/"
              className="hidden text-xs font-medium text-textMuted transition hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight xl:inline"
            >
              Marketing site
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_300px]">
        <aside
          className={`border-b border-slate-200 bg-white lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:border-b-0 lg:border-r lg:border-slate-200/90 ${
            mobileNav ? "block" : "hidden lg:block"
          }`}
        >
          <nav
            className="flex flex-col gap-0.5 p-3"
            aria-label="Platform navigation"
          >
            {navItems.map((item) => {
              const active = navActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNav(false)}
                  className={
                    active
                      ? "flex items-center gap-3 rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-secondary ring-1 ring-highlight/20"
                      : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
                  }
                  aria-current={active ? "page" : undefined}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-4 text-xs opacity-80"
                    aria-hidden
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mx-3 mb-4 mt-2 space-y-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-highlight-dark">
                Knowledge that lasts
              </p>
              <p className="mt-1 text-xs leading-relaxed text-textMuted">
                Conversations become lasting knowledge—structured, moderated, and
                worth returning to.
              </p>
            </div>
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-xs font-semibold text-textMuted transition hover:bg-slate-50 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight lg:hidden"
              onClick={() => setMobileNav(false)}
            >
              ← Marketing site
            </Link>
          </div>
        </aside>

        <main
          id="main-content"
          className="min-w-0 border-slate-200/80 pb-20 lg:border-r lg:pb-0 xl:border-r-0"
          tabIndex={-1}
        >
          <div className="px-3 py-4 sm:px-5 sm:py-5 lg:px-6">
            <PlatformDemoNotice />
            {children}
          </div>
        </main>

        <aside className="hidden border-l border-slate-200/90 bg-[#f7f8fa] xl:block">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
            <DiscoveryRail />
          </div>
        </aside>
      </div>

      {/* Mobile bottom nav — intentional, not a shrunk desktop rail */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
        aria-label="Primary mobile"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-5 gap-0 px-1 pt-1">
          {mobileTabs.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex min-h-[3rem] flex-col items-center justify-center gap-0.5 rounded-lg text-[10px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight ${
                    active
                      ? "text-secondary"
                      : "text-slate-500 hover:text-secondary"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-sm ${active ? "text-secondary" : ""}`}
                    aria-hidden
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={createHref}
              className="flex min-h-[3rem] flex-col items-center justify-center gap-0.5 rounded-lg text-[10px] font-bold text-accent-dark transition hover:text-accent-darker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-sm">
                <FontAwesomeIcon icon={faPlus} className="text-[10px]" aria-hidden />
              </span>
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
