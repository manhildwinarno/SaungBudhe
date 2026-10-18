import { Suspense } from "react";
import Hero from "@/app/_components/heroSection";
import Menu from "@/app/_components/menuSection";
import MenuSectionSkeleton from "@/app/_components/menuSectionSkeleton";
import Testimonials from "./_components/testimonialsSection";
import AboutUs from "@/app/_components/aboutUsSection";
import Contact from "@/app/_components/contactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<MenuSectionSkeleton />}>
        <Menu />
      </Suspense>
      <Testimonials />
      <AboutUs />
      <Contact />
    </>
  );
}
