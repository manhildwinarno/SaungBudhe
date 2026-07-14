"use client";

import { useState } from "react";
import { menuType } from "@/lib/data";
import { menuItems, MenuItemsType } from "@/lib/menuItems";
import MenusTabBar from "./menusTabBar";
import MenuSearchBar from "./menuSearchBar";
import MenuCard from "@/components/ui/menuCard";
import MotionWrapper from "@/components/provider/motionWrapper";

export default function MenuDetailSection() {
  const [selectedTab, setSelectedTab] = useState<string>(
    menuType[0]?.title || "",
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredMenus = menuItems.filter(
    (item) =>
      (item?.category === selectedTab || selectedTab === "All") &&
      item?.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
    setSelectedTab("All");
  };

  return (
    <>
      <section className="bg-red-900 overflow-hidden">
        <div className="flex-row justify-center min-h-200 mt-8 p-7 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
            Mau pesan apa hari ini?
          </h1>
          <div className="flex justify-center p-6">
            <MenuSearchBar
              searchQuery={searchQuery}
              handleSearchQuery={handleSearchQuery}
            />
          </div>
          <div className="flex justify-center mt-7">
            <MenusTabBar
              selectedTab={selectedTab}
              onTabSelect={setSelectedTab}
            />
          </div>
          <MotionWrapper
            delay={1}
            className="flex flex-col md:grid md:grid-cols-3 gap-4 w-full mt-20"
          >
            {filteredMenus.length === 0 ? (
              <h1 className="text-4xl text-white text-center font-bold">
                Menu Not Found
              </h1>
            ) : (
              filteredMenus.map((item: MenuItemsType) => (
                <MenuCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  category={item.category}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))
            )}
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
