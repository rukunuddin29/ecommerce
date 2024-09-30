import React from 'react';
import Title from './Title';
import about from '../assets/ABOUT.png';

function Aboutus() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Us Section */}
        <div className="text-center mb-6">
          <Title title={'ABOUT'} />
          <p className="text-lg text-gray-600 mt-4">
            We are a dedicated team committed to delivering exceptional results. Our mission is to provide innovative solutions and services that meet the highest standards of quality and excellence.
          </p>
        </div>

        {/* Banner */}
        <div className="relative rounded-xl mb-6 border shadow-lg overflow-hidden">
          <img src={about} alt="Banner" className="w-full h-[30vh] lg:h-[40vh] object-cover transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-6 pb-4">
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 text-center bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl text-[#EE6F57] mb-2 font-bold">10</h1>
            <h4 className="text-lg text-gray-700">Years of Experience</h4>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 text-center bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl text-[#EE6F57] mb-2 font-bold">200+</h1>
            <h4 className="text-lg text-gray-700">Projects Completed</h4>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 text-center bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl text-[#EE6F57] mb-2 font-bold">50+</h1>
            <h4 className="text-lg text-gray-700">Team Members</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
