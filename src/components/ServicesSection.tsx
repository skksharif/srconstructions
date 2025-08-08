import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Wrench, Palette } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Residential Projects',
      description: 'Custom homes, apartments, and residential complexes built with attention to detail.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Commercial Buildings',
      description: 'Office complexes, retail spaces, and commercial developments for modern businesses.',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Turnkey Solutions',
      description: 'Complete construction services from planning to final handover.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Renovation & Interiors',
      description: 'Transform existing spaces with modern designs and quality finishes.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Services
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Comprehensive construction solutions tailored to your needs
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute top-4 left-4 text-white">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold text-gray-800 mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;