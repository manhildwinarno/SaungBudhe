"use client";

import MenusTabBar from "./menusTabBar";
import MenuSearchBar from "./menuSearchBar";
import { useState } from "react";

export default function MenuDetailSection() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <>
      <section className="bg-red-900 overflow-hidden">
        <div className="flex-row justify-center text-center min-h-200 mt-8 p-7 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Mau pesan apa hari ini?
          </h1>
          <div className="flex justify-center p-6">
            <MenuSearchBar />
          </div>
          <div className="flex justify-center mt-7">
            <MenusTabBar />
          </div>
        </div>
      </section>
    </>
  );
}
