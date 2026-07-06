import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data/posts";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WritingPreview() {
  const latest = posts.slice(0, 4);

  return (
    <section
      className="container-page section-b"
      aria-labelledby="writing-heading"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          id="writing-heading"
          eyebrow="Writing"
          title="Notes on lorem, ipsum, dolor & sit amet."
        />
        <Reveal delay={100}>
          <Link href="/writing" className="btn btn-glass">
            Read all writing
            <Icon name="arrowRight" size={17} />
          </Link>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {latest.map((post, i) => (
          <Reveal key={post.title} delay={(i % 4) * 80}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.title} (opens in a new tab)`}
              className="group glass glass-interactive flex h-full flex-col overflow-hidden rounded-[1.75rem]"
            >
              <span className="relative m-2 block aspect-[16/10] overflow-hidden rounded-[1.375rem]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-glass)] group-hover:scale-[1.04]"
                />
              </span>
              <span className="flex flex-1 flex-col gap-2.5 px-5 pt-2 pb-5">
                <span className="text-xs font-semibold text-accent-elevated">
                  {post.category}
                </span>
                <span className="line-clamp-3 font-semibold leading-snug tracking-[-0.01em]">
                  {post.title}
                </span>
                <span className="mt-auto flex items-center gap-1.5 text-xs text-tertiary">
                  <time dateTime={post.date}>{post.dateLabel}</time>
                  <span aria-hidden="true">·</span>
                  <Icon name="clock" size={12} />
                  {post.readingTime}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
