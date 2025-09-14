
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
      <div className="hero absolute inset-0  blur-3xl"></div>
      
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
          <Badge className="bg-white text-slate-800 border-slate-300 px-4 py-2 text-sm shadow-lg hover:bg-white hover:text-slate-800">
            <Star className="w-4 h-4 mr-2" />
            Combat-Trained Pack
          </Badge>
          <Badge className="bg-amber-100 text-amber-800 border-amber-300 px-4 py-2 text-sm shadow-lg hover:bg-amber-100 hover:text-amber-800">
            <TrendingUp className="w-4 h-4 mr-2" />
            Shark-Fighting Champions
          </Badge>
          <Badge className="bg-slate-900 text-white border-slate-700 px-4 py-2 text-sm shadow-lg hover:bg-slate-900 hover:text-white">
            <Zap className="w-4 h-4 mr-2" />
            Zombie Slayers
          </Badge>
        </motion.div>

        {/* Main hero content */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-700 to-amber-600 bg-clip-text text-transparent leading-tight">
            $MAYMO
          </h1>
          <p className="text-2xl md:text-3xl text-slate-900 font-semibold mb-4">
            The Pack That Protects Solana.
          </p>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Maymo, Penny, Potpie, and Indie - four legendary warriors who've battled sharks in sneakers, 
            zombies, evil clowns, and other absurd villains. Now they're taking their chaos to the blockchain.
          </p>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-8 relative cursor-pointer"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-white/40 via-amber-200/30 to-slate-200/20 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c5d43b3c70f456453c8e78/1d3ebbeac_465910380_9325785784101604_6934639663010775355_n.jpg"
              alt="Maymo the Beagle in a Panda Costume"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
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
              <Play className="w-8 h-8 ml-1"/>
            </Button>
          </motion.div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
    shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-white hover:text-pink-500"
                 onClick={() => window.open('https://dexscreener.com/solana/5nlop9devogxhj1ape5suqsj9orff3p3z3ex2dfvaxzx', '_blank')}>
            YOLO IN 🚀
          </button>


          <button className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
  shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-white hover:text-pink-500"
                  onClick={() => document.getElementById('community').scrollIntoView({behavior: 'smooth'})}
          >
            Join the Pack
          </button>
          <button className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
  shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-white hover:text-pink-500"
                  onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}
          >
            See the Chaos
          </button>


        </motion.div>

        {/* Stats row */}
        <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
        <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900">∞</div>
            <div className="text-slate-700 font-medium">Sharks Defeated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-600">999+</div>
            <div className="text-slate-700 font-medium">Zombies Eliminated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-slate-900">4</div>
            <div className="text-slate-700 font-medium">Elite Warriors</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
