import MotionWrapper from "@/components/provider/motionWrapper";
import { menuType } from "@/lib/data";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

export default function MenusTabBar({ selectedTab, onTabSelect }: Props) {
  return (
    <>
      <MotionWrapper
        direction="right"
        className="flex justify-center items-center gap-2 md:gap-4 flex-wrap"
      >
        {menuType?.map((item) => (
          <button
            key={item.title}
            onClick={() => onTabSelect(item.title)}
            className={`rounded-full px-6 py-2 text-white font-semibold text-base hover:bg-red-950 transition-colors duration-300 ${selectedTab === item.title ? "bg-red-950" : "bg-orange-600"}`}
          >
            {item.title}
          </button>
        ))}
      </MotionWrapper>
    </>
  );
}
