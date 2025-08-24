"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Award, Users, Clock, Briefcase } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Years Experience" },
  { icon: Users, value: "100%", label: "Licensed & Insured" },
  { icon: Briefcase, value: "Free", label: "Consultation" },
  { icon: Award, value: "Local", label: "Long Island Based" },
];

const values = [
  { title: "Excellence", description: "Uncompromising commitment to quality in every project" },
  { title: "Integrity", description: "Transparent, ethical practices in all our dealings" },
  { title: "Innovation", description: "Pioneering solutions for modern sacred spaces" },
  { title: "Stewardship", description: "Responsible management of resources and heritage" },
];

export default function AboutNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-gray-50 to-white text-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif mb-8">
              Stewarding <span className="italic font-light">Sacred Spaces</span>
              <span className="block text-secondary mt-2">With Expertise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Religious Asset Management brings together expertise in property management, 
              construction, and liturgical understanding to serve faith communities nationwide. 
              We recognize that religious properties are more than buildings—they are sacred 
              spaces where communities gather, worship, and serve.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach combines professional excellence with deep respect for the spiritual 
              mission of each organization we serve. We handle the complexities of property 
              management so religious leaders can focus on their calling.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/church-interior6.jpeg"
                alt="Sacred Architecture"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-12 -left-12 right-12 bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <Icon className="w-8 h-8 text-secondary mx-auto mb-2 opacity-80" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <div className="inline-block">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-8"
            />
            <h3 className="text-3xl font-serif mb-4">Leadership</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg font-semibold text-primary mb-2">
                Patrick O'Brien, Founder & CEO
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over two decades of experience in religious facility management across Long Island, 
                Patrick founded RAM to address the unique challenges faith communities face in property 
                stewardship. His deep roots in the Long Island community and commitment to excellence 
                have made RAM the trusted partner for religious organizations throughout the region.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}