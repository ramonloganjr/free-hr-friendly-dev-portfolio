import { clients } from "@/lib/data/clients";
import { Reveal } from "@/components/ui/Reveal";

function LogoRow({ prefix, hidden }: { prefix: string; hidden?: boolean }) {
  return (
    <>
      {clients.map((client) => (
        <li
          key={`${prefix}-${client.name}`}
          aria-hidden={hidden}
          className="flex h-36 w-72 shrink-0 items-center justify-center"
          title={client.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.logo}
            alt={client.name}
            loading="lazy"
            className="max-h-28 w-auto max-w-64 object-contain [filter:grayscale(1)_opacity(0.6)] transition-[filter] duration-300 hover:[filter:grayscale(0)_opacity(1)] dark:[filter:grayscale(1)_invert(1)_opacity(0.65)] dark:hover:[filter:grayscale(1)_invert(1)_opacity(1)]"
          />
        </li>
      ))}
    </>
  );
}

export function Clients() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="clients-heading">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="text-[0.9375rem] font-semibold text-accent-elevated">
            Clients
          </p>
          <h2
            id="clients-heading"
            className="text-title-sm mt-3 text-secondary"
          >
            Trusted by {clients.length}+ lorem ipsum organisations across dolor
            &amp; sit amet.
          </h2>
        </Reveal>
      </div>

      <Reveal className="marquee group relative mt-10 overflow-hidden" delay={120}>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-page to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-page to-transparent"
          aria-hidden="true"
        />
        <ul className="marquee-track flex w-max items-center gap-6" aria-label="Client logos">
          <LogoRow prefix="a" />
          <LogoRow prefix="b" hidden />
        </ul>
      </Reveal>
    </section>
  );
}
