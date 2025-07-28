import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import NavbarLogo from './NavbarLogo';
import '../../../assets/css/style.css';


const Navbar = ({ refs }) => {
  const [isCartHover, setIsCartHover] = useState(false);
  const navigate = useNavigate();


  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar flex justify-between p-6 bg-[#FE5047] items-center relative">
      {/* Logo */}
      <div className="navbar-logo ml-10">
        <NavbarLogo />
      </div>

      {/* Menu */}
     
      <div className="navbar flex justify-between p-6 bg-[#FE5047] items-center">
      <ul className="flex gap-20 justify-between items-center text-white text-2xl font-medium">
        <li className="cursor-pointer" onClick={() => scrollToSection(refs.categoryRef)}>Category</li>
        <li className="cursor-pointer" onClick={() => scrollToSection(refs.brandRef)}>Brand</li>
        <li className="cursor-pointer" onClick={() => scrollToSection(refs.aboutRef)}>About</li>
        <li className="cursor-pointer" onClick={() => scrollToSection(refs.faqRef)}>FAQs</li>
      </ul>
    </div>
     

      {/* Cart Icon + Hover Dropdown */}
      <div
        className="navbar-icons relative"
        onMouseEnter={() => setIsCartHover(true)}
        onMouseLeave={() => setIsCartHover(false)}
      >
        {/* Cart Icon */}
        <FontAwesomeIcon
          icon={faCartPlus}
          size="2x"
          style={{ color: 'black', cursor: 'pointer' }}
          onClick={() => navigate('/ShoppingCart')}
        />

        {/* Quantity Badge */}
        <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 py-[2px] rounded-full shadow">
          {cart.totalQuantity}
        </span>

        {/* Hover Dropdown */}
        {isCartHover && (
         <div className=" absolute top-[120%] right-0 w-[500px]   bg-white border border-gray-300 rounded-md p-4 shadow-lg z-50 ">
            <h2 className="font-semibold text-lg mb-2">Cart Preview</h2>
            {Array.isArray(cart.cartItems) && cart.cartItems.length === 0 ? (
  <p className="text-sm text-gray-500">Your cart is empty</p>
) : (
  <ul className="h-auto max-h-[20vw] overflow-y-auto space-y-3 text-sm">
    {Array.isArray(cart.cartItems) &&
      cart.cartItems.map((item) => (
        <li key={item.id} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={item.shoesImage}
              alt={item.name}
              className="w-10 h-10 object-cover rounded"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>
          <span className="font-semibold text-sm">
            ${item.price * item.quantity}
          </span>
        </li>
       
      ))}
      <div className='flex justify-between items-center'>
        <p className='text-gray-500'>Total: ${cart.totalPrice}</p>
        <button className='bg-[#fe5047] text-white px-4 py-2 rounded-md'>Checkout</button>
      </div>
  </ul>
)}

          
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
