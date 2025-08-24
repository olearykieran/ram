"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "St. Agnes Cathedral",
    category: "Historic Restoration",
    year: "2023",
    location: "Garden City, NY",
    description: "Complete restoration of historic Long Island cathedral",
    image: "/images/St.-Agnes-Exterior.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Our Lady of Peace",
    category: "New Construction",
    year: "2024",
    location: "Lynbrook, NY",
    description: "50,000 sq ft multi-purpose parish center",
    image: "/images/church-interior-3.jpeg",
    size: "medium",
  },
  {
    id: 3,
    title: "Sacred Heart Chapel",
    category: "Interior Design",
    year: "2023",
    location: "Hempstead, NY",
    description: "Modern liturgical space transformation",
    image: "/images/stain-glass-room.jpeg",
    size: "medium",
  },
  {
    id: 4,
    title: "Molloy University Chapel",
    category: "Campus Planning",
    year: "2024",
    location: "Rockville Centre, NY",
    description: "Campus ministry center planning",
    image: "/images/church-interior2.jpeg",
    size: "large",
  },
  {
    id: 5,
    title: "St. Joseph's Retreat House",
    category: "Facilities Management",
    year: "2023",
    location: "Huntington, NY",
    description: "Ongoing facilities oversight for retreat center",
    image: "/images/church-interior5.jpeg",
    size: "medium",
  },
  {
    id: 6,
    title: "Cathedral Windows Project",
    category: "Restoration",
    year: "2024",
    location: "Mineola, NY",
    description: "Historic stained glass conservation",
    image: "/images/stain-glass1.jpeg",
    size: "medium",
  },
];

const categories = ["All", "Historic Restoration", "New Construction", "Interior Design", "Campus Planning", "Facilities Management", "Restoration"];

export default function PortfolioNew() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-32 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">
            Featured <span className="italic font-light">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Excellence in sacred space transformation and stewardship
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={cn(
                "relative group cursor-pointer overflow-hidden rounded-2xl",
                project.size === "large" ? "md:col-span-2 md:row-span-2" : "md:row-span-1"
              )}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ 
                    y: hoveredProject === project.id ? 0 : 20,
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 flex items-center gap-4 text-white/80 text-sm"
                >
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                </motion.div>

                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#A3976D] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-2">{project.category}</p>
                
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    height: hoveredProject === project.id ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-white/80 text-sm mb-4"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    x: hoveredProject === project.id ? 0 : -20
                  }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 text-[#A3976D] font-medium"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}