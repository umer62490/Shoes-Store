import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../Redux/cartSlice';
import Navbar from './Navbar'

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center ">
  {cart.cartItems.length === 0 ? (
    <p className="text-gray-600 text-lg">Your cart is empty.</p>
  ) : (
    <div className="space-y-4">
      {cart.cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b pb-4">
          
          {/* LEFT: Image + Name */}
          <div className="flex items-center gap-4 min-w-[50vw]">
            <img
              src={item.shoesImage}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>

          {/* MIDDLE: Quantity Controls */}
          <div className="flex items-center justify-center w-[180px]">
            <div className="flex items-center gap-1 rounded-md border border-gray-300 bg-[#EF4444] p-1">
              <button onClick={() => dispatch(addToCart(item))} className="w-8 h-8 flex items-center justify-center text-white font-bold border-2 border-white bg-[#EF4444]">
                +
              </button>
              <span  className="w-8 h-8 flex items-center justify-center text-white border-2 border-white bg-[#EF4444]">
                {item.quantity}
              </span>
              <button onClick={() => dispatch(removeFromCart(item))} className="w-8 h-8 flex items-center justify-center text-white font-bold border-2 border-white bg-[#EF4444]">
                -
              </button>
            </div>
          </div>

          {/* RIGHT: Price */}
          <div className="text-lg font-semibold min-w-[100px] text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      ))}

      {/* TOTAL SECTION */}
      <div className="mt-6 flex justify-between text-xl font-bold">
        <span>Total:</span>
        <span>${cart.totalPrice.toFixed(2)}</span>
      </div>

      <button className="mt-6 bg-[#fe5047] text-white px-6 py-3 rounded-md">
        Proceed to Checkout
      </button>
    </div>
  )}
</div>

    </div>
  )
}

export default ShoppingCartPage