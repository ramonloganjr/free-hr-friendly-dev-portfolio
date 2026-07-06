import Image from "next/image";
import type { Project } from "@/lib/data/projects";
import { Icon } from "./Icon";

interface ProjectCardProps {
  project: Project;
  index?: number;
  /** Above-the-fold cards get eager loading priority. */
  priority?: boolean;
  sizes?: string;
}

function CardBody({ project, index, priority, sizes }: ProjectCardProps) {
  return (
    <>
      <div className="relative m-2 aspect-[16/10] overflow-hidden rounded-[1.375rem]">
        <Image
          src={project.image}
          alt={`${project.name} — interface preview`}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover object-top transition-transform duration-700 ease-[var(--ease-glass)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pt-3 pb-5">
        <div className="flex items-center justify-between font-mono text-xs text-tertiary">
          <span>
            {index !== undefined ? `${String(index).padStart(2, "0")} / ` : ""}
            {project.year}
          </span>
          <span className="truncate pl-3">{project.role}</span>
        </div>
        <div>
          <h3 className="text-title-sm flex items-baseline justify-between gap-2">
            <span className="truncate">{project.name}</span>
            {project.url && (
              <Icon
                name="arrowUpRight"
                size={17}
                className="shrink-0 text-tertiary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-elevated"
              />
            )}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[0.9375rem] leading-relaxed text-secondary">
            {project.tagline}
          </p>
        </div>
        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technology stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="glass-subtle rounded-full px-2.5 py-1 text-xs font-medium text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  const className =
    "group glass glass-interactive flex h-full flex-col rounded-[1.75rem]";

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} (opens in a new tab)`}
        className={className}
      >
        <CardBody {...props} />
      </a>
    );
  }

  return (
    <article className={className}>
      <CardBody {...props} />
    </article>
  );
}
