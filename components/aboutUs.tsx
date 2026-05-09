export default function AboutUs() {
  const details = [
    {
      title: "Pangsit Crispy",
      desc: "Kriuk dari pangsit membuat makanan semakin nagih....",
    },
    {
      title: "Ayam Suwir",
      desc: "Membuat mie penuh cita rasa dengan suwir-an ayam yang nagih....",
    },
    {
      title: "Hotplate",
      desc: "Menjaga Mie tetap hangat ketika masuk mulut...",
    },
    {
      title: "Sayuran Segar",
      desc: "Segarnya sayur membuat makanan lebih nikmat di mulut...",
    },
  ];

  return (
    <section
      id="about"
      className="bg-linear-to-b from-red-800 to-red-900 py-12 lg:py-0"
    >
      <div
        className="hidden lg:block relative w-full max-w-6xl mx-auto"
        style={{ aspectRatio: "16 / 7" }}
      >
        <img
          src="/about_image.png"
          alt="Mie Hotplate Gachoor"
          className="w-full h-full object-contain"
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

      <div className="block lg:hidden w-full px-6 md:px-12 max-w-4xl mx-auto">
        <img
          src="/about_image-2.png"
          alt="Mie Hotplate Gachoor"
          className="block mx-auto rounded-[3rem] w-72 md:w-96 object-cover mb-12 shadow-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12">
          {details.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500 mt-2 shrink-0" />
              <div>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
