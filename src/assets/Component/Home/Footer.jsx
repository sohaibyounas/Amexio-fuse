import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <div className="flex w-100 items-center justify-start px-10 py-10">
        <div className="grid grid-cols-3 gap-10 text-white font-medium font-serif text-[25px]">
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
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <footer className="bg-[#031E30] flex lg:justify-between md:justify-center items-center">
        <h3 className="pl-10 py-3.5 text-white">
          Copyright © 2024 - AmeXio Fuse is part of
          <a href="#" className="underline px-2 hover:text-[#D16327]">
            AmeXio Group
          </a>
        </h3>
        <p className="text-white hover:text-[#D16327] underline pr-5">
          Legal Notices
        </p>
      </footer>
    </>
  );
};

export default Footer;
