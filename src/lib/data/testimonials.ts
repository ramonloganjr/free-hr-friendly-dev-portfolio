export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const avatar = (_n: number) =>
  `/testimony/dummy-user-testimony.png`;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Ramon Logan Jr.",
    role: "Managing Partner · Lorem & Co",
    avatar: avatar(1),
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    name: "Ramon Logan Jr.",
    role: "Product Lead · Ipsum Labs",
    avatar: avatar(2),
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Ramon Logan Jr.",
    role: "Business Development · Dolor Group",
    avatar: avatar(3),
  },
  {
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    name: "Ramon Logan Jr.",
    role: "Consultant · Amet Studio",
    avatar: avatar(4),
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    name: "Ramon Logan Jr.",
    role: "Electrical Engineer · Tempor Inc",
    avatar: avatar(5),
  },
  {
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Ramon Logan Jr.",
    role: "Web Developer · Magna Aliqua",
    avatar: avatar(6),
  },
  {
    quote:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.",
    name: "Ramon Logan Jr.",
    role: "Graphic Designer · Brand & Print",
    avatar: avatar(7),
  },
  {
    quote:
      "Ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima.",
    name: "Ramon Logan Jr.",
    role: "Desktop Engineer · Veniam Co",
    avatar: avatar(8),
  },
  {
    quote:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    name: "Ramon Logan Jr.",
    role: "Managing Partner · Occaecat Capital",
    avatar: avatar(9),
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    name: "Ramon Logan Jr.",
    role: "Graphic Designer · Identity Studio",
    avatar: avatar(10),
  },
  {
    quote:
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
    name: "Ramon Logan Jr.",
    role: "Founder · Deserunt Atelier",
    avatar: avatar(11),
  },
  {
    quote:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
    name: "Ramon Logan Jr.",
    role: "System Administrator",
    avatar: avatar(12),
  },
  {
    quote:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus.",
    name: "Ramon Logan Jr.",
    role: "Finance Manager · Sed Group",
    avatar: avatar(13),
  },
  {
    quote:
      "Maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste.",
    name: "Ramon Logan Jr.",
    role: "Founder · Autem Studio",
    avatar: avatar(14),
  },
];
