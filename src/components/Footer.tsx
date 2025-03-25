
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/#features' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Changelog', href: '/changelog' },
        { label: 'Roadmap', href: '/roadmap' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-4">
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4 max-w-md">
              Powerful productivity tools to streamline your workflow and boost your efficiency.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href}
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                    aria-label={social.label}
                  >
                    <SocialIcon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-2">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest news and updates delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © {currentYear} Toolbox Inc. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by Toolbox Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
