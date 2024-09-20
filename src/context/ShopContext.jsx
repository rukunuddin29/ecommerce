// src/context/ShopContext.jsx
import React, { createContext } from 'react';
import { items } from '../assets/assets.js'; // Import your items array

// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const deliveryFee = '10';

  // Define the context value
  const value = {
    items, 
    currency, 
    deliveryFee
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
