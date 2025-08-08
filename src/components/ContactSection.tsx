import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Ready to start your construction project? Get in touch with us today.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-white"
              >
                <div className="bg-red-600 p-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Phone
                  </h3>
                  <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-white"
              >
                <div className="bg-red-600 p-3">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Email
                  </h3>
                  <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    info@srconstructions.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-white"
              >
                <div className="bg-red-600 p-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Address
                  </h3>
                  <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    123 Construction Ave, City, State 12345
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 text-white"
              >
                <div className="bg-red-600 p-3">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    WhatsApp
                  </h3>
                  <p className="text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    +1 (555) 987-6543
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 focus:border-red-600 outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-gray-300 focus:border-red-600 outline-none transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 focus:border-red-600 outline-none transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 focus:border-red-600 outline-none transition-colors resize-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-red-600 text-white p-4 hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;