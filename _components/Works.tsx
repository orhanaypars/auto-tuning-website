import React from "react";
import Image from "next/image";

const works = [
  {
    title: "BMW M4 - Full Body Kit & Chip Tuning",
    image:
      "https://images.unsplash.com/photo-1626072778346-0ab6604d39c4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    award: "2024 Yılının En İyi Modifiye Projesi",
  },
  {
    title: "Audi RS6 - Ses Sistemi & LED Ambiyans",
    image:
      "https://images.unsplash.com/photo-1627508821199-5b89ca68a40d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    award: "En İyi İç Mekan Tasarımı 2023",
  },
  {
    title: "Volkswagen Golf GTI - Egzoz & Jant",
    image:
      "https://images.unsplash.com/photo-1552458693-b34517c16f32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    award: "Müşteri Memnuniyeti Ödülü",
  },
  {
    title: "Mercedes C63 AMG - Detailing & Stage2 Yazılım",
    image:
      "https://images.unsplash.com/photo-1724838818124-8c103d0e45ea?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    award: "En İyi Performans Artışı 2022",
  },
];

function Works() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 my-10 text-right drop-shadow-lg">
        Yaptığımız İşler & Alınan Ödüller
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {works.map((work, i) => (
          <div
            key={i}
            className="bg-black rounded-2xl shadow-xl p-4 flex flex-col items-center text-center border border-yellow-100 dark:border-yellow-900 hover:scale-105 transition-transform relative"
          >
            <div className="w-full h-40 md:h-48 flex items-center justify-center mb-4 bg-yellow-500/10 rounded-md overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                width={320}
                height={192}
                className="object-cover w-full h-full"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">
              {work.title}
            </h3>
            <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 animate-pulse">
              {work.award}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-white/70 text-sm">
        Daha fazla modifiyeli araç ve başarı hikayesi için bizimle iletişime
        geçin veya sosyal medya hesaplarımızı takip edin!
      </p>
    </section>
  );
}

export default Works;
