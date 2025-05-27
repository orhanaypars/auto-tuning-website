"use client";
import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 text-right">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6 drop-shadow-lg underline underline-offset-8 decoration-amber-700"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Hakkımızda
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-white mb-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
      >
        İzmir Auto Tuning olarak, otomobil tutkunlarının beklentilerini aşan,
        yenilikçi ve güvenilir tuning çözümleri sunuyoruz. Yılların verdiği
        tecrübe ve uzman kadromuzla aracınızı sadece bir ulaşım aracı olmaktan
        çıkarıp, kişiliğinizi yansıtan bir yaşam alanına dönüştürüyoruz.
      </motion.p>
      <motion.p
        className="text-base md:text-lg text-white mb-4"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
      >
        Chip tuning, performans yazılımları, profesyonel ses sistemleri, egzoz
        ve süspansiyon modifikasyonları gibi birçok alanda hizmet veriyoruz.
        Müşteri memnuniyetini ve kaliteyi her zaman ön planda tutuyor, en güncel
        teknolojileri yakından takip ediyoruz.
      </motion.p>
      <motion.p
        className="text-base md:text-lg text-white mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
      >
        Aracınız için en iyisini arıyorsanız, doğru yerdesiniz. Hayalinizdeki
        otomobile bir adım daha yaklaşmak için bizimle iletişime geçin!
      </motion.p>
    </section>
  );
}

export default AboutUs;
