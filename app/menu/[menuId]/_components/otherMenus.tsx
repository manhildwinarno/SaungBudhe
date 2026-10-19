import MotionWrapper from "@/components/provider/motionWrapper";
import MenuCard from "@/components/ui/menuCard";
import { MenuItemsType } from "@/lib/menuItems";

interface OtherMenusProps {
  currentId: string | number;
  menus: MenuItemsType[];
}

export default function OtherMenusCard({ currentId, menus }: OtherMenusProps) {
  const randomizedMenu = (menus || [])
    .filter((item) => item.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <MotionWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {randomizedMenu.map((item) => (
        <MenuCard
          key={item.id}
          id={item.id}
          image={item.image}
          category={item.category}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </MotionWrapper>
  );
}
