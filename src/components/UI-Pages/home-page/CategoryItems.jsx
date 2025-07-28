import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useParams, Link } from 'react-router-dom';
import KidsShoesCategoryImg from '../../../assets/images/kidsShowImage.png';
import WomensShoesCategoryImg from '../../../assets/images/womanShowImage.png';
import MensShoesCategoryImg from '../../../assets/images/manShoeImage.png';
import  {ShoesCategoryData}  from './ShoesCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import { useSelector } from 'react-redux';

import Navbar from './Navbar';

const CategoryItems = () => {
  const { categoryName } = useParams();
  const cardRefs = useRef([]);
  const buttonRefs = useRef([]);


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);  
  const categoryItems = ShoesCategoryData.find((item) => item.category === categoryName);
console.log(categoryItems);
  if (!categoryItems) {
    return <div className="p-10 text-2xl">Category not found</div>;
  }

 

    const shoesImage = categoryName === 'KidsCollection' ? KidsShoesCategoryImg : categoryName === 'WomensCollection' ? WomensShoesCategoryImg : MensShoesCategoryImg;


  const handleMouseEnter = (index) => {
    const button = buttonRefs.current[index];
    if (button) {
      gsap.fromTo(
        button,
        {
          y: -90,
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

  const handleMouseLeave = (index) => {
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


  return (
   <div>
    <Navbar />
    <ToastContainer position="top-right" autoClose={2000} />
     <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
     
      <div className="grid grid-cols-3 gap-6">
        {categoryItems.items.map((item,index) => (
          <div
            key={item.id}
            className="border border-[#fe5047] p-4 rounded-lg flex flex-col relative overflow-hidden items-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            ref={(el) => (cardRefs.current[index] = el)}
            // onClick={() => handleCategoryClick(item.category)}
          >
            <img
              src={shoesImage}
              alt={item.name}
              className="w-full h-[15vw] object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <button  ref={(el) => (buttonRefs.current[index] = el)}
     onClick={() => {
      dispatch(addToCart({
        ...item,
        id: `${categoryName}-${item.id}`,
        shoesImage,
        category: categoryName,
      }));
      toast.success(`${item.name} added to cart`);
    }}
    
         

            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#fe5047] text-white px-6 py-2 rounded-md z-20 opacity-0 pointer-events-none"
            style={{ willChange: 'transform, opacity' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default CategoryItems;