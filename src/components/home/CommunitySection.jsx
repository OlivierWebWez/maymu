
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle, Users, Heart, TrendingUp, Star } from "lucide-react";

export default function CommunitySection() {
  const socialStats = [
    // {
    //   platform: "Twitter",
    //   icon: Twitter,
    //   handle: "@MaymoPackHQ",
    //   color: "hover:bg-white/20 text-slate-800",
    //   link: "#"
    // },
    {
      platform: "Telegram", 
      icon: MessageCircle,
      handle: "Pack Command Center",
      color: "hover:bg-white/20 text-slate-800",
      link: "#"
    },
    // {
    //   platform: "Discord",
    //   icon: Users,
    //   handle: "Elite Barracks",
    //   color: "hover:bg-white/20 text-slate-800",
    //   link: "#"
    // }
  ];

  const communityFeatures = [
    {
      icon: Heart,
      title: "Battle-Tested Community",
      description: "Join warriors who've survived shark attacks, zombie invasions, and other epic adventures"
    },
    {
      icon: Star,
      title: "Classified Intel",
      description: "Get exclusive access to battle plans, training footage, and behind-the-scenes pack intel"
    },
    {
      icon: TrendingUp,
      title: "Warrior Rewards",
      description: "Combat bonuses, mission airdrops, and special recognition for loyal pack members"
    }
  ];

  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Join the Pack
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            This is mission control. Elite warriors, chaos enthusiasts, and meme legends gather here to plan the next epic adventure.
          </p>
        </motion.div>

        {/* Social platforms - NO CARDS! */}
        <div className="flex justify-center gap-8 mb-24 flex-wrap">
          {socialStats.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300 ${platform.color}`}
            >
              <platform.icon className="w-16 h-16" />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900">{platform.platform}</h3>
                <p className="text-slate-600">{platform.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Community features - NO CARDS! */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: (index-1) * 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Community spotlight - NO CARD! */}
        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, scale: 0.9 }}*/}
        {/*  whileInView={{ opacity: 1, scale: 1 }}*/}
        {/*  transition={{ duration: 0.8 }}*/}
        {/*  viewport={{ once: true }}*/}
        {/*  className="rounded-3xl border border-slate-300 bg-white/30 backdrop-blur-sm p-12 shadow-2xl text-center"*/}
        {/*>*/}
        {/*    <div className="text-6xl mb-6 animate-bounce">⚔️</div>*/}
        {/*    <h3 className="text-4xl font-bold mb-6 text-slate-900">Ready for Combat?</h3>*/}
        {/*    <p className="text-xl mb-8 text-slate-700 max-w-2xl mx-auto">*/}
        {/*      The pack needs recruits. Think you can handle sharks in sneakers and zombie invasions? Prove it.*/}
        {/*    </p>*/}
        {/*    <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
        {/*      <Button */}
        {/*        size="lg"*/}
        {/*        className="bg-slate-900 text-white hover:bg-slate-800 font-bold px-8 py-4"*/}
        {/*      >*/}
        {/*        Report for Duty*/}
        {/*      </Button>*/}
        {/*      <Button */}
        {/*        size="lg"*/}
        {/*        variant="outline"*/}
        {/*        className="border-slate-700 text-slate-800 hover:bg-slate-700 hover:text-white px-8 py-4"*/}
        {/*      >*/}
        {/*        Follow Mission Updates*/}
        {/*      </Button>*/}
        {/*    </div>*/}
        {/*</motion.div>*/}
      </div>
    </section>
  );
}
