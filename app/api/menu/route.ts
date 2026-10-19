import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  const menuItems = await client.fetch(`
        *[_type == "menu"] {
            "id": _id,
            "name": nama_makanan,
            "slug": slug.current,
            "price": harga,
            "image": foto.asset->url,
            "description": deskripsi,
            "category": kategori,
        }
    `);
  return Response.json(menuItems);
}
