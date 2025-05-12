import React from "react";
import Ai from "../../images/AI.png";

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

const Recent = () => {
  return (
    <div className="bg-[#F3F7FB] w-[97%] py-10 sm:py-16 md:py-[70px] rounded-r-[10px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-[300px_minmax(900px,_1fr)_100px] gap-0 items-start">
        <div className="flex flex-col items-start pl-10 lg:sticky top-0 z-10 md:pb-20 md:py-0 lg:top-[30%] lg-bg-transparent">
          <div className="font-bold text-3x1 lg:text-3xl sm:text-4xl md:text-[50px] text-[60px] mb-8 leading-tight hover:text-[#ed6c25] cursor-pointer">
            Recent work
          </div>
          <a
            href="/Home"
            className="border-2 border-[#0a2239] rounded-full px-4 py-3 text-lg font-medium hover:bg-[#DBE5ED] transition"
          >
            Discover all our work
          </a>
        </div>

        <div>
          {workItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#ddeaf7] rounded-[40px] p-12 flex items-center relative overflow-hidden min-h-[320px] mb-10 group"
            >
              <div className="max-w-[420px] z-10">
                <div className="text-4xl font-serif font-semibold mb-4 group-hover:text-[#ed6c25] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                  {item.title}
                </div>
                <div className="text-lg text-black font-normal">
                  {item.description}
                </div>
                <p className="pt-2">Read the full case </p>
              </div>
              <img
                src={item.image}
                alt="ai image"
                className="absolute top-0 right-0 h-full w-[60%] object-cover shadow-lg z-0 scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
                style={{
                  clipPath:
                    "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
