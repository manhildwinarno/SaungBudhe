import MotionWrapper from "@/components/provider/motionWrapper";
import TestimonialCard from "@/components/ui/testimonialCard";
import { Testimonials } from "@/lib/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-linear-to-b from-red-800 to-red-900"
    >
      <MotionWrapper className="w-full min-h-130 p-8 sm:p-16 md:p-18 lg:p-22">
        <h1 className="text-3xl text-white font-bold mb-8 md:mb-12 lg:mb-16">
          What Customers said...
        </h1>
        <div className="flex flex-col gap-8 md:gap-8 md:grid md:grid-cols-2 md:place-items-center lg:flex lg:flex-row">
          {Testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              id={item.id}
              name={item.name}
              menuName={item.menuName}
              rating={item.rating}
              review={item.review}
            />
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
}
