import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="w-full min-h-[586px] md:min-h-[695px] bg-red-800 flex justify-start items-start lg:items-center px-7 py-30 lg:p-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 lg:max-w-xl">
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
              className={"bg-orange-600 p-5 lg:w-32 rounded-2xl lg:text-lg"}
            >
              Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
