"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    image: "/Work/IMG_6003.jpg",
    title: "Beard Fade",
    category: "Precision Cut"
  },
  {
    image: "/Work/IMG_3163.jpg",
    title: "Wave Cut",
    category: "Texture & Style"
  },
  {
    image: "/Work/Tapered Mullet.jpg",
    title: "Tapered Mullet",
    category: "Modern Classic"
  },
  {
    image: "/Work/Bald Fade Comb Over.jpg",
    title: "Bald Fade Comb Over",
    category: "Sharp & Clean"
  },
  {
    image: "/Work/Kids Design Cut.jpg",
    title: "Kids Design Cut",
    category: "Creative Style"
  },
  {
    image: "/Work/Burst Fade.jpg",
    title: "Burst Fade",
    category: "Trendy Look"
  },
  {
    image: "/Work/Low Taper Fade.jpg",
    title: "Low Taper Fade",
    category: "Clean & Sharp"
  },
  {
    image: "/Work/Mid Taper Fade.jpg",
    title: "Mid Taper Fade",
    category: "Classic Look"
  },
  {
    image: "/Work/High Taper.jpg",
    title: "High Taper",
    category: "Modern Style"
  },
  {
    image: "/Work/Mullet.jpg",
    title: "Mullet",
    category: "Edgy Style"
  },
  {
    image: "/Work/Mid Bald Fade.jpg",
    title: "Mid Bald Fade",
    category: "Precision Fade"
  }
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 bg-black overflow-hidden relative">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="text-blue-500 font-medium tracking-widest text-sm uppercase">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-bold">Our Work</h2>
          <p className="text-gray-400">Check out some of our recent cuts and styles.</p>
        </motion.div>

        <div className="relative group px-4 md:px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {portfolioItems.map((item, index) => (
                <div key={index} className="pl-4 min-w-[300px] md:min-w-[400px] flex-[0_0_85%] md:flex-[0_0_40%]">
                  <div className="aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative group/card border border-white/5">
                    <Image
                      src={item.image}
                      alt={`Haircut style ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      sizes="(max-width: 768px) 85vw, 40vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                        <div className="text-white font-bold text-lg">{item.title}</div>
                        <div className="text-blue-400 text-sm font-medium">{item.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-blue-600 border-none z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-blue-600 border-none z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
