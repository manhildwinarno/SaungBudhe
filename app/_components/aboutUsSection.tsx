import MotionWrapper from "../../components/provider/motionWrapper";

interface DetailsType {
  title: string;
  description: string;
}

const details: DetailsType[] = [
  {
    title: "Pangsit Crispy",
    description: "Kriuk dari pangsit membuat makanan semakin nagih....",
  },
  {
    title: "Ayam Suwir",
    description:
      "Membuat mie penuh cita rasa dengan suwir-an ayam yang nagih....",
  },
  {
    title: "Hotplate",
    description: "Menjaga Mie tetap hangat ketika masuk mulut...",
  },
  {
    title: "Sayuran Segar",
    description: "Segarnya sayur membuat makanan lebih nikmat di mulut...",
  },
];

export default function AboutUsSection() {
  return (
    <section
      id="about"
      className="bg-linear-to-b from-red-800 to-red-900 py-12 lg:py-0"
    >
      <MotionWrapper
        direction="none"
        duration={1}
        className="hidden lg:block relative w-full max-w-6xl mx-auto aspect-16/7"
      >
        <img
          src="/about-image.webp"
          alt="Mie Hotplate Gachoor"
          className="w-full h-full object-contain"
          loading="lazy"
        />

        <MotionWrapper
          duration={0.8}
          className="absolute top-[9%] left-[6%] max-w-[18%]"
        >
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Pangsit Crispy
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Kriuk dari pangsit membuat makanan semakin nagih....
          </p>
        </MotionWrapper>

        <MotionWrapper
          duration={0.8}
          className="absolute top-[8%] right-[0%] max-w-[20%]"
        >
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Ayam Suwir
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Membuat mie penuh cita rasa dengan suwir-an ayam yang nagih....
          </p>
        </MotionWrapper>

        <MotionWrapper
          duration={0.8}
          className="absolute bottom-[12%] left-[0%] max-w-[18%]"
        >
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Hotplate
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Menjaga Mie tetap hangat ketika masuk mulut...
          </p>
        </MotionWrapper>

        <MotionWrapper
          duration={0.8}
          className="absolute top-[72%] right-0 max-w-[20%]"
        >
          <h3 className="text-white font-bold text-[clamp(0.75rem,1.8vw,1.5rem)] leading-tight">
            Sayuran Segar
          </h3>
          <p className="text-white/70 text-[clamp(0.6rem,1.2vw,1rem)] mt-1 leading-snug">
            Segarnya sayur membuat makanan lebih nikmat di mulut...
          </p>
        </MotionWrapper>
      </MotionWrapper>

      <div className="block lg:hidden w-full px-6 md:px-12 max-w-4xl mx-auto">
        <img
          src="/about-image-2.webp"
          alt="Mie Hotplate Gachoor"
          className="block mx-auto rounded-[3rem] w-72 md:w-96 object-cover mb-12 shadow-lg"
          loading="lazy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12">
          {details.map((item, idx) => (
            <MotionWrapper
              duration={0.8}
              key={idx}
              className="flex items-start gap-4"
            >
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-orange-600 mt-2 shrink-0" />
              <div>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
