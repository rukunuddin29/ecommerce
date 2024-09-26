import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import CardItems from './CardItems';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LatestCollections() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For medium devices like tablets
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For smaller devices like mobile phones
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For extra small devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { items } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (items && items.length) {
      setLatestProducts(items.slice(0, 8)); // Fetching the first 8 items
    }
  }, [items]);

  return (
    <div className='max-w-7xl px-6 lg:px-2 mx-auto'>
      <div className="text-center px-0 lg:px-6">
        <Title title={'PRODUCTS'} />
      </div>

      {/* Rendering latest products */}
      <Slider {...settings}>
        {latestProducts.map((item) => (
          <div key={item._id} className="p-">  {/* Added padding for spacing */}
            <CardItems id={item._id} image={item.image} name={item.name} price={item.price} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestCollections;
