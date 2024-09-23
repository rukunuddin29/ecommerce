// src/context/ShopContext.jsx
import React, { createContext, useState } from 'react';
import { items } from '../assets/assets.js'; // Import your items array


// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const deliveryFee = '10';
  const [search,setSearch]=useState('')
  const [showSearch,setShowSearch]=useState(false)

  // Define the context value
  const value = {
    items, 
    currency, 
    deliveryFee,
    search,
    setShowSearch,
     showSearch,
     setSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
