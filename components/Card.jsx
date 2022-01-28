import React, { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function Card({ project }) {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div className="flex items-center my-10">
      <div
        className="flex-1 relative"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <Image
          src={project.image}
          alt="Image of project"
          layout="fixed"
          className="rounded"
        />
        {!imageHovered && (
          <div className="absolute top-0 w-full h-full bg-black bg-opacity-50"></div>
        )}
      </div>

      <div className="flex-1 flex flex-col items-start justify-center gap-5 -ml-20 z-50">
        <h3 className="font-bold text-2xl mb-1 heading__seperator pb-2">
          {project.title}
        </h3>

        <p className="text-lg rounded-lg">{project.description}</p>

        <ul className="flex gap-5">
          {project.techs.map((tech) => (
            <li
              key={tech}
              className="text-gray-300 font-incon font-semibold text-lg"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          <a
            href={project.github}
            className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full hover:bg-gray-600 hover:text-white"
          >
            <FiGithub className="text-2xl" />
          </a>
          <a
            href={project.visit}
            className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full hover:bg-gray-600 hover:text-white"
          >
            <HiOutlineExternalLink className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
