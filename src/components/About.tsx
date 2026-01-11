"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 skew-x-12 transform origin-top" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <div className="text-blue-300 font-medium tracking-widest text-sm uppercase">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-bold">About FadeFactory</h2>
            
            <div className="space-y-6 text-blue-100/90 leading-relaxed">
              <p>
                FadeFactory was founded with a simple mission: to provide exceptional haircuts 
                and grooming services in a comfortable, modern environment. Our team of 
                skilled barbers combines traditional techniques with contemporary styles to give 
                you the perfect look.
              </p>
              <p>
                With years of experience and a passion for our craft, we&apos;ve built a reputation for 
                quality, consistency, and customer satisfaction. We&apos;re not just about haircuts—
                we&apos;re about creating an experience that leaves you looking and feeling your best.
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Meet Our Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gray-100 rounded-2xl shadow-2xl relative overflow-hidden group">
              {/* Placeholder for video/image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 group-hover:bg-gray-300 transition-colors">
                 <div className="w-20 h-20 rounded-full border-4 border-blue-900/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-blue-900/40 border-b-[10px] border-b-transparent ml-1" />
                 </div>
              </div>
            </div>
            {/* Decorative element behind */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-blue-950/50 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
