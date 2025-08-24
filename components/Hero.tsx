import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/bw-church-interior.jpeg"
            alt="Church Interior"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in drop-shadow-lg">
          Religious Asset Management
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto animate-slide-up drop-shadow-md">
          Trusted management of sacred properties and resources
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a href="#services" className="btn btn-primary shadow-xl">
            Explore Services
          </a>
          <a href="#contact" className="btn btn-outline backdrop-blur-sm">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-3 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}