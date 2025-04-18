
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/login')}
            >
              Log in
            </Button>
            <Button 
              className="btn-gradient" 
              size="sm"
              onClick={() => navigate('/login')}
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-2 px-4 pt-2">
              <Button 
                variant="outline" 
                className="w-full" 
                size="sm" 
                onClick={() => navigate('/login')}
              >
                Log in
              </Button>
              <Button 
                className="btn-gradient w-full" 
                size="sm"
                onClick={() => navigate('/login')}
              >
                Get Started
              </Button>
            </div>
            <div className="flex justify-center mt-3">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
