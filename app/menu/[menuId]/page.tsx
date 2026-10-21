import { getAllMenus, getMenuById } from "@/lib/api";
import Link from "next/link";
import OtherMenusCard from "./_components/otherMenus";
import MenuDetailsCard from "./_components/menuDetailsCard";
import MotionWrapper from "@/components/provider/motionWrapper";

export default async function MenuDetails({
  params,
}: {
  params: Promise<{ menuId: string }>;
}) {
  const menuId = (await params).menuId;
  const item = await getMenuById(menuId);
  const allMenus = await getAllMenus();

  if (!item) {
    return (
      <>
        <div className="flex justify-center items-center min-h-130 bg-orange-300/50 dark:bg-red-900">
          <h1 className="text-4xl text-red-950 dark:text-white text-center font-bold">
            Menu Not Found
          </h1>
          <Link href="/menu">See all Menus</Link>
        </div>
      </>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center bg-orange-300/50 dark:bg-red-900 overflow-hidden min-h-200 p-4 sm:p-8 md:p-16 lg:p-24 gap-4 md:gap-8">
      <Link
        href="/menu"
        className="self-start bg-red-950 hover:bg-red-900 dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-300 text-white text-xs font-semibold rounded-xl p-3"
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
      <MotionWrapper
        as="h1"
        direction="right"
        className="self-start text-xl font-extrabold text-red-950 dark:text-white mb-1"
      >
        Try these too!
      </MotionWrapper>
      <OtherMenusCard currentId={item.id} menus={allMenus} />
    </section>
  );
}
