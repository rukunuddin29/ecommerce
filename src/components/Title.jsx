import React from 'react';

function Title({ title }) {
  return (
    <div className="w-1/2 mx-auto flex justify-center my-12 ">
      <h2 className="w-full flex items-center">
        <span className="flex-grow border-t border-gray-400"></span>
        <span className="px-4 py-2 bg-[#080127] text-white text-xl font-semibold tracking-wide uppercase mx-2 rounded">
          {title}
        </span>
        <span className="flex-grow border-t border-gray-400"></span>
      </h2>
    </div>
  );
}

export default Title;
