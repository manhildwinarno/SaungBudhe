import { defineField, defineType } from "sanity";

export const menu = defineType({
  name: "menu",
  title: "Menu Makanan",
  type: "document",
  fields: [
    defineField({
      name: "nama_makanan",
      title: "Nama Makanan",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "nama_makanan",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "harga",
      title: "Harga",
      type: "number",
    }),
    defineField({
      name: "foto",
      title: "Foto Makanan",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "deskripsi",
      title: "Deskripsi",
      type: "text",
    }),
    defineField({
      name: "kategori",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Mie Gachoor", value: "Mie Gachoor" },
          { title: "Ayam", value: "Ayam" },
          { title: "Sop", value: "Sop" },
          { title: "Jepang", value: "Jepang" },
          { title: "Snack", value: "Snack" },
          { title: "Minuman", value: "Minuman" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
