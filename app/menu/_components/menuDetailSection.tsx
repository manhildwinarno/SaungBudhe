"use client";

import MenusTabBar from "./menusTabBar";
import MenuSearchBar from "./menuSearchBar";
import { useState } from "react";
import { menuType } from "@/lib/data";
import { menuItems, MenuItemsType } from "@/lib/menuItems";
import MenuCard from "@/components/ui/menuCard";

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

  console.log(filteredMenus);

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
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="flex justify-center mt-7">
            <MenusTabBar
              selectedTab={selectedTab}
              onTabSelect={setSelectedTab}
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 w-full mt-20">
            {filteredMenus.length === 0 ? (
              <h1>Menu masih kosong</h1>
            ) : (
              filteredMenus?.map((item: MenuItemsType) => (
                <MenuCard
                  key={item?.id}
                  id={item?.id}
                  image={item?.image}
                  category={item?.category}
                  name={item?.name}
                  description={item?.description}
                  price={item?.price}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
