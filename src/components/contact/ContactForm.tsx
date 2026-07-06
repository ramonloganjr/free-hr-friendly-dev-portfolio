"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data/profile";
import { Icon } from "@/components/ui/Icon";

const scopes = [
  "Web engineering",
  "UI/UX Design",
  "Web App",
  "Product Design",
  "SEO/AEO/GEO",
  "Branding",
  "Analytics",
  "E-commerce",
  "Partnership",
  "Collaborations",
  "Co-founding",
  "Career Opportunities",
  "Venture Opportunities",
];

const fieldClass =
  "w-full rounded-2xl border border-separator bg-elevated/60 px-4 py-3 text-[0.9375rem] text-primary placeholder:text-quaternary transition-shadow duration-300 focus:border-transparent focus:shadow-[0_0_0_2px_var(--accent)] focus:outline-none";

/**
 * Static-friendly contact form: composes a structured email and hands it
 * to the visitor's mail client. No data leaves the page otherwise.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("company") ? `Company: ${data.get("company")}` : "",
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      data.get("website") ? `Website: ${data.get("website")}` : "",
      `Scope: ${data.get("scope")}`,
      "",
      `${data.get("notes")}`,
    ].filter(Boolean);

    const subject = encodeURIComponent(
      `Project inquiry — ${data.get("scope")} (${data.get("name")})`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Your name <span className="text-accent-elevated">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Appleseed"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email <span className="text-accent-elevated">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
            Company <span className="text-tertiary">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Company Inc."
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="text-tertiary">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+00 …"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="website" className="mb-1.5 block text-sm font-medium">
            Website <span className="text-tertiary">(optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="scope" className="mb-1.5 block text-sm font-medium">
            Scope <span className="text-accent-elevated">*</span>
          </label>
          <select id="scope" name="scope" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a scope…
            </option>
            {scopes.map((scope) => (
              <option key={scope} value={scope}>
                {scope}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-medium">
          Project notes <span className="text-accent-elevated">*</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          required
          rows={5}
          placeholder="What are you building, and by when?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">
          <Icon name="paperplane" size={17} />
          Compose email
        </button>
        <p className="text-sm text-tertiary" aria-live="polite">
          {sent
            ? "Your email draft is ready in your mail app."
            : "Opens your mail app with a pre-filled message — nothing is stored here."}
        </p>
      </div>
    </form>
  );
}
