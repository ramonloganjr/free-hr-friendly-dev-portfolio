import Link from "next/link";
import {
  featuredProjects,
  moreFeaturedProjects,
  projects,
} from "@/lib/data/projects";
import { Icon } from "@/components/ui/Icon";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedWork() {
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="Selected work"
        title="Lorem ipsum dolor. Sit amet consectetur."
        lede="Adipiscing elit sed do eiusmod tempor incididunt — ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 90}
            className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <ProjectCard project={project} index={i + 1} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <ul className="glass overflow-hidden rounded-[1.75rem]">
          {moreFeaturedProjects.map((project, i) => {
            const row = (
              <>
                <span className="w-10 shrink-0 font-mono text-xs text-tertiary">
                  {String(i + 4).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold tracking-[-0.01em]">
                    {project.name}
                  </span>
                  <span className="mt-0.5 hidden truncate text-sm text-secondary sm:block">
                    {project.tagline}
                  </span>
                </span>
                <span className="hidden shrink-0 text-sm text-tertiary md:block">
                  {project.stack.slice(0, 3).join(" · ")}
                </span>
                <span className="w-12 shrink-0 text-right font-mono text-xs text-tertiary">
                  {project.year}
                </span>
                <Icon
                  name="arrowUpRight"
                  size={16}
                  className="shrink-0 text-tertiary transition-colors group-hover:text-accent-elevated"
                />
              </>
            );

            return (
              <li key={project.slug} className={i > 0 ? "hairline-t" : ""}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--fill-quaternary)] sm:px-7"
                  >
                    {row}
                  </a>
                ) : (
                  <div className="group flex items-center gap-4 px-5 py-4 sm:px-7">
                    {row}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <Link href="/projects" className="btn btn-glass">
          View all {projects.length} projects
          <Icon name="arrowRight" size={17} />
        </Link>
      </Reveal>
    </section>
  );
}
