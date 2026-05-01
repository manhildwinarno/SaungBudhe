import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-red-950 to-red-900">
      <div className="relative w-full min-h-[586px] md:min-h-[730px] flex justify-start items-start lg:items-center px-7 py-30 lg:p-20">
        <div className="absolute right-0 top-0 h-full w-1/2 md:w-[55%] lg:w-1/2 hidden lg:block opacity-60">
          <Image
            src="/hero mie gachoor.png"
            alt="Mie Hotplate Gachoor"
            fill
            quality={90}
            priority
            className="object-contain object-right-top"
          />
        </div>
        <div className="absolute inset-0 w-full lg:hidden opacity-30">
          <Image
            src="/menu/Mie Gachoor Keju.jpeg"
            alt="Mie Hotplate Gachoor"
            fill
            quality={80}
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-5 z-1">
          <div className="flex flex-col gap-3 md:max-w-96 lg:max-w-xl">
            <h1 className="text-[40px] font-bold text-white leading-tight">
              Sensasi Mie Hotplate yang{" "}
              <span className="text-orange-600">Panasnya Pantang Padam!</span>
            </h1>
            <p className="hidden lg:block lg:text-xl text-white">
              Nikmati gurihnya kuah tipis rahasia Mie Gachoor Mak'e. Disajikan
              mendidih di atas hotplate, nikmat dan hangat dari suapan pertama
              hingga terakhir.
            </p>
          </div>
          <Link href="#menu">
            <Button
              className={
                "bg-orange-600 p-5 w-full sm:w-36 md:w-56 lg:w-64 rounded-2xl lg:text-lg"
              }
            >
              View All Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
