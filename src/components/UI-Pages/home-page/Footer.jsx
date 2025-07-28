import React from 'react'
import KidsShoesCategoryImg from '../../../assets/images/kidsShowImage.png';
import WomensShoesCategoryImg from '../../../assets/images/womanShowImage.png';
import MensShoesCategoryImg from '../../../assets/images/manShoeImage.png';

const Footer = () => {
  return (
    <footer className="footer overflow-x-hidden flex h-[20vw] bg-[#FE5047] justify-around items-start px-10 py-8 gap-8">
   
    <div className="col-1 flex flex-col gap-2 text-white w-[20%] items-start">
      <h1 className="text-2xl font-bold mb-2">About</h1>
      <p>Near Statue of Liberty, New York</p>
      <p>+123 456 7890</p>
      <p>info@example.com</p>
      <div className="flex mt-2">
        <input className="p-2 text-black" type="text" placeholder="Enter your email" />
        <button className="bg-red-600 text-white p-2">Subscribe</button>
      </div>
    </div>
  
    
    <div className="col-2 flex flex-col gap-2 w-[15%] items-start text-white">
      <h1 className="text-2xl font-bold mb-2">Information</h1>
      <p>Home</p>
      <p>About</p>
      <p>Product</p>
      <p>Contact</p>
      <p>Terms of Service</p>
      <p>Privacy Policy</p>
    </div>
  
   
    <div className="col-3 flex flex-col gap-4 w-[30%] items-start text-white">
      <h1 className="text-2xl font-bold mb-2">Latest News</h1>
      {[1, 2].map((_, i) => (
        <div key={i} className="flex gap-4">
          <img
            className="w-[7vw] h-[5vw] border-white border-2 object-cover"
            src={KidsShoesCategoryImg}
            alt="news"
          />
          <div>
            <p className="w-[15vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p>12/01/2025</p>
          </div>
        </div>
      ))}
    </div>
  
   
    <div className="col-4 flex flex-col gap-2 w-[20%] items-start text-white">
      <h1 className="text-2xl font-bold mb-2">Instagram</h1>
      <div className="grid grid-cols-2 gap-2">
        <img className="h-[4vw] w-[7vw] border-white border-2 object-cover" src={KidsShoesCategoryImg} />
        <img className="h-[4vw] w-[7vw] border-white border-2 object-cover" src={MensShoesCategoryImg} />
        <img className="h-[4vw] w-[7vw] border-white border-2 object-cover" src={WomensShoesCategoryImg} />
        <img className="h-[4vw] w-[7vw] border-white border-2 object-cover" src={KidsShoesCategoryImg} />
      </div>
    </div>
  </footer>
  
  )
}

export default Footer