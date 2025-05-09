import React from "react";

const Discovers = () => {
  return (
    <>
      {/* Discover Services */}
      <div className="py-10 bg-[#F3F7FB]">
        <div className="flex items-center justify-between px-10">
          <h1 className="font-semibold text-[50px]">How we can help</h1>
          <button className="bg-blue-950 text-white rounded-[25px] p-3">
            Discover all our services
          </button>
        </div>
        <div className="text-[20px] ps-10 pr-80 py-10">
          <p>
            AmeXio Fuse brings into place a future-friendly Content Supply Chain
            at your organization, empowering your teams to manage and deliver
            content-driven customer experiences at massive scales. To maximize
            success, we strive for a strong partnership in which we fuse
            strategic advice, with design and implementation services. The
            outcome is a robust Digital Experience Platform you can rely on to
            curate, manage, and optimize your digital experiences in an
            efficient and cost-effective way.
          </p>
          <p className="text-[20px] pt-10 ">
            Turning your content into
            <span className="font-bold ps-1">value.</span>
          </p>
        </div>

        {/* Values */}
        <div className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {/* Item 1 - Strategize  */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                {/* Replace with your own SVG/icon  */}
                <svg
                  className="h-12 w-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l4 4-4 4-4-4 4-4zm0 6v12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategize</h3>
              <p className="text-black">
                Craft a tailored CX roadmap by identifying key challenges and
                prioritizing high-impact projects.
              </p>
            </div>

            {/* Item 2 - Design */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="h-12 w-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5l4 4-11 11H5.5v-4.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-black">
                Develop and validate customer journeys with high-quality design,
                prototyping, and testing.
              </p>
            </div>

            {/* Item 3 - Realize  */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="h-12 w-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3v18l7-5 7 5V3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Realize</h3>
              <p className="text-black">
                Seamlessly implement and integrate key technologies, processes
                and expertise to bring your vision to life.
              </p>
            </div>

            {/* Item 4 - Optimize */}
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg
                  className="h-12 w-12 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 17l6-6 4 4 8-8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimize</h3>
              <p className="text-black">
                Drive continuous improvement & maximize customer value through
                experimentation, personalization, and reducing frictions.
              </p>
            </div>
          </div>
        </div>

        {/* main div */}
      </div>
    </>
  );
};

export default Discovers;
