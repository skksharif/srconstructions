import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Hammer } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between container mx-auto px-6 py-4 flex items-center md:justify-around">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-[50px] bg-white flex items-center justify-center">
            <img src="/logo.png" className="text-white" />
          </div>
          <span
            className={`hidden md:text-2xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            SR Constructions
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-800 hover:text-red-600'
                  : 'text-white hover:text-red-400'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-800 hover:text-red-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;