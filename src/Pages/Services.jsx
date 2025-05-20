import React, { useEffect } from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";
import Collaborate from "../assets/Component/Services/Collaborate";
import Integrating from "../assets/Component/Services/Integrating";
import Talk from "../assets/Component/Home/Talk";
import Footer from "../assets/Component/Home/Footer";

// Strategize images
import Strategize1 from "../assets/images/strategize1.webp";
import Strategize2 from "../assets/images/strategize2.webp";
// DEsign images
import Design1 from "../assets/images/design1.webp";
import Design2 from "../assets/images/design2.webp";
import Design3 from "../assets/images/design3.png";

// Optimize images
import Optimize1 from "../assets/images/optimize1.jpg";
import Optimize2 from "../assets/images/optimize2.jpg";
import Optimize3 from "../assets/images/optimize3.jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />

      {/* Services Section */}
      <div className="bg-[#F3F7FB] w-[full] py-10 sm:py-16 md:py-[70px]">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[100%] xl:grid-cols-[30%_70%] gap-0 items-start px-4 sm:px-6 lg:px-8">
          {/* We Help */}
          <div className="w-full flex flex-col items-start pl-0 lg:static xl:sticky top-0 z-10 mb-2 sm:mb-20 md:pb-0 md:py-0 lg:top-[30%] lg-bg-transparent">
            <div className="font-normal sm:font-semibold text-3xl sm:text-3xl lg:text-4xl text-[40px] sm:text-[50px] md:text-[50px] lg:text-[45px] mb-4 sm:mb-8 md:mb-0 leading-tight hover:text-[#ed6c25] cursor-pointer">
              We can help you to
            </div>
          </div>

          {/* Work Details */}
          <div className="md:px-[15px] lg:pl-10 w-full">
            {workItems.map((item, index) => (
              <div key={index}>
                <div>
                  {item.heading && (
                    <h3 className="px-0 sm:px-5 pb-[34px] text-[35px]">
                      {item.heading}
                    </h3>
                  )}
                </div>
                <div
                  key={index}
                  className="bg-[#ddeaf7] rounded-[20px] flex flex-col sm:flex-col md:flex-row lg:flex-row relative overflow-hidden min-h-[320px] mb-10 group shadow-lg"
                >
                  <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%] z-10 p-5">
                    <div className="text-4xl font-serif md:font-normal sm:font-semibold mb-4 group-hover:text-[#ed6c25] group-hover:decoration-secondary group-hover:bg-[0%_100%] transition-all duration-300 ease-in-out">
                      {item.title}
                    </div>
                    <div className="text-lg text-black font-normal">
                      {item.description}
                    </div>
                    <button className="pt-10">
                      <p className="pt-2 cursor-pointer bg-[#084772] hover:bg-[#063251] text-white font-bold py-2 px-6 rounded-full">
                        {item.buttonText}
                      </p>
                    </button>
                  </div>

                  <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[50%]">
                    <img
                      src={item.image}
                      alt="ai image"
                      className="object-cover h-full shadow-lg z-0 scale-105 group-hover:scale-100 transition-transform duration-300 ease-in-out"
                      style={{
                        clipPath:
                          "polygon(54.806% .062%, 53.272% .408%, 51.853% 1.125%, 50.559% 2.116%, 49.402% 3.286%, 48.392% 4.539%, 47.541% 5.779%, 46.86% 6.911%, 46.36% 7.837%, 46.052% 8.464%, 45.947% 8.694%, -.036% 100%, 99.927% 99.938%, 100% 99.938%, 100% .041%, 54.806% .041%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* collaborate section */}
      <Collaborate />

      {/* Integrating */}
      <Integrating />

      {/* Talk */}
      <Talk />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;

// Hero Section Data
const Data = {
  linkText: "Services",
  link: "/Services",
  title: "Services",
  para: "Optimizing your Customer Experience Management (CXM) operations is key to provide great customer experiences. We offer a range of services to help you go beyond just implementing a Content Management System (CMS) and achieve real /business results./",
};

// Work Items Data
const workItems = [
  {
    heading: "Strategize",
    title: "Assess your current CXM ecosystem",
    description:
      "We help you evaluate your existing content processes and tooling, providing you with an improvement roadmap to drive your digital success.",
    buttonText: "Discover CX Assesment",
    image: Strategize1,
  },
  {
    title: "Select the right CXM tools and architecture",
    description:
      "In today’s fast-paced technology landscape, choosing the right tools can be challenging. We help you build a CXM ecosystem that fits your needs and strategy, without vendor bias.",
    buttonText: "Discover CX Technology Advisory",
    image: Strategize2,
  },
  {
    heading: "Design & Realize",
    title: "Implement your Digital Experience Platform",
    description:
      "We help you to architect and build your Digital Experience Platform (DXP), allowing your organization to manage engaging customer experiences at scale. We make sure your DXP aligns with your Content Supply Chain and seamlessly integrates with your customer touchpoints and enterprise services.",
    buttonText: "Discover DX Implementation",
    image: Design1,
  },
  {
    title: "Keep your CXM ecosystem running smoothly",
    description:
      "We provide full support and maintenance for your CXM platform, ensuring it operates smoothly and efficiently.",
    buttonText: "Discover Amexio Service Center",
    image: Design2,
  },
  {
    title: "Stabilize and optimize your AEM-based ecosystem",
    description:
      "A 3-stage approach to enhance the performance of your AEM-based DXP, improve its reliability, and prepare for future growth.",
    buttonText: "Discover AEM Stabilize and Optimize",
    image: Design3,
  },
  {
    heading: "Optmize",
    title: "Increase your content value using AI",
    description:
      "Struggling with managing ever-growing volumes of content? AI advancements like Large Language Models (LLM's) as implemented by ChatGPT offer new ways to extract value from large amounts of content, but how can your organization prepare itself for these kind of use cases?",
    buttonText: "Discover AI Content Readiness",
    image: Optimize1,
  },
  {
    title: "Optimize your content operations",
    description:
      "Don’t let change hold your organization back. We help your teams to adopt new workflows and technologies by applying tailored change management strategies, training, and support.",
    buttonText: "Discover CX Change Management",
    image: Optimize2,
  },
  {
    title: "Boost your conversion rates",
    description:
      "We help you find and apply strategies to turn visitors into loyal customers, boosting your sales and conversions.",
    buttonText: "Discover CX optimize",
    image: Optimize3,
  },
];
