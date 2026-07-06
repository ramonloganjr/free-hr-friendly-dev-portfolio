"use client";

import { useMemo, useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = "All" | ProjectCategory;

/**
 * Filterable project index. The segmented control mirrors Apple's
 * pill-style scope bars; filtering happens client-side across all 47 builds.
 */
export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  const options: Filter[] = ["All", ...projectCategories];

  return (
    <div className="container-page pt-8 pb-20 md:pb-28">
      <div
        role="tablist"
        aria-label="Filter projects by sector"
        className="no-scrollbar glass sticky top-20 z-30 -mx-1.5 flex gap-1 overflow-x-auto rounded-full p-1.5 sm:top-24"
      >
        {options.map((option) => {
          const active = filter === option;
          const count =
            option === "All"
              ? projects.length
              : projects.filter((p) => p.category === option).length;
          return (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(option)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                active
                  ? "bg-accent text-on-accent shadow-lg"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {option}
              <span
                className={`font-mono text-[0.6875rem] ${
                  active ? "text-on-accent/70" : "text-tertiary"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-tertiary" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
        {filter !== "All" ? ` in ${filter}` : ""}.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i + 1}
            priority={i < 3}
          />
        ))}
      </div>
    </div>
  );
}
