import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ProjectGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      title: 'Luxury Residential Complex',
      location: 'Downtown District',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Corporate Office Tower',
      location: 'Business Park',
      image: 'https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Modern Shopping Center',
      location: 'City Center',
      image: 'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Industrial Warehouse',
      location: 'Industrial Zone',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Showcasing our finest work across various sectors
          </p>
        </AnimatedSection>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 md:h-[500px] overflow-hidden"
            >
              <img
                src={projects[currentSlide].image}
                alt={projects[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 text-white">
                <h3 
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {projects[currentSlide].title}
                </h3>
                <p 
                  className="text-xl text-gray-300 mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {projects[currentSlide].location}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition-colors flex items-center space-x-2"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 transition-all ${
                  index === currentSlide ? 'bg-red-600 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;