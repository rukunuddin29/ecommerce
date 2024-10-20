import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import CartTotal from '../components/CartTotal';
import Quot from '../components/Quot';

function Cart() {
  const { items, currency, cartItems, updateQnt } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="mx-auto max-w-7xl min-h-screen p-6 relative">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Your Shopping Cart</h1>

      {/* Backdrop for Quot Component */}
      {visible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div onClick={handleClick} className="absolute top-2 right-2 cursor-pointer">X</div>
            <Quot />
          </div>
        </div>
      )}

      <div className="space-y-8">
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartData.map((pdt, index) => {
            const productData = items.find((product) => product._id === pdt._id);
            return (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row items-center justify-between border border-gray-300 rounded-lg p-6 bg-white shadow-lg space-y-4 lg:space-y-0"
              >
                {/* Image and Product Details */} 
                <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
                  <img 
                    className="w-24 h-24 object-cover rounded-md border border-gray-300"
                    src={productData.image} 
                    alt={productData.name} 
                  />
                  <div className="mt-4 sm:mt-0 text-center sm:text-left">
                    <p className="font-semibold text-lg lg:text-xl text-gray-800">{productData.name}</p>
                    <p className="text-lg text-gray-600">{currency}{productData.price}</p>
                  </div>
                </div>

                {/* Quantity and Delete Button */}
                <div className="flex items-center space-x-4">
                  <input 
                    type="number" 
                    className="border w-16 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={1} 
                    value={pdt.quantity}
                    onChange={(e) => {
                      const quantity = e.target.value === '' || e.target.value === '0' ? null : Number(e.target.value);
                      if (quantity) updateQnt(pdt._id, quantity);
                    }}
                  />
                  <button 
                    onClick={() => updateQnt(pdt._id, 0)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <CartTotal />

      <button  
        onClick={handleClick}
        className={`w-48 h-12 right-0 rounded-full bg-gradient-to-r from-[#EE6F57] to-[#FF8966] text-xl font-bold text-white border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out my-20 ${cartData.length === 0 ? "hidden" : ''}`}
      >
        Get Quote 
      </button>
    </div>
  );
}

export default Cart;
