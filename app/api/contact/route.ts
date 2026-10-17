import { contactSchema, contactFormType } from "@/lib/schemas/contactSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message || "Validasi gagal" },
        { status: 400 },
      );
    }
    console.log("Contact:", result.data);
    return Response.json(
      { success: true, message: "Pesan berhasil dikirim" },
      { status: 201 },
    );
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}
