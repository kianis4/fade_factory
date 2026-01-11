"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
       <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-gray-500 font-medium tracking-widest text-sm uppercase">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400">Contact us for bookings, inquiries, or collaborations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                    <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-400 text-sm">Call us at 289 656 0504</p>
            </motion.div>

            {/* Email Card */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                    <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-400 text-sm">Email us at info@fadefactory.ca</p>
            </motion.div>

            {/* Location Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
            >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-400 text-sm">570 Highway #8 Unit 3, Hamilton, Ontario</p>
            </motion.div>
        </div>

        {/* Map */}
        <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full h-[400px] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10"
        >
            <iframe 
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=570%20Highway%208%2C%20Unit%203%2C%20Stoney%20Creek%2C%20Ontario+(Fade%20Factory)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
        </motion.div>
       </div>
    </section>
  );
}
