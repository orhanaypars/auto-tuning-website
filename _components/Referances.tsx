import React from "react";
import Image from "next/image";

const brands = [
  {
    name: "Pioneer",
    logo: "/pioneer-logo.png",
    url: "https://www.pioneer.com/",
  },
  {
    name: "Alpine",
    logo: "/alpine-logo.png",
    url: "https://www.alpine.com/",
  },
  {
    name: "Sony",
    logo: "/sony-logo.png",
    url: "https://www.sony.com.tr/",
  },
  {
    name: "JBL",
    logo: "/jbl-logo.png",
    url: "https://www.jbl.com.tr/",
  },
  {
    name: "Kenwood",
    logo: "/kenwood-logo.png",
    url: "https://www.kenwood.com/",
  },
  {
    name: "Bosch",
    logo: "/bosch-logo.png",
    url: "https://www.bosch.com.tr/",
  },
];

function Referances() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-2 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 my-10 text-left drop-shadow-lg">
        İş Birliklerimiz & Referanslarımız
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10 items-center justify-center ">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-28 h-16 md:w-32 md:h-20 flex items-center justify-center bg-white rounded-md p-2 drop-shadow-md transition-all duration-300 grayscale group-hover:grayscale-0">
              <Image
                src={brand.logo}
                alt={brand.name + " logo"}
                width={120}
                height={48}
                className="object-contain w-full h-full"
                loading="lazy"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
            <span className="mt-2 text-xs md:text-sm text-white opacity-70 group-hover:opacity-100 transition-all text-center">
              {brand.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Referances;
