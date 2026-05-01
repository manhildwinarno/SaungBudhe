import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Mie+Hotplate+Gachor+Make+Depok";

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3!2d106.82!3d-6.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInNDguMCJTIDEwNsKwNDknMTIuMCJF!5e0!3m2!1sen!2sid!4v1234567890";

const contactInfo = [
  {
    icon: MapPin,
    lines: [
      "Gg balong, Jl. Kp. Pitara lama, RT.001/RW.06,",
      "Rangkapan Jaya, Kec. Pancoran Mas, Kota",
      "Depok, Jawa Barat 16435",
    ],
  },
  {
    icon: Clock,
    lines: [
      "Senin - Kamis, Sabtu - Ahad",
      "09:00 - 23:00 WIB",
      "Tutup Hari Jum'at",
    ],
  },
  {
    icon: Phone,
    lines: ["+6281319814263"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-linear-to-b from-red-900 to-red-950">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl min-h-[260px] sm:min-h-[320px] lg:min-h-0 flex-shrink-0">
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
          </div>

          <div className="flex flex-col justify-center gap-7 w-full lg:w-1/2">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Mampir ke Teras Mak'e
              </h2>
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/Logo_gachoor.png"
                  alt="Gachoor logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, lines }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">
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
                </div>
              ))}
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start bg-orange-500 hover:bg-orange-400 active:bg-orange-600 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
