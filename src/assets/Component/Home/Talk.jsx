import React from "react";
import amexio from "../../images/amexio.png";
import { MdForwardToInbox } from "react-icons/md";

const Talk = () => {
  return (
    <>
      {/* Let's Talk Section */}
      <div className="relative bg-[#e3f1fb] w-full overflow-hidden flex flex-col md:flex-row items-center justify-between px-10 py-10">
        {/* Left: Text and Button */}
        <div className="flex-1 min-w-[320px] z-10">
          <h2 className="text-[40px] md:text-[50px] font-serif text-black md:mb-0 lg:mb-4">
            Let's talk
          </h2>
          <p className="text-[22px] md:text-[24px] lg:text-[26px] text-black mb-10 max-w-xl">
            Do you have a specific content challenge you want to discuss?
          </p>
          <button className="group flex items-center gap-4 px-8 py-6 rounded-full border-2 border-black relative bg-transparent text-black text-2xl font-semibold transition hover:scale-105 hover:bg-[#C4D7E8] focus:outline-none">
            <span className="inline-flex items-center justify-center">
              {/* Envelope Icon */}
              <MdForwardToInbox className="w-7 h-7 mr-2 transition-transform duration-300 group-hover:scale-75 group-hover:animate-ping" />
            </span>
            Get in touch
          </button>
        </div>

        {/* Circular Image and SVG Accent */}
        <div className="relative w-full h-screen hidden md:block">
          {/* SVG Gradient Lines */}
          <svg
            viewBox="0 90 700 600"
            className="absolute md:top-[190px] lg:top-[180px] md:right-[0px] lg:right-[40px] lg:w-[40rem] z-0"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#003B5C" />
                <stop offset="55%" stopColor="#FF6B35" />
              </linearGradient>
            </defs>

            <path
              d="M 100 700 L 500 100 L 600 100 L 200 700 Z"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              fill="none"
            />
          </svg>

          {/* Circular Image */}
          <img
            src={amexio}
            alt="AmeXio office"
            className="absolute top-[15rem] right-[30px] md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem] rounded-full object-cover border-[6px] border-white z-20 shadow-lg"
          />
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Talk;
