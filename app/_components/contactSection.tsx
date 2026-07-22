import Image from "next/image";
import { MapPin } from "lucide-react";
import { GOOGLE_MAPS_URL, EMBED_URL, contactInfo } from "@/lib/data";
import MotionWrapper from "@/components/provider/motionWrapper";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-red-950">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <MotionWrapper
            as="div"
            duration={1}
            direction="none"
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl min-h-65 sm:min-h-80 lg:min-h-0 shrink-0"
          >
            <iframe
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "260px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Mie Hotplate Gachor Mak'e"
              className="w-full h-full"
            />
          </MotionWrapper>

          <div className="flex flex-col justify-center gap-7 w-full lg:w-1/2">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Mampir ke Teras Mak'e
              </h2>
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src="/logo-gachoor.webp"
                  alt="Gachoor logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, lines }, i) => (
                <MotionWrapper
                  duration={0.7}
                  key={i}
                  className="flex items-center gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col justify-center">
                    {lines.map((line, j) => (
                      <p
                        key={j}
                        className="text-white text-sm sm:text-base leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper duration={0.8} direction="up">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start bg-orange-500 hover:bg-orange-400 active:bg-orange-600 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
