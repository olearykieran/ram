"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Hammer, 
  Wrench, 
  Church,
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Facilities Management",
    description: "Comprehensive oversight of building operations and daily maintenance",
    icon: Building2,
    className: "col-span-2 md:col-span-1",
    color: "from-blue-500/10 to-cyan-500/10",
    delay: 0.1,
  },
  {
    title: "Master Planning",
    description: "Strategic long-term development aligned with your mission and vision for growth",
    icon: MapPin,
    className: "col-span-2 md:col-span-1 lg:col-span-2",
    color: "from-purple-500/10 to-pink-500/10",
    delay: 0.2,
    featured: true,
  },
  {
    title: "Restoration & Construction",
    description: "Expert preservation of historical integrity while meeting modern needs",
    icon: Hammer,
    className: "col-span-2 md:col-span-1",
    color: "from-amber-500/10 to-orange-500/10",
    delay: 0.3,
  },
  {
    title: "Property Operations",
    description: "Preventive care and emergency response systems",
    icon: Wrench,
    className: "col-span-1",
    color: "from-green-500/10 to-emerald-500/10",
    delay: 0.4,
  },
  {
    title: "Liturgical Design",
    description: "Sacred space consulting for worship enhancement",
    icon: Church,
    className: "col-span-1",
    color: "from-rose-500/10 to-red-500/10",
    delay: 0.5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ServicesNew() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50/50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-secondary mx-auto mb-6"
          />
          <h2 className="text-5xl md:text-6xl font-serif mb-6">
            Our <span className="italic font-light">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for Long Island&apos;s religious properties and sacred spaces
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100",
                  "hover:shadow-xl transition-all duration-500",
                  service.className
                )}
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  service.color
                )} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-white/80 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gray-700 group-hover:text-secondary transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {service.featured && (
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200 group-hover:ring-secondary/20 transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "20+", label: "Years Experience", icon: Building2 },
            { number: "100%", label: "Licensed & Insured", icon: Shield },
            { number: "Free", label: "Initial Consultation", icon: TrendingUp },
            { number: "Local", label: "Long Island Based", icon: Sparkles },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3 opacity-60" />
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}