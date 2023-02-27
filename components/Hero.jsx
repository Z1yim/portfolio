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

        <h3 className="text-3xl leading-loose">Web-Developer</h3>

        <CenterParagraph
          content="A motivated grauate from Queensland University of 
Technology. Majored in computer science and minored in 3D modelling, web development and UI/UX design. Experienced with JavaScript, Node.js, 
and other web development technologies. Looking for 
a front-end web developer position to design and 
develop web applications."
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
