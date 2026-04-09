"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Commitment to continuous learning in emerging technologies.",
  "Strong analytical skills applied to complex coding challenges.",
  "Focus on clean, maintainable, and well-documented code.",
  "Bridging the gap between technical execution and business needs."
];

export default function Mindset() {
  return (
    <section id="mindset" className="relative w-full py-32 bg-[#050505] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-neon-violet/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
              The Developer's <span className="text-neon-violet">Mindset</span>
            </h2>
            
            <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl">
              My approach combines rigorous academic training with a passion for practical application, 
              focusing on creating scalable and efficient solutions.
            </p>

            <div className="space-y-6 pt-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 bg-neon-violet/10 p-1 rounded-full group-hover:bg-neon-violet/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-neon-violet" />
                  </div>
                  <p className="text-lg text-white/80 font-light leading-snug">
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Image Glow Effect */}
            <div className="absolute -inset-4 bg-neon-violet/20 blur-3xl opacity-30 rounded-full" />
            
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/mindset_illustration.png"
                alt="Developer typing on glowing keyboard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
