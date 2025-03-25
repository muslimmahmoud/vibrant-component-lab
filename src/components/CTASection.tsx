
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fadeIn, slideIn } from '@/lib/animations';

const benefits = [
  'Easy setup process',
  'Free 14-day trial',
  'No credit card required',
  'Cancel anytime'
];

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <motion.div 
              className="p-8 md:p-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideIn('left')}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your workflow?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Join thousands of teams already using Toolbox to improve their productivity.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button size="lg" className="btn-gradient">
                Start your free trial <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-8 md:p-0 h-full"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideIn('right')}
            >
              <div className="h-64 md:h-full flex items-center justify-center">
                <div className="text-gray-500 font-medium">CTA Image</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
