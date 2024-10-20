import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function CartTotal() {
  const { currency, deliveryFee, getCartPrice } = useContext(ShopContext);

  const cartPrice = getCartPrice();

  if (cartPrice === 0) return null; // Hide component if cart is empty

  return (
    <>
      {/* Cart total container */}
      <div className="w-1/2 mt-10 ">
        
        {/* Subtotal */}
        <div className="w-full h-16 border flex justify-between items-center px-6">
          <div className="text-xl lg:text-3xl text-gray-600 font-semibold">Subtotal</div>
          <div className="text-xl lg:text-3xl font-semibold">{currency} {cartPrice}.00</div>
        </div>

        {/* Delivery Charges */}
        <div className="w-full h-10 mt-4 border flex justify-between items-center px-6">
          <div className="text-xl lg:text-2xl text-gray-600 font-semibold">Delivery Charges</div>
          <div className="text-xl lg:text-2xl font-semibold">{currency} {deliveryFee}.00</div>
        </div>

        {/* Total */}
        <div className="w-full h-16 mt-4 border flex justify-between items-center px-6">
          <div className="text-xl lg:text-3xl text-gray-600 font-semibold">Total</div>
          <div className="text-xl lg:text-3xl font-semibold">{currency} {cartPrice + deliveryFee}.00</div>
        </div>
  
      </div>
   
    </>
  );
}

export default CartTotal;
