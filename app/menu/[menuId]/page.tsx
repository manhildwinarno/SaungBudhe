import { menuItems } from "@/lib/menuItems";

export default async function MenuDetails({
  params,
}: {
  params: Promise<{ menuId: string }>;
}) {
  const menuId = (await params).menuId;
  const item = menuItems.find((item) => item?.id === Number(menuId));

  console.log(item);

  return (
    <section className="bg-red-900 overflow-hidden min-h-150">
      <p className="text-center text-3xl text-white">
        Details about menu {item?.name}
      </p>
    </section>
  );
}
