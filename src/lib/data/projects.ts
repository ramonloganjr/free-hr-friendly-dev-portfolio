export const projectCategories = [
  "Community & Open Source",
  "Industry & B2B",
  "Commerce & SaaS",
  "Finance & Capital",
  "Personal & Portfolio",
  "Security",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  year: number;
  role: string;
  stack: string[];
  category: ProjectCategory;
  image: string;
  url?: string;
}

const img = (_n: number) =>
  `/projects/dummy-projects.png`;

const demo = "https://example.com";

export const projects: Project[] = [
  {
    slug: "lorem-toolkit",
    name: "Lorem Toolkit",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    year: 2026,
    role: "Lead Engineer, Designer",
    stack: ["React.js", "WebAssembly", "Vite", "Tesseract.js"],
    category: "Community & Open Source",
    image: img(1),
    url: demo,
  },
  {
    slug: "ipsum-directory",
    name: "Ipsum Directory",
    tagline:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua erat.",
    year: 2025,
    role: "Founder, Designer, Lead Engineer",
    stack: ["React.js", "Node.js", "Vite", "Vercel"],
    category: "Community & Open Source",
    image: img(2),
    url: demo,
  },
  {
    slug: "dolor-platform",
    name: "Dolor Platform",
    tagline:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    year: 2025,
    role: "Founder & Lead Engineer",
    stack: ["React.js", "TypeScript", "Node.js", "Next.js"],
    category: "Community & Open Source",
    image: img(3),
    url: demo,
  },
  {
    slug: "amet-health",
    name: "Amet Health",
    tagline: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    year: 2026,
    role: "Founder, Product Designer, Lead Full-Stack Engineer",
    stack: ["TanStack Start", "React.js", "TypeScript", "Tailwind CSS"],
    category: "Community & Open Source",
    image: img(4),
    url: demo,
  },
  {
    slug: "consectetur-portal",
    name: "Consectetur Portal",
    tagline:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    year: 2025,
    role: "Contributing Engineer",
    stack: ["React.js", "TypeScript", "JavaScript"],
    category: "Industry & B2B",
    image: img(5),
    url: demo,
  },
  {
    slug: "adipiscing-cloud",
    name: "Adipiscing Cloud",
    tagline: "Sed ut perspiciatis unde omnis iste natus error sit.",
    year: 2024,
    role: "Lead Engineer",
    stack: ["React.js", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Commerce & SaaS",
    image: img(6),
    url: demo,
  },
];

/** The three hero case studies shown on the home page. */
export const featuredProjects = projects.slice(0, 3);

/** The secondary featured list shown on the home page. */
export const moreFeaturedProjects = projects.slice(3, 6);
