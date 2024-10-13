import React from 'react';
import main from '../assets/main.png';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function Hero() {
  const navigate = useNavigate();

  const handleProducts = (e) => {
    e.preventDefault();
    navigate("/product "); 
  };

  return (
    <div className='py-10'>
      <motion.div
        className='flex flex-col lg:flex-row bg-[#080127] rounded-2xl mx-auto h-auto lg:h-[80vh] w-11/12 lg:w-[175vh]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Text Section */}
        <motion.div
          className='flex flex-col justify-center w-full lg:w-1/2 h-auto lg:h-full p-6 lg:px-12 lg:py-16'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
        >
          <motion.p
            className='text-black bg-cyan-200 m-4 lg:mx-0 text-xs lg:text-sm font-bold px-5 py-1 border border-cyan-300 w-fit rounded-3xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            #PneumaticSolutions
          </motion.p>

          <motion.h1
            className='text-white text-2xl md:text-3xl lg:text-5xl mx-4 lg:mx-0 mb-4 font-semibold leading-tight'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Flexible Solutions for Your Pneumatics Needs
          </motion.h1>

          <motion.p
            className='mx-4 lg:mx-0 text-white text-sm md:text-base lg:text-lg mb-6 leading-relaxed'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            We provide cutting-edge pneumatic solutions tailored to enhance your operational efficiency. Our expertise ensures seamless integration of innovative systems designed to meet your specific requirements.
          </motion.p>

          <motion.div
            className='mx-4 lg:mx-0'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <button 
              className='flex items-center justify-center gap-2 text-[#080127] text-sm md:text-base w-full md:w-2/5 h-12 bg-orange-300 hover:bg-[#fbbd60]/90 rounded-full px-1 py-2 lg:text-lg transition-colors duration-300 ease-in-out' 
              onClick={handleProducts} // Corrected here
            >
              Explore Products <span className='border text-white bg-black border-black w-10 h-10 p-1 rounded-full ml-1'>➜</span> 
     
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className='w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <img 
            src={main} 
            alt="Main visual" 
            className='w-full h-auto lg:h-[75vh] object-cover rounded-lg shadow-lg'
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
