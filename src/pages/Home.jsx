import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Bone,
  Rocket
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import GallerySection from "../components/home/GallerySection";
import CommunitySection from "../components/home/CommunitySection";
import HowToBuySection from "../components/home/HowToBuySection";

// Floating element component
const FloatingIcon = ({ children, className, animation }) => (
  <motion.div
    animate={animation}
    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    className={`absolute text-6xl opacity-20 text-white ${className}`}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="min-h-screen bg-[#13dce4] overflow-x-hidden text-white">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-amber-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-white/5 rounded-full blur-3xl animate-pulse delay-300"></div>

        {/* Funny floating icons */}
        <FloatingIcon className="top-1/4 left-1/4" animation={{ x: [0, 20, -20, 0], rotate: [0, 15, -15, 0] }}>🦴</FloatingIcon>
        <FloatingIcon className="top-1/2 right-1/4" animation={{ y: [0, -30, 0] }}>🐾</FloatingIcon>
        <FloatingIcon className="bottom-1/4 left-10" animation={{ x: [0, -25, 0], rotate: [0, -20, 0] }}>🎾</FloatingIcon>
      </motion.div>

      <HeroSection />
      <AboutSection />
      <GallerySection />
      <HowToBuySection />

      {/* Floating action button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-white text-[#13dce4] hover:bg-slate-200 shadow-2xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Bone className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  );
}