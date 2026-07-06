"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data/profile";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { BrandMark } from "./BrandMark";

/**
 * Floating Liquid Glass navigation bar. Sits detached from the page edge,
 * condenses on scroll, and expands into a glass sheet on mobile.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet on navigation and lock body scroll while open.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>

      <div className="container-page">
        <nav
          aria-label="Primary"
          className={`glass rounded-full px-3 transition-all duration-500 ease-[var(--ease-glass)] sm:px-4 ${
            scrolled ? "shadow-2xl" : ""
          }`}
        >
          <div className="flex h-13 items-center justify-between gap-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-full py-1 pr-2 pl-1"
              aria-label={`${profile.name} — home`}
            >
              <BrandMark />
              <span className="text-[0.9375rem] font-bold tracking-[-0.01em] whitespace-nowrap max-[359px]:hidden">
                {profile.name}
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`rounded-full px-3.5 py-1.5 text-[0.9375rem] tracking-[-0.01em] transition-colors duration-300 ${
                      isActive(link.href)
                        ? "glass-subtle font-medium text-primary"
                        : "text-secondary hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="btn btn-primary !min-h-9 hidden !px-4 text-[0.9375rem] sm:inline-flex"
              >
                Let&rsquo;s talk
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex h-9 w-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-[var(--fill-quaternary)] lg:hidden"
              >
                <Icon name={menuOpen ? "xmark" : "menu"} size={19} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile glass sheet */}
        <div
          id="mobile-menu"
          className={`origin-top transition-all duration-500 ease-[var(--ease-glass)] lg:hidden ${
            menuOpen
              ? "pointer-events-auto mt-2 scale-100 opacity-100"
              : "pointer-events-none mt-0 -translate-y-2 scale-[0.98] opacity-0"
          }`}
        >
          <div className="glass-strong rounded-[1.75rem] p-2">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex items-center justify-between rounded-3xl px-4 py-3.5 text-title-sm transition-colors ${
                      isActive(link.href)
                        ? "text-accent-elevated"
                        : "text-primary hover:bg-[var(--fill-quaternary)]"
                    }`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-tertiary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </span>
                    <Icon name="chevronRight" size={16} className="text-tertiary" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hairline-t mx-4 my-2" />
            <div className="p-2">
              <a href={`mailto:${profile.email}`} className="btn btn-primary w-full">
                <Icon name="envelope" size={17} />
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
