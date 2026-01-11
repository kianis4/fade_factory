"use client";

import { motion } from "framer-motion";
import { Scissors, Zap, Award, Sparkles, User, Clock } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Traditional haircut with clippers and scissors, includes hot towel and styling.",
    price: "$25",
  },
  {
    icon: Zap,
    title: "Fade",
    description: "Precision fade haircut with detailed edges and styling for a sharp look.",
    price: "$30",
  },
  {
    icon: User,
    title: "Beard Trim",
    description: "Shape and trim your beard with precision tools and hot towel finish.",
    price: "$15",
  },
  {
    icon: Sparkles,
    title: "Haircut & Beard",
    description: "Complete package with haircut and beard trim for a fresh, cohesive look.",
    price: "$40",
  },
  {
    icon: Award,
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with rejuvenating hot towel treatment.",
    price: "$35",
  },
  {
    icon: Clock,
    title: "Kid's Haircut",
    description: "Haircut for children under 12 years old. Gentle and patient service.",
    price: "$20",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-blue-500 font-medium tracking-widest text-sm uppercase">What We Offer</div>
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional haircuts and grooming services tailored to your style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:bg-zinc-900/80"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-blue-500" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <a href="https://fadefactory905.booksy.com/a" className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
