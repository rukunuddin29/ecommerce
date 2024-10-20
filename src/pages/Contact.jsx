import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import CardItems from "../components/CardItems";

function Contact() {
  const { items } = useContext(ShopContext);
  const [showCategories, setShowCategories] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Filter products based on search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      const filteredProducts = items.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(items);
    }
  }, [items, searchTerm]);

  return (
    <div className="flex flex-col p-4 gap-8 pt-5 border-gray-200 bg-white">
      {/* Search Bar */}
      <div className="flex mx-auto items-center">
       
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
       className="font-bold uppercase rounded-full w-[40vh] lg:w-[80vh] py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
        {/* Sidebar */}
        <div className="w-1/8 lg:border-r border-gray-300 pr-6">
          <h2 className="text-2xl font-bold mx-4 flex items-center justify-between  text-gray-800">
            Categories
            <span
              onClick={() => setShowCategories(!showCategories)}
              className={`cursor-pointer transition-transform transform sm:hidden -mr-8 ${
                showCategories ? "rotate-90" : ""
              }`}
              aria-label="Toggle categories"
            >
             ➤
            </span>
          </h2>

          {/* Category List - Hidden on small screens if showCategories is false */}
          <div
            className={`mt-4 ${
              !showCategories ? "hidden sm:block" : "block"
            } flex flex-col gap-4 w-full text-sm rounded-xl border p-2 font-medium mx-4 text-gray-600`}
          >
            {["grinder", "hammers", "driller", "rammers", "impact wrench"].map(
              (cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 hover:text-blue-500 transition-colors"
                >
                  <input
                    type="checkbox"
                    onChange={toggleCategory}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    value={cat}
                  />
                  <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Main Content - Display products using CardItems */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <CardItems
              key={item._id} // Use unique ID for the key
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
