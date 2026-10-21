"use client";

import { useState, useEffect } from "react";
import { menuType } from "@/lib/data";
import { getAllMenus } from "@/lib/api";
import { MenuItemsType } from "@/lib/menuItems";
import MenusTabBar from "./menusTabBar";
import MenuSearchBar from "./menuSearchBar";
import MenuCard from "@/components/ui/menuCard";
import MotionWrapper from "@/components/provider/motionWrapper";

export default function MenuDetailSection() {
  const [menus, setMenus] = useState<MenuItemsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMenus().then((data) => {
      setMenus(data);
    });
    setLoading(false);
  }, []);

  const [selectedTab, setSelectedTab] = useState<string>(
    menuType[0]?.title || "",
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredMenus = menus.filter(
    (item) =>
      (item?.category === selectedTab || selectedTab === "All") &&
      item?.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSearchQuery = (value: string) => {
    setSearchQuery(value);
    setSelectedTab("All");
  };

  if (loading)
    return (
      <p className="text-red-950 dark:text-white text-center">
        Loading Menus...
      </p>
    );

  return (
    <>
      <section className="bg-orange-300/50 dark:bg-red-900 overflow-hidden">
        <div className="flex-row justify-center min-h-200 mt-8 p-8 md:p-16">
          <h1 className="text-red-950 dark:text-white text-2xl md:text-4xl font-bold text-center">
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
            delay={0.3}
            className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 w-full mt-20"
          >
            {filteredMenus.length === 0 ? (
              <h1 className="text-4xl text-red-950 dark:text-white text-center font-bold">
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
