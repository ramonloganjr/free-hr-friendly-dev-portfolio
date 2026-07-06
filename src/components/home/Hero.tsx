import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="container-page section-b relative pt-28 sm:pt-32">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 rotate-6 md:block lg:w-72"
      >
        <Image
          src="/logo.png"
          alt=""
          width={320}
          height={320}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-6 max-w-3xl">
        <Reveal delay={80}>
          <h1 className="text-display text-balance">
            HR Friendly{" "}
            <span className="text-gradient">Dev Portfolio!</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-lede max-w-xl text-pretty">
            I&rsquo;m <strong className="font-semibold text-primary">Ramon Logan Jr.</strong> — the designer and engineer behind this template. This portfolio is completely free for public use. Clone it, modify it, rebrand it, and ship it as your own. No attribution needed, no licence fees, no catch.
          </p>
        </Reveal>

        <Reveal delay={240} className="flex flex-wrap items-center gap-3">
          <Link href="/projects" className="btn btn-primary">
            See selected work
            <Icon name="arrowRight" size={17} />
          </Link>
          <Link href="/contact" className="btn btn-glass">
            Start a conversation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
