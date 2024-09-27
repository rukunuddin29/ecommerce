import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartTotal from '../components/CartTotal';

function Cart() {
  const { items, currency, cartItems, updateQnt } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

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
    <div className="mx-auto max-w-7xl min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Your Shopping Cart</h1>
      
      <div className="space-y-8">
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cartData.map((pdt, index) => {
            const productData = items.find((product) => product._id === pdt._id);
            return (
              <div 
                key={index} 
                className="flex items-center justify-between border border-gray-300 rounded-lg p-6 bg-white shadow-lg"
              >
                {/* Image and Product Details */}
                <div className="flex items-center space-x-6">
                  <img 
                    className="w-24 h-24 object-cover rounded-md border border-gray-300"
                    src={productData.image} 
                    alt={productData.name} 
                  />
                  <div>
                    <p className="font-semibold text-xl text-gray-800">{productData.name}</p>
                    <p className="text-lg text-gray-600">{currency}{productData.price}</p>
                  </div>
                </div>

                {/* Quantity and Delete Button */}
                <div className="flex items-center space-x-4">
                  <input 
                    type="number" 
                    className="border w-16 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={1} 
                    defaultValue={pdt.quantity}
                    onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQnt(pdt._id, Number(e.target.value))}
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
    </div>
  );
}

export default Cart;
