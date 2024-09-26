import React from 'react';
import main from '../assets/main.png';


function Hero() {
  return (
    <div className='py-10'>
      <div className='flex flex-col lg:flex-row bg-[#080127] rounded-2xl mx-auto h-auto lg:h-[80vh] w-11/12 lg:w-5/6'>
        <div className='flex flex-col justify-center w-full lg:w-1/2 h-auto lg:h-full p-6'>
          <p className='text-black bg-cyan-200 m-4 lg:text-md font-bold px-5 h-9 pt-1 border border-cyan-300  w-52 rounded-3xl'>
            #PneumaticSolutions
          </p>
          <h1 className='text-white text-3xl mx-4 mb-4 lg:text-5xl font-semibold'>
            Flexible Solutions for Your Pneumatics Needs
          </h1>
          <p className='mx-4 text-white text-base lg:text-lg mb-4'>
            We provide cutting-edge pneumatic solutions tailored to enhance your operational efficiency. Our expertise ensures seamless integration of innovative systems designed to meet your specific requirements.
          </p>
          <div className='mx-4 flex items-center text-[#080127] w-2/5 h-12 bg-[#fbbd60] rounded-full pl-6 py-2 lg:text-lg'>
            <span>Explore Products</span>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10'>
          <img 
            src={main} 
            alt="Main visual" 
            className='w-full h-auto lg:h-[75vh] object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
