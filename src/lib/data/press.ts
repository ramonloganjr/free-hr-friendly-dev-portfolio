export interface PressFeature {
  outlet: string;
  headline: string;
  logo: string;
}

const img = (_n: number) => `/featured/dummy-feature.png`;

export const pressFeatures: PressFeature[] = [
  {
    outlet: "The Lorem Post",
    headline:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do Eiusmod",
    logo: img(1),
  },
  {
    outlet: "Ipsum Daily",
    headline: "Tempor Incididunt Ut Labore Et Dolore Magna Aliqua Ut Enim",
    logo: img(2),
  },
  {
    outlet: "Dolor Weekly",
    headline: "Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris",
    logo: img(3),
  },
  {
    outlet: "Amet Broadcasting",
    headline: "Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute Irure",
    logo: img(4),
  },
  {
    outlet: "Consectetur Radio",
    headline: "Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore",
    logo: img(5),
  },
  {
    outlet: "Elit Global",
    headline:
      "Eu Fugiat Nulla Pariatur Excepteur Sint Occaecat Cupidatat Non Proident",
    logo: img(6),
  },
];
