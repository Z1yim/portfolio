import React, { useState } from "react";
import { Link } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="pt-6 pr-10 h-20">
      <div className="md:hidden">
        <div className="flex justify-end">
          <button onClick={() => setShowMenu(true)}>
            <GiHamburgerMenu className="text-4xl" />
          </button>
        </div>
        {showMenu && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 ">
            <div className="flex justify-end h-20 pr-10">
              <button onClick={() => setShowMenu(false)}>
                <CgClose className="text-4xl" />
              </button>
            </div>
            <ul className="flex flex-col justify-center items-center gap-10 h-screen -m-20 text-xl">
              <li>
                <Link
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={750}
                  onClick={() => setShowMenu(false)}
                  className="hover:cursor-pointer navbar-hover py-2 text-gray-400 hover:text-gray-100"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={750}
                  onClick={() => setShowMenu(false)}
                  className="hover:cursor-pointer navbar-hover py-2 text-gray-400 hover:text-gray-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={750}
                  onClick={() => setShowMenu(false)}
                  className="hover:cursor-pointer navbar-hover py-2 text-gray-400 hover:text-gray-100"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* desktop */}
      <ul className="hidden md:flex gap-10 justify-end text-lg font-semibold">
        <li>
          <Link
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={50}
            duration={750}
            className="hover:cursor-pointer navbar-hover py-2 text-gray-400 hover:text-gray-100"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={750}
            className="hover:cursor-pointer navbar-hover py-2 text-gray-400 hover:text-gray-100"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={750}
            className="hover:cursor-pointer navbar-hover py-2 text-gray-400 hover:text-gray-100"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
