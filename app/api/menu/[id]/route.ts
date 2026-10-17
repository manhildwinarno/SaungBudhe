import { menuItems } from "@/lib/menuItems";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = menuItems.find((item) => item.id === Number(id));
  if (!item) return new Response(null, { status: 404 });
  return Response.json(item);
}
