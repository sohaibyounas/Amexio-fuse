import React from "react";
import Adobe from "../../images/Adobe.png";
import Drupal from "../../images/Durapl.png";
import S from "../../images/S.png";
import CSQ from "../../images/CSQ.png";

const Technology = () => {
  return (
    <>
      {/* Core Technologies */}
      <div className="container mx-auto text-center pt-[70px] sm:pt-[100px] md:pt-[120px] lg:pt-[100px] pb-[88px] px-0 md:px-2">
        {/* Heading and Subheading  */}
        <div className="px-10">
          <h1 className="text-[30px] md:text-[40px] text-3x1 sm:text-4xl md:text-5xl font-bold md:mb-8 text-white">
            Core <span className="text-[#FFC256]"> technologies </span>
            we trust upon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            We focus on gaining
            <span className="px-1 font-bold"> deep expertise </span> in a select
            number of core products, each applicable to different use cases we
            see in the market today.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid md:max-w-3xl grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-15 md:gap-20 lg:gap-20 mx-auto justify-items-center items-center">
          {tech.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col items-center">
                <div className="mb-2 group">
                  <img
                    src={item.img}
                    alt="Adobe"
                    className="h-24 w-auto object-cover group-hover-rounded-t-[10px] scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <p className="text-lg text-white text-center leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Technology;

const tech = [
  {
    img: Adobe,
    title: "Adobe Experience",
  },
  {
    img: Drupal,
    title: "Drupal",
  },
  {
    img: S,
    title: "Sanity",
  },
  {
    img: CSQ,
    title: "Contentsquare",
  },
];
