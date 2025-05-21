import React, { useContext } from "react";
import Integratingimg from "../../images/Integrating.webp";
 

const Integrating = () => {
 

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row md:items-start lg:items-center justify-between w-full px-2 sm:px-5 py-10">
        {/* text */}
        <div className="w-full">
          <h1 className="text-[30px] sm:text-[44px] md:text-[44px] leading-[57px] text-[#111827] font-medium px-5 pt-10 pb-5 w-full md:w-[60%] lg:w-[40%]">
            Integrating people, processes and tools
          </h1>
          <div className="">
            <p className="text-[20px] leading-[30px] text-[#111827] font-normal px-5 pb-5 w-full">
              At AmeXio, we take a 
              <span className="font-bold px-1">holistic</span>
              approach to integrating people, processes, and tools. We go beyond
              just implementation, focusing on three key areas to ensure your
              CXM program succeeds and delivers real
              <span className="font-bold px-1">return on investment (ROI)</span>
              . We help your team adapt to new systems, streamline processes for
              smooth integration, and use the latest technologies to meet your
              needs.
            </p>
            <p className="text-[20px] leading-[30px] text-[#111827] font-normal px-5 pb-5 w-full">
              By creating a
              <span className="font-bold px-1">long-term vision</span>
              with you, with you, we make sure every part of your CXM program
              works together seamlessly for lasting success.
            </p>
          </div>
        </div>
        {/* Integrating image */}
        <div className="md:px-7 md:pt-10 sm:pt-14 md:w-full lg:w-[60%]">
          <img
            src={Integratingimg}
            alt="Integrating"
            className="rounded-[10px] object-cover h-auto scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Integrating;
