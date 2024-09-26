import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

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
    <div className="mx-auto max-w-7xl p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Your Cart</h1>
      <div className="space-y-6">
        {
          cartData.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartData.map((pdt, index) => {
              const productData = items.find((product) => product._id === pdt._id);
              return (
                <div 
                  key={index} 
                  className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
                >
                  {/* Image and Product Details */}
                  <div className="flex items-center space-x-4">
                    <img 
                      className="w-20 h-20 object-cover rounded-md border border-gray-300"
                      src={productData.image} 
                      alt={productData.name} 
                    />
                    <div>
                      <p className="font-semibold text-lg text-gray-700">{productData.name}</p>
                      <p className="text-gray-500">{currency}{productData.price}</p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <input 
                    type="number" 
                    className='border max-w-10 sm:max-w-20 px-1 sm:py-2' 
                    min={1} 
                    defaultValue={pdt.quantity}
                  />
                  <button onClick={() => updateQnt(pdt._id, 0)}>delete</button> {/* Corrected here */}
                </div>
              );
            })
          )
        }
      </div>
    </div>
  );
}

export default Cart;
