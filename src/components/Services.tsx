"use client";

import { motion } from "framer-motion";
import { Scissors, Zap, Sparkles, User, Award, Car } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Haircut and Beard",
    description: "Haircut and beard electric (45min). Complete grooming experience.",
    price: "$50.00",
  },
  {
    icon: Scissors,
    title: "Haircut Only",
    description: "Precision haircut styled to perfection (30min).",
    price: "$40.00",
  },
  {
    icon: User,
    title: "Kids Haircut",
    description: "Gentle service for children 12 and under (30min).",
    price: "$35.00",
  },
  {
    icon: Zap,
    title: "Line up Hair & Beard",
    description: "Sharp line up for a clean, crisp look (30min).",
    price: "$30.00",
  },
  {
    icon: Award,
    title: "Haircut and Beard + Straight Razor",
    description: "Premium cut with beard trim and hot towel straight razor finish.",
    price: "$60.00",
  },
  {
    icon: Car,
    title: "House Call",
    description: "Premium service at your location. Contact for availability.",
    price: "Per Request",
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
