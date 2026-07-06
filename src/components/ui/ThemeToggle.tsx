"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon, type IconName } from "./Icon";

const modes: { value: string; label: string; icon: IconName }[] = [
  { value: "light", label: "Light appearance", icon: "sun" },
  { value: "system", label: "Match system appearance", icon: "circleHalf" },
  { value: "dark", label: "Dark appearance", icon: "moon" },
];

/**
 * Apple-style segmented appearance control: Light / Auto / Dark.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      role="radiogroup"
      aria-label="Appearance"
      className="flex items-center gap-0.5 rounded-full bg-[var(--fill-quaternary)] p-1"
    >
      {modes.map((mode) => {
        const active = mounted && (theme ?? "system") === mode.value;
        return (
          <button
            key={mode.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={mode.label}
            title={mode.label}
            onClick={() => setTheme(mode.value)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
              active
                ? "glass-subtle text-primary"
                : "text-tertiary hover:text-secondary"
            }`}
          >
            <Icon name={mode.icon} size={15} />
          </button>
        );
      })}
    </div>
  );
}
