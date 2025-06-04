'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import tapaPan from '../../assets/hamburguesa-scroll/pan-tapa.png';
import jitomate from '../../assets/hamburguesa-scroll/jitomate.png';
import queso from '../../assets/hamburguesa-scroll/queso.png';
import carne from '../../assets/hamburguesa-scroll/carne.png';
import lechuga from '../../assets/hamburguesa-scroll/lechuga.png';
import basePan from '../../assets/hamburguesa-scroll/pan-base.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const burgerRef = useRef(null);

  const scrollToContent = () => {
    const section = sectionRef.current;
    if (!section) return;
    const nextSection = section.nextElementSibling as HTMLElement;
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const burger = burgerRef.current;

    if (!section || !burger) return;

    gsap.set(burger.children, {
      y: (i: number) => -100 - i * 50,
      opacity: 0,
      scale: 0.8,
    });

    gsap.to('.parallax-bg', {
      y: 100,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    Array.from(burger.children).forEach((layer, index) => {
      gsap.to(layer, {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: section,
          start: `top+=${index * 60} 80%`,
          end: `top+=${index * 60 + 100} 30%`,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] overflow-hidden flex items-center justify-center bg-black text-white"
    >
      <div className="absolute inset-0 z-0">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-yellow-400 to-red-500 opacity-20" />
      </div>

      <div
        ref={burgerRef}
        className="relative z-10 flex flex-col items-center space-y-4"
      >
        <img src={tapaPan} alt="Top Bun" width={300} height={100} />
        <img src={jitomate} alt="Tomato" width={300} height={100} />
        <img src={queso} alt="Cheese" width={300} height={100} />
        <img src={carne} alt="Patty" width={300} height={100} />
        <img src={lechuga} alt="Lettuce" width={300} height={100} />
        <img src={basePan} alt="Bottom Bun" width={300} height={100} />
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToContent}
      >
        <ChevronDown className="text-white w-10 h-10" />
      </div>
    </section>
  );
}
