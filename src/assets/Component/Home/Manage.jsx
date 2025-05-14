import React from "react";
import { TbAlertHexagon } from "react-icons/tb";
import manage from "../../images/manage-bg.png";

const Manage = () => {
  return (
    <>
      {/* Manage Content */}
      {/* bg image */}
      <div
        className="relative overflow-hidden py-20 md:py-10 bg-no-repeat bg-contain bg-right-top top-[0] left-[0px]"
        style={{ backgroundImage: `url(${manage})` }}
      >
        {/* Manage Content */}
        <div className="pt-0 sm:pt-0 md:pt-[172px]">
          <div className="px-10">
            {/* paragraph */}
            <div className="text-white pb-15 group">
              <h1 className="font-semibold text-[45px] sm:text-[40px] md:text-[40px] lg:text-[44px] pb-5 group-hover:text-[#ed6c25] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out md:w-[80%] lg:max-w-[70%] ">
                Managing content at scale can be challenging
              </h1>
              <div className="pr-0 sm:pr-[25px] w-full">
                <p className="font-nomral text-[20px] pb-5">
                  As your digital channels expand, content volumes increase, and
                  more teams get involved in your content workflows, content
                  operations become more complex. Governance gets more
                  challenging, and finding and discovering content gets more
                  time-consuming.
                </p>
                <p className="font-normal text-[20px]">
                  Eventually, these factors lead to inconsistent, out-of-date,
                  hard-to-access, and slow experiences for your customers.
                </p>
              </div>
            </div>

            {/* card */}
            <div className="w-full pt-20 pb-10 flex flex-col md:flex-col lg:flex-row lg:justify-center gap-10">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="md:w-full lg:max-w-sm rounded-2xl overflow-hidden bg-[#063859] shadow-md shadow-blue-500/40 p-6 group"
                >
                  <div className="flex flex-col items-center text-white">
                    <div className="mb-4">
                      {item.icon && <item.icon className="w-[70px] h-[70px]" />}
                    </div>
                    <h2 className="text-[30px] font-semibold text-center mb-4 group-hover:text-[#ed6c25] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                      {item.title}
                    </h2>
                    <p className="text-center text-[22px] leading-tight-[27px]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Manage;

const card = [
  {
    title: "Lack of content governance",
    detail:
      "As content volume increases, efficiency for editorial teams is heavily reduced, content lifecycle complexity increases, resulting in slower time to market.",
    icon: TbAlertHexagon,
  },
  {
    title: "Inconsistencies across channels",
    detail:
      "A growing number of channels and underlying technologies can cause disjointed customer journeys. After a while customer engagement decreases, impacting conversion rates.",
    icon: TbAlertHexagon,
  },
  {
    title: "Output-driven digital projects",
    detail:
      "Too often, digital projects are often output-driven. There is not enough focus on delivering actual business outcomes, aligning with the overall business objectives and striving to meet KPIs.",
    icon: TbAlertHexagon,
  },
];
