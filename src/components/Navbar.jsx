import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { SlHandbag } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import Call from "./Call";
import '../index.css'
import { IoMdCloseCircleOutline } from "react-icons/io";

function Navbar() {
  const { setShowSearch, getCart } = useContext(ShopContext);
  const [isMobile, setIsMobile] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <>
      <header className="w-full flex h-16 lg:h-16 border bg-white sticky top-0 z-50">
        <div className="flex-1 flex items-center px:10 lg:px-28">
          <Link to="/">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.UxgHuH2ZcDI9H287UoNP-QHaHa&pid=Api&P=0&h=180"
              alt="logo"
              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
            />
          </Link>
          <h1 className="text-sm  lg:text-2xl  text-[#1a1a2e] font-bold tracking-wide">
            TAJ PNEUMATICS
          </h1>
          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 ml-10">
  <NavLink 
    to="/" 
    className={({ isActive }) => 
      `flex flex-col items-center gap-1 ${isActive ? 'font-bold' : ''}`
    }
  >
    <p>HOME</p>
  </NavLink>
  <NavLink 
    to="/about" 
    className={({ isActive }) => 
      `flex flex-col items-center gap-1 ${isActive ? 'font-bold' : ''}`
    }
  >
    <p>ABOUT</p>
  </NavLink>
  <NavLink 
    to="/product" 
    className={({ isActive }) => 
      `flex flex-col items-center gap-1 ${isActive ? 'font-bold ' : ''}`
    }
  >
    <p>PRODUCT</p>
  </NavLink>
</ul>

        </div>
        {/* Desktop Cart, Search, and Login */}
        <div className="flex items-center mr-10 lg:mr-32 gap-3 lg:gap-6">
          <div
            className="relative"
            onMouseEnter={() => setShowCall(true)}
            onMouseLeave={() => setShowCall(false)}
          >
            <IoCall className="w-5 text-xl cursor-pointer" />
            {showCall && (
              <div className="absolute right-0 pt-0">
                <Call />
              </div>
            )}
          </div>
          <div className="relative" onClick={() => setShowProfile(!showProfile)}>
  <CgProfile className="w-5 lg:text-[3rem] lg:cursor-pointer lg:block" />
  {showProfile && (
    <div className="absolute right-0 mt-2">
       {/* Close button */}
      <div className="flex flex-col gap-2 border shadow-lg rounded-lg w-48 py-3 px-4 bg-white">
      <div onClick={() => setShowProfile(false)} className="text-xl cursor-pointer text-center"><IoMdCloseCircleOutline /></div>
        <p className="hover:bg-orange-500 hover:text-white h-10 text-center rounded-lg pt-2 transition duration-300 cursor-pointer">
          My Profile
        </p>
        <p className="hover:bg-orange-500 hover:text-white h-10 text-center rounded-lg pt-2 transition duration-300 cursor-pointer">
          Orders
        </p>
        <p className="hover:bg-orange-500 hover:text-white h-10 text-center rounded-lg pt-2 transition duration-300 cursor-pointer">
          Logout
        </p>
      </div>
    </div>
  )}
          </div>
          <Link to="/cart" className="relative">
            <SlHandbag className="w-5 text-xl min-w-5" />
            <p className="absolute right-[-10px] bottom-[3px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCart()}
            </p>
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center ml-auto mr-4">
          {isMobile ? (
            <AiOutlineClose
              size={28}
              onClick={toggleMenu}
              className="cursor-pointer text-black"
            />
          ) : (
            <RxHamburgerMenu
              size={28}
              onClick={toggleMenu}
              className="cursor-pointer text-black"
            />
          )}
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`bg-slate-700 fixed top-0 left-0 w-full h-full z-50 flex flex-col p-6 ${
          isMobile ? "w-full" : "hidden"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleMenu}
        >
          <AiOutlineClose />
        </button>
        <div className="flex flex-col mt-10 space-y-4">
          <Link
            to="/"
            className="text-white text-lg py-2 hover:text-orange-400 transition duration-300"
            onClick={handleLinkClick}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-white text-lg py-2 hover:text-orange-400 transition duration-300"
            onClick={handleLinkClick}
          >
            ABOUT
          </Link>
          <Link
            to="/product"
            className="text-white text-lg py-2 hover:text-orange-400 transition duration-300"
            onClick={handleLinkClick}
          >
            PRODUCTS
          </Link>
      
        </div>
      </div>
    </>
  );
}

export default Navbar;
