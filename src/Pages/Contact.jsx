import React from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";

const Contact = () => {
  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />
    </div>
  );
};

export default Contact;

const Data = {
  linkText: "Contact us",
  link: "/Contact",
  title: "Contact Us",
  para: "We’d love to talk about your content challenges! Let’s explore how we can remove obstacles from your content lifecycle and help your team manage and scale operations more effectively. Are you ready to unlock more /value/ from your content?",
};
