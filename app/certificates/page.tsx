import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import ScrollPop from "../components/ScrollPop";

const certificates = [
  {
    title: "NIT Certificate",
    issuer: "Nit",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776332878/nit_dnf5ly.png",
  },
  {
    title: "Wipro Certificate",
    issuer: "Wipro",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320094/wipro_ir5qh5.png",
  },
  {
    title: "Spark Certificate",
    issuer: "Spark",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320094/spark_certificate_ijyr0e.jpg",
  },
  {
    title: "Rinex Certificate",
    issuer: "Rinex",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320093/rinex_pic_a9wvsd.png",
  },
  {
    title: "Sairam Certificate",
    issuer: "Sairam",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320094/sairam_t9ths9.jpg",
  },
  {
    title: "Pixelplay Certificate",
    issuer: "Pixelplay",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320094/pixelplay_sgkvux.jpg",
  },
  {
    title: "MERN Certificate",
    issuer: "MERN",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320093/mern_bzgq5w.jpg",
  },
  {
    title: "IBM Certificate",
    issuer: "IBM",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320092/ibm_t8jjg5.jpg",
  },
  {
    title: "AI Film Certificate",
    issuer: "AI Film",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320093/aiflim_trohc9.jpg",
  },
  {
    title: "Infosys Certificate",
    issuer: "Infosys",
    image: "https://res.cloudinary.com/dtpl599ko/image/upload/v1776320092/infosys_bj8mtx.png",
  },
];

export const metadata: Metadata = {
  title: "Certificates | Sugeshan S",
  description: "A collection of certificates and achievements.",
};

export default function CertificatesPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />

      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Certificates and achievements in one place.
              </h1>
            </div>

            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Back to home
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate, index) => (
              <ScrollPop key={certificate.title} delay={index * 0.06}>
                <article
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                >
                  <div className="relative aspect-[4/3] bg-[#0a0712] p-4">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-t border-white/10 px-5 py-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {certificate.title}
                      </h2>
                      <p className="text-sm text-white/65">{certificate.issuer}</p>
                    </div>
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-200">
                      Certificate
                    </span>
                  </div>
                </article>
              </ScrollPop>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}