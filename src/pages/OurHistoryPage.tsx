import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../components/ui/SectionTitle';
import TimelineEvent from '../components/ui/TimelineEvent';
import ChefCharacter from '../components/ui/ChefCharacter';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '2014',
    title: 'El comienzo humilde',
    description: 'Comenzamos en la banqueta de Santa Anita, Iztacalco, con una mesita, una plancha y muchas ganas.'
  },
  {
    year: '2015',
    title: 'Nuestro primer local',
    description: 'Abrimos un pequeño local junto al puesto original. Fue nuestro primer paso hacia un espacio permanente.'
  },
  {
    year: '2016',
    title: 'Expansión a Coapa',
    description: 'Llegamos a Calzada de las Bombas en Coapa. Ya teníamos cocina, barra y 6 mesas.'
  },
  {
    year: '2018',
    title: 'Experiencia completa',
    description: 'Sucursal con 2 pisos en Miguel Ángel de Quevedo con stand-up y música en vivo.'
  },
  {
    year: '2020',
    title: 'Adaptándonos a los tiempos',
    description: 'Dark kitchen en la Del Valle. Fue un éxito breve pero increíble que nos ayudó a sobrevivir la pandemia.'
  },
  {
    year: '2023',
    title: 'Regreso a casa',
    description: 'Abrimos nuestra actual sucursal en la Calzada de las Bombas. Un nuevo comienzo en un rumbo que conocemos bien.'
  }
];

const OurHistoryPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = 'Nuestra Historia | Bububurger';
    
    const section = sectionRef.current;
    if (!section) return;
    
    // Timeline animation
    gsap.to('.timeline-line', {
      height: '100%',
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 1,
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-20">
      {/* History Hero */}
      <div className="bg-primary-500 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-fredoka font-bold mb-4">
                Nuestra Historia
              </h1>
              <p className="text-lg max-w-2xl">
                Desde nuestros humildes inicios hasta hoy, el viaje de Bububurger ha sido una 
                montaña rusa de pasión, perseverancia y mucho sabor.
              </p>
            </div>
            <ChefCharacter action="dancing" className="w-40 h-40 mt-8 md:mt-0" />
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div ref={sectionRef} className="container mx-auto px-4 py-20">
        <SectionTitle 
          title="Nuestro Viaje" 
          subtitle="A través de los años, hemos crecido, aprendido y evolucionado, pero nunca hemos cambiado nuestra esencia"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 z-0">
            <div className="timeline-line absolute left-0 top-0 w-full bg-primary-500 h-0"></div>
          </div>
          
          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <TimelineEvent 
                key={index}
                year={event.year}
                title={event.title}
                description={event.description}
                isRight={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* Final Message */}
        <motion.div 
          className="max-w-3xl mx-auto mt-16 bg-secondary-800 text-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-fredoka font-bold mb-4">
            Un sueño hecho realidad
          </h3>
          <p className="mb-4">
            Lo que comenzó como un pequeño puesto en la banqueta se ha convertido en una 
            historia de perseverancia y amor por la cocina. Cada hamburguesa que servimos 
            lleva consigo el sabor de nuestros inicios y la pasión que nos impulsa a seguir 
            mejorando.
          </p>
          <p>
            Gracias a todos los que han sido parte de esta aventura. Sin ustedes, 
            Bububurger no sería lo que es hoy: un lugar donde cada bocado cuenta una 
            historia y cada cliente es parte de nuestra familia.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurHistoryPage;