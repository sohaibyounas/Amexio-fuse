import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 group">
      {/* Circle with X */}
      <div className="flex items-center justify-center rounded-full border-2 border-white w-10 h-10 relative group-hover:border-sky-500 transition-colors duration-200">
        <div className="absolute w-6 h-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <line x1="18" y1="6" x2="6" y2="18" stroke="orange" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex items-center space-x-1">
        <span className="text-white font-bold md:text-[30px] lg:text-[20px] tracking-widest hover:text-sky-700">
          AMEXIO
        </span>
        <span className="text-orange-600 font-cursive text-2xl italic md:text-[30px]">
          fuse
        </span>
      </div>
    </div>
  );
};

export default Logo;
