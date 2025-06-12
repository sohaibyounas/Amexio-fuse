import React from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";
import Content from "../assets/Component/Work/Content";
import Talk from "../assets/Component/Home/Talk";
import Footer from "../assets/Component/Home/Footer";

const Work = () => {
  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />
      {/* Hero */}
      <ServiceHero data={data} />

      {/* Content */}
      <Content />

      {/*lets talk */}
      <Talk />

      {/* Footer */}
      <Footer />
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
