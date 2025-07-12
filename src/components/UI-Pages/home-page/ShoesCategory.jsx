import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KidsShoesCategoryImg from '../../../assets/images/kidsShowImage.png';
import WomensShoesCategoryImg from '../../../assets/images/womanShowImage.png';
import MensShoesCategoryImg from '../../../assets/images/manShoeImage.png';

export const ShoesCategoryData = [
  {
    category: 'MensCollection',
    image: MensShoesCategoryImg,
    items: [
      { id: 1, name: 'Mens shoe 1', image: 'https://via.placeholder.com/150' , price: 2600},
      { id: 2, name: 'Mens shoe 2', image: 'https://via.placeholder.com/150' , price: 3200},
      { id: 3, name: 'Mens shoe 3', image: 'https://via.placeholder.com/150' , price: 2400},
      { id: 4, name: 'Mens shoe 4', image: 'https://via.placeholder.com/150' , price: 4000},
      { id: 5, name: 'Mens shoe 5', image: 'https://via.placeholder.com/150' },
    ],
  },
  {
    category: 'WomensCollection',
    image: WomensShoesCategoryImg,
    items: [
      { id: 1, name: 'Womens shoe 1', image: 'https://via.placeholder.com/150' , price: 2000},
      { id: 2, name: 'Womens shoe 2', image: 'https://via.placeholder.com/150' , price: 3500},
      { id: 3, name: 'Womens shoe 3', image: 'https://via.placeholder.com/150' , price: 2500},
      { id: 4, name: 'Womens shoe 4', image: 'https://via.placeholder.com/150' , price: 6000},
      { id: 5, name: 'Womens shoe 5', image: 'https://via.placeholder.com/150' , price: 4500},
    ],
  },
  {
    category: 'KidsCollection',
    image: KidsShoesCategoryImg,
    items: [
      { id: 1, name: 'Kids shoe 1', image: 'https://via.placeholder.com/150' , price: 2600},
      { id: 2, name: 'Kids shoe 2', image: 'https://via.placeholder.com/150' , price: 3700},
      { id: 3, name: 'Kids shoe 3', image: 'https://via.placeholder.com/150' , price: 2200},
      { id: 4, name: 'Kids shoe 4', image: 'https://via.placeholder.com/150' , price: 6300},
      { id: 5, name: 'Kids shoe 5', image: 'https://via.placeholder.com/150' , price: 4100},
    ],
  },
];

const ShoesCategory = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const buttonRefs = useRef([]);
  const headingRef = useRef(null);


  const [hoverPositions, setHoverPositions] = useState({});
const [hoverStates, setHoverStates] = useState({});

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  cardRefs.current.forEach((card, i) => {
    if (!card) return;

    gsap.fromTo(
      card,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: i * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });
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


  const handleMouseEnter = (index) => {

    setHoverStates((prev) => ({
      ...prev,
      [index]: true,
    }));


    const button = buttonRefs.current[index];
    if (button) {
      gsap.fromTo(
        button,
        {
          y: -50,
          opacity: 0,
          scale: 1,
          pointerEvents: 'none',
        },
        {
          y: -20,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          pointerEvents: 'auto',
        }
      );
    }
  };

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    setHoverPositions((prev) => ({
      ...prev,
      [index]: { x, y },
    }));
  };

  const handleMouseLeave = (index) => {

    setHoverStates((prev) => ({
      ...prev,
      [index]: false,
    }));

    const button = buttonRefs.current[index];
    if (button) {
      gsap.to(button, {
        y: 40,
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: 'power2.in',
        pointerEvents: 'none',
      });
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className=' relative'>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
      <h1
  ref={headingRef}
  className="text-4xl font-bold text-center text-black text-6xl m-20"
>
  Shoes Category
</h1>
        <div className="flex flex-row items-center justify-around p-10">
      {ShoesCategoryData.map((item, index) => (
        <div
          key={item.category}
          ref={(el) => (cardRefs.current[index] = el)}
          onClick={() => handleCategoryClick(item.category)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          className="group flex border border-[#fe5047] p-5 w-[20vw] h-[20vw] flex-col items-center justify-between cursor-pointer relative overflow-hidden"
          style={{
            backgroundImage: hoverStates[index]
              ? `radial-gradient(circle at ${hoverPositions[index]?.x}px ${hoverPositions[index]?.y}px, rgba(254, 80, 71, 0.2), transparent 80%)`
              : "none",
            transition: 'background 0.3s ease',
            boxShadow: hoverStates[index] ? '0 0 30px rgba(254, 80, 71, 0.25)' : 'none',
          }}
        >
          <img src={item.image} alt={item.category} className="w-full max-h-[15vw] object-cover" />
          <p className="text-lg font-semibold">{item.category}</p>
          <button
            ref={(el) => (buttonRefs.current[index] = el)}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#fe5047] text-white px-6 py-2 rounded-md z-20 opacity-0 pointer-events-none"
            style={{ willChange: 'transform, opacity' }}
          >
            Explore Products
          </button>
        </div>
      ))}
    </div>
      </div>
   
  );
};

export default ShoesCategory;