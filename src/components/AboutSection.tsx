import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div 
              className="h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800')`,
              }}
            />
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                About SR Constructions
              </h2>
              
              <div className="w-20 h-1 bg-red-600 mb-6" />
              
              <p 
                className="text-lg text-gray-700 leading-relaxed mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                SR Constructions is a multidisciplinary construction firm that handles everything — from foundations to finishing. Be it homes, commercial towers, or infrastructure — we deliver with precision.
              </p>
              
              <p 
                className="text-lg text-gray-700 leading-relaxed mb-8"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                With over two decades of experience, we've built a reputation for excellence, innovation, and reliability. Our team of skilled professionals ensures every project meets the highest standards of quality and craftsmanship.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    500+
                  </div>
                  <div className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    20+
                  </div>
                  <div className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;