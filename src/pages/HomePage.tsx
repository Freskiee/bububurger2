import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedMenuSection from '../components/sections/FeaturedMenuSection';
import AboutSection from '../components/sections/AboutSection';
import FranchiseSection from '../components/sections/FranchiseSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Bububurger | ¡Donde cada bocado es una fiesta!';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedMenuSection />
      <AboutSection />
      <TestimonialsSection />
      <FranchiseSection />
    </>
  );
};

export default HomePage;