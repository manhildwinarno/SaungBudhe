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
        className="bg-white dark:bg-white text-neutral-900 dark:text-neutral-900 border-0 h-54 md:max-w-100 md:p-2 md:flex md:justify-center md:transition-all md:duration-300 md:hover:scale-105 hover:shadow-md md:hover:shadow-white cursor-pointer"
      >
        <CardHeader className="md:justify-start">
          <CardTitle className="font-semibold text-neutral-900 dark:text-neutral-900">
            {name}
          </CardTitle>
          <CardDescription className="font-medium text-neutral-500 dark:text-neutral-500">
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
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-600">
            {rating}/5
          </p>
          <p className="text-base md:text-sm font-medium text-neutral-800 dark:text-neutral-800">
            {review}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
