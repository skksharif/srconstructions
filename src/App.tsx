import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectGallery from './components/ProjectGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectGallery />
          <WhyChooseUs />
          <Testimonials />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;