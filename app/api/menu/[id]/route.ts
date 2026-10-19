import { client } from "@/sanity/lib/client";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = await client.fetch(
    `
    *[_type == "menu" && _id == $id][0] {
        "id": _id,
        "name": nama_makanan,
        "slug": slug.current,
        "price": harga,
        "image": foto.asset->url,
        "description": deskripsi,
        "category": kategori,
    }
  `,
    { id },
  );
  if (!item) return new Response(null, { status: 404 });
  return Response.json(item);
}
