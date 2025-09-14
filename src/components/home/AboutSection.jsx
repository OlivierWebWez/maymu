
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);

  const features = [
    {
      icon: Heart,
      title: "Beloved Character",
      description: "Maymo has captured millions of hearts with his adorable antics and expressive personality across countless YouTube videos."
    },
    {
      icon: Award,
      title: "Proven Track Record", 
      description: "Over a decade of entertaining content, viral videos, and a dedicated fanbase that spans the globe."
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "A passionate community of dog lovers and crypto enthusiasts united by their love for Maymo."
    },
    {
      icon: Zap,
      title: "Meme Potential",
      description: "With endless content and memorable moments, Maymo has unlimited meme potential in the crypto space."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-10 w-32 h-32 bg-cyan-200 rounded-full blur-2xl opacity-50"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-50"></motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-6">
            Meet Maymo
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The internet's most beloved beagle is taking over the blockchain! Maymo has been entertaining millions 
            for over a decade with his hilarious reactions, costume adventures, and pure canine charisma. 
            Now it's time to bring that same joy and community spirit to the world of cryptocurrency.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Hero image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#4fd1c5]">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c5d43b3c70f456453c8e78/645d6a99e_channels4_banner.jpg"
                  alt="Maymo meme face"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-2xl">🐕</span>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                From YouTube Star to Crypto Icon
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Maymo's journey began with simple home videos that showcased his incredible personality. 
                His expressive face, perfect timing, and natural comedic ability quickly made him an internet sensation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Now, we're bringing that same authenticity and joy to the crypto world. $MAYMO isn't just another 
                memecoin – it's a celebration of the purest form of internet culture and the dog that started it all.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
