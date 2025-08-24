"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Building2, Shield, Award, Clock } from "lucide-react";

export default function HeroModern() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingCards = [
    { icon: Building2, text: "150+", label: "Properties" },
    { icon: Shield, text: "20+", label: "Years" },
    { icon: Award, text: "98%", label: "Retention" },
    { icon: Clock, text: "24/7", label: "Support" },
  ];

  return (
    <div ref={ref} className="relative h-screen min-h-[900px] overflow-hidden bg-black">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src="/images/bw-church-interior.jpeg"
          alt="Sacred Architecture"
          fill
          className="object-cover opacity-40"
          priority
          quality={90}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-[1]" />

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 z-[2]"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 bg-secondary mb-8"
              />

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[0.9]">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block"
                >
                  Religious
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block text-secondary font-light italic"
                >
                  Asset
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="block"
                >
                  Management
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
              >
                Long Island&apos;s premier partner for sacred property stewardship. 
                Transforming faith communities through exceptional facility management.
              </motion.p>

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
                  className="group px-8 py-4 bg-secondary text-white font-medium rounded-none relative overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Explore Services</span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Explore Services
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/30 text-white font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Interactive Elements */}
            <motion.div
              className="relative h-[500px] hidden lg:block"
              style={{ x: springX, y: springY }}
            >
              {/* Floating Cards */}
              {floatingCards.map((card, index) => {
                const Icon = card.icon;
                const angle = (index * 360) / floatingCards.length;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: x,
                      y: y,
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark p-6 rounded-xl backdrop-blur-xl border border-white/10 cursor-pointer group"
                  >
                    <Icon className="w-8 h-8 text-secondary mb-2" />
                    <div className="text-2xl font-bold text-white">{card.text}</div>
                    <div className="text-sm text-gray-400">{card.label}</div>
                    <motion.div
                      className="absolute inset-0 bg-secondary/20 rounded-xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}

              {/* Center Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-secondary/30"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full border border-dashed border-secondary/20"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">Scroll to Explore</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-3 bg-secondary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}