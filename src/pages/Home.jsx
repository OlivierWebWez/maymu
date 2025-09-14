
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Users, 
  TrendingUp, 
  Star, 
  Twitter, 
  MessageCircle,
  Copy,
  ExternalLink,
  Zap,
  Heart,
  Award,
  Rocket
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import GallerySection from "../components/home/GallerySection";
import CommunitySection from "../components/home/CommunitySection";
import HowToBuySection from "../components/home/HowToBuySection";

export default function HomePage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-slate-50 to-amber-50 overflow-x-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 opacity-30 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-amber-300 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-teal-300 rounded-full blur-3xl animate-pulse delay-300"></div>
      </motion.div>

      <HeroSection />
      <AboutSection />
      <GallerySection />
      <CommunitySection />
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
          className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 shadow-2xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Rocket className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  );
}
