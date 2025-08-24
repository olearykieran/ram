"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroCreative() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = () => {
      // Mouse tracking removed as not used
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animated text variants
  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const words = ["Religious", "Asset", "Management"];

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-white">
      {/* Light Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/bw-church-interior.jpeg"
          alt="Sacred Architecture"
          fill
          className="object-cover opacity-[0.08] grayscale"
          priority
        />
      </motion.div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 z-[1]">
        {/* Large Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-secondary/10"
        />
        
        {/* Floating Squares */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1,
              scale: 1,
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${70 + i * 5}%`,
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
            }}
          >
            <div className="w-full h-full border-2 border-secondary/20 rounded-lg" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content - 7 columns */}
            <motion.div className="lg:col-span-7">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-8"
              >
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Serving Long Island Since 2005</span>
              </motion.div>

              {/* Animated Title */}
              <div className="mb-8">
                {words.map((word, wordIndex) => (
                  <motion.div
                    key={word}
                    className="overflow-hidden"
                    initial="initial"
                    animate="animate"
                    transition={{ delay: wordIndex * 0.2 }}
                  >
                    <motion.h1
                      variants={letterAnimation}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.9] ${
                        wordIndex === 1 ? 'text-secondary my-2' : 'text-black'
                      }`}
                    >
                      {word}
                    </motion.h1>
                  </motion.div>
                ))}
              </div>

              {/* Subtitle with better contrast */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl leading-relaxed"
              >
                Long Island&apos;s premier partner for sacred property stewardship. 
                Transforming faith communities through exceptional facility management.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-secondary text-white font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-secondary-dark"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors"
                >
                  Schedule Consultation
                </motion.a>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex gap-8 mt-12"
              >
                {[
                  { value: "150+", label: "Properties" },
                  { value: "20+", label: "Years" },
                  { value: "98%", label: "Retention" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual Element - 5 columns */}
            <motion.div 
              className="lg:col-span-5 relative h-[600px] hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Interactive 3D-like Card Stack */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-8"
                    initial={{ 
                      x: i * 40 - 40,
                      y: i * 20 - 20,
                      rotate: i * 5 - 5,
                      scale: 1 - i * 0.05
                    }}
                    animate={{
                      x: i * 40 - 40,
                      y: [i * 20 - 20, i * 20 - 30, i * 20 - 20],
                      rotate: [i * 5 - 5, i * 5 - 3, i * 5 - 5],
                    }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      },
                      rotate: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }
                    }}
                    style={{ zIndex: 3 - i }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg mb-4" />
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-100 rounded w-3/4" />
                          <div className="h-4 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-2 bg-gray-100 rounded" />
                        <div className="h-2 bg-gray-100 rounded w-5/6" />
                        <div className="h-2 bg-gray-100 rounded w-4/6" />
                      </div>

                      <div className="flex gap-2">
                        <div className="h-8 bg-secondary/20 rounded flex-1" />
                        <div className="h-8 bg-gray-100 rounded flex-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-24 h-24 border-2 border-secondary/20 rounded-full"
              />
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/10 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f7f7f7"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-secondary to-transparent" />
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        </motion.div>
      </motion.div>
    </div>
  );
}