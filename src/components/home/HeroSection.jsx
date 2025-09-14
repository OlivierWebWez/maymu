
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {MessageCircle, Play, Star, TrendingUp, Zap} from "lucide-react";

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
            Dexscreener 🚀
          </button>


          <button  className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
    shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200
    hover:bg-white hover:text-pink-500 flex items-center gap-2"
                  onClick={() => window.open('https://t.me/Maymo_official', '_blank')}>

              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 0C5.371 0 0 5.373 0 12c0 6.628 5.371 12 12 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm4.817 8.431c-.146 1.543-.78 5.285-1.104 7.006-.137.73-.406.973-.667.996-.567.052-1-.375-1.55-.734-.862-.565-1.348-.916-2.187-1.463-.968-.625-.34-.968.214-1.528.146-.146 2.627-2.409 2.674-2.615.006-.025.011-.119-.044-.169-.054-.051-.133-.033-.19-.019-.081.019-1.363.865-3.854 2.556-.365.25-.694.372-.987.366-.324-.007-.949-.183-1.413-.334-.57-.186-1.024-.283-.985-.598.021-.171.258-.346.712-.525 2.79-1.212 4.651-2.012 5.582-2.396 2.662-1.104 3.215-1.297 3.575-1.303.079-.002.256.018.37.108.097.078.124.183.136.257.012.074.027.218.016.337z"/>
  </svg>
  Join Telegram

          </button>


        </motion.div>

        {/* Stats row */}
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
