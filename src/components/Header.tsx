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
      <div className="w-full max-w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 flex-shrink-0 min-w-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center flex-shrink-0">
              <img src="/logo.png" alt="SR Constructions Logo" className="w-full h-full object-contain" />
            </div>
            <span
              className={`hidden sm:block text-lg sm:text-xl lg:text-2xl font-bold truncate ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              SR Constructions
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 flex-shrink-0">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors whitespace-nowrap ${
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
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'} flex-shrink-0`}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 py-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-2 text-gray-800 hover:text-red-600 transition-colors border-b border-gray-100 last:border-b-0 text-sm sm:text-base"
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