import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

function Cart() {
  const { items, currency, cartItems } = useContext(ShopContext);
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
    setCartData(tempData); // Set the cartData state
    console.log(tempData);
  }, [cartItems]);

  return (
    <>
      <div>
        {
          cartData.map((pdt, index) => {
            const productData = items.find((product) => product._id === pdt._id); // Use pdt._id instead of items._id
            return (
              <div key={index}>
                <div>
                  <img src={productData.image} alt="" />
                  <div>
                    <p>{productData.name}</p>   
                    <p>{currency}{productData.price}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default Cart;
