import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Heart } from "lucide-react";

export default function GallerySection() {
const galleryItems = [
    {
      type: "video",
      thumbnail: "https://img.youtube.com/vi/3Ut6pkqVMcQ/hqdefault.jpg",
      title: "Dogs Find Shark in Sneakers in Woods",
      link: "https://youtu.be/3Ut6pkqVMcQ?si=X3foynPNeeyAoY2g",
      views: "200K+ views",
    },
    {
      type: "video",
      thumbnail: "https://img.youtube.com/vi/qpI_ehXelxA/hqdefault.jpg",
      title: "Cute Dogs Knocking People Out Vol. V",
      link: "https://youtu.be/qpI_ehXelxA?si=-HKmoc-0Kn6W8mUY",
      views: "80K+ views",
    },
    {
      type: "video",
      thumbnail: "https://img.youtube.com/vi/3ufaSiB1KDM/hqdefault.jpg",
      title: "Dogs Find John Pork in Creepy Barn!",
      link: "https://youtu.be/3ufaSiB1KDM?si=PyEfBE6EAL58dfOV",
      views: "1.4M+ views",
    }
  ];

  const handleCardClick = (item) => {
    if (item.type === 'video' && item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6">
            Battle Archives
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
            Witness the legendary adventures of the pack. From shark encounters to zombie battles, 
            these are the epic moments that made internet history.
          </p>

            <Button
                size="lg"
                variant="outline"
                className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
  shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-white hover:text-pink-500"
            onClick={() => window.open('https://www.youtube.com/channel/UCC7tqA6lA2QRw4BdrAEKFxg', '_blank')}


              >
                Watch the Full Chronicles
              </Button>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="group overflow-hidden bg-black/20 backdrop-blur-sm border-white/10 border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => handleCardClick(item)}
              >
                <div className={`relative aspect-video overflow-hidden ${item.type === 'video' ? 'cursor-pointer' : ''}`}>
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={item.style || {}}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  
                  {/* Play button for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-8 h-8 text-red-500 ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Heart icon for images */}
                  {item.type === "image" && (
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-red-500" />
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-2">
                    {item.views || item.likes}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}