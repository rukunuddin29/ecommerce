import React from 'react';
import a from '../assets/A.jpg'; // Assuming this is the correct image import

// Text object for the content
const text = {
  image: a, // Using the imported image directly
  title: "About Us",
  main: "We provide high-quality pneumatic solutions for industrial applications.",
  description: "With years of expertise, we ensure our products are reliable, affordable, and accessible to businesses of all sizes."
};

function About() {
  return (
    <>
      {/* First Section */}
      <h1 className='text-xl lg:text-4xl font-bold text-[#080127] text-center w-11/12 mx-auto mt-10 mb-16 lg:mb-20'>
        Committed to Delivering Top-Quality <span className='text-orange-400'>Pneumatic</span> Service and Support
      </h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 bg-white rounded-2xl shadow-lg m-6 lg:m-10 gap-6 lg:gap-10">
          
          {/* Image Section */}
          <div>
            <div className="w-full h-full">
              <div className="relative">
                <img
                  src={text.image} // Use the image from the object
                  className="w-full h-52 sm:h-64 lg:h-[60vh] object-cover rounded-tl-2xl lg:rounded-bl-2xl"
                  alt="About Us"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-16">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">{text.title}</h1>
              <p className="text-md lg:text-xl text-gray-600">{text.main}</p>
              <p className="text-sm lg:text-md text-gray-500 mt-4">{text.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 bg-white rounded-2xl shadow-lg m-6 lg:m-10 gap-6 lg:gap-10">
          
          {/* Text Section */}
          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-16">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">We are Creative Since 2005</h1>
              <p className="text-md lg:text-xl text-gray-600">
                Pagedone isn’t just a collection of components and guidelines; it's a philosophy. We go beyond aesthetics, prioritizing accessibility, scalability, and usability.
              </p>
              <p className="text-sm lg:text-md text-gray-500 mt-4">
                Every element, from the tiniest detail to the grandest layout, is meticulously crafted to enhance functionality and elevate user satisfaction.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <div className="w-full h-full">
              <div className="relative">
                <img
                  src={text.image} // Use the image from the object
                  className="w-full h-52 sm:h-64 lg:h-[60vh] object-cover rounded-tr-2xl lg:rounded-bl-2xl"
                  alt="We are Creative Since 2005"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
