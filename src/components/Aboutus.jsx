import React from 'react';
import Title from './Title';
import about from '../assets/ABOUT.png'

function Aboutus() {
  return (
    <section className=" px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Us Section */}
        <div className="text-center mb-3 p-8">
         <Title title={'ABOUT'}></Title>
          {/* gpt */}

          <p className="text-lg text-gray-600">
            We are a dedicated team committed to delivering exceptional results. Our mission is to provide innovative solutions and services that meet the highest standards of quality and excellence.
          </p>
        </div>

        {/* Banner */}
        <div className="relative rounded-xl mb-6 border ">
          <img src={about} alt="Banner" className="w-full rounded-xl h-[15vh] lg:h-full object-cover" />
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-3 pb-4">
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 text-center">
            <h1 className="text-3xl text-[#EE6F57] mb-4 font-bold">10</h1>
            <h4 className="text-lg">Years of Experience</h4>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/5 text-center">
            <h1 className="text-3xl text-[#EE6F57] mb-4 font-bold">200+</h1>
            <h4 className="text-lg">Projects Completed</h4>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 text-center">
            <h1 className="text-3xl text-[#EE6F57] mb-4 font-bold">50+</h1>
            <h4 className="text-lg">Team Members</h4>
          </div>
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 text-center">
            <h1 className="text-3xl text-[#EE6F57] mb-4 font-bold">5</h1>
            <h4 className="text-lg">Global Offices</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
