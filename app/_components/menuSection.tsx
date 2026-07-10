import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import MenuCard from "@/components/ui/menuCard";
import { menuItems, MenuItemsType } from "@/lib/menuItems";
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
                {menuItems.slice(0, 5).map((item: MenuItemsType) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-3 sm:pl-4 basis-[78%] sm:basis-1/2 lg:basis-1/4"
                  >
                    <MenuCard
                      id={item?.id}
                      image={item?.image}
                      name={item?.name}
                      price={item?.price}
                      description={item?.description}
                    />
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
