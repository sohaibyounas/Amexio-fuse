import React from "react";
import Adobe from "../../images/Adobe.png";
import Drupal from "../../images/Durapl.png";
import S from "../../images/S.png";
import CSQ from "../../images/CSQ.png";

const Technology = () => {
  return (
    <>
      {/* Core Technologies */}
      <div className="container mx-auto text-center pt-[170px] pb-[88px]">
        {/* Heading and Subheading  */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Core <span className="text-[#FFC256]"> technologies </span>
          we trust upon
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          We focus on gaining{" "}
          <span className="px-1 font-bold"> deep expertise </span> in a select
          number of core products, each applicable to different use cases we see
          in the market today.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl mx-auto justify-items-center items-center">
          {/* Logo 1 */}
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <img src={Adobe} alt="Adobe" className="h-24 w-auto" />
            </div>
            <p className="text-lg text-white text-center leading-tight">
              Adobe Experience <br />
              Cloud
            </p>
          </div>
          {/* Logo 2 */}
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <img src={Drupal} alt="Drupal" className="h-24 w-auto" />
            </div>
            <p className="text-lg text-white text-center leading-tight">
              Drupal
            </p>
          </div>
          {/* Logo 3 */}
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <img src={S} alt="Sanity" className="h-24 w-auto" />
            </div>
            <p className="text-lg text-white text-center leading-tight">
              Sanity
            </p>
          </div>
          {/* Logo 4 */}
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <img src={CSQ} alt="Contentsquare" className="h-24 w-auto" />
            </div>
            <p className="text-lg text-white text-center leading-tight">
              Contentsquare
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
