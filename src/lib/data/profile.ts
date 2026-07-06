export const profile = {
  name: "Free HR Friendly Dev Portfolio",
  practice: "Ipsum Studio",
  title: "Full-Stack Engineer & Product Designer",
  location: "Lorem City",
  coordinates: "00.0000° N 00.0000° E",
  email: "hello@example.com",
  website: "https://example.com",
  booking: "https://example.com/book",
  yearsOfPractice: "12+",
  languages: ["Lorem", "Ipsum"],
  currentRole: "Full-stack engineer at Ipsum Labs",
  availability: "Q4 2026",
  regions: "Lorem, Ipsum, Dolor, and Amet",
  intro:
    "I'm Lorem Ipsum — dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  social: {
    linkedin: "https://example.com/linkedin",
    github: "https://example.com/github",
  },
  terminal: [
    {
      command: "whoami",
      output:
        "Lorem Ipsum — dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      command: "cat /etc/now",
      output: "Ut enim ad minim veniam. Quis nostrud exercitation ullamco.",
    },
  ],
  engagementNote:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

export const civicLinks = [
  { label: "Lorem Atlas", href: "https://example.com/lorem-atlas" },
  { label: "Ipsum Civic", href: "https://example.com/ipsum-civic" },
  { label: "Dolor Health", href: "https://example.com/dolor-health" },
  { label: "Amet Cloud", href: "https://example.com/amet-cloud" },
] as const;
