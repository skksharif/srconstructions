import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Ruler, Clock, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control at every stage ensures exceptional results.',
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: 'Custom Design',
      description: 'Tailored solutions that perfectly match your vision and requirements.',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects within agreed timelines.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Experienced Team',
      description: 'Skilled professionals with decades of construction expertise.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Excellence in every aspect of construction
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-8 border border-gray-200 hover:border-red-600 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-red-600 mb-6 flex justify-center group-hover:text-red-700 transition-colors"
                >
                  {feature.icon}
                </motion.div>
                
                <h3 
                  className="text-xl font-bold text-gray-800 mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;