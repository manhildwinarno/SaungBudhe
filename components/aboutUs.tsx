export default function AboutUs() {
  return (
    <section id="about" className="bg-linear-to-b from-red-800 to-red-900">
      <div
        className="relative w-full max-w-6xl mx-auto"
        style={{ aspectRatio: "16 / 7" }}
      >
        <img
          src="/about_image.png"
          alt="Mie Hotplate Gachoor"
          className="hidden md:block w-full h-full object-contain"
        />

        <img
          src="/menu/Mie Gachoor Keju.jpeg"
          alt="Mie Hotplate Gachoor"
          className="block md:hidden rounded-full w-full h-full object-contain"
        />

        <div className="absolute top-[9%] left-[6%] max-w-[18%]">
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Pangsit Crispy
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Kriuk dari pangsit membuat makanan semakin nagih....
          </p>
        </div>

        <div className="absolute top-[8%] right-[0%] max-w-[20%]">
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Ayam Suwir
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Membuat mie penuh cita rasa dengan suwir-an ayam yang nagih....
          </p>
        </div>

        <div className="absolute bottom-[12%] left-[0%] max-w-[18%]">
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Hotplate
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Menjaga Mie tetap hangat ketika masuk mulut...
          </p>
        </div>

        <div className="absolute top-[72%] right-0 max-w-[20%]">
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Sayuran Segar
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Segarnya sayur membuat makanan lebih nikmat di mulut...
          </p>
        </div>
      </div>
    </section>
  );
}
