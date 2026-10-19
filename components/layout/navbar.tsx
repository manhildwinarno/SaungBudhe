"use client";

import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import NavLink from "@/components/ui/navLink";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { headerData } from "@/lib/data";
import { Button } from "../ui/button";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();

  if (pathname.startsWith("/studio")) return null;

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavigate = () => {
    setIsOpen(false);
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
                    className={`border-b-2 transition-colors duration-300 ${isActive ? "border-orange-600 text-orange-600" : "border-transparent text-white hover:text-orange-600/70 hover:border-orange-600"}`}
                  />
                );
              })}
            </div>
            <Button className="hidden lg:flex gap-4 bg-orange-600 text-xs font-semibold p-5">
              <ShoppingCart />
              <Link href="/menu">Order Now!</Link>
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
      <AnimatePresence>
        {isOpen && (
          // FIX MOBILE NAVBAR

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className=" backdrop-blur-xl fixed top-19 left-0 w-full h-[calc(100vh-76px)] z-50 lg:hidden bg-linear-to-b from-red-950/80 to-red-900/80 flex flex-col justify-center items-center gap-6 text-white"
          >
            {headerData?.map((link) => {
              const isActive = pathname === link.href;

              return (
                <NavLink
                  key={link?.title}
                  href={link?.href}
                  className={`mx-auto text-2xl py-6 px-8 w-full text-center font-semibold ${isActive ? "text-orange-600" : "text-white"}`}
                  title={link?.title}
                  onHashClick={handleScroll}
                  onNavigate={handleNavigate}
                />
              );
            })}
            <Button className="flex gap-4 bg-orange-600 text-lg font-semibold py-6 px-8 rounded-full">
              <ShoppingCart />
              <Link href="/menu">Order Now!</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
