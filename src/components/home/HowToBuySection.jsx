
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
    {
      number: "01",
      title: "Get a Solana Wallet",
      description: "Download Phantom, Solflare, or another Solana-compatible wallet",
      icon: Wallet
    },
    {
      number: "02", 
      title: "Buy SOL",
      description: "Purchase SOL from any major exchange and transfer to your wallet",
      icon: Zap
    },
    {
      number: "03",
      title: "Connect to DEX",
      description: "Visit Jupiter or Raydium and connect your Solana wallet",
      icon: Shield
    },
    {
      number: "04",
      title: "Swap for $MAYMO",
      description: "Use our contract address to swap your SOL for $MAYMO tokens",
      icon: ArrowRight
    }
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
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-6">
            How to Buy $MAYMO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join the pack? Follow these simple steps to get your $MAYMO tokens 
            and become part of the cutest crypto community on Solana.
          </p>
        </motion.div>

        {/* Contract address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-r from-cyan-100 to-amber-100 border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contract Address</h3>
              <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-inner">
                <code className="text-sm font-mono text-gray-700 flex-1">
                  {contractAddress}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="ml-2"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <Badge className="mt-4 bg-amber-200 text-amber-800 border-amber-300 hover:bg-amber-200 hover:text-amber-800 ">
                Always verify contract address
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-teal-500 mb-4">{step.number}</div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick buy buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-500 to-teal-500 border-0 shadow-2xl text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Ready to Buy $MAYMO?</h3>
              <p className="text-xl mb-8 opacity-90">
                Choose your preferred decentralized exchange to start trading
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white text-teal-600 hover:bg-gray-100 font-bold"
                  onClick={() => window.open('https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=9NBPWsCCRUbD7iQaZSCnx1uuwySrHooozb7k3mrRpump', '_blank')}
                >
                  Buy on Jupiter
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white text-teal-600 hover:bg-gray-100 font-bold"
                  onClick={() => window.open('https://raydium.io/swap/?inputMint=sol&outputMint=9NBPWsCCRUbD7iQaZSCnx1uuwySrHooozb7k3mrRpump', '_blank')}
                >
                  Buy on Raydium
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-6">
                Always do your own research and never invest more than you can afford to lose
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
