import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Nama minimal 2 karakter" }),
  email: z.string().email({ message: "Masukkan alamat email yang valid" }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
});

export type contactFormType = z.infer<typeof contactSchema>;
