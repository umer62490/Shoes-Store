import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ShoesHeader from '../../../assets/images/header-without-shoe.png';
import WhiteShoe from '../../../assets/images/white-show.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Header = () => {
  const shoeRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (shoeRef.current && headerRef.current) {
     
      gsap.to(shoeRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        motionPath: {
          path: '#shoePath',
          align: '#shoePath',
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
        },
        ease: 'none',
        duration: 1,
      });
    }
  }, []);

  return (
    <header ref={headerRef} className="relative h-[40vw] flex flex-col">
      {/* Curved Path for Shoe Movement */}
      <svg className="absolute w-full h-full pointer-events-none z-0" viewBox="0 0 1440 400">
        <path
          id="shoePath"
         d="M 1100 70 C 950 150, 750 250, 650 300"
          fill="none"
          stroke="transparent"
        />
      </svg>

      {/* Background Image */}
      <img className="w-full h-[30vw] object-content" src={ShoesHeader} alt="header background" />

      {/* Shoe Image */}
      <img
  ref={shoeRef}
  className="w-[60vw] h-[20vw] object-contain absolute -right-[7vw] z-10"
  style={{ top: '18vw' }}
  src={WhiteShoe}
  alt="white shoe"
/>

    </header>
  );
};

export default Header;

