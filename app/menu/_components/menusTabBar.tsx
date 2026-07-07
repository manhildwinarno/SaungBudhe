import { categoriesData } from "@/lib/data";

export default function MenusTabBar() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap md:flex-nowrap">
        {categoriesData?.map((item) => (
          <button
            key={item?.title}
            className="bg-orange-600 rounded-full px-4 py-2 md:min-w-48 text-white font-semibold text-sm hover:bg-red-950"
          >
            {item?.title}
          </button>
        ))}
      </div>
    </>
  );
}
