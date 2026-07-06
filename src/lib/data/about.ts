export const careerTimeline = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack Engineer",
    company: "Lorem Systems",
    location: "Lorem City",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    period: "2020 — 2023",
    role: "Full-Stack Engineer",
    company: "Ipsum Labs",
    location: "Lorem City",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    period: "2017 — 2020",
    role: "Front-End Engineer",
    company: "Dolor Digital",
    location: "Lorem City",
    description:
      "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
];

export const education = [
  {
    degree: "BSc Lorem Ipsum Technology",
    school: "Lorem University",
  },
  {
    degree: "2-Year Diploma, Dolor Technology",
    school: "Ipsum College",
  },
];

export interface SkillGroup {
  group: string;
  skills: { name: string; icon: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages & Runtime",
    skills: [
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
    ],
  },
  {
    group: "UI & Frameworks",
    skills: [
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
    ],
  },
  {
    group: "Backend & Data",
    skills: [
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
    ],
  },
  {
    group: "Platform & Tooling",
    skills: [
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
      { name: "Skill", icon: "/skills/skills.svg" },
    ],
  },
];

export interface Venture {
  name: string;
  role: string;
  description: string;
  url: string;
  logoLight: string;
  logoDark: string;
}

export const ventures: Venture[] = [
  {
    name: "Lorem Atlas",
    role: "Founder, Designer, Lead Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    url: "https://example.com/lorem-atlas",
    logoLight: "/ventures/ventures.png",
    logoDark: "/ventures/ventures.png",
  },
  {
    name: "Ipsum Civic",
    role: "Founder & Lead Engineer",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    url: "https://example.com/ipsum-civic",
    logoLight: "/ventures/ventures.png",
    logoDark: "/ventures/ventures.png",
  },
  {
    name: "Dolor Health",
    role: "Founder, Product Designer, Lead Full-Stack Engineer",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    url: "https://example.com/dolor-health",
    logoLight: "/ventures/ventures.png",
    logoDark: "/ventures/ventures.png",
  },
  {
    name: "Amet Cloud",
    role: "Founder",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    url: "https://example.com/amet-cloud",
    logoLight: "/ventures/ventures.png",
    logoDark: "/ventures/ventures.png",
  },
];
