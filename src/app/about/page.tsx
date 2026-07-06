import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  careerTimeline,
  certificates,
  education,
  skillGroups,
} from "@/lib/data/about";
import { profile } from "@/lib/data/profile";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lorem Ipsum, 12+ years dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A lorem ipsum craft,{" "}
            <span className="text-gradient">dolor sit amet.</span>
          </>
        }
        lede={`${profile.yearsOfPractice} years consectetur adipiscing elit, sed do eiusmod, tempor incididunt ut labore et dolore magna aliqua.`}
      />

      {/* Portrait + bio */}
      <section className="container-page section-b pt-8" aria-label="Biography">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <figure className="glass h-full overflow-hidden rounded-[2rem]">
              <div className="relative m-2 aspect-[3/4] overflow-hidden rounded-[1.625rem] lg:h-[calc(100%-1rem)] lg:aspect-auto">
                <Image
                  src="/ramonloganjr.png"
                  alt="Placeholder portrait"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass flex h-full flex-col gap-6 rounded-[2rem] p-7 sm:p-9">
              <p className="text-lede text-pretty">
                I&rsquo;m <strong className="font-semibold text-primary">Ramon Logan Jr.</strong>, the designer and engineer behind this template. This portfolio is completely free to use. You&rsquo;re welcome to clone it, modify it, rebrand it, and publish it as your own. No attribution required, no strings attached. Just build something great with it.
              </p>
              <p className="leading-relaxed text-secondary">
                The template is built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. All content lives in <code className="rounded px-1 py-0.5 text-sm bg-[var(--fill-quaternary)]">src/lib/data/</code> so swapping in your own copy, projects, and images is straightforward. The design system, animations, and layout are yours to keep or customise however you like.
              </p>
              <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-5 text-sm sm:grid-cols-3">
                {[
                  { label: "Practice", value: profile.practice },
                  { label: "Based in", value: profile.location },
                  { label: "Experience", value: `${profile.yearsOfPractice} years` },
                  { label: "Languages", value: profile.languages.join(", ") },
            { label: "Time zones", value: "Lorem + Ipsum overlap" },
                  { label: "Availability", value: profile.availability },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-tertiary">{item.label}</dt>
                    <dd className="mt-0.5 font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Career timeline */}
      <section
        className="container-page section-b"
        aria-labelledby="timeline-heading"
      >
        <SectionHeading
          id="timeline-heading"
          eyebrow="Timeline"
          title="Lorem ipsum years, three dolores."
        />
        <ol className="mt-8 flex flex-col gap-4">
          {careerTimeline.map((entry, i) => (
            <Reveal key={entry.period} delay={Math.min(i * 60, 180)} as="li">
              <article className="glass glass-interactive grid gap-3 rounded-[1.75rem] p-6 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:p-7">
                <p className="font-mono text-sm text-accent-elevated">
                  {entry.period}
                </p>
                <div>
                  <h3 className="text-title-sm">
                    {entry.role}
                    <span className="text-tertiary"> · {entry.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-tertiary">{entry.location}</p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-secondary">
                    {entry.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Stack */}
      <section
        id="stack"
        className="container-page section-b scroll-mt-24"
        aria-labelledby="stack-heading"
      >
        <SectionHeading
          id="stack-heading"
          eyebrow="Stack"
          title="Lorem chosen for ipsum."
          lede="Dolor sit amet toolkit, consectetur adipiscing elit sed do eiusmod tempor."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.group} delay={(gi % 2) * 90}>
              <div className="glass h-full rounded-[1.75rem] p-6 sm:p-7">
                <h3 className="text-sm font-semibold text-tertiary">
                  {group.group}
                </h3>
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.skills.map((skill, si) => (
                    <li
                      key={si}
                      className="glass-subtle glass-interactive flex flex-col items-center gap-2.5 rounded-[1.125rem] px-3 py-4 text-center"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={skill.icon}
                        alt=""
                        width={28}
                        height={28}
                        loading="lazy"
                        className="h-7 w-7 object-contain"
                      />
                      <span className="text-xs font-medium text-secondary">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education + civic work */}
      <section className="container-page section-b" aria-labelledby="education-heading">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[1.75rem] p-7">
              <h2 id="education-heading" className="text-title-sm">
                Education
              </h2>
              <ul className="mt-6 flex flex-col gap-5">
                {education.map((entry) => (
                  <li key={entry.degree} className="flex items-start gap-4">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-accent-elevated">
                      <Icon name="checkmark" size={16} />
                    </span>
                    <div>
                      <p className="font-semibold tracking-[-0.01em]">
                        {entry.degree}
                      </p>
                      <p className="mt-0.5 text-sm text-secondary">
                        {entry.school}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass h-full rounded-[1.75rem] p-7">
              <h2 className="text-title-sm">Certificates</h2>
              <ul className="mt-6 flex flex-col gap-5">
                {certificates.map((certificate) => (
                  <li key={certificate.name} className="flex items-start gap-4">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-accent-elevated">
                      <Icon name="award" size={16} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold tracking-[-0.01em]">
                        {certificate.name}
                      </p>
                      <p className="mt-0.5 text-sm text-secondary">
                        {certificate.issuer}
                        <span className="text-tertiary"> · {certificate.year}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex justify-center">
          <Link href="/contact" className="btn btn-primary">
            Work with me
            <Icon name="arrowRight" size={17} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
