import React from "react";
import sun from "../../images/sun.jpg";
import mice from "../../images/mice.jpg";
import A from "../../images/A.png";
import Customer from "../../images/customer1.jpg";
import Customer2 from "../../images/customer2.jpg";

const Insights = () => {
  return (
    <>
      {/* Insights */}
      <div className="bg-[#04273F] w-full py-20"></div>
      <div className="bg-[#F3F7FB] w-[97%] pt-20 rounded-r-[10px] px-10 text-[45px] font-semibold">
        Latest insights
        <div className="flex items-center gap-[20px]">
          {/* insights card */}
          {/* sun card */}
          <div className="max-w-sm rounded-2xl h-[580px] flex flex-col overflow-hidden pt-10">
            <img
              src={sun}
              alt="Card Image"
              className="w-full h-[255px] object-cover rounded-[10px]"
            />
            <div className="py-5 flex-1 flex flex-col">
              <p className="text-gray-500 text-sm mb-2">22 April 2025</p>
              <h2 className="text-xl text-[25px] font-bold text-gray-900 mb-2 leading-snug">
                Customer portals done right: start with strategy, not with
                feature dumps
              </h2>
              <p className="text-gray-700 text-base">
                How to set your portal initiative up for success by focusing on
                vision and strategy before anything gets designed or built.
              </p>
            </div>
          </div>

          {/* Mice card */}
          <div className="max-w-sm rounded-2xl h-[580px] flex flex-col overflow-hidden pt-10">
            <img
              src={mice}
              alt="Card Image"
              className="w-full h-[255px] object-cover rounded-[10px]"
            />
            <div className="py-5 flex-1 flex flex-col">
              <p className="text-gray-500 text-sm mb-2">22 April 2025</p>
              <h2 className="text-xl text-[25px] font-bold text-gray-900 mb-2 leading-snug">
                Foundations for a robust and scalable customer portal
              </h2>
              <p className="text-gray-700 text-base">
                In the wake of global disruptions and rising customer
                expectations, companies are increasingly digitizing their
                customer service/communications to improve user satisfaction and
                operational efficiency. Let's discover the best practices for
                building a future-proof customer portal.
              </p>
            </div>
          </div>

          {/* A card */}
          <div className="max-w-sm rounded-2xl h-[580px] flex flex-col overflow-hidden pt-10">
            <img
              src={A}
              alt="Card Image"
              className="w-full h-[255px] object-cover rounded-[10px]"
            />
            <div className="py-5 flex-1 flex flex-col">
              <p className="text-gray-500 text-sm mb-2">22 April 2025</p>
              <h2 className="text-xl text-[25px] font-bold text-gray-900 mb-2 leading-snug">
                Foundations for a robust and scalable customer portal
              </h2>
              <p className="text-gray-700 text-base">
                In the wake of global disruptions and rising customer
                expectations, companies are increasingly digitizing their
                customer service/communications to improve user satisfaction and
                operational efficiency. Let's discover the best practices for
                building a future-proof customer portal.
              </p>
            </div>
          </div>
        </div>
        {/* customer portal */}
        <div className="bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="flex items-start space-x-4 border-b border-blue-100 pb-4">
                <img
                  src={Customer}
                  alt="Jan Lemmens"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Jan Lemmens
                  </h3>
                  <p className="text-sm text-gray-600">Solution Manager CXM</p>
                </div>
              </div>
              {/* line */}
              <div className="h-[2px] w-full bg-blue-100 rounded-full mb-4"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col">
              <div className="flex items-start space-x-4 border-b border-blue-100 pb-4">
                <img
                  src={Customer}
                  alt="Jan Lemmens"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Jan Lemmens
                  </h3>
                  <p className="text-sm text-gray-600">Solution Manager CXM</p>
                </div>
              </div>
              {/* line */}
              <div className="h-[2px] w-full bg-blue-100 rounded-full mb-4"></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col">
              <div className="flex items-start space-x-4 border-b border-blue-100 pb-4">
                <img
                  src={Customer2}
                  alt="Jan Lemmens"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Jan Lemmens
                  </h3>
                  <p className="text-sm text-gray-600">Solution Manager CXM</p>
                </div>
              </div>
              {/* line */}
              <div className="h-[2px] w-full bg-blue-100 rounded-full mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
