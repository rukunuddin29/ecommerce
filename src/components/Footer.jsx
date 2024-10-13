import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#080127] text-gray-200">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 mx-auto flex flex-col sm:flex-row justify-between">
        {/* Menu Section */}
        <div className="p-5 sm:w-2/12 border-b sm:border-b-0 sm:border-r border-gray-600">
          <div className="text-sm uppercase text-orange-500 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-orange-500 transition-colors" href="#">Home</a>
            </li>
            <li className="my-2">
              <a className="hover:text-orange-500 transition-colors" href="#">Services</a>
            </li>
            <li className="my-2">
              <a className="hover:text-orange-500 transition-colors" href="#">Products</a>
            </li>
            <li className="my-2">
              <a className="hover:text-orange-500 transition-colors" href="#">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Brand Section */}
        <div className="p-5 sm:w-7/12 border-b sm:border-b-0 sm:border-r border-gray-600 text-center">
          <h3 className="font-bold text-xl text-orange-500 mb-4">Componentity</h3>
          <p className="text-gray-400 text-sm mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Contact Section */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-orange-300 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-orange-300 transition-colors" href="#">XXX XXXX, Floor 4 San Francisco, CA</a>
            </li>
            <li className="my-2">
              <a className="hover:text-orange-300 transition-colors" href="#">contact@company.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex py-5 m-auto text-gray-200 text-sm flex-col items-center border-t border-gray-600 max-w-screen-xl">
        <div className="md:flex md:justify-center mt-2 flex-row flex">
          {/* Social media icons placeholder */}
          <a href="#" className="w-6 mx-1">
            {/* Icon */}
          </a>
          {/* Other social media icons */}
        </div>
        <p className="mt-4">© 2024 Componentity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
