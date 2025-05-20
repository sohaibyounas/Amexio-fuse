import React, { useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // uselocation for active link
  const location = useLocation();
  

  return (
    <>
      <div className="bg-[#04273F] md:pt-10 lg:pt-0">
        <header>
          {/* Desktop Menu */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-5 md:px-4 md:py-0 lg:px-8 lg:py-6 ">
            {/* logo */}
            <div className="sm:pt-4 md:pt-0">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* desktop icons */}
            <nav className="hidden md:block">
              <ul className="flex justify-center md:space-x-6 lg:space-x-10">
                {navItems.map((item) => (
                <li key={item.path} className="text-center">
                  <Link
                    to={item.path}
                    className="text-white font-bold text-[20px] relative hover:text-blue-300"
                  >
                    {item.name}
                    {/* Dot under current menu */}
                    {location.pathname === item.path && (
                      <span className="block w-full h-[2px] bg-[#ED6C25] rounded-full mx-auto mt-1"></span>
                    )}
                  </Link>
                </li>
              ))}
              </ul>
            </nav>

            {/* Mobile icon */}
            <div className="block md:hidden ">
              {/* icon */}
              {isOpen ? (
                <RxCross2
                  size={30}
                  style={{ color: "white" }}
                  onClick={toggleMenu}
                />
              ) : (
                <FaBars
                  size={25}
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

const navItems = [
    { name: "Services", path: "/Services" },
    { name: "Insights", path: "/Insights" },
    { name: "Work", path: "/Work" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];