import type { SVGProps } from "react";

/**
 * SF Symbols–inspired stroke icon set.
 * 24×24 grid, 1.8pt stroke, round caps and joins.
 */
const paths = {
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  arrowRight: <path d="M4 12h16m-6-6 6 6-6 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  envelope: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="3" />
      <path d="m4 7.5 8 6 8-6" />
    </>
  ),
  mappin: (
    <>
      <path d="M12 21s-6.75-5.6-6.75-10.25a6.75 6.75 0 0 1 13.5 0C18.75 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v2M12 19.25v2M2.75 12h2M19.25 12h2M5.4 5.4l1.4 1.4M17.2 17.2l1.4 1.4M18.6 5.4l-1.4 1.4M6.8 17.2 5.4 18.6" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />,
  circleHalf: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5v17A8.5 8.5 0 0 0 12 3.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  xmark: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 8.25h16M4 15.75h16" />,
  code: <path d="m8.5 7.5-5 4.5 5 4.5m7-9 5 4.5-5 4.5M13.6 5l-3.2 14" />,
  pencil: (
    <>
      <path d="m14.4 5.2 4.4 4.4L8.3 20.1 3.5 20.5l.4-4.8L14.4 5.2Z" />
      <path d="m12.7 6.9 4.4 4.4" />
    </>
  ),
  stack: (
    <>
      <path d="m12 3.5 8.5 4.75L12 13 3.5 8.25 12 3.5Z" />
      <path d="m3.5 12.5 8.5 4.75 8.5-4.75M3.5 16.25 12 21l8.5-4.75" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  magnifier: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m15.8 15.8 4.7 4.7" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5c.6 3.9 2.6 5.9 6.5 6.5-3.9.6-5.9 2.6-6.5 6.5-.6-3.9-2.6-5.9-6.5-6.5 3.9-.6 5.9-2.6 6.5-6.5ZM18.8 15.5c.3 1.7 1.2 2.6 2.9 2.9-1.7.3-2.6 1.2-2.9 2.9-.3-1.7-1.2-2.6-2.9-2.9 1.7-.3 2.6-1.2 2.9-2.9Z" />
  ),
  chart: (
    <>
      <path d="M3.75 4v15a1 1 0 0 0 1 1h15.5" />
      <path d="m7.5 14.5 3.5-4 3 2.5 5-6" />
    </>
  ),
  bag: (
    <>
      <path d="M5.5 8h13l-.9 11.1a2 2 0 0 1-2 1.9H8.4a2 2 0 0 1-2-1.9L5.5 8Z" />
      <path d="M9 10.5V6.75a3 3 0 0 1 6 0v3.75" />
    </>
  ),
  paperplane: <path d="M20.5 3.5 3.5 10.4l6.9 2.9 3 6.9 7.1-16.7ZM10.4 13.3l4.6-4.5" />,
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  quote: (
    <path d="M9.5 7.5C7 8.5 5.5 10.4 5.5 13v3.5H10V12H7.8c0-1.7.8-2.9 2.4-3.6l-.7-.9Zm8 0c-2.5 1-4 2.9-4 5.5v3.5H18V12h-2.2c0-1.7.8-2.9 2.4-3.6l-.7-.9Z" />
  ),
  checkmark: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  link: (
    <>
      <path d="M10 14a4.5 4.5 0 0 0 6.4.4l2.8-2.8a4.5 4.5 0 1 0-6.4-6.4l-1.3 1.3" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4-.4l-2.8 2.8a4.5 4.5 0 1 0 6.4 6.4l1.3-1.3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c-4.7 4.9-4.7 12.1 0 17 4.7-4.9 4.7-12.1 0-17Z" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="m7 9.5 3 2.5-3 2.5M12.5 14.5H17" />
    </>
  ),
  building: (
    <>
      <path d="M5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 15 5v15.5M15 9.5h3.5A1.5 1.5 0 0 1 20 11v9.5M3 20.5h18" />
      <path d="M8 7.5h4M8 11h4M8 14.5h4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M7.6 10.2v6.3M7.6 7.4v.1M11.3 16.5v-3.7c0-1.4.9-2.4 2.3-2.4s2.3 1 2.3 2.4v3.7M11.3 10.2v1.5" />
    </>
  ),
  github: (
    <path d="M12 3.2a8.8 8.8 0 0 0-2.8 17.2c.4.1.6-.2.6-.5v-1.7c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4-1-4-4.4 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4.9a8.4 8.4 0 0 1 4.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2 4.2-4 4.4.3.3.6.8.6 1.6v2.4c0 .3.2.6.6.5A8.8 8.8 0 0 0 12 3.2Z" />
  ),
  download: (
    <>
      <path d="M12 3.5v11m0 0-3.5-3.5M12 14.5 15.5 11" />
      <path d="M4.5 16.5v2a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.6 13.8 7.2 20.5l4.8-2.4 4.8 2.4-1.4-6.7" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
