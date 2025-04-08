
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Hero } from '@/components/ui/hero';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Hero
      badgeIcon={<Star size={14} />}
      badgeText="Introducing Toolbox"
      title={<>
        <span className="gradient-text">Elevate</span> your workflow with powerful tools
      </>}
      description="A complete suite of productivity tools designed to help you work smarter, not harder. Streamline your process and boost efficiency."
      actions={
        <>
          <Button 
            size="lg" 
            className="btn-gradient"
            onClick={() => navigate('/login')}
          >
            Get Started <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/dashboard')}
          >
            View Demo
          </Button>
        </>
      }
      media={
        <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none z-10"></div>
          <div className="bg-gray-900 w-full h-full flex items-center justify-center">
            <div className="text-white opacity-40 font-medium">Dashboard Preview</div>
          </div>
        </div>
      }
    />
  );
};

export default HeroSection;
