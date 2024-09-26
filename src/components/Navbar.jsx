import React, { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from 'react-icons/ai';
import { LuSearch } from 'react-icons/lu';  // Search Icon
import { CgProfile } from 'react-icons/cg';  // Profile Icon
import { SlHandbag } from 'react-icons/sl';  // Handbag Icon

function Navbar() {
  const { setShowSearch, getCart } = useContext(ShopContext);
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Function to handle mobile link click (closes the mobile menu)
  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <>
      <header className='w-full flex h-16 lg:h-16 border bg-white sticky top-0 z-50'>
        <div className='flex-1 flex items-center px-4'>
          <Link to='/'>
            <img 
              src="https://tse2.mm.bing.net/th?id=OIP.UxgHuH2ZcDI9H287UoNP-QHaHa&pid=Api&P=0&h=180" 
              alt="logo" 
              className='w-12 h-12 lg:w-16 lg:h-16 rounded-full' 
            />
          </Link>
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
            <NavLink to='/product' className='flex flex-col items-center gap-1'>
              <p>PRODUCT</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
          </ul>
        </div>

        {/* Desktop Cart, Search, and Login */}
        <div className='flex items-center ml-auto mr-6 gap-4'>
          <LuSearch onClick={() => setShowSearch(true)} className='w-5 text-xl cursor-pointer mr-[-15px] lg:mr-0' />
          <div className='group relative'>
            <CgProfile className='w-5 lg:text-[3rem] lg:cursor-pointer lg:block hidden' />
            <div className='group-hover:block hidden absolute right-0 pt-0'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200'>
                <p>My Profile</p>
                <p>Orders</p>
                <p>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/cart' className='relative'>
            <SlHandbag className='w-5 text-xl min-w-5' />
            <p className='absolute right-[-10px] bottom-[3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCart()}</p>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className='lg:hidden flex items-center ml-auto mr-4'>
          {isMobile ? (
            <AiOutlineClose size={28} onClick={toggleMenu} className='cursor-pointer text-black' />
          ) : (
            <RxHamburgerMenu size={28} onClick={toggleMenu} className='cursor-pointer text-black' />
          )} 
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`bg-slate-700 fixed top-0 left-0 w-full h-full z-50 flex flex-col p-6 ${isMobile ? 'w-full' : 'hidden'}`}>
        <button className='absolute top-4 right-4 text-white text-2xl' onClick={toggleMenu}>
          <AiOutlineClose />
        </button>
        <div className='flex flex-col mt-10 space-y-4'>
          <Link to="/" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>HOME</Link>
          <Link to="/about" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>ABOUT</Link>
          <Link to="/product" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>PRODUCTS</Link>
          <Link to="/contact" className="text-white text-lg py-2 hover:text-orange-400 transition duration-300" onClick={handleLinkClick}>CONTACT</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
