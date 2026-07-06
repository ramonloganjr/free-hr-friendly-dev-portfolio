import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  id,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <p className="font-subtitle text-[0.9375rem] font-semibold tracking-[-0.01em] text-accent-elevated">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-title text-balance">
        {title}
      </h2>
      {lede && <p className="text-lede max-w-2xl text-pretty">{lede}</p>}
    </Reveal>
  );
}
