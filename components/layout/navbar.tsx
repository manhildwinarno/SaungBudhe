"use client";

import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useLenis } from "lenis/react";
import BuyNowButton from "@/components/ui/buyNowButton";
import NavLink from "@/components/ui/navLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { headerData } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      if (lenis) {
        lenis.scrollTo(target);
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", target);
    } else {
      sessionStorage.setItem("scrollTarget", target);
      router.push("/", { scroll: false });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-10 w-full p-3 bg-red-950">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-gachoor.webp"
              alt="Mie Gachoor logo"
              width={60}
              height={60}
              priority
            />
          </Link>
          <div className="flex justify-center items-center gap-7">
            <div className="hidden lg:flex gap-12 text-lg font-semibold">
              {headerData?.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <NavLink
                    key={link?.title}
                    href={link?.href}
                    title={link?.title}
                    onHashClick={handleScroll}
                    className={`border-b-2 transition-colors duration-300 ${isActive ? "border-orange-600 text-orange-600" : "border-transparent text-white hover:text-orange- hover:border-orange-600"}`}
                  />
                );
              })}
            </div>
            <BuyNowButton className="hidden lg:flex bg-orange-600 text-xs font-semibold p-5" />

            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </button>
          </div>
        </div>
      </nav>
      {isOpen ? (
        <div className="fixed top-19 left-0 w-full h-[calc(100vh-76px)] z-50 lg:hidden bg-red-900 flex flex-col justify-center items-center gap-6 text-white">
          {headerData?.map((link) => (
            <NavLink
              key={link?.title}
              href={link?.href}
              className="mx-auto text-xl"
              title={link?.title}
              onHashClick={handleScroll}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
