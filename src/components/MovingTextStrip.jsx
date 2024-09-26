import React from 'react';
import '../App.css'; // Import the CSS file for custom animation

const MovingTextStrip = () => {
  return (
    <div className="relative overflow-hidden bg-[#EE6F57] text-black py-2 h-10">
      <div className="absolute whitespace-nowrap animate-marquee">
        <span>GRINDERS</span>
        <span className="mx-56">🟠</span>
        <span>DRILLERS</span>
        <span className="mx-56">🟠</span>
        <span>RAMMERS</span>
        <span className="mx-56">🟠</span>
        <span>HAMMERS</span>
        <span className="mx-56">🟠</span>
        <span>IMPACT WRENCHES</span>
      </div>
    </div>
  );
};

export default MovingTextStrip;56