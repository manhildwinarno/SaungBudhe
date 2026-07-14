import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../../components/ui/card";
import DetailButton from "../../components/ui/detailButton";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MenuItemsType } from "@/lib/menuItems";

export default function MenuCard({
  image,
  name,
  price,
  description,
  id,
}: MenuItemsType) {
  return (
    <Card
      key={id}
      className="overflow-hidden rounded-2xl border-0 p-0 bg-orange-600 flex flex-col h-full"
    >
      <div className="relative w-full h-44 sm:h-48 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-[center_66%]"
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-1 px-4 pt-4 pb-3 gap-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-white text-base sm:text-lg font-bold leading-tight">
            {name}
          </CardTitle>
          <Badge
            className="bg-red-950 text-xs text-white px-2 py-1 shrink-0"
            variant="secondary"
          >
            {price}
          </Badge>
        </div>
        <CardDescription className="text-orange-100 text-xs sm:text-sm font-medium leading-snug">
          {description}
        </CardDescription>
      </div>

      <CardFooter className="p-0 mt-auto border-none">
        <DetailButton
          id={id}
          className="w-full bg-red-950 hover:bg-red-900 active:bg-red-800 transition-colors duration-300 text-white font-semibold text-sm py-3 cursor-pointer rounded-none border-none"
        />
      </CardFooter>
    </Card>
  );
}
