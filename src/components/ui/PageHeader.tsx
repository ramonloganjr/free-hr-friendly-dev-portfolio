import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
}

export function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <header className="container-page pt-28 pb-4 sm:pt-32">
      <Reveal className="flex max-w-3xl flex-col gap-4">
        <p className="font-subtitle text-[0.9375rem] font-semibold tracking-[-0.01em] text-accent-elevated">
          {eyebrow}
        </p>
        <h1 className="text-display text-balance">{title}</h1>
        {lede && <p className="text-lede text-pretty">{lede}</p>}
      </Reveal>
    </header>
  );
}
