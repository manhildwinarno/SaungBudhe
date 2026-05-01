"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="sticky top-0 z-10 w-full p-3 bg-red-950">
        <div className="flex justify-between items-center">
          <Image
            src="/Logo_gachoor.png"
            alt="Mie Gachoor logo"
            width={60}
            height={60}
            priority
          />
          <div className="flex justify-center items-center gap-7">
            <div className="hidden lg:flex gap-12 text-lg font-medium text-white">
              <Link href="/">Home</Link>
              <Link href="/#menu">Menu</Link>
              <Link href="/#about">About</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <Button className={"hidden lg:flex bg-orange-600 p-5"}>
              Order Now
            </Button>

            <button
              className="lg:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger />
            </button>
          </div>
        </div>
      </nav>
      {isOpen ? (
        <div className="fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] z-50 lg:hidden bg-red-900 flex flex-col justify-center items-center gap-6 text-white">
          <Link href="/" className="mx-auto">
            Home
          </Link>
          <Link href="/#menu" className="mx-auto">
            Menu
          </Link>
          <Link href="/#about" className="mx-auto">
            About
          </Link>
          <Link href="/#contact" className="mx-auto">
            Contact
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
