"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, Church, Shield, Clock, Users } from "lucide-react";

export default function HeroCrossAlt() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const crossScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image - Faded with white overlay for corners */}
      <div className="absolute inset-0 z-0 bg-white/70">
        <Image
          src="/images/St.-Agnes-Exterior.jpg"
          alt="Sacred Architecture"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Cross Shape with Brighter Image Inside */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        style={{ scale: crossScale, opacity }}
      >
        {/* SVG Mask for Cross Shape */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="crossMask">
              {/* White area = visible, Black area = hidden */}
              <rect width="100" height="100" fill="black" />
              {/* Vertical bar of cross */}
              <rect x="40" y="0" width="20" height="100" fill="white" />
              {/* Horizontal bar of cross */}
              <rect x="0" y="40" width="100" height="20" fill="white" />
            </mask>
          </defs>
        </svg>

        {/* Brighter Image Inside Cross */}
        <div 
          className="absolute inset-0"
          style={{
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Crect x='40' y='0' width='20' height='100' fill='white'/%3E%3Crect x='0' y='40' width='100' height='20' fill='white'/%3E%3C/svg%3E")`,
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Crect x='40' y='0' width='20' height='100' fill='white'/%3E%3Crect x='0' y='40' width='100' height='20' fill='white'/%3E%3C/svg%3E")`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          <Image
            src="/images/St.-Agnes-Exterior.jpg"
            alt="Sacred Architecture"
            fill
            className="object-cover opacity-90"
          />
          {/* Green tint overlay */}
          <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay" />
        </div>

        {/* Cross Border Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Crect x='39.5' y='0' width='21' height='100' fill='white'/%3E%3Crect x='0' y='39.5' width='100' height='21' fill='white'/%3E%3C/svg%3E")`,
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Crect x='39.5' y='0' width='21' height='100' fill='white'/%3E%3Crect x='0' y='39.5' width='100' height='21' fill='white'/%3E%3C/svg%3E")`,
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Content Container with Subtle Background */}
            <div className="bg-black/70 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl">
              {/* Small Cross Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 mx-auto border border-white/20"
              >
                <Church className="w-10 h-10 text-white" />
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-2 leading-tight">
                Religious
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-2 leading-tight">
                <span className="bg-white text-secondary px-4 py-2 inline-block rounded">Asset</span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
                Management
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Serving Long Island&apos;s faith communities with exceptional 
                stewardship and sacred property management since 2005.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12 justify-center">
                  <motion.a
                    href="#services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-secondary text-white font-medium rounded-lg transition-all hover:bg-secondary-light"
                  >
                    <span className="flex items-center gap-2">
                      Explore Services
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    Get Started
                  </motion.a>
                </div>

              {/* Stats Row */}
              <div className="flex gap-8 justify-center">
                  {[
                    { icon: Users, value: "150+", label: "Properties" },
                    { icon: Clock, value: "20+", label: "Years" },
                    { icon: Shield, value: "98%", label: "Retention" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="text-center"
                    >
                      <stat.icon className="w-6 h-6 text-white mb-2 mx-auto" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-secondary rounded-full mt-2"
            />
          </div>
          <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        </motion.div>
      </motion.div>
    </div>
  );
}