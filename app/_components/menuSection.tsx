import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import BuyNowButton from "../../components/ui/buyNowButton";
import { menuItems, MenuItemsType } from "@/lib/menuItems";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import MotionWrapper from "../../components/provider/motionWrapper";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-linear-to-b from-red-900 to-red-800">
      <div className="w-full min-h-146.5 md:min-h-163.75 flex justify-start items-start lg:items-center px-4 py-12 sm:px-7 sm:py-16 lg:p-20">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="font-bold text-3xl sm:text-[40px] text-white">
            Top <span className="text-orange-600">Gachoor</span> Menu
          </h1>
          <MotionWrapper direction="right" duration={1}>
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-3 sm:-ml-4">
                {menuItems.map((item: MenuItemsType) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-3 sm:pl-4 basis-[78%] sm:basis-1/2 lg:basis-1/4"
                  >
                    <Card className="overflow-hidden rounded-2xl border-0 p-0 bg-orange-600 flex flex-col h-full">
                      <div className="relative w-full h-44 sm:h-48 shrink-0">
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
                        <CardDescription className="text-orange-100 text-xs sm:text-sm font-medium leading-snug">
                          {item.description}
                        </CardDescription>
                      </div>

                      <CardFooter className="p-0 mt-auto border-none">
                        <BuyNowButton
                          itemName={item.name}
                          className="w-full bg-red-950 hover:bg-red-900 active:bg-red-800 transition-colors text-white font-semibold text-sm py-3 cursor-pointer rounded-none border-none"
                        />
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden sm:flex left-0 -translate-x-9 bg-white/10 hover:bg-white/20 border-0 text-white" />
              <CarouselNext className="hidden sm:flex right-0 translate-x-9 bg-white/10 hover:bg-white/20 border-0 text-white" />
            </Carousel>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
