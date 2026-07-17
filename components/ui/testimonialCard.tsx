import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { TestimonialsType } from "@/lib/testimonials";

export default function TestimonialCard({
  id,
  name,
  menuName,
  rating,
  review,
}: TestimonialsType) {
  return (
    <>
      <Card
        key={id}
        size="default"
        className="h-54 md:max-w-100 md:p-2 md:flex md:justify-center md:transition-all md:duration-300 md:hover:scale-105 hover:shadow-md md:hover:shadow-white cursor-pointer"
      >
        <CardHeader className="md:justify-start">
          <CardTitle className="font-semibold ">{name}</CardTitle>
          <CardDescription className="font-medium">
            "{menuName}"
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className={
                  index < Math.floor(rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-transparent"
                }
              />
            ))}
          </div>
          <p className="text-xs font-medium">{rating}/5</p>
          <p className="text-base md:text-sm font-medium lg">{review}</p>
        </CardContent>
      </Card>
    </>
  );
}
