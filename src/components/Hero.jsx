import React from 'react';
import main from '../assets/main.png';
import { FaArrowCircleRight } from "react-icons/fa";

function Hero() {
  return (
    <div className='py-10'>
      <div className='flex flex-col lg:flex-row bg-[#080127] rounded-2xl mx-auto h-auto lg:h-[80vh] w-11/12 lg:w-5/6'>
        {/* Text Section */}
        <div className='flex flex-col justify-center w-full lg:w-1/2 h-auto lg:h-full p-6 lg:px-12 lg:py-16'>
          <p className='text-black bg-cyan-200 m-4 lg:mx-0 text-xs lg:text-sm font-bold px-5 py-1 border border-cyan-300 w-fit rounded-3xl'>
            #PneumaticSolutions
          </p>
          <h1 className='text-white text-2xl md:text-3xl lg:text-5xl mx-4 lg:mx-0 mb-4 font-semibold leading-tight'>
            Flexible Solutions for Your Pneumatics Needs
          </h1>
          <p className='mx-4 lg:mx-0 text-white text-sm md:text-base lg:text-lg mb-6 leading-relaxed'>
            We provide cutting-edge pneumatic solutions tailored to enhance your operational efficiency. Our expertise ensures seamless integration of innovative systems designed to meet your specific requirements.
          </p>
          <div className='mx-4 lg:mx-0'>
            <button className='flex items-center justify-center gap-2 text-[#080127] text-sm md:text-base w-full md:w-2/5 h-12 bg-[#fbbd60] hover:bg-[#fbbd60]/90 rounded-full px-6 py-2 lg:text-lg transition-colors duration-300 ease-in-out'>
              Explore Products
              <FaArrowCircleRight className='text-lg lg:text-2xl gap-5'  />
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10'>
          <img 
            src={main} 
            alt="Main visual" 
            className='w-full h-auto lg:h-[75vh] object-cover rounded-lg shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
