import React from "react";
import { Link } from "react-scroll";
import CenterParagraph from "./CenterParagraph";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <header>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center section__padding -mt-20">
        <h2 className="text-7xl my-5 font-bold text-transparent bg-clip-text gradient">
          Marco Wong
        </h2>

        <h3 className="text-3xl leading-loose">Frontend Web-Developer</h3>

        <CenterParagraph
          content="I build interactive, responsive, accessible websites! I've started my
        web-dev journey a year ago and I am constantly learning new skills to
        become a better dev."
        />

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={750}
          className="gradient text-xl p-5 rounded-full mt-5 transform transition hover:scale-110 duration-300 ease-out hover:cursor-pointer"
        >
          Check out my projects
        </Link>
      </div>
    </header>
  );
}
