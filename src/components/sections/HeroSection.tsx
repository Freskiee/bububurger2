import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const section = sectionRef.current;
    const burger = burgerRef.current;
    
    if (!section || !burger) return;
    
    // Set up scroll trigger for animation
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      onEnter: () => {
        if (!animationStarted) {
          startBurgerAnimation();
        }
      }
    });
    
    // Initial setup
    gsap.set(burger.children, { 
      y: -200,
      opacity: 0,
      scale: 0.8
    });
    
    // Parallax effect for background
    gsap.to('.parallax-bg', {
      y: 100,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationStarted]);
  
  const startBurgerAnimation = () => {
    const burger = burgerRef.current;
    if (!burger || animationStarted) return;
    
    setAnimationStarted(true);
    document.body.style.overflow = 'hidden';
    
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);
        document.body.style.overflow = '';
      }
    });
    
    // Animate each layer with proper timing and easing
    Array.from(burger.children).forEach((layer, index) => {
      tl.to(layer, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "bounce.out",
        delay: index * 0.3
      });
    });
  };
  
  const scrollToContent = () => {
    if (!animationComplete) return;
    
    gsap.to(window, {
      duration: 1,
      scrollTo: window.innerHeight,
      ease: "power2.inOut"
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-800"
    >
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 bg-grill-pattern bg-cover bg-center opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-fredoka font-bold text-white mb-6">
          ¡Bububurger: <span className="text-primary-500">Hamburguesas al Carbón!</span>
        </h1>
        
        {/* Burger Animation */}
        <div 
          ref={burgerRef}
          className="w-full max-w-md mx-auto h-96 relative my-12"
        >
          {/* Pan superior */}
          <div className="absolute z-70 w-full h-20 bg-primary-300 rounded-t-full left-0 bottom-64">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-200 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#FFFFFF_2px,_transparent_2px)] bg-size-[10px_10px]"></div>
          </div>
          
          {/* Lechuga */}
          <div className="absolute z-60 w-[95%] h-12 bg-green-500 left-[2.5%] bottom-16 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_20%,_#22c55e_20%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-green-400/30 to-transparent"></div>
          </div>
          
          {/* Jitomate */}
          <div className="absolute z-50 w-[90%] h-8 bg-red-500 left-[5%] bottom-28 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-400 to-red-600"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#ff6b6b_30%,_transparent_30%)]"></div>
          </div>
          
          {/* Tocino */}
          <div className="absolute z-40 w-[85%] h-6 bg-[#ffa9f5] left-[7.5%] bottom-[168px] rounded-sm transform -rotate-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffc0d3] via-[#ff72f8] to-[#ef6661]"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_10px,_rgba(255,255,255,0.1)_10px,_rgba(255,255,255,0.1)_20px)]"></div>
          </div>
          
          {/* Queso */}
          <div className="absolute z-30 w-[95%] h-6 bg-yellow-400 left-[2.5%] bottom-36 rounded-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-yellow-500"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_10%,_transparent_10%)]"></div>
          </div>
          
          {/* Carne */}
          <div className="absolute z-20 w-[90%] h-16 bg-[#8B4513] left-[5%] bottom-48 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_#A0522D_30%,_#8B4513_70%)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,_transparent,_transparent_5px,_rgba(0,0,0,0.1)_5px,_rgba(0,0,0,0.1)_10px)]"></div>
          </div>
          
          {/* Pan inferior */}
          <div className="absolute z-10 w-full h-16 bg-primary-200 rounded-b-2xl left-0 bottom-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-300/30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_10%,_transparent_10%)]"></div>
          </div>
        </div>
        
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Bienvenid@ a Bububurger, el lugar donde el sabor, la calidad y la fiesta se juntan. 
          Aquí cocinamos con amor, con fuego y con historia. ¡Pasa, siéntate y disfruta!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg" 
            to="/menu"
          >
            Haz tu pedido
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            to="/historia"
            className="border-white text-white hover:bg-white hover:text-secondary-800"
          >
            Conoce nuestra historia
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          animationComplete ? 'animate-bounce opacity-100' : 'opacity-0'
        } cursor-pointer`}
        onClick={scrollToContent}
      >
        <ChevronDown className="text-white w-10 h-10" />
      </div>
    </section>
  );
};

export default HeroSection;