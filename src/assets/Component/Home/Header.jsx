// import React from "react";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div className="bg-[#04273F]">
      <header>
        <div className="flex items-center justify-between px-8 py-6">
          <a href="/Home">
            <img src={logo} alt="Home Logo" style={{ width: "180px" }} />
          </a>
          <nav>
            <ul className="flex justify-center space-x-10">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/Services"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="/Work"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
