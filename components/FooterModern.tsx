"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Church,
  Building2,
  Shield,
  Clock,
} from "lucide-react";

export default function FooterModern() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Facilities Management",
    "Master Planning",
    "Restoration",
    "Property Operations",
    "Liturgical Design",
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const stats = [
    { icon: Clock, value: "20+", label: "Years Experience" },
    { icon: Shield, value: "Fully", label: "Licensed & Insured" },
    { icon: Building2, value: "Local", label: "Long Island Based" },
    { icon: Church, value: "Free", label: "Consultation" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot opacity-10" />

      {/* Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Top Section - Large Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-12 border-b border-white/10">
              <div>
                {/* Logo and Brand */}
                <div className="flex items-center gap-8 mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="RAM Logo"
                    width={400}
                    height={200}
                    className="h-32 md:h-48 w-auto"
                  />
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-none">
                    RAM
                  </h2>
                </div>
                <p className="text-secondary text-lg">Religious Asset Management</p>
                <p className="text-gray-400 mt-2">
                  Professional Property Stewardship for Faith Communities
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center group cursor-pointer"
                    >
                      <Icon className="w-6 h-6 text-secondary/60 mx-auto mb-2 group-hover:text-secondary transition-colors" />
                      <div className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Middle Section - Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="!text-secondary font-semibold mb-6 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+15167645500"
                  className="flex items-start gap-3 !text-gray-400 hover:!text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-1 text-secondary/60 group-hover:text-secondary" />
                  <span>(516) 764-5500</span>
                </a>
                <a
                  href="mailto:patrick@religiousassetmgmt.com"
                  className="flex items-start gap-3 !text-gray-400 hover:!text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-1 text-secondary/60 group-hover:text-secondary" />
                  <span>patrick@religiousassetmgmt.com</span>
                </a>
                <div className="flex items-start gap-3 !text-gray-400">
                  <MapPin className="w-4 h-4 mt-1 text-secondary/60" />
                  <span>
                    Rockville Centre
                    <br />
                    New York 11570
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="!text-secondary font-semibold mb-6 text-sm uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="!text-gray-400 hover:!text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>{service}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="!text-secondary font-semibold mb-6 text-sm uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="!text-gray-400 hover:!text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 hover:bg-secondary/20 transition-all duration-300 group cursor-pointer">
                <h3 className="text-white font-semibold mb-3">Start Your Project</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Transform your sacred spaces with Long Island&apos;s trusted partner.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 !text-secondary font-medium group-hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                <span>© {currentYear} Religious Asset Management</span>
                <span className="hidden md:inline">•</span>
                <span>Proudly Serving Long Island</span>
                <span className="hidden md:inline">•</span>
                <span>Founded by Patrick O&apos;Brien</span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent origin-center"
        />
      </div>
    </footer>
  );
}
