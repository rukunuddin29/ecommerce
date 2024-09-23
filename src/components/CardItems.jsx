import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function CardItems({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="relative flex flex-col w-full max-w-full overflow-hidden rounded-lg border hover:border-gray-900 border-gray-200 shadow-md"
      to={`/products/${id}`}
    >
      <div className="relative flex h-48 sm:h-60 md:h-64 lg:h-64 overflow-hidden rounded-t-lg">
        <img className="object-cover w-full h-full" src={image} alt="product" />
        <span className="absolute top-2 left-2 rounded-full bg-[#FE7A36] px-2 py-1 text-center text-xs font-medium text-white sm:text-sm">
          39% OFF
        </span>
      </div>
      <div className="mt-3 px-4 pb-5">
        <h5 className="text-lg font-semibold text-[#080127] sm:text-xl">
          {name}
        </h5>
        <div className="mt-2 mb-4 flex items-center justify-between">
          <p className="flex items-center">
            <span className="text-2xl font-bold text-[#080127] sm:text-3xl">
              {currency}
              {price}
            </span>
            <span className="text-xs text-[#080127] line-through ml-2 sm:text-sm">
              {currency}
              {price}
            </span>
          </p>
          <div className="flex items-center">
            <span className="rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold sm:px-3 sm:py-1">
              5.0
            </span>
          </div>
        </div>
     <button className="border-[3px] rounded-[5px] hover:text-[#080127] text-white  hover:bg-white bg-[#080127] w-full h-10 border-[#080127]">Add to cart </button>
      </div>
    </Link>
  );
}

export default CardItems;
