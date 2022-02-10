import React from "react";
import SectionHeading from "./SectionHeading";
import Skill from "./Skill";
import { FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { skills } from "../constants/skills";

export default function Skills() {
  return (
    <div className="xl:flex justify-around border-white border-2 rounded-3xl shadow-lg shadow-zinc-600 my-10">
      {skills.map((skill) => (
        <Skill key={skill.id} prop={skill} />
      ))}
    </div>
  );
}
