import React from 'react';
import main from '../assets/main.png';

function Hero() {
  return (
    <div className='flex flex-col lg:flex-row border border-black bg-[#080127] rounded-2xl my-10 mx-auto h-auto lg:h-[80vh] w-11/12 lg:w-5/6'>
      <div className='flex flex-col justify-center w-full lg:w-1/2 h-auto lg:h-full p-6'>
        <h1 className='text-white text-2xl lg:text-4xl font-semibold'>
          Text goes here
        </h1>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center items-center p-6'>
        <img src={main} alt="Main visual" className='w-full h-auto lg:h-[75vh] object-cover' />
      </div>
    </div>
  );
}

export default Hero;
