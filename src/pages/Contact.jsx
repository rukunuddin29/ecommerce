import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import SearchBar from "../components/SearchBar";
import CardItems from "../components/CardItems";

function Contact() {
  const { items, showSearch, search } = useContext(ShopContext);
  const [showCategories, setShowCategories] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) => 
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    setProducts(items);
  }, [items]);

  const applyFilter = () => {
    let filteredProducts = items.slice();

    if (search && showSearch) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row p-4 gap-8 sm:gap-16 pt-12 border-gray-200 bg-white">
      {/* Sidebar */}
      <div className="w-1/8 lg:border-r border-gray-300 pr-6">
        <h2 className="text-2xl font-bold flex items-center justify-between sm:justify-start text-gray-800">
          Categories
          <span
            onClick={() => setShowCategories(!showCategories)}
            className={`cursor-pointer transition-transform transform sm:hidden ml-4 ${showCategories ? "rotate-90" : ""}`}
            aria-label="Toggle categories"
          >
            ⪼
          </span>
        </h2>
        <SearchBar />

        {/* Category List - Hidden on small screens if showCategories is false */}
        <div className={`mt-6 ${!showCategories ? "hidden sm:block" : "block"} flex flex-col gap-4 text-sm font-medium text-gray-600`}>
          {["grinder", "hammers", "driller", "rammers", "impact wrench"].map((cat) => (
            <label key={cat} className="flex items-center gap-3 hover:text-blue-500 transition-colors">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                value={cat}
              />
              <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
            </label>
          ))}
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
  );
}

export default Contact;
