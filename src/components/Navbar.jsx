import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from 'react-icons/ai';

import { LuSearch } from 'react-icons/lu';  // Import Search Icon
import { CgProfile } from 'react-icons/cg';  // Import Profile Icon
import { SlHandbag } from 'react-icons/sl';  // Import Handbag Icon

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search functionality here
    console.log("Searching for:", searchTerm);
  };

  // Function to handle mobile link click (closes the mobile menu)
  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <>
      <header className='w-full flex h-16 lg:h-16 border bg-white sticky top-0 z-50'>
        <div className='flex-1 flex items-center px-4'>
        <Link to='/'>  <img 
            src="https://tse2.mm.bing.net/th?id=OIP.UxgHuH2ZcDI9H287UoNP-QHaHa&pid=Api&P=0&h=180" 
            alt="logo" 
            className='w-12 h-12 lg:w-16 lg:h-16 rounded-full' 
          /></Link>
          <h1 className='text-lg sm:text-sm lg:text-2xl ml-4 lg:ml-6 text-[#1a1a2e] font-bold tracking-wide'>TAJ PNEUMATICS</h1>

          {/* Desktop Links */}
          <ul className='hidden lg:flex items-center gap-8 ml-10'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
              <p>HOME</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
              <p>ABOUT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
              <p>CONTACT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/product' className='flex flex-col items-center gap-1'>
              <p>PRODUCT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
          </ul>
        </div>

        {/* Desktop Cart, Search, and Login */}
        <div className='flex items-center ml-auto mr-6 gap-4'>
          <LuSearch className='w-5 text-xl cursor-pointer mr-[-15px] lg:mr-0' />
          <div className='group relative'>
            <CgProfile className='w-5 lg:text-[3rem] lg:cursor-pointer lg:block hidden' />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200'>
                <p>My Profile</p>
                <p>Orders</p>
                <p>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <SlHandbag className='w-5 text-xl min-w-5' />
            <p className='absolute right-[-10px] bottom-[3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className=' lg:hidden flex items-center ml-auto mr-4'>
          {isMobile ? (
            <AiOutlineClose size={28} onClick={toggleMenu} className='cursor-pointer text-black' />
          ) : (
            <RxHamburgerMenu size={28} onClick={toggleMenu} className='cursor-pointer text-black' />
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div className='bg-slate-700 fixed top-0 left-0 w-full h-full z-50 flex flex-col p-6'>
          <button className='absolute top-4 right-4 text-white text-2xl' onClick={toggleMenu}>
            <AiOutlineClose />
          </button>
          <div className='flex flex-col mt-10 space-y-4'>
            <Link to="/" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>Home</Link>
            <Link to="/about" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>About</Link>
            <Link to="/contact" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>Contact</Link>
            <Link to="/product" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>Product</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
