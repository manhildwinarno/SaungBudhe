import { MapPin, Clock, Phone } from "lucide-react";

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mie+Hotplate+Gachor+Make+Depok";

export const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3!2d106.82!3d-6.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInNDguMCJTIDEwNsKwNDknMTIuMCJF!5e0!3m2!1sen!2sid!4v1234567890";

export const headerData = [
  { title: "Home", href: "/" },
  { title: "Menu", href: "/menu" },
  { title: "About", href: "/#about" },
  { title: "Contact Us", href: "/#contact" },
];

export const menuType = [
  { title: "All", value: "all" },
  { title: "Mie Gachoor", value: "mie-gachorr" },
  { title: "Ayam", value: "ayam" },
  { title: "Sop", value: "sop" },
  { title: "Jepang", value: "jepang" },
  { title: "Snack", value: "snack" },
  { title: "Minuman", value: "minuman" },
];

interface DetailsType {
  title: string;
  description: string;
}

export const details: DetailsType[] = [
  {
    title: "Pangsit Crispy",
    description: "Kriuk dari pangsit membuat makanan semakin nagih....",
  },
  {
    title: "Ayam Suwir",
    description:
      "Membuat mie penuh cita rasa dengan suwir-an ayam yang nagih....",
  },
  {
    title: "Hotplate",
    description: "Menjaga Mie tetap hangat ketika masuk mulut...",
  },
  {
    title: "Sayuran Segar",
    description: "Segarnya sayur membuat makanan lebih nikmat di mulut...",
  },
];

export const contactInfo = [
  {
    icon: MapPin,
    lines: [
      "Gg balong, Jl. Kp. Pitara lama, RT.001/RW.06,",
      "Rangkapan Jaya, Kec. Pancoran Mas, Kota",
      "Depok, Jawa Barat 16435",
    ],
  },
  {
    icon: Clock,
    lines: [
      "Senin - Kamis, Sabtu - Ahad",
      "09:00 - 23:00 WIB",
      "Tutup Hari Jum'at",
    ],
  },
  {
    icon: Phone,
    lines: ["+6281319814263"],
  },
];
