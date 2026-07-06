import Image from "next/image";
import { pressFeatures } from "@/lib/data/press";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Press() {
  return (
    <section className="container-page section-b" aria-labelledby="press-heading">
      <SectionHeading
        id="press-heading"
        eyebrow="Featured in"
        title="The lorem ipsum, in the news."
        lede="Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore."
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pressFeatures.map((feature, i) => (
          <Reveal key={feature.outlet} delay={(i % 3) * 90}>
            <article className="glass glass-interactive flex h-full flex-col overflow-hidden rounded-[1.75rem]">
              <div className="relative m-2 aspect-[16/10] overflow-hidden rounded-[1.375rem]">
                <Image
                  src={feature.logo}
                  alt={`${feature.outlet} coverage`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 px-5 pt-3 pb-5">
                <p className="text-xs font-semibold tracking-wide text-accent-elevated uppercase">
                  {feature.outlet}
                </p>
                <h3 className="font-semibold leading-snug tracking-[-0.01em] text-pretty">
                  {feature.headline}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
