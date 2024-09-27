import React, { createContext, useState } from 'react';
import { items } from '../assets/assets.js'; // Import your items array

// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const deliveryFee=100
  const [cartItems, setCartItems] = useState({});

  // Function to add items to the cart
  const addToCart = (itemId) => {
    let cartData = JSON.parse(JSON.stringify(cartItems)); // Use JSON for deep cloning

    // Check if the item already exists in the cart
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    // Update the cartItems state
    setCartItems(cartData);
  };

  // Function to get the total count of items in the cart
  const getCart = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    }

    return totalCount; // Return the total count
  };

  const updateQnt = (itemId, quantity) => { // Removed async
    let cartData = JSON.parse(JSON.stringify(cartItems));
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  // Corrected getCartPrice function
  const getCartPrice = () => {
    let totalamt = 0;
    for (const itemId in cartItems) {
      let iteminfo = items.find((product) => product._id === itemId); // Correct comparison

      if (iteminfo && cartItems[itemId] > 0) {
        totalamt += iteminfo.price * cartItems[itemId];
      }
    }
    return totalamt;
  };

  // Define the context value
  const value = {
    items,
    currency,
    deliveryFee,
    cartItems,
    getCartPrice,
    setCartItems,
    addToCart,
    getCart,
    updateQnt
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
