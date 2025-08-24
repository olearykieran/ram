"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-hero-gradient relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stain-glass-floor-lighting.jpeg"
          alt="Stained Glass"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-white/80">Let's discuss how we can serve your community</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="text-white">
            <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-white/90">(555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-white/90">info@religiousassetmanagement.com</span>
              </div>
              
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/90">
                  123 Heritage Lane<br />
                  Boston, MA 02134
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondary outline-none transition-colors bg-transparent peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-3 text-gray-light transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondary outline-none transition-colors bg-transparent peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-3 text-gray-light transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative mb-6">
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondary outline-none transition-colors bg-transparent peer"
                placeholder=" "
              />
              <label 
                htmlFor="organization" 
                className="absolute left-4 top-3 text-gray-light transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm"
              >
                Organization (Optional)
              </label>
            </div>
            
            <div className="relative mb-8">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-secondary outline-none transition-colors bg-transparent peer resize-none"
                placeholder=" "
              />
              <label 
                htmlFor="message" 
                className="absolute left-4 top-3 text-gray-light transition-all peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-secondary peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-sm"
              >
                Your Message
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-secondary text-white py-4 rounded-full font-accent uppercase tracking-wider hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}