import Image from "next/image";

export default function AboutUs() {
  return (
    <section>
      <div className="flex justify-center items-center bg-red-800 w-full min-h-[500px]">
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
