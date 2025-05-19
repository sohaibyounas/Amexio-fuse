import React from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";

const Insights = () => {
  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />
    </div>
  );
};

export default Insights;

const Data = {
  linkText: "Insights",
  link: "/Insights",
  title: "Insights",
  para: "Our teams are /passionate/ passionate about solving challenges for our clients. Check out our posts to see how we approach problems, share our solutions, and offer practical insights from our work.",
};
