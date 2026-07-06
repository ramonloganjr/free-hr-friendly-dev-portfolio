export interface Post {
  title: string;
  url: string;
  date: string;
  dateLabel: string;
  category: string;
  readingTime: string;
  excerpt: string;
  image: string;
}

const img = (_n: number) => `/blog/dummy-blog.png`;
const demo = "https://example.com/blog";

export const posts: Post[] = [
  {
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur",
    url: `${demo}/lorem-ipsum-dolor-sit-amet`,
    date: "2026-07-03",
    dateLabel: "Jul 3, 2026",
    category: "Community",
    readingTime: "3 min",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: img(1),
  },
  {
    title: "Adipiscing Elit. Sed Do. Eiusmod Tempor.",
    url: `${demo}/adipiscing-elit-sed-do`,
    date: "2026-05-01",
    dateLabel: "May 1, 2026",
    category: "Community",
    readingTime: "5 min",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    image: img(2),
  },
  {
    title: "Beyond the Incididunt: Ut Labore Et Dolore Magna Aliqua",
    url: `${demo}/beyond-the-incididunt`,
    date: "2026-04-10",
    dateLabel: "Apr 10, 2026",
    category: "Community",
    readingTime: "6 min",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: img(3),
  },
  {
    title: "Veniam Quis Nostrud in 2030 (Exercitation Ullamco Laboris)",
    url: `${demo}/veniam-quis-nostrud`,
    date: "2025-10-30",
    dateLabel: "Oct 30, 2025",
    category: "Technology",
    readingTime: "6 min",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    image: img(4),
  },
  {
    title: "Nisi Ut Aliquip: Ex Ea Commodo Consequat Duis Aute",
    url: `${demo}/nisi-ut-aliquip`,
    date: "2025-01-13",
    dateLabel: "Jan 13, 2025",
    category: "Security",
    readingTime: "7 min",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    image: img(5),
  },
  {
    title: "Irure vs Dolor vs Reprehenderit: Voluptate Velit Esse Cillum",
    url: `${demo}/irure-vs-dolor`,
    date: "2025-01-05",
    dateLabel: "Jan 5, 2025",
    category: "Search & AI",
    readingTime: "7 min",
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
    image: img(6),
  },
  {
    title: "Dolore vs Fugiat: Quo Nulla Pariatur Excepteur?",
    url: `${demo}/dolore-vs-fugiat`,
    date: "2025-01-02",
    dateLabel: "Jan 2, 2025",
    category: "Tooling",
    readingTime: "5 min",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    image: img(7),
  },
  {
    title: "Sint Occaecat vs Cupidatat: Non Proident Comparison",
    url: `${demo}/sint-occaecat-vs-cupidatat`,
    date: "2024-12-30",
    dateLabel: "Dec 30, 2024",
    category: "Platforms",
    readingTime: "4 min",
    excerpt:
      "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.",
    image: img(8),
  },
  {
    title: "Sunt in Culpa: Qui Officia Deserunt Mollit Anim",
    url: `${demo}/sunt-in-culpa`,
    date: "2024-12-15",
    dateLabel: "Dec 15, 2024",
    category: "Technology",
    readingTime: "5 min",
    excerpt:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    image: img(9),
  },
];
