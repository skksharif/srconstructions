import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'SR Constructions transformed our dream home into reality. Their attention to detail and commitment to quality is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'They delivered our commercial project on time and within budget. Professional, reliable, and highly skilled team.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Developer',
      content: 'Working with SR Constructions has been a pleasure. They consistently exceed expectations and deliver exceptional results.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            What our clients say about us
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-12 shadow-lg text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote 
              className="text-2xl md:text-3xl text-gray-700 mb-8 italic leading-relaxed"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div>
              <h4 
                className="text-xl font-bold text-gray-800 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {testimonials[currentTestimonial].name}
              </h4>
              <p 
                className="text-gray-600"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 transition-all ${
                  index === currentTestimonial ? 'bg-red-600 scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;