import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import SmoothScroll from "@/components/provider/smoothScroll";
import "./globals.css";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mie Gachoor Saung Budhe",
  description:
    "Sensasi Mie Hotplate yang Panasnya Pantang Padam! Nikmati gurihnya kuah tipis rahasia Mie Gachoor Mak'e. Cobain menu lainnya seperti Mie Mercon, Mie Kuah Nyemek, dan lainnya!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn("h-full", "antialiased", montserrat.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
