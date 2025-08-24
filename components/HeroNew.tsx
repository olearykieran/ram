"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroNew() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src="/images/bw-church-interior.jpeg"
          alt="Sacred Architecture"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot opacity-20 z-[1]" />

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center px-4"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Title with Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-dark rounded-3xl p-12 backdrop-blur-xl border border-white/10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-6 tracking-wide">
                Religious Asset
                <span className="block text-secondary font-normal mt-2">Management</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Serving Long Island&apos;s faith communities with exceptional stewardship and property solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-secondary text-black font-medium rounded-full overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Explore Our Services</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "tween", duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Schedule Consultation
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}