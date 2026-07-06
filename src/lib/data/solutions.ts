import type { IconName } from "@/components/ui/Icon";

export interface Solution {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  detail: string;
}

export const solutions: Solution[] = [
  {
    slug: "web-engineering",
    name: "Web Engineering",
    icon: "code",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    detail:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    slug: "ui-ux-design",
    name: "UI / UX Design",
    icon: "pencil",
    summary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    detail:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    icon: "stack",
    summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    detail:
      "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
  },
  {
    slug: "product-design",
    name: "Product Design",
    icon: "compass",
    summary:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    detail:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt, neque porro quisquam est.",
  },
];

export const engagementProcess = [
  {
    phase: "01",
    name: "Discovery",
    duration: "1 week",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
  },
  {
    phase: "02",
    name: "Design",
    duration: "2–3 weeks",
    description: "Eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    phase: "03",
    name: "Build",
    duration: "4–10 weeks",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    phase: "04",
    name: "Hand-off",
    duration: "1 week",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];

export const workPhilosophy = [
  {
    title: "Lorem over ipsum",
    description:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    title: "Dolor as craft",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    title: "Real sit amet budgets",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Ship the consectetur",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  },
];
