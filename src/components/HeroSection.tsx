
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Hero } from '@/components/ui/hero';

const HeroSection = () => {
  return (
    <Hero
      badgeIcon={<Star size={14} className="text-blue-500" />}
      badgeText="Introducing Toolbox"
      title={<>
        <span className="gradient-text">Elevate</span> your workflow with powerful tools
      </>}
      description="A complete suite of productivity tools designed to help you work smarter, not harder. Streamline your process and boost efficiency."
      actions={
        <>
          <Button size="lg" className="btn-gradient">
            Get Started <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
            View Demo
          </Button>
        </>
      }
      media={
        <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-200 shadow-xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/60 pointer-events-none z-10"></div>
          <div className="bg-gray-50 w-full h-full flex items-center justify-center">
            <div className="text-blue-400 font-medium">Dashboard Preview</div>
          </div>
        </div>
      }
    />
  );
};

export default HeroSection;
