import { useCallback, useState,useRef,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from "clsx";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../../../assets/css/style.css";

const testimonials = [
  {
    name: "Jessie J",
    role: "Ltd Head of Product",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "The ability to capture responses is a game-changer...",
  },
  {
    name: "Mark Luk",
    role: "Spark Founder & CEO",
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "I have been using this product for a few weeks now...",
  },
  {
    name: "Jeff Kahl",
    role: "Appy Product Lead",
    avatar: "https://i.pravatar.cc/150?img=56",
    text: "This platform helped us double our conversion rate...",
  },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = testimonials[activeIndex];
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

  const handleSwitch = (newIndex) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  // ✅ Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative">
    {/* 🔥 Bulb Glow Shadow */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
  
    {/* 📝 Heading */}
    <h1
  ref={headingRef}
  className="text-6xl font-bold mb-6 text-center mb-[10vw] mt-[10vw]"
>
  Customer Reviews
</h1>
  
    {/* ⭐ Customer Review Section */}
    <div className="relative w-full h-[400px] px-4 py-16 flex flex-col items-center bg-[#FE5047] text-white text-center space-y-6 overflow-hidden z-10">
  
      {/* 🌌 Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 1000, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.4,
              random: true,
            },
            size: {
              value: { min: 5, max: 7 },
              random: true,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: { default: "bounce" },
            },
          },
        }}
      />
  
      {/* 💬 Foreground */}
      <div  ref={headingRef} className="relative z-10 flex flex-col items-center space-y-6">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full relative">
        <AnimatePresence initial={false} custom={direction}>
  <motion.img
    key={activeIndex}
    src={active.avatar}
    alt={active.name}
    className="absolute w-full h-full object-cover rounded-full"
    initial={{
      opacity: 0,
      y: 100, // comes from below
      scale: 0.6,
      rotate: direction === 1 ? 180 : -180,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
    }}
    exit={{
      opacity: 0,
      y: -100, // goes up
      scale: 0.6,
      rotate: direction === 1 ? -180 : 180,
    }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />
</AnimatePresence>

        </div>
  
        {/* Text */}
        <AnimatePresence mode="wait" >
          <motion.p
            key={active.text}
            className="text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {active.text}
          </motion.p>
        </AnimatePresence>
  
        {/* Buttons */}
        <div className="flex gap-3 mt-6 flex-wrap justify-center">
          {testimonials.map((item, i) => (
            <button
              key={i}
              
              onClick={() => handleSwitch(i)}
              className={clsx(
                "px-4 py-2 rounded-full border border-white/20 text-sm backdrop-blur-md transition-all duration-300",
                {
                  "bg-white text-black font-semibold": activeIndex === i,
                  "text-white/60 hover:text-white": activeIndex !== i,
                }
              )}
            >
              <span  className={activeIndex === i ? "font-bold" : "font-normal"}>
                {item.name}
              </span>{" "}
              - {item.role}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CustomerReviews;
