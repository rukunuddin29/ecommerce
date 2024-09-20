import React, { useContext, useState, useEffect } from 'react'; // Added useState and useEffect
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import CardItems from './CardItems';

function LatestCollections() {

  const { items } = useContext(ShopContext); 

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(items.slice(0, 8)); // Changed 'product' to 'items'
  }, [items]); // Added 'items' as a dependency
  
  console.log(items);

  return (
    <>
      <div className=' max-w-6xl px-16 lg:px-2  mx-auto'>
        <div className="text-center px-0 lg:px-6 ">
          <Title title={'PRODUCTS'} />
        </div>

        {/* Rendering products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {latestProducts.map((item, index) => (  // Added curly braces to wrap the map function
            <CardItems key={index} id={item._id} image={item.image} name={item.name} price={item.price}/> 
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestCollections;
