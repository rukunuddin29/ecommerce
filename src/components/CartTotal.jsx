import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function CartTotal() {
  const { currency, deliveryFee, getCartPrice } = useContext(ShopContext);
  const navigate = useNavigate();

  // Calculate subtotal
  const subtotal = getCartPrice() + deliveryFee;

  return (
    <div className={`${getCartPrice() === 0 ? "hidden" : " rounded-lg  p-6 "}`}>
      {/* Cart total container */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>
      
      <div className="w-full border-b pb-4 mb-4">
        <div className="flex justify-between items-center">
          <span className='text-xl lg:text-2xl text-gray-600 font-semibold'>Product Total</span>
          <span className='text-xl lg:text-2xl font-semibold'>{currency} {getCartPrice().toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <span className='text-xl lg:text-2xl text-gray-600 font-semibold'>Delivery Charges</span>
        <span className='text-xl lg:text-2xl font-semibold'>{currency} {deliveryFee.toFixed(2)}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className='text-xl lg:text-2xl text-gray-600 font-semibold'>Sub-Total</span>
        <span className='text-xl lg:text-2xl font-semibold'>{currency} {subtotal.toFixed(2)}</span>
      </div>
      
      <div className="mt-6">
        
      </div>
    </div>
  );
}

export default CartTotal;
