import React from "react";
import hero from "../../images/home-bg.png";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceHero = ({ data }) => {
  const parts = data.para.split(/\/(.*?)\//);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pb-10">
          {/* links */}
          <div>
            <ul className="flex items-center text-white text-[20px] font-normal pt-5 sm:pt-10 md:pt-10 px-5 sm:px-10 md:px-5 lg:px-10 group gap-3">
              <li>
                <Link
                  to="/Home"
                  className="group-hover:text-[#FFC256] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out underline"
                >
                  Home
                </Link>
              </li>
              <FaAngleRight size={20} />
              <li>
                <a href={data.link}>{data.linkText}</a>
              </li>
            </ul>
          </div>
          <div
            className="absolute bg-no-repeat bg-contain bg-left-bottom opacity-40 block lg:hidden"
            style={{ backgroundImage: `url(${hero})` }}
          ></div>

          {/* hero section */}
          <div className="mt-5 flex justify-between items-center w-full px-2 text-white">
            {/* heading */}
            <div className="cursor-pointer px-5 sm:px-5 md:px-3 lg:px-7 w-full">
              <h1 className="text-[45px] sm:text-[50px] md:text-[76px] font-bold leading-[99px]">
                {data.title}
              </h1>
              {/* sub text */}
              <p className="text-[28px] leading-[36px] font-normal sm:font-medium py-10 md:mx-w-[1000px] lg:max-w-[800px]">
                {parts.map((part, index) =>
                  index % 2 === 1 ? ( // odd indices are inside slashes
                    <span key={index} className="text-[#FFC256] px-1">
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
            </div>

            {/* image */}
            <div className="hidden lg:block">
              <img
                src={hero}
                alt="heroimage"
                className="w-[50rem] h-auto object-contain filter brightness-0 invert absolute -top-0 left-175 text-blue-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;
