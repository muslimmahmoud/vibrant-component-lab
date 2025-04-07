
import React from 'react';
import Logo from './Logo';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center text-center">
          <Logo className="mb-4" />
          <p className="text-gray-600 mb-4 max-w-md">
            Powerful productivity tools to streamline your workflow and boost your efficiency.
          </p>
          
          <div className="border-t border-gray-100 w-full max-w-md pt-6 mt-2">
            <p className="text-gray-500 text-sm">
              © {currentYear} Toolbox Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center mt-2">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Toolbox Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
