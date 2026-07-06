"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = "All" | ProjectCategory;

/**
 * Filterable project index. The segmented control mirrors Apple's
 * pill-style scope bars; filtering happens client-side across all builds.
 * On narrow viewports the scope bar scrolls horizontally with snap points
 * and edge fades that hint at any categories hidden off-screen.
 */
export function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ left: false, right: false });

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  const options: Filter[] = ["All", ...projectCategories];

  // Track which edges have content scrolled out of view so the fade masks
  // only appear when there's actually more to reach.
  const syncEdges = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft > 1;
    const right = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;
    setEdges((prev) =>
      prev.left === left && prev.right === right ? prev : { left, right },
    );
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    syncEdges();
    const observer = new ResizeObserver(syncEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, [syncEdges]);

  const fade = "2rem";
  const maskImage = `linear-gradient(to right, transparent 0, #000 ${
    edges.left ? fade : "0px"
  }, #000 calc(100% - ${edges.right ? fade : "0px"}), transparent 100%)`;

  return (
    <div className="container-page section-b pt-6">
      <div className="sticky top-20 z-30 sm:top-24">
        <div className="glass overflow-hidden rounded-full p-1.5">
          <div
            ref={scrollRef}
            role="tablist"
            aria-label="Filter projects by sector"
            onScroll={syncEdges}
            style={{ maskImage, WebkitMaskImage: maskImage }}
            className="no-scrollbar flex snap-x snap-proximity gap-1 overflow-x-auto scroll-px-8"
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
                  onFocus={(e) =>
                    e.currentTarget.scrollIntoView({
                      block: "nearest",
                      inline: "nearest",
                    })
                  }
                  className={`flex shrink-0 snap-start items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
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
        </div>
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
