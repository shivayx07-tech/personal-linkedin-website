"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Power BI Mastery",
    image: "/powerbi_viz.png",
    color: "from-[#F2C811]/20 to-[#F2C811]/5"
  },
  {
    title: "Java for Analysis",
    image: "/java_analysis.png",
    color: "from-neon-blue/20 to-neon-blue/5"
  }
];

export default function DataStorytelling() {
  return (
    <section id="storytelling" className="relative w-full py-32 bg-background overflow-hidden px-6 lg:px-8">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Data Visualization & <span className="text-neon-cyan">Storytelling</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Transforming raw data into actionable insights using industry-leading tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-full aspect-square max-w-[450px]">
                {/* Glow ring */}
                <div className={`absolute -inset-4 bg-gradient-to-tr ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Circular Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>
              
              <motion.h3 
                className="mt-10 text-2xl md:text-3xl font-light text-white/80 group-hover:text-white transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                {item.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
