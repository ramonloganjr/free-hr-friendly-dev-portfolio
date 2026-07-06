import Link from "next/link";
import { civicLinks, navLinks, profile } from "@/lib/data/profile";
import { Icon } from "@/components/ui/Icon";

const elsewhere = [
  { label: "LinkedIn", href: profile.social.linkedin },
  { label: "GitHub", href: profile.social.github },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Book a call", href: profile.booking },
];

export function SiteFooter() {
  return (
    <footer className="container-page pb-8">
      <div className="glass rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold tracking-[-0.01em]">{profile.name}</p>
              <p className="text-sm text-secondary">{profile.title}</p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <nav aria-label="Site">
            <h3 className="mb-3 text-sm font-semibold text-tertiary">Site</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.9375rem] text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere">
            <h3 className="mb-3 text-sm font-semibold text-tertiary">Elsewhere</h3>
            <ul className="flex flex-col gap-2">
              {elsewhere.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[0.9375rem] text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                    <Icon
                      name="arrowUpRight"
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-60"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Ventures">
            <h3 className="mb-3 text-sm font-semibold text-tertiary">Ventures</h3>
            <ul className="flex flex-col gap-2">
              {civicLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[0.9375rem] text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                    <Icon
                      name="arrowUpRight"
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-60"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hairline-t mt-10 flex flex-wrap items-center gap-3 pt-6">
          <a
            href="https://github.com/ramonloganjr/free-hr-friendly-dev-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass"
          >
            <Icon name="github" size={17} />
            Contribute or Get the Source Code
          </a>
          <a href="/downloads/portfolio-static-export.zip" download className="btn btn-glass">
            <Icon name="download" size={17} />
            Download Static Files
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2 pt-2 text-sm text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <p>
            {profile.name} · {profile.title}
          </p>
        </div>
      </div>
    </footer>
  );
}
