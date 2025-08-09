import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl mb-6 leading-tight"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Building the Future,
          <br />
          Brick by Brick
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl mb-8 font-light"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Professional construction services with precision and excellence
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: '#7f1d1d' }}
          className="bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center space-x-2 mx-auto"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span>Get a Free Quote</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;