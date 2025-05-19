import React from "react";
import hero from "../../images/home-bg.png";
import { FaAngleRight } from "react-icons/fa6";

const GeneralHero = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pb-10">
          {/* links */}
          <div>
            <ul className="flex items-center text-white text-[20px] font-normal px-10 group gap-3">
              <li className="group-hover:text-[#FFC256] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out underline">
                <a href="/Home">Home</a>
              </li>
              <FaAngleRight size={20} />
              <li>
                <a href="/Services"></a>
              </li>
            </ul>
          </div>
          <div
            className="absolute bg-no-repeat bg-contain bg-left-bottom opacity-40 block lg:hidden"
            style={{ backgroundImage: `url(${hero})` }}
          ></div>

          {/* hero section */}
          <div className="mt-10 flex justify-between items-center w-full px-2">
            {/* Text Area */}

            {/* image */}
            <div className="hidden lg:block">
              <img
                src={hero}
                alt="heroimage"
                className="w-[70rem] h-auto object-contain filter brightness-0 invert absolute -top-20 left-135 text-blue-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralHero;
