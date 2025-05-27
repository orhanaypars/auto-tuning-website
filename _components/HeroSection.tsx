"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-8 min-h-screen max-w-6xl mx-auto mt-16">
      {/* Left: Text */}
      <motion.div
        className="flex-1 flex flex-col items-start justify-center text-center md:text-left mb-8 md:mb-0"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        >
          Müziği hissedin, performansı yükseltin!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white mb-6 max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
        >
          İzmir Auto Tuning olarak, araçlarınızı sadece bir ulaşım aracı
          olmaktan çıkarıp, bir yaşam alanına dönüştürüyoruz. En kaliteli
          hoparlör sistemleri ve tuning hizmetlerimizle müzik keyfinizi zirveye
          taşıyoruz.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
        >
          Hemen Teklif Al
        </motion.a>
      </motion.div>
      {/* Right: Image */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{
            scale: [1, 1.12, 0.96, 1.08, 1],
            rotate: [-10, -8, -12, -10],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.7,
          }}
          className="relative"
        >
          {/* Şık bir arka plan efekti */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="rounded-full bg-yellow-400/30 blur-2xl w-60 h-60 md:w-96 md:h-96 animate-pulse" />
            {/* Ses dalgaları efekti */}
            <div className="absolute left-4 top-4 z-20">
              <motion.span
                className="block rounded-full border-2 border-yellow-400/70"
                style={{ width: 32, height: 32 }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.2, 0.7] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="block rounded-full border-2 border-yellow-300/50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: 48, height: 48 }}
                animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0.1, 0.5] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.span
                className="block rounded-full border-2 border-yellow-200/30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: 64, height: 64 }}
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0.05, 0.3] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </div>
          {/* Hoparlör görseli */}
          <div className="relative z-10 rounded-full shadow-2xl border-8 border-white/80 dark:border-black/60 overflow-hidden">
            <Image
              src="/hero-speaker.png"
              alt="Hoparlör görseli"
              width={384}
              height={384}
              className="w-48 h-48 md:w-80 md:h-80 object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
