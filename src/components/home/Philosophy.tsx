import { workPhilosophy } from "@/lib/data/solutions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Philosophy() {
  return (
    <section
      className="container-page section-b"
      aria-labelledby="philosophy-heading"
    >
      <SectionHeading
        id="philosophy-heading"
        eyebrow="Approach"
        title="Lorem ipsum, deliberately dolor."
      />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {workPhilosophy.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 90}>
            <article className="glass glass-interactive flex h-full flex-col gap-4 rounded-[1.75rem] p-6">
              <span className="font-mono text-xs text-accent-elevated">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-title-sm">{principle.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-secondary">
                {principle.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
