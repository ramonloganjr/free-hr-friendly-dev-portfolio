import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: `${projects.length} lorem ipsum builds — dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            {projects.length} builds,{" "}
            <span className="text-gradient">one lorem.</span>
          </>
        }
        lede="Ipsum dolor sit amet platforms, consectetur adipiscing systems, elit storefronts — sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ProjectsExplorer />
    </>
  );
}
