import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ChefCharacter from '../ui/ChefCharacter';
import LogoBubu from '../../assets/images/logo bububurger.png'

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;
    
    // Parallax effect for background
    gsap.to('.about-parallax-bg', {
      y: 50,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <div className="about-parallax-bg absolute inset-0 bg-primary-100 opacity-40 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Nuestra Pasión" 
          subtitle="Desde 2014, cocinando con amor y calidad en cada hamburguesa"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-fredoka font-bold text-secondary-800 mb-4">
              Nacimos en la banqueta, crecimos contigo
            </h3>
            <p className="text-secondary-600 mb-6">
              En 2014 encendimos nuestra primera parrilla acompañados de una hielera rebosante 
              de ganas y esperanzas. Sin grandes equipos, pero con todo el corazón, comenzamos 
              esta aventura familiar.
            </p>
            <p className="text-secondary-600 mb-6">
              Gracias a ti, lo que empezó con un par de manos y una idea se convirtió en un 
              pequeño equipo que hoy sigue cocinando con el mismo amor. Cada hamburguesa que 
              servimos lleva sabor a hogar, esfuerzo y la emoción de quienes creemos que lo 
              simple, cuando se hace con pasión, se vuelve extraordinario.
            </p>
            <Button to="/historia" variant="primary">
              Nuestra historia completa
            </Button>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-xl overflow-hidden">
                <img 
                  src={LogoBubu}
                  alt="Grilling burgers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <ChefCharacter 
                action="greeting" 
                className="w-24 h-32 absolute -bottom-0 -right-4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;