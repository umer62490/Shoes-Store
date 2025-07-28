import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import '../../../assets/css/style.css'

const faqs = [
  {
    question: "What is the return policy for shoes?",
    answer: "You can return any item within 7 days of delivery as long as it is in its original condition and packaging."
  },
  {
    question: "Do you offer cash on delivery?",
    answer: "Yes, we offer Cash on Delivery (COD) service for most locations across the country."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive an SMS and email with the tracking ID and link."
  },
  {
    question: "Are the shoes original and branded?",
    answer: "Yes, we only deal in 100% original and branded products sourced from verified distributors."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only deliver within Pakistan. International shipping will be introduced soon."
  },
  {
    question: "Can I change my delivery address after placing an order?",
    answer: "Yes, you can change your address within 2 hours of placing the order by contacting our support."
  }
];

const FrequentlyAskQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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


  

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if already open
    } else {
      setActiveIndex(index); // open this one
    }
  };

  return (
    <div className=" relative">
          <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 w-[400px] bg-[#FE5047] blur-[120px] h-[200px] opacity-50 rounded-full pointer-events-none z-0"></div>
          <h1
  ref={headingRef}
  className="text-6xl font-bold mb-6 text-center mb-[10vw] mt-[10vw]"
>
  Frequently Asked Questions
</h1>
     <div className=' max-w-3xl mx-auto px-4 py-10 mb-[5vw]'>
     {faqs.map((item, index) => (
        <div key={index} className="border-b py-4">
          <div
            onClick={() => toggle(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h2 className="text-2xl font-semibold">{item.question}</h2>
            <span className="text-2xl text-[#fe5047]">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
     </div>
    </div>
  );
};

export default FrequentlyAskQuestions;
