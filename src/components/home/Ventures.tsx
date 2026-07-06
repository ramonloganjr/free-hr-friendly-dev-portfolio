import { ventures } from "@/lib/data/about";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Ventures() {
  return (
    <section
      className="container-page py-20 md:py-28"
      aria-labelledby="ventures-heading"
    >
      <SectionHeading
        id="ventures-heading"
        eyebrow="Ventures & contributions"
        title="Lorem ipsum, built on dolor."
        lede="Consectetur adipiscing elit platforms — sed do eiusmod tempor incididunt ut labore et dolore."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {ventures.map((venture, i) => (
          <Reveal key={venture.name} delay={(i % 2) * 90}>
            <a
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${venture.name} (opens in a new tab)`}
              className="group glass glass-interactive flex h-full flex-col gap-5 rounded-[1.75rem] p-7"
            >
              <span className="flex h-28 items-center justify-between">
                {/* Theme-aware venture wordmarks */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={venture.logoLight}
                  alt={`${venture.name} logo`}
                  className="h-18 w-auto max-w-[70%] object-contain object-left dark:hidden"
                  loading="lazy"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={venture.logoDark}
                  alt={`${venture.name} logo`}
                  className="hidden h-18 w-auto max-w-[70%] object-contain object-left dark:block"
                  loading="lazy"
                />
                <Icon
                  name="arrowUpRight"
                  size={18}
                  className="text-tertiary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-elevated"
                />
              </span>
              <span>
                <span className="block font-semibold tracking-[-0.01em]">
                  {venture.name}
                </span>
                <span className="mt-0.5 block text-sm font-medium text-accent-elevated">
                  {venture.role}
                </span>
                <span className="mt-2 block text-[0.9375rem] leading-relaxed text-secondary">
                  {venture.description}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
