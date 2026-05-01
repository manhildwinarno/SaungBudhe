import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-linear-to-b from-red-800 to-red-900">
      <div className="flex justify-center items-center w-full min-h-[500px]">
        <Image
          src="/about mie hotplate gachoor.png"
          alt="Mie Hotplate Gachoor"
          width={600}
          height={600}
        />
        {/* <h3 className=" font-bold text-white text-3xl translate">
          Ayam Suwir
        </h3> */}
      </div>
    </section>
  );
}
