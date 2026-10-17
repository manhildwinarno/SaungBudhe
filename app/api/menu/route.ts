import { menuItems } from "@/lib/menuItems";

export async function GET(request: Request) {
  return Response.json(menuItems);
}
