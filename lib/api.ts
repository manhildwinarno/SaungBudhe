import { contactFormType } from "./schemas/contactSchema";

const BASE_URL = "http://localhost:3000";

export async function getAllMenus() {
  const res = await fetch(`${BASE_URL}/api/menu`);
  if (!res.ok) throw new Error("Failed to fetch menus");
  return res.json();
}

export async function getMenuById(id: string) {
  const res = await fetch(`${BASE_URL}/api/menu/${id}`);
  if (!res.ok) throw new Error("Failed to fetch specific menus");
  return res.json();
}

export async function getTestimonials() {
  const res = await fetch(`${BASE_URL}/api/testimonials`);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export async function sendContactForm(data: contactFormType) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.error || "Failed to send");
  return result;
}
