import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { menuItems, MenuItemsType } from "@/public/menuItems";
import { Badge } from "./ui/badge";
import Image from "next/image";

export default function Menu() {
  return (
    <section id="menu">
      <div className="w-full min-h-[586px] md:min-h-[655px] bg-red-800 flex justify-start items-start lg:items-center px-4 py-12 sm:px-7 sm:py-16 lg:p-20">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="font-bold text-3xl sm:text-[40px] text-white">
            Top <span className="text-orange-600">Gachoor</span> Menu
          </h1>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-3 sm:-ml-4">
              {menuItems.map((item: MenuItemsType) => (
                <CarouselItem
                  key={item.id}
                  className="pl-3 sm:pl-4 basis-[78%] sm:basis-1/2 lg:basis-1/4"
                >
                  <Card className="overflow-hidden rounded-2xl border-0 p-0 bg-orange-600 flex flex-col h-full">
                    <div className="relative w-full h-44 sm:h-48 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover object-[center_66%]"
                        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="flex flex-col flex-1 px-4 pt-4 pb-3 gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-white text-base sm:text-lg font-bold leading-tight">
                          {item.name}
                        </CardTitle>
                        <Badge
                          className="bg-red-950 text-xs text-white px-2 py-1 shrink-0"
                          variant="secondary"
                        >
                          {item.price}
                        </Badge>
                      </div>
                      <CardDescription className="text-orange-100 text-xs sm:text-sm leading-snug">
                        {item.description}
                      </CardDescription>
                    </div>

                    <CardFooter className="p-0 mt-auto border-none">
                      <button className="w-full bg-red-950 hover:bg-red-900 active:bg-red-800 transition-colors text-white font-semibold text-sm py-3 cursor-pointer">
                        Buy Now
                      </button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex left-0 -translate-x-9 bg-white/10 hover:bg-white/20 border-0 text-white" />
            <CarouselNext className="hidden sm:flex right-0 translate-x-9 bg-white/10 hover:bg-white/20 border-0 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
