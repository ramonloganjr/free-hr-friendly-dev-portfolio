import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure
      aria-label={`Testimonial from ${t.name}`}
      className="glass flex h-64 w-[19rem] shrink-0 flex-col gap-5 rounded-[1.75rem] p-6 sm:w-[22rem]"
    >
      <Icon name="quote" size={26} className="text-accent-elevated opacity-70" />
      <blockquote className="flex-1 overflow-hidden text-[0.9375rem] leading-relaxed text-secondary line-clamp-4">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={t.avatar}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <span>
          <span className="block text-sm font-semibold tracking-[-0.01em]">
            {t.name}
          </span>
          <span className="block text-xs text-tertiary">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="section-b" aria-labelledby="testimonials-heading">
      <div className="container-page">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Lorem verba ex bonis hominibus."
          lede="Consectetur, adipiscing, et elit sed do eiusmod — tempor incididunt ut labore."
        />
      </div>

      {/* Accessible static list for screen readers */}
      <ul className="sr-only" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <li key={i}>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <p>{t.name}, {t.role}</p>
          </li>
        ))}
      </ul>

      <Reveal className="marquee group relative mt-8 overflow-hidden" delay={120}>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-page to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-page to-transparent"
          aria-hidden="true"
        />
        <ul
          className="marquee-track flex w-max items-stretch gap-5"
          aria-hidden="true"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <li key={`${t.name}-${i}`}>
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
