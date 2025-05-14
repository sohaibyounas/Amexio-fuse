import React from "react";
import homebg from "../../images/manage-bg.png";
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

        {/* Right: Circular Image and SVG Accent */}
        <div className="flex-1 flex justify-end items-center relative mt-10 md:mt-0">
          <div className="relative hidden sm:hidden md:block">
            <img
              src={homebg}
              alt="Amexio"
              className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Talk;
