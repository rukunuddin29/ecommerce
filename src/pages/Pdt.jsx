import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

function Pdt() {
  const { productsId } = useParams();
  const { items, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  // Function to fetch product data based on the product ID
  const fetchProductData = () => {
    const product = items.find((item) => item._id === productsId);
    if (product) {
      setProductData(product);
    }
  };

  // Fetch product data whenever the product ID or items change
  useEffect(() => {
    fetchProductData();
  }, [productsId, items]);

  // Return JSX
  return (
    <>
      {productData && (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 lg:px-20 py-10">
          {/* Product Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={productData.image}
              alt={productData.name}
              className="w-[100vh] h-[50vh] lg:h-[80vh] object-cover rounded-lg shadow-lg border"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 md:pl-10 text-left">
            {/* Product Name */}
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {productData.name}
            </h2>

            {/* Product Category */}
            <p className="text-md text-gray-600 mb-2">
              Category:{" "}
              <span className="text-indigo-500 font-medium uppercase tracking-wide">
                {productData.category}
              </span>
            </p>

            {/* Product Description */}
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              {productData.description}
            </p>

            {/* Product Price */}
            <p className="text-3xl font-bold text-gray-900 mb-8">
              ${productData.price}
            </p>

            {/* Add to Cart and Wishlist Buttons */}
            <div className="flex items-center space-x-4">
            <button
  onClick={() => {
    addToCart(productData._id);
    alert("Product has been added to the cart!");
  }} 
  className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
>
  Add to Cart
</button>

              <button
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Wishlist
              </button>
            </div>

            {/* Product Delivery Info */}
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Free shipping on orders over $50. Ships in 2-3 business days.
              </p>
            </div> 
          </div>
        </div>
      )}

      {/* Related Products Section */}
      {productData && <RelatedProducts category={productData.category} />}
    </>
  );
}

export default Pdt;
