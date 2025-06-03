import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    quote: "Las mejores hamburguesas que he probado. El sabor de la carne al carbón es inigualable y el ambiente es super divertido.",
    author: "María García",
    role: "Cliente frecuente",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    quote: "Vengo desde el sur de la ciudad solo por las alitas BBQ. La calidad y el sabor valen completamente la pena.",
    author: "Carlos Méndez",
    role: "Chef amateur",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    quote: "El servicio es increíble. Te hacen sentir como en familia desde que entras. Y qué decir de la Bubu Classic, ¡deliciosa!",
    author: "Laura Torres",
    role: "Foodie",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!testimonialsRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      testimonialsRef.current.querySelector('.testimonial-content'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Lo que dicen nuestros clientes" 
          subtitle="Historias de quienes han disfrutado de la experiencia Bububurger"
        />
        
        <div 
          ref={testimonialsRef}
          className="max-w-4xl mx-auto relative"
        >
          <div className="testimonial-content bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
            <Quote className="mx-auto mb-6 text-primary-500 h-12 w-12" />
            
            <blockquote className="text-xl md:text-2xl italic text-secondary-700 mb-8">
              "{testimonials[current].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].author} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-secondary-800 text-lg">
                  {testimonials[current].author}
                </h4>
                <p className="text-secondary-600">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="bg-white rounded-full p-2 shadow-md hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;