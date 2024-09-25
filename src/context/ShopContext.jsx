// src/context/ShopContext.jsx
import React, { createContext, useState, useEffect } from 'react'; // Added useEffect import
import { items } from '../assets/assets.js'; // Import your items array
import { IoEllipseSharp } from 'react-icons/io5'; // React icons

// Create the context
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const deliveryFee = '10';
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // Function to add items to the cart
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);

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
    let totalCount = 0; // Corrected from `totalcount`
    
    for (const itemId in cartItems) {
      try {
        if (cartItems[itemId] > 0) {
          totalCount += cartItems[itemId];
        }
      } catch (error) {
        console.error("Error processing cart item:", error);
      }
    }

    return totalCount; // Return the total count
  };

  // Define the context value
  const value = {
    items,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems, // Added this to expose cartItems in the context
    setCartItems, // Added this in case you want to update cartItems externally
    addToCart,
    getCart
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
