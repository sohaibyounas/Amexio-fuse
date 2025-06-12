import React from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";
import WorkUs from "../assets/Component/About/WorkUs";
import Talk from "../assets/Component/Home/Talk";
import Footer from "../assets/Component/Home/Footer";

const About = () => {
  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />

      {/* Work With Us */}
      <WorkUs />

      {/* Lets Talk */}
      <Talk />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;

const Data = {
  linkText: "About Us",
  link: "/About",
  title: "About Us",
  para: "AmeXio Fuse is the /Customer Experience (CX)/ division of AmeXio Group, helping organizations streamline their /content operations/ and optimize their digital experiences. We strongly believe in cross-discipline collaboration as a key ingredient for successful digital projects. We essentially /fuse/ our teams with your organization, providing you with highly valuable advice for developing and refining your experience management operations.",
};
