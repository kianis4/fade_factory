"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Nik",
    role: "Master Barber",
    image: "/Barbers/Nick.jpeg",
    instagram: "fadefactory905" 
  },
  {
    name: "Fou",
    role: "Professional Barber",
    image: "/Barbers/Farnood.jpeg",
    instagram: "fadefactory905"
  },
  {
    name: "Yoshi",
    role: "Professional Barber",
    image: "/Barbers/Yousuf.jpeg",
    instagram: "fadefactory905"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
            <div className="text-blue-500 font-medium tracking-widest text-sm uppercase">The Squad</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Meet Our Barbers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Skilled professionals dedicated to your style.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 30vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
