import React from "react";
import hero from '../../images/home-bg.png';

const Hero = () => {
  return (
    <>
      {/* hero section */}
      <div className="mb-10">
        <div className="mt-36 flex justify-between items-center w-full px-2">
          <div>
            <h1 className="text-white ml-6 text-[60px] font-bold">
              Connecting the dots, from
              <span className="text-[60px] text-[#FFC256] font-bold px-3">
                content
              </span>
              to experience.
            </h1>
            <p className="text-white text-[28px] font-medium pl-8  w-full pt-10 max-w-[650px]">
              AmeXio Fuse helps you to optimize your content operations, making
              your
              <span className="text-[#FFC256]  px-2 ">
                customer experiences
              </span>
              smarter, faster, and more affordable.
            </p>
          </div>
          {/* image */}
          <div>
            <img
              src={hero}
              alt="heroimage"
              className="w-[300px] md:w-[500px] h-auto object-contain filter brightness-0 invert"
              style={{ color: "#1D4ED8" }} // Tailwind's blue-700
            />
          </div>
        </div>
        <div className="flex items-center rounded-[25px] w-[400px] max-w-xl ml-[35px] mt-10 mb-15 bg-[#FFC256] p-3 ">
          <div className="pl-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <p className="font-medium pl-[10px]">
            Talk to us about your content challenge
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
