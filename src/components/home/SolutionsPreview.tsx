import Link from "next/link";
import { solutions } from "@/lib/data/solutions";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SolutionsPreview() {
  return (
    <section
      className="container-page py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="services-heading"
          eyebrow="Services"
          title="Lorem ipsum dolor sit amet elit."
        />
        <Reveal delay={100}>
          <Link href="/solutions" className="btn btn-glass">
            Explore services
            <Icon name="arrowRight" size={17} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, i) => (
          <Reveal key={solution.slug} delay={(i % 4) * 80}>
            <Link
              href={`/solutions#${solution.slug}`}
              className="glass glass-interactive flex h-full flex-col gap-4 rounded-[1.5rem] p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-[0.875rem] bg-[var(--accent-tint)] text-accent-elevated">
                <Icon name={solution.icon} size={21} />
              </span>
              <span>
                <span className="block font-semibold tracking-[-0.01em]">
                  {solution.name}
                </span>
                <span className="mt-1 line-clamp-3 block text-sm leading-relaxed text-secondary">
                  {solution.summary}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
