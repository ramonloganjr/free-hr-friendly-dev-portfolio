import type { Metadata } from "next";
import Image from "next/image";
import { posts } from "@/lib/data/posts";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Lorem ipsum essays — dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
};

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title={
          <>
            Notes from the <span className="text-gradient">lorem ipsum.</span>
          </>
        }
        lede="Essays on lorem, ipsum, dolor, and sit amet. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      />

      <section className="container-page section-b pt-8" aria-label="All posts">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 80}>
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
                    priority={i < 3}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-glass)] group-hover:scale-[1.04]"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-2.5 px-5 pt-2 pb-5">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-accent-elevated">
                      {post.category}
                    </span>
                    <Icon
                      name="arrowUpRight"
                      size={15}
                      className="text-tertiary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-elevated"
                    />
                  </span>
                  <span className="font-semibold leading-snug tracking-[-0.01em] text-pretty">
                    {post.title}
                  </span>
                  <span className="line-clamp-2 text-sm leading-relaxed text-secondary">
                    {post.excerpt}
                  </span>
                  <span className="mt-auto flex items-center gap-1.5 pt-2 text-xs text-tertiary">
                    <time dateTime={post.date}>{post.dateLabel}</time>
                    <span aria-hidden="true">·</span>
                    <Icon name="clock" size={12} />
                    {post.readingTime} read
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
