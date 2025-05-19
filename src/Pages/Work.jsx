import React from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";

const Work = () => {
  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />
      {/* Hero */}
      <ServiceHero data={data} />
    </div>
  );
};

export default Work;

const data = {
  linkText: "Our work",
  link: "/Work",
  title: "Our work",
  para: "Our teams are /passionate/ passionate about solving challenges for our clients. Check out our posts to see how we approach problems, share our solutions, and offer practical insights from our work.",
};
