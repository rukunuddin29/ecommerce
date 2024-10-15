import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import CardItems from './CardItems'; // Make sure to import your CardItems component

function RelatedProducts({ Category }) {
  const { items } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (items.length > 0 && Category) {
      // Filter items based on the provided category
      const filteredItems = items.filter((item) => item.category === Category);
      setRelated(filteredItems.slice(0, 5)); // Limit to the first 5 related items
    }
  }, [items, Category]); // Add items and Category as dependencies

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
        {related.map((item) => (
          <CardItems key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />

       
        ))}
      </div>  
       
    </>
  );
}

export default RelatedProducts;
