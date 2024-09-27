import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

function CartTotal() {
  const { currency, deliveryFee, getCartPrice } = useContext(ShopContext);
  
  const total = getCartPrice() + deliveryFee;

  return (
    <>
      {/* Cart total container */}
      <div className={`${getCartPrice() === 0 ? "hidden" : ""}`}>
        {/* Product total section */}
        <div className="w-full h-16 mt-10 border flex justify-between items-center px-6">
          <div className="text-xl lg:text-3xl text-gray-600 font-semibold">Product total</div>
          <div className="text-xl lg:text-3xl font-semibold">{currency} {getCartPrice()}.00</div>
        </div>

        {/* Delivery charges section */}
        <div className="w-full h-10 mt-4 border flex justify-between items-center px-6">
          <div className="text-xl lg:text-2xl text-gray-600 font-semibold">Delivery Charges</div>
          <div className="text-xl lg:text-2xl font-semibold">{currency} {deliveryFee}.00</div>
        </div>

        {/* Subtotal section */}
        <div className="w-full h-16 mt-4 border flex justify-between items-center px-6">
          <div className="text-xl lg:text-3xl text-gray-600 font-semibold">Subtotal</div>
          <div className="text-xl lg:text-3xl font-semibold">{currency} {total}.00</div>
        </div>

        {/* Checkout button */}
        <button className="w-full h-16 rounded-full bg-[#EE6F57] text-4xl font-bold text-white border hover:bg-[#fb5533] my-20">
          Check Out
        </button>
      </div>
    </>
  );
}

export default CartTotal;
