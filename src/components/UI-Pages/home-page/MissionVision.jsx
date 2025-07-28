import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CurveIcon from '../../../assets/logo/curve-icon_360.png';
import PersonImage from '../../../assets/images/about-img2_480.jpg';
import TeamImage from '../../../assets/images/about-img1_360.jpg';
import ClientImage from '../../../assets/images/satisfied-client-about-img.png';


const MissionVision = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const headingRef = useRef(null);
  const experienceRef = useRef(null); // for "10 Years of Experience"
const clientsRef = useRef(null);    // for "500+ Satisfied Clients"


   
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
    // 👇 Left Image Animation
  if (leftImageRef.current) {
    gsap.fromTo(
      leftImageRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
  if (experienceRef.current) {
    gsap.fromTo(
      experienceRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: experienceRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // 🔺 Animate 500+ Clients (Bottom Rise-in)
  if (clientsRef.current) {
    gsap.fromTo(
      clientsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: clientsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // 👇 Right Image Animation
  if (rightImageRef.current) {
    gsap.fromTo(
      rightImageRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // ✅ Heading Animation
  if (headingRef.current) {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
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

  return (
   <div className=''>
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
  
  {/* 📝 Heading */}
  <h1
ref={headingRef}
className="text-4xl font-bold text-center text-black text-6xl m-20"
>
Our Mission and Vision
</h1>
     <div className="flex mt-[10vw] mb-[20vw] flex-col md:flex-row items-start justify-center px-6 py-10 gap-10">
        <div className="absolute top-0 left-1/2 transform mt-[5vw] mb-[3vw] -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
    
      {/* LEFT COLUMN - Images */}
      <div className="relative w-full md:w-[45%] flex items-center justify-center min-h-[400px]">
        <img
         ref={leftImageRef}
          src={PersonImage}
          alt="Background Person"
          className="w-[60%] rounded-lg shadow-md z-10"
        />
        <img
          ref={rightImageRef}
          src={TeamImage}
          alt="Team"
          className="absolute right-0 top-[65%] w-[35%] rounded-lg shadow-lg z-20"
        />

        <div
        ref={experienceRef}
          className="absolute top-[15vw] bg-[#fe5047] right-[7vw] text-white font-semibold px-6 py-8 z-30"
          style={{
           
            clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0% 100%)',
            width: '160px',
            height: '25vh',
          }}
        >
          <div className="text-6xl font-extrabold">10</div>
          <div className="text-2xl leading-tight">
            Years of
            <br />
            Experiences
          </div>
        </div>

        <div ref={clientsRef} className="absolute -bottom-10 left-1/2 ml-14 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md flex items-center gap-2 z-40">
          <img
         
            src={ClientImage}
            alt="Client"
            className="w-20 h-20 object-cover"
          />
          <div className="ml-10 m-5">
            <div className="text-5xl font-bold">500+</div>
            <div className="text-lg text-gray-500">Satisfied Clients</div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - Text */}
      <div className="w-full md:w-[40%] space-y-6">
        <p className="text-[#fe5047] font-medium">🔸 Welcome to our Shoe Store</p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Your Trusted Partner in Tax & Business Solutions
        </h2>
        <p className="text-gray-600 text-lg leading-loose">
          At Tax N Tips, we believe that smart tax planning and strategic financial
          management are the cornerstones of financial success. Whether you’re an
          individual, a small business owner, or a corporation, our expert tax and
          business advisory services ensure that you maximize your savings, stay
          compliant with tax regulations, and build a strong financial future.
        </p>

        {/* Tabs */}
        <div className="flex gap-6 font-semibold text-lg border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('mission')}
            className={`pb-2 transition-all duration-300 ${
              activeTab === 'mission'
                ? 'text-[#fe5047] border-b-2 border-[#fe5047]'
                : 'text-gray-600 border-b-2 border-transparent'
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`pb-2 transition-all duration-300 ${
              activeTab === 'vision'
                ? 'text-[#fe5047] border-b-2 border-[#fe5047]'
                : 'text-gray-600 border-b-2 border-transparent'
            }`}
          >
            Our Vision
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[200px] mt-6 overflow-hidden">
          {/* Mission Tab */}
          <div
            className={`transition-all duration-500 transform ${
              activeTab === 'mission'
                ? 'translate-y-0 opacity-100 relative'
                : '-translate-y-10 opacity-0 absolute'
            }`}
          >
            {activeTab === 'mission' && (
              <div className="flex gap-8 items-start relative z-20">
                <Target className="w-6 h-6 mt-1 text-[#fe5047] flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-loose max-w-prose">
                At Shoe Shop, our mission is to provide high-quality, stylish, and comfortable footwear
                 for all ages. We aim to blend fashion with function by offering a curated collection of
                  branded and trendy shoes that fit every lifestyle. Whether you're walking, running, working,
                   or relaxing — we’re here to keep your steps confident and comfortable.


                </p>
              </div>
            )}
          </div>

          {/* Vision Tab */}
          <div
            className={`transition-all duration-500 transform ${
              activeTab === 'vision'
                ? 'translate-y-0 opacity-100 relative'
                : 'translate-y-10 opacity-0 absolute'
            }`}
          >
            {activeTab === 'vision' && (
              <div className="flex gap-8 items-start relative z-20">
                <Eye className="w-6 h-6 mt-1 text-[#fe5047] flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-loose max-w-prose">
                Our vision is to become the most trusted and preferred destination for footwear 
                enthusiasts by delivering innovative, durable, and stylish shoes that elevate everyday life. 
                We strive to lead the way in customer satisfaction, sustainability, and trend-setting 
                designs — making every step our customers take a step in the right direction.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Curve Icon */}
        {/* <img
          src={CurveIcon}
          alt="Curve"
          className="absolute right-[7vw] top-[70%] w-10 z-10 hidden md:block"
        /> */}
      </div>
    </div>
   </div>
  );
};

export default MissionVision;