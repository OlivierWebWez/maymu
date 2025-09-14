
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Twitter, MessageCircle, Users, Heart, TrendingUp, Star } from "lucide-react";

export default function CommunitySection() {
  const socialStats = [
    // {
    //   platform: "Twitter",
    //   icon: Twitter,
    //   followers: "25K+",
    //   engagement: "High",
    //   color: "from-cyan-400 to-cyan-500",
    //   link: "#"
    // },
    // {
    //   platform: "Telegram",
    //   icon: MessageCircle,
    //   followers: "15K+",
    //   engagement: "Active",
    //   color: "from-teal-400 to-teal-500",
    //   link: "#"
    // }
  ];

  const communityFeatures = [];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/*<motion.div*/}
        {/*  initial={{ opacity: 0, y: 50 }}*/}
        {/*  whileInView={{ opacity: 1, y: 0 }}*/}
        {/*  transition={{ duration: 0.6 }}*/}
        {/*  viewport={{ once: true }}*/}
        {/*  className="text-center mb-16"*/}
        {/*>*/}
        {/*  <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-6">*/}
        {/*    Join Our Pack*/}
        {/*  </h2>*/}
        {/*  <p className="text-xl text-gray-600 max-w-3xl mx-auto">*/}
        {/*    Connect with fellow Maymo fans, crypto enthusiasts, and dog lovers from around the world. */}
        {/*    Together, we're building something special.*/}
        {/*  </p>*/}
        {/*</motion.div>*/}

        {/* Social platforms */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialStats.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.platform}</h3>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{platform.followers}</div>
                  <Badge className="bg-green-100 text-green-800 border-green-300 mb-4">
                    {platform.engagement}
                  </Badge>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 hover:border-cyan-400 group-hover:bg-cyan-50"
                    onClick={() => window.open(platform.link, '_blank')}
                  >
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/60 backdrop-blur-sm border-0 shadow-lg">
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

        {/* Community spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 border-0 shadow-2xl text-white">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">🐕</div>
              <h3 className="text-3xl font-bold mb-6">Ready to Join the Maymo Revolution?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Be part of the most wholesome and fun crypto community on Solana. 
                Connect, share, and grow with fellow Maymo enthusiasts!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://t.me/Maymo_official" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-4"
                  >
                    Join Telegram
                  </Button>
                </a>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4"
                >
                  Follow on Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
