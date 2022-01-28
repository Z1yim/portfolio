import React from "react";
import SectionHeading from "./SectionHeading";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <section className="section__padding">
      <SectionHeading heading="Contact Me" />
      <div className="my-10 flex items-center">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-purple-500 mb-4">Email</h3>
          <p className="text-gray-400 text-3xl">marcowong0829@gmail.com</p>
        </div>
        <ul className="flex-1 flex gap-10">
          <li>
            <a href="#">
              <AiOutlineLinkedin className="text-5xl transform transition hover:scale-125 duration-300 ease-out " />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineGithub className="text-5xl transform transition hover:scale-125 duration-300 ease-out " />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
