// import React from "react";
import "../assets/css/style.css";
import Header from "../assets/Component/Home/Header";
import Hero from "../assets/Component/Home/Hero";
import Recent from "../assets/Component/Home/Recent";
import Manage from "../assets/Component/Home/Manage";
import Discovers from "../assets/Component/Home/Discovers";
import Insights from "../assets/Component/Home/Insights";
import Technology from "../assets/Component/Home/Technology";
import Talk from "../assets/Component/Home/Talk";
import Footer from "../assets/Component/Home/Footer";

const Home = () => {
  return (
    <div className="bg-[#04273F]">
      {/* header */}
      <Header />

      {/* hero section */}
      <Hero />
      
      {/* Recent Work Section */}
      <Recent />

      {/* Manage Content Section */}
      <Manage />

      {/* Discover Services Section */}
      <Discovers />

      {/* Insights Section */}
      <Insights />

      {/* Core Technologies Section */}
      <Technology />

      {/* Let's Talk Section */}
      <Talk />

      {/* footer Section */}
      <Footer />

    </div>
  );
};

export default Home;
