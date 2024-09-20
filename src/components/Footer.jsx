import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons



const Footer = () => {
  return (
    <footer className="bg-[#080127] py-16">
      <div className="container  px-10 mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-8 relative">
              Company
              <span className="absolute bottom-[-10px] left-0 w-12 h-[2px] bg-[#FE7A36]"></span>
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-8 relative">
              Get Help
              <span className="absolute bottom-[-10px] left-0 w-12 h-[2px] bg-[#FE7A36]"></span>
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Order Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Payment Options</a></li>
            </ul>
          </div>

          {/* Online Shop Section */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-8 relative">
              Online Shop
              <span className="absolute bottom-[-10px] left-0 w-12 h-[2px] bg-[#FE7A36]"></span>
            </h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Watch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Bag</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Shoes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dress</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-xl text-white font-semibold mb-8 relative">
              Follow Us
              <span className="absolute bottom-[-10px] left-0 w-12 h-[2px] bg-[#FE7A36]"></span>
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-white text-white hover:text-gray-800 transition-all duration-500 rounded-full p-2">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-white text-white hover:text-gray-800 transition-all duration-500 rounded-full p-2">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-white text-white hover:text-gray-800 transition-all duration-500 rounded-full p-2">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-white text-white hover:text-gray-800 transition-all duration-500 rounded-full p-2">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 border-t border-gray-700 pt-8">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
