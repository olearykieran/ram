import Image from "next/image";

const projects = [
  {
    title: "St. Mary's Cathedral",
    category: "Historic Restoration",
    description: "Complete restoration of 150-year-old cathedral including structural reinforcement, stained glass conservation, and modern system integration.",
    image: "/images/St.-Agnes-Exterior.jpg",
  },
  {
    title: "Grace Community Center",
    category: "New Construction",
    description: "Master planning and construction oversight for 50,000 sq ft multi-purpose facility serving 2,000+ congregation members.",
    image: "/images/church-interior-3.jpeg",
  },
  {
    title: "Mountain View Retreat",
    category: "Facilities Management",
    description: "Ongoing facilities management for 40-acre retreat center including lodging, dining facilities, and outdoor worship spaces.",
    image: "/images/stain-glass-room.jpeg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-gray-light mt-6">Excellence in sacred space management</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-bold text-primary mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}