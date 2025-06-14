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
    const burger = burgerRef.current as HTMLElement | null;

    if (!section || !burger) return;

    const sectionElement = document.querySelector('.hero-section') as HTMLElement;
    if (sectionElement) {
      sectionElement.style.position = 'relative';
      sectionElement.style.zIndex = '10';
    }

    // Ensure images are loaded before animation
    const images = Array.from(burger.children) as HTMLImageElement[];
    images.forEach((img) => {
      img.style.visibility = 'visible';
      img.onload = () => {
        img.style.visibility = 'visible';
      };
      img.onerror = () => {
        console.error('Error loading image:', img.src);
      };
    });

    gsap.set(burger.children, {
      y: (i: number) => -800 - i * 100,
      opacity: 0,
      scale: 0.8,
      zIndex: 10,
    });

    Array.from(burger.children).forEach((layer, index) => {
      const htmlLayer = layer as HTMLElement;
      gsap.to(htmlLayer, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: `top+=${index * 150} 80%`,
          end: `top+=${index * 150 + 150} 50%`,
          scrub: true,
          pin: false,
        },
      });
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-white px-4"
      style={{ minHeight: '100vh', zIndex: 5 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-b from-yellow-400 to-red-500 opacity-20" />
      </div>

      <div
        ref={burgerRef}
        className="relative z-10 flex flex-col items-center space-y-[-30px]"
      >
        <img src={basePan} alt="Bottom Bun" className="w-full max-w-[100px] md-max-w-[180px] lg-max-w-[240px]" />
        <img src={lechuga} alt="Lettuce" className="w-full max-w-[90px] md-max-w-[170px] lg-max-w-[230px]" />
        <img src={carne} alt="Patty" className="w-full max-w-[100px] md-max-w-[180px] lg-max-w-[240px]" />
        <img src={queso} alt="Cheese" className="w-full max-w-[80px] md-max-w-[160px] lg-max-w-[220px]" />
        <img src={jitomate} alt="Tomato" className="w-full max-w-[90px] md-max-w-[170px] lg-max-w-[230px]" />
        <img src={tapaPan} alt="Top Bun" className="w-full max-w-[100px] md-max-w-[180px] lg-max-w-[240px]" />
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
