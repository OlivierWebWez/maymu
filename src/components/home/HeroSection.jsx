
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, TrendingUp, Zap } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Hero background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-amber-400/20 to-slate-400/20 blur-3xl"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Floating badges */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-4 mb-8 flex-wrap"
        >
          <Badge className="bg-amber-100 text-amber-800 border-amber-300 px-4 py-2 text-sm">
            <Star className="w-4 h-4 mr-2" />
            YouTube Legend
          </Badge>
          <Badge className="bg-cyan-100 text-cyan-800 border-cyan-300 px-4 py-2 text-sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            Solana Memecoin
          </Badge>
          <Badge className="bg-slate-100 text-slate-800 border-slate-300 px-4 py-2 text-sm">
            <Zap className="w-4 h-4 mr-2" />
            Community Driven
          </Badge>
        </motion.div>

        {/* Main hero content */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-500 bg-clip-text text-transparent leading-tight">
            $MAYMO
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
            The Internet's Favorite Beagle
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From YouTube stardom to Solana blockchain.<br/> Join the Maymo revolution and be part of the most adorable
            memecoin community ever created — backed by the Guinness World Record holder for the most viewed animal in
            the world on YouTube.
          </p>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-cyan-200 via-amber-200 to-slate-200 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <img 
              src="https://easnjrwqxyzt3ols.public.blob.vercel-storage.com/465910380_9325785784101604_6934639663010775355_n.jpg"
              alt="Maymo the Beagle in a Panda Costume"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/30 to-transparent rounded-full"></div>
          </div>
          
          {/* Floating play button */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -bottom-4 -right-4"
          >
            <Button 
              size="icon" 
              className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-xl"
              onClick={() => window.open('https://www.youtube.com/channel/UCC7tqA6lA2QRw4BdrAEKFxg', '_blank')}
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl transform transition-all duration-200 hover:scale-105"
          >
            Buy $MAYMO Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-cyan-400 bg-white/80 backdrop-blur-sm font-semibold px-8 py-4 text-lg rounded-full shadow-lg"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-600">5.6B+</div>
            <div className="text-gray-600 font-medium">YouTube Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600">12M+</div>
            <div className="text-gray-600 font-medium">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600">19+</div>
            <div className="text-gray-600 font-medium">Years Fame</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
