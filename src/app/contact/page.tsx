import type { Metadata } from "next";
import { profile } from "@/lib/data/profile";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Lorem ipsum dolor sit amet, consectetur, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const channels: {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: "envelope",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "calendar",
    label: "Intro call",
    value: "Book a 20-minute intro call",
    href: profile.booking,
    external: true,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "in/lorem-ipsum",
    href: profile.social.linkedin,
    external: true,
  },
  {
    icon: "github",
    label: "GitHub",
    value: "@loremipsum",
    href: profile.social.github,
    external: true,
  },
];

const faqs = [
  {
    question: "What kind of work do you take on?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Can we meet before committing to anything?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus.",
  },
  {
    question: "How are engagements structured?",
    answer:
      "Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    question: "Which time zones do you work with?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
  },
  {
    question: "Are you open to full-time or venture opportunities?",
    answer:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell me what you&rsquo;re{" "}
            <span className="text-gradient">thinking.</span>
          </>
        }
        lede="I read every message and reply personally, usually within one working day."
      />

      <section className="container-page section-b pt-8" aria-label="Contact">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <Reveal>
              <ul className="glass overflow-hidden rounded-[1.75rem]">
                {channels.map((channel, i) => (
                  <li key={channel.label} className={i > 0 ? "hairline-t" : ""}>
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--fill-quaternary)]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint)] text-accent-elevated">
                        <Icon name={channel.icon} size={19} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-tertiary">
                          {channel.label}
                        </span>
                        <span className="block truncate font-medium tracking-[-0.01em]">
                          {channel.value}
                        </span>
                      </span>
                      <Icon
                        name="arrowUpRight"
                        size={16}
                        className="shrink-0 text-tertiary transition-colors group-hover:text-accent-elevated"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="glass rounded-[1.75rem] p-6">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Icon name="mappin" size={16} className="text-accent-elevated" />
                  {profile.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  Working across {profile.regions}. In-person meetings are
                  available locally; everywhere else, pick your favourite
                  meeting app.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="glass-strong rounded-[2rem] p-6 sm:p-8">
              <h2 className="text-title-sm mb-6">Project brief</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="container-page section-b"
        aria-labelledby="faq-heading"
      >
        <Reveal>
          <h2 id="faq-heading" className="text-title">
            Questions, answered.
          </h2>
        </Reveal>
        <Reveal className="mt-8" delay={80}>
          <div className="glass overflow-hidden rounded-[1.75rem]">
            {faqs.map((faq, i) => (
              <details key={faq.question} className={`group ${i > 0 ? "hairline-t" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium tracking-[-0.01em] transition-colors hover:bg-[var(--fill-quaternary)] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <Icon
                    name="chevronDown"
                    size={17}
                    className="shrink-0 text-tertiary transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
