
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { fadeIn, staggerContainer, slideIn } from '@/lib/animations';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-500/10 to-transparent" />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium"
            variants={fadeIn}
          >
            <Star size={14} className="mr-2" />
            <span>Introducing Toolbox</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
            variants={fadeIn}
          >
            <span className="gradient-text">Elevate</span> your workflow with powerful tools
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            variants={fadeIn}
          >
            A complete suite of productivity tools designed to help you work smarter, not harder.
            Streamline your process and boost efficiency.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeIn}
          >
            <Button size="lg" className="btn-gradient">
              Get Started <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 relative"
            variants={slideIn('up')}
          >
            <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none z-10"></div>
              <div className="bg-gray-900 w-full h-full flex items-center justify-center">
                <div className="text-white opacity-40 font-medium">Dashboard Preview</div>
              </div>
            </div>
            <div className="absolute -inset-x-20 -bottom-10 h-40 bg-gradient-to-t from-background to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
