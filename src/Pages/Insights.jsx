import React, { useEffect } from "react";
import Header from "../assets/Component/Home/Header";
import ServiceHero from "../assets/Component/Services/ServiceHero";
import Compose from "../assets/Component/Insights/Compose";
import Blogs from "../assets/Component/Insights/Blogs";
import Footer from "../assets/Component/Home/Footer";
import Talk from "../assets/Component/Home/Talk";

const Insights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#04273F]">
      {/* Header */}
      <Header />

      {/* Hero */}
      <ServiceHero data={Data} />

      {/* Composability */}
      <Compose />

      {/* Blog Posts */}
      <Blogs />

      {/* Talks */}
      <Talk />

      {/* Footer */}
      <Footer />
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
