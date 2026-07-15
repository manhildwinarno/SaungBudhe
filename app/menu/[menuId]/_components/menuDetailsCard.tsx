"use client";

import { Badge } from "@/components/ui/badge";
import { MenuItemsType } from "@/lib/menuItems";
import MotionWrapper from "@/components/provider/motionWrapper";
import BuyNowButton from "@/components/ui/buyNowButton";
import Image from "next/image";
import SpiceOrder from "@/components/ui/spiceOrder";
import { useState } from "react";

export default function MenuDetailsCard({
  image,
  name,
  category,
  price,
  description,
}: MenuItemsType) {
  const [spiceLevel, setSpiceLevel] = useState(0);
  const [hoveredLevel, setHoverLevel] = useState(0);

  return (
    <MotionWrapper className="bg-orange-600 grid md:grid-cols-[450px_1fr] gap-2 w-full rounded-3xl overflow-hidden mb-12">
      <div className="relative h-64 md:h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-[center_90%] rounded-l-3xl"
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col justify-start font-medium text-white gap-5 px-8 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <Badge className="text-sm p-4 font-semibold">{category}</Badge>
        </div>
        {category === "Mie Gachoor" && (
          <div className="flex items-center">
            <SpiceOrder
              spiceLevel={spiceLevel}
              handleSpiceLevel={setSpiceLevel}
              hoveredLevel={hoveredLevel}
              setHoveredLevel={setHoverLevel}
            />
          </div>
        )}
        <p className="text-xl font-bold">{price}</p>
        <p className="text-lg font-light">{description}</p>
        <hr className="h-px my-8 bg-slate-200 border-0 dark:bg-slate-700" />

        <BuyNowButton
          spiceLevel={spiceLevel}
          itemName={name}
          className="py-5 rounded-full bg-red-950 hover:bg-red-900 active:bg-red-800 transition-colors duration-300"
        />
      </div>
    </MotionWrapper>
  );
}
