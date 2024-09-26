import React, { createContext, useState } from 'react'; 
import { items } from '../assets/assets.js'; // Import your items array

// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const [cartItems, setCartItems] = useState({});

  // Function to add items to the cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems); // Make sure structuredClone is supported

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
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  // Define the context value
  const value = {
    items,
    currency,
    cartItems,
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
