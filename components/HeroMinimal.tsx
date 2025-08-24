"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Church, Shield, Building, Users } from "lucide-react";

export default function HeroMinimal() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/St.-Agnes-Exterior.jpg"
          alt="St. Agnes Cathedral"
          fill
          className="object-cover"
          priority
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Logo as Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <Image
                src="/images/logo.png"
                alt="Religious Asset Management"
                width={500}
                height={200}
                className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
                priority
              />
            </motion.div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Professional property stewardship for Long Island's faith communities
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary text-white font-medium transition-all hover:bg-secondary-light"
              >
                <span className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-all"
              >
                Schedule Consultation
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8">
              {[
                { icon: Shield, value: "Fully", label: "Licensed & Insured" },
                { icon: Building, value: "Local", label: "Long Island Based" },
                { icon: Users, value: "20+ Years", label: "Owner Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <stat.icon className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="text-white font-bold">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-secondary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
