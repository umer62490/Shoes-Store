
import { motion } from 'framer-motion';
import EarthImage from '../../../assets/images/earth-img.png';
import { useCallback, useState,useRef,useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const teamMembers = [
  {
    title: 'Sales & Marketing',
    name: 'Emaad',
    email: 'emaad@example.com',
    location: 'Amsterdam, Netherlands',
    position: 'top-[20%] left-[-50%]',
  },
  {
    title: 'Leadership',
    name: 'Umar',
    email: 'umer@example.com',
    location: 'Milan, Italy',
    position: 'top-[30%] right-[-50%]',
  },
  {
    title: 'Production Head',
    name: 'Ali',
    email: 'ali@example.com',
    location: 'London, UK',
    position: 'bottom-[30%] right-[80%]',
  },
  {
    title: 'Operations Head',
    name: 'Usama',
    email: 'usama@example.com',
    location: 'New York, USA',
    position: 'bottom-[20%] left-[60%]',
  },
];

const OurTeam = () => {
    const headingRef = useRef(null);
    const cardRefs = useRef([]);




    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
      
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
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
      }, []);
      
    
    
  return (
    <div className="relative min-h-screen  flex flex-col items-center  justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 transform mt-[5vw] mb-[3vw] -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
       <h1
  ref={headingRef}
  className="text-4xl font-bold text-center text-black text-6xl m-20"
>
  Our Team
</h1>

      {/* Earth Image Centered */}
      <div className="relative  z-0">
        <img
          src={EarthImage}
          alt="Earth"
          className="w-full h-full object-contain mx-auto"
        />

        {/* Team Cards */}
        {teamMembers.map((member, index) => (
  <motion.div
    ref={(el) => (cardRefs.current[index] = el)}
    key={index}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.3 }}
    className={`absolute ${member.position} bg-[rgba(254,80,71,0.7)] text-white p-4 rounded-xl shadow-lg backdrop-blur-md w-[17vw]`}
  >
    <h2 className="font-bold text-lg">{member.title} - {member.name}</h2>
    <p className="text-md opacity-80">{member.location}</p>
  </motion.div>
))}


      </div>
    </div>
  );
};

export default OurTeam;
