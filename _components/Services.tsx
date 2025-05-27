"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Chip Tuning & Yazılım",
    description:
      "Aracınızın motor performansını artırmak ve yakıt verimliliğini optimize etmek için profesyonel chip tuning ve yazılım hizmetleri sunuyoruz.",
    icon: "🚗",
  },
  {
    title: "Ses & Hoparlör Sistemleri",
    description:
      "Yüksek kaliteli hoparlör, amfi ve subwoofer montajı ile aracınızda konser kalitesinde müzik keyfi yaşayın.",
    icon: "🔊",
  },
  {
    title: "Egzoz & Performans Parçaları",
    description:
      "Sportif egzoz sistemleri, filtreler ve performans parçaları ile aracınızın gücünü ve sesini artırın.",
    icon: "🏁",
  },
  {
    title: "Süspansiyon & Jant Lastik",
    description:
      "Konfor ve yol tutuşunu artıran süspansiyon çözümleri, şık jant ve lastik seçenekleri.",
    icon: "🛞",
  },
  {
    title: "Detaylı Temizlik & Detailing",
    description:
      "Aracınızın iç ve dış görünümünü yenileyen profesyonel temizlik ve koruma uygulamaları.",
    icon: "✨",
  },
  {
    title: "Araç İçi Ambiyans & LED Aydınlatma",
    description:
      "Kişiselleştirilebilir LED aydınlatma ve ambiyans çözümleriyle aracınızda modern ve şık bir atmosfer oluşturun.",
    icon: "💡",
  },
];

function Services() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-yellow-500 mb-10 text-left drop-shadow-lg underline underline-offset-8 decoration-amber-700"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Hizmetlerimiz
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-black rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform border border-yellow-100 dark:border-yellow-900 xl:p-10 xl:gap-4 xl:min-h-[340px] xl:justify-between xl:items-center xl:shadow-2xl xl:hover:scale-110 xl:transition-all xl:duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.7, type: "spring" }}
          >
            <motion.div
              className="text-5xl mb-4 xl:mb-6 xl:text-6xl drop-shadow-xl text-yellow-500"
              initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.6, type: "spring" }}
            >
              {service.icon}
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-yellow-500 mb-2 xl:text-2xl xl:mb-3 xl:font-bold xl:tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 * i, duration: 0.6, type: "spring" }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-white text-base xl:text-lg xl:leading-relaxed xl:px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 * i, duration: 0.6, type: "spring" }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
