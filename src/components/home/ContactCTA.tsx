import Link from "next/link";
import { profile } from "@/lib/data/profile";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section className="container-page py-20 md:py-28" aria-labelledby="cta-heading">
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl dark:opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, var(--accent) 0%, transparent 70%)",
            }}
          />
          <p className="text-[0.9375rem] font-semibold text-accent-elevated">
            Get in touch
          </p>
          <h2
            id="cta-heading"
            className="text-title mx-auto mt-4 max-w-2xl text-balance"
          >
            Lorem ipsum dolor{" "}
            <em className="text-gradient not-italic">sit amet?</em>
          </h2>
          <p className="text-lede mx-auto mt-5 max-w-2xl text-pretty">
            {profile.engagementNote}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation
              <Icon name="arrowRight" size={17} />
            </Link>
            <a href={`mailto:${profile.email}`} className="btn btn-glass">
              <Icon name="envelope" size={17} />
              Email directly
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
