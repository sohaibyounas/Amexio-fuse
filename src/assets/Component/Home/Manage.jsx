import React from "react";
import { TbAlertHexagon } from "react-icons/tb";

const Manage = () => {
  return (
    <>
      {/* Manage Content */}
      <div
        className="pt-[120px]"
      >
        <div className="pl-10">
          {/* paragraph */}
          <div className="text-white pb-15">
            <h1 className="font-medium text-[40px]">
              Managing content at scale can be challenging
            </h1>
            <p className="font-light text-[20px] w-full mx-w-200 pb-5">
              As your digital channels expand, content volumes increase, and
              more teams get involved in your content workflows, content
              operations become more complex. Governance get more challenging,
              and finding and discovering content gets more time-consuming.
            </p>
            <p className="font-light text-[20px] w-full mx-w-200">
              Eventually, these factors lead to inconsistent, out-of-date,
              hard-to-access, and slow experiences for your customers.
            </p>
          </div>

          {/* card */}
          <div className="py-10 flex justify-center gap-5 pr-10">
            {/* card 1 */}
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-blue-950 p-4">
              <div className="my-4">
                <div className="items-center justify-center pl-35">
                  <TbAlertHexagon
                    style={{ width: 70, height: 70, color: "white" }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-center text-white px-13 text-[25px] my-5">
                  Lack of content governance
                </h2>
                <p className="mt-2 px-14 text-white">
                  As content volume increases, efficiency for editorial teams is
                  heavily reduced, content lifecycle complexity increases,
                  resulting in slower time to market.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-blue-950 p-4">
              <div className="mt-4">
                <div className="items-center justify-center pl-35">
                  <TbAlertHexagon
                    style={{ width: 70, height: 70, color: "white" }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-center text-white px-10 text-[25px] my-5">
                  Inconsistencies across channels
                </h2>
                <p className="mt-2 px-14 text-white">
                  A growing number of channels and underlying technologies can
                  cause disjointed customer journeys. After a while customer
                  engagement decreases, impacting conversion rates.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-blue-950 p-4">
              <div className="mt-4">
                <div className="items-center justify-center pl-35">
                  <TbAlertHexagon
                    style={{ width: 70, height: 70, color: "white" }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-center text-white px-13 text-[25px] my-5">
                  Disconnect between business and IT
                </h2>
                <p className="mt-2 px-14 text-white">
                  Too often, digital projects are often output-driven. There is
                  not enough focus on delivering actual business outcomes,
                  aligning with the overall business objectives and striving to
                  meet KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage;
