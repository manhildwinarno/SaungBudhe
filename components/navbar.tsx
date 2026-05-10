"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lenis = useLenis();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", target);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 w-full p-3 bg-red-950">
        <div className="flex justify-between items-center">
          <Image
            src="/logo-gachoor.webp"
            alt="Mie Gachoor logo"
            width={60}
            height={60}
            priority
          />
          <div className="flex justify-center items-center gap-7">
            <div className="hidden lg:flex gap-12 text-lg font-semibold text-white">
              <a href="/" onClick={(e) => handleScroll(e, "#home")}>
                Home
              </a>
              <a href="/#menu" onClick={(e) => handleScroll(e, "#menu")}>
                Menu
              </a>
              <a href="/#about" onClick={(e) => handleScroll(e, "#about")}>
                About
              </a>
              <a href="/#contact" onClick={(e) => handleScroll(e, "#contact")}>
                Contact
              </a>
            </div>
            <Button
              className={
                "hidden lg:flex bg-orange-600 text-xs font-semibold p-5"
              }
            >
              Order Now
            </Button>

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
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="mx-auto text-xl"
          >
            Home
          </a>
          <a
            href="#menu"
            onClick={(e) => handleScroll(e, "#menu")}
            className="mx-auto text-xl"
          >
            Menu
          </a>
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
