"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    title: "Pioneer Hoparlör Seti",
    description:
      "Yüksek kaliteli ses deneyimi için Pioneer marka hoparlör seti.",
    image: "/hero-speaker.png",
    price: "3.500 TL",
  },
  {
    title: "Stage1 Chip Tuning Kiti",
    description: "Güç ve verimlilik için profesyonel chip tuning yazılımı.",
    image:
      "https://images.unsplash.com/photo-1673099873446-f05ed818c9b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "4.900 TL",
  },
  {
    title: "LED Ambiyans Aydınlatma",
    description: "Aracınızın içini kişiselleştirin, renkli LED ambiyans seti.",
    image:
      "https://images.unsplash.com/photo-1572249930263-64fc5bbdb14b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1.200 TL",
  },
  {
    title: "Spor Egzoz Ucu",
    description: "Sportif görünüm ve güçlü ses için paslanmaz egzoz ucu.",
    image:
      "https://images.unsplash.com/photo-1692309175422-b9d614f4764e?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "950 TL",
  },
];

function Products() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 md:px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-yellow-500 mb-10 text-right drop-shadow-lg underline underline-offset-8 decoration-amber-700"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Stoktaki Ürünler
      </motion.h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <motion.div
            key={i}
            className="bg-black rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border border-yellow-100 dark:border-yellow-900 hover:scale-105 transition-transform relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.7, type: "spring" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 8px 32px 0 rgba(255, 193, 7, 0.25)",
            }}
          >
            {/* Sol üstte indirim etiketi */}
            <span className="absolute left-4 top-4 inline-block bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse shadow-lg">
              %37 İndirim
            </span>
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 bg-yellow-500/10 rounded-full overflow-hidden"
              initial={{ scale: 0.7, rotate: -10, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 6 }}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={160}
                height={160}
                className="object-cover w-full h-full"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </motion.div>
            <motion.h3
              className="text-lg font-semibold text-yellow-500 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 * i, duration: 0.6, type: "spring" }}
            >
              {product.title}
            </motion.h3>
            <motion.p
              className="text-white text-base mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 * i, duration: 0.6, type: "spring" }}
            >
              {product.description}
            </motion.p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-300 text-base font-semibold line-through">
                {(
                  parseInt(product.price.replace(/\D/g, "")) * 1.3
                ).toLocaleString("tr-TR")}{" "}
                TL
              </span>
              <motion.span
                className="text-yellow-400 font-bold text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 * i, duration: 0.5, type: "spring" }}
              >
                {product.price}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Products;
