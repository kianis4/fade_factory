"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient & Pattern */}
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Shop/Shop_bg.jpg"
          alt="Fade Factory Shop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" /> {/* Heavy overlay for text readability */}
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Premium Cuts & 
            <br />
            <span className="text-blue-500">Styles</span> at
            <div className="text-gradient-blue mt-2">FadeFactory</div>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Where style meets precision. Experience the best haircuts and grooming services.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="https://fadefactory905.booksy.com/a"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
            >
              Book Appointment
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
            >
              View Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
        <div className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-blue-900/30 to-transparent" />
      </div>
    </section>
  );
}
