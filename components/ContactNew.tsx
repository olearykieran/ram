"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(516) 764-5500", link: "tel:+15167645500" },
    { icon: Mail, label: "Email", value: "patrick@religiousassetmgmt.com", link: "mailto:patrick@religiousassetmgmt.com" },
    { icon: MapPin, label: "Office", value: "Rockville Centre, NY 11570", link: "#" },
    { icon: Clock, label: "Hours", value: "Mon-Fri 8AM-6PM EST", link: "#" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stain-glass-floor-lighting.jpeg"
          alt="Contact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif !text-white mb-6">
            Let's <span className="italic font-light !text-secondary">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Begin your journey toward exceptional sacred space management
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Ready to transform your sacred spaces? Our Long Island-based team is here to discuss 
                how we can serve your faith community's unique needs throughout Nassau and Suffolk counties.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-dark hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                      <Icon className="w-5 h-5 !text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm !text-gray-400">{item.label}</p>
                      <p className="!text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                >
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Schedule Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                >
                  Download Brochure
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-dark rounded-2xl p-8 md:p-12 backdrop-blur-xl text-center">
              <h3 className="text-3xl font-serif text-white mb-6">Ready to Get Started?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Contact Patrick O'Brien directly to discuss how we can serve your faith community
              </p>
              
              <motion.a
                href="mailto:patrick@religiousassetmgmt.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all duration-300 text-lg"
              >
                <Mail className="w-6 h-6" />
                patrick@religiousassetmgmt.com
              </motion.a>
              
              <p className="text-gray-400 mt-8 text-sm">
                We typically respond within 24 hours
              </p>
            </div>
            
            {/* Service Areas */}
            <div className="glass-dark rounded-2xl p-8 backdrop-blur-xl">
              <h4 className="text-xl font-semibold text-white mb-4">Serving All of Long Island</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#A3976D] rounded-full" />
                  Nassau County
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#A3976D] rounded-full" />
                  Suffolk County  
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#A3976D] rounded-full" />
                  Queens & Brooklyn
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}