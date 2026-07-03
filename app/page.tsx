import Hero from "@/app/_components/heroSection";
import Menu from "@/app/_components/menuSection";
import AboutUs from "@/app/_components/aboutUsSection";
import Contact from "@/app/_components/contactSection";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
