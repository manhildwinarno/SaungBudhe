export interface TestimonialsType {
  id: number;
  name: string;
  review: string;
  rating: number;
  menuName?: string;
}

export const Testimonials: TestimonialsType[] = [
  {
    id: 1,
    name: "Hilman RD",
    review: "Pedesnya pas, gurihnya mantep. Bikin nagih terus!",
    rating: 5,
    menuName: "Nasi Goreng Gachoor",
  },
  {
    id: 2,
    name: "Rina",
    review:
      "Rasa sambelnya nampol di lidah, berasa banget bumbu rempahnya. Pokoknya nagih!",
    rating: 4,
    menuName: "Ayam Penyet Gachoor",
  },
  {
    id: 3,
    name: "Mamat",
    review:
      "Ayamnya empuk, bumbu meresap sampai ke dalam. Gak bohong, ini favorit baru saya!",
    rating: 4.5,
    menuName: "Ayam Goreng Mentega",
  },
  {
    id: 4,
    name: "Ucup",
    review: "Manis gurihnya pas, bumbunya medok. Bikin nambah nasi terus!",
    rating: 5,
    menuName: "Ayam Bakar Kecap",
  },
];
