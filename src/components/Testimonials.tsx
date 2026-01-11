"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Best haircut I&apos;ve ever had. The attention to detail is incredible and the atmosphere is great.",
    author: "John Smith",
    role: "Regular Customer",
    initials: "JS"
  },
  {
    quote: "Professional service from start to finish. I've been coming here for a year and they never disappoint.",
    author: "Mike Johnson",
    role: "Loyal Client",
    initials: "MJ"
  },
  {
    quote: "Finally found a barber who understands exactly what I want. Highly recommended for anyone looking for a fresh fade.",
    author: "David Wilson",
    role: "New Customer",
    initials: "DW"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-blue-950 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-blue-400 font-medium tracking-widest text-sm uppercase">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
          <p className="text-blue-200/60">Don&apos;t just take our word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-900/40 backdrop-blur-md p-8 rounded-2xl border border-blue-800/50 hover:bg-blue-900/60 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-500 mb-6 opacity-50" />
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">&quot;{t.quote}&quot;</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-blue-300">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
