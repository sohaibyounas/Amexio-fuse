import React, { useEffect } from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";
import Talk from "../assets/Component/Home/Talk";
import Footer from "../assets/Component/Home/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />

      {/* Lets Talk */}
      <Talk />

      {/* Footer */}
      <Footer />
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
