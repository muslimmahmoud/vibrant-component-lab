
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { hoverScale } from '@/lib/animations';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tooltipText?: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, tooltipText, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      className="group glass-card hover-lift p-6 rounded-xl h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      {...hoverScale}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400">
              <Icon size={24} />
            </div>
          </TooltipTrigger>
          {tooltipText && (
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>

      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
