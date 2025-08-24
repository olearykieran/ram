import Image from "next/image";

const clients = [
  {
    title: "Churches",
    description: "From historic cathedrals to modern worship centers, we understand the unique needs of church facilities.",
    image: "/images/bw-church-exterior.jpeg",
  },
  {
    title: "Religious Schools & Seminaries",
    description: "Supporting educational institutions in maintaining safe, inspiring learning environments.",
    image: "/images/church-interior2.jpeg",
  },
  {
    title: "Retreat Centers",
    description: "Creating peaceful, well-maintained spaces for spiritual reflection and renewal.",
    image: "/images/church-interior5.jpeg",
  },
  {
    title: "Faith-Based Organizations",
    description: "Partnering with missions, community centers, and other religious institutions.",
    image: "/images/stain-glass1.jpeg",
  },
];

export default function WhoWeServe() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Who We Serve</h2>
          <p className="text-xl text-gray-light mt-6">Supporting faith communities across denominations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {client.title}
                </h3>
                <p className="text-gray-light leading-relaxed">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}