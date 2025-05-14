import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <div className="flex w-[80%] sm:w-100 items-center justify-start px-10 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-white font-medium font-serif text-[25px]">
          <div>
            <a href="#">Services</a>
          </div>
          <div>
            <a href="#">Insights</a>
          </div>
          <div>
            <a href="#">Work</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">
              <TiSocialLinkedinCircular size={40} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <footer className="bg-[#031E30] flex-col flex sm:flex-col md:flex-col lg:flex-col xl:flex-row lg:justify-between md:justify-center items-center">
        <div>
          <h3 className="pl-10 py-3.5 text-white">
            Copyright © 2024 - AmeXio Fuse is part of
            <a href="#" className="underline px-2 hover:text-[#D16327]">
              AmeXio Group
            </a>
          </h3>
        </div>
        <div>
          <p className="text-white hover:text-[#D16327] underline pr-5">
            Legal Notices
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
