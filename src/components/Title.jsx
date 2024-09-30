import React from 'react';

function Title({ title }) {
  return (
    <div className="relative w-1/2 mx-auto flex justify-center my-16">
      <h2 className="flex items-center w-full">
        {/* Left Border */}
        <span className="flex-grow border-t border-gray-500"></span>

        {/* Title Text */}
        <span className="mx-4 px-6 py-2 bg-gradient-to-r from-[#080127] to-[#1b1464] text-white text-2xl font-semibold tracking-wider uppercase rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          {title}
        </span>

        {/* Right Border */}
        <span className="flex-grow border-t border-gray-500"></span>
      </h2>
    </div>
  );
}

export default Title;
