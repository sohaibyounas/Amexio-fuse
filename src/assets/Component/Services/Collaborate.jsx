import React, { useState } from "react";
import { Tab, initTWE } from "tw-elements";
import CollaborateImage from "../../images/collaborate.jpg"; // Import your image here

initTWE({ Tab });

const Collaborate = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="w-full py-10 sm:py-16 md:py-[70px] text-white lg:px-10 text-[30px] font-semibold">
        <h1>How do we usually collaborate?</h1>
        {/* Tabs navigation */}
        {/* Tabs */}
        <div className="border-b border-gray-200 pt-10">
          <nav
            className="-mb-0.5 flex justify-start gap-x-20"
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
                className={`py-4 px-1 inline-flex items-center gap-x-2 border-b-2 text-sm whitespace-nowrap text-[24px] font-normal cursor-pointer
                ${
                  activeTab === index
                    ? "border-b-4 border-[#ED6C25] rounded-b-lg transition-all duration-300 ease-in-out text-[#ED6C25] font-semibold"
                    : "border-transparent text-white hover:text-[#ED6C25]"
                }
              `}
              >
                {title}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10">
          {/* active tab content */}
          <div className="mt-3 w-[50%]">
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
          <div>
            <img src={CollaborateImage} alt="CollaborateImage" className="rounded-[10px]" />
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
