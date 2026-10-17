import { testimonials } from "@/lib/testimonials";

export async function GET(request: Request) {
  return Response.json(testimonials);
}
