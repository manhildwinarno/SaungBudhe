"use client";

import { Button } from "../../components/ui/button";
import Image from "next/image";
import { useLenis } from "lenis/react";
import MotionWrapper from "../../components/provider/motionWrapper";

export default function HeroSection() {
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#menu");
    } else {
      document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", "#menu");
  };

  return (
    <section id="home" className="bg-linear-to-b from-red-950 to-red-900">
      <div className="relative w-full min-h-146.5 md:min-h-182.5 flex justify-start items-start lg:items-center px-7 py-30 lg:p-20">
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-[55%] lg:w-1/2 hidden lg:block opacity-60">
          <Image
            src="/hero-image.webp"
            alt="Mie Hotplate Gachoor"
            fill
            quality={90}
            priority
            className="object-contain object-top-right"
          />
        </div>
        <div className="absolute inset-0 w-full lg:hidden opacity-30">
          <Image
            src="/menu/mie-gachoor-keju.webp"
            alt="Mie Hotplate Gachoor"
            fill
            quality={80}
            priority
            className="object-cover object-center"
          />
        </div>
        <MotionWrapper
          duration={1}
          className="flex flex-col justify-center gap-5 z-1"
        >
          <div className="flex flex-col gap-3 md:max-w-2xl lg:max-w-xl">
            <h1 className="text-[40px] font-bold text-white leading-tight">
              Sensasi Mie Hotplate yang{" "}
              <span className="text-orange-600">Panasnya Pantang Padam!</span>
            </h1>
            <p className="text-lg lg:text-xl font-medium text-white md:pr-16 lg:pr-20">
              Nikmati gurihnya kuah tipis rahasia Mie Gachoor Mak'e. Disajikan
              mendidih di atas hotplate, nikmat dan hangat dari suapan pertama
              hingga terakhir.
            </p>
          </div>
          <a href="#menu" onClick={handleScroll}>
            <Button
              className={
                "bg-orange-600 p-5 w-full sm:w-36 md:w-56 lg:w-64 rounded-2xl font-medium lg:text-lg hover:bg-orange-700"
              }
            >
              View All Menu
            </Button>
          </a>
        </MotionWrapper>
      </div>
    </section>
  );
}
