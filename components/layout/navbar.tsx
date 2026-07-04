"use client";

import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useLenis } from "lenis/react";
import BuyNowButton from "../ui/buyNowButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    setIsOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target);
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", target);
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
            <div className="hidden lg:flex gap-12 text-lg font-semibold text-white">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <a href="/#about" onClick={(e) => handleScroll(e, "#about")}>
                About
              </a>
              <a href="/#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Contact
              </a>
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
          <Link href="/" className="mx-auto text-xl">
            Home
          </Link>
          <Link href="/menu" className="mx-auto text-xl">
            Menu
          </Link>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="mx-auto text-xl"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="mx-auto text-xl"
          >
            Contact
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
