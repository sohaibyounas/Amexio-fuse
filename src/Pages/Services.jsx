import React from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";

const Services = () => {
  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />
    </div>
  );
};

export default Services;

const Data = {
  linkText: "Services",
  link: "/Services",
  title: "Services",
  para: "For over 20 years, we have been /partnering/ with our ambitious clients, turning their content into value through highly scalable content platforms.",
};
