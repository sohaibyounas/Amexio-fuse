import React from "react";

const Discovers = () => {
  return (
    <>
      {/* Discover Services */}
      <div className="py-10 bg-[#F3F7FB]">
        <div className="flex flex-col justify-between text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-between w-full px-4 sm:px-6 lg:px-8 mb-8">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h1 className="font-normal text-[50px] hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                How we can help
              </h1>
            </div>
            {/* button */}
            <div className="w-full md:w-auto">
              <button className="bg-[#084772] text-white rounded-[25px] p-3 hover:text-[#ed6c25] hover:decoration-secondary bg-[0%_100%] transition-all duration-300 ease-in-out">
                Discover all our services
              </button>
            </div>
          </div>
          <div className="text-[20px] w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
            <p>
              AmeXio Fuse brings into place a future-friendly
              <span className="font-bold px-1">Content Supply Chain</span>
              at your organization, empowering your teams to manage and deliver
              content-driven customer experiences at massive scales. To maximize
              success, we strive for a strong partnership in which we
              <span className="font-bold px-1">fuse</span>
              strategic advice, with design and implementation services. The
              outcome is a robust
              <span className="font-bold px-1">
                Digital Experience Platform
              </span>
              you can rely on to curate, manage, and optimize your digital
              experiences in an Experience Platform
              <span className="font-bold px-1">efficient</span>
              and
              <span className="font-bold px-1">cost-effective</span> way.
            </p>
            <p className="text-[20px] pt-10 ">
              Turning your content into
              <span className="font-bold ps-1">value.</span>
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex flex-col items-center transition-transform duration-300"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-[#ed6c25] hover:decoration-secondary hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                  {step.title}
                </h3>
                <p className="text-black">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* main div */}
      </div>
    </>
  );
};

export default Discovers;

const steps = [
  {
    title: "Strategize",
    description:
      "Craft a tailored CX roadmap by identifying key challenges and prioritizing high-impact projects.",
    icon: (
      <svg
        className="h-12 w-12 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l4 4-4 4-4-4 4-4zm0 6v12"></path>
      </svg>
    ),
  },
  {
    title: "Design",
    description:
      "Develop and validate customer journeys with high-quality design, prototyping, and testing.",
    icon: (
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
    ),
  },
  {
    title: "Realize",
    description:
      "Seamlessly implement and integrate key technologies, processes and expertise to bring your vision to life.",
    icon: (
      <svg
        className="h-12 w-12 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M5 3v18l7-5 7 5V3z"></path>
      </svg>
    ),
  },
  {
    title: "Optimize",
    description:
      "Drive continuous improvement & maximize customer value through experimentation, personalization, and reducing frictions.",
    icon: (
      <svg
        className="h-12 w-12 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 17l6-6 4 4 8-8"></path>
      </svg>
    ),
  },
];
