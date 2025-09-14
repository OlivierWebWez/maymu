
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, Wallet, ArrowRight, Shield, Zap } from "lucide-react";

export default function HowToBuySection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "9NBPWsCCRUbD7iQaZSCnx1uuwySrHooozb7k3mrRpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    // {
    //   number: "01",
    //   title: "Get a Treat Bag (Wallet)",
    //   description: "Download Phantom or Solflare. This is where you'll keep your digital bones.",
    //   icon: Wallet
    // },
    // {
    //   number: "02",
    //   title: "Get Shiny Rocks (SOL)",
    //   description: "Buy some SOL on an exchange like Coinbase or Binance. You'll need it to trade.",
    //   icon: Zap
    // },
    // {
    //   number: "03",
    //   title: "Go to the Dog Park (DEX)",
    //   description: "Head over to Raydium or Jupiter and connect your wallet. Don't worry, it's friendly.",
    //   icon: Shield
    // },
    // {
    //   number: "04",
    //   title: "Trade for $MAYMO",
    //   description: "Paste our contract address and swap your SOL for the goodest boy coin.",
    //   icon: ArrowRight
    // }
  ];

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
            Enlist in the Pack
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Ready to join the elite warriors? Here's your quick recruitment guide to joining Maymo's legendary squad.
          </p>
        </motion.div>

        {/* Contract address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-24"
        >
          <div className="bg-white/30 backdrop-blur-sm border border-slate-300 rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contract Address</h3>
            <div className="flex items-center justify-between bg-slate-100 rounded-lg p-4 shadow-inner">
                 <code className="text-sm font-mono text-slate-800 flex-1 overflow-x-auto  sm:hidden">
                {contractAddress.slice(0, 8)}...{contractAddress.slice(-8)}
              </code>
              <code className="hidden sm:block text-sm font-mono text-slate-800 flex-1 overflow-x-auto">
                {contractAddress}
              </code>
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="ml-2 text-slate-700 hover:bg-slate-200"
              >
                {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-600"/>
                ) : (
                    <Copy className="w-4 h-4"/>
                )}
              </Button>
            </div>
            <Badge
                className="mt-4 border-amber-600 text-amber-800 bg-amber-100 hover:text-amber-100 hover:bg-amber-800">
              Always verify contract address
              </Badge>
          </div>
        </motion.div>

        {/* Steps - DYNAMIC TIMELINE! */}
        <div className="relative max-w-2xl mx-auto">
           {/* Connecting line */}
           <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-slate-400 via-slate-300 to-amber-300 transform -translate-x-1/2"></div>
           <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 text-center px-6 py-8 bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center text-white">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-700 text-sm">{step.description}</p>
                </div>
                {/* Timeline dot */}

              </motion.div>
            ))}
           </div>
        </div>
        
        {/* Quick buy buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="rounded-3xl border border-slate-300 bg-white/30 backdrop-blur-sm p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-slate-900">Ready to Join the Mission?</h3>
            <p className="text-xl mb-8 text-slate-700">
              Choose your weapon (exchange) and prepare for battle
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
              <Button 
                size="lg"
            onClick={() => window.open('https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=9NBPWsCCRUbD7iQaZSCnx1uuwySrHooozb7k3mrRpump', '_blank')}
               className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
  shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-white hover:text-pink-500"
              >
                Deploy on Jupiter
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-pink-500 text-white font-bold px-6 py-3 rounded-xl
  shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-200 hover:bg-white hover:text-pink-500"
                  onClick={() => window.open('https://raydium.io/swap/?inputMint=sol&outputMint=9NBPWsCCRUbD7iQaZSCnx1uuwySrHooozb7k3mrRpump', '_blank')}

              >
                Strike on Raydium
              </Button>
            </div>
            <p className="text-sm text-slate-600 mt-6">
              Remember: Even elite warriors do their research. Never invest more than you can afford to lose in battle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
