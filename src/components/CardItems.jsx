import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function CardItems({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="relative flex flex-col  w-full max-w-full overflow-hidden  border hover:border-gray-300 bg-white p-2 rounded-xl border-gray-200 shadow-md"
      to={`/products/${id}`}
    >
      <div className="relative flex h-80 overflow-hidden ">
        <img className="object-cover w-full h-full border-2 p-2 rounded-xl " src={image} alt="product" />
     
      </div>
      <div className="mt-3 px-4 pb-5">
        <h5 className="text-lg font-semibold text-[#080127] sm:text-xl">
          {name}
        </h5>
        <div className="mt-2 mb-4 flex items-center justify-between">
          <p className="flex items-center">
            <span className="text-xl font-bold text-[#080127] sm:text-3xl">
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
      </div>
    </Link>
  );
}

export default CardItems;
