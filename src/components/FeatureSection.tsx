
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';
import FeatureCard from './FeatureCard';
import { 
  MessageSquare, 
  Camera, 
  Wrench
} from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chatbot',
    description: 'Make your child access an AI chatbot that answers your child\'s questions.',
    tooltipText: 'Safe and educational conversations'
  },
  {
    icon: Camera,
    title: 'Emotion Recognition',
    description: 'Access the camera and microphone of your child and know their feelings via an AI model.',
    tooltipText: 'Privacy-focused emotion analysis'
  },
  {
    icon: Wrench,
    title: 'Multiple AI Tools',
    description: 'Access many additional tools like chatbots and AI image generators.',
    tooltipText: 'Growing library of child-friendly AI tools'
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium"
            variants={fadeIn}
          >
            Features
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeIn}
          >
            Everything you need in one place
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Our comprehensive suite of AI tools helps your child learn and grow
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tooltipText={feature.tooltipText}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
