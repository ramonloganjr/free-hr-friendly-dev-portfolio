export interface Client {
  name: string;
  logo: string;
}

const logo = (_n: number) =>
  `/clients/dummy-clients.png`;

const names = [
  "Lorem & Co",
  "Ipsum Labs",
  "Dolor Group",
  "Amet Studio",
  "Consec Corp",
  "Adipia",
  "Elitr Systems",
  "Sedano",
  "Tempor Inc",
  "Incidunt",
  "Laboris",
  "Magna Aliqua",
  "Veniam Co",
  "Quis Nostrud",
  "Exerci Group",
  "Ullamco",
  "Aliquip Media",
  "Commodo",
  "Duis Aute",
  "Irure Tech",
  "Voluptate",
  "Velit Esse",
  "Cillum",
  "Fugiat",
  "Nulla Pariatur",
  "Excepteur",
  "Sint Occaecat",
  "Cupidatat",
  "Proident",
  "Culpa Qui",
  "Officia",
  "Deserunt",
  "Mollit Anim",
  "Laborum",
  "Perspicia",
  "Unde Omnis",
];

export const clients: Client[] = names.map((name, i) => ({
  name,
  logo: logo(i + 1),
}));
