import React from "react";
import Ai from "../../images/AI.png";

const Recent = () => {
  return (
    <>
      {/* Recent Work */}
      <div className="bg-[#F3F7FB] w-[97%] py-[70px] rounded-r-[10px]">
        <div className="max-w-7xl mx-auto grid grid-cols-[300px_minmax(900px,_1fr)_100px] gap-0 items-start">
          {/* left title */}
          <div className="flex flex-col items-start pl-10 sticky top-[30%]">
            <div className="font-bold text-[50px] mb-8 leading-tight">
              Recent
              <br />
              work
            </div>
            <a
              href="/Home"
              className="border-2 border-[#0a2239] rounded-full px-4 py-3 text-lg font-medium hover:bg-[#eaf1fa] transition"
            >
              Discover all our work
            </a>
          </div>
          {/* scrool image & text */}
          <div>
            {/* Text & Image  */}
            <div className="bg-[#ddeaf7] rounded-[40px] p-12 flex items-center relative overflow-hidden min-h-[320px] mb-10">
              <div className="max-w-[420px] z-10">
                <div className="text-4xl font-serif font-semibold mb-4">
                  Transforming OECD’s Web Presence
                </div>
                <div className="text-lg text-black font-normal">
                  A significant upgrade to OECD’s digital presence, providing a
                  seamless user experience and robust content management
                  workflows. The new platform is dynamic, responsive, and
                  accessible to a global audience.
                </div>
                <p className="pt-2">Read the full case </p>
              </div>
              {/* image for work */}
              <div>
                <img
                  src={Ai}
                  alt="ai image"
                  className="absolute right-8 bottom-0 w-[400px] rounded-tr-[40px] rounded-br-[40px] object-contain shadow-lg z-0  
                      "
                  style={{
                    maxHeight: 240,
                    clipPath:
                      "polygon(54.806% .062%, 54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 99.927% 99.938%, 99.934% 99.938%, 99.942% 99.938%, 99.949% 99.938%, 99.956% 99.938%, 99.964% 99.938%, 99.971% 99.938%, 99.978% 99.938%, 99.985% 99.938%, 99.993% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)",
                  }}
                />
              </div>
            </div>

            {/* text & Images 2 */}
            <div className="bg-[#ddeaf7] rounded-[40px] p-12 flex items-center relative overflow-hidden min-h-[320px] mb-10">
              <div className="max-w-[420px] z-10">
                <div className="text-4xl font-serif font-semibold mb-4">
                  Transforming OECD’s Web Presence
                </div>
                <div className="text-lg text-black font-normal">
                  A significant upgrade to OECD’s digital presence, providing a
                  seamless user experience and robust content management
                  workflows. The new platform is dynamic, responsive, and
                  accessible to a global audience.
                </div>
                <p className="pt-2">Read the full case </p>
              </div>
              {/* image for work */}
              <img
                src={Ai}
                alt="ai image"
                className="absolute right-8 bottom-0 w-[400px] rounded-tr-[40px] rounded-br-[40px] object-contain shadow-lg z-0"
                style={{
                  maxHeight: 240,
                  clipPath:
                    "polygon(54.806% .062%, 54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 99.927% 99.938%, 99.934% 99.938%, 99.942% 99.938%, 99.949% 99.938%, 99.956% 99.938%, 99.964% 99.938%, 99.971% 99.938%, 99.978% 99.938%, 99.985% 99.938%, 99.993% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)",
                }}
              />
            </div>

            {/* text & Images 3 */}
            <div className="bg-[#ddeaf7] rounded-[40px] p-12 flex items-center relative overflow-hidden min-h-[320px]">
              <div className="max-w-[420px] z-10">
                <div className="text-4xl font-serif font-semibold mb-4">
                  Transforming OECD’s Web Presence
                </div>
                <div className="text-lg text-black font-normal">
                  A significant upgrade to OECD’s digital presence, providing a
                  seamless user experience and robust content management
                  workflows. The new platform is dynamic, responsive, and
                  accessible to a global audience.
                </div>
                <p className="pt-2">Read the full case </p>
              </div>
              <img
                src={Ai}
                alt="ai image"
                className="absolute right-8 bottom-0 w-[400px] rounded-tr-[40px] rounded-br-[40px] object-contain shadow-lg z-0"
                style={{
                  maxHeight: 240,
                  clipPath:
                    "polygon(54.806% .062%, 54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 99.927% 99.938%, 99.934% 99.938%, 99.942% 99.938%, 99.949% 99.938%, 99.956% 99.938%, 99.964% 99.938%, 99.971% 99.938%, 99.978% 99.938%, 99.985% 99.938%, 99.993% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
