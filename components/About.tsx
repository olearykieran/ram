import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About RAM</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-6">
              Stewarding Sacred Spaces Since 2005
            </h3>
            <p className="text-gray-light leading-relaxed mb-6">
              Religious Asset Management brings together expertise in property management, construction, and liturgical understanding to serve faith communities nationwide. We recognize that religious properties are more than buildings—they are sacred spaces where communities gather, worship, and serve.
            </p>
            <p className="text-gray-light leading-relaxed mb-8">
              Our approach combines professional excellence with deep respect for the spiritual mission of each organization we serve. We handle the complexities of property management so religious leaders can focus on their calling.
            </p>
            
            <div className="border-t-2 border-gray pt-8">
              <h4 className="text-secondary font-accent text-sm uppercase tracking-wider mb-4">Leadership</h4>
              <p className="text-gray-900">
                <strong className="text-primary">Michael Davidson, Founder & CEO</strong>
              </p>
              <p className="text-gray-light leading-relaxed mt-2">
                Bringing 20+ years of experience in managing religious facilities, Michael founded RAM after recognizing the unique challenges faith communities face in property stewardship. His background includes degrees in both Architecture and Theology, providing a unique perspective on sacred space management.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/church-interior6.jpeg"
                alt="About Religious Asset Management"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-6 flex gap-8">
              <div className="text-center">
                <span className="block text-3xl font-bold text-secondary font-accent">150+</span>
                <span className="text-sm text-gray-light">Properties Managed</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-secondary font-accent">$500M+</span>
                <span className="text-sm text-gray-light">Assets Under Management</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-secondary font-accent">18</span>
                <span className="text-sm text-gray-light">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}