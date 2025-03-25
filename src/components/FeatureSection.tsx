
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '@/lib/animations';
import FeatureCard from './FeatureCard';
import { 
  BarChart, 
  Clock, 
  Cloud, 
  Code, 
  MessageSquare, 
  Settings
} from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Access your files from anywhere with secure, unlimited cloud storage.',
    tooltipText: 'Industry-leading 256-bit AES encryption'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with comprehensive data visualization tools.',
    tooltipText: 'Custom reports and real-time dashboards'
  },
  {
    icon: MessageSquare,
    title: 'Team Collaboration',
    description: 'Collaborate seamlessly with your team through integrated messaging.',
    tooltipText: 'Threaded conversations and file sharing'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Monitor productivity and billable hours with automatic time tracking.',
    tooltipText: 'Detailed timesheets and reporting'
  },
  {
    icon: Code,
    title: 'Developer API',
    description: 'Extend functionality with our comprehensive developer API.',
    tooltipText: 'RESTful API with extensive documentation'
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'Tailor the platform to your needs with extensive customization options.',
    tooltipText: 'Custom fields, workflows, and interface options'
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
            Our comprehensive suite of tools helps you stay productive and organized
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
