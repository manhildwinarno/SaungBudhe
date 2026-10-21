import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MenuCardSkeleton from "@/components/ui/menuCardSkeleton";

export default function MenuSectionSkeleton() {
  return (
    <section
      id="menu"
      className="bg-linear-to-b from-orange-50 to-orange-50 dark:from-red-900 dark:to-red-800"
    >
      <div className="w-full min-h-146.5 md:min-h-163.75 flex justify-start items-start lg:items-center px-5 py-12 sm:px-12 sm:py-16 lg:p-20">
        <div className="flex flex-col gap-8 w-full">
          <h1 className="font-bold text-3xl sm:text-[40px] text-red-950 dark:text-white">
            Top <span className="text-orange-600">Gachoor</span> Menu
          </h1>
          <div>
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-3 sm:-ml-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-3 sm:pl-6 basis-[78%] sm:basis-1/2 lg:basis-1/4"
                  >
                    <MenuCardSkeleton />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="hidden lg:flex left-0 -translate-x-9 bg-white/10 hover:bg-white/20 border-0 text-red-950 dark:text-white" />
              <CarouselNext className="hidden lg:flex right-0 translate-x-9 bg-white/10 hover:bg-white/20 border-0 text-red-950 dark:text-white" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
