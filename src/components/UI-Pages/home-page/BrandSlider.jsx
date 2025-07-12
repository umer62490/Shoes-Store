import React, { useEffect, useRef, useState } from 'react';
import Nike from '../../../assets/logo/nike.png'
import Adidas from '../../../assets/logo/adidas.png'
import Puma from '../../../assets/logo/puma.png'
import Reebok from '../../../assets/logo/reebok.png'
import Converse from '../../../assets/logo/converse.png'
import Vans from '../../../assets/logo/vans.png'
import NewBalance from '../../../assets/logo/new-balance.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const brands = [
  Nike, Adidas, Puma, Reebok, Converse, Vans, NewBalance,
];

const BrandSlider = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const scrollAmountRef = useRef(0);
  const headingRef = useRef(null);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // cardRefs.current.forEach((card, i) => {
    //   if (!card) return;
  
    //   gsap.fromTo(
    //     card,
    //     {
    //       x: -100,
    //       opacity: 0,
    //     },
    //     {
    //       x: 0,
    //       opacity: 1,
    //       duration: 1,
    //       delay: i * 0.2,
    //       ease: 'power3.out',
    //       scrollTrigger: {
    //         trigger: card,
    //         start: 'top 80%',
    //         toggleActions: 'play none none reverse',
    //       },
    //     }
    //   );
    // });
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Duplicate content for seamless loop
    scrollContainer.innerHTML += scrollContainer.innerHTML;

    let scrollAmount = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollAmountRef.current += 1;
        if (scrollAmountRef.current >= scrollContainer.scrollWidth / 2) {
            scrollAmountRef.current = 0;
          }
          scrollContainer.scrollLeft = scrollAmountRef.current;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  return (
    <div className="overflow-hidden relative whitespace-nowrap bg-white py-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
      <h1
  ref={headingRef}
  className="text-6xl font-bold text-center text-black  text-6xl m-20"
>
  Brand 
</h1>
      <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
        className="flex gap-10 text-xl font-semibold text-gray-700"
        ref={scrollRef}
        style={{ overflow: 'hidden' }}
      >
        {brands.map((brand, index) => (
          <div key={index} className="min-w-fit px-8">
            <img src={brand} alt="brand" className='w-[10vw] h-[10vw]' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
