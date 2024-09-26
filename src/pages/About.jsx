import React from 'react';
import a from '../assets/A.jpg';
import b from '../assets/b.png';

function About() {
  return (
    <>
      <div className="w-screen h-auto">
        {/* Top section with background image */}
        <img src={b} className="w-full h-[35vh] object-cover border-b border-black" alt="Background" />

        {/* Profile image */}
        <img 
          src={a} 
          className="w-auto sm:w-2/4 border-4 border-white rounded-full h-[50vh] mx-auto -mt-16 relative z-10 object-cover" 
          alt="Profile" 
        />
      </div>

      {/* About text */}
      <div className="px-4 lg:px-40 py-10 text-center">
        <h1 className="text-3xl font-bold mb-6">About Vidyard</h1>
        <p className="text-lg mb-4">
          Vidyard’s About Us page leads with a headline highlighting its mission and flows directly into the core functions of its product. 
          The page has a product demo video that you’ll stumble across as you scroll, revealing additional use cases.
        </p>
        <p className="text-lg mb-4">
          This high-level approach to an About Us page places the primary focus on the product’s benefits with a secondary focus on the team. 
          If your product is complex, this may be an approach to consider.
        </p>
        <p className="text-lg mb-4">
          Consumer-Packaged Goods (CPG) Industry: RXBAR, The Sill, and Hydrant are examples of CPG companies that effectively use About Us 
          pages to tell their stories.
        </p>
      </div>
    </>
  );
}

export default About;
