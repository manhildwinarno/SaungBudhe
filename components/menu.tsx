import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { menuItems, MenuItemsType } from "@/public/menuItems";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Menu() {
  return (
    <>
      <div className="w-full min-h-[586px] md:min-h-[655px] bg-red-800 flex justify-start items-start lg:items-center px-7 py-30 lg:p-20">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="font-bold text-[40px] text-white">
            Top <span className="text-orange-600">Gachoor</span> Menu
          </h1>
          <div className="">
            <Carousel
              className="w-full max-w-[12rem] sm:max-w-xs md:max-w-full"
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-1">
                {menuItems.map((item: MenuItemsType) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="relative mx-auto w-full max-w-lg pt-0">
                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                        <img
                          src="https://avatar.vercel.sh/shadcn1"
                          alt={item.name}
                          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <CardHeader>
                          <CardAction>
                            <Badge variant="secondary">{item.price}</Badge>
                          </CardAction>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button className="w-full">Buy Now</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
