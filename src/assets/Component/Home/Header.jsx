import React, { useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#04273F] md:pt-10 lg:pt-0">
        <header>
          {/* Desktop Menu */}
          <div className="flex items-center justify-between px-3 sm:px-8 py-2 md:px-4 md:py-0 lg:px-8 lg:py-6 ">
            {/* logo */}
            <div className="sm:pt-4 md:pt-0">
              <Link to="/Home">
                <Logo />
              </Link>
            </div>

            {/* desktop icons */}
            <nav className="hidden md:block">
              <ul className="flex justify-center md:space-x-6 lg:space-x-10">
                <li>
                  <Link
                    to="/Services"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Insights"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Work"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    className="text-white hover:text-blue-200 font-bold text-[22px]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className="text-white hover:text-blue-200 font-medium text-[22px]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile icon */}
            <div className="block md:hidden ">
              {/* icon */}
              {isOpen ? (
                <RxCross2
                  size={25}
                  style={{ color: "white" }}
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  size={20}
                  style={{ color: "white" }}
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="block md:hidden bg-[#04273F] w-full h-full absolute right-0 top-20 z-20">
              <div className="block md:hidden px-7">
                <ul className="flex flex-col items-end gap-4 text-white font-bold text-[22px] hover:text-blue-200 animate-pulse">
                  <li>
                    <Link to="/Services">Services</Link>
                  </li>
                  <li>
                    <Link to="/Insights">Insights</Link>
                  </li>
                  <li>
                    <Link to="/Work">Work</Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
