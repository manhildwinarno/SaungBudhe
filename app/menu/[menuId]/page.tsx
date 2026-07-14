import { menuItems } from "@/lib/menuItems";
import Link from "next/link";
import OtherMenusCard from "./_components/otherMenus";
import MenuDetailsCard from "./_components/menuDetailsCard";

export default async function MenuDetails({
  params,
}: {
  params: Promise<{ menuId: string }>;
}) {
  const menuId = (await params).menuId;
  const item = menuItems.find((item) => item?.id === Number(menuId));

  if (!item) {
    return (
      <>
        <div className="flex justify-center items-center min-h-130 bg-red-900">
          <h1 className="text-4xl text-white text-center font-bold">
            Menu Not Found
          </h1>
          <Link href="/menu">See all Menus</Link>
        </div>
      </>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center bg-red-900 overflow-hidden min-h-200 p-4 sm:p-8 md:p-16 lg:p-24 gap-4 md:gap-8">
      <Link
        href="/menu"
        className="self-start bg-orange-600 hover:bg-orange-950 transition-colors duration-300 text-white text-xs font-semibold rounded-xl p-2"
      >
        &larr; Back to Menu
      </Link>
      <MenuDetailsCard
        id={item.id}
        image={item.image}
        name={item.name}
        category={item.category}
        price={item.price}
        description={item.description}
      />
      <h1 className="self-start text-xl font-semibold text-white mb-1">
        Try these too!
      </h1>
      <OtherMenusCard currentId={item.id} />
    </section>
  );
}
