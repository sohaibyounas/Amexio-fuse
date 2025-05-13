import React, { useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-[#04273F] md:pt-10 lg:pt-0">
      <header>
        <div>
          <div className="flex items-center justify-between px-3 py-2 md:px-4 md:py-3 lg:px-8 lg:py-6">
            <div>
              <a href="/Home">
                <Logo />
              </a>
            </div>

            {/* icon */}
            <div className="block md:hidden">
              <FaBars style={{ color: "white", fontSize: 20 }} />
            </div>

            <nav className="hidden sm:hidden md:block">
              <ul className="flex justify-center md:space-x-6 lg:space-x-10">
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="/Services"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="/Work"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="/About"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/Contact"
                    className="text-white hover:text-blue-200 font-medium text-[22px]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
