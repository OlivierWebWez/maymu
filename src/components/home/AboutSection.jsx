
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Award, Users, Zap } from "lucide-react";

export default function AboutSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);

  const features = [
    {
      icon: Heart,
      title: "The Elite Squad",
      description: "Maymo, Penny, Potpie, and Indie - four legendary warriors who've mastered the art of comedic combat."
    },
    {
      icon: Award,
      title: "Combat Specialists", 
      description: "From toilet plungers to cream pies, these dogs wield unconventional weapons with deadly precision."
    },
    {
      icon: Users,
      title: "Villain Vanquishers",
      description: "They've taken down sharks in sneakers, zombies, evil clowns, and other absurd threats to society."
    },
    {
      icon: Zap,
      title: "Chaos Creators",
      description: "Masters of turning everyday situations into epic adventures filled with mayhem and memes."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl opacity-50"></motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl opacity-50"></motion.div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            The Legend of the Pack
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            What started as innocent bath time turned into an epic saga. When Indie faced a circling shark fin, 
            she didn't know she was about to join the most legendary pack of canine warriors the internet has ever seen.
          </p>
        </motion.div>

        {/* Feature grid - NO CARDS! */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/30 hover:shadow-xl"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center shadow-lg">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-700 leading-relaxed">{feature.description}</p>
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
            <motion.div
              whileHover={{ rotate: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }} 
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[#13dce4]">
                <img 
                  src="https://easnjrwqxyzt3ols.public.blob.vercel-storage.com/channels4_banner.jpg"
                  alt="Maymo meme face"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <span className="text-2xl">🤣</span>
              </div>
            </motion.div>
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                From Bath Time to Battle Time
              </h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                It all began when a shark interrupted Indie's bubble bath. Little did Tralalero Tralala know he was about to face the most elite pack of combat-trained dogs on the internet.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Now these four warriors bring their legendary chaos to Solana. $MAYMO isn't just a coin - it's your membership to the most absurdly heroic pack in crypto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
