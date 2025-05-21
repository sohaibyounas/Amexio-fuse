import React, { useState } from "react";
import { Tab, initTWE } from "tw-elements";
import CollaborateImage from "../../images/collaborate.jpg"; // Import your image here

initTWE({ Tab });

const Collaborate = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // use state for tab scrolling
  // const [tabScroll, setTabScroll] = useState(0);
  // const handleTabScroll = (index) =>
  //   setTabScroll(index);

  return (
    <>
      <div className="w-full py-10 sm:py-16 md:py-[70px] text-white px-10 font-semibold">
        <div className="sm:px-10 md:px-10 lg:px-0 md:text-[45px]">
          <h1 className="sm:text-[45px] text-[55px] sm:font-bold md:font-semibold mb-4">
            How do we usually collaborate?
          </h1>
        </div>

        {/* Tabs navigation */}
        <div className="border-b border-gray-200 pt-10">
          {/* Left Scroll Button */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:hidden px-2"
            onClick={() => scrollTabs("left")}
          >
            <span className="text-white text-xl">&lsaquo;</span>
          </button>
          <nav
            className="-mb-0.5 flex justify-start lg:gap-x-20 md:gap-x-9 gap-x-5 overflow-x-auto whitespace-nowrap"
            role="tablist"
            aria-orientation="horizontal"
          >
            {tabTitles.map((title, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap md:text-[20px] lg:text-[24px] font-normal cursor-pointer
                ${
                  activeTab === index
                    ? "border-b-4 border-[#ED6C25] rounded-b transition-all duration-300 ease-in-out text-[#ED6C25] font-semibold"
                    : "border-transparent text-white hover:text-[#ED6C25]"
                }
              `}
              >
                {title}
              </button>
            ))}
          </nav>
          {/* Right Scroll Button */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:hidden px-2"
            onClick={() => scrollTabs("right")}
          >
            <span className="text-white text-xl">&rsaquo;</span>
          </button>
        </div>
  
        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10 w-full lg:gap-10">
          {/* active tab content */}
          <div className="mt-3 md:w-full lg:w-[50%] md:pl-2 order-2 lg:order-1">
            <p className="text-white text-[20px] mb-4">
              {tabContent[activeTab].para}
            </p>
            <p className="mb-4 font-normal text-[20px]">
              {tabContent[activeTab].services}
            </p>
            <ul className="list-disc ml-5 text-white text-[20px] space-y-1">
              {tabContent[activeTab].expertise.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Collaborate Image */}
          <div className="order-1 lg:order-2 w-full lg:w-[50%]">
            <img
              src={CollaborateImage}
              alt="CollaborateImage"
              className="rounded-[10px] w-[100%]"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Collaborate;

const tabTitles = [
  "Consultancy & Advisory",
  "Project-Based",
  "Manage Services",
  "Expert Staffing",
];

const tabContent = [
  {
    para: "We can bring industry expertise and technical know-how to the table to provide you with actionable insights and strategic recommendations. Whether you’re looking to optimize your current systems, implement new technologies, or develop a comprehensive CX strategy, we are able to provide technology-agnostic advice.",
    services: "Our expertise includes:",
    expertise: [
      "Strategy consulting",
      "Business analysis",
      "Information architecture",
      "Web Accessibility (IAAP certified)",
      "Search Engine Optimization (SEO)",
      "Change Management & User Adoption",
      "Enterprise architecture (composability, headless, ...)",
      "Cloud architecture",
    ],
  },
  {
    para: "Our project-based collaboration offers flexible and scalable solutions tailored to meet specific business goals. We engage in clearly defined scopes, deliverables, and timelines to ensure on-time and on-budget execution.",
    services: "Our project teams integrate the following expertise:",
    expertise: [
      "Requirement gathering & planning",
      "Agile project execution",
      "UX/UI design & prototyping",
      "Web & mobile development",
      "Testing & QA",
      "Deployment & launch support",
    ],
  },
  {
    para: "With managed services, we ensure the continued performance, updates, and scalability of your digital platforms. Our team handles maintenance, upgrades, and monitoring so you can focus on growth.",
    services: "Our Services include:",
    expertise: [
      "Continuous support & optimization",
      "Performance monitoring",
      "Security & compliance",
      "CMS & infrastructure updates",
      "Service Level Agreements (SLAs)",
    ],
  },
  {
    para: "Expert staffing allows you to augment your team with experienced professionals. Our experts integrate seamlessly into your workflow, bringing immediate value and flexibility.",
    services: "Some of the specialists we can provide:",
    expertise: [
      "Frontend & backend developers",
      "Solution architects",
      "Project managers & scrum masters",
      "QA & testing engineers",
      "Cloud & DevOps specialists",
    ],
  },
];
