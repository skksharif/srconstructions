import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                SR Constructions
              </span>
            </div>
            <p 
              className="text-gray-400 leading-relaxed mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Building excellence with precision and innovation. Your trusted partner for all construction needs.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gray-800 hover:bg-red-600 p-2 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact Info
            </h3>
            <div className="space-y-2 text-gray-400">
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                📍 123 Construction Ave, City, State 12345
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                📞 +1 (555) 123-4567
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                ✉️ info@srconstructions.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p 
            className="text-gray-400"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            © {currentYear} SR Constructions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;