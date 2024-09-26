import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

function Pdt() {
  const { productsId } = useParams();
  const { items, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  const fetchProductData = () => {
    const product = items.find((item) => item._id === productsId);
    if (product) {
      setProductData(product);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productsId, items]);

  return (
    <>
      {productData && (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 lg:px-20 py-10 ">
          {/* Product Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={productData.image}
              alt={productData.name}
              className="w-[100vh] h-[80vh] object-cover rounded-lg shadow-lg border border-black"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 md:pl-10 text-left">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              {productData.name}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Category:{" "}
              <span className="text-indigo-600 font-medium">
                {productData.category}
              </span>
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {productData.description}
            </p>
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              Price: ${productData.price}
            </p>

            {/* Add to Cart Button */}
            <button 
            onClick={()=>addToCart(productData._id)}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-transform transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      )}
      {productData && <RelatedProducts category={productData.category} />}
    </>
  );
}

export default Pdt;
