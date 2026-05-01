import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-red-950 min-h-[185px] flex flex-col lg:flex-row justify-center lg:justify-around items-center text-white p-7 gap-3">
      <div className="hidden lg:flex flex-col justify-center max-w-52">
        <Image
          src="/Logo_gachoor.png"
          alt="Logo Mie Gachoor"
          width={80}
          height={80}
        />
        <p>
          Sensasi Mie Hotplate yang{" "}
          <span className="text-orange-600">Panasnya Pantang Padam!</span>
        </p>
      </div>
      <div className="hidden lg:flex flex-col justify-center lg:self-start font-medium gap-3">
        <p>PAGE</p>
        <Link href="/" className="text-gray-300">
          Home
        </Link>
        <Link href="/#menu" className="text-gray-300">
          Menu
        </Link>
        <Link href="/#about" className="text-gray-300">
          About
        </Link>
        <Link href="/#contact" className="text-gray-300">
          Contact
        </Link>
      </div>
      <div className="hidden lg:flex flex-col justify-center self-start gap-3">
        <p>SUPPORT</p>
        <a className="text-gray-300" href="">
          Privacy Policy
        </a>
        <a className="text-gray-300" href="">
          Terms of Use
        </a>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-start lg:self-start gap-2">
        <p>Connect with us!</p>
        <p>+628128121</p>
        <div className="flex items-center mt-1 mb-1 justify-between w-full lg:max-w-39">
          <FaInstagram className="text-2xl" />
          <FaTiktok className="text-2xl" />
          <FaWhatsapp className="text-2xl" />
        </div>
        <p>Ikuti keseharian dan promo kami!</p>
      </div>
      <div className="flex flex-col justify-center items-center lg:self-start lg:text-right gap-2">
        <div className="hidden lg:flex flex-col justify-center self-end gap-2">
          <p>OpenHours</p>
          <p>Senin-Kamis, Sabtu-Ahad</p>
          <p>09:00-23:00 WIB</p>
          <p>Tutup Hari Jum'at</p>
        </div>
        <p className="block text-gray-300 text-center lg:text-right">
          &copy; 2026 Mie Gachoor Saung Budhe. Didesain oleh Manhillih
        </p>
      </div>
    </footer>
  );
}
