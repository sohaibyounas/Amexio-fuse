import React from "react";
import Ai from "../../images/AI.png";

const Recent = () => {
  return (
    <div className="bg-[#F3F7FB] w-[100%] lg:w-[98%] rounded-0 lg:rounded-r-[20px] py-10 sm:py-16 md:py-[70px]">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-[100%] xl:grid-cols-[20%_80%] gap-0 items-start px-4 sm:px-6 lg:px-8">
        {/* Recent Work */}
        <div className="w-full flex flex-col items-start pl-0 sm:pl-10 lg:static xl:sticky top-0 z-10 mb-2 sm:mb-20 md:pb-20 md:py-0 lg:top-[30%] lg-bg-transparent">
          <div className="font-bold text-3x1 lg:text-3xl sm:text-4xl text-[40px] sm:[50px] md:text-[50px] lg:text-[50px] mb-4 sm:mb-8 leading-tight hover:text-[#ed6c25] cursor-pointer">
            Recent work
          </div>
          <a
            href="/Home"
            className="mb-6 sm:mb-0 border-2 border-[#0a2239] rounded-full px-4 py-3 text-lg font-medium hover:bg-[#DBE5ED] transition"
          >
            Discover all our work
          </a>
        </div>

        {/* Work Details */}
        <div className="md:px-[15px] lg:pl-10 w-full">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#ddeaf7] rounded-[20px] p-0 flex flex-col sm:flex-col md:flex-col lg:flex-row relative overflow-hidden min-h-[320px] mb-10 group shadow-lg"
            >
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] z-10 p-5">
                <div className="text-4xl font-serif font-normal sm:font-semibold mb-4 group-hover:text-[#ed6c25] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                  {item.title}
                </div>
                <div className="text-lg text-black font-normal">
                  {item.description}
                </div>
                <p className="pt-2">Read the full case </p>
              </div>

              {/* image */}
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[75%]">
                <img
                  src={item.image}
                  alt="ai image"
                  className="object-cover w-full h-full shadow-lg scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
                  style={{
                    clipPath:
                      "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;

const workItems = [
  {
    title: "Transforming OECD’s Web Presence",
    description:
      "A significant upgrade to OECD’s digital presence, providing a seamless user experience and robust content management workflows. The new platform is dynamic, responsive, and accessible to a global audience.",
    image: Ai,
  },
  {
    title: "Transforming OECD’s Web Presence",
    description:
      "A significant upgrade to OECD’s digital presence, providing a seamless user experience and robust content management workflows. The new platform is dynamic, responsive, and accessible to a global audience.",
    image: Ai,
  },
  {
    title: "Transforming OECD’s Web Presence",
    description:
      "A significant upgrade to OECD’s digital presence, providing a seamless user experience and robust content management workflows. The new platform is dynamic, responsive, and accessible to a global audience.",
    image: Ai,
  },
];
