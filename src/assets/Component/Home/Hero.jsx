import React from "react";
import hero from "../../images/home-bg.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[300px] lg:bg-none">
      <div
        className="absolute bg-no-repeat bg-contain bg-left-bottom opacity-40 block md:hidden"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      {/* hero section */}
      <div className="mt-10 flex justify-between items-center w-full px-2">
        <div className="cursor-pointer">
          <h1 className="text-white ml-2 sm:ml-3 md:ml-6 text-[40px] sm:text-[65px] md:text-[65px] font-bold max-w-full">
            Connecting the dots, from
            <span className="text-[40px] sm:text-[65px] md:text-[65px] text-[#FFC256] font-bold px-3">
              content
            </span>
            to experience.
          </h1>
          <p className="text-white text-[25px] sm:text-[28px] font-medium pl-2 sm:pl-8 md:pl-8 pt-10 pr-2 sm:pr-0 max-w-[650px]">
            AmeXio Fuse helps you to optimize your content operations, making
            your
            <span className="text-[#FFC256] px-2 ">customer experiences</span>
            smarter, faster, and more affordable.
          </p>
        </div>

        {/* image */}
        <div className="hidden lg:block">
          <img
            src={hero}
            alt="heroimage"
            className="w-[70rem] h-auto object-contain absolute -top-20 left-125"
          />
        </div>
      </div>

      {/* SubText */}
      <div
        className="group flex items-center rounded-[25px] w-fit pr-1 sm:pr-2 ml-[35px] mt-10 mb-15 
        bg-[#FFC256] p-3 cursor-pointer"
      >
        <div className="pl-[5px] hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 transition-transform duration-300 ease-in-out group-hover:scale-75 group-hover:animate-ping"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <p className="font-medium pl-[5px] sm:pl-[10px] pr-4 sm:pr-0 py-1 sm:py-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
          Talk to us about your content challenge
        </p>
      </div>
    </div>
  );
};

export default Hero;
