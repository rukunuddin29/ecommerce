import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { RiSearchLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className='w-full lg:w-1/2 h-12 mx-2 lg:mx-auto mt-5  border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-white flex items-center px-4 transition-all duration-300 ease-in-out'>
      <input
        type="text"
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='flex-1 outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none'
      />
      <RiSearchLine className='text-xl text-gray-600 cursor-pointer hover:text-blue-500 transition-colors duration-200 ease-in-out' />
      <RxCross2
        onClick={() => setShowSearch(false)}
        className='ml-4 text-lg text-gray-600 cursor-pointer hover:text-red-500 transition-colors duration-200 ease-in-out'
      />
    </div>
  ) : null;
}

export default SearchBar;
