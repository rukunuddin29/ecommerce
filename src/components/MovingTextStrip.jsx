import React from 'react';
import '../App.css'; // Import the CSS file for custom animation

const MovingTextStrip = () => {
  return (
    <div className="relative overflow-hidden bg-[#FFF5E4] text-black py-2 h-10">
      <div className="absolute whitespace-nowrap animate-marquee">
        Welcome to my website! Stay tuned for exciting updates!
      </div>
    </div>
  );
};

export default MovingTextStrip;
