"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Icon, type IconName } from "./Icon";

const modes: { value: string; label: string; icon: IconName }[] = [
  { value: "light", label: "Light appearance", icon: "sun" },
  { value: "system", label: "Match system appearance", icon: "circleHalf" },
  { value: "dark", label: "Dark appearance", icon: "moon" },
];

function resolves(value: string) {
  if (value !== "system") return value;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Apple-style segmented appearance control: Light / Auto / Dark.
 * Switching modes reveals the new theme through an expanding circle
 * centred on the button that was pressed, via the View Transitions API.
 */
export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function handleSelect(value: string, event: React.MouseEvent<HTMLButtonElement>) {
    if (value === theme) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const noVisualChange = resolvedTheme && resolves(value) === resolvedTheme;

    if (
      reduceMotion ||
      noVisualChange ||
      typeof document.startViewTransition !== "function"
    ) {
      setTheme(value);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(value));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

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
            onClick={(event) => handleSelect(mode.value, event)}
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
